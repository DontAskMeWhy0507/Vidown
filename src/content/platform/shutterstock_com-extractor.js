// Module 337 - Savior Shutterstock_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var obj_n = {
  getDomains: () => ["shutterstock.com"],
  default: {
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  if ("preview" === var_e.filename) {
  var var_r = document.querySelector('[data-automation="PlayerInterface_container"] a');
  var_e.filename = var_r ? var_r.innerText : var_e.filename;
  }
  }
  }
  };
  exportsObj.default = obj_n;
  };
