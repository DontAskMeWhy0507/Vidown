// Module 81 - Savior Url Filter
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.d(exportsObj, "b", function () {
  return var_a;
  }
  ), requireFn.d(exportsObj, "a", function () {
  return var_s;
  }
  );
  requireFn(0);
  var dep_url_utils = requireFn(3),
  dep_media_constants = requireFn(1);
  var list_o = [/\/\/(?:player\.)?vimeo\.com(?:\/video)?\/([0-9]+)/i, /\/\/vimeo.com\/couchmode\/.*\/([0-9]+)/i,
  /\/\/player.vimeo.com\/v[0-9]\/video\/([0-9]+)/i, /\/\/player.vimeo.com\/moog\/([0-9]+)/i,
  /\/\/vimeo\.com\/channels\/[a-z0-9\-_]+\/(\d+)/i];
  function var_a(param_t) {
  for (var var_e, num_r = 0;
  num_r < list_o.length;
  ++num_r) if ((var_e = param_t.match(list_o[num_r])) && var_e[1]) return var_e[1];
  return null;
  }
  function var_s(param_t, param_e) {
  if (param_t.config.request && param_t.config.request.files) {
  var var_r = param_t.config.request.files;
  if (var_r.hls) {
  var var_o = var_r.hls.cdns[var_r.hls.default_cdn];
  if (var_o) return var_o.url;
  }
  if (var_r.progressive && var_r.progressive.length) return var_r.progressive.map(
  param_t_1 => {
  var var_r_1,
  var_o_1 = Object(dep_url_utils.f)(param_t_1.url);
  return var_o_1.resolution = param_t_1.quality, var_o_1.quality = null === (var_r_1 = dep_media_constants.r[param_t_1.quality]) ||
  void 0 === var_r_1 ? void 0 : var_r_1.label, var_o_1.noAudio = !0, null == param_e ||
  param_e(var_o_1, param_t_1), var_o_1;
  }
  );
  }
  }
  };
