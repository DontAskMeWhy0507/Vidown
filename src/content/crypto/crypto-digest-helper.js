// Module 665 - Savior Crypto Digest Helper
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var regex_n = /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r+/=]+)[\n\r]+/m,
  regex_i = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m,
  regex_o = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r+/=]+)-----END \1-----$/m,
  dep_helper_171 = requireFn(171),
  dep_helper_428 = requireFn(428),
  var_u = requireFn(25).Buffer;
  moduleObj.exports = function (param_t, param_e) {
  var var_r,
  var_c = param_t.toString(),
  var_l = var_c.match(regex_n);
  if (var_l) {
  var var_f = "aes" + var_l[1],
  var_d = var_u.from(var_l[2], "hex"),
  var_h = var_u.from(var_l[3].replace(/[\r\n]/g, ""), "base64"),
  var_p = dep_helper_171(param_e, var_d.slice(0, 8), parseInt(var_l[1], 10)).key,
  list_v = [],
  var_m = dep_helper_428.createDecipheriv(var_f, var_p, var_d);
  list_v.push(var_m.update(var_h)), list_v.push(var_m.final()), var_r = var_u.concat(
  list_v);
  }
  else {
  var var_y = var_c.match(regex_o);
  var_r = var_u.from(var_y[2].replace(/[\r\n]/g, ""), "base64");
  }
  return {
  tag: var_c.match(regex_i)[1],
  data: var_r
  };
  };
  };
