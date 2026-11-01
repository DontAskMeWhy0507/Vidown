// Module 211 [detector]
module.exports = function(t,e,r) {
  "use strict";
r.r(e);var n=[],i={getDomains:()=>["balkanarchitect.com"],urls:[{checkUrl:t=>{var e=t.url;return Boolean(e.match(/embed\/[a-z0-9]+/i))},getUrl:t=>{var e,r=null===(e=t.url.match(/embed\/([a-z0-9]+)/i))||void 0===e?void 0:e[1];if(r){var i=new RegExp(r+"/hls/master[\\-a-z0-9]+\\.m3u8","i"),o=n.find(t=>t.url.match(i));return null==o?void 0:o.url}}}],processRequestIds:t=>(n.some(e=>t.url==e.url)||n.push(t),!0)};e.default=i};
