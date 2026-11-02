// Module 269 - Savior Linkedin_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj), requireFn.d(exportsObj, "createM3u8FromPlaylist", function (
  ) {
  return var_h;
  }
  );
  var dep_media_constants = requireFn(1),
  dep_dom_utils = requireFn(0),
  dep_url_utils = requireFn(3),
  dep_format_resolver = requireFn(14);
  function var_s() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var var_t,
  var_e,
  var_r = "function" == typeof Symbol ? Symbol : {
  }
  ,
  var_n = var_r.iterator || "@@iterator",
  var_i = var_r.toStringTag || "@@toStringTag";
  function var_o(param_r, param_n, param_i, param_o) {
  var var_s_1 = param_n && param_n.prototype instanceof var_c_1 ?
  param_n : var_c_1,
  var_l_2 = Object.create(var_s_1.prototype);
  return var_u(var_l_2, "_invoke", function (param_r_1, param_n_1, param_i_1) {
  var var_o_1,
  var_s_2,
  var_u_1,
  num_c = 0,
  var_l_3 = param_i_1 || [],
  flag_f = !1,
  obj_d = {
  p: 0,
  n: 0,
  v: var_t,
  a: var_h_2,
  f: var_h_2.bind(var_t, 4),
  d: function (param_e, param_r_2) {
  return var_o_1 = param_e, var_s_2 = 0, var_u_1 = var_t, obj_d.n = param_r_2, obj_a;
  }
  };
  function var_h_2(param_r_2, param_n_2) {
  for (var_s_2 = param_r_2, var_u_1 = param_n_2, var_e = 0;
  !flag_f && num_c && !var_i_1 && var_e < var_l_3.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_3[var_e],
  var_h_3 = obj_d.p,
  var_p_1 = var_o_2[2];
  param_r_2 > 3 ? (var_i_1 = var_p_1 === param_n_2) && (var_u_1 = var_o_2[(var_s_2 = var_o_2[4]) ?
  5 : (var_s_2 = 3, 3)], var_o_2[4] = var_o_2[5] = var_t) : var_o_2[0] <= var_h_3 &&
  ((var_i_1 = param_r_2 < 2 && var_h_3 < var_o_2[1]) ? (var_s_2 = 0, obj_d.v = param_n_2,
  obj_d.n = var_o_2[1]) : var_h_3 < var_p_1 && (var_i_1 = param_r_2 < 3 ||
  var_o_2[0] > param_n_2 || param_n_2 > var_p_1) && (var_o_2[4] = param_r_2, var_o_2[5] = param_n_2,
  obj_d.n = var_p_1, var_s_2 = 0));
  }
  if (var_i_1 || param_r_2 > 1) return obj_a;
  throw flag_f = !0, param_n_2;
  }
  return function (param_i_2, param_l, param_p) {
  if (num_c > 1) throw TypeError("Generator is already running");
  for (flag_f && 1 === param_l && var_h_2(param_l, param_p), var_s_2 = param_l, var_u_1 = param_p;
  (var_e = var_s_2 < 2 ? var_t : var_u_1) || !flag_f;
  ) {
  var_o_1 || (var_s_2 ? var_s_2 < 3 ? (var_s_2 > 1 && (obj_d.n = -1), var_h_2(var_s_2,
  var_u_1)) : obj_d.n = var_u_1 : obj_d.v = var_u_1);
  try {
  if (num_c = 2, var_o_1) {
  if (var_s_2 || (param_i_2 = "next"), var_e = var_o_1[param_i_2]) {
  if (!(var_e = var_e.call(var_o_1, var_u_1))) throw TypeError("iterator result is not an object");
  if (!var_e.done) return var_e;
  var_u_1 = var_e.value, var_s_2 < 2 && (var_s_2 = 0);
  }
  else 1 === var_s_2 && (var_e = var_o_1.return) && var_e.call(var_o_1), var_s_2 < 2 &&
  (var_u_1 = TypeError("The iterator does not provide a '" + param_i_2 + "' method"),
  var_s_2 = 1);
  var_o_1 = var_t;
  }
  else if ((var_e = (flag_f = obj_d.n < 0) ? var_u_1 : param_r_1.call(param_n_1,
  obj_d)) !== obj_a) break;
  }
  catch (var_e_1) {
  var_o_1 = var_t, var_s_2 = 1, var_u_1 = var_e_1;
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
  (param_r, param_i, param_o), !0), var_l_2;
  }
  var obj_a = {
  };
  function var_c_1() {
  }
  function var_l_1() {
  }
  function var_f() {
  }
  var_e = Object.getPrototypeOf;
  var var_d_1 = [][var_n] ? var_e(var_e([][var_n]())) : (var_u(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_h_1 = var_f.prototype = var_c_1.prototype = Object.create(var_d_1);
  function var_p(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_f) :
  (param_t.__proto__ = var_f, var_u(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h_1), param_t;
  }
  return var_l_1.prototype = var_f, var_u(var_h_1, "constructor", var_f), var_u(
  var_f, "constructor", var_l_1), var_l_1.displayName = "GeneratorFunction", var_u(
  var_f, var_i, "GeneratorFunction"), var_u(var_h_1), var_u(var_h_1, var_i, "Generator"),
  var_u(var_h_1, var_n, function () {
  return this;
  }
  ), var_u(var_h_1, "toString", function () {
  return "[object Generator]";
  }
  ), (var_s = function () {
  return {
  w: var_o,
  m: var_p
  };
  }
  )();
  }
  function var_u(param_t, param_e, param_r, param_n) {
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
  (var_u = function (param_t_1, param_e_1, param_r_1, param_n_1) {
  function var_o(param_e_2, param_r_2) {
  var_u(param_t_1, param_e_2, function (param_t_2) {
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
  function var_c(param_t, param_e) {
  var var_r = "undefined" != typeof Symbol && param_t[Symbol.iterator] ||
  param_t["@@iterator"];
  if (!var_r) {
  if (Array.isArray(param_t) || (var_r = function (param_t_1, param_e_1) {
  if (param_t_1) {
  if ("string" == typeof param_t_1) return var_l(param_t_1, param_e_1);
  var var_r_1 = {
  }
  .toString.call(param_t_1).slice(8, -1);
  return "Object" === var_r_1 && param_t_1.constructor && (var_r_1 = param_t_1.constructor.name),
  "Map" === var_r_1 || "Set" === var_r_1 ? Array.from(param_t_1) :
  "Arguments" === var_r_1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(var_r_1) ?
  var_l(param_t_1, param_e_1) : void 0;
  }
  }
  (param_t)) || param_e && param_t && "number" == typeof param_t.length) {
  var_r && (param_t = var_r);
  var num_n = 0,
  fn_i = function () {
  };
  return {
  s: fn_i,
  n: function () {
  return num_n >= param_t.length ? {
  done: !0
  }
  : {
  done: !1,
  value: param_t[num_n++]
  };
  }
  ,
  e: function (param_t_1) {
  throw param_t_1;
  }
  ,
  f: fn_i
  };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var var_o,
  flag_a = !0,
  flag_s = !1;
  return {
  s: function () {
  var_r = var_r.call(param_t);
  }
  ,
  n: function () {
  var var_t = var_r.next();
  return flag_a = var_t.done, var_t;
  }
  ,
  e: function (param_t_1) {
  flag_s = !0, var_o = param_t_1;
  }
  ,
  f: function () {
  try {
  flag_a || null == var_r.return || var_r.return();
  }
  finally {
  if (flag_s) throw var_o;
  }
  }
  };
  }
  function var_l(param_t, param_e) {
  (null == param_e || param_e > param_t.length) && (param_e = param_t.length);
  for (var num_r = 0, var_n = Array(param_e);
  num_r < param_e;
  num_r++) var_n[num_r] = param_t[num_r];
  return var_n;
  }
  var fn_f = function (param_t, param_e, param_r, param_n) {
  return new (param_r || (param_r = Promise))(function (param_i, param_o) {
  function var_a(param_t_1) {
  try {
  var_u_1(param_n.next(param_t_1));
  }
  catch (var_t) {
  param_o(var_t);
  }
  }
  function var_s_1(param_t_1) {
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
  )).then(var_a, var_s_1);
  }
  var_u_1((param_n = param_n.apply(param_t, param_e || [])).next());
  }
  );
  };
  function var_d(param_t) {
  return param_t.resolvedUri || param_t.uri || "";
  }
  function var_h(param_t) {
  var var_e,
  var_r,
  var_n,
  var_i,
  list_o = ["#EXTM3U", "#EXT-X-VERSION:" + (null !== (var_e = param_t.version) &&
  void 0 !== var_e ? var_e : 7), "#EXT-X-TARGETDURATION:" + Math.ceil(param_t.targetDuration),
  "#EXT-X-MEDIA-SEQUENCE:" + (null !== (var_r = param_t.mediaSequence) &&
  void 0 !== var_r ? var_r : 0)];
  (param_t.playlistType || param_t.endList) && list_o.push("#EXT-X-PLAYLIST-TYPE:" + (
  null !== (var_n = param_t.playlistType) && void 0 !== var_n ?
  var_n : "VOD"));
  var var_a,
  var_s_1,
  var_u_1,
  str_l = "",
  str_f = "",
  var_h_1 = var_c(param_t.segments);
  try {
  for (var_h_1.s();
  !(var_a = var_h_1.n()).done;
  ) {
  var var_p = var_a.value,
  var_v_1 = (null == (var_u_1 = var_p.map) ? void 0 : var_u_1.resolvedUri) ||
  (null == var_u_1 ? void 0 : var_u_1.uri) || "";
  if (var_v_1 && var_v_1 !== str_l && (list_o.push(`#EXT-X-MAP:URI="${var_v_1}
  
  
  "`), str_l = var_v_1), var_p.key) {
  var var_m = "NONE" === var_p.key.method ? "#EXT-X-KEY:METHOD=NONE" :
  `#EXT-X-KEY:METHOD=${var_p.key.method}
  
  
  ,URI="${null !== (var_i = var_p.key.uri) && void 0 !== var_i ?
  var_i : ""}
  
  
  "${var_p.key.iv ? ",IV=" + var_p.key.iv : ""}
  
  
  `;
  var_m !== str_f && (list_o.push(var_m), str_f = var_m);
  }
  var var_y = var_d(var_p);
  var_y && (list_o.push(`#EXTINF:${var_s_1 = var_p.duration, Number(var_s_1.toFixed(
  3)).toString()}
  
  
  ,`), list_o.push(var_y));
  }
  }
  catch (var_t) {
  var_h_1.e(var_t);
  }
  finally {
  var_h_1.f();
  }
  return !1 !== param_t.endList && list_o.push("#EXT-X-ENDLIST"), list_o.join("\n");
  }
  var obj_p = {
  };
  function var_v(param_t, param_e) {
  var var_r = param_t.closest('.feed-shared-update-v2, [role="listitem"][componentkey*="update-card-focus"]'),
  var_n = null == var_r ? void 0 : var_r.querySelector('article, [class*="linkedin-video__description"], .feed-shared-update-v2__description, [data-testid="expandable-text-box"]');
  var_n && (param_e.filename = var_n.innerText, param_e.fixName = var_n.innerText);
  }
  var obj_m = {
  getDomains: () => ["linkedin.com"],
  default: {
  getUrl: param_t => {
  var var_e = param_t.node;
  return fn_f(void 0, void 0, void 0, var_s().m(function var_t() {
  var var_r, var_a, var_u_1, var_c_1, var_l_1;
  return var_s().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.p = param_t_1.n) {
  case 0:
  if (var_e.hasAttribute("savior-manifest-url")) {
  param_t_1.n = 4;
  break;
  }
  return param_t_1.p = 1, obj_p.hasOwnProperty("linkedin") ||
  (obj_p.linkedin = Promise.race([Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.SCRIPTING.INJECT,
  file: "linkedin"
  }
  ), Object(dep_dom_utils.sleep)(1e3)])), param_t_1.n = 2, obj_p.linkedin;
  case 2:
  delete obj_p.linkedin, param_t_1.n = 4;
  break;
  case 3:
  param_t_1.p = 3, param_t_1.v, EE.emit("widget.forceUpdate");
  case 4:
  if (!(null == (var_a = var_e.getAttribute("savior-manifest-url")) ?
  void 0 : var_a.startsWith("data:application"))) {
  param_t_1.n = 7;
  break;
  }
  return param_t_1.p = 5, var_u_1 = JSON.parse(var_a.slice(var_a.indexOf(",") + 1)),
  var_c_1 = null === (var_r = var_u_1.playlists) || void 0 === var_r ?
  void 0 : var_r.map(param_t_2 => {
  var var_r_1,
  var_a_1,
  var_s_1,
  var_u_2 = Object(dep_url_utils.f)(var_e.src.replace(/^blob:/, "")),
  var_c_2 = null === (var_a_1 = null === (var_r_1 = param_t_2.attributes) ||
  void 0 === var_r_1 ? void 0 : var_r_1.RESOLUTION) || void 0 === var_a_1 ?
  void 0 : var_a_1.width,
  var_l_2 = var_c_2 ? var_c_2 + "p" : void 0;
  return var_u_2.play_list = var_h(param_t_2), var_u_2.ext = "m3u8", var_u_2.exts = ["m3u8"],
  var_u_2.type = "video", var_l_2 && (var_u_2.resolution = var_l_2, var_u_2.quality = (
  null === (var_s_1 = dep_media_constants.r[var_l_2]) || void 0 === var_s_1 ?
  void 0 : var_s_1.label) || var_l_2, var_u_2.i18n_quality = dep_media_constants.r[var_l_2] ?
  Object(dep_dom_utils.i18n)(dep_media_constants.r[var_l_2].i18n_label) :
  var_l_2), var_v(var_e, var_u_2), var_u_2;
  }
  ).filter(Boolean), param_t_1.a(2, var_c_1);
  case 6:
  return param_t_1.p = 6, var_l_1 = param_t_1.v, console.error("Failed to parse manifest data:",
  var_l_1), param_t_1.a(2, []);
  case 7:
  return param_t_1.a(2, var_a);
  }
  }
  , var_t, null, [[5, 6], [1, 3]]);
  }
  ));
  }
  ,
  mediaObjectChange: param_t => {
  var var_e,
  var_r,
  var_n = param_t.mediaObject,
  var_i = param_t.node;
  if (var_v(var_i, var_n), (null === (var_e = null == var_n ?
  void 0 : var_n.url) || void 0 === var_e ? void 0 : var_e.match(/^https:\/\/dms.licdn\.com\/playlist/)) &&
  var_n.url == (null == var_i ? void 0 : var_i.src) || var_n.url == var_i.getAttribute(
  "savior-manifest-url")) return (null === (var_r = var_i.src) ||
  void 0 === var_r ? void 0 : var_r.endsWith("mp4")) || var_n.url == (null == var_i ?
  void 0 : var_i.src) ? (var_n.ext = "mp4", var_n.exts = ["mp4"]) :
  (var_n.ext = "m3u8", var_n.exts = ["m3u8"]), "video";
  }
  }
  ,
  toggleLight: {
  turnOff: {
  updated(param_t) {
  var var_e = (null == param_t ? void 0 : param_t.querySelector(".classroom-layout__screen")) ||
  (null == param_t ? void 0 : param_t.closest(".classroom-layout__screen"));
  null == var_e || var_e.classList.add("--savior-overlay-z-index-top");
  }
  }
  }
  ,
  parse: {
  default: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return var_e.url = "https://google.com", var_r.startsWith("<MPD") ?
  Object(dep_format_resolver.b)(var_r, var_e.filename || document.title, var_e.host,
  String(var_e.url)).map(param_t_1 => Object.assign(Object.assign({
  }
  , param_t_1), {
  ext: "mp4",
  exts: ["mp4"]
  }
  )) : [var_e];
  }
  }
  ,
  processRequestIds: () => !0
  };
  exportsObj.default = obj_m;
  };
