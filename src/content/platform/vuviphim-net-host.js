// Module 699 - Savior Vuviphim Net Host
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_dom_utils = requireFn(0);
  exportsObj.default = {
  index: 60,
  getUrl(param_t, param_e, param_r, param_i) {
  if (param_t.match(/vuviphim[a-z]+\.net/i) && !param_r.requestedUrls.includes(location.href)) try {
  var var_o = document.querySelector("#player video"),
  var_a = null == var_o ? void 0 : var_o.src;
  param_r.requestedUrls.push(location.href), Object(dep_dom_utils.sendMessage)({
  requestType: "save_url",
  params: {
  url: var_a
  }
  }
  );
  }
  catch (var_t) {
  }
  return {
  return: !1,
  data: null
  };
  }
  };
  };
