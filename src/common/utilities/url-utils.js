// Module 3 [utilities] - Shared utility component (url-utils)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.d(exportsObj, "d", function () {
  return var_d;
  }
  );
  requireFn.d(exportsObj, "f", function () {
  return var_f;
  }
  );
  requireFn.d(exportsObj, "e", function () {
  return var_p;
  }
  );
  requireFn.d(exportsObj, "g", function () {
  return var_g;
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
  return var_k;
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
  var var_n = typeof Symbol == "function" ? Symbol : {
  };
  var var_r = var_n.iterator || "@@iterator";
  var var_o = var_n.toStringTag || "@@toStringTag";
  function var_s_1(param_n, param_r, param_o, param_i) {
  var var_s_2 = param_r && param_r.prototype instanceof var_l ?
  param_r : var_l;
  var var_u_2 = Object.create(var_s_2.prototype);
  var_a(var_u_2, "_invoke", function (param_n_1, param_r_1, param_o_1) {
  var var_i_1;
  var var_a_1;
  var var_s_3;
  var num_l = 0;
  var var_u_3 = param_o_1 || [];
  var flag_d = false;
  var obj_f = {
  p: 0,
  n: 0,
  v: var_e,
  a: var_p_2,
  f: var_p_2.bind(var_e, 4),
  d: function (param_t, param_n_2) {
  var_i_1 = param_t;
  var_a_1 = 0;
  var_s_3 = var_e;
  obj_f.n = param_n_2;
  return obj_c;
  }
  };
  function var_p_2(param_n_2, param_r_2) {
  var_a_1 = param_n_2;
  var_s_3 = param_r_2;
  var_t = 0;
  for (;
  !flag_d && num_l && !var_o_1 && var_t < var_u_3.length;
  var_t++) {
  var var_o_1;
  var var_i_2 = var_u_3[var_t];
  var var_p_3 = obj_f.p;
  var var_h_2 = var_i_2[2];
  if (param_n_2 > 3) {
  if (var_o_1 = var_h_2 === param_r_2) {
  var_s_3 = var_i_2[(var_a_1 = var_i_2[4]) ? 5 : (var_a_1 = 3, 3)];
  var_i_2[4] = var_i_2[5] = var_e;
  }
  }
  else if (var_i_2[0] <= var_p_3) {
  if (var_o_1 = param_n_2 < 2 && var_p_3 < var_i_2[1]) {
  var_a_1 = 0;
  obj_f.v = param_r_2;
  obj_f.n = var_i_2[1];
  }
  else if (var_p_3 < var_h_2 && (var_o_1 = param_n_2 < 3 || var_i_2[0] > param_r_2 ||
  param_r_2 > var_h_2)) {
  var_i_2[4] = param_n_2;
  var_i_2[5] = param_r_2;
  obj_f.n = var_h_2;
  var_a_1 = 0;
  }
  }
  }
  if (var_o_1 || param_n_2 > 1) {
  return obj_c;
  }
  flag_d = true;
  throw param_r_2;
  }
  return function (param_o_2, param_u, param_h) {
  if (num_l > 1) {
  throw TypeError("Generator is already running");
  }
  if (flag_d && param_u === 1) {
  var_p_2(param_u, param_h);
  }
  var_a_1 = param_u;
  var_s_3 = param_h;
  while ((var_t = var_a_1 < 2 ? var_e : var_s_3) || !flag_d) {
  if (!var_i_1) {
  if (var_a_1) {
  if (var_a_1 < 3) {
  if (var_a_1 > 1) {
  obj_f.n = -1;
  }
  var_p_2(var_a_1, var_s_3);
  }
  else {
  obj_f.n = var_s_3;
  }
  }
  else {
  obj_f.v = var_s_3;
  }
  }
  try {
  num_l = 2;
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
  else if ((var_t = (flag_d = obj_f.n < 0) ? var_s_3 : param_n_1.call(param_r_1,
  obj_f)) !== obj_c) {
  break;
  }
  }
  catch (var_t_1) {
  var_i_1 = var_e;
  var_a_1 = 1;
  var_s_3 = var_t_1;
  }
  finally {
  num_l = 1;
  }
  }
  return {
  value: var_t,
  done: flag_d
  };
  };
  }
  (param_n, param_o, param_i), true);
  return var_u_2;
  }
  var obj_c = {
  };
  function var_l() {
  }
  function var_u_1() {
  }
  function var_d_1() {
  }
  var_t = Object.getPrototypeOf;
  var var_f_1 = [][var_r] ? var_t(var_t([][var_r]())) : (var_a(var_t = {
  }
  , var_r, function () {
  return this;
  }
  ), var_t);
  var var_p_1 = var_d_1.prototype = var_l.prototype = Object.create(var_f_1);
  function var_h_1(param_e) {
  if (Object.setPrototypeOf) {
  Object.setPrototypeOf(param_e, var_d_1);
  }
  else {
  param_e.__proto__ = var_d_1;
  var_a(param_e, var_o, "GeneratorFunction");
  }
  param_e.prototype = Object.create(var_p_1);
  return param_e;
  }
  var_u_1.prototype = var_d_1;
  var_a(var_p_1, "constructor", var_d_1);
  var_a(var_d_1, "constructor", var_u_1);
  var_u_1.displayName = "GeneratorFunction";
  var_a(var_d_1, var_o, "GeneratorFunction");
  var_a(var_p_1);
  var_a(var_p_1, var_o, "Generator");
  var_a(var_p_1, var_r, function () {
  return this;
  }
  );
  var_a(var_p_1, "toString", function () {
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
  function var_a(param_e, param_t, param_n, param_r) {
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
  (var_a = function (param_e_1, param_t_1, param_n_1, param_r_1) {
  function var_i_1(param_t_2, param_n_2) {
  var_a(param_e_1, param_t_2, function (param_e_2) {
  return this._invoke(param_t_2, param_n_2, param_e_2);
  }
  );
  }
  if (param_t_1) {
  if (var_o) {
  var_o(param_e_1, param_t_1, {
  value: param_n_1,
  enumerable: !param_r_1,
  configurable: !param_r_1,
  writable: !param_r_1
  }
  );
  }
  else {
  param_e_1[param_t_1] = param_n_1;
  }
  }
  else {
  var_i_1("next", 0);
  var_i_1("throw", 1);
  var_i_1("return", 2);
  }
  }
  )(param_e, param_t, param_n, param_r);
  }
  function var_s(param_e, param_t, param_n, param_r) {
  return new (param_n ||= Promise)(function (param_o, param_i) {
  function var_a_1(param_e_1) {
  try {
  var_c(param_r.next(param_e_1));
  }
  catch (var_e) {
  param_i(var_e);
  }
  }
  function var_s_1(param_e_1) {
  try {
  var_c(param_r.throw(param_e_1));
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
  (var_t = param_e_1.value, var_t instanceof param_n ? var_t :
  new param_n(function (param_e_2) {
  param_e_2(var_t);
  }
  )).then(var_a_1, var_s_1);
  }
  }
  var_c((param_r = param_r.apply(param_e, param_t || [])).next());
  }
  );
  }
  var regex_c = /([^/]+)$/i;
  var regex_l = /\.([^/.]*)$/i;
  function var_u(param_e) {
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
  var str_n = "";
  try {
  var var_r = param_e.split("/");
  str_t = var_r[0];
  var var_o = var_r[1].split(";")[0];
  str_n = var_o;
  switch (var_o) {
  case "webm":
  str_n = str_t == "video" ? "webm" : "weba";
  break;
  case "3gpp":
  str_n = "3gp";
  break;
  case "3gpp2":
  str_n = "3g2";
  break;
  case "ogg":
  str_n = str_t == "video" ? "ogv" : "oga";
  break;
  case "mpeg":
  str_n = str_t == "video" ? "mpeg" : "mp3";
  break;
  case "x-midi":
  str_n = "midi";
  break;
  case "x-msvideo":
  str_n = "avi";
  break;
  case "mp2t":
  str_n = "ts";
  }
  return {
  type: str_t,
  ext: str_n
  };
  }
  catch (var_e) {
  return {
  type: str_t,
  ext: str_n
  };
  }
  }
  function var_f(param_e, param_t) {
  var var_n = typeof param_e == "object" ? param_e.videoUrl :
  param_e;
  var var_r = new URL(var_n, var_n.startsWith("http") ? undefined :
  location.origin);
  var var_i_1 = (var_r.pathname.match(regex_c) || [])[1] || "";
  var var_a_1 = var_i_1.split(".").map(param_e_1 => param_e_1.toLowerCase());
  var_i_1 = decodeURIComponent(var_i_1.replace(regex_l, ""));
  var_a_1.shift();
  if (var_a_1.length === 0 && Object(dep_dom_utils.isSpecialUrls)(param_e)) {
  var_a_1 = ["m3u8"];
  }
  var var_s_1 = var_a_1[var_a_1.length - 1] || "";
  var var_u_1 = null;
  if (var_r.href.startsWith("data:")) {
  var var_f_1 = var_d(var_r.href.match(/data:([a-z]+\/[a-z0-9\-_]+);/i)[1]);
  var_s_1 = var_f_1.ext;
  var_u_1 = var_f_1.type;
  }
  var obj_p = {
  url: typeof param_e == "object" ? param_e : var_r.href,
  protocol: var_r.protocol,
  host: var_r.host,
  port: var_r.port,
  pathname: var_r.pathname,
  filename: var_i_1,
  ext: var_s_1,
  exts: var_a_1,
  hash: var_r.hash,
  search: var_r.search,
  type: var_u_1
  };
  if (!obj_p.port) {
  delete obj_p.port;
  }
  if (param_t) {
  var obj_h = {
  };
  var_r.search.replace(/^\?/, "").split(/&/).forEach(param_e_1 => {
  var var_t = param_e_1.split("=");
  obj_h[var_t[0]] = var_t[1];
  }
  );
  obj_p.query = obj_h;
  }
  if (var_s_1 == "flac") {
  obj_p.quality = "Lossless";
  obj_p.resolution = "lossless";
  }
  return obj_p;
  }
  function var_p(param_e) {
  var var_n = typeof param_e == "object" ? param_e.videoUrl :
  param_e;
  if (var_n.startsWith("data:")) {
  var var_o = var_n.match(/data:([a-z]+)/)[1];
  if (["audio", "video"].includes(var_o)) {
  return var_o;
  }
  else {
  return "";
  }
  }
  var var_i_1 = var_u(var_n)?.[11] || "";
  if (!var_i_1) {
  return "";
  }
  var var_a_1 = new Map();
  var list_s = ["no_watermark_video"];
  Object.keys(dep_media_constants.k).forEach(param_e_1 => {
  if (!list_s.includes(param_e_1)) {
  for (var var_t = dep_media_constants.k[param_e_1].extensions, num_n = 0;
  num_n < var_t.length;
  num_n++) {
  var_a_1.set(var_t[num_n], param_e_1);
  }
  }
  }
  );
  if (var_n.includes("googlevideo.com/videoplayback") && var_i_1 === "videoplayback" &&
  var_n.includes("mp4")) {
  var_i_1 = "video.mp4";
  }
  if (var_n.includes("videoplayback") && var_i_1 === "videoplayback" &&
  var_n.includes("mp4")) {
  var_i_1 = "video.mp4";
  }
  var var_c = var_i_1.split(".");
  var var_l = var_c.length - 1;
  if (var_l <= 0) {
  return "";
  }
  var var_d_1 = var_c[var_l].toLowerCase();
  return var_a_1.get(var_d_1);
  }
  function var_h(param_e) {
  return var_s(this, undefined, undefined, var_i().m(function var_t() {
  var var_n;
  var var_r;
  return var_i().w(function (param_t) {
  while (true) {
  switch (param_t.n) {
  case 0:
  param_t.n = 1;
  return fetch(param_e);
  case 1:
  var_n = param_t.v;
  param_t.n = 2;
  return var_n.blob();
  case 2:
  var_r = param_t.v;
  return param_t.a(2, new Promise((param_e_1, param_t_1) => {
  var var_n_1 = new FileReader();
  var_n_1.onloadend = () => {
  var var_t_1;
  return param_e_1((var_t_1 = var_n_1.result) === null || var_t_1 === undefined ?
  undefined : var_t_1.toString());
  };
  var_n_1.onerror = param_t_1;
  var_n_1.readAsDataURL(var_r);
  }
  ));
  }
  }
  }
  , var_t);
  }
  ));
  }
  function var_g(param_e) {
  var var_t = param_e.url;
  var var_n = param_e.node;
  return var_s(this, undefined, undefined, var_i().m(function var_e() {
  var var_r;
  var var_a_1;
  var var_s_1;
  var var_u_1;
  var var_d_1;
  return var_i().w(function (param_e_1) {
  while (true) {
  switch (param_e_1.n) {
  case 0:
  var_r = new URL(var_t.startsWith("blob:") ? var_t.replace("blob:", "") :
  var_t);
  var_a_1 = var_n.alt || (var_r.pathname.match(regex_c) || [])[1] ||
  "";
  var_a_1 = decodeURIComponent(var_a_1.replace(regex_l, "").replace(/%/g, "%25"));
  param_e_1.n = 1;
  return var_m(var_t);
  case 1:
  var_s_1 = param_e_1.v;
  var_u_1 = {
  url: var_t,
  protocol: var_r.protocol,
  host: var_r.host,
  pathname: var_r.pathname,
  filename: `${var_a_1}.${var_s_1}`,
  ext: var_s_1,
  exts: [var_s_1],
  hash: var_r.hash,
  search: var_r.search,
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
  var_u_1.url = var_d_1;
  }
  case 3:
  return param_e_1.a(2, var_u_1);
  }
  }
  }
  , var_e);
  }
  ));
  }
  function var_m(param_e) {
  return var_s(this, undefined, undefined, var_i().m(function var_n() {
  var var_r;
  var var_o;
  var var_a_1;
  return var_i().w(function (param_n) {
  while (true) {
  switch (param_n.n) {
  case 0:
  var_r = new AbortController();
  param_n.n = 1;
  return fetch(param_e, {
  signal: var_r.signal
  }
  );
  case 1:
  var_o = param_n.v;
  var_a_1 = var_o.headers.get("content-type");
  var_r.abort();
  return param_n.a(2, (var_a_1 == null ? undefined : var_a_1.split("/"))?.[1]);
  }
  }
  }
  , var_n);
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
  var obj_n = {
  };
  var_t.forEach(param_e_1 => {
  var var_t_1 = param_e_1.split("=");
  if (Object(dep_dom_utils.defined)(var_t_1[0]) && Object(dep_dom_utils.defined)(
  var_t_1[1])) {
  obj_n[var_t_1[0]] = decodeURIComponent(var_t_1[1].replace(/\+/g, " "));
  }
  }
  );
  return obj_n;
  }
  var var_k = (() => {
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
  for (var num_n = 0, var_r = list_e.length;
  num_n < var_r;
  ++num_n) {
  var var_o = list_e[num_n];
  console.assert(!(var_o in obj_t), "Duplicate \"" + var_o + "\": " + obj_t[var_o] + ", " + num_n);
  obj_t[var_o] = num_n + 1;
  }
  return function (param_e) {
  for (var var_n = function (param_e_1) {
  return var_u(param_e_1)?.[6] || "";
  }
  (param_e), var_r_1 = obj_t[var_n];
  !var_r_1 && var_n;
  ) {
  var var_o_1 = var_n.indexOf(".") + 1;
  if (var_o_1 === 0) {
  break;
  }
  var_n = var_n.substr(var_o_1);
  var_r_1 = obj_t[var_n];
  }
  return 100 + (var_r_1 | 0);
  };
  }
  )();
  function var_b(param_e, param_t, param_n = false) {
  var var_r = param_e || new URL(param_t);
  if (param_t.includes("https") || param_t.includes("//")) {
  if (!param_t.includes("http")) {
  param_t = "https:" + param_t;
  }
  return param_t.replace(/http:\/\//, "https://");
  }
  if (param_n && param_t.startsWith("/")) {
  if (var_r.origin) {
  return var_r.origin + param_t;
  }
  else {
  return param_t;
  }
  }
  var var_o = (var_r.host + var_r.pathname).split("/").filter(param_e_1 => !!param_e_1).slice(
  0, -1);
  var var_i_1 = param_t.split("/").filter(param_e_1 => !!param_e_1);
  var var_a_1 = var_i_1.lastIndexOf("..");
  var var_s_1 = var_i_1.slice(0, var_a_1 + 1);
  var var_c = var_i_1.slice(var_a_1 + 1);
  if (var_s_1.length > 0) {
  var_o = var_o.slice(0, -var_s_1.length);
  }
  var var_l = var_o.indexOf(var_c[0]);
  if (var_l == -1) {
  var_o.push(...var_c);
  }
  else {
  var_l += 1;
  for (var num_u = 1;
  num_u < var_c.length;
  ++num_u) {
  var var_d_1 = var_c[num_u];
  if (!var_o.includes(var_d_1)) {
  if (var_o[var_l - 1] === var_c[num_u - 1]) {
  var_o[var_l] = var_d_1;
  }
  else {
  var_o.push(var_d_1);
  }
  }
  var_l += 1;
  }
  }
  return var_r.protocol + "//" + var_o.join("/");
  }
  };
