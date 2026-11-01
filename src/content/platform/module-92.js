// Module 92 [platform]
export default function(t,e,r) {
  "use strict";
r.r(e),r.d(e,"getSiteData",(function(){return a}));var n={},i=[],o=r(180);function a(t,e){var r=i.find(r=>r.siteMatcher(t,e));if(r)return r;var o=Object.keys(n).find(e=>t.includes(e));return n[o||""]}o.keys().forEach(t=>{var e,r;if(!t.match(/(index\.ts)/i)){var a=o(t).default||o(t);a.siteMatcher&&i.push(a),null===(r=null===(e=a.getDomains)||void 0===e?void 0:e.call(a))||void 0===r||r.map(t=>{n[t]=a})}})};
