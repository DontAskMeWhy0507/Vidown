// Module 523 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  const n = r(438);
  const o = r(524);
  const i = r(160);
  t.cache = new o();
  t.getTokens = (e, r) => t.cache.getOrSet(e, async () => {
    const n = await i.exposedMiniget(e, r).text();
    const o = t.extractActions(n);
    if (!o || !o.length) {
      throw Error("Could not extract signature deciphering actions");
    }
    t.cache.set(e, o);
    return o;
  });
  t.decipher = (e, t) => {
    t = t.split("");
    for (let r = 0, n = e.length; r < n; r++) {
      let n;
      let o = e[r];
      switch (o[0]) {
        case "r":
          t = t.reverse();
          break;
        case "w":
          n = ~~o.slice(1);
          t = a(t, n);
          break;
        case "s":
          n = ~~o.slice(1);
          t = t.slice(n);
          break;
        case "p":
          n = ~~o.slice(1);
          t.splice(0, n);
      }
    }
    return t.join("");
  };
  const a = (e, t) => {
    const r = e[0];
    e[0] = e[t % e.length];
    e[t] = r;
    return e;
  };
  const s = "[a-zA-Z_\\$][a-zA-Z_0-9]*";
  const c = "(?:'[^'\\\\]*(:?\\\\[\\s\\S][^'\\\\]*)*'|\"[^\"\\\\]*(:?\\\\[\\s\\S][^\"\\\\]*)*\")";
  const u = `(?:${s}|${c})`;
  const l = `(?:\\.${s}|\\[${c}\\])`;
  const d = ":function\\(a\\)\\{(?:return )?a\\.reverse\\(\\)\\}";
  const p = ":function\\(a,b\\)\\{return a\\.slice\\(b\\)\\}";
  const f = ":function\\(a,b\\)\\{a\\.splice\\(0,b\\)\\}";
  const h = ":function\\(a,b\\)\\{var c=a\\[0\\];a\\[0\\]=a\\[b(?:%a\\.length)?\\];a\\[b(?:%a\\.length)?\\]=c(?:;return a)?\\}";
  const m = new RegExp(`var (${s})=\\{((?:(?:${u}${d}|${u}${p}|${u}${f}|${u}${h}),?\\r?\\n?)+)\\};`);
  const g = new RegExp(`function(?: ${s})?\\(a\\)\\{a=a\\.split\\((?:''|"")\\);\\s*((?:(?:a=)?[a-zA-Z_\\$][a-zA-Z_0-9]*${l}\\(a,\\d+\\);)+)return a\\.join\\((?:''|"")\\)\\}`);
  const v = new RegExp(`(?:^|,)(${u})${d}`, "m");
  const y = new RegExp(`(?:^|,)(${u})${p}`, "m");
  const _ = new RegExp(`(?:^|,)(${u})${f}`, "m");
  const b = new RegExp(`(?:^|,)(${u})${h}`, "m");
  t.extractActions = e => {
    const t = m.exec(e);
    const r = g.exec(e);
    if (!t || !r) {
      return null;
    }
    const n = t[1].replace(/\$/g, "\\$");
    const o = t[2].replace(/\$/g, "\\$");
    const i = r[1].replace(/\$/g, "\\$");
    let a = v.exec(o);
    const s = a && a[1].replace(/\$/g, "\\$").replace(/\$|^'|^"|'$|"$/g, "");
    a = y.exec(o);
    const c = a && a[1].replace(/\$/g, "\\$").replace(/\$|^'|^"|'$|"$/g, "");
    a = _.exec(o);
    const u = a && a[1].replace(/\$/g, "\\$").replace(/\$|^'|^"|'$|"$/g, "");
    a = b.exec(o);
    const l = a && a[1].replace(/\$/g, "\\$").replace(/\$|^'|^"|'$|"$/g, "");
    const d = `(${[s, c, u, l].join("|")})`;
    const p = new RegExp(`(?:a=)?${n}(?:\\.${d}|\\['${d}'\\]|\\["${d}"\\])\\(a,(\\d+)\\)`, "g");
    const f = [];
    while ((a = p.exec(i)) !== null) {
      switch (a[1] || a[2] || a[3]) {
        case l:
          f.push("w" + a[4]);
          break;
        case s:
          f.push("r");
          break;
        case c:
          f.push("s" + a[4]);
          break;
        case u:
          f.push("p" + a[4]);
      }
    }
    return f;
  };
  t.setDownloadURL = (e, t) => {
    let r;
    if (!e.url) {
      return;
    }
    r = e.url;
    try {
      r = decodeURIComponent(r);
    } catch (e) {
      return;
    }
    const n = new URL(r);
    n.searchParams.set("ratebypass", "yes");
    if (t) {
      n.searchParams.set(e.sp || "signature", t);
    }
    e.url = n.toString();
  };
  t.decipherFormats = async (e, r, o) => {
    let i = {};
    let a = await t.getTokens(r, o);
    e.forEach(e => {
      let r = e.signatureCipher || e.cipher;
      if (r) {
        Object.assign(e, n.parse(r));
        delete e.signatureCipher;
        delete e.cipher;
      }
      const o = a && e.s ? t.decipher(a, e.s) : null;
      t.setDownloadURL(e, o);
      i[e.url] = e;
    });
    return i;
  };
};
