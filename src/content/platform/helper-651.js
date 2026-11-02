// Module 651 - Savior Helper 651
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_157 = requireFn(157);
  exportsObj.certificate = requireFn(663);
  var var_i = dep_helper_157.define("RSAPrivateKey", function () {
  this.seq().obj(this.key("version").int(), this.key("modulus").int(), this.key(
  "publicExponent").int(), this.key("privateExponent").int(), this.key("prime1").int(
  ), this.key("prime2").int(), this.key("exponent1").int(), this.key("exponent2").int(
  ), this.key("coefficient").int());
  }
  );
  exportsObj.RSAPrivateKey = var_i;
  var var_o = dep_helper_157.define("RSAPublicKey", function () {
  this.seq().obj(this.key("modulus").int(), this.key("publicExponent").int());
  }
  );
  exportsObj.RSAPublicKey = var_o;
  var var_a = dep_helper_157.define("AlgorithmIdentifier", function () {
  this.seq().obj(this.key("algorithm").objid(), this.key("none").null_().optional(
  ), this.key("curve").objid().optional(), this.key("params").seq().obj(this.key(
  "p").int(), this.key("q").int(), this.key("g").int()).optional());
  }
  ),
  var_s = dep_helper_157.define("SubjectPublicKeyInfo", function () {
  this.seq().obj(this.key("algorithm").use(var_a), this.key("subjectPublicKey").bitstr(
  ));
  }
  );
  exportsObj.PublicKey = var_s;
  var var_u = dep_helper_157.define("PrivateKeyInfo", function () {
  this.seq().obj(this.key("version").int(), this.key("algorithm").use(var_a), this.key(
  "subjectPrivateKey").octstr());
  }
  );
  exportsObj.PrivateKey = var_u;
  var var_c = dep_helper_157.define("EncryptedPrivateKeyInfo", function () {
  this.seq().obj(this.key("algorithm").seq().obj(this.key("id").objid(), this.key(
  "decrypt").seq().obj(this.key("kde").seq().obj(this.key("id").objid(), this.key(
  "kdeparams").seq().obj(this.key("salt").octstr(), this.key("iters").int())), this.key(
  "cipher").seq().obj(this.key("algo").objid(), this.key("iv").octstr()))), this.key(
  "subjectPrivateKey").octstr());
  }
  );
  exportsObj.EncryptedPrivateKey = var_c;
  var var_l = dep_helper_157.define("DSAPrivateKey", function () {
  this.seq().obj(this.key("version").int(), this.key("p").int(), this.key("q").int(
  ), this.key("g").int(), this.key("pub_key").int(), this.key("priv_key").int());
  }
  );
  exportsObj.DSAPrivateKey = var_l, exportsObj.DSAparam = dep_helper_157.define(
  "DSAparam", function () {
  this.int();
  }
  );
  var var_f = dep_helper_157.define("ECParameters", function () {
  this.choice({
  namedCurve: this.objid()
  }
  );
  }
  ),
  var_d = dep_helper_157.define("ECPrivateKey", function () {
  this.seq().obj(this.key("version").int(), this.key("privateKey").octstr(), this.key(
  "parameters").optional().explicit(0).use(var_f), this.key("publicKey").optional(
  ).explicit(1).bitstr());
  }
  );
  exportsObj.ECPrivateKey = var_d, exportsObj.signature = dep_helper_157.define(
  "signature", function () {
  this.seq().obj(this.key("r").int(), this.key("s").int());
  }
  );
  };
