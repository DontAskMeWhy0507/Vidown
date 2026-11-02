// Module 55 [utilities] - CryptoJS cryptographic component (sha384)
export default function (moduleObj, exportsObj, requireFn) {
  var var_n;
  var var_o;
  var var_i;
  var var_a;
  var var_s;
  var var_c;
  var var_u;
  var var_l;
  var_l = requireFn(4);
  requireFn(26);
  requireFn(41);
  var_o = (var_n = var_l).x64;
  var_i = var_o.Word;
  var_a = var_o.WordArray;
  var_s = var_n.algo;
  var_c = var_s.SHA512;
  var_u = var_s.SHA384 = var_c.extend({
  _doReset: function () {
  this._hash = new var_a.init([new var_i.init(3418070365, 3238371032), new var_i.init(
  1654270250, 914150663), new var_i.init(2438529370, 812702999), new var_i.init(
  355462360, 4144912697), new var_i.init(1731405415, 4290775857), new var_i.init(
  2394180231, 1750603025), new var_i.init(3675008525, 1694076839), new var_i.init(
  1203062813, 3204075428)]);
  }
  ,
  _doFinalize: function () {
  var var_e = var_c._doFinalize.call(this);
  var_e.sigBytes -= 16;
  return var_e;
  }
  }
  );
  var_n.SHA384 = var_c._createHelper(var_u);
  var_n.HmacSHA384 = var_c._createHmacHelper(var_u);
  moduleObj.exports = var_l.SHA384;
  };
