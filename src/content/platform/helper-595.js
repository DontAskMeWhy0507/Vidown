// Module 595 - Savior Helper 595
export default function(t,e,r) {
  "use strict";
  var n=r(15),i=r(144),o=r(25).Buffer,a=[1518500249,1859775393,-1894007588,-899497514],s=new Array(80);
  function u(){
  this.init(),this._w=s,i.call(this,64,56)}
  function c(t){
  return t<<5|t>>>27}
  function l(t){
  return t<<30|t>>>2}
  function f(t,e,r,n){
  return 0===t?e&r|~e&n:2===t?e&r|e&n|r&n:e^r^n}
  n(u,i),u.prototype.init=function(){
  return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,
  this}
  ,u.prototype._update=function(t){
  for(var e,r=this._w,n=0|this._a,i=0|this._b,o=0|this._c,s=0|this._d,u=0|this._e,d=0;
  d<16;
  ++d)r[d]=t.readInt32BE(4*d);
  for(;
  d<80;
  ++d)r[d]=(e=r[d-3]^r[d-8]^r[d-14]^r[d-16])<<1|e>>>31;
  for(var h=0;
  h<80;
  ++h){
  var p=~~(h/20),v=c(n)+f(p,i,o,s)+u+r[h]+a[p]|0;
  u=s,s=o,o=l(i),i=n,n=v}
  this._a=n+this._a|0,this._b=i+this._b|0,this._c=o+this._c|0,this._d=s+this._d|0,this._e=u+this._e|0}
  ,u.prototype._hash=function(){
  var t=o.allocUnsafe(20);
  return t.writeInt32BE(0|this._a,0),t.writeInt32BE(0|this._b,4),t.writeInt32BE(0|this._c,8),t.writeInt32BE(0|this._d,
  12),t.writeInt32BE(0|this._e,16),t}
  ,t.exports=u};
