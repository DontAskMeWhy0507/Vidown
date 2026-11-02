// Module 223 - Savior Craftsy_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var list_n = [],
  obj_i = {
  getDomains: () => ["craftsy."],
  processRequestIds: param_t => {
  if (param_t.url.match(/manifest.prod.boltdns.net\/.+\/master.m3u8/i)) return list_n.push(
  param_t), !0;
  }
  ,
  default: {
  getUrl: () => {
  var var_t,
  var_e = null === (var_t = list_n[list_n.length - 1]) || void 0 === var_t ?
  void 0 : var_t.url;
  return list_n.length = 0, var_e;
  }
  }
  };
  exportsObj.default = obj_i;
  };
