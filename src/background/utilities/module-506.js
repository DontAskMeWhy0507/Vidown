// Module 506 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  (function (e) {
    var n = r(708);
    var o = r(508);
    var i = r(715);
    var a = r(716);
    var s = r(515);
    var c = t;
    c.request = function (t, r) {
      t = typeof t == "string" ? s.parse(t) : i(t);
      var o = e.location.protocol.search(/^https?:$/) === -1 ? "http:" : "";
      var a = t.protocol || o;
      var c = t.hostname || t.host;
      var u = t.port;
      var l = t.path || "/";
      if (c && c.indexOf(":") !== -1) {
        c = "[" + c + "]";
      }
      t.url = (c ? a + "//" + c : "") + (u ? ":" + u : "") + l;
      t.method = (t.method || "GET").toUpperCase();
      t.headers = t.headers || {};
      var d = new n(t);
      if (r) {
        d.on("response", r);
      }
      return d;
    };
    c.get = function (e, t) {
      var r = c.request(e, t);
      r.end();
      return r;
    };
    c.ClientRequest = n;
    c.IncomingMessage = o.IncomingMessage;
    c.Agent = function () {};
    c.Agent.defaultMaxSockets = 4;
    c.globalAgent = new c.Agent();
    c.STATUS_CODES = a;
    c.METHODS = ["CHECKOUT", "CONNECT", "COPY", "DELETE", "GET", "HEAD", "LOCK", "M-SEARCH", "MERGE", "MKACTIVITY", "MKCOL", "MOVE", "NOTIFY", "OPTIONS", "PATCH", "POST", "PROPFIND", "PROPPATCH", "PURGE", "PUT", "REPORT", "SEARCH", "SUBSCRIBE", "TRACE", "UNLOCK", "UNSUBSCRIBE"];
  }).call(this, r(13));
};
