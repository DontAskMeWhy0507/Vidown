// Module 271 - Savior Lpe360 Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_media_sniffer = requireFn(6);
  exportsObj.default = {
  getDomains: () => ["lpe360."],
  parse: {
  default: param_t => {
  var var_e,
  var_r = param_t.media,
  var_i = param_t.response;
  var_i = function (param_t_1, param_e) {
  var var_r_1 = "&" + (null == param_t_1 ? void 0 : param_t_1.slice(1));
  return param_e.split("\n").map(param_t_2 => param_t_2.trim().startsWith("#") ||
  !param_t_2.trim() ? param_t_2 : param_t_2 + var_r_1).join("\n");
  }
  ("&dpr=1", var_i);
  var var_o = document.querySelectorAll("h1")[1];
  return var_o && (var_r.filename = null === (var_e = var_o.textContent) ||
  void 0 === var_e ? void 0 : var_e.trim(), var_r.fixName = var_r.filename), Object(
  dep_media_sniffer.e)(var_i, var_r);
  }
  }
  };
  };
