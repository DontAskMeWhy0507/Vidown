// Module 97 - Savior EventEmitter singleton initializer for window.EE
export default function(t, e, r) {
  "use strict";
  (function(t2) {
    var e2 = r(79);
    t2.EE || (t2.EE = new e2.EventEmitter()), t2.IS_CONTENT_SCRIPT = true, t2.savior_referrer = location.href, t2.tab_url = location.href;
  }).call(this, r(13));
}
