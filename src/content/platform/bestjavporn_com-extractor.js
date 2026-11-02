// Module 213 - Savior Bestjavporn_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var list_n = [],
  obj_i = {
  getDomains: () => ["bestjavporn."],
  parse: {
  default: param_t => {
  var var_e = param_t.response,
  var_r = param_t.media;
  return var_r.play_list = var_e, [var_r];
  }
  }
  ,
  isValidVideoNode: param_t => "IFRAME" === param_t.nodeName,
  urls: [{
  checkUrl: () => !!list_n.length,
  getUrl: () => {
  var var_t,
  var_e = list_n[0],
  var_r = document.title || (null === (var_t = document.querySelector("h1")) ||
  void 0 === var_t ? void 0 : var_t.innerText);
  return var_e.filename = var_r, [var_e];
  }
  }
  ],
  processRequestIds: param_t => {
  if (param_t.url.match(/\/stream\/hls\.php\?.+|\.cloudatacdn\.com\/.+|\.tapecontent\.net\/.+\.mp4.+|.+\.m3u8/)) return list_n[0] = param_t,
  !0;
  }
  };
  exportsObj.default = obj_i;
  };
