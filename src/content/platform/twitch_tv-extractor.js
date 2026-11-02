// Module 361 - Savior Twitch_tv Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_url_utils = requireFn(3),
  list_i = [],
  str_o = "",
  obj_a = {
  }
  ,
  regex_s = /(vod|hls)\/?v?2?\/([\da-z_\-]+)\.m3u8/i,
  var_u = location.href,
  obj_c = {
  getDomains: () => ["twitch.tv"],
  forceUpdate() {
  location.href !== var_u && (EE.emit("widget.forceUpdate"), var_u = location.href);
  }
  ,
  processRequestIds(param_t) {
  var var_e, var_r, var_n;
  if (param_t.url === (null === (var_e = list_i[0]) || void 0 === var_e ?
  void 0 : var_e.url)) return !1;
  var var_u_1 = null === (var_n = null === (var_r = param_t.pathname) ||
  void 0 === var_r ? void 0 : var_r.match(regex_s)) || void 0 === var_n ?
  void 0 : var_n[2];
  return var_u_1 && !obj_a[var_u_1] && (obj_a[var_u_1] = param_t), param_t.filename = document.title ||
  param_t.filename, param_t.filename !== str_o && (str_o = param_t.filename ||
  "", list_i.length = 0, list_i.push(param_t)), !0;
  }
  ,
  urls: [{
  checkUrl: param_t => {
  var var_e = param_t.url;
  return "VIDEO" == param_t.node.nodeName && var_e.includes("twitchcdn.net");
  }
  ,
  getUrl: param_t => {
  var var_e,
  var_r,
  var_i,
  var_o,
  var_a,
  var_s,
  var_u_1 = param_t.url,
  var_c = param_t.node,
  var_l = var_c.closest(".ReactModalPortal .clips-view-modal-content"),
  var_f = null === (var_i = null === (var_r = null === (var_e = null == var_l ?
  void 0 : var_l.lastElementChild) || void 0 === var_e ? void 0 :
  var_e.innerText) || void 0 === var_r ? void 0 : var_r.replace("\n", " ")) ||
  void 0 === var_i ? void 0 : var_i.trim();
  if (!var_f) {
  var_l = var_c.closest('[data-a-target="tw-animation-target"]>div');
  var var_d = Array.from((null == var_l ? void 0 : var_l.querySelectorAll('.clips-sidebar-info .clips-chat-info span[class^="CoreText-"]')) ||
  []);
  var_f = null === (var_s = null === (var_a = null === (var_o = var_d[1] ||
  var_d[0]) || void 0 === var_o ? void 0 : var_o.innerText) ||
  void 0 === var_a ? void 0 : var_a.replace("\n", " ")) || void 0 === var_s ?
  void 0 : var_s.trim();
  }
  var var_h = Object(dep_url_utils.f)(var_u_1);
  return var_f && (var_h.filename = var_f, var_h.fixName = var_f), var_h.type = "video",
  [var_h];
  }
  }
  ],
  default: {
  getUrl(param_t) {
  var var_e,
  var_r = param_t.url,
  var_n = null === (var_e = location.href.match(/\/videos\/([\da-z_\-]+)/)) ||
  void 0 === var_e ? void 0 : var_e[1];
  return var_n && obj_a[var_n] ? [obj_a[var_n]] : var_r ? list_i :
  void 0;
  }
  }
  };
  exportsObj.default = obj_c;
  };
