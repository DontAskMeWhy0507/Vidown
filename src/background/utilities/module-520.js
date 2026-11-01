// Module 520 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  const n = r(160);
  const o = r(725);
  const i = ["mp4a", "mp3", "vorbis", "aac", "opus", "flac"];
  const a = ["mp4v", "avc1", "Sorenson H.283", "MPEG-4 Visual", "VP8", "VP9", "H.264"];
  const s = e => e.bitrate || 0;
  const c = e => a.findIndex(t => e.codecs && e.codecs.includes(t));
  const u = e => e.audioBitrate || 0;
  const l = e => i.findIndex(t => e.codecs && e.codecs.includes(t));
  const d = (e, t, r) => {
    let n = 0;
    for (let o of r) {
      n = o(t) - o(e);
      if (n !== 0) {
        break;
      }
    }
    return n;
  };
  const p = (e, t) => d(e, t, [e => parseInt(e.qualityLabel), s, c]);
  const f = (e, t) => d(e, t, [u, l]);
  t.sortFormats = (e, t) => d(e, t, [e => +!!e.isHLS, e => +!!e.isDashMPD, e => +(e.contentLength > 0), e => +(e.hasVideo && e.hasAudio), e => +e.hasVideo, e => parseInt(e.qualityLabel) || 0, s, u, c, l]);
  t.chooseFormat = (e, r) => {
    if (typeof r.format == "object") {
      if (!r.format.url) {
        throw Error("Invalid format given, did you use `ytdl.getInfo()`?");
      }
      return r.format;
    }
    let n;
    if (r.filter) {
      e = t.filterFormats(e, r.filter);
    }
    if (e.some(e => e.isHLS)) {
      e = e.filter(e => e.isHLS || !e.isLive);
    }
    const o = r.quality || "highest";
    switch (o) {
      case "highest":
        n = e[0];
        break;
      case "lowest":
        n = e[e.length - 1];
        break;
      case "highestaudio":
        {
          (e = t.filterFormats(e, "audio")).sort(f);
          const r = e[0];
          const o = (e = e.filter(e => f(r, e) === 0)).map(e => parseInt(e.qualityLabel) || 0).sort((e, t) => e - t)[0];
          n = e.find(e => (parseInt(e.qualityLabel) || 0) === o);
          break;
        }
      case "lowestaudio":
        (e = t.filterFormats(e, "audio")).sort(f);
        n = e[e.length - 1];
        break;
      case "highestvideo":
        {
          (e = t.filterFormats(e, "video")).sort(p);
          const r = e[0];
          const o = (e = e.filter(e => p(r, e) === 0)).map(e => e.audioBitrate || 0).sort((e, t) => e - t)[0];
          n = e.find(e => (e.audioBitrate || 0) === o);
          break;
        }
      case "lowestvideo":
        (e = t.filterFormats(e, "video")).sort(p);
        n = e[e.length - 1];
        break;
      default:
        n = h(o, e);
    }
    if (!n) {
      throw Error("No such format found: " + o);
    }
    return n;
  };
  const h = (e, t) => {
    let r = e => t.find(t => "" + t.itag == "" + e);
    if (Array.isArray(e)) {
      return r(e.find(e => r(e)));
    } else {
      return r(e);
    }
  };
  t.filterFormats = (e, t) => {
    let r;
    switch (t) {
      case "videoandaudio":
      case "audioandvideo":
        r = e => e.hasVideo && e.hasAudio;
        break;
      case "video":
        r = e => e.hasVideo;
        break;
      case "videoonly":
        r = e => e.hasVideo && !e.hasAudio;
        break;
      case "audio":
        r = e => e.hasAudio;
        break;
      case "audioonly":
        r = e => !e.hasVideo && e.hasAudio;
        break;
      default:
        if (typeof t != "function") {
          throw TypeError(`Given filter (${t}) is not supported`);
        }
        r = t;
    }
    return e.filter(e => !!e.url && r(e));
  };
  t.addFormatMeta = e => {
    (e = Object.assign({}, o[e.itag], e)).hasVideo = !!e.qualityLabel;
    e.hasAudio = !!e.audioBitrate;
    e.container = e.mimeType ? e.mimeType.split(";")[0].split("/")[1] : null;
    e.codecs = e.mimeType ? n.between(e.mimeType, "codecs=\"", "\"") : null;
    e.videoCodec = e.hasVideo && e.codecs ? e.codecs.split(", ")[0] : null;
    e.audioCodec = e.hasAudio && e.codecs ? e.codecs.split(", ").slice(-1)[0] : null;
    e.isLive = /\bsource[/=]yt_live_broadcast\b/.test(e.url);
    e.isHLS = /\/manifest\/hls_(variant|playlist)\//.test(e.url);
    e.isDashMPD = /\/manifest\/dash\//.test(e.url);
    return e;
  };
};
