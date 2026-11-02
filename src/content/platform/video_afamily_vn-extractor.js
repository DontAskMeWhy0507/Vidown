// Module 370 - Savior Video_afamily_vn Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var var_n, var_i;
  requireFn.r(exportsObj);
  var var_o = null === (var_i = null === (var_n = document.querySelector("h2")) ||
  void 0 === var_n ? void 0 : var_n.textContent) || void 0 === var_i ?
  void 0 : var_i.trim(),
  list_a = [],
  obj_s = {
  getDomains: () => ["video.afamily.vn"],
  forceUpdate() {
  var var_t,
  var_e,
  var_r = null === (var_e = null === (var_t = document.querySelector("h2")) ||
  void 0 === var_t ? void 0 : var_t.textContent) || void 0 === var_e ?
  void 0 : var_e.trim();
  var_r !== var_o && (EE.emit("widget.forceUpdate"), var_o = var_r);
  }
  ,
  default: {
  getUrl: param_t => {
  var var_e,
  var_r,
  var_n_1 = param_t.node.closest("[data-vid]"),
  var_i_1 = null == var_n_1 ? void 0 : var_n_1.getAttribute("data-vid"),
  var_o_1 = null == var_i_1 ? void 0 : var_i_1.split("/");
  var_i_1 = (null == var_o_1 ? void 0 : var_o_1.pop()) || (null == var_o_1 ?
  void 0 : var_o_1.pop());
  var var_s = list_a.filter(param_t_1 => param_t_1.url.includes(var_i_1)),
  var_u = Array.from(document.querySelectorAll("h2")).map(param_t_1 => {
  var var_e_1,
  var_r_1,
  var_n_2,
  var_i_2,
  var_o_2 = null === (var_n_2 = null === (var_r_1 = null === (var_e_1 = param_t_1.querySelector(
  "a")) || void 0 === var_e_1 ? void 0 : var_e_1.href.split("/").pop()) ||
  void 0 === var_r_1 ? void 0 : var_r_1.split(".")) || void 0 === var_n_2 ?
  void 0 : var_n_2[0].split("-").slice(0, -1).join("-");
  return {
  title: null === (var_i_2 = param_t_1.textContent) || void 0 === var_i_2 ?
  void 0 : var_i_2.trim(),
  idUrl: var_o_2 || ""
  };
  }
  ),
  var_c = Array.from(document.querySelectorAll("h3")).map(param_t_1 => {
  var var_e_1,
  var_r_1,
  var_n_2,
  var_i_2,
  var_o_2 = null === (var_n_2 = null === (var_r_1 = null === (var_e_1 = param_t_1.querySelector(
  "a")) || void 0 === var_e_1 ? void 0 : var_e_1.href.split("/").pop()) ||
  void 0 === var_r_1 ? void 0 : var_r_1.split(".")) || void 0 === var_n_2 ?
  void 0 : var_n_2[0].split("-").slice(0, -1).join("-");
  return {
  title: null === (var_i_2 = param_t_1.textContent) || void 0 === var_i_2 ?
  void 0 : var_i_2.trim(),
  idUrl: var_o_2 || ""
  };
  }
  );
  if (var_s.length) {
  var var_l = (null === (var_e = var_u.find(param_t_1 => var_i_1.includes(param_t_1.idUrl))) ||
  void 0 === var_e ? void 0 : var_e.title) || (null === (var_r = var_c.find(param_t_1 => var_i_1.includes(
  param_t_1.idUrl))) || void 0 === var_r ? void 0 : var_r.title) ||
  "";
  var_s[0].fixName = var_l;
  }
  return var_s;
  }
  }
  ,
  processRequestIds: param_t => {
  var var_e;
  if (null === (var_e = param_t.pathname) || void 0 === var_e ?
  void 0 : var_e.includes("master.m3u8")) return list_a.push(param_t), !0;
  }
  };
  exportsObj.default = obj_s;
  };
