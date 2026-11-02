// Module 327 - Savior Saigonphim_net Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_extractor_url_merger = requireFn(23),
  dep_stream_cipher_helper = requireFn(31),
  list_o = [],
  var_a = location.href,
  obj_s = {
  getDomains: () => ["saigonphim."],
  default: {
  getUrl: () => list_o
  }
  ,
  processRequestIds: param_t => !!/^(?!.*\d+kb\/hls).*\.m3u8/.test(param_t.url) &&
  (list_o[0] = param_t, !0),
  forceUpdate() {
  location.href !== var_a && (list_o = [], EE.emit("widget.forceUpdate"), var_a = location.href);
  }
  };
  exportsObj.default = Object(dep_extractor_url_merger.a)(dep_stream_cipher_helper.a,
  ["parse", "urls"])(obj_s);
  };
