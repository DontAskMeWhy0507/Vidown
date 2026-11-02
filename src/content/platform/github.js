// Module 451 - Savior Github
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  exportsObj.randomBytes = exportsObj.rng = exportsObj.pseudoRandomBytes = exportsObj.prng = requireFn(
  139), exportsObj.createHash = exportsObj.Hash = requireFn(150), exportsObj.createHmac = exportsObj.Hmac = requireFn(
  469);
  var dep_helper_599 = requireFn(599),
  var_i = Object.keys(dep_helper_599),
  var_o = ["sha1", "sha224", "sha256", "sha384", "sha512", "md5", "rmd160"].concat(
  var_i);
  exportsObj.getHashes = function () {
  return var_o;
  };
  var dep_helper_472 = requireFn(472);
  exportsObj.pbkdf2 = dep_helper_472.pbkdf2, exportsObj.pbkdf2Sync = dep_helper_472.pbkdf2Sync;
  var dep_helper_601 = requireFn(601);
  exportsObj.Cipher = dep_helper_601.Cipher, exportsObj.createCipher = dep_helper_601.createCipher,
  exportsObj.Cipheriv = dep_helper_601.Cipheriv, exportsObj.createCipheriv = dep_helper_601.createCipheriv,
  exportsObj.Decipher = dep_helper_601.Decipher, exportsObj.createDecipher = dep_helper_601.createDecipher,
  exportsObj.Decipheriv = dep_helper_601.Decipheriv, exportsObj.createDecipheriv = dep_helper_601.createDecipheriv,
  exportsObj.getCiphers = dep_helper_601.getCiphers, exportsObj.listCiphers = dep_helper_601.listCiphers;
  var dep_helper_616 = requireFn(616);
  exportsObj.DiffieHellmanGroup = dep_helper_616.DiffieHellmanGroup, exportsObj.createDiffieHellmanGroup = dep_helper_616.createDiffieHellmanGroup,
  exportsObj.getDiffieHellman = dep_helper_616.getDiffieHellman, exportsObj.createDiffieHellman = dep_helper_616.createDiffieHellman,
  exportsObj.DiffieHellman = dep_helper_616.DiffieHellman;
  var dep_helper_623 = requireFn(623);
  exportsObj.createSign = dep_helper_623.createSign, exportsObj.Sign = dep_helper_623.Sign,
  exportsObj.createVerify = dep_helper_623.createVerify, exportsObj.Verify = dep_helper_623.Verify,
  exportsObj.createECDH = requireFn(667);
  var dep_helper_670 = requireFn(670);
  exportsObj.publicEncrypt = dep_helper_670.publicEncrypt, exportsObj.privateEncrypt = dep_helper_670.privateEncrypt,
  exportsObj.publicDecrypt = dep_helper_670.publicDecrypt, exportsObj.privateDecrypt = dep_helper_670.privateDecrypt;
  var dep_helper_674 = requireFn(674);
  exportsObj.randomFill = dep_helper_674.randomFill, exportsObj.randomFillSync = dep_helper_674.randomFillSync,
  exportsObj.createCredentials = function () {
  throw new Error("sorry, createCredentials is not implemented yet\nwe accept pull requests\nhttps://github.com/browserify/crypto-browserify");
  }
  , exportsObj.constants = {
  DH_CHECK_P_NOT_SAFE_PRIME: 2,
  DH_CHECK_P_NOT_PRIME: 1,
  DH_UNABLE_TO_CHECK_GENERATOR: 4,
  DH_NOT_SUITABLE_GENERATOR: 8,
  NPN_ENABLED: 1,
  ALPN_ENABLED: 1,
  RSA_PKCS1_PADDING: 1,
  RSA_SSLV23_PADDING: 2,
  RSA_NO_PADDING: 3,
  RSA_PKCS1_OAEP_PADDING: 4,
  RSA_X931_PADDING: 5,
  RSA_PKCS1_PSS_PADDING: 6,
  POINT_CONVERSION_COMPRESSED: 2,
  POINT_CONVERSION_UNCOMPRESSED: 4,
  POINT_CONVERSION_HYBRID: 6
  };
  };
