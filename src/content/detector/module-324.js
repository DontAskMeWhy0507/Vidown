// Module 324 [detector]
export default function(t,e,r) {
  "use strict";
r.r(e);var n,i=[],o=location.href,a={getDomains:()=>["rophimz.","rophim."],urls:[{checkUrl:t=>{var e=t.url,r=new URL(e).searchParams.get("q");return!!r&&(n=r,!0)},getUrl:()=>n||[]},{checkUrl:()=>Boolean(i.length),getUrl:()=>i[0].url}],processRequestIds:t=>!(!/\/hls\/.+[0-9a-z]\=\.m3u8/.test(t.url)&&!/\/superrounho\/.+\.m3u8/.test(t.url))&&(i[0]=t,!0),forceUpdate(){location.href!==o&&(i=[],EE.emit("widget.forceUpdate"),o=location.href)}};e.default=a};
