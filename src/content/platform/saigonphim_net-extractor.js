// Module 327 - Savior Saigonphim_net Extractor
export default function(t,e,r) {
  "use strict";
  r.r(e);
  var n=r(23),i=r(31),o=[],a=location.href,s={
  getDomains:()=>["saigonphim."],default:{
  getUrl:()=>o}
  ,processRequestIds:t=>!!/^(?!.*\d+kb\/hls).*\.m3u8/.test(t.url)&&(o[0]=t,!0),forceUpdate(){
  location.href!==a&&(o=[],EE.emit("widget.forceUpdate"),a=location.href)}
  };
  e.default=Object(n.a)(i.a,["parse","urls"])(s)};
