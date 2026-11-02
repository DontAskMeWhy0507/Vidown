// Module 5 [utilities] - Shared utility component (metrics-logger)
export default function (moduleObj, exportsObj, requireFn) {
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
  };
