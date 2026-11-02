// Module 446 - Savior Phimdinhcao_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_media_sniffer = requireFn(6),
  dep_dom_utils = requireFn(0),
  dep_media_constants = requireFn(1),
  dep_network_monitor = requireFn(20),
  dep_extractor_url_merger = requireFn(23),
  dep_url_utils = requireFn(3);
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
  a: var_h_2,
  f: var_h_2.bind(var_t, 4),
  d: function (param_e, param_r_2) {
  return var_o_1 = param_e, var_s_1 = 0, var_u_2 = var_t, obj_d_1.n = param_r_2,
  obj_a;
  }
  };
  function var_h_2(param_r_2, param_n_2) {
  for (var_s_1 = param_r_2, var_u_2 = param_n_2, var_e = 0;
  !flag_f && num_c && !var_i_1 && var_e < var_l_1.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_1[var_e],
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
  var_h_1 = var_f.prototype = var_s.prototype = Object.create(var_d);
  function var_p_1(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_f) :
  (param_t.__proto__ = var_f, var_l(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h_1), param_t;
  }
  return var_u.prototype = var_f, var_l(var_h_1, "constructor", var_f), var_l(var_f,
  "constructor", var_u), var_u.displayName = "GeneratorFunction", var_l(var_f, var_i,
  "GeneratorFunction"), var_l(var_h_1), var_l(var_h_1, var_i, "Generator"), var_l(
  var_h_1, var_n, function () {
  return this;
  }
  ), var_l(var_h_1, "toString", function () {
  return "[object Generator]";
  }
  ), (var_c = function () {
  return {
  w: var_o,
  m: var_p_1
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
  };
  var obj_d = {
  parse: {
  sources: [{
  checkSource: param_t => {
  var var_e = param_t.url;
  return /:\/\/vk\.com\/video_ext\.php/i.test(var_e);
  }
  ,
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_f(void 0, void 0, void 0, var_c().m(function var_t() {
  var var_a, var_s, var_l_1, var_f, var_d, var_h_1, var_p_1;
  return var_c().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.p = param_t_1.n) {
  case 0:
  if (param_t_1.p = 0, var_l_1 = null === (var_a = /playerParams\s=\s({.+});/i.exec(
  var_r)) || void 0 === var_a ? void 0 : var_a[1], var_f = null === (var_s = JSON.parse(
  var_l_1).params) || void 0 === var_s ? void 0 : var_s[0]) {
  param_t_1.n = 1;
  break;
  }
  throw new Error("Cannot parse player params");
  case 1:
  if (var_e.fixName = var_f.md_title.replace(/&#(\d+);/g, (param_t_2, param_e) => String.fromCharCode(
  param_e)) || var_e.filename, param_t_1.p = 2, !var_f.hls) {
  param_t_1.n = 5;
  break;
  }
  return param_t_1.n = 3, fetch(var_f.hls).then(param_t_2 => param_t_2.text());
  case 3:
  return var_d = param_t_1.v, param_t_1.n = 4, Object(dep_media_sniffer.e)(var_d,
  var_e);
  case 4:
  return var_h_1 = param_t_1.v, param_t_1.a(2, var_h_1);
  case 5:
  param_t_1.n = 7;
  break;
  case 6:
  param_t_1.p = 6, param_t_1.v;
  case 7:
  return var_p_1 = ["url144", "url240", "url360", "url480", "url720"].map(param_t_2 => {
  var var_r_1 = var_f[param_t_2],
  var_n = param_t_2.replace("url", "") + "p",
  var_a_1 = Object(dep_url_utils.f)(var_r_1);
  return var_a_1.type = "video", var_a_1.filename = var_e.fixName, var_a_1.resolution = var_n,
  var_a_1.i18n_quality = Object(dep_dom_utils.i18n)(dep_media_constants.r[var_n].i18n_label),
  var_a_1.quality = dep_media_constants.r[var_n].label, var_a_1.ext = "mp4", var_a_1._hls = !1,
  var_a_1.hls = !1, var_a_1;
  }
  ).filter(param_t_2 => param_t_2), param_t_1.a(2, var_p_1);
  case 8:
  return param_t_1.p = 8, param_t_1.v, param_t_1.a(2, []);
  }
  }
  , var_t, null, [[2, 6], [0, 8]]);
  }
  ));
  }
  }
  ]
  }
  ,
  urls: [{
  checkUrl: param_t => {
  var var_e = param_t.url;
  return Boolean(var_e.match(/:\/\/vk\.com\/video_ext\.php/i));
  }
  ,
  getUrl: param_t => param_t.url,
  mediaObjectChange(param_t) {
  var var_e = param_t.mediaObject;
  param_t.node;
  return var_e.ext = "m3u8", var_e.exts = ["m3u8"], "video";
  }
  }
  ]
  };
  function var_h() {
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
  var_c_2 = Object.create(var_u_1.prototype);
  return var_p(var_c_2, "_invoke", function (param_r_1, param_n_1, param_i_1) {
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
  a: var_h_1,
  f: var_h_1.bind(var_t, 4),
  d: function (param_e, param_r_2) {
  return var_o_1 = param_e, var_s_1 = 0, var_u_2 = var_t, obj_d_1.n = param_r_2,
  obj_a;
  }
  };
  function var_h_1(param_r_2, param_n_2) {
  for (var_s_1 = param_r_2, var_u_2 = param_n_2, var_e = 0;
  !flag_f && num_c && !var_i_1 && var_e < var_l_2.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_2[var_e],
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
  (param_r, param_i, param_o), !0), var_c_2;
  }
  var obj_a = {
  };
  function var_s() {
  }
  function var_u() {
  }
  function var_c_1() {
  }
  var_e = Object.getPrototypeOf;
  var var_l_1 = [][var_n] ? var_e(var_e([][var_n]())) : (var_p(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_f = var_c_1.prototype = var_s.prototype = Object.create(var_l_1);
  function var_d(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_c_1) :
  (param_t.__proto__ = var_c_1, var_p(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_f), param_t;
  }
  return var_u.prototype = var_c_1, var_p(var_f, "constructor", var_c_1), var_p(
  var_c_1, "constructor", var_u), var_u.displayName = "GeneratorFunction", var_p(
  var_c_1, var_i, "GeneratorFunction"), var_p(var_f), var_p(var_f, var_i, "Generator"),
  var_p(var_f, var_n, function () {
  return this;
  }
  ), var_p(var_f, "toString", function () {
  return "[object Generator]";
  }
  ), (var_h = function () {
  return {
  w: var_o,
  m: var_d
  };
  }
  )();
  }
  function var_p(param_t, param_e, param_r, param_n) {
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
  (var_p = function (param_t_1, param_e_1, param_r_1, param_n_1) {
  function var_o(param_e_2, param_r_2) {
  var_p(param_t_1, param_e_2, function (param_t_2) {
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
  var var_v,
  fn_m = function (param_t, param_e, param_r, param_n) {
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
  list_y = [];
  exportsObj.default = Object(dep_extractor_url_merger.a)(obj_d, ["parse", "urls"])(
  {
  getDomains: () => ["phimlongtieng.net", "phimtuoitho.", "helvid.net", "phimthuyetminh.fun",
  "phimdinhcao"],
  parse: {
  sources: [...((null === (var_v = dep_network_monitor.a.parse) ||
  void 0 === var_v ? void 0 : var_v.sources) || []), {
  checkSource: param_t => {
  var var_e = param_t.url;
  return /helvid\.([a-z0-9]+)\/hash.php\?.+/i.test(var_e);
  }
  ,
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_m(void 0, void 0, void 0, var_h().m(function var_t() {
  var var_a, var_s;
  return var_h().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  return param_t_1.n = 1, Object(dep_media_sniffer.e)(var_r, var_e);
  case 1:
  return var_a = param_t_1.v, var_s = var_a.map(param_t_2 => fn_m(void 0, void 0,
  void 0, var_h().m(function var_e_1() {
  var var_r_1, var_n;
  return var_h().w(function (param_e) {
  for (;;
  ) switch (param_e.p = param_e.n) {
  case 0:
  if (param_e.p = 0, !location.host.match(/helvid\.([a-z0-9]+)/)) {
  param_e.n = 2;
  break;
  }
  return param_e.n = 1, fetch(param_t_2.url).then(param_t_3 => param_t_3.text());
  case 1:
  var_n = param_e.v, var_r_1 = {
  url: var_n
  }
  , param_e.n = 4;
  break;
  case 2:
  return param_e.n = 3, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL,
  params: {
  url: param_t_2.url
  }
  }
  );
  case 3:
  var_r_1 = param_e.v;
  case 4:
  return param_t_2.play_list = var_r_1.url, param_t_2.originalUrl = param_t_2.url,
  param_t_2.url = "https://google.com", param_t_2.ext = "m3u8", param_t_2.exts = ["m3u8"],
  param_e.a(2, param_t_2);
  case 5:
  return param_e.p = 5, param_e.v, param_e.a(2, param_t_2);
  }
  }
  , var_e_1, null, [[0, 5]]);
  }
  ))), param_t_1.n = 2, Promise.allSettled(var_s).then(param_t_2 => param_t_2.map(
  param_t_3 => param_t_3.value));
  case 2:
  return param_t_1.a(2, param_t_1.v);
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
  return /phimlongtieng\.net\/pmm\/[a-z0-9]+\.html|motchill\d+\.com\/pmm[a-z0-9]+\/[a-z0-9]+\.m3u8/i.test(
  var_e);
  }
  ,
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_m(void 0, void 0, void 0, var_h().m(function var_t() {
  var var_i;
  return var_h().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  return param_t_1.n = 1, Object(dep_media_sniffer.e)(var_r, var_e);
  case 1:
  return (var_i = param_t_1.v).forEach(param_t_2 => {
  "html" == param_t_2.ext && (param_t_2.ext = "m3u8", param_t_2.exts = ["m3u8"]);
  }
  ), param_t_1.a(2, var_i);
  }
  }
  , var_t);
  }
  ));
  }
  }
  ]
  }
  ,
  default: {
  getUrl: () => {
  var var_t;
  return null === (var_t = list_y[list_y.length - 1]) || void 0 === var_t ?
  void 0 : var_t.url;
  }
  ,
  mediaObjectChange: param_t => {
  var var_e,
  var_r,
  var_n = param_t.mediaObject,
  var_o = param_t.node,
  var_a = var_n.url;
  if (var_a.match(/phimlongtieng\.net\/pmm\/[a-z0-9]+\.html/i)) return var_n.ext = "m3u8",
  var_n.exts = ["m3u8"], var_n.filename = document.title, "video";
  if (var_a.match(/^(https?:\/\/(www.)?phimlongtieng)|(blob:)/i)) return var_n.ext = "",
  var_n.exts = [], "null";
  if (var_a.includes(".m3u8")) {
  try {
  var var_s = null === (var_e = var_o.contentDocument) || void 0 === var_e ?
  void 0 : var_e.querySelector("iframe");
  if (null == var_s ? void 0 : var_s.src) {
  var var_u = new URL(null == var_s ? void 0 : var_s.src);
  var_n.referrer = var_u.origin || "https://www.phimtq.com";
  }
  else location.host.includes("phimtuoitho") && (var_n.referrer = list_y[list_y.length - 1].referrer);
  var_n.ext = "m3u8", var_n.exts = ["m3u8"];
  }
  catch (var_t) {
  Object(dep_dom_utils.devLog)(var_t);
  }
  return "video";
  }
  return var_a.match(/helvid\.[a-z0-9]+\/hash.php\?.+/i) ? (var_n.ext = "m3u8", var_n.exts = ["m3u8"],
  var_n.referrer = var_n.url, var_n.filename = (null === (var_r = document.querySelector(
  `a[href="${location.href}"]`)) || void 0 === var_r ? void 0 : var_r.title) ||
  document.title, "video") : var_a.match(/helvid\.[a-z0-9]+\/play\/token_hash\?.+/i) ?
  (var_n.ext = "m3u8", var_n.exts = ["m3u8"], var_n.referrer = var_n.url, "video") :
  (var_n.ext = "mp4", var_n.exts = ["mp4"], var_n.type);
  }
  }
  ,
  urls: [...(dep_network_monitor.a.urls || [])],
  processRequestIds(param_t) {
  var var_e = param_t.url;
  return var_e.match(/phimlongtieng\.net\/pmm\/[a-z0-9]+\.html|motchill\d+\.com\/pmm[a-z0-9]+\/[a-z0-9]+\.m3u8/i) ?
  (list_y.push(param_t), !0) : (var_e.match(/^https?:\/\/(www.)?phimlongtieng/i) ||
  list_y.push(param_t), !0);
  }
  }
  );
  };
