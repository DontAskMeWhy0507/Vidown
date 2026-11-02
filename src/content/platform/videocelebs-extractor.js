// Module 372 - Savior Videocelebs Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var obj_n = {
  getDomains: () => ["videocelebs."],
  toggleLight: {
  turnOff: {
  updated(param_t, param_e) {
  param_e.parent.getComponent("toggleLight").mutationObserver.disconnect();
  }
  ,
  parentUpdate() {
  }
  }
  }
  };
  exportsObj.default = obj_n;
  };
