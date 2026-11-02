// Module 718 [utilities] - Expiring signed URL and token refresher
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_cdn_token_provider = requireFn(719);
  var dep_jwt_auth_verifier = requireFn(723);
  var dep_network_monitor = requireFn(440);
  moduleObj.exports = {
  formats: dep_network_monitor,
  parse: dep_jwt_auth_verifier,
  stringify: dep_cdn_token_provider
  };
  };
