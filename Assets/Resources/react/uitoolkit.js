/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ "../../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "../../node_modules/react-reconciler/cjs/react-reconciler-constants.production.min.js":
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

/***/ "../../node_modules/react-reconciler/cjs/react-reconciler.production.min.js":
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
  var aa = __webpack_require__("../../node_modules/react/index.js"),
    ba = __webpack_require__("../../node_modules/scheduler/index.js"),
    ca = Object.assign;
  function n(a) {
    for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
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
    if (a.alternate) for (; b["return"];) b = b["return"];else {
      a = b;
      do b = a, 0 !== (b.flags & 4098) && (c = b["return"]), a = b["return"]; while (a);
    }
    return 3 === b.tag ? c : null;
  }
  function xa(a) {
    if (wa(a) !== a) throw Error(n(188));
  }
  function za(a) {
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
    a = za(a);
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
    Lb = $$$hostConfig.getSuspenseInstanceFallbackErrorDetails,
    Mb = $$$hostConfig.registerSuspenseInstanceRetry,
    Nb = $$$hostConfig.getNextHydratableSibling,
    Ob = $$$hostConfig.getFirstHydratableChild,
    Pb = $$$hostConfig.getFirstHydratableChildWithinContainer,
    Qb = $$$hostConfig.getFirstHydratableChildWithinSuspenseInstance,
    Rb = $$$hostConfig.hydrateInstance,
    Sb = $$$hostConfig.hydrateTextInstance,
    Tb = $$$hostConfig.hydrateSuspenseInstance,
    Ub = $$$hostConfig.getNextHydratableInstanceAfterSuspenseInstance,
    Vb = $$$hostConfig.commitHydratedContainer,
    Wb = $$$hostConfig.commitHydratedSuspenseInstance,
    Xb = $$$hostConfig.clearSuspenseBoundary,
    Yb = $$$hostConfig.clearSuspenseBoundaryFromContainer,
    Zb = $$$hostConfig.shouldDeleteUnhydratedTailInstances,
    $b = $$$hostConfig.didNotMatchHydratedContainerTextInstance,
    ac = $$$hostConfig.didNotMatchHydratedTextInstance,
    bc;
  function cc(a) {
    if (void 0 === bc) try {
      throw Error();
    } catch (c) {
      var b = c.stack.trim().match(/\n( *(at )?)/);
      bc = b && b[1] || "";
    }
    return "\n" + bc + a;
  }
  var dc = !1;
  function ec(a, b) {
    if (!a || dc) return "";
    dc = !0;
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
        for (var e = l.stack.split("\n"), f = d.stack.split("\n"), g = e.length - 1, h = f.length - 1; 1 <= g && 0 <= h && e[g] !== f[h];) h--;
        for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f[h]) {
          if (1 !== g || 1 !== h) {
            do if (g--, h--, 0 > h || e[g] !== f[h]) {
              var k = "\n" + e[g].replace(" at new ", " at ");
              a.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a.displayName));
              return k;
            } while (1 <= g && 0 <= h);
          }
          break;
        }
      }
    } finally {
      dc = !1, Error.prepareStackTrace = c;
    }
    return (a = a ? a.displayName || a.name : "") ? cc(a) : "";
  }
  var fc = Object.prototype.hasOwnProperty,
    gc = [],
    hc = -1;
  function ic(a) {
    return {
      current: a
    };
  }
  function q(a) {
    0 > hc || (a.current = gc[hc], gc[hc] = null, hc--);
  }
  function v(a, b) {
    hc++;
    gc[hc] = a.current;
    a.current = b;
  }
  var jc = {},
    x = ic(jc),
    z = ic(!1),
    kc = jc;
  function mc(a, b) {
    var c = a.type.contextTypes;
    if (!c) return jc;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
    var e = {},
      f;
    for (f in c) e[f] = b[f];
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
    return e;
  }
  function A(a) {
    a = a.childContextTypes;
    return null !== a && void 0 !== a;
  }
  function nc() {
    q(z);
    q(x);
  }
  function oc(a, b, c) {
    if (x.current !== jc) throw Error(n(168));
    v(x, b);
    v(z, c);
  }
  function pc(a, b, c) {
    var d = a.stateNode;
    b = b.childContextTypes;
    if ("function" !== typeof d.getChildContext) return c;
    d = d.getChildContext();
    for (var e in d) if (!(e in b)) throw Error(n(108, va(a) || "Unknown", e));
    return ca({}, c, d);
  }
  function qc(a) {
    a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || jc;
    kc = x.current;
    v(x, a);
    v(z, z.current);
    return !0;
  }
  function rc(a, b, c) {
    var d = a.stateNode;
    if (!d) throw Error(n(169));
    c ? (a = pc(a, b, kc), d.__reactInternalMemoizedMergedChildContext = a, q(z), q(x), v(x, a)) : q(z);
    v(z, c);
  }
  var tc = Math.clz32 ? Math.clz32 : sc,
    uc = Math.log,
    vc = Math.LN2;
  function sc(a) {
    a >>>= 0;
    return 0 === a ? 32 : 31 - (uc(a) / vc | 0) | 0;
  }
  var wc = 64,
    xc = 4194304;
  function yc(a) {
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
  function zc(a, b) {
    var c = a.pendingLanes;
    if (0 === c) return 0;
    var d = 0,
      e = a.suspendedLanes,
      f = a.pingedLanes,
      g = c & 268435455;
    if (0 !== g) {
      var h = g & ~e;
      0 !== h ? d = yc(h) : (f &= g, 0 !== f && (d = yc(f)));
    } else g = c & ~e, 0 !== g ? d = yc(g) : 0 !== f && (d = yc(f));
    if (0 === d) return 0;
    if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f = b & -b, e >= f || 16 === e && 0 !== (f & 4194240))) return b;
    0 !== (d & 4) && (d |= c & 16);
    b = a.entangledLanes;
    if (0 !== b) for (a = a.entanglements, b &= d; 0 < b;) c = 31 - tc(b), e = 1 << c, d |= a[c], b &= ~e;
    return d;
  }
  function Ac(a, b) {
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
  function Bc(a, b) {
    for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f = a.pendingLanes; 0 < f;) {
      var g = 31 - tc(f),
        h = 1 << g,
        k = e[g];
      if (-1 === k) {
        if (0 === (h & c) || 0 !== (h & d)) e[g] = Ac(h, b);
      } else k <= b && (a.expiredLanes |= h);
      f &= ~h;
    }
  }
  function Cc(a) {
    a = a.pendingLanes & -1073741825;
    return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
  }
  function Dc() {
    var a = wc;
    wc <<= 1;
    0 === (wc & 4194240) && (wc = 64);
    return a;
  }
  function Ec(a) {
    for (var b = [], c = 0; 31 > c; c++) b.push(a);
    return b;
  }
  function Fc(a, b, c) {
    a.pendingLanes |= b;
    536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
    a = a.eventTimes;
    b = 31 - tc(b);
    a[b] = c;
  }
  function Gc(a, b) {
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
      var e = 31 - tc(c),
        f = 1 << e;
      b[e] = 0;
      d[e] = -1;
      a[e] = -1;
      c &= ~f;
    }
  }
  function Hc(a, b) {
    var c = a.entangledLanes |= b;
    for (a = a.entanglements; c;) {
      var d = 31 - tc(c),
        e = 1 << d;
      e & b | a[d] & b && (a[d] |= b);
      c &= ~e;
    }
  }
  var C = 0;
  function Ic(a) {
    a &= -a;
    return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
  }
  var Jc = ba.unstable_scheduleCallback,
    Kc = ba.unstable_cancelCallback,
    Lc = ba.unstable_shouldYield,
    Mc = ba.unstable_requestPaint,
    D = ba.unstable_now,
    Nc = ba.unstable_ImmediatePriority,
    Oc = ba.unstable_UserBlockingPriority,
    Pc = ba.unstable_NormalPriority,
    Qc = ba.unstable_IdlePriority,
    Rc = null,
    Sc = null;
  function Tc(a) {
    if (Sc && "function" === typeof Sc.onCommitFiberRoot) try {
      Sc.onCommitFiberRoot(Rc, a, void 0, 128 === (a.current.flags & 128));
    } catch (b) {}
  }
  function Uc(a, b) {
    return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
  }
  var Vc = "function" === typeof Object.is ? Object.is : Uc,
    Wc = null,
    Xc = !1,
    Yc = !1;
  function Zc(a) {
    null === Wc ? Wc = [a] : Wc.push(a);
  }
  function $c(a) {
    Xc = !0;
    Zc(a);
  }
  function ad() {
    if (!Yc && null !== Wc) {
      Yc = !0;
      var a = 0,
        b = C;
      try {
        var c = Wc;
        for (C = 1; a < c.length; a++) {
          var d = c[a];
          do d = d(!0); while (null !== d);
        }
        Wc = null;
        Xc = !1;
      } catch (e) {
        throw null !== Wc && (Wc = Wc.slice(a + 1)), Jc(Nc, ad), e;
      } finally {
        C = b, Yc = !1;
      }
    }
    return null;
  }
  var bd = [],
    cd = 0,
    dd = null,
    ed = 0,
    fd = [],
    gd = 0,
    hd = null,
    id = 1,
    jd = "";
  function kd(a, b) {
    bd[cd++] = ed;
    bd[cd++] = dd;
    dd = a;
    ed = b;
  }
  function ld(a, b, c) {
    fd[gd++] = id;
    fd[gd++] = jd;
    fd[gd++] = hd;
    hd = a;
    var d = id;
    a = jd;
    var e = 32 - tc(d) - 1;
    d &= ~(1 << e);
    c += 1;
    var f = 32 - tc(b) + e;
    if (30 < f) {
      var g = e - e % 5;
      f = (d & (1 << g) - 1).toString(32);
      d >>= g;
      e -= g;
      id = 1 << 32 - tc(b) + e | c << e | d;
      jd = f + a;
    } else id = 1 << f | c << e | d, jd = a;
  }
  function md(a) {
    null !== a["return"] && (kd(a, 1), ld(a, 1, 0));
  }
  function nd(a) {
    for (; a === dd;) dd = bd[--cd], bd[cd] = null, ed = bd[--cd], bd[cd] = null;
    for (; a === hd;) hd = fd[--gd], fd[gd] = null, jd = fd[--gd], fd[gd] = null, id = fd[--gd], fd[gd] = null;
  }
  var od = null,
    pd = null,
    F = !1,
    qd = !1,
    rd = null;
  function sd(a, b) {
    var c = td(5, null, null, 0);
    c.elementType = "DELETED";
    c.stateNode = b;
    c["return"] = a;
    b = a.deletions;
    null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
  }
  function ud(a, b) {
    switch (a.tag) {
      case 5:
        return b = Gb(b, a.type, a.pendingProps), null !== b ? (a.stateNode = b, od = a, pd = Ob(b), !0) : !1;
      case 6:
        return b = Hb(b, a.pendingProps), null !== b ? (a.stateNode = b, od = a, pd = null, !0) : !1;
      case 13:
        b = Ib(b);
        if (null !== b) {
          var c = null !== hd ? {
            id: id,
            overflow: jd
          } : null;
          a.memoizedState = {
            dehydrated: b,
            treeContext: c,
            retryLane: 1073741824
          };
          c = td(18, null, null, 0);
          c.stateNode = b;
          c["return"] = a;
          a.child = c;
          od = a;
          pd = null;
          return !0;
        }
        return !1;
      default:
        return !1;
    }
  }
  function vd(a) {
    return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
  }
  function wd(a) {
    if (F) {
      var b = pd;
      if (b) {
        var c = b;
        if (!ud(a, b)) {
          if (vd(a)) throw Error(n(418));
          b = Nb(c);
          var d = od;
          b && ud(a, b) ? sd(d, c) : (a.flags = a.flags & -4097 | 2, F = !1, od = a);
        }
      } else {
        if (vd(a)) throw Error(n(418));
        a.flags = a.flags & -4097 | 2;
        F = !1;
        od = a;
      }
    }
  }
  function xd(a) {
    for (a = a["return"]; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;) a = a["return"];
    od = a;
  }
  function yd(a) {
    if (!Va || a !== od) return !1;
    if (!F) return xd(a), F = !0, !1;
    if (3 !== a.tag && (5 !== a.tag || Zb(a.type) && !Na(a.type, a.memoizedProps))) {
      var b = pd;
      if (b) {
        if (vd(a)) throw zd(), Error(n(418));
        for (; b;) sd(a, b), b = Nb(b);
      }
    }
    xd(a);
    if (13 === a.tag) {
      if (!Va) throw Error(n(316));
      a = a.memoizedState;
      a = null !== a ? a.dehydrated : null;
      if (!a) throw Error(n(317));
      pd = Ub(a);
    } else pd = od ? Nb(a.stateNode) : null;
    return !0;
  }
  function zd() {
    for (var a = pd; a;) a = Nb(a);
  }
  function Ad() {
    Va && (pd = od = null, qd = F = !1);
  }
  function Bd(a) {
    null === rd ? rd = [a] : rd.push(a);
  }
  var Cd = da.ReactCurrentBatchConfig;
  function Dd(a, b) {
    if (Vc(a, b)) return !0;
    if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return !1;
    var c = Object.keys(a),
      d = Object.keys(b);
    if (c.length !== d.length) return !1;
    for (d = 0; d < c.length; d++) {
      var e = c[d];
      if (!fc.call(b, e) || !Vc(a[e], b[e])) return !1;
    }
    return !0;
  }
  function Ed(a) {
    switch (a.tag) {
      case 5:
        return cc(a.type);
      case 16:
        return cc("Lazy");
      case 13:
        return cc("Suspense");
      case 19:
        return cc("SuspenseList");
      case 0:
      case 2:
      case 15:
        return a = ec(a.type, !1), a;
      case 11:
        return a = ec(a.type.render, !1), a;
      case 1:
        return a = ec(a.type, !0), a;
      default:
        return "";
    }
  }
  function Fd(a, b, c) {
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
  function Gd(a, b) {
    a = Object.prototype.toString.call(b);
    throw Error(n(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
  }
  function Hd(a) {
    var b = a._init;
    return b(a._payload);
  }
  function Id(a) {
    function b(b, c) {
      if (a) {
        var d = b.deletions;
        null === d ? (b.deletions = [c], b.flags |= 16) : d.push(c);
      }
    }
    function c(c, d) {
      if (!a) return null;
      for (; null !== d;) b(c, d), d = d.sibling;
      return null;
    }
    function d(a, b) {
      for (a = new Map(); null !== b;) null !== b.key ? a.set(b.key, b) : a.set(b.index, b), b = b.sibling;
      return a;
    }
    function e(a, b) {
      a = Jd(a, b);
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
      if (null === b || 6 !== b.tag) return b = Kd(c, a.mode, d), b["return"] = a, b;
      b = e(b, c);
      b["return"] = a;
      return b;
    }
    function k(a, b, c, d) {
      var f = c.type;
      if (f === ha) return m(a, b, c.props.children, d, c.key);
      if (null !== b && (b.elementType === f || "object" === typeof f && null !== f && f.$$typeof === qa && Hd(f) === b.type)) return d = e(b, c.props), d.ref = Fd(a, b, c), d["return"] = a, d;
      d = Ld(c.type, c.key, c.props, null, a.mode, d);
      d.ref = Fd(a, b, c);
      d["return"] = a;
      return d;
    }
    function l(a, b, c, d) {
      if (null === b || 4 !== b.tag || b.stateNode.containerInfo !== c.containerInfo || b.stateNode.implementation !== c.implementation) return b = Md(c, a.mode, d), b["return"] = a, b;
      b = e(b, c.children || []);
      b["return"] = a;
      return b;
    }
    function m(a, b, c, d, f) {
      if (null === b || 7 !== b.tag) return b = Nd(c, a.mode, d, f), b["return"] = a, b;
      b = e(b, c);
      b["return"] = a;
      return b;
    }
    function r(a, b, c) {
      if ("string" === typeof b && "" !== b || "number" === typeof b) return b = Kd("" + b, a.mode, c), b["return"] = a, b;
      if ("object" === typeof b && null !== b) {
        switch (b.$$typeof) {
          case ea:
            return c = Ld(b.type, b.key, b.props, null, a.mode, c), c.ref = Fd(a, null, b), c["return"] = a, c;
          case fa:
            return b = Md(b, a.mode, c), b["return"] = a, b;
          case qa:
            var d = b._init;
            return r(a, d(b._payload), c);
        }
        if (Da(b) || ta(b)) return b = Nd(b, a.mode, c, null), b["return"] = a, b;
        Gd(a, b);
      }
      return null;
    }
    function p(a, b, c, d) {
      var e = null !== b ? b.key : null;
      if ("string" === typeof c && "" !== c || "number" === typeof c) return null !== e ? null : h(a, b, "" + c, d);
      if ("object" === typeof c && null !== c) {
        switch (c.$$typeof) {
          case ea:
            return c.key === e ? k(a, b, c, d) : null;
          case fa:
            return c.key === e ? l(a, b, c, d) : null;
          case qa:
            return e = c._init, p(a, b, e(c._payload), d);
        }
        if (Da(c) || ta(c)) return null !== e ? null : m(a, b, c, d, null);
        Gd(a, c);
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
        Gd(b, d);
      }
      return null;
    }
    function w(e, g, h, k) {
      for (var l = null, m = null, u = g, t = g = 0, E = null; null !== u && t < h.length; t++) {
        u.index > t ? (E = u, u = null) : E = u.sibling;
        var y = p(e, u, h[t], k);
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
      if (t === h.length) return c(e, u), F && kd(e, t), l;
      if (null === u) {
        for (; t < h.length; t++) u = r(e, h[t], k), null !== u && (g = f(u, g, t), null === m ? l = u : m.sibling = u, m = u);
        F && kd(e, t);
        return l;
      }
      for (u = d(e, u); t < h.length; t++) E = B(u, e, t, h[t], k), null !== E && (a && null !== E.alternate && u["delete"](null === E.key ? t : E.key), g = f(E, g, t), null === m ? l = E : m.sibling = E, m = E);
      a && u.forEach(function (a) {
        return b(e, a);
      });
      F && kd(e, t);
      return l;
    }
    function Y(e, g, h, k) {
      var l = ta(h);
      if ("function" !== typeof l) throw Error(n(150));
      h = l.call(h);
      if (null == h) throw Error(n(151));
      for (var u = l = null, m = g, t = g = 0, E = null, y = h.next(); null !== m && !y.done; t++, y = h.next()) {
        m.index > t ? (E = m, m = null) : E = m.sibling;
        var w = p(e, m, y.value, k);
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
      if (y.done) return c(e, m), F && kd(e, t), l;
      if (null === m) {
        for (; !y.done; t++, y = h.next()) y = r(e, y.value, k), null !== y && (g = f(y, g, t), null === u ? l = y : u.sibling = y, u = y);
        F && kd(e, t);
        return l;
      }
      for (m = d(e, m); !y.done; t++, y = h.next()) y = B(m, e, t, y.value, k), null !== y && (a && null !== y.alternate && m["delete"](null === y.key ? t : y.key), g = f(y, g, t), null === u ? l = y : u.sibling = y, u = y);
      a && m.forEach(function (a) {
        return b(e, a);
      });
      F && kd(e, t);
      return l;
    }
    function ya(a, d, f, h) {
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
                  } else if (l.elementType === k || "object" === typeof k && null !== k && k.$$typeof === qa && Hd(k) === l.type) {
                    c(a, l.sibling);
                    d = e(l, f.props);
                    d.ref = Fd(a, l, f);
                    d["return"] = a;
                    a = d;
                    break a;
                  }
                  c(a, l);
                  break;
                } else b(a, l);
                l = l.sibling;
              }
              f.type === ha ? (d = Nd(f.props.children, a.mode, h, f.key), d["return"] = a, a = d) : (h = Ld(f.type, f.key, f.props, null, a.mode, h), h.ref = Fd(a, d, f), h["return"] = a, a = h);
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
              d = Md(f, a.mode, h);
              d["return"] = a;
              a = d;
            }
            return g(a);
          case qa:
            return l = f._init, ya(a, d, l(f._payload), h);
        }
        if (Da(f)) return w(a, d, f, h);
        if (ta(f)) return Y(a, d, f, h);
        Gd(a, f);
      }
      return "string" === typeof f && "" !== f || "number" === typeof f ? (f = "" + f, null !== d && 6 === d.tag ? (c(a, d.sibling), d = e(d, f), d["return"] = a, a = d) : (c(a, d), d = Kd(f, a.mode, h), d["return"] = a, a = d), g(a)) : c(a, d);
    }
    return ya;
  }
  var Od = Id(!0),
    Pd = Id(!1),
    Qd = ic(null),
    Rd = null,
    Sd = null,
    Td = null;
  function Ud() {
    Td = Sd = Rd = null;
  }
  function Vd(a, b, c) {
    Sa ? (v(Qd, b._currentValue), b._currentValue = c) : (v(Qd, b._currentValue2), b._currentValue2 = c);
  }
  function Wd(a) {
    var b = Qd.current;
    q(Qd);
    Sa ? a._currentValue = b : a._currentValue2 = b;
  }
  function Xd(a, b, c) {
    for (; null !== a;) {
      var d = a.alternate;
      (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
      if (a === c) break;
      a = a["return"];
    }
  }
  function Yd(a, b) {
    Rd = a;
    Td = Sd = null;
    a = a.dependencies;
    null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (G = !0), a.firstContext = null);
  }
  function Zd(a) {
    var b = Sa ? a._currentValue : a._currentValue2;
    if (Td !== a) if (a = {
      context: a,
      memoizedValue: b,
      next: null
    }, null === Sd) {
      if (null === Rd) throw Error(n(308));
      Sd = a;
      Rd.dependencies = {
        lanes: 0,
        firstContext: a
      };
    } else Sd = Sd.next = a;
    return b;
  }
  var $d = null;
  function ae(a) {
    null === $d ? $d = [a] : $d.push(a);
  }
  function be(a, b, c, d) {
    var e = b.interleaved;
    null === e ? (c.next = c, ae(b)) : (c.next = e.next, e.next = c);
    b.interleaved = c;
    return ce(a, d);
  }
  function ce(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    null !== c && (c.lanes |= b);
    c = a;
    for (a = a["return"]; null !== a;) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a["return"];
    return 3 === c.tag ? c.stateNode : null;
  }
  var de = !1;
  function ee(a) {
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
  function fe(a, b) {
    a = a.updateQueue;
    b.updateQueue === a && (b.updateQueue = {
      baseState: a.baseState,
      firstBaseUpdate: a.firstBaseUpdate,
      lastBaseUpdate: a.lastBaseUpdate,
      shared: a.shared,
      effects: a.effects
    });
  }
  function ge(a, b) {
    return {
      eventTime: a,
      lane: b,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function he(a, b, c) {
    var d = a.updateQueue;
    if (null === d) return null;
    d = d.shared;
    if (0 !== (H & 2)) {
      var e = d.pending;
      null === e ? b.next = b : (b.next = e.next, e.next = b);
      d.pending = b;
      return ce(a, c);
    }
    e = d.interleaved;
    null === e ? (b.next = b, ae(d)) : (b.next = e.next, e.next = b);
    d.interleaved = b;
    return ce(a, c);
  }
  function ie(a, b, c) {
    b = b.updateQueue;
    if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
      var d = b.lanes;
      d &= a.pendingLanes;
      c |= d;
      b.lanes = c;
      Hc(a, c);
    }
  }
  function je(a, b) {
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
  function ke(a, b, c, d) {
    var e = a.updateQueue;
    de = !1;
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
        var p = h.lane,
          B = h.eventTime;
        if ((d & p) === p) {
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
              Y = h;
            p = b;
            B = c;
            switch (Y.tag) {
              case 1:
                w = Y.payload;
                if ("function" === typeof w) {
                  r = w.call(B, r, p);
                  break a;
                }
                r = w;
                break a;
              case 3:
                w.flags = w.flags & -65537 | 128;
              case 0:
                w = Y.payload;
                p = "function" === typeof w ? w.call(B, r, p) : w;
                if (null === p || void 0 === p) break a;
                r = ca({}, r, p);
                break a;
              case 2:
                de = !0;
            }
          }
          null !== h.callback && 0 !== h.lane && (a.flags |= 64, p = e.effects, null === p ? e.effects = [h] : p.push(h));
        } else B = {
          eventTime: B,
          lane: p,
          tag: h.tag,
          payload: h.payload,
          callback: h.callback,
          next: null
        }, null === m ? (l = m = B, k = r) : m = m.next = B, g |= p;
        h = h.next;
        if (null === h) if (h = e.shared.pending, null === h) break;else p = h, h = p.next, p.next = null, e.lastBaseUpdate = p, e.shared.pending = null;
      } while (1);
      null === m && (k = r);
      e.baseState = k;
      e.firstBaseUpdate = l;
      e.lastBaseUpdate = m;
      b = e.shared.interleaved;
      if (null !== b) {
        e = b;
        do g |= e.lane, e = e.next; while (e !== b);
      } else null === f && (e.shared.lanes = 0);
      le |= g;
      a.lanes = g;
      a.memoizedState = r;
    }
  }
  function me(a, b, c) {
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
  var ne = {},
    oe = ic(ne),
    pe = ic(ne),
    qe = ic(ne);
  function re(a) {
    if (a === ne) throw Error(n(174));
    return a;
  }
  function se(a, b) {
    v(qe, b);
    v(pe, a);
    v(oe, ne);
    a = Fa(b);
    q(oe);
    v(oe, a);
  }
  function te() {
    q(oe);
    q(pe);
    q(qe);
  }
  function ue(a) {
    var b = re(qe.current),
      c = re(oe.current);
    b = Ga(c, a.type, b);
    c !== b && (v(pe, a), v(oe, b));
  }
  function ve(a) {
    pe.current === a && (q(oe), q(pe));
  }
  var I = ic(0);
  function we(a) {
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
  var xe = [];
  function ye() {
    for (var a = 0; a < xe.length; a++) {
      var b = xe[a];
      Sa ? b._workInProgressVersionPrimary = null : b._workInProgressVersionSecondary = null;
    }
    xe.length = 0;
  }
  var ze = da.ReactCurrentDispatcher,
    Ae = da.ReactCurrentBatchConfig,
    Be = 0,
    J = null,
    K = null,
    L = null,
    Ce = !1,
    De = !1,
    Ee = 0,
    Fe = 0;
  function M() {
    throw Error(n(321));
  }
  function Ge(a, b) {
    if (null === b) return !1;
    for (var c = 0; c < b.length && c < a.length; c++) if (!Vc(a[c], b[c])) return !1;
    return !0;
  }
  function He(a, b, c, d, e, f) {
    Be = f;
    J = b;
    b.memoizedState = null;
    b.updateQueue = null;
    b.lanes = 0;
    ze.current = null === a || null === a.memoizedState ? Ie : Je;
    a = c(d, e);
    if (De) {
      f = 0;
      do {
        De = !1;
        Ee = 0;
        if (25 <= f) throw Error(n(301));
        f += 1;
        L = K = null;
        b.updateQueue = null;
        ze.current = Ke;
        a = c(d, e);
      } while (De);
    }
    ze.current = Le;
    b = null !== K && null !== K.next;
    Be = 0;
    L = K = J = null;
    Ce = !1;
    if (b) throw Error(n(300));
    return a;
  }
  function Me() {
    var a = 0 !== Ee;
    Ee = 0;
    return a;
  }
  function Ne() {
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
  function Oe() {
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
  function Pe(a, b) {
    return "function" === typeof b ? b(a) : b;
  }
  function Qe(a) {
    var b = Oe(),
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
        if ((Be & m) === m) null !== k && (k = k.next = {
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
          le |= m;
        }
        l = l.next;
      } while (null !== l && l !== f);
      null === k ? g = d : k.next = h;
      Vc(d, b.memoizedState) || (G = !0);
      b.memoizedState = d;
      b.baseState = g;
      b.baseQueue = k;
      c.lastRenderedState = d;
    }
    a = c.interleaved;
    if (null !== a) {
      e = a;
      do f = e.lane, J.lanes |= f, le |= f, e = e.next; while (e !== a);
    } else null === e && (c.lanes = 0);
    return [b.memoizedState, c.dispatch];
  }
  function Re(a) {
    var b = Oe(),
      c = b.queue;
    if (null === c) throw Error(n(311));
    c.lastRenderedReducer = a;
    var d = c.dispatch,
      e = c.pending,
      f = b.memoizedState;
    if (null !== e) {
      c.pending = null;
      var g = e = e.next;
      do f = a(f, g.action), g = g.next; while (g !== e);
      Vc(f, b.memoizedState) || (G = !0);
      b.memoizedState = f;
      null === b.baseQueue && (b.baseState = f);
      c.lastRenderedState = f;
    }
    return [f, d];
  }
  function Se() {}
  function Te(a, b) {
    var c = J,
      d = Oe(),
      e = b(),
      f = !Vc(d.memoizedState, e);
    f && (d.memoizedState = e, G = !0);
    d = d.queue;
    Ue(Ve.bind(null, c, d, a), [a]);
    if (d.getSnapshot !== b || f || null !== L && L.memoizedState.tag & 1) {
      c.flags |= 2048;
      We(9, Xe.bind(null, c, d, e, b), void 0, null);
      if (null === N) throw Error(n(349));
      0 !== (Be & 30) || Ye(c, b, e);
    }
    return e;
  }
  function Ye(a, b, c) {
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
  function Xe(a, b, c, d) {
    b.value = c;
    b.getSnapshot = d;
    Ze(b) && $e(a);
  }
  function Ve(a, b, c) {
    return c(function () {
      Ze(b) && $e(a);
    });
  }
  function Ze(a) {
    var b = a.getSnapshot;
    a = a.value;
    try {
      var c = b();
      return !Vc(a, c);
    } catch (d) {
      return !0;
    }
  }
  function $e(a) {
    var b = ce(a, 1);
    null !== b && af(b, a, 1, -1);
  }
  function bf(a) {
    var b = Ne();
    "function" === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Pe,
      lastRenderedState: a
    };
    b.queue = a;
    a = a.dispatch = cf.bind(null, J, a);
    return [b.memoizedState, a];
  }
  function We(a, b, c, d) {
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
  function df() {
    return Oe().memoizedState;
  }
  function ef(a, b, c, d) {
    var e = Ne();
    J.flags |= a;
    e.memoizedState = We(1 | b, c, void 0, void 0 === d ? null : d);
  }
  function ff(a, b, c, d) {
    var e = Oe();
    d = void 0 === d ? null : d;
    var f = void 0;
    if (null !== K) {
      var g = K.memoizedState;
      f = g.destroy;
      if (null !== d && Ge(d, g.deps)) {
        e.memoizedState = We(b, c, f, d);
        return;
      }
    }
    J.flags |= a;
    e.memoizedState = We(1 | b, c, f, d);
  }
  function gf(a, b) {
    return ef(8390656, 8, a, b);
  }
  function Ue(a, b) {
    return ff(2048, 8, a, b);
  }
  function hf(a, b) {
    return ff(4, 2, a, b);
  }
  function jf(a, b) {
    return ff(4, 4, a, b);
  }
  function kf(a, b) {
    if ("function" === typeof b) return a = a(), b(a), function () {
      b(null);
    };
    if (null !== b && void 0 !== b) return a = a(), b.current = a, function () {
      b.current = null;
    };
  }
  function lf(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return ff(4, 4, kf.bind(null, b, a), c);
  }
  function mf() {}
  function nf(a, b) {
    var c = Oe();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Ge(b, d[1])) return d[0];
    c.memoizedState = [a, b];
    return a;
  }
  function of(a, b) {
    var c = Oe();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Ge(b, d[1])) return d[0];
    a = a();
    c.memoizedState = [a, b];
    return a;
  }
  function pf(a, b, c) {
    if (0 === (Be & 21)) return a.baseState && (a.baseState = !1, G = !0), a.memoizedState = c;
    Vc(c, b) || (c = Dc(), J.lanes |= c, le |= c, a.baseState = !0);
    return b;
  }
  function qf(a, b) {
    var c = C;
    C = 0 !== c && 4 > c ? c : 4;
    a(!0);
    var d = Ae.transition;
    Ae.transition = {};
    try {
      a(!1), b();
    } finally {
      C = c, Ae.transition = d;
    }
  }
  function rf() {
    return Oe().memoizedState;
  }
  function sf(a, b, c) {
    var d = tf(a);
    c = {
      lane: d,
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (uf(a)) vf(b, c);else if (c = be(a, b, c, d), null !== c) {
      var e = O();
      af(c, a, d, e);
      wf(c, b, d);
    }
  }
  function cf(a, b, c) {
    var d = tf(a),
      e = {
        lane: d,
        action: c,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
    if (uf(a)) vf(b, e);else {
      var f = a.alternate;
      if (0 === a.lanes && (null === f || 0 === f.lanes) && (f = b.lastRenderedReducer, null !== f)) try {
        var g = b.lastRenderedState,
          h = f(g, c);
        e.hasEagerState = !0;
        e.eagerState = h;
        if (Vc(h, g)) {
          var k = b.interleaved;
          null === k ? (e.next = e, ae(b)) : (e.next = k.next, k.next = e);
          b.interleaved = e;
          return;
        }
      } catch (l) {} finally {}
      c = be(a, b, e, d);
      null !== c && (e = O(), af(c, a, d, e), wf(c, b, d));
    }
  }
  function uf(a) {
    var b = a.alternate;
    return a === J || null !== b && b === J;
  }
  function vf(a, b) {
    De = Ce = !0;
    var c = a.pending;
    null === c ? b.next = b : (b.next = c.next, c.next = b);
    a.pending = b;
  }
  function wf(a, b, c) {
    if (0 !== (c & 4194240)) {
      var d = b.lanes;
      d &= a.pendingLanes;
      c |= d;
      b.lanes = c;
      Hc(a, c);
    }
  }
  var Le = {
      readContext: Zd,
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
    Ie = {
      readContext: Zd,
      useCallback: function useCallback(a, b) {
        Ne().memoizedState = [a, void 0 === b ? null : b];
        return a;
      },
      useContext: Zd,
      useEffect: gf,
      useImperativeHandle: function useImperativeHandle(a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return ef(4194308, 4, kf.bind(null, b, a), c);
      },
      useLayoutEffect: function useLayoutEffect(a, b) {
        return ef(4194308, 4, a, b);
      },
      useInsertionEffect: function useInsertionEffect(a, b) {
        return ef(4, 2, a, b);
      },
      useMemo: function useMemo(a, b) {
        var c = Ne();
        b = void 0 === b ? null : b;
        a = a();
        c.memoizedState = [a, b];
        return a;
      },
      useReducer: function useReducer(a, b, c) {
        var d = Ne();
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
        a = a.dispatch = sf.bind(null, J, a);
        return [d.memoizedState, a];
      },
      useRef: function useRef(a) {
        var b = Ne();
        a = {
          current: a
        };
        return b.memoizedState = a;
      },
      useState: bf,
      useDebugValue: mf,
      useDeferredValue: function useDeferredValue(a) {
        return Ne().memoizedState = a;
      },
      useTransition: function useTransition() {
        var a = bf(!1),
          b = a[0];
        a = qf.bind(null, a[1]);
        Ne().memoizedState = a;
        return [b, a];
      },
      useMutableSource: function useMutableSource() {},
      useSyncExternalStore: function useSyncExternalStore(a, b, c) {
        var d = J,
          e = Ne();
        if (F) {
          if (void 0 === c) throw Error(n(407));
          c = c();
        } else {
          c = b();
          if (null === N) throw Error(n(349));
          0 !== (Be & 30) || Ye(d, b, c);
        }
        e.memoizedState = c;
        var f = {
          value: c,
          getSnapshot: b
        };
        e.queue = f;
        gf(Ve.bind(null, d, f, a), [a]);
        d.flags |= 2048;
        We(9, Xe.bind(null, d, f, c, b), void 0, null);
        return c;
      },
      useId: function useId() {
        var a = Ne(),
          b = N.identifierPrefix;
        if (F) {
          var c = jd;
          var d = id;
          c = (d & ~(1 << 32 - tc(d) - 1)).toString(32) + c;
          b = ":" + b + "R" + c;
          c = Ee++;
          0 < c && (b += "H" + c.toString(32));
          b += ":";
        } else c = Fe++, b = ":" + b + "r" + c.toString(32) + ":";
        return a.memoizedState = b;
      },
      unstable_isNewReconciler: !1
    },
    Je = {
      readContext: Zd,
      useCallback: nf,
      useContext: Zd,
      useEffect: Ue,
      useImperativeHandle: lf,
      useInsertionEffect: hf,
      useLayoutEffect: jf,
      useMemo: of,
      useReducer: Qe,
      useRef: df,
      useState: function useState() {
        return Qe(Pe);
      },
      useDebugValue: mf,
      useDeferredValue: function useDeferredValue(a) {
        var b = Oe();
        return pf(b, K.memoizedState, a);
      },
      useTransition: function useTransition() {
        var a = Qe(Pe)[0],
          b = Oe().memoizedState;
        return [a, b];
      },
      useMutableSource: Se,
      useSyncExternalStore: Te,
      useId: rf,
      unstable_isNewReconciler: !1
    },
    Ke = {
      readContext: Zd,
      useCallback: nf,
      useContext: Zd,
      useEffect: Ue,
      useImperativeHandle: lf,
      useInsertionEffect: hf,
      useLayoutEffect: jf,
      useMemo: of,
      useReducer: Re,
      useRef: df,
      useState: function useState() {
        return Re(Pe);
      },
      useDebugValue: mf,
      useDeferredValue: function useDeferredValue(a) {
        var b = Oe();
        return null === K ? b.memoizedState = a : pf(b, K.memoizedState, a);
      },
      useTransition: function useTransition() {
        var a = Re(Pe)[0],
          b = Oe().memoizedState;
        return [a, b];
      },
      useMutableSource: Se,
      useSyncExternalStore: Te,
      useId: rf,
      unstable_isNewReconciler: !1
    };
  function xf(a, b) {
    if (a && a.defaultProps) {
      b = ca({}, b);
      a = a.defaultProps;
      for (var c in a) void 0 === b[c] && (b[c] = a[c]);
      return b;
    }
    return b;
  }
  function yf(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = null === c || void 0 === c ? b : ca({}, b, c);
    a.memoizedState = c;
    0 === a.lanes && (a.updateQueue.baseState = c);
  }
  var zf = {
    isMounted: function isMounted(a) {
      return (a = a._reactInternals) ? wa(a) === a : !1;
    },
    enqueueSetState: function enqueueSetState(a, b, c) {
      a = a._reactInternals;
      var d = O(),
        e = tf(a),
        f = ge(d, e);
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      b = he(a, f, e);
      null !== b && (af(b, a, e, d), ie(b, a, e));
    },
    enqueueReplaceState: function enqueueReplaceState(a, b, c) {
      a = a._reactInternals;
      var d = O(),
        e = tf(a),
        f = ge(d, e);
      f.tag = 1;
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      b = he(a, f, e);
      null !== b && (af(b, a, e, d), ie(b, a, e));
    },
    enqueueForceUpdate: function enqueueForceUpdate(a, b) {
      a = a._reactInternals;
      var c = O(),
        d = tf(a),
        e = ge(c, d);
      e.tag = 2;
      void 0 !== b && null !== b && (e.callback = b);
      b = he(a, e, d);
      null !== b && (af(b, a, d, c), ie(b, a, d));
    }
  };
  function Af(a, b, c, d, e, f, g) {
    a = a.stateNode;
    return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !Dd(c, d) || !Dd(e, f) : !0;
  }
  function Bf(a, b, c) {
    var d = !1,
      e = jc;
    var f = b.contextType;
    "object" === typeof f && null !== f ? f = Zd(f) : (e = A(b) ? kc : x.current, d = b.contextTypes, f = (d = null !== d && void 0 !== d) ? mc(a, e) : jc);
    b = new b(c, f);
    a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
    b.updater = zf;
    a.stateNode = b;
    b._reactInternals = a;
    d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
    return b;
  }
  function Cf(a, b, c, d) {
    a = b.state;
    "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
    "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && zf.enqueueReplaceState(b, b.state, null);
  }
  function Df(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = {};
    ee(a);
    var f = b.contextType;
    "object" === typeof f && null !== f ? e.context = Zd(f) : (f = A(b) ? kc : x.current, e.context = mc(a, f));
    e.state = a.memoizedState;
    f = b.getDerivedStateFromProps;
    "function" === typeof f && (yf(a, b, f, c), e.state = a.memoizedState);
    "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && zf.enqueueReplaceState(e, e.state, null), ke(a, c, e, d), e.state = a.memoizedState);
    "function" === typeof e.componentDidMount && (a.flags |= 4194308);
  }
  function Ef(a, b) {
    try {
      var c = "",
        d = b;
      do c += Ed(d), d = d["return"]; while (d);
      var e = c;
    } catch (f) {
      e = "\nError generating stack: " + f.message + "\n" + f.stack;
    }
    return {
      value: a,
      source: b,
      stack: e,
      digest: null
    };
  }
  function Ff(a, b, c) {
    return {
      value: a,
      source: null,
      stack: null != c ? c : null,
      digest: null != b ? b : null
    };
  }
  function Gf(a, b) {
    try {
      console.error(b.value);
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  var Hf = "function" === typeof WeakMap ? WeakMap : Map;
  function If(a, b, c) {
    c = ge(-1, c);
    c.tag = 3;
    c.payload = {
      element: null
    };
    var d = b.value;
    c.callback = function () {
      Jf || (Jf = !0, Kf = d);
      Gf(a, b);
    };
    return c;
  }
  function Lf(a, b, c) {
    c = ge(-1, c);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;
    if ("function" === typeof d) {
      var e = b.value;
      c.payload = function () {
        return d(e);
      };
      c.callback = function () {
        Gf(a, b);
      };
    }
    var f = a.stateNode;
    null !== f && "function" === typeof f.componentDidCatch && (c.callback = function () {
      Gf(a, b);
      "function" !== typeof d && (null === Mf ? Mf = new Set([this]) : Mf.add(this));
      var c = b.stack;
      this.componentDidCatch(b.value, {
        componentStack: null !== c ? c : ""
      });
    });
    return c;
  }
  function Nf(a, b, c) {
    var d = a.pingCache;
    if (null === d) {
      d = a.pingCache = new Hf();
      var e = new Set();
      d.set(b, e);
    } else e = d.get(b), void 0 === e && (e = new Set(), d.set(b, e));
    e.has(c) || (e.add(c), a = Of.bind(null, a, b, c), b.then(a, a));
  }
  function Pf(a) {
    do {
      var b;
      if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? !0 : !1 : !0;
      if (b) return a;
      a = a["return"];
    } while (null !== a);
    return null;
  }
  function Qf(a, b, c, d, e) {
    if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = ge(-1, 1), b.tag = 2, he(c, b, 1))), c.lanes |= 1), a;
    a.flags |= 65536;
    a.lanes = e;
    return a;
  }
  var Rf = da.ReactCurrentOwner,
    G = !1;
  function P(a, b, c, d) {
    b.child = null === a ? Pd(b, null, c, d) : Od(b, a.child, c, d);
  }
  function Sf(a, b, c, d, e) {
    c = c.render;
    var f = b.ref;
    Yd(b, e);
    d = He(a, b, c, d, f, e);
    c = Me();
    if (null !== a && !G) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Tf(a, b, e);
    F && c && md(b);
    b.flags |= 1;
    P(a, b, d, e);
    return b.child;
  }
  function Uf(a, b, c, d, e) {
    if (null === a) {
      var f = c.type;
      if ("function" === typeof f && !Vf(f) && void 0 === f.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f, Wf(a, b, f, d, e);
      a = Ld(c.type, null, d, b, b.mode, e);
      a.ref = b.ref;
      a["return"] = b;
      return b.child = a;
    }
    f = a.child;
    if (0 === (a.lanes & e)) {
      var g = f.memoizedProps;
      c = c.compare;
      c = null !== c ? c : Dd;
      if (c(g, d) && a.ref === b.ref) return Tf(a, b, e);
    }
    b.flags |= 1;
    a = Jd(f, d);
    a.ref = b.ref;
    a["return"] = b;
    return b.child = a;
  }
  function Wf(a, b, c, d, e) {
    if (null !== a) {
      var f = a.memoizedProps;
      if (Dd(f, d) && a.ref === b.ref) if (G = !1, b.pendingProps = d = f, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (G = !0);else return b.lanes = a.lanes, Tf(a, b, e);
    }
    return Xf(a, b, c, d, e);
  }
  function Yf(a, b, c) {
    var d = b.pendingProps,
      e = d.children,
      f = null !== a ? a.memoizedState : null;
    if ("hidden" === d.mode) {
      if (0 === (b.mode & 1)) b.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null
      }, v(Zf, $f), $f |= c;else {
        if (0 === (c & 1073741824)) return a = null !== f ? f.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = {
          baseLanes: a,
          cachePool: null,
          transitions: null
        }, b.updateQueue = null, v(Zf, $f), $f |= a, null;
        b.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null
        };
        d = null !== f ? f.baseLanes : c;
        v(Zf, $f);
        $f |= d;
      }
    } else null !== f ? (d = f.baseLanes | c, b.memoizedState = null) : d = c, v(Zf, $f), $f |= d;
    P(a, b, e, c);
    return b.child;
  }
  function ag(a, b) {
    var c = b.ref;
    if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
  }
  function Xf(a, b, c, d, e) {
    var f = A(c) ? kc : x.current;
    f = mc(b, f);
    Yd(b, e);
    c = He(a, b, c, d, f, e);
    d = Me();
    if (null !== a && !G) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Tf(a, b, e);
    F && d && md(b);
    b.flags |= 1;
    P(a, b, c, e);
    return b.child;
  }
  function bg(a, b, c, d, e) {
    if (A(c)) {
      var f = !0;
      qc(b);
    } else f = !1;
    Yd(b, e);
    if (null === b.stateNode) cg(a, b), Bf(b, c, d), Df(b, c, d, e), d = !0;else if (null === a) {
      var g = b.stateNode,
        h = b.memoizedProps;
      g.props = h;
      var k = g.context,
        l = c.contextType;
      "object" === typeof l && null !== l ? l = Zd(l) : (l = A(c) ? kc : x.current, l = mc(b, l));
      var m = c.getDerivedStateFromProps,
        r = "function" === typeof m || "function" === typeof g.getSnapshotBeforeUpdate;
      r || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Cf(b, g, d, l);
      de = !1;
      var p = b.memoizedState;
      g.state = p;
      ke(b, d, g, e);
      k = b.memoizedState;
      h !== d || p !== k || z.current || de ? ("function" === typeof m && (yf(b, c, m, d), k = b.memoizedState), (h = de || Af(b, c, h, d, p, k, l)) ? (r || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = !1);
    } else {
      g = b.stateNode;
      fe(a, b);
      h = b.memoizedProps;
      l = b.type === b.elementType ? h : xf(b.type, h);
      g.props = l;
      r = b.pendingProps;
      p = g.context;
      k = c.contextType;
      "object" === typeof k && null !== k ? k = Zd(k) : (k = A(c) ? kc : x.current, k = mc(b, k));
      var B = c.getDerivedStateFromProps;
      (m = "function" === typeof B || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== r || p !== k) && Cf(b, g, d, k);
      de = !1;
      p = b.memoizedState;
      g.state = p;
      ke(b, d, g, e);
      var w = b.memoizedState;
      h !== r || p !== w || z.current || de ? ("function" === typeof B && (yf(b, c, B, d), w = b.memoizedState), (l = de || Af(b, c, l, d, p, w, k) || !1) ? (m || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, w, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, w, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = w), g.props = d, g.state = w, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && p === a.memoizedState || (b.flags |= 1024), d = !1);
    }
    return dg(a, b, c, d, f, e);
  }
  function dg(a, b, c, d, e, f) {
    ag(a, b);
    var g = 0 !== (b.flags & 128);
    if (!d && !g) return e && rc(b, c, !1), Tf(a, b, f);
    d = b.stateNode;
    Rf.current = b;
    var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
    b.flags |= 1;
    null !== a && g ? (b.child = Od(b, a.child, null, f), b.child = Od(b, null, h, f)) : P(a, b, h, f);
    b.memoizedState = d.state;
    e && rc(b, c, !0);
    return b.child;
  }
  function eg(a) {
    var b = a.stateNode;
    b.pendingContext ? oc(a, b.pendingContext, b.pendingContext !== b.context) : b.context && oc(a, b.context, !1);
    se(a, b.containerInfo);
  }
  function fg(a, b, c, d, e) {
    Ad();
    Bd(e);
    b.flags |= 256;
    P(a, b, c, d);
    return b.child;
  }
  var gg = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
  };
  function hg(a) {
    return {
      baseLanes: a,
      cachePool: null,
      transitions: null
    };
  }
  function ig(a, b, c) {
    var d = b.pendingProps,
      e = I.current,
      f = !1,
      g = 0 !== (b.flags & 128),
      h;
    (h = g) || (h = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
    if (h) f = !0, b.flags &= -129;else if (null === a || null !== a.memoizedState) e |= 1;
    v(I, e & 1);
    if (null === a) {
      wd(b);
      a = b.memoizedState;
      if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : Kb(a) ? b.lanes = 8 : b.lanes = 1073741824, null;
      g = d.children;
      a = d.fallback;
      return f ? (d = b.mode, f = b.child, g = {
        mode: "hidden",
        children: g
      }, 0 === (d & 1) && null !== f ? (f.childLanes = 0, f.pendingProps = g) : f = jg(g, d, 0, null), a = Nd(a, d, c, null), f["return"] = b, a["return"] = b, f.sibling = a, b.child = f, b.child.memoizedState = hg(c), b.memoizedState = gg, a) : kg(b, g);
    }
    e = a.memoizedState;
    if (null !== e && (h = e.dehydrated, null !== h)) return lg(a, b, g, d, h, e, c);
    if (f) {
      f = d.fallback;
      g = b.mode;
      e = a.child;
      h = e.sibling;
      var k = {
        mode: "hidden",
        children: d.children
      };
      0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = Jd(e, k), d.subtreeFlags = e.subtreeFlags & 14680064);
      null !== h ? f = Jd(h, f) : (f = Nd(f, g, c, null), f.flags |= 2);
      f["return"] = b;
      d["return"] = b;
      d.sibling = f;
      b.child = d;
      d = f;
      f = b.child;
      g = a.child.memoizedState;
      g = null === g ? hg(c) : {
        baseLanes: g.baseLanes | c,
        cachePool: null,
        transitions: g.transitions
      };
      f.memoizedState = g;
      f.childLanes = a.childLanes & ~c;
      b.memoizedState = gg;
      return d;
    }
    f = a.child;
    a = f.sibling;
    d = Jd(f, {
      mode: "visible",
      children: d.children
    });
    0 === (b.mode & 1) && (d.lanes = c);
    d["return"] = b;
    d.sibling = null;
    null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
    b.child = d;
    b.memoizedState = null;
    return d;
  }
  function kg(a, b) {
    b = jg({
      mode: "visible",
      children: b
    }, a.mode, 0, null);
    b["return"] = a;
    return a.child = b;
  }
  function mg(a, b, c, d) {
    null !== d && Bd(d);
    Od(b, a.child, null, c);
    a = kg(b, b.pendingProps.children);
    a.flags |= 2;
    b.memoizedState = null;
    return a;
  }
  function lg(a, b, c, d, e, f, g) {
    if (c) {
      if (b.flags & 256) return b.flags &= -257, d = Ff(Error(n(422))), mg(a, b, g, d);
      if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
      f = d.fallback;
      e = b.mode;
      d = jg({
        mode: "visible",
        children: d.children
      }, e, 0, null);
      f = Nd(f, e, g, null);
      f.flags |= 2;
      d["return"] = b;
      f["return"] = b;
      d.sibling = f;
      b.child = d;
      0 !== (b.mode & 1) && Od(b, a.child, null, g);
      b.child.memoizedState = hg(g);
      b.memoizedState = gg;
      return f;
    }
    if (0 === (b.mode & 1)) return mg(a, b, g, null);
    if (Kb(e)) return d = Lb(e).digest, f = Error(n(419)), d = Ff(f, d, void 0), mg(a, b, g, d);
    c = 0 !== (g & a.childLanes);
    if (G || c) {
      d = N;
      if (null !== d) {
        switch (g & -g) {
          case 4:
            e = 2;
            break;
          case 16:
            e = 8;
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
            e = 32;
            break;
          case 536870912:
            e = 268435456;
            break;
          default:
            e = 0;
        }
        e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
        0 !== e && e !== f.retryLane && (f.retryLane = e, ce(a, e), af(d, a, e, -1));
      }
      ng();
      d = Ff(Error(n(421)));
      return mg(a, b, g, d);
    }
    if (Jb(e)) return b.flags |= 128, b.child = a.child, b = og.bind(null, a), Mb(e, b), null;
    a = f.treeContext;
    Va && (pd = Qb(e), od = b, F = !0, rd = null, qd = !1, null !== a && (fd[gd++] = id, fd[gd++] = jd, fd[gd++] = hd, id = a.id, jd = a.overflow, hd = b));
    b = kg(b, d.children);
    b.flags |= 4096;
    return b;
  }
  function pg(a, b, c) {
    a.lanes |= b;
    var d = a.alternate;
    null !== d && (d.lanes |= b);
    Xd(a["return"], b, c);
  }
  function qg(a, b, c, d, e) {
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
  function rg(a, b, c) {
    var d = b.pendingProps,
      e = d.revealOrder,
      f = d.tail;
    P(a, b, d.children, c);
    d = I.current;
    if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;else {
      if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a;) {
        if (13 === a.tag) null !== a.memoizedState && pg(a, c, b);else if (19 === a.tag) pg(a, c, b);else if (null !== a.child) {
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
        for (e = null; null !== c;) a = c.alternate, null !== a && null === we(a) && (e = c), c = c.sibling;
        c = e;
        null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
        qg(b, !1, e, c, f);
        break;
      case "backwards":
        c = null;
        e = b.child;
        for (b.child = null; null !== e;) {
          a = e.alternate;
          if (null !== a && null === we(a)) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        qg(b, !0, c, null, f);
        break;
      case "together":
        qg(b, !1, null, null, void 0);
        break;
      default:
        b.memoizedState = null;
    }
    return b.child;
  }
  function cg(a, b) {
    0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
  }
  function Tf(a, b, c) {
    null !== a && (b.dependencies = a.dependencies);
    le |= b.lanes;
    if (0 === (c & b.childLanes)) return null;
    if (null !== a && b.child !== a.child) throw Error(n(153));
    if (null !== b.child) {
      a = b.child;
      c = Jd(a, a.pendingProps);
      b.child = c;
      for (c["return"] = b; null !== a.sibling;) a = a.sibling, c = c.sibling = Jd(a, a.pendingProps), c["return"] = b;
      c.sibling = null;
    }
    return b.child;
  }
  function sg(a, b, c) {
    switch (b.tag) {
      case 3:
        eg(b);
        Ad();
        break;
      case 5:
        ue(b);
        break;
      case 1:
        A(b.type) && qc(b);
        break;
      case 4:
        se(b, b.stateNode.containerInfo);
        break;
      case 10:
        Vd(b, b.type._context, b.memoizedProps.value);
        break;
      case 13:
        var d = b.memoizedState;
        if (null !== d) {
          if (null !== d.dehydrated) return v(I, I.current & 1), b.flags |= 128, null;
          if (0 !== (c & b.child.childLanes)) return ig(a, b, c);
          v(I, I.current & 1);
          a = Tf(a, b, c);
          return null !== a ? a.sibling : null;
        }
        v(I, I.current & 1);
        break;
      case 19:
        d = 0 !== (c & b.childLanes);
        if (0 !== (a.flags & 128)) {
          if (d) return rg(a, b, c);
          b.flags |= 128;
        }
        var e = b.memoizedState;
        null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
        v(I, I.current);
        if (d) break;else return null;
      case 22:
      case 23:
        return b.lanes = 0, Yf(a, b, c);
    }
    return Tf(a, b, c);
  }
  function tg(a) {
    a.flags |= 4;
  }
  function ug(a, b) {
    if (null !== a && a.child === b.child) return !0;
    if (0 !== (b.flags & 16)) return !1;
    for (a = b.child; null !== a;) {
      if (0 !== (a.flags & 12854) || 0 !== (a.subtreeFlags & 12854)) return !1;
      a = a.sibling;
    }
    return !0;
  }
  var _vg, wg, xg, yg;
  if (Ta) _vg = function vg(a, b) {
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
  }, wg = function wg() {}, xg = function xg(a, b, c, d, e) {
    a = a.memoizedProps;
    if (a !== d) {
      var f = b.stateNode,
        g = re(oe.current);
      c = Ma(f, c, a, d, e, g);
      (b.updateQueue = c) && tg(b);
    }
  }, yg = function yg(a, b, c, d) {
    c !== d && tg(b);
  };else if (Ua) {
    _vg = function vg(a, b, c, d) {
      for (var e = b.child; null !== e;) {
        if (5 === e.tag) {
          var f = e.stateNode;
          c && d && (f = Eb(f, e.type, e.memoizedProps, e));
          Ka(a, f);
        } else if (6 === e.tag) f = e.stateNode, c && d && (f = Fb(f, e.memoizedProps, e)), Ka(a, f);else if (4 !== e.tag) if (22 === e.tag && null !== e.memoizedState) f = e.child, null !== f && (f["return"] = e), _vg(a, e, !0, !0);else if (null !== e.child) {
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
    var zg = function zg(a, b, c, d) {
      for (var e = b.child; null !== e;) {
        if (5 === e.tag) {
          var f = e.stateNode;
          c && d && (f = Eb(f, e.type, e.memoizedProps, e));
          Ab(a, f);
        } else if (6 === e.tag) f = e.stateNode, c && d && (f = Fb(f, e.memoizedProps, e)), Ab(a, f);else if (4 !== e.tag) if (22 === e.tag && null !== e.memoizedState) f = e.child, null !== f && (f["return"] = e), zg(a, e, !0, !0);else if (null !== e.child) {
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
    wg = function wg(a, b) {
      var c = b.stateNode;
      if (!ug(a, b)) {
        a = c.containerInfo;
        var d = zb(a);
        zg(d, b, !1, !1);
        c.pendingChildren = d;
        tg(b);
        Bb(a, d);
      }
    };
    xg = function xg(a, b, c, d, e) {
      var f = a.stateNode,
        g = a.memoizedProps;
      if ((a = ug(a, b)) && g === d) b.stateNode = f;else {
        var h = b.stateNode,
          k = re(oe.current),
          l = null;
        g !== d && (l = Ma(h, c, g, d, e, k));
        a && null === l ? b.stateNode = f : (f = yb(f, l, c, g, d, b, a, h), La(f, c, d, e, k) && tg(b), b.stateNode = f, a ? tg(b) : _vg(f, b, !1, !1));
      }
    };
    yg = function yg(a, b, c, d) {
      c !== d ? (a = re(qe.current), c = re(oe.current), b.stateNode = Oa(d, a, c, b), tg(b)) : b.stateNode = a.stateNode;
    };
  } else wg = function wg() {}, xg = function xg() {}, yg = function yg() {};
  function Ag(a, b) {
    if (!F) switch (a.tailMode) {
      case "hidden":
        b = a.tail;
        for (var c = null; null !== b;) null !== b.alternate && (c = b), b = b.sibling;
        null === c ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; null !== c;) null !== c.alternate && (d = c), c = c.sibling;
        null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
  }
  function Q(a) {
    var b = null !== a.alternate && a.alternate.child === a.child,
      c = 0,
      d = 0;
    if (b) for (var e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e["return"] = a, e = e.sibling;else for (e = a.child; null !== e;) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e["return"] = a, e = e.sibling;
    a.subtreeFlags |= d;
    a.childLanes = c;
    return b;
  }
  function Bg(a, b, c) {
    var d = b.pendingProps;
    nd(b);
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
        return Q(b), null;
      case 1:
        return A(b.type) && nc(), Q(b), null;
      case 3:
        c = b.stateNode;
        te();
        q(z);
        q(x);
        ye();
        c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null);
        if (null === a || null === a.child) yd(b) ? tg(b) : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== rd && (Cg(rd), rd = null));
        wg(a, b);
        Q(b);
        return null;
      case 5:
        ve(b);
        c = re(qe.current);
        var e = b.type;
        if (null !== a && null != b.stateNode) xg(a, b, e, d, c), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);else {
          if (!d) {
            if (null === b.stateNode) throw Error(n(166));
            Q(b);
            return null;
          }
          a = re(oe.current);
          if (yd(b)) {
            if (!Va) throw Error(n(175));
            a = Rb(b.stateNode, b.type, b.memoizedProps, c, a, b, !qd);
            b.updateQueue = a;
            null !== a && tg(b);
          } else {
            var f = Ja(e, d, c, a, b);
            _vg(f, b, !1, !1);
            b.stateNode = f;
            La(f, e, d, c, a) && tg(b);
          }
          null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
        }
        Q(b);
        return null;
      case 6:
        if (a && null != b.stateNode) yg(a, b, a.memoizedProps, d);else {
          if ("string" !== typeof d && null === b.stateNode) throw Error(n(166));
          a = re(qe.current);
          c = re(oe.current);
          if (yd(b)) {
            if (!Va) throw Error(n(176));
            a = b.stateNode;
            c = b.memoizedProps;
            if (d = Sb(a, c, b, !qd)) if (e = od, null !== e) switch (e.tag) {
              case 3:
                $b(e.stateNode.containerInfo, a, c, 0 !== (e.mode & 1));
                break;
              case 5:
                ac(e.type, e.memoizedProps, e.stateNode, a, c, 0 !== (e.mode & 1));
            }
            d && tg(b);
          } else b.stateNode = Oa(d, a, c, b);
        }
        Q(b);
        return null;
      case 13:
        q(I);
        d = b.memoizedState;
        if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
          if (F && null !== pd && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) zd(), Ad(), b.flags |= 98560, e = !1;else if (e = yd(b), null !== d && null !== d.dehydrated) {
            if (null === a) {
              if (!e) throw Error(n(318));
              if (!Va) throw Error(n(344));
              e = b.memoizedState;
              e = null !== e ? e.dehydrated : null;
              if (!e) throw Error(n(317));
              Tb(e, b);
            } else Ad(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
            Q(b);
            e = !1;
          } else null !== rd && (Cg(rd), rd = null), e = !0;
          if (!e) return b.flags & 65536 ? b : null;
        }
        if (0 !== (b.flags & 128)) return b.lanes = c, b;
        c = null !== d;
        c !== (null !== a && null !== a.memoizedState) && c && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (I.current & 1) ? 0 === R && (R = 3) : ng()));
        null !== b.updateQueue && (b.flags |= 4);
        Q(b);
        return null;
      case 4:
        return te(), wg(a, b), null === a && Xa(b.stateNode.containerInfo), Q(b), null;
      case 10:
        return Wd(b.type._context), Q(b), null;
      case 17:
        return A(b.type) && nc(), Q(b), null;
      case 19:
        q(I);
        e = b.memoizedState;
        if (null === e) return Q(b), null;
        d = 0 !== (b.flags & 128);
        f = e.rendering;
        if (null === f) {
          if (d) Ag(e, !1);else {
            if (0 !== R || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a;) {
              f = we(a);
              if (null !== f) {
                b.flags |= 128;
                Ag(e, !1);
                a = f.updateQueue;
                null !== a && (b.updateQueue = a, b.flags |= 4);
                b.subtreeFlags = 0;
                a = c;
                for (c = b.child; null !== c;) d = c, e = a, d.flags &= 14680066, f = d.alternate, null === f ? (d.childLanes = 0, d.lanes = e, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = f.childLanes, d.lanes = f.lanes, d.child = f.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = f.memoizedProps, d.memoizedState = f.memoizedState, d.updateQueue = f.updateQueue, d.type = f.type, e = f.dependencies, d.dependencies = null === e ? null : {
                  lanes: e.lanes,
                  firstContext: e.firstContext
                }), c = c.sibling;
                v(I, I.current & 1 | 2);
                return b.child;
              }
              a = a.sibling;
            }
            null !== e.tail && D() > Dg && (b.flags |= 128, d = !0, Ag(e, !1), b.lanes = 4194304);
          }
        } else {
          if (!d) if (a = we(f), null !== a) {
            if (b.flags |= 128, d = !0, a = a.updateQueue, null !== a && (b.updateQueue = a, b.flags |= 4), Ag(e, !0), null === e.tail && "hidden" === e.tailMode && !f.alternate && !F) return Q(b), null;
          } else 2 * D() - e.renderingStartTime > Dg && 1073741824 !== c && (b.flags |= 128, d = !0, Ag(e, !1), b.lanes = 4194304);
          e.isBackwards ? (f.sibling = b.child, b.child = f) : (a = e.last, null !== a ? a.sibling = f : b.child = f, e.last = f);
        }
        if (null !== e.tail) return b = e.tail, e.rendering = b, e.tail = b.sibling, e.renderingStartTime = D(), b.sibling = null, a = I.current, v(I, d ? a & 1 | 2 : a & 1), b;
        Q(b);
        return null;
      case 22:
      case 23:
        return Eg(), c = null !== b.memoizedState, null !== a && null !== a.memoizedState !== c && (b.flags |= 8192), c && 0 !== (b.mode & 1) ? 0 !== ($f & 1073741824) && (Q(b), Ta && b.subtreeFlags & 6 && (b.flags |= 8192)) : Q(b), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(n(156, b.tag));
  }
  function Fg(a, b) {
    nd(b);
    switch (b.tag) {
      case 1:
        return A(b.type) && nc(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
      case 3:
        return te(), q(z), q(x), ye(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
      case 5:
        return ve(b), null;
      case 13:
        q(I);
        a = b.memoizedState;
        if (null !== a && null !== a.dehydrated) {
          if (null === b.alternate) throw Error(n(340));
          Ad();
        }
        a = b.flags;
        return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
      case 19:
        return q(I), null;
      case 4:
        return te(), null;
      case 10:
        return Wd(b.type._context), null;
      case 22:
      case 23:
        return Eg(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Gg = !1,
    S = !1,
    Hg = "function" === typeof WeakSet ? WeakSet : Set,
    T = null;
  function Ig(a, b) {
    var c = a.ref;
    if (null !== c) if ("function" === typeof c) try {
      c(null);
    } catch (d) {
      U(a, b, d);
    } else c.current = null;
  }
  function Jg(a, b, c) {
    try {
      c();
    } catch (d) {
      U(a, b, d);
    }
  }
  var Kg = !1;
  function Lg(a, b) {
    Ha(a.containerInfo);
    for (T = b; null !== T;) if (a = T, b = a.child, 0 !== (a.subtreeFlags & 1028) && null !== b) b["return"] = a, T = b;else for (; null !== T;) {
      a = T;
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
                g = f.getSnapshotBeforeUpdate(a.elementType === a.type ? d : xf(a.type, d), e);
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
        U(a, a["return"], h);
      }
      b = a.sibling;
      if (null !== b) {
        b["return"] = a["return"];
        T = b;
        break;
      }
      T = a["return"];
    }
    c = Kg;
    Kg = !1;
    return c;
  }
  function Mg(a, b, c) {
    var d = b.updateQueue;
    d = null !== d ? d.lastEffect : null;
    if (null !== d) {
      var e = d = d.next;
      do {
        if ((e.tag & a) === a) {
          var f = e.destroy;
          e.destroy = void 0;
          void 0 !== f && Jg(b, c, f);
        }
        e = e.next;
      } while (e !== d);
    }
  }
  function Ng(a, b) {
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
  function Og(a) {
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
  function Pg(a) {
    var b = a.alternate;
    null !== b && (a.alternate = null, Pg(b));
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
  function Qg(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
  }
  function Rg(a) {
    a: for (;;) {
      for (; null === a.sibling;) {
        if (null === a["return"] || Qg(a["return"])) return null;
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
  function Sg(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d) a = a.stateNode, b ? pb(c, a, b) : kb(c, a);else if (4 !== d && (a = a.child, null !== a)) for (Sg(a, b, c), a = a.sibling; null !== a;) Sg(a, b, c), a = a.sibling;
  }
  function Tg(a, b, c) {
    var d = a.tag;
    if (5 === d || 6 === d) a = a.stateNode, b ? ob(c, a, b) : jb(c, a);else if (4 !== d && (a = a.child, null !== a)) for (Tg(a, b, c), a = a.sibling; null !== a;) Tg(a, b, c), a = a.sibling;
  }
  var V = null,
    Ug = !1;
  function Vg(a, b, c) {
    for (c = c.child; null !== c;) Wg(a, b, c), c = c.sibling;
  }
  function Wg(a, b, c) {
    if (Sc && "function" === typeof Sc.onCommitFiberUnmount) try {
      Sc.onCommitFiberUnmount(Rc, c);
    } catch (h) {}
    switch (c.tag) {
      case 5:
        S || Ig(c, b);
      case 6:
        if (Ta) {
          var d = V,
            e = Ug;
          V = null;
          Vg(a, b, c);
          V = d;
          Ug = e;
          null !== V && (Ug ? rb(V, c.stateNode) : qb(V, c.stateNode));
        } else Vg(a, b, c);
        break;
      case 18:
        Ta && null !== V && (Ug ? Yb(V, c.stateNode) : Xb(V, c.stateNode));
        break;
      case 4:
        Ta ? (d = V, e = Ug, V = c.stateNode.containerInfo, Ug = !0, Vg(a, b, c), V = d, Ug = e) : (Ua && (d = c.stateNode.containerInfo, e = zb(d), Cb(d, e)), Vg(a, b, c));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!S && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
          e = d = d.next;
          do {
            var f = e,
              g = f.destroy;
            f = f.tag;
            void 0 !== g && (0 !== (f & 2) ? Jg(c, b, g) : 0 !== (f & 4) && Jg(c, b, g));
            e = e.next;
          } while (e !== d);
        }
        Vg(a, b, c);
        break;
      case 1:
        if (!S && (Ig(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
          d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
        } catch (h) {
          U(c, b, h);
        }
        Vg(a, b, c);
        break;
      case 21:
        Vg(a, b, c);
        break;
      case 22:
        c.mode & 1 ? (S = (d = S) || null !== c.memoizedState, Vg(a, b, c), S = d) : Vg(a, b, c);
        break;
      default:
        Vg(a, b, c);
    }
  }
  function Xg(a) {
    var b = a.updateQueue;
    if (null !== b) {
      a.updateQueue = null;
      var c = a.stateNode;
      null === c && (c = a.stateNode = new Hg());
      b.forEach(function (b) {
        var d = Yg.bind(null, a, b);
        c.has(b) || (c.add(b), b.then(d, d));
      });
    }
  }
  function Zg(a, b) {
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
                V = h.stateNode;
                Ug = !1;
                break a;
              case 3:
                V = h.stateNode.containerInfo;
                Ug = !0;
                break a;
              case 4:
                V = h.stateNode.containerInfo;
                Ug = !0;
                break a;
            }
            h = h["return"];
          }
          if (null === V) throw Error(n(160));
          Wg(f, g, e);
          V = null;
          Ug = !1;
        } else Wg(f, g, e);
        var k = e.alternate;
        null !== k && (k["return"] = null);
        e["return"] = null;
      } catch (l) {
        U(e, b, l);
      }
    }
    if (b.subtreeFlags & 12854) for (b = b.child; null !== b;) $g(b, a), b = b.sibling;
  }
  function $g(a, b) {
    var c = a.alternate,
      d = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Zg(b, a);
        ah(a);
        if (d & 4) {
          try {
            Mg(3, a, a["return"]), Ng(3, a);
          } catch (p) {
            U(a, a["return"], p);
          }
          try {
            Mg(5, a, a["return"]);
          } catch (p) {
            U(a, a["return"], p);
          }
        }
        break;
      case 1:
        Zg(b, a);
        ah(a);
        d & 512 && null !== c && Ig(c, c["return"]);
        break;
      case 5:
        Zg(b, a);
        ah(a);
        d & 512 && null !== c && Ig(c, c["return"]);
        if (Ta) {
          if (a.flags & 32) {
            var e = a.stateNode;
            try {
              sb(e);
            } catch (p) {
              U(a, a["return"], p);
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
            } catch (p) {
              U(a, a["return"], p);
            }
          }
        }
        break;
      case 6:
        Zg(b, a);
        ah(a);
        if (d & 4 && Ta) {
          if (null === a.stateNode) throw Error(n(162));
          e = a.stateNode;
          f = a.memoizedProps;
          c = null !== c ? c.memoizedProps : f;
          try {
            lb(e, c, f);
          } catch (p) {
            U(a, a["return"], p);
          }
        }
        break;
      case 3:
        Zg(b, a);
        ah(a);
        if (d & 4) {
          if (Ta && Va && null !== c && c.memoizedState.isDehydrated) try {
            Vb(b.containerInfo);
          } catch (p) {
            U(a, a["return"], p);
          }
          if (Ua) {
            e = b.containerInfo;
            f = b.pendingChildren;
            try {
              Cb(e, f);
            } catch (p) {
              U(a, a["return"], p);
            }
          }
        }
        break;
      case 4:
        Zg(b, a);
        ah(a);
        if (d & 4 && Ua) {
          f = a.stateNode;
          e = f.containerInfo;
          f = f.pendingChildren;
          try {
            Cb(e, f);
          } catch (p) {
            U(a, a["return"], p);
          }
        }
        break;
      case 13:
        Zg(b, a);
        ah(a);
        e = a.child;
        e.flags & 8192 && (f = null !== e.memoizedState, e.stateNode.isHidden = f, !f || null !== e.alternate && null !== e.alternate.memoizedState || (bh = D()));
        d & 4 && Xg(a);
        break;
      case 22:
        var g = null !== c && null !== c.memoizedState;
        a.mode & 1 ? (S = (c = S) || g, Zg(b, a), S = c) : Zg(b, a);
        ah(a);
        if (d & 8192) {
          c = null !== a.memoizedState;
          if ((a.stateNode.isHidden = c) && !g && 0 !== (a.mode & 1)) for (T = a, d = a.child; null !== d;) {
            for (b = T = d; null !== T;) {
              g = T;
              var h = g.child;
              switch (g.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Mg(4, g, g["return"]);
                  break;
                case 1:
                  Ig(g, g["return"]);
                  var k = g.stateNode;
                  if ("function" === typeof k.componentWillUnmount) {
                    var l = g,
                      m = g["return"];
                    try {
                      var r = l;
                      k.props = r.memoizedProps;
                      k.state = r.memoizedState;
                      k.componentWillUnmount();
                    } catch (p) {
                      U(l, m, p);
                    }
                  }
                  break;
                case 5:
                  Ig(g, g["return"]);
                  break;
                case 22:
                  if (null !== g.memoizedState) {
                    ch(b);
                    continue;
                  }
              }
              null !== h ? (h["return"] = g, T = h) : ch(b);
            }
            d = d.sibling;
          }
          if (Ta) a: if (d = null, Ta) for (b = a;;) {
            if (5 === b.tag) {
              if (null === d) {
                d = b;
                try {
                  e = b.stateNode, c ? tb(e) : vb(b.stateNode, b.memoizedProps);
                } catch (p) {
                  U(a, a["return"], p);
                }
              }
            } else if (6 === b.tag) {
              if (null === d) try {
                f = b.stateNode, c ? ub(f) : wb(f, b.memoizedProps);
              } catch (p) {
                U(a, a["return"], p);
              }
            } else if ((22 !== b.tag && 23 !== b.tag || null === b.memoizedState || b === a) && null !== b.child) {
              b.child["return"] = b;
              b = b.child;
              continue;
            }
            if (b === a) break a;
            for (; null === b.sibling;) {
              if (null === b["return"] || b["return"] === a) break a;
              d === b && (d = null);
              b = b["return"];
            }
            d === b && (d = null);
            b.sibling["return"] = b["return"];
            b = b.sibling;
          }
        }
        break;
      case 19:
        Zg(b, a);
        ah(a);
        d & 4 && Xg(a);
        break;
      case 21:
        break;
      default:
        Zg(b, a), ah(a);
    }
  }
  function ah(a) {
    var b = a.flags;
    if (b & 2) {
      try {
        if (Ta) {
          b: {
            for (var c = a["return"]; null !== c;) {
              if (Qg(c)) {
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
              var f = Rg(a);
              Tg(a, f, e);
              break;
            case 3:
            case 4:
              var g = d.stateNode.containerInfo,
                h = Rg(a);
              Sg(a, h, g);
              break;
            default:
              throw Error(n(161));
          }
        }
      } catch (k) {
        U(a, a["return"], k);
      }
      a.flags &= -3;
    }
    b & 4096 && (a.flags &= -4097);
  }
  function dh(a, b, c) {
    T = a;
    eh(a, b, c);
  }
  function eh(a, b, c) {
    for (var d = 0 !== (a.mode & 1); null !== T;) {
      var e = T,
        f = e.child;
      if (22 === e.tag && d) {
        var g = null !== e.memoizedState || Gg;
        if (!g) {
          var h = e.alternate,
            k = null !== h && null !== h.memoizedState || S;
          h = Gg;
          var l = S;
          Gg = g;
          if ((S = k) && !l) for (T = e; null !== T;) g = T, k = g.child, 22 === g.tag && null !== g.memoizedState ? fh(e) : null !== k ? (k["return"] = g, T = k) : fh(e);
          for (; null !== f;) T = f, eh(f, b, c), f = f.sibling;
          T = e;
          Gg = h;
          S = l;
        }
        gh(a, b, c);
      } else 0 !== (e.subtreeFlags & 8772) && null !== f ? (f["return"] = e, T = f) : gh(a, b, c);
    }
  }
  function gh(a) {
    for (; null !== T;) {
      var b = T;
      if (0 !== (b.flags & 8772)) {
        var c = b.alternate;
        try {
          if (0 !== (b.flags & 8772)) switch (b.tag) {
            case 0:
            case 11:
            case 15:
              S || Ng(5, b);
              break;
            case 1:
              var d = b.stateNode;
              if (b.flags & 4 && !S) if (null === c) d.componentDidMount();else {
                var e = b.elementType === b.type ? c.memoizedProps : xf(b.type, c.memoizedProps);
                d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
              }
              var f = b.updateQueue;
              null !== f && me(b, f, d);
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
                me(b, g, c);
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
                    null !== m && Wb(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(n(163));
          }
          S || b.flags & 512 && Og(b);
        } catch (r) {
          U(b, b["return"], r);
        }
      }
      if (b === a) {
        T = null;
        break;
      }
      c = b.sibling;
      if (null !== c) {
        c["return"] = b["return"];
        T = c;
        break;
      }
      T = b["return"];
    }
  }
  function ch(a) {
    for (; null !== T;) {
      var b = T;
      if (b === a) {
        T = null;
        break;
      }
      var c = b.sibling;
      if (null !== c) {
        c["return"] = b["return"];
        T = c;
        break;
      }
      T = b["return"];
    }
  }
  function fh(a) {
    for (; null !== T;) {
      var b = T;
      try {
        switch (b.tag) {
          case 0:
          case 11:
          case 15:
            var c = b["return"];
            try {
              Ng(4, b);
            } catch (k) {
              U(b, c, k);
            }
            break;
          case 1:
            var d = b.stateNode;
            if ("function" === typeof d.componentDidMount) {
              var e = b["return"];
              try {
                d.componentDidMount();
              } catch (k) {
                U(b, e, k);
              }
            }
            var f = b["return"];
            try {
              Og(b);
            } catch (k) {
              U(b, f, k);
            }
            break;
          case 5:
            var g = b["return"];
            try {
              Og(b);
            } catch (k) {
              U(b, g, k);
            }
        }
      } catch (k) {
        U(b, b["return"], k);
      }
      if (b === a) {
        T = null;
        break;
      }
      var h = b.sibling;
      if (null !== h) {
        h["return"] = b["return"];
        T = h;
        break;
      }
      T = b["return"];
    }
  }
  var hh = 0,
    ih = 1,
    jh = 2,
    kh = 3,
    lh = 4;
  if ("function" === typeof Symbol && Symbol["for"]) {
    var mh = Symbol["for"];
    hh = mh("selector.component");
    ih = mh("selector.has_pseudo_class");
    jh = mh("selector.role");
    kh = mh("selector.test_id");
    lh = mh("selector.text");
  }
  function nh(a) {
    var b = Wa(a);
    if (null != b) {
      if ("string" !== typeof b.memoizedProps["data-testname"]) throw Error(n(364));
      return b;
    }
    a = cb(a);
    if (null === a) throw Error(n(362));
    return a.stateNode.current;
  }
  function oh(a, b) {
    switch (b.$$typeof) {
      case hh:
        if (a.type === b.value) return !0;
        break;
      case ih:
        a: {
          b = b.value;
          a = [a, 0];
          for (var c = 0; c < a.length;) {
            var d = a[c++],
              e = a[c++],
              f = b[e];
            if (5 !== d.tag || !fb(d)) {
              for (; null != f && oh(d, f);) e++, f = b[e];
              if (e === b.length) {
                b = !0;
                break a;
              } else for (d = d.child; null !== d;) a.push(d, e), d = d.sibling;
            }
          }
          b = !1;
        }
        return b;
      case jh:
        if (5 === a.tag && gb(a.stateNode, b.value)) return !0;
        break;
      case lh:
        if (5 === a.tag || 6 === a.tag) if (a = eb(a), null !== a && 0 <= a.indexOf(b.value)) return !0;
        break;
      case kh:
        if (5 === a.tag && (a = a.memoizedProps["data-testname"], "string" === typeof a && a.toLowerCase() === b.value.toLowerCase())) return !0;
        break;
      default:
        throw Error(n(365));
    }
    return !1;
  }
  function ph(a) {
    switch (a.$$typeof) {
      case hh:
        return "<" + (ua(a.value) || "Unknown") + ">";
      case ih:
        return ":has(" + (ph(a) || "") + ")";
      case jh:
        return '[role="' + a.value + '"]';
      case lh:
        return '"' + a.value + '"';
      case kh:
        return '[data-testname="' + a.value + '"]';
      default:
        throw Error(n(365));
    }
  }
  function qh(a, b) {
    var c = [];
    a = [a, 0];
    for (var d = 0; d < a.length;) {
      var e = a[d++],
        f = a[d++],
        g = b[f];
      if (5 !== e.tag || !fb(e)) {
        for (; null != g && oh(e, g);) f++, g = b[f];
        if (f === b.length) c.push(e);else for (e = e.child; null !== e;) a.push(e, f), e = e.sibling;
      }
    }
    return c;
  }
  function rh(a, b) {
    if (!bb) throw Error(n(363));
    a = nh(a);
    a = qh(a, b);
    b = [];
    a = Array.from(a);
    for (var c = 0; c < a.length;) {
      var d = a[c++];
      if (5 === d.tag) fb(d) || b.push(d.stateNode);else for (d = d.child; null !== d;) a.push(d), d = d.sibling;
    }
    return b;
  }
  var sh = Math.ceil,
    th = da.ReactCurrentDispatcher,
    uh = da.ReactCurrentOwner,
    W = da.ReactCurrentBatchConfig,
    H = 0,
    N = null,
    X = null,
    Z = 0,
    $f = 0,
    Zf = ic(0),
    R = 0,
    vh = null,
    le = 0,
    wh = 0,
    xh = 0,
    yh = null,
    zh = null,
    bh = 0,
    Dg = Infinity,
    Ah = null;
  function Bh() {
    Dg = D() + 500;
  }
  var Jf = !1,
    Kf = null,
    Mf = null,
    Ch = !1,
    Dh = null,
    Eh = 0,
    Fh = 0,
    Gh = null,
    Hh = -1,
    Ih = 0;
  function O() {
    return 0 !== (H & 6) ? D() : -1 !== Hh ? Hh : Hh = D();
  }
  function tf(a) {
    if (0 === (a.mode & 1)) return 1;
    if (0 !== (H & 2) && 0 !== Z) return Z & -Z;
    if (null !== Cd.transition) return 0 === Ih && (Ih = Dc()), Ih;
    a = C;
    return 0 !== a ? a : Ya();
  }
  function af(a, b, c, d) {
    if (50 < Fh) throw Fh = 0, Gh = null, Error(n(185));
    Fc(a, c, d);
    if (0 === (H & 2) || a !== N) a === N && (0 === (H & 2) && (wh |= c), 4 === R && Jh(a, Z)), Kh(a, d), 1 === c && 0 === H && 0 === (b.mode & 1) && (Bh(), Xc && ad());
  }
  function Kh(a, b) {
    var c = a.callbackNode;
    Bc(a, b);
    var d = zc(a, a === N ? Z : 0);
    if (0 === d) null !== c && Kc(c), a.callbackNode = null, a.callbackPriority = 0;else if (b = d & -d, a.callbackPriority !== b) {
      null != c && Kc(c);
      if (1 === b) 0 === a.tag ? $c(Lh.bind(null, a)) : Zc(Lh.bind(null, a)), $a ? ab(function () {
        0 === (H & 6) && ad();
      }) : Jc(Nc, ad), c = null;else {
        switch (Ic(d)) {
          case 1:
            c = Nc;
            break;
          case 4:
            c = Oc;
            break;
          case 16:
            c = Pc;
            break;
          case 536870912:
            c = Qc;
            break;
          default:
            c = Pc;
        }
        c = Mh(c, Nh.bind(null, a));
      }
      a.callbackPriority = b;
      a.callbackNode = c;
    }
  }
  function Nh(a, b) {
    Hh = -1;
    Ih = 0;
    if (0 !== (H & 6)) throw Error(n(327));
    var c = a.callbackNode;
    if (Oh() && a.callbackNode !== c) return null;
    var d = zc(a, a === N ? Z : 0);
    if (0 === d) return null;
    if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ph(a, d);else {
      b = d;
      var e = H;
      H |= 2;
      var f = Qh();
      if (N !== a || Z !== b) Ah = null, Bh(), Rh(a, b);
      do try {
        Sh();
        break;
      } catch (h) {
        Th(a, h);
      } while (1);
      Ud();
      th.current = f;
      H = e;
      null !== X ? b = 0 : (N = null, Z = 0, b = R);
    }
    if (0 !== b) {
      2 === b && (e = Cc(a), 0 !== e && (d = e, b = Uh(a, e)));
      if (1 === b) throw c = vh, Rh(a, 0), Jh(a, d), Kh(a, D()), c;
      if (6 === b) Jh(a, d);else {
        e = a.current.alternate;
        if (0 === (d & 30) && !Vh(e) && (b = Ph(a, d), 2 === b && (f = Cc(a), 0 !== f && (d = f, b = Uh(a, f))), 1 === b)) throw c = vh, Rh(a, 0), Jh(a, d), Kh(a, D()), c;
        a.finishedWork = e;
        a.finishedLanes = d;
        switch (b) {
          case 0:
          case 1:
            throw Error(n(345));
          case 2:
            Wh(a, zh, Ah);
            break;
          case 3:
            Jh(a, d);
            if ((d & 130023424) === d && (b = bh + 500 - D(), 10 < b)) {
              if (0 !== zc(a, 0)) break;
              e = a.suspendedLanes;
              if ((e & d) !== d) {
                O();
                a.pingedLanes |= a.suspendedLanes & e;
                break;
              }
              a.timeoutHandle = Pa(Wh.bind(null, a, zh, Ah), b);
              break;
            }
            Wh(a, zh, Ah);
            break;
          case 4:
            Jh(a, d);
            if ((d & 4194240) === d) break;
            b = a.eventTimes;
            for (e = -1; 0 < d;) {
              var g = 31 - tc(d);
              f = 1 << g;
              g = b[g];
              g > e && (e = g);
              d &= ~f;
            }
            d = e;
            d = D() - d;
            d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3E3 > d ? 3E3 : 4320 > d ? 4320 : 1960 * sh(d / 1960)) - d;
            if (10 < d) {
              a.timeoutHandle = Pa(Wh.bind(null, a, zh, Ah), d);
              break;
            }
            Wh(a, zh, Ah);
            break;
          case 5:
            Wh(a, zh, Ah);
            break;
          default:
            throw Error(n(329));
        }
      }
    }
    Kh(a, D());
    return a.callbackNode === c ? Nh.bind(null, a) : null;
  }
  function Uh(a, b) {
    var c = yh;
    a.current.memoizedState.isDehydrated && (Rh(a, b).flags |= 256);
    a = Ph(a, b);
    2 !== a && (b = zh, zh = c, null !== b && Cg(b));
    return a;
  }
  function Cg(a) {
    null === zh ? zh = a : zh.push.apply(zh, a);
  }
  function Vh(a) {
    for (var b = a;;) {
      if (b.flags & 16384) {
        var c = b.updateQueue;
        if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
          var e = c[d],
            f = e.getSnapshot;
          e = e.value;
          try {
            if (!Vc(f(), e)) return !1;
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
  function Jh(a, b) {
    b &= ~xh;
    b &= ~wh;
    a.suspendedLanes |= b;
    a.pingedLanes &= ~b;
    for (a = a.expirationTimes; 0 < b;) {
      var c = 31 - tc(b),
        d = 1 << c;
      a[c] = -1;
      b &= ~d;
    }
  }
  function Lh(a) {
    if (0 !== (H & 6)) throw Error(n(327));
    Oh();
    var b = zc(a, 0);
    if (0 === (b & 1)) return Kh(a, D()), null;
    var c = Ph(a, b);
    if (0 !== a.tag && 2 === c) {
      var d = Cc(a);
      0 !== d && (b = d, c = Uh(a, d));
    }
    if (1 === c) throw c = vh, Rh(a, 0), Jh(a, b), Kh(a, D()), c;
    if (6 === c) throw Error(n(345));
    a.finishedWork = a.current.alternate;
    a.finishedLanes = b;
    Wh(a, zh, Ah);
    Kh(a, D());
    return null;
  }
  function Xh(a) {
    null !== Dh && 0 === Dh.tag && 0 === (H & 6) && Oh();
    var b = H;
    H |= 1;
    var c = W.transition,
      d = C;
    try {
      if (W.transition = null, C = 1, a) return a();
    } finally {
      C = d, W.transition = c, H = b, 0 === (H & 6) && ad();
    }
  }
  function Eg() {
    $f = Zf.current;
    q(Zf);
  }
  function Rh(a, b) {
    a.finishedWork = null;
    a.finishedLanes = 0;
    var c = a.timeoutHandle;
    c !== Ra && (a.timeoutHandle = Ra, Qa(c));
    if (null !== X) for (c = X["return"]; null !== c;) {
      var d = c;
      nd(d);
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          null !== d && void 0 !== d && nc();
          break;
        case 3:
          te();
          q(z);
          q(x);
          ye();
          break;
        case 5:
          ve(d);
          break;
        case 4:
          te();
          break;
        case 13:
          q(I);
          break;
        case 19:
          q(I);
          break;
        case 10:
          Wd(d.type._context);
          break;
        case 22:
        case 23:
          Eg();
      }
      c = c["return"];
    }
    N = a;
    X = a = Jd(a.current, null);
    Z = $f = b;
    R = 0;
    vh = null;
    xh = wh = le = 0;
    zh = yh = null;
    if (null !== $d) {
      for (b = 0; b < $d.length; b++) if (c = $d[b], d = c.interleaved, null !== d) {
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
      $d = null;
    }
    return a;
  }
  function Th(a, b) {
    do {
      var c = X;
      try {
        Ud();
        ze.current = Le;
        if (Ce) {
          for (var d = J.memoizedState; null !== d;) {
            var e = d.queue;
            null !== e && (e.pending = null);
            d = d.next;
          }
          Ce = !1;
        }
        Be = 0;
        L = K = J = null;
        De = !1;
        Ee = 0;
        uh.current = null;
        if (null === c || null === c["return"]) {
          R = 1;
          vh = b;
          X = null;
          break;
        }
        a: {
          var f = a,
            g = c["return"],
            h = c,
            k = b;
          b = Z;
          h.flags |= 32768;
          if (null !== k && "object" === typeof k && "function" === typeof k.then) {
            var l = k,
              m = h,
              r = m.tag;
            if (0 === (m.mode & 1) && (0 === r || 11 === r || 15 === r)) {
              var p = m.alternate;
              p ? (m.updateQueue = p.updateQueue, m.memoizedState = p.memoizedState, m.lanes = p.lanes) : (m.updateQueue = null, m.memoizedState = null);
            }
            var B = Pf(g);
            if (null !== B) {
              B.flags &= -257;
              Qf(B, g, h, f, b);
              B.mode & 1 && Nf(f, l, b);
              b = B;
              k = l;
              var w = b.updateQueue;
              if (null === w) {
                var Y = new Set();
                Y.add(k);
                b.updateQueue = Y;
              } else w.add(k);
              break a;
            } else {
              if (0 === (b & 1)) {
                Nf(f, l, b);
                ng();
                break a;
              }
              k = Error(n(426));
            }
          } else if (F && h.mode & 1) {
            var ya = Pf(g);
            if (null !== ya) {
              0 === (ya.flags & 65536) && (ya.flags |= 256);
              Qf(ya, g, h, f, b);
              Bd(Ef(k, h));
              break a;
            }
          }
          f = k = Ef(k, h);
          4 !== R && (R = 2);
          null === yh ? yh = [f] : yh.push(f);
          f = g;
          do {
            switch (f.tag) {
              case 3:
                f.flags |= 65536;
                b &= -b;
                f.lanes |= b;
                var E = If(f, k, b);
                je(f, E);
                break a;
              case 1:
                h = k;
                var u = f.type,
                  t = f.stateNode;
                if (0 === (f.flags & 128) && ("function" === typeof u.getDerivedStateFromError || null !== t && "function" === typeof t.componentDidCatch && (null === Mf || !Mf.has(t)))) {
                  f.flags |= 65536;
                  b &= -b;
                  f.lanes |= b;
                  var Db = Lf(f, h, b);
                  je(f, Db);
                  break a;
                }
            }
            f = f["return"];
          } while (null !== f);
        }
        Yh(c);
      } catch (lc) {
        b = lc;
        X === c && null !== c && (X = c = c["return"]);
        continue;
      }
      break;
    } while (1);
  }
  function Qh() {
    var a = th.current;
    th.current = Le;
    return null === a ? Le : a;
  }
  function ng() {
    if (0 === R || 3 === R || 2 === R) R = 4;
    null === N || 0 === (le & 268435455) && 0 === (wh & 268435455) || Jh(N, Z);
  }
  function Ph(a, b) {
    var c = H;
    H |= 2;
    var d = Qh();
    if (N !== a || Z !== b) Ah = null, Rh(a, b);
    do try {
      Zh();
      break;
    } catch (e) {
      Th(a, e);
    } while (1);
    Ud();
    H = c;
    th.current = d;
    if (null !== X) throw Error(n(261));
    N = null;
    Z = 0;
    return R;
  }
  function Zh() {
    for (; null !== X;) $h(X);
  }
  function Sh() {
    for (; null !== X && !Lc();) $h(X);
  }
  function $h(a) {
    var b = ai(a.alternate, a, $f);
    a.memoizedProps = a.pendingProps;
    null === b ? Yh(a) : X = b;
    uh.current = null;
  }
  function Yh(a) {
    var b = a;
    do {
      var c = b.alternate;
      a = b["return"];
      if (0 === (b.flags & 32768)) {
        if (c = Bg(c, b, $f), null !== c) {
          X = c;
          return;
        }
      } else {
        c = Fg(c, b);
        if (null !== c) {
          c.flags &= 32767;
          X = c;
          return;
        }
        if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;else {
          R = 6;
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
    0 === R && (R = 5);
  }
  function Wh(a, b, c) {
    var d = C,
      e = W.transition;
    try {
      W.transition = null, C = 1, bi(a, b, c, d);
    } finally {
      W.transition = e, C = d;
    }
    return null;
  }
  function bi(a, b, c, d) {
    do Oh(); while (null !== Dh);
    if (0 !== (H & 6)) throw Error(n(327));
    c = a.finishedWork;
    var e = a.finishedLanes;
    if (null === c) return null;
    a.finishedWork = null;
    a.finishedLanes = 0;
    if (c === a.current) throw Error(n(177));
    a.callbackNode = null;
    a.callbackPriority = 0;
    var f = c.lanes | c.childLanes;
    Gc(a, f);
    a === N && (X = N = null, Z = 0);
    0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || Ch || (Ch = !0, Mh(Pc, function () {
      Oh();
      return null;
    }));
    f = 0 !== (c.flags & 15990);
    if (0 !== (c.subtreeFlags & 15990) || f) {
      f = W.transition;
      W.transition = null;
      var g = C;
      C = 1;
      var h = H;
      H |= 4;
      uh.current = null;
      Lg(a, c);
      $g(c, a);
      Ia(a.containerInfo);
      a.current = c;
      dh(c, a, e);
      Mc();
      H = h;
      C = g;
      W.transition = f;
    } else a.current = c;
    Ch && (Ch = !1, Dh = a, Eh = e);
    f = a.pendingLanes;
    0 === f && (Mf = null);
    Tc(c.stateNode, d);
    Kh(a, D());
    if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, {
      componentStack: e.stack,
      digest: e.digest
    });
    if (Jf) throw Jf = !1, a = Kf, Kf = null, a;
    0 !== (Eh & 1) && 0 !== a.tag && Oh();
    f = a.pendingLanes;
    0 !== (f & 1) ? a === Gh ? Fh++ : (Fh = 0, Gh = a) : Fh = 0;
    ad();
    return null;
  }
  function Oh() {
    if (null !== Dh) {
      var a = Ic(Eh),
        b = W.transition,
        c = C;
      try {
        W.transition = null;
        C = 16 > a ? 16 : a;
        if (null === Dh) var d = !1;else {
          a = Dh;
          Dh = null;
          Eh = 0;
          if (0 !== (H & 6)) throw Error(n(331));
          var e = H;
          H |= 4;
          for (T = a.current; null !== T;) {
            var f = T,
              g = f.child;
            if (0 !== (T.flags & 16)) {
              var h = f.deletions;
              if (null !== h) {
                for (var k = 0; k < h.length; k++) {
                  var l = h[k];
                  for (T = l; null !== T;) {
                    var m = T;
                    switch (m.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Mg(8, m, f);
                    }
                    var r = m.child;
                    if (null !== r) r["return"] = m, T = r;else for (; null !== T;) {
                      m = T;
                      var p = m.sibling,
                        B = m["return"];
                      Pg(m);
                      if (m === l) {
                        T = null;
                        break;
                      }
                      if (null !== p) {
                        p["return"] = B;
                        T = p;
                        break;
                      }
                      T = B;
                    }
                  }
                }
                var w = f.alternate;
                if (null !== w) {
                  var Y = w.child;
                  if (null !== Y) {
                    w.child = null;
                    do {
                      var ya = Y.sibling;
                      Y.sibling = null;
                      Y = ya;
                    } while (null !== Y);
                  }
                }
                T = f;
              }
            }
            if (0 !== (f.subtreeFlags & 2064) && null !== g) g["return"] = f, T = g;else b: for (; null !== T;) {
              f = T;
              if (0 !== (f.flags & 2048)) switch (f.tag) {
                case 0:
                case 11:
                case 15:
                  Mg(9, f, f["return"]);
              }
              var E = f.sibling;
              if (null !== E) {
                E["return"] = f["return"];
                T = E;
                break b;
              }
              T = f["return"];
            }
          }
          var u = a.current;
          for (T = u; null !== T;) {
            g = T;
            var t = g.child;
            if (0 !== (g.subtreeFlags & 2064) && null !== t) t["return"] = g, T = t;else b: for (g = u; null !== T;) {
              h = T;
              if (0 !== (h.flags & 2048)) try {
                switch (h.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ng(9, h);
                }
              } catch (lc) {
                U(h, h["return"], lc);
              }
              if (h === g) {
                T = null;
                break b;
              }
              var Db = h.sibling;
              if (null !== Db) {
                Db["return"] = h["return"];
                T = Db;
                break b;
              }
              T = h["return"];
            }
          }
          H = e;
          ad();
          if (Sc && "function" === typeof Sc.onPostCommitFiberRoot) try {
            Sc.onPostCommitFiberRoot(Rc, a);
          } catch (lc) {}
          d = !0;
        }
        return d;
      } finally {
        C = c, W.transition = b;
      }
    }
    return !1;
  }
  function ci(a, b, c) {
    b = Ef(c, b);
    b = If(a, b, 1);
    a = he(a, b, 1);
    b = O();
    null !== a && (Fc(a, 1, b), Kh(a, b));
  }
  function U(a, b, c) {
    if (3 === a.tag) ci(a, a, c);else for (; null !== b;) {
      if (3 === b.tag) {
        ci(b, a, c);
        break;
      } else if (1 === b.tag) {
        var d = b.stateNode;
        if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Mf || !Mf.has(d))) {
          a = Ef(c, a);
          a = Lf(b, a, 1);
          b = he(b, a, 1);
          a = O();
          null !== b && (Fc(b, 1, a), Kh(b, a));
          break;
        }
      }
      b = b["return"];
    }
  }
  function Of(a, b, c) {
    var d = a.pingCache;
    null !== d && d["delete"](b);
    b = O();
    a.pingedLanes |= a.suspendedLanes & c;
    N === a && (Z & c) === c && (4 === R || 3 === R && (Z & 130023424) === Z && 500 > D() - bh ? Rh(a, 0) : xh |= c);
    Kh(a, b);
  }
  function di(a, b) {
    0 === b && (0 === (a.mode & 1) ? b = 1 : (b = xc, xc <<= 1, 0 === (xc & 130023424) && (xc = 4194304)));
    var c = O();
    a = ce(a, b);
    null !== a && (Fc(a, b, c), Kh(a, c));
  }
  function og(a) {
    var b = a.memoizedState,
      c = 0;
    null !== b && (c = b.retryLane);
    di(a, c);
  }
  function Yg(a, b) {
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
    di(a, c);
  }
  var ai;
  ai = function ai(a, b, c) {
    if (null !== a) {
      if (a.memoizedProps !== b.pendingProps || z.current) G = !0;else {
        if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return G = !1, sg(a, b, c);
        G = 0 !== (a.flags & 131072) ? !0 : !1;
      }
    } else G = !1, F && 0 !== (b.flags & 1048576) && ld(b, ed, b.index);
    b.lanes = 0;
    switch (b.tag) {
      case 2:
        var d = b.type;
        cg(a, b);
        a = b.pendingProps;
        var e = mc(b, x.current);
        Yd(b, c);
        e = He(null, b, d, a, e, c);
        var f = Me();
        b.flags |= 1;
        "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, A(d) ? (f = !0, qc(b)) : f = !1, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, ee(b), e.updater = zf, b.stateNode = e, e._reactInternals = b, Df(b, d, a, c), b = dg(null, b, d, !0, f, c)) : (b.tag = 0, F && f && md(b), P(null, b, e, c), b = b.child);
        return b;
      case 16:
        d = b.elementType;
        a: {
          cg(a, b);
          a = b.pendingProps;
          e = d._init;
          d = e(d._payload);
          b.type = d;
          e = b.tag = ei(d);
          a = xf(d, a);
          switch (e) {
            case 0:
              b = Xf(null, b, d, a, c);
              break a;
            case 1:
              b = bg(null, b, d, a, c);
              break a;
            case 11:
              b = Sf(null, b, d, a, c);
              break a;
            case 14:
              b = Uf(null, b, d, xf(d.type, a), c);
              break a;
          }
          throw Error(n(306, d, ""));
        }
        return b;
      case 0:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : xf(d, e), Xf(a, b, d, e, c);
      case 1:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : xf(d, e), bg(a, b, d, e, c);
      case 3:
        a: {
          eg(b);
          if (null === a) throw Error(n(387));
          d = b.pendingProps;
          f = b.memoizedState;
          e = f.element;
          fe(a, b);
          ke(b, d, null, c);
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
              e = Ef(Error(n(423)), b);
              b = fg(a, b, d, c, e);
              break a;
            } else if (d !== e) {
              e = Ef(Error(n(424)), b);
              b = fg(a, b, d, c, e);
              break a;
            } else for (Va && (pd = Pb(b.stateNode.containerInfo), od = b, F = !0, rd = null, qd = !1), c = Pd(b, null, d, c), b.child = c; c;) c.flags = c.flags & -3 | 4096, c = c.sibling;
          } else {
            Ad();
            if (d === e) {
              b = Tf(a, b, c);
              break a;
            }
            P(a, b, d, c);
          }
          b = b.child;
        }
        return b;
      case 5:
        return ue(b), null === a && wd(b), d = b.type, e = b.pendingProps, f = null !== a ? a.memoizedProps : null, g = e.children, Na(d, e) ? g = null : null !== f && Na(d, f) && (b.flags |= 32), ag(a, b), P(a, b, g, c), b.child;
      case 6:
        return null === a && wd(b), null;
      case 13:
        return ig(a, b, c);
      case 4:
        return se(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Od(b, null, d, c) : P(a, b, d, c), b.child;
      case 11:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : xf(d, e), Sf(a, b, d, e, c);
      case 7:
        return P(a, b, b.pendingProps, c), b.child;
      case 8:
        return P(a, b, b.pendingProps.children, c), b.child;
      case 12:
        return P(a, b, b.pendingProps.children, c), b.child;
      case 10:
        a: {
          d = b.type._context;
          e = b.pendingProps;
          f = b.memoizedProps;
          g = e.value;
          Vd(b, d, g);
          if (null !== f) if (Vc(f.value, g)) {
            if (f.children === e.children && !z.current) {
              b = Tf(a, b, c);
              break a;
            }
          } else for (f = b.child, null !== f && (f["return"] = b); null !== f;) {
            var h = f.dependencies;
            if (null !== h) {
              g = f.child;
              for (var k = h.firstContext; null !== k;) {
                if (k.context === d) {
                  if (1 === f.tag) {
                    k = ge(-1, c & -c);
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
                  Xd(f["return"], c, b);
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
              Xd(g, c, b);
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
          P(a, b, e.children, c);
          b = b.child;
        }
        return b;
      case 9:
        return e = b.type, d = b.pendingProps.children, Yd(b, c), e = Zd(e), d = d(e), b.flags |= 1, P(a, b, d, c), b.child;
      case 14:
        return d = b.type, e = xf(d, b.pendingProps), e = xf(d.type, e), Uf(a, b, d, e, c);
      case 15:
        return Wf(a, b, b.type, b.pendingProps, c);
      case 17:
        return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : xf(d, e), cg(a, b), b.tag = 1, A(d) ? (a = !0, qc(b)) : a = !1, Yd(b, c), Bf(b, d, e), Df(b, d, e, c), dg(null, b, d, !0, a, c);
      case 19:
        return rg(a, b, c);
      case 22:
        return Yf(a, b, c);
    }
    throw Error(n(156, b.tag));
  };
  function Mh(a, b) {
    return Jc(a, b);
  }
  function fi(a, b, c, d) {
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
  function td(a, b, c, d) {
    return new fi(a, b, c, d);
  }
  function Vf(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
  }
  function ei(a) {
    if ("function" === typeof a) return Vf(a) ? 1 : 0;
    if (void 0 !== a && null !== a) {
      a = a.$$typeof;
      if (a === ma) return 11;
      if (a === pa) return 14;
    }
    return 2;
  }
  function Jd(a, b) {
    var c = a.alternate;
    null === c ? (c = td(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
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
  function Ld(a, b, c, d, e, f) {
    var g = 2;
    d = a;
    if ("function" === typeof a) Vf(a) && (g = 1);else if ("string" === typeof a) g = 5;else a: switch (a) {
      case ha:
        return Nd(c.children, e, f, b);
      case ia:
        g = 8;
        e |= 8;
        break;
      case ja:
        return a = td(12, c, b, e | 2), a.elementType = ja, a.lanes = f, a;
      case na:
        return a = td(13, c, b, e), a.elementType = na, a.lanes = f, a;
      case oa:
        return a = td(19, c, b, e), a.elementType = oa, a.lanes = f, a;
      case ra:
        return jg(c, e, f, b);
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
    b = td(g, c, b, e);
    b.elementType = a;
    b.type = d;
    b.lanes = f;
    return b;
  }
  function Nd(a, b, c, d) {
    a = td(7, a, d, b);
    a.lanes = c;
    return a;
  }
  function jg(a, b, c, d) {
    a = td(22, a, d, b);
    a.elementType = ra;
    a.lanes = c;
    a.stateNode = {
      isHidden: !1
    };
    return a;
  }
  function Kd(a, b, c) {
    a = td(6, a, null, b);
    a.lanes = c;
    return a;
  }
  function Md(a, b, c) {
    b = td(4, null !== a.children ? a.children : [], a.key, b);
    b.lanes = c;
    b.stateNode = {
      containerInfo: a.containerInfo,
      pendingChildren: null,
      implementation: a.implementation
    };
    return b;
  }
  function gi(a, b, c, d, e) {
    this.tag = b;
    this.containerInfo = a;
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = Ra;
    this.callbackNode = this.pendingContext = this.context = null;
    this.callbackPriority = 0;
    this.eventTimes = Ec(0);
    this.expirationTimes = Ec(-1);
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = Ec(0);
    this.identifierPrefix = d;
    this.onRecoverableError = e;
    Va && (this.mutableSourceEagerHydrationData = null);
  }
  function hi(a, b, c, d, e, f, g, h, k) {
    a = new gi(a, b, c, h, k);
    1 === b ? (b = 1, !0 === f && (b |= 8)) : b = 0;
    f = td(3, null, null, b);
    a.current = f;
    f.stateNode = a;
    f.memoizedState = {
      element: d,
      isDehydrated: c,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null
    };
    ee(f);
    return a;
  }
  function ii(a) {
    if (!a) return jc;
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
      if (A(c)) return pc(a, c, b);
    }
    return b;
  }
  function ji(a) {
    var b = a._reactInternals;
    if (void 0 === b) {
      if ("function" === typeof a.render) throw Error(n(188));
      a = Object.keys(a).join(",");
      throw Error(n(268, a));
    }
    a = Aa(b);
    return null === a ? null : a.stateNode;
  }
  function ki(a, b) {
    a = a.memoizedState;
    if (null !== a && null !== a.dehydrated) {
      var c = a.retryLane;
      a.retryLane = 0 !== c && c < b ? c : b;
    }
  }
  function li(a, b) {
    ki(a, b);
    (a = a.alternate) && ki(a, b);
  }
  function mi(a) {
    a = Aa(a);
    return null === a ? null : a.stateNode;
  }
  function ni() {
    return null;
  }
  exports.attemptContinuousHydration = function (a) {
    if (13 === a.tag) {
      var b = ce(a, 134217728);
      if (null !== b) {
        var c = O();
        af(b, a, 134217728, c);
      }
      li(a, 134217728);
    }
  };
  exports.attemptDiscreteHydration = function (a) {
    if (13 === a.tag) {
      var b = ce(a, 1);
      if (null !== b) {
        var c = O();
        af(b, a, 1, c);
      }
      li(a, 1);
    }
  };
  exports.attemptHydrationAtCurrentPriority = function (a) {
    if (13 === a.tag) {
      var b = tf(a),
        c = ce(a, b);
      if (null !== c) {
        var d = O();
        af(c, a, b, d);
      }
      li(a, b);
    }
  };
  exports.attemptSynchronousHydration = function (a) {
    switch (a.tag) {
      case 3:
        var b = a.stateNode;
        if (b.current.memoizedState.isDehydrated) {
          var c = yc(b.pendingLanes);
          0 !== c && (Hc(b, c | 1), Kh(b, D()), 0 === (H & 6) && (Bh(), ad()));
        }
        break;
      case 13:
        Xh(function () {
          var b = ce(a, 1);
          if (null !== b) {
            var c = O();
            af(b, a, 1, c);
          }
        }), li(a, 1);
    }
  };
  exports.batchedUpdates = function (a, b) {
    var c = H;
    H |= 1;
    try {
      return a(b);
    } finally {
      H = c, 0 === H && (Bh(), Xc && ad());
    }
  };
  exports.createComponentSelector = function (a) {
    return {
      $$typeof: hh,
      value: a
    };
  };
  exports.createContainer = function (a, b, c, d, e, f, g) {
    return hi(a, b, !1, null, c, d, e, f, g);
  };
  exports.createHasPseudoClassSelector = function (a) {
    return {
      $$typeof: ih,
      value: a
    };
  };
  exports.createHydrationContainer = function (a, b, c, d, e, f, g, h, k) {
    a = hi(c, d, !0, a, e, f, g, h, k);
    a.context = ii(null);
    c = a.current;
    d = O();
    e = tf(c);
    f = ge(d, e);
    f.callback = void 0 !== b && null !== b ? b : null;
    he(c, f, e);
    a.current.lanes = e;
    Fc(a, e, d);
    Kh(a, d);
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
      $$typeof: jh,
      value: a
    };
  };
  exports.createTestNameSelector = function (a) {
    return {
      $$typeof: kh,
      value: a
    };
  };
  exports.createTextSelector = function (a) {
    return {
      $$typeof: lh,
      value: a
    };
  };
  exports.deferredUpdates = function (a) {
    var b = C,
      c = W.transition;
    try {
      return W.transition = null, C = 16, a();
    } finally {
      C = b, W.transition = c;
    }
  };
  exports.discreteUpdates = function (a, b, c, d, e) {
    var f = C,
      g = W.transition;
    try {
      return W.transition = null, C = 1, a(b, c, d, e);
    } finally {
      C = f, W.transition = g, 0 === H && Bh();
    }
  };
  exports.findAllNodes = rh;
  exports.findBoundingRects = function (a, b) {
    if (!bb) throw Error(n(363));
    b = rh(a, b);
    a = [];
    for (var c = 0; c < b.length; c++) a.push(db(b[c]));
    for (b = a.length - 1; 0 < b; b--) {
      c = a[b];
      for (var d = c.x, e = d + c.width, f = c.y, g = f + c.height, h = b - 1; 0 <= h; h--) if (b !== h) {
        var k = a[h],
          l = k.x,
          m = l + k.width,
          r = k.y,
          p = r + k.height;
        if (d >= l && f >= r && e <= m && g <= p) {
          a.splice(b, 1);
          break;
        } else if (!(d !== l || c.width !== k.width || p < f || r > g)) {
          r > f && (k.height += r - f, k.y = f);
          p < g && (k.height = g - r);
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
    return a;
  };
  exports.findHostInstance = ji;
  exports.findHostInstanceWithNoPortals = function (a) {
    a = za(a);
    a = null !== a ? Ca(a) : null;
    return null === a ? null : a.stateNode;
  };
  exports.findHostInstanceWithWarning = function (a) {
    return ji(a);
  };
  exports.flushControlled = function (a) {
    var b = H;
    H |= 1;
    var c = W.transition,
      d = C;
    try {
      W.transition = null, C = 1, a();
    } finally {
      C = d, W.transition = c, H = b, 0 === H && (Bh(), ad());
    }
  };
  exports.flushPassiveEffects = Oh;
  exports.flushSync = Xh;
  exports.focusWithin = function (a, b) {
    if (!bb) throw Error(n(363));
    a = nh(a);
    b = qh(a, b);
    b = Array.from(b);
    for (a = 0; a < b.length;) {
      var c = b[a++];
      if (!fb(c)) {
        if (5 === c.tag && hb(c.stateNode)) return !0;
        for (c = c.child; null !== c;) b.push(c), c = c.sibling;
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
    a = [nh(a), 0];
    for (var e = 0; e < a.length;) {
      var f = a[e++],
        g = a[e++],
        h = b[g];
      if (5 !== f.tag || !fb(f)) if (oh(f, h) && (d.push(ph(h)), g++, g > c && (c = g)), g < b.length) for (f = f.child; null !== f;) a.push(f, g), f = f.sibling;
    }
    if (c < b.length) {
      for (a = []; c < b.length; c++) a.push(ph(b[c]));
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
      findHostInstanceByFiber: mi,
      findFiberByHostInstance: a.findFiberByHostInstance || ni,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1"
    };
    if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) a = !1;else {
      var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (b.isDisabled || !b.supportsFiber) a = !0;else {
        try {
          Rc = b.inject(a), Sc = b;
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
    a = rh(a, b);
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
      f = O(),
      g = tf(e);
    c = ii(c);
    null === b.context ? b.context = c : b.pendingContext = c;
    b = ge(f, g);
    b.payload = {
      element: a
    };
    d = void 0 === d ? null : d;
    null !== d && (b.callback = d);
    a = he(e, b, g);
    null !== a && (af(a, e, g, f), ie(a, e, g));
    return g;
  };
  return exports;
};

/***/ }),

/***/ "../../node_modules/react-reconciler/constants.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__("../../node_modules/react-reconciler/cjs/react-reconciler-constants.production.min.js");
} else {}

/***/ }),

/***/ "../../node_modules/react-reconciler/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__("../../node_modules/react-reconciler/cjs/react-reconciler.production.min.js");
} else {}

/***/ }),

/***/ "../../node_modules/react/cjs/react-jsx-runtime.production.min.js":
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


var f = __webpack_require__("../../node_modules/react/index.js"),
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
  for (b in a) m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
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

/***/ "../../node_modules/react/cjs/react.production.min.js":
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
  if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
  var g = arguments.length - 2;
  if (1 === g) c.children = e;else if (1 < g) {
    for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
    c.children = f;
  }
  if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
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
  } else if (f = A(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);else if ("object" === k) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
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
function X() {
  throw Error("act(...) is not supported in production builds of React.");
}
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
exports.act = X;
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
    for (f in b) J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
  }
  var f = arguments.length - 2;
  if (1 === f) d.children = e;else if (1 < f) {
    g = Array(f);
    for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
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
exports.unstable_act = X;
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
exports.version = "18.3.1";

/***/ }),

/***/ "../../node_modules/react/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__("../../node_modules/react/cjs/react.production.min.js");
} else {}

/***/ }),

/***/ "../../node_modules/react/jsx-runtime.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js");
} else {}

/***/ }),

/***/ "../../node_modules/scheduler/cjs/scheduler.production.min.js":
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

/***/ "../../node_modules/scheduler/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__("../../node_modules/scheduler/cjs/scheduler.production.min.js");
} else {}

/***/ }),

/***/ "../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[7].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[7].use[2]!../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[0].oneOf[7].use[3]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[7].use[4]!./src/uitoolkit/home/index.module.scss":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root>*{background-color:#fafafa}.home_app__RC13l{padding:20px;max-width:960px;width:100%;align-self:center;align-items:stretch}.home_app__RC13l h1{font-size:36px;font-style:smallcaps,bold;color:#582a9c;margin-bottom:12px}.home_app__RC13l h2{font-size:30px;font-style:smallcaps;color:#fb2f8e;margin-bottom:8px}.home_app__RC13l section{margin-top:10px;margin-bottom:10px}.home_app__RC13l row{flex-direction:row;align-items:center}.home_app__RC13l column{flex-direction:column;align-items:center;flex-grow:1;flex-shrink:0}.home_app__RC13l image{flex-grow:1;flex-shrink:1;flex-basis:0;object-fit:scale-down;object-position:50%;transition:object-position 2s;align-self:stretch}.home_app__RC13l input{border-width:1px;border-color:#000}.home_app__RC13l button:hover{audio:url(res:click)}`, ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"app": `home_app__RC13l`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
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

/***/ "../../node_modules/style-loader/dist/runtime/insertBySelector.js":
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

/***/ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js":
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

/***/ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
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

/***/ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js":
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js":
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ../../node_modules/react/index.js
var react = __webpack_require__("../../node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/react-reconciler/constants.js
var constants = __webpack_require__("../../node_modules/react-reconciler/constants.js");
;// CONCATENATED MODULE: ../../renderer/dist/src/version.js
var version = '0.19.1';
//# sourceMappingURL=version.js.map
// EXTERNAL MODULE: ../../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("../../node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ../../renderer/dist/src/views/error-boundary.js
var __extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
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


var ErrorBoundary = /** @class */function (_super) {
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
  ErrorBoundary.prototype.componentDidCatch = function (error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  };
  ErrorBoundary.prototype.render = function () {
    var _a, _b;
    if (this.state.hasError) {
      return (0,jsx_runtime.jsxs)("view", {
        id: '__react-unity-error-boundary',
        style: {
          color: 'crimson',
          padding: 20,
          fontSize: 16
        },
        children: [(0,jsx_runtime.jsx)("view", {
          style: {
            marginBottom: '12px'
          },
          children: ((_a = this.state.error) === null || _a === void 0 ? void 0 : _a.message) || ''
        }), (0,jsx_runtime.jsx)("view", {
          children: ((_b = this.state.error) === null || _b === void 0 ? void 0 : _b.stack) || ''
        })]
      });
    }
    return this.props.children;
  };
  return ErrorBoundary;
}(react.Component);

//# sourceMappingURL=error-boundary.js.map
;// CONCATENATED MODULE: ../../renderer/dist/src/views/default-view.js


function DefaultView(_a) {
  var children = _a.children,
    withHelpers = _a.withHelpers,
    renderCount = _a.renderCount;
  return (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
    children: !withHelpers ? children : (0,jsx_runtime.jsx)(ErrorBoundary, {
      children: children
    }, renderCount)
  });
}
//# sourceMappingURL=default-view.js.map
;// CONCATENATED MODULE: ../../renderer/dist/src/renderer/async/objects.js
var ObjectsRepo = /** @class */function () {
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

//# sourceMappingURL=objects.js.map
// EXTERNAL MODULE: ../../node_modules/react-reconciler/index.js
var react_reconciler = __webpack_require__("../../node_modules/react-reconciler/index.js");
var react_reconciler_default = /*#__PURE__*/__webpack_require__.n(react_reconciler);
;// CONCATENATED MODULE: ../../renderer/dist/src/renderer/diffing.js
var styleStringSymbol = '__style_as_string__';
var propDepths = {
  style: 1,
  data: 1,
  custom: 1
};
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
    var prop = null;
    // If style existed in the previous properties as string, set it to null
    if (propKey === 'style' && typeof lastProps.style === 'string') {
      (updatePayload = updatePayload || {})[styleStringSymbol] = null;
    } else {
      var depth = deepDiffing > 0 ? deepDiffing : propDepths[propKey] || 0;
      if (depth > 0) {
        prop = diffProperties(lastProps[propKey], {}, depth - 1);
        if (!prop) continue;
      }
      // For all other deleted properties we add it to the queue. We use
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
    } else {
      var depth = deepDiffing > 0 ? deepDiffing : propDepths[propKey] || 0;
      if (depth > 0) {
        prop = diffProperties(lastProp, nextProp, depth - 1);
        if (!prop) continue;
      }
    }
    (updatePayload = updatePayload || {})[propKey] = prop;
  }
  return updatePayload;
}
//# sourceMappingURL=diffing.js.map
;// CONCATENATED MODULE: ../../renderer/dist/src/renderer/constants.js
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
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
function stringizePoolKey(key) {
  switch (typeof key) {
    case 'string':
      return key;
    case 'boolean':
      return key ? 'default' : '';
    case 'number':
      return key.toString();
    case 'undefined':
      return null;
    default:
      return '';
  }
}
function getAllowedProps(props, type) {
  var children = props.children,
    tag = props.tag,
    pool = props.pool,
    rest = __rest(props, ["children", "tag", "pool"]);
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
  },
  beforeActiveInstanceBlur: function beforeActiveInstanceBlur() {},
  afterActiveInstanceBlur: function afterActiveInstanceBlur() {},
  getInstanceFromNode: function getInstanceFromNode(node) {
    return undefined;
  },
  getInstanceFromScope: function getInstanceFromScope(scopeInstance) {
    return undefined;
  },
  prepareScopeUpdate: function prepareScopeUpdate(scopeInstance, instance) {}
};
var isDevelopment = "production" === 'development';
//# sourceMappingURL=constants.js.map
;// CONCATENATED MODULE: ../../renderer/dist/src/renderer/subcontexts/richtext.js
function parametrizeValue(value) {
  if (typeof value === 'number') return value + '';
  value = value + '';
  if (value.includes(' ') || value.includes('-')) return '"' + value + '"';
  return value;
}
function stringifyRichText(node) {
  var _a, _b, _c;
  if (node.hidden) return '';
  if ('text' in node) return node.text;
  var acc = [];
  var tag = node.tag;
  if (tag) {
    acc.push('<');
    acc.push(tag);
    if (((_a = node.attributes) === null || _a === void 0 ? void 0 : _a.value) != null) {
      var value = (_b = node.attributes) === null || _b === void 0 ? void 0 : _b.value;
      acc.push('=');
      acc.push(parametrizeValue(value));
    }
    for (var key in node.attributes) {
      if (key === 'value') continue;
      if (Object.prototype.hasOwnProperty.call(node.attributes, key)) {
        var value = node.attributes[key];
        if (value != null) {
          acc.push(' ');
          acc.push(key);
          acc.push('=');
          acc.push(parametrizeValue(value));
        }
      }
    }
    acc.push('>');
  }
  if (((_c = node.children) === null || _c === void 0 ? void 0 : _c.length) > 0) {
    for (var _i = 0, _d = node.children; _i < _d.length; _i++) {
      var child = _d[_i];
      acc.push(stringifyRichText(child));
    }
    if (tag) {
      acc.push('</');
      acc.push(tag);
      acc.push('>');
    }
  }
  return acc.join('');
}
//# sourceMappingURL=richtext.js.map
;// CONCATENATED MODULE: ../../renderer/dist/src/renderer/subcontexts/svg.js
function kebabize(str) {
  return str.split('').map(function (letter, idx) {
    return letter.toUpperCase() === letter ? "".concat(idx !== 0 ? '-' : '').concat(letter.toLowerCase()) : letter;
  }).join('');
}
;
function stringifyStyle(style) {
  if (typeof style === 'string') return style;
  var acc = [];
  for (var key in style) {
    if (Object.prototype.hasOwnProperty.call(style, key)) {
      var element = style[key];
      if (element != null) {
        acc.push(kebabize(key));
        acc.push(':');
        acc.push(element);
        acc.push(';');
      }
    }
  }
  return acc.join('');
}
function stringifySVG(node) {
  var _a;
  if (node.hidden) return '';
  if ('text' in node) return node.text;
  var acc = [];
  var tag = node.tag;
  if (tag) {
    acc.push('<');
    acc.push(tag);
    for (var key in node.attributes) {
      if (Object.prototype.hasOwnProperty.call(node.attributes, key)) {
        var element = node.attributes[key];
        if (key === 'style') element = stringifyStyle(element);
        if (element != null) {
          acc.push(' ');
          acc.push(kebabize(key));
          acc.push('="');
          acc.push(element);
          acc.push('"');
        }
      }
    }
  }
  if (((_a = node.children) === null || _a === void 0 ? void 0 : _a.length) > 0) {
    if (tag) acc.push('>');
    for (var _i = 0, _b = node.children; _i < _b.length; _i++) {
      var child = _b[_i];
      acc.push(stringifySVG(child));
    }
    if (tag) {
      acc.push('</');
      acc.push(tag);
      acc.push('>');
    }
  } else {
    if (tag) acc.push(' />');
  }
  return acc.join('');
}
//# sourceMappingURL=svg.js.map
;// CONCATENATED MODULE: ../../renderer/dist/src/renderer/subcontexts/index.js


var subContextRenderers = {
  richtext: stringifyRichText,
  svg: stringifySVG
};
//# sourceMappingURL=index.js.map
;// CONCATENATED MODULE: ../../renderer/dist/src/renderer/async/callbacks.js
var callbacks_extends = undefined && undefined.__extends || function () {
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
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

var CallbacksRepo = /** @class */function (_super) {
  callbacks_extends(CallbacksRepo, _super);
  function CallbacksRepo() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.call = function (ind, args) {
      var cb = _this.getObject(ind);
      var argsAsList = args;
      var argsAsArray = args;
      if (typeof argsAsArray.Length === 'number') {
        // C# Array
        args = [];
        var length = argsAsArray.Length;
        for (var index = 0; index < length; index++) args.push(argsAsArray.GetValue(index));
      } else if (typeof argsAsList.Count === 'number') {
        // C# List
        args = [];
        var length = argsAsList.Count;
        for (var index = 0; index < length; index++) args.push(argsAsList[index]);
      } else if (typeof argsAsList.Count === 'function') {
        // C# IList
        args = [];
        var length = argsAsList.Count();
        for (var index = 0; index < length; index++) args.push(argsAsArray.GetValue(index));
      }
      return cb.apply(null, args);
    };
    return _this;
  }
  return CallbacksRepo;
}(ObjectsRepo);

//# sourceMappingURL=callbacks.js.map
;// CONCATENATED MODULE: ../../renderer/dist/src/renderer/async/serializer.js


var callbacksRepo = new CallbacksRepo();
var objectsRepo = new ObjectsRepo();
// Separates properties in 3 categories: regular props, callbacks and non-serializable objects
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
//# sourceMappingURL=serializer.js.map
;// CONCATENATED MODULE: ../../renderer/dist/src/renderer/async/reconciler.js
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};





var refId = 0;
var ctxMap = new Map();
var updateSubContext = function updateSubContext(instance) {
  var rend = subContextRenderers[instance.type];
  var root = instance === null || instance === void 0 ? void 0 : instance.root;
  var cur = instance;
  while (cur && !root) {
    root = cur.root;
    cur = cur.parent;
  }
  if (!root) return;
  var content = rend(root.subContext.node);
  if (instance.type === 'richtext') {
    // instance.hostContext.commands.push(['x', { r: root.refId, c: content }]);
    instance.hostContext.commands.push([6, root.refId, content]);
  } else if (instance.type === 'svg') {
    // instance.hostContext.commands.push(['u', { r: root.refId, t: 'svg', ...convertPropsToSerializable({ innerContent: content }) }]);
    instance.hostContext.commands.push([5, root.refId, 'svg', convertPropsToSerializable({
      innerContent: content
    })]);
  }
};
var hostConfig = __assign(__assign({}, commonReconciler), {
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
      commands: commands,
      refId: rootContainer.refId,
      type: 'native'
    };
    ctxMap.set(context, ctx);
    return ctx;
  },
  getChildHostContext: function getChildHostContext(parentCtx, type) {
    if (type === 'richtext' && parentCtx.type === 'native') return {
      type: 'richtext',
      hostContext: parentCtx,
      node: null,
      parent: null,
      root: null
    };
    if (type === 'svg' && parentCtx.type === 'native') return {
      type: 'svg',
      hostContext: parentCtx,
      node: null,
      parent: null,
      root: null
    };
    return parentCtx;
  },
  getPublicInstance: function getPublicInstance(instance) {
    if (instance.type === 'native') return instance.context.GetRef(instance.refId, instance.commands.length > 0);
    return null;
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
    var aProps = getAllowedProps(props, type);
    if (ctx.type === 'native') {
      refId++;
      // ctx.commands.push(['c', { t: type, r: refId, k: stringizePoolKey(props.pool), ...convertPropsToSerializable(aProps) }]);
      ctx.commands.push([0, refId, type, convertPropsToSerializable(aProps), stringizePoolKey(props.pool)]);
      if (rootContainer.fiberCache) rootContainer.fiberCache.setObject(refId, internalHandle);
      var res = __assign(__assign({}, ctx), {
        refId: refId
      });
      if (type === 'richtext') {
        res.subContext = {
          type: 'richtext',
          node: {
            tag: '',
            children: [],
            attributes: aProps
          },
          root: res,
          hostContext: res,
          parent: null
        };
      }
      if (type === 'svg') {
        res.subContext = {
          type: 'svg',
          node: {
            tag: '',
            children: [],
            attributes: aProps
          },
          root: res,
          hostContext: res,
          parent: null
        };
      }
      return res;
    } else if (ctx.type === 'richtext' || ctx.type === 'svg') {
      return __assign(__assign({}, ctx), {
        node: {
          tag: type,
          children: [],
          attributes: aProps
        }
      });
    }
  },
  createTextInstance: function createTextInstance(text, rootContainer, ctx, internalHandle) {
    if (ctx.type === 'native') {
      refId++;
      // ctx.commands.push(['t', { r: refId, c: text }]);
      ctx.commands.push([1, refId, text]);
      if (rootContainer.fiberCache) rootContainer.fiberCache.setObject(refId, internalHandle);
      return __assign(__assign({}, ctx), {
        refId: refId
      });
    } else if (ctx.type === 'richtext' || ctx.type === 'svg') {
      return __assign(__assign({}, ctx), {
        node: {
          text: text
        }
      });
    }
  },
  appendInitialChild: function appendInitialChild(parent, child) {
    if (!child) return;
    if (parent.type === 'native' && parent.subContext) parent = parent.subContext;
    if (parent.type === 'native' && child.type === 'native') {
      // parent.commands.push(['a', { p: parent.refId, c: child.refId }]);
      parent.commands.push([2, parent.refId, child.refId]);
    } else if (parent.type === 'richtext' && child.type === 'richtext' || parent.type === 'svg' && child.type === 'svg') {
      if ('children' in parent.node) parent.node.children.push(child.node);
      child.root = parent.root;
      child.parent = parent;
      updateSubContext(child);
    }
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
    if (instance.type === 'native') {
      // instance.commands.push(['u', { r: instance.refId, t: type, ...convertPropsToSerializable(props) }]);
      instance.commands.push([5, instance.refId, type, convertPropsToSerializable(props)]);
    } else if (instance.type === 'richtext' || instance.type === 'svg') {
      if ('attributes' in instance.node) instance.node.attributes = __assign(__assign({}, instance.node.attributes), props);
      updateSubContext(instance);
    }
  },
  commitTextUpdate: function commitTextUpdate(instance, oldText, newText) {
    if (instance.type === 'native') {
      // instance.commands.push(['x', { r: instance.refId, c: newText }]);
      instance.commands.push([6, instance.refId, newText]);
    } else if (instance.type === 'richtext' || instance.type === 'svg') {
      instance.node.text = newText;
      updateSubContext(instance);
    }
  },
  appendChild: function appendChild(parent, child) {
    if (!child) return;
    if (parent.type === 'native' && parent.subContext) parent = parent.subContext;
    if (parent.type === 'native' && child.type === 'native') {
      // child.commands.push(['a', { p: parent.refId, c: child.refId }]);
      child.commands.push([2, parent.refId, child.refId]);
    } else if (parent.type === 'richtext' && child.type === 'richtext' || parent.type === 'svg' && child.type === 'svg') {
      if ('children' in parent.node) parent.node.children.push(child.node);
      child.root = parent.root;
      child.parent = parent;
      updateSubContext(child);
    }
  },
  appendChildToContainer: function appendChildToContainer(parent, child) {
    if (child.type === 'native')
      // child.commands.push(['a', { p: parent.refId, c: child.refId }]);
      child.commands.push([2, parent.refId, child.refId]);
  },
  insertBefore: function insertBefore(parent, child, beforeChild) {
    if (!child) return;
    if (parent.type === 'native' && parent.subContext) parent = parent.subContext;
    if (parent.type === 'native' && child.type === 'native' && beforeChild.type === 'native') {
      // child.commands.push(['i', { p: parent.refId, c: child.refId, i: beforeChild.refId }]);
      child.commands.push([4, parent.refId, child.refId, beforeChild.refId]);
    } else if (parent.type === 'richtext' && child.type === 'richtext' && beforeChild.type === 'richtext' || parent.type === 'svg' && child.type === 'svg' && beforeChild.type === 'svg') {
      if ('children' in parent.node) {
        var index = parent.node.children.indexOf(beforeChild.node);
        if (index >= 0) parent.node.children.splice(index, 0, child.node);else parent.node.children.push(child.node);
      }
      child.root = parent.root;
      child.parent = parent;
      updateSubContext(child);
    }
  },
  insertInContainerBefore: function insertInContainerBefore(parent, child, beforeChild) {
    if (child.type === 'native' && beforeChild.type === 'native')
      // child.commands.push(['i', { p: parent.refId, c: child.refId, i: beforeChild.refId }]);
      child.commands.push([4, parent.refId, child.refId, beforeChild.refId]);
  },
  removeChild: function removeChild(parent, child) {
    if (!child) return;
    if (parent.type === 'native' && parent.subContext) parent = parent.subContext;
    if (parent.type === 'native' && child.type === 'native') {
      // child.commands.push(['r', { p: parent.refId, c: child.refId }]);
      child.commands.push([3, parent.refId, child.refId]);
    } else if (parent.type === 'richtext' && child.type === 'richtext' || parent.type === 'svg' && child.type === 'svg') {
      if ('children' in parent.node) {
        var index = parent.node.children.indexOf(child.node);
        if (index >= 0) parent.node.children.splice(index, 1);
      }
      updateSubContext(parent);
    }
  },
  removeChildFromContainer: function removeChildFromContainer(parent, child) {
    if (child.type === 'native')
      // child.commands.push(['r', { p: parent.refId, c: child.refId }]);
      child.commands.push([3, parent.refId, child.refId]);
  },
  resetTextContent: function resetTextContent() {},
  preparePortalMount: function preparePortalMount() {},
  detachDeletedInstance: function detachDeletedInstance() {},
  // Required for Suspense
  hideInstance: function hideInstance(instance) {
    if (instance.type === 'native') {
      // instance.commands.push(['h', { r: instance.refId, h: true }]);
      instance.commands.push([7, instance.refId, true]);
    } else if (instance.type === 'richtext' || instance.type === 'svg') {
      instance.node.hidden = true;
      updateSubContext(instance);
    }
  },
  hideTextInstance: function hideTextInstance(instance) {
    if (instance.type === 'native') {
      // instance.commands.push(['h', { r: instance.refId, h: true }]);
      instance.commands.push([7, instance.refId, true]);
    } else if (instance.type === 'richtext' || instance.type === 'svg') {
      instance.node.hidden = true;
      updateSubContext(instance);
    }
  },
  unhideInstance: function unhideInstance(instance) {
    if (instance.type === 'native') {
      // instance.commands.push(['h', { r: instance.refId, h: false }]);
      instance.commands.push([7, instance.refId, false]);
    } else if (instance.type === 'richtext' || instance.type === 'svg') {
      instance.node.hidden = false;
      updateSubContext(instance);
    }
  },
  unhideTextInstance: function unhideTextInstance(instance) {
    if (instance.type === 'native') {
      // instance.commands.push(['h', { r: instance.refId, h: false }]);
      instance.commands.push([7, instance.refId, false]);
    } else if (instance.type === 'richtext' || instance.type === 'svg') {
      instance.node.hidden = false;
      updateSubContext(instance);
    }
  }
});
var asyncReconciler = react_reconciler_default()(hostConfig);
//# sourceMappingURL=reconciler.js.map
;// CONCATENATED MODULE: ../../renderer/dist/src/renderer/sync/reconciler.js
var reconciler_assign = undefined && undefined.__assign || function () {
  reconciler_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return reconciler_assign.apply(this, arguments);
};



var hostContext = {};
var childContext = {};
var reconciler_hostConfig = reconciler_assign(reconciler_assign({}, commonReconciler), {
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
    return UnityBridge.createElement(props.tag || type, children, rootContainerInstance, aProps, stringizePoolKey(props.pool));
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
var syncReconciler = react_reconciler_default()(reconciler_hostConfig);
//# sourceMappingURL=reconciler.js.map
;// CONCATENATED MODULE: ../../renderer/dist/src/renderer/renderer.js








var containerMap = new Map();
var renderCount = 0;
function _render(element, options) {
  if (options === void 0) {
    options = {};
  }
  renderCount++;
  var hostContainer = (options === null || options === void 0 ? void 0 : options.hostContainer) || HostContainer;
  var cacheKey = hostContainer.InstanceId >= 0 ? hostContainer.InstanceId : hostContainer;
  var isAsync = !(options === null || options === void 0 ? void 0 : options.disableBatchRendering);
  var _a = containerMap.get(cacheKey) || {},
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
      var hostContainerInstance_1 = {
        type: 'native',
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
        hostContainerInstance_1.context.FlushCommands(serialized);
      };
      hostRoot = asyncReconciler.createContainer(hostContainerInstance_1, mode, null, false, undefined, '', function (error) {
        return console.error(error);
      }, null);
    } else {
      hostRoot = syncReconciler.createContainer(hostContainer, mode, null, false, undefined, '', function (error) {
        return console.error(error);
      }, null);
    }
    containerMap.set(cacheKey, {
      hostRoot: hostRoot,
      asyncJobCallback: asyncJobCallback
    });
  }
  var shouldWrapWithHelpers = !(options === null || options === void 0 ? void 0 : options.disableHelpers);
  if (shouldWrapWithHelpers) {
    var viewWrapperProps = {
      withHelpers: !(options === null || options === void 0 ? void 0 : options.disableHelpers),
      renderCount: renderCount
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
/**
 * @deprecated Instead, import `render` directly from `@reactunity/renderer`
 */

var Renderer = {
  render: function render(element, options) {
    if (options === void 0) {
      options = {};
    }
    return _render(element, options);
  }
};
var batchedUpdates = asyncReconciler.batchedUpdates;
var flushSync = asyncReconciler.flushSync;
//# sourceMappingURL=renderer.js.map
;// CONCATENATED MODULE: ./src/assets/base64Image.txt
/* harmony default export */ const base64Image = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAcElEQVR4AezOsREAIAjFUAs3dgAGYkj8C3g2oBTJXfo3iD419dJ2eOn5EuM6LnsFynQkb4AKQP2zlBOLpAEBAgQIECBAgAA1Au29p6aDrlPBQd3UdJA7yIcUho4KA5UBBxDHk9GwzwdiGQY6gVEwCgC3bcAZ+oXojwAAAABJRU5ErkJggg==\n");
;// CONCATENATED MODULE: ./src/assets/bg.png
const bg_namespaceObject = __webpack_require__.p + "static/media/bg.png.png";
;// CONCATENATED MODULE: ./src/assets/check.svg
var _path;
var _excluded = ["title", "titleId"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }


var SvgCheck = function SvgCheck(_ref, ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    fill: "black",
    ref: ref,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react.createElement("path", {
    d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
  })));
};
var ForwardRef = /*#__PURE__*/(0,react.forwardRef)(SvgCheck);

/* harmony default export */ const check = (__webpack_require__.p + "static/media/check.4701752daa56435b75dc4edd7886d403.svg");
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__("../../node_modules/style-loader/dist/runtime/styleDomAPI.js");
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__("../../node_modules/style-loader/dist/runtime/insertBySelector.js");
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__("../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__("../../node_modules/style-loader/dist/runtime/insertStyleElement.js");
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ../../node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__("../../node_modules/style-loader/dist/runtime/styleTagTransform.js");
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[7].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[7].use[2]!../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[0].oneOf[7].use[3]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[7].use[4]!./src/uitoolkit/home/index.module.scss
var index_module = __webpack_require__("../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[7].use[1]!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[7].use[2]!../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[0].oneOf[7].use[3]!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].oneOf[7].use[4]!./src/uitoolkit/home/index.module.scss");
;// CONCATENATED MODULE: ./src/uitoolkit/home/index.module.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(index_module/* default */.A, options);




       /* harmony default export */ const home_index_module = (index_module/* default */.A && index_module/* default */.A.locals ? index_module/* default */.A.locals : undefined);

;// CONCATENATED MODULE: ./src/uitoolkit/home/index.tsx
/* @jsxImportSource @reactunity/renderer/uitoolkit */var webImage='https://www.google.com.tr/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';function App(){return (0,jsx_runtime.jsx)("scroll",{children:(0,jsx_runtime.jsxs)("view",{className:home_index_module.app,children:[(0,jsx_runtime.jsx)("h1",{children:"React Unity Showcase"}),(0,jsx_runtime.jsx)(ForwardRef,{}),(0,jsx_runtime.jsx)("svg",{source:check}),(0,jsx_runtime.jsx)("svg",{source:'https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/betterplace.svg'}),(0,jsx_runtime.jsx)("svg",{source:'https://dev.w3.org/SVG/tools/svgweb/samples/svg-files/compuserver_msn_Ford_Focus.svg'}),(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsx)("h2",{children:"Button"}),(0,jsx_runtime.jsx)("button",{className:home_index_module.clickButton,children:"Click"})]}),(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsx)("h2",{children:"Anchor"}),(0,jsx_runtime.jsx)("anchor",{url:"https://www.google.com",children:"Open Google"})]}),(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsx)("h2",{children:"Input"}),(0,jsx_runtime.jsx)("input",{})]}),(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsx)("h2",{children:"Toggle"}),(0,jsx_runtime.jsxs)("row",{children:[(0,jsx_runtime.jsx)("toggle",{}),"Toggle"]})]}),(0,jsx_runtime.jsxs)("section",{children:[(0,jsx_runtime.jsx)("h2",{children:"Image"}),(0,jsx_runtime.jsxs)("row",{children:[(0,jsx_runtime.jsx)("image",{source:bg_namespaceObject}),(0,jsx_runtime.jsx)("image",{source:base64Image}),(0,jsx_runtime.jsx)("image",{source:webImage})]})]})]})});};_render((0,jsx_runtime.jsx)(App,{}));
;// CONCATENATED MODULE: ./src/entry/uitoolkit.tsx

})();

/******/ })()
;