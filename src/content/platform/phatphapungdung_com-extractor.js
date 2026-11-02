// Module 301 - Savior Phatphapungdung_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_dash_parser = requireFn(28),
  dep_dom_utils = requireFn(0),
  dep_url_utils = requireFn(3),
  obj_a = {
  getDomains: () => ["phatphapungdung."],
  getCustomParent: param_t => param_t.closest(".data-item") ||
  param_t.closest(".fp-player"),
  addNode: () => [".fp-player iframe.fp-engine"],
  isMiniPlayerNode: param_t => param_t.src.includes(".mp3"),
  isValidVideoNode: param_t => ["IFRAME"].includes(param_t.nodeName) ||
  "VIDEO" === param_t.nodeName,
  parse: {
  sources: [{
  checkSource: param_t => {
  var var_e = param_t.url;
  return Boolean(Object(dep_dom_utils.getVideoId)(var_e));
  }
  ,
  parse: param_t => {
  var var_e = param_t.media;
  return dep_dash_parser.a.parse(var_e.url);
  }
  }
  ]
  }
  ,
  urls: [{
  checkUrl: param_t => {
  var var_e = param_t.url;
  return Boolean(Object(dep_dom_utils.getVideoId)(var_e));
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  return var_e.ext = "mp4", var_e.exts = ["mp4"], "video";
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.url;
  return "VIDEO" == param_t.node.nodeName && /\.(mp3|mp4|avi|aac|wav)$/i.test(var_e);
  }
  ,
  getUrl(param_t) {
  var var_e = param_t.url,
  var_r = Object(dep_url_utils.f)(var_e);
  return "mp3" === var_r.ext && (var_r.type = "audio"), [var_r];
  }
  }
  ]
  };
  exportsObj.default = obj_a;
  };
