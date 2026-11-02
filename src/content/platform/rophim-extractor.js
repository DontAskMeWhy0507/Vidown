// Module 324 - Savior Rophim Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var var_n,
  list_i = [],
  var_o = location.href,
  obj_a = {
  getDomains: () => ["rophimz.", "rophim."],
  urls: [{
  checkUrl: param_t => {
  var var_e = param_t.url,
  var_r = new URL(var_e).searchParams.get("q");
  return !!var_r && (var_n = var_r, !0);
  }
  ,
  getUrl: () => var_n || []
  }
  , {
  checkUrl: () => Boolean(list_i.length),
  getUrl: () => list_i[0].url
  }
  ],
  processRequestIds: param_t => !(!/\/hls\/.+[0-9a-z]\=\.m3u8/.test(param_t.url) &&
  !/\/superrounho\/.+\.m3u8/.test(param_t.url)) && (list_i[0] = param_t, !0),
  forceUpdate() {
  location.href !== var_o && (list_i = [], EE.emit("widget.forceUpdate"), var_o = location.href);
  }
  };
  exportsObj.default = obj_a;
  };
