// Module 114 - Savior Url Decryption Provider
export default function (moduleObj, exportsObj) {
  const var_r = new TextEncoder(),
  var_n = new TextDecoder();
  function var_i(param_t) {
  const var_e = new Uint8Array(param_t.length / 2);
  for (let num_r = 0;
  num_r < param_t.length;
  num_r += 2) var_e[num_r / 2] = Number.parseInt(param_t.slice(num_r, num_r + 2),
  16);
  return var_e;
  }
  function var_o(param_t) {
  const var_e = atob(param_t),
  var_r_1 = new Uint8Array(var_e.length);
  for (let num_t = 0;
  num_t < var_e.length;
  num_t++) var_r_1[num_t] = var_e.charCodeAt(num_t);
  return var_r_1;
  }
  moduleObj.exports = {
  hexToBytes: var_i,
  base64ToBytes: var_o,
  parseVideoHashFromObf: function (param_t) {
  const var_e = JSON.parse(atob(param_t)),
  var_r_1 = null == var_e ? void 0 : var_e.hD;
  if (!var_r_1) throw new Error("Session JSON missing hD video hash");
  return var_r_1;
  }
  ,
  parseKXFromNonce: function (param_t) {
  const var_e = JSON.parse(atob(param_t)),
  var_r_1 = null == var_e ? void 0 : var_e.kX;
  if (!var_r_1) throw new Error("Session JSON missing kX key");
  return var_r_1;
  }
  ,
  decryptM3U8: async function (param_t, param_e) {
  const var_a = param_t.split("\n");
  let str_s = "",
  str_u = "";
  for (let var_t of var_a) if (var_t = var_t.trim(), var_t.startsWith("#ENC-AESGCM")) {
  const var_e = var_t.match(/iv=([a-fA-F0-9]+)/);
  var_e && (str_s = var_e[1]);
  }
  else var_t && !var_t.startsWith("#") && (str_u = var_t);
  if (!str_s || !str_u) throw new Error("Invalid encrypted m3u8: missing #ENC-AESGCM iv or ciphertext line");
  if (!param_e) throw new Error("Missing video hash for decryption");
  const var_c = var_i(str_s),
  var_l = var_o(str_u),
  var_f = var_l.slice(0, -16),
  var_d = var_l.slice(-16),
  var_h = new Uint8Array(var_f.length + var_d.length);
  var_h.set(var_f), var_h.set(var_d, var_f.length);
  const var_p = await async function (param_t_1) {
  const var_e = await crypto.subtle.importKey("raw", var_r.encode("stream-derive-v1"),
  {
  name: "HMAC",
  hash: "SHA-256"
  }
  , !1, ["sign"]),
  var_n_1 = await crypto.subtle.sign("HMAC", var_e, var_r.encode(param_t_1));
  return new Uint8Array(var_n_1).slice(0, 32);
  }
  (param_e),
  var_v = await crypto.subtle.importKey("raw", var_p, {
  name: "AES-GCM"
  }
  , !1, ["decrypt"]),
  var_m = await crypto.subtle.decrypt({
  name: "AES-GCM",
  iv: var_c,
  tagLength: 128
  }
  , var_v, var_h);
  return var_n.decode(var_m);
  }
  ,
  decryptM3U8WithKX: async function (param_t, param_e) {
  const var_a = param_t.split("\n");
  let str_s = "",
  str_u = "";
  for (let var_t of var_a) if (var_t = var_t.trim(), var_t.startsWith("#ENC-AESGCM")) {
  const var_e = var_t.match(/iv=([a-fA-F0-9]+)/);
  var_e && (str_s = var_e[1]);
  }
  else var_t && !var_t.startsWith("#") && (str_u = var_t);
  if (!str_s || !str_u) throw new Error("Invalid encrypted m3u8: missing #ENC-AESGCM iv or ciphertext line");
  const var_c = var_i(str_s),
  var_l = var_o(str_u),
  var_f = var_r.encode(param_e).slice(0, 32),
  var_d = await crypto.subtle.importKey("raw", var_f, {
  name: "AES-GCM"
  }
  , !1, ["decrypt"]),
  var_h = await crypto.subtle.decrypt({
  name: "AES-GCM",
  iv: var_c,
  tagLength: 128
  }
  , var_d, var_l);
  return var_n.decode(var_h);
  }
  };
  };
