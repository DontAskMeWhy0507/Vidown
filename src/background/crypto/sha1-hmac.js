// Module 66 [crypto] - CryptoJS cryptographic component (sha1-hmac)
export default function (moduleObj, exportsObj, requireFn) {
  var var_n;
  var_n = requireFn(4);
  requireFn(8);
  var_n.pad.Iso97971 = {
  pad: function (param_e, param_t) {
  param_e.concat(var_n.lib.WordArray.create([2147483648], 1));
  var_n.pad.ZeroPadding.pad(param_e, param_t);
  }
  ,
  unpad: function (param_e) {
  var_n.pad.ZeroPadding.unpad(param_e);
  param_e.sigBytes--;
  }
  };
  moduleObj.exports = var_n.pad.Iso97971;
  };
