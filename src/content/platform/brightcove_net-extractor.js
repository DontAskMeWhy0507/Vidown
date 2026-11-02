// Module 219 - Savior Brightcove_net Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var var_n,
  var_i = void 0,
  obj_o = {
  getDomains: () => ["brightcove.net"],
  toggleLight: {
  turnOn: {
  updated: () => {
  var var_t;
  null === (var_t = document.querySelector(".vjs-playlist-sidebar")) ||
  void 0 === var_t || var_t.classList.remove("--savior-overlay-z-index-top");
  }
  }
  ,
  turnOff: {
  updated: () => {
  var var_t;
  null === (var_t = document.querySelector(".vjs-playlist-sidebar")) ||
  void 0 === var_t || var_t.classList.add("--savior-overlay-z-index-top");
  }
  }
  }
  ,
  forceUpdate: () => {
  var var_t = document.querySelector('video[role="application"]');
  var_t && var_t.src !== var_n && (var_n = var_t.src, var_i = void 0);
  }
  ,
  default: {
  getUrl: () => null == var_i ? void 0 : var_i.url
  }
  ,
  processRequestIds(param_t) {
  if (String(param_t.url).match(/master\.m3u8/)) return var_i = param_t, !0;
  }
  };
  exportsObj.default = obj_o;
  };
