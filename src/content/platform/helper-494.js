// Module 494 - Savior Helper 494
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var var_n = requireFn(122).rotr32;
  function var_i(param_t, param_e, param_r) {
  return param_t & param_e ^ ~param_t & param_r;
  }
  function var_o(param_t, param_e, param_r) {
  return param_t & param_e ^ param_t & param_r ^ param_e & param_r;
  }
  function var_a(param_t, param_e, param_r) {
  return param_t ^ param_e ^ param_r;
  }
  exportsObj.ft_1 = function (param_t, param_e, param_r, param_n) {
  return 0 === param_t ? var_i(param_e, param_r, param_n) : 1 === param_t ||
  3 === param_t ? var_a(param_e, param_r, param_n) : 2 === param_t ?
  var_o(param_e, param_r, param_n) : void 0;
  }
  , exportsObj.ch32 = var_i, exportsObj.maj32 = var_o, exportsObj.p32 = var_a, exportsObj.s0_256 = function (
  param_t) {
  return var_n(param_t, 2) ^ var_n(param_t, 13) ^ var_n(param_t, 22);
  }
  , exportsObj.s1_256 = function (param_t) {
  return var_n(param_t, 6) ^ var_n(param_t, 11) ^ var_n(param_t, 25);
  }
  , exportsObj.g0_256 = function (param_t) {
  return var_n(param_t, 7) ^ var_n(param_t, 18) ^ param_t >>> 3;
  }
  , exportsObj.g1_256 = function (param_t) {
  return var_n(param_t, 17) ^ var_n(param_t, 19) ^ param_t >>> 10;
  };
  };
