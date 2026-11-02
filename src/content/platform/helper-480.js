// Module 480 - Savior Helper 480
export default function (moduleObj, exportsObj) {
  moduleObj.exports = function (param_t) {
  for (var var_e, var_r = param_t.length;
  var_r--;
  ) {
  if (255 !== (var_e = param_t.readUInt8(var_r))) {
  var_e++, param_t.writeUInt8(var_e, var_r);
  break;
  }
  param_t.writeUInt8(0, var_r);
  }
  };
  };
