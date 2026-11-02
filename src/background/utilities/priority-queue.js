// Module 521 [utilities] - Download priority queue manager
export default function (moduleObj, exportsObj) {
  const var_r = new Set(["youtube.com", "www.youtube.com", "m.youtube.com", "music.youtube.com",
  "gaming.youtube.com"]);
  const regex_n = /^https?:\/\/(youtu\.be\/|(www\.)?youtube\.com\/(embed|v|shorts)\/)/;
  exportsObj.getURLVideoID = param_e => {
  const var_o = new URL(param_e);
  let var_a = var_o.searchParams.get("v");
  if (regex_n.test(param_e) && !var_a) {
  const var_e = var_o.pathname.split("/");
  var_a = var_o.host === "youtu.be" ? var_e[1] : var_e[2];
  }
  else if (var_o.hostname && !var_r.has(var_o.hostname)) {
  throw Error("Not a YouTube domain");
  }
  if (!var_a) {
  throw Error("No video id found: " + param_e);
  }
  var_a = var_a.substring(0, 11);
  if (!exportsObj.validateID(var_a)) {
  throw TypeError(`Video id (${var_a}
  ) does not match expected format (${regex_i.toString()}
  )`);
  }
  return var_a;
  };
  const regex_o = /^https?:\/\//;
  exportsObj.getVideoID = param_e => {
  if (exportsObj.validateID(param_e)) {
  return param_e;
  }
  if (regex_o.test(param_e)) {
  return exportsObj.getURLVideoID(param_e);
  }
  throw Error("No video id found: " + param_e);
  };
  const regex_i = /^[a-zA-Z0-9-_]{11}$/;
  exportsObj.validateID = param_e => regex_i.test(param_e);
  exportsObj.validateURL = param_e => {
  try {
  exportsObj.getURLVideoID(param_e);
  return true;
  }
  catch (var_e) {
  return false;
  }
  };
  };
