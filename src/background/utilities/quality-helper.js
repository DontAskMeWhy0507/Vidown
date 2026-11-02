// Module 9 [utilities] - Shared utility component (quality-helper)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.d(exportsObj, "a", function () {
  return var_s;
  }
  );
  var dep_dom_utils = requireFn(0);
  var dep_media_constants = requireFn(1);
  function var_i(param_e, param_t) {
  var var_r = typeof Symbol != "undefined" && param_e[Symbol.iterator] ||
  param_e["@@iterator"];
  if (!var_r) {
  if (Array.isArray(param_e) || (var_r = function (param_e_1, param_t_1) {
  if (param_e_1) {
  if (typeof param_e_1 == "string") {
  return var_a(param_e_1, param_t_1);
  }
  var var_r_1 = {
  }
  .toString.call(param_e_1).slice(8, -1);
  if (var_r_1 === "Object" && param_e_1.constructor) {
  var_r_1 = param_e_1.constructor.name;
  }
  if (var_r_1 === "Map" || var_r_1 === "Set") {
  return Array.from(param_e_1);
  }
  else if (var_r_1 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
  var_r_1)) {
  return var_a(param_e_1, param_t_1);
  }
  else {
  return undefined;
  }
  }
  }
  (param_e)) || param_t && param_e && typeof param_e.length == "number") {
  if (var_r) {
  param_e = var_r;
  }
  var num_n = 0;
  function var_o() {
  }
  return {
  s: var_o,
  n: function () {
  if (num_n >= param_e.length) {
  return {
  done: true
  };
  }
  else {
  return {
  done: false,
  value: param_e[num_n++]
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
  var var_i_1;
  var flag_s = true;
  var flag_c = false;
  return {
  s: function () {
  var_r = var_r.call(param_e);
  }
  ,
  n: function () {
  var var_e = var_r.next();
  flag_s = var_e.done;
  return var_e;
  }
  ,
  e: function (param_e_1) {
  flag_c = true;
  var_i_1 = param_e_1;
  }
  ,
  f: function () {
  try {
  if (!flag_s && var_r.return != null) {
  var_r.return();
  }
  }
  finally {
  if (flag_c) {
  throw var_i_1;
  }
  }
  }
  };
  }
  function var_a(param_e, param_t) {
  if (param_t == null || param_t > param_e.length) {
  param_t = param_e.length;
  }
  for (var num_r = 0, var_n = Array(param_t);
  num_r < param_t;
  num_r++) {
  var_n[num_r] = param_e[num_r];
  }
  return var_n;
  }
  class var_s {
  constructor() {
  this.QUALITY_TYPES = {
  };
  this.QUALITY_TYPES[var_s.QL_VIDEO_ULTRAHD] = {
  quality: var_s.QL_HIGH,
  i18n_quality: Object(dep_dom_utils.i18n)(dep_media_constants.r["3072p"].i18n_label),
  qualityIndex: 8,
  size: 3072,
  videoTitle: "Super HD"
  };
  this.QUALITY_TYPES["4K"] = this.QUALITY_TYPES[var_s.QL_VIDEO_ULTRAHD];
  this.QUALITY_TYPES["4K UHD"] = this.QUALITY_TYPES[var_s.QL_VIDEO_ULTRAHD];
  this.QUALITY_TYPES[var_s.QL_VIDEO_ULTRAHD] = {
  quality: var_s.QL_HIGH,
  i18n_quality: Object(dep_dom_utils.i18n)(dep_media_constants.r["2160p"].i18n_label),
  qualityIndex: 7,
  size: 2160,
  videoTitle: "Ultra HD"
  };
  this.QUALITY_TYPES[var_s.QL_VIDEO_ULTRAHD] = {
  quality: var_s.QL_HIGH,
  i18n_quality: Object(dep_dom_utils.i18n)(dep_media_constants.r["1440p"].i18n_label),
  qualityIndex: 6,
  size: 1440,
  videoTitle: "Quad HD"
  };
  this.QUALITY_TYPES["Quad HD"] = this.QUALITY_TYPES[var_s.QL_VIDEO_ULTRAHD];
  this.QUALITY_TYPES[var_s.QL_VIDEO_FULLHD] = {
  quality: var_s.QL_HIGH,
  i18n_quality: Object(dep_dom_utils.i18n)(dep_media_constants.r["1080p"].i18n_label),
  qualityIndex: 5,
  size: 1080,
  videoTitle: "Full HD",
  audioTitle: "High",
  vimeoQuality: "1080p",
  zingTag: ["1080p", "label1080"],
  dailymotionQuality: "1080p",
  clipvnQuality: "5"
  };
  this.QUALITY_TYPES[var_s.QL_HIGH] = this.QUALITY_TYPES[var_s.QL_VIDEO_FULLHD];
  this.QUALITY_TYPES[var_s.QL_HIGHEST] = Object.assign({
  }
  , this.QUALITY_TYPES[var_s.QL_VIDEO_FULLHD]);
  this.QUALITY_TYPES[var_s.QL_HIGHEST].qualityIndex += 0.01;
  this.QUALITY_TYPES[var_s.QL_VIDEO_HD] = {
  quality: var_s.QL_STANDARD,
  i18n_quality: Object(dep_dom_utils.i18n)(dep_media_constants.r["720p"].i18n_label),
  qualityIndex: 4,
  size: 720,
  videoTitle: "HD",
  audioTitle: "High",
  zingTag: ["720p", "label720"],
  vimeoQuality: "720p",
  dailymotionQuality: ["hd", "720p"],
  facebookQuality: ["hd_src", "hd_src_no_ratelimit"],
  JWQuality: "highquality",
  clipvnQuality: "4"
  };
  this.QUALITY_TYPES[var_s.QL_VIDEO_STANDARD] = {
  quality: var_s.QL_STANDARD,
  i18n_quality: Object(dep_dom_utils.i18n)(dep_media_constants.r["480p"].i18n_label),
  qualityIndex: 3,
  size: 480,
  altSizes: [540],
  videoTitle: "Standard",
  audioTitle: "Standard",
  zingTag: ["480p"],
  dailymotionQuality: "480p",
  vimeoQuality: "480p",
  facebookQuality: ["sd_src", "sd_src_no_ratelimit"],
  JWQuality: "location",
  clipvnQuality: "3"
  };
  this.QUALITY_TYPES[var_s.QL_VIDEO_MEDIUM] = {
  quality: var_s.QL_STANDARD,
  i18n_quality: Object(dep_dom_utils.i18n)(dep_media_constants.r["360p"].i18n_label),
  qualityIndex: 2,
  size: 360,
  videoTitle: "Medium",
  audioTitle: "Medium",
  vimeoQuality: "360p",
  dailymotionQuality: "380p",
  zingTag: ["source", "360p"],
  JWQuality: "lowquality",
  clipvnQuality: "2"
  };
  this.QUALITY_TYPES[var_s.QL_VIDEO_SMALL] = {
  quality: var_s.QL_LOW,
  i18n_quality: Object(dep_dom_utils.i18n)(dep_media_constants.r["270p"].i18n_label),
  qualityIndex: 1,
  size: 240,
  altSizes: [270],
  videoTitle: "Small",
  audioTitle: "Low",
  dailymotionQuality: "240p",
  vimeoQuality: "270p",
  zingTag: ["f", "f240"],
  clipvnQuality: "1"
  };
  this.QUALITY_TYPES[var_s.QL_LOW] = this.QUALITY_TYPES[var_s.QL_VIDEO_SMALL];
  this.QUALITY_TYPES[var_s.QL_VIDEO_MOBILE] = {
  quality: var_s.QL_LOW,
  i18n_quality: Object(dep_dom_utils.i18n)(dep_media_constants.r["144p"].i18n_label),
  qualityIndex: 0,
  size: 144,
  altSizes: [180],
  videoTitle: "Mobile",
  audioTitle: "Low",
  dailymotionQuality: "144p",
  vimeoQuality: "",
  clipvnQuality: "0"
  };
  this.PREFERRED_QUALITY_INDEX = {
  };
  this.PREFERRED_QUALITY_INDEX[var_s.QL_HIGH] = this.QUALITY_TYPES[var_s.QL_VIDEO_FULLHD].qualityIndex;
  this.PREFERRED_QUALITY_INDEX[var_s.QL_STANDARD] = this.QUALITY_TYPES[var_s.QL_VIDEO_STANDARD].qualityIndex;
  this.PREFERRED_QUALITY_INDEX[var_s.QL_MEDIUM] = this.PREFERRED_QUALITY_INDEX[var_s.QL_STANDARD];
  this.PREFERRED_QUALITY_INDEX[var_s.QL_LOW] = this.QUALITY_TYPES[var_s.QL_VIDEO_SMALL].qualityIndex;
  this.DEFAULT_QUALITY_LEVEL = var_s.QL_HIGH;
  this.QUALITY_LEVELS = [var_s.QL_HIGH, var_s.QL_STANDARD, var_s.QL_LOW];
  this.VIDEO_QUALITY_LEVELS = [var_s.QL_VIDEO_ULTRAHD, var_s.QL_VIDEO_FULLHD, var_s.QL_VIDEO_HD,
  var_s.QL_VIDEO_STANDARD, var_s.QL_VIDEO_MEDIUM, var_s.QL_VIDEO_SMALL, var_s.QL_VIDEO_MOBILE];
  this.NEW_VIDEO_QUALITY_LEVELS = [var_s.QL_VIDEO_8K, var_s.QL_VIDEO_ULTRAHD, var_s.QL_VIDEO_QHD,
  var_s.QL_VIDEO_FULLHD, var_s.QL_VIDEO_HD, var_s.QL_VIDEO_STANDARD, var_s.QL_VIDEO_MEDIUM,
  var_s.QL_VIDEO_SMALL, var_s.QL_VIDEO_MOBILE];
  this.AUDIO_QUALITY_LEVELS = [var_s.QL_AUDIO_LOSSLESS, var_s.QL_AUDIO_320, var_s.QL_AUDIO_128];
  this.DEFAULT_QUALITY_TYPE = var_s.QL_VIDEO_STANDARD;
  }
  normalizePreferenceLevel(param_e) {
  if (param_e) {
  if (param_e === var_s.QL_MEDIUM) {
  return var_s.QL_STANDARD;
  }
  else {
  return param_e;
  }
  }
  else {
  return this.DEFAULT_QUALITY_LEVEL;
  }
  }
  getResolutionHeight(param_e) {
  var var_t = parseInt(String(param_e.resolution || "").replace(/[^\d]/g, ""), 10);
  if (!Number.isNaN(var_t) && var_t > 0) {
  return var_t;
  }
  else {
  return this._getTypeByQualityType(param_e.quality || "").size ||
  0;
  }
  }
  getPreferenceGroupByHeight(param_e) {
  if (param_e >= var_s.PREFERENCE_HIGH_MIN) {
  return var_s.QL_HIGH;
  }
  else if (param_e >= var_s.PREFERENCE_STANDARD_MIN) {
  return var_s.QL_STANDARD;
  }
  else {
  return var_s.QL_LOW;
  }
  }
  chooseAutomaticDownload(param_e, param_t) {
  var var_n = this.normalizePreferenceLevel(param_t);
  var var_o = param_e.filter(param_e_1 => param_e_1.type === "video" ||
  param_e_1.type === "no_watermark_video");
  if (!var_o.length) {
  var_o = param_e;
  }
  var var_a_1;
  var obj_c = {
  [var_s.QL_HIGH]: [],
  [var_s.QL_STANDARD]: [],
  [var_s.QL_LOW]: []
  };
  var var_u = var_i(var_o);
  try {
  for (var_u.s();
  !(var_a_1 = var_u.n()).done;
  ) {
  var var_l = var_a_1.value;
  var var_d = this.getResolutionHeight(var_l);
  obj_c[this.getPreferenceGroupByHeight(var_d)].push(var_l);
  }
  }
  catch (var_e) {
  var_u.e(var_e);
  }
  finally {
  var_u.f();
  }
  for (var num_p = 0, var_f = Object.keys(obj_c);
  num_p < var_f.length;
  num_p++) {
  obj_c[var_f[num_p]].sort((param_e_1, param_t_1) => this.getResolutionHeight(param_t_1) - this.getResolutionHeight(
  param_e_1));
  }
  var var_h;
  var obj_m = {
  [var_s.QL_HIGH]: [var_s.QL_HIGH, var_s.QL_STANDARD, var_s.QL_LOW],
  [var_s.QL_STANDARD]: [var_s.QL_STANDARD, var_s.QL_HIGH, var_s.QL_LOW],
  [var_s.QL_LOW]: [var_s.QL_LOW, var_s.QL_STANDARD, var_s.QL_HIGH]
  };
  var var_g = var_i(obj_m[var_n] || obj_m[var_s.QL_HIGH]);
  try {
  for (var_g.s();
  !(var_h = var_g.n()).done;
  ) {
  var var_v = var_h.value;
  if (obj_c[var_v]?.length) {
  return obj_c[var_v][0];
  }
  }
  }
  catch (var_e) {
  var_g.e(var_e);
  }
  finally {
  var_g.f();
  }
  return var_o[0];
  }
  getFacebookQuality(param_e) {
  return this._getVideoQuality("facebookQuality", param_e)?.videoTitle;
  }
  getDailymotionQuality(param_e) {
  return this._getVideoQuality("dailymotionQuality", param_e)?.videoTitle;
  }
  getZingVideoQuality(param_e) {
  return this._getVideoQuality("zingTag", param_e)?.videoTitle;
  }
  getZingAudioQuality(param_e) {
  return this._getVideoQuality("zingTag", param_e)?.audioTitle;
  }
  getVimeoQuality(param_e) {
  return this._getVideoQuality("vimeoQuality", param_e)?.videoTitle;
  }
  getClipvnQuality(param_e) {
  return this._getVideoQuality("clipvnQuality", param_e)?.videoTitle;
  }
  getJWQuality(param_e) {
  return this._getVideoQuality("JWQuality", param_e)?.videoTitle;
  }
  getQualityBySize(param_e) {
  return this._getVideoQuality("size", param_e)?.videoTitle;
  }
  getSizeByQuality(param_e) {
  return (this.QUALITY_TYPES[param_e] || {
  }
  ).size || 0;
  }
  getI18nOfQuality(param_e) {
  return this.QUALITY_TYPES[param_e]?.i18n_quality;
  }
  _getVideoQuality(param_e, param_t, param_r) {
  for (var var_n in this.QUALITY_TYPES) {
  var var_o = this.QUALITY_TYPES[var_n][param_e];
  if (!Array.isArray(var_o)) {
  var_o = [var_o];
  }
  if (var_o.indexOf(param_t) !== -1) {
  return this.QUALITY_TYPES[var_n];
  }
  }
  if (param_r) {
  return null;
  }
  else {
  return this.QUALITY_TYPES[this.DEFAULT_QUALITY_TYPE];
  }
  }
  _getTypeByQualityType(param_e) {
  for (var var_t in this.QUALITY_TYPES) {
  if (param_e === var_t || param_e === this.QUALITY_TYPES[var_t].videoTitle ||
  param_e === this.QUALITY_TYPES[var_t].audioTitle) {
  return this.QUALITY_TYPES[var_t];
  }
  }
  return this.QUALITY_TYPES[this.DEFAULT_QUALITY_TYPE];
  }
  _calculateWeight(param_e, param_t) {
  var var_n = dep_media_constants.k[param_e.type]?.extensions_weight ||
  [];
  var var_i_1 = var_n.indexOf(param_e.ext);
  var var_a_1 = this._getTypeByQualityType(param_e.quality ||
  "").qualityIndex;
  return var_i_1 / var_n.length + Math.abs(param_t - var_a_1) / 7;
  }
  getQualityLevelByType(param_e) {
  return Object.keys(this.QUALITY_TYPES).indexOf(this._getTypeByQualityType(param_e).videoTitle);
  }
  getAudioQualityIndex(param_e) {
  return this.AUDIO_QUALITY_LEVELS.concat().reverse().indexOf(param_e);
  }
  getVideoQualityIndex(param_e) {
  return this.VIDEO_QUALITY_LEVELS.concat().reverse().indexOf(param_e);
  }
  getUpdatedVideoQualityIndex(param_e) {
  var obj_t = {
  "HD HDR": var_s.QL_VIDEO_HD,
  "Full HD HDR": var_s.QL_VIDEO_FULLHD,
  "Quad HD": var_s.QL_VIDEO_QHD,
  "Quad HD HDR": var_s.QL_VIDEO_QHD,
  "4K UHD": var_s.QL_VIDEO_ULTRAHD,
  "4K UHD HDR": var_s.QL_VIDEO_ULTRAHD,
  "8K UHD": var_s.QL_VIDEO_8K,
  "8K UHD HDR": var_s.QL_VIDEO_8K
  };
  if (obj_t[param_e]) {
  param_e = obj_t[param_e];
  }
  return this.NEW_VIDEO_QUALITY_LEVELS.concat().reverse().indexOf(param_e);
  }
  getOneClickQualityIndex(param_e) {
  return this.QUALITY_LEVELS.concat().reverse().indexOf(this.normalizePreferenceLevel(
  param_e));
  }
  getAutoQualitySettingMetricValue(param_e) {
  var var_t = this.normalizePreferenceLevel(param_e);
  if (var_t === var_s.QL_HIGH) {
  return 8;
  }
  else if (var_t === var_s.QL_STANDARD) {
  return 9;
  }
  else if (var_t === var_s.QL_LOW) {
  return 10;
  }
  else {
  return 8;
  }
  }
  getDownloadSidepanelQualityMetricValue(param_e) {
  if (param_e.type === "audio" || param_e.type === "audio_channel") {
  var var_t = (param_e.quality || param_e.resolution || "").toLowerCase();
  if (var_t.includes("lossless") || var_t.includes("flac")) {
  return 22;
  }
  else if (var_t.includes("320")) {
  return 21;
  }
  else {
  return 20;
  }
  }
  var var_r = this.getResolutionHeight(param_e);
  if (var_r >= 4320) {
  return 18;
  }
  else if (var_r >= 2160) {
  return 17;
  }
  else if (var_r >= 1440) {
  return 16;
  }
  else if (var_r >= 1080) {
  return 15;
  }
  else if (var_r >= 720) {
  return 14;
  }
  else if (var_r >= 480) {
  return 13;
  }
  else if (var_r >= 360) {
  return 12;
  }
  else if (var_r >= 240) {
  return 11;
  }
  else {
  return 10;
  }
  }
  getQualityLevelByQualityType(param_e) {
  var var_t = this._getTypeByQualityType(param_e).quality;
  return this.normalizePreferenceLevel(var_t);
  }
  getQualityIndexByVideoTitleQuality(param_e) {
  if (this.QUALITY_TYPES[param_e] !== undefined) {
  return this.QUALITY_TYPES[param_e].qualityIndex;
  }
  else {
  return this.getOneClickQualityIndex(param_e);
  }
  }
  getQualityNameByResolution(param_e) {
  var var_t = parseInt(param_e);
  var var_r = Object.values(this.QUALITY_TYPES);
  var var_n = var_r.find(param_e_1 => param_e_1.size === var_t ||
  param_e_1.altSizes && param_e_1.altSizes.includes(var_t));
  if (var_n) {
  return var_n.videoTitle;
  }
  var var_o = var_r.find(param_e_1 => param_e_1.size < var_t);
  if (var_o) {
  return var_o.videoTitle;
  }
  else {
  return null;
  }
  }
  getQualityExtFromDowload(param_e) {
  return (param_e.ext || "") + "/" + (param_e.quality || "") + "/" + (param_e.resolution ||
  "");
  }
  chooseBestDownload(param_e, param_t, param_r) {
  var var_n = param_e.length;
  if (param_r) {
  var var_o = param_r.split("/").filter(param_e_1 => param_e_1).length > 2;
  for (var num_i = 0;
  num_i < var_n;
  ++num_i) {
  var var_a_1 = param_e[num_i];
  var var_s_1 = this.getQualityExtFromDowload(var_a_1);
  if (var_s_1 === param_r) {
  return var_a_1;
  }
  if (var_o) {
  var var_c = param_r.replace(/(.+)\/.+/, "$1");
  if (var_s_1.replace(/(.+)\/.+/, "$1") === var_c) {
  return var_a_1;
  }
  }
  }
  }
  param_t = this.normalizePreferenceLevel(param_t || this.DEFAULT_QUALITY_LEVEL);
  var var_u = param_e.filter(param_e_1 => param_e_1.type === "video" ||
  param_e_1.type === "no_watermark_video");
  if (!var_u || !var_u.length) {
  var_u = param_e;
  }
  var_n = var_u.length;
  var var_l = this.PREFERRED_QUALITY_INDEX[param_t];
  var num_d = 1000;
  var var_p = -1;
  for (var num_f = 0;
  num_f < var_n;
  ++num_f) {
  var var_h = var_u[num_f];
  var var_m = this._calculateWeight(var_h, var_l);
  if (num_d > var_m) {
  num_d = var_m;
  var_p = num_f;
  }
  }
  return var_u[param_t.toLocaleLowerCase() === param_r ? 0 :
  var_p];
  }
  }
  var_s.QL_HIGHEST = "Highest";
  var_s.QL_HIGH = "High";
  var_s.QL_MEDIUM = "Medium";
  var_s.QL_STANDARD = "Standard";
  var_s.QL_LOW = "Low";
  var_s.QL_VIDEO_8K = "8K UHD";
  var_s.QL_VIDEO_ULTRAHD = "Ultra HD";
  var_s.QL_VIDEO_QHD = "QHD";
  var_s.QL_VIDEO_FULLHD = "Full HD";
  var_s.QL_VIDEO_HD = "HD";
  var_s.QL_VIDEO_STANDARD = "Standard";
  var_s.QL_VIDEO_MEDIUM = "Medium";
  var_s.QL_VIDEO_SMALL = "Small";
  var_s.QL_VIDEO_MOBILE = "Mobile";
  var_s.QL_AUDIO_128 = "128kbps";
  var_s.QL_AUDIO_320 = "320kbps";
  var_s.QL_AUDIO_LOSSLESS = "lossless";
  var_s.PREFERENCE_HIGH_MIN = 1080;
  var_s.PREFERENCE_STANDARD_MIN = 360;
  exportsObj.b = new var_s();
  };
