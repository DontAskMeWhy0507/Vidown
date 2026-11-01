// Module 698 [platform]
export default function(t,e,r) {
  "use strict";
r.r(e),e.default={index:40,getUrl(t,e,r,n){if(t.match(/(vnstream\.)/i)){var i=location.href.match(/\/embed\/\?vid=([a-zA-Z0-9\-_]+)/);try{if(i){var o=i[1];return{return:!0,data:{url:`${location.origin}/sources/?vid=${o}&s=1`,vid:o,referer:location.href}}}}catch(t){}}return{return:!1,data:null}}}};
