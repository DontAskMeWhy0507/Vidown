// Module 294 - Savior Nhaccuatui Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj), requireFn.d(exportsObj, "API_RX", function () {
  return regex_h;
  }
  );
  var dep_media_constants = requireFn(1),
  dep_dom_utils = requireFn(0),
  dep_url_utils = requireFn(3);
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
  function var_f() {
  }
  var_e = Object.getPrototypeOf;
  var var_d_1 = [][var_n] ? var_e(var_e([][var_n]())) : (var_s(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_h = var_f.prototype = var_c_1.prototype = Object.create(var_d_1);
  function var_p(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_f) :
  (param_t.__proto__ = var_f, var_s(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h), param_t;
  }
  return var_l_1.prototype = var_f, var_s(var_h, "constructor", var_f), var_s(var_f,
  "constructor", var_l_1), var_l_1.displayName = "GeneratorFunction", var_s(var_f,
  var_i, "GeneratorFunction"), var_s(var_h), var_s(var_h, var_i, "Generator"), var_s(
  var_h, var_n, function () {
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
  function var_u(param_t, param_e) {
  return function (param_t_1) {
  if (Array.isArray(param_t_1)) return param_t_1;
  }
  (param_t) || function (param_t_1, param_e_1) {
  var var_r = null == param_t_1 ? null : "undefined" != typeof Symbol &&
  param_t_1[Symbol.iterator] || param_t_1["@@iterator"];
  if (null != var_r) {
  var var_n,
  var_i,
  var_o,
  var_a_1,
  list_s = [],
  flag_u = !0,
  flag_c = !1;
  try {
  if (var_o = (var_r = var_r.call(param_t_1)).next, 0 === param_e_1) {
  if (Object(var_r) !== var_r) return;
  flag_u = !1;
  }
  else for (;
  !(flag_u = (var_n = var_o.call(var_r)).done) && (list_s.push(var_n.value), list_s.length !== param_e_1);
  flag_u = !0);
  }
  catch (var_t) {
  flag_c = !0, var_i = var_t;
  }
  finally {
  try {
  if (!flag_u && null != var_r.return && (var_a_1 = var_r.return(), Object(var_a_1) !== var_a_1)) return;
  }
  finally {
  if (flag_c) throw var_i;
  }
  }
  return list_s;
  }
  }
  (param_t, param_e) || function (param_t_1, param_e_1) {
  if (param_t_1) {
  if ("string" == typeof param_t_1) return var_c(param_t_1, param_e_1);
  var var_r = {
  }
  .toString.call(param_t_1).slice(8, -1);
  return "Object" === var_r && param_t_1.constructor && (var_r = param_t_1.constructor.name),
  "Map" === var_r || "Set" === var_r ? Array.from(param_t_1) :
  "Arguments" === var_r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(var_r) ?
  var_c(param_t_1, param_e_1) : void 0;
  }
  }
  (param_t, param_e) || function () {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  ();
  }
  function var_c(param_t, param_e) {
  (null == param_e || param_e > param_t.length) && (param_e = param_t.length);
  for (var num_r = 0, var_n = Array(param_e);
  num_r < param_e;
  num_r++) var_n[num_r] = param_t[num_r];
  return var_n;
  }
  var var_l,
  fn_f = function (param_t, param_e, param_r, param_n) {
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
  var_d = location.href,
  regex_h = /nhaccuatui\.com\/api(\/v\d+)?(\/media\/info|\/playing\/playlist|\/playlist\/detail|\/song\/detail|\/video\/detail|\/app\/home\/index|\/song\/feed|\/radio\/musiclist|\/search\/artist\/song)/i,
  fn_p = param_t => {
  var var_e;
  return null === (var_e = param_t.streamURL) || void 0 === var_e ?
  void 0 : var_e.map(param_e => {
  var var_r,
  var_a_1,
  var_s_1,
  var_u_1,
  var_c_1,
  var_l_1 = (null === (var_r = dep_media_constants.r[param_e.typeUI]) ||
  void 0 === var_r ? void 0 : var_r.label) || param_e.typeUI;
  try {
  var_c_1 = Object(dep_dom_utils.i18n)(null === (var_a_1 = dep_media_constants.r[param_e.typeUI]) ||
  void 0 === var_a_1 ? void 0 : var_a_1.i18n_label) || var_l_1;
  }
  catch (var_t) {
  var_c_1 = var_l_1;
  }
  return {
  type: Object(dep_url_utils.e)(param_e.stream) || "audio",
  ext: (null === (var_u_1 = null === (var_s_1 = param_e.stream) ||
  void 0 === var_s_1 ? void 0 : var_s_1.match(/\.(\w+)\?/)) ||
  void 0 === var_u_1 ? void 0 : var_u_1[1]) || "mp3",
  filename: `${param_t.name}
  
  
  ${param_t.artistName ? " - " + param_t.artistName : ""}
  
  
  ` || document.title,
  title: `${param_t.name}
  
  
  ${param_t.artistName ? " - " + param_t.artistName : ""}
  
  
  ` || document.title,
  quality: var_l_1,
  i18n_quality: var_c_1,
  resolution: param_e.typeUI,
  url: param_e.stream
  };
  }
  );
  }
  ,
  fn_v = () => {
  var var_t,
  var_e,
  var_r,
  var_n = document.querySelector('script[type="application/json"]#__NUXT_DATA__');
  if (!var_n) return [];
  try {
  var var_i = JSON.parse(var_n.innerText);
  return (var_t = var_i, var_e = var_i.map(param_t => {
  if ("string" == typeof param_t && param_t.includes('"streamURL"')) try {
  return JSON.parse(param_t);
  }
  catch (var_e_1) {
  return console.error(var_e_1), param_t;
  }
  return param_t;
  }
  ).filter(param_t => param_t && "object" == typeof param_t &&
  Object.keys(param_t).length > 0 && Object.keys(param_t).includes("streamURL")).map(
  param_t => Object.fromEntries(Object.entries(param_t).filter(param_t_1 => {
  var var_e_1 = var_u(param_t_1, 1)[0];
  return ["key", "artistName", "name", "qualityDownload", "streamURL"].includes(
  var_e_1);
  }
  ))), var_r = param_e => Array.isArray(param_e) ? param_e.map(param_e_1 => "number" != typeof param_e_1 ?
  param_e_1 : var_t[param_e_1] && "object" == typeof var_t[param_e_1] ?
  var_r(var_t[param_e_1]) : var_t[param_e_1]) : Object.fromEntries(Object.entries(
  param_e).map(param_e_1 => {
  var var_n_1 = var_u(param_e_1, 2),
  var_i_1 = var_n_1[0],
  var_o = var_n_1[1];
  return "number" != typeof var_o ? [var_i_1, var_o] : var_t[var_o] &&
  "object" == typeof var_t[var_o] ? [var_i_1, var_r(var_t[var_o])] :
  [var_i_1, var_t[var_o]];
  }
  )), var_e.map(param_t => var_r(param_t))).flatMap(param_t => fn_p(param_t));
  }
  catch (var_t_1) {
  return console.error(var_t_1), [];
  }
  }
  ,
  fn_m = param_t => {
  var list_e = [],
  fn_r = param_t_1 => Array.isArray(param_t_1) ? param_t_1 :
  param_t_1 ? [param_t_1] : [],
  fn_n = param_t_1 => {
  var var_r = null != param_t_1 ? param_t_1 : [];
  if (Array.isArray(var_r)) for (var num_n = 0;
  num_n < var_r.length;
  num_n++) {
  var var_i = var_r[num_n];
  var_i && list_e.push(var_i);
  }
  };
  if (Array.isArray(param_t)) for (var num_i = 0;
  num_i < param_t.length;
  num_i++) fn_n(fn_p(param_t[num_i]));
  (null == param_t ? void 0 : param_t.streamURL) && fn_n(fn_p(param_t));
  var var_o = fn_r(null == param_t ? void 0 : param_t.items);
  if (var_o.length) for (var num_a = 0;
  num_a < var_o.length;
  num_a++) fn_n(fn_p(var_o[num_a]));
  var var_s_1 = fn_r(null == param_t ? void 0 : param_t.listSong);
  if (var_s_1.length) for (var num_u = 0;
  num_u < var_s_1.length;
  num_u++) fn_n(fn_p(var_s_1[num_u]));
  var var_c_1 = fn_r(null == param_t ? void 0 : param_t.list);
  if (var_c_1.length) for (var num_l = 0;
  num_l < var_c_1.length;
  num_l++) {
  var var_f = var_c_1[num_l];
  if (var_f) if (var_f.streamURL) fn_n(fn_p(var_f));
  else {
  var var_d_1 = fn_r(var_f.child);
  if (var_d_1.length) for (var num_h = 0;
  num_h < var_d_1.length;
  num_h++) {
  var var_m = var_d_1[num_h];
  if (var_m) if (var_m.detail) try {
  var var_y = JSON.parse(var_m.detail);
  fn_n(fn_p(var_y));
  }
  catch (var_t) {
  console.error(var_t);
  }
  else for (var list_g = [...fn_r(var_m.items), ...fn_r(var_m.listSong)], num_b = 0;
  num_b < list_g.length;
  num_b++) fn_n(fn_p(list_g[num_b]));
  }
  }
  }
  return fn_n(fn_v()), list_e;
  }
  ,
  obj_y = {
  getDomains: () => ["nhaccuatui.com"],
  addNode: () => ['audio[preload="auto"]', ".sc-chKoCp"],
  isMiniPlayerNode: param_t => !!param_t.matches(".sc-chKoCp"),
  forceUpdate() {
  location.href !== var_d && (EE.emit("widget.forceUpdate"), var_d = location.href,
  var_l = void 0);
  }
  ,
  parse: {
  sources: [{
  checkSource: param_t => {
  var var_e = param_t.url;
  return regex_h.test(var_e);
  }
  ,
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_f(void 0, void 0, void 0, var_a().m(function var_t() {
  var var_n, var_i, var_s_1;
  return var_a().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.p = param_t_1.n) {
  case 0:
  if (param_t_1.p = 0, (var_n = JSON.parse(var_r)) && (var_n.song ||
  var_n.video || var_n.playlist || var_n.data)) {
  param_t_1.n = 1;
  break;
  }
  throw new Error();
  case 1:
  return var_i = [], var_n.data && var_i.push(...fn_m(var_n.data)), param_t_1.a(
  2, var_i);
  case 2:
  if (param_t_1.p = 2, param_t_1.v, !var_e.cacheUrl) {
  param_t_1.n = 3;
  break;
  }
  return (var_s_1 = Object(dep_url_utils.f)(var_e.cacheUrl)).type = Object(dep_url_utils.e)(
  var_s_1.url), param_t_1.a(2, [var_s_1]);
  case 3:
  return param_t_1.a(2, []);
  }
  }
  , var_t, null, [[0, 2]]);
  }
  ));
  }
  }
  ]
  }
  ,
  urls: [{
  checkUrl: () => "beta.nhaccuatui.com" == location.hostname,
  getUrl: param_t => {
  var var_e = param_t.url;
  if (var_l) return [Object.assign(Object.assign({
  }
  , var_l), {
  cacheUrl: var_e
  }
  )];
  }
  }
  ],
  default: {
  getUrl: param_t => {
  var var_e = param_t.node;
  return !var_l || (null == var_l ? void 0 : var_l.url).includes("/video/") &&
  "AUDIO" == var_e.nodeName ? fn_v() : [var_l];
  }
  }
  ,
  processRequestIds: param_t => {
  if (param_t.url.match(regex_h)) return var_l = param_t, EE.emit("widget.forceUpdate"),
  !0;
  }
  };
  exportsObj.default = obj_y;
  };
