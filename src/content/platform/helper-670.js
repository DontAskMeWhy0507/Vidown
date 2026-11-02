// Module 670 - Savior Helper 670
export default function (moduleObj, exportsObj, requireFn) {
  exportsObj.publicEncrypt = requireFn(671), exportsObj.privateDecrypt = requireFn(
  673), exportsObj.privateEncrypt = function (param_t, param_r) {
  return exportsObj.publicEncrypt(param_t, param_r, !0);
  }
  , exportsObj.publicDecrypt = function (param_t, param_r) {
  return exportsObj.privateDecrypt(param_t, param_r, !0);
  };
  };
