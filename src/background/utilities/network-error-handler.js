// Module 523 [utilities] - Network error categorization and recovery
export default function (moduleObj, exportsObj, requireFn) {
  const dep_webrequest_filter = requireFn(438);
  const dep_socket_timeout_tracker = requireFn(524);
  const dep_download_event_sink = requireFn(160);
  exportsObj.cache = new dep_socket_timeout_tracker();
  exportsObj.getTokens = (param_e, param_r) => exportsObj.cache.getOrSet(param_e,
  async () => {
  const var_n = await dep_download_event_sink.exposedMiniget(param_e, param_r).text(
  );
  const var_o = exportsObj.extractActions(var_n);
  if (!var_o || !var_o.length) {
  throw Error("Could not extract signature deciphering actions");
  }
  exportsObj.cache.set(param_e, var_o);
  return var_o;
  }
  );
  exportsObj.decipher = (param_e, param_t) => {
  param_t = param_t.split("");
  for (let num_r = 0, var_n = param_e.length;
  num_r < var_n;
  num_r++) {
  let var_n_1;
  let var_o = param_e[num_r];
  switch (var_o[0]) {
  case "r":
  param_t = param_t.reverse();
  break;
  case "w":
  var_n_1 = ~~var_o.slice(1);
  param_t = fn_a(param_t, var_n_1);
  break;
  case "s":
  var_n_1 = ~~var_o.slice(1);
  param_t = param_t.slice(var_n_1);
  break;
  case "p":
  var_n_1 = ~~var_o.slice(1);
  param_t.splice(0, var_n_1);
  }
  }
  return param_t.join("");
  };
  const fn_a = (param_e, param_t) => {
  const var_r = param_e[0];
  param_e[0] = param_e[param_t % param_e.length];
  param_e[param_t] = var_r;
  return param_e;
  };
  const str_s = "[a-zA-Z_\\$][a-zA-Z_0-9]*";
  const str_c = "(?:'[^'\\\\]*(:?\\\\[\\s\\S][^'\\\\]*)*'|\"[^\"\\\\]*(:?\\\\[\\s\\S][^\"\\\\]*)*\")";
  const var_u = `(?:${str_s}
  |${str_c}
  )`;
  const var_l = `(?:\\.${str_s}
  |\\[${str_c}
  \\])`;
  const str_d = ":function\\(a\\)\\{(?:return )?a\\.reverse\\(\\)\\}";
  const str_p = ":function\\(a,b\\)\\{return a\\.slice\\(b\\)\\}";
  const str_f = ":function\\(a,b\\)\\{a\\.splice\\(0,b\\)\\}";
  const str_h = ":function\\(a,b\\)\\{var c=a\\[0\\];a\\[0\\]=a\\[b(?:%a\\.length)?\\];a\\[b(?:%a\\.length)?\\]=c(?:;return a)?\\}";
  const var_m = new RegExp(`var (${str_s}
  )=\\{((?:(?:${var_u}
  ${str_d}
  |${var_u}
  ${str_p}
  |${var_u}
  ${str_f}
  |${var_u}
  ${str_h}
  ),?\\r?\\n?)+)\\};`);
  const var_g = new RegExp(`function(?: ${str_s}
  )?\\(a\\)\\{a=a\\.split\\((?:''|"")\\);\\s*((?:(?:a=)?[a-zA-Z_\\$][a-zA-Z_0-9]*${var_l}
  \\(a,\\d+\\);)+)return a\\.join\\((?:''|"")\\)\\}`);
  const var_v = new RegExp(`(?:^|,)(${var_u}
  )${str_d}
  `, "m");
  const var_y = new RegExp(`(?:^|,)(${var_u}
  )${str_p}
  `, "m");
  const var__ = new RegExp(`(?:^|,)(${var_u}
  )${str_f}
  `, "m");
  const var_b = new RegExp(`(?:^|,)(${var_u}
  )${str_h}
  `, "m");
  exportsObj.extractActions = param_e => {
  const var_t = var_m.exec(param_e);
  const var_r = var_g.exec(param_e);
  if (!var_t || !var_r) {
  return null;
  }
  const var_n = var_t[1].replace(/\$/g, "\\$");
  const var_o = var_t[2].replace(/\$/g, "\\$");
  const var_i = var_r[1].replace(/\$/g, "\\$");
  let var_a = var_v.exec(var_o);
  const var_s = var_a && var_a[1].replace(/\$/g, "\\$").replace(/\$|^'|^"|'$|"$/g,
  "");
  var_a = var_y.exec(var_o);
  const var_c = var_a && var_a[1].replace(/\$/g, "\\$").replace(/\$|^'|^"|'$|"$/g,
  "");
  var_a = var__.exec(var_o);
  const var_u_1 = var_a && var_a[1].replace(/\$/g, "\\$").replace(/\$|^'|^"|'$|"$/g,
  "");
  var_a = var_b.exec(var_o);
  const var_l_1 = var_a && var_a[1].replace(/\$/g, "\\$").replace(/\$|^'|^"|'$|"$/g,
  "");
  const var_d = `(${[var_s, var_c, var_u_1, var_l_1].join("|")}
  )`;
  const var_p = new RegExp(`(?:a=)?${var_n}
  (?:\\.${var_d}
  |\\['${var_d}
  '\\]|\\["${var_d}
  "\\])\\(a,(\\d+)\\)`, "g");
  const list_f = [];
  while ((var_a = var_p.exec(var_i)) !== null) {
  switch (var_a[1] || var_a[2] || var_a[3]) {
  case var_l_1:
  list_f.push("w" + var_a[4]);
  break;
  case var_s:
  list_f.push("r");
  break;
  case var_c:
  list_f.push("s" + var_a[4]);
  break;
  case var_u_1:
  list_f.push("p" + var_a[4]);
  }
  }
  return list_f;
  };
  exportsObj.setDownloadURL = (param_e, param_t) => {
  let var_r;
  if (!param_e.url) {
  return;
  }
  var_r = param_e.url;
  try {
  var_r = decodeURIComponent(var_r);
  }
  catch (var_e) {
  return;
  }
  const var_n = new URL(var_r);
  var_n.searchParams.set("ratebypass", "yes");
  if (param_t) {
  var_n.searchParams.set(param_e.sp || "signature", param_t);
  }
  param_e.url = var_n.toString();
  };
  exportsObj.decipherFormats = async (param_e, param_r, param_o) => {
  let obj_i = {
  };
  let var_a = await exportsObj.getTokens(param_r, param_o);
  param_e.forEach(param_e_1 => {
  let var_r = param_e_1.signatureCipher || param_e_1.cipher;
  if (var_r) {
  Object.assign(param_e_1, dep_webrequest_filter.parse(var_r));
  delete param_e_1.signatureCipher;
  delete param_e_1.cipher;
  }
  const var_o = var_a && param_e_1.s ? exportsObj.decipher(var_a, param_e_1.s) :
  null;
  exportsObj.setDownloadURL(param_e_1, var_o);
  obj_i[param_e_1.url] = param_e_1;
  }
  );
  return obj_i;
  };
  };
