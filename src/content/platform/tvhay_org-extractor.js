// Module 359 - Savior Tvhay_org Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_network_monitor = requireFn(20),
  dep_extractor_url_merger = requireFn(23),
  dep_token_hash_util = requireFn(45);
  function var_a() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var var_t,
  var_e,
  var_r = "function" == typeof Symbol ? Symbol : {
  }
  ,
  var_n = var_r.iterator || "@@iterator",
  var_i = var_r.toStringTag || "@@toStringTag";
  function var_o(param_r, param_n, param_i, param_o) {
  var var_a_1 = param_n && param_n.prototype instanceof var_c_1 ?
  param_n : var_c_1,
  var_l_2 = Object.create(var_a_1.prototype);
  return var_s(var_l_2, "_invoke", function (param_r_1, param_n_1, param_i_1) {
  var var_o_1,
  var_a_2,
  var_s_1,
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
  return var_o_1 = param_e, var_a_2 = 0, var_s_1 = var_t, obj_d.n = param_r_2, obj_u;
  }
  };
  function var_h_1(param_r_2, param_n_2) {
  for (var_a_2 = param_r_2, var_s_1 = param_n_2, var_e = 0;
  !flag_f && num_c && !var_i_1 && var_e < var_l_3.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_3[var_e],
  var_h_2 = obj_d.p,
  var_p_1 = var_o_2[2];
  param_r_2 > 3 ? (var_i_1 = var_p_1 === param_n_2) && (var_s_1 = var_o_2[(var_a_2 = var_o_2[4]) ?
  5 : (var_a_2 = 3, 3)], var_o_2[4] = var_o_2[5] = var_t) : var_o_2[0] <= var_h_2 &&
  ((var_i_1 = param_r_2 < 2 && var_h_2 < var_o_2[1]) ? (var_a_2 = 0, obj_d.v = param_n_2,
  obj_d.n = var_o_2[1]) : var_h_2 < var_p_1 && (var_i_1 = param_r_2 < 3 ||
  var_o_2[0] > param_n_2 || param_n_2 > var_p_1) && (var_o_2[4] = param_r_2, var_o_2[5] = param_n_2,
  obj_d.n = var_p_1, var_a_2 = 0));
  }
  if (var_i_1 || param_r_2 > 1) return obj_u;
  throw flag_f = !0, param_n_2;
  }
  return function (param_i_2, param_l, param_p) {
  if (num_c > 1) throw TypeError("Generator is already running");
  for (flag_f && 1 === param_l && var_h_1(param_l, param_p), var_a_2 = param_l, var_s_1 = param_p;
  (var_e = var_a_2 < 2 ? var_t : var_s_1) || !flag_f;
  ) {
  var_o_1 || (var_a_2 ? var_a_2 < 3 ? (var_a_2 > 1 && (obj_d.n = -1), var_h_1(var_a_2,
  var_s_1)) : obj_d.n = var_s_1 : obj_d.v = var_s_1);
  try {
  if (num_c = 2, var_o_1) {
  if (var_a_2 || (param_i_2 = "next"), var_e = var_o_1[param_i_2]) {
  if (!(var_e = var_e.call(var_o_1, var_s_1))) throw TypeError("iterator result is not an object");
  if (!var_e.done) return var_e;
  var_s_1 = var_e.value, var_a_2 < 2 && (var_a_2 = 0);
  }
  else 1 === var_a_2 && (var_e = var_o_1.return) && var_e.call(var_o_1), var_a_2 < 2 &&
  (var_s_1 = TypeError("The iterator does not provide a '" + param_i_2 + "' method"),
  var_a_2 = 1);
  var_o_1 = var_t;
  }
  else if ((var_e = (flag_f = obj_d.n < 0) ? var_s_1 : param_r_1.call(param_n_1,
  obj_d)) !== obj_u) break;
  }
  catch (var_e_1) {
  var_o_1 = var_t, var_a_2 = 1, var_s_1 = var_e_1;
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
  var obj_u = {
  };
  function var_c_1() {
  }
  function var_l_1() {
  }
  function var_f_1() {
  }
  var_e = Object.getPrototypeOf;
  var var_d = [][var_n] ? var_e(var_e([][var_n]())) : (var_s(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_h = var_f_1.prototype = var_c_1.prototype = Object.create(var_d);
  function var_p(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_f_1) :
  (param_t.__proto__ = var_f_1, var_s(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h), param_t;
  }
  return var_l_1.prototype = var_f_1, var_s(var_h, "constructor", var_f_1), var_s(
  var_f_1, "constructor", var_l_1), var_l_1.displayName = "GeneratorFunction", var_s(
  var_f_1, var_i, "GeneratorFunction"), var_s(var_h), var_s(var_h, var_i, "Generator"),
  var_s(var_h, var_n, function () {
  return this;
  }
  ), var_s(var_h, "toString", function () {
  return "[object Generator]";
  }
  ), (var_a = function () {
  return {
  w: var_o,
  m: var_p
  };
  }
  )();
  }
  function var_s(param_t, param_e, param_r, param_n) {
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
  (var_s = function (param_t_1, param_e_1, param_r_1, param_n_1) {
  function var_o(param_e_2, param_r_2) {
  var_s(param_t_1, param_e_2, function (param_t_2) {
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
  var var_u,
  var_c,
  var_l,
  var_f,
  fn_d = function (param_t, param_e, param_r, param_n) {
  return new (param_r || (param_r = Promise))(function (param_i, param_o) {
  function var_a_1(param_t_1) {
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
  )).then(var_a_1, var_s_1);
  }
  var_u_1((param_n = param_n.apply(param_t, param_e || [])).next());
  }
  );
  }
  ,
  obj_h = {
  }
  ,
  obj_p = {
  }
  ,
  flag_v = !1;
  function var_m(param_t, param_e) {
  var var_r,
  var_n,
  var_i,
  var_o = param_e;
  if (!flag_v) try {
  if (null === (var_r = var_o.contentWindow) || void 0 === var_r ||
  var_r.onload, new URL(param_t).host === location.host) {
  var list_a = [...((null === (var_n = var_o.contentDocument) ||
  void 0 === var_n ? void 0 : var_n.querySelectorAll("iframe")) ||
  [])],
  var_s_1 = list_a.filter(param_t_1 => param_t_1.src && new URL(param_t_1.src).host.includes(
  "ok.ru"))[0];
  var_s_1 && (null === (var_i = var_s_1.contentWindow) || void 0 === var_i ||
  var_i.onload), list_a.filter(param_t_1 => param_t_1.src &&
  new URL(param_t_1.src).host == location.host).forEach(param_t_1 => var_m(param_t_1.src,
  param_t_1));
  }
  var_f = setTimeout(() => var_m(param_t, var_o), 1e3);
  }
  catch (var_t) {
  EE.emit("widget.updateMedia"), clearTimeout(var_f), flag_v = !0;
  }
  }
  var obj_y = {
  getDomains: () => ["tvhai.org", "tvhey.org", "phimthuyetminh.tv", "clbphimxua.com",
  "tvphim.", "tvhay.", "chillhayk."],
  getCustomParent: () => document.querySelector(".player-wrapper"),
  parse: {
  sources: null === (var_u = dep_network_monitor.a.parse) ||
  void 0 === var_u ? void 0 : var_u.sources,
  default: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  if (var_e.cacheUrl) try {
  var var_n = JSON.parse(var_r),
  var_i = obj_h[var_e.cacheUrl],
  var_o = var_i.domainList.length;
  if (1 != var_n.status || !var_i) return [];
  if (Array.isArray(var_n.data)) {
  var var_a_1 = Object.assign({
  }
  , var_e),
  list_s = ["#EXTM3U"];
  list_s.push("#EXT-X-VERSION:3"), list_s.push("#EXT-X-TARGETDURATION:" + var_n.tgdr),
  list_s.push("#EXT-X-PLAYLIST-TYPE:VOD");
  for (var num_u = 0;
  num_u < var_n.data[0].length;
  num_u++) 0 == num_u && (var_a_1.url = `https://${var_i.domainList[num_u % var_o]}
  
  
  /${var_n.data[1][num_u]}
  
  
  `), list_s.push(`#EXTINF:${var_n.data[0][num_u]}
  
  
  ,`), list_s.push(`https://${var_i.domainList[num_u % var_o]}
  
  
  /${var_n.data[1][num_u]}
  
  
  `);
  return list_s.push("#EXT-X-ENDLIST"), var_a_1.play_list = list_s.join("\n"), var_a_1.referrer = var_e.cacheUrl.split(
  "link=")[1], [var_a_1];
  }
  if (var_n.data) return var_n.data;
  }
  catch (var_t) {
  console.log(var_t);
  }
  if (obj_p[location.href]) {
  var var_c_1 = obj_p[location.href];
  if (obj_h[var_c_1]) return obj_h[var_c_1];
  }
  }
  }
  ,
  urls: [...(dep_token_hash_util.a.urls || []), {
  checkUrl: param_t => {
  var var_e = param_t.url;
  return Boolean(new URLSearchParams(new URL(var_e).search).get("url"));
  }
  ,
  getUrl: param_t => {
  var var_e = param_t.url;
  return fn_d(void 0, void 0, void 0, var_a().m(function var_t() {
  return var_a().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  return param_t_1.a(2, new URLSearchParams(new URL(var_e).search).get("url") ||
  "");
  }
  }
  , var_t);
  }
  ));
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  return var_e.ext = "m3u8", var_e.exts = ["m3u8"], "video";
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.url;
  return Boolean(var_e.match(/ok\.ru\/videoembed\/\d+/i));
  }
  ,
  getUrl: param_t => {
  var var_e = param_t.url,
  var_r = param_t.node,
  var_i = param_t.ids;
  return fn_d(void 0, void 0, void 0, var_a().m(function var_t() {
  var var_o, var_s_1, var_u_1;
  return var_a().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  return flag_v || var_m(var_e, var_r), param_t_1.a(2, null === (var_u_1 = null === (
  var_o = dep_network_monitor.a.urls) || void 0 === var_o ? void 0 :
  (var_s_1 = var_o[0]).getUrl) || void 0 === var_u_1 ? void 0 :
  var_u_1.call(var_s_1, {
  url: var_e,
  node: var_r,
  ids: var_i
  }
  ));
  }
  }
  , var_t);
  }
  ));
  }
  ,
  mediaObjectChange: null === (var_c = dep_network_monitor.a.urls) ||
  void 0 === var_c ? void 0 : var_c[0].mediaObjectChange
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.url;
  return "IFRAME" == param_t.node.nodeName && var_e.startsWith(location.origin);
  }
  ,
  getUrl: param_t => {
  var var_e = param_t.url,
  var_r = param_t.node,
  var_i = param_t.ids;
  return fn_d(void 0, void 0, void 0, var_a().m(function var_t() {
  var var_o, var_s_1, var_u_1;
  return var_a().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  return flag_v || var_m(var_e, var_r), param_t_1.a(2, null === (var_u_1 = null === (
  var_o = dep_network_monitor.a.urls) || void 0 === var_o ? void 0 :
  (var_s_1 = var_o[0]).getUrl) || void 0 === var_u_1 ? void 0 :
  var_u_1.call(var_s_1, {
  url: var_e,
  node: var_r,
  ids: var_i
  }
  ));
  }
  }
  , var_t);
  }
  ));
  }
  ,
  mediaObjectChange: null === (var_l = dep_network_monitor.a.urls) ||
  void 0 === var_l ? void 0 : var_l[0].mediaObjectChange
  }
  ]
  };
  exportsObj.default = Object(dep_extractor_url_merger.a)(dep_token_hash_util.a,
  ["parse", "processRequestIds"])(obj_y);
  };
