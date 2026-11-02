// Module 295 - Savior Nimo_tv Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_dom_utils = requireFn(0),
  dep_media_sniffer = requireFn(6),
  dep_quality_helper = requireFn(9),
  dep_dom_helper = requireFn(12),
  dep_url_utils = requireFn(3);
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
  var_l_2 = Object.create(var_u_1.prototype);
  return var_c(var_l_2, "_invoke", function (param_r_1, param_n_1, param_i_1) {
  var var_o_1,
  var_s_1,
  var_u_2,
  num_c = 0,
  var_l_3 = param_i_1 || [],
  flag_f = !1,
  obj_d = {
  p: 0,
  n: 0,
  v: var_t,
  a: var_h_1,
  f: var_h_1.bind(var_t, 4),
  d: function (param_e, param_r_2) {
  return var_o_1 = param_e, var_s_1 = 0, var_u_2 = var_t, obj_d.n = param_r_2, obj_a;
  }
  };
  function var_h_1(param_r_2, param_n_2) {
  for (var_s_1 = param_r_2, var_u_2 = param_n_2, var_e = 0;
  !flag_f && num_c && !var_i_1 && var_e < var_l_3.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_3[var_e],
  var_h_2 = obj_d.p,
  var_p_1 = var_o_2[2];
  param_r_2 > 3 ? (var_i_1 = var_p_1 === param_n_2) && (var_u_2 = var_o_2[(var_s_1 = var_o_2[4]) ?
  5 : (var_s_1 = 3, 3)], var_o_2[4] = var_o_2[5] = var_t) : var_o_2[0] <= var_h_2 &&
  ((var_i_1 = param_r_2 < 2 && var_h_2 < var_o_2[1]) ? (var_s_1 = 0, obj_d.v = param_n_2,
  obj_d.n = var_o_2[1]) : var_h_2 < var_p_1 && (var_i_1 = param_r_2 < 3 ||
  var_o_2[0] > param_n_2 || param_n_2 > var_p_1) && (var_o_2[4] = param_r_2, var_o_2[5] = param_n_2,
  obj_d.n = var_p_1, var_s_1 = 0));
  }
  if (var_i_1 || param_r_2 > 1) return obj_a;
  throw flag_f = !0, param_n_2;
  }
  return function (param_i_2, param_l, param_p) {
  if (num_c > 1) throw TypeError("Generator is already running");
  for (flag_f && 1 === param_l && var_h_1(param_l, param_p), var_s_1 = param_l, var_u_2 = param_p;
  (var_e = var_s_1 < 2 ? var_t : var_u_2) || !flag_f;
  ) {
  var_o_1 || (var_s_1 ? var_s_1 < 3 ? (var_s_1 > 1 && (obj_d.n = -1), var_h_1(var_s_1,
  var_u_2)) : obj_d.n = var_u_2 : obj_d.v = var_u_2);
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
  else if ((var_e = (flag_f = obj_d.n < 0) ? var_u_2 : param_r_1.call(param_n_1,
  obj_d)) !== obj_a) break;
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
  (param_r, param_i, param_o), !0), var_l_2;
  }
  var obj_a = {
  };
  function var_s() {
  }
  function var_l_1() {
  }
  function var_f_1() {
  }
  var_e = Object.getPrototypeOf;
  var var_d_1 = [][var_n] ? var_e(var_e([][var_n]())) : (var_c(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_h = var_f_1.prototype = var_s.prototype = Object.create(var_d_1);
  function var_p(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_f_1) :
  (param_t.__proto__ = var_f_1, var_c(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h), param_t;
  }
  return var_l_1.prototype = var_f_1, var_c(var_h, "constructor", var_f_1), var_c(
  var_f_1, "constructor", var_l_1), var_l_1.displayName = "GeneratorFunction", var_c(
  var_f_1, var_i, "GeneratorFunction"), var_c(var_h), var_c(var_h, var_i, "Generator"),
  var_c(var_h, var_n, function () {
  return this;
  }
  ), var_c(var_h, "toString", function () {
  return "[object Generator]";
  }
  ), (var_u = function () {
  return {
  w: var_o,
  m: var_p
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
  var var_l,
  var_f,
  var_d,
  fn_h = function (param_t, param_e, param_r, param_n) {
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
  obj_p = {
  2: "720p",
  3: "480p",
  4: "360p",
  5: "240p",
  6: "1080p"
  }
  ,
  var_v = location.href,
  list_m = [""],
  list_y = [];
  function var_g(param_t) {
  var var_e = param_t.indexOf("?");
  -1 != var_e && (param_t = param_t.slice(0, var_e));
  for (var num_r = 0, var_n = list_y;
  num_r < var_n.length;
  num_r++) {
  var var_i = var_n[num_r];
  if (var_i.some(param_e => param_e.url.includes(param_t))) return var_i;
  }
  }
  function var_b(param_t) {
  for (var var_e = new Uint8Array(param_t), var_r = new TextDecoder("utf-8"), list_n = [],
  var_i = Array.from(new TextEncoder().encode("https://")), num_o = 0;
  num_o < var_e.length;
  ) {
  for (var flag_a = !0, num_s = 0;
  num_s < var_i.length;
  num_s++) if (var_e[num_o + num_s] !== var_i[num_s]) {
  flag_a = !1;
  break;
  }
  if (flag_a) {
  for (var var_u_1 = num_o, var_c_1 = num_o;
  var_c_1 < var_e.length && 28 !== var_e[var_c_1];
  ) var_c_1++;
  var var_l_1 = var_e.slice(var_u_1, var_c_1),
  var_f_1 = var_r.decode(var_l_1),
  var_d_1 = var_c_1 + 2;
  if (var_d_1 < var_e.length) {
  var var_h = var_e[var_d_1];
  list_n.push({
  url: var_f_1,
  resolutionIndex: var_h
  }
  );
  }
  num_o = var_d_1 + 1;
  }
  else num_o++;
  }
  return list_n;
  }
  function var_w(param_t, param_e) {
  var var_r = "&" + (null == param_t ? void 0 : param_t.slice(1));
  return param_e.split("\n").map(param_t_1 => param_t_1.trim().startsWith("#") ||
  !param_t_1.trim() ? param_t_1 : param_t_1 + var_r).join("\n");
  }
  exportsObj.default = {
  getDomains: () => ["nimo.tv"],
  forceUpdate() {
  location.href !== var_v && (var_v = location.href, var_l = null, var_f = null);
  }
  ,
  isValidVideoNode: param_t => {
  var var_e, var_r;
  return "live" != (null === (var_r = null === (var_e = null == param_t ?
  void 0 : param_t.closest(".nimo-player")) || void 0 === var_e ?
  void 0 : var_e.querySelector(".controls")) || void 0 === var_r ?
  void 0 : var_r.getAttribute("type")) && Object(dep_dom_helper.m)(param_t);
  }
  ,
  parse: {
  sources: [{
  checkSource: () => location.href.includes("https://www.nimo.tv/v/") ||
  location.href.includes("https://www.nimo.tv/clip/"),
  parse: param_t => fn_h(void 0, void 0, void 0, var_u().m(function var_e() {
  var var_r, var_a, var_c_1, var_p, var_v_1, var_m, var_y;
  return var_u().w(function (param_e) {
  for (;;
  ) switch (param_e.n) {
  case 0:
  if (var_l && var_l.requestBody) {
  param_e.n = 7;
  break;
  }
  if (!(var_r = var_g(var_f || param_t.media.url.toString()))) {
  param_e.n = 6;
  break;
  }
  var_a = [], var_c_1 = 0;
  case 1:
  if (!(var_c_1 < var_r.length)) {
  param_e.n = 5;
  break;
  }
  return param_e.n = 2, fetch(var_r[var_c_1].url).then(param_t_1 => param_t_1.text(
  ));
  case 2:
  return var_p = param_e.v, var_v_1 = new URL(var_d || ""), param_e.n = 3, Object(
  dep_media_sniffer.e)(var_p, param_t.media);
  case 3:
  (var_m = param_e.v[0]).resolution = var_r[var_c_1].resolution + "p", var_y = new dep_quality_helper.a(
  ).getQualityNameByResolution(var_m.resolution), var_m.quality = var_y ||
  "Standard", var_m.url = var_r[var_c_1].url, var_m.play_list = var_w(var_v_1.search,
  var_m.play_list || ""), var_m.host = "hs-vod.nimo.tv", var_m.referrer = "https://www.nimo.tv",
  var_m.url.includes("playlist") || (var_m.ext = "mp4", var_m.exts = ["mp4"], delete var_m.play_list,
  delete var_m._hls, var_m.url = var_m.url.replace(".m3u8", ".ts")), var_a.push(
  var_m);
  case 4:
  var_c_1++, param_e.n = 1;
  break;
  case 5:
  return param_e.a(2, var_a);
  case 6:
  return param_e.a(2, Object(dep_media_sniffer.e)(param_t.response, param_t.media));
  case 7:
  return param_e.a(2, fetch(var_l.url.toString(), {
  method: "POST",
  referrer: "https://www.nimo.tv",
  body: Object(dep_dom_utils.base64ToArrayBuffer)(var_l.requestBody)
  }
  ).then(param_t_1 => param_t_1.arrayBuffer()).then(param_e_1 => fn_h(void 0, void 0,
  void 0, var_u().m(function var_r_1() {
  var var_n, var_a_1, var_c_2, var_l_1, var_h, var_p_1, var_v_2, var_m_1, var_y_1,
  var_g_1, var_b_1, var_A, var__, var_E;
  return var_u().w(function (param_r) {
  for (;;
  ) switch (param_r.n) {
  case 0:
  for (var_n = new TextDecoder().decode(param_e_1), var_a_1 = /(\d{3,4})P.*?(https:[^\s!]+)/g,
  var_c_2 = [];
  null !== (var_l_1 = var_a_1.exec(var_n));
  ) var_h = var_l_1[1] + "p", var_p_1 = var_l_1[2], var_c_2.push({
  resolution: var_h,
  url: var_p_1
  }
  );
  var_v_2 = [], var_m_1 = 0;
  case 1:
  if (!(var_m_1 < var_c_2.length)) {
  param_r.n = 5;
  break;
  }
  return param_r.n = 2, fetch(var_c_2[var_m_1].url).then(param_t_1 => param_t_1.text(
  ));
  case 2:
  return var_y_1 = param_r.v, var_g_1 = new URL(var_d || ""), param_t.media.url = var_c_2[var_m_1].url,
  param_r.n = 3, Object(dep_media_sniffer.e)(var_y_1, param_t.media);
  case 3:
  (var_b_1 = param_r.v[0]).resolution = var_c_2[var_m_1].resolution, var_A = new dep_quality_helper.a(
  ).getQualityNameByResolution(var_b_1.resolution), var_b_1.quality = var_A ||
  "Standard", var_b_1.url = var_c_2[var_m_1].url, var_b_1.host = "hs-vod.nimo.tv",
  var_b_1.referrer = "https://www.nimo.tv", var_b_1.play_list = var_w(var_g_1.search,
  var_b_1.play_list || ""), var_b_1.url.includes("playlist") ||
  (var_b_1.ext = "mp4", var_b_1.exts = ["mp4"], delete var_b_1.play_list, delete var_b_1._hls,
  var_b_1.url = var_b_1.url.replace(".m3u8", ".ts")), var_v_2.push(var_b_1);
  case 4:
  var_m_1++, param_r.n = 1;
  break;
  case 5:
  if (var_c_2.length || !var_f) {
  param_r.n = 7;
  break;
  }
  return var__ = Object(dep_url_utils.f)(var_f), param_r.n = 6, Object(dep_media_sniffer.a)(
  var_f, var__.search.slice(1));
  case 6:
  return var_E = param_r.v, var__.play_list = var_E, var__.type = "video", var__.filename = param_t.media.filename,
  param_r.a(2, [var__]);
  case 7:
  return param_r.a(2, var_v_2);
  }
  }
  , var_r_1);
  }
  ))));
  }
  }
  , var_e);
  }
  ))
  }
  , {
  checkSource: () => location.href.includes("https://www.nimo.tv/"),
  parse: param_t => fn_h(void 0, void 0, void 0, var_u().m(function var_e() {
  return var_u().w(function (param_e) {
  for (;;
  ) switch (param_e.n) {
  case 0:
  if (var_l && var_l.requestBody) {
  param_e.n = 1;
  break;
  }
  return param_e.a(2, []);
  case 1:
  return param_e.a(2, fetch(var_l.url.toString(), {
  method: "POST",
  referrer: "https://www.nimo.tv",
  body: Object(dep_dom_utils.base64ToArrayBuffer)(var_l.requestBody)
  }
  ).then(param_t_1 => param_t_1.arrayBuffer()).then(param_e_1 => fn_h(void 0, void 0,
  void 0, var_u().m(function var_r() {
  var var_n, var_a, var_s, var_c_1, var_l_1, var_f_1, var_h;
  return var_u().w(function (param_r) {
  for (;;
  ) switch (param_r.n) {
  case 0:
  var_n = var_b(param_e_1), var_a = [], var_s = 0;
  case 1:
  if (!(var_s < var_n.length)) {
  param_r.n = 5;
  break;
  }
  return param_r.n = 2, fetch(var_n[var_s].url).then(param_t_1 => param_t_1.text(
  ));
  case 2:
  return var_c_1 = param_r.v, var_l_1 = new URL(var_d || ""), param_t.media.url = var_n[var_s].url,
  param_r.n = 3, Object(dep_media_sniffer.e)(var_c_1, param_t.media);
  case 3:
  (var_f_1 = param_r.v[0]).resolution = obj_p[var_n[var_s].resolutionIndex], var_h = new dep_quality_helper.a(
  ).getQualityNameByResolution(var_f_1.resolution), var_f_1.quality = var_h ||
  "Standard", var_f_1.url = var_n[var_s].url, var_f_1.host = "hs-vod.nimo.tv", var_f_1.referrer = "https://www.nimo.tv",
  var_f_1.play_list = var_w(var_l_1.search, var_f_1.play_list ||
  ""), var_a.push(var_f_1);
  case 4:
  var_s++, param_r.n = 1;
  break;
  case 5:
  return param_r.a(2, var_a);
  }
  }
  , var_r);
  }
  ))));
  }
  }
  , var_e);
  }
  ))
  }
  ]
  }
  ,
  processRequestIds: param_t => {
  var var_e,
  var_r = param_t.url.toString();
  if (var_r.includes("https://hs-vod2.nimo.tv/")) if (var_r.includes(".m3u8")) {
  if (!var_f) return var_f = param_t.url.toString(), !0;
  }
  else var_d || (var_d = var_r);
  if (var_r.includes("https://wsapi.nimo.tv/") && !var_l) return var_l = param_t,
  !0;
  if (param_t.url.toString().includes("https://video.nimo.tv/v1/liveVideo/aggregateVideos")) {
  if (-1 != list_m.indexOf(param_t.url.toString())) return !1;
  list_m.push(param_t.url.toString());
  var var_n = new FormData();
  return null === (var_e = param_t.requestBodyFormData) || void 0 === var_e ||
  var_e.forEach(param_t_1 => var_n.append(param_t_1[0], param_t_1[1])), fetch(param_t.url.toString(
  ), {
  method: "POST",
  referrer: "https://www.nimo.tv",
  body: var_n
  }
  ).then(param_t_1 => param_t_1.text()).then(param_t_1 => {
  JSON.parse(param_t_1).data.result.aggregateVideoLists.forEach(param_t_2 => {
  param_t_2.liveVideoViewList.forEach(param_t_3 => {
  var list_e = [];
  param_t_3.multiResolutionVideoUrl.forEach(param_t_4 => {
  var obj_r = {
  resolution: param_t_4.iresolution,
  url: param_t_4.videoUrl
  };
  list_e.push(obj_r);
  }
  ), list_y.push(list_e);
  }
  );
  }
  );
  }
  ), !0;
  }
  }
  ,
  default: {
  getUrl: param_t => {
  param_t.url;
  return fn_h(void 0, void 0, void 0, var_u().m(function var_t() {
  return var_u().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  if (!var_f || !var_g(var_f)) {
  param_t_1.n = 1;
  break;
  }
  return param_t_1.a(2, var_f);
  case 1:
  if (!(null == var_l ? void 0 : var_l.url)) {
  param_t_1.n = 2;
  break;
  }
  return param_t_1.a(2, "https://google.com");
  case 2:
  return param_t_1.a(2, []);
  }
  }
  , var_t);
  }
  ));
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  var_e.ext = "m3u8", var_e.exts = ["m3u8"];
  }
  }
  };
  };
