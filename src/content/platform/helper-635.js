// Module 635 - Savior Helper 635
export default function(t,e,r) {
  "use strict";
  var n=r(126),i=r(15),o=r(172),a=r(117);
  function s(t){
  o.call(this,"mont",t),this.a=new n(t.a,16).toRed(this.red),this.b=new n(t.b,16).toRed(this.red),this.i4=new n(4).toRed(this.red).redInvm(),
  this.two=new n(2).toRed(this.red),this.a24=this.i4.redMul(this.a.redAdd(this.two))}
  function u(t,e,r){
  o.BasePoint.call(this,t,"projective"),null===e&&null===r?(this.x=this.curve.one,this.z=this.curve.zero):
  (this.x=new n(e,16),this.z=new n(r,16),this.x.red||(this.x=this.x.toRed(this.curve.red)),this.z.red||
  (this.z=this.z.toRed(this.curve.red)))}
  i(s,o),t.exports=s,s.prototype.validate=function(t){
  var e=t.normalize().x,r=e.redSqr(),n=r.redMul(e).redAdd(r.redMul(this.a)).redAdd(e);
  return 0===n.redSqrt().redSqr().cmp(n)}
  ,i(u,o.BasePoint),s.prototype.decodePoint=function(t,e){
  return this.point(a.toArray(t,e),1)}
  ,s.prototype.point=function(t,e){
  return new u(this,t,e)}
  ,s.prototype.pointFromJSON=function(t){
  return u.fromJSON(this,t)}
  ,u.prototype.precompute=function(){
  }
  ,u.prototype._encode=function(){
  return this.getX().toArray("be",this.curve.p.byteLength())}
  ,u.fromJSON=function(t,e){
  return new u(t,e[0],e[1]||t.one)}
  ,u.prototype.inspect=function(){
  return this.isInfinity()?"<EC Point Infinity>":"<EC Point x: "+this.x.fromRed().toString(16,2)+" z: "+this.z.fromRed().toString(16,
  2)+">"}
  ,u.prototype.isInfinity=function(){
  return 0===this.z.cmpn(0)}
  ,u.prototype.dbl=function(){
  var t=this.x.redAdd(this.z).redSqr(),e=this.x.redSub(this.z).redSqr(),r=t.redSub(e),n=t.redMul(e),
  i=r.redMul(e.redAdd(this.curve.a24.redMul(r)));
  return this.curve.point(n,i)}
  ,u.prototype.add=function(){
  throw new Error("Not supported on Montgomery curve")}
  ,u.prototype.diffAdd=function(t,e){
  var r=this.x.redAdd(this.z),n=this.x.redSub(this.z),i=t.x.redAdd(t.z),o=t.x.redSub(t.z).redMul(r),
  a=i.redMul(n),s=e.z.redMul(o.redAdd(a).redSqr()),u=e.x.redMul(o.redISub(a).redSqr());
  return this.curve.point(s,u)}
  ,u.prototype.mul=function(t){
  for(var e=t.clone(),r=this,n=this.curve.point(null,null),i=[];
  0!==e.cmpn(0);
  e.iushrn(1))i.push(e.andln(1));
  for(var o=i.length-1;
  o>=0;
  o--)0===i[o]?(r=r.diffAdd(n,this),n=n.dbl()):(n=r.diffAdd(n,this),r=r.dbl());
  return n}
  ,u.prototype.mulAdd=function(){
  throw new Error("Not supported on Montgomery curve")}
  ,u.prototype.jumlAdd=function(){
  throw new Error("Not supported on Montgomery curve")}
  ,u.prototype.eq=function(t){
  return 0===this.getX().cmp(t.getX())}
  ,u.prototype.normalize=function(){
  return this.x=this.x.redMul(this.z.redInvm()),this.z=this.curve.one,this}
  ,u.prototype.getX=function(){
  return this.normalize(),this.x.fromRed()}
  };
