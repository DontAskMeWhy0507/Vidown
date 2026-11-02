// Module 385 - Savior Vphimzz_net Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_dom_utils = requireFn(0),
  dep_quality_helper = requireFn(9),
  obj_o = {
  getDomains: () => ["vphimzzz.net"],
  parse: {
  sources: [{
  checkSource: param_t => {
  var var_e = param_t.url;
  return Boolean(var_e.match(/(vkool\.info\/videos\/[a-z0-9]+\.mp4)/));
  }
  ,
  parse: param_t => {
  var var_e = param_t.media;
  return var_e.quality || (var_e.quality = dep_quality_helper.b.DEFAULT_QUALITY_TYPE),
  "number" == typeof var_e.size && (var_e.size = Object(dep_dom_utils.beautifyFileSize)(
  var_e.size)), var_e.ext = "mp4", var_e.exts = ["mp4"], var_e.type = "video", [var_e];
  }
  }
  ]
  }
  ,
  default: {
  getUrl: param_t => [{
  url: param_t.url,
  ext: "",
  type: "video",
  filename: document.title.replace(/xem phim /i, ""),
  referrer: location.href
  }
  ],
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  return var_e.fixName = document.title.replace(/xem phim /i, ""), var_e.referrer = location.href,
  var_e.type = "video", "video";
  }
  }
  };
  exportsObj.default = obj_o;
  };
