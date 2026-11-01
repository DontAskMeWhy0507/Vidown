// Module 572 - Savior Helper 572
export default function(t,e,r) {
  "use strict";
  var n=r(25).Buffer,i=r(573),o=r(588).Transform;
  function a(t){
  o.call(this),this._block=n.allocUnsafe(t),this._blockSize=t,this._blockOffset=0,this._length=[0,0,
  0,0],this._finalized=!1}
  r(15)(a,o),a.prototype._transform=function(t,e,r){
  var n=null;
  try{
  this.update(t,e)}
  catch(t){
  n=t}
  r(n)}
  ,a.prototype._flush=function(t){
  var e=null;
  try{
  this.push(this.digest())}
  catch(t){
  e=t}
  t(e)}
  ,a.prototype.update=function(t,e){
  if(this._finalized)throw new Error("Digest already called");
  for(var r=i(t,e),n=this._block,o=0;
  this._blockOffset+r.length-o>=this._blockSize;
  ){
  for(var a=this._blockOffset;
  a<this._blockSize;
  )n[a]=r[o],a+=1,o+=1;
  this._update(),this._blockOffset=0}
  for(;
  o<r.length;
  )n[this._blockOffset]=r[o],this._blockOffset+=1,o+=1;
  for(var s=0,u=8*r.length;
  u>0;
  ++s)this._length[s]+=u,(u=this._length[s]/4294967296|0)>0&&(this._length[s]-=4294967296*u);
  return this}
  ,a.prototype._update=function(){
  throw new Error("_update is not implemented")}
  ,a.prototype.digest=function(t){
  if(this._finalized)throw new Error("Digest already called");
  this._finalized=!0;
  var e=this._digest();
  void 0!==t&&(e=e.toString(t)),this._block.fill(0),this._blockOffset=0;
  for(var r=0;
  r<4;
  ++r)this._length[r]=0;
  return e}
  ,a.prototype._digest=function(){
  throw new Error("_digest is not implemented")}
  ,t.exports=a};
