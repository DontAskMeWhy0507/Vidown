const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const BG_DIR = path.join(ROOT_DIR, 'src', 'background');
const registry = require(path.join(BG_DIR, 'module-registry.js'));

console.log('=== BUILDING BACKGROUND SCRIPT ===\n');

// Webpack array assembly
const slotCodes = [];
for (let i = 0; i < registry.totalSlots; i++) {
  const k = i.toString();
  if (!registry.modules[k]) {
    slotCodes.push('null');
  } else {
    const full = path.join(BG_DIR, registry.modules[k]);
    let code = fs.readFileSync(full, 'utf8');
    code = code.replace(/^\/\/[^\n]*\n/, '').replace(/^export default\s+/, '').trim();
    if (code.endsWith(';')) code = code.slice(0, -1);
    slotCodes.push(code);
  }
}

const bootstrap = `(function (e) {
  var t = {};
  function r(n) {
    if (t[n]) {
      return t[n].exports;
    }
    var o = t[n] = {
      i: n,
      l: false,
      exports: {}
    };
    e[n].call(o.exports, o, o.exports, r);
    o.l = true;
    return o.exports;
  }
  r.m = e;
  r.c = t;
  r.d = function (e, t, n) {
    if (!r.o(e, t)) {
      Object.defineProperty(e, t, {
        enumerable: true,
        get: n
      });
    }
  };
  r.r = function (e) {
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      });
    }
    Object.defineProperty(e, "__esModule", {
      value: true
    });
  };
  r.t = function (e, t) {
    if (1 & t) {
      e = r(e);
    }
    if (8 & t) {
      return e;
    }
    if (4 & t && typeof e === "object" && e && e.__esModule) {
      return e;
    }
    var n = Object.create(null);
    r.r(n);
    Object.defineProperty(n, "default", {
      enumerable: true,
      value: e
    });
    if (2 & t && typeof e !== "string") {
      for (var o in e) {
        r.d(n, o, function (t) {
          return e[t];
        }.bind(null, o));
      }
    }
    return n;
  };
  r.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    r.d(t, "a", t);
    return t;
  };
  r.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  };
  r.p = "./";
  r(r.s = ${registry.entry});
})([${slotCodes.join(',\n')}]);\n`;

const outPath = path.join(ROOT_DIR, 'background.js');
fs.writeFileSync(outPath, bootstrap, 'utf8');
console.log(`Generated background.js: ${Buffer.byteLength(bootstrap, 'utf8')} bytes raw.`);
console.log('✓ Background build completed successfully!\n');
