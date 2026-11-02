// Module 54 [crypto] - CryptoJS cryptographic component (cipher-params)
export default function (moduleObj, exportsObj, requireFn) {
  var var_r;
  var var_o;
  var var_i;
  var var_a;
  var var_s;
  var var_c;
  var_c = requireFn(4);
  requireFn(34);
  var_o = (var_r = var_c).lib.WordArray;
  var_i = var_r.algo;
  var_a = var_i.SHA256;
  var_s = var_i.SHA224 = var_a.extend({
  _doReset: function () {
  this._hash = new var_o.init([3238371032, 914150663, 812702999, 4144912697, 4290775857,
  1750603025, 1694076839, 3204075428]);
  }
  ,
  _doFinalize: function () {
  var var_e = var_a._doFinalize.call(this);
  var_e.sigBytes -= 4;
  return var_e;
  }
  }
  );
  var_r.SHA224 = var_a._createHelper(var_s);
  var_r.HmacSHA224 = var_a._createHmacHelper(var_s);
  moduleObj.exports = var_c.SHA224;
  };
