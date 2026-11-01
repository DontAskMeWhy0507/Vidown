// Module 726 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  const n = r(160);
  const o = r(438);
  const {
    parseTimestamp: i
  } = r(441);
  const a = "https://www.youtube.com/watch?v=";
  const s = {
    song: {
      name: "Music",
      url: "https://music.youtube.com/"
    }
  };
  const c = e => e ? e.runs ? e.runs[0].text : e.simpleText : null;
  t.getMedia = e => {
    let t = {};
    let r = [];
    try {
      r = e.response.contents.twoColumnWatchNextResults.results.results.contents;
    } catch (e) {}
    let n = r.find(e => e.videoSecondaryInfoRenderer);
    if (!n) {
      return {};
    }
    try {
      let e = (n.metadataRowContainer || n.videoSecondaryInfoRenderer.metadataRowContainer).metadataRowContainerRenderer.rows;
      for (let r of e) {
        if (r.metadataRowRenderer) {
          let e = c(r.metadataRowRenderer.title).toLowerCase();
          let n = r.metadataRowRenderer.contents[0];
          t[e] = c(n);
          let o = n.runs;
          if (o && o[0].navigationEndpoint) {
            t[e + "_url"] = new URL(o[0].navigationEndpoint.commandMetadata.webCommandMetadata.url, a).toString();
          }
          if (e in s) {
            t.category = s[e].name;
            t.category_url = s[e].url;
          }
        } else if (r.richMetadataRowRenderer) {
          let e = r.richMetadataRowRenderer.contents;
          let n = e.filter(e => e.richMetadataRenderer.style === "RICH_METADATA_RENDERER_STYLE_BOX_ART");
          for (let {
            richMetadataRenderer: e
          } of n) {
            let r = e;
            t.year = c(r.subtitle);
            let n = c(r.callToAction).split(" ")[1];
            t[n] = c(r.title);
            t[n + "_url"] = new URL(r.endpoint.commandMetadata.webCommandMetadata.url, a).toString();
            t.thumbnails = r.thumbnail.thumbnails;
          }
          let o = e.filter(e => e.richMetadataRenderer.style === "RICH_METADATA_RENDERER_STYLE_TOPIC");
          for (let {
            richMetadataRenderer: e
          } of o) {
            let r = e;
            t.category = c(r.title);
            t.category_url = new URL(r.endpoint.commandMetadata.webCommandMetadata.url, a).toString();
          }
        }
      }
    } catch (e) {}
    return t;
  };
  const u = e => !!e && !!e.find(e => e.metadataBadgeRenderer.tooltip === "Verified");
  t.getAuthor = e => {
    let t;
    let r;
    let o = [];
    let i = false;
    try {
      let s = e.response.contents.twoColumnWatchNextResults.results.results.contents.find(e => e.videoSecondaryInfoRenderer && e.videoSecondaryInfoRenderer.owner && e.videoSecondaryInfoRenderer.owner.videoOwnerRenderer).videoSecondaryInfoRenderer.owner.videoOwnerRenderer;
      t = s.navigationEndpoint.browseEndpoint.browseId;
      o = s.thumbnail.thumbnails.map(e => {
        e.url = new URL(e.url, a).toString();
        return e;
      });
      r = n.parseAbbreviatedNumber(c(s.subscriberCountText));
      i = u(s.badges);
    } catch (e) {}
    try {
      let s = e.player_response.microformat && e.player_response.microformat.playerMicroformatRenderer;
      let c = s && s.channelId || t || e.player_response.videoDetails.channelId;
      let u = {
        id: c,
        name: s ? s.ownerChannelName : e.player_response.videoDetails.author,
        user: s ? s.ownerProfileUrl.split("/").slice(-1)[0] : null,
        channel_url: "https://www.youtube.com/channel/" + c,
        external_channel_url: s ? "https://www.youtube.com/channel/" + s.externalChannelId : "",
        user_url: s ? new URL(s.ownerProfileUrl, a).toString() : "",
        thumbnails: o,
        verified: i,
        subscriber_count: r
      };
      if (o.length) {
        n.deprecate(u, "avatar", u.thumbnails[0].url, "author.avatar", "author.thumbnails[0].url");
      }
      return u;
    } catch (e) {
      return {};
    }
  };
  const l = (e, t) => {
    if (e) {
      try {
        let r = c(e.viewCountText);
        let o = c(e.shortViewCountText);
        let s = t.find(t => t.id === e.videoId);
        if (!/^\d/.test(o)) {
          o = s && s.short_view_count_text || "";
        }
        r = (/^\d/.test(r) ? r : o).split(" ")[0];
        let l = e.shortBylineText.runs[0].navigationEndpoint.browseEndpoint;
        let d = l.browseId;
        let p = c(e.shortBylineText);
        let f = (l.canonicalBaseUrl || "").split("/").slice(-1)[0];
        let h = {
          id: e.videoId,
          title: c(e.title),
          published: c(e.publishedTimeText),
          author: {
            id: d,
            name: p,
            user: f,
            channel_url: "https://www.youtube.com/channel/" + d,
            user_url: "https://www.youtube.com/user/" + f,
            thumbnails: e.channelThumbnail.thumbnails.map(e => {
              e.url = new URL(e.url, a).toString();
              return e;
            }),
            verified: u(e.ownerBadges),
            [Symbol.toPrimitive]: () => {
              console.warn("`relatedVideo.author` will be removed in a near future release, use `relatedVideo.author.name` instead.");
              return h.author.name;
            }
          },
          short_view_count_text: o.split(" ")[0],
          view_count: r.replace(/,/g, ""),
          length_seconds: e.lengthText ? Math.floor(i(c(e.lengthText)) / 1000) : t && "" + t.length_seconds,
          thumbnails: e.thumbnail.thumbnails,
          richThumbnails: e.richThumbnail ? e.richThumbnail.movingThumbnailRenderer.movingThumbnailDetails.thumbnails : [],
          isLive: !!e.badges && !!e.badges.find(e => e.metadataBadgeRenderer.label === "LIVE NOW")
        };
        n.deprecate(h, "author_thumbnail", h.author.thumbnails[0].url, "relatedVideo.author_thumbnail", "relatedVideo.author.thumbnails[0].url");
        n.deprecate(h, "ucid", h.author.id, "relatedVideo.ucid", "relatedVideo.author.id");
        n.deprecate(h, "video_thumbnail", h.thumbnails[0].url, "relatedVideo.video_thumbnail", "relatedVideo.thumbnails[0].url");
        return h;
      } catch (e) {}
    }
  };
  t.getRelatedVideos = e => {
    let t = [];
    let r = [];
    try {
      t = e.response.webWatchNextResponseExtensionData.relatedVideoArgs.split(",").map(e => o.parse(e));
    } catch (e) {}
    try {
      r = e.response.contents.twoColumnWatchNextResults.secondaryResults.secondaryResults.results;
    } catch (e) {
      return [];
    }
    let n = [];
    for (let e of r || []) {
      let r = e.compactVideoRenderer;
      if (r) {
        let e = l(r, t);
        if (e) {
          n.push(e);
        }
      } else {
        let r = e.compactAutoplayRenderer || e.itemSectionRenderer;
        if (!r || !Array.isArray(r.contents)) {
          continue;
        }
        for (let e of r.contents) {
          let r = l(e.compactVideoRenderer, t);
          if (r) {
            n.push(r);
          }
        }
      }
    }
    return n;
  };
  t.getLikes = e => {
    try {
      let t = e.response.contents.twoColumnWatchNextResults.results.results.contents.find(e => e.videoPrimaryInfoRenderer).videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons.find(e => e.toggleButtonRenderer && e.toggleButtonRenderer.defaultIcon.iconType === "LIKE");
      return parseInt(t.toggleButtonRenderer.defaultText.accessibility.accessibilityData.label.replace(/\D+/g, ""));
    } catch (e) {
      return null;
    }
  };
  t.getDislikes = e => {
    try {
      let t = e.response.contents.twoColumnWatchNextResults.results.results.contents.find(e => e.videoPrimaryInfoRenderer).videoPrimaryInfoRenderer.videoActions.menuRenderer.topLevelButtons.find(e => e.toggleButtonRenderer && e.toggleButtonRenderer.defaultIcon.iconType === "DISLIKE");
      return parseInt(t.toggleButtonRenderer.defaultText.accessibility.accessibilityData.label.replace(/\D+/g, ""));
    } catch (e) {
      return null;
    }
  };
  t.cleanVideoDetails = (e, t) => {
    e.thumbnails = e.thumbnail.thumbnails;
    delete e.thumbnail;
    n.deprecate(e, "thumbnail", {
      thumbnails: e.thumbnails
    }, "videoDetails.thumbnail.thumbnails", "videoDetails.thumbnails");
    e.description = e.shortDescription || c(e.description);
    delete e.shortDescription;
    n.deprecate(e, "shortDescription", e.description, "videoDetails.shortDescription", "videoDetails.description");
    e.lengthSeconds = t.player_response.microformat && t.player_response.microformat.playerMicroformatRenderer.lengthSeconds || t.player_response.videoDetails.lengthSeconds;
    return e;
  };
  t.getStoryboards = e => {
    const t = e.player_response.storyboards && e.player_response.storyboards.playerStoryboardSpecRenderer && e.player_response.storyboards.playerStoryboardSpecRenderer.spec && e.player_response.storyboards.playerStoryboardSpecRenderer.spec.split("|");
    if (!t) {
      return [];
    }
    const r = new URL(t.shift());
    return t.map((e, t) => {
      let [n, o, i, a, s, c, u, l] = e.split("#");
      r.searchParams.set("sigh", l);
      i = parseInt(i, 10);
      a = parseInt(a, 10);
      s = parseInt(s, 10);
      const d = Math.ceil(i / (a * s));
      return {
        templateUrl: r.toString().replace("$L", t).replace("$N", u),
        thumbnailWidth: parseInt(n, 10),
        thumbnailHeight: parseInt(o, 10),
        thumbnailCount: i,
        interval: parseInt(c, 10),
        columns: a,
        rows: s,
        storyboardCount: d
      };
    });
  };
  t.getChapters = e => {
    const t = e.response && e.response.playerOverlays && e.response.playerOverlays.playerOverlayRenderer;
    const r = t && t.decoratedPlayerBarRenderer && t.decoratedPlayerBarRenderer.decoratedPlayerBarRenderer && t.decoratedPlayerBarRenderer.decoratedPlayerBarRenderer.playerBar;
    const n = r && r.multiMarkersPlayerBarRenderer && r.multiMarkersPlayerBarRenderer.markersMap;
    const o = Array.isArray(n) && n.find(e => e.value && Array.isArray(e.value.chapters));
    if (!o) {
      return [];
    }
    return o.value.chapters.map(e => ({
      title: c(e.chapterRenderer.title),
      start_time: e.chapterRenderer.timeRangeStartMillis / 1000
    }));
  };
};
