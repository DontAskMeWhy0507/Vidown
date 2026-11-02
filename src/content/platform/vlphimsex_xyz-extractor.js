// Module 379 - Savior Vlphimsex_xyz Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  exportsObj.default = {
  getDomains: () => ["vlphimsex.xyz"],
  idsProcess: param_t => {
  var var_e = param_t.id;
  if (null == var_e ? void 0 : var_e.url) {
  var var_r = var_e.url,
  var_n = var_r.match(/(https:\/\/|http:\/\/)(?:[\w-]+\.)*([\w-]+\.[a-z]+)/);
  var_e.referrer = var_n ? var_n[1] + var_n[2] : var_r;
  }
  }
  };
  };
