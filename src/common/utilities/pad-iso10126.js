// Module 69 [utilities] - CryptoJS cryptographic component (pad-iso10126)
export default function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var var_o;
  var var_i;
  var var_a;
  var_a = requireFn(4);
  requireFn(8);
  var_o = (var_r = var_a).lib.CipherParams;
  var_i = var_r.enc.Hex;
  var_r.format.Hex = {
  stringify: function (param_e) {
  return param_e.ciphertext.toString(var_i);
  }
  ,
  parse: function (param_e) {
  var var_t = var_i.parse(param_e);
  return var_o.create({
  ciphertext: var_t
  }
  );
  }
  };
  moduleObj.exports = var_a.format.Hex;
  };
