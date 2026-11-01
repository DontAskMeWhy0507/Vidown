// Module 223 [detector]
export default function(t,e,r) {
  "use strict";
r.r(e);var n=[],i={getDomains:()=>["craftsy."],processRequestIds:t=>{if(t.url.match(/manifest.prod.boltdns.net\/.+\/master.m3u8/i))return n.push(t),!0},default:{getUrl:()=>{var t,e=null===(t=n[n.length-1])||void 0===t?void 0:t.url;return n.length=0,e}}};e.default=i};
