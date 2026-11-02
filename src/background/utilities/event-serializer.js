// Module 522 [utilities] - Event payload serializer and formatter
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  Object.defineProperty(exportsObj, "__esModule", {
  value: true
  }
  );
  exportsObj.durationStr = exportsObj.humanStr = undefined;
  const regex_n = /^\d+$/;
  const regex_o = /^(?:(?:(\d+):)?(\d{1,2}):)?(\d{1,2})(?:\.(\d{3}))?$/;
  const obj_i = {
  ms: 1,
  s: 1000,
  m: 60000,
  h: 3600000
  };
  exportsObj.humanStr = param_e => {
  if (typeof param_e == "number") {
  return param_e;
  }
  if (regex_n.test(param_e)) {
  return +param_e;
  }
  const var_t = regex_o.exec(param_e);
  if (var_t) {
  return +(var_t[1] || 0) * obj_i.h + +(var_t[2] || 0) * obj_i.m + +var_t[3] * obj_i.s + +(
  var_t[4] || 0);
  }
  {
  let num_t = 0;
  const regex_r = /(-?\d+)(ms|s|m|h)/g;
  let var_n;
  while ((var_n = regex_r.exec(param_e)) !== null) {
  num_t += +var_n[1] * obj_i[var_n[2]];
  }
  return num_t;
  }
  };
  exportsObj.durationStr = param_e => {
  let num_t = 0;
  const regex_r = /(\d+(?:\.\d+)?)(S|M|H)/g;
  let var_n;
  while ((var_n = regex_r.exec(param_e)) !== null) {
  num_t += +var_n[1] * obj_i[var_n[2].toLowerCase()];
  }
  return num_t;
  };
  };
