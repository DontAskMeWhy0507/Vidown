// Module 290 - Savior News Zing_vn Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_url_utils = requireFn(3),
  regex_i = /<.+?src="(.*?)".+HD/i;
  var obj_o = {
  getDomains: () => ["news.zing.vn"],
  parse: {
  sources: [],
  default: param_t => {
  var var_e,
  list_r = [],
  var_o = param_t.response.match(regex_i);
  if (var_o && var_o.length) {
  var var_a = var_o[1];
  if (var_a) {
  var var_s = Object(dep_url_utils.f)(var_a),
  var_u = (var_e = document.querySelector("h2.video-title")) ?
  var_e.innerText : document.querySelector("h1.the-article-title") ?
  document.title : void 0;
  var_u && (var_s.filename = var_u), var_s.title = var_s.filename, var_s.quality = "Standard",
  var_s.type = "video", list_r.push(var_s);
  }
  }
  return list_r;
  }
  }
  ,
  default: {
  getUrl: () => window.location.href,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  return var_e.ext = "m3u8", var_e.exts = ["m3u8"], "video";
  }
  }
  };
  exportsObj.default = obj_o;
  };
