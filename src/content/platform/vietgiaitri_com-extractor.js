// Module 375 - Savior Vietgiaitri_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_dash_parser = requireFn(28),
  obj_i = {
  getDomains: () => ["vietgiaitri.com"],
  parse: {
  default: param_t => {
  var var_e = param_t.media;
  return dep_dash_parser.a.parse(var_e.url);
  }
  }
  ,
  urls: [{
  checkUrl: param_t => param_t.url.includes("ytiframe.html?"),
  getUrl: param_t => {
  var var_e = param_t.url,
  var_r = /postids*=\s*\d+#(\w+)/.exec(var_e);
  if (var_r) return "https//www.youtube.com/watch?v=" + var_r[1];
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  var_e.ext = "mp4", var_e.exts = ["mp4"];
  }
  }
  ]
  };
  exportsObj.default = obj_i;
  };
