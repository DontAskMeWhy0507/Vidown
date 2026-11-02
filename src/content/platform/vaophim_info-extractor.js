// Module 367 - Savior Vaophim_info Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  exportsObj.default = {
  getDomains: () => ["vaophim.info"],
  idsProcess: param_t => {
  var var_e,
  var_r = param_t.defaultIds,
  var_n = param_t.id,
  var_i = param_t.index;
  (null === (var_e = var_n.referrer) || void 0 === var_e ? void 0 :
  var_e.match(/fbcdn/)) && var_r.splice(var_i, 1);
  }
  };
  };
