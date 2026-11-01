// Module 395 [detector]
module.exports = function(t,e,r) {
  "use strict";
r.r(e);var n={},i={getDomains:()=>["xiaohongshu.com"],processRequestIds(t){var e,r,i=null===(e=location.href.match(/\/explore\/([\da-f]+)/i))||void 0===e?void 0:e[1];if(i&&(null===(r=n[i])||void 0===r?void 0:r.url)!=t.url)return n[i]=t,!0},default:{getUrl:t=>{var e,r,i,o=t.node,a=null===(e=location.href.match(/\/explore\/([\da-f]+)/i))||void 0===e?void 0:e[1],s=null===(r=o.closest('.xgplayer, [id^="videoPlayer"]'))||void 0===r?void 0:r.id;if(s){var u=null===(i=s.match(/videoPlayer([\da-f]+)/i))||void 0===i?void 0:i[1];u&&(a=u)}if(a&&n[a])return[n[a]]}}};e.default=i};
