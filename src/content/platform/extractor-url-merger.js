// Module 23 - Savior Extractor Url Merger
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  function var_n(param_t, param_e) {
  return param_r => (param_e.forEach(param_e_1 => {
  var var_n_1;
  if ("urls" == param_e_1 && (null === (var_n_1 = param_t.urls) ||
  void 0 === var_n_1 ? void 0 : var_n_1.length) && (param_r.urls ||
  (param_r.urls = []), param_r.urls.unshift(...(param_t.urls ||
  []))), "parse" == param_e_1 && param_t.parse && (param_r.parse ||
  (param_r.parse = {
  }
  ), !param_r.parse.default && param_t.parse.default && (param_r.parse.default = param_t.parse.default),
  param_t.parse.sources && (param_r.parse.sources || (param_r.parse.sources = []),
  param_r.parse.sources.unshift(...(param_t.parse.sources ||
  [])))), "processRequestIds" == param_e_1 && param_t.processRequestIds) if (param_r.processRequestIds) {
  var var_i = param_r.processRequestIds;
  param_r.processRequestIds = param_e_2 => param_t.processRequestIds(param_e_2) ||
  var_i(param_e_2);
  }
  else param_r.processRequestIds = param_t.processRequestIds;
  if ("idsProcess" == param_e_1 && param_t.idsProcess) if (param_r.idsProcess) {
  var var_o = param_r.idsProcess;
  param_r.idsProcess = param_e_2 => {
  param_t.idsProcess(param_e_2), var_o(param_e_2);
  };
  }
  else param_r.idsProcess = param_t.idsProcess;
  if ("default" == param_e_1 && param_t.default) if (param_r.default) {
  if (param_r.default.getUrl || (param_r.default.getUrl = param_t.default.getUrl),
  param_r.default.mediaObjectChange) {
  var var_a = param_r.default.mediaObjectChange;
  param_r.default.mediaObjectChange = param_e_2 => {
  var var_r, var_n_2;
  return null === (var_n_2 = (var_r = param_t.default).mediaObjectChange) ||
  void 0 === var_n_2 || var_n_2.call(var_r, param_e_2), var_a(param_e_2);
  };
  }
  else param_r.default.mediaObjectChange = param_t.default.mediaObjectChange;
  }
  else param_r.default = param_t.default;
  }
  ), param_r);
  }
  requireFn.d(exportsObj, "a", function () {
  return var_n;
  }
  );
  };
