import subprocess, sys

def load(path):
    w, h = 1080, 1350
    raw = subprocess.run(['convert', path, '-crop', '1080x1350+0+0', '+repage', '-depth', '8', 'rgb:-'], capture_output=True).stdout
    return w, h, raw

def px(raw, w, x, y):
    i = (y * w + x) * 3
    return raw[i], raw[i+1], raw[i+2]

def bbox(raw, w, x0, y0, x1, y1, pred):
    xs, ys = [], []
    for y in range(y0, y1):
        for x in range(x0, x1):
            if pred(*px(raw, w, x, y)):
                xs.append(x); ys.append(y)
    if not xs: return None
    return min(xs), min(ys), max(xs), max(ys)

def row_bands(raw, w, x0, y0, x1, y1, pred, min_gap=3):
    rows = []
    for y in range(y0, y1):
        if any(pred(*px(raw, w, x, y)) for x in range(x0, x1)):
            rows.append(y)
    bands = []
    for y in rows:
        if bands and y - bands[-1][1] <= min_gap:
            bands[-1][1] = y
        else:
            bands.append([y, y])
    return bands

dark = lambda r, g, b: r < 90 and g < 90 and b < 90
blue = lambda r, g, b: r < 150 and b > 170 and g > 120
white = lambda r, g, b: r > 200 and g > 200 and b > 200

path = sys.argv[1]
w, h, raw = load(path)
print('==', path)
bb = bbox(raw, w, 0, 850, 400, 1020, blue)
print('badge box', bb, 'size', (bb[2]-bb[0]+1, bb[3]-bb[1]+1))
tb = bbox(raw, w, bb[0]+3, bb[1]+3, bb[2]-3, bb[3]-3, white)
print('badge text', tb, 'size', (tb[2]-tb[0]+1, tb[3]-tb[1]+1))
print('  pad top', tb[1]-bb[1], 'bottom', bb[3]-tb[3], 'left', tb[0]-bb[0], 'right', bb[2]-tb[2])
bands = row_bands(raw, w, 0, bb[3]+2, 770, 1340, dark)
for b in bands:
    bx = bbox(raw, w, 0, b[0], 770, b[1]+1, dark)
    print('text band y', b, 'height', b[1]-b[0]+1, 'x', (bx[0], bx[2]), 'width', bx[2]-bx[0]+1)

bc = bbox(raw, w, 700, 870, 1080, 1200, blue)
print('circle', bc, 'size', (bc[2]-bc[0]+1, bc[3]-bc[1]+1))
tl = bbox(raw, w, 700, 1180, 1080, 1345, dark)
print('tcc logo', tl, 'size', (tl[2]-tl[0]+1, tl[3]-tl[1]+1))
