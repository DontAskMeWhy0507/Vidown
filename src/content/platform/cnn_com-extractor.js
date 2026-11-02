// Module 222 - Savior Cnn_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var var_n;
  requireFn.r(exportsObj);
  var var_i = location.href,
  obj_o = {
  getDomains: () => ["edition.cnn.com"],
  forceUpdate() {
  location.href !== var_i && (EE.emit("widget.forceUpdate"), var_i = location.href,
  var_n = void 0);
  }
  ,
  default: {
  getUrl: () => null == var_n ? void 0 : var_n.url
  }
  ,
  processRequestIds(param_t) {
  if (param_t.url.match(/\/proxy(\.\d+)?\.m3u8/i)) return var_n = param_t, !0;
  }
  };
  exportsObj.default = obj_o;
  };
