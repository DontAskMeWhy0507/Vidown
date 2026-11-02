// Module 676 - Savior Fileone Host
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_dom_utils = requireFn(0);
  exportsObj.default = {
  index: 80,
  getUrl(param_t, param_e, param_r, param_i) {
  if (param_t.includes("fileone.tv")) {
  var var_o = document.querySelector("source");
  Object(dep_dom_utils.sendMessage)({
  requestType: "save_url",
  params: {
  url: null == var_o ? void 0 : var_o.src,
  source: location.href
  }
  }
  );
  }
  }
  };
  };
