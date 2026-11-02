// Module 3 [utilities] - Shared utility component (url-utils)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.d(exportsObj, "d", function () {
  return var_d;
  }
  );
  requireFn.d(exportsObj, "f", function () {
  return var_p;
  }
  );
  requireFn.d(exportsObj, "e", function () {
  return var_f;
  }
  );
  requireFn.d(exportsObj, "g", function () {
  return var_m;
  }
  );
  requireFn.d(exportsObj, "b", function () {
  return var_v;
  }
  );
  requireFn.d(exportsObj, "h", function () {
  return var_y;
  }
  );
  requireFn.d(exportsObj, "c", function () {
  return var__;
  }
  );
  requireFn.d(exportsObj, "a", function () {
  return var_b;
  }
  );
  var dep_media_constants = requireFn(1);
  var dep_dom_utils = requireFn(0);
  function var_i() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var var_e;
  var var_t;
  var var_r = typeof Symbol == "function" ? Symbol : {
  };
  var var_n = var_r.iterator || "@@iterator";
  var var_o = var_r.toStringTag || "@@toStringTag";
  function var_s_1(param_r, param_n, param_o, param_i) {
  var var_s_2 = param_n && param_n.prototype instanceof var_u ?
  param_n : var_u;
  var var_l_2 = Object.create(var_s_2.prototype);
  var_a(var_l_2, "_invoke", function (param_r_1, param_n_1, param_o_1) {
  var var_i_1;
  var var_a_1;
  var var_s_3;
  var num_u = 0;
  var var_l_3 = param_o_1 || [];
  var flag_d = false;
  var obj_p = {
  p: 0,
  n: 0,
  v: var_e,
  a: var_f_2,
  f: var_f_2.bind(var_e, 4),
  d: function (param_t, param_r_2) {
  var_i_1 = param_t;
  var_a_1 = 0;
  var_s_3 = var_e;
  obj_p.n = param_r_2;
  return obj_c;
  }
  };
  function var_f_2(param_r_2, param_n_2) {
  var_a_1 = param_r_2;
  var_s_3 = param_n_2;
  var_t = 0;
  for (;
  !flag_d && num_u && !var_o_1 && var_t < var_l_3.length;
  var_t++) {
  var var_o_1;
  var var_i_2 = var_l_3[var_t];
  var var_f_3 = obj_p.p;
  var var_h_2 = var_i_2[2];
  if (param_r_2 > 3) {
  if (var_o_1 = var_h_2 === param_n_2) {
  var_s_3 = var_i_2[(var_a_1 = var_i_2[4]) ? 5 : (var_a_1 = 3, 3)];
  var_i_2[4] = var_i_2[5] = var_e;
  }
  }
  else if (var_i_2[0] <= var_f_3) {
  if (var_o_1 = param_r_2 < 2 && var_f_3 < var_i_2[1]) {
  var_a_1 = 0;
  obj_p.v = param_n_2;
  obj_p.n = var_i_2[1];
  }
  else if (var_f_3 < var_h_2 && (var_o_1 = param_r_2 < 3 || var_i_2[0] > param_n_2 ||
  param_n_2 > var_h_2)) {
  var_i_2[4] = param_r_2;
  var_i_2[5] = param_n_2;
  obj_p.n = var_h_2;
  var_a_1 = 0;
  }
  }
  }
  if (var_o_1 || param_r_2 > 1) {
  return obj_c;
  }
  flag_d = true;
  throw param_n_2;
  }
  return function (param_o_2, param_l, param_h) {
  if (num_u > 1) {
  throw TypeError("Generator is already running");
  }
  if (flag_d && param_l === 1) {
  var_f_2(param_l, param_h);
  }
  var_a_1 = param_l;
  var_s_3 = param_h;
  while ((var_t = var_a_1 < 2 ? var_e : var_s_3) || !flag_d) {
  if (!var_i_1) {
  if (var_a_1) {
  if (var_a_1 < 3) {
  if (var_a_1 > 1) {
  obj_p.n = -1;
  }
  var_f_2(var_a_1, var_s_3);
  }
  else {
  obj_p.n = var_s_3;
  }
  }
  else {
  obj_p.v = var_s_3;
  }
  }
  try {
  num_u = 2;
  if (var_i_1) {
  if (!var_a_1) {
  param_o_2 = "next";
  }
  if (var_t = var_i_1[param_o_2]) {
  if (!(var_t = var_t.call(var_i_1, var_s_3))) {
  throw TypeError("iterator result is not an object");
  }
  if (!var_t.done) {
  return var_t;
  }
  var_s_3 = var_t.value;
  if (var_a_1 < 2) {
  var_a_1 = 0;
  }
  }
  else {
  if (var_a_1 === 1 && (var_t = var_i_1.return)) {
  var_t.call(var_i_1);
  }
  if (var_a_1 < 2) {
  var_s_3 = TypeError("The iterator does not provide a '" + param_o_2 + "' method");
  var_a_1 = 1;
  }
  }
  var_i_1 = var_e;
  }
  else if ((var_t = (flag_d = obj_p.n < 0) ? var_s_3 : param_r_1.call(param_n_1,
  obj_p)) !== obj_c) {
  break;
  }
  }
  catch (var_t_1) {
  var_i_1 = var_e;
  var_a_1 = 1;
  var_s_3 = var_t_1;
  }
  finally {
  num_u = 1;
  }
  }
  return {
  value: var_t,
  done: flag_d
  };
  };
  }
  (param_r, param_o, param_i), true);
  return var_l_2;
  }
  var obj_c = {
  };
  function var_u() {
  }
  function var_l_1() {
  }
  function var_d_1() {
  }
  var_t = Object.getPrototypeOf;
  var var_p_1 = [][var_n] ? var_t(var_t([][var_n]())) : (var_a(var_t = {
  }
  , var_n, function () {
  return this;
  }
  ), var_t);
  var var_f_1 = var_d_1.prototype = var_u.prototype = Object.create(var_p_1);
  function var_h_1(param_e) {
  if (Object.setPrototypeOf) {
  Object.setPrototypeOf(param_e, var_d_1);
  }
  else {
  param_e.__proto__ = var_d_1;
  var_a(param_e, var_o, "GeneratorFunction");
  }
  param_e.prototype = Object.create(var_f_1);
  return param_e;
  }
  var_l_1.prototype = var_d_1;
  var_a(var_f_1, "constructor", var_d_1);
  var_a(var_d_1, "constructor", var_l_1);
  var_l_1.displayName = "GeneratorFunction";
  var_a(var_d_1, var_o, "GeneratorFunction");
  var_a(var_f_1);
  var_a(var_f_1, var_o, "Generator");
  var_a(var_f_1, var_n, function () {
  return this;
  }
  );
  var_a(var_f_1, "toString", function () {
  return "[object Generator]";
  }
  );
  return (var_i = function () {
  return {
  w: var_s_1,
  m: var_h_1
  };
  }
  )();
  }
  function var_a(param_e, param_t, param_r, param_n) {
  var var_o = Object.defineProperty;
  try {
  var_o({
  }
  , "", {
  }
  );
  }
  catch (var_e) {
  var_o = 0;
  }
  (var_a = function (param_e_1, param_t_1, param_r_1, param_n_1) {
  function var_i_1(param_t_2, param_r_2) {
  var_a(param_e_1, param_t_2, function (param_e_2) {
  return this._invoke(param_t_2, param_r_2, param_e_2);
  }
  );
  }
  if (param_t_1) {
  if (var_o) {
  var_o(param_e_1, param_t_1, {
  value: param_r_1,
  enumerable: !param_n_1,
  configurable: !param_n_1,
  writable: !param_n_1
  }
  );
  }
  else {
  param_e_1[param_t_1] = param_r_1;
  }
  }
  else {
  var_i_1("next", 0);
  var_i_1("throw", 1);
  var_i_1("return", 2);
  }
  }
  )(param_e, param_t, param_r, param_n);
  }
  function var_s(param_e, param_t, param_r, param_n) {
  return new (param_r ||= Promise)(function (param_o, param_i) {
  function var_a_1(param_e_1) {
  try {
  var_c(param_n.next(param_e_1));
  }
  catch (var_e) {
  param_i(var_e);
  }
  }
  function var_s_1(param_e_1) {
  try {
  var_c(param_n.throw(param_e_1));
  }
  catch (var_e) {
  param_i(var_e);
  }
  }
  function var_c(param_e_1) {
  var var_t;
  if (param_e_1.done) {
  param_o(param_e_1.value);
  }
  else {
  (var_t = param_e_1.value, var_t instanceof param_r ? var_t :
  new param_r(function (param_e_2) {
  param_e_2(var_t);
  }
  )).then(var_a_1, var_s_1);
  }
  }
  var_c((param_n = param_n.apply(param_e, param_t || [])).next());
  }
  );
  }
  var regex_c = /([^/]+)$/i;
  var regex_u = /\.([^/.]*)$/i;
  function var_l(param_e) {
  if (param_e && param_e.indexOf("data:image") !== 0) {
  return /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/\.?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(
  param_e);
  }
  else {
  return [];
  }
  }
  function var_d(param_e) {
  var str_t = "";
  var str_r = "";
  try {
  var var_n = param_e.split("/");
  str_t = var_n[0];
  var var_o = var_n[1].split(";")[0];
  str_r = var_o;
  switch (var_o) {
  case "webm":
  str_r = str_t == "video" ? "webm" : "weba";
  break;
  case "3gpp":
  str_r = "3gp";
  break;
  case "3gpp2":
  str_r = "3g2";
  break;
  case "ogg":
  str_r = str_t == "video" ? "ogv" : "oga";
  break;
  case "mpeg":
  str_r = str_t == "video" ? "mpeg" : "mp3";
  break;
  case "x-midi":
  str_r = "midi";
  break;
  case "x-msvideo":
  str_r = "avi";
  break;
  case "mp2t":
  str_r = "ts";
  }
  return {
  type: str_t,
  ext: str_r
  };
  }
  catch (var_e) {
  return {
  type: str_t,
  ext: str_r
  };
  }
  }
  function var_p(param_e, param_t) {
  var var_r = typeof param_e == "object" ? param_e.videoUrl :
  param_e;
  var var_n = new URL(var_r, var_r.startsWith("http") ? undefined :
  location.origin);
  var var_i_1 = (var_n.pathname.match(regex_c) || [])[1] || "";
  var var_a_1 = var_i_1.split(".").map(param_e_1 => param_e_1.toLowerCase());
  var_i_1 = decodeURIComponent(var_i_1.replace(regex_u, ""));
  var_a_1.shift();
  if (var_a_1.length === 0 && Object(dep_dom_utils.isSpecialUrls)(param_e)) {
  var_a_1 = ["m3u8"];
  }
  var var_s_1 = var_a_1[var_a_1.length - 1] || "";
  var var_l_1 = null;
  if (var_n.href.startsWith("data:")) {
  var var_p_1 = var_d(var_n.href.match(/data:([a-z]+\/[a-z0-9\-_]+);/i)[1]);
  var_s_1 = var_p_1.ext;
  var_l_1 = var_p_1.type;
  }
  var obj_f = {
  url: typeof param_e == "object" ? param_e : var_n.href,
  protocol: var_n.protocol,
  host: var_n.host,
  port: var_n.port,
  pathname: var_n.pathname,
  filename: var_i_1,
  ext: var_s_1,
  exts: var_a_1,
  hash: var_n.hash,
  search: var_n.search,
  type: var_l_1
  };
  if (!obj_f.port) {
  delete obj_f.port;
  }
  if (param_t) {
  var obj_h = {
  };
  var_n.search.replace(/^\?/, "").split(/&/).forEach(param_e_1 => {
  var var_t = param_e_1.split("=");
  obj_h[var_t[0]] = var_t[1];
  }
  );
  obj_f.query = obj_h;
  }
  if (var_s_1 == "flac") {
  obj_f.quality = "Lossless";
  obj_f.resolution = "lossless";
  }
  return obj_f;
  }
  function var_f(param_e) {
  var var_r = typeof param_e == "object" ? param_e.videoUrl :
  param_e;
  if (var_r.startsWith("data:")) {
  var var_o = var_r.match(/data:([a-z]+)/)[1];
  if (["audio", "video"].includes(var_o)) {
  return var_o;
  }
  else {
  return "";
  }
  }
  var var_i_1 = var_l(var_r)?.[11] || "";
  if (!var_i_1) {
  return "";
  }
  var var_a_1 = new Map();
  var list_s = ["no_watermark_video"];
  Object.keys(dep_media_constants.k).forEach(param_e_1 => {
  if (!list_s.includes(param_e_1)) {
  for (var var_t = dep_media_constants.k[param_e_1].extensions, num_r = 0;
  num_r < var_t.length;
  num_r++) {
  var_a_1.set(var_t[num_r], param_e_1);
  }
  }
  }
  );
  if (var_r.includes("googlevideo.com/videoplayback") && var_i_1 === "videoplayback" &&
  var_r.includes("mp4")) {
  var_i_1 = "video.mp4";
  }
  if (var_r.includes("videoplayback") && var_i_1 === "videoplayback" &&
  var_r.includes("mp4")) {
  var_i_1 = "video.mp4";
  }
  var var_c = var_i_1.split(".");
  var var_u = var_c.length - 1;
  if (var_u <= 0) {
  return "";
  }
  var var_d_1 = var_c[var_u].toLowerCase();
  return var_a_1.get(var_d_1);
  }
  function var_h(param_e) {
  return var_s(this, undefined, undefined, var_i().m(function var_t() {
  var var_r;
  var var_n;
  return var_i().w(function (param_t) {
  while (true) {
  switch (param_t.n) {
  case 0:
  param_t.n = 1;
  return fetch(param_e);
  case 1:
  var_r = param_t.v;
  param_t.n = 2;
  return var_r.blob();
  case 2:
  var_n = param_t.v;
  return param_t.a(2, new Promise((param_e_1, param_t_1) => {
  var var_r_1 = new FileReader();
  var_r_1.onloadend = () => {
  var var_t_1;
  return param_e_1((var_t_1 = var_r_1.result) === null || var_t_1 === undefined ?
  undefined : var_t_1.toString());
  };
  var_r_1.onerror = param_t_1;
  var_r_1.readAsDataURL(var_n);
  }
  ));
  }
  }
  }
  , var_t);
  }
  ));
  }
  function var_m(param_e) {
  var var_t = param_e.url;
  var var_r = param_e.node;
  return var_s(this, undefined, undefined, var_i().m(function var_e() {
  var var_n;
  var var_a_1;
  var var_s_1;
  var var_l_1;
  var var_d_1;
  return var_i().w(function (param_e_1) {
  while (true) {
  switch (param_e_1.n) {
  case 0:
  var_n = new URL(var_t.startsWith("blob:") ? var_t.replace("blob:", "") :
  var_t);
  var_a_1 = var_r.alt || (var_n.pathname.match(regex_c) || [])[1] ||
  "";
  var_a_1 = decodeURIComponent(var_a_1.replace(regex_u, "").replace(/%/g, "%25"));
  param_e_1.n = 1;
  return var_g(var_t);
  case 1:
  var_s_1 = param_e_1.v;
  var_l_1 = {
  url: var_t,
  protocol: var_n.protocol,
  host: var_n.host,
  pathname: var_n.pathname,
  filename: `${var_a_1}
  .${var_s_1}
  `,
  ext: var_s_1,
  exts: [var_s_1],
  hash: var_n.hash,
  search: var_n.search,
  type: "image",
  i18n_quality: Object(dep_dom_utils.i18n)("download_current_image")
  };
  if (!var_t.includes("blob:")) {
  param_e_1.n = 3;
  break;
  }
  param_e_1.n = 2;
  return var_h(var_t);
  case 2:
  if (var_d_1 = param_e_1.v) {
  var_l_1.url = var_d_1;
  }
  case 3:
  return param_e_1.a(2, var_l_1);
  }
  }
  }
  , var_e);
  }
  ));
  }
  function var_g(param_e) {
  return var_s(this, undefined, undefined, var_i().m(function var_r() {
  var var_n;
  var var_o;
  var var_a_1;
  return var_i().w(function (param_r) {
  while (true) {
  switch (param_r.n) {
  case 0:
  var_n = new AbortController();
  param_r.n = 1;
  return fetch(param_e, {
  signal: var_n.signal
  }
  );
  case 1:
  var_o = param_r.v;
  var_a_1 = var_o.headers.get("content-type");
  var_n.abort();
  return param_r.a(2, (var_a_1 == null ? undefined : var_a_1.split("/"))?.[1]);
  }
  }
  }
  , var_r);
  }
  ));
  }
  function var_v(param_e) {
  if ((param_e = Object.create(param_e)).query) {
  param_e.search = [];
  for (var var_t in param_e.query) {
  if (param_e.query[var_t] !== undefined) {
  param_e.search.push(var_t + "=" + encodeURIComponent(param_e.query[var_t]));
  }
  else {
  param_e.search.push(var_t);
  }
  }
  param_e.search = "?" + param_e.search.join("&");
  delete param_e.query;
  }
  return param_e.href;
  }
  function var_y(param_e) {
  var var_t = (param_e = param_e.replace(/^[#?]{1}/, "")).split("&");
  var obj_r = {
  };
  var_t.forEach(param_e_1 => {
  var var_t_1 = param_e_1.split("=");
  if (Object(dep_dom_utils.defined)(var_t_1[0]) && Object(dep_dom_utils.defined)(
  var_t_1[1])) {
  obj_r[var_t_1[0]] = decodeURIComponent(var_t_1[1].replace(/\+/g, " "));
  }
  }
  );
  return obj_r;
  }
  var var__ = (() => {
  var list_e = ["facebook.com", "youtube.com", "video.vnexpress.net", "mp3.zing.vn",
  "radio.zing.vn", "tv.zing.vn", "nhaccuatui.com", "video.thethao247.vn", "video.ngoisao.net",
  "xvideos.com", "phimmoi.net", "clip.vn", "yan.vn", "xem.vn", "pornhub.com", "xhamster.com",
  "dailymotion.com", "xnxx.com", "hdonline.vn", "phim3s.net", "redtube.com", "phim14.net",
  "soundcloud.com", "youporn.com", "vimeo.com", "fptplay.net", "haivn.com", "chiasenhac.com",
  "movies.hdviet.com", "nhac.vui.vn", "nhacso.net", "anime47.com", "tube8.com", "talktv.vn",
  "chatvl.info", "cohet.tv", "vlxx.tv", "hayhaytv.vn", "xemphimso.com", "vivo.vn",
  "xemvtv.net", "vkool.net", "chimsedinang.com", "keeng.vn", "vuighe.net", "vetv.vn",
  "xemphimon.com", "ixxx.com", "biphim.com", "kenhvideo.com", "videogame.vn", "phim.in",
  "voh.com.vn", "phimsexporn.com", "porn99.net", "news.zing.vn", "me.zing.vn", "twitter.com",
  "24h.com.vn", "phim.clip.vn", "video.ringring.vn", "v.nhaccuatui.com", "clip.vietnamnet.vn",
  "afamily.vn", "media.bongdaplus.vn", "bongdaclip.com", "gamek.vn", "phapluattp.vn",
  "hdviet.com", "haiivl.com", "chatvl.com", "2sao.vn", "videos.vietgiaitri.com",
  "nhac.vietgiaitri.com", "megafun.vn", "phim.hayhd.vn", "cand.com.vn", "ohay.tv",
  "phim.megabox.vn", "anhtrang.org", "phim.anhtrang.org", "8bongda.com", "xemphimone.com",
  "bongda365.com.vn", "phimhd.vn", "dinotube.com", "phimvipvn.net", "animeax.com",
  "phimdata.com", "phimnhanh.net", "vipphim.net", "phimvon.com", "pubvn.tv", "phim22.com",
  "phim7.com", "hayxemphim.com", "m-viet.com", "thethaoclip.com", "nhac.hay365.com",
  "ssphim.com", "phimtructuyenhd.com", "xuongphim.tv", "vino.vn/mp3", "haivl.io",
  "nhacvang.org", "starmovies.mobi", "clipvuivn.com", "phimporn.com", "123tv.vn",
  "phimonlinehd.net", "hai24h.net", "jax.vn", "kenhgioitre.net", "chiaseclip.net",
  "phim.xixam.com", "bilutv.com", "phimbathu.com", "instagram.com", "banhtv.com",
  "txxx.com", "video.vietnamnet.vn", "video.bongdaplus.vn", "creatives.livejasmin.com",
  "tv.naver.com", "tv.tuoitre.vn", "icdrama.se", "video.thanhnien.vn", "spankbang.com",
  "dmm.co.jp", "v.youku.com", "v.qq.com", "daikynguyenvn.com", "thethao247.vn", "e.vnexpress.net",
  "ione.vnexpress.net", "kenh14.vn", "dantri.com.vn", "baomoi.com", "emdep.vn", "tuoitre.vn",
  "soha.vn", "video.congan.com.vn", "cafef.vn", "bongda.com.vn", "bongdaso.com",
  "eva.vn", "danviet.vn", "cliptv.vn", "bbc.co.uk", "edition.cnn.com", "buzzfeed.com",
  "businessinsider.com", "cnet.com", "dailymail.co.uk", "bilutvx.net", "chill123.gotdns.ch"];
  var obj_t = {
  };
  for (var num_r = 0, var_n = list_e.length;
  num_r < var_n;
  ++num_r) {
  var var_o = list_e[num_r];
  console.assert(!(var_o in obj_t), "Duplicate \"" + var_o + "\": " + obj_t[var_o] + ", " + num_r);
  obj_t[var_o] = num_r + 1;
  }
  return function (param_e) {
  for (var var_r = function (param_e_1) {
  return var_l(param_e_1)?.[6] || "";
  }
  (param_e), var_n_1 = obj_t[var_r];
  !var_n_1 && var_r;
  ) {
  var var_o_1 = var_r.indexOf(".") + 1;
  if (var_o_1 === 0) {
  break;
  }
  var_r = var_r.substr(var_o_1);
  var_n_1 = obj_t[var_r];
  }
  return 100 + (var_n_1 | 0);
  };
  }
  )();
  function var_b(param_e, param_t, param_r = false) {
  var var_n = param_e || new URL(param_t);
  if (param_t.includes("https") || param_t.includes("//")) {
  if (!param_t.includes("http")) {
  param_t = "https:" + param_t;
  }
  return param_t.replace(/http:\/\//, "https://");
  }
  if (param_r && param_t.startsWith("/")) {
  if (var_n.origin) {
  return var_n.origin + param_t;
  }
  else {
  return param_t;
  }
  }
  var var_o = (var_n.host + var_n.pathname).split("/").filter(param_e_1 => !!param_e_1).slice(
  0, -1);
  var var_i_1 = param_t.split("/").filter(param_e_1 => !!param_e_1);
  var var_a_1 = var_i_1.lastIndexOf("..");
  var var_s_1 = var_i_1.slice(0, var_a_1 + 1);
  var var_c = var_i_1.slice(var_a_1 + 1);
  if (var_s_1.length > 0) {
  var_o = var_o.slice(0, -var_s_1.length);
  }
  var var_u = var_o.indexOf(var_c[0]);
  if (var_u == -1) {
  var_o.push(...var_c);
  }
  else {
  var_u += 1;
  for (var num_l = 1;
  num_l < var_c.length;
  ++num_l) {
  var var_d_1 = var_c[num_l];
  if (!var_o.includes(var_d_1)) {
  if (var_o[var_u - 1] === var_c[num_l - 1]) {
  var_o[var_u] = var_d_1;
  }
  else {
  var_o.push(var_d_1);
  }
  }
  var_u += 1;
  }
  }
  return var_n.protocol + "//" + var_o.join("/");
  }
  };
