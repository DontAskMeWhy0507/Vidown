// Module 204 - Savior Archive_org Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var var_n;
  requireFn.r(exportsObj);
  var var_i = location.href,
  obj_o = {
  getDomains: () => ["archive.org"],
  getCustomElement: () => [...document.querySelectorAll("play-av")],
  isValidVideoNode: param_t => "play-av" === param_t.tagName.toLowerCase(),
  forceUpdate: () => {
  var_i !== location.href && (var_i = location.href, var_n = null, EE.emit("widget.forceUpdate"));
  }
  ,
  default: {
  getUrl: () => var_n ? [var_n] : []
  }
  ,
  processRequestIds: param_t => (var_n = param_t, !0)
  };
  exportsObj.default = obj_o;
  };
