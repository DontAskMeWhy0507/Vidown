// Module 365 - Savior V_douyu_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var var_n,
  dep_media_constants = requireFn(1),
  dep_url_utils = requireFn(3),
  dep_media_sniffer = requireFn(6),
  var_s = location.href,
  obj_u = {
  }
  ,
  obj_c = {
  getDomains: () => ["v.douyu.com"],
  forceUpdate: () => {
  location.href !== var_s && (EE.emit("widget.forceUpdate"), var_s = location.href);
  }
  ,
  processRequestIds: param_t => {
  var var_e, var_r;
  return var_n = param_t, (null === (var_e = null == param_t ?
  void 0 : param_t.params) || void 0 === var_e ? void 0 : var_e.vid) &&
  (obj_u[(null === (var_r = param_t.params.vid) || void 0 === var_r ?
  void 0 : var_r[0]) || param_t.params.vid] = param_t), !0;
  }
  ,
  getCustomElement: () => {
  var var_t,
  var_e = document.querySelectorAll("demand-video")[0];
  return var_e ? Array.from((null === (var_t = var_e.shadowRoot) ||
  void 0 === var_t ? void 0 : var_t.querySelectorAll("video")) ||
  []).map(param_t => (param_t.$parent = var_e, param_t)) : [];
  }
  ,
  getCustomParent: param_t => param_t.$parent || null,
  parse: {
  default: param_t => {
  var var_e,
  var_r,
  var_n_1,
  var_s_1,
  var_u,
  var_c,
  var_l = param_t.media,
  var_f = param_t.response;
  if (var_l.url.includes("playlist.m3u8")) return Object(dep_media_sniffer.e)(var_f,
  var_l);
  var fn_d = (param_t_1, param_e) => {
  var var_r_1 = Object(dep_url_utils.f)(param_t_1);
  return var_r_1.filename = document.title, var_r_1.quality = dep_media_constants.r[param_e].label,
  var_r_1.resolution = param_e, var_r_1.type = "video", var_r_1;
  }
  ,
  var_h = JSON.parse(var_f),
  list_p = [];
  return (null === (var_n_1 = null === (var_r = null === (var_e = var_h.data) ||
  void 0 === var_e ? void 0 : var_e.thumb_video) || void 0 === var_r ?
  void 0 : var_r.high) || void 0 === var_n_1 ? void 0 : var_n_1.url) &&
  list_p.push(fn_d(var_h.data.thumb_video.high.url, "720p")), (null === (var_c = null === (
  var_u = null === (var_s_1 = var_h.data) || void 0 === var_s_1 ?
  void 0 : var_s_1.thumb_video) || void 0 === var_u ? void 0 :
  var_u.normal) || void 0 === var_c ? void 0 : var_c.url) &&
  list_p.push(fn_d(var_h.data.thumb_video.normal.url, "480p")), list_p;
  }
  }
  ,
  default: {
  getUrl: () => {
  var var_t = location.href.match(/v\.douyu\.com\/show\/([a-z0-9]+)/i);
  if (var_t && var_t[1]) {
  var var_e = obj_u[var_t[1]];
  if (var_e) return [var_e];
  }
  return [var_n];
  }
  }
  };
  exportsObj.default = obj_c;
  };
