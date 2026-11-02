// Module 278 - Savior Monfansubvn_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var obj_n = {
  getDomains: () => ["monfansubvn."],
  toggleLight: {
  turnOff: () => {
  var var_t = document.querySelector("#MainScreenScrollableContent video") ?
  document.querySelector("#root > .MuiBox-root") : document.querySelector("#root > div > div");
  null == var_t || var_t.style.setProperty("background-color", "rgba(0, 0, 0, 0.9)",
  "important");
  }
  ,
  turnOn: () => {
  var var_t = document.querySelector("#MainScreenScrollableContent video") ?
  document.querySelector("#root > .MuiBox-root") : document.querySelector("#root > div > div");
  null == var_t || var_t.style.removeProperty("background-color");
  }
  }
  ,
  urls: [{
  checkUrl: param_t => {
  var var_e = param_t.url;
  return /m3u8/.test(var_e);
  }
  ,
  getUrl: param_t => param_t.url,
  mediaObjectChange(param_t) {
  var var_e = param_t.mediaObject;
  return var_e.filename = document.title, var_e.fixName = document.title, var_e.ext = "m3u8",
  var_e.exts = ["m3u8"], "video";
  }
  }
  ]
  };
  exportsObj.default = obj_n;
  };
