// Module 234 - Savior Forvo_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_url_utils = requireFn(3),
  str_i = "",
  obj_o = {
  getDomains: () => ["forvo.com"],
  addNode: () => ['li div.play[onclick^="Play"]'],
  isMiniPlayerNode: param_t => !!param_t.matches('li div.play[onclick^="Play"]'),
  beforeGetUrl() {
  var var_t,
  var_e = null === (var_t = Array.from(document.querySelectorAll("script")).find(
  param_t => param_t.innerText.includes("_AUDIO_HTTP_HOST"))) ||
  void 0 === var_t ? void 0 : var_t.innerText.trim();
  var_e && Array.from(var_e.matchAll(/(AUDIO|VIDEO)_HTTP_HOST\s?=\s?['"]([a-z0-9\-_\.]+)['"]/gi)).forEach(
  param_t => {
  var var_e_1,
  var_r = null === (var_e_1 = param_t[1]) || void 0 === var_e_1 ?
  void 0 : var_e_1.toLowerCase();
  "audio" !== var_r && "video" !== var_r || ("audio" !== var_r ?
  param_t[2] : str_i = param_t[2]);
  }
  );
  }
  ,
  urls: [{
  checkUrl: param_t => param_t.node.matches('li div.play[onclick^="Play"]'),
  getUrl: param_t => {
  var var_e,
  var_r = param_t.node.getAttribute("onclick"),
  var_o = (null === (var_e = null == var_r ? void 0 : var_r.match(/\((.+)\)/i)) ||
  void 0 === var_e ? void 0 : var_e[1].split(",").map(param_t_1 => param_t_1.replace(
  /['"]/gi, ""))) || [];
  if (!var_o.length) return [];
  var list_a = [var_o[1], var_o[2], var_o[4], var_o[5]],
  var_s = var_o[7],
  var_u = var_o[8],
  list_c = ["/mp3/", "/ogg/", "/audios/mp3/", "/audios/ogg/"];
  return list_a.map((param_t_1, param_e) => {
  if (param_t_1) {
  var var_r_1 = atob(param_t_1),
  var_o_1 = `https://${str_i}
  
  
  ${list_c[param_e]}
  
  
  ${var_r_1}
  
  
  `,
  var_a = Object(dep_url_utils.f)(var_o_1);
  return var_a.filename = var_s, var_a.quality = var_u, var_a.type = "audio", var_a;
  }
  }
  ).filter(Boolean);
  }
  }
  ]
  };
  exportsObj.default = obj_o;
  };
