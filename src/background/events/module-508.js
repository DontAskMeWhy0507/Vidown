// Module 508 [events] - Savior Background Script Subsystem
export default function (e, t, r) {
  (function (e, n, o) {
    var i = r(507);
    var a = r(15);
    var s = r(509);
    var c = t.readyStates = {
      UNSENT: 0,
      OPENED: 1,
      HEADERS_RECEIVED: 2,
      LOADING: 3,
      DONE: 4
    };
    var u = t.IncomingMessage = function (t, r, a, c) {
      var u = this;
      s.Readable.call(u);
      u._mode = a;
      u.headers = {};
      u.rawHeaders = [];
      u.trailers = {};
      u.rawTrailers = [];
      u.on("end", function () {
        e.nextTick(function () {
          u.emit("close");
        });
      });
      if (a === "fetch") {
        u._fetchResponse = r;
        u.url = r.url;
        u.statusCode = r.status;
        u.statusMessage = r.statusText;
        r.headers.forEach(function (e, t) {
          u.headers[t.toLowerCase()] = e;
          u.rawHeaders.push(t, e);
        });
        if (i.writableStream) {
          var l = new WritableStream({
            write: function (e) {
              return new Promise(function (t, r) {
                if (u._destroyed) {
                  r();
                } else if (u.push(new n(e))) {
                  t();
                } else {
                  u._resumeFetch = t;
                }
              });
            },
            close: function () {
              o.clearTimeout(c);
              if (!u._destroyed) {
                u.push(null);
              }
            },
            abort: function (e) {
              if (!u._destroyed) {
                u.emit("error", e);
              }
            }
          });
          try {
            r.body.pipeTo(l).catch(function (e) {
              o.clearTimeout(c);
              if (!u._destroyed) {
                u.emit("error", e);
              }
            });
            return;
          } catch (e) {}
        }
        var d = r.body.getReader();
        (function e() {
          d.read().then(function (t) {
            if (!u._destroyed) {
              if (t.done) {
                o.clearTimeout(c);
                u.push(null);
                return;
              }
              u.push(new n(t.value));
              e();
            }
          }).catch(function (e) {
            o.clearTimeout(c);
            if (!u._destroyed) {
              u.emit("error", e);
            }
          });
        })();
      } else {
        u._xhr = t;
        u._pos = 0;
        u.url = t.responseURL;
        u.statusCode = t.status;
        u.statusMessage = t.statusText;
        t.getAllResponseHeaders().split(/\r?\n/).forEach(function (e) {
          var t = e.match(/^([^:]+):\s*(.*)/);
          if (t) {
            var r = t[1].toLowerCase();
            if (r === "set-cookie") {
              if (u.headers[r] === undefined) {
                u.headers[r] = [];
              }
              u.headers[r].push(t[2]);
            } else if (u.headers[r] !== undefined) {
              u.headers[r] += ", " + t[2];
            } else {
              u.headers[r] = t[2];
            }
            u.rawHeaders.push(t[1], t[2]);
          }
        });
        u._charset = "x-user-defined";
        if (!i.overrideMimeType) {
          var p = u.rawHeaders["mime-type"];
          if (p) {
            var f = p.match(/;\s*charset=([^;])(;|$)/);
            if (f) {
              u._charset = f[1].toLowerCase();
            }
          }
          u._charset ||= "utf-8";
        }
      }
    };
    a(u, s.Readable);
    u.prototype._read = function () {
      var e = this._resumeFetch;
      if (e) {
        this._resumeFetch = null;
        e();
      }
    };
    u.prototype._onXHRProgress = function () {
      var e = this;
      var t = e._xhr;
      var r = null;
      switch (e._mode) {
        case "text:vbarray":
          if (t.readyState !== c.DONE) {
            break;
          }
          try {
            r = new o.VBArray(t.responseBody).toArray();
          } catch (e) {}
          if (r !== null) {
            e.push(new n(r));
            break;
          }
        case "text":
          try {
            r = t.responseText;
          } catch (t) {
            e._mode = "text:vbarray";
            break;
          }
          if (r.length > e._pos) {
            var i = r.substr(e._pos);
            if (e._charset === "x-user-defined") {
              var a = new n(i.length);
              for (var s = 0; s < i.length; s++) {
                a[s] = i.charCodeAt(s) & 255;
              }
              e.push(a);
            } else {
              e.push(i, e._charset);
            }
            e._pos = r.length;
          }
          break;
        case "arraybuffer":
          if (t.readyState !== c.DONE || !t.response) {
            break;
          }
          r = t.response;
          e.push(new n(new Uint8Array(r)));
          break;
        case "moz-chunked-arraybuffer":
          r = t.response;
          if (t.readyState !== c.LOADING || !r) {
            break;
          }
          e.push(new n(new Uint8Array(r)));
          break;
        case "ms-stream":
          r = t.response;
          if (t.readyState !== c.LOADING) {
            break;
          }
          var u = new o.MSStreamReader();
          u.onprogress = function () {
            if (u.result.byteLength > e._pos) {
              e.push(new n(new Uint8Array(u.result.slice(e._pos))));
              e._pos = u.result.byteLength;
            }
          };
          u.onload = function () {
            e.push(null);
          };
          u.readAsArrayBuffer(r);
      }
      if (e._xhr.readyState === c.DONE && e._mode !== "ms-stream") {
        e.push(null);
      }
    };
  }).call(this, r(32), r(27).Buffer, r(13));
};
