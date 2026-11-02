// Module 334 - Savior Sexvietz_tv Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  function var_n() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var var_t,
  var_e,
  var_r = "function" == typeof Symbol ? Symbol : {
  }
  ,
  var_o = var_r.iterator || "@@iterator",
  var_a = var_r.toStringTag || "@@toStringTag";
  function var_s(param_r, param_n, param_o, param_a) {
  var var_s_1 = param_n && param_n.prototype instanceof var_c ?
  param_n : var_c,
  var_l_1 = Object.create(var_s_1.prototype);
  return var_i(var_l_1, "_invoke", function (param_r_1, param_n_1, param_i) {
  var var_o_1,
  var_a_1,
  var_s_2,
  num_c = 0,
  var_l_2 = param_i || [],
  flag_f = !1,
  obj_d = {
  p: 0,
  n: 0,
  v: var_t,
  a: var_h_1,
  f: var_h_1.bind(var_t, 4),
  d: function (param_e, param_r_2) {
  return var_o_1 = param_e, var_a_1 = 0, var_s_2 = var_t, obj_d.n = param_r_2, obj_u;
  }
  };
  function var_h_1(param_r_2, param_n_2) {
  for (var_a_1 = param_r_2, var_s_2 = param_n_2, var_e = 0;
  !flag_f && num_c && !var_i_1 && var_e < var_l_2.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_2[var_e],
  var_h_2 = obj_d.p,
  var_p_1 = var_o_2[2];
  param_r_2 > 3 ? (var_i_1 = var_p_1 === param_n_2) && (var_s_2 = var_o_2[(var_a_1 = var_o_2[4]) ?
  5 : (var_a_1 = 3, 3)], var_o_2[4] = var_o_2[5] = var_t) : var_o_2[0] <= var_h_2 &&
  ((var_i_1 = param_r_2 < 2 && var_h_2 < var_o_2[1]) ? (var_a_1 = 0, obj_d.v = param_n_2,
  obj_d.n = var_o_2[1]) : var_h_2 < var_p_1 && (var_i_1 = param_r_2 < 3 ||
  var_o_2[0] > param_n_2 || param_n_2 > var_p_1) && (var_o_2[4] = param_r_2, var_o_2[5] = param_n_2,
  obj_d.n = var_p_1, var_a_1 = 0));
  }
  if (var_i_1 || param_r_2 > 1) return obj_u;
  throw flag_f = !0, param_n_2;
  }
  return function (param_i_1, param_l, param_p) {
  if (num_c > 1) throw TypeError("Generator is already running");
  for (flag_f && 1 === param_l && var_h_1(param_l, param_p), var_a_1 = param_l, var_s_2 = param_p;
  (var_e = var_a_1 < 2 ? var_t : var_s_2) || !flag_f;
  ) {
  var_o_1 || (var_a_1 ? var_a_1 < 3 ? (var_a_1 > 1 && (obj_d.n = -1), var_h_1(var_a_1,
  var_s_2)) : obj_d.n = var_s_2 : obj_d.v = var_s_2);
  try {
  if (num_c = 2, var_o_1) {
  if (var_a_1 || (param_i_1 = "next"), var_e = var_o_1[param_i_1]) {
  if (!(var_e = var_e.call(var_o_1, var_s_2))) throw TypeError("iterator result is not an object");
  if (!var_e.done) return var_e;
  var_s_2 = var_e.value, var_a_1 < 2 && (var_a_1 = 0);
  }
  else 1 === var_a_1 && (var_e = var_o_1.return) && var_e.call(var_o_1), var_a_1 < 2 &&
  (var_s_2 = TypeError("The iterator does not provide a '" + param_i_1 + "' method"),
  var_a_1 = 1);
  var_o_1 = var_t;
  }
  else if ((var_e = (flag_f = obj_d.n < 0) ? var_s_2 : param_r_1.call(param_n_1,
  obj_d)) !== obj_u) break;
  }
  catch (var_e_1) {
  var_o_1 = var_t, var_a_1 = 1, var_s_2 = var_e_1;
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
  (param_r, param_o, param_a), !0), var_l_1;
  }
  var obj_u = {
  };
  function var_c() {
  }
  function var_l() {
  }
  function var_f() {
  }
  var_e = Object.getPrototypeOf;
  var var_d = [][var_o] ? var_e(var_e([][var_o]())) : (var_i(var_e = {
  }
  , var_o, function () {
  return this;
  }
  ), var_e),
  var_h = var_f.prototype = var_c.prototype = Object.create(var_d);
  function var_p(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_f) :
  (param_t.__proto__ = var_f, var_i(param_t, var_a, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h), param_t;
  }
  return var_l.prototype = var_f, var_i(var_h, "constructor", var_f), var_i(var_f,
  "constructor", var_l), var_l.displayName = "GeneratorFunction", var_i(var_f, var_a,
  "GeneratorFunction"), var_i(var_h), var_i(var_h, var_a, "Generator"), var_i(var_h,
  var_o, function () {
  return this;
  }
  ), var_i(var_h, "toString", function () {
  return "[object Generator]";
  }
  ), (var_n = function () {
  return {
  w: var_s,
  m: var_p
  };
  }
  )();
  }
  function var_i(param_t, param_e, param_r, param_n) {
  var var_o = Object.defineProperty;
  try {
  var_o({
  }
  , "", {
  }
  );
  }
  catch (var_t) {
  var_o = 0;
  }
  (var_i = function (param_t_1, param_e_1, param_r_1, param_n_1) {
  function var_a(param_e_2, param_r_2) {
  var_i(param_t_1, param_e_2, function (param_t_2) {
  return this._invoke(param_e_2, param_r_2, param_t_2);
  }
  );
  }
  param_e_1 ? var_o ? var_o(param_t_1, param_e_1, {
  value: param_r_1,
  enumerable: !param_n_1,
  configurable: !param_n_1,
  writable: !param_n_1
  }
  ) : param_t_1[param_e_1] = param_r_1 : (var_a("next", 0), var_a("throw", 1), var_a(
  "return", 2));
  }
  )(param_t, param_e, param_r, param_n);
  }
  requireFn.r(exportsObj);
  var fn_o = function (param_t, param_e, param_r, param_n) {
  return new (param_r || (param_r = Promise))(function (param_i, param_o) {
  function var_a(param_t_1) {
  try {
  var_u(param_n.next(param_t_1));
  }
  catch (var_t) {
  param_o(var_t);
  }
  }
  function var_s(param_t_1) {
  try {
  var_u(param_n.throw(param_t_1));
  }
  catch (var_t) {
  param_o(var_t);
  }
  }
  function var_u(param_t_1) {
  var var_e;
  param_t_1.done ? param_i(param_t_1.value) : (var_e = param_t_1.value, var_e instanceof param_r ?
  var_e : new param_r(function (param_t_2) {
  param_t_2(var_e);
  }
  )).then(var_a, var_s);
  }
  var_u((param_n = param_n.apply(param_t, param_e || [])).next());
  }
  );
  }
  ,
  list_a = [],
  obj_s = {
  }
  ,
  list_u = [],
  obj_c = {
  getDomains: () => ["sexvietz.tv"],
  parse: {
  sources: [{
  checkSource: param_t => {
  var var_e;
  return (null === (var_e = null == param_t ? void 0 : param_t.cacheUrl) ||
  void 0 === var_e ? void 0 : var_e.includes("play.playxyz.net")) ||
  !1;
  }
  ,
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  try {
  var var_n_1 = JSON.parse(var_r),
  var_i_1 = obj_s[var_e.cacheUrl || ""],
  var_o = var_i_1.domainList.length;
  if (1 == var_n_1.status && var_i_1) {
  if (1 == var_n_1.type) {
  var var_a = Object.assign({
  }
  , var_e),
  list_u_1 = ["#EXTM3U"];
  list_u_1.push("#EXT-X-VERSION:3"), list_u_1.push("#EXT-X-TARGETDURATION:" + var_n_1.tgdr),
  list_u_1.push("#EXT-X-PLAYLIST-TYPE:VOD");
  for (var num_c = 0;
  num_c < var_n_1.data[0].length;
  num_c++) 0 == num_c && (var_a.url = `https://${var_i_1.domainList[num_c % var_o]}/rdv6/${var_n_1.quaity}/${var_i_1.userId}/${var_n_1.data[1][num_c]}.rd`), list_u_1.push(`#EXTINF:${var_n_1.data[0][num_c]},`), list_u_1.push(`https://${var_i_1.domainList[num_c % var_o]}/rdv6/${var_n_1.quaity}/${var_i_1.userId}/${var_n_1.data[1][num_c]}.rd`);
  return list_u_1.push("#EXT-X-ENDLIST"), var_a.play_list = list_u_1.join("\n"),
  [var_a];
  }
  return 2 == var_n_1.type ? [{
  url: var_n_1.data,
  ext: "m3u8",
  exts: ["m3u8"],
  type: "video",
  filename: document.title
  }
  ] : [];
  }
  return [];
  }
  catch (var_t) {
  return console.log(var_t), [];
  }
  }
  }
  ]
  }
  ,
  processRequestIds: param_t => {
  list_u.push(param_t);
  }
  ,
  urls: [{
  checkUrl: param_t => param_t.url.includes("play.playxyz.net"),
  getUrl: param_t => {
  var var_e = param_t.url;
  return fn_o(void 0, void 0, void 0, var_n().m(function var_t() {
  var var_r, var_i_1, var_o, var_u, var_c, var_l, var_f, var_d, var_h, var_p, var_v,
  var_m, var_y, var_g, var_b, var_w, var_A;
  return var_n().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  if (-1 !== list_a.indexOf(var_e)) {
  param_t_1.n = 3;
  break;
  }
  return param_t_1.n = 1, fetch(var_e).then(param_t_2 => param_t_2.text()).catch(
  () => (list_a.push(var_e), ""));
  case 1:
  if (var_l = param_t_1.v, var_f = /DOMAIN_LIST_RD\s*=\s*(\[.*?\])/, var_d = /DOMAIN_API\s*=\s*("|')(.*?)("|')/,
  var_h = /idfile\s*=\s*("|')(.*?)("|')/, var_p = /idUser\s*=\s*("|')(.*?)("|')/,
  var_v = /TYPEEND\s*=\s*("|')(.*?)("|')/, list_a.push(var_e), !(var_f.test(var_l) &&
  var_d.test(var_l) && var_h.test(var_l) && var_p.test(var_l))) {
  param_t_1.n = 2;
  break;
  }
  return var_m = null === (var_r = var_d.exec(var_l)) || void 0 === var_r ?
  void 0 : var_r[2], var_y = JSON.parse((null === (var_i_1 = var_f.exec(var_l)) ||
  void 0 === var_i_1 ? void 0 : var_i_1[1]) || "{}"), var_g = null === (var_o = var_h.exec(
  var_l)) || void 0 === var_o ? void 0 : var_o[2], var_b = null === (var_u = var_p.exec(
  var_l)) || void 0 === var_u ? void 0 : var_u[2], var_w = null === (var_c = var_v.exec(
  var_l)) || void 0 === var_c ? void 0 : var_c[2], obj_s[var_e] = {
  domainApi: var_m,
  domainList: var_y,
  fileId: var_g,
  userId: var_b,
  typeEnd: var_w
  }
  , param_t_1.a(2, `${var_m}
  
  
  ${var_b}
  
  
  /${var_g}
  
  
  `);
  case 2:
  param_t_1.n = 4;
  break;
  case 3:
  if (!obj_s[var_e]) {
  param_t_1.n = 4;
  break;
  }
  return var_A = obj_s[var_e], param_t_1.a(2, `${var_A.domainApi}
  
  
  ${var_A.userId}
  
  
  /${var_A.fileId}
  
  
  `);
  case 4:
  return param_t_1.a(2);
  }
  }
  , var_t);
  }
  ));
  }
  ,
  mediaObjectChange: param_t => {
  var var_e,
  var_r = param_t.mediaObject,
  var_n_1 = param_t.node;
  if (obj_s[var_n_1.src]) return var_r.ext = "m3u8", var_r.exts = ["m3u8"], var_r.requestMethod = "POST",
  var_r.cacheUrl = var_n_1.src, var_r.params = {
  referrer: location.href.split("/").slice(0, 3).join("/") ||
  "nosite",
  typeend: (null === (var_e = obj_s[var_n_1.src]) || void 0 === var_e ?
  void 0 : var_e.typeEnd) || "png"
  }
  , "video";
  }
  }
  , {
  checkUrl: param_t => param_t.url.includes("sexvietz.tv/wp-content"),
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  if (list_u.length > 0) {
  var var_r = list_u.find(param_t_1 => "m3u8" === param_t_1.ext);
  if (var_r) return Object.assign(var_e, var_r), var_r.type;
  }
  }
  }
  ],
  default: {
  }
  };
  exportsObj.default = obj_c;
  };
