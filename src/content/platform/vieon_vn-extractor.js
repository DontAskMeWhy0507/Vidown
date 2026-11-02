// Module 374 - Savior Vieon_vn Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_module_44 = requireFn(44),
  dep_format_resolver = requireFn(14),
  dep_quality_helper = requireFn(9),
  dep_media_constants = requireFn(1),
  dep_dom_utils = requireFn(0),
  list_u = [],
  obj_c = {
  getDomains: () => ["vieon.vn"],
  parse: {
  sources: [],
  default: param_t => {
  var var_e,
  var_r,
  var_u,
  var_c,
  var_l,
  var_f = param_t.response,
  obj_d = {
  filename: document.title
  }
  ,
  var_h = Object(dep_module_44.parse)(var_f, {
  attributeNamePrefix: "",
  attrNodeName: "@",
  textNodeName: "#text",
  ignoreAttributes: !1,
  cdataTagName: "__cdata"
  }
  );
  try {
  var var_p = var_h.MPD.Period.AdaptationSet,
  var_v = null === (var_e = var_h.MPD["@"]) || void 0 === var_e ?
  void 0 : var_e.mediaPresentationDuration,
  var_m = Object(dep_format_resolver.i)(var_v),
  var_y = Object.keys(var_p).find(param_t_1 => var_p[param_t_1]["@"].mimeType.includes(
  "video")),
  var_g = Object.keys(var_p).find(param_t_1 => var_p[param_t_1]["@"].mimeType.includes(
  "audio")),
  var_b = var_p[var_y].Representation,
  var_w = null === (var_u = null === (var_r = var_p[var_g]) ||
  void 0 === var_r ? void 0 : var_r.SegmentTemplate) || void 0 === var_u ?
  void 0 : var_u["@"],
  var_A = var_p[var_g].Representation["@"].id,
  var__ = null === (var_l = null === (var_c = var_p[var_g]) ||
  void 0 === var_c ? void 0 : var_c.SegmentTemplate) || void 0 === var_l ?
  void 0 : var_l["@"];
  return var_b.map(param_t_1 => {
  var var_e_1, var_r_1, var_n;
  if (var_w) {
  var var_u_1 = param_t_1["@"],
  var_c_1 = Math.ceil(var_m / (var_w.duration / var_w.timescale));
  var_r_1 = var_u_1.id + "/" + var_w.initialization.split("/")[1], (var_n = [dep_format_resolver.h]).push(
  `<Initialization sourceURL="${var_r_1}
  
  
  "/>`);
  for (var num_l = 1;
  num_l < var_c_1;
  num_l++) {
  var var_f_1 = num_l.toString(),
  var_h_1 = var_f_1.length < 2 ? new Array(2 - var_f_1.length + 1).join("0") + num_l :
  var_f_1,
  var_v_1 = var_u_1.id + "/" + var_w.media.split("/")[1].replace(/\$Number\$/, var_h_1);
  var_n.push(`<SegmentURL media="${var_v_1}
  
  
  "/>`);
  }
  var_n.push('</SegmentList>\n\t\t\t\t\t\t\t\t\t</Representation>\n\t\t\t\t\t\t\t</AdaptationSet>\n\t\t\t\t\t\t\t<AdaptationSet lang="en" mimeType="audio/mp4" codecs="mp4a.40.2" bitmovin:label="English stereo">\n\t\t\t\t\t\t\t\t<Representation id="4" mimeType="audio/mp4" codecs="mp4a.40.2" audioSamplingRate="48000" startWithSAP="1" bandwidth="98414">\n\t\t\t\t\t\t\t\t\t<SegmentList duration="10">'),
  var_n.push(`<Initialization sourceURL="${var_A + "/" + var__.initialization.split(
  "/")[1]}
  
  
  "/>`);
  for (var num_y = 1;
  num_y < var_c_1;
  num_y++) {
  var var_b_1 = num_y.toString(),
  var_E = var_b_1.length < 2 ? new Array(2 - var_b_1.length + 1).join("0") + num_y :
  var_b_1,
  var_S = var_A + "/" + var__.media.split("/")[1].replace(/\$Number\$/, var_E);
  var_n.push(`<SegmentURL media="${var_S}
  
  
  "/>`);
  }
  var_n.push("</SegmentList>\n\t\t\t\t\t\t\t\t\t</Representation>\n\t\t\t\t\t\t\t\t</AdaptationSet>\n\t\t\t\t\t\t\t</Period>\n\t\t\t\t\t\t</MPD>");
  }
  else var_r_1 = {
  videoUrl: param_t_1.BaseURL,
  audioUrl: var_p[var_g].Representation.BaseURL
  };
  var var_O,
  var_x = param_t_1["@"].height + "p",
  var_k = dep_quality_helper.b.getQualityBySize(var_x);
  try {
  var_O = obj_d.i18n_quality || Object(dep_dom_utils.i18n)(null === (var_e_1 = dep_media_constants.r[var_x]) ||
  void 0 === var_e_1 ? void 0 : var_e_1.i18n_label) || var_k;
  }
  catch (var_t) {
  var_O = var_k;
  }
  var var_M = Object.assign({
  }
  , obj_d, {
  url: var_r_1,
  resolution: var_x,
  quality: var_O,
  i18n_quality: var_O,
  play_list: null == var_n ? void 0 : var_n.join("\n"),
  type: "video",
  ext: "mp4",
  _isDashMPD: !!var_n
  }
  );
  return var_w || (var_M.extraData || (var_M.extraData = []), var_M.extraData.push(
  {
  name: "downloadRangeRequest",
  value: "true"
  }
  )), var_M;
  }
  );
  }
  catch (var_t) {
  return console.warn(var_t), Promise.resolve(null);
  }
  }
  }
  ,
  default: {
  getUrl: () => {
  if (list_u.length > 0) return list_u[0].url;
  }
  }
  ,
  processRequestIds: param_t => {
  if (param_t.url.includes(".mpd")) return list_u[0] = param_t, !0;
  }
  };
  exportsObj.default = obj_c;
  };
