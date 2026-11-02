// Module 342 - Savior Soundcloud Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_url_utils = requireFn(3),
  dep_quality_helper = requireFn(9),
  dep_dom_utils = requireFn(0);
  function var_a(param_t, param_e) {
  var var_r = "undefined" != typeof Symbol && param_t[Symbol.iterator] ||
  param_t["@@iterator"];
  if (!var_r) {
  if (Array.isArray(param_t) || (var_r = function (param_t_1, param_e_1) {
  if (param_t_1) {
  if ("string" == typeof param_t_1) return var_s(param_t_1, param_e_1);
  var var_r_1 = {
  }
  .toString.call(param_t_1).slice(8, -1);
  return "Object" === var_r_1 && param_t_1.constructor && (var_r_1 = param_t_1.constructor.name),
  "Map" === var_r_1 || "Set" === var_r_1 ? Array.from(param_t_1) :
  "Arguments" === var_r_1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(var_r_1) ?
  var_s(param_t_1, param_e_1) : void 0;
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
  flag_u = !1;
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
  flag_u = !0, var_o = param_t_1;
  }
  ,
  f: function () {
  try {
  flag_a || null == var_r.return || var_r.return();
  }
  finally {
  if (flag_u) throw var_o;
  }
  }
  };
  }
  function var_s(param_t, param_e) {
  (null == param_e || param_e > param_t.length) && (param_e = param_t.length);
  for (var num_r = 0, var_n = Array(param_e);
  num_r < param_e;
  num_r++) var_n[num_r] = param_t[num_r];
  return var_n;
  }
  var var_u,
  regex_c = /client_id=([^&]+)/,
  regex_l = /soundcloud:tracks:([0-9]+)/,
  str_f = "https://api-v2.soundcloud.com/tracks?ids={{track_id}}&client_id={{client_id}}&%5Bobject%20Object%5D=&app_version={{app_version}}&app_locale=en",
  list_d = [],
  var_h = location.href,
  obj_p = {
  getDomains: () => ["soundcloud.com"],
  forceUpdate: () => {
  location.href !== var_h && (EE.emit("widget.forceUpdate"), var_h = location.href);
  }
  ,
  parse: {
  sources: [],
  default: param_t => {
  var var_e,
  var_r,
  var_o,
  var_a_1 = param_t.media,
  var_s_1 = param_t.response,
  list_d_1 = [];
  try {
  var_o = JSON.parse(var_s_1);
  }
  catch (var_t) {
  return [];
  }
  if (var_o.http_mp3_128_url) {
  var var_h_1 = Object(dep_url_utils.f)(var_o.http_mp3_128_url),
  var_p = var_a_1.url.match(/soundcloud\.com\/i1\/tracks\/(\d+)\//);
  if (!var_p || !var_p.length) return [];
  var var_v = var_p[1],
  var_m = ((param_t_1, param_e) => {
  param_e || (param_e = window.location.href), param_t_1 = param_t_1.replace(/[[\]]/g,
  "\\$&");
  var var_r_1 = new RegExp("[?&]" + param_t_1 + "(=([^&#]*)|&|#|$)").exec(param_e);
  return var_r_1 ? var_r_1[2] ? decodeURIComponent(var_r_1[2].replace(/\+/g, " ")) :
  "" : null;
  }
  )("client_id", var_a_1.url) || "";
  return fetch(str_f.replace("{{track_id}}", var_v).replace("{{client_id}}", var_m)).then(
  function (param_t_1) {
  return param_t_1.json();
  }
  ).then(function (param_t_1) {
  if (!param_t_1.length) return [];
  var var_e_1 = param_t_1[0];
  return var_h_1.title = var_e_1.title, var_h_1.quality = dep_quality_helper.b.DEFAULT_QUALITY_TYPE,
  var_h_1.type = "audio", list_d_1.push(var_h_1), list_d_1;
  }
  ).catch(function () {
  return [];
  }
  );
  }
  var var_y = (null === (var_e = regex_c.exec(var_a_1.url)) ||
  void 0 === var_e ? void 0 : var_e[1]) || "client_id",
  var_g = (null === (var_r = regex_l.exec(var_a_1.url)) || void 0 === var_r ?
  void 0 : var_r[1]) || "track_id";
  if (var_o.url) {
  var var_b = str_f.replace("{{track_id}}", var_g).replace("{{client_id}}", var_y).replace(
  "{{app_version}}", var_u);
  return fetch(var_b).then(param_t_1 => param_t_1.json()).then(param_t_1 => {
  var var_e_1 = Object(dep_url_utils.f)(var_o.url);
  return var_e_1.title = param_t_1[0].title, var_e_1.type = "audio", fetch(var_e_1.url).then(
  param_t_2 => param_t_2.text()).then(param_t_2 => (var_e_1.play_list = param_t_2,
  list_d_1.push(var_e_1), list_d_1));
  }
  );
  }
  return [];
  }
  }
  ,
  beforeGetUrl: () => {
  var var_t,
  var_e = var_a(Array.from(document.scripts).filter(param_t => param_t.innerHTML));
  try {
  for (var_e.s();
  !(var_t = var_e.n()).done;
  ) {
  var var_r = var_t.value.innerHTML;
  if (var_r.includes("__sc_version")) {
  var var_n = /__sc_version\s*=\s*("|')(.+?)("|')/.exec(var_r);
  var_n && (var_u = var_n[2]);
  }
  }
  }
  catch (var_t_1) {
  var_e.e(var_t_1);
  }
  finally {
  var_e.f();
  }
  }
  ,
  processRequestIds: param_t => {
  if (param_t.url.match(/api(-v[0-9]*)*\.soundcloud\.com\/media\/soundcloud:tracks:[0-9]+/gi) ||
  param_t.url.includes(".m3u8")) return list_d.push(param_t), EE.emit("widget.forceUpdate"),
  !0;
  }
  ,
  default: {
  getUrl: () => {
  if (list_d.length > 0) return list_d;
  }
  }
  ,
  addNode: () => [".playControls"],
  getCustomElement: () => Object(dep_dom_utils.queryAll)(".playControls")
  };
  exportsObj.default = obj_p;
  };
