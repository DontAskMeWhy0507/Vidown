// Module 173 - Savior Helper 173
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_651 = requireFn(651),
  dep_helper_664 = requireFn(664),
  dep_crypto_digest_helper = requireFn(665),
  dep_helper_428 = requireFn(428),
  var_s = requireFn(472).pbkdf2Sync,
  var_u = requireFn(25).Buffer;
  function var_c(param_t) {
  var var_e;
  "object" != typeof param_t || var_u.isBuffer(param_t) || (var_e = param_t.passphrase,
  param_t = param_t.key), "string" == typeof param_t && (param_t = var_u.from(param_t));
  var var_r,
  var_c_1,
  var_l = dep_crypto_digest_helper(param_t, var_e),
  var_f = var_l.tag,
  var_d = var_l.data;
  switch (var_f) {
  case "CERTIFICATE":
  var_c_1 = dep_helper_651.certificate.decode(var_d, "der").tbsCertificate.subjectPublicKeyInfo;
  case "PUBLIC KEY":
  switch (var_c_1 || (var_c_1 = dep_helper_651.PublicKey.decode(var_d, "der")), var_r = var_c_1.algorithm.algorithm.join(
  ".")) {
  case "1.2.840.113549.1.1.1":
  return dep_helper_651.RSAPublicKey.decode(var_c_1.subjectPublicKey.data, "der");
  case "1.2.840.10045.2.1":
  return var_c_1.subjectPrivateKey = var_c_1.subjectPublicKey, {
  type: "ec",
  data: var_c_1
  };
  case "1.2.840.10040.4.1":
  return var_c_1.algorithm.params.pub_key = dep_helper_651.DSAparam.decode(var_c_1.subjectPublicKey.data,
  "der"), {
  type: "dsa",
  data: var_c_1.algorithm.params
  };
  default:
  throw new Error("unknown key id " + var_r);
  }
  case "ENCRYPTED PRIVATE KEY":
  var_d = function (param_t_1, param_e) {
  var var_r_1 = param_t_1.algorithm.decrypt.kde.kdeparams.salt,
  var_n = parseInt(param_t_1.algorithm.decrypt.kde.kdeparams.iters.toString(), 10),
  var_o = dep_helper_664[param_t_1.algorithm.decrypt.cipher.algo.join(".")],
  var_c_2 = param_t_1.algorithm.decrypt.cipher.iv,
  var_l_1 = param_t_1.subjectPrivateKey,
  var_f_1 = parseInt(var_o.split("-")[1], 10) / 8,
  var_d_1 = var_s(param_e, var_r_1, var_n, var_f_1, "sha1"),
  var_h = dep_helper_428.createDecipheriv(var_o, var_d_1, var_c_2),
  list_p = [];
  return list_p.push(var_h.update(var_l_1)), list_p.push(var_h.final()), var_u.concat(
  list_p);
  }
  (var_d = dep_helper_651.EncryptedPrivateKey.decode(var_d, "der"), var_e);
  case "PRIVATE KEY":
  switch (var_r = (var_c_1 = dep_helper_651.PrivateKey.decode(var_d, "der")).algorithm.algorithm.join(
  ".")) {
  case "1.2.840.113549.1.1.1":
  return dep_helper_651.RSAPrivateKey.decode(var_c_1.subjectPrivateKey, "der");
  case "1.2.840.10045.2.1":
  return {
  curve: var_c_1.algorithm.curve,
  privateKey: dep_helper_651.ECPrivateKey.decode(var_c_1.subjectPrivateKey, "der").privateKey
  };
  case "1.2.840.10040.4.1":
  return var_c_1.algorithm.params.priv_key = dep_helper_651.DSAparam.decode(var_c_1.subjectPrivateKey,
  "der"), {
  type: "dsa",
  params: var_c_1.algorithm.params
  };
  default:
  throw new Error("unknown key id " + var_r);
  }
  case "RSA PUBLIC KEY":
  return dep_helper_651.RSAPublicKey.decode(var_d, "der");
  case "RSA PRIVATE KEY":
  return dep_helper_651.RSAPrivateKey.decode(var_d, "der");
  case "DSA PRIVATE KEY":
  return {
  type: "dsa",
  params: dep_helper_651.DSAPrivateKey.decode(var_d, "der")
  };
  case "EC PRIVATE KEY":
  return {
  curve: (var_d = dep_helper_651.ECPrivateKey.decode(var_d, "der")).parameters.value,
  privateKey: var_d.privateKey
  };
  default:
  throw new Error("unknown key type " + var_f);
  }
  }
  var_c.signature = dep_helper_651.signature, moduleObj.exports = var_c;
  };
