// Module 3 [detector] - Savior URL Parsing, Protocol Normalization, and Stream Probing Utilities
export default function(module, exports, require) {
  "use strict";

  require.d(exports, "d", () => parseMimeExtension);
  require.d(exports, "f", () => parseUrlDetails);
  require.d(exports, "e", () => detectMediaType);
  require.d(exports, "g", () => parseImageMedia);
  require.d(exports, "b", () => buildUrlWithQuery);
  require.d(exports, "h", () => parseQueryString);
  require.d(exports, "c", () => getDomainPriority);
  require.d(exports, "a", () => resolveRelativeUrl);

  var mediaConstants = require(1);
  var cryptoUtils = require(0);

  function regeneratorCore() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
    (regeneratorCore = function() {
      return { w: wrapFn, m: markFn };
    })();
  }
  function wrapFn(stepFn) { return stepFn; }
  function markFn(genFn) { return genFn; }

  var asyncRunner = function(thisArg, extraArg1, extraArg2, generator) {
    return new (extraArg2 || (extraArg2 = Promise))(function(resolve, reject) {
      function step(result) {
        try {
          advance(generator.next(result));
        } catch (err) {
          reject(err);
        }
      }
      function fail(err) {
        try {
          advance(generator.throw(err));
        } catch (err2) {
          reject(err2);
        }
      }
      function advance(stepResult) {
        var val;
        if (stepResult.done) {
          resolve(stepResult.value);
        } else {
          val = stepResult.value;
          (val instanceof extraArg2 ? val : new extraArg2(function(res) { res(val); })).then(step, fail);
        }
      }
      advance((generator = generator.apply(thisArg, extraArg1 || [])).next());
    });
  };

  var FILENAME_REGEX = /([^/]+)$/i;
  var EXTENSION_REGEX = /\.([^/.]*)$/i;

  function parseUrlParts(rawUrl) {
    if (!rawUrl || rawUrl.indexOf("data:image") === 0) return [];
    var urlRegex = /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/\.?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/;
    return urlRegex.exec(rawUrl) || [];
  }

  function parseMimeExtension(mimeType) {
    var category = "";
    var extension = "";
    try {
      var segments = mimeType.split("/");
      category = segments[0];
      var subtype = segments[1].split(";")[0];
      extension = subtype;
      switch (subtype) {
        case "webm":
          extension = category === "video" ? "webm" : "weba";
          break;
        case "3gpp":
          extension = "3gp";
          break;
        case "3gpp2":
          extension = "3g2";
          break;
        case "ogg":
          extension = category === "video" ? "ogv" : "oga";
          break;
        case "mpeg":
          extension = category === "video" ? "mpeg" : "mp3";
          break;
        case "x-midi":
          extension = "midi";
          break;
        case "x-msvideo":
          extension = "avi";
          break;
        case "mp2t":
          extension = "ts";
          break;
      }
      return { type: category, ext: extension };
    } catch (err) {
      return { type: category, ext: extension };
    }
  }

  function parseUrlDetails(mediaSource, includeQuery) {
    var rawUrl = typeof mediaSource === "object" ? mediaSource.videoUrl : mediaSource;
    var parsedUrl = new URL(rawUrl, rawUrl.startsWith("http") ? void 0 : location.origin);
    var matchedFilename = (parsedUrl.pathname.match(FILENAME_REGEX) || [])[1] || "";
    var extensionList = matchedFilename.split(".").map(part => part.toLowerCase());

    matchedFilename = decodeURIComponent(matchedFilename.replace(EXTENSION_REGEX, ""));
    extensionList.shift();

    if (extensionList.length === 0 && Object(cryptoUtils.isSpecialUrls)(mediaSource)) {
      extensionList = ["m3u8"];
    }

    var primaryExtension = extensionList[extensionList.length - 1] || "";
    var detectedCategory = null;

    if (parsedUrl.href.startsWith("data:")) {
      var dataMimeMatch = parsedUrl.href.match(/data:([a-z]+\/[a-z0-9\-_]+);/i);
      if (dataMimeMatch) {
        var mimeInfo = parseMimeExtension(dataMimeMatch[1]);
        primaryExtension = mimeInfo.ext;
        detectedCategory = mimeInfo.type;
      }
    }

    var resultDescriptor = {
      url: typeof mediaSource === "object" ? mediaSource : parsedUrl.href,
      protocol: parsedUrl.protocol,
      host: parsedUrl.host,
      port: parsedUrl.port,
      pathname: parsedUrl.pathname,
      filename: matchedFilename,
      ext: primaryExtension,
      exts: extensionList,
      hash: parsedUrl.hash,
      search: parsedUrl.search,
      type: detectedCategory
    };

    if (!resultDescriptor.port) {
      delete resultDescriptor.port;
    }

    if (includeQuery) {
      var queryMap = {};
      parsedUrl.search.replace(/^\?/, "").split(/&/).forEach(pair => {
        var parts = pair.split("=");
        queryMap[parts[0]] = parts[1];
      });
      resultDescriptor.query = queryMap;
    }

    if (primaryExtension === "flac") {
      resultDescriptor.quality = "Lossless";
      resultDescriptor.resolution = "lossless";
    }

    return resultDescriptor;
  }

  function detectMediaType(mediaSource) {
    var rawUrl = typeof mediaSource === "object" ? mediaSource.videoUrl : mediaSource;
    if (rawUrl.startsWith("data:")) {
      var dataMatch = rawUrl.match(/data:([a-z]+)/);
      var category = dataMatch ? dataMatch[1] : "";
      return ["audio", "video"].includes(category) ? category : "";
    }

    var urlParts = parseUrlParts(rawUrl);
    var filename = (urlParts && urlParts[11]) || "";
    if (!filename) return "";

    var extensionMap = new Map();
    var excludedTypes = ["no_watermark_video"];
    Object.keys(mediaConstants.k).forEach(typeKey => {
      if (!excludedTypes.includes(typeKey)) {
        var extList = mediaConstants.k[typeKey].extensions;
        for (var idx = 0; idx < extList.length; idx++) {
          extensionMap.set(extList[idx], typeKey);
        }
      }
    });

    if (rawUrl.includes("googlevideo.com/videoplayback") && filename === "videoplayback" && rawUrl.includes("mp4")) {
      filename = "video.mp4";
    }
    if (rawUrl.includes("videoplayback") && filename === "videoplayback" && rawUrl.includes("mp4")) {
      filename = "video.mp4";
    }

    var dotSegments = filename.split(".");
    var lastIndex = dotSegments.length - 1;
    if (lastIndex <= 0) return "";
    var extension = dotSegments[lastIndex].toLowerCase();
    return extensionMap.get(extension) || "";
  }

  function fetchAsDataUrl(mediaUrl) {
    return asyncRunner(this, void 0, void 0, regeneratorCore().m(function generatorFn() {
      var fetchResponse, blobData;
      return regeneratorCore().w(function iteratorStep(stepState) {
        for (;;) switch (stepState.n) {
          case 0:
            stepState.n = 1;
            return fetch(mediaUrl);
          case 1:
            fetchResponse = stepState.v;
            stepState.n = 2;
            return fetchResponse.blob();
          case 2:
            blobData = stepState.v;
            return stepState.a(2, new Promise(function(resolve, reject) {
              var reader = new FileReader();
              reader.onloadend = function() {
                var readResult = reader.result;
                resolve(readResult ? readResult.toString() : void 0);
              };
              reader.onerror = reject;
              reader.readAsDataURL(blobData);
            }));
        }
      }, generatorFn);
    }));
  }

  function parseImageMedia(targetParams) {
    var imageUrl = targetParams.url;
    var targetNode = targetParams.node;
    return asyncRunner(this, void 0, void 0, regeneratorCore().m(function generatorFn() {
      var parsedUrl, altTitle, detectedExt, descriptor, dataUrlResult;
      return regeneratorCore().w(function iteratorStep(stepState) {
        for (;;) switch (stepState.n) {
          case 0:
            parsedUrl = new URL(imageUrl.startsWith("blob:") ? imageUrl.replace("blob:", "") : imageUrl);
            altTitle = targetNode.alt || (parsedUrl.pathname.match(FILENAME_REGEX) || [])[1] || "";
            altTitle = decodeURIComponent(altTitle.replace(EXTENSION_REGEX, "").replace(/%/g, "%25"));
            stepState.n = 1;
            return probeContentType(imageUrl);
          case 1:
            detectedExt = stepState.v;
            descriptor = {
              url: imageUrl,
              protocol: parsedUrl.protocol,
              host: parsedUrl.host,
              pathname: parsedUrl.pathname,
              filename: altTitle + "." + detectedExt,
              ext: detectedExt,
              exts: [detectedExt],
              hash: parsedUrl.hash,
              search: parsedUrl.search,
              type: "image",
              i18n_quality: Object(cryptoUtils.i18n)("download_current_image")
            };
            if (!imageUrl.includes("blob:")) {
              stepState.n = 3;
              break;
            }
            stepState.n = 2;
            return fetchAsDataUrl(imageUrl);
          case 2:
            dataUrlResult = stepState.v;
            if (dataUrlResult) {
              descriptor.url = dataUrlResult;
            }
          case 3:
            return stepState.a(2, descriptor);
        }
      }, generatorFn);
    }));
  }

  function probeContentType(targetUrl) {
    if (typeof targetUrl === "string") {
      var match = targetUrl.match(/\.(jpg|jpeg|png|webp|gif|svg|avif)(?:\?|$)/i);
      if (match) {
        var ext = match[1].toLowerCase();
        return Promise.resolve(ext === "jpeg" ? "jpg" : ext);
      }
    }
    return new Promise(function(resolve) {
      try {
        var abortCtrl = typeof AbortController !== "undefined" ? new AbortController() : null;
        var timeout = setTimeout(function() {
          if (abortCtrl) {
            try { abortCtrl.abort(); } catch (_) {}
          }
          resolve("jpg");
        }, 1500);

        fetch(targetUrl, { method: "HEAD", signal: abortCtrl ? abortCtrl.signal : undefined })
          .then(function(res) {
            clearTimeout(timeout);
            var ct = res.headers.get("content-type");
            var parts = ct ? ct.split("/") : null;
            var foundExt = parts && parts[1] ? parts[1].split(";")[0].trim().toLowerCase() : "jpg";
            resolve(foundExt === "jpeg" ? "jpg" : foundExt);
          })
          .catch(function() {
            clearTimeout(timeout);
            resolve("jpg");
          });
      } catch (_) {
        resolve("jpg");
      }
    });
  }

  function buildUrlWithQuery(urlDescriptor) {
    var clone = Object.create(urlDescriptor);
    if (clone.query) {
      clone.search = [];
      for (var queryKey in clone.query) {
        if (clone.query[queryKey] !== undefined) {
          clone.search.push(queryKey + "=" + encodeURIComponent(clone.query[queryKey]));
        } else {
          clone.search.push(queryKey);
        }
      }
      clone.search = "?" + clone.search.join("&");
      delete clone.query;
    }
    return clone.href;
  }

  function parseQueryString(rawQuery) {
    var cleanQuery = rawQuery.replace(/^[#?]{1}/, "").split("&");
    var queryMap = {};
    cleanQuery.forEach(pair => {
      var tokens = pair.split("=");
      if (Object(cryptoUtils.defined)(tokens[0]) && Object(cryptoUtils.defined)(tokens[1])) {
        queryMap[tokens[0]] = decodeURIComponent(tokens[1].replace(/\+/g, " "));
      }
    });
    return queryMap;
  }

  var getDomainPriority = (function() {
    var priorityDomains = [
      "facebook.com", "youtube.com", "video.vnexpress.net", "mp3.zing.vn", "radio.zing.vn", "tv.zing.vn",
      "nhaccuatui.com", "video.thethao247.vn", "video.ngoisao.net", "xvideos.com", "phimmoi.net", "clip.vn",
      "yan.vn", "xem.vn", "pornhub.com", "xhamster.com", "dailymotion.com", "xnxx.com",
      "hdonline.vn", "phim3s.net", "redtube.com", "phim14.net", "soundcloud.com", "youporn.com",
      "vimeo.com", "fptplay.net", "haivn.com", "chiasenhac.com", "movies.hdviet.com", "nhac.vui.vn",
      "nhacso.net", "anime47.com", "tube8.com", "talktv.vn", "chatvl.info", "cohet.tv",
      "vlxx.tv", "hayhaytv.vn", "xemphimso.com", "vivo.vn", "xemvtv.net", "vkool.net",
      "chimsedinang.com", "keeng.vn", "vuighe.net", "vetv.vn", "xemphimon.com", "ixxx.com",
      "biphim.com", "kenhvideo.com", "videogame.vn", "phim.in", "voh.com.vn", "phimsexporn.com",
      "porn99.net", "news.zing.vn", "me.zing.vn", "twitter.com", "24h.com.vn", "phim.clip.vn",
      "video.ringring.vn", "v.nhaccuatui.com", "clip.vietnamnet.vn", "afamily.vn", "media.bongdaplus.vn", "bongdaclip.com",
      "gamek.vn", "phapluattp.vn", "hdviet.com", "haiivl.com", "chatvl.com", "2sao.vn",
      "videos.vietgiaitri.com", "nhac.vietgiaitri.com", "megafun.vn", "phim.hayhd.vn", "cand.com.vn", "ohay.tv",
      "phim.megabox.vn", "anhtrang.org", "phim.anhtrang.org", "8bongda.com", "xemphimone.com", "bongda365.com.vn",
      "phimhd.vn", "dinotube.com", "phimvipvn.net", "animeax.com", "phimdata.com", "phimnhanh.net",
      "vipphim.net", "phimvon.com", "pubvn.tv", "phim22.com", "phim7.com", "hayxemphim.com",
      "m-viet.com", "thethaoclip.com", "nhac.hay365.com", "ssphim.com", "phimtructuyenhd.com", "xuongphim.tv",
      "vino.vn/mp3", "haivl.io", "nhacvang.org", "starmovies.mobi", "clipvuivn.com", "phimporn.com",
      "123tv.vn", "phimonlinehd.net", "hai24h.net", "jax.vn", "kenhgioitre.net", "chiaseclip.net",
      "phim.xixam.com", "bilutv.com", "phimbathu.com", "instagram.com", "banhtv.com", "txxx.com",
      "video.vietnamnet.vn", "video.bongdaplus.vn", "creatives.livejasmin.com", "tv.naver.com", "tv.tuoitre.vn", "icdrama.se",
      "video.thanhnien.vn", "spankbang.com", "dmm.co.jp", "v.youku.com", "v.qq.com", "daikynguyenvn.com",
      "thethao247.vn", "e.vnexpress.net", "ione.vnexpress.net", "kenh14.vn", "dantri.com.vn", "baomoi.com",
      "emdep.vn", "tuoitre.vn", "soha.vn", "video.congan.com.vn", "cafef.vn", "bongda.com.vn",
      "bongdaso.com", "eva.vn", "danviet.vn", "cliptv.vn", "bbc.co.uk", "edition.cnn.com",
      "buzzfeed.com", "businessinsider.com", "cnet.com", "dailymail.co.uk", "bilutvx.net", "chill123.gotdns.ch"
    ];
    var domainMap = {};
    for (var idx = 0; idx < priorityDomains.length; ++idx) {
      var domainName = priorityDomains[idx];
      console.assert(!(domainName in domainMap), 'Duplicate "' + domainName + '": ' + domainMap[domainName] + ", " + idx);
      domainMap[domainName] = idx + 1;
    }
    return function(targetUrl) {
      var urlParts = parseUrlParts(targetUrl);
      var currentHost = (urlParts && urlParts[6]) || "";
      var priorityIndex = domainMap[currentHost];
      while (!priorityIndex && currentHost) {
        var dotIdx = currentHost.indexOf(".") + 1;
        if (dotIdx === 0) break;
        currentHost = currentHost.substr(dotIdx);
        priorityIndex = domainMap[currentHost];
      }
      return 100 + (0 | priorityIndex);
    };
  })();

  function resolveRelativeUrl(baseUrl, targetUrl, isStrict) {
    var baseParsed = baseUrl || new URL(targetUrl);
    if (targetUrl.includes("https") || targetUrl.includes("//")) {
      if (!targetUrl.includes("http")) {
        targetUrl = "https:" + targetUrl;
      }
      return targetUrl.replace(/http:\/\//, "https://");
    }
    if (isStrict && targetUrl.startsWith("/")) {
      return baseParsed.origin ? baseParsed.origin + targetUrl : targetUrl;
    }

    var baseSegments = (baseParsed.host + baseParsed.pathname)
      .split("/")
      .filter(Boolean)
      .slice(0, -1);
    var targetSegments = targetUrl.split("/").filter(Boolean);
    var parentDotIndex = targetSegments.lastIndexOf("..");
    var dotPrefix = targetSegments.slice(0, parentDotIndex + 1);
    var pathSuffix = targetSegments.slice(parentDotIndex + 1);

    if (dotPrefix.length > 0) {
      baseSegments = baseSegments.slice(0, -dotPrefix.length);
    }

    var matchIndex = baseSegments.indexOf(pathSuffix[0]);
    if (matchIndex === -1) {
      baseSegments.push(...pathSuffix);
    } else {
      matchIndex += 1;
      for (var segmentIdx = 1; segmentIdx < pathSuffix.length; ++segmentIdx) {
        var currentSegment = pathSuffix[segmentIdx];
        if (!baseSegments.includes(currentSegment)) {
          if (baseSegments[matchIndex - 1] === pathSuffix[segmentIdx - 1]) {
            baseSegments[matchIndex] = currentSegment;
          } else {
            baseSegments.push(currentSegment);
          }
        }
        matchIndex += 1;
      }
    }

    return baseParsed.protocol + "//" + baseSegments.join("/");
  }
}
