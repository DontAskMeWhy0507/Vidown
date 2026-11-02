// Module 199 - Savior Animet_net Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var var_n,
  dep_dom_utils = requireFn(0),
  dep_quality_helper = requireFn(9),
  dep_network_monitor = requireFn(20),
  obj_s = {
  }
  ,
  obj_u = {
  getDomains: () => ["animet.net", "vietdub.com"],
  siteMatcher: param_t => /animet\d*\./i.test(param_t),
  parse: {
  sources: [...((null === (var_n = dep_network_monitor.a.parse) ||
  void 0 === var_n ? void 0 : var_n.sources) || []), {
  checkSource: param_t => {
  var var_e = param_t.url;
  return Boolean(var_e.match(/(phimhay\.net)|(cdnproxy\.xyz\/)/));
  }
  ,
  parse: param_t => {
  var var_e = param_t.media;
  return var_e.quality || (var_e.quality = dep_quality_helper.b.DEFAULT_QUALITY_TYPE),
  "number" == typeof var_e.size && (var_e.size = Object(dep_dom_utils.beautifyFileSize)(
  var_e.size)), var_e.referrer = obj_s[location.href] || location.href, var_e.ext = "mp4",
  var_e.exts = ["mp4"], var_e.type = "video", [var_e];
  }
  }
  ]
  }
  ,
  urls: [...(dep_network_monitor.a.urls || []), {
  checkUrl: param_t => {
  var var_e = param_t.url;
  return Boolean(var_e.match(/(phimhay\.net)|(cdnproxy\.xyz\/)/));
  }
  ,
  getUrl: param_t => param_t.url,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  return var_e.referrer = obj_s[location.href] || location.href, var_e.type = "video",
  "video";
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.url;
  return Boolean(var_e.match(/api\.anime3s\.com\/Get_Stream/));
  }
  ,
  getUrl: param_t => {
  var var_e = param_t.url;
  return obj_s[location.href] = var_e, var_e;
  }
  }
  ]
  };
  exportsObj.default = obj_u;
  };
