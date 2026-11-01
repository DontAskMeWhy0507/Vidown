// Module 69 [platform]
module.exports = function(t,e,r){var n,i,o,a;t.exports=(a=r(4),r(8),i=(n=a).lib.CipherParams,o=n.enc.Hex,n.format.Hex={stringify:function(t){return t.ciphertext.toString(o)},parse:function(t){var e=o.parse(t);return i.create({ciphertext:e})}},a.format.Hex)};
