// Module 608 [platform]
module.exports = function(t,e,r){var n=r(155);e.encrypt=function(t,e){var r=n(e,t._prev);return t._prev=t._cipher.encryptBlock(r),t._prev},e.decrypt=function(t,e){var r=t._prev;t._prev=e;var i=t._cipher.decryptBlock(e);return n(i,r)}};
