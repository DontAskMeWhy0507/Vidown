// Module 456 [downloads] - Chrome downloads API controller and file manager
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  (function (param_e) {
  var var_o;
  var dep_dom_utils = requireFn(0);
  var dep_feature_flags = requireFn(11);
  var dep_media_constants = requireFn(1);
  var dep_url_utils = requireFn(3);
  var dep_metrics_logger = requireFn(5);
  var dep_download_file_namer = requireFn(179);
  var_o = dep_feature_flags.a.NEW_MEDIA_DOWNLOAD ? chrome.downloads.combineStreams :
  chrome.mediaDownload?.combineStreams;
  exportsObj.a = new class {
  constructor() {
  this._callbacks = {
  };
  this._data = new Map();
  chrome.downloads.onChanged.addListener(param_e_1 => {
  var var_r;
  var var_s = this._data.get(param_e_1.id);
  if (var_s && param_e_1.error) {
  var var_c = var_s.tid;
  var_s.item.error = param_e_1.error.current;
  if (param_e_1.error.current !== "USER_CANCELED") {
  if ((var_r = (var_s == null ? undefined : var_s.item)?.referrer) === null ||
  var_r === undefined ? undefined : var_r.includes("youtube.com")) {
  dep_metrics_logger.a.log("Download", dep_metrics_logger.a.DOWNLOAD_YOUTUBE_ERROR);
  }
  dep_dom_utils.logDownloadError({
  url: JSON.stringify(var_s.item?.url),
  referrer: var_s.item?.referrer,
  error: param_e_1.error.current || "Error: After call download API"
  }
  );
  EE.emit("download_error", {
  tabId: var_c,
  type: "download_error",
  params: var_s.item
  }
  );
  }
  else {
  EE.emit("finish_download", {
  tabId: var_c,
  type: "download_canceled",
  params: var_s.item
  }
  );
  }
  this._handleError(param_e_1.error.current, var_s);
  }
  if (param_e_1.state && param_e_1.state.current === "complete") {
  var var_l = this._data.get(param_e_1.id);
  if (!(var_l == null ? undefined : var_l.item)) {
  return;
  }
  var_l.item.playable = param_e_1.playable?.current;
  var_l.item.state = "complete";
  var var_d = var_l.tid;
  EE.emit("finish_download", {
  tabId: var_d,
  type: "widget_playnow",
  params: var_l.item
  }
  );
  }
  }
  );
  chrome.tabs.onRemoved.addListener(param_e_1 => {
  if (typeof this._callbacks == "object") {
  delete this._callbacks[param_e_1];
  }
  if (typeof this._tabMedia2id == "object") {
  delete this._tabMedia2id[param_e_1];
  }
  }
  );
  }
  processRequest(param_e_1, param_t, param_r, param_n) {
  switch (param_t) {
  case "download":
  return this.download(param_e_1, param_r, param_n);
  case "play":
  this.play(param_r);
  }
  }
  _handleError(param_e_1, param_t) {
  var var_r;
  if (param_e_1) {
  if (param_e_1 !== "USER_CANCELED") {
  if (param_e_1.indexOf("SERVER_") === 0) {
  var_r = "RefrSE";
  }
  else if (param_e_1.indexOf("FILE_") === 0) {
  var_r = "RefrFE";
  }
  if (var_r) {
  dep_metrics_logger.a.log(var_r, param_t.ref);
  }
  }
  else {
  dep_metrics_logger.a.log("Download", dep_metrics_logger.a.DOWNLOAD_CANCELED);
  }
  }
  }
  _options(param_t, param_r) {
  var var_n;
  var var_c;
  var var_u;
  var var_d;
  var var_p;
  var var_f;
  var var_h;
  var var_m;
  try {
  param_t.filename = ((var_n = param_t.filename) === null ||
  var_n === undefined ? undefined : var_n.match(/[*~]/gi)) ?
  "_" + param_t.filename.replace(/[*~]/gi, ".") : param_t.filename;
  var regex_g = /(?:(?![ -\x7F\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0345\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0558\u0559\u0560-\u0588\u058B\u058C\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088F\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5C\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDC-\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2026\u2071\u207F\u208F-\u209F\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7DD\uA7E2\uA7F1-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB6C\uAB6D\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uD800-\uDFFF\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC])[^]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEFF\uDF20-\uDF2C\uDF41\uDF4A-\uDF4F\uDF76-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0-\uDFFF]|\uD801[\uDC9E-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDD6F\uDD7B\uDD8B\uDD93\uDD96\uDDA2\uDDB2\uDDBA\uDDBD-\uDDBF\uDDF4-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDF7F\uDF86\uDFB1\uDFC0-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD3F\uDD5A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE01-\uDE0F\uDE14\uDE18\uDE36-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE5-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD24-\uDD49\uDD66-\uDD6E\uDD86-\uDE7F\uDEAA-\uDEAF\uDEB2-\uDEC1\uDEC8-\uDED8\uDEEF-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF46-\uDF6F\uDF82-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC00-\uDC02\uDC38-\uDC70\uDC73\uDC74\uDC76-\uDC82\uDCB0-\uDCCF\uDCE9-\uDD02\uDD27-\uDD43\uDD45\uDD46\uDD48-\uDD4F\uDD73-\uDD75\uDD77-\uDD82\uDDB3-\uDDC0\uDDC5-\uDDD9\uDDDB\uDDDD-\uDDFF\uDE12\uDE2C-\uDE3E\uDE41-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEDF-\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A-\uDF3C\uDF3E-\uDF4F\uDF51-\uDF5C\uDF62-\uDF7F\uDF8A\uDF8C\uDF8D\uDF8F\uDFB6\uDFB8-\uDFD0\uDFD2\uDFD4-\uDFFF]|\uD805[\uDC35-\uDC46\uDC4B-\uDC5E\uDC62-\uDC7F\uDCB0-\uDCC3\uDCC6\uDCC8-\uDD7F\uDDAF-\uDDD7\uDDDC-\uDDFF\uDE30-\uDE43\uDE45-\uDE7F\uDEAB-\uDEB7\uDEB9-\uDEFF\uDF1B-\uDF3F\uDF47-\uDFFF]|\uD806[\uDC2C-\uDC9F\uDCE0-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD30-\uDD3E\uDD40\uDD42-\uDD9F\uDDA8\uDDA9\uDDD1-\uDDE0\uDDE2\uDDE4-\uDDFF\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE4F\uDE51-\uDE5B\uDE8A-\uDE9C\uDE9E-\uDEAF\uDEF9-\uDF09\uDF0B-\uDFBF\uDFE1-\uDFFF]|\uD807[\uDC09\uDC2F-\uDC3F\uDC41-\uDC71\uDC90-\uDCFF\uDD07\uDD0A\uDD31-\uDD45\uDD47-\uDD5F\uDD66\uDD69\uDD8A-\uDD97\uDD99-\uDDAF\uDDDC-\uDDF0\uDDF2-\uDEDF\uDEF3-\uDF01\uDF03\uDF11\uDF34-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC00-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD812-\uD817\uD819\uD825-\uD82A\uD82D\uD82E\uD830-\uD834\uD836\uD83C-\uD83F\uD87C\uD87D\uD87F\uD88E-\uD8B3\uD8C0-\uDBFF][\uDC00-\uDFFF]|\uD80B[\uDC00-\uDF8F\uDFF1-\uDFFF]|\uD80D[\uDC30-\uDC40\uDC47-\uDC5F]|\uD810[\uDFFB-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD818[\uDC00-\uDCFF\uDD1E-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F-\uDE6F\uDEBF-\uDECF\uDEEE-\uDEFF\uDF30-\uDF3F\uDF44-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDD3F\uDD6D-\uDE3F\uDE80-\uDE9F\uDEB9\uDEBA\uDED4-\uDEFF\uDF4B-\uDF4F\uDF51-\uDF92\uDFA0-\uDFDF\uDFE2\uDFE4-\uDFF1\uDFF4-\uDFFF]|\uD823[\uDCDB-\uDCFE\uDD21-\uDD7F\uDDF3-\uDDFF]|\uD824[\uDD92-\uDD9F\uDDD3-\uDFFF]|\uD82B[\uDC00-\uDFEF\uDFF4\uDFFC\uDFFF]|\uD82C[\uDD29-\uDD31\uDD33-\uDD4F\uDD53\uDD54\uDD56-\uDD63\uDD69-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC-\uDFFF]|\uD837[\uDC00-\uDEFF\uDF82-\uDF8F\uDF97-\uDFCC]|\uD838[\uDC00-\uDC2F\uDC6E-\uDCFF\uDD2D-\uDD36\uDD3E-\uDD4D\uDD4F-\uDE8F\uDEAE-\uDEBF\uDEEC-\uDFFF]|\uD839[\uDC00-\uDCCF\uDCEC-\uDDCF\uDDEE\uDDEF\uDDF1-\uDEBF\uDEDF\uDEE3\uDEE6\uDEEE\uDEEF\uDEF5-\uDEFD\uDF00-\uDFDF\uDFE7\uDFEC\uDFEF\uDFFF]|\uD83A[\uDCC5-\uDCFF\uDD44-\uDD4A\uDD4C-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD869[\uDEE0-\uDEFF]|\uD86E\uDC1F|\uD873[\uDEAE\uDEAF]|\uD87A[\uDFE1-\uDFEF]|\uD87B[\uDE5E-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDF4F]|\uD88D[\uDC7A-\uDFFF]|\uD8BF[\uDC40-\uDFFF])+/gi;
  if (param_t.filename && param_t.filename.match(regex_g)) {
  var var_v = param_t.filename.replace(regex_g, "").trim();
  var var_y = var_v.split(".")[0].trim().length;
  param_t.filename = (var_y > 0 ? var_v : param_t.filename.replace(regex_g, "-")).trim(
  );
  }
  }
  catch (var_e) {
  console.warn(var_e);
  }
  param_t.filename &&= param_t.filename.replace(/\/|\\|\:|\*|\?|\"|\>|\<|\|/g, "");
  var obj__ = {
  filename: param_t.filename.trim()
  };
  var var_b = param_t.url;
  if (typeof var_b == "object") {
  if (!var_b.videoUrl || !var_b.audioUrl) {
  return {
  filename: ""
  };
  }
  if (var_o) {
  obj__.videoUrl = var_b.videoUrl;
  obj__.audioUrl = var_b.audioUrl;
  }
  else {
  obj__.url = var_b.videoUrl;
  }
  }
  else {
  obj__.url = var_b;
  }
  if (var_o) {
  var var_w = param_t.referrer;
  if (var_w) {
  obj__.referrer = var_w;
  }
  var var_E = [obj__.url, obj__.audioUrl, obj__.videoUrl].filter(dep_dom_utils.defined);
  if (dep_dom_utils.isMatches(var_E, dep_media_constants.l)) {
  obj__.streamsNumber = 1;
  }
  if ((param_t.hls || param_t.dashMPD) && param_t.type !== "subtitles") {
  if (param_t.hls) {
  obj__.convertToMp4 = true;
  obj__.streamsNumber = dep_download_file_namer.a.HLS;
  if (typeof var_b == "string" && var_b.match(/khophim18\.net\/m3u8/)) {
  obj__.convertToMp4 = false;
  }
  }
  if (param_t.dashMPD) {
  obj__.streamsNumber = dep_download_file_namer.a.DASH_MPD;
  }
  if (param_t.skipConvert || typeof var_b == "object") {
  delete obj__.convertToMp4;
  }
  }
  if (dep_feature_flags.a.DOWNLOAD.M3U8_AUDIO && param_t.type === "audio") {
  delete obj__.convertToMp4;
  obj__.convertToMp3 = true;
  }
  }
  if (param_t.soundOnly !== undefined) {
  obj__.soundOnly = param_t.soundOnly;
  if (param_t.soundOnly && obj__.streamsNumber === dep_download_file_namer.a.HLS) {
  var var_D = (var_c = param_t.extraData) === null || var_c === undefined ?
  undefined : var_c.findIndex(param_e_1 => param_e_1.name === "audio_playlist");
  if (var_D && var_D > -1) {
  param_t.play_list = (var_u = param_t.extraData) === null ||
  var_u === undefined ? undefined : var_u[var_D].value;
  if ((var_d = param_t.extraData) !== null && var_d !== undefined) {
  var_d.splice(var_D, 1);
  }
  }
  var var_T = (var_p = param_t.extraData) === null || var_p === undefined ?
  undefined : var_p.findIndex(param_e_1 => param_e_1.name === "video_playlist");
  if (var_T && var_T > -1) {
  if ((var_f = param_t.extraData) !== null && var_f !== undefined) {
  var_f.splice(var_T, 1);
  }
  }
  }
  obj__.soundQuality = param_t.resolution ? parseInt(param_t.resolution) :
  128;
  }
  if (param_t.dashMPD && param_t.dashVideoId) {
  obj__.videoId = "" + param_t.dashVideoId;
  }
  if (param_t.play_list) {
  obj__.playList = param_t.play_list;
  }
  if (param_t.hls && param_t.dashVideoId) {
  obj__.videoId = param_t.dashVideoId;
  }
  var var_k = new URL(param_t.referrer || param_e.tab_url).origin;
  var list_A = [{
  name: "tab_url",
  value: param_t.referrer || param_e.tab_url || (param_r == null ?
  undefined : param_r.url)
  }
  , {
  name: "origin",
  value: var_k || (param_r == null ? undefined : param_r.url)
  }
  ];
  if (param_t.removeOrigin) {
  list_A.splice(1, 1);
  }
  obj__.extraData = [...(param_t.extraData || [])];
  if (param_t.secFetchModeCors) {
  obj__.extraData.push({
  name: "Sec-Fetch-Mode",
  value: "cors"
  }
  );
  }
  if (param_t.hlsKeyMem) {
  obj__.extraData.push({
  name: "hlsKeyMem",
  value: param_t.hlsKeyMem
  }
  );
  }
  if (!((var_h = param_t.extraData) === null || var_h === undefined ?
  undefined : var_h.some(param_e_1 => param_e_1.name == "tab_url"))) {
  obj__.extraData.push(...list_A);
  }
  var regex_C = /\.yt_srt$/i;
  if ((var_m = param_t.filename) === null || var_m === undefined ?
  undefined : var_m.match(regex_C)) {
  obj__.isYoutubeSubtitles = true;
  obj__.filename = obj__.filename.replace(regex_C, ".srt");
  }
  if (param_t.skipReferrer) {
  delete obj__.referrer;
  }
  return obj__;
  }
  download(param_e_1, param_t, param_r) {
  var var_n = this;
  var var_i = param_t.referrer;
  return new Promise(param_s => {
  var var_l;
  var var_d;
  var var_p;
  function var_f(param_o) {
  if (param_o) {
  param_t.playId = param_o;
  param_t.succeed = true;
  var obj_a = {
  tid: param_e_1,
  item: param_t
  };
  var var_l_1 = Object(dep_url_utils.c)(var_i);
  var_n._data.set(param_o, obj_a);
  try {
  if (false && param_t.useDoubleDownloadTrick) {
  var var_d_1 = var_n._options(param_t, param_r);
  var_d_1.url = var_m.videoUrl || var_m.url;
  delete var_d_1.videoUrl;
  delete var_d_1.audioUrl;
  var_d_1.saveAs = false;
  chrome.downloads.download(var_d_1, param_e_2 => {
  chrome.downloads.cancel(param_e_2, () => {
  chrome.downloads.erase({
  id: param_e_2
  }
  );
  }
  );
  }
  );
  }
  }
  catch (var_e) {
  }
  dep_metrics_logger.a.log("Refr", var_l_1);
  param_s(obj_a.item);
  return;
  }
  param_t.error = chrome.runtime.lastError;
  param_s(param_t);
  }
  if (typeof param_t.url == "object" && ((var_l = param_t.referrer) === null ||
  var_l === undefined ? undefined : var_l.match(/vieon.vn|xemxx.me|www.skillshare.com|mphimmoitv\.com|hentaiz\./g)) &&
  param_t.hls) {
  param_t.hls = false;
  }
  var var_h;
  var var_m = var_n._options(param_t, param_r);
  if (var_m) {
  if (var_m.url) {
  var_m.conflictAction = "uniquify";
  if (((var_d = var_m == null ? undefined : var_m.referrer) === null ||
  var_d === undefined ? undefined : var_d.match(/(https:\/\/trangtainhac\.com)|(http:\/\/animehay\.tv)|(https:\/\/salaphim\.com)|(https:\/\/lucaphim\.com)|(https:\/\/[\s\S]+\.yeuphim18x\.com)|(https:\/\/[\s\S]*hentaipro\.net)|(z[\d]+hay\.xyz)|(\.xyz\/video\.mp4\?hash=[a-z0-9]+.*&key=lbs\.cdnproxy\.xyz)|(https:\/\/vlxyz\.net)|(\/m3u8-rd\.[\s\S]+\.xyz\/m3u8)|(https:\/\/vjav\.com\/videos)|(static-video\.vnncdn\.net\/videos\/.+\.m3u8)|(kazastream\.xyz)/i)) ||
  ((var_p = var_m == null ? undefined : var_m.url) === null ||
  var_p === undefined ? undefined : var_p.match(/(hrspeed\.net)/i))) {
  delete var_m.referrer;
  }
  chrome.downloads.download(var_m, var_f);
  }
  else {
  delete var_m.convertToMp4;
  delete var_m.playList;
  var_o(var_m, var_f);
  }
  }
  else {
  var_f();
  }
  chrome.storage.local.get(["onboardTrack"], param_e_2 => {
  (var_h = param_e_2.onboardTrack || {
  }
  ).usingDownload = {
  lastUsed: Date.now()
  };
  chrome.storage.local.set({
  onboardTrack: var_h
  }
  );
  }
  );
  if (var_m.referrer && var_m.referrer.includes("youtube.com")) {
  var var_g = var_m.filename.split(".").pop();
  dep_metrics_logger.a.logYtExtension(var_g);
  }
  if (dep_feature_flags.a.CUSTOM_METRICS_JSON && var_m.referrer) {
  var obj_v = {
  timestamp_ms: Date.now(),
  page_url: var_m.referrer
  };
  if (var_m.url) {
  obj_v.download_url = var_m.url;
  }
  else {
  obj_v.download_url = {
  audio: var_m.audioUrl,
  video: var_m.videoUrl
  };
  }
  dep_metrics_logger.a.log("recordCustomData", [{
  key: "savior_download_start",
  value: JSON.stringify(obj_v)
  }
  ]);
  }
  }
  );
  }
  play(param_e_1) {
  chrome.downloads.play(param_e_1);
  }
  }
  ();
  }
  ).call(this, requireFn(13));
  };
