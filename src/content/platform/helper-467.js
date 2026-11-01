// Module 467 - Savior Helper 467
export default function(t,e,r) {
  "use strict";
  var n=r(15),i=r(144),o=r(25).Buffer,a=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,
  2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,
  3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,
  2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,
  1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,
  3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,
  1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],
  s=new Array(64);
  function u(){
  this.init(),this._w=s,i.call(this,64,56)}
  function c(t,e,r){
  return r^t&(e^r)}
  function l(t,e,r){
  return t&e|r&(t|e)}
  function f(t){
  return(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10)}
  function d(t){
  return(t>>>6|t<<26)^(t>>>11|t<<21)^(t>>>25|t<<7)}
  function h(t){
  return(t>>>7|t<<25)^(t>>>18|t<<14)^t>>>3}
  n(u,i),u.prototype.init=function(){
  return this._a=1779033703,this._b=3144134277,this._c=1013904242,this._d=2773480762,this._e=1359893119,
  this._f=2600822924,this._g=528734635,this._h=1541459225,this}
  ,u.prototype._update=function(t){
  for(var e,r=this._w,n=0|this._a,i=0|this._b,o=0|this._c,s=0|this._d,u=0|this._e,p=0|this._f,v=0|this._g,
  m=0|this._h,y=0;
  y<16;
  ++y)r[y]=t.readInt32BE(4*y);
  for(;
  y<64;
  ++y)r[y]=0|(((e=r[y-2])>>>17|e<<15)^(e>>>19|e<<13)^e>>>10)+r[y-7]+h(r[y-15])+r[y-16];
  for(var g=0;
  g<64;
  ++g){
  var b=m+d(u)+c(u,p,v)+a[g]+r[g]|0,w=f(n)+l(n,i,o)|0;
  m=v,v=p,p=u,u=s+b|0,s=o,o=i,i=n,n=b+w|0}
  this._a=n+this._a|0,this._b=i+this._b|0,this._c=o+this._c|0,this._d=s+this._d|0,this._e=u+this._e|0,
  this._f=p+this._f|0,this._g=v+this._g|0,this._h=m+this._h|0}
  ,u.prototype._hash=function(){
  var t=o.allocUnsafe(32);
  return t.writeInt32BE(this._a,0),t.writeInt32BE(this._b,4),t.writeInt32BE(this._c,8),t.writeInt32BE(this._d,
  12),t.writeInt32BE(this._e,16),t.writeInt32BE(this._f,20),t.writeInt32BE(this._g,24),t.writeInt32BE(this._h,
  28),t}
  ,t.exports=u};
