// Module 80 [detector] - Savior Filename and Media Title Sanitizer
export default function(module, exports, require) {
  "use strict";

  function countDigits(inputString) {
    try {
      var digitMatches = inputString.match(/\p{N}/gu);
      return digitMatches ? digitMatches.length : 0;
    } catch (_) {
      var digitMatches = inputString.match(/\d/g);
      return digitMatches ? digitMatches.length : 0;
    }
  }

  function countLetters(inputString) {
    try {
      var letterMatches = inputString.match(/\p{L}/gu);
      return letterMatches ? letterMatches.length : 0;
    } catch (_) {
      var letterMatches = inputString.match(/[A-Za-z\u00C0-\u024F\u1EA0-\u1EFF]/g);
      return letterMatches ? letterMatches.length : 0;
    }
  }

  function cleanMovieTitleKeywords(rawTitle) {
    return rawTitle
      .replace(/xem|phim|clips?|videos?|online/gi, "")
      .replace(/^\s?-\s?/gi, "")
      .trim();
  }

  function sanitizeMediaTitle(candidateTitle, fallbackTitle) {
    var clipElement, headingElement;
    var resolvedFallback = fallbackTitle !== undefined ? fallbackTitle : document.title;

    if (typeof candidateTitle !== "string" || typeof resolvedFallback !== "string") {
      return candidateTitle;
    }

    var vietMovieHostPattern = /(vkool)|(vphimzz\.net)|(thichxemphim\.net)|(video\.vietnam\.vn)/i;
    if (document.location.host.match(vietMovieHostPattern)) {
      return document.title ? document.title.replace(/Xem Phim /i, "") : candidateTitle;
    }

    if (location.host.includes("hhkungfu.tv")) {
      var clickedEpisodeButton = document.querySelector(".button_movie_clicked");
      return document.title && clickedEpisodeButton
        ? document.title.replace(/\d+/, clickedEpisodeButton.innerText || "")
        : document.title;
    }

    if (candidateTitle === "videoplayback" || candidateTitle === "video") {
      return cleanMovieTitleKeywords(resolvedFallback);
    }

    if (document.location.host === "tv.naver.com" && candidateTitle === "content") {
      candidateTitle =
        (null === (clipElement = document.getElementsByClassName("_clipTitle")[0]) || clipElement === void 0
          ? void 0
          : clipElement.title) ||
        (null === (headingElement = document.querySelector("h2")) || headingElement === void 0
          ? void 0
          : headingElement.textContent) ||
        document.title;
    }

    if (document.location.host === "m.naver.com" && candidateTitle.length > 5) {
      return candidateTitle;
    }

    if (document.location.host === "keeng.vn" && resolvedFallback.includes("Album")) {
      candidateTitle = document.getElementsByClassName("song_active")[0].children[0].title;
    }

    if (document.location.host === "www.facebook.com") {
      resolvedFallback = resolvedFallback.replace(/^\([0-9]+\)\s/, "");
    }

    var strippedTitle;
    try {
      strippedTitle = candidateTitle.replace(/[^\p{L}\p{N}]/gu, "");
    } catch (_) {
      strippedTitle = candidateTitle.replace(/[\W+_]/g, "");
    }
    var strippedLength = strippedTitle.length;
    var numDigits = countDigits(strippedTitle);
    var numLetters = countLetters(strippedTitle);
    var digitRatio = strippedLength ? numDigits / strippedLength : 0;
    var letterRatio = strippedLength ? numLetters / strippedLength : 0;

    if (strippedLength > 0 && 0.99 > digitRatio + letterRatio) {
      return resolvedFallback;
    }
    if (digitRatio >= 0.5) {
      return cleanMovieTitleKeywords(resolvedFallback);
    }
    return candidateTitle;
  }

  exports.a = sanitizeMediaTitle;
}
