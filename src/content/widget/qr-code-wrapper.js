// Module 526 - Savior Mobile download QR code generator wrapper
export default function(t, e, r) {
  const n = r(544), i = r(545), o = r(562), a = r(563);
  function s(t2, e2, r2, o2, a2) {
    const s2 = [].slice.call(arguments, 1), u = s2.length, c = "function" == typeof s2[u - 1];
    if (!c && !n()) throw new Error("Callback required as last argument");
    if (!c) {
      if (u < 1) throw new Error("Too few arguments provided");
      return 1 === u ? (r2 = e2, e2 = o2 = void 0) : 2 !== u || e2.getContext || (o2 = r2, r2 = e2, e2 = void 0), new Promise((function(n2, a3) {
        try {
          const a4 = i.create(r2, o2);
          n2(t2(a4, e2, o2));
        } catch (t3) {
          a3(t3);
        }
      }));
    }
    if (u < 2) throw new Error("Too few arguments provided");
    2 === u ? (a2 = r2, r2 = e2, e2 = o2 = void 0) : 3 === u && (e2.getContext && void 0 === a2 ? (a2 = o2, o2 = void 0) : (a2 = o2, o2 = r2, r2 = e2, e2 = void 0));
    try {
      const n2 = i.create(r2, o2);
      a2(null, t2(n2, e2, o2));
    } catch (t3) {
      a2(t3);
    }
  }
  e.create = i.create, e.toCanvas = s.bind(null, o.render), e.toDataURL = s.bind(null, o.renderToDataURL), e.toString = s.bind(null, (function(t2, e2, r2) {
    return a.render(t2, r2);
  }));
}
