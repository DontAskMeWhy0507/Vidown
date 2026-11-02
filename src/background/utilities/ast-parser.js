// Module 37 [utilities] - Stream / runtime utility component (ast-parser)
export default function (moduleObj, exportsObj, requireFn) {
  const list_n = ["features", "next", "ranges", "module", "sourceType", "globalReturn"];
  function var_o(param_e, param_t) {
  var var_r = Object.keys(param_e);
  if (Object.getOwnPropertySymbols) {
  var var_n = Object.getOwnPropertySymbols(param_e);
  if (param_t) {
  var_n = var_n.filter(function (param_t_1) {
  return Object.getOwnPropertyDescriptor(param_e, param_t_1).enumerable;
  }
  );
  }
  var_r.push.apply(var_r, var_n);
  }
  return var_r;
  }
  function var_i(param_e) {
  for (var num_t = 1;
  num_t < arguments.length;
  num_t++) {
  var var_r = arguments[num_t] ?? {
  };
  if (num_t % 2) {
  var_o(Object(var_r), true).forEach(function (param_t) {
  var_a(param_e, param_t, var_r[param_t]);
  }
  );
  }
  else if (Object.getOwnPropertyDescriptors) {
  Object.defineProperties(param_e, Object.getOwnPropertyDescriptors(var_r));
  }
  else {
  var_o(Object(var_r)).forEach(function (param_t) {
  Object.defineProperty(param_e, param_t, Object.getOwnPropertyDescriptor(var_r,
  param_t));
  }
  );
  }
  }
  return param_e;
  }
  function var_a(param_e, param_t, param_r) {
  if ((param_t = function (param_e_1) {
  var var_t = function (param_e_2, param_t_1) {
  if (typeof param_e_2 != "object" || !param_e_2) {
  return param_e_2;
  }
  var var_r = param_e_2[Symbol.toPrimitive];
  if (var_r !== undefined) {
  var var_n = var_r.call(param_e_2, param_t_1 || "default");
  if (typeof var_n != "object") {
  return var_n;
  }
  throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (param_t_1 === "string" ? String : Number)(param_e_2);
  }
  (param_e_1, "string");
  if (typeof var_t == "symbol") {
  return var_t;
  }
  else {
  return var_t + "";
  }
  }
  (param_t)) in param_e) {
  Object.defineProperty(param_e, param_t, {
  value: param_r,
  enumerable: true,
  configurable: true,
  writable: true
  }
  );
  }
  else {
  param_e[param_t] = param_r;
  }
  return param_e;
  }
  (function (param_e) {
  "use strict";
  const var_t = ((param_e_1, param_t) => {
  const var_r = new Uint32Array(69632);
  let num_n = 0;
  let num_o = 0;
  while (num_n < 2597) {
  const var_i_1 = param_e_1[num_n++];
  if (var_i_1 < 0) {
  num_o -= var_i_1;
  }
  else {
  let var_a_1 = param_e_1[num_n++];
  if (var_i_1 & 2) {
  var_a_1 = param_t[var_a_1];
  }
  if (var_i_1 & 1) {
  var_r.fill(var_a_1, num_o, num_o += param_e_1[num_n++]);
  }
  else {
  var_r[num_o++] = var_a_1;
  }
  }
  }
  return var_r;
  }
  )([-1, 2, 26, 2, 27, 2, 5, -1, 0, 77595648, 3, 44, 2, 3, 0, 14, 2, 61, 2, 62, 3,
  0, 3, 0, 3168796671, 0, 4294956992, 2, 1, 2, 0, 2, 41, 3, 0, 4, 0, 4294966523,
  3, 0, 4, 2, 16, 2, 63, 2, 0, 0, 4294836735, 0, 3221225471, 0, 4294901942, 2, 64,
  0, 134152192, 3, 0, 2, 0, 4294951935, 3, 0, 2, 0, 2683305983, 0, 2684354047, 2,
  17, 2, 0, 0, 4294961151, 3, 0, 2, 2, 19, 2, 0, 0, 608174079, 2, 0, 2, 58, 2, 7,
  2, 6, 0, 4286643967, 3, 0, 2, 2, 1, 3, 0, 3, 0, 4294901711, 2, 40, 0, 4089839103,
  0, 2961209759, 0, 1342439375, 0, 4294543342, 0, 3547201023, 0, 1577204103, 0, 4194240,
  0, 4294688750, 2, 2, 0, 80831, 0, 4261478351, 0, 4294549486, 2, 2, 0, 2967484831,
  0, 196559, 0, 3594373100, 0, 3288319768, 0, 8469959, 0, 65472, 2, 3, 0, 4093640191,
  0, 929054175, 0, 65487, 0, 4294828015, 0, 4092591615, 0, 1885355487, 0, 982991,
  2, 3, 2, 0, 0, 2163244511, 0, 4227923919, 0, 4236247022, 2, 69, 0, 4284449919,
  0, 851904, 2, 4, 2, 12, 0, 67076095, -1, 2, 70, 0, 1073741743, 0, 4093607775, -1,
  0, 50331649, 0, 3265266687, 2, 33, 0, 4294844415, 0, 4278190047, 2, 20, 2, 137,
  -1, 3, 0, 2, 2, 23, 2, 0, 2, 9, 2, 0, 2, 15, 2, 22, 3, 0, 10, 2, 72, 2, 0, 2, 73,
  2, 74, 2, 75, 2, 0, 2, 76, 2, 0, 2, 11, 0, 261632, 2, 25, 3, 0, 2, 2, 13, 2, 4,
  3, 0, 18, 2, 77, 2, 5, 3, 0, 2, 2, 78, 0, 2151677951, 2, 29, 2, 10, 0, 909311,
  3, 0, 2, 0, 814743551, 2, 48, 0, 67090432, 3, 0, 2, 2, 42, 2, 0, 2, 6, 2, 0, 2,
  30, 2, 8, 0, 268374015, 2, 108, 2, 51, 2, 0, 2, 79, 0, 134153215, -1, 2, 7, 2,
  0, 2, 8, 0, 2684354559, 0, 67044351, 0, 3221160064, 2, 9, 2, 18, 3, 0, 2, 2, 53,
  0, 1046528, 3, 0, 3, 2, 10, 2, 0, 2, 127, 0, 4294960127, 2, 9, 2, 6, 2, 11, 0,
  4294377472, 2, 12, 3, 0, 16, 2, 13, 2, 0, 2, 80, 2, 9, 2, 0, 2, 81, 2, 82, 2, 83,
  0, 12288, 2, 54, 0, 1048577, 2, 84, 2, 14, -1, 2, 14, 0, 131042, 2, 85, 2, 86,
  2, 87, 2, 0, 2, 34, -83, 3, 0, 7, 0, 1046559, 2, 0, 2, 15, 2, 0, 0, 2147516671,
  2, 21, 3, 88, 2, 2, 0, -16, 2, 89, 0, 524222462, 2, 4, 2, 0, 0, 4269801471, 2,
  4, 3, 0, 2, 2, 28, 2, 16, 3, 0, 2, 2, 49, 2, 0, -1, 2, 17, -16, 3, 0, 206, -2,
  3, 0, 692, 2, 71, -1, 2, 17, 2, 9, 3, 0, 8, 2, 91, 2, 18, 2, 0, 0, 3220242431,
  3, 0, 3, 2, 19, 2, 92, 2, 93, 3, 0, 2, 2, 94, 2, 0, 2, 20, 2, 95, 2, 0, 0, 4351,
  2, 0, 2, 10, 3, 0, 2, 0, 67043391, 0, 3909091327, 2, 0, 2, 24, 2, 10, 2, 20, 3,
  0, 2, 0, 67076097, 2, 8, 2, 0, 2, 21, 0, 67059711, 0, 4236247039, 3, 0, 2, 0, 939524103,
  0, 8191999, 2, 99, 2, 100, 2, 22, 2, 23, 3, 0, 3, 0, 67057663, 3, 0, 349, 2, 101,
  2, 102, 2, 7, -264, 3, 0, 11, 2, 24, 3, 0, 2, 2, 32, -1, 0, 3774349439, 2, 103,
  2, 104, 3, 0, 2, 2, 19, 2, 105, 3, 0, 10, 2, 9, 2, 17, 2, 0, 2, 46, 2, 0, 2, 31,
  2, 106, 2, 25, 0, 1638399, 0, 57344, 2, 107, 3, 0, 3, 2, 20, 2, 26, 2, 27, 2, 5,
  2, 28, 2, 0, 2, 8, 2, 109, -1, 2, 110, 2, 111, 2, 112, -1, 3, 0, 3, 2, 12, -2,
  2, 0, 2, 29, -3, 0, 536870912, -4, 2, 20, 2, 0, 2, 36, 0, 1, 2, 0, 2, 65, 2, 6,
  2, 12, 2, 9, 2, 0, 2, 113, -1, 3, 0, 4, 2, 9, 2, 23, 2, 114, 2, 7, 2, 0, 2, 115,
  2, 0, 2, 116, 2, 117, 2, 118, 2, 0, 2, 10, 3, 0, 9, 2, 21, 2, 30, 2, 31, 2, 119,
  2, 120, -2, 2, 121, 2, 122, 2, 30, 2, 21, 2, 8, -2, 2, 123, 2, 30, 3, 32, 2, -1,
  2, 0, 2, 39, -2, 0, 4277137519, 0, 2269118463, -1, 3, 20, 2, -1, 2, 33, 2, 38,
  2, 0, 3, 30, 2, 2, 35, 2, 19, -3, 3, 0, 2, 2, 34, -1, 2, 0, 2, 35, 2, 0, 2, 35,
  2, 0, 2, 47, 2, 0, 0, 4294950463, 2, 37, -7, 2, 0, 0, 203775, 2, 125, 0, 4227858432,
  2, 20, 2, 43, 2, 36, 2, 17, 2, 37, 2, 17, 2, 124, 2, 21, 3, 0, 2, 2, 38, 0, 2151677888,
  2, 0, 2, 12, 0, 4294901764, 2, 145, 2, 0, 2, 56, 2, 55, 0, 5242879, 3, 0, 2, 0,
  402644511, -1, 2, 128, 2, 39, 0, 3, -1, 2, 129, 2, 130, 2, 0, 0, 67045375, 2, 40,
  0, 4226678271, 0, 3766565279, 0, 2039759, 2, 132, 2, 41, 0, 1046437, 0, 6, 3, 0,
  2, 0, 3288270847, 0, 3, 3, 0, 2, 0, 67043519, -5, 2, 0, 0, 4282384383, 0, 1056964609,
  -1, 3, 0, 2, 0, 67043345, -1, 2, 0, 2, 42, 2, 23, 2, 50, 2, 11, 2, 59, 2, 38, -5,
  2, 0, 2, 12, -3, 3, 0, 2, 0, 2147484671, 2, 133, 0, 4190109695, 2, 52, -2, 2, 134,
  0, 4244635647, 0, 27, 2, 0, 2, 8, 2, 43, 2, 0, 2, 66, 2, 17, 2, 0, 2, 42, -3, 2,
  31, -2, 2, 0, 2, 45, 2, 57, 2, 44, 2, 45, 2, 135, 2, 46, 0, 8388351, -2, 2, 136,
  0, 3028287487, 2, 47, 2, 138, 0, 33259519, 2, 23, 2, 7, 2, 48, -7, 2, 21, 0, 4294836223,
  0, 3355443199, 0, 134152199, -2, 2, 67, -2, 3, 0, 28, 2, 32, -3, 3, 0, 3, 2, 49,
  3, 0, 6, 2, 50, -81, 2, 17, 3, 0, 2, 2, 36, 3, 0, 33, 2, 25, 2, 30, 3, 0, 124,
  2, 12, 3, 0, 18, 2, 38, -213, 2, 0, 2, 32, -54, 3, 0, 17, 2, 42, 2, 8, 2, 23, 2,
  0, 2, 8, 2, 23, 2, 51, 2, 0, 2, 21, 2, 52, 2, 139, 2, 25, -13, 2, 0, 2, 53, -6,
  3, 0, 2, -1, 2, 140, 2, 10, -1, 3, 0, 2, 0, 4294936575, 2, 0, 0, 4294934783, -2,
  0, 8323099, 3, 0, 230, 2, 30, 2, 54, 2, 8, -3, 3, 0, 3, 2, 35, -271, 2, 141, 3,
  0, 9, 2, 142, 2, 143, 2, 55, 3, 0, 11, 2, 7, -72, 3, 0, 3, 2, 144, 0, 1677656575,
  -130, 2, 26, -16, 2, 0, 2, 24, 2, 38, -16, 0, 4161266656, 0, 4071, 0, 15360, -4,
  0, 28, -13, 3, 0, 2, 2, 56, 2, 0, 2, 146, 2, 147, 2, 60, 2, 0, 2, 148, 2, 149,
  2, 150, 3, 0, 10, 2, 151, 2, 152, 2, 22, 3, 56, 2, 3, 153, 2, 3, 57, 2, 0, 4294954999,
  2, 0, -16, 2, 0, 2, 90, 2, 0, 0, 2105343, 0, 4160749584, 0, 65534, -34, 2, 8, 2,
  155, -6, 0, 4194303871, 0, 4294903771, 2, 0, 2, 58, 2, 98, -3, 2, 0, 0, 1073684479,
  0, 17407, -9, 2, 17, 2, 49, 2, 0, 2, 32, -14, 2, 17, 2, 32, -6, 2, 17, 2, 12, -6,
  2, 8, 0, 3225419775, -7, 2, 156, 3, 0, 6, 0, 8323103, -1, 3, 0, 2, 2, 59, -37,
  2, 60, 2, 157, 2, 158, 2, 159, 2, 160, 2, 161, -105, 2, 26, -32, 3, 0, 1335, -1,
  3, 0, 136, 2, 9, 3, 0, 180, 2, 24, 3, 0, 233, 2, 162, 3, 0, 18, 2, 9, -77, 3, 0,
  16, 2, 9, -47, 3, 0, 154, 2, 6, 3, 0, 264, 2, 32, -22116, 3, 0, 7, 2, 25, -6130,
  3, 5, 2, -1, 0, 69207040, 3, 44, 2, 3, 0, 14, 2, 61, 2, 62, -3, 0, 3168731136,
  0, 4294956864, 2, 1, 2, 0, 2, 41, 3, 0, 4, 0, 4294966275, 3, 0, 4, 2, 16, 2, 63,
  2, 0, 2, 34, -1, 2, 17, 2, 64, -1, 2, 0, 0, 2047, 0, 4294885376, 3, 0, 2, 0, 3145727,
  0, 2617294944, 0, 4294770688, 2, 25, 2, 65, 3, 0, 2, 0, 131135, 2, 96, 0, 70256639,
  0, 71303167, 0, 272, 2, 42, 2, 6, 0, 65279, 2, 0, 2, 48, -1, 2, 97, 2, 66, 0, 4278255616,
  0, 4294836227, 0, 4294549473, 0, 600178175, 0, 2952806400, 0, 268632067, 0, 4294543328,
  0, 57540095, 0, 1577058304, 0, 1835008, 0, 4294688736, 2, 68, 2, 67, 0, 33554435,
  2, 131, 2, 68, 0, 2952790016, 0, 131075, 0, 3594373096, 0, 67094296, 2, 67, -1,
  0, 4294828000, 0, 603979263, 0, 922746880, 0, 3, 0, 4294828001, 0, 602930687, 0,
  1879048192, 0, 393219, 0, 4294828016, 0, 671088639, 0, 2154840064, 0, 4227858435,
  0, 4236247008, 2, 69, 2, 38, -1, 2, 4, 0, 917503, 2, 38, -1, 2, 70, 0, 537788335,
  0, 4026531935, -1, 0, 1, -1, 2, 33, 2, 71, 0, 7936, -3, 2, 0, 0, 2147485695, 0,
  1010761728, 0, 4292984930, 0, 16387, 2, 0, 2, 15, 2, 22, 3, 0, 10, 2, 72, 2, 0,
  2, 73, 2, 74, 2, 75, 2, 0, 2, 76, 2, 0, 2, 12, -1, 2, 25, 3, 0, 2, 2, 13, 2, 4,
  3, 0, 18, 2, 77, 2, 5, 3, 0, 2, 2, 78, 0, 2147745791, 3, 19, 2, 0, 122879, 2, 0,
  2, 10, 0, 276824064, -2, 3, 0, 2, 2, 42, 2, 0, 0, 4294903295, 2, 0, 2, 30, 2, 8,
  -1, 2, 17, 2, 51, 2, 0, 2, 79, 2, 48, -1, 2, 21, 2, 0, 2, 29, -2, 0, 128, -2, 2,
  28, 2, 10, 0, 8160, -1, 2, 126, 0, 4227907585, 2, 0, 2, 37, 2, 0, 2, 50, 0, 4227915776,
  2, 9, 2, 6, 2, 11, -1, 0, 74440192, 3, 0, 6, -2, 3, 0, 8, 2, 13, 2, 0, 2, 80, 2,
  9, 2, 0, 2, 81, 2, 82, 2, 83, -3, 2, 84, 2, 14, -3, 2, 85, 2, 86, 2, 87, 2, 0,
  2, 34, -83, 3, 0, 7, 0, 817183, 2, 0, 2, 15, 2, 0, 0, 33023, 2, 21, 3, 88, 2, -17,
  2, 89, 0, 524157950, 2, 4, 2, 0, 2, 90, 2, 4, 2, 0, 2, 22, 2, 28, 2, 16, 3, 0,
  2, 2, 49, 2, 0, -1, 2, 17, -16, 3, 0, 206, -2, 3, 0, 692, 2, 71, -1, 2, 17, 2,
  9, 3, 0, 8, 2, 91, 0, 3072, 2, 0, 0, 2147516415, 2, 9, 3, 0, 2, 2, 25, 2, 92, 2,
  93, 3, 0, 2, 2, 94, 2, 0, 2, 20, 2, 95, 0, 4294965179, 0, 7, 2, 0, 2, 10, 2, 93,
  2, 10, -1, 0, 1761345536, 2, 96, 0, 4294901823, 2, 38, 2, 20, 2, 97, 2, 35, 2,
  98, 0, 2080440287, 2, 0, 2, 34, 2, 154, 0, 3296722943, 2, 0, 0, 1046675455, 0,
  939524101, 0, 1837055, 2, 99, 2, 100, 2, 22, 2, 23, 3, 0, 3, 0, 7, 3, 0, 349, 2,
  101, 2, 102, 2, 7, -264, 3, 0, 11, 2, 24, 3, 0, 2, 2, 32, -1, 0, 2700607615, 2,
  103, 2, 104, 3, 0, 2, 2, 19, 2, 105, 3, 0, 10, 2, 9, 2, 17, 2, 0, 2, 46, 2, 0,
  2, 31, 2, 106, -3, 2, 107, 3, 0, 3, 2, 20, -1, 3, 5, 2, 2, 108, 2, 0, 2, 8, 2,
  109, -1, 2, 110, 2, 111, 2, 112, -1, 3, 0, 3, 2, 12, -2, 2, 0, 2, 29, -8, 2, 20,
  2, 0, 2, 36, -1, 2, 0, 2, 65, 2, 6, 2, 30, 2, 9, 2, 0, 2, 113, -1, 3, 0, 4, 2,
  9, 2, 17, 2, 114, 2, 7, 2, 0, 2, 115, 2, 0, 2, 116, 2, 117, 2, 118, 2, 0, 2, 10,
  3, 0, 9, 2, 21, 2, 30, 2, 31, 2, 119, 2, 120, -2, 2, 121, 2, 122, 2, 30, 2, 21,
  2, 8, -2, 2, 123, 2, 30, 3, 32, 2, -1, 2, 0, 2, 39, -2, 0, 4277075969, 2, 30, -1,
  3, 20, 2, -1, 2, 33, 2, 124, 2, 0, 3, 30, 2, 2, 35, 2, 19, -3, 3, 0, 2, 2, 34,
  -1, 2, 0, 2, 35, 2, 0, 2, 35, 2, 0, 2, 50, 2, 96, 0, 4294934591, 2, 37, -7, 2,
  0, 0, 197631, 2, 125, -1, 2, 20, 2, 43, 2, 37, 2, 17, 0, 3, 2, 17, 2, 124, 2, 21,
  2, 126, 2, 127, -1, 0, 2490368, 2, 126, 2, 25, 2, 17, 2, 34, 2, 126, 2, 38, 0,
  4294901904, 0, 4718591, 2, 126, 2, 35, 0, 335544350, -1, 2, 128, 0, 2147487743,
  0, 1, -1, 2, 129, 2, 130, 2, 8, -1, 2, 131, 2, 68, 0, 3758161920, 0, 3, 2, 132,
  0, 12582911, 0, 655360, -1, 2, 0, 2, 29, 0, 2147485568, 0, 3, 2, 0, 2, 25, 0, 176,
  -5, 2, 0, 2, 49, 0, 251658240, -1, 2, 0, 2, 25, 0, 16, -1, 2, 0, 0, 16779263, -2,
  2, 12, -1, 2, 38, -5, 2, 0, 2, 18, -3, 3, 0, 2, 2, 54, 2, 133, 0, 2147549183, 0,
  2, -2, 2, 134, 2, 36, 0, 10, 0, 4294965249, 0, 67633151, 0, 4026597376, 2, 0, 0,
  536871935, 2, 17, 2, 0, 2, 42, -6, 2, 0, 0, 1, 2, 57, 2, 49, 0, 1, 2, 135, 2, 25,
  -3, 2, 136, 2, 36, 2, 137, 2, 138, 0, 16778239, 2, 17, 2, 7, -8, 2, 35, 0, 4294836212,
  2, 10, -3, 2, 67, -2, 3, 0, 28, 2, 32, -3, 3, 0, 3, 2, 49, 3, 0, 6, 2, 50, -81,
  2, 17, 3, 0, 2, 2, 36, 3, 0, 33, 2, 25, 0, 126, 3, 0, 124, 2, 12, 3, 0, 18, 2,
  38, -213, 2, 9, -55, 3, 0, 17, 2, 42, 2, 8, 2, 17, 2, 0, 2, 8, 2, 17, 2, 58, 2,
  0, 2, 25, 2, 50, 2, 139, 2, 25, -13, 2, 0, 2, 71, -6, 3, 0, 2, -1, 2, 140, 2, 10,
  -1, 3, 0, 2, 0, 67583, -1, 2, 105, -2, 0, 8126475, 3, 0, 230, 2, 30, 2, 54, 2,
  8, -3, 3, 0, 3, 2, 35, -271, 2, 141, 3, 0, 9, 2, 142, 2, 143, 2, 55, 3, 0, 11,
  2, 7, -72, 3, 0, 3, 2, 144, 2, 145, -187, 3, 0, 2, 2, 56, 2, 0, 2, 146, 2, 147,
  2, 60, 2, 0, 2, 148, 2, 149, 2, 150, 3, 0, 10, 2, 151, 2, 152, 2, 22, 3, 56, 2,
  3, 153, 2, 3, 57, 2, 2, 154, -57, 2, 8, 2, 155, -7, 2, 17, 2, 0, 2, 58, -4, 2,
  0, 0, 1065361407, 0, 16384, -9, 2, 17, 2, 58, 2, 0, 2, 18, -14, 2, 17, 2, 18, -6,
  2, 17, 0, 81919, -6, 2, 8, 0, 3223273399, -7, 2, 156, 3, 0, 6, 2, 124, -1, 3, 0,
  2, 0, 2063, -37, 2, 60, 2, 157, 2, 158, 2, 159, 2, 160, 2, 161, -138, 3, 0, 1335,
  -1, 3, 0, 136, 2, 9, 3, 0, 180, 2, 24, 3, 0, 233, 2, 162, 3, 0, 18, 2, 9, -77,
  3, 0, 16, 2, 9, -47, 3, 0, 154, 2, 6, 3, 0, 264, 2, 32, -28252], [4294967295, 4294967291,
  4092460543, 4294828031, 4294967294, 134217726, 4294903807, 268435455, 2147483647,
  1073741823, 1048575, 3892314111, 134217727, 1061158911, 536805376, 4294910143,
  4294901759, 4294901760, 4095, 262143, 536870911, 8388607, 4160749567, 4294902783,
  4294918143, 65535, 67043328, 2281701374, 4294967264, 2097151, 4194303, 255, 67108863,
  4294967039, 511, 524287, 131071, 63, 127, 3238002687, 4294549487, 4290772991, 33554431,
  4294901888, 4286578687, 67043329, 4294770687, 67043583, 1023, 32767, 15, 2047999,
  67043343, 67051519, 2147483648, 4294902000, 4292870143, 4294966783, 16383, 67047423,
  4294967279, 262083, 20511, 41943039, 493567, 4294959104, 603979775, 65536, 602799615,
  805044223, 4294965206, 8191, 1031749119, 4294917631, 2134769663, 4286578493, 4282253311,
  4294942719, 33540095, 4294905855, 2868854591, 1608515583, 265232348, 534519807,
  2147614720, 1060109444, 4093640016, 17376, 2139062143, 224, 4169138175, 4294909951,
  4286578688, 4294967292, 4294965759, 4294836224, 4294966272, 4294967280, 32768,
  8289918, 4294934399, 4294901775, 4294965375, 1602223615, 4294967259, 4294443008,
  268369920, 4292804608, 4294967232, 486341884, 4294963199, 3087007615, 1073692671,
  4128527, 4279238655, 4294902015, 4160684047, 4290246655, 469499899, 4294967231,
  134086655, 4294966591, 2445279231, 3670015, 31, 252, 4294967288, 16777215, 4294705151,
  3221208447, 4294902271, 4294549472, 4294921215, 4285526655, 4294966527, 4294705152,
  4294966143, 64, 4294966719, 3774873592, 4194303999, 1877934080, 262151, 2555904,
  536807423, 67043839, 3758096383, 3959414372, 3755993023, 2080374783, 4294835295,
  4294967103, 4160749565, 4294934527, 4087, 2016, 2147446655, 184024726, 2862017156,
  1593309078, 268434431, 268434414, 4294901761]);
  const fn_r = param_e_1 => !!(var_t[34816 + (param_e_1 >>> 5)] >>> param_e_1 & 1);
  const list_o = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1032, 0, 0, 2056, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8192, 0, 3, 0, 0, 8192, 0, 0, 0, 256,
  0, 33024, 0, 0, 242, 242, 114, 114, 114, 114, 114, 114, 594, 594, 0, 0, 16384,
  0, 16384, 0, 0, 67, 67, 67, 67, 67, 67, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  3, 3, 3, 3, 3, 3, 3, 0, 1, 0, 0, 4099, 0, 71, 71, 71, 71, 71, 71, 7, 7, 7, 7, 7,
  7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 16384, 0, 16384, 0, 0];
  const list_s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
  const list_c = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0];
  function var_u(param_e_1) {
  if (param_e_1 <= 127) {
  return list_s[param_e_1] > 0;
  }
  else {
  return fn_r(param_e_1);
  }
  }
  function var_l(param_e_1) {
  if (param_e_1 <= 127) {
  return list_c[param_e_1] > 0;
  }
  else {
  return (param_e_2 => !!(var_t[0 + (param_e_2 >>> 5)] >>> param_e_2 & 1))(param_e_1) ||
  param_e_1 === 8204 || param_e_1 === 8205;
  }
  }
  function var_d(param_e_1) {
  param_e_1.column++;
  return param_e_1.currentChar = param_e_1.source.charCodeAt(++param_e_1.index);
  }
  function var_p(param_e_1) {
  const var_t_1 = param_e_1.currentChar;
  if ((var_t_1 & 64512) != 55296) {
  return 0;
  }
  const var_r = param_e_1.source.charCodeAt(param_e_1.index + 1);
  if ((var_r & 64512) != 56320) {
  return 0;
  }
  else {
  return 65536 + ((var_t_1 & 1023) << 10) + (var_r & 1023);
  }
  }
  function var_f(param_e_1, param_t) {
  param_e_1.currentChar = param_e_1.source.charCodeAt(++param_e_1.index);
  param_e_1.flags |= 1;
  if (!(param_t & 4)) {
  param_e_1.column = 0;
  param_e_1.line++;
  }
  }
  function var_h(param_e_1) {
  param_e_1.flags |= 1;
  param_e_1.currentChar = param_e_1.source.charCodeAt(++param_e_1.index);
  param_e_1.column = 0;
  param_e_1.line++;
  }
  function var_m(param_e_1) {
  return param_e_1 === 160 || param_e_1 === 65279 || param_e_1 === 133 ||
  param_e_1 === 5760 || param_e_1 >= 8192 && param_e_1 <= 8203 ||
  param_e_1 === 8239 || param_e_1 === 8287 || param_e_1 === 12288 ||
  param_e_1 === 8201 || param_e_1 === 65519;
  }
  function var_g(param_e_1) {
  if (param_e_1 < 65) {
  return param_e_1 - 48;
  }
  else {
  return param_e_1 - 65 + 10 & 15;
  }
  }
  function var_v(param_e_1) {
  switch (param_e_1) {
  case 134283266:
  return "NumericLiteral";
  case 134283267:
  return "StringLiteral";
  case 86021:
  case 86022:
  return "BooleanLiteral";
  case 86023:
  return "NullLiteral";
  case 65540:
  return "RegularExpression";
  case 67174408:
  case 67174409:
  case 132:
  return "TemplateLiteral";
  default:
  if (~param_e_1 & 143360) {
  if (~param_e_1 & 4096) {
  return "Punctuator";
  }
  else {
  return "Keyword";
  }
  }
  else {
  return "Identifier";
  }
  }
  }
  const list_y = ["SingleLine", "MultiLine", "HTMLOpen", "HTMLClose", "HashbangComment"];
  function var__(param_e_1, param_t, param_r, param_n, param_o, param_i) {
  if (param_n & 2) {
  param_e_1.report(0);
  }
  return var_b(param_e_1, param_t, param_r, param_o, param_i);
  }
  function var_b(param_e_1, param_t, param_r, param_n, param_i) {
  const {
  index: var_a_1
  }
  = param_e_1;
  param_e_1.tokenIndex = param_e_1.index;
  param_e_1.tokenLine = param_e_1.line;
  param_e_1.tokenColumn = param_e_1.column;
  while (param_e_1.index < param_e_1.end) {
  if (list_o[param_e_1.currentChar] & 8) {
  const var_r = param_e_1.currentChar === 13;
  var_h(param_e_1);
  if (var_r && param_e_1.index < param_e_1.end && param_e_1.currentChar === 10) {
  param_e_1.currentChar = param_t.charCodeAt(++param_e_1.index);
  }
  break;
  }
  if ((param_e_1.currentChar ^ 8232) <= 1) {
  var_h(param_e_1);
  break;
  }
  var_d(param_e_1);
  param_e_1.tokenIndex = param_e_1.index;
  param_e_1.tokenLine = param_e_1.line;
  param_e_1.tokenColumn = param_e_1.column;
  }
  if (param_e_1.options.onComment) {
  const obj_r = {
  start: {
  line: param_i.line,
  column: param_i.column
  }
  ,
  end: {
  line: param_e_1.tokenLine,
  column: param_e_1.tokenColumn
  }
  };
  param_e_1.options.onComment(list_y[param_n & 255], param_t.slice(var_a_1, param_e_1.tokenIndex),
  param_i.index, param_e_1.tokenIndex, obj_r);
  }
  return param_r | 1;
  }
  function var_w(param_e_1, param_t, param_r) {
  const {
  index: var_n
  }
  = param_e_1;
  while (param_e_1.index < param_e_1.end) {
  if (param_e_1.currentChar < 43) {
  let flag_i = false;
  while (param_e_1.currentChar === 42) {
  if (!flag_i) {
  param_r &= -5;
  flag_i = true;
  }
  if (var_d(param_e_1) === 47) {
  var_d(param_e_1);
  if (param_e_1.options.onComment) {
  const obj_r = {
  start: {
  line: param_e_1.tokenLine,
  column: param_e_1.tokenColumn
  }
  ,
  end: {
  line: param_e_1.line,
  column: param_e_1.column
  }
  };
  param_e_1.options.onComment(list_y[1], param_t.slice(var_n, param_e_1.index - 2),
  var_n - 2, param_e_1.index, obj_r);
  }
  param_e_1.tokenIndex = param_e_1.index;
  param_e_1.tokenLine = param_e_1.line;
  param_e_1.tokenColumn = param_e_1.column;
  return param_r;
  }
  }
  if (flag_i) {
  continue;
  }
  if (list_o[param_e_1.currentChar] & 8) {
  if (param_e_1.currentChar === 13) {
  param_r |= 5;
  var_h(param_e_1);
  }
  else {
  var_f(param_e_1, param_r);
  param_r = param_r & -5 | 1;
  }
  }
  else {
  var_d(param_e_1);
  }
  }
  else if ((param_e_1.currentChar ^ 8232) <= 1) {
  param_r = param_r & -5 | 1;
  var_h(param_e_1);
  }
  else {
  param_r &= -5;
  var_d(param_e_1);
  }
  }
  param_e_1.report(18);
  }
  const obj_E = {
  0: "Unexpected token",
  30: "Unexpected token: '%0'",
  1: "Octal escape sequences are not allowed in strict mode",
  2: "Octal escape sequences are not allowed in template strings",
  3: "\\8 and \\9 are not allowed in template strings",
  4: "Private identifier #%0 is not defined",
  5: "Illegal Unicode escape sequence",
  6: "Invalid code point %0",
  7: "Invalid hexadecimal escape sequence",
  9: "Octal literals are not allowed in strict mode",
  8: "Decimal integer literals with a leading zero are forbidden in strict mode",
  10: "Expected number in radix %0",
  153: "Invalid left-hand side assignment to a destructible right-hand side",
  11: "Non-number found after exponent indicator",
  12: "Invalid BigIntLiteral",
  13: "No identifiers allowed directly after numeric literal",
  14: "Escapes \\8 or \\9 are not syntactically valid escapes",
  15: "Escapes \\8 or \\9 are not allowed in strict mode",
  16: "Unterminated string literal",
  17: "Unterminated template literal",
  18: "Multiline comment was not closed properly",
  19: "The identifier contained dynamic unicode escape that was not closed",
  20: "Illegal character '%0'",
  21: "Missing hexadecimal digits",
  22: "Invalid implicit octal",
  23: "Invalid line break in string literal",
  24: "Only unicode escapes are legal in identifier names",
  25: "Expected '%0'",
  26: "Invalid left-hand side in assignment",
  27: "Invalid left-hand side in async arrow",
  28: "Calls to super must be in the \"constructor\" method of a class expression or class declaration that has a superclass",
  29: "Member access on super must be in a method",
  31: "Await expression not allowed in formal parameter",
  32: "Yield expression not allowed in formal parameter",
  95: "Unexpected token: 'escaped keyword'",
  33: "Unary expressions as the left operand of an exponentiation expression must be disambiguated with parentheses",
  125: "Async functions can only be declared at the top level or inside a block",
  34: "Unterminated regular expression",
  35: "Unexpected regular expression flag",
  36: "Duplicate regular expression flag '%0'",
  37: "%0 functions must have exactly %1 argument%2",
  38: "Setter function argument must not be a rest parameter",
  39: "%0 declaration must have a name in this context",
  40: "Function name may not contain any reserved words or be eval or arguments in strict mode",
  41: "The rest operator is missing an argument",
  42: "A getter cannot be a generator",
  43: "A setter cannot be a generator",
  44: "A computed property name must be followed by a colon or paren",
  136: "Object literal keys that are strings or numbers must be a method or have a colon",
  46: "Found `* async x(){}` but this should be `async * x(){}`",
  45: "Getters and setters can not be generators",
  47: "'%0' can not be generator method",
  48: "No line break is allowed after '=>'",
  49: "The left-hand side of the arrow can only be destructed through assignment",
  50: "The binding declaration is not destructible",
  51: "Async arrow can not be followed by new expression",
  52: "Classes may not have a static property named 'prototype'",
  53: "Class constructor may not be a %0",
  54: "Duplicate constructor method in class",
  55: "Invalid increment/decrement operand",
  56: "Invalid use of `new` keyword on an increment/decrement expression",
  57: "`=>` is an invalid assignment target",
  58: "Rest element may not have a trailing comma",
  59: "Missing initializer in %0 declaration",
  60: "'for-%0' loop head declarations can not have an initializer",
  61: "Invalid left-hand side in for-%0 loop: Must have a single binding",
  62: "Invalid shorthand property initializer",
  63: "Property name __proto__ appears more than once in object literal",
  64: "Let is disallowed as a lexically bound name",
  65: "Invalid use of '%0' inside new expression",
  66: "Illegal 'use strict' directive in function with non-simple parameter list",
  67: "Identifier \"let\" disallowed as left-hand side expression in strict mode",
  68: "Illegal continue statement",
  69: "Illegal break statement",
  70: "Cannot have `let[...]` as a var name in strict mode",
  71: "Invalid destructuring assignment target",
  72: "Rest parameter may not have a default initializer",
  73: "The rest argument must the be last parameter",
  74: "Invalid rest argument",
  76: "In strict mode code, functions can only be declared at top level or inside a block",
  77: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement",
  78: "Without web compatibility enabled functions can not be declared at top level, inside a block, or as the body of an if statement",
  79: "Class declaration can't appear in single-statement context",
  80: "Invalid left-hand side in for-%0",
  81: "Invalid assignment in for-%0",
  82: "for await (... of ...) is only valid in async functions and async generators",
  83: "The first token after the template expression should be a continuation of the template",
  85: "`let` declaration not allowed here and `let` cannot be a regular var name in strict mode",
  84: "`let \n [` is a restricted production at the start of a statement",
  86: "Catch clause requires exactly one parameter, not more (and no trailing comma)",
  87: "Catch clause parameter does not support default values",
  88: "Missing catch or finally after try",
  89: "More than one default clause in switch statement",
  90: "Illegal newline after throw",
  91: "Strict mode code may not include a with statement",
  92: "Illegal return statement",
  93: "The left hand side of the for-header binding declaration is not destructible",
  94: "new.target only allowed within functions or static blocks",
  96: "'#' not followed by identifier",
  102: "Invalid keyword",
  101: "Can not use 'let' as a class name",
  100: "'A lexical declaration can't define a 'let' binding",
  99: "Can not use `let` as variable name in strict mode",
  97: "'%0' may not be used as an identifier in this context",
  98: "Await is only valid in async functions",
  103: "The %0 keyword can only be used with the module goal",
  104: "Unicode codepoint must not be greater than 0x10FFFF",
  105: "%0 source must be string",
  106: "Only a identifier or string can be used to indicate alias",
  107: "Only '*' or '{...}' can be imported after default",
  108: "'import defer' must be followed by a namespace import",
  109: "'import source' must be followed by a default import",
  110: "Trailing decorator may be followed by method",
  111: "Decorators can't be used with a constructor",
  112: "Can not use `await` as identifier in module or async func",
  113: "Can not use `await` as identifier in module",
  114: "HTML comments are only allowed with web compatibility (Annex B)",
  115: "The identifier 'let' must not be in expression position in strict mode",
  116: "Cannot assign to `eval` and `arguments` in strict mode",
  117: "The left-hand side of a for-of loop may not start with 'let'",
  118: "Block body arrows can not be immediately invoked without a group",
  119: "Block body arrows can not be immediately accessed without a group",
  120: "Unexpected strict mode reserved word",
  121: "Unexpected eval or arguments in strict mode",
  122: "Decorators must not be followed by a semicolon",
  123: "Calling delete on expression not allowed in strict mode",
  124: "Pattern can not have a tail",
  126: "Can not have a `yield` expression on the left side of a ternary",
  127: "An arrow function can not have a postfix update operator",
  128: "Invalid object literal key character after generator star",
  129: "Private fields can not be deleted",
  131: "Classes may not have a field called constructor",
  130: "Classes may not have a private element named constructor",
  132: "A class field initializer or static block may not contain arguments",
  133: "Generators can only be declared at the top level or inside a block",
  134: "Async methods are a restricted production and cannot have a newline following it",
  135: "Unexpected character after object literal property name",
  137: "Invalid key token",
  138: "Label '%0' has already been declared",
  139: "continue statement must be nested within an iteration statement",
  140: "Undefined label '%0'",
  141: "Trailing comma is disallowed inside import(...) arguments",
  142: "Invalid binding in JSON import",
  143: "import() requires exactly one argument",
  144: "Cannot use new with import(...)",
  145: "... is not allowed in import()",
  146: "Expected '=>'",
  147: "Duplicate binding '%0'",
  148: "Duplicate private identifier #%0",
  149: "Cannot export a duplicate name '%0'",
  152: "Duplicate %0 for-binding",
  150: "Exported binding '%0' needs to refer to a top-level declared variable",
  151: "Unexpected private field",
  155: "Numeric separators are not allowed at the end of numeric literals",
  154: "Only one underscore is allowed as numeric separator",
  156: "JSX value should be either an expression or a quoted JSX text",
  157: "Expected corresponding JSX closing tag for %0",
  158: "Adjacent JSX elements must be wrapped in an enclosing tag",
  159: "JSX attributes must only be assigned a non-empty 'expression'",
  160: "'%0' has already been declared",
  161: "'%0' shadowed a catch clause binding",
  162: "Dot property must be an identifier",
  163: "Encountered invalid input after spread/rest argument",
  164: "Catch without try",
  165: "Finally without try",
  166: "Expected corresponding closing tag for JSX fragment",
  167: "Coalescing and logical operators used together in the same expression must be disambiguated with parentheses",
  168: "Invalid tagged template on optional chain",
  169: "Invalid optional chain from super property",
  170: "Invalid optional chain from new expression",
  171: "Cannot use \"import.meta\" outside a module",
  172: "Leading decorators must be attached to a class declaration",
  173: "An export name cannot include a lone surrogate",
  174: "A string literal cannot be used as an exported binding without `from`",
  175: "Private fields can't be accessed on super",
  176: "The only valid meta property for import is 'import.meta'",
  177: "'import.meta' must not contain escaped characters",
  178: "cannot use \"await\" as identifier inside an async function",
  179: "cannot use \"await\" in static blocks",
  180: "Unexpected token `}`. Did you mean `&rbrace;` or `{'}'}`?",
  181: "Unexpected token `>`. Did you mean `&gt;` or `{'>'}`?"
  };
  class var_D extends SyntaxError {
  constructor(param_e_1, param_t, param_r, ...param_n) {
  const var_o_1 = obj_E[param_r].replaceAll(/%(\d+)/g, (param_e_2, param_t_1) => param_n[param_t_1]);
  super("[" + param_e_1.line + ":" + param_e_1.column + "-" + param_t.line + ":" + param_t.column + "]: " + var_o_1);
  var_a(this, "start", undefined);
  var_a(this, "end", undefined);
  var_a(this, "range", undefined);
  var_a(this, "loc", undefined);
  var_a(this, "description", undefined);
  this.start = param_e_1.index;
  this.end = param_t.index;
  this.range = [param_e_1.index, param_t.index];
  this.loc = {
  start: {
  line: param_e_1.line,
  column: param_e_1.column
  }
  ,
  end: {
  line: param_t.line,
  column: param_t.column
  }
  };
  this.description = var_o_1;
  }
  }
  const list_T = ["end of source", "identifier", "number", "string", "regular expression",
  "false", "true", "null", "template continuation", "template tail", "=>", "(", "{",
  ".", "...", "}", ")", ";", ",", "[", "]", ":", "?", "'", "\"", "++", "--", "=",
  "<<=", ">>=", ">>>=", "**=", "+=", "-=", "*=", "/=", "%=", "^=", "|=", "&=", "||=",
  "&&=", "??=", "typeof", "delete", "void", "!", "~", "+", "-", "in", "instanceof",
  "*", "%", "/", "**", "&&", "||", "===", "!==", "==", "!=", "<=", ">=", "<", ">",
  "<<", ">>", ">>>", "&", "|", "^", "var", "let", "const", "break", "case", "catch",
  "class", "continue", "debugger", "default", "do", "else", "export", "extends",
  "finally", "for", "function", "if", "import", "new", "return", "super", "switch",
  "this", "throw", "try", "while", "with", "implements", "interface", "package",
  "private", "protected", "public", "static", "yield", "as", "async", "await", "constructor",
  "get", "set", "accessor", "from", "of", "using", "enum", "eval", "arguments", "escaped keyword",
  "escaped future reserved keyword", "reserved if strict", "#", "BigIntLiteral",
  "??", "?.", "WhiteSpace", "Illegal", "LineTerminator", "PrivateField", "Template",
  "@", "target", "meta", "LineFeed", "Escaped", "JSXText"];
  const var_k = new Map([["this", 86111], ["function", 86104], ["if", 20569], ["return",
  20572], ["var", 86088], ["else", 20563], ["for", 20567], ["new", 86107], ["in",
  8673330], ["typeof", 16863275], ["while", 20578], ["case", 20556], ["break", 20555],
  ["try", 20577], ["catch", 20557], ["delete", 16863276], ["throw", 86112], ["switch",
  86110], ["continue", 20559], ["default", 20561], ["instanceof", 8411187], ["do",
  20562], ["void", 16863277], ["finally", 20566], ["async", 209005], ["await", 209006],
  ["class", 86094], ["const", 86090], ["constructor", 209007], ["debugger", 20560],
  ["export", 20564], ["extends", 20565], ["false", 86021], ["from", 209011], ["get",
  209008], ["implements", 36964], ["import", 86106], ["interface", 36965], ["let",
  241737], ["null", 86023], ["of", 471156], ["using", 209013], ["package", 36966],
  ["private", 36967], ["protected", 36968], ["public", 36969], ["set", 209009], ["static",
  36970], ["super", 86109], ["true", 86022], ["with", 20579], ["yield", 241771],
  ["enum", 86134], ["eval", 537079927], ["as", 77932], ["arguments", 537079928],
  ["target", 209030], ["meta", 209031], ["accessor", 209010]]);
  const var_A = [...var_k.keys()].map(param_e_1 => param_e_1.length);
  const var_C = Math.min(...var_A);
  const var_x = Math.max(...var_A);
  function var_S(param_e_1, param_t, param_r) {
  while (list_c[var_d(param_e_1)]);
  param_e_1.tokenValue = param_e_1.source.slice(param_e_1.tokenIndex, param_e_1.index);
  if (param_e_1.currentChar === 92 || param_e_1.currentChar > 126) {
  return var_I(param_e_1, param_t, 0, param_r);
  }
  const var_o_1 = param_e_1.index - param_e_1.tokenIndex;
  if (var_o_1 < var_C || var_o_1 > var_x) {
  return 208897;
  }
  else {
  return var_k.get(param_e_1.tokenValue) ?? 208897;
  }
  }
  function var_O(param_e_1, param_t) {
  const var_r = var_R(param_e_1);
  if (!var_u(var_r)) {
  param_e_1.report(5);
  }
  param_e_1.tokenValue = String.fromCodePoint(var_r);
  return var_I(param_e_1, param_t, 1, list_o[var_r] & 4);
  }
  function var_I(param_e_1, param_t, param_r, param_n) {
  let var_i_1 = param_e_1.index;
  while (param_e_1.index < param_e_1.end) {
  if (param_e_1.currentChar === 92) {
  param_e_1.tokenValue += param_e_1.source.slice(var_i_1, param_e_1.index);
  param_r = 1;
  const var_t_1 = var_R(param_e_1);
  if (!var_l(var_t_1)) {
  param_e_1.report(5);
  }
  param_n = param_n && list_o[var_t_1] & 4;
  param_e_1.tokenValue += String.fromCodePoint(var_t_1);
  var_i_1 = param_e_1.index;
  }
  else {
  const var_t_1 = var_p(param_e_1);
  if (var_t_1 > 0) {
  if (!var_l(var_t_1)) {
  param_e_1.report(20, String.fromCodePoint(var_t_1));
  }
  param_e_1.currentChar = var_t_1;
  param_e_1.index++;
  param_e_1.column++;
  }
  else if (!var_l(param_e_1.currentChar)) {
  break;
  }
  var_d(param_e_1);
  }
  }
  if (param_e_1.index <= param_e_1.end) {
  param_e_1.tokenValue += param_e_1.source.slice(var_i_1, param_e_1.index);
  }
  const {
  length: var_a_1
  }
  = param_e_1.tokenValue;
  if (param_n && var_a_1 >= var_C && var_a_1 <= var_x) {
  const var_n = var_k.get(param_e_1.tokenValue);
  if (var_n === undefined) {
  return (param_r ? -2147483648 : 0) | 208897;
  }
  else if (param_r) {
  if (var_n === 209006) {
  if (param_t & 2050) {
  return -2147483527;
  }
  else {
  return var_n | -2147483648;
  }
  }
  else if (param_t & 1) {
  if (var_n === 36970) {
  return -2147483526;
  }
  else if (~var_n & 36864) {
  if (~var_n & 20480) {
  return -2147274629;
  }
  else if (param_t & 262144 && !(param_t & 8)) {
  return var_n | -2147483648;
  }
  else {
  return -2147483527;
  }
  }
  else {
  return -2147483526;
  }
  }
  else if (!(param_t & 262144) || param_t & 8 || ~var_n & 20480) {
  if (var_n === 241771) {
  if (param_t & 262144) {
  return -2147274629;
  }
  else if (param_t & 1024) {
  return -2147483527;
  }
  else {
  return var_n | -2147483648;
  }
  }
  else if (var_n === 209005) {
  return -2147274629;
  }
  else if (~var_n & 36864) {
  return -2147483527;
  }
  else {
  return var_n | 12288 | -2147483648;
  }
  }
  else {
  return var_n | -2147483648;
  }
  }
  else {
  return var_n;
  }
  }
  return (param_r ? -2147483648 : 0) | 208897;
  }
  function var_L(param_e_1) {
  let var_t_1 = var_d(param_e_1);
  if (var_t_1 === 92) {
  return 131;
  }
  const var_r = var_p(param_e_1);
  if (var_r) {
  var_t_1 = var_r;
  }
  if (!var_u(var_t_1)) {
  param_e_1.report(96);
  }
  return 131;
  }
  function var_R(param_e_1) {
  if (param_e_1.source.charCodeAt(param_e_1.index + 1) !== 117) {
  param_e_1.report(5);
  }
  param_e_1.currentChar = param_e_1.source.charCodeAt(param_e_1.index += 2);
  param_e_1.column += 2;
  return function (param_e_2) {
  let num_t = 0;
  const var_r = param_e_2.currentChar;
  if (var_r === 123) {
  const var_r_1 = param_e_2.index - 2;
  while (list_o[var_d(param_e_2)] & 64) {
  num_t = num_t << 4 | var_g(param_e_2.currentChar);
  if (num_t > 1114111) {
  throw new var_D({
  index: var_r_1,
  line: param_e_2.line,
  column: param_e_2.column
  }
  , param_e_2.currentLocation, 104);
  }
  }
  if (param_e_2.currentChar !== 125) {
  throw new var_D({
  index: var_r_1,
  line: param_e_2.line,
  column: param_e_2.column
  }
  , param_e_2.currentLocation, 7);
  }
  var_d(param_e_2);
  return num_t;
  }
  if (!(list_o[var_r] & 64)) {
  param_e_2.report(7);
  }
  const var_n = param_e_2.source.charCodeAt(param_e_2.index + 1);
  if (!(list_o[var_n] & 64)) {
  param_e_2.report(7);
  }
  const var_i_1 = param_e_2.source.charCodeAt(param_e_2.index + 2);
  if (!(list_o[var_i_1] & 64)) {
  param_e_2.report(7);
  }
  const var_a_1 = param_e_2.source.charCodeAt(param_e_2.index + 3);
  if (!(list_o[var_a_1] & 64)) {
  param_e_2.report(7);
  }
  num_t = var_g(var_r) << 12 | var_g(var_n) << 8 | var_g(var_i_1) << 4 | var_g(var_a_1);
  param_e_2.currentChar = param_e_2.source.charCodeAt(param_e_2.index += 4);
  param_e_2.column += 4;
  return num_t;
  }
  (param_e_1);
  }
  function var_P(param_e_1, param_t, param_r) {
  let var_n = param_e_1.currentChar;
  let num_i = 0;
  let num_a = 9;
  let var_s = param_r & 64 ? 0 : 1;
  let num_c = 0;
  let num_l = 0;
  if (param_r & 64) {
  num_i = "." + var_B(param_e_1, var_n);
  var_n = param_e_1.currentChar;
  if (var_n === 110) {
  param_e_1.report(12);
  }
  }
  else {
  if (var_n === 48) {
  var_n = var_d(param_e_1);
  if ((var_n | 32) == 120) {
  param_r = 136;
  var_n = var_d(param_e_1);
  while (list_o[var_n] & 4160) {
  if (var_n !== 95) {
  num_l = 1;
  num_i = num_i * 16 + var_g(var_n);
  num_c++;
  var_n = var_d(param_e_1);
  }
  else {
  if (!num_l) {
  param_e_1.report(154);
  }
  num_l = 0;
  var_n = var_d(param_e_1);
  }
  }
  if (num_c === 0 || !num_l) {
  param_e_1.report(num_c === 0 ? 21 : 155);
  }
  }
  else if ((var_n | 32) == 111) {
  param_r = 132;
  var_n = var_d(param_e_1);
  while (list_o[var_n] & 4128) {
  if (var_n !== 95) {
  num_l = 1;
  num_i = num_i * 8 + (var_n - 48);
  num_c++;
  var_n = var_d(param_e_1);
  }
  else {
  if (!num_l) {
  param_e_1.report(154);
  }
  num_l = 0;
  var_n = var_d(param_e_1);
  }
  }
  if (num_c === 0 || !num_l) {
  param_e_1.report(num_c === 0 ? 0 : 155);
  }
  }
  else if ((var_n | 32) == 98) {
  param_r = 130;
  var_n = var_d(param_e_1);
  while (list_o[var_n] & 4224) {
  if (var_n !== 95) {
  num_l = 1;
  num_i = num_i * 2 + (var_n - 48);
  num_c++;
  var_n = var_d(param_e_1);
  }
  else {
  if (!num_l) {
  param_e_1.report(154);
  }
  num_l = 0;
  var_n = var_d(param_e_1);
  }
  }
  if (num_c === 0 || !num_l) {
  param_e_1.report(num_c === 0 ? 0 : 155);
  }
  }
  else if (list_o[var_n] & 32) {
  if (param_t & 1) {
  param_e_1.report(1);
  }
  param_r = 1;
  while (list_o[var_n] & 16) {
  if (list_o[var_n] & 512) {
  param_r = 32;
  var_s = 0;
  break;
  }
  num_i = num_i * 8 + (var_n - 48);
  var_n = var_d(param_e_1);
  }
  }
  else if (list_o[var_n] & 512) {
  if (param_t & 1) {
  param_e_1.report(1);
  }
  param_e_1.flags |= 64;
  param_r = 32;
  }
  else if (var_n === 95) {
  param_e_1.report(0);
  }
  }
  if (param_r & 48) {
  if (var_s) {
  while (num_a >= 0 && list_o[var_n] & 4112) {
  if (var_n !== 95) {
  num_l = 0;
  num_i = num_i * 10 + (var_n - 48);
  var_n = var_d(param_e_1);
  --num_a;
  }
  else {
  var_n = var_d(param_e_1);
  if (var_n === 95 || param_r & 32) {
  throw new var_D(param_e_1.currentLocation, {
  index: param_e_1.index + 1,
  line: param_e_1.line,
  column: param_e_1.column
  }
  , 154);
  }
  num_l = 1;
  }
  }
  if (num_l) {
  throw new var_D(param_e_1.currentLocation, {
  index: param_e_1.index + 1,
  line: param_e_1.line,
  column: param_e_1.column
  }
  , 155);
  }
  if (num_a >= 0 && !var_u(var_n) && var_n !== 46) {
  param_e_1.tokenValue = num_i;
  if (param_e_1.options.raw) {
  param_e_1.tokenRaw = param_e_1.source.slice(param_e_1.tokenIndex, param_e_1.index);
  }
  return 134283266;
  }
  }
  num_i += var_B(param_e_1, var_n);
  var_n = param_e_1.currentChar;
  if (var_n === 46) {
  if (var_d(param_e_1) === 95) {
  param_e_1.report(0);
  }
  param_r = 64;
  num_i += "." + var_B(param_e_1, param_e_1.currentChar);
  var_n = param_e_1.currentChar;
  }
  }
  }
  const var_p_1 = param_e_1.index;
  let num_f = 0;
  if (var_n === 110 && param_r & 128) {
  num_f = 1;
  var_n = var_d(param_e_1);
  }
  else if ((var_n | 32) == 101) {
  var_n = var_d(param_e_1);
  if (list_o[var_n] & 256) {
  var_n = var_d(param_e_1);
  }
  const {
  index: var_t_1
  }
  = param_e_1;
  if (!(list_o[var_n] & 16)) {
  param_e_1.report(11);
  }
  num_i += param_e_1.source.substring(var_p_1, var_t_1) + var_B(param_e_1, var_n);
  var_n = param_e_1.currentChar;
  }
  if (param_e_1.index < param_e_1.end && list_o[var_n] & 16 ||
  var_u(var_n)) {
  param_e_1.report(13);
  }
  if (num_f) {
  param_e_1.tokenRaw = param_e_1.source.slice(param_e_1.tokenIndex, param_e_1.index);
  param_e_1.tokenValue = BigInt(param_e_1.tokenRaw.slice(0, -1).replaceAll("_", ""));
  return 134283389;
  }
  else {
  param_e_1.tokenValue = param_r & 15 ? num_i : param_r & 32 ?
  parseFloat(param_e_1.source.substring(param_e_1.tokenIndex, param_e_1.index)) :
  +num_i;
  if (param_e_1.options.raw) {
  param_e_1.tokenRaw = param_e_1.source.slice(param_e_1.tokenIndex, param_e_1.index);
  }
  return 134283266;
  }
  }
  function var_B(param_e_1, param_t) {
  let num_r = 0;
  let var_n = param_e_1.index;
  let str_i = "";
  while (list_o[param_t] & 4112) {
  if (param_t !== 95) {
  num_r = 0;
  param_t = var_d(param_e_1);
  }
  else {
  const {
  index: var_o_1
  }
  = param_e_1;
  if ((param_t = var_d(param_e_1)) === 95) {
  throw new var_D(param_e_1.currentLocation, {
  index: param_e_1.index + 1,
  line: param_e_1.line,
  column: param_e_1.column
  }
  , 154);
  }
  num_r = 1;
  str_i += param_e_1.source.substring(var_n, var_o_1);
  var_n = param_e_1.index;
  }
  }
  if (num_r) {
  throw new var_D(param_e_1.currentLocation, {
  index: param_e_1.index + 1,
  line: param_e_1.line,
  column: param_e_1.column
  }
  , 155);
  }
  return str_i + param_e_1.source.substring(var_n, param_e_1.index);
  }
  var var_M;
  var var_F;
  function var_U(param_e_1) {
  const var_t_1 = param_e_1.index;
  let var_r = var_M.Empty;
  e: while (true) {
  const var_t_2 = param_e_1.currentChar;
  var_d(param_e_1);
  if (var_r & var_M.Escape) {
  var_r &= ~var_M.Escape;
  }
  else {
  switch (var_t_2) {
  case 47:
  if (var_r) {
  break;
  }
  break e;
  case 92:
  var_r |= var_M.Escape;
  break;
  case 91:
  var_r |= var_M.Class;
  break;
  case 93:
  var_r &= var_M.Escape;
  }
  }
  if (var_t_2 === 13 || var_t_2 === 10 || var_t_2 === 8232 ||
  var_t_2 === 8233) {
  param_e_1.report(34);
  }
  if (param_e_1.index >= param_e_1.source.length) {
  return param_e_1.report(34);
  }
  }
  const var_n = param_e_1.index - 1;
  let var_o_1 = var_F.Empty;
  let var_i_1 = param_e_1.currentChar;
  const {
  index: var_a_1
  }
  = param_e_1;
  while (var_l(var_i_1)) {
  switch (var_i_1) {
  case 103:
  if (var_o_1 & var_F.Global) {
  param_e_1.report(36, "g");
  }
  var_o_1 |= var_F.Global;
  break;
  case 105:
  if (var_o_1 & var_F.IgnoreCase) {
  param_e_1.report(36, "i");
  }
  var_o_1 |= var_F.IgnoreCase;
  break;
  case 109:
  if (var_o_1 & var_F.Multiline) {
  param_e_1.report(36, "m");
  }
  var_o_1 |= var_F.Multiline;
  break;
  case 117:
  if (var_o_1 & var_F.Unicode) {
  param_e_1.report(36, "u");
  }
  if (var_o_1 & var_F.UnicodeSets) {
  param_e_1.report(36, "vu");
  }
  var_o_1 |= var_F.Unicode;
  break;
  case 118:
  if (var_o_1 & var_F.Unicode) {
  param_e_1.report(36, "uv");
  }
  if (var_o_1 & var_F.UnicodeSets) {
  param_e_1.report(36, "v");
  }
  var_o_1 |= var_F.UnicodeSets;
  break;
  case 121:
  if (var_o_1 & var_F.Sticky) {
  param_e_1.report(36, "y");
  }
  var_o_1 |= var_F.Sticky;
  break;
  case 115:
  if (var_o_1 & var_F.DotAll) {
  param_e_1.report(36, "s");
  }
  var_o_1 |= var_F.DotAll;
  break;
  case 100:
  if (var_o_1 & var_F.Indices) {
  param_e_1.report(36, "d");
  }
  var_o_1 |= var_F.Indices;
  break;
  default:
  param_e_1.report(35);
  }
  var_i_1 = var_d(param_e_1);
  }
  const var_s = param_e_1.source.slice(var_a_1, param_e_1.index);
  const var_c = param_e_1.source.slice(var_t_1, var_n);
  param_e_1.tokenRegExp = {
  pattern: var_c,
  flags: var_s
  };
  if (param_e_1.options.raw) {
  param_e_1.tokenRaw = param_e_1.source.slice(param_e_1.tokenIndex, param_e_1.index);
  }
  param_e_1.tokenValue = function (param_e_2, param_t, param_r) {
  try {
  return new RegExp(param_t, param_r);
  }
  catch (var_t_2) {
  if (!param_e_2.options.validateRegex) {
  return null;
  }
  param_e_2.report(34);
  }
  }
  (param_e_1, var_c, var_s);
  return 65540;
  }
  function var_N(param_e_1, param_t, param_r) {
  const {
  index: var_n
  }
  = param_e_1;
  let str_i = "";
  let var_a_1 = var_d(param_e_1);
  let var_s = param_e_1.index;
  while (!(list_o[var_a_1] & 8)) {
  if (var_a_1 === param_r) {
  str_i += param_e_1.source.slice(var_s, param_e_1.index);
  var_d(param_e_1);
  if (param_e_1.options.raw) {
  param_e_1.tokenRaw = param_e_1.source.slice(var_n, param_e_1.index);
  }
  param_e_1.tokenValue = str_i;
  return 134283267;
  }
  if (~var_a_1 & 8 || var_a_1 !== 92) {
  if (var_a_1 === 8232 || var_a_1 === 8233) {
  param_e_1.column = -1;
  param_e_1.line++;
  }
  }
  else {
  str_i += param_e_1.source.slice(var_s, param_e_1.index);
  var_a_1 = var_d(param_e_1);
  if (var_a_1 < 127 || var_a_1 === 8232 || var_a_1 === 8233) {
  const var_r = var_j(param_e_1, param_t, var_a_1);
  if (var_r >= 0) {
  str_i += String.fromCodePoint(var_r);
  }
  else {
  var_q(param_e_1, var_r, 0);
  }
  }
  else {
  str_i += String.fromCodePoint(var_a_1);
  }
  var_s = param_e_1.index + 1;
  }
  if (param_e_1.index >= param_e_1.end) {
  param_e_1.report(16);
  }
  var_a_1 = var_d(param_e_1);
  }
  param_e_1.report(16);
  }
  function var_j(param_e_1, param_t, param_r, param_n = 0) {
  switch (param_r) {
  case 98:
  return 8;
  case 102:
  return 12;
  case 114:
  return 13;
  case 110:
  return 10;
  case 116:
  return 9;
  case 118:
  return 11;
  case 13:
  if (param_e_1.index < param_e_1.end) {
  const var_t_1 = param_e_1.source.charCodeAt(param_e_1.index + 1);
  if (var_t_1 === 10) {
  param_e_1.index = param_e_1.index + 1;
  param_e_1.currentChar = var_t_1;
  }
  }
  case 10:
  case 8232:
  case 8233:
  param_e_1.column = -1;
  param_e_1.line++;
  return -1;
  case 48:
  case 49:
  case 50:
  case 51:
  {
  let var_i_1 = param_r - 48;
  let var_a_1 = param_e_1.index + 1;
  let var_s = param_e_1.column + 1;
  if (var_a_1 < param_e_1.end) {
  const var_r = param_e_1.source.charCodeAt(var_a_1);
  if (list_o[var_r] & 32) {
  if (param_t & 1 || param_n) {
  return -2;
  }
  param_e_1.currentChar = var_r;
  var_i_1 = var_i_1 << 3 | var_r - 48;
  var_a_1++;
  var_s++;
  if (var_a_1 < param_e_1.end) {
  const var_t_1 = param_e_1.source.charCodeAt(var_a_1);
  if (list_o[var_t_1] & 32) {
  param_e_1.currentChar = var_t_1;
  var_i_1 = var_i_1 << 3 | var_t_1 - 48;
  var_a_1++;
  var_s++;
  }
  }
  param_e_1.flags |= 64;
  }
  else if (var_i_1 !== 0 || list_o[var_r] & 512) {
  if (param_t & 1 || param_n) {
  return -2;
  }
  param_e_1.flags |= 64;
  }
  param_e_1.index = var_a_1 - 1;
  param_e_1.column = var_s - 1;
  }
  return var_i_1;
  }
  case 52:
  case 53:
  case 54:
  case 55:
  {
  if (param_n || param_t & 1) {
  return -2;
  }
  let var_i_1 = param_r - 48;
  const var_a_1 = param_e_1.index + 1;
  const var_s = param_e_1.column + 1;
  if (var_a_1 < param_e_1.end) {
  const var_t_1 = param_e_1.source.charCodeAt(var_a_1);
  if (list_o[var_t_1] & 32) {
  var_i_1 = var_i_1 << 3 | var_t_1 - 48;
  param_e_1.currentChar = var_t_1;
  param_e_1.index = var_a_1;
  param_e_1.column = var_s;
  }
  }
  param_e_1.flags |= 64;
  return var_i_1;
  }
  case 120:
  {
  const var_t_1 = var_d(param_e_1);
  if (!(list_o[var_t_1] & 64)) {
  return -4;
  }
  const var_r = var_g(var_t_1);
  const var_n = var_d(param_e_1);
  if (list_o[var_n] & 64) {
  return var_r << 4 | var_g(var_n);
  }
  else {
  return -4;
  }
  }
  case 117:
  {
  const var_t_1 = var_d(param_e_1);
  if (param_e_1.currentChar === 123) {
  let num_t = 0;
  let num_r = 0;
  while (list_o[var_d(param_e_1)] & 64) {
  num_t = num_t << 4 | var_g(param_e_1.currentChar);
  if (num_t > 1114111) {
  return -5;
  }
  num_r++;
  }
  if (num_r === 0 || param_e_1.currentChar < 1 || param_e_1.currentChar !== 125) {
  return -4;
  }
  else {
  return num_t;
  }
  }
  {
  if (!(list_o[var_t_1] & 64)) {
  return -4;
  }
  const var_r = param_e_1.source.charCodeAt(param_e_1.index + 1);
  if (!(list_o[var_r] & 64)) {
  return -4;
  }
  const var_n = param_e_1.source.charCodeAt(param_e_1.index + 2);
  if (!(list_o[var_n] & 64)) {
  return -4;
  }
  const var_i_1 = param_e_1.source.charCodeAt(param_e_1.index + 3);
  if (list_o[var_i_1] & 64) {
  param_e_1.index += 3;
  param_e_1.column += 3;
  param_e_1.currentChar = param_e_1.source.charCodeAt(param_e_1.index);
  return var_g(var_t_1) << 12 | var_g(var_r) << 8 | var_g(var_n) << 4 | var_g(var_i_1);
  }
  else {
  return -4;
  }
  }
  }
  case 56:
  case 57:
  if (param_n || param_t & 1) {
  return -3;
  }
  param_e_1.flags |= 4096;
  default:
  return param_r;
  }
  }
  function var_q(param_e_1, param_t, param_r) {
  switch (param_t) {
  case -1:
  return;
  case -2:
  param_e_1.report(param_r ? 2 : 1);
  case -3:
  param_e_1.report(param_r ? 3 : 14);
  case -4:
  param_e_1.report(7);
  case -5:
  param_e_1.report(104);
  }
  }
  function var_H(param_e_1, param_t) {
  const {
  index: var_r
  }
  = param_e_1;
  let num_n = 67174409;
  let str_o = "";
  let flag_i = false;
  let var_a_1 = var_d(param_e_1);
  while (var_a_1 !== 96) {
  if (var_a_1 === 36 && param_e_1.source.charCodeAt(param_e_1.index + 1) === 123) {
  var_d(param_e_1);
  num_n = 67174408;
  break;
  }
  if (var_a_1 === 92) {
  var_a_1 = var_d(param_e_1);
  if (var_a_1 === 13) {
  flag_i = true;
  }
  if (var_a_1 > 126) {
  str_o += String.fromCodePoint(var_a_1);
  }
  else {
  const {
  index: var_r_1,
  line: var_s_1,
  column: var_c
  }
  = param_e_1;
  const var_u_1 = var_j(param_e_1, param_t | 1, var_a_1, 1);
  if (var_u_1 >= 0) {
  str_o += String.fromCodePoint(var_u_1);
  }
  else {
  if (var_u_1 !== -1 && param_t & 64) {
  param_e_1.index = var_r_1;
  param_e_1.line = var_s_1;
  param_e_1.column = var_c;
  str_o = null;
  var_a_1 = var_V(param_e_1, var_a_1, () => {
  flag_i = true;
  }
  );
  if (var_a_1 < 0) {
  num_n = 67174408;
  }
  break;
  }
  var_q(param_e_1, var_u_1, 1);
  }
  }
  }
  else if (param_e_1.index < param_e_1.end) {
  if (var_a_1 === 13) {
  flag_i = true;
  }
  if (var_a_1 === 13 && param_e_1.source.charCodeAt(param_e_1.index + 1) === 10) {
  param_e_1.currentChar = param_e_1.source.charCodeAt(++param_e_1.index);
  }
  if (var_a_1 === 13) {
  var_a_1 = 10;
  }
  if ((var_a_1 & 83) < 3 && var_a_1 === 10 || (var_a_1 ^ 8232) <= 1) {
  param_e_1.column = -1;
  param_e_1.line++;
  }
  str_o += String.fromCodePoint(var_a_1);
  }
  if (param_e_1.index >= param_e_1.end) {
  param_e_1.report(17);
  }
  var_a_1 = var_d(param_e_1);
  }
  var_d(param_e_1);
  param_e_1.tokenValue = str_o;
  const var_s = param_e_1.source.slice(var_r + 1, param_e_1.index - (num_n === 67174409 ?
  1 : 2));
  param_e_1.tokenRaw = flag_i ? var_s.replaceAll(/\r\n?/g, "\n") :
  var_s;
  return num_n;
  }
  function var_V(param_e_1, param_t, param_r) {
  while (param_t !== 96) {
  switch (param_t) {
  case 13:
  param_r();
  break;
  case 36:
  {
  const var_r = param_e_1.index + 1;
  if (var_r < param_e_1.end && param_e_1.source.charCodeAt(var_r) === 123) {
  param_e_1.index = var_r;
  param_e_1.column++;
  return -param_t;
  }
  break;
  }
  case 10:
  case 8232:
  case 8233:
  param_e_1.column = -1;
  param_e_1.line++;
  }
  if (param_e_1.index >= param_e_1.end) {
  param_e_1.report(17);
  }
  param_t = var_d(param_e_1);
  }
  return param_t;
  }
  function var_W(param_e_1, param_t) {
  if (param_e_1.index >= param_e_1.end) {
  param_e_1.report(0);
  }
  param_e_1.index--;
  param_e_1.column--;
  return var_H(param_e_1, param_t);
  }
  (function (param_e_1) {
  param_e_1[param_e_1.Empty = 0] = "Empty";
  param_e_1[param_e_1.Escape = 1] = "Escape";
  param_e_1[param_e_1.Class = 2] = "Class";
  }
  )(var_M ||= {
  }
  );
  (function (param_e_1) {
  param_e_1[param_e_1.Empty = 0] = "Empty";
  param_e_1[param_e_1.IgnoreCase = 1] = "IgnoreCase";
  param_e_1[param_e_1.Global = 2] = "Global";
  param_e_1[param_e_1.Multiline = 4] = "Multiline";
  param_e_1[param_e_1.Unicode = 16] = "Unicode";
  param_e_1[param_e_1.Sticky = 8] = "Sticky";
  param_e_1[param_e_1.DotAll = 32] = "DotAll";
  param_e_1[param_e_1.Indices = 64] = "Indices";
  param_e_1[param_e_1.UnicodeSets = 128] = "UnicodeSets";
  }
  )(var_F ||= {
  }
  );
  const list_z = [129, 129, 129, 129, 129, 129, 129, 129, 129, 128, 136, 128, 128,
  130, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129, 129,
  129, 129, 129, 128, 16842798, 134283267, 131, 208897, 8391477, 8390213, 134283267,
  67174411, 16, 8391476, 25233968, 18, 25233969, 67108877, 8457014, 134283266, 134283266,
  134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266, 134283266,
  21, 1074790417, 8456256, 1077936155, 8390721, 22, 133, 208897, 208897, 208897,
  208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897,
  208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897, 208897,
  208897, 208897, 208897, 69271571, 137, 20, 8389959, 208897, 132, 4096, 4096, 4096,
  4096, 4096, 4096, 4096, 208897, 4096, 208897, 208897, 4096, 208897, 4096, 208897,
  4096, 208897, 4096, 4096, 4096, 208897, 4096, 4096, 208897, 4096, 4096, 2162700,
  8389702, 1074790415, 16842799, 129];
  function var_Y(param_e_1, param_t) {
  param_e_1.flags = (param_e_1.flags | 1) ^ 1;
  param_e_1.startIndex = param_e_1.index;
  param_e_1.startColumn = param_e_1.column;
  param_e_1.startLine = param_e_1.line;
  param_e_1.setToken(var_G(param_e_1, param_t, 0));
  }
  function var_G(param_e_1, param_t, param_n) {
  const var_o_1 = param_e_1.index === 0;
  const {
  source: var_i_1
  }
  = param_e_1;
  while (param_e_1.index < param_e_1.end) {
  param_e_1.tokenIndex = param_e_1.index;
  param_e_1.tokenColumn = param_e_1.column;
  param_e_1.tokenLine = param_e_1.line;
  let var_a_1 = param_e_1.currentChar;
  if (var_a_1 <= 126) {
  const var_r = list_z[var_a_1];
  switch (var_r) {
  case 67174411:
  case 16:
  case 2162700:
  case 1074790415:
  case 69271571:
  case 20:
  case 21:
  case 1074790417:
  case 18:
  case 16842799:
  case 133:
  case 129:
  var_d(param_e_1);
  return var_r;
  case 208897:
  return var_S(param_e_1, param_t, 0);
  case 4096:
  return var_S(param_e_1, param_t, 1);
  case 134283266:
  return var_P(param_e_1, param_t, 144);
  case 134283267:
  return var_N(param_e_1, param_t, var_a_1);
  case 132:
  return var_H(param_e_1, param_t);
  case 137:
  return var_O(param_e_1, param_t);
  case 131:
  return var_L(param_e_1);
  case 128:
  var_d(param_e_1);
  break;
  case 130:
  param_n |= 5;
  var_h(param_e_1);
  break;
  case 136:
  var_f(param_e_1, param_n);
  param_n = param_n & -5 | 1;
  break;
  case 8456256:
  {
  const var_r_1 = var_d(param_e_1);
  if (param_e_1.index < param_e_1.end) {
  if (var_r_1 === 60) {
  if (param_e_1.index < param_e_1.end && var_d(param_e_1) === 61) {
  var_d(param_e_1);
  return 4194332;
  }
  else {
  return 8390978;
  }
  }
  if (var_r_1 === 61) {
  var_d(param_e_1);
  return 8390718;
  }
  if (var_r_1 === 33) {
  const var_r_2 = param_e_1.index + 1;
  if (var_r_2 + 1 < param_e_1.end && var_i_1.charCodeAt(var_r_2) === 45 &&
  var_i_1.charCodeAt(var_r_2 + 1) == 45) {
  param_e_1.column += 3;
  param_e_1.currentChar = var_i_1.charCodeAt(param_e_1.index += 3);
  param_n = var__(param_e_1, var_i_1, param_n, param_t, 2, param_e_1.tokenStart);
  continue;
  }
  return 8456256;
  }
  }
  return 8456256;
  }
  case 1077936155:
  {
  var_d(param_e_1);
  const var_t_1 = param_e_1.currentChar;
  if (var_t_1 === 61) {
  if (var_d(param_e_1) === 61) {
  var_d(param_e_1);
  return 8390458;
  }
  else {
  return 8390460;
  }
  }
  else if (var_t_1 === 62) {
  var_d(param_e_1);
  return 10;
  }
  else {
  return 1077936155;
  }
  }
  case 16842798:
  if (var_d(param_e_1) !== 61) {
  return 16842798;
  }
  else if (var_d(param_e_1) !== 61) {
  return 8390461;
  }
  else {
  var_d(param_e_1);
  return 8390459;
  }
  case 8391477:
  if (var_d(param_e_1) !== 61) {
  return 8391477;
  }
  else {
  var_d(param_e_1);
  return 4194340;
  }
  case 8391476:
  {
  var_d(param_e_1);
  if (param_e_1.index >= param_e_1.end) {
  return 8391476;
  }
  const var_t_1 = param_e_1.currentChar;
  if (var_t_1 === 61) {
  var_d(param_e_1);
  return 4194338;
  }
  else if (var_t_1 !== 42) {
  return 8391476;
  }
  else if (var_d(param_e_1) !== 61) {
  return 8391735;
  }
  else {
  var_d(param_e_1);
  return 4194335;
  }
  }
  case 8389959:
  if (var_d(param_e_1) !== 61) {
  return 8389959;
  }
  else {
  var_d(param_e_1);
  return 4194341;
  }
  case 25233968:
  {
  var_d(param_e_1);
  const var_t_1 = param_e_1.currentChar;
  if (var_t_1 === 43) {
  var_d(param_e_1);
  return 33619993;
  }
  else if (var_t_1 === 61) {
  var_d(param_e_1);
  return 4194336;
  }
  else {
  return 25233968;
  }
  }
  case 25233969:
  {
  var_d(param_e_1);
  const var_r_1 = param_e_1.currentChar;
  if (var_r_1 === 45) {
  var_d(param_e_1);
  if ((param_n & 1 || var_o_1) && param_e_1.currentChar === 62) {
  if (!param_e_1.options.webcompat) {
  param_e_1.report(114);
  }
  var_d(param_e_1);
  param_n = var__(param_e_1, var_i_1, param_n, param_t, 3, param_e_1.tokenStart);
  continue;
  }
  return 33619994;
  }
  if (var_r_1 === 61) {
  var_d(param_e_1);
  return 4194337;
  }
  else {
  return 25233969;
  }
  }
  case 8457014:
  var_d(param_e_1);
  if (param_e_1.index < param_e_1.end) {
  const var_r_1 = param_e_1.currentChar;
  if (var_r_1 === 47) {
  var_d(param_e_1);
  param_n = var_b(param_e_1, var_i_1, param_n, 0, param_e_1.tokenStart);
  continue;
  }
  if (var_r_1 === 42) {
  var_d(param_e_1);
  param_n = var_w(param_e_1, var_i_1, param_n);
  continue;
  }
  if (param_t & 32) {
  return var_U(param_e_1);
  }
  if (var_r_1 === 61) {
  var_d(param_e_1);
  return 4259875;
  }
  }
  return 8457014;
  case 67108877:
  {
  const var_r_1 = var_d(param_e_1);
  if (var_r_1 >= 48 && var_r_1 <= 57) {
  return var_P(param_e_1, param_t, 80);
  }
  if (var_r_1 === 46) {
  const var_t_1 = param_e_1.index + 1;
  if (var_t_1 < param_e_1.end && var_i_1.charCodeAt(var_t_1) === 46) {
  param_e_1.column += 2;
  param_e_1.currentChar = var_i_1.charCodeAt(param_e_1.index += 2);
  return 14;
  }
  }
  return 67108877;
  }
  case 8389702:
  {
  var_d(param_e_1);
  const var_t_1 = param_e_1.currentChar;
  if (var_t_1 === 124) {
  var_d(param_e_1);
  if (param_e_1.currentChar === 61) {
  var_d(param_e_1);
  return 4718632;
  }
  else {
  return 8913465;
  }
  }
  else if (var_t_1 === 61) {
  var_d(param_e_1);
  return 4194342;
  }
  else {
  return 8389702;
  }
  }
  case 8390721:
  {
  var_d(param_e_1);
  if (param_t & 1048576) {
  return 8390721;
  }
  const var_r_1 = param_e_1.currentChar;
  if (var_r_1 === 61) {
  var_d(param_e_1);
  return 8390719;
  }
  if (var_r_1 !== 62) {
  return 8390721;
  }
  var_d(param_e_1);
  if (param_e_1.index < param_e_1.end) {
  const var_t_1 = param_e_1.currentChar;
  if (var_t_1 === 62) {
  if (var_d(param_e_1) === 61) {
  var_d(param_e_1);
  return 4194334;
  }
  else {
  return 8390980;
  }
  }
  if (var_t_1 === 61) {
  var_d(param_e_1);
  return 4194333;
  }
  }
  return 8390979;
  }
  case 8390213:
  {
  var_d(param_e_1);
  const var_t_1 = param_e_1.currentChar;
  if (var_t_1 === 38) {
  var_d(param_e_1);
  if (param_e_1.currentChar === 61) {
  var_d(param_e_1);
  return 4718633;
  }
  else {
  return 8913720;
  }
  }
  else if (var_t_1 === 61) {
  var_d(param_e_1);
  return 4194343;
  }
  else {
  return 8390213;
  }
  }
  case 22:
  {
  let var_t_1 = var_d(param_e_1);
  if (var_t_1 === 63) {
  var_d(param_e_1);
  if (param_e_1.currentChar === 61) {
  var_d(param_e_1);
  return 4718634;
  }
  else {
  return 276824446;
  }
  }
  if (var_t_1 === 46) {
  const var_r_1 = param_e_1.index + 1;
  if (var_r_1 < param_e_1.end && (var_t_1 = var_i_1.charCodeAt(var_r_1), !(var_t_1 >= 48) ||
  !(var_t_1 <= 57))) {
  var_d(param_e_1);
  return 67108991;
  }
  }
  return 22;
  }
  }
  }
  else {
  if ((var_a_1 ^ 8232) <= 1) {
  param_n = param_n & -5 | 1;
  var_h(param_e_1);
  continue;
  }
  const var_o_2 = var_p(param_e_1);
  if (var_o_2 > 0) {
  var_a_1 = var_o_2;
  }
  if (fn_r(var_a_1)) {
  param_e_1.tokenValue = "";
  return var_I(param_e_1, param_t, 0, 0);
  }
  if (var_m(var_a_1)) {
  var_d(param_e_1);
  continue;
  }
  param_e_1.report(20, String.fromCodePoint(var_a_1));
  }
  }
  return 1048576;
  }
  function var_Q(param_e_1, param_t) {
  var var_r;
  var var_n;
  if (!(param_e_1.flags & 1) && ~param_e_1.getToken() & 1048576) {
  param_e_1.report(30, list_T[param_e_1.getToken() & 255]);
  }
  if (!var_X(param_e_1, param_t, 1074790417) && (var_r = (var_n = param_e_1.options).onInsertedSemicolon) !== null &&
  var_r !== undefined) {
  var_r.call(var_n, param_e_1.startIndex);
  }
  }
  function var_$(param_e_1, param_t, param_r, param_n) {
  if (param_t - param_r < 13 && param_n === "use strict" && (!(~param_e_1.getToken(
  ) & 1048576) || param_e_1.flags & 1)) {
  return 1;
  }
  else {
  return 0;
  }
  }
  function var_K(param_e_1, param_t, param_r) {
  if (param_e_1.getToken() !== param_r) {
  return 0;
  }
  else {
  var_Y(param_e_1, param_t);
  return 1;
  }
  }
  function var_X(param_e_1, param_t, param_r) {
  return param_e_1.getToken() === param_r && (var_Y(param_e_1, param_t), true);
  }
  function var_Z(param_e_1, param_t, param_r) {
  if (param_e_1.getToken() !== param_r) {
  param_e_1.report(25, list_T[param_r & 255]);
  }
  var_Y(param_e_1, param_t);
  }
  function var_J(param_e_1, param_t) {
  switch (param_t.type) {
  case "ArrayExpression":
  {
  param_t.type = "ArrayPattern";
  const {
  elements: var_r
  }
  = param_t;
  for (let num_t = 0, var_n = var_r.length;
  num_t < var_n;
  ++num_t) {
  const var_n_1 = var_r[num_t];
  if (var_n_1) {
  var_J(param_e_1, var_n_1);
  }
  }
  return;
  }
  case "ObjectExpression":
  {
  param_t.type = "ObjectPattern";
  const {
  properties: var_r
  }
  = param_t;
  for (let num_t = 0, var_n = var_r.length;
  num_t < var_n;
  ++num_t) {
  var_J(param_e_1, var_r[num_t]);
  }
  return;
  }
  case "AssignmentExpression":
  param_t.type = "AssignmentPattern";
  if (param_t.operator !== "=") {
  param_e_1.report(71);
  }
  delete param_t.operator;
  var_J(param_e_1, param_t.left);
  return;
  case "Property":
  var_J(param_e_1, param_t.value);
  return;
  case "SpreadElement":
  param_t.type = "RestElement";
  var_J(param_e_1, param_t.argument);
  }
  }
  function ee(param_e_1, param_t, param_r, param_n, param_o) {
  if (param_t & 1) {
  if (!(~param_n & 36864)) {
  param_e_1.report(120);
  }
  if (!param_o && !(~param_n & 537079808)) {
  param_e_1.report(121);
  }
  }
  if (!(~param_n & 20480) || param_n === -2147483527) {
  param_e_1.report(102);
  }
  if (param_r & 24 && (param_n & 255) == 73) {
  param_e_1.report(100);
  }
  if (param_t & 2050 && param_n === 209006) {
  param_e_1.report(112);
  }
  if (param_t & 1025 && param_n === 241771) {
  param_e_1.report(97, "yield");
  }
  }
  function te(param_e_1, param_t, param_r) {
  if (param_t & 1) {
  if (!(~param_r & 36864)) {
  param_e_1.report(120);
  }
  if (!(~param_r & 537079808)) {
  param_e_1.report(121);
  }
  if (param_r === -2147483526) {
  param_e_1.report(95);
  }
  if (param_r === -2147483527) {
  param_e_1.report(95);
  }
  }
  if (!(~param_r & 20480)) {
  param_e_1.report(102);
  }
  if (param_t & 2050 && param_r === 209006) {
  param_e_1.report(112);
  }
  if (param_t & 1025 && param_r === 241771) {
  param_e_1.report(97, "yield");
  }
  }
  function re(param_e_1, param_t, param_r) {
  var var_n;
  if (param_r === 209006) {
  if (param_t & 2050) {
  param_e_1.report(112);
  }
  if (!(param_e_1.destructible & 128) && ((var_n = param_e_1.firstAwaitLocation) === null ||
  var_n === undefined)) {
  param_e_1.firstAwaitLocation = {
  start: param_e_1.tokenStart,
  end: param_e_1.currentLocation
  };
  }
  param_e_1.destructible |= 128;
  }
  if (param_r === 241771 && param_t & 1024) {
  param_e_1.report(97, "yield");
  }
  return !(~param_r & 20480) || !(~param_r & 36864) || param_r == -2147483526;
  }
  function ne(param_e_1, param_t, param_r, param_n) {
  while (param_t) {
  if (param_t["$" + param_r]) {
  if (param_n) {
  param_e_1.report(139);
  }
  return 1;
  }
  if (param_n && param_t.loop) {
  param_n = 0;
  }
  param_t = param_t.$;
  }
  return 0;
  }
  function oe(param_e_1) {
  switch (param_e_1.type) {
  case "JSXIdentifier":
  return param_e_1.name;
  case "JSXNamespacedName":
  return param_e_1.namespace + ":" + param_e_1.name;
  case "JSXMemberExpression":
  return oe(param_e_1.object) + "." + oe(param_e_1.property);
  }
  }
  function ie(param_e_1, param_t) {
  if (param_e_1 & 1025) {
  return (!(param_e_1 & 2) || param_t !== 209006) && (!(param_e_1 & 1024) ||
  param_t !== 241771) && !(~param_t & 12288);
  }
  else {
  return !(~param_t & 12288) || !(~param_t & 36864);
  }
  }
  function ae(param_e_1, param_t, param_r) {
  if (!(~param_r & 537079808)) {
  if (param_t & 1) {
  param_e_1.report(121);
  }
  param_e_1.flags |= 512;
  }
  if (!ie(param_t, param_r)) {
  param_e_1.report(0);
  }
  }
  const se = new Map(Object.entries({
  quot: "\"",
  amp: "&",
  apos: "'",
  lt: "<",
  gt: ">",
  nbsp: "\xA0",
  iexcl: "¡",
  cent: "¢",
  pound: "£",
  curren: "¤",
  yen: "¥",
  brvbar: "¦",
  sect: "§",
  uml: "¨",
  copy: "©",
  ordf: "ª",
  laquo: "«",
  not: "¬",
  shy: "­",
  reg: "®",
  macr: "¯",
  deg: "°",
  plusmn: "±",
  sup2: "²",
  sup3: "³",
  acute: "´",
  micro: "µ",
  para: "¶",
  middot: "·",
  cedil: "¸",
  sup1: "¹",
  ordm: "º",
  raquo: "»",
  frac14: "¼",
  frac12: "½",
  frac34: "¾",
  iquest: "¿",
  Agrave: "À",
  Aacute: "Á",
  Acirc: "Â",
  Atilde: "Ã",
  Auml: "Ä",
  Aring: "Å",
  AElig: "Æ",
  Ccedil: "Ç",
  Egrave: "È",
  Eacute: "É",
  Ecirc: "Ê",
  Euml: "Ë",
  Igrave: "Ì",
  Iacute: "Í",
  Icirc: "Î",
  Iuml: "Ï",
  ETH: "Ð",
  Ntilde: "Ñ",
  Ograve: "Ò",
  Oacute: "Ó",
  Ocirc: "Ô",
  Otilde: "Õ",
  Ouml: "Ö",
  times: "×",
  Oslash: "Ø",
  Ugrave: "Ù",
  Uacute: "Ú",
  Ucirc: "Û",
  Uuml: "Ü",
  Yacute: "Ý",
  THORN: "Þ",
  szlig: "ß",
  agrave: "à",
  aacute: "á",
  acirc: "â",
  atilde: "ã",
  auml: "ä",
  aring: "å",
  aelig: "æ",
  ccedil: "ç",
  egrave: "è",
  eacute: "é",
  ecirc: "ê",
  euml: "ë",
  igrave: "ì",
  iacute: "í",
  icirc: "î",
  iuml: "ï",
  eth: "ð",
  ntilde: "ñ",
  ograve: "ò",
  oacute: "ó",
  ocirc: "ô",
  otilde: "õ",
  ouml: "ö",
  divide: "÷",
  oslash: "ø",
  ugrave: "ù",
  uacute: "ú",
  ucirc: "û",
  uuml: "ü",
  yacute: "ý",
  thorn: "þ",
  yuml: "ÿ",
  OElig: "Œ",
  oelig: "œ",
  Scaron: "Š",
  scaron: "š",
  Yuml: "Ÿ",
  fnof: "ƒ",
  circ: "ˆ",
  tilde: "˜",
  Alpha: "Α",
  Beta: "Β",
  Gamma: "Γ",
  Delta: "Δ",
  Epsilon: "Ε",
  Zeta: "Ζ",
  Eta: "Η",
  Theta: "Θ",
  Iota: "Ι",
  Kappa: "Κ",
  Lambda: "Λ",
  Mu: "Μ",
  Nu: "Ν",
  Xi: "Ξ",
  Omicron: "Ο",
  Pi: "Π",
  Rho: "Ρ",
  Sigma: "Σ",
  Tau: "Τ",
  Upsilon: "Υ",
  Phi: "Φ",
  Chi: "Χ",
  Psi: "Ψ",
  Omega: "Ω",
  alpha: "α",
  beta: "β",
  gamma: "γ",
  delta: "δ",
  epsilon: "ε",
  zeta: "ζ",
  eta: "η",
  theta: "θ",
  iota: "ι",
  kappa: "κ",
  lambda: "λ",
  mu: "μ",
  nu: "ν",
  xi: "ξ",
  omicron: "ο",
  pi: "π",
  rho: "ρ",
  sigmaf: "ς",
  sigma: "σ",
  tau: "τ",
  upsilon: "υ",
  phi: "φ",
  chi: "χ",
  psi: "ψ",
  omega: "ω",
  thetasym: "ϑ",
  upsih: "ϒ",
  piv: "ϖ",
  ensp: "\u2002",
  emsp: "\u2003",
  thinsp: "\u2009",
  zwnj: "‌",
  zwj: "‍",
  lrm: "‎",
  rlm: "‏",
  ndash: "–",
  mdash: "—",
  lsquo: "‘",
  rsquo: "’",
  sbquo: "‚",
  ldquo: "“",
  rdquo: "”",
  bdquo: "„",
  dagger: "†",
  Dagger: "‡",
  bull: "•",
  hellip: "…",
  permil: "‰",
  prime: "′",
  Prime: "″",
  lsaquo: "‹",
  rsaquo: "›",
  oline: "‾",
  frasl: "⁄",
  euro: "€",
  image: "ℑ",
  weierp: "℘",
  real: "ℜ",
  trade: "™",
  alefsym: "ℵ",
  larr: "←",
  uarr: "↑",
  rarr: "→",
  darr: "↓",
  harr: "↔",
  crarr: "↵",
  lArr: "⇐",
  uArr: "⇑",
  rArr: "⇒",
  dArr: "⇓",
  hArr: "⇔",
  forall: "∀",
  part: "∂",
  exist: "∃",
  empty: "∅",
  nabla: "∇",
  isin: "∈",
  notin: "∉",
  ni: "∋",
  prod: "∏",
  sum: "∑",
  minus: "−",
  lowast: "∗",
  radic: "√",
  prop: "∝",
  infin: "∞",
  ang: "∠",
  and: "∧",
  or: "∨",
  cap: "∩",
  cup: "∪",
  int: "∫",
  there4: "∴",
  sim: "∼",
  cong: "≅",
  asymp: "≈",
  ne: "≠",
  equiv: "≡",
  le: "≤",
  ge: "≥",
  sub: "⊂",
  sup: "⊃",
  nsub: "⊄",
  sube: "⊆",
  supe: "⊇",
  oplus: "⊕",
  otimes: "⊗",
  perp: "⊥",
  sdot: "⋅",
  lceil: "⌈",
  rceil: "⌉",
  lfloor: "⌊",
  rfloor: "⌋",
  lang: "〈",
  rang: "〉",
  loz: "◊",
  spades: "♠",
  clubs: "♣",
  hearts: "♥",
  diams: "♦"
  }
  ));
  function ce(param_e_1) {
  return param_e_1.replaceAll(/&(?:[\da-zA-Z]+|#x[\da-fA-F]+|#\d+);/g, param_e_2 => {
  if (param_e_2.charAt(1) === "#") {
  const var_t_1 = param_e_2.charAt(2) === "x" ? parseInt(param_e_2.slice(3), 16) :
  parseInt(param_e_2.slice(2), 10);
  if (var_t_1 > 1114111) {
  return param_e_2;
  }
  else {
  return String.fromCodePoint(var_t_1);
  }
  }
  return se.get(param_e_2.slice(1, -1)) ?? param_e_2;
  }
  );
  }
  function ue(param_e_1, param_t) {
  param_e_1.startIndex = param_e_1.tokenIndex = param_e_1.index;
  param_e_1.startColumn = param_e_1.tokenColumn = param_e_1.column;
  param_e_1.startLine = param_e_1.tokenLine = param_e_1.line;
  param_e_1.setToken(list_o[param_e_1.currentChar] & 8192 ? function (param_e_2) {
  const var_t_1 = param_e_2.currentChar;
  let var_r = var_d(param_e_2);
  const var_n = param_e_2.index;
  while (var_r !== var_t_1) {
  if (param_e_2.index >= param_e_2.end) {
  param_e_2.report(16);
  }
  if (var_r === 13) {
  if (param_e_2.source.charCodeAt(param_e_2.index + 1) === 10) {
  var_d(param_e_2);
  }
  param_e_2.column = -1;
  param_e_2.line++;
  }
  else if (var_r === 10 || var_r === 8232 || var_r === 8233) {
  param_e_2.column = -1;
  param_e_2.line++;
  }
  var_r = var_d(param_e_2);
  }
  if (var_r !== var_t_1) {
  param_e_2.report(16);
  }
  param_e_2.tokenValue = ce(param_e_2.source.slice(var_n, param_e_2.index));
  var_d(param_e_2);
  if (param_e_2.options.raw) {
  param_e_2.tokenRaw = param_e_2.source.slice(param_e_2.tokenIndex, param_e_2.index);
  }
  return 134283267;
  }
  (param_e_1) : var_G(param_e_1, param_t, 0));
  return param_e_1.getToken();
  }
  function le(param_e_1) {
  param_e_1.startIndex = param_e_1.tokenIndex = param_e_1.index;
  param_e_1.startColumn = param_e_1.tokenColumn = param_e_1.column;
  param_e_1.startLine = param_e_1.tokenLine = param_e_1.line;
  if (param_e_1.index >= param_e_1.end) {
  param_e_1.setToken(1048576);
  return;
  }
  if (param_e_1.currentChar === 60) {
  var_d(param_e_1);
  param_e_1.setToken(8456256);
  return;
  }
  if (param_e_1.currentChar === 123) {
  var_d(param_e_1);
  param_e_1.setToken(2162700);
  return;
  }
  if (param_e_1.currentChar === 125) {
  param_e_1.report(180);
  }
  if (param_e_1.currentChar === 62) {
  param_e_1.report(181);
  }
  let num_t = 0;
  let flag_r = false;
  while (param_e_1.index < param_e_1.end) {
  const var_n_1 = param_e_1.source.charCodeAt(param_e_1.index);
  if (var_n_1 === 13) {
  num_t |= 5;
  flag_r = true;
  var_h(param_e_1);
  }
  else if (var_n_1 === 10) {
  var_f(param_e_1, num_t);
  num_t = num_t & -5 | 1;
  }
  else if (var_n_1 === 8232 || var_n_1 === 8233) {
  param_e_1.flags |= 1;
  param_e_1.currentChar = param_e_1.source.charCodeAt(++param_e_1.index);
  param_e_1.column = 0;
  param_e_1.line++;
  num_t = num_t & -5 | 1;
  }
  else {
  var_d(param_e_1);
  }
  if (list_o[param_e_1.currentChar] & 16384) {
  break;
  }
  }
  if (param_e_1.tokenIndex === param_e_1.index) {
  param_e_1.report(0);
  }
  const var_n = param_e_1.source.slice(param_e_1.tokenIndex, param_e_1.index);
  const var_i_1 = flag_r ? var_n.replaceAll("\r\n", "\n") : var_n;
  if (param_e_1.options.raw) {
  param_e_1.tokenRaw = var_i_1;
  }
  param_e_1.tokenValue = ce(var_i_1);
  param_e_1.setToken(138);
  }
  function de(param_e_1) {
  if (param_e_1.getToken() & 143360) {
  const {
  index: var_t_1
  }
  = param_e_1;
  let var_r = param_e_1.currentChar;
  while (list_o[var_r] & 32770) {
  var_r = var_d(param_e_1);
  }
  param_e_1.tokenValue += param_e_1.source.slice(var_t_1, param_e_1.index);
  param_e_1.setToken(208897, true);
  }
  return param_e_1.getToken();
  }
  class pe {
  constructor(param_e_1, param_t) {
  var_a(this, "parser", undefined);
  var_a(this, "parent", undefined);
  var_a(this, "refs", Object.create(null));
  var_a(this, "privateIdentifiers", new Map());
  this.parser = param_e_1;
  this.parent = param_t;
  }
  addPrivateIdentifier(param_e_1, param_t) {
  const {
  privateIdentifiers: var_r
  }
  = this;
  let var_n = param_t & 800;
  if (!(var_n & 768)) {
  var_n |= 768;
  }
  const var_o_1 = var_r.get(param_e_1);
  if (this.hasPrivateIdentifier(param_e_1) && ((var_o_1 & 32) != (var_n & 32) ||
  var_o_1 & var_n & 768)) {
  this.parser.report(148, param_e_1);
  }
  var_r.set(param_e_1, this.hasPrivateIdentifier(param_e_1) ?
  var_o_1 | var_n : var_n);
  }
  addPrivateIdentifierRef(param_e_1) {
  var var_t_1;
  var var_r;
  if ((var_r = (var_t_1 = this.refs)[param_e_1]) === null ||
  var_r === undefined) {
  var_t_1[param_e_1] = [];
  }
  this.refs[param_e_1].push(this.parser.tokenStart);
  }
  isPrivateIdentifierDefined(param_e_1) {
  var var_t_1;
  return this.hasPrivateIdentifier(param_e_1) || Boolean((var_t_1 = this.parent) === null ||
  var_t_1 === undefined ? undefined : var_t_1.isPrivateIdentifierDefined(param_e_1));
  }
  validatePrivateIdentifierRefs() {
  for (const var_e in this.refs) {
  if (!this.isPrivateIdentifierDefined(var_e)) {
  const {
  index: var_t_1,
  line: var_r,
  column: var_n
  }
  = this.refs[var_e][0];
  throw new var_D({
  index: var_t_1,
  line: var_r,
  column: var_n
  }
  , {
  index: var_t_1 + var_e.length,
  line: var_r,
  column: var_n + var_e.length
  }
  , 4, var_e);
  }
  }
  }
  hasPrivateIdentifier(param_e_1) {
  return this.privateIdentifiers.has(param_e_1);
  }
  }
  class fe {
  constructor(param_e_1, param_t = 2, param_r) {
  var_a(this, "parser", undefined);
  var_a(this, "type", undefined);
  var_a(this, "parent", undefined);
  var_a(this, "scopeError", undefined);
  var_a(this, "variableBindings", new Map());
  this.parser = param_e_1;
  this.type = param_t;
  this.parent = param_r;
  }
  createChildScope(param_e_1) {
  return new fe(this.parser, param_e_1, this);
  }
  addVarOrBlock(param_e_1, param_t, param_r, param_n, param_o, param_i) {
  if (param_r & 4) {
  this.addVarName(param_e_1, param_t, param_r, param_n, param_o);
  }
  else {
  this.addBlockName(param_e_1, param_t, param_r, param_n, param_o, param_i);
  }
  if (param_i & 64) {
  this.parser.declareUnboundVariable(param_t);
  }
  }
  addVarName(param_e_1, param_t, param_r, param_n, param_o) {
  const {
  parser: var_i_1
  }
  = this;
  let var_a_1 = this;
  while (var_a_1 && !(var_a_1.type & 128)) {
  const {
  variableBindings: var_s
  }
  = var_a_1;
  const var_c = var_s.get(param_t);
  if (var_c && var_c & 248 && (!var_i_1.options.webcompat ||
  param_e_1 & 1 || (!(param_r & 128) || !(var_c & 68)) && (!(var_c & 128) ||
  !(param_r & 68)))) {
  throw new var_D(param_n, param_o, 147, param_t);
  }
  if (var_a_1 === this && var_c && var_c & 1 && param_r & 1) {
  var_a_1.recordScopeError(147, param_n, param_o, param_t);
  }
  if (var_c && (var_c & 256 || var_c & 512 && !var_i_1.options.webcompat)) {
  throw new var_D(param_n, param_o, 147, param_t);
  }
  var_a_1.variableBindings.set(param_t, param_r);
  var_a_1 = var_a_1.parent;
  }
  }
  hasVariable(param_e_1) {
  return this.variableBindings.has(param_e_1);
  }
  addBlockName(param_e_1, param_t, param_r, param_n, param_o, param_i = 0) {
  var var_a_1;
  const {
  parser: var_s
  }
  = this;
  const var_c = this.variableBindings.get(param_t);
  if (var_c && !(var_c & 2)) {
  if (param_r & 1) {
  this.recordScopeError(147, param_n, param_o, param_t);
  }
  else if (!var_s.options.webcompat || param_e_1 & 1 || !(param_i & 2) ||
  var_c !== 64 || param_r !== 64) {
  throw new var_D(param_n, param_o, 147, param_t);
  }
  }
  if (this.type & 64 && (var_a_1 = this.parent) !== null && var_a_1 !== undefined &&
  var_a_1.hasVariable(param_t) && !(this.parent.variableBindings.get(param_t) & 2)) {
  throw new var_D(param_n, param_o, 147, param_t);
  }
  if (this.type & 512 && var_c && !(var_c & 2) && param_r & 1) {
  this.recordScopeError(147, param_n, param_o, param_t);
  }
  if (this.type & 32 && this.parent.variableBindings.get(param_t) & 768) {
  throw new var_D(param_n, param_o, 161, param_t);
  }
  this.variableBindings.set(param_t, param_r);
  }
  recordScopeError(param_e_1, param_t, param_r, ...param_n) {
  var var_o_1;
  if ((var_o_1 = this.scopeError) === null || var_o_1 === undefined) {
  this.scopeError = {
  type: param_e_1,
  params: param_n,
  start: param_t,
  end: param_r
  };
  }
  }
  reportScopeError() {
  const {
  scopeError: var_e
  }
  = this;
  if (var_e) {
  throw new var_D(var_e.start, var_e.end, var_e.type, ...var_e.params);
  }
  }
  }
  function he(param_e_1, param_t, param_r, param_n, param_o) {
  const var_i_1 = param_e_1.createScope().createChildScope(512);
  var_i_1.addBlockName(param_t, param_r, 1, param_n, param_o);
  return var_i_1;
  }
  class me {
  constructor(param_e_1, param_t = {
  }
  ) {
  var var_r;
  var var_o_1;
  var_a(this, "source", undefined);
  var_a(this, "lastOnToken", null);
  var_a(this, "options", undefined);
  var_a(this, "token", 1048576);
  var_a(this, "flags", 0);
  var_a(this, "features", 0);
  var_a(this, "index", 0);
  var_a(this, "line", 1);
  var_a(this, "column", 0);
  var_a(this, "startIndex", 0);
  var_a(this, "end", 0);
  var_a(this, "tokenIndex", 0);
  var_a(this, "startColumn", 0);
  var_a(this, "tokenColumn", 0);
  var_a(this, "tokenLine", 1);
  var_a(this, "startLine", 1);
  var_a(this, "tokenValue", "");
  var_a(this, "tokenRaw", "");
  var_a(this, "tokenRegExp", undefined);
  var_a(this, "currentChar", 0);
  var_a(this, "exportedNames", new Set());
  var_a(this, "exportedBindings", new Set());
  var_a(this, "assignable", 0);
  var_a(this, "destructible", 0);
  var_a(this, "strictReservedRange", null);
  var_a(this, "firstAwaitLocation", null);
  var_a(this, "leadingDecorators", {
  decorators: []
  }
  );
  this.source = param_e_1;
  this.end = param_e_1.length;
  this.currentChar = param_e_1.charCodeAt(0);
  this.options = function (param_e_2) {
  let var_t_1 = var_i({
  validateRegex: true,
  features: 0
  }
  , param_e_2);
  let {
  features: var_r_1,
  next: var_o_2,
  ranges: var_a_1,
  module: var_s,
  sourceType: var_c,
  globalReturn: var_u_1
  }
  = var_t_1;
  let var_l_1 = function (param_e_3, param_t_1) {
  if (param_e_3 == null) {
  return {
  };
  }
  var var_r_2;
  var var_n;
  var var_o_3 = function (param_e_4, param_t_2) {
  if (param_e_4 == null) {
  return {
  };
  }
  var obj_r = {
  };
  for (var var_n_1 in param_e_4) {
  if ({
  }
  .hasOwnProperty.call(param_e_4, var_n_1)) {
  if (param_t_2.indexOf(var_n_1) !== -1) {
  continue;
  }
  obj_r[var_n_1] = param_e_4[var_n_1];
  }
  }
  return obj_r;
  }
  (param_e_3, param_t_1);
  if (Object.getOwnPropertySymbols) {
  var var_i_1 = Object.getOwnPropertySymbols(param_e_3);
  for (var_n = 0;
  var_n < var_i_1.length;
  var_n++) {
  var_r_2 = var_i_1[var_n];
  if (param_t_1.indexOf(var_r_2) === -1 && {
  }
  .propertyIsEnumerable.call(param_e_3, var_r_2)) {
  var_o_3[var_r_2] = param_e_3[var_r_2];
  }
  }
  }
  return var_o_3;
  }
  (var_t_1, list_n);
  if (var_o_2) {
  var_r_1 |= 7;
  }
  var_a_1 = function (param_e_3, param_t_1, param_r, param_n) {
  if (param_e_3) {
  if (param_e_3 === true) {
  return {
  start: true,
  end: true,
  range: true
  };
  }
  else {
  return {
  start: (param_t_1 = param_e_3.start) !== null && param_t_1 !== undefined &&
  param_t_1,
  end: (param_r = param_e_3.end) !== null && param_r !== undefined &&
  param_r,
  range: (param_n = param_e_3.range) !== null && param_n !== undefined &&
  param_n
  };
  }
  }
  }
  (var_a_1);
  if (var_s && !var_c) {
  var_c = "module";
  }
  if (!!var_u_1 && (!var_c || var_c === "script")) {
  var_c = "commonjs";
  }
  return var_i(var_i({
  }
  , var_l_1), {
  }
  , {
  ranges: var_a_1,
  features: var_r_1,
  sourceType: var_c
  }
  );
  }
  (param_t);
  this.features = this.options.features;
  if (Array.isArray(this.options.onComment)) {
  this.options.onComment = (var_r = this.options.onComment, var_o_1 = this.options,
  function (param_e_2, param_t_1, param_n, param_i, param_a) {
  const obj_s = {
  type: param_e_2,
  value: param_t_1
  };
  const {
  ranges: var_c
  }
  = var_o_1;
  if (var_c) {
  if (var_c.start) {
  obj_s.start = param_n;
  }
  if (var_c.end) {
  obj_s.end = param_i;
  }
  if (var_c.range) {
  obj_s.range = [param_n, param_i];
  }
  }
  if (var_o_1.loc) {
  obj_s.loc = param_a;
  }
  var_r.push(obj_s);
  }
  );
  }
  if (Array.isArray(this.options.onToken)) {
  this.options.onToken = function (param_e_2, param_t_1) {
  return function (param_r, param_n, param_o, param_i) {
  const obj_a = {
  token: param_r
  };
  const {
  ranges: var_s
  }
  = param_t_1;
  if (var_s) {
  if (var_s.start) {
  obj_a.start = param_n;
  }
  if (var_s.end) {
  obj_a.end = param_o;
  }
  if (var_s.range) {
  obj_a.range = [param_n, param_o];
  }
  }
  if (param_t_1.loc) {
  obj_a.loc = param_i;
  }
  param_e_2.push(obj_a);
  };
  }
  (this.options.onToken, this.options);
  }
  }
  getToken() {
  return this.token;
  }
  setToken(param_e_1, param_t = false) {
  this.token = param_e_1;
  const {
  onToken: var_r
  }
  = this.options;
  if (var_r) {
  if (param_e_1 !== 1048576) {
  const obj_n = {
  start: {
  line: this.tokenLine,
  column: this.tokenColumn
  }
  ,
  end: {
  line: this.line,
  column: this.column
  }
  };
  if (!param_t && this.lastOnToken) {
  var_r(...this.lastOnToken);
  }
  this.lastOnToken = [var_v(param_e_1), this.tokenIndex, this.index, obj_n];
  }
  else if (this.lastOnToken) {
  var_r(...this.lastOnToken);
  this.lastOnToken = null;
  }
  }
  return param_e_1;
  }
  get tokenStart() {
  return {
  index: this.tokenIndex,
  line: this.tokenLine,
  column: this.tokenColumn
  };
  }
  get startPosition() {
  return {
  index: this.startIndex,
  line: this.startLine,
  column: this.startColumn
  };
  }
  get currentLocation() {
  return {
  index: this.index,
  line: this.line,
  column: this.column
  };
  }
  finishNode(param_e_1, param_t, param_r) {
  const {
  ranges: var_n
  }
  = this.options;
  if (var_n) {
  const var_o_1 = param_r ? param_r.index : this.startIndex;
  if (var_n.start) {
  param_e_1.start = param_t.index;
  }
  if (var_n.end) {
  param_e_1.end = var_o_1;
  }
  if (var_n.range) {
  param_e_1.range = [param_t.index, var_o_1];
  }
  }
  if (this.options.loc) {
  param_e_1.loc = {
  start: {
  line: param_t.line,
  column: param_t.column
  }
  ,
  end: param_r ? {
  line: param_r.line,
  column: param_r.column
  }
  : {
  line: this.startLine,
  column: this.startColumn
  }
  };
  if (this.options.source) {
  param_e_1.loc.source = this.options.source;
  }
  }
  return param_e_1;
  }
  addBindingToExports(param_e_1) {
  this.exportedBindings.add(param_e_1);
  }
  declareUnboundVariable(param_e_1) {
  const {
  exportedNames: var_t_1
  }
  = this;
  if (var_t_1.has(param_e_1)) {
  this.report(149, param_e_1);
  }
  var_t_1.add(param_e_1);
  }
  report(param_e_1, ...param_t) {
  throw new var_D(this.tokenStart, this.currentLocation, param_e_1, ...param_t);
  }
  createScopeIfLexical(param_e_1, param_t) {
  if (this.options.lexical) {
  return this.createScope(param_e_1, param_t);
  }
  }
  createScope(param_e_1, param_t) {
  return new fe(this, param_e_1, param_t);
  }
  createPrivateScopeIfLexical(param_e_1) {
  if (this.options.lexical) {
  return new pe(this, param_e_1);
  }
  }
  cloneIdentifier(param_e_1) {
  return structuredClone(param_e_1);
  }
  cloneStringLiteral(param_e_1) {
  return structuredClone(param_e_1);
  }
  }
  function ge(param_e_1, param_t = {
  }
  , param_r = 0) {
  const var_n = new me(param_e_1, param_t);
  if (var_n.options.sourceType === "module") {
  param_r |= 3;
  }
  if (var_n.options.sourceType === "commonjs") {
  param_r |= 69632;
  }
  if (var_n.options.impliedStrict) {
  param_r |= 1;
  }
  (function (param_e_2) {
  const {
  source: var_t_1
  }
  = param_e_2;
  if (param_e_2.currentChar === 35 && var_t_1.charCodeAt(param_e_2.index + 1) === 33) {
  var_d(param_e_2);
  var_d(param_e_2);
  var_b(param_e_2, var_t_1, 0, 4, param_e_2.tokenStart);
  }
  }
  )(var_n);
  const var_o_1 = var_n.createScopeIfLexical();
  let var_i_1;
  let str_a = "script";
  if (param_r & 2) {
  str_a = "module";
  var_i_1 = function (param_e_2, param_t_1, param_r_1) {
  var_Y(param_e_2, param_t_1 | 32);
  const list_n_1 = [];
  while (param_e_2.getToken() === 134283267) {
  const {
  tokenStart: var_r
  }
  = param_e_2;
  const var_o_2 = param_e_2.getToken();
  list_n_1.push(ke(param_e_2, param_t_1, ut(param_e_2, param_t_1), var_o_2, var_r));
  }
  while (param_e_2.getToken() !== 1048576) {
  list_n_1.push(ve(param_e_2, param_t_1, param_r_1));
  }
  return list_n_1;
  }
  (var_n, param_r | 8, var_o_1);
  if (var_o_1) {
  for (const var_e of var_n.exportedBindings) {
  if (!var_o_1.hasVariable(var_e)) {
  var_n.report(150, var_e);
  }
  }
  }
  }
  else {
  var_i_1 = function (param_e_2, param_t_1, param_r_1) {
  var_Y(param_e_2, param_t_1 | 262176);
  const list_n_1 = [];
  while (param_e_2.getToken() === 134283267) {
  const {
  index: var_r,
  tokenValue: var_o_2,
  tokenStart: var_i_2,
  tokenIndex: var_a_1
  }
  = param_e_2;
  const var_s = param_e_2.getToken();
  const var_c = ut(param_e_2, param_t_1);
  if (var_$(param_e_2, var_r, var_a_1, var_o_2)) {
  param_t_1 |= 1;
  if (param_e_2.flags & 64) {
  throw new var_D(param_e_2.tokenStart, param_e_2.currentLocation, 9);
  }
  if (param_e_2.flags & 4096) {
  throw new var_D(param_e_2.tokenStart, param_e_2.currentLocation, 15);
  }
  }
  list_n_1.push(ke(param_e_2, param_t_1, var_c, var_s, var_i_2));
  }
  while (param_e_2.getToken() !== 1048576) {
  list_n_1.push(ye(param_e_2, param_t_1, param_r_1, undefined, {
  }
  , 4));
  }
  return list_n_1;
  }
  (var_n, param_r | 8, var_o_1);
  }
  return var_n.finishNode({
  type: "Program",
  sourceType: str_a,
  body: var_i_1
  }
  , {
  index: 0,
  line: 1,
  column: 0
  }
  , var_n.currentLocation);
  }
  function ve(param_e_1, param_t, param_r) {
  let var_n;
  if (param_e_1.getToken() === 133) {
  Object.assign(param_e_1.leadingDecorators, {
  start: param_e_1.tokenStart,
  decorators: At(param_e_1, param_t, undefined)
  }
  );
  }
  switch (param_e_1.getToken()) {
  case 20564:
  var_n = function (param_e_2, param_t_1, param_r_1) {
  const var_n_1 = param_e_2.leadingDecorators.decorators.length ?
  param_e_2.leadingDecorators.start : param_e_2.tokenStart;
  var_Y(param_e_2, param_t_1 | 32);
  const var_o_1 = var_X(param_e_2, param_t_1 | 32, 20561);
  if (param_e_2.leadingDecorators.decorators.length && param_e_2.getToken() !== 86094) {
  param_e_2.report(172);
  }
  const list_i = [];
  let var_a_1 = null;
  let var_s = null;
  let list_c_1 = [];
  if (var_o_1) {
  switch (param_e_2.getToken()) {
  case 86104:
  var_a_1 = lt(param_e_2, param_t_1, param_r_1, undefined, 1, 1, 0, param_e_2.tokenStart,
  4);
  break;
  case 133:
  if (!(param_e_2.features & 1)) {
  param_e_2.report(30, "@");
  }
  case 86094:
  var_a_1 = kt(param_e_2, param_t_1, param_r_1, undefined, 1);
  break;
  case 209005:
  {
  const {
  tokenStart: var_n_2
  }
  = param_e_2;
  var_a_1 = ct(param_e_2, param_t_1);
  const {
  flags: var_o_2
  }
  = param_e_2;
  if (!(var_o_2 & 1)) {
  if (param_e_2.getToken() === 86104) {
  var_a_1 = lt(param_e_2, param_t_1, param_r_1, undefined, 1, 1, 1, var_n_2, 4);
  }
  else if (param_e_2.getToken() === 67174411) {
  var_a_1 = Tt(param_e_2, param_t_1, undefined, var_a_1, 1, 1, var_o_2, var_n_2);
  var_a_1 = Ge(param_e_2, param_t_1, undefined, var_a_1, 0, 0, var_n_2);
  var_a_1 = qe(param_e_2, param_t_1, undefined, 0, 0, var_n_2, var_a_1);
  }
  else if (param_e_2.getToken() & 143360) {
  param_r_1 &&= he(param_e_2, param_t_1, param_e_2.tokenValue, param_e_2.tokenStart,
  param_e_2.currentLocation);
  var_a_1 = ct(param_e_2, param_t_1);
  var_a_1 = wt(param_e_2, param_t_1, param_r_1, undefined, [var_a_1], 1, var_n_2);
  }
  }
  break;
  }
  default:
  var_a_1 = Ue(param_e_2, param_t_1, undefined, 1, 0, param_e_2.tokenStart);
  var_Q(param_e_2, param_t_1 | 32);
  }
  if (param_r_1) {
  param_e_2.declareUnboundVariable("default");
  }
  return param_e_2.finishNode({
  type: "ExportDefaultDeclaration",
  declaration: var_a_1
  }
  , var_n_1);
  }
  switch (param_e_2.getToken()) {
  case 8391476:
  {
  var_Y(param_e_2, param_t_1);
  let var_o_2 = null;
  if (var_X(param_e_2, param_t_1, 77932)) {
  if (param_r_1) {
  param_e_2.declareUnboundVariable(param_e_2.tokenValue);
  }
  var_o_2 = tt(param_e_2, param_t_1);
  }
  var_Z(param_e_2, param_t_1, 209011);
  if (param_e_2.getToken() !== 134283267) {
  param_e_2.report(105, "Export");
  }
  var_s = ut(param_e_2, param_t_1);
  const obj_i = {
  type: "ExportAllDeclaration",
  source: var_s,
  exported: var_o_2,
  attributes: Ze(param_e_2, param_t_1)
  };
  var_Q(param_e_2, param_t_1 | 32);
  return param_e_2.finishNode(obj_i, var_n_1);
  }
  case 2162700:
  {
  var_Y(param_e_2, param_t_1);
  const list_n_1 = [];
  const list_o_1 = [];
  let num_a = 0;
  while (param_e_2.getToken() & 143360 || param_e_2.getToken() === 134283267) {
  const {
  tokenStart: var_s_1,
  tokenValue: var_c
  }
  = param_e_2;
  const var_u_1 = tt(param_e_2, param_t_1);
  let var_l_1;
  if (var_u_1.type === "Literal") {
  num_a = 1;
  }
  if (param_e_2.getToken() === 77932) {
  var_Y(param_e_2, param_t_1);
  if (!(param_e_2.getToken() & 143360) && param_e_2.getToken() !== 134283267) {
  param_e_2.report(106);
  }
  if (param_r_1) {
  list_n_1.push(param_e_2.tokenValue);
  list_o_1.push(var_c);
  }
  var_l_1 = tt(param_e_2, param_t_1);
  }
  else {
  if (param_r_1) {
  list_n_1.push(param_e_2.tokenValue);
  list_o_1.push(param_e_2.tokenValue);
  }
  var_l_1 = var_u_1.type === "Literal" ? param_e_2.cloneStringLiteral(var_u_1) :
  param_e_2.cloneIdentifier(var_u_1);
  }
  list_i.push(param_e_2.finishNode({
  type: "ExportSpecifier",
  local: var_u_1,
  exported: var_l_1
  }
  , var_s_1));
  if (param_e_2.getToken() !== 1074790415) {
  var_Z(param_e_2, param_t_1, 18);
  }
  }
  var_Z(param_e_2, param_t_1, 1074790415);
  if (var_X(param_e_2, param_t_1, 209011)) {
  if (param_e_2.getToken() !== 134283267) {
  param_e_2.report(105, "Export");
  }
  var_s = ut(param_e_2, param_t_1);
  list_c_1 = Ze(param_e_2, param_t_1);
  if (param_r_1) {
  list_n_1.forEach(param_t_2 => param_e_2.declareUnboundVariable(param_t_2));
  }
  }
  else {
  if (num_a) {
  param_e_2.report(174);
  }
  if (param_r_1) {
  list_n_1.forEach(param_t_2 => param_e_2.declareUnboundVariable(param_t_2));
  list_o_1.forEach(param_t_2 => param_e_2.addBindingToExports(param_t_2));
  }
  }
  var_Q(param_e_2, param_t_1 | 32);
  break;
  }
  case 133:
  if (!(param_e_2.features & 1)) {
  param_e_2.report(30, "@");
  }
  case 86094:
  var_a_1 = kt(param_e_2, param_t_1, param_r_1, undefined, 2);
  break;
  case 86104:
  var_a_1 = lt(param_e_2, param_t_1, param_r_1, undefined, 1, 2, 0, param_e_2.tokenStart,
  4);
  break;
  case 241737:
  var_a_1 = Se(param_e_2, param_t_1, param_r_1, undefined, 8, 64);
  break;
  case 86090:
  var_a_1 = Se(param_e_2, param_t_1, param_r_1, undefined, 16, 64);
  break;
  case 86088:
  var_a_1 = Oe(param_e_2, param_t_1, param_r_1, undefined, 64);
  break;
  case 209005:
  {
  const {
  tokenStart: var_n_2
  }
  = param_e_2;
  var_Y(param_e_2, param_t_1);
  if (!(param_e_2.flags & 1) && param_e_2.getToken() === 86104) {
  var_a_1 = lt(param_e_2, param_t_1, param_r_1, undefined, 1, 2, 1, var_n_2, 4);
  break;
  }
  }
  default:
  param_e_2.report(30, list_T[param_e_2.getToken() & 255]);
  }
  const obj_u = {
  type: "ExportNamedDeclaration",
  declaration: var_a_1,
  specifiers: list_i,
  source: var_s,
  attributes: list_c_1
  };
  return param_e_2.finishNode(obj_u, var_n_1);
  }
  (param_e_1, param_t, param_r);
  break;
  case 86106:
  if (param_e_1.leadingDecorators.decorators.length) {
  param_e_1.report(172);
  }
  var_n = function (param_e_2, param_t_1, param_r_1) {
  const var_n_1 = param_e_2.tokenStart;
  let var_o_1;
  var_Y(param_e_2, param_t_1);
  let flag_a = false;
  let var_s = null;
  const {
  tokenStart: var_c
  }
  = param_e_2;
  let list_u = [];
  if (param_e_2.getToken() === 134283267) {
  var_o_1 = ut(param_e_2, param_t_1);
  }
  else {
  if (param_e_2.getToken() & 143360) {
  const var_n_2 = param_e_2.getToken();
  const {
  tokenValue: var_i_1,
  tokenStart: var_l_2,
  currentLocation: var_d_1
  }
  = param_e_2;
  const var_p_1 = param_e_2.features & 2 && !(var_n_2 & -2147483648) &&
  var_i_1 == "defer";
  const var_f_1 = param_e_2.features & 4 && !(var_n_2 & -2147483648) &&
  var_i_1 == "source";
  if (var_p_1 || var_f_1) {
  const var_n_3 = ct(param_e_2, param_t_1);
  if (var_i_1 === "defer") {
  if (param_e_2.getToken() === 8391476) {
  var_s = "defer";
  list_u = [Pe(param_e_2, param_t_1, param_r_1)];
  }
  else if (param_e_2.getToken() === 209011 || param_e_2.getToken() === 18) {
  if (param_r_1 != null) {
  param_r_1.addBlockName(param_t_1, var_i_1, 8, var_l_2, var_d_1);
  }
  list_u = [param_e_2.finishNode({
  type: "ImportDefaultSpecifier",
  local: var_n_3
  }
  , var_c)];
  }
  else {
  param_e_2.report(108);
  }
  }
  else if (param_e_2.getToken() === 209011) {
  const var_p_2 = param_e_2.getToken();
  const var_f_2 = param_e_2.tokenStart;
  const var_h_1 = param_e_2.currentLocation;
  const var_m_1 = ct(param_e_2, param_t_1);
  if (param_e_2.getToken() === 209011) {
  ee(param_e_2, param_t_1, 16, var_p_2, 0);
  if (param_r_1 != null) {
  param_r_1.addBlockName(param_t_1, var_m_1.name, 8, var_f_2, var_h_1);
  }
  var_s = "source";
  list_u = [param_e_2.finishNode({
  type: "ImportDefaultSpecifier",
  local: var_m_1
  }
  , var_f_2)];
  }
  else {
  if (param_r_1 != null) {
  param_r_1.addBlockName(param_t_1, var_i_1, 8, var_l_2, var_d_1);
  }
  list_u = [param_e_2.finishNode({
  type: "ImportDefaultSpecifier",
  local: var_n_3
  }
  , var_c)];
  if (param_e_2.getToken() !== 134283267) {
  param_e_2.report(105, "Import");
  }
  var_o_1 = ut(param_e_2, param_t_1);
  flag_a = true;
  }
  }
  else if (param_e_2.getToken() & 143360) {
  var_s = "source";
  const var_n_4 = param_e_2.tokenStart;
  const var_o_2 = Re(param_e_2, param_t_1, param_r_1);
  list_u = [param_e_2.finishNode({
  type: "ImportDefaultSpecifier",
  local: var_o_2
  }
  , var_n_4)];
  }
  else if (param_e_2.getToken() === 18) {
  if (param_r_1 != null) {
  param_r_1.addBlockName(param_t_1, var_i_1, 8, var_l_2, var_d_1);
  }
  list_u = [param_e_2.finishNode({
  type: "ImportDefaultSpecifier",
  local: var_n_3
  }
  , var_c)];
  }
  else {
  param_e_2.report(109);
  }
  }
  else {
  const var_n_3 = Re(param_e_2, param_t_1, param_r_1);
  list_u = [param_e_2.finishNode({
  type: "ImportDefaultSpecifier",
  local: var_n_3
  }
  , var_c)];
  }
  if (var_s === null && !flag_a && var_X(param_e_2, param_t_1, 18)) {
  switch (param_e_2.getToken()) {
  case 8391476:
  list_u.push(Pe(param_e_2, param_t_1, param_r_1));
  break;
  case 2162700:
  Be(param_e_2, param_t_1, param_r_1, list_u);
  break;
  default:
  param_e_2.report(107);
  }
  }
  }
  else {
  switch (param_e_2.getToken()) {
  case 8391476:
  list_u = [Pe(param_e_2, param_t_1, param_r_1)];
  break;
  case 2162700:
  Be(param_e_2, param_t_1, param_r_1, list_u);
  break;
  case 67174411:
  return Fe(param_e_2, param_t_1, undefined, var_n_1);
  case 67108877:
  return Me(param_e_2, param_t_1, var_n_1);
  default:
  param_e_2.report(30, list_T[param_e_2.getToken() & 255]);
  }
  }
  if (!flag_a) {
  var_o_1 = function (param_e_3, param_t_2) {
  var_Z(param_e_3, param_t_2, 209011);
  if (param_e_3.getToken() !== 134283267) {
  param_e_3.report(105, "Import");
  }
  return ut(param_e_3, param_t_2);
  }
  (param_e_2, param_t_1);
  }
  }
  const var_l_1 = var_i({
  type: "ImportDeclaration",
  specifiers: list_u,
  source: var_o_1,
  attributes: Ze(param_e_2, param_t_1)
  }
  , param_e_2.features & 2 || param_e_2.features & 4 ? {
  phase: var_s
  }
  : null);
  var_Q(param_e_2, param_t_1 | 32);
  return param_e_2.finishNode(var_l_1, var_n_1);
  }
  (param_e_1, param_t, param_r);
  break;
  default:
  var_n = ye(param_e_1, param_t, param_r, undefined, {
  }
  , 4);
  }
  return var_n;
  }
  function ye(param_e_1, param_t, param_r, param_n, param_o, param_i = 2) {
  const var_a_1 = param_e_1.tokenStart;
  if (param_e_1.leadingDecorators.decorators.length && param_e_1.getToken() !== 86094) {
  param_e_1.report(172);
  }
  switch (param_e_1.getToken()) {
  case 86104:
  return lt(param_e_1, param_t, param_r, param_n, 1, 0, 0, var_a_1, param_i);
  case 133:
  if (!(param_e_1.features & 1)) {
  param_e_1.report(30, "@");
  }
  case 86094:
  return kt(param_e_1, param_t, param_r, param_n, 0);
  case 86090:
  return Se(param_e_1, param_t, param_r, param_n, 16);
  case 241737:
  return function (param_e_2, param_t_1, param_r_1, param_n_1, param_o_1) {
  const {
  tokenValue: var_i_1,
  tokenStart: var_a_2,
  currentLocation: var_s
  }
  = param_e_2;
  const var_c = param_e_2.getToken();
  let var_u_1 = ct(param_e_2, param_t_1);
  if (param_e_2.getToken() & 2240512 && ~param_e_2.getToken() & 20480) {
  const var_o_1 = Ie(param_e_2, param_t_1, param_r_1, param_n_1, 8);
  var_Q(param_e_2, param_t_1 | 32);
  return param_e_2.finishNode({
  type: "VariableDeclaration",
  kind: "let",
  declarations: var_o_1
  }
  , var_a_2);
  }
  param_e_2.assignable = 1;
  if (param_t_1 & 1) {
  param_e_2.report(85);
  }
  if (param_e_2.getToken() === 21) {
  return De(param_e_2, param_t_1, param_r_1, param_n_1, {
  }
  , var_i_1, var_u_1, var_c, 0, var_a_2, param_o_1);
  }
  if (param_e_2.getToken() === 10) {
  let var_r;
  if (param_e_2.options.lexical) {
  var_r = he(param_e_2, param_t_1, var_i_1, var_a_2, var_s);
  }
  param_e_2.flags = (param_e_2.flags | 128) ^ 128;
  var_u_1 = wt(param_e_2, param_t_1, var_r, param_n_1, [var_u_1], 0, var_a_2);
  }
  else {
  var_u_1 = Ge(param_e_2, param_t_1, param_n_1, var_u_1, 0, 0, var_a_2);
  var_u_1 = qe(param_e_2, param_t_1, param_n_1, 0, 0, var_a_2, var_u_1);
  }
  if (param_e_2.getToken() === 18) {
  var_u_1 = Ne(param_e_2, param_t_1, param_n_1, 0, var_a_2, var_u_1);
  }
  return Ee(param_e_2, param_t_1, var_u_1, var_a_2);
  }
  (param_e_1, param_t, param_r, param_n, param_i);
  case 209013:
  return function (param_e_2, param_t_1, param_r_1, param_n_1, param_o_1, param_i_1) {
  const {
  tokenStart: var_a_2,
  tokenValue: var_s,
  currentLocation: var_c
  }
  = param_e_2;
  const var_u_1 = param_e_2.getToken();
  const var_l_1 = ct(param_e_2, param_t_1);
  if (!(param_e_2.flags & 1) && xe(param_e_2.getToken())) {
  if (!!(param_i_1 & 4) && !!(param_t_1 & 8) && !(param_t_1 & 2) &&
  !(param_t_1 & 4096)) {
  param_e_2.report(30, list_T[param_e_2.getToken() & 255]);
  }
  return Se(param_e_2, param_t_1, param_r_1, param_n_1, 16, param_i_1, "using", var_a_2,
  1);
  }
  param_e_2.assignable = 1;
  if (param_e_2.getToken() === 10) {
  let var_r;
  if (param_e_2.options.lexical) {
  var_r = he(param_e_2, param_t_1, var_s, var_a_2, var_c);
  }
  param_e_2.flags = (param_e_2.flags | 128) ^ 128;
  return Ee(param_e_2, param_t_1, wt(param_e_2, param_t_1, var_r, param_n_1, [var_l_1],
  0, var_a_2), var_a_2);
  }
  return be(param_e_2, param_t_1, param_r_1, param_n_1, param_o_1, 1, var_l_1, var_u_1,
  var_s, var_a_2, param_i_1);
  }
  (param_e_1, param_t, param_r, param_n, param_o, param_i);
  case 209006:
  if ((param_t & 2048 || param_t & 2 && param_t & 8) && function (param_e_2) {
  const {
  index: var_t_1,
  source: var_r
  }
  = param_e_2;
  let var_n = var_t_1;
  while (var_n < param_e_2.end) {
  const var_t_2 = var_r.charCodeAt(var_n);
  if (var_t_2 === 10 || var_t_2 === 13 || var_t_2 === 8232 ||
  var_t_2 === 8233) {
  return false;
  }
  if (/\s/u.test(var_r[var_n])) {
  var_n++;
  }
  else {
  if (var_t_2 !== 47 || var_r.charCodeAt(var_n + 1) !== 42) {
  break;
  }
  for (var_n += 2;
  var_n < param_e_2.end;
  ) {
  const var_e = var_r.charCodeAt(var_n);
  if (var_e === 10 || var_e === 13 || var_e === 8232 || var_e === 8233) {
  return false;
  }
  if (var_e === 42 && var_r.charCodeAt(var_n + 1) === 47) {
  var_n += 2;
  break;
  }
  var_n++;
  }
  }
  }
  if (var_r.slice(var_n, var_n + 5) !== "using") {
  return false;
  }
  const var_o_1 = var_r.codePointAt(var_n + 5);
  return var_o_1 === undefined || var_o_1 !== 92 && !var_l(var_o_1);
  }
  (param_e_1)) {
  return function (param_e_2, param_t_1, param_r_1, param_n_1, param_o_1, param_i_1) {
  const var_a_2 = param_e_2.tokenStart;
  let var_s;
  if (param_t_1 & 524288) {
  param_e_2.report(179);
  }
  var_Y(param_e_2, param_t_1 | 32);
  if (param_e_2.flags & 1 || param_e_2.getToken() !== 209013) {
  var_s = Ye(param_e_2, param_t_1, param_n_1, 0, 0, 1);
  }
  else {
  const var_o_1 = param_e_2.tokenStart;
  const var_c_1 = ct(param_e_2, param_t_1);
  if (!(param_e_2.flags & 1) && xe(param_e_2.getToken())) {
  return Se(param_e_2, param_t_1, param_r_1, param_n_1, 16, param_i_1, "await using",
  var_a_2, 1);
  }
  var_s = Ge(param_e_2, param_t_1, param_n_1, var_c_1, 0, 0, var_o_1);
  }
  if (param_e_2.getToken() === 8391735) {
  param_e_2.report(33);
  }
  param_e_2.assignable = 2;
  const var_c = param_e_2.finishNode({
  type: "AwaitExpression",
  argument: var_s
  }
  , var_a_2);
  return be(param_e_2, param_t_1, param_r_1, param_n_1, param_o_1, 0, var_c, 1048576,
  "", var_a_2, param_i_1);
  }
  (param_e_1, param_t, param_r, param_n, param_o, param_i);
  }
  else {
  return _e(param_e_1, param_t, param_r, param_n, param_o, 1, param_i);
  }
  case 20564:
  param_e_1.report(103, "export");
  case 86106:
  var_Y(param_e_1, param_t);
  switch (param_e_1.getToken()) {
  case 67174411:
  return Fe(param_e_1, param_t, param_n, var_a_1);
  case 67108877:
  return Me(param_e_1, param_t, var_a_1);
  default:
  param_e_1.report(103, "import");
  }
  case 209005:
  return Te(param_e_1, param_t, param_r, param_n, param_o, 1, param_i);
  default:
  return _e(param_e_1, param_t, param_r, param_n, param_o, 1, param_i);
  }
  }
  function _e(param_e_1, param_t, param_r, param_n, param_o, param_i, param_a = 0) {
  switch (param_e_1.getToken()) {
  case 86088:
  return Oe(param_e_1, param_t, param_r, param_n);
  case 20572:
  return function (param_e_2, param_t_1, param_r_1) {
  if (!(param_t_1 & 4096)) {
  param_e_2.report(92);
  }
  const var_n = param_e_2.tokenStart;
  var_Y(param_e_2, param_t_1 | 32);
  const var_o_1 = param_e_2.flags & 1 || param_e_2.getToken() & 1048576 ?
  null : je(param_e_2, param_t_1, param_r_1, 0, 1, param_e_2.tokenStart);
  var_Q(param_e_2, param_t_1 | 32);
  return param_e_2.finishNode({
  type: "ReturnStatement",
  argument: var_o_1
  }
  , var_n);
  }
  (param_e_1, param_t, param_n);
  case 20569:
  return function (param_e_2, param_t_1, param_r_1, param_n_1, param_o_1) {
  const var_i_1 = param_e_2.tokenStart;
  var_Y(param_e_2, param_t_1);
  var_Z(param_e_2, param_t_1 | 32, 67174411);
  param_e_2.assignable = 1;
  const var_a_1 = je(param_e_2, param_t_1, param_n_1, 0, 1, param_e_2.tokenStart);
  var_Z(param_e_2, param_t_1 | 32, 16);
  const var_s = Ae(param_e_2, param_t_1, param_r_1, param_n_1, param_o_1);
  let var_c = null;
  if (param_e_2.getToken() === 20563) {
  var_Y(param_e_2, param_t_1 | 32);
  var_c = Ae(param_e_2, param_t_1, param_r_1, param_n_1, param_o_1);
  }
  return param_e_2.finishNode({
  type: "IfStatement",
  test: var_a_1,
  consequent: var_s,
  alternate: var_c
  }
  , var_i_1);
  }
  (param_e_1, param_t, param_r, param_n, param_o);
  case 20567:
  return function (param_e_2, param_t_1, param_r_1, param_n_1, param_o_1, param_i_1) {
  const var_a_1 = param_e_2.tokenStart;
  var_Y(param_e_2, param_t_1);
  const var_s = ((param_t_1 & 2048) > 0 || (param_t_1 & 2) > 0 &&
  (param_t_1 & 8) > 0) && var_X(param_e_2, param_t_1, 209006);
  var_Z(param_e_2, param_t_1 | 32, 67174411);
  param_r_1 = (param_i_1 = param_r_1) === null || param_i_1 === undefined ?
  undefined : param_i_1.createChildScope(1);
  let var_c;
  let var_u_1;
  let var_l_1 = null;
  let var_d_1 = null;
  let num_p = 0;
  let var_f_1 = null;
  let var_h_1 = param_e_2.getToken() === 86088 || param_e_2.getToken() === 241737 ||
  param_e_2.getToken() === 86090 || param_e_2.getToken() === 209013;
  let flag_m = false;
  const {
  tokenStart: var_g_1
  }
  = param_e_2;
  const var_v_1 = param_e_2.getToken();
  if (var_h_1) {
  if (var_v_1 === 241737) {
  var_f_1 = ct(param_e_2, param_t_1);
  if (param_e_2.getToken() & 2240512 && ~param_e_2.getToken() & 20480) {
  var_f_1 = param_e_2.finishNode({
  type: "VariableDeclaration",
  kind: "let",
  declarations: Ie(param_e_2, param_t_1 | 131072, param_r_1, param_n_1, 8, 32)
  }
  , var_g_1);
  param_e_2.assignable = 1;
  }
  else if (param_t_1 & 1) {
  param_e_2.report(67);
  }
  else {
  var_h_1 = false;
  param_e_2.assignable = 1;
  var_f_1 = Ge(param_e_2, param_t_1, param_n_1, var_f_1, 0, 0, var_g_1);
  if (param_e_2.getToken() === 471156) {
  param_e_2.report(117);
  }
  }
  }
  else if (var_v_1 === 209013) {
  const var_o_1 = ct(param_e_2, param_t_1);
  if (param_e_2.flags & 1 || !xe(param_e_2.getToken())) {
  var_h_1 = false;
  param_e_2.assignable = 1;
  var_f_1 = Ge(param_e_2, param_t_1, param_n_1, var_o_1, 0, 0, var_g_1);
  }
  else if (param_e_2.getToken() === 471156) {
  const var_i_1 = param_e_2.tokenStart;
  const var_a_2 = param_e_2.currentLocation;
  const var_s_1 = param_e_2.getToken();
  const var_u_2 = param_e_2.tokenValue;
  const var_l_2 = ct(param_e_2, param_t_1);
  if (param_e_2.getToken() !== 1077936155 && param_e_2.getToken() !== 8673330 &&
  param_e_2.getToken() !== 1074790417 && param_e_2.getToken() !== 18) {
  var_h_1 = false;
  flag_m = true;
  param_e_2.assignable = 1;
  var_f_1 = var_o_1;
  }
  else {
  var var_y;
  var_c = "using";
  ee(param_e_2, param_t_1, 16, var_s_1, 0);
  if ((var_y = param_r_1) !== null && var_y !== undefined) {
  var_y.addBlockName(param_t_1, var_u_2, 16, var_i_1, var_a_2, 32);
  }
  let var_o_2 = null;
  if (param_e_2.getToken() === 1077936155) {
  var_Y(param_e_2, param_t_1 | 32);
  var_o_2 = Ue(param_e_2, param_t_1 | 131072, param_n_1, 1, 0, param_e_2.tokenStart);
  if (!(~param_e_2.getToken() & 262144)) {
  throw new var_D(var_i_1, param_e_2.currentLocation, 60, param_e_2.getToken() === 471156 ?
  "of" : "in");
  }
  }
  else if (param_e_2.getToken() !== 8673330) {
  param_e_2.report(59, var_c);
  }
  const list_d = [param_e_2.finishNode({
  type: "VariableDeclarator",
  id: var_l_2,
  init: var_o_2
  }
  , var_i_1)];
  const var_p_1 = param_e_2.options.lexical ? new Set([var_u_2]) :
  undefined;
  while (var_X(param_e_2, param_t_1 | 131072, 18)) {
  const var_o_3 = Le(param_e_2, param_t_1 | 131072, param_r_1, param_n_1, 16, 32,
  var_c);
  if (var_p_1) {
  const {
  name: var_t_1
  }
  = var_o_3.id;
  if (var_p_1.has(var_t_1)) {
  param_e_2.report(147, var_t_1);
  }
  var_p_1.add(var_t_1);
  }
  list_d.push(var_o_3);
  }
  if (list_d.length > 1 && param_e_2.getToken() & 262144) {
  param_e_2.report(61, list_T[param_e_2.getToken() & 255]);
  }
  var_f_1 = param_e_2.finishNode({
  type: "VariableDeclaration",
  kind: var_c,
  declarations: list_d
  }
  , var_g_1);
  param_e_2.assignable = 1;
  }
  }
  else {
  var_c = "using";
  var_f_1 = param_e_2.finishNode({
  type: "VariableDeclaration",
  kind: var_c,
  declarations: Ie(param_e_2, param_t_1 | 131072, param_r_1, param_n_1, 16, 32, var_c)
  }
  , var_g_1);
  param_e_2.assignable = 1;
  }
  }
  else {
  var_Y(param_e_2, param_t_1);
  var_f_1 = param_e_2.finishNode(var_v_1 === 86088 ? {
  type: "VariableDeclaration",
  kind: "var",
  declarations: Ie(param_e_2, param_t_1 | 131072, param_r_1, param_n_1, 4, 32)
  }
  : {
  type: "VariableDeclaration",
  kind: "const",
  declarations: Ie(param_e_2, param_t_1 | 131072, param_r_1, param_n_1, 16, 32)
  }
  , var_g_1);
  param_e_2.assignable = 1;
  }
  }
  else if (var_v_1 === 209006 && (param_t_1 & 2048 || param_t_1 & 2 &&
  param_t_1 & 8)) {
  let var_o_1;
  if (param_t_1 & 524288) {
  param_e_2.report(179);
  }
  var_Y(param_e_2, param_t_1 | 32);
  if (param_e_2.flags & 1 || param_e_2.getToken() !== 209013) {
  var_o_1 = Ye(param_e_2, param_t_1, param_n_1, 0, 0, 1);
  }
  else {
  const var_i_1 = param_e_2.tokenStart;
  const var_a_2 = ct(param_e_2, param_t_1);
  if (param_e_2.flags & 1 || !xe(param_e_2.getToken())) {
  var_o_1 = Ge(param_e_2, param_t_1, param_n_1, var_a_2, 0, 0, var_i_1);
  }
  else {
  var_c = "await using";
  var_h_1 = true;
  var_f_1 = param_e_2.finishNode({
  type: "VariableDeclaration",
  kind: var_c,
  declarations: Ie(param_e_2, param_t_1 | 131072, param_r_1, param_n_1, 16, 32, var_c)
  }
  , var_g_1);
  param_e_2.assignable = 1;
  }
  }
  if (!var_h_1) {
  if (param_e_2.getToken() === 8391735) {
  param_e_2.report(33);
  }
  param_e_2.assignable = 2;
  var_f_1 = param_e_2.finishNode({
  type: "AwaitExpression",
  argument: var_o_1
  }
  , var_g_1);
  }
  }
  else if (var_s && var_v_1 === 209005) {
  const var_r = ct(param_e_2, param_t_1);
  param_e_2.assignable = 1;
  var_f_1 = Ge(param_e_2, param_t_1 | 131072, param_n_1, var_r, 0, 0, var_g_1);
  }
  else if (var_v_1 === 1074790417) {
  if (var_s) {
  param_e_2.report(82);
  }
  }
  else if (~var_v_1 & 2097152) {
  var_f_1 = Ye(param_e_2, param_t_1 | 131072, param_n_1, 1, 0, 1);
  }
  else {
  const var_r = param_e_2.tokenStart;
  var_f_1 = var_v_1 === 2162700 ? gt(param_e_2, param_t_1, undefined, param_n_1,
  1, 0, 0, 2, 32) : pt(param_e_2, param_t_1, undefined, param_n_1, 1, 0, 0, 2, 32);
  num_p = param_e_2.destructible;
  if (num_p & 64) {
  param_e_2.report(63);
  }
  param_e_2.assignable = num_p & 16 ? 2 : 1;
  var_f_1 = Ge(param_e_2, param_t_1 | 131072, param_n_1, var_f_1, 0, 0, var_r);
  }
  if (flag_m || !(~param_e_2.getToken() & 262144)) {
  if (flag_m || param_e_2.getToken() === 471156) {
  if (param_e_2.assignable & 2) {
  param_e_2.report(80, var_s ? "await" : "of");
  }
  var_J(param_e_2, var_f_1);
  if (!flag_m) {
  var_Y(param_e_2, param_t_1 | 32);
  }
  var_u_1 = Ue(param_e_2, param_t_1, param_n_1, 1, 0, param_e_2.tokenStart);
  var_Z(param_e_2, param_t_1 | 32, 16);
  const var_i_2 = Ce(param_e_2, param_t_1, param_r_1, param_n_1, param_o_1);
  return param_e_2.finishNode({
  type: "ForOfStatement",
  left: var_f_1,
  right: var_u_1,
  body: var_i_2,
  await: var_s
  }
  , var_a_1);
  }
  if (var_c) {
  param_e_2.report(30, "in");
  }
  if (param_e_2.assignable & 2) {
  param_e_2.report(80, "in");
  }
  var_J(param_e_2, var_f_1);
  var_Y(param_e_2, param_t_1 | 32);
  if (var_s) {
  param_e_2.report(82);
  }
  var_u_1 = je(param_e_2, param_t_1, param_n_1, 0, 1, param_e_2.tokenStart);
  var_Z(param_e_2, param_t_1 | 32, 16);
  const var_i_1 = Ce(param_e_2, param_t_1, param_r_1, param_n_1, param_o_1);
  return param_e_2.finishNode({
  type: "ForInStatement",
  body: var_i_1,
  left: var_f_1,
  right: var_u_1
  }
  , var_a_1);
  }
  if (var_s) {
  param_e_2.report(82);
  }
  if (!var_h_1) {
  if (num_p & 8 && param_e_2.getToken() !== 1077936155) {
  param_e_2.report(80, "loop");
  }
  var_f_1 = qe(param_e_2, param_t_1 | 131072, param_n_1, 0, 0, var_g_1, var_f_1);
  }
  if (param_e_2.getToken() === 18) {
  var_f_1 = Ne(param_e_2, param_t_1, param_n_1, 0, var_g_1, var_f_1);
  }
  var_Z(param_e_2, param_t_1 | 32, 1074790417);
  if (param_e_2.getToken() !== 1074790417) {
  var_l_1 = je(param_e_2, param_t_1, param_n_1, 0, 1, param_e_2.tokenStart);
  }
  var_Z(param_e_2, param_t_1 | 32, 1074790417);
  if (param_e_2.getToken() !== 16) {
  var_d_1 = je(param_e_2, param_t_1, param_n_1, 0, 1, param_e_2.tokenStart);
  }
  var_Z(param_e_2, param_t_1 | 32, 16);
  const var___1 = Ce(param_e_2, param_t_1, param_r_1, param_n_1, param_o_1);
  return param_e_2.finishNode({
  type: "ForStatement",
  init: var_f_1,
  test: var_l_1,
  update: var_d_1,
  body: var___1
  }
  , var_a_1);
  }
  (param_e_1, param_t, param_r, param_n, param_o);
  case 20562:
  return function (param_e_2, param_t_1, param_r_1, param_n_1, param_o_1) {
  const var_i_1 = param_e_2.tokenStart;
  var_Y(param_e_2, param_t_1 | 32);
  const var_a_1 = Ce(param_e_2, param_t_1, param_r_1, param_n_1, param_o_1);
  var_Z(param_e_2, param_t_1, 20578);
  var_Z(param_e_2, param_t_1 | 32, 67174411);
  const var_s = je(param_e_2, param_t_1, param_n_1, 0, 1, param_e_2.tokenStart);
  var_Z(param_e_2, param_t_1 | 32, 16);
  var_X(param_e_2, param_t_1 | 32, 1074790417);
  return param_e_2.finishNode({
  type: "DoWhileStatement",
  body: var_a_1,
  test: var_s
  }
  , var_i_1);
  }
  (param_e_1, param_t, param_r, param_n, param_o);
  case 20578:
  return function (param_e_2, param_t_1, param_r_1, param_n_1, param_o_1) {
  const var_i_1 = param_e_2.tokenStart;
  var_Y(param_e_2, param_t_1);
  var_Z(param_e_2, param_t_1 | 32, 67174411);
  const var_a_1 = je(param_e_2, param_t_1, param_n_1, 0, 1, param_e_2.tokenStart);
  var_Z(param_e_2, param_t_1 | 32, 16);
  const var_s = Ce(param_e_2, param_t_1, param_r_1, param_n_1, param_o_1);
  return param_e_2.finishNode({
  type: "WhileStatement",
  test: var_a_1,
  body: var_s
  }
  , var_i_1);
  }
  (param_e_1, param_t, param_r, param_n, param_o);
  case 86110:
  return function (param_e_2, param_t_1, param_r_1, param_n_1, param_o_1, param_i_1) {
  const var_a_1 = param_e_2.tokenStart;
  var_Y(param_e_2, param_t_1);
  var_Z(param_e_2, param_t_1 | 32, 67174411);
  const var_s = je(param_e_2, param_t_1, param_n_1, 0, 1, param_e_2.tokenStart);
  var_Z(param_e_2, param_t_1, 16);
  var_Z(param_e_2, param_t_1, 2162700);
  const list_c_1 = [];
  let num_u = 0;
  for (param_r_1 = (param_i_1 = param_r_1) === null || param_i_1 === undefined ?
  undefined : param_i_1.createChildScope(8);
  param_e_2.getToken() !== 1074790415;
  ) {
  const {
  tokenStart: var_i_1
  }
  = param_e_2;
  let var_a_2 = null;
  const list_s_1 = [];
  if (var_X(param_e_2, param_t_1 | 32, 20556)) {
  var_a_2 = je(param_e_2, param_t_1, param_n_1, 0, 1, param_e_2.tokenStart);
  }
  else {
  var_Z(param_e_2, param_t_1 | 32, 20561);
  if (num_u) {
  param_e_2.report(89);
  }
  num_u = 1;
  }
  var_Z(param_e_2, param_t_1 | 32, 21);
  while (param_e_2.getToken() !== 20556 && param_e_2.getToken() !== 1074790415 &&
  param_e_2.getToken() !== 20561) {
  const var_i_2 = ye(param_e_2, param_t_1 | 4, param_r_1, param_n_1, {
  $: param_o_1
  }
  );
  if (var_i_2.type === "VariableDeclaration" && (var_i_2.kind === "using" ||
  var_i_2.kind === "await using")) {
  param_e_2.report(30, var_i_2.kind);
  }
  list_s_1.push(var_i_2);
  }
  list_c_1.push(param_e_2.finishNode({
  type: "SwitchCase",
  test: var_a_2,
  consequent: list_s_1
  }
  , var_i_1));
  }
  var_Z(param_e_2, param_t_1 | 32, 1074790415);
  return param_e_2.finishNode({
  type: "SwitchStatement",
  discriminant: var_s,
  cases: list_c_1
  }
  , var_a_1);
  }
  (param_e_1, param_t, param_r, param_n, param_o);
  case 1074790417:
  return function (param_e_2, param_t_1) {
  const var_r = param_e_2.tokenStart;
  var_Y(param_e_2, param_t_1 | 32);
  return param_e_2.finishNode({
  type: "EmptyStatement"
  }
  , var_r);
  }
  (param_e_1, param_t);
  case 2162700:
  return we(param_e_1, param_t, param_r == null ? undefined :
  param_r.createChildScope(), param_n, param_o, param_e_1.tokenStart);
  case 86112:
  return function (param_e_2, param_t_1, param_r_1) {
  const var_n = param_e_2.tokenStart;
  var_Y(param_e_2, param_t_1 | 32);
  if (param_e_2.flags & 1) {
  param_e_2.report(90);
  }
  const var_o_1 = je(param_e_2, param_t_1, param_r_1, 0, 1, param_e_2.tokenStart);
  var_Q(param_e_2, param_t_1 | 32);
  return param_e_2.finishNode({
  type: "ThrowStatement",
  argument: var_o_1
  }
  , var_n);
  }
  (param_e_1, param_t, param_n);
  case 20555:
  return function (param_e_2, param_t_1, param_r_1) {
  const var_n = param_e_2.tokenStart;
  var_Y(param_e_2, param_t_1 | 32);
  let var_o_1 = null;
  if (!(param_e_2.flags & 1) && param_e_2.getToken() & 143360) {
  const {
  tokenValue: var_n_1
  }
  = param_e_2;
  var_o_1 = ct(param_e_2, param_t_1 | 32);
  if (!ne(param_e_2, param_r_1, var_n_1, 0)) {
  param_e_2.report(140, var_n_1);
  }
  }
  else if (!(param_t_1 & 132)) {
  param_e_2.report(69);
  }
  var_Q(param_e_2, param_t_1 | 32);
  return param_e_2.finishNode({
  type: "BreakStatement",
  label: var_o_1
  }
  , var_n);
  }
  (param_e_1, param_t, param_o);
  case 20559:
  return function (param_e_2, param_t_1, param_r_1) {
  if (!(param_t_1 & 128)) {
  param_e_2.report(68);
  }
  const var_n = param_e_2.tokenStart;
  var_Y(param_e_2, param_t_1);
  let var_o_1 = null;
  if (!(param_e_2.flags & 1) && param_e_2.getToken() & 143360) {
  const {
  tokenValue: var_n_1
  }
  = param_e_2;
  var_o_1 = ct(param_e_2, param_t_1 | 32);
  if (!ne(param_e_2, param_r_1, var_n_1, 1)) {
  param_e_2.report(140, var_n_1);
  }
  }
  var_Q(param_e_2, param_t_1 | 32);
  return param_e_2.finishNode({
  type: "ContinueStatement",
  label: var_o_1
  }
  , var_n);
  }
  (param_e_1, param_t, param_o);
  case 20577:
  return function (param_e_2, param_t_1, param_r_1, param_n_1, param_o_1) {
  const var_i_1 = param_e_2.tokenStart;
  var_Y(param_e_2, param_t_1 | 32);
  const var_a_1 = we(param_e_2, param_t_1, param_r_1 == null ?
  undefined : param_r_1.createChildScope(16), param_n_1, {
  $: param_o_1
  }
  );
  const {
  tokenStart: var_s
  }
  = param_e_2;
  const var_c = var_X(param_e_2, param_t_1 | 32, 20557) ? function (param_e_3, param_t_2,
  param_r_2, param_n_2, param_o_2, param_i_1, param_a_1, param_s) {
  let var_c_1 = null;
  if (var_X(param_e_3, param_t_2, 67174411)) {
  var_c_1 = Lt(param_e_3, param_t_2, param_r_2 = (param_a_1 = param_r_2) === null ||
  param_a_1 === undefined ? undefined : param_a_1.createChildScope(4), param_n_2,
  ~param_e_3.getToken() & 2097152 ? 512 : 256);
  if (param_e_3.getToken() === 18) {
  param_e_3.report(86);
  }
  else if (param_e_3.getToken() === 1077936155) {
  param_e_3.report(87);
  }
  var_Z(param_e_3, param_t_2 | 32, 16);
  }
  const var_u_2 = we(param_e_3, param_t_2, (param_s = param_r_2) === null ||
  param_s === undefined ? undefined : param_s.createChildScope(32), param_n_2, {
  $: param_o_2
  }
  );
  return param_e_3.finishNode({
  type: "CatchClause",
  param: var_c_1,
  body: var_u_2
  }
  , param_i_1);
  }
  (param_e_2, param_t_1, param_r_1, param_n_1, param_o_1, var_s) :
  null;
  let var_u_1 = null;
  if (param_e_2.getToken() === 20566) {
  var_Y(param_e_2, param_t_1 | 32);
  var_u_1 = we(param_e_2, param_t_1, param_r_1 == null ? undefined :
  param_r_1.createChildScope(4), param_n_1, {
  $: param_o_1
  }
  );
  }
  if (!var_c && !var_u_1) {
  param_e_2.report(88);
  }
  return param_e_2.finishNode({
  type: "TryStatement",
  block: var_a_1,
  handler: var_c,
  finalizer: var_u_1
  }
  , var_i_1);
  }
  (param_e_1, param_t, param_r, param_n, param_o);
  case 20579:
  return function (param_e_2, param_t_1, param_r_1, param_n_1, param_o_1) {
  const var_i_1 = param_e_2.tokenStart;
  var_Y(param_e_2, param_t_1);
  if (param_t_1 & 1) {
  param_e_2.report(91);
  }
  var_Z(param_e_2, param_t_1 | 32, 67174411);
  const var_a_1 = je(param_e_2, param_t_1, param_n_1, 0, 1, param_e_2.tokenStart);
  var_Z(param_e_2, param_t_1 | 32, 16);
  const var_s = _e(param_e_2, param_t_1, param_r_1, param_n_1, param_o_1, 0, 2);
  return param_e_2.finishNode({
  type: "WithStatement",
  object: var_a_1,
  body: var_s
  }
  , var_i_1);
  }
  (param_e_1, param_t, param_r, param_n, param_o);
  case 20560:
  return function (param_e_2, param_t_1) {
  const var_r = param_e_2.tokenStart;
  var_Y(param_e_2, param_t_1 | 32);
  var_Q(param_e_2, param_t_1 | 32);
  return param_e_2.finishNode({
  type: "DebuggerStatement"
  }
  , var_r);
  }
  (param_e_1, param_t);
  case 209005:
  return Te(param_e_1, param_t, param_r, param_n, param_o, 0, param_a);
  case 20557:
  param_e_1.report(164);
  case 20566:
  param_e_1.report(165);
  case 86104:
  param_e_1.report(param_t & 1 ? 76 : param_e_1.options.webcompat ?
  77 : 78);
  case 86094:
  param_e_1.report(79);
  default:
  return function (param_e_2, param_t_1, param_r_1, param_n_1, param_o_1, param_i_1,
  param_a_1) {
  const {
  tokenValue: var_s,
  tokenStart: var_c
  }
  = param_e_2;
  const var_u_1 = param_e_2.getToken();
  let var_l_1;
  if (var_u_1 === 241737) {
  var_l_1 = ct(param_e_2, param_t_1);
  if (param_t_1 & 1) {
  param_e_2.report(85);
  }
  if (param_e_2.getToken() === 69271571) {
  param_e_2.report(84);
  }
  }
  else {
  var_l_1 = $e(param_e_2, param_t_1, param_n_1, 2, 0, 1, 0, 1, param_e_2.tokenStart,
  0, 1);
  }
  return be(param_e_2, param_t_1, param_r_1, param_n_1, param_o_1, param_i_1, var_l_1,
  var_u_1, var_s, var_c, param_a_1);
  }
  (param_e_1, param_t, param_r, param_n, param_o, param_i, param_a);
  }
  }
  function be(param_e_1, param_t, param_r, param_n, param_o, param_i, param_a, param_s,
  param_c, param_u, param_l) {
  if (param_s & 143360 && param_e_1.getToken() === 21) {
  return De(param_e_1, param_t, param_r, param_n, param_o, param_c, param_a, param_s,
  param_i, param_u, param_l);
  }
  let var_d_1 = Ge(param_e_1, param_t, param_n, param_a, 0, 0, param_u);
  var_d_1 = qe(param_e_1, param_t, param_n, 0, 0, param_u, var_d_1);
  if (param_e_1.getToken() === 18) {
  var_d_1 = Ne(param_e_1, param_t, param_n, 0, param_u, var_d_1);
  }
  return Ee(param_e_1, param_t, var_d_1, param_u);
  }
  function we(param_e_1, param_t, param_r, param_n, param_o, param_i = param_e_1.tokenStart,
  param_a = "BlockStatement") {
  const list_s_1 = [];
  for (var_Z(param_e_1, param_t | 32, 2162700);
  param_e_1.getToken() !== 1074790415;
  ) {
  list_s_1.push(ye(param_e_1, param_t, param_r, param_n, {
  $: param_o
  }
  ));
  }
  var_Z(param_e_1, param_t | 32, 1074790415);
  return param_e_1.finishNode({
  type: param_a,
  body: list_s_1
  }
  , param_i);
  }
  function Ee(param_e_1, param_t, param_r, param_n) {
  var_Q(param_e_1, param_t | 32);
  return param_e_1.finishNode({
  type: "ExpressionStatement",
  expression: param_r
  }
  , param_n);
  }
  function De(param_e_1, param_t, param_r, param_n, param_o, param_i, param_a, param_s,
  param_c, param_u, param_l) {
  ee(param_e_1, param_t, 0, param_s, 1);
  (function (param_e_2, param_t_1, param_r_1) {
  let var_n = param_t_1;
  while (var_n) {
  if (var_n["$" + param_r_1]) {
  param_e_2.report(138, param_r_1);
  }
  var_n = var_n.$;
  }
  param_t_1["$" + param_r_1] = 1;
  }
  )(param_e_1, param_o, param_i);
  var_Y(param_e_1, param_t | 32);
  const var_d_1 = !param_c || param_t & 1 || !param_e_1.options.webcompat ||
  param_e_1.getToken() !== 86104 ? _e(param_e_1, param_t, param_r, param_n, param_o,
  param_c, param_l) : lt(param_e_1, param_t, param_r == null ?
  undefined : param_r.createChildScope(), param_n, 0, 0, 0, param_e_1.tokenStart,
  param_l);
  return param_e_1.finishNode({
  type: "LabeledStatement",
  label: param_a,
  body: var_d_1
  }
  , param_u);
  }
  function Te(param_e_1, param_t, param_r, param_n, param_o, param_i, param_a) {
  const {
  tokenValue: var_s,
  tokenStart: var_c
  }
  = param_e_1;
  const var_u_1 = param_e_1.getToken();
  let var_l_1 = ct(param_e_1, param_t);
  if (param_e_1.getToken() === 21) {
  return De(param_e_1, param_t, param_r, param_n, param_o, var_s, var_l_1, var_u_1,
  1, var_c, param_a);
  }
  const var_d_1 = param_e_1.flags & 1;
  if (!var_d_1) {
  if (param_e_1.getToken() === 86104) {
  if (!param_i) {
  param_e_1.report(125);
  }
  return lt(param_e_1, param_t, param_r, param_n, 1, 0, 1, var_c, param_a);
  }
  if (ie(param_t, param_e_1.getToken())) {
  var_l_1 = Dt(param_e_1, param_t, param_n, 1, var_c);
  if (param_e_1.getToken() === 18) {
  var_l_1 = Ne(param_e_1, param_t, param_n, 0, var_c, var_l_1);
  }
  return Ee(param_e_1, param_t, var_l_1, var_c);
  }
  }
  if (param_e_1.getToken() === 67174411) {
  var_l_1 = Tt(param_e_1, param_t, param_n, var_l_1, 1, 1, var_d_1, var_c);
  }
  else {
  if (param_e_1.getToken() === 10) {
  ae(param_e_1, param_t, var_u_1);
  if (!(~var_u_1 & 36864)) {
  param_e_1.flags |= 256;
  }
  var_l_1 = _t(param_e_1, param_t | 2048, param_n, param_e_1.tokenValue, var_l_1,
  0, 1, 0, var_c);
  }
  param_e_1.assignable = 1;
  }
  var_l_1 = Ge(param_e_1, param_t, param_n, var_l_1, 0, 0, var_c);
  var_l_1 = qe(param_e_1, param_t, param_n, 0, 0, var_c, var_l_1);
  param_e_1.assignable = 1;
  if (param_e_1.getToken() === 18) {
  var_l_1 = Ne(param_e_1, param_t, param_n, 0, var_c, var_l_1);
  }
  return Ee(param_e_1, param_t, var_l_1, var_c);
  }
  function ke(param_e_1, param_t, param_r, param_n, param_o) {
  const var_i_1 = param_e_1.startIndex;
  if (param_n !== 1074790417) {
  param_e_1.assignable = 2;
  param_r = Ge(param_e_1, param_t, undefined, param_r, 0, 0, param_o);
  if (param_e_1.getToken() !== 1074790417) {
  param_r = qe(param_e_1, param_t, undefined, 0, 0, param_o, param_r);
  if (param_e_1.getToken() === 18) {
  param_r = Ne(param_e_1, param_t, undefined, 0, param_o, param_r);
  }
  }
  var_Q(param_e_1, param_t | 32);
  }
  const obj_a = {
  type: "ExpressionStatement",
  expression: param_r
  };
  if (param_r.type === "Literal" && typeof param_r.value == "string") {
  obj_a.directive = param_e_1.source.slice(param_o.index + 1, var_i_1 - 1);
  }
  return param_e_1.finishNode(obj_a, param_o);
  }
  function Ae(param_e_1, param_t, param_r, param_n, param_o) {
  const {
  tokenStart: var_i_1
  }
  = param_e_1;
  if (param_t & 1 || !param_e_1.options.webcompat || param_e_1.getToken() !== 86104) {
  return _e(param_e_1, param_t, param_r, param_n, {
  $: param_o
  }
  , 0);
  }
  else {
  return lt(param_e_1, param_t, param_r == null ? undefined :
  param_r.createChildScope(), param_n, 0, 0, 0, var_i_1);
  }
  }
  function Ce(param_e_1, param_t, param_r, param_n, param_o) {
  return _e(param_e_1, (param_t | 131072) ^ 131072 | 128, param_r, param_n, {
  loop: 1,
  $: param_o
  }
  , 0);
  }
  function xe(param_e_1) {
  return !(~param_e_1 & 143360) && !!(~param_e_1 & 20480);
  }
  function Se(param_e_1, param_t, param_r, param_n, param_o, param_i = 0, param_a,
  param_s = param_e_1.tokenStart, param_c = 0) {
  const var_u_1 = param_s;
  if (!param_c) {
  var_Y(param_e_1, param_t);
  }
  const var_l_1 = Ie(param_e_1, param_t, param_r, param_n, param_o, param_i, param_a);
  var_Q(param_e_1, param_t | 32);
  return param_e_1.finishNode({
  type: "VariableDeclaration",
  kind: param_a ?? (param_o & 8 ? "let" : "const"),
  declarations: var_l_1
  }
  , var_u_1);
  }
  function Oe(param_e_1, param_t, param_r, param_n, param_o = 0) {
  const var_i_1 = param_e_1.tokenStart;
  var_Y(param_e_1, param_t);
  const var_a_1 = Ie(param_e_1, param_t, param_r, param_n, 4, param_o);
  var_Q(param_e_1, param_t | 32);
  return param_e_1.finishNode({
  type: "VariableDeclaration",
  kind: "var",
  declarations: var_a_1
  }
  , var_i_1);
  }
  function Ie(param_e_1, param_t, param_r, param_n, param_o, param_i = 0, param_a) {
  let num_s = 1;
  const var_c = Le(param_e_1, param_t, param_r, param_n, param_o, param_i, param_a);
  const list_u = [var_c];
  const var_l_1 = param_a && param_e_1.options.lexical ? new Set([var_c.id.name]) :
  undefined;
  while (var_X(param_e_1, param_t, 18)) {
  num_s++;
  const var_c_1 = Le(param_e_1, param_t, param_r, param_n, param_o, param_i, param_a);
  if (var_l_1) {
  const {
  name: var_t_1
  }
  = var_c_1.id;
  if (var_l_1.has(var_t_1)) {
  param_e_1.report(147, var_t_1);
  }
  var_l_1.add(var_t_1);
  }
  list_u.push(var_c_1);
  }
  if (num_s > 1 && param_i & 32 && param_e_1.getToken() & 262144) {
  param_e_1.report(61, list_T[param_e_1.getToken() & 255]);
  }
  return list_u;
  }
  function Le(param_e_1, param_t, param_r, param_n, param_o, param_i, param_a) {
  const {
  tokenStart: var_s
  }
  = param_e_1;
  const var_c = param_e_1.getToken();
  let var_u_1 = null;
  if (!!param_a && !(~var_c & 2097152)) {
  param_e_1.report(50);
  }
  const var_l_1 = Lt(param_e_1, param_t, param_r, param_n, param_o, param_i);
  if (param_e_1.getToken() === 1077936155) {
  var_Y(param_e_1, param_t | 32);
  var_u_1 = Ue(param_e_1, param_t, param_n, 1, 0, param_e_1.tokenStart, param_i);
  if (param_i & 32 && (param_e_1.getToken() === 471156 || param_e_1.getToken() === 8673330 &&
  (var_c & 2097152 || !(param_o & 4) || param_t & 1 || !param_e_1.options.webcompat))) {
  throw new var_D(var_s, param_e_1.currentLocation, 60, param_e_1.getToken() === 471156 ?
  "of" : "in");
  }
  }
  else if ((param_o & 16 || (var_c & 2097152) > 0) && ~param_e_1.getToken() & 262144) {
  param_e_1.report(59, param_a ?? (param_o & 16 ? "const" : "destructuring"));
  }
  return param_e_1.finishNode({
  type: "VariableDeclarator",
  id: var_l_1,
  init: var_u_1
  }
  , var_s);
  }
  function Re(param_e_1, param_t, param_r) {
  if (!ie(param_t, param_e_1.getToken())) {
  param_e_1.report(120);
  }
  if (!(~param_e_1.getToken() & 537079808)) {
  param_e_1.report(121);
  }
  if (param_r != null) {
  param_r.addBlockName(param_t, param_e_1.tokenValue, 8, param_e_1.tokenStart, param_e_1.currentLocation);
  }
  return ct(param_e_1, param_t);
  }
  function Pe(param_e_1, param_t, param_r) {
  const {
  tokenStart: var_n
  }
  = param_e_1;
  var_Y(param_e_1, param_t);
  var_Z(param_e_1, param_t, 77932);
  if (!(~param_e_1.getToken() & 134217728)) {
  throw new var_D(var_n, param_e_1.currentLocation, 30, list_T[param_e_1.getToken(
  ) & 255]);
  }
  return param_e_1.finishNode({
  type: "ImportNamespaceSpecifier",
  local: Re(param_e_1, param_t, param_r)
  }
  , var_n);
  }
  function Be(param_e_1, param_t, param_r, param_n) {
  for (var_Y(param_e_1, param_t);
  param_e_1.getToken() & 143360 || param_e_1.getToken() === 134283267;
  ) {
  let {
  tokenValue: var_o_1,
  tokenStart: var_i_1,
  currentLocation: var_a_1
  }
  = param_e_1;
  const var_s = var_i_1;
  const var_c = param_e_1.getToken();
  const var_u_1 = tt(param_e_1, param_t);
  let var_l_1;
  if (var_X(param_e_1, param_t, 77932)) {
  if (~param_e_1.getToken() & 134217728 && param_e_1.getToken() !== 18) {
  ee(param_e_1, param_t, 16, param_e_1.getToken(), 0);
  }
  else {
  param_e_1.report(106);
  }
  var_o_1 = param_e_1.tokenValue;
  var_i_1 = param_e_1.tokenStart;
  var_a_1 = param_e_1.currentLocation;
  var_l_1 = ct(param_e_1, param_t);
  }
  else if (var_u_1.type === "Identifier") {
  ee(param_e_1, param_t, 16, var_c, 0);
  var_l_1 = param_e_1.cloneIdentifier(var_u_1);
  }
  else {
  param_e_1.report(25, list_T[108]);
  }
  if (param_r != null) {
  param_r.addBlockName(param_t, var_o_1, 8, var_i_1, var_a_1);
  }
  param_n.push(param_e_1.finishNode({
  type: "ImportSpecifier",
  local: var_l_1,
  imported: var_u_1
  }
  , var_s));
  if (param_e_1.getToken() !== 1074790415) {
  var_Z(param_e_1, param_t, 18);
  }
  }
  var_Z(param_e_1, param_t, 1074790415);
  return param_n;
  }
  function Me(param_e_1, param_t, param_r) {
  let var_n = Ke(param_e_1, param_t, param_e_1.finishNode({
  type: "Identifier",
  name: "import"
  }
  , param_r), param_r);
  var_n = Ge(param_e_1, param_t, undefined, var_n, 0, 0, param_r);
  var_n = qe(param_e_1, param_t, undefined, 0, 0, param_r, var_n);
  if (param_e_1.getToken() === 18) {
  var_n = Ne(param_e_1, param_t, undefined, 0, param_r, var_n);
  }
  return Ee(param_e_1, param_t, var_n, param_r);
  }
  function Fe(param_e_1, param_t, param_r, param_n) {
  let var_o_1 = Xe(param_e_1, param_t, param_r, 0, param_n);
  var_o_1 = Ge(param_e_1, param_t, param_r, var_o_1, 0, 0, param_n);
  if (param_e_1.getToken() === 18) {
  var_o_1 = Ne(param_e_1, param_t, param_r, 0, param_n, var_o_1);
  }
  return Ee(param_e_1, param_t, var_o_1, param_n);
  }
  function Ue(param_e_1, param_t, param_r, param_n, param_o, param_i, param_a = 0) {
  let var_s = $e(param_e_1, param_t, param_r, 2, 0, param_n, param_o, 1, param_i,
  param_a, param_t & 131072 ? 0 : 1);
  var_s = Ge(param_e_1, param_t, param_r, var_s, param_o, 0, param_i);
  return qe(param_e_1, param_t, param_r, param_o, 0, param_i, var_s);
  }
  function Ne(param_e_1, param_t, param_r, param_n, param_o, param_i) {
  const list_a = [param_i];
  while (var_X(param_e_1, param_t | 32, 18)) {
  list_a.push(Ue(param_e_1, param_t, param_r, 1, param_n, param_e_1.tokenStart));
  }
  return param_e_1.finishNode({
  type: "SequenceExpression",
  expressions: list_a
  }
  , param_o);
  }
  function je(param_e_1, param_t, param_r, param_n, param_o, param_i) {
  const var_a_1 = Ue(param_e_1, param_t, param_r, param_o, param_n, param_i);
  if (param_e_1.getToken() === 18) {
  return Ne(param_e_1, param_t, param_r, param_n, param_i, var_a_1);
  }
  else {
  return var_a_1;
  }
  }
  function qe(param_e_1, param_t, param_r, param_n, param_o, param_i, param_a) {
  const var_s = param_e_1.getToken();
  if (!(~var_s & 4194304)) {
  if (param_e_1.assignable & 2) {
  param_e_1.report(26);
  }
  if (!(~var_s & 524288) && param_e_1.assignable & 4) {
  param_e_1.report(26);
  }
  if (!param_o && var_s === 1077936155 && param_a.type === "ArrayExpression" ||
  param_a.type === "ObjectExpression") {
  var_J(param_e_1, param_a);
  }
  var_Y(param_e_1, param_t | 32);
  const var_c = Ue(param_e_1, param_t, param_r, 1, param_n, param_e_1.tokenStart);
  param_e_1.assignable = 2;
  return param_e_1.finishNode(param_o ? {
  type: "AssignmentPattern",
  left: param_a,
  right: var_c
  }
  : {
  type: "AssignmentExpression",
  left: param_a,
  operator: list_T[var_s & 255],
  right: var_c
  }
  , param_i);
  }
  if (!(~var_s & 8388608)) {
  param_a = We(param_e_1, param_t, param_r, param_n, param_i, 4, var_s, param_a);
  }
  if (var_X(param_e_1, param_t | 32, 22)) {
  param_a = Ve(param_e_1, param_t, param_r, param_a, param_i);
  }
  return param_a;
  }
  function He(param_e_1, param_t, param_r, param_n, param_o, param_i, param_a) {
  const var_s = param_e_1.getToken();
  var_Y(param_e_1, param_t | 32);
  const var_c = Ue(param_e_1, param_t, param_r, 1, param_n, param_e_1.tokenStart);
  param_a = param_e_1.finishNode(param_o ? {
  type: "AssignmentPattern",
  left: param_a,
  right: var_c
  }
  : {
  type: "AssignmentExpression",
  left: param_a,
  operator: list_T[var_s & 255],
  right: var_c
  }
  , param_i);
  param_e_1.assignable = 2;
  return param_a;
  }
  function Ve(param_e_1, param_t, param_r, param_n, param_o) {
  const var_i_1 = Ue(param_e_1, (param_t | 131072) ^ 131072, param_r, 1, 0, param_e_1.tokenStart);
  var_Z(param_e_1, param_t | 32, 21);
  param_e_1.assignable = 1;
  const var_a_1 = Ue(param_e_1, param_t, param_r, 1, 0, param_e_1.tokenStart);
  param_e_1.assignable = 2;
  return param_e_1.finishNode({
  type: "ConditionalExpression",
  test: param_n,
  consequent: var_i_1,
  alternate: var_a_1
  }
  , param_o);
  }
  function We(param_e_1, param_t, param_r, param_n, param_o, param_i, param_a, param_s) {
  const var_c = -((param_t & 131072) > 0) & 8673330;
  let var_u_1;
  let var_l_1;
  for (param_e_1.assignable = 2;
  param_e_1.getToken() & 8388608 && (var_u_1 = param_e_1.getToken(), var_l_1 = var_u_1 & 3840,
  (var_u_1 & 524288 && param_a & 268435456 || param_a & 524288 &&
  var_u_1 & 268435456) && param_e_1.report(167), !(var_l_1 + ((var_u_1 === 8391735) << 8) - (
  (var_c === var_u_1) << 12) <= param_i));
  ) {
  var_Y(param_e_1, param_t | 32);
  param_s = param_e_1.finishNode({
  type: var_u_1 & 524288 || var_u_1 & 268435456 ? "LogicalExpression" :
  "BinaryExpression",
  left: param_s,
  right: We(param_e_1, param_t, param_r, param_n, param_e_1.tokenStart, var_l_1,
  var_u_1, Ye(param_e_1, param_t, param_r, 0, param_n, 1, !(param_t & 131072) &&
  var_l_1 < 2048 ? 1 : 0)),
  operator: list_T[var_u_1 & 255]
  }
  , param_o);
  }
  if (param_e_1.getToken() === 1077936155) {
  param_e_1.report(26);
  }
  return param_s;
  }
  function ze(param_e_1, param_t, param_r, param_n, param_o, param_i, param_a = 0) {
  const {
  tokenStart: var_s
  }
  = param_e_1;
  param_e_1.flags &= -4161;
  var_Z(param_e_1, param_t | 32, 2162700);
  const list_c_1 = [];
  if (param_e_1.getToken() !== 1074790415) {
  while (param_e_1.getToken() === 134283267) {
  const {
  index: var_r,
  tokenStart: var_n,
  tokenIndex: var_o_1,
  tokenValue: var_a_1
  }
  = param_e_1;
  const var_s_1 = param_e_1.getToken();
  const var_u_1 = ut(param_e_1, param_t);
  if (var_$(param_e_1, var_r, var_o_1, var_a_1)) {
  param_t |= 1;
  if (param_e_1.flags & 128) {
  throw new var_D(var_n, param_e_1.currentLocation, 66);
  }
  if (param_e_1.flags & 64) {
  throw new var_D(var_n, param_e_1.currentLocation, 9);
  }
  if (param_e_1.flags & 4096) {
  throw new var_D(var_n, param_e_1.currentLocation, 15);
  }
  if (param_i != null) {
  param_i.reportScopeError();
  }
  }
  list_c_1.push(ke(param_e_1, param_t, var_u_1, var_s_1, var_n));
  }
  if (param_t & 1 && (param_o && (~param_o & 537079808 || param_e_1.report(121),
  ~param_o & 36864 || param_e_1.report(40)), param_e_1.flags & 512 &&
  param_e_1.report(121), param_e_1.flags & 256)) {
  if (param_e_1.strictReservedRange) {
  throw new var_D(param_e_1.strictReservedRange[0], param_e_1.strictReservedRange[1],
  120);
  }
  param_e_1.report(120);
  }
  }
  param_e_1.flags = (param_e_1.flags | 4928) ^ 4928;
  param_e_1.destructible = (param_e_1.destructible | 256) ^ 256;
  while (param_e_1.getToken() !== 1074790415) {
  list_c_1.push(ye(param_e_1, param_t, param_r, param_n, {
  }
  , 4));
  }
  var_Z(param_e_1, param_a & 24 ? param_t | 32 : param_t, 1074790415);
  param_e_1.flags &= -4289;
  if (param_e_1.getToken() === 1077936155) {
  param_e_1.report(26);
  }
  return param_e_1.finishNode({
  type: "BlockStatement",
  body: list_c_1
  }
  , var_s);
  }
  function Ye(param_e_1, param_t, param_r, param_n, param_o, param_i, param_a = 0) {
  const var_s = param_e_1.tokenStart;
  return Ge(param_e_1, param_t, param_r, $e(param_e_1, param_t, param_r, 2, 0, param_n,
  param_o, param_i, var_s, 0, param_a), param_o, 0, var_s);
  }
  function Ge(param_e_1, param_t, param_r, param_n, param_o, param_i, param_a) {
  if (~param_e_1.getToken() & 33619968 || param_e_1.flags & 1) {
  if (!(~param_e_1.getToken() & 67108864)) {
  param_t = (param_t | 131072) ^ 131072;
  switch (param_e_1.getToken()) {
  case 67108877:
  {
  var_Y(param_e_1, (param_t | 262152) ^ 8);
  if (param_t & 16 && param_e_1.getToken() === 131 && param_e_1.tokenValue === "super") {
  param_e_1.report(175);
  }
  param_e_1.assignable = ~param_e_1.flags & 2048 ? 1 : 2;
  const var_o_1 = Qe(param_e_1, param_t | 64, param_r, 1);
  param_n = param_e_1.finishNode({
  type: "MemberExpression",
  object: param_n,
  computed: false,
  property: var_o_1,
  optional: false
  }
  , param_a);
  break;
  }
  case 69271571:
  {
  if (!(~param_e_1.flags & 8192)) {
  param_e_1.flags = (param_e_1.flags | 8192) ^ 8192;
  return param_n;
  }
  let flag_i = false;
  if (!(~param_e_1.flags & 2048)) {
  flag_i = true;
  param_e_1.flags = (param_e_1.flags | 2048) ^ 2048;
  }
  var_Y(param_e_1, param_t | 32);
  const {
  tokenStart: var_s
  }
  = param_e_1;
  const var_c = je(param_e_1, param_t, param_r, param_o, 1, var_s);
  var_Z(param_e_1, param_t, 20);
  param_e_1.assignable = flag_i ? 2 : 1;
  param_n = param_e_1.finishNode({
  type: "MemberExpression",
  object: param_n,
  computed: true,
  property: var_c,
  optional: false
  }
  , param_a);
  if (flag_i) {
  param_e_1.flags |= 2048;
  }
  break;
  }
  case 67174411:
  {
  if (!(~param_e_1.flags & 1024)) {
  param_e_1.flags = (param_e_1.flags | 1024) ^ 1024;
  return param_n;
  }
  let flag_i = false;
  if (!(~param_e_1.flags & 2048)) {
  flag_i = true;
  param_e_1.flags = (param_e_1.flags | 2048) ^ 2048;
  }
  const var_s = st(param_e_1, param_t, param_r, param_o);
  if (param_t & 1 || !param_e_1.options.webcompat) {
  param_e_1.assignable = 2;
  }
  else {
  param_e_1.assignable = 4;
  }
  param_n = param_e_1.finishNode({
  type: "CallExpression",
  callee: param_n,
  arguments: var_s,
  optional: false
  }
  , param_a);
  if (flag_i) {
  param_e_1.flags |= 2048;
  }
  break;
  }
  case 67108991:
  var_Y(param_e_1, (param_t | 262152) ^ 8);
  param_e_1.flags |= 2048;
  param_e_1.assignable = 2;
  param_n = function (param_e_2, param_t_1, param_r_1, param_n_1, param_o_1) {
  let var_i_1;
  let flag_a = false;
  if ((param_e_2.getToken() === 69271571 || param_e_2.getToken() === 67174411) &&
  !(~param_e_2.flags & 2048)) {
  flag_a = true;
  param_e_2.flags = (param_e_2.flags | 2048) ^ 2048;
  }
  if (param_e_2.getToken() === 69271571) {
  var_Y(param_e_2, param_t_1 | 32);
  const {
  tokenStart: var_a_1
  }
  = param_e_2;
  const var_s = je(param_e_2, param_t_1, param_r_1, 0, 1, var_a_1);
  var_Z(param_e_2, param_t_1, 20);
  param_e_2.assignable = 2;
  var_i_1 = param_e_2.finishNode({
  type: "MemberExpression",
  object: param_n_1,
  computed: true,
  optional: true,
  property: var_s
  }
  , param_o_1);
  }
  else if (param_e_2.getToken() === 67174411) {
  const var_a_1 = st(param_e_2, param_t_1, param_r_1, 0);
  if (param_t_1 & 1 || !param_e_2.options.webcompat) {
  param_e_2.assignable = 2;
  }
  else {
  param_e_2.assignable = 4;
  }
  var_i_1 = param_e_2.finishNode({
  type: "CallExpression",
  callee: param_n_1,
  arguments: var_a_1,
  optional: true
  }
  , param_o_1);
  }
  else {
  const var_a_1 = Qe(param_e_2, param_t_1, param_r_1, 1);
  param_e_2.assignable = 2;
  var_i_1 = param_e_2.finishNode({
  type: "MemberExpression",
  object: param_n_1,
  computed: false,
  optional: true,
  property: var_a_1
  }
  , param_o_1);
  }
  if (flag_a) {
  param_e_2.flags |= 2048;
  }
  return var_i_1;
  }
  (param_e_1, param_t, param_r, param_n, param_a);
  break;
  default:
  if (!(~param_e_1.flags & 2048)) {
  param_e_1.report(168);
  }
  param_e_1.assignable = 2;
  param_n = param_e_1.finishNode({
  type: "TaggedTemplateExpression",
  tag: param_n,
  quasi: param_e_1.getToken() === 67174408 ? ot(param_e_1, param_t | 64, param_r) :
  nt(param_e_1, param_t)
  }
  , param_a);
  }
  param_n = Ge(param_e_1, param_t, param_r, param_n, 0, 1, param_a);
  }
  }
  else {
  param_n = function (param_e_2, param_t_1, param_r_1, param_n_1) {
  if (param_e_2.assignable & 2) {
  param_e_2.report(55);
  }
  const var_o_1 = param_e_2.getToken();
  var_Y(param_e_2, param_t_1);
  param_e_2.assignable = 2;
  return param_e_2.finishNode({
  type: "UpdateExpression",
  argument: param_r_1,
  operator: list_T[var_o_1 & 255],
  prefix: false
  }
  , param_n_1);
  }
  (param_e_1, param_t, param_n, param_a);
  }
  if (param_i === 0 && !(~param_e_1.flags & 2048)) {
  param_e_1.flags = (param_e_1.flags | 2048) ^ 2048;
  param_n = param_e_1.finishNode({
  type: "ChainExpression",
  expression: param_n
  }
  , param_a);
  }
  return param_n;
  }
  function Qe(param_e_1, param_t, param_r, param_n = 0) {
  if (!(param_e_1.getToken() & 143360) && param_e_1.getToken() !== -2147483527 &&
  param_e_1.getToken() !== -2147483526 && (param_e_1.getToken() !== 131 ||
  !param_n)) {
  param_e_1.report(162);
  }
  if (param_e_1.getToken() === 131) {
  return Ot(param_e_1, param_t, param_r, 0);
  }
  else {
  return ct(param_e_1, param_t);
  }
  }
  function $e(param_e_1, param_t, param_r, param_n, param_o, param_a, param_s, param_c,
  param_u, param_l = 0, param_d = 0) {
  if (!(~param_e_1.getToken() & 143360)) {
  switch (param_e_1.getToken()) {
  case 209006:
  return function (param_e_2, param_t_1, param_r_1, param_n_1, param_o_1, param_i,
  param_a_1) {
  if (param_o_1) {
  if (!(param_e_2.destructible & 128) && ((param_a_1 = param_e_2.firstAwaitLocation) === null ||
  param_a_1 === undefined)) {
  param_e_2.firstAwaitLocation = {
  start: param_i,
  end: param_e_2.currentLocation
  };
  }
  param_e_2.destructible |= 128;
  }
  if (param_t_1 & 524288) {
  param_e_2.report(179);
  }
  const var_s = yt(param_e_2, param_t_1, param_r_1);
  if (var_s.type === "ArrowFunctionExpression" || !(param_e_2.getToken() & 65536)) {
  if (param_t_1 & 2048) {
  throw new var_D(param_i, param_e_2.startPosition, 178);
  }
  if (param_t_1 & 2) {
  throw new var_D(param_i, param_e_2.startPosition, 112);
  }
  if (param_t_1 & 8192 && param_t_1 & 2048) {
  throw new var_D(param_i, param_e_2.startPosition, 112);
  }
  return var_s;
  }
  if (param_t_1 & 8192) {
  throw new var_D(param_i, param_e_2.startPosition, 31);
  }
  if (param_t_1 & 2048 || param_t_1 & 2 && param_t_1 & 8) {
  if (param_n_1) {
  throw new var_D(param_i, param_e_2.startPosition, 0);
  }
  const var_o_1 = Ye(param_e_2, param_t_1, param_r_1, 0, 0, 1);
  if (param_e_2.getToken() === 8391735) {
  param_e_2.report(33);
  }
  param_e_2.assignable = 2;
  return param_e_2.finishNode({
  type: "AwaitExpression",
  argument: var_o_1
  }
  , param_i);
  }
  if (param_t_1 & 2) {
  throw new var_D(param_i, param_e_2.startPosition, 98);
  }
  return var_s;
  }
  (param_e_1, param_t, param_r, param_o, param_s, param_u);
  case 241771:
  return function (param_e_2, param_t_1, param_r_1, param_n_1, param_o_1, param_i) {
  if (param_n_1) {
  param_e_2.destructible |= 256;
  }
  if (param_t_1 & 1024) {
  var_Y(param_e_2, param_t_1 | 32);
  if (param_t_1 & 8192) {
  param_e_2.report(32);
  }
  if (!param_o_1) {
  param_e_2.report(26);
  }
  if (param_e_2.getToken() === 22) {
  param_e_2.report(126);
  }
  let var_n = null;
  let flag_a = false;
  if (param_e_2.flags & 1) {
  if (param_e_2.getToken() === 8391476) {
  param_e_2.report(30, list_T[param_e_2.getToken() & 255]);
  }
  }
  else {
  flag_a = var_X(param_e_2, param_t_1 | 32, 8391476);
  if (param_e_2.getToken() & 77824 || flag_a) {
  var_n = Ue(param_e_2, param_t_1, param_r_1, 1, 0, param_e_2.tokenStart);
  }
  }
  param_e_2.assignable = 2;
  return param_e_2.finishNode({
  type: "YieldExpression",
  argument: var_n,
  delegate: flag_a
  }
  , param_i);
  }
  if (param_t_1 & 1) {
  param_e_2.report(97, "yield");
  }
  return yt(param_e_2, param_t_1, param_r_1);
  }
  (param_e_1, param_t, param_r, param_s, param_a, param_u);
  case 209005:
  return function (param_e_2, param_t_1, param_r_1, param_n_1, param_o_1, param_i,
  param_a_1, param_s_1) {
  const var_c = param_e_2.getToken();
  const var_u_1 = ct(param_e_2, param_t_1);
  const {
  flags: var_l_1
  }
  = param_e_2;
  if (!(var_l_1 & 1)) {
  if (param_e_2.getToken() === 86104) {
  return dt(param_e_2, param_t_1, param_r_1, 1, param_n_1, param_s_1);
  }
  if (ie(param_t_1, param_e_2.getToken())) {
  if (!param_o_1) {
  param_e_2.report(0);
  }
  if (!(~param_e_2.getToken() & 36864)) {
  param_e_2.flags |= 256;
  }
  return Dt(param_e_2, param_t_1, param_r_1, param_i, param_s_1);
  }
  }
  if (param_a_1 || param_e_2.getToken() !== 67174411) {
  if (param_e_2.getToken() === 10) {
  ae(param_e_2, param_t_1, var_c);
  if (param_a_1) {
  param_e_2.report(51);
  }
  if (!(~var_c & 36864)) {
  param_e_2.flags |= 256;
  }
  return _t(param_e_2, param_t_1, param_r_1, param_e_2.tokenValue, var_u_1, param_a_1,
  param_i, 0, param_s_1);
  }
  else {
  param_e_2.assignable = 1;
  return var_u_1;
  }
  }
  else {
  return Tt(param_e_2, param_t_1, param_r_1, var_u_1, param_i, 1, var_l_1, param_s_1);
  }
  }
  (param_e_1, param_t, param_r, param_s, param_c, param_a, param_o, param_u);
  }
  const {
  tokenValue: var_i_1
  }
  = param_e_1;
  const var_d_1 = param_e_1.getToken();
  const var_p_1 = ct(param_e_1, param_t | 64);
  if (param_e_1.getToken() === 10) {
  if (!param_c) {
  param_e_1.report(0);
  }
  ae(param_e_1, param_t, var_d_1);
  if (!(~var_d_1 & 36864)) {
  param_e_1.flags |= 256;
  }
  return _t(param_e_1, param_t, param_r, var_i_1, var_p_1, param_o, param_a, 0, param_u,
  param_l);
  }
  else {
  if (!!(param_t & 16) && !(param_t & 32768) && !(param_t & 8192) &&
  param_e_1.tokenValue === "arguments") {
  param_e_1.report(132);
  }
  if ((var_d_1 & 255) == 73) {
  if (param_t & 1) {
  param_e_1.report(115);
  }
  if (param_n & 24) {
  param_e_1.report(100);
  }
  }
  param_e_1.assignable = param_t & 1 && !(~var_d_1 & 537079808) ?
  2 : 1;
  return var_p_1;
  }
  }
  if (!(~param_e_1.getToken() & 134217728)) {
  return ut(param_e_1, param_t);
  }
  switch (param_e_1.getToken()) {
  case 33619993:
  case 33619994:
  return function (param_e_2, param_t_1, param_r_1, param_n_1, param_o_1, param_i) {
  if (param_n_1) {
  param_e_2.report(56);
  }
  if (!param_o_1) {
  param_e_2.report(0);
  }
  const var_a_1 = param_e_2.getToken();
  var_Y(param_e_2, param_t_1 | 32);
  const var_s = Ye(param_e_2, param_t_1, param_r_1, 0, 0, 1);
  if (param_e_2.assignable & 2) {
  param_e_2.report(55);
  }
  param_e_2.assignable = 2;
  return param_e_2.finishNode({
  type: "UpdateExpression",
  argument: var_s,
  operator: list_T[var_a_1 & 255],
  prefix: true
  }
  , param_i);
  }
  (param_e_1, param_t, param_r, param_o, param_c, param_u);
  case 16863276:
  case 16842798:
  case 16842799:
  case 25233968:
  case 25233969:
  case 16863275:
  case 16863277:
  return function (param_e_2, param_t_1, param_r_1, param_n_1, param_o_1) {
  if (!param_n_1) {
  param_e_2.report(0);
  }
  const {
  tokenStart: var_i_1
  }
  = param_e_2;
  const var_a_1 = param_e_2.getToken();
  var_Y(param_e_2, param_t_1 | 32);
  const var_s = Ye(param_e_2, param_t_1, param_r_1, 0, param_o_1, 1);
  var var_c;
  if (param_e_2.getToken() === 8391735) {
  param_e_2.report(33);
  }
  if (param_t_1 & 1 && var_a_1 === 16863276) {
  if (var_s.type === "Identifier") {
  param_e_2.report(123);
  }
  else if ((var_c = var_s).property && var_c.property.type === "PrivateIdentifier") {
  param_e_2.report(129);
  }
  }
  param_e_2.assignable = 2;
  return param_e_2.finishNode({
  type: "UnaryExpression",
  operator: list_T[var_a_1 & 255],
  argument: var_s,
  prefix: true
  }
  , var_i_1);
  }
  (param_e_1, param_t, param_r, param_c, param_s);
  case 86104:
  return dt(param_e_1, param_t, param_r, 0, param_s, param_u);
  case 2162700:
  return function (param_e_2, param_t_1, param_r_1, param_n_1, param_o_1) {
  const var_i_1 = gt(param_e_2, param_t_1, undefined, param_r_1, param_n_1, param_o_1,
  0, 2);
  if (param_e_2.destructible & 64) {
  param_e_2.report(63);
  }
  if (param_e_2.destructible & 8) {
  param_e_2.report(62);
  }
  return var_i_1;
  }
  (param_e_1, param_t, param_r, param_a ? 0 : 1, param_s);
  case 69271571:
  return function (param_e_2, param_t_1, param_r_1, param_n_1, param_o_1) {
  const var_i_1 = pt(param_e_2, param_t_1, undefined, param_r_1, param_n_1, param_o_1,
  0, 2);
  if (param_e_2.destructible & 64) {
  param_e_2.report(63);
  }
  if (param_e_2.destructible & 8) {
  param_e_2.report(62);
  }
  return var_i_1;
  }
  (param_e_1, param_t, param_r, param_a ? 0 : 1, param_s);
  case 67174411:
  return function (param_e_2, param_t_1, param_r_1, param_n_1, param_o_1, param_i,
  param_a_1, param_s_1) {
  param_e_2.flags = (param_e_2.flags | 128) ^ 128;
  const var_c = param_e_2.tokenStart;
  var_Y(param_e_2, param_t_1 | 262176);
  const var_u_1 = (param_s_1 = param_e_2.createScopeIfLexical()) === null ||
  param_s_1 === undefined ? undefined : param_s_1.createChildScope(512);
  if (var_X(param_e_2, param_t_1 = (param_t_1 | 131072) ^ 131072, 16)) {
  return bt(param_e_2, param_t_1, var_u_1, param_r_1, [], param_n_1, 0, param_i,
  param_a_1);
  }
  let num_l = 0;
  const var_d_1 = param_e_2.destructible & 384;
  param_e_2.destructible &= -385;
  const var_p_1 = param_e_2.firstAwaitLocation;
  let var_f_1;
  param_e_2.firstAwaitLocation = null;
  let list_h = [];
  let num_m = 0;
  let num_g = 0;
  let num_v = 0;
  const var_y = param_e_2.tokenStart;
  for (param_e_2.assignable = 1;
  param_e_2.getToken() !== 16;
  ) {
  const {
  tokenStart: var_n,
  currentLocation: var_o_1
  }
  = param_e_2;
  const var_i_1 = param_e_2.getToken();
  if (var_i_1 & 143360) {
  if (var_u_1 != null) {
  var_u_1.addBlockName(param_t_1, param_e_2.tokenValue, 1, var_n, var_o_1);
  }
  if (~var_i_1 & 537079808) {
  if (!(~var_i_1 & 36864)) {
  num_v = 1;
  }
  }
  else {
  num_g = 1;
  }
  var_f_1 = $e(param_e_2, param_t_1, param_r_1, 1, 0, 1, 1, 1, var_n, 0);
  if (param_e_2.getToken() === 16 || param_e_2.getToken() === 18) {
  if (param_e_2.assignable & 2) {
  num_l |= 16;
  num_g = 1;
  }
  }
  else {
  if (param_e_2.getToken() === 1077936155) {
  num_g = 1;
  }
  else {
  num_l |= 16;
  }
  var_f_1 = Ge(param_e_2, param_t_1, param_r_1, var_f_1, 1, 0, var_n);
  if (param_e_2.getToken() !== 16 && param_e_2.getToken() !== 18) {
  var_f_1 = qe(param_e_2, param_t_1, param_r_1, 1, 0, var_n, var_f_1);
  }
  }
  }
  else {
  if (~var_i_1 & 2097152) {
  if (var_i_1 === 14) {
  var_f_1 = ht(param_e_2, param_t_1, var_u_1, param_r_1, 16, 1, 0, 1, 0);
  if (param_e_2.destructible & 16) {
  param_e_2.report(74);
  }
  num_g = 1;
  if (!!num_m && (param_e_2.getToken() === 16 || param_e_2.getToken() === 18)) {
  list_h.push(var_f_1);
  }
  num_l |= 8;
  break;
  }
  num_l |= 16;
  var_f_1 = Ue(param_e_2, param_t_1, param_r_1, 1, 1, var_n);
  if (!!num_m && (param_e_2.getToken() === 16 || param_e_2.getToken() === 18)) {
  list_h.push(var_f_1);
  }
  if (param_e_2.getToken() === 18) {
  if (!num_m) {
  num_m = 1;
  list_h = [var_f_1];
  }
  }
  if (num_m) {
  while (var_X(param_e_2, param_t_1 | 32, 18)) {
  list_h.push(Ue(param_e_2, param_t_1, param_r_1, 1, 1, param_e_2.tokenStart));
  }
  param_e_2.assignable = 2;
  var_f_1 = param_e_2.finishNode({
  type: "SequenceExpression",
  expressions: list_h
  }
  , var_y);
  }
  var_Z(param_e_2, param_t_1, 16);
  param_e_2.destructible = num_l | var_d_1;
  if (var_p_1) {
  param_e_2.firstAwaitLocation = var_p_1;
  }
  if (param_e_2.options.preserveParens) {
  return param_e_2.finishNode({
  type: "ParenthesizedExpression",
  expression: var_f_1
  }
  , var_c);
  }
  else {
  return var_f_1;
  }
  }
  var_f_1 = var_i_1 === 2162700 ? gt(param_e_2, param_t_1 | 262144, var_u_1, param_r_1,
  0, 1, 0, 1) : pt(param_e_2, param_t_1 | 262144, var_u_1, param_r_1, 0, 1, 0, 1);
  num_l |= param_e_2.destructible;
  num_g = 1;
  param_e_2.assignable = 2;
  if (param_e_2.getToken() !== 16 && param_e_2.getToken() !== 18) {
  if (num_l & 8) {
  param_e_2.report(124);
  }
  var_f_1 = Ge(param_e_2, param_t_1, param_r_1, var_f_1, 0, 0, var_n);
  num_l |= 16;
  if (param_e_2.getToken() !== 16 && param_e_2.getToken() !== 18) {
  var_f_1 = qe(param_e_2, param_t_1, param_r_1, 0, 0, var_n, var_f_1);
  }
  }
  }
  if (!!num_m && (param_e_2.getToken() === 16 || param_e_2.getToken() === 18)) {
  list_h.push(var_f_1);
  }
  if (!var_X(param_e_2, param_t_1 | 32, 18)) {
  break;
  }
  if (!num_m) {
  num_m = 1;
  list_h = [var_f_1];
  }
  if (param_e_2.getToken() === 16) {
  num_l |= 8;
  break;
  }
  }
  if (num_m) {
  param_e_2.assignable = 2;
  var_f_1 = param_e_2.finishNode({
  type: "SequenceExpression",
  expressions: list_h
  }
  , var_y);
  }
  var_Z(param_e_2, param_t_1, 16);
  if (num_l & 16 && num_l & 8) {
  param_e_2.report(153);
  }
  num_l |= (param_e_2.destructible & 256 ? 256 : 0) | (param_e_2.destructible & 128 ?
  128 : 0);
  if (param_e_2.getToken() === 10) {
  if (num_l & 48) {
  param_e_2.report(49);
  }
  if (param_t_1 & 2050 && num_l & 128) {
  const var_t_1 = param_e_2.firstAwaitLocation;
  if (var_t_1) {
  throw new var_D(var_t_1.start, var_t_1.end, 31);
  }
  param_e_2.report(31);
  }
  if (param_t_1 & 1025 && num_l & 256) {
  param_e_2.report(32);
  }
  if (num_g) {
  param_e_2.flags |= 128;
  }
  if (num_v) {
  param_e_2.flags |= 256;
  }
  param_e_2.destructible |= var_d_1;
  if (var_p_1) {
  param_e_2.firstAwaitLocation = var_p_1;
  }
  return bt(param_e_2, param_t_1, var_u_1, param_r_1, num_m ?
  list_h : [var_f_1], param_n_1, 0, param_i, param_a_1);
  }
  if (num_l & 64) {
  param_e_2.report(63);
  }
  if (num_l & 8) {
  param_e_2.report(146);
  }
  param_e_2.destructible = (param_e_2.destructible | 256) ^ 256 | num_l | var_d_1;
  if (var_p_1) {
  param_e_2.firstAwaitLocation = var_p_1;
  }
  if (param_e_2.options.preserveParens) {
  return param_e_2.finishNode({
  type: "ParenthesizedExpression",
  expression: var_f_1
  }
  , var_c);
  }
  else {
  return var_f_1;
  }
  }
  (param_e_1, param_t | 64, param_r, param_a, 0, param_u, param_l);
  case 86021:
  case 86022:
  case 86023:
  return function (param_e_2, param_t_1) {
  const var_r = param_e_2.tokenStart;
  const var_n = list_T[param_e_2.getToken() & 255];
  const obj_o = {
  type: "Literal",
  value: param_e_2.getToken() === 86023 ? null : var_n === "true"
  };
  if (param_e_2.options.raw) {
  obj_o.raw = var_n;
  }
  var_Y(param_e_2, param_t_1);
  param_e_2.assignable = 2;
  return param_e_2.finishNode(obj_o, var_r);
  }
  (param_e_1, param_t);
  case 86111:
  return function (param_e_2, param_t_1) {
  const {
  tokenStart: var_r
  }
  = param_e_2;
  var_Y(param_e_2, param_t_1);
  param_e_2.assignable = 2;
  return param_e_2.finishNode({
  type: "ThisExpression"
  }
  , var_r);
  }
  (param_e_1, param_t);
  case 65540:
  return function (param_e_2, param_t_1) {
  const {
  tokenRaw: var_r,
  tokenRegExp: var_n,
  tokenValue: var_o_1,
  tokenStart: var_i_1
  }
  = param_e_2;
  var_Y(param_e_2, param_t_1);
  param_e_2.assignable = 2;
  const obj_a = {
  type: "Literal",
  value: var_o_1,
  regex: var_n
  };
  if (param_e_2.options.raw) {
  obj_a.raw = var_r;
  }
  return param_e_2.finishNode(obj_a, var_i_1);
  }
  (param_e_1, param_t);
  case 133:
  if (!(param_e_1.features & 1)) {
  param_e_1.report(30, "@");
  }
  case 86094:
  return function (param_e_2, param_t_1, param_r_1, param_n_1, param_o_1) {
  let var_a_1 = null;
  let var_s = null;
  const var_c = At(param_e_2, param_t_1, param_r_1);
  var_Z(param_e_2, param_t_1 = (param_t_1 | 16385) ^ 16384, 86094);
  if (param_e_2.getToken() & 4096 && param_e_2.getToken() !== 20565) {
  if (re(param_e_2, param_t_1, param_e_2.getToken())) {
  param_e_2.report(120);
  }
  if (!(~param_e_2.getToken() & 537079808)) {
  param_e_2.report(121);
  }
  var_a_1 = ct(param_e_2, param_t_1);
  }
  let var_u_1 = param_t_1;
  if (var_X(param_e_2, param_t_1 | 32, 20565)) {
  var_s = Ye(param_e_2, param_t_1, param_r_1, 0, param_n_1, 0);
  var_u_1 |= 512;
  }
  else {
  var_u_1 = (var_u_1 | 512) ^ 512;
  }
  const var_l_1 = xt(param_e_2, var_u_1, param_t_1, undefined, param_r_1, 2, param_n_1);
  param_e_2.assignable = 2;
  return param_e_2.finishNode(var_i({
  type: "ClassExpression",
  id: var_a_1,
  superClass: var_s,
  body: var_l_1
  }
  , param_e_2.features & 1 ? {
  decorators: var_c
  }
  : null), param_o_1);
  }
  (param_e_1, param_t, param_r, param_s, param_u);
  case 86109:
  return function (param_e_2, param_t_1) {
  const {
  tokenStart: var_r
  }
  = param_e_2;
  var_Y(param_e_2, param_t_1);
  switch (param_e_2.getToken()) {
  case 67108991:
  param_e_2.report(169);
  case 67174411:
  if (!(param_t_1 & 512)) {
  param_e_2.report(28);
  }
  param_e_2.assignable = 2;
  break;
  case 69271571:
  case 67108877:
  if (!(param_t_1 & 256)) {
  param_e_2.report(29);
  }
  param_e_2.assignable = 1;
  break;
  default:
  param_e_2.report(30, "super");
  }
  return param_e_2.finishNode({
  type: "Super"
  }
  , var_r);
  }
  (param_e_1, param_t);
  case 67174409:
  return nt(param_e_1, param_t);
  case 67174408:
  return ot(param_e_1, param_t, param_r);
  case 86107:
  return function (param_e_2, param_t_1, param_r_1, param_n_1) {
  const {
  tokenStart: var_o_1
  }
  = param_e_2;
  const var_i_1 = ct(param_e_2, param_t_1 | 32);
  const {
  tokenStart: var_a_1
  }
  = param_e_2;
  if (var_X(param_e_2, param_t_1, 67108877)) {
  if (param_t_1 & 65536 && param_e_2.getToken() === 209030) {
  param_e_2.assignable = 2;
  return function (param_e_3, param_t_2, param_r_2, param_n_2) {
  const var_o_2 = ct(param_e_3, param_t_2);
  return param_e_3.finishNode({
  type: "MetaProperty",
  meta: param_r_2,
  property: var_o_2
  }
  , param_n_2);
  }
  (param_e_2, param_t_1, var_i_1, var_o_1);
  }
  param_e_2.report(94);
  }
  param_e_2.assignable = 2;
  if (!(~param_e_2.getToken() & 16842752)) {
  param_e_2.report(65, list_T[param_e_2.getToken() & 255]);
  }
  const var_s = $e(param_e_2, param_t_1, param_r_1, 2, 1, 0, param_n_1, 1, var_a_1);
  param_t_1 = (param_t_1 | 131072) ^ 131072;
  if (param_e_2.getToken() === 67108991) {
  param_e_2.report(170);
  }
  const var_c = function var_e(param_t_2, param_r_2, param_n_2, param_o_1, param_i,
  param_a_1) {
  const var_s_1 = param_t_2.getToken();
  if (var_s_1 & 67108864) {
  if (var_s_1 === 67108877) {
  var_Y(param_t_2, param_r_2 | 262144);
  param_t_2.assignable = 1;
  const var_i_2 = Qe(param_t_2, param_r_2, param_n_2, 1);
  return var_e(param_t_2, param_r_2, param_n_2, param_t_2.finishNode({
  type: "MemberExpression",
  object: param_o_1,
  computed: false,
  property: var_i_2,
  optional: false
  }
  , param_a_1), 0, param_a_1);
  }
  if (var_s_1 === 69271571) {
  var_Y(param_t_2, param_r_2 | 32);
  const {
  tokenStart: var_s_2
  }
  = param_t_2;
  const var_c_1 = je(param_t_2, param_r_2, param_n_2, param_i, 1, var_s_2);
  var_Z(param_t_2, param_r_2, 20);
  param_t_2.assignable = 1;
  return var_e(param_t_2, param_r_2, param_n_2, param_t_2.finishNode({
  type: "MemberExpression",
  object: param_o_1,
  computed: true,
  property: var_c_1,
  optional: false
  }
  , param_a_1), 0, param_a_1);
  }
  if (var_s_1 === 67174408 || var_s_1 === 67174409) {
  param_t_2.assignable = 2;
  return var_e(param_t_2, param_r_2, param_n_2, param_t_2.finishNode({
  type: "TaggedTemplateExpression",
  tag: param_o_1,
  quasi: param_t_2.getToken() === 67174408 ? ot(param_t_2, param_r_2 | 64, param_n_2) :
  nt(param_t_2, param_r_2 | 64)
  }
  , param_a_1), 0, param_a_1);
  }
  }
  return param_o_1;
  }
  (param_e_2, param_t_1, param_r_1, var_s, param_n_1, var_a_1);
  param_e_2.assignable = 2;
  return param_e_2.finishNode({
  type: "NewExpression",
  callee: var_c,
  arguments: param_e_2.getToken() === 67174411 ? st(param_e_2, param_t_1, param_r_1,
  param_n_1) : []
  }
  , var_o_1);
  }
  (param_e_1, param_t, param_r, param_s);
  case 134283389:
  return rt(param_e_1, param_t);
  case 131:
  {
  if (!param_d) {
  param_e_1.report(30, "PrivateField");
  }
  const {
  tokenStart: var_n
  }
  = param_e_1;
  const var_o_1 = Ot(param_e_1, param_t, param_r, 0);
  if (param_e_1.getToken() !== 8673330) {
  throw new var_D(var_n, param_e_1.startPosition, 151);
  }
  return var_o_1;
  }
  case 86106:
  return function (param_e_2, param_t_1, param_r_1, param_n_1, param_o_1, param_i) {
  let var_a_1 = ct(param_e_2, param_t_1);
  if (param_e_2.getToken() === 67108877) {
  return Ke(param_e_2, param_t_1, var_a_1, param_i, param_r_1, param_o_1, param_n_1);
  }
  else {
  if (param_n_1) {
  param_e_2.report(144);
  }
  var_a_1 = Xe(param_e_2, param_t_1, param_r_1, param_o_1, param_i);
  param_e_2.assignable = 2;
  return Ge(param_e_2, param_t_1, param_r_1, var_a_1, param_o_1, 0, param_i);
  }
  }
  (param_e_1, param_t, param_r, param_o, param_s, param_u);
  case 8456256:
  if (param_e_1.options.jsx) {
  return Pt(param_e_1, param_t, param_r, 0, param_e_1.tokenStart);
  }
  default:
  if (ie(param_t, param_e_1.getToken())) {
  return yt(param_e_1, param_t, param_r);
  }
  param_e_1.report(30, list_T[param_e_1.getToken() & 255]);
  }
  }
  function Ke(param_e_1, param_t, param_r, param_n, param_o, param_i = 0, param_a = 0) {
  const var_s = param_e_1.tokenStart;
  const var_c = param_e_1.currentLocation;
  var_Y(param_e_1, param_t);
  const var_u_1 = param_e_1.getToken();
  const var_l_1 = param_e_1.features & 2 && !(var_u_1 & -2147483648) &&
  param_e_1.tokenValue === "defer";
  const var_d_1 = param_e_1.features & 4 && !(var_u_1 & -2147483648) &&
  param_e_1.tokenValue === "source";
  if (var_l_1 || var_d_1) {
  if (param_a) {
  param_e_1.report(144);
  }
  var_Y(param_e_1, param_t);
  const var_r = Xe(param_e_1, param_t, param_o, param_i, param_n, param_e_1.tokenValue);
  param_e_1.assignable = 2;
  return var_r;
  }
  if (!(param_t & 2)) {
  throw new var_D(var_s, var_c, 171);
  }
  if (var_u_1 !== 209031 && param_e_1.tokenValue !== "meta") {
  param_e_1.report(176);
  }
  else if (var_u_1 & -2147483648) {
  param_e_1.report(177);
  }
  param_e_1.assignable = 2;
  return param_e_1.finishNode({
  type: "MetaProperty",
  meta: param_r,
  property: ct(param_e_1, param_t)
  }
  , param_n);
  }
  function Xe(param_e_1, param_t, param_r, param_n, param_o, param_a = null) {
  var_Z(param_e_1, param_t | 32, 67174411);
  if (param_e_1.getToken() === 14) {
  param_e_1.report(145);
  }
  const var_s = Ue(param_e_1, param_t, param_r, 1, param_n, param_e_1.tokenStart);
  let var_c = null;
  if (param_e_1.getToken() === 18) {
  var_Z(param_e_1, param_t, 18);
  if (param_e_1.getToken() !== 16) {
  var_c = Ue(param_e_1, (param_t | 131072) ^ 131072, param_r, 1, param_n, param_e_1.tokenStart);
  }
  var_X(param_e_1, param_t, 18);
  }
  const var_u_1 = var_i({
  type: "ImportExpression",
  source: var_s,
  options: var_c
  }
  , param_e_1.features & 2 || param_e_1.features & 4 ? {
  phase: param_a
  }
  : null);
  var_Z(param_e_1, param_t, 16);
  return param_e_1.finishNode(var_u_1, param_o);
  }
  function Ze(param_e_1, param_t) {
  if (!var_X(param_e_1, param_t, 20579)) {
  return [];
  }
  var_Z(param_e_1, param_t, 2162700);
  const list_r = [];
  const var_n = new Set();
  while (param_e_1.getToken() !== 1074790415) {
  const var_o_1 = param_e_1.tokenStart;
  const var_i_1 = et(param_e_1, param_t);
  var_Z(param_e_1, param_t, 21);
  const var_a_1 = Je(param_e_1, param_t);
  const var_s = var_i_1.type === "Literal" ? var_i_1.value :
  var_i_1.name;
  if (var_n.has(var_s)) {
  param_e_1.report(147, var_s);
  }
  var_n.add(var_s);
  list_r.push(param_e_1.finishNode({
  type: "ImportAttribute",
  key: var_i_1,
  value: var_a_1
  }
  , var_o_1));
  if (param_e_1.getToken() !== 1074790415) {
  var_Z(param_e_1, param_t, 18);
  }
  }
  var_Z(param_e_1, param_t, 1074790415);
  return list_r;
  }
  function Je(param_e_1, param_t) {
  if (param_e_1.getToken() === 134283267) {
  return ut(param_e_1, param_t);
  }
  param_e_1.report(30, list_T[param_e_1.getToken() & 255]);
  }
  function et(param_e_1, param_t) {
  if (param_e_1.getToken() === 134283267) {
  return ut(param_e_1, param_t);
  }
  else if (param_e_1.getToken() & 143360) {
  return ct(param_e_1, param_t);
  }
  else {
  param_e_1.report(30, list_T[param_e_1.getToken() & 255]);
  return;
  }
  }
  function tt(param_e_1, param_t) {
  if (param_e_1.getToken() === 134283267) {
  if (!param_e_1.tokenValue.isWellFormed()) {
  param_e_1.report(173);
  }
  return ut(param_e_1, param_t);
  }
  else if (param_e_1.getToken() & 143360) {
  return ct(param_e_1, param_t);
  }
  else {
  param_e_1.report(30, list_T[param_e_1.getToken() & 255]);
  return;
  }
  }
  function rt(param_e_1, param_t) {
  const {
  tokenRaw: var_r,
  tokenValue: var_n,
  tokenStart: var_o_1
  }
  = param_e_1;
  var_Y(param_e_1, param_t);
  param_e_1.assignable = 2;
  const obj_i = {
  type: "Literal",
  value: var_n,
  bigint: String(var_n)
  };
  if (param_e_1.options.raw) {
  obj_i.raw = var_r;
  }
  return param_e_1.finishNode(obj_i, var_o_1);
  }
  function nt(param_e_1, param_t) {
  param_e_1.assignable = 2;
  const {
  tokenValue: var_r,
  tokenRaw: var_n,
  tokenStart: var_o_1
  }
  = param_e_1;
  var_Z(param_e_1, param_t, 67174409);
  const list_i = [it(param_e_1, var_r, var_n, var_o_1, true)];
  return param_e_1.finishNode({
  type: "TemplateLiteral",
  expressions: [],
  quasis: list_i
  }
  , var_o_1);
  }
  function ot(param_e_1, param_t, param_r) {
  param_t = (param_t | 131072) ^ 131072;
  const {
  tokenValue: var_n,
  tokenRaw: var_o_1,
  tokenStart: var_i_1
  }
  = param_e_1;
  var_Z(param_e_1, param_t & -65 | 32, 67174408);
  const list_a = [it(param_e_1, var_n, var_o_1, var_i_1, false)];
  const list_s_1 = [je(param_e_1, param_t & -65, param_r, 0, 1, param_e_1.tokenStart)];
  for (param_e_1.getToken() !== 1074790415 && param_e_1.report(83);
  param_e_1.setToken(var_W(param_e_1, param_t), true) !== 67174409;
  ) {
  const {
  tokenValue: var_n_1,
  tokenRaw: var_o_2,
  tokenStart: var_i_2
  }
  = param_e_1;
  var_Z(param_e_1, param_t & -65 | 32, 67174408);
  list_a.push(it(param_e_1, var_n_1, var_o_2, var_i_2, false));
  list_s_1.push(je(param_e_1, param_t, param_r, 0, 1, param_e_1.tokenStart));
  if (param_e_1.getToken() !== 1074790415) {
  param_e_1.report(83);
  }
  }
  {
  const {
  tokenValue: var_r,
  tokenRaw: var_n_1,
  tokenStart: var_o_2
  }
  = param_e_1;
  var_Z(param_e_1, param_t, 67174409);
  list_a.push(it(param_e_1, var_r, var_n_1, var_o_2, true));
  }
  param_e_1.assignable = 2;
  return param_e_1.finishNode({
  type: "TemplateLiteral",
  expressions: list_s_1,
  quasis: list_a
  }
  , var_i_1);
  }
  function it(param_e_1, param_t, param_r, param_n, param_o) {
  const var_i_1 = param_e_1.finishNode({
  type: "TemplateElement",
  value: {
  cooked: param_t,
  raw: param_r
  }
  ,
  tail: param_o
  }
  , param_n);
  const var_a_1 = param_o ? 1 : 2;
  const {
  ranges: var_s
  }
  = param_e_1.options;
  if (var_s) {
  if (var_s.start) {
  var_i_1.start += 1;
  }
  if (var_s.end) {
  var_i_1.end -= var_a_1;
  }
  if (var_s.range) {
  var_i_1.range[0] += 1;
  var_i_1.range[1] -= var_a_1;
  }
  }
  if (param_e_1.options.loc) {
  var_i_1.loc.start.column += 1;
  var_i_1.loc.end.column -= var_a_1;
  }
  return var_i_1;
  }
  function at(param_e_1, param_t, param_r) {
  const var_n = param_e_1.tokenStart;
  var_Z(param_e_1, (param_t = (param_t | 131072) ^ 131072) | 32, 14);
  const var_o_1 = Ue(param_e_1, param_t, param_r, 1, 0, param_e_1.tokenStart);
  param_e_1.assignable = 1;
  return param_e_1.finishNode({
  type: "SpreadElement",
  argument: var_o_1
  }
  , var_n);
  }
  function st(param_e_1, param_t, param_r, param_n) {
  var_Y(param_e_1, param_t | 32);
  const list_o_1 = [];
  if (param_e_1.getToken() === 16) {
  var_Y(param_e_1, param_t | 64);
  return list_o_1;
  }
  while (param_e_1.getToken() !== 16 && (param_e_1.getToken() === 14 ?
  list_o_1.push(at(param_e_1, param_t, param_r)) : list_o_1.push(Ue(param_e_1, param_t,
  param_r, 1, param_n, param_e_1.tokenStart)), param_e_1.getToken() === 18) &&
  (var_Y(param_e_1, param_t | 32), param_e_1.getToken() !== 16));
  var_Z(param_e_1, param_t | 64, 16);
  return list_o_1;
  }
  function ct(param_e_1, param_t) {
  const {
  tokenValue: var_r,
  tokenStart: var_n
  }
  = param_e_1;
  const var_o_1 = var_r === "await" && !(param_e_1.getToken() & -2147483648);
  var_Y(param_e_1, param_t | (var_o_1 ? 32 : 0));
  return param_e_1.finishNode({
  type: "Identifier",
  name: var_r
  }
  , var_n);
  }
  function ut(param_e_1, param_t) {
  const {
  tokenValue: var_r,
  tokenRaw: var_n,
  tokenStart: var_o_1
  }
  = param_e_1;
  if (param_e_1.getToken() === 134283389) {
  return rt(param_e_1, param_t);
  }
  const obj_i = {
  type: "Literal",
  value: var_r
  };
  if (param_e_1.options.raw) {
  obj_i.raw = var_n;
  }
  var_Y(param_e_1, param_t);
  param_e_1.assignable = 2;
  return param_e_1.finishNode(obj_i, var_o_1);
  }
  function lt(param_e_1, param_t, param_r, param_n, param_o, param_i, param_a, param_s,
  param_c = 0) {
  var var_u_1;
  var var_l_1;
  var_Y(param_e_1, param_t | 32);
  const var_d_1 = param_o ? var_K(param_e_1, param_t, 8391476) :
  0;
  let var_p_1;
  let var_f_1 = null;
  let var_h_1 = param_r ? param_e_1.createScope() : undefined;
  if (param_e_1.getToken() === 67174411) {
  if (!(param_i & 1)) {
  param_e_1.report(39, "Function");
  }
  }
  else {
  var var_m_1;
  const var_n = !(param_c & 4) || param_t & 8 && param_t & 2 ?
  (param_a ? 1024 : 0) | 64 | (var_d_1 ? 1024 : 0) : 4;
  te(param_e_1, param_t, param_e_1.getToken());
  if (param_r) {
  param_r.addVarOrBlock(param_t, param_e_1.tokenValue, var_n, param_e_1.tokenStart,
  param_e_1.currentLocation, param_c);
  var_h_1 = (var_m_1 = var_h_1) === null || var_m_1 === undefined ?
  undefined : var_m_1.createChildScope(128);
  if (param_i && param_i & 2) {
  param_e_1.declareUnboundVariable(param_e_1.tokenValue);
  }
  }
  var_p_1 = param_e_1.getToken();
  if (param_e_1.getToken() & 143360) {
  var_f_1 = ct(param_e_1, param_t);
  }
  else {
  param_e_1.report(30, list_T[param_e_1.getToken() & 255]);
  }
  }
  {
  const num_e = 28416;
  param_t = (param_t | num_e) ^ num_e | 65536 | (param_a ? 2048 :
  0) | (var_d_1 ? 1024 : 0) | (var_d_1 ? 0 : 262144);
  }
  var_h_1 = (var_u_1 = var_h_1) === null || var_u_1 === undefined ?
  undefined : var_u_1.createChildScope(256);
  const var_g_1 = Et(param_e_1, param_t & -524289 | 8192, var_h_1, param_n, 0, 1);
  const num_v = 524428;
  const var_y = ze(param_e_1, (param_t | num_v) ^ num_v | 36864, (var_l_1 = var_h_1) === null ||
  var_l_1 === undefined ? undefined : var_l_1.createChildScope(64), param_n, var_p_1,
  var_h_1, 8);
  return param_e_1.finishNode({
  type: "FunctionDeclaration",
  id: var_f_1,
  params: var_g_1,
  body: var_y,
  async: param_a === 1,
  generator: var_d_1 === 1
  }
  , param_s);
  }
  function dt(param_e_1, param_t, param_r, param_n, param_o, param_i) {
  var var_a_1;
  var var_s;
  var var_c;
  var_Y(param_e_1, param_t | 32);
  const var_u_1 = var_K(param_e_1, param_t, 8391476);
  const var_l_1 = (param_n ? 2048 : 0) | (var_u_1 ? 1024 : 0);
  let var_d_1;
  let var_p_1 = null;
  let var_f_1 = param_e_1.createScopeIfLexical();
  const num_h = 552704;
  if (param_e_1.getToken() & 143360) {
  te(param_e_1, (param_t | num_h) ^ num_h | var_l_1, param_e_1.getToken());
  var_f_1 = (var_a_1 = var_f_1) === null || var_a_1 === undefined ?
  undefined : var_a_1.createChildScope(128);
  var_d_1 = param_e_1.getToken();
  var_p_1 = ct(param_e_1, param_t);
  }
  param_t = (param_t | num_h) ^ num_h | 65536 | var_l_1 | (var_u_1 ?
  0 : 262144);
  var_f_1 = (var_s = var_f_1) === null || var_s === undefined ?
  undefined : var_s.createChildScope(256);
  const var_m_1 = Et(param_e_1, param_t & -524289 | 8192, var_f_1, param_r, param_o,
  1);
  const var_g_1 = ze(param_e_1, param_t & -131229 | 36864, (var_c = var_f_1) === null ||
  var_c === undefined ? undefined : var_c.createChildScope(64), param_r, var_d_1,
  var_f_1);
  param_e_1.assignable = 2;
  return param_e_1.finishNode({
  type: "FunctionExpression",
  id: var_p_1,
  params: var_m_1,
  body: var_g_1,
  async: param_n === 1,
  generator: var_u_1 === 1
  }
  , param_i);
  }
  function pt(param_e_1, param_t, param_r, param_n, param_o, param_i, param_a, param_s,
  param_c = 0) {
  const {
  tokenStart: var_u_1
  }
  = param_e_1;
  var_Y(param_e_1, param_t | 32);
  const list_l = [];
  let num_d = 0;
  for (param_t = (param_t | 131072) ^ 131072;
  param_e_1.getToken() !== 20;
  ) {
  if (var_X(param_e_1, param_t | 32, 18)) {
  list_l.push(null);
  }
  else {
  let var_o_1;
  const {
  tokenStart: var_u_2,
  tokenValue: var_p_2,
  currentLocation: var_f_1
  }
  = param_e_1;
  const var_h_1 = param_e_1.getToken();
  if (var_h_1 & 143360) {
  var_o_1 = $e(param_e_1, param_t, param_n, param_s, 0, 1, param_i, 1, var_u_2);
  if (param_e_1.getToken() === 1077936155) {
  if (param_e_1.assignable & 2) {
  param_e_1.report(26);
  }
  var_Y(param_e_1, param_t | 32);
  if (param_r != null) {
  param_r.addVarOrBlock(param_t, var_p_2, param_s, var_u_2, var_f_1, param_c);
  }
  const var_l_1 = Ue(param_e_1, param_t, param_n, 1, param_i, param_e_1.tokenStart);
  var_o_1 = param_e_1.finishNode(param_a ? {
  type: "AssignmentPattern",
  left: var_o_1,
  right: var_l_1
  }
  : {
  type: "AssignmentExpression",
  operator: "=",
  left: var_o_1,
  right: var_l_1
  }
  , var_u_2);
  num_d |= (param_e_1.destructible & 256 ? 256 : 0) | (param_e_1.destructible & 128 ?
  128 : 0);
  }
  else if (param_e_1.getToken() === 18 || param_e_1.getToken() === 20) {
  if (param_e_1.assignable & 2) {
  num_d |= 16;
  }
  else if (param_r != null) {
  param_r.addVarOrBlock(param_t, var_p_2, param_s, var_u_2, var_f_1, param_c);
  }
  num_d |= (param_e_1.destructible & 256 ? 256 : 0) | (param_e_1.destructible & 128 ?
  128 : 0);
  }
  else {
  num_d |= param_s & 1 ? 32 : param_s & 2 ? 0 : 16;
  var_o_1 = Ge(param_e_1, param_t, param_n, var_o_1, param_i, 0, var_u_2);
  if (param_e_1.getToken() !== 18 && param_e_1.getToken() !== 20) {
  if (param_e_1.getToken() !== 1077936155) {
  num_d |= 16;
  }
  var_o_1 = qe(param_e_1, param_t, param_n, param_i, param_a, var_u_2, var_o_1);
  }
  else if (param_e_1.getToken() !== 1077936155) {
  num_d |= param_e_1.assignable & 1 ? 32 : 16;
  }
  }
  }
  else if (var_h_1 & 2097152) {
  var_o_1 = param_e_1.getToken() === 2162700 ? gt(param_e_1, param_t, param_r, param_n,
  0, param_i, param_a, param_s, param_c) : pt(param_e_1, param_t, param_r, param_n,
  0, param_i, param_a, param_s, param_c);
  num_d |= param_e_1.destructible;
  param_e_1.assignable = param_e_1.destructible & 16 ? 2 : 1;
  if (param_e_1.getToken() === 18 || param_e_1.getToken() === 20) {
  if (param_e_1.assignable & 2) {
  num_d |= 16;
  }
  }
  else if (param_e_1.destructible & 8) {
  param_e_1.report(71);
  }
  else {
  var_o_1 = Ge(param_e_1, param_t, param_n, var_o_1, param_i, 0, var_u_2);
  num_d = param_e_1.assignable & 2 ? 16 : 0;
  if (param_e_1.getToken() !== 18 && param_e_1.getToken() !== 20) {
  var_o_1 = qe(param_e_1, param_t, param_n, param_i, param_a, var_u_2, var_o_1);
  }
  else if (param_e_1.getToken() !== 1077936155) {
  num_d |= param_e_1.assignable & 1 ? 32 : 16;
  }
  }
  }
  else if (var_h_1 === 14) {
  var_o_1 = ht(param_e_1, param_t, param_r, param_n, 20, param_s, 0, param_i, param_a,
  param_c);
  num_d |= param_e_1.destructible;
  if (param_e_1.getToken() !== 18 && param_e_1.getToken() !== 20) {
  param_e_1.report(30, list_T[param_e_1.getToken() & 255]);
  }
  }
  else {
  var_o_1 = Ye(param_e_1, param_t, param_n, 1, 0, 1);
  if (param_e_1.getToken() !== 18 && param_e_1.getToken() !== 20) {
  var_o_1 = qe(param_e_1, param_t, param_n, param_i, param_a, var_u_2, var_o_1);
  if (!(param_s & 3) && var_h_1 === 67174411) {
  num_d |= 16;
  }
  }
  else if (param_e_1.assignable & 2) {
  num_d |= 16;
  }
  else if (var_h_1 === 67174411) {
  num_d |= param_e_1.assignable & 1 && param_s & 3 ? 32 : 16;
  }
  }
  list_l.push(var_o_1);
  if (!var_X(param_e_1, param_t | 32, 18)) {
  break;
  }
  if (param_e_1.getToken() === 20) {
  break;
  }
  }
  }
  var_Z(param_e_1, param_t, 20);
  const var_p_1 = param_e_1.finishNode({
  type: param_a ? "ArrayPattern" : "ArrayExpression",
  elements: list_l
  }
  , var_u_1);
  if (!param_o && param_e_1.getToken() & 4194304) {
  return ft(param_e_1, param_t, param_n, num_d, param_i, param_a, var_u_1, var_p_1);
  }
  else {
  param_e_1.destructible = num_d;
  return var_p_1;
  }
  }
  function ft(param_e_1, param_t, param_r, param_n, param_o, param_i, param_a, param_s) {
  if (param_e_1.getToken() !== 1077936155) {
  param_e_1.report(26);
  }
  var_Y(param_e_1, param_t | 32);
  if (param_n & 16) {
  param_e_1.report(26);
  }
  if (!param_i) {
  var_J(param_e_1, param_s);
  }
  const {
  tokenStart: var_c
  }
  = param_e_1;
  const var_u_1 = Ue(param_e_1, param_t, param_r, 1, param_o, var_c);
  param_e_1.destructible = (param_n | 72) ^ 72 | (param_e_1.destructible & 128 ?
  128 : 0) | (param_e_1.destructible & 256 ? 256 : 0);
  return param_e_1.finishNode(param_i ? {
  type: "AssignmentPattern",
  left: param_s,
  right: var_u_1
  }
  : {
  type: "AssignmentExpression",
  left: param_s,
  operator: "=",
  right: var_u_1
  }
  , param_a);
  }
  function ht(param_e_1, param_t, param_r, param_n, param_o, param_i, param_a, param_s,
  param_c, param_u = 0) {
  const {
  tokenStart: var_l_1
  }
  = param_e_1;
  var_Y(param_e_1, param_t | 32);
  let var_d_1 = null;
  let num_p = 0;
  const {
  tokenValue: var_f_1,
  tokenStart: var_h_1,
  currentLocation: var_m_1
  }
  = param_e_1;
  let var_g_1 = param_e_1.getToken();
  if (var_g_1 & 143360) {
  param_e_1.assignable = 1;
  var_d_1 = $e(param_e_1, param_t, param_n, param_i, 0, 1, param_s, 1, var_h_1);
  var_g_1 = param_e_1.getToken();
  var_d_1 = Ge(param_e_1, param_t, param_n, var_d_1, param_s, 0, var_h_1);
  if (param_e_1.getToken() !== 18 && param_e_1.getToken() !== param_o) {
  if (param_e_1.assignable & 2 && param_e_1.getToken() === 1077936155) {
  param_e_1.report(71);
  }
  num_p |= 16;
  var_d_1 = qe(param_e_1, param_t, param_n, param_s, param_c, var_h_1, var_d_1);
  }
  if (param_e_1.assignable & 2) {
  num_p |= 16;
  }
  else if (var_g_1 === param_o || var_g_1 === 18) {
  if (param_r != null) {
  param_r.addVarOrBlock(param_t, var_f_1, param_i, var_h_1, var_m_1, param_u);
  }
  }
  else {
  num_p |= 32;
  }
  num_p |= param_e_1.destructible & 128 ? 128 : 0;
  }
  else if (var_g_1 === param_o) {
  param_e_1.report(41);
  }
  else {
  if (!(var_g_1 & 2097152)) {
  num_p |= 32;
  var_d_1 = Ye(param_e_1, param_t, param_n, 1, param_s, 1);
  const {
  tokenStart: var_r
  }
  = param_e_1;
  const var_i_1 = param_e_1.getToken();
  if (var_i_1 === 1077936155) {
  if (param_e_1.assignable & 2) {
  param_e_1.report(26);
  }
  var_d_1 = qe(param_e_1, param_t, param_n, param_s, param_c, var_r, var_d_1);
  num_p |= 16;
  }
  else {
  if (var_i_1 === 18) {
  num_p |= 16;
  }
  else if (var_i_1 !== param_o) {
  var_d_1 = qe(param_e_1, param_t, param_n, param_s, param_c, var_r, var_d_1);
  }
  num_p |= param_e_1.assignable & 1 ? 32 : 16;
  }
  param_e_1.destructible = num_p;
  if (param_e_1.getToken() !== param_o && param_e_1.getToken() !== 18) {
  param_e_1.report(163);
  }
  return param_e_1.finishNode({
  type: param_c ? "RestElement" : "SpreadElement",
  argument: var_d_1
  }
  , var_l_1);
  }
  var_d_1 = param_e_1.getToken() === 2162700 ? gt(param_e_1, param_t, param_r, param_n,
  1, param_s, param_c, param_i, param_u) : pt(param_e_1, param_t, param_r, param_n,
  1, param_s, param_c, param_i, param_u);
  var_g_1 = param_e_1.getToken();
  if (var_g_1 !== 1077936155 && var_g_1 !== param_o && var_g_1 !== 18) {
  if (param_e_1.destructible & 8) {
  param_e_1.report(71);
  }
  var_d_1 = Ge(param_e_1, param_t, param_n, var_d_1, param_s, 0, var_h_1);
  num_p |= param_e_1.assignable & 1 ? 0 : 16;
  if (~param_e_1.getToken() & 4194304) {
  if (!(~param_e_1.getToken() & 8388608)) {
  var_d_1 = We(param_e_1, param_t, param_n, 1, var_h_1, 4, var_g_1, var_d_1);
  }
  if (var_X(param_e_1, param_t | 32, 22)) {
  var_d_1 = Ve(param_e_1, param_t, param_n, var_d_1, var_h_1);
  }
  num_p |= param_e_1.assignable & 1 ? 32 : 16;
  }
  else {
  if (param_e_1.getToken() !== 1077936155) {
  num_p |= 16;
  }
  var_d_1 = qe(param_e_1, param_t, param_n, param_s, param_c, var_h_1, var_d_1);
  }
  }
  else {
  num_p |= param_o === 1074790415 && var_g_1 !== 1077936155 ?
  16 : param_e_1.destructible;
  }
  }
  if (param_e_1.getToken() !== param_o) {
  if (param_i & 1) {
  num_p |= param_a ? 16 : 32;
  }
  if (var_X(param_e_1, param_t | 32, 1077936155)) {
  if (num_p & 16) {
  param_e_1.report(26);
  }
  var_J(param_e_1, var_d_1);
  const var_r = Ue(param_e_1, param_t, param_n, 1, param_s, param_e_1.tokenStart);
  var_d_1 = param_e_1.finishNode(param_c ? {
  type: "AssignmentPattern",
  left: var_d_1,
  right: var_r
  }
  : {
  type: "AssignmentExpression",
  left: var_d_1,
  operator: "=",
  right: var_r
  }
  , var_h_1);
  num_p = 16;
  }
  else {
  num_p |= 16;
  }
  }
  param_e_1.destructible = num_p;
  return param_e_1.finishNode({
  type: param_c ? "RestElement" : "SpreadElement",
  argument: var_d_1
  }
  , var_l_1);
  }
  function mt(param_e_1, param_t, param_r, param_n, param_o, param_i) {
  var var_a_1;
  const var_c = (param_n & 64 ? 0 : 16896) | 11264;
  param_t = (param_t | var_c) ^ var_c | (param_n & 8 ? 1024 :
  0) | (param_n & 16 ? 2048 : 0) | (param_n & 64 ? 16384 : 0) | 98560;
  let var_u_1 = param_e_1.createScopeIfLexical(256);
  const var_l_1 = function (param_e_2, param_t_1, param_r_1, param_n_1, param_o_1,
  param_i_1, param_a) {
  var_Z(param_e_2, param_t_1, 67174411);
  const list_s_1 = [];
  param_e_2.flags = (param_e_2.flags | 128) ^ 128;
  param_e_2.strictReservedRange = null;
  param_e_2.firstAwaitLocation = null;
  if (param_e_2.getToken() === 16) {
  if (param_o_1 & 512) {
  param_e_2.report(37, "Setter", "one", "");
  }
  var_Y(param_e_2, param_t_1);
  return list_s_1;
  }
  if (param_o_1 & 256) {
  param_e_2.report(37, "Getter", "no", "s");
  }
  if (param_o_1 & 512 && param_e_2.getToken() === 14) {
  param_e_2.report(38);
  }
  param_t_1 = (param_t_1 | 131072) ^ 131072;
  let num_c = 0;
  let num_u = 0;
  while (param_e_2.getToken() !== 18) {
  var var_l_2;
  let var_i_1 = null;
  const {
  tokenStart: var_d_2
  }
  = param_e_2;
  if (param_e_2.getToken() & 143360) {
  if (!(param_t_1 & 1)) {
  if (!(~param_e_2.getToken() & 36864)) {
  param_e_2.flags |= 256;
  if ((var_l_2 = param_e_2.strictReservedRange) === null || var_l_2 === undefined) {
  param_e_2.strictReservedRange = [var_d_2, param_e_2.currentLocation];
  }
  }
  if (!(~param_e_2.getToken() & 537079808)) {
  param_e_2.flags |= 512;
  }
  }
  var_i_1 = Rt(param_e_2, param_t_1, param_r_1, param_o_1 | 1);
  }
  else {
  if (param_e_2.getToken() === 2162700) {
  var_i_1 = gt(param_e_2, param_t_1, param_r_1, param_n_1, 1, param_a, 1, 1);
  }
  else if (param_e_2.getToken() === 69271571) {
  var_i_1 = pt(param_e_2, param_t_1, param_r_1, param_n_1, 1, param_a, 1, 1);
  }
  else if (param_e_2.getToken() === 14) {
  var_i_1 = ht(param_e_2, param_t_1, param_r_1, param_n_1, 16, 1, 0, param_a, 1);
  }
  num_u = 1;
  if (param_e_2.destructible & 48) {
  param_e_2.report(50);
  }
  }
  if (param_e_2.getToken() === 1077936155) {
  var_Y(param_e_2, param_t_1 | 32);
  num_u = 1;
  const var_r = Ue(param_e_2, param_t_1, param_n_1, 1, 0, param_e_2.tokenStart);
  var_i_1 = param_e_2.finishNode({
  type: "AssignmentPattern",
  left: var_i_1,
  right: var_r
  }
  , var_d_2);
  }
  num_c++;
  list_s_1.push(var_i_1);
  if (!var_X(param_e_2, param_t_1, 18)) {
  break;
  }
  if (param_e_2.getToken() === 16) {
  break;
  }
  }
  if (param_o_1 & 512 && num_c !== 1) {
  param_e_2.report(37, "Setter", "one", "");
  }
  if (param_r_1 != null) {
  param_r_1.reportScopeError();
  }
  if (num_u) {
  param_e_2.flags |= 128;
  }
  var_Z(param_e_2, param_t_1, 16);
  return list_s_1;
  }
  (param_e_1, param_t & -524289 | 8192, var_u_1, param_r, param_n, 0, param_o);
  var_u_1 = (var_a_1 = var_u_1) === null || var_a_1 === undefined ?
  undefined : var_a_1.createChildScope(64);
  const var_d_1 = ze(param_e_1, param_t & -655373 | 36864, var_u_1, param_r, undefined,
  var_u_1?.parent);
  return param_e_1.finishNode({
  type: "FunctionExpression",
  params: var_l_1,
  body: var_d_1,
  async: (param_n & 16) > 0,
  generator: (param_n & 8) > 0,
  id: null
  }
  , param_i);
  }
  function gt(param_e_1, param_t, param_r, param_n, param_o, param_i, param_a, param_s,
  param_c = 0) {
  const {
  tokenStart: var_u_1
  }
  = param_e_1;
  var_Y(param_e_1, param_t);
  const list_l = [];
  let num_d = 0;
  let num_p = 0;
  for (param_t = (param_t | 131072) ^ 131072;
  param_e_1.getToken() !== 1074790415;
  ) {
  const {
  tokenValue: var_o_1,
  tokenStart: var_u_2,
  currentLocation: var_f_2
  }
  = param_e_1;
  const var_h_1 = param_e_1.getToken();
  if (var_h_1 === 14) {
  list_l.push(ht(param_e_1, param_t, param_r, param_n, 1074790415, param_s, 0, param_i,
  param_a, param_c));
  }
  else {
  let var_m_1;
  let num_g = 0;
  let var_v_1 = null;
  if (param_e_1.getToken() & 143360 || param_e_1.getToken() === -2147483527 ||
  param_e_1.getToken() === -2147483526) {
  if (param_e_1.getToken() === -2147483526) {
  num_d |= 16;
  }
  var_v_1 = ct(param_e_1, param_t);
  if (param_e_1.getToken() === 18 || param_e_1.getToken() === 1074790415 ||
  param_e_1.getToken() === 1077936155) {
  num_g |= 4;
  if (param_t & 1 && !(~var_h_1 & 537079808)) {
  num_d |= 16;
  }
  else {
  ee(param_e_1, param_t, param_s, var_h_1, 0);
  }
  if (param_r != null) {
  param_r.addVarOrBlock(param_t, var_o_1, param_s, var_u_2, var_f_2, param_c);
  }
  if (var_X(param_e_1, param_t | 32, 1077936155)) {
  num_d |= 8;
  const var_r = Ue(param_e_1, param_t, param_n, 1, param_i, param_e_1.tokenStart);
  num_d |= (param_e_1.destructible & 256 ? 256 : 0) | (param_e_1.destructible & 128 ?
  128 : 0);
  var_m_1 = param_e_1.finishNode({
  type: "AssignmentPattern",
  left: param_e_1.cloneIdentifier(var_v_1),
  right: var_r
  }
  , var_u_2);
  }
  else {
  num_d |= (var_h_1 === 209006 ? 128 : 0) | (var_h_1 === -2147483527 ?
  16 : 0);
  var_m_1 = param_e_1.cloneIdentifier(var_v_1);
  }
  }
  else if (var_X(param_e_1, param_t | 32, 21)) {
  const {
  tokenStart: var_u_3,
  currentLocation: var_l_1
  }
  = param_e_1;
  if (var_o_1 === "__proto__") {
  num_p++;
  }
  if (param_e_1.getToken() & 143360) {
  const var_o_2 = param_e_1.getToken();
  const var_p_1 = param_e_1.tokenValue;
  var_m_1 = $e(param_e_1, param_t, param_n, param_s, 0, 1, param_i, 1, var_u_3);
  const var_f_3 = param_e_1.getToken();
  var_m_1 = Ge(param_e_1, param_t, param_n, var_m_1, param_i, 0, var_u_3);
  if (param_e_1.getToken() === 18 || param_e_1.getToken() === 1074790415) {
  if (var_f_3 === 1077936155 || var_f_3 === 1074790415 || var_f_3 === 18) {
  num_d |= param_e_1.destructible & 128 ? 128 : 0;
  if (param_e_1.assignable & 2) {
  num_d |= 16;
  }
  else if (!(~var_o_2 & 143360) && param_r != null) {
  param_r.addVarOrBlock(param_t, var_p_1, param_s, var_u_3, var_l_1, param_c);
  }
  }
  else {
  num_d |= param_e_1.assignable & 1 ? 32 : 16;
  }
  }
  else if (~param_e_1.getToken() & 4194304) {
  num_d |= 16;
  if (!(~param_e_1.getToken() & 8388608)) {
  var_m_1 = We(param_e_1, param_t, param_n, 1, var_u_3, 4, var_f_3, var_m_1);
  }
  if (var_X(param_e_1, param_t | 32, 22)) {
  var_m_1 = Ve(param_e_1, param_t, param_n, var_m_1, var_u_3);
  }
  }
  else {
  if (param_e_1.assignable & 2) {
  num_d |= 16;
  }
  else if (var_f_3 !== 1077936155) {
  num_d |= 32;
  }
  else if (param_r != null) {
  param_r.addVarOrBlock(param_t, var_p_1, param_s, var_u_3, var_l_1, param_c);
  }
  var_m_1 = qe(param_e_1, param_t, param_n, param_i, param_a, var_u_3, var_m_1);
  }
  }
  else if (~param_e_1.getToken() & 2097152) {
  var_m_1 = Ye(param_e_1, param_t, param_n, 1, param_i, 1);
  num_d |= param_e_1.assignable & 1 ? 32 : 16;
  if (param_e_1.getToken() === 18 || param_e_1.getToken() === 1074790415) {
  if (param_e_1.assignable & 2) {
  num_d |= 16;
  }
  }
  else {
  var_m_1 = Ge(param_e_1, param_t, param_n, var_m_1, param_i, 0, var_u_3);
  num_d = param_e_1.assignable & 2 ? 16 : 0;
  if (param_e_1.getToken() !== 18 && var_h_1 !== 1074790415) {
  if (param_e_1.getToken() !== 1077936155) {
  num_d |= 16;
  }
  var_m_1 = qe(param_e_1, param_t, param_n, param_i, param_a, var_u_3, var_m_1);
  }
  }
  }
  else {
  var_m_1 = param_e_1.getToken() === 69271571 ? pt(param_e_1, param_t, param_r, param_n,
  0, param_i, param_a, param_s, param_c) : gt(param_e_1, param_t, param_r, param_n,
  0, param_i, param_a, param_s, param_c);
  num_d = param_e_1.destructible;
  param_e_1.assignable = num_d & 16 ? 2 : 1;
  if (param_e_1.getToken() === 18 || param_e_1.getToken() === 1074790415) {
  if (param_e_1.assignable & 2) {
  num_d |= 16;
  }
  }
  else if (param_e_1.destructible & 8) {
  param_e_1.report(71);
  }
  else {
  var_m_1 = Ge(param_e_1, param_t, param_n, var_m_1, param_i, 0, var_u_3);
  num_d = param_e_1.assignable & 2 ? 16 : 0;
  if (~param_e_1.getToken() & 4194304) {
  if (!(~param_e_1.getToken() & 8388608)) {
  var_m_1 = We(param_e_1, param_t, param_n, 1, var_u_3, 4, var_h_1, var_m_1);
  }
  if (var_X(param_e_1, param_t | 32, 22)) {
  var_m_1 = Ve(param_e_1, param_t, param_n, var_m_1, var_u_3);
  }
  num_d |= param_e_1.assignable & 1 ? 32 : 16;
  }
  else {
  var_m_1 = He(param_e_1, param_t, param_n, param_i, param_a, var_u_3, var_m_1);
  }
  }
  }
  }
  else if (param_e_1.getToken() === 69271571) {
  num_d |= 16;
  if (var_h_1 === 209005) {
  num_g |= 16;
  }
  num_g |= (var_h_1 === 209008 ? 256 : var_h_1 === 209009 ? 512 :
  1) | 2;
  var_v_1 = vt(param_e_1, param_t, param_n, param_i);
  num_d |= param_e_1.assignable;
  var_m_1 = mt(param_e_1, param_t, param_n, num_g, param_i, param_e_1.tokenStart);
  }
  else if (param_e_1.getToken() & 143360) {
  num_d |= 16;
  if (var_h_1 === -2147483527) {
  param_e_1.report(95);
  }
  if (var_h_1 === 209005) {
  if (param_e_1.flags & 1) {
  param_e_1.report(134);
  }
  num_g |= 17;
  }
  else if (var_h_1 === 209008) {
  num_g |= 256;
  }
  else if (var_h_1 === 209009) {
  num_g |= 512;
  }
  else {
  param_e_1.report(0);
  }
  var_v_1 = ct(param_e_1, param_t);
  var_m_1 = mt(param_e_1, param_t, param_n, num_g, param_i, param_e_1.tokenStart);
  }
  else if (param_e_1.getToken() === 67174411) {
  num_d |= 16;
  num_g |= 1;
  var_m_1 = mt(param_e_1, param_t, param_n, num_g, param_i, param_e_1.tokenStart);
  }
  else if (param_e_1.getToken() === 8391476) {
  num_d |= 16;
  if (var_h_1 === 209008) {
  param_e_1.report(42);
  }
  else if (var_h_1 === 209009) {
  param_e_1.report(43);
  }
  else if (var_h_1 !== 209005) {
  param_e_1.report(30, list_T[52]);
  }
  var_Y(param_e_1, param_t);
  num_g |= (var_h_1 === 209005 ? 16 : 0) | 9;
  if (param_e_1.getToken() & 143360) {
  var_v_1 = ct(param_e_1, param_t);
  }
  else if (~param_e_1.getToken() & 134217728) {
  if (param_e_1.getToken() === 69271571) {
  num_g |= 2;
  var_v_1 = vt(param_e_1, param_t, param_n, param_i);
  num_d |= param_e_1.assignable;
  }
  else {
  param_e_1.report(30, list_T[param_e_1.getToken() & 255]);
  }
  }
  else {
  var_v_1 = ut(param_e_1, param_t);
  }
  var_m_1 = mt(param_e_1, param_t, param_n, num_g, param_i, param_e_1.tokenStart);
  }
  else if (~param_e_1.getToken() & 134217728) {
  param_e_1.report(135);
  }
  else {
  if (var_h_1 === 209005) {
  num_g |= 16;
  }
  num_g |= var_h_1 === 209008 ? 256 : var_h_1 === 209009 ? 512 :
  1;
  num_d |= 16;
  var_v_1 = ut(param_e_1, param_t);
  var_m_1 = mt(param_e_1, param_t, param_n, num_g, param_i, param_e_1.tokenStart);
  }
  }
  else if (~param_e_1.getToken() & 134217728) {
  if (param_e_1.getToken() === 69271571) {
  var_v_1 = vt(param_e_1, param_t, param_n, param_i);
  num_d |= param_e_1.destructible & 256 ? 256 : 0;
  num_g |= 2;
  if (param_e_1.getToken() === 21) {
  var_Y(param_e_1, param_t | 32);
  const {
  tokenStart: var_o_2,
  tokenValue: var_u_3,
  currentLocation: var_l_1
  }
  = param_e_1;
  const var_p_1 = param_e_1.getToken();
  if (param_e_1.getToken() & 143360) {
  var_m_1 = $e(param_e_1, param_t, param_n, param_s, 0, 1, param_i, 1, var_o_2);
  const var_f_3 = param_e_1.getToken();
  var_m_1 = Ge(param_e_1, param_t, param_n, var_m_1, param_i, 0, var_o_2);
  if (~param_e_1.getToken() & 4194304) {
  if (param_e_1.getToken() === 18 || param_e_1.getToken() === 1074790415) {
  if (var_f_3 === 1077936155 || var_f_3 === 1074790415 || var_f_3 === 18) {
  if (param_e_1.assignable & 2) {
  num_d |= 16;
  }
  else if (!(~var_p_1 & 143360) && param_r != null) {
  param_r.addVarOrBlock(param_t, var_u_3, param_s, var_o_2, var_l_1, param_c);
  }
  }
  else {
  num_d |= param_e_1.assignable & 1 ? 32 : 16;
  }
  }
  else {
  num_d |= 16;
  var_m_1 = qe(param_e_1, param_t, param_n, param_i, param_a, var_o_2, var_m_1);
  }
  }
  else {
  num_d |= param_e_1.assignable & 1 ? var_f_3 === 1077936155 ?
  0 : 32 : 16;
  var_m_1 = He(param_e_1, param_t, param_n, param_i, param_a, var_o_2, var_m_1);
  }
  }
  else if (~param_e_1.getToken() & 2097152) {
  var_m_1 = Ye(param_e_1, param_t, param_n, 1, 0, 1);
  num_d |= param_e_1.assignable & 1 ? 32 : 16;
  if (param_e_1.getToken() === 18 || param_e_1.getToken() === 1074790415) {
  if (param_e_1.assignable & 2) {
  num_d |= 16;
  }
  }
  else {
  var_m_1 = Ge(param_e_1, param_t, param_n, var_m_1, param_i, 0, var_o_2);
  num_d = param_e_1.assignable & 1 ? 0 : 16;
  if (param_e_1.getToken() !== 18 && param_e_1.getToken() !== 1074790415) {
  if (param_e_1.getToken() !== 1077936155) {
  num_d |= 16;
  }
  var_m_1 = qe(param_e_1, param_t, param_n, param_i, param_a, var_o_2, var_m_1);
  }
  }
  }
  else {
  var_m_1 = param_e_1.getToken() === 69271571 ? pt(param_e_1, param_t, param_r, param_n,
  0, param_i, param_a, param_s, param_c) : gt(param_e_1, param_t, param_r, param_n,
  0, param_i, param_a, param_s, param_c);
  num_d = param_e_1.destructible;
  param_e_1.assignable = num_d & 16 ? 2 : 1;
  if (param_e_1.getToken() === 18 || param_e_1.getToken() === 1074790415) {
  if (param_e_1.assignable & 2) {
  num_d |= 16;
  }
  }
  else if (num_d & 8) {
  param_e_1.report(62);
  }
  else {
  var_m_1 = Ge(param_e_1, param_t, param_n, var_m_1, param_i, 0, var_o_2);
  num_d = param_e_1.assignable & 2 ? num_d | 16 : 0;
  if (~param_e_1.getToken() & 4194304) {
  if (!(~param_e_1.getToken() & 8388608)) {
  var_m_1 = We(param_e_1, param_t, param_n, 1, var_o_2, 4, var_h_1, var_m_1);
  }
  if (var_X(param_e_1, param_t | 32, 22)) {
  var_m_1 = Ve(param_e_1, param_t, param_n, var_m_1, var_o_2);
  }
  num_d |= param_e_1.assignable & 1 ? 32 : 16;
  }
  else {
  if (param_e_1.getToken() !== 1077936155) {
  num_d |= 16;
  }
  var_m_1 = He(param_e_1, param_t, param_n, param_i, param_a, var_o_2, var_m_1);
  }
  }
  }
  }
  else if (param_e_1.getToken() === 67174411) {
  num_g |= 1;
  var_m_1 = mt(param_e_1, param_t, param_n, num_g, param_i, param_e_1.tokenStart);
  num_d = 16;
  }
  else {
  param_e_1.report(44);
  }
  }
  else if (var_h_1 === 8391476) {
  var_Z(param_e_1, param_t | 32, 8391476);
  num_g |= 8;
  if (param_e_1.getToken() & 143360) {
  const var_r = param_e_1.getToken();
  var_v_1 = ct(param_e_1, param_t);
  num_g |= 1;
  if (param_e_1.getToken() !== 67174411) {
  throw new var_D(param_e_1.tokenStart, param_e_1.currentLocation, var_r === 209005 ?
  46 : var_r === 209008 || param_e_1.getToken() === 209009 ?
  45 : 47, list_T[var_r & 255]);
  }
  num_d |= 16;
  var_m_1 = mt(param_e_1, param_t, param_n, num_g, param_i, param_e_1.tokenStart);
  }
  else if (~param_e_1.getToken() & 134217728) {
  if (param_e_1.getToken() === 69271571) {
  num_d |= 16;
  num_g |= 3;
  var_v_1 = vt(param_e_1, param_t, param_n, param_i);
  var_m_1 = mt(param_e_1, param_t, param_n, num_g, param_i, param_e_1.tokenStart);
  }
  else {
  param_e_1.report(128);
  }
  }
  else {
  num_d |= 16;
  var_v_1 = ut(param_e_1, param_t);
  num_g |= 1;
  var_m_1 = mt(param_e_1, param_t, param_n, num_g, param_i, param_e_1.tokenStart);
  }
  }
  else {
  param_e_1.report(30, list_T[var_h_1 & 255]);
  }
  }
  else {
  var_v_1 = ut(param_e_1, param_t);
  if (param_e_1.getToken() === 21) {
  var_Z(param_e_1, param_t | 32, 21);
  const {
  tokenStart: var_u_3
  }
  = param_e_1;
  if (var_o_1 === "__proto__") {
  num_p++;
  }
  if (param_e_1.getToken() & 143360) {
  var_m_1 = $e(param_e_1, param_t, param_n, param_s, 0, 1, param_i, 1, var_u_3);
  const {
  tokenValue: var_o_2,
  tokenStart: var_l_1,
  currentLocation: var_p_1
  }
  = param_e_1;
  const var_f_3 = param_e_1.getToken();
  var_m_1 = Ge(param_e_1, param_t, param_n, var_m_1, param_i, 0, var_u_3);
  if (param_e_1.getToken() === 18 || param_e_1.getToken() === 1074790415) {
  if (var_f_3 === 1077936155 || var_f_3 === 1074790415 || var_f_3 === 18) {
  if (param_e_1.assignable & 2) {
  num_d |= 16;
  }
  else if (param_r != null) {
  param_r.addVarOrBlock(param_t, var_o_2, param_s, var_l_1, var_p_1, param_c);
  }
  }
  else {
  num_d |= param_e_1.assignable & 1 ? 32 : 16;
  }
  }
  else if (param_e_1.getToken() === 1077936155) {
  if (param_e_1.assignable & 2) {
  num_d |= 16;
  }
  var_m_1 = qe(param_e_1, param_t, param_n, param_i, param_a, var_u_3, var_m_1);
  }
  else {
  num_d |= 16;
  var_m_1 = qe(param_e_1, param_t, param_n, param_i, param_a, var_u_3, var_m_1);
  }
  }
  else if (~param_e_1.getToken() & 2097152) {
  var_m_1 = Ye(param_e_1, param_t, param_n, 1, 0, 1);
  num_d |= param_e_1.assignable & 1 ? 32 : 16;
  if (param_e_1.getToken() === 18 || param_e_1.getToken() === 1074790415) {
  if (param_e_1.assignable & 2) {
  num_d |= 16;
  }
  }
  else {
  var_m_1 = Ge(param_e_1, param_t, param_n, var_m_1, param_i, 0, var_u_3);
  num_d = param_e_1.assignable & 1 ? 0 : 16;
  if (param_e_1.getToken() !== 18 && param_e_1.getToken() !== 1074790415) {
  if (param_e_1.getToken() !== 1077936155) {
  num_d |= 16;
  }
  var_m_1 = qe(param_e_1, param_t, param_n, param_i, param_a, var_u_3, var_m_1);
  }
  }
  }
  else {
  var_m_1 = param_e_1.getToken() === 69271571 ? pt(param_e_1, param_t, param_r, param_n,
  0, param_i, param_a, param_s, param_c) : gt(param_e_1, param_t, param_r, param_n,
  0, param_i, param_a, param_s, param_c);
  num_d = param_e_1.destructible;
  param_e_1.assignable = num_d & 16 ? 2 : 1;
  if (param_e_1.getToken() === 18 || param_e_1.getToken() === 1074790415) {
  if (param_e_1.assignable & 2) {
  num_d |= 16;
  }
  }
  else if (~param_e_1.destructible & 8) {
  var_m_1 = Ge(param_e_1, param_t, param_n, var_m_1, param_i, 0, var_u_3);
  num_d = param_e_1.assignable & 2 ? 16 : 0;
  if (~param_e_1.getToken() & 4194304) {
  if (!(~param_e_1.getToken() & 8388608)) {
  var_m_1 = We(param_e_1, param_t, param_n, 1, var_u_3, 4, var_h_1, var_m_1);
  }
  if (var_X(param_e_1, param_t | 32, 22)) {
  var_m_1 = Ve(param_e_1, param_t, param_n, var_m_1, var_u_3);
  }
  num_d |= param_e_1.assignable & 1 ? 32 : 16;
  }
  else {
  var_m_1 = He(param_e_1, param_t, param_n, param_i, param_a, var_u_3, var_m_1);
  }
  }
  }
  }
  else if (param_e_1.getToken() === 67174411) {
  num_g |= 1;
  var_m_1 = mt(param_e_1, param_t, param_n, num_g, param_i, param_e_1.tokenStart);
  num_d = 16;
  }
  else {
  param_e_1.report(136);
  }
  }
  num_d |= param_e_1.destructible & 128 ? 128 : 0;
  param_e_1.destructible = num_d;
  list_l.push(param_e_1.finishNode({
  type: "Property",
  key: var_v_1,
  value: var_m_1,
  kind: num_g & 768 ? num_g & 512 ? "set" : "get" : "init",
  computed: (num_g & 2) > 0,
  method: (num_g & 1) > 0,
  shorthand: (num_g & 4) > 0
  }
  , var_u_2));
  }
  num_d |= param_e_1.destructible;
  if (param_e_1.getToken() !== 18) {
  break;
  }
  var_Y(param_e_1, param_t);
  }
  var_Z(param_e_1, param_t, 1074790415);
  if (num_p > 1) {
  num_d |= 64;
  }
  const var_f_1 = param_e_1.finishNode({
  type: param_a ? "ObjectPattern" : "ObjectExpression",
  properties: list_l
  }
  , var_u_1);
  if (!param_o && param_e_1.getToken() & 4194304) {
  return ft(param_e_1, param_t, param_n, num_d, param_i, param_a, var_u_1, var_f_1);
  }
  else {
  param_e_1.destructible = num_d;
  return var_f_1;
  }
  }
  function vt(param_e_1, param_t, param_r, param_n) {
  var_Y(param_e_1, param_t | 32);
  const var_o_1 = Ue(param_e_1, (param_t | 131072) ^ 131072, param_r, 1, param_n,
  param_e_1.tokenStart);
  var_Z(param_e_1, param_t, 20);
  return var_o_1;
  }
  function yt(param_e_1, param_t, param_r) {
  const {
  tokenValue: var_n,
  tokenStart: var_o_1,
  currentLocation: var_i_1
  }
  = param_e_1;
  let num_a = 0;
  let num_s = 0;
  if (~param_e_1.getToken() & 537079808) {
  if (!(~param_e_1.getToken() & 36864)) {
  num_s = 1;
  }
  }
  else {
  num_a = 1;
  }
  const var_c = ct(param_e_1, param_t);
  param_e_1.assignable = 1;
  if (param_e_1.getToken() === 10) {
  const var_u_1 = param_e_1.options.lexical ? he(param_e_1, param_t, var_n, var_o_1,
  var_i_1) : undefined;
  if (num_a) {
  param_e_1.flags |= 128;
  }
  if (num_s) {
  param_e_1.flags |= 256;
  }
  return wt(param_e_1, param_t, var_u_1, param_r, [var_c], 0, var_o_1);
  }
  return var_c;
  }
  function _t(param_e_1, param_t, param_r, param_n, param_o, param_i, param_a, param_s,
  param_c, param_u = 0) {
  if (!param_a) {
  param_e_1.report(57);
  }
  if (param_i) {
  param_e_1.report(51);
  }
  param_e_1.flags &= -129;
  return wt(param_e_1, param_t, param_e_1.options.lexical ? he(param_e_1, param_t,
  param_n, param_c, param_e_1.currentLocation) : undefined, param_r, [param_o], param_s,
  param_c, param_u);
  }
  function bt(param_e_1, param_t, param_r, param_n, param_o, param_i, param_a, param_s,
  param_c = 0) {
  if (!param_i) {
  param_e_1.report(57);
  }
  for (let num_t = 0;
  num_t < param_o.length;
  ++num_t) {
  var_J(param_e_1, param_o[num_t]);
  }
  return wt(param_e_1, param_t, param_r, param_n, param_o, param_a, param_s, param_c);
  }
  function wt(param_e_1, param_t, param_r, param_n, param_o, param_i, param_a, param_s = 0) {
  var var_c;
  if (param_e_1.flags & 1) {
  param_e_1.report(48);
  }
  var_Z(param_e_1, param_t | 32, 10);
  const num_u = 535552;
  param_t = (param_t | num_u) ^ num_u | (param_i ? 2048 : 0);
  const var_l_1 = param_e_1.getToken() !== 2162700;
  let var_d_1;
  if ((var_c = param_r) !== null && var_c !== undefined) {
  var_c.reportScopeError();
  }
  if (var_l_1) {
  param_e_1.flags = (param_e_1.flags | 4928) ^ 4928;
  var_d_1 = Ue(param_e_1, param_t, param_n, 1, 0, param_e_1.tokenStart);
  }
  else {
  var var_p_1;
  const num_o = 131084;
  var_d_1 = ze(param_e_1, (param_t | num_o) ^ num_o | 4096, param_r = (var_p_1 = param_r) === null ||
  var_p_1 === undefined ? undefined : var_p_1.createChildScope(64), param_n, undefined,
  undefined, 16);
  switch (param_e_1.getToken()) {
  case 69271571:
  if (!(param_e_1.flags & 1)) {
  param_e_1.report(118);
  }
  param_e_1.flags |= 8192;
  break;
  case 67108877:
  case 67174409:
  case 22:
  param_e_1.report(119);
  case 67174411:
  if (!(param_e_1.flags & 1)) {
  param_e_1.report(118);
  }
  param_e_1.flags |= 1024;
  }
  if (!(~param_e_1.getToken() & 8388608) && !(param_e_1.flags & 1) &&
  (param_e_1.getToken() !== 8673330 || param_s !== 32)) {
  param_e_1.report(30, list_T[param_e_1.getToken() & 255]);
  }
  if (!(~param_e_1.getToken() & 33619968)) {
  param_e_1.report(127);
  }
  }
  param_e_1.assignable = 2;
  return param_e_1.finishNode({
  type: "ArrowFunctionExpression",
  params: param_o,
  body: var_d_1,
  async: param_i === 1,
  expression: var_l_1,
  generator: false
  }
  , param_a);
  }
  function Et(param_e_1, param_t, param_r, param_n, param_o, param_i) {
  var_Z(param_e_1, param_t, 67174411);
  param_e_1.flags = (param_e_1.flags | 128) ^ 128;
  param_e_1.strictReservedRange = null;
  param_e_1.firstAwaitLocation = null;
  const list_a = [];
  if (var_X(param_e_1, param_t, 16)) {
  return list_a;
  }
  param_t = (param_t | 131072) ^ 131072;
  let num_s = 0;
  while (param_e_1.getToken() !== 18) {
  var var_c;
  let var_u_1;
  const {
  tokenStart: var_l_1
  }
  = param_e_1;
  const var_d_1 = param_e_1.getToken();
  if (var_d_1 & 143360) {
  if (!(param_t & 1)) {
  if (!(~var_d_1 & 36864)) {
  param_e_1.flags |= 256;
  if ((var_c = param_e_1.strictReservedRange) === null || var_c === undefined) {
  param_e_1.strictReservedRange = [var_l_1, param_e_1.currentLocation];
  }
  }
  if (!(~var_d_1 & 537079808)) {
  param_e_1.flags |= 512;
  }
  }
  var_u_1 = Rt(param_e_1, param_t, param_r, param_i | 1);
  }
  else {
  if (var_d_1 === 2162700) {
  var_u_1 = gt(param_e_1, param_t, param_r, param_n, 1, param_o, 1, param_i);
  }
  else if (var_d_1 === 69271571) {
  var_u_1 = pt(param_e_1, param_t, param_r, param_n, 1, param_o, 1, param_i);
  }
  else if (var_d_1 === 14) {
  var_u_1 = ht(param_e_1, param_t, param_r, param_n, 16, param_i, 0, param_o, 1);
  }
  else {
  param_e_1.report(30, list_T[var_d_1 & 255]);
  }
  num_s = 1;
  if (param_e_1.destructible & 48) {
  param_e_1.report(50);
  }
  }
  if (param_e_1.getToken() === 1077936155) {
  var_Y(param_e_1, param_t | 32);
  num_s = 1;
  const var_r = Ue(param_e_1, param_t, param_n, 1, param_o, param_e_1.tokenStart);
  var_u_1 = param_e_1.finishNode({
  type: "AssignmentPattern",
  left: var_u_1,
  right: var_r
  }
  , var_l_1);
  }
  list_a.push(var_u_1);
  if (!var_X(param_e_1, param_t, 18)) {
  break;
  }
  if (param_e_1.getToken() === 16) {
  break;
  }
  }
  if (num_s) {
  param_e_1.flags |= 128;
  }
  if ((num_s || param_t & 1) && param_r != null) {
  param_r.reportScopeError();
  }
  var_Z(param_e_1, param_t, 16);
  return list_a;
  }
  function Dt(param_e_1, param_t, param_r, param_n, param_o) {
  if (param_e_1.getToken() === 209006) {
  param_e_1.report(31);
  }
  if (param_t & 1025 && param_e_1.getToken() === 241771) {
  param_e_1.report(32);
  }
  ae(param_e_1, param_t, param_e_1.getToken());
  if (!(~param_e_1.getToken() & 36864)) {
  param_e_1.flags |= 256;
  }
  return _t(param_e_1, param_t & -524289 | 2048, param_r, param_e_1.tokenValue, ct(
  param_e_1, param_t), 0, param_n, 1, param_o);
  }
  function Tt(param_e_1, param_t, param_r, param_n, param_o, param_i, param_a, param_s) {
  var var_c;
  var_Y(param_e_1, param_t | 32);
  const var_u_1 = (var_c = param_e_1.createScopeIfLexical()) === null ||
  var_c === undefined ? undefined : var_c.createChildScope(512);
  const var_l_1 = param_e_1.firstAwaitLocation;
  param_e_1.firstAwaitLocation = null;
  if (var_X(param_e_1, param_t = (param_t | 131072) ^ 131072, 16)) {
  if (param_e_1.getToken() === 10) {
  if (param_a & 1) {
  param_e_1.report(48);
  }
  return bt(param_e_1, param_t, var_u_1, param_r, [], param_o, 1, param_s);
  }
  else {
  if (param_t & 1 || !param_e_1.options.webcompat) {
  param_e_1.assignable = 2;
  }
  else {
  param_e_1.assignable = 4;
  }
  if (var_l_1) {
  param_e_1.firstAwaitLocation = var_l_1;
  }
  return param_e_1.finishNode({
  type: "CallExpression",
  callee: param_n,
  arguments: [],
  optional: false
  }
  , param_s);
  }
  }
  let var_d_1;
  let num_p = 0;
  let num_f = 0;
  param_e_1.destructible = (param_e_1.destructible | 384) ^ 384;
  const list_h = [];
  while (param_e_1.getToken() !== 16) {
  const {
  tokenStart: var_o_1,
  currentLocation: var_a_1
  }
  = param_e_1;
  const var_c_1 = param_e_1.getToken();
  if (var_c_1 & 143360) {
  if (var_u_1 != null) {
  var_u_1.addBlockName(param_t, param_e_1.tokenValue, param_i, var_o_1, var_a_1);
  }
  if (~var_c_1 & 537079808) {
  if (!(~var_c_1 & 36864)) {
  param_e_1.flags |= 256;
  }
  }
  else {
  param_e_1.flags |= 512;
  }
  var_d_1 = $e(param_e_1, param_t, param_r, param_i, 0, 1, 1, 1, var_o_1);
  if (param_e_1.getToken() === 16 || param_e_1.getToken() === 18) {
  if (param_e_1.assignable & 2) {
  num_p |= 16;
  num_f = 1;
  }
  }
  else {
  if (param_e_1.getToken() === 1077936155) {
  num_f = 1;
  }
  else {
  num_p |= 16;
  }
  var_d_1 = Ge(param_e_1, param_t, param_r, var_d_1, 1, 0, var_o_1);
  if (param_e_1.getToken() !== 16 && param_e_1.getToken() !== 18) {
  var_d_1 = qe(param_e_1, param_t, param_r, 1, 0, var_o_1, var_d_1);
  }
  }
  }
  else if (var_c_1 & 2097152) {
  var_d_1 = var_c_1 === 2162700 ? gt(param_e_1, param_t, var_u_1, param_r, 0, 1,
  0, param_i) : pt(param_e_1, param_t, var_u_1, param_r, 0, 1, 0, param_i);
  num_p |= param_e_1.destructible;
  num_f = 1;
  if (param_e_1.getToken() !== 16 && param_e_1.getToken() !== 18) {
  if (num_p & 8) {
  param_e_1.report(124);
  }
  var_d_1 = Ge(param_e_1, param_t, param_r, var_d_1, 0, 0, var_o_1);
  num_p |= 16;
  if (!(~param_e_1.getToken() & 8388608)) {
  var_d_1 = We(param_e_1, param_t, param_r, 1, param_s, 4, var_c_1, var_d_1);
  }
  if (var_X(param_e_1, param_t | 32, 22)) {
  var_d_1 = Ve(param_e_1, param_t, param_r, var_d_1, param_s);
  }
  }
  }
  else {
  if (var_c_1 !== 14) {
  var_d_1 = Ue(param_e_1, param_t, param_r, 1, 0, var_o_1);
  num_p = 0;
  list_h.push(var_d_1);
  while (var_X(param_e_1, param_t | 32, 18)) {
  list_h.push(Ue(param_e_1, param_t, param_r, 1, 0, var_o_1));
  }
  num_p |= param_e_1.assignable;
  var_Z(param_e_1, param_t, 16);
  param_e_1.destructible = num_p | 16;
  if (param_t & 1 || !param_e_1.options.webcompat) {
  param_e_1.assignable = 2;
  }
  else {
  param_e_1.assignable = 4;
  }
  if (var_l_1) {
  param_e_1.firstAwaitLocation = var_l_1;
  }
  return param_e_1.finishNode({
  type: "CallExpression",
  callee: param_n,
  arguments: list_h,
  optional: false
  }
  , param_s);
  }
  var_d_1 = ht(param_e_1, param_t, var_u_1, param_r, 16, param_i, 1, 1, 0);
  num_p |= (param_e_1.getToken() === 16 ? 0 : 16) | param_e_1.destructible;
  num_f = 1;
  }
  list_h.push(var_d_1);
  if (!var_X(param_e_1, param_t | 32, 18)) {
  break;
  }
  }
  var_Z(param_e_1, param_t, 16);
  num_p |= (param_e_1.destructible & 256 ? 256 : 0) | (param_e_1.destructible & 128 ?
  128 : 0);
  if (param_e_1.getToken() === 10) {
  if (num_p & 48) {
  param_e_1.report(27);
  }
  if (param_e_1.flags & 1 || param_a & 1) {
  param_e_1.report(48);
  }
  if (num_p & 128) {
  const var_t_1 = param_e_1.firstAwaitLocation;
  if (var_t_1) {
  throw new var_D(var_t_1.start, var_t_1.end, 31);
  }
  param_e_1.report(31);
  }
  if (param_t & 1025 && num_p & 256) {
  param_e_1.report(32);
  }
  if (num_f) {
  param_e_1.flags |= 128;
  }
  return bt(param_e_1, param_t | 2048, var_u_1, param_r, list_h, param_o, 1, param_s);
  }
  if (num_p & 64) {
  param_e_1.report(63);
  }
  if (num_p & 8) {
  param_e_1.report(62);
  }
  if (param_t & 1 || !param_e_1.options.webcompat) {
  param_e_1.assignable = 2;
  }
  else {
  param_e_1.assignable = 4;
  }
  if (var_l_1) {
  param_e_1.firstAwaitLocation = var_l_1;
  }
  return param_e_1.finishNode({
  type: "CallExpression",
  callee: param_n,
  arguments: list_h,
  optional: false
  }
  , param_s);
  }
  function kt(param_e_1, param_t, param_r, param_n, param_o) {
  let var_a_1;
  let var_s;
  if (param_e_1.leadingDecorators.decorators.length) {
  var_a_1 = param_e_1.leadingDecorators.start;
  var_s = [...param_e_1.leadingDecorators.decorators];
  param_e_1.leadingDecorators.decorators.length = 0;
  }
  else {
  var_a_1 = param_e_1.tokenStart;
  var_s = At(param_e_1, param_t, param_n);
  }
  var_Z(param_e_1, param_t = (param_t | 16385) ^ 16384, 86094);
  let var_c = null;
  let var_u_1 = null;
  const {
  tokenValue: var_l_1,
  tokenStart: var_d_1,
  currentLocation: var_p_1
  }
  = param_e_1;
  if (param_e_1.getToken() & 4096 && param_e_1.getToken() !== 20565) {
  if (re(param_e_1, param_t, param_e_1.getToken())) {
  param_e_1.report(120);
  }
  if (!(~param_e_1.getToken() & 537079808)) {
  param_e_1.report(121);
  }
  if (param_r) {
  param_r.addBlockName(param_t, var_l_1, 32, var_d_1, var_p_1);
  if (param_o && param_o & 2) {
  param_e_1.declareUnboundVariable(var_l_1);
  }
  }
  var_c = ct(param_e_1, param_t);
  }
  else if (!(param_o & 1)) {
  param_e_1.report(39, "Class");
  }
  let var_f_1 = param_t;
  if (var_X(param_e_1, param_t | 32, 20565)) {
  var_u_1 = Ye(param_e_1, param_t, param_n, 0, 0, 0);
  var_f_1 |= 512;
  }
  else {
  var_f_1 = (var_f_1 | 512) ^ 512;
  }
  const var_h_1 = xt(param_e_1, var_f_1, param_t, param_r, param_n, 2, 0, 8);
  return param_e_1.finishNode(var_i({
  type: "ClassDeclaration",
  id: var_c,
  superClass: var_u_1,
  body: var_h_1
  }
  , param_e_1.features & 1 ? {
  decorators: var_s
  }
  : null), var_a_1);
  }
  function At(param_e_1, param_t, param_r) {
  const list_n_1 = [];
  if (param_e_1.features & 1) {
  while (param_e_1.getToken() === 133) {
  list_n_1.push(Ct(param_e_1, param_t, param_r));
  }
  }
  return list_n_1;
  }
  function Ct(param_e_1, param_t, param_r) {
  const var_n = param_e_1.tokenStart;
  var_Y(param_e_1, param_t | 32);
  const var_o_1 = param_e_1.tokenStart;
  let var_i_1;
  if (param_e_1.getToken() === 67174411) {
  var_i_1 = $e(param_e_1, param_t, param_r, 2, 0, 1, 0, 1, var_n);
  }
  else {
  const var_n_1 = param_e_1.getToken();
  if (~var_n_1 & 143360 && !ie(param_t, var_n_1) || param_t & 1 &&
  !(~var_n_1 & 36864)) {
  param_e_1.report(30, list_T[var_n_1 & 255]);
  }
  if (var_n_1 === 209006 && param_t & 2050) {
  param_e_1.report(112);
  }
  if (var_n_1 === 241771 && param_t & 1024) {
  param_e_1.report(97, "yield");
  }
  let var_a_1 = ct(param_e_1, param_t | 64);
  while (param_e_1.getToken() === 67108877) {
  var_Y(param_e_1, (param_t | 262152) ^ 8);
  const var_n_2 = Qe(param_e_1, param_t | 64, param_r, 1);
  var_a_1 = param_e_1.finishNode({
  type: "MemberExpression",
  object: var_a_1,
  computed: false,
  property: var_n_2,
  optional: false
  }
  , var_o_1);
  }
  var_i_1 = var_a_1;
  if (param_e_1.getToken() === 67174411) {
  const var_n_2 = st(param_e_1, param_t, param_r, 0);
  var_i_1 = param_e_1.finishNode({
  type: "CallExpression",
  callee: var_a_1,
  arguments: var_n_2,
  optional: false
  }
  , var_o_1);
  }
  }
  return param_e_1.finishNode({
  type: "Decorator",
  expression: var_i_1
  }
  , var_n);
  }
  function xt(param_e_1, param_t, param_r, param_n, param_o, param_i, param_a, param_s = 0) {
  const {
  tokenStart: var_c
  }
  = param_e_1;
  const var_u_1 = param_e_1.createPrivateScopeIfLexical(param_o);
  var_Z(param_e_1, param_t | 32, 2162700);
  const num_l = 655360;
  param_t = (param_t | num_l) ^ num_l;
  const var_d_1 = param_e_1.flags & 32;
  param_e_1.flags = (param_e_1.flags | 32) ^ 32;
  const list_p = [];
  while (param_e_1.getToken() !== 1074790415) {
  const var_o_1 = param_e_1.tokenStart;
  const var_s = At(param_e_1, param_t, var_u_1);
  if (var_s.length > 0 && param_e_1.tokenValue === "constructor") {
  param_e_1.report(111);
  }
  if (param_e_1.getToken() === 1074790415) {
  param_e_1.report(110);
  }
  if (var_X(param_e_1, param_t, 1074790417)) {
  if (var_s.length > 0) {
  param_e_1.report(122);
  }
  }
  else {
  list_p.push(St(param_e_1, param_t, param_n, var_u_1, param_r, param_i, var_s, 0,
  param_a, var_s.length > 0 ? var_o_1 : param_e_1.tokenStart));
  }
  }
  var_Z(param_e_1, param_s & 8 ? param_t | 32 : param_t, 1074790415);
  if (var_u_1 != null) {
  var_u_1.validatePrivateIdentifierRefs();
  }
  param_e_1.flags = param_e_1.flags & -33 | var_d_1;
  return param_e_1.finishNode({
  type: "ClassBody",
  body: list_p
  }
  , var_c);
  }
  function St(param_e_1, param_t, param_r, param_n, param_o, param_a, param_s, param_c,
  param_u, param_l) {
  let var_d_1 = param_c ? 32 : 0;
  let var_p_1 = null;
  const var_f_1 = param_e_1.getToken();
  if (var_f_1 & 176128 || var_f_1 === -2147483527) {
  var_p_1 = ct(param_e_1, param_t);
  switch (var_f_1) {
  case 36970:
  if (!param_c && param_e_1.getToken() !== 67174411 && ~param_e_1.getToken() & 1048576 &&
  param_e_1.getToken() !== 1077936155) {
  return St(param_e_1, param_t, param_r, param_n, param_o, param_a, param_s, 1, param_u,
  param_l);
  }
  break;
  case 209005:
  if (param_e_1.getToken() !== 67174411 && !(param_e_1.flags & 1)) {
  if (!(~param_e_1.getToken() & 1073741824)) {
  return It(param_e_1, param_t, param_n, var_p_1, var_d_1, param_s, param_l);
  }
  var_d_1 |= (var_K(param_e_1, param_t, 8391476) ? 8 : 0) | 16;
  }
  break;
  case 209008:
  if (param_e_1.getToken() !== 67174411) {
  if (param_e_1.getToken() === 8391476 && param_e_1.flags & 1) {
  return It(param_e_1, param_t, param_n, var_p_1, var_d_1, param_s, param_l);
  }
  if (!(~param_e_1.getToken() & 1073741824)) {
  return It(param_e_1, param_t, param_n, var_p_1, var_d_1, param_s, param_l);
  }
  var_d_1 |= 256;
  }
  break;
  case 209009:
  if (param_e_1.getToken() !== 67174411) {
  if (param_e_1.getToken() === 8391476 && param_e_1.flags & 1) {
  return It(param_e_1, param_t, param_n, var_p_1, var_d_1, param_s, param_l);
  }
  if (!(~param_e_1.getToken() & 1073741824)) {
  return It(param_e_1, param_t, param_n, var_p_1, var_d_1, param_s, param_l);
  }
  var_d_1 |= 512;
  }
  break;
  case 209010:
  if (param_e_1.getToken() !== 67174411 && !(param_e_1.flags & 1)) {
  if (!(~param_e_1.getToken() & 1073741824)) {
  return It(param_e_1, param_t, param_n, var_p_1, var_d_1, param_s, param_l);
  }
  if (param_e_1.features & 1) {
  var_d_1 |= 1024;
  }
  }
  }
  }
  else if (var_f_1 === 69271571) {
  var_d_1 |= 2;
  var_p_1 = vt(param_e_1, param_o, param_n, param_u);
  }
  else if (~var_f_1 & 134217728) {
  if (var_f_1 === 8391476) {
  var_d_1 |= 8;
  var_Y(param_e_1, param_t);
  }
  else if (param_e_1.getToken() === 131) {
  var_d_1 |= 8192;
  var_p_1 = Ot(param_e_1, param_t | 16, param_n, 768);
  }
  else if (~param_e_1.getToken() & 1073741824) {
  if (param_c && var_f_1 === 2162700) {
  return function (param_e_2, param_t_1, param_r_1, param_n_1, param_o_1, param_i) {
  return we(param_e_2, param_t_1 = (param_t_1 | 5764) ^ 5764 | 592128, param_r_1 = (
  param_i = param_r_1) === null || param_i === undefined ? undefined :
  param_i.createChildScope(), param_n_1, {
  }
  , param_o_1, "StaticBlock");
  }
  (param_e_1, param_t | 16, param_r, param_n, param_l);
  }
  if (var_f_1 === -2147483526) {
  var_p_1 = ct(param_e_1, param_t);
  if (param_e_1.getToken() !== 67174411) {
  param_e_1.report(30, list_T[param_e_1.getToken() & 255]);
  }
  }
  else {
  param_e_1.report(30, list_T[param_e_1.getToken() & 255]);
  }
  }
  else {
  var_d_1 |= 128;
  }
  }
  else {
  var_p_1 = ut(param_e_1, param_t);
  }
  if (var_d_1 & 1816) {
  if (param_e_1.getToken() & 143360 || param_e_1.getToken() === -2147483527 ||
  param_e_1.getToken() === -2147483526) {
  var_p_1 = ct(param_e_1, param_t);
  }
  else if (~param_e_1.getToken() & 134217728) {
  if (param_e_1.getToken() === 69271571) {
  var_d_1 |= 2;
  var_p_1 = vt(param_e_1, param_t, param_n, 0);
  }
  else if (param_e_1.getToken() === 131) {
  var_d_1 |= 8192;
  var_p_1 = Ot(param_e_1, param_t, param_n, var_d_1);
  }
  else {
  param_e_1.report(137);
  }
  }
  else {
  var_p_1 = ut(param_e_1, param_t);
  }
  }
  if (!(var_d_1 & 2)) {
  if (param_e_1.tokenValue === "constructor") {
  if (~param_e_1.getToken() & 1073741824) {
  if (!(var_d_1 & 32) && param_e_1.getToken() === 67174411) {
  if (var_d_1 & 920) {
  param_e_1.report(53, "accessor");
  }
  else if (!(param_t & 512)) {
  if (param_e_1.flags & 32) {
  param_e_1.report(54);
  }
  else {
  param_e_1.flags |= 32;
  }
  }
  }
  }
  else {
  param_e_1.report(131);
  }
  var_d_1 |= 64;
  }
  else if (!(var_d_1 & 8192) && var_d_1 & 32 && param_e_1.tokenValue === "prototype") {
  param_e_1.report(52);
  }
  }
  if (var_d_1 & 1024 || param_e_1.getToken() !== 67174411 &&
  !(var_d_1 & 768)) {
  return It(param_e_1, param_t, param_n, var_p_1, var_d_1, param_s, param_l);
  }
  const var_h_1 = mt(param_e_1, param_t | 16, param_n, var_d_1, param_u, param_e_1.tokenStart);
  return param_e_1.finishNode(var_i({
  type: "MethodDefinition",
  kind: !(var_d_1 & 32) && var_d_1 & 64 ? "constructor" : var_d_1 & 256 ?
  "get" : var_d_1 & 512 ? "set" : "method",
  static: (var_d_1 & 32) > 0,
  computed: (var_d_1 & 2) > 0,
  key: var_p_1,
  value: var_h_1
  }
  , param_e_1.features & 1 ? {
  decorators: param_s
  }
  : null), param_l);
  }
  function Ot(param_e_1, param_t, param_r, param_n) {
  const {
  tokenStart: var_o_1
  }
  = param_e_1;
  var_Y(param_e_1, param_t);
  const {
  tokenValue: var_i_1
  }
  = param_e_1;
  if (var_i_1 === "constructor") {
  param_e_1.report(130);
  }
  if (param_e_1.options.lexical) {
  if (!param_r) {
  param_e_1.report(4, var_i_1);
  }
  if (param_n) {
  param_r.addPrivateIdentifier(var_i_1, param_n);
  }
  else {
  param_r.addPrivateIdentifierRef(var_i_1);
  }
  }
  var_Y(param_e_1, param_t);
  return param_e_1.finishNode({
  type: "PrivateIdentifier",
  name: var_i_1
  }
  , var_o_1);
  }
  function It(param_e_1, param_t, param_r, param_n, param_o, param_a, param_s) {
  let var_c = null;
  if (param_o & 8) {
  param_e_1.report(0);
  }
  if (param_e_1.getToken() === 1077936155) {
  var_Y(param_e_1, param_t | 32);
  const {
  tokenStart: var_n
  }
  = param_e_1;
  if (param_e_1.getToken() === 537079928) {
  param_e_1.report(121);
  }
  const var_i_1 = (param_o & 64 ? 0 : 16896) | 11264;
  var_c = $e(param_e_1, (param_t = (param_t | var_i_1) ^ var_i_1 | (param_o & 8 ?
  1024 : 0) | (param_o & 16 ? 2048 : 0) | (param_o & 64 ? 16384 :
  0) | 65792) | 16, param_r, 2, 0, 1, 0, 1, var_n, 0, 1);
  if (!!(~param_e_1.getToken() & 1073741824) || !(~param_e_1.getToken() & 4194304)) {
  var_c = Ge(param_e_1, param_t | 16, param_r, var_c, 0, 0, var_n);
  var_c = qe(param_e_1, param_t | 16, param_r, 0, 0, var_n, var_c);
  }
  }
  var_Q(param_e_1, param_t);
  return param_e_1.finishNode(var_i({
  type: param_o & 1024 ? "AccessorProperty" : "PropertyDefinition",
  key: param_n,
  value: var_c,
  static: (param_o & 32) > 0,
  computed: (param_o & 2) > 0
  }
  , param_e_1.features & 1 ? {
  decorators: param_a
  }
  : null), param_s);
  }
  function Lt(param_e_1, param_t, param_r, param_n, param_o, param_i = 0) {
  if (param_e_1.getToken() & 143360 || !(param_t & 1) && param_e_1.getToken() === -2147483526) {
  return Rt(param_e_1, param_t, param_r, param_o, param_i);
  }
  if (~param_e_1.getToken() & 2097152) {
  param_e_1.report(30, list_T[param_e_1.getToken() & 255]);
  }
  const var_a_1 = param_e_1.getToken() === 69271571 ? pt(param_e_1, param_t, param_r,
  param_n, 1, 0, 1, param_o, param_i) : gt(param_e_1, param_t, param_r, param_n,
  1, 0, 1, param_o, param_i);
  if (param_e_1.destructible & 16) {
  param_e_1.report(50);
  }
  if (param_e_1.destructible & 32) {
  param_e_1.report(50);
  }
  return var_a_1;
  }
  function Rt(param_e_1, param_t, param_r, param_n, param_o = 0) {
  const var_i_1 = param_e_1.getToken();
  if (param_t & 1) {
  if (~var_i_1 & 537079808) {
  if (!(~var_i_1 & 36864) || var_i_1 === -2147483526) {
  param_e_1.report(120);
  }
  }
  else {
  param_e_1.report(121);
  }
  }
  if (!(~var_i_1 & 20480)) {
  param_e_1.report(102);
  }
  if (var_i_1 === 241771) {
  if (param_t & 1024) {
  param_e_1.report(32);
  }
  if (param_t & 2) {
  param_e_1.report(113);
  }
  }
  if ((var_i_1 & 255) == 73 && param_n & 24) {
  param_e_1.report(100);
  }
  if (var_i_1 === 209006) {
  if (param_t & 2048) {
  param_e_1.report(178);
  }
  if (param_t & 2) {
  param_e_1.report(112);
  }
  }
  const {
  tokenValue: var_a_1,
  tokenStart: var_s,
  currentLocation: var_c
  }
  = param_e_1;
  var_Y(param_e_1, param_t);
  if (param_r != null) {
  param_r.addVarOrBlock(param_t, var_a_1, param_n, var_s, var_c, param_o);
  }
  return param_e_1.finishNode({
  type: "Identifier",
  name: var_a_1
  }
  , var_s);
  }
  function Pt(param_e_1, param_t, param_r, param_n, param_o) {
  if (!param_n) {
  var_Z(param_e_1, param_t, 8456256);
  }
  if (param_e_1.getToken() === 8390721) {
  const var_i_2 = function (param_e_2, param_t_1) {
  le(param_e_2);
  return param_e_2.finishNode({
  type: "JSXOpeningFragment"
  }
  , param_t_1);
  }
  (param_e_1, param_o);
  const [var_a_1, var_s_1] = function (param_e_2, param_t_1, param_r_1, param_n_1) {
  const list_o_1 = [];
  while (true) {
  const var_i_3 = Mt(param_e_2, param_t_1, param_r_1, param_n_1);
  if (var_i_3.type === "JSXClosingFragment") {
  return [list_o_1, var_i_3];
  }
  list_o_1.push(var_i_3);
  }
  }
  (param_e_1, param_t, param_r, param_n);
  return param_e_1.finishNode({
  type: "JSXFragment",
  openingFragment: var_i_2,
  children: var_a_1,
  closingFragment: var_s_1
  }
  , param_o);
  }
  if (param_e_1.getToken() === 8457014) {
  param_e_1.report(30, list_T[param_e_1.getToken() & 255]);
  }
  let var_i_1 = null;
  let list_a = [];
  const var_s = function (param_e_2, param_t_1, param_r_1, param_n_1, param_o_1) {
  if (~param_e_2.getToken() & 143360 && ~param_e_2.getToken() & 4096) {
  param_e_2.report(0);
  }
  const var_i_2 = Ut(param_e_2, param_t_1);
  const var_a_1 = function (param_e_3, param_t_2, param_r_2) {
  const list_n_1 = [];
  while (param_e_3.getToken() !== 8457014 && param_e_3.getToken() !== 8390721 &&
  param_e_3.getToken() !== 1048576) {
  list_n_1.push(jt(param_e_3, param_t_2, param_r_2));
  }
  return list_n_1;
  }
  (param_e_2, param_t_1, param_r_1);
  const var_s_1 = param_e_2.getToken() === 8457014;
  if (var_s_1) {
  var_Z(param_e_2, param_t_1 | 1048576, 8457014);
  }
  if (param_e_2.getToken() !== 8390721) {
  param_e_2.report(25, list_T[65]);
  }
  if (param_n_1 || !var_s_1) {
  le(param_e_2);
  }
  else {
  var_Y(param_e_2, param_t_1);
  }
  return param_e_2.finishNode({
  type: "JSXOpeningElement",
  name: var_i_2,
  attributes: var_a_1,
  selfClosing: var_s_1
  }
  , param_o_1);
  }
  (param_e_1, param_t, param_r, param_n, param_o);
  if (!var_s.selfClosing) {
  [list_a, var_i_1] = function (param_e_2, param_t_1, param_r_1, param_n_1) {
  const list_o_1 = [];
  while (true) {
  const var_i_2 = Bt(param_e_2, param_t_1, param_r_1, param_n_1);
  if (var_i_2.type === "JSXClosingElement") {
  return [list_o_1, var_i_2];
  }
  list_o_1.push(var_i_2);
  }
  }
  (param_e_1, param_t, param_r, param_n);
  const var_o_1 = oe(var_i_1.name);
  if (oe(var_s.name) !== var_o_1) {
  param_e_1.report(157, var_o_1);
  }
  }
  return param_e_1.finishNode({
  type: "JSXElement",
  children: list_a,
  openingElement: var_s,
  closingElement: var_i_1
  }
  , param_o);
  }
  function Bt(param_e_1, param_t, param_r, param_n) {
  if (param_e_1.getToken() === 138) {
  return Ft(param_e_1);
  }
  if (param_e_1.getToken() === 2162700) {
  return Ht(param_e_1, param_t, param_r, 1, 0);
  }
  if (param_e_1.getToken() === 8456256) {
  const {
  tokenStart: var_o_1
  }
  = param_e_1;
  var_Y(param_e_1, param_t);
  if (param_e_1.getToken() === 8457014) {
  return function (param_e_2, param_t_1, param_r_1, param_n_1) {
  var_Z(param_e_2, param_t_1, 8457014);
  const var_o_2 = Ut(param_e_2, param_t_1);
  if (param_e_2.getToken() !== 8390721) {
  param_e_2.report(25, list_T[65]);
  }
  if (param_r_1) {
  le(param_e_2);
  }
  else {
  var_Y(param_e_2, param_t_1);
  }
  return param_e_2.finishNode({
  type: "JSXClosingElement",
  name: var_o_2
  }
  , param_n_1);
  }
  (param_e_1, param_t, param_n, var_o_1);
  }
  else {
  return Pt(param_e_1, param_t, param_r, 1, var_o_1);
  }
  }
  param_e_1.report(0);
  }
  function Mt(param_e_1, param_t, param_r, param_n) {
  if (param_e_1.getToken() === 138) {
  return Ft(param_e_1);
  }
  if (param_e_1.getToken() === 2162700) {
  return Ht(param_e_1, param_t, param_r, 1, 0);
  }
  if (param_e_1.getToken() === 8456256) {
  const {
  tokenStart: var_o_1
  }
  = param_e_1;
  var_Y(param_e_1, param_t);
  if (param_e_1.getToken() === 8457014) {
  return function (param_e_2, param_t_1, param_r_1, param_n_1) {
  var_Z(param_e_2, param_t_1, 8457014);
  if (param_e_2.getToken() !== 8390721) {
  param_e_2.report(25, list_T[65]);
  }
  if (param_r_1) {
  le(param_e_2);
  }
  else {
  var_Y(param_e_2, param_t_1);
  }
  return param_e_2.finishNode({
  type: "JSXClosingFragment"
  }
  , param_n_1);
  }
  (param_e_1, param_t, param_n, var_o_1);
  }
  else {
  return Pt(param_e_1, param_t, param_r, 1, var_o_1);
  }
  }
  param_e_1.report(0);
  }
  function Ft(param_e_1) {
  const var_t_1 = param_e_1.tokenStart;
  le(param_e_1);
  const obj_r = {
  type: "JSXText",
  value: param_e_1.tokenValue
  };
  if (param_e_1.options.raw) {
  obj_r.raw = param_e_1.tokenRaw;
  }
  return param_e_1.finishNode(obj_r, var_t_1);
  }
  function Ut(param_e_1, param_t) {
  const {
  tokenStart: var_r
  }
  = param_e_1;
  de(param_e_1);
  let var_n = Vt(param_e_1, param_t);
  if (param_e_1.getToken() === 21) {
  return qt(param_e_1, param_t, var_n, var_r);
  }
  while (var_X(param_e_1, param_t, 67108877)) {
  de(param_e_1);
  var_n = Nt(param_e_1, param_t, var_n, var_r);
  }
  return var_n;
  }
  function Nt(param_e_1, param_t, param_r, param_n) {
  const var_o_1 = Vt(param_e_1, param_t);
  return param_e_1.finishNode({
  type: "JSXMemberExpression",
  object: param_r,
  property: var_o_1
  }
  , param_n);
  }
  function jt(param_e_1, param_t, param_r) {
  const {
  tokenStart: var_n
  }
  = param_e_1;
  if (param_e_1.getToken() === 2162700) {
  return function (param_e_2, param_t_1, param_r_1) {
  const var_n_1 = param_e_2.tokenStart;
  var_Y(param_e_2, param_t_1);
  var_Z(param_e_2, param_t_1, 14);
  const var_o_2 = Ue(param_e_2, param_t_1, param_r_1, 1, 0, param_e_2.tokenStart);
  var_Z(param_e_2, param_t_1, 1074790415);
  return param_e_2.finishNode({
  type: "JSXSpreadAttribute",
  argument: var_o_2
  }
  , var_n_1);
  }
  (param_e_1, param_t, param_r);
  }
  de(param_e_1);
  let var_o_1 = null;
  let var_i_1 = Vt(param_e_1, param_t);
  if (param_e_1.getToken() === 21) {
  var_i_1 = qt(param_e_1, param_t, var_i_1, var_n);
  }
  if (param_e_1.getToken() === 1077936155) {
  switch (ue(param_e_1, param_t)) {
  case 134283267:
  var_o_1 = ut(param_e_1, param_t);
  break;
  case 8456256:
  var_o_1 = Pt(param_e_1, param_t, param_r, 0, param_e_1.tokenStart);
  break;
  case 2162700:
  var_o_1 = Ht(param_e_1, param_t, param_r, 0, 1);
  break;
  default:
  param_e_1.report(156);
  }
  }
  return param_e_1.finishNode({
  type: "JSXAttribute",
  value: var_o_1,
  name: var_i_1
  }
  , var_n);
  }
  function qt(param_e_1, param_t, param_r, param_n) {
  var_Z(param_e_1, param_t, 21);
  const var_o_1 = Vt(param_e_1, param_t);
  return param_e_1.finishNode({
  type: "JSXNamespacedName",
  namespace: param_r,
  name: var_o_1
  }
  , param_n);
  }
  function Ht(param_e_1, param_t, param_r, param_n, param_o) {
  const {
  tokenStart: var_i_1
  }
  = param_e_1;
  var_Y(param_e_1, param_t | 32);
  const {
  tokenStart: var_a_1
  }
  = param_e_1;
  if (param_e_1.getToken() === 14) {
  return function (param_e_2, param_t_1, param_r_1, param_n_1) {
  var_Z(param_e_2, param_t_1, 14);
  const var_o_1 = Ue(param_e_2, param_t_1, param_r_1, 1, 0, param_e_2.tokenStart);
  var_Z(param_e_2, param_t_1, 1074790415);
  return param_e_2.finishNode({
  type: "JSXSpreadChild",
  expression: var_o_1
  }
  , param_n_1);
  }
  (param_e_1, param_t, param_r, var_i_1);
  }
  let var_s;
  if (param_e_1.getToken() === 1074790415) {
  if (param_o) {
  param_e_1.report(159);
  }
  var_s = function (param_e_2, param_t_1) {
  return param_e_2.finishNode({
  type: "JSXEmptyExpression"
  }
  , param_t_1, param_e_2.tokenStart);
  }
  (param_e_1, {
  index: param_e_1.startIndex,
  line: param_e_1.startLine,
  column: param_e_1.startColumn
  }
  );
  }
  else {
  var_s = Ue(param_e_1, param_t, param_r, 1, 0, var_a_1);
  }
  if (param_e_1.getToken() !== 1074790415) {
  param_e_1.report(25, list_T[15]);
  }
  if (param_n) {
  le(param_e_1);
  }
  else {
  var_Y(param_e_1, param_t);
  }
  return param_e_1.finishNode({
  type: "JSXExpressionContainer",
  expression: var_s
  }
  , var_i_1);
  }
  function Vt(param_e_1, param_t) {
  const var_r = param_e_1.tokenStart;
  if (!(param_e_1.getToken() & 143360)) {
  param_e_1.report(30, list_T[param_e_1.getToken() & 255]);
  }
  const {
  tokenValue: var_n
  }
  = param_e_1;
  var_Y(param_e_1, param_t | 1048576);
  return param_e_1.finishNode({
  type: "JSXIdentifier",
  name: var_n
  }
  , var_r);
  }
  const {
  version: Wt
  }
  = {
  version: "7.3.3"
  };
  param_e.isParseError = param_e_1 => param_e_1 instanceof var_D;
  param_e.parse = function (param_e_1, param_t) {
  return ge(param_e_1, param_t);
  };
  param_e.parseModule = function (param_e_1, param_t) {
  return ge(param_e_1, var_i(var_i({
  }
  , param_t), {
  }
  , {
  sourceType: "module"
  }
  ));
  };
  param_e.parseScript = function (param_e_1, param_t) {
  return ge(param_e_1, var_i(var_i({
  }
  , param_t), {
  }
  , {
  sourceType: "script"
  }
  ));
  };
  param_e.version = Wt;
  }
  )(exportsObj);
  };
