// Module 697 - Savior Vimeo Host
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj), exportsObj.default = {
  index: 250,
  getUrl(param_t, param_e, param_r, param_n, param_i, param_o) {
  var var_a,
  var_s = location.origin + location.pathname;
  if (param_t.match(/vimeo\.com/i) && (!param_o || param_o.startsWith(var_s))) for (
  var var_u, list_c = [/config *= *({.*?});/i, /config *= *({.*})/i, /playerConfig\s*=\s*({.*})/],
  var_l = Array.from(document.querySelectorAll("script")).filter(param_t_1 => param_t_1 &&
  param_t_1.innerText).map(param_t_1 => param_t_1.innerText), fn_f = function () {
  var var_t = list_c[num_d],
  var_e = var_l.find(param_e_1 => param_e_1.match(var_t));
  if (var_e) return {
  v: {
  return: !0,
  data: {
  config: JSON.parse((null === (var_a = var_t.exec(var_e)) ||
  void 0 === var_a ? void 0 : var_a[1]) || "{}")
  }
  }
  };
  }
  , num_d = 0;
  num_d < list_c.length;
  num_d++) if (var_u = fn_f()) return var_u.v;
  }
  };
  };
