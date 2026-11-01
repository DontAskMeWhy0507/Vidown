// Module 292 [detector]
export default function(t,e,r) {
  "use strict";
r.r(e);var n=r(3),i={18:"360p",22:"720p"},o={18:"Medium",22:"Standard"},a=/VIDEO_CONFIG\s*=\s(.*)\s*\n*\t*<\/script>/,s={getDomains:()=>["viet69.org"],parse:{sources:[],default:t=>{var e,r=t.response;return r?JSON.parse((null===(e=a.exec(r))||void 0===e?void 0:e[1])||"{}").streams.map(t=>{var e=Object(n.f)(t.play_url);return e.filename=document.title,e.ext="mp4",e.exts=["mp4"],e.type="video",e.resolution=i[t.format_id],e.quality=o[t.format_id],e}):[]}},urls:[{checkUrl:t=>t.url.includes("blogger.com"),mediaObjectChange:t=>{var e=t.mediaObject;return e.ext="m3u8",e.exts=["m3u8"],"video"}}]};e.default=s};
