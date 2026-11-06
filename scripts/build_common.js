const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

const ROOT_DIR = path.resolve(__dirname, '..');
const COMMON_DIR = path.join(ROOT_DIR, 'src', 'common');
const registry = require(path.join(COMMON_DIR, 'module-registry.js'));

const isDev = process.argv.includes('--dev');
console.log(`=== BUILDING COMMON SCRIPT (${isDev ? 'DEVELOPMENT MODE' : 'RELEASE MODE'}) ===\n`);

let finalCode;

if (isDev) {
  const lines = [];
  const sections = [];

  const bootstrapHeader = `(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) {
      return t[r].exports;
    }
    var o = t[r] = {
      i: r,
      l: false,
      exports: {}
    };
    e[r].call(o.exports, o, o.exports, n);
    o.l = true;
    return o.exports;
  }
  n.m = e;
  n.c = t;
  n.d = function (e, t, r) {
    if (!n.o(e, t)) {
      Object.defineProperty(e, t, {
        enumerable: true,
        get: r
      });
    }
  };
  n.r = function (e) {
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      });
    }
    Object.defineProperty(e, "__esModule", {
      value: true
    });
  };
  n.t = function (e, t) {
    if (1 & t) {
      e = n(e);
    }
    if (8 & t) {
      return e;
    }
    if (4 & t && typeof e === "object" && e && e.__esModule) {
      return e;
    }
    var r = Object.create(null);
    n.r(r);
    Object.defineProperty(r, "default", {
      enumerable: true,
      value: e
    });
    if (2 & t && typeof e !== "string") {
      for (var o in e) {
        n.d(r, o, function (t) {
          return e[t];
        }.bind(null, o));
      }
    }
    return r;
  };
  n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    n.d(t, "a", t);
    return t;
  };
  n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  };
  n.p = "./";
  n(n.s = ${registry.entry});
})({`;

  lines.push(...bootstrapHeader.split('\n'));

  const entries = Object.entries(registry.modules);
  for (let idx = 0; idx < entries.length; idx++) {
    const [id, relPathRaw] = entries[idx];
    const isLast = (idx === entries.length - 1);
    const relPath = relPathRaw.replace(/\\/g, '/');
    const full = path.join(COMMON_DIR, relPath);
    let code = fs.readFileSync(full, 'utf8');
    code = code.replace(/^\/\/[^\n]*\n/, '').replace(/^export default\s+/, '').trim();
    if (code.endsWith(';')) code = code.slice(0, -1);

    const res = esbuild.transformSync('(' + code + ')', {
      sourcefile: 'src/common/' + relPath,
      sourcemap: 'external',
      target: 'chrome116'
    });

    let cleanCode = res.code.trim();
    if (cleanCode.endsWith(';')) cleanCode = cleanCode.slice(0, -1);

    lines.push(`  ${id}:`);
    const startLine = lines.length;
    sections.push({
      offset: { line: startLine, column: 0 },
      map: JSON.parse(res.map)
    });

    const mLines = cleanCode.split('\n');
    for (let m = 0; m < mLines.length; m++) {
      const isLastLine = (m === mLines.length - 1);
      lines.push(mLines[m] + (isLastLine && !isLast ? ',' : ''));
    }
  }

  lines.push('});');
  lines.push('');

  const indexMap = {
    version: 3,
    file: 'common.js',
    sections: sections
  };
  lines.push('//# sourceMappingURL=data:application/json;base64,' + Buffer.from(JSON.stringify(indexMap)).toString('base64'));

  finalCode = lines.join('\n');
} else {
  // Webpack object map assembly
  const propCodes = [];
  for (const [id, relPath] of Object.entries(registry.modules)) {
    const full = path.join(COMMON_DIR, relPath);
    let code = fs.readFileSync(full, 'utf8');
    code = code.replace(/^\/\/[^\n]*\n/, '').replace(/^export default\s+/, '').trim();
    if (code.endsWith(';')) code = code.slice(0, -1);
    propCodes.push(`  ${id}: ${code}`);
  }

  const bootstrap = `(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) {
      return t[r].exports;
    }
    var o = t[r] = {
      i: r,
      l: false,
      exports: {}
    };
    e[r].call(o.exports, o, o.exports, n);
    o.l = true;
    return o.exports;
  }
  n.m = e;
  n.c = t;
  n.d = function (e, t, r) {
    if (!n.o(e, t)) {
      Object.defineProperty(e, t, {
        enumerable: true,
        get: r
      });
    }
  };
  n.r = function (e) {
    if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
      Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      });
    }
    Object.defineProperty(e, "__esModule", {
      value: true
    });
  };
  n.t = function (e, t) {
    if (1 & t) {
      e = n(e);
    }
    if (8 & t) {
      return e;
    }
    if (4 & t && typeof e === "object" && e && e.__esModule) {
      return e;
    }
    var r = Object.create(null);
    n.r(r);
    Object.defineProperty(r, "default", {
      enumerable: true,
      value: e
    });
    if (2 & t && typeof e !== "string") {
      for (var o in e) {
        n.d(r, o, function (t) {
          return e[t];
        }.bind(null, o));
      }
    }
    return r;
  };
  n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    n.d(t, "a", t);
    return t;
  };
  n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  };
  n.p = "./";
  n(n.s = ${registry.entry});
})({
${propCodes.join(',\n')}
});\n`;

  finalCode = bootstrap;
}

const outPath = path.join(ROOT_DIR, 'common.js');
fs.writeFileSync(outPath, finalCode, 'utf8');
console.log(`Generated common.js: ${Buffer.byteLength(finalCode, 'utf8')} bytes raw.`);
console.log('✓ Common build completed successfully!\n');
