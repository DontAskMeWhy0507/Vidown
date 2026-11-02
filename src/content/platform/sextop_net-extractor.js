// Module 332 - Savior Sextop_net Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var obj_n = {
  getDomains: () => ["sextop.net"],
  idsProcess: param_t => {
  var var_e,
  var_r = param_t.defaultIds,
  var_n = param_t.id,
  var_i = param_t.index;
  ((null === (var_e = var_n.referrer) || void 0 === var_e ? void 0 :
  var_e.match(/[/-_]ads|static\./)) || var_n.url.match(/[/-_]ads|static\./)) &&
  var_r.splice(var_i, 1);
  }
  };
  exportsObj.default = obj_n;
  };
