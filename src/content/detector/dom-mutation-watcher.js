// Module 128 - Savior Dom Mutation Watcher
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.d(exportsObj, "b", function () {
  return var_d;
  }
  );
  var dep_media_constants = requireFn(1),
  dep_dom_utils = requireFn(0),
  dep_media_sniffer = requireFn(6);
  function var_a() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var var_t,
  var_e,
  var_r = "function" == typeof Symbol ? Symbol : {
  }
  ,
  var_n = var_r.iterator || "@@iterator",
  var_i = var_r.toStringTag || "@@toStringTag";
  function var_o(param_r, param_n, param_i, param_o) {
  var var_a_1 = param_n && param_n.prototype instanceof var_c ?
  param_n : var_c,
  var_l_1 = Object.create(var_a_1.prototype);
  return var_s(var_l_1, "_invoke", function (param_r_1, param_n_1, param_i_1) {
  var var_o_1,
  var_a_2,
  var_s_1,
  num_c = 0,
  var_l_2 = param_i_1 || [],
  flag_f = !1,
  obj_d = {
  p: 0,
  n: 0,
  v: var_t,
  a: var_h_2,
  f: var_h_2.bind(var_t, 4),
  d: function (param_e, param_r_2) {
  return var_o_1 = param_e, var_a_2 = 0, var_s_1 = var_t, obj_d.n = param_r_2, obj_u;
  }
  };
  function var_h_2(param_r_2, param_n_2) {
  for (var_a_2 = param_r_2, var_s_1 = param_n_2, var_e = 0;
  !flag_f && num_c && !var_i_1 && var_e < var_l_2.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_2[var_e],
  var_h_3 = obj_d.p,
  var_p_1 = var_o_2[2];
  param_r_2 > 3 ? (var_i_1 = var_p_1 === param_n_2) && (var_s_1 = var_o_2[(var_a_2 = var_o_2[4]) ?
  5 : (var_a_2 = 3, 3)], var_o_2[4] = var_o_2[5] = var_t) : var_o_2[0] <= var_h_3 &&
  ((var_i_1 = param_r_2 < 2 && var_h_3 < var_o_2[1]) ? (var_a_2 = 0, obj_d.v = param_n_2,
  obj_d.n = var_o_2[1]) : var_h_3 < var_p_1 && (var_i_1 = param_r_2 < 3 ||
  var_o_2[0] > param_n_2 || param_n_2 > var_p_1) && (var_o_2[4] = param_r_2, var_o_2[5] = param_n_2,
  obj_d.n = var_p_1, var_a_2 = 0));
  }
  if (var_i_1 || param_r_2 > 1) return obj_u;
  throw flag_f = !0, param_n_2;
  }
  return function (param_i_2, param_l, param_p) {
  if (num_c > 1) throw TypeError("Generator is already running");
  for (flag_f && 1 === param_l && var_h_2(param_l, param_p), var_a_2 = param_l, var_s_1 = param_p;
  (var_e = var_a_2 < 2 ? var_t : var_s_1) || !flag_f;
  ) {
  var_o_1 || (var_a_2 ? var_a_2 < 3 ? (var_a_2 > 1 && (obj_d.n = -1), var_h_2(var_a_2,
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
  (param_r, param_i, param_o), !0), var_l_1;
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
  var var_d_1 = [][var_n] ? var_e(var_e([][var_n]())) : (var_s(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_h_1 = var_f.prototype = var_c.prototype = Object.create(var_d_1);
  function var_p(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_f) :
  (param_t.__proto__ = var_f, var_s(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h_1), param_t;
  }
  return var_l.prototype = var_f, var_s(var_h_1, "constructor", var_f), var_s(var_f,
  "constructor", var_l), var_l.displayName = "GeneratorFunction", var_s(var_f, var_i,
  "GeneratorFunction"), var_s(var_h_1), var_s(var_h_1, var_i, "Generator"), var_s(
  var_h_1, var_n, function () {
  return this;
  }
  ), var_s(var_h_1, "toString", function () {
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
  var fn_u = function (param_t, param_e, param_r, param_n) {
  return new (param_r || (param_r = Promise))(function (param_i, param_o) {
  function var_a_1(param_t_1) {
  try {
  var_u(param_n.next(param_t_1));
  }
  catch (var_t) {
  param_o(var_t);
  }
  }
  function var_s_1(param_t_1) {
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
  )).then(var_a_1, var_s_1);
  }
  var_u((param_n = param_n.apply(param_t, param_e || [])).next());
  }
  );
  }
  ,
  obj_c = {
  }
  ,
  obj_l = {
  }
  ,
  obj_f = {
  };
  function var_d(param_t, param_e, param_r, param_a) {
  return new Promise((param_s, param_u) => {
  var var_l,
  var_f = null === (var_l = Array.from(document.querySelectorAll("script")).find(
  param_t_1 => {
  var var_e;
  return null === (var_e = param_t_1.textContent) || void 0 === var_e ?
  void 0 : var_e.match("const cdnforvip");
  }
  )) || void 0 === var_l ? void 0 : var_l.innerText,
  var_d_1 = null == var_f ? void 0 : var_f.split(";"),
  var_h_1 = null == var_d_1 ? void 0 : var_d_1.filter(param_t_1 => param_t_1 &&
  param_t_1.length).reduce((param_t_1, param_e_1) => {
  var var_r = (param_e_1 = param_e_1.replace("const ", "")).split(/ *=\ */);
  try {
  param_t_1[var_r[0]] = JSON.parse(var_r[1]);
  }
  catch (var_e) {
  ["'", '"'].includes(var_r[1][0]) ? param_t_1[var_r[0]] = var_r[1].slice(1, -1) :
  param_t_1[var_r[0]] = var_r[1];
  }
  return param_t_1;
  }
  , {
  }
  );
  if (var_h_1) switch (Number.parseInt(param_e || "")) {
  case 0:
  var var_p = window.location.origin + "/embed/" + param_t;
  return void fetch(var_p, {
  method: "POST",
  headers: {
  "X-CSRF-TOKEN": param_a,
  referer: var_p
  }
  }
  ).then(param_t_1 => param_t_1.json()).then(param_t_1 => {
  var obj_e = {
  type: "video",
  ext: param_t_1.type,
  exts: [param_t_1.type]
  };
  if (Array.isArray(param_t_1.data)) {
  var var_r = param_t_1.data.map(param_t_2 => {
  var var_r_1;
  return Object.assign(Object.assign({
  }
  , obj_e), {
  url: param_t_2.src,
  referrer: location.href,
  resolution: param_t_2.label,
  quality: (null === (var_r_1 = dep_media_constants.r[param_t_2.label]) ||
  void 0 === var_r_1 ? void 0 : var_r_1.label) || dep_media_constants.r["480p"].label
  }
  );
  }
  );
  param_s(var_r);
  }
  }
  ).catch(param_t_1 => {
  param_u({
  error: param_t_1,
  reason: "Can't fetch"
  }
  );
  }
  );
  case 1:
  return param_s({
  }
  ), {
  };
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
  case 11:
  case 12:
  var var_v_1 = function (param_t_1, param_e_1, param_r_1) {
  switch (Number.parseInt(param_e_1)) {
  case 4:
  return {
  data: location.origin + "/m3u8/" + param_t_1 + "/playlist.m3u8",
  videoId: param_t_1,
  serverType: param_e_1,
  type: "stream"
  };
  case 5:
  return {
  data: "https://meta.goodhub.xyz/stream/" + param_t_1 + "/playlist.m3u8",
  videoId: param_t_1,
  serverType: param_e_1,
  type: "stream"
  };
  case 6:
  return {
  data: "https://meta.goodhub.xyz/verse/" + param_t_1 + "/playlist.m3u8",
  videoId: param_t_1,
  serverType: param_e_1,
  type: "stream"
  };
  case 7:
  case 8:
  case 9:
  return {
  data: "https://meta.goodhub.xyz/verse/" + param_t_1 + "/ghcdn.m3u8",
  videoId: param_t_1,
  serverType: param_e_1,
  type: "stream"
  };
  case 10:
  return {
  data: "https://meta.goodhub.xyz/sync/" + param_t_1.charAt(0) + "/" + param_t_1.charAt(
  1) + "/" + param_t_1 + "/ghcdn.m3u8",
  videoId: param_t_1,
  serverType: param_e_1,
  type: "stream"
  };
  case 11:
  return {
  data: "https://meta.goodhub.xyz/" + param_r_1.cdnforbox + "/sync/" + param_t_1.charAt(
  0) + "/" + param_t_1.charAt(1) + "/" + param_t_1 + "/playlist.m3u8",
  videoId: param_t_1,
  serverType: param_e_1,
  type: "stream"
  };
  case 12:
  return {
  data: "https://meta.goodhub.xyz/mark/" + param_t_1.charAt(0) + "/" + param_t_1.charAt(
  1) + "/" + param_t_1 + "/playlist.m3u8",
  videoId: param_t_1,
  serverType: param_e_1,
  type: "stream"
  };
  default:
  return null;
  }
  }
  (param_t, param_e || "", var_h_1),
  obj_m_1 = {
  ext: "m3u8",
  exts: ["m3u8"],
  url: var_v_1.data,
  type: "video",
  videoId: null == var_v_1 ? void 0 : var_v_1.videoId
  };
  return void fetch(var_v_1.data, {
  headers: {
  referer: location.href
  }
  }
  ).then(param_t_1 => param_t_1.text()).then(param_u_1 => {
  var var_l_1 = Object(dep_media_sniffer.c)(param_u_1, obj_m_1, !0),
  var_f_1 = new URL(var_v_1.data),
  var_d_2 = var_l_1.map(param_o => {
  var var_s_1,
  var_u = Object(dep_dom_utils.getBestFitResolution)(param_o.attributes.RESOLUTION.height) + "p",
  var_c = param_o.uri;
  var_c.match(/^https?:\/\//) || (var_c = var_f_1.origin + var_c), var_c = var_c.replace(
  "sync", var_h_1.cdnforbox + "sync");
  var obj_l_1 = {
  videoId: param_t,
  serverType: parseInt(param_e || ""),
  backup: param_r,
  token: param_a
  };
  return Object.assign(Object.assign({
  }
  , obj_m_1), {
  url: var_c,
  resolution: var_u,
  keep: !0,
  cdnMap: var_h_1,
  referrer: location.origin,
  config: obj_l_1,
  promise: fetch(var_c, {
  headers: {
  referer: location.href
  }
  }
  ).then(param_t_1 => param_t_1.text()),
  quality: (null === (var_s_1 = dep_media_constants.r[var_u]) ||
  void 0 === var_s_1 ? void 0 : var_s_1.label) || dep_media_constants.r["480p"].label
  }
  );
  }
  );
  var_l_1[Number(param_t)] = var_d_2, Promise.allSettled(var_d_2.map(param_t_1 => param_t_1.promise)).then(
  param_t_1 => {
  var var_e = param_t_1.map((param_t_2, param_e_1) => (obj_c[var_d_2[param_e_1].url] = param_t_2.value,
  Object.assign(Object.assign({
  }
  , var_d_2[param_e_1]), {
  realRes: param_t_2.value
  }
  )));
  param_s(var_e);
  }
  );
  }
  );
  default:
  return null;
  }
  else param_u({
  id: param_t,
  serverType: param_e,
  backup: param_r,
  token: param_a,
  cdns: var_d_1,
  script: var_f,
  scripts: Array.from(document.querySelectorAll("script")).map(param_t_1 => param_t_1.innerText),
  reason: "no cdnList"
  }
  );
  }
  );
  }
  function var_h(param_t) {
  return "undefined" === (param_t = param_t.match(/(\d+).png/i))[1] ?
  0 : parseInt(param_t[1]);
  }
  var fn_p = (param_t, param_e, param_r, param_n, param_i) => {
  var var_o = parseInt(param_t.port),
  var_a_1 = param_n.cdnforhls,
  var_s_1 = param_n.cdnforvip,
  var_u = param_n.cdnforbox;
  switch (var_o) {
  case 8e3:
  var var_c = var_h(param_t.pathname) % var_s_1.length;
  return param_t.protocol + "//" + var_s_1[var_c] + param_t.pathname;
  case 444:
  var var_l = var_h(param_t.pathname) % var_a_1.length;
  return param_t.protocol + "//" + var_a_1[var_l] + param_t.pathname.replace("file/images",
  "verse/" + param_e);
  case 1080:
  var var_f = var_h(param_t.pathname) % var_a_1.length;
  return param_t.protocol + "//" + var_a_1[var_f] + param_t.pathname.replace("file/images",
  var_u + "sync");
  case 1081:
  var var_d_1 = var_h(param_t.pathname) % var_a_1.length;
  return param_t.protocol + "//" + var_a_1[var_d_1] + param_t.pathname.replace("file/images",
  var_u + "mark");
  case 445:
  return 7 === param_r || 10 === param_r ? "https://cloud-" + (var_h(param_t.pathname) % 3 + 1) + ".movmaster.xyz/html/" + param_t.username + "/" + param_e + "/" + param_t.pathname.replace(
  "/file/images/", "") : 8 === param_r ? "https://cdn.statically.io/gh/" + param_t.username + "/" + param_e + "/main/" + param_t.pathname.replace(
  "/file/images/", "") : 9 === param_r ? "https://raw.githubusercontent.com/" + param_t.username + "/" + param_e + "/main/" + param_t.pathname.replace(
  "/file/images/", "") : null;
  case 6969:
  return param_t.protocol + "//vip.goodhub.xyz" + param_t.pathname;
  default:
  if (param_t.host.indexOf("localhost") > -1) {
  var var_p = var_h(param_t.pathname) % var_s_1.length;
  return param_t.protocol + "//" + var_s_1[var_p] + param_t.pathname.replace("file/images",
  "stream/" + param_e);
  }
  }
  return "";
  };
  function var_v() {
  var var_t = location.href;
  return obj_f[var_t] || (obj_f[var_t] = 0), obj_f[var_t]++, obj_f[var_t];
  }
  var obj_m = {
  forceUpdate() {
  }
  ,
  urls: [{
  checkUrl: param_t => param_t.url.includes("stream.goodhub.xyz"),
  getUrl: param_t => {
  var var_e = param_t.url;
  return fn_u(void 0, void 0, void 0, var_a().m(function var_t() {
  var var_r, var_o;
  return var_a().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  if (!obj_l[var_e]) {
  param_t_1.n = 1;
  break;
  }
  return param_t_1.a(2, obj_l[var_e]);
  case 1:
  return var_r = var_v(), param_t_1.n = 2, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL
  }
  );
  case 2:
  if (!(var_o = param_t_1.v) || !var_o.url) {
  param_t_1.n = 3;
  break;
  }
  return obj_l[var_e] = var_o.url, param_t_1.a(2, var_o.url);
  case 3:
  var_r < 20 && EE.emit("widget.forceUpdate");
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
  var_r,
  var_i = param_t.mediaObject,
  var_o = param_t.node;
  if (obj_l[var_o.src]) {
  var var_a_1 = null === (var_e = obj_l[var_o.src]) || void 0 === var_e ?
  void 0 : var_e[0];
  return var_i.url !== var_a_1.url && Object.keys(var_a_1).forEach(param_t_1 => {
  var var_e_1 = param_t_1;
  var_i[var_e_1] = var_a_1[var_e_1];
  }
  ), var_i.quality = null === (var_r = dep_media_constants.r[var_i.resolution]) ||
  void 0 === var_r ? void 0 : var_r.label, var_i.ext = "m3u8", "video";
  }
  }
  }
  ],
  parse: {
  sources: [{
  checkSource: param_t => param_t.url.includes(".goodhub.xyz"),
  parse: param_t => {
  var var_e,
  var_r = param_t.media,
  var_i = param_t.response,
  var_o = var_r;
  (null == var_i ? void 0 : var_i.includes("#EXTM3U")) || (var_i = var_o.realRes);
  var var_a_1 = document.title.replace(/phim/i, "").trim(),
  var_s_1 = var_o.config,
  var_u = var_o.cdnMap;
  if (var_s_1 && var_u) {
  for (var var_c = var_s_1.videoId, var_l = var_s_1.serverType, var_f = var_i.split(
  "\n"), list_d = [], num_h = 0;
  num_h < var_f.length;
  num_h++) {
  var var_v_1 = var_f[num_h];
  if ("string" == typeof var_v_1 && var_v_1.startsWith("https://")) {
  var var_m = new URL(var_v_1);
  var_v_1 = fn_p(var_m, var_c, var_l, var_u);
  }
  list_d.push(var_v_1);
  }
  return var_o.filename = var_a_1, var_o.play_list = list_d.join("\n"), var_o.quality = null === (
  var_e = dep_media_constants.r[var_o.resolution]) || void 0 === var_e ?
  void 0 : var_e.label, [var_o];
  }
  return [];
  }
  }
  ]
  }
  };
  exportsObj.a = obj_m;
  };
