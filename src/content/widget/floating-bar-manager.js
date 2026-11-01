// Module 525 - Savior Video floating download bar DOM overlay and attachment controller
export default function(t, e, r) {
  "use strict";
  (function(t2) {
    var n = r(12), i = r(450), o = "0!important", a = "100%!important", s = { left: o, top: o, padding: o, margin: o, border: "0px none!important", width: a, height: a, "min-width": a, "max-width": "none!important", "min-height": a,
      "max-height": "none!important", transform: "none!important" }, u = { display: "none!important", visibility: "hidden!important", opacity: o, width: o, height: o, margin: o, padding: o, border: "0px none!important", overflow: "hidden!important" },
      c = { left: o, top: o, padding: o, margin: o, border: "0px none!important", width: a, height: a, "min-width": a, "max-width": "none!important", "min-height": a, "max-height": "none!important", overflow: "hidden!important", transform: "none!important",
      display: "block!important" }, l = { "font-size": o, "line-height": o, "z-index": Number.MAX_SAFE_INTEGER - 1 + "!important" }, f = { width: a, height: a, _width: "100%", _height: "100%" }, d = { childList: false, attributes: true, characterData: false,
      subtree: false, attributeOldValue: false, characterDataOldValue: false, attributeFilter: ["style", "width", "height"] };
    class h {
      constructor() {
        this._savedStyles = /* @__PURE__ */ new Map(), this._appliedStyles = /* @__PURE__ */ new Map(), this._observer = new MutationObserver(this._onStylePropertyChange.bind(this));
      }
      _onStylePropertyChange(t3) {
        var e2 = t3.filter((t4) => {
          var e3, r2, i2 = t4.target, o2 = i2.getAttribute(t4.attributeName) || "", a2 = this._appliedStyles.get(i2);
          switch (t4.attributeName) {
            case "style":
              for (r2 in e3 = Object(n.o)(o2), a2) if (e3[r2] !== a2[r2]) return true;
              return false;
            case "width":
            case "height":
              return a2["_" + t4.attributeName] !== o2;
          }
          return false;
        }).map((t4) => t4.target);
        this._reApplyStyles(e2);
      }
      _watchStyleChanges() {
        this._appliedStyles.forEach((t3, e2) => {
          this._observer.observe(e2, d);
        });
      }
      _stopWatchingStyleChanges() {
        this._observer.disconnect();
      }
      static _getNodeSize(t3) {
        var e2 = Object(n.e)(t3);
        return { width: e2.width || 640, height: e2.height || 480 };
      }
      static _iterateSiblings(t3, e2) {
        for (var r2 = t3.parentNode && t3.parentNode.children, n2 = 0; r2 && n2 < r2.length; n2++) r2[n2] !== t3 && e2(r2[n2]);
      }
      static _nodeInDocument(t3) {
        for (; t3 && t3 !== document; ) t3 = t3.parentNode;
        return t3 === document;
      }
      _saveStyle(t3) {
        var e2 = t3.style, r2 = {};
        for (var n2 in e2) e2.hasOwnProperty(n2) && "" !== e2[n2] && (r2[n2] = t3.style[n2]);
        if (["OBJECT", "EMBED", "IFRAME"].indexOf(t3.tagName.toUpperCase()) > -1) {
          var i2 = t3;
          i2.width && (r2._width = i2.width, r2._height = i2.height);
        }
        0 !== t3.scrollTop && (r2._scrollTop = t3.scrollTop), this._savedStyles.set(t3, r2);
      }
      _restoreStyle(t3) {
        var e2 = t3.style, r2 = this._savedStyles.get(t3);
        if (r2) {
          for (var n2 in e2) e2.hasOwnProperty(n2) && n2 && !n2.match(/^\d/) && (n2 in r2 ? e2[n2] = r2[n2] : "" !== e2[n2] && (e2[n2] = ""));
          r2._width && (t3.width = r2._width), r2._height && (t3.height = r2._height), r2._scrollTop && (t3.scrollTop = r2._scrollTop);
        }
      }
      _saveAppliedStyle(t3, e2) {
        var r2 = this._appliedStyles.get(t3) || {};
        for (var n2 in e2) e2.hasOwnProperty(n2) && (r2[n2] = e2[n2]);
        this._appliedStyles.set(t3, r2);
      }
      _applyStyleForNode(t3) {
        var e2 = this._appliedStyles.get(t3);
        e2 && Object(n.p)(t3, e2), e2._width && (t3.width = e2._width), e2._height && (t3.height = e2._height);
      }
      _maximizeNode(e2) {
        var r2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n2 = null, i2 = h._getNodeSize(e2);
        this._savedStyles.clear(), this._appliedStyles.clear(), this._saveAppliedStyle(e2, s);
        var o2 = e2.querySelector("embed");
        o2 && (this._saveStyle(o2), this._saveAppliedStyle(o2, f));
        for (var a2 = e2; a2 && a2 !== document; a2 = a2.parentNode) {
          var d2 = a2;
          if (!d2.matches("head, script, style, link, meta")) {
            if (this._saveStyle(d2), this._saveAppliedStyle(d2, c), r2 && this._saveAppliedStyle(d2, l), d2.matches("object, embed") && this._saveAppliedStyle(d2, f), d2.matches("iframe")) r2 = true;
            else if (!r2 && (Math.min(d2.parentNode.scrollWidth, d2.parentNode.offsetWidth) !== i2.width || Math.min(d2.parentNode.scrollHeight, d2.parentNode.offsetHeight) !== i2.height)) {
              r2 = true;
              var p = { "font-size": (n2 = window.getComputedStyle(d2))["font-size"] + "!important", "line-height": n2["line-height"] + "!important", "z-index": Number.MAX_SAFE_INTEGER - 1 + "!important" };
              this._saveAppliedStyle(d2, p);
            }
            r2 && h._iterateSiblings(d2, (t3) => {
              t3.matches("head, script, style, link, meta") || (this._saveStyle(t3), this._saveAppliedStyle(t3, u));
            });
          }
        }
        var v = () => {
          this._reApplyStyles(), this._watchStyleChanges();
        };
        t2.env.MOBILE_BUILD ? v() : window.addEventListener("resize", v);
      }
      _restoreNode(t3) {
        this._savedStyles.forEach((t4, e2) => {
          this._restoreStyle(e2);
        }), this._savedStyles.clear(), this._appliedStyles.clear();
      }
      _reApplyStyles(t3) {
        Array.isArray(t3) ? t3.forEach(this._applyStyleForNode.bind(this)) : this._appliedStyles.forEach((t4, e2) => {
          this._applyStyleForNode(e2);
        });
      }
      pin(t3, e2) {
        if (this._currentPiP) console.warn("It is already PIPed.");
        else {
          if (h._nodeInDocument(t3)) {
            if (i.a.hasSpecialSupport()) {
              var r2 = i.a.getNode();
              r2 && (t3 = r2);
            }
            var n2 = h._getNodeSize(t3);
            this._maximizeNode(t3, e2);
            var o2 = { node: t3 };
            return this._currentPiP = o2, n2;
          }
          console.warn("player node is detached from the document!");
        }
      }
      restore() {
        this._currentPiP ? (this._stopWatchingStyleChanges(), this._currentPiP.player ? this._currentPiP.player.restore(this._restoreNode.bind(this)) : this._restoreNode(this._currentPiP.node), this._currentPiP = null) : console.warn("Nothing to restore, we're not in PIP.");
      }
      get isPanelMode() {
        return !!this._currentPiP;
      }
    }
    e.a = h;
  }).call(this, r(32));
}
