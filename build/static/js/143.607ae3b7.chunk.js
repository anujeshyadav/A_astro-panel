/*! For license information please see 143.607ae3b7.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"] =
  this["webpackJsonpvuexy-react-admin-dashboard"] || []).push([
  [143],
  {
    1172: function (e, t, n) {},
    2164: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(29),
        a = n(0),
        o = n.n(a),
        c = n(1254),
        i = n(1252),
        l = n(1253),
        u = n(187),
        s = n(804),
        d = n(1679),
        h = (n(1172), n(68)),
        f = n(1061),
        m = n.n(f);
      function p() {
        p = function () {
          return e;
        };
        var e = {},
          t = Object.prototype,
          n = t.hasOwnProperty,
          r =
            Object.defineProperty ||
            function (e, t, n) {
              e[t] = n.value;
            },
          a = "function" == typeof Symbol ? Symbol : {},
          o = a.iterator || "@@iterator",
          c = a.asyncIterator || "@@asyncIterator",
          i = a.toStringTag || "@@toStringTag";
        function l(e, t, n) {
          return (
            Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          l({}, "");
        } catch (C) {
          l = function (e, t, n) {
            return (e[t] = n);
          };
        }
        function u(e, t, n, a) {
          var o = t && t.prototype instanceof h ? t : h,
            c = Object.create(o.prototype),
            i = new T(a || []);
          return r(c, "_invoke", { value: E(e, n, i) }), c;
        }
        function s(e, t, n) {
          try {
            return { type: "normal", arg: e.call(t, n) };
          } catch (C) {
            return { type: "throw", arg: C };
          }
        }
        e.wrap = u;
        var d = {};
        function h() {}
        function f() {}
        function m() {}
        var v = {};
        l(v, o, function () {
          return this;
        });
        var y = Object.getPrototypeOf,
          g = y && y(y(O([])));
        g && g !== t && n.call(g, o) && (v = g);
        var b = (m.prototype = h.prototype = Object.create(v));
        function w(e) {
          ["next", "throw", "return"].forEach(function (t) {
            l(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function x(e, t) {
          var a;
          r(this, "_invoke", {
            value: function (r, o) {
              function c() {
                return new t(function (a, c) {
                  !(function r(a, o, c, i) {
                    var l = s(e[a], e, o);
                    if ("throw" !== l.type) {
                      var u = l.arg,
                        d = u.value;
                      return d && "object" == typeof d && n.call(d, "__await")
                        ? t.resolve(d.__await).then(
                            function (e) {
                              r("next", e, c, i);
                            },
                            function (e) {
                              r("throw", e, c, i);
                            }
                          )
                        : t.resolve(d).then(
                            function (e) {
                              (u.value = e), c(u);
                            },
                            function (e) {
                              return r("throw", e, c, i);
                            }
                          );
                    }
                    i(l.arg);
                  })(r, o, a, c);
                });
              }
              return (a = a ? a.then(c, c) : c());
            },
          });
        }
        function E(e, t, n) {
          var r = "suspendedStart";
          return function (a, o) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === a) throw o;
              return A();
            }
            for (n.method = a, n.arg = o; ; ) {
              var c = n.delegate;
              if (c) {
                var i = k(c, n);
                if (i) {
                  if (i === d) continue;
                  return i;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var l = s(e, t, n);
              if ("normal" === l.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), l.arg === d)
                )
                  continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        }
        function k(e, t) {
          var n = t.method,
            r = e.iterator[n];
          if (void 0 === r)
            return (
              (t.delegate = null),
              ("throw" === n &&
                e.iterator.return &&
                ((t.method = "return"),
                (t.arg = void 0),
                k(e, t),
                "throw" === t.method)) ||
                ("return" !== n &&
                  ((t.method = "throw"),
                  (t.arg = new TypeError(
                    "The iterator does not provide a '" + n + "' method"
                  )))),
              d
            );
          var a = s(r, e.iterator, t.arg);
          if ("throw" === a.type)
            return (
              (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), d
            );
          var o = a.arg;
          return o
            ? o.done
              ? ((t[e.resultName] = o.value),
                (t.next = e.nextLoc),
                "return" !== t.method &&
                  ((t.method = "next"), (t.arg = void 0)),
                (t.delegate = null),
                d)
              : o
            : ((t.method = "throw"),
              (t.arg = new TypeError("iterator result is not an object")),
              (t.delegate = null),
              d);
        }
        function j(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function L(e) {
          var t = e.completion || {};
          (t.type = "normal"), delete t.arg, (e.completion = t);
        }
        function T(e) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            e.forEach(j, this),
            this.reset(!0);
        }
        function O(e) {
          if (e) {
            var t = e[o];
            if (t) return t.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
              var r = -1,
                a = function t() {
                  for (; ++r < e.length; )
                    if (n.call(e, r)) return (t.value = e[r]), (t.done = !1), t;
                  return (t.value = void 0), (t.done = !0), t;
                };
              return (a.next = a);
            }
          }
          return { next: A };
        }
        function A() {
          return { value: void 0, done: !0 };
        }
        return (
          (f.prototype = m),
          r(b, "constructor", { value: m, configurable: !0 }),
          r(m, "constructor", { value: f, configurable: !0 }),
          (f.displayName = l(m, i, "GeneratorFunction")),
          (e.isGeneratorFunction = function (e) {
            var t = "function" == typeof e && e.constructor;
            return (
              !!t &&
              (t === f || "GeneratorFunction" === (t.displayName || t.name))
            );
          }),
          (e.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, m)
                : ((e.__proto__ = m), l(e, i, "GeneratorFunction")),
              (e.prototype = Object.create(b)),
              e
            );
          }),
          (e.awrap = function (e) {
            return { __await: e };
          }),
          w(x.prototype),
          l(x.prototype, c, function () {
            return this;
          }),
          (e.AsyncIterator = x),
          (e.async = function (t, n, r, a, o) {
            void 0 === o && (o = Promise);
            var c = new x(u(t, n, r, a), o);
            return e.isGeneratorFunction(n)
              ? c
              : c.next().then(function (e) {
                  return e.done ? e.value : c.next();
                });
          }),
          w(b),
          l(b, i, "Generator"),
          l(b, o, function () {
            return this;
          }),
          l(b, "toString", function () {
            return "[object Generator]";
          }),
          (e.keys = function (e) {
            var t = Object(e),
              n = [];
            for (var r in t) n.push(r);
            return (
              n.reverse(),
              function e() {
                for (; n.length; ) {
                  var r = n.pop();
                  if (r in t) return (e.value = r), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (e.values = O),
          (T.prototype = {
            constructor: T,
            reset: function (e) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(L),
                !e)
              )
                for (var t in this)
                  "t" === t.charAt(0) &&
                    n.call(this, t) &&
                    !isNaN(+t.slice(1)) &&
                    (this[t] = void 0);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ("throw" === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (e) {
              if (this.done) throw e;
              var t = this;
              function r(n, r) {
                return (
                  (c.type = "throw"),
                  (c.arg = e),
                  (t.next = n),
                  r && ((t.method = "next"), (t.arg = void 0)),
                  !!r
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var o = this.tryEntries[a],
                  c = o.completion;
                if ("root" === o.tryLoc) return r("end");
                if (o.tryLoc <= this.prev) {
                  var i = n.call(o, "catchLoc"),
                    l = n.call(o, "finallyLoc");
                  if (i && l) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  } else if (i) {
                    if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                  } else {
                    if (!l)
                      throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return r(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var a = this.tryEntries[r];
                if (
                  a.tryLoc <= this.prev &&
                  n.call(a, "finallyLoc") &&
                  this.prev < a.finallyLoc
                ) {
                  var o = a;
                  break;
                }
              }
              o &&
                ("break" === e || "continue" === e) &&
                o.tryLoc <= t &&
                t <= o.finallyLoc &&
                (o = null);
              var c = o ? o.completion : {};
              return (
                (c.type = e),
                (c.arg = t),
                o
                  ? ((this.method = "next"), (this.next = o.finallyLoc), d)
                  : this.complete(c)
              );
            },
            complete: function (e, t) {
              if ("throw" === e.type) throw e.arg;
              return (
                "break" === e.type || "continue" === e.type
                  ? (this.next = e.arg)
                  : "return" === e.type
                  ? ((this.rval = this.arg = e.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === e.type && t && (this.next = t),
                d
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e)
                  return this.complete(n.completion, n.afterLoc), L(n), d;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var n = this.tryEntries[t];
                if (n.tryLoc === e) {
                  var r = n.completion;
                  if ("throw" === r.type) {
                    var a = r.arg;
                    L(n);
                  }
                  return a;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function (e, t, n) {
              return (
                (this.delegate = { iterator: O(e), resultName: t, nextLoc: n }),
                "next" === this.method && (this.arg = void 0),
                d
              );
            },
          }),
          e
        );
      }
      var v = function () {
          var e = "7d1f07c76f9d46be86bc46a791884023",
            t = "anujesh",
            n =
              "007eJxTYHA9L/ardLdxnIT0sYYQL7n4flZlrj73fael711KneCyapYCg3mKYZqBebK5WZpliolZUqqFWVKyiVmiuaWhhYWJgZHxb26vlIZARoYumUfMjAwQCOKzMyTmlWalFmcwMAAAAhUecg==",
            r = 0,
            a = {
              localAudioTrack: null,
              localVideoTrack: null,
              remoteAudioTrack: null,
              remoteVideoTrack: null,
              remoteUid: null,
            };
          function c() {
            return (c = Object(h.a)(
              p().mark(function o() {
                var c, l, u;
                return p().wrap(function (o) {
                  for (;;)
                    switch ((o.prev = o.next)) {
                      case 0:
                        (c = m.a.createClient({ mode: "rtc", codec: "vp8" })),
                          (l = document.createElement("div")),
                          ((u = document.createElement("div")).id = r),
                          (u.textContent = "Local user " + r),
                          (u.style.width = "840px"),
                          (u.style.height = "480px"),
                          (u.style.padding = "15px 5px 5px 5px"),
                          (l.style.width = "840px"),
                          (l.style.height = "480px"),
                          (l.style.padding = "15px 5px 5px 5px"),
                          c.on(
                            "user-published",
                            (function () {
                              var e = Object(h.a)(
                                p().mark(function e(t, n) {
                                  return p().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            console.log(
                                              "subscribe success",
                                              t,
                                              n
                                            ),
                                            (e.next = 3),
                                            c.subscribe(t, n)
                                          );
                                        case 3:
                                          console.log("subscribe success"),
                                            "video" == n &&
                                              ((a.remoteVideoTrack =
                                                t.videoTrack),
                                              (a.remoteAudioTrack =
                                                t.audioTrack),
                                              (a.remoteUid = t.uid.toString()),
                                              (l.id = t.uid.toString()),
                                              (a.remoteUid = t.uid.toString()),
                                              (l.textContent =
                                                "Remote user " +
                                                t.uid.toString()),
                                              document.body.append(l),
                                              a.remoteVideoTrack.play(l)),
                                            "audio" == n &&
                                              ((a.remoteAudioTrack =
                                                t.audioTrack),
                                              a.remoteAudioTrack.play()),
                                            c.on(
                                              "user-unpublished",
                                              function (e) {
                                                console.log(
                                                  e.uid + "has left the channel"
                                                );
                                              }
                                            );
                                        case 7:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                })
                              );
                              return function (t, n) {
                                return e.apply(this, arguments);
                              };
                            })()
                          ),
                          (window.onload = function () {
                            (document.getElementById("join").onclick = Object(
                              h.a
                            )(
                              p().mark(function o() {
                                return p().wrap(function (o) {
                                  for (;;)
                                    switch ((o.prev = o.next)) {
                                      case 0:
                                        return (
                                          console.log(e, t, n, r),
                                          t && alert("user Want to join You"),
                                          (o.next = 4),
                                          c.join(e, t, n, r)
                                        );
                                      case 4:
                                        return (
                                          (o.next = 6),
                                          m.a.createMicrophoneAudioTrack()
                                        );
                                      case 6:
                                        return (
                                          (a.localAudioTrack = o.sent),
                                          (o.next = 9),
                                          m.a.createCameraVideoTrack()
                                        );
                                      case 9:
                                        return (
                                          (a.localVideoTrack = o.sent),
                                          document.body.append(u),
                                          (o.next = 13),
                                          c.publish([
                                            a.localAudioTrack,
                                            a.localVideoTrack,
                                          ])
                                        );
                                      case 13:
                                        a.localVideoTrack.play(u),
                                          console.log("publish success!");
                                      case 15:
                                      case "end":
                                        return o.stop();
                                    }
                                }, o);
                              })
                            )),
                              (document.getElementById("leave").onclick =
                                Object(h.a)(
                                  p().mark(function e() {
                                    return p().wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              a.localAudioTrack.close(),
                                              a.localVideoTrack.close(),
                                              i(l.id),
                                              i(u.id),
                                              (e.next = 6),
                                              c.leave()
                                            );
                                          case 6:
                                            console.log("You left the channel");
                                          case 7:
                                          case "end":
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                ));
                          });
                      case 13:
                      case "end":
                        return o.stop();
                    }
                }, o);
              })
            )).apply(this, arguments);
          }
          function i(e) {
            console.log("Removing " + e + "Div");
            var t = document.getElementById(e);
            t && t.remove();
          }
          return (
            (function () {
              c.apply(this, arguments);
            })(),
            o.a.createElement(
              "div",
              null,
              o.a.createElement(u.a, { color: "success", id: "join" }, "Join"),
              o.a.createElement(
                "button",
                {
                  className: "mx-1 btn btn-danger",
                  type: "button",
                  id: "leave",
                },
                "Leave"
              )
            )
          );
        },
        y = n(97),
        g = n(27);
      t.default = function () {
        var e = Object(a.useState)(!1),
          t = Object(r.a)(e, 2),
          n = t[0],
          h = t[1],
          f = Object(a.useState)(""),
          m = Object(r.a)(f, 2),
          p = m[0],
          b = m[1],
          w = Object(a.useState)(!1),
          x = Object(r.a)(w, 2),
          E = x[0],
          k = x[1],
          j = Object(a.useState)(),
          L = Object(r.a)(j, 2),
          T =
            (L[0],
            L[1],
            {
              EndCall: function () {
                return h(!1);
              },
            });
        return (
          Object(a.useEffect)(function () {
            var e = localStorage.getItem("astroId");
            console.log(e),
              y.a
                .get("user/channelList/".concat(e))
                .then(function (e) {
                  console.log(e.data.data);
                })
                .catch(function (e) {
                  console.log(e.response.data);
                });
          }, []),
          o.a.createElement(
            "div",
            null,
            o.a.createElement(
              c.a,
              null,
              o.a.createElement(
                i.a,
                null,
                o.a.createElement(
                  l.a,
                  null,
                  o.a.createElement(
                    "div",
                    { className: "d-flex justify-content-end container mt-2" },
                    o.a.createElement(
                      "div",
                      null,
                      o.a.createElement(
                        u.a,
                        {
                          onClick: function () {
                            g.a.goBack();
                          },
                          color: "primary",
                        },
                        " ",
                        "Back"
                      )
                    )
                  )
                )
              ),
              o.a.createElement(
                "div",
                { className: "d-flex justify-content-center mb-2 mt-1" },
                o.a.createElement("h2", null, "Videocalls")
              ),
              o.a.createElement(
                i.a,
                null,
                o.a.createElement(
                  l.a,
                  null,
                  o.a.createElement(
                    "div",
                    { className: "container chenell mx-1 mb-1 mt-1" },
                    o.a.createElement(
                      "div",
                      { className: "cchannel" },
                      o.a.createElement(
                        u.a,
                        {
                          onClick: function () {
                            return k(!0);
                          },
                          className: "",
                          color: "success",
                          style: { cursor: "pointer" },
                        },
                        "Create Channel"
                      )
                    )
                  )
                ),
                !0 === E
                  ? o.a.createElement(
                      o.a.Fragment,
                      null,
                      o.a.createElement(
                        l.a,
                        { lg: "4", sm: "4", md: "4" },
                        o.a.createElement(
                          "div",
                          { className: "container mt-1 mb-1" },
                          o.a.createElement(s.a, {
                            value: p,
                            className: "form-control  ",
                            id: "textbox",
                            name: "city",
                            placeholder: "create channel",
                            onChange: function (e) {
                              b(e.target.value);
                            },
                          })
                        )
                      ),
                      o.a.createElement(
                        l.a,
                        { lg: "4", sm: "4", md: "4" },
                        o.a.createElement(
                          "div",
                          { className: "container mt-1 mb-1" },
                          o.a.createElement(
                            u.a,
                            {
                              onClick: function (e) {
                                !(function (e) {
                                  var t = localStorage.getItem("astroId");
                                  y.a
                                    .post("/user/add_VideoChannel", {
                                      astroid: t,
                                      channelName: p,
                                    })
                                    .then(function (e) {
                                      console.log(e.data.data);
                                    })
                                    .catch(function (e) {
                                      console.log(e);
                                    });
                                })(),
                                  k(!1);
                              },
                              color: "success",
                            },
                            "Add Channel"
                          )
                        )
                      )
                    )
                  : null
              ),
              o.a.createElement(
                i.a,
                null,
                o.a.createElement(
                  "div",
                  { className: "container mt-1 mb-1" },
                  n
                    ? o.a.createElement(
                        "div",
                        {
                          style: {
                            display: "flex",
                            width: "75vw",
                            height: "80vh",
                          },
                        },
                        o.a.createElement(d.a, {
                          rtcProps: {
                            appId: "7d1f07c76f9d46be86bc46a791884023",
                            channel: "anujesh",
                            token:
                              "007eJxTYDgh+fefxobNlcqHuZiV5tUksPQsnbky8DLD45MxN08G9yxRYDBPMUwzME82N0uzTDExS0q1MEtKNjFLNLc0tLAwMTAyXn4pMqUhkJEh7PIBZkYGCATx2RkS80qzUoszGBgA59ghrA==",
                            uid: 0,
                            role: "",
                          },
                          callbacks: T,
                        })
                      )
                    : o.a.createElement(
                        u.a,
                        {
                          onClick: function () {
                            return h(!0);
                          },
                          color: "success",
                        },
                        "Add call"
                      )
                )
              ),
              o.a.createElement(
                i.a,
                null,
                o.a.createElement(
                  "div",
                  { className: "container mt-1 mb-1" },
                  o.a.createElement(v, { channelname: p })
                )
              )
            )
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=143.607ae3b7.chunk.js.map
