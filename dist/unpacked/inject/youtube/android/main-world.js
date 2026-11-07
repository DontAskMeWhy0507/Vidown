(function () {
  try {
    window.trustedTypes.createPolicy("default", {
      createScript: function (e) {
        return e;
      }
    });
  } catch (error) {}
  let zPlayerResponse = {
    data: null,
    getQuality: function (e, t) {
      var r = e.response;
      if (r) {
        this.data = e;
        var a = r.streamingData?.formats || [];
        var r = r.streamingData?.adaptiveFormats || [];
        let n = this;
        clearTimeout(this.timeout);
        n.timeout = setTimeout(function () {
          n.sendMessage("COCCOC_MESSAGE_TYPE_ZSITE_LOAD_DATA_TIMEOUT");
        }, 10000);
        this.getQualityInfo(a.concat(r), e, function (e) {
          clearTimeout(n.timeout);
          t(e);
        });
      } else {
        t({});
      }
    },
    getQualityInfo: function (a, c, i) {
      this.loadData(c).then(e => {
        var n;
        var t;
        var r;
        if (!this.cver || !this.ptrackingUrl) {
          ({
            cver: n,
            ptrackingUrl: t
          } = this.parseVideoHtml(c.response, document.documentElement.innerHTML));
          this.cver = n;
          this.ptrackingUrl = t;
        }
        for (r of a) {
          let e;
          let n;
          try {
            e = this.getStreamingUrl(r.url, r.cipher, r.signatureCipher, this.parsedPlayerJs.cipherFuncName, this.parsedPlayerJs.cipherFunc, this.parsedPlayerJs.cipherInnerFunc);
            n = this.generateMediaContentUrl(this.cver, this.ptrackingUrl, e, this.parsedPlayerJs.nFuncName, this.parsedPlayerJs.nFunc, this.parsedPlayerJs.cpnInnerVarName, this.parsedPlayerJs.cpnInnerInnerFunc, this.parsedPlayerJs.cpnInnerFunc, this.parsedPlayerJs.cpnFuncName, this.parsedPlayerJs.cpnFunc);
          } catch (e) {}
          r.zType = coccoc_itagConverter.getType(r.itag);
          if (r.zType === coccoc_itagConverter.onlyAudio) {
            r.height = -1;
          }
          r.url = n || e || r.url;
        }
        document.cc_qualities = a.sort(function (e, n) {
          return n.bitrate - e.bitrate;
        });
        this.sendMessage("COCCOC_MESSAGE_TYPE_ZSITE_DATA_LOADED");
        i(a);
      });
    },
    loadData: async function (e) {
      var n;
      var t;
      var r;
      if (!this.playerJsUrl) {
        ({
          playerJsUrl: n,
          cver: t,
          ptrackingUrl: r
        } = this.parseVideoHtml(e.response, document.body.outerHTML));
        this.playerJsUrl = n;
        this.cver = t;
        this.ptrackingUrl = r;
      }
      if (!this.playerJsUrl && e.bootstrapWebPlayerContextConfig) {
        this.playerJsUrl = e.bootstrapWebPlayerContextConfig.jsUrl;
      }
      if (!this.playerJs && this.playerJsUrl) {
        this.playerJs = await this.loadPlayerJs(this.playerJsUrl);
      }
      if (!this.parsedPlayerJs && this.playerJs) {
        this.parsedPlayerJs = {
          ...this.parsePlayerJs(this.playerJs)
        };
      }
    },
    escapeRegExp: function (e) {
      return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    },
    parseVideoHtml: function (e, n) {
      var t;
      var r;
      var a = {};
      let c;
      let i;
      if (!(o = n.match(new RegExp("/s/player/([^\"]+?).js"))) || o.length < 2) {
        return a;
      }
      t = o[0];
      try {
        for (r of e.responseContext.serviceTrackingParams) {
          var s = r.params.filter(e => e.key == "cver").map(e => e.value);
          if (s.length > 0) {
            c = s[0];
            break;
          }
        }
      } catch (e) {
        return a;
      }
      if ((o = n.match(/"ptrackingUrl":({[^}]+})/)) && o.length >= 2) {
        e = o[1];
        n = JSON.parse(e);
        i = n.baseUrl;
      } else {
        var o = document.getElementsByTagName("video")[0];
        if (!o || !o.src) {
          return a;
        }
        i = o.src;
      }
      return {
        playerJsUrl: t,
        cver: c,
        ptrackingUrl: i
      };
    },
    loadPlayerJs: async function (e) {
      return (await fetch(e)).text();
    },
    parsePlayerJs: function (e) {
      var n;
      var t;
      var r = {};
      let a;
      let c;
      let i;
      let s = "";
      let o = "";
      let p = "";
      if ((i = (i = e.indexOf("enhanced_except_")) < 0 ? e.indexOf("-_w8_") : i) >= 0 && (i = e.indexOf(";", i), i += 1, (n = e.lastIndexOf("=function", i)) >= 0) && (n = e.lastIndexOf("\n", n), n += 1, o = e.substring(n, i), a = /([^=]+)=function/, (c = o.match(a)) && c.length > 1 && (s = c[1]), a = /([^\s]+)===/, c = o.match(a)) && c.length > 1) {
        p = c[1];
      }
      r = {
        ...r,
        nFuncName: s,
        nFunc: o,
        nInnerVarName: p
      };
      let l = "";
      let u = "";
      a = new RegExp("([^\ns]+)=function[^\n]+window.crypto.getRandomValues[^\n]+");
      if ((c = e.match(a)) && c.length > 1) {
        l = c[0];
        u = c[1];
      }
      r = {
        ...r,
        cpnInnerFuncName: u,
        cpnInnerFunc: l
      };
      let h = "";
      let d = "";
      if (u && (a = new RegExp(`([^
s]+)=function[^
]+=${this.escapeRegExp(u)}(.+);[^
]+`), c = e.match(a))) {
        h = c[0];
        d = c[1];
      }
      r = {
        ...r,
        cpnFunc: h,
        cpnFuncName: d
      };
      let g = "";
      a = /catch.+return\s+([^(]+)\(/;
      if ((c = l.match(a)) && c.length > 1) {
        g = c[1].replace("$", "\\$");
      }
      r = {
        ...r,
        cpnInnerInnerFuncName: g
      };
      let m = "";
      if (g && (a = new RegExp(g + "=function.+?};", "s"), c = e.match(a)) && c.length > 0) {
        m = c[0];
      }
      r = {
        ...r,
        cpnInnerInnerFunc: m
      };
      let y = "";
      if (m) {
        a = /4\^(.+).charCodeAt/;
        if ((c = m.match(a)) && c.length > 1) {
          y = c[1];
        }
      } else if (l && (a = /4\^(.+).charCodeAt/, c = l.match(a)) && c.length > 1) {
        y = c[1];
      }
      r = {
        ...r,
        cpnInnerVarName: y
      };
      let v = "";
      a = /=([^=(]+)\(decodeURIComponent\(h.s\)/;
      if (!(c = e.match(a))) {
        a = /=([^=(]+)\(decodeURIComponent\(.\.s\)/;
        c = e.match(a);
      }
      if (c && c.length > 1) {
        v = c[1];
      }
      r = {
        ...r,
        cipherFuncName: v
      };
      let f = "";
      if (v && (a = new RegExp(`${this.escapeRegExp(v)}=function[^
]+`), c = e.match(a)) && c.length > 0) {
        f = c[0];
      }
      r = {
        ...r,
        cipherFunc: f
      };
      let I = "";
      if (f && (a = /;([^.]+)\./, c = f.match(a)) && c.length > 1) {
        I = c[1];
      }
      r = {
        ...r,
        cipherInnerFuncName: I
      };
      let F = "";
      if (I) {
        n = e.indexOf(` ${I}={`);
        t = e.indexOf("};", n);
        t += "};".length;
        F = e.substring(n, t);
      }
      return {
        ...r,
        cipherInnerFunc: F
      };
    },
    getSearchParams: function (e) {
      var n;
      var t = {};
      var e = e.split("?");
      if (!(e.length < 2)) {
        for (n of e[1].split("&")) {
          var r = n.split("=");
          if (r.length == 2) {
            t[r[0]] = r[1];
          }
        }
      }
      return t;
    },
    generateMediaContentUrl: function (cver, ptrackingUrl, streamingUrl, nFuncName, nFunc, cpnInnerVarName, cpnInnerInnerFunc, cpnInnerFunc, cpnFuncName, cpnFunc) {
      let {
        ptk,
        oid,
        ptchn,
        pltype
      } = this.getSearchParams(ptrackingUrl);
      let url = streamingUrl;
      let {
        n
      } = this.getSearchParams(streamingUrl);
      if (n) {
        eval(window.trustedTypes.defaultPolicy.createScript(`
        var ${nFunc};
        n = ${nFuncName}(n);
      `));
        url = url.replace(/&n=[^&]+&/, `&n=${n}&`);
      }
      let cpn;
      eval(window.trustedTypes.defaultPolicy.createScript(`
      var g = {};
      var window = {};
      var ${cpnInnerVarName} = "";
      var ${cpnInnerInnerFunc};
      var ${cpnInnerFunc};
      ${cpnFunc};
      cpn = ${cpnFuncName}(16);
    `));
      let searchParams = {
        cpn: cpn,
        cver: cver,
        ptk: ptk,
        oid: oid,
        ptchn: ptchn,
        pltype: pltype
      };
      let components = [];
      for (var key in searchParams) {
        let value = searchParams[key];
        if (value) {
          components.push([key, value].join("="));
        }
      }
      return [url, components.join("&")].join("&");
    },
    getStreamingUrl: function (url, cipher, signatureCipher, cipherFuncName, cipherFunc, cipherInnerFunc) {
      let streamingUrl = url;
      let c = cipher || signatureCipher;
      if (c) {
        if (c.charAt(0) == "?") {
          c = c.substr(1);
        }
        let pairs = c.split("&");
        let params = {};
        for (var pair of pairs) {
          let kv = pair.split("=");
          let k = kv[0];
          let v = kv[1];
          params[k] = v;
        }
        let {
          s,
          sp,
          url
        } = params;
        if (!s || !sp || !url) {
          return {};
        }
        {
          let sig;
          eval(window.trustedTypes.defaultPolicy.createScript(`
          var ${cipherInnerFunc};
          var ${cipherFunc};
          sig = encodeURIComponent(${cipherFuncName}(decodeURIComponent(s)));
        `));
          url = decodeURIComponent(url);
          streamingUrl = `${url}&${sp}=${sig}`;
        }
      }
      return streamingUrl;
    },
    sendMessage(e) {
      document.cc_qualities;
      this.data.response;
    }
  };
  let coccoc_itagConverter = {
    onlyAudio: 1,
    videoWithoutAudio: 2,
    videoWithAudio: 4,
    audioItag: [140, 141, 256, 258, 171, 249, 250, 251, 599, 600],
    videoWithoutAudioItag: [160, 133, 134, 135, 136, 137, 264, 266, 298, 299, 278, 242, 243, 244, 247, 248, 271, 313, 302, 308, 303, 315, 394, 395, 396, 397, 398, 399, 400, 401, 402, 272, 598],
    videoWithAudioItag: [17, 36, 5, 43, 18, 22, 91, 92, 93, 94, 95, 96],
    getType: function (e) {
      if (coccoc_itagConverter.audioItag.includes(e)) {
        return coccoc_itagConverter.onlyAudio;
      } else if (coccoc_itagConverter.videoWithAudioItag.includes(e)) {
        return coccoc_itagConverter.videoWithAudio;
      } else if (coccoc_itagConverter.videoWithoutAudioItag.includes(e)) {
        return coccoc_itagConverter.videoWithoutAudio;
      } else {
        return undefined;
      }
    }
  };
  let playerResponse = JSON.parse(document.body.getAttribute("savior-youtube-player-response"));
  if (playerResponse) {
    zPlayerResponse.getQuality({
      response: playerResponse
    }, function (e) {
      document.body.setAttribute("savior-ytb-data-android-solution", JSON.stringify(e));
    });
  }
})();
