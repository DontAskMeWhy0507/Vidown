// Module 346 - Savior Subnhanhcx Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_media_sniffer = requireFn(6);
  exportsObj.default = {
  getDomains: () => ["subnhanhcx."],
  parse: {
  default: param_t => {
  var var_e = param_t.response,
  var_r = param_t.media;
  return Object(dep_media_sniffer.e)(var_e, var_r);
  }
  }
  ,
  default: {
  getUrl: param_t => {
  if (param_t.url.includes("1.mp4")) return [];
  }
  }
  };
  };
