// Module 306 - Savior Phimbro_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_url_utils = requireFn(3);
  function var_i(param_t) {
  var var_e,
  var_r = param_t.split("/"),
  var_n = var_r.slice(-1)[0],
  var_i_1 = var_n.split(".")[1],
  var_a = (var_e = var_n.split(".")[0], atob(fn_o(var_e, 6)) + "." + var_i_1);
  return var_r.splice(var_r.length - 1, 1, var_a), var_r.join("/");
  }
  var fn_o = function (param_t, param_e) {
  return param_t.replace(/[a-zA-Z]/g, function (param_t_1) {
  var var_r = param_t_1 <= "Z" ? 90 : 122,
  var_n = param_t_1.charCodeAt(0) + param_e;
  return String.fromCharCode(var_r >= var_n ? var_n : var_n - 26);
  }
  );
  }
  ,
  obj_a = {
  getDomains: () => ["phimbro.com"],
  parse: {
  sources: [{
  checkSource: param_t => param_t.url.includes("m.ffvvv.xyz"),
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response,
  var_o = Object(dep_url_utils.f)(var_e.url),
  var_a = var_r.split("\n").map(param_t_1 => {
  var var_e_1;
  if (param_t_1.trim().startsWith("#") && param_t_1.toLowerCase().includes("uri")) {
  var var_r_1 = var_i((null === (var_e_1 = param_t_1.match(/URI="([^"]+)"/)) ||
  void 0 === var_e_1 ? void 0 : var_e_1[1]) || "");
  return param_t_1.replace(/URI="([^"]+)"/, `URI="${var_r_1}"`);
  }
  return param_t_1.trim().startsWith("#") || !param_t_1.trim() ?
  param_t_1 : var_i(param_t_1);
  }
  ).join("\n");
  return var_o.play_list = var_a, var_o.type = "video", var_o.removeOrigin = !0,
  var_o.filename = document.title, [var_o];
  }
  }
  ]
  }
  };
  exportsObj.default = obj_a;
  };
