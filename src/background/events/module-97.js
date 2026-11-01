// Module 97 [events] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  (function (e) {
    var t = r(79);
    e.EE ||= new t.EventEmitter();
    e.IS_CONTENT_SCRIPT = true;
    e.savior_referrer = location.href;
    e.tab_url = location.href;
  }).call(this, r(13));
};
