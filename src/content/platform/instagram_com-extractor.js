// Module 254 - Savior Instagram_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_format_resolver = requireFn(14),
  dep_media_constants = requireFn(1),
  dep_dom_utils = requireFn(0),
  dep_url_utils = requireFn(3),
  dep_dom_helper = requireFn(12);
  function var_u() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var var_t,
  var_e,
  var_r = "function" == typeof Symbol ? Symbol : {
  }
  ,
  var_n = var_r.iterator || "@@iterator",
  var_i = var_r.toStringTag || "@@toStringTag";
  function var_o(param_r, param_n, param_i, param_o) {
  var var_u_1 = param_n && param_n.prototype instanceof var_s ?
  param_n : var_s,
  var_l_1 = Object.create(var_u_1.prototype);
  return var_c(var_l_1, "_invoke", function (param_r_1, param_n_1, param_i_1) {
  var var_o_1,
  var_s_1,
  var_u_2,
  num_c = 0,
  var_l_2 = param_i_1 || [],
  flag_f = !1,
  obj_d_1 = {
  p: 0,
  n: 0,
  v: var_t,
  a: var_h_2,
  f: var_h_2.bind(var_t, 4),
  d: function (param_e, param_r_2) {
  return var_o_1 = param_e, var_s_1 = 0, var_u_2 = var_t, obj_d_1.n = param_r_2,
  obj_a;
  }
  };
  function var_h_2(param_r_2, param_n_2) {
  for (var_s_1 = param_r_2, var_u_2 = param_n_2, var_e = 0;
  !flag_f && num_c && !var_i_1 && var_e < var_l_2.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_2[var_e],
  var_h_3 = obj_d_1.p,
  var_p_2 = var_o_2[2];
  param_r_2 > 3 ? (var_i_1 = var_p_2 === param_n_2) && (var_u_2 = var_o_2[(var_s_1 = var_o_2[4]) ?
  5 : (var_s_1 = 3, 3)], var_o_2[4] = var_o_2[5] = var_t) : var_o_2[0] <= var_h_3 &&
  ((var_i_1 = param_r_2 < 2 && var_h_3 < var_o_2[1]) ? (var_s_1 = 0, obj_d_1.v = param_n_2,
  obj_d_1.n = var_o_2[1]) : var_h_3 < var_p_2 && (var_i_1 = param_r_2 < 3 ||
  var_o_2[0] > param_n_2 || param_n_2 > var_p_2) && (var_o_2[4] = param_r_2, var_o_2[5] = param_n_2,
  obj_d_1.n = var_p_2, var_s_1 = 0));
  }
  if (var_i_1 || param_r_2 > 1) return obj_a;
  throw flag_f = !0, param_n_2;
  }
  return function (param_i_2, param_l, param_p) {
  if (num_c > 1) throw TypeError("Generator is already running");
  for (flag_f && 1 === param_l && var_h_2(param_l, param_p), var_s_1 = param_l, var_u_2 = param_p;
  (var_e = var_s_1 < 2 ? var_t : var_u_2) || !flag_f;
  ) {
  var_o_1 || (var_s_1 ? var_s_1 < 3 ? (var_s_1 > 1 && (obj_d_1.n = -1), var_h_2(
  var_s_1, var_u_2)) : obj_d_1.n = var_u_2 : obj_d_1.v = var_u_2);
  try {
  if (num_c = 2, var_o_1) {
  if (var_s_1 || (param_i_2 = "next"), var_e = var_o_1[param_i_2]) {
  if (!(var_e = var_e.call(var_o_1, var_u_2))) throw TypeError("iterator result is not an object");
  if (!var_e.done) return var_e;
  var_u_2 = var_e.value, var_s_1 < 2 && (var_s_1 = 0);
  }
  else 1 === var_s_1 && (var_e = var_o_1.return) && var_e.call(var_o_1), var_s_1 < 2 &&
  (var_u_2 = TypeError("The iterator does not provide a '" + param_i_2 + "' method"),
  var_s_1 = 1);
  var_o_1 = var_t;
  }
  else if ((var_e = (flag_f = obj_d_1.n < 0) ? var_u_2 : param_r_1.call(param_n_1,
  obj_d_1)) !== obj_a) break;
  }
  catch (var_e_1) {
  var_o_1 = var_t, var_s_1 = 1, var_u_2 = var_e_1;
  }
  finally {
  num_c = 1;
  }
  }
  return {
  value: var_e,
  done: flag_f
  };
  };
  }
  (param_r, param_i, param_o), !0), var_l_1;
  }
  var obj_a = {
  };
  function var_s() {
  }
  function var_l() {
  }
  function var_f_1() {
  }
  var_e = Object.getPrototypeOf;
  var var_d = [][var_n] ? var_e(var_e([][var_n]())) : (var_c(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_h_1 = var_f_1.prototype = var_s.prototype = Object.create(var_d);
  function var_p_1(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_f_1) :
  (param_t.__proto__ = var_f_1, var_c(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h_1), param_t;
  }
  return var_l.prototype = var_f_1, var_c(var_h_1, "constructor", var_f_1), var_c(
  var_f_1, "constructor", var_l), var_l.displayName = "GeneratorFunction", var_c(
  var_f_1, var_i, "GeneratorFunction"), var_c(var_h_1), var_c(var_h_1, var_i, "Generator"),
  var_c(var_h_1, var_n, function () {
  return this;
  }
  ), var_c(var_h_1, "toString", function () {
  return "[object Generator]";
  }
  ), (var_u = function () {
  return {
  w: var_o,
  m: var_p_1
  };
  }
  )();
  }
  function var_c(param_t, param_e, param_r, param_n) {
  var var_i = Object.defineProperty;
  try {
  var_i({
  }
  , "", {
  }
  );
  }
  catch (var_t) {
  var_i = 0;
  }
  (var_c = function (param_t_1, param_e_1, param_r_1, param_n_1) {
  function var_o(param_e_2, param_r_2) {
  var_c(param_t_1, param_e_2, function (param_t_2) {
  return this._invoke(param_e_2, param_r_2, param_t_2);
  }
  );
  }
  param_e_1 ? var_i ? var_i(param_t_1, param_e_1, {
  value: param_r_1,
  enumerable: !param_n_1,
  configurable: !param_n_1,
  writable: !param_n_1
  }
  ) : param_t_1[param_e_1] = param_r_1 : (var_o("next", 0), var_o("throw", 1), var_o(
  "return", 2));
  }
  )(param_t, param_e, param_r, param_n);
  }
  var fn_l = function (param_t, param_e, param_r, param_n) {
  return new (param_r || (param_r = Promise))(function (param_i, param_o) {
  function var_a(param_t_1) {
  try {
  var_u_1(param_n.next(param_t_1));
  }
  catch (var_t) {
  param_o(var_t);
  }
  }
  function var_s(param_t_1) {
  try {
  var_u_1(param_n.throw(param_t_1));
  }
  catch (var_t) {
  param_o(var_t);
  }
  }
  function var_u_1(param_t_1) {
  var var_e;
  param_t_1.done ? param_i(param_t_1.value) : (var_e = param_t_1.value, var_e instanceof param_r ?
  var_e : new param_r(function (param_t_2) {
  param_t_2(var_e);
  }
  )).then(var_a, var_s);
  }
  var_u_1((param_n = param_n.apply(param_t, param_e || [])).next());
  }
  );
  }
  ,
  var_f = new Map(),
  obj_d = {
  "x-asbd-id": 198387,
  "x-csrftoken": "xvl5U8HSBDNKZnlUyZpYttlfwNqlgyLX",
  "x-ig-app-id": 936619743392459,
  "x-ig-www-claim": "hmac.AR3pCgbC5oTDxbVJznk08d3AjTjWdiH1XAOV0VUdxuR-q5tY"
  };
  function var_h(param_t) {
  var var_e,
  var_r = param_t.closest("article");
  return null === (var_e = Object(dep_dom_utils.queryAll)("a", var_r ||
  document).filter(param_t_1 => param_t_1.href.includes("/p/") &&
  !param_t_1.href.includes("liked_by"))[0]) || void 0 === var_e ?
  void 0 : var_e.href;
  }
  function var_p(param_t) {
  var var_e,
  var_r,
  var_n,
  var_i,
  var_o,
  var_a,
  var_s,
  var_u_1,
  var_c_1,
  var_l,
  var_f_1,
  var_d,
  var_h_1,
  var_p_1,
  var_v,
  var_m,
  var_y,
  var_g,
  var_b,
  var_w,
  var_A,
  var__,
  var_E,
  var_S = document.title,
  var_O = param_t.closest("article"),
  var_x = document.querySelector("h1");
  if (!var_O && location.pathname.startsWith("/p/") && (var_O = param_t.closest(
  '[role="main"]'), !var_x)) {
  var var_k = null == var_O ? void 0 : var_O.querySelector('hr+div .html-div [dir="auto"]');
  var_x = null === (var_e = null == var_k ? void 0 : var_k.firstElementChild) ||
  void 0 === var_e ? void 0 : var_e.lastElementChild;
  }
  if (location.pathname.startsWith("/reels")) {
  var var_M = null === (var_r = param_t.parentElement) || void 0 === var_r ?
  void 0 : var_r.querySelector('[role="presentation"] div:not([class])[role="button"] [dir="auto"] span');
  if (var_M) return null === (var_n = var_M.innerText) || void 0 === var_n ?
  void 0 : var_n.trim();
  if (var_M = null === (var_i = param_t.parentElement) || void 0 === var_i ?
  void 0 : var_i.querySelector('[role="presentation"] [dir="auto"] span')) return null === (
  var_o = var_M.innerText) || void 0 === var_o ? void 0 : var_o.trim();
  if (var_M = null === (var_s = null === (var_a = param_t.closest("div:has(img)")) ||
  void 0 === var_a ? void 0 : var_a.parentElement) || void 0 === var_s ?
  void 0 : var_s.querySelector('[role="presentation"]')) return null === (var_u_1 = var_M.innerText) ||
  void 0 === var_u_1 ? void 0 : var_u_1.trim();
  }
  if (location.pathname.startsWith("/reel/")) {
  var var_T = null == var_O ? void 0 : var_O.querySelector('[role="presentation"] h1');
  if (var_T) return null === (var_c_1 = var_T.innerText) || void 0 === var_c_1 ?
  void 0 : var_c_1.trim();
  var var_I = null == var_O ? void 0 : var_O.querySelector('[role="presentation"] [dir="auto"] span');
  if (var_I) return `${null === (var_l = var_I.innerText) ||
  void 0 === var_l ? void 0 : var_l.trim()}- ${(null === (var_f_1 = location.pathname.match(/reel\/([a-z0-9\-_]+)\/?/i)) ||
  void 0 === var_f_1 ? void 0 : var_f_1[1]) || Date.now()}`;
  }
  if (location.pathname.startsWith("/stories/")) {
  var var_j = null === (var_d = param_t.closest("section")) ||
  void 0 === var_d ? void 0 : var_d.querySelectorAll("a");
  if (!var_j) return "";
  var var_C = Array.from(var_j).filter(param_t_1 => {
  var var_e_1;
  return !(null === (var_e_1 = param_t_1.getAttribute("href")) ||
  void 0 === var_e_1 ? void 0 : var_e_1.startsWith("/stories/"));
  }
  );
  return (null == var_C ? void 0 : var_C[1].innerText) ? var_C[1].innerText :
  null == var_C ? void 0 : var_C[2].innerText;
  }
  if (var_x) return null === (var_h_1 = null == var_x ? void 0 :
  var_x.innerText) || void 0 === var_h_1 ? void 0 : var_h_1.trim().slice(0, 40);
  if (!var_O) return var_S;
  var var_B = null === (var_v = null === (var_p_1 = param_t.closest("article>div>div")) ||
  void 0 === var_p_1 ? void 0 : var_p_1.nextElementSibling) ||
  void 0 === var_v ? void 0 : var_v.querySelector('section + div a:not([href$="comments/"]) span');
  if (var_B) {
  var var_U = null === (var_m = var_B.innerText) || void 0 === var_m ?
  void 0 : var_m.trim(),
  var_P = null === (var_w = null === (var_b = null === (var_g = null === (var_y = param_t.closest(
  "article>div>div")) || void 0 === var_y ? void 0 : var_y.nextElementSibling) ||
  void 0 === var_g ? void 0 : var_g.querySelector("section + div>div+span span")) ||
  void 0 === var_b ? void 0 : var_b.innerText) || void 0 === var_w ?
  void 0 : var_w.trim();
  return var_P ? `${var_U}- ${var_P}` : var_U;
  }
  var var_N = null === (var__ = null === (var_A = var_O.querySelector('a[href] span[dir="auto"]')) ||
  void 0 === var_A ? void 0 : var_A.innerText) || void 0 === var__ ?
  void 0 : var__.trim();
  if (var_N) return var_N;
  var var_D = null === (var_E = var_O.querySelector("h1")) ||
  void 0 === var_E ? void 0 : var_E.textContent;
  return var_D || var_S;
  }
  var obj_v = {
  getDomains: () => ["instagram.com"],
  getCustomParent: param_t => {
  var var_e;
  return location.href.includes("/reels/") ? Object(dep_dom_helper.d)(param_t) :
  "IMG" === param_t.tagName ? param_t.closest("._aagu") : null !== (var_e = param_t.closest(
  "li")) && void 0 !== var_e ? var_e : param_t.closest("div:not([class])");
  }
  ,
  shouldWidgetAttachToParentNode: param_t => "IMG" === param_t.tagName,
  getImageNode: param_t => Object(dep_dom_helper.l)(param_t) &&
  param_t.closest("._aagu") ? param_t : null,
  shouldShowWidgetForImage: () => !0,
  parse: {
  sources: [{
  checkSource: param_t => "image" === param_t.type,
  parse: param_t => {
  var var_e = param_t.media;
  return fn_l(void 0, void 0, void 0, var_u().m(function var_t() {
  var var_r, var_n, var_i, var_a, var_s, var_c_1, var_l, var_d, var_h_1, var_p_1,
  var_v, var_m, var_y;
  return var_u().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.p = param_t_1.n) {
  case 0:
  if (!(var_c_1 = null === (var_r = var_e.query) || void 0 === var_r ?
  void 0 : var_r.pk)) {
  param_t_1.n = 7;
  break;
  }
  if (param_t_1.p = 1, var_l = [], !(var_d = var_f.get(var_c_1))) {
  param_t_1.n = 2;
  break;
  }
  var_l = var_d, param_t_1.n = 5;
  break;
  case 2:
  return var_h_1 = Object(dep_dom_utils.getCookies)(document.cookie), var_p_1 = null === (
  var_n = document.documentElement.innerHTML.match(/\"x-ig-app-id\":\s*\"(\w+)\"/i)) ||
  void 0 === var_n ? void 0 : var_n[1], param_t_1.n = 3, fetch(`https://www.instagram.com/api/v1/media/${var_c_1}/info/`, {
  headers: {
  "x-csrftoken": var_h_1.csrftoken,
  "x-ig-app-id": var_p_1 || ""
  }
  }
  );
  case 3:
  return var_v = param_t_1.v, param_t_1.n = 4, var_v.json();
  case 4:
  var_m = param_t_1.v, var_l = (null === (var_s = null === (var_a = null === (var_i = null == var_m ?
  void 0 : var_m.items) || void 0 === var_i ? void 0 : var_i[0]) ||
  void 0 === var_a ? void 0 : var_a.carousel_media) || void 0 === var_s ?
  void 0 : var_s.map(param_t_2 => {
  var var_e_1, var_r_1;
  return null === (var_r_1 = null === (var_e_1 = null == param_t_2 ?
  void 0 : param_t_2.image_versions2) || void 0 === var_e_1 ?
  void 0 : var_e_1.candidates) || void 0 === var_r_1 ? void 0 :
  var_r_1[0].url;
  }
  )) || [], var_f.set(var_c_1, var_l);
  case 5:
  var_l.length >= 2 && (var_e.extraImages = {
  urls: var_l,
  firstImage: var_l[0],
  secondImage: var_l[1],
  label: Object(dep_dom_utils.i18n)("download_all_images", [String(var_l.length)]),
  numberOfImages: var_l.length
  }
  ), param_t_1.n = 7;
  break;
  case 6:
  param_t_1.p = 6, var_y = param_t_1.v, console.warn(var_y);
  case 7:
  return param_t_1.a(2, [var_e]);
  }
  }
  , var_t, null, [[1, 6]]);
  }
  ));
  }
  }
  ],
  default: param_t => {
  var var_e,
  var_r = param_t.media,
  var_s = param_t.response;
  if ("string" != typeof var_r.url || !var_r.url.includes("&by")) {
  var var_u_1 = null === (var_e = /<title>\n*([\s\S]+?)\n*<\/title>/.exec(var_s)) ||
  void 0 === var_e ? void 0 : var_e[1],
  var_c_1 = /("|')video_dash_manifest("|'):\s*("|')(.+?)("|'),/.exec(var_s);
  if (!var_c_1) {
  var var_l = /("|')media_id("|'):\s*("|')(.+?)("|'),/.exec(var_s);
  return var_l ? fetch(`https://i.instagram.com/api/v1/media/${var_l[4]}/info/`, {
  headers: obj_d,
  credentials: "include"
  }
  ).then(param_t_1 => param_t_1.json()).then(param_t_1 => {
  var var_e_1;
  return Object(dep_format_resolver.d)(param_t_1.items[0].video_dash_manifest, (
  null === (var_e_1 = param_t_1.items[0].caption) || void 0 === var_e_1 ?
  void 0 : var_e_1.text) || var_u_1).map(param_t_2 => (param_t_2.ext = "mp4", param_t_2.exts = ["mp4"],
  param_t_2));
  }
  ) : [var_r];
  }
  var var_f_1 = var_c_1[4];
  if (var_f_1) return Object(dep_format_resolver.d)(var_f_1, var_u_1).map(param_t_1 => (
  param_t_1.ext = "mp4", param_t_1.exts = ["mp4"], param_t_1));
  var var_h_1 = /("|')video_versions("|'):\s*(.+?\]),/.exec(var_s);
  return var_h_1 ? JSON.parse(var_h_1[3]).map(param_t_1 => {
  var var_e_1 = Object(dep_url_utils.f)(param_t_1.url);
  return var_e_1.resolution = param_t_1.height + "p", var_e_1.quality = Object(dep_dom_utils.i18n)(
  dep_media_constants.r[var_e_1.resolution].i18n_label), var_e_1.filename = var_u_1,
  var_e_1.ext = "mp4", var_e_1.exts = ["mp4"], var_e_1.type = "video", [var_e_1];
  }
  ) : void 0;
  }
  }
  }
  ,
  imageUrls: [{
  checkUrl: param_t => param_t.node.matches("[savior-scanned-img]"),
  getUrl: param_t => {
  var var_e = param_t.node,
  var_r = param_t.url;
  return fn_l(void 0, void 0, void 0, var_u().m(function var_t() {
  var var_n, var_s, var_c_1;
  return var_u().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  return param_t_1.n = 1, Object(dep_url_utils.g)({
  url: var_r,
  node: var_e
  }
  );
  case 1:
  if (var_s = param_t_1.v, !var_e.closest("ul") && !(null === (var_n = var_e.closest(
  'a[role="link"]')) || void 0 === var_n ? void 0 : var_n.querySelector('.html-div svg[role="img"]'))) {
  param_t_1.n = 3;
  break;
  }
  if (var_c_1 = var_e.getAttribute("image-instagram-pk")) {
  param_t_1.n = 2;
  break;
  }
  return param_t_1.n = 2, new Promise(param_t_2 => {
  Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.SCRIPTING.INJECT,
  file: "image-instagram"
  }
  ).then(param_t_2), setTimeout(() => {
  param_t_2(!0);
  }
  , 1e3);
  }
  );
  case 2:
  (var_c_1 = var_e.getAttribute("image-instagram-pk")) && (var_s.query = {
  pk: var_c_1
  }
  );
  case 3:
  return param_t_1.a(2, [var_s]);
  }
  }
  , var_t);
  }
  ));
  }
  }
  ],
  urls: [{
  checkUrl: () => /.+\/reels\/audio\/.+/.test(location.href),
  getUrl: param_t => param_t.url,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  return var_e.ext = "mp3", var_e.exts = ["mp3"], var_e.soundOnly = !0, var_e.filename = document.title,
  "audio";
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.node;
  return location.href.includes("/explore/") && var_e.src.includes(".mp4");
  }
  ,
  getUrl: param_t => param_t.node.src
  }
  ],
  default: {
  getUrl: param_t => {
  var var_e = param_t.node,
  var_r = param_t.url;
  return fn_l(void 0, void 0, void 0, var_u().m(function var_t() {
  var var_s, var_c_1, var_l, var_f_1, var_d, var_v, var_m;
  return var_u().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.p = param_t_1.n) {
  case 0:
  return param_t_1.n = 1, new Promise(param_t_2 => {
  Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.SCRIPTING.INJECT,
  file: "instagram",
  node: var_e
  }
  ).then(param_t_2), setTimeout(() => {
  param_t_2(!0);
  }
  , 1e3);
  }
  );
  case 1:
  if (param_t_1.p = 1, var_c_1 = var_p(var_e), var_l = JSON.parse(var_e.getAttribute(
  "savior-video-detail") || "{}")) {
  param_t_1.n = 2;
  break;
  }
  throw new Error("No data");
  case 2:
  if (var_l.caption && (var_c_1 = var_l.caption), var_f_1 = (null === (var_s = var_l.dashInfo) ||
  void 0 === var_s ? void 0 : var_s.video_dash_manifest) || var_l.video_dash_manifest ||
  var_l.videoDashManifest || var_l.manifest, !var_l.videoResources) {
  param_t_1.n = 3;
  break;
  }
  return param_t_1.a(2, var_l.videoResources.map(param_t_2 => {
  var var_e_1,
  var_r_1 = Object(dep_url_utils.f)(param_t_2.src);
  var_r_1.type = "video", var_r_1.filename = var_c_1, var_r_1.resolution = param_t_2.configHeight + "p";
  var var_n = Object(dep_dom_utils.getBestFitResolution)(param_t_2.configHeight) ||
  `${param_t_2.configWidth}x${param_t_2.configHeight}` || var_r_1.resolution;
  return var_r_1.quality = null === (var_e_1 = dep_media_constants.r[var_n + "p"]) ||
  void 0 === var_e_1 ? void 0 : var_e_1.label, var_r_1;
  }
  ));
  case 3:
  if (!var_f_1) {
  param_t_1.n = 4;
  break;
  }
  return var_d = Object(dep_format_resolver.d)(var_f_1, var_c_1), param_t_1.a(2,
  var_d);
  case 4:
  if (!var_l.sdSrc && !var_l.hdSrc) {
  param_t_1.n = 5;
  break;
  }
  return var_v = ["sdSrc", "hdSrc"], param_t_1.a(2, var_v.map(param_t_2 => {
  var var_e_1 = var_l[param_t_2],
  var_r_1 = Object(dep_url_utils.f)(var_e_1);
  var_r_1.filename = var_c_1, var_r_1.type = "video";
  var var_n = "hdSrc" == param_t_2 ? dep_media_constants.r["720p"] :
  dep_media_constants.r["480p"];
  return var_r_1.quality = var_n.label, var_r_1.i18n_quality = Object(dep_dom_utils.i18n)(
  var_n.i18n_label), var_r_1.filename = var_l.videoFBID || document.title, var_r_1;
  }
  ));
  case 5:
  if (!var_l.videoSrc && !var_l.videoUrl) {
  param_t_1.n = 6;
  break;
  }
  return param_t_1.a(2, var_l.videoSrc || var_l.videoUrl);
  case 6:
  param_t_1.n = 8;
  break;
  case 7:
  param_t_1.p = 7, var_m = param_t_1.v, console.warn(var_m);
  case 8:
  if (!var_r.includes(".mp4")) {
  param_t_1.n = 9;
  break;
  }
  return param_t_1.a(2, var_r);
  case 9:
  return param_t_1.a(2, var_h(var_e));
  }
  }
  , var_t, null, [[1, 7]]);
  }
  ));
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  return var_e.headers = obj_d, var_e.includeCredentials = !0, "video";
  }
  }
  ,
  addNode: function () {
  return ['video[src*="instagram"]'];
  }
  ,
  toggleLight: {
  turnOff: {
  parentUpdate(param_t) {
  var var_e,
  var_r = param_t.closest("[role=presentation]");
  var_r && !var_r.classList.contains("--savior-overlay-z-index-top") &&
  var_r.classList.add("--savior-overlay-z-index-reset"), Array.from((null === (var_e = param_t.parentElement) ||
  void 0 === var_e ? void 0 : var_e.children) || []).filter(param_e => {
  var var_r_1, var_n;
  return param_e != param_t || (null === (var_n = null === (var_r_1 = param_e.style) ||
  void 0 === var_r_1 ? void 0 : var_r_1.paddingBottom) || void 0 === var_n ?
  void 0 : var_n.endsWith("%"));
  }
  ).forEach(param_t_1 => {
  param_t_1.classList.contains("--savior-overlay-z-index-top") ||
  param_t_1.classList.add("--savior-overlay-z-index-reset");
  }
  ), location.pathname.startsWith("/reels") && (param_t.style.overflow = "hidden");
  }
  }
  ,
  turnOn: {
  parentUpdate(param_t) {
  location.pathname.startsWith("/reels") && (param_t.style.overflow = "auto");
  }
  }
  }
  };
  exportsObj.default = obj_v;
  };
