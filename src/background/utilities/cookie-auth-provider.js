// Module 516 [utilities] - Cookie and authorization token provider
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_helper_115 = requireFn(115);
  var dep_request_header_manager = requireFn(175);
  var dep_session_cookie_resolver = requireFn(721);
  var dep_credential_store = requireFn(517);
  var var_s = requireFn(722) || dep_credential_store || dep_session_cookie_resolver;
  moduleObj.exports = function () {
  var var_e;
  var obj_t = {
  assert: function (param_e) {
  if (!obj_t.has(param_e)) {
  var var_r = param_e && Object(param_e) === param_e ? "the given object key" :
  dep_request_header_manager(param_e);
  throw new dep_helper_115("Side channel does not contain " + var_r);
  }
  }
  ,
  delete: function (param_t) {
  return !!var_e && var_e.delete(param_t);
  }
  ,
  get: function (param_t) {
  return var_e && var_e.get(param_t);
  }
  ,
  has: function (param_t) {
  return !!var_e && var_e.has(param_t);
  }
  ,
  set: function (param_t, param_r) {
  var_e ||= var_s();
  var_e.set(param_t, param_r);
  }
  };
  return obj_t;
  };
  };
