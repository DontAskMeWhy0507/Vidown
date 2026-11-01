// Module 92 - Savior Site-specific metadata and domain extractor
export default function(t, e, r) {
  "use strict";
  r.r(e), r.d(e, "getSiteData", (function() {
    return a;
  }));
  var n = {}, i = [], o = r(180);
  function a(t2, e2) {
    var r2 = i.find((r3) => r3.siteMatcher(t2, e2));
    if (r2) return r2;
    var o2 = Object.keys(n).find((e3) => t2.includes(e3));
    return n[o2 || ""];
  }
  o.keys().forEach((t2) => {
    var e2, r2;
    if (!t2.match(/(index\.ts)/i)) {
      var a2 = o(t2).default || o(t2);
      a2.siteMatcher && i.push(a2), null === (r2 = null === (e2 = a2.getDomains) || void 0 === e2 ? void 0 : e2.call(a2)) || void 0 === r2 || r2.map((t3) => {
        n[t3] = a2;
      });
    }
  });
}
