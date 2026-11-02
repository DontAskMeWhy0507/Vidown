// Module 182 - Savior 24h_com_vn Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_url_utils = requireFn(3);
  function var_i(param_t, param_e) {
  return function (param_t_1) {
  if (Array.isArray(param_t_1)) return param_t_1;
  }
  (param_t) || function (param_t_1, param_e_1) {
  var var_r = null == param_t_1 ? null : "undefined" != typeof Symbol &&
  param_t_1[Symbol.iterator] || param_t_1["@@iterator"];
  if (null != var_r) {
  var var_n,
  var_i_1,
  var_o_1,
  var_a,
  list_s = [],
  flag_u = !0,
  flag_c = !1;
  try {
  if (var_o_1 = (var_r = var_r.call(param_t_1)).next, 0 === param_e_1) {
  if (Object(var_r) !== var_r) return;
  flag_u = !1;
  }
  else for (;
  !(flag_u = (var_n = var_o_1.call(var_r)).done) && (list_s.push(var_n.value), list_s.length !== param_e_1);
  flag_u = !0);
  }
  catch (var_t) {
  flag_c = !0, var_i_1 = var_t;
  }
  finally {
  try {
  if (!flag_u && null != var_r.return && (var_a = var_r.return(), Object(var_a) !== var_a)) return;
  }
  finally {
  if (flag_c) throw var_i_1;
  }
  }
  return list_s;
  }
  }
  (param_t, param_e) || function (param_t_1, param_e_1) {
  if (param_t_1) {
  if ("string" == typeof param_t_1) return var_o(param_t_1, param_e_1);
  var var_r = {
  }
  .toString.call(param_t_1).slice(8, -1);
  return "Object" === var_r && param_t_1.constructor && (var_r = param_t_1.constructor.name),
  "Map" === var_r || "Set" === var_r ? Array.from(param_t_1) :
  "Arguments" === var_r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(var_r) ?
  var_o(param_t_1, param_e_1) : void 0;
  }
  }
  (param_t, param_e) || function () {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  ();
  }
  function var_o(param_t, param_e) {
  (null == param_e || param_e > param_t.length) && (param_e = param_t.length);
  for (var num_r = 0, var_n = Array(param_e);
  num_r < param_e;
  num_r++) var_n[num_r] = param_t[num_r];
  return var_n;
  }
  var obj_a = {
  };
  function var_s(param_t, param_e) {
  var var_r, var_n, var_i_1, var_o_1, var_a, var_s_1, var_u_1, var_c, var_l, var_f;
  if (param_e.closest(".viewVideoPlay")) {
  var var_d = null === (var_i_1 = null === (var_n = null === (var_r = param_e.closest(
  ".viewVideoPlay")) || void 0 === var_r ? void 0 : var_r.parentElement) ||
  void 0 === var_n ? void 0 : var_n.nextElementSibling) || void 0 === var_i_1 ?
  void 0 : var_i_1.textContent;
  if (var_d) return var_d.length > 100 && (var_d = var_d.slice(0, 100)), param_t.filename = var_d,
  param_t.fixName = var_d, var_d;
  }
  var var_h = param_e.closest(".tttt-set, [data-tttt-set]"),
  var_p = null === (var_s_1 = null === (var_a = null === (var_o_1 = null == var_h ?
  void 0 : var_h.querySelector(".livetit_wrap, .inner>p")) ||
  void 0 === var_o_1 ? void 0 : var_o_1.innerText) || void 0 === var_a ?
  void 0 : var_a.replace(/\n/g, "")) || void 0 === var_s_1 ?
  void 0 : var_s_1.trim();
  return var_p || (var_p = null === (var_f = null === (var_l = null === (var_c = null === (
  var_u_1 = param_e.closest("article")) || void 0 === var_u_1 ?
  void 0 : var_u_1.querySelector("header h1")) || void 0 === var_c ?
  void 0 : var_c.innerText) || void 0 === var_l ? void 0 : var_l.replace(/\n/g, "")) ||
  void 0 === var_f ? void 0 : var_f.trim()), var_p && (var_p.length > 100 &&
  (var_p = var_p.slice(0, 100)), param_t.filename = var_p, param_t.fixName = var_p),
  var_p;
  }
  function var_u(param_t) {
  var var_e;
  return (null === (var_e = param_t.pathname) || void 0 === var_e ?
  void 0 : var_e.startsWith("/upload/html/")) || param_t.url.includes("googleapis.com");
  }
  var obj_c = {
  getCustomParent: param_t => param_t.closest(".v-24h-media-player"),
  getDomains: () => ["24h.com.vn"],
  idsProcess(param_t) {
  var var_e = param_t.defaultIds,
  var_r = param_t.id,
  var_n = param_t.index;
  var_u(var_r) ? var_e.splice(var_n, 1) : obj_a[var_r.filename] = var_r;
  }
  ,
  urls: [{
  checkUrl: param_t => {
  var var_e = param_t.url,
  var_r = param_t.node;
  return (var_e.startsWith("blob:") || var_e.startsWith("data:")) &&
  "VIDEO" === var_r.nodeName;
  }
  ,
  getUrl: param_t => {
  var var_e,
  var_r = param_t.url,
  var_i_1 = null === (var_e = document.querySelector("[poster]")) ||
  void 0 === var_e ? void 0 : var_e.getAttribute("poster");
  if (var_i_1) return var_i_1 = var_i_1.replace("images", "videoclip").replace(/\.(img|jpg|png)/,
  ".m3u8");
  var var_o_1 = Object(dep_url_utils.f)("https://google.com");
  return var_o_1.play_list = var_r, var_o_1.type = "video", var_o_1.ext = "m3u8",
  var_o_1.exts = ["m3u8"], [var_o_1];
  }
  ,
  mediaObjectChange: param_t => {
  var_s(param_t.mediaObject, param_t.node);
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.node,
  var_r = param_t.url;
  return ["AUDIO", "SOURCE"].includes(var_e.nodeName) && !var_r.startsWith("data:");
  }
  ,
  getUrl: param_t => {
  var var_e,
  var_r,
  var_i_1,
  var_o_1 = param_t.url,
  var_a = (null === (var_i_1 = null === (var_r = null === (var_e = param_t.node.closest(
  ".auNewsPlayer, .audioNews, .auContrn")) || void 0 === var_e ?
  void 0 : var_e.querySelector(".auVoiceMenu")) || void 0 === var_r ?
  void 0 : var_r.querySelector("li.active, li.act")) || void 0 === var_i_1 ?
  void 0 : var_i_1.getAttribute("data-id")) || "nu_bac",
  var_s_1 = document.title + " - Đọc",
  var_u_1 = Array.from(document.querySelectorAll(".auVoiceMenu li")).map(param_t_1 => param_t_1.getAttribute(
  "data-id")).filter(Boolean);
  if (var_u_1.length) {
  var var_c = Object(dep_url_utils.f)(var_o_1);
  var_c.filename = var_s_1, var_c.fixName = var_s_1;
  var obj_l = {
  nu_bac: "Nữ miền bắc",
  nu_nam: "Nữ miền nam",
  nam_bac: "Nam miền bắc",
  nam_nam: "Nam miền nam"
  };
  return var_u_1.map(param_t_1 => {
  var var_e_1 = Object.assign(Object.assign({
  }
  , var_c), {
  type: "audio",
  quality: obj_l[param_t_1]
  }
  );
  return var_e_1.url = var_e_1.url.replace(/(---(nu|nam)_(bac|nam))?\.mp3/i, `---${param_t_1}.mp3`), var_e_1;
  }
  );
  }
  return /---(nu|nam)_(bac|nam)\.mp3/i.test(var_o_1) ? var_o_1 :
  var_o_1.replace(/(---(nu|nam)_(bac|nam))?\.mp3/i, `---${var_a}.mp3`);
  }
  ,
  mediaObjectChange: param_t => {
  var_s(param_t.mediaObject, param_t.node);
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.url;
  return !!Object.fromEntries(new URLSearchParams(var_e)).file;
  }
  ,
  getUrl: param_t => {
  var var_e = param_t.url;
  param_t.node;
  return Object.fromEntries(new URLSearchParams(var_e)).file;
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.url,
  var_r = param_t.node;
  return !!Object.entries(obj_a).find(param_t_1 => {
  var var_n,
  var_o_1,
  var_a,
  var_s_1 = var_i(param_t_1, 1)[0];
  return var_e.includes(var_s_1) || (null === (var_n = var_r.getAttribute("poster")) ||
  void 0 === var_n ? void 0 : var_n.includes(var_s_1)) || (null === (var_a = null === (
  var_o_1 = var_r.parentElement) || void 0 === var_o_1 ? void 0 :
  var_o_1.getAttribute("poster")) || void 0 === var_a ? void 0 :
  var_a.includes(var_s_1));
  }
  );
  }
  ,
  getUrl: param_t => {
  var var_e,
  var_r = param_t.url,
  var_n = param_t.node;
  return null === (var_e = Object.entries(obj_a).find(param_t_1 => {
  var var_e_1,
  var_o_1,
  var_a,
  var_s_1 = var_i(param_t_1, 1)[0];
  return var_r.includes(var_s_1) || (null === (var_e_1 = var_n.getAttribute("poster")) ||
  void 0 === var_e_1 ? void 0 : var_e_1.includes(var_s_1)) ||
  (null === (var_a = null === (var_o_1 = var_n.parentElement) ||
  void 0 === var_o_1 ? void 0 : var_o_1.getAttribute("poster")) ||
  void 0 === var_a ? void 0 : var_a.includes(var_s_1));
  }
  )) || void 0 === var_e ? void 0 : var_e[1].url;
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  if (var_s(var_e, param_t.node), ["m3u8", "mp4"].includes(var_e.ext)) return "video";
  }
  }
  ],
  default: {
  getUrl: param_t => param_t.url,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  return var_s(var_e, param_t.node), ["m3u8", "mp4"].includes(var_e.ext) &&
  !var_e.type && (var_e.type = "video"), /---(nu|nam)_(bac|nam)\.mp3/i.test(var_e.url) ?
  var_e.type : (var_e.type = null, "live");
  }
  }
  ,
  processRequestIds: param_t => !var_u(param_t) && (obj_a[param_t.filename] = param_t,
  ["m3u8", "mp4"].includes(param_t.ext) ? (EE.emit("widget.forceUpdate"), !0) :
  void 0)
  };
  exportsObj.default = obj_c;
  };
