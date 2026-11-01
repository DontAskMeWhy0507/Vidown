// Module 610 [platform]
export default function(t,e,r){var n=r(25).Buffer;function i(t,e,r){var i=t._cipher.encryptBlock(t._prev)[0]^e;return t._prev=n.concat([t._prev.slice(1),n.from([r?e:i])]),i}e.encrypt=function(t,e,r){for(var o=e.length,a=n.allocUnsafe(o),s=-1;++s<o;)a[s]=i(t,e[s],r);return a}};
