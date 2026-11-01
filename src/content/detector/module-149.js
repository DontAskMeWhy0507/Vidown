// Module 149 [detector]
export default function(t,e,r) {
  "use strict";
r.r(e);var n=r(119),i=r(23),o={getDomains:()=>["theyounglove.com"],getCustomParent:t=>t.closest("#player, .course-learn-video .plyr"),default:{mediaObjectChange(t){var e,r,n=t.mediaObject,i=document.querySelector(".course-item.active, .lesson-active"),o=null===(r=null===(e=(null==i?void 0:i.querySelector("a"))||i)||void 0===e?void 0:e.innerText)||void 0===r?void 0:r.trim();return o&&(n.filename=o,n.fixName=o),n.type}}};e.default=Object(i.a)(n.default,["parse","default","idsProcess"])(o)};
