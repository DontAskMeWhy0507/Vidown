// Module 708 [events] - Savior Background Script Subsystem
export default function (e, t, r) {
  (function (t, n, o) {
    var i = r(507);
    var a = r(15);
    var s = r(508);
    var c = r(509);
    var u = r(714);
    var l = s.IncomingMessage;
    var d = s.readyStates;
    var p = e.exports = function (e) {
      var r;
      var n = this;
      c.Writable.call(n);
      n._opts = e;
      n._body = [];
      n._headers = {};
      if (e.auth) {
        n.setHeader("Authorization", "Basic " + new t(e.auth).toString("base64"));
      }
      Object.keys(e.headers).forEach(function (t) {
        n.setHeader(t, e.headers[t]);
      });
      var o = true;
      if (e.mode === "disable-fetch" || "requestTimeout" in e && !i.abortController) {
        o = false;
        r = true;
      } else if (e.mode === "prefer-streaming") {
        r = false;
      } else if (e.mode === "allow-wrong-content-type") {
        r = !i.overrideMimeType;
      } else {
        if (e.mode && e.mode !== "default" && e.mode !== "prefer-fast") {
          throw new Error("Invalid value for opts.mode");
        }
        r = true;
      }
      n._mode = function (e, t) {
        if (i.fetch && t) {
          return "fetch";
        } else if (i.mozchunkedarraybuffer) {
          return "moz-chunked-arraybuffer";
        } else if (i.msstream) {
          return "ms-stream";
        } else if (i.arraybuffer && e) {
          return "arraybuffer";
        } else if (i.vbArray && e) {
          return "text:vbarray";
        } else {
          return "text";
        }
      }(r, o);
      n._fetchTimer = null;
      n.on("finish", function () {
        n._onFinish();
      });
    };
    a(p, c.Writable);
    p.prototype.setHeader = function (e, t) {
      var r = e.toLowerCase();
      if (f.indexOf(r) === -1) {
        this._headers[r] = {
          name: e,
          value: t
        };
      }
    };
    p.prototype.getHeader = function (e) {
      var t = this._headers[e.toLowerCase()];
      if (t) {
        return t.value;
      } else {
        return null;
      }
    };
    p.prototype.removeHeader = function (e) {
      delete this._headers[e.toLowerCase()];
    };
    p.prototype._onFinish = function () {
      var e = this;
      if (!e._destroyed) {
        var r = e._opts;
        var a = e._headers;
        var s = null;
        if (r.method !== "GET" && r.method !== "HEAD") {
          s = i.arraybuffer ? u(t.concat(e._body)) : i.blobConstructor ? new n.Blob(e._body.map(function (e) {
            return u(e);
          }), {
            type: (a["content-type"] || {}).value || ""
          }) : t.concat(e._body).toString();
        }
        var c = [];
        Object.keys(a).forEach(function (e) {
          var t = a[e].name;
          var r = a[e].value;
          if (Array.isArray(r)) {
            r.forEach(function (e) {
              c.push([t, e]);
            });
          } else {
            c.push([t, r]);
          }
        });
        if (e._mode === "fetch") {
          var l = null;
          if (i.abortController) {
            var p = new AbortController();
            l = p.signal;
            e._fetchAbortController = p;
            if ("requestTimeout" in r && r.requestTimeout !== 0) {
              e._fetchTimer = n.setTimeout(function () {
                e.emit("requestTimeout");
                if (e._fetchAbortController) {
                  e._fetchAbortController.abort();
                }
              }, r.requestTimeout);
            }
          }
          n.fetch(e._opts.url, {
            method: e._opts.method,
            headers: c,
            body: s || undefined,
            mode: "cors",
            credentials: r.withCredentials ? "include" : "same-origin",
            signal: l
          }).then(function (t) {
            e._fetchResponse = t;
            e._connect();
          }, function (t) {
            n.clearTimeout(e._fetchTimer);
            if (!e._destroyed) {
              e.emit("error", t);
            }
          });
        } else {
          var f = e._xhr = new n.XMLHttpRequest();
          try {
            f.open(e._opts.method, e._opts.url, true);
          } catch (t) {
            o.nextTick(function () {
              e.emit("error", t);
            });
            return;
          }
          if ("responseType" in f) {
            f.responseType = e._mode.split(":")[0];
          }
          if ("withCredentials" in f) {
            f.withCredentials = !!r.withCredentials;
          }
          if (e._mode === "text" && "overrideMimeType" in f) {
            f.overrideMimeType("text/plain; charset=x-user-defined");
          }
          if ("requestTimeout" in r) {
            f.timeout = r.requestTimeout;
            f.ontimeout = function () {
              e.emit("requestTimeout");
            };
          }
          c.forEach(function (e) {
            f.setRequestHeader(e[0], e[1]);
          });
          e._response = null;
          f.onreadystatechange = function () {
            switch (f.readyState) {
              case d.LOADING:
              case d.DONE:
                e._onXHRProgress();
            }
          };
          if (e._mode === "moz-chunked-arraybuffer") {
            f.onprogress = function () {
              e._onXHRProgress();
            };
          }
          f.onerror = function () {
            if (!e._destroyed) {
              e.emit("error", new Error("XHR error"));
            }
          };
          try {
            f.send(s);
          } catch (t) {
            o.nextTick(function () {
              e.emit("error", t);
            });
            return;
          }
        }
      }
    };
    p.prototype._onXHRProgress = function () {
      if (function (e) {
        try {
          var t = e.status;
          return t !== null && t !== 0;
        } catch (e) {
          return false;
        }
      }(this._xhr) && !this._destroyed) {
        if (!this._response) {
          this._connect();
        }
        this._response._onXHRProgress();
      }
    };
    p.prototype._connect = function () {
      var e = this;
      if (!e._destroyed) {
        e._response = new l(e._xhr, e._fetchResponse, e._mode, e._fetchTimer);
        e._response.on("error", function (t) {
          e.emit("error", t);
        });
        e.emit("response", e._response);
      }
    };
    p.prototype._write = function (e, t, r) {
      this._body.push(e);
      r();
    };
    p.prototype.abort = p.prototype.destroy = function () {
      this._destroyed = true;
      n.clearTimeout(this._fetchTimer);
      if (this._response) {
        this._response._destroyed = true;
      }
      if (this._xhr) {
        this._xhr.abort();
      } else if (this._fetchAbortController) {
        this._fetchAbortController.abort();
      }
    };
    p.prototype.end = function (e, t, r) {
      if (typeof e == "function") {
        r = e;
        e = undefined;
      }
      c.Writable.prototype.end.call(this, e, t, r);
    };
    p.prototype.flushHeaders = function () {};
    p.prototype.setTimeout = function () {};
    p.prototype.setNoDelay = function () {};
    p.prototype.setSocketKeepAlive = function () {};
    var f = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "date", "dnt", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "via"];
  }).call(this, r(27).Buffer, r(13), r(32));
};
