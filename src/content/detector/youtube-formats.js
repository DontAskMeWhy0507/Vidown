// Module 90 [detector] - Savior YouTube Format Definitions and Innertube Clients
export default function(module, exports, require) {
  "use strict";

  require.d(exports, "c", () => YOUTUBE_ITAG_MAP);
  require.d(exports, "b", () => YOUTUBE_API_KEYS);
  require.d(exports, "a", () => YOUTUBE_CLIENT_MAP);
  require.d(exports, "d", () => DEFAULT_CLIENT_ORDER);

  var mediaConstants = require(1);
  var settingsManager = require(7);

  var YOUTUBE_ITAG_MAP = {
    "5": {"mimeType":"video/flv; codecs=\"Sorenson H.283, mp3\"","qualityLabel":"240p","bitrate":250000,"audioBitrate":64},
    "6": {"mimeType":"video/flv; codecs=\"Sorenson H.263, mp3\"","qualityLabel":"270p","bitrate":800000,"audioBitrate":64},
    "13": {"mimeType":"video/3gp; codecs=\"MPEG-4 Visual, aac\"","qualityLabel":null,"bitrate":500000,"audioBitrate":null},
    "17": {"mimeType":"video/3gp; codecs=\"MPEG-4 Visual, aac\"","qualityLabel":"144p","bitrate":50000,"audioBitrate":24},
    "18": {"mimeType":"video/mp4; codecs=\"H.264, aac\"","qualityLabel":"360p","bitrate":500000,"audioBitrate":96},
    "22": {"mimeType":"video/mp4; codecs=\"H.264, aac\"","qualityLabel":"720p","bitrate":2000000,"audioBitrate":192},
    "34": {"mimeType":"video/flv; codecs=\"H.264, aac\"","qualityLabel":"360p","bitrate":500000,"audioBitrate":128},
    "35": {"mimeType":"video/flv; codecs=\"H.264, aac\"","qualityLabel":"480p","bitrate":800000,"audioBitrate":128},
    "36": {"mimeType":"video/3gp; codecs=\"MPEG-4 Visual, aac\"","qualityLabel":"240p","bitrate":175000,"audioBitrate":32},
    "37": {"mimeType":"video/mp4; codecs=\"H.264, aac\"","qualityLabel":"1080p","bitrate":3000000,"audioBitrate":192},
    "38": {"mimeType":"video/mp4; codecs=\"H.264, aac\"","qualityLabel":"3072p","bitrate":3500000,"audioBitrate":192},
    "43": {"mimeType":"video/webm; codecs=\"VP8, vorbis\"","qualityLabel":"360p","bitrate":500000,"audioBitrate":128},
    "44": {"mimeType":"video/webm; codecs=\"VP8, vorbis\"","qualityLabel":"480p","bitrate":1000000,"audioBitrate":128},
    "45": {"mimeType":"video/webm; codecs=\"VP8, vorbis\"","qualityLabel":"720p","bitrate":2000000,"audioBitrate":192},
    "46": {"mimeType":"audio/webm; codecs=\"vp8, vorbis\"","qualityLabel":"1080p","bitrate":null,"audioBitrate":192},
    "82": {"mimeType":"video/mp4; codecs=\"H.264, aac\"","qualityLabel":"360p","bitrate":500000,"audioBitrate":96},
    "83": {"mimeType":"video/mp4; codecs=\"H.264, aac\"","qualityLabel":"240p","bitrate":500000,"audioBitrate":96},
    "84": {"mimeType":"video/mp4; codecs=\"H.264, aac\"","qualityLabel":"720p","bitrate":2000000,"audioBitrate":192},
    "85": {"mimeType":"video/mp4; codecs=\"H.264, aac\"","qualityLabel":"1080p","bitrate":3000000,"audioBitrate":192},
    "91": {"mimeType":"video/ts; codecs=\"H.264, aac\"","qualityLabel":"144p","bitrate":100000,"audioBitrate":48},
    "92": {"mimeType":"video/ts; codecs=\"H.264, aac\"","qualityLabel":"240p","bitrate":150000,"audioBitrate":48},
    "93": {"mimeType":"video/ts; codecs=\"H.264, aac\"","qualityLabel":"360p","bitrate":500000,"audioBitrate":128},
    "94": {"mimeType":"video/ts; codecs=\"H.264, aac\"","qualityLabel":"480p","bitrate":800000,"audioBitrate":128},
    "95": {"mimeType":"video/ts; codecs=\"H.264, aac\"","qualityLabel":"720p","bitrate":1500000,"audioBitrate":256},
    "96": {"mimeType":"video/ts; codecs=\"H.264, aac\"","qualityLabel":"1080p","bitrate":2500000,"audioBitrate":256},
    "100": {"mimeType":"audio/webm; codecs=\"VP8, vorbis\"","qualityLabel":"360p","bitrate":null,"audioBitrate":128},
    "101": {"mimeType":"audio/webm; codecs=\"VP8, vorbis\"","qualityLabel":"360p","bitrate":null,"audioBitrate":192},
    "102": {"mimeType":"audio/webm; codecs=\"VP8, vorbis\"","qualityLabel":"720p","bitrate":null,"audioBitrate":192},
    "120": {"mimeType":"video/flv; codecs=\"H.264, aac\"","qualityLabel":"720p","bitrate":2000000,"audioBitrate":128},
    "127": {"mimeType":"audio/ts; codecs=\"aac\"","qualityLabel":null,"bitrate":null,"audioBitrate":96},
    "128": {"mimeType":"audio/ts; codecs=\"aac\"","qualityLabel":null,"bitrate":null,"audioBitrate":96},
    "132": {"mimeType":"video/ts; codecs=\"H.264, aac\"","qualityLabel":"240p","bitrate":150000,"audioBitrate":48},
    "133": {"mimeType":"video/mp4; codecs=\"H.264\"","qualityLabel":"240p","bitrate":200000,"audioBitrate":null},
    "134": {"mimeType":"video/mp4; codecs=\"H.264\"","qualityLabel":"360p","bitrate":300000,"audioBitrate":null},
    "135": {"mimeType":"video/mp4; codecs=\"H.264\"","qualityLabel":"480p","bitrate":500000,"audioBitrate":null},
    "136": {"mimeType":"video/mp4; codecs=\"H.264\"","qualityLabel":"720p","bitrate":1000000,"audioBitrate":null},
    "137": {"mimeType":"video/mp4; codecs=\"H.264\"","qualityLabel":"1080p","bitrate":2500000,"audioBitrate":null},
    "138": {"mimeType":"video/mp4; codecs=\"H.264\"","qualityLabel":"4320p","bitrate":13500000,"audioBitrate":null},
    "139": {"mimeType":"audio/mp4; codecs=\"aac\"","qualityLabel":null,"bitrate":null,"audioBitrate":48},
    "140": {"mimeType":"audio/m4a; codecs=\"aac\"","qualityLabel":null,"bitrate":null,"audioBitrate":128},
    "141": {"mimeType":"audio/mp4; codecs=\"aac\"","qualityLabel":null,"bitrate":null,"audioBitrate":256},
    "151": {"mimeType":"video/ts; codecs=\"H.264, aac\"","qualityLabel":"720p","bitrate":50000,"audioBitrate":24},
    "160": {"mimeType":"video/mp4; codecs=\"H.264\"","qualityLabel":"144p","bitrate":100000,"audioBitrate":null},
    "171": {"mimeType":"audio/webm; codecs=\"vorbis\"","qualityLabel":null,"bitrate":null,"audioBitrate":128},
    "172": {"mimeType":"audio/webm; codecs=\"vorbis\"","qualityLabel":null,"bitrate":null,"audioBitrate":192},
    "231": {"mimeType":"video/ts; codecs=\"H.264, aac\"","qualityLabel":"480p","bitrate":500000,"audioBitrate":null},
    "232": {"mimeType":"video/ts; codecs=\"H.264, aac\"","qualityLabel":"720p","bitrate":800000,"audioBitrate":null},
    "242": {"mimeType":"video/webm; codecs=\"VP9\"","qualityLabel":"240p","bitrate":100000,"audioBitrate":null},
    "243": {"mimeType":"video/webm; codecs=\"VP9\"","qualityLabel":"360p","bitrate":250000,"audioBitrate":null},
    "244": {"mimeType":"video/webm; codecs=\"VP9\"","qualityLabel":"480p","bitrate":500000,"audioBitrate":null},
    "247": {"mimeType":"video/webm; codecs=\"VP9\"","qualityLabel":"720p","bitrate":700000,"audioBitrate":null},
    "248": {"mimeType":"video/webm; codecs=\"VP9\"","qualityLabel":"1080p","bitrate":1500000,"audioBitrate":null},
    "249": {"mimeType":"audio/webm; codecs=\"opus\"","qualityLabel":null,"bitrate":null,"audioBitrate":48},
    "250": {"mimeType":"audio/webm; codecs=\"opus\"","qualityLabel":null,"bitrate":null,"audioBitrate":64},
    "251": {"mimeType":"audio/webm; codecs=\"opus\"","qualityLabel":null,"bitrate":null,"audioBitrate":160},
    "264": {"mimeType":"video/mp4; codecs=\"H.264\"","qualityLabel":"1440p","bitrate":4000000,"audioBitrate":null},
    "266": {"mimeType":"video/mp4; codecs=\"H.264\"","qualityLabel":"2160p","bitrate":12500000,"audioBitrate":null},
    "270": {"mimeType":"video/mp4; codecs=\"H.264\"","qualityLabel":"1080p","bitrate":2500000,"audioBitrate":null},
    "271": {"mimeType":"video/webm; codecs=\"VP9\"","qualityLabel":"1440p","bitrate":9000000,"audioBitrate":null},
    "272": {"mimeType":"video/webm; codecs=\"VP9\"","qualityLabel":"4320p","bitrate":20000000,"audioBitrate":null},
    "278": {"mimeType":"video/webm; codecs=\"VP9\"","qualityLabel":"144p 30fps","bitrate":80000,"audioBitrate":null},
    "298": {"mimeType":"video/mp4; codecs=\"H.264\"","qualityLabel":"720p","bitrate":3000000,"audioBitrate":null},
    "299": {"mimeType":"video/mp4; codecs=\"H.264\"","qualityLabel":"1080p","bitrate":5500000,"audioBitrate":null},
    "300": {"mimeType":"video/ts; codecs=\"H.264, aac\"","qualityLabel":"720p","bitrate":1318000,"audioBitrate":48},
    "301": {"mimeType":"video/ts; codecs=\"H.264, aac\"","qualityLabel":"1080p","bitrate":3000000,"audioBitrate":128},
    "302": {"mimeType":"video/webm; codecs=\"VP9\"","qualityLabel":"720p HFR","bitrate":2500000,"audioBitrate":null},
    "303": {"mimeType":"video/webm; codecs=\"VP9\"","qualityLabel":"1080p HFR","bitrate":5000000,"audioBitrate":null},
    "308": {"mimeType":"video/webm; codecs=\"VP9\"","qualityLabel":"1440p HFR","bitrate":10000000,"audioBitrate":null},
    "311": {"mimeType":"video/webm; codecs=\"VP9\"","qualityLabel":"720p","bitrate":1250000,"audioBitrate":null},
    "312": {"mimeType":"video/mp4; codecs=\"H.264\"","qualityLabel":"1080p","bitrate":2500000,"audioBitrate":null},
    "313": {"mimeType":"video/webm; codecs=\"VP9\"","qualityLabel":"2160p","bitrate":13000000,"audioBitrate":null},
    "315": {"mimeType":"video/webm; codecs=\"VP9\"","qualityLabel":"2160p HFR","bitrate":20000000,"audioBitrate":null},
    "330": {"mimeType":"video/webm; codecs=\"VP9\"","qualityLabel":"144p HDR, HFR","bitrate":80000,"audioBitrate":null},
    "331": {"mimeType":"video/webm; codecs=\"VP9\"","qualityLabel":"240p HDR, HFR","bitrate":100000,"audioBitrate":null},
    "332": {"mimeType":"video/webm; codecs=\"VP9\"","qualityLabel":"360p HDR, HFR","bitrate":250000,"audioBitrate":null},
    "333": {"mimeType":"video/webm; codecs=\"VP9\"","qualityLabel":"240p HDR, HFR","bitrate":500000,"audioBitrate":null},
    "334": {"mimeType":"video/webm; codecs=\"VP9\"","qualityLabel":"720p HDR, HFR","bitrate":1000000,"audioBitrate":null},
    "335": {"mimeType":"video/webm; codecs=\"VP9\"","qualityLabel":"1080p HDR, HFR","bitrate":1500000,"audioBitrate":null},
    "336": {"mimeType":"video/webm; codecs=\"VP9\"","qualityLabel":"1440p HDR, HFR","bitrate":5000000,"audioBitrate":null},
    "337": {"mimeType":"video/webm; codecs=\"VP9\"","qualityLabel":"2160p HDR, HFR","bitrate":12000000,"audioBitrate":null}
  };

  var YOUTUBE_API_KEYS = ["AIzaSyB-63vPrdThhKuerbB2N_l7Kwwcxj6yUAc","AIzaSyA8eiZmM1FaDVjRy-df2KTyQ_vz_yYM39w","AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8"];

  var settingsData = settingsManager.a.get(mediaConstants.w);
  var customIosVersion = settingsData && settingsData.ios_api_client_version;

  var YOUTUBE_CLIENT_MAP = {
    "web": {
      "INNERTUBE_CONTEXT": {
        "client": {
          "clientName": "WEB",
          "clientVersion": "2.20260708.00.00"
        }
      },
      "INNERTUBE_CONTEXT_CLIENT_NAME": 1,
      "SUPPORTS_COOKIES": true,
      "SUPPORTS_AD_PLAYBACK_CONTEXT": true
    },
    "web_safari": {
      "INNERTUBE_CONTEXT": {
        "client": {
          "clientName": "WEB",
          "clientVersion": "2.20260708.00.00",
          "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.5 Safari/605.1.15,gzip(gfe)"
        }
      },
      "INNERTUBE_CONTEXT_CLIENT_NAME": 1,
      "REQUIRE_PO_TOKEN": true,
      "SUPPORTS_COOKIES": true
    },
    "web_embedded": {
      "INNERTUBE_CONTEXT": {
        "client": {
          "clientName": "WEB_EMBEDDED_PLAYER",
          "clientVersion": "2.20260708.00.00"
        }
      },
      "INNERTUBE_CONTEXT_CLIENT_NAME": 56,
      "SUPPORTS_COOKIES": true
    },
    "web_music": {
      "INNERTUBE_HOST": "music.youtube.com",
      "INNERTUBE_CONTEXT": {
        "client": {
          "clientName": "WEB_REMIX",
          "clientVersion": "1.20240724.00.00"
        }
      },
      "INNERTUBE_CONTEXT_CLIENT_NAME": 67,
      "SUPPORTS_COOKIES": true
    },
    "web_creator": {
      "INNERTUBE_CONTEXT": {
        "client": {
          "clientName": "WEB_CREATOR",
          "clientVersion": "1.20260708.06.00"
        }
      },
      "INNERTUBE_CONTEXT_CLIENT_NAME": 62,
      "REQUIRE_AUTH": true,
      "SUPPORTS_COOKIES": true
    },
    "android": {
      "INNERTUBE_CONTEXT": {
        "client": {
          "clientName": "ANDROID",
          "clientVersion": "21.26.364",
          "androidSdkVersion": 30,
          "userAgent": "com.google.android.youtube/21.26.364 (Linux; U; Android 11) gzip",
          "osName": "Android",
          "osVersion": "11"
        }
      },
      "INNERTUBE_CONTEXT_CLIENT_NAME": 3,
      "REQUIRE_JS_PLAYER": false
    },
    "android_music": {
      "INNERTUBE_CONTEXT": {
        "client": {
          "clientName": "ANDROID_MUSIC",
          "clientVersion": "7.27.52",
          "androidSdkVersion": 30,
          "userAgent": "com.google.android.apps.youtube.music/7.27.52 (Linux; U; Android 11) gzip",
          "osName": "Android",
          "osVersion": "11"
        }
      },
      "INNERTUBE_CONTEXT_CLIENT_NAME": 21,
      "REQUIRE_JS_PLAYER": false,
      "REQUIRE_PO_TOKEN": true,
      "REQUIRE_AUTH": true,
      "SUPPORTS_COOKIES": true
    },
    "android_creator": {
      "INNERTUBE_CONTEXT": {
        "client": {
          "clientName": "ANDROID_CREATOR",
          "clientVersion": "24.45.100",
          "androidSdkVersion": 30,
          "userAgent": "com.google.android.apps.youtube.creator/24.45.100 (Linux; U; Android 11) gzip",
          "osName": "Android",
          "osVersion": "11"
        }
      },
      "INNERTUBE_CONTEXT_CLIENT_NAME": 14,
      "REQUIRE_JS_PLAYER": false,
      "REQUIRE_PO_TOKEN": true,
      "REQUIRE_AUTH": true
    },
    "android_vr": {
      "INNERTUBE_CONTEXT": {
        "client": {
          "clientName": "ANDROID_VR",
          "clientVersion": "1.65.10",
          "deviceMake": "Oculus",
          "deviceModel": "Quest 3",
          "androidSdkVersion": 32,
          "userAgent": "com.google.android.apps.youtube.vr.oculus/1.65.10 (Linux; U; Android 12L; eureka-user Build/SQ3A.220605.009.A1) gzip",
          "osName": "Android",
          "osVersion": "12L"
        }
      },
      "INNERTUBE_CONTEXT_CLIENT_NAME": 28,
      "REQUIRE_JS_PLAYER": false,
      "SUPPORTS_COOKIES": true
    },
    "ios": {
      "INNERTUBE_CONTEXT": {
        "client": {
          "clientName": "IOS",
          "clientVersion": "21.26.4",
          "deviceMake": "Apple",
          "deviceModel": "iPhone16,2",
          "userAgent": "com.google.ios.youtube/21.26.4 (iPhone16,2; U; CPU iOS 18_3_2 like Mac OS X;)",
          "osName": "iPhone",
          "osVersion": "18.3.2.22D82"
        }
      },
      "INNERTUBE_CONTEXT_CLIENT_NAME": 5,
      "REQUIRE_JS_PLAYER": false
    },
    "ios_music": {
      "INNERTUBE_CONTEXT": {
        "client": {
          "clientName": "IOS_MUSIC",
          "clientVersion": "7.27.0",
          "deviceMake": "Apple",
          "deviceModel": "iPhone16,2",
          "userAgent": "com.google.ios.youtubemusic/7.27.0 (iPhone16,2; U; CPU iOS 18_1_0 like Mac OS X;)",
          "osName": "iPhone",
          "osVersion": "18.1.0.22B83"
        }
      },
      "INNERTUBE_CONTEXT_CLIENT_NAME": 26,
      "REQUIRE_JS_PLAYER": false,
      "REQUIRE_AUTH": true,
      "SUPPORTS_COOKIES": true
    },
    "ios_creator": {
      "INNERTUBE_CONTEXT": {
        "client": {
          "clientName": "IOS_CREATOR",
          "clientVersion": "24.45.100",
          "deviceMake": "Apple",
          "deviceModel": "iPhone16,2",
          "userAgent": "com.google.ios.ytcreator/24.45.100 (iPhone16,2; U; CPU iOS 18_1_0 like Mac OS X;)",
          "osName": "iPhone",
          "osVersion": "18.1.0.22B83"
        }
      },
      "INNERTUBE_CONTEXT_CLIENT_NAME": 15,
      "REQUIRE_JS_PLAYER": false,
      "REQUIRE_AUTH": true
    },
    "mweb": {
      "INNERTUBE_CONTEXT": {
        "client": {
          "clientName": "MWEB",
          "clientVersion": "2.20240726.01.00"
        }
      },
      "INNERTUBE_CONTEXT_CLIENT_NAME": 2,
      "SUPPORTS_COOKIES": true
    },
    "visionos": {
      "INNERTUBE_CONTEXT": {
        "client": {
          "clientName": "VISIONOS",
          "clientVersion": "1.02",
          "deviceMake": "Apple",
          "deviceModel": "RealityDevice17,1",
          "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 15_7_3) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.0 Safari/605.1.15",
          "osName": "visionOS",
          "osVersion": "26.5.23O471"
        }
      },
      "INNERTUBE_CONTEXT_CLIENT_NAME": 101,
      "REQUIRE_JS_PLAYER": false
    },
    "tv": {
      "INNERTUBE_CONTEXT": {
        "client": {
          "clientName": "TVHTML5",
          "clientVersion": "7.20260707.07.00",
          "userAgent": "Mozilla/5.0 (ChromiumStylePlatform) Cobalt/25.lts.30.1034943-gold (unlike Gecko), Unknown_TV_Unknown_0/Unknown (Unknown, Unknown)"
        }
      },
      "INNERTUBE_CONTEXT_CLIENT_NAME": 7,
      "AUTHENTICATED_USER_AGENT": "Mozilla/5.0 (ChromiumStylePlatform) Cobalt/25.lts.30.1034943-gold (unlike Gecko), Unknown_TV_Unknown_0/Unknown (Unknown, Unknown)"
    },
    "tv_embedded": {
      "INNERTUBE_CONTEXT": {
        "client": {
          "clientName": "TVHTML5_SIMPLY_EMBEDDED_PLAYER",
          "clientVersion": "2.0"
        }
      },
      "INNERTUBE_CONTEXT_CLIENT_NAME": 85,
      "REQUIRE_AUTH": true,
      "SUPPORTS_COOKIES": true
    },
    "tv_downgraded": {
      "INNERTUBE_CONTEXT": {
        "client": {
          "clientName": "TVHTML5",
          "clientVersion": "5.20260707",
          "userAgent": "Mozilla/5.0 (ChromiumStylePlatform) Cobalt/Version"
        }
      },
      "INNERTUBE_CONTEXT_CLIENT_NAME": 7,
      "SUPPORTS_COOKIES": true
    }
  };

  var DEFAULT_CLIENT_ORDER = ["android","web","ios","tv_downgraded"];
}
