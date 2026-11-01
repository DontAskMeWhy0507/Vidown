// Module 665 [crypto]
export default function(t,e,r) {
  "use strict";
var n=/Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r+/=]+)[\n\r]+/m,i=/^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m,o=/^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r+/=]+)-----END \1-----$/m,a=r(171),s=r(428),u=r(25).Buffer;t.exports=function(t,e){var r,c=t.toString(),l=c.match(n);if(l){var f="aes"+l[1],d=u.from(l[2],"hex"),h=u.from(l[3].replace(/[\r\n]/g,""),"base64"),p=a(e,d.slice(0,8),parseInt(l[1],10)).key,v=[],m=s.createDecipheriv(f,p,d);v.push(m.update(h)),v.push(m.final()),r=u.concat(v)}else{var y=c.match(o);r=u.from(y[2].replace(/[\r\n]/g,""),"base64")}return{tag:c.match(i)[1],data:r}}};
