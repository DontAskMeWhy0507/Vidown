// Module 0 [core-utils] - Shared utility component (dom-utils)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  (function (param_e) {
  requireFn.d(exportsObj, "query", function () {
  return var_p;
  }
  );
  requireFn.d(exportsObj, "queryAll", function () {
  return var_h;
  }
  );
  requireFn.d(exportsObj, "findParent", function () {
  return var_g;
  }
  );
  requireFn.d(exportsObj, "nearestParent", function () {
  return var_m;
  }
  );
  requireFn.d(exportsObj, "getNodePropOrEmptyString", function () {
  return var_v;
  }
  );
  requireFn.d(exportsObj, "stripTagsExcept", function () {
  return var_y;
  }
  );
  requireFn.d(exportsObj, "toArray", function () {
  return var_k;
  }
  );
  requireFn.d(exportsObj, "unique", function () {
  return var_b;
  }
  );
  requireFn.d(exportsObj, "arrayBufferToBase64", function () {
  return var__;
  }
  );
  requireFn.d(exportsObj, "base64ToArrayBuffer", function () {
  return var_T;
  }
  );
  requireFn.d(exportsObj, "isMatches", function () {
  return var_S;
  }
  );
  requireFn.d(exportsObj, "getYoutubeInfo", function () {
  return var_x;
  }
  );
  requireFn.d(exportsObj, "getYoutubeDashMPDInfo", function () {
  return var_w;
  }
  );
  requireFn.d(exportsObj, "send", function () {
  return var_E;
  }
  );
  requireFn.d(exportsObj, "get", function () {
  return var_A;
  }
  );
  requireFn.d(exportsObj, "_getSize", function () {
  return var_C;
  }
  );
  requireFn.d(exportsObj, "getSize", function () {
  return var_O;
  }
  );
  requireFn.d(exportsObj, "logDownloadError", function () {
  return var_I;
  }
  );
  requireFn.d(exportsObj, "beautifyFileSize", function () {
  return var_N;
  }
  );
  requireFn.d(exportsObj, "detectMediaTypeAndExt", function () {
  return var_D;
  }
  );
  requireFn.d(exportsObj, "getFileNameFromContentDisposition", function () {
  return var_R;
  }
  );
  requireFn.d(exportsObj, "getMediaType", function () {
  return var_L;
  }
  );
  requireFn.d(exportsObj, "getProp", function () {
  return var_B;
  }
  );
  requireFn.d(exportsObj, "call", function () {
  return var_U;
  }
  );
  requireFn.d(exportsObj, "defined", function () {
  return var_M;
  }
  );
  requireFn.d(exportsObj, "debounce", function () {
  return var_V;
  }
  );
  requireFn.d(exportsObj, "flatten", function () {
  return var_H;
  }
  );
  requireFn.d(exportsObj, "generateId", function () {
  return var_F;
  }
  );
  requireFn.d(exportsObj, "sendMessageDirect", function () {
  return var_z;
  }
  );
  requireFn.d(exportsObj, "sendMessage", function () {
  return var_G;
  }
  );
  requireFn.d(exportsObj, "sendRequest", function () {
  return var_W;
  }
  );
  requireFn.d(exportsObj, "isSpecialUrls", function () {
  return var_q;
  }
  );
  requireFn.d(exportsObj, "getFilenameFromTitleOfDownload", function () {
  return var_Y;
  }
  );
  requireFn.d(exportsObj, "getVideoId", function () {
  return var_K;
  }
  );
  requireFn.d(exportsObj, "isValidData", function () {
  return var_X;
  }
  );
  requireFn.d(exportsObj, "getBestFitResolution", function () {
  return var_$;
  }
  );
  requireFn.d(exportsObj, "createMP3Resources", function () {
  return var_J;
  }
  );
  requireFn.d(exportsObj, "MIN_IMAGE_TOTAL_PIXEL", function () {
  return num_Z;
  }
  );
  requireFn.d(exportsObj, "createImageInfo", function () {
  return ee;
  }
  );
  requireFn.d(exportsObj, "getVideoPoster", function () {
  return te;
  }
  );
  requireFn.d(exportsObj, "splitMediaByWidgetID", function () {
  return re;
  }
  );
  requireFn.d(exportsObj, "splitMediaByTitle", function () {
  return oe;
  }
  );
  requireFn.d(exportsObj, "i18n", function () {
  return ie;
  }
  );
  requireFn.d(exportsObj, "isSameMedia", function () {
  return ae;
  }
  );
  requireFn.d(exportsObj, "isTikTok", function () {
  return se;
  }
  );
  requireFn.d(exportsObj, "cleanSymbols", function () {
  return ce;
  }
  );
  requireFn.d(exportsObj, "fetchWithTimeout", function () {
  return le;
  }
  );
  requireFn.d(exportsObj, "sleep", function () {
  return ue;
  }
  );
  requireFn.d(exportsObj, "beDefinedOr", function () {
  return de;
  }
  );
  requireFn.d(exportsObj, "mergeArray", function () {
  return fe;
  }
  );
  requireFn.d(exportsObj, "Storage", function () {
  return pe;
  }
  );
  requireFn.d(exportsObj, "nextTick", function () {
  return he;
  }
  );
  requireFn.d(exportsObj, "jwtDecode", function () {
  return ge;
  }
  );
  requireFn.d(exportsObj, "formatDomain", function () {
  return me;
  }
  );
  requireFn.d(exportsObj, "paddZero", function () {
  return ve;
  }
  );
  requireFn.d(exportsObj, "transformVersionToNumber", function () {
  return ye;
  }
  );
  requireFn.d(exportsObj, "getDateNumber", function () {
  return ke;
  }
  );
  requireFn.d(exportsObj, "useDebounce", function () {
  return be;
  }
  );
  requireFn.d(exportsObj, "checkSameDate", function () {
  return _e;
  }
  );
  requireFn.d(exportsObj, "checkDateInRow", function () {
  return Te;
  }
  );
  requireFn.d(exportsObj, "checkIsDarkMode", function () {
  return Se;
  }
  );
  requireFn.d(exportsObj, "devLog", function () {
  return xe;
  }
  );
  requireFn.d(exportsObj, "parseLinkPhimmoiChillee", function () {
  return we;
  }
  );
  requireFn.d(exportsObj, "extractFirstJsonObject", function () {
  return Ee;
  }
  );
  requireFn.d(exportsObj, "youtubeAdsblockedRules", function () {
  return Ae;
  }
  );
  requireFn.d(exportsObj, "getPageLanguage", function () {
  return Ce;
  }
  );
  requireFn.d(exportsObj, "getCookies", function () {
  return Oe;
  }
  );
  requireFn.d(exportsObj, "getYTCookieAuth", function () {
  return Ie;
  }
  );
  requireFn.d(exportsObj, "fetchStatus", function () {
  return Re;
  }
  );
  var dep_media_constants = requireFn(1);
  var dep_feature_flags = requireFn(11);
  var dep_metrics_logger = requireFn(5);
  var dep_url_utils = requireFn(3);
  var dep_crypto_bundle = requireFn(16);
  var var_c = requireFn.n(dep_crypto_bundle);
  var dep_hls_parser = requireFn(24);
  function var_u() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var var_e;
  var var_t;
  var var_n = typeof Symbol == "function" ? Symbol : {
  };
  var var_r = var_n.iterator || "@@iterator";
  var var_o = var_n.toStringTag || "@@toStringTag";
  function var_i(param_n, param_r, param_o, param_i) {
  var var_c_2 = param_r && param_r.prototype instanceof var_s ?
  param_r : var_s;
  var var_l_1 = Object.create(var_c_2.prototype);
  var_d(var_l_1, "_invoke", function (param_n_1, param_r_1, param_o_1) {
  var var_i_1;
  var var_s_1;
  var var_c_3;
  var num_l = 0;
  var var_u_1 = param_o_1 || [];
  var flag_d = false;
  var obj_f = {
  p: 0,
  n: 0,
  v: var_e,
  a: var_p_2,
  f: var_p_2.bind(var_e, 4),
  d: function (param_t, param_n_2) {
  var_i_1 = param_t;
  var_s_1 = 0;
  var_c_3 = var_e;
  obj_f.n = param_n_2;
  return obj_a;
  }
  };
  function var_p_2(param_n_2, param_r_2) {
  var_s_1 = param_n_2;
  var_c_3 = param_r_2;
  var_t = 0;
  for (;
  !flag_d && num_l && !var_o_1 && var_t < var_u_1.length;
  var_t++) {
  var var_o_1;
  var var_i_2 = var_u_1[var_t];
  var var_p_3 = obj_f.p;
  var var_h_2 = var_i_2[2];
  if (param_n_2 > 3) {
  if (var_o_1 = var_h_2 === param_r_2) {
  var_c_3 = var_i_2[(var_s_1 = var_i_2[4]) ? 5 : (var_s_1 = 3, 3)];
  var_i_2[4] = var_i_2[5] = var_e;
  }
  }
  else if (var_i_2[0] <= var_p_3) {
  if (var_o_1 = param_n_2 < 2 && var_p_3 < var_i_2[1]) {
  var_s_1 = 0;
  obj_f.v = param_r_2;
  obj_f.n = var_i_2[1];
  }
  else if (var_p_3 < var_h_2 && (var_o_1 = param_n_2 < 3 || var_i_2[0] > param_r_2 ||
  param_r_2 > var_h_2)) {
  var_i_2[4] = param_n_2;
  var_i_2[5] = param_r_2;
  obj_f.n = var_h_2;
  var_s_1 = 0;
  }
  }
  }
  if (var_o_1 || param_n_2 > 1) {
  return obj_a;
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
  var_s_1 = param_u;
  var_c_3 = param_h;
  while ((var_t = var_s_1 < 2 ? var_e : var_c_3) || !flag_d) {
  if (!var_i_1) {
  if (var_s_1) {
  if (var_s_1 < 3) {
  if (var_s_1 > 1) {
  obj_f.n = -1;
  }
  var_p_2(var_s_1, var_c_3);
  }
  else {
  obj_f.n = var_c_3;
  }
  }
  else {
  obj_f.v = var_c_3;
  }
  }
  try {
  num_l = 2;
  if (var_i_1) {
  if (!var_s_1) {
  param_o_2 = "next";
  }
  if (var_t = var_i_1[param_o_2]) {
  if (!(var_t = var_t.call(var_i_1, var_c_3))) {
  throw TypeError("iterator result is not an object");
  }
  if (!var_t.done) {
  return var_t;
  }
  var_c_3 = var_t.value;
  if (var_s_1 < 2) {
  var_s_1 = 0;
  }
  }
  else {
  if (var_s_1 === 1 && (var_t = var_i_1.return)) {
  var_t.call(var_i_1);
  }
  if (var_s_1 < 2) {
  var_c_3 = TypeError("The iterator does not provide a '" + param_o_2 + "' method");
  var_s_1 = 1;
  }
  }
  var_i_1 = var_e;
  }
  else if ((var_t = (flag_d = obj_f.n < 0) ? var_c_3 : param_n_1.call(param_r_1,
  obj_f)) !== obj_a) {
  break;
  }
  }
  catch (var_t_1) {
  var_i_1 = var_e;
  var_s_1 = 1;
  var_c_3 = var_t_1;
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
  return var_l_1;
  }
  var obj_a = {
  };
  function var_s() {
  }
  function var_c_1() {
  }
  function var_l() {
  }
  var_t = Object.getPrototypeOf;
  var var_f_1 = [][var_r] ? var_t(var_t([][var_r]())) : (var_d(var_t = {
  }
  , var_r, function () {
  return this;
  }
  ), var_t);
  var var_p_1 = var_l.prototype = var_s.prototype = Object.create(var_f_1);
  function var_h_1(param_e_1) {
  if (Object.setPrototypeOf) {
  Object.setPrototypeOf(param_e_1, var_l);
  }
  else {
  param_e_1.__proto__ = var_l;
  var_d(param_e_1, var_o, "GeneratorFunction");
  }
  param_e_1.prototype = Object.create(var_p_1);
  return param_e_1;
  }
  var_c_1.prototype = var_l;
  var_d(var_p_1, "constructor", var_l);
  var_d(var_l, "constructor", var_c_1);
  var_c_1.displayName = "GeneratorFunction";
  var_d(var_l, var_o, "GeneratorFunction");
  var_d(var_p_1);
  var_d(var_p_1, var_o, "Generator");
  var_d(var_p_1, var_r, function () {
  return this;
  }
  );
  var_d(var_p_1, "toString", function () {
  return "[object Generator]";
  }
  );
  return (var_u = function () {
  return {
  w: var_i,
  m: var_h_1
  };
  }
  )();
  }
  function var_d(param_e_1, param_t, param_n, param_r) {
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
  (var_d = function (param_e_2, param_t_1, param_n_1, param_r_1) {
  function var_i(param_t_2, param_n_2) {
  var_d(param_e_2, param_t_2, function (param_e_3) {
  return this._invoke(param_t_2, param_n_2, param_e_3);
  }
  );
  }
  if (param_t_1) {
  if (var_o) {
  var_o(param_e_2, param_t_1, {
  value: param_n_1,
  enumerable: !param_r_1,
  configurable: !param_r_1,
  writable: !param_r_1
  }
  );
  }
  else {
  param_e_2[param_t_1] = param_n_1;
  }
  }
  else {
  var_i("next", 0);
  var_i("throw", 1);
  var_i("return", 2);
  }
  }
  )(param_e_1, param_t, param_n, param_r);
  }
  function var_f(param_e_1, param_t, param_n, param_r) {
  return new (param_n ||= Promise)(function (param_o, param_i) {
  function var_a(param_e_2) {
  try {
  var_c_1(param_r.next(param_e_2));
  }
  catch (var_e) {
  param_i(var_e);
  }
  }
  function var_s(param_e_2) {
  try {
  var_c_1(param_r.throw(param_e_2));
  }
  catch (var_e) {
  param_i(var_e);
  }
  }
  function var_c_1(param_e_2) {
  var var_t;
  if (param_e_2.done) {
  param_o(param_e_2.value);
  }
  else {
  (var_t = param_e_2.value, var_t instanceof param_n ? var_t :
  new param_n(function (param_e_3) {
  param_e_3(var_t);
  }
  )).then(var_a, var_s);
  }
  }
  var_c_1((param_r = param_r.apply(param_e_1, param_t || [])).next());
  }
  );
  }
  function var_p(param_e_1, param_t) {
  return (param_t = param_t || document).querySelector(param_e_1);
  }
  function var_h(param_e_1, param_t) {
  var var_n;
  return var_k(((var_n = (param_t = param_t || document).querySelectorAll) === null ||
  var_n === undefined ? undefined : var_n.call(param_t, param_e_1)) ?? []);
  }
  function var_g(param_e_1, param_t) {
  while (param_e_1 !== null && param_e_1.classList && !param_e_1.classList.contains(
  param_t)) {
  param_e_1 = param_e_1.parentNode;
  }
  return param_e_1;
  }
  function var_m(param_e_1, param_t) {
  for (var var_r = document.body.parentNode?.parentNode, var_o = param_e_1;
  var_o != null && var_o != var_r && !var_o.matches(param_t);
  ) {
  var_o = var_o.parentElement;
  }
  if (var_r == var_o) {
  return null;
  }
  else {
  return var_o;
  }
  }
  function var_v(param_e_1, param_t) {
  return param_e_1 && param_e_1[param_t] || "";
  }
  function var_y(param_e_1) {
  return param_e_1.replace(/<(?!\/?(?:b|em))[^>]+>/g, "");
  }
  function var_k(param_e_1) {
  return Array.prototype.slice.call(param_e_1);
  }
  function var_b(param_e_1) {
  return Array.from(new Set(param_e_1));
  }
  function var__(param_e_1) {
  for (var var_t = new Uint8Array(param_e_1), str_n = "", num_r = 0;
  num_r < var_t.byteLength;
  num_r++) {
  str_n += String.fromCharCode(var_t[num_r]);
  }
  return btoa(str_n);
  }
  function var_T(param_e_1) {
  for (var var_t = atob(param_e_1), var_n = new Uint8Array(var_t.length), num_r = 0;
  num_r < var_t.length;
  num_r++) {
  var_n[num_r] = var_t.charCodeAt(num_r);
  }
  return var_n.buffer;
  }
  function var_S(param_e_1, param_t) {
  var var_n;
  var var_r;
  var var_o;
  if (Array.isArray(param_e_1)) {
  for (var_n = 0;
  var_n < param_e_1.length;
  ++var_n) {
  if (var_S(param_e_1[var_n], param_t)) {
  return true;
  }
  }
  return false;
  }
  var_n = 0;
  var_r = (param_t = Array.isArray(param_t) ? param_t : [param_t]).length;
  for (;
  var_n < var_r;
  ++var_n) {
  if (typeof (var_o = param_t[var_n]) == "string" && param_e_1.indexOf(var_o) !== -1 ||
  var_o instanceof RegExp && param_e_1.match(var_o)) {
  return true;
  }
  }
  return false;
  }
  function var_x(param_e_1) {
  return var_f(this, undefined, undefined, var_u().m(function var_t() {
  return var_u().w(function (param_t) {
  while (true) {
  switch (param_t.n) {
  case 0:
  return param_t.a(2, new Promise(param_t_1 => {
  EE.emit("message.background.send", {
  type: "youtube_get_info",
  data: {
  method: "GET",
  url: param_e_1
  }
  }
  );
  EE.on("youtube_get_info_result", param_n => {
  if (param_n.data.url === param_e_1) {
  param_t_1(param_n.data);
  }
  }
  );
  }
  ));
  }
  }
  }
  , var_t);
  }
  ));
  }
  function var_w(param_e_1) {
  return var_f(this, undefined, undefined, var_u().m(function var_t() {
  return var_u().w(function (param_t) {
  while (true) {
  switch (param_t.n) {
  case 0:
  return param_t.a(2, new Promise(param_t_1 => {
  EE.emit("message.background.send", {
  type: "youtube_get_mpd_info",
  data: {
  url: param_e_1,
  method: "GET"
  }
  }
  );
  EE.on("youtube_set_mpd_info", param_e_2 => {
  if (param_e_2 && param_e_2.data?.success === "resolve") {
  param_t_1(param_e_2.data?.response);
  }
  }
  );
  }
  ));
  }
  }
  }
  , var_t);
  }
  ));
  }
  function var_E(param_t, param_n, param_o, param_i, param_a = false, param_s = "FormData") {
  function var_c_1(param_e_1) {
  return [/www\.facebook\.com\/video\/tahoe\/async\/\d+\/\?originalmediaid=\d.+&payloadtype=primary/,
  /vnecdn\.net/, /vnecdn\.net\/vnexpress\/video\/.+master.m3u8$/, /.smamuhh1metro/,
  /gpt[0-9]+\.phimmoi\.net/, /vtvgiaitri\.vn/, /hydra/, /www\.facebook\.com\/api\/graphql/,
  /www.facebook.com\/video\/tahoe\/async/, /www\.nhaccuatui\.com\/flash\/xml\?key3/,
  /content-aapm1\.uplynk\.com/, /master2-eu\.playerx\.stream/, /i\.instagram\.com\/api\/v1\/media/,
  /s\d+\.imacdn\.com/, /ok\d+-\d+\.vkuser\.net/, /vd\d+\.mycdn\.me/, /cdn\d*\.javhd\..+\/stream\/.+\.m3u8/,
  /search-api.artlist.io\/v2\/graphql/i, /embed[0-9]+\.streamc\.xyz/, /b-cdn\.net\/.+\.m3u8/,
  /https:\/\/sf16-sg.tiktokcdn.top\/ad-site-i18n-sg/, /googleapiscdn\.com/, /https:\/\/vkvideo\.ru/,
  /monfansubvn\./, /phncdn\.com\/hls\/.+\.m3u8/].some(param_t_1 => param_e_1.match(
  param_t_1));
  }
  if (param_e.IS_CONTENT_SCRIPT && !var_c_1(param_n)) {
  var var_l = "background_request." + var_F();
  EE.emit("message.background.send", {
  type: dep_media_constants.b.FETCH,
  data: {
  id: var_l,
  method: param_t,
  url: param_n,
  params: param_o,
  headers: param_i,
  includeCredentials: param_a,
  paramType: param_s
  }
  }
  );
  return new Promise((param_e_1, param_t_1) => {
  EE.on("background_request_result", param_n_1 => {
  var var_r = param_n_1.data;
  if (var_r.id === var_l) {
  if (var_r.success === "resolve") {
  param_e_1(var_r.response);
  }
  else {
  param_t_1(var_r.response);
  }
  }
  }
  );
  }
  );
  }
  var var_u_1 = null;
  var var_d_1 = new Headers();
  if (typeof param_i == "object") {
  for (var var_f_1 in param_i) {
  if (!location.href.includes("nhaccuatui.com/video/") || var_f_1 != "X-Savior-Replace-Cookie") {
  var_d_1.append(var_f_1, param_i[var_f_1]);
  }
  }
  }
  if (typeof param_o == "object") {
  if (param_s === "FormData") {
  var_u_1 = Object.keys(param_o).map(param_e_1 => param_e_1 + "=" + param_o[param_e_1]).join(
  "&");
  if (location.host.includes("facebook")) {
  var_u_1 = Object.keys(param_o).map(param_e_1 => `${param_e_1}=${encodeURIComponent(param_o[param_e_1])}`).join("&");
  }
  }
  else {
  var_u_1 = JSON.stringify(param_o);
  }
  }
  if (param_t === "POST") {
  if (param_s === "FormData") {
  var_d_1.append("Content-type", "application/x-www-form-urlencoded");
  }
  else {
  var_d_1.append("Content-type", "application/json");
  }
  }
  var obj_p = {
  method: param_t,
  headers: var_d_1,
  cache: "reload",
  body: var_u_1 || undefined
  };
  if (param_a) {
  obj_p.credentials = "include";
  }
  return fetch(param_n, obj_p).then(param_e_1 => param_e_1.text().then(param_t_1 => (
  {
  status: param_e_1.status,
  statusText: param_e_1.statusText,
  ok: param_e_1.ok,
  redirected: param_e_1.redirected,
  url: param_e_1.url,
  type: param_e_1.type,
  bodyUsed: param_e_1.bodyUsed,
  body: param_e_1.body,
  headers: param_e_1.headers,
  responseText: param_t_1
  }
  )));
  }
  function var_A(param_e_1, param_t) {
  return var_E("GET", param_e_1, {
  }
  , param_t);
  }
  function var_C(param_e_1) {
  var var_t;
  var var_n = new XMLHttpRequest();
  param_e_1 = function (param_e_2, param_t = "http") {
  if (param_e_2.slice(0, 2) === "//") {
  return param_t + ":" + param_e_2;
  }
  return param_e_2;
  }
  (param_e_1);
  return new Promise((param_r, param_o) => {
  function var_i(param_e_2) {
  if (param_e_2) {
  param_r(param_e_2);
  }
  else {
  param_o(param_e_2);
  }
  var_n.abort();
  clearTimeout(var_t);
  var_t = undefined;
  }
  var_n.open("GET", param_e_1);
  var_n.onreadystatechange = function () {
  if (!(this.readyState < 2)) {
  var var_e = null;
  try {
  var_e = +(this.getResponseHeader("Content-Length") || "");
  if (Number.isNaN(var_e)) {
  var_e = null;
  }
  }
  catch (var_e_1) {
  }
  if (var_e !== null || this.status === 200) {
  if (this.status !== 200) {
  var_e = null;
  }
  var_i(var_e);
  }
  }
  };
  var_n.send(null);
  var_t = setTimeout(var_i, 10000);
  }
  );
  }
  function var_O(param_e_1) {
  return new Promise(param_t => {
  var var_n = var_F();
  var var_r = param_e_1 + "_size";
  function var_o(param_o, param_i) {
  if (param_o == var_n) {
  if (param_i) {
  param_t(param_i);
  }
  else {
  var_C(param_e_1).then(param_e_2 => {
  param_t(param_e_2);
  EE.emit("media-provider.cache.put", var_F(), var_r, param_e_2);
  }
  ).catch(() => {
  var_I({
  url: JSON.stringify(param_e_1),
  referrer: document.referrer || location.host || JSON.stringify(param_e_1),
  error: "Error: Cannot get media size or media url is wrong"
  }
  );
  param_t(null);
  EE.emit("media-provider.cache.put", var_F(), var_r, null);
  }
  );
  }
  }
  }
  EE.emit("media-provider.cache.get", var_n, var_r);
  EE.on("media-provider.cache.hit", var_o);
  EE.on("media-provider.cache.miss", var_o);
  }
  );
  }
  function var_I(param_e_1) {
  dep_metrics_logger.a.log("recordCustomData", [{
  key: "savior_download_error",
  value: JSON.stringify(param_e_1)
  }
  ]);
  }
  function var_N(param_e_1, param_t = false) {
  var list_n = ["B", "KB", "MB", "GB", "TB", "PB"];
  var var_r = window.navigator.appVersion.indexOf("Win") !== -1 ?
  1024 : 1000;
  if (!param_e_1) {
  return "";
  }
  var var_o;
  var var_i = var_r;
  for (var_o = 0;
  var_o < list_n.length && param_e_1 >= var_i;
  ++var_o) {
  param_e_1 /= var_i;
  }
  var var_a = list_n[var_o];
  var var_s = Math.round(param_e_1 * 10) / 10;
  if (param_t && var_a && var_a.toLowerCase() === "kb") {
  var_s = var_s.toFixed(0);
  }
  return var_s + list_n[var_o];
  }
  function var_D(param_e_1) {
  var var_t;
  var var_n = arguments.length > 1 && arguments[1] !== undefined ?
  arguments[1] : "";
  var var_o = arguments.length > 2 && arguments[2] !== undefined ?
  arguments[2] : "";
  var list_i = ["application/x-mpegurl", "application/vnd.apple.mpegurl", "audio/x-mpegurl",
  "audio/mpegurl"];
  if (list_i.indexOf(var_n) !== -1) {
  param_e_1.type = "video";
  param_e_1.ext = "m3u8";
  return param_e_1;
  }
  var list_s = ["application/dash+xml"];
  if (list_s.indexOf(var_n) !== -1) {
  param_e_1.type = "video";
  param_e_1.ext = "mpd";
  return param_e_1;
  }
  var var_c_1 = var_L(var_n, param_e_1.exts || []);
  if (var_c_1 && dep_media_constants.k[var_c_1]) {
  param_e_1.type = var_c_1;
  var var_l = var_n.match(/mp4|webm/g);
  if ((!param_e_1.exts || param_e_1.exts.length === 0) && !!var_l &&
  !!var_l[0]) {
  param_e_1.ext = var_l[0];
  }
  }
  var var_u_1 = Object(dep_url_utils.d)(var_n);
  var var_d_1 = var_u_1.ext;
  param_e_1.ext ||= var_d_1;
  if (var_q(param_e_1.url)) {
  param_e_1.ext = "m3u8";
  param_e_1.exts = ["m3u8"];
  }
  if (var_n == "application/octet-stream") {
  var var_f_1 = ((var_t = var_R(var_o)) === null || var_t === undefined ?
  undefined : var_t.split(".")) || [];
  if (var_f_1 && var_f_1.length) {
  var var_p_1 = var_f_1.shift();
  var var_h_1 = var_f_1;
  if (var_p_1) {
  param_e_1.filename = var_p_1;
  }
  if (var_h_1 && var_h_1.length) {
  param_e_1.exts = var_h_1;
  var_d_1 = var_h_1[var_h_1.length - 1];
  param_e_1.ext = var_d_1;
  if (var_d_1 == "mp4") {
  param_e_1.type = "video";
  }
  }
  }
  }
  if (var_d_1 == "mp4") {
  param_e_1.ext = "mp4";
  }
  return param_e_1;
  }
  function var_R(param_e_1) {
  return param_e_1.match(/filename=["']([^"']+)["']/i)?.[1];
  }
  function var_L(param_e_1, param_t) {
  var var_n;
  for (var var_o in dep_media_constants.k) {
  var_n = dep_media_constants.k[var_o];
  if (param_e_1 && param_e_1.match(var_n.rgxp)) {
  return var_o;
  }
  if (Array.isArray(param_t) && var_P(param_t, var_n.extensions) ||
  var_n.extensions.indexOf(param_t) !== -1) {
  return var_o;
  }
  }
  return null;
  }
  function var_P(param_e_1, param_t) {
  for (var var_n = param_e_1.concat(param_t), obj_r = {
  }
  , num_o = 0;
  num_o < var_n.length;
  ++num_o) {
  var var_i = var_n[num_o];
  if (obj_r[var_i]) {
  return var_i;
  }
  obj_r[var_i] = true;
  }
  return null;
  }
  function var_B(param_e_1, param_t) {
  return function var_e(param_t_1, param_n) {
  var var_r = param_n.shift();
  if (!var_r || typeof param_t_1 != "object" && typeof param_t_1 != "function" ||
  param_t_1 === null) {
  return null;
  }
  else if (param_n.length === 0) {
  return param_t_1[var_r];
  }
  else {
  return var_e(param_t_1[var_r], param_n);
  }
  }
  (param_e_1, param_t.split("."));
  }
  function var_U(param_e_1, param_t) {
  if (param_e_1 && !(param_e_1.length <= 0)) {
  var var_n = [].slice.call(arguments, 2);
  for (var num_r = 0;
  num_r < param_e_1.length;
  num_r++) {
  param_e_1[num_r].apply(param_t, var_n);
  }
  }
  }
  function var_M(param_e_1) {
  return param_e_1 !== undefined;
  }
  function var_V(param_e_1, param_t, param_n) {
  var var_r;
  var flag_o = false;
  function var_i() {
  if (!flag_o) {
  var var_i_1 = this;
  var var_a = arguments;
  if (var_r) {
  clearTimeout(var_r);
  }
  else if (param_n) {
  param_e_1.apply(var_i_1, var_a);
  }
  var_r = setTimeout(var_s, param_t || 100);
  }
  function var_s() {
  if (!param_n) {
  param_e_1.apply(var_i_1, var_a);
  }
  var_r = undefined;
  }
  }
  var_i.destroy = () => {
  clearTimeout(var_r);
  flag_o = true;
  };
  return var_i;
  }
  function var_H(param_e_1, param_t) {
  var var_n;
  var var_r = Object.prototype.toString;
  var list_o = [];
  var var_i = param_t && param_e_1 || param_e_1.slice();
  if (!param_e_1.length) {
  return list_o;
  }
  var_n = var_i.pop();
  do {
  if (var_r.call(var_n) === "[object Array]") {
  var_i.push.apply(var_i, var_n.filter(param_e_2 => !!param_e_2));
  }
  else {
  list_o.push(var_n);
  }
  }
  while (var_i.length && (var_n = var_i.pop()) !== undefined);
  list_o.reverse();
  return list_o;
  }
  var num_j = 0;
  function var_F() {
  return num_j++;
  }
  function var_z(param_e_1) {
  return new Promise(param_t => {
  var var_n = param_e_1.type + "_" + var_F();
  param_e_1.id = var_n;
  chrome.runtime.sendMessage(param_e_1);
  EE.on("utils.send_message_result", param_e_2 => {
  if (param_e_2.id === var_n) {
  param_t(param_e_2.data);
  }
  }
  );
  }
  );
  }
  function var_G(param_e_1) {
  return new Promise(param_t => {
  var var_n = param_e_1.type + "_" + var_F();
  param_e_1.id = var_n;
  EE.emit("message.background.send", param_e_1);
  EE.on("utils.send_message_result", param_e_2 => {
  if (param_e_2.id === var_n) {
  param_t(param_e_2.data);
  }
  }
  );
  }
  );
  }
  function var_W(param_e_1) {
  return var_G({
  type: dep_media_constants.b.SEND_REQUEST,
  request: param_e_1
  }
  );
  }
  function var_q(param_e_1) {
  if (param_e_1 && typeof param_e_1 != "object" && !param_e_1.includes("data:")) {
  return [/(http|https):\/\/[\s\S]*(streamasia\.|\.bongngo\.|\.manga123\.net)[\s\S]*\/playlist\/|stream\.vltv\.xyz\/m3u8\/|apix\.gooqlevideo\.com\/player|khophim18\.net\/m3u8|iamplayer\.xyz\/stream.*\/Manifest/g,
  /hls\.mediacdn\.vn\/.+\/\S+\.mp4\.json/gi, /hls\.(tuoitre)\.vn\/\1\/\S+\.mp4\.json/gi,
  /vdrm\.vtvgiaitri\.vn\/stream/, /api(-v[0-9]*)*\.soundcloud\.com\/media\/soundcloud:tracks:[0-9]+/gi,
  /https:\/\/zingmp3\.vn\/api\/v2\/.+\?id=/, /^\/sequence\/(play|full)\/([a-z0-9]+)/i,
  /\/video\/(\d+)\/config(\?|$)/i, /key[0-9]=[0-9a-f]{32}/i, /^\/(api|get)_video_info/,
  /\.mp4.+?\.ts\?nimblesessionid=/, /meo\.saku\.net\/player/, /get\.gooqlevideo\.com\/player/,
  /streamsb\.biz\/playlist\/json\/[a-z0-9]+\/[a-z0-9]+/i, /discordapp\.com\/attachments\/\d+\/\d+\/[a-z0-9_\- ]+\.mp4/,
  /vidsugar\.com\/.+api\.json/i, /\-hls.*\.cuoiia\.top\/(cdn|media|hls)/, /vkvd\d*\.mycdn\.me/,
  /vk[a-z0-9\-]+\.vkuser\.net/i, /v\.douyu\.com\/api\/stream\/getStreamUrl/, /api\-.+\.(play|plhq)[\s\S]*\.(xyz|net|site|click|cfd|com)\/api\/.+(playiframe|getblob).+/,
  /ssplay\.net\/[a-z0-9]{2,4}\/(\d+\/(\d+)\/[a-z0-9]+\/[a-z0-9]+|[a-z\d]+\/[a-z\d]+)/i,
  /ssplay\.net\/[a-z0-9]{2,4}\/[a-z\d]+\.html/i, /\.helurl\.com\/uploads\/.+filename/i,
  /((smutr\.com)|(cdnka\.net))\/remote_control\.php?.+&file=.+\.(mp4|m3u8)/i, /\.video-delivery\.net/i,
  /\.asiaplayer\.site\/m3u8\/.+\/[a-z0-9]+\/master\.txt/i, /.+\.play[\s\S]*(xyz|net)\/(m3u8|hls)/i,
  /.+\.plhqtv[\s\S]*(xyz|net)\/(type1rdv3)/i, /v[0-9]*\.sanstream\.xyz\/video\/.*\/master.html\?.*/i,
  /stream\.shorthotp\.site\/video\/.*\/master.html/i, /cdn.+\/segment.+\/?token.+/i,
  /helvid\.([a-z0-9]+)\/hash.php\?.+/i, /southeastasia1-mediap.svc.ms\/.+\/videomanifest/i,
  /cdn\.animevui\.[a-z]+\/file/i, /\.xyz\/cdn\/hls\/.+\/master\.txt/i, /hls\.streamcdn\.[a-z]+\/m3u8\//i,
  /\.streamc\.xyz\/(.*hash\.php|(get|[a-z]{1,2})[a-z0-9]*\.php)\?hash=/i, /\.streamc\.xyz\/getPlaylist\.php+/i,
  /intl-api.iq.com.+\/cache\-video\.iq\.com\/dash\?.+/i, /api\.bilibili\.com\/.+\/wbi\/playurl/i,
  /cdn\/hls\/[a-z0-9\-_]+\/master\.txt/i, /stream12345\.online\/video\/[a-z0-9\-_]+\/master\.html/i,
  /content\.vdcdn\.top\/stream\/master\.php/i, /([a-z0-9\-_]+\.)?cliphub\.[a-z0-9\.\-]+\/videos/i,
  /https:\/\/hls\.fasthls\.top\/media\/.+/i, /eporner\.com\/xhr\/video\/.+\?hash\=.+/i,
  /phimlongtieng\.net\/pmm\/[a-z0-9]+\.html/i, /video\.twimg\.com\/.+video\/(\d+)(\/pu)?\/pl\/[a-z0-9\-_]+\.m3u8/i,
  /syntheticvideo\..+\/sources\?videoId/i, /goplayer\.xyz\/video\/[a-z0-9\-_]+\/(master|playlist)\./i,
  /m3u8\.cloustream\.net/i, /x\.mimix\.cc\/watch\/.+/i, /toptop\.fasthls\.top\/hls\/.+/i,
  /play\.cloudfrela\.com\/stream\/.+/i, /m3u8\-play\-\d+\.(playstreamz\.site|playsex3x\.xyz)\/m3u8\/.+/i,
  /animixplay\-n.+\/count-data\.js\?.+/i, /hlsmovie\.com\/video\/.+\/master\.html.+/i,
  /pl\.vlogphim\.net\/m3u8.+/i, /graph\.nhaccuatui\.com\/api\/v1\/playlist/i, /graph\.nhaccuatui\.com\/api\/v1\/song/i,
  /graph\.nhaccuatui\.com\/api\/v2\/search\/artist\/detail/i, /hlstream\.com\/video\/.+\/master\.html.+/i,
  /macky\.xtremestream\.xyz\/player\/index\.php\?data\=.+/i, /helvid\.[a-z0-9]+\/play\/token_hash\?.+/i,
  /hlstream\.com\/video\/.+\/master\.html.+/i, /nhaccuatui\.com\/api(\/v\d+)?(\/playlist\/detail|\/song\/detail|\/video\/detail|\/app\/home\/index|\/song\/feed|\/radio\/musiclist|\/search\/artist\/song)/i,
  /apis\.naver\.com\/.*\/vod\/play.*\?key\=.*/i, /qooglevideo\.com\/manifest-s1\/02938\.vl/,
  /pl-ali\.youku\.com\/playlist\/m3u8/, /hs-vod2\.nimo\.tv/, /vevocloud\.com\/play\/index/,
  /scontent-sin([\d\-]+)\.xx\.fbcdn\.net/, /scontent\.fhan.*\.fbcdn\.net/, /scontent-sin([\d\-]+)-xx\.fbcdn\.cloud\/.+\.m3u8\/stream-plain\?/,
  /vod-adaptive-ak\.vimeocdn\.com\/.+?\/playlist.json/, /^https:\/\/abyssplayer\.com\/[\w-]+$/i,
  /online\.tiengtrung\.vn\/api\/play\.php/i, /cdn\.donghua3d/, /audinifer.*\/stream\/.+\.m3u8/i,
  /tiktok\.phimhdc\.com\/edgeplayer\.html/, /data-vod-node\.onflixcdn\.com\/\?.*url=/i,
  /chophim\.\w+\/static\/image\/\w+/].some(param_t => param_t.test(param_e_1));
  }
  }
  function var_Y(param_e_1) {
  var var_t = param_e_1.title || param_e_1.filename || document.title;
  if (param_e_1.type == "subtitles") {
  var_t = var_t + " (" + (param_e_1.i18n_quality || param_e_1.quality) + ")";
  }
  var var_n = "." + param_e_1.ext;
  return var_t = (var_t = (var_t == null ? undefined : var_t.replace(/\s+/g, " ").replace(
  /[/\\:*?"<>|\u200c\u200d]/g, "-")) + var_n).match(/[*~]/gi) ?
  "_" + var_t.replace(/[*~]/gi, ".") : var_t;
  }
  function var_K(param_e_1) {
  if (!param_e_1) {
  return null;
  }
  var var_n;
  for (var list_r = [/^https?:\/\/(?:www\.)?youtube(?:-nocookie)?(?:\.googleapis)?\.com\/(?:(?:v)|(?:embed)|(?:e))\/(?!videoseries)([\w\-]+)/i,
  /https?:\/\/(?:www\.)?youtu\.be\/([^#&?]+)/i, /https?:\/\/(?:www\.)?youtube\.com\/.*(?:\?|&)v=([^#&?]+)/i,
  /https?:\/\/(?:www\.)?youtube\.com\/shorts\/(.*)$/, /^https?:\/\/music\.youtube\.com\/watch\?v=([^#&?]+)/,
  /^https?:\/\/m\.youtube\.com\/watch\?v=([^#&?]+)/, /youtube.*.com\/embed\/([a-z0-9\-_]+)/i,
  /^https?:\/\/(?:www\.)?youtube\.com\/live\/([^#&?]+)/], num_o = 0;
  num_o < list_r.length;
  ++num_o) {
  if (var_n = param_e_1.match(list_r[num_o])) {
  return var_n[1];
  }
  }
  if (param_e_1.match(/youtube\.com\/embed\/videoseries/i) &&
  document.querySelector("link[rel=\"canonical\"]")?.href) {
  return var_K(param_e_1);
  }
  return null;
  }
  function var_X(param_e_1) {
  if (dep_feature_flags.a.M3U8 && Object(dep_media_constants.B)(param_e_1.ext)) {
  return true;
  }
  var var_t = param_e_1.type;
  if (!var_t) {
  return false;
  }
  var var_n = dep_media_constants.k[var_t];
  var var_i = var_n && var_n.extensions;
  return var_n && var_i.indexOf(param_e_1.ext) !== -1;
  }
  function var_$(param_e_1) {
  for (var num_t = 0, var_n = dep_media_constants.q.length;
  num_t < var_n && dep_media_constants.q[num_t] >= param_e_1;
  ) {
  num_t++;
  }
  return dep_media_constants.q[num_t - 1];
  }
  function var_J(param_e_1) {
  var var_t = param_e_1.filter(function (param_e_2) {
  return param_e_2.type === "video" && (!!dep_feature_flags.a.DOWNLOAD.M3U8_AUDIO ||
  !["m3u", "m3u8"].includes(param_e_2.ext)) && (typeof param_e_2.url == "object" &&
  param_e_2.url.audioUrl || typeof param_e_2.url == "string");
  }
  );
  var list_n = [{
  bitrate: "128kbps",
  name: "Medium",
  qualityValue: 100,
  itag: "140"
  }
  , {
  bitrate: "192kbps",
  name: "High",
  qualityValue: 200,
  itag: "22"
  }
  , {
  bitrate: "192kbps",
  name: "High",
  qualityValue: 200,
  itag: "37"
  }
  , {
  bitrate: "192kbps",
  name: "High",
  qualityValue: 200,
  itag: "38"
  }
  , {
  bitrate: "192kbps",
  name: "High",
  qualityValue: 200,
  itag: "45"
  }
  , {
  bitrate: "192kbps",
  name: "High",
  qualityValue: 200,
  itag: "46"
  }
  , {
  bitrate: "192kbps",
  name: "High",
  qualityValue: 200,
  itag: "84"
  }
  , {
  bitrate: "192kbps",
  name: "High",
  qualityValue: 200,
  itag: "85"
  }
  , {
  bitrate: "192kbps",
  name: "High",
  qualityValue: 200,
  itag: "101"
  }
  , {
  bitrate: "192kbps",
  name: "High",
  qualityValue: 200,
  itag: "102"
  }
  , {
  bitrate: "192kbps",
  name: "High",
  qualityValue: 200,
  itag: "172"
  }
  ];
  var var_r = location.host === "www.youtube.com" ? list_n :
  [list_n[0]];
  var list_i = [];
  if (var_t.length) {
  oe(var_t).forEach(function (param_e_2) {
  var var_t_1 = param_e_2.media;
  var var_o = var_r.map(function (param_e_3) {
  var var_r_1 = function (param_e_4, param_t) {
  param_t = param_t.toLowerCase();
  var list_n_1 = [...param_e_4];
  var var_r_2 = param_e_4.filter(function (param_e_5) {
  return param_e_5.ext === "mp4";
  }
  );
  if (var_r_2.length) {
  list_n_1 = var_r_2;
  }
  var var_o_2 = list_n_1.filter(function (param_e_5) {
  return param_e_5.quality && param_e_5.quality.toLowerCase() === "full hd";
  }
  );
  var var_i_1 = list_n_1.filter(function (param_e_5) {
  return param_e_5.quality && param_e_5.quality.toLowerCase() === "hd";
  }
  );
  var var_a_1 = list_n_1.filter(function (param_e_5) {
  return param_e_5.quality && ["normal", "medium", "standard"].includes(param_e_5.quality.toLowerCase(
  ));
  }
  );
  switch (param_t) {
  case "high":
  if (var_o_2.length) {
  list_n_1 = var_o_2;
  }
  else if (var_i_1.length) {
  list_n_1 = var_i_1;
  }
  else if (var_a_1.length) {
  list_n_1 = var_a_1;
  }
  break;
  case "medium":
  default:
  if (var_a_1.length) {
  list_n_1 = var_a_1;
  }
  else if (var_i_1.length) {
  list_n_1 = var_i_1;
  }
  else if (var_o_2.length) {
  list_n_1 = var_o_2;
  }
  }
  var var_s = list_n_1.filter(function (param_e_5) {
  return typeof param_e_5.url == "object" && param_e_5.url.audioUrl;
  }
  );
  if (var_s.length) {
  list_n_1 = var_s;
  }
  return list_n_1[0];
  }
  (var_t_1, param_e_3.name);
  var var_o_1 = Object.assign({
  }
  , var_r_1);
  var_o_1.useConverter = true;
  if (typeof var_o_1.url == "object") {
  var_o_1.url = var_o_1.url.audioUrl;
  delete var_o_1.useConverter;
  }
  if (["m3u8", "m3u"].includes(var_o_1.ext)) {
  var_o_1._hls = true;
  delete var_o_1._isDashMPD;
  }
  var_o_1.ext = "mp3";
  var_o_1.soundOnly = true;
  var_o_1.quality = param_e_3.name;
  var_o_1.resolution = param_e_3.bitrate;
  var_o_1.type = "audio";
  var_o_1.sortValues = {
  qualityValue: param_e_3.qualityValue
  };
  if (location.host === "www.youtube.com") {
  var var_i = new URLSearchParams(var_o_1.url).get("itag");
  var var_a = list_n.find(param_e_4 => param_e_4.itag === var_i) ||
  list_n[0];
  if (var_o_1.resolution !== var_a.bitrate && var_o_1.quality !== var_a.name) {
  var_o_1.resolution = "0kbps";
  }
  }
  return var_o_1;
  }
  );
  var_o = var_o.reduce((param_e_3, param_t) => {
  if (!param_e_3.some(param_e_4 => parseInt(param_e_4.resolution) >= parseInt(param_t.resolution))) {
  (param_e_3 = []).push(param_t);
  }
  return param_e_3;
  }
  , []);
  list_i = list_i.concat(var_o);
  }
  );
  return list_i;
  }
  else {
  return list_i;
  }
  }
  var var_Q;
  var num_Z = 20000;
  function ee(param_e_1) {
  return var_f(this, undefined, undefined, var_u().m(function var_t() {
  var var_n;
  var var_r;
  var var_o;
  var var_i;
  var var_a;
  var var_s;
  var var_c_1;
  var var_l;
  var var_d_1;
  var var_f_1;
  return var_u().w(function (param_t) {
  while (true) {
  switch (param_t.p = param_t.n) {
  case 0:
  param_t.p = 0;
  param_t.n = 1;
  return fetch(param_e_1);
  case 1:
  if ((var_n = param_t.v).ok) {
  param_t.n = 2;
  break;
  }
  return param_t.a(2, null);
  case 2:
  var_r = var_n.headers;
  var_o = var_r.get("content-type");
  param_t.n = 3;
  return var_n.blob();
  case 3:
  var_i = param_t.v;
  param_t.n = 4;
  return createImageBitmap(var_i);
  case 4:
  var_a = param_t.v;
  if (!((var_s = var_a.width * var_a.height) < num_Z)) {
  param_t.n = 5;
  break;
  }
  var_a.close();
  return param_t.a(2, null);
  case 5:
  var_c_1 = new URL(param_e_1);
  var_l = var_c_1.pathname;
  var_d_1 = var_l.split(".").pop();
  var_f_1 = {
  url: param_e_1,
  width: var_a.width,
  height: var_a.height,
  totalPixel: var_s,
  sizeKiloBytes: Number((var_i.size / 1000).toFixed(1)),
  extension: (var_o == null ? undefined : var_o.split("/").pop()) ||
  var_d_1 || ""
  };
  var_a.close();
  return param_t.a(2, var_f_1);
  case 6:
  param_t.p = 6;
  param_t.v;
  return param_t.a(2, null);
  }
  }
  }
  , var_t, null, [[0, 6]]);
  }
  ));
  }
  function te(param_e_1) {
  if (!param_e_1 || !(param_e_1 instanceof HTMLVideoElement)) {
  return null;
  }
  var var_t = param_e_1.poster || param_e_1.getAttribute("poster");
  if (var_t && var_t.trim() !== "") {
  return var_t;
  }
  else {
  return null;
  }
  }
  function ne(param_e_1) {
  if (!param_e_1) {
  return null;
  }
  var var_t = param_e_1.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([^&\n?#]+)/);
  if (var_t) {
  return `https://img.youtube.com/vi/${var_t[1]}/maxresdefault.jpg`;
  }
  else {
  return null;
  }
  }
  function re(param_e_1) {
  var list_t = [];
  param_e_1.forEach(param_e_2 => {
  var var_n = param_e_2.type == "video";
  param_e_2.title ||= param_e_2.filename;
  var var_r = param_e_2.widgetID;
  var var_o = param_e_2.title || param_e_2.filename;
  var var_i = list_t.find(param_e_3 => param_e_3.widgetID === var_r);
  if (var_i) {
  if (var_n) {
  if (param_e_2.thumbnail) {
  var_i.videoThumbnail = param_e_2.thumbnail;
  }
  else {
  var_i.videoThumbnail = ne(param_e_2.referrer || "");
  }
  var_i.hasVideo = true;
  }
  var_i.media.push(param_e_2);
  }
  else {
  list_t.push({
  media: [param_e_2],
  title: var_o,
  hasVideo: !!var_n,
  videoThumbnail: var_n ? param_e_2.thumbnail || ne(param_e_2.referrer ||
  "") : null,
  widgetID: param_e_2.widgetID
  }
  );
  }
  }
  );
  return list_t;
  }
  function oe(param_e_1) {
  var list_t = [];
  param_e_1.forEach(param_e_2 => {
  var var_n = param_e_2.type == "video";
  param_e_2.title ||= param_e_2.filename;
  var var_r = param_e_2.title || param_e_2.filename;
  var var_o = list_t.find(param_e_3 => param_e_3.title === var_r ||
  param_e_3.filename === var_r);
  if (var_o) {
  if (var_n) {
  if (param_e_2.thumbnail) {
  var_o.videoThumbnail = param_e_2.thumbnail;
  }
  else {
  var_o.videoThumbnail = ne(param_e_2.referrer || "");
  }
  var_o.hasVideo = true;
  }
  var_o.media.push(param_e_2);
  }
  else {
  list_t.push({
  media: [param_e_2],
  title: var_r,
  hasVideo: !!var_n,
  videoThumbnail: var_n ? param_e_2.thumbnail || ne(param_e_2.referrer ||
  "") : null
  }
  );
  }
  }
  );
  return list_t;
  }
  try {
  var_Q = chrome.i18n.getMessage || (() => "");
  }
  catch (var_e) {
  var_Q = () => "";
  }
  var ie = var_Q;
  var ae = (param_e_1, param_t) => param_e_1.type === param_t.type &&
  param_e_1.id === param_t.id && (typeof param_e_1.url != "string" &&
  typeof param_t.url != "string" ? param_e_1.url.videoUrl == param_t.url.videoUrl :
  param_e_1.url === param_t.url);
  var se = param_t => {
  return (param_t = param_t ?? param_e.tab_url ?? window.location.href).match(/^https:\/\/(www\.)?tiktok\.com/);
  };
  var ce = param_e_1 => param_e_1 ? param_e_1.replaceAll(/[^aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ0-9\s\,\.\<\>\/\?\;\:\'\"\!\@\#\$\%\^\&\*\(\)\-\_\+\=\\\|]/g,
  "").replaceAll(/\s+/g, " ") : param_e_1;
  var le = (param_e_1, param_t, param_n) => {
  var var_r = param_t.timeout;
  delete param_t.timeout;
  if (var_r) {
  param_n = param_n ?? new AbortController();
  setTimeout(() => param_n.abort(), var_r);
  return fetch(param_e_1, Object.assign({
  signal: param_n.signal
  }
  , param_t));
  }
  else {
  return fetch(param_e_1, param_t);
  }
  };
  var ue = param_e_1 => new Promise(param_t => setTimeout(param_t, param_e_1));
  function de(param_e_1) {
  return function (param_t = param_e_1) {
  return param_t;
  };
  }
  function fe(param_e_1, param_t, param_n) {
  param_t.forEach(param_t_1 => {
  if (typeof param_n == "function" && param_n(param_t_1, param_e_1) ||
  param_e_1.includes(param_t_1)) {
  param_e_1.push(param_t_1);
  }
  }
  );
  return param_e_1;
  }
  class pe {
  static get(param_e_1) {
  return new Promise(param_t => {
  chrome.storage.local.get(param_e_1, param_e_2 => {
  param_t(param_e_2);
  }
  );
  }
  );
  }
  }
  function he(param_e_1) {
  if (typeof requestAnimationFrame == "function") {
  requestAnimationFrame(param_e_1);
  }
  else {
  setTimeout(param_e_1, 20);
  }
  }
  function ge(param_e_1) {
  var var_t = param_e_1.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
  var var_n = decodeURIComponent(window.atob(var_t).split("").map(function (param_e_2) {
  return "%" + ("00" + param_e_2.charCodeAt(0).toString(16)).slice(-2);
  }
  ).join(""));
  return JSON.parse(var_n);
  }
  function me(param_e_1) {
  return param_e_1.trim().replace("www.", "").replace(/^https?:\/\//i, "");
  }
  function ve(param_e_1) {
  try {
  if (param_e_1 <= 9) {
  return "0" + param_e_1;
  }
  else {
  return "" + param_e_1;
  }
  }
  catch (var_e) {
  return "00";
  }
  }
  function ye(param_e_1) {
  var var_t = param_e_1.split(".");
  return Number(var_t.map(param_e_2 => ve(Number(param_e_2))).join(""));
  }
  function ke(param_e_1) {
  var var_t = param_e_1.getFullYear();
  var var_n = param_e_1.getMonth();
  var var_r = param_e_1.getDate();
  return parseInt(`${var_t}${ve(var_n)}${ve(var_r)}`);
  }
  function be(param_e_1) {
  var var_t;
  var var_n = arguments.length > 1 && arguments[1] !== undefined ?
  arguments[1] : 1000;
  return function (param_r) {
  clearTimeout(var_t);
  var_t = setTimeout(() => {
  param_e_1(param_r);
  }
  , var_n);
  };
  }
  function _e(param_e_1) {
  var var_t = new Date(param_e_1);
  var var_n = new Date(Date.now());
  return var_t.getDate() == var_n.getDate() && var_t.getMonth() == var_n.getMonth(
  ) && var_t.getFullYear() == var_n.getFullYear();
  }
  function Te(param_e_1) {
  var var_t = _e(param_e_1);
  var var_n = (new Date(Date.now()).setHours(0, 0, 0, 0) - new Date(param_e_1).setHours(
  0, 0, 0, 0)) / 86400 / 1000 == 1;
  return !var_t && var_n;
  }
  function Se() {
  var var_e;
  return !!((var_e = window?.matchMedia) === null || var_e === undefined ?
  undefined : var_e.call(window, "(prefers-color-scheme: dark)"))?.matches;
  }
  function xe() {
  0;
  }
  function we(param_e_1) {
  var var_t = var_c.a.enc.Hex.parse(param_e_1).toString(var_c.a.enc.Base64);
  return var_c.a.AES.decrypt(var_t, "sHqvxUbI3HRHqHNdluQ5thFw5e8DCglJ").toString(
  var_c.a.enc.Utf8);
  }
  function Ee(param_e_1) {
  var var_t = param_e_1.indexOf("{");
  if (var_t === -1) {
  return null;
  }
  var num_n = 0;
  for (var var_r = var_t;
  var_r < param_e_1.length;
  var_r++) {
  if (param_e_1[var_r] === "{") {
  num_n++;
  }
  if (param_e_1[var_r] === "}") {
  num_n--;
  }
  if (num_n === 0) {
  var var_o = param_e_1.slice(var_t, var_r + 1);
  try {
  return JSON.parse(var_o);
  }
  catch (var_e) {
  return null;
  }
  }
  }
  }
  var Ae = [{
  regex: /g\.doubleclick\.net/i,
  type: "xmlhttprequest",
  initiators: ["youtube.com", "music.youtube.com"]
  }
  , {
  regex: /youtube\.com\/pagead\//i,
  type: "xmlhttprequest",
  initiators: ["youtube.com", "music.youtube.com"]
  }
  , {
  regex: /google\..+\/pagead\/lvz\?/i,
  type: "image",
  initiators: ["youtube.com", "music.youtube.com"]
  }
  ];
  var Ce = () => new Promise(param_e_1 => {
  chrome.i18n.detectLanguage(document.body.innerText.substring(0, 1000), function (
  param_t) {
  if (param_t.isReliable) {
  param_e_1(param_t.languages[0]);
  }
  param_e_1(null);
  }
  );
  }
  );
  var Oe = param_e_1 => param_e_1.split(";").map(param_e_2 => param_e_2.trim().split(
  /=(.+)/)).reduce((param_e_2, param_t) => {
  param_e_2[param_t[0]] = param_t[1];
  return param_e_2;
  }
  , {
  }
  );
  function Ie() {
  return var_f(this, undefined, undefined, var_u().m(function var_e() {
  var var_t;
  var var_n;
  var var_o;
  var var_i;
  var var_a;
  return var_u().w(function (param_e_1) {
  while (true) {
  switch (param_e_1.n) {
  case 0:
  var_t = ["SAPISID", "__Secure-3PAPISID", "__Secure-1PAPISID"];
  var_n = ["SAPISIDHASH", "SAPISID1PHASH", "SAPISID3PHASH"];
  param_e_1.n = 1;
  return var_G({
  type: dep_media_constants.b.GET_COOKIES,
  cookies: var_t
  }
  );
  case 1:
  var_o = param_e_1.v;
  var_i = dep_hls_parser.a.ssId;
  if (!var_o) {
  param_e_1.n = 2;
  break;
  }
  var_a = var_n.map((param_e_2, param_n) => Ne(param_e_2, var_o[var_t[param_n]],
  "https://www.youtube.com", {
  u: var_i
  }
  ));
  return param_e_1.a(2, Promise.all(var_a).then(param_e_2 => param_e_2.join(" ")));
  case 2:
  return param_e_1.a(2, null);
  }
  }
  }
  , var_e);
  }
  ));
  }
  function Ne(param_e_1, param_t, param_n, param_r) {
  return var_f(this, undefined, undefined, var_u().m(function var_o() {
  var var_i;
  var var_a;
  var var_s;
  var var_c_1;
  return var_u().w(function (param_o) {
  while (true) {
  switch (param_o.n) {
  case 0:
  var_i = Math.round(Date.now() / 1000);
  var_a = [];
  if (param_r) {
  var_a.push(Object.values(param_r).join(":"));
  }
  var_a.push(var_i, param_t, param_n);
  param_o.n = 1;
  return De(var_a.join(" "));
  case 1:
  var_s = param_o.v;
  var_c_1 = [var_i, var_s];
  if (param_r) {
  var_c_1.push(...Object.keys(param_r));
  }
  return param_o.a(2, `${param_e_1} ${var_c_1.join("_")}`);
  }
  }
  }
  , var_o);
  }
  ));
  }
  function De(param_e_1) {
  return var_f(this, undefined, undefined, var_u().m(function var_t() {
  var var_n;
  var var_r;
  var var_o;
  var var_i;
  var var_a;
  return var_u().w(function (param_t) {
  while (true) {
  switch (param_t.n) {
  case 0:
  var_n = new TextEncoder();
  var_r = var_n.encode(param_e_1);
  param_t.n = 1;
  return crypto.subtle.digest("SHA-1", var_r);
  case 1:
  var_o = param_t.v;
  var_i = Array.from(new Uint8Array(var_o));
  var_a = var_i.map(param_e_2 => param_e_2.toString(16).padStart(2, "0")).join("");
  return param_t.a(2, var_a);
  }
  }
  }
  , var_t);
  }
  ));
  }
  function Re(param_e_1) {
  return var_f(this, undefined, undefined, var_u().m(function var_t() {
  var var_n;
  return var_u().w(function (param_t) {
  while (true) {
  switch (param_t.n) {
  case 0:
  param_t.n = 1;
  return var_G({
  type: dep_media_constants.b.CHECK_URL,
  data: {
  url: param_e_1
  }
  }
  );
  case 1:
  if (var_n = param_t.v) {
  param_t.n = 2;
  break;
  }
  return param_t.a(2, null);
  case 2:
  return param_t.a(2, var_n.status);
  }
  }
  }
  , var_t);
  }
  ));
  }
  }
  ).call(this, requireFn(13));
  };
