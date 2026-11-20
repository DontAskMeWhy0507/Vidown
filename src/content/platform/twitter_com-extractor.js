// Module 362 - Savior Twitter_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_dom_utils = requireFn(0),
  dep_url_utils = requireFn(3),
  dep_dash_parser = requireFn(28);
  var
  obj_u = {
  }
  ,
  obj_c = {
  }
  ,
  obj_l = {
  }
  ,
  obj_f = {
  getDomains: () => ["twitter.com", "x.com"],
  siteMatcher: param_t => /^(www\.)?x\.com$/i.test(param_t),
  getCustomParent: param_t => param_t.closest('[data-testid="videoComponent"]'),
  processRequestIds(param_t) {
  var var_e,
  var_r = null === (var_e = param_t.url.match(/video\.twimg\.com\/.+video\/(\d+)/i)) ||
  void 0 === var_e ? void 0 : var_e[1];
  return var_r && (param_t.origin || (param_t.origin = "https://" + param_t.host),
  obj_l[var_r] = param_t), !0;
  }
  ,
  urls: [{
  checkUrl: param_t => {
  var var_e = param_t.url;
  return "IFRAME" == param_t.node.nodeName && var_e.includes("/cards-frame/");
  }
  ,
  async getUrl({node}) {
    await new Promise(resolve => {
      let timer;
      const done=()=>{clearTimeout(timer);node.removeEventListener('load',done);resolve();};
      node.addEventListener('load',done,{once:true});
      timer=setTimeout(done,3000);
    });
    return node.contentDocument?.querySelector('iframe')?.src;
  },
  mediaObjectChange: param_t => (param_t.mediaObject.ext = "mp4", "video")
  }
  ],
  default: {
  getUrl: async ({url, node}) => {
    const direct=node.currentSrc || node.src || url;
    if (direct && /^https?:/.test(direct) && /\.(mp4|m3u8|webm)(?:[?#]|$)/i.test(direct)) return direct;
    // Injection is needed even if the poster already revealed a video ID.
    await Object(dep_dom_utils.sendMessage)({type:'inject_script',file:'twitter'}).catch(()=>{});
    let source;
    try { source=JSON.parse(node.getAttribute('savior-twitter-source') || '{}'); } catch (_) { source={}; }
    const info=source.video_info || source.videoInfo || source;
    const variants=info.variants || source.variants || [];
    const candidates=variants.filter(v=>v && /^https?:/.test(v.url || '')).sort((a,b)=>(b.bitrate || b.bit_rate || 0)-(a.bitrate || a.bit_rate || 0));
    if(candidates.length) return candidates.map(v=>{
      const item=Object(dep_url_utils.f)(v.url);
      item.ext=/\.m3u8(?:[?#]|$)/i.test(v.url)?'m3u8':'mp4';item.exts=[item.ext];item.type='video';
      item.filename=document.title;item.quality=v.bitrate?Math.round(v.bitrate/1000)+' kbps':'Original';
      return item;
    });
    const id=node.getAttribute('savior-twitter-vid') || ((node.poster || '').match(/video[^/]*\/(\d+)/)||[])[1];
    return id && obj_l[id] ? [Object.assign({},obj_l[id],{type:'video',filename:document.title})] : [];
  },
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  if (obj_u[var_e.url]) { var_e.fixName = obj_u[var_e.url]; var_e.filename = obj_u[var_e.url]; }
  }
  }
  ,
  parse: {
  sources: [{
  checkSource: param_t => {
  var var_e = param_t.url;
  return !!Object(dep_dom_utils.getVideoId)(var_e);
  }
  ,
  parse: param_t => {
  var var_e = param_t.media;
  return dep_dash_parser.a.parse(var_e.url);
  }
  }
  ]
  }
  ,
  toggleLight: {
  turnOff: {
  updated() {
  var var_t;
  if (/https:\/\/(?:twitter|x)\.com\/.*\/video\/[^\/]*/.test(location.href)) {
  var var_e = document.querySelector('[data-viewportview="true"]');
  var_e && (null === (var_t = var_e.previousSibling) || void 0 === var_t ||
  var_t.classList.add("--savior-overlay-z-index-top"));
  }
  }
  }
  }
  };
  exportsObj.default = obj_f;
  };
