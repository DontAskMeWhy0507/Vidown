// Module 682 - Savior Play Hidestream Com Host
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_media_constants = requireFn(1),
  dep_dom_utils = requireFn(0);
  exportsObj.default = {
  index: 160,
  getUrl(param_t, param_e, param_r, param_o) {
  var var_a;
  if (param_t.match(/play\.hidestream\.com/) && -1 === param_r.requestedUrls.indexOf(
  location.href)) {
  var var_s = [...document.querySelectorAll("#player ~ script")].filter(param_t_1 => param_t_1.innerText &&
  param_t_1.innerText.includes("eval("))[0].innerText;
  try {
  var var_u = (null == var_s ? void 0 : var_s.slice(var_s.indexOf("}(") + 2, var_s.length - 2).split(
  ",")) || [],
  var_c = var_u.shift(),
  var_l = var_u.pop() || 2,
  var_f = var_u.pop() || "",
  var_d = ((param_t_1, param_e_1, param_r_1, param_n) => {
  param_t_1 = param_e_1.length;
  for (var num_i = 0;
  num_i < param_t_1;
  num_i++) param_r_1 += String.fromCharCode(param_e_1.charCodeAt(num_i) ^ param_n);
  return param_r_1 = unescape(param_r_1);
  }
  )(var_c, var_u.join(",").slice(1, -1), var_f, var_l),
  var_h = null === (var_a = var_d.match(/['"]*file['"]*: *['"](.+?)['"]/)) ||
  void 0 === var_a ? void 0 : var_a[1];
  Object(dep_dom_utils.sendMessage)({
  requestType: "save_url",
  params: {
  url: var_h
  }
  }
  ), param_r.requestedUrls.push(location.href);
  }
  catch (var_t) {
  Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.CONSOLE_LOG,
  params: {
  url: {
  error: var_t
  }
  }
  }
  );
  }
  }
  return {
  return: !1,
  data: null
  };
  }
  };
  };
