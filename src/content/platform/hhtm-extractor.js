// Module 247 - Savior Hhtm Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var var_n,
  dep_media_constants = requireFn(1),
  dep_dom_utils = requireFn(0);
  exportsObj.default = {
  getDomains: () => ["hhtm.", "yanhh3d."],
  default: {
  getUrl: param_t => {
  var var_e = param_t.url;
  return var_n ? [var_n] : var_e.includes(".mp4") ? var_e : [];
  }
  ,
  mediaObjectChange: param_t => {
  var var_e,
  var_r = param_t.mediaObject,
  var_n_1 = document.querySelector(".film-name");
  var_n_1 && (var_r.filename = null === (var_e = var_n_1.textContent) ||
  void 0 === var_e ? void 0 : var_e.trim());
  }
  }
  ,
  urls: [{
  checkUrl: param_t => param_t.url.includes("abyss-cdn.ink/video"),
  getUrl: param_t => param_t.url + "/master.html",
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  var_e.ext = "m3u8", var_e.exts = ["m3u8"];
  }
  }
  ],
  processRequestIds: param_t => (Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.CONSOLE_LOG,
  params: {
  id: param_t
  }
  }
  ), !!(param_t.url.includes("/stream/m3u8/") || param_t.url.includes("/avcaption.v1.StreamingService/GetPlaylist") ||
  param_t.url.match(/scontent-sin([\d\-]+)xx\.fbcdn\./)) && (var_n = param_t, !0))
  };
  };
