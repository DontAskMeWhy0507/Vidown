(() => {
  try {
    window.trustedTypes.createPolicy("default", {
      createScript: function (r) {
        return r;
      }
    });
  } catch (error) {}
  function parseURL(t, o, n, s) {
    o = o || "&";
    n = n || "=";
    var a = {};
    if (typeof t == "string" && t.length !== 0) {
      var i = /\+/g;
      var c = t.split(o);
      let r = 1000;
      if (s && typeof s.maxKeys == "number") {
        r = s.maxKeys;
      }
      let e = c.length;
      if (r > 0 && e > r) {
        e = r;
      }
      for (let t = 0; t < e; ++t) {
        let r;
        let e;
        var d = c[t].replace(i, "%20");
        var l = d.indexOf(n);
        e = l >= 0 ? (r = d.substr(0, l), d.substr(l + 1)) : (r = d, "");
        l = decodeURIComponent(r);
        d = decodeURIComponent(e);
        if (a.hasOwnProperty(l)) {
          if (Array.isArray(a[l])) {
            a[l].push(d);
          } else {
            a[l] = [a[l], d];
          }
        } else {
          a[l] = d;
        }
      }
    }
    return a;
  }
  let setDownloadURL = (o, n, s) => {
    if (o) {
      let e;
      let t = false;
      if (o.url) {
        e = o.url;
      } else {
        if (!o.signatureCipher && !o.cipher) {
          return;
        }
        t = true;
        e = o.signatureCipher || o.cipher;
      }
      try {
        let r;
        if (t) {
          var a = new parseURL(e);
          if (!a.url) {
            return;
          }
          r = decodeURIComponent(a.url);
          var i = new URL(r);
          var c = a.sp || "sig";
          if (a.s) {
            let r = decodeURIComponent(a.s);
            if (n) {
              try {
                var d = n(r);
                if (d) {
                  r = d;
                }
              } catch (r) {
                console.error("Error deciphering signature:", r);
              }
            }
            i.searchParams.set(c, r);
          } else if (a.sig) {
            i.searchParams.set(c, a.sig);
          }
          if (s) {
            var l = i.searchParams.get("n");
            if (l) {
              try {
                var f = s(l);
                if (f && f !== l) {
                  i.searchParams.set("n", f);
                  console.log(`Transformed n parameter: ${l} -> ${f}`);
                }
              } catch (r) {
                console.error("Error transforming n:", r);
              }
            }
          }
          r = i.toString();
        } else {
          r = e;
          if (s) {
            try {
              var u;
              var p = new URL(r);
              var m = p.searchParams.get("n");
              if (m && (u = s(m)) && u !== m) {
                p.searchParams.set("n", u);
                r = p.toString();
                console.log(`Transformed n parameter: ${m} -> ${u}`);
              }
            } catch (r) {
              console.error("Error transforming n on unencrypted URL:", r);
            }
          }
        }
        o.url = r;
        delete o.signatureCipher;
        delete o.cipher;
        console.log(`Processed URL: ${r.substring(0, 100)}...`);
      } catch (r) {
        console.error("Error processing URL:", r);
      }
    }
  };
  let videoId = document.body.getAttribute("savior-meta-video-id");
  try {
    console.group("DistubeDecoderExecutor");
    let attrString = document.body.getAttribute("savior-meta-formats-" + videoId);
    let formats = JSON.parse(attrString);
    let functions = JSON.parse(document.body.getAttribute("savior-functions"));
    let [decipherScript, nTransformScript] = [functions.decipherCode, functions.nTransformCode].map(code => eval(window.trustedTypes.defaultPolicy.createScript(code)));
    if (!decipherScript || !nTransformScript) {
      throw new Error("[DistubeDecoder] Failed to get functions");
    }
    formats.forEach(r => {
      try {
        setDownloadURL(r, decipherScript, nTransformScript);
      } catch (r) {
        console.warn("Error setting download URL:", r);
      }
    });
    document.body.setAttribute("savior-decoded-meta-formats", JSON.stringify({
      videoId: videoId,
      formats: formats
    }));
  } catch (error) {
    console.warn(error);
    document.body.setAttribute("savior-decoded-meta-formats", JSON.stringify({
      videoId: videoId,
      formats: []
    }));
  } finally {
    console.groupEnd();
  }
})();
