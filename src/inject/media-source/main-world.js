(() => {
  // Read the selected player's current state. Do not choose a tab-wide stream.
  window.__vidownResolveMedia = async function(request) {
    const node = document.querySelector('[data-vidown-media-token="' + request.token + '"]');
    const unchanged = () => node && location.href === request.sourceUrl &&
      (node.currentSrc || node.src || '') === request.currentSrc && (node.poster || '') === request.poster;
    if (!unchanged()) return {error:'MEDIA_CHANGED'};
    const http = value => {
      if (typeof value !== 'string' || !value.trim()) return '';
      try { const u = new URL(value, location.href); return /^https?:$/.test(u.protocol) && !u.username && !u.password ? u.href : ''; } catch (_) { return ''; }
    };
    const direct = (url, extra = {}) => !/^image\//i.test(extra.mime || '') && http(url) ? {url:http(url),...extra} : null;
    const clean = formats => [...new Map(formats.filter(Boolean).map(f => [f.manifest || f.url, f])).values()];
    const reply = formats => unchanged() ? {formats:clean(formats),title:document.title,pageUrl:request.pageUrl || location.href} : {error:'MEDIA_CHANGED'};
    let videos = /^(VIDEO|AUDIO)$/.test(node.tagName) ? [node] : Array.from(node.shadowRoot?.querySelectorAll('video,audio') || node.querySelectorAll('video,audio'));
    if (videos.length > 1) return {error:'AMBIGUOUS_MEDIA'};
    const video = videos[0] || node;
    if (/^SHREDDIT-/.test(node.tagName)) {
      const formats = ['hls','dash','playback-url'].map(key => direct(node.getAttribute(key),{mime:key === 'dash' ? 'application/dash+xml' : 'application/x-mpegURL'})).filter(Boolean);
      if (formats.length) return reply(formats);
    }
    if (/^(VIDEO|AUDIO)$/.test(video.tagName)) {
      const current = direct(video.currentSrc || video.src);
      if (current) return reply([current]);
      const sources = Array.from(video.querySelectorAll('source')).map(s => direct(s.src,{mime:s.type})).filter(Boolean);
      if (sources.length) return reply(sources);
    }
    // Public player APIs are checked against this exact DOM element.
    try {
      for (const player of Object.values(window.videojs?.getPlayers?.() || {})) {
        if (player?.el?.()?.contains(video)) {
          const sources = (player.currentSources?.() || [player.currentSource?.()]).filter(Boolean).map(s => direct(s.src,{mime:s.type})).filter(Boolean);
          if (sources.length) return reply(sources);
        }
      }
    } catch (_) {}
    for (let parent = video, depth = 0; parent && parent !== document.body && depth++ < 14; parent = parent.parentElement) {
      if (parent !== video && parent.querySelectorAll('video,audio').length > 1) break;
      try {
        if (parent.id && typeof window.jwplayer === 'function') {
          const player = window.jwplayer(parent.id);
          if (player?.getContainer?.()?.contains(video)) {
            const item = player.getPlaylistItem();
            if (!item?.drm) {
              const formats = (item?.sources || [item]).filter(s => !s?.drm).map(s => direct(s?.file,{mime:s?.type,height:s?.height,quality:s?.label})).filter(Boolean);
              if (formats.length) return reply(formats);
            }
          }
        }
        const asset = parent.ui?.getControls?.()?.getPlayer?.()?.getAssetUri?.();
        if (http(asset)) return reply([direct(asset)]);
      } catch (_) {}
    }
    const postCode = (request.pageUrl || '').match(/\/(?:post|status|p|reels?)\/([\w-]+)/)?.[1];
    const expectedId = request.mediaId || (video.poster || '').match(/(?:ext_tw|amplify)_video_thumb\/(\d+)/)?.[1];
    const sameAsset = (a,b) => { try { return a && b && new URL(a).origin + new URL(a).pathname === new URL(b).origin + new URL(b).pathname; } catch (_) { return false; } };
    function groupsFrom(root) {
      const seen = new WeakSet(), groups = [];
      let budget = 6000;
      function walk(value, depth = 0, metadata = {}, context = '') {
        if (!value || typeof value !== 'object' || value.nodeType || depth > 18 || budget-- <= 0 || seen.has(value)) return;
        seen.add(value);
        if (Array.isArray(value)) { value.forEach(v => walk(v,depth+1,metadata,context)); return; }
        const own = Object.fromEntries(Object.entries(Object.getOwnPropertyDescriptors(value)).filter(([,d]) => 'value' in d).map(([k,d]) => [k,d.value]));
        const meta = {...metadata};
        if (own.code || own.shortcode) meta.code = String(own.code || own.shortcode);
        if (own.pk || own.id_str || own.video_id || own.videoId || own.videoID || own.contentId || own.id) meta.id = String(own.pk || own.id_str || own.video_id || own.videoId || own.videoID || own.contentId || own.id).split('_')[0];
        if (own.image_versions2?.candidates) meta.posters = own.image_versions2.candidates.map(p => p.url);
        if (own.thumbnail_src || own.poster) meta.posters = [own.thumbnail_src || own.poster];
        let formats = [];
        const versions = own.video_versions || own.videoResources || own.video_info?.variants || own.videoInfo?.variants;
        if (Array.isArray(versions)) formats.push(...versions.map(v => direct(v.url || v.src,{height:v.height || v.configHeight,width:v.width || v.configWidth,mime:v.content_type})));
        for (const key of ['hdSrc','sdSrc','videoSrc','videoUrl','video_url','playable_url','playable_url_quality_hd','browser_native_hd_url','browser_native_sd_url','progressive_url']) {
          if (typeof own[key] === 'string') formats.push(direct(own[key]));
        }
        for (const key of ['manifestUrl','manifest_url','dashManifestUrl','hlsManifestUrl','dash_manifest_url','manifest']) {
          if (http(own[key])) formats.push(direct(own[key],{mime:/dash|\.mpd(?:[?#]|$)/i.test(key + own[key] + context) ? 'application/dash+xml' : 'application/x-mpegURL'}));
        }
        if (Array.isArray(own.progressive_urls)) formats.push(...own.progressive_urls.map(v => direct(v.progressive_url,{height:v.metadata?.height,quality:v.metadata?.quality})));
        const manifests = [own.video_dash_manifest,own.dash_manifest,own.manifest_xml,own.manifest];
        if (own.videoDeliveryResponseFragment?.videoDeliveryResponseResult) walk(own.videoDeliveryResponseFragment.videoDeliveryResponseResult,depth+1,meta,'video');
        if (Array.isArray(own.dash_manifests)) manifests.push(...own.dash_manifests.map(m => m.manifest_xml));
        for (const manifest of manifests) {
          if (typeof manifest === 'string' && /<MPD\b/i.test(manifest) && !/urn:uuid:|widevine|playready|cenc:default_KID/i.test(manifest)) formats.push({manifest});
        }
        if (/video|source|playback/i.test(context) || /^video\//.test(own.type || own.mimeType || '')) {
          const url = own.src || own.file || own.url;
          if (!/\.(?:jpe?g|png|webp|gif)(?:[?#]|$)/i.test(url || '')) formats.push(direct(url,{mime:own.type || own.mimeType,height:own.height}));
        }
        formats = clean(formats);
        if (formats.length) { groups.push({...meta,formats}); return; }
        for (const [key,child] of Object.entries(own)) {
          if (/^(?:return|stateNode|_owner|ref|alternate|sibling)$/.test(key)) continue;
          if (typeof child === 'string' && child.length < 8*1024*1024 && /^\s*[\[{]/.test(child) && /video_versions|video_dash_manifest|progressive_urls/.test(child)) {
            try { walk(JSON.parse(child),depth+1,meta,key); } catch (_) {}
          }
          walk(child,depth+1,meta,key);
        }
      }
      walk(root);
      return [...new Map(groups.map(g => [g.code + '|' + g.id + '|' + g.formats.map(f => f.url || f.manifest).sort().join('|'),g])).values()];
    }
    function choose(groups, local, allowPost = true) {
      const byId = groups.filter(g => expectedId && g.id === String(expectedId));
      const byPoster = groups.filter(g => g.posters?.some(p => sameAsset(p,video.poster)));
      const byPost = allowPost ? groups.filter(g => postCode && (g.code === postCode || g.id === postCode)) : [];
      const matches = byId.length ? byId : byPoster.length ? byPoster : byPost;
      if (expectedId && !matches.length && groups.some(g => g.id)) return null;
      const candidates = [...new Map((matches.length ? matches : local ? groups : []).map(g => [g.formats.map(f => f.url || f.manifest).sort().join('|'),g])).values()];
      return candidates.length === 1 ? {formats:candidates[0].formats} : candidates.length > 1 ? {error:'AMBIGUOUS_MEDIA'} : null;
    }
    try {
      const packaged = node.getAttribute('packaged-media-json');
      if (packaged) {
        const selected = choose(groupsFrom(JSON.parse(packaged)),true);
        if (selected?.formats) return reply(selected.formats);
        if (selected?.error) return selected;
      }
    } catch (_) {}
    // Traverse local React state only while the container still owns one player.
    for (let parent = video, depth = 0; parent && parent !== document.body && depth++ < 14; parent = parent.parentElement) {
      const multiple = parent !== video && parent.querySelectorAll('video,audio').length > 1;
      for (const key of Object.keys(parent).filter(k => /^__react(?:Props|Fiber|InternalInstance)/.test(k))) {
        const value = parent[key];
        const selected = choose(groupsFrom(value?.memoizedProps || value),!multiple,!multiple);
        if (selected?.formats) return reply(selected.formats);
        if (selected?.error) return selected;
      }
      if (multiple) break;
      if (parent.tagName === 'ARTICLE' || parent.getAttribute?.('role') === 'article') break;
    }
    function fromDocument(doc) {
      if (!postCode && !expectedId) return null;
      const groups = [];
      for (const script of doc.querySelectorAll('script[type="application/json"],script[data-sjs]')) {
        const text = script.textContent || '';
        if (text.length > 8*1024*1024) continue;
        try { groups.push(...groupsFrom(JSON.parse(text))); } catch (_) {}
      }
      return choose(groups,false);
    }
    const embedded = fromDocument(document);
    if (embedded?.formats) return reply(embedded.formats);
    if (embedded?.error) return embedded;
    // Fetch the exact post using the browser session. This also handles private
    // posts that the signed-in user can view, without exporting its cookies.
    if (postCode && /(^|\.)threads\.(com|net)$/.test(location.hostname) && request.pageUrl) {
      try {
        const target = new URL(request.pageUrl);
        if (target.origin === location.origin) {
          target.pathname = target.pathname.replace(/\/media\/?$/, '');
          const response = await fetch(target.href,{credentials:'include',signal:AbortSignal.timeout(12000)});
          if (response.ok) {
            const html = await response.text();
            if (html.length < 12*1024*1024) {
              const selected = fromDocument(new DOMParser().parseFromString(html,'text/html'));
              if (selected?.formats) return reply(selected.formats);
              if (selected?.error) return selected;
            }
          }
        }
      } catch (_) {}
    }
    return {error:'BROWSER_MEDIA_NOT_FOUND'};
  };
})();
