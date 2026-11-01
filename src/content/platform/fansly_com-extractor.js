// Module 233 - Savior Fansly_com Extractor
export default function(t,e,r) {
  "use strict";
  var n;
  r.r(e);
  var i="",o={
  getDomains:()=>["fansly.com"],forceUpdate(){
  var t,e,r,o=document.querySelector(".stream iframe"),a=(null===(r=null===(e=null===(t=null==o?void 0:
  o.closest(".stream"))||void 0===t?void 0:t.querySelector(`.server_option [data-embed="${o.src}
  "]`))||void 0===e?void 0:e.innerText)||void 0===r?void 0:r.trim())||"_",s=`${document.title}
   ${a}
  `;
  i!=s&&(i=s,n=void 0)}
  ,urls:[{
  checkUrl:t=>t.url.startsWith("blob:"),getUrl:()=>null==n?void 0:n.url,mediaObjectChange(t){
  var e,r,n,o=t.mediaObject,a=null===(n=null===(r=null===(e=t.node.closest("div:has(.post-text-container)"))||
  void 0===e?void 0:e.querySelector(".post-text-container"))||void 0===r?void 0:r.innerText)||void 0===n?
  void 0:n.trim();
  if(a&&(i=a,o.filename=a,o.fixName=a),o.url.match(/\.(m3u8|mpd)$/i))return"video"}
  }
  ],default:{
  mediaObjectChange(t){
  var e,r,n,o=t.mediaObject,a=null===(n=null===(r=null===(e=t.node.closest("div:has(.post-text-container)"))||
  void 0===e?void 0:e.querySelector(".post-text-container"))||void 0===r?void 0:r.innerText)||void 0===n?
  void 0:n.trim();
  if(a&&(i=a,o.filename=a,o.fixName=a),o.url.match(/\.(m3u8|mpd)$/i))return"video"}
  }
  ,processRequestIds(t){
  if(t.url.match(/\.(m3u8|mpd)$/i))return n=t,!0}
  };
  e.default=o};
