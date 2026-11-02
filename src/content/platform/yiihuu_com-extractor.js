// Module 400 - Savior Yiihuu_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var var_n,
  dep_dom_utils = requireFn(0);
  function var_o(param_t, param_e) {
  var var_r = "undefined" != typeof Symbol && param_t[Symbol.iterator] ||
  param_t["@@iterator"];
  if (!var_r) {
  if (Array.isArray(param_t) || (var_r = function (param_t_1, param_e_1) {
  if (param_t_1) {
  if ("string" == typeof param_t_1) return var_a(param_t_1, param_e_1);
  var var_r_1 = {
  }
  .toString.call(param_t_1).slice(8, -1);
  return "Object" === var_r_1 && param_t_1.constructor && (var_r_1 = param_t_1.constructor.name),
  "Map" === var_r_1 || "Set" === var_r_1 ? Array.from(param_t_1) :
  "Arguments" === var_r_1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(var_r_1) ?
  var_a(param_t_1, param_e_1) : void 0;
  }
  }
  (param_t)) || param_e && param_t && "number" == typeof param_t.length) {
  var_r && (param_t = var_r);
  var num_n = 0,
  fn_i = function () {
  };
  return {
  s: fn_i,
  n: function () {
  return num_n >= param_t.length ? {
  done: !0
  }
  : {
  done: !1,
  value: param_t[num_n++]
  };
  }
  ,
  e: function (param_t_1) {
  throw param_t_1;
  }
  ,
  f: fn_i
  };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var var_o_1,
  flag_s = !0,
  flag_u = !1;
  return {
  s: function () {
  var_r = var_r.call(param_t);
  }
  ,
  n: function () {
  var var_t = var_r.next();
  return flag_s = var_t.done, var_t;
  }
  ,
  e: function (param_t_1) {
  flag_u = !0, var_o_1 = param_t_1;
  }
  ,
  f: function () {
  try {
  flag_s || null == var_r.return || var_r.return();
  }
  finally {
  if (flag_u) throw var_o_1;
  }
  }
  };
  }
  function var_a(param_t, param_e) {
  (null == param_e || param_e > param_t.length) && (param_e = param_t.length);
  for (var num_r = 0, var_n_1 = Array(param_e);
  num_r < param_e;
  num_r++) var_n_1[num_r] = param_t[num_r];
  return var_n_1;
  }
  var obj_s = {
  getDomains: () => ["yiihuu.com"],
  default: {
  mediaObjectChange: param_t => {
  var var_e,
  var_r,
  var_a_1 = param_t.mediaObject,
  var_s = param_t.node;
  if (location.pathname.match(/[0-9]+/)) {
  var var_u = null === (var_e = location.pathname.match(/[0-9]+/)) ||
  void 0 === var_e ? void 0 : var_e[0],
  var_c = "https://www.yiihuu.com/polyv/polyv_get_token.php?vid=" + var_u;
  if (var_n) var_a_1.dashVideoId = var_n;
  else try {
  fetch(var_c).then(param_t_1 => param_t_1.text()).then(param_t_1 => {
  var var_e_1 = param_t_1,
  var_r_1 = location.origin + "/get_video_uri.php?video_type=xhtml&play_video_id=" + var_u + "&_=" + Date.now(
  );
  fetch(var_r_1).then(param_t_2 => param_t_2.text()).then(param_t_2 => {
  var var_r_2 = (param_t_2 = param_t_2.trim()).split("_")[0],
  var_i = param_t_2.charAt(param_t_2.indexOf("_") + 1),
  var_o_1 = "https://hls.videocc.net/playsafe/v1102/" + param_t_2.substring(0, parseInt(
  var_i) + 1) + "/" + var_i + "/" + var_r_2 + "_1.key?token=" + var_e_1;
  fetch(var_o_1).then(param_t_3 => param_t_3.arrayBuffer()).then(param_t_3 => {
  var_n = param_t_3;
  }
  );
  }
  );
  }
  );
  }
  catch (var_t) {
  console.log(var_t);
  }
  var_a_1.ext = "mp4", var_a_1.exts = ["mp4"];
  var var_l,
  var_f = var_o(Object(dep_dom_utils.queryAll)(".feed-shared-linkedin-video__container"));
  try {
  for (var_f.s();
  !(var_l = var_f.n()).done;
  ) {
  var var_d = var_l.value;
  var_s.isSameNode(Object(dep_dom_utils.query)("video", var_d)) &&
  "ARTICLE" === (null === (var_r = var_d.nextElementSibling) ||
  void 0 === var_r ? void 0 : var_r.tagName) && (var_a_1.filename = var_d.nextElementSibling.innerText);
  }
  }
  catch (var_t) {
  var_f.e(var_t);
  }
  finally {
  var_f.f();
  }
  return "video";
  }
  }
  }
  };
  exportsObj.default = obj_s;
  };
