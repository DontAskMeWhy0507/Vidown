// Module 724 [utilities] - Multi-part download job coordinator
export default function (moduleObj, exportsObj, requireFn) {
  var dep_dash_stream_orchestrator = requireFn(506);
  var dep_stream_downloader_factory = requireFn(515);
  var var_i = moduleObj.exports;
  for (var var_a in dep_dash_stream_orchestrator) {
  if (dep_dash_stream_orchestrator.hasOwnProperty(var_a)) {
  var_i[var_a] = dep_dash_stream_orchestrator[var_a];
  }
  }
  function var_s(param_e) {
  if (typeof param_e == "string") {
  param_e = dep_stream_downloader_factory.parse(param_e);
  }
  param_e.protocol ||= "https:";
  if (param_e.protocol !== "https:") {
  throw new Error("Protocol \"" + param_e.protocol + "\" not supported. Expected \"https:\"");
  }
  return param_e;
  }
  var_i.request = function (param_e, param_t) {
  param_e = var_s(param_e);
  return dep_dash_stream_orchestrator.request.call(this, param_e, param_t);
  };
  var_i.get = function (param_e, param_t) {
  param_e = var_s(param_e);
  return dep_dash_stream_orchestrator.get.call(this, param_e, param_t);
  };
  };
