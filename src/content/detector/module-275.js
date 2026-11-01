// Module 275 [detector]
module.exports = function(t,e,r) {
  "use strict";
r.r(e);var n=r(28),i=/youtube.*.com\/embed\/([a-z0-9\-_]+)/i,o={getDomains:()=>["mapstudy.edu"],getCustomParent:t=>t.parentElement,parse:{sources:[{checkSource:t=>{var e=t.url;return Boolean(e.match(i))},parse:t=>{var e,r="https://www.youtube.com/watch?v="+(null===(e=t.media.url.match(i))||void 0===e?void 0:e[1]);return n.a.parse(r)}}]},urls:[{checkUrl:t=>{var e=t.url;return"IFRAME"==t.node.nodeName&&Boolean(e.match(i))},getUrl:t=>t.url,mediaObjectChange:t=>{var e=t.mediaObject;return e.ext="mp4",e.exts=["mp4"],"video"}}]};e.default=o};
