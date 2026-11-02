// Module 640 - Savior Helper 640
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_122 = requireFn(122),
  dep_helper_496 = requireFn(496);
  function var_o() {
  if (!(this instanceof var_o)) return new var_o();
  dep_helper_496.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663,
  2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231,
  1750603025, 3675008525, 1694076839, 1203062813, 3204075428];
  }
  dep_helper_122.inherits(var_o, dep_helper_496), moduleObj.exports = var_o, var_o.blockSize = 1024,
  var_o.outSize = 384, var_o.hmacStrength = 192, var_o.padLength = 128, var_o.prototype._digest = function (
  param_t) {
  return "hex" === param_t ? dep_helper_122.toHex32(this.h.slice(0, 12), "big") :
  dep_helper_122.split32(this.h.slice(0, 12), "big");
  };
  };
