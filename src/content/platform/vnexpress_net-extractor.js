// Module 381 - Savior Vnexpress_net Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var var_n;
  requireFn.r(exportsObj);
  var var_i = location.href;
  function var_o(param_t, param_e) {
  for (var list_r = [param_t_1 => {
  var var_e, var_r, var_n_1;
  return null === (var_n_1 = null === (var_r = null === (var_e = param_t_1.closest(
  "[data-vid], .box_embed_video_parent, .embed_video_new")) ||
  void 0 === var_e ? void 0 : var_e.querySelector(".parser_title")) ||
  void 0 === var_r ? void 0 : var_r.innerText) || void 0 === var_n_1 ?
  void 0 : var_n_1.trim();
  }
  , param_t_1 => {
  var var_e, var_r;
  return null === (var_r = null === (var_e = param_t_1.closest("a.thumb[title][href]")) ||
  void 0 === var_e ? void 0 : var_e.title) || void 0 === var_r ?
  void 0 : var_r.trim();
  }
  , param_t_1 => {
  var var_e, var_r, var_n_1;
  return null === (var_n_1 = null === (var_r = null === (var_e = param_t_1.closest(
  ".swiper-slide")) || void 0 === var_e ? void 0 : var_e.querySelector(".description-short")) ||
  void 0 === var_r ? void 0 : var_r.innerText) || void 0 === var_n_1 ?
  void 0 : var_n_1.trim();
  }
  ], num_n = 0, var_i_1 = list_r.length;
  num_n < var_i_1;
  num_n++) {
  var var_o_1 = list_r[num_n](param_e);
  if (var_o_1) return param_t.filename = var_o_1, void (param_t.fixName = var_o_1);
  }
  }
  var obj_a = {
  getDomains: () => ["vnexpress.net"],
  forceUpdate: /video\.vnexpress\.net/i.test(location.origin) ?
  () => {
  var_i != location.href && (var_i = location.href, EE.emit("widget.forceUpdate"));
  }
  : void 0,
  urls: [{
  checkUrl: param_t => !!param_t.node.closest(".swiper-slide"),
  getUrl: param_t => {
  var var_e = param_t.node.closest(".swiper-slide");
  if (!var_e) return [];
  if (var_e.getAttribute("data-is-ad") || "true" === var_e.getAttribute("data-is-ad")) return [];
  var var_r = var_e.getAttribute("data-master");
  return var_r || [];
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject,
  var_r = param_t.node;
  return var_e.referrer = location.href, var_e.type = "video", var_o(var_e, var_r),
  var_e.type;
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.url;
  return "VIDEO" == param_t.node.nodeName && /\.vnecdn\.net/i.test(var_e);
  }
  ,
  getUrl: param_t => {
  var var_e,
  var_r = param_t.url,
  var_n_1 = param_t.node;
  return var_n_1.childElementCount && (var_r = (null === (var_e = var_n_1.querySelector(
  "source")) || void 0 === var_e ? void 0 : var_e.src) || var_r), var_r;
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject,
  var_r = param_t.node;
  return var_e.referrer = location.href, var_e.type = "video", var_o(var_e, var_r),
  "gif" == var_e.ext && var_r.matches(".thumb-gif") && (var_e.ext = "mp4", var_e.exts = ["mp4"],
  var_e.noAudio = !0), var_e.type;
  }
  }
  , {
  checkUrl: param_t => {
  var var_e,
  var_r,
  var_n_1 = param_t.node;
  return "VIDEO" == var_n_1.nodeName && Boolean(null === (var_r = null === (var_e = var_n_1.parentElement) ||
  void 0 === var_e ? void 0 : var_e.getAttribute("src")) || void 0 === var_r ?
  void 0 : var_r.match(/\.vnecdn\.net/i));
  }
  ,
  getUrl: param_t => param_t.node.parentElement.getAttribute("src"),
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject,
  var_r = param_t.node;
  return var_e.referrer = location.href, var_e.type = "video", var_o(var_e, var_r),
  var_e.type;
  }
  }
  , {
  checkUrl: () => {
  var var_t = document.querySelector("#content_script script") ||
  {
  };
  if (var_t && var_t.innerText) {
  var_t = var_t.innerText;
  var var_e = new RegExp(/m3u8:\s*'.+\.m3u8/g).exec(var_t);
  if (var_e && var_e[0]) return var_n = var_e[0].replace(/(m3u8:\s*'|\s)/, ""), !0;
  }
  return !1;
  }
  ,
  getUrl: () => var_n,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject,
  var_r = param_t.node;
  return var_e.referrer = location.href, var_o(var_e, var_r), var_e.type;
  }
  }
  ],
  idsProcess(param_t) {
  var var_e = param_t.defaultIds,
  var_r = param_t.id,
  var_n_1 = param_t.index;
  var_r.url.match(/\.vnecdn\.net\/live/) && var_e.splice(var_n_1, 1);
  }
  ,
  toggleLight: {
  turnOff: {
  parentUpdate() {
  }
  ,
  updated(param_t, param_e) {
  var var_r, var_n_1;
  if ("Shorts" == (null === (var_n_1 = null === (var_r = document.querySelector(
  ".open")) || void 0 === var_r ? void 0 : var_r.querySelector("span")) ||
  void 0 === var_n_1 ? void 0 : var_n_1.textContent)) {
  var var_i_1 = param_e.$backdrop;
  var_i_1.remove();
  var var_o_1 = document.querySelector(".section-shortplaying"),
  var_a = null == var_o_1 ? void 0 : var_o_1.parentElement;
  if (var_a) {
  var_a.classList.add("--savior-overlay-z-index-top"), var_o_1.classList.add("--savior-overlay-position-relative",
  "--savior-overlay-z-index-top");
  var list_s = ["0px", "0px"];
  var_i_1.style.top = list_s[0], var_i_1.style.left = list_s[1], var_a.prepend(var_i_1);
  }
  }
  else {
  if ("vnexpress.net" != location.host || location.pathname.includes(".html")) return;
  document.body.classList.add("--savior-lightoff-fix"), document.querySelectorAll(
  ".swiper-wrapper").forEach(param_t_1 => {
  var var_e;
  return null === (var_e = null == param_t_1 ? void 0 : param_t_1.classList) ||
  void 0 === var_e ? void 0 : var_e.add("--savior-overlay-transform-reset");
  }
  ), null == param_t || param_t.scrollIntoView();
  }
  }
  }
  ,
  turnOn: {
  updated(param_t) {
  "vnexpress.net" != location.host || location.pathname.includes(".html") ||
  (document.body.classList.remove("--savior-lightoff-fix"), null == param_t ||
  param_t.scrollIntoView());
  }
  }
  }
  };
  exportsObj.default = obj_a;
  };
