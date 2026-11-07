// Module 11 [utilities] - Shared utility component (feature-flags)
export default function (moduleObj, exportsObj, requireFn) {
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
  var var_r = param_t.split(" ");
  if (var_r.length !== 2) {
  return false;
  }
  var var_n = -1;
  switch (var_r[0]) {
  case ">":
  var_n = 1;
  break;
  case ">=":
  var_n = 0;
  }
  var var_i_1;
  var var_a_1;
  var var_s;
  var var_c = var_o(var_r[1]);
  var_a_1 = var_c;
  return ((var_s = (var_i_1 = param_e_1)[0] - var_a_1[0]) !== 0 ||
  (var_s = var_i_1[1] - var_a_1[1]) != 0 || (var_s = var_i_1[2] - var_a_1[2]) != 0 ?
  var_s : var_s = var_i_1[3] - var_a_1[3]) >= var_n;
  }
  var var_a = function (param_e_1) {
  var var_t = param_e_1.match(/Chrome\/([\d.]+)/);
  if (var_t && var_t[1]) {
  var_t = var_o(var_t[1]);
  }
  var var_r = var_i.bind(null, var_t);
  return {
  YT: {
  mp4: true,
  m4a: true,
  webm: var_r(">= 39.0.2171.103"),
  weba: var_r(">= 39.0.2171.103")
  }
  ,
  M3U8: var_r("> 62.4.3202.180"),
  SOUND_ONLY: var_r("> 55.4.2883.114") || !!var_t && var_t[0] === 50 &&
  var_r("> 50.3.2661.150"),
  SUBTITLES: var_r("> 55.4.2883.114") || !!var_t && var_t[0] === 50 &&
  var_r("> 50.3.2661.150"),
  PLAY_NOW_BOTTOM_TOOLTIP: var_r("> 55.4.2883.126"),
  IS_ADS_PIP_PARAMS: var_r("> 60.4.3112.120"),
  MEDIA_WEB_REQUEST: var_r(">= 58.4.3029.118"),
  SERP_ADD_STRUCTURES: var_r(">= 62.4.3202.176"),
  SERP_ADD_INNER_STRUCTURES: var_r(">= 64.4.3282.200"),
  MOBILE_TRANSFER_PANEL: true,
  CUSTOM_METRICS_JSON: var_r(">= 64.4.3282.236"),
  DASH_DOWNLOAD: var_r(">= 72.0.3626.130"),
  WEB_REQUEST_EXTRA_HEADERS: var_r(">= 72.0.0.0"),
  NATIVE_PIP: var_r(">= 74.0.0.0"),
  DOWNLOAD: {
  EXTRA_DATAS: var_r(">= 103.0.0.0"),
  M3U8_AUDIO: var_r(">= 109.0.0.0")
  }
  ,
  CHATGPT: var_r(">= 110.0.0.0"),
  DO_NOT_ONBOARD_YOUTUBE_ANTI_ADBLOCKER: var_r(">= 117.0.0.0"),
  DO_NOT_FAST_FORWARD_YOUTUBE_ADS: var_r(">= " + dep_media_constants.e),
  SRT_V3_SUPPORT: var_r(">= 121.0.0.0"),
  ADGUARD_SWITCHER: var_r(">= 140.0.0.0"),
  PREFETCH_SUPPORT: var_r(">= 110.0.0.0"),
  NEW_MEDIA_DOWNLOAD: var_r(">= 151.0.0.0")
  };
  }
  var userAgentStr = (param_e && param_e.navigator && param_e.navigator.userAgent) ? param_e.navigator.userAgent : (typeof navigator !== "undefined" && navigator && navigator.userAgent ? navigator.userAgent : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");
  var_a = var_a(userAgentStr);
  exportsObj.a = var_a;
  }
  ).call(this, requireFn(13));
  };
