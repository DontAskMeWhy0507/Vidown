// Module 304 - Savior Phimbo_vip Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_media_constants = requireFn(1),
  obj_i = {
  getDomains: () => ["phimbo.vip", "phimbo.me"],
  parse: {
  sources: [{
  checkSource: param_t => {
  var var_e = param_t.url;
  return Boolean(var_e.match(/streamsb\.biz\/playlist\/json\/[a-z0-9]+\/[a-z0-9]+/i));
  }
  ,
  parse: param_t => {
  var var_e,
  var_r,
  var_i = param_t.media,
  var_o = param_t.response;
  try {
  var var_a = JSON.parse(var_o);
  if (!var_a) return [var_i];
  var var_s = JSON.parse(JSON.stringify(var_i));
  var_s.resolution = var_a.quality, var_s.quality = null === (var_e = dep_media_constants.r[var_a.quality]) ||
  void 0 === var_e ? void 0 : var_e.label;
  var var_u = atob(var_a.cdn),
  list_c = ["#EXTM3U", "#EXT-X-VERSION:" + (var_a.version ||
  3), "#EXT-X-TARGETDURATION:" + (var_a.duration || 4), "#EXT-X-MEDIA-SEQUENCE:" + (
  var_a.mediaSequence || 0)];
  if (null === (var_r = null == var_a ? void 0 : var_a.content) ||
  void 0 === var_r ? void 0 : var_r.length) for (var num_l = 0, var_f = var_a.content.length;
  num_l < var_f;
  num_l++) {
  var var_d = var_a.content[num_l];
  list_c.push(`#EXTINF:${var_d.extinf}
  
  
  ,`), list_c.push(`${var_u}
  
  
  ${var_d.url}
  
  
  .html`);
  }
  return list_c.push("#EXT-X-ENDLIST"), delete var_s.referrer, var_s.skipReferrer = !0,
  var_s.play_list = list_c.join("\n"), var_s.extraData = {
  referrer: location.href,
  tab_url: location.href
  }
  , [var_s];
  }
  catch (var_t) {
  return [var_i];
  }
  }
  }
  , {
  checkSource: param_t => {
  var var_e = param_t.url;
  return Boolean(var_e.match(/streamsb\.biz\/playlist2\/.*\.m3u8+/i));
  }
  ,
  parse: param_t => {
  var var_e = param_t.media;
  try {
  return [Object.assign({
  }
  , var_e)];
  }
  catch (var_t) {
  return [var_e];
  }
  }
  }
  ]
  }
  ,
  idsProcess: param_t => {
  var var_e = param_t.defaultIds,
  var_r = param_t.id,
  var_n = param_t.index;
  var_r.url.match(/media\.discordapp\.net\/attachments\/\d+\/\d+\/[a-z0-9_\- ]+\.mp4/i) &&
  var_e.splice(var_n, 1);
  }
  };
  exportsObj.default = obj_i;
  };
