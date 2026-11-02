// Module 272 - Savior Luotphimtv_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_quality_helper = requireFn(9),
  dep_dom_utils = requireFn(0),
  obj_o = {
  }
  ,
  obj_a = {
  getDomains: () => ["luotphimtv"],
  parse: {
  sources: [{
  checkSource: param_t => {
  var var_e = param_t.url;
  return Boolean(var_e.match(/(dpst1.xyz\/stream)/));
  }
  ,
  parse: param_t => {
  var var_e = param_t.media;
  return [Object.assign(Object.assign({
  }
  , var_e), {
  referrer: obj_o[var_e.url] || obj_o[location.href] || location.href
  }
  )];
  }
  }
  , {
  checkSource: param_t => {
  var var_e = param_t.url;
  if (var_e.match(/(video\.mp4\?)/)) {
  var var_r = new URL(var_e),
  var_n = var_r.searchParams.has("hash"),
  var_i = var_r.searchParams.has("cookie"),
  var_o = var_r.searchParams.has("key");
  if (var_n && var_i && var_o) return !0;
  }
  return !1;
  }
  ,
  parse: param_t => {
  var var_e = param_t.media,
  var_r = Object.assign(Object.assign({
  }
  , var_e), {
  skipReferrer: !0
  }
  );
  return delete var_r.referrer, var_r.quality || (var_r.quality = dep_quality_helper.b.DEFAULT_QUALITY_TYPE),
  "number" == typeof var_r.size && (var_r.size = Object(dep_dom_utils.beautifyFileSize)(
  var_r.size)), [var_r];
  }
  }
  ]
  }
  ,
  urls: [{
  checkUrl: param_t => {
  var var_e = param_t.url;
  return Boolean(var_e.match(/(dpst1.xyz\/stream)|(nobiphim\.com)/));
  }
  ,
  getUrl: param_t => {
  var var_e = param_t.url;
  return obj_o[location.href] = var_e, var_e;
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  var_e.referrer = obj_o[var_e.url] || obj_o[location.href] ||
  location.href;
  }
  }
  ]
  };
  exportsObj.default = obj_a;
  };
