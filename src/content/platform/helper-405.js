// Module 405 - Savior Helper 405
export default function(t,e,r) {
  "use strict";
  var n=r(27).Buffer,i=r(15),o=r(572),a=new Array(16),s=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,
  1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,
  14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],u=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,
  0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,
  10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],c=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,
  9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,
  8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],l=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,
  15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,
  9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11],f=[0,1518500249,1859775393,2400959708,2840853838],
  d=[1352829926,1548603684,1836072691,2053994217,0];
  function h(t,e){
  return t<<e|t>>>32-e}
  function p(t,e,r,n,i,o,a,s){
  return h(t+(e^r^n)+o+a|0,s)+i|0}
  function v(t,e,r,n,i,o,a,s){
  return h(t+(e&r|~e&n)+o+a|0,s)+i|0}
  function m(t,e,r,n,i,o,a,s){
  return h(t+((e|~r)^n)+o+a|0,s)+i|0}
  function y(t,e,r,n,i,o,a,s){
  return h(t+(e&n|r&~n)+o+a|0,s)+i|0}
  function g(t,e,r,n,i,o,a,s){
  return h(t+(e^(r|~n))+o+a|0,s)+i|0}
  function b(){
  o.call(this,64),this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520}
  i(b,o),b.prototype._update=function(){
  for(var t=a,e=0;
  e<16;
  ++e)t[e]=this._block.readInt32LE(4*e);
  for(var r=0|this._a,n=0|this._b,i=0|this._c,o=0|this._d,b=0|this._e,w=0|this._a,A=0|this._b,_=0|this._c,
  E=0|this._d,S=0|this._e,O=0;
  O<80;
  O+=1){
  var x,k;
  O<16?(x=p(r,n,i,o,b,t[s[O]],f[0],c[O]),k=g(w,A,_,E,S,t[u[O]],d[0],l[O])):O<32?(x=v(r,n,i,o,b,t[s[O]],
  f[1],c[O]),k=y(w,A,_,E,S,t[u[O]],d[1],l[O])):O<48?(x=m(r,n,i,o,b,t[s[O]],f[2],c[O]),k=m(w,A,_,E,S,
  t[u[O]],d[2],l[O])):O<64?(x=y(r,n,i,o,b,t[s[O]],f[3],c[O]),k=v(w,A,_,E,S,t[u[O]],d[3],l[O])):(x=g(r,
  n,i,o,b,t[s[O]],f[4],c[O]),k=p(w,A,_,E,S,t[u[O]],d[4],l[O])),r=b,b=o,o=h(i,10),i=n,n=x,w=S,S=E,E=h(_,
  10),_=A,A=k}
  var M=this._b+i+E|0;
  this._b=this._c+o+S|0,this._c=this._d+b+w|0,this._d=this._e+r+A|0,this._e=this._a+n+_|0,this._a=M}
  ,b.prototype._digest=function(){
  this._block[this._blockOffset]=128,this._blockOffset+=1,this._blockOffset>56&&(this._block.fill(0,
  this._blockOffset,64),this._update(),this._blockOffset=0),this._block.fill(0,this._blockOffset,56),
  this._block.writeUInt32LE(this._length[0],56),this._block.writeUInt32LE(this._length[1],60),this._update();
  var t=n.alloc?n.alloc(20):new n(20);
  return t.writeInt32LE(this._a,0),t.writeInt32LE(this._b,4),t.writeInt32LE(this._c,8),t.writeInt32LE(this._d,
  12),t.writeInt32LE(this._e,16),t}
  ,t.exports=b};
