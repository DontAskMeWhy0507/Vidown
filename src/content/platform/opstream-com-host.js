// Module 681 - Savior Opstream Com Host
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj), exportsObj.default = {
  index: 180,
  getUrl(param_t, param_e, param_r, param_n) {
  var var_i;
  if (param_t.match(/\.opstream\d*\.com/i)) {
  var regex_o = /main *= *['"](.+)['"]/i,
  var_a = Array.from(document.querySelectorAll("script:not([src]")).map(param_t_1 => {
  var var_e;
  return null === (var_e = param_t_1.textContent) || void 0 === var_e ?
  void 0 : var_e.trim();
  }
  ).filter(param_t_1 => null == param_t_1 ? void 0 : param_t_1.match(regex_o))[0];
  if (var_a) {
  var var_s = null === (var_i = var_a.match(regex_o)) || void 0 === var_i ?
  void 0 : var_i[1];
  if (var_s) {
  var var_u;
  try {
  new URL(var_s), var_u = var_s;
  }
  catch (var_t) {
  var_u = location.origin + var_s;
  }
  return {
  return: !0,
  data: {
  url: var_u,
  referrer: location.href
  }
  };
  }
  }
  }
  return {
  return: !1,
  data: null
  };
  }
  };
  };
