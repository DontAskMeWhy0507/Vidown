// Module 607 - Savior Helper 607
export default function (moduleObj, exportsObj) {
  exportsObj.encrypt = function (param_t, param_e) {
  return param_t._cipher.encryptBlock(param_e);
  }
  , exportsObj.decrypt = function (param_t, param_e) {
  return param_t._cipher.decryptBlock(param_e);
  };
  };
