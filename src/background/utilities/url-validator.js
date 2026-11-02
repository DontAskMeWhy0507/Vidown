// Module 10 [utilities] - URL validation and security checker
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.d(exportsObj, "c", function () {
  return var_c;
  }
  );
  requireFn.d(exportsObj, "a", function () {
  return obj_u;
  }
  );
  requireFn.d(exportsObj, "b", function () {
  return obj_f;
  }
  );
  requireFn.d(exportsObj, "d", function () {
  return var_h;
  }
  );
  var dep_url_utils = requireFn(3);
  var dep_dom_utils = requireFn(0);
  requireFn.d(exportsObj, "e", function () {
  return dep_dom_utils.query;
  }
  );
  requireFn.d(exportsObj, "f", function () {
  return dep_dom_utils.queryAll;
  }
  );
  var dep_settings_manager = requireFn(7);
  function var_a(param_e, param_t) {
  var var_r = typeof Symbol != "undefined" && param_e[Symbol.iterator] ||
  param_e["@@iterator"];
  if (!var_r) {
  if (Array.isArray(param_e) || (var_r = function (param_e_1, param_t_1) {
  if (param_e_1) {
  if (typeof param_e_1 == "string") {
  return var_s(param_e_1, param_t_1);
  }
  var var_r_1 = {
  }
  .toString.call(param_e_1).slice(8, -1);
  if (var_r_1 === "Object" && param_e_1.constructor) {
  var_r_1 = param_e_1.constructor.name;
  }
  if (var_r_1 === "Map" || var_r_1 === "Set") {
  return Array.from(param_e_1);
  }
  else if (var_r_1 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
  var_r_1)) {
  return var_s(param_e_1, param_t_1);
  }
  else {
  return undefined;
  }
  }
  }
  (param_e)) || param_t && param_e && typeof param_e.length == "number") {
  if (var_r) {
  param_e = var_r;
  }
  var num_n = 0;
  function var_o() {
  }
  return {
  s: var_o,
  n: function () {
  if (num_n >= param_e.length) {
  return {
  done: true
  };
  }
  else {
  return {
  done: false,
  value: param_e[num_n++]
  };
  }
  }
  ,
  e: function (param_e_1) {
  throw param_e_1;
  }
  ,
  f: var_o
  };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var var_i;
  var flag_a = true;
  var flag_c = false;
  return {
  s: function () {
  var_r = var_r.call(param_e);
  }
  ,
  n: function () {
  var var_e = var_r.next();
  flag_a = var_e.done;
  return var_e;
  }
  ,
  e: function (param_e_1) {
  flag_c = true;
  var_i = param_e_1;
  }
  ,
  f: function () {
  try {
  if (!flag_a && var_r.return != null) {
  var_r.return();
  }
  }
  finally {
  if (flag_c) {
  throw var_i;
  }
  }
  }
  };
  }
  function var_s(param_e, param_t) {
  if (param_t == null || param_t > param_e.length) {
  param_t = param_e.length;
  }
  for (var num_r = 0, var_n = Array(param_t);
  num_r < param_t;
  num_r++) {
  var_n[num_r] = param_e[num_r];
  }
  return var_n;
  }
  function var_c(param_e, param_t) {
  return param_e && param_e.getAttribute(param_t) || "";
  }
  var obj_u = {
  isCocCocSerp: function (param_e) {
  if (param_e) {
  return Boolean(param_e.match(/(^(https|http):\/\/(dev[0-9]?\.)?coccoc.com\/search\?query=)(?!.*tbm).*$/i));
  }
  }
  ,
  isGGAds: function (param_e) {
  return Boolean(param_e.match(/^https:\/\/www\.(google\.com\/afs\/ads([\s\S]+master[\-A-Za-z\-0-9])*)|(((adsensecustomsearchads|google)\.com|syndicatedsearch\.goog)\/afs\/ads)/i));
  }
  ,
  isCocCocComposer: function (param_e) {
  return Boolean(param_e.match(/(^(https|http):\/\/(dev[0-9]?\.)?coccoc.com\/composer\?)(?!.*tbm).*$/i));
  }
  ,
  saveQueryId: function (param_e) {
  dep_settings_manager.a.remove("_serpid_on_coccoc");
  if (param_e && dep_settings_manager.a.get("coccoc_query_id") !== param_e) {
  dep_settings_manager.a.set("coccoc_query_id", param_e);
  }
  }
  ,
  hasGGAdsIrames: function (param_e) {
  var var_t;
  var var_r = var_a(Object(dep_dom_utils.queryAll)("iframe", param_e));
  try {
  for (var_r.s();
  !(var_t = var_r.n()).done;
  ) {
  var var_n = var_t.value;
  if (obj_f.isGGAdsOnCocCoc(var_n == null ? undefined : var_n.src)) {
  return true;
  }
  }
  }
  catch (var_e) {
  var_r.e(var_e);
  }
  finally {
  var_r.f();
  }
  }
  };
  var var_l = new RegExp("^(www\\.)?google\\.((com|ac|ad|ae|al|am|as|at|az|ba|be|bf|bg|bi|bj|bs|bt|by|ca|cc|cd|cf|cat|cg|ch|ci|cl|cm|cn|cv|cz|de|dj|dk|ee|fi|dm|dz|es|fm|fr|ga|ge|gf|gg|gl|gm|gp|gr|gy|hn|hr|ht|hu|ir|iq|ie|im|io|is|it|je|ki|kg|jo|kz|la|lt|lu|lv|li|lk|md|me|mg|mk|ml|mn|ms|mu|mv|mw|nl|no|nr|nu|pl|ne|pn|ps|pt|ro|rs|ru|rw|sc|se|sh|si|sn|sm|so|tk|tl|tm|to|tn|st|sk|tt|td|vu|ws|vg|tg|us)|(co((\\.(th|id|il|in|jp|ke|ma|kr|mz|ls|nz|tz|ug|uk|uz|ve|vi|za|zm|zw|ao|ck|bw|cr))|m\\.(pr|py|qa|sa|sb|sg|sl|sv|tj|tn|tr|tw|gh|gi|gt|hk|jm|kw|lb|lc|ly|mm|mt|mx|my|na|nf|ng|ni|np|om|pa|pe|ph|pk|pg|ua|uy|vc|vn|af|ag|ai|ar|au|bd|bh|bn|bo|br|bz|kh|co|cu|cy|do|ec|eg|et|fj))))$",
  "i");
  var regex_d = /[&?]q=[^&]/i;
  var regex_p = /^https:\/\/www.google.com\/afs\/ads/i;
  var obj_f = {
  isSERPHost: function (param_e) {
  return Boolean(param_e.match(var_l) && !location.href.match(regex_p) ||
  obj_u.isCocCocSerp(location.href));
  }
  ,
  isGGAdsOnCocCoc: function (param_e) {
  return Boolean(obj_u.isGGAds(param_e) && obj_u.isCocCocSerp(document.referrer));
  }
  ,
  isYSERPHref: function (param_e) {
  return param_e && Boolean(param_e.match(/(youtube.com\/results+[\s\S]+search_query=)/g));
  }
  ,
  isVideoSERPHref: function (param_e) {
  return Boolean(param_e.match(/(https:\/\/www.google.+\/search)+[\s\S]+(tbm=vid|vid:|udm=7)/g));
  }
  ,
  isShortVideoTabSERPHref: function (param_e) {
  return Boolean(param_e.match(/(https:\/\/www.google.+\/search)+[\s\S]+(udm=39)/g));
  }
  ,
  isImageSERPHref: function (param_e) {
  return Boolean(param_e.match(/(https:\/\/www.google.+\/search)+[\s\S]+(tbm=isch|udm=2)/g));
  }
  ,
  isSERPRequest: function (param_e) {
  var var_t;
  var var_r;
  var var_o = Object(dep_url_utils.f)(param_e);
  return Boolean(this.isSERPHost(var_o.host) && ((var_t = var_o.pathname) === null ||
  var_t === undefined ? undefined : var_t.match(/\/s(earch)?/i)) &&
  ((var_r = var_o.search) === null || var_r === undefined ? undefined :
  var_r.match(regex_d)));
  }
  ,
  getSearchParams: function (param_e) {
  var var_t = Object(dep_url_utils.f)(param_e);
  var var_r = Object(dep_url_utils.h)(var_t.search);
  var var_i = Object(dep_url_utils.h)(var_t.hash || "#");
  var var_a_1 = Object(dep_dom_utils.defined)(var_i.q);
  return {
  _rawSearch: var_r,
  _rawHash: var_i,
  q: var_a_1 ? var_i.q : var_r.q || var_r.query || "",
  s: var_a_1 ? var_i.start || 0 : var_r.start || 0,
  udm: var_a_1 ? var_i.udm : var_r.udm,
  tbm: var_a_1 ? var_i.tbm : var_r.tbm && var_r.tbm != "vid" &&
  var_r.tbm != "isch" || null,
  isXHR: var_r.tch,
  isHash: var_a_1
  };
  }
  ,
  isGGAds: function (param_e) {
  return param_e && /(^https:\/\/www\.google\.com\/afs\/ads([\s\S]+master[\-A-Za-z\-0-9])*)|(^https:\/\/googleads\.g\.doubleclick\.net\/pagead\/ads)|(^https:\/\/.+safeframe\.googlesyndication\.com\/safeframe)/i.test(
  param_e);
  }
  ,
  isCollectingAdSites: function (param_e) {
  return param_e && /^(https:\/\/((www\.)?(eva\.vn\/)|(vietnamnet\.vn\/)|(coccoc\.com\/webhp)))|(chrome:\/\/newtab\/)/i.test(
  param_e);
  }
  };
  function var_h(param_e, param_t) {
  return param_e.matches(param_t) || param_e.closest(param_t);
  }
  };
