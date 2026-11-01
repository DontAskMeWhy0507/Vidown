// Module 118 - Savior Stream chunk and buffer reader helper
export default function(t, e, r) {
  "use strict";
  (function(t2) {
    r.d(e, "a", (function() {
      return o;
    }));
    var n = r(93), i = r.n(n);
    function o(e2) {
      for (var r2, n2 = (r2 = e2, i.a.atob ? i.a.atob(r2) : t2.from(r2, "base64").toString("binary")), o2 = new Uint8Array(n2.length), a = 0; a < n2.length; a++) o2[a] = n2.charCodeAt(a);
      return o2;
    }
  }).call(this, r(27).Buffer);
}
