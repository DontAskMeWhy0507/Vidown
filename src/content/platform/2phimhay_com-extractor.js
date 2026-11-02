// Module 183 - Savior 2phimhay_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var list_n = [],
  obj_i = {
  getDomains: () => ["2phimhay"],
  processRequestIds: param_t => (list_n.push(param_t), !0),
  urls: [{
  checkUrl: param_t => param_t.url.includes("proxy.playphim.info"),
  getUrl: param_t => {
  var var_e = param_t.url;
  if (list_n.length > 0) {
  var regex_r = /cdn-\d+.2phimhay.net/,
  var_i = list_n.find(param_t_1 => "string" == typeof param_t_1.url &&
  param_t_1.url.match(regex_r));
  if (!var_i) return;
  return var_i.referrer = var_e, var_i.title = document.title, [var_i];
  }
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  return var_e.ext = "mp4", var_e.exts = ["mp4"], "video";
  }
  }
  ],
  default: {
  getUrl: param_t => {
  var var_e = param_t.ids;
  return [...list_n, ...var_e];
  }
  }
  };
  exportsObj.default = obj_i;
  };
