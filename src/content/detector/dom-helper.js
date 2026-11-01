// Module 12 [detector] - Savior DOM Query, Mutation, and Shadow DOM Utilities
export default function(module, exports, require) {
  "use strict";

  require.d(exports, "c", () => createSaviorHostElement);
  require.d(exports, "l", () => isValidImageElement);
  require.d(exports, "k", () => extractImageDimensions);
  require.d(exports, "g", () => isCaptchaElement);
  require.d(exports, "j", () => isInsideDocument);
  require.d(exports, "h", () => isFullscreenActive);
  require.d(exports, "p", () => applyInlineStyles);
  require.d(exports, "o", () => parseInlineStyleString);
  require.d(exports, "e", () => getElementDimensions);
  require.d(exports, "b", () => attachOpenShadowRoot);
  require.d(exports, "a", () => createDomElement);
  require.d(exports, "d", () => findMediaContainerElement);
  require.d(exports, "m", () => isEligibleMediaElement);
  require.d(exports, "f", () => isBlockedByFilter);
  require.d(exports, "i", () => checkAllowFullscreen);
  require.d(exports, "n", () => checkCustomPlayerAttributes);

  var urlMatcher = require(33);
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

  function getElementDimensions(targetElement) {
    var parentNode;
    if (!(targetElement instanceof HTMLElement)) return { width: 0, height: 0 };
    if (targetElement.matches("embed") && ((parentNode = targetElement.parentNode) === null || parentNode === void 0 ? void 0 : parentNode.matches("object"))) {
      targetElement = targetElement.parentNode;
    }
    var innerEmbed = targetElement === null || targetElement === void 0 ? void 0 : targetElement.querySelector("embed");
    if (innerEmbed && innerEmbed.offsetWidth && innerEmbed.offsetHeight) {
      targetElement = innerEmbed;
    }
    return { width: targetElement.offsetWidth, height: targetElement.offsetHeight };
  }

  function parseInlineStyleString(styleString) {
    return styleString.split(";").reduce((styleMap, stylePair) => {
      var colonIndex = stylePair.indexOf(":");
      if (colonIndex !== -1) {
        var propKey = stylePair.substr(0, colonIndex).trim();
        var propValue = stylePair.substr(colonIndex + 1).trim();
        styleMap[propKey] = propValue;
      }
      return styleMap;
    }, {});
  }

  function applyInlineStyles(targetElements, styleMap) {
    var applySingleElement = elementNode => {
      var existingStyle = elementNode.getAttribute("style") || "";
      var parsedMap = parseInlineStyleString(existingStyle);
      for (var styleKey in styleMap) {
        if (styleMap.hasOwnProperty(styleKey)) {
          parsedMap[styleKey] = styleMap[styleKey];
        }
      }
      var newStyleString = Object.keys(parsedMap).map(keyName => keyName + ": " + parsedMap[keyName]).join("; ") + ";";
      if (existingStyle !== newStyleString) {
        elementNode.setAttribute("style", newStyleString);
      }
    };
    if (Array.isArray(targetElements)) {
      targetElements.forEach(applySingleElement);
    } else {
      applySingleElement(targetElements);
    }
  }

  function attachOpenShadowRoot(hostElement) {
    return hostElement.attachShadow
      ? hostElement.attachShadow({ mode: "open" })
      : hostElement.createShadowRoot({ mode: "open" });
  }

  function createSaviorHostElement() {
    var hostStyles = Object.entries({
      all: "unset",
      position: "absolute",
      top: "0",
      left: "0",
      "z-index": "99999999999999",
      display: "block !important",
      overflow: "unset"
    }).map(entry => entry[0] + ": " + entry[1]).join("; ");

    return (new DOMParser)
      .parseFromString('<savior-host style="' + hostStyles + '"></savior-host>', "text/html")
      .querySelector("savior-host");
  }

  function createDomElement(tagName, className) {
    var createdElement = document.createElement(tagName);
    if (className) {
      createdElement.className = className;
    }
    return createdElement;
  }

  function findMediaContainerElement(targetElement) {
    if (targetElement.tagName === "IFRAME") return targetElement;
    if (targetElement.tagName === "IMG") return targetElement;

    var matchedElement = targetElement;
    for (var parentElement = targetElement.parentElement; parentElement && parentElement.parentElement && parentElement.tagName !== "BODY";) {
      if (isPositionOverlapping(targetElement, parentElement) && isSizeMatching(targetElement, parentElement)) {
        matchedElement = parentElement;
      }
      parentElement = parentElement.parentElement;
    }

    function isPositionOverlapping(childNode, parentNode) {
      var childRect = childNode.getBoundingClientRect();
      var parentRect = parentNode.getBoundingClientRect();
      return (
        childRect.height > parentRect.height ||
        childRect.width > parentRect.width ||
        (Math.abs(childRect.top + childRect.height / 2 - parentRect.top - parentRect.height / 2) < 3 &&
          Math.abs(childRect.left + childRect.width / 2 - parentRect.left - parentRect.width / 2) < 3)
      );
    }

    function isSizeMatching(childNode, parentNode) {
      var childRect = childNode.getBoundingClientRect();
      var parentRect = parentNode.getBoundingClientRect();
      return Math.abs(parentRect.width - childRect.width) < 3 && Math.abs(parentRect.height - childRect.height) < 3;
    }

    return matchedElement;
  }

  function isEligibleMediaElement(targetElement) {
    return checkAllowFullscreen(targetElement) && checkCustomPlayerAttributes(targetElement) && !isBlockedByFilter(targetElement);
  }

  function checkAllowFullscreen(targetElement) {
    if (targetElement.tagName.toLowerCase() === "audio") return true;
    if (urlMatcher.a.checkWhite(targetElement, "pip-allowfullscreen-false")) return true;
    if (targetElement.matches('embed[allowfullscreen="true"], iframe[allowfullscreen], iframe[allow*="fullscreen"], video') &&
        !urlMatcher.a.check(targetElement, "pip-allowfullscreen-false")) {
      return true;
    }
    if (targetElement.tagName === "OBJECT") {
      var paramElements = Object(cryptoUtils.queryAll)('param[value="true"]', targetElement);
      return Boolean(paramElements.filter(paramNode => {
        var paramName = paramNode.getAttribute("name");
        return (paramName === null || paramName === void 0 ? void 0 : paramName.toLowerCase()) === "allowfullscreen";
      }).length);
    }
    var mediaSrc = targetElement.src;
    return Boolean(
      targetElement.offsetParent &&
      mediaSrc &&
      (mediaSrc.includes("vidio.com/embed") ||
        mediaSrc.match(/detik\.com\/(?:.*\/)?embed/i) ||
        mediaSrc.match(/play\.play[\s\S]*(xyz|net)/i) ||
        mediaSrc.includes("vuighe.net/embed/?url") ||
        (mediaSrc && mediaSrc.match(/url=+[\s\S]+(video.docbao.vn)+[\s\S]+(.mp4)/g)) ||
        mediaSrc.match(/drive\.google\.com\/file\/.*\/preview/))
    );
  }

  function checkCustomPlayerAttributes(targetElement) {
    if (["v.douyu.com", "www.twitch.tv"].includes(location.host)) return true;
    var srcAttribute = targetElement.getAttribute("src");
    if (targetElement.tagName.toLowerCase() === "video") {
      return Boolean((srcAttribute && srcAttribute !== "blob:null") || targetElement.querySelector("source"));
    }
    if (targetElement.tagName.toLowerCase() !== "iframe") return false;
    return !location.href.includes(srcAttribute);
  }

  function isBlockedByFilter(targetElement) {
    var isBlocked = false;
    var embedChild = targetElement.querySelector("embed");
    if (embedChild) {
      isBlocked = urlMatcher.a.check(embedChild);
    }
    return isBlocked || urlMatcher.a.check(targetElement);
  }

  function isValidImageElement(targetElement) {
    return Boolean(targetElement && targetElement.tagName && targetElement.tagName.toLowerCase() === "img" && targetElement.src);
  }

  function extractImageDimensions(imageNode) {
    var queryHelper;
    return asyncRunner(this, void 0, void 0, regeneratorCore().m(function generatorFn() {
      var imgElement, naturalW, naturalH, renderH, renderW, decodeErr;
      return regeneratorCore().w(function iteratorStep(stepState) {
        for (;;) switch (stepState.p = stepState.n) {
          case 0:
            if ((imgElement = imageNode instanceof HTMLImageElement ? imageNode : (queryHelper = imageNode.querySelector) === null || queryHelper === void 0 ? void 0 : queryHelper.call(imageNode, "img"))) {
              stepState.n = 1;
              break;
            }
            return stepState.a(2, true);
          case 1:
            if ((naturalW = imgElement.naturalWidth || 0, naturalH = imgElement.naturalHeight || 0, !(naturalW * naturalH > 0))) {
              stepState.n = 2;
              break;
            }
            return stepState.a(2, naturalW * naturalH < cryptoUtils.MIN_IMAGE_TOTAL_PIXEL);
          case 2:
            if ((renderH = imgElement.height || 0, renderW = imgElement.width || 0, !(renderH * renderW > 0))) {
              stepState.n = 3;
              break;
            }
            return stepState.a(2, renderH * renderW < cryptoUtils.MIN_IMAGE_TOTAL_PIXEL);
          case 3:
            if (imgElement.complete) {
              stepState.n = 7;
              break;
            }
            return stepState.p = 4, stepState.n = 5, imgElement.decode();
          case 5:
            stepState.n = 7;
            break;
          case 6:
            stepState.p = 6, decodeErr = stepState.v, console.debug("Image decode error:", decodeErr);
          case 7:
            if (imgElement.naturalWidth && imgElement.naturalHeight) {
              stepState.n = 8;
              break;
            }
            return stepState.a(2, true);
          case 8:
            return stepState.a(2, imgElement.naturalWidth * imgElement.naturalHeight < cryptoUtils.MIN_IMAGE_TOTAL_PIXEL);
        }
      }, generatorFn, null, [[4, 6]]);
    }));
  }

  function isCaptchaElement(targetElement) {
    var captchaSelectors = [
      '[src*="captcha" i]',
      '[srcset*="captcha" i]',
      '[alt*="captcha" i]',
      '[title*="captcha" i]',
      '[id*="captcha" i]',
      '[class*="captcha" i]',
      '[name*="captcha" i]',
      '[aria-label*="captcha" i]',
      '[data-src*="captcha" i]',
      '[data-original*="captcha" i]',
      '[src*="geetest" i]',
      '[class*="geetest" i]',
      '[id*="kaptcha" i]',
      '[src*="kaptcha" i]',
      '[class*="turnstile" i]',
      '[src*="arkose" i]',
      ".g-recaptcha",
      ".h-captcha",
      ".cf-turnstile"
    ].join(",");
    return Boolean(targetElement && targetElement.matches && targetElement.matches(captchaSelectors));
  }

  function isInsideDocument(targetElement) {
    var rootParent = document.body.parentNode ? document.body.parentNode.parentNode : void 0;
    for (var current = targetElement; current && current.nodeName !== "#document" && current !== rootParent && current.nodeName !== "#document-fragment";) {
      var computed = window.getComputedStyle(current);
      if (computed && computed.getPropertyValue("position") === "fixed") {
        return true;
      }
      current = current.parentNode;
    }
    return false;
  }

  function isFullscreenActive() {
    return Boolean(document.fullscreenElement || document.webkitFullscreenElement);
  }
}
