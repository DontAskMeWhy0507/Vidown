// Module 265 - Savior Khophimhay_co Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var obj_n = {
  getDomains: () => ["khophimhays.net"],
  idsProcess: param_t => {
  var var_e = param_t.defaultIds,
  var_r = param_t.id,
  var_n = param_t.index;
  (var_r.size && var_r.size < 131072 || var_r.url.match(/dongphims\.com\/\d+\/\d+\.mp4/i)) &&
  var_e.splice(var_n, 1);
  }
  };
  exportsObj.default = obj_n;
  };
