// Module 21 [widget] - DOM Selectors and Platform Positioning Rules
export default function(module, exports, require) {
  "use strict";

  var WidgetSelectors;
  require.d(exports, "h", () => WidgetSelectors);
  require.d(exports, "g", () => SAVIOR_SCRAPED_ATTR);
  require.d(exports, "a", () => MINIPLAYER_RULES);
  require.d(exports, "b", () => DEFAULT_WIDGET_WIDTH);
  require.d(exports, "f", () => PLATFORM_POSITION_RULES);
  require.d(exports, "c", () => DEFAULT_TOP_OFFSET);
  require.d(exports, "d", () => DEFAULT_WIDGET_HEIGHT);
  require.d(exports, "j", () => YOUTUBE_AD_SKIP_SELECTORS);
  require.d(exports, "i", () => YOUTUBE_AD_CONTAINER_CLASSES);
  require.d(exports, "e", () => SERP_DOCID_ATTR);

  (function(selectors) {
    selectors.WrapperClassName = "savior-widget";
    selectors.Savior = ".savior-widget";
    selectors.DownloadButton = "#download-btn";
    selectors.PinButton = "#open-pip";
    selectors.ToggleLightButton = "#switch-light";
    selectors.OtherFeatureButton = "#other-feature";
    selectors.TransferMobileWrapper = "#mobile-wrapper";
    selectors.ChangeYoutubeClientButton = "#youtube-client-chooser";
    selectors.OnboardingNewMediaPanel = "#onboard-nmp";
    selectors.OnboardYoutubeAntiAdblocker = "#onboard-yaa";
    selectors.SkipVideoButton = "#skip-video";
  })(WidgetSelectors || (WidgetSelectors = {}));

  var SAVIOR_SCRAPED_ATTR = "data-savior-scraped";

  var MINIPLAYER_RULES = [
    {
      rx: /(www\.)?facebook\.com\/(?!reel|stories)/i,
      closest: '[style^="right"]',
      notMiniPlayerNode: function(node) { return Boolean(node.closest('div[role="article"]')); },
      isMiniPlayerNode: function(node) { return node.matches('a[role="link"][href] img + div video'); }
    },
    { rx: /(www\.)?youtube\.com\/(?!watch|shorts)/i, closest: ".ytd-miniplayer" },
    { rx: /(www\.)?zingmp3\.vn/i },
    {
      rx: /(www\.)?tiktok\.com\//i,
      width: 0,
      closest: '[class*="-DivMiniControlContainer"]',
      isMiniPlayerNode: function(node, root) { return Boolean(null == root ? void 0 : root.querySelector('[class*="-DivMiniControlContainer"]')); }
    },
    { rx: /(www\.)?douyin\.com\//i, width: 0, closest: ".videoImage" },
    { rx: /(www\.)?twitter\.com\//i, width: 355 },
    { rx: /netflix\.com(\/\w+)?\/title\/\w+/i, width: 0, closest: ".modal-player-content" },
    { rx: /(www\.)?ixigua\.com\//i, closest: '[class^="HorizontalFeedCard__"]' },
    { rx: /(www\.)?video\.vnexpress\.net\//i, closest: ".thumb_full" },
    { rx: /(www\.)?zingnews\.vn\//i, closest: ".player.popped" },
    { rx: /(www\.)?24h\.com\.vn\//i, closest: ".mini-player" },
    { rx: /(www\.)?twitch\.tv\//i, closest: '[data-a-player-type="site_mini"], [class*="persistent-player__border--mini"]' },
    { rx: /vjav\.com\//i, closest: ".listing__item, .item-video" },
    { rx: /njav\.tv\//i, closest: ".thumb a" }
  ];

  var DEFAULT_WIDGET_WIDTH = 150;

  var PLATFORM_POSITION_RULES = [
    { rx: /(www\.)?facebook\.com\/reel/i, x: 48 },
    { rx: /(www\.)?facebook\.com\/stories/i, x: 50 },
    {
      rx: /(www\.)?facebook\.com\/[^\/]+\/videos\//i,
      matcher: function(node) {
        var mainEl;
        return Boolean(null === (mainEl = node.closest('[role="main"]')) || void 0 === mainEl ? void 0 : mainEl.querySelector('[data-name="media-viewer-nav-container"]'));
      },
      x: 24,
      y: 40
    }
  ];

  var DEFAULT_TOP_OFFSET = 12;
  var DEFAULT_WIDGET_HEIGHT = 32;

  var YOUTUBE_AD_SKIP_SELECTORS = [
    "videoAdUiSkipButton",
    "ytp-ad-skip-button ytp-button",
    "ytp-ad-overlay-close-button",
    ".ytp-ad-skip-button-container",
    ".ytp-skip-ad-button",
    ".ytp-ad-skip-button-modern .ytp-button",
    ".ytp-skip-ad-button",
    ".ytp-ad-skip-button-modern"
  ];

  var YOUTUBE_AD_CONTAINER_CLASSES = [
    ".ytp-ad-player-overlay-layout__ad-info-container",
    ".ytp-ad-player-overlay-layout"
  ];

  var SERP_DOCID_ATTR = "data-serp-docid";
};
