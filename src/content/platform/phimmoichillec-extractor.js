// Module 312 - Savior Phimmoichillec Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var var_n,
  dep_media_sniffer = requireFn(6),
  obj_o = {
  getDomains: () => ["phimmoichillec."],
  parse: {
  default: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response.split("#EXT-X-DISCONTINUITY").filter((param_t_1, param_e) => 0 == param_e ||
  param_e % 2 != 0).join("\n");
  return Object(dep_media_sniffer.e)(var_r, var_e);
  }
  }
  ,
  default: {
  getUrl: () => var_n.url
  }
  ,
  processRequestIds: param_t => (param_t.url.includes("mixed") &&
  (var_n = param_t), !0)
  };
  exportsObj.default = obj_o;
  };
