// Module 292 - Savior Ngamvn_net Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_url_utils = requireFn(3),
  obj_i = {
  18: "360p",
  22: "720p"
  }
  ,
  obj_o = {
  18: "Medium",
  22: "Standard"
  }
  ,
  regex_a = /VIDEO_CONFIG\s*=\s(.*)\s*\n*\t*<\/script>/,
  obj_s = {
  getDomains: () => ["viet69.org"],
  parse: {
  sources: [],
  default: param_t => {
  var var_e,
  var_r = param_t.response;
  return var_r ? JSON.parse((null === (var_e = regex_a.exec(var_r)) ||
  void 0 === var_e ? void 0 : var_e[1]) || "{}").streams.map(param_t_1 => {
  var var_e_1 = Object(dep_url_utils.f)(param_t_1.play_url);
  return var_e_1.filename = document.title, var_e_1.ext = "mp4", var_e_1.exts = ["mp4"],
  var_e_1.type = "video", var_e_1.resolution = obj_i[param_t_1.format_id], var_e_1.quality = obj_o[param_t_1.format_id],
  var_e_1;
  }
  ) : [];
  }
  }
  ,
  urls: [{
  checkUrl: param_t => param_t.url.includes("blogger.com"),
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  return var_e.ext = "m3u8", var_e.exts = ["m3u8"], "video";
  }
  }
  ]
  };
  exportsObj.default = obj_s;
  };
