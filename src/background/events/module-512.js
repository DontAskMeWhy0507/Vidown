// Module 512 [events] - Savior Background Script Subsystem
export default function (e, t, r) {
  "use strict";

  var n = r(36);
  function o(e, t) {
    e.emit("error", t);
  }
  e.exports = {
    destroy: function (e, t) {
      var r = this;
      var i = this._readableState && this._readableState.destroyed;
      var a = this._writableState && this._writableState.destroyed;
      if (i || a) {
        if (t) {
          t(e);
        } else if (e) {
          if (this._writableState) {
            if (!this._writableState.errorEmitted) {
              this._writableState.errorEmitted = true;
              n.nextTick(o, this, e);
            }
          } else {
            n.nextTick(o, this, e);
          }
        }
        return this;
      } else {
        if (this._readableState) {
          this._readableState.destroyed = true;
        }
        if (this._writableState) {
          this._writableState.destroyed = true;
        }
        this._destroy(e || null, function (e) {
          if (!t && e) {
            if (r._writableState) {
              if (!r._writableState.errorEmitted) {
                r._writableState.errorEmitted = true;
                n.nextTick(o, r, e);
              }
            } else {
              n.nextTick(o, r, e);
            }
          } else if (t) {
            t(e);
          }
        });
        return this;
      }
    },
    undestroy: function () {
      if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
      }
      if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finalCalled = false;
        this._writableState.prefinished = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
      }
    }
  };
};
