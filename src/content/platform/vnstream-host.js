// Module 698 - Savior Vnstream Host
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj), exportsObj.default = {
  index: 40,
  getUrl(param_t, param_e, param_r, param_n) {
  if (param_t.match(/(vnstream\.)/i)) {
  var var_i = location.href.match(/\/embed\/\?vid=([a-zA-Z0-9\-_]+)/);
  try {
  if (var_i) {
  var var_o = var_i[1];
  return {
  return: !0,
  data: {
  url: `${location.origin}
  
  
  /sources/?vid=${var_o}
  
  
  &s=1`,
  vid: var_o,
  referer: location.href
  }
  };
  }
  }
  catch (var_t) {
  }
  }
  return {
  return: !1,
  data: null
  };
  }
  };
  };
