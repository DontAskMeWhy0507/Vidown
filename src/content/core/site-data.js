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
    var host = String(t2 || '').toLowerCase().split(':')[0];
    var domains = Object.keys(n);
    var o2 = domains.find((domain) => host === domain || host.endsWith('.' + domain));
    // Legacy entries ending in '.' (or without a suffix) name rotating domain families.
    if (!o2) o2 = domains.find((domain) => domain.endsWith('.') ? host.startsWith(domain) || host.includes('.' + domain) : !domain.includes('.') && host.split('.').some(label => label.startsWith(domain)));
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
