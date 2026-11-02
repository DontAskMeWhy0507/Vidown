// Module 297 - Savior Ok_ru Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var var_n,
  var_i,
  dep_network_monitor = requireFn(20),
  list_a = [];
  var obj_s = {
  getDomains: () => ["ok.ru"],
  getCustomPipControlElement(param_t) {
  var var_e;
  if ("vk-video-player" === param_t.nodeName.toLowerCase()) {
  var var_r = param_t.shadowRootContainer || (null === (var_e = param_t.querySelector(
  ".shadow-root-container")) || void 0 === var_e ? void 0 : var_e.shadowRoot),
  var_n_1 = null == var_r ? void 0 : var_r.querySelector("video");
  if (var_n_1) return var_n_1;
  }
  return param_t;
  }
  ,
  isValidVideoNode: param_t => !!["vk-video-player", "wm-player", "video", "iframe"].includes(
  param_t.nodeName.toLowerCase()),
  parse: {
  sources: [...((null === (var_n = dep_network_monitor.a.parse) ||
  void 0 === var_n ? void 0 : var_n.sources) || [])]
  }
  ,
  isMiniPlayerNode: param_t => "WM-PLAYER" == param_t.nodeName,
  urls: [{
  checkUrl: param_t => "WM-PLAYER" == param_t.node.nodeName,
  getUrl: param_t => {
  var var_e = param_t.node;
  if (var_i) {
  var var_r = function (param_t_1) {
  var var_e_1,
  var_r_1,
  var_n_1,
  var_i_1,
  var_o = param_t_1.querySelector("wm-player-play-item"),
  var_a = null === (var_r_1 = null === (var_e_1 = null == var_o ?
  void 0 : var_o.querySelector('wm-card-details [slot="title"]')) ||
  void 0 === var_e_1 ? void 0 : var_e_1.innerText) || void 0 === var_r_1 ?
  void 0 : var_r_1.trim(),
  var_s = null === (var_i_1 = null === (var_n_1 = null == var_o ?
  void 0 : var_o.querySelector('wm-card-details [slot="info"] .artists, wm-card-details [slot="info"] [data-tsid="artist"]')) ||
  void 0 === var_n_1 ? void 0 : var_n_1.innerText) || void 0 === var_i_1 ?
  void 0 : var_i_1.trim();
  if (var_a && var_s) return `${var_a}- ${var_s}`;
  }
  (var_e);
  return "stream" !== var_i.filename && var_i.filename != var_r ?
  (var_i = void 0, "live") : (var_r = var_r || var_i.fixName ||
  var_i.filename, [Object.assign(Object.assign({
  }
  , var_i), {
  filename: var_r
  }
  )]);
  }
  return "live";
  }
  }
  , {
  checkUrl: param_t => {
  var var_e,
  var_r = param_t.node;
  return /ok\.ru\/live\//i.test(location.href) || Boolean(null === (var_e = var_r.closest(
  '[data-module="OKVideo"')) || void 0 === var_e ? void 0 : var_e.querySelector(
  ".html5-vpl_live"));
  }
  ,
  getUrl: () => "live",
  mediaObjectChange: () => "live"
  }
  , ...(dep_network_monitor.a.urls || [])],
  addNode: () => ["wm-player", "vk-video-player"],
  processRequestIds(param_t) {
  var var_e, var_r, var_n_1, var_o;
  if (/(musicd\.mycdn\.me)|(musicd\.okcdn\.ru\/)/i.test(param_t.url)) {
  list_a.push(param_t);
  var var_s = document.querySelector("wm-player wm-card-details"),
  var_u = `${null === (var_r = null === (var_e = null == var_s ?
  void 0 : var_s.querySelector('[slot="title"] .name')) || void 0 === var_e ?
  void 0 : var_e.innerText) || void 0 === var_r ? void 0 : var_r.trim()}- ${null === (var_o = null === (var_n_1 = null == var_s ?
  void 0 : var_s.querySelector(".artists")) || void 0 === var_n_1 ?
  void 0 : var_n_1.innerText) || void 0 === var_o ? void 0 :
  var_o.trim()}`;
  param_t.fixName = var_u, var_i = param_t, EE.emit("widget.forceUpdate");
  }
  return !0;
  }
  ,
  toggleLight: {
  turnOff: {
  parentUpdate() {
  var var_t,
  var_e = document.querySelector("#hook_Block_MainContainer"),
  var_r = document.querySelector("savior-backdrop");
  var_e && var_r && (null === (var_t = var_r.parentElement) ||
  void 0 === var_t || var_t.classList.add("--savior-overlay-z-index-reset"), null == var_e ||
  var_e.setAttribute("style", "position: relative"));
  }
  }
  }
  };
  exportsObj.default = obj_s;
  };
