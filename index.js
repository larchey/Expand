const ns = 'http://www.w3.org/2000/svg'
var svg = document.createElementNS(ns, 'svg');
svg.setAttribute('viewBox', '0,0,1000,1000')
svg.setAttribute('xmlns', ns)//is this needed?
svg.setAttribute('id', "hideme")
var defs = document.createElementNS(ns, 'defs');//contain pattern
var bg = document.createElementNS(ns, "rect")
bg.setAttribute("width", "100%")
bg.setAttribute("height", "100%")
console.log(fxhash)
bg.setAttribute("fill", `rgba(${255 * fxrand()},${255 * fxrand()},${255 * fxrand()},${fxrand() < .7 ? .2 : fxrand() / 2})`)
inv = fxrand() < .02 ? true : false;
document.body.appendChild(svg);

if (inv || fxrand() < .1) bg.setAttribute("fill", "#000")
svg.appendChild(bg)

wi = 1000
hi = wi
xamnt = fxrand() < .6 ? 100 : Math.floor(30 * fxrand() + 3)
if (xamnt % 2 == 0) xamnt += 1
yamnt = Math.floor(10 * fxrand() + 3)
if (yamnt % 2 == 0) yamnt += 1
iter = 0
let ppsx = fxrand()//this determines the number of strokes in patter
let ppsd = fxrand()
if (ppsd < .5) pps = ppsx < .1 ? 3 : ppsx < .3 ? 4 : ppsx < .5 ? 10 : ppsx < .6 ? 100 : ppsx < .65 ? 1000 : ppsx < .85 ? 50 * fxrand() : 100 * fxrand()//sides in the pattern, add variety here
sclfx = fxrand()
scl = sclfx < .05 ? .5 : sclfx < .8 ? 5 : sclfx < .9 ? 10 : 100//color scale

let [r, g, b] = [fxrand() < .5 ? true : false, fxrand() < .5 ? true : false, fxrand() < .5 ? true : false]
if (!r && !g && !b) {
    [r, g, b] = [fxrand() < .5 ? true : false, fxrand() < .5 ? true : false, fxrand() < .5 ? true : false]
}
nocolf = fxrand()
let [rn, gn, bn] = nocolf < .03 ? [true, true, false] : nocolf < .06 ? [true, false, true] : nocolf < .09 ? [false, true, true] : nocolf < .15 ? [false, false, true] : nocolf < .2 ? [true, false, false] : nocolf < .25 ? [false, true, false] : [false, false, false];

crfx = fxrand()
cr = crfx < .1 ? (3 * fxrand() + 40) : 100
rc = fxrand() < .5 ? 230 : fxrand() * 150 + 100
gc = fxrand() < .5 ? 230 : fxrand() * 150 + 100
bc = fxrand() < .5 ? 230 : fxrand() * 150 + 100
console.log(r, g, b, rc, gc, bc)

pw = fxrand() * 300 + 1
ph = fxrand() * 300 + 1

if (fxrand() < .4) pw = ph

if (crfx < .7 && xamnt < 20) xamnt *= (100 * fxrand() + 1)
if (xamnt > 300) fxrand() < .3 ? xamnt -= xamnt / 2 * fxrand() : xamnt = xamnt;
crfxval = 300 * fxrand()
console.log(crfx, "crfx")
crfxadj = fxrand()
if(xamnt>100)xamnt = 100
for (var x = wi / xamnt; x < wi; x += wi / xamnt) {
    for (var y = hi / yamnt; y < hi; y += hi / yamnt) {
        rr = r ? rc : 230 * fxrand()
        rm = rr / scl
        bb = b ? gc : 255 * fxrand()
        bm = bb / scl
        gg = g ? bc : 230 * fxrand()
        gm = gg / scl
        col = `rgb(${rn ? 0 : mapNum(x, 0, wi, rm, rr)},${gn ? 0 : mapNum(y, 0, hi, gm, gg)},${bn ? 0 : mapNum(((x + y) / 2), 0, (wi + hi) / 2, bm, bb)})`
        createPattern(`pat${iter}`, col, 100 * fxrand(), 100 * fxrand(), `${fxrand() < .2 ? pw : (fxrand() * 50)}%`, `${fxrand() < .2 ? ph : (fxrand() * 50)}%`)
        cr = crfx < .3 ? (crfxadj < .5 ? fxrand() * crfxval + 20 : crfxval) : mapNum(fxrand(), 0, 1, 50, 1000)

        svCirc(x, y, cr, `url('#pat${iter}')`, "none", "none")
        iter++
        // if(x>wi-(wi/xamnt)&&y>hi-(hi/yamnt)){

        // }
    }
}

dothese = ["no....", "no", "maybe", "idk", "lol no", "probably", "dont ask me"]
bub = ["no", "whats that", "that was a bad question", ":(", "o0Oo"]
window.$fxhashFeatures = {
    "inverse": inv,
    "xamnt": Math.floor(xamnt),
    "yamnt": Math.floor(yamnt),
    "palette? idk if this is accurate lol": `${r ? 'r' : ""}${g ? 'g' : ""}${b ? 'b' : ""}`,
    "another palette? these might be more accurate i think": `${!rn ? 'r' : ""}${!gn ? 'g' : ""}${!bn ? 'b' : ""}`,
    "do some of these show up blank?": dothese[Math.floor(fxrand() * dothese.length)],
    "how r u": "im good hbu",
    "are these bubbles": bub[Math.floor(fxrand() * bub.length)],
}
console.log(window.$fxhashFeatures)


//last things   
svg.appendChild(defs);
document.body.appendChild(svg);

//custom cvg functions
function svCirc(x, y, r, fill, stroke, strokeWidth) {//stroke can be a color or pattern
    c = document.createElementNS(ns, 'circle');
    c.setAttribute('cx', x)
    c.setAttribute('cy', y)
    c.setAttribute('r', r)
    c.setAttribute('fill', fill)
    c.setAttribute('stroke-width', strokeWidth)
    c.setAttribute('stroke', stroke)

    svg.appendChild(c)
}

function createPattern(id, col, pw, ph, wid, hei) {//name of pattern, viewbox stuff, different width?
    pattern = document.createElementNS(ns, 'pattern');
    pattern.setAttribute('id', id)//basically the pattern name
    pattern.setAttribute('viewBox', `0,0,${pw},${ph}`)
    pattern.setAttribute('width', wid)
    pattern.setAttribute('height', hei)
    pattern.setAttribute('fill', col)
    if (inv) pattern.setAttribute('fill', "")
    if (inv) fxrand() < .5 ? pattern.setAttribute("stroke", "#fff") : pattern.setAttribute("stroke", "#000")
    ///fill pattern below
    pp = []
    pps = fxrand() < .05 ? 10 : fxrand() < .05 ? 100 : 1000
    for (i = 0; i < pps; i++)pp.push(10 * fxrand(), 10 * fxrand())
    createPolygon(pp, pattern)
    //end pattern fill
    defs.appendChild(pattern)
}
function createPolygon(points, parent) {
    poly = document.createElementNS(ns, 'polygon');
    poly.setAttribute('points', points)

    parent.appendChild(poly)

}
function mapNum(n, inn, inx, oun, oux) {
    return (n - inn) * (oux - oun) / (inx - inn) + oun;
}
