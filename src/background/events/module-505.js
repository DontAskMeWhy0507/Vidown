// Module 505 [events] - Savior Background Script Subsystem
export default function (e, t, r) {
  (function (e) {
    (function (t) {
      t.parser = function (e, t) {
        return new i(e, t);
      };
      t.SAXParser = i;
      t.SAXStream = s;
      t.createStream = function (e, t) {
        return new s(e, t);
      };
      t.MAX_BUFFER_LENGTH = 65536;
      var n;
      var o = ["comment", "sgmlDecl", "textNode", "tagName", "doctype", "procInstName", "procInstBody", "entity", "attribName", "attribValue", "cdata", "script"];
      function i(e, r) {
        if (!(this instanceof i)) {
          return new i(e, r);
        }
        (function (e) {
          for (var t = 0, r = o.length; t < r; t++) {
            e[o[t]] = "";
          }
        })(this);
        this.q = this.c = "";
        this.bufferCheckPosition = t.MAX_BUFFER_LENGTH;
        this.opt = r || {};
        this.opt.lowercase = this.opt.lowercase || this.opt.lowercasetags;
        this.looseCase = this.opt.lowercase ? "toLowerCase" : "toUpperCase";
        this.tags = [];
        this.closed = this.closedRoot = this.sawRoot = false;
        this.tag = this.error = null;
        this.strict = !!e;
        this.noscript = !!e || !!this.opt.noscript;
        this.state = E.BEGIN;
        this.strictEntities = this.opt.strictEntities;
        this.ENTITIES = this.strictEntities ? Object.create(t.XML_ENTITIES) : Object.create(t.ENTITIES);
        this.attribList = [];
        if (this.opt.xmlns) {
          this.ns = Object.create(u);
        }
        this.trackPosition = this.opt.position !== false;
        if (this.trackPosition) {
          this.position = this.line = this.column = 0;
        }
        T(this, "onready");
      }
      t.EVENTS = ["text", "processinginstruction", "sgmldeclaration", "doctype", "comment", "opentagstart", "attribute", "opentag", "closetag", "opencdata", "cdata", "closecdata", "error", "end", "ready", "script", "opennamespace", "closenamespace"];
      Object.create ||= function (e) {
        function t() {}
        t.prototype = e;
        return new t();
      };
      Object.keys ||= function (e) {
        var t = [];
        for (var r in e) {
          if (e.hasOwnProperty(r)) {
            t.push(r);
          }
        }
        return t;
      };
      i.prototype = {
        end: function () {
          S(this);
        },
        write: function (e) {
          if (this.error) {
            throw this.error;
          }
          if (this.closed) {
            return x(this, "Cannot write after close. Assign an onready handler.");
          }
          if (e === null) {
            return S(this);
          }
          if (typeof e == "object") {
            e = e.toString();
          }
          var r = 0;
          var n = "";
          while (n = U(e, r++), this.c = n, n) {
            if (this.trackPosition) {
              this.position++;
              if (n === "\n") {
                this.line++;
                this.column = 0;
              } else {
                this.column++;
              }
            }
            switch (this.state) {
              case E.BEGIN:
                this.state = E.BEGIN_WHITESPACE;
                if (n === "﻿") {
                  continue;
                }
                F(this, n);
                continue;
              case E.BEGIN_WHITESPACE:
                F(this, n);
                continue;
              case E.TEXT:
                if (this.sawRoot && !this.closedRoot) {
                  var i = r - 1;
                  while (n && n !== "<" && n !== "&") {
                    if ((n = U(e, r++)) && this.trackPosition) {
                      this.position++;
                      if (n === "\n") {
                        this.line++;
                        this.column = 0;
                      } else {
                        this.column++;
                      }
                    }
                  }
                  this.textNode += e.substring(i, r - 1);
                }
                if (n !== "<" || this.sawRoot && this.closedRoot && !this.strict) {
                  if (!h(n) && (!this.sawRoot || !!this.closedRoot)) {
                    O(this, "Text data outside of root node.");
                  }
                  if (n === "&") {
                    this.state = E.TEXT_ENTITY;
                  } else {
                    this.textNode += n;
                  }
                } else {
                  this.state = E.OPEN_WAKA;
                  this.startTagPosition = this.position;
                }
                continue;
              case E.SCRIPT:
                if (n === "<") {
                  this.state = E.SCRIPT_ENDING;
                } else {
                  this.script += n;
                }
                continue;
              case E.SCRIPT_ENDING:
                if (n === "/") {
                  this.state = E.CLOSE_TAG;
                } else {
                  this.script += "<" + n;
                  this.state = E.SCRIPT;
                }
                continue;
              case E.OPEN_WAKA:
                if (n === "!") {
                  this.state = E.SGML_DECL;
                  this.sgmlDecl = "";
                } else if (h(n)) ;else if (v(l, n)) {
                  this.state = E.OPEN_TAG;
                  this.tagName = n;
                } else if (n === "/") {
                  this.state = E.CLOSE_TAG;
                  this.tagName = "";
                } else if (n === "?") {
                  this.state = E.PROC_INST;
                  this.procInstName = this.procInstBody = "";
                } else {
                  O(this, "Unencoded <");
                  if (this.startTagPosition + 1 < this.position) {
                    var a = this.position - this.startTagPosition;
                    n = new Array(a).join(" ") + n;
                  }
                  this.textNode += "<" + n;
                  this.state = E.TEXT;
                }
                continue;
              case E.SGML_DECL:
                if ((this.sgmlDecl + n).toUpperCase() === "[CDATA[") {
                  k(this, "onopencdata");
                  this.state = E.CDATA;
                  this.sgmlDecl = "";
                  this.cdata = "";
                } else if (this.sgmlDecl + n === "--") {
                  this.state = E.COMMENT;
                  this.comment = "";
                  this.sgmlDecl = "";
                } else if ((this.sgmlDecl + n).toUpperCase() === "DOCTYPE") {
                  this.state = E.DOCTYPE;
                  if (this.doctype || this.sawRoot) {
                    O(this, "Inappropriately located doctype declaration");
                  }
                  this.doctype = "";
                  this.sgmlDecl = "";
                } else if (n === ">") {
                  k(this, "onsgmldeclaration", this.sgmlDecl);
                  this.sgmlDecl = "";
                  this.state = E.TEXT;
                } else if (m(n)) {
                  this.state = E.SGML_DECL_QUOTED;
                  this.sgmlDecl += n;
                } else {
                  this.sgmlDecl += n;
                }
                continue;
              case E.SGML_DECL_QUOTED:
                if (n === this.q) {
                  this.state = E.SGML_DECL;
                  this.q = "";
                }
                this.sgmlDecl += n;
                continue;
              case E.DOCTYPE:
                if (n === ">") {
                  this.state = E.TEXT;
                  k(this, "ondoctype", this.doctype);
                  this.doctype = true;
                } else {
                  this.doctype += n;
                  if (n === "[") {
                    this.state = E.DOCTYPE_DTD;
                  } else if (m(n)) {
                    this.state = E.DOCTYPE_QUOTED;
                    this.q = n;
                  }
                }
                continue;
              case E.DOCTYPE_QUOTED:
                this.doctype += n;
                if (n === this.q) {
                  this.q = "";
                  this.state = E.DOCTYPE;
                }
                continue;
              case E.DOCTYPE_DTD:
                this.doctype += n;
                if (n === "]") {
                  this.state = E.DOCTYPE;
                } else if (m(n)) {
                  this.state = E.DOCTYPE_DTD_QUOTED;
                  this.q = n;
                }
                continue;
              case E.DOCTYPE_DTD_QUOTED:
                this.doctype += n;
                if (n === this.q) {
                  this.state = E.DOCTYPE_DTD;
                  this.q = "";
                }
                continue;
              case E.COMMENT:
                if (n === "-") {
                  this.state = E.COMMENT_ENDING;
                } else {
                  this.comment += n;
                }
                continue;
              case E.COMMENT_ENDING:
                if (n === "-") {
                  this.state = E.COMMENT_ENDED;
                  this.comment = C(this.opt, this.comment);
                  if (this.comment) {
                    k(this, "oncomment", this.comment);
                  }
                  this.comment = "";
                } else {
                  this.comment += "-" + n;
                  this.state = E.COMMENT;
                }
                continue;
              case E.COMMENT_ENDED:
                if (n !== ">") {
                  O(this, "Malformed comment");
                  this.comment += "--" + n;
                  this.state = E.COMMENT;
                } else {
                  this.state = E.TEXT;
                }
                continue;
              case E.CDATA:
                if (n === "]") {
                  this.state = E.CDATA_ENDING;
                } else {
                  this.cdata += n;
                }
                continue;
              case E.CDATA_ENDING:
                if (n === "]") {
                  this.state = E.CDATA_ENDING_2;
                } else {
                  this.cdata += "]" + n;
                  this.state = E.CDATA;
                }
                continue;
              case E.CDATA_ENDING_2:
                if (n === ">") {
                  if (this.cdata) {
                    k(this, "oncdata", this.cdata);
                  }
                  k(this, "onclosecdata");
                  this.cdata = "";
                  this.state = E.TEXT;
                } else if (n === "]") {
                  this.cdata += "]";
                } else {
                  this.cdata += "]]" + n;
                  this.state = E.CDATA;
                }
                continue;
              case E.PROC_INST:
                if (n === "?") {
                  this.state = E.PROC_INST_ENDING;
                } else if (h(n)) {
                  this.state = E.PROC_INST_BODY;
                } else {
                  this.procInstName += n;
                }
                continue;
              case E.PROC_INST_BODY:
                if (!this.procInstBody && h(n)) {
                  continue;
                }
                if (n === "?") {
                  this.state = E.PROC_INST_ENDING;
                } else {
                  this.procInstBody += n;
                }
                continue;
              case E.PROC_INST_ENDING:
                if (n === ">") {
                  k(this, "onprocessinginstruction", {
                    name: this.procInstName,
                    body: this.procInstBody
                  });
                  this.procInstName = this.procInstBody = "";
                  this.state = E.TEXT;
                } else {
                  this.procInstBody += "?" + n;
                  this.state = E.PROC_INST_BODY;
                }
                continue;
              case E.OPEN_TAG:
                if (v(d, n)) {
                  this.tagName += n;
                } else {
                  I(this);
                  if (n === ">") {
                    P(this);
                  } else if (n === "/") {
                    this.state = E.OPEN_TAG_SLASH;
                  } else {
                    if (!h(n)) {
                      O(this, "Invalid character in tag name");
                    }
                    this.state = E.ATTRIB;
                  }
                }
                continue;
              case E.OPEN_TAG_SLASH:
                if (n === ">") {
                  P(this, true);
                  B(this);
                } else {
                  O(this, "Forward-slash in opening tag not followed by >");
                  this.state = E.ATTRIB;
                }
                continue;
              case E.ATTRIB:
                if (h(n)) {
                  continue;
                }
                if (n === ">") {
                  P(this);
                } else if (n === "/") {
                  this.state = E.OPEN_TAG_SLASH;
                } else if (v(l, n)) {
                  this.attribName = n;
                  this.attribValue = "";
                  this.state = E.ATTRIB_NAME;
                } else {
                  O(this, "Invalid attribute name");
                }
                continue;
              case E.ATTRIB_NAME:
                if (n === "=") {
                  this.state = E.ATTRIB_VALUE;
                } else if (n === ">") {
                  O(this, "Attribute without value");
                  this.attribValue = this.attribName;
                  R(this);
                  P(this);
                } else if (h(n)) {
                  this.state = E.ATTRIB_NAME_SAW_WHITE;
                } else if (v(d, n)) {
                  this.attribName += n;
                } else {
                  O(this, "Invalid attribute name");
                }
                continue;
              case E.ATTRIB_NAME_SAW_WHITE:
                if (n === "=") {
                  this.state = E.ATTRIB_VALUE;
                } else {
                  if (h(n)) {
                    continue;
                  }
                  O(this, "Attribute without value");
                  this.tag.attributes[this.attribName] = "";
                  this.attribValue = "";
                  k(this, "onattribute", {
                    name: this.attribName,
                    value: ""
                  });
                  this.attribName = "";
                  if (n === ">") {
                    P(this);
                  } else if (v(l, n)) {
                    this.attribName = n;
                    this.state = E.ATTRIB_NAME;
                  } else {
                    O(this, "Invalid attribute name");
                    this.state = E.ATTRIB;
                  }
                }
                continue;
              case E.ATTRIB_VALUE:
                if (h(n)) {
                  continue;
                }
                if (m(n)) {
                  this.q = n;
                  this.state = E.ATTRIB_VALUE_QUOTED;
                } else {
                  O(this, "Unquoted attribute value");
                  this.state = E.ATTRIB_VALUE_UNQUOTED;
                  this.attribValue = n;
                }
                continue;
              case E.ATTRIB_VALUE_QUOTED:
                if (n !== this.q) {
                  if (n === "&") {
                    this.state = E.ATTRIB_VALUE_ENTITY_Q;
                  } else {
                    this.attribValue += n;
                  }
                  continue;
                }
                R(this);
                this.q = "";
                this.state = E.ATTRIB_VALUE_CLOSED;
                continue;
              case E.ATTRIB_VALUE_CLOSED:
                if (h(n)) {
                  this.state = E.ATTRIB;
                } else if (n === ">") {
                  P(this);
                } else if (n === "/") {
                  this.state = E.OPEN_TAG_SLASH;
                } else if (v(l, n)) {
                  O(this, "No whitespace between attributes");
                  this.attribName = n;
                  this.attribValue = "";
                  this.state = E.ATTRIB_NAME;
                } else {
                  O(this, "Invalid attribute name");
                }
                continue;
              case E.ATTRIB_VALUE_UNQUOTED:
                if (!g(n)) {
                  if (n === "&") {
                    this.state = E.ATTRIB_VALUE_ENTITY_U;
                  } else {
                    this.attribValue += n;
                  }
                  continue;
                }
                R(this);
                if (n === ">") {
                  P(this);
                } else {
                  this.state = E.ATTRIB;
                }
                continue;
              case E.CLOSE_TAG:
                if (this.tagName) {
                  if (n === ">") {
                    B(this);
                  } else if (v(d, n)) {
                    this.tagName += n;
                  } else if (this.script) {
                    this.script += "</" + this.tagName;
                    this.tagName = "";
                    this.state = E.SCRIPT;
                  } else {
                    if (!h(n)) {
                      O(this, "Invalid tagname in closing tag");
                    }
                    this.state = E.CLOSE_TAG_SAW_WHITE;
                  }
                } else {
                  if (h(n)) {
                    continue;
                  }
                  if (y(l, n)) {
                    if (this.script) {
                      this.script += "</" + n;
                      this.state = E.SCRIPT;
                    } else {
                      O(this, "Invalid tagname in closing tag.");
                    }
                  } else {
                    this.tagName = n;
                  }
                }
                continue;
              case E.CLOSE_TAG_SAW_WHITE:
                if (h(n)) {
                  continue;
                }
                if (n === ">") {
                  B(this);
                } else {
                  O(this, "Invalid characters in closing tag");
                }
                continue;
              case E.TEXT_ENTITY:
              case E.ATTRIB_VALUE_ENTITY_Q:
              case E.ATTRIB_VALUE_ENTITY_U:
                var s;
                var c;
                switch (this.state) {
                  case E.TEXT_ENTITY:
                    s = E.TEXT;
                    c = "textNode";
                    break;
                  case E.ATTRIB_VALUE_ENTITY_Q:
                    s = E.ATTRIB_VALUE_QUOTED;
                    c = "attribValue";
                    break;
                  case E.ATTRIB_VALUE_ENTITY_U:
                    s = E.ATTRIB_VALUE_UNQUOTED;
                    c = "attribValue";
                }
                if (n === ";") {
                  this[c] += M(this);
                  this.entity = "";
                  this.state = s;
                } else if (v(this.entity.length ? f : p, n)) {
                  this.entity += n;
                } else {
                  O(this, "Invalid character in entity name");
                  this[c] += "&" + this.entity + n;
                  this.entity = "";
                  this.state = s;
                }
                continue;
              default:
                throw new Error(this, "Unknown state: " + this.state);
            }
          }
          if (this.position >= this.bufferCheckPosition) {
            (function (e) {
              var r = Math.max(t.MAX_BUFFER_LENGTH, 10);
              var n = 0;
              for (var i = 0, a = o.length; i < a; i++) {
                var s = e[o[i]].length;
                if (s > r) {
                  switch (o[i]) {
                    case "textNode":
                      A(e);
                      break;
                    case "cdata":
                      k(e, "oncdata", e.cdata);
                      e.cdata = "";
                      break;
                    case "script":
                      k(e, "onscript", e.script);
                      e.script = "";
                      break;
                    default:
                      x(e, "Max buffer length exceeded: " + o[i]);
                  }
                }
                n = Math.max(n, s);
              }
              var c = t.MAX_BUFFER_LENGTH - n;
              e.bufferCheckPosition = c + e.position;
            })(this);
          }
          return this;
        }
        /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */,
        resume: function () {
          this.error = null;
          return this;
        },
        close: function () {
          return this.write(null);
        },
        flush: function () {
          var e;
          A(e = this);
          if (e.cdata !== "") {
            k(e, "oncdata", e.cdata);
            e.cdata = "";
          }
          if (e.script !== "") {
            k(e, "onscript", e.script);
            e.script = "";
          }
        }
      };
      try {
        n = r(83).Stream;
      } catch (e) {
        n = function () {};
      }
      var a = t.EVENTS.filter(function (e) {
        return e !== "error" && e !== "end";
      });
      function s(e, t) {
        if (!(this instanceof s)) {
          return new s(e, t);
        }
        n.apply(this);
        this._parser = new i(e, t);
        this.writable = true;
        this.readable = true;
        var r = this;
        this._parser.onend = function () {
          r.emit("end");
        };
        this._parser.onerror = function (e) {
          r.emit("error", e);
          r._parser.error = null;
        };
        this._decoder = null;
        a.forEach(function (e) {
          Object.defineProperty(r, "on" + e, {
            get: function () {
              return r._parser["on" + e];
            },
            set: function (t) {
              if (!t) {
                r.removeAllListeners(e);
                r._parser["on" + e] = t;
                return t;
              }
              r.on(e, t);
            },
            enumerable: true,
            configurable: false
          });
        });
      }
      s.prototype = Object.create(n.prototype, {
        constructor: {
          value: s
        }
      });
      s.prototype.write = function (t) {
        if (typeof e == "function" && typeof e.isBuffer == "function" && e.isBuffer(t)) {
          if (!this._decoder) {
            var n = r(46).StringDecoder;
            this._decoder = new n("utf8");
          }
          t = this._decoder.write(t);
        }
        this._parser.write(t.toString());
        this.emit("data", t);
        return true;
      };
      s.prototype.end = function (e) {
        if (e && e.length) {
          this.write(e);
        }
        this._parser.end();
        return true;
      };
      s.prototype.on = function (e, t) {
        var r = this;
        if (!r._parser["on" + e] && a.indexOf(e) !== -1) {
          r._parser["on" + e] = function () {
            var t = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
            t.splice(0, 0, e);
            r.emit.apply(r, t);
          };
        }
        return n.prototype.on.call(r, e, t);
      };
      var c = "http://www.w3.org/XML/1998/namespace";
      var u = {
        xml: c,
        xmlns: "http://www.w3.org/2000/xmlns/"
      };
      var l = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
      var d = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      var p = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
      var f = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function h(e) {
        return e === " " || e === "\n" || e === "\r" || e === "\t";
      }
      function m(e) {
        return e === "\"" || e === "'";
      }
      function g(e) {
        return e === ">" || h(e);
      }
      function v(e, t) {
        return e.test(t);
      }
      function y(e, t) {
        return !v(e, t);
      }
      var _;
      var b;
      var w;
      var E = 0;
      t.STATE = {
        BEGIN: E++,
        BEGIN_WHITESPACE: E++,
        TEXT: E++,
        TEXT_ENTITY: E++,
        OPEN_WAKA: E++,
        SGML_DECL: E++,
        SGML_DECL_QUOTED: E++,
        DOCTYPE: E++,
        DOCTYPE_QUOTED: E++,
        DOCTYPE_DTD: E++,
        DOCTYPE_DTD_QUOTED: E++,
        COMMENT_STARTING: E++,
        COMMENT: E++,
        COMMENT_ENDING: E++,
        COMMENT_ENDED: E++,
        CDATA: E++,
        CDATA_ENDING: E++,
        CDATA_ENDING_2: E++,
        PROC_INST: E++,
        PROC_INST_BODY: E++,
        PROC_INST_ENDING: E++,
        OPEN_TAG: E++,
        OPEN_TAG_SLASH: E++,
        ATTRIB: E++,
        ATTRIB_NAME: E++,
        ATTRIB_NAME_SAW_WHITE: E++,
        ATTRIB_VALUE: E++,
        ATTRIB_VALUE_QUOTED: E++,
        ATTRIB_VALUE_CLOSED: E++,
        ATTRIB_VALUE_UNQUOTED: E++,
        ATTRIB_VALUE_ENTITY_Q: E++,
        ATTRIB_VALUE_ENTITY_U: E++,
        CLOSE_TAG: E++,
        CLOSE_TAG_SAW_WHITE: E++,
        SCRIPT: E++,
        SCRIPT_ENDING: E++
      };
      t.XML_ENTITIES = {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: "\"",
        apos: "'"
      };
      t.ENTITIES = {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: "\"",
        apos: "'",
        AElig: 198,
        Aacute: 193,
        Acirc: 194,
        Agrave: 192,
        Aring: 197,
        Atilde: 195,
        Auml: 196,
        Ccedil: 199,
        ETH: 208,
        Eacute: 201,
        Ecirc: 202,
        Egrave: 200,
        Euml: 203,
        Iacute: 205,
        Icirc: 206,
        Igrave: 204,
        Iuml: 207,
        Ntilde: 209,
        Oacute: 211,
        Ocirc: 212,
        Ograve: 210,
        Oslash: 216,
        Otilde: 213,
        Ouml: 214,
        THORN: 222,
        Uacute: 218,
        Ucirc: 219,
        Ugrave: 217,
        Uuml: 220,
        Yacute: 221,
        aacute: 225,
        acirc: 226,
        aelig: 230,
        agrave: 224,
        aring: 229,
        atilde: 227,
        auml: 228,
        ccedil: 231,
        eacute: 233,
        ecirc: 234,
        egrave: 232,
        eth: 240,
        euml: 235,
        iacute: 237,
        icirc: 238,
        igrave: 236,
        iuml: 239,
        ntilde: 241,
        oacute: 243,
        ocirc: 244,
        ograve: 242,
        oslash: 248,
        otilde: 245,
        ouml: 246,
        szlig: 223,
        thorn: 254,
        uacute: 250,
        ucirc: 251,
        ugrave: 249,
        uuml: 252,
        yacute: 253,
        yuml: 255,
        copy: 169,
        reg: 174,
        nbsp: 160,
        iexcl: 161,
        cent: 162,
        pound: 163,
        curren: 164,
        yen: 165,
        brvbar: 166,
        sect: 167,
        uml: 168,
        ordf: 170,
        laquo: 171,
        not: 172,
        shy: 173,
        macr: 175,
        deg: 176,
        plusmn: 177,
        sup1: 185,
        sup2: 178,
        sup3: 179,
        acute: 180,
        micro: 181,
        para: 182,
        middot: 183,
        cedil: 184,
        ordm: 186,
        raquo: 187,
        frac14: 188,
        frac12: 189,
        frac34: 190,
        iquest: 191,
        times: 215,
        divide: 247,
        OElig: 338,
        oelig: 339,
        Scaron: 352,
        scaron: 353,
        Yuml: 376,
        fnof: 402,
        circ: 710,
        tilde: 732,
        Alpha: 913,
        Beta: 914,
        Gamma: 915,
        Delta: 916,
        Epsilon: 917,
        Zeta: 918,
        Eta: 919,
        Theta: 920,
        Iota: 921,
        Kappa: 922,
        Lambda: 923,
        Mu: 924,
        Nu: 925,
        Xi: 926,
        Omicron: 927,
        Pi: 928,
        Rho: 929,
        Sigma: 931,
        Tau: 932,
        Upsilon: 933,
        Phi: 934,
        Chi: 935,
        Psi: 936,
        Omega: 937,
        alpha: 945,
        beta: 946,
        gamma: 947,
        delta: 948,
        epsilon: 949,
        zeta: 950,
        eta: 951,
        theta: 952,
        iota: 953,
        kappa: 954,
        lambda: 955,
        mu: 956,
        nu: 957,
        xi: 958,
        omicron: 959,
        pi: 960,
        rho: 961,
        sigmaf: 962,
        sigma: 963,
        tau: 964,
        upsilon: 965,
        phi: 966,
        chi: 967,
        psi: 968,
        omega: 969,
        thetasym: 977,
        upsih: 978,
        piv: 982,
        ensp: 8194,
        emsp: 8195,
        thinsp: 8201,
        zwnj: 8204,
        zwj: 8205,
        lrm: 8206,
        rlm: 8207,
        ndash: 8211,
        mdash: 8212,
        lsquo: 8216,
        rsquo: 8217,
        sbquo: 8218,
        ldquo: 8220,
        rdquo: 8221,
        bdquo: 8222,
        dagger: 8224,
        Dagger: 8225,
        bull: 8226,
        hellip: 8230,
        permil: 8240,
        prime: 8242,
        Prime: 8243,
        lsaquo: 8249,
        rsaquo: 8250,
        oline: 8254,
        frasl: 8260,
        euro: 8364,
        image: 8465,
        weierp: 8472,
        real: 8476,
        trade: 8482,
        alefsym: 8501,
        larr: 8592,
        uarr: 8593,
        rarr: 8594,
        darr: 8595,
        harr: 8596,
        crarr: 8629,
        lArr: 8656,
        uArr: 8657,
        rArr: 8658,
        dArr: 8659,
        hArr: 8660,
        forall: 8704,
        part: 8706,
        exist: 8707,
        empty: 8709,
        nabla: 8711,
        isin: 8712,
        notin: 8713,
        ni: 8715,
        prod: 8719,
        sum: 8721,
        minus: 8722,
        lowast: 8727,
        radic: 8730,
        prop: 8733,
        infin: 8734,
        ang: 8736,
        and: 8743,
        or: 8744,
        cap: 8745,
        cup: 8746,
        int: 8747,
        there4: 8756,
        sim: 8764,
        cong: 8773,
        asymp: 8776,
        ne: 8800,
        equiv: 8801,
        le: 8804,
        ge: 8805,
        sub: 8834,
        sup: 8835,
        nsub: 8836,
        sube: 8838,
        supe: 8839,
        oplus: 8853,
        otimes: 8855,
        perp: 8869,
        sdot: 8901,
        lceil: 8968,
        rceil: 8969,
        lfloor: 8970,
        rfloor: 8971,
        lang: 9001,
        rang: 9002,
        loz: 9674,
        spades: 9824,
        clubs: 9827,
        hearts: 9829,
        diams: 9830
      };
      Object.keys(t.ENTITIES).forEach(function (e) {
        var r = t.ENTITIES[e];
        var n = typeof r == "number" ? String.fromCharCode(r) : r;
        t.ENTITIES[e] = n;
      });
      for (var D in t.STATE) {
        t.STATE[t.STATE[D]] = D;
      }
      function T(e, t, r) {
        if (e[t]) {
          e[t](r);
        }
      }
      function k(e, t, r) {
        if (e.textNode) {
          A(e);
        }
        T(e, t, r);
      }
      function A(e) {
        e.textNode = C(e.opt, e.textNode);
        if (e.textNode) {
          T(e, "ontext", e.textNode);
        }
        e.textNode = "";
      }
      function C(e, t) {
        if (e.trim) {
          t = t.trim();
        }
        if (e.normalize) {
          t = t.replace(/\s+/g, " ");
        }
        return t;
      }
      function x(e, t) {
        A(e);
        if (e.trackPosition) {
          t += "\nLine: " + e.line + "\nColumn: " + e.column + "\nChar: " + e.c;
        }
        t = new Error(t);
        e.error = t;
        T(e, "onerror", t);
        return e;
      }
      function S(e) {
        if (e.sawRoot && !e.closedRoot) {
          O(e, "Unclosed root tag");
        }
        if (e.state !== E.BEGIN && e.state !== E.BEGIN_WHITESPACE && e.state !== E.TEXT) {
          x(e, "Unexpected end");
        }
        A(e);
        e.c = "";
        e.closed = true;
        T(e, "onend");
        i.call(e, e.strict, e.opt);
        return e;
      }
      function O(e, t) {
        if (typeof e != "object" || !(e instanceof i)) {
          throw new Error("bad call to strictFail");
        }
        if (e.strict) {
          x(e, t);
        }
      }
      function I(e) {
        if (!e.strict) {
          e.tagName = e.tagName[e.looseCase]();
        }
        var t = e.tags[e.tags.length - 1] || e;
        var r = e.tag = {
          name: e.tagName,
          attributes: {}
        };
        if (e.opt.xmlns) {
          r.ns = t.ns;
        }
        e.attribList.length = 0;
        k(e, "onopentagstart", r);
      }
      function L(e, t) {
        var r = e.indexOf(":") < 0 ? ["", e] : e.split(":");
        var n = r[0];
        var o = r[1];
        if (t && e === "xmlns") {
          n = "xmlns";
          o = "";
        }
        return {
          prefix: n,
          local: o
        };
      }
      function R(e) {
        if (!e.strict) {
          e.attribName = e.attribName[e.looseCase]();
        }
        if (e.attribList.indexOf(e.attribName) !== -1 || e.tag.attributes.hasOwnProperty(e.attribName)) {
          e.attribName = e.attribValue = "";
        } else {
          if (e.opt.xmlns) {
            var t = L(e.attribName, true);
            var r = t.prefix;
            var n = t.local;
            if (r === "xmlns") {
              if (n === "xml" && e.attribValue !== c) {
                O(e, "xml: prefix must be bound to " + c + "\nActual: " + e.attribValue);
              } else if (n === "xmlns" && e.attribValue !== "http://www.w3.org/2000/xmlns/") {
                O(e, "xmlns: prefix must be bound to http://www.w3.org/2000/xmlns/\nActual: " + e.attribValue);
              } else {
                var o = e.tag;
                var i = e.tags[e.tags.length - 1] || e;
                if (o.ns === i.ns) {
                  o.ns = Object.create(i.ns);
                }
                o.ns[n] = e.attribValue;
              }
            }
            e.attribList.push([e.attribName, e.attribValue]);
          } else {
            e.tag.attributes[e.attribName] = e.attribValue;
            k(e, "onattribute", {
              name: e.attribName,
              value: e.attribValue
            });
          }
          e.attribName = e.attribValue = "";
        }
      }
      function P(e, t) {
        if (e.opt.xmlns) {
          var r = e.tag;
          var n = L(e.tagName);
          r.prefix = n.prefix;
          r.local = n.local;
          r.uri = r.ns[n.prefix] || "";
          if (r.prefix && !r.uri) {
            O(e, "Unbound namespace prefix: " + JSON.stringify(e.tagName));
            r.uri = n.prefix;
          }
          var o = e.tags[e.tags.length - 1] || e;
          if (r.ns && o.ns !== r.ns) {
            Object.keys(r.ns).forEach(function (t) {
              k(e, "onopennamespace", {
                prefix: t,
                uri: r.ns[t]
              });
            });
          }
          for (var i = 0, a = e.attribList.length; i < a; i++) {
            var s = e.attribList[i];
            var c = s[0];
            var u = s[1];
            var l = L(c, true);
            var d = l.prefix;
            var p = l.local;
            var f = d === "" ? "" : r.ns[d] || "";
            var h = {
              name: c,
              value: u,
              prefix: d,
              local: p,
              uri: f
            };
            if (d && d !== "xmlns" && !f) {
              O(e, "Unbound namespace prefix: " + JSON.stringify(d));
              h.uri = d;
            }
            e.tag.attributes[c] = h;
            k(e, "onattribute", h);
          }
          e.attribList.length = 0;
        }
        e.tag.isSelfClosing = !!t;
        e.sawRoot = true;
        e.tags.push(e.tag);
        k(e, "onopentag", e.tag);
        if (!t) {
          if (e.noscript || e.tagName.toLowerCase() !== "script") {
            e.state = E.TEXT;
          } else {
            e.state = E.SCRIPT;
          }
          e.tag = null;
          e.tagName = "";
        }
        e.attribName = e.attribValue = "";
        e.attribList.length = 0;
      }
      function B(e) {
        if (!e.tagName) {
          O(e, "Weird empty close tag.");
          e.textNode += "</>";
          e.state = E.TEXT;
          return;
        }
        if (e.script) {
          if (e.tagName !== "script") {
            e.script += "</" + e.tagName + ">";
            e.tagName = "";
            e.state = E.SCRIPT;
            return;
          }
          k(e, "onscript", e.script);
          e.script = "";
        }
        var t = e.tags.length;
        var r = e.tagName;
        if (!e.strict) {
          r = r[e.looseCase]();
        }
        var n = r;
        while (t--) {
          if (e.tags[t].name === n) {
            break;
          }
          O(e, "Unexpected close tag");
        }
        if (t < 0) {
          O(e, "Unmatched closing tag: " + e.tagName);
          e.textNode += "</" + e.tagName + ">";
          e.state = E.TEXT;
          return;
        }
        e.tagName = r;
        for (var o = e.tags.length; o-- > t;) {
          var i = e.tag = e.tags.pop();
          e.tagName = e.tag.name;
          k(e, "onclosetag", e.tagName);
          var a = {};
          for (var s in i.ns) {
            a[s] = i.ns[s];
          }
          var c = e.tags[e.tags.length - 1] || e;
          if (e.opt.xmlns && i.ns !== c.ns) {
            Object.keys(i.ns).forEach(function (t) {
              var r = i.ns[t];
              k(e, "onclosenamespace", {
                prefix: t,
                uri: r
              });
            });
          }
        }
        if (t === 0) {
          e.closedRoot = true;
        }
        e.tagName = e.attribValue = e.attribName = "";
        e.attribList.length = 0;
        e.state = E.TEXT;
      }
      function M(e) {
        var t;
        var r = e.entity;
        var n = r.toLowerCase();
        var o = "";
        if (e.ENTITIES[r]) {
          return e.ENTITIES[r];
        } else if (e.ENTITIES[n]) {
          return e.ENTITIES[n];
        } else {
          if ((r = n).charAt(0) === "#") {
            if (r.charAt(1) === "x") {
              r = r.slice(2);
              o = (t = parseInt(r, 16)).toString(16);
            } else {
              r = r.slice(1);
              o = (t = parseInt(r, 10)).toString(10);
            }
          }
          r = r.replace(/^0+/, "");
          if (isNaN(t) || o.toLowerCase() !== r) {
            O(e, "Invalid character entity");
            return "&" + e.entity + ";";
          } else {
            return String.fromCodePoint(t);
          }
        }
      }
      function F(e, t) {
        if (t === "<") {
          e.state = E.OPEN_WAKA;
          e.startTagPosition = e.position;
        } else if (!h(t)) {
          O(e, "Non-whitespace before first tag.");
          e.textNode = t;
          e.state = E.TEXT;
        }
      }
      function U(e, t) {
        var r = "";
        if (t < e.length) {
          r = e.charAt(t);
        }
        return r;
      }
      E = t.STATE;
      if (!String.fromCodePoint) {
        _ = String.fromCharCode;
        b = Math.floor;
        w = function () {
          var e;
          var t;
          var r = 16384;
          var n = [];
          var o = -1;
          var i = arguments.length;
          if (!i) {
            return "";
          }
          var a = "";
          while (++o < i) {
            var s = Number(arguments[o]);
            if (!isFinite(s) || s < 0 || s > 1114111 || b(s) !== s) {
              throw RangeError("Invalid code point: " + s);
            }
            if (s <= 65535) {
              n.push(s);
            } else {
              e = 55296 + ((s -= 65536) >> 10);
              t = s % 1024 + 56320;
              n.push(e, t);
            }
            if (o + 1 === i || n.length > r) {
              a += _.apply(null, n);
              n.length = 0;
            }
          }
          return a;
        };
        if (Object.defineProperty) {
          Object.defineProperty(String, "fromCodePoint", {
            value: w,
            configurable: true,
            writable: true
          });
        } else {
          String.fromCodePoint = w;
        }
      }
    })(t);
  }).call(this, r(27).Buffer);
};
