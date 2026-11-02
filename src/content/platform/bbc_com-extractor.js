// Module 212 - Savior Bbc_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_module_44 = requireFn(44),
  dep_format_resolver = requireFn(14),
  dep_quality_helper = requireFn(9),
  dep_media_constants = requireFn(1),
  dep_dom_utils = requireFn(0),
  dep_dom_helper = requireFn(12);
  function var_c() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var var_t,
  var_e,
  var_r = "function" == typeof Symbol ? Symbol : {
  }
  ,
  var_n = var_r.iterator || "@@iterator",
  var_i = var_r.toStringTag || "@@toStringTag";
  function var_o(param_r, param_n, param_i, param_o) {
  var var_u_1 = param_n && param_n.prototype instanceof var_s ?
  param_n : var_s,
  var_c_1 = Object.create(var_u_1.prototype);
  return var_l(var_c_1, "_invoke", function (param_r_1, param_n_1, param_i_1) {
  var var_o_1,
  var_s_1,
  var_u_2,
  num_c = 0,
  var_l_1 = param_i_1 || [],
  flag_f = !1,
  obj_d = {
  p: 0,
  n: 0,
  v: var_t,
  a: var_h_1,
  f: var_h_1.bind(var_t, 4),
  d: function (param_e, param_r_2) {
  return var_o_1 = param_e, var_s_1 = 0, var_u_2 = var_t, obj_d.n = param_r_2, obj_a;
  }
  };
  function var_h_1(param_r_2, param_n_2) {
  for (var_s_1 = param_r_2, var_u_2 = param_n_2, var_e = 0;
  !flag_f && num_c && !var_i_1 && var_e < var_l_1.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_1[var_e],
  var_h_2 = obj_d.p,
  var_p_2 = var_o_2[2];
  param_r_2 > 3 ? (var_i_1 = var_p_2 === param_n_2) && (var_u_2 = var_o_2[(var_s_1 = var_o_2[4]) ?
  5 : (var_s_1 = 3, 3)], var_o_2[4] = var_o_2[5] = var_t) : var_o_2[0] <= var_h_2 &&
  ((var_i_1 = param_r_2 < 2 && var_h_2 < var_o_2[1]) ? (var_s_1 = 0, obj_d.v = param_n_2,
  obj_d.n = var_o_2[1]) : var_h_2 < var_p_2 && (var_i_1 = param_r_2 < 3 ||
  var_o_2[0] > param_n_2 || param_n_2 > var_p_2) && (var_o_2[4] = param_r_2, var_o_2[5] = param_n_2,
  obj_d.n = var_p_2, var_s_1 = 0));
  }
  if (var_i_1 || param_r_2 > 1) return obj_a;
  throw flag_f = !0, param_n_2;
  }
  return function (param_i_2, param_l, param_p) {
  if (num_c > 1) throw TypeError("Generator is already running");
  for (flag_f && 1 === param_l && var_h_1(param_l, param_p), var_s_1 = param_l, var_u_2 = param_p;
  (var_e = var_s_1 < 2 ? var_t : var_u_2) || !flag_f;
  ) {
  var_o_1 || (var_s_1 ? var_s_1 < 3 ? (var_s_1 > 1 && (obj_d.n = -1), var_h_1(var_s_1,
  var_u_2)) : obj_d.n = var_u_2 : obj_d.v = var_u_2);
  try {
  if (num_c = 2, var_o_1) {
  if (var_s_1 || (param_i_2 = "next"), var_e = var_o_1[param_i_2]) {
  if (!(var_e = var_e.call(var_o_1, var_u_2))) throw TypeError("iterator result is not an object");
  if (!var_e.done) return var_e;
  var_u_2 = var_e.value, var_s_1 < 2 && (var_s_1 = 0);
  }
  else 1 === var_s_1 && (var_e = var_o_1.return) && var_e.call(var_o_1), var_s_1 < 2 &&
  (var_u_2 = TypeError("The iterator does not provide a '" + param_i_2 + "' method"),
  var_s_1 = 1);
  var_o_1 = var_t;
  }
  else if ((var_e = (flag_f = obj_d.n < 0) ? var_u_2 : param_r_1.call(param_n_1,
  obj_d)) !== obj_a) break;
  }
  catch (var_e_1) {
  var_o_1 = var_t, var_s_1 = 1, var_u_2 = var_e_1;
  }
  finally {
  num_c = 1;
  }
  }
  return {
  value: var_e,
  done: flag_f
  };
  };
  }
  (param_r, param_i, param_o), !0), var_c_1;
  }
  var obj_a = {
  };
  function var_s() {
  }
  function var_u() {
  }
  function var_f_1() {
  }
  var_e = Object.getPrototypeOf;
  var var_d = [][var_n] ? var_e(var_e([][var_n]())) : (var_l(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_h = var_f_1.prototype = var_s.prototype = Object.create(var_d);
  function var_p_1(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_f_1) :
  (param_t.__proto__ = var_f_1, var_l(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h), param_t;
  }
  return var_u.prototype = var_f_1, var_l(var_h, "constructor", var_f_1), var_l(
  var_f_1, "constructor", var_u), var_u.displayName = "GeneratorFunction", var_l(
  var_f_1, var_i, "GeneratorFunction"), var_l(var_h), var_l(var_h, var_i, "Generator"),
  var_l(var_h, var_n, function () {
  return this;
  }
  ), var_l(var_h, "toString", function () {
  return "[object Generator]";
  }
  ), (var_c = function () {
  return {
  w: var_o,
  m: var_p_1
  };
  }
  )();
  }
  function var_l(param_t, param_e, param_r, param_n) {
  var var_i = Object.defineProperty;
  try {
  var_i({
  }
  , "", {
  }
  );
  }
  catch (var_t) {
  var_i = 0;
  }
  (var_l = function (param_t_1, param_e_1, param_r_1, param_n_1) {
  function var_o(param_e_2, param_r_2) {
  var_l(param_t_1, param_e_2, function (param_t_2) {
  return this._invoke(param_e_2, param_r_2, param_t_2);
  }
  );
  }
  param_e_1 ? var_i ? var_i(param_t_1, param_e_1, {
  value: param_r_1,
  enumerable: !param_n_1,
  configurable: !param_n_1,
  writable: !param_n_1
  }
  ) : param_t_1[param_e_1] = param_r_1 : (var_o("next", 0), var_o("throw", 1), var_o(
  "return", 2));
  }
  )(param_t, param_e, param_r, param_n);
  }
  var var_f,
  fn_d = function (param_t, param_e, param_r, param_n) {
  return new (param_r || (param_r = Promise))(function (param_i, param_o) {
  function var_a(param_t_1) {
  try {
  var_u(param_n.next(param_t_1));
  }
  catch (var_t) {
  param_o(var_t);
  }
  }
  function var_s(param_t_1) {
  try {
  var_u(param_n.throw(param_t_1));
  }
  catch (var_t) {
  param_o(var_t);
  }
  }
  function var_u(param_t_1) {
  var var_e;
  param_t_1.done ? param_i(param_t_1.value) : (var_e = param_t_1.value, var_e instanceof param_r ?
  var_e : new param_r(function (param_t_2) {
  param_t_2(var_e);
  }
  )).then(var_a, var_s);
  }
  var_u((param_n = param_n.apply(param_t, param_e || [])).next());
  }
  );
  }
  ,
  list_h = [],
  var_p = null === (var_f = document.querySelector("h3")) ||
  void 0 === var_f ? void 0 : var_f.innerText,
  obj_v = {
  getDomains: () => ["bbc.com"],
  isValidVideoNode: param_t => !param_t.closest('div.tp-iframe-wrapper[role="dialog"]') &&
  Object(dep_dom_helper.m)(param_t),
  getCustomElement: () => {
  var var_t,
  var_e,
  var_r = document.querySelector("smp-toucan-player");
  if (!var_r) return [];
  var var_n = null === (var_t = var_r.shadowRoot) || void 0 === var_t ?
  void 0 : var_t.querySelector("smp-playback");
  return var_n ? Array.from((null === (var_e = var_n.shadowRoot) ||
  void 0 === var_e ? void 0 : var_e.querySelectorAll("video")) ||
  []).map(param_t => (param_t.$parent = var_r, param_t)) : [];
  }
  ,
  forceUpdate: () => {
  var var_t,
  var_e = null === (var_t = document.querySelector("h3")) ||
  void 0 === var_t ? void 0 : var_t.innerText;
  var_p !== var_e && (EE.emit("widget.forceUpdate"), var_p = var_e);
  }
  ,
  getCustomParent: () => document.querySelector("smp-toucan-player"),
  parse: {
  sources: [{
  checkSource: () => location.host.includes("bbc.com"),
  parse: () => fn_d(void 0, void 0, void 0, var_c().m(function var_t() {
  var var_e, var_r, var_u, var_l_1, var_f_1, var_d, var_p_1, var_v, var_m, var_y,
  var_g, var_b, var_w, var_A, var__, var_E, var_S, var_O, var_x, var_k, var_M, var_T,
  var_I, var_j, var_C;
  return var_c().w(function (param_t) {
  for (;;
  ) switch (param_t.p = param_t.n) {
  case 0:
  if (!(list_h.length > 0)) {
  param_t.n = 4;
  break;
  }
  return var_p_1 = list_h[0], list_h = [], param_t.n = 1, fetch(var_p_1.url).then(
  param_t_1 => param_t_1.text());
  case 1:
  return var_v = param_t.v, var_m = null === (var_e = document.querySelector("h3")) ||
  void 0 === var_e ? void 0 : var_e.innerText, var_y = {
  filename: var_m
  }
  , var_g = new URL(var_p_1.url), (var_b = var_g.pathname.split("/")).pop(), var_b.join(
  "/"), var_w = var_b.join("/"), var_A = var_g.origin + var_w, var__ = Object(dep_module_44.parse)(
  var_v, {
  attributeNamePrefix: "",
  attrNodeName: "@",
  textNodeName: "#text",
  ignoreAttributes: !1,
  cdataTagName: "__cdata"
  }
  ), param_t.p = 2, var_E = var__.MPD.Period.AdaptationSet, var_S = null === (var_r = var__.MPD["@"]) ||
  void 0 === var_r ? void 0 : var_r.mediaPresentationDuration, var_O = Object(dep_format_resolver.i)(
  var_S), var_x = Object.keys(var_E).find(param_t_1 => var_E[param_t_1]["@"].mimeType.includes(
  "video")), var_k = Object.keys(var_E).find(param_t_1 => var_E[param_t_1]["@"].mimeType.includes(
  "audio")), var_M = var_E[var_x].Representation, var_T = null === (var_l_1 = null === (
  var_u = var_E[var_k]) || void 0 === var_u ? void 0 : var_u.SegmentTemplate) ||
  void 0 === var_l_1 ? void 0 : var_l_1["@"], var_I = var_E[var_k].Representation["@"].id,
  var_j = null === (var_d = null === (var_f_1 = var_E[var_k]) ||
  void 0 === var_f_1 ? void 0 : var_f_1.SegmentTemplate) || void 0 === var_d ?
  void 0 : var_d["@"], param_t.a(2, var_M.map(param_t_1 => {
  var var_e_1, var_r_1, var_n;
  if (var_T) {
  var var_u_1 = param_t_1["@"],
  var_c_1 = Math.ceil(var_O / (var_T.duration / var_T.timescale));
  var_r_1 = var_T.initialization.replace(/\$RepresentationID\$/, var_u_1.id), (var_n = [dep_format_resolver.h]).push(
  `<Initialization sourceURL="${var_A + "/dash/" + var_r_1}
  
  
  "/>`);
  for (var num_l = 1;
  num_l < var_c_1;
  num_l++) {
  var var_f_2 = num_l.toString(),
  var_d_1 = var_f_2.length < 2 ? new Array(2 - var_f_2.length + 1).join("") + num_l :
  var_f_2,
  var_h = var_T.media.replace(/\$RepresentationID\$/, var_u_1.id).replace(/\$Number\$/,
  var_d_1);
  var_n.push(`<SegmentURL media="${var_A + "/dash/" + var_h}
  
  
  "/>`);
  }
  var_n.push('</SegmentList>\n                                                </Representation>\n                                        </AdaptationSet>\n                                        <AdaptationSet lang="en" mimeType="audio/mp4" codecs="mp4a.40.2" bitmovin:label="English stereo">\n                                            <Representation id="4" mimeType="audio/mp4" codecs="mp4a.40.2" audioSamplingRate="48000" startWithSAP="1" bandwidth="98414">\n                                                <SegmentList duration="10">'),
  var_n.push(`<Initialization sourceURL="${var_A + "/dash/" + var_j.initialization.replace(
  /\$RepresentationID\$/, var_I)}
  
  
  "/>`);
  for (var num_p = 1;
  num_p < var_c_1;
  num_p++) {
  var var_v_1 = num_p.toString(),
  var_m_1 = var_v_1.length < 2 ? new Array(2 - var_v_1.length + 1).join("") + num_p :
  var_v_1,
  var_g_1 = var_j.media.replace(/\$RepresentationID\$/, var_I).replace(/\$Number\$/,
  var_m_1);
  var_n.push(`<SegmentURL media="${var_A + "/dash/" + var_g_1}
  
  
  "/>`);
  }
  var_n.push("</SegmentList>\n                                                </Representation>\n                                            </AdaptationSet>\n                                        </Period>\n                                    </MPD>");
  }
  else var_r_1 = {
  videoUrl: param_t_1.BaseURL,
  audioUrl: var_E[var_k].Representation.BaseURL
  };
  var var_b_1,
  var_w_1 = param_t_1["@"].height + "p",
  var___1 = dep_quality_helper.b.getQualityBySize(var_w_1);
  try {
  var_b_1 = var_y.i18n_quality || Object(dep_dom_utils.i18n)(null === (var_e_1 = dep_media_constants.r[var_w_1]) ||
  void 0 === var_e_1 ? void 0 : var_e_1.i18n_label) || var___1;
  }
  catch (var_t_1) {
  var_b_1 = var___1;
  }
  var var_S_1 = Object.assign({
  }
  , var_y, {
  url: var_r_1,
  resolution: var_w_1,
  quality: var___1,
  i18n_quality: var_b_1,
  play_list: null == var_n ? void 0 : var_n.join("\n"),
  type: "video",
  ext: "mp4",
  _isDashMPD: !!var_n
  }
  );
  return var_T || (var_S_1.extraData || (var_S_1.extraData = []), var_S_1.extraData.push(
  {
  name: "downloadRangeRequest",
  value: "true"
  }
  )), var_S_1.url = location.href, var_S_1;
  }
  ));
  case 3:
  return param_t.p = 3, var_C = param_t.v, console.warn(var_C), param_t.a(2, Promise.resolve(
  null));
  case 4:
  return param_t.a(2, []);
  }
  }
  , var_t, null, [[2, 3]]);
  }
  ))
  }
  ]
  }
  ,
  urls: [{
  checkUrl: () => !0,
  getUrl: () => {
  var var_t,
  var_e = null === (var_t = document.querySelector("h3")) ||
  void 0 === var_t ? void 0 : var_t.innerText;
  if (list_h.length > 0 && var_p === var_e) return list_h[0].url;
  }
  }
  ],
  processRequestIds: param_t => {
  var var_e;
  return param_t.url.includes("master.mpd") && (null === (var_e = list_h[0]) ||
  void 0 === var_e ? void 0 : var_e.url) !== param_t.url && (list_h[0] = param_t),
  !0;
  }
  };
  exportsObj.default = obj_v;
  };
