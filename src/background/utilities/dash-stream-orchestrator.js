// Module 506 [utilities] - DASH / HLS stream download orchestrator
export default function (moduleObj, exportsObj, requireFn) {
  (function (param_e) {
  var dep_stream_chunk_parser = requireFn(708);
  var dep_stream_codec_events = requireFn(508);
  var dep_hls_manifest_fetcher = requireFn(715);
  var dep_dash_mpd_fetcher = requireFn(716);
  var dep_stream_downloader_factory = requireFn(515);
  var var_c = exportsObj;
  var_c.request = function (param_t, param_r) {
  param_t = typeof param_t == "string" ? dep_stream_downloader_factory.parse(param_t) :
  dep_hls_manifest_fetcher(param_t);
  var var_o = param_e.location.protocol.search(/^https?:$/) === -1 ?
  "http:" : "";
  var var_a = param_t.protocol || var_o;
  var var_c_1 = param_t.hostname || param_t.host;
  var var_u = param_t.port;
  var var_l = param_t.path || "/";
  if (var_c_1 && var_c_1.indexOf(":") !== -1) {
  var_c_1 = "[" + var_c_1 + "]";
  }
  param_t.url = (var_c_1 ? var_a + "//" + var_c_1 : "") + (var_u ?
  ":" + var_u : "") + var_l;
  param_t.method = (param_t.method || "GET").toUpperCase();
  param_t.headers = param_t.headers || {
  };
  var var_d = new dep_stream_chunk_parser(param_t);
  if (param_r) {
  var_d.on("response", param_r);
  }
  return var_d;
  };
  var_c.get = function (param_e_1, param_t) {
  var var_r = var_c.request(param_e_1, param_t);
  var_r.end();
  return var_r;
  };
  var_c.ClientRequest = dep_stream_chunk_parser;
  var_c.IncomingMessage = dep_stream_codec_events.IncomingMessage;
  var_c.Agent = function () {
  };
  var_c.Agent.defaultMaxSockets = 4;
  var_c.globalAgent = new var_c.Agent();
  var_c.STATUS_CODES = dep_dash_mpd_fetcher;
  var_c.METHODS = ["CHECKOUT", "CONNECT", "COPY", "DELETE", "GET", "HEAD", "LOCK",
  "M-SEARCH", "MERGE", "MKACTIVITY", "MKCOL", "MOVE", "NOTIFY", "OPTIONS", "PATCH",
  "POST", "PROPFIND", "PROPPATCH", "PURGE", "PUT", "REPORT", "SEARCH", "SUBSCRIBE",
  "TRACE", "UNLOCK", "UNSUBSCRIBE"];
  }
  ).call(this, requireFn(13));
  };
