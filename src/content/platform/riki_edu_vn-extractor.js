// Module 323 - Savior Riki_edu_vn Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_dash_parser = requireFn(28),
  dep_media_sniffer = requireFn(6),
  regex_o = /youtube.*.com\/embed\/([a-z0-9\-_]+)/i,
  var_a = location.href,
  var_s = void 0,
  obj_u = {
  getDomains: () => ["riki.edu.vn", "medium.com", "ketcausoft."],
  forceUpdate() {
  location.href !== var_a && (EE.emit("widget.forceUpdate"), var_a = location.href);
  }
  ,
  parse: {
  sources: [{
  checkSource: param_t => {
  var var_e = param_t.url;
  return Boolean(var_e.match(regex_o));
  }
  ,
  parse: param_t => {
  var var_e,
  var_r = "https://www.youtube.com/watch?v=" + (null === (var_e = param_t.media.url.match(
  regex_o)) || void 0 === var_e ? void 0 : var_e[1]);
  return dep_dash_parser.a.parse(var_r);
  }
  }
  , {
  checkSource: param_t => {
  var var_e = param_t.url;
  return /.+playlist\.m3u8/i.test(var_e);
  }
  ,
  parse: param_t => {
  var var_e,
  var_r,
  var_n,
  var_o = param_t.media,
  var_a_1 = param_t.response,
  var_s_1 = null === (var_e = var_o.url.match(/\/(a-z0-9\-_]+)\/playlist.m3u8/i)) ||
  void 0 === var_e ? void 0 : var_e[1];
  return var_o.fixName = var_s_1 || (null === (var_n = null === (var_r = document.querySelector(
  "h1.detail_course_header__title")) || void 0 === var_r ? void 0 :
  var_r.innerText) || void 0 === var_n ? void 0 : var_n.trim()) ||
  document.title, Object(dep_media_sniffer.e)(var_a_1, var_o);
  }
  }
  ]
  }
  ,
  urls: [{
  checkUrl: param_t => {
  var var_e = param_t.url;
  return "IFRAME" == param_t.node.nodeName && Boolean(var_e.match(regex_o));
  }
  ,
  getUrl: param_t => param_t.url,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  return var_e.ext = "mp4", var_e.exts = ["mp4"], "video";
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.url;
  return "IFRAME" == param_t.node.nodeName && Boolean(decodeURIComponent(var_e).match(
  regex_o));
  }
  ,
  getUrl: param_t => {
  var var_e = param_t.url;
  return var_e = decodeURIComponent(var_e), new URL(var_e).searchParams.get("src") ||
  void 0;
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
  return "VIDEO" == param_t.node.nodeName && var_e.startsWith("blob:") ||
  var_e.includes("mediadelivery.net");
  }
  ,
  getUrl: () => var_s ? null == var_s ? void 0 : var_s.url :
  [],
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject,
  var_r = param_t.node;
  return var_e.filename = var_r.title, var_e.type;
  }
  }
  ],
  processRequestIds: param_t => (/.+playlist\.m3u8/i.test(param_t.url) &&
  (var_s = param_t), !0)
  };
  exportsObj.default = obj_u;
  };
