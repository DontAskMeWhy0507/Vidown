// Module 352 - Savior Thaolejp Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_media_sniffer = requireFn(6);
  exportsObj.default = {
  getDomains: () => ["thaolejp."],
  parse: {
  sources: [{
  checkSource: param_t => !param_t.url.includes("mp3"),
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response.split("\n"),
  var_i = var_e.protocol + "//" + var_e.host;
  return var_r = var_r.map(param_t_1 => {
  if (param_t_1.startsWith("#EXT-X-KEY")) {
  var var_e_1 = param_t_1.indexOf('URI="') + 'URI="'.length;
  param_t_1 = param_t_1.slice(0, var_e_1) + var_i + param_t_1.slice(var_e_1);
  }
  return param_t_1;
  }
  ), Object(dep_media_sniffer.e)(var_r.join("\n"), var_e);
  }
  }
  ]
  }
  ,
  urls: [{
  checkUrl: param_t => param_t.url.includes("mp3") && location.href.includes("de-thi"),
  mediaObjectChange: param_t => {
  var var_e,
  var_r,
  var_n,
  var_i,
  var_o = param_t.mediaObject,
  var_a = param_t.node,
  var_s = null === (var_r = null === (var_e = var_a.closest(".Test_partContainer__lb72X")) ||
  void 0 === var_e ? void 0 : var_e.querySelector(".font-bold")) ||
  void 0 === var_r ? void 0 : var_r.textContent,
  var_u = null === (var_i = null === (var_n = var_a.closest(".Test_partContainer__lb72X")) ||
  void 0 === var_n ? void 0 : var_n.querySelector(".text-lg")) ||
  void 0 === var_i ? void 0 : var_i.textContent;
  return var_o.filename = var_u || var_s || var_o.filename, var_o.filename = "Audio " + var_o.filename,
  "audio";
  }
  }
  ]
  };
  };
