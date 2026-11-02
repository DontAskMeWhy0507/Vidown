// Module 97 [events] - Stream / runtime utility component (stream-finished)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  (function (param_e) {
  var dep_event_emitter_3 = requireFn(79);
  param_e.EE ||= new dep_event_emitter_3.EventEmitter();
  param_e.IS_CONTENT_SCRIPT = true;
  param_e.savior_referrer = location.href;
  param_e.tab_url = location.href;
  }
  ).call(this, requireFn(13));
  };
