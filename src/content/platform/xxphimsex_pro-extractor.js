// Module 399 - Savior Xxphimsex_pro Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj), requireFn.d(exportsObj, "_data", function () {
  return obj_o;
  }
  );
  var list_n = [],
  var_i = location.href,
  obj_o = {
  getDomains: () => ["xxphimsex.pro"],
  forceUpdate: () => {
  location.href !== var_i && (EE.emit("widget.forceUpdate"), var_i = location.href);
  }
  ,
  processRequestIds: param_t => {
  if ("string" == typeof param_t.url && (param_t.url.match(/ntkstream.xyz/) ||
  param_t.url.includes(".m3u8"))) return list_n.push(param_t), !0;
  }
  ,
  default: {
  getUrl: param_t => {
  if (list_n.length > 0) return list_n.map(param_e => (param_e.referrer = param_t.url,
  param_e));
  }
  }
  ,
  addNode: () => ["iframe"]
  };
  exportsObj.default = obj_o;
  };
