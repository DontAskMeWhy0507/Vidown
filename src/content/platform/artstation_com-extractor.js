// Module 207 - Savior Artstation_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_module_44 = requireFn(44),
  dep_format_resolver = requireFn(14),
  dep_quality_helper = requireFn(9),
  dep_media_constants = requireFn(1),
  dep_dom_utils = requireFn(0),
  obj_u = {
  getDomains: () => ["www.artstation.com"],
  parse: {
  default: param_t => {
  var var_e,
  var_r = param_t.response,
  obj_u_1 = {
  filename: document.title,
  i18n_quality: ""
  }
  ,
  var_c = Object(dep_module_44.parse)(var_r, {
  attributeNamePrefix: "",
  attrNodeName: "@",
  textNodeName: "#text",
  ignoreAttributes: !1,
  cdataTagName: "__cdata"
  }
  );
  try {
  var var_l = var_c.MPD.Period.AdaptationSet,
  var_f = null === (var_e = var_c.MPD.Period["@"]) || void 0 === var_e ?
  void 0 : var_e.duration,
  var_d = Object(dep_format_resolver.i)(var_f),
  var_h = Object.keys(var_l).find(param_t_1 => var_l[param_t_1]["@"].mimeType.includes(
  "video")),
  var_p = Object.keys(var_l).find(param_t_1 => var_l[param_t_1]["@"].mimeType.includes(
  "audio")),
  var_v = var_l[var_h].Representation,
  var_m = var_l[var_p].Representation,
  var_y = var_m.SegmentTemplate["@"];
  return var_v.map(param_t_1 => {
  var var_e_1,
  var_r_1 = param_t_1.SegmentTemplate["@"],
  var_n = Math.ceil(var_d / (var_r_1.duration / var_r_1.timescale)),
  var_c_1 = var_r_1.initialization.replace(/\$RepresentationID\$/, param_t_1["@"].id),
  list_l = [dep_format_resolver.h];
  list_l.push(`<Initialization sourceURL="${var_c_1}"/>`);
  for (var num_f = 0;
  num_f < var_n;
  num_f++) {
  var var_h_1 = new Array(8 - num_f.toString().length + 1).join("0") + num_f,
  var_p_1 = param_t_1.BaseURL + var_r_1.media.replace(/\$RepresentationID\$\$Number%08d\$/,
  `${param_t_1["@"].id}${var_h_1}`);
  list_l.push(`<SegmentURL media="${var_p_1}"/>`);
  }
  list_l.push('</SegmentList>\n\t\t\t\t\t\t\t</Representation>\n\t\t\t\t\t</AdaptationSet>\n\t\t\t\t\t<AdaptationSet lang="en" mimeType="audio/mp4" codecs="mp4a.40.2" bitmovin:label="English stereo">\n\t\t\t\t\t\t<Representation id="4" mimeType="audio/mp4" codecs="mp4a.40.2" audioSamplingRate="48000" startWithSAP="1" bandwidth="98414">\n\t\t\t\t\t\t\t<SegmentList duration="10">'),
  list_l.push(`<Initialization sourceURL="${var_y.initialization}"/>`);
  for (var num_v = 0;
  num_v < var_n;
  num_v++) {
  var var_g = new Array(8 - num_v.toString().length + 1).join("0") + num_v,
  var_b = var_m.BaseURL + var_y.media.replace(/\$Number%08d\$/, var_g);
  list_l.push(`<SegmentURL media="${var_b}"/>`);
  }
  list_l.push("</SegmentList>\n\t\t\t\t\t\t\t</Representation>\n\t\t\t\t\t\t</AdaptationSet>\n\t\t\t\t\t</Period>\n\t\t\t\t</MPD>");
  var var_w,
  var_A = param_t_1["@"].height + "p",
  var__ = dep_quality_helper.b.getQualityBySize(parseInt(var_A));
  try {
  var_w = obj_u_1.i18n_quality || Object(dep_dom_utils.i18n)(null === (var_e_1 = dep_media_constants.r[var_A]) ||
  void 0 === var_e_1 ? void 0 : var_e_1.i18n_label) || var__;
  }
  catch (var_t) {
  var_w = var__;
  }
  return Object.assign({
  }
  , obj_u_1, {
  url: var_c_1,
  resolution: var_A,
  quality: var__,
  i18nQuality: var_w,
  play_list: list_l.join("\n"),
  type: "video",
  ext: "mp4",
  dashMPD: !0
  }
  );
  }
  );
  }
  catch (var_t) {
  return console.warn(var_t), Promise.resolve(null);
  }
  }
  }
  };
  exportsObj.default = obj_u;
  };
