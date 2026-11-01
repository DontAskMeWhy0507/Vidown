// Module 274 [detector]
export default function(t,e,r) {
  "use strict";
var n;r.r(e);var i={getDomains:()=>["mad20.io"],urls:[{checkUrl:t=>t.url.startsWith("blob:"),getUrl(){if(n)return[n]}}],processRequestIds(t){var e,r,i,o,a,s,u;if(!(null===(e=t.filename)||void 0===e?void 0:e.startsWith("Fragments"))){var c=null===(r=t.url.match(/\.streaming\.media\.azure\.net\/[a-z0-9\-_]+\/([a-z0-9\.\-_]+)\.ism\/manifest/i))||void 0===r?void 0:r[1],l=null===(u=null===(s=null===(a=null===(o=null===(i=document.querySelector("#videoWrapper"))||void 0===i?void 0:i.nextElementSibling)||void 0===o?void 0:o.querySelector("div div"))||void 0===a?void 0:a.innerText)||void 0===s?void 0:s.split("\n"))||void 0===u?void 0:u[0];return(c||l)&&(t.filename=c||l),n=t,!0}}};e.default=i};
