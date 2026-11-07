(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) {
      return t[r].exports;
    }
    var o = t[r] = {
      i: r,
      l: false,
      exports: {}
    };
    e[r].call(o.exports, o, o.exports, n);
    o.l = true;
    return o.exports;
  }
  n.m = e;
  n.c = t;
  n.d = function (e, t, r) {
    if (!n.o(e, t)) {
      Object.defineProperty(e, t, {
        enumerable: true,
        get: r
      });
    }
  };
  n.r = function (e) {
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      });
    }
    Object.defineProperty(e, "__esModule", {
      value: true
    });
  };
  n.t = function (e, t) {
    if (1 & t) {
      e = n(e);
    }
    if (8 & t) {
      return e;
    }
    if (4 & t && typeof e === "object" && e && e.__esModule) {
      return e;
    }
    var r = Object.create(null);
    n.r(r);
    Object.defineProperty(r, "default", {
      enumerable: true,
      value: e
    });
    if (2 & t && typeof e !== "string") {
      for (var o in e) {
        n.d(r, o, function (t) {
          return e[t];
        }.bind(null, o));
      }
    }
    return r;
  };
  n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    n.d(t, "a", t);
    return t;
  };
  n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  };
  n.p = "./";
  n(n.s = 736);
})({
  0: function (moduleObj, exportsObj, requireFn) {
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
  var var_n = param_e_1.ext ? ("." + param_e_1.ext) : "";
  var_t = var_t == null ? undefined : var_t.replace(/\s+/g, " ").replace(/[/\\:*?"<>|\u200c\u200d]/g, "-");
  if (var_n && var_t && !var_t.toLowerCase().endsWith(var_n.toLowerCase())) {
    var_t = var_t + var_n;
  }
  return var_t && var_t.match(/[*~]/gi) ? "_" + var_t.replace(/[*~]/gi, ".") : var_t;
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
  },
  1: function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.d(exportsObj, "k", function () {
  return obj_r;
  }
  );
  requireFn.d(exportsObj, "r", function () {
  return obj_o;
  }
  );
  requireFn.d(exportsObj, "s", function () {
  return list_i;
  }
  );
  requireFn.d(exportsObj, "B", function () {
  return var_a;
  }
  );
  requireFn.d(exportsObj, "q", function () {
  return list_s;
  }
  );
  requireFn.d(exportsObj, "l", function () {
  return list_c;
  }
  );
  requireFn.d(exportsObj, "p", function () {
  return list_l;
  }
  );
  requireFn.d(exportsObj, "h", function () {
  return list_u;
  }
  );
  requireFn.d(exportsObj, "o", function () {
  return str_d;
  }
  );
  requireFn.d(exportsObj, "c", function () {
  return str_f;
  }
  );
  requireFn.d(exportsObj, "w", function () {
  return str_p;
  }
  );
  requireFn.d(exportsObj, "n", function () {
  return str_h;
  }
  );
  requireFn.d(exportsObj, "u", function () {
  return str_g;
  }
  );
  requireFn.d(exportsObj, "y", function () {
  return str_m;
  }
  );
  requireFn.d(exportsObj, "e", function () {
  return str_v;
  }
  );
  requireFn.d(exportsObj, "g", function () {
  return num_y;
  }
  );
  requireFn.d(exportsObj, "f", function () {
  return num_k;
  }
  );
  requireFn.d(exportsObj, "z", function () {
  return str_b;
  }
  );
  requireFn.d(exportsObj, "i", function () {
  return str__;
  }
  );
  requireFn.d(exportsObj, "a", function () {
  return str_T;
  }
  );
  requireFn.d(exportsObj, "A", function () {
  return str_S;
  }
  );
  requireFn.d(exportsObj, "x", function () {
  return num_x;
  }
  );
  requireFn.d(exportsObj, "t", function () {
  return str_w;
  }
  );
  requireFn.d(exportsObj, "v", function () {
  return str_E;
  }
  );
  requireFn.d(exportsObj, "b", function () {
  return var_A;
  }
  );
  requireFn.d(exportsObj, "j", function () {
  return list_C;
  }
  );
  requireFn.d(exportsObj, "m", function () {
  return list_O;
  }
  );
  requireFn.d(exportsObj, "d", function () {
  return list_I;
  }
  );
  var obj_r = {
  audio: {
  title: "Audio",
  icon: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.34701 16.1464C3.91819 16.7176 4.60481 17.0032 5.40688 17.0032C6.20895 17.0032 6.89558 16.7176 7.46676 16.1464C8.03792 15.5752 8.3235 14.8886 8.3235 14.0865V5.72114H16.2603V11.7404C16.0263 11.5502 15.7699 11.4076 15.491 11.3125C15.2122 11.2174 14.913 11.1699 14.5936 11.1699C13.7915 11.1699 13.1049 11.4555 12.5337 12.0267C11.9625 12.5978 11.6769 13.2845 11.6769 14.0865C11.6769 14.8886 11.9625 15.5752 12.5337 16.1464C13.1049 16.7176 13.7915 17.0032 14.5936 17.0032C15.3957 17.0032 16.0823 16.7176 16.6535 16.1464C17.2246 15.5752 17.5102 14.8886 17.5102 14.0865V5.72114V2.99683H16.6768H16.2603H7.07355V11.7404C6.83957 11.5502 6.58316 11.4076 6.30432 11.3125C6.02547 11.2174 5.72632 11.1699 5.40688 11.1699C4.60481 11.1699 3.91819 11.4555 3.34701 12.0267C2.77582 12.5978 2.49023 13.2845 2.49023 14.0865C2.49023 14.8886 2.77582 15.5752 3.34701 16.1464Z\" fill=\"currentColor\"/>\n</svg>\n",
  rgxp: /audio/i,
  extensions: ["mp3", "flac", "m4a", "wma", "ogg", "wav", "aif", "mid", "opus"],
  extensions_weight: ["mp3", "flac", "m4a", "wma", "ogg", "wav", "aif", "mid", "opus"],
  ctype2extension: {
  midi: "mid",
  mp4: "m4a",
  m4a: "m4a",
  mpeg: "mp3",
  mpeg3: "mp3",
  wav: "wav",
  aiff: "aif",
  opus: "opus"
  }
  }
  ,
  video: {
  title: "Video",
  icon: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M3.79009 16.25C3.36914 16.25 3.01284 16.1041 2.72117 15.8125C2.42952 15.5208 2.28369 15.1645 2.28369 14.7435V5.25642C2.28369 4.83547 2.42952 4.47917 2.72117 4.1875C3.01284 3.89583 3.36914 3.75 3.79009 3.75H13.2772C13.6982 3.75 14.0545 3.89583 14.3461 4.1875C14.6378 4.47917 14.7836 4.83547 14.7836 5.25642V9.07052L17.7163 6.13785V13.8621L14.7836 10.9294V14.7435C14.7836 15.1645 14.6378 15.5208 14.3461 15.8125C14.0545 16.1041 13.6982 16.25 13.2772 16.25H3.79009ZM3.79009 15H13.2772C13.352 15 13.4135 14.9759 13.4615 14.9279C13.5096 14.8798 13.5337 14.8183 13.5337 14.7435V5.25642C13.5337 5.18162 13.5096 5.12019 13.4615 5.0721C13.4135 5.02402 13.352 4.99998 13.2772 4.99998H3.79009C3.7153 4.99998 3.65386 5.02402 3.60577 5.0721C3.55769 5.12019 3.53365 5.18162 3.53365 5.25642V14.7435C3.53365 14.8183 3.55769 14.8798 3.60577 14.9279C3.65386 14.9759 3.7153 15 3.79009 15Z\" fill=\"currentColor\"/>\n</svg>\n",
  rgxp: /video/i,
  extensions: ["mp4", "mpeg4", "mpg", "mpeg", "m4v", "avi", "divx", "mov", "wmv",
  "movie", "asf", "webm", "flv", "3gp", "m3u8", "m3u", "ogv", "mpd"],
  extensions_weight: ["mp4", "mpeg4", "mpg", "mpeg", "m4v", "avi", "divx", "mov",
  "wmv", "movie", "asf", "webm", "flv", "m3u8", "m3u", "3gp"],
  ctype2extension: {
  mpeg: "mp4",
  mp4: "mp4",
  m4v: "mp4",
  "3gpp": "3gp",
  flv: "flv",
  quicktime: "mov",
  msvideo: "avi",
  "ms-wmv": "wmv",
  "ms-asf": "asf"
  }
  }
  ,
  no_watermark_video: {
  title: "No watermark video",
  icon: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M21.53 7.15C21.378 7.06223 21.2055 7.01603 21.03 7.01603C20.8545 7.01603 20.682 7.06223 20.53 7.15L17 8.89C16.9715 8.11357 16.6429 7.37847 16.0834 6.83944C15.5238 6.3004 14.777 5.99948 14 6H5C4.20435 6 3.44129 6.31607 2.87868 6.87868C2.31607 7.44129 2 8.20435 2 9V15C2 15.7957 2.31607 16.5587 2.87868 17.1213C3.44129 17.6839 4.20435 18 5 18H14C14.777 18.0005 15.5238 17.6996 16.0834 17.1606C16.6429 16.6215 16.9715 15.8864 17 15.11L20.56 16.89C20.6963 16.9599 20.8468 16.9975 21 17C21.1872 17.0006 21.3709 16.9486 21.53 16.85C21.6741 16.7599 21.7929 16.6346 21.8751 16.4859C21.9574 16.3372 22.0003 16.1699 22 16V8C22.0003 7.83006 21.9574 7.66283 21.8751 7.51411C21.7929 7.36538 21.6741 7.24007 21.53 7.15ZM15 15C15 15.2652 14.8946 15.5196 14.7071 15.7071C14.5196 15.8946 14.2652 16 14 16H5C4.73478 16 4.48043 15.8946 4.29289 15.7071C4.10536 15.5196 4 15.2652 4 15V9C4 8.73478 4.10536 8.48043 4.29289 8.29289C4.48043 8.10536 4.73478 8 5 8H14C14.2652 8 14.5196 8.10536 14.7071 8.29289C14.8946 8.48043 15 8.73478 15 9V15ZM20 14.38L17 12.88V11.12L20 9.62V14.38Z\" fill=\"currentColor\"/></svg>",
  rgxp: /no watermark video/i,
  extensions: ["mp4", "mpeg4", "mpg", "mpeg", "m4v", "avi", "divx", "mov", "wmv",
  "movie", "asf", "webm", "flv", "3gp", "m3u8", "m3u", "ogv", "mpd"],
  extensions_weight: ["mp4", "mpeg4", "mpg", "mpeg", "m4v", "avi", "divx", "mov",
  "wmv", "movie", "asf", "webm", "flv", "m3u8", "m3u", "3gp"],
  ctype2extension: {
  mpeg: "mp4",
  mp4: "mp4",
  m4v: "mp4",
  "3gpp": "3gp",
  flv: "flv",
  quicktime: "mov",
  msvideo: "avi",
  "ms-wmv": "wmv",
  "ms-asf": "asf"
  }
  }
  ,
  subtitles: {
  title: "Subtitles",
  icon: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M3.90869 13.6143V12.3643H11.8253V13.6143H3.90869ZM3.90869 10.2809V9.03096H16.8253V10.2809H3.90869ZM3.90869 6.94759V5.69763H16.8253V6.94759H3.90869Z\" fill=\"currentColor\"/>\n</svg>\n",
  rgxp: /subtitles/i,
  extensions: ["yt_srt", "srt", "vtt"],
  extensions_weight: ["yt_srt", "srt", "vtt"]
  }
  ,
  audio_channel: {
  title: "Audio channel",
  icon: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M7.11517 17.0833H4.42292C4.00198 17.0833 3.64567 16.9375 3.354 16.6458C3.06234 16.3541 2.9165 15.9978 2.9165 15.5769V10C2.9165 9.0171 3.10241 8.09616 3.47421 7.23719C3.846 6.37821 4.35134 5.62928 4.99021 4.9904C5.6291 4.35152 6.37803 3.84619 7.237 3.4744C8.09598 3.10259 9.01691 2.91669 9.99982 2.91669C10.9827 2.91669 11.9037 3.10259 12.7626 3.4744C13.6216 3.84619 14.3705 4.35152 15.0094 4.9904C15.6483 5.62928 16.1536 6.37821 16.5254 7.23719C16.8972 8.09616 17.0831 9.0171 17.0831 10V15.5769C17.0831 15.9978 16.9373 16.3541 16.6456 16.6458C16.354 16.9375 15.9977 17.0833 15.5767 17.0833H12.8845V11.1859H15.8332V10C15.8332 8.375 15.2672 6.99653 14.1352 5.86458C13.0033 4.73264 11.6248 4.16667 9.99982 4.16667C8.37482 4.16667 6.99634 4.73264 5.8644 5.86458C4.73246 6.99653 4.16648 8.375 4.16648 10V11.1859H7.11517V17.0833ZM5.86521 12.4359H4.16648V15.5769C4.16648 15.641 4.19319 15.6998 4.24661 15.7532C4.30004 15.8066 4.35881 15.8333 4.42292 15.8333H5.86521V12.4359ZM14.1344 12.4359V15.8333H15.5767C15.6408 15.8333 15.6996 15.8066 15.753 15.7532C15.8064 15.6998 15.8332 15.641 15.8332 15.5769V12.4359H14.1344Z\" fill=\"currentColor\"/>\r\n</svg>\r\n",
  rgxp: /audio channel/i,
  extensions: ["mp3", "flac", "m4a", "wma", "ogg", "wav", "aif", "mid", "opus"],
  extensions_weight: ["mp3", "flac", "m4a", "wma", "ogg", "wav", "aif", "mid", "opus"],
  ctype2extension: {
  midi: "mid",
  mp4: "m4a",
  m4a: "m4a",
  mpeg: "mp3",
  mpeg3: "mp3",
  wav: "wav",
  aiff: "aif",
  opus: "opus"
  }
  }
  ,
  image: {
  title: "Image",
  icon: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M4.08747 17.0753C3.66653 17.0753 3.31022 16.9295 3.01855 16.6378C2.72689 16.3462 2.58105 15.9898 2.58105 15.5689V4.41511C2.58105 3.99416 2.72689 3.63786 3.01855 3.34619C3.31022 3.05452 3.66653 2.90869 4.08747 2.90869H15.2413C15.6622 2.90869 16.0185 3.05452 16.3102 3.34619C16.6018 3.63786 16.7477 3.99416 16.7477 4.41511V15.5689C16.7477 15.9898 16.6018 16.3462 16.3102 16.6378C16.0185 16.9295 15.6622 17.0753 15.2413 17.0753H4.08747ZM4.08747 15.8253H15.2413C15.3054 15.8253 15.3641 15.7986 15.4176 15.7452C15.471 15.6918 15.4977 15.633 15.4977 15.5689V4.41511C15.4977 4.351 15.471 4.29223 15.4176 4.2388C15.3641 4.18538 15.3054 4.15867 15.2413 4.15867H4.08747C4.02336 4.15867 3.96459 4.18538 3.91116 4.2388C3.85774 4.29223 3.83103 4.351 3.83103 4.41511V15.5689C3.83103 15.633 3.85774 15.6918 3.91116 15.7452C3.96459 15.7986 4.02336 15.8253 4.08747 15.8253ZM5.28941 13.9503H14.1034L11.3631 10.2965L9.02335 13.3414L7.35668 11.21L5.28941 13.9503Z\" fill=\"#AAABAC\"/>\n</svg>\n",
  rgxp: /image/i,
  extensions: ["jpg", "jpeg", "png", "gif", "webp", "avif", "bmp", "tif", "tiff",
  "heic", "heif", "raw", "ico", "cur", "svg"],
  extensions_weight: ["jpg", "jpeg", "png", "gif", "webp", "avif", "bmp", "tif",
  "tiff", "heic", "heif", "raw", "ico", "cur", "svg"],
  ctype2extension: {
  }
  }
  };
  var obj_o = {
  "4320p": {
  i18n_label: "quality_8k_uhd",
  label: "8K UHD",
  value: 1600
  }
  ,
  "4320p60 HDR": {
  i18n_label: "quality_8k_uhd_hdr",
  label: "8K UHD HDR",
  value: 1500
  }
  ,
  "3072p": {
  i18n_label: "quality_4k_qfhd",
  label: "4K QFHD",
  value: 1400
  }
  ,
  "3072p60 HDR": {
  i18n_label: "quality_4k_qfhd_hdr",
  label: "4K QFHD HDR",
  value: 1300
  }
  ,
  "2160p": {
  i18n_label: "quality_4k_uhd",
  label: "4K UHD",
  value: 1200
  }
  ,
  "2160p60 HDR": {
  i18n_label: "quality_4k_uhd_hdr",
  label: "4K UHD HDR",
  value: 1199
  }
  ,
  "2048p": {
  i18n_label: "quality_qhd",
  label: "Quad HD",
  value: 1100
  }
  ,
  "2048p60 HDR": {
  i18n_label: "quality_qhd_hdr",
  label: "Quad HD HDR",
  value: 1099
  }
  ,
  "1440p": {
  i18n_label: "quality_qhd",
  label: "Quad HD",
  value: 1000
  }
  ,
  "1440p60 HDR": {
  i18n_label: "quality_qhd_hdr",
  label: "Quad HD HDR",
  value: 900
  }
  ,
  "1080p": {
  i18n_label: "quality_fhd",
  label: "Full HD",
  value: 800
  }
  ,
  "1080p60 HDR": {
  i18n_label: "quality_fhd_hdr",
  label: "Full HD HDR",
  value: 700
  }
  ,
  "720p": {
  i18n_label: "quality_hd",
  label: "HD",
  value: 600
  }
  ,
  "720p60 HDR": {
  i18n_label: "quality_hd_hdr",
  label: "HD HDR",
  value: 599
  }
  ,
  "540p": {
  i18n_label: "quality_standard",
  label: "Standard",
  value: 500
  }
  ,
  "480p": {
  i18n_label: "quality_standard",
  label: "Standard",
  value: 500
  }
  ,
  "360p": {
  i18n_label: "quality_medium",
  label: "Medium",
  value: 400
  }
  ,
  "320p": {
  i18n_label: "quality_medium",
  label: "Medium",
  value: 400
  }
  ,
  "270p": {
  i18n_label: "quality_small",
  label: "Small",
  value: 300
  }
  ,
  "240p": {
  i18n_label: "quality_small",
  label: "Small",
  value: 200
  }
  ,
  "144p": {
  i18n_label: "quality_mobile",
  label: "Mobile",
  value: 100
  }
  };
  var list_i = ["video", "audio", "subtitles"];
  function var_a(param_e) {
  return !!param_e && ["m3u8", "m3u", "hls", "zip"].indexOf(param_e) !== -1;
  }
  var list_s = [4320, 3072, 2160, 2048, 1440, 1080, 720, 540, 480, 360, 320, 270,
  240, 144];
  var list_c = [/^(.+\.)?vcmedia\.vn/i, /^(.+\.)?kenhhd\.tv/i];
  var list_l = [/coccoc\.com\/sitemap\.xml/i];
  var list_u = [/m\.naver\.com\/\/?shorts/i];
  var str_d = "hidePermanent";
  var str_f = "customControlFromServer";
  var str_p = "youtubeControls";
  var str_h = "otherControls";
  var str_g = "youtubeAdsContainerClasses";
  var str_m = "youtubeSkipBtnClasses";
  var str_v = "116.0.0.0";
  var num_y = 3;
  var num_k = 1;
  var str_b = "youtubeTurnOffAdblock";
  var str__ = "gserpSelectors";
  var str_T = "window.isAdguardEnabled = false";
  var str_S = "ytbViewCount";
  var num_x = 11;
  var str_w = "YTAdguardStatus";
  var str_E = "ytbAudioChannel";
  class var_A {
  }
  var_A.PROMOTE_SERP = {
  _: "promote_serp",
  GET: "get_promote_serp",
  CLOSE: "close_promote_serp"
  };
  var_A.ONBOARD_TRACK = {
  GET: "get_onboard_track",
  SAVE: "save_onboard_track"
  };
  var_A.ONBOARD_IMPORTDATA = "get_onboard_importdata";
  var_A.GET_FEATURE = "get_feature";
  var_A.DOWNLOAD = "download";
  var_A.PLAY = "play_video";
  var_A.SET_FEATURE = "set_feature";
  var_A.IS_SUPPORTED = "is_supported";
  var_A.FRAME_TYPE = "frame_type";
  var_A.FETCH = "background_request";
  var_A.YOUTUBE = {
  GET_INFO: "youtube_get_info",
  GET_MPD: "youtube_get_mpd_info"
  };
  var_A.OMNI = {
  ACTIVE: "active_omnibox",
  DEACTIVE: "deactive_omnibox"
  };
  var_A.METRICS = "metrics";
  var_A.CACHE = "cache.background";
  var_A.PIP = {
  REQUEST: "pip",
  INNER: "inner_frame_pip",
  ON: {
  ENTER: "inner_pip_enter",
  LEAVE: "inner_pip_leave"
  }
  };
  var_A.CONSOLE_LOG = "console.log";
  var_A.GET_URL = "get_url";
  var_A.SAVE_URL = "save_url";
  var_A.GET_MATCHED_REQUESTS = "get_matched_requests";
  var_A.GET_SERVER_TIME = "get_server_time";
  var_A.GET_FB_SAVED_URL = "get_fb_saved_url";
  var_A.OPEN_SEARCH_SETTINGS = "open_search_engines_settings";
  var_A.SCRIPTING = {
  INJECT: "inject_script",
  NOTIFY: "script_executed",
  EXEC: "execute_script"
  };
  var_A.OPEN_SETTINGS = "open_settings";
  var_A.OFFSCREEN = {
  };
  var_A.TURN_OFF_ADBLOCK_ON_YOUTUBE = "turn_off_adblock_on_youtube";
  var_A.TURN_ON_ADBLOCK_ON_YOUTUBE = "turn_on_adblock_on_youtube";
  var_A.GET_FASTFORWARD_ENABLED = "get_ff_enabled";
  var_A.GET_ADBLOCK_STATUS = "get_adblock_status";
  var_A.SET_AS_DEFAULT_BROWSER = "set_cc_as_default_browser";
  var_A.CORS_FETCH = "cors_fetch";
  var_A.GET_ADGUARD_INJECTING_STATUS = "get_adguard_injecting_status";
  var_A.GET_ABTEST = "get_abtest";
  var_A.CHECK_URL_CHANGED = "check_url_changed";
  var_A.CHECK_URL = "check_url";
  var_A.GETVIDTIME = "get_vid_time";
  var_A.EVENTENOUGHTIME = "event_enough_time";
  var_A.GET_COOKIES = "get_cookies";
  var_A.SKIP_VIDEO = "skip_video";
  var_A.OPEN_SIDEPANEL = "open_sidepanel";
  var_A.RETURN_TRANSCRIPT = "return_transcript";
  var_A.SEND_REQUEST = "send_request";
  var list_C = ["chrome://", "coccoc://"];
  var list_O = ["coccoc.com/webhp", "about:blank"];
  var list_I = ["sex", "porn", "vlxx", "vlxy", "vlzz", "69", "18", "xvideo", "hentai",
  "jav", "cliphot", "xx", "mobiblog", "spank", "quatvn", "phang", "missav", "boyfriendtv",
  "lon88", "lonkk", "sieukhung", "thiendia", "gaigu", "lenlut", "heovl", "phimheo",
  "quaylen", "checkerviet", "koanchay", "sieudamtv", "phevkl", "heomup", "hdvietsub",
  "cuongdam", "phimloz", "chinababe", "phimden", "phim18", "xemsv", "thisvid", "thisav",
  "xsub", "phimkk", "chich", "phimcapba", "chongtoico", "thanhlau", "hdgay", "vkl",
  "vl", "phima", "strip", "loz", "xhamster", "banlinh", "quyong", "maulon", "prn",
  "baocaosu", "tinhduc", "thudam", "ditnhau", "ditme", "jable", "gaimup", "mbbg",
  "lauxanh", "gaito", "vl", "3xchina", "phimnguoilon", "mat6tube", "jpxnx", "vnshow",
  "gaigoi", "titday", "7mmtv", "daongon", "londep", "lontv", "thienvadia", "phimtz",
  "fuck", "phimxes", "phimsec", "xnx", "phang", "3x", "buoito", "hangdep", "kynuviet",
  "gaikhoehang", "chinaav", "xyz", "sex", "vkl", "xx", "xxx", "jav", "dam", "hentai",
  "domknig", "18", "phetgai", "porn", "gaidam", "daoxinh", "heo88", "tuoinung", "xyz",
  "buomtv", "kichdam"];
  },
  3: function (moduleObj, exportsObj, requireFn) {
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
  },
  4: function (moduleObj, exportsObj, requireFn) {
  (function (param_t) {
  var var_r;
  var_r = var_r || function (param_e, param_r) {
  var var_o;
  if (typeof window != "undefined" && window.crypto) {
  var_o = window.crypto;
  }
  if (typeof self != "undefined" && self.crypto) {
  var_o = self.crypto;
  }
  if (typeof globalThis != "undefined" && globalThis.crypto) {
  var_o = globalThis.crypto;
  }
  if (!var_o && typeof window != "undefined" && window.msCrypto) {
  var_o = window.msCrypto;
  }
  if (!var_o && param_t !== undefined && param_t.crypto) {
  var_o = param_t.crypto;
  }
  if (!var_o) {
  try {
  var_o = requireFn(50);
  }
  catch (var_e) {
  }
  }
  function var_i() {
  if (var_o) {
  if (typeof var_o.getRandomValues == "function") {
  try {
  return var_o.getRandomValues(new Uint32Array(1))[0];
  }
  catch (var_e) {
  }
  }
  if (typeof var_o.randomBytes == "function") {
  try {
  return var_o.randomBytes(4).readInt32LE();
  }
  catch (var_e) {
  }
  }
  }
  throw new Error("Native crypto module could not be used to get secure random number.");
  }
  var var_a = Object.create || function () {
  function var_e() {
  }
  return function (param_t_1) {
  var var_n;
  var_e.prototype = param_t_1;
  var_n = new var_e();
  var_e.prototype = null;
  return var_n;
  };
  }
  ();
  var obj_s = {
  };
  var var_c = obj_s.lib = {
  };
  var var_l = var_c.Base = {
  extend: function (param_e_1) {
  var var_t = var_a(this);
  if (param_e_1) {
  var_t.mixIn(param_e_1);
  }
  if (!var_t.hasOwnProperty("init") || this.init === var_t.init) {
  var_t.init = function () {
  var_t.$super.init.apply(this, arguments);
  };
  }
  var_t.init.prototype = var_t;
  var_t.$super = this;
  return var_t;
  }
  ,
  create: function () {
  var var_e = this.extend();
  var_e.init.apply(var_e, arguments);
  return var_e;
  }
  ,
  init: function () {
  }
  ,
  mixIn: function (param_e_1) {
  for (var var_t in param_e_1) {
  if (param_e_1.hasOwnProperty(var_t)) {
  this[var_t] = param_e_1[var_t];
  }
  }
  if (param_e_1.hasOwnProperty("toString")) {
  this.toString = param_e_1.toString;
  }
  }
  ,
  clone: function () {
  return this.init.prototype.extend(this);
  }
  };
  var var_u = var_c.WordArray = var_l.extend({
  init: function (param_e_1, param_t_1) {
  param_e_1 = this.words = param_e_1 || [];
  this.sigBytes = param_t_1 ?? param_e_1.length * 4;
  }
  ,
  toString: function (param_e_1) {
  return (param_e_1 || var_f).stringify(this);
  }
  ,
  concat: function (param_e_1) {
  var var_t = this.words;
  var var_n = param_e_1.words;
  var var_r_1 = this.sigBytes;
  var var_o_1 = param_e_1.sigBytes;
  this.clamp();
  if (var_r_1 % 4) {
  for (var num_i = 0;
  num_i < var_o_1;
  num_i++) {
  var var_a_1 = var_n[num_i >>> 2] >>> 24 - num_i % 4 * 8 & 255;
  var_t[var_r_1 + num_i >>> 2] |= var_a_1 << 24 - (var_r_1 + num_i) % 4 * 8;
  }
  }
  else {
  for (var num_s = 0;
  num_s < var_o_1;
  num_s += 4) {
  var_t[var_r_1 + num_s >>> 2] = var_n[num_s >>> 2];
  }
  }
  this.sigBytes += var_o_1;
  return this;
  }
  ,
  clamp: function () {
  var var_t = this.words;
  var var_n = this.sigBytes;
  var_t[var_n >>> 2] &= -1 << 32 - var_n % 4 * 8;
  var_t.length = param_e.ceil(var_n / 4);
  }
  ,
  clone: function () {
  var var_e = var_l.clone.call(this);
  var_e.words = this.words.slice(0);
  return var_e;
  }
  ,
  random: function (param_e_1) {
  var list_t = [];
  for (var num_n = 0;
  num_n < param_e_1;
  num_n += 4) {
  list_t.push(var_i());
  }
  return new var_u.init(list_t, param_e_1);
  }
  }
  );
  var var_d = obj_s.enc = {
  };
  var var_f = var_d.Hex = {
  stringify: function (param_e_1) {
  var var_t = param_e_1.words;
  for (var var_n = param_e_1.sigBytes, list_r = [], num_o = 0;
  num_o < var_n;
  num_o++) {
  var var_i_1 = var_t[num_o >>> 2] >>> 24 - num_o % 4 * 8 & 255;
  list_r.push((var_i_1 >>> 4).toString(16));
  list_r.push((var_i_1 & 15).toString(16));
  }
  return list_r.join("");
  }
  ,
  parse: function (param_e_1) {
  for (var var_t = param_e_1.length, list_n = [], num_r = 0;
  num_r < var_t;
  num_r += 2) {
  list_n[num_r >>> 3] |= parseInt(param_e_1.substr(num_r, 2), 16) << 24 - num_r % 8 * 4;
  }
  return new var_u.init(list_n, var_t / 2);
  }
  };
  var var_p = var_d.Latin1 = {
  stringify: function (param_e_1) {
  var var_t = param_e_1.words;
  for (var var_n = param_e_1.sigBytes, list_r = [], num_o = 0;
  num_o < var_n;
  num_o++) {
  var var_i_1 = var_t[num_o >>> 2] >>> 24 - num_o % 4 * 8 & 255;
  list_r.push(String.fromCharCode(var_i_1));
  }
  return list_r.join("");
  }
  ,
  parse: function (param_e_1) {
  for (var var_t = param_e_1.length, list_n = [], num_r = 0;
  num_r < var_t;
  num_r++) {
  list_n[num_r >>> 2] |= (param_e_1.charCodeAt(num_r) & 255) << 24 - num_r % 4 * 8;
  }
  return new var_u.init(list_n, var_t);
  }
  };
  var var_h = var_d.Utf8 = {
  stringify: function (param_e_1) {
  try {
  return decodeURIComponent(escape(var_p.stringify(param_e_1)));
  }
  catch (var_e) {
  throw new Error("Malformed UTF-8 data");
  }
  }
  ,
  parse: function (param_e_1) {
  return var_p.parse(unescape(encodeURIComponent(param_e_1)));
  }
  };
  var var_g = var_c.BufferedBlockAlgorithm = var_l.extend({
  reset: function () {
  this._data = new var_u.init();
  this._nDataBytes = 0;
  }
  ,
  _append: function (param_e_1) {
  if (typeof param_e_1 == "string") {
  param_e_1 = var_h.parse(param_e_1);
  }
  this._data.concat(param_e_1);
  this._nDataBytes += param_e_1.sigBytes;
  }
  ,
  _process: function (param_t_1) {
  var var_n;
  var var_r_1 = this._data;
  var var_o_1 = var_r_1.words;
  var var_i_1 = var_r_1.sigBytes;
  var var_a_1 = this.blockSize;
  var var_s = var_i_1 / (var_a_1 * 4);
  var var_c_1 = (var_s = param_t_1 ? param_e.ceil(var_s) : param_e.max((var_s | 0) - this._minBufferSize,
  0)) * var_a_1;
  var var_l_1 = param_e.min(var_c_1 * 4, var_i_1);
  if (var_c_1) {
  for (var num_d = 0;
  num_d < var_c_1;
  num_d += var_a_1) {
  this._doProcessBlock(var_o_1, num_d);
  }
  var_n = var_o_1.splice(0, var_c_1);
  var_r_1.sigBytes -= var_l_1;
  }
  return new var_u.init(var_n, var_l_1);
  }
  ,
  clone: function () {
  var var_e = var_l.clone.call(this);
  var_e._data = this._data.clone();
  return var_e;
  }
  ,
  _minBufferSize: 0
  }
  );
  var_c.Hasher = var_g.extend({
  cfg: var_l.extend(),
  init: function (param_e_1) {
  this.cfg = this.cfg.extend(param_e_1);
  this.reset();
  }
  ,
  reset: function () {
  var_g.reset.call(this);
  this._doReset();
  }
  ,
  update: function (param_e_1) {
  this._append(param_e_1);
  this._process();
  return this;
  }
  ,
  finalize: function (param_e_1) {
  if (param_e_1) {
  this._append(param_e_1);
  }
  return this._doFinalize();
  }
  ,
  blockSize: 16,
  _createHelper: function (param_e_1) {
  return function (param_t_1, param_n) {
  return new param_e_1.init(param_n).finalize(param_t_1);
  };
  }
  ,
  _createHmacHelper: function (param_e_1) {
  return function (param_t_1, param_n) {
  return new var_m.HMAC.init(param_e_1, param_n).finalize(param_t_1);
  };
  }
  }
  );
  var var_m = obj_s.algo = {
  };
  return obj_s;
  }
  (Math);
  moduleObj.exports = var_r;
  }
  ).call(this, requireFn(13));
  },
  5: function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_feature_flags = requireFn(11);
  var dep_regenerator_runtime = requireFn(38);
  class var_i {
  constructor() {
  this.SOURCE_POPUP_PAGE = 0;
  this.SOURCE_OPTIONS_PAGE = 10;
  this.SOURCE_CONTENT_SCRIPT = 20;
  this.SOURCE_BACKGROUND_PAGE = 30;
  this.LEGACY_METRICS_NAME_MAP = {
  ButtonClicked: "TryItNowButtonClicked",
  CheckBoxClicked: "OneClickCheckbox"
  };
  this.PAGE_WELCOME_SCREEN = 0;
  this.PAGE_DOWNLOADS_LIST = 1;
  this.PAGE_ONE_CLICK_DOWNLOAD = 2;
  this.PAGE_NO_MEDIA_FOUND = 3;
  this.PAGE_OPTIONS = 4;
  this.PAGE_CONTENT_SHOW_CONTROLS = 5;
  this.PAGE_CONTENT_NO_MEDIA = 9;
  this.YOUTUBE_ERROR_WALL_BY_ADS_BLOCK = 0;
  this.YOUTUBE_ERROR_POPUP_BY_ADS_BLOCK = 1;
  this.YOUTUBE_ERROR_WALL_BY_SAVIOR = 2;
  this.YOUTUBE_ERROR_POPUP_BY_SAVIOR = 3;
  this.YOUTUBE_ERROR_WALL_BY_ADGUARD = 4;
  this.YOUTUBE_ERROR_POPUP_WITH_CLOSE_BY_ADGUARD = 5;
  this.YOUTUBE_ERROR_POPUP_WITHOUT_CLOSE_BY_ADGUARD = 6;
  this.YOUTUBE_ERROR_POPUP_WITH_CLOSE_BY_ADS_BLOCK = 7;
  this.YOUTUBE_ERROR_POPUP_WITHOUT_CLOSE_BY_ADS_BLOCK = 8;
  this.YOUTUBE_ERROR_POPUP_WITH_CLOSE_BY_SAVIOR = 9;
  this.YOUTUBE_ERROR_POPUP_WITHOUT_CLOSE_BY_SAVIOR = 10;
  this.YOUTUBE_AUTO_CLOSE_POPUP_WITH_CLOSE = 11;
  this.YOUTUBE_AUTO_CLOSE_POPUP_WITHOUT_CLOSE = 12;
  this.YOUTUBE_VIDEO_ERROR_ADBLOCK = 13;
  this.YOUTUBE_VIDEO_ERROR_ADGUARD = 14;
  this.YOUTUBE_VIDEO_ERROR_ADBLOCK_OFF = 15;
  this.YOUTUBE_VIDEO_ERROR_ADGUARD_OFF = 16;
  this.YOUTUBE_ADGUARD_OFF = 0;
  this.YOUTUBE_ADGUARD_ON = 1;
  this.YOUTUBE_ADGUARD_API_ERROR_TURN_OFF_ABP = 2;
  this.YOUTUBE_ADGUARD_API_ERROR_CHECK_TURN_OFF_ABP = 3;
  this.YOUTUBE_ADGUARD_NO_OFFSCREEN = 4;
  this.YOUTUBE_ADGUARD_NO_SCRIPT = 5;
  this.YOUTUBE_ADGUARD_NO_TAB_ID = 6;
  this.YOUTUBE_ADGUARD_USER_SCRIPT = 7;
  this.YOUTUBE_ADGUARD_SCRIPTING = 8;
  this.YOUTUBE_ADGUARD_IS_GROUP_TEST = 9;
  this.YOUTUBE_ADGUARD_HAS_EVENT = 10;
  this.YOUTUBE_ADGUARD_REGISTER_INJECT = 11;
  this.YOUTUBE_SKIP_ADS_SHOWN = 1;
  this.YOUTUBE_SKIP_ADS_FAST_FWD = 2;
  this.YOUTUBE_SKIPPABLE_ADS = 3;
  this.YOUTUBE_UNSKIPPABLE_ADS = 4;
  this.YOUTUBE_AUDIO_CHANNEL_WIDGET_SHOW = 1;
  this.YOUTUBE_AUDIO_CHANNEL_WIDGET_CHANGE = 2;
  this.YOUTUBE_AUDIO_CHANNEL_POPUP_SHOW = 3;
  this.YOUTUBE_AUDIO_CHANNEL_POPUP_CHANGE = 4;
  this.DOWNLOAD_AUTO = 0;
  this.DOWNLOAD_BUTTON = 1;
  this.DOWNLOAD_ALL = 2;
  this.DOWNLOAD_REQUEST_SIZE = 3;
  this.DOWNLOAD_REQUEST_SIZE_FAILED = 4;
  this.DOWNLOAD_SOUND_ONLY = 5;
  this.DOWNLOAD_YOUTUBE_ERROR = 6;
  this.DOWNLOAD_CANCELED = 7;
  this.DOWNLOAD_SUBTITLES = 9;
  this.DOWNLOAD_CURRENT_IMAGE = 0;
  this.DOWNLOAD_ALL_IMAGES = 1;
  this.BUTTON_HIDE_WITH_IMAGE = 0;
  this.BUTTON_HIDE_PERMANENT_WITH_IMAGE = 1;
  this.BUTTON_MAIN = 0;
  this.BUTTON_TRY_IT_NOW = 1;
  this.BUTTON_SHOW_DOWNLOADS = 2;
  this.BUTTON_OPEN_SETTINGS = 3;
  this.BUTTON_DOWNLOAD_ALL = 4;
  this.BUTTON_MORE_OPTIONS = 5;
  this.BUTTON_HIDE_PERMANENT = 6;
  this.BUTTON_FAKE_QUALITY = 7;
  this.BUTTON_DETACH = 8;
  this.BUTTON_HIDE = 9;
  this.CHECK_BOX_ENABLE_ONE_CLICK = 0;
  this.CHECK_BOX_SHOW_ON_PAGE_BUTTONS = 2;
  this.CHECK_BOX_PREFER_LAST_QUALITY = 4;
  this.CHECK_BOX_DETACH_ENABLED = 6;
  this.CHECK_BOX_DARK_THEM_ENABLED = 8;
  this.PIP_DETACH_CLICK = 0;
  this.PIP_RESTORE_CLICK = 1;
  this.PIP_SITE_LINK_CLICK = 2;
  this.PLAY_NOW_SHOWN = 0;
  this.PLAY_NOW_WIDGET_CLICKED = 1;
  this.PLAY_NOW_TOOLTIP_SHOWN = 2;
  this.PLAY_NOW_TOOLTIP_CLOSED = 3;
  this.PLAY_NOW_TOOLTIP_NOT_SHOW_AGAIN = 4;
  this.PLAY_NOW_TOOLTIP_BOTTOM_SHOWN = 5;
  this.PLAY_NOW_TOOLTIP_BOTTOM_CLOSED = 6;
  this.PLAY_NOW_TOOLTIP_BOTTOM_NOT_SHOW_AGAIN = 7;
  this.EXTENSION_MP4 = 1;
  this.EXTENSION_MP3 = 2;
  this.EXTENSION_WEBM = 3;
  this.EXTENSION_3GP = 4;
  this.EXTENSION_SRT = 5;
  this.EXTENSION_OTHER = 6;
  this.SEND_MOBILE_SHOW = 1;
  this.SEND_MOBILE_CLICK = 2;
  this.SEND_MOBILE_CLICK_CLOSE = 3;
  this.SEND_MOBILE_CLICK_A = 4;
  this.SEND_MOBILE_CLICK_G = 5;
  this.SEND_MOBILE_CLICK_W = 6;
  this.SEND_MOBILE_CLICK_AUDIO = 7;
  this.SEND_MOBILE_ERROR = 9;
  this.TURN_LIGHT_ON = 0;
  this.TURN_LIGHT_OFF = 1;
  this.ONBOARD_POPUP_SHOWN = 1;
  this.ONBOARD_POPUP_SHOWN_SECOND = 1;
  this.ONBOARD_POPUP_SHOWN_THIRD = 1;
  this.ONBOARD_TRY_NOW_BTN_CLICK = 1;
  this.CLOSE_ONBOARD_POPUP = 1;
  this.OPEN_SETTING_POPUP = 1;
  this.OPEN_SETTING_CONTENT = 2;
  this.SKIP_VIDEO = 0;
  this.SETTING_ENABLE_SKIP_VIDEO = 1;
  this.SETTING_DISABLE_SKIP_VIDEO = 2;
  this.SIDEPANEL_OPEN_ICON_CLICK = 1;
  this.SIDEPANEL_OPEN_DONE = 2;
  this.DOWNLOAD_SIDEPANEL_CLICK_VIDEO = 1;
  this.DOWNLOAD_SIDEPANEL_CLICK_AUDIO = 2;
  this.DOWNLOAD_SIDEPANEL_CLICK_SUBTITLE = 3;
  this.DOWNLOAD_SIDEPANEL_CLICK_IMAGE = 4;
  this.DOWNLOAD_SIDEPANEL_CLICK_BULK_MEDIA = 5;
  this.DOWNLOAD_SIDEPANEL_CLICK_BULK_IMAGE = 6;
  this.DOWNLOAD_SIDEPANEL_VIDEO_DIRECT = 1;
  this.DOWNLOAD_SIDEPANEL_AUDIO_DIRECT = 2;
  this.DOWNLOAD_SIDEPANEL_SUBTITLE_DIRECT = 3;
  this.DOWNLOAD_SIDEPANEL_IMAGE_DIRECT = 4;
  this.ONECLICK_CHECKBOX_ON = 1;
  this.ONECLICK_CHECKBOX_OFF = 2;
  this.ONECLICK_AUTO_QUALITY_HIGH = 18;
  this.ONECLICK_AUTO_QUALITY_STANDARD = 19;
  this.ONECLICK_AUTO_QUALITY_LOW = 20;
  this.DOWNLOAD_SIDEPANEL_QUALITY_MOBILE = 10;
  this.DOWNLOAD_SIDEPANEL_QUALITY_LOW = 11;
  this.DOWNLOAD_SIDEPANEL_QUALITY_MEDIUM = 12;
  this.DOWNLOAD_SIDEPANEL_QUALITY_STANDARD = 13;
  this.DOWNLOAD_SIDEPANEL_QUALITY_HD = 14;
  this.DOWNLOAD_SIDEPANEL_QUALITY_FULLHD = 15;
  this.DOWNLOAD_SIDEPANEL_QUALITY_QHD = 16;
  this.DOWNLOAD_SIDEPANEL_QUALITY_4K = 17;
  this.DOWNLOAD_SIDEPANEL_QUALITY_8K = 18;
  this.DOWNLOAD_SIDEPANEL_AUDIO_128 = 20;
  this.DOWNLOAD_SIDEPANEL_AUDIO_320 = 21;
  this.DOWNLOAD_SIDEPANEL_AUDIO_LOSSLESS = 22;
  this.SELECT_ALL_TOGGLE_ON = 1;
  this.SELECT_ALL_TOGGLE_OFF = 2;
  this.IMAGE_SIZE_FILTER_ALL = 0;
  this.IMAGE_SIZE_FILTER_SMALL = 1;
  this.IMAGE_SIZE_FILTER_MEDIUM = 2;
  this.IMAGE_SIZE_FILTER_LARGE = 3;
  }
  get source() {
  if (!chrome.action && !chrome.pageAction) {
  return this.SOURCE_CONTENT_SCRIPT;
  }
  switch (location.pathname) {
  case "/popup.html":
  return this.SOURCE_POPUP_PAGE;
  case "/options.html":
  return this.SOURCE_OPTIONS_PAGE;
  case "/background.js":
  case "/background.html":
  return this.SOURCE_BACKGROUND_PAGE;
  default:
  return null;
  }
  }
  _getFullName(param_e) {
  return "Savior." + (this.LEGACY_METRICS_NAME_MAP[param_e] ||
  param_e);
  }
  _getTotalValue(param_e, param_t, param_n) {
  if (param_e.indexOf("Refr") === 0 || param_n || ["PageShown", "YTBlockType", "YTSkipAdShown",
  "ForceDisableAdblockOnYoutube"].includes(param_e) || (param_e == null ?
  undefined : param_e.startsWith("Onboarding.")) || typeof param_t != "number") {
  return param_t;
  }
  else {
  return param_t + this.source;
  }
  }
  _doLog(param_e, param_t, param_n) {
  var var_i_1 = this._getFullName(param_t);
  if (!(parseInt(navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)?.[2] ||
  "") <= 50)) {
  if (this.source === this.SOURCE_CONTENT_SCRIPT) {
  Object(dep_regenerator_runtime.a)({
  type: "metrics",
  method: "log",
  params: {
  name: param_t,
  value: param_n
  }
  }
  );
  }
  else if (chrome.metricsPrivate) {
  switch (param_e) {
  case "recordSmallCount":
  chrome.metricsPrivate.recordValue({
  metricName: var_i_1,
  type: chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LINEAR,
  min: 0,
  max: 100,
  buckets: 100
  }
  , param_n);
  break;
  case "recordValue":
  chrome.metricsPrivate.recordValue({
  metricName: var_i_1,
  type: chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LINEAR,
  min: 0,
  max: 1000,
  buckets: 1002
  }
  , param_n);
  break;
  case "recordCustomData":
  chrome.metricsPrivate.recordCustomData(param_n);
  break;
  case "recordLongTime":
  chrome.metricsPrivate.recordLongTime(var_i_1, param_n);
  break;
  case "recordEnumerationValue":
  chrome.metricsPrivate.recordEnumerationValue(var_i_1, param_n, 1000);
  }
  }
  else if (param_e === "recordCustomData") {
  if (param_n && param_n.length === 1) {
  console.info("%c[Metrics] %crecordCustomData %c%s", "color:gray", "color:silver",
  "color: lightgreen", param_n[0].key, JSON.parse(param_n[0].value));
  return;
  }
  console.info("%c[Metrics]", "color:gray", "recordCustomData", param_n);
  }
  else {
  console.info("%c[Metrics]", "color:gray", param_e, var_i_1, param_n);
  }
  }
  }
  static _getMethodByName(param_e) {
  switch (param_e) {
  case "Refr":
  case "RefrSE":
  case "RefrFE":
  case "RefrPin":
  return "recordValue";
  case "recordCustomData":
  return "recordCustomData";
  default:
  return "recordEnumerationValue";
  }
  }
  log(param_e, param_t, param_n) {
  try {
  var var_o = var_i._getMethodByName(param_e);
  if (var_o === "recordCustomData" && dep_feature_flags.a.CUSTOM_METRICS_JSON) {
  this._doLog(var_o, param_e, param_t);
  return;
  }
  var var_a = this._getTotalValue(param_e, param_t, param_n);
  this._doLog(var_o, param_e, var_a);
  }
  catch (var_e) {
  console.warn("Catched", var_e);
  }
  }
  logYtExtension(param_e) {
  switch (param_e.toLowerCase()) {
  case "mp4":
  this.log("YtExtension", this.EXTENSION_MP4);
  break;
  case "mp3":
  this.log("YtExtension", this.EXTENSION_MP3);
  break;
  case "webm":
  this.log("YtExtension", this.EXTENSION_WEBM);
  break;
  case "3gp":
  this.log("YtExtension", this.EXTENSION_3GP);
  break;
  case "srt":
  this.log("YtExtension", this.EXTENSION_SRT);
  break;
  default:
  this.log("YtExtension", this.EXTENSION_OTHER);
  }
  }
  logSendMobile(param_e) {
  this.log("SendMobile", param_e);
  }
  logFromContentScript(param_e, param_t) {
  this.log(param_e, param_t, true);
  }
  logRequest(param_e) {
  }
  }
  exportsObj.a = new var_i();
  },
  8: function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var var_o;
  var var_i;
  var var_a;
  var var_s;
  var var_c;
  var var_l;
  var var_u;
  var var_d;
  var var_f;
  var var_p;
  var var_h;
  var var_g;
  var var_m;
  var var_v;
  var var_y;
  var var_k;
  var var_b;
  var var__;
  var_r = requireFn(4);
  requireFn(17);
  moduleObj.exports = void (var_r.lib.Cipher || (var_o = var_r, var_i = var_o.lib,
  var_a = var_i.Base, var_s = var_i.WordArray, var_c = var_i.BufferedBlockAlgorithm,
  var_l = var_o.enc, var_l.Utf8, var_u = var_l.Base64, var_d = var_o.algo.EvpKDF,
  var_f = var_i.Cipher = var_c.extend({
  cfg: var_a.extend(),
  createEncryptor: function (param_e, param_t) {
  return this.create(this._ENC_XFORM_MODE, param_e, param_t);
  }
  ,
  createDecryptor: function (param_e, param_t) {
  return this.create(this._DEC_XFORM_MODE, param_e, param_t);
  }
  ,
  init: function (param_e, param_t, param_n) {
  this.cfg = this.cfg.extend(param_n);
  this._xformMode = param_e;
  this._key = param_t;
  this.reset();
  }
  ,
  reset: function () {
  var_c.reset.call(this);
  this._doReset();
  }
  ,
  process: function (param_e) {
  this._append(param_e);
  return this._process();
  }
  ,
  finalize: function (param_e) {
  if (param_e) {
  this._append(param_e);
  }
  return this._doFinalize();
  }
  ,
  keySize: 4,
  ivSize: 4,
  _ENC_XFORM_MODE: 1,
  _DEC_XFORM_MODE: 2,
  _createHelper: function () {
  function var_e(param_e) {
  if (typeof param_e == "string") {
  return var__;
  }
  else {
  return var_k;
  }
  }
  return function (param_t) {
  return {
  encrypt: function (param_n, param_r, param_o) {
  return var_e(param_r).encrypt(param_t, param_n, param_r, param_o);
  }
  ,
  decrypt: function (param_n, param_r, param_o) {
  return var_e(param_r).decrypt(param_t, param_n, param_r, param_o);
  }
  };
  };
  }
  ()
  }
  ), var_i.StreamCipher = var_f.extend({
  _doFinalize: function () {
  return this._process(true);
  }
  ,
  blockSize: 1
  }
  ), var_p = var_o.mode = {
  }
  , var_h = var_i.BlockCipherMode = var_a.extend({
  createEncryptor: function (param_e, param_t) {
  return this.Encryptor.create(param_e, param_t);
  }
  ,
  createDecryptor: function (param_e, param_t) {
  return this.Decryptor.create(param_e, param_t);
  }
  ,
  init: function (param_e, param_t) {
  this._cipher = param_e;
  this._iv = param_t;
  }
  }
  ), var_g = var_p.CBC = function () {
  var var_e = var_h.extend();
  function var_t(param_e, param_t, param_n) {
  var var_r_1;
  var var_o_1 = this._iv;
  if (var_o_1) {
  var_r_1 = var_o_1;
  this._iv = undefined;
  }
  else {
  var_r_1 = this._prevBlock;
  }
  for (var num_i = 0;
  num_i < param_n;
  num_i++) {
  param_e[param_t + num_i] ^= var_r_1[num_i];
  }
  }
  var_e.Encryptor = var_e.extend({
  processBlock: function (param_e, param_n) {
  var var_r_1 = this._cipher;
  var var_o_1 = var_r_1.blockSize;
  var_t.call(this, param_e, param_n, var_o_1);
  var_r_1.encryptBlock(param_e, param_n);
  this._prevBlock = param_e.slice(param_n, param_n + var_o_1);
  }
  }
  );
  var_e.Decryptor = var_e.extend({
  processBlock: function (param_e, param_n) {
  var var_r_1 = this._cipher;
  var var_o_1 = var_r_1.blockSize;
  var var_i_1 = param_e.slice(param_n, param_n + var_o_1);
  var_r_1.decryptBlock(param_e, param_n);
  var_t.call(this, param_e, param_n, var_o_1);
  this._prevBlock = var_i_1;
  }
  }
  );
  return var_e;
  }
  (), var_m = (var_o.pad = {
  }
  ).Pkcs7 = {
  pad: function (param_e, param_t) {
  var var_n = param_t * 4;
  for (var var_r_1 = var_n - param_e.sigBytes % var_n, var_o_1 = var_r_1 << 24 | var_r_1 << 16 | var_r_1 << 8 | var_r_1,
  list_i = [], num_a = 0;
  num_a < var_r_1;
  num_a += 4) {
  list_i.push(var_o_1);
  }
  var var_c_1 = var_s.create(list_i, var_r_1);
  param_e.concat(var_c_1);
  }
  ,
  unpad: function (param_e) {
  var var_t = param_e.words[param_e.sigBytes - 1 >>> 2] & 255;
  param_e.sigBytes -= var_t;
  }
  }
  , var_i.BlockCipher = var_f.extend({
  cfg: var_f.cfg.extend({
  mode: var_g,
  padding: var_m
  }
  ),
  reset: function () {
  var var_e;
  var_f.reset.call(this);
  var var_t = this.cfg;
  var var_n = var_t.iv;
  var var_r_1 = var_t.mode;
  if (this._xformMode == this._ENC_XFORM_MODE) {
  var_e = var_r_1.createEncryptor;
  }
  else {
  var_e = var_r_1.createDecryptor;
  this._minBufferSize = 1;
  }
  if (this._mode && this._mode.__creator == var_e) {
  this._mode.init(this, var_n && var_n.words);
  }
  else {
  this._mode = var_e.call(var_r_1, this, var_n && var_n.words);
  this._mode.__creator = var_e;
  }
  }
  ,
  _doProcessBlock: function (param_e, param_t) {
  this._mode.processBlock(param_e, param_t);
  }
  ,
  _doFinalize: function () {
  var var_e;
  var var_t = this.cfg.padding;
  if (this._xformMode == this._ENC_XFORM_MODE) {
  var_t.pad(this._data, this.blockSize);
  var_e = this._process(true);
  }
  else {
  var_e = this._process(true);
  var_t.unpad(var_e);
  }
  return var_e;
  }
  ,
  blockSize: 4
  }
  ), var_v = var_i.CipherParams = var_a.extend({
  init: function (param_e) {
  this.mixIn(param_e);
  }
  ,
  toString: function (param_e) {
  return (param_e || this.formatter).stringify(this);
  }
  }
  ), var_y = (var_o.format = {
  }
  ).OpenSSL = {
  stringify: function (param_e) {
  var var_t = param_e.ciphertext;
  var var_n = param_e.salt;
  return (var_n ? var_s.create([1398893684, 1701076831]).concat(var_n).concat(var_t) :
  var_t).toString(var_u);
  }
  ,
  parse: function (param_e) {
  var var_t;
  var var_n = var_u.parse(param_e);
  var var_r_1 = var_n.words;
  if (var_r_1[0] == 1398893684 && var_r_1[1] == 1701076831) {
  var_t = var_s.create(var_r_1.slice(2, 4));
  var_r_1.splice(0, 4);
  var_n.sigBytes -= 16;
  }
  return var_v.create({
  ciphertext: var_n,
  salt: var_t
  }
  );
  }
  }
  , var_k = var_i.SerializableCipher = var_a.extend({
  cfg: var_a.extend({
  format: var_y
  }
  ),
  encrypt: function (param_e, param_t, param_n, param_r) {
  param_r = this.cfg.extend(param_r);
  var var_o_1 = param_e.createEncryptor(param_n, param_r);
  var var_i_1 = var_o_1.finalize(param_t);
  var var_a_1 = var_o_1.cfg;
  return var_v.create({
  ciphertext: var_i_1,
  key: param_n,
  iv: var_a_1.iv,
  algorithm: param_e,
  mode: var_a_1.mode,
  padding: var_a_1.padding,
  blockSize: param_e.blockSize,
  formatter: param_r.format
  }
  );
  }
  ,
  decrypt: function (param_e, param_t, param_n, param_r) {
  param_r = this.cfg.extend(param_r);
  param_t = this._parse(param_t, param_r.format);
  return param_e.createDecryptor(param_n, param_r).finalize(param_t.ciphertext);
  }
  ,
  _parse: function (param_e, param_t) {
  if (typeof param_e == "string") {
  return param_t.parse(param_e, this);
  }
  else {
  return param_e;
  }
  }
  }
  ), var_b = (var_o.kdf = {
  }
  ).OpenSSL = {
  execute: function (param_e, param_t, param_n, param_r, param_o) {
  param_r ||= var_s.random(8);
  if (param_o) {
  var_i_1 = var_d.create({
  keySize: param_t + param_n,
  hasher: param_o
  }
  ).compute(param_e, param_r);
  }
  else {
  var var_i_1 = var_d.create({
  keySize: param_t + param_n
  }
  ).compute(param_e, param_r);
  }
  var var_a_1 = var_s.create(var_i_1.words.slice(param_t), param_n * 4);
  var_i_1.sigBytes = param_t * 4;
  return var_v.create({
  key: var_i_1,
  iv: var_a_1,
  salt: param_r
  }
  );
  }
  }
  , var__ = var_i.PasswordBasedCipher = var_k.extend({
  cfg: var_k.cfg.extend({
  kdf: var_b
  }
  ),
  encrypt: function (param_e, param_t, param_n, param_r) {
  var var_o_1 = (param_r = this.cfg.extend(param_r)).kdf.execute(param_n, param_e.keySize,
  param_e.ivSize, param_r.salt, param_r.hasher);
  param_r.iv = var_o_1.iv;
  var var_i_1 = var_k.encrypt.call(this, param_e, param_t, var_o_1.key, param_r);
  var_i_1.mixIn(var_o_1);
  return var_i_1;
  }
  ,
  decrypt: function (param_e, param_t, param_n, param_r) {
  param_r = this.cfg.extend(param_r);
  param_t = this._parse(param_t, param_r.format);
  var var_o_1 = param_r.kdf.execute(param_n, param_e.keySize, param_e.ivSize, param_t.salt,
  param_r.hasher);
  param_r.iv = var_o_1.iv;
  return var_k.decrypt.call(this, param_e, param_t, var_o_1.key, param_r);
  }
  }
  )));
  },
  11: function (moduleObj, exportsObj, requireFn) {
  "use strict";
  (function (param_e) {
  var dep_media_constants = requireFn(1);
  function var_o(param_e_1) {
  return param_e_1.split(".").map(param_e_2 => parseInt(param_e_2));
  }
  function var_i(param_e_1, param_t) {
  if (!param_e_1) {
  return false;
  }
  var var_n = param_t.split(" ");
  if (var_n.length !== 2) {
  return false;
  }
  var var_r = -1;
  switch (var_n[0]) {
  case ">":
  var_r = 1;
  break;
  case ">=":
  var_r = 0;
  }
  var var_i_1;
  var var_a_1;
  var var_s;
  var var_c = var_o(var_n[1]);
  var_a_1 = var_c;
  return ((var_s = (var_i_1 = param_e_1)[0] - var_a_1[0]) !== 0 ||
  (var_s = var_i_1[1] - var_a_1[1]) != 0 || (var_s = var_i_1[2] - var_a_1[2]) != 0 ?
  var_s : var_s = var_i_1[3] - var_a_1[3]) >= var_r;
  }
  var var_a = function (param_e_1) {
  var var_t = param_e_1.match(/Chrome\/([\d.]+)/);
  if (var_t && var_t[1]) {
  var_t = var_o(var_t[1]);
  }
  var var_n = var_i.bind(null, var_t);
  return {
  YT: {
  mp4: true,
  m4a: true,
  webm: var_n(">= 39.0.2171.103"),
  weba: var_n(">= 39.0.2171.103")
  }
  ,
  M3U8: var_n("> 62.4.3202.180"),
  SOUND_ONLY: var_n("> 55.4.2883.114") || !!var_t && var_t[0] === 50 &&
  var_n("> 50.3.2661.150"),
  SUBTITLES: var_n("> 55.4.2883.114") || !!var_t && var_t[0] === 50 &&
  var_n("> 50.3.2661.150"),
  PLAY_NOW_BOTTOM_TOOLTIP: var_n("> 55.4.2883.126"),
  IS_ADS_PIP_PARAMS: var_n("> 60.4.3112.120"),
  MEDIA_WEB_REQUEST: var_n(">= 58.4.3029.118"),
  SERP_ADD_STRUCTURES: var_n(">= 62.4.3202.176"),
  SERP_ADD_INNER_STRUCTURES: var_n(">= 64.4.3282.200"),
  MOBILE_TRANSFER_PANEL: true,
  CUSTOM_METRICS_JSON: var_n(">= 64.4.3282.236"),
  DASH_DOWNLOAD: var_n(">= 72.0.3626.130"),
  WEB_REQUEST_EXTRA_HEADERS: var_n(">= 72.0.0.0"),
  NATIVE_PIP: var_n(">= 74.0.0.0"),
  DOWNLOAD: {
  EXTRA_DATAS: var_n(">= 103.0.0.0"),
  M3U8_AUDIO: var_n(">= 109.0.0.0")
  }
  ,
  CHATGPT: var_n(">= 110.0.0.0"),
  DO_NOT_ONBOARD_YOUTUBE_ANTI_ADBLOCKER: var_n(">= 117.0.0.0"),
  DO_NOT_FAST_FORWARD_YOUTUBE_ADS: var_n(">= " + dep_media_constants.e),
  SRT_V3_SUPPORT: var_n(">= 121.0.0.0"),
  ADGUARD_SWITCHER: var_n(">= 140.0.0.0"),
  PREFETCH_SUPPORT: var_n(">= 110.0.0.0"),
  NEW_MEDIA_DOWNLOAD: var_n(">= 151.0.0.0")
  };
  }
  (param_e.navigator.userAgent);
  exportsObj.a = var_a;
  }
  ).call(this, requireFn(13));
  },
  13: function (moduleObj, exportsObj) {
  var var_n;
  var_n = function () {
  return this;
  }
  ();
  try {
  var_n = var_n || new Function("return this")();
  }
  catch (var_e) {
  if (typeof window == "object") {
  var_n = window;
  }
  }
  moduleObj.exports = var_n;
  },
  16: function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var_r = requireFn(4);
  requireFn(26);
  requireFn(51);
  requireFn(52);
  requireFn(18);
  requireFn(53);
  requireFn(19);
  requireFn(40);
  requireFn(34);
  requireFn(54);
  requireFn(41);
  requireFn(55);
  requireFn(56);
  requireFn(57);
  requireFn(35);
  requireFn(58);
  requireFn(17);
  requireFn(8);
  requireFn(59);
  requireFn(60);
  requireFn(61);
  requireFn(62);
  requireFn(63);
  requireFn(64);
  requireFn(65);
  requireFn(66);
  requireFn(67);
  requireFn(68);
  requireFn(69);
  requireFn(70);
  requireFn(71);
  requireFn(72);
  requireFn(73);
  requireFn(74);
  requireFn(75);
  moduleObj.exports = var_r;
  },
  17: function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var var_o;
  var var_i;
  var var_a;
  var var_s;
  var var_c;
  var var_l;
  var var_u;
  var_u = requireFn(4);
  requireFn(40);
  requireFn(35);
  var_o = (var_r = var_u).lib;
  var_i = var_o.Base;
  var_a = var_o.WordArray;
  var_s = var_r.algo;
  var_c = var_s.MD5;
  var_l = var_s.EvpKDF = var_i.extend({
  cfg: var_i.extend({
  keySize: 4,
  hasher: var_c,
  iterations: 1
  }
  ),
  init: function (param_e) {
  this.cfg = this.cfg.extend(param_e);
  }
  ,
  compute: function (param_e, param_t) {
  var var_n;
  var var_r_1 = this.cfg;
  var var_o_1 = var_r_1.hasher.create();
  var var_i_1 = var_a.create();
  for (var var_s_1 = var_i_1.words, var_c_1 = var_r_1.keySize, var_l_1 = var_r_1.iterations;
  var_s_1.length < var_c_1;
  ) {
  if (var_n) {
  var_o_1.update(var_n);
  }
  var_n = var_o_1.update(param_e).finalize(param_t);
  var_o_1.reset();
  for (var num_u = 1;
  num_u < var_l_1;
  num_u++) {
  var_n = var_o_1.finalize(var_n);
  var_o_1.reset();
  }
  var_i_1.concat(var_n);
  }
  var_i_1.sigBytes = var_c_1 * 4;
  return var_i_1;
  }
  }
  );
  var_r.EvpKDF = function (param_e, param_t, param_n) {
  return var_l.create(param_n).compute(param_e, param_t);
  };
  moduleObj.exports = var_u.EvpKDF;
  },
  18: function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var var_o;
  var var_i;
  var_i = requireFn(4);
  var_o = (var_r = var_i).lib.WordArray;
  var_r.enc.Base64 = {
  stringify: function (param_e) {
  var var_t = param_e.words;
  var var_n = param_e.sigBytes;
  var var_r_1 = this._map;
  param_e.clamp();
  var list_o = [];
  for (var num_i = 0;
  num_i < var_n;
  num_i += 3) {
  var var_a = (var_t[num_i >>> 2] >>> 24 - num_i % 4 * 8 & 255) << 16 | (var_t[num_i + 1 >>> 2] >>> 24 - (
  num_i + 1) % 4 * 8 & 255) << 8 | var_t[num_i + 2 >>> 2] >>> 24 - (num_i + 2) % 4 * 8 & 255;
  for (var num_s = 0;
  num_s < 4 && num_i + num_s * 0.75 < var_n;
  num_s++) {
  list_o.push(var_r_1.charAt(var_a >>> (3 - num_s) * 6 & 63));
  }
  }
  var var_c = var_r_1.charAt(64);
  if (var_c) {
  while (list_o.length % 4) {
  list_o.push(var_c);
  }
  }
  return list_o.join("");
  }
  ,
  parse: function (param_e) {
  var var_t = param_e.length;
  var var_n = this._map;
  var var_r_1 = this._reverseMap;
  if (!var_r_1) {
  var_r_1 = this._reverseMap = [];
  for (var num_i = 0;
  num_i < var_n.length;
  num_i++) {
  var_r_1[var_n.charCodeAt(num_i)] = num_i;
  }
  }
  var var_a = var_n.charAt(64);
  if (var_a) {
  var var_s = param_e.indexOf(var_a);
  if (var_s !== -1) {
  var_t = var_s;
  }
  }
  return function (param_e_1, param_t, param_n) {
  var list_r = [];
  var num_i_1 = 0;
  for (var num_a = 0;
  num_a < param_t;
  num_a++) {
  if (num_a % 4) {
  var var_s_1 = param_n[param_e_1.charCodeAt(num_a - 1)] << num_a % 4 * 2;
  var var_c = param_n[param_e_1.charCodeAt(num_a)] >>> 6 - num_a % 4 * 2;
  var var_l = var_s_1 | var_c;
  list_r[num_i_1 >>> 2] |= var_l << 24 - num_i_1 % 4 * 8;
  num_i_1++;
  }
  }
  return var_o.create(list_r, num_i_1);
  }
  (param_e, var_t, var_r_1);
  }
  ,
  _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
  };
  moduleObj.exports = var_i.enc.Base64;
  },
  19: function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var_r = requireFn(4);
  (function (param_e) {
  var var_t = var_r;
  var var_n = var_t.lib;
  var var_o = var_n.WordArray;
  var var_i = var_n.Hasher;
  var var_a = var_t.algo;
  var list_s = [];
  (function () {
  for (var num_t = 0;
  num_t < 64;
  num_t++) {
  list_s[num_t] = param_e.abs(param_e.sin(num_t + 1)) * 4294967296 | 0;
  }
  }
  )();
  var var_c = var_a.MD5 = var_i.extend({
  _doReset: function () {
  this._hash = new var_o.init([1732584193, 4023233417, 2562383102, 271733878]);
  }
  ,
  _doProcessBlock: function (param_e_1, param_t) {
  for (var num_n = 0;
  num_n < 16;
  num_n++) {
  var var_r_1 = param_t + num_n;
  var var_o_1 = param_e_1[var_r_1];
  param_e_1[var_r_1] = (var_o_1 << 8 | var_o_1 >>> 24) & 16711935 | (var_o_1 << 24 | var_o_1 >>> 8) & -16711936;
  }
  var var_i_1 = this._hash.words;
  var var_a_1 = param_e_1[param_t + 0];
  var var_c_1 = param_e_1[param_t + 1];
  var var_p = param_e_1[param_t + 2];
  var var_h = param_e_1[param_t + 3];
  var var_g = param_e_1[param_t + 4];
  var var_m = param_e_1[param_t + 5];
  var var_v = param_e_1[param_t + 6];
  var var_y = param_e_1[param_t + 7];
  var var_k = param_e_1[param_t + 8];
  var var_b = param_e_1[param_t + 9];
  var var__ = param_e_1[param_t + 10];
  var var_T = param_e_1[param_t + 11];
  var var_S = param_e_1[param_t + 12];
  var var_x = param_e_1[param_t + 13];
  var var_w = param_e_1[param_t + 14];
  var var_E = param_e_1[param_t + 15];
  var var_A = var_i_1[0];
  var var_C = var_i_1[1];
  var var_O = var_i_1[2];
  var var_I = var_i_1[3];
  var_A = var_l(var_A, var_C, var_O, var_I, var_a_1, 7, list_s[0]);
  var_I = var_l(var_I, var_A, var_C, var_O, var_c_1, 12, list_s[1]);
  var_O = var_l(var_O, var_I, var_A, var_C, var_p, 17, list_s[2]);
  var_C = var_l(var_C, var_O, var_I, var_A, var_h, 22, list_s[3]);
  var_A = var_l(var_A, var_C, var_O, var_I, var_g, 7, list_s[4]);
  var_I = var_l(var_I, var_A, var_C, var_O, var_m, 12, list_s[5]);
  var_O = var_l(var_O, var_I, var_A, var_C, var_v, 17, list_s[6]);
  var_C = var_l(var_C, var_O, var_I, var_A, var_y, 22, list_s[7]);
  var_A = var_l(var_A, var_C, var_O, var_I, var_k, 7, list_s[8]);
  var_I = var_l(var_I, var_A, var_C, var_O, var_b, 12, list_s[9]);
  var_O = var_l(var_O, var_I, var_A, var_C, var__, 17, list_s[10]);
  var_C = var_l(var_C, var_O, var_I, var_A, var_T, 22, list_s[11]);
  var_A = var_l(var_A, var_C, var_O, var_I, var_S, 7, list_s[12]);
  var_I = var_l(var_I, var_A, var_C, var_O, var_x, 12, list_s[13]);
  var_O = var_l(var_O, var_I, var_A, var_C, var_w, 17, list_s[14]);
  var_A = var_u(var_A, var_C = var_l(var_C, var_O, var_I, var_A, var_E, 22, list_s[15]),
  var_O, var_I, var_c_1, 5, list_s[16]);
  var_I = var_u(var_I, var_A, var_C, var_O, var_v, 9, list_s[17]);
  var_O = var_u(var_O, var_I, var_A, var_C, var_T, 14, list_s[18]);
  var_C = var_u(var_C, var_O, var_I, var_A, var_a_1, 20, list_s[19]);
  var_A = var_u(var_A, var_C, var_O, var_I, var_m, 5, list_s[20]);
  var_I = var_u(var_I, var_A, var_C, var_O, var__, 9, list_s[21]);
  var_O = var_u(var_O, var_I, var_A, var_C, var_E, 14, list_s[22]);
  var_C = var_u(var_C, var_O, var_I, var_A, var_g, 20, list_s[23]);
  var_A = var_u(var_A, var_C, var_O, var_I, var_b, 5, list_s[24]);
  var_I = var_u(var_I, var_A, var_C, var_O, var_w, 9, list_s[25]);
  var_O = var_u(var_O, var_I, var_A, var_C, var_h, 14, list_s[26]);
  var_C = var_u(var_C, var_O, var_I, var_A, var_k, 20, list_s[27]);
  var_A = var_u(var_A, var_C, var_O, var_I, var_x, 5, list_s[28]);
  var_I = var_u(var_I, var_A, var_C, var_O, var_p, 9, list_s[29]);
  var_O = var_u(var_O, var_I, var_A, var_C, var_y, 14, list_s[30]);
  var_A = var_d(var_A, var_C = var_u(var_C, var_O, var_I, var_A, var_S, 20, list_s[31]),
  var_O, var_I, var_m, 4, list_s[32]);
  var_I = var_d(var_I, var_A, var_C, var_O, var_k, 11, list_s[33]);
  var_O = var_d(var_O, var_I, var_A, var_C, var_T, 16, list_s[34]);
  var_C = var_d(var_C, var_O, var_I, var_A, var_w, 23, list_s[35]);
  var_A = var_d(var_A, var_C, var_O, var_I, var_c_1, 4, list_s[36]);
  var_I = var_d(var_I, var_A, var_C, var_O, var_g, 11, list_s[37]);
  var_O = var_d(var_O, var_I, var_A, var_C, var_y, 16, list_s[38]);
  var_C = var_d(var_C, var_O, var_I, var_A, var__, 23, list_s[39]);
  var_A = var_d(var_A, var_C, var_O, var_I, var_x, 4, list_s[40]);
  var_I = var_d(var_I, var_A, var_C, var_O, var_a_1, 11, list_s[41]);
  var_O = var_d(var_O, var_I, var_A, var_C, var_h, 16, list_s[42]);
  var_C = var_d(var_C, var_O, var_I, var_A, var_v, 23, list_s[43]);
  var_A = var_d(var_A, var_C, var_O, var_I, var_b, 4, list_s[44]);
  var_I = var_d(var_I, var_A, var_C, var_O, var_S, 11, list_s[45]);
  var_O = var_d(var_O, var_I, var_A, var_C, var_E, 16, list_s[46]);
  var_A = var_f(var_A, var_C = var_d(var_C, var_O, var_I, var_A, var_p, 23, list_s[47]),
  var_O, var_I, var_a_1, 6, list_s[48]);
  var_I = var_f(var_I, var_A, var_C, var_O, var_y, 10, list_s[49]);
  var_O = var_f(var_O, var_I, var_A, var_C, var_w, 15, list_s[50]);
  var_C = var_f(var_C, var_O, var_I, var_A, var_m, 21, list_s[51]);
  var_A = var_f(var_A, var_C, var_O, var_I, var_S, 6, list_s[52]);
  var_I = var_f(var_I, var_A, var_C, var_O, var_h, 10, list_s[53]);
  var_O = var_f(var_O, var_I, var_A, var_C, var__, 15, list_s[54]);
  var_C = var_f(var_C, var_O, var_I, var_A, var_c_1, 21, list_s[55]);
  var_A = var_f(var_A, var_C, var_O, var_I, var_k, 6, list_s[56]);
  var_I = var_f(var_I, var_A, var_C, var_O, var_E, 10, list_s[57]);
  var_O = var_f(var_O, var_I, var_A, var_C, var_v, 15, list_s[58]);
  var_C = var_f(var_C, var_O, var_I, var_A, var_x, 21, list_s[59]);
  var_A = var_f(var_A, var_C, var_O, var_I, var_g, 6, list_s[60]);
  var_I = var_f(var_I, var_A, var_C, var_O, var_T, 10, list_s[61]);
  var_O = var_f(var_O, var_I, var_A, var_C, var_p, 15, list_s[62]);
  var_C = var_f(var_C, var_O, var_I, var_A, var_b, 21, list_s[63]);
  var_i_1[0] = var_i_1[0] + var_A | 0;
  var_i_1[1] = var_i_1[1] + var_C | 0;
  var_i_1[2] = var_i_1[2] + var_O | 0;
  var_i_1[3] = var_i_1[3] + var_I | 0;
  }
  ,
  _doFinalize: function () {
  var var_t_1 = this._data;
  var var_n_1 = var_t_1.words;
  var var_r_1 = this._nDataBytes * 8;
  var var_o_1 = var_t_1.sigBytes * 8;
  var_n_1[var_o_1 >>> 5] |= 128 << 24 - var_o_1 % 32;
  var var_i_1 = param_e.floor(var_r_1 / 4294967296);
  var var_a_1 = var_r_1;
  var_n_1[15 + (var_o_1 + 64 >>> 9 << 4)] = (var_i_1 << 8 | var_i_1 >>> 24) & 16711935 | (
  var_i_1 << 24 | var_i_1 >>> 8) & -16711936;
  var_n_1[14 + (var_o_1 + 64 >>> 9 << 4)] = (var_a_1 << 8 | var_a_1 >>> 24) & 16711935 | (
  var_a_1 << 24 | var_a_1 >>> 8) & -16711936;
  var_t_1.sigBytes = (var_n_1.length + 1) * 4;
  this._process();
  var var_s = this._hash;
  var var_c_1 = var_s.words;
  for (var num_l = 0;
  num_l < 4;
  num_l++) {
  var var_u_1 = var_c_1[num_l];
  var_c_1[num_l] = (var_u_1 << 8 | var_u_1 >>> 24) & 16711935 | (var_u_1 << 24 | var_u_1 >>> 8) & -16711936;
  }
  return var_s;
  }
  ,
  clone: function () {
  var var_e = var_i.clone.call(this);
  var_e._hash = this._hash.clone();
  return var_e;
  }
  }
  );
  function var_l(param_e_1, param_t, param_n, param_r, param_o, param_i, param_a) {
  var var_s = param_e_1 + (param_t & param_n | ~param_t & param_r) + param_o + param_a;
  return (var_s << param_i | var_s >>> 32 - param_i) + param_t;
  }
  function var_u(param_e_1, param_t, param_n, param_r, param_o, param_i, param_a) {
  var var_s = param_e_1 + (param_t & param_r | param_n & ~param_r) + param_o + param_a;
  return (var_s << param_i | var_s >>> 32 - param_i) + param_t;
  }
  function var_d(param_e_1, param_t, param_n, param_r, param_o, param_i, param_a) {
  var var_s = param_e_1 + (param_t ^ param_n ^ param_r) + param_o + param_a;
  return (var_s << param_i | var_s >>> 32 - param_i) + param_t;
  }
  function var_f(param_e_1, param_t, param_n, param_r, param_o, param_i, param_a) {
  var var_s = param_e_1 + (param_n ^ (param_t | ~param_r)) + param_o + param_a;
  return (var_s << param_i | var_s >>> 32 - param_i) + param_t;
  }
  var_t.MD5 = var_i._createHelper(var_c);
  var_t.HmacMD5 = var_i._createHmacHelper(var_c);
  }
  )(Math);
  moduleObj.exports = var_r.MD5;
  },
  24: function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.d(exportsObj, "a", function () {
  return var_M;
  }
  );
  requireFn.d(exportsObj, "b", function () {
  return var_H;
  }
  );
  var dep_dom_utils = requireFn(0);
  var dep_media_constants = requireFn(1);
  var dep_ast_parser = requireFn(37);
  function var_a(param_e, param_t) {
  var var_n = typeof Symbol != "undefined" && param_e[Symbol.iterator] ||
  param_e["@@iterator"];
  if (!var_n) {
  if (Array.isArray(param_e) || (var_n = function (param_e_1, param_t_1) {
  if (param_e_1) {
  if (typeof param_e_1 == "string") {
  return var_s(param_e_1, param_t_1);
  }
  var var_n_1 = {
  }
  .toString.call(param_e_1).slice(8, -1);
  if (var_n_1 === "Object" && param_e_1.constructor) {
  var_n_1 = param_e_1.constructor.name;
  }
  if (var_n_1 === "Map" || var_n_1 === "Set") {
  return Array.from(param_e_1);
  }
  else if (var_n_1 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
  var_n_1)) {
  return var_s(param_e_1, param_t_1);
  }
  else {
  return undefined;
  }
  }
  }
  (param_e)) || param_t && param_e && typeof param_e.length == "number") {
  if (var_n) {
  param_e = var_n;
  }
  var num_r = 0;
  function var_o() {
  }
  return {
  s: var_o,
  n: function () {
  if (num_r >= param_e.length) {
  return {
  done: true
  };
  }
  else {
  return {
  done: false,
  value: param_e[num_r++]
  };
  }
  }
  ,
  e: function (param_e_1) {
  throw param_e_1;
  }
  ,
  f: var_o
  };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var var_i;
  var flag_a = true;
  var flag_c = false;
  return {
  s: function () {
  var_n = var_n.call(param_e);
  }
  ,
  n: function () {
  var var_e = var_n.next();
  flag_a = var_e.done;
  return var_e;
  }
  ,
  e: function (param_e_1) {
  flag_c = true;
  var_i = param_e_1;
  }
  ,
  f: function () {
  try {
  if (!flag_a && var_n.return != null) {
  var_n.return();
  }
  }
  finally {
  if (flag_c) {
  throw var_i;
  }
  }
  }
  };
  }
  function var_s(param_e, param_t) {
  if (param_t == null || param_t > param_e.length) {
  param_t = param_e.length;
  }
  for (var num_n = 0, var_r = Array(param_t);
  num_n < param_t;
  num_n++) {
  var_r[num_n] = param_e[num_n];
  }
  return var_r;
  }
  var var_c = Symbol("WALK_STOP");
  var var_l = new Set(["AbortController", "AbortSignal", "Array", "ArrayBuffer",
  "AsyncContext", "Atomics", "AudioContext", "BigInt", "BigInt64Array", "BigUint64Array",
  "Blob", "Boolean", "BroadcastChannel", "Buffer", "CanvasRenderingContext2D", "clearImmediate",
  "clearInterval", "clearTimeout", "confirm", "console", "Crypto", "CustomEvent",
  "DataView", "Date", "decodeURI", "decodeURIComponent", "document", "Element", "encodeURI",
  "encodeURIComponent", "Error", "escape", "eval", "Event", "EventTarget", "fetch",
  "File", "FileReader", "Float32Array", "Float64Array", "FormData", "function", "global",
  "globalThis", "hasOwnProperty", "Headers", "History", "HTMLElement", "HTMLCollection",
  "IDBKeyRange", "Infinity", "Int16Array", "Int32Array", "Int8Array", "Intl", "IntersectionObserver",
  "isFinite", "isNaN", "isPrototypeOf", "JSON", "location", "log", "Map", "Math",
  "MediaRecorder", "MediaSource", "MediaStream", "MemberExpression", "MutationObserver",
  "NaN", "navigator", "Node", "NodeList", "Number", "Object", "OfflineAudioContext",
  "parse", "parseFloat", "parseInt", "Performance", "process", "Promise", "prompt",
  "prototype", "Proxy", "ReadableStream", "Reflect", "RegExp", "requestAnimationFrame",
  "requestIdleCallback", "Request", "Response", "ResizeObserver", "Screen", "setImmediate",
  "setInterval", "setTimeout", "SharedArrayBuffer", "SharedWorker", "SourceBuffer",
  "split", "String", "stringify", "structuredClone", "SubtleCrypto", "Symbol", "TextDecoder",
  "TextEncoder", "this", "toString", "TransformStream", "Uint16Array", "Uint32Array",
  "Uint8Array", "Uint8ClampedArray", "undefined", "unescape", "URL", "URLSearchParams",
  "valueOf", "WeakMap", "WeakSet", "WebAssembly", "WebGLRenderingContext", "window",
  "Worker", "WritableStream", "XMLHttpRequest", "alert", "arguments", "atob", "btoa",
  "cancelAnimationFrame", "cancelIdleCallback", "queueMicrotask"]);
  function var_u(param_e, param_t) {
  if (param_e && typeof param_e == "object") {
  for (var list_o = [{
  node: param_e,
  parent: null,
  exit: false
  }
  ], list_i = [], var_a_1 = typeof param_t == "function" ? param_t :
  param_t.enter ?? null, var_s_1 = typeof param_t == "function" ?
  null : param_t.leave ?? null, flag_l = false;
  !flag_l && list_o.length > 0;
  ) {
  var var_u_1 = list_o.pop();
  var var_d_1 = var_u_1.node;
  var var_f_1 = var_u_1.parent;
  if (var_u_1.exit) {
  list_i.pop();
  if (var_s_1 && var_s_1(var_d_1, var_f_1, list_i) === var_c) {
  flag_l = true;
  }
  }
  else if (var_d_1 && typeof var_d_1.type == "string") {
  var var_p_1 = var_a_1 ? var_a_1(var_d_1, var_f_1, list_i) :
  undefined;
  if (var_p_1 !== var_c) {
  if (var_p_1 !== true) {
  list_o.push({
  node: var_d_1,
  parent: var_f_1,
  exit: true
  }
  );
  list_i.push(var_d_1);
  for (var var_h_1 in var_d_1) {
  if (var_h_1 !== "loc" && var_h_1 !== "range" && var_h_1 !== "start" &&
  var_h_1 !== "end" && Object.prototype.hasOwnProperty.call(var_d_1, var_h_1)) {
  var var_g_1 = var_d_1[var_h_1];
  if (var_g_1) {
  if (Array.isArray(var_g_1)) {
  for (var var_m_1 = var_g_1.length - 1;
  var_m_1 >= 0;
  var_m_1--) {
  var var_v_1 = var_g_1[var_m_1];
  if (var_v_1 && typeof var_v_1.type == "string") {
  list_o.push({
  node: var_v_1,
  parent: var_d_1,
  exit: false
  }
  );
  }
  }
  }
  else if (typeof var_g_1 == "object" && typeof var_g_1.type == "string") {
  list_o.push({
  node: var_g_1,
  parent: var_d_1,
  exit: false
  }
  );
  }
  }
  }
  }
  }
  }
  else {
  flag_l = true;
  }
  }
  }
  }
  }
  function var_d(param_e, param_t) {
  var var_n = function (param_e_1) {
  if (param_e_1) {
  if (Array.isArray(param_e_1.range)) {
  return param_e_1.range;
  }
  else if (typeof param_e_1.start == "number" && typeof param_e_1.end == "number") {
  return [param_e_1.start, param_e_1.end];
  }
  else {
  return null;
  }
  }
  else {
  return null;
  }
  }
  (param_e);
  if (var_n) {
  return param_t.slice(var_n[0], var_n[1]);
  }
  else {
  return null;
  }
  }
  function var_f(param_e, param_t) {
  if (param_e.type !== "MemberExpression") {
  return null;
  }
  var list_n = [];
  for (var var_r = param_e;
  var_r && var_r.type === "MemberExpression";
  ) {
  var var_o = var_r;
  var var_i = var_o.property;
  if (!var_i) {
  return null;
  }
  if (var_o.computed) {
  var var_a_1 = var_d(var_i, param_t);
  if (!var_a_1) {
  return null;
  }
  list_n.unshift(`[${var_a_1.trim()}
  ]`);
  }
  else {
  if (var_i.type !== "Identifier") {
  return null;
  }
  list_n.unshift("." + var_i.name);
  }
  var_r = var_o.object;
  }
  var var_s_1 = null;
  if ((var_r == null ? undefined : var_r.type) === "Identifier") {
  var_s_1 = var_r.name;
  }
  else if ((var_r == null ? undefined : var_r.type) === "ThisExpression") {
  var_s_1 = "this";
  }
  if (var_s_1) {
  return var_s_1 + list_n.join("");
  }
  else {
  return null;
  }
  }
  function var_p(param_e, param_t) {
  for (var var_n = param_e.object;
  var_n && var_n.type === "MemberExpression";
  ) {
  var var_r = var_f(var_n, param_t);
  if (var_r) {
  return var_r;
  }
  var_n = var_n.object;
  }
  if ((var_n == null ? undefined : var_n.type) === "Identifier") {
  return var_n.name;
  }
  else if ((var_n == null ? undefined : var_n.type) === "ThisExpression") {
  return "this";
  }
  else {
  return null;
  }
  }
  function var_h(param_e, param_t, param_n) {
  if (param_n.type === "CallExpression" && param_n.callee.type === "Identifier" &&
  param_e.declaredVariables.has(param_n.callee.name)) {
  return var_g(param_t, param_n.callee.name, var_m(param_e, param_n.arguments));
  }
  if (param_n.type === "VariableDeclarator" && param_n.init?.type === "FunctionExpression" &&
  param_n.id.type === "Identifier") {
  return var_g(param_t, param_n.id.name, var_m(param_e, param_n.init.params));
  }
  if (param_n.type === "NewExpression" && param_n.callee.type === "MemberExpression" &&
  param_n.callee.object.type === "Identifier") {
  var var_o = var_f(param_n.callee, param_e.getSource());
  if (!var_o) {
  return;
  }
  return var_g(param_t, var_o, var_m(param_e, param_n.arguments), true);
  }
  }
  function var_g(param_e, param_t, param_n, param_r = false) {
  return [`  function ${param_e}
  (${param_n.join(", ")}
  ) {`, `    return ${param_r ? "new " : ""}
  ${param_t}
  (${param_n.join(", ")}
  );`, "  }"].join("\n");
  }
  function var_m(param_e, param_t) {
  var var_n;
  var list_r = [];
  var var_o = var_a(param_t);
  try {
  for (var_o.s();
  !(var_n = var_o.n()).done;
  ) {
  var var_i = var_n.value;
  if (var_i.type === "Identifier" && param_e.declaredVariables.has(var_i.name)) {
  list_r.push(var_i.name);
  }
  else if (var_i.type !== "Literal" || typeof var_i.value != "string" &&
  typeof var_i.value != "number") {
  if (var_i.type === "UnaryExpression") {
  var var_s_1 = var_d(var_i, param_e.getSource());
  if (var_s_1) {
  list_r.push(var_s_1.trim());
  }
  }
  else if (var_i.type === "AssignmentPattern" && var_i.left.type === "Identifier") {
  list_r.push(var_i.left.name);
  }
  else if (var_i.type === "Identifier") {
  list_r.push(var_i.name);
  }
  else if (!list_r.includes("input")) {
  list_r.push("input");
  }
  }
  else {
  list_r.push(JSON.stringify(var_i.value));
  }
  }
  }
  catch (var_e) {
  var_o.e(var_e);
  }
  finally {
  var_o.f();
  }
  return list_r;
  }
  function var_v(param_e, param_t) {
  var var_n = typeof Symbol != "undefined" && param_e[Symbol.iterator] ||
  param_e["@@iterator"];
  if (!var_n) {
  if (Array.isArray(param_e) || (var_n = function (param_e_1, param_t_1) {
  if (param_e_1) {
  if (typeof param_e_1 == "string") {
  return var_y(param_e_1, param_t_1);
  }
  var var_n_1 = {
  }
  .toString.call(param_e_1).slice(8, -1);
  if (var_n_1 === "Object" && param_e_1.constructor) {
  var_n_1 = param_e_1.constructor.name;
  }
  if (var_n_1 === "Map" || var_n_1 === "Set") {
  return Array.from(param_e_1);
  }
  else if (var_n_1 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
  var_n_1)) {
  return var_y(param_e_1, param_t_1);
  }
  else {
  return undefined;
  }
  }
  }
  (param_e)) || param_t && param_e && typeof param_e.length == "number") {
  if (var_n) {
  param_e = var_n;
  }
  var num_r = 0;
  function var_o() {
  }
  return {
  s: var_o,
  n: function () {
  if (num_r >= param_e.length) {
  return {
  done: true
  };
  }
  else {
  return {
  done: false,
  value: param_e[num_r++]
  };
  }
  }
  ,
  e: function (param_e_1) {
  throw param_e_1;
  }
  ,
  f: var_o
  };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var var_i;
  var flag_a = true;
  var flag_s = false;
  return {
  s: function () {
  var_n = var_n.call(param_e);
  }
  ,
  n: function () {
  var var_e = var_n.next();
  flag_a = var_e.done;
  return var_e;
  }
  ,
  e: function (param_e_1) {
  flag_s = true;
  var_i = param_e_1;
  }
  ,
  f: function () {
  try {
  if (!flag_a && var_n.return != null) {
  var_n.return();
  }
  }
  finally {
  if (flag_s) {
  throw var_i;
  }
  }
  }
  };
  }
  function var_y(param_e, param_t) {
  if (param_t == null || param_t > param_e.length) {
  param_t = param_e.length;
  }
  for (var num_n = 0, var_r = Array(param_t);
  num_n < param_t;
  num_n++) {
  var_r[num_n] = param_e[num_n];
  }
  return var_r;
  }
  class var_k {
  constructor(param_e, param_t = {
  }
  ) {
  this.dependentsTracker = new Map();
  this.pendingPrototypeAliasBinding = null;
  this.iifeParamName = null;
  this.declaredVariables = new Map();
  this.source = param_e;
  var var_n = param_t.extractions ? Array.isArray(param_t.extractions) ?
  param_t.extractions : [param_t.extractions] : [];
  this.extractionStates = var_n.map(param_e_1 => ({
  config: Object.assign({
  collectDependencies: true,
  stopWhenReady: true
  }
  , param_e_1),
  dependencies: new Set(),
  dependents: new Set(),
  ready: false
  }
  ));
  this.hasExtractions = this.extractionStates.length > 0;
  this.programAst = Object(dep_ast_parser.parseScript)(param_e, {
  ranges: true,
  loc: false,
  module: false
  }
  );
  this.analyzeAst();
  }
  analyzeAst() {
  var var_n;
  var var_r;
  var var_o;
  var var_i = var_v(this.programAst.body);
  try {
  for (var_i.s();
  !(var_o = var_i.n()).done;
  ) {
  var var_a_1 = var_o.value;
  if (var_a_1.type === "ExpressionStatement" && var_a_1.expression.type === "CallExpression") {
  var var_s_1 = var_a_1.expression;
  if (var_s_1.callee.type === "FunctionExpression") {
  var var_c_1 = var_s_1.callee;
  var var_l_1 = var_c_1.params.length > 0 ? var_c_1.params[0] :
  null;
  if (!this.iifeParamName && (var_l_1 == null ? undefined : var_l_1.type) === "Identifier") {
  this.iifeParamName = var_l_1.name;
  }
  if (var_c_1.body?.type === "BlockStatement") {
  var_r = var_c_1.body;
  break;
  }
  }
  }
  }
  }
  catch (var_e) {
  var_i.e(var_e);
  }
  finally {
  var_i.f();
  }
  if (var_r) {
  var var_u_1;
  var var_d_1 = var_v(var_r.body);
  try {
  for (var_d_1.s();
  !(var_u_1 = var_d_1.n()).done;
  ) {
  var var_h_1 = var_u_1.value;
  switch (var_h_1.type) {
  case "ExpressionStatement":
  var var_g_1 = var_h_1.expression;
  if (var_g_1.type !== "AssignmentExpression") {
  continue;
  }
  var var_m_1 = var_g_1.left;
  var var_y_1 = var_g_1.right;
  if (var_y_1.type === "MemberExpression" && !var_y_1.computed &&
  var_y_1.property.type === "Identifier" && var_y_1.property.name === "prototype") {
  var var_k_1 = var_f(var_y_1, this.source);
  var var_b_1 = var_m_1.type === "Identifier" ? var_m_1.name :
  var_f(var_m_1, this.source);
  if (var_k_1) {
  var var___1 = this.declaredVariables.get(var_k_1.replace(".prototype", ""));
  if (var_b_1 && var___1) {
  var var_T_1 = new Set();
  var var_S_1 = var_b_1 + ".";
  this.pendingPrototypeAliasBinding = [var_S_1, var___1];
  var___1.prototypeAliases.set(var_S_1, var_T_1);
  }
  }
  }
  if (var_m_1.type === "Identifier") {
  var var_x_1 = this.declaredVariables.get(var_m_1.name);
  if (!var_x_1) {
  continue;
  }
  var_x_1.node.init = var_y_1;
  if (this.needsDependencyAnalysis(var_y_1)) {
  var_x_1.dependencies = this.findDependencies(var_g_1.right, var_m_1.name);
  }
  if (this.onMatch(var_x_1.node, var_x_1)) {
  return;
  }
  }
  else if (var_g_1.left.type === "MemberExpression") {
  var var_w_1 = var_f(var_g_1.left, this.source);
  var var_E_1 = this.pendingPrototypeAliasBinding?.[0];
  if (var_E_1 && ((var_w_1 == null ? undefined : var_w_1.includes(var_E_1)) ||
  var_w_1 === var_E_1.slice(0, -1))) {
  var var_A_1 = this.declaredVariables.get(((var_n = this.pendingPrototypeAliasBinding) === null ||
  var_n === undefined ? undefined : var_n[1].name) || "");
  if (var_A_1) {
  var var_C_1 = var_A_1.prototypeAliases.get(var_E_1);
  var obj_O = {
  name: var_w_1,
  node: var_h_1,
  dependents: this.dependentsTracker.get(var_w_1) || new Set(),
  predeclared: false,
  prototypeAliases: new Map(),
  dependencies: this.findDependencies(var_y_1, var_w_1)
  };
  if (var_C_1) {
  var_C_1.add(obj_O);
  }
  else {
  var_A_1.prototypeAliases.set(var_E_1, new Set([obj_O]));
  }
  }
  }
  else {
  this.pendingPrototypeAliasBinding = null;
  }
  if (!var_w_1 || this.declaredVariables.has(var_w_1)) {
  continue;
  }
  var obj_I = {
  name: var_w_1,
  node: var_h_1,
  dependents: this.dependentsTracker.get(var_w_1) || new Set(),
  predeclared: false,
  prototypeAliases: new Map(),
  dependencies: this.findDependencies(var_y_1, var_w_1)
  };
  var var_N_1 = var_p(var_g_1.left, this.source);
  if (var_N_1 && var_N_1 !== var_w_1 && !var_N_1.startsWith("this.")) {
  obj_I.dependencies.add(var_N_1.replace(".prototype", ""));
  }
  if (this.dependentsTracker.has(var_w_1)) {
  this.dependentsTracker.delete(var_w_1);
  }
  this.declaredVariables.set(var_w_1, obj_I);
  if (this.onMatch(var_h_1, obj_I)) {
  return;
  }
  }
  break;
  case "VariableDeclaration":
  this.pendingPrototypeAliasBinding = null;
  var var_D_1;
  var var_R_1 = var_v(var_h_1.declarations);
  try {
  for (var_R_1.s();
  !(var_D_1 = var_R_1.n()).done;
  ) {
  var var_L_1 = var_D_1.value;
  if (var_L_1.id.type === "Identifier") {
  var obj_P = {
  name: var_L_1.id.name,
  node: var_L_1,
  dependents: this.dependentsTracker.get(var_L_1.id.name) ||
  new Set(),
  prototypeAliases: new Map(),
  dependencies: new Set(),
  predeclared: false
  };
  var var_B_1 = var_L_1.init;
  if (var_B_1 || var_h_1.kind !== "var") {
  if (var_B_1 && this.needsDependencyAnalysis(var_B_1)) {
  obj_P.dependencies = this.findDependencies(var_B_1, obj_P.name);
  }
  }
  else {
  obj_P.predeclared = true;
  }
  if (this.dependentsTracker.has(obj_P.name)) {
  this.dependentsTracker.delete(obj_P.name);
  }
  this.declaredVariables.set(obj_P.name, obj_P);
  if (this.onMatch(var_L_1, obj_P)) {
  return;
  }
  }
  }
  }
  catch (var_e) {
  var_R_1.e(var_e);
  }
  finally {
  var_R_1.f();
  }
  }
  }
  }
  catch (var_e) {
  var_d_1.e(var_e);
  }
  finally {
  var_d_1.f();
  }
  }
  }
  needsDependencyAnalysis(param_e) {
  if (!param_e) {
  return false;
  }
  switch (param_e.type) {
  case "FunctionExpression":
  case "ArrowFunctionExpression":
  case "ArrayExpression":
  case "LogicalExpression":
  case "CallExpression":
  case "NewExpression":
  case "MemberExpression":
  case "BinaryExpression":
  case "ConditionalExpression":
  case "ObjectExpression":
  case "SequenceExpression":
  case "ClassExpression":
  case "Identifier":
  return true;
  default:
  return false;
  }
  }
  onMatch(param_e, param_t) {
  if (!this.hasExtractions) {
  return false;
  }
  var var_n;
  var flag_r = false;
  var flag_o = false;
  var var_i = var_v(this.extractionStates);
  try {
  for (var_i.s();
  !(var_n = var_i.n()).done;
  ) {
  var var_a_1 = var_n.value;
  if (var_a_1.node) {
  if (var_a_1.node !== param_e && (this.refreshExtractionState(var_a_1), this.shouldStopTraversal(
  ))) {
  return true;
  }
  }
  else {
  if (param_e.type === "VariableDeclarator" && !param_e.init) {
  continue;
  }
  if (!(flag_o = var_a_1.config.match(param_e))) {
  continue;
  }
  var_a_1.node = param_e;
  flag_r = true;
  if (param_t) {
  var_a_1.metadata = param_t;
  var_a_1.dependents = param_t.dependents;
  var_a_1.dependencies = param_t.dependencies;
  if (typeof flag_o != "boolean") {
  var_a_1.matchContext = flag_o;
  }
  }
  this.refreshExtractionState(var_a_1);
  }
  }
  }
  catch (var_e) {
  var_i.e(var_e);
  }
  finally {
  var_i.f();
  }
  return !!flag_r && this.shouldStopTraversal();
  }
  refreshExtractionState(param_e) {
  if (param_e.node) {
  if (param_e.config.collectDependencies !== false) {
  if (param_e.metadata) {
  param_e.ready = this.areDependenciesResolved(param_e.dependencies);
  }
  else {
  param_e.ready = false;
  }
  }
  else {
  param_e.ready = true;
  }
  }
  else {
  param_e.ready = false;
  }
  }
  shouldStopTraversal() {
  if (!this.hasExtractions) {
  return false;
  }
  var var_e;
  var flag_t = false;
  var var_n = var_v(this.extractionStates);
  try {
  for (var_n.s();
  !(var_e = var_n.n()).done;
  ) {
  var var_r = var_e.value;
  if (var_r.config.stopWhenReady !== false) {
  flag_t = true;
  if (!var_r.node) {
  return false;
  }
  if (!var_r.ready) {
  return false;
  }
  }
  }
  }
  catch (var_e_1) {
  var_n.e(var_e_1);
  }
  finally {
  var_n.f();
  }
  return flag_t;
  }
  areDependenciesResolved(param_e, param_t = new Set()) {
  if (!param_e || param_e.size === 0) {
  return true;
  }
  var var_n;
  var var_r = var_v(param_e);
  try {
  for (var_r.s();
  !(var_n = var_r.n()).done;
  ) {
  var var_o = var_n.value;
  if (var_o && !var_l.has(var_o) && var_o !== this.iifeParamName &&
  !param_t.has(var_o)) {
  var var_i = this.declaredVariables.get(var_o);
  if (!var_i) {
  return false;
  }
  param_t.add(var_o);
  if (!this.areDependenciesResolved(var_i.dependencies, param_t)) {
  return false;
  }
  }
  }
  }
  catch (var_e) {
  var_r.e(var_e);
  }
  finally {
  var_r.f();
  }
  return true;
  }
  findDependencies(param_e, param_t) {
  var var_r = new Set();
  if (!param_e) {
  return var_r;
  }
  var list_o = [{
  names: new Set(),
  type: "block"
  }
  ];
  var fn_i = () => list_o[list_o.length - 1];
  var fn_a = param_e_1 => {
  for (var var_t = list_o.length - 1;
  var_t >= 0;
  var_t--) {
  if (list_o[var_t].names.has(param_e_1)) {
  return true;
  }
  }
  return false;
  };
  var var_s_1 = "id" in param_e && (param_e == null ? undefined :
  param_e.id)?.type === "Identifier" ? param_e.id.name : undefined;
  var fn_c = (param_e_1, param_t_1) => {
  if (param_e_1) {
  switch (param_e_1.type) {
  case "Identifier":
  param_t_1.add(param_e_1.name);
  break;
  case "ObjectPattern":
  var var_n;
  var var_r_1 = var_v(param_e_1.properties);
  try {
  for (var_r_1.s();
  !(var_n = var_r_1.n()).done;
  ) {
  var var_o = var_n.value;
  if (var_o.type === "RestElement") {
  fn_c(var_o.argument, param_t_1);
  }
  else if (var_o.type === "Property") {
  fn_c(var_o.value, param_t_1);
  }
  }
  }
  catch (var_e) {
  var_r_1.e(var_e);
  }
  finally {
  var_r_1.f();
  }
  break;
  case "ArrayPattern":
  var var_i;
  var var_a_1 = var_v(param_e_1.elements);
  try {
  for (var_a_1.s();
  !(var_i = var_a_1.n()).done;
  ) {
  var var_s_2 = var_i.value;
  if (var_s_2) {
  fn_c(var_s_2, param_t_1);
  }
  }
  }
  catch (var_e) {
  var_a_1.e(var_e);
  }
  finally {
  var_a_1.f();
  }
  break;
  case "RestElement":
  fn_c(param_e_1.argument, param_t_1);
  break;
  case "AssignmentPattern":
  fn_c(param_e_1.left, param_t_1);
  }
  }
  };
  var_u(param_e, {
  enter: (param_e_1, param_n) => {
  var var_d_1;
  switch (param_e_1.type) {
  case "FunctionDeclaration":
  case "FunctionExpression":
  case "ArrowFunctionExpression":
  var var_g_1 = param_e_1.type === "FunctionDeclaration";
  var var_m_1 = "id" in param_e_1 ? param_e_1.id?.name : undefined;
  if (var_g_1 && var_m_1) {
  fn_i().names.add(var_m_1);
  }
  var obj_y = {
  names: new Set(),
  type: "function"
  };
  if (param_e_1.type === "FunctionExpression" && var_m_1) {
  obj_y.names.add(var_m_1);
  }
  ((param_e_2, param_t_1) => {
  if (param_e_2 == null ? undefined : param_e_2.params) {
  var var_n;
  var var_r_1 = var_v(param_e_2.params);
  try {
  for (var_r_1.s();
  !(var_n = var_r_1.n()).done;
  ) {
  var var_o = var_n.value;
  fn_c(var_o, param_t_1);
  }
  }
  catch (var_e) {
  var_r_1.e(var_e);
  }
  finally {
  var_r_1.f();
  }
  }
  }
  )(param_e_1, obj_y.names);
  list_o.push(obj_y);
  break;
  case "BlockStatement":
  list_o.push({
  names: new Set(),
  type: "block"
  }
  );
  break;
  case "CatchClause":
  var var_k_1 = new Set();
  if (param_e_1.param) {
  fn_c(param_e_1.param, var_k_1);
  }
  list_o.push({
  names: var_k_1,
  type: "block"
  }
  );
  break;
  case "VariableDeclaration":
  var var_b_1;
  var var___1 = param_e_1.kind === "var" && (var_d_1 = function (param_e_2, param_t_1) {
  for (var var_n = param_e_2.length - 1;
  var_n >= 0;
  var_n--) {
  var var_r_1 = param_e_2[var_n];
  if (param_t_1(var_r_1, var_n, param_e_2)) {
  return var_r_1;
  }
  }
  }
  (list_o, param_e_2 => param_e_2.type === "function")) !== null &&
  var_d_1 !== undefined ? var_d_1 : fn_i();
  var var_T_1 = var_v(param_e_1.declarations);
  try {
  for (var_T_1.s();
  !(var_b_1 = var_T_1.n()).done;
  ) {
  var var_S_1 = var_b_1.value;
  fn_c(var_S_1.id, var___1.names);
  }
  }
  catch (var_e) {
  var_T_1.e(var_e);
  }
  finally {
  var_T_1.f();
  }
  break;
  case "ClassDeclaration":
  if (param_e_1.id?.name) {
  fn_i().names.add(param_e_1.id.name);
  }
  break;
  case "LabeledStatement":
  if (param_e_1.label?.type === "Identifier") {
  fn_i().names.add(param_e_1.label.name);
  }
  break;
  case "Identifier":
  if (param_e_1.name === var_s_1) {
  return;
  }
  if ((param_n == null ? undefined : param_n.type) === "Property" &&
  param_n.key === param_e_1 && !param_n.computed) {
  return;
  }
  if ((param_n == null ? undefined : param_n.type) === "MethodDefinition" &&
  param_n.key === param_e_1 && !param_n.computed) {
  return;
  }
  if ((param_n == null ? undefined : param_n.type) === "MemberExpression" &&
  param_n.property === param_e_1 && !param_n.computed) {
  if (param_n.object.type === "ThisExpression") {
  return;
  }
  var var_x_1 = var_f(param_n, this.source);
  if (!var_x_1) {
  return;
  }
  var var_w_1 = this.declaredVariables.get(var_x_1);
  if (var_w_1) {
  var_w_1.dependents.add(param_t);
  var_r.add(var_x_1);
  }
  else if (param_n.object.type === "Identifier") {
  var var_E_1 = param_n.object.name;
  var var_A_1 = this.declaredVariables.get(var_E_1);
  if ((var_A_1 || var_E_1 === this.iifeParamName) && !fn_a(var_E_1) &&
  !var_l.has(var_E_1)) {
  if (var_A_1 != null) {
  var_A_1.dependents.add(param_t);
  }
  var_r.add(var_x_1);
  var var_C_1 = this.dependentsTracker.get(var_x_1);
  if (var_C_1) {
  var_C_1.add(param_t);
  }
  else {
  this.dependentsTracker.set(var_x_1, new Set([param_t]));
  }
  }
  }
  return;
  }
  if ((param_n == null ? undefined : param_n.type) === "MetaProperty") {
  return;
  }
  if (fn_a(param_e_1.name) || var_l.has(param_e_1.name)) {
  return;
  }
  var_r.add(param_e_1.name);
  var var_O_1 = this.declaredVariables.get(param_e_1.name);
  if (var_O_1) {
  var_O_1.dependents.add(param_t);
  }
  else {
  var var_I_1 = this.dependentsTracker.get(param_e_1.name);
  if (var_I_1) {
  var_I_1.add(param_t);
  }
  else {
  this.dependentsTracker.set(param_e_1.name, new Set([param_t]));
  }
  }
  break;
  case "ForStatement":
  case "ForInStatement":
  case "ForOfStatement":
  list_o.push({
  names: new Set(),
  type: "block"
  }
  );
  }
  }
  ,
  leave: param_e_1 => {
  switch (param_e_1.type) {
  case "FunctionDeclaration":
  case "FunctionExpression":
  case "ArrowFunctionExpression":
  case "BlockStatement":
  case "CatchClause":
  case "ForStatement":
  case "ForInStatement":
  case "ForOfStatement":
  if (list_o.length > 1) {
  list_o.pop();
  }
  }
  }
  }
  );
  return var_r;
  }
  getExtractedMatches() {
  return this.extractionStates.filter(param_e => !!param_e.node);
  }
  getSource() {
  return this.source;
  }
  }
  function var_b(param_e, param_t) {
  return function (param_e_1) {
  if (Array.isArray(param_e_1)) {
  return param_e_1;
  }
  }
  (param_e) || function (param_e_1, param_t_1) {
  var var_n = param_e_1 == null ? null : typeof Symbol != "undefined" &&
  param_e_1[Symbol.iterator] || param_e_1["@@iterator"];
  if (var_n != null) {
  var var_r;
  var var_o;
  var var_i;
  var var_a_1;
  var list_s = [];
  var flag_c = true;
  var flag_l = false;
  try {
  var_i = (var_n = var_n.call(param_e_1)).next;
  if (param_t_1 === 0) {
  if (Object(var_n) !== var_n) {
  return;
  }
  flag_c = false;
  }
  else {
  for (;
  !(flag_c = (var_r = var_i.call(var_n)).done) && (list_s.push(var_r.value), list_s.length !== param_t_1);
  flag_c = true);
  }
  }
  catch (var_e) {
  flag_l = true;
  var_o = var_e;
  }
  finally {
  try {
  if (!flag_c && var_n.return != null && (var_a_1 = var_n.return(), Object(var_a_1) !== var_a_1)) {
  return;
  }
  }
  finally {
  if (flag_l) {
  throw var_o;
  }
  }
  }
  return list_s;
  }
  }
  (param_e, param_t) || var_T(param_e, param_t) || function () {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  ();
  }
  function var__(param_e, param_t) {
  var var_n = typeof Symbol != "undefined" && param_e[Symbol.iterator] ||
  param_e["@@iterator"];
  if (!var_n) {
  if (Array.isArray(param_e) || (var_n = var_T(param_e)) || param_t &&
  param_e && typeof param_e.length == "number") {
  if (var_n) {
  param_e = var_n;
  }
  var num_r = 0;
  function var_o() {
  }
  return {
  s: var_o,
  n: function () {
  if (num_r >= param_e.length) {
  return {
  done: true
  };
  }
  else {
  return {
  done: false,
  value: param_e[num_r++]
  };
  }
  }
  ,
  e: function (param_e_1) {
  throw param_e_1;
  }
  ,
  f: var_o
  };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var var_i;
  var flag_a = true;
  var flag_s = false;
  return {
  s: function () {
  var_n = var_n.call(param_e);
  }
  ,
  n: function () {
  var var_e = var_n.next();
  flag_a = var_e.done;
  return var_e;
  }
  ,
  e: function (param_e_1) {
  flag_s = true;
  var_i = param_e_1;
  }
  ,
  f: function () {
  try {
  if (!flag_a && var_n.return != null) {
  var_n.return();
  }
  }
  finally {
  if (flag_s) {
  throw var_i;
  }
  }
  }
  };
  }
  function var_T(param_e, param_t) {
  if (param_e) {
  if (typeof param_e == "string") {
  return var_S(param_e, param_t);
  }
  var var_n = {
  }
  .toString.call(param_e).slice(8, -1);
  if (var_n === "Object" && param_e.constructor) {
  var_n = param_e.constructor.name;
  }
  if (var_n === "Map" || var_n === "Set") {
  return Array.from(param_e);
  }
  else if (var_n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
  var_n)) {
  return var_S(param_e, param_t);
  }
  else {
  return undefined;
  }
  }
  }
  function var_S(param_e, param_t) {
  if (param_t == null || param_t > param_e.length) {
  param_t = param_e.length;
  }
  for (var num_n = 0, var_r = Array(param_t);
  num_n < param_t;
  num_n++) {
  var_r[num_n] = param_e[num_n];
  }
  return var_r;
  }
  class var_x {
  constructor(param_e) {
  this.analyzer = param_e;
  }
  areSafeArgs(param_e, param_t = "strict") {
  return (param_e ?? []).every(param_e_1 => !!param_e_1 && param_e_1.type !== "SpreadElement" &&
  this.isSafeInitializer(param_e_1, param_t));
  }
  isSafeInitializer(param_e) {
  var var_t;
  var var_n = arguments.length > 1 && arguments[1] !== undefined ?
  arguments[1] : "strict";
  if (!param_e) {
  return true;
  }
  switch (param_e.type) {
  case "ClassExpression":
  return true;
  case "Literal":
  var var_r = param_e;
  return typeof var_r.value == "string" || typeof var_r.value == "number" ||
  typeof var_r.value == "boolean" || var_r.value === null ||
  Boolean(var_r.regex);
  case "TemplateLiteral":
  return param_e.expressions.every(param_e_1 => this.isSafeInitializer(param_e_1,
  var_n));
  case "ArrayExpression":
  return param_e.elements.every(param_e_1 => !param_e_1 || param_e_1.type !== "SpreadElement" &&
  this.isSafeInitializer(param_e_1, var_n));
  case "ObjectExpression":
  return param_e.properties.every(param_e_1 => {
  if (param_e_1.type !== "Property") {
  return false;
  }
  if (param_e_1.computed) {
  return false;
  }
  if (param_e_1.kind !== "init") {
  return false;
  }
  var var_t_1 = param_e_1.value;
  return !!var_t_1 && (var_t_1.type === "FunctionExpression" ||
  var_t_1.type === "ArrowFunctionExpression" || var_t_1.type === "Literal");
  }
  );
  case "CallExpression":
  if (param_e.callee.type === "Identifier" && var_l.has(param_e.callee.name)) {
  return this.areSafeArgs(param_e.arguments, var_n);
  }
  if (param_e.callee.type === "MemberExpression") {
  if (!this.isSafeInitializer(param_e.callee.object, var_n)) {
  return false;
  }
  if (var_n === "strict") {
  var var_o = param_e.callee.property.type === "Identifier" ?
  param_e.callee.property.name : "";
  if (param_e.callee.computed || !var_l.has(var_o)) {
  return false;
  }
  }
  return this.areSafeArgs(param_e.arguments, var_n);
  }
  return false;
  case "NewExpression":
  if (param_e.callee.type === "Identifier") {
  if (var_l.has(param_e.callee.name)) {
  return this.areSafeArgs(param_e.arguments, var_n);
  }
  if (var_n === "loose") {
  return this.areSafeArgs(param_e.arguments, var_n);
  }
  }
  return false;
  case "UnaryExpression":
  return this.isSafeInitializer(param_e.argument, var_n);
  case "FunctionExpression":
  case "ArrowFunctionExpression":
  case "Identifier":
  return true;
  case "MemberExpression":
  if (var_n === "loose") {
  return (!param_e.computed || !!this.isSafeInitializer(param_e.property, var_n)) &&
  this.isSafeInitializer(param_e.object, var_n);
  }
  else {
  return !param_e.computed && param_e.property.type === "Identifier" &&
  param_e.property.name === "prototype";
  }
  case "LogicalExpression":
  case "BinaryExpression":
  return this.isSafeInitializer(param_e.left, var_n) && this.isSafeInitializer(param_e.right,
  var_n);
  case "ConditionalExpression":
  return var_n === "loose" && this.isSafeInitializer(param_e.test, var_n) &&
  this.isSafeInitializer(param_e.consequent, var_n) && this.isSafeInitializer(param_e.alternate,
  var_n);
  case "SequenceExpression":
  return var_n === "loose" && param_e.expressions.every(param_e_1 => this.isSafeInitializer(
  param_e_1, var_n));
  case "AssignmentExpression":
  if (param_e.left.type !== "MemberExpression" || param_e.left.computed) {
  if (param_e.left.type === "Identifier" && this.analyzer.declaredVariables.has(
  param_e.left.name)) {
  return this.isSafeInitializer(param_e.right, var_n);
  }
  }
  else {
  var var_i = param_e.left.object;
  if (var_i.type === "Identifier" && ((var_t = this.analyzer.declaredVariables.get(
  var_i.name)) === null || var_t === undefined ? undefined :
  var_t.node.init) !== undefined) {
  return this.isSafeInitializer(param_e.right, var_n);
  }
  }
  return false;
  default:
  return false;
  }
  }
  getInitializerFallback(param_e) {
  switch (param_e == null ? undefined : param_e.type) {
  case "ObjectExpression":
  case "NewExpression":
  case "MemberExpression":
  case "LogicalExpression":
  return "{}";
  case "ArrayExpression":
  return "[]";
  default:
  return "undefined";
  }
  }
  renderNode(param_e, param_t) {
  var var_n;
  var var_r;
  var var_o;
  var var_i = arguments.length > 2 && arguments[2] !== undefined ?
  arguments[2] : {
  };
  var var_a_1 = this.analyzer.getSource();
  var var_s_1 = this.analyzer.declaredVariables;
  var var_c_1 = var_i.disallowSideEffectInitializers;
  var var_l_1 = typeof var_c_1 == "object" && var_c_1 !== null &&
  (var_n = var_c_1.mode) !== null && var_n !== undefined ? var_n :
  "strict";
  var var_u_1 = Boolean(var_c_1);
  var var_p_1 = param_e.type === "AssignmentExpression" ? param_e :
  param_e.type === "ExpressionStatement" && param_e.expression.type === "AssignmentExpression" ?
  param_e.expression : null;
  var var_h_1 = var_p_1 && var_p_1.operator === "=" ? var_p_1.right :
  param_e.type === "VariableDeclarator" ? param_e.init : null;
  var var_g_1 = var_u_1 && var_h_1 && !this.isSafeInitializer(var_h_1, var_l_1);
  var var_m_1 = this.getInitializerFallback(var_h_1);
  var var_v_1 = var_m_1;
  if (!var_g_1 && var_h_1) {
  if (param_t || var_h_1.type !== "Identifier" || var_s_1.has(var_h_1.name)) {
  var var_y_1 = var_p_1 == null ? undefined : var_p_1.left;
  if (((var_h_1 == null ? undefined : var_h_1.type) !== "MemberExpression" ||
  !!var_h_1.computed || var_h_1.property.type !== "Identifier" ||
  var_h_1.property.name !== "prototype") && (var_y_1 == null ?
  undefined : var_y_1.type) === "MemberExpression" && var_h_1 &&
  var_u_1 && var_y_1.object.type === "Identifier" && var_h_1.type !== "FunctionExpression" &&
  var_h_1.type !== "ArrowFunctionExpression" && var_h_1.type !== "LogicalExpression" &&
  var_h_1.type !== "ClassExpression") {
  return `  // Skipped ${var_f(var_y_1, var_a_1)}
   assignment.`;
  }
  var_v_1 = ((var_r = var_d(var_h_1, var_a_1)) === null || var_r === undefined ?
  undefined : var_r.trim().replace(/;\s*$/, "")) || "undefined // [JsExtractor] Failed to extract initializer source.";
  }
  else {
  var_v_1 = var_m_1;
  }
  }
  if (!var_g_1 && !!var_h_1 && var_h_1.type === "SequenceExpression" &&
  !var_v_1.startsWith("(")) {
  var_v_1 = `(${var_v_1}
  )`;
  }
  var var_k_1 = `${param_e.type === "VariableDeclarator" && param_e.id.type === "Identifier" ?
  param_e.id.name : var_p_1 && var_p_1.left.type === "Identifier" ?
  var_p_1.left.name : (var_p_1 == null ? undefined : var_p_1.type) === "AssignmentExpression" ?
  (var_o = var_f(var_p_1.left, var_a_1)) === null || var_o === undefined ?
  undefined : var_o.trim() : "unknown"}
   = ${var_v_1}
  ;`;
  if (param_e.type === "VariableDeclarator" && param_e.init &&
  !param_t) {
  return "  var " + var_k_1;
  }
  else {
  return "  " + var_k_1;
  }
  }
  buildScript(param_e) {
  var var_r = this;
  var var_o = param_e.maxDepth;
  var var_i = var_o === undefined ? Infinity : var_o;
  var var_a_1 = param_e.forceVarPredeclaration;
  var var_s_1 = var_a_1 !== undefined && var_a_1;
  var var_c_1 = param_e.exportRawValues;
  var var_l_1 = var_c_1 !== undefined && var_c_1;
  var var_u_1 = param_e.rawValueOnly;
  var var_p_1 = var_u_1 === undefined ? [] : var_u_1;
  var var_g_1 = this.analyzer.getExtractedMatches();
  var var_m_1 = new Set(var_g_1.map(param_e_1 => {
  return param_e_1.metadata?.name || "";
  }
  ));
  var list_v = [];
  var var_y_1 = new Set();
  var var_k_1 = new Map();
  var obj_T = {
  };
  function var_S_1(param_e_1) {
  if (param_e_1 && !param_e_1.includes(".")) {
  var_y_1.add(param_e_1);
  }
  }
  var var_x_1;
  function var_w_1(param_t, param_n = 0, param_o) {
  if (param_t && !(param_n > var_i)) {
  var var_a_2;
  var var_c_2 = var__(param_t.dependencies);
  try {
  for (var_c_2.s();
  !(var_a_2 = var_c_2.n()).done;
  ) {
  var var_l_2 = var_a_2.value;
  if (param_o && param_o !== var_l_2) {
  if (!var_m_1.has(param_o)) {
  continue;
  }
  param_o = undefined;
  }
  if (!var_m_1.has(var_l_2)) {
  var_m_1.add(var_l_2);
  var var_u_2 = var_r.analyzer.declaredVariables.get(var_l_2);
  if (var_u_2) {
  var var_d_1 = var_s_1 || var_u_2.predeclared;
  if (var_d_1) {
  var_S_1(var_l_2);
  }
  var_w_1(var_u_2, param_n + 1, param_o);
  list_v.push(var_r.renderNode(var_u_2.node, var_d_1, param_e));
  if (var_u_2.prototypeAliases.size > 0) {
  var var_f_1;
  var var_p_2 = var__(var_u_2.prototypeAliases);
  try {
  for (var_p_2.s();
  !(var_f_1 = var_p_2.n()).done;
  ) {
  var var_h_1;
  var var_g_2 = var_b(var_f_1.value, 2);
  var var_y_2 = var_g_2[1];
  var var_k_2 = var__(var_y_2);
  try {
  for (var_k_2.s();
  !(var_h_1 = var_k_2.n()).done;
  ) {
  var var_T_1 = var_h_1.value;
  var_w_1(var_T_1, param_n);
  list_v.push(var_r.renderNode(var_T_1.node, var_d_1, param_e));
  }
  }
  catch (var_e) {
  var_k_2.e(var_e);
  }
  finally {
  var_k_2.f();
  }
  }
  }
  catch (var_e) {
  var_p_2.e(var_e);
  }
  finally {
  var_p_2.f();
  }
  }
  }
  }
  }
  }
  catch (var_e) {
  var_c_2.e(var_e);
  }
  finally {
  var_c_2.f();
  }
  }
  }
  var var_E_1 = var__(var_g_1);
  try {
  for (var_E_1.s();
  !(var_x_1 = var_E_1.n()).done;
  ) {
  var var_A_1 = var_x_1.value;
  var var_C_1 = var_A_1.config.friendlyName;
  var var_O_1 = var_C_1 && var_p_1.includes(var_C_1);
  if (var_A_1.metadata) {
  if (!var_O_1) {
  list_v.push(`  //#region --- start [${var_C_1 || "Unknown"}
  ] ---`);
  }
  var var_I_1 = (var_s_1 || var_A_1.metadata.predeclared) &&
  !var_O_1;
  var var_N_1 = var_A_1.config.onlyProcessMatchContext;
  if (var_I_1) {
  var_S_1(var_A_1.metadata.name);
  }
  if (var_A_1.config.collectDependencies && !var_O_1) {
  var var_D_1 = undefined;
  var var_R_1 = var_A_1.matchContext;
  if ((var_R_1 == null ? undefined : var_R_1.type) === "NewExpression" &&
  var_N_1) {
  if (var_R_1.callee.type === "Identifier") {
  var_D_1 = var_R_1.callee.name;
  }
  else if (var_R_1.callee.type === "MemberExpression") {
  var_D_1 = var_f(var_R_1.callee, this.analyzer.getSource()) ||
  undefined;
  }
  }
  var_w_1(var_A_1.metadata, undefined, var_D_1);
  }
  if (var_A_1.matchContext && var_C_1 && (var_k_1.set(var_C_1, var_A_1.matchContext),
  var_l_1)) {
  var var_L_1 = var_A_1.matchContext;
  var var_P_1 = this.analyzer.getSource();
  var var_B_1 = null;
  var_B_1 = var_L_1.type === "Property" ? var_d(var_L_1.value, var_P_1) :
  var_L_1.type === "Identifier" ? var_L_1.name : var_d(var_L_1, var_P_1);
  obj_T[var_C_1] = var_B_1;
  }
  if (!var_O_1) {
  if (!var_N_1) {
  list_v.push(this.renderNode(var_A_1.metadata.node, var_I_1, param_e));
  }
  list_v.push(`  //#endregion --- end [${var_C_1 || "Unknown"}
  ] ---\n`);
  }
  }
  }
  }
  catch (var_e) {
  var_E_1.e(var_e);
  }
  finally {
  var_E_1.f();
  }
  var list_U = [];
  list_U.push("const __jsExtractorGlobal = typeof globalThis !== 'undefined' ? globalThis :");
  list_U.push("  typeof self !== 'undefined' ? self :");
  list_U.push("  typeof window !== 'undefined' ? window :");
  list_U.push("  typeof global !== 'undefined' ? global : {};\n");
  list_U.push(`const exportedVars = (function(${this.analyzer.iifeParamName}
  ) {`);
  list_U.push("  const window = typeof __jsExtractorGlobal.window !== 'undefined' ? __jsExtractorGlobal.window : Object.create(null);");
  list_U.push("  const document = typeof __jsExtractorGlobal.document !== 'undefined' ? __jsExtractorGlobal.document : {};");
  list_U.push("  const self = typeof __jsExtractorGlobal.self !== 'undefined' ? __jsExtractorGlobal.self : window;\n");
  if (var_y_1.size > 0) {
  list_U.push(`  var ${Array.from(var_y_1).join(", ")}
  ;\n`);
  }
  list_U.push(list_v.join("\n"));
  var var_M_1;
  var list_V = [];
  var var_H_1 = var__(var_k_1);
  try {
  for (var_H_1.s();
  !(var_M_1 = var_H_1.n()).done;
  ) {
  var var_j = var_b(var_M_1.value, 2);
  var var_F = var_j[0];
  var var_z = var_j[1];
  var var_G = null;
  if (var_z.type === "Identifier") {
  var var_W = this.analyzer.declaredVariables.get(var_z.name);
  if ((var_W == null ? undefined : var_W.node)?.type === "VariableDeclarator" &&
  var_W.node.init?.type === "FunctionExpression") {
  var_G = var_W.node;
  }
  }
  else if (var_z.type === "CallExpression" || var_z.type === "NewExpression" ||
  var_z.type === "VariableDeclarator") {
  var_G = var_z;
  }
  if (var_G) {
  var var_q = var_h(this.analyzer, var_F, var_G);
  if (var_q) {
  list_U.push(var_q + "\n");
  list_V.push(var_F);
  }
  }
  }
  }
  catch (var_e) {
  var_H_1.e(var_e);
  }
  finally {
  var_H_1.f();
  }
  if (var_l_1) {
  var var_Y = JSON.stringify(obj_T, null, "  ".length).split("\n");
  var var_K = `${var_Y[0]}
  \n${var_Y.slice(1).map(param_e_1 => "  " + param_e_1).join("\n")}
  `;
  list_U.push(`  const rawValues = ${var_K}
  ;\n`);
  list_V.push("rawValues");
  }
  list_U.push(`  return { ${list_V.join(", ")}
   };`);
  list_U.push("})({});\n");
  return {
  output: list_U.join("\n"),
  exported: list_V,
  exportedRawValues: var_l_1 ? obj_T : undefined
  };
  }
  }
  function var_w(param_e, param_t) {
  var var_n = typeof Symbol != "undefined" && param_e[Symbol.iterator] ||
  param_e["@@iterator"];
  if (!var_n) {
  if (Array.isArray(param_e) || (var_n = var_A(param_e)) || param_t &&
  param_e && typeof param_e.length == "number") {
  if (var_n) {
  param_e = var_n;
  }
  var num_r = 0;
  function var_o() {
  }
  return {
  s: var_o,
  n: function () {
  if (num_r >= param_e.length) {
  return {
  done: true
  };
  }
  else {
  return {
  done: false,
  value: param_e[num_r++]
  };
  }
  }
  ,
  e: function (param_e_1) {
  throw param_e_1;
  }
  ,
  f: var_o
  };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var var_i;
  var flag_a = true;
  var flag_s = false;
  return {
  s: function () {
  var_n = var_n.call(param_e);
  }
  ,
  n: function () {
  var var_e = var_n.next();
  flag_a = var_e.done;
  return var_e;
  }
  ,
  e: function (param_e_1) {
  flag_s = true;
  var_i = param_e_1;
  }
  ,
  f: function () {
  try {
  if (!flag_a && var_n.return != null) {
  var_n.return();
  }
  }
  finally {
  if (flag_s) {
  throw var_i;
  }
  }
  }
  };
  }
  function var_E(param_e, param_t) {
  return function (param_e_1) {
  if (Array.isArray(param_e_1)) {
  return param_e_1;
  }
  }
  (param_e) || function (param_e_1, param_t_1) {
  var var_n = param_e_1 == null ? null : typeof Symbol != "undefined" &&
  param_e_1[Symbol.iterator] || param_e_1["@@iterator"];
  if (var_n != null) {
  var var_r;
  var var_o;
  var var_i;
  var var_a_1;
  var list_s = [];
  var flag_c = true;
  var flag_l = false;
  try {
  var_i = (var_n = var_n.call(param_e_1)).next;
  if (param_t_1 === 0) {
  if (Object(var_n) !== var_n) {
  return;
  }
  flag_c = false;
  }
  else {
  for (;
  !(flag_c = (var_r = var_i.call(var_n)).done) && (list_s.push(var_r.value), list_s.length !== param_t_1);
  flag_c = true);
  }
  }
  catch (var_e) {
  flag_l = true;
  var_o = var_e;
  }
  finally {
  try {
  if (!flag_c && var_n.return != null && (var_a_1 = var_n.return(), Object(var_a_1) !== var_a_1)) {
  return;
  }
  }
  finally {
  if (flag_l) {
  throw var_o;
  }
  }
  }
  return list_s;
  }
  }
  (param_e, param_t) || var_A(param_e, param_t) || function () {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  ();
  }
  function var_A(param_e, param_t) {
  if (param_e) {
  if (typeof param_e == "string") {
  return var_C(param_e, param_t);
  }
  var var_n = {
  }
  .toString.call(param_e).slice(8, -1);
  if (var_n === "Object" && param_e.constructor) {
  var_n = param_e.constructor.name;
  }
  if (var_n === "Map" || var_n === "Set") {
  return Array.from(param_e);
  }
  else if (var_n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
  var_n)) {
  return var_C(param_e, param_t);
  }
  else {
  return undefined;
  }
  }
  }
  function var_C(param_e, param_t) {
  if (param_t == null || param_t > param_e.length) {
  param_t = param_e.length;
  }
  for (var num_n = 0, var_r = Array(param_t);
  num_n < param_t;
  num_n++) {
  var_r[num_n] = param_e[num_n];
  }
  return var_r;
  }
  function var_O(param_e) {
  if (param_e.type !== "VariableDeclarator") {
  return false;
  }
  var var_t = param_e.init;
  if (!var_t || var_t.type !== "FunctionExpression") {
  return false;
  }
  if (var_t.params.length < 3) {
  return false;
  }
  var var_n = var_E(var_t.params, 3);
  var var_r = var_n[0];
  var var_o = var_n[1];
  var var_i = var_n[2];
  if (var_r.type !== "Identifier" || var_o.type !== "AssignmentPattern" ||
  var_i.type !== "AssignmentPattern") {
  return false;
  }
  var var_a_1;
  var var_s_1 = var_t.body;
  var flag_c = false;
  var flag_l = false;
  var var_u_1 = var_w((var_s_1 == null ? undefined : var_s_1.body) ||
  []);
  try {
  for (var_u_1.s();
  !(var_a_1 = var_u_1.n()).done;
  ) {
  var var_d_1 = var_a_1.value;
  if (var_d_1.type === "ExpressionStatement") {
  var var_f_1 = var_d_1.expression;
  if (var_f_1.type === "AssignmentExpression" && var_f_1.operator === "=" &&
  var_f_1.left.type === "Identifier" && var_f_1.left.name === var_r.name) {
  var var_p_1 = var_f_1.right;
  if (var_p_1.type === "NewExpression" && var_p_1.callee.type === "MemberExpression") {
  flag_c = true;
  }
  }
  if (var_f_1.type === "CallExpression" && var_f_1.callee.type === "MemberExpression") {
  var var_h_1 = var_f_1.arguments;
  if (var_h_1.length === 2 && var_h_1[0].type === "Literal" &&
  var_h_1[0].value === "alr" && var_h_1[1].type === "Literal" &&
  var_h_1[1].value === "yes") {
  flag_l = true;
  }
  }
  }
  }
  }
  catch (var_e) {
  var_u_1.e(var_e);
  }
  finally {
  var_u_1.f();
  }
  return !!flag_c && !!flag_l && param_e;
  }
  function var_I(param_e) {
  if (param_e.type !== "VariableDeclarator" || param_e.init?.type !== "FunctionExpression") {
  return false;
  }
  var var_n = param_e.init.body;
  if (!var_n) {
  return false;
  }
  var var_r = null;
  var_u(var_n, param_e_1 => {
  if (param_e_1.type === "ObjectExpression") {
  var var_t;
  var var_n_1 = var_w(param_e_1.properties);
  try {
  for (var_n_1.s();
  !(var_t = var_n_1.n()).done;
  ) {
  var var_o = var_t.value;
  if (var_o.type === "Property" && var_o.key.type === "Identifier" &&
  var_o.key.name === "signatureTimestamp") {
  var_r = var_o;
  return var_c;
  }
  }
  }
  catch (var_e) {
  var_n_1.e(var_e);
  }
  finally {
  var_n_1.f();
  }
  }
  }
  );
  return var_r || false;
  }
  function var_N(param_e, param_t) {
  return function (param_e_1) {
  if (Array.isArray(param_e_1)) {
  return param_e_1;
  }
  }
  (param_e) || function (param_e_1, param_t_1) {
  var var_n = param_e_1 == null ? null : typeof Symbol != "undefined" &&
  param_e_1[Symbol.iterator] || param_e_1["@@iterator"];
  if (var_n != null) {
  var var_r;
  var var_o;
  var var_i;
  var var_a_1;
  var list_s = [];
  var flag_c = true;
  var flag_l = false;
  try {
  var_i = (var_n = var_n.call(param_e_1)).next;
  if (param_t_1 === 0) {
  if (Object(var_n) !== var_n) {
  return;
  }
  flag_c = false;
  }
  else {
  for (;
  !(flag_c = (var_r = var_i.call(var_n)).done) && (list_s.push(var_r.value), list_s.length !== param_t_1);
  flag_c = true);
  }
  }
  catch (var_e) {
  flag_l = true;
  var_o = var_e;
  }
  finally {
  try {
  if (!flag_c && var_n.return != null && (var_a_1 = var_n.return(), Object(var_a_1) !== var_a_1)) {
  return;
  }
  }
  finally {
  if (flag_l) {
  throw var_o;
  }
  }
  }
  return list_s;
  }
  }
  (param_e, param_t) || var_R(param_e, param_t) || function () {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  ();
  }
  function var_D(param_e, param_t) {
  var var_n = typeof Symbol != "undefined" && param_e[Symbol.iterator] ||
  param_e["@@iterator"];
  if (!var_n) {
  if (Array.isArray(param_e) || (var_n = var_R(param_e)) || param_t &&
  param_e && typeof param_e.length == "number") {
  if (var_n) {
  param_e = var_n;
  }
  var num_r = 0;
  function var_o() {
  }
  return {
  s: var_o,
  n: function () {
  if (num_r >= param_e.length) {
  return {
  done: true
  };
  }
  else {
  return {
  done: false,
  value: param_e[num_r++]
  };
  }
  }
  ,
  e: function (param_e_1) {
  throw param_e_1;
  }
  ,
  f: var_o
  };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var var_i;
  var flag_a = true;
  var flag_s = false;
  return {
  s: function () {
  var_n = var_n.call(param_e);
  }
  ,
  n: function () {
  var var_e = var_n.next();
  flag_a = var_e.done;
  return var_e;
  }
  ,
  e: function (param_e_1) {
  flag_s = true;
  var_i = param_e_1;
  }
  ,
  f: function () {
  try {
  if (!flag_a && var_n.return != null) {
  var_n.return();
  }
  }
  finally {
  if (flag_s) {
  throw var_i;
  }
  }
  }
  };
  }
  function var_R(param_e, param_t) {
  if (param_e) {
  if (typeof param_e == "string") {
  return var_L(param_e, param_t);
  }
  var var_n = {
  }
  .toString.call(param_e).slice(8, -1);
  if (var_n === "Object" && param_e.constructor) {
  var_n = param_e.constructor.name;
  }
  if (var_n === "Map" || var_n === "Set") {
  return Array.from(param_e);
  }
  else if (var_n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
  var_n)) {
  return var_L(param_e, param_t);
  }
  else {
  return undefined;
  }
  }
  }
  function var_L(param_e, param_t) {
  if (param_t == null || param_t > param_e.length) {
  param_t = param_e.length;
  }
  for (var num_n = 0, var_r = Array(param_t);
  num_n < param_t;
  num_n++) {
  var_r[num_n] = param_e[num_n];
  }
  return var_r;
  }
  function var_P() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var var_e;
  var var_t;
  var var_n = typeof Symbol == "function" ? Symbol : {
  };
  var var_r = var_n.iterator || "@@iterator";
  var var_o = var_n.toStringTag || "@@toStringTag";
  function var_i(param_n, param_r, param_o, param_i) {
  var var_c_2 = param_r && param_r.prototype instanceof var_s_1 ?
  param_r : var_s_1;
  var var_l_2 = Object.create(var_c_2.prototype);
  var_B(var_l_2, "_invoke", function (param_n_1, param_r_1, param_o_1) {
  var var_i_1;
  var var_s_2;
  var var_c_3;
  var num_l = 0;
  var var_u_2 = param_o_1 || [];
  var flag_d = false;
  var obj_f = {
  p: 0,
  n: 0,
  v: var_e,
  a: var_p_1,
  f: var_p_1.bind(var_e, 4),
  d: function (param_t, param_n_2) {
  var_i_1 = param_t;
  var_s_2 = 0;
  var_c_3 = var_e;
  obj_f.n = param_n_2;
  return obj_a;
  }
  };
  function var_p_1(param_n_2, param_r_2) {
  var_s_2 = param_n_2;
  var_c_3 = param_r_2;
  var_t = 0;
  for (;
  !flag_d && num_l && !var_o_1 && var_t < var_u_2.length;
  var_t++) {
  var var_o_1;
  var var_i_2 = var_u_2[var_t];
  var var_p_2 = obj_f.p;
  var var_h_1 = var_i_2[2];
  if (param_n_2 > 3) {
  if (var_o_1 = var_h_1 === param_r_2) {
  var_c_3 = var_i_2[(var_s_2 = var_i_2[4]) ? 5 : (var_s_2 = 3, 3)];
  var_i_2[4] = var_i_2[5] = var_e;
  }
  }
  else if (var_i_2[0] <= var_p_2) {
  if (var_o_1 = param_n_2 < 2 && var_p_2 < var_i_2[1]) {
  var_s_2 = 0;
  obj_f.v = param_r_2;
  obj_f.n = var_i_2[1];
  }
  else if (var_p_2 < var_h_1 && (var_o_1 = param_n_2 < 3 || var_i_2[0] > param_r_2 ||
  param_r_2 > var_h_1)) {
  var_i_2[4] = param_n_2;
  var_i_2[5] = param_r_2;
  obj_f.n = var_h_1;
  var_s_2 = 0;
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
  var_p_1(param_u, param_h);
  }
  var_s_2 = param_u;
  var_c_3 = param_h;
  while ((var_t = var_s_2 < 2 ? var_e : var_c_3) || !flag_d) {
  if (!var_i_1) {
  if (var_s_2) {
  if (var_s_2 < 3) {
  if (var_s_2 > 1) {
  obj_f.n = -1;
  }
  var_p_1(var_s_2, var_c_3);
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
  if (!var_s_2) {
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
  if (var_s_2 < 2) {
  var_s_2 = 0;
  }
  }
  else {
  if (var_s_2 === 1 && (var_t = var_i_1.return)) {
  var_t.call(var_i_1);
  }
  if (var_s_2 < 2) {
  var_c_3 = TypeError("The iterator does not provide a '" + param_o_2 + "' method");
  var_s_2 = 1;
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
  var_s_2 = 1;
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
  return var_l_2;
  }
  var obj_a = {
  };
  function var_s_1() {
  }
  function var_c_1() {
  }
  function var_l_1() {
  }
  var_t = Object.getPrototypeOf;
  var var_u_1 = [][var_r] ? var_t(var_t([][var_r]())) : (var_B(var_t = {
  }
  , var_r, function () {
  return this;
  }
  ), var_t);
  var var_d_1 = var_l_1.prototype = var_s_1.prototype = Object.create(var_u_1);
  function var_f_1(param_e) {
  if (Object.setPrototypeOf) {
  Object.setPrototypeOf(param_e, var_l_1);
  }
  else {
  param_e.__proto__ = var_l_1;
  var_B(param_e, var_o, "GeneratorFunction");
  }
  param_e.prototype = Object.create(var_d_1);
  return param_e;
  }
  var_c_1.prototype = var_l_1;
  var_B(var_d_1, "constructor", var_l_1);
  var_B(var_l_1, "constructor", var_c_1);
  var_c_1.displayName = "GeneratorFunction";
  var_B(var_l_1, var_o, "GeneratorFunction");
  var_B(var_d_1);
  var_B(var_d_1, var_o, "Generator");
  var_B(var_d_1, var_r, function () {
  return this;
  }
  );
  var_B(var_d_1, "toString", function () {
  return "[object Generator]";
  }
  );
  return (var_P = function () {
  return {
  w: var_i,
  m: var_f_1
  };
  }
  )();
  }
  function var_B(param_e, param_t, param_n, param_r) {
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
  (var_B = function (param_e_1, param_t_1, param_n_1, param_r_1) {
  function var_i(param_t_2, param_n_2) {
  var_B(param_e_1, param_t_2, function (param_e_2) {
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
  var_i("next", 0);
  var_i("throw", 1);
  var_i("return", 2);
  }
  }
  )(param_e, param_t, param_n, param_r);
  }
  function var_U(param_e, param_t, param_n, param_r) {
  return new (param_n ||= Promise)(function (param_o, param_i) {
  function var_a_1(param_e_1) {
  try {
  var_c_1(param_r.next(param_e_1));
  }
  catch (var_e) {
  param_i(var_e);
  }
  }
  function var_s_1(param_e_1) {
  try {
  var_c_1(param_r.throw(param_e_1));
  }
  catch (var_e) {
  param_i(var_e);
  }
  }
  function var_c_1(param_e_1) {
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
  var_c_1((param_r = param_r.apply(param_e, param_t || [])).next());
  }
  );
  }
  class var_M {
  static get PLAYER_CONFIG_RX() {
  return /ytInitialPlayerResponse\s*=\s*({.+});(var meta)?/i;
  }
  static get PLAYER_URL_RX() {
  return /(src|href)=['"]([a-z0-9\-_\/\.]*player\/[a-z0-9\-_\/\.]*\/base\.js)['"]/i;
  }
  static get PLAYER_URL_MUSIC_RX() {
  return /"jsUrl":\s*"(.+?\/base.js)"/;
  }
  static get USER_SESSION_ID_RX() {
  return /"USER_SESSION_ID"\s*:\s*"(.+?)"/;
  }
  static get VISITOR_DATA_RX() {
  return /"VISITOR_DATA":\s*"([^"]+)"/i;
  }
  static get INNERTUBE_API_KEY_RX() {
  return /"innertubeApiKey":\s*"([^"]+)"/i;
  }
  static get INNERTUBE_CONTEXT_CLIENT_VERSION_RX() {
  return /"innertubeContextClientVersion":\s*"([^"]+)"/i;
  }
  static get DATASYNC_ID_RX() {
  return /"datasyncId":\s*"([^"]+)"/i;
  }
  static fetchConfigs(param_e) {
  var var_s_1;
  return var_U(this, undefined, undefined, var_P().m(function var_p_1() {
  var var_h_1;
  var var_g_1;
  var var_m_1;
  var var_v_1;
  var var_y_1;
  var var_k_1;
  var var_b_1;
  var var___1;
  var var_T_1;
  var var_S_1;
  return var_P().w(function (param_p) {
  while (true) {
  switch (param_p.p = param_p.n) {
  case 0:
  if (!(var_h_1 = `https://${location.hostname}/watch?v=${param_e}&has_verified=1`).match(/(youtube-nocookie)/i)) {
  param_p.n = 2;
  break;
  }
  param_p.n = 1;
  return Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.CORS_FETCH,
  data: {
  url: `https://www.youtube.com/watch?v=${param_e}&has_verified=1`,
  responseType: "text"
  }
  }
  );
  case 1:
  var_g_1 = param_p.v.data;
  param_p.n = 4;
  break;
  case 2:
  param_p.n = 3;
  return fetch(var_h_1).then(param_e_1 => param_e_1.text()).catch(() => Object(dep_dom_utils.send)(
  "GET", var_h_1).then(param_e_1 => param_e_1.responseText));
  case 3:
  var_g_1 = param_p.v;
  case 4:
  this.visitorData = var_g_1.match(this.VISITOR_DATA_RX)?.[1];
  this.apiKey = var_g_1.match(this.INNERTUBE_API_KEY_RX)?.[1];
  this.clientVersion = var_g_1.match(this.INNERTUBE_CONTEXT_CLIENT_VERSION_RX)?.[1];
  this.datasyncId = (var_s_1 = var_g_1.match(this.DATASYNC_ID_RX)?.[1]) === null ||
  var_s_1 === undefined ? undefined : var_s_1.replace(/\|/g, "");
  if (var_m_1 = var_g_1.match(this.USER_SESSION_ID_RX)) {
  this.ssId = var_m_1[1];
  }
  var_v_1 = var_g_1.slice(0, var_g_1.indexOf("var meta =") + 1 ||
  undefined).match(this.PLAYER_CONFIG_RX)?.[1] || "";
  try {
  if (var_v_1) {
  JSON.parse(var_v_1);
  }
  }
  catch (var_e) {
  var_v_1 = var_v_1.slice(0, var_v_1.indexOf("};<") + 1 || undefined).match(/({.+});?/)?.[1] ||
  "";
  }
  param_p.n = 5;
  return chrome.storage.local.get(dep_media_constants.w);
  case 5:
  var_y_1 = param_p.v;
  if (var_k_1 = var_y_1[dep_media_constants.w]?.playerUrl ||
  var_g_1.match(this.PLAYER_URL_RX)?.[2] || var_g_1.match(this.PLAYER_URL_MUSIC_RX)?.[1]) {
  this.foundPlayerUrlFromConfig = var_k_1;
  }
  if (this.playerScript) {
  param_p.n = 7;
  break;
  }
  param_p.n = 6;
  return fetch(var_k_1).then(param_e_1 => param_e_1.text());
  case 6:
  this.playerScript = param_p.v;
  case 7:
  if (!(var_b_1 = this.parseConfig(var_v_1))) {
  param_p.n = 8;
  break;
  }
  return param_p.a(2, var_b_1);
  case 8:
  param_p.p = 8;
  var___1 = new DOMParser();
  (var_T_1 = var___1.parseFromString(var_g_1, "text/html")).querySelectorAll("script");
  var_S_1 = Array.from(var_T_1.querySelectorAll("body script")).map(param_e_1 => {
  var var_t;
  return ((var_t = param_e_1.innerText) === null || var_t === undefined ?
  undefined : var_t.match(this.PLAYER_CONFIG_RX))?.[1];
  }
  ).find(param_e_1 => !!param_e_1);
  return param_p.a(2, this.parseConfig(var_S_1 || ""));
  case 9:
  param_p.p = 9;
  param_p.v;
  return param_p.a(2, null);
  }
  }
  }
  , var_p_1, this, [[8, 9]]);
  }
  ));
  }
  static getConfigFromSite() {
  var var_t = Array.from(document.querySelectorAll("script")).find(param_e => param_e.innerText.includes(
  "ytInitialPlayerResponse"))?.innerText || "";
  return this.parseConfig(var_t);
  }
  static get playerURL() {
  return document.querySelector("link[href*=\"player/\"][href*=\"/base\"], script[src*=\"player/\"][src*=\"/base\"]")?.href ||
  this.foundPlayerUrlFromConfig;
  }
  static get signatureTimestamp() {
  var var_e = this.playerScript.match(/(signatureTimestamp|sts):(\d+)/);
  if (var_e == null ? undefined : var_e[2]) {
  return parseInt(var_e[2]);
  }
  else {
  return undefined;
  }
  }
  static parseConfig(param_e) {
  try {
  return JSON.parse(param_e);
  }
  catch (var_e) {
  Object(dep_dom_utils.devLog)(var_e);
  return null;
  }
  }
  static getNeededMetadataFromConfig(param_e, param_t) {
  return var_U(this, undefined, undefined, var_P().m(function var_n() {
  var var_i;
  var var_a_1;
  var var_s_1;
  var var_c_1;
  var var_l_1;
  var var_u_1;
  var var_d_1;
  var var_f_1;
  var var_p_1;
  var var_h_1;
  var var_g_1;
  var var_m_1;
  var var_v_1;
  return var_P().w(function (param_n) {
  while (true) {
  switch (param_n.p = param_n.n) {
  case 0:
  if (param_e && param_e.playabilityStatus && param_e.playabilityStatus.status) {
  param_n.n = 1;
  break;
  }
  throw new Error("Invalid playabilityStatus");
  case 1:
  if (param_e.playabilityStatus.status !== "LOGIN_REQUIRED") {
  param_n.n = 2;
  break;
  }
  throw new Error("LOGIN_REQUIRED");
  case 2:
  if (param_e.playabilityStatus.status === "OK") {
  param_n.n = 3;
  break;
  }
  throw new Error("API_ERROR");
  case 3:
  if (param_e.playabilityStatus.reason !== "This video is unavailable") {
  param_n.n = 4;
  break;
  }
  throw new Error("VIDEO_UNAVAILABLE");
  case 4:
  if (param_e.videoDetails.shortDescription !== "Video Not Available") {
  param_n.n = 5;
  break;
  }
  throw new Error("VIDEO_NOT_AVAILABLE");
  case 5:
  if (param_e.streamingData) {
  param_n.n = 6;
  break;
  }
  throw new Error("INVALID_STREAMING_DATA");
  case 6:
  param_e.streamingData.formats = [...(param_e.streamingData.adaptiveFormats ||
  []), ...(param_e.streamingData.formats || [])];
  if (!((var_i = param_e.streamingData.formats.filter(param_e_1 => param_e_1.url)).length / param_e.streamingData.formats.length > 0.4)) {
  param_n.n = 10;
  break;
  }
  param_n.p = 7;
  param_n.n = 8;
  return var_H(var_i);
  case 8:
  return param_n.a(2, {
  formats: param_e.streamingData.formats,
  player_response: {
  captions: param_e.captions
  }
  ,
  videoDetails: param_e.videoDetails
  }
  );
  case 9:
  param_n.p = 9;
  var_h_1 = param_n.v;
  console.log(var_h_1);
  case 10:
  if (!(param_e.streamingData.formats.filter(param_e_1 => !param_e_1.url &&
  !param_e_1.signatureCipher && !param_e_1.cipher).length / param_e.streamingData.formats.length >= 0.4)) {
  param_n.n = 11;
  break;
  }
  throw new Error("MISSING_URL_CIPHER");
  case 11:
  if (!this.playerURL) {
  param_n.n = 28;
  break;
  }
  var_y_1 = this.playerScript;
  var_b_1 = undefined;
  var___1 = undefined;
  var_b_1 = new var_k(var_y_1, {
  extractions: [{
  friendlyName: "nsigFunction",
  match: var_O
  }
  , {
  friendlyName: "signatureTimestampVar",
  match: var_I,
  collectDependencies: false
  }
  ]
  }
  );
  if (!(var___1 = new var_x(var_b_1).buildScript({
  disallowSideEffectInitializers: true,
  exportRawValues: true,
  rawValueOnly: ["signatureTimestampVar"]
  }
  )).exported.includes("nsigFunction")) {
  console.warn("Youtube.js", "Failed to extract n/sig decipher function.");
  }
  var_a_1 = var___1;
  var_s_1 = param_e.videoDetails.videoId;
  document.body.setAttribute("savior-functions", JSON.stringify(var_a_1));
  document.body.setAttribute("savior-meta-video-id", var_s_1);
  param_n.p = 12;
  param_n.p = 13;
  document.body.setAttribute("savior-meta-formats-" + var_s_1, JSON.stringify(param_e.streamingData.formats));
  param_n.n = 14;
  return Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.SCRIPTING.INJECT,
  file: "youtube/youtubejs",
  videoId: param_e.videoDetails.videoId
  }
  );
  case 14:
  if (!(var_c_1 = param_n.v) || !var_c_1.length) {
  var_l_1 = document.body.getAttribute("savior-decoded-meta-formats");
  var_c_1 = JSON.parse(var_l_1 || "[]");
  }
  var_u_1 = var_D(var_c_1);
  param_n.p = 15;
  var_u_1.s();
  case 16:
  if ((var_d_1 = var_u_1.n()).done) {
  param_n.n = 20;
  break;
  }
  var_f_1 = var_d_1.value;
  param_n.p = 17;
  var_p_1 = new URL(var_f_1.url);
  if (param_e.cver) {
  var_p_1.searchParams.set("cver", encodeURIComponent(param_e.cver));
  }
  if (param_t) {
  var_p_1.searchParams.set("pot", param_t);
  }
  var_f_1.url = var_p_1.href;
  param_n.n = 19;
  break;
  case 18:
  param_n.p = 18;
  var_g_1 = param_n.v;
  console.error(var_g_1);
  return param_n.a(3, 19);
  case 19:
  param_n.n = 16;
  break;
  case 20:
  param_n.n = 22;
  break;
  case 21:
  param_n.p = 21;
  var_m_1 = param_n.v;
  var_u_1.e(var_m_1);
  case 22:
  param_n.p = 22;
  var_u_1.f();
  return param_n.f(22);
  case 23:
  param_n.n = 24;
  return var_H(var_c_1);
  case 24:
  return param_n.a(2, {
  formats: var_c_1,
  player_response: {
  captions: param_e.captions
  }
  ,
  videoDetails: param_e.videoDetails
  }
  );
  case 25:
  param_n.p = 25;
  var_v_1 = param_n.v;
  console.error(var_v_1);
  case 26:
  param_n.p = 26;
  document.body.removeAttribute("savior-functions");
  document.body.removeAttribute("savior-meta-video-id");
  document.body.removeAttribute("savior-meta-formats-" + var_s_1);
  document.body.removeAttribute("savior-decoded-meta-formats");
  return param_n.f(26);
  case 27:
  param_n.n = 29;
  break;
  case 28:
  throw new Error("PLAYER_FILE_NOT_FOUND");
  case 29:
  return param_n.a(2);
  }
  }
  var var_y_1;
  var var_b_1;
  var var___1;
  }
  , var_n, this, [[17, 18], [15, 21, 22, 23], [13, 25], [12,, 26, 27], [7, 9]]);
  }
  ));
  }
  static getMetadataFromVideoID(param_e, param_t) {
  return var_U(this, undefined, undefined, var_P().m(function var_n() {
  var var_r;
  var var_o;
  return var_P().w(function (param_n) {
  while (true) {
  switch (param_n.p = param_n.n) {
  case 0:
  param_n.n = 1;
  return this.fetchConfigs(param_e);
  case 1:
  if (var_r = param_n.v) {
  param_n.n = 2;
  break;
  }
  throw new Error("Cannot fetch config");
  case 2:
  param_n.p = 2;
  return param_n.a(2, this.getNeededMetadataFromConfig(var_r, param_t));
  case 3:
  param_n.p = 3;
  var_o = param_n.v;
  console.error(var_o);
  throw var_o;
  case 4:
  return param_n.a(2);
  }
  }
  }
  , var_n, this, [[2, 3]]);
  }
  ));
  }
  }
  function var_V(param_e) {
  return param_e.height || param_e.bitrate;
  }
  function var_H(param_e) {
  return var_U(this, undefined, undefined, var_P().m(function var_t() {
  var var_n;
  var var_o;
  var var_i;
  var var_a_1;
  var var_s_1;
  var var_c_1;
  var var_l_1;
  var var_u_1;
  var var_d_1;
  return var_P().w(function (param_t) {
  while (true) {
  switch (param_t.n) {
  case 0:
  var_n = param_e.filter(param_e_1 => param_e_1.mimeType.includes("video")).reduce(
  (param_e_1, param_t_1) => var_V(param_e_1) < var_V(param_t_1) ?
  param_t_1 : param_e_1, param_e[0]);
  var_o = param_e.filter(param_e_1 => param_e_1.mimeType.includes("audio")).reduce(
  (param_e_1, param_t_1) => var_V(param_e_1) < var_V(param_t_1) ?
  param_t_1 : param_e_1, param_e[0]);
  if (var_n.url && var_o.url) {
  param_t.n = 1;
  break;
  }
  throw new Error("MISSING_URL_CIPHER");
  case 1:
  var_i = param_e_1 => !!param_e_1 && param_e_1 >= 200 && param_e_1 < 300;
  param_t.n = 2;
  return Promise.all([Object(dep_dom_utils.fetchStatus)(var_n.url), Object(dep_dom_utils.fetchStatus)(
  var_o.url)]);
  case 2:
  var_a_1 = param_t.v;
  var_s_1 = var_N(var_a_1, 2);
  var_c_1 = var_s_1[0];
  var_l_1 = var_s_1[1];
  if (var_i(var_c_1) && var_i(var_l_1)) {
  param_t.n = 5;
  break;
  }
  param_t.n = 3;
  return Object(dep_dom_utils.sleep)(2000);
  case 3:
  param_t.n = 4;
  return Promise.all([var_i(var_c_1) ? Promise.resolve(var_c_1) :
  Object(dep_dom_utils.fetchStatus)(var_n.url), var_i(var_l_1) ?
  Promise.resolve(var_l_1) : Object(dep_dom_utils.fetchStatus)(var_o.url)]);
  case 4:
  var_u_1 = param_t.v;
  var_d_1 = var_N(var_u_1, 2);
  var_c_1 = var_d_1[0];
  var_l_1 = var_d_1[1];
  case 5:
  if (var_i(var_c_1) && var_i(var_l_1)) {
  param_t.n = 6;
  break;
  }
  throw new Error("REQUEST_SAMPLE_FAILED");
  case 6:
  return param_t.a(2);
  }
  }
  }
  , var_t);
  }
  ));
  }
  var_M.playerScript = "";
  var_M.ssId = "";
  var_M.visitorData = "";
  var_M.apiKey = "";
  var_M.clientVersion = "";
  var_M.datasyncId = "";
  var_M.foundPlayerUrlFromConfig = "";
  },
  26: function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var var_o;
  var var_i;
  var var_a;
  var var_s;
  var var_c;
  var_c = requireFn(4);
  var_o = (var_r = var_c).lib;
  var_i = var_o.Base;
  var_a = var_o.WordArray;
  (var_s = var_r.x64 = {
  }
  ).Word = var_i.extend({
  init: function (param_e, param_t) {
  this.high = param_e;
  this.low = param_t;
  }
  }
  );
  var_s.WordArray = var_i.extend({
  init: function (param_e, param_t) {
  param_e = this.words = param_e || [];
  this.sigBytes = param_t ?? param_e.length * 8;
  }
  ,
  toX32: function () {
  var var_e = this.words;
  for (var var_t = var_e.length, list_n = [], num_r = 0;
  num_r < var_t;
  num_r++) {
  var var_o_1 = var_e[num_r];
  list_n.push(var_o_1.high);
  list_n.push(var_o_1.low);
  }
  return var_a.create(list_n, this.sigBytes);
  }
  ,
  clone: function () {
  var var_e = var_i.clone.call(this);
  var var_t = var_e.words = this.words.slice(0);
  for (var var_n = var_t.length, num_r = 0;
  num_r < var_n;
  num_r++) {
  var_t[num_r] = var_t[num_r].clone();
  }
  return var_e;
  }
  }
  );
  moduleObj.exports = var_c;
  },
  34: function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var_r = requireFn(4);
  (function (param_e) {
  var var_t = var_r;
  var var_n = var_t.lib;
  var var_o = var_n.WordArray;
  var var_i = var_n.Hasher;
  var var_a = var_t.algo;
  var list_s = [];
  var list_c = [];
  (function () {
  function var_t_1(param_t) {
  for (var var_n_2 = param_e.sqrt(param_t), num_r_1 = 2;
  num_r_1 <= var_n_2;
  num_r_1++) {
  if (!(param_t % num_r_1)) {
  return false;
  }
  }
  return true;
  }
  function var_n_1(param_e_1) {
  return (param_e_1 - (param_e_1 | 0)) * 4294967296 | 0;
  }
  var num_r = 2;
  for (var num_o = 0;
  num_o < 64;
  ) {
  if (var_t_1(num_r)) {
  if (num_o < 8) {
  list_s[num_o] = var_n_1(param_e.pow(num_r, 0.5));
  }
  list_c[num_o] = var_n_1(param_e.pow(num_r, 1 / 3));
  num_o++;
  }
  num_r++;
  }
  }
  )();
  var list_l = [];
  var var_u = var_a.SHA256 = var_i.extend({
  _doReset: function () {
  this._hash = new var_o.init(list_s.slice(0));
  }
  ,
  _doProcessBlock: function (param_e_1, param_t) {
  var var_n_1 = this._hash.words;
  var var_r_1 = var_n_1[0];
  var var_o_1 = var_n_1[1];
  var var_i_1 = var_n_1[2];
  var var_a_1 = var_n_1[3];
  var var_s = var_n_1[4];
  var var_u_1 = var_n_1[5];
  var var_d = var_n_1[6];
  var var_f = var_n_1[7];
  for (var num_p = 0;
  num_p < 64;
  num_p++) {
  if (num_p < 16) {
  list_l[num_p] = param_e_1[param_t + num_p] | 0;
  }
  else {
  var var_h = list_l[num_p - 15];
  var var_g = (var_h << 25 | var_h >>> 7) ^ (var_h << 14 | var_h >>> 18) ^ var_h >>> 3;
  var var_m = list_l[num_p - 2];
  var var_v = (var_m << 15 | var_m >>> 17) ^ (var_m << 13 | var_m >>> 19) ^ var_m >>> 10;
  list_l[num_p] = var_g + list_l[num_p - 7] + var_v + list_l[num_p - 16];
  }
  var var_y = var_r_1 & var_o_1 ^ var_r_1 & var_i_1 ^ var_o_1 & var_i_1;
  var var_k = (var_r_1 << 30 | var_r_1 >>> 2) ^ (var_r_1 << 19 | var_r_1 >>> 13) ^ (
  var_r_1 << 10 | var_r_1 >>> 22);
  var var_b = var_f + ((var_s << 26 | var_s >>> 6) ^ (var_s << 21 | var_s >>> 11) ^ (
  var_s << 7 | var_s >>> 25)) + (var_s & var_u_1 ^ ~var_s & var_d) + list_c[num_p] + list_l[num_p];
  var_f = var_d;
  var_d = var_u_1;
  var_u_1 = var_s;
  var_s = var_a_1 + var_b | 0;
  var_a_1 = var_i_1;
  var_i_1 = var_o_1;
  var_o_1 = var_r_1;
  var_r_1 = var_b + (var_k + var_y) | 0;
  }
  var_n_1[0] = var_n_1[0] + var_r_1 | 0;
  var_n_1[1] = var_n_1[1] + var_o_1 | 0;
  var_n_1[2] = var_n_1[2] + var_i_1 | 0;
  var_n_1[3] = var_n_1[3] + var_a_1 | 0;
  var_n_1[4] = var_n_1[4] + var_s | 0;
  var_n_1[5] = var_n_1[5] + var_u_1 | 0;
  var_n_1[6] = var_n_1[6] + var_d | 0;
  var_n_1[7] = var_n_1[7] + var_f | 0;
  }
  ,
  _doFinalize: function () {
  var var_t_1 = this._data;
  var var_n_1 = var_t_1.words;
  var var_r_1 = this._nDataBytes * 8;
  var var_o_1 = var_t_1.sigBytes * 8;
  var_n_1[var_o_1 >>> 5] |= 128 << 24 - var_o_1 % 32;
  var_n_1[14 + (var_o_1 + 64 >>> 9 << 4)] = param_e.floor(var_r_1 / 4294967296);
  var_n_1[15 + (var_o_1 + 64 >>> 9 << 4)] = var_r_1;
  var_t_1.sigBytes = var_n_1.length * 4;
  this._process();
  return this._hash;
  }
  ,
  clone: function () {
  var var_e = var_i.clone.call(this);
  var_e._hash = this._hash.clone();
  return var_e;
  }
  }
  );
  var_t.SHA256 = var_i._createHelper(var_u);
  var_t.HmacSHA256 = var_i._createHmacHelper(var_u);
  }
  )(Math);
  moduleObj.exports = var_r.SHA256;
  },
  35: function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var var_o;
  var var_i;
  var var_a;
  var_r = requireFn(4);
  var_i = (var_o = var_r).lib.Base;
  var_a = var_o.enc.Utf8;
  moduleObj.exports = void (var_o.algo.HMAC = var_i.extend({
  init: function (param_e, param_t) {
  param_e = this._hasher = new param_e.init();
  if (typeof param_t == "string") {
  param_t = var_a.parse(param_t);
  }
  var var_n = param_e.blockSize;
  var var_r_1 = var_n * 4;
  if (param_t.sigBytes > var_r_1) {
  param_t = param_e.finalize(param_t);
  }
  param_t.clamp();
  var var_o_1 = this._oKey = param_t.clone();
  var var_i_1 = this._iKey = param_t.clone();
  var var_s = var_o_1.words;
  var var_c = var_i_1.words;
  for (var num_l = 0;
  num_l < var_n;
  num_l++) {
  var_s[num_l] ^= 1549556828;
  var_c[num_l] ^= 909522486;
  }
  var_o_1.sigBytes = var_i_1.sigBytes = var_r_1;
  this.reset();
  }
  ,
  reset: function () {
  var var_e = this._hasher;
  var_e.reset();
  var_e.update(this._iKey);
  }
  ,
  update: function (param_e) {
  this._hasher.update(param_e);
  return this;
  }
  ,
  finalize: function (param_e) {
  var var_t = this._hasher;
  var var_n = var_t.finalize(param_e);
  var_t.reset();
  return var_t.finalize(this._oKey.clone().concat(var_n));
  }
  }
  ));
  },
  37: function (moduleObj, exportsObj, requireFn) {
  const list_r = ["features", "next", "ranges", "module", "sourceType", "globalReturn"];
  function var_o(param_e, param_t) {
  var var_n = Object.keys(param_e);
  if (Object.getOwnPropertySymbols) {
  var var_r = Object.getOwnPropertySymbols(param_e);
  if (param_t) {
  var_r = var_r.filter(function (param_t_1) {
  return Object.getOwnPropertyDescriptor(param_e, param_t_1).enumerable;
  }
  );
  }
  var_n.push.apply(var_n, var_r);
  }
  return var_n;
  }
  function var_i(param_e) {
  for (var num_t = 1;
  num_t < arguments.length;
  num_t++) {
  var var_n = arguments[num_t] ?? {
  };
  if (num_t % 2) {
  var_o(Object(var_n), true).forEach(function (param_t) {
  var_a(param_e, param_t, var_n[param_t]);
  }
  );
  }
  else if (Object.getOwnPropertyDescriptors) {
  Object.defineProperties(param_e, Object.getOwnPropertyDescriptors(var_n));
  }
  else {
  var_o(Object(var_n)).forEach(function (param_t) {
  Object.defineProperty(param_e, param_t, Object.getOwnPropertyDescriptor(var_n,
  param_t));
  }
  );
  }
  }
  return param_e;
  }
  function var_a(param_e, param_t, param_n) {
  if ((param_t = function (param_e_1) {
  var var_t = function (param_e_2, param_t_1) {
  if (typeof param_e_2 != "object" || !param_e_2) {
  return param_e_2;
  }
  var var_n = param_e_2[Symbol.toPrimitive];
  if (var_n !== undefined) {
  var var_r = var_n.call(param_e_2, param_t_1 || "default");
  if (typeof var_r != "object") {
  return var_r;
  }
  throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (param_t_1 === "string" ? String : Number)(param_e_2);
  }
  (param_e_1, "string");
  if (typeof var_t == "symbol") {
  return var_t;
  }
  else {
  return var_t + "";
  }
  }
  (param_t)) in param_e) {
  Object.defineProperty(param_e, param_t, {
  value: param_n,
  enumerable: true,
  configurable: true,
  writable: true
  }
  );
  }
  else {
  param_e[param_t] = param_n;
  }
  return param_e;
  }
  (function (param_e) {
  "use strict";
  const var_t = ((param_e_1, param_t) => {
  const var_n = new Uint32Array(69632);
  let num_r = 0;
  let num_o = 0;
  while (num_r < 2597) {
  const var_i_1 = param_e_1[num_r++];
  if (var_i_1 < 0) {
  num_o -= var_i_1;
  }
  else {
  let var_a_1 = param_e_1[num_r++];
  if (var_i_1 & 2) {
  var_a_1 = param_t[var_a_1];
  }
  if (var_i_1 & 1) {
  var_n.fill(var_a_1, num_o, num_o += param_e_1[num_r++]);
  }
  else {
  var_n[num_o++] = var_a_1;
  }
  }
  }
  return var_n;
  }
  )([-1, 2, 26, 2, 27, 2, 5, -1, 0, 77595648, 3, 44, 2, 3, 0, 14, 2, 61, 2, 62, 3,
  0, 3, 0, 3168796671, 0, 4294956992, 2, 1, 2, 0, 2, 41, 3, 0, 4, 0, 4294966523,
  3, 0, 4, 2, 16, 2, 63, 2, 0, 0, 4294836735, 0, 3221225471, 0, 4294901942, 2, 64,
  0, 134152192, 3, 0, 2, 0, 4294951935, 3, 0, 2, 0, 2683305983, 0, 2684354047, 2,
  17, 2, 0, 0, 4294961151, 3, 0, 2, 2, 19, 2, 0, 0, 608174079, 2, 0, 2, 58, 2, 7,
  2, 6, 0, 4286643967, 3, 0, 2, 2, 1, 3, 0, 3, 0, 4294901711, 2, 40, 0, 4089839103,
  0, 2961209759, 0, 1342439375, 0, 4294543342, 0, 3547201023, 0, 1577204103, 0, 4194240,
  0, 4294688750, 2, 2, 0, 80831, 0, 4261478351, 0, 4294549486, 2, 2, 0, 2967484831,
  0, 196559, 0, 3594373100, 0, 3288319768, 0, 8469959, 0, 65472, 2, 3, 0, 4093640191,
  0, 929054175, 0, 65487, 0, 4294828015, 0, 4092591615, 0, 1885355487, 0, 982991,
  2, 3, 2, 0, 0, 2163244511, 0, 4227923919, 0, 4236247022, 2, 69, 0, 4284449919,
  0, 851904, 2, 4, 2, 12, 0, 67076095, -1, 2, 70, 0, 1073741743, 0, 4093607775, -1,
  0, 50331649, 0, 3265266687, 2, 33, 0, 4294844415, 0, 4278190047, 2, 20, 2, 137,
  -1, 3, 0, 2, 2, 23, 2, 0, 2, 9, 2, 0, 2, 15, 2, 22, 3, 0, 10, 2, 72, 2, 0, 2, 73,
  2, 74, 2, 75, 2, 0, 2, 76, 2, 0, 2, 11, 0, 261632, 2, 25, 3, 0, 2, 2, 13, 2, 4,
  3, 0, 18, 2, 77, 2, 5, 3, 0, 2, 2, 78, 0, 2151677951, 2, 29, 2, 10, 0, 909311,
  3, 0, 2, 0, 814743551, 2, 48, 0, 67090432, 3, 0, 2, 2, 42, 2, 0, 2, 6, 2, 0, 2,
  30, 2, 8, 0, 268374015, 2, 108, 2, 51, 2, 0, 2, 79, 0, 134153215, -1, 2, 7, 2,
  0, 2, 8, 0, 2684354559, 0, 67044351, 0, 3221160064, 2, 9, 2, 18, 3, 0, 2, 2, 53,
  0, 1046528, 3, 0, 3, 2, 10, 2, 0, 2, 127, 0, 4294960127, 2, 9, 2, 6, 2, 11, 0,
  4294377472, 2, 12, 3, 0, 16, 2, 13, 2, 0, 2, 80, 2, 9, 2, 0, 2, 81, 2, 82, 2, 83,
  0, 12288, 2, 54, 0, 1048577, 2, 84, 2, 14, -1, 2, 14, 0, 131042, 2, 85, 2, 86,
  2, 87, 2, 0, 2, 34, -83, 3, 0, 7, 0, 1046559, 2, 0, 2, 15, 2, 0, 0, 2147516671,
  2, 21, 3, 88, 2, 2, 0, -16, 2, 89, 0, 524222462, 2, 4, 2, 0, 0, 4269801471, 2,
  4, 3, 0, 2, 2, 28, 2, 16, 3, 0, 2, 2, 49, 2, 0, -1, 2, 17, -16, 3, 0, 206, -2,
  3, 0, 692, 2, 71, -1, 2, 17, 2, 9, 3, 0, 8, 2, 91, 2, 18, 2, 0, 0, 3220242431,
  3, 0, 3, 2, 19, 2, 92, 2, 93, 3, 0, 2, 2, 94, 2, 0, 2, 20, 2, 95, 2, 0, 0, 4351,
  2, 0, 2, 10, 3, 0, 2, 0, 67043391, 0, 3909091327, 2, 0, 2, 24, 2, 10, 2, 20, 3,
  0, 2, 0, 67076097, 2, 8, 2, 0, 2, 21, 0, 67059711, 0, 4236247039, 3, 0, 2, 0, 939524103,
  0, 8191999, 2, 99, 2, 100, 2, 22, 2, 23, 3, 0, 3, 0, 67057663, 3, 0, 349, 2, 101,
  2, 102, 2, 7, -264, 3, 0, 11, 2, 24, 3, 0, 2, 2, 32, -1, 0, 3774349439, 2, 103,
  2, 104, 3, 0, 2, 2, 19, 2, 105, 3, 0, 10, 2, 9, 2, 17, 2, 0, 2, 46, 2, 0, 2, 31,
  2, 106, 2, 25, 0, 1638399, 0, 57344, 2, 107, 3, 0, 3, 2, 20, 2, 26, 2, 27, 2, 5,
  2, 28, 2, 0, 2, 8, 2, 109, -1, 2, 110, 2, 111, 2, 112, -1, 3, 0, 3, 2, 12, -2,
  2, 0, 2, 29, -3, 0, 536870912, -4, 2, 20, 2, 0, 2, 36, 0, 1, 2, 0, 2, 65, 2, 6,
  2, 12, 2, 9, 2, 0, 2, 113, -1, 3, 0, 4, 2, 9, 2, 23, 2, 114, 2, 7, 2, 0, 2, 115,
  2, 0, 2, 116, 2, 117, 2, 118, 2, 0, 2, 10, 3, 0, 9, 2, 21, 2, 30, 2, 31, 2, 119,
  2, 120, -2, 2, 121, 2, 122, 2, 30, 2, 21, 2, 8, -2, 2, 123, 2, 30, 3, 32, 2, -1,
  2, 0, 2, 39, -2, 0, 4277137519, 0, 2269118463, -1, 3, 20, 2, -1, 2, 33, 2, 38,
  2, 0, 3, 30, 2, 2, 35, 2, 19, -3, 3, 0, 2, 2, 34, -1, 2, 0, 2, 35, 2, 0, 2, 35,
  2, 0, 2, 47, 2, 0, 0, 4294950463, 2, 37, -7, 2, 0, 0, 203775, 2, 125, 0, 4227858432,
  2, 20, 2, 43, 2, 36, 2, 17, 2, 37, 2, 17, 2, 124, 2, 21, 3, 0, 2, 2, 38, 0, 2151677888,
  2, 0, 2, 12, 0, 4294901764, 2, 145, 2, 0, 2, 56, 2, 55, 0, 5242879, 3, 0, 2, 0,
  402644511, -1, 2, 128, 2, 39, 0, 3, -1, 2, 129, 2, 130, 2, 0, 0, 67045375, 2, 40,
  0, 4226678271, 0, 3766565279, 0, 2039759, 2, 132, 2, 41, 0, 1046437, 0, 6, 3, 0,
  2, 0, 3288270847, 0, 3, 3, 0, 2, 0, 67043519, -5, 2, 0, 0, 4282384383, 0, 1056964609,
  -1, 3, 0, 2, 0, 67043345, -1, 2, 0, 2, 42, 2, 23, 2, 50, 2, 11, 2, 59, 2, 38, -5,
  2, 0, 2, 12, -3, 3, 0, 2, 0, 2147484671, 2, 133, 0, 4190109695, 2, 52, -2, 2, 134,
  0, 4244635647, 0, 27, 2, 0, 2, 8, 2, 43, 2, 0, 2, 66, 2, 17, 2, 0, 2, 42, -3, 2,
  31, -2, 2, 0, 2, 45, 2, 57, 2, 44, 2, 45, 2, 135, 2, 46, 0, 8388351, -2, 2, 136,
  0, 3028287487, 2, 47, 2, 138, 0, 33259519, 2, 23, 2, 7, 2, 48, -7, 2, 21, 0, 4294836223,
  0, 3355443199, 0, 134152199, -2, 2, 67, -2, 3, 0, 28, 2, 32, -3, 3, 0, 3, 2, 49,
  3, 0, 6, 2, 50, -81, 2, 17, 3, 0, 2, 2, 36, 3, 0, 33, 2, 25, 2, 30, 3, 0, 124,
  2, 12, 3, 0, 18, 2, 38, -213, 2, 0, 2, 32, -54, 3, 0, 17, 2, 42, 2, 8, 2, 23, 2,
  0, 2, 8, 2, 23, 2, 51, 2, 0, 2, 21, 2, 52, 2, 139, 2, 25, -13, 2, 0, 2, 53, -6,
  3, 0, 2, -1, 2, 140, 2, 10, -1, 3, 0, 2, 0, 4294936575, 2, 0, 0, 4294934783, -2,
  0, 8323099, 3, 0, 230, 2, 30, 2, 54, 2, 8, -3, 3, 0, 3, 2, 35, -271, 2, 141, 3,
  0, 9, 2, 142, 2, 143, 2, 55, 3, 0, 11, 2, 7, -72, 3, 0, 3, 2, 144, 0, 1677656575,
  -130, 2, 26, -16, 2, 0, 2, 24, 2, 38, -16, 0, 4161266656, 0, 4071, 0, 15360, -4,
  0, 28, -13, 3, 0, 2, 2, 56, 2, 0, 2, 146, 2, 147, 2, 60, 2, 0, 2, 148, 2, 149,
  2, 150, 3, 0, 10, 2, 151, 2, 152, 2, 22, 3, 56, 2, 3, 153, 2, 3, 57, 2, 0, 4294954999,
  2, 0, -16, 2, 0, 2, 90, 2, 0, 0, 2105343, 0, 4160749584, 0, 65534, -34, 2, 8, 2,
  155, -6, 0, 4194303871, 0, 4294903771, 2, 0, 2, 58, 2, 98, -3, 2, 0, 0, 1073684479,
  0, 17407, -9, 2, 17, 2, 49, 2, 0, 2, 32, -14, 2, 17, 2, 32, -6, 2, 17, 2, 12, -6,
  2, 8, 0, 3225419775, -7, 2, 156, 3, 0, 6, 0, 8323103, -1, 3, 0, 2, 2, 59, -37,
  2, 60, 2, 157, 2, 158, 2, 159, 2, 160, 2, 161, -105, 2, 26, -32, 3, 0, 1335, -1,
  3, 0, 136, 2, 9, 3, 0, 180, 2, 24, 3, 0, 233, 2, 162, 3, 0, 18, 2, 9, -77, 3, 0,
  16, 2, 9, -47, 3, 0, 154, 2, 6, 3, 0, 264, 2, 32, -22116, 3, 0, 7, 2, 25, -6130,
  3, 5, 2, -1, 0, 69207040, 3, 44, 2, 3, 0, 14, 2, 61, 2, 62, -3, 0, 3168731136,
  0, 4294956864, 2, 1, 2, 0, 2, 41, 3, 0, 4, 0, 4294966275, 3, 0, 4, 2, 16, 2, 63,
  2, 0, 2, 34, -1, 2, 17, 2, 64, -1, 2, 0, 0, 2047, 0, 4294885376, 3, 0, 2, 0, 3145727,
  0, 2617294944, 0, 4294770688, 2, 25, 2, 65, 3, 0, 2, 0, 131135, 2, 96, 0, 70256639,
  0, 71303167, 0, 272, 2, 42, 2, 6, 0, 65279, 2, 0, 2, 48, -1, 2, 97, 2, 66, 0, 4278255616,
  0, 4294836227, 0, 4294549473, 0, 600178175, 0, 2952806400, 0, 268632067, 0, 4294543328,
  0, 57540095, 0, 1577058304, 0, 1835008, 0, 4294688736, 2, 68, 2, 67, 0, 33554435,
  2, 131, 2, 68, 0, 2952790016, 0, 131075, 0, 3594373096, 0, 67094296, 2, 67, -1,
  0, 4294828000, 0, 603979263, 0, 922746880, 0, 3, 0, 4294828001, 0, 602930687, 0,
  1879048192, 0, 393219, 0, 4294828016, 0, 671088639, 0, 2154840064, 0, 4227858435,
  0, 4236247008, 2, 69, 2, 38, -1, 2, 4, 0, 917503, 2, 38, -1, 2, 70, 0, 537788335,
  0, 4026531935, -1, 0, 1, -1, 2, 33, 2, 71, 0, 7936, -3, 2, 0, 0, 2147485695, 0,
  1010761728, 0, 4292984930, 0, 16387, 2, 0, 2, 15, 2, 22, 3, 0, 10, 2, 72, 2, 0,
  2, 73, 2, 74, 2, 75, 2, 0, 2, 76, 2, 0, 2, 12, -1, 2, 25, 3, 0, 2, 2, 13, 2, 4,
  3, 0, 18, 2, 77, 2, 5, 3, 0, 2, 2, 78, 0, 2147745791, 3, 19, 2, 0, 122879, 2, 0,
  2, 10, 0, 276824064, -2, 3, 0, 2, 2, 42, 2, 0, 0, 4294903295, 2, 0, 2, 30, 2, 8,
  -1, 2, 17, 2, 51, 2, 0, 2, 79, 2, 48, -1, 2, 21, 2, 0, 2, 29, -2, 0, 128, -2, 2,
  28, 2, 10, 0, 8160, -1, 2, 126, 0, 4227907585, 2, 0, 2, 37, 2, 0, 2, 50, 0, 4227915776,
  2, 9, 2, 6, 2, 11, -1, 0, 74440192, 3, 0, 6, -2, 3, 0, 8, 2, 13, 2, 0, 2, 80, 2,
  9, 2, 0, 2, 81, 2, 82, 2, 83, -3, 2, 84, 2, 14, -3, 2, 85, 2, 86, 2, 87, 2, 0,
  2, 34, -83, 3, 0, 7, 0, 817183, 2, 0, 2, 15, 2, 0, 0, 33023, 2, 21, 3, 88, 2, -17,
  2, 89, 0, 524157950, 2, 4, 2, 0, 2, 90, 2, 4, 2, 0, 2, 22, 2, 28, 2, 16, 3, 0,
  2, 2, 49, 2, 0, -1, 2, 17, -16, 3, 0, 206, -2, 3, 0, 692, 2, 71, -1, 2, 17, 2,
  9, 3, 0, 8, 2, 91, 0, 3072, 2, 0, 0, 2147516415, 2, 9, 3, 0, 2, 2, 25, 2, 92, 2,
  93, 3, 0, 2, 2, 94, 2, 0, 2, 20, 2, 95, 0, 4294965179, 0, 7, 2, 0, 2, 10, 2, 93,
  2, 10, -1, 0, 1761345536, 2, 96, 0, 4294901823, 2, 38, 2, 20, 2, 97, 2, 35, 2,
  98, 0, 2080440287, 2, 0, 2, 34, 2, 154, 0, 3296722943, 2, 0, 0, 1046675455, 0,
  939524101, 0, 1837055, 2, 99, 2, 100, 2, 22, 2, 23, 3, 0, 3, 0, 7, 3, 0, 349, 2,
  101, 2, 102, 2, 7, -264, 3, 0, 11, 2, 24, 3, 0, 2, 2, 32, -1, 0, 2700607615, 2,
  103, 2, 104, 3, 0, 2, 2, 19, 2, 105, 3, 0, 10, 2, 9, 2, 17, 2, 0, 2, 46, 2, 0,
  2, 31, 2, 106, -3, 2, 107, 3, 0, 3, 2, 20, -1, 3, 5, 2, 2, 108, 2, 0, 2, 8, 2,
  109, -1, 2, 110, 2, 111, 2, 112, -1, 3, 0, 3, 2, 12, -2, 2, 0, 2, 29, -8, 2, 20,
  2, 0, 2, 36, -1, 2, 0, 2, 65, 2, 6, 2, 30, 2, 9, 2, 0, 2, 113, -1, 3, 0, 4, 2,
  9, 2, 17, 2, 114, 2, 7, 2, 0, 2, 115, 2, 0, 2, 116, 2, 117, 2, 118, 2, 0, 2, 10,
  3, 0, 9, 2, 21, 2, 30, 2, 31, 2, 119, 2, 120, -2, 2, 121, 2, 122, 2, 30, 2, 21,
  2, 8, -2, 2, 123, 2, 30, 3, 32, 2, -1, 2, 0, 2, 39, -2, 0, 4277075969, 2, 30, -1,
  3, 20, 2, -1, 2, 33, 2, 124, 2, 0, 3, 30, 2, 2, 35, 2, 19, -3, 3, 0, 2, 2, 34,
  -1, 2, 0, 2, 35, 2, 0, 2, 35, 2, 0, 2, 50, 2, 96, 0, 4294934591, 2, 37, -7, 2,
  0, 0, 197631, 2, 125, -1, 2, 20, 2, 43, 2, 37, 2, 17, 0, 3, 2, 17, 2, 124, 2, 21,
  2, 126, 2, 127, -1, 0, 2490368, 2, 126, 2, 25, 2, 17, 2, 34, 2, 126, 2, 38, 0,
  4294901904, 0, 4718591, 2, 126, 2, 35, 0, 335544350, -1, 2, 128, 0, 2147487743,
  0, 1, -1, 2, 129, 2, 130, 2, 8, -1, 2, 131, 2, 68, 0, 3758161920, 0, 3, 2, 132,
  0, 12582911, 0, 655360, -1, 2, 0, 2, 29, 0, 2147485568, 0, 3, 2, 0, 2, 25, 0, 176,
  -5, 2, 0, 2, 49, 0, 251658240, -1, 2, 0, 2, 25, 0, 16, -1, 2, 0, 0, 16779263, -2,
  2, 12, -1, 2, 38, -5, 2, 0, 2, 18, -3, 3, 0, 2, 2, 54, 2, 133, 0, 2147549183, 0,
  2, -2, 2, 134, 2, 36, 0, 10, 0, 4294965249, 0, 67633151, 0, 4026597376, 2, 0, 0,
  536871935, 2, 17, 2, 0, 2, 42, -6, 2, 0, 0, 1, 2, 57, 2, 49, 0, 1, 2, 135, 2, 25,
  -3, 2, 136, 2, 36, 2, 137, 2, 138, 0, 16778239, 2, 17, 2, 7, -8, 2, 35, 0, 4294836212,
  2, 10, -3, 2, 67, -2, 3, 0, 28, 2, 32, -3, 3, 0, 3, 2, 49, 3, 0, 6, 2, 50, -81,
  2, 17, 3, 0, 2, 2, 36, 3, 0, 33, 2, 25, 0, 126, 3, 0, 124, 2, 12, 3, 0, 18, 2,
  38, -213, 2, 9, -55, 3, 0, 17, 2, 42, 2, 8, 2, 17, 2, 0, 2, 8, 2, 17, 2, 58, 2,
  0, 2, 25, 2, 50, 2, 139, 2, 25, -13, 2, 0, 2, 71, -6, 3, 0, 2, -1, 2, 140, 2, 10,
  -1, 3, 0, 2, 0, 67583, -1, 2, 105, -2, 0, 8126475, 3, 0, 230, 2, 30, 2, 54, 2,
  8, -3, 3, 0, 3, 2, 35, -271, 2, 141, 3, 0, 9, 2, 142, 2, 143, 2, 55, 3, 0, 11,
  2, 7, -72, 3, 0, 3, 2, 144, 2, 145, -187, 3, 0, 2, 2, 56, 2, 0, 2, 146, 2, 147,
  2, 60, 2, 0, 2, 148, 2, 149, 2, 150, 3, 0, 10, 2, 151, 2, 152, 2, 22, 3, 56, 2,
  3, 153, 2, 3, 57, 2, 2, 154, -57, 2, 8, 2, 155, -7, 2, 17, 2, 0, 2, 58, -4, 2,
  0, 0, 1065361407, 0, 16384, -9, 2, 17, 2, 58, 2, 0, 2, 18, -14, 2, 17, 2, 18, -6,
  2, 17, 0, 81919, -6, 2, 8, 0, 3223273399, -7, 2, 156, 3, 0, 6, 2, 124, -1, 3, 0,
  2, 0, 2063, -37, 2, 60, 2, 157, 2, 158, 2, 159, 2, 160, 2, 161, -138, 3, 0, 1335,
  -1, 3, 0, 136, 2, 9, 3, 0, 180, 2, 24, 3, 0, 233, 2, 162, 3, 0, 18, 2, 9, -77,
  3, 0, 16, 2, 9, -47, 3, 0, 154, 2, 6, 3, 0, 264, 2, 32, -28252], [4294967295, 4294967291,
  4092460543, 4294828031, 4294967294, 134217726, 4294903807, 268435455, 2147483647,
  1073741823, 1048575, 3892314111, 134217727, 1061158911, 536805376, 4294910143,
  4294901759, 4294901760, 4095, 262143, 536870911, 8388607, 4160749567, 4294902783,
  4294918143, 65535, 67043328, 2281701374, 4294967264, 2097151, 4194303, 255, 67108863,
  4294967039, 511, 524287, 131071, 63, 127, 3238002687, 4294549487, 4290772991, 33554431,
  4294901888, 4286578687, 67043329, 4294770687, 67043583, 1023, 32767, 15, 2047999,
  67043343, 67051519, 2147483648, 4294902000, 4292870143, 4294966783, 16383, 67047423,
  4294967279, 262083, 20511, 41943039, 493567, 4294959104, 603979775, 65536, 602799615,
  805044223, 4294965206, 8191, 1031749119, 4294917631, 2134769663, 4286578493, 4282253311,
  4294942719, 33540095, 4294905855, 2868854591, 1608515583, 265232348, 534519807,
  2147614720, 1060109444, 4093640016, 17376, 2139062143, 224, 4169138175, 4294909951,
  4286578688, 4294967292, 4294965759, 4294836224, 4294966272, 4294967280, 32768,
  8289918, 4294934399, 4294901775, 4294965375, 1602223615, 4294967259, 4294443008,
  268369920, 4292804608, 4294967232, 486341884, 4294963199, 3087007615, 1073692671,
  4128527, 4279238655, 4294902015, 4160684047, 4290246655, 469499899, 4294967231,
  134086655, 4294966591, 2445279231, 3670015, 31, 252, 4294967288, 16777215, 4294705151,
  3221208447, 4294902271, 4294549472, 4294921215, 4285526655, 4294966527, 4294705152,
  4294966143, 64, 4294966719, 3774873592, 4194303999, 1877934080, 262151, 2555904,
  536807423, 67043839, 3758096383, 3959414372, 3755993023, 2080374783, 4294835295,
  4294967103, 4160749565, 4294934527, 4087, 2016, 2147446655, 184024726, 2862017156,
  1593309078, 268434431, 268434414, 4294901761]);
  const fn_n = param_e_1 => !!(var_t[34816 + (param_e_1 >>> 5)] >>> param_e_1 & 1);
  const list_o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1032, 0, 0, 2056, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8192, 0, 3, 0, 0, 8192, 0, 0, 0, 256,
  0, 33024, 0, 0, 242, 242, 114, 114, 114, 114, 114, 114, 594, 594, 0, 0, 16384,
  0, 16384, 0, 0, 67, 67, 67, 67, 67, 67, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  3, 3, 3, 3, 3, 3, 3, 0, 1, 0, 0, 4099, 0, 71, 71, 71, 71, 71, 71, 7, 7, 7, 7, 7,
  7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 16384, 0, 16384, 0, 0];
  const list_s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
  const list_c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
  function var_l(param_e_1) {
  if (param_e_1 <= 127) {
  return list_s[param_e_1] > 0;
  }
  else {
  return fn_n(param_e_1);
  }
  }
  function var_u(param_e_1) {
  if (param_e_1 <= 127) {
  return list_c[param_e_1] > 0;
  }
  else {
  return (param_e_2 => !!(var_t[0 + (param_e_2 >>> 5)] >>> param_e_2 & 1))(param_e_1) ||
  param_e_1 === 8204 || param_e_1 === 8205;
  }
  }
  function var_d(param_e_1) {
  param_e_1.column++;
  return param_e_1.currentChar = param_e_1.source.charCodeAt(++param_e_1.index);
  }
  function var_f(param_e_1) {
  const var_t_1 = param_e_1.currentChar;
  if ((var_t_1 & 64512) != 55296) {
  return 0;
  }
  const var_n = param_e_1.source.charCodeAt(param_e_1.index + 1);
  if ((var_n & 64512) != 56320) {
  return 0;
  }
  else {
  return 65536 + ((var_t_1 & 1023) << 10) + (var_n & 1023);
  }
  }
  function var_p(param_e_1, param_t) {
  param_e_1.currentChar = param_e_1.source.charCodeAt(++param_e_1.index);
  param_e_1.flags |= 1;
  if (!(param_t & 4)) {
  param_e_1.column = 0;
  param_e_1.line++;
  }
  }
  function var_h(param_e_1) {
  param_e_1.flags |= 1;
  param_e_1.currentChar = param_e_1.source.charCodeAt(++param_e_1.index);
  param_e_1.column = 0;
  param_e_1.line++;
  }
  function var_g(param_e_1) {
  return param_e_1 === 160 || param_e_1 === 65279 || param_e_1 === 133 ||
  param_e_1 === 5760 || param_e_1 >= 8192 && param_e_1 <= 8203 ||
  param_e_1 === 8239 || param_e_1 === 8287 || param_e_1 === 12288 ||
  param_e_1 === 8201 || param_e_1 === 65519;
  }
  function var_m(param_e_1) {
  if (param_e_1 < 65) {
  return param_e_1 - 48;
  }
  else {
  return param_e_1 - 65 + 10 & 15;
  }
  }
  function var_v(param_e_1) {
  switch (param_e_1) {
  case 134283266:
  return "NumericLiteral";
  case 134283267:
  return "StringLiteral";
  case 86021:
  case 86022:
  return "BooleanLiteral";
  case 86023:
  return "NullLiteral";
  case 65540:
  return "RegularExpression";
  case 67174408:
  case 67174409:
  case 132:
  return "TemplateLiteral";
  default:
  if (~param_e_1 & 143360) {
  if (~param_e_1 & 4096) {
  return "Punctuator";
  }
  else {
  return "Keyword";
  }
  }
  else {
  return "Identifier";
  }
  }
  }
  const list_y = ["SingleLine", "MultiLine", "HTMLOpen", "HTMLClose", "HashbangComment"];
  function var_k(param_e_1, param_t, param_n, param_r, param_o, param_i) {
  if (param_r & 2) {
  param_e_1.report(0);
  }
  return var_b(param_e_1, param_t, param_n, param_o, param_i);
  }
  function var_b(param_e_1, param_t, param_n, param_r, param_i) {
  const {
  index: var_a_1
  }
  = param_e_1;
  param_e_1.tokenIndex = param_e_1.index;
  param_e_1.tokenLine = param_e_1.line;
  param_e_1.tokenColumn = param_e_1.column;
  while (param_e_1.index < param_e_1.end) {
  if (list_o[param_e_1.currentChar] & 8) {
  const var_n = param_e_1.currentChar === 13;
  var_h(param_e_1);
  if (var_n && param_e_1.index < param_e_1.end && param_e_1.currentChar === 10) {
  param_e_1.currentChar = param_t.charCodeAt(++param_e_1.index);
  }
  break;
  }
  if ((param_e_1.currentChar ^ 8232) <= 1) {
  var_h(param_e_1);
  break;
  }
  var_d(param_e_1);
  param_e_1.tokenIndex = param_e_1.index;
  param_e_1.tokenLine = param_e_1.line;
  param_e_1.tokenColumn = param_e_1.column;
  }
  if (param_e_1.options.onComment) {
  const obj_n = {
  start: {
  line: param_i.line,
  column: param_i.column
  }
  ,
  end: {
  line: param_e_1.tokenLine,
  column: param_e_1.tokenColumn
  }
  };
  param_e_1.options.onComment(list_y[param_r & 255], param_t.slice(var_a_1, param_e_1.tokenIndex),
  param_i.index, param_e_1.tokenIndex, obj_n);
  }
  return param_n | 1;
  }
  function var__(param_e_1, param_t, param_n) {
  const {
  index: var_r
  }
  = param_e_1;
  while (param_e_1.index < param_e_1.end) {
  if (param_e_1.currentChar < 43) {
  let flag_i = false;
  while (param_e_1.currentChar === 42) {
  if (!flag_i) {
  param_n &= -5;
  flag_i = true;
  }
  if (var_d(param_e_1) === 47) {
  var_d(param_e_1);
  if (param_e_1.options.onComment) {
  const obj_n = {
  start: {
  line: param_e_1.tokenLine,
  column: param_e_1.tokenColumn
  }
  ,
  end: {
  line: param_e_1.line,
  column: param_e_1.column
  }
  };
  param_e_1.options.onComment(list_y[1], param_t.slice(var_r, param_e_1.index - 2),
  var_r - 2, param_e_1.index, obj_n);
  }
  param_e_1.tokenIndex = param_e_1.index;
  param_e_1.tokenLine = param_e_1.line;
  param_e_1.tokenColumn = param_e_1.column;
  return param_n;
  }
  }
  if (flag_i) {
  continue;
  }
  if (list_o[param_e_1.currentChar] & 8) {
  if (param_e_1.currentChar === 13) {
  param_n |= 5;
  var_h(param_e_1);
  }
  else {
  var_p(param_e_1, param_n);
  param_n = param_n & -5 | 1;
  }
  }
  else {
  var_d(param_e_1);
  }
  }
  else if ((param_e_1.currentChar ^ 8232) <= 1) {
  param_n = param_n & -5 | 1;
  var_h(param_e_1);
  }
  else {
  param_n &= -5;
  var_d(param_e_1);
  }
  }
  param_e_1.report(18);
  }
  const obj_T = {
  0: "Unexpected token",
  30: "Unexpected token: '%0'",
  1: "Octal escape sequences are not allowed in strict mode",
  2: "Octal escape sequences are not allowed in template strings",
  3: "\\8 and \\9 are not allowed in template strings",
  4: "Private identifier #%0 is not defined",
  5: "Illegal Unicode escape sequence",
  6: "Invalid code point %0",
  7: "Invalid hexadecimal escape sequence",
  9: "Octal literals are not allowed in strict mode",
  8: "Decimal integer literals with a leading zero are forbidden in strict mode",
  10: "Expected number in radix %0",
  153: "Invalid left-hand side assignment to a destructible right-hand side",
  11: "Non-number found after exponent indicator",
  12: "Invalid BigIntLiteral",
  13: "No identifiers allowed directly after numeric literal",
  14: "Escapes \\8 or \\9 are not syntactically valid escapes",
  15: "Escapes \\8 or \\9 are not allowed in strict mode",
  16: "Unterminated string literal",
  17: "Unterminated template literal",
  18: "Multiline comment was not closed properly",
  19: "The identifier contained dynamic unicode escape that was not closed",
  20: "Illegal character '%0'",
  21: "Missing hexadecimal digits",
  22: "Invalid implicit octal",
  23: "Invalid line break in string literal",
  24: "Only unicode escapes are legal in identifier names",
  25: "Expected '%0'",
  26: "Invalid left-hand side in assignment",
  27: "Invalid left-hand side in async arrow",
  28: "Calls to super must be in the \"constructor\" method of a class expression or class declaration that has a superclass",
  29: "Member access on super must be in a method",
  31: "Await expression not allowed in formal parameter",
  32: "Yield expression not allowed in formal parameter",
  95: "Unexpected token: 'escaped keyword'",
  33: "Unary expressions as the left operand of an exponentiation expression must be disambiguated with parentheses",
  125: "Async functions can only be declared at the top level or inside a block",
  34: "Unterminated regular expression",
  35: "Unexpected regular expression flag",
  36: "Duplicate regular expression flag '%0'",
  37: "%0 functions must have exactly %1 argument%2",
  38: "Setter function argument must not be a rest parameter",
  39: "%0 declaration must have a name in this context",
  40: "Function name may not contain any reserved words or be eval or arguments in strict mode",
  41: "The rest operator is missing an argument",
  42: "A getter cannot be a generator",
  43: "A setter cannot be a generator",
  44: "A computed property name must be followed by a colon or paren",
  136: "Object literal keys that are strings or numbers must be a method or have a colon",
  46: "Found `* async x(){}` but this should be `async * x(){}`",
  45: "Getters and setters can not be generators",
  47: "'%0' can not be generator method",
  48: "No line break is allowed after '=>'",
  49: "The left-hand side of the arrow can only be destructed through assignment",
  50: "The binding declaration is not destructible",
  51: "Async arrow can not be followed by new expression",
  52: "Classes may not have a static property named 'prototype'",
  53: "Class constructor may not be a %0",
  54: "Duplicate constructor method in class",
  55: "Invalid increment/decrement operand",
  56: "Invalid use of `new` keyword on an increment/decrement expression",
  57: "`=>` is an invalid assignment target",
  58: "Rest element may not have a trailing comma",
  59: "Missing initializer in %0 declaration",
  60: "'for-%0' loop head declarations can not have an initializer",
  61: "Invalid left-hand side in for-%0 loop: Must have a single binding",
  62: "Invalid shorthand property initializer",
  63: "Property name __proto__ appears more than once in object literal",
  64: "Let is disallowed as a lexically bound name",
  65: "Invalid use of '%0' inside new expression",
  66: "Illegal 'use strict' directive in function with non-simple parameter list",
  67: "Identifier \"let\" disallowed as left-hand side expression in strict mode",
  68: "Illegal continue statement",
  69: "Illegal break statement",
  70: "Cannot have `let[...]` as a var name in strict mode",
  71: "Invalid destructuring assignment target",
  72: "Rest parameter may not have a default initializer",
  73: "The rest argument must the be last parameter",
  74: "Invalid rest argument",
  76: "In strict mode code, functions can only be declared at top level or inside a block",
  77: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement",
  78: "Without web compatibility enabled functions can not be declared at top level, inside a block, or as the body of an if statement",
  79: "Class declaration can't appear in single-statement context",
  80: "Invalid left-hand side in for-%0",
  81: "Invalid assignment in for-%0",
  82: "for await (... of ...) is only valid in async functions and async generators",
  83: "The first token after the template expression should be a continuation of the template",
  85: "`let` declaration not allowed here and `let` cannot be a regular var name in strict mode",
  84: "`let \n [` is a restricted production at the start of a statement",
  86: "Catch clause requires exactly one parameter, not more (and no trailing comma)",
  87: "Catch clause parameter does not support default values",
  88: "Missing catch or finally after try",
  89: "More than one default clause in switch statement",
  90: "Illegal newline after throw",
  91: "Strict mode code may not include a with statement",
  92: "Illegal return statement",
  93: "The left hand side of the for-header binding declaration is not destructible",
  94: "new.target only allowed within functions or static blocks",
  96: "'#' not followed by identifier",
  102: "Invalid keyword",
  101: "Can not use 'let' as a class name",
  100: "'A lexical declaration can't define a 'let' binding",
  99: "Can not use `let` as variable name in strict mode",
  97: "'%0' may not be used as an identifier in this context",
  98: "Await is only valid in async functions",
  103: "The %0 keyword can only be used with the module goal",
  104: "Unicode codepoint must not be greater than 0x10FFFF",
  105: "%0 source must be string",
  106: "Only a identifier or string can be used to indicate alias",
  107: "Only '*' or '{...}' can be imported after default",
  108: "'import defer' must be followed by a namespace import",
  109: "'import source' must be followed by a default import",
  110: "Trailing decorator may be followed by method",
  111: "Decorators can't be used with a constructor",
  112: "Can not use `await` as identifier in module or async func",
  113: "Can not use `await` as identifier in module",
  114: "HTML comments are only allowed with web compatibility (Annex B)",
  115: "The identifier 'let' must not be in expression position in strict mode",
  116: "Cannot assign to `eval` and `arguments` in strict mode",
  117: "The left-hand side of a for-of loop may not start with 'let'",
  118: "Block body arrows can not be immediately invoked without a group",
  119: "Block body arrows can not be immediately accessed without a group",
  120: "Unexpected strict mode reserved word",
  121: "Unexpected eval or arguments in strict mode",
  122: "Decorators must not be followed by a semicolon",
  123: "Calling delete on expression not allowed in strict mode",
  124: "Pattern can not have a tail",
  126: "Can not have a `yield` expression on the left side of a ternary",
  127: "An arrow function can not have a postfix update operator",
  128: "Invalid object literal key character after generator star",
  129: "Private fields can not be deleted",
  131: "Classes may not have a field called constructor",
  130: "Classes may not have a private element named constructor",
  132: "A class field initializer or static block may not contain arguments",
  133: "Generators can only be declared at the top level or inside a block",
  134: "Async methods are a restricted production and cannot have a newline following it",
  135: "Unexpected character after object literal property name",
  137: "Invalid key token",
  138: "Label '%0' has already been declared",
  139: "continue statement must be nested within an iteration statement",
  140: "Undefined label '%0'",
  141: "Trailing comma is disallowed inside import(...) arguments",
  142: "Invalid binding in JSON import",
  143: "import() requires exactly one argument",
  144: "Cannot use new with import(...)",
  145: "... is not allowed in import()",
  146: "Expected '=>'",
  147: "Duplicate binding '%0'",
  148: "Duplicate private identifier #%0",
  149: "Cannot export a duplicate name '%0'",
  152: "Duplicate %0 for-binding",
  150: "Exported binding '%0' needs to refer to a top-level declared variable",
  151: "Unexpected private field",
  155: "Numeric separators are not allowed at the end of numeric literals",
  154: "Only one underscore is allowed as numeric separator",
  156: "JSX value should be either an expression or a quoted JSX text",
  157: "Expected corresponding JSX closing tag for %0",
  158: "Adjacent JSX elements must be wrapped in an enclosing tag",
  159: "JSX attributes must only be assigned a non-empty 'expression'",
  160: "'%0' has already been declared",
  161: "'%0' shadowed a catch clause binding",
  162: "Dot property must be an identifier",
  163: "Encountered invalid input after spread/rest argument",
  164: "Catch without try",
  165: "Finally without try",
  166: "Expected corresponding closing tag for JSX fragment",
  167: "Coalescing and logical operators used together in the same expression must be disambiguated with parentheses",
  168: "Invalid tagged template on optional chain",
  169: "Invalid optional chain from super property",
  170: "Invalid optional chain from new expression",
  171: "Cannot use \"import.meta\" outside a module",
  172: "Leading decorators must be attached to a class declaration",
  173: "An export name cannot include a lone surrogate",
  174: "A string literal cannot be used as an exported binding without `from`",
  175: "Private fields can't be accessed on super",
  176: "The only valid meta property for import is 'import.meta'",
  177: "'import.meta' must not contain escaped characters",
  178: "cannot use \"await\" as identifier inside an async function",
  179: "cannot use \"await\" in static blocks",
  180: "Unexpected token `}`. Did you mean `&rbrace;` or `{'}'}`?",
  181: "Unexpected token `>`. Did you mean `&gt;` or `{'>'}`?"
  };
  class var_S extends SyntaxError {
  constructor(param_e_1, param_t, param_n, ...param_r) {
  const var_o_1 = obj_T[param_n].replaceAll(/%(\d+)/g, (param_e_2, param_t_1) => param_r[param_t_1]);
  super("[" + param_e_1.line + ":" + param_e_1.column + "-" + param_t.line + ":" + param_t.column + "]: " + var_o_1);
  var_a(this, "start", undefined);
  var_a(this, "end", undefined);
  var_a(this, "range", undefined);
  var_a(this, "loc", undefined);
  var_a(this, "description", undefined);
  this.start = param_e_1.index;
  this.end = param_t.index;
  this.range = [param_e_1.index, param_t.index];
  this.loc = {
  start: {
  line: param_e_1.line,
  column: param_e_1.column
  }
  ,
  end: {
  line: param_t.line,
  column: param_t.column
  }
  };
  this.description = var_o_1;
  }
  }
  const list_x = ["end of source", "identifier", "number", "string", "regular expression",
  "false", "true", "null", "template continuation", "template tail", "=>", "(", "{",
  ".", "...", "}", ")", ";", ",", "[", "]", ":", "?", "'", "\"", "++", "--", "=",
  "<<=", ">>=", ">>>=", "**=", "+=", "-=", "*=", "/=", "%=", "^=", "|=", "&=", "||=",
  "&&=", "??=", "typeof", "delete", "void", "!", "~", "+", "-", "in", "instanceof",
  "*", "%", "/", "**", "&&", "||", "===", "!==", "==", "!=", "<=", ">=", "<", ">",
  "<<", ">>", ">>>", "&", "|", "^", "var", "let", "const", "break", "case", "catch",
  "class", "continue", "debugger", "default", "do", "else", "export", "extends",
  "finally", "for", "function", "if", "import", "new", "return", "super", "switch",
  "this", "throw", "try", "while", "with", "implements", "interface", "package",
  "private", "protected", "public", "static", "yield", "as", "async", "await", "constructor",
  "get", "set", "accessor", "from", "of", "using", "enum", "eval", "arguments", "escaped keyword",
  "escaped future reserved keyword", "reserved if strict", "#", "BigIntLiteral",
  "??", "?.", "WhiteSpace", "Illegal", "LineTerminator", "PrivateField", "Template",
  "@", "target", "meta", "LineFeed", "Escaped", "JSXText"];
  const var_w = new Map([["this", 86111], ["function", 86104], ["if", 20569], ["return",
  20572], ["var", 86088], ["else", 20563], ["for", 20567], ["new", 86107], ["in",
  8673330], ["typeof", 16863275], ["while", 20578], ["case", 20556], ["break", 20555],
  ["try", 20577], ["catch", 20557], ["delete", 16863276], ["throw", 86112], ["switch",
  86110], ["continue", 20559], ["default", 20561], ["instanceof", 8411187], ["do",
  20562], ["void", 16863277], ["finally", 20566], ["async", 209005], ["await", 209006],
  ["class", 86094], ["const", 86090], ["constructor", 209007], ["debugger", 20560],
  ["export", 20564], ["extends", 20565], ["false", 86021], ["from", 209011], ["get",
  209008], ["implements", 36964], ["import", 86106], ["interface", 36965], ["let",
  241737], ["null", 86023], ["of", 471156], ["using", 209013], ["package", 36966],
  ["private", 36967], ["protected", 36968], ["public", 36969], ["set", 209009], ["static",
  36970], ["super", 86109], ["true", 86022], ["with", 20579], ["yield", 241771],
  ["enum", 86134], ["eval", 537079927], ["as", 77932], ["arguments", 537079928],
  ["target", 209030], ["meta", 209031], ["accessor", 209010]]);
  const var_E = [...var_w.keys()].map(param_e_1 => param_e_1.length);
  const var_A = Math.min(...var_E);
  const var_C = Math.max(...var_E);
  function var_O(param_e_1, param_t, param_n) {
  while (list_c[var_d(param_e_1)]);
  param_e_1.tokenValue = param_e_1.source.slice(param_e_1.tokenIndex, param_e_1.index);
  if (param_e_1.currentChar === 92 || param_e_1.currentChar > 126) {
  return var_N(param_e_1, param_t, 0, param_n);
  }
  const var_o_1 = param_e_1.index - param_e_1.tokenIndex;
  if (var_o_1 < var_A || var_o_1 > var_C) {
  return 208897;
  }
  else {
  return var_w.get(param_e_1.tokenValue) ?? 208897;
  }
  }
  function var_I(param_e_1, param_t) {
  const var_n = var_R(param_e_1);
  if (!var_l(var_n)) {
  param_e_1.report(5);
  }
  param_e_1.tokenValue = String.fromCodePoint(var_n);
  return var_N(param_e_1, param_t, 1, list_o[var_n] & 4);
  }
  function var_N(param_e_1, param_t, param_n, param_r) {
  let var_i_1 = param_e_1.index;
  while (param_e_1.index < param_e_1.end) {
  if (param_e_1.currentChar === 92) {
  param_e_1.tokenValue += param_e_1.source.slice(var_i_1, param_e_1.index);
  param_n = 1;
  const var_t_1 = var_R(param_e_1);
  if (!var_u(var_t_1)) {
  param_e_1.report(5);
  }
  param_r = param_r && list_o[var_t_1] & 4;
  param_e_1.tokenValue += String.fromCodePoint(var_t_1);
  var_i_1 = param_e_1.index;
  }
  else {
  const var_t_1 = var_f(param_e_1);
  if (var_t_1 > 0) {
  if (!var_u(var_t_1)) {
  param_e_1.report(20, String.fromCodePoint(var_t_1));
  }
  param_e_1.currentChar = var_t_1;
  param_e_1.index++;
  param_e_1.column++;
  }
  else if (!var_u(param_e_1.currentChar)) {
  break;
  }
  var_d(param_e_1);
  }
  }
  if (param_e_1.index <= param_e_1.end) {
  param_e_1.tokenValue += param_e_1.source.slice(var_i_1, param_e_1.index);
  }
  const {
  length: var_a_1
  }
  = param_e_1.tokenValue;
  if (param_r && var_a_1 >= var_A && var_a_1 <= var_C) {
  const var_r = var_w.get(param_e_1.tokenValue);
  if (var_r === undefined) {
  return (param_n ? -2147483648 : 0) | 208897;
  }
  else if (param_n) {
  if (var_r === 209006) {
  if (param_t & 2050) {
  return -2147483527;
  }
  else {
  return var_r | -2147483648;
  }
  }
  else if (param_t & 1) {
  if (var_r === 36970) {
  return -2147483526;
  }
  else if (~var_r & 36864) {
  if (~var_r & 20480) {
  return -2147274629;
  }
  else if (param_t & 262144 && !(param_t & 8)) {
  return var_r | -2147483648;
  }
  else {
  return -2147483527;
  }
  }
  else {
  return -2147483526;
  }
  }
  else if (!(param_t & 262144) || param_t & 8 || ~var_r & 20480) {
  if (var_r === 241771) {
  if (param_t & 262144) {
  return -2147274629;
  }
  else if (param_t & 1024) {
  return -2147483527;
  }
  else {
  return var_r | -2147483648;
  }
  }
  else if (var_r === 209005) {
  return -2147274629;
  }
  else if (~var_r & 36864) {
  return -2147483527;
  }
  else {
  return var_r | 12288 | -2147483648;
  }
  }
  else {
  return var_r | -2147483648;
  }
  }
  else {
  return var_r;
  }
  }
  return (param_n ? -2147483648 : 0) | 208897;
  }
  function var_D(param_e_1) {
  let var_t_1 = var_d(param_e_1);
  if (var_t_1 === 92) {
  return 131;
  }
  const var_n = var_f(param_e_1);
  if (var_n) {
  var_t_1 = var_n;
  }
  if (!var_l(var_t_1)) {
  param_e_1.report(96);
  }
  return 131;
  }
  function var_R(param_e_1) {
  if (param_e_1.source.charCodeAt(param_e_1.index + 1) !== 117) {
  param_e_1.report(5);
  }
  param_e_1.currentChar = param_e_1.source.charCodeAt(param_e_1.index += 2);
  param_e_1.column += 2;
  return function (param_e_2) {
  let num_t = 0;
  const var_n = param_e_2.currentChar;
  if (var_n === 123) {
  const var_n_1 = param_e_2.index - 2;
  while (list_o[var_d(param_e_2)] & 64) {
  num_t = num_t << 4 | var_m(param_e_2.currentChar);
  if (num_t > 1114111) {
  throw new var_S({
  index: var_n_1,
  line: param_e_2.line,
  column: param_e_2.column
  }
  , param_e_2.currentLocation, 104);
  }
  }
  if (param_e_2.currentChar !== 125) {
  throw new var_S({
  index: var_n_1,
  line: param_e_2.line,
  column: param_e_2.column
  }
  , param_e_2.currentLocation, 7);
  }
  var_d(param_e_2);
  return num_t;
  }
  if (!(list_o[var_n] & 64)) {
  param_e_2.report(7);
  }
  const var_r = param_e_2.source.charCodeAt(param_e_2.index + 1);
  if (!(list_o[var_r] & 64)) {
  param_e_2.report(7);
  }
  const var_i_1 = param_e_2.source.charCodeAt(param_e_2.index + 2);
  if (!(list_o[var_i_1] & 64)) {
  param_e_2.report(7);
  }
  const var_a_1 = param_e_2.source.charCodeAt(param_e_2.index + 3);
  if (!(list_o[var_a_1] & 64)) {
  param_e_2.report(7);
  }
  num_t = var_m(var_n) << 12 | var_m(var_r) << 8 | var_m(var_i_1) << 4 | var_m(var_a_1);
  param_e_2.currentChar = param_e_2.source.charCodeAt(param_e_2.index += 4);
  param_e_2.column += 4;
  return num_t;
  }
  (param_e_1);
  }
  function var_L(param_e_1, param_t, param_n) {
  let var_r = param_e_1.currentChar;
  let num_i = 0;
  let num_a = 9;
  let var_s = param_n & 64 ? 0 : 1;
  let num_c = 0;
  let num_u = 0;
  if (param_n & 64) {
  num_i = "." + var_P(param_e_1, var_r);
  var_r = param_e_1.currentChar;
  if (var_r === 110) {
  param_e_1.report(12);
  }
  }
  else {
  if (var_r === 48) {
  var_r = var_d(param_e_1);
  if ((var_r | 32) == 120) {
  param_n = 136;
  var_r = var_d(param_e_1);
  while (list_o[var_r] & 4160) {
  if (var_r !== 95) {
  num_u = 1;
  num_i = num_i * 16 + var_m(var_r);
  num_c++;
  var_r = var_d(param_e_1);
  }
  else {
  if (!num_u) {
  param_e_1.report(154);
  }
  num_u = 0;
  var_r = var_d(param_e_1);
  }
  }
  if (num_c === 0 || !num_u) {
  param_e_1.report(num_c === 0 ? 21 : 155);
  }
  }
  else if ((var_r | 32) == 111) {
  param_n = 132;
  var_r = var_d(param_e_1);
  while (list_o[var_r] & 4128) {
  if (var_r !== 95) {
  num_u = 1;
  num_i = num_i * 8 + (var_r - 48);
  num_c++;
  var_r = var_d(param_e_1);
  }
  else {
  if (!num_u) {
  param_e_1.report(154);
  }
  num_u = 0;
  var_r = var_d(param_e_1);
  }
  }
  if (num_c === 0 || !num_u) {
  param_e_1.report(num_c === 0 ? 0 : 155);
  }
  }
  else if ((var_r | 32) == 98) {
  param_n = 130;
  var_r = var_d(param_e_1);
  while (list_o[var_r] & 4224) {
  if (var_r !== 95) {
  num_u = 1;
  num_i = num_i * 2 + (var_r - 48);
  num_c++;
  var_r = var_d(param_e_1);
  }
  else {
  if (!num_u) {
  param_e_1.report(154);
  }
  num_u = 0;
  var_r = var_d(param_e_1);
  }
  }
  if (num_c === 0 || !num_u) {
  param_e_1.report(num_c === 0 ? 0 : 155);
  }
  }
  else if (list_o[var_r] & 32) {
  if (param_t & 1) {
  param_e_1.report(1);
  }
  param_n = 1;
  while (list_o[var_r] & 16) {
  if (list_o[var_r] & 512) {
  param_n = 32;
  var_s = 0;
  break;
  }
  num_i = num_i * 8 + (var_r - 48);
  var_r = var_d(param_e_1);
  }
  }
  else if (list_o[var_r] & 512) {
  if (param_t & 1) {
  param_e_1.report(1);
  }
  param_e_1.flags |= 64;
  param_n = 32;
  }
  else if (var_r === 95) {
  param_e_1.report(0);
  }
  }
  if (param_n & 48) {
  if (var_s) {
  while (num_a >= 0 && list_o[var_r] & 4112) {
  if (var_r !== 95) {
  num_u = 0;
  num_i = num_i * 10 + (var_r - 48);
  var_r = var_d(param_e_1);
  --num_a;
  }
  else {
  var_r = var_d(param_e_1);
  if (var_r === 95 || param_n & 32) {
  throw new var_S(param_e_1.currentLocation, {
  index: param_e_1.index + 1,
  line: param_e_1.line,
  column: param_e_1.column
  }
  , 154);
  }
  num_u = 1;
  }
  }
  if (num_u) {
  throw new var_S(param_e_1.currentLocation, {
  index: param_e_1.index + 1,
  line: param_e_1.line,
  column: param_e_1.column
  }
  , 155);
  }
  if (num_a >= 0 && !var_l(var_r) && var_r !== 46) {
  param_e_1.tokenValue = num_i;
  if (param_e_1.options.raw) {
  param_e_1.tokenRaw = param_e_1.source.slice(param_e_1.tokenIndex, param_e_1.index);
  }
  return 134283266;
  }
  }
  num_i += var_P(param_e_1, var_r);
  var_r = param_e_1.currentChar;
  if (var_r === 46) {
  if (var_d(param_e_1) === 95) {
  param_e_1.report(0);
  }
  param_n = 64;
  num_i += "." + var_P(param_e_1, param_e_1.currentChar);
  var_r = param_e_1.currentChar;
  }
  }
  }
  const var_f_1 = param_e_1.index;
  let num_p = 0;
  if (var_r === 110 && param_n & 128) {
  num_p = 1;
  var_r = var_d(param_e_1);
  }
  else if ((var_r | 32) == 101) {
  var_r = var_d(param_e_1);
  if (list_o[var_r] & 256) {
  var_r = var_d(param_e_1);
  }
  const {
  index: var_t_1
  }
  = param_e_1;
  if (!(list_o[var_r] & 16)) {
  param_e_1.report(11);
  }
  num_i += param_e_1.source.substring(var_f_1, var_t_1) + var_P(param_e_1, var_r);
  var_r = param_e_1.currentChar;
  }
  if (param_e_1.index < param_e_1.end && list_o[var_r] & 16 ||
  var_l(var_r)) {
  param_e_1.report(13);
  }
  if (num_p) {
  param_e_1.tokenRaw = param_e_1.source.slice(param_e_1.tokenIndex, param_e_1.index);
  param_e_1.tokenValue = BigInt(param_e_1.tokenRaw.slice(0, -1).replaceAll("_", ""));
  return 134283389;
  }
  else {
  param_e_1.tokenValue = param_n & 15 ? num_i : param_n & 32 ?
  parseFloat(param_e_1.source.substring(param_e_1.tokenIndex, param_e_1.index)) :
  +num_i;
  if (param_e_1.options.raw) {
  param_e_1.tokenRaw = param_e_1.source.slice(param_e_1.tokenIndex, param_e_1.index);
  }
  return 134283266;
  }
  }
  function var_P(param_e_1, param_t) {
  let num_n = 0;
  let var_r = param_e_1.index;
  let str_i = "";
  while (list_o[param_t] & 4112) {
  if (param_t !== 95) {
  num_n = 0;
  param_t = var_d(param_e_1);
  }
  else {
  const {
  index: var_o_1
  }
  = param_e_1;
  if ((param_t = var_d(param_e_1)) === 95) {
  throw new var_S(param_e_1.currentLocation, {
  index: param_e_1.index + 1,
  line: param_e_1.line,
  column: param_e_1.column
  }
  , 154);
  }
  num_n = 1;
  str_i += param_e_1.source.substring(var_r, var_o_1);
  var_r = param_e_1.index;
  }
  }
  if (num_n) {
  throw new var_S(param_e_1.currentLocation, {
  index: param_e_1.index + 1,
  line: param_e_1.line,
  column: param_e_1.column
  }
  , 155);
  }
  return str_i + param_e_1.source.substring(var_r, param_e_1.index);
  }
  var var_B;
  var var_U;
  function var_M(param_e_1) {
  const var_t_1 = param_e_1.index;
  let var_n = var_B.Empty;
  e: while (true) {
  const var_t_2 = param_e_1.currentChar;
  var_d(param_e_1);
  if (var_n & var_B.Escape) {
  var_n &= ~var_B.Escape;
  }
  else {
  switch (var_t_2) {
  case 47:
  if (var_n) {
  break;
  }
  break e;
  case 92:
  var_n |= var_B.Escape;
  break;
  case 91:
  var_n |= var_B.Class;
  break;
  case 93:
  var_n &= var_B.Escape;
  }
  }
  if (var_t_2 === 13 || var_t_2 === 10 || var_t_2 === 8232 ||
  var_t_2 === 8233) {
  param_e_1.report(34);
  }
  if (param_e_1.index >= param_e_1.source.length) {
  return param_e_1.report(34);
  }
  }
  const var_r = param_e_1.index - 1;
  let var_o_1 = var_U.Empty;
  let var_i_1 = param_e_1.currentChar;
  const {
  index: var_a_1
  }
  = param_e_1;
  while (var_u(var_i_1)) {
  switch (var_i_1) {
  case 103:
  if (var_o_1 & var_U.Global) {
  param_e_1.report(36, "g");
  }
  var_o_1 |= var_U.Global;
  break;
  case 105:
  if (var_o_1 & var_U.IgnoreCase) {
  param_e_1.report(36, "i");
  }
  var_o_1 |= var_U.IgnoreCase;
  break;
  case 109:
  if (var_o_1 & var_U.Multiline) {
  param_e_1.report(36, "m");
  }
  var_o_1 |= var_U.Multiline;
  break;
  case 117:
  if (var_o_1 & var_U.Unicode) {
  param_e_1.report(36, "u");
  }
  if (var_o_1 & var_U.UnicodeSets) {
  param_e_1.report(36, "vu");
  }
  var_o_1 |= var_U.Unicode;
  break;
  case 118:
  if (var_o_1 & var_U.Unicode) {
  param_e_1.report(36, "uv");
  }
  if (var_o_1 & var_U.UnicodeSets) {
  param_e_1.report(36, "v");
  }
  var_o_1 |= var_U.UnicodeSets;
  break;
  case 121:
  if (var_o_1 & var_U.Sticky) {
  param_e_1.report(36, "y");
  }
  var_o_1 |= var_U.Sticky;
  break;
  case 115:
  if (var_o_1 & var_U.DotAll) {
  param_e_1.report(36, "s");
  }
  var_o_1 |= var_U.DotAll;
  break;
  case 100:
  if (var_o_1 & var_U.Indices) {
  param_e_1.report(36, "d");
  }
  var_o_1 |= var_U.Indices;
  break;
  default:
  param_e_1.report(35);
  }
  var_i_1 = var_d(param_e_1);
  }
  const var_s = param_e_1.source.slice(var_a_1, param_e_1.index);
  const var_c = param_e_1.source.slice(var_t_1, var_r);
  param_e_1.tokenRegExp = {
  pattern: var_c,
  flags: var_s
  };
  if (param_e_1.options.raw) {
  param_e_1.tokenRaw = param_e_1.source.slice(param_e_1.tokenIndex, param_e_1.index);
  }
  param_e_1.tokenValue = function (param_e_2, param_t, param_n) {
  try {
  return new RegExp(param_t, param_n);
  }
  catch (var_t_2) {
  if (!param_e_2.options.validateRegex) {
  return null;
  }
  param_e_2.report(34);
  }
  }
  (param_e_1, var_c, var_s);
  return 65540;
  }
  function var_V(param_e_1, param_t, param_n) {
  const {
  index: var_r
  }
  = param_e_1;
  let str_i = "";
  let var_a_1 = var_d(param_e_1);
  let var_s = param_e_1.index;
  while (!(list_o[var_a_1] & 8)) {
  if (var_a_1 === param_n) {
  str_i += param_e_1.source.slice(var_s, param_e_1.index);
  var_d(param_e_1);
  if (param_e_1.options.raw) {
  param_e_1.tokenRaw = param_e_1.source.slice(var_r, param_e_1.index);
  }
  param_e_1.tokenValue = str_i;
  return 134283267;
  }
  if (~var_a_1 & 8 || var_a_1 !== 92) {
  if (var_a_1 === 8232 || var_a_1 === 8233) {
  param_e_1.column = -1;
  param_e_1.line++;
  }
  }
  else {
  str_i += param_e_1.source.slice(var_s, param_e_1.index);
  var_a_1 = var_d(param_e_1);
  if (var_a_1 < 127 || var_a_1 === 8232 || var_a_1 === 8233) {
  const var_n = var_H(param_e_1, param_t, var_a_1);
  if (var_n >= 0) {
  str_i += String.fromCodePoint(var_n);
  }
  else {
  var_j(param_e_1, var_n, 0);
  }
  }
  else {
  str_i += String.fromCodePoint(var_a_1);
  }
  var_s = param_e_1.index + 1;
  }
  if (param_e_1.index >= param_e_1.end) {
  param_e_1.report(16);
  }
  var_a_1 = var_d(param_e_1);
  }
  param_e_1.report(16);
  }
  function var_H(param_e_1, param_t, param_n, param_r = 0) {
  switch (param_n) {
  case 98:
  return 8;
  case 102:
  return 12;
  case 114:
  return 13;
  case 110:
  return 10;
  case 116:
  return 9;
  case 118:
  return 11;
  case 13:
  if (param_e_1.index < param_e_1.end) {
  const var_t_1 = param_e_1.source.charCodeAt(param_e_1.index + 1);
  if (var_t_1 === 10) {
  param_e_1.index = param_e_1.index + 1;
  param_e_1.currentChar = var_t_1;
  }
  }
  case 10:
  case 8232:
  case 8233:
  param_e_1.column = -1;
  param_e_1.line++;
  return -1;
  case 48:
  case 49:
  case 50:
  case 51:
  {
  let var_i_1 = param_n - 48;
  let var_a_1 = param_e_1.index + 1;
  let var_s = param_e_1.column + 1;
  if (var_a_1 < param_e_1.end) {
  const var_n = param_e_1.source.charCodeAt(var_a_1);
  if (list_o[var_n] & 32) {
  if (param_t & 1 || param_r) {
  return -2;
  }
  param_e_1.currentChar = var_n;
  var_i_1 = var_i_1 << 3 | var_n - 48;
  var_a_1++;
  var_s++;
  if (var_a_1 < param_e_1.end) {
  const var_t_1 = param_e_1.source.charCodeAt(var_a_1);
  if (list_o[var_t_1] & 32) {
  param_e_1.currentChar = var_t_1;
  var_i_1 = var_i_1 << 3 | var_t_1 - 48;
  var_a_1++;
  var_s++;
  }
  }
  param_e_1.flags |= 64;
  }
  else if (var_i_1 !== 0 || list_o[var_n] & 512) {
  if (param_t & 1 || param_r) {
  return -2;
  }
  param_e_1.flags |= 64;
  }
  param_e_1.index = var_a_1 - 1;
  param_e_1.column = var_s - 1;
  }
  return var_i_1;
  }
  case 52:
  case 53:
  case 54:
  case 55:
  {
  if (param_r || param_t & 1) {
  return -2;
  }
  let var_i_1 = param_n - 48;
  const var_a_1 = param_e_1.index + 1;
  const var_s = param_e_1.column + 1;
  if (var_a_1 < param_e_1.end) {
  const var_t_1 = param_e_1.source.charCodeAt(var_a_1);
  if (list_o[var_t_1] & 32) {
  var_i_1 = var_i_1 << 3 | var_t_1 - 48;
  param_e_1.currentChar = var_t_1;
  param_e_1.index = var_a_1;
  param_e_1.column = var_s;
  }
  }
  param_e_1.flags |= 64;
  return var_i_1;
  }
  case 120:
  {
  const var_t_1 = var_d(param_e_1);
  if (!(list_o[var_t_1] & 64)) {
  return -4;
  }
  const var_n = var_m(var_t_1);
  const var_r = var_d(param_e_1);
  if (list_o[var_r] & 64) {
  return var_n << 4 | var_m(var_r);
  }
  else {
  return -4;
  }
  }
  case 117:
  {
  const var_t_1 = var_d(param_e_1);
  if (param_e_1.currentChar === 123) {
  let num_t = 0;
  let num_n = 0;
  while (list_o[var_d(param_e_1)] & 64) {
  num_t = num_t << 4 | var_m(param_e_1.currentChar);
  if (num_t > 1114111) {
  return -5;
  }
  num_n++;
  }
  if (num_n === 0 || param_e_1.currentChar < 1 || param_e_1.currentChar !== 125) {
  return -4;
  }
  else {
  return num_t;
  }
  }
  {
  if (!(list_o[var_t_1] & 64)) {
  return -4;
  }
  const var_n = param_e_1.source.charCodeAt(param_e_1.index + 1);
  if (!(list_o[var_n] & 64)) {
  return -4;
  }
  const var_r = param_e_1.source.charCodeAt(param_e_1.index + 2);
  if (!(list_o[var_r] & 64)) {
  return -4;
  }
  const var_i_1 = param_e_1.source.charCodeAt(param_e_1.index + 3);
  if (list_o[var_i_1] & 64) {
  param_e_1.index += 3;
  param_e_1.column += 3;
  param_e_1.currentChar = param_e_1.source.charCodeAt(param_e_1.index);
  return var_m(var_t_1) << 12 | var_m(var_n) << 8 | var_m(var_r) << 4 | var_m(var_i_1);
  }
  else {
  return -4;
  }
  }
  }
  case 56:
  case 57:
  if (param_r || param_t & 1) {
  return -3;
  }
  param_e_1.flags |= 4096;
  default:
  return param_n;
  }
  }
  function var_j(param_e_1, param_t, param_n) {
  switch (param_t) {
  case -1:
  return;
  case -2:
  param_e_1.report(param_n ? 2 : 1);
  case -3:
  param_e_1.report(param_n ? 3 : 14);
  case -4:
  param_e_1.report(7);
  case -5:
  param_e_1.report(104);
  }
  }
  function var_F(param_e_1, param_t) {
  const {
  index: var_n
  }
  = param_e_1;
  let num_r = 67174409;
  let str_o = "";
  let flag_i = false;
  let var_a_1 = var_d(param_e_1);
  while (var_a_1 !== 96) {
  if (var_a_1 === 36 && param_e_1.source.charCodeAt(param_e_1.index + 1) === 123) {
  var_d(param_e_1);
  num_r = 67174408;
  break;
  }
  if (var_a_1 === 92) {
  var_a_1 = var_d(param_e_1);
  if (var_a_1 === 13) {
  flag_i = true;
  }
  if (var_a_1 > 126) {
  str_o += String.fromCodePoint(var_a_1);
  }
  else {
  const {
  index: var_n_1,
  line: var_s_1,
  column: var_c
  }
  = param_e_1;
  const var_l_1 = var_H(param_e_1, param_t | 1, var_a_1, 1);
  if (var_l_1 >= 0) {
  str_o += String.fromCodePoint(var_l_1);
  }
  else {
  if (var_l_1 !== -1 && param_t & 64) {
  param_e_1.index = var_n_1;
  param_e_1.line = var_s_1;
  param_e_1.column = var_c;
  str_o = null;
  var_a_1 = var_z(param_e_1, var_a_1, () => {
  flag_i = true;
  }
  );
  if (var_a_1 < 0) {
  num_r = 67174408;
  }
  break;
  }
  var_j(param_e_1, var_l_1, 1);
  }
  }
  }
  else if (param_e_1.index < param_e_1.end) {
  if (var_a_1 === 13) {
  flag_i = true;
  }
  if (var_a_1 === 13 && param_e_1.source.charCodeAt(param_e_1.index + 1) === 10) {
  param_e_1.currentChar = param_e_1.source.charCodeAt(++param_e_1.index);
  }
  if (var_a_1 === 13) {
  var_a_1 = 10;
  }
  if ((var_a_1 & 83) < 3 && var_a_1 === 10 || (var_a_1 ^ 8232) <= 1) {
  param_e_1.column = -1;
  param_e_1.line++;
  }
  str_o += String.fromCodePoint(var_a_1);
  }
  if (param_e_1.index >= param_e_1.end) {
  param_e_1.report(17);
  }
  var_a_1 = var_d(param_e_1);
  }
  var_d(param_e_1);
  param_e_1.tokenValue = str_o;
  const var_s = param_e_1.source.slice(var_n + 1, param_e_1.index - (num_r === 67174409 ?
  1 : 2));
  param_e_1.tokenRaw = flag_i ? var_s.replaceAll(/\r\n?/g, "\n") :
  var_s;
  return num_r;
  }
  function var_z(param_e_1, param_t, param_n) {
  while (param_t !== 96) {
  switch (param_t) {
  case 13:
  param_n();
  break;
  case 36:
  {
  const var_n = param_e_1.index + 1;
  if (var_n < param_e_1.end && param_e_1.source.charCodeAt(var_n) === 123) {
  param_e_1.index = var_n;
  param_e_1.column++;
  return -param_t;
  }
  break;
  }
  case 10:
  case 8232:
  case 8233:
  param_e_1.column = -1;
  param_e_1.line++;
  }
  if (param_e_1.index >= param_e_1.end) {
  param_e_1.report(17);
  }
  param_t = var_d(param_e_1);
  }
  return param_t;
  }
  function var_G(param_e_1, param_t) {
  if (param_e_1.index >= param_e_1.end) {
  param_e_1.report(0);
  }
  param_e_1.index--;
  param_e_1.column--;
  return var_F(param_e_1, param_t);
  }
  (function (param_e_1) {
  param_e_1[param_e_1.Empty = 0] = "Empty";
  param_e_1[param_e_1.Escape = 1] = "Escape";
  param_e_1[param_e_1.Class = 2] = "Class";
  }
  )(var_B ||= {
  }
  );
  (function (param_e_1) {
  param_e_1[param_e_1.Empty = 0] = "Empty";
  param_e_1[param_e_1.IgnoreCase = 1] = "IgnoreCase";
  param_e_1[param_e_1.Global = 2] = "Global";
  param_e_1[param_e_1.Multiline = 4] = "Multiline";
  param_e_1[param_e_1.Unicode = 16] = "Unicode";
  param_e_1[param_e_1.Sticky = 8] = "Sticky";
  param_e_1[param_e_1.DotAll = 32] = "DotAll";
  param_e_1[param_e_1.Indices = 64] = "Indices";
  param_e_1[param_e_1.UnicodeSets = 128] = "UnicodeSets";
  }
  )(var_U ||= {
  }
  );
  const list_W = [129, 129, 129, 129, 129, 129, 129, 129, 129, 128, 136, 128, 128,
  130, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129,
  129, 129, 129, 128, 16842798, 134283267, 131, 208897, 8391477, 8390213, 134283267,
  67174411, 16, 8391476, 25233968, 18, 25233969, 67108877, 8457014, 134283266, 134283266,
  134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266,
  21, 1074790417, 8456256, 1077936155, 8390721, 22, 133, 208897, 208897, 208897,
  208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897,
  208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897,
  208897, 208897, 208897, 69271571, 137, 20, 8389959, 208897, 132, 4096, 4096, 4096,
  4096, 4096, 4096, 4096, 208897, 4096, 208897, 208897, 4096, 208897, 4096, 208897,
  4096, 208897, 4096, 4096, 4096, 208897, 4096, 4096, 208897, 4096, 4096, 2162700,
  8389702, 1074790415, 16842799, 129];
  function var_q(param_e_1, param_t) {
  param_e_1.flags = (param_e_1.flags | 1) ^ 1;
  param_e_1.startIndex = param_e_1.index;
  param_e_1.startColumn = param_e_1.column;
  param_e_1.startLine = param_e_1.line;
  param_e_1.setToken(var_Y(param_e_1, param_t, 0));
  }
  function var_Y(param_e_1, param_t, param_r) {
  const var_o_1 = param_e_1.index === 0;
  const {
  source: var_i_1
  }
  = param_e_1;
  while (param_e_1.index < param_e_1.end) {
  param_e_1.tokenIndex = param_e_1.index;
  param_e_1.tokenColumn = param_e_1.column;
  param_e_1.tokenLine = param_e_1.line;
  let var_a_1 = param_e_1.currentChar;
  if (var_a_1 <= 126) {
  const var_n = list_W[var_a_1];
  switch (var_n) {
  case 67174411:
  case 16:
  case 2162700:
  case 1074790415:
  case 69271571:
  case 20:
  case 21:
  case 1074790417:
  case 18:
  case 16842799:
  case 133:
  case 129:
  var_d(param_e_1);
  return var_n;
  case 208897:
  return var_O(param_e_1, param_t, 0);
  case 4096:
  return var_O(param_e_1, param_t, 1);
  case 134283266:
  return var_L(param_e_1, param_t, 144);
  case 134283267:
  return var_V(param_e_1, param_t, var_a_1);
  case 132:
  return var_F(param_e_1, param_t);
  case 137:
  return var_I(param_e_1, param_t);
  case 131:
  return var_D(param_e_1);
  case 128:
  var_d(param_e_1);
  break;
  case 130:
  param_r |= 5;
  var_h(param_e_1);
  break;
  case 136:
  var_p(param_e_1, param_r);
  param_r = param_r & -5 | 1;
  break;
  case 8456256:
  {
  const var_n_1 = var_d(param_e_1);
  if (param_e_1.index < param_e_1.end) {
  if (var_n_1 === 60) {
  if (param_e_1.index < param_e_1.end && var_d(param_e_1) === 61) {
  var_d(param_e_1);
  return 4194332;
  }
  else {
  return 8390978;
  }
  }
  if (var_n_1 === 61) {
  var_d(param_e_1);
  return 8390718;
  }
  if (var_n_1 === 33) {
  const var_n_2 = param_e_1.index + 1;
  if (var_n_2 + 1 < param_e_1.end && var_i_1.charCodeAt(var_n_2) === 45 &&
  var_i_1.charCodeAt(var_n_2 + 1) == 45) {
  param_e_1.column += 3;
  param_e_1.currentChar = var_i_1.charCodeAt(param_e_1.index += 3);
  param_r = var_k(param_e_1, var_i_1, param_r, param_t, 2, param_e_1.tokenStart);
  continue;
  }
  return 8456256;
  }
  }
  return 8456256;
  }
  case 1077936155:
  {
  var_d(param_e_1);
  const var_t_1 = param_e_1.currentChar;
  if (var_t_1 === 61) {
  if (var_d(param_e_1) === 61) {
  var_d(param_e_1);
  return 8390458;
  }
  else {
  return 8390460;
  }
  }
  else if (var_t_1 === 62) {
  var_d(param_e_1);
  return 10;
  }
  else {
  return 1077936155;
  }
  }
  case 16842798:
  if (var_d(param_e_1) !== 61) {
  return 16842798;
  }
  else if (var_d(param_e_1) !== 61) {
  return 8390461;
  }
  else {
  var_d(param_e_1);
  return 8390459;
  }
  case 8391477:
  if (var_d(param_e_1) !== 61) {
  return 8391477;
  }
  else {
  var_d(param_e_1);
  return 4194340;
  }
  case 8391476:
  {
  var_d(param_e_1);
  if (param_e_1.index >= param_e_1.end) {
  return 8391476;
  }
  const var_t_1 = param_e_1.currentChar;
  if (var_t_1 === 61) {
  var_d(param_e_1);
  return 4194338;
  }
  else if (var_t_1 !== 42) {
  return 8391476;
  }
  else if (var_d(param_e_1) !== 61) {
  return 8391735;
  }
  else {
  var_d(param_e_1);
  return 4194335;
  }
  }
  case 8389959:
  if (var_d(param_e_1) !== 61) {
  return 8389959;
  }
  else {
  var_d(param_e_1);
  return 4194341;
  }
  case 25233968:
  {
  var_d(param_e_1);
  const var_t_1 = param_e_1.currentChar;
  if (var_t_1 === 43) {
  var_d(param_e_1);
  return 33619993;
  }
  else if (var_t_1 === 61) {
  var_d(param_e_1);
  return 4194336;
  }
  else {
  return 25233968;
  }
  }
  case 25233969:
  {
  var_d(param_e_1);
  const var_n_1 = param_e_1.currentChar;
  if (var_n_1 === 45) {
  var_d(param_e_1);
  if ((param_r & 1 || var_o_1) && param_e_1.currentChar === 62) {
  if (!param_e_1.options.webcompat) {
  param_e_1.report(114);
  }
  var_d(param_e_1);
  param_r = var_k(param_e_1, var_i_1, param_r, param_t, 3, param_e_1.tokenStart);
  continue;
  }
  return 33619994;
  }
  if (var_n_1 === 61) {
  var_d(param_e_1);
  return 4194337;
  }
  else {
  return 25233969;
  }
  }
  case 8457014:
  var_d(param_e_1);
  if (param_e_1.index < param_e_1.end) {
  const var_n_1 = param_e_1.currentChar;
  if (var_n_1 === 47) {
  var_d(param_e_1);
  param_r = var_b(param_e_1, var_i_1, param_r, 0, param_e_1.tokenStart);
  continue;
  }
  if (var_n_1 === 42) {
  var_d(param_e_1);
  param_r = var__(param_e_1, var_i_1, param_r);
  continue;
  }
  if (param_t & 32) {
  return var_M(param_e_1);
  }
  if (var_n_1 === 61) {
  var_d(param_e_1);
  return 4259875;
  }
  }
  return 8457014;
  case 67108877:
  {
  const var_n_1 = var_d(param_e_1);
  if (var_n_1 >= 48 && var_n_1 <= 57) {
  return var_L(param_e_1, param_t, 80);
  }
  if (var_n_1 === 46) {
  const var_t_1 = param_e_1.index + 1;
  if (var_t_1 < param_e_1.end && var_i_1.charCodeAt(var_t_1) === 46) {
  param_e_1.column += 2;
  param_e_1.currentChar = var_i_1.charCodeAt(param_e_1.index += 2);
  return 14;
  }
  }
  return 67108877;
  }
  case 8389702:
  {
  var_d(param_e_1);
  const var_t_1 = param_e_1.currentChar;
  if (var_t_1 === 124) {
  var_d(param_e_1);
  if (param_e_1.currentChar === 61) {
  var_d(param_e_1);
  return 4718632;
  }
  else {
  return 8913465;
  }
  }
  else if (var_t_1 === 61) {
  var_d(param_e_1);
  return 4194342;
  }
  else {
  return 8389702;
  }
  }
  case 8390721:
  {
  var_d(param_e_1);
  if (param_t & 1048576) {
  return 8390721;
  }
  const var_n_1 = param_e_1.currentChar;
  if (var_n_1 === 61) {
  var_d(param_e_1);
  return 8390719;
  }
  if (var_n_1 !== 62) {
  return 8390721;
  }
  var_d(param_e_1);
  if (param_e_1.index < param_e_1.end) {
  const var_t_1 = param_e_1.currentChar;
  if (var_t_1 === 62) {
  if (var_d(param_e_1) === 61) {
  var_d(param_e_1);
  return 4194334;
  }
  else {
  return 8390980;
  }
  }
  if (var_t_1 === 61) {
  var_d(param_e_1);
  return 4194333;
  }
  }
  return 8390979;
  }
  case 8390213:
  {
  var_d(param_e_1);
  const var_t_1 = param_e_1.currentChar;
  if (var_t_1 === 38) {
  var_d(param_e_1);
  if (param_e_1.currentChar === 61) {
  var_d(param_e_1);
  return 4718633;
  }
  else {
  return 8913720;
  }
  }
  else if (var_t_1 === 61) {
  var_d(param_e_1);
  return 4194343;
  }
  else {
  return 8390213;
  }
  }
  case 22:
  {
  let var_t_1 = var_d(param_e_1);
  if (var_t_1 === 63) {
  var_d(param_e_1);
  if (param_e_1.currentChar === 61) {
  var_d(param_e_1);
  return 4718634;
  }
  else {
  return 276824446;
  }
  }
  if (var_t_1 === 46) {
  const var_n_1 = param_e_1.index + 1;
  if (var_n_1 < param_e_1.end && (var_t_1 = var_i_1.charCodeAt(var_n_1), !(var_t_1 >= 48) ||
  !(var_t_1 <= 57))) {
  var_d(param_e_1);
  return 67108991;
  }
  }
  return 22;
  }
  }
  }
  else {
  if ((var_a_1 ^ 8232) <= 1) {
  param_r = param_r & -5 | 1;
  var_h(param_e_1);
  continue;
  }
  const var_o_2 = var_f(param_e_1);
  if (var_o_2 > 0) {
  var_a_1 = var_o_2;
  }
  if (fn_n(var_a_1)) {
  param_e_1.tokenValue = "";
  return var_N(param_e_1, param_t, 0, 0);
  }
  if (var_g(var_a_1)) {
  var_d(param_e_1);
  continue;
  }
  param_e_1.report(20, String.fromCodePoint(var_a_1));
  }
  }
  return 1048576;
  }
  function var_K(param_e_1, param_t) {
  var var_n;
  var var_r;
  if (!(param_e_1.flags & 1) && ~param_e_1.getToken() & 1048576) {
  param_e_1.report(30, list_x[param_e_1.getToken() & 255]);
  }
  if (!var_J(param_e_1, param_t, 1074790417) && (var_n = (var_r = param_e_1.options).onInsertedSemicolon) !== null &&
  var_n !== undefined) {
  var_n.call(var_r, param_e_1.startIndex);
  }
  }
  function var_X(param_e_1, param_t, param_n, param_r) {
  if (param_t - param_n < 13 && param_r === "use strict" && (!(~param_e_1.getToken(
  ) & 1048576) || param_e_1.flags & 1)) {
  return 1;
  }
  else {
  return 0;
  }
  }
  function var_$(param_e_1, param_t, param_n) {
  if (param_e_1.getToken() !== param_n) {
  return 0;
  }
  else {
  var_q(param_e_1, param_t);
  return 1;
  }
  }
  function var_J(param_e_1, param_t, param_n) {
  return param_e_1.getToken() === param_n && (var_q(param_e_1, param_t), true);
  }
  function var_Q(param_e_1, param_t, param_n) {
  if (param_e_1.getToken() !== param_n) {
  param_e_1.report(25, list_x[param_n & 255]);
  }
  var_q(param_e_1, param_t);
  }
  function var_Z(param_e_1, param_t) {
  switch (param_t.type) {
  case "ArrayExpression":
  {
  param_t.type = "ArrayPattern";
  const {
  elements: var_n
  }
  = param_t;
  for (let num_t = 0, var_r = var_n.length;
  num_t < var_r;
  ++num_t) {
  const var_r_1 = var_n[num_t];
  if (var_r_1) {
  var_Z(param_e_1, var_r_1);
  }
  }
  return;
  }
  case "ObjectExpression":
  {
  param_t.type = "ObjectPattern";
  const {
  properties: var_n
  }
  = param_t;
  for (let num_t = 0, var_r = var_n.length;
  num_t < var_r;
  ++num_t) {
  var_Z(param_e_1, var_n[num_t]);
  }
  return;
  }
  case "AssignmentExpression":
  param_t.type = "AssignmentPattern";
  if (param_t.operator !== "=") {
  param_e_1.report(71);
  }
  delete param_t.operator;
  var_Z(param_e_1, param_t.left);
  return;
  case "Property":
  var_Z(param_e_1, param_t.value);
  return;
  case "SpreadElement":
  param_t.type = "RestElement";
  var_Z(param_e_1, param_t.argument);
  }
  }
  function ee(param_e_1, param_t, param_n, param_r, param_o) {
  if (param_t & 1) {
  if (!(~param_r & 36864)) {
  param_e_1.report(120);
  }
  if (!param_o && !(~param_r & 537079808)) {
  param_e_1.report(121);
  }
  }
  if (!(~param_r & 20480) || param_r === -2147483527) {
  param_e_1.report(102);
  }
  if (param_n & 24 && (param_r & 255) == 73) {
  param_e_1.report(100);
  }
  if (param_t & 2050 && param_r === 209006) {
  param_e_1.report(112);
  }
  if (param_t & 1025 && param_r === 241771) {
  param_e_1.report(97, "yield");
  }
  }
  function te(param_e_1, param_t, param_n) {
  if (param_t & 1) {
  if (!(~param_n & 36864)) {
  param_e_1.report(120);
  }
  if (!(~param_n & 537079808)) {
  param_e_1.report(121);
  }
  if (param_n === -2147483526) {
  param_e_1.report(95);
  }
  if (param_n === -2147483527) {
  param_e_1.report(95);
  }
  }
  if (!(~param_n & 20480)) {
  param_e_1.report(102);
  }
  if (param_t & 2050 && param_n === 209006) {
  param_e_1.report(112);
  }
  if (param_t & 1025 && param_n === 241771) {
  param_e_1.report(97, "yield");
  }
  }
  function ne(param_e_1, param_t, param_n) {
  var var_r;
  if (param_n === 209006) {
  if (param_t & 2050) {
  param_e_1.report(112);
  }
  if (!(param_e_1.destructible & 128) && ((var_r = param_e_1.firstAwaitLocation) === null ||
  var_r === undefined)) {
  param_e_1.firstAwaitLocation = {
  start: param_e_1.tokenStart,
  end: param_e_1.currentLocation
  };
  }
  param_e_1.destructible |= 128;
  }
  if (param_n === 241771 && param_t & 1024) {
  param_e_1.report(97, "yield");
  }
  return !(~param_n & 20480) || !(~param_n & 36864) || param_n == -2147483526;
  }
  function re(param_e_1, param_t, param_n, param_r) {
  while (param_t) {
  if (param_t["$" + param_n]) {
  if (param_r) {
  param_e_1.report(139);
  }
  return 1;
  }
  if (param_r && param_t.loop) {
  param_r = 0;
  }
  param_t = param_t.$;
  }
  return 0;
  }
  function oe(param_e_1) {
  switch (param_e_1.type) {
  case "JSXIdentifier":
  return param_e_1.name;
  case "JSXNamespacedName":
  return param_e_1.namespace + ":" + param_e_1.name;
  case "JSXMemberExpression":
  return oe(param_e_1.object) + "." + oe(param_e_1.property);
  }
  }
  function ie(param_e_1, param_t) {
  if (param_e_1 & 1025) {
  return (!(param_e_1 & 2) || param_t !== 209006) && (!(param_e_1 & 1024) ||
  param_t !== 241771) && !(~param_t & 12288);
  }
  else {
  return !(~param_t & 12288) || !(~param_t & 36864);
  }
  }
  function ae(param_e_1, param_t, param_n) {
  if (!(~param_n & 537079808)) {
  if (param_t & 1) {
  param_e_1.report(121);
  }
  param_e_1.flags |= 512;
  }
  if (!ie(param_t, param_n)) {
  param_e_1.report(0);
  }
  }
  const se = new Map(Object.entries({
  quot: "\"",
  amp: "&",
  apos: "'",
  lt: "<",
  gt: ">",
  nbsp: "\xA0",
  iexcl: "¡",
  cent: "¢",
  pound: "£",
  curren: "¤",
  yen: "¥",
  brvbar: "¦",
  sect: "§",
  uml: "¨",
  copy: "©",
  ordf: "ª",
  laquo: "«",
  not: "¬",
  shy: "­",
  reg: "®",
  macr: "¯",
  deg: "°",
  plusmn: "±",
  sup2: "²",
  sup3: "³",
  acute: "´",
  micro: "µ",
  para: "¶",
  middot: "·",
  cedil: "¸",
  sup1: "¹",
  ordm: "º",
  raquo: "»",
  frac14: "¼",
  frac12: "½",
  frac34: "¾",
  iquest: "¿",
  Agrave: "À",
  Aacute: "Á",
  Acirc: "Â",
  Atilde: "Ã",
  Auml: "Ä",
  Aring: "Å",
  AElig: "Æ",
  Ccedil: "Ç",
  Egrave: "È",
  Eacute: "É",
  Ecirc: "Ê",
  Euml: "Ë",
  Igrave: "Ì",
  Iacute: "Í",
  Icirc: "Î",
  Iuml: "Ï",
  ETH: "Ð",
  Ntilde: "Ñ",
  Ograve: "Ò",
  Oacute: "Ó",
  Ocirc: "Ô",
  Otilde: "Õ",
  Ouml: "Ö",
  times: "×",
  Oslash: "Ø",
  Ugrave: "Ù",
  Uacute: "Ú",
  Ucirc: "Û",
  Uuml: "Ü",
  Yacute: "Ý",
  THORN: "Þ",
  szlig: "ß",
  agrave: "à",
  aacute: "á",
  acirc: "â",
  atilde: "ã",
  auml: "ä",
  aring: "å",
  aelig: "æ",
  ccedil: "ç",
  egrave: "è",
  eacute: "é",
  ecirc: "ê",
  euml: "ë",
  igrave: "ì",
  iacute: "í",
  icirc: "î",
  iuml: "ï",
  eth: "ð",
  ntilde: "ñ",
  ograve: "ò",
  oacute: "ó",
  ocirc: "ô",
  otilde: "õ",
  ouml: "ö",
  divide: "÷",
  oslash: "ø",
  ugrave: "ù",
  uacute: "ú",
  ucirc: "û",
  uuml: "ü",
  yacute: "ý",
  thorn: "þ",
  yuml: "ÿ",
  OElig: "Œ",
  oelig: "œ",
  Scaron: "Š",
  scaron: "š",
  Yuml: "Ÿ",
  fnof: "ƒ",
  circ: "ˆ",
  tilde: "˜",
  Alpha: "Α",
  Beta: "Β",
  Gamma: "Γ",
  Delta: "Δ",
  Epsilon: "Ε",
  Zeta: "Ζ",
  Eta: "Η",
  Theta: "Θ",
  Iota: "Ι",
  Kappa: "Κ",
  Lambda: "Λ",
  Mu: "Μ",
  Nu: "Ν",
  Xi: "Ξ",
  Omicron: "Ο",
  Pi: "Π",
  Rho: "Ρ",
  Sigma: "Σ",
  Tau: "Τ",
  Upsilon: "Υ",
  Phi: "Φ",
  Chi: "Χ",
  Psi: "Ψ",
  Omega: "Ω",
  alpha: "α",
  beta: "β",
  gamma: "γ",
  delta: "δ",
  epsilon: "ε",
  zeta: "ζ",
  eta: "η",
  theta: "θ",
  iota: "ι",
  kappa: "κ",
  lambda: "λ",
  mu: "μ",
  nu: "ν",
  xi: "ξ",
  omicron: "ο",
  pi: "π",
  rho: "ρ",
  sigmaf: "ς",
  sigma: "σ",
  tau: "τ",
  upsilon: "υ",
  phi: "φ",
  chi: "χ",
  psi: "ψ",
  omega: "ω",
  thetasym: "ϑ",
  upsih: "ϒ",
  piv: "ϖ",
  ensp: "\u2002",
  emsp: "\u2003",
  thinsp: "\u2009",
  zwnj: "‌",
  zwj: "‍",
  lrm: "‎",
  rlm: "‏",
  ndash: "–",
  mdash: "—",
  lsquo: "‘",
  rsquo: "’",
  sbquo: "‚",
  ldquo: "“",
  rdquo: "”",
  bdquo: "„",
  dagger: "†",
  Dagger: "‡",
  bull: "•",
  hellip: "…",
  permil: "‰",
  prime: "′",
  Prime: "″",
  lsaquo: "‹",
  rsaquo: "›",
  oline: "‾",
  frasl: "⁄",
  euro: "€",
  image: "ℑ",
  weierp: "℘",
  real: "ℜ",
  trade: "™",
  alefsym: "ℵ",
  larr: "←",
  uarr: "↑",
  rarr: "→",
  darr: "↓",
  harr: "↔",
  crarr: "↵",
  lArr: "⇐",
  uArr: "⇑",
  rArr: "⇒",
  dArr: "⇓",
  hArr: "⇔",
  forall: "∀",
  part: "∂",
  exist: "∃",
  empty: "∅",
  nabla: "∇",
  isin: "∈",
  notin: "∉",
  ni: "∋",
  prod: "∏",
  sum: "∑",
  minus: "−",
  lowast: "∗",
  radic: "√",
  prop: "∝",
  infin: "∞",
  ang: "∠",
  and: "∧",
  or: "∨",
  cap: "∩",
  cup: "∪",
  int: "∫",
  there4: "∴",
  sim: "∼",
  cong: "≅",
  asymp: "≈",
  ne: "≠",
  equiv: "≡",
  le: "≤",
  ge: "≥",
  sub: "⊂",
  sup: "⊃",
  nsub: "⊄",
  sube: "⊆",
  supe: "⊇",
  oplus: "⊕",
  otimes: "⊗",
  perp: "⊥",
  sdot: "⋅",
  lceil: "⌈",
  rceil: "⌉",
  lfloor: "⌊",
  rfloor: "⌋",
  lang: "〈",
  rang: "〉",
  loz: "◊",
  spades: "♠",
  clubs: "♣",
  hearts: "♥",
  diams: "♦"
  }
  ));
  function ce(param_e_1) {
  return param_e_1.replaceAll(/&(?:[\da-zA-Z]+|#x[\da-fA-F]+|#\d+);/g, param_e_2 => {
  if (param_e_2.charAt(1) === "#") {
  const var_t_1 = param_e_2.charAt(2) === "x" ? parseInt(param_e_2.slice(3), 16) :
  parseInt(param_e_2.slice(2), 10);
  if (var_t_1 > 1114111) {
  return param_e_2;
  }
  else {
  return String.fromCodePoint(var_t_1);
  }
  }
  return se.get(param_e_2.slice(1, -1)) ?? param_e_2;
  }
  );
  }
  function le(param_e_1, param_t) {
  param_e_1.startIndex = param_e_1.tokenIndex = param_e_1.index;
  param_e_1.startColumn = param_e_1.tokenColumn = param_e_1.column;
  param_e_1.startLine = param_e_1.tokenLine = param_e_1.line;
  param_e_1.setToken(list_o[param_e_1.currentChar] & 8192 ? function (param_e_2) {
  const var_t_1 = param_e_2.currentChar;
  let var_n = var_d(param_e_2);
  const var_r = param_e_2.index;
  while (var_n !== var_t_1) {
  if (param_e_2.index >= param_e_2.end) {
  param_e_2.report(16);
  }
  if (var_n === 13) {
  if (param_e_2.source.charCodeAt(param_e_2.index + 1) === 10) {
  var_d(param_e_2);
  }
  param_e_2.column = -1;
  param_e_2.line++;
  }
  else if (var_n === 10 || var_n === 8232 || var_n === 8233) {
  param_e_2.column = -1;
  param_e_2.line++;
  }
  var_n = var_d(param_e_2);
  }
  if (var_n !== var_t_1) {
  param_e_2.report(16);
  }
  param_e_2.tokenValue = ce(param_e_2.source.slice(var_r, param_e_2.index));
  var_d(param_e_2);
  if (param_e_2.options.raw) {
  param_e_2.tokenRaw = param_e_2.source.slice(param_e_2.tokenIndex, param_e_2.index);
  }
  return 134283267;
  }
  (param_e_1) : var_Y(param_e_1, param_t, 0));
  return param_e_1.getToken();
  }
  function ue(param_e_1) {
  param_e_1.startIndex = param_e_1.tokenIndex = param_e_1.index;
  param_e_1.startColumn = param_e_1.tokenColumn = param_e_1.column;
  param_e_1.startLine = param_e_1.tokenLine = param_e_1.line;
  if (param_e_1.index >= param_e_1.end) {
  param_e_1.setToken(1048576);
  return;
  }
  if (param_e_1.currentChar === 60) {
  var_d(param_e_1);
  param_e_1.setToken(8456256);
  return;
  }
  if (param_e_1.currentChar === 123) {
  var_d(param_e_1);
  param_e_1.setToken(2162700);
  return;
  }
  if (param_e_1.currentChar === 125) {
  param_e_1.report(180);
  }
  if (param_e_1.currentChar === 62) {
  param_e_1.report(181);
  }
  let num_t = 0;
  let flag_n = false;
  while (param_e_1.index < param_e_1.end) {
  const var_r_1 = param_e_1.source.charCodeAt(param_e_1.index);
  if (var_r_1 === 13) {
  num_t |= 5;
  flag_n = true;
  var_h(param_e_1);
  }
  else if (var_r_1 === 10) {
  var_p(param_e_1, num_t);
  num_t = num_t & -5 | 1;
  }
  else if (var_r_1 === 8232 || var_r_1 === 8233) {
  param_e_1.flags |= 1;
  param_e_1.currentChar = param_e_1.source.charCodeAt(++param_e_1.index);
  param_e_1.column = 0;
  param_e_1.line++;
  num_t = num_t & -5 | 1;
  }
  else {
  var_d(param_e_1);
  }
  if (list_o[param_e_1.currentChar] & 16384) {
  break;
  }
  }
  if (param_e_1.tokenIndex === param_e_1.index) {
  param_e_1.report(0);
  }
  const var_r = param_e_1.source.slice(param_e_1.tokenIndex, param_e_1.index);
  const var_i_1 = flag_n ? var_r.replaceAll("\r\n", "\n") : var_r;
  if (param_e_1.options.raw) {
  param_e_1.tokenRaw = var_i_1;
  }
  param_e_1.tokenValue = ce(var_i_1);
  param_e_1.setToken(138);
  }
  function de(param_e_1) {
  if (param_e_1.getToken() & 143360) {
  const {
  index: var_t_1
  }
  = param_e_1;
  let var_n = param_e_1.currentChar;
  while (list_o[var_n] & 32770) {
  var_n = var_d(param_e_1);
  }
  param_e_1.tokenValue += param_e_1.source.slice(var_t_1, param_e_1.index);
  param_e_1.setToken(208897, true);
  }
  return param_e_1.getToken();
  }
  class fe {
  constructor(param_e_1, param_t) {
  var_a(this, "parser", undefined);
  var_a(this, "parent", undefined);
  var_a(this, "refs", Object.create(null));
  var_a(this, "privateIdentifiers", new Map());
  this.parser = param_e_1;
  this.parent = param_t;
  }
  addPrivateIdentifier(param_e_1, param_t) {
  const {
  privateIdentifiers: var_n
  }
  = this;
  let var_r = param_t & 800;
  if (!(var_r & 768)) {
  var_r |= 768;
  }
  const var_o_1 = var_n.get(param_e_1);
  if (this.hasPrivateIdentifier(param_e_1) && ((var_o_1 & 32) != (var_r & 32) ||
  var_o_1 & var_r & 768)) {
  this.parser.report(148, param_e_1);
  }
  var_n.set(param_e_1, this.hasPrivateIdentifier(param_e_1) ?
  var_o_1 | var_r : var_r);
  }
  addPrivateIdentifierRef(param_e_1) {
  var var_t_1;
  var var_n;
  if ((var_n = (var_t_1 = this.refs)[param_e_1]) === null ||
  var_n === undefined) {
  var_t_1[param_e_1] = [];
  }
  this.refs[param_e_1].push(this.parser.tokenStart);
  }
  isPrivateIdentifierDefined(param_e_1) {
  var var_t_1;
  return this.hasPrivateIdentifier(param_e_1) || Boolean((var_t_1 = this.parent) === null ||
  var_t_1 === undefined ? undefined : var_t_1.isPrivateIdentifierDefined(param_e_1));
  }
  validatePrivateIdentifierRefs() {
  for (const var_e in this.refs) {
  if (!this.isPrivateIdentifierDefined(var_e)) {
  const {
  index: var_t_1,
  line: var_n,
  column: var_r
  }
  = this.refs[var_e][0];
  throw new var_S({
  index: var_t_1,
  line: var_n,
  column: var_r
  }
  , {
  index: var_t_1 + var_e.length,
  line: var_n,
  column: var_r + var_e.length
  }
  , 4, var_e);
  }
  }
  }
  hasPrivateIdentifier(param_e_1) {
  return this.privateIdentifiers.has(param_e_1);
  }
  }
  class pe {
  constructor(param_e_1, param_t = 2, param_n) {
  var_a(this, "parser", undefined);
  var_a(this, "type", undefined);
  var_a(this, "parent", undefined);
  var_a(this, "scopeError", undefined);
  var_a(this, "variableBindings", new Map());
  this.parser = param_e_1;
  this.type = param_t;
  this.parent = param_n;
  }
  createChildScope(param_e_1) {
  return new pe(this.parser, param_e_1, this);
  }
  addVarOrBlock(param_e_1, param_t, param_n, param_r, param_o, param_i) {
  if (param_n & 4) {
  this.addVarName(param_e_1, param_t, param_n, param_r, param_o);
  }
  else {
  this.addBlockName(param_e_1, param_t, param_n, param_r, param_o, param_i);
  }
  if (param_i & 64) {
  this.parser.declareUnboundVariable(param_t);
  }
  }
  addVarName(param_e_1, param_t, param_n, param_r, param_o) {
  const {
  parser: var_i_1
  }
  = this;
  let var_a_1 = this;
  while (var_a_1 && !(var_a_1.type & 128)) {
  const {
  variableBindings: var_s
  }
  = var_a_1;
  const var_c = var_s.get(param_t);
  if (var_c && var_c & 248 && (!var_i_1.options.webcompat ||
  param_e_1 & 1 || (!(param_n & 128) || !(var_c & 68)) && (!(var_c & 128) ||
  !(param_n & 68)))) {
  throw new var_S(param_r, param_o, 147, param_t);
  }
  if (var_a_1 === this && var_c && var_c & 1 && param_n & 1) {
  var_a_1.recordScopeError(147, param_r, param_o, param_t);
  }
  if (var_c && (var_c & 256 || var_c & 512 && !var_i_1.options.webcompat)) {
  throw new var_S(param_r, param_o, 147, param_t);
  }
  var_a_1.variableBindings.set(param_t, param_n);
  var_a_1 = var_a_1.parent;
  }
  }
  hasVariable(param_e_1) {
  return this.variableBindings.has(param_e_1);
  }
  addBlockName(param_e_1, param_t, param_n, param_r, param_o, param_i = 0) {
  var var_a_1;
  const {
  parser: var_s
  }
  = this;
  const var_c = this.variableBindings.get(param_t);
  if (var_c && !(var_c & 2)) {
  if (param_n & 1) {
  this.recordScopeError(147, param_r, param_o, param_t);
  }
  else if (!var_s.options.webcompat || param_e_1 & 1 || !(param_i & 2) ||
  var_c !== 64 || param_n !== 64) {
  throw new var_S(param_r, param_o, 147, param_t);
  }
  }
  if (this.type & 64 && (var_a_1 = this.parent) !== null && var_a_1 !== undefined &&
  var_a_1.hasVariable(param_t) && !(this.parent.variableBindings.get(param_t) & 2)) {
  throw new var_S(param_r, param_o, 147, param_t);
  }
  if (this.type & 512 && var_c && !(var_c & 2) && param_n & 1) {
  this.recordScopeError(147, param_r, param_o, param_t);
  }
  if (this.type & 32 && this.parent.variableBindings.get(param_t) & 768) {
  throw new var_S(param_r, param_o, 161, param_t);
  }
  this.variableBindings.set(param_t, param_n);
  }
  recordScopeError(param_e_1, param_t, param_n, ...param_r) {
  var var_o_1;
  if ((var_o_1 = this.scopeError) === null || var_o_1 === undefined) {
  this.scopeError = {
  type: param_e_1,
  params: param_r,
  start: param_t,
  end: param_n
  };
  }
  }
  reportScopeError() {
  const {
  scopeError: var_e
  }
  = this;
  if (var_e) {
  throw new var_S(var_e.start, var_e.end, var_e.type, ...var_e.params);
  }
  }
  }
  function he(param_e_1, param_t, param_n, param_r, param_o) {
  const var_i_1 = param_e_1.createScope().createChildScope(512);
  var_i_1.addBlockName(param_t, param_n, 1, param_r, param_o);
  return var_i_1;
  }
  class ge {
  constructor(param_e_1, param_t = {
  }
  ) {
  var var_n;
  var var_o_1;
  var_a(this, "source", undefined);
  var_a(this, "lastOnToken", null);
  var_a(this, "options", undefined);
  var_a(this, "token", 1048576);
  var_a(this, "flags", 0);
  var_a(this, "features", 0);
  var_a(this, "index", 0);
  var_a(this, "line", 1);
  var_a(this, "column", 0);
  var_a(this, "startIndex", 0);
  var_a(this, "end", 0);
  var_a(this, "tokenIndex", 0);
  var_a(this, "startColumn", 0);
  var_a(this, "tokenColumn", 0);
  var_a(this, "tokenLine", 1);
  var_a(this, "startLine", 1);
  var_a(this, "tokenValue", "");
  var_a(this, "tokenRaw", "");
  var_a(this, "tokenRegExp", undefined);
  var_a(this, "currentChar", 0);
  var_a(this, "exportedNames", new Set());
  var_a(this, "exportedBindings", new Set());
  var_a(this, "assignable", 0);
  var_a(this, "destructible", 0);
  var_a(this, "strictReservedRange", null);
  var_a(this, "firstAwaitLocation", null);
  var_a(this, "leadingDecorators", {
  decorators: []
  }
  );
  this.source = param_e_1;
  this.end = param_e_1.length;
  this.currentChar = param_e_1.charCodeAt(0);
  this.options = function (param_e_2) {
  let var_t_1 = var_i({
  validateRegex: true,
  features: 0
  }
  , param_e_2);
  let {
  features: var_n_1,
  next: var_o_2,
  ranges: var_a_1,
  module: var_s,
  sourceType: var_c,
  globalReturn: var_l_1
  }
  = var_t_1;
  let var_u_1 = function (param_e_3, param_t_1) {
  if (param_e_3 == null) {
  return {
  };
  }
  var var_n_2;
  var var_r;
  var var_o_3 = function (param_e_4, param_t_2) {
  if (param_e_4 == null) {
  return {
  };
  }
  var obj_n = {
  };
  for (var var_r_1 in param_e_4) {
  if ({
  }
  .hasOwnProperty.call(param_e_4, var_r_1)) {
  if (param_t_2.indexOf(var_r_1) !== -1) {
  continue;
  }
  obj_n[var_r_1] = param_e_4[var_r_1];
  }
  }
  return obj_n;
  }
  (param_e_3, param_t_1);
  if (Object.getOwnPropertySymbols) {
  var var_i_1 = Object.getOwnPropertySymbols(param_e_3);
  for (var_r = 0;
  var_r < var_i_1.length;
  var_r++) {
  var_n_2 = var_i_1[var_r];
  if (param_t_1.indexOf(var_n_2) === -1 && {
  }
  .propertyIsEnumerable.call(param_e_3, var_n_2)) {
  var_o_3[var_n_2] = param_e_3[var_n_2];
  }
  }
  }
  return var_o_3;
  }
  (var_t_1, list_r);
  if (var_o_2) {
  var_n_1 |= 7;
  }
  var_a_1 = function (param_e_3, param_t_1, param_n, param_r) {
  if (param_e_3) {
  if (param_e_3 === true) {
  return {
  start: true,
  end: true,
  range: true
  };
  }
  else {
  return {
  start: (param_t_1 = param_e_3.start) !== null && param_t_1 !== undefined &&
  param_t_1,
  end: (param_n = param_e_3.end) !== null && param_n !== undefined &&
  param_n,
  range: (param_r = param_e_3.range) !== null && param_r !== undefined &&
  param_r
  };
  }
  }
  }
  (var_a_1);
  if (var_s && !var_c) {
  var_c = "module";
  }
  if (!!var_l_1 && (!var_c || var_c === "script")) {
  var_c = "commonjs";
  }
  return var_i(var_i({
  }
  , var_u_1), {
  }
  , {
  ranges: var_a_1,
  features: var_n_1,
  sourceType: var_c
  }
  );
  }
  (param_t);
  this.features = this.options.features;
  if (Array.isArray(this.options.onComment)) {
  this.options.onComment = (var_n = this.options.onComment, var_o_1 = this.options,
  function (param_e_2, param_t_1, param_r, param_i, param_a) {
  const obj_s = {
  type: param_e_2,
  value: param_t_1
  };
  const {
  ranges: var_c
  }
  = var_o_1;
  if (var_c) {
  if (var_c.start) {
  obj_s.start = param_r;
  }
  if (var_c.end) {
  obj_s.end = param_i;
  }
  if (var_c.range) {
  obj_s.range = [param_r, param_i];
  }
  }
  if (var_o_1.loc) {
  obj_s.loc = param_a;
  }
  var_n.push(obj_s);
  }
  );
  }
  if (Array.isArray(this.options.onToken)) {
  this.options.onToken = function (param_e_2, param_t_1) {
  return function (param_n, param_r, param_o, param_i) {
  const obj_a = {
  token: param_n
  };
  const {
  ranges: var_s
  }
  = param_t_1;
  if (var_s) {
  if (var_s.start) {
  obj_a.start = param_r;
  }
  if (var_s.end) {
  obj_a.end = param_o;
  }
  if (var_s.range) {
  obj_a.range = [param_r, param_o];
  }
  }
  if (param_t_1.loc) {
  obj_a.loc = param_i;
  }
  param_e_2.push(obj_a);
  };
  }
  (this.options.onToken, this.options);
  }
  }
  getToken() {
  return this.token;
  }
  setToken(param_e_1, param_t = false) {
  this.token = param_e_1;
  const {
  onToken: var_n
  }
  = this.options;
  if (var_n) {
  if (param_e_1 !== 1048576) {
  const obj_r = {
  start: {
  line: this.tokenLine,
  column: this.tokenColumn
  }
  ,
  end: {
  line: this.line,
  column: this.column
  }
  };
  if (!param_t && this.lastOnToken) {
  var_n(...this.lastOnToken);
  }
  this.lastOnToken = [var_v(param_e_1), this.tokenIndex, this.index, obj_r];
  }
  else if (this.lastOnToken) {
  var_n(...this.lastOnToken);
  this.lastOnToken = null;
  }
  }
  return param_e_1;
  }
  get tokenStart() {
  return {
  index: this.tokenIndex,
  line: this.tokenLine,
  column: this.tokenColumn
  };
  }
  get startPosition() {
  return {
  index: this.startIndex,
  line: this.startLine,
  column: this.startColumn
  };
  }
  get currentLocation() {
  return {
  index: this.index,
  line: this.line,
  column: this.column
  };
  }
  finishNode(param_e_1, param_t, param_n) {
  const {
  ranges: var_r
  }
  = this.options;
  if (var_r) {
  const var_o_1 = param_n ? param_n.index : this.startIndex;
  if (var_r.start) {
  param_e_1.start = param_t.index;
  }
  if (var_r.end) {
  param_e_1.end = var_o_1;
  }
  if (var_r.range) {
  param_e_1.range = [param_t.index, var_o_1];
  }
  }
  if (this.options.loc) {
  param_e_1.loc = {
  start: {
  line: param_t.line,
  column: param_t.column
  }
  ,
  end: param_n ? {
  line: param_n.line,
  column: param_n.column
  }
  : {
  line: this.startLine,
  column: this.startColumn
  }
  };
  if (this.options.source) {
  param_e_1.loc.source = this.options.source;
  }
  }
  return param_e_1;
  }
  addBindingToExports(param_e_1) {
  this.exportedBindings.add(param_e_1);
  }
  declareUnboundVariable(param_e_1) {
  const {
  exportedNames: var_t_1
  }
  = this;
  if (var_t_1.has(param_e_1)) {
  this.report(149, param_e_1);
  }
  var_t_1.add(param_e_1);
  }
  report(param_e_1, ...param_t) {
  throw new var_S(this.tokenStart, this.currentLocation, param_e_1, ...param_t);
  }
  createScopeIfLexical(param_e_1, param_t) {
  if (this.options.lexical) {
  return this.createScope(param_e_1, param_t);
  }
  }
  createScope(param_e_1, param_t) {
  return new pe(this, param_e_1, param_t);
  }
  createPrivateScopeIfLexical(param_e_1) {
  if (this.options.lexical) {
  return new fe(this, param_e_1);
  }
  }
  cloneIdentifier(param_e_1) {
  return structuredClone(param_e_1);
  }
  cloneStringLiteral(param_e_1) {
  return structuredClone(param_e_1);
  }
  }
  function me(param_e_1, param_t = {
  }
  , param_n = 0) {
  const var_r = new ge(param_e_1, param_t);
  if (var_r.options.sourceType === "module") {
  param_n |= 3;
  }
  if (var_r.options.sourceType === "commonjs") {
  param_n |= 69632;
  }
  if (var_r.options.impliedStrict) {
  param_n |= 1;
  }
  (function (param_e_2) {
  const {
  source: var_t_1
  }
  = param_e_2;
  if (param_e_2.currentChar === 35 && var_t_1.charCodeAt(param_e_2.index + 1) === 33) {
  var_d(param_e_2);
  var_d(param_e_2);
  var_b(param_e_2, var_t_1, 0, 4, param_e_2.tokenStart);
  }
  }
  )(var_r);
  const var_o_1 = var_r.createScopeIfLexical();
  let var_i_1;
  let str_a = "script";
  if (param_n & 2) {
  str_a = "module";
  var_i_1 = function (param_e_2, param_t_1, param_n_1) {
  var_q(param_e_2, param_t_1 | 32);
  const list_r_1 = [];
  while (param_e_2.getToken() === 134283267) {
  const {
  tokenStart: var_n
  }
  = param_e_2;
  const var_o_2 = param_e_2.getToken();
  list_r_1.push(we(param_e_2, param_t_1, lt(param_e_2, param_t_1), var_o_2, var_n));
  }
  while (param_e_2.getToken() !== 1048576) {
  list_r_1.push(ve(param_e_2, param_t_1, param_n_1));
  }
  return list_r_1;
  }
  (var_r, param_n | 8, var_o_1);
  if (var_o_1) {
  for (const var_e of var_r.exportedBindings) {
  if (!var_o_1.hasVariable(var_e)) {
  var_r.report(150, var_e);
  }
  }
  }
  }
  else {
  var_i_1 = function (param_e_2, param_t_1, param_n_1) {
  var_q(param_e_2, param_t_1 | 262176);
  const list_r_1 = [];
  while (param_e_2.getToken() === 134283267) {
  const {
  index: var_n,
  tokenValue: var_o_2,
  tokenStart: var_i_2,
  tokenIndex: var_a_1
  }
  = param_e_2;
  const var_s = param_e_2.getToken();
  const var_c = lt(param_e_2, param_t_1);
  if (var_X(param_e_2, var_n, var_a_1, var_o_2)) {
  param_t_1 |= 1;
  if (param_e_2.flags & 64) {
  throw new var_S(param_e_2.tokenStart, param_e_2.currentLocation, 9);
  }
  if (param_e_2.flags & 4096) {
  throw new var_S(param_e_2.tokenStart, param_e_2.currentLocation, 15);
  }
  }
  list_r_1.push(we(param_e_2, param_t_1, var_c, var_s, var_i_2));
  }
  while (param_e_2.getToken() !== 1048576) {
  list_r_1.push(ye(param_e_2, param_t_1, param_n_1, undefined, {
  }
  , 4));
  }
  return list_r_1;
  }
  (var_r, param_n | 8, var_o_1);
  }
  return var_r.finishNode({
  type: "Program",
  sourceType: str_a,
  body: var_i_1
  }
  , {
  index: 0,
  line: 1,
  column: 0
  }
  , var_r.currentLocation);
  }
  function ve(param_e_1, param_t, param_n) {
  let var_r;
  if (param_e_1.getToken() === 133) {
  Object.assign(param_e_1.leadingDecorators, {
  start: param_e_1.tokenStart,
  decorators: Et(param_e_1, param_t, undefined)
  }
  );
  }
  switch (param_e_1.getToken()) {
  case 20564:
  var_r = function (param_e_2, param_t_1, param_n_1) {
  const var_r_1 = param_e_2.leadingDecorators.decorators.length ?
  param_e_2.leadingDecorators.start : param_e_2.tokenStart;
  var_q(param_e_2, param_t_1 | 32);
  const var_o_1 = var_J(param_e_2, param_t_1 | 32, 20561);
  if (param_e_2.leadingDecorators.decorators.length && param_e_2.getToken() !== 86094) {
  param_e_2.report(172);
  }
  const list_i = [];
  let var_a_1 = null;
  let var_s = null;
  let list_c_1 = [];
  if (var_o_1) {
  switch (param_e_2.getToken()) {
  case 86104:
  var_a_1 = ut(param_e_2, param_t_1, param_n_1, undefined, 1, 1, 0, param_e_2.tokenStart,
  4);
  break;
  case 133:
  if (!(param_e_2.features & 1)) {
  param_e_2.report(30, "@");
  }
  case 86094:
  var_a_1 = wt(param_e_2, param_t_1, param_n_1, undefined, 1);
  break;
  case 209005:
  {
  const {
  tokenStart: var_r_2
  }
  = param_e_2;
  var_a_1 = ct(param_e_2, param_t_1);
  const {
  flags: var_o_2
  }
  = param_e_2;
  if (!(var_o_2 & 1)) {
  if (param_e_2.getToken() === 86104) {
  var_a_1 = ut(param_e_2, param_t_1, param_n_1, undefined, 1, 1, 1, var_r_2, 4);
  }
  else if (param_e_2.getToken() === 67174411) {
  var_a_1 = xt(param_e_2, param_t_1, undefined, var_a_1, 1, 1, var_o_2, var_r_2);
  var_a_1 = Ye(param_e_2, param_t_1, undefined, var_a_1, 0, 0, var_r_2);
  var_a_1 = je(param_e_2, param_t_1, undefined, 0, 0, var_r_2, var_a_1);
  }
  else if (param_e_2.getToken() & 143360) {
  param_n_1 &&= he(param_e_2, param_t_1, param_e_2.tokenValue, param_e_2.tokenStart,
  param_e_2.currentLocation);
  var_a_1 = ct(param_e_2, param_t_1);
  var_a_1 = _t(param_e_2, param_t_1, param_n_1, undefined, [var_a_1], 1, var_r_2);
  }
  }
  break;
  }
  default:
  var_a_1 = Me(param_e_2, param_t_1, undefined, 1, 0, param_e_2.tokenStart);
  var_K(param_e_2, param_t_1 | 32);
  }
  if (param_n_1) {
  param_e_2.declareUnboundVariable("default");
  }
  return param_e_2.finishNode({
  type: "ExportDefaultDeclaration",
  declaration: var_a_1
  }
  , var_r_1);
  }
  switch (param_e_2.getToken()) {
  case 8391476:
  {
  var_q(param_e_2, param_t_1);
  let var_o_2 = null;
  if (var_J(param_e_2, param_t_1, 77932)) {
  if (param_n_1) {
  param_e_2.declareUnboundVariable(param_e_2.tokenValue);
  }
  var_o_2 = tt(param_e_2, param_t_1);
  }
  var_Q(param_e_2, param_t_1, 209011);
  if (param_e_2.getToken() !== 134283267) {
  param_e_2.report(105, "Export");
  }
  var_s = lt(param_e_2, param_t_1);
  const obj_i = {
  type: "ExportAllDeclaration",
  source: var_s,
  exported: var_o_2,
  attributes: Qe(param_e_2, param_t_1)
  };
  var_K(param_e_2, param_t_1 | 32);
  return param_e_2.finishNode(obj_i, var_r_1);
  }
  case 2162700:
  {
  var_q(param_e_2, param_t_1);
  const list_r_1 = [];
  const list_o_1 = [];
  let num_a = 0;
  while (param_e_2.getToken() & 143360 || param_e_2.getToken() === 134283267) {
  const {
  tokenStart: var_s_1,
  tokenValue: var_c
  }
  = param_e_2;
  const var_l_1 = tt(param_e_2, param_t_1);
  let var_u_1;
  if (var_l_1.type === "Literal") {
  num_a = 1;
  }
  if (param_e_2.getToken() === 77932) {
  var_q(param_e_2, param_t_1);
  if (!(param_e_2.getToken() & 143360) && param_e_2.getToken() !== 134283267) {
  param_e_2.report(106);
  }
  if (param_n_1) {
  list_r_1.push(param_e_2.tokenValue);
  list_o_1.push(var_c);
  }
  var_u_1 = tt(param_e_2, param_t_1);
  }
  else {
  if (param_n_1) {
  list_r_1.push(param_e_2.tokenValue);
  list_o_1.push(param_e_2.tokenValue);
  }
  var_u_1 = var_l_1.type === "Literal" ? param_e_2.cloneStringLiteral(var_l_1) :
  param_e_2.cloneIdentifier(var_l_1);
  }
  list_i.push(param_e_2.finishNode({
  type: "ExportSpecifier",
  local: var_l_1,
  exported: var_u_1
  }
  , var_s_1));
  if (param_e_2.getToken() !== 1074790415) {
  var_Q(param_e_2, param_t_1, 18);
  }
  }
  var_Q(param_e_2, param_t_1, 1074790415);
  if (var_J(param_e_2, param_t_1, 209011)) {
  if (param_e_2.getToken() !== 134283267) {
  param_e_2.report(105, "Export");
  }
  var_s = lt(param_e_2, param_t_1);
  list_c_1 = Qe(param_e_2, param_t_1);
  if (param_n_1) {
  list_r_1.forEach(param_t_2 => param_e_2.declareUnboundVariable(param_t_2));
  }
  }
  else {
  if (num_a) {
  param_e_2.report(174);
  }
  if (param_n_1) {
  list_r_1.forEach(param_t_2 => param_e_2.declareUnboundVariable(param_t_2));
  list_o_1.forEach(param_t_2 => param_e_2.addBindingToExports(param_t_2));
  }
  }
  var_K(param_e_2, param_t_1 | 32);
  break;
  }
  case 133:
  if (!(param_e_2.features & 1)) {
  param_e_2.report(30, "@");
  }
  case 86094:
  var_a_1 = wt(param_e_2, param_t_1, param_n_1, undefined, 2);
  break;
  case 86104:
  var_a_1 = ut(param_e_2, param_t_1, param_n_1, undefined, 1, 2, 0, param_e_2.tokenStart,
  4);
  break;
  case 241737:
  var_a_1 = Oe(param_e_2, param_t_1, param_n_1, undefined, 8, 64);
  break;
  case 86090:
  var_a_1 = Oe(param_e_2, param_t_1, param_n_1, undefined, 16, 64);
  break;
  case 86088:
  var_a_1 = Ie(param_e_2, param_t_1, param_n_1, undefined, 64);
  break;
  case 209005:
  {
  const {
  tokenStart: var_r_2
  }
  = param_e_2;
  var_q(param_e_2, param_t_1);
  if (!(param_e_2.flags & 1) && param_e_2.getToken() === 86104) {
  var_a_1 = ut(param_e_2, param_t_1, param_n_1, undefined, 1, 2, 1, var_r_2, 4);
  break;
  }
  }
  default:
  param_e_2.report(30, list_x[param_e_2.getToken() & 255]);
  }
  const obj_l = {
  type: "ExportNamedDeclaration",
  declaration: var_a_1,
  specifiers: list_i,
  source: var_s,
  attributes: list_c_1
  };
  return param_e_2.finishNode(obj_l, var_r_1);
  }
  (param_e_1, param_t, param_n);
  break;
  case 86106:
  if (param_e_1.leadingDecorators.decorators.length) {
  param_e_1.report(172);
  }
  var_r = function (param_e_2, param_t_1, param_n_1) {
  const var_r_1 = param_e_2.tokenStart;
  let var_o_1;
  var_q(param_e_2, param_t_1);
  let flag_a = false;
  let var_s = null;
  const {
  tokenStart: var_c
  }
  = param_e_2;
  let list_l = [];
  if (param_e_2.getToken() === 134283267) {
  var_o_1 = lt(param_e_2, param_t_1);
  }
  else {
  if (param_e_2.getToken() & 143360) {
  const var_r_2 = param_e_2.getToken();
  const {
  tokenValue: var_i_1,
  tokenStart: var_u_2,
  currentLocation: var_d_1
  }
  = param_e_2;
  const var_f_1 = param_e_2.features & 2 && !(var_r_2 & -2147483648) &&
  var_i_1 == "defer";
  const var_p_1 = param_e_2.features & 4 && !(var_r_2 & -2147483648) &&
  var_i_1 == "source";
  if (var_f_1 || var_p_1) {
  const var_r_3 = ct(param_e_2, param_t_1);
  if (var_i_1 === "defer") {
  if (param_e_2.getToken() === 8391476) {
  var_s = "defer";
  list_l = [Le(param_e_2, param_t_1, param_n_1)];
  }
  else if (param_e_2.getToken() === 209011 || param_e_2.getToken() === 18) {
  if (param_n_1 != null) {
  param_n_1.addBlockName(param_t_1, var_i_1, 8, var_u_2, var_d_1);
  }
  list_l = [param_e_2.finishNode({
  type: "ImportDefaultSpecifier",
  local: var_r_3
  }
  , var_c)];
  }
  else {
  param_e_2.report(108);
  }
  }
  else if (param_e_2.getToken() === 209011) {
  const var_f_2 = param_e_2.getToken();
  const var_p_2 = param_e_2.tokenStart;
  const var_h_1 = param_e_2.currentLocation;
  const var_g_1 = ct(param_e_2, param_t_1);
  if (param_e_2.getToken() === 209011) {
  ee(param_e_2, param_t_1, 16, var_f_2, 0);
  if (param_n_1 != null) {
  param_n_1.addBlockName(param_t_1, var_g_1.name, 8, var_p_2, var_h_1);
  }
  var_s = "source";
  list_l = [param_e_2.finishNode({
  type: "ImportDefaultSpecifier",
  local: var_g_1
  }
  , var_p_2)];
  }
  else {
  if (param_n_1 != null) {
  param_n_1.addBlockName(param_t_1, var_i_1, 8, var_u_2, var_d_1);
  }
  list_l = [param_e_2.finishNode({
  type: "ImportDefaultSpecifier",
  local: var_r_3
  }
  , var_c)];
  if (param_e_2.getToken() !== 134283267) {
  param_e_2.report(105, "Import");
  }
  var_o_1 = lt(param_e_2, param_t_1);
  flag_a = true;
  }
  }
  else if (param_e_2.getToken() & 143360) {
  var_s = "source";
  const var_r_4 = param_e_2.tokenStart;
  const var_o_2 = Re(param_e_2, param_t_1, param_n_1);
  list_l = [param_e_2.finishNode({
  type: "ImportDefaultSpecifier",
  local: var_o_2
  }
  , var_r_4)];
  }
  else if (param_e_2.getToken() === 18) {
  if (param_n_1 != null) {
  param_n_1.addBlockName(param_t_1, var_i_1, 8, var_u_2, var_d_1);
  }
  list_l = [param_e_2.finishNode({
  type: "ImportDefaultSpecifier",
  local: var_r_3
  }
  , var_c)];
  }
  else {
  param_e_2.report(109);
  }
  }
  else {
  const var_r_3 = Re(param_e_2, param_t_1, param_n_1);
  list_l = [param_e_2.finishNode({
  type: "ImportDefaultSpecifier",
  local: var_r_3
  }
  , var_c)];
  }
  if (var_s === null && !flag_a && var_J(param_e_2, param_t_1, 18)) {
  switch (param_e_2.getToken()) {
  case 8391476:
  list_l.push(Le(param_e_2, param_t_1, param_n_1));
  break;
  case 2162700:
  Pe(param_e_2, param_t_1, param_n_1, list_l);
  break;
  default:
  param_e_2.report(107);
  }
  }
  }
  else {
  switch (param_e_2.getToken()) {
  case 8391476:
  list_l = [Le(param_e_2, param_t_1, param_n_1)];
  break;
  case 2162700:
  Pe(param_e_2, param_t_1, param_n_1, list_l);
  break;
  case 67174411:
  return Ue(param_e_2, param_t_1, undefined, var_r_1);
  case 67108877:
  return Be(param_e_2, param_t_1, var_r_1);
  default:
  param_e_2.report(30, list_x[param_e_2.getToken() & 255]);
  }
  }
  if (!flag_a) {
  var_o_1 = function (param_e_3, param_t_2) {
  var_Q(param_e_3, param_t_2, 209011);
  if (param_e_3.getToken() !== 134283267) {
  param_e_3.report(105, "Import");
  }
  return lt(param_e_3, param_t_2);
  }
  (param_e_2, param_t_1);
  }
  }
  const var_u_1 = var_i({
  type: "ImportDeclaration",
  specifiers: list_l,
  source: var_o_1,
  attributes: Qe(param_e_2, param_t_1)
  }
  , param_e_2.features & 2 || param_e_2.features & 4 ? {
  phase: var_s
  }
  : null);
  var_K(param_e_2, param_t_1 | 32);
  return param_e_2.finishNode(var_u_1, var_r_1);
  }
  (param_e_1, param_t, param_n);
  break;
  default:
  var_r = ye(param_e_1, param_t, param_n, undefined, {
  }
  , 4);
  }
  return var_r;
  }
  function ye(param_e_1, param_t, param_n, param_r, param_o, param_i = 2) {
  const var_a_1 = param_e_1.tokenStart;
  if (param_e_1.leadingDecorators.decorators.length && param_e_1.getToken() !== 86094) {
  param_e_1.report(172);
  }
  switch (param_e_1.getToken()) {
  case 86104:
  return ut(param_e_1, param_t, param_n, param_r, 1, 0, 0, var_a_1, param_i);
  case 133:
  if (!(param_e_1.features & 1)) {
  param_e_1.report(30, "@");
  }
  case 86094:
  return wt(param_e_1, param_t, param_n, param_r, 0);
  case 86090:
  return Oe(param_e_1, param_t, param_n, param_r, 16);
  case 241737:
  return function (param_e_2, param_t_1, param_n_1, param_r_1, param_o_1) {
  const {
  tokenValue: var_i_1,
  tokenStart: var_a_2,
  currentLocation: var_s
  }
  = param_e_2;
  const var_c = param_e_2.getToken();
  let var_l_1 = ct(param_e_2, param_t_1);
  if (param_e_2.getToken() & 2240512 && ~param_e_2.getToken() & 20480) {
  const var_o_1 = Ne(param_e_2, param_t_1, param_n_1, param_r_1, 8);
  var_K(param_e_2, param_t_1 | 32);
  return param_e_2.finishNode({
  type: "VariableDeclaration",
  kind: "let",
  declarations: var_o_1
  }
  , var_a_2);
  }
  param_e_2.assignable = 1;
  if (param_t_1 & 1) {
  param_e_2.report(85);
  }
  if (param_e_2.getToken() === 21) {
  return Se(param_e_2, param_t_1, param_n_1, param_r_1, {
  }
  , var_i_1, var_l_1, var_c, 0, var_a_2, param_o_1);
  }
  if (param_e_2.getToken() === 10) {
  let var_n;
  if (param_e_2.options.lexical) {
  var_n = he(param_e_2, param_t_1, var_i_1, var_a_2, var_s);
  }
  param_e_2.flags = (param_e_2.flags | 128) ^ 128;
  var_l_1 = _t(param_e_2, param_t_1, var_n, param_r_1, [var_l_1], 0, var_a_2);
  }
  else {
  var_l_1 = Ye(param_e_2, param_t_1, param_r_1, var_l_1, 0, 0, var_a_2);
  var_l_1 = je(param_e_2, param_t_1, param_r_1, 0, 0, var_a_2, var_l_1);
  }
  if (param_e_2.getToken() === 18) {
  var_l_1 = Ve(param_e_2, param_t_1, param_r_1, 0, var_a_2, var_l_1);
  }
  return Te(param_e_2, param_t_1, var_l_1, var_a_2);
  }
  (param_e_1, param_t, param_n, param_r, param_i);
  case 209013:
  return function (param_e_2, param_t_1, param_n_1, param_r_1, param_o_1, param_i_1) {
  const {
  tokenStart: var_a_2,
  tokenValue: var_s,
  currentLocation: var_c
  }
  = param_e_2;
  const var_l_1 = param_e_2.getToken();
  const var_u_1 = ct(param_e_2, param_t_1);
  if (!(param_e_2.flags & 1) && Ce(param_e_2.getToken())) {
  if (!!(param_i_1 & 4) && !!(param_t_1 & 8) && !(param_t_1 & 2) &&
  !(param_t_1 & 4096)) {
  param_e_2.report(30, list_x[param_e_2.getToken() & 255]);
  }
  return Oe(param_e_2, param_t_1, param_n_1, param_r_1, 16, param_i_1, "using", var_a_2,
  1);
  }
  param_e_2.assignable = 1;
  if (param_e_2.getToken() === 10) {
  let var_n;
  if (param_e_2.options.lexical) {
  var_n = he(param_e_2, param_t_1, var_s, var_a_2, var_c);
  }
  param_e_2.flags = (param_e_2.flags | 128) ^ 128;
  return Te(param_e_2, param_t_1, _t(param_e_2, param_t_1, var_n, param_r_1, [var_u_1],
  0, var_a_2), var_a_2);
  }
  return be(param_e_2, param_t_1, param_n_1, param_r_1, param_o_1, 1, var_u_1, var_l_1,
  var_s, var_a_2, param_i_1);
  }
  (param_e_1, param_t, param_n, param_r, param_o, param_i);
  case 209006:
  if ((param_t & 2048 || param_t & 2 && param_t & 8) && function (param_e_2) {
  const {
  index: var_t_1,
  source: var_n
  }
  = param_e_2;
  let var_r = var_t_1;
  while (var_r < param_e_2.end) {
  const var_t_2 = var_n.charCodeAt(var_r);
  if (var_t_2 === 10 || var_t_2 === 13 || var_t_2 === 8232 ||
  var_t_2 === 8233) {
  return false;
  }
  if (/\s/u.test(var_n[var_r])) {
  var_r++;
  }
  else {
  if (var_t_2 !== 47 || var_n.charCodeAt(var_r + 1) !== 42) {
  break;
  }
  for (var_r += 2;
  var_r < param_e_2.end;
  ) {
  const var_e = var_n.charCodeAt(var_r);
  if (var_e === 10 || var_e === 13 || var_e === 8232 || var_e === 8233) {
  return false;
  }
  if (var_e === 42 && var_n.charCodeAt(var_r + 1) === 47) {
  var_r += 2;
  break;
  }
  var_r++;
  }
  }
  }
  if (var_n.slice(var_r, var_r + 5) !== "using") {
  return false;
  }
  const var_o_1 = var_n.codePointAt(var_r + 5);
  return var_o_1 === undefined || var_o_1 !== 92 && !var_u(var_o_1);
  }
  (param_e_1)) {
  return function (param_e_2, param_t_1, param_n_1, param_r_1, param_o_1, param_i_1) {
  const var_a_2 = param_e_2.tokenStart;
  let var_s;
  if (param_t_1 & 524288) {
  param_e_2.report(179);
  }
  var_q(param_e_2, param_t_1 | 32);
  if (param_e_2.flags & 1 || param_e_2.getToken() !== 209013) {
  var_s = qe(param_e_2, param_t_1, param_r_1, 0, 0, 1);
  }
  else {
  const var_o_1 = param_e_2.tokenStart;
  const var_c_1 = ct(param_e_2, param_t_1);
  if (!(param_e_2.flags & 1) && Ce(param_e_2.getToken())) {
  return Oe(param_e_2, param_t_1, param_n_1, param_r_1, 16, param_i_1, "await using",
  var_a_2, 1);
  }
  var_s = Ye(param_e_2, param_t_1, param_r_1, var_c_1, 0, 0, var_o_1);
  }
  if (param_e_2.getToken() === 8391735) {
  param_e_2.report(33);
  }
  param_e_2.assignable = 2;
  const var_c = param_e_2.finishNode({
  type: "AwaitExpression",
  argument: var_s
  }
  , var_a_2);
  return be(param_e_2, param_t_1, param_n_1, param_r_1, param_o_1, 0, var_c, 1048576,
  "", var_a_2, param_i_1);
  }
  (param_e_1, param_t, param_n, param_r, param_o, param_i);
  }
  else {
  return ke(param_e_1, param_t, param_n, param_r, param_o, 1, param_i);
  }
  case 20564:
  param_e_1.report(103, "export");
  case 86106:
  var_q(param_e_1, param_t);
  switch (param_e_1.getToken()) {
  case 67174411:
  return Ue(param_e_1, param_t, param_r, var_a_1);
  case 67108877:
  return Be(param_e_1, param_t, var_a_1);
  default:
  param_e_1.report(103, "import");
  }
  case 209005:
  return xe(param_e_1, param_t, param_n, param_r, param_o, 1, param_i);
  default:
  return ke(param_e_1, param_t, param_n, param_r, param_o, 1, param_i);
  }
  }
  function ke(param_e_1, param_t, param_n, param_r, param_o, param_i, param_a = 0) {
  switch (param_e_1.getToken()) {
  case 86088:
  return Ie(param_e_1, param_t, param_n, param_r);
  case 20572:
  return function (param_e_2, param_t_1, param_n_1) {
  if (!(param_t_1 & 4096)) {
  param_e_2.report(92);
  }
  const var_r = param_e_2.tokenStart;
  var_q(param_e_2, param_t_1 | 32);
  const var_o_1 = param_e_2.flags & 1 || param_e_2.getToken() & 1048576 ?
  null : He(param_e_2, param_t_1, param_n_1, 0, 1, param_e_2.tokenStart);
  var_K(param_e_2, param_t_1 | 32);
  return param_e_2.finishNode({
  type: "ReturnStatement",
  argument: var_o_1
  }
  , var_r);
  }
  (param_e_1, param_t, param_r);
  case 20569:
  return function (param_e_2, param_t_1, param_n_1, param_r_1, param_o_1) {
  const var_i_1 = param_e_2.tokenStart;
  var_q(param_e_2, param_t_1);
  var_Q(param_e_2, param_t_1 | 32, 67174411);
  param_e_2.assignable = 1;
  const var_a_1 = He(param_e_2, param_t_1, param_r_1, 0, 1, param_e_2.tokenStart);
  var_Q(param_e_2, param_t_1 | 32, 16);
  const var_s = Ee(param_e_2, param_t_1, param_n_1, param_r_1, param_o_1);
  let var_c = null;
  if (param_e_2.getToken() === 20563) {
  var_q(param_e_2, param_t_1 | 32);
  var_c = Ee(param_e_2, param_t_1, param_n_1, param_r_1, param_o_1);
  }
  return param_e_2.finishNode({
  type: "IfStatement",
  test: var_a_1,
  consequent: var_s,
  alternate: var_c
  }
  , var_i_1);
  }
  (param_e_1, param_t, param_n, param_r, param_o);
  case 20567:
  return function (param_e_2, param_t_1, param_n_1, param_r_1, param_o_1, param_i_1) {
  const var_a_1 = param_e_2.tokenStart;
  var_q(param_e_2, param_t_1);
  const var_s = ((param_t_1 & 2048) > 0 || (param_t_1 & 2) > 0 &&
  (param_t_1 & 8) > 0) && var_J(param_e_2, param_t_1, 209006);
  var_Q(param_e_2, param_t_1 | 32, 67174411);
  param_n_1 = (param_i_1 = param_n_1) === null || param_i_1 === undefined ?
  undefined : param_i_1.createChildScope(1);
  let var_c;
  let var_l_1;
  let var_u_1 = null;
  let var_d_1 = null;
  let num_f = 0;
  let var_p_1 = null;
  let var_h_1 = param_e_2.getToken() === 86088 || param_e_2.getToken() === 241737 ||
  param_e_2.getToken() === 86090 || param_e_2.getToken() === 209013;
  let flag_g = false;
  const {
  tokenStart: var_m_1
  }
  = param_e_2;
  const var_v_1 = param_e_2.getToken();
  if (var_h_1) {
  if (var_v_1 === 241737) {
  var_p_1 = ct(param_e_2, param_t_1);
  if (param_e_2.getToken() & 2240512 && ~param_e_2.getToken() & 20480) {
  var_p_1 = param_e_2.finishNode({
  type: "VariableDeclaration",
  kind: "let",
  declarations: Ne(param_e_2, param_t_1 | 131072, param_n_1, param_r_1, 8, 32)
  }
  , var_m_1);
  param_e_2.assignable = 1;
  }
  else if (param_t_1 & 1) {
  param_e_2.report(67);
  }
  else {
  var_h_1 = false;
  param_e_2.assignable = 1;
  var_p_1 = Ye(param_e_2, param_t_1, param_r_1, var_p_1, 0, 0, var_m_1);
  if (param_e_2.getToken() === 471156) {
  param_e_2.report(117);
  }
  }
  }
  else if (var_v_1 === 209013) {
  const var_o_1 = ct(param_e_2, param_t_1);
  if (param_e_2.flags & 1 || !Ce(param_e_2.getToken())) {
  var_h_1 = false;
  param_e_2.assignable = 1;
  var_p_1 = Ye(param_e_2, param_t_1, param_r_1, var_o_1, 0, 0, var_m_1);
  }
  else if (param_e_2.getToken() === 471156) {
  const var_i_1 = param_e_2.tokenStart;
  const var_a_2 = param_e_2.currentLocation;
  const var_s_1 = param_e_2.getToken();
  const var_l_2 = param_e_2.tokenValue;
  const var_u_2 = ct(param_e_2, param_t_1);
  if (param_e_2.getToken() !== 1077936155 && param_e_2.getToken() !== 8673330 &&
  param_e_2.getToken() !== 1074790417 && param_e_2.getToken() !== 18) {
  var_h_1 = false;
  flag_g = true;
  param_e_2.assignable = 1;
  var_p_1 = var_o_1;
  }
  else {
  var var_y;
  var_c = "using";
  ee(param_e_2, param_t_1, 16, var_s_1, 0);
  if ((var_y = param_n_1) !== null && var_y !== undefined) {
  var_y.addBlockName(param_t_1, var_l_2, 16, var_i_1, var_a_2, 32);
  }
  let var_o_2 = null;
  if (param_e_2.getToken() === 1077936155) {
  var_q(param_e_2, param_t_1 | 32);
  var_o_2 = Me(param_e_2, param_t_1 | 131072, param_r_1, 1, 0, param_e_2.tokenStart);
  if (!(~param_e_2.getToken() & 262144)) {
  throw new var_S(var_i_1, param_e_2.currentLocation, 60, param_e_2.getToken() === 471156 ?
  "of" : "in");
  }
  }
  else if (param_e_2.getToken() !== 8673330) {
  param_e_2.report(59, var_c);
  }
  const list_d = [param_e_2.finishNode({
  type: "VariableDeclarator",
  id: var_u_2,
  init: var_o_2
  }
  , var_i_1)];
  const var_f_1 = param_e_2.options.lexical ? new Set([var_l_2]) :
  undefined;
  while (var_J(param_e_2, param_t_1 | 131072, 18)) {
  const var_o_3 = De(param_e_2, param_t_1 | 131072, param_n_1, param_r_1, 16, 32,
  var_c);
  if (var_f_1) {
  const {
  name: var_t_1
  }
  = var_o_3.id;
  if (var_f_1.has(var_t_1)) {
  param_e_2.report(147, var_t_1);
  }
  var_f_1.add(var_t_1);
  }
  list_d.push(var_o_3);
  }
  if (list_d.length > 1 && param_e_2.getToken() & 262144) {
  param_e_2.report(61, list_x[param_e_2.getToken() & 255]);
  }
  var_p_1 = param_e_2.finishNode({
  type: "VariableDeclaration",
  kind: var_c,
  declarations: list_d
  }
  , var_m_1);
  param_e_2.assignable = 1;
  }
  }
  else {
  var_c = "using";
  var_p_1 = param_e_2.finishNode({
  type: "VariableDeclaration",
  kind: var_c,
  declarations: Ne(param_e_2, param_t_1 | 131072, param_n_1, param_r_1, 16, 32, var_c)
  }
  , var_m_1);
  param_e_2.assignable = 1;
  }
  }
  else {
  var_q(param_e_2, param_t_1);
  var_p_1 = param_e_2.finishNode(var_v_1 === 86088 ? {
  type: "VariableDeclaration",
  kind: "var",
  declarations: Ne(param_e_2, param_t_1 | 131072, param_n_1, param_r_1, 4, 32)
  }
  : {
  type: "VariableDeclaration",
  kind: "const",
  declarations: Ne(param_e_2, param_t_1 | 131072, param_n_1, param_r_1, 16, 32)
  }
  , var_m_1);
  param_e_2.assignable = 1;
  }
  }
  else if (var_v_1 === 209006 && (param_t_1 & 2048 || param_t_1 & 2 &&
  param_t_1 & 8)) {
  let var_o_1;
  if (param_t_1 & 524288) {
  param_e_2.report(179);
  }
  var_q(param_e_2, param_t_1 | 32);
  if (param_e_2.flags & 1 || param_e_2.getToken() !== 209013) {
  var_o_1 = qe(param_e_2, param_t_1, param_r_1, 0, 0, 1);
  }
  else {
  const var_i_1 = param_e_2.tokenStart;
  const var_a_2 = ct(param_e_2, param_t_1);
  if (param_e_2.flags & 1 || !Ce(param_e_2.getToken())) {
  var_o_1 = Ye(param_e_2, param_t_1, param_r_1, var_a_2, 0, 0, var_i_1);
  }
  else {
  var_c = "await using";
  var_h_1 = true;
  var_p_1 = param_e_2.finishNode({
  type: "VariableDeclaration",
  kind: var_c,
  declarations: Ne(param_e_2, param_t_1 | 131072, param_n_1, param_r_1, 16, 32, var_c)
  }
  , var_m_1);
  param_e_2.assignable = 1;
  }
  }
  if (!var_h_1) {
  if (param_e_2.getToken() === 8391735) {
  param_e_2.report(33);
  }
  param_e_2.assignable = 2;
  var_p_1 = param_e_2.finishNode({
  type: "AwaitExpression",
  argument: var_o_1
  }
  , var_m_1);
  }
  }
  else if (var_s && var_v_1 === 209005) {
  const var_n = ct(param_e_2, param_t_1);
  param_e_2.assignable = 1;
  var_p_1 = Ye(param_e_2, param_t_1 | 131072, param_r_1, var_n, 0, 0, var_m_1);
  }
  else if (var_v_1 === 1074790417) {
  if (var_s) {
  param_e_2.report(82);
  }
  }
  else if (~var_v_1 & 2097152) {
  var_p_1 = qe(param_e_2, param_t_1 | 131072, param_r_1, 1, 0, 1);
  }
  else {
  const var_n = param_e_2.tokenStart;
  var_p_1 = var_v_1 === 2162700 ? mt(param_e_2, param_t_1, undefined, param_r_1,
  1, 0, 0, 2, 32) : ft(param_e_2, param_t_1, undefined, param_r_1, 1, 0, 0, 2, 32);
  num_f = param_e_2.destructible;
  if (num_f & 64) {
  param_e_2.report(63);
  }
  param_e_2.assignable = num_f & 16 ? 2 : 1;
  var_p_1 = Ye(param_e_2, param_t_1 | 131072, param_r_1, var_p_1, 0, 0, var_n);
  }
  if (flag_g || !(~param_e_2.getToken() & 262144)) {
  if (flag_g || param_e_2.getToken() === 471156) {
  if (param_e_2.assignable & 2) {
  param_e_2.report(80, var_s ? "await" : "of");
  }
  var_Z(param_e_2, var_p_1);
  if (!flag_g) {
  var_q(param_e_2, param_t_1 | 32);
  }
  var_l_1 = Me(param_e_2, param_t_1, param_r_1, 1, 0, param_e_2.tokenStart);
  var_Q(param_e_2, param_t_1 | 32, 16);
  const var_i_2 = Ae(param_e_2, param_t_1, param_n_1, param_r_1, param_o_1);
  return param_e_2.finishNode({
  type: "ForOfStatement",
  left: var_p_1,
  right: var_l_1,
  body: var_i_2,
  await: var_s
  }
  , var_a_1);
  }
  if (var_c) {
  param_e_2.report(30, "in");
  }
  if (param_e_2.assignable & 2) {
  param_e_2.report(80, "in");
  }
  var_Z(param_e_2, var_p_1);
  var_q(param_e_2, param_t_1 | 32);
  if (var_s) {
  param_e_2.report(82);
  }
  var_l_1 = He(param_e_2, param_t_1, param_r_1, 0, 1, param_e_2.tokenStart);
  var_Q(param_e_2, param_t_1 | 32, 16);
  const var_i_1 = Ae(param_e_2, param_t_1, param_n_1, param_r_1, param_o_1);
  return param_e_2.finishNode({
  type: "ForInStatement",
  body: var_i_1,
  left: var_p_1,
  right: var_l_1
  }
  , var_a_1);
  }
  if (var_s) {
  param_e_2.report(82);
  }
  if (!var_h_1) {
  if (num_f & 8 && param_e_2.getToken() !== 1077936155) {
  param_e_2.report(80, "loop");
  }
  var_p_1 = je(param_e_2, param_t_1 | 131072, param_r_1, 0, 0, var_m_1, var_p_1);
  }
  if (param_e_2.getToken() === 18) {
  var_p_1 = Ve(param_e_2, param_t_1, param_r_1, 0, var_m_1, var_p_1);
  }
  var_Q(param_e_2, param_t_1 | 32, 1074790417);
  if (param_e_2.getToken() !== 1074790417) {
  var_u_1 = He(param_e_2, param_t_1, param_r_1, 0, 1, param_e_2.tokenStart);
  }
  var_Q(param_e_2, param_t_1 | 32, 1074790417);
  if (param_e_2.getToken() !== 16) {
  var_d_1 = He(param_e_2, param_t_1, param_r_1, 0, 1, param_e_2.tokenStart);
  }
  var_Q(param_e_2, param_t_1 | 32, 16);
  const var_k_1 = Ae(param_e_2, param_t_1, param_n_1, param_r_1, param_o_1);
  return param_e_2.finishNode({
  type: "ForStatement",
  init: var_p_1,
  test: var_u_1,
  update: var_d_1,
  body: var_k_1
  }
  , var_a_1);
  }
  (param_e_1, param_t, param_n, param_r, param_o);
  case 20562:
  return function (param_e_2, param_t_1, param_n_1, param_r_1, param_o_1) {
  const var_i_1 = param_e_2.tokenStart;
  var_q(param_e_2, param_t_1 | 32);
  const var_a_1 = Ae(param_e_2, param_t_1, param_n_1, param_r_1, param_o_1);
  var_Q(param_e_2, param_t_1, 20578);
  var_Q(param_e_2, param_t_1 | 32, 67174411);
  const var_s = He(param_e_2, param_t_1, param_r_1, 0, 1, param_e_2.tokenStart);
  var_Q(param_e_2, param_t_1 | 32, 16);
  var_J(param_e_2, param_t_1 | 32, 1074790417);
  return param_e_2.finishNode({
  type: "DoWhileStatement",
  body: var_a_1,
  test: var_s
  }
  , var_i_1);
  }
  (param_e_1, param_t, param_n, param_r, param_o);
  case 20578:
  return function (param_e_2, param_t_1, param_n_1, param_r_1, param_o_1) {
  const var_i_1 = param_e_2.tokenStart;
  var_q(param_e_2, param_t_1);
  var_Q(param_e_2, param_t_1 | 32, 67174411);
  const var_a_1 = He(param_e_2, param_t_1, param_r_1, 0, 1, param_e_2.tokenStart);
  var_Q(param_e_2, param_t_1 | 32, 16);
  const var_s = Ae(param_e_2, param_t_1, param_n_1, param_r_1, param_o_1);
  return param_e_2.finishNode({
  type: "WhileStatement",
  test: var_a_1,
  body: var_s
  }
  , var_i_1);
  }
  (param_e_1, param_t, param_n, param_r, param_o);
  case 86110:
  return function (param_e_2, param_t_1, param_n_1, param_r_1, param_o_1, param_i_1) {
  const var_a_1 = param_e_2.tokenStart;
  var_q(param_e_2, param_t_1);
  var_Q(param_e_2, param_t_1 | 32, 67174411);
  const var_s = He(param_e_2, param_t_1, param_r_1, 0, 1, param_e_2.tokenStart);
  var_Q(param_e_2, param_t_1, 16);
  var_Q(param_e_2, param_t_1, 2162700);
  const list_c_1 = [];
  let num_l = 0;
  for (param_n_1 = (param_i_1 = param_n_1) === null || param_i_1 === undefined ?
  undefined : param_i_1.createChildScope(8);
  param_e_2.getToken() !== 1074790415;
  ) {
  const {
  tokenStart: var_i_1
  }
  = param_e_2;
  let var_a_2 = null;
  const list_s_1 = [];
  if (var_J(param_e_2, param_t_1 | 32, 20556)) {
  var_a_2 = He(param_e_2, param_t_1, param_r_1, 0, 1, param_e_2.tokenStart);
  }
  else {
  var_Q(param_e_2, param_t_1 | 32, 20561);
  if (num_l) {
  param_e_2.report(89);
  }
  num_l = 1;
  }
  var_Q(param_e_2, param_t_1 | 32, 21);
  while (param_e_2.getToken() !== 20556 && param_e_2.getToken() !== 1074790415 &&
  param_e_2.getToken() !== 20561) {
  const var_i_2 = ye(param_e_2, param_t_1 | 4, param_n_1, param_r_1, {
  $: param_o_1
  }
  );
  if (var_i_2.type === "VariableDeclaration" && (var_i_2.kind === "using" ||
  var_i_2.kind === "await using")) {
  param_e_2.report(30, var_i_2.kind);
  }
  list_s_1.push(var_i_2);
  }
  list_c_1.push(param_e_2.finishNode({
  type: "SwitchCase",
  test: var_a_2,
  consequent: list_s_1
  }
  , var_i_1));
  }
  var_Q(param_e_2, param_t_1 | 32, 1074790415);
  return param_e_2.finishNode({
  type: "SwitchStatement",
  discriminant: var_s,
  cases: list_c_1
  }
  , var_a_1);
  }
  (param_e_1, param_t, param_n, param_r, param_o);
  case 1074790417:
  return function (param_e_2, param_t_1) {
  const var_n = param_e_2.tokenStart;
  var_q(param_e_2, param_t_1 | 32);
  return param_e_2.finishNode({
  type: "EmptyStatement"
  }
  , var_n);
  }
  (param_e_1, param_t);
  case 2162700:
  return _e(param_e_1, param_t, param_n == null ? undefined :
  param_n.createChildScope(), param_r, param_o, param_e_1.tokenStart);
  case 86112:
  return function (param_e_2, param_t_1, param_n_1) {
  const var_r = param_e_2.tokenStart;
  var_q(param_e_2, param_t_1 | 32);
  if (param_e_2.flags & 1) {
  param_e_2.report(90);
  }
  const var_o_1 = He(param_e_2, param_t_1, param_n_1, 0, 1, param_e_2.tokenStart);
  var_K(param_e_2, param_t_1 | 32);
  return param_e_2.finishNode({
  type: "ThrowStatement",
  argument: var_o_1
  }
  , var_r);
  }
  (param_e_1, param_t, param_r);
  case 20555:
  return function (param_e_2, param_t_1, param_n_1) {
  const var_r = param_e_2.tokenStart;
  var_q(param_e_2, param_t_1 | 32);
  let var_o_1 = null;
  if (!(param_e_2.flags & 1) && param_e_2.getToken() & 143360) {
  const {
  tokenValue: var_r_1
  }
  = param_e_2;
  var_o_1 = ct(param_e_2, param_t_1 | 32);
  if (!re(param_e_2, param_n_1, var_r_1, 0)) {
  param_e_2.report(140, var_r_1);
  }
  }
  else if (!(param_t_1 & 132)) {
  param_e_2.report(69);
  }
  var_K(param_e_2, param_t_1 | 32);
  return param_e_2.finishNode({
  type: "BreakStatement",
  label: var_o_1
  }
  , var_r);
  }
  (param_e_1, param_t, param_o);
  case 20559:
  return function (param_e_2, param_t_1, param_n_1) {
  if (!(param_t_1 & 128)) {
  param_e_2.report(68);
  }
  const var_r = param_e_2.tokenStart;
  var_q(param_e_2, param_t_1);
  let var_o_1 = null;
  if (!(param_e_2.flags & 1) && param_e_2.getToken() & 143360) {
  const {
  tokenValue: var_r_1
  }
  = param_e_2;
  var_o_1 = ct(param_e_2, param_t_1 | 32);
  if (!re(param_e_2, param_n_1, var_r_1, 1)) {
  param_e_2.report(140, var_r_1);
  }
  }
  var_K(param_e_2, param_t_1 | 32);
  return param_e_2.finishNode({
  type: "ContinueStatement",
  label: var_o_1
  }
  , var_r);
  }
  (param_e_1, param_t, param_o);
  case 20577:
  return function (param_e_2, param_t_1, param_n_1, param_r_1, param_o_1) {
  const var_i_1 = param_e_2.tokenStart;
  var_q(param_e_2, param_t_1 | 32);
  const var_a_1 = _e(param_e_2, param_t_1, param_n_1 == null ?
  undefined : param_n_1.createChildScope(16), param_r_1, {
  $: param_o_1
  }
  );
  const {
  tokenStart: var_s
  }
  = param_e_2;
  const var_c = var_J(param_e_2, param_t_1 | 32, 20557) ? function (param_e_3, param_t_2,
  param_n_2, param_r_2, param_o_2, param_i_1, param_a_1, param_s) {
  let var_c_1 = null;
  if (var_J(param_e_3, param_t_2, 67174411)) {
  var_c_1 = Dt(param_e_3, param_t_2, param_n_2 = (param_a_1 = param_n_2) === null ||
  param_a_1 === undefined ? undefined : param_a_1.createChildScope(4), param_r_2,
  ~param_e_3.getToken() & 2097152 ? 512 : 256);
  if (param_e_3.getToken() === 18) {
  param_e_3.report(86);
  }
  else if (param_e_3.getToken() === 1077936155) {
  param_e_3.report(87);
  }
  var_Q(param_e_3, param_t_2 | 32, 16);
  }
  const var_l_2 = _e(param_e_3, param_t_2, (param_s = param_n_2) === null ||
  param_s === undefined ? undefined : param_s.createChildScope(32), param_r_2, {
  $: param_o_2
  }
  );
  return param_e_3.finishNode({
  type: "CatchClause",
  param: var_c_1,
  body: var_l_2
  }
  , param_i_1);
  }
  (param_e_2, param_t_1, param_n_1, param_r_1, param_o_1, var_s) :
  null;
  let var_l_1 = null;
  if (param_e_2.getToken() === 20566) {
  var_q(param_e_2, param_t_1 | 32);
  var_l_1 = _e(param_e_2, param_t_1, param_n_1 == null ? undefined :
  param_n_1.createChildScope(4), param_r_1, {
  $: param_o_1
  }
  );
  }
  if (!var_c && !var_l_1) {
  param_e_2.report(88);
  }
  return param_e_2.finishNode({
  type: "TryStatement",
  block: var_a_1,
  handler: var_c,
  finalizer: var_l_1
  }
  , var_i_1);
  }
  (param_e_1, param_t, param_n, param_r, param_o);
  case 20579:
  return function (param_e_2, param_t_1, param_n_1, param_r_1, param_o_1) {
  const var_i_1 = param_e_2.tokenStart;
  var_q(param_e_2, param_t_1);
  if (param_t_1 & 1) {
  param_e_2.report(91);
  }
  var_Q(param_e_2, param_t_1 | 32, 67174411);
  const var_a_1 = He(param_e_2, param_t_1, param_r_1, 0, 1, param_e_2.tokenStart);
  var_Q(param_e_2, param_t_1 | 32, 16);
  const var_s = ke(param_e_2, param_t_1, param_n_1, param_r_1, param_o_1, 0, 2);
  return param_e_2.finishNode({
  type: "WithStatement",
  object: var_a_1,
  body: var_s
  }
  , var_i_1);
  }
  (param_e_1, param_t, param_n, param_r, param_o);
  case 20560:
  return function (param_e_2, param_t_1) {
  const var_n = param_e_2.tokenStart;
  var_q(param_e_2, param_t_1 | 32);
  var_K(param_e_2, param_t_1 | 32);
  return param_e_2.finishNode({
  type: "DebuggerStatement"
  }
  , var_n);
  }
  (param_e_1, param_t);
  case 209005:
  return xe(param_e_1, param_t, param_n, param_r, param_o, 0, param_a);
  case 20557:
  param_e_1.report(164);
  case 20566:
  param_e_1.report(165);
  case 86104:
  param_e_1.report(param_t & 1 ? 76 : param_e_1.options.webcompat ?
  77 : 78);
  case 86094:
  param_e_1.report(79);
  default:
  return function (param_e_2, param_t_1, param_n_1, param_r_1, param_o_1, param_i_1,
  param_a_1) {
  const {
  tokenValue: var_s,
  tokenStart: var_c
  }
  = param_e_2;
  const var_l_1 = param_e_2.getToken();
  let var_u_1;
  if (var_l_1 === 241737) {
  var_u_1 = ct(param_e_2, param_t_1);
  if (param_t_1 & 1) {
  param_e_2.report(85);
  }
  if (param_e_2.getToken() === 69271571) {
  param_e_2.report(84);
  }
  }
  else {
  var_u_1 = Xe(param_e_2, param_t_1, param_r_1, 2, 0, 1, 0, 1, param_e_2.tokenStart,
  0, 1);
  }
  return be(param_e_2, param_t_1, param_n_1, param_r_1, param_o_1, param_i_1, var_u_1,
  var_l_1, var_s, var_c, param_a_1);
  }
  (param_e_1, param_t, param_n, param_r, param_o, param_i, param_a);
  }
  }
  function be(param_e_1, param_t, param_n, param_r, param_o, param_i, param_a, param_s,
  param_c, param_l, param_u) {
  if (param_s & 143360 && param_e_1.getToken() === 21) {
  return Se(param_e_1, param_t, param_n, param_r, param_o, param_c, param_a, param_s,
  param_i, param_l, param_u);
  }
  let var_d_1 = Ye(param_e_1, param_t, param_r, param_a, 0, 0, param_l);
  var_d_1 = je(param_e_1, param_t, param_r, 0, 0, param_l, var_d_1);
  if (param_e_1.getToken() === 18) {
  var_d_1 = Ve(param_e_1, param_t, param_r, 0, param_l, var_d_1);
  }
  return Te(param_e_1, param_t, var_d_1, param_l);
  }
  function _e(param_e_1, param_t, param_n, param_r, param_o, param_i = param_e_1.tokenStart,
  param_a = "BlockStatement") {
  const list_s_1 = [];
  for (var_Q(param_e_1, param_t | 32, 2162700);
  param_e_1.getToken() !== 1074790415;
  ) {
  list_s_1.push(ye(param_e_1, param_t, param_n, param_r, {
  $: param_o
  }
  ));
  }
  var_Q(param_e_1, param_t | 32, 1074790415);
  return param_e_1.finishNode({
  type: param_a,
  body: list_s_1
  }
  , param_i);
  }
  function Te(param_e_1, param_t, param_n, param_r) {
  var_K(param_e_1, param_t | 32);
  return param_e_1.finishNode({
  type: "ExpressionStatement",
  expression: param_n
  }
  , param_r);
  }
  function Se(param_e_1, param_t, param_n, param_r, param_o, param_i, param_a, param_s,
  param_c, param_l, param_u) {
  ee(param_e_1, param_t, 0, param_s, 1);
  (function (param_e_2, param_t_1, param_n_1) {
  let var_r = param_t_1;
  while (var_r) {
  if (var_r["$" + param_n_1]) {
  param_e_2.report(138, param_n_1);
  }
  var_r = var_r.$;
  }
  param_t_1["$" + param_n_1] = 1;
  }
  )(param_e_1, param_o, param_i);
  var_q(param_e_1, param_t | 32);
  const var_d_1 = !param_c || param_t & 1 || !param_e_1.options.webcompat ||
  param_e_1.getToken() !== 86104 ? ke(param_e_1, param_t, param_n, param_r, param_o,
  param_c, param_u) : ut(param_e_1, param_t, param_n == null ?
  undefined : param_n.createChildScope(), param_r, 0, 0, 0, param_e_1.tokenStart,
  param_u);
  return param_e_1.finishNode({
  type: "LabeledStatement",
  label: param_a,
  body: var_d_1
  }
  , param_l);
  }
  function xe(param_e_1, param_t, param_n, param_r, param_o, param_i, param_a) {
  const {
  tokenValue: var_s,
  tokenStart: var_c
  }
  = param_e_1;
  const var_l_1 = param_e_1.getToken();
  let var_u_1 = ct(param_e_1, param_t);
  if (param_e_1.getToken() === 21) {
  return Se(param_e_1, param_t, param_n, param_r, param_o, var_s, var_u_1, var_l_1,
  1, var_c, param_a);
  }
  const var_d_1 = param_e_1.flags & 1;
  if (!var_d_1) {
  if (param_e_1.getToken() === 86104) {
  if (!param_i) {
  param_e_1.report(125);
  }
  return ut(param_e_1, param_t, param_n, param_r, 1, 0, 1, var_c, param_a);
  }
  if (ie(param_t, param_e_1.getToken())) {
  var_u_1 = St(param_e_1, param_t, param_r, 1, var_c);
  if (param_e_1.getToken() === 18) {
  var_u_1 = Ve(param_e_1, param_t, param_r, 0, var_c, var_u_1);
  }
  return Te(param_e_1, param_t, var_u_1, var_c);
  }
  }
  if (param_e_1.getToken() === 67174411) {
  var_u_1 = xt(param_e_1, param_t, param_r, var_u_1, 1, 1, var_d_1, var_c);
  }
  else {
  if (param_e_1.getToken() === 10) {
  ae(param_e_1, param_t, var_l_1);
  if (!(~var_l_1 & 36864)) {
  param_e_1.flags |= 256;
  }
  var_u_1 = kt(param_e_1, param_t | 2048, param_r, param_e_1.tokenValue, var_u_1,
  0, 1, 0, var_c);
  }
  param_e_1.assignable = 1;
  }
  var_u_1 = Ye(param_e_1, param_t, param_r, var_u_1, 0, 0, var_c);
  var_u_1 = je(param_e_1, param_t, param_r, 0, 0, var_c, var_u_1);
  param_e_1.assignable = 1;
  if (param_e_1.getToken() === 18) {
  var_u_1 = Ve(param_e_1, param_t, param_r, 0, var_c, var_u_1);
  }
  return Te(param_e_1, param_t, var_u_1, var_c);
  }
  function we(param_e_1, param_t, param_n, param_r, param_o) {
  const var_i_1 = param_e_1.startIndex;
  if (param_r !== 1074790417) {
  param_e_1.assignable = 2;
  param_n = Ye(param_e_1, param_t, undefined, param_n, 0, 0, param_o);
  if (param_e_1.getToken() !== 1074790417) {
  param_n = je(param_e_1, param_t, undefined, 0, 0, param_o, param_n);
  if (param_e_1.getToken() === 18) {
  param_n = Ve(param_e_1, param_t, undefined, 0, param_o, param_n);
  }
  }
  var_K(param_e_1, param_t | 32);
  }
  const obj_a = {
  type: "ExpressionStatement",
  expression: param_n
  };
  if (param_n.type === "Literal" && typeof param_n.value == "string") {
  obj_a.directive = param_e_1.source.slice(param_o.index + 1, var_i_1 - 1);
  }
  return param_e_1.finishNode(obj_a, param_o);
  }
  function Ee(param_e_1, param_t, param_n, param_r, param_o) {
  const {
  tokenStart: var_i_1
  }
  = param_e_1;
  if (param_t & 1 || !param_e_1.options.webcompat || param_e_1.getToken() !== 86104) {
  return ke(param_e_1, param_t, param_n, param_r, {
  $: param_o
  }
  , 0);
  }
  else {
  return ut(param_e_1, param_t, param_n == null ? undefined :
  param_n.createChildScope(), param_r, 0, 0, 0, var_i_1);
  }
  }
  function Ae(param_e_1, param_t, param_n, param_r, param_o) {
  return ke(param_e_1, (param_t | 131072) ^ 131072 | 128, param_n, param_r, {
  loop: 1,
  $: param_o
  }
  , 0);
  }
  function Ce(param_e_1) {
  return !(~param_e_1 & 143360) && !!(~param_e_1 & 20480);
  }
  function Oe(param_e_1, param_t, param_n, param_r, param_o, param_i = 0, param_a,
  param_s = param_e_1.tokenStart, param_c = 0) {
  const var_l_1 = param_s;
  if (!param_c) {
  var_q(param_e_1, param_t);
  }
  const var_u_1 = Ne(param_e_1, param_t, param_n, param_r, param_o, param_i, param_a);
  var_K(param_e_1, param_t | 32);
  return param_e_1.finishNode({
  type: "VariableDeclaration",
  kind: param_a ?? (param_o & 8 ? "let" : "const"),
  declarations: var_u_1
  }
  , var_l_1);
  }
  function Ie(param_e_1, param_t, param_n, param_r, param_o = 0) {
  const var_i_1 = param_e_1.tokenStart;
  var_q(param_e_1, param_t);
  const var_a_1 = Ne(param_e_1, param_t, param_n, param_r, 4, param_o);
  var_K(param_e_1, param_t | 32);
  return param_e_1.finishNode({
  type: "VariableDeclaration",
  kind: "var",
  declarations: var_a_1
  }
  , var_i_1);
  }
  function Ne(param_e_1, param_t, param_n, param_r, param_o, param_i = 0, param_a) {
  let num_s = 1;
  const var_c = De(param_e_1, param_t, param_n, param_r, param_o, param_i, param_a);
  const list_l = [var_c];
  const var_u_1 = param_a && param_e_1.options.lexical ? new Set([var_c.id.name]) :
  undefined;
  while (var_J(param_e_1, param_t, 18)) {
  num_s++;
  const var_c_1 = De(param_e_1, param_t, param_n, param_r, param_o, param_i, param_a);
  if (var_u_1) {
  const {
  name: var_t_1
  }
  = var_c_1.id;
  if (var_u_1.has(var_t_1)) {
  param_e_1.report(147, var_t_1);
  }
  var_u_1.add(var_t_1);
  }
  list_l.push(var_c_1);
  }
  if (num_s > 1 && param_i & 32 && param_e_1.getToken() & 262144) {
  param_e_1.report(61, list_x[param_e_1.getToken() & 255]);
  }
  return list_l;
  }
  function De(param_e_1, param_t, param_n, param_r, param_o, param_i, param_a) {
  const {
  tokenStart: var_s
  }
  = param_e_1;
  const var_c = param_e_1.getToken();
  let var_l_1 = null;
  if (!!param_a && !(~var_c & 2097152)) {
  param_e_1.report(50);
  }
  const var_u_1 = Dt(param_e_1, param_t, param_n, param_r, param_o, param_i);
  if (param_e_1.getToken() === 1077936155) {
  var_q(param_e_1, param_t | 32);
  var_l_1 = Me(param_e_1, param_t, param_r, 1, 0, param_e_1.tokenStart, param_i);
  if (param_i & 32 && (param_e_1.getToken() === 471156 || param_e_1.getToken() === 8673330 &&
  (var_c & 2097152 || !(param_o & 4) || param_t & 1 || !param_e_1.options.webcompat))) {
  throw new var_S(var_s, param_e_1.currentLocation, 60, param_e_1.getToken() === 471156 ?
  "of" : "in");
  }
  }
  else if ((param_o & 16 || (var_c & 2097152) > 0) && ~param_e_1.getToken() & 262144) {
  param_e_1.report(59, param_a ?? (param_o & 16 ? "const" : "destructuring"));
  }
  return param_e_1.finishNode({
  type: "VariableDeclarator",
  id: var_u_1,
  init: var_l_1
  }
  , var_s);
  }
  function Re(param_e_1, param_t, param_n) {
  if (!ie(param_t, param_e_1.getToken())) {
  param_e_1.report(120);
  }
  if (!(~param_e_1.getToken() & 537079808)) {
  param_e_1.report(121);
  }
  if (param_n != null) {
  param_n.addBlockName(param_t, param_e_1.tokenValue, 8, param_e_1.tokenStart, param_e_1.currentLocation);
  }
  return ct(param_e_1, param_t);
  }
  function Le(param_e_1, param_t, param_n) {
  const {
  tokenStart: var_r
  }
  = param_e_1;
  var_q(param_e_1, param_t);
  var_Q(param_e_1, param_t, 77932);
  if (!(~param_e_1.getToken() & 134217728)) {
  throw new var_S(var_r, param_e_1.currentLocation, 30, list_x[param_e_1.getToken(
  ) & 255]);
  }
  return param_e_1.finishNode({
  type: "ImportNamespaceSpecifier",
  local: Re(param_e_1, param_t, param_n)
  }
  , var_r);
  }
  function Pe(param_e_1, param_t, param_n, param_r) {
  for (var_q(param_e_1, param_t);
  param_e_1.getToken() & 143360 || param_e_1.getToken() === 134283267;
  ) {
  let {
  tokenValue: var_o_1,
  tokenStart: var_i_1,
  currentLocation: var_a_1
  }
  = param_e_1;
  const var_s = var_i_1;
  const var_c = param_e_1.getToken();
  const var_l_1 = tt(param_e_1, param_t);
  let var_u_1;
  if (var_J(param_e_1, param_t, 77932)) {
  if (~param_e_1.getToken() & 134217728 && param_e_1.getToken() !== 18) {
  ee(param_e_1, param_t, 16, param_e_1.getToken(), 0);
  }
  else {
  param_e_1.report(106);
  }
  var_o_1 = param_e_1.tokenValue;
  var_i_1 = param_e_1.tokenStart;
  var_a_1 = param_e_1.currentLocation;
  var_u_1 = ct(param_e_1, param_t);
  }
  else if (var_l_1.type === "Identifier") {
  ee(param_e_1, param_t, 16, var_c, 0);
  var_u_1 = param_e_1.cloneIdentifier(var_l_1);
  }
  else {
  param_e_1.report(25, list_x[108]);
  }
  if (param_n != null) {
  param_n.addBlockName(param_t, var_o_1, 8, var_i_1, var_a_1);
  }
  param_r.push(param_e_1.finishNode({
  type: "ImportSpecifier",
  local: var_u_1,
  imported: var_l_1
  }
  , var_s));
  if (param_e_1.getToken() !== 1074790415) {
  var_Q(param_e_1, param_t, 18);
  }
  }
  var_Q(param_e_1, param_t, 1074790415);
  return param_r;
  }
  function Be(param_e_1, param_t, param_n) {
  let var_r = $e(param_e_1, param_t, param_e_1.finishNode({
  type: "Identifier",
  name: "import"
  }
  , param_n), param_n);
  var_r = Ye(param_e_1, param_t, undefined, var_r, 0, 0, param_n);
  var_r = je(param_e_1, param_t, undefined, 0, 0, param_n, var_r);
  if (param_e_1.getToken() === 18) {
  var_r = Ve(param_e_1, param_t, undefined, 0, param_n, var_r);
  }
  return Te(param_e_1, param_t, var_r, param_n);
  }
  function Ue(param_e_1, param_t, param_n, param_r) {
  let var_o_1 = Je(param_e_1, param_t, param_n, 0, param_r);
  var_o_1 = Ye(param_e_1, param_t, param_n, var_o_1, 0, 0, param_r);
  if (param_e_1.getToken() === 18) {
  var_o_1 = Ve(param_e_1, param_t, param_n, 0, param_r, var_o_1);
  }
  return Te(param_e_1, param_t, var_o_1, param_r);
  }
  function Me(param_e_1, param_t, param_n, param_r, param_o, param_i, param_a = 0) {
  let var_s = Xe(param_e_1, param_t, param_n, 2, 0, param_r, param_o, 1, param_i,
  param_a, param_t & 131072 ? 0 : 1);
  var_s = Ye(param_e_1, param_t, param_n, var_s, param_o, 0, param_i);
  return je(param_e_1, param_t, param_n, param_o, 0, param_i, var_s);
  }
  function Ve(param_e_1, param_t, param_n, param_r, param_o, param_i) {
  const list_a = [param_i];
  while (var_J(param_e_1, param_t | 32, 18)) {
  list_a.push(Me(param_e_1, param_t, param_n, 1, param_r, param_e_1.tokenStart));
  }
  return param_e_1.finishNode({
  type: "SequenceExpression",
  expressions: list_a
  }
  , param_o);
  }
  function He(param_e_1, param_t, param_n, param_r, param_o, param_i) {
  const var_a_1 = Me(param_e_1, param_t, param_n, param_o, param_r, param_i);
  if (param_e_1.getToken() === 18) {
  return Ve(param_e_1, param_t, param_n, param_r, param_i, var_a_1);
  }
  else {
  return var_a_1;
  }
  }
  function je(param_e_1, param_t, param_n, param_r, param_o, param_i, param_a) {
  const var_s = param_e_1.getToken();
  if (!(~var_s & 4194304)) {
  if (param_e_1.assignable & 2) {
  param_e_1.report(26);
  }
  if (!(~var_s & 524288) && param_e_1.assignable & 4) {
  param_e_1.report(26);
  }
  if (!param_o && var_s === 1077936155 && param_a.type === "ArrayExpression" ||
  param_a.type === "ObjectExpression") {
  var_Z(param_e_1, param_a);
  }
  var_q(param_e_1, param_t | 32);
  const var_c = Me(param_e_1, param_t, param_n, 1, param_r, param_e_1.tokenStart);
  param_e_1.assignable = 2;
  return param_e_1.finishNode(param_o ? {
  type: "AssignmentPattern",
  left: param_a,
  right: var_c
  }
  : {
  type: "AssignmentExpression",
  left: param_a,
  operator: list_x[var_s & 255],
  right: var_c
  }
  , param_i);
  }
  if (!(~var_s & 8388608)) {
  param_a = Ge(param_e_1, param_t, param_n, param_r, param_i, 4, var_s, param_a);
  }
  if (var_J(param_e_1, param_t | 32, 22)) {
  param_a = ze(param_e_1, param_t, param_n, param_a, param_i);
  }
  return param_a;
  }
  function Fe(param_e_1, param_t, param_n, param_r, param_o, param_i, param_a) {
  const var_s = param_e_1.getToken();
  var_q(param_e_1, param_t | 32);
  const var_c = Me(param_e_1, param_t, param_n, 1, param_r, param_e_1.tokenStart);
  param_a = param_e_1.finishNode(param_o ? {
  type: "AssignmentPattern",
  left: param_a,
  right: var_c
  }
  : {
  type: "AssignmentExpression",
  left: param_a,
  operator: list_x[var_s & 255],
  right: var_c
  }
  , param_i);
  param_e_1.assignable = 2;
  return param_a;
  }
  function ze(param_e_1, param_t, param_n, param_r, param_o) {
  const var_i_1 = Me(param_e_1, (param_t | 131072) ^ 131072, param_n, 1, 0, param_e_1.tokenStart);
  var_Q(param_e_1, param_t | 32, 21);
  param_e_1.assignable = 1;
  const var_a_1 = Me(param_e_1, param_t, param_n, 1, 0, param_e_1.tokenStart);
  param_e_1.assignable = 2;
  return param_e_1.finishNode({
  type: "ConditionalExpression",
  test: param_r,
  consequent: var_i_1,
  alternate: var_a_1
  }
  , param_o);
  }
  function Ge(param_e_1, param_t, param_n, param_r, param_o, param_i, param_a, param_s) {
  const var_c = -((param_t & 131072) > 0) & 8673330;
  let var_l_1;
  let var_u_1;
  for (param_e_1.assignable = 2;
  param_e_1.getToken() & 8388608 && (var_l_1 = param_e_1.getToken(), var_u_1 = var_l_1 & 3840,
  (var_l_1 & 524288 && param_a & 268435456 || param_a & 524288 &&
  var_l_1 & 268435456) && param_e_1.report(167), !(var_u_1 + ((var_l_1 === 8391735) << 8) - (
  (var_c === var_l_1) << 12) <= param_i));
  ) {
  var_q(param_e_1, param_t | 32);
  param_s = param_e_1.finishNode({
  type: var_l_1 & 524288 || var_l_1 & 268435456 ? "LogicalExpression" :
  "BinaryExpression",
  left: param_s,
  right: Ge(param_e_1, param_t, param_n, param_r, param_e_1.tokenStart, var_u_1,
  var_l_1, qe(param_e_1, param_t, param_n, 0, param_r, 1, !(param_t & 131072) &&
  var_u_1 < 2048 ? 1 : 0)),
  operator: list_x[var_l_1 & 255]
  }
  , param_o);
  }
  if (param_e_1.getToken() === 1077936155) {
  param_e_1.report(26);
  }
  return param_s;
  }
  function We(param_e_1, param_t, param_n, param_r, param_o, param_i, param_a = 0) {
  const {
  tokenStart: var_s
  }
  = param_e_1;
  param_e_1.flags &= -4161;
  var_Q(param_e_1, param_t | 32, 2162700);
  const list_c_1 = [];
  if (param_e_1.getToken() !== 1074790415) {
  while (param_e_1.getToken() === 134283267) {
  const {
  index: var_n,
  tokenStart: var_r,
  tokenIndex: var_o_1,
  tokenValue: var_a_1
  }
  = param_e_1;
  const var_s_1 = param_e_1.getToken();
  const var_l_1 = lt(param_e_1, param_t);
  if (var_X(param_e_1, var_n, var_o_1, var_a_1)) {
  param_t |= 1;
  if (param_e_1.flags & 128) {
  throw new var_S(var_r, param_e_1.currentLocation, 66);
  }
  if (param_e_1.flags & 64) {
  throw new var_S(var_r, param_e_1.currentLocation, 9);
  }
  if (param_e_1.flags & 4096) {
  throw new var_S(var_r, param_e_1.currentLocation, 15);
  }
  if (param_i != null) {
  param_i.reportScopeError();
  }
  }
  list_c_1.push(we(param_e_1, param_t, var_l_1, var_s_1, var_r));
  }
  if (param_t & 1 && (param_o && (~param_o & 537079808 || param_e_1.report(121),
  ~param_o & 36864 || param_e_1.report(40)), param_e_1.flags & 512 &&
  param_e_1.report(121), param_e_1.flags & 256)) {
  if (param_e_1.strictReservedRange) {
  throw new var_S(param_e_1.strictReservedRange[0], param_e_1.strictReservedRange[1],
  120);
  }
  param_e_1.report(120);
  }
  }
  param_e_1.flags = (param_e_1.flags | 4928) ^ 4928;
  param_e_1.destructible = (param_e_1.destructible | 256) ^ 256;
  while (param_e_1.getToken() !== 1074790415) {
  list_c_1.push(ye(param_e_1, param_t, param_n, param_r, {
  }
  , 4));
  }
  var_Q(param_e_1, param_a & 24 ? param_t | 32 : param_t, 1074790415);
  param_e_1.flags &= -4289;
  if (param_e_1.getToken() === 1077936155) {
  param_e_1.report(26);
  }
  return param_e_1.finishNode({
  type: "BlockStatement",
  body: list_c_1
  }
  , var_s);
  }
  function qe(param_e_1, param_t, param_n, param_r, param_o, param_i, param_a = 0) {
  const var_s = param_e_1.tokenStart;
  return Ye(param_e_1, param_t, param_n, Xe(param_e_1, param_t, param_n, 2, 0, param_r,
  param_o, param_i, var_s, 0, param_a), param_o, 0, var_s);
  }
  function Ye(param_e_1, param_t, param_n, param_r, param_o, param_i, param_a) {
  if (~param_e_1.getToken() & 33619968 || param_e_1.flags & 1) {
  if (!(~param_e_1.getToken() & 67108864)) {
  param_t = (param_t | 131072) ^ 131072;
  switch (param_e_1.getToken()) {
  case 67108877:
  {
  var_q(param_e_1, (param_t | 262152) ^ 8);
  if (param_t & 16 && param_e_1.getToken() === 131 && param_e_1.tokenValue === "super") {
  param_e_1.report(175);
  }
  param_e_1.assignable = ~param_e_1.flags & 2048 ? 1 : 2;
  const var_o_1 = Ke(param_e_1, param_t | 64, param_n, 1);
  param_r = param_e_1.finishNode({
  type: "MemberExpression",
  object: param_r,
  computed: false,
  property: var_o_1,
  optional: false
  }
  , param_a);
  break;
  }
  case 69271571:
  {
  if (!(~param_e_1.flags & 8192)) {
  param_e_1.flags = (param_e_1.flags | 8192) ^ 8192;
  return param_r;
  }
  let flag_i = false;
  if (!(~param_e_1.flags & 2048)) {
  flag_i = true;
  param_e_1.flags = (param_e_1.flags | 2048) ^ 2048;
  }
  var_q(param_e_1, param_t | 32);
  const {
  tokenStart: var_s
  }
  = param_e_1;
  const var_c = He(param_e_1, param_t, param_n, param_o, 1, var_s);
  var_Q(param_e_1, param_t, 20);
  param_e_1.assignable = flag_i ? 2 : 1;
  param_r = param_e_1.finishNode({
  type: "MemberExpression",
  object: param_r,
  computed: true,
  property: var_c,
  optional: false
  }
  , param_a);
  if (flag_i) {
  param_e_1.flags |= 2048;
  }
  break;
  }
  case 67174411:
  {
  if (!(~param_e_1.flags & 1024)) {
  param_e_1.flags = (param_e_1.flags | 1024) ^ 1024;
  return param_r;
  }
  let flag_i = false;
  if (!(~param_e_1.flags & 2048)) {
  flag_i = true;
  param_e_1.flags = (param_e_1.flags | 2048) ^ 2048;
  }
  const var_s = st(param_e_1, param_t, param_n, param_o);
  if (param_t & 1 || !param_e_1.options.webcompat) {
  param_e_1.assignable = 2;
  }
  else {
  param_e_1.assignable = 4;
  }
  param_r = param_e_1.finishNode({
  type: "CallExpression",
  callee: param_r,
  arguments: var_s,
  optional: false
  }
  , param_a);
  if (flag_i) {
  param_e_1.flags |= 2048;
  }
  break;
  }
  case 67108991:
  var_q(param_e_1, (param_t | 262152) ^ 8);
  param_e_1.flags |= 2048;
  param_e_1.assignable = 2;
  param_r = function (param_e_2, param_t_1, param_n_1, param_r_1, param_o_1) {
  let var_i_1;
  let flag_a = false;
  if ((param_e_2.getToken() === 69271571 || param_e_2.getToken() === 67174411) &&
  !(~param_e_2.flags & 2048)) {
  flag_a = true;
  param_e_2.flags = (param_e_2.flags | 2048) ^ 2048;
  }
  if (param_e_2.getToken() === 69271571) {
  var_q(param_e_2, param_t_1 | 32);
  const {
  tokenStart: var_a_1
  }
  = param_e_2;
  const var_s = He(param_e_2, param_t_1, param_n_1, 0, 1, var_a_1);
  var_Q(param_e_2, param_t_1, 20);
  param_e_2.assignable = 2;
  var_i_1 = param_e_2.finishNode({
  type: "MemberExpression",
  object: param_r_1,
  computed: true,
  optional: true,
  property: var_s
  }
  , param_o_1);
  }
  else if (param_e_2.getToken() === 67174411) {
  const var_a_1 = st(param_e_2, param_t_1, param_n_1, 0);
  if (param_t_1 & 1 || !param_e_2.options.webcompat) {
  param_e_2.assignable = 2;
  }
  else {
  param_e_2.assignable = 4;
  }
  var_i_1 = param_e_2.finishNode({
  type: "CallExpression",
  callee: param_r_1,
  arguments: var_a_1,
  optional: true
  }
  , param_o_1);
  }
  else {
  const var_a_1 = Ke(param_e_2, param_t_1, param_n_1, 1);
  param_e_2.assignable = 2;
  var_i_1 = param_e_2.finishNode({
  type: "MemberExpression",
  object: param_r_1,
  computed: false,
  optional: true,
  property: var_a_1
  }
  , param_o_1);
  }
  if (flag_a) {
  param_e_2.flags |= 2048;
  }
  return var_i_1;
  }
  (param_e_1, param_t, param_n, param_r, param_a);
  break;
  default:
  if (!(~param_e_1.flags & 2048)) {
  param_e_1.report(168);
  }
  param_e_1.assignable = 2;
  param_r = param_e_1.finishNode({
  type: "TaggedTemplateExpression",
  tag: param_r,
  quasi: param_e_1.getToken() === 67174408 ? ot(param_e_1, param_t | 64, param_n) :
  rt(param_e_1, param_t)
  }
  , param_a);
  }
  param_r = Ye(param_e_1, param_t, param_n, param_r, 0, 1, param_a);
  }
  }
  else {
  param_r = function (param_e_2, param_t_1, param_n_1, param_r_1) {
  if (param_e_2.assignable & 2) {
  param_e_2.report(55);
  }
  const var_o_1 = param_e_2.getToken();
  var_q(param_e_2, param_t_1);
  param_e_2.assignable = 2;
  return param_e_2.finishNode({
  type: "UpdateExpression",
  argument: param_n_1,
  operator: list_x[var_o_1 & 255],
  prefix: false
  }
  , param_r_1);
  }
  (param_e_1, param_t, param_r, param_a);
  }
  if (param_i === 0 && !(~param_e_1.flags & 2048)) {
  param_e_1.flags = (param_e_1.flags | 2048) ^ 2048;
  param_r = param_e_1.finishNode({
  type: "ChainExpression",
  expression: param_r
  }
  , param_a);
  }
  return param_r;
  }
  function Ke(param_e_1, param_t, param_n, param_r = 0) {
  if (!(param_e_1.getToken() & 143360) && param_e_1.getToken() !== -2147483527 &&
  param_e_1.getToken() !== -2147483526 && (param_e_1.getToken() !== 131 ||
  !param_r)) {
  param_e_1.report(162);
  }
  if (param_e_1.getToken() === 131) {
  return It(param_e_1, param_t, param_n, 0);
  }
  else {
  return ct(param_e_1, param_t);
  }
  }
  function Xe(param_e_1, param_t, param_n, param_r, param_o, param_a, param_s, param_c,
  param_l, param_u = 0, param_d = 0) {
  if (!(~param_e_1.getToken() & 143360)) {
  switch (param_e_1.getToken()) {
  case 209006:
  return function (param_e_2, param_t_1, param_n_1, param_r_1, param_o_1, param_i,
  param_a_1) {
  if (param_o_1) {
  if (!(param_e_2.destructible & 128) && ((param_a_1 = param_e_2.firstAwaitLocation) === null ||
  param_a_1 === undefined)) {
  param_e_2.firstAwaitLocation = {
  start: param_i,
  end: param_e_2.currentLocation
  };
  }
  param_e_2.destructible |= 128;
  }
  if (param_t_1 & 524288) {
  param_e_2.report(179);
  }
  const var_s = yt(param_e_2, param_t_1, param_n_1);
  if (var_s.type === "ArrowFunctionExpression" || !(param_e_2.getToken() & 65536)) {
  if (param_t_1 & 2048) {
  throw new var_S(param_i, param_e_2.startPosition, 178);
  }
  if (param_t_1 & 2) {
  throw new var_S(param_i, param_e_2.startPosition, 112);
  }
  if (param_t_1 & 8192 && param_t_1 & 2048) {
  throw new var_S(param_i, param_e_2.startPosition, 112);
  }
  return var_s;
  }
  if (param_t_1 & 8192) {
  throw new var_S(param_i, param_e_2.startPosition, 31);
  }
  if (param_t_1 & 2048 || param_t_1 & 2 && param_t_1 & 8) {
  if (param_r_1) {
  throw new var_S(param_i, param_e_2.startPosition, 0);
  }
  const var_o_1 = qe(param_e_2, param_t_1, param_n_1, 0, 0, 1);
  if (param_e_2.getToken() === 8391735) {
  param_e_2.report(33);
  }
  param_e_2.assignable = 2;
  return param_e_2.finishNode({
  type: "AwaitExpression",
  argument: var_o_1
  }
  , param_i);
  }
  if (param_t_1 & 2) {
  throw new var_S(param_i, param_e_2.startPosition, 98);
  }
  return var_s;
  }
  (param_e_1, param_t, param_n, param_o, param_s, param_l);
  case 241771:
  return function (param_e_2, param_t_1, param_n_1, param_r_1, param_o_1, param_i) {
  if (param_r_1) {
  param_e_2.destructible |= 256;
  }
  if (param_t_1 & 1024) {
  var_q(param_e_2, param_t_1 | 32);
  if (param_t_1 & 8192) {
  param_e_2.report(32);
  }
  if (!param_o_1) {
  param_e_2.report(26);
  }
  if (param_e_2.getToken() === 22) {
  param_e_2.report(126);
  }
  let var_r = null;
  let flag_a = false;
  if (param_e_2.flags & 1) {
  if (param_e_2.getToken() === 8391476) {
  param_e_2.report(30, list_x[param_e_2.getToken() & 255]);
  }
  }
  else {
  flag_a = var_J(param_e_2, param_t_1 | 32, 8391476);
  if (param_e_2.getToken() & 77824 || flag_a) {
  var_r = Me(param_e_2, param_t_1, param_n_1, 1, 0, param_e_2.tokenStart);
  }
  }
  param_e_2.assignable = 2;
  return param_e_2.finishNode({
  type: "YieldExpression",
  argument: var_r,
  delegate: flag_a
  }
  , param_i);
  }
  if (param_t_1 & 1) {
  param_e_2.report(97, "yield");
  }
  return yt(param_e_2, param_t_1, param_n_1);
  }
  (param_e_1, param_t, param_n, param_s, param_a, param_l);
  case 209005:
  return function (param_e_2, param_t_1, param_n_1, param_r_1, param_o_1, param_i,
  param_a_1, param_s_1) {
  const var_c = param_e_2.getToken();
  const var_l_1 = ct(param_e_2, param_t_1);
  const {
  flags: var_u_1
  }
  = param_e_2;
  if (!(var_u_1 & 1)) {
  if (param_e_2.getToken() === 86104) {
  return dt(param_e_2, param_t_1, param_n_1, 1, param_r_1, param_s_1);
  }
  if (ie(param_t_1, param_e_2.getToken())) {
  if (!param_o_1) {
  param_e_2.report(0);
  }
  if (!(~param_e_2.getToken() & 36864)) {
  param_e_2.flags |= 256;
  }
  return St(param_e_2, param_t_1, param_n_1, param_i, param_s_1);
  }
  }
  if (param_a_1 || param_e_2.getToken() !== 67174411) {
  if (param_e_2.getToken() === 10) {
  ae(param_e_2, param_t_1, var_c);
  if (param_a_1) {
  param_e_2.report(51);
  }
  if (!(~var_c & 36864)) {
  param_e_2.flags |= 256;
  }
  return kt(param_e_2, param_t_1, param_n_1, param_e_2.tokenValue, var_l_1, param_a_1,
  param_i, 0, param_s_1);
  }
  else {
  param_e_2.assignable = 1;
  return var_l_1;
  }
  }
  else {
  return xt(param_e_2, param_t_1, param_n_1, var_l_1, param_i, 1, var_u_1, param_s_1);
  }
  }
  (param_e_1, param_t, param_n, param_s, param_c, param_a, param_o, param_l);
  }
  const {
  tokenValue: var_i_1
  }
  = param_e_1;
  const var_d_1 = param_e_1.getToken();
  const var_f_1 = ct(param_e_1, param_t | 64);
  if (param_e_1.getToken() === 10) {
  if (!param_c) {
  param_e_1.report(0);
  }
  ae(param_e_1, param_t, var_d_1);
  if (!(~var_d_1 & 36864)) {
  param_e_1.flags |= 256;
  }
  return kt(param_e_1, param_t, param_n, var_i_1, var_f_1, param_o, param_a, 0, param_l,
  param_u);
  }
  else {
  if (!!(param_t & 16) && !(param_t & 32768) && !(param_t & 8192) &&
  param_e_1.tokenValue === "arguments") {
  param_e_1.report(132);
  }
  if ((var_d_1 & 255) == 73) {
  if (param_t & 1) {
  param_e_1.report(115);
  }
  if (param_r & 24) {
  param_e_1.report(100);
  }
  }
  param_e_1.assignable = param_t & 1 && !(~var_d_1 & 537079808) ?
  2 : 1;
  return var_f_1;
  }
  }
  if (!(~param_e_1.getToken() & 134217728)) {
  return lt(param_e_1, param_t);
  }
  switch (param_e_1.getToken()) {
  case 33619993:
  case 33619994:
  return function (param_e_2, param_t_1, param_n_1, param_r_1, param_o_1, param_i) {
  if (param_r_1) {
  param_e_2.report(56);
  }
  if (!param_o_1) {
  param_e_2.report(0);
  }
  const var_a_1 = param_e_2.getToken();
  var_q(param_e_2, param_t_1 | 32);
  const var_s = qe(param_e_2, param_t_1, param_n_1, 0, 0, 1);
  if (param_e_2.assignable & 2) {
  param_e_2.report(55);
  }
  param_e_2.assignable = 2;
  return param_e_2.finishNode({
  type: "UpdateExpression",
  argument: var_s,
  operator: list_x[var_a_1 & 255],
  prefix: true
  }
  , param_i);
  }
  (param_e_1, param_t, param_n, param_o, param_c, param_l);
  case 16863276:
  case 16842798:
  case 16842799:
  case 25233968:
  case 25233969:
  case 16863275:
  case 16863277:
  return function (param_e_2, param_t_1, param_n_1, param_r_1, param_o_1) {
  if (!param_r_1) {
  param_e_2.report(0);
  }
  const {
  tokenStart: var_i_1
  }
  = param_e_2;
  const var_a_1 = param_e_2.getToken();
  var_q(param_e_2, param_t_1 | 32);
  const var_s = qe(param_e_2, param_t_1, param_n_1, 0, param_o_1, 1);
  var var_c;
  if (param_e_2.getToken() === 8391735) {
  param_e_2.report(33);
  }
  if (param_t_1 & 1 && var_a_1 === 16863276) {
  if (var_s.type === "Identifier") {
  param_e_2.report(123);
  }
  else if ((var_c = var_s).property && var_c.property.type === "PrivateIdentifier") {
  param_e_2.report(129);
  }
  }
  param_e_2.assignable = 2;
  return param_e_2.finishNode({
  type: "UnaryExpression",
  operator: list_x[var_a_1 & 255],
  argument: var_s,
  prefix: true
  }
  , var_i_1);
  }
  (param_e_1, param_t, param_n, param_c, param_s);
  case 86104:
  return dt(param_e_1, param_t, param_n, 0, param_s, param_l);
  case 2162700:
  return function (param_e_2, param_t_1, param_n_1, param_r_1, param_o_1) {
  const var_i_1 = mt(param_e_2, param_t_1, undefined, param_n_1, param_r_1, param_o_1,
  0, 2);
  if (param_e_2.destructible & 64) {
  param_e_2.report(63);
  }
  if (param_e_2.destructible & 8) {
  param_e_2.report(62);
  }
  return var_i_1;
  }
  (param_e_1, param_t, param_n, param_a ? 0 : 1, param_s);
  case 69271571:
  return function (param_e_2, param_t_1, param_n_1, param_r_1, param_o_1) {
  const var_i_1 = ft(param_e_2, param_t_1, undefined, param_n_1, param_r_1, param_o_1,
  0, 2);
  if (param_e_2.destructible & 64) {
  param_e_2.report(63);
  }
  if (param_e_2.destructible & 8) {
  param_e_2.report(62);
  }
  return var_i_1;
  }
  (param_e_1, param_t, param_n, param_a ? 0 : 1, param_s);
  case 67174411:
  return function (param_e_2, param_t_1, param_n_1, param_r_1, param_o_1, param_i,
  param_a_1, param_s_1) {
  param_e_2.flags = (param_e_2.flags | 128) ^ 128;
  const var_c = param_e_2.tokenStart;
  var_q(param_e_2, param_t_1 | 262176);
  const var_l_1 = (param_s_1 = param_e_2.createScopeIfLexical()) === null ||
  param_s_1 === undefined ? undefined : param_s_1.createChildScope(512);
  if (var_J(param_e_2, param_t_1 = (param_t_1 | 131072) ^ 131072, 16)) {
  return bt(param_e_2, param_t_1, var_l_1, param_n_1, [], param_r_1, 0, param_i,
  param_a_1);
  }
  let num_u = 0;
  const var_d_1 = param_e_2.destructible & 384;
  param_e_2.destructible &= -385;
  const var_f_1 = param_e_2.firstAwaitLocation;
  let var_p_1;
  param_e_2.firstAwaitLocation = null;
  let list_h = [];
  let num_g = 0;
  let num_m = 0;
  let num_v = 0;
  const var_y = param_e_2.tokenStart;
  for (param_e_2.assignable = 1;
  param_e_2.getToken() !== 16;
  ) {
  const {
  tokenStart: var_r,
  currentLocation: var_o_1
  }
  = param_e_2;
  const var_i_1 = param_e_2.getToken();
  if (var_i_1 & 143360) {
  if (var_l_1 != null) {
  var_l_1.addBlockName(param_t_1, param_e_2.tokenValue, 1, var_r, var_o_1);
  }
  if (~var_i_1 & 537079808) {
  if (!(~var_i_1 & 36864)) {
  num_v = 1;
  }
  }
  else {
  num_m = 1;
  }
  var_p_1 = Xe(param_e_2, param_t_1, param_n_1, 1, 0, 1, 1, 1, var_r, 0);
  if (param_e_2.getToken() === 16 || param_e_2.getToken() === 18) {
  if (param_e_2.assignable & 2) {
  num_u |= 16;
  num_m = 1;
  }
  }
  else {
  if (param_e_2.getToken() === 1077936155) {
  num_m = 1;
  }
  else {
  num_u |= 16;
  }
  var_p_1 = Ye(param_e_2, param_t_1, param_n_1, var_p_1, 1, 0, var_r);
  if (param_e_2.getToken() !== 16 && param_e_2.getToken() !== 18) {
  var_p_1 = je(param_e_2, param_t_1, param_n_1, 1, 0, var_r, var_p_1);
  }
  }
  }
  else {
  if (~var_i_1 & 2097152) {
  if (var_i_1 === 14) {
  var_p_1 = ht(param_e_2, param_t_1, var_l_1, param_n_1, 16, 1, 0, 1, 0);
  if (param_e_2.destructible & 16) {
  param_e_2.report(74);
  }
  num_m = 1;
  if (!!num_g && (param_e_2.getToken() === 16 || param_e_2.getToken() === 18)) {
  list_h.push(var_p_1);
  }
  num_u |= 8;
  break;
  }
  num_u |= 16;
  var_p_1 = Me(param_e_2, param_t_1, param_n_1, 1, 1, var_r);
  if (!!num_g && (param_e_2.getToken() === 16 || param_e_2.getToken() === 18)) {
  list_h.push(var_p_1);
  }
  if (param_e_2.getToken() === 18) {
  if (!num_g) {
  num_g = 1;
  list_h = [var_p_1];
  }
  }
  if (num_g) {
  while (var_J(param_e_2, param_t_1 | 32, 18)) {
  list_h.push(Me(param_e_2, param_t_1, param_n_1, 1, 1, param_e_2.tokenStart));
  }
  param_e_2.assignable = 2;
  var_p_1 = param_e_2.finishNode({
  type: "SequenceExpression",
  expressions: list_h
  }
  , var_y);
  }
  var_Q(param_e_2, param_t_1, 16);
  param_e_2.destructible = num_u | var_d_1;
  if (var_f_1) {
  param_e_2.firstAwaitLocation = var_f_1;
  }
  if (param_e_2.options.preserveParens) {
  return param_e_2.finishNode({
  type: "ParenthesizedExpression",
  expression: var_p_1
  }
  , var_c);
  }
  else {
  return var_p_1;
  }
  }
  var_p_1 = var_i_1 === 2162700 ? mt(param_e_2, param_t_1 | 262144, var_l_1, param_n_1,
  0, 1, 0, 1) : ft(param_e_2, param_t_1 | 262144, var_l_1, param_n_1, 0, 1, 0, 1);
  num_u |= param_e_2.destructible;
  num_m = 1;
  param_e_2.assignable = 2;
  if (param_e_2.getToken() !== 16 && param_e_2.getToken() !== 18) {
  if (num_u & 8) {
  param_e_2.report(124);
  }
  var_p_1 = Ye(param_e_2, param_t_1, param_n_1, var_p_1, 0, 0, var_r);
  num_u |= 16;
  if (param_e_2.getToken() !== 16 && param_e_2.getToken() !== 18) {
  var_p_1 = je(param_e_2, param_t_1, param_n_1, 0, 0, var_r, var_p_1);
  }
  }
  }
  if (!!num_g && (param_e_2.getToken() === 16 || param_e_2.getToken() === 18)) {
  list_h.push(var_p_1);
  }
  if (!var_J(param_e_2, param_t_1 | 32, 18)) {
  break;
  }
  if (!num_g) {
  num_g = 1;
  list_h = [var_p_1];
  }
  if (param_e_2.getToken() === 16) {
  num_u |= 8;
  break;
  }
  }
  if (num_g) {
  param_e_2.assignable = 2;
  var_p_1 = param_e_2.finishNode({
  type: "SequenceExpression",
  expressions: list_h
  }
  , var_y);
  }
  var_Q(param_e_2, param_t_1, 16);
  if (num_u & 16 && num_u & 8) {
  param_e_2.report(153);
  }
  num_u |= (param_e_2.destructible & 256 ? 256 : 0) | (param_e_2.destructible & 128 ?
  128 : 0);
  if (param_e_2.getToken() === 10) {
  if (num_u & 48) {
  param_e_2.report(49);
  }
  if (param_t_1 & 2050 && num_u & 128) {
  const var_t_1 = param_e_2.firstAwaitLocation;
  if (var_t_1) {
  throw new var_S(var_t_1.start, var_t_1.end, 31);
  }
  param_e_2.report(31);
  }
  if (param_t_1 & 1025 && num_u & 256) {
  param_e_2.report(32);
  }
  if (num_m) {
  param_e_2.flags |= 128;
  }
  if (num_v) {
  param_e_2.flags |= 256;
  }
  param_e_2.destructible |= var_d_1;
  if (var_f_1) {
  param_e_2.firstAwaitLocation = var_f_1;
  }
  return bt(param_e_2, param_t_1, var_l_1, param_n_1, num_g ?
  list_h : [var_p_1], param_r_1, 0, param_i, param_a_1);
  }
  if (num_u & 64) {
  param_e_2.report(63);
  }
  if (num_u & 8) {
  param_e_2.report(146);
  }
  param_e_2.destructible = (param_e_2.destructible | 256) ^ 256 | num_u | var_d_1;
  if (var_f_1) {
  param_e_2.firstAwaitLocation = var_f_1;
  }
  if (param_e_2.options.preserveParens) {
  return param_e_2.finishNode({
  type: "ParenthesizedExpression",
  expression: var_p_1
  }
  , var_c);
  }
  else {
  return var_p_1;
  }
  }
  (param_e_1, param_t | 64, param_n, param_a, 0, param_l, param_u);
  case 86021:
  case 86022:
  case 86023:
  return function (param_e_2, param_t_1) {
  const var_n = param_e_2.tokenStart;
  const var_r = list_x[param_e_2.getToken() & 255];
  const obj_o = {
  type: "Literal",
  value: param_e_2.getToken() === 86023 ? null : var_r === "true"
  };
  if (param_e_2.options.raw) {
  obj_o.raw = var_r;
  }
  var_q(param_e_2, param_t_1);
  param_e_2.assignable = 2;
  return param_e_2.finishNode(obj_o, var_n);
  }
  (param_e_1, param_t);
  case 86111:
  return function (param_e_2, param_t_1) {
  const {
  tokenStart: var_n
  }
  = param_e_2;
  var_q(param_e_2, param_t_1);
  param_e_2.assignable = 2;
  return param_e_2.finishNode({
  type: "ThisExpression"
  }
  , var_n);
  }
  (param_e_1, param_t);
  case 65540:
  return function (param_e_2, param_t_1) {
  const {
  tokenRaw: var_n,
  tokenRegExp: var_r,
  tokenValue: var_o_1,
  tokenStart: var_i_1
  }
  = param_e_2;
  var_q(param_e_2, param_t_1);
  param_e_2.assignable = 2;
  const obj_a = {
  type: "Literal",
  value: var_o_1,
  regex: var_r
  };
  if (param_e_2.options.raw) {
  obj_a.raw = var_n;
  }
  return param_e_2.finishNode(obj_a, var_i_1);
  }
  (param_e_1, param_t);
  case 133:
  if (!(param_e_1.features & 1)) {
  param_e_1.report(30, "@");
  }
  case 86094:
  return function (param_e_2, param_t_1, param_n_1, param_r_1, param_o_1) {
  let var_a_1 = null;
  let var_s = null;
  const var_c = Et(param_e_2, param_t_1, param_n_1);
  var_Q(param_e_2, param_t_1 = (param_t_1 | 16385) ^ 16384, 86094);
  if (param_e_2.getToken() & 4096 && param_e_2.getToken() !== 20565) {
  if (ne(param_e_2, param_t_1, param_e_2.getToken())) {
  param_e_2.report(120);
  }
  if (!(~param_e_2.getToken() & 537079808)) {
  param_e_2.report(121);
  }
  var_a_1 = ct(param_e_2, param_t_1);
  }
  let var_l_1 = param_t_1;
  if (var_J(param_e_2, param_t_1 | 32, 20565)) {
  var_s = qe(param_e_2, param_t_1, param_n_1, 0, param_r_1, 0);
  var_l_1 |= 512;
  }
  else {
  var_l_1 = (var_l_1 | 512) ^ 512;
  }
  const var_u_1 = Ct(param_e_2, var_l_1, param_t_1, undefined, param_n_1, 2, param_r_1);
  param_e_2.assignable = 2;
  return param_e_2.finishNode(var_i({
  type: "ClassExpression",
  id: var_a_1,
  superClass: var_s,
  body: var_u_1
  }
  , param_e_2.features & 1 ? {
  decorators: var_c
  }
  : null), param_o_1);
  }
  (param_e_1, param_t, param_n, param_s, param_l);
  case 86109:
  return function (param_e_2, param_t_1) {
  const {
  tokenStart: var_n
  }
  = param_e_2;
  var_q(param_e_2, param_t_1);
  switch (param_e_2.getToken()) {
  case 67108991:
  param_e_2.report(169);
  case 67174411:
  if (!(param_t_1 & 512)) {
  param_e_2.report(28);
  }
  param_e_2.assignable = 2;
  break;
  case 69271571:
  case 67108877:
  if (!(param_t_1 & 256)) {
  param_e_2.report(29);
  }
  param_e_2.assignable = 1;
  break;
  default:
  param_e_2.report(30, "super");
  }
  return param_e_2.finishNode({
  type: "Super"
  }
  , var_n);
  }
  (param_e_1, param_t);
  case 67174409:
  return rt(param_e_1, param_t);
  case 67174408:
  return ot(param_e_1, param_t, param_n);
  case 86107:
  return function (param_e_2, param_t_1, param_n_1, param_r_1) {
  const {
  tokenStart: var_o_1
  }
  = param_e_2;
  const var_i_1 = ct(param_e_2, param_t_1 | 32);
  const {
  tokenStart: var_a_1
  }
  = param_e_2;
  if (var_J(param_e_2, param_t_1, 67108877)) {
  if (param_t_1 & 65536 && param_e_2.getToken() === 209030) {
  param_e_2.assignable = 2;
  return function (param_e_3, param_t_2, param_n_2, param_r_2) {
  const var_o_2 = ct(param_e_3, param_t_2);
  return param_e_3.finishNode({
  type: "MetaProperty",
  meta: param_n_2,
  property: var_o_2
  }
  , param_r_2);
  }
  (param_e_2, param_t_1, var_i_1, var_o_1);
  }
  param_e_2.report(94);
  }
  param_e_2.assignable = 2;
  if (!(~param_e_2.getToken() & 16842752)) {
  param_e_2.report(65, list_x[param_e_2.getToken() & 255]);
  }
  const var_s = Xe(param_e_2, param_t_1, param_n_1, 2, 1, 0, param_r_1, 1, var_a_1);
  param_t_1 = (param_t_1 | 131072) ^ 131072;
  if (param_e_2.getToken() === 67108991) {
  param_e_2.report(170);
  }
  const var_c = function var_e(param_t_2, param_n_2, param_r_2, param_o_1, param_i,
  param_a_1) {
  const var_s_1 = param_t_2.getToken();
  if (var_s_1 & 67108864) {
  if (var_s_1 === 67108877) {
  var_q(param_t_2, param_n_2 | 262144);
  param_t_2.assignable = 1;
  const var_i_2 = Ke(param_t_2, param_n_2, param_r_2, 1);
  return var_e(param_t_2, param_n_2, param_r_2, param_t_2.finishNode({
  type: "MemberExpression",
  object: param_o_1,
  computed: false,
  property: var_i_2,
  optional: false
  }
  , param_a_1), 0, param_a_1);
  }
  if (var_s_1 === 69271571) {
  var_q(param_t_2, param_n_2 | 32);
  const {
  tokenStart: var_s_2
  }
  = param_t_2;
  const var_c_1 = He(param_t_2, param_n_2, param_r_2, param_i, 1, var_s_2);
  var_Q(param_t_2, param_n_2, 20);
  param_t_2.assignable = 1;
  return var_e(param_t_2, param_n_2, param_r_2, param_t_2.finishNode({
  type: "MemberExpression",
  object: param_o_1,
  computed: true,
  property: var_c_1,
  optional: false
  }
  , param_a_1), 0, param_a_1);
  }
  if (var_s_1 === 67174408 || var_s_1 === 67174409) {
  param_t_2.assignable = 2;
  return var_e(param_t_2, param_n_2, param_r_2, param_t_2.finishNode({
  type: "TaggedTemplateExpression",
  tag: param_o_1,
  quasi: param_t_2.getToken() === 67174408 ? ot(param_t_2, param_n_2 | 64, param_r_2) :
  rt(param_t_2, param_n_2 | 64)
  }
  , param_a_1), 0, param_a_1);
  }
  }
  return param_o_1;
  }
  (param_e_2, param_t_1, param_n_1, var_s, param_r_1, var_a_1);
  param_e_2.assignable = 2;
  return param_e_2.finishNode({
  type: "NewExpression",
  callee: var_c,
  arguments: param_e_2.getToken() === 67174411 ? st(param_e_2, param_t_1, param_n_1,
  param_r_1) : []
  }
  , var_o_1);
  }
  (param_e_1, param_t, param_n, param_s);
  case 134283389:
  return nt(param_e_1, param_t);
  case 131:
  {
  if (!param_d) {
  param_e_1.report(30, "PrivateField");
  }
  const {
  tokenStart: var_r
  }
  = param_e_1;
  const var_o_1 = It(param_e_1, param_t, param_n, 0);
  if (param_e_1.getToken() !== 8673330) {
  throw new var_S(var_r, param_e_1.startPosition, 151);
  }
  return var_o_1;
  }
  case 86106:
  return function (param_e_2, param_t_1, param_n_1, param_r_1, param_o_1, param_i) {
  let var_a_1 = ct(param_e_2, param_t_1);
  if (param_e_2.getToken() === 67108877) {
  return $e(param_e_2, param_t_1, var_a_1, param_i, param_n_1, param_o_1, param_r_1);
  }
  else {
  if (param_r_1) {
  param_e_2.report(144);
  }
  var_a_1 = Je(param_e_2, param_t_1, param_n_1, param_o_1, param_i);
  param_e_2.assignable = 2;
  return Ye(param_e_2, param_t_1, param_n_1, var_a_1, param_o_1, 0, param_i);
  }
  }
  (param_e_1, param_t, param_n, param_o, param_s, param_l);
  case 8456256:
  if (param_e_1.options.jsx) {
  return Lt(param_e_1, param_t, param_n, 0, param_e_1.tokenStart);
  }
  default:
  if (ie(param_t, param_e_1.getToken())) {
  return yt(param_e_1, param_t, param_n);
  }
  param_e_1.report(30, list_x[param_e_1.getToken() & 255]);
  }
  }
  function $e(param_e_1, param_t, param_n, param_r, param_o, param_i = 0, param_a = 0) {
  const var_s = param_e_1.tokenStart;
  const var_c = param_e_1.currentLocation;
  var_q(param_e_1, param_t);
  const var_l_1 = param_e_1.getToken();
  const var_u_1 = param_e_1.features & 2 && !(var_l_1 & -2147483648) &&
  param_e_1.tokenValue === "defer";
  const var_d_1 = param_e_1.features & 4 && !(var_l_1 & -2147483648) &&
  param_e_1.tokenValue === "source";
  if (var_u_1 || var_d_1) {
  if (param_a) {
  param_e_1.report(144);
  }
  var_q(param_e_1, param_t);
  const var_n = Je(param_e_1, param_t, param_o, param_i, param_r, param_e_1.tokenValue);
  param_e_1.assignable = 2;
  return var_n;
  }
  if (!(param_t & 2)) {
  throw new var_S(var_s, var_c, 171);
  }
  if (var_l_1 !== 209031 && param_e_1.tokenValue !== "meta") {
  param_e_1.report(176);
  }
  else if (var_l_1 & -2147483648) {
  param_e_1.report(177);
  }
  param_e_1.assignable = 2;
  return param_e_1.finishNode({
  type: "MetaProperty",
  meta: param_n,
  property: ct(param_e_1, param_t)
  }
  , param_r);
  }
  function Je(param_e_1, param_t, param_n, param_r, param_o, param_a = null) {
  var_Q(param_e_1, param_t | 32, 67174411);
  if (param_e_1.getToken() === 14) {
  param_e_1.report(145);
  }
  const var_s = Me(param_e_1, param_t, param_n, 1, param_r, param_e_1.tokenStart);
  let var_c = null;
  if (param_e_1.getToken() === 18) {
  var_Q(param_e_1, param_t, 18);
  if (param_e_1.getToken() !== 16) {
  var_c = Me(param_e_1, (param_t | 131072) ^ 131072, param_n, 1, param_r, param_e_1.tokenStart);
  }
  var_J(param_e_1, param_t, 18);
  }
  const var_l_1 = var_i({
  type: "ImportExpression",
  source: var_s,
  options: var_c
  }
  , param_e_1.features & 2 || param_e_1.features & 4 ? {
  phase: param_a
  }
  : null);
  var_Q(param_e_1, param_t, 16);
  return param_e_1.finishNode(var_l_1, param_o);
  }
  function Qe(param_e_1, param_t) {
  if (!var_J(param_e_1, param_t, 20579)) {
  return [];
  }
  var_Q(param_e_1, param_t, 2162700);
  const list_n = [];
  const var_r = new Set();
  while (param_e_1.getToken() !== 1074790415) {
  const var_o_1 = param_e_1.tokenStart;
  const var_i_1 = et(param_e_1, param_t);
  var_Q(param_e_1, param_t, 21);
  const var_a_1 = Ze(param_e_1, param_t);
  const var_s = var_i_1.type === "Literal" ? var_i_1.value :
  var_i_1.name;
  if (var_r.has(var_s)) {
  param_e_1.report(147, var_s);
  }
  var_r.add(var_s);
  list_n.push(param_e_1.finishNode({
  type: "ImportAttribute",
  key: var_i_1,
  value: var_a_1
  }
  , var_o_1));
  if (param_e_1.getToken() !== 1074790415) {
  var_Q(param_e_1, param_t, 18);
  }
  }
  var_Q(param_e_1, param_t, 1074790415);
  return list_n;
  }
  function Ze(param_e_1, param_t) {
  if (param_e_1.getToken() === 134283267) {
  return lt(param_e_1, param_t);
  }
  param_e_1.report(30, list_x[param_e_1.getToken() & 255]);
  }
  function et(param_e_1, param_t) {
  if (param_e_1.getToken() === 134283267) {
  return lt(param_e_1, param_t);
  }
  else if (param_e_1.getToken() & 143360) {
  return ct(param_e_1, param_t);
  }
  else {
  param_e_1.report(30, list_x[param_e_1.getToken() & 255]);
  return;
  }
  }
  function tt(param_e_1, param_t) {
  if (param_e_1.getToken() === 134283267) {
  if (!param_e_1.tokenValue.isWellFormed()) {
  param_e_1.report(173);
  }
  return lt(param_e_1, param_t);
  }
  else if (param_e_1.getToken() & 143360) {
  return ct(param_e_1, param_t);
  }
  else {
  param_e_1.report(30, list_x[param_e_1.getToken() & 255]);
  return;
  }
  }
  function nt(param_e_1, param_t) {
  const {
  tokenRaw: var_n,
  tokenValue: var_r,
  tokenStart: var_o_1
  }
  = param_e_1;
  var_q(param_e_1, param_t);
  param_e_1.assignable = 2;
  const obj_i = {
  type: "Literal",
  value: var_r,
  bigint: String(var_r)
  };
  if (param_e_1.options.raw) {
  obj_i.raw = var_n;
  }
  return param_e_1.finishNode(obj_i, var_o_1);
  }
  function rt(param_e_1, param_t) {
  param_e_1.assignable = 2;
  const {
  tokenValue: var_n,
  tokenRaw: var_r,
  tokenStart: var_o_1
  }
  = param_e_1;
  var_Q(param_e_1, param_t, 67174409);
  const list_i = [it(param_e_1, var_n, var_r, var_o_1, true)];
  return param_e_1.finishNode({
  type: "TemplateLiteral",
  expressions: [],
  quasis: list_i
  }
  , var_o_1);
  }
  function ot(param_e_1, param_t, param_n) {
  param_t = (param_t | 131072) ^ 131072;
  const {
  tokenValue: var_r,
  tokenRaw: var_o_1,
  tokenStart: var_i_1
  }
  = param_e_1;
  var_Q(param_e_1, param_t & -65 | 32, 67174408);
  const list_a = [it(param_e_1, var_r, var_o_1, var_i_1, false)];
  const list_s_1 = [He(param_e_1, param_t & -65, param_n, 0, 1, param_e_1.tokenStart)];
  for (param_e_1.getToken() !== 1074790415 && param_e_1.report(83);
  param_e_1.setToken(var_G(param_e_1, param_t), true) !== 67174409;
  ) {
  const {
  tokenValue: var_r_1,
  tokenRaw: var_o_2,
  tokenStart: var_i_2
  }
  = param_e_1;
  var_Q(param_e_1, param_t & -65 | 32, 67174408);
  list_a.push(it(param_e_1, var_r_1, var_o_2, var_i_2, false));
  list_s_1.push(He(param_e_1, param_t, param_n, 0, 1, param_e_1.tokenStart));
  if (param_e_1.getToken() !== 1074790415) {
  param_e_1.report(83);
  }
  }
  {
  const {
  tokenValue: var_n,
  tokenRaw: var_r_1,
  tokenStart: var_o_2
  }
  = param_e_1;
  var_Q(param_e_1, param_t, 67174409);
  list_a.push(it(param_e_1, var_n, var_r_1, var_o_2, true));
  }
  param_e_1.assignable = 2;
  return param_e_1.finishNode({
  type: "TemplateLiteral",
  expressions: list_s_1,
  quasis: list_a
  }
  , var_i_1);
  }
  function it(param_e_1, param_t, param_n, param_r, param_o) {
  const var_i_1 = param_e_1.finishNode({
  type: "TemplateElement",
  value: {
  cooked: param_t,
  raw: param_n
  }
  ,
  tail: param_o
  }
  , param_r);
  const var_a_1 = param_o ? 1 : 2;
  const {
  ranges: var_s
  }
  = param_e_1.options;
  if (var_s) {
  if (var_s.start) {
  var_i_1.start += 1;
  }
  if (var_s.end) {
  var_i_1.end -= var_a_1;
  }
  if (var_s.range) {
  var_i_1.range[0] += 1;
  var_i_1.range[1] -= var_a_1;
  }
  }
  if (param_e_1.options.loc) {
  var_i_1.loc.start.column += 1;
  var_i_1.loc.end.column -= var_a_1;
  }
  return var_i_1;
  }
  function at(param_e_1, param_t, param_n) {
  const var_r = param_e_1.tokenStart;
  var_Q(param_e_1, (param_t = (param_t | 131072) ^ 131072) | 32, 14);
  const var_o_1 = Me(param_e_1, param_t, param_n, 1, 0, param_e_1.tokenStart);
  param_e_1.assignable = 1;
  return param_e_1.finishNode({
  type: "SpreadElement",
  argument: var_o_1
  }
  , var_r);
  }
  function st(param_e_1, param_t, param_n, param_r) {
  var_q(param_e_1, param_t | 32);
  const list_o_1 = [];
  if (param_e_1.getToken() === 16) {
  var_q(param_e_1, param_t | 64);
  return list_o_1;
  }
  while (param_e_1.getToken() !== 16 && (param_e_1.getToken() === 14 ?
  list_o_1.push(at(param_e_1, param_t, param_n)) : list_o_1.push(Me(param_e_1, param_t,
  param_n, 1, param_r, param_e_1.tokenStart)), param_e_1.getToken() === 18) &&
  (var_q(param_e_1, param_t | 32), param_e_1.getToken() !== 16));
  var_Q(param_e_1, param_t | 64, 16);
  return list_o_1;
  }
  function ct(param_e_1, param_t) {
  const {
  tokenValue: var_n,
  tokenStart: var_r
  }
  = param_e_1;
  const var_o_1 = var_n === "await" && !(param_e_1.getToken() & -2147483648);
  var_q(param_e_1, param_t | (var_o_1 ? 32 : 0));
  return param_e_1.finishNode({
  type: "Identifier",
  name: var_n
  }
  , var_r);
  }
  function lt(param_e_1, param_t) {
  const {
  tokenValue: var_n,
  tokenRaw: var_r,
  tokenStart: var_o_1
  }
  = param_e_1;
  if (param_e_1.getToken() === 134283389) {
  return nt(param_e_1, param_t);
  }
  const obj_i = {
  type: "Literal",
  value: var_n
  };
  if (param_e_1.options.raw) {
  obj_i.raw = var_r;
  }
  var_q(param_e_1, param_t);
  param_e_1.assignable = 2;
  return param_e_1.finishNode(obj_i, var_o_1);
  }
  function ut(param_e_1, param_t, param_n, param_r, param_o, param_i, param_a, param_s,
  param_c = 0) {
  var var_l_1;
  var var_u_1;
  var_q(param_e_1, param_t | 32);
  const var_d_1 = param_o ? var_$(param_e_1, param_t, 8391476) :
  0;
  let var_f_1;
  let var_p_1 = null;
  let var_h_1 = param_n ? param_e_1.createScope() : undefined;
  if (param_e_1.getToken() === 67174411) {
  if (!(param_i & 1)) {
  param_e_1.report(39, "Function");
  }
  }
  else {
  var var_g_1;
  const var_r = !(param_c & 4) || param_t & 8 && param_t & 2 ?
  (param_a ? 1024 : 0) | 64 | (var_d_1 ? 1024 : 0) : 4;
  te(param_e_1, param_t, param_e_1.getToken());
  if (param_n) {
  param_n.addVarOrBlock(param_t, param_e_1.tokenValue, var_r, param_e_1.tokenStart,
  param_e_1.currentLocation, param_c);
  var_h_1 = (var_g_1 = var_h_1) === null || var_g_1 === undefined ?
  undefined : var_g_1.createChildScope(128);
  if (param_i && param_i & 2) {
  param_e_1.declareUnboundVariable(param_e_1.tokenValue);
  }
  }
  var_f_1 = param_e_1.getToken();
  if (param_e_1.getToken() & 143360) {
  var_p_1 = ct(param_e_1, param_t);
  }
  else {
  param_e_1.report(30, list_x[param_e_1.getToken() & 255]);
  }
  }
  {
  const num_e = 28416;
  param_t = (param_t | num_e) ^ num_e | 65536 | (param_a ? 2048 :
  0) | (var_d_1 ? 1024 : 0) | (var_d_1 ? 0 : 262144);
  }
  var_h_1 = (var_l_1 = var_h_1) === null || var_l_1 === undefined ?
  undefined : var_l_1.createChildScope(256);
  const var_m_1 = Tt(param_e_1, param_t & -524289 | 8192, var_h_1, param_r, 0, 1);
  const num_v = 524428;
  const var_y = We(param_e_1, (param_t | num_v) ^ num_v | 36864, (var_u_1 = var_h_1) === null ||
  var_u_1 === undefined ? undefined : var_u_1.createChildScope(64), param_r, var_f_1,
  var_h_1, 8);
  return param_e_1.finishNode({
  type: "FunctionDeclaration",
  id: var_p_1,
  params: var_m_1,
  body: var_y,
  async: param_a === 1,
  generator: var_d_1 === 1
  }
  , param_s);
  }
  function dt(param_e_1, param_t, param_n, param_r, param_o, param_i) {
  var var_a_1;
  var var_s;
  var var_c;
  var_q(param_e_1, param_t | 32);
  const var_l_1 = var_$(param_e_1, param_t, 8391476);
  const var_u_1 = (param_r ? 2048 : 0) | (var_l_1 ? 1024 : 0);
  let var_d_1;
  let var_f_1 = null;
  let var_p_1 = param_e_1.createScopeIfLexical();
  const num_h = 552704;
  if (param_e_1.getToken() & 143360) {
  te(param_e_1, (param_t | num_h) ^ num_h | var_u_1, param_e_1.getToken());
  var_p_1 = (var_a_1 = var_p_1) === null || var_a_1 === undefined ?
  undefined : var_a_1.createChildScope(128);
  var_d_1 = param_e_1.getToken();
  var_f_1 = ct(param_e_1, param_t);
  }
  param_t = (param_t | num_h) ^ num_h | 65536 | var_u_1 | (var_l_1 ?
  0 : 262144);
  var_p_1 = (var_s = var_p_1) === null || var_s === undefined ?
  undefined : var_s.createChildScope(256);
  const var_g_1 = Tt(param_e_1, param_t & -524289 | 8192, var_p_1, param_n, param_o,
  1);
  const var_m_1 = We(param_e_1, param_t & -131229 | 36864, (var_c = var_p_1) === null ||
  var_c === undefined ? undefined : var_c.createChildScope(64), param_n, var_d_1,
  var_p_1);
  param_e_1.assignable = 2;
  return param_e_1.finishNode({
  type: "FunctionExpression",
  id: var_f_1,
  params: var_g_1,
  body: var_m_1,
  async: param_r === 1,
  generator: var_l_1 === 1
  }
  , param_i);
  }
  function ft(param_e_1, param_t, param_n, param_r, param_o, param_i, param_a, param_s,
  param_c = 0) {
  const {
  tokenStart: var_l_1
  }
  = param_e_1;
  var_q(param_e_1, param_t | 32);
  const list_u = [];
  let num_d = 0;
  for (param_t = (param_t | 131072) ^ 131072;
  param_e_1.getToken() !== 20;
  ) {
  if (var_J(param_e_1, param_t | 32, 18)) {
  list_u.push(null);
  }
  else {
  let var_o_1;
  const {
  tokenStart: var_l_2,
  tokenValue: var_f_2,
  currentLocation: var_p_1
  }
  = param_e_1;
  const var_h_1 = param_e_1.getToken();
  if (var_h_1 & 143360) {
  var_o_1 = Xe(param_e_1, param_t, param_r, param_s, 0, 1, param_i, 1, var_l_2);
  if (param_e_1.getToken() === 1077936155) {
  if (param_e_1.assignable & 2) {
  param_e_1.report(26);
  }
  var_q(param_e_1, param_t | 32);
  if (param_n != null) {
  param_n.addVarOrBlock(param_t, var_f_2, param_s, var_l_2, var_p_1, param_c);
  }
  const var_u_1 = Me(param_e_1, param_t, param_r, 1, param_i, param_e_1.tokenStart);
  var_o_1 = param_e_1.finishNode(param_a ? {
  type: "AssignmentPattern",
  left: var_o_1,
  right: var_u_1
  }
  : {
  type: "AssignmentExpression",
  operator: "=",
  left: var_o_1,
  right: var_u_1
  }
  , var_l_2);
  num_d |= (param_e_1.destructible & 256 ? 256 : 0) | (param_e_1.destructible & 128 ?
  128 : 0);
  }
  else if (param_e_1.getToken() === 18 || param_e_1.getToken() === 20) {
  if (param_e_1.assignable & 2) {
  num_d |= 16;
  }
  else if (param_n != null) {
  param_n.addVarOrBlock(param_t, var_f_2, param_s, var_l_2, var_p_1, param_c);
  }
  num_d |= (param_e_1.destructible & 256 ? 256 : 0) | (param_e_1.destructible & 128 ?
  128 : 0);
  }
  else {
  num_d |= param_s & 1 ? 32 : param_s & 2 ? 0 : 16;
  var_o_1 = Ye(param_e_1, param_t, param_r, var_o_1, param_i, 0, var_l_2);
  if (param_e_1.getToken() !== 18 && param_e_1.getToken() !== 20) {
  if (param_e_1.getToken() !== 1077936155) {
  num_d |= 16;
  }
  var_o_1 = je(param_e_1, param_t, param_r, param_i, param_a, var_l_2, var_o_1);
  }
  else if (param_e_1.getToken() !== 1077936155) {
  num_d |= param_e_1.assignable & 1 ? 32 : 16;
  }
  }
  }
  else if (var_h_1 & 2097152) {
  var_o_1 = param_e_1.getToken() === 2162700 ? mt(param_e_1, param_t, param_n, param_r,
  0, param_i, param_a, param_s, param_c) : ft(param_e_1, param_t, param_n, param_r,
  0, param_i, param_a, param_s, param_c);
  num_d |= param_e_1.destructible;
  param_e_1.assignable = param_e_1.destructible & 16 ? 2 : 1;
  if (param_e_1.getToken() === 18 || param_e_1.getToken() === 20) {
  if (param_e_1.assignable & 2) {
  num_d |= 16;
  }
  }
  else if (param_e_1.destructible & 8) {
  param_e_1.report(71);
  }
  else {
  var_o_1 = Ye(param_e_1, param_t, param_r, var_o_1, param_i, 0, var_l_2);
  num_d = param_e_1.assignable & 2 ? 16 : 0;
  if (param_e_1.getToken() !== 18 && param_e_1.getToken() !== 20) {
  var_o_1 = je(param_e_1, param_t, param_r, param_i, param_a, var_l_2, var_o_1);
  }
  else if (param_e_1.getToken() !== 1077936155) {
  num_d |= param_e_1.assignable & 1 ? 32 : 16;
  }
  }
  }
  else if (var_h_1 === 14) {
  var_o_1 = ht(param_e_1, param_t, param_n, param_r, 20, param_s, 0, param_i, param_a,
  param_c);
  num_d |= param_e_1.destructible;
  if (param_e_1.getToken() !== 18 && param_e_1.getToken() !== 20) {
  param_e_1.report(30, list_x[param_e_1.getToken() & 255]);
  }
  }
  else {
  var_o_1 = qe(param_e_1, param_t, param_r, 1, 0, 1);
  if (param_e_1.getToken() !== 18 && param_e_1.getToken() !== 20) {
  var_o_1 = je(param_e_1, param_t, param_r, param_i, param_a, var_l_2, var_o_1);
  if (!(param_s & 3) && var_h_1 === 67174411) {
  num_d |= 16;
  }
  }
  else if (param_e_1.assignable & 2) {
  num_d |= 16;
  }
  else if (var_h_1 === 67174411) {
  num_d |= param_e_1.assignable & 1 && param_s & 3 ? 32 : 16;
  }
  }
  list_u.push(var_o_1);
  if (!var_J(param_e_1, param_t | 32, 18)) {
  break;
  }
  if (param_e_1.getToken() === 20) {
  break;
  }
  }
  }
  var_Q(param_e_1, param_t, 20);
  const var_f_1 = param_e_1.finishNode({
  type: param_a ? "ArrayPattern" : "ArrayExpression",
  elements: list_u
  }
  , var_l_1);
  if (!param_o && param_e_1.getToken() & 4194304) {
  return pt(param_e_1, param_t, param_r, num_d, param_i, param_a, var_l_1, var_f_1);
  }
  else {
  param_e_1.destructible = num_d;
  return var_f_1;
  }
  }
  function pt(param_e_1, param_t, param_n, param_r, param_o, param_i, param_a, param_s) {
  if (param_e_1.getToken() !== 1077936155) {
  param_e_1.report(26);
  }
  var_q(param_e_1, param_t | 32);
  if (param_r & 16) {
  param_e_1.report(26);
  }
  if (!param_i) {
  var_Z(param_e_1, param_s);
  }
  const {
  tokenStart: var_c
  }
  = param_e_1;
  const var_l_1 = Me(param_e_1, param_t, param_n, 1, param_o, var_c);
  param_e_1.destructible = (param_r | 72) ^ 72 | (param_e_1.destructible & 128 ?
  128 : 0) | (param_e_1.destructible & 256 ? 256 : 0);
  return param_e_1.finishNode(param_i ? {
  type: "AssignmentPattern",
  left: param_s,
  right: var_l_1
  }
  : {
  type: "AssignmentExpression",
  left: param_s,
  operator: "=",
  right: var_l_1
  }
  , param_a);
  }
  function ht(param_e_1, param_t, param_n, param_r, param_o, param_i, param_a, param_s,
  param_c, param_l = 0) {
  const {
  tokenStart: var_u_1
  }
  = param_e_1;
  var_q(param_e_1, param_t | 32);
  let var_d_1 = null;
  let num_f = 0;
  const {
  tokenValue: var_p_1,
  tokenStart: var_h_1,
  currentLocation: var_g_1
  }
  = param_e_1;
  let var_m_1 = param_e_1.getToken();
  if (var_m_1 & 143360) {
  param_e_1.assignable = 1;
  var_d_1 = Xe(param_e_1, param_t, param_r, param_i, 0, 1, param_s, 1, var_h_1);
  var_m_1 = param_e_1.getToken();
  var_d_1 = Ye(param_e_1, param_t, param_r, var_d_1, param_s, 0, var_h_1);
  if (param_e_1.getToken() !== 18 && param_e_1.getToken() !== param_o) {
  if (param_e_1.assignable & 2 && param_e_1.getToken() === 1077936155) {
  param_e_1.report(71);
  }
  num_f |= 16;
  var_d_1 = je(param_e_1, param_t, param_r, param_s, param_c, var_h_1, var_d_1);
  }
  if (param_e_1.assignable & 2) {
  num_f |= 16;
  }
  else if (var_m_1 === param_o || var_m_1 === 18) {
  if (param_n != null) {
  param_n.addVarOrBlock(param_t, var_p_1, param_i, var_h_1, var_g_1, param_l);
  }
  }
  else {
  num_f |= 32;
  }
  num_f |= param_e_1.destructible & 128 ? 128 : 0;
  }
  else if (var_m_1 === param_o) {
  param_e_1.report(41);
  }
  else {
  if (!(var_m_1 & 2097152)) {
  num_f |= 32;
  var_d_1 = qe(param_e_1, param_t, param_r, 1, param_s, 1);
  const {
  tokenStart: var_n
  }
  = param_e_1;
  const var_i_1 = param_e_1.getToken();
  if (var_i_1 === 1077936155) {
  if (param_e_1.assignable & 2) {
  param_e_1.report(26);
  }
  var_d_1 = je(param_e_1, param_t, param_r, param_s, param_c, var_n, var_d_1);
  num_f |= 16;
  }
  else {
  if (var_i_1 === 18) {
  num_f |= 16;
  }
  else if (var_i_1 !== param_o) {
  var_d_1 = je(param_e_1, param_t, param_r, param_s, param_c, var_n, var_d_1);
  }
  num_f |= param_e_1.assignable & 1 ? 32 : 16;
  }
  param_e_1.destructible = num_f;
  if (param_e_1.getToken() !== param_o && param_e_1.getToken() !== 18) {
  param_e_1.report(163);
  }
  return param_e_1.finishNode({
  type: param_c ? "RestElement" : "SpreadElement",
  argument: var_d_1
  }
  , var_u_1);
  }
  var_d_1 = param_e_1.getToken() === 2162700 ? mt(param_e_1, param_t, param_n, param_r,
  1, param_s, param_c, param_i, param_l) : ft(param_e_1, param_t, param_n, param_r,
  1, param_s, param_c, param_i, param_l);
  var_m_1 = param_e_1.getToken();
  if (var_m_1 !== 1077936155 && var_m_1 !== param_o && var_m_1 !== 18) {
  if (param_e_1.destructible & 8) {
  param_e_1.report(71);
  }
  var_d_1 = Ye(param_e_1, param_t, param_r, var_d_1, param_s, 0, var_h_1);
  num_f |= param_e_1.assignable & 1 ? 0 : 16;
  if (~param_e_1.getToken() & 4194304) {
  if (!(~param_e_1.getToken() & 8388608)) {
  var_d_1 = Ge(param_e_1, param_t, param_r, 1, var_h_1, 4, var_m_1, var_d_1);
  }
  if (var_J(param_e_1, param_t | 32, 22)) {
  var_d_1 = ze(param_e_1, param_t, param_r, var_d_1, var_h_1);
  }
  num_f |= param_e_1.assignable & 1 ? 32 : 16;
  }
  else {
  if (param_e_1.getToken() !== 1077936155) {
  num_f |= 16;
  }
  var_d_1 = je(param_e_1, param_t, param_r, param_s, param_c, var_h_1, var_d_1);
  }
  }
  else {
  num_f |= param_o === 1074790415 && var_m_1 !== 1077936155 ?
  16 : param_e_1.destructible;
  }
  }
  if (param_e_1.getToken() !== param_o) {
  if (param_i & 1) {
  num_f |= param_a ? 16 : 32;
  }
  if (var_J(param_e_1, param_t | 32, 1077936155)) {
  if (num_f & 16) {
  param_e_1.report(26);
  }
  var_Z(param_e_1, var_d_1);
  const var_n = Me(param_e_1, param_t, param_r, 1, param_s, param_e_1.tokenStart);
  var_d_1 = param_e_1.finishNode(param_c ? {
  type: "AssignmentPattern",
  left: var_d_1,
  right: var_n
  }
  : {
  type: "AssignmentExpression",
  left: var_d_1,
  operator: "=",
  right: var_n
  }
  , var_h_1);
  num_f = 16;
  }
  else {
  num_f |= 16;
  }
  }
  param_e_1.destructible = num_f;
  return param_e_1.finishNode({
  type: param_c ? "RestElement" : "SpreadElement",
  argument: var_d_1
  }
  , var_u_1);
  }
  function gt(param_e_1, param_t, param_n, param_r, param_o, param_i) {
  var var_a_1;
  const var_c = (param_r & 64 ? 0 : 16896) | 11264;
  param_t = (param_t | var_c) ^ var_c | (param_r & 8 ? 1024 :
  0) | (param_r & 16 ? 2048 : 0) | (param_r & 64 ? 16384 : 0) | 98560;
  let var_l_1 = param_e_1.createScopeIfLexical(256);
  const var_u_1 = function (param_e_2, param_t_1, param_n_1, param_r_1, param_o_1,
  param_i_1, param_a) {
  var_Q(param_e_2, param_t_1, 67174411);
  const list_s_1 = [];
  param_e_2.flags = (param_e_2.flags | 128) ^ 128;
  param_e_2.strictReservedRange = null;
  param_e_2.firstAwaitLocation = null;
  if (param_e_2.getToken() === 16) {
  if (param_o_1 & 512) {
  param_e_2.report(37, "Setter", "one", "");
  }
  var_q(param_e_2, param_t_1);
  return list_s_1;
  }
  if (param_o_1 & 256) {
  param_e_2.report(37, "Getter", "no", "s");
  }
  if (param_o_1 & 512 && param_e_2.getToken() === 14) {
  param_e_2.report(38);
  }
  param_t_1 = (param_t_1 | 131072) ^ 131072;
  let num_c = 0;
  let num_l = 0;
  while (param_e_2.getToken() !== 18) {
  var var_u_2;
  let var_i_1 = null;
  const {
  tokenStart: var_d_2
  }
  = param_e_2;
  if (param_e_2.getToken() & 143360) {
  if (!(param_t_1 & 1)) {
  if (!(~param_e_2.getToken() & 36864)) {
  param_e_2.flags |= 256;
  if ((var_u_2 = param_e_2.strictReservedRange) === null || var_u_2 === undefined) {
  param_e_2.strictReservedRange = [var_d_2, param_e_2.currentLocation];
  }
  }
  if (!(~param_e_2.getToken() & 537079808)) {
  param_e_2.flags |= 512;
  }
  }
  var_i_1 = Rt(param_e_2, param_t_1, param_n_1, param_o_1 | 1);
  }
  else {
  if (param_e_2.getToken() === 2162700) {
  var_i_1 = mt(param_e_2, param_t_1, param_n_1, param_r_1, 1, param_a, 1, 1);
  }
  else if (param_e_2.getToken() === 69271571) {
  var_i_1 = ft(param_e_2, param_t_1, param_n_1, param_r_1, 1, param_a, 1, 1);
  }
  else if (param_e_2.getToken() === 14) {
  var_i_1 = ht(param_e_2, param_t_1, param_n_1, param_r_1, 16, 1, 0, param_a, 1);
  }
  num_l = 1;
  if (param_e_2.destructible & 48) {
  param_e_2.report(50);
  }
  }
  if (param_e_2.getToken() === 1077936155) {
  var_q(param_e_2, param_t_1 | 32);
  num_l = 1;
  const var_n = Me(param_e_2, param_t_1, param_r_1, 1, 0, param_e_2.tokenStart);
  var_i_1 = param_e_2.finishNode({
  type: "AssignmentPattern",
  left: var_i_1,
  right: var_n
  }
  , var_d_2);
  }
  num_c++;
  list_s_1.push(var_i_1);
  if (!var_J(param_e_2, param_t_1, 18)) {
  break;
  }
  if (param_e_2.getToken() === 16) {
  break;
  }
  }
  if (param_o_1 & 512 && num_c !== 1) {
  param_e_2.report(37, "Setter", "one", "");
  }
  if (param_n_1 != null) {
  param_n_1.reportScopeError();
  }
  if (num_l) {
  param_e_2.flags |= 128;
  }
  var_Q(param_e_2, param_t_1, 16);
  return list_s_1;
  }
  (param_e_1, param_t & -524289 | 8192, var_l_1, param_n, param_r, 0, param_o);
  var_l_1 = (var_a_1 = var_l_1) === null || var_a_1 === undefined ?
  undefined : var_a_1.createChildScope(64);
  const var_d_1 = We(param_e_1, param_t & -655373 | 36864, var_l_1, param_n, undefined,
  var_l_1?.parent);
  return param_e_1.finishNode({
  type: "FunctionExpression",
  params: var_u_1,
  body: var_d_1,
  async: (param_r & 16) > 0,
  generator: (param_r & 8) > 0,
  id: null
  }
  , param_i);
  }
  function mt(param_e_1, param_t, param_n, param_r, param_o, param_i, param_a, param_s,
  param_c = 0) {
  const {
  tokenStart: var_l_1
  }
  = param_e_1;
  var_q(param_e_1, param_t);
  const list_u = [];
  let num_d = 0;
  let num_f = 0;
  for (param_t = (param_t | 131072) ^ 131072;
  param_e_1.getToken() !== 1074790415;
  ) {
  const {
  tokenValue: var_o_1,
  tokenStart: var_l_2,
  currentLocation: var_p_2
  }
  = param_e_1;
  const var_h_1 = param_e_1.getToken();
  if (var_h_1 === 14) {
  list_u.push(ht(param_e_1, param_t, param_n, param_r, 1074790415, param_s, 0, param_i,
  param_a, param_c));
  }
  else {
  let var_g_1;
  let num_m = 0;
  let var_v_1 = null;
  if (param_e_1.getToken() & 143360 || param_e_1.getToken() === -2147483527 ||
  param_e_1.getToken() === -2147483526) {
  if (param_e_1.getToken() === -2147483526) {
  num_d |= 16;
  }
  var_v_1 = ct(param_e_1, param_t);
  if (param_e_1.getToken() === 18 || param_e_1.getToken() === 1074790415 ||
  param_e_1.getToken() === 1077936155) {
  num_m |= 4;
  if (param_t & 1 && !(~var_h_1 & 537079808)) {
  num_d |= 16;
  }
  else {
  ee(param_e_1, param_t, param_s, var_h_1, 0);
  }
  if (param_n != null) {
  param_n.addVarOrBlock(param_t, var_o_1, param_s, var_l_2, var_p_2, param_c);
  }
  if (var_J(param_e_1, param_t | 32, 1077936155)) {
  num_d |= 8;
  const var_n = Me(param_e_1, param_t, param_r, 1, param_i, param_e_1.tokenStart);
  num_d |= (param_e_1.destructible & 256 ? 256 : 0) | (param_e_1.destructible & 128 ?
  128 : 0);
  var_g_1 = param_e_1.finishNode({
  type: "AssignmentPattern",
  left: param_e_1.cloneIdentifier(var_v_1),
  right: var_n
  }
  , var_l_2);
  }
  else {
  num_d |= (var_h_1 === 209006 ? 128 : 0) | (var_h_1 === -2147483527 ?
  16 : 0);
  var_g_1 = param_e_1.cloneIdentifier(var_v_1);
  }
  }
  else if (var_J(param_e_1, param_t | 32, 21)) {
  const {
  tokenStart: var_l_3,
  currentLocation: var_u_1
  }
  = param_e_1;
  if (var_o_1 === "__proto__") {
  num_f++;
  }
  if (param_e_1.getToken() & 143360) {
  const var_o_2 = param_e_1.getToken();
  const var_f_1 = param_e_1.tokenValue;
  var_g_1 = Xe(param_e_1, param_t, param_r, param_s, 0, 1, param_i, 1, var_l_3);
  const var_p_3 = param_e_1.getToken();
  var_g_1 = Ye(param_e_1, param_t, param_r, var_g_1, param_i, 0, var_l_3);
  if (param_e_1.getToken() === 18 || param_e_1.getToken() === 1074790415) {
  if (var_p_3 === 1077936155 || var_p_3 === 1074790415 || var_p_3 === 18) {
  num_d |= param_e_1.destructible & 128 ? 128 : 0;
  if (param_e_1.assignable & 2) {
  num_d |= 16;
  }
  else if (!(~var_o_2 & 143360) && param_n != null) {
  param_n.addVarOrBlock(param_t, var_f_1, param_s, var_l_3, var_u_1, param_c);
  }
  }
  else {
  num_d |= param_e_1.assignable & 1 ? 32 : 16;
  }
  }
  else if (~param_e_1.getToken() & 4194304) {
  num_d |= 16;
  if (!(~param_e_1.getToken() & 8388608)) {
  var_g_1 = Ge(param_e_1, param_t, param_r, 1, var_l_3, 4, var_p_3, var_g_1);
  }
  if (var_J(param_e_1, param_t | 32, 22)) {
  var_g_1 = ze(param_e_1, param_t, param_r, var_g_1, var_l_3);
  }
  }
  else {
  if (param_e_1.assignable & 2) {
  num_d |= 16;
  }
  else if (var_p_3 !== 1077936155) {
  num_d |= 32;
  }
  else if (param_n != null) {
  param_n.addVarOrBlock(param_t, var_f_1, param_s, var_l_3, var_u_1, param_c);
  }
  var_g_1 = je(param_e_1, param_t, param_r, param_i, param_a, var_l_3, var_g_1);
  }
  }
  else if (~param_e_1.getToken() & 2097152) {
  var_g_1 = qe(param_e_1, param_t, param_r, 1, param_i, 1);
  num_d |= param_e_1.assignable & 1 ? 32 : 16;
  if (param_e_1.getToken() === 18 || param_e_1.getToken() === 1074790415) {
  if (param_e_1.assignable & 2) {
  num_d |= 16;
  }
  }
  else {
  var_g_1 = Ye(param_e_1, param_t, param_r, var_g_1, param_i, 0, var_l_3);
  num_d = param_e_1.assignable & 2 ? 16 : 0;
  if (param_e_1.getToken() !== 18 && var_h_1 !== 1074790415) {
  if (param_e_1.getToken() !== 1077936155) {
  num_d |= 16;
  }
  var_g_1 = je(param_e_1, param_t, param_r, param_i, param_a, var_l_3, var_g_1);
  }
  }
  }
  else {
  var_g_1 = param_e_1.getToken() === 69271571 ? ft(param_e_1, param_t, param_n, param_r,
  0, param_i, param_a, param_s, param_c) : mt(param_e_1, param_t, param_n, param_r,
  0, param_i, param_a, param_s, param_c);
  num_d = param_e_1.destructible;
  param_e_1.assignable = num_d & 16 ? 2 : 1;
  if (param_e_1.getToken() === 18 || param_e_1.getToken() === 1074790415) {
  if (param_e_1.assignable & 2) {
  num_d |= 16;
  }
  }
  else if (param_e_1.destructible & 8) {
  param_e_1.report(71);
  }
  else {
  var_g_1 = Ye(param_e_1, param_t, param_r, var_g_1, param_i, 0, var_l_3);
  num_d = param_e_1.assignable & 2 ? 16 : 0;
  if (~param_e_1.getToken() & 4194304) {
  if (!(~param_e_1.getToken() & 8388608)) {
  var_g_1 = Ge(param_e_1, param_t, param_r, 1, var_l_3, 4, var_h_1, var_g_1);
  }
  if (var_J(param_e_1, param_t | 32, 22)) {
  var_g_1 = ze(param_e_1, param_t, param_r, var_g_1, var_l_3);
  }
  num_d |= param_e_1.assignable & 1 ? 32 : 16;
  }
  else {
  var_g_1 = Fe(param_e_1, param_t, param_r, param_i, param_a, var_l_3, var_g_1);
  }
  }
  }
  }
  else if (param_e_1.getToken() === 69271571) {
  num_d |= 16;
  if (var_h_1 === 209005) {
  num_m |= 16;
  }
  num_m |= (var_h_1 === 209008 ? 256 : var_h_1 === 209009 ? 512 :
  1) | 2;
  var_v_1 = vt(param_e_1, param_t, param_r, param_i);
  num_d |= param_e_1.assignable;
  var_g_1 = gt(param_e_1, param_t, param_r, num_m, param_i, param_e_1.tokenStart);
  }
  else if (param_e_1.getToken() & 143360) {
  num_d |= 16;
  if (var_h_1 === -2147483527) {
  param_e_1.report(95);
  }
  if (var_h_1 === 209005) {
  if (param_e_1.flags & 1) {
  param_e_1.report(134);
  }
  num_m |= 17;
  }
  else if (var_h_1 === 209008) {
  num_m |= 256;
  }
  else if (var_h_1 === 209009) {
  num_m |= 512;
  }
  else {
  param_e_1.report(0);
  }
  var_v_1 = ct(param_e_1, param_t);
  var_g_1 = gt(param_e_1, param_t, param_r, num_m, param_i, param_e_1.tokenStart);
  }
  else if (param_e_1.getToken() === 67174411) {
  num_d |= 16;
  num_m |= 1;
  var_g_1 = gt(param_e_1, param_t, param_r, num_m, param_i, param_e_1.tokenStart);
  }
  else if (param_e_1.getToken() === 8391476) {
  num_d |= 16;
  if (var_h_1 === 209008) {
  param_e_1.report(42);
  }
  else if (var_h_1 === 209009) {
  param_e_1.report(43);
  }
  else if (var_h_1 !== 209005) {
  param_e_1.report(30, list_x[52]);
  }
  var_q(param_e_1, param_t);
  num_m |= (var_h_1 === 209005 ? 16 : 0) | 9;
  if (param_e_1.getToken() & 143360) {
  var_v_1 = ct(param_e_1, param_t);
  }
  else if (~param_e_1.getToken() & 134217728) {
  if (param_e_1.getToken() === 69271571) {
  num_m |= 2;
  var_v_1 = vt(param_e_1, param_t, param_r, param_i);
  num_d |= param_e_1.assignable;
  }
  else {
  param_e_1.report(30, list_x[param_e_1.getToken() & 255]);
  }
  }
  else {
  var_v_1 = lt(param_e_1, param_t);
  }
  var_g_1 = gt(param_e_1, param_t, param_r, num_m, param_i, param_e_1.tokenStart);
  }
  else if (~param_e_1.getToken() & 134217728) {
  param_e_1.report(135);
  }
  else {
  if (var_h_1 === 209005) {
  num_m |= 16;
  }
  num_m |= var_h_1 === 209008 ? 256 : var_h_1 === 209009 ? 512 :
  1;
  num_d |= 16;
  var_v_1 = lt(param_e_1, param_t);
  var_g_1 = gt(param_e_1, param_t, param_r, num_m, param_i, param_e_1.tokenStart);
  }
  }
  else if (~param_e_1.getToken() & 134217728) {
  if (param_e_1.getToken() === 69271571) {
  var_v_1 = vt(param_e_1, param_t, param_r, param_i);
  num_d |= param_e_1.destructible & 256 ? 256 : 0;
  num_m |= 2;
  if (param_e_1.getToken() === 21) {
  var_q(param_e_1, param_t | 32);
  const {
  tokenStart: var_o_2,
  tokenValue: var_l_3,
  currentLocation: var_u_1
  }
  = param_e_1;
  const var_f_1 = param_e_1.getToken();
  if (param_e_1.getToken() & 143360) {
  var_g_1 = Xe(param_e_1, param_t, param_r, param_s, 0, 1, param_i, 1, var_o_2);
  const var_p_3 = param_e_1.getToken();
  var_g_1 = Ye(param_e_1, param_t, param_r, var_g_1, param_i, 0, var_o_2);
  if (~param_e_1.getToken() & 4194304) {
  if (param_e_1.getToken() === 18 || param_e_1.getToken() === 1074790415) {
  if (var_p_3 === 1077936155 || var_p_3 === 1074790415 || var_p_3 === 18) {
  if (param_e_1.assignable & 2) {
  num_d |= 16;
  }
  else if (!(~var_f_1 & 143360) && param_n != null) {
  param_n.addVarOrBlock(param_t, var_l_3, param_s, var_o_2, var_u_1, param_c);
  }
  }
  else {
  num_d |= param_e_1.assignable & 1 ? 32 : 16;
  }
  }
  else {
  num_d |= 16;
  var_g_1 = je(param_e_1, param_t, param_r, param_i, param_a, var_o_2, var_g_1);
  }
  }
  else {
  num_d |= param_e_1.assignable & 1 ? var_p_3 === 1077936155 ?
  0 : 32 : 16;
  var_g_1 = Fe(param_e_1, param_t, param_r, param_i, param_a, var_o_2, var_g_1);
  }
  }
  else if (~param_e_1.getToken() & 2097152) {
  var_g_1 = qe(param_e_1, param_t, param_r, 1, 0, 1);
  num_d |= param_e_1.assignable & 1 ? 32 : 16;
  if (param_e_1.getToken() === 18 || param_e_1.getToken() === 1074790415) {
  if (param_e_1.assignable & 2) {
  num_d |= 16;
  }
  }
  else {
  var_g_1 = Ye(param_e_1, param_t, param_r, var_g_1, param_i, 0, var_o_2);
  num_d = param_e_1.assignable & 1 ? 0 : 16;
  if (param_e_1.getToken() !== 18 && param_e_1.getToken() !== 1074790415) {
  if (param_e_1.getToken() !== 1077936155) {
  num_d |= 16;
  }
  var_g_1 = je(param_e_1, param_t, param_r, param_i, param_a, var_o_2, var_g_1);
  }
  }
  }
  else {
  var_g_1 = param_e_1.getToken() === 69271571 ? ft(param_e_1, param_t, param_n, param_r,
  0, param_i, param_a, param_s, param_c) : mt(param_e_1, param_t, param_n, param_r,
  0, param_i, param_a, param_s, param_c);
  num_d = param_e_1.destructible;
  param_e_1.assignable = num_d & 16 ? 2 : 1;
  if (param_e_1.getToken() === 18 || param_e_1.getToken() === 1074790415) {
  if (param_e_1.assignable & 2) {
  num_d |= 16;
  }
  }
  else if (num_d & 8) {
  param_e_1.report(62);
  }
  else {
  var_g_1 = Ye(param_e_1, param_t, param_r, var_g_1, param_i, 0, var_o_2);
  num_d = param_e_1.assignable & 2 ? num_d | 16 : 0;
  if (~param_e_1.getToken() & 4194304) {
  if (!(~param_e_1.getToken() & 8388608)) {
  var_g_1 = Ge(param_e_1, param_t, param_r, 1, var_o_2, 4, var_h_1, var_g_1);
  }
  if (var_J(param_e_1, param_t | 32, 22)) {
  var_g_1 = ze(param_e_1, param_t, param_r, var_g_1, var_o_2);
  }
  num_d |= param_e_1.assignable & 1 ? 32 : 16;
  }
  else {
  if (param_e_1.getToken() !== 1077936155) {
  num_d |= 16;
  }
  var_g_1 = Fe(param_e_1, param_t, param_r, param_i, param_a, var_o_2, var_g_1);
  }
  }
  }
  }
  else if (param_e_1.getToken() === 67174411) {
  num_m |= 1;
  var_g_1 = gt(param_e_1, param_t, param_r, num_m, param_i, param_e_1.tokenStart);
  num_d = 16;
  }
  else {
  param_e_1.report(44);
  }
  }
  else if (var_h_1 === 8391476) {
  var_Q(param_e_1, param_t | 32, 8391476);
  num_m |= 8;
  if (param_e_1.getToken() & 143360) {
  const var_n = param_e_1.getToken();
  var_v_1 = ct(param_e_1, param_t);
  num_m |= 1;
  if (param_e_1.getToken() !== 67174411) {
  throw new var_S(param_e_1.tokenStart, param_e_1.currentLocation, var_n === 209005 ?
  46 : var_n === 209008 || param_e_1.getToken() === 209009 ?
  45 : 47, list_x[var_n & 255]);
  }
  num_d |= 16;
  var_g_1 = gt(param_e_1, param_t, param_r, num_m, param_i, param_e_1.tokenStart);
  }
  else if (~param_e_1.getToken() & 134217728) {
  if (param_e_1.getToken() === 69271571) {
  num_d |= 16;
  num_m |= 3;
  var_v_1 = vt(param_e_1, param_t, param_r, param_i);
  var_g_1 = gt(param_e_1, param_t, param_r, num_m, param_i, param_e_1.tokenStart);
  }
  else {
  param_e_1.report(128);
  }
  }
  else {
  num_d |= 16;
  var_v_1 = lt(param_e_1, param_t);
  num_m |= 1;
  var_g_1 = gt(param_e_1, param_t, param_r, num_m, param_i, param_e_1.tokenStart);
  }
  }
  else {
  param_e_1.report(30, list_x[var_h_1 & 255]);
  }
  }
  else {
  var_v_1 = lt(param_e_1, param_t);
  if (param_e_1.getToken() === 21) {
  var_Q(param_e_1, param_t | 32, 21);
  const {
  tokenStart: var_l_3
  }
  = param_e_1;
  if (var_o_1 === "__proto__") {
  num_f++;
  }
  if (param_e_1.getToken() & 143360) {
  var_g_1 = Xe(param_e_1, param_t, param_r, param_s, 0, 1, param_i, 1, var_l_3);
  const {
  tokenValue: var_o_2,
  tokenStart: var_u_1,
  currentLocation: var_f_1
  }
  = param_e_1;
  const var_p_3 = param_e_1.getToken();
  var_g_1 = Ye(param_e_1, param_t, param_r, var_g_1, param_i, 0, var_l_3);
  if (param_e_1.getToken() === 18 || param_e_1.getToken() === 1074790415) {
  if (var_p_3 === 1077936155 || var_p_3 === 1074790415 || var_p_3 === 18) {
  if (param_e_1.assignable & 2) {
  num_d |= 16;
  }
  else if (param_n != null) {
  param_n.addVarOrBlock(param_t, var_o_2, param_s, var_u_1, var_f_1, param_c);
  }
  }
  else {
  num_d |= param_e_1.assignable & 1 ? 32 : 16;
  }
  }
  else if (param_e_1.getToken() === 1077936155) {
  if (param_e_1.assignable & 2) {
  num_d |= 16;
  }
  var_g_1 = je(param_e_1, param_t, param_r, param_i, param_a, var_l_3, var_g_1);
  }
  else {
  num_d |= 16;
  var_g_1 = je(param_e_1, param_t, param_r, param_i, param_a, var_l_3, var_g_1);
  }
  }
  else if (~param_e_1.getToken() & 2097152) {
  var_g_1 = qe(param_e_1, param_t, param_r, 1, 0, 1);
  num_d |= param_e_1.assignable & 1 ? 32 : 16;
  if (param_e_1.getToken() === 18 || param_e_1.getToken() === 1074790415) {
  if (param_e_1.assignable & 2) {
  num_d |= 16;
  }
  }
  else {
  var_g_1 = Ye(param_e_1, param_t, param_r, var_g_1, param_i, 0, var_l_3);
  num_d = param_e_1.assignable & 1 ? 0 : 16;
  if (param_e_1.getToken() !== 18 && param_e_1.getToken() !== 1074790415) {
  if (param_e_1.getToken() !== 1077936155) {
  num_d |= 16;
  }
  var_g_1 = je(param_e_1, param_t, param_r, param_i, param_a, var_l_3, var_g_1);
  }
  }
  }
  else {
  var_g_1 = param_e_1.getToken() === 69271571 ? ft(param_e_1, param_t, param_n, param_r,
  0, param_i, param_a, param_s, param_c) : mt(param_e_1, param_t, param_n, param_r,
  0, param_i, param_a, param_s, param_c);
  num_d = param_e_1.destructible;
  param_e_1.assignable = num_d & 16 ? 2 : 1;
  if (param_e_1.getToken() === 18 || param_e_1.getToken() === 1074790415) {
  if (param_e_1.assignable & 2) {
  num_d |= 16;
  }
  }
  else if (~param_e_1.destructible & 8) {
  var_g_1 = Ye(param_e_1, param_t, param_r, var_g_1, param_i, 0, var_l_3);
  num_d = param_e_1.assignable & 2 ? 16 : 0;
  if (~param_e_1.getToken() & 4194304) {
  if (!(~param_e_1.getToken() & 8388608)) {
  var_g_1 = Ge(param_e_1, param_t, param_r, 1, var_l_3, 4, var_h_1, var_g_1);
  }
  if (var_J(param_e_1, param_t | 32, 22)) {
  var_g_1 = ze(param_e_1, param_t, param_r, var_g_1, var_l_3);
  }
  num_d |= param_e_1.assignable & 1 ? 32 : 16;
  }
  else {
  var_g_1 = Fe(param_e_1, param_t, param_r, param_i, param_a, var_l_3, var_g_1);
  }
  }
  }
  }
  else if (param_e_1.getToken() === 67174411) {
  num_m |= 1;
  var_g_1 = gt(param_e_1, param_t, param_r, num_m, param_i, param_e_1.tokenStart);
  num_d = 16;
  }
  else {
  param_e_1.report(136);
  }
  }
  num_d |= param_e_1.destructible & 128 ? 128 : 0;
  param_e_1.destructible = num_d;
  list_u.push(param_e_1.finishNode({
  type: "Property",
  key: var_v_1,
  value: var_g_1,
  kind: num_m & 768 ? num_m & 512 ? "set" : "get" : "init",
  computed: (num_m & 2) > 0,
  method: (num_m & 1) > 0,
  shorthand: (num_m & 4) > 0
  }
  , var_l_2));
  }
  num_d |= param_e_1.destructible;
  if (param_e_1.getToken() !== 18) {
  break;
  }
  var_q(param_e_1, param_t);
  }
  var_Q(param_e_1, param_t, 1074790415);
  if (num_f > 1) {
  num_d |= 64;
  }
  const var_p_1 = param_e_1.finishNode({
  type: param_a ? "ObjectPattern" : "ObjectExpression",
  properties: list_u
  }
  , var_l_1);
  if (!param_o && param_e_1.getToken() & 4194304) {
  return pt(param_e_1, param_t, param_r, num_d, param_i, param_a, var_l_1, var_p_1);
  }
  else {
  param_e_1.destructible = num_d;
  return var_p_1;
  }
  }
  function vt(param_e_1, param_t, param_n, param_r) {
  var_q(param_e_1, param_t | 32);
  const var_o_1 = Me(param_e_1, (param_t | 131072) ^ 131072, param_n, 1, param_r,
  param_e_1.tokenStart);
  var_Q(param_e_1, param_t, 20);
  return var_o_1;
  }
  function yt(param_e_1, param_t, param_n) {
  const {
  tokenValue: var_r,
  tokenStart: var_o_1,
  currentLocation: var_i_1
  }
  = param_e_1;
  let num_a = 0;
  let num_s = 0;
  if (~param_e_1.getToken() & 537079808) {
  if (!(~param_e_1.getToken() & 36864)) {
  num_s = 1;
  }
  }
  else {
  num_a = 1;
  }
  const var_c = ct(param_e_1, param_t);
  param_e_1.assignable = 1;
  if (param_e_1.getToken() === 10) {
  const var_l_1 = param_e_1.options.lexical ? he(param_e_1, param_t, var_r, var_o_1,
  var_i_1) : undefined;
  if (num_a) {
  param_e_1.flags |= 128;
  }
  if (num_s) {
  param_e_1.flags |= 256;
  }
  return _t(param_e_1, param_t, var_l_1, param_n, [var_c], 0, var_o_1);
  }
  return var_c;
  }
  function kt(param_e_1, param_t, param_n, param_r, param_o, param_i, param_a, param_s,
  param_c, param_l = 0) {
  if (!param_a) {
  param_e_1.report(57);
  }
  if (param_i) {
  param_e_1.report(51);
  }
  param_e_1.flags &= -129;
  return _t(param_e_1, param_t, param_e_1.options.lexical ? he(param_e_1, param_t,
  param_r, param_c, param_e_1.currentLocation) : undefined, param_n, [param_o], param_s,
  param_c, param_l);
  }
  function bt(param_e_1, param_t, param_n, param_r, param_o, param_i, param_a, param_s,
  param_c = 0) {
  if (!param_i) {
  param_e_1.report(57);
  }
  for (let num_t = 0;
  num_t < param_o.length;
  ++num_t) {
  var_Z(param_e_1, param_o[num_t]);
  }
  return _t(param_e_1, param_t, param_n, param_r, param_o, param_a, param_s, param_c);
  }
  function _t(param_e_1, param_t, param_n, param_r, param_o, param_i, param_a, param_s = 0) {
  var var_c;
  if (param_e_1.flags & 1) {
  param_e_1.report(48);
  }
  var_Q(param_e_1, param_t | 32, 10);
  const num_l = 535552;
  param_t = (param_t | num_l) ^ num_l | (param_i ? 2048 : 0);
  const var_u_1 = param_e_1.getToken() !== 2162700;
  let var_d_1;
  if ((var_c = param_n) !== null && var_c !== undefined) {
  var_c.reportScopeError();
  }
  if (var_u_1) {
  param_e_1.flags = (param_e_1.flags | 4928) ^ 4928;
  var_d_1 = Me(param_e_1, param_t, param_r, 1, 0, param_e_1.tokenStart);
  }
  else {
  var var_f_1;
  const num_o = 131084;
  var_d_1 = We(param_e_1, (param_t | num_o) ^ num_o | 4096, param_n = (var_f_1 = param_n) === null ||
  var_f_1 === undefined ? undefined : var_f_1.createChildScope(64), param_r, undefined,
  undefined, 16);
  switch (param_e_1.getToken()) {
  case 69271571:
  if (!(param_e_1.flags & 1)) {
  param_e_1.report(118);
  }
  param_e_1.flags |= 8192;
  break;
  case 67108877:
  case 67174409:
  case 22:
  param_e_1.report(119);
  case 67174411:
  if (!(param_e_1.flags & 1)) {
  param_e_1.report(118);
  }
  param_e_1.flags |= 1024;
  }
  if (!(~param_e_1.getToken() & 8388608) && !(param_e_1.flags & 1) &&
  (param_e_1.getToken() !== 8673330 || param_s !== 32)) {
  param_e_1.report(30, list_x[param_e_1.getToken() & 255]);
  }
  if (!(~param_e_1.getToken() & 33619968)) {
  param_e_1.report(127);
  }
  }
  param_e_1.assignable = 2;
  return param_e_1.finishNode({
  type: "ArrowFunctionExpression",
  params: param_o,
  body: var_d_1,
  async: param_i === 1,
  expression: var_u_1,
  generator: false
  }
  , param_a);
  }
  function Tt(param_e_1, param_t, param_n, param_r, param_o, param_i) {
  var_Q(param_e_1, param_t, 67174411);
  param_e_1.flags = (param_e_1.flags | 128) ^ 128;
  param_e_1.strictReservedRange = null;
  param_e_1.firstAwaitLocation = null;
  const list_a = [];
  if (var_J(param_e_1, param_t, 16)) {
  return list_a;
  }
  param_t = (param_t | 131072) ^ 131072;
  let num_s = 0;
  while (param_e_1.getToken() !== 18) {
  var var_c;
  let var_l_1;
  const {
  tokenStart: var_u_1
  }
  = param_e_1;
  const var_d_1 = param_e_1.getToken();
  if (var_d_1 & 143360) {
  if (!(param_t & 1)) {
  if (!(~var_d_1 & 36864)) {
  param_e_1.flags |= 256;
  if ((var_c = param_e_1.strictReservedRange) === null || var_c === undefined) {
  param_e_1.strictReservedRange = [var_u_1, param_e_1.currentLocation];
  }
  }
  if (!(~var_d_1 & 537079808)) {
  param_e_1.flags |= 512;
  }
  }
  var_l_1 = Rt(param_e_1, param_t, param_n, param_i | 1);
  }
  else {
  if (var_d_1 === 2162700) {
  var_l_1 = mt(param_e_1, param_t, param_n, param_r, 1, param_o, 1, param_i);
  }
  else if (var_d_1 === 69271571) {
  var_l_1 = ft(param_e_1, param_t, param_n, param_r, 1, param_o, 1, param_i);
  }
  else if (var_d_1 === 14) {
  var_l_1 = ht(param_e_1, param_t, param_n, param_r, 16, param_i, 0, param_o, 1);
  }
  else {
  param_e_1.report(30, list_x[var_d_1 & 255]);
  }
  num_s = 1;
  if (param_e_1.destructible & 48) {
  param_e_1.report(50);
  }
  }
  if (param_e_1.getToken() === 1077936155) {
  var_q(param_e_1, param_t | 32);
  num_s = 1;
  const var_n = Me(param_e_1, param_t, param_r, 1, param_o, param_e_1.tokenStart);
  var_l_1 = param_e_1.finishNode({
  type: "AssignmentPattern",
  left: var_l_1,
  right: var_n
  }
  , var_u_1);
  }
  list_a.push(var_l_1);
  if (!var_J(param_e_1, param_t, 18)) {
  break;
  }
  if (param_e_1.getToken() === 16) {
  break;
  }
  }
  if (num_s) {
  param_e_1.flags |= 128;
  }
  if ((num_s || param_t & 1) && param_n != null) {
  param_n.reportScopeError();
  }
  var_Q(param_e_1, param_t, 16);
  return list_a;
  }
  function St(param_e_1, param_t, param_n, param_r, param_o) {
  if (param_e_1.getToken() === 209006) {
  param_e_1.report(31);
  }
  if (param_t & 1025 && param_e_1.getToken() === 241771) {
  param_e_1.report(32);
  }
  ae(param_e_1, param_t, param_e_1.getToken());
  if (!(~param_e_1.getToken() & 36864)) {
  param_e_1.flags |= 256;
  }
  return kt(param_e_1, param_t & -524289 | 2048, param_n, param_e_1.tokenValue, ct(
  param_e_1, param_t), 0, param_r, 1, param_o);
  }
  function xt(param_e_1, param_t, param_n, param_r, param_o, param_i, param_a, param_s) {
  var var_c;
  var_q(param_e_1, param_t | 32);
  const var_l_1 = (var_c = param_e_1.createScopeIfLexical()) === null ||
  var_c === undefined ? undefined : var_c.createChildScope(512);
  const var_u_1 = param_e_1.firstAwaitLocation;
  param_e_1.firstAwaitLocation = null;
  if (var_J(param_e_1, param_t = (param_t | 131072) ^ 131072, 16)) {
  if (param_e_1.getToken() === 10) {
  if (param_a & 1) {
  param_e_1.report(48);
  }
  return bt(param_e_1, param_t, var_l_1, param_n, [], param_o, 1, param_s);
  }
  else {
  if (param_t & 1 || !param_e_1.options.webcompat) {
  param_e_1.assignable = 2;
  }
  else {
  param_e_1.assignable = 4;
  }
  if (var_u_1) {
  param_e_1.firstAwaitLocation = var_u_1;
  }
  return param_e_1.finishNode({
  type: "CallExpression",
  callee: param_r,
  arguments: [],
  optional: false
  }
  , param_s);
  }
  }
  let var_d_1;
  let num_f = 0;
  let num_p = 0;
  param_e_1.destructible = (param_e_1.destructible | 384) ^ 384;
  const list_h = [];
  while (param_e_1.getToken() !== 16) {
  const {
  tokenStart: var_o_1,
  currentLocation: var_a_1
  }
  = param_e_1;
  const var_c_1 = param_e_1.getToken();
  if (var_c_1 & 143360) {
  if (var_l_1 != null) {
  var_l_1.addBlockName(param_t, param_e_1.tokenValue, param_i, var_o_1, var_a_1);
  }
  if (~var_c_1 & 537079808) {
  if (!(~var_c_1 & 36864)) {
  param_e_1.flags |= 256;
  }
  }
  else {
  param_e_1.flags |= 512;
  }
  var_d_1 = Xe(param_e_1, param_t, param_n, param_i, 0, 1, 1, 1, var_o_1);
  if (param_e_1.getToken() === 16 || param_e_1.getToken() === 18) {
  if (param_e_1.assignable & 2) {
  num_f |= 16;
  num_p = 1;
  }
  }
  else {
  if (param_e_1.getToken() === 1077936155) {
  num_p = 1;
  }
  else {
  num_f |= 16;
  }
  var_d_1 = Ye(param_e_1, param_t, param_n, var_d_1, 1, 0, var_o_1);
  if (param_e_1.getToken() !== 16 && param_e_1.getToken() !== 18) {
  var_d_1 = je(param_e_1, param_t, param_n, 1, 0, var_o_1, var_d_1);
  }
  }
  }
  else if (var_c_1 & 2097152) {
  var_d_1 = var_c_1 === 2162700 ? mt(param_e_1, param_t, var_l_1, param_n, 0, 1,
  0, param_i) : ft(param_e_1, param_t, var_l_1, param_n, 0, 1, 0, param_i);
  num_f |= param_e_1.destructible;
  num_p = 1;
  if (param_e_1.getToken() !== 16 && param_e_1.getToken() !== 18) {
  if (num_f & 8) {
  param_e_1.report(124);
  }
  var_d_1 = Ye(param_e_1, param_t, param_n, var_d_1, 0, 0, var_o_1);
  num_f |= 16;
  if (!(~param_e_1.getToken() & 8388608)) {
  var_d_1 = Ge(param_e_1, param_t, param_n, 1, param_s, 4, var_c_1, var_d_1);
  }
  if (var_J(param_e_1, param_t | 32, 22)) {
  var_d_1 = ze(param_e_1, param_t, param_n, var_d_1, param_s);
  }
  }
  }
  else {
  if (var_c_1 !== 14) {
  var_d_1 = Me(param_e_1, param_t, param_n, 1, 0, var_o_1);
  num_f = 0;
  list_h.push(var_d_1);
  while (var_J(param_e_1, param_t | 32, 18)) {
  list_h.push(Me(param_e_1, param_t, param_n, 1, 0, var_o_1));
  }
  num_f |= param_e_1.assignable;
  var_Q(param_e_1, param_t, 16);
  param_e_1.destructible = num_f | 16;
  if (param_t & 1 || !param_e_1.options.webcompat) {
  param_e_1.assignable = 2;
  }
  else {
  param_e_1.assignable = 4;
  }
  if (var_u_1) {
  param_e_1.firstAwaitLocation = var_u_1;
  }
  return param_e_1.finishNode({
  type: "CallExpression",
  callee: param_r,
  arguments: list_h,
  optional: false
  }
  , param_s);
  }
  var_d_1 = ht(param_e_1, param_t, var_l_1, param_n, 16, param_i, 1, 1, 0);
  num_f |= (param_e_1.getToken() === 16 ? 0 : 16) | param_e_1.destructible;
  num_p = 1;
  }
  list_h.push(var_d_1);
  if (!var_J(param_e_1, param_t | 32, 18)) {
  break;
  }
  }
  var_Q(param_e_1, param_t, 16);
  num_f |= (param_e_1.destructible & 256 ? 256 : 0) | (param_e_1.destructible & 128 ?
  128 : 0);
  if (param_e_1.getToken() === 10) {
  if (num_f & 48) {
  param_e_1.report(27);
  }
  if (param_e_1.flags & 1 || param_a & 1) {
  param_e_1.report(48);
  }
  if (num_f & 128) {
  const var_t_1 = param_e_1.firstAwaitLocation;
  if (var_t_1) {
  throw new var_S(var_t_1.start, var_t_1.end, 31);
  }
  param_e_1.report(31);
  }
  if (param_t & 1025 && num_f & 256) {
  param_e_1.report(32);
  }
  if (num_p) {
  param_e_1.flags |= 128;
  }
  return bt(param_e_1, param_t | 2048, var_l_1, param_n, list_h, param_o, 1, param_s);
  }
  if (num_f & 64) {
  param_e_1.report(63);
  }
  if (num_f & 8) {
  param_e_1.report(62);
  }
  if (param_t & 1 || !param_e_1.options.webcompat) {
  param_e_1.assignable = 2;
  }
  else {
  param_e_1.assignable = 4;
  }
  if (var_u_1) {
  param_e_1.firstAwaitLocation = var_u_1;
  }
  return param_e_1.finishNode({
  type: "CallExpression",
  callee: param_r,
  arguments: list_h,
  optional: false
  }
  , param_s);
  }
  function wt(param_e_1, param_t, param_n, param_r, param_o) {
  let var_a_1;
  let var_s;
  if (param_e_1.leadingDecorators.decorators.length) {
  var_a_1 = param_e_1.leadingDecorators.start;
  var_s = [...param_e_1.leadingDecorators.decorators];
  param_e_1.leadingDecorators.decorators.length = 0;
  }
  else {
  var_a_1 = param_e_1.tokenStart;
  var_s = Et(param_e_1, param_t, param_r);
  }
  var_Q(param_e_1, param_t = (param_t | 16385) ^ 16384, 86094);
  let var_c = null;
  let var_l_1 = null;
  const {
  tokenValue: var_u_1,
  tokenStart: var_d_1,
  currentLocation: var_f_1
  }
  = param_e_1;
  if (param_e_1.getToken() & 4096 && param_e_1.getToken() !== 20565) {
  if (ne(param_e_1, param_t, param_e_1.getToken())) {
  param_e_1.report(120);
  }
  if (!(~param_e_1.getToken() & 537079808)) {
  param_e_1.report(121);
  }
  if (param_n) {
  param_n.addBlockName(param_t, var_u_1, 32, var_d_1, var_f_1);
  if (param_o && param_o & 2) {
  param_e_1.declareUnboundVariable(var_u_1);
  }
  }
  var_c = ct(param_e_1, param_t);
  }
  else if (!(param_o & 1)) {
  param_e_1.report(39, "Class");
  }
  let var_p_1 = param_t;
  if (var_J(param_e_1, param_t | 32, 20565)) {
  var_l_1 = qe(param_e_1, param_t, param_r, 0, 0, 0);
  var_p_1 |= 512;
  }
  else {
  var_p_1 = (var_p_1 | 512) ^ 512;
  }
  const var_h_1 = Ct(param_e_1, var_p_1, param_t, param_n, param_r, 2, 0, 8);
  return param_e_1.finishNode(var_i({
  type: "ClassDeclaration",
  id: var_c,
  superClass: var_l_1,
  body: var_h_1
  }
  , param_e_1.features & 1 ? {
  decorators: var_s
  }
  : null), var_a_1);
  }
  function Et(param_e_1, param_t, param_n) {
  const list_r_1 = [];
  if (param_e_1.features & 1) {
  while (param_e_1.getToken() === 133) {
  list_r_1.push(At(param_e_1, param_t, param_n));
  }
  }
  return list_r_1;
  }
  function At(param_e_1, param_t, param_n) {
  const var_r = param_e_1.tokenStart;
  var_q(param_e_1, param_t | 32);
  const var_o_1 = param_e_1.tokenStart;
  let var_i_1;
  if (param_e_1.getToken() === 67174411) {
  var_i_1 = Xe(param_e_1, param_t, param_n, 2, 0, 1, 0, 1, var_r);
  }
  else {
  const var_r_1 = param_e_1.getToken();
  if (~var_r_1 & 143360 && !ie(param_t, var_r_1) || param_t & 1 &&
  !(~var_r_1 & 36864)) {
  param_e_1.report(30, list_x[var_r_1 & 255]);
  }
  if (var_r_1 === 209006 && param_t & 2050) {
  param_e_1.report(112);
  }
  if (var_r_1 === 241771 && param_t & 1024) {
  param_e_1.report(97, "yield");
  }
  let var_a_1 = ct(param_e_1, param_t | 64);
  while (param_e_1.getToken() === 67108877) {
  var_q(param_e_1, (param_t | 262152) ^ 8);
  const var_r_2 = Ke(param_e_1, param_t | 64, param_n, 1);
  var_a_1 = param_e_1.finishNode({
  type: "MemberExpression",
  object: var_a_1,
  computed: false,
  property: var_r_2,
  optional: false
  }
  , var_o_1);
  }
  var_i_1 = var_a_1;
  if (param_e_1.getToken() === 67174411) {
  const var_r_2 = st(param_e_1, param_t, param_n, 0);
  var_i_1 = param_e_1.finishNode({
  type: "CallExpression",
  callee: var_a_1,
  arguments: var_r_2,
  optional: false
  }
  , var_o_1);
  }
  }
  return param_e_1.finishNode({
  type: "Decorator",
  expression: var_i_1
  }
  , var_r);
  }
  function Ct(param_e_1, param_t, param_n, param_r, param_o, param_i, param_a, param_s = 0) {
  const {
  tokenStart: var_c
  }
  = param_e_1;
  const var_l_1 = param_e_1.createPrivateScopeIfLexical(param_o);
  var_Q(param_e_1, param_t | 32, 2162700);
  const num_u = 655360;
  param_t = (param_t | num_u) ^ num_u;
  const var_d_1 = param_e_1.flags & 32;
  param_e_1.flags = (param_e_1.flags | 32) ^ 32;
  const list_f = [];
  while (param_e_1.getToken() !== 1074790415) {
  const var_o_1 = param_e_1.tokenStart;
  const var_s = Et(param_e_1, param_t, var_l_1);
  if (var_s.length > 0 && param_e_1.tokenValue === "constructor") {
  param_e_1.report(111);
  }
  if (param_e_1.getToken() === 1074790415) {
  param_e_1.report(110);
  }
  if (var_J(param_e_1, param_t, 1074790417)) {
  if (var_s.length > 0) {
  param_e_1.report(122);
  }
  }
  else {
  list_f.push(Ot(param_e_1, param_t, param_r, var_l_1, param_n, param_i, var_s, 0,
  param_a, var_s.length > 0 ? var_o_1 : param_e_1.tokenStart));
  }
  }
  var_Q(param_e_1, param_s & 8 ? param_t | 32 : param_t, 1074790415);
  if (var_l_1 != null) {
  var_l_1.validatePrivateIdentifierRefs();
  }
  param_e_1.flags = param_e_1.flags & -33 | var_d_1;
  return param_e_1.finishNode({
  type: "ClassBody",
  body: list_f
  }
  , var_c);
  }
  function Ot(param_e_1, param_t, param_n, param_r, param_o, param_a, param_s, param_c,
  param_l, param_u) {
  let var_d_1 = param_c ? 32 : 0;
  let var_f_1 = null;
  const var_p_1 = param_e_1.getToken();
  if (var_p_1 & 176128 || var_p_1 === -2147483527) {
  var_f_1 = ct(param_e_1, param_t);
  switch (var_p_1) {
  case 36970:
  if (!param_c && param_e_1.getToken() !== 67174411 && ~param_e_1.getToken() & 1048576 &&
  param_e_1.getToken() !== 1077936155) {
  return Ot(param_e_1, param_t, param_n, param_r, param_o, param_a, param_s, 1, param_l,
  param_u);
  }
  break;
  case 209005:
  if (param_e_1.getToken() !== 67174411 && !(param_e_1.flags & 1)) {
  if (!(~param_e_1.getToken() & 1073741824)) {
  return Nt(param_e_1, param_t, param_r, var_f_1, var_d_1, param_s, param_u);
  }
  var_d_1 |= (var_$(param_e_1, param_t, 8391476) ? 8 : 0) | 16;
  }
  break;
  case 209008:
  if (param_e_1.getToken() !== 67174411) {
  if (param_e_1.getToken() === 8391476 && param_e_1.flags & 1) {
  return Nt(param_e_1, param_t, param_r, var_f_1, var_d_1, param_s, param_u);
  }
  if (!(~param_e_1.getToken() & 1073741824)) {
  return Nt(param_e_1, param_t, param_r, var_f_1, var_d_1, param_s, param_u);
  }
  var_d_1 |= 256;
  }
  break;
  case 209009:
  if (param_e_1.getToken() !== 67174411) {
  if (param_e_1.getToken() === 8391476 && param_e_1.flags & 1) {
  return Nt(param_e_1, param_t, param_r, var_f_1, var_d_1, param_s, param_u);
  }
  if (!(~param_e_1.getToken() & 1073741824)) {
  return Nt(param_e_1, param_t, param_r, var_f_1, var_d_1, param_s, param_u);
  }
  var_d_1 |= 512;
  }
  break;
  case 209010:
  if (param_e_1.getToken() !== 67174411 && !(param_e_1.flags & 1)) {
  if (!(~param_e_1.getToken() & 1073741824)) {
  return Nt(param_e_1, param_t, param_r, var_f_1, var_d_1, param_s, param_u);
  }
  if (param_e_1.features & 1) {
  var_d_1 |= 1024;
  }
  }
  }
  }
  else if (var_p_1 === 69271571) {
  var_d_1 |= 2;
  var_f_1 = vt(param_e_1, param_o, param_r, param_l);
  }
  else if (~var_p_1 & 134217728) {
  if (var_p_1 === 8391476) {
  var_d_1 |= 8;
  var_q(param_e_1, param_t);
  }
  else if (param_e_1.getToken() === 131) {
  var_d_1 |= 8192;
  var_f_1 = It(param_e_1, param_t | 16, param_r, 768);
  }
  else if (~param_e_1.getToken() & 1073741824) {
  if (param_c && var_p_1 === 2162700) {
  return function (param_e_2, param_t_1, param_n_1, param_r_1, param_o_1, param_i) {
  return _e(param_e_2, param_t_1 = (param_t_1 | 5764) ^ 5764 | 592128, param_n_1 = (
  param_i = param_n_1) === null || param_i === undefined ? undefined :
  param_i.createChildScope(), param_r_1, {
  }
  , param_o_1, "StaticBlock");
  }
  (param_e_1, param_t | 16, param_n, param_r, param_u);
  }
  if (var_p_1 === -2147483526) {
  var_f_1 = ct(param_e_1, param_t);
  if (param_e_1.getToken() !== 67174411) {
  param_e_1.report(30, list_x[param_e_1.getToken() & 255]);
  }
  }
  else {
  param_e_1.report(30, list_x[param_e_1.getToken() & 255]);
  }
  }
  else {
  var_d_1 |= 128;
  }
  }
  else {
  var_f_1 = lt(param_e_1, param_t);
  }
  if (var_d_1 & 1816) {
  if (param_e_1.getToken() & 143360 || param_e_1.getToken() === -2147483527 ||
  param_e_1.getToken() === -2147483526) {
  var_f_1 = ct(param_e_1, param_t);
  }
  else if (~param_e_1.getToken() & 134217728) {
  if (param_e_1.getToken() === 69271571) {
  var_d_1 |= 2;
  var_f_1 = vt(param_e_1, param_t, param_r, 0);
  }
  else if (param_e_1.getToken() === 131) {
  var_d_1 |= 8192;
  var_f_1 = It(param_e_1, param_t, param_r, var_d_1);
  }
  else {
  param_e_1.report(137);
  }
  }
  else {
  var_f_1 = lt(param_e_1, param_t);
  }
  }
  if (!(var_d_1 & 2)) {
  if (param_e_1.tokenValue === "constructor") {
  if (~param_e_1.getToken() & 1073741824) {
  if (!(var_d_1 & 32) && param_e_1.getToken() === 67174411) {
  if (var_d_1 & 920) {
  param_e_1.report(53, "accessor");
  }
  else if (!(param_t & 512)) {
  if (param_e_1.flags & 32) {
  param_e_1.report(54);
  }
  else {
  param_e_1.flags |= 32;
  }
  }
  }
  }
  else {
  param_e_1.report(131);
  }
  var_d_1 |= 64;
  }
  else if (!(var_d_1 & 8192) && var_d_1 & 32 && param_e_1.tokenValue === "prototype") {
  param_e_1.report(52);
  }
  }
  if (var_d_1 & 1024 || param_e_1.getToken() !== 67174411 &&
  !(var_d_1 & 768)) {
  return Nt(param_e_1, param_t, param_r, var_f_1, var_d_1, param_s, param_u);
  }
  const var_h_1 = gt(param_e_1, param_t | 16, param_r, var_d_1, param_l, param_e_1.tokenStart);
  return param_e_1.finishNode(var_i({
  type: "MethodDefinition",
  kind: !(var_d_1 & 32) && var_d_1 & 64 ? "constructor" : var_d_1 & 256 ?
  "get" : var_d_1 & 512 ? "set" : "method",
  static: (var_d_1 & 32) > 0,
  computed: (var_d_1 & 2) > 0,
  key: var_f_1,
  value: var_h_1
  }
  , param_e_1.features & 1 ? {
  decorators: param_s
  }
  : null), param_u);
  }
  function It(param_e_1, param_t, param_n, param_r) {
  const {
  tokenStart: var_o_1
  }
  = param_e_1;
  var_q(param_e_1, param_t);
  const {
  tokenValue: var_i_1
  }
  = param_e_1;
  if (var_i_1 === "constructor") {
  param_e_1.report(130);
  }
  if (param_e_1.options.lexical) {
  if (!param_n) {
  param_e_1.report(4, var_i_1);
  }
  if (param_r) {
  param_n.addPrivateIdentifier(var_i_1, param_r);
  }
  else {
  param_n.addPrivateIdentifierRef(var_i_1);
  }
  }
  var_q(param_e_1, param_t);
  return param_e_1.finishNode({
  type: "PrivateIdentifier",
  name: var_i_1
  }
  , var_o_1);
  }
  function Nt(param_e_1, param_t, param_n, param_r, param_o, param_a, param_s) {
  let var_c = null;
  if (param_o & 8) {
  param_e_1.report(0);
  }
  if (param_e_1.getToken() === 1077936155) {
  var_q(param_e_1, param_t | 32);
  const {
  tokenStart: var_r
  }
  = param_e_1;
  if (param_e_1.getToken() === 537079928) {
  param_e_1.report(121);
  }
  const var_i_1 = (param_o & 64 ? 0 : 16896) | 11264;
  var_c = Xe(param_e_1, (param_t = (param_t | var_i_1) ^ var_i_1 | (param_o & 8 ?
  1024 : 0) | (param_o & 16 ? 2048 : 0) | (param_o & 64 ? 16384 :
  0) | 65792) | 16, param_n, 2, 0, 1, 0, 1, var_r, 0, 1);
  if (!!(~param_e_1.getToken() & 1073741824) || !(~param_e_1.getToken() & 4194304)) {
  var_c = Ye(param_e_1, param_t | 16, param_n, var_c, 0, 0, var_r);
  var_c = je(param_e_1, param_t | 16, param_n, 0, 0, var_r, var_c);
  }
  }
  var_K(param_e_1, param_t);
  return param_e_1.finishNode(var_i({
  type: param_o & 1024 ? "AccessorProperty" : "PropertyDefinition",
  key: param_r,
  value: var_c,
  static: (param_o & 32) > 0,
  computed: (param_o & 2) > 0
  }
  , param_e_1.features & 1 ? {
  decorators: param_a
  }
  : null), param_s);
  }
  function Dt(param_e_1, param_t, param_n, param_r, param_o, param_i = 0) {
  if (param_e_1.getToken() & 143360 || !(param_t & 1) && param_e_1.getToken() === -2147483526) {
  return Rt(param_e_1, param_t, param_n, param_o, param_i);
  }
  if (~param_e_1.getToken() & 2097152) {
  param_e_1.report(30, list_x[param_e_1.getToken() & 255]);
  }
  const var_a_1 = param_e_1.getToken() === 69271571 ? ft(param_e_1, param_t, param_n,
  param_r, 1, 0, 1, param_o, param_i) : mt(param_e_1, param_t, param_n, param_r,
  1, 0, 1, param_o, param_i);
  if (param_e_1.destructible & 16) {
  param_e_1.report(50);
  }
  if (param_e_1.destructible & 32) {
  param_e_1.report(50);
  }
  return var_a_1;
  }
  function Rt(param_e_1, param_t, param_n, param_r, param_o = 0) {
  const var_i_1 = param_e_1.getToken();
  if (param_t & 1) {
  if (~var_i_1 & 537079808) {
  if (!(~var_i_1 & 36864) || var_i_1 === -2147483526) {
  param_e_1.report(120);
  }
  }
  else {
  param_e_1.report(121);
  }
  }
  if (!(~var_i_1 & 20480)) {
  param_e_1.report(102);
  }
  if (var_i_1 === 241771) {
  if (param_t & 1024) {
  param_e_1.report(32);
  }
  if (param_t & 2) {
  param_e_1.report(113);
  }
  }
  if ((var_i_1 & 255) == 73 && param_r & 24) {
  param_e_1.report(100);
  }
  if (var_i_1 === 209006) {
  if (param_t & 2048) {
  param_e_1.report(178);
  }
  if (param_t & 2) {
  param_e_1.report(112);
  }
  }
  const {
  tokenValue: var_a_1,
  tokenStart: var_s,
  currentLocation: var_c
  }
  = param_e_1;
  var_q(param_e_1, param_t);
  if (param_n != null) {
  param_n.addVarOrBlock(param_t, var_a_1, param_r, var_s, var_c, param_o);
  }
  return param_e_1.finishNode({
  type: "Identifier",
  name: var_a_1
  }
  , var_s);
  }
  function Lt(param_e_1, param_t, param_n, param_r, param_o) {
  if (!param_r) {
  var_Q(param_e_1, param_t, 8456256);
  }
  if (param_e_1.getToken() === 8390721) {
  const var_i_2 = function (param_e_2, param_t_1) {
  ue(param_e_2);
  return param_e_2.finishNode({
  type: "JSXOpeningFragment"
  }
  , param_t_1);
  }
  (param_e_1, param_o);
  const [var_a_1, var_s_1] = function (param_e_2, param_t_1, param_n_1, param_r_1) {
  const list_o_1 = [];
  while (true) {
  const var_i_3 = Bt(param_e_2, param_t_1, param_n_1, param_r_1);
  if (var_i_3.type === "JSXClosingFragment") {
  return [list_o_1, var_i_3];
  }
  list_o_1.push(var_i_3);
  }
  }
  (param_e_1, param_t, param_n, param_r);
  return param_e_1.finishNode({
  type: "JSXFragment",
  openingFragment: var_i_2,
  children: var_a_1,
  closingFragment: var_s_1
  }
  , param_o);
  }
  if (param_e_1.getToken() === 8457014) {
  param_e_1.report(30, list_x[param_e_1.getToken() & 255]);
  }
  let var_i_1 = null;
  let list_a = [];
  const var_s = function (param_e_2, param_t_1, param_n_1, param_r_1, param_o_1) {
  if (~param_e_2.getToken() & 143360 && ~param_e_2.getToken() & 4096) {
  param_e_2.report(0);
  }
  const var_i_2 = Mt(param_e_2, param_t_1);
  const var_a_1 = function (param_e_3, param_t_2, param_n_2) {
  const list_r_1 = [];
  while (param_e_3.getToken() !== 8457014 && param_e_3.getToken() !== 8390721 &&
  param_e_3.getToken() !== 1048576) {
  list_r_1.push(Ht(param_e_3, param_t_2, param_n_2));
  }
  return list_r_1;
  }
  (param_e_2, param_t_1, param_n_1);
  const var_s_1 = param_e_2.getToken() === 8457014;
  if (var_s_1) {
  var_Q(param_e_2, param_t_1 | 1048576, 8457014);
  }
  if (param_e_2.getToken() !== 8390721) {
  param_e_2.report(25, list_x[65]);
  }
  if (param_r_1 || !var_s_1) {
  ue(param_e_2);
  }
  else {
  var_q(param_e_2, param_t_1);
  }
  return param_e_2.finishNode({
  type: "JSXOpeningElement",
  name: var_i_2,
  attributes: var_a_1,
  selfClosing: var_s_1
  }
  , param_o_1);
  }
  (param_e_1, param_t, param_n, param_r, param_o);
  if (!var_s.selfClosing) {
  [list_a, var_i_1] = function (param_e_2, param_t_1, param_n_1, param_r_1) {
  const list_o_1 = [];
  while (true) {
  const var_i_2 = Pt(param_e_2, param_t_1, param_n_1, param_r_1);
  if (var_i_2.type === "JSXClosingElement") {
  return [list_o_1, var_i_2];
  }
  list_o_1.push(var_i_2);
  }
  }
  (param_e_1, param_t, param_n, param_r);
  const var_o_1 = oe(var_i_1.name);
  if (oe(var_s.name) !== var_o_1) {
  param_e_1.report(157, var_o_1);
  }
  }
  return param_e_1.finishNode({
  type: "JSXElement",
  children: list_a,
  openingElement: var_s,
  closingElement: var_i_1
  }
  , param_o);
  }
  function Pt(param_e_1, param_t, param_n, param_r) {
  if (param_e_1.getToken() === 138) {
  return Ut(param_e_1);
  }
  if (param_e_1.getToken() === 2162700) {
  return Ft(param_e_1, param_t, param_n, 1, 0);
  }
  if (param_e_1.getToken() === 8456256) {
  const {
  tokenStart: var_o_1
  }
  = param_e_1;
  var_q(param_e_1, param_t);
  if (param_e_1.getToken() === 8457014) {
  return function (param_e_2, param_t_1, param_n_1, param_r_1) {
  var_Q(param_e_2, param_t_1, 8457014);
  const var_o_2 = Mt(param_e_2, param_t_1);
  if (param_e_2.getToken() !== 8390721) {
  param_e_2.report(25, list_x[65]);
  }
  if (param_n_1) {
  ue(param_e_2);
  }
  else {
  var_q(param_e_2, param_t_1);
  }
  return param_e_2.finishNode({
  type: "JSXClosingElement",
  name: var_o_2
  }
  , param_r_1);
  }
  (param_e_1, param_t, param_r, var_o_1);
  }
  else {
  return Lt(param_e_1, param_t, param_n, 1, var_o_1);
  }
  }
  param_e_1.report(0);
  }
  function Bt(param_e_1, param_t, param_n, param_r) {
  if (param_e_1.getToken() === 138) {
  return Ut(param_e_1);
  }
  if (param_e_1.getToken() === 2162700) {
  return Ft(param_e_1, param_t, param_n, 1, 0);
  }
  if (param_e_1.getToken() === 8456256) {
  const {
  tokenStart: var_o_1
  }
  = param_e_1;
  var_q(param_e_1, param_t);
  if (param_e_1.getToken() === 8457014) {
  return function (param_e_2, param_t_1, param_n_1, param_r_1) {
  var_Q(param_e_2, param_t_1, 8457014);
  if (param_e_2.getToken() !== 8390721) {
  param_e_2.report(25, list_x[65]);
  }
  if (param_n_1) {
  ue(param_e_2);
  }
  else {
  var_q(param_e_2, param_t_1);
  }
  return param_e_2.finishNode({
  type: "JSXClosingFragment"
  }
  , param_r_1);
  }
  (param_e_1, param_t, param_r, var_o_1);
  }
  else {
  return Lt(param_e_1, param_t, param_n, 1, var_o_1);
  }
  }
  param_e_1.report(0);
  }
  function Ut(param_e_1) {
  const var_t_1 = param_e_1.tokenStart;
  ue(param_e_1);
  const obj_n = {
  type: "JSXText",
  value: param_e_1.tokenValue
  };
  if (param_e_1.options.raw) {
  obj_n.raw = param_e_1.tokenRaw;
  }
  return param_e_1.finishNode(obj_n, var_t_1);
  }
  function Mt(param_e_1, param_t) {
  const {
  tokenStart: var_n
  }
  = param_e_1;
  de(param_e_1);
  let var_r = zt(param_e_1, param_t);
  if (param_e_1.getToken() === 21) {
  return jt(param_e_1, param_t, var_r, var_n);
  }
  while (var_J(param_e_1, param_t, 67108877)) {
  de(param_e_1);
  var_r = Vt(param_e_1, param_t, var_r, var_n);
  }
  return var_r;
  }
  function Vt(param_e_1, param_t, param_n, param_r) {
  const var_o_1 = zt(param_e_1, param_t);
  return param_e_1.finishNode({
  type: "JSXMemberExpression",
  object: param_n,
  property: var_o_1
  }
  , param_r);
  }
  function Ht(param_e_1, param_t, param_n) {
  const {
  tokenStart: var_r
  }
  = param_e_1;
  if (param_e_1.getToken() === 2162700) {
  return function (param_e_2, param_t_1, param_n_1) {
  const var_r_1 = param_e_2.tokenStart;
  var_q(param_e_2, param_t_1);
  var_Q(param_e_2, param_t_1, 14);
  const var_o_2 = Me(param_e_2, param_t_1, param_n_1, 1, 0, param_e_2.tokenStart);
  var_Q(param_e_2, param_t_1, 1074790415);
  return param_e_2.finishNode({
  type: "JSXSpreadAttribute",
  argument: var_o_2
  }
  , var_r_1);
  }
  (param_e_1, param_t, param_n);
  }
  de(param_e_1);
  let var_o_1 = null;
  let var_i_1 = zt(param_e_1, param_t);
  if (param_e_1.getToken() === 21) {
  var_i_1 = jt(param_e_1, param_t, var_i_1, var_r);
  }
  if (param_e_1.getToken() === 1077936155) {
  switch (le(param_e_1, param_t)) {
  case 134283267:
  var_o_1 = lt(param_e_1, param_t);
  break;
  case 8456256:
  var_o_1 = Lt(param_e_1, param_t, param_n, 0, param_e_1.tokenStart);
  break;
  case 2162700:
  var_o_1 = Ft(param_e_1, param_t, param_n, 0, 1);
  break;
  default:
  param_e_1.report(156);
  }
  }
  return param_e_1.finishNode({
  type: "JSXAttribute",
  value: var_o_1,
  name: var_i_1
  }
  , var_r);
  }
  function jt(param_e_1, param_t, param_n, param_r) {
  var_Q(param_e_1, param_t, 21);
  const var_o_1 = zt(param_e_1, param_t);
  return param_e_1.finishNode({
  type: "JSXNamespacedName",
  namespace: param_n,
  name: var_o_1
  }
  , param_r);
  }
  function Ft(param_e_1, param_t, param_n, param_r, param_o) {
  const {
  tokenStart: var_i_1
  }
  = param_e_1;
  var_q(param_e_1, param_t | 32);
  const {
  tokenStart: var_a_1
  }
  = param_e_1;
  if (param_e_1.getToken() === 14) {
  return function (param_e_2, param_t_1, param_n_1, param_r_1) {
  var_Q(param_e_2, param_t_1, 14);
  const var_o_1 = Me(param_e_2, param_t_1, param_n_1, 1, 0, param_e_2.tokenStart);
  var_Q(param_e_2, param_t_1, 1074790415);
  return param_e_2.finishNode({
  type: "JSXSpreadChild",
  expression: var_o_1
  }
  , param_r_1);
  }
  (param_e_1, param_t, param_n, var_i_1);
  }
  let var_s;
  if (param_e_1.getToken() === 1074790415) {
  if (param_o) {
  param_e_1.report(159);
  }
  var_s = function (param_e_2, param_t_1) {
  return param_e_2.finishNode({
  type: "JSXEmptyExpression"
  }
  , param_t_1, param_e_2.tokenStart);
  }
  (param_e_1, {
  index: param_e_1.startIndex,
  line: param_e_1.startLine,
  column: param_e_1.startColumn
  }
  );
  }
  else {
  var_s = Me(param_e_1, param_t, param_n, 1, 0, var_a_1);
  }
  if (param_e_1.getToken() !== 1074790415) {
  param_e_1.report(25, list_x[15]);
  }
  if (param_r) {
  ue(param_e_1);
  }
  else {
  var_q(param_e_1, param_t);
  }
  return param_e_1.finishNode({
  type: "JSXExpressionContainer",
  expression: var_s
  }
  , var_i_1);
  }
  function zt(param_e_1, param_t) {
  const var_n = param_e_1.tokenStart;
  if (!(param_e_1.getToken() & 143360)) {
  param_e_1.report(30, list_x[param_e_1.getToken() & 255]);
  }
  const {
  tokenValue: var_r
  }
  = param_e_1;
  var_q(param_e_1, param_t | 1048576);
  return param_e_1.finishNode({
  type: "JSXIdentifier",
  name: var_r
  }
  , var_n);
  }
  const {
  version: Gt
  }
  = {
  version: "7.3.3"
  };
  param_e.isParseError = param_e_1 => param_e_1 instanceof var_S;
  param_e.parse = function (param_e_1, param_t) {
  return me(param_e_1, param_t);
  };
  param_e.parseModule = function (param_e_1, param_t) {
  return me(param_e_1, var_i(var_i({
  }
  , param_t), {
  }
  , {
  sourceType: "module"
  }
  ));
  };
  param_e.parseScript = function (param_e_1, param_t) {
  return me(param_e_1, var_i(var_i({
  }
  , param_t), {
  }
  , {
  sourceType: "script"
  }
  ));
  };
  param_e.version = Gt;
  }
  )(exportsObj);
  },
  38: function (moduleObj, exportsObj, requireFn) {
  "use strict";
  function var_r() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var var_e;
  var var_t;
  var var_n = typeof Symbol == "function" ? Symbol : {
  };
  var var_i_1 = var_n.iterator || "@@iterator";
  var var_a_1 = var_n.toStringTag || "@@toStringTag";
  function var_s(param_n, param_r, param_i, param_a) {
  var var_s_1 = param_r && param_r.prototype instanceof var_l ?
  param_r : var_l;
  var var_u_1 = Object.create(var_s_1.prototype);
  var_o(var_u_1, "_invoke", function (param_n_1, param_r_1, param_o) {
  var var_i_2;
  var var_a_2;
  var var_s_2;
  var num_l = 0;
  var var_u_2 = param_o || [];
  var flag_d = false;
  var obj_f = {
  p: 0,
  n: 0,
  v: var_e,
  a: var_p_1,
  f: var_p_1.bind(var_e, 4),
  d: function (param_t, param_n_2) {
  var_i_2 = param_t;
  var_a_2 = 0;
  var_s_2 = var_e;
  obj_f.n = param_n_2;
  return obj_c;
  }
  };
  function var_p_1(param_n_2, param_r_2) {
  var_a_2 = param_n_2;
  var_s_2 = param_r_2;
  var_t = 0;
  for (;
  !flag_d && num_l && !var_o_1 && var_t < var_u_2.length;
  var_t++) {
  var var_o_1;
  var var_i_3 = var_u_2[var_t];
  var var_p_2 = obj_f.p;
  var var_h_1 = var_i_3[2];
  if (param_n_2 > 3) {
  if (var_o_1 = var_h_1 === param_r_2) {
  var_s_2 = var_i_3[(var_a_2 = var_i_3[4]) ? 5 : (var_a_2 = 3, 3)];
  var_i_3[4] = var_i_3[5] = var_e;
  }
  }
  else if (var_i_3[0] <= var_p_2) {
  if (var_o_1 = param_n_2 < 2 && var_p_2 < var_i_3[1]) {
  var_a_2 = 0;
  obj_f.v = param_r_2;
  obj_f.n = var_i_3[1];
  }
  else if (var_p_2 < var_h_1 && (var_o_1 = param_n_2 < 3 || var_i_3[0] > param_r_2 ||
  param_r_2 > var_h_1)) {
  var_i_3[4] = param_n_2;
  var_i_3[5] = param_r_2;
  obj_f.n = var_h_1;
  var_a_2 = 0;
  }
  }
  }
  if (var_o_1 || param_n_2 > 1) {
  return obj_c;
  }
  flag_d = true;
  throw param_r_2;
  }
  return function (param_o_1, param_u, param_h) {
  if (num_l > 1) {
  throw TypeError("Generator is already running");
  }
  if (flag_d && param_u === 1) {
  var_p_1(param_u, param_h);
  }
  var_a_2 = param_u;
  var_s_2 = param_h;
  while ((var_t = var_a_2 < 2 ? var_e : var_s_2) || !flag_d) {
  if (!var_i_2) {
  if (var_a_2) {
  if (var_a_2 < 3) {
  if (var_a_2 > 1) {
  obj_f.n = -1;
  }
  var_p_1(var_a_2, var_s_2);
  }
  else {
  obj_f.n = var_s_2;
  }
  }
  else {
  obj_f.v = var_s_2;
  }
  }
  try {
  num_l = 2;
  if (var_i_2) {
  if (!var_a_2) {
  param_o_1 = "next";
  }
  if (var_t = var_i_2[param_o_1]) {
  if (!(var_t = var_t.call(var_i_2, var_s_2))) {
  throw TypeError("iterator result is not an object");
  }
  if (!var_t.done) {
  return var_t;
  }
  var_s_2 = var_t.value;
  if (var_a_2 < 2) {
  var_a_2 = 0;
  }
  }
  else {
  if (var_a_2 === 1 && (var_t = var_i_2.return)) {
  var_t.call(var_i_2);
  }
  if (var_a_2 < 2) {
  var_s_2 = TypeError("The iterator does not provide a '" + param_o_1 + "' method");
  var_a_2 = 1;
  }
  }
  var_i_2 = var_e;
  }
  else if ((var_t = (flag_d = obj_f.n < 0) ? var_s_2 : param_n_1.call(param_r_1,
  obj_f)) !== obj_c) {
  break;
  }
  }
  catch (var_t_1) {
  var_i_2 = var_e;
  var_a_2 = 1;
  var_s_2 = var_t_1;
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
  (param_n, param_i, param_a), true);
  return var_u_1;
  }
  var obj_c = {
  };
  function var_l() {
  }
  function var_u() {
  }
  function var_d() {
  }
  var_t = Object.getPrototypeOf;
  var var_f = [][var_i_1] ? var_t(var_t([][var_i_1]())) : (var_o(var_t = {
  }
  , var_i_1, function () {
  return this;
  }
  ), var_t);
  var var_p = var_d.prototype = var_l.prototype = Object.create(var_f);
  function var_h(param_e) {
  if (Object.setPrototypeOf) {
  Object.setPrototypeOf(param_e, var_d);
  }
  else {
  param_e.__proto__ = var_d;
  var_o(param_e, var_a_1, "GeneratorFunction");
  }
  param_e.prototype = Object.create(var_p);
  return param_e;
  }
  var_u.prototype = var_d;
  var_o(var_p, "constructor", var_d);
  var_o(var_d, "constructor", var_u);
  var_u.displayName = "GeneratorFunction";
  var_o(var_d, var_a_1, "GeneratorFunction");
  var_o(var_p);
  var_o(var_p, var_a_1, "Generator");
  var_o(var_p, var_i_1, function () {
  return this;
  }
  );
  var_o(var_p, "toString", function () {
  return "[object Generator]";
  }
  );
  return (var_r = function () {
  return {
  w: var_s,
  m: var_h
  };
  }
  )();
  }
  function var_o(param_e, param_t, param_n, param_r) {
  var var_i_1 = Object.defineProperty;
  try {
  var_i_1({
  }
  , "", {
  }
  );
  }
  catch (var_e) {
  var_i_1 = 0;
  }
  (var_o = function (param_e_1, param_t_1, param_n_1, param_r_1) {
  function var_a_1(param_t_2, param_n_2) {
  var_o(param_e_1, param_t_2, function (param_e_2) {
  return this._invoke(param_t_2, param_n_2, param_e_2);
  }
  );
  }
  if (param_t_1) {
  if (var_i_1) {
  var_i_1(param_e_1, param_t_1, {
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
  var_a_1("next", 0);
  var_a_1("throw", 1);
  var_a_1("return", 2);
  }
  }
  )(param_e, param_t, param_n, param_r);
  }
  requireFn.d(exportsObj, "a", function () {
  return var_a;
  }
  );
  function var_i(param_e, param_t, param_n, param_r) {
  return new (param_n ||= Promise)(function (param_o, param_i) {
  function var_a_1(param_e_1) {
  try {
  var_c(param_r.next(param_e_1));
  }
  catch (var_e) {
  param_i(var_e);
  }
  }
  function var_s(param_e_1) {
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
  )).then(var_a_1, var_s);
  }
  }
  var_c((param_r = param_r.apply(param_e, param_t || [])).next());
  }
  );
  }
  function var_a(param_e) {
  return var_i(this, undefined, undefined, var_r().m(function var_t() {
  var var_n;
  return var_r().w(function (param_t) {
  while (true) {
  switch (param_t.p = param_t.n) {
  case 0:
  param_t.p = 0;
  param_t.n = 1;
  return chrome.runtime.sendMessage(param_e);
  case 1:
  param_t.n = 3;
  break;
  case 2:
  param_t.p = 2;
  var_n = param_t.v;
  console.log("Caught", var_n);
  case 3:
  return param_t.a(2);
  }
  }
  }
  , var_t, null, [[0, 2]]);
  }
  ));
  }
  },
  39: function (moduleObj, exportsObj, requireFn) {
  moduleObj.exports = function () {
  "use strict";
  /*!
       * mustache.js - Logic-less {{mustache}} templates with JavaScript
       * http://github.com/janl/mustache.js
       */
  var var_e = Object.prototype.toString;
  var var_t = Array.isArray || function (param_t) {
  return var_e.call(param_t) === "[object Array]";
  };
  function var_n(param_e) {
  return typeof param_e == "function";
  }
  function var_r(param_e) {
  return param_e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
  }
  function var_o(param_e, param_t) {
  return param_e != null && typeof param_e == "object" && param_t in param_e;
  }
  var var_i = RegExp.prototype.test;
  var regex_a = /\S/;
  function var_s(param_e) {
  return !function (param_e_1, param_t) {
  return var_i.call(param_e_1, param_t);
  }
  (regex_a, param_e);
  }
  var obj_c = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "\"": "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
  "`": "&#x60;",
  "=": "&#x3D;"
  };
  var regex_l = /\s*/;
  var regex_u = /\s+/;
  var regex_d = /\s*=/;
  var regex_f = /\s*\}/;
  var regex_p = /#|\^|\/|>|\{|&|=|!/;
  function var_h(param_e) {
  this.string = param_e;
  this.tail = param_e;
  this.pos = 0;
  }
  function var_g(param_e, param_t) {
  this.view = param_e;
  this.cache = {
  ".": this.view
  };
  this.parent = param_t;
  }
  function var_m() {
  this.cache = {
  };
  }
  var_h.prototype.eos = function () {
  return this.tail === "";
  };
  var_h.prototype.scan = function (param_e) {
  var var_t_1 = this.tail.match(param_e);
  if (!var_t_1 || var_t_1.index !== 0) {
  return "";
  }
  var var_n_1 = var_t_1[0];
  this.tail = this.tail.substring(var_n_1.length);
  this.pos += var_n_1.length;
  return var_n_1;
  };
  var_h.prototype.scanUntil = function (param_e) {
  var var_t_1;
  var var_n_1 = this.tail.search(param_e);
  switch (var_n_1) {
  case -1:
  var_t_1 = this.tail;
  this.tail = "";
  break;
  case 0:
  var_t_1 = "";
  break;
  default:
  var_t_1 = this.tail.substring(0, var_n_1);
  this.tail = this.tail.substring(var_n_1);
  }
  this.pos += var_t_1.length;
  return var_t_1;
  };
  var_g.prototype.push = function (param_e) {
  return new var_g(param_e, this);
  };
  var_g.prototype.lookup = function (param_e) {
  var var_t_1;
  var var_r_1;
  var var_i_1;
  var var_a = this.cache;
  if (var_a.hasOwnProperty(param_e)) {
  var_t_1 = var_a[param_e];
  }
  else {
  var var_s_1;
  var var_c;
  var var_l;
  for (var var_u = this, flag_d = false;
  var_u;
  ) {
  if (param_e.indexOf(".") > 0) {
  var_s_1 = var_u.view;
  var_c = param_e.split(".");
  var_l = 0;
  while (var_s_1 != null && var_l < var_c.length) {
  if (var_l === var_c.length - 1) {
  flag_d = var_o(var_s_1, var_c[var_l]) || (var_r_1 = var_s_1, var_i_1 = var_c[var_l],
  var_r_1 != null && typeof var_r_1 != "object" && var_r_1.hasOwnProperty &&
  var_r_1.hasOwnProperty(var_i_1));
  }
  var_s_1 = var_s_1[var_c[var_l++]];
  }
  }
  else {
  var_s_1 = var_u.view[param_e];
  flag_d = var_o(var_u.view, param_e);
  }
  if (flag_d) {
  var_t_1 = var_s_1;
  break;
  }
  var_u = var_u.parent;
  }
  var_a[param_e] = var_t_1;
  }
  if (var_n(var_t_1)) {
  var_t_1 = var_t_1.call(this.view);
  }
  return var_t_1;
  };
  var_m.prototype.clearCache = function () {
  this.cache = {
  };
  };
  var_m.prototype.parse = function (param_e, param_n) {
  var var_o_1 = this.cache;
  var var_i_1 = param_e + ":" + (param_n || obj_v.tags).join(":");
  var var_a = var_o_1[var_i_1];
  if (var_a == null) {
  var_a = var_o_1[var_i_1] = function (param_e_1, param_n_1) {
  if (!param_e_1) {
  return [];
  }
  var var_o_2;
  var var_i_2;
  var var_a_1;
  var flag_c = false;
  var list_g = [];
  var list_m = [];
  var list_y = [];
  var flag_k = false;
  var flag_b = false;
  var str__ = "";
  var num_T = 0;
  function var_S() {
  if (flag_k && !flag_b) {
  while (list_y.length) {
  delete list_m[list_y.pop()];
  }
  }
  else {
  list_y = [];
  }
  flag_k = false;
  flag_b = false;
  }
  function var_x(param_e_2) {
  if (typeof param_e_2 == "string") {
  param_e_2 = param_e_2.split(regex_u, 2);
  }
  if (!var_t(param_e_2) || param_e_2.length !== 2) {
  throw new Error("Invalid tags: " + param_e_2);
  }
  var_o_2 = new RegExp(var_r(param_e_2[0]) + "\\s*");
  var_i_2 = new RegExp("\\s*" + var_r(param_e_2[1]));
  var_a_1 = new RegExp("\\s*" + var_r("}" + param_e_2[1]));
  }
  var_x(param_n_1 || obj_v.tags);
  var var_w;
  var var_E;
  var var_A;
  var var_C;
  var var_O;
  var var_I;
  for (var var_N = new var_h(param_e_1);
  !var_N.eos();
  ) {
  var_w = var_N.pos;
  if (var_A = var_N.scanUntil(var_o_2)) {
  for (var num_D = 0, var_R = var_A.length;
  num_D < var_R;
  ++num_D) {
  if (var_s(var_C = var_A.charAt(num_D))) {
  list_y.push(list_m.length);
  str__ += var_C;
  }
  else {
  flag_b = true;
  flag_c = true;
  str__ += " ";
  }
  list_m.push(["text", var_C, var_w, var_w + 1]);
  var_w += 1;
  if (var_C === "\n") {
  var_S();
  str__ = "";
  num_T = 0;
  flag_c = false;
  }
  }
  }
  if (!var_N.scan(var_o_2)) {
  break;
  }
  flag_k = true;
  var_E = var_N.scan(regex_p) || "name";
  var_N.scan(regex_l);
  if (var_E === "=") {
  var_A = var_N.scanUntil(regex_d);
  var_N.scan(regex_d);
  var_N.scanUntil(var_i_2);
  }
  else if (var_E === "{") {
  var_A = var_N.scanUntil(var_a_1);
  var_N.scan(regex_f);
  var_N.scanUntil(var_i_2);
  var_E = "&";
  }
  else {
  var_A = var_N.scanUntil(var_i_2);
  }
  if (!var_N.scan(var_i_2)) {
  throw new Error("Unclosed tag at " + var_N.pos);
  }
  var_O = var_E == ">" ? [var_E, var_A, var_w, var_N.pos, str__, num_T, flag_c] :
  [var_E, var_A, var_w, var_N.pos];
  num_T++;
  list_m.push(var_O);
  if (var_E === "#" || var_E === "^") {
  list_g.push(var_O);
  }
  else if (var_E === "/") {
  if (!(var_I = list_g.pop())) {
  throw new Error("Unopened section \"" + var_A + "\" at " + var_w);
  }
  if (var_I[1] !== var_A) {
  throw new Error("Unclosed section \"" + var_I[1] + "\" at " + var_w);
  }
  }
  else if (var_E === "name" || var_E === "{" || var_E === "&") {
  flag_b = true;
  }
  else if (var_E === "=") {
  var_x(var_A);
  }
  }
  var_S();
  if (var_I = list_g.pop()) {
  throw new Error("Unclosed section \"" + var_I[1] + "\" at " + var_N.pos);
  }
  return function (param_e_2) {
  var var_t_1;
  var list_n = [];
  var var_r_1 = list_n;
  var list_o = [];
  for (var num_i = 0, var_a_2 = param_e_2.length;
  num_i < var_a_2;
  ++num_i) {
  switch ((var_t_1 = param_e_2[num_i])[0]) {
  case "#":
  case "^":
  var_r_1.push(var_t_1);
  list_o.push(var_t_1);
  var_r_1 = var_t_1[4] = [];
  break;
  case "/":
  list_o.pop()[5] = var_t_1[2];
  var_r_1 = list_o.length > 0 ? list_o[list_o.length - 1][4] :
  list_n;
  break;
  default:
  var_r_1.push(var_t_1);
  }
  }
  return list_n;
  }
  (function (param_e_2) {
  var var_t_1;
  var var_n_1;
  var list_r = [];
  for (var num_o = 0, var_i_3 = param_e_2.length;
  num_o < var_i_3;
  ++num_o) {
  if (var_t_1 = param_e_2[num_o]) {
  if (var_t_1[0] === "text" && var_n_1 && var_n_1[0] === "text") {
  var_n_1[1] += var_t_1[1];
  var_n_1[3] = var_t_1[3];
  }
  else {
  list_r.push(var_t_1);
  var_n_1 = var_t_1;
  }
  }
  }
  return list_r;
  }
  (list_m));
  }
  (param_e, param_n);
  }
  return var_a;
  };
  var_m.prototype.render = function (param_e, param_t, param_n, param_r) {
  var var_o_1 = this.parse(param_e, param_r);
  var var_i_1 = param_t instanceof var_g ? param_t : new var_g(param_t, undefined);
  return this.renderTokens(var_o_1, var_i_1, param_n, param_e, param_r);
  };
  var_m.prototype.renderTokens = function (param_e, param_t, param_n, param_r, param_o) {
  var var_i_1;
  var var_a;
  var var_s_1;
  var str_c = "";
  for (var num_l = 0, var_u = param_e.length;
  num_l < var_u;
  ++num_l) {
  var_s_1 = undefined;
  if ((var_a = (var_i_1 = param_e[num_l])[0]) === "#") {
  var_s_1 = this.renderSection(var_i_1, param_t, param_n, param_r);
  }
  else if (var_a === "^") {
  var_s_1 = this.renderInverted(var_i_1, param_t, param_n, param_r);
  }
  else if (var_a === ">") {
  var_s_1 = this.renderPartial(var_i_1, param_t, param_n, param_o);
  }
  else if (var_a === "&") {
  var_s_1 = this.unescapedValue(var_i_1, param_t);
  }
  else if (var_a === "name") {
  var_s_1 = this.escapedValue(var_i_1, param_t);
  }
  else if (var_a === "text") {
  var_s_1 = this.rawValue(var_i_1);
  }
  if (var_s_1 !== undefined) {
  str_c += var_s_1;
  }
  }
  return str_c;
  };
  var_m.prototype.renderSection = function (param_e, param_r, param_o, param_i) {
  var var_a = this;
  var str_s = "";
  var var_c = param_r.lookup(param_e[1]);
  if (var_c) {
  if (var_t(var_c)) {
  for (var num_l = 0, var_u = var_c.length;
  num_l < var_u;
  ++num_l) {
  str_s += this.renderTokens(param_e[4], param_r.push(var_c[num_l]), param_o, param_i);
  }
  }
  else if (typeof var_c == "object" || typeof var_c == "string" ||
  typeof var_c == "number") {
  str_s += this.renderTokens(param_e[4], param_r.push(var_c), param_o, param_i);
  }
  else if (var_n(var_c)) {
  if (typeof param_i != "string") {
  throw new Error("Cannot use higher-order sections without the original template");
  }
  if ((var_c = var_c.call(param_r.view, param_i.slice(param_e[3], param_e[5]), function (
  param_e_1) {
  return var_a.render(param_e_1, param_r, param_o);
  }
  )) != null) {
  str_s += var_c;
  }
  }
  else {
  str_s += this.renderTokens(param_e[4], param_r, param_o, param_i);
  }
  return str_s;
  }
  };
  var_m.prototype.renderInverted = function (param_e, param_n, param_r, param_o) {
  var var_i_1 = param_n.lookup(param_e[1]);
  if (!var_i_1 || var_t(var_i_1) && var_i_1.length === 0) {
  return this.renderTokens(param_e[4], param_n, param_r, param_o);
  }
  };
  var_m.prototype.indentPartial = function (param_e, param_t, param_n) {
  var var_r_1 = param_t.replace(/[^ \t]/g, "");
  for (var var_o_1 = param_e.split("\n"), num_i = 0;
  num_i < var_o_1.length;
  num_i++) {
  if (var_o_1[num_i].length && (num_i > 0 || !param_n)) {
  var_o_1[num_i] = var_r_1 + var_o_1[num_i];
  }
  }
  return var_o_1.join("\n");
  };
  var_m.prototype.renderPartial = function (param_e, param_t, param_r, param_o) {
  if (param_r) {
  var var_i_1 = var_n(param_r) ? param_r(param_e[1]) : param_r[param_e[1]];
  if (var_i_1 != null) {
  var var_a = param_e[6];
  var var_s_1 = param_e[5];
  var var_c = param_e[4];
  var var_l = var_i_1;
  if (var_s_1 == 0 && var_c) {
  var_l = this.indentPartial(var_i_1, var_c, var_a);
  }
  return this.renderTokens(this.parse(var_l, param_o), param_t, param_r, var_l);
  }
  }
  };
  var_m.prototype.unescapedValue = function (param_e, param_t) {
  var var_n_1 = param_t.lookup(param_e[1]);
  if (var_n_1 != null) {
  return var_n_1;
  }
  };
  var_m.prototype.escapedValue = function (param_e, param_t) {
  var var_n_1 = param_t.lookup(param_e[1]);
  if (var_n_1 != null) {
  return obj_v.escape(var_n_1);
  }
  };
  var_m.prototype.rawValue = function (param_e) {
  return param_e[1];
  };
  var obj_v = {
  name: "mustache.js",
  version: "3.2.1",
  tags: ["{{", "}}"],
  clearCache: undefined,
  escape: undefined,
  parse: undefined,
  render: undefined,
  to_html: undefined,
  Scanner: undefined,
  Context: undefined,
  Writer: undefined
  };
  var var_y = new var_m();
  obj_v.clearCache = function () {
  return var_y.clearCache();
  };
  obj_v.parse = function (param_e, param_t) {
  return var_y.parse(param_e, param_t);
  };
  obj_v.render = function (param_e, param_n, param_r, param_o) {
  if (typeof param_e != "string") {
  throw new TypeError("Invalid template! Template should be a \"string\" but \"" + (
  var_t(var_i_1 = param_e) ? "array" : typeof var_i_1) + "\" was given as the first argument for mustache#render(template, view, partials)");
  }
  var var_i_1;
  return var_y.render(param_e, param_n, param_r, param_o);
  };
  obj_v.to_html = function (param_e, param_t, param_r, param_o) {
  var var_i_1 = obj_v.render(param_e, param_t, param_r);
  if (!var_n(param_o)) {
  return var_i_1;
  }
  param_o(var_i_1);
  };
  obj_v.escape = function (param_e) {
  return String(param_e).replace(/[&<>"'`=\/]/g, function (param_e_1) {
  return obj_c[param_e_1];
  }
  );
  };
  obj_v.Scanner = var_h;
  obj_v.Context = var_g;
  obj_v.Writer = var_m;
  return obj_v;
  }
  ();
  },
  40: function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var var_o;
  var var_i;
  var var_a;
  var var_s;
  var var_c;
  var var_l;
  var var_u;
  var_u = requireFn(4);
  var_o = (var_r = var_u).lib;
  var_i = var_o.WordArray;
  var_a = var_o.Hasher;
  var_s = var_r.algo;
  var_c = [];
  var_l = var_s.SHA1 = var_a.extend({
  _doReset: function () {
  this._hash = new var_i.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
  }
  ,
  _doProcessBlock: function (param_e, param_t) {
  var var_n = this._hash.words;
  var var_r_1 = var_n[0];
  var var_o_1 = var_n[1];
  var var_i_1 = var_n[2];
  var var_a_1 = var_n[3];
  var var_s_1 = var_n[4];
  for (var num_l = 0;
  num_l < 80;
  num_l++) {
  if (num_l < 16) {
  var_c[num_l] = param_e[param_t + num_l] | 0;
  }
  else {
  var var_u_1 = var_c[num_l - 3] ^ var_c[num_l - 8] ^ var_c[num_l - 14] ^ var_c[num_l - 16];
  var_c[num_l] = var_u_1 << 1 | var_u_1 >>> 31;
  }
  var var_d = (var_r_1 << 5 | var_r_1 >>> 27) + var_s_1 + var_c[num_l];
  var_d += num_l < 20 ? 1518500249 + (var_o_1 & var_i_1 | ~var_o_1 & var_a_1) :
  num_l < 40 ? 1859775393 + (var_o_1 ^ var_i_1 ^ var_a_1) : num_l < 60 ?
  (var_o_1 & var_i_1 | var_o_1 & var_a_1 | var_i_1 & var_a_1) - 1894007588 :
  (var_o_1 ^ var_i_1 ^ var_a_1) - 899497514;
  var_s_1 = var_a_1;
  var_a_1 = var_i_1;
  var_i_1 = var_o_1 << 30 | var_o_1 >>> 2;
  var_o_1 = var_r_1;
  var_r_1 = var_d;
  }
  var_n[0] = var_n[0] + var_r_1 | 0;
  var_n[1] = var_n[1] + var_o_1 | 0;
  var_n[2] = var_n[2] + var_i_1 | 0;
  var_n[3] = var_n[3] + var_a_1 | 0;
  var_n[4] = var_n[4] + var_s_1 | 0;
  }
  ,
  _doFinalize: function () {
  var var_e = this._data;
  var var_t = var_e.words;
  var var_n = this._nDataBytes * 8;
  var var_r_1 = var_e.sigBytes * 8;
  var_t[var_r_1 >>> 5] |= 128 << 24 - var_r_1 % 32;
  var_t[14 + (var_r_1 + 64 >>> 9 << 4)] = Math.floor(var_n / 4294967296);
  var_t[15 + (var_r_1 + 64 >>> 9 << 4)] = var_n;
  var_e.sigBytes = var_t.length * 4;
  this._process();
  return this._hash;
  }
  ,
  clone: function () {
  var var_e = var_a.clone.call(this);
  var_e._hash = this._hash.clone();
  return var_e;
  }
  }
  );
  var_r.SHA1 = var_a._createHelper(var_l);
  var_r.HmacSHA1 = var_a._createHmacHelper(var_l);
  moduleObj.exports = var_u.SHA1;
  },
  41: function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var_r = requireFn(4);
  requireFn(26);
  (function () {
  var var_e = var_r;
  var var_t = var_e.lib.Hasher;
  var var_n = var_e.x64;
  var var_o = var_n.Word;
  var var_i = var_n.WordArray;
  var var_a = var_e.algo;
  function var_s() {
  return var_o.create.apply(var_o, arguments);
  }
  var list_c = [var_s(1116352408, 3609767458), var_s(1899447441, 602891725), var_s(
  3049323471, 3964484399), var_s(3921009573, 2173295548), var_s(961987163, 4081628472),
  var_s(1508970993, 3053834265), var_s(2453635748, 2937671579), var_s(2870763221,
  3664609560), var_s(3624381080, 2734883394), var_s(310598401, 1164996542), var_s(
  607225278, 1323610764), var_s(1426881987, 3590304994), var_s(1925078388, 4068182383),
  var_s(2162078206, 991336113), var_s(2614888103, 633803317), var_s(3248222580, 3479774868),
  var_s(3835390401, 2666613458), var_s(4022224774, 944711139), var_s(264347078, 2341262773),
  var_s(604807628, 2007800933), var_s(770255983, 1495990901), var_s(1249150122, 1856431235),
  var_s(1555081692, 3175218132), var_s(1996064986, 2198950837), var_s(2554220882,
  3999719339), var_s(2821834349, 766784016), var_s(2952996808, 2566594879), var_s(
  3210313671, 3203337956), var_s(3336571891, 1034457026), var_s(3584528711, 2466948901),
  var_s(113926993, 3758326383), var_s(338241895, 168717936), var_s(666307205, 1188179964),
  var_s(773529912, 1546045734), var_s(1294757372, 1522805485), var_s(1396182291,
  2643833823), var_s(1695183700, 2343527390), var_s(1986661051, 1014477480), var_s(
  2177026350, 1206759142), var_s(2456956037, 344077627), var_s(2730485921, 1290863460),
  var_s(2820302411, 3158454273), var_s(3259730800, 3505952657), var_s(3345764771,
  106217008), var_s(3516065817, 3606008344), var_s(3600352804, 1432725776), var_s(
  4094571909, 1467031594), var_s(275423344, 851169720), var_s(430227734, 3100823752),
  var_s(506948616, 1363258195), var_s(659060556, 3750685593), var_s(883997877, 3785050280),
  var_s(958139571, 3318307427), var_s(1322822218, 3812723403), var_s(1537002063,
  2003034995), var_s(1747873779, 3602036899), var_s(1955562222, 1575990012), var_s(
  2024104815, 1125592928), var_s(2227730452, 2716904306), var_s(2361852424, 442776044),
  var_s(2428436474, 593698344), var_s(2756734187, 3733110249), var_s(3204031479,
  2999351573), var_s(3329325298, 3815920427), var_s(3391569614, 3928383900), var_s(
  3515267271, 566280711), var_s(3940187606, 3454069534), var_s(4118630271, 4000239992),
  var_s(116418474, 1914138554), var_s(174292421, 2731055270), var_s(289380356, 3203993006),
  var_s(460393269, 320620315), var_s(685471733, 587496836), var_s(852142971, 1086792851),
  var_s(1017036298, 365543100), var_s(1126000580, 2618297676), var_s(1288033470,
  3409855158), var_s(1501505948, 4234509866), var_s(1607167915, 987167468), var_s(
  1816402316, 1246189591)];
  var list_l = [];
  (function () {
  for (var num_e = 0;
  num_e < 80;
  num_e++) {
  list_l[num_e] = var_s();
  }
  }
  )();
  var var_u = var_a.SHA512 = var_t.extend({
  _doReset: function () {
  this._hash = new var_i.init([new var_o.init(1779033703, 4089235720), new var_o.init(
  3144134277, 2227873595), new var_o.init(1013904242, 4271175723), new var_o.init(
  2773480762, 1595750129), new var_o.init(1359893119, 2917565137), new var_o.init(
  2600822924, 725511199), new var_o.init(528734635, 4215389547), new var_o.init(
  1541459225, 327033209)]);
  }
  ,
  _doProcessBlock: function (param_e, param_t) {
  var var_n_1 = this._hash.words;
  var var_r_1 = var_n_1[0];
  var var_o_1 = var_n_1[1];
  var var_i_1 = var_n_1[2];
  var var_a_1 = var_n_1[3];
  var var_s_1 = var_n_1[4];
  var var_u_1 = var_n_1[5];
  var var_d = var_n_1[6];
  var var_f = var_n_1[7];
  var var_p = var_r_1.high;
  var var_h = var_r_1.low;
  var var_g = var_o_1.high;
  var var_m = var_o_1.low;
  var var_v = var_i_1.high;
  var var_y = var_i_1.low;
  var var_k = var_a_1.high;
  var var_b = var_a_1.low;
  var var__ = var_s_1.high;
  var var_T = var_s_1.low;
  var var_S = var_u_1.high;
  var var_x = var_u_1.low;
  var var_w = var_d.high;
  var var_E = var_d.low;
  var var_A = var_f.high;
  var var_C = var_f.low;
  var var_O = var_p;
  var var_I = var_h;
  var var_N = var_g;
  var var_D = var_m;
  var var_R = var_v;
  var var_L = var_y;
  var var_P = var_k;
  var var_B = var_b;
  var var_U = var__;
  var var_M = var_T;
  var var_V = var_S;
  var var_H = var_x;
  var var_j = var_w;
  var var_F = var_E;
  var var_z = var_A;
  var var_G = var_C;
  for (var num_W = 0;
  num_W < 80;
  num_W++) {
  var var_q;
  var var_Y;
  var var_K = list_l[num_W];
  if (num_W < 16) {
  var_Y = var_K.high = param_e[param_t + num_W * 2] | 0;
  var_q = var_K.low = param_e[param_t + num_W * 2 + 1] | 0;
  }
  else {
  var var_X = list_l[num_W - 15];
  var var_$ = var_X.high;
  var var_J = var_X.low;
  var var_Q = (var_$ >>> 1 | var_J << 31) ^ (var_$ >>> 8 | var_J << 24) ^ var_$ >>> 7;
  var var_Z = (var_J >>> 1 | var_$ << 31) ^ (var_J >>> 8 | var_$ << 24) ^ (var_J >>> 7 | var_$ << 25);
  var ee = list_l[num_W - 2];
  var te = ee.high;
  var ne = ee.low;
  var re = (te >>> 19 | ne << 13) ^ (te << 3 | ne >>> 29) ^ te >>> 6;
  var oe = (ne >>> 19 | te << 13) ^ (ne << 3 | te >>> 29) ^ (ne >>> 6 | te << 26);
  var ie = list_l[num_W - 7];
  var ae = ie.high;
  var se = ie.low;
  var ce = list_l[num_W - 16];
  var le = ce.high;
  var ue = ce.low;
  var_Y = (var_Y = (var_Y = var_Q + ae + ((var_q = var_Z + se) >>> 0 < var_Z >>> 0 ?
  1 : 0)) + re + ((var_q += oe) >>> 0 < oe >>> 0 ? 1 : 0)) + le + ((var_q += ue) >>> 0 < ue >>> 0 ?
  1 : 0);
  var_K.high = var_Y;
  var_K.low = var_q;
  }
  var de;
  var fe = var_U & var_V ^ ~var_U & var_j;
  var pe = var_M & var_H ^ ~var_M & var_F;
  var he = var_O & var_N ^ var_O & var_R ^ var_N & var_R;
  var ge = var_I & var_D ^ var_I & var_L ^ var_D & var_L;
  var me = (var_O >>> 28 | var_I << 4) ^ (var_O << 30 | var_I >>> 2) ^ (var_O << 25 | var_I >>> 7);
  var ve = (var_I >>> 28 | var_O << 4) ^ (var_I << 30 | var_O >>> 2) ^ (var_I << 25 | var_O >>> 7);
  var ye = (var_U >>> 14 | var_M << 18) ^ (var_U >>> 18 | var_M << 14) ^ (var_U << 23 | var_M >>> 9);
  var ke = (var_M >>> 14 | var_U << 18) ^ (var_M >>> 18 | var_U << 14) ^ (var_M << 23 | var_U >>> 9);
  var be = list_c[num_W];
  var _e = be.high;
  var Te = be.low;
  var Se = var_z + ye + ((de = var_G + ke) >>> 0 < var_G >>> 0 ?
  1 : 0);
  var xe = ve + ge;
  var_z = var_j;
  var_G = var_F;
  var_j = var_V;
  var_F = var_H;
  var_V = var_U;
  var_H = var_M;
  var_U = var_P + (Se = (Se = (Se = Se + fe + ((de += pe) >>> 0 < pe >>> 0 ?
  1 : 0)) + _e + ((de += Te) >>> 0 < Te >>> 0 ? 1 : 0)) + var_Y + ((de += var_q) >>> 0 < var_q >>> 0 ?
  1 : 0)) + ((var_M = var_B + de | 0) >>> 0 < var_B >>> 0 ? 1 :
  0) | 0;
  var_P = var_R;
  var_B = var_L;
  var_R = var_N;
  var_L = var_D;
  var_N = var_O;
  var_D = var_I;
  var_O = Se + (me + he + (xe >>> 0 < ve >>> 0 ? 1 : 0)) + ((var_I = de + xe | 0) >>> 0 < de >>> 0 ?
  1 : 0) | 0;
  }
  var_h = var_r_1.low = var_h + var_I;
  var_r_1.high = var_p + var_O + (var_h >>> 0 < var_I >>> 0 ?
  1 : 0);
  var_m = var_o_1.low = var_m + var_D;
  var_o_1.high = var_g + var_N + (var_m >>> 0 < var_D >>> 0 ?
  1 : 0);
  var_y = var_i_1.low = var_y + var_L;
  var_i_1.high = var_v + var_R + (var_y >>> 0 < var_L >>> 0 ?
  1 : 0);
  var_b = var_a_1.low = var_b + var_B;
  var_a_1.high = var_k + var_P + (var_b >>> 0 < var_B >>> 0 ?
  1 : 0);
  var_T = var_s_1.low = var_T + var_M;
  var_s_1.high = var__ + var_U + (var_T >>> 0 < var_M >>> 0 ?
  1 : 0);
  var_x = var_u_1.low = var_x + var_H;
  var_u_1.high = var_S + var_V + (var_x >>> 0 < var_H >>> 0 ?
  1 : 0);
  var_E = var_d.low = var_E + var_F;
  var_d.high = var_w + var_j + (var_E >>> 0 < var_F >>> 0 ? 1 :
  0);
  var_C = var_f.low = var_C + var_G;
  var_f.high = var_A + var_z + (var_C >>> 0 < var_G >>> 0 ? 1 :
  0);
  }
  ,
  _doFinalize: function () {
  var var_e_1 = this._data;
  var var_t_1 = var_e_1.words;
  var var_n_1 = this._nDataBytes * 8;
  var var_r_1 = var_e_1.sigBytes * 8;
  var_t_1[var_r_1 >>> 5] |= 128 << 24 - var_r_1 % 32;
  var_t_1[30 + (var_r_1 + 128 >>> 10 << 5)] = Math.floor(var_n_1 / 4294967296);
  var_t_1[31 + (var_r_1 + 128 >>> 10 << 5)] = var_n_1;
  var_e_1.sigBytes = var_t_1.length * 4;
  this._process();
  return this._hash.toX32();
  }
  ,
  clone: function () {
  var var_e_1 = var_t.clone.call(this);
  var_e_1._hash = this._hash.clone();
  return var_e_1;
  }
  ,
  blockSize: 32
  }
  );
  var_e.SHA512 = var_t._createHelper(var_u);
  var_e.HmacSHA512 = var_t._createHmacHelper(var_u);
  }
  )();
  moduleObj.exports = var_r.SHA512;
  },
  50: function (moduleObj, exportsObj) {
  },
  51: function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var_r = requireFn(4);
  (function () {
  if (typeof ArrayBuffer == "function") {
  var var_e = var_r.lib.WordArray;
  var var_t = var_e.init;
  (var_e.init = function (param_e) {
  if (param_e instanceof ArrayBuffer) {
  param_e = new Uint8Array(param_e);
  }
  if (param_e instanceof Int8Array || typeof Uint8ClampedArray != "undefined" &&
  param_e instanceof Uint8ClampedArray || param_e instanceof Int16Array ||
  param_e instanceof Uint16Array || param_e instanceof Int32Array ||
  param_e instanceof Uint32Array || param_e instanceof Float32Array ||
  param_e instanceof Float64Array) {
  param_e = new Uint8Array(param_e.buffer, param_e.byteOffset, param_e.byteLength);
  }
  if (param_e instanceof Uint8Array) {
  for (var var_n = param_e.byteLength, list_r = [], num_o = 0;
  num_o < var_n;
  num_o++) {
  list_r[num_o >>> 2] |= param_e[num_o] << 24 - num_o % 4 * 8;
  }
  var_t.call(this, list_r, var_n);
  }
  else {
  var_t.apply(this, arguments);
  }
  }
  ).prototype = var_e;
  }
  }
  )();
  moduleObj.exports = var_r.lib.WordArray;
  },
  52: function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var_r = requireFn(4);
  (function () {
  var var_e = var_r;
  var var_t = var_e.lib.WordArray;
  var var_n = var_e.enc;
  function var_o(param_e) {
  return param_e << 8 & -16711936 | param_e >>> 8 & 16711935;
  }
  var_n.Utf16 = var_n.Utf16BE = {
  stringify: function (param_e) {
  var var_t_1 = param_e.words;
  for (var var_n_1 = param_e.sigBytes, list_r = [], num_o = 0;
  num_o < var_n_1;
  num_o += 2) {
  var var_i = var_t_1[num_o >>> 2] >>> 16 - num_o % 4 * 8 & 65535;
  list_r.push(String.fromCharCode(var_i));
  }
  return list_r.join("");
  }
  ,
  parse: function (param_e) {
  for (var var_n_1 = param_e.length, list_r = [], num_o = 0;
  num_o < var_n_1;
  num_o++) {
  list_r[num_o >>> 1] |= param_e.charCodeAt(num_o) << 16 - num_o % 2 * 16;
  }
  return var_t.create(list_r, var_n_1 * 2);
  }
  };
  var_n.Utf16LE = {
  stringify: function (param_e) {
  var var_t_1 = param_e.words;
  for (var var_n_1 = param_e.sigBytes, list_r = [], num_i = 0;
  num_i < var_n_1;
  num_i += 2) {
  var var_a = var_o(var_t_1[num_i >>> 2] >>> 16 - num_i % 4 * 8 & 65535);
  list_r.push(String.fromCharCode(var_a));
  }
  return list_r.join("");
  }
  ,
  parse: function (param_e) {
  for (var var_n_1 = param_e.length, list_r = [], num_i = 0;
  num_i < var_n_1;
  num_i++) {
  list_r[num_i >>> 1] |= var_o(param_e.charCodeAt(num_i) << 16 - num_i % 2 * 16);
  }
  return var_t.create(list_r, var_n_1 * 2);
  }
  };
  }
  )();
  moduleObj.exports = var_r.enc.Utf16;
  },
  53: function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var var_o;
  var var_i;
  var_i = requireFn(4);
  var_o = (var_r = var_i).lib.WordArray;
  var_r.enc.Base64url = {
  stringify: function (param_e, param_t = true) {
  var var_n = param_e.words;
  var var_r_1 = param_e.sigBytes;
  var var_o_1 = param_t ? this._safe_map : this._map;
  param_e.clamp();
  var list_i = [];
  for (var num_a = 0;
  num_a < var_r_1;
  num_a += 3) {
  var var_s = (var_n[num_a >>> 2] >>> 24 - num_a % 4 * 8 & 255) << 16 | (var_n[num_a + 1 >>> 2] >>> 24 - (
  num_a + 1) % 4 * 8 & 255) << 8 | var_n[num_a + 2 >>> 2] >>> 24 - (num_a + 2) % 4 * 8 & 255;
  for (var num_c = 0;
  num_c < 4 && num_a + num_c * 0.75 < var_r_1;
  num_c++) {
  list_i.push(var_o_1.charAt(var_s >>> (3 - num_c) * 6 & 63));
  }
  }
  var var_l = var_o_1.charAt(64);
  if (var_l) {
  while (list_i.length % 4) {
  list_i.push(var_l);
  }
  }
  return list_i.join("");
  }
  ,
  parse: function (param_e, param_t = true) {
  var var_n = param_e.length;
  var var_r_1 = param_t ? this._safe_map : this._map;
  var var_i_1 = this._reverseMap;
  if (!var_i_1) {
  var_i_1 = this._reverseMap = [];
  for (var num_a = 0;
  num_a < var_r_1.length;
  num_a++) {
  var_i_1[var_r_1.charCodeAt(num_a)] = num_a;
  }
  }
  var var_s = var_r_1.charAt(64);
  if (var_s) {
  var var_c = param_e.indexOf(var_s);
  if (var_c !== -1) {
  var_n = var_c;
  }
  }
  return function (param_e_1, param_t_1, param_n) {
  var list_r = [];
  var num_i = 0;
  for (var num_a_1 = 0;
  num_a_1 < param_t_1;
  num_a_1++) {
  if (num_a_1 % 4) {
  var var_s_1 = param_n[param_e_1.charCodeAt(num_a_1 - 1)] << num_a_1 % 4 * 2;
  var var_c_1 = param_n[param_e_1.charCodeAt(num_a_1)] >>> 6 - num_a_1 % 4 * 2;
  var var_l = var_s_1 | var_c_1;
  list_r[num_i >>> 2] |= var_l << 24 - num_i % 4 * 8;
  num_i++;
  }
  }
  return var_o.create(list_r, num_i);
  }
  (param_e, var_n, var_i_1);
  }
  ,
  _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
  };
  moduleObj.exports = var_i.enc.Base64url;
  },
  54: function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var var_o;
  var var_i;
  var var_a;
  var var_s;
  var var_c;
  var_c = requireFn(4);
  requireFn(34);
  var_o = (var_r = var_c).lib.WordArray;
  var_i = var_r.algo;
  var_a = var_i.SHA256;
  var_s = var_i.SHA224 = var_a.extend({
  _doReset: function () {
  this._hash = new var_o.init([3238371032, 914150663, 812702999, 4144912697, 4290775857,
  1750603025, 1694076839, 3204075428]);
  }
  ,
  _doFinalize: function () {
  var var_e = var_a._doFinalize.call(this);
  var_e.sigBytes -= 4;
  return var_e;
  }
  }
  );
  var_r.SHA224 = var_a._createHelper(var_s);
  var_r.HmacSHA224 = var_a._createHmacHelper(var_s);
  moduleObj.exports = var_c.SHA224;
  },
  55: function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var var_o;
  var var_i;
  var var_a;
  var var_s;
  var var_c;
  var var_l;
  var var_u;
  var_u = requireFn(4);
  requireFn(26);
  requireFn(41);
  var_o = (var_r = var_u).x64;
  var_i = var_o.Word;
  var_a = var_o.WordArray;
  var_s = var_r.algo;
  var_c = var_s.SHA512;
  var_l = var_s.SHA384 = var_c.extend({
  _doReset: function () {
  this._hash = new var_a.init([new var_i.init(3418070365, 3238371032), new var_i.init(
  1654270250, 914150663), new var_i.init(2438529370, 812702999), new var_i.init(
  355462360, 4144912697), new var_i.init(1731405415, 4290775857), new var_i.init(
  2394180231, 1750603025), new var_i.init(3675008525, 1694076839), new var_i.init(
  1203062813, 3204075428)]);
  }
  ,
  _doFinalize: function () {
  var var_e = var_c._doFinalize.call(this);
  var_e.sigBytes -= 16;
  return var_e;
  }
  }
  );
  var_r.SHA384 = var_c._createHelper(var_l);
  var_r.HmacSHA384 = var_c._createHmacHelper(var_l);
  moduleObj.exports = var_u.SHA384;
  },
  56: function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var_r = requireFn(4);
  requireFn(26);
  (function (param_e) {
  var var_t = var_r;
  var var_n = var_t.lib;
  var var_o = var_n.WordArray;
  var var_i = var_n.Hasher;
  var var_a = var_t.x64.Word;
  var var_s = var_t.algo;
  var list_c = [];
  var list_l = [];
  var list_u = [];
  (function () {
  var num_e = 1;
  var num_t = 0;
  for (var num_n = 0;
  num_n < 24;
  num_n++) {
  list_c[num_e + num_t * 5] = (num_n + 1) * (num_n + 2) / 2 % 64;
  var var_r_1 = (num_e * 2 + num_t * 3) % 5;
  num_e = num_t % 5;
  num_t = var_r_1;
  }
  for (num_e = 0;
  num_e < 5;
  num_e++) {
  for (num_t = 0;
  num_t < 5;
  num_t++) {
  list_l[num_e + num_t * 5] = num_t + (num_e * 2 + num_t * 3) % 5 * 5;
  }
  }
  var num_o = 1;
  for (var num_i = 0;
  num_i < 24;
  num_i++) {
  var num_s = 0;
  var num_d = 0;
  for (var num_f = 0;
  num_f < 7;
  num_f++) {
  if (num_o & 1) {
  var var_p = (1 << num_f) - 1;
  if (var_p < 32) {
  num_d ^= 1 << var_p;
  }
  else {
  num_s ^= 1 << var_p - 32;
  }
  }
  if (num_o & 128) {
  num_o = num_o << 1 ^ 113;
  }
  else {
  num_o <<= 1;
  }
  }
  list_u[num_i] = var_a.create(num_s, num_d);
  }
  }
  )();
  var list_d = [];
  (function () {
  for (var num_e = 0;
  num_e < 25;
  num_e++) {
  list_d[num_e] = var_a.create();
  }
  }
  )();
  var var_f = var_s.SHA3 = var_i.extend({
  cfg: var_i.cfg.extend({
  outputLength: 512
  }
  ),
  _doReset: function () {
  var var_e = this._state = [];
  for (var num_t = 0;
  num_t < 25;
  num_t++) {
  var_e[num_t] = new var_a.init();
  }
  this.blockSize = (1600 - this.cfg.outputLength * 2) / 32;
  }
  ,
  _doProcessBlock: function (param_e_1, param_t) {
  var var_n_1 = this._state;
  for (var var_r_1 = this.blockSize / 2, num_o = 0;
  num_o < var_r_1;
  num_o++) {
  var var_i_1 = param_e_1[param_t + num_o * 2];
  var var_a_1 = param_e_1[param_t + num_o * 2 + 1];
  var_i_1 = (var_i_1 << 8 | var_i_1 >>> 24) & 16711935 | (var_i_1 << 24 | var_i_1 >>> 8) & -16711936;
  var_a_1 = (var_a_1 << 8 | var_a_1 >>> 24) & 16711935 | (var_a_1 << 24 | var_a_1 >>> 8) & -16711936;
  (var_C = var_n_1[num_o]).high ^= var_a_1;
  var_C.low ^= var_i_1;
  }
  for (var num_s = 0;
  num_s < 24;
  num_s++) {
  for (var num_f = 0;
  num_f < 5;
  num_f++) {
  var num_p = 0;
  var num_h = 0;
  for (var num_g = 0;
  num_g < 5;
  num_g++) {
  num_p ^= (var_C = var_n_1[num_f + num_g * 5]).high;
  num_h ^= var_C.low;
  }
  var var_m = list_d[num_f];
  var_m.high = num_p;
  var_m.low = num_h;
  }
  for (num_f = 0;
  num_f < 5;
  num_f++) {
  var var_v = list_d[(num_f + 4) % 5];
  var var_y = list_d[(num_f + 1) % 5];
  var var_k = var_y.high;
  var var_b = var_y.low;
  num_p = var_v.high ^ (var_k << 1 | var_b >>> 31);
  num_h = var_v.low ^ (var_b << 1 | var_k >>> 31);
  num_g = 0;
  for (;
  num_g < 5;
  num_g++) {
  (var_C = var_n_1[num_f + num_g * 5]).high ^= num_p;
  var_C.low ^= num_h;
  }
  }
  for (var num__ = 1;
  num__ < 25;
  num__++) {
  var var_T = (var_C = var_n_1[num__]).high;
  var var_S = var_C.low;
  var var_x = list_c[num__];
  if (var_x < 32) {
  num_p = var_T << var_x | var_S >>> 32 - var_x;
  num_h = var_S << var_x | var_T >>> 32 - var_x;
  }
  else {
  num_p = var_S << var_x - 32 | var_T >>> 64 - var_x;
  num_h = var_T << var_x - 32 | var_S >>> 64 - var_x;
  }
  var var_w = list_d[list_l[num__]];
  var_w.high = num_p;
  var_w.low = num_h;
  }
  var var_E = list_d[0];
  var var_A = var_n_1[0];
  var_E.high = var_A.high;
  var_E.low = var_A.low;
  num_f = 0;
  for (;
  num_f < 5;
  num_f++) {
  for (num_g = 0;
  num_g < 5;
  num_g++) {
  var var_C = var_n_1[num__ = num_f + num_g * 5];
  var var_O = list_d[num__];
  var var_I = list_d[(num_f + 1) % 5 + num_g * 5];
  var var_N = list_d[(num_f + 2) % 5 + num_g * 5];
  var_C.high = var_O.high ^ ~var_I.high & var_N.high;
  var_C.low = var_O.low ^ ~var_I.low & var_N.low;
  }
  }
  var_C = var_n_1[0];
  var var_D = list_u[num_s];
  var_C.high ^= var_D.high;
  var_C.low ^= var_D.low;
  }
  }
  ,
  _doFinalize: function () {
  var var_t_1 = this._data;
  var var_n_1 = var_t_1.words;
  this._nDataBytes;
  var var_r_1 = var_t_1.sigBytes * 8;
  var var_i_1 = this.blockSize * 32;
  var_n_1[var_r_1 >>> 5] |= 1 << 24 - var_r_1 % 32;
  var_n_1[(param_e.ceil((var_r_1 + 1) / var_i_1) * var_i_1 >>> 5) - 1] |= 128;
  var_t_1.sigBytes = var_n_1.length * 4;
  this._process();
  var var_a_1 = this._state;
  var var_s_1 = this.cfg.outputLength / 8;
  for (var var_c = var_s_1 / 8, list_l_1 = [], num_u = 0;
  num_u < var_c;
  num_u++) {
  var var_d = var_a_1[num_u];
  var var_f_1 = var_d.high;
  var var_p = var_d.low;
  var_f_1 = (var_f_1 << 8 | var_f_1 >>> 24) & 16711935 | (var_f_1 << 24 | var_f_1 >>> 8) & -16711936;
  var_p = (var_p << 8 | var_p >>> 24) & 16711935 | (var_p << 24 | var_p >>> 8) & -16711936;
  list_l_1.push(var_p);
  list_l_1.push(var_f_1);
  }
  return new var_o.init(list_l_1, var_s_1);
  }
  ,
  clone: function () {
  var var_e = var_i.clone.call(this);
  var var_t_1 = var_e._state = this._state.slice(0);
  for (var num_n = 0;
  num_n < 25;
  num_n++) {
  var_t_1[num_n] = var_t_1[num_n].clone();
  }
  return var_e;
  }
  }
  );
  var_t.SHA3 = var_i._createHelper(var_f);
  var_t.HmacSHA3 = var_i._createHmacHelper(var_f);
  }
  )(Math);
  moduleObj.exports = var_r.SHA3;
  },
  57: function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var_r = requireFn(4);
  /** @preserve
    (c) 2012 by Cédric Mesnil. All rights reserved.
    	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
    	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
        - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
    	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    */
  (function (param_e) {
  var var_t = var_r;
  var var_n = var_t.lib;
  var var_o = var_n.WordArray;
  var var_i = var_n.Hasher;
  var var_a = var_t.algo;
  var var_s = var_o.create([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1,
  2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,
  4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]);
  var var_c = var_o.create([5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12,
  6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9,
  11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,
  12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]);
  var var_l = var_o.create([11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9,
  8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9,
  13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8,
  6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]);
  var var_u = var_o.create([8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12,
  6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6,
  6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12,
  5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]);
  var var_d = var_o.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
  var var_f = var_o.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
  var var_p = var_a.RIPEMD160 = var_i.extend({
  _doReset: function () {
  this._hash = var_o.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
  }
  ,
  _doProcessBlock: function (param_e_1, param_t) {
  for (var num_n = 0;
  num_n < 16;
  num_n++) {
  var var_r_1 = param_t + num_n;
  var var_o_1 = param_e_1[var_r_1];
  param_e_1[var_r_1] = (var_o_1 << 8 | var_o_1 >>> 24) & 16711935 | (var_o_1 << 24 | var_o_1 >>> 8) & -16711936;
  }
  var var_i_1;
  var var_a_1;
  var var_p_1;
  var var_b;
  var var__;
  var var_T;
  var var_S;
  var var_x;
  var var_w;
  var var_E;
  var var_A;
  var var_C = this._hash.words;
  var var_O = var_d.words;
  var var_I = var_f.words;
  var var_N = var_s.words;
  var var_D = var_c.words;
  var var_R = var_l.words;
  var var_L = var_u.words;
  var_T = var_i_1 = var_C[0];
  var_S = var_a_1 = var_C[1];
  var_x = var_p_1 = var_C[2];
  var_w = var_b = var_C[3];
  var_E = var__ = var_C[4];
  num_n = 0;
  for (;
  num_n < 80;
  num_n += 1) {
  var_A = var_i_1 + param_e_1[param_t + var_N[num_n]] | 0;
  var_A += num_n < 16 ? var_h(var_a_1, var_p_1, var_b) + var_O[0] :
  num_n < 32 ? var_g(var_a_1, var_p_1, var_b) + var_O[1] : num_n < 48 ?
  var_m(var_a_1, var_p_1, var_b) + var_O[2] : num_n < 64 ? var_v(var_a_1, var_p_1,
  var_b) + var_O[3] : var_y(var_a_1, var_p_1, var_b) + var_O[4];
  var_A = (var_A = var_k(var_A |= 0, var_R[num_n])) + var__ | 0;
  var_i_1 = var__;
  var__ = var_b;
  var_b = var_k(var_p_1, 10);
  var_p_1 = var_a_1;
  var_a_1 = var_A;
  var_A = var_T + param_e_1[param_t + var_D[num_n]] | 0;
  var_A += num_n < 16 ? var_y(var_S, var_x, var_w) + var_I[0] :
  num_n < 32 ? var_v(var_S, var_x, var_w) + var_I[1] : num_n < 48 ?
  var_m(var_S, var_x, var_w) + var_I[2] : num_n < 64 ? var_g(var_S, var_x, var_w) + var_I[3] :
  var_h(var_S, var_x, var_w) + var_I[4];
  var_A = (var_A = var_k(var_A |= 0, var_L[num_n])) + var_E | 0;
  var_T = var_E;
  var_E = var_w;
  var_w = var_k(var_x, 10);
  var_x = var_S;
  var_S = var_A;
  }
  var_A = var_C[1] + var_p_1 + var_w | 0;
  var_C[1] = var_C[2] + var_b + var_E | 0;
  var_C[2] = var_C[3] + var__ + var_T | 0;
  var_C[3] = var_C[4] + var_i_1 + var_S | 0;
  var_C[4] = var_C[0] + var_a_1 + var_x | 0;
  var_C[0] = var_A;
  }
  ,
  _doFinalize: function () {
  var var_e = this._data;
  var var_t_1 = var_e.words;
  var var_n_1 = this._nDataBytes * 8;
  var var_r_1 = var_e.sigBytes * 8;
  var_t_1[var_r_1 >>> 5] |= 128 << 24 - var_r_1 % 32;
  var_t_1[14 + (var_r_1 + 64 >>> 9 << 4)] = (var_n_1 << 8 | var_n_1 >>> 24) & 16711935 | (
  var_n_1 << 24 | var_n_1 >>> 8) & -16711936;
  var_e.sigBytes = (var_t_1.length + 1) * 4;
  this._process();
  var var_o_1 = this._hash;
  var var_i_1 = var_o_1.words;
  for (var num_a = 0;
  num_a < 5;
  num_a++) {
  var var_s_1 = var_i_1[num_a];
  var_i_1[num_a] = (var_s_1 << 8 | var_s_1 >>> 24) & 16711935 | (var_s_1 << 24 | var_s_1 >>> 8) & -16711936;
  }
  return var_o_1;
  }
  ,
  clone: function () {
  var var_e = var_i.clone.call(this);
  var_e._hash = this._hash.clone();
  return var_e;
  }
  }
  );
  function var_h(param_e_1, param_t, param_n) {
  return param_e_1 ^ param_t ^ param_n;
  }
  function var_g(param_e_1, param_t, param_n) {
  return param_e_1 & param_t | ~param_e_1 & param_n;
  }
  function var_m(param_e_1, param_t, param_n) {
  return (param_e_1 | ~param_t) ^ param_n;
  }
  function var_v(param_e_1, param_t, param_n) {
  return param_e_1 & param_n | param_t & ~param_n;
  }
  function var_y(param_e_1, param_t, param_n) {
  return param_e_1 ^ (param_t | ~param_n);
  }
  function var_k(param_e_1, param_t) {
  return param_e_1 << param_t | param_e_1 >>> 32 - param_t;
  }
  var_t.RIPEMD160 = var_i._createHelper(var_p);
  var_t.HmacRIPEMD160 = var_i._createHmacHelper(var_p);
  }
  )(Math);
  moduleObj.exports = var_r.RIPEMD160;
  },
  58: function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var var_o;
  var var_i;
  var var_a;
  var var_s;
  var var_c;
  var var_l;
  var var_u;
  var var_d;
  var_d = requireFn(4);
  requireFn(34);
  requireFn(35);
  var_o = (var_r = var_d).lib;
  var_i = var_o.Base;
  var_a = var_o.WordArray;
  var_s = var_r.algo;
  var_c = var_s.SHA256;
  var_l = var_s.HMAC;
  var_u = var_s.PBKDF2 = var_i.extend({
  cfg: var_i.extend({
  keySize: 4,
  hasher: var_c,
  iterations: 250000
  }
  ),
  init: function (param_e) {
  this.cfg = this.cfg.extend(param_e);
  }
  ,
  compute: function (param_e, param_t) {
  var var_n = this.cfg;
  var var_r_1 = var_l.create(var_n.hasher, param_e);
  var var_o_1 = var_a.create();
  var var_i_1 = var_a.create([1]);
  for (var var_s_1 = var_o_1.words, var_c_1 = var_i_1.words, var_u_1 = var_n.keySize,
  var_d_1 = var_n.iterations;
  var_s_1.length < var_u_1;
  ) {
  var var_f = var_r_1.update(param_t).finalize(var_i_1);
  var_r_1.reset();
  var var_p = var_f.words;
  var var_h = var_p.length;
  var var_g = var_f;
  for (var num_m = 1;
  num_m < var_d_1;
  num_m++) {
  var_g = var_r_1.finalize(var_g);
  var_r_1.reset();
  var var_v = var_g.words;
  for (var num_y = 0;
  num_y < var_h;
  num_y++) {
  var_p[num_y] ^= var_v[num_y];
  }
  }
  var_o_1.concat(var_f);
  var_c_1[0]++;
  }
  var_o_1.sigBytes = var_u_1 * 4;
  return var_o_1;
  }
  }
  );
  var_r.PBKDF2 = function (param_e, param_t, param_n) {
  return var_u.create(param_n).compute(param_e, param_t);
  };
  moduleObj.exports = var_d.PBKDF2;
  },
  59: function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var_r = requireFn(4);
  requireFn(8);
  var_r.mode.CFB = function () {
  var var_e = var_r.lib.BlockCipherMode.extend();
  function var_t(param_e, param_t, param_n, param_r) {
  var var_o;
  var var_i = this._iv;
  if (var_i) {
  var_o = var_i.slice(0);
  this._iv = undefined;
  }
  else {
  var_o = this._prevBlock;
  }
  param_r.encryptBlock(var_o, 0);
  for (var num_a = 0;
  num_a < param_n;
  num_a++) {
  param_e[param_t + num_a] ^= var_o[num_a];
  }
  }
  var_e.Encryptor = var_e.extend({
  processBlock: function (param_e, param_n) {
  var var_r_1 = this._cipher;
  var var_o = var_r_1.blockSize;
  var_t.call(this, param_e, param_n, var_o, var_r_1);
  this._prevBlock = param_e.slice(param_n, param_n + var_o);
  }
  }
  );
  var_e.Decryptor = var_e.extend({
  processBlock: function (param_e, param_n) {
  var var_r_1 = this._cipher;
  var var_o = var_r_1.blockSize;
  var var_i = param_e.slice(param_n, param_n + var_o);
  var_t.call(this, param_e, param_n, var_o, var_r_1);
  this._prevBlock = var_i;
  }
  }
  );
  return var_e;
  }
  ();
  moduleObj.exports = var_r.mode.CFB;
  },
  60: function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var var_o;
  var var_i;
  var_i = requireFn(4);
  requireFn(8);
  var_i.mode.CTR = (var_r = var_i.lib.BlockCipherMode.extend(), var_o = var_r.Encryptor = var_r.extend(
  {
  processBlock: function (param_e, param_t) {
  var var_n = this._cipher;
  var var_r_1 = var_n.blockSize;
  var var_o_1 = this._iv;
  var var_i_1 = this._counter;
  if (var_o_1) {
  var_i_1 = this._counter = var_o_1.slice(0);
  this._iv = undefined;
  }
  var var_a = var_i_1.slice(0);
  var_n.encryptBlock(var_a, 0);
  var_i_1[var_r_1 - 1] = var_i_1[var_r_1 - 1] + 1 | 0;
  for (var num_s = 0;
  num_s < var_r_1;
  num_s++) {
  param_e[param_t + num_s] ^= var_a[num_s];
  }
  }
  }
  ), var_r.Decryptor = var_o, var_r);
  moduleObj.exports = var_i.mode.CTR;
  },
  61: function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var_r = requireFn(4);
  requireFn(8);
  /** @preserve
     * Counter block mode compatible with  Dr Brian Gladman fileenc.c
     * derived from CryptoJS.mode.CTR
     * Jan Hruby jhruby.web@gmail.com
     */
  var_r.mode.CTRGladman = function () {
  var var_e = var_r.lib.BlockCipherMode.extend();
  function var_t(param_e) {
  if ((param_e >> 24 & 255) == 255) {
  var var_t_1 = param_e >> 16 & 255;
  var var_n_1 = param_e >> 8 & 255;
  var var_r_1 = param_e & 255;
  if (var_t_1 === 255) {
  var_t_1 = 0;
  if (var_n_1 === 255) {
  var_n_1 = 0;
  if (var_r_1 === 255) {
  var_r_1 = 0;
  }
  else {
  ++var_r_1;
  }
  }
  else {
  ++var_n_1;
  }
  }
  else {
  ++var_t_1;
  }
  param_e = 0;
  param_e += var_t_1 << 16;
  param_e += var_n_1 << 8;
  param_e += var_r_1;
  }
  else {
  param_e += 16777216;
  }
  return param_e;
  }
  var var_n = var_e.Encryptor = var_e.extend({
  processBlock: function (param_e, param_n) {
  var var_r_1 = this._cipher;
  var var_o = var_r_1.blockSize;
  var var_i = this._iv;
  var var_a = this._counter;
  if (var_i) {
  var_a = this._counter = var_i.slice(0);
  this._iv = undefined;
  }
  (function (param_e_1) {
  if ((param_e_1[0] = var_t(param_e_1[0])) === 0) {
  param_e_1[1] = var_t(param_e_1[1]);
  }
  }
  )(var_a);
  var var_s = var_a.slice(0);
  var_r_1.encryptBlock(var_s, 0);
  for (var num_c = 0;
  num_c < var_o;
  num_c++) {
  param_e[param_n + num_c] ^= var_s[num_c];
  }
  }
  }
  );
  var_e.Decryptor = var_n;
  return var_e;
  }
  ();
  moduleObj.exports = var_r.mode.CTRGladman;
  },
  62: function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var var_o;
  var var_i;
  var_i = requireFn(4);
  requireFn(8);
  var_i.mode.OFB = (var_r = var_i.lib.BlockCipherMode.extend(), var_o = var_r.Encryptor = var_r.extend(
  {
  processBlock: function (param_e, param_t) {
  var var_n = this._cipher;
  var var_r_1 = var_n.blockSize;
  var var_o_1 = this._iv;
  var var_i_1 = this._keystream;
  if (var_o_1) {
  var_i_1 = this._keystream = var_o_1.slice(0);
  this._iv = undefined;
  }
  var_n.encryptBlock(var_i_1, 0);
  for (var num_a = 0;
  num_a < var_r_1;
  num_a++) {
  param_e[param_t + num_a] ^= var_i_1[num_a];
  }
  }
  }
  ), var_r.Decryptor = var_o, var_r);
  moduleObj.exports = var_i.mode.OFB;
  },
  63: function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var var_o;
  var_o = requireFn(4);
  requireFn(8);
  var_o.mode.ECB = ((var_r = var_o.lib.BlockCipherMode.extend()).Encryptor = var_r.extend(
  {
  processBlock: function (param_e, param_t) {
  this._cipher.encryptBlock(param_e, param_t);
  }
  }
  ), var_r.Decryptor = var_r.extend({
  processBlock: function (param_e, param_t) {
  this._cipher.decryptBlock(param_e, param_t);
  }
  }
  ), var_r);
  moduleObj.exports = var_o.mode.ECB;
  },
  64: function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var_r = requireFn(4);
  requireFn(8);
  var_r.pad.AnsiX923 = {
  pad: function (param_e, param_t) {
  var var_n = param_e.sigBytes;
  var var_r_1 = param_t * 4;
  var var_o = var_r_1 - var_n % var_r_1;
  var var_i = var_n + var_o - 1;
  param_e.clamp();
  param_e.words[var_i >>> 2] |= var_o << 24 - var_i % 4 * 8;
  param_e.sigBytes += var_o;
  }
  ,
  unpad: function (param_e) {
  var var_t = param_e.words[param_e.sigBytes - 1 >>> 2] & 255;
  param_e.sigBytes -= var_t;
  }
  };
  moduleObj.exports = var_r.pad.Ansix923;
  },
  65: function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var_r = requireFn(4);
  requireFn(8);
  var_r.pad.Iso10126 = {
  pad: function (param_e, param_t) {
  var var_n = param_t * 4;
  var var_o = var_n - param_e.sigBytes % var_n;
  param_e.concat(var_r.lib.WordArray.random(var_o - 1)).concat(var_r.lib.WordArray.create(
  [var_o << 24], 1));
  }
  ,
  unpad: function (param_e) {
  var var_t = param_e.words[param_e.sigBytes - 1 >>> 2] & 255;
  param_e.sigBytes -= var_t;
  }
  };
  moduleObj.exports = var_r.pad.Iso10126;
  },
  66: function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var_r = requireFn(4);
  requireFn(8);
  var_r.pad.Iso97971 = {
  pad: function (param_e, param_t) {
  param_e.concat(var_r.lib.WordArray.create([2147483648], 1));
  var_r.pad.ZeroPadding.pad(param_e, param_t);
  }
  ,
  unpad: function (param_e) {
  var_r.pad.ZeroPadding.unpad(param_e);
  param_e.sigBytes--;
  }
  };
  moduleObj.exports = var_r.pad.Iso97971;
  },
  67: function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var_r = requireFn(4);
  requireFn(8);
  var_r.pad.ZeroPadding = {
  pad: function (param_e, param_t) {
  var var_n = param_t * 4;
  param_e.clamp();
  param_e.sigBytes += var_n - (param_e.sigBytes % var_n || var_n);
  }
  ,
  unpad: function (param_e) {
  var var_t = param_e.words;
  var var_n = param_e.sigBytes - 1;
  for (var_n = param_e.sigBytes - 1;
  var_n >= 0;
  var_n--) {
  if (var_t[var_n >>> 2] >>> 24 - var_n % 4 * 8 & 255) {
  param_e.sigBytes = var_n + 1;
  break;
  }
  }
  }
  };
  moduleObj.exports = var_r.pad.ZeroPadding;
  },
  68: function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var_r = requireFn(4);
  requireFn(8);
  var_r.pad.NoPadding = {
  pad: function () {
  }
  ,
  unpad: function () {
  }
  };
  moduleObj.exports = var_r.pad.NoPadding;
  },
  69: function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var var_o;
  var var_i;
  var var_a;
  var_a = requireFn(4);
  requireFn(8);
  var_o = (var_r = var_a).lib.CipherParams;
  var_i = var_r.enc.Hex;
  var_r.format.Hex = {
  stringify: function (param_e) {
  return param_e.ciphertext.toString(var_i);
  }
  ,
  parse: function (param_e) {
  var var_t = var_i.parse(param_e);
  return var_o.create({
  ciphertext: var_t
  }
  );
  }
  };
  moduleObj.exports = var_a.format.Hex;
  },
  70: function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var_r = requireFn(4);
  requireFn(18);
  requireFn(19);
  requireFn(17);
  requireFn(8);
  (function () {
  var var_e = var_r;
  var var_t = var_e.lib.BlockCipher;
  var var_n = var_e.algo;
  var list_o = [];
  var list_i = [];
  var list_a = [];
  var list_s = [];
  var list_c = [];
  var list_l = [];
  var list_u = [];
  var list_d = [];
  var list_f = [];
  var list_p = [];
  (function () {
  var list_e = [];
  for (var num_t = 0;
  num_t < 256;
  num_t++) {
  list_e[num_t] = num_t < 128 ? num_t << 1 : num_t << 1 ^ 283;
  }
  var num_n = 0;
  var num_r = 0;
  for (num_t = 0;
  num_t < 256;
  num_t++) {
  var var_h = num_r ^ num_r << 1 ^ num_r << 2 ^ num_r << 3 ^ num_r << 4;
  var_h = var_h >>> 8 ^ var_h & 255 ^ 99;
  list_o[num_n] = var_h;
  list_i[var_h] = num_n;
  var var_g_1 = list_e[num_n];
  var var_m = list_e[var_g_1];
  var var_v = list_e[var_m];
  var var_y = list_e[var_h] * 257 ^ var_h * 16843008;
  list_a[num_n] = var_y << 24 | var_y >>> 8;
  list_s[num_n] = var_y << 16 | var_y >>> 16;
  list_c[num_n] = var_y << 8 | var_y >>> 24;
  list_l[num_n] = var_y;
  var_y = var_v * 16843009 ^ var_m * 65537 ^ var_g_1 * 257 ^ num_n * 16843008;
  list_u[var_h] = var_y << 24 | var_y >>> 8;
  list_d[var_h] = var_y << 16 | var_y >>> 16;
  list_f[var_h] = var_y << 8 | var_y >>> 24;
  list_p[var_h] = var_y;
  if (num_n) {
  num_n = var_g_1 ^ list_e[list_e[list_e[var_v ^ var_g_1]]];
  num_r ^= list_e[list_e[num_r]];
  }
  else {
  num_n = num_r = 1;
  }
  }
  }
  )();
  var list_h = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
  var var_g = var_n.AES = var_t.extend({
  _doReset: function () {
  if (!this._nRounds || this._keyPriorReset !== this._key) {
  var var_e_1 = this._keyPriorReset = this._key;
  var var_t_1 = var_e_1.words;
  var var_n_1 = var_e_1.sigBytes / 4;
  for (var var_r_1 = ((this._nRounds = var_n_1 + 6) + 1) * 4, var_i = this._keySchedule = [],
  num_a = 0;
  num_a < var_r_1;
  num_a++) {
  if (num_a < var_n_1) {
  var_i[num_a] = var_t_1[num_a];
  }
  else {
  var_l = var_i[num_a - 1];
  if (num_a % var_n_1) {
  if (var_n_1 > 6 && num_a % var_n_1 == 4) {
  var_l = list_o[var_l >>> 24] << 24 | list_o[var_l >>> 16 & 255] << 16 | list_o[var_l >>> 8 & 255] << 8 | list_o[var_l & 255];
  }
  }
  else {
  var_l = list_o[(var_l = var_l << 8 | var_l >>> 24) >>> 24] << 24 | list_o[var_l >>> 16 & 255] << 16 | list_o[var_l >>> 8 & 255] << 8 | list_o[var_l & 255];
  var_l ^= list_h[num_a / var_n_1 | 0] << 24;
  }
  var_i[num_a] = var_i[num_a - var_n_1] ^ var_l;
  }
  }
  var var_s = this._invKeySchedule = [];
  for (var num_c = 0;
  num_c < var_r_1;
  num_c++) {
  num_a = var_r_1 - num_c;
  if (num_c % 4) {
  var var_l = var_i[num_a];
  }
  else {
  var_l = var_i[num_a - 4];
  }
  var_s[num_c] = num_c < 4 || num_a <= 4 ? var_l : list_u[list_o[var_l >>> 24]] ^ list_d[list_o[var_l >>> 16 & 255]] ^ list_f[list_o[var_l >>> 8 & 255]] ^ list_p[list_o[var_l & 255]];
  }
  }
  }
  ,
  encryptBlock: function (param_e, param_t) {
  this._doCryptBlock(param_e, param_t, this._keySchedule, list_a, list_s, list_c,
  list_l, list_o);
  }
  ,
  decryptBlock: function (param_e, param_t) {
  var var_n_1 = param_e[param_t + 1];
  param_e[param_t + 1] = param_e[param_t + 3];
  param_e[param_t + 3] = var_n_1;
  this._doCryptBlock(param_e, param_t, this._invKeySchedule, list_u, list_d, list_f,
  list_p, list_i);
  var_n_1 = param_e[param_t + 1];
  param_e[param_t + 1] = param_e[param_t + 3];
  param_e[param_t + 3] = var_n_1;
  }
  ,
  _doCryptBlock: function (param_e, param_t, param_n, param_r, param_o, param_i,
  param_a, param_s) {
  for (var var_c = this._nRounds, var_l = param_e[param_t] ^ param_n[0], var_u = param_e[param_t + 1] ^ param_n[1],
  var_d = param_e[param_t + 2] ^ param_n[2], var_f = param_e[param_t + 3] ^ param_n[3],
  num_p = 4, num_h = 1;
  num_h < var_c;
  num_h++) {
  var var_g_1 = param_r[var_l >>> 24] ^ param_o[var_u >>> 16 & 255] ^ param_i[var_d >>> 8 & 255] ^ param_a[var_f & 255] ^ param_n[num_p++];
  var var_m = param_r[var_u >>> 24] ^ param_o[var_d >>> 16 & 255] ^ param_i[var_f >>> 8 & 255] ^ param_a[var_l & 255] ^ param_n[num_p++];
  var var_v = param_r[var_d >>> 24] ^ param_o[var_f >>> 16 & 255] ^ param_i[var_l >>> 8 & 255] ^ param_a[var_u & 255] ^ param_n[num_p++];
  var var_y = param_r[var_f >>> 24] ^ param_o[var_l >>> 16 & 255] ^ param_i[var_u >>> 8 & 255] ^ param_a[var_d & 255] ^ param_n[num_p++];
  var_l = var_g_1;
  var_u = var_m;
  var_d = var_v;
  var_f = var_y;
  }
  var_g_1 = (param_s[var_l >>> 24] << 24 | param_s[var_u >>> 16 & 255] << 16 | param_s[var_d >>> 8 & 255] << 8 | param_s[var_f & 255]) ^ param_n[num_p++];
  var_m = (param_s[var_u >>> 24] << 24 | param_s[var_d >>> 16 & 255] << 16 | param_s[var_f >>> 8 & 255] << 8 | param_s[var_l & 255]) ^ param_n[num_p++];
  var_v = (param_s[var_d >>> 24] << 24 | param_s[var_f >>> 16 & 255] << 16 | param_s[var_l >>> 8 & 255] << 8 | param_s[var_u & 255]) ^ param_n[num_p++];
  var_y = (param_s[var_f >>> 24] << 24 | param_s[var_l >>> 16 & 255] << 16 | param_s[var_u >>> 8 & 255] << 8 | param_s[var_d & 255]) ^ param_n[num_p++];
  param_e[param_t] = var_g_1;
  param_e[param_t + 1] = var_m;
  param_e[param_t + 2] = var_v;
  param_e[param_t + 3] = var_y;
  }
  ,
  keySize: 8
  }
  );
  var_e.AES = var_t._createHelper(var_g);
  }
  )();
  moduleObj.exports = var_r.AES;
  },
  71: function (moduleObj, exportsObj, requireFn) {
  },
  72: function (moduleObj, exportsObj, requireFn) {
  },
  73: function (moduleObj, exportsObj, requireFn) {
  },
  74: function (moduleObj, exportsObj, requireFn) {
  },
  75: function (moduleObj, exportsObj, requireFn) {
  },
  736: function (moduleObj, exportsObj, requireFn) {
  }
});
