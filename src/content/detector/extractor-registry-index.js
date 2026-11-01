// Module 177 - Savior Specialized site extractor registry loader and dispatcher
export default function(t, e, r) {
  "use strict";
  r.r(e);
  var n = [], i = r(564);
  i.keys().forEach((t2) => {
    if (!t2.match(/(index\.ts)/i)) {
      var e2 = i(t2).default || i(t2);
      n.push(e2);
    }
  }), n.sort((t2, e2) => (t2.index || 0) - (e2.index || 0)), e.default = n;
}
