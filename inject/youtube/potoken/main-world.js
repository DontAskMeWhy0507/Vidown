(async () => {
  var r = document.body.getAttribute("savior-video-id");
  if (r) {
    if (window.mintAsWebsafeString) {
      let e = await window.mintAsWebsafeString(r);
      document.body.setAttribute("savior-po-token", e);
    } else {
      class d extends TypeError {
        constructor(e, t) {
          super(e);
          this.name = "BgError";
          if (t) {
            this.info = t;
          }
        }
      }
      class e {
        constructor() {
          this.promise = new Promise((e, t) => {
            this.resolve = e;
            this.reject = t;
          });
        }
      }
      class h extends class {
        #listeners = new Map();
        emit(e, ...t) {
          e = this.#listeners.get(e);
          if (e && e.size !== 0) {
            for (var n of [...e]) {
              n(...t);
            }
          }
        }
        on(e, t) {
          let n = this.#listeners.get(e);
          if (!n) {
            n = new Set();
            this.#listeners.set(e, n);
          }
          n.add(t);
        }
        off(e, t) {
          var n = this.#listeners.get(e);
          if (n && (n.delete(t), n.size === 0)) {
            this.#listeners.delete(e);
          }
        }
      } {
        deferredVmFunctions = new e();
        defaultTimeout = 3000;
        constructor(e) {
          super();
          if (!e.globalObject || !e.globalName || !e.program) {
            throw new d("Invalid options", {
              options: e
            });
          }
          this.userInteractionElement = e.userInteractionElement;
          this.vm = e.globalObject[e.globalName];
          this.program = e.program;
        }
        static async create(e) {
          return new h(e).load();
        }
        async load() {
          if (!this.vm) {
            throw new d("EGOU: BotGuard unavailable");
          }
          var e = this.vm.a;
          if (!e) {
            throw new d("ELIU: BotGuard initialization function unavailable");
          }
          var t = (e, t, n, i) => {
            this.deferredVmFunctions.resolve({
              asyncSnapshotFunction: e,
              shutdownFunction: t,
              passEventFunction: n,
              checkCameraFunction: i
            });
          };
          let r = (e, t) => {
            this.emit("record-bg-event", {
              event: e,
              elapsedTime: t
            });
          };
          let a = e => {
            this.emit("increment-bg-event-count", {
              event: e
            });
          };
          var n = [r, e => {
            this.emit("increment-client-error-count", {
              errorCode: e
            });
          }, e => {
            this.emit("record-payload-size", {
              payloadSize: e
            });
          }, (e, t) => {
            this.emit("record-latency", {
              latency: e,
              et: t
            });
          }, a];
          try {
            e(this.program, t, true, this.userInteractionElement, (e, t, n) => {
              let i = "k";
              if (t) {
                i = "h";
              } else if (n) {
                i = "u";
              }
              a(i);
              r(i, e);
            }, [[], []], undefined, false, n);
          } catch (e) {
            throw new d("Could not load program", {
              error: e
            });
          }
          return this;
        }
        async execute(t, n, ...i) {
          return Promise.race([(async () => {
            var e = (await this.deferredVmFunctions.promise)[t];
            if (e) {
              return e(...i);
            }
            throw new d(t + " function not found");
          })(), new Promise((e, t) => setTimeout(() => t(new d("VM operation timed out")), n))]);
        }
        async snapshot(e, i = this.defaultTimeout) {
          return new Promise(async (t, n) => {
            try {
              await this.execute("asyncSnapshotFunction", i, e => t(e), [e.contentBinding, e.signedTimestamp, e.webPoSignalOutput, e.skipPrivacyBuffer]);
            } catch (e) {
              n(e);
            }
          });
        }
      }
      let n = /[-_.]/g;
      let i = {
        "-": "+",
        _: "/",
        ".": "="
      };
      class m {
        constructor(e) {
          this.mintCallback = e;
        }
        static async create(e, t) {
          t = t[0];
          if (!t) {
            throw new d("PMD:Undefined");
          }
          if (!e.integrityToken) {
            throw new d("No integrity token provided", {
              integrityTokenResponse: e
            });
          }
          e = await t((t = e.integrityToken, t = n.test(t) ? t.replace(n, e => i[e]) : t, t = atob(t), new Uint8Array([...t].map(e => e.charCodeAt(0)))));
          if (e instanceof Function) {
            return new m(e);
          }
          throw new d("APF:Failed");
        }
        async mintAsWebsafeString(e) {
          e = await this.mint(e);
          t = true;
          e = btoa(String.fromCharCode(...e));
          if (t) {
            return e.replace(/\+/g, "-").replace(/\//g, "_");
          } else {
            return e;
          }
          var t;
        }
        async mint(e) {
          e = await this.mintCallback(new TextEncoder().encode(e));
          if (!e) {
            throw new d("YNJ:Undefined");
          }
          if (e instanceof Uint8Array) {
            return e;
          }
          throw new d("ODM:Invalid");
        }
      }
      var a = document.documentElement.innerHTML.match(/window\.ytAtN\(\s*({[\s\S]*?})\s*\)/);
      if (a) {
        var a = (e => {
          let t = e.replace(/\\x([0-9A-Fa-f]{2})/g, (e, t) => String.fromCharCode(parseInt(t, 16))).replace(/,\s*([\]}])/g, "$1");
          t = (t = t.replace(/'((?:[^'\\]|\\[\s\S])*)'/g, (e, t) => {
            t = t.replace(/\\'/g, "'");
            return JSON.stringify(t);
          })).replace(/([{,]\s*)([a-zA-Z0-9_$]+)\s*:/g, "$1\"$2\":");
          var n;
          var i = JSON.parse(t);
          for (n of Object.keys(i)) {
            var r = i[n];
            if (typeof r == "string" && (r.trim().startsWith("{") || r.trim().startsWith("["))) {
              try {
                i[n] = JSON.parse(r);
              } catch {}
            }
          }
          return i;
        })(a[1]).R;
        var o = [];
        var a = await (await h.create({
          program: a.bgChallenge.program,
          globalName: a.bgChallenge.globalName,
          globalObject: globalThis
        })).snapshot({
          webPoSignalOutput: o
        });
        var [a, s, c, l] = await (await fetch("https://www.youtube.com/api/jnn/v1/GenerateIT", {
          method: "POST",
          headers: {
            "content-type": "application/json+protobuf",
            "x-goog-api-key": "AIzaSyDyT5W0Jh49F30Pqqtyfdf7pDLFKLJoAnw",
            "x-user-agent": "grpc-web-javascript/0.1"
          },
          body: JSON.stringify(["O43z0dpjhgX20SCx4KAo", a])
        })).json();
        let t = await m.create({
          integrityToken: a,
          estimatedTtlSecs: s,
          mintRefreshThreshold: c,
          websafeFallbackToken: l
        }, o);
        window.mintAsWebsafeString = e => t.mintAsWebsafeString(e);
        let e = await t.mintAsWebsafeString(r);
        document.body.setAttribute("savior-po-token", e);
      } else {
        console.error("Could not find InnerTube attestation challenge in page HTML (ytAtN). YouTube may have changed the page.");
      }
    }
  } else {
    console.error("Could not find video ID");
  }
})();
