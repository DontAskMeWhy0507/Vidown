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
  };
