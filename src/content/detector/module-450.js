// Module 450 [detector]
export default function(t,e,r) {
  "use strict";
e.a=new class{constructor(){this.hostMapping={"24h.com.vn":".media-player","phimmoi.net":".media-player","clipvuivn.com":"#video-js","kenhvideo.com":".jwplayer","chimsedinang.com":"#clh-vid-video","phimnhanh.net":"#player","eva.vn":".viewVideoPlay .video-js","cnet.com":".videoPlayer","tv.tuoitre.vn":".VCSortableInPreviewMode"}}hasSpecialSupport(){return Object.keys(this.hostMapping).some(t=>window.location.host.includes(t))}getNode(t){var e=(t=t||window.location.host).replace("www.",""),r=this.hostMapping[e];return r?document.querySelector(r):null}}};
