// Module 491 - Savior Helper 491
export default function(t,e,r) {
  "use strict";
  t.exports=a;
  var n=r(145),i=Object.create(r(29));
  function o(t,e){
  var r=this._transformState;
  r.transforming=!1;
  var n=r.writecb;
  if(!n)return this.emit("error",new Error("write callback called multiple times"));
  r.writechunk=null,r.writecb=null,null!=e&&this.push(e),n(t);
  var i=this._readableState;
  i.reading=!1,(i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}
  function a(t){
  if(!(this instanceof a))return new a(t);
  n.call(this,t),this._transformState={
  afterTransform:o.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:
  null}
  ,this._readableState.needReadable=!0,this._readableState.sync=!1,t&&("function"==typeof t.transform&&
  (this._transform=t.transform),"function"==typeof t.flush&&(this._flush=t.flush)),this.on("prefinish",
  s)}
  function s(){
  var t=this;
  "function"==typeof this._flush?this._flush((function(e,r){
  u(t,e,r)}
  )):u(this,null,null)}
  function u(t,e,r){
  if(e)return t.emit("error",e);
  if(null!=r&&t.push(r),t._writableState.length)throw new Error("Calling transform done when ws.length != 0");
  if(t._transformState.transforming)throw new Error("Calling transform done when still transforming");
  return t.push(null)}
  i.inherits=r(15),i.inherits(a,n),a.prototype.push=function(t,e){
  return this._transformState.needTransform=!1,n.prototype.push.call(this,t,e)}
  ,a.prototype._transform=function(t,e,r){
  throw new Error("_transform() is not implemented")}
  ,a.prototype._write=function(t,e,r){
  var n=this._transformState;
  if(n.writecb=r,n.writechunk=t,n.writeencoding=e,!n.transforming){
  var i=this._readableState;
  (n.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}
  }
  ,a.prototype._read=function(t){
  var e=this._transformState;
  null!==e.writechunk&&e.writecb&&!e.transforming?(e.transforming=!0,this._transform(e.writechunk,e.writeencoding,
  e.afterTransform)):e.needTransform=!0}
  ,a.prototype._destroy=function(t,e){
  var r=this;
  n.prototype._destroy.call(this,t,(function(t){
  e(t),r.emit("close")}
  ))}
  };
