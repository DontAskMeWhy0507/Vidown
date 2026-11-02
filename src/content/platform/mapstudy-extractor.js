// Module 275 - Savior Mapstudy Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_dash_parser = requireFn(28),
  regex_i = /youtube.*.com\/embed\/([a-z0-9\-_]+)/i,
  obj_o = {
  getDomains: () => ["mapstudy.edu"],
  getCustomParent: param_t => param_t.parentElement,
  parse: {
  sources: [{
  checkSource: param_t => {
  var var_e = param_t.url;
  return Boolean(var_e.match(regex_i));
  }
  ,
  parse: param_t => {
  var var_e,
  var_r = "https://www.youtube.com/watch?v=" + (null === (var_e = param_t.media.url.match(
  regex_i)) || void 0 === var_e ? void 0 : var_e[1]);
  return dep_dash_parser.a.parse(var_r);
  }
  }
  ]
  }
  ,
  urls: [{
  checkUrl: param_t => {
  var var_e = param_t.url;
  return "IFRAME" == param_t.node.nodeName && Boolean(var_e.match(regex_i));
  }
  ,
  getUrl: param_t => param_t.url,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  return var_e.ext = "mp4", var_e.exts = ["mp4"], "video";
  }
  }
  ]
  };
  exportsObj.default = obj_o;
  };
