// Module 663 - Savior Helper 663
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_157 = requireFn(157),
  var_i = dep_helper_157.define("Time", function () {
  this.choice({
  utcTime: this.utctime(),
  generalTime: this.gentime()
  }
  );
  }
  ),
  var_o = dep_helper_157.define("AttributeTypeValue", function () {
  this.seq().obj(this.key("type").objid(), this.key("value").any());
  }
  ),
  var_a = dep_helper_157.define("AlgorithmIdentifier", function () {
  this.seq().obj(this.key("algorithm").objid(), this.key("parameters").optional(
  ), this.key("curve").objid().optional());
  }
  ),
  var_s = dep_helper_157.define("SubjectPublicKeyInfo", function () {
  this.seq().obj(this.key("algorithm").use(var_a), this.key("subjectPublicKey").bitstr(
  ));
  }
  ),
  var_u = dep_helper_157.define("RelativeDistinguishedName", function () {
  this.setof(var_o);
  }
  ),
  var_c = dep_helper_157.define("RDNSequence", function () {
  this.seqof(var_u);
  }
  ),
  var_l = dep_helper_157.define("Name", function () {
  this.choice({
  rdnSequence: this.use(var_c)
  }
  );
  }
  ),
  var_f = dep_helper_157.define("Validity", function () {
  this.seq().obj(this.key("notBefore").use(var_i), this.key("notAfter").use(var_i));
  }
  ),
  var_d = dep_helper_157.define("Extension", function () {
  this.seq().obj(this.key("extnID").objid(), this.key("critical").bool().def(!1),
  this.key("extnValue").octstr());
  }
  ),
  var_h = dep_helper_157.define("TBSCertificate", function () {
  this.seq().obj(this.key("version").explicit(0).int().optional(), this.key("serialNumber").int(
  ), this.key("signature").use(var_a), this.key("issuer").use(var_l), this.key("validity").use(
  var_f), this.key("subject").use(var_l), this.key("subjectPublicKeyInfo").use(var_s),
  this.key("issuerUniqueID").implicit(1).bitstr().optional(), this.key("subjectUniqueID").implicit(
  2).bitstr().optional(), this.key("extensions").explicit(3).seqof(var_d).optional(
  ));
  }
  ),
  var_p = dep_helper_157.define("X509Certificate", function () {
  this.seq().obj(this.key("tbsCertificate").use(var_h), this.key("signatureAlgorithm").use(
  var_a), this.key("signatureValue").bitstr());
  }
  );
  moduleObj.exports = var_p;
  };
