// Module 203 - Savior App Strength Muscleandmotion_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var obj_n = {
  audioUrl: "",
  videoUrl: ""
  }
  ,
  obj_i = {
  getDomains: () => ["app.strength.muscleandmotion.com"],
  urls: [{
  checkUrl: param_t => {
  var var_e = param_t.url;
  return /d24cq1nx03h9us\.cloudfront\.net.*\.(mp3|mp4)$/.test(var_e);
  }
  ,
  getUrl: param_t => {
  var var_e = param_t.url;
  return var_e.includes(".mp3") && obj_n.audioUrl !== var_e &&
  (obj_n.audioUrl = var_e), var_e.includes(".mp4") && obj_n.videoUrl !== var_e &&
  (obj_n.videoUrl = var_e), obj_n;
  }
  ,
  mediaObjectChange: param_t => {
  var var_e,
  var_r,
  var_n = param_t.mediaObject,
  var_i = (null === (var_r = null === (var_e = param_t.node.closest("div.simplebar-content")) ||
  void 0 === var_e ? void 0 : var_e.querySelector("h2")) || void 0 === var_r ?
  void 0 : var_r.textContent) || document.title;
  var_n.filename = var_i;
  }
  }
  ]
  };
  exportsObj.default = obj_i;
  };
