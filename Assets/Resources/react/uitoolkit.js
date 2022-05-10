/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 7989:
/***/ ((module) => {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 9367:
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 5623:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * react-reconciler-constants.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


exports.ConcurrentRoot = 1;
exports.ContinuousEventPriority = 4;
exports.DefaultEventPriority = 16;
exports.DiscreteEventPriority = 1;
exports.IdleEventPriority = 536870912;
exports.LegacyRoot = 0;

/***/ }),

/***/ 8192:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * @license React
 * react-reconciler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
module.exports = function $$$reconciler($$$hostConfig) {
  var exports = {};
  'use strict';

  var aa = __webpack_require__(3792),
      ba = __webpack_require__(1481),
      ca = Object.assign;

  function n(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) {
      b += "&args[]=" + encodeURIComponent(arguments[c]);
    }

    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }

  var da = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      ea = Symbol["for"]("react.element"),
      fa = Symbol["for"]("react.portal"),
      ha = Symbol["for"]("react.fragment"),
      ia = Symbol["for"]("react.strict_mode"),
      ja = Symbol["for"]("react.profiler"),
      ka = Symbol["for"]("react.provider"),
      la = Symbol["for"]("react.context"),
      ma = Symbol["for"]("react.forward_ref"),
      na = Symbol["for"]("react.suspense"),
      oa = Symbol["for"]("react.suspense_list"),
      pa = Symbol["for"]("react.memo"),
      qa = Symbol["for"]("react.lazy");
  Symbol["for"]("react.scope");
  Symbol["for"]("react.debug_trace_mode");
  var ra = Symbol["for"]("react.offscreen");
  Symbol["for"]("react.legacy_hidden");
  Symbol["for"]("react.cache");
  Symbol["for"]("react.tracing_marker");
  var sa = Symbol.iterator;

  function ta(a) {
    if (null === a || "object" !== typeof a) return null;
    a = sa && a[sa] || a["@@iterator"];
    return "function" === typeof a ? a : null;
  }

  function ua(a) {
    if (null == a) return null;
    if ("function" === typeof a) return a.displayName || a.name || null;
    if ("string" === typeof a) return a;

    switch (a) {
      case ha:
        return "Fragment";

      case fa:
        return "Portal";

      case ja:
        return "Profiler";

      case ia:
        return "StrictMode";

      case na:
        return "Suspense";

      case oa:
        return "SuspenseList";
    }

    if ("object" === typeof a) switch (a.$$typeof) {
      case la:
        return (a.displayName || "Context") + ".Consumer";

      case ka:
        return (a._context.displayName || "Context") + ".Provider";

      case ma:
        var b = a.render;
        a = a.displayName;
        a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;

      case pa:
        return b = a.displayName || null, null !== b ? b : ua(a.type) || "Memo";

      case qa:
        b = a._payload;
        a = a._init;

        try {
          return ua(a(b));
        } catch (c) {}

    }
    return null;
  }

  function va(a) {
    var b = a.type;

    switch (a.tag) {
      case 24:
        return "Cache";

      case 9:
        return (b.displayName || "Context") + ".Consumer";

      case 10:
        return (b._context.displayName || "Context") + ".Provider";

      case 18:
        return "DehydratedFragment";

      case 11:
        return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");

      case 7:
        return "Fragment";

      case 5:
        return b;

      case 4:
        return "Portal";

      case 3:
        return "Root";

      case 6:
        return "Text";

      case 16:
        return ua(b);

      case 8:
        return b === ia ? "StrictMode" : "Mode";

      case 22:
        return "Offscreen";

      case 12:
        return "Profiler";

      case 21:
        return "Scope";

      case 13:
        return "Suspense";

      case 19:
        return "SuspenseList";

      case 25:
        return "TracingMarker";

      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if ("function" === typeof b) return b.displayName || b.name || null;
        if ("string" === typeof b) return b;
    }

    return null;
  }

  function wa(a) {
    var b = a,
        c = a;
    if (a.alternate) for (; b["return"];) {
      b = b["return"];
    } else {
      a = b;

      do {
        b = a, 0 !== (b.flags & 4098) && (c = b["return"]), a = b["return"];
      } while (a);
    }
    return 3 === b.tag ? c : null;
  }

  function xa(a) {
    if (wa(a) !== a) throw Error(n(188));
  }

  function ya(a) {
    var b = a.alternate;

    if (!b) {
      b = wa(a);
      if (null === b) throw Error(n(188));
      return b !== a ? null : a;
    }

    for (var c = a, d = b;;) {
      var e = c["return"];
      if (null === e) break;
      var f = e.alternate;

      if (null === f) {
        d = e["return"];

        if (null !== d) {
          c = d;
          continue;
        }

        break;
      }

      if (e.child === f.child) {
        for (f = e.child; f;) {
          if (f === c) return xa(e), a;
          if (f === d) return xa(e), b;
          f = f.sibling;
        }

        throw Error(n(188));
      }

      if (c["return"] !== d["return"]) c = e, d = f;else {
        for (var g = !1, h = e.child; h;) {
          if (h === c) {
            g = !0;
            c = e;
            d = f;
            break;
          }

          if (h === d) {
            g = !0;
            d = e;
            c = f;
            break;
          }

          h = h.sibling;
        }

        if (!g) {
          for (h = f.child; h;) {
            if (h === c) {
              g = !0;
              c = f;
              d = e;
              break;
            }

            if (h === d) {
              g = !0;
              d = f;
              c = e;
              break;
            }

            h = h.sibling;
          }

          if (!g) throw Error(n(189));
        }
      }
      if (c.alternate !== d) throw Error(n(190));
    }

    if (3 !== c.tag) throw Error(n(188));
    return c.stateNode.current === c ? a : b;
  }

  function Aa(a) {
    a = ya(a);
    return null !== a ? Ba(a) : null;
  }

  function Ba(a) {
    if (5 === a.tag || 6 === a.tag) return a;

    for (a = a.child; null !== a;) {
      var b = Ba(a);
      if (null !== b) return b;
      a = a.sibling;
    }

    return null;
  }

  function Ca(a) {
    if (5 === a.tag || 6 === a.tag) return a;

    for (a = a.child; null !== a;) {
      if (4 !== a.tag) {
        var b = Ca(a);
        if (null !== b) return b;
      }

      a = a.sibling;
    }

    return null;
  }

  var Da = Array.isArray,
      Ea = $$$hostConfig.getPublicInstance,
      Fa = $$$hostConfig.getRootHostContext,
      Ga = $$$hostConfig.getChildHostContext,
      Ha = $$$hostConfig.prepareForCommit,
      Ia = $$$hostConfig.resetAfterCommit,
      Ja = $$$hostConfig.createInstance,
      Ka = $$$hostConfig.appendInitialChild,
      La = $$$hostConfig.finalizeInitialChildren,
      Ma = $$$hostConfig.prepareUpdate,
      Na = $$$hostConfig.shouldSetTextContent,
      Oa = $$$hostConfig.createTextInstance,
      Pa = $$$hostConfig.scheduleTimeout,
      Qa = $$$hostConfig.cancelTimeout,
      Ra = $$$hostConfig.noTimeout,
      Sa = $$$hostConfig.isPrimaryRenderer,
      Ta = $$$hostConfig.supportsMutation,
      Ua = $$$hostConfig.supportsPersistence,
      Va = $$$hostConfig.supportsHydration,
      Wa = $$$hostConfig.getInstanceFromNode,
      Xa = $$$hostConfig.preparePortalMount,
      Ya = $$$hostConfig.getCurrentEventPriority,
      Za = $$$hostConfig.detachDeletedInstance,
      $a = $$$hostConfig.supportsMicrotasks,
      ab = $$$hostConfig.scheduleMicrotask,
      bb = $$$hostConfig.supportsTestSelectors,
      cb = $$$hostConfig.findFiberRoot,
      db = $$$hostConfig.getBoundingRect,
      eb = $$$hostConfig.getTextContent,
      fb = $$$hostConfig.isHiddenSubtree,
      gb = $$$hostConfig.matchAccessibilityRole,
      hb = $$$hostConfig.setFocusIfFocusable,
      ib = $$$hostConfig.setupIntersectionObserver,
      jb = $$$hostConfig.appendChild,
      kb = $$$hostConfig.appendChildToContainer,
      lb = $$$hostConfig.commitTextUpdate,
      mb = $$$hostConfig.commitMount,
      nb = $$$hostConfig.commitUpdate,
      ob = $$$hostConfig.insertBefore,
      pb = $$$hostConfig.insertInContainerBefore,
      qb = $$$hostConfig.removeChild,
      rb = $$$hostConfig.removeChildFromContainer,
      sb = $$$hostConfig.resetTextContent,
      tb = $$$hostConfig.hideInstance,
      ub = $$$hostConfig.hideTextInstance,
      vb = $$$hostConfig.unhideInstance,
      wb = $$$hostConfig.unhideTextInstance,
      xb = $$$hostConfig.clearContainer,
      yb = $$$hostConfig.cloneInstance,
      zb = $$$hostConfig.createContainerChildSet,
      Ab = $$$hostConfig.appendChildToContainerChildSet,
      Bb = $$$hostConfig.finalizeContainerChildren,
      Cb = $$$hostConfig.replaceContainerChildren,
      Eb = $$$hostConfig.cloneHiddenInstance,
      Fb = $$$hostConfig.cloneHiddenTextInstance,
      Gb = $$$hostConfig.canHydrateInstance,
      Hb = $$$hostConfig.canHydrateTextInstance,
      Ib = $$$hostConfig.canHydrateSuspenseInstance,
      Jb = $$$hostConfig.isSuspenseInstancePending,
      Kb = $$$hostConfig.isSuspenseInstanceFallback,
      Lb = $$$hostConfig.registerSuspenseInstanceRetry,
      Mb = $$$hostConfig.getNextHydratableSibling,
      Nb = $$$hostConfig.getFirstHydratableChild,
      Ob = $$$hostConfig.getFirstHydratableChildWithinContainer,
      Pb = $$$hostConfig.getFirstHydratableChildWithinSuspenseInstance,
      Qb = $$$hostConfig.hydrateInstance,
      Rb = $$$hostConfig.hydrateTextInstance,
      Sb = $$$hostConfig.hydrateSuspenseInstance,
      Tb = $$$hostConfig.getNextHydratableInstanceAfterSuspenseInstance,
      Ub = $$$hostConfig.commitHydratedContainer,
      Vb = $$$hostConfig.commitHydratedSuspenseInstance,
      Wb = $$$hostConfig.clearSuspenseBoundary,
      Xb = $$$hostConfig.clearSuspenseBoundaryFromContainer,
      Yb = $$$hostConfig.shouldDeleteUnhydratedTailInstances,
      Zb = $$$hostConfig.didNotMatchHydratedContainerTextInstance,
      $b = $$$hostConfig.didNotMatchHydratedTextInstance,
      ac;

  function bc(a) {
    if (void 0 === ac) try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      ac = b && b[1] || "";
    }
    return "\n" + ac + a;
  }

  var cc = !1;

  function dc(a, b) {
    if (!a || cc) return "";
    cc = !0;
    var c = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;

    try {
      if (b) {
        if (b = function b() {
          throw Error();
        }, Object.defineProperty(b.prototype, "props", {
          set: function set() {
            throw Error();
          }
        }), "object" === typeof Reflect && Reflect.construct) {
          try {
            Reflect.construct(b, []);
          } catch (l) {
            var d = l;
          }

          Reflect.construct(a, [], b);
        } else {
          try {
            b.call();
          } catch (l) {
            d = l;
          }

          a.call(b.prototype);
        }
      } else {
        try {
          throw Error();
        } catch (l) {
          d = l;
        }

        a();
      }
    } catch (l) {
      if (l && d && "string" === typeof l.stack) {
        for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];) {
          h--;
        }

        for (; 1 <= g && 0 <= h; g--, h--) {
          if (e[g] !== f[h]) {
            if (1 !== g || 1 !== h) {
              do {
                if (g--, h--, 0 > h || e[g] !== f[h]) {
                  var k = "\n" + e[g].replace(" at new ", " at ");
                  a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
                  return k;
                }
              } while (1 <= g && 0 <= h);
            }

            break;
          }
        }
      }
    } finally {
      cc = !1, Error.prepareStackTrace = c;
    }

    return (a = a ? a.displayName || a.name : "") ? bc(a) : "";
  }

  var ec = Object.prototype.hasOwnProperty,
      fc = [],
      gc = -1;

  function hc(a) {
    return {
      current: a
    };
  }

  function p(a) {
    0 > gc || (a.current = fc[gc], fc[gc] = null, gc--);
  }

  function v(a, b) {
    gc++;
    fc[gc] = a.current;
    a.current = b;
  }

  var ic = {},
      x = hc(ic),
      z = hc(!1),
      jc = ic;

  function kc(a, b) {
    var c = a.type.contextTypes;
    if (!c) return ic;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
    var e = {},
        f;

    for (f in c) {
      e[f] = b[f];
    }

    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
    return e;
  }

  function A(a) {
    a = a.childContextTypes;
    return null !== a && void 0 !== a;
  }

  function lc() {
    p(z);
    p(x);
  }

  function mc(a, b, c) {
    if (x.current !== ic) throw Error(n(168));
    v(x, b);
    v(z, c);
  }

  function nc(a, b, c) {
    var d = a.stateNode;
    b = b.childContextTypes;
    if ("function" !== typeof d.getChildContext) return c;
    d = d.getChildContext();

    for (var e in d) {
      if (!(e in b)) throw Error(n(108, va(a) || "Unknown", e));
    }

    return ca({}, c, d);
  }

  function pc(a) {
    a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || ic;
    jc = x.current;
    v(x, a);
    v(z, z.current);
    return !0;
  }

  function qc(a, b, c) {
    var d = a.stateNode;
    if (!d) throw Error(n(169));
    c ? (a = nc(a, b, jc), d.__reactInternalMemoizedMergedChildContext = a, p(z), p(x), v(x, a)) : p(z);
    v(z, c);
  }

  var sc = Math.clz32 ? Math.clz32 : rc,
      tc = Math.log,
      uc = Math.LN2;

  function rc(a) {
    a >>>= 0;
    return 0 === a ? 32 : 31 - (tc(a) / uc | 0) | 0;
  }

  var vc = 64,
      wc = 4194304;

  function xc(a) {
    switch (a & -a) {
      case 1:
        return 1;

      case 2:
        return 2;

      case 4:
        return 4;

      case 8:
        return 8;

      case 16:
        return 16;

      case 32:
        return 32;

      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a & 4194240;

      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return a & 130023424;

      case 134217728:
        return 134217728;

      case 268435456:
        return 268435456;

      case 536870912:
        return 536870912;

      case 1073741824:
        return 1073741824;

      default:
        return a;
    }
  }

  function yc(a, b) {
    var c = a.pendingLanes;
    if (0 === c) return 0;
    var d = 0,
        e = a.suspendedLanes,
        f = a.pingedLanes,
        g = c & 268435455;

    if (0 !== g) {
      var h = g & ~e;
      0 !== h ? d = xc(h) : (f &= g, 0 !== f && (d = xc(f)));
    } else g = c & ~e, 0 !== g ? d = xc(g) : 0 !== f && (d = xc(f));

    if (0 === d) return 0;
    if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
    0 !== (d & 4) && (d |= c & 16);
    b = a.entangledLanes;
    if (0 !== b) for (a = a.entanglements, b &= d; 0 < b;) {
      c = 31 - sc(b), e = 1 << c, d |= a[c], b &= ~e;
    }
    return d;
  }

  function zc(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 4:
        return b + 250;

      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return b + 5E3;

      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;

      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;

      default:
        return -1;
    }
  }

  function Ac(a, b) {
    for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f;) {
      var g = 31 - sc(f),
          h = 1 << g,
          k = e[g];

      if (-1 === k) {
        if (0 === (h & c) || 0 !== (h & d)) e[g] = zc(h, b);
      } else k <= b && (a.expiredLanes |= h);

      f &= ~h;
    }
  }

  function Bc(a) {
    a = a.pendingLanes & -1073741825;
    return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
  }

  function Cc() {
    var a = vc;
    vc <<= 1;
    0 === (vc & 4194240) && (vc = 64);
    return a;
  }

  function Dc(a) {
    for (var b = [], c = 0; 31 > c; c++) {
      b.push(a);
    }

    return b;
  }

  function Ec(a, b, c) {
    a.pendingLanes |= b;
    536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
    a = a.eventTimes;
    b = 31 - sc(b);
    a[b] = c;
  }

  function Fc(a, b) {
    var c = a.pendingLanes & ~b;
    a.pendingLanes = b;
    a.suspendedLanes = 0;
    a.pingedLanes = 0;
    a.expiredLanes &= b;
    a.mutableReadLanes &= b;
    a.entangledLanes &= b;
    b = a.entanglements;
    var d = a.eventTimes;

    for (a = a.expirationTimes; 0 < c;) {
      var e = 31 - sc(c),
          f = 1 << e;
      b[e] = 0;
      d[e] = -1;
      a[e] = -1;
      c &= ~f;
    }
  }

  function Gc(a, b) {
    var c = a.entangledLanes |= b;

    for (a = a.entanglements; c;) {
      var d = 31 - sc(c),
          e = 1 << d;
      e & b | a[d] & b && (a[d] |= b);
      c &= ~e;
    }
  }

  var C = 0;

  function Hc(a) {
    a &= -a;
    return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
  }

  var Ic = ba.unstable_scheduleCallback,
      Jc = ba.unstable_cancelCallback,
      Kc = ba.unstable_shouldYield,
      Lc = ba.unstable_requestPaint,
      D = ba.unstable_now,
      Mc = ba.unstable_ImmediatePriority,
      Nc = ba.unstable_UserBlockingPriority,
      Oc = ba.unstable_NormalPriority,
      Pc = ba.unstable_IdlePriority,
      Qc = null,
      Rc = null;

  function Sc(a) {
    if (Rc && "function" === typeof Rc.onCommitFiberRoot) try {
      Rc.onCommitFiberRoot(Qc, a, void 0, 128 === (a.current.flags & 128));
    } catch (b) {}
  }

  function Tc(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
  }

  var Uc = "function" === typeof Object.is ? Object.is : Tc,
      Vc = null,
      Wc = !1,
      Xc = !1;

  function Yc(a) {
    null === Vc ? Vc = [a] : Vc.push(a);
  }

  function Zc(a) {
    Wc = !0;
    Yc(a);
  }

  function $c() {
    if (!Xc && null !== Vc) {
      Xc = !0;
      var a = 0,
          b = C;

      try {
        var c = Vc;

        for (C = 1; a < c.length; a++) {
          var d = c[a];

          do {
            d = d(!0);
          } while (null !== d);
        }

        Vc = null;
        Wc = !1;
      } catch (e) {
        throw null !== Vc && (Vc = Vc.slice(a + 1)), Ic(Mc, $c), e;
      } finally {
        C = b, Xc = !1;
      }
    }

    return null;
  }

  var ad = da.ReactCurrentBatchConfig;

  function bd(a, b) {
    if (Uc(a, b)) return !0;
    if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
    var c = Object.keys(a),
        d = Object.keys(b);
    if (c.length !== d.length) return !1;

    for (d = 0; d < c.length; d++) {
      var e = c[d];
      if (!ec.call(b, e) || !Uc(a[e], b[e])) return !1;
    }

    return !0;
  }

  function cd(a) {
    switch (a.tag) {
      case 5:
        return bc(a.type);

      case 16:
        return bc("Lazy");

      case 13:
        return bc("Suspense");

      case 19:
        return bc("SuspenseList");

      case 0:
      case 2:
      case 15:
        return a = dc(a.type, !1), a;

      case 11:
        return a = dc(a.type.render, !1), a;

      case 1:
        return a = dc(a.type, !0), a;

      default:
        return "";
    }
  }

  function dd(a, b) {
    if (a && a.defaultProps) {
      b = ca({}, b);
      a = a.defaultProps;

      for (var c in a) {
        void 0 === b[c] && (b[c] = a[c]);
      }

      return b;
    }

    return b;
  }

  var ed = hc(null),
      fd = null,
      gd = null,
      hd = null;

  function id() {
    hd = gd = fd = null;
  }

  function jd(a, b, c) {
    Sa ? (v(ed, b._currentValue), b._currentValue = c) : (v(ed, b._currentValue2), b._currentValue2 = c);
  }

  function kd(a) {
    var b = ed.current;
    p(ed);
    Sa ? a._currentValue = b : a._currentValue2 = b;
  }

  function ld(a, b, c) {
    for (; null !== a;) {
      var d = a.alternate;
      (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
      if (a === c) break;
      a = a["return"];
    }
  }

  function md(a, b) {
    fd = a;
    hd = gd = null;
    a = a.dependencies;
    null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (F = !0), a.firstContext = null);
  }

  function nd(a) {
    var b = Sa ? a._currentValue : a._currentValue2;
    if (hd !== a) if (a = {
      context: a,
      memoizedValue: b,
      next: null
    }, null === gd) {
      if (null === fd) throw Error(n(308));
      gd = a;
      fd.dependencies = {
        lanes: 0,
        firstContext: a
      };
    } else gd = gd.next = a;
    return b;
  }

  var od = null,
      pd = !1;

  function qd(a) {
    a.updateQueue = {
      baseState: a.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        interleaved: null,
        lanes: 0
      },
      effects: null
    };
  }

  function rd(a, b) {
    a = a.updateQueue;
    b.updateQueue === a && (b.updateQueue = {
      baseState: a.baseState,
      firstBaseUpdate: a.firstBaseUpdate,
      lastBaseUpdate: a.lastBaseUpdate,
      shared: a.shared,
      effects: a.effects
    });
  }

  function sd(a, b) {
    return {
      eventTime: a,
      lane: b,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }

  function td(a, b) {
    var c = a.updateQueue;
    null !== c && (c = c.shared, ud(a) ? (a = c.interleaved, null === a ? (b.next = b, null === od ? od = [c] : od.push(c)) : (b.next = a.next, a.next = b), c.interleaved = b) : (a = c.pending, null === a ? b.next = b : (b.next = a.next, a.next = b), c.pending = b));
  }

  function vd(a, b, c) {
    b = b.updateQueue;

    if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
      var d = b.lanes;
      d &= a.pendingLanes;
      c |= d;
      b.lanes = c;
      Gc(a, c);
    }
  }

  function wd(a, b) {
    var c = a.updateQueue,
        d = a.alternate;

    if (null !== d && (d = d.updateQueue, c === d)) {
      var e = null,
          f = null;
      c = c.firstBaseUpdate;

      if (null !== c) {
        do {
          var g = {
            eventTime: c.eventTime,
            lane: c.lane,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          };
          null === f ? e = f = g : f = f.next = g;
          c = c.next;
        } while (null !== c);

        null === f ? e = f = b : f = f.next = b;
      } else e = f = b;

      c = {
        baseState: d.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: f,
        shared: d.shared,
        effects: d.effects
      };
      a.updateQueue = c;
      return;
    }

    a = c.lastBaseUpdate;
    null === a ? c.firstBaseUpdate = b : a.next = b;
    c.lastBaseUpdate = b;
  }

  function xd(a, b, c, d) {
    var e = a.updateQueue;
    pd = !1;
    var f = e.firstBaseUpdate,
        g = e.lastBaseUpdate,
        h = e.shared.pending;

    if (null !== h) {
      e.shared.pending = null;
      var k = h,
          l = k.next;
      k.next = null;
      null === g ? f = l : g.next = l;
      g = k;
      var m = a.alternate;
      null !== m && (m = m.updateQueue, h = m.lastBaseUpdate, h !== g && (null === h ? m.firstBaseUpdate = l : h.next = l, m.lastBaseUpdate = k));
    }

    if (null !== f) {
      var r = e.baseState;
      g = 0;
      m = l = k = null;
      h = f;

      do {
        var q = h.lane,
            B = h.eventTime;

        if ((d & q) === q) {
          null !== m && (m = m.next = {
            eventTime: B,
            lane: 0,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null
          });

          a: {
            var w = a,
                Z = h;
            q = b;
            B = c;

            switch (Z.tag) {
              case 1:
                w = Z.payload;

                if ("function" === typeof w) {
                  r = w.call(B, r, q);
                  break a;
                }

                r = w;
                break a;

              case 3:
                w.flags = w.flags & -65537 | 128;

              case 0:
                w = Z.payload;
                q = "function" === typeof w ? w.call(B, r, q) : w;
                if (null === q || void 0 === q) break a;
                r = ca({}, r, q);
                break a;

              case 2:
                pd = !0;
            }
          }

          null !== h.callback && 0 !== h.lane && (a.flags |= 64, q = e.effects, null === q ? e.effects = [h] : q.push(h));
        } else B = {
          eventTime: B,
          lane: q,
          tag: h.tag,
          payload: h.payload,
          callback: h.callback,
          next: null
        }, null === m ? (l = m = B, k = r) : m = m.next = B, g |= q;

        h = h.next;
        if (null === h) if (h = e.shared.pending, null === h) break;else q = h, h = q.next, q.next = null, e.lastBaseUpdate = q, e.shared.pending = null;
      } while (1);

      null === m && (k = r);
      e.baseState = k;
      e.firstBaseUpdate = l;
      e.lastBaseUpdate = m;
      b = e.shared.interleaved;

      if (null !== b) {
        e = b;

        do {
          g |= e.lane, e = e.next;
        } while (e !== b);
      } else null === f && (e.shared.lanes = 0);

      yd |= g;
      a.lanes = g;
      a.memoizedState = r;
    }
  }

  function zd(a, b, c) {
    a = b.effects;
    b.effects = null;
    if (null !== a) for (b = 0; b < a.length; b++) {
      var d = a[b],
          e = d.callback;

      if (null !== e) {
        d.callback = null;
        d = c;
        if ("function" !== typeof e) throw Error(n(191, e));
        e.call(d);
      }
    }
  }

  var Ad = new aa.Component().refs;

  function Bd(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = null === c || void 0 === c ? b : ca({}, b, c);
    a.memoizedState = c;
    0 === a.lanes && (a.updateQueue.baseState = c);
  }

  var Ed = {
    isMounted: function isMounted(a) {
      return (a = a._reactInternals) ? wa(a) === a : !1;
    },
    enqueueSetState: function enqueueSetState(a, b, c) {
      a = a._reactInternals;
      var d = G(),
          e = Cd(a),
          f = sd(d, e);
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      td(a, f);
      b = Dd(a, e, d);
      null !== b && vd(b, a, e);
    },
    enqueueReplaceState: function enqueueReplaceState(a, b, c) {
      a = a._reactInternals;
      var d = G(),
          e = Cd(a),
          f = sd(d, e);
      f.tag = 1;
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      td(a, f);
      b = Dd(a, e, d);
      null !== b && vd(b, a, e);
    },
    enqueueForceUpdate: function enqueueForceUpdate(a, b) {
      a = a._reactInternals;
      var c = G(),
          d = Cd(a),
          e = sd(c, d);
      e.tag = 2;
      void 0 !== b && null !== b && (e.callback = b);
      td(a, e);
      b = Dd(a, d, c);
      null !== b && vd(b, a, d);
    }
  };

  function Fd(a, b, c, d, e, f, g) {
    a = a.stateNode;
    return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !bd(c, d) || !bd(e, f) : !0;
  }

  function Gd(a, b, c) {
    var d = !1,
        e = ic;
    var f = b.contextType;
    "object" === typeof f && null !== f ? f = nd(f) : (e = A(b) ? jc : x.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? kc(a, e) : ic);
    b = new b(c, f);
    a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
    b.updater = Ed;
    a.stateNode = b;
    b._reactInternals = a;
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
    return b;
  }

  function Hd(a, b, c, d) {
    a = b.state;
    "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
    "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && Ed.enqueueReplaceState(b, b.state, null);
  }

  function Id(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = Ad;
    qd(a);
    var f = b.contextType;
    "object" === typeof f && null !== f ? e.context = nd(f) : (f = A(b) ? jc : x.current, e.context = kc(a, f));
    e.state = a.memoizedState;
    f = b.getDerivedStateFromProps;
    "function" === typeof f && (Bd(a, b, f, c), e.state = a.memoizedState);
    "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ed.enqueueReplaceState(e, e.state, null), xd(a, c, e, d), e.state = a.memoizedState);
    "function" === typeof e.componentDidMount && (a.flags |= 4194308);
  }

  var Jd = [],
      Kd = 0,
      Ld = null,
      Md = 0,
      Nd = [],
      Od = 0,
      Pd = null,
      Qd = 1,
      Rd = "";

  function Sd(a, b) {
    Jd[Kd++] = Md;
    Jd[Kd++] = Ld;
    Ld = a;
    Md = b;
  }

  function Td(a, b, c) {
    Nd[Od++] = Qd;
    Nd[Od++] = Rd;
    Nd[Od++] = Pd;
    Pd = a;
    var d = Qd;
    a = Rd;
    var e = 32 - sc(d) - 1;
    d &= ~(1 << e);
    c += 1;
    var f = 32 - sc(b) + e;

    if (30 < f) {
      var g = e - e % 5;
      f = (d & (1 << g) - 1).toString(32);
      d >>= g;
      e -= g;
      Qd = 1 << 32 - sc(b) + e | c << e | d;
      Rd = f + a;
    } else Qd = 1 << f | c << e | d, Rd = a;
  }

  function Ud(a) {
    null !== a["return"] && (Sd(a, 1), Td(a, 1, 0));
  }

  function Vd(a) {
    for (; a === Ld;) {
      Ld = Jd[--Kd], Jd[Kd] = null, Md = Jd[--Kd], Jd[Kd] = null;
    }

    for (; a === Pd;) {
      Pd = Nd[--Od], Nd[Od] = null, Rd = Nd[--Od], Nd[Od] = null, Qd = Nd[--Od], Nd[Od] = null;
    }
  }

  var Wd = null,
      Xd = null,
      H = !1,
      Yd = !1,
      Zd = null;

  function $d(a, b) {
    var c = ae(5, null, null, 0);
    c.elementType = "DELETED";
    c.stateNode = b;
    c["return"] = a;
    b = a.deletions;
    null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
  }

  function be(a, b) {
    switch (a.tag) {
      case 5:
        return b = Gb(b, a.type, a.pendingProps), null !== b ? (a.stateNode = b, Wd = a, Xd = Nb(b), !0) : !1;

      case 6:
        return b = Hb(b, a.pendingProps), null !== b ? (a.stateNode = b, Wd = a, Xd = null, !0) : !1;

      case 13:
        b = Ib(b);

        if (null !== b) {
          var c = null !== Pd ? {
            id: Qd,
            overflow: Rd
          } : null;
          a.memoizedState = {
            dehydrated: b,
            treeContext: c,
            retryLane: 1073741824
          };
          c = ae(18, null, null, 0);
          c.stateNode = b;
          c["return"] = a;
          a.child = c;
          Wd = a;
          Xd = null;
          return !0;
        }

        return !1;

      default:
        return !1;
    }
  }

  function ce(a) {
    return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
  }

  function de(a) {
    if (H) {
      var b = Xd;

      if (b) {
        var c = b;

        if (!be(a, b)) {
          if (ce(a)) throw Error(n(418));
          b = Mb(c);
          var d = Wd;
          b && be(a, b) ? $d(d, c) : (a.flags = a.flags & -4097 | 2, H = !1, Wd = a);
        }
      } else {
        if (ce(a)) throw Error(n(418));
        a.flags = a.flags & -4097 | 2;
        H = !1;
        Wd = a;
      }
    }
  }

  function ee(a) {
    for (a = a["return"]; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) {
      a = a["return"];
    }

    Wd = a;
  }

  function fe(a) {
    if (!Va || a !== Wd) return !1;
    if (!H) return ee(a), H = !0, !1;

    if (3 !== a.tag && (5 !== a.tag || Yb(a.type) && !Na(a.type, a.memoizedProps))) {
      var b = Xd;

      if (b) {
        if (ce(a)) {
          for (a = Xd; a;) {
            a = Mb(a);
          }

          throw Error(n(418));
        }

        for (; b;) {
          $d(a, b), b = Mb(b);
        }
      }
    }

    ee(a);

    if (13 === a.tag) {
      if (!Va) throw Error(n(316));
      a = a.memoizedState;
      a = null !== a ? a.dehydrated : null;
      if (!a) throw Error(n(317));
      Xd = Tb(a);
    } else Xd = Wd ? Mb(a.stateNode) : null;

    return !0;
  }

  function ge() {
    Va && (Xd = Wd = null, Yd = H = !1);
  }

  function he(a) {
    null === Zd ? Zd = [a] : Zd.push(a);
  }

  function ie(a, b, c) {
    a = c.ref;

    if (null !== a && "function" !== typeof a && "object" !== typeof a) {
      if (c._owner) {
        c = c._owner;

        if (c) {
          if (1 !== c.tag) throw Error(n(309));
          var d = c.stateNode;
        }

        if (!d) throw Error(n(147, a));
        var e = d,
            f = "" + a;
        if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f) return b.ref;

        b = function b(a) {
          var b = e.refs;
          b === Ad && (b = e.refs = {});
          null === a ? delete b[f] : b[f] = a;
        };

        b._stringRef = f;
        return b;
      }

      if ("string" !== typeof a) throw Error(n(284));
      if (!c._owner) throw Error(n(290, a));
    }

    return a;
  }

  function je(a, b) {
    a = Object.prototype.toString.call(b);
    throw Error(n(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
  }

  function ke(a) {
    var b = a._init;
    return b(a._payload);
  }

  function le(a) {
    function b(b, c) {
      if (a) {
        var d = b.deletions;
        null === d ? (b.deletions = [c], b.flags |= 16) : d.push(c);
      }
    }

    function c(c, d) {
      if (!a) return null;

      for (; null !== d;) {
        b(c, d), d = d.sibling;
      }

      return null;
    }

    function d(a, b) {
      for (a = new Map(); null !== b;) {
        null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
      }

      return a;
    }

    function e(a, b) {
      a = me(a, b);
      a.index = 0;
      a.sibling = null;
      return a;
    }

    function f(b, c, d) {
      b.index = d;
      if (!a) return b.flags |= 1048576, c;
      d = b.alternate;
      if (null !== d) return d = d.index, d < c ? (b.flags |= 2, c) : d;
      b.flags |= 2;
      return c;
    }

    function g(b) {
      a && null === b.alternate && (b.flags |= 2);
      return b;
    }

    function h(a, b, c, d) {
      if (null === b || 6 !== b.tag) return b = ne(c, a.mode, d), b["return"] = a, b;
      b = e(b, c);
      b["return"] = a;
      return b;
    }

    function k(a, b, c, d) {
      var f = c.type;
      if (f === ha) return m(a, b, c.props.children, d, c.key);
      if (null !== b && (b.elementType === f || "object" === typeof f && null !== f && f.$$typeof === qa && ke(f) === b.type)) return d = e(b, c.props), d.ref = ie(a, b, c), d["return"] = a, d;
      d = oe(c.type, c.key, c.props, null, a.mode, d);
      d.ref = ie(a, b, c);
      d["return"] = a;
      return d;
    }

    function l(a, b, c, d) {
      if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = pe(c, a.mode, d), b["return"] = a, b;
      b = e(b, c.children || []);
      b["return"] = a;
      return b;
    }

    function m(a, b, c, d, f) {
      if (null === b || 7 !== b.tag) return b = qe(c, a.mode, d, f), b["return"] = a, b;
      b = e(b, c);
      b["return"] = a;
      return b;
    }

    function r(a, b, c) {
      if ("string" === typeof b && "" !== b || "number" === typeof b) return b = ne("" + b, a.mode, c), b["return"] = a, b;

      if ("object" === typeof b && null !== b) {
        switch (b.$$typeof) {
          case ea:
            return c = oe(b.type, b.key, b.props, null, a.mode, c), c.ref = ie(a, null, b), c["return"] = a, c;

          case fa:
            return b = pe(b, a.mode, c), b["return"] = a, b;

          case qa:
            var d = b._init;
            return r(a, d(b._payload), c);
        }

        if (Da(b) || ta(b)) return b = qe(b, a.mode, c, null), b["return"] = a, b;
        je(a, b);
      }

      return null;
    }

    function q(a, b, c, d) {
      var e = null !== b ? b.key : null;
      if ("string" === typeof c && "" !== c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);

      if ("object" === typeof c && null !== c) {
        switch (c.$$typeof) {
          case ea:
            return c.key === e ? k(a, b, c, d) : null;

          case fa:
            return c.key === e ? l(a, b, c, d) : null;

          case qa:
            return e = c._init, q(a, b, e(c._payload), d);
        }

        if (Da(c) || ta(c)) return null !== e ? null : m(a, b, c, d, null);
        je(a, c);
      }

      return null;
    }

    function B(a, b, c, d, e) {
      if ("string" === typeof d && "" !== d || "number" === typeof d) return a = a.get(c) || null, h(b, a, "" + d, e);

      if ("object" === typeof d && null !== d) {
        switch (d.$$typeof) {
          case ea:
            return a = a.get(null === d.key ? c : d.key) || null, k(b, a, d, e);

          case fa:
            return a = a.get(null === d.key ? c : d.key) || null, l(b, a, d, e);

          case qa:
            var f = d._init;
            return B(a, b, c, f(d._payload), e);
        }

        if (Da(d) || ta(d)) return a = a.get(c) || null, m(b, a, d, e, null);
        je(b, d);
      }

      return null;
    }

    function w(e, g, h, k) {
      for (var l = null, m = null, u = g, t = g = 0, E = null; null !== u && t < h.length; t++) {
        u.index > t ? (E = u, u = null) : E = u.sibling;
        var y = q(e, u, h[t], k);

        if (null === y) {
          null === u && (u = E);
          break;
        }

        a && u && null === y.alternate && b(e, u);
        g = f(y, g, t);
        null === m ? l = y : m.sibling = y;
        m = y;
        u = E;
      }

      if (t === h.length) return c(e, u), H && Sd(e, t), l;

      if (null === u) {
        for (; t < h.length; t++) {
          u = r(e, h[t], k), null !== u && (g = f(u, g, t), null === m ? l = u : m.sibling = u, m = u);
        }

        H && Sd(e, t);
        return l;
      }

      for (u = d(e, u); t < h.length; t++) {
        E = B(u, e, t, h[t], k), null !== E && (a && null !== E.alternate && u["delete"](null === E.key ? t : E.key), g = f(E, g, t), null === m ? l = E : m.sibling = E, m = E);
      }

      a && u.forEach(function (a) {
        return b(e, a);
      });
      H && Sd(e, t);
      return l;
    }

    function Z(e, g, h, k) {
      var l = ta(h);
      if ("function" !== typeof l) throw Error(n(150));
      h = l.call(h);
      if (null == h) throw Error(n(151));

      for (var u = l = null, m = g, t = g = 0, E = null, y = h.next(); null !== m && !y.done; t++, y = h.next()) {
        m.index > t ? (E = m, m = null) : E = m.sibling;
        var w = q(e, m, y.value, k);

        if (null === w) {
          null === m && (m = E);
          break;
        }

        a && m && null === w.alternate && b(e, m);
        g = f(w, g, t);
        null === u ? l = w : u.sibling = w;
        u = w;
        m = E;
      }

      if (y.done) return c(e, m), H && Sd(e, t), l;

      if (null === m) {
        for (; !y.done; t++, y = h.next()) {
          y = r(e, y.value, k), null !== y && (g = f(y, g, t), null === u ? l = y : u.sibling = y, u = y);
        }

        H && Sd(e, t);
        return l;
      }

      for (m = d(e, m); !y.done; t++, y = h.next()) {
        y = B(m, e, t, y.value, k), null !== y && (a && null !== y.alternate && m["delete"](null === y.key ? t : y.key), g = f(y, g, t), null === u ? l = y : u.sibling = y, u = y);
      }

      a && m.forEach(function (a) {
        return b(e, a);
      });
      H && Sd(e, t);
      return l;
    }

    function za(a, d, f, h) {
      "object" === typeof f && null !== f && f.type === ha && null === f.key && (f = f.props.children);

      if ("object" === typeof f && null !== f) {
        switch (f.$$typeof) {
          case ea:
            a: {
              for (var k = f.key, l = d; null !== l;) {
                if (l.key === k) {
                  k = f.type;

                  if (k === ha) {
                    if (7 === l.tag) {
                      c(a, l.sibling);
                      d = e(l, f.props.children);
                      d["return"] = a;
                      a = d;
                      break a;
                    }
                  } else if (l.elementType === k || "object" === typeof k && null !== k && k.$$typeof === qa && ke(k) === l.type) {
                    c(a, l.sibling);
                    d = e(l, f.props);
                    d.ref = ie(a, l, f);
                    d["return"] = a;
                    a = d;
                    break a;
                  }

                  c(a, l);
                  break;
                } else b(a, l);

                l = l.sibling;
              }

              f.type === ha ? (d = qe(f.props.children, a.mode, h, f.key), d["return"] = a, a = d) : (h = oe(f.type, f.key, f.props, null, a.mode, h), h.ref = ie(a, d, f), h["return"] = a, a = h);
            }

            return g(a);

          case fa:
            a: {
              for (l = f.key; null !== d;) {
                if (d.key === l) {
                  if (4 === d.tag && d.stateNode.containerInfo === f.containerInfo && d.stateNode.implementation === f.implementation) {
                    c(a, d.sibling);
                    d = e(d, f.children || []);
                    d["return"] = a;
                    a = d;
                    break a;
                  } else {
                    c(a, d);
                    break;
                  }
                } else b(a, d);
                d = d.sibling;
              }

              d = pe(f, a.mode, h);
              d["return"] = a;
              a = d;
            }

            return g(a);

          case qa:
            return l = f._init, za(a, d, l(f._payload), h);
        }

        if (Da(f)) return w(a, d, f, h);
        if (ta(f)) return Z(a, d, f, h);
        je(a, f);
      }

      return "string" === typeof f && "" !== f || "number" === typeof f ? (f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d["return"] = a, a = d) : (c(a, d), d = ne(f, a.mode, h), d["return"] = a, a = d), g(a)) : c(a, d);
    }

    return za;
  }

  var re = le(!0),
      se = le(!1),
      te = {},
      ue = hc(te),
      ve = hc(te),
      we = hc(te);

  function xe(a) {
    if (a === te) throw Error(n(174));
    return a;
  }

  function ye(a, b) {
    v(we, b);
    v(ve, a);
    v(ue, te);
    a = Fa(b);
    p(ue);
    v(ue, a);
  }

  function ze() {
    p(ue);
    p(ve);
    p(we);
  }

  function Ae(a) {
    var b = xe(we.current),
        c = xe(ue.current);
    b = Ga(c, a.type, b);
    c !== b && (v(ve, a), v(ue, b));
  }

  function Be(a) {
    ve.current === a && (p(ue), p(ve));
  }

  var I = hc(0);

  function Ce(a) {
    for (var b = a; null !== b;) {
      if (13 === b.tag) {
        var c = b.memoizedState;
        if (null !== c && (c = c.dehydrated, null === c || Jb(c) || Kb(c))) return b;
      } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
        if (0 !== (b.flags & 128)) return b;
      } else if (null !== b.child) {
        b.child["return"] = b;
        b = b.child;
        continue;
      }

      if (b === a) break;

      for (; null === b.sibling;) {
        if (null === b["return"] || b["return"] === a) return null;
        b = b["return"];
      }

      b.sibling["return"] = b["return"];
      b = b.sibling;
    }

    return null;
  }

  var De = [];

  function Ee() {
    for (var a = 0; a < De.length; a++) {
      var b = De[a];
      Sa ? b._workInProgressVersionPrimary = null : b._workInProgressVersionSecondary = null;
    }

    De.length = 0;
  }

  var Fe = da.ReactCurrentDispatcher,
      Ge = da.ReactCurrentBatchConfig,
      He = 0,
      J = null,
      K = null,
      L = null,
      Ie = !1,
      Je = !1,
      Ke = 0,
      Le = 0;

  function M() {
    throw Error(n(321));
  }

  function Me(a, b) {
    if (null === b) return !1;

    for (var c = 0; c < b.length && c < a.length; c++) {
      if (!Uc(a[c], b[c])) return !1;
    }

    return !0;
  }

  function Ne(a, b, c, d, e, f) {
    He = f;
    J = b;
    b.memoizedState = null;
    b.updateQueue = null;
    b.lanes = 0;
    Fe.current = null === a || null === a.memoizedState ? Oe : Pe;
    a = c(d, e);

    if (Je) {
      f = 0;

      do {
        Je = !1;
        Ke = 0;
        if (25 <= f) throw Error(n(301));
        f += 1;
        L = K = null;
        b.updateQueue = null;
        Fe.current = Qe;
        a = c(d, e);
      } while (Je);
    }

    Fe.current = Re;
    b = null !== K && null !== K.next;
    He = 0;
    L = K = J = null;
    Ie = !1;
    if (b) throw Error(n(300));
    return a;
  }

  function Se() {
    var a = 0 !== Ke;
    Ke = 0;
    return a;
  }

  function Te() {
    var a = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    null === L ? J.memoizedState = L = a : L = L.next = a;
    return L;
  }

  function Ue() {
    if (null === K) {
      var a = J.alternate;
      a = null !== a ? a.memoizedState : null;
    } else a = K.next;

    var b = null === L ? J.memoizedState : L.next;
    if (null !== b) L = b, K = a;else {
      if (null === a) throw Error(n(310));
      K = a;
      a = {
        memoizedState: K.memoizedState,
        baseState: K.baseState,
        baseQueue: K.baseQueue,
        queue: K.queue,
        next: null
      };
      null === L ? J.memoizedState = L = a : L = L.next = a;
    }
    return L;
  }

  function Ve(a, b) {
    return "function" === typeof b ? b(a) : b;
  }

  function We(a) {
    var b = Ue(),
        c = b.queue;
    if (null === c) throw Error(n(311));
    c.lastRenderedReducer = a;
    var d = K,
        e = d.baseQueue,
        f = c.pending;

    if (null !== f) {
      if (null !== e) {
        var g = e.next;
        e.next = f.next;
        f.next = g;
      }

      d.baseQueue = e = f;
      c.pending = null;
    }

    if (null !== e) {
      f = e.next;
      d = d.baseState;
      var h = g = null,
          k = null,
          l = f;

      do {
        var m = l.lane;
        if ((He & m) === m) null !== k && (k = k.next = {
          lane: 0,
          action: l.action,
          hasEagerState: l.hasEagerState,
          eagerState: l.eagerState,
          next: null
        }), d = l.hasEagerState ? l.eagerState : a(d, l.action);else {
          var r = {
            lane: m,
            action: l.action,
            hasEagerState: l.hasEagerState,
            eagerState: l.eagerState,
            next: null
          };
          null === k ? (h = k = r, g = d) : k = k.next = r;
          J.lanes |= m;
          yd |= m;
        }
        l = l.next;
      } while (null !== l && l !== f);

      null === k ? g = d : k.next = h;
      Uc(d, b.memoizedState) || (F = !0);
      b.memoizedState = d;
      b.baseState = g;
      b.baseQueue = k;
      c.lastRenderedState = d;
    }

    a = c.interleaved;

    if (null !== a) {
      e = a;

      do {
        f = e.lane, J.lanes |= f, yd |= f, e = e.next;
      } while (e !== a);
    } else null === e && (c.lanes = 0);

    return [b.memoizedState, c.dispatch];
  }

  function Xe(a) {
    var b = Ue(),
        c = b.queue;
    if (null === c) throw Error(n(311));
    c.lastRenderedReducer = a;
    var d = c.dispatch,
        e = c.pending,
        f = b.memoizedState;

    if (null !== e) {
      c.pending = null;
      var g = e = e.next;

      do {
        f = a(f, g.action), g = g.next;
      } while (g !== e);

      Uc(f, b.memoizedState) || (F = !0);
      b.memoizedState = f;
      null === b.baseQueue && (b.baseState = f);
      c.lastRenderedState = f;
    }

    return [f, d];
  }

  function Ye() {}

  function Ze(a, b) {
    var c = J,
        d = Ue(),
        e = b(),
        f = !Uc(d.memoizedState, e);
    f && (d.memoizedState = e, F = !0);
    d = d.queue;
    $e(af.bind(null, c, d, a), [a]);

    if (d.getSnapshot !== b || f || null !== L && L.memoizedState.tag & 1) {
      c.flags |= 2048;
      bf(9, cf.bind(null, c, d, e, b), void 0, null);
      if (null === N) throw Error(n(349));
      0 !== (He & 30) || df(c, b, e);
    }

    return e;
  }

  function df(a, b, c) {
    a.flags |= 16384;
    a = {
      getSnapshot: b,
      value: c
    };
    b = J.updateQueue;
    null === b ? (b = {
      lastEffect: null,
      stores: null
    }, J.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
  }

  function cf(a, b, c, d) {
    b.value = c;
    b.getSnapshot = d;
    ef(b) && Dd(a, 1, -1);
  }

  function af(a, b, c) {
    return c(function () {
      ef(b) && Dd(a, 1, -1);
    });
  }

  function ef(a) {
    var b = a.getSnapshot;
    a = a.value;

    try {
      var c = b();
      return !Uc(a, c);
    } catch (d) {
      return !0;
    }
  }

  function ff(a) {
    var b = Te();
    "function" === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ve,
      lastRenderedState: a
    };
    b.queue = a;
    a = a.dispatch = gf.bind(null, J, a);
    return [b.memoizedState, a];
  }

  function bf(a, b, c, d) {
    a = {
      tag: a,
      create: b,
      destroy: c,
      deps: d,
      next: null
    };
    b = J.updateQueue;
    null === b ? (b = {
      lastEffect: null,
      stores: null
    }, J.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
    return a;
  }

  function hf() {
    return Ue().memoizedState;
  }

  function jf(a, b, c, d) {
    var e = Te();
    J.flags |= a;
    e.memoizedState = bf(1 | b, c, void 0, void 0 === d ? null : d);
  }

  function kf(a, b, c, d) {
    var e = Ue();
    d = void 0 === d ? null : d;
    var f = void 0;

    if (null !== K) {
      var g = K.memoizedState;
      f = g.destroy;

      if (null !== d && Me(d, g.deps)) {
        e.memoizedState = bf(b, c, f, d);
        return;
      }
    }

    J.flags |= a;
    e.memoizedState = bf(1 | b, c, f, d);
  }

  function lf(a, b) {
    return jf(8390656, 8, a, b);
  }

  function $e(a, b) {
    return kf(2048, 8, a, b);
  }

  function mf(a, b) {
    return kf(4, 2, a, b);
  }

  function nf(a, b) {
    return kf(4, 4, a, b);
  }

  function of(a, b) {
    if ("function" === typeof b) return a = a(), b(a), function () {
      b(null);
    };
    if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
      b.current = null;
    };
  }

  function pf(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return kf(4, 4, of.bind(null, b, a), c);
  }

  function qf() {}

  function rf(a, b) {
    var c = Ue();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Me(b, d[1])) return d[0];
    c.memoizedState = [a, b];
    return a;
  }

  function sf(a, b) {
    var c = Ue();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Me(b, d[1])) return d[0];
    a = a();
    c.memoizedState = [a, b];
    return a;
  }

  function tf(a, b, c) {
    if (0 === (He & 21)) return a.baseState && (a.baseState = !1, F = !0), a.memoizedState = c;
    Uc(c, b) || (c = Cc(), J.lanes |= c, yd |= c, a.baseState = !0);
    return b;
  }

  function uf(a, b) {
    var c = C;
    C = 0 !== c && 4 > c ? c : 4;
    a(!0);
    var d = Ge.transition;
    Ge.transition = {};

    try {
      a(!1), b();
    } finally {
      C = c, Ge.transition = d;
    }
  }

  function vf() {
    return Ue().memoizedState;
  }

  function wf(a, b, c) {
    var d = Cd(a);
    c = {
      lane: d,
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    xf(a) ? yf(b, c) : (zf(a, b, c), c = G(), a = Dd(a, d, c), null !== a && Af(a, b, d));
  }

  function gf(a, b, c) {
    var d = Cd(a),
        e = {
      lane: d,
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (xf(a)) yf(b, e);else {
      zf(a, b, e);
      var f = a.alternate;
      if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
        var g = b.lastRenderedState,
            h = f(g, c);
        e.hasEagerState = !0;
        e.eagerState = h;
        if (Uc(h, g)) return;
      } catch (k) {} finally {}
      c = G();
      a = Dd(a, d, c);
      null !== a && Af(a, b, d);
    }
  }

  function xf(a) {
    var b = a.alternate;
    return a === J || null !== b && b === J;
  }

  function yf(a, b) {
    Je = Ie = !0;
    var c = a.pending;
    null === c ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
  }

  function zf(a, b, c) {
    ud(a) ? (a = b.interleaved, null === a ? (c.next = c, null === od ? od = [b] : od.push(b)) : (c.next = a.next, a.next = c), b.interleaved = c) : (a = b.pending, null === a ? c.next = c : (c.next = a.next, a.next = c), b.pending = c);
  }

  function Af(a, b, c) {
    if (0 !== (c & 4194240)) {
      var d = b.lanes;
      d &= a.pendingLanes;
      c |= d;
      b.lanes = c;
      Gc(a, c);
    }
  }

  var Re = {
    readContext: nd,
    useCallback: M,
    useContext: M,
    useEffect: M,
    useImperativeHandle: M,
    useInsertionEffect: M,
    useLayoutEffect: M,
    useMemo: M,
    useReducer: M,
    useRef: M,
    useState: M,
    useDebugValue: M,
    useDeferredValue: M,
    useTransition: M,
    useMutableSource: M,
    useSyncExternalStore: M,
    useId: M,
    unstable_isNewReconciler: !1
  },
      Oe = {
    readContext: nd,
    useCallback: function useCallback(a, b) {
      Te().memoizedState = [a, void 0 === b ? null : b];
      return a;
    },
    useContext: nd,
    useEffect: lf,
    useImperativeHandle: function useImperativeHandle(a, b, c) {
      c = null !== c && void 0 !== c ? c.concat([a]) : null;
      return jf(4194308, 4, of.bind(null, b, a), c);
    },
    useLayoutEffect: function useLayoutEffect(a, b) {
      return jf(4194308, 4, a, b);
    },
    useInsertionEffect: function useInsertionEffect(a, b) {
      return jf(4, 2, a, b);
    },
    useMemo: function useMemo(a, b) {
      var c = Te();
      b = void 0 === b ? null : b;
      a = a();
      c.memoizedState = [a, b];
      return a;
    },
    useReducer: function useReducer(a, b, c) {
      var d = Te();
      b = void 0 !== c ? c(b) : b;
      d.memoizedState = d.baseState = b;
      a = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: a,
        lastRenderedState: b
      };
      d.queue = a;
      a = a.dispatch = wf.bind(null, J, a);
      return [d.memoizedState, a];
    },
    useRef: function useRef(a) {
      var b = Te();
      a = {
        current: a
      };
      return b.memoizedState = a;
    },
    useState: ff,
    useDebugValue: qf,
    useDeferredValue: function useDeferredValue(a) {
      return Te().memoizedState = a;
    },
    useTransition: function useTransition() {
      var a = ff(!1),
          b = a[0];
      a = uf.bind(null, a[1]);
      Te().memoizedState = a;
      return [b, a];
    },
    useMutableSource: function useMutableSource() {},
    useSyncExternalStore: function useSyncExternalStore(a, b, c) {
      var d = J,
          e = Te();

      if (H) {
        if (void 0 === c) throw Error(n(407));
        c = c();
      } else {
        c = b();
        if (null === N) throw Error(n(349));
        0 !== (He & 30) || df(d, b, c);
      }

      e.memoizedState = c;
      var f = {
        value: c,
        getSnapshot: b
      };
      e.queue = f;
      lf(af.bind(null, d, f, a), [a]);
      d.flags |= 2048;
      bf(9, cf.bind(null, d, f, c, b), void 0, null);
      return c;
    },
    useId: function useId() {
      var a = Te(),
          b = N.identifierPrefix;

      if (H) {
        var c = Rd;
        var d = Qd;
        c = (d & ~(1 << 32 - sc(d) - 1)).toString(32) + c;
        b = ":" + b + "R" + c;
        c = Ke++;
        0 < c && (b += "H" + c.toString(32));
        b += ":";
      } else c = Le++, b = ":" + b + "r" + c.toString(32) + ":";

      return a.memoizedState = b;
    },
    unstable_isNewReconciler: !1
  },
      Pe = {
    readContext: nd,
    useCallback: rf,
    useContext: nd,
    useEffect: $e,
    useImperativeHandle: pf,
    useInsertionEffect: mf,
    useLayoutEffect: nf,
    useMemo: sf,
    useReducer: We,
    useRef: hf,
    useState: function useState() {
      return We(Ve);
    },
    useDebugValue: qf,
    useDeferredValue: function useDeferredValue(a) {
      var b = Ue();
      return tf(b, K.memoizedState, a);
    },
    useTransition: function useTransition() {
      var a = We(Ve)[0],
          b = Ue().memoizedState;
      return [a, b];
    },
    useMutableSource: Ye,
    useSyncExternalStore: Ze,
    useId: vf,
    unstable_isNewReconciler: !1
  },
      Qe = {
    readContext: nd,
    useCallback: rf,
    useContext: nd,
    useEffect: $e,
    useImperativeHandle: pf,
    useInsertionEffect: mf,
    useLayoutEffect: nf,
    useMemo: sf,
    useReducer: Xe,
    useRef: hf,
    useState: function useState() {
      return Xe(Ve);
    },
    useDebugValue: qf,
    useDeferredValue: function useDeferredValue(a) {
      var b = Ue();
      return null === K ? b.memoizedState = a : tf(b, K.memoizedState, a);
    },
    useTransition: function useTransition() {
      var a = Xe(Ve)[0],
          b = Ue().memoizedState;
      return [a, b];
    },
    useMutableSource: Ye,
    useSyncExternalStore: Ze,
    useId: vf,
    unstable_isNewReconciler: !1
  };

  function Bf(a, b) {
    try {
      var c = "",
          d = b;

      do {
        c += cd(d), d = d["return"];
      } while (d);

      var e = c;
    } catch (f) {
      e = "\nError generating stack: " + f.message + "\n" + f.stack;
    }

    return {
      value: a,
      source: b,
      stack: e
    };
  }

  function Cf(a, b) {
    try {
      console.error(b.value);
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }

  var Df = "function" === typeof WeakMap ? WeakMap : Map;

  function Ef(a, b, c) {
    c = sd(-1, c);
    c.tag = 3;
    c.payload = {
      element: null
    };
    var d = b.value;

    c.callback = function () {
      Ff || (Ff = !0, Gf = d);
      Cf(a, b);
    };

    return c;
  }

  function Hf(a, b, c) {
    c = sd(-1, c);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;

    if ("function" === typeof d) {
      var e = b.value;

      c.payload = function () {
        return d(e);
      };

      c.callback = function () {
        Cf(a, b);
      };
    }

    var f = a.stateNode;
    null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
      Cf(a, b);
      "function" !== typeof d && (null === If ? If = new Set([this]) : If.add(this));
      var c = b.stack;
      this.componentDidCatch(b.value, {
        componentStack: null !== c ? c : ""
      });
    });
    return c;
  }

  function Jf(a, b, c) {
    var d = a.pingCache;

    if (null === d) {
      d = a.pingCache = new Df();
      var e = new Set();
      d.set(b, e);
    } else e = d.get(b), void 0 === e && (e = new Set(), d.set(b, e));

    e.has(c) || (e.add(c), a = Kf.bind(null, a, b, c), b.then(a, a));
  }

  function Lf(a) {
    do {
      var b;
      if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? !0 : !1 : !0;
      if (b) return a;
      a = a["return"];
    } while (null !== a);

    return null;
  }

  function Mf(a, b, c, d, e) {
    if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = sd(-1, 1), b.tag = 2, td(c, b))), c.lanes |= 1), a;
    a.flags |= 65536;
    a.lanes = e;
    return a;
  }

  function Nf(a) {
    a.flags |= 4;
  }

  function Of(a, b) {
    if (null !== a && a.child === b.child) return !0;
    if (0 !== (b.flags & 16)) return !1;

    for (a = b.child; null !== a;) {
      if (0 !== (a.flags & 12854) || 0 !== (a.subtreeFlags & 12854)) return !1;
      a = a.sibling;
    }

    return !0;
  }

  var _Pf, Qf, Rf, Sf;

  if (Ta) _Pf = function Pf(a, b) {
    for (var c = b.child; null !== c;) {
      if (5 === c.tag || 6 === c.tag) Ka(a, c.stateNode);else if (4 !== c.tag && null !== c.child) {
        c.child["return"] = c;
        c = c.child;
        continue;
      }
      if (c === b) break;

      for (; null === c.sibling;) {
        if (null === c["return"] || c["return"] === b) return;
        c = c["return"];
      }

      c.sibling["return"] = c["return"];
      c = c.sibling;
    }
  }, Qf = function Qf() {}, Rf = function Rf(a, b, c, d, e) {
    a = a.memoizedProps;

    if (a !== d) {
      var f = b.stateNode,
          g = xe(ue.current);
      c = Ma(f, c, a, d, e, g);
      (b.updateQueue = c) && Nf(b);
    }
  }, Sf = function Sf(a, b, c, d) {
    c !== d && Nf(b);
  };else if (Ua) {
    _Pf = function Pf(a, b, c, d) {
      for (var e = b.child; null !== e;) {
        if (5 === e.tag) {
          var f = e.stateNode;
          c && d && (f = Eb(f, e.type, e.memoizedProps, e));
          Ka(a, f);
        } else if (6 === e.tag) f = e.stateNode, c && d && (f = Fb(f, e.memoizedProps, e)), Ka(a, f);else if (4 !== e.tag) if (22 === e.tag && null !== e.memoizedState) f = e.child, null !== f && (f["return"] = e), _Pf(a, e, !0, !0);else if (null !== e.child) {
          e.child["return"] = e;
          e = e.child;
          continue;
        }

        if (e === b) break;

        for (; null === e.sibling;) {
          if (null === e["return"] || e["return"] === b) return;
          e = e["return"];
        }

        e.sibling["return"] = e["return"];
        e = e.sibling;
      }
    };

    var Tf = function Tf(a, b, c, d) {
      for (var e = b.child; null !== e;) {
        if (5 === e.tag) {
          var f = e.stateNode;
          c && d && (f = Eb(f, e.type, e.memoizedProps, e));
          Ab(a, f);
        } else if (6 === e.tag) f = e.stateNode, c && d && (f = Fb(f, e.memoizedProps, e)), Ab(a, f);else if (4 !== e.tag) if (22 === e.tag && null !== e.memoizedState) f = e.child, null !== f && (f["return"] = e), Tf(a, e, !0, !0);else if (null !== e.child) {
          e.child["return"] = e;
          e = e.child;
          continue;
        }

        if (e === b) break;

        for (; null === e.sibling;) {
          if (null === e["return"] || e["return"] === b) return;
          e = e["return"];
        }

        e.sibling["return"] = e["return"];
        e = e.sibling;
      }
    };

    Qf = function Qf(a, b) {
      var c = b.stateNode;

      if (!Of(a, b)) {
        a = c.containerInfo;
        var d = zb(a);
        Tf(d, b, !1, !1);
        c.pendingChildren = d;
        Nf(b);
        Bb(a, d);
      }
    };

    Rf = function Rf(a, b, c, d, e) {
      var f = a.stateNode,
          g = a.memoizedProps;
      if ((a = Of(a, b)) && g === d) b.stateNode = f;else {
        var h = b.stateNode,
            k = xe(ue.current),
            l = null;
        g !== d && (l = Ma(h, c, g, d, e, k));
        a && null === l ? b.stateNode = f : (f = yb(f, l, c, g, d, b, a, h), La(f, c, d, e, k) && Nf(b), b.stateNode = f, a ? Nf(b) : _Pf(f, b, !1, !1));
      }
    };

    Sf = function Sf(a, b, c, d) {
      c !== d ? (a = xe(we.current), c = xe(ue.current), b.stateNode = Oa(d, a, c, b), Nf(b)) : b.stateNode = a.stateNode;
    };
  } else Qf = function Qf() {}, Rf = function Rf() {}, Sf = function Sf() {};

  function Uf(a, b) {
    if (!H) switch (a.tailMode) {
      case "hidden":
        b = a.tail;

        for (var c = null; null !== b;) {
          null !== b.alternate && (c = b), b = b.sibling;
        }

        null === c ? a.tail = null : c.sibling = null;
        break;

      case "collapsed":
        c = a.tail;

        for (var d = null; null !== c;) {
          null !== c.alternate && (d = c), c = c.sibling;
        }

        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
  }

  function O(a) {
    var b = null !== a.alternate && a.alternate.child === a.child,
        c = 0,
        d = 0;
    if (b) for (var e = a.child; null !== e;) {
      c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e["return"] = a, e = e.sibling;
    } else for (e = a.child; null !== e;) {
      c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e["return"] = a, e = e.sibling;
    }
    a.subtreeFlags |= d;
    a.childLanes = c;
    return b;
  }

  function Vf(a, b, c) {
    var d = b.pendingProps;
    Vd(b);

    switch (b.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return O(b), null;

      case 1:
        return A(b.type) && lc(), O(b), null;

      case 3:
        d = b.stateNode;
        ze();
        p(z);
        p(x);
        Ee();
        d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
        if (null === a || null === a.child) fe(b) ? Nf(b) : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== Zd && (Wf(Zd), Zd = null));
        Qf(a, b);
        O(b);
        return null;

      case 5:
        Be(b);
        c = xe(we.current);
        var e = b.type;
        if (null !== a && null != b.stateNode) Rf(a, b, e, d, c), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);else {
          if (!d) {
            if (null === b.stateNode) throw Error(n(166));
            O(b);
            return null;
          }

          a = xe(ue.current);

          if (fe(b)) {
            if (!Va) throw Error(n(175));
            a = Qb(b.stateNode, b.type, b.memoizedProps, c, a, b, !Yd);
            b.updateQueue = a;
            null !== a && Nf(b);
          } else {
            var f = Ja(e, d, c, a, b);

            _Pf(f, b, !1, !1);

            b.stateNode = f;
            La(f, e, d, c, a) && Nf(b);
          }

          null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
        }
        O(b);
        return null;

      case 6:
        if (a && null != b.stateNode) Sf(a, b, a.memoizedProps, d);else {
          if ("string" !== typeof d && null === b.stateNode) throw Error(n(166));
          a = xe(we.current);
          c = xe(ue.current);

          if (fe(b)) {
            if (!Va) throw Error(n(176));
            a = b.stateNode;
            d = b.memoizedProps;
            if (c = Rb(a, d, b, !Yd)) if (e = Wd, null !== e) switch (e.tag) {
              case 3:
                Zb(e.stateNode.containerInfo, a, d, 0 !== (e.mode & 1));
                break;

              case 5:
                $b(e.type, e.memoizedProps, e.stateNode, a, d, 0 !== (e.mode & 1));
            }
            c && Nf(b);
          } else b.stateNode = Oa(d, a, c, b);
        }
        O(b);
        return null;

      case 13:
        p(I);
        d = b.memoizedState;

        if (H && null !== Xd && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) {
          for (a = Xd; a;) {
            a = Mb(a);
          }

          ge();
          b.flags |= 98560;
          return b;
        }

        if (null !== d && null !== d.dehydrated) {
          d = fe(b);

          if (null === a) {
            if (!d) throw Error(n(318));
            if (!Va) throw Error(n(344));
            a = b.memoizedState;
            a = null !== a ? a.dehydrated : null;
            if (!a) throw Error(n(317));
            Sb(a, b);
          } else ge(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;

          O(b);
          return null;
        }

        null !== Zd && (Wf(Zd), Zd = null);
        if (0 !== (b.flags & 128)) return b.lanes = c, b;
        d = null !== d;
        c = !1;
        null === a ? fe(b) : c = null !== a.memoizedState;
        d !== c && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (I.current & 1) ? 0 === P && (P = 3) : Xf()));
        null !== b.updateQueue && (b.flags |= 4);
        O(b);
        return null;

      case 4:
        return ze(), Qf(a, b), null === a && Xa(b.stateNode.containerInfo), O(b), null;

      case 10:
        return kd(b.type._context), O(b), null;

      case 17:
        return A(b.type) && lc(), O(b), null;

      case 19:
        p(I);
        e = b.memoizedState;
        if (null === e) return O(b), null;
        d = 0 !== (b.flags & 128);
        f = e.rendering;
        if (null === f) {
          if (d) Uf(e, !1);else {
            if (0 !== P || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a;) {
              f = Ce(a);

              if (null !== f) {
                b.flags |= 128;
                Uf(e, !1);
                a = f.updateQueue;
                null !== a && (b.updateQueue = a, b.flags |= 4);
                b.subtreeFlags = 0;
                a = c;

                for (d = b.child; null !== d;) {
                  c = d, e = a, c.flags &= 14680066, f = c.alternate, null === f ? (c.childLanes = 0, c.lanes = e, c.child = null, c.subtreeFlags = 0, c.memoizedProps = null, c.memoizedState = null, c.updateQueue = null, c.dependencies = null, c.stateNode = null) : (c.childLanes = f.childLanes, c.lanes = f.lanes, c.child = f.child, c.subtreeFlags = 0, c.deletions = null, c.memoizedProps = f.memoizedProps, c.memoizedState = f.memoizedState, c.updateQueue = f.updateQueue, c.type = f.type, e = f.dependencies, c.dependencies = null === e ? null : {
                    lanes: e.lanes,
                    firstContext: e.firstContext
                  }), d = d.sibling;
                }

                v(I, I.current & 1 | 2);
                return b.child;
              }

              a = a.sibling;
            }
            null !== e.tail && D() > Yf && (b.flags |= 128, d = !0, Uf(e, !1), b.lanes = 4194304);
          }
        } else {
          if (!d) if (a = Ce(f), null !== a) {
            if (b.flags |= 128, d = !0, a = a.updateQueue, null !== a && (b.updateQueue = a, b.flags |= 4), Uf(e, !0), null === e.tail && "hidden" === e.tailMode && !f.alternate && !H) return O(b), null;
          } else 2 * D() - e.renderingStartTime > Yf && 1073741824 !== c && (b.flags |= 128, d = !0, Uf(e, !1), b.lanes = 4194304);
          e.isBackwards ? (f.sibling = b.child, b.child = f) : (a = e.last, null !== a ? a.sibling = f : b.child = f, e.last = f);
        }
        if (null !== e.tail) return b = e.tail, e.rendering = b, e.tail = b.sibling, e.renderingStartTime = D(), b.sibling = null, a = I.current, v(I, d ? a & 1 | 2 : a & 1), b;
        O(b);
        return null;

      case 22:
      case 23:
        return Zf(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== ($f & 1073741824) && (O(b), Ta && b.subtreeFlags & 6 && (b.flags |= 8192)) : O(b), null;

      case 24:
        return null;

      case 25:
        return null;
    }

    throw Error(n(156, b.tag));
  }

  var ag = da.ReactCurrentOwner,
      F = !1;

  function Q(a, b, c, d) {
    b.child = null === a ? se(b, null, c, d) : re(b, a.child, c, d);
  }

  function bg(a, b, c, d, e) {
    c = c.render;
    var f = b.ref;
    md(b, e);
    d = Ne(a, b, c, d, f, e);
    c = Se();
    if (null !== a && !F) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, cg(a, b, e);
    H && c && Ud(b);
    b.flags |= 1;
    Q(a, b, d, e);
    return b.child;
  }

  function dg(a, b, c, d, e) {
    if (null === a) {
      var f = c.type;
      if ("function" === typeof f && !eg(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, fg(a, b, f, d, e);
      a = oe(c.type, null, d, b, b.mode, e);
      a.ref = b.ref;
      a["return"] = b;
      return b.child = a;
    }

    f = a.child;

    if (0 === (a.lanes & e)) {
      var g = f.memoizedProps;
      c = c.compare;
      c = null !== c ? c : bd;
      if (c(g, d) && a.ref === b.ref) return cg(a, b, e);
    }

    b.flags |= 1;
    a = me(f, d);
    a.ref = b.ref;
    a["return"] = b;
    return b.child = a;
  }

  function fg(a, b, c, d, e) {
    if (null !== a) {
      var f = a.memoizedProps;
      if (bd(f, d) && a.ref === b.ref) if (F = !1, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (F = !0);else return b.lanes = a.lanes, cg(a, b, e);
    }

    return gg(a, b, c, d, e);
  }

  function hg(a, b, c) {
    var d = b.pendingProps,
        e = d.children,
        f = null !== a ? a.memoizedState : null;
    if ("hidden" === d.mode) {
      if (0 === (b.mode & 1)) b.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, v(ig, $f), $f |= c;else if (0 !== (c & 1073741824)) b.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, d = null !== f ? f.baseLanes : c, v(ig, $f), $f |= d;else return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
        baseLanes: a,
        cachePool: null,
        transitions: null
      }, b.updateQueue = null, v(ig, $f), $f |= a, null;
    } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, v(ig, $f), $f |= d;
    Q(a, b, e, c);
    return b.child;
  }

  function jg(a, b) {
    var c = b.ref;
    if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
  }

  function gg(a, b, c, d, e) {
    var f = A(c) ? jc : x.current;
    f = kc(b, f);
    md(b, e);
    c = Ne(a, b, c, d, f, e);
    d = Se();
    if (null !== a && !F) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, cg(a, b, e);
    H && d && Ud(b);
    b.flags |= 1;
    Q(a, b, c, e);
    return b.child;
  }

  function kg(a, b, c, d, e) {
    if (A(c)) {
      var f = !0;
      pc(b);
    } else f = !1;

    md(b, e);
    if (null === b.stateNode) null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), Gd(b, c, d), Id(b, c, d, e), d = !0;else if (null === a) {
      var g = b.stateNode,
          h = b.memoizedProps;
      g.props = h;
      var k = g.context,
          l = c.contextType;
      "object" === typeof l && null !== l ? l = nd(l) : (l = A(c) ? jc : x.current, l = kc(b, l));
      var m = c.getDerivedStateFromProps,
          r = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
      r || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Hd(b, g, d, l);
      pd = !1;
      var q = b.memoizedState;
      g.state = q;
      xd(b, d, g, e);
      k = b.memoizedState;
      h !== d || q !== k || z.current || pd ? ("function" === typeof m && (Bd(b, c, m, d), k = b.memoizedState), (h = pd || Fd(b, c, h, d, q, k, l)) ? (r || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = !1);
    } else {
      g = b.stateNode;
      rd(a, b);
      h = b.memoizedProps;
      l = b.type === b.elementType ? h : dd(b.type, h);
      g.props = l;
      r = b.pendingProps;
      q = g.context;
      k = c.contextType;
      "object" === typeof k && null !== k ? k = nd(k) : (k = A(c) ? jc : x.current, k = kc(b, k));
      var B = c.getDerivedStateFromProps;
      (m = "function" === typeof B || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== r || q !== k) && Hd(b, g, d, k);
      pd = !1;
      q = b.memoizedState;
      g.state = q;
      xd(b, d, g, e);
      var w = b.memoizedState;
      h !== r || q !== w || z.current || pd ? ("function" === typeof B && (Bd(b, c, B, d), w = b.memoizedState), (l = pd || Fd(b, c, l, d, q, w, k) || !1) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, w, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, w, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && q === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && q === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = w), g.props = d, g.state = w, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && q === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && q === a.memoizedState || (b.flags |= 1024), d = !1);
    }
    return lg(a, b, c, d, f, e);
  }

  function lg(a, b, c, d, e, f) {
    jg(a, b);
    var g = 0 !== (b.flags & 128);
    if (!d && !g) return e && qc(b, c, !1), cg(a, b, f);
    d = b.stateNode;
    ag.current = b;
    var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
    b.flags |= 1;
    null !== a && g ? (b.child = re(b, a.child, null, f), b.child = re(b, null, h, f)) : Q(a, b, h, f);
    b.memoizedState = d.state;
    e && qc(b, c, !0);
    return b.child;
  }

  function mg(a) {
    var b = a.stateNode;
    b.pendingContext ? mc(a, b.pendingContext, b.pendingContext !== b.context) : b.context && mc(a, b.context, !1);
    ye(a, b.containerInfo);
  }

  function ng(a, b, c, d, e) {
    ge();
    he(e);
    b.flags |= 256;
    Q(a, b, c, d);
    return b.child;
  }

  var og = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
  };

  function pg(a) {
    return {
      baseLanes: a,
      cachePool: null,
      transitions: null
    };
  }

  function qg(a, b) {
    return {
      baseLanes: a.baseLanes | b,
      cachePool: null,
      transitions: a.transitions
    };
  }

  function rg(a, b, c) {
    var d = b.pendingProps,
        e = I.current,
        f = !1,
        g = 0 !== (b.flags & 128),
        h;
    (h = g) || (h = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
    if (h) f = !0, b.flags &= -129;else if (null === a || null !== a.memoizedState) e |= 1;
    v(I, e & 1);

    if (null === a) {
      de(b);
      a = b.memoizedState;
      if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : Kb(a) ? b.lanes = 8 : b.lanes = 1073741824, null;
      e = d.children;
      a = d.fallback;
      return f ? (d = b.mode, f = b.child, e = {
        mode: "hidden",
        children: e
      }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = e) : f = sg(e, d, 0, null), a = qe(a, d, c, null), f["return"] = b, a["return"] = b, f.sibling = a, b.child = f, b.child.memoizedState = pg(c), b.memoizedState = og, a) : tg(b, e);
    }

    e = a.memoizedState;

    if (null !== e) {
      h = e.dehydrated;

      if (null !== h) {
        if (g) {
          if (b.flags & 256) return b.flags &= -257, ug(a, b, c, Error(n(422)));
          if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
          f = d.fallback;
          e = b.mode;
          d = sg({
            mode: "visible",
            children: d.children
          }, e, 0, null);
          f = qe(f, e, c, null);
          f.flags |= 2;
          d["return"] = b;
          f["return"] = b;
          d.sibling = f;
          b.child = d;
          0 !== (b.mode & 1) && re(b, a.child, null, c);
          b.child.memoizedState = pg(c);
          b.memoizedState = og;
          return f;
        }

        if (0 === (b.mode & 1)) b = ug(a, b, c, null);else if (Kb(h)) b = ug(a, b, c, Error(n(419)));else if (d = 0 !== (c & a.childLanes), F || d) {
          d = N;

          if (null !== d) {
            switch (c & -c) {
              case 4:
                f = 2;
                break;

              case 16:
                f = 8;
                break;

              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                f = 32;
                break;

              case 536870912:
                f = 268435456;
                break;

              default:
                f = 0;
            }

            d = 0 !== (f & (d.suspendedLanes | c)) ? 0 : f;
            0 !== d && d !== e.retryLane && (e.retryLane = d, Dd(a, d, -1));
          }

          Xf();
          b = ug(a, b, c, Error(n(421)));
        } else Jb(h) ? (b.flags |= 128, b.child = a.child, b = vg.bind(null, a), Lb(h, b), b = null) : (c = e.treeContext, Va && (Xd = Pb(h), Wd = b, H = !0, Zd = null, Yd = !1, null !== c && (Nd[Od++] = Qd, Nd[Od++] = Rd, Nd[Od++] = Pd, Qd = c.id, Rd = c.overflow, Pd = b)), b = tg(b, b.pendingProps.children), b.flags |= 4096);
        return b;
      }

      if (f) return d = wg(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? pg(c) : qg(e, c), f.childLanes = a.childLanes & ~c, b.memoizedState = og, d;
      c = xg(a, b, d.children, c);
      b.memoizedState = null;
      return c;
    }

    if (f) return d = wg(a, b, d.children, d.fallback, c), f = b.child, e = a.child.memoizedState, f.memoizedState = null === e ? pg(c) : qg(e, c), f.childLanes = a.childLanes & ~c, b.memoizedState = og, d;
    c = xg(a, b, d.children, c);
    b.memoizedState = null;
    return c;
  }

  function tg(a, b) {
    b = sg({
      mode: "visible",
      children: b
    }, a.mode, 0, null);
    b["return"] = a;
    return a.child = b;
  }

  function xg(a, b, c, d) {
    var e = a.child;
    a = e.sibling;
    c = me(e, {
      mode: "visible",
      children: c
    });
    0 === (b.mode & 1) && (c.lanes = d);
    c["return"] = b;
    c.sibling = null;
    null !== a && (d = b.deletions, null === d ? (b.deletions = [a], b.flags |= 16) : d.push(a));
    return b.child = c;
  }

  function wg(a, b, c, d, e) {
    var f = b.mode;
    a = a.child;
    var g = a.sibling,
        h = {
      mode: "hidden",
      children: c
    };
    0 === (f & 1) && b.child !== a ? (c = b.child, c.childLanes = 0, c.pendingProps = h, b.deletions = null) : (c = me(a, h), c.subtreeFlags = a.subtreeFlags & 14680064);
    null !== g ? d = me(g, d) : (d = qe(d, f, e, null), d.flags |= 2);
    d["return"] = b;
    c["return"] = b;
    c.sibling = d;
    b.child = c;
    return d;
  }

  function ug(a, b, c, d) {
    null !== d && he(d);
    re(b, a.child, null, c);
    a = tg(b, b.pendingProps.children);
    a.flags |= 2;
    b.memoizedState = null;
    return a;
  }

  function yg(a, b, c) {
    a.lanes |= b;
    var d = a.alternate;
    null !== d && (d.lanes |= b);
    ld(a["return"], b, c);
  }

  function zg(a, b, c, d, e) {
    var f = a.memoizedState;
    null === f ? a.memoizedState = {
      isBackwards: b,
      rendering: null,
      renderingStartTime: 0,
      last: d,
      tail: c,
      tailMode: e
    } : (f.isBackwards = b, f.rendering = null, f.renderingStartTime = 0, f.last = d, f.tail = c, f.tailMode = e);
  }

  function Ag(a, b, c) {
    var d = b.pendingProps,
        e = d.revealOrder,
        f = d.tail;
    Q(a, b, d.children, c);
    d = I.current;
    if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;else {
      if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a;) {
        if (13 === a.tag) null !== a.memoizedState && yg(a, c, b);else if (19 === a.tag) yg(a, c, b);else if (null !== a.child) {
          a.child["return"] = a;
          a = a.child;
          continue;
        }
        if (a === b) break a;

        for (; null === a.sibling;) {
          if (null === a["return"] || a["return"] === b) break a;
          a = a["return"];
        }

        a.sibling["return"] = a["return"];
        a = a.sibling;
      }
      d &= 1;
    }
    v(I, d);
    if (0 === (b.mode & 1)) b.memoizedState = null;else switch (e) {
      case "forwards":
        c = b.child;

        for (e = null; null !== c;) {
          a = c.alternate, null !== a && null === Ce(a) && (e = c), c = c.sibling;
        }

        c = e;
        null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        zg(b, !1, e, c, f);
        break;

      case "backwards":
        c = null;
        e = b.child;

        for (b.child = null; null !== e;) {
          a = e.alternate;

          if (null !== a && null === Ce(a)) {
            b.child = e;
            break;
          }

          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }

        zg(b, !0, c, null, f);
        break;

      case "together":
        zg(b, !1, null, null, void 0);
        break;

      default:
        b.memoizedState = null;
    }
    return b.child;
  }

  function cg(a, b, c) {
    null !== a && (b.dependencies = a.dependencies);
    yd |= b.lanes;
    if (0 === (c & b.childLanes)) return null;
    if (null !== a && b.child !== a.child) throw Error(n(153));

    if (null !== b.child) {
      a = b.child;
      c = me(a, a.pendingProps);
      b.child = c;

      for (c["return"] = b; null !== a.sibling;) {
        a = a.sibling, c = c.sibling = me(a, a.pendingProps), c["return"] = b;
      }

      c.sibling = null;
    }

    return b.child;
  }

  function Bg(a, b, c) {
    switch (b.tag) {
      case 3:
        mg(b);
        ge();
        break;

      case 5:
        Ae(b);
        break;

      case 1:
        A(b.type) && pc(b);
        break;

      case 4:
        ye(b, b.stateNode.containerInfo);
        break;

      case 10:
        jd(b, b.type._context, b.memoizedProps.value);
        break;

      case 13:
        var d = b.memoizedState;

        if (null !== d) {
          if (null !== d.dehydrated) return v(I, I.current & 1), b.flags |= 128, null;
          if (0 !== (c & b.child.childLanes)) return rg(a, b, c);
          v(I, I.current & 1);
          a = cg(a, b, c);
          return null !== a ? a.sibling : null;
        }

        v(I, I.current & 1);
        break;

      case 19:
        d = 0 !== (c & b.childLanes);

        if (0 !== (a.flags & 128)) {
          if (d) return Ag(a, b, c);
          b.flags |= 128;
        }

        var e = b.memoizedState;
        null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
        v(I, I.current);
        if (d) break;else return null;

      case 22:
      case 23:
        return b.lanes = 0, hg(a, b, c);
    }

    return cg(a, b, c);
  }

  function Cg(a, b) {
    Vd(b);

    switch (b.tag) {
      case 1:
        return A(b.type) && lc(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;

      case 3:
        return ze(), p(z), p(x), Ee(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;

      case 5:
        return Be(b), null;

      case 13:
        p(I);
        a = b.memoizedState;

        if (null !== a && null !== a.dehydrated) {
          if (null === b.alternate) throw Error(n(340));
          ge();
        }

        a = b.flags;
        return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;

      case 19:
        return p(I), null;

      case 4:
        return ze(), null;

      case 10:
        return kd(b.type._context), null;

      case 22:
      case 23:
        return Zf(), null;

      case 24:
        return null;

      default:
        return null;
    }
  }

  var Dg = !1,
      R = !1,
      Eg = "function" === typeof WeakSet ? WeakSet : Set,
      S = null;

  function Fg(a, b) {
    var c = a.ref;
    if (null !== c) if ("function" === typeof c) try {
      c(null);
    } catch (d) {
      T(a, b, d);
    } else c.current = null;
  }

  function Gg(a, b, c) {
    try {
      c();
    } catch (d) {
      T(a, b, d);
    }
  }

  var Hg = !1;

  function Ig(a, b) {
    Ha(a.containerInfo);

    for (S = b; null !== S;) {
      if (a = S, b = a.child, 0 !== (a.subtreeFlags & 1028) && null !== b) b["return"] = a, S = b;else for (; null !== S;) {
        a = S;

        try {
          var c = a.alternate;
          if (0 !== (a.flags & 1024)) switch (a.tag) {
            case 0:
            case 11:
            case 15:
              break;

            case 1:
              if (null !== c) {
                var d = c.memoizedProps,
                    e = c.memoizedState,
                    f = a.stateNode,
                    g = f.getSnapshotBeforeUpdate(a.elementType === a.type ? d : dd(a.type, d), e);
                f.__reactInternalSnapshotBeforeUpdate = g;
              }

              break;

            case 3:
              Ta && xb(a.stateNode.containerInfo);
              break;

            case 5:
            case 6:
            case 4:
            case 17:
              break;

            default:
              throw Error(n(163));
          }
        } catch (h) {
          T(a, a["return"], h);
        }

        b = a.sibling;

        if (null !== b) {
          b["return"] = a["return"];
          S = b;
          break;
        }

        S = a["return"];
      }
    }

    c = Hg;
    Hg = !1;
    return c;
  }

  function Jg(a, b, c) {
    var d = b.updateQueue;
    d = null !== d ? d.lastEffect : null;

    if (null !== d) {
      var e = d = d.next;

      do {
        if ((e.tag & a) === a) {
          var f = e.destroy;
          e.destroy = void 0;
          void 0 !== f && Gg(b, c, f);
        }

        e = e.next;
      } while (e !== d);
    }
  }

  function Kg(a, b) {
    b = b.updateQueue;
    b = null !== b ? b.lastEffect : null;

    if (null !== b) {
      var c = b = b.next;

      do {
        if ((c.tag & a) === a) {
          var d = c.create;
          c.destroy = d();
        }

        c = c.next;
      } while (c !== b);
    }
  }

  function Lg(a) {
    var b = a.ref;

    if (null !== b) {
      var c = a.stateNode;

      switch (a.tag) {
        case 5:
          a = Ea(c);
          break;

        default:
          a = c;
      }

      "function" === typeof b ? b(a) : b.current = a;
    }
  }

  function Mg(a) {
    var b = a.alternate;
    null !== b && (a.alternate = null, Mg(b));
    a.child = null;
    a.deletions = null;
    a.sibling = null;
    5 === a.tag && (b = a.stateNode, null !== b && Za(b));
    a.stateNode = null;
    a["return"] = null;
    a.dependencies = null;
    a.memoizedProps = null;
    a.memoizedState = null;
    a.pendingProps = null;
    a.stateNode = null;
    a.updateQueue = null;
  }

  function Ng(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
  }

  function Og(a) {
    a: for (;;) {
      for (; null === a.sibling;) {
        if (null === a["return"] || Ng(a["return"])) return null;
        a = a["return"];
      }

      a.sibling["return"] = a["return"];

      for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag;) {
        if (a.flags & 2) continue a;
        if (null === a.child || 4 === a.tag) continue a;else a.child["return"] = a, a = a.child;
      }

      if (!(a.flags & 2)) return a.stateNode;
    }
  }

  function Pg(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d) a = a.stateNode, b ? pb(c, a, b) : kb(c, a);else if (4 !== d && (a = a.child, null !== a)) for (Pg(a, b, c), a = a.sibling; null !== a;) {
      Pg(a, b, c), a = a.sibling;
    }
  }

  function Qg(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d) a = a.stateNode, b ? ob(c, a, b) : jb(c, a);else if (4 !== d && (a = a.child, null !== a)) for (Qg(a, b, c), a = a.sibling; null !== a;) {
      Qg(a, b, c), a = a.sibling;
    }
  }

  var U = null,
      Rg = !1;

  function Sg(a, b, c) {
    for (c = c.child; null !== c;) {
      Tg(a, b, c), c = c.sibling;
    }
  }

  function Tg(a, b, c) {
    if (Rc && "function" === typeof Rc.onCommitFiberUnmount) try {
      Rc.onCommitFiberUnmount(Qc, c);
    } catch (h) {}

    switch (c.tag) {
      case 5:
        R || Fg(c, b);

      case 6:
        if (Ta) {
          var d = U,
              e = Rg;
          U = null;
          Sg(a, b, c);
          U = d;
          Rg = e;
          null !== U && (Rg ? rb(U, c.stateNode) : qb(U, c.stateNode));
        } else Sg(a, b, c);

        break;

      case 18:
        Ta && null !== U && (Rg ? Xb(U, c.stateNode) : Wb(U, c.stateNode));
        break;

      case 4:
        Ta ? (d = U, e = Rg, U = c.stateNode.containerInfo, Rg = !0, Sg(a, b, c), U = d, Rg = e) : (Ua && (d = c.stateNode.containerInfo, e = zb(d), Cb(d, e)), Sg(a, b, c));
        break;

      case 0:
      case 11:
      case 14:
      case 15:
        if (!R && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
          e = d = d.next;

          do {
            var f = e,
                g = f.destroy;
            f = f.tag;
            void 0 !== g && (0 !== (f & 2) ? Gg(c, b, g) : 0 !== (f & 4) && Gg(c, b, g));
            e = e.next;
          } while (e !== d);
        }

        Sg(a, b, c);
        break;

      case 1:
        if (!R && (Fg(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
          d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
        } catch (h) {
          T(c, b, h);
        }
        Sg(a, b, c);
        break;

      case 21:
        Sg(a, b, c);
        break;

      case 22:
        c.mode & 1 ? (R = (d = R) || null !== c.memoizedState, Sg(a, b, c), R = d) : Sg(a, b, c);
        break;

      default:
        Sg(a, b, c);
    }
  }

  function Ug(a) {
    var b = a.updateQueue;

    if (null !== b) {
      a.updateQueue = null;
      var c = a.stateNode;
      null === c && (c = a.stateNode = new Eg());
      b.forEach(function (b) {
        var d = Vg.bind(null, a, b);
        c.has(b) || (c.add(b), b.then(d, d));
      });
    }
  }

  function Wg(a, b) {
    var c = b.deletions;
    if (null !== c) for (var d = 0; d < c.length; d++) {
      var e = c[d];

      try {
        var f = a,
            g = b;

        if (Ta) {
          var h = g;

          a: for (; null !== h;) {
            switch (h.tag) {
              case 5:
                U = h.stateNode;
                Rg = !1;
                break a;

              case 3:
                U = h.stateNode.containerInfo;
                Rg = !0;
                break a;

              case 4:
                U = h.stateNode.containerInfo;
                Rg = !0;
                break a;
            }

            h = h["return"];
          }

          if (null === U) throw Error(n(160));
          Tg(f, g, e);
          U = null;
          Rg = !1;
        } else Tg(f, g, e);

        var k = e.alternate;
        null !== k && (k["return"] = null);
        e["return"] = null;
      } catch (l) {
        T(e, b, l);
      }
    }
    if (b.subtreeFlags & 12854) for (b = b.child; null !== b;) {
      Xg(b, a), b = b.sibling;
    }
  }

  function Xg(a, b) {
    var c = a.alternate,
        d = a.flags;

    switch (a.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Wg(b, a);
        Yg(a);

        if (d & 4) {
          try {
            Jg(3, a, a["return"]), Kg(3, a);
          } catch (k) {
            T(a, a["return"], k);
          }

          try {
            Jg(5, a, a["return"]);
          } catch (k) {
            T(a, a["return"], k);
          }
        }

        break;

      case 1:
        Wg(b, a);
        Yg(a);
        d & 512 && null !== c && Fg(c, c["return"]);
        break;

      case 5:
        Wg(b, a);
        Yg(a);
        d & 512 && null !== c && Fg(c, c["return"]);

        if (Ta) {
          if (a.flags & 32) {
            var e = a.stateNode;

            try {
              sb(e);
            } catch (k) {
              T(a, a["return"], k);
            }
          }

          if (d & 4 && (e = a.stateNode, null != e)) {
            var f = a.memoizedProps;
            c = null !== c ? c.memoizedProps : f;
            d = a.type;
            b = a.updateQueue;
            a.updateQueue = null;
            if (null !== b) try {
              nb(e, b, d, c, f, a);
            } catch (k) {
              T(a, a["return"], k);
            }
          }
        }

        break;

      case 6:
        Wg(b, a);
        Yg(a);

        if (d & 4 && Ta) {
          if (null === a.stateNode) throw Error(n(162));
          e = a.stateNode;
          f = a.memoizedProps;
          c = null !== c ? c.memoizedProps : f;

          try {
            lb(e, c, f);
          } catch (k) {
            T(a, a["return"], k);
          }
        }

        break;

      case 3:
        Wg(b, a);
        Yg(a);

        if (d & 4) {
          if (Ta && Va && null !== c && c.memoizedState.isDehydrated) try {
            Ub(b.containerInfo);
          } catch (k) {
            T(a, a["return"], k);
          }

          if (Ua) {
            c = b.containerInfo;
            e = b.pendingChildren;

            try {
              Cb(c, e);
            } catch (k) {
              T(a, a["return"], k);
            }
          }
        }

        break;

      case 4:
        Wg(b, a);
        Yg(a);

        if (d & 4 && Ua) {
          e = a.stateNode;
          c = e.containerInfo;
          e = e.pendingChildren;

          try {
            Cb(c, e);
          } catch (k) {
            T(a, a["return"], k);
          }
        }

        break;

      case 13:
        Wg(b, a);
        Yg(a);
        c = a.child;
        c.flags & 8192 && null !== c.memoizedState && (null === c.alternate || null === c.alternate.memoizedState) && (Zg = D());
        d & 4 && Ug(a);
        break;

      case 22:
        c = null !== c && null !== c.memoizedState;

        if (a.mode & 1) {
          var g = R;
          R = g || c;
          Wg(b, a);
          R = g;
        } else Wg(b, a);

        Yg(a);

        if (d & 8192) {
          d = null !== a.memoizedState;
          if (Ta) a: if (b = null, Ta) for (g = a;;) {
            if (5 === g.tag) {
              if (null === b) {
                b = g;

                try {
                  e = g.stateNode, d ? tb(e) : vb(g.stateNode, g.memoizedProps);
                } catch (k) {
                  T(a, a["return"], k);
                }
              }
            } else if (6 === g.tag) {
              if (null === b) try {
                f = g.stateNode, d ? ub(f) : wb(f, g.memoizedProps);
              } catch (k) {
                T(a, a["return"], k);
              }
            } else if ((22 !== g.tag && 23 !== g.tag || null === g.memoizedState || g === a) && null !== g.child) {
              g.child["return"] = g;
              g = g.child;
              continue;
            }

            if (g === a) break a;

            for (; null === g.sibling;) {
              if (null === g["return"] || g["return"] === a) break a;
              b === g && (b = null);
              g = g["return"];
            }

            b === g && (b = null);
            g.sibling["return"] = g["return"];
            g = g.sibling;
          }
          if (d && !c && 0 !== (a.mode & 1)) for (S = a, a = a.child; null !== a;) {
            for (c = S = a; null !== S;) {
              e = S;
              f = e.child;

              switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Jg(4, e, e["return"]);
                  break;

                case 1:
                  Fg(e, e["return"]);
                  var h = e.stateNode;

                  if ("function" === typeof h.componentWillUnmount) {
                    d = e;
                    b = e["return"];

                    try {
                      g = d, h.props = g.memoizedProps, h.state = g.memoizedState, h.componentWillUnmount();
                    } catch (k) {
                      T(d, b, k);
                    }
                  }

                  break;

                case 5:
                  Fg(e, e["return"]);
                  break;

                case 22:
                  if (null !== e.memoizedState) {
                    $g(c);
                    continue;
                  }

              }

              null !== f ? (f["return"] = e, S = f) : $g(c);
            }

            a = a.sibling;
          }
        }

        break;

      case 19:
        Wg(b, a);
        Yg(a);
        d & 4 && Ug(a);
        break;

      case 21:
        break;

      default:
        Wg(b, a), Yg(a);
    }
  }

  function Yg(a) {
    var b = a.flags;

    if (b & 2) {
      try {
        if (Ta) {
          b: {
            for (var c = a["return"]; null !== c;) {
              if (Ng(c)) {
                var d = c;
                break b;
              }

              c = c["return"];
            }

            throw Error(n(160));
          }

          switch (d.tag) {
            case 5:
              var e = d.stateNode;
              d.flags & 32 && (sb(e), d.flags &= -33);
              var f = Og(a);
              Qg(a, f, e);
              break;

            case 3:
            case 4:
              var g = d.stateNode.containerInfo,
                  h = Og(a);
              Pg(a, h, g);
              break;

            default:
              throw Error(n(161));
          }
        }
      } catch (k) {
        T(a, a["return"], k);
      }

      a.flags &= -3;
    }

    b & 4096 && (a.flags &= -4097);
  }

  function ah(a, b, c) {
    S = a;
    bh(a, b, c);
  }

  function bh(a, b, c) {
    for (var d = 0 !== (a.mode & 1); null !== S;) {
      var e = S,
          f = e.child;

      if (22 === e.tag && d) {
        var g = null !== e.memoizedState || Dg;

        if (!g) {
          var h = e.alternate,
              k = null !== h && null !== h.memoizedState || R;
          h = Dg;
          var l = R;
          Dg = g;
          if ((R = k) && !l) for (S = e; null !== S;) {
            g = S, k = g.child, 22 === g.tag && null !== g.memoizedState ? ch(e) : null !== k ? (k["return"] = g, S = k) : ch(e);
          }

          for (; null !== f;) {
            S = f, bh(f, b, c), f = f.sibling;
          }

          S = e;
          Dg = h;
          R = l;
        }

        dh(a, b, c);
      } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f["return"] = e, S = f) : dh(a, b, c);
    }
  }

  function dh(a) {
    for (; null !== S;) {
      var b = S;

      if (0 !== (b.flags & 8772)) {
        var c = b.alternate;

        try {
          if (0 !== (b.flags & 8772)) switch (b.tag) {
            case 0:
            case 11:
            case 15:
              R || Kg(5, b);
              break;

            case 1:
              var d = b.stateNode;
              if (b.flags & 4 && !R) if (null === c) d.componentDidMount();else {
                var e = b.elementType === b.type ? c.memoizedProps : dd(b.type, c.memoizedProps);
                d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
              }
              var f = b.updateQueue;
              null !== f && zd(b, f, d);
              break;

            case 3:
              var g = b.updateQueue;

              if (null !== g) {
                c = null;
                if (null !== b.child) switch (b.child.tag) {
                  case 5:
                    c = Ea(b.child.stateNode);
                    break;

                  case 1:
                    c = b.child.stateNode;
                }
                zd(b, g, c);
              }

              break;

            case 5:
              var h = b.stateNode;
              null === c && b.flags & 4 && mb(h, b.type, b.memoizedProps, b);
              break;

            case 6:
              break;

            case 4:
              break;

            case 12:
              break;

            case 13:
              if (Va && null === b.memoizedState) {
                var k = b.alternate;

                if (null !== k) {
                  var l = k.memoizedState;

                  if (null !== l) {
                    var m = l.dehydrated;
                    null !== m && Vb(m);
                  }
                }
              }

              break;

            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
              break;

            default:
              throw Error(n(163));
          }
          R || b.flags & 512 && Lg(b);
        } catch (r) {
          T(b, b["return"], r);
        }
      }

      if (b === a) {
        S = null;
        break;
      }

      c = b.sibling;

      if (null !== c) {
        c["return"] = b["return"];
        S = c;
        break;
      }

      S = b["return"];
    }
  }

  function $g(a) {
    for (; null !== S;) {
      var b = S;

      if (b === a) {
        S = null;
        break;
      }

      var c = b.sibling;

      if (null !== c) {
        c["return"] = b["return"];
        S = c;
        break;
      }

      S = b["return"];
    }
  }

  function ch(a) {
    for (; null !== S;) {
      var b = S;

      try {
        switch (b.tag) {
          case 0:
          case 11:
          case 15:
            var c = b["return"];

            try {
              Kg(4, b);
            } catch (k) {
              T(b, c, k);
            }

            break;

          case 1:
            var d = b.stateNode;

            if ("function" === typeof d.componentDidMount) {
              var e = b["return"];

              try {
                d.componentDidMount();
              } catch (k) {
                T(b, e, k);
              }
            }

            var f = b["return"];

            try {
              Lg(b);
            } catch (k) {
              T(b, f, k);
            }

            break;

          case 5:
            var g = b["return"];

            try {
              Lg(b);
            } catch (k) {
              T(b, g, k);
            }

        }
      } catch (k) {
        T(b, b["return"], k);
      }

      if (b === a) {
        S = null;
        break;
      }

      var h = b.sibling;

      if (null !== h) {
        h["return"] = b["return"];
        S = h;
        break;
      }

      S = b["return"];
    }
  }

  var eh = 0,
      fh = 1,
      gh = 2,
      hh = 3,
      ih = 4;

  if ("function" === typeof Symbol && Symbol["for"]) {
    var jh = Symbol["for"];
    eh = jh("selector.component");
    fh = jh("selector.has_pseudo_class");
    gh = jh("selector.role");
    hh = jh("selector.test_id");
    ih = jh("selector.text");
  }

  function kh(a) {
    var b = Wa(a);

    if (null != b) {
      if ("string" !== typeof b.memoizedProps["data-testname"]) throw Error(n(364));
      return b;
    }

    a = cb(a);
    if (null === a) throw Error(n(362));
    return a.stateNode.current;
  }

  function lh(a, b) {
    switch (b.$$typeof) {
      case eh:
        if (a.type === b.value) return !0;
        break;

      case fh:
        a: {
          b = b.value;
          a = [a, 0];

          for (var c = 0; c < a.length;) {
            var d = a[c++],
                e = a[c++],
                f = b[e];

            if (5 !== d.tag || !fb(d)) {
              for (; null != f && lh(d, f);) {
                e++, f = b[e];
              }

              if (e === b.length) {
                b = !0;
                break a;
              } else for (d = d.child; null !== d;) {
                a.push(d, e), d = d.sibling;
              }
            }
          }

          b = !1;
        }

        return b;

      case gh:
        if (5 === a.tag && gb(a.stateNode, b.value)) return !0;
        break;

      case ih:
        if (5 === a.tag || 6 === a.tag) if (a = eb(a), null !== a && 0 <= a.indexOf(b.value)) return !0;
        break;

      case hh:
        if (5 === a.tag && (a = a.memoizedProps["data-testname"], "string" === typeof a && a.toLowerCase() === b.value.toLowerCase())) return !0;
        break;

      default:
        throw Error(n(365));
    }

    return !1;
  }

  function mh(a) {
    switch (a.$$typeof) {
      case eh:
        return "<" + (ua(a.value) || "Unknown") + ">";

      case fh:
        return ":has(" + (mh(a) || "") + ")";

      case gh:
        return '[role="' + a.value + '"]';

      case ih:
        return '"' + a.value + '"';

      case hh:
        return '[data-testname="' + a.value + '"]';

      default:
        throw Error(n(365));
    }
  }

  function nh(a, b) {
    var c = [];
    a = [a, 0];

    for (var d = 0; d < a.length;) {
      var e = a[d++],
          f = a[d++],
          g = b[f];

      if (5 !== e.tag || !fb(e)) {
        for (; null != g && lh(e, g);) {
          f++, g = b[f];
        }

        if (f === b.length) c.push(e);else for (e = e.child; null !== e;) {
          a.push(e, f), e = e.sibling;
        }
      }
    }

    return c;
  }

  function oh(a, b) {
    if (!bb) throw Error(n(363));
    a = kh(a);
    a = nh(a, b);
    b = [];
    a = Array.from(a);

    for (var c = 0; c < a.length;) {
      var d = a[c++];
      if (5 === d.tag) fb(d) || b.push(d.stateNode);else for (d = d.child; null !== d;) {
        a.push(d), d = d.sibling;
      }
    }

    return b;
  }

  var ph = Math.ceil,
      qh = da.ReactCurrentDispatcher,
      rh = da.ReactCurrentOwner,
      V = da.ReactCurrentBatchConfig,
      W = 0,
      N = null,
      X = null,
      Y = 0,
      $f = 0,
      ig = hc(0),
      P = 0,
      sh = null,
      yd = 0,
      th = 0,
      uh = 0,
      vh = null,
      wh = null,
      Zg = 0,
      Yf = Infinity,
      xh = null;

  function yh() {
    Yf = D() + 500;
  }

  var Ff = !1,
      Gf = null,
      If = null,
      zh = !1,
      Ah = null,
      Bh = 0,
      Ch = 0,
      Dh = null,
      Eh = -1,
      Fh = 0;

  function G() {
    return 0 !== (W & 6) ? D() : -1 !== Eh ? Eh : Eh = D();
  }

  function Cd(a) {
    if (0 === (a.mode & 1)) return 1;
    if (0 !== (W & 2) && 0 !== Y) return Y & -Y;
    if (null !== ad.transition) return 0 === Fh && (Fh = Cc()), Fh;
    a = C;
    return 0 !== a ? a : Ya();
  }

  function Dd(a, b, c) {
    if (50 < Ch) throw Ch = 0, Dh = null, Error(n(185));
    var d = Gh(a, b);
    if (null === d) return null;
    Ec(d, b, c);
    if (0 === (W & 2) || d !== N) d === N && (0 === (W & 2) && (th |= b), 4 === P && Hh(d, Y)), Ih(d, c), 1 === b && 0 === W && 0 === (a.mode & 1) && (yh(), Wc && $c());
    return d;
  }

  function Gh(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    null !== c && (c.lanes |= b);
    c = a;

    for (a = a["return"]; null !== a;) {
      a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a["return"];
    }

    return 3 === c.tag ? c.stateNode : null;
  }

  function ud(a) {
    return (null !== N || null !== od) && 0 !== (a.mode & 1) && 0 === (W & 2);
  }

  function Ih(a, b) {
    var c = a.callbackNode;
    Ac(a, b);
    var d = yc(a, a === N ? Y : 0);
    if (0 === d) null !== c && Jc(c), a.callbackNode = null, a.callbackPriority = 0;else if (b = d & -d, a.callbackPriority !== b) {
      null != c && Jc(c);
      if (1 === b) 0 === a.tag ? Zc(Jh.bind(null, a)) : Yc(Jh.bind(null, a)), $a ? ab(function () {
        0 === W && $c();
      }) : Ic(Mc, $c), c = null;else {
        switch (Hc(d)) {
          case 1:
            c = Mc;
            break;

          case 4:
            c = Nc;
            break;

          case 16:
            c = Oc;
            break;

          case 536870912:
            c = Pc;
            break;

          default:
            c = Oc;
        }

        c = Kh(c, Lh.bind(null, a));
      }
      a.callbackPriority = b;
      a.callbackNode = c;
    }
  }

  function Lh(a, b) {
    Eh = -1;
    Fh = 0;
    if (0 !== (W & 6)) throw Error(n(327));
    var c = a.callbackNode;
    if (Mh() && a.callbackNode !== c) return null;
    var d = yc(a, a === N ? Y : 0);
    if (0 === d) return null;
    if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Nh(a, d);else {
      b = d;
      var e = W;
      W |= 2;
      var f = Oh();
      if (N !== a || Y !== b) xh = null, yh(), Ph(a, b);

      do {
        try {
          Qh();
          break;
        } catch (h) {
          Rh(a, h);
        }
      } while (1);

      id();
      qh.current = f;
      W = e;
      null !== X ? b = 0 : (N = null, Y = 0, b = P);
    }

    if (0 !== b) {
      2 === b && (e = Bc(a), 0 !== e && (d = e, b = Sh(a, e)));
      if (1 === b) throw c = sh, Ph(a, 0), Hh(a, d), Ih(a, D()), c;
      if (6 === b) Hh(a, d);else {
        e = a.current.alternate;
        if (0 === (d & 30) && !Th(e) && (b = Nh(a, d), 2 === b && (f = Bc(a), 0 !== f && (d = f, b = Sh(a, f))), 1 === b)) throw c = sh, Ph(a, 0), Hh(a, d), Ih(a, D()), c;
        a.finishedWork = e;
        a.finishedLanes = d;

        switch (b) {
          case 0:
          case 1:
            throw Error(n(345));

          case 2:
            Uh(a, wh, xh);
            break;

          case 3:
            Hh(a, d);

            if ((d & 130023424) === d && (b = Zg + 500 - D(), 10 < b)) {
              if (0 !== yc(a, 0)) break;
              e = a.suspendedLanes;

              if ((e & d) !== d) {
                G();
                a.pingedLanes |= a.suspendedLanes & e;
                break;
              }

              a.timeoutHandle = Pa(Uh.bind(null, a, wh, xh), b);
              break;
            }

            Uh(a, wh, xh);
            break;

          case 4:
            Hh(a, d);
            if ((d & 4194240) === d) break;
            b = a.eventTimes;

            for (e = -1; 0 < d;) {
              var g = 31 - sc(d);
              f = 1 << g;
              g = b[g];
              g > e && (e = g);
              d &= ~f;
            }

            d = e;
            d = D() - d;
            d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3E3 > d ? 3E3 : 4320 > d ? 4320 : 1960 * ph(d / 1960)) - d;

            if (10 < d) {
              a.timeoutHandle = Pa(Uh.bind(null, a, wh, xh), d);
              break;
            }

            Uh(a, wh, xh);
            break;

          case 5:
            Uh(a, wh, xh);
            break;

          default:
            throw Error(n(329));
        }
      }
    }

    Ih(a, D());
    return a.callbackNode === c ? Lh.bind(null, a) : null;
  }

  function Sh(a, b) {
    var c = vh;
    a.current.memoizedState.isDehydrated && (Ph(a, b).flags |= 256);
    a = Nh(a, b);
    2 !== a && (b = wh, wh = c, null !== b && Wf(b));
    return a;
  }

  function Wf(a) {
    null === wh ? wh = a : wh.push.apply(wh, a);
  }

  function Th(a) {
    for (var b = a;;) {
      if (b.flags & 16384) {
        var c = b.updateQueue;
        if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
          var e = c[d],
              f = e.getSnapshot;
          e = e.value;

          try {
            if (!Uc(f(), e)) return !1;
          } catch (g) {
            return !1;
          }
        }
      }

      c = b.child;
      if (b.subtreeFlags & 16384 && null !== c) c["return"] = b, b = c;else {
        if (b === a) break;

        for (; null === b.sibling;) {
          if (null === b["return"] || b["return"] === a) return !0;
          b = b["return"];
        }

        b.sibling["return"] = b["return"];
        b = b.sibling;
      }
    }

    return !0;
  }

  function Hh(a, b) {
    b &= ~uh;
    b &= ~th;
    a.suspendedLanes |= b;
    a.pingedLanes &= ~b;

    for (a = a.expirationTimes; 0 < b;) {
      var c = 31 - sc(b),
          d = 1 << c;
      a[c] = -1;
      b &= ~d;
    }
  }

  function Jh(a) {
    if (0 !== (W & 6)) throw Error(n(327));
    Mh();
    var b = yc(a, 0);
    if (0 === (b & 1)) return Ih(a, D()), null;
    var c = Nh(a, b);

    if (0 !== a.tag && 2 === c) {
      var d = Bc(a);
      0 !== d && (b = d, c = Sh(a, d));
    }

    if (1 === c) throw c = sh, Ph(a, 0), Hh(a, b), Ih(a, D()), c;
    if (6 === c) throw Error(n(345));
    a.finishedWork = a.current.alternate;
    a.finishedLanes = b;
    Uh(a, wh, xh);
    Ih(a, D());
    return null;
  }

  function Vh(a) {
    null !== Ah && 0 === Ah.tag && 0 === (W & 6) && Mh();
    var b = W;
    W |= 1;
    var c = V.transition,
        d = C;

    try {
      if (V.transition = null, C = 1, a) return a();
    } finally {
      C = d, V.transition = c, W = b, 0 === (W & 6) && $c();
    }
  }

  function Zf() {
    $f = ig.current;
    p(ig);
  }

  function Ph(a, b) {
    a.finishedWork = null;
    a.finishedLanes = 0;
    var c = a.timeoutHandle;
    c !== Ra && (a.timeoutHandle = Ra, Qa(c));
    if (null !== X) for (c = X["return"]; null !== c;) {
      var d = c;
      Vd(d);

      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          null !== d && void 0 !== d && lc();
          break;

        case 3:
          ze();
          p(z);
          p(x);
          Ee();
          break;

        case 5:
          Be(d);
          break;

        case 4:
          ze();
          break;

        case 13:
          p(I);
          break;

        case 19:
          p(I);
          break;

        case 10:
          kd(d.type._context);
          break;

        case 22:
        case 23:
          Zf();
      }

      c = c["return"];
    }
    N = a;
    X = a = me(a.current, null);
    Y = $f = b;
    P = 0;
    sh = null;
    uh = th = yd = 0;
    wh = vh = null;

    if (null !== od) {
      for (b = 0; b < od.length; b++) {
        if (c = od[b], d = c.interleaved, null !== d) {
          c.interleaved = null;
          var e = d.next,
              f = c.pending;

          if (null !== f) {
            var g = f.next;
            f.next = e;
            d.next = g;
          }

          c.pending = d;
        }
      }

      od = null;
    }

    return a;
  }

  function Rh(a, b) {
    do {
      var c = X;

      try {
        id();
        Fe.current = Re;

        if (Ie) {
          for (var d = J.memoizedState; null !== d;) {
            var e = d.queue;
            null !== e && (e.pending = null);
            d = d.next;
          }

          Ie = !1;
        }

        He = 0;
        L = K = J = null;
        Je = !1;
        Ke = 0;
        rh.current = null;

        if (null === c || null === c["return"]) {
          P = 1;
          sh = b;
          X = null;
          break;
        }

        a: {
          var f = a,
              g = c["return"],
              h = c,
              k = b;
          b = Y;
          h.flags |= 32768;

          if (null !== k && "object" === typeof k && "function" === typeof k.then) {
            var l = k,
                m = h,
                r = m.tag;

            if (0 === (m.mode & 1) && (0 === r || 11 === r || 15 === r)) {
              var q = m.alternate;
              q ? (m.updateQueue = q.updateQueue, m.memoizedState = q.memoizedState, m.lanes = q.lanes) : (m.updateQueue = null, m.memoizedState = null);
            }

            var B = Lf(g);

            if (null !== B) {
              B.flags &= -257;
              Mf(B, g, h, f, b);
              B.mode & 1 && Jf(f, l, b);
              b = B;
              k = l;
              var w = b.updateQueue;

              if (null === w) {
                var Z = new Set();
                Z.add(k);
                b.updateQueue = Z;
              } else w.add(k);

              break a;
            } else {
              if (0 === (b & 1)) {
                Jf(f, l, b);
                Xf();
                break a;
              }

              k = Error(n(426));
            }
          } else if (H && h.mode & 1) {
            var za = Lf(g);

            if (null !== za) {
              0 === (za.flags & 65536) && (za.flags |= 256);
              Mf(za, g, h, f, b);
              he(k);
              break a;
            }
          }

          f = k;
          4 !== P && (P = 2);
          null === vh ? vh = [f] : vh.push(f);
          k = Bf(k, h);
          h = g;

          do {
            switch (h.tag) {
              case 3:
                h.flags |= 65536;
                b &= -b;
                h.lanes |= b;
                var E = Ef(h, k, b);
                wd(h, E);
                break a;

              case 1:
                f = k;
                var u = h.type,
                    t = h.stateNode;

                if (0 === (h.flags & 128) && ("function" === typeof u.getDerivedStateFromError || null !== t && "function" === typeof t.componentDidCatch && (null === If || !If.has(t)))) {
                  h.flags |= 65536;
                  b &= -b;
                  h.lanes |= b;
                  var Db = Hf(h, f, b);
                  wd(h, Db);
                  break a;
                }

            }

            h = h["return"];
          } while (null !== h);
        }

        Wh(c);
      } catch (oc) {
        b = oc;
        X === c && null !== c && (X = c = c["return"]);
        continue;
      }

      break;
    } while (1);
  }

  function Oh() {
    var a = qh.current;
    qh.current = Re;
    return null === a ? Re : a;
  }

  function Xf() {
    if (0 === P || 3 === P || 2 === P) P = 4;
    null === N || 0 === (yd & 268435455) && 0 === (th & 268435455) || Hh(N, Y);
  }

  function Nh(a, b) {
    var c = W;
    W |= 2;
    var d = Oh();
    if (N !== a || Y !== b) xh = null, Ph(a, b);

    do {
      try {
        Xh();
        break;
      } catch (e) {
        Rh(a, e);
      }
    } while (1);

    id();
    W = c;
    qh.current = d;
    if (null !== X) throw Error(n(261));
    N = null;
    Y = 0;
    return P;
  }

  function Xh() {
    for (; null !== X;) {
      Yh(X);
    }
  }

  function Qh() {
    for (; null !== X && !Kc();) {
      Yh(X);
    }
  }

  function Yh(a) {
    var b = Zh(a.alternate, a, $f);
    a.memoizedProps = a.pendingProps;
    null === b ? Wh(a) : X = b;
    rh.current = null;
  }

  function Wh(a) {
    var b = a;

    do {
      var c = b.alternate;
      a = b["return"];

      if (0 === (b.flags & 32768)) {
        if (c = Vf(c, b, $f), null !== c) {
          X = c;
          return;
        }
      } else {
        c = Cg(c, b);

        if (null !== c) {
          c.flags &= 32767;
          X = c;
          return;
        }

        if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;else {
          P = 6;
          X = null;
          return;
        }
      }

      b = b.sibling;

      if (null !== b) {
        X = b;
        return;
      }

      X = b = a;
    } while (null !== b);

    0 === P && (P = 5);
  }

  function Uh(a, b, c) {
    var d = C,
        e = V.transition;

    try {
      V.transition = null, C = 1, $h(a, b, c, d);
    } finally {
      V.transition = e, C = d;
    }

    return null;
  }

  function $h(a, b, c, d) {
    do {
      Mh();
    } while (null !== Ah);

    if (0 !== (W & 6)) throw Error(n(327));
    c = a.finishedWork;
    var e = a.finishedLanes;
    if (null === c) return null;
    a.finishedWork = null;
    a.finishedLanes = 0;
    if (c === a.current) throw Error(n(177));
    a.callbackNode = null;
    a.callbackPriority = 0;
    var f = c.lanes | c.childLanes;
    Fc(a, f);
    a === N && (X = N = null, Y = 0);
    0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || zh || (zh = !0, Kh(Oc, function () {
      Mh();
      return null;
    }));
    f = 0 !== (c.flags & 15990);

    if (0 !== (c.subtreeFlags & 15990) || f) {
      f = V.transition;
      V.transition = null;
      var g = C;
      C = 1;
      var h = W;
      W |= 4;
      rh.current = null;
      Ig(a, c);
      Xg(c, a);
      Ia(a.containerInfo);
      a.current = c;
      ah(c, a, e);
      Lc();
      W = h;
      C = g;
      V.transition = f;
    } else a.current = c;

    zh && (zh = !1, Ah = a, Bh = e);
    f = a.pendingLanes;
    0 === f && (If = null);
    Sc(c.stateNode, d);
    Ih(a, D());
    if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) {
      d(b[c]);
    }
    if (Ff) throw Ff = !1, a = Gf, Gf = null, a;
    0 !== (Bh & 1) && 0 !== a.tag && Mh();
    f = a.pendingLanes;
    0 !== (f & 1) ? a === Dh ? Ch++ : (Ch = 0, Dh = a) : Ch = 0;
    $c();
    return null;
  }

  function Mh() {
    if (null !== Ah) {
      var a = Hc(Bh),
          b = V.transition,
          c = C;

      try {
        V.transition = null;
        C = 16 > a ? 16 : a;
        if (null === Ah) var d = !1;else {
          a = Ah;
          Ah = null;
          Bh = 0;
          if (0 !== (W & 6)) throw Error(n(331));
          var e = W;
          W |= 4;

          for (S = a.current; null !== S;) {
            var f = S,
                g = f.child;

            if (0 !== (S.flags & 16)) {
              var h = f.deletions;

              if (null !== h) {
                for (var k = 0; k < h.length; k++) {
                  var l = h[k];

                  for (S = l; null !== S;) {
                    var m = S;

                    switch (m.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Jg(8, m, f);
                    }

                    var r = m.child;
                    if (null !== r) r["return"] = m, S = r;else for (; null !== S;) {
                      m = S;
                      var q = m.sibling,
                          B = m["return"];
                      Mg(m);

                      if (m === l) {
                        S = null;
                        break;
                      }

                      if (null !== q) {
                        q["return"] = B;
                        S = q;
                        break;
                      }

                      S = B;
                    }
                  }
                }

                var w = f.alternate;

                if (null !== w) {
                  var Z = w.child;

                  if (null !== Z) {
                    w.child = null;

                    do {
                      var za = Z.sibling;
                      Z.sibling = null;
                      Z = za;
                    } while (null !== Z);
                  }
                }

                S = f;
              }
            }

            if (0 !== (f.subtreeFlags & 2064) && null !== g) g["return"] = f, S = g;else b: for (; null !== S;) {
              f = S;
              if (0 !== (f.flags & 2048)) switch (f.tag) {
                case 0:
                case 11:
                case 15:
                  Jg(9, f, f["return"]);
              }
              var E = f.sibling;

              if (null !== E) {
                E["return"] = f["return"];
                S = E;
                break b;
              }

              S = f["return"];
            }
          }

          var u = a.current;

          for (S = u; null !== S;) {
            g = S;
            var t = g.child;
            if (0 !== (g.subtreeFlags & 2064) && null !== t) t["return"] = g, S = t;else b: for (g = u; null !== S;) {
              h = S;
              if (0 !== (h.flags & 2048)) try {
                switch (h.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Kg(9, h);
                }
              } catch (oc) {
                T(h, h["return"], oc);
              }

              if (h === g) {
                S = null;
                break b;
              }

              var Db = h.sibling;

              if (null !== Db) {
                Db["return"] = h["return"];
                S = Db;
                break b;
              }

              S = h["return"];
            }
          }

          W = e;
          $c();
          if (Rc && "function" === typeof Rc.onPostCommitFiberRoot) try {
            Rc.onPostCommitFiberRoot(Qc, a);
          } catch (oc) {}
          d = !0;
        }
        return d;
      } finally {
        C = c, V.transition = b;
      }
    }

    return !1;
  }

  function ai(a, b, c) {
    b = Bf(c, b);
    b = Ef(a, b, 1);
    td(a, b);
    b = G();
    a = Gh(a, 1);
    null !== a && (Ec(a, 1, b), Ih(a, b));
  }

  function T(a, b, c) {
    if (3 === a.tag) ai(a, a, c);else for (; null !== b;) {
      if (3 === b.tag) {
        ai(b, a, c);
        break;
      } else if (1 === b.tag) {
        var d = b.stateNode;

        if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === If || !If.has(d))) {
          a = Bf(c, a);
          a = Hf(b, a, 1);
          td(b, a);
          a = G();
          b = Gh(b, 1);
          null !== b && (Ec(b, 1, a), Ih(b, a));
          break;
        }
      }

      b = b["return"];
    }
  }

  function Kf(a, b, c) {
    var d = a.pingCache;
    null !== d && d["delete"](b);
    b = G();
    a.pingedLanes |= a.suspendedLanes & c;
    N === a && (Y & c) === c && (4 === P || 3 === P && (Y & 130023424) === Y && 500 > D() - Zg ? Ph(a, 0) : uh |= c);
    Ih(a, b);
  }

  function bi(a, b) {
    0 === b && (0 === (a.mode & 1) ? b = 1 : (b = wc, wc <<= 1, 0 === (wc & 130023424) && (wc = 4194304)));
    var c = G();
    a = Gh(a, b);
    null !== a && (Ec(a, b, c), Ih(a, c));
  }

  function vg(a) {
    var b = a.memoizedState,
        c = 0;
    null !== b && (c = b.retryLane);
    bi(a, c);
  }

  function Vg(a, b) {
    var c = 0;

    switch (a.tag) {
      case 13:
        var d = a.stateNode;
        var e = a.memoizedState;
        null !== e && (c = e.retryLane);
        break;

      case 19:
        d = a.stateNode;
        break;

      default:
        throw Error(n(314));
    }

    null !== d && d["delete"](b);
    bi(a, c);
  }

  var Zh;

  Zh = function Zh(a, b, c) {
    if (null !== a) {
      if (a.memoizedProps !== b.pendingProps || z.current) F = !0;else {
        if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return F = !1, Bg(a, b, c);
        F = 0 !== (a.flags & 131072) ? !0 : !1;
      }
    } else F = !1, H && 0 !== (b.flags & 1048576) && Td(b, Md, b.index);
    b.lanes = 0;

    switch (b.tag) {
      case 2:
        var d = b.type;
        null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
        a = b.pendingProps;
        var e = kc(b, x.current);
        md(b, c);
        e = Ne(null, b, d, a, e, c);
        var f = Se();
        b.flags |= 1;
        "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, A(d) ? (f = !0, pc(b)) : f = !1, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, qd(b), e.updater = Ed, b.stateNode = e, e._reactInternals = b, Id(b, d, a, c), b = lg(null, b, d, !0, f, c)) : (b.tag = 0, H && f && Ud(b), Q(null, b, e, c), b = b.child);
        return b;

      case 16:
        d = b.elementType;

        a: {
          null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
          a = b.pendingProps;
          e = d._init;
          d = e(d._payload);
          b.type = d;
          e = b.tag = ci(d);
          a = dd(d, a);

          switch (e) {
            case 0:
              b = gg(null, b, d, a, c);
              break a;

            case 1:
              b = kg(null, b, d, a, c);
              break a;

            case 11:
              b = bg(null, b, d, a, c);
              break a;

            case 14:
              b = dg(null, b, d, dd(d.type, a), c);
              break a;
          }

          throw Error(n(306, d, ""));
        }

        return b;

      case 0:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : dd(d, e), gg(a, b, d, e, c);

      case 1:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : dd(d, e), kg(a, b, d, e, c);

      case 3:
        a: {
          mg(b);
          if (null === a) throw Error(n(387));
          d = b.pendingProps;
          f = b.memoizedState;
          e = f.element;
          rd(a, b);
          xd(b, d, null, c);
          var g = b.memoizedState;
          d = g.element;
          if (Va && f.isDehydrated) {
            if (f = {
              element: d,
              isDehydrated: !1,
              cache: g.cache,
              pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
              transitions: g.transitions
            }, b.updateQueue.baseState = f, b.memoizedState = f, b.flags & 256) {
              e = Error(n(423));
              b = ng(a, b, d, c, e);
              break a;
            } else if (d !== e) {
              e = Error(n(424));
              b = ng(a, b, d, c, e);
              break a;
            } else for (Va && (Xd = Ob(b.stateNode.containerInfo), Wd = b, H = !0, Zd = null, Yd = !1), c = se(b, null, d, c), b.child = c; c;) {
              c.flags = c.flags & -3 | 4096, c = c.sibling;
            }
          } else {
            ge();

            if (d === e) {
              b = cg(a, b, c);
              break a;
            }

            Q(a, b, d, c);
          }
          b = b.child;
        }

        return b;

      case 5:
        return Ae(b), null === a && de(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Na(d, e) ? g = null : null !== f && Na(d, f) && (b.flags |= 32), jg(a, b), Q(a, b, g, c), b.child;

      case 6:
        return null === a && de(b), null;

      case 13:
        return rg(a, b, c);

      case 4:
        return ye(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = re(b, null, d, c) : Q(a, b, d, c), b.child;

      case 11:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : dd(d, e), bg(a, b, d, e, c);

      case 7:
        return Q(a, b, b.pendingProps, c), b.child;

      case 8:
        return Q(a, b, b.pendingProps.children, c), b.child;

      case 12:
        return Q(a, b, b.pendingProps.children, c), b.child;

      case 10:
        a: {
          d = b.type._context;
          e = b.pendingProps;
          f = b.memoizedProps;
          g = e.value;
          jd(b, d, g);
          if (null !== f) if (Uc(f.value, g)) {
            if (f.children === e.children && !z.current) {
              b = cg(a, b, c);
              break a;
            }
          } else for (f = b.child, null !== f && (f["return"] = b); null !== f;) {
            var h = f.dependencies;

            if (null !== h) {
              g = f.child;

              for (var k = h.firstContext; null !== k;) {
                if (k.context === d) {
                  if (1 === f.tag) {
                    k = sd(-1, c & -c);
                    k.tag = 2;
                    var l = f.updateQueue;

                    if (null !== l) {
                      l = l.shared;
                      var m = l.pending;
                      null === m ? k.next = k : (k.next = m.next, m.next = k);
                      l.pending = k;
                    }
                  }

                  f.lanes |= c;
                  k = f.alternate;
                  null !== k && (k.lanes |= c);
                  ld(f["return"], c, b);
                  h.lanes |= c;
                  break;
                }

                k = k.next;
              }
            } else if (10 === f.tag) g = f.type === b.type ? null : f.child;else if (18 === f.tag) {
              g = f["return"];
              if (null === g) throw Error(n(341));
              g.lanes |= c;
              h = g.alternate;
              null !== h && (h.lanes |= c);
              ld(g, c, b);
              g = f.sibling;
            } else g = f.child;

            if (null !== g) g["return"] = f;else for (g = f; null !== g;) {
              if (g === b) {
                g = null;
                break;
              }

              f = g.sibling;

              if (null !== f) {
                f["return"] = g["return"];
                g = f;
                break;
              }

              g = g["return"];
            }
            f = g;
          }
          Q(a, b, e.children, c);
          b = b.child;
        }

        return b;

      case 9:
        return e = b.type, d = b.pendingProps.children, md(b, c), e = nd(e), d = d(e), b.flags |= 1, Q(a, b, d, c), b.child;

      case 14:
        return d = b.type, e = dd(d, b.pendingProps), e = dd(d.type, e), dg(a, b, d, e, c);

      case 15:
        return fg(a, b, b.type, b.pendingProps, c);

      case 17:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : dd(d, e), null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2), b.tag = 1, A(d) ? (a = !0, pc(b)) : a = !1, md(b, c), Gd(b, d, e), Id(b, d, e, c), lg(null, b, d, !0, a, c);

      case 19:
        return Ag(a, b, c);

      case 22:
        return hg(a, b, c);
    }

    throw Error(n(156, b.tag));
  };

  function Kh(a, b) {
    return Ic(a, b);
  }

  function di(a, b, c, d) {
    this.tag = a;
    this.key = c;
    this.sibling = this.child = this["return"] = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = d;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }

  function ae(a, b, c, d) {
    return new di(a, b, c, d);
  }

  function eg(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
  }

  function ci(a) {
    if ("function" === typeof a) return eg(a) ? 1 : 0;

    if (void 0 !== a && null !== a) {
      a = a.$$typeof;
      if (a === ma) return 11;
      if (a === pa) return 14;
    }

    return 2;
  }

  function me(a, b) {
    var c = a.alternate;
    null === c ? (c = ae(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
    c.flags = a.flags & 14680064;
    c.childLanes = a.childLanes;
    c.lanes = a.lanes;
    c.child = a.child;
    c.memoizedProps = a.memoizedProps;
    c.memoizedState = a.memoizedState;
    c.updateQueue = a.updateQueue;
    b = a.dependencies;
    c.dependencies = null === b ? null : {
      lanes: b.lanes,
      firstContext: b.firstContext
    };
    c.sibling = a.sibling;
    c.index = a.index;
    c.ref = a.ref;
    return c;
  }

  function oe(a, b, c, d, e, f) {
    var g = 2;
    d = a;
    if ("function" === typeof a) eg(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
      case ha:
        return qe(c.children, e, f, b);

      case ia:
        g = 8;
        e |= 8;
        break;

      case ja:
        return a = ae(12, c, b, e | 2), a.elementType = ja, a.lanes = f, a;

      case na:
        return a = ae(13, c, b, e), a.elementType = na, a.lanes = f, a;

      case oa:
        return a = ae(19, c, b, e), a.elementType = oa, a.lanes = f, a;

      case ra:
        return sg(c, e, f, b);

      default:
        if ("object" === typeof a && null !== a) switch (a.$$typeof) {
          case ka:
            g = 10;
            break a;

          case la:
            g = 9;
            break a;

          case ma:
            g = 11;
            break a;

          case pa:
            g = 14;
            break a;

          case qa:
            g = 16;
            d = null;
            break a;
        }
        throw Error(n(130, null == a ? a : typeof a, ""));
    }
    b = ae(g, c, b, e);
    b.elementType = a;
    b.type = d;
    b.lanes = f;
    return b;
  }

  function qe(a, b, c, d) {
    a = ae(7, a, d, b);
    a.lanes = c;
    return a;
  }

  function sg(a, b, c, d) {
    a = ae(22, a, d, b);
    a.elementType = ra;
    a.lanes = c;
    a.stateNode = {};
    return a;
  }

  function ne(a, b, c) {
    a = ae(6, a, null, b);
    a.lanes = c;
    return a;
  }

  function pe(a, b, c) {
    b = ae(4, null !== a.children ? a.children : [], a.key, b);
    b.lanes = c;
    b.stateNode = {
      containerInfo: a.containerInfo,
      pendingChildren: null,
      implementation: a.implementation
    };
    return b;
  }

  function ei(a, b, c, d, e) {
    this.tag = b;
    this.containerInfo = a;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = Ra;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = Dc(0);
    this.expirationTimes = Dc(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = Dc(0);
    this.identifierPrefix = d;
    this.onRecoverableError = e;
    Va && (this.mutableSourceEagerHydrationData = null);
  }

  function fi(a, b, c, d, e, f, g, h, k) {
    a = new ei(a, b, c, h, k);
    1 === b ? (b = 1, !0 === f && (b |= 8)) : b = 0;
    f = ae(3, null, null, b);
    a.current = f;
    f.stateNode = a;
    f.memoizedState = {
      element: d,
      isDehydrated: c,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    };
    qd(f);
    return a;
  }

  function gi(a) {
    if (!a) return ic;
    a = a._reactInternals;

    a: {
      if (wa(a) !== a || 1 !== a.tag) throw Error(n(170));
      var b = a;

      do {
        switch (b.tag) {
          case 3:
            b = b.stateNode.context;
            break a;

          case 1:
            if (A(b.type)) {
              b = b.stateNode.__reactInternalMemoizedMergedChildContext;
              break a;
            }

        }

        b = b["return"];
      } while (null !== b);

      throw Error(n(171));
    }

    if (1 === a.tag) {
      var c = a.type;
      if (A(c)) return nc(a, c, b);
    }

    return b;
  }

  function hi(a) {
    var b = a._reactInternals;

    if (void 0 === b) {
      if ("function" === typeof a.render) throw Error(n(188));
      a = Object.keys(a).join(",");
      throw Error(n(268, a));
    }

    a = Aa(b);
    return null === a ? null : a.stateNode;
  }

  function ii(a, b) {
    a = a.memoizedState;

    if (null !== a && null !== a.dehydrated) {
      var c = a.retryLane;
      a.retryLane = 0 !== c && c < b ? c : b;
    }
  }

  function ji(a, b) {
    ii(a, b);
    (a = a.alternate) && ii(a, b);
  }

  function ki(a) {
    a = Aa(a);
    return null === a ? null : a.stateNode;
  }

  function li() {
    return null;
  }

  exports.attemptContinuousHydration = function (a) {
    if (13 === a.tag) {
      var b = G();
      Dd(a, 134217728, b);
      ji(a, 134217728);
    }
  };

  exports.attemptDiscreteHydration = function (a) {
    if (13 === a.tag) {
      var b = G();
      Dd(a, 1, b);
      ji(a, 1);
    }
  };

  exports.attemptHydrationAtCurrentPriority = function (a) {
    if (13 === a.tag) {
      var b = G(),
          c = Cd(a);
      Dd(a, c, b);
      ji(a, c);
    }
  };

  exports.attemptSynchronousHydration = function (a) {
    switch (a.tag) {
      case 3:
        var b = a.stateNode;

        if (b.current.memoizedState.isDehydrated) {
          var c = xc(b.pendingLanes);
          0 !== c && (Gc(b, c | 1), Ih(b, D()), 0 === (W & 6) && (yh(), $c()));
        }

        break;

      case 13:
        var d = G();
        Vh(function () {
          return Dd(a, 1, d);
        });
        ji(a, 1);
    }
  };

  exports.batchedUpdates = function (a, b) {
    var c = W;
    W |= 1;

    try {
      return a(b);
    } finally {
      W = c, 0 === W && (yh(), Wc && $c());
    }
  };

  exports.createComponentSelector = function (a) {
    return {
      $$typeof: eh,
      value: a
    };
  };

  exports.createContainer = function (a, b, c, d, e, f, g) {
    return fi(a, b, !1, null, c, d, e, f, g);
  };

  exports.createHasPseudoClassSelector = function (a) {
    return {
      $$typeof: fh,
      value: a
    };
  };

  exports.createHydrationContainer = function (a, b, c, d, e, f, g, h, k) {
    a = fi(c, d, !0, a, e, f, g, h, k);
    a.context = gi(null);
    c = a.current;
    d = G();
    e = Cd(c);
    f = sd(d, e);
    f.callback = void 0 !== b && null !== b ? b : null;
    td(c, f);
    a.current.lanes = e;
    Ec(a, e, d);
    Ih(a, d);
    return a;
  };

  exports.createPortal = function (a, b, c) {
    var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return {
      $$typeof: fa,
      key: null == d ? null : "" + d,
      children: a,
      containerInfo: b,
      implementation: c
    };
  };

  exports.createRoleSelector = function (a) {
    return {
      $$typeof: gh,
      value: a
    };
  };

  exports.createTestNameSelector = function (a) {
    return {
      $$typeof: hh,
      value: a
    };
  };

  exports.createTextSelector = function (a) {
    return {
      $$typeof: ih,
      value: a
    };
  };

  exports.deferredUpdates = function (a) {
    var b = C,
        c = V.transition;

    try {
      return V.transition = null, C = 16, a();
    } finally {
      C = b, V.transition = c;
    }
  };

  exports.discreteUpdates = function (a, b, c, d, e) {
    var f = C,
        g = V.transition;

    try {
      return V.transition = null, C = 1, a(b, c, d, e);
    } finally {
      C = f, V.transition = g, 0 === W && yh();
    }
  };

  exports.findAllNodes = oh;

  exports.findBoundingRects = function (a, b) {
    if (!bb) throw Error(n(363));
    b = oh(a, b);
    a = [];

    for (var c = 0; c < b.length; c++) {
      a.push(db(b[c]));
    }

    for (b = a.length - 1; 0 < b; b--) {
      c = a[b];

      for (var d = c.x, e = d + c.width, f = c.y, g = f + c.height, h = b - 1; 0 <= h; h--) {
        if (b !== h) {
          var k = a[h],
              l = k.x,
              m = l + k.width,
              r = k.y,
              q = r + k.height;

          if (d >= l && f >= r && e <= m && g <= q) {
            a.splice(b, 1);
            break;
          } else if (!(d !== l || c.width !== k.width || q < f || r > g)) {
            r > f && (k.height += r - f, k.y = f);
            q < g && (k.height = g - r);
            a.splice(b, 1);
            break;
          } else if (!(f !== r || c.height !== k.height || m < d || l > e)) {
            l > d && (k.width += l - d, k.x = d);
            m < e && (k.width = e - l);
            a.splice(b, 1);
            break;
          }
        }
      }
    }

    return a;
  };

  exports.findHostInstance = hi;

  exports.findHostInstanceWithNoPortals = function (a) {
    a = ya(a);
    a = null !== a ? Ca(a) : null;
    return null === a ? null : a.stateNode;
  };

  exports.findHostInstanceWithWarning = function (a) {
    return hi(a);
  };

  exports.flushControlled = function (a) {
    var b = W;
    W |= 1;
    var c = V.transition,
        d = C;

    try {
      V.transition = null, C = 1, a();
    } finally {
      C = d, V.transition = c, W = b, 0 === W && (yh(), $c());
    }
  };

  exports.flushPassiveEffects = Mh;
  exports.flushSync = Vh;

  exports.focusWithin = function (a, b) {
    if (!bb) throw Error(n(363));
    a = kh(a);
    b = nh(a, b);
    b = Array.from(b);

    for (a = 0; a < b.length;) {
      var c = b[a++];

      if (!fb(c)) {
        if (5 === c.tag && hb(c.stateNode)) return !0;

        for (c = c.child; null !== c;) {
          b.push(c), c = c.sibling;
        }
      }
    }

    return !1;
  };

  exports.getCurrentUpdatePriority = function () {
    return C;
  };

  exports.getFindAllNodesFailureDescription = function (a, b) {
    if (!bb) throw Error(n(363));
    var c = 0,
        d = [];
    a = [kh(a), 0];

    for (var e = 0; e < a.length;) {
      var f = a[e++],
          g = a[e++],
          h = b[g];
      if (5 !== f.tag || !fb(f)) if (lh(f, h) && (d.push(mh(h)), g++, g > c && (c = g)), g < b.length) for (f = f.child; null !== f;) {
        a.push(f, g), f = f.sibling;
      }
    }

    if (c < b.length) {
      for (a = []; c < b.length; c++) {
        a.push(mh(b[c]));
      }

      return "findAllNodes was able to match part of the selector:\n  " + (d.join(" > ") + "\n\nNo matching component was found for:\n  ") + a.join(" > ");
    }

    return null;
  };

  exports.getPublicRootInstance = function (a) {
    a = a.current;
    if (!a.child) return null;

    switch (a.child.tag) {
      case 5:
        return Ea(a.child.stateNode);

      default:
        return a.child.stateNode;
    }
  };

  exports.injectIntoDevTools = function (a) {
    a = {
      bundleType: a.bundleType,
      version: a.version,
      rendererPackageName: a.rendererPackageName,
      rendererConfig: a.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: da.ReactCurrentDispatcher,
      findHostInstanceByFiber: ki,
      findFiberByHostInstance: a.findFiberByHostInstance || li,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.1.0"
    };
    if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) a = !1;else {
      var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (b.isDisabled || !b.supportsFiber) a = !0;else {
        try {
          Qc = b.inject(a), Rc = b;
        } catch (c) {}

        a = b.checkDCE ? !0 : !1;
      }
    }
    return a;
  };

  exports.isAlreadyRendering = function () {
    return !1;
  };

  exports.observeVisibleRects = function (a, b, c, d) {
    if (!bb) throw Error(n(363));
    a = oh(a, b);
    var e = ib(a, c, d).disconnect;
    return {
      disconnect: function disconnect() {
        e();
      }
    };
  };

  exports.registerMutableSourceForHydration = function (a, b) {
    var c = b._getVersion;
    c = c(b._source);
    null == a.mutableSourceEagerHydrationData ? a.mutableSourceEagerHydrationData = [b, c] : a.mutableSourceEagerHydrationData.push(b, c);
  };

  exports.runWithPriority = function (a, b) {
    var c = C;

    try {
      return C = a, b();
    } finally {
      C = c;
    }
  };

  exports.shouldError = function () {
    return null;
  };

  exports.shouldSuspend = function () {
    return !1;
  };

  exports.updateContainer = function (a, b, c, d) {
    var e = b.current,
        f = G(),
        g = Cd(e);
    c = gi(c);
    null === b.context ? b.context = c : b.pendingContext = c;
    b = sd(f, g);
    b.payload = {
      element: a
    };
    d = void 0 === d ? null : d;
    null !== d && (b.callback = d);
    td(e, b);
    a = Dd(e, g, f);
    null !== a && vd(a, e, g);
    return g;
  };

  return exports;
};

/***/ }),

/***/ 2014:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(5623);
} else {}

/***/ }),

/***/ 3630:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(8192);
} else {}

/***/ }),

/***/ 6534:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var f = __webpack_require__(3792),
    k = Symbol["for"]("react.element"),
    l = Symbol["for"]("react.fragment"),
    m = Object.prototype.hasOwnProperty,
    n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    p = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function q(c, a, g) {
  var b,
      d = {},
      e = null,
      h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);

  for (b in a) {
    m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  }

  if (c && c.defaultProps) for (b in a = c.defaultProps, a) {
    void 0 === d[b] && (d[b] = a[b]);
  }
  return {
    $$typeof: k,
    type: c,
    key: e,
    ref: h,
    props: d,
    _owner: n.current
  };
}

exports.Fragment = l;
exports.jsx = q;
exports.jsxs = q;

/***/ }),

/***/ 3166:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var l = Symbol["for"]("react.element"),
    n = Symbol["for"]("react.portal"),
    p = Symbol["for"]("react.fragment"),
    q = Symbol["for"]("react.strict_mode"),
    r = Symbol["for"]("react.profiler"),
    t = Symbol["for"]("react.provider"),
    u = Symbol["for"]("react.context"),
    v = Symbol["for"]("react.forward_ref"),
    w = Symbol["for"]("react.suspense"),
    x = Symbol["for"]("react.memo"),
    y = Symbol["for"]("react.lazy"),
    z = Symbol.iterator;

function A(a) {
  if (null === a || "object" !== typeof a) return null;
  a = z && a[z] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}

var B = {
  isMounted: function isMounted() {
    return !1;
  },
  enqueueForceUpdate: function enqueueForceUpdate() {},
  enqueueReplaceState: function enqueueReplaceState() {},
  enqueueSetState: function enqueueSetState() {}
},
    C = Object.assign,
    D = {};

function E(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = e || B;
}

E.prototype.isReactComponent = {};

E.prototype.setState = function (a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b, "setState");
};

E.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};

function F() {}

F.prototype = E.prototype;

function G(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D;
  this.updater = e || B;
}

var H = G.prototype = new F();
H.constructor = G;
C(H, E.prototype);
H.isPureReactComponent = !0;
var I = Array.isArray,
    J = Object.prototype.hasOwnProperty,
    K = {
  current: null
},
    L = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function M(a, b, e) {
  var d,
      c = {},
      k = null,
      h = null;
  if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) {
    J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
  }
  var g = arguments.length - 2;
  if (1 === g) c.children = e;else if (1 < g) {
    for (var f = Array(g), m = 0; m < g; m++) {
      f[m] = arguments[m + 2];
    }

    c.children = f;
  }
  if (a && a.defaultProps) for (d in g = a.defaultProps, g) {
    void 0 === c[d] && (c[d] = g[d]);
  }
  return {
    $$typeof: l,
    type: a,
    key: k,
    ref: h,
    props: c,
    _owner: K.current
  };
}

function N(a, b) {
  return {
    $$typeof: l,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}

function O(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l;
}

function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + a.replace(/[=:]/g, function (a) {
    return b[a];
  });
}

var P = /\/+/g;

function Q(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}

function R(a, b, e, d, c) {
  var k = typeof a;
  if ("undefined" === k || "boolean" === k) a = null;
  var h = !1;
  if (null === a) h = !0;else switch (k) {
    case "string":
    case "number":
      h = !0;
      break;

    case "object":
      switch (a.$$typeof) {
        case l:
        case n:
          h = !0;
      }

  }
  if (h) return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function (a) {
    return a;
  })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
  h = 0;
  d = "" === d ? "." : d + ":";
  if (I(a)) for (var g = 0; g < a.length; g++) {
    k = a[g];
    var f = d + Q(k, g);
    h += R(k, b, e, f, c);
  } else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) {
    k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
  } else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
  return h;
}

function S(a, b, e) {
  if (null == a) return a;
  var d = [],
      c = 0;
  R(a, d, "", "", function (a) {
    return b.call(e, a, c++);
  });
  return d;
}

function T(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    b.then(function (b) {
      if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
    }, function (b) {
      if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
    });
    -1 === a._status && (a._status = 0, a._result = b);
  }

  if (1 === a._status) return a._result["default"];
  throw a._result;
}

var U = {
  current: null
},
    V = {
  transition: null
},
    W = {
  ReactCurrentDispatcher: U,
  ReactCurrentBatchConfig: V,
  ReactCurrentOwner: K
};
exports.Children = {
  map: S,
  forEach: function forEach(a, b, e) {
    S(a, function () {
      b.apply(this, arguments);
    }, e);
  },
  count: function count(a) {
    var b = 0;
    S(a, function () {
      b++;
    });
    return b;
  },
  toArray: function toArray(a) {
    return S(a, function (a) {
      return a;
    }) || [];
  },
  only: function only(a) {
    if (!O(a)) throw Error("React.Children.only expected to receive a single React element child.");
    return a;
  }
};
exports.Component = E;
exports.Fragment = p;
exports.Profiler = r;
exports.PureComponent = G;
exports.StrictMode = q;
exports.Suspense = w;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;

exports.cloneElement = function (a, b, e) {
  if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d = C({}, a.props),
      c = a.key,
      k = a.ref,
      h = a._owner;

  if (null != b) {
    void 0 !== b.ref && (k = b.ref, h = K.current);
    void 0 !== b.key && (c = "" + b.key);
    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;

    for (f in b) {
      J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
    }
  }

  var f = arguments.length - 2;
  if (1 === f) d.children = e;else if (1 < f) {
    g = Array(f);

    for (var m = 0; m < f; m++) {
      g[m] = arguments[m + 2];
    }

    d.children = g;
  }
  return {
    $$typeof: l,
    type: a.type,
    key: c,
    ref: k,
    props: d,
    _owner: h
  };
};

exports.createContext = function (a) {
  a = {
    $$typeof: u,
    _currentValue: a,
    _currentValue2: a,
    _threadCount: 0,
    Provider: null,
    Consumer: null,
    _defaultValue: null,
    _globalName: null
  };
  a.Provider = {
    $$typeof: t,
    _context: a
  };
  return a.Consumer = a;
};

exports.createElement = M;

exports.createFactory = function (a) {
  var b = M.bind(null, a);
  b.type = a;
  return b;
};

exports.createRef = function () {
  return {
    current: null
  };
};

exports.forwardRef = function (a) {
  return {
    $$typeof: v,
    render: a
  };
};

exports.isValidElement = O;

exports.lazy = function (a) {
  return {
    $$typeof: y,
    _payload: {
      _status: -1,
      _result: a
    },
    _init: T
  };
};

exports.memo = function (a, b) {
  return {
    $$typeof: x,
    type: a,
    compare: void 0 === b ? null : b
  };
};

exports.startTransition = function (a) {
  var b = V.transition;
  V.transition = {};

  try {
    a();
  } finally {
    V.transition = b;
  }
};

exports.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};

exports.useCallback = function (a, b) {
  return U.current.useCallback(a, b);
};

exports.useContext = function (a) {
  return U.current.useContext(a);
};

exports.useDebugValue = function () {};

exports.useDeferredValue = function (a) {
  return U.current.useDeferredValue(a);
};

exports.useEffect = function (a, b) {
  return U.current.useEffect(a, b);
};

exports.useId = function () {
  return U.current.useId();
};

exports.useImperativeHandle = function (a, b, e) {
  return U.current.useImperativeHandle(a, b, e);
};

exports.useInsertionEffect = function (a, b) {
  return U.current.useInsertionEffect(a, b);
};

exports.useLayoutEffect = function (a, b) {
  return U.current.useLayoutEffect(a, b);
};

exports.useMemo = function (a, b) {
  return U.current.useMemo(a, b);
};

exports.useReducer = function (a, b, e) {
  return U.current.useReducer(a, b, e);
};

exports.useRef = function (a) {
  return U.current.useRef(a);
};

exports.useState = function (a) {
  return U.current.useState(a);
};

exports.useSyncExternalStore = function (a, b, e) {
  return U.current.useSyncExternalStore(a, b, e);
};

exports.useTransition = function () {
  return U.current.useTransition();
};

exports.version = "18.1.0";

/***/ }),

/***/ 3792:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(3166);
} else {}

/***/ }),

/***/ 4790:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(6534);
} else {}

/***/ }),

/***/ 7714:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


function f(a, b) {
  var c = a.length;
  a.push(b);

  a: for (; 0 < c;) {
    var d = c - 1 >>> 1,
        e = a[d];
    if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;else break a;
  }
}

function h(a) {
  return 0 === a.length ? null : a[0];
}

function k(a) {
  if (0 === a.length) return null;
  var b = a[0],
      c = a.pop();

  if (c !== b) {
    a[0] = c;

    a: for (var d = 0, e = a.length, w = e >>> 1; d < w;) {
      var m = 2 * (d + 1) - 1,
          C = a[m],
          n = m + 1,
          x = a[n];
      if (0 > g(C, c)) n < e && 0 > g(x, C) ? (a[d] = x, a[n] = c, d = n) : (a[d] = C, a[m] = c, d = m);else if (n < e && 0 > g(x, c)) a[d] = x, a[n] = c, d = n;else break a;
    }
  }

  return b;
}

function g(a, b) {
  var c = a.sortIndex - b.sortIndex;
  return 0 !== c ? c : a.id - b.id;
}

if ("object" === typeof performance && "function" === typeof performance.now) {
  var l = performance;

  exports.unstable_now = function () {
    return l.now();
  };
} else {
  var p = Date,
      q = p.now();

  exports.unstable_now = function () {
    return p.now() - q;
  };
}

var r = [],
    t = [],
    u = 1,
    v = null,
    y = 3,
    z = !1,
    A = !1,
    B = !1,
    D = "function" === typeof setTimeout ? setTimeout : null,
    E = "function" === typeof clearTimeout ? clearTimeout : null,
    F = "undefined" !== typeof setImmediate ? setImmediate : null;
"undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);

function G(a) {
  for (var b = h(t); null !== b;) {
    if (null === b.callback) k(t);else if (b.startTime <= a) k(t), b.sortIndex = b.expirationTime, f(r, b);else break;
    b = h(t);
  }
}

function H(a) {
  B = !1;
  G(a);
  if (!A) if (null !== h(r)) A = !0, I(J);else {
    var b = h(t);
    null !== b && K(H, b.startTime - a);
  }
}

function J(a, b) {
  A = !1;
  B && (B = !1, E(L), L = -1);
  z = !0;
  var c = y;

  try {
    G(b);

    for (v = h(r); null !== v && (!(v.expirationTime > b) || a && !M());) {
      var d = v.callback;

      if ("function" === typeof d) {
        v.callback = null;
        y = v.priorityLevel;
        var e = d(v.expirationTime <= b);
        b = exports.unstable_now();
        "function" === typeof e ? v.callback = e : v === h(r) && k(r);
        G(b);
      } else k(r);

      v = h(r);
    }

    if (null !== v) var w = !0;else {
      var m = h(t);
      null !== m && K(H, m.startTime - b);
      w = !1;
    }
    return w;
  } finally {
    v = null, y = c, z = !1;
  }
}

var N = !1,
    O = null,
    L = -1,
    P = 5,
    Q = -1;

function M() {
  return exports.unstable_now() - Q < P ? !1 : !0;
}

function R() {
  if (null !== O) {
    var a = exports.unstable_now();
    Q = a;
    var b = !0;

    try {
      b = O(!0, a);
    } finally {
      b ? S() : (N = !1, O = null);
    }
  } else N = !1;
}

var S;
if ("function" === typeof F) S = function S() {
  F(R);
};else if ("undefined" !== typeof MessageChannel) {
  var T = new MessageChannel(),
      U = T.port2;
  T.port1.onmessage = R;

  S = function S() {
    U.postMessage(null);
  };
} else S = function S() {
  D(R, 0);
};

function I(a) {
  O = a;
  N || (N = !0, S());
}

function K(a, b) {
  L = D(function () {
    a(exports.unstable_now());
  }, b);
}

exports.unstable_IdlePriority = 5;
exports.unstable_ImmediatePriority = 1;
exports.unstable_LowPriority = 4;
exports.unstable_NormalPriority = 3;
exports.unstable_Profiling = null;
exports.unstable_UserBlockingPriority = 2;

exports.unstable_cancelCallback = function (a) {
  a.callback = null;
};

exports.unstable_continueExecution = function () {
  A || z || (A = !0, I(J));
};

exports.unstable_forceFrameRate = function (a) {
  0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a ? Math.floor(1E3 / a) : 5;
};

exports.unstable_getCurrentPriorityLevel = function () {
  return y;
};

exports.unstable_getFirstCallbackNode = function () {
  return h(r);
};

exports.unstable_next = function (a) {
  switch (y) {
    case 1:
    case 2:
    case 3:
      var b = 3;
      break;

    default:
      b = y;
  }

  var c = y;
  y = b;

  try {
    return a();
  } finally {
    y = c;
  }
};

exports.unstable_pauseExecution = function () {};

exports.unstable_requestPaint = function () {};

exports.unstable_runWithPriority = function (a, b) {
  switch (a) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;

    default:
      a = 3;
  }

  var c = y;
  y = a;

  try {
    return b();
  } finally {
    y = c;
  }
};

exports.unstable_scheduleCallback = function (a, b, c) {
  var d = exports.unstable_now();
  "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;

  switch (a) {
    case 1:
      var e = -1;
      break;

    case 2:
      e = 250;
      break;

    case 5:
      e = 1073741823;
      break;

    case 4:
      e = 1E4;
      break;

    default:
      e = 5E3;
  }

  e = c + e;
  a = {
    id: u++,
    callback: b,
    priorityLevel: a,
    startTime: c,
    expirationTime: e,
    sortIndex: -1
  };
  c > d ? (a.sortIndex = c, f(t, a), null === h(r) && a === h(t) && (B ? (E(L), L = -1) : B = !0, K(H, c - d))) : (a.sortIndex = e, f(r, a), A || z || (A = !0, I(J)));
  return a;
};

exports.unstable_shouldYield = M;

exports.unstable_wrapCallback = function (a) {
  var b = y;
  return function () {
    var c = y;
    y = b;

    try {
      return a.apply(this, arguments);
    } finally {
      y = c;
    }
  };
};

/***/ }),

/***/ 1481:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(7714);
} else {}

/***/ }),

/***/ 3985:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var e = __webpack_require__(3792);

function h(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}

var k = "function" === typeof Object.is ? Object.is : h,
    l = e.useState,
    m = e.useEffect,
    n = e.useLayoutEffect,
    p = e.useDebugValue;

function q(a, b) {
  var d = b(),
      f = l({
    inst: {
      value: d,
      getSnapshot: b
    }
  }),
      c = f[0].inst,
      g = f[1];
  n(function () {
    c.value = d;
    c.getSnapshot = b;
    r(c) && g({
      inst: c
    });
  }, [a, d, b]);
  m(function () {
    r(c) && g({
      inst: c
    });
    return a(function () {
      r(c) && g({
        inst: c
      });
    });
  }, [a]);
  p(d);
  return d;
}

function r(a) {
  var b = a.getSnapshot;
  a = a.value;

  try {
    var d = b();
    return !k(a, d);
  } catch (f) {
    return !0;
  }
}

function t(a, b) {
  return b();
}

var u = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? t : q;
exports.useSyncExternalStore = void 0 !== e.useSyncExternalStore ? e.useSyncExternalStore : u;

/***/ }),

/***/ 3560:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


var g = __webpack_require__(3792);

function n(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}

var p = "function" === typeof Object.is ? Object.is : n,
    q = g.useSyncExternalStore,
    r = g.useRef,
    t = g.useEffect,
    u = g.useMemo,
    v = g.useDebugValue;

exports.useSyncExternalStoreWithSelector = function (a, b, e, l, h) {
  var c = r(null);

  if (null === c.current) {
    var f = {
      hasValue: !1,
      value: null
    };
    c.current = f;
  } else f = c.current;

  c = u(function () {
    function a(a) {
      if (!c) {
        c = !0;
        d = a;
        a = l(a);

        if (void 0 !== h && f.hasValue) {
          var b = f.value;
          if (h(b, a)) return k = b;
        }

        return k = a;
      }

      b = k;
      if (p(d, a)) return b;
      var e = l(a);
      if (void 0 !== h && h(b, e)) return b;
      d = a;
      return k = e;
    }

    var c = !1,
        d,
        k,
        m = void 0 === e ? null : e;
    return [function () {
      return a(b());
    }, null === m ? void 0 : function () {
      return a(m());
    }];
  }, [b, e, l, h]);
  var d = q(a, c[0], c[1]);
  t(function () {
    f.hasValue = !0;
    f.value = d;
  }, [d]);
  v(d);
  return d;
};

/***/ }),

/***/ 6198:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(3985);
} else {}

/***/ }),

/***/ 9113:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(3560);
} else {}

/***/ }),

/***/ 7635:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9367);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7989);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root>*{background-color:#fafafa}.uitoolkit_app__Y3Jh-{padding:20px;max-width:960px;width:100%;align-self:center;align-items:stretch}.uitoolkit_app__Y3Jh- h1{font-size:36px;font-style:smallcaps,bold;color:#582a9c;margin-bottom:12px}.uitoolkit_app__Y3Jh- h2{font-size:30px;font-style:smallcaps;color:#fb2f8e;margin-bottom:8px}.uitoolkit_app__Y3Jh- section{margin-top:10px;margin-bottom:10px}.uitoolkit_app__Y3Jh- row{flex-direction:row;align-items:center}.uitoolkit_app__Y3Jh- column{flex-direction:column;align-items:center;flex-grow:1;flex-shrink:0}.uitoolkit_app__Y3Jh- image{flex-grow:1;flex-shrink:1;flex-basis:0;object-fit:scale-down;object-position:50%;transition:object-position 2s;align-self:stretch}.uitoolkit_app__Y3Jh- input{border-width:1px;border-color:#000}.uitoolkit_app__Y3Jh- button:hover{audio:url(res:click)}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"app": "uitoolkit_app__Y3Jh-"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6062:
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 6793:
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 1173:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 7892:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 4036:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 2464:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__(3792);
// EXTERNAL MODULE: ../../node_modules/react-reconciler/constants.js
var constants = __webpack_require__(2014);
;// CONCATENATED MODULE: ../../renderer/dist/src/version.js
var version = '0.11.0';
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4790);
// EXTERNAL MODULE: ../../node_modules/use-sync-external-store/shim/index.js
var shim = __webpack_require__(6198);
// EXTERNAL MODULE: ../../node_modules/use-sync-external-store/with-selector.js
var with_selector = __webpack_require__(9113);
;// CONCATENATED MODULE: ../../renderer/dist/src/helpers/dictionary-watcher.js
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};




/**
 * Creates a context that updates its value when the values in the dictionary change
 * @param dictionary The dictionary to be watched. Must implement the EventDictionary type in the C#
 * @param displayName A displayName to identify this context easier in case of problems
 */

function createDictionaryWatcher(dictionary, displayName) {
  var ctx = (0,react.createContext)(undefined);
  if (displayName) ctx.displayName = displayName;

  var snapshot = __assign({}, dictionary);

  var subscribe = function subscribe(onStoreChange) {
    snapshot = __assign({}, dictionary);
    var remove = dictionary === null || dictionary === void 0 ? void 0 : dictionary.AddListener(function (key, value, dic) {
      snapshot = __assign({}, dictionary);
      onStoreChange();
    });

    if (!remove) {
      if (displayName) console.warn("".concat(displayName, " dictionary does not provide a change listener"));else console.warn('The dictionary does not provide a change listener');
    }

    return function () {
      return remove === null || remove === void 0 ? void 0 : remove();
    };
  };

  var getSnapshot = function getSnapshot() {
    return snapshot;
  };

  var Provider = function GlobalsProvider(_a) {
    var children = _a.children;
    var value = (0,shim.useSyncExternalStore)(subscribe, getSnapshot, getSnapshot);
    return (0,react.createElement)(ctx.Provider, {
      value: value
    }, children);
  };

  function useSelector(selector) {
    return (0,with_selector.useSyncExternalStoreWithSelector)(subscribe, getSnapshot, getSnapshot, selector);
  }

  function useDictionaryContext() {
    var context = (0,react.useContext)(ctx);

    if (context === undefined) {
      if (displayName) throw new Error("".concat(displayName, ".useContext must be used within a ").concat(displayName, ".Provider"));else throw new Error('useContext must be used within a provider');
    }

    return context;
  }

  return {
    context: ctx,
    Provider: Provider,
    useContext: useDictionaryContext,
    useSelector: useSelector
  };
}
var globalsWatcher = createDictionaryWatcher(Globals, 'globalsContext');
var useGlobals = globalsWatcher.useContext;
var GlobalsProvider = globalsWatcher.Provider;
;// CONCATENATED MODULE: ../../renderer/dist/src/views/error-boundary.js
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var error_boundary_assign = undefined && undefined.__assign || function () {
  error_boundary_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return error_boundary_assign.apply(this, arguments);
};




var ErrorBoundary =
/** @class */
function (_super) {
  __extends(ErrorBoundary, _super);

  function ErrorBoundary(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      hasError: false,
      error: null
    };
    return _this;
  }

  ErrorBoundary.getDerivedStateFromError = function (error) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: true,
      error: error
    };
  };

  ErrorBoundary.prototype.componentDidCatch = function (error, errorInfo) {// You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  };

  ErrorBoundary.prototype.render = function () {
    var _a, _b;

    if (this.state.hasError) {
      return (0,jsx_runtime.jsxs)("view", error_boundary_assign({
        style: {
          color: 'crimson',
          padding: 20
        }
      }, {
        children: [(0,jsx_runtime.jsx)("view", error_boundary_assign({
          style: {
            marginBottom: '12px'
          }
        }, {
          children: ((_a = this.state.error) === null || _a === void 0 ? void 0 : _a.message) || ''
        })), (0,jsx_runtime.jsx)("view", {
          children: ((_b = this.state.error) === null || _b === void 0 ? void 0 : _b.stack) || ''
        })]
      }));
    }

    return this.props.children;
  };

  return ErrorBoundary;
}(react.Component);


;// CONCATENATED MODULE: ../../renderer/dist/src/views/default-view.js



function DefaultView(_a) {
  var children = _a.children,
      withHelpers = _a.withHelpers;
  return (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: !withHelpers ? children : (0,jsx_runtime.jsx)(ErrorBoundary, {
      children: (0,jsx_runtime.jsx)(GlobalsProvider, {
        children: children
      })
    })
  });
}
;// CONCATENATED MODULE: ../../renderer/dist/src/renderer/async/objects.js
var ObjectsRepo =
/** @class */
function () {
  function ObjectsRepo() {
    var _this = this;

    this.indices = [{}];
    this.objects = new WeakMap();

    this.setObject = function (index, item) {
      var it = _this.indices[index];

      if (!it) {
        it = _this.indices[index] = {};
      }

      _this.objects.set(it, item);
    };

    this.addObject = function (item) {
      if (!item) return -1;
      var it = {};
      var ind = _this.indices.length;

      _this.indices.push(it);

      _this.objects.set(it, item);

      return ind;
    };

    this.getObject = function (index) {
      if (index < 0) return undefined;
      var it = _this.indices[index];
      return _this.objects.get(it);
    };
  }

  return ObjectsRepo;
}();


// EXTERNAL MODULE: ../../node_modules/react-reconciler/index.js
var react_reconciler = __webpack_require__(3630);
;// CONCATENATED MODULE: ../../renderer/dist/src/renderer/diffing.js
var styleStringSymbol = '__style_as_string__';
function diffProperties(lastProps, nextProps, deepDiffing) {
  if (deepDiffing === void 0) {
    deepDiffing = 0;
  }

  if (lastProps === nextProps) return null;
  var updatePayload = null;
  var propKey;

  for (propKey in lastProps) {
    // This loop is for removing properties that existed in the previous properties, but not on current
    if (nextProps.hasOwnProperty(propKey) || !lastProps.hasOwnProperty(propKey) || lastProps[propKey] == null) {
      continue;
    }

    var prop = null; // If style existed in the previous properties as string, set it to null

    if (propKey === 'style' && typeof lastProps.style === 'string') {
      (updatePayload = updatePayload || {})[styleStringSymbol] = null;
    } else {
      var depth = deepDiffing > 0 ? deepDiffing : propKey === 'style' ? 1 : 0;

      if (depth > 0) {
        prop = diffProperties(lastProps[propKey], null, depth - 1);
        if (!prop) continue;
      } // For all other deleted properties we add it to the queue. We use
      // the whitelist in the commit phase instead.


      (updatePayload = updatePayload || {})[propKey] = prop;
    }
  }

  for (propKey in nextProps) {
    // This loop is for finding difference between current properties and previous properties
    var nextProp = nextProps[propKey];
    var lastProp = lastProps != null ? lastProps[propKey] : undefined;

    if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp || nextProp == null && lastProp == null) {
      continue;
    }

    var prop = nextProp;

    if (propKey === 'style') {
      var prevWasString = typeof lastProp === 'string';
      var curIsString = typeof prop === 'string';

      if (prevWasString !== curIsString) {
        (updatePayload = updatePayload || {})[styleStringSymbol] = typeof prop === 'string' ? prop : null;

        if (curIsString) {
          // Current style is string while previous is object, so revert all changes from the previous one
          prop = diffProperties(lastProp, {}, 0);
          if (!prop) continue;
        }
      } else {
        if (curIsString) {
          // Both styles are string, style does not need changing
          continue;
        } else {
          // Both styles are object, take the difference
          prop = diffProperties(lastProp, nextProp, 0);
          if (!prop) continue;
        }
      }
    }

    if (deepDiffing > 0) {
      prop = diffProperties(lastProp, nextProp, deepDiffing - 1);
      if (!prop) continue;
    }

    (updatePayload = updatePayload || {})[propKey] = prop;
  }

  return updatePayload;
}
;// CONCATENATED MODULE: ../../renderer/dist/src/renderer/constants.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};



var hideClass = 'react-unity__renderer__hidden';
var eventPriorities = {
  discrete: constants.DiscreteEventPriority,
  continuous: constants.ContinuousEventPriority,
  "default": constants.DefaultEventPriority,
  idle: constants.IdleEventPriority
};
var textTypes = {
  text: true,
  icon: true,
  style: true,
  script: true
};
function getAllowedProps(props, type) {
  var children = props.children,
      tag = props.tag,
      rest = __rest(props, ["children", "tag"]);

  if (textTypes[type] && 'children' in props) {
    rest.children = !children || typeof children === 'boolean' ? null : Array.isArray(children) ? children.join('') : children + '';
  }

  if (typeof props.style === 'string') rest[styleStringSymbol] = props.style;
  return rest;
}
var commonReconciler = {
  // -------------------
  //     Scheduling
  // -------------------
  now: Date.now,
  getCurrentEventPriority: function getCurrentEventPriority() {
    return UnityBridge.CurrentEventPriority || eventPriorities["default"];
  },
  noTimeout: -1,
  scheduleTimeout: function scheduleTimeout(callback, delay) {
    return setTimeout(callback, delay);
  },
  scheduleMicrotask: typeof queueMicrotask === 'function' ? queueMicrotask : function (callback) {
    return Promise.resolve(null).then(callback)["catch"](function (error) {
      return setTimeout(function () {
        throw error;
      }, 0);
    });
  },
  cancelTimeout: function cancelTimeout(handle) {
    return clearTimeout(handle);
  }
};
var isDevelopment = "production" === 'development';
;// CONCATENATED MODULE: ../../renderer/dist/src/renderer/async/callbacks.js
var callbacks_extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();



var CallbacksRepo =
/** @class */
function (_super) {
  callbacks_extends(CallbacksRepo, _super);

  function CallbacksRepo() {
    var _this = _super.call(this) || this;

    _this.call = function (ind, args) {
      var cb = _this.getObject(ind);

      if ('Length' in args) {
        var newArgs = [];
        var length = args['Length'];

        for (var index = 0; index < length; index++) {
          var element = args[index];
          newArgs.push(element);
        }

        args = newArgs;
      }

      return cb.apply(null, args);
    };

    return _this;
  }

  return CallbacksRepo;
}(ObjectsRepo);


;// CONCATENATED MODULE: ../../renderer/dist/src/renderer/async/serializer.js


var callbacksRepo = new CallbacksRepo();
var objectsRepo = new ObjectsRepo(); // Separates properties in 3 categories: regular props, callbacks and non-serializable objects

function convertPropsToSerializable(props) {
  var res = {};

  for (var key in props) {
    if (Object.prototype.hasOwnProperty.call(props, key)) {
      var value = props[key];

      if (value == null) {
        (res.p || (res.p = {}))[key] = null;
      } else if (key === 'style') {
        (res.p || (res.p = {}))[key] = convertPropsToSerializable(value);
      } else if (key[0] === 'o' && key[1] === 'n' && typeof value === 'function') {
        var ind = callbacksRepo.addObject(value);
        (res.e || (res.e = {}))[key] = ind;
      } else if (typeof value === 'object' || typeof value === 'function') {
        var ind = objectsRepo.addObject(value);
        (res.o || (res.o = {}))[key] = ind;
      } else {
        (res.p || (res.p = {}))[key] = value;
      }
    }
  }

  return res;
}
;// CONCATENATED MODULE: ../../renderer/dist/src/renderer/async/reconciler.js
var reconciler_assign = undefined && undefined.__assign || function () {
  reconciler_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return reconciler_assign.apply(this, arguments);
};





var refId = 0;
var ctxMap = new Map();

var hostConfig = reconciler_assign(reconciler_assign({}, commonReconciler), {
  getRootHostContext: function getRootHostContext(rootContainer) {
    var context = rootContainer.context;

    if (rootContainer.refId < 0) {
      refId++;
      rootContainer.context.SetRef(refId, rootContainer.component);
      rootContainer.refId = refId;
    }

    var existing = ctxMap.get(context);
    if (existing) return existing;
    var commands = rootContainer.commands;

    var flushCommands = function flushCommands() {
      var serialized = JSON.stringify(commands);
      commands.length = 0;
      return serialized;
    };

    var fireEventByRef = function fireEventByRef(ind, args) {
      return callbacksRepo.call(ind, args);
    };

    var getObjectRef = function getObjectRef(ind) {
      return objectsRepo.getObject(ind);
    };

    var getEventAsObjectRef = function getEventAsObjectRef(ind) {
      return callbacksRepo.getObject(ind);
    };

    context.BindCommands(flushCommands, fireEventByRef, getObjectRef, getEventAsObjectRef);
    var ctx = {
      context: context,
      commands: commands
    };
    ctxMap.set(context, ctx);
    return ctx;
  },
  getChildHostContext: function getChildHostContext(parentCtx) {
    return parentCtx;
  },
  getPublicInstance: function getPublicInstance(instance) {
    return instance.context.GetRef(instance.refId, instance.commands.length > 0);
  },
  supportsMutation: true,
  supportsHydration: false,
  supportsPersistence: false,
  supportsMicrotasks: true,
  supportsTestSelectors: false,
  isPrimaryRenderer: true,
  warnsIfNotActing: true,
  prepareForCommit: function prepareForCommit() {
    return null;
  },
  resetAfterCommit: function resetAfterCommit() {},
  shouldDeprioritizeSubtree: function shouldDeprioritizeSubtree() {
    return false;
  },
  clearContainer: function clearContainer(container) {
    UnityBridge.clearContainer(container);
  },
  createInstance: function createInstance(type, props, rootContainer, ctx, internalHandle) {
    refId++;
    var aProps = getAllowedProps(props, type);
    ctx.commands.push(['c', reconciler_assign({
      t: type,
      r: refId
    }, convertPropsToSerializable(aProps))]);
    if (rootContainer.fiberCache) rootContainer.fiberCache.setObject(refId, internalHandle);
    return reconciler_assign(reconciler_assign({}, ctx), {
      refId: refId
    });
  },
  createTextInstance: function createTextInstance(text, rootContainer, ctx, internalHandle) {
    refId++;
    ctx.commands.push(['t', {
      r: refId,
      c: text
    }]);
    if (rootContainer.fiberCache) rootContainer.fiberCache.setObject(refId, internalHandle);
    return reconciler_assign(reconciler_assign({}, ctx), {
      refId: refId
    });
  },
  appendInitialChild: function appendInitialChild(parent, child) {
    parent.commands.push(['a', {
      p: parent.refId,
      c: child.refId
    }]);
  },
  finalizeInitialChildren: function finalizeInitialChildren() {
    return false;
  },
  commitMount: function commitMount(instance) {},
  shouldSetTextContent: function shouldSetTextContent(type) {
    return textTypes[type];
  },
  // -------------------
  //     Mutation
  // -------------------
  prepareUpdate: function prepareUpdate(instance, type, oldProps, newProps) {
    return diffProperties(oldProps, newProps);
  },
  commitUpdate: function commitUpdate(instance, updatePayload, type) {
    var props = getAllowedProps(updatePayload, type);
    instance.commands.push(['u', reconciler_assign({
      r: instance.refId,
      t: type
    }, convertPropsToSerializable(props))]);
  },
  commitTextUpdate: function commitTextUpdate(textInstance, oldText, newText) {
    textInstance.commands.push(['x', {
      r: textInstance.refId,
      c: newText
    }]);
  },
  appendChild: function appendChild(parent, child) {
    child.commands.push(['a', {
      p: parent.refId,
      c: child.refId
    }]);
  },
  appendChildToContainer: function appendChildToContainer(parent, child) {
    child.commands.push(['a', {
      p: parent.refId,
      c: child.refId
    }]);
  },
  insertBefore: function insertBefore(parent, child, beforeChild) {
    child.commands.push(['i', {
      p: parent.refId,
      c: child.refId,
      i: beforeChild.refId
    }]);
  },
  insertInContainerBefore: function insertInContainerBefore(parent, child, beforeChild) {
    child.commands.push(['i', {
      p: parent.refId,
      c: child.refId,
      i: beforeChild.refId
    }]);
  },
  removeChild: function removeChild(parent, child) {
    child.commands.push(['r', {
      p: parent.refId,
      c: child.refId
    }]);
  },
  removeChildFromContainer: function removeChildFromContainer(parent, child) {
    child.commands.push(['r', {
      p: parent.refId,
      c: child.refId
    }]);
  },
  resetTextContent: function resetTextContent() {},
  preparePortalMount: function preparePortalMount() {},
  detachDeletedInstance: function detachDeletedInstance() {},
  // Required for Suspense
  hideInstance: function hideInstance(instance) {
    instance.commands.push(['h', {
      r: instance.refId,
      h: true
    }]);
  },
  hideTextInstance: function hideTextInstance(instance) {
    instance.commands.push(['h', {
      r: instance.refId,
      h: true
    }]);
  },
  unhideInstance: function unhideInstance(instance) {
    instance.commands.push(['h', {
      r: instance.refId,
      h: false
    }]);
  },
  unhideTextInstance: function unhideTextInstance(instance) {
    instance.commands.push(['h', {
      r: instance.refId,
      h: false
    }]);
  }
});

var asyncReconciler = react_reconciler(hostConfig);
;// CONCATENATED MODULE: ../../renderer/dist/src/renderer/sync/reconciler.js
var sync_reconciler_assign = undefined && undefined.__assign || function () {
  sync_reconciler_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return sync_reconciler_assign.apply(this, arguments);
};




var hostContext = {};
var childContext = {};

var reconciler_hostConfig = sync_reconciler_assign(sync_reconciler_assign({}, commonReconciler), {
  getRootHostContext: function getRootHostContext() {
    return hostContext;
  },
  getChildHostContext: function getChildHostContext() {
    return childContext;
  },
  getPublicInstance: function getPublicInstance(instance) {
    return instance;
  },
  supportsMutation: true,
  supportsHydration: false,
  supportsPersistence: false,
  supportsMicrotasks: true,
  supportsTestSelectors: false,
  isPrimaryRenderer: true,
  warnsIfNotActing: true,
  prepareForCommit: function prepareForCommit() {
    return null;
  },
  resetAfterCommit: function resetAfterCommit() {},
  clearContainer: function clearContainer(container) {
    return UnityBridge.clearContainer(container);
  },
  shouldDeprioritizeSubtree: function shouldDeprioritizeSubtree() {
    return false;
  },
  createInstance: function createInstance(type, props, rootContainerInstance) {
    var aProps = getAllowedProps(props, type);
    var children = aProps.children || null;
    delete aProps.children;
    return UnityBridge.createElement(props.tag || type, children, rootContainerInstance, aProps);
  },
  createTextInstance: function createTextInstance(text, rootContainerInstance) {
    return UnityBridge.createText(text, rootContainerInstance);
  },
  appendInitialChild: function appendInitialChild(parent, child) {
    UnityBridge.appendChild(parent, child);
  },
  finalizeInitialChildren: function finalizeInitialChildren() {
    return false;
  },
  commitMount: function commitMount() {},
  shouldSetTextContent: function shouldSetTextContent(type) {
    return textTypes[type];
  },
  // -------------------
  //     Mutation
  // -------------------
  prepareUpdate: function prepareUpdate(instance, type, oldProps, newProps) {
    return diffProperties(oldProps, newProps);
  },
  commitUpdate: function commitUpdate(instance, updatePayload, type) {
    UnityBridge.applyUpdate(instance, getAllowedProps(updatePayload, type), type);
  },
  commitTextUpdate: function commitTextUpdate(textInstance, oldText, newText) {
    UnityBridge.setText(textInstance, newText);
  },
  appendChild: function appendChild(parent, child) {
    return UnityBridge.appendChild(parent, child);
  },
  appendChildToContainer: function appendChildToContainer(parent, child) {
    return UnityBridge.appendChildToContainer(parent, child);
  },
  insertBefore: function insertBefore(parent, child, beforeChild) {
    return UnityBridge.insertBefore(parent, child, beforeChild);
  },
  insertInContainerBefore: function insertInContainerBefore(parent, child, beforeChild) {
    return UnityBridge.insertBefore(parent, child, beforeChild);
  },
  removeChild: function removeChild(parent, child) {
    return UnityBridge.removeChild(parent, child);
  },
  removeChildFromContainer: function removeChildFromContainer(parent, child) {
    return UnityBridge.removeChild(parent, child);
  },
  resetTextContent: function resetTextContent() {},
  preparePortalMount: function preparePortalMount() {},
  detachDeletedInstance: function detachDeletedInstance() {},
  // Required for Suspense
  hideInstance: function hideInstance(instance) {
    instance.ClassList.Add(hideClass);
  },
  hideTextInstance: function hideTextInstance(instance) {
    instance.ClassList.Add(hideClass);
  },
  unhideInstance: function unhideInstance(instance) {
    instance.ClassList.Remove(hideClass);
  },
  unhideTextInstance: function unhideTextInstance(instance) {
    instance.ClassList.Remove(hideClass);
  }
});

var syncReconciler = react_reconciler(reconciler_hostConfig);
;// CONCATENATED MODULE: ../../renderer/dist/src/renderer/renderer.js








var containerMap = new Map();
var Renderer = {
  render: function render(element, options) {
    if (options === void 0) {
      options = {};
    }

    var hostContainer = (options === null || options === void 0 ? void 0 : options.hostContainer) || HostContainer; // For Jint engine, sync is default
    // For other engines (ClearScript), async is default

    var isAsync = hostContainer.Context.Script.Engine.Key === 'jint' ? (options === null || options === void 0 ? void 0 : options.sync) === false : !(options === null || options === void 0 ? void 0 : options.sync);

    var _a = containerMap.get(hostContainer) || {},
        hostRoot = _a.hostRoot,
        asyncJobCallback = _a.asyncJobCallback;

    var findFiberByHostInstance = function findFiberByHostInstance() {
      return null;
    };

    if (!hostRoot) {
      var mode = (options === null || options === void 0 ? void 0 : options.mode) === 'legacy' ? constants.LegacyRoot : constants.ConcurrentRoot;

      if (isAsync) {
        var fiberCache_1 = isDevelopment ? new ObjectsRepo() : null;

        if (isDevelopment) {
          findFiberByHostInstance = function findFiberByHostInstance(instance) {
            return !instance ? null : fiberCache_1.getObject(instance.refId);
          };
        }

        var scheduled_1 = false;
        var commands_1 = [];

        commands_1.push = function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          if (!scheduled_1) {
            scheduled_1 = true;
            Promise.resolve().then(function () {
              asyncJobCallback();
              scheduled_1 = false;
            });
          }

          return Array.prototype.push.apply(commands_1, args);
        };

        var hostContainerInstance = {
          commands: commands_1,
          component: hostContainer,
          context: hostContainer.Context,
          refId: hostContainer.RefId,
          fiberCache: fiberCache_1
        };

        asyncJobCallback = function asyncJobCallback() {
          if (!commands_1.length) return;
          var serialized = JSON.stringify(commands_1);
          commands_1.length = 0;
          hostContainer.Context.FlushCommands(serialized);
        };

        hostRoot = asyncReconciler.createContainer(hostContainerInstance, mode, false, null);
      } else {
        hostRoot = syncReconciler.createContainer(hostContainer, mode, false, null);
      }

      containerMap.set(hostContainer, {
        hostRoot: hostRoot,
        asyncJobCallback: asyncJobCallback
      });
    }

    var shouldWrapWithHelpers = !(options === null || options === void 0 ? void 0 : options.disableHelpers);

    if (shouldWrapWithHelpers) {
      var viewWrapperProps = {
        withHelpers: !(options === null || options === void 0 ? void 0 : options.disableHelpers)
      };
      element = (0,react.createElement)(DefaultView, viewWrapperProps, element);
    }

    var rc = isAsync ? asyncReconciler : syncReconciler;
    rc.updateContainer(element, hostRoot, null);
    rc.injectIntoDevTools({
      bundleType: isDevelopment ? 1 : 0,
      version: version,
      rendererPackageName: '@reactunity/renderer',
      rendererConfig: {
        isAsync: isAsync
      },
      findFiberByHostInstance: findFiberByHostInstance
    });
    return rc;
  }
};
var isSyncByDefault = HostContainer.Context.Script.Engine.Key === 'jint';
var defaultReconciler = isSyncByDefault ? syncReconciler : asyncReconciler;
var batchedUpdates = defaultReconciler.batchedUpdates;
var flushSync = defaultReconciler.flushSync;
;// CONCATENATED MODULE: ./src/assets/base64Image.txt
/* harmony default export */ const base64Image = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAcElEQVR4AezOsREAIAjFUAs3dgAGYkj8C3g2oBTJXfo3iD419dJ2eOn5EuM6LnsFynQkb4AKQP2zlBOLpAEBAgQIECBAgAA1Au29p6aDrlPBQd3UdJA7yIcUho4KA5UBBxDHk9GwzwdiGQY6gVEwCgC3bcAZ+oXojwAAAABJRU5ErkJggg==\n");
;// CONCATENATED MODULE: ./src/assets/bg.png
const bg_namespaceObject = __webpack_require__.p + "static/media/bg.png";
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(6062);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(4036);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(6793);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(7892);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(1173);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(2464);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[6].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[6].use[2]!../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[0].oneOf[6].use[3]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[6].use[4]!./src/uitoolkit/index.module.scss
var index_module = __webpack_require__(7635);
;// CONCATENATED MODULE: ./src/uitoolkit/index.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(index_module/* default */.Z, options);




       /* harmony default export */ const uitoolkit_index_module = (index_module/* default */.Z && index_module/* default.locals */.Z.locals ? index_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/uitoolkit/index.tsx
var webImage='https://www.google.com.tr/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';function App(){return/*#__PURE__*/(0,jsx_runtime.jsx)("scroll",{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("view",{className:uitoolkit_index_module.app,children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h1",{children:"React Unity Showcase"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{children:"Button"}),/*#__PURE__*/(0,jsx_runtime.jsx)("button",{className:uitoolkit_index_module.clickButton,children:"Click"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{children:"Anchor"}),/*#__PURE__*/(0,jsx_runtime.jsx)("anchor",{url:"https://www.google.com",children:"Open Google"})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{children:"Input"}),/*#__PURE__*/(0,jsx_runtime.jsx)("input",{})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{children:"Toggle"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("row",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("toggle",{}),"Toggle"]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("section",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{children:"Image"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("row",{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("image",{source:bg_namespaceObject}),/*#__PURE__*/(0,jsx_runtime.jsx)("image",{source:base64Image}),/*#__PURE__*/(0,jsx_runtime.jsx)("image",{source:webImage})]})]})]})});};Renderer.render(/*#__PURE__*/(0,jsx_runtime.jsx)(App,{}));
;// CONCATENATED MODULE: ./src/entry/uitoolkit.tsx

})();

/******/ })()
;