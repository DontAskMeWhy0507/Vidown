// Module 274 - Savior Mad20_io Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var var_n;
  requireFn.r(exportsObj);
  var obj_i = {
  getDomains: () => ["mad20.io"],
  urls: [{
  checkUrl: param_t => param_t.url.startsWith("blob:"),
  getUrl() {
  if (var_n) return [var_n];
  }
  }
  ],
  processRequestIds(param_t) {
  var var_e, var_r, var_i, var_o, var_a, var_s, var_u;
  if (!(null === (var_e = param_t.filename) || void 0 === var_e ?
  void 0 : var_e.startsWith("Fragments"))) {
  var var_c = null === (var_r = param_t.url.match(/\.streaming\.media\.azure\.net\/[a-z0-9\-_]+\/([a-z0-9\.\-_]+)\.ism\/manifest/i)) ||
  void 0 === var_r ? void 0 : var_r[1],
  var_l = null === (var_u = null === (var_s = null === (var_a = null === (var_o = null === (
  var_i = document.querySelector("#videoWrapper")) || void 0 === var_i ?
  void 0 : var_i.nextElementSibling) || void 0 === var_o ? void 0 :
  var_o.querySelector("div div")) || void 0 === var_a ? void 0 :
  var_a.innerText) || void 0 === var_s ? void 0 : var_s.split("\n")) ||
  void 0 === var_u ? void 0 : var_u[0];
  return (var_c || var_l) && (param_t.filename = var_c || var_l), var_n = param_t,
  !0;
  }
  }
  };
  exportsObj.default = obj_i;
  };
