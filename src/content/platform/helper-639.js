// Module 639 - Savior Helper 639
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_122 = requireFn(122),
  dep_helper_495 = requireFn(495);
  function var_o() {
  if (!(this instanceof var_o)) return new var_o();
  dep_helper_495.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697,
  4290775857, 1750603025, 1694076839, 3204075428];
  }
  dep_helper_122.inherits(var_o, dep_helper_495), moduleObj.exports = var_o, var_o.blockSize = 512,
  var_o.outSize = 224, var_o.hmacStrength = 192, var_o.padLength = 64, var_o.prototype._digest = function (
  param_t) {
  return "hex" === param_t ? dep_helper_122.toHex32(this.h.slice(0, 7), "big") :
  dep_helper_122.split32(this.h.slice(0, 7), "big");
  };
  };
