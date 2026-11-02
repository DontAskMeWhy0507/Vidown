// Module 281 - Savior Motphimtv_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_dom_utils = requireFn(0),
  dep_format_resolver = requireFn(14),
  dep_network_monitor = requireFn(20),
  dep_media_constants = requireFn(1),
  dep_media_sniffer = requireFn(6),
  dep_stream_cipher_helper = requireFn(31),
  dep_extractor_url_merger = requireFn(23);
  function var_l() {
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
  return var_f(var_c_1, "_invoke", function (param_r_1, param_n_1, param_i_1) {
  var var_o_1,
  var_s_1,
  var_u_2,
  num_c = 0,
  var_l_1 = param_i_1 || [],
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
  !flag_f && num_c && !var_i_1 && var_e < var_l_1.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_1[var_e],
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
  (param_r, param_i, param_o), !0), var_c_1;
  }
  var obj_a = {
  };
  function var_s() {
  }
  function var_u() {
  }
  function var_c() {
  }
  var_e = Object.getPrototypeOf;
  var var_d_1 = [][var_n] ? var_e(var_e([][var_n]())) : (var_f(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_h = var_c.prototype = var_s.prototype = Object.create(var_d_1);
  function var_p(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_c) :
  (param_t.__proto__ = var_c, var_f(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h), param_t;
  }
  return var_u.prototype = var_c, var_f(var_h, "constructor", var_c), var_f(var_c,
  "constructor", var_u), var_u.displayName = "GeneratorFunction", var_f(var_c, var_i,
  "GeneratorFunction"), var_f(var_h), var_f(var_h, var_i, "Generator"), var_f(var_h,
  var_n, function () {
  return this;
  }
  ), var_f(var_h, "toString", function () {
  return "[object Generator]";
  }
  ), (var_l = function () {
  return {
  w: var_o,
  m: var_p
  };
  }
  )();
  }
  function var_f(param_t, param_e, param_r, param_n) {
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
  (var_f = function (param_t_1, param_e_1, param_r_1, param_n_1) {
  function var_o(param_e_2, param_r_2) {
  var_f(param_t_1, param_e_2, function (param_t_2) {
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
  var var_d,
  fn_h = function (param_t, param_e, param_r, param_n) {
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
  obj_p = {
  }
  ,
  fn_v = (param_t, param_e) => fn_h(void 0, void 0, void 0, var_l().m(function var_r(
  ) {
  var var_i, var_o;
  return var_l().w(function (param_r) {
  for (;;
  ) switch (param_r.n) {
  case 0:
  if (param_e[param_t]) {
  param_r.n = 3;
  break;
  }
  return param_r.n = 1, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL
  }
  );
  case 1:
  if (!(var_i = param_r.v) || !var_i.url) {
  param_r.n = 2;
  break;
  }
  return var_o = var_i.url.find(param_t_1 => param_t_1.url.includes(".m3u8")).url,
  param_e[param_t] = var_o, param_r.a(2, var_o);
  case 2:
  param_r.n = 4;
  break;
  case 3:
  return param_r.a(2, param_e[param_t]);
  case 4:
  return param_r.a(2);
  }
  }
  , var_r);
  }
  )),
  obj_m = {
  getDomains: () => ["motphimtv", "motphimm.com", "cphimmoi.com", "vuviphim.co",
  "motphimtw.com", "subnhanhs.com", "subnhanhss.net", "motchill.", "motphim.", "motphimtvv.",
  "motchjll.", "motphims1", "phimthuyetminh.top", "cobephim", "phim.nguonc.", "tramphim."],
  siteMatcher: (param_t, param_e) => /motchill[a-z0-9]*|gogophim[a-z0-9]*./i.test(
  param_t),
  parse: {
  sources: [...((null === (var_d = dep_network_monitor.a.parse) ||
  void 0 === var_d ? void 0 : var_d.sources) || []), {
  checkSource: param_t => param_t.url.includes("s6.kkphimplayer6.com"),
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_h(void 0, void 0, void 0, var_l().m(function var_t() {
  var var_n, var_i;
  return var_l().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  return param_t_1.n = 1, Object(dep_media_sniffer.e)(var_r, var_e);
  case 1:
  return (var_i = param_t_1.v)[0].play_list = null === (var_n = var_i[0].play_list) ||
  void 0 === var_n ? void 0 : var_n.split("#EXT-X-DISCONTINUITY").filter(param_t_2 => !(
  param_t_2.match(/^\s*#ext-x-key:method=none/i) || param_t_2.length < 100)).join(
  "\n"), param_t_1.a(2, var_i);
  }
  }
  , var_t);
  }
  ));
  }
  }
  , {
  checkSource: param_t => {
  var var_e = param_t.url;
  return var_e.includes("https://hls.streamvda.top") || /\/\/embed\d*\.streamc\.xyz/i.test(
  var_e);
  }
  ,
  parse: param_t => {
  var var_e = param_t.media;
  return fn_h(void 0, void 0, void 0, var_l().m(function var_t() {
  var var_r, var_i;
  return var_l().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  return param_t_1.n = 1, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL,
  params: {
  url: var_e.url
  }
  }
  );
  case 1:
  return var_r = param_t_1.v, (var_i = Object.assign({
  }
  , var_e)).play_list = var_r.url, var_i.ext = "m3u8", var_i.exts = ["m3u8"], var_i.fixName &&
  (var_i.filename = var_i.fixName), var_i.filename && var_i.filename.length < 10 &&
  (var_i.filename = document.title), param_t_1.a(2, [var_i]);
  }
  }
  , var_t);
  }
  ));
  }
  }
  , {
  checkSource: param_t => {
  var var_e = param_t.url;
  return /(vkvd\d*\.mycdn\.me|vk[a-z0-9\-]+\.vkuser\.net)\/.*&ct=(\d+)/i.test(var_e);
  }
  ,
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  try {
  if ("m3u8" == var_e.ext) {
  if (var_r.match(/<\?xml/i)) {
  var var_n = new URL(var_e.url);
  return Object(dep_format_resolver.b)(var_r, var_e.filename, var_n.origin);
  }
  if (var_r.match(/#extm3u/i)) return Object(dep_media_sniffer.e)(var_r, var_e);
  }
  return [var_e];
  }
  catch (var_t) {
  return console.warn(var_t), [var_e];
  }
  }
  }
  , {
  checkSource: param_t => {
  var var_e = param_t.url;
  return /vidsugar\.com\/.+api\.json/i.test(var_e);
  }
  ,
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  try {
  var var_n = JSON.parse(var_r);
  var_n.proxy = atob(var_n.proxy), var_n.cdn = atob(var_n.cdn);
  var list_i = ["#EXTM3U", "#EXT-X-VERSION:" + var_n.version, "#EXT-X-TARGETDURATION:" + var_n.targetDuration,
  "#EXT-X-MEDIA-SEQUENCE:0"];
  var_n.chunks.forEach((param_t_1, param_e) => {
  list_i.push(`#EXTINF:${param_t_1},`), list_i.push(var_n.proxy + encodeURIComponent(`${var_n.cdn}
  
  
  /${param_e}
  
  
  .html`));
  }
  ), list_i.push("#EXT-X-ENDLIST");
  var var_o = var_e;
  return var_o.play_list = list_i.join("\n"), var_o.url = var_o.url.replace("api.json",
  "chunklist.m3u8"), var_o.filename = document.title, [var_o];
  }
  catch (var_t) {
  return [];
  }
  }
  }
  , {
  checkSource: param_t => {
  var var_e = param_t.url;
  return /vidsugar\.com\/.+chunklist\.m3u8/i.test(var_e);
  }
  ,
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  try {
  var var_n = var_r,
  list_i = [];
  (var_n = var_n.split("\n").map(param_t_1 => param_t_1.includes("url=") ?
  param_t_1 = (param_t_1 = (param_t_1 = param_t_1.split("url=")[1]).replaceAll("%2F",
  "/")).replaceAll("%3A", ":") : param_t_1)).forEach(param_t_1 => {
  list_i.push(param_t_1);
  }
  );
  var var_o = var_e;
  return var_o.play_list = list_i.join("\n"), var_o.filename = document.title, [var_o];
  }
  catch (var_t) {
  return [];
  }
  }
  }
  ]
  }
  ,
  urls: [...(dep_network_monitor.a.urls || []), {
  checkUrl: param_t => param_t.url.includes("ads-vast"),
  getUrl: () => []
  }
  , {
  checkUrl: param_t => param_t.url.includes("stream.hlstream"),
  getUrl: param_t => param_t.url + "/master.html?cdn=false",
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  var_e.ext = "m3u8", var_e.exts = ["m3u8"];
  }
  }
  , {
  checkUrl: param_t => !!param_t.url.match(/haivan\.[a-zA-Z]+\/player/),
  getUrl: param_t => {
  var var_e = param_t.url,
  var_r = param_t.node;
  return fn_h(void 0, void 0, void 0, var_l().m(function var_t() {
  var var_i, var_o;
  return var_l().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.p = param_t_1.n) {
  case 0:
  return var_o = var_r, param_t_1.n = 1, Object(dep_dom_utils.sleep)(1e3);
  case 1:
  if (param_t_1.p = 1, null === (var_i = var_o.contentDocument) ||
  void 0 === var_i ? void 0 : var_i.querySelectorAll(".list-server li").length) {
  param_t_1.n = 2;
  break;
  }
  return var_o.contentWindow ? var_o.contentWindow.onload = () => {
  setTimeout(() => {
  EE.emit("widget.updateMedia");
  }
  , 1e3);
  }
  : setTimeout(() => {
  EE.emit("widget.updateMedia");
  }
  , 1e3), param_t_1.a(2);
  case 2:
  return param_t_1.n = 3, fn_v(var_e, obj_p);
  case 3:
  return param_t_1.a(2, param_t_1.v);
  case 4:
  return param_t_1.p = 4, param_t_1.v, param_t_1.n = 5, fn_v(var_e, obj_p);
  case 5:
  return param_t_1.a(2, param_t_1.v);
  }
  }
  , var_t, null, [[1, 4]]);
  }
  ));
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject,
  var_r = param_t.node;
  var_e.referrer = var_r.src;
  }
  }
  , {
  checkUrl: param_t => param_t.url.includes("vuviphims.net"),
  getUrl: param_t => {
  var var_e = param_t.url;
  return fn_h(void 0, void 0, void 0, var_l().m(function var_t() {
  var var_r;
  return var_l().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  if (obj_p[var_e]) {
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
  return obj_p[var_e] = var_r.url, param_t_1.a(2, var_r.url);
  case 2:
  param_t_1.n = 4;
  break;
  case 3:
  return param_t_1.a(2, obj_p[var_e]);
  case 4:
  return param_t_1.a(2);
  }
  }
  , var_t);
  }
  ));
  }
  ,
  mediaObjectChange: param_t => ((param_t_1 => {
  delete param_t_1.referrer, param_t_1.skipReferrer = !0;
  }
  )(param_t.mediaObject), "video")
  }
  , {
  checkUrl: param_t => param_t.url.includes("t4vstream.xyz/"),
  getUrl: param_t => param_t.url,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  return var_e.ext = "mp4", var_e.exts = ["mp4"], var_e.referrer = location.href,
  "video";
  }
  }
  ],
  idsProcess(param_t) {
  var var_e,
  var_r = param_t.defaultIds,
  var_n = param_t.id,
  var_i = param_t.index;
  if (/(vkvd\d*\.mycdn\.me|vk[a-z0-9\-]+\.vkuser\.net)/i.test(var_n.url)) {
  6 != Number((null === (var_e = var_n.url.match(/(vkvd\d*\.mycdn\.me|vk[a-z0-9\-]+\.vkuser\.net)\/.*&ct=(\d+)/i)) ||
  void 0 === var_e ? void 0 : var_e[2]) || "0") && var_r.splice(var_i, 1);
  }
  "m3u8" == var_n.ext && (var_n.skipUrlToCombineHls = !0);
  }
  };
  exportsObj.default = Object(dep_extractor_url_merger.a)(dep_stream_cipher_helper.a,
  ["parse", "urls"])(obj_m);
  };
