// Module 106 [utilities] - Stream / runtime utility component (stream-wrapper)
export default function (moduleObj, exportsObj, requireFn) {
  (function (param_e, param_t) {
  (function (param_e_1, param_r) {
  "use strict";
  if (!param_e_1.setImmediate) {
  var var_n;
  var var_o;
  var var_i;
  var var_a;
  var var_s;
  var num_c = 1;
  var obj_u = {
  };
  var flag_l = false;
  var var_d = param_e_1.document;
  var var_p = Object.getPrototypeOf && Object.getPrototypeOf(param_e_1);
  var_p = var_p && var_p.setTimeout ? var_p : param_e_1;
  if ({
  }
  .toString.call(param_e_1.process) === "[object process]") {
  var_n = function (param_e_2) {
  param_t.nextTick(function () {
  var_h(param_e_2);
  }
  );
  };
  }
  else if (!function () {
  if (param_e_1.postMessage && !param_e_1.importScripts) {
  var flag_t = true;
  var var_r = param_e_1.onmessage;
  param_e_1.onmessage = function () {
  flag_t = false;
  };
  param_e_1.postMessage("", "*");
  param_e_1.onmessage = var_r;
  return flag_t;
  }
  }
  ()) {
  if (param_e_1.MessageChannel) {
  (var_i = new MessageChannel()).port1.onmessage = function (param_e_2) {
  var_h(param_e_2.data);
  };
  var_n = function (param_e_2) {
  var_i.port2.postMessage(param_e_2);
  };
  }
  else if (var_d && "onreadystatechange" in var_d.createElement("script")) {
  var_o = var_d.documentElement;
  var_n = function (param_e_2) {
  var var_t = var_d.createElement("script");
  var_t.onreadystatechange = function () {
  var_h(param_e_2);
  var_t.onreadystatechange = null;
  var_o.removeChild(var_t);
  var_t = null;
  };
  var_o.appendChild(var_t);
  };
  }
  else {
  var_n = function (param_e_2) {
  setTimeout(var_h, 0, param_e_2);
  };
  }
  }
  else {
  var_a = "setImmediate$" + Math.random() + "$";
  var_s = function (param_t_1) {
  if (param_t_1.source === param_e_1 && typeof param_t_1.data == "string" &&
  param_t_1.data.indexOf(var_a) === 0) {
  var_h(+param_t_1.data.slice(var_a.length));
  }
  };
  if (param_e_1.addEventListener) {
  param_e_1.addEventListener("message", var_s, false);
  }
  else {
  param_e_1.attachEvent("onmessage", var_s);
  }
  var_n = function (param_t_1) {
  param_e_1.postMessage(var_a + param_t_1, "*");
  };
  }
  var_p.setImmediate = function (param_e_2) {
  if (typeof param_e_2 != "function") {
  param_e_2 = new Function("" + param_e_2);
  }
  for (var var_t = new Array(arguments.length - 1), num_r = 0;
  num_r < var_t.length;
  num_r++) {
  var_t[num_r] = arguments[num_r + 1];
  }
  var obj_o = {
  callback: param_e_2,
  args: var_t
  };
  obj_u[num_c] = obj_o;
  var_n(num_c);
  return num_c++;
  };
  var_p.clearImmediate = var_f;
  }
  function var_f(param_e_2) {
  delete obj_u[param_e_2];
  }
  function var_h(param_e_2) {
  if (flag_l) {
  setTimeout(var_h, 0, param_e_2);
  }
  else {
  var var_t = obj_u[param_e_2];
  if (var_t) {
  flag_l = true;
  try {
  (function (param_e_3) {
  var var_t_1 = param_e_3.callback;
  var var_r = param_e_3.args;
  switch (var_r.length) {
  case 0:
  var_t_1();
  break;
  case 1:
  var_t_1(var_r[0]);
  break;
  case 2:
  var_t_1(var_r[0], var_r[1]);
  break;
  case 3:
  var_t_1(var_r[0], var_r[1], var_r[2]);
  break;
  default:
  var_t_1.apply(undefined, var_r);
  }
  }
  )(var_t);
  }
  finally {
  var_f(param_e_2);
  flag_l = false;
  }
  }
  }
  }
  }
  )(typeof self == "undefined" ? param_e === undefined ? this :
  param_e : self);
  }
  ).call(this, requireFn(13), requireFn(32));
  };
