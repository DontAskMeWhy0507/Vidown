// Module 1 [utilities] - Savior Common Utility Subsystem
export default function (e, t, n) {
    "use strict";

    n.d(t, "k", function () {
      return r;
    });
    n.d(t, "r", function () {
      return o;
    });
    n.d(t, "s", function () {
      return i;
    });
    n.d(t, "B", function () {
      return a;
    });
    n.d(t, "q", function () {
      return s;
    });
    n.d(t, "l", function () {
      return c;
    });
    n.d(t, "p", function () {
      return l;
    });
    n.d(t, "h", function () {
      return u;
    });
    n.d(t, "o", function () {
      return d;
    });
    n.d(t, "c", function () {
      return f;
    });
    n.d(t, "w", function () {
      return p;
    });
    n.d(t, "n", function () {
      return h;
    });
    n.d(t, "u", function () {
      return g;
    });
    n.d(t, "y", function () {
      return m;
    });
    n.d(t, "e", function () {
      return v;
    });
    n.d(t, "g", function () {
      return y;
    });
    n.d(t, "f", function () {
      return k;
    });
    n.d(t, "z", function () {
      return b;
    });
    n.d(t, "i", function () {
      return _;
    });
    n.d(t, "a", function () {
      return T;
    });
    n.d(t, "A", function () {
      return S;
    });
    n.d(t, "x", function () {
      return x;
    });
    n.d(t, "t", function () {
      return w;
    });
    n.d(t, "v", function () {
      return E;
    });
    n.d(t, "b", function () {
      return A;
    });
    n.d(t, "j", function () {
      return C;
    });
    n.d(t, "m", function () {
      return O;
    });
    n.d(t, "d", function () {
      return I;
    });
    var r = {
      audio: {
        title: "Audio",
        icon: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M3.34701 16.1464C3.91819 16.7176 4.60481 17.0032 5.40688 17.0032C6.20895 17.0032 6.89558 16.7176 7.46676 16.1464C8.03792 15.5752 8.3235 14.8886 8.3235 14.0865V5.72114H16.2603V11.7404C16.0263 11.5502 15.7699 11.4076 15.491 11.3125C15.2122 11.2174 14.913 11.1699 14.5936 11.1699C13.7915 11.1699 13.1049 11.4555 12.5337 12.0267C11.9625 12.5978 11.6769 13.2845 11.6769 14.0865C11.6769 14.8886 11.9625 15.5752 12.5337 16.1464C13.1049 16.7176 13.7915 17.0032 14.5936 17.0032C15.3957 17.0032 16.0823 16.7176 16.6535 16.1464C17.2246 15.5752 17.5102 14.8886 17.5102 14.0865V5.72114V2.99683H16.6768H16.2603H7.07355V11.7404C6.83957 11.5502 6.58316 11.4076 6.30432 11.3125C6.02547 11.2174 5.72632 11.1699 5.40688 11.1699C4.60481 11.1699 3.91819 11.4555 3.34701 12.0267C2.77582 12.5978 2.49023 13.2845 2.49023 14.0865C2.49023 14.8886 2.77582 15.5752 3.34701 16.1464Z\" fill=\"currentColor\"/>\n</svg>\n",
        rgxp: /audio/i,
        extensions: ["mp3", "flac", "m4a", "wma", "ogg", "wav", "aif", "mid", "opus"],
        extensions_weight: ["mp3", "flac", "m4a", "wma", "ogg", "wav", "aif", "mid", "opus"],
        ctype2extension: {
          midi: "mid",
          mp4: "m4a",
          m4a: "m4a",
          mpeg: "mp3",
          mpeg3: "mp3",
          wav: "wav",
          aiff: "aif",
          opus: "opus"
        }
      },
      video: {
        title: "Video",
        icon: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M3.79009 16.25C3.36914 16.25 3.01284 16.1041 2.72117 15.8125C2.42952 15.5208 2.28369 15.1645 2.28369 14.7435V5.25642C2.28369 4.83547 2.42952 4.47917 2.72117 4.1875C3.01284 3.89583 3.36914 3.75 3.79009 3.75H13.2772C13.6982 3.75 14.0545 3.89583 14.3461 4.1875C14.6378 4.47917 14.7836 4.83547 14.7836 5.25642V9.07052L17.7163 6.13785V13.8621L14.7836 10.9294V14.7435C14.7836 15.1645 14.6378 15.5208 14.3461 15.8125C14.0545 16.1041 13.6982 16.25 13.2772 16.25H3.79009ZM3.79009 15H13.2772C13.352 15 13.4135 14.9759 13.4615 14.9279C13.5096 14.8798 13.5337 14.8183 13.5337 14.7435V5.25642C13.5337 5.18162 13.5096 5.12019 13.4615 5.0721C13.4135 5.02402 13.352 4.99998 13.2772 4.99998H3.79009C3.7153 4.99998 3.65386 5.02402 3.60577 5.0721C3.55769 5.12019 3.53365 5.18162 3.53365 5.25642V14.7435C3.53365 14.8183 3.55769 14.8798 3.60577 14.9279C3.65386 14.9759 3.7153 15 3.79009 15Z\" fill=\"currentColor\"/>\n</svg>\n",
        rgxp: /video/i,
        extensions: ["mp4", "mpeg4", "mpg", "mpeg", "m4v", "avi", "divx", "mov", "wmv", "movie", "asf", "webm", "flv", "3gp", "m3u8", "m3u", "ogv", "mpd"],
        extensions_weight: ["mp4", "mpeg4", "mpg", "mpeg", "m4v", "avi", "divx", "mov", "wmv", "movie", "asf", "webm", "flv", "m3u8", "m3u", "3gp"],
        ctype2extension: {
          mpeg: "mp4",
          mp4: "mp4",
          m4v: "mp4",
          "3gpp": "3gp",
          flv: "flv",
          quicktime: "mov",
          msvideo: "avi",
          "ms-wmv": "wmv",
          "ms-asf": "asf"
        }
      },
      no_watermark_video: {
        title: "No watermark video",
        icon: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M21.53 7.15C21.378 7.06223 21.2055 7.01603 21.03 7.01603C20.8545 7.01603 20.682 7.06223 20.53 7.15L17 8.89C16.9715 8.11357 16.6429 7.37847 16.0834 6.83944C15.5238 6.3004 14.777 5.99948 14 6H5C4.20435 6 3.44129 6.31607 2.87868 6.87868C2.31607 7.44129 2 8.20435 2 9V15C2 15.7957 2.31607 16.5587 2.87868 17.1213C3.44129 17.6839 4.20435 18 5 18H14C14.777 18.0005 15.5238 17.6996 16.0834 17.1606C16.6429 16.6215 16.9715 15.8864 17 15.11L20.56 16.89C20.6963 16.9599 20.8468 16.9975 21 17C21.1872 17.0006 21.3709 16.9486 21.53 16.85C21.6741 16.7599 21.7929 16.6346 21.8751 16.4859C21.9574 16.3372 22.0003 16.1699 22 16V8C22.0003 7.83006 21.9574 7.66283 21.8751 7.51411C21.7929 7.36538 21.6741 7.24007 21.53 7.15ZM15 15C15 15.2652 14.8946 15.5196 14.7071 15.7071C14.5196 15.8946 14.2652 16 14 16H5C4.73478 16 4.48043 15.8946 4.29289 15.7071C4.10536 15.5196 4 15.2652 4 15V9C4 8.73478 4.10536 8.48043 4.29289 8.29289C4.48043 8.10536 4.73478 8 5 8H14C14.2652 8 14.5196 8.10536 14.7071 8.29289C14.8946 8.48043 15 8.73478 15 9V15ZM20 14.38L17 12.88V11.12L20 9.62V14.38Z\" fill=\"currentColor\"/></svg>",
        rgxp: /no watermark video/i,
        extensions: ["mp4", "mpeg4", "mpg", "mpeg", "m4v", "avi", "divx", "mov", "wmv", "movie", "asf", "webm", "flv", "3gp", "m3u8", "m3u", "ogv", "mpd"],
        extensions_weight: ["mp4", "mpeg4", "mpg", "mpeg", "m4v", "avi", "divx", "mov", "wmv", "movie", "asf", "webm", "flv", "m3u8", "m3u", "3gp"],
        ctype2extension: {
          mpeg: "mp4",
          mp4: "mp4",
          m4v: "mp4",
          "3gpp": "3gp",
          flv: "flv",
          quicktime: "mov",
          msvideo: "avi",
          "ms-wmv": "wmv",
          "ms-asf": "asf"
        }
      },
      subtitles: {
        title: "Subtitles",
        icon: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M3.90869 13.6143V12.3643H11.8253V13.6143H3.90869ZM3.90869 10.2809V9.03096H16.8253V10.2809H3.90869ZM3.90869 6.94759V5.69763H16.8253V6.94759H3.90869Z\" fill=\"currentColor\"/>\n</svg>\n",
        rgxp: /subtitles/i,
        extensions: ["yt_srt", "srt", "vtt"],
        extensions_weight: ["yt_srt", "srt", "vtt"]
      },
      audio_channel: {
        title: "Audio channel",
        icon: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n<path d=\"M7.11517 17.0833H4.42292C4.00198 17.0833 3.64567 16.9375 3.354 16.6458C3.06234 16.3541 2.9165 15.9978 2.9165 15.5769V10C2.9165 9.0171 3.10241 8.09616 3.47421 7.23719C3.846 6.37821 4.35134 5.62928 4.99021 4.9904C5.6291 4.35152 6.37803 3.84619 7.237 3.4744C8.09598 3.10259 9.01691 2.91669 9.99982 2.91669C10.9827 2.91669 11.9037 3.10259 12.7626 3.4744C13.6216 3.84619 14.3705 4.35152 15.0094 4.9904C15.6483 5.62928 16.1536 6.37821 16.5254 7.23719C16.8972 8.09616 17.0831 9.0171 17.0831 10V15.5769C17.0831 15.9978 16.9373 16.3541 16.6456 16.6458C16.354 16.9375 15.9977 17.0833 15.5767 17.0833H12.8845V11.1859H15.8332V10C15.8332 8.375 15.2672 6.99653 14.1352 5.86458C13.0033 4.73264 11.6248 4.16667 9.99982 4.16667C8.37482 4.16667 6.99634 4.73264 5.8644 5.86458C4.73246 6.99653 4.16648 8.375 4.16648 10V11.1859H7.11517V17.0833ZM5.86521 12.4359H4.16648V15.5769C4.16648 15.641 4.19319 15.6998 4.24661 15.7532C4.30004 15.8066 4.35881 15.8333 4.42292 15.8333H5.86521V12.4359ZM14.1344 12.4359V15.8333H15.5767C15.6408 15.8333 15.6996 15.8066 15.753 15.7532C15.8064 15.6998 15.8332 15.641 15.8332 15.5769V12.4359H14.1344Z\" fill=\"currentColor\"/>\r\n</svg>\r\n",
        rgxp: /audio channel/i,
        extensions: ["mp3", "flac", "m4a", "wma", "ogg", "wav", "aif", "mid", "opus"],
        extensions_weight: ["mp3", "flac", "m4a", "wma", "ogg", "wav", "aif", "mid", "opus"],
        ctype2extension: {
          midi: "mid",
          mp4: "m4a",
          m4a: "m4a",
          mpeg: "mp3",
          mpeg3: "mp3",
          wav: "wav",
          aiff: "aif",
          opus: "opus"
        }
      },
      image: {
        title: "Image",
        icon: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M4.08747 17.0753C3.66653 17.0753 3.31022 16.9295 3.01855 16.6378C2.72689 16.3462 2.58105 15.9898 2.58105 15.5689V4.41511C2.58105 3.99416 2.72689 3.63786 3.01855 3.34619C3.31022 3.05452 3.66653 2.90869 4.08747 2.90869H15.2413C15.6622 2.90869 16.0185 3.05452 16.3102 3.34619C16.6018 3.63786 16.7477 3.99416 16.7477 4.41511V15.5689C16.7477 15.9898 16.6018 16.3462 16.3102 16.6378C16.0185 16.9295 15.6622 17.0753 15.2413 17.0753H4.08747ZM4.08747 15.8253H15.2413C15.3054 15.8253 15.3641 15.7986 15.4176 15.7452C15.471 15.6918 15.4977 15.633 15.4977 15.5689V4.41511C15.4977 4.351 15.471 4.29223 15.4176 4.2388C15.3641 4.18538 15.3054 4.15867 15.2413 4.15867H4.08747C4.02336 4.15867 3.96459 4.18538 3.91116 4.2388C3.85774 4.29223 3.83103 4.351 3.83103 4.41511V15.5689C3.83103 15.633 3.85774 15.6918 3.91116 15.7452C3.96459 15.7986 4.02336 15.8253 4.08747 15.8253ZM5.28941 13.9503H14.1034L11.3631 10.2965L9.02335 13.3414L7.35668 11.21L5.28941 13.9503Z\" fill=\"#AAABAC\"/>\n</svg>\n",
        rgxp: /image/i,
        extensions: ["jpg", "jpeg", "png", "gif", "webp", "avif", "bmp", "tif", "tiff", "heic", "heif", "raw", "ico", "cur", "svg"],
        extensions_weight: ["jpg", "jpeg", "png", "gif", "webp", "avif", "bmp", "tif", "tiff", "heic", "heif", "raw", "ico", "cur", "svg"],
        ctype2extension: {}
      }
    };
    var o = {
      "4320p": {
        i18n_label: "quality_8k_uhd",
        label: "8K UHD",
        value: 1600
      },
      "4320p60 HDR": {
        i18n_label: "quality_8k_uhd_hdr",
        label: "8K UHD HDR",
        value: 1500
      },
      "3072p": {
        i18n_label: "quality_4k_qfhd",
        label: "4K QFHD",
        value: 1400
      },
      "3072p60 HDR": {
        i18n_label: "quality_4k_qfhd_hdr",
        label: "4K QFHD HDR",
        value: 1300
      },
      "2160p": {
        i18n_label: "quality_4k_uhd",
        label: "4K UHD",
        value: 1200
      },
      "2160p60 HDR": {
        i18n_label: "quality_4k_uhd_hdr",
        label: "4K UHD HDR",
        value: 1199
      },
      "2048p": {
        i18n_label: "quality_qhd",
        label: "Quad HD",
        value: 1100
      },
      "2048p60 HDR": {
        i18n_label: "quality_qhd_hdr",
        label: "Quad HD HDR",
        value: 1099
      },
      "1440p": {
        i18n_label: "quality_qhd",
        label: "Quad HD",
        value: 1000
      },
      "1440p60 HDR": {
        i18n_label: "quality_qhd_hdr",
        label: "Quad HD HDR",
        value: 900
      },
      "1080p": {
        i18n_label: "quality_fhd",
        label: "Full HD",
        value: 800
      },
      "1080p60 HDR": {
        i18n_label: "quality_fhd_hdr",
        label: "Full HD HDR",
        value: 700
      },
      "720p": {
        i18n_label: "quality_hd",
        label: "HD",
        value: 600
      },
      "720p60 HDR": {
        i18n_label: "quality_hd_hdr",
        label: "HD HDR",
        value: 599
      },
      "540p": {
        i18n_label: "quality_standard",
        label: "Standard",
        value: 500
      },
      "480p": {
        i18n_label: "quality_standard",
        label: "Standard",
        value: 500
      },
      "360p": {
        i18n_label: "quality_medium",
        label: "Medium",
        value: 400
      },
      "320p": {
        i18n_label: "quality_medium",
        label: "Medium",
        value: 400
      },
      "270p": {
        i18n_label: "quality_small",
        label: "Small",
        value: 300
      },
      "240p": {
        i18n_label: "quality_small",
        label: "Small",
        value: 200
      },
      "144p": {
        i18n_label: "quality_mobile",
        label: "Mobile",
        value: 100
      }
    };
    var i = ["video", "audio", "subtitles"];
    function a(e) {
      return !!e && ["m3u8", "m3u", "hls", "zip"].indexOf(e) !== -1;
    }
    var s = [4320, 3072, 2160, 2048, 1440, 1080, 720, 540, 480, 360, 320, 270, 240, 144];
    var c = [/^(.+\.)?nixcdn\.com/im, /^(.+\.)?vcmedia\.vn/i, /^(.+\.)?kenhhd\.tv/i];
    var l = [/coccoc\.com\/sitemap\.xml/i];
    var u = [/m\.naver\.com\/\/?shorts/i];
    var d = "hidePermanent";
    var f = "customControlFromServer";
    var p = "youtubeControls";
    var h = "otherControls";
    var g = "youtubeAdsContainerClasses";
    var m = "youtubeSkipBtnClasses";
    var v = "116.0.0.0";
    var y = 3;
    var k = 1;
    var b = "youtubeTurnOffAdblock";
    var _ = "gserpSelectors";
    var T = "window.isAdguardEnabled = false";
    var S = "ytbViewCount";
    var x = 11;
    var w = "YTAdguardStatus";
    var E = "ytbAudioChannel";
    class A {}
    A.PROMOTE_SERP = {
      _: "promote_serp",
      GET: "get_promote_serp",
      CLOSE: "close_promote_serp"
    };
    A.ONBOARD_TRACK = {
      GET: "get_onboard_track",
      SAVE: "save_onboard_track"
    };
    A.ONBOARD_IMPORTDATA = "get_onboard_importdata";
    A.GET_FEATURE = "get_feature";
    A.DOWNLOAD = "download";
    A.PLAY = "play_video";
    A.SET_FEATURE = "set_feature";
    A.IS_SUPPORTED = "is_supported";
    A.FRAME_TYPE = "frame_type";
    A.FETCH = "background_request";
    A.YOUTUBE = {
      GET_INFO: "youtube_get_info",
      GET_MPD: "youtube_get_mpd_info"
    };
    A.OMNI = {
      ACTIVE: "active_omnibox",
      DEACTIVE: "deactive_omnibox"
    };
    A.METRICS = "metrics";
    A.CACHE = "cache.background";
    A.PIP = {
      REQUEST: "pip",
      INNER: "inner_frame_pip",
      ON: {
        ENTER: "inner_pip_enter",
        LEAVE: "inner_pip_leave"
      }
    };
    A.CONSOLE_LOG = "console.log";
    A.GET_URL = "get_url";
    A.SAVE_URL = "save_url";
    A.GET_MATCHED_REQUESTS = "get_matched_requests";
    A.GET_SERVER_TIME = "get_server_time";
    A.GET_FB_SAVED_URL = "get_fb_saved_url";
    A.OPEN_SEARCH_SETTINGS = "open_search_engines_settings";
    A.SCRIPTING = {
      INJECT: "inject_script",
      NOTIFY: "script_executed",
      EXEC: "execute_script"
    };
    A.OPEN_SETTINGS = "open_settings";
    A.OFFSCREEN = {};
    A.TURN_OFF_ADBLOCK_ON_YOUTUBE = "turn_off_adblock_on_youtube";
    A.TURN_ON_ADBLOCK_ON_YOUTUBE = "turn_on_adblock_on_youtube";
    A.GET_FASTFORWARD_ENABLED = "get_ff_enabled";
    A.GET_ADBLOCK_STATUS = "get_adblock_status";
    A.SET_AS_DEFAULT_BROWSER = "set_cc_as_default_browser";
    A.CORS_FETCH = "cors_fetch";
    A.GET_ADGUARD_INJECTING_STATUS = "get_adguard_injecting_status";
    A.GET_ABTEST = "get_abtest";
    A.CHECK_URL_CHANGED = "check_url_changed";
    A.CHECK_URL = "check_url";
    A.GETVIDTIME = "get_vid_time";
    A.EVENTENOUGHTIME = "event_enough_time";
    A.GET_COOKIES = "get_cookies";
    A.SKIP_VIDEO = "skip_video";
    A.OPEN_SIDEPANEL = "open_sidepanel";
    A.RETURN_TRANSCRIPT = "return_transcript";
    A.SEND_REQUEST = "send_request";
    var C = ["chrome://", "coccoc://"];
    var O = ["coccoc.com/webhp", "about:blank"];
    var I = ["sex", "porn", "vlxx", "vlxy", "vlzz", "69", "18", "xvideo", "hentai", "jav", "cliphot", "xx", "mobiblog", "spank", "quatvn", "phang", "missav", "boyfriendtv", "lon88", "lonkk", "sieukhung", "thiendia", "gaigu", "lenlut", "heovl", "phimheo", "quaylen", "checkerviet", "koanchay", "sieudamtv", "phevkl", "heomup", "hdvietsub", "cuongdam", "phimloz", "chinababe", "phimden", "phim18", "xemsv", "thisvid", "thisav", "xsub", "phimkk", "chich", "phimcapba", "chongtoico", "thanhlau", "hdgay", "vkl", "vl", "phima", "strip", "loz", "xhamster", "banlinh", "quyong", "maulon", "prn", "baocaosu", "tinhduc", "thudam", "ditnhau", "ditme", "jable", "gaimup", "mbbg", "lauxanh", "gaito", "vl", "3xchina", "phimnguoilon", "mat6tube", "jpxnx", "vnshow", "gaigoi", "titday", "7mmtv", "daongon", "londep", "lontv", "thienvadia", "phimtz", "fuck", "phimxes", "phimsec", "xnx", "phang", "3x", "buoito", "hangdep", "kynuviet", "gaikhoehang", "chinaav", "xyz", "sex", "vkl", "xx", "xxx", "jav", "dam", "hentai", "domknig", "18", "phetgai", "porn", "gaidam", "daoxinh", "heo88", "tuoinung", "xyz", "buomtv", "kichdam"];
  };
