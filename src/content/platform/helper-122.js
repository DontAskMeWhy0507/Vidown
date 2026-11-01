// Module 122 - Savior Helper 122
export default function(t,e,r) {
  "use strict";
  var n=r(116),i=r(15);
  function o(t,e){
  return 55296==(64512&t.charCodeAt(e))&&(!(e<0||e+1>=t.length)&&56320==(64512&t.charCodeAt(e+1)))}
  function a(t){
  return(t>>>24|t>>>8&65280|t<<8&16711680|(255&t)<<24)>>>0}
  function s(t){
  return 1===t.length?"0"+t:t}
  function u(t){
  return 7===t.length?"0"+t:6===t.length?"00"+t:5===t.length?"000"+t:4===t.length?"0000"+t:3===t.length?
  "00000"+t:2===t.length?"000000"+t:1===t.length?"0000000"+t:t}
  e.inherits=i,e.toArray=function(t,e){
  if(Array.isArray(t))return t.slice();
  if(!t)return[];
  var r=[];
  if("string"==typeof t)if(e){
  if("hex"===e)for((t=t.replace(/[^a-z0-9]+/gi,"")).length%2!=0&&(t="0"+t),i=0;
  i<t.length;
  i+=2)r.push(parseInt(t[i]+t[i+1],16))}
  else for(var n=0,i=0;
  i<t.length;
  i++){
  var a=t.charCodeAt(i);
  a<128?r[n++]=a:a<2048?(r[n++]=a>>6|192,r[n++]=63&a|128):o(t,i)?(a=65536+((1023&a)<<10)+(1023&t.charCodeAt(++i)),
  r[n++]=a>>18|240,r[n++]=a>>12&63|128,r[n++]=a>>6&63|128,r[n++]=63&a|128):(r[n++]=a>>12|224,r[n++]=a>>6&63|128,
  r[n++]=63&a|128)}
  else for(i=0;
  i<t.length;
  i++)r[i]=0|t[i];
  return r}
  ,e.toHex=function(t){
  for(var e="",r=0;
  r<t.length;
  r++)e+=s(t[r].toString(16));
  return e}
  ,e.htonl=a,e.toHex32=function(t,e){
  for(var r="",n=0;
  n<t.length;
  n++){
  var i=t[n];
  "little"===e&&(i=a(i)),r+=u(i.toString(16))}
  return r}
  ,e.zero2=s,e.zero8=u,e.join32=function(t,e,r,i){
  var o=r-e;
  n(o%4==0);
  for(var a=new Array(o/4),s=0,u=e;
  s<a.length;
  s++,u+=4){
  var c;
  c="big"===i?t[u]<<24|t[u+1]<<16|t[u+2]<<8|t[u+3]:t[u+3]<<24|t[u+2]<<16|t[u+1]<<8|t[u],a[s]=c>>>0}
  return a}
  ,e.split32=function(t,e){
  for(var r=new Array(4*t.length),n=0,i=0;
  n<t.length;
  n++,i+=4){
  var o=t[n];
  "big"===e?(r[i]=o>>>24,r[i+1]=o>>>16&255,r[i+2]=o>>>8&255,r[i+3]=255&o):(r[i+3]=o>>>24,r[i+2]=o>>>16&255,
  r[i+1]=o>>>8&255,r[i]=255&o)}
  return r}
  ,e.rotr32=function(t,e){
  return t>>>e|t<<32-e}
  ,e.rotl32=function(t,e){
  return t<<e|t>>>32-e}
  ,e.sum32=function(t,e){
  return t+e>>>0}
  ,e.sum32_3=function(t,e,r){
  return t+e+r>>>0}
  ,e.sum32_4=function(t,e,r,n){
  return t+e+r+n>>>0}
  ,e.sum32_5=function(t,e,r,n,i){
  return t+e+r+n+i>>>0}
  ,e.sum64=function(t,e,r,n){
  var i=t[e],o=n+t[e+1]>>>0,a=(o<n?1:0)+r+i;
  t[e]=a>>>0,t[e+1]=o}
  ,e.sum64_hi=function(t,e,r,n){
  return(e+n>>>0<e?1:0)+t+r>>>0}
  ,e.sum64_lo=function(t,e,r,n){
  return e+n>>>0}
  ,e.sum64_4_hi=function(t,e,r,n,i,o,a,s){
  var u=0,c=e;
  return u+=(c=c+n>>>0)<e?1:0,u+=(c=c+o>>>0)<o?1:0,t+r+i+a+(u+=(c=c+s>>>0)<s?1:0)>>>0}
  ,e.sum64_4_lo=function(t,e,r,n,i,o,a,s){
  return e+n+o+s>>>0}
  ,e.sum64_5_hi=function(t,e,r,n,i,o,a,s,u,c){
  var l=0,f=e;
  return l+=(f=f+n>>>0)<e?1:0,l+=(f=f+o>>>0)<o?1:0,l+=(f=f+s>>>0)<s?1:0,t+r+i+a+u+(l+=(f=f+c>>>0)<c?
  1:0)>>>0}
  ,e.sum64_5_lo=function(t,e,r,n,i,o,a,s,u,c){
  return e+n+o+s+c>>>0}
  ,e.rotr64_hi=function(t,e,r){
  return(e<<32-r|t>>>r)>>>0}
  ,e.rotr64_lo=function(t,e,r){
  return(t<<32-r|e>>>r)>>>0}
  ,e.shr64_hi=function(t,e,r){
  return t>>>r}
  ,e.shr64_lo=function(t,e,r){
  return(t<<32-r|e>>>r)>>>0}
  };
