// Arma un PSD con capas a partir de la página de un posteo (_post.html).
// Uso: node tools/build_psd.js <post.html> <salida.psd>
const fs = require('fs');
const path = require('path');
const os = require('os');
const { execFileSync } = require('child_process');
const { writePsdBuffer } = require('ag-psd');

const CHROME = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const W = 1080, H = 1350;
const FONT_BEBAS = 'BebasNeue-Regular';
const FONT_GEORGIA_BOLD = 'Georgia-Bold';

const [pagePath, outPath] = process.argv.slice(2);
const pageDir = path.dirname(path.resolve(pagePath));
const page = fs.readFileSync(pagePath, 'utf8');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'psd-'));

function chrome(args) {
  return execFileSync(CHROME, ['--headless', '--disable-gpu', '--no-sandbox', '--hide-scrollbars',
    '--allow-file-access-from-files', '--virtual-time-budget=5000', '--window-size=1200,1500', ...args],
    { stdio: ['ignore', 'pipe', 'ignore'], maxBuffer: 64 * 1024 * 1024 }).toString();
}

function variantFile(name, extraHead, extraBody = '') {
  const html = page.replace('</head>', extraHead + '</head>').replace('</body>', extraBody + '</body>');
  const f = path.join(pageDir, `_variant_${name}.html`);
  fs.writeFileSync(f, html);
  return f;
}

function rgba(png, crop) {
  const args = [png];
  if (crop) args.push('-crop', crop, '+repage');
  args.push('-depth', '8', 'rgba:-');
  return execFileSync('convert', args, { maxBuffer: 64 * 1024 * 1024 });
}

// Renderiza solo los elementos indicados, con fondo transparente, y devuelve
// la capa recortada a su contenido.
function isolate(name, showSelector, extraCss = '') {
  const css = `<style>
    html, body, .post { background: transparent !important; }
    .post *, .post { visibility: hidden !important; }
    ${showSelector} { visibility: visible !important; }
    ${extraCss}
  </style>`;
  const f = variantFile(name, css);
  const raw = path.join(tmp, name + '_raw.png');
  chrome(['--default-background-color=00000000', `--screenshot=${raw}`, 'file://' + f]);
  const full = path.join(tmp, name + '.png');
  execFileSync('convert', [raw, '-crop', `${W}x${H}+0+0`, '+repage', full]);
  fs.unlinkSync(f);
  // El borde negro evita que el recorte tome como fondo un elemento que toca las esquinas (la foto).
  const info = execFileSync('convert', [full, '-alpha', 'extract', '-threshold', '0',
    '-bordercolor', 'black', '-border', '1', '-format', '%@', 'info:']).toString().trim();
  const m = info.match(/(\d+)x(\d+)\+(\d+)\+(\d+)/);
  const [w, h] = m.slice(1, 3).map(Number);
  const [x, y] = m.slice(3, 5).map(n => Number(n) - 1);
  return { left: x, top: y, imageData: { width: w, height: h, data: new Uint8ClampedArray(rgba(full, `${w}x${h}+${x}+${y}`)) } };
}

// Datos de los textos tal como quedaron después del ajuste automático.
const probe = `<script>
(function wait() {
  if (!document.body.hasAttribute('data-ready')) return setTimeout(wait, 50);
  const out = {};
  const describe = (sel) => {
    const el = document.querySelector(sel);
    const cs = getComputedStyle(el);
    const node = el.firstChild;
    const r = document.createRange();
    const lines = [];
    let cur = null;
    for (let i = 0; i < node.length; i++) {
      r.setStart(node, i); r.setEnd(node, i + 1);
      const rect = r.getClientRects()[0];
      if (!rect) continue;
      if (!cur || Math.abs(rect.top - cur.top) > 2) { cur = { top: rect.top, left: rect.left, text: '' }; lines.push(cur); }
      cur.text += node.data[i];
    }
    const mark = document.createElement('span');
    mark.style.cssText = 'display:inline-block;width:0;height:0;vertical-align:baseline';
    el.appendChild(mark);
    const lastBaseline = mark.getBoundingClientRect().top;
    el.removeChild(mark);
    const fs = parseFloat(cs.fontSize);
    const lh = cs.lineHeight === 'normal' ? fs : parseFloat(cs.lineHeight);
    return {
      lines: lines.map(l => l.text.trim()), left: lines[0].left,
      baseline: lastBaseline - (lines.length - 1) * lh,
      fontSize: fs, lineHeight: lh,
      letterSpacing: cs.letterSpacing === 'normal' ? 0 : parseFloat(cs.letterSpacing),
      color: cs.color,
    };
  };
  out.horario = describe('.post__badge');
  out.titulo = describe('.post__titulo');
  out.subtitulo = document.querySelector('.post__subtitulo').textContent.trim() ? describe('.post__subtitulo') : null;
  out.fecha = describe('.post__fecha');
  out.web = describe('.post__web');
  const pre = document.createElement('pre');
  pre.id = 'probe';
  pre.textContent = 'PRO' + 'BE:' + JSON.stringify(out) + ':E' + 'ND';
  document.body.appendChild(pre);
})();
</script>`;
const probeFile = variantFile('probe', '', probe);
const dom = chrome(['--dump-dom', 'file://' + probeFile]);
fs.unlinkSync(probeFile);
const data = JSON.parse(dom.match(/PROBE:(.*?):END/s)[1].replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"'));

function color(css) {
  const [r, g, b] = css.match(/\d+(\.\d+)?/g).map(Number);
  return { r, g, b };
}

function textLayer(name, d, font, raster) {
  return {
    name,
    ...raster,
    text: {
      text: d.lines.map(l => l.toLocaleUpperCase('es')).join('\n'),
      transform: [1, 0, 0, 1, d.left, d.baseline],
      style: {
        font: { name: font },
        fontSize: d.fontSize,
        fillColor: color(d.color),
        tracking: Math.round(d.letterSpacing / d.fontSize * 1000),
        autoLeading: false,
        leading: d.lineHeight,
      },
      paragraphStyle: { justification: 'left' },
    },
  };
}

const composite = path.join(tmp, 'composite.png');
const compFile = variantFile('composite', '');
chrome([`--screenshot=${composite}`, 'file://' + compFile]);
fs.unlinkSync(compFile);
execFileSync('convert', [composite, '-crop', `${W}x${H}+0+0`, '+repage', composite]);

const children = [
  { name: 'Fondo', left: 0, top: 0, imageData: { width: W, height: H, data: new Uint8ClampedArray(W * H * 4).fill(255) } },
  { name: 'Foto', ...isolate('foto', '.post__photo') },
  { name: 'Barrita de colores', ...isolate('barrita', '.post__stripe') },
  { name: 'Caja horario', ...isolate('caja', '.post__badge', '.post__badge { color: transparent !important; }') },
  textLayer('Horario', data.horario, FONT_BEBAS, isolate('horario', '.post__badge', '.post__badge { background: transparent !important; }')),
  textLayer('Título', data.titulo, FONT_BEBAS, isolate('titulo', '.post__titulo')),
];
if (data.subtitulo) children.push(textLayer('Subtítulo', data.subtitulo, FONT_GEORGIA_BOLD, isolate('subtitulo', '.post__subtitulo')));
children.push(
  textLayer('Fecha', data.fecha, FONT_BEBAS, isolate('fecha', '.post__fecha')),
  { name: 'Punto rojo', ...isolate('punto', '.post__sep') },
  textLayer('Web', data.web, FONT_BEBAS, isolate('web', '.post__web')),
);
if (page.includes('class="post__logo')) children.push({ name: 'Logo participante', ...isolate('logo', '.post__logo') });
children.push({ name: 'Logo Te Conozco Chacarita', ...isolate('tcc', '.post__tcc') });

const psd = {
  width: W, height: H,
  imageData: { width: W, height: H, data: new Uint8ClampedArray(rgba(composite)) },
  children,
};
fs.writeFileSync(outPath, writePsdBuffer(psd, { invalidateTextLayers: true, generateThumbnail: false }));
fs.rmSync(tmp, { recursive: true, force: true });
console.log('PSD', outPath, children.map(c => c.name).join(' | '));
