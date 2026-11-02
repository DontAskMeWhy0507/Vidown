// Module 211 - Savior Balkanarchitect_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var list_n = [],
  obj_i = {
  getDomains: () => ["balkanarchitect.com"],
  urls: [{
  checkUrl: param_t => {
  var var_e = param_t.url;
  return Boolean(var_e.match(/embed\/[a-z0-9]+/i));
  }
  ,
  getUrl: param_t => {
  var var_e,
  var_r = null === (var_e = param_t.url.match(/embed\/([a-z0-9]+)/i)) ||
  void 0 === var_e ? void 0 : var_e[1];
  if (var_r) {
  var var_i = new RegExp(var_r + "/hls/master[\\-a-z0-9]+\\.m3u8", "i"),
  var_o = list_n.find(param_t_1 => param_t_1.url.match(var_i));
  return null == var_o ? void 0 : var_o.url;
  }
  }
  }
  ],
  processRequestIds: param_t => (list_n.some(param_e => param_t.url == param_e.url) ||
  list_n.push(param_t), !0)
  };
  exportsObj.default = obj_i;
  };
