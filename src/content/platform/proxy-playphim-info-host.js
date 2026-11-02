// Module 688 - Savior Proxy Playphim Info Host
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj), exportsObj.default = {
  index: 10,
  getUrl(param_t, param_e, param_r, param_n) {
  if (param_t.includes("proxy.playphim.info") && param_e.get("id")) {
  var var_i = "https://proxy.playphim.info/proxy/proxy.php?url=" + param_e.get("id");
  -1 === param_r.requestedUrls.indexOf(var_i) && fetch(var_i).then(param_t_1 => param_t_1.json(
  )).then(param_t_1 => ({
  url: param_t_1,
  referrer: location.href
  }
  ));
  }
  return {
  return: !1,
  data: null
  };
  }
  };
  };
