// Module 320 - Savior Pops_vn Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_format_resolver = requireFn(14),
  dep_media_sniffer = requireFn(6),
  var_o = location.href,
  obj_a = {
  }
  ,
  obj_s = {
  getDomains: () => ["pops.vn", "motphimc."],
  forceUpdate() {
  location.href !== var_o && (EE.emit("widget.forceUpdate"), var_o = location.href);
  }
  ,
  processRequestIds(param_t) {
  var var_e = param_t.url;
  if (var_e.match(/\/index.m3u8/i)) return var_e.includes("maxRes") ||
  (obj_a[location.href] = var_e), !0;
  }
  ,
  parse: {
  default: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return !var_r && var_e.realRes && (var_r = var_e.realRes), (null == var_r ?
  void 0 : var_r.match(/<\?xml.+<mpd/i)) ? Object(dep_format_resolver.b)(var_r, var_e.filename ||
  document.title, var_e.host, var_e.url) : Object(dep_media_sniffer.e)(var_r, var_e);
  }
  }
  ,
  default: {
  getUrl: () => obj_a[location.href]
  }
  };
  exportsObj.default = obj_s;
  };
