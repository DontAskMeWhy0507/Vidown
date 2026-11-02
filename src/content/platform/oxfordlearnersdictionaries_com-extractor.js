// Module 299 - Savior Oxfordlearnersdictionaries_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var list_n = [],
  var_i = location.href,
  obj_o = {
  getDomains: () => ["oxfordlearnersdictionaries.com"],
  forceUpdate: () => {
  location.href !== var_i && (EE.emit("widget.forceUpdate"), var_i = location.href);
  }
  ,
  processRequestIds: param_t => {
  if ("string" == typeof param_t.url && (param_t.url.match(/oxfordlearnersdictionaries.com\/media/) ||
  param_t.url.includes(".mp3"))) return list_n.push(param_t), !0;
  }
  ,
  default: {
  getUrl: param_t => {
  if (list_n.length > 0) return (null == param_t ? void 0 : param_t.node) ?
  list_n.filter(param_e => param_e.url == param_t.node.getAttribute("data-src-mp3")) :
  list_n;
  }
  }
  ,
  addNode: () => [".audio_play_button"]
  };
  exportsObj.default = obj_o;
  };
