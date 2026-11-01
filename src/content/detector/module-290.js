// Module 290 [detector]
export default function(t,e,r) {
  "use strict";
r.r(e);var n=r(3),i=/<.+?src="(.*?)".+HD/i;var o={getDomains:()=>["news.zing.vn"],parse:{sources:[],default:t=>{var e,r=[],o=t.response.match(i);if(o&&o.length){var a=o[1];if(a){var s=Object(n.f)(a),u=(e=document.querySelector("h2.video-title"))?e.innerText:document.querySelector("h1.the-article-title")?document.title:void 0;u&&(s.filename=u),s.title=s.filename,s.quality="Standard",s.type="video",r.push(s)}}return r}},default:{getUrl:()=>window.location.href,mediaObjectChange:t=>{var e=t.mediaObject;return e.ext="m3u8",e.exts=["m3u8"],"video"}}};e.default=o};
