// Module 363 - Savior Ub_net Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var obj_n = {
  siteMatcher: param_t => /^(?:[a-zA-Z0-9-]+\.)*ub\.net$/i.test(param_t),
  default: {
  getUrl: () => []
  }
  };
  exportsObj.default = obj_n;
  };
