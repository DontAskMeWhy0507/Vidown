// Module 160 [utilities] - Download event observer and sink
export default function (moduleObj, exportsObj, requireFn) {
  (function (param_e) {
  const dep_download_event_router = requireFn(174);
  exportsObj.between = (param_e_1, param_t, param_r) => {
  let var_n;
  if (param_t instanceof RegExp) {
  const var_r = param_e_1.match(param_t);
  if (!var_r) {
  return "";
  }
  var_n = var_r.index + var_r[0].length;
  }
  else {
  var_n = param_e_1.indexOf(param_t);
  if (var_n === -1) {
  return "";
  }
  var_n += param_t.length;
  }
  var_n = (param_e_1 = param_e_1.slice(var_n)).indexOf(param_r);
  if (var_n === -1) {
  return "";
  }
  else {
  return param_e_1 = param_e_1.slice(0, var_n);
  }
  };
  exportsObj.parseAbbreviatedNumber = param_e_1 => {
  const var_t = param_e_1.replace(",", ".").replace(" ", "").match(/([\d,.]+)([MK]?)/);
  if (var_t) {
  let [, var_e, var_r] = var_t;
  var_e = parseFloat(var_e);
  return Math.round(var_r === "M" ? var_e * 1000000 : var_r === "K" ?
  var_e * 1000 : var_e);
  }
  return null;
  };
  exportsObj.cutAfterJSON = param_e_1 => {
  let var_t;
  let var_r;
  if (param_e_1[0] === "[") {
  var_t = "[";
  var_r = "]";
  }
  else if (param_e_1[0] === "{") {
  var_t = "{";
  var_r = "}";
  }
  if (!var_t) {
  throw new Error("Can't cut unsupported JSON (need to begin with [ or { ) but got: " + param_e_1[0]);
  }
  let var_n;
  let flag_o = false;
  let flag_i = false;
  let num_a = 0;
  for (var_n = 0;
  var_n < param_e_1.length;
  var_n++) {
  if (param_e_1[var_n] !== "\"" || flag_i) {
  flag_i = param_e_1[var_n] === "\\" && !flag_i;
  if (!flag_o && (param_e_1[var_n] === var_t ? num_a++ : param_e_1[var_n] === var_r &&
  num_a--, num_a === 0)) {
  return param_e_1.substr(0, var_n + 1);
  }
  }
  else {
  flag_o = !flag_o;
  }
  }
  throw Error("Can't cut unsupported JSON (no matching closing bracket found)");
  };
  exportsObj.playError = (param_e_1, param_t, param_r = Error) => {
  let var_n = param_e_1 && param_e_1.playabilityStatus;
  if (var_n && param_t.includes(var_n.status)) {
  return new param_r(var_n.reason || var_n.messages && var_n.messages[0]);
  }
  else {
  return null;
  }
  };
  exportsObj.exposedMiniget = (param_e_1, param_t = {
  }
  , param_r) => {
  const var_o = dep_download_event_router(param_e_1, param_r ||
  param_t.requestOptions);
  if (typeof param_t.requestCallback == "function") {
  param_t.requestCallback(var_o);
  }
  return var_o;
  };
  exportsObj.deprecate = (param_e_1, param_t, param_r, param_n, param_o) => {
  Object.defineProperty(param_e_1, param_t, {
  get: () => {
  console.warn(`\`${param_n}
  \` will be removed in a near future release, use \`${param_o}
  \` instead.`);
  return param_r;
  }
  }
  );
  };
  const dep_bandwidth_throttler = requireFn(519);
  exportsObj.lastUpdateCheck = 0;
  exportsObj.checkForUpdates = () => !param_e.env.YTDL_NO_UPDATE &&
  !dep_bandwidth_throttler.version.startsWith("0.0.0-") && Date.now() - exportsObj.lastUpdateCheck >= 43200000 ?
  (exportsObj.lastUpdateCheck = Date.now(), dep_download_event_router("https://api.github.com/repos/fent/node-ytdl-core/releases/latest",
  {
  headers: {
  "User-Agent": "ytdl-core"
  }
  }
  ).text().then(param_e_1 => {
  if (JSON.parse(param_e_1).tag_name !== "v" + dep_bandwidth_throttler.version) {
  console.warn("[33mWARNING:[0m ytdl-core is out of date! Update with \"npm install ytdl-core@latest\".");
  }
  }
  , param_e_1 => {
  console.warn("Error checking for updates:", param_e_1.message);
  console.warn("You can disable this check by setting the `YTDL_NO_UPDATE` env variable.");
  }
  )) : null;
  }
  ).call(this, requireFn(32));
  };
