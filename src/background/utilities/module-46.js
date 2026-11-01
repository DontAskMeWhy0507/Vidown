// Module 46 [utilities] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  var n = r(107).Buffer;
  var o = n.isEncoding || function (e) {
    switch ((e = "" + e) && e.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return true;
      default:
        return false;
    }
  };
  function i(e) {
    var t;
    this.encoding = function (e) {
      var t = function (e) {
        if (!e) {
          return "utf8";
        }
        var t;
        while (true) {
          switch (e) {
            case "utf8":
            case "utf-8":
              return "utf8";
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return "utf16le";
            case "latin1":
            case "binary":
              return "latin1";
            case "base64":
            case "ascii":
            case "hex":
              return e;
            default:
              if (t) {
                return;
              }
              e = ("" + e).toLowerCase();
              t = true;
          }
        }
      }(e);
      if (typeof t != "string" && (n.isEncoding === o || !o(e))) {
        throw new Error("Unknown encoding: " + e);
      }
      return t || e;
    }(e);
    switch (this.encoding) {
      case "utf16le":
        this.text = c;
        this.end = u;
        t = 4;
        break;
      case "utf8":
        this.fillLast = s;
        t = 4;
        break;
      case "base64":
        this.text = l;
        this.end = d;
        t = 3;
        break;
      default:
        this.write = p;
        this.end = f;
        return;
    }
    this.lastNeed = 0;
    this.lastTotal = 0;
    this.lastChar = n.allocUnsafe(t);
  }
  function a(e) {
    if (e <= 127) {
      return 0;
    } else if (e >> 5 == 6) {
      return 2;
    } else if (e >> 4 == 14) {
      return 3;
    } else if (e >> 3 == 30) {
      return 4;
    } else if (e >> 6 == 2) {
      return -1;
    } else {
      return -2;
    }
  }
  function s(e) {
    var t = this.lastTotal - this.lastNeed;
    var r = function (e, t, r) {
      if ((t[0] & 192) != 128) {
        e.lastNeed = 0;
        return "�";
      }
      if (e.lastNeed > 1 && t.length > 1) {
        if ((t[1] & 192) != 128) {
          e.lastNeed = 1;
          return "�";
        }
        if (e.lastNeed > 2 && t.length > 2 && (t[2] & 192) != 128) {
          e.lastNeed = 2;
          return "�";
        }
      }
    }(this, e);
    if (r !== undefined) {
      return r;
    } else if (this.lastNeed <= e.length) {
      e.copy(this.lastChar, t, 0, this.lastNeed);
      return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    } else {
      e.copy(this.lastChar, t, 0, e.length);
      this.lastNeed -= e.length;
      return;
    }
  }
  function c(e, t) {
    if ((e.length - t) % 2 == 0) {
      var r = e.toString("utf16le", t);
      if (r) {
        var n = r.charCodeAt(r.length - 1);
        if (n >= 55296 && n <= 56319) {
          this.lastNeed = 2;
          this.lastTotal = 4;
          this.lastChar[0] = e[e.length - 2];
          this.lastChar[1] = e[e.length - 1];
          return r.slice(0, -1);
        }
      }
      return r;
    }
    this.lastNeed = 1;
    this.lastTotal = 2;
    this.lastChar[0] = e[e.length - 1];
    return e.toString("utf16le", t, e.length - 1);
  }
  function u(e) {
    var t = e && e.length ? this.write(e) : "";
    if (this.lastNeed) {
      var r = this.lastTotal - this.lastNeed;
      return t + this.lastChar.toString("utf16le", 0, r);
    }
    return t;
  }
  function l(e, t) {
    var r = (e.length - t) % 3;
    if (r === 0) {
      return e.toString("base64", t);
    } else {
      this.lastNeed = 3 - r;
      this.lastTotal = 3;
      if (r === 1) {
        this.lastChar[0] = e[e.length - 1];
      } else {
        this.lastChar[0] = e[e.length - 2];
        this.lastChar[1] = e[e.length - 1];
      }
      return e.toString("base64", t, e.length - r);
    }
  }
  function d(e) {
    var t = e && e.length ? this.write(e) : "";
    if (this.lastNeed) {
      return t + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
    } else {
      return t;
    }
  }
  function p(e) {
    return e.toString(this.encoding);
  }
  function f(e) {
    if (e && e.length) {
      return this.write(e);
    } else {
      return "";
    }
  }
  t.StringDecoder = i;
  i.prototype.write = function (e) {
    if (e.length === 0) {
      return "";
    }
    var t;
    var r;
    if (this.lastNeed) {
      if ((t = this.fillLast(e)) === undefined) {
        return "";
      }
      r = this.lastNeed;
      this.lastNeed = 0;
    } else {
      r = 0;
    }
    if (r < e.length) {
      if (t) {
        return t + this.text(e, r);
      } else {
        return this.text(e, r);
      }
    } else {
      return t || "";
    }
  };
  i.prototype.end = function (e) {
    var t = e && e.length ? this.write(e) : "";
    if (this.lastNeed) {
      return t + "�";
    } else {
      return t;
    }
  };
  i.prototype.text = function (e, t) {
    var r = function (e, t, r) {
      var n = t.length - 1;
      if (n < r) {
        return 0;
      }
      var o = a(t[n]);
      if (o >= 0) {
        if (o > 0) {
          e.lastNeed = o - 1;
        }
        return o;
      }
      if (--n < r || o === -2) {
        return 0;
      }
      if ((o = a(t[n])) >= 0) {
        if (o > 0) {
          e.lastNeed = o - 2;
        }
        return o;
      }
      if (--n < r || o === -2) {
        return 0;
      }
      if ((o = a(t[n])) >= 0) {
        if (o > 0) {
          if (o === 2) {
            o = 0;
          } else {
            e.lastNeed = o - 3;
          }
        }
        return o;
      }
      return 0;
    }(this, e, t);
    if (!this.lastNeed) {
      return e.toString("utf8", t);
    }
    this.lastTotal = r;
    var n = e.length - (r - this.lastNeed);
    e.copy(this.lastChar, 0, n);
    return e.toString("utf8", t, n);
  };
  i.prototype.fillLast = function (e) {
    if (this.lastNeed <= e.length) {
      e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
      return this.lastChar.toString(this.encoding, 0, this.lastTotal);
    }
    e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length);
    this.lastNeed -= e.length;
  };
};
