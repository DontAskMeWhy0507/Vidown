// Module 253 - Savior Ibomma_net Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var var_n = location.href,
  obj_i = {
  getDomains: () => ["ibomma.net", "net.ibomma.day"],
  default: {
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject,
  var_r = param_t.node;
  return var_n = var_r.src, var_e.referrer = var_n, var_e.type;
  }
  }
  ,
  idsProcess(param_t) {
  var var_e = param_t.id;
  var_e.referrer == var_e.url && (var_e.referrer = var_n);
  }
  };
  exportsObj.default = obj_i;
  };
