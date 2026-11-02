// Module 263 - Savior Kenh14_vn Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  function var_n(param_t) {
  var var_e,
  var_r = param_t.closest('[type="VideoStream"][data-vid]'),
  var_n_1 = null === (var_e = null == var_r ? void 0 : var_r.querySelector(".VideoCMS_Caption p")) ||
  void 0 === var_e ? void 0 : var_e.innerText;
  var_r || (var_r = param_t);
  for (var list_i = [() => {
  var var_t, var_e_1, var_n_2;
  return null === (var_n_2 = null === (var_e_1 = null === (var_t = null == var_r ?
  void 0 : var_r.closest(".k14-videoUpdate-wrapper")) || void 0 === var_t ?
  void 0 : var_t.querySelector(".videoUpdate-right .info-content a")) ||
  void 0 === var_e_1 ? void 0 : var_e_1.innerText) || void 0 === var_n_2 ?
  void 0 : var_n_2.trim();
  }
  , () => {
  var var_t, var_e_1, var_n_2;
  return null === (var_n_2 = null === (var_e_1 = null === (var_t = null == var_r ?
  void 0 : var_r.closest(".featured-video-wrapper")) || void 0 === var_t ?
  void 0 : var_t.querySelector(".video-info_title")) || void 0 === var_e_1 ?
  void 0 : var_e_1.innerText) || void 0 === var_n_2 ? void 0 :
  var_n_2.trim();
  }
  , () => {
  var var_t, var_e_1, var_n_2;
  return null === (var_n_2 = null === (var_e_1 = null === (var_t = null == var_r ?
  void 0 : var_r.closest(".video-item, [data-newsid]")) || void 0 === var_t ?
  void 0 : var_t.querySelector(".video-title, .video-info h3>a")) ||
  void 0 === var_e_1 ? void 0 : var_e_1.innerText) || void 0 === var_n_2 ?
  void 0 : var_n_2.trim();
  }
  , () => {
  var var_e_1, var_r_1, var_n_2;
  return null === (var_n_2 = null === (var_r_1 = null === (var_e_1 = param_t.closest(
  '[data-marked-zoneid="boxvideo-detail"], #adm-list-hot-video-box')) ||
  void 0 === var_e_1 ? void 0 : var_e_1.querySelector(".mutex-video-item.nowPlaying a")) ||
  void 0 === var_r_1 ? void 0 : var_r_1.innerText) || void 0 === var_n_2 ?
  void 0 : var_n_2.trim();
  }
  , () => {
  var var_e_1, var_r_1, var_n_2;
  return null === (var_n_2 = null === (var_r_1 = null === (var_e_1 = param_t.closest(
  '[data-marked-zoneid="k14_video_detail_topvideo"], .vdbw-left')) ||
  void 0 === var_e_1 ? void 0 : var_e_1.querySelector("h1, .vdbw-title")) ||
  void 0 === var_r_1 ? void 0 : var_r_1.innerText) || void 0 === var_n_2 ?
  void 0 : var_n_2.trim();
  }
  , () => param_t.getAttribute("alt") || void 0, () => {
  var var_t, var_e_1;
  return null === (var_e_1 = null === (var_t = null == var_r ?
  void 0 : var_r.previousElementSibling) || void 0 === var_t ?
  void 0 : var_t.innerText) || void 0 === var_e_1 ? void 0 :
  var_e_1.trim();
  }
  ], num_o = 0;
  !var_n_1 && num_o < list_i.length;
  ) var_n_1 = list_i[num_o](), num_o++;
  return var_n_1;
  }
  function var_i(param_t) {
  try {
  var var_e = new URL(param_t);
  return var_e.pathname.startsWith("/.hls/") ? param_t : (var_e.pathname = "/.hls" + var_e.pathname,
  var_e.href);
  }
  catch (var_e_1) {
  return param_t;
  }
  }
  requireFn.r(exportsObj);
  var obj_o = {
  getDomains: () => ["kenh14.vn"],
  isMiniPlayerNode: param_t => param_t.matches(".video-slide-thumb a video"),
  urls: [{
  checkUrl: param_t => param_t.url.includes("streamfile.aspx"),
  mediaObjectChange: param_t => {
  var var_e,
  var_r = param_t.mediaObject;
  return var_r.ext = "mp4", var_r.filename = null === (var_e = document.getElementById(
  "titlePlaying")) || void 0 === var_e ? void 0 : var_e.innerText, "video";
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.node;
  return Boolean(var_e.closest('[type="VideoStream"][data-vid]'));
  }
  ,
  getUrl: param_t => {
  var var_e = param_t.node.closest('[type="VideoStream"][data-vid]'),
  var_r = (null == var_e ? void 0 : var_e.getAttribute("data-vid")) ||
  void 0;
  if (var_r) return var_r.startsWith("kenh14/") && (var_r = var_r.replace("kenh14/",
  "kenh14cdn.com/")), var_i(`https://${var_r}.master.m3u8`);
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject,
  var_r = var_n(param_t.node);
  return var_e.fixName = var_r || var_e.filename, "video";
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.url;
  return "VIDEO" == param_t.node.nodeName && /(kenh14cdn\.com\/.+\.mp4)/i.test(var_e);
  }
  ,
  getUrl: param_t => {
  var var_e = param_t.url,
  var_r = var_e.match(/(kenh14cdn\.com\/.+\.mp4)/i)[1];
  return var_r ? var_i(`https://${var_r}.master.m3u8`) : var_e;
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject,
  var_r = var_n(param_t.node);
  return var_e.url.includes(".gif.mp4") && (var_e.noAudio = !0), var_e.fixName = var_r ||
  var_e.filename, "video";
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.url,
  var_r = param_t.node;
  return /^blob:/i.test(var_e) && null != var_r.closest('[data-marked-zoneid="boxvideo-detail"], #adm-list-hot-video-box');
  }
  ,
  getUrl: param_t => {
  var var_e,
  var_r,
  var_n_1 = null === (var_r = null === (var_e = param_t.node.closest('[data-marked-zoneid="boxvideo-detail"], #adm-list-hot-video-box')) ||
  void 0 === var_e ? void 0 : var_e.querySelector(".mutex-video-item.nowPlaying a")) ||
  void 0 === var_r ? void 0 : var_r.href;
  if (var_n_1) {
  var var_o = new URL(var_n_1).searchParams.get("vid");
  return var_o ? var_i(`https://kenh14cdn.com/${var_o}.master.m3u8`) : var_n_1;
  }
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject,
  var_r = var_n(param_t.node);
  return var_r && (var_e.filename = var_r, var_e.fixName = var_r), "video";
  }
  }
  ],
  default: {
  mediaObjectChange(param_t) {
  var var_e = param_t.mediaObject,
  var_r = var_n(param_t.node);
  var_r && (var_e.filename = var_r, var_e.fixName = var_r);
  }
  }
  ,
  toggleLight: {
  turnOff: {
  updated() {
  var var_t = document.querySelectorAll("li.video-item");
  var_t.length && var_t.forEach(param_t => {
  param_t.setAttribute("style", "opacity: unset");
  }
  );
  }
  }
  }
  };
  exportsObj.default = obj_o;
  };
