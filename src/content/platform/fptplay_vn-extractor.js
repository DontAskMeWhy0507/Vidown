// Module 235 - Savior Fptplay_vn Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var var_n,
  dep_module_44 = requireFn(44),
  dep_format_resolver = requireFn(14),
  dep_quality_helper = requireFn(9),
  dep_media_constants = requireFn(1),
  dep_dom_utils = requireFn(0),
  dep_url_utils = requireFn(3),
  var_l = location.href,
  obj_f = {
  getDomains: () => ["fptplay.vn"],
  forceUpdate() {
  var_l != location.href && (var_n = void 0, var_l = location.href);
  }
  ,
  parse: {
  sources: [],
  default: param_t => {
  var var_e,
  var_r,
  var_l_1,
  var_f,
  var_d,
  var_h = param_t.media,
  var_p = param_t.response,
  obj_v = {
  filename: document.title
  }
  ,
  var_m = Object(dep_module_44.parse)(var_p, {
  attributeNamePrefix: "",
  attrNodeName: "@",
  textNodeName: "#text",
  ignoreAttributes: !1,
  cdataTagName: "__cdata"
  }
  );
  try {
  var var_y = var_m.MPD.Period.AdaptationSet,
  var_g = null === (var_e = var_m.MPD["@"]) || void 0 === var_e ?
  void 0 : var_e.mediaPresentationDuration,
  var_b = Object(dep_format_resolver.i)(var_g),
  var_w = Object.keys(var_y).find(param_t_1 => var_y[param_t_1]["@"].mimeType.includes(
  "video")),
  var_A = Object.keys(var_y).find(param_t_1 => var_y[param_t_1]["@"].mimeType.includes(
  "audio")),
  var__ = var_y.filter(param_t_1 => param_t_1["@"].mimeType.includes("text/")),
  var_E = var_y[var_w].Representation,
  var_S = null === (var_l_1 = null === (var_r = var_y[var_A]) ||
  void 0 === var_r ? void 0 : var_r.SegmentTemplate) || void 0 === var_l_1 ?
  void 0 : var_l_1["@"],
  var_O = var_y[var_A].Representation["@"].id,
  var_x = null === (var_d = null === (var_f = var_y[var_A]) ||
  void 0 === var_f ? void 0 : var_f.SegmentTemplate) || void 0 === var_d ?
  void 0 : var_d["@"];
  return var_E.map(param_t_1 => {
  var var_e_1, var_r_1, var_i;
  if (var_S) {
  var var_c = param_t_1["@"],
  var_l_2 = Math.ceil(var_b / (var_S.duration / var_S.timescale));
  var_r_1 = var_c.id + "/" + var_S.initialization.split("/")[1], (var_i = [dep_format_resolver.h]).push(
  `<Initialization sourceURL="${var_r_1}
  
  
  "/>`);
  for (var num_f = 1;
  num_f < var_l_2;
  num_f++) {
  var var_d_1 = num_f.toString(),
  var_h_1 = var_c.id + "/" + var_S.media.split("/")[1].replace(/\$Number\$/, var_d_1);
  var_i.push(`<SegmentURL media="${var_h_1}
  
  
  "/>`);
  }
  var_i.push('</SegmentList>\n\t\t\t\t\t\t\t\t\t</Representation>\n\t\t\t\t\t\t\t</AdaptationSet>\n\t\t\t\t\t\t\t<AdaptationSet lang="en" mimeType="audio/mp4" codecs="mp4a.40.2" bitmovin:label="English stereo">\n\t\t\t\t\t\t\t\t<Representation id="4" mimeType="audio/mp4" codecs="mp4a.40.2" audioSamplingRate="48000" startWithSAP="1" bandwidth="98414">\n\t\t\t\t\t\t\t\t\t<SegmentList duration="10">'),
  var_i.push(`<Initialization sourceURL="${var_O + "/" + var_x.initialization.split(
  "/")[1]}
  
  
  "/>`);
  for (var num_p = 1;
  num_p < var_l_2;
  num_p++) {
  var var_m_1 = num_p.toString(),
  var_g_1 = var_O + "/" + var_x.media.split("/")[1].replace(/\$Number\$/, var_m_1);
  var_i.push(`<SegmentURL media="${var_g_1}
  
  
  "/>`);
  }
  var_i.push("</SegmentList>\n\t\t\t\t\t\t\t\t\t</Representation>\n\t\t\t\t\t\t\t\t</AdaptationSet>\n\t\t\t\t\t\t\t</Period>\n\t\t\t\t\t\t</MPD>");
  }
  else var_r_1 = {
  videoUrl: param_t_1.BaseURL,
  audioUrl: var_y[var_A].Representation.BaseURL
  };
  var var_w_1,
  var___1 = param_t_1["@"].height + "p",
  var_E_1 = dep_quality_helper.b.getQualityBySize(var___1);
  try {
  var_w_1 = obj_v.i18n_quality || Object(dep_dom_utils.i18n)(null === (var_e_1 = dep_media_constants.r[var___1]) ||
  void 0 === var_e_1 ? void 0 : var_e_1.i18n_label) || var_E_1;
  }
  catch (var_t) {
  var_w_1 = var_E_1;
  }
  var var_k = Object.assign({
  }
  , obj_v, {
  url: null == var_n ? void 0 : var_n.url,
  resolution: var___1,
  quality: var_w_1,
  i18n_quality: var_w_1,
  play_list: null == var_i ? void 0 : var_i.join("\n"),
  type: "video",
  ext: "mp4",
  _isDashMPD: !!var_i
  }
  );
  return var_S || (var_k.extraData || (var_k.extraData = []), var_k.extraData.push(
  {
  name: "downloadRangeRequest",
  value: "true"
  }
  )), var_k;
  }
  ).concat(...var__.map(param_t_1 => {
  var var_e_1 = param_t_1["@"].lang,
  var_r_1 = param_t_1.Representation.BaseURL,
  var_n_1 = new URL(var_r_1, var_h.url),
  var_i = Object(dep_url_utils.f)(var_n_1.href);
  return var_i.filename = obj_v.filename, var_i.type = "subtitles", var_i.quality = var_e_1,
  var_i;
  }
  ));
  }
  catch (var_t) {
  return console.warn(var_t), Promise.resolve(null);
  }
  }
  }
  ,
  default: {
  getUrl: () => null == var_n ? void 0 : var_n.url
  }
  ,
  urls: [{
  checkUrl: param_t => {
  var var_e = param_t.node;
  return Boolean(var_e.closest(".vjs-live"));
  }
  ,
  getUrl: () => []
  }
  ],
  idsProcess: param_t => {
  var var_e = param_t.defaultIds,
  var_r = param_t.id,
  var_n_1 = param_t.index;
  var_r.url.match(/livecdn/i) && var_e.splice(var_n_1, 1);
  }
  ,
  processRequestIds(param_t) {
  var var_e = param_t.url;
  return !param_t.url.match(/livecdn\.fpt /i) && (var_e.match(/(master\.m3u8)|(playlist\.m3u8)|(stream\.mpd)/i) ?
  (var_n = param_t, !0) : void 0);
  }
  ,
  changeZIndexLightOff: !0
  };
  exportsObj.default = obj_f;
  };
