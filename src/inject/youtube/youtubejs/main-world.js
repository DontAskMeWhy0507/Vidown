{
  let s = {
    IOS: {
      NAME: "iOS",
      VERSION: "20.11.6",
      USER_AGENT: "com.google.ios.youtube/20.11.6 (iPhone10,4; U; CPU iOS 16_7_7 like Mac OS X)",
      DEVICE_MODEL: "iPhone10,4",
      OS_NAME: "iOS",
      OS_VERSION: "16.7.7.20H330"
    },
    WEB: {
      NAME: "WEB",
      VERSION: "2.20250222.10.00",
      API_KEY: "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8",
      API_VERSION: "v1",
      STATIC_VISITOR_ID: "6zpwvWUNAco",
      SUGG_EXP_ID: "ytzpb5_e2,ytpo.bo.lqp.elu=1,ytpo.bo.lqp.ecsc=1,ytpo.bo.lqp.mcsc=3,ytpo.bo.lqp.mec=1,ytpo.bo.lqp.rw=0.8,ytpo.bo.lqp.fw=0.2,ytpo.bo.lqp.szp=1,ytpo.bo.lqp.mz=3,ytpo.bo.lqp.al=en_us,ytpo.bo.lqp.zrm=1,ytpo.bo.lqp.er=1,ytpo.bo.ro.erl=1,ytpo.bo.ro.mlus=3,ytpo.bo.ro.erls=3,ytpo.bo.qfo.mlus=3,ytzprp.ppp.e=1,ytzprp.ppp.st=772,ytzprp.ppp.p=5"
    },
    MWEB: {
      NAME: "MWEB",
      VERSION: "2.20250224.01.00",
      API_VERSION: "v1"
    },
    WEB_KIDS: {
      NAME: "WEB_KIDS",
      VERSION: "2.20250221.11.00"
    },
    YTMUSIC: {
      NAME: "WEB_REMIX",
      VERSION: "1.20250219.01.00"
    },
    ANDROID: {
      NAME: "ANDROID",
      VERSION: "19.35.36",
      SDK_VERSION: 33,
      USER_AGENT: "com.google.android.youtube/19.35.36(Linux; U; Android 13; en_US; SM-S908E Build/TP1A.220624.014) gzip"
    },
    YTSTUDIO_ANDROID: {
      NAME: "ANDROID_CREATOR",
      VERSION: "22.43.101"
    },
    YTMUSIC_ANDROID: {
      NAME: "ANDROID_MUSIC",
      VERSION: "5.34.51"
    },
    TV: {
      NAME: "TVHTML5",
      VERSION: "7.20250219.14.00",
      USER_AGENT: "Mozilla/5.0 (ChromiumStylePlatform) Cobalt/Version"
    },
    TV_SIMPLY: {
      NAME: "TVHTML5_SIMPLY",
      VERSION: "1.0"
    },
    TV_EMBEDDED: {
      NAME: "TVHTML5_SIMPLY_EMBEDDED_PLAYER",
      VERSION: "2.0"
    },
    WEB_EMBEDDED: {
      NAME: "WEB_EMBEDDED_PLAYER",
      VERSION: "1.20250219.01.00",
      API_KEY: "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8",
      API_VERSION: "v1",
      STATIC_VISITOR_ID: "6zpwvWUNAco"
    },
    WEB_CREATOR: {
      NAME: "WEB_CREATOR",
      VERSION: "1.20241203.01.00",
      API_KEY: "AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8",
      API_VERSION: "v1",
      STATIC_VISITOR_ID: "6zpwvWUNAco"
    }
  };
  let c = "[DecoderExecutor]";
  try {
    window.trustedTypes.createPolicy("default", {
      createScript: function (e) {
        return e;
      }
    });
  } catch (e) {}
  function t(e, o, t, r) {
    if (!(e = e || o || t)) {
      throw new Error("No valid URL to decipher");
    }
    var o = new URLSearchParams(e);
    var a = new URL(o.get("url") || e);
    var t = a.searchParams.get("n");
    var e = o.get("s");
    var o = o.get("sp");
    var r = ((e, o, t, r) => {
      var a;
      var E = r("https://ytjs.googlevideo.com/videoplayback?expire=1234567890&n=" + encodeURIComponent(e), o, t);
      var r = Object.getPrototypeOf(E);
      var s = ["constructor", "clone", "set", "get"];
      for (a of Object.getOwnPropertyNames(r)) {
        if (!s.includes(a)) {
          if (typeof E[a] == "function") {
            E[a]();
          }
        }
      }
      e = E.get(o);
      t = E.get("n");
      return {
        sig: e ? decodeURIComponent(e) : undefined,
        n: t ? decodeURIComponent(t) : undefined
      };
    })(t, o, e, r);
    if (r.sig) {
      var E = r.sig;
      if (typeof E != "string") {
        throw new Error("Got invalid signature from player script evaluation.");
      }
      console.info(c, `Transformed signature from ${e} to ${E}`);
      if (o) {
        a.searchParams.set(o, E);
      } else {
        a.searchParams.set("signature", E);
      }
    }
    if (r.n) {
      e = r.n;
      if (typeof e != "string" || e.startsWith("enhanced_except_")) {
        throw new Error("Failed to decipher nsig");
      }
      console.info(c, `Transformed n from ${t} to ${e}`);
      a.searchParams.set("n", e);
    }
    switch (a.searchParams.get("c")) {
      case "WEB":
        a.searchParams.set("cver", s.WEB.VERSION);
        break;
      case "MWEB":
        a.searchParams.set("cver", s.MWEB.VERSION);
        break;
      case "WEB_REMIX":
        a.searchParams.set("cver", s.YTMUSIC.VERSION);
        break;
      case "WEB_KIDS":
        a.searchParams.set("cver", s.WEB_KIDS.VERSION);
        break;
      case "TVHTML5":
        a.searchParams.set("cver", s.TV.VERSION);
        break;
      case "TVHTML5_SIMPLY":
        a.searchParams.set("cver", s.TV_SIMPLY.VERSION);
        break;
      case "TVHTML5_SIMPLY_EMBEDDED_PLAYER":
        a.searchParams.set("cver", s.TV_EMBEDDED.VERSION);
        break;
      case "WEB_EMBEDDED_PLAYER":
        a.searchParams.set("cver", s.WEB_EMBEDDED.VERSION);
    }
    o = a.toString();
    console.info(c, "Deciphered URL: " + o);
    return a.toString();
  }
  var r = document.body.getAttribute("savior-meta-video-id");
  try {
    console.group(c);
    var e = document.body.getAttribute("savior-meta-formats-" + r);
    var a = JSON.parse(e);
    var E = `${JSON.parse(document.body.getAttribute("savior-functions")).output}
return exportedVars`;
    let o = new Function(window.trustedTypes.defaultPolicy.createScript(E))().nsigFunction;
    if (!o) {
      throw new Error("Failed to get nsigFunction");
    }
    a.forEach(e => {
      try {
        e.url = t(e.url, e.signatureCipher, e.cipher, o);
      } catch (e) {
        console.warn(c, "Error setting download URL:", e);
      }
    });
    document.body.setAttribute("savior-decoded-meta-formats", JSON.stringify({
      videoId: r,
      formats: a
    }));
  } catch (e) {
    console.warn(c, e);
    document.body.setAttribute("savior-decoded-meta-formats", JSON.stringify({
      videoId: r,
      formats: []
    }));
  } finally {
    console.groupEnd();
  }
}
