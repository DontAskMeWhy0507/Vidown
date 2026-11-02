// Module 133 - Savior Phephim_net Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj), requireFn.d(exportsObj, "SourceType", function () {
  return obj_v;
  }
  ), requireFn.d(exportsObj, "getPlaylists", function () {
  return var_m;
  }
  ), requireFn.d(exportsObj, "getPlaylistV2", function () {
  return var_y;
  }
  );
  var dep_dom_utils = requireFn(0),
  dep_base64_decoder = requireFn(161),
  dep_module_16 = requireFn(16),
  var_a = requireFn.n(dep_module_16),
  dep_module_27 = requireFn(27),
  dep_media_constants = requireFn(1);
  function var_c() {
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
  var_c_1 = Object.create(var_u_1.prototype);
  return var_l(var_c_1, "_invoke", function (param_r_1, param_n_1, param_i_1) {
  var var_o_1,
  var_s_1,
  var_u_2,
  num_c = 0,
  var_l_1 = param_i_1 || [],
  flag_f = !1,
  obj_d_1 = {
  p: 0,
  n: 0,
  v: var_t,
  a: var_h_1,
  f: var_h_1.bind(var_t, 4),
  d: function (param_e, param_r_2) {
  return var_o_1 = param_e, var_s_1 = 0, var_u_2 = var_t, obj_d_1.n = param_r_2,
  obj_a;
  }
  };
  function var_h_1(param_r_2, param_n_2) {
  for (var_s_1 = param_r_2, var_u_2 = param_n_2, var_e = 0;
  !flag_f && num_c && !var_i_1 && var_e < var_l_1.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_1[var_e],
  var_h_2 = obj_d_1.p,
  var_p_1 = var_o_2[2];
  param_r_2 > 3 ? (var_i_1 = var_p_1 === param_n_2) && (var_u_2 = var_o_2[(var_s_1 = var_o_2[4]) ?
  5 : (var_s_1 = 3, 3)], var_o_2[4] = var_o_2[5] = var_t) : var_o_2[0] <= var_h_2 &&
  ((var_i_1 = param_r_2 < 2 && var_h_2 < var_o_2[1]) ? (var_s_1 = 0, obj_d_1.v = param_n_2,
  obj_d_1.n = var_o_2[1]) : var_h_2 < var_p_1 && (var_i_1 = param_r_2 < 3 ||
  var_o_2[0] > param_n_2 || param_n_2 > var_p_1) && (var_o_2[4] = param_r_2, var_o_2[5] = param_n_2,
  obj_d_1.n = var_p_1, var_s_1 = 0));
  }
  if (var_i_1 || param_r_2 > 1) return obj_a;
  throw flag_f = !0, param_n_2;
  }
  return function (param_i_2, param_l, param_p) {
  if (num_c > 1) throw TypeError("Generator is already running");
  for (flag_f && 1 === param_l && var_h_1(param_l, param_p), var_s_1 = param_l, var_u_2 = param_p;
  (var_e = var_s_1 < 2 ? var_t : var_u_2) || !flag_f;
  ) {
  var_o_1 || (var_s_1 ? var_s_1 < 3 ? (var_s_1 > 1 && (obj_d_1.n = -1), var_h_1(
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
  (param_r, param_i, param_o), !0), var_c_1;
  }
  var obj_a = {
  };
  function var_s() {
  }
  function var_u() {
  }
  function var_f() {
  }
  var_e = Object.getPrototypeOf;
  var var_d = [][var_n] ? var_e(var_e([][var_n]())) : (var_l(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_h = var_f.prototype = var_s.prototype = Object.create(var_d);
  function var_p(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_f) :
  (param_t.__proto__ = var_f, var_l(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h), param_t;
  }
  return var_u.prototype = var_f, var_l(var_h, "constructor", var_f), var_l(var_f,
  "constructor", var_u), var_u.displayName = "GeneratorFunction", var_l(var_f, var_i,
  "GeneratorFunction"), var_l(var_h), var_l(var_h, var_i, "Generator"), var_l(var_h,
  var_n, function () {
  return this;
  }
  ), var_l(var_h, "toString", function () {
  return "[object Generator]";
  }
  ), (var_c = function () {
  return {
  w: var_o,
  m: var_p
  };
  }
  )();
  }
  function var_l(param_t, param_e, param_r, param_n) {
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
  (var_l = function (param_t_1, param_e_1, param_r_1, param_n_1) {
  function var_o(param_e_2, param_r_2) {
  var_l(param_t_1, param_e_2, function (param_t_2) {
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
  var fn_f = function (param_t, param_e, param_r, param_n) {
  return new (param_r || (param_r = Promise))(function (param_i, param_o) {
  function var_a_1(param_t_1) {
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
  )).then(var_a_1, var_s);
  }
  var_u((param_n = param_n.apply(param_t, param_e || [])).next());
  }
  );
  }
  ,
  obj_d = {
  }
  ,
  obj_h = {
  }
  ,
  obj_p = {
  };
  var obj_v = {
  iq: "iq",
  b2: "b2",
  wetv: "wetv",
  hydrax: "hydrax",
  b2html: "b2html",
  fptplay: "fptplay"
  };
  function var_m(param_t) {
  var var_e = navigator.userAgent.toLowerCase().indexOf("safari/") > -1;
  return function (param_t_1, param_e) {
  return fetch(`https://playngon.net/api/v2/getvinfo/${param_t_1}
  
  
  ?blob=${param_e}
  
  
  `, {
  method: "get",
  headers: {
  referer: "https://playngon.net/embed/video/" + param_t_1
  }
  }
  ).then(param_t_2 => param_t_2.json());
  }
  (param_t, var_e).then(param_e => {
  var var_r = param_e.data,
  var_n = param_e.signature,
  var_o = Object(dep_base64_decoder.a)(new dep_module_27.Buffer(var_r.data)).encrypted,
  var_u = var_a.a.SHA256(param_t).toString(),
  var_c_1 = var_a.a.AES.decrypt(var_n, var_u).toString(var_a.a.enc.Utf8),
  var_l_1 = JSON.parse(var_a.a.AES.decrypt(var_o, var_c_1).toString(var_a.a.enc.Utf8)).sources,
  var_f = Object.keys(var_l_1).map(param_e_1 => {
  var obj_r = {
  id: param_e_1,
  active: param_e_1 === obj_v.fptplay,
  sources: [{
  type: "hls",
  file: var_l_1[param_e_1]
  }
  ],
  tracks: []
  };
  return param_e_1 === obj_v.iq && obj_r.tracks.push({
  kind: "captions",
  file: `https://playngon.net/subtitles/iq/${param_t}
  
  
  .vtt`,
  label: "Tiếng Việt",
  default: !0
  }
  ), param_e_1 === obj_v.wetv && obj_r.tracks.push({
  kind: "captions",
  file: `https://playngon.net//subtitles/wetv/${param_t}
  
  
  .srt`,
  label: "Tiếng Việt",
  default: !0
  }
  ), obj_r;
  }
  ),
  var_d = var_f.findIndex(param_t_1 => param_t_1.active);
  return (!var_d || var_d < 0) && (var_f[0].active = !0), var_f.forEach((param_t_1,
  param_e_1) => {
  param_t_1.active && (var_f.splice(param_e_1, 1), var_f.unshift(param_t_1));
  }
  ), var_f;
  }
  ).catch(param_t_1 => (console.warn({
  err: param_t_1
  }
  ), []));
  }
  function var_y(param_t) {
  return fn_f(this, void 0, void 0, var_c().m(function var_e() {
  var var_r, var_n, var_i, var_o, var_a_1;
  return var_c().w(function (param_e) {
  for (;;
  ) switch (param_e.n) {
  case 0:
  return var_r = {
  BASE_VIDEO: "/stream/v1/video/",
  BASE_VIDEO_API: "/api/v2/getvinfo/s/",
  JWPLAYER_ID_NAME: "jwplayer"
  }
  , param_e.n = 1, fetch(var_r.BASE_VIDEO_API + param_t).then(param_t_1 => param_t_1.json(
  ));
  case 1:
  if ((var_n = param_e.v).sources) {
  param_e.n = 2;
  break;
  }
  return param_e.a(2, null);
  case 2:
  return var_i = var_n.sources.map(function (param_t_1) {
  var var_e_1 = Object.assign(Object.assign({
  }
  , param_t_1), {
  type: "hls",
  file: (var_n.hostname || "") + var_r.BASE_VIDEO + param_t_1.id + "/" + param_t_1.provider + "/manifest"
  }
  );
  return param_t_1.subtitle && (var_e_1.tracks = [{
  default: !0,
  file: param_t_1.subtitle,
  kind: "captions",
  label: "Tiếng Việt"
  }
  ]), var_e_1;
  }
  ), var_o = void 0, (var_a_1 = var_n.targetProvider) && (var_o = var_i.find(function (
  param_t_1) {
  return param_t_1.provider === var_a_1;
  }
  )), param_e.a(2, var_o);
  }
  }
  , var_e);
  }
  ));
  }
  var var_g = -1,
  obj_b = {
  getDomains: () => ["phephimm.net", "luotphimzz.com", "phephim.org"],
  siteMatcher: param_t => !(!param_t.startsWith("phephim") ||
  !param_t.endsWith(".net")),
  urls: [{
  checkUrl: param_t => {
  var var_e = param_t.url;
  return Boolean(var_e.match(/((playhydrax\.com)|(geoip\.redirect-ads\.com)\/[a-zA-Z0-9\-]+)|(storage\.googleapis\.com\/mediastorage)/i));
  }
  ,
  getUrl: param_t => {
  var var_e = param_t.url;
  return fn_f(void 0, void 0, void 0, var_c().m(function var_t() {
  var var_r;
  return var_c().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  if (obj_d[var_e]) {
  param_t_1.n = 3;
  break;
  }
  return param_t_1.n = 1, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL
  }
  );
  case 1:
  if (!(var_r = param_t_1.v) || !var_r.url) {
  param_t_1.n = 2;
  break;
  }
  return obj_d[var_e] = var_r.url, obj_p[var_r.url] = var_r.realRes, param_t_1.a(
  2, var_r.url);
  case 2:
  param_t_1.n = 4;
  break;
  case 3:
  return param_t_1.a(2, obj_d[var_e]);
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
  var var_e = param_t.mediaObject;
  return var_e.ext = "m3u8", var_e.exts = ["m3u8"], obj_p[var_e.url] &&
  (var_e.realRes = obj_p[var_e.url]), var_e.referrer = var_e.url, "video";
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.url;
  return Boolean(var_e.match(/(playngon\.net)/i));
  }
  ,
  getUrl: param_t => {
  var var_e = param_t.url;
  return fn_f(void 0, void 0, void 0, var_c().m(function var_t() {
  var var_r;
  return var_c().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  if (obj_d[var_e]) {
  param_t_1.n = 4;
  break;
  }
  return param_t_1.n = 1, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL
  }
  );
  case 1:
  if (!(var_r = param_t_1.v) || !var_r.url) {
  param_t_1.n = 2;
  break;
  }
  return obj_d[var_e] = var_r.url, obj_h[var_r.url] = location.href, param_t_1.a(
  2, var_r.url);
  case 2:
  var_g = setTimeout(() => {
  clearTimeout(var_g), EE.emit("widget.updateMedia");
  }
  , 333);
  case 3:
  param_t_1.n = 5;
  break;
  case 4:
  return param_t_1.a(2, obj_d[var_e]);
  case 5:
  return param_t_1.a(2);
  }
  }
  , var_t);
  }
  ));
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  return obj_h[var_e.url] ? (var_e.ext = "m3u8", var_e.exts = ["m3u8"], var_e.referrer = var_e.url,
  "video") : var_e.type;
  }
  }
  ],
  idsProcess: param_t => {
  var var_e = param_t.defaultIds,
  var_r = param_t.id,
  var_n = param_t.index,
  var_i = window.location.host.replace(/\./g, "\\."),
  var_o = new RegExp(`(${var_i}
  
  
  /media/[a-z0-9-_]+.mp4)|(videos/tvc.mp4)`, "i");
  var_r.url.match(var_o) && var_e.splice(var_n, 1);
  }
  };
  exportsObj.default = obj_b;
  };
