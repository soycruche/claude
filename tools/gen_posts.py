import csv, html, os, re, subprocess, sys, unicodedata

CATEGORY_COLORS = ["#F8991B", "#48B9E3", "#005BAA", "#E6C420", "#7A8B3C",
                   "#3C8577", "#7A4870", "#9C3F55", "#EA3524", "#B97A2B"]
CHROME = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome'

def slug(s):
    s = unicodedata.normalize('NFKD', s.strip()).encode('ascii', 'ignore').decode()
    return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')

def curly(s):
    out, open_q = [], True
    for ch in s:
        if ch == '"':
            out.append('“' if open_q else '”'); open_q = not open_q
        else:
            out.append(ch)
    return ''.join(out)

def load_rows(csv_path):
    rows, colors = [], {}
    with open(csv_path, newline='', encoding='utf-8') as f:
        for r in csv.DictReader(f):
            cat = (r['categoria'] or '').strip()
            item = (r['item'] or '').strip()
            if not cat or not item:
                continue
            if cat not in colors:
                colors[cat] = CATEGORY_COLORS[len(colors) % len(CATEGORY_COLORS)]
            r['_color'] = colors[cat]
            rows.append(r)
    return rows

def find_assets(assets_dir, item):
    key = slug(item)
    photo = logo = None
    for fn in os.listdir(assets_dir):
        stem, ext = os.path.splitext(fn)
        if ext.lower() not in ('.jpg', '.jpeg', '.png', '.webp'):
            continue
        s = slug(stem)
        if s == key:
            photo = fn
        elif s in (key + '-logo',):
            logo = fn
    return photo, logo

def logo_html(assets_dir, logo):
    if not logo:
        return ''
    out = subprocess.run(['identify', '-format', '%w %h', os.path.join(assets_dir, logo)], capture_output=True, text=True).stdout.split()
    w, h = int(out[0]), int(out[1])
    cls = 'post__logo' if abs(w - h) / max(w, h) < 0.1 else 'post__logo post__logo--box'
    return f'<img class="{cls}" src="assets/{html.escape(logo)}" alt="">'

def render(row, assets_dir, workdir, out_jpg):
    photo, logo = find_assets(assets_dir, row['item'])
    if not photo:
        print('SIN FOTO:', row['item']); return False
    tpl = open(os.path.join(workdir, 'post_template.html'), encoding='utf-8').read()
    page = (tpl.replace('%%COLOR%%', row['_color'])
               .replace('%%PHOTO%%', 'assets/' + html.escape(photo))
               .replace('%%HORARIO%%', html.escape(' '.join(row['horario'].split())))
               .replace('%%TITULO%%', html.escape(curly(' '.join(row['item'].split()))))
               .replace('%%SUBTITULO%%', html.escape(curly(' '.join(((row.get('subtitulo_post') or '').strip() or row['item_subtitulo'] or '').split()))))
               .replace('%%LOGO%%', logo_html(assets_dir, logo)))
    page_path = os.path.join(workdir, '_post.html')
    open(page_path, 'w', encoding='utf-8').write(page)
    raw = os.path.join(workdir, '_raw.png')
    subprocess.run([CHROME, '--headless', '--disable-gpu', '--no-sandbox', '--hide-scrollbars',
                    '--allow-file-access-from-files', '--virtual-time-budget=5000',
                    '--window-size=1200,1500', f'--screenshot={raw}',
                    'file://' + os.path.abspath(page_path)], capture_output=True)
    subprocess.run(['convert', raw, '-crop', '1080x1350+0+0', '+repage', '-quality', '92', out_jpg], check=True)
    print('OK', out_jpg, '| logo:', logo or '(sin logo)')
    return True

if __name__ == '__main__':
    csv_path, workdir, outdir = sys.argv[1], sys.argv[2], sys.argv[3]
    only = sys.argv[4:]
    os.makedirs(outdir, exist_ok=True)
    for row in load_rows(csv_path):
        if only and slug(row['item']) not in {slug(o) for o in only}:
            continue
        render(row, os.path.join(workdir, 'assets'), workdir, os.path.join(outdir, slug(row['item']) + '.jpg'))
