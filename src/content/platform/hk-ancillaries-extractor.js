// Module 249 - Savior Hk Ancillaries Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var var_n,
  dep_dom_utils = requireFn(0);
  exportsObj.default = {
  getDomains: () => ["hk-ancillaries.s3.amazonaws."],
  onDomScannerInit: param_t => {
  var var_e = Object(dep_dom_utils.queryAll)(param_t.mediaTags.join(", "));
  if ("IFRAME" == var_e[0].nodeName) {
  var var_r = var_e[0];
  var_r.addEventListener("load", () => {
  var var_e_1;
  if (var_r.contentDocument) {
  var var_n_1 = Object(dep_dom_utils.queryAll)(param_t.mediaTags.join(", "), var_r.contentDocument);
  null === (var_e_1 = param_t._observer) || void 0 === var_e_1 ||
  var_e_1.observe(var_r.contentDocument, {
  childList: !0,
  subtree: !0,
  attributeFilter: ["src", "data-src", "hidden", "opened"]
  }
  ), var_n_1.length && param_t.nodeChangedNotifier(var_n_1);
  }
  }
  );
  }
  }
  ,
  default: {
  getUrl: param_t => {
  param_t.url;
  return var_n ? var_n.url : [];
  }
  ,
  mediaObjectChange: param_t => {
  var var_e,
  var_r,
  var_n_1,
  var_i = param_t.mediaObject;
  var_i.filename = null === (var_n_1 = null === (var_r = null === (var_e = document.querySelector(
  "iframe")) || void 0 === var_e ? void 0 : var_e.contentDocument) ||
  void 0 === var_r ? void 0 : var_r.querySelector("p")) || void 0 === var_n_1 ?
  void 0 : var_n_1.innerText, var_i.fixName = var_i.filename;
  }
  }
  ,
  processRequestIds(param_t) {
  if (param_t.url.toString().includes("master.m3u8")) return var_n = param_t, EE.emit(
  "widget.forceUpdate"), !0;
  }
  };
  };
