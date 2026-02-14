function ow(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const i in r)
        if (i !== "default" && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i);
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
          ? (o.credentials = "omit")
          : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
function _y(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Sy = { exports: {} },
  uu = {},
  Ey = { exports: {} },
  ye = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ys = Symbol.for("react.element"),
  sw = Symbol.for("react.portal"),
  aw = Symbol.for("react.fragment"),
  lw = Symbol.for("react.strict_mode"),
  uw = Symbol.for("react.profiler"),
  cw = Symbol.for("react.provider"),
  dw = Symbol.for("react.context"),
  fw = Symbol.for("react.forward_ref"),
  hw = Symbol.for("react.suspense"),
  pw = Symbol.for("react.memo"),
  mw = Symbol.for("react.lazy"),
  Mp = Symbol.iterator;
function vw(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Mp && e[Mp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var wy = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ty = Object.assign,
  Ry = {};
function yo(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Ry),
    (this.updater = n || wy));
}
yo.prototype.isReactComponent = {};
yo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
yo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function xy() {}
xy.prototype = yo.prototype;
function $f(e, t, n) {
  ((this.props = e),
    (this.context = t),
    (this.refs = Ry),
    (this.updater = n || wy));
}
var Uf = ($f.prototype = new xy());
Uf.constructor = $f;
Ty(Uf, yo.prototype);
Uf.isPureReactComponent = !0;
var zp = Array.isArray,
  Cy = Object.prototype.hasOwnProperty,
  Ff = { current: null },
  Ny = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ay(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Cy.call(t, r) && !Ny.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Ys,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: Ff.current,
  };
}
function gw(e, t) {
  return {
    $$typeof: Ys,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function jf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ys;
}
function yw(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Vp = /\/+/g;
function oc(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? yw("" + e.key)
    : t.toString(36);
}
function Ga(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ys:
          case sw:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + oc(s, 0) : r),
      zp(i)
        ? ((n = ""),
          e != null && (n = e.replace(Vp, "$&/") + "/"),
          Ga(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (jf(i) &&
            (i = gw(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Vp, "$&/") + "/") +
                e,
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), zp(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + oc(o, a);
      s += Ga(o, t, n, l, i);
    }
  else if (((l = vw(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      ((o = o.value), (l = r + oc(o, a++)), (s += Ga(o, t, n, l, i)));
  else if (o === "object")
    throw (
      (t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  return s;
}
function ga(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ga(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function _w(e) {
  if (e._status === -1) {
    var t = e._result;
    ((t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t)));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Nt = { current: null },
  Ka = { transition: null },
  Sw = {
    ReactCurrentDispatcher: Nt,
    ReactCurrentBatchConfig: Ka,
    ReactCurrentOwner: Ff,
  };
function Py() {
  throw Error("act(...) is not supported in production builds of React.");
}
ye.Children = {
  map: ga,
  forEach: function (e, t, n) {
    ga(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ga(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ga(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!jf(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
ye.Component = yo;
ye.Fragment = aw;
ye.Profiler = uw;
ye.PureComponent = $f;
ye.StrictMode = lw;
ye.Suspense = hw;
ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sw;
ye.act = Py;
ye.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Ty({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = Ff.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Cy.call(t, l) &&
        !Ny.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: Ys, type: e.type, key: i, ref: o, props: r, _owner: s };
};
ye.createContext = function (e) {
  return (
    (e = {
      $$typeof: dw,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: cw, _context: e }),
    (e.Consumer = e)
  );
};
ye.createElement = Ay;
ye.createFactory = function (e) {
  var t = Ay.bind(null, e);
  return ((t.type = e), t);
};
ye.createRef = function () {
  return { current: null };
};
ye.forwardRef = function (e) {
  return { $$typeof: fw, render: e };
};
ye.isValidElement = jf;
ye.lazy = function (e) {
  return { $$typeof: mw, _payload: { _status: -1, _result: e }, _init: _w };
};
ye.memo = function (e, t) {
  return { $$typeof: pw, type: e, compare: t === void 0 ? null : t };
};
ye.startTransition = function (e) {
  var t = Ka.transition;
  Ka.transition = {};
  try {
    e();
  } finally {
    Ka.transition = t;
  }
};
ye.unstable_act = Py;
ye.useCallback = function (e, t) {
  return Nt.current.useCallback(e, t);
};
ye.useContext = function (e) {
  return Nt.current.useContext(e);
};
ye.useDebugValue = function () {};
ye.useDeferredValue = function (e) {
  return Nt.current.useDeferredValue(e);
};
ye.useEffect = function (e, t) {
  return Nt.current.useEffect(e, t);
};
ye.useId = function () {
  return Nt.current.useId();
};
ye.useImperativeHandle = function (e, t, n) {
  return Nt.current.useImperativeHandle(e, t, n);
};
ye.useInsertionEffect = function (e, t) {
  return Nt.current.useInsertionEffect(e, t);
};
ye.useLayoutEffect = function (e, t) {
  return Nt.current.useLayoutEffect(e, t);
};
ye.useMemo = function (e, t) {
  return Nt.current.useMemo(e, t);
};
ye.useReducer = function (e, t, n) {
  return Nt.current.useReducer(e, t, n);
};
ye.useRef = function (e) {
  return Nt.current.useRef(e);
};
ye.useState = function (e) {
  return Nt.current.useState(e);
};
ye.useSyncExternalStore = function (e, t, n) {
  return Nt.current.useSyncExternalStore(e, t, n);
};
ye.useTransition = function () {
  return Nt.current.useTransition();
};
ye.version = "18.3.1";
Ey.exports = ye;
var x = Ey.exports;
const P = _y(x),
  ky = ow({ __proto__: null, default: P }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ew = x,
  ww = Symbol.for("react.element"),
  Tw = Symbol.for("react.fragment"),
  Rw = Object.prototype.hasOwnProperty,
  xw = Ew.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Cw = { key: !0, ref: !0, __self: !0, __source: !0 };
function Oy(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  (n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref));
  for (r in t) Rw.call(t, r) && !Cw.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: ww,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: xw.current,
  };
}
uu.Fragment = Tw;
uu.jsx = Oy;
uu.jsxs = Oy;
Sy.exports = uu;
var Iy = Sy.exports;
const j = Iy.jsx,
  De = Iy.jsxs;
var by = { exports: {} },
  Qt = {},
  Ly = { exports: {} },
  Dy = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, K) {
    var X = M.length;
    M.push(K);
    e: for (; 0 < X; ) {
      var J = (X - 1) >>> 1,
        w = M[J];
      if (0 < i(w, K)) ((M[J] = K), (M[X] = w), (X = J));
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var K = M[0],
      X = M.pop();
    if (X !== K) {
      M[0] = X;
      e: for (var J = 0, w = M.length, k = w >>> 1; J < k; ) {
        var O = 2 * (J + 1) - 1,
          B = M[O],
          z = O + 1,
          te = M[z];
        if (0 > i(B, X))
          z < w && 0 > i(te, B)
            ? ((M[J] = te), (M[z] = X), (J = z))
            : ((M[J] = B), (M[O] = X), (J = O));
        else if (z < w && 0 > i(te, X)) ((M[J] = te), (M[z] = X), (J = z));
        else break e;
      }
    }
    return K;
  }
  function i(M, K) {
    var X = M.sortIndex - K.sortIndex;
    return X !== 0 ? X : M.id - K.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    f = 3,
    h = !1,
    v = !1,
    y = !1,
    _ = typeof setTimeout == "function" ? setTimeout : null,
    g = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(M) {
    for (var K = n(u); K !== null; ) {
      if (K.callback === null) r(u);
      else if (K.startTime <= M)
        (r(u), (K.sortIndex = K.expirationTime), t(l, K));
      else break;
      K = n(u);
    }
  }
  function S(M) {
    if (((y = !1), p(M), !v))
      if (n(l) !== null) ((v = !0), fe(T));
      else {
        var K = n(u);
        K !== null && Ee(S, K.startTime - M);
      }
  }
  function T(M, K) {
    ((v = !1), y && ((y = !1), g(A), (A = -1)), (h = !0));
    var X = f;
    try {
      for (
        p(K), d = n(l);
        d !== null && (!(d.expirationTime > K) || (M && !ee()));
      ) {
        var J = d.callback;
        if (typeof J == "function") {
          ((d.callback = null), (f = d.priorityLevel));
          var w = J(d.expirationTime <= K);
          ((K = e.unstable_now()),
            typeof w == "function" ? (d.callback = w) : d === n(l) && r(l),
            p(K));
        } else r(l);
        d = n(l);
      }
      if (d !== null) var k = !0;
      else {
        var O = n(u);
        (O !== null && Ee(S, O.startTime - K), (k = !1));
      }
      return k;
    } finally {
      ((d = null), (f = X), (h = !1));
    }
  }
  var N = !1,
    C = null,
    A = -1,
    I = 5,
    b = -1;
  function ee() {
    return !(e.unstable_now() - b < I);
  }
  function ge() {
    if (C !== null) {
      var M = e.unstable_now();
      b = M;
      var K = !0;
      try {
        K = C(!0, M);
      } finally {
        K ? Y() : ((N = !1), (C = null));
      }
    } else N = !1;
  }
  var Y;
  if (typeof m == "function")
    Y = function () {
      m(ge);
    };
  else if (typeof MessageChannel < "u") {
    var q = new MessageChannel(),
      Ae = q.port2;
    ((q.port1.onmessage = ge),
      (Y = function () {
        Ae.postMessage(null);
      }));
  } else
    Y = function () {
      _(ge, 0);
    };
  function fe(M) {
    ((C = M), N || ((N = !0), Y()));
  }
  function Ee(M, K) {
    A = _(function () {
      M(e.unstable_now());
    }, K);
  }
  ((e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || h || ((v = !0), fe(T));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (I = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (M) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var K = 3;
          break;
        default:
          K = f;
      }
      var X = f;
      f = K;
      try {
        return M();
      } finally {
        f = X;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, K) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var X = f;
      f = M;
      try {
        return K();
      } finally {
        f = X;
      }
    }),
    (e.unstable_scheduleCallback = function (M, K, X) {
      var J = e.unstable_now();
      switch (
        (typeof X == "object" && X !== null
          ? ((X = X.delay), (X = typeof X == "number" && 0 < X ? J + X : J))
          : (X = J),
        M)
      ) {
        case 1:
          var w = -1;
          break;
        case 2:
          w = 250;
          break;
        case 5:
          w = 1073741823;
          break;
        case 4:
          w = 1e4;
          break;
        default:
          w = 5e3;
      }
      return (
        (w = X + w),
        (M = {
          id: c++,
          callback: K,
          priorityLevel: M,
          startTime: X,
          expirationTime: w,
          sortIndex: -1,
        }),
        X > J
          ? ((M.sortIndex = X),
            t(u, M),
            n(l) === null &&
              M === n(u) &&
              (y ? (g(A), (A = -1)) : (y = !0), Ee(S, X - J)))
          : ((M.sortIndex = w), t(l, M), v || h || ((v = !0), fe(T))),
        M
      );
    }),
    (e.unstable_shouldYield = ee),
    (e.unstable_wrapCallback = function (M) {
      var K = f;
      return function () {
        var X = f;
        f = K;
        try {
          return M.apply(this, arguments);
        } finally {
          f = X;
        }
      };
    }));
})(Dy);
Ly.exports = Dy;
var Nw = Ly.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Aw = x,
  Ht = Nw;
function D(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var My = new Set(),
  ms = {};
function hi(e, t) {
  (eo(e, t), eo(e + "Capture", t));
}
function eo(e, t) {
  for (ms[e] = t, e = 0; e < t.length; e++) My.add(t[e]);
}
var Gn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  rd = Object.prototype.hasOwnProperty,
  Pw =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  $p = {},
  Up = {};
function kw(e) {
  return rd.call(Up, e)
    ? !0
    : rd.call($p, e)
      ? !1
      : Pw.test(e)
        ? (Up[e] = !0)
        : (($p[e] = !0), !1);
}
function Ow(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Iw(e, t, n, r) {
  if (t === null || typeof t > "u" || Ow(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function At(e, t, n, r, i, o, s) {
  ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s));
}
var mt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    mt[e] = new At(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  mt[t] = new At(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  mt[e] = new At(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  mt[e] = new At(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    mt[e] = new At(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  mt[e] = new At(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  mt[e] = new At(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  mt[e] = new At(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  mt[e] = new At(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Bf = /[\-:]([a-z])/g;
function Wf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Bf, Wf);
    mt[t] = new At(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Bf, Wf);
    mt[t] = new At(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Bf, Wf);
  mt[t] = new At(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  mt[e] = new At(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
mt.xlinkHref = new At(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  mt[e] = new At(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Zf(e, t, n, r) {
  var i = mt.hasOwnProperty(t) ? mt[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Iw(t, n, i, r) && (n = null),
    r || i === null
      ? kw(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Xn = Aw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ya = Symbol.for("react.element"),
  Pi = Symbol.for("react.portal"),
  ki = Symbol.for("react.fragment"),
  Hf = Symbol.for("react.strict_mode"),
  id = Symbol.for("react.profiler"),
  zy = Symbol.for("react.provider"),
  Vy = Symbol.for("react.context"),
  Gf = Symbol.for("react.forward_ref"),
  od = Symbol.for("react.suspense"),
  sd = Symbol.for("react.suspense_list"),
  Kf = Symbol.for("react.memo"),
  or = Symbol.for("react.lazy"),
  $y = Symbol.for("react.offscreen"),
  Fp = Symbol.iterator;
function No(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Fp && e[Fp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Je = Object.assign,
  sc;
function jo(e) {
  if (sc === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      sc = (t && t[1]) || "";
    }
  return (
    `
` +
    sc +
    e
  );
}
var ac = !1;
function lc(e, t) {
  if (!e || ac) return "";
  ac = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];
      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    ((ac = !1), (Error.prepareStackTrace = n));
  }
  return (e = e ? e.displayName || e.name : "") ? jo(e) : "";
}
function bw(e) {
  switch (e.tag) {
    case 5:
      return jo(e.type);
    case 16:
      return jo("Lazy");
    case 13:
      return jo("Suspense");
    case 19:
      return jo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return ((e = lc(e.type, !1)), e);
    case 11:
      return ((e = lc(e.type.render, !1)), e);
    case 1:
      return ((e = lc(e.type, !0)), e);
    default:
      return "";
  }
}
function ad(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ki:
      return "Fragment";
    case Pi:
      return "Portal";
    case id:
      return "Profiler";
    case Hf:
      return "StrictMode";
    case od:
      return "Suspense";
    case sd:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Vy:
        return (e.displayName || "Context") + ".Consumer";
      case zy:
        return (e._context.displayName || "Context") + ".Provider";
      case Gf:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Kf:
        return (
          (t = e.displayName || null),
          t !== null ? t : ad(e.type) || "Memo"
        );
      case or:
        ((t = e._payload), (e = e._init));
        try {
          return ad(e(t));
        } catch {}
    }
  return null;
}
function Lw(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ad(t);
    case 8:
      return t === Hf ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function xr(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Uy(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Dw(e) {
  var t = Uy(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          ((r = "" + s), o.call(this, s));
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          ((e._valueTracker = null), delete e[t]);
        },
      }
    );
  }
}
function _a(e) {
  e._valueTracker || (e._valueTracker = Dw(e));
}
function Fy(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Uy(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ul(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ld(e, t) {
  var n = t.checked;
  return Je({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function jp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  ((n = xr(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    }));
}
function jy(e, t) {
  ((t = t.checked), t != null && Zf(e, "checked", t, !1));
}
function ud(e, t) {
  jy(e, t);
  var n = xr(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  (t.hasOwnProperty("value")
    ? cd(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && cd(e, t.type, xr(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked));
}
function Bp(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    ((t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t));
  }
  ((n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n));
}
function cd(e, t, n) {
  (t !== "number" || ul(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Bo = Array.isArray;
function Zi(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      ((i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0));
  } else {
    for (n = "" + xr(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function dd(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(D(91));
  return Je({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Wp(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(D(92));
      if (Bo(n)) {
        if (1 < n.length) throw Error(D(93));
        n = n[0];
      }
      t = n;
    }
    (t == null && (t = ""), (n = t));
  }
  e._wrapperState = { initialValue: xr(n) };
}
function By(e, t) {
  var n = xr(t.value),
    r = xr(t.defaultValue);
  (n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r));
}
function Zp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Wy(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function fd(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Wy(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Sa,
  Zy = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Sa = Sa || document.createElement("div"),
          Sa.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Sa.firstChild;
        e.firstChild;
      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function vs(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Jo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Mw = ["Webkit", "ms", "Moz", "O"];
Object.keys(Jo).forEach(function (e) {
  Mw.forEach(function (t) {
    ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Jo[t] = Jo[e]));
  });
});
function Hy(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Jo.hasOwnProperty(e) && Jo[e])
      ? ("" + t).trim()
      : t + "px";
}
function Gy(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Hy(n, t[n], r);
      (n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i));
    }
}
var zw = Je(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function hd(e, t) {
  if (t) {
    if (zw[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(D(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(D(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(D(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(D(62));
  }
}
function pd(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var md = null;
function Qf(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var vd = null,
  Hi = null,
  Gi = null;
function Hp(e) {
  if ((e = Xs(e))) {
    if (typeof vd != "function") throw Error(D(280));
    var t = e.stateNode;
    t && ((t = pu(t)), vd(e.stateNode, e.type, t));
  }
}
function Ky(e) {
  Hi ? (Gi ? Gi.push(e) : (Gi = [e])) : (Hi = e);
}
function Qy() {
  if (Hi) {
    var e = Hi,
      t = Gi;
    if (((Gi = Hi = null), Hp(e), t)) for (e = 0; e < t.length; e++) Hp(t[e]);
  }
}
function Yy(e, t) {
  return e(t);
}
function Jy() {}
var uc = !1;
function qy(e, t, n) {
  if (uc) return e(t, n);
  uc = !0;
  try {
    return Yy(e, t, n);
  } finally {
    ((uc = !1), (Hi !== null || Gi !== null) && (Jy(), Qy()));
  }
}
function gs(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = pu(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r));
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(D(231, t, typeof n));
  return n;
}
var gd = !1;
if (Gn)
  try {
    var Ao = {};
    (Object.defineProperty(Ao, "passive", {
      get: function () {
        gd = !0;
      },
    }),
      window.addEventListener("test", Ao, Ao),
      window.removeEventListener("test", Ao, Ao));
  } catch {
    gd = !1;
  }
function Vw(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var qo = !1,
  cl = null,
  dl = !1,
  yd = null,
  $w = {
    onError: function (e) {
      ((qo = !0), (cl = e));
    },
  };
function Uw(e, t, n, r, i, o, s, a, l) {
  ((qo = !1), (cl = null), Vw.apply($w, arguments));
}
function Fw(e, t, n, r, i, o, s, a, l) {
  if ((Uw.apply(this, arguments), qo)) {
    if (qo) {
      var u = cl;
      ((qo = !1), (cl = null));
    } else throw Error(D(198));
    dl || ((dl = !0), (yd = u));
  }
}
function pi(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do ((t = e), t.flags & 4098 && (n = t.return), (e = t.return));
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Xy(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Gp(e) {
  if (pi(e) !== e) throw Error(D(188));
}
function jw(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = pi(e)), t === null)) throw Error(D(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return (Gp(i), e);
        if (o === r) return (Gp(i), t);
        o = o.sibling;
      }
      throw Error(D(188));
    }
    if (n.return !== r.return) ((n = i), (r = o));
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          ((s = !0), (n = i), (r = o));
          break;
        }
        if (a === r) {
          ((s = !0), (r = i), (n = o));
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            ((s = !0), (n = o), (r = i));
            break;
          }
          if (a === r) {
            ((s = !0), (r = o), (n = i));
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(D(189));
      }
    }
    if (n.alternate !== r) throw Error(D(190));
  }
  if (n.tag !== 3) throw Error(D(188));
  return n.stateNode.current === n ? e : t;
}
function e0(e) {
  return ((e = jw(e)), e !== null ? t0(e) : null);
}
function t0(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = t0(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var n0 = Ht.unstable_scheduleCallback,
  Kp = Ht.unstable_cancelCallback,
  Bw = Ht.unstable_shouldYield,
  Ww = Ht.unstable_requestPaint,
  tt = Ht.unstable_now,
  Zw = Ht.unstable_getCurrentPriorityLevel,
  Yf = Ht.unstable_ImmediatePriority,
  r0 = Ht.unstable_UserBlockingPriority,
  fl = Ht.unstable_NormalPriority,
  Hw = Ht.unstable_LowPriority,
  i0 = Ht.unstable_IdlePriority,
  cu = null,
  Cn = null;
function Gw(e) {
  if (Cn && typeof Cn.onCommitFiberRoot == "function")
    try {
      Cn.onCommitFiberRoot(cu, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var vn = Math.clz32 ? Math.clz32 : Yw,
  Kw = Math.log,
  Qw = Math.LN2;
function Yw(e) {
  return ((e >>>= 0), e === 0 ? 32 : (31 - ((Kw(e) / Qw) | 0)) | 0);
}
var Ea = 64,
  wa = 4194304;
function Wo(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function hl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = Wo(a)) : ((o &= s), o !== 0 && (r = Wo(o)));
  } else ((s = n & ~i), s !== 0 ? (r = Wo(s)) : o !== 0 && (r = Wo(o)));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      ((n = 31 - vn(t)), (i = 1 << n), (r |= e[n]), (t &= ~i));
  return r;
}
function Jw(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
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
      return t + 5e3;
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
function qw(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;
  ) {
    var s = 31 - vn(o),
      a = 1 << s,
      l = i[s];
    (l === -1
      ? (!(a & n) || a & r) && (i[s] = Jw(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a));
  }
}
function _d(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function o0() {
  var e = Ea;
  return ((Ea <<= 1), !(Ea & 4194240) && (Ea = 64), e);
}
function cc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Js(e, t, n) {
  ((e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - vn(t)),
    (e[t] = n));
}
function Xw(e, t) {
  var n = e.pendingLanes & ~t;
  ((e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements));
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - vn(n),
      o = 1 << i;
    ((t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o));
  }
}
function Jf(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - vn(n),
      i = 1 << r;
    ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
  }
}
var Pe = 0;
function s0(e) {
  return (
    (e &= -e),
    1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
  );
}
var a0,
  qf,
  l0,
  u0,
  c0,
  Sd = !1,
  Ta = [],
  mr = null,
  vr = null,
  gr = null,
  ys = new Map(),
  _s = new Map(),
  cr = [],
  eT =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function Qp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      mr = null;
      break;
    case "dragenter":
    case "dragleave":
      vr = null;
      break;
    case "mouseover":
    case "mouseout":
      gr = null;
      break;
    case "pointerover":
    case "pointerout":
      ys.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      _s.delete(t.pointerId);
  }
}
function Po(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Xs(t)), t !== null && qf(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function tT(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return ((mr = Po(mr, e, t, n, r, i)), !0);
    case "dragenter":
      return ((vr = Po(vr, e, t, n, r, i)), !0);
    case "mouseover":
      return ((gr = Po(gr, e, t, n, r, i)), !0);
    case "pointerover":
      var o = i.pointerId;
      return (ys.set(o, Po(ys.get(o) || null, e, t, n, r, i)), !0);
    case "gotpointercapture":
      return (
        (o = i.pointerId),
        _s.set(o, Po(_s.get(o) || null, e, t, n, r, i)),
        !0
      );
  }
  return !1;
}
function d0(e) {
  var t = Gr(e.target);
  if (t !== null) {
    var n = pi(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Xy(n)), t !== null)) {
          ((e.blockedOn = t),
            c0(e.priority, function () {
              l0(n);
            }));
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Qa(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ed(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      ((md = r), n.target.dispatchEvent(r), (md = null));
    } else return ((t = Xs(n)), t !== null && qf(t), (e.blockedOn = n), !1);
    t.shift();
  }
  return !0;
}
function Yp(e, t, n) {
  Qa(e) && n.delete(t);
}
function nT() {
  ((Sd = !1),
    mr !== null && Qa(mr) && (mr = null),
    vr !== null && Qa(vr) && (vr = null),
    gr !== null && Qa(gr) && (gr = null),
    ys.forEach(Yp),
    _s.forEach(Yp));
}
function ko(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Sd ||
      ((Sd = !0),
      Ht.unstable_scheduleCallback(Ht.unstable_NormalPriority, nT)));
}
function Ss(e) {
  function t(i) {
    return ko(i, e);
  }
  if (0 < Ta.length) {
    ko(Ta[0], e);
    for (var n = 1; n < Ta.length; n++) {
      var r = Ta[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    mr !== null && ko(mr, e),
      vr !== null && ko(vr, e),
      gr !== null && ko(gr, e),
      ys.forEach(t),
      _s.forEach(t),
      n = 0;
    n < cr.length;
    n++
  )
    ((r = cr[n]), r.blockedOn === e && (r.blockedOn = null));
  for (; 0 < cr.length && ((n = cr[0]), n.blockedOn === null); )
    (d0(n), n.blockedOn === null && cr.shift());
}
var Ki = Xn.ReactCurrentBatchConfig,
  pl = !0;
function rT(e, t, n, r) {
  var i = Pe,
    o = Ki.transition;
  Ki.transition = null;
  try {
    ((Pe = 1), Xf(e, t, n, r));
  } finally {
    ((Pe = i), (Ki.transition = o));
  }
}
function iT(e, t, n, r) {
  var i = Pe,
    o = Ki.transition;
  Ki.transition = null;
  try {
    ((Pe = 4), Xf(e, t, n, r));
  } finally {
    ((Pe = i), (Ki.transition = o));
  }
}
function Xf(e, t, n, r) {
  if (pl) {
    var i = Ed(e, t, n, r);
    if (i === null) (Sc(e, t, r, ml, n), Qp(e, r));
    else if (tT(i, e, t, n, r)) r.stopPropagation();
    else if ((Qp(e, r), t & 4 && -1 < eT.indexOf(e))) {
      for (; i !== null; ) {
        var o = Xs(i);
        if (
          (o !== null && a0(o),
          (o = Ed(e, t, n, r)),
          o === null && Sc(e, t, r, ml, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else Sc(e, t, r, null, n);
  }
}
var ml = null;
function Ed(e, t, n, r) {
  if (((ml = null), (e = Qf(r)), (e = Gr(e)), e !== null))
    if (((t = pi(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Xy(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ((ml = e), null);
}
function f0(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Zw()) {
        case Yf:
          return 1;
        case r0:
          return 4;
        case fl:
        case Hw:
          return 16;
        case i0:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var hr = null,
  eh = null,
  Ya = null;
function h0() {
  if (Ya) return Ya;
  var e,
    t = eh,
    n = t.length,
    r,
    i = "value" in hr ? hr.value : hr.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (Ya = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Ja(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ra() {
  return !0;
}
function Jp() {
  return !1;
}
function Yt(e) {
  function t(n, r, i, o, s) {
    ((this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null));
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Ra
        : Jp),
      (this.isPropagationStopped = Jp),
      this
    );
  }
  return (
    Je(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ra));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ra));
      },
      persist: function () {},
      isPersistent: Ra,
    }),
    t
  );
}
var _o = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  th = Yt(_o),
  qs = Je({}, _o, { view: 0, detail: 0 }),
  oT = Yt(qs),
  dc,
  fc,
  Oo,
  du = Je({}, qs, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: nh,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Oo &&
            (Oo && e.type === "mousemove"
              ? ((dc = e.screenX - Oo.screenX), (fc = e.screenY - Oo.screenY))
              : (fc = dc = 0),
            (Oo = e)),
          dc);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : fc;
    },
  }),
  qp = Yt(du),
  sT = Je({}, du, { dataTransfer: 0 }),
  aT = Yt(sT),
  lT = Je({}, qs, { relatedTarget: 0 }),
  hc = Yt(lT),
  uT = Je({}, _o, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  cT = Yt(uT),
  dT = Je({}, _o, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  fT = Yt(dT),
  hT = Je({}, _o, { data: 0 }),
  Xp = Yt(hT),
  pT = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  mT = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  vT = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function gT(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = vT[e]) ? !!t[e] : !1;
}
function nh() {
  return gT;
}
var yT = Je({}, qs, {
    key: function (e) {
      if (e.key) {
        var t = pT[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ja(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? mT[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: nh,
    charCode: function (e) {
      return e.type === "keypress" ? Ja(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ja(e)
        : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
    },
  }),
  _T = Yt(yT),
  ST = Je({}, du, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  em = Yt(ST),
  ET = Je({}, qs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: nh,
  }),
  wT = Yt(ET),
  TT = Je({}, _o, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  RT = Yt(TT),
  xT = Je({}, du, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  CT = Yt(xT),
  NT = [9, 13, 27, 32],
  rh = Gn && "CompositionEvent" in window,
  Xo = null;
Gn && "documentMode" in document && (Xo = document.documentMode);
var AT = Gn && "TextEvent" in window && !Xo,
  p0 = Gn && (!rh || (Xo && 8 < Xo && 11 >= Xo)),
  tm = String.fromCharCode(32),
  nm = !1;
function m0(e, t) {
  switch (e) {
    case "keyup":
      return NT.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function v0(e) {
  return ((e = e.detail), typeof e == "object" && "data" in e ? e.data : null);
}
var Oi = !1;
function PT(e, t) {
  switch (e) {
    case "compositionend":
      return v0(t);
    case "keypress":
      return t.which !== 32 ? null : ((nm = !0), tm);
    case "textInput":
      return ((e = t.data), e === tm && nm ? null : e);
    default:
      return null;
  }
}
function kT(e, t) {
  if (Oi)
    return e === "compositionend" || (!rh && m0(e, t))
      ? ((e = h0()), (Ya = eh = hr = null), (Oi = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return p0 && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var OT = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function rm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!OT[e.type] : t === "textarea";
}
function g0(e, t, n, r) {
  (Ky(r),
    (t = vl(t, "onChange")),
    0 < t.length &&
      ((n = new th("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t })));
}
var es = null,
  Es = null;
function IT(e) {
  A0(e, 0);
}
function fu(e) {
  var t = Li(e);
  if (Fy(t)) return e;
}
function bT(e, t) {
  if (e === "change") return t;
}
var y0 = !1;
if (Gn) {
  var pc;
  if (Gn) {
    var mc = "oninput" in document;
    if (!mc) {
      var im = document.createElement("div");
      (im.setAttribute("oninput", "return;"),
        (mc = typeof im.oninput == "function"));
    }
    pc = mc;
  } else pc = !1;
  y0 = pc && (!document.documentMode || 9 < document.documentMode);
}
function om() {
  es && (es.detachEvent("onpropertychange", _0), (Es = es = null));
}
function _0(e) {
  if (e.propertyName === "value" && fu(Es)) {
    var t = [];
    (g0(t, Es, e, Qf(e)), qy(IT, t));
  }
}
function LT(e, t, n) {
  e === "focusin"
    ? (om(), (es = t), (Es = n), es.attachEvent("onpropertychange", _0))
    : e === "focusout" && om();
}
function DT(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return fu(Es);
}
function MT(e, t) {
  if (e === "click") return fu(t);
}
function zT(e, t) {
  if (e === "input" || e === "change") return fu(t);
}
function VT(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Sn = typeof Object.is == "function" ? Object.is : VT;
function ws(e, t) {
  if (Sn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!rd.call(t, i) || !Sn(e[i], t[i])) return !1;
  }
  return !0;
}
function sm(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function am(e, t) {
  var n = sm(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = sm(n);
  }
}
function S0(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? S0(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function E0() {
  for (var e = window, t = ul(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ul(e.document);
  }
  return t;
}
function ih(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function $T(e) {
  var t = E0(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    S0(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ih(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        ((n.selectionStart = t),
          (n.selectionEnd = Math.min(e, n.value.length)));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        ((r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = am(n, o)));
        var s = am(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      ((e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top));
  }
}
var UT = Gn && "documentMode" in document && 11 >= document.documentMode,
  Ii = null,
  wd = null,
  ts = null,
  Td = !1;
function lm(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Td ||
    Ii == null ||
    Ii !== ul(r) ||
    ((r = Ii),
    "selectionStart" in r && ih(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ts && ws(ts, r)) ||
      ((ts = r),
      (r = vl(wd, "onSelect")),
      0 < r.length &&
        ((t = new th("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ii))));
}
function xa(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var bi = {
    animationend: xa("Animation", "AnimationEnd"),
    animationiteration: xa("Animation", "AnimationIteration"),
    animationstart: xa("Animation", "AnimationStart"),
    transitionend: xa("Transition", "TransitionEnd"),
  },
  vc = {},
  w0 = {};
Gn &&
  ((w0 = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete bi.animationend.animation,
    delete bi.animationiteration.animation,
    delete bi.animationstart.animation),
  "TransitionEvent" in window || delete bi.transitionend.transition);
function hu(e) {
  if (vc[e]) return vc[e];
  if (!bi[e]) return e;
  var t = bi[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in w0) return (vc[e] = t[n]);
  return e;
}
var T0 = hu("animationend"),
  R0 = hu("animationiteration"),
  x0 = hu("animationstart"),
  C0 = hu("transitionend"),
  N0 = new Map(),
  um =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Or(e, t) {
  (N0.set(e, t), hi(t, [e]));
}
for (var gc = 0; gc < um.length; gc++) {
  var yc = um[gc],
    FT = yc.toLowerCase(),
    jT = yc[0].toUpperCase() + yc.slice(1);
  Or(FT, "on" + jT);
}
Or(T0, "onAnimationEnd");
Or(R0, "onAnimationIteration");
Or(x0, "onAnimationStart");
Or("dblclick", "onDoubleClick");
Or("focusin", "onFocus");
Or("focusout", "onBlur");
Or(C0, "onTransitionEnd");
eo("onMouseEnter", ["mouseout", "mouseover"]);
eo("onMouseLeave", ["mouseout", "mouseover"]);
eo("onPointerEnter", ["pointerout", "pointerover"]);
eo("onPointerLeave", ["pointerout", "pointerover"]);
hi(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
hi(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
hi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
hi(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
hi(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
hi(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var Zo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  BT = new Set("cancel close invalid load scroll toggle".split(" ").concat(Zo));
function cm(e, t, n) {
  var r = e.type || "unknown-event";
  ((e.currentTarget = n), Fw(r, t, void 0, e), (e.currentTarget = null));
}
function A0(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          (cm(i, a, u), (o = l));
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          (cm(i, a, u), (o = l));
        }
    }
  }
  if (dl) throw ((e = yd), (dl = !1), (yd = null), e);
}
function Le(e, t) {
  var n = t[Ad];
  n === void 0 && (n = t[Ad] = new Set());
  var r = e + "__bubble";
  n.has(r) || (P0(t, e, 2, !1), n.add(r));
}
function _c(e, t, n) {
  var r = 0;
  (t && (r |= 4), P0(n, e, r, t));
}
var Ca = "_reactListening" + Math.random().toString(36).slice(2);
function Ts(e) {
  if (!e[Ca]) {
    ((e[Ca] = !0),
      My.forEach(function (n) {
        n !== "selectionchange" && (BT.has(n) || _c(n, !1, e), _c(n, !0, e));
      }));
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ca] || ((t[Ca] = !0), _c("selectionchange", !1, t));
  }
}
function P0(e, t, n, r) {
  switch (f0(t)) {
    case 1:
      var i = rT;
      break;
    case 4:
      i = iT;
      break;
    default:
      i = Xf;
  }
  ((n = i.bind(null, t, n, e)),
    (i = void 0),
    !gd ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1));
}
function Sc(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = Gr(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  qy(function () {
    var u = o,
      c = Qf(n),
      d = [];
    e: {
      var f = N0.get(e);
      if (f !== void 0) {
        var h = th,
          v = e;
        switch (e) {
          case "keypress":
            if (Ja(n) === 0) break e;
          case "keydown":
          case "keyup":
            h = _T;
            break;
          case "focusin":
            ((v = "focus"), (h = hc));
            break;
          case "focusout":
            ((v = "blur"), (h = hc));
            break;
          case "beforeblur":
          case "afterblur":
            h = hc;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            h = qp;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            h = aT;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            h = wT;
            break;
          case T0:
          case R0:
          case x0:
            h = cT;
            break;
          case C0:
            h = RT;
            break;
          case "scroll":
            h = oT;
            break;
          case "wheel":
            h = CT;
            break;
          case "copy":
          case "cut":
          case "paste":
            h = fT;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            h = em;
        }
        var y = (t & 4) !== 0,
          _ = !y && e === "scroll",
          g = y ? (f !== null ? f + "Capture" : null) : f;
        y = [];
        for (var m = u, p; m !== null; ) {
          p = m;
          var S = p.stateNode;
          if (
            (p.tag === 5 &&
              S !== null &&
              ((p = S),
              g !== null && ((S = gs(m, g)), S != null && y.push(Rs(m, S, p)))),
            _)
          )
            break;
          m = m.return;
        }
        0 < y.length &&
          ((f = new h(f, v, null, n, c)), d.push({ event: f, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (h = e === "mouseout" || e === "pointerout"),
          f &&
            n !== md &&
            (v = n.relatedTarget || n.fromElement) &&
            (Gr(v) || v[Kn]))
        )
          break e;
        if (
          (h || f) &&
          ((f =
            c.window === c
              ? c
              : (f = c.ownerDocument)
                ? f.defaultView || f.parentWindow
                : window),
          h
            ? ((v = n.relatedTarget || n.toElement),
              (h = u),
              (v = v ? Gr(v) : null),
              v !== null &&
                ((_ = pi(v)), v !== _ || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((h = null), (v = u)),
          h !== v)
        ) {
          if (
            ((y = qp),
            (S = "onMouseLeave"),
            (g = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = em),
              (S = "onPointerLeave"),
              (g = "onPointerEnter"),
              (m = "pointer")),
            (_ = h == null ? f : Li(h)),
            (p = v == null ? f : Li(v)),
            (f = new y(S, m + "leave", h, n, c)),
            (f.target = _),
            (f.relatedTarget = p),
            (S = null),
            Gr(c) === u &&
              ((y = new y(g, m + "enter", v, n, c)),
              (y.target = p),
              (y.relatedTarget = _),
              (S = y)),
            (_ = S),
            h && v)
          )
            t: {
              for (y = h, g = v, m = 0, p = y; p; p = Ei(p)) m++;
              for (p = 0, S = g; S; S = Ei(S)) p++;
              for (; 0 < m - p; ) ((y = Ei(y)), m--);
              for (; 0 < p - m; ) ((g = Ei(g)), p--);
              for (; m--; ) {
                if (y === g || (g !== null && y === g.alternate)) break t;
                ((y = Ei(y)), (g = Ei(g)));
              }
              y = null;
            }
          else y = null;
          (h !== null && dm(d, f, h, y, !1),
            v !== null && _ !== null && dm(d, _, v, y, !0));
        }
      }
      e: {
        if (
          ((f = u ? Li(u) : window),
          (h = f.nodeName && f.nodeName.toLowerCase()),
          h === "select" || (h === "input" && f.type === "file"))
        )
          var T = bT;
        else if (rm(f))
          if (y0) T = zT;
          else {
            T = DT;
            var N = LT;
          }
        else
          (h = f.nodeName) &&
            h.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (T = MT);
        if (T && (T = T(e, u))) {
          g0(d, T, n, c);
          break e;
        }
        (N && N(e, f, u),
          e === "focusout" &&
            (N = f._wrapperState) &&
            N.controlled &&
            f.type === "number" &&
            cd(f, "number", f.value));
      }
      switch (((N = u ? Li(u) : window), e)) {
        case "focusin":
          (rm(N) || N.contentEditable === "true") &&
            ((Ii = N), (wd = u), (ts = null));
          break;
        case "focusout":
          ts = wd = Ii = null;
          break;
        case "mousedown":
          Td = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((Td = !1), lm(d, n, c));
          break;
        case "selectionchange":
          if (UT) break;
        case "keydown":
        case "keyup":
          lm(d, n, c);
      }
      var C;
      if (rh)
        e: {
          switch (e) {
            case "compositionstart":
              var A = "onCompositionStart";
              break e;
            case "compositionend":
              A = "onCompositionEnd";
              break e;
            case "compositionupdate":
              A = "onCompositionUpdate";
              break e;
          }
          A = void 0;
        }
      else
        Oi
          ? m0(e, n) && (A = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (A = "onCompositionStart");
      (A &&
        (p0 &&
          n.locale !== "ko" &&
          (Oi || A !== "onCompositionStart"
            ? A === "onCompositionEnd" && Oi && (C = h0())
            : ((hr = c),
              (eh = "value" in hr ? hr.value : hr.textContent),
              (Oi = !0))),
        (N = vl(u, A)),
        0 < N.length &&
          ((A = new Xp(A, e, null, n, c)),
          d.push({ event: A, listeners: N }),
          C ? (A.data = C) : ((C = v0(n)), C !== null && (A.data = C)))),
        (C = AT ? PT(e, n) : kT(e, n)) &&
          ((u = vl(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Xp("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = C))));
    }
    A0(d, t);
  });
}
function Rs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function vl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    (i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = gs(e, n)),
      o != null && r.unshift(Rs(e, o, i)),
      (o = gs(e, t)),
      o != null && r.push(Rs(e, o, i))),
      (e = e.return));
  }
  return r;
}
function Ei(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function dm(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    (a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = gs(n, o)), l != null && s.unshift(Rs(n, l, a)))
        : i || ((l = gs(n, o)), l != null && s.push(Rs(n, l, a)))),
      (n = n.return));
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var WT = /\r\n?/g,
  ZT = /\u0000|\uFFFD/g;
function fm(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      WT,
      `
`,
    )
    .replace(ZT, "");
}
function Na(e, t, n) {
  if (((t = fm(t)), fm(e) !== t && n)) throw Error(D(425));
}
function gl() {}
var Rd = null,
  xd = null;
function Cd(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Nd = typeof setTimeout == "function" ? setTimeout : void 0,
  HT = typeof clearTimeout == "function" ? clearTimeout : void 0,
  hm = typeof Promise == "function" ? Promise : void 0,
  GT =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof hm < "u"
        ? function (e) {
            return hm.resolve(null).then(e).catch(KT);
          }
        : Nd;
function KT(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ec(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          (e.removeChild(i), Ss(t));
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Ss(t);
}
function yr(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function pm(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var So = Math.random().toString(36).slice(2),
  xn = "__reactFiber$" + So,
  xs = "__reactProps$" + So,
  Kn = "__reactContainer$" + So,
  Ad = "__reactEvents$" + So,
  QT = "__reactListeners$" + So,
  YT = "__reactHandles$" + So;
function Gr(e) {
  var t = e[xn];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Kn] || n[xn])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = pm(e); e !== null; ) {
          if ((n = e[xn])) return n;
          e = pm(e);
        }
      return t;
    }
    ((e = n), (n = e.parentNode));
  }
  return null;
}
function Xs(e) {
  return (
    (e = e[xn] || e[Kn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Li(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(D(33));
}
function pu(e) {
  return e[xs] || null;
}
var Pd = [],
  Di = -1;
function Ir(e) {
  return { current: e };
}
function ze(e) {
  0 > Di || ((e.current = Pd[Di]), (Pd[Di] = null), Di--);
}
function be(e, t) {
  (Di++, (Pd[Di] = e.current), (e.current = t));
}
var Cr = {},
  Et = Ir(Cr),
  Lt = Ir(!1),
  ni = Cr;
function to(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Cr;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Dt(e) {
  return ((e = e.childContextTypes), e != null);
}
function yl() {
  (ze(Lt), ze(Et));
}
function mm(e, t, n) {
  if (Et.current !== Cr) throw Error(D(168));
  (be(Et, t), be(Lt, n));
}
function k0(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(D(108, Lw(e) || "Unknown", i));
  return Je({}, n, r);
}
function _l(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Cr),
    (ni = Et.current),
    be(Et, e),
    be(Lt, Lt.current),
    !0
  );
}
function vm(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(D(169));
  (n
    ? ((e = k0(e, t, ni)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ze(Lt),
      ze(Et),
      be(Et, e))
    : ze(Lt),
    be(Lt, n));
}
var Mn = null,
  mu = !1,
  wc = !1;
function O0(e) {
  Mn === null ? (Mn = [e]) : Mn.push(e);
}
function JT(e) {
  ((mu = !0), O0(e));
}
function br() {
  if (!wc && Mn !== null) {
    wc = !0;
    var e = 0,
      t = Pe;
    try {
      var n = Mn;
      for (Pe = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      ((Mn = null), (mu = !1));
    } catch (i) {
      throw (Mn !== null && (Mn = Mn.slice(e + 1)), n0(Yf, br), i);
    } finally {
      ((Pe = t), (wc = !1));
    }
  }
  return null;
}
var Mi = [],
  zi = 0,
  Sl = null,
  El = 0,
  en = [],
  tn = 0,
  ri = null,
  Vn = 1,
  $n = "";
function Ur(e, t) {
  ((Mi[zi++] = El), (Mi[zi++] = Sl), (Sl = e), (El = t));
}
function I0(e, t, n) {
  ((en[tn++] = Vn), (en[tn++] = $n), (en[tn++] = ri), (ri = e));
  var r = Vn;
  e = $n;
  var i = 32 - vn(r) - 1;
  ((r &= ~(1 << i)), (n += 1));
  var o = 32 - vn(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    ((o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (Vn = (1 << (32 - vn(t) + i)) | (n << i) | r),
      ($n = o + e));
  } else ((Vn = (1 << o) | (n << i) | r), ($n = e));
}
function oh(e) {
  e.return !== null && (Ur(e, 1), I0(e, 1, 0));
}
function sh(e) {
  for (; e === Sl; )
    ((Sl = Mi[--zi]), (Mi[zi] = null), (El = Mi[--zi]), (Mi[zi] = null));
  for (; e === ri; )
    ((ri = en[--tn]),
      (en[tn] = null),
      ($n = en[--tn]),
      (en[tn] = null),
      (Vn = en[--tn]),
      (en[tn] = null));
}
var Zt = null,
  Bt = null,
  Be = !1,
  pn = null;
function b0(e, t) {
  var n = nn(5, null, null, 0);
  ((n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n));
}
function gm(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Zt = e), (Bt = yr(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Zt = e), (Bt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = ri !== null ? { id: Vn, overflow: $n } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = nn(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Zt = e),
            (Bt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function kd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Od(e) {
  if (Be) {
    var t = Bt;
    if (t) {
      var n = t;
      if (!gm(e, t)) {
        if (kd(e)) throw Error(D(418));
        t = yr(n.nextSibling);
        var r = Zt;
        t && gm(e, t)
          ? b0(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Be = !1), (Zt = e));
      }
    } else {
      if (kd(e)) throw Error(D(418));
      ((e.flags = (e.flags & -4097) | 2), (Be = !1), (Zt = e));
    }
  }
}
function ym(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Zt = e;
}
function Aa(e) {
  if (e !== Zt) return !1;
  if (!Be) return (ym(e), (Be = !0), !1);
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Cd(e.type, e.memoizedProps))),
    t && (t = Bt))
  ) {
    if (kd(e)) throw (L0(), Error(D(418)));
    for (; t; ) (b0(e, t), (t = yr(t.nextSibling)));
  }
  if ((ym(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(D(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Bt = yr(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Bt = null;
    }
  } else Bt = Zt ? yr(e.stateNode.nextSibling) : null;
  return !0;
}
function L0() {
  for (var e = Bt; e; ) e = yr(e.nextSibling);
}
function no() {
  ((Bt = Zt = null), (Be = !1));
}
function ah(e) {
  pn === null ? (pn = [e]) : pn.push(e);
}
var qT = Xn.ReactCurrentBatchConfig;
function Io(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(D(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(D(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(D(284));
    if (!n._owner) throw Error(D(290, e));
  }
  return e;
}
function Pa(e, t) {
  throw (
    (e = Object.prototype.toString.call(t)),
    Error(
      D(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    )
  );
}
function _m(e) {
  var t = e._init;
  return t(e._payload);
}
function D0(e) {
  function t(g, m) {
    if (e) {
      var p = g.deletions;
      p === null ? ((g.deletions = [m]), (g.flags |= 16)) : p.push(m);
    }
  }
  function n(g, m) {
    if (!e) return null;
    for (; m !== null; ) (t(g, m), (m = m.sibling));
    return null;
  }
  function r(g, m) {
    for (g = new Map(); m !== null; )
      (m.key !== null ? g.set(m.key, m) : g.set(m.index, m), (m = m.sibling));
    return g;
  }
  function i(g, m) {
    return ((g = wr(g, m)), (g.index = 0), (g.sibling = null), g);
  }
  function o(g, m, p) {
    return (
      (g.index = p),
      e
        ? ((p = g.alternate),
          p !== null
            ? ((p = p.index), p < m ? ((g.flags |= 2), m) : p)
            : ((g.flags |= 2), m))
        : ((g.flags |= 1048576), m)
    );
  }
  function s(g) {
    return (e && g.alternate === null && (g.flags |= 2), g);
  }
  function a(g, m, p, S) {
    return m === null || m.tag !== 6
      ? ((m = Pc(p, g.mode, S)), (m.return = g), m)
      : ((m = i(m, p)), (m.return = g), m);
  }
  function l(g, m, p, S) {
    var T = p.type;
    return T === ki
      ? c(g, m, p.props.children, S, p.key)
      : m !== null &&
          (m.elementType === T ||
            (typeof T == "object" &&
              T !== null &&
              T.$$typeof === or &&
              _m(T) === m.type))
        ? ((S = i(m, p.props)), (S.ref = Io(g, m, p)), (S.return = g), S)
        : ((S = il(p.type, p.key, p.props, null, g.mode, S)),
          (S.ref = Io(g, m, p)),
          (S.return = g),
          S);
  }
  function u(g, m, p, S) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== p.containerInfo ||
      m.stateNode.implementation !== p.implementation
      ? ((m = kc(p, g.mode, S)), (m.return = g), m)
      : ((m = i(m, p.children || [])), (m.return = g), m);
  }
  function c(g, m, p, S, T) {
    return m === null || m.tag !== 7
      ? ((m = ei(p, g.mode, S, T)), (m.return = g), m)
      : ((m = i(m, p)), (m.return = g), m);
  }
  function d(g, m, p) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return ((m = Pc("" + m, g.mode, p)), (m.return = g), m);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ya:
          return (
            (p = il(m.type, m.key, m.props, null, g.mode, p)),
            (p.ref = Io(g, null, m)),
            (p.return = g),
            p
          );
        case Pi:
          return ((m = kc(m, g.mode, p)), (m.return = g), m);
        case or:
          var S = m._init;
          return d(g, S(m._payload), p);
      }
      if (Bo(m) || No(m))
        return ((m = ei(m, g.mode, p, null)), (m.return = g), m);
      Pa(g, m);
    }
    return null;
  }
  function f(g, m, p, S) {
    var T = m !== null ? m.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return T !== null ? null : a(g, m, "" + p, S);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ya:
          return p.key === T ? l(g, m, p, S) : null;
        case Pi:
          return p.key === T ? u(g, m, p, S) : null;
        case or:
          return ((T = p._init), f(g, m, T(p._payload), S));
      }
      if (Bo(p) || No(p)) return T !== null ? null : c(g, m, p, S, null);
      Pa(g, p);
    }
    return null;
  }
  function h(g, m, p, S, T) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return ((g = g.get(p) || null), a(m, g, "" + S, T));
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case ya:
          return (
            (g = g.get(S.key === null ? p : S.key) || null),
            l(m, g, S, T)
          );
        case Pi:
          return (
            (g = g.get(S.key === null ? p : S.key) || null),
            u(m, g, S, T)
          );
        case or:
          var N = S._init;
          return h(g, m, p, N(S._payload), T);
      }
      if (Bo(S) || No(S)) return ((g = g.get(p) || null), c(m, g, S, T, null));
      Pa(m, S);
    }
    return null;
  }
  function v(g, m, p, S) {
    for (
      var T = null, N = null, C = m, A = (m = 0), I = null;
      C !== null && A < p.length;
      A++
    ) {
      C.index > A ? ((I = C), (C = null)) : (I = C.sibling);
      var b = f(g, C, p[A], S);
      if (b === null) {
        C === null && (C = I);
        break;
      }
      (e && C && b.alternate === null && t(g, C),
        (m = o(b, m, A)),
        N === null ? (T = b) : (N.sibling = b),
        (N = b),
        (C = I));
    }
    if (A === p.length) return (n(g, C), Be && Ur(g, A), T);
    if (C === null) {
      for (; A < p.length; A++)
        ((C = d(g, p[A], S)),
          C !== null &&
            ((m = o(C, m, A)),
            N === null ? (T = C) : (N.sibling = C),
            (N = C)));
      return (Be && Ur(g, A), T);
    }
    for (C = r(g, C); A < p.length; A++)
      ((I = h(C, g, A, p[A], S)),
        I !== null &&
          (e && I.alternate !== null && C.delete(I.key === null ? A : I.key),
          (m = o(I, m, A)),
          N === null ? (T = I) : (N.sibling = I),
          (N = I)));
    return (
      e &&
        C.forEach(function (ee) {
          return t(g, ee);
        }),
      Be && Ur(g, A),
      T
    );
  }
  function y(g, m, p, S) {
    var T = No(p);
    if (typeof T != "function") throw Error(D(150));
    if (((p = T.call(p)), p == null)) throw Error(D(151));
    for (
      var N = (T = null), C = m, A = (m = 0), I = null, b = p.next();
      C !== null && !b.done;
      A++, b = p.next()
    ) {
      C.index > A ? ((I = C), (C = null)) : (I = C.sibling);
      var ee = f(g, C, b.value, S);
      if (ee === null) {
        C === null && (C = I);
        break;
      }
      (e && C && ee.alternate === null && t(g, C),
        (m = o(ee, m, A)),
        N === null ? (T = ee) : (N.sibling = ee),
        (N = ee),
        (C = I));
    }
    if (b.done) return (n(g, C), Be && Ur(g, A), T);
    if (C === null) {
      for (; !b.done; A++, b = p.next())
        ((b = d(g, b.value, S)),
          b !== null &&
            ((m = o(b, m, A)),
            N === null ? (T = b) : (N.sibling = b),
            (N = b)));
      return (Be && Ur(g, A), T);
    }
    for (C = r(g, C); !b.done; A++, b = p.next())
      ((b = h(C, g, A, b.value, S)),
        b !== null &&
          (e && b.alternate !== null && C.delete(b.key === null ? A : b.key),
          (m = o(b, m, A)),
          N === null ? (T = b) : (N.sibling = b),
          (N = b)));
    return (
      e &&
        C.forEach(function (ge) {
          return t(g, ge);
        }),
      Be && Ur(g, A),
      T
    );
  }
  function _(g, m, p, S) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === ki &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case ya:
          e: {
            for (var T = p.key, N = m; N !== null; ) {
              if (N.key === T) {
                if (((T = p.type), T === ki)) {
                  if (N.tag === 7) {
                    (n(g, N.sibling),
                      (m = i(N, p.props.children)),
                      (m.return = g),
                      (g = m));
                    break e;
                  }
                } else if (
                  N.elementType === T ||
                  (typeof T == "object" &&
                    T !== null &&
                    T.$$typeof === or &&
                    _m(T) === N.type)
                ) {
                  (n(g, N.sibling),
                    (m = i(N, p.props)),
                    (m.ref = Io(g, N, p)),
                    (m.return = g),
                    (g = m));
                  break e;
                }
                n(g, N);
                break;
              } else t(g, N);
              N = N.sibling;
            }
            p.type === ki
              ? ((m = ei(p.props.children, g.mode, S, p.key)),
                (m.return = g),
                (g = m))
              : ((S = il(p.type, p.key, p.props, null, g.mode, S)),
                (S.ref = Io(g, m, p)),
                (S.return = g),
                (g = S));
          }
          return s(g);
        case Pi:
          e: {
            for (N = p.key; m !== null; ) {
              if (m.key === N)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === p.containerInfo &&
                  m.stateNode.implementation === p.implementation
                ) {
                  (n(g, m.sibling),
                    (m = i(m, p.children || [])),
                    (m.return = g),
                    (g = m));
                  break e;
                } else {
                  n(g, m);
                  break;
                }
              else t(g, m);
              m = m.sibling;
            }
            ((m = kc(p, g.mode, S)), (m.return = g), (g = m));
          }
          return s(g);
        case or:
          return ((N = p._init), _(g, m, N(p._payload), S));
      }
      if (Bo(p)) return v(g, m, p, S);
      if (No(p)) return y(g, m, p, S);
      Pa(g, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        m !== null && m.tag === 6
          ? (n(g, m.sibling), (m = i(m, p)), (m.return = g), (g = m))
          : (n(g, m), (m = Pc(p, g.mode, S)), (m.return = g), (g = m)),
        s(g))
      : n(g, m);
  }
  return _;
}
var ro = D0(!0),
  M0 = D0(!1),
  wl = Ir(null),
  Tl = null,
  Vi = null,
  lh = null;
function uh() {
  lh = Vi = Tl = null;
}
function ch(e) {
  var t = wl.current;
  (ze(wl), (e._currentValue = t));
}
function Id(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Qi(e, t) {
  ((Tl = e),
    (lh = Vi = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (bt = !0), (e.firstContext = null)));
}
function on(e) {
  var t = e._currentValue;
  if (lh !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Vi === null)) {
      if (Tl === null) throw Error(D(308));
      ((Vi = e), (Tl.dependencies = { lanes: 0, firstContext: e }));
    } else Vi = Vi.next = e;
  return t;
}
var Kr = null;
function dh(e) {
  Kr === null ? (Kr = [e]) : Kr.push(e);
}
function z0(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), dh(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Qn(e, r)
  );
}
function Qn(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    ((e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return));
  return n.tag === 3 ? n.stateNode : null;
}
var sr = !1;
function fh(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function V0(e, t) {
  ((e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      }));
}
function Fn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function _r(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Re & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Qn(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), dh(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Qn(e, n)
  );
}
function qa(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Jf(e, n));
  }
}
function Sm(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        (o === null ? (i = o = s) : (o = o.next = s), (n = n.next));
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    ((n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n));
    return;
  }
  ((e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t));
}
function Rl(e, t, n, r) {
  var i = e.updateQueue;
  sr = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    ((l.next = null), s === null ? (o = u) : (s.next = u), (s = l));
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (a = c.lastBaseUpdate),
      a !== s &&
        (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var d = i.baseState;
    ((s = 0), (c = u = l = null), (a = o));
    do {
      var f = a.lane,
        h = a.eventTime;
      if ((r & f) === f) {
        c !== null &&
          (c = c.next =
            {
              eventTime: h,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var v = e,
            y = a;
          switch (((f = t), (h = n), y.tag)) {
            case 1:
              if (((v = y.payload), typeof v == "function")) {
                d = v.call(h, d, f);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = y.payload),
                (f = typeof v == "function" ? v.call(h, d, f) : v),
                f == null)
              )
                break e;
              d = Je({}, d, f);
              break e;
            case 2:
              sr = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [a]) : f.push(a));
      } else
        ((h = {
          eventTime: h,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          c === null ? ((u = c = h), (l = d)) : (c = c.next = h),
          (s |= f));
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        ((f = a),
          (a = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null));
      }
    } while (1);
    if (
      (c === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do ((s |= i.lane), (i = i.next));
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    ((oi |= s), (e.lanes = s), (e.memoizedState = d));
  }
}
function Em(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(D(191, i));
        i.call(r);
      }
    }
}
var ea = {},
  Nn = Ir(ea),
  Cs = Ir(ea),
  Ns = Ir(ea);
function Qr(e) {
  if (e === ea) throw Error(D(174));
  return e;
}
function hh(e, t) {
  switch ((be(Ns, t), be(Cs, e), be(Nn, ea), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : fd(null, "");
      break;
    default:
      ((e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = fd(t, e)));
  }
  (ze(Nn), be(Nn, t));
}
function io() {
  (ze(Nn), ze(Cs), ze(Ns));
}
function $0(e) {
  Qr(Ns.current);
  var t = Qr(Nn.current),
    n = fd(t, e.type);
  t !== n && (be(Cs, e), be(Nn, n));
}
function ph(e) {
  Cs.current === e && (ze(Nn), ze(Cs));
}
var Ge = Ir(0);
function xl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      ((t.child.return = t), (t = t.child));
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    ((t.sibling.return = t.return), (t = t.sibling));
  }
  return null;
}
var Tc = [];
function mh() {
  for (var e = 0; e < Tc.length; e++)
    Tc[e]._workInProgressVersionPrimary = null;
  Tc.length = 0;
}
var Xa = Xn.ReactCurrentDispatcher,
  Rc = Xn.ReactCurrentBatchConfig,
  ii = 0,
  Ye = null,
  st = null,
  ct = null,
  Cl = !1,
  ns = !1,
  As = 0,
  XT = 0;
function vt() {
  throw Error(D(321));
}
function vh(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Sn(e[n], t[n])) return !1;
  return !0;
}
function gh(e, t, n, r, i, o) {
  if (
    ((ii = o),
    (Ye = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Xa.current = e === null || e.memoizedState === null ? rR : iR),
    (e = n(r, i)),
    ns)
  ) {
    o = 0;
    do {
      if (((ns = !1), (As = 0), 25 <= o)) throw Error(D(301));
      ((o += 1),
        (ct = st = null),
        (t.updateQueue = null),
        (Xa.current = oR),
        (e = n(r, i)));
    } while (ns);
  }
  if (
    ((Xa.current = Nl),
    (t = st !== null && st.next !== null),
    (ii = 0),
    (ct = st = Ye = null),
    (Cl = !1),
    t)
  )
    throw Error(D(300));
  return e;
}
function yh() {
  var e = As !== 0;
  return ((As = 0), e);
}
function Tn() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (ct === null ? (Ye.memoizedState = ct = e) : (ct = ct.next = e), ct);
}
function sn() {
  if (st === null) {
    var e = Ye.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = st.next;
  var t = ct === null ? Ye.memoizedState : ct.next;
  if (t !== null) ((ct = t), (st = e));
  else {
    if (e === null) throw Error(D(310));
    ((st = e),
      (e = {
        memoizedState: st.memoizedState,
        baseState: st.baseState,
        baseQueue: st.baseQueue,
        queue: st.queue,
        next: null,
      }),
      ct === null ? (Ye.memoizedState = ct = e) : (ct = ct.next = e));
  }
  return ct;
}
function Ps(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function xc(e) {
  var t = sn(),
    n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = st,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      ((i.next = o.next), (o.next = s));
    }
    ((r.baseQueue = i = o), (n.pending = null));
  }
  if (i !== null) {
    ((o = i.next), (r = r.baseState));
    var a = (s = null),
      l = null,
      u = o;
    do {
      var c = u.lane;
      if ((ii & c) === c)
        (l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action)));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        (l === null ? ((a = l = d), (s = r)) : (l = l.next = d),
          (Ye.lanes |= c),
          (oi |= c));
      }
      u = u.next;
    } while (u !== null && u !== o);
    (l === null ? (s = r) : (l.next = a),
      Sn(r, t.memoizedState) || (bt = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r));
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do ((o = i.lane), (Ye.lanes |= o), (oi |= o), (i = i.next));
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Cc(e) {
  var t = sn(),
    n = t.queue;
  if (n === null) throw Error(D(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do ((o = e(o, s.action)), (s = s.next));
    while (s !== i);
    (Sn(o, t.memoizedState) || (bt = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o));
  }
  return [o, r];
}
function U0() {}
function F0(e, t) {
  var n = Ye,
    r = sn(),
    i = t(),
    o = !Sn(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (bt = !0)),
    (r = r.queue),
    _h(W0.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (ct !== null && ct.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ks(9, B0.bind(null, n, r, i, t), void 0, null),
      ft === null)
    )
      throw Error(D(349));
    ii & 30 || j0(n, t, i);
  }
  return i;
}
function j0(e, t, n) {
  ((e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ye.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
}
function B0(e, t, n, r) {
  ((t.value = n), (t.getSnapshot = r), Z0(t) && H0(e));
}
function W0(e, t, n) {
  return n(function () {
    Z0(t) && H0(e);
  });
}
function Z0(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Sn(e, n);
  } catch {
    return !0;
  }
}
function H0(e) {
  var t = Qn(e, 1);
  t !== null && gn(t, e, 1, -1);
}
function wm(e) {
  var t = Tn();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ps,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = nR.bind(null, Ye, e)),
    [t.memoizedState, e]
  );
}
function ks(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Ye.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function G0() {
  return sn().memoizedState;
}
function el(e, t, n, r) {
  var i = Tn();
  ((Ye.flags |= e),
    (i.memoizedState = ks(1 | t, n, void 0, r === void 0 ? null : r)));
}
function vu(e, t, n, r) {
  var i = sn();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (st !== null) {
    var s = st.memoizedState;
    if (((o = s.destroy), r !== null && vh(r, s.deps))) {
      i.memoizedState = ks(t, n, o, r);
      return;
    }
  }
  ((Ye.flags |= e), (i.memoizedState = ks(1 | t, n, o, r)));
}
function Tm(e, t) {
  return el(8390656, 8, e, t);
}
function _h(e, t) {
  return vu(2048, 8, e, t);
}
function K0(e, t) {
  return vu(4, 2, e, t);
}
function Q0(e, t) {
  return vu(4, 4, e, t);
}
function Y0(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function J0(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null),
    vu(4, 4, Y0.bind(null, t, e), n)
  );
}
function Sh() {}
function q0(e, t) {
  var n = sn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vh(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function X0(e, t) {
  var n = sn();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && vh(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function e_(e, t, n) {
  return ii & 21
    ? (Sn(n, t) || ((n = o0()), (Ye.lanes |= n), (oi |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (bt = !0)), (e.memoizedState = n));
}
function eR(e, t) {
  var n = Pe;
  ((Pe = n !== 0 && 4 > n ? n : 4), e(!0));
  var r = Rc.transition;
  Rc.transition = {};
  try {
    (e(!1), t());
  } finally {
    ((Pe = n), (Rc.transition = r));
  }
}
function t_() {
  return sn().memoizedState;
}
function tR(e, t, n) {
  var r = Er(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    n_(e))
  )
    r_(t, n);
  else if (((n = z0(e, t, n, r)), n !== null)) {
    var i = xt();
    (gn(n, e, r, i), i_(n, t, r));
  }
}
function nR(e, t, n) {
  var r = Er(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (n_(e)) r_(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), Sn(a, s))) {
          var l = t.interleaved;
          (l === null
            ? ((i.next = i), dh(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i));
          return;
        }
      } catch {
      } finally {
      }
    ((n = z0(e, t, i, r)),
      n !== null && ((i = xt()), gn(n, e, r, i), i_(n, t, r)));
  }
}
function n_(e) {
  var t = e.alternate;
  return e === Ye || (t !== null && t === Ye);
}
function r_(e, t) {
  ns = Cl = !0;
  var n = e.pending;
  (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t));
}
function i_(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Jf(e, n));
  }
}
var Nl = {
    readContext: on,
    useCallback: vt,
    useContext: vt,
    useEffect: vt,
    useImperativeHandle: vt,
    useInsertionEffect: vt,
    useLayoutEffect: vt,
    useMemo: vt,
    useReducer: vt,
    useRef: vt,
    useState: vt,
    useDebugValue: vt,
    useDeferredValue: vt,
    useTransition: vt,
    useMutableSource: vt,
    useSyncExternalStore: vt,
    useId: vt,
    unstable_isNewReconciler: !1,
  },
  rR = {
    readContext: on,
    useCallback: function (e, t) {
      return ((Tn().memoizedState = [e, t === void 0 ? null : t]), e);
    },
    useContext: on,
    useEffect: Tm,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        el(4194308, 4, Y0.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return el(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return el(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Tn();
      return (
        (t = t === void 0 ? null : t),
        (e = e()),
        (n.memoizedState = [e, t]),
        e
      );
    },
    useReducer: function (e, t, n) {
      var r = Tn();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = tR.bind(null, Ye, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Tn();
      return ((e = { current: e }), (t.memoizedState = e));
    },
    useState: wm,
    useDebugValue: Sh,
    useDeferredValue: function (e) {
      return (Tn().memoizedState = e);
    },
    useTransition: function () {
      var e = wm(!1),
        t = e[0];
      return ((e = eR.bind(null, e[1])), (Tn().memoizedState = e), [t, e]);
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Ye,
        i = Tn();
      if (Be) {
        if (n === void 0) throw Error(D(407));
        n = n();
      } else {
        if (((n = t()), ft === null)) throw Error(D(349));
        ii & 30 || j0(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Tm(W0.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        ks(9, B0.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Tn(),
        t = ft.identifierPrefix;
      if (Be) {
        var n = $n,
          r = Vn;
        ((n = (r & ~(1 << (32 - vn(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = As++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":"));
      } else ((n = XT++), (t = ":" + t + "r" + n.toString(32) + ":"));
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  iR = {
    readContext: on,
    useCallback: q0,
    useContext: on,
    useEffect: _h,
    useImperativeHandle: J0,
    useInsertionEffect: K0,
    useLayoutEffect: Q0,
    useMemo: X0,
    useReducer: xc,
    useRef: G0,
    useState: function () {
      return xc(Ps);
    },
    useDebugValue: Sh,
    useDeferredValue: function (e) {
      var t = sn();
      return e_(t, st.memoizedState, e);
    },
    useTransition: function () {
      var e = xc(Ps)[0],
        t = sn().memoizedState;
      return [e, t];
    },
    useMutableSource: U0,
    useSyncExternalStore: F0,
    useId: t_,
    unstable_isNewReconciler: !1,
  },
  oR = {
    readContext: on,
    useCallback: q0,
    useContext: on,
    useEffect: _h,
    useImperativeHandle: J0,
    useInsertionEffect: K0,
    useLayoutEffect: Q0,
    useMemo: X0,
    useReducer: Cc,
    useRef: G0,
    useState: function () {
      return Cc(Ps);
    },
    useDebugValue: Sh,
    useDeferredValue: function (e) {
      var t = sn();
      return st === null ? (t.memoizedState = e) : e_(t, st.memoizedState, e);
    },
    useTransition: function () {
      var e = Cc(Ps)[0],
        t = sn().memoizedState;
      return [e, t];
    },
    useMutableSource: U0,
    useSyncExternalStore: F0,
    useId: t_,
    unstable_isNewReconciler: !1,
  };
function fn(e, t) {
  if (e && e.defaultProps) {
    ((t = Je({}, t)), (e = e.defaultProps));
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function bd(e, t, n, r) {
  ((t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Je({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n));
}
var gu = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? pi(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = xt(),
      i = Er(e),
      o = Fn(r, i);
    ((o.payload = t),
      n != null && (o.callback = n),
      (t = _r(e, o, i)),
      t !== null && (gn(t, e, i, r), qa(t, e, i)));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = xt(),
      i = Er(e),
      o = Fn(r, i);
    ((o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = _r(e, o, i)),
      t !== null && (gn(t, e, i, r), qa(t, e, i)));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = xt(),
      r = Er(e),
      i = Fn(n, r);
    ((i.tag = 2),
      t != null && (i.callback = t),
      (t = _r(e, i, r)),
      t !== null && (gn(t, e, r, n), qa(t, e, r)));
  },
};
function Rm(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
        ? !ws(n, r) || !ws(i, o)
        : !0
  );
}
function o_(e, t, n) {
  var r = !1,
    i = Cr,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = on(o))
      : ((i = Dt(t) ? ni : Et.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? to(e, i) : Cr)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = gu),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function xm(e, t, n, r) {
  ((e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && gu.enqueueReplaceState(t, t.state, null));
}
function Ld(e, t, n, r) {
  var i = e.stateNode;
  ((i.props = n), (i.state = e.memoizedState), (i.refs = {}), fh(e));
  var o = t.contextType;
  (typeof o == "object" && o !== null
    ? (i.context = on(o))
    : ((o = Dt(t) ? ni : Et.current), (i.context = to(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (bd(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && gu.enqueueReplaceState(i, i.state, null),
      Rl(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308));
}
function oo(e, t) {
  try {
    var n = "",
      r = t;
    do ((n += bw(r)), (r = r.return));
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Nc(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Dd(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var sR = typeof WeakMap == "function" ? WeakMap : Map;
function s_(e, t, n) {
  ((n = Fn(-1, n)), (n.tag = 3), (n.payload = { element: null }));
  var r = t.value;
  return (
    (n.callback = function () {
      (Pl || ((Pl = !0), (Zd = r)), Dd(e, t));
    }),
    n
  );
}
function a_(e, t, n) {
  ((n = Fn(-1, n)), (n.tag = 3));
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    ((n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Dd(e, t);
      }));
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        (Dd(e, t),
          typeof r != "function" &&
            (Sr === null ? (Sr = new Set([this])) : Sr.add(this)));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function Cm(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new sR();
    var i = new Set();
    r.set(t, i);
  } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
  i.has(n) || (i.add(n), (e = SR.bind(null, e, t, n)), t.then(e, e));
}
function Nm(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Am(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Fn(-1, 1)), (t.tag = 2), _r(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var aR = Xn.ReactCurrentOwner,
  bt = !1;
function Rt(e, t, n, r) {
  t.child = e === null ? M0(t, null, n, r) : ro(t, e.child, n, r);
}
function Pm(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    Qi(t, i),
    (r = gh(e, t, n, r, o, i)),
    (n = yh()),
    e !== null && !bt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Yn(e, t, i))
      : (Be && n && oh(t), (t.flags |= 1), Rt(e, t, r, i), t.child)
  );
}
function km(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Ah(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), l_(e, t, o, r, i))
      : ((e = il(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : ws), n(s, r) && e.ref === t.ref)
    )
      return Yn(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = wr(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function l_(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (ws(o, r) && e.ref === t.ref)
      if (((bt = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (bt = !0);
      else return ((t.lanes = e.lanes), Yn(e, t, i));
  }
  return Md(e, t, n, r, i);
}
function u_(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        be(Ui, Ft),
        (Ft |= n));
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          be(Ui, Ft),
          (Ft |= e),
          null
        );
      ((t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        be(Ui, Ft),
        (Ft |= r));
    }
  else
    (o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      be(Ui, Ft),
      (Ft |= r));
  return (Rt(e, t, i, n), t.child);
}
function c_(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Md(e, t, n, r, i) {
  var o = Dt(n) ? ni : Et.current;
  return (
    (o = to(t, o)),
    Qi(t, i),
    (n = gh(e, t, n, r, o, i)),
    (r = yh()),
    e !== null && !bt
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Yn(e, t, i))
      : (Be && r && oh(t), (t.flags |= 1), Rt(e, t, n, i), t.child)
  );
}
function Om(e, t, n, r, i) {
  if (Dt(n)) {
    var o = !0;
    _l(t);
  } else o = !1;
  if ((Qi(t, i), t.stateNode === null))
    (tl(e, t), o_(t, n, r), Ld(t, n, r, i), (r = !0));
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = on(u))
      : ((u = Dt(n) ? ni : Et.current), (u = to(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    (d ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && xm(t, s, r, u)),
      (sr = !1));
    var f = t.memoizedState;
    ((s.state = f),
      Rl(t, r, s, i),
      (l = t.memoizedState),
      a !== r || f !== l || Lt.current || sr
        ? (typeof c == "function" && (bd(t, n, c, r), (l = t.memoizedState)),
          (a = sr || Rm(t, n, a, r, f, l, u))
            ? (d ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1)));
  } else {
    ((s = t.stateNode),
      V0(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : fn(t.type, a)),
      (s.props = u),
      (d = t.pendingProps),
      (f = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = on(l))
        : ((l = Dt(n) ? ni : Et.current), (l = to(t, l))));
    var h = n.getDerivedStateFromProps;
    ((c =
      typeof h == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== d || f !== l) && xm(t, s, r, l)),
      (sr = !1),
      (f = t.memoizedState),
      (s.state = f),
      Rl(t, r, s, i));
    var v = t.memoizedState;
    a !== d || f !== v || Lt.current || sr
      ? (typeof h == "function" && (bd(t, n, h, r), (v = t.memoizedState)),
        (u = sr || Rm(t, n, u, r, f, v, l) || !1)
          ? (c ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, v, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, v, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (s.props = r),
        (s.state = v),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return zd(e, t, n, r, o, i);
}
function zd(e, t, n, r, i, o) {
  c_(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return (i && vm(t, n, !1), Yn(e, t, o));
  ((r = t.stateNode), (aR.current = t));
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = ro(t, e.child, null, o)), (t.child = ro(t, null, a, o)))
      : Rt(e, t, a, o),
    (t.memoizedState = r.state),
    i && vm(t, n, !0),
    t.child
  );
}
function d_(e) {
  var t = e.stateNode;
  (t.pendingContext
    ? mm(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && mm(e, t.context, !1),
    hh(e, t.containerInfo));
}
function Im(e, t, n, r, i) {
  return (no(), ah(i), (t.flags |= 256), Rt(e, t, n, r), t.child);
}
var Vd = { dehydrated: null, treeContext: null, retryLane: 0 };
function $d(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function f_(e, t, n) {
  var r = t.pendingProps,
    i = Ge.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    be(Ge, i & 1),
    e === null)
  )
    return (
      Od(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = Su(s, r, 0, null)),
              (e = ei(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = $d(n)),
              (t.memoizedState = Vd),
              e)
            : Eh(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return lR(e, t, s, r, a, i, n);
  if (o) {
    ((o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling));
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = wr(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = wr(a, o)) : ((o = ei(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? $d(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Vd),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = wr(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Eh(e, t) {
  return (
    (t = Su({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function ka(e, t, n, r) {
  return (
    r !== null && ah(r),
    ro(t, e.child, null, n),
    (e = Eh(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function lR(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Nc(Error(D(422)))), ka(e, t, s, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (i = t.mode),
          (r = Su({ mode: "visible", children: r.children }, i, 0, null)),
          (o = ei(o, i, s, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && ro(t, e.child, null, s),
          (t.child.memoizedState = $d(s)),
          (t.memoizedState = Vd),
          o);
  if (!(t.mode & 1)) return ka(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (
      (r = a),
      (o = Error(D(419))),
      (r = Nc(o, r, void 0)),
      ka(e, t, s, r)
    );
  }
  if (((a = (s & e.childLanes) !== 0), bt || a)) {
    if (((r = ft), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      ((i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Qn(e, i), gn(r, e, i, -1)));
    }
    return (Nh(), (r = Nc(Error(D(421)))), ka(e, t, s, r));
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = ER.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Bt = yr(i.nextSibling)),
      (Zt = t),
      (Be = !0),
      (pn = null),
      e !== null &&
        ((en[tn++] = Vn),
        (en[tn++] = $n),
        (en[tn++] = ri),
        (Vn = e.id),
        ($n = e.overflow),
        (ri = t)),
      (t = Eh(t, r.children)),
      (t.flags |= 4096),
      t);
}
function bm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  (r !== null && (r.lanes |= t), Id(e.return, t, n));
}
function Ac(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function h_(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Rt(e, t, r.children, n), (r = Ge.current), r & 2))
    ((r = (r & 1) | 2), (t.flags |= 128));
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && bm(e, n, t);
        else if (e.tag === 19) bm(e, n, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    r &= 1;
  }
  if ((be(Ge, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          ((e = n.alternate),
            e !== null && xl(e) === null && (i = n),
            (n = n.sibling));
        ((n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Ac(t, !1, i, n, o));
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && xl(e) === null)) {
            t.child = i;
            break;
          }
          ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
        }
        Ac(t, !0, n, null, o);
        break;
      case "together":
        Ac(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function tl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Yn(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (oi |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(D(153));
  if (t.child !== null) {
    for (
      e = t.child, n = wr(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;
    )
      ((e = e.sibling),
        (n = n.sibling = wr(e, e.pendingProps)),
        (n.return = t));
    n.sibling = null;
  }
  return t.child;
}
function uR(e, t, n) {
  switch (t.tag) {
    case 3:
      (d_(t), no());
      break;
    case 5:
      $0(t);
      break;
    case 1:
      Dt(t.type) && _l(t);
      break;
    case 4:
      hh(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      (be(wl, r._currentValue), (r._currentValue = i));
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (be(Ge, Ge.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? f_(e, t, n)
            : (be(Ge, Ge.current & 1),
              (e = Yn(e, t, n)),
              e !== null ? e.sibling : null);
      be(Ge, Ge.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return h_(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        be(Ge, Ge.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return ((t.lanes = 0), u_(e, t, n));
  }
  return Yn(e, t, n);
}
var p_, Ud, m_, v_;
p_ = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      ((n.child.return = n), (n = n.child));
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    ((n.sibling.return = n.return), (n = n.sibling));
  }
};
Ud = function () {};
m_ = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    ((e = t.stateNode), Qr(Nn.current));
    var o = null;
    switch (n) {
      case "input":
        ((i = ld(e, i)), (r = ld(e, r)), (o = []));
        break;
      case "select":
        ((i = Je({}, i, { value: void 0 })),
          (r = Je({}, r, { value: void 0 })),
          (o = []));
        break;
      case "textarea":
        ((i = dd(e, i)), (r = dd(e, r)), (o = []));
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = gl);
    }
    hd(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ms.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else (n || (o || (o = []), o.push(u, n)), (n = l));
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(u, l))
            : u === "children"
              ? (typeof l != "string" && typeof l != "number") ||
                (o = o || []).push(u, "" + l)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (ms.hasOwnProperty(u)
                  ? (l != null && u === "onScroll" && Le("scroll", e),
                    o || a === l || (o = []))
                  : (o = o || []).push(u, l));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
v_ = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function bo(e, t) {
  if (!Be)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          (t.alternate !== null && (n = t), (t = t.sibling));
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          (n.alternate !== null && (r = n), (n = n.sibling));
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function gt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling));
  else
    for (i = e.child; i !== null; )
      ((n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling));
  return ((e.subtreeFlags |= r), (e.childLanes = n), t);
}
function cR(e, t, n) {
  var r = t.pendingProps;
  switch ((sh(t), t.tag)) {
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
      return (gt(t), null);
    case 1:
      return (Dt(t.type) && yl(), gt(t), null);
    case 3:
      return (
        (r = t.stateNode),
        io(),
        ze(Lt),
        ze(Et),
        mh(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Aa(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), pn !== null && (Kd(pn), (pn = null)))),
        Ud(e, t),
        gt(t),
        null
      );
    case 5:
      ph(t);
      var i = Qr(Ns.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        (m_(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(D(166));
          return (gt(t), null);
        }
        if (((e = Qr(Nn.current)), Aa(t))) {
          ((r = t.stateNode), (n = t.type));
          var o = t.memoizedProps;
          switch (((r[xn] = t), (r[xs] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              (Le("cancel", r), Le("close", r));
              break;
            case "iframe":
            case "object":
            case "embed":
              Le("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Zo.length; i++) Le(Zo[i], r);
              break;
            case "source":
              Le("error", r);
              break;
            case "img":
            case "image":
            case "link":
              (Le("error", r), Le("load", r));
              break;
            case "details":
              Le("toggle", r);
              break;
            case "input":
              (jp(r, o), Le("invalid", r));
              break;
            case "select":
              ((r._wrapperState = { wasMultiple: !!o.multiple }),
                Le("invalid", r));
              break;
            case "textarea":
              (Wp(r, o), Le("invalid", r));
          }
          (hd(n, o), (i = null));
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Na(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Na(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : ms.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  Le("scroll", r);
            }
          switch (n) {
            case "input":
              (_a(r), Bp(r, o, !0));
              break;
            case "textarea":
              (_a(r), Zp(r));
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = gl);
          }
          ((r = i), (t.updateQueue = r), r !== null && (t.flags |= 4));
        } else {
          ((s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Wy(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script><\/script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = s.createElement(n, { is: r.is }))
                  : ((e = s.createElement(n)),
                    n === "select" &&
                      ((s = e),
                      r.multiple
                        ? (s.multiple = !0)
                        : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[xn] = t),
            (e[xs] = r),
            p_(e, t, !1, !1),
            (t.stateNode = e));
          e: {
            switch (((s = pd(n, r)), n)) {
              case "dialog":
                (Le("cancel", e), Le("close", e), (i = r));
                break;
              case "iframe":
              case "object":
              case "embed":
                (Le("load", e), (i = r));
                break;
              case "video":
              case "audio":
                for (i = 0; i < Zo.length; i++) Le(Zo[i], e);
                i = r;
                break;
              case "source":
                (Le("error", e), (i = r));
                break;
              case "img":
              case "image":
              case "link":
                (Le("error", e), Le("load", e), (i = r));
                break;
              case "details":
                (Le("toggle", e), (i = r));
                break;
              case "input":
                (jp(e, r), (i = ld(e, r)), Le("invalid", e));
                break;
              case "option":
                i = r;
                break;
              case "select":
                ((e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Je({}, r, { value: void 0 })),
                  Le("invalid", e));
                break;
              case "textarea":
                (Wp(e, r), (i = dd(e, r)), Le("invalid", e));
                break;
              default:
                i = r;
            }
            (hd(n, i), (a = i));
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? Gy(e, l)
                  : o === "dangerouslySetInnerHTML"
                    ? ((l = l ? l.__html : void 0), l != null && Zy(e, l))
                    : o === "children"
                      ? typeof l == "string"
                        ? (n !== "textarea" || l !== "") && vs(e, l)
                        : typeof l == "number" && vs(e, "" + l)
                      : o !== "suppressContentEditableWarning" &&
                        o !== "suppressHydrationWarning" &&
                        o !== "autoFocus" &&
                        (ms.hasOwnProperty(o)
                          ? l != null && o === "onScroll" && Le("scroll", e)
                          : l != null && Zf(e, o, l, s));
              }
            switch (n) {
              case "input":
                (_a(e), Bp(e, r, !1));
                break;
              case "textarea":
                (_a(e), Zp(e));
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + xr(r.value));
                break;
              case "select":
                ((e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Zi(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Zi(e, !!r.multiple, r.defaultValue, !0));
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = gl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return (gt(t), null);
    case 6:
      if (e && t.stateNode != null) v_(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(D(166));
        if (((n = Qr(Ns.current)), Qr(Nn.current), Aa(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[xn] = t),
            (o = r.nodeValue !== n) && ((e = Zt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Na(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Na(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[xn] = t),
            (t.stateNode = r));
      }
      return (gt(t), null);
    case 13:
      if (
        (ze(Ge),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Be && Bt !== null && t.mode & 1 && !(t.flags & 128))
          (L0(), no(), (t.flags |= 98560), (o = !1));
        else if (((o = Aa(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(D(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(D(317));
            o[xn] = t;
          } else
            (no(),
              !(t.flags & 128) && (t.memoizedState = null),
              (t.flags |= 4));
          (gt(t), (o = !1));
        } else (pn !== null && (Kd(pn), (pn = null)), (o = !0));
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Ge.current & 1 ? lt === 0 && (lt = 3) : Nh())),
          t.updateQueue !== null && (t.flags |= 4),
          gt(t),
          null);
    case 4:
      return (
        io(),
        Ud(e, t),
        e === null && Ts(t.stateNode.containerInfo),
        gt(t),
        null
      );
    case 10:
      return (ch(t.type._context), gt(t), null);
    case 17:
      return (Dt(t.type) && yl(), gt(t), null);
    case 19:
      if ((ze(Ge), (o = t.memoizedState), o === null)) return (gt(t), null);
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) bo(o, !1);
        else {
          if (lt !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = xl(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    bo(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;
                )
                  ((o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling));
                return (be(Ge, (Ge.current & 1) | 2), t.child);
              }
              e = e.sibling;
            }
          o.tail !== null &&
            tt() > so &&
            ((t.flags |= 128), (r = !0), bo(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = xl(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              bo(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !Be)
            )
              return (gt(t), null);
          } else
            2 * tt() - o.renderingStartTime > so &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), bo(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = tt()),
          (t.sibling = null),
          (n = Ge.current),
          be(Ge, r ? (n & 1) | 2 : n & 1),
          t)
        : (gt(t), null);
    case 22:
    case 23:
      return (
        Ch(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ft & 1073741824 && (gt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : gt(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(D(156, t.tag));
}
function dR(e, t) {
  switch ((sh(t), t.tag)) {
    case 1:
      return (
        Dt(t.type) && yl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        io(),
        ze(Lt),
        ze(Et),
        mh(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return (ph(t), null);
    case 13:
      if (
        (ze(Ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(D(340));
        no();
      }
      return (
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return (ze(Ge), null);
    case 4:
      return (io(), null);
    case 10:
      return (ch(t.type._context), null);
    case 22:
    case 23:
      return (Ch(), null);
    case 24:
      return null;
    default:
      return null;
  }
}
var Oa = !1,
  _t = !1,
  fR = typeof WeakSet == "function" ? WeakSet : Set,
  Z = null;
function $i(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        qe(e, t, r);
      }
    else n.current = null;
}
function Fd(e, t, n) {
  try {
    n();
  } catch (r) {
    qe(e, t, r);
  }
}
var Lm = !1;
function hR(e, t) {
  if (((Rd = pl), (e = E0()), ih(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            (n.nodeType, o.nodeType);
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var h;
              d !== n || (i !== 0 && d.nodeType !== 3) || (a = s + i),
                d !== o || (r !== 0 && d.nodeType !== 3) || (l = s + r),
                d.nodeType === 3 && (s += d.nodeValue.length),
                (h = d.firstChild) !== null;
            )
              ((f = d), (d = h));
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++u === i && (a = s),
                f === o && ++c === r && (l = s),
                (h = d.nextSibling) !== null)
              )
                break;
              ((d = f), (f = d.parentNode));
            }
            d = h;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (xd = { focusedElem: e, selectionRange: n }, pl = !1, Z = t; Z !== null; )
    if (((t = Z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      ((e.return = t), (Z = e));
    else
      for (; Z !== null; ) {
        t = Z;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var y = v.memoizedProps,
                    _ = v.memoizedState,
                    g = t.stateNode,
                    m = g.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : fn(t.type, y),
                      _,
                    );
                  g.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(D(163));
            }
        } catch (S) {
          qe(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          ((e.return = t.return), (Z = e));
          break;
        }
        Z = t.return;
      }
  return ((v = Lm), (Lm = !1), v);
}
function rs(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        ((i.destroy = void 0), o !== void 0 && Fd(t, n, o));
      }
      i = i.next;
    } while (i !== r);
  }
}
function yu(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function jd(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function g_(e) {
  var t = e.alternate;
  (t !== null && ((e.alternate = null), g_(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[xn], delete t[xs], delete t[Ad], delete t[QT], delete t[YT])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null));
}
function y_(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Dm(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || y_(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      ((e.child.return = e), (e = e.child));
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Bd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = gl)));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bd(e, t, n), e = e.sibling; e !== null; )
      (Bd(e, t, n), (e = e.sibling));
}
function Wd(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Wd(e, t, n), e = e.sibling; e !== null; )
      (Wd(e, t, n), (e = e.sibling));
}
var ht = null,
  hn = !1;
function nr(e, t, n) {
  for (n = n.child; n !== null; ) (__(e, t, n), (n = n.sibling));
}
function __(e, t, n) {
  if (Cn && typeof Cn.onCommitFiberUnmount == "function")
    try {
      Cn.onCommitFiberUnmount(cu, n);
    } catch {}
  switch (n.tag) {
    case 5:
      _t || $i(n, t);
    case 6:
      var r = ht,
        i = hn;
      ((ht = null),
        nr(e, t, n),
        (ht = r),
        (hn = i),
        ht !== null &&
          (hn
            ? ((e = ht),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ht.removeChild(n.stateNode)));
      break;
    case 18:
      ht !== null &&
        (hn
          ? ((e = ht),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ec(e.parentNode, n)
              : e.nodeType === 1 && Ec(e, n),
            Ss(e))
          : Ec(ht, n.stateNode));
      break;
    case 4:
      ((r = ht),
        (i = hn),
        (ht = n.stateNode.containerInfo),
        (hn = !0),
        nr(e, t, n),
        (ht = r),
        (hn = i));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !_t &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          ((o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && Fd(n, t, s),
            (i = i.next));
        } while (i !== r);
      }
      nr(e, t, n);
      break;
    case 1:
      if (
        !_t &&
        ($i(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          ((r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount());
        } catch (a) {
          qe(n, t, a);
        }
      nr(e, t, n);
      break;
    case 21:
      nr(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((_t = (r = _t) || n.memoizedState !== null), nr(e, t, n), (_t = r))
        : nr(e, t, n);
      break;
    default:
      nr(e, t, n);
  }
}
function Mm(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    (n === null && (n = e.stateNode = new fR()),
      t.forEach(function (r) {
        var i = wR.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      }));
  }
}
function cn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              ((ht = a.stateNode), (hn = !1));
              break e;
            case 3:
              ((ht = a.stateNode.containerInfo), (hn = !0));
              break e;
            case 4:
              ((ht = a.stateNode.containerInfo), (hn = !0));
              break e;
          }
          a = a.return;
        }
        if (ht === null) throw Error(D(160));
        (__(o, s, i), (ht = null), (hn = !1));
        var l = i.alternate;
        (l !== null && (l.return = null), (i.return = null));
      } catch (u) {
        qe(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) (S_(t, e), (t = t.sibling));
}
function S_(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((cn(t, e), En(e), r & 4)) {
        try {
          (rs(3, e, e.return), yu(3, e));
        } catch (y) {
          qe(e, e.return, y);
        }
        try {
          rs(5, e, e.return);
        } catch (y) {
          qe(e, e.return, y);
        }
      }
      break;
    case 1:
      (cn(t, e), En(e), r & 512 && n !== null && $i(n, n.return));
      break;
    case 5:
      if (
        (cn(t, e),
        En(e),
        r & 512 && n !== null && $i(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          vs(i, "");
        } catch (y) {
          qe(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            (a === "input" && o.type === "radio" && o.name != null && jy(i, o),
              pd(a, s));
            var u = pd(a, o);
            for (s = 0; s < l.length; s += 2) {
              var c = l[s],
                d = l[s + 1];
              c === "style"
                ? Gy(i, d)
                : c === "dangerouslySetInnerHTML"
                  ? Zy(i, d)
                  : c === "children"
                    ? vs(i, d)
                    : Zf(i, c, d, u);
            }
            switch (a) {
              case "input":
                ud(i, o);
                break;
              case "textarea":
                By(i, o);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var h = o.value;
                h != null
                  ? Zi(i, !!o.multiple, h, !1)
                  : f !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Zi(i, !!o.multiple, o.defaultValue, !0)
                      : Zi(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[xs] = o;
          } catch (y) {
            qe(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((cn(t, e), En(e), r & 4)) {
        if (e.stateNode === null) throw Error(D(162));
        ((i = e.stateNode), (o = e.memoizedProps));
        try {
          i.nodeValue = o;
        } catch (y) {
          qe(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (cn(t, e), En(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ss(t.containerInfo);
        } catch (y) {
          qe(e, e.return, y);
        }
      break;
    case 4:
      (cn(t, e), En(e));
      break;
    case 13:
      (cn(t, e),
        En(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Rh = tt())),
        r & 4 && Mm(e));
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((_t = (u = _t) || c), cn(t, e), (_t = u)) : cn(t, e),
        En(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (Z = e, c = e.child; c !== null; ) {
            for (d = Z = c; Z !== null; ) {
              switch (((f = Z), (h = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  rs(4, f, f.return);
                  break;
                case 1:
                  $i(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    ((r = f), (n = f.return));
                    try {
                      ((t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount());
                    } catch (y) {
                      qe(r, n, y);
                    }
                  }
                  break;
                case 5:
                  $i(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Vm(d);
                    continue;
                  }
              }
              h !== null ? ((h.return = f), (Z = h)) : Vm(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                ((i = d.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = Hy("display", s))));
              } catch (y) {
                qe(e, e.return, y);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (y) {
                qe(e, e.return, y);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            ((d.child.return = d), (d = d.child));
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            (c === d && (c = null), (d = d.return));
          }
          (c === d && (c = null),
            (d.sibling.return = d.return),
            (d = d.sibling));
        }
      }
      break;
    case 19:
      (cn(t, e), En(e), r & 4 && Mm(e));
      break;
    case 21:
      break;
    default:
      (cn(t, e), En(e));
  }
}
function En(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (y_(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(D(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (vs(i, ""), (r.flags &= -33));
          var o = Dm(e);
          Wd(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = Dm(e);
          Bd(e, a, s);
          break;
        default:
          throw Error(D(161));
      }
    } catch (l) {
      qe(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function pR(e, t, n) {
  ((Z = e), E_(e));
}
function E_(e, t, n) {
  for (var r = (e.mode & 1) !== 0; Z !== null; ) {
    var i = Z,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || Oa;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || _t;
        a = Oa;
        var u = _t;
        if (((Oa = s), (_t = l) && !u))
          for (Z = i; Z !== null; )
            ((s = Z),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? $m(i)
                : l !== null
                  ? ((l.return = s), (Z = l))
                  : $m(i));
        for (; o !== null; ) ((Z = o), E_(o), (o = o.sibling));
        ((Z = i), (Oa = a), (_t = u));
      }
      zm(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (Z = o)) : zm(e);
  }
}
function zm(e) {
  for (; Z !== null; ) {
    var t = Z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              _t || yu(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !_t)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : fn(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && Em(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Em(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Ss(d);
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
              throw Error(D(163));
          }
        _t || (t.flags & 512 && jd(t));
      } catch (f) {
        qe(t, t.return, f);
      }
    }
    if (t === e) {
      Z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      ((n.return = t.return), (Z = n));
      break;
    }
    Z = t.return;
  }
}
function Vm(e) {
  for (; Z !== null; ) {
    var t = Z;
    if (t === e) {
      Z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      ((n.return = t.return), (Z = n));
      break;
    }
    Z = t.return;
  }
}
function $m(e) {
  for (; Z !== null; ) {
    var t = Z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            yu(4, t);
          } catch (l) {
            qe(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              qe(t, i, l);
            }
          }
          var o = t.return;
          try {
            jd(t);
          } catch (l) {
            qe(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            jd(t);
          } catch (l) {
            qe(t, s, l);
          }
      }
    } catch (l) {
      qe(t, t.return, l);
    }
    if (t === e) {
      Z = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      ((a.return = t.return), (Z = a));
      break;
    }
    Z = t.return;
  }
}
var mR = Math.ceil,
  Al = Xn.ReactCurrentDispatcher,
  wh = Xn.ReactCurrentOwner,
  rn = Xn.ReactCurrentBatchConfig,
  Re = 0,
  ft = null,
  ot = null,
  pt = 0,
  Ft = 0,
  Ui = Ir(0),
  lt = 0,
  Os = null,
  oi = 0,
  _u = 0,
  Th = 0,
  is = null,
  It = null,
  Rh = 0,
  so = 1 / 0,
  Dn = null,
  Pl = !1,
  Zd = null,
  Sr = null,
  Ia = !1,
  pr = null,
  kl = 0,
  os = 0,
  Hd = null,
  nl = -1,
  rl = 0;
function xt() {
  return Re & 6 ? tt() : nl !== -1 ? nl : (nl = tt());
}
function Er(e) {
  return e.mode & 1
    ? Re & 2 && pt !== 0
      ? pt & -pt
      : qT.transition !== null
        ? (rl === 0 && (rl = o0()), rl)
        : ((e = Pe),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : f0(e.type))),
          e)
    : 1;
}
function gn(e, t, n, r) {
  if (50 < os) throw ((os = 0), (Hd = null), Error(D(185)));
  (Js(e, n, r),
    (!(Re & 2) || e !== ft) &&
      (e === ft && (!(Re & 2) && (_u |= n), lt === 4 && dr(e, pt)),
      Mt(e, r),
      n === 1 && Re === 0 && !(t.mode & 1) && ((so = tt() + 500), mu && br())));
}
function Mt(e, t) {
  var n = e.callbackNode;
  qw(e, t);
  var r = hl(e, e === ft ? pt : 0);
  if (r === 0)
    (n !== null && Kp(n), (e.callbackNode = null), (e.callbackPriority = 0));
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Kp(n), t === 1))
      (e.tag === 0 ? JT(Um.bind(null, e)) : O0(Um.bind(null, e)),
        GT(function () {
          !(Re & 6) && br();
        }),
        (n = null));
    else {
      switch (s0(r)) {
        case 1:
          n = Yf;
          break;
        case 4:
          n = r0;
          break;
        case 16:
          n = fl;
          break;
        case 536870912:
          n = i0;
          break;
        default:
          n = fl;
      }
      n = P_(n, w_.bind(null, e));
    }
    ((e.callbackPriority = t), (e.callbackNode = n));
  }
}
function w_(e, t) {
  if (((nl = -1), (rl = 0), Re & 6)) throw Error(D(327));
  var n = e.callbackNode;
  if (Yi() && e.callbackNode !== n) return null;
  var r = hl(e, e === ft ? pt : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ol(e, r);
  else {
    t = r;
    var i = Re;
    Re |= 2;
    var o = R_();
    (ft !== e || pt !== t) && ((Dn = null), (so = tt() + 500), Xr(e, t));
    do
      try {
        yR();
        break;
      } catch (a) {
        T_(e, a);
      }
    while (1);
    (uh(),
      (Al.current = o),
      (Re = i),
      ot !== null ? (t = 0) : ((ft = null), (pt = 0), (t = lt)));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = _d(e)), i !== 0 && ((r = i), (t = Gd(e, i)))), t === 1)
    )
      throw ((n = Os), Xr(e, 0), dr(e, r), Mt(e, tt()), n);
    if (t === 6) dr(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !vR(i) &&
          ((t = Ol(e, r)),
          t === 2 && ((o = _d(e)), o !== 0 && ((r = o), (t = Gd(e, o)))),
          t === 1))
      )
        throw ((n = Os), Xr(e, 0), dr(e, r), Mt(e, tt()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(D(345));
        case 2:
          Fr(e, It, Dn);
          break;
        case 3:
          if (
            (dr(e, r), (r & 130023424) === r && ((t = Rh + 500 - tt()), 10 < t))
          ) {
            if (hl(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              (xt(), (e.pingedLanes |= e.suspendedLanes & i));
              break;
            }
            e.timeoutHandle = Nd(Fr.bind(null, e, It, Dn), t);
            break;
          }
          Fr(e, It, Dn);
          break;
        case 4:
          if ((dr(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - vn(r);
            ((o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o));
          }
          if (
            ((r = i),
            (r = tt() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * mR(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Nd(Fr.bind(null, e, It, Dn), r);
            break;
          }
          Fr(e, It, Dn);
          break;
        case 5:
          Fr(e, It, Dn);
          break;
        default:
          throw Error(D(329));
      }
    }
  }
  return (Mt(e, tt()), e.callbackNode === n ? w_.bind(null, e) : null);
}
function Gd(e, t) {
  var n = is;
  return (
    e.current.memoizedState.isDehydrated && (Xr(e, t).flags |= 256),
    (e = Ol(e, t)),
    e !== 2 && ((t = It), (It = n), t !== null && Kd(t)),
    e
  );
}
function Kd(e) {
  It === null ? (It = e) : It.push.apply(It, e);
}
function vR(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Sn(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      ((n.return = t), (t = n));
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  }
  return !0;
}
function dr(e, t) {
  for (
    t &= ~Th,
      t &= ~_u,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;
  ) {
    var n = 31 - vn(t),
      r = 1 << n;
    ((e[n] = -1), (t &= ~r));
  }
}
function Um(e) {
  if (Re & 6) throw Error(D(327));
  Yi();
  var t = hl(e, 0);
  if (!(t & 1)) return (Mt(e, tt()), null);
  var n = Ol(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = _d(e);
    r !== 0 && ((t = r), (n = Gd(e, r)));
  }
  if (n === 1) throw ((n = Os), Xr(e, 0), dr(e, t), Mt(e, tt()), n);
  if (n === 6) throw Error(D(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Fr(e, It, Dn),
    Mt(e, tt()),
    null
  );
}
function xh(e, t) {
  var n = Re;
  Re |= 1;
  try {
    return e(t);
  } finally {
    ((Re = n), Re === 0 && ((so = tt() + 500), mu && br()));
  }
}
function si(e) {
  pr !== null && pr.tag === 0 && !(Re & 6) && Yi();
  var t = Re;
  Re |= 1;
  var n = rn.transition,
    r = Pe;
  try {
    if (((rn.transition = null), (Pe = 1), e)) return e();
  } finally {
    ((Pe = r), (rn.transition = n), (Re = t), !(Re & 6) && br());
  }
}
function Ch() {
  ((Ft = Ui.current), ze(Ui));
}
function Xr(e, t) {
  ((e.finishedWork = null), (e.finishedLanes = 0));
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), HT(n)), ot !== null))
    for (n = ot.return; n !== null; ) {
      var r = n;
      switch ((sh(r), r.tag)) {
        case 1:
          ((r = r.type.childContextTypes), r != null && yl());
          break;
        case 3:
          (io(), ze(Lt), ze(Et), mh());
          break;
        case 5:
          ph(r);
          break;
        case 4:
          io();
          break;
        case 13:
          ze(Ge);
          break;
        case 19:
          ze(Ge);
          break;
        case 10:
          ch(r.type._context);
          break;
        case 22:
        case 23:
          Ch();
      }
      n = n.return;
    }
  if (
    ((ft = e),
    (ot = e = wr(e.current, null)),
    (pt = Ft = t),
    (lt = 0),
    (Os = null),
    (Th = _u = oi = 0),
    (It = is = null),
    Kr !== null)
  ) {
    for (t = 0; t < Kr.length; t++)
      if (((n = Kr[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          ((o.next = i), (r.next = s));
        }
        n.pending = r;
      }
    Kr = null;
  }
  return e;
}
function T_(e, t) {
  do {
    var n = ot;
    try {
      if ((uh(), (Xa.current = Nl), Cl)) {
        for (var r = Ye.memoizedState; r !== null; ) {
          var i = r.queue;
          (i !== null && (i.pending = null), (r = r.next));
        }
        Cl = !1;
      }
      if (
        ((ii = 0),
        (ct = st = Ye = null),
        (ns = !1),
        (As = 0),
        (wh.current = null),
        n === null || n.return === null)
      ) {
        ((lt = 1), (Os = t), (ot = null));
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = pt),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = a,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = c.alternate;
            f
              ? ((c.updateQueue = f.updateQueue),
                (c.memoizedState = f.memoizedState),
                (c.lanes = f.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var h = Nm(s);
          if (h !== null) {
            ((h.flags &= -257),
              Am(h, s, a, o, t),
              h.mode & 1 && Cm(o, u, t),
              (t = h),
              (l = u));
            var v = t.updateQueue;
            if (v === null) {
              var y = new Set();
              (y.add(l), (t.updateQueue = y));
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              (Cm(o, u, t), Nh());
              break e;
            }
            l = Error(D(426));
          }
        } else if (Be && a.mode & 1) {
          var _ = Nm(s);
          if (_ !== null) {
            (!(_.flags & 65536) && (_.flags |= 256),
              Am(_, s, a, o, t),
              ah(oo(l, a)));
            break e;
          }
        }
        ((o = l = oo(l, a)),
          lt !== 4 && (lt = 2),
          is === null ? (is = [o]) : is.push(o),
          (o = s));
        do {
          switch (o.tag) {
            case 3:
              ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
              var g = s_(o, l, t);
              Sm(o, g);
              break e;
            case 1:
              a = l;
              var m = o.type,
                p = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (Sr === null || !Sr.has(p))))
              ) {
                ((o.flags |= 65536), (t &= -t), (o.lanes |= t));
                var S = a_(o, a, t);
                Sm(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      C_(n);
    } catch (T) {
      ((t = T), ot === n && n !== null && (ot = n = n.return));
      continue;
    }
    break;
  } while (1);
}
function R_() {
  var e = Al.current;
  return ((Al.current = Nl), e === null ? Nl : e);
}
function Nh() {
  ((lt === 0 || lt === 3 || lt === 2) && (lt = 4),
    ft === null || (!(oi & 268435455) && !(_u & 268435455)) || dr(ft, pt));
}
function Ol(e, t) {
  var n = Re;
  Re |= 2;
  var r = R_();
  (ft !== e || pt !== t) && ((Dn = null), Xr(e, t));
  do
    try {
      gR();
      break;
    } catch (i) {
      T_(e, i);
    }
  while (1);
  if ((uh(), (Re = n), (Al.current = r), ot !== null)) throw Error(D(261));
  return ((ft = null), (pt = 0), lt);
}
function gR() {
  for (; ot !== null; ) x_(ot);
}
function yR() {
  for (; ot !== null && !Bw(); ) x_(ot);
}
function x_(e) {
  var t = A_(e.alternate, e, Ft);
  ((e.memoizedProps = e.pendingProps),
    t === null ? C_(e) : (ot = t),
    (wh.current = null));
}
function C_(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = dR(n, t)), n !== null)) {
        ((n.flags &= 32767), (ot = n));
        return;
      }
      if (e !== null)
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
      else {
        ((lt = 6), (ot = null));
        return;
      }
    } else if (((n = cR(n, t, Ft)), n !== null)) {
      ot = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ot = t;
      return;
    }
    ot = t = e;
  } while (t !== null);
  lt === 0 && (lt = 5);
}
function Fr(e, t, n) {
  var r = Pe,
    i = rn.transition;
  try {
    ((rn.transition = null), (Pe = 1), _R(e, t, n, r));
  } finally {
    ((rn.transition = i), (Pe = r));
  }
  return null;
}
function _R(e, t, n, r) {
  do Yi();
  while (pr !== null);
  if (Re & 6) throw Error(D(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(D(177));
  ((e.callbackNode = null), (e.callbackPriority = 0));
  var o = n.lanes | n.childLanes;
  if (
    (Xw(e, o),
    e === ft && ((ot = ft = null), (pt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ia ||
      ((Ia = !0),
      P_(fl, function () {
        return (Yi(), null);
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ((o = rn.transition), (rn.transition = null));
    var s = Pe;
    Pe = 1;
    var a = Re;
    ((Re |= 4),
      (wh.current = null),
      hR(e, n),
      S_(n, e),
      $T(xd),
      (pl = !!Rd),
      (xd = Rd = null),
      (e.current = n),
      pR(n),
      Ww(),
      (Re = a),
      (Pe = s),
      (rn.transition = o));
  } else e.current = n;
  if (
    (Ia && ((Ia = !1), (pr = e), (kl = i)),
    (o = e.pendingLanes),
    o === 0 && (Sr = null),
    Gw(n.stateNode),
    Mt(e, tt()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      ((i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest }));
  if (Pl) throw ((Pl = !1), (e = Zd), (Zd = null), e);
  return (
    kl & 1 && e.tag !== 0 && Yi(),
    (o = e.pendingLanes),
    o & 1 ? (e === Hd ? os++ : ((os = 0), (Hd = e))) : (os = 0),
    br(),
    null
  );
}
function Yi() {
  if (pr !== null) {
    var e = s0(kl),
      t = rn.transition,
      n = Pe;
    try {
      if (((rn.transition = null), (Pe = 16 > e ? 16 : e), pr === null))
        var r = !1;
      else {
        if (((e = pr), (pr = null), (kl = 0), Re & 6)) throw Error(D(331));
        var i = Re;
        for (Re |= 4, Z = e.current; Z !== null; ) {
          var o = Z,
            s = o.child;
          if (Z.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (Z = u; Z !== null; ) {
                  var c = Z;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      rs(8, c, o);
                  }
                  var d = c.child;
                  if (d !== null) ((d.return = c), (Z = d));
                  else
                    for (; Z !== null; ) {
                      c = Z;
                      var f = c.sibling,
                        h = c.return;
                      if ((g_(c), c === u)) {
                        Z = null;
                        break;
                      }
                      if (f !== null) {
                        ((f.return = h), (Z = f));
                        break;
                      }
                      Z = h;
                    }
                }
              }
              var v = o.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var _ = y.sibling;
                    ((y.sibling = null), (y = _));
                  } while (y !== null);
                }
              }
              Z = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) ((s.return = o), (Z = s));
          else
            e: for (; Z !== null; ) {
              if (((o = Z), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    rs(9, o, o.return);
                }
              var g = o.sibling;
              if (g !== null) {
                ((g.return = o.return), (Z = g));
                break e;
              }
              Z = o.return;
            }
        }
        var m = e.current;
        for (Z = m; Z !== null; ) {
          s = Z;
          var p = s.child;
          if (s.subtreeFlags & 2064 && p !== null) ((p.return = s), (Z = p));
          else
            e: for (s = m; Z !== null; ) {
              if (((a = Z), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      yu(9, a);
                  }
                } catch (T) {
                  qe(a, a.return, T);
                }
              if (a === s) {
                Z = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                ((S.return = a.return), (Z = S));
                break e;
              }
              Z = a.return;
            }
        }
        if (
          ((Re = i), br(), Cn && typeof Cn.onPostCommitFiberRoot == "function")
        )
          try {
            Cn.onPostCommitFiberRoot(cu, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      ((Pe = n), (rn.transition = t));
    }
  }
  return !1;
}
function Fm(e, t, n) {
  ((t = oo(n, t)),
    (t = s_(e, t, 1)),
    (e = _r(e, t, 1)),
    (t = xt()),
    e !== null && (Js(e, 1, t), Mt(e, t)));
}
function qe(e, t, n) {
  if (e.tag === 3) Fm(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Fm(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Sr === null || !Sr.has(r)))
        ) {
          ((e = oo(n, e)),
            (e = a_(t, e, 1)),
            (t = _r(t, e, 1)),
            (e = xt()),
            t !== null && (Js(t, 1, e), Mt(t, e)));
          break;
        }
      }
      t = t.return;
    }
}
function SR(e, t, n) {
  var r = e.pingCache;
  (r !== null && r.delete(t),
    (t = xt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ft === e &&
      (pt & n) === n &&
      (lt === 4 || (lt === 3 && (pt & 130023424) === pt && 500 > tt() - Rh)
        ? Xr(e, 0)
        : (Th |= n)),
    Mt(e, t));
}
function N_(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = wa), (wa <<= 1), !(wa & 130023424) && (wa = 4194304))
      : (t = 1));
  var n = xt();
  ((e = Qn(e, t)), e !== null && (Js(e, t, n), Mt(e, n)));
}
function ER(e) {
  var t = e.memoizedState,
    n = 0;
  (t !== null && (n = t.retryLane), N_(e, n));
}
function wR(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(D(314));
  }
  (r !== null && r.delete(t), N_(e, n));
}
var A_;
A_ = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Lt.current) bt = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return ((bt = !1), uR(e, t, n));
      bt = !!(e.flags & 131072);
    }
  else ((bt = !1), Be && t.flags & 1048576 && I0(t, El, t.index));
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      (tl(e, t), (e = t.pendingProps));
      var i = to(t, Et.current);
      (Qi(t, n), (i = gh(null, t, r, e, i, n)));
      var o = yh();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Dt(r) ? ((o = !0), _l(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            fh(t),
            (i.updater = gu),
            (t.stateNode = i),
            (i._reactInternals = t),
            Ld(t, r, e, n),
            (t = zd(null, t, r, !0, o, n)))
          : ((t.tag = 0), Be && o && oh(t), Rt(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (tl(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = RR(r)),
          (e = fn(r, e)),
          i)
        ) {
          case 0:
            t = Md(null, t, r, e, n);
            break e;
          case 1:
            t = Om(null, t, r, e, n);
            break e;
          case 11:
            t = Pm(null, t, r, e, n);
            break e;
          case 14:
            t = km(null, t, r, fn(r.type, e), n);
            break e;
        }
        throw Error(D(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : fn(r, i)),
        Md(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : fn(r, i)),
        Om(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((d_(t), e === null)) throw Error(D(387));
        ((r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          V0(e, t),
          Rl(t, r, null, n));
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            ((i = oo(Error(D(423)), t)), (t = Im(e, t, r, n, i)));
            break e;
          } else if (r !== i) {
            ((i = oo(Error(D(424)), t)), (t = Im(e, t, r, n, i)));
            break e;
          } else
            for (
              Bt = yr(t.stateNode.containerInfo.firstChild),
                Zt = t,
                Be = !0,
                pn = null,
                n = M0(t, null, r, n),
                t.child = n;
              n;
            )
              ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
        else {
          if ((no(), r === i)) {
            t = Yn(e, t, n);
            break e;
          }
          Rt(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        $0(t),
        e === null && Od(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        Cd(r, i) ? (s = null) : o !== null && Cd(r, o) && (t.flags |= 32),
        c_(e, t),
        Rt(e, t, s, n),
        t.child
      );
    case 6:
      return (e === null && Od(t), null);
    case 13:
      return f_(e, t, n);
    case 4:
      return (
        hh(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ro(t, null, r, n)) : Rt(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : fn(r, i)),
        Pm(e, t, r, i, n)
      );
    case 7:
      return (Rt(e, t, t.pendingProps, n), t.child);
    case 8:
      return (Rt(e, t, t.pendingProps.children, n), t.child);
    case 12:
      return (Rt(e, t, t.pendingProps.children, n), t.child);
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          be(wl, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (Sn(o.value, s)) {
            if (o.children === i.children && !Lt.current) {
              t = Yn(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      ((l = Fn(-1, n & -n)), (l.tag = 2));
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        (c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l));
                      }
                    }
                    ((o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      Id(o.return, n, t),
                      (a.lanes |= n));
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(D(341));
                ((s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Id(s, n, t),
                  (s = o.sibling));
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    ((o.return = s.return), (s = o));
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        (Rt(e, t, i.children, n), (t = t.child));
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Qi(t, n),
        (i = on(i)),
        (r = r(i)),
        (t.flags |= 1),
        Rt(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = fn(r, t.pendingProps)),
        (i = fn(r.type, i)),
        km(e, t, r, i, n)
      );
    case 15:
      return l_(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : fn(r, i)),
        tl(e, t),
        (t.tag = 1),
        Dt(r) ? ((e = !0), _l(t)) : (e = !1),
        Qi(t, n),
        o_(t, r, i),
        Ld(t, r, i, n),
        zd(null, t, r, !0, e, n)
      );
    case 19:
      return h_(e, t, n);
    case 22:
      return u_(e, t, n);
  }
  throw Error(D(156, t.tag));
};
function P_(e, t) {
  return n0(e, t);
}
function TR(e, t, n, r) {
  ((this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function nn(e, t, n, r) {
  return new TR(e, t, n, r);
}
function Ah(e) {
  return ((e = e.prototype), !(!e || !e.isReactComponent));
}
function RR(e) {
  if (typeof e == "function") return Ah(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Gf)) return 11;
    if (e === Kf) return 14;
  }
  return 2;
}
function wr(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = nn(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function il(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) Ah(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case ki:
        return ei(n.children, i, o, t);
      case Hf:
        ((s = 8), (i |= 8));
        break;
      case id:
        return (
          (e = nn(12, n, t, i | 2)),
          (e.elementType = id),
          (e.lanes = o),
          e
        );
      case od:
        return ((e = nn(13, n, t, i)), (e.elementType = od), (e.lanes = o), e);
      case sd:
        return ((e = nn(19, n, t, i)), (e.elementType = sd), (e.lanes = o), e);
      case $y:
        return Su(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case zy:
              s = 10;
              break e;
            case Vy:
              s = 9;
              break e;
            case Gf:
              s = 11;
              break e;
            case Kf:
              s = 14;
              break e;
            case or:
              ((s = 16), (r = null));
              break e;
          }
        throw Error(D(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = nn(s, n, t, i)),
    (t.elementType = e),
    (t.type = r),
    (t.lanes = o),
    t
  );
}
function ei(e, t, n, r) {
  return ((e = nn(7, e, r, t)), (e.lanes = n), e);
}
function Su(e, t, n, r) {
  return (
    (e = nn(22, e, r, t)),
    (e.elementType = $y),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Pc(e, t, n) {
  return ((e = nn(6, e, null, t)), (e.lanes = n), e);
}
function kc(e, t, n) {
  return (
    (t = nn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function xR(e, t, n, r, i) {
  ((this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = cc(0)),
    (this.expirationTimes = cc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = cc(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null));
}
function Ph(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new xR(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = nn(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    fh(o),
    e
  );
}
function CR(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Pi,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function k_(e) {
  if (!e) return Cr;
  e = e._reactInternals;
  e: {
    if (pi(e) !== e || e.tag !== 1) throw Error(D(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Dt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(D(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Dt(n)) return k0(e, n, t);
  }
  return t;
}
function O_(e, t, n, r, i, o, s, a, l) {
  return (
    (e = Ph(n, r, !0, e, i, o, s, a, l)),
    (e.context = k_(null)),
    (n = e.current),
    (r = xt()),
    (i = Er(n)),
    (o = Fn(r, i)),
    (o.callback = t ?? null),
    _r(n, o, i),
    (e.current.lanes = i),
    Js(e, i, r),
    Mt(e, r),
    e
  );
}
function Eu(e, t, n, r) {
  var i = t.current,
    o = xt(),
    s = Er(i);
  return (
    (n = k_(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Fn(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = _r(i, t, s)),
    e !== null && (gn(e, i, s, o), qa(e, i, s)),
    s
  );
}
function Il(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function jm(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function kh(e, t) {
  (jm(e, t), (e = e.alternate) && jm(e, t));
}
function NR() {
  return null;
}
var I_ =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Oh(e) {
  this._internalRoot = e;
}
wu.prototype.render = Oh.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(D(409));
  Eu(e, t, null, null);
};
wu.prototype.unmount = Oh.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    (si(function () {
      Eu(null, e, null, null);
    }),
      (t[Kn] = null));
  }
};
function wu(e) {
  this._internalRoot = e;
}
wu.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = u0();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < cr.length && t !== 0 && t < cr[n].priority; n++);
    (cr.splice(n, 0, e), n === 0 && d0(e));
  }
};
function Ih(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Tu(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Bm() {}
function AR(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = Il(s);
        o.call(u);
      };
    }
    var s = O_(t, r, e, 0, null, !1, !1, "", Bm);
    return (
      (e._reactRootContainer = s),
      (e[Kn] = s.current),
      Ts(e.nodeType === 8 ? e.parentNode : e),
      si(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = Il(l);
      a.call(u);
    };
  }
  var l = Ph(e, 0, !1, null, null, !1, !1, "", Bm);
  return (
    (e._reactRootContainer = l),
    (e[Kn] = l.current),
    Ts(e.nodeType === 8 ? e.parentNode : e),
    si(function () {
      Eu(t, l, n, r);
    }),
    l
  );
}
function Ru(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = Il(s);
        a.call(l);
      };
    }
    Eu(t, s, e, i);
  } else s = AR(n, t, e, i, r);
  return Il(s);
}
a0 = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Wo(t.pendingLanes);
        n !== 0 &&
          (Jf(t, n | 1), Mt(t, tt()), !(Re & 6) && ((so = tt() + 500), br()));
      }
      break;
    case 13:
      (si(function () {
        var r = Qn(e, 1);
        if (r !== null) {
          var i = xt();
          gn(r, e, 1, i);
        }
      }),
        kh(e, 1));
  }
};
qf = function (e) {
  if (e.tag === 13) {
    var t = Qn(e, 134217728);
    if (t !== null) {
      var n = xt();
      gn(t, e, 134217728, n);
    }
    kh(e, 134217728);
  }
};
l0 = function (e) {
  if (e.tag === 13) {
    var t = Er(e),
      n = Qn(e, t);
    if (n !== null) {
      var r = xt();
      gn(n, e, t, r);
    }
    kh(e, t);
  }
};
u0 = function () {
  return Pe;
};
c0 = function (e, t) {
  var n = Pe;
  try {
    return ((Pe = e), t());
  } finally {
    Pe = n;
  }
};
vd = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ud(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = pu(r);
            if (!i) throw Error(D(90));
            (Fy(r), ud(r, i));
          }
        }
      }
      break;
    case "textarea":
      By(e, n);
      break;
    case "select":
      ((t = n.value), t != null && Zi(e, !!n.multiple, t, !1));
  }
};
Yy = xh;
Jy = si;
var PR = { usingClientEntryPoint: !1, Events: [Xs, Li, pu, Ky, Qy, xh] },
  Lo = {
    findFiberByHostInstance: Gr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  kR = {
    bundleType: Lo.bundleType,
    version: Lo.version,
    rendererPackageName: Lo.rendererPackageName,
    rendererConfig: Lo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return ((e = e0(e)), e === null ? null : e.stateNode);
    },
    findFiberByHostInstance: Lo.findFiberByHostInstance || NR,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ba = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ba.isDisabled && ba.supportsFiber)
    try {
      ((cu = ba.inject(kR)), (Cn = ba));
    } catch {}
}
Qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = PR;
Qt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Ih(t)) throw Error(D(200));
  return CR(e, t, null, n);
};
Qt.createRoot = function (e, t) {
  if (!Ih(e)) throw Error(D(299));
  var n = !1,
    r = "",
    i = I_;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Ph(e, 1, !1, null, null, n, !1, r, i)),
    (e[Kn] = t.current),
    Ts(e.nodeType === 8 ? e.parentNode : e),
    new Oh(t)
  );
};
Qt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(D(188))
      : ((e = Object.keys(e).join(",")), Error(D(268, e)));
  return ((e = e0(t)), (e = e === null ? null : e.stateNode), e);
};
Qt.flushSync = function (e) {
  return si(e);
};
Qt.hydrate = function (e, t, n) {
  if (!Tu(t)) throw Error(D(200));
  return Ru(null, e, t, !0, n);
};
Qt.hydrateRoot = function (e, t, n) {
  if (!Ih(e)) throw Error(D(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = I_;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = O_(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[Kn] = t.current),
    Ts(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      ((n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i));
  return new wu(t);
};
Qt.render = function (e, t, n) {
  if (!Tu(t)) throw Error(D(200));
  return Ru(null, e, t, !1, n);
};
Qt.unmountComponentAtNode = function (e) {
  if (!Tu(e)) throw Error(D(40));
  return e._reactRootContainer
    ? (si(function () {
        Ru(null, null, e, !1, function () {
          ((e._reactRootContainer = null), (e[Kn] = null));
        });
      }),
      !0)
    : !1;
};
Qt.unstable_batchedUpdates = xh;
Qt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Tu(n)) throw Error(D(200));
  if (e == null || e._reactInternals === void 0) throw Error(D(38));
  return Ru(e, t, n, !1, r);
};
Qt.version = "18.3.1-next-f1338f8080-20240426";
function b_() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b_);
    } catch (e) {
      console.error(e);
    }
}
(b_(), (by.exports = Qt));
var L_ = by.exports;
const Ho = _y(L_);
var D_,
  Wm = L_;
((D_ = Wm.createRoot), Wm.hydrateRoot);
function Gt() {
  return (
    (Gt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Gt.apply(null, arguments)
  );
}
function an(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) !== -1) continue;
      n[r] = e[r];
    }
  return n;
}
var OR = P.createContext(void 0),
  IR = ["theme"],
  bR = function (t) {
    var n = t.theme,
      r = n === void 0 ? "light" : n,
      i = an(t, IR),
      o = x.useState(r || "light"),
      s = o[0],
      a = o[1];
    x.useEffect(
      function () {
        (s === "dark" || s === "light") &&
          document.body.setAttribute("zaui-theme", s);
      },
      [s],
    );
    var l = x.useCallback(
        function (c) {
          var d = c.mode;
          d !== s && (d === "dark" || d === "light") && a(d);
        },
        [s],
      ),
      u = P.useMemo(
        function () {
          return { setThemeMode: l, themeMode: s };
        },
        [l, s],
      );
    return P.createElement(OR.Provider, Gt({ value: u }, i));
  };
const LR = bR;
function M_(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = M_(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function St() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = M_(e)) && (r && (r += " "), (r += t));
  return r;
}
var Zm = "zaui",
  ln = function (t, n) {
    return n || (t ? Zm + "-" + t : Zm);
  },
  DR = function () {
    return P.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "100%",
        height: "100%",
        viewBox: "0 0 24 24",
        fill: "none",
      },
      P.createElement("path", {
        d: "M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM2.49 12C2.49 17.2522 6.74777 21.51 12 21.51C17.2522 21.51 21.51 17.2522 21.51 12C21.51 6.74777 17.2522 2.49 12 2.49C6.74777 2.49 2.49 6.74777 2.49 12Z",
        fill: "black",
        fillOpacity: "0.1",
      }),
      P.createElement("path", {
        d: "M15.6784 1.89361C15.9136 1.24748 16.6317 0.908557 17.25 1.20938C18.2892 1.71497 19.2519 2.369 20.1071 3.15267C21.2689 4.21731 22.2097 5.50037 22.8757 6.92858C23.5417 8.3568 23.9198 9.90221 23.9886 11.4766C24.0392 12.6355 23.9214 13.7933 23.6407 14.9143C23.4737 15.5814 22.7525 15.9136 22.1064 15.6784C21.4603 15.4433 21.1358 14.7295 21.2846 14.0582C21.4641 13.2486 21.5373 12.4172 21.5009 11.5852C21.4465 10.3375 21.1468 9.11276 20.619 7.9809C20.0912 6.84904 19.3456 5.83222 18.4249 4.98849C17.8108 4.42584 17.1269 3.94752 16.3914 3.5646C15.7815 3.24709 15.4433 2.53973 15.6784 1.89361Z",
        fill: "currentColor",
      }),
    );
  };
const MR = DR;
var zR = [
    "children",
    "prefixIcon",
    "suffixIcon",
    "icon",
    "fullWidth",
    "loading",
    "disabled",
    "type",
    "size",
    "className",
    "variant",
    "htmlType",
    "onClick",
  ],
  VR = P.forwardRef(function (e, t) {
    var n,
      r = e.children,
      i = e.prefixIcon,
      o = e.suffixIcon,
      s = e.icon,
      a = e.fullWidth,
      l = e.loading,
      u = e.disabled,
      c = e.type,
      d = e.size,
      f = e.className,
      h = e.variant,
      v = h === void 0 ? "primary" : h,
      y = e.htmlType,
      _ = y === void 0 ? "button" : y,
      g = e.onClick,
      m = an(e, zR),
      p = ln("btn"),
      S = t || P.createRef(),
      T = St(
        p,
        ((n = {}),
        (n[p + "-highlight"] = c === "highlight"),
        (n[p + "-danger"] = c === "danger"),
        (n[p + "-neutral"] = c === "neutral"),
        (n[p + "-primary"] = v === "primary"),
        (n[p + "-secondary"] = v === "secondary"),
        (n[p + "-tertiary"] = v === "tertiary"),
        (n[p + "-disabled"] = u),
        (n[p + "-loading"] = l && !u),
        (n[p + "-icon-only"] = s),
        (n[p + "-suffix-icon"] = o),
        (n[p + "-prefix-icon"] = i),
        (n[p + "-small"] = d === "small"),
        (n[p + "-medium"] = d === "medium"),
        (n[p + "-large"] = d === "large"),
        (n[p + "-full-width"] = a),
        (n[p + "-prefix-icon"] = i),
        (n[p + "-suffix-icon"] = o),
        (n[p + "-icon-only"] = s),
        (n["" + f] = f),
        n),
      ),
      N = function (I) {
        g && typeof g == "function" && g(I);
      },
      C = function () {
        return s && !l
          ? P.createElement(
              "div",
              { className: p + "-container" },
              P.createElement("span", { className: p + "-icon" }, s),
            )
          : P.createElement(
              "div",
              { className: p + "-container" },
              l &&
                !u &&
                P.createElement(
                  "span",
                  { className: p + "-loading-container" },
                  P.createElement(
                    "span",
                    { role: "img", className: p + "-loading-icon" },
                    P.createElement(MR, null),
                  ),
                ),
              i && P.createElement("span", { className: p + "-icon" }, i),
              P.createElement("span", null, r),
              o && P.createElement("span", { className: p + "-icon" }, o),
            );
      };
    return P.createElement(
      "button",
      Gt({ onClick: N, className: T, ref: S, type: _, disabled: u }, m),
      C(),
    );
  });
const Qd = VR;
function Is(e) {
  "@babel/helpers - typeof";
  return (
    (Is =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Is(e)
  );
}
function $R(e, t) {
  if (Is(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (Is(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function UR(e) {
  var t = $R(e, "string");
  return Is(t) == "symbol" ? t : t + "";
}
function ta(e, t, n) {
  return (
    (t = UR(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
var FR = {
  zi_add_member: "zi_add_member",
  zi_add_member_solid: "zi_add_member_solid",
  zi_add_user: "zi_add_user",
  zi_add_user_solid: "zi_add_user_solid",
  zi_admin: "zi_admin",
  zi_create_group: "zi_create_group",
  zi_create_group_solid: "zi_create_group_solid",
  zi_group: "zi_group",
  zi_group_solid: "zi_group_solid",
  zi_members: "zi_members",
  zi_members_solid: "zi_members_solid",
  zi_stranger: "zi_stranger",
  zi_stranger_solid: "zi_stranger_solid",
  zi_switch_users: "zi_switch_users",
  zi_switch_users_solid: "zi_switch_users_solid",
  zi_user: "zi_user",
  zi_user_check: "zi_user_check",
  zi_user_circle: "zi_user_circle",
  zi_user_circle_solid: "zi_user_circle_solid",
  zi_user_search: "zi_user_search",
  zi_user_search_solid: "zi_user_search_solid",
  zi_user_settings: "zi_user_settings",
  zi_user_settings_solid: "zi_user_settings_solid",
  zi_user_solid: "zi_user_solid",
  zi_add_photo: "zi_add_photo",
  zi_camera: "zi_camera",
  zi_gallery: "zi_gallery",
  zi_link: "zi_link",
  zi_livestream: "zi_livestream",
  zi_pause: "zi_pause",
  zi_pause_solid: "zi_pause_solid",
  zi_photo: "zi_photo",
  zi_photo_search: "zi_photo_search",
  zi_photo_solid: "zi_photo_solid",
  zi_play: "zi_play",
  zi_play_solid: "zi_play_solid",
  zi_add_story: "zi_add_story",
  zi_ban: "zi_ban",
  zi_bullet_solid: "zi_bullet_solid",
  zi_check: "zi_check",
  zi_check_circle: "zi_check_circle",
  zi_check_circle_solid: "zi_check_circle_solid",
  zi_close: "zi_close",
  zi_close_circle: "zi_close_circle",
  zi_close_circle_solid: "zi_close_circle_solid",
  zi_copy: "zi_copy",
  zi_delete: "zi_delete",
  zi_drag_indicator_solid: "zi_drag_indicator_solid",
  zi_filter: "zi_filter",
  zi_filter_solid: "zi_filter_solid",
  zi_home: "zi_home",
  zi_leave: "zi_leave",
  zi_leave_solid: "zi_leave_solid",
  zi_list_1: "zi_list_1",
  zi_list_2: "zi_list_2",
  zi_minus_circle: "zi_minus_circle",
  zi_minus_circle_solid: "zi_minus_circle_solid",
  zi_more_diamond_solid: "zi_more_diamond_solid",
  zi_more_grid: "zi_more_grid",
  zi_more_grid_solid: "zi_more_grid_solid",
  zi_more_horiz: "zi_more_horiz",
  zi_more_horiz_solid: "zi_more_horiz_solid",
  zi_more_vert: "zi_more_vert",
  zi_plus: "zi_plus",
  zi_plus_circle: "zi_plus_circle",
  zi_plus_circle_solid: "zi_plus_circle_solid",
  zi_radio_checked: "zi_radio_checked",
  zi_radio_unchecked: "zi_radio_unchecked",
  zi_save_to_collection: "zi_save_to_collection",
  zi_search: "zi_search",
  zi_setting: "zi_setting",
  zi_tune: "zi_tune",
  zi_arrow_down: "zi_arrow_down",
  zi_arrow_left: "zi_arrow_left",
  zi_arrow_right: "zi_arrow_right",
  zi_arrow_up: "zi_arrow_up",
  zi_auto: "zi_auto",
  zi_auto_solid: "zi_auto_solid",
  zi_backup_arrow_solid: "zi_backup_arrow_solid",
  zi_chevron_double_down: "zi_chevron_double_down",
  zi_chevron_double_up: "zi_chevron_double_up",
  zi_chevron_down: "zi_chevron_down",
  zi_chevron_left: "zi_chevron_left",
  zi_chevron_left_header: "zi_chevron_left_header",
  zi_chevron_right: "zi_chevron_right",
  zi_chevron_up: "zi_chevron_up",
  zi_download: "zi_download",
  zi_download_solid: "zi_download_solid",
  zi_reorder_solid: "zi_reorder_solid",
  zi_reply: "zi_reply",
  zi_reply_solid: "zi_reply_solid",
  zi_retry: "zi_retry",
  zi_retry_solid: "zi_retry_solid",
  zi_share: "zi_share",
  zi_share_external_1: "zi_share_external_1",
  zi_share_external_2: "zi_share_external_2",
  zi_share_solid: "zi_share_solid",
  zi_unfold_less: "zi_unfold_less",
  zi_unfold_more: "zi_unfold_more",
  zi_upload: "zi_upload",
  zi_at: "zi_at",
  zi_bubble_multiselect: "zi_bubble_multiselect",
  zi_call: "zi_call",
  zi_call_solid: "zi_call_solid",
  zi_chat: "zi_chat",
  zi_chat_solid: "zi_chat_solid",
  zi_grid_solid: "zi_grid_solid",
  zi_location: "zi_location",
  zi_location_solid: "zi_location_solid",
  zi_mic: "zi_mic",
  zi_quote: "zi_quote",
  zi_quote_solid: "zi_quote_solid",
  zi_recall: "zi_recall",
  zi_send_solid: "zi_send_solid",
  zi_user_window_solid: "zi_user_window_solid",
  zi_video: "zi_video",
  zi_video_group: "zi_video_group",
  zi_video_solid: "zi_video_solid",
  zi_wifi: "zi_wifi",
  zi_wifi_off: "zi_wifi_off",
  zi_backup_solid: "zi_backup_solid",
  zi_backup_success_solid: "zi_backup_success_solid",
  zi_backup_warning_solid: "zi_backup_warning_solid",
  zi_bookmark: "zi_bookmark",
  zi_bookmark_delete: "zi_bookmark_delete",
  zi_favorite_list: "zi_favorite_list",
  zi_heart: "zi_heart",
  zi_heart_solid: "zi_heart_solid",
  zi_pin: "zi_pin",
  zi_pin_solid: "zi_pin_solid",
  zi_star: "zi_star",
  zi_star_solid: "zi_star_solid",
  zi_unpin: "zi_unpin",
  zi_calendar: "zi_calendar",
  zi_calendar_solid: "zi_calendar_solid",
  zi_clock_1: "zi_clock_1",
  zi_clock_1_solid: "zi_clock_1_solid",
  zi_clock_2: "zi_clock_2",
  zi_clock_2_solid: "zi_clock_2_solid",
  zi_memory: "zi_memory",
  zi_reminder: "zi_reminder",
  zi_reminder_delete: "zi_reminder_delete",
  zi_reminder_solid: "zi_reminder_solid",
  zi_edit: "zi_edit",
  zi_edit_delete: "zi_edit_delete",
  zi_edit_delete_solid: "zi_edit_delete_solid",
  zi_edit_solid: "zi_edit_solid",
  zi_edit_text: "zi_edit_text",
  zi_edit_text_solid: "zi_edit_text_solid",
  zi_post: "zi_post",
  zi_exclamation: "zi_exclamation",
  zi_help_circle: "zi_help_circle",
  zi_info_circle: "zi_info_circle",
  zi_info_circle_solid: "zi_info_circle_solid",
  zi_warning: "zi_warning",
  zi_warning_circle: "zi_warning_circle",
  zi_warning_circle_solid: "zi_warning_circle_solid",
  zi_warning_solid: "zi_warning_solid",
  zi_file: "zi_file",
  zi_inbox: "zi_inbox",
  zi_note: "zi_note",
  zi_note_delete: "zi_note_delete",
  zi_pcline: "zi_pcline",
  zi_poll: "zi_poll",
  zi_poll_solid: "zi_poll_solid",
  zi_qrline: "zi_qrline",
  zi_truyen_file: "zi_truyen_file",
  zi_wallpaper: "zi_wallpaper",
  zi_hide: "zi_hide",
  zi_key_solid: "zi_key_solid",
  zi_lock: "zi_lock",
  zi_lock_open_solid: "zi_lock_open_solid",
  zi_lock_solid: "zi_lock_solid",
  zi_notif: "zi_notif",
  zi_notif_off: "zi_notif_off",
  zi_notif_off_solid: "zi_notif_off_solid",
  zi_notif_ring: "zi_notif_ring",
  zi_shield_solid: "zi_shield_solid",
  zi_unhide: "zi_unhide",
  zi_unlock: "zi_unlock",
  zi_unlock_solid: "zi_unlock_solid",
};
const jR = FR;
var BR = ["children", "size", "icon", "style", "className"];
function Hm(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function WR(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Hm(Object(n), !0).forEach(function (r) {
          ta(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Hm(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
var ZR = P.forwardRef(function (e, t) {
  var n,
    r = e.children,
    i = e.size,
    o = e.icon,
    s = e.style,
    a = e.className,
    l = an(e, BR),
    u = ln("icon"),
    c = function (y) {
      if (typeof y == "string") {
        var _ = y.replace(/-/g, "_"),
          g = jR[_];
        return g || null;
      }
      return null;
    },
    d = {};
  s && (d = WR({}, s));
  var f = St(u, ((n = {}), (n["" + a] = a), n));
  typeof i == "number" && (d.fontSize = i + "px");
  var h = c(o || r);
  return P.createElement("i", Gt({ ref: t, className: f, style: d }, l), h);
});
const Lr = ZR;
function Yd(e, t) {
  return (
    (Yd = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return ((n.__proto__ = r), n);
        }),
    Yd(e, t)
  );
}
function bh(e, t) {
  ((e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Yd(e, t));
}
function HR(e, t) {
  return e.classList
    ? !!t && e.classList.contains(t)
    : (" " + (e.className.baseVal || e.className) + " ").indexOf(
        " " + t + " ",
      ) !== -1;
}
function GR(e, t) {
  e.classList
    ? e.classList.add(t)
    : HR(e, t) ||
      (typeof e.className == "string"
        ? (e.className = e.className + " " + t)
        : e.setAttribute(
            "class",
            ((e.className && e.className.baseVal) || "") + " " + t,
          ));
}
function Gm(e, t) {
  return e
    .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
    .replace(/\s+/g, " ")
    .replace(/^\s*|\s*$/g, "");
}
function KR(e, t) {
  e.classList
    ? e.classList.remove(t)
    : typeof e.className == "string"
      ? (e.className = Gm(e.className, t))
      : e.setAttribute(
          "class",
          Gm((e.className && e.className.baseVal) || "", t),
        );
}
const Km = { disabled: !1 },
  bl = P.createContext(null);
var z_ = function (t) {
    return t.scrollTop;
  },
  Go = "unmounted",
  jr = "exited",
  Br = "entering",
  Ci = "entered",
  Jd = "exiting",
  er = (function (e) {
    bh(t, e);
    function t(r, i) {
      var o;
      o = e.call(this, r, i) || this;
      var s = i,
        a = s && !s.isMounting ? r.enter : r.appear,
        l;
      return (
        (o.appearStatus = null),
        r.in
          ? a
            ? ((l = jr), (o.appearStatus = Br))
            : (l = Ci)
          : r.unmountOnExit || r.mountOnEnter
            ? (l = Go)
            : (l = jr),
        (o.state = { status: l }),
        (o.nextCallback = null),
        o
      );
    }
    t.getDerivedStateFromProps = function (i, o) {
      var s = i.in;
      return s && o.status === Go ? { status: jr } : null;
    };
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        this.updateStatus(!0, this.appearStatus);
      }),
      (n.componentDidUpdate = function (i) {
        var o = null;
        if (i !== this.props) {
          var s = this.state.status;
          this.props.in
            ? s !== Br && s !== Ci && (o = Br)
            : (s === Br || s === Ci) && (o = Jd);
        }
        this.updateStatus(!1, o);
      }),
      (n.componentWillUnmount = function () {
        this.cancelNextCallback();
      }),
      (n.getTimeouts = function () {
        var i = this.props.timeout,
          o,
          s,
          a;
        return (
          (o = s = a = i),
          i != null &&
            typeof i != "number" &&
            ((o = i.exit),
            (s = i.enter),
            (a = i.appear !== void 0 ? i.appear : s)),
          { exit: o, enter: s, appear: a }
        );
      }),
      (n.updateStatus = function (i, o) {
        if ((i === void 0 && (i = !1), o !== null))
          if ((this.cancelNextCallback(), o === Br)) {
            if (this.props.unmountOnExit || this.props.mountOnEnter) {
              var s = this.props.nodeRef
                ? this.props.nodeRef.current
                : Ho.findDOMNode(this);
              s && z_(s);
            }
            this.performEnter(i);
          } else this.performExit();
        else
          this.props.unmountOnExit &&
            this.state.status === jr &&
            this.setState({ status: Go });
      }),
      (n.performEnter = function (i) {
        var o = this,
          s = this.props.enter,
          a = this.context ? this.context.isMounting : i,
          l = this.props.nodeRef ? [a] : [Ho.findDOMNode(this), a],
          u = l[0],
          c = l[1],
          d = this.getTimeouts(),
          f = a ? d.appear : d.enter;
        if ((!i && !s) || Km.disabled) {
          this.safeSetState({ status: Ci }, function () {
            o.props.onEntered(u);
          });
          return;
        }
        (this.props.onEnter(u, c),
          this.safeSetState({ status: Br }, function () {
            (o.props.onEntering(u, c),
              o.onTransitionEnd(f, function () {
                o.safeSetState({ status: Ci }, function () {
                  o.props.onEntered(u, c);
                });
              }));
          }));
      }),
      (n.performExit = function () {
        var i = this,
          o = this.props.exit,
          s = this.getTimeouts(),
          a = this.props.nodeRef ? void 0 : Ho.findDOMNode(this);
        if (!o || Km.disabled) {
          this.safeSetState({ status: jr }, function () {
            i.props.onExited(a);
          });
          return;
        }
        (this.props.onExit(a),
          this.safeSetState({ status: Jd }, function () {
            (i.props.onExiting(a),
              i.onTransitionEnd(s.exit, function () {
                i.safeSetState({ status: jr }, function () {
                  i.props.onExited(a);
                });
              }));
          }));
      }),
      (n.cancelNextCallback = function () {
        this.nextCallback !== null &&
          (this.nextCallback.cancel(), (this.nextCallback = null));
      }),
      (n.safeSetState = function (i, o) {
        ((o = this.setNextCallback(o)), this.setState(i, o));
      }),
      (n.setNextCallback = function (i) {
        var o = this,
          s = !0;
        return (
          (this.nextCallback = function (a) {
            s && ((s = !1), (o.nextCallback = null), i(a));
          }),
          (this.nextCallback.cancel = function () {
            s = !1;
          }),
          this.nextCallback
        );
      }),
      (n.onTransitionEnd = function (i, o) {
        this.setNextCallback(o);
        var s = this.props.nodeRef
            ? this.props.nodeRef.current
            : Ho.findDOMNode(this),
          a = i == null && !this.props.addEndListener;
        if (!s || a) {
          setTimeout(this.nextCallback, 0);
          return;
        }
        if (this.props.addEndListener) {
          var l = this.props.nodeRef
              ? [this.nextCallback]
              : [s, this.nextCallback],
            u = l[0],
            c = l[1];
          this.props.addEndListener(u, c);
        }
        i != null && setTimeout(this.nextCallback, i);
      }),
      (n.render = function () {
        var i = this.state.status;
        if (i === Go) return null;
        var o = this.props,
          s = o.children;
        (o.in,
          o.mountOnEnter,
          o.unmountOnExit,
          o.appear,
          o.enter,
          o.exit,
          o.timeout,
          o.addEndListener,
          o.onEnter,
          o.onEntering,
          o.onEntered,
          o.onExit,
          o.onExiting,
          o.onExited,
          o.nodeRef);
        var a = an(o, [
          "children",
          "in",
          "mountOnEnter",
          "unmountOnExit",
          "appear",
          "enter",
          "exit",
          "timeout",
          "addEndListener",
          "onEnter",
          "onEntering",
          "onEntered",
          "onExit",
          "onExiting",
          "onExited",
          "nodeRef",
        ]);
        return P.createElement(
          bl.Provider,
          { value: null },
          typeof s == "function"
            ? s(i, a)
            : P.cloneElement(P.Children.only(s), a),
        );
      }),
      t
    );
  })(P.Component);
er.contextType = bl;
er.propTypes = {};
function wi() {}
er.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: wi,
  onEntering: wi,
  onEntered: wi,
  onExit: wi,
  onExiting: wi,
  onExited: wi,
};
er.UNMOUNTED = Go;
er.EXITED = jr;
er.ENTERING = Br;
er.ENTERED = Ci;
er.EXITING = Jd;
const QR = er;
var YR = function (t, n) {
    return (
      t &&
      n &&
      n.split(" ").forEach(function (r) {
        return GR(t, r);
      })
    );
  },
  Oc = function (t, n) {
    return (
      t &&
      n &&
      n.split(" ").forEach(function (r) {
        return KR(t, r);
      })
    );
  },
  Lh = (function (e) {
    bh(t, e);
    function t() {
      for (var r, i = arguments.length, o = new Array(i), s = 0; s < i; s++)
        o[s] = arguments[s];
      return (
        (r = e.call.apply(e, [this].concat(o)) || this),
        (r.appliedClasses = { appear: {}, enter: {}, exit: {} }),
        (r.onEnter = function (a, l) {
          var u = r.resolveArguments(a, l),
            c = u[0],
            d = u[1];
          (r.removeClasses(c, "exit"),
            r.addClass(c, d ? "appear" : "enter", "base"),
            r.props.onEnter && r.props.onEnter(a, l));
        }),
        (r.onEntering = function (a, l) {
          var u = r.resolveArguments(a, l),
            c = u[0],
            d = u[1],
            f = d ? "appear" : "enter";
          (r.addClass(c, f, "active"),
            r.props.onEntering && r.props.onEntering(a, l));
        }),
        (r.onEntered = function (a, l) {
          var u = r.resolveArguments(a, l),
            c = u[0],
            d = u[1],
            f = d ? "appear" : "enter";
          (r.removeClasses(c, f),
            r.addClass(c, f, "done"),
            r.props.onEntered && r.props.onEntered(a, l));
        }),
        (r.onExit = function (a) {
          var l = r.resolveArguments(a),
            u = l[0];
          (r.removeClasses(u, "appear"),
            r.removeClasses(u, "enter"),
            r.addClass(u, "exit", "base"),
            r.props.onExit && r.props.onExit(a));
        }),
        (r.onExiting = function (a) {
          var l = r.resolveArguments(a),
            u = l[0];
          (r.addClass(u, "exit", "active"),
            r.props.onExiting && r.props.onExiting(a));
        }),
        (r.onExited = function (a) {
          var l = r.resolveArguments(a),
            u = l[0];
          (r.removeClasses(u, "exit"),
            r.addClass(u, "exit", "done"),
            r.props.onExited && r.props.onExited(a));
        }),
        (r.resolveArguments = function (a, l) {
          return r.props.nodeRef ? [r.props.nodeRef.current, a] : [a, l];
        }),
        (r.getClassNames = function (a) {
          var l = r.props.classNames,
            u = typeof l == "string",
            c = u && l ? l + "-" : "",
            d = u ? "" + c + a : l[a],
            f = u ? d + "-active" : l[a + "Active"],
            h = u ? d + "-done" : l[a + "Done"];
          return { baseClassName: d, activeClassName: f, doneClassName: h };
        }),
        r
      );
    }
    var n = t.prototype;
    return (
      (n.addClass = function (i, o, s) {
        var a = this.getClassNames(o)[s + "ClassName"],
          l = this.getClassNames("enter"),
          u = l.doneClassName;
        (o === "appear" && s === "done" && u && (a += " " + u),
          s === "active" && i && z_(i),
          a && ((this.appliedClasses[o][s] = a), YR(i, a)));
      }),
      (n.removeClasses = function (i, o) {
        var s = this.appliedClasses[o],
          a = s.base,
          l = s.active,
          u = s.done;
        ((this.appliedClasses[o] = {}),
          a && Oc(i, a),
          l && Oc(i, l),
          u && Oc(i, u));
      }),
      (n.render = function () {
        var i = this.props;
        i.classNames;
        var o = an(i, ["classNames"]);
        return P.createElement(
          QR,
          Gt({}, o, {
            onEnter: this.onEnter,
            onEntered: this.onEntered,
            onEntering: this.onEntering,
            onExit: this.onExit,
            onExiting: this.onExiting,
            onExited: this.onExited,
          }),
        );
      }),
      t
    );
  })(P.Component);
Lh.defaultProps = { classNames: "" };
Lh.propTypes = {};
const V_ = Lh;
function JR(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function Dh(e, t) {
  var n = function (o) {
      return t && x.isValidElement(o) ? t(o) : o;
    },
    r = Object.create(null);
  return (
    e &&
      x.Children.map(e, function (i) {
        return i;
      }).forEach(function (i) {
        r[i.key] = n(i);
      }),
    r
  );
}
function qR(e, t) {
  ((e = e || {}), (t = t || {}));
  function n(c) {
    return c in t ? t[c] : e[c];
  }
  var r = Object.create(null),
    i = [];
  for (var o in e) o in t ? i.length && ((r[o] = i), (i = [])) : i.push(o);
  var s,
    a = {};
  for (var l in t) {
    if (r[l])
      for (s = 0; s < r[l].length; s++) {
        var u = r[l][s];
        a[r[l][s]] = n(u);
      }
    a[l] = n(l);
  }
  for (s = 0; s < i.length; s++) a[i[s]] = n(i[s]);
  return a;
}
function Yr(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function XR(e, t) {
  return Dh(e.children, function (n) {
    return x.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: Yr(n, "appear", e),
      enter: Yr(n, "enter", e),
      exit: Yr(n, "exit", e),
    });
  });
}
function ex(e, t, n) {
  var r = Dh(e.children),
    i = qR(t, r);
  return (
    Object.keys(i).forEach(function (o) {
      var s = i[o];
      if (x.isValidElement(s)) {
        var a = o in t,
          l = o in r,
          u = t[o],
          c = x.isValidElement(u) && !u.props.in;
        l && (!a || c)
          ? (i[o] = x.cloneElement(s, {
              onExited: n.bind(null, s),
              in: !0,
              exit: Yr(s, "exit", e),
              enter: Yr(s, "enter", e),
            }))
          : !l && a && !c
            ? (i[o] = x.cloneElement(s, { in: !1 }))
            : l &&
              a &&
              x.isValidElement(u) &&
              (i[o] = x.cloneElement(s, {
                onExited: n.bind(null, s),
                in: u.props.in,
                exit: Yr(s, "exit", e),
                enter: Yr(s, "enter", e),
              }));
      }
    }),
    i
  );
}
var tx =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  nx = {
    component: "div",
    childFactory: function (t) {
      return t;
    },
  },
  Mh = (function (e) {
    bh(t, e);
    function t(r, i) {
      var o;
      o = e.call(this, r, i) || this;
      var s = o.handleExited.bind(JR(o));
      return (
        (o.state = {
          contextValue: { isMounting: !0 },
          handleExited: s,
          firstRender: !0,
        }),
        o
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        ((this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } }));
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (i, o) {
        var s = o.children,
          a = o.handleExited,
          l = o.firstRender;
        return { children: l ? XR(i, a) : ex(i, s, a), firstRender: !1 };
      }),
      (n.handleExited = function (i, o) {
        var s = Dh(this.props.children);
        i.key in s ||
          (i.props.onExited && i.props.onExited(o),
          this.mounted &&
            this.setState(function (a) {
              var l = Gt({}, a.children);
              return (delete l[i.key], { children: l });
            }));
      }),
      (n.render = function () {
        var i = this.props,
          o = i.component,
          s = i.childFactory,
          a = an(i, ["component", "childFactory"]),
          l = this.state.contextValue,
          u = tx(this.state.children).map(s);
        return (
          delete a.appear,
          delete a.enter,
          delete a.exit,
          o === null
            ? P.createElement(bl.Provider, { value: l }, u)
            : P.createElement(
                bl.Provider,
                { value: l },
                P.createElement(o, a, u),
              )
        );
      }),
      t
    );
  })(P.Component);
Mh.propTypes = {};
Mh.defaultProps = nx;
const rx = Mh;
/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ll() {
  return (
    (Ll = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ll.apply(this, arguments)
  );
}
var Wt;
(function (e) {
  ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
})(Wt || (Wt = {}));
const Qm = "popstate";
function ix(e) {
  e === void 0 && (e = {});
  let { initialEntries: t = ["/"], initialIndex: n, v5Compat: r = !1 } = e,
    i;
  i = t.map((h, v) =>
    c(h, typeof h == "string" ? null : h.state, v === 0 ? "default" : void 0),
  );
  let o = l(n ?? i.length - 1),
    s = Wt.Pop,
    a = null;
  function l(h) {
    return Math.min(Math.max(h, 0), i.length - 1);
  }
  function u() {
    return i[o];
  }
  function c(h, v, y) {
    v === void 0 && (v = null);
    let _ = Dl(i ? u().pathname : "/", h, v, y);
    return (
      zh(
        _.pathname.charAt(0) === "/",
        "relative pathnames are not supported in memory history: " +
          JSON.stringify(h),
      ),
      _
    );
  }
  function d(h) {
    return typeof h == "string" ? h : Vh(h);
  }
  return {
    get index() {
      return o;
    },
    get action() {
      return s;
    },
    get location() {
      return u();
    },
    createHref: d,
    createURL(h) {
      return new URL(d(h), "http://localhost");
    },
    encodeLocation(h) {
      let v = typeof h == "string" ? na(h) : h;
      return {
        pathname: v.pathname || "",
        search: v.search || "",
        hash: v.hash || "",
      };
    },
    push(h, v) {
      s = Wt.Push;
      let y = c(h, v);
      ((o += 1),
        i.splice(o, i.length, y),
        r && a && a({ action: s, location: y, delta: 1 }));
    },
    replace(h, v) {
      s = Wt.Replace;
      let y = c(h, v);
      ((i[o] = y), r && a && a({ action: s, location: y, delta: 0 }));
    },
    go(h) {
      s = Wt.Pop;
      let v = l(o + h),
        y = i[v];
      ((o = v), a && a({ action: s, location: y, delta: h }));
    },
    listen(h) {
      return (
        (a = h),
        () => {
          a = null;
        }
      );
    },
  };
}
function ox(e) {
  e === void 0 && (e = {});
  function t(r, i) {
    let { pathname: o, search: s, hash: a } = r.location;
    return Dl(
      "",
      { pathname: o, search: s, hash: a },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default",
    );
  }
  function n(r, i) {
    return typeof i == "string" ? i : Vh(i);
  }
  return ax(t, n, null, e);
}
function Vt(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function zh(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function sx() {
  return Math.random().toString(36).substr(2, 8);
}
function Ym(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Dl(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ll(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? na(t) : t,
      { state: n, key: (t && t.key) || r || sx() },
    )
  );
}
function Vh(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function na(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    (r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function ax(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    s = i.history,
    a = Wt.Pop,
    l = null,
    u = c();
  u == null && ((u = 0), s.replaceState(Ll({}, s.state, { idx: u }), ""));
  function c() {
    return (s.state || { idx: null }).idx;
  }
  function d() {
    a = Wt.Pop;
    let _ = c(),
      g = _ == null ? null : _ - u;
    ((u = _), l && l({ action: a, location: y.location, delta: g }));
  }
  function f(_, g) {
    a = Wt.Push;
    let m = Dl(y.location, _, g);
    (n && n(m, _), (u = c() + 1));
    let p = Ym(m, u),
      S = y.createHref(m);
    try {
      s.pushState(p, "", S);
    } catch (T) {
      if (T instanceof DOMException && T.name === "DataCloneError") throw T;
      i.location.assign(S);
    }
    o && l && l({ action: a, location: y.location, delta: 1 });
  }
  function h(_, g) {
    a = Wt.Replace;
    let m = Dl(y.location, _, g);
    (n && n(m, _), (u = c()));
    let p = Ym(m, u),
      S = y.createHref(m);
    (s.replaceState(p, "", S),
      o && l && l({ action: a, location: y.location, delta: 0 }));
  }
  function v(_) {
    let g = i.location.origin !== "null" ? i.location.origin : i.location.href,
      m = typeof _ == "string" ? _ : Vh(_);
    return (
      (m = m.replace(/ $/, "%20")),
      Vt(
        g,
        "No window.location.(origin|href) available to create URL for href: " +
          m,
      ),
      new URL(m, g)
    );
  }
  let y = {
    get action() {
      return a;
    },
    get location() {
      return e(i, s);
    },
    listen(_) {
      if (l) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(Qm, d),
        (l = _),
        () => {
          (i.removeEventListener(Qm, d), (l = null));
        }
      );
    },
    createHref(_) {
      return t(i, _);
    },
    createURL: v,
    encodeLocation(_) {
      let g = v(_);
      return { pathname: g.pathname, search: g.search, hash: g.hash };
    },
    push: f,
    replace: h,
    go(_) {
      return s.go(_);
    },
  };
  return y;
}
var Jm;
(function (e) {
  ((e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error"));
})(Jm || (Jm = {}));
function lx(e, t, n) {
  return (n === void 0 && (n = "/"), ux(e, t, n, !1));
}
function ux(e, t, n, r) {
  let i = typeof t == "string" ? na(t) : t,
    o = F_(i.pathname || "/", n);
  if (o == null) return null;
  let s = $_(e);
  cx(s);
  let a = null;
  for (let l = 0; a == null && l < s.length; ++l) {
    let u = Ex(o);
    a = _x(s[l], u, r);
  }
  return a;
}
function $_(e, t, n, r) {
  (t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""));
  let i = (o, s, a) => {
    let l = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    };
    l.relativePath.startsWith("/") &&
      (Vt(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = Ji([r, l.relativePath]),
      c = n.concat(l);
    (o.children &&
      o.children.length > 0 &&
      (Vt(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".'),
      ),
      $_(o.children, t, c, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: gx(u, o.index), routesMeta: c }));
  };
  return (
    e.forEach((o, s) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) i(o, s);
      else for (let l of U_(o.path)) i(o, s, l);
    }),
    t
  );
}
function U_(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return i ? [o, ""] : [o];
  let s = U_(r.join("/")),
    a = [];
  return (
    a.push(...s.map((l) => (l === "" ? o : [o, l].join("/")))),
    i && a.push(...s),
    a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
  );
}
function cx(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : yx(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const dx = /^:[\w-]+$/,
  fx = 3,
  hx = 2,
  px = 1,
  mx = 10,
  vx = -2,
  qm = (e) => e === "*";
function gx(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(qm) && (r += vx),
    t && (r += hx),
    n
      .filter((i) => !qm(i))
      .reduce((i, o) => i + (dx.test(o) ? fx : o === "" ? px : mx), r)
  );
}
function yx(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function _x(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    i = {},
    o = "/",
    s = [];
  for (let a = 0; a < r.length; ++a) {
    let l = r[a],
      u = a === r.length - 1,
      c = o === "/" ? t : t.slice(o.length) || "/",
      d = Xm(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c,
      ),
      f = l.route;
    if (
      (!d &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (d = Xm(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          c,
        )),
      !d)
    )
      return null;
    (Object.assign(i, d.params),
      s.push({
        params: i,
        pathname: Ji([o, d.pathname]),
        pathnameBase: wx(Ji([o, d.pathnameBase])),
        route: f,
      }),
      d.pathnameBase !== "/" && (o = Ji([o, d.pathnameBase])));
  }
  return s;
}
function Xm(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Sx(e.path, e.caseSensitive, e.end),
    i = t.match(n);
  if (!i) return null;
  let o = i[0],
    s = o.replace(/(.)\/+$/, "$1"),
    a = i.slice(1);
  return {
    params: r.reduce((u, c, d) => {
      let { paramName: f, isOptional: h } = c;
      if (f === "*") {
        let y = a[d] || "";
        s = o.slice(0, o.length - y.length).replace(/(.)\/+$/, "$1");
      }
      const v = a[d];
      return (
        h && !v ? (u[f] = void 0) : (u[f] = (v || "").replace(/%2F/g, "/")),
        u
      );
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: e,
  };
}
function Sx(e, t, n) {
  (t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    zh(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    ));
  let r = [],
    i =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, a, l) => (
            r.push({ paramName: a, isOptional: l != null }),
            l ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (i += "\\/*$")
        : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, t ? void 0 : "i"), r]
  );
}
function Ex(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      zh(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function F_(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
const Ji = (e) => e.join("/").replace(/\/\/+/g, "/"),
  wx = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/");
function Tx(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const j_ = ["post", "put", "patch", "delete"];
new Set(j_);
const Rx = ["get", ...j_];
new Set(Rx);
/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ml() {
  return (
    (Ml = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ml.apply(this, arguments)
  );
}
const xx = x.createContext(null),
  Cx = x.createContext(null),
  B_ = x.createContext(null),
  ra = x.createContext(null),
  xu = x.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  W_ = x.createContext(null);
function $h() {
  return x.useContext(ra) != null;
}
function Uh() {
  return ($h() || Vt(!1), x.useContext(ra).location);
}
function Nx() {
  return x.useContext(ra).navigationType;
}
function Ax(e, t) {
  return Px(e, t);
}
function Px(e, t, n, r) {
  $h() || Vt(!1);
  let { navigator: i } = x.useContext(B_),
    { matches: o } = x.useContext(xu),
    s = o[o.length - 1],
    a = s ? s.params : {};
  s && s.pathname;
  let l = s ? s.pathnameBase : "/";
  s && s.route;
  let u = Uh(),
    c;
  if (t) {
    var d;
    let _ = typeof t == "string" ? na(t) : t;
    (l === "/" || ((d = _.pathname) != null && d.startsWith(l)) || Vt(!1),
      (c = _));
  } else c = u;
  let f = c.pathname || "/",
    h = f;
  if (l !== "/") {
    let _ = l.replace(/^\//, "").split("/");
    h = "/" + f.replace(/^\//, "").split("/").slice(_.length).join("/");
  }
  let v = lx(e, { pathname: h }),
    y = Lx(
      v &&
        v.map((_) =>
          Object.assign({}, _, {
            params: Object.assign({}, a, _.params),
            pathname: Ji([
              l,
              i.encodeLocation
                ? i.encodeLocation(_.pathname).pathname
                : _.pathname,
            ]),
            pathnameBase:
              _.pathnameBase === "/"
                ? l
                : Ji([
                    l,
                    i.encodeLocation
                      ? i.encodeLocation(_.pathnameBase).pathname
                      : _.pathnameBase,
                  ]),
          }),
        ),
      o,
      n,
      r,
    );
  return t && y
    ? x.createElement(
        ra.Provider,
        {
          value: {
            location: Ml(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              c,
            ),
            navigationType: Wt.Pop,
          },
        },
        y,
      )
    : y;
}
function kx() {
  let e = Vx(),
    t = Tx(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unexpected Application Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? x.createElement("pre", { style: i }, n) : null,
    o,
  );
}
const Ox = x.createElement(kx, null);
class Ix extends x.Component {
  constructor(t) {
    (super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      }));
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error !== void 0
      ? x.createElement(
          xu.Provider,
          { value: this.props.routeContext },
          x.createElement(W_.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function bx(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = x.useContext(xx);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    x.createElement(xu.Provider, { value: t }, r)
  );
}
function Lx(e, t, n, r) {
  var i;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (o = r) != null &&
      o.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    a = (i = n) == null ? void 0 : i.errors;
  if (a != null) {
    let c = s.findIndex(
      (d) => d.route.id && (a == null ? void 0 : a[d.route.id]) !== void 0,
    );
    (c >= 0 || Vt(!1), (s = s.slice(0, Math.min(s.length, c + 1))));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < s.length; c++) {
      let d = s[c];
      if (
        ((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = c),
        d.route.id)
      ) {
        let { loaderData: f, errors: h } = n,
          v =
            d.route.loader &&
            f[d.route.id] === void 0 &&
            (!h || h[d.route.id] === void 0);
        if (d.route.lazy || v) {
          ((l = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]));
          break;
        }
      }
    }
  return s.reduceRight((c, d, f) => {
    let h,
      v = !1,
      y = null,
      _ = null;
    n &&
      ((h = a && d.route.id ? a[d.route.id] : void 0),
      (y = d.route.errorElement || Ox),
      l &&
        (u < 0 && f === 0
          ? ($x("route-fallback", !1), (v = !0), (_ = null))
          : u === f &&
            ((v = !0), (_ = d.route.hydrateFallbackElement || null))));
    let g = t.concat(s.slice(0, f + 1)),
      m = () => {
        let p;
        return (
          h
            ? (p = y)
            : v
              ? (p = _)
              : d.route.Component
                ? (p = x.createElement(d.route.Component, null))
                : d.route.element
                  ? (p = d.route.element)
                  : (p = c),
          x.createElement(bx, {
            match: d,
            routeContext: { outlet: c, matches: g, isDataRoute: n != null },
            children: p,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || f === 0)
      ? x.createElement(Ix, {
          location: n.location,
          revalidation: n.revalidation,
          component: y,
          error: h,
          children: m(),
          routeContext: { outlet: null, matches: g, isDataRoute: !0 },
        })
      : m();
  }, null);
}
var qd = (function (e) {
  return (
    (e.UseBlocker = "useBlocker"),
    (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator"),
    (e.UseNavigateStable = "useNavigate"),
    (e.UseRouteId = "useRouteId"),
    e
  );
})(qd || {});
function Dx(e) {
  let t = x.useContext(Cx);
  return (t || Vt(!1), t);
}
function Mx(e) {
  let t = x.useContext(xu);
  return (t || Vt(!1), t);
}
function zx(e) {
  let t = Mx(),
    n = t.matches[t.matches.length - 1];
  return (n.route.id || Vt(!1), n.route.id);
}
function Vx() {
  var e;
  let t = x.useContext(W_),
    n = Dx(qd.UseRouteError),
    r = zx(qd.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
const ev = {};
function $x(e, t, n) {
  !t && !ev[e] && (ev[e] = !0);
}
function Z_(e, t) {
  (e == null || e.v7_startTransition,
    (e == null ? void 0 : e.v7_relativeSplatPath) === void 0 &&
      (!t || t.v7_relativeSplatPath),
    t &&
      (t.v7_fetcherPersist,
      t.v7_normalizeFormMethod,
      t.v7_partialHydration,
      t.v7_skipActionErrorRevalidation));
}
const Ux = "startTransition",
  tv = ky[Ux];
function Fx(e) {
  let {
      basename: t,
      children: n,
      initialEntries: r,
      initialIndex: i,
      future: o,
    } = e,
    s = x.useRef();
  s.current == null &&
    (s.current = ix({ initialEntries: r, initialIndex: i, v5Compat: !0 }));
  let a = s.current,
    [l, u] = x.useState({ action: a.action, location: a.location }),
    { v7_startTransition: c } = o || {},
    d = x.useCallback(
      (f) => {
        c && tv ? tv(() => u(f)) : u(f);
      },
      [u, c],
    );
  return (
    x.useLayoutEffect(() => a.listen(d), [a, d]),
    x.useEffect(() => Z_(o), [o]),
    x.createElement(G_, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: a,
      future: o,
    })
  );
}
function H_(e) {
  Vt(!1);
}
function G_(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: i = Wt.Pop,
    navigator: o,
    static: s = !1,
    future: a,
  } = e;
  $h() && Vt(!1);
  let l = t.replace(/^\/*/, "/"),
    u = x.useMemo(
      () => ({
        basename: l,
        navigator: o,
        static: s,
        future: Ml({ v7_relativeSplatPath: !1 }, a),
      }),
      [l, a, o, s],
    );
  typeof r == "string" && (r = na(r));
  let {
      pathname: c = "/",
      search: d = "",
      hash: f = "",
      state: h = null,
      key: v = "default",
    } = r,
    y = x.useMemo(() => {
      let _ = F_(c, l);
      return _ == null
        ? null
        : {
            location: { pathname: _, search: d, hash: f, state: h, key: v },
            navigationType: i,
          };
    }, [l, c, d, f, h, v, i]);
  return y == null
    ? null
    : x.createElement(
        B_.Provider,
        { value: u },
        x.createElement(ra.Provider, { children: n, value: y }),
      );
}
function jx(e) {
  let { children: t, location: n } = e;
  return Ax(Xd(t), n);
}
new Promise(() => {});
function Xd(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    x.Children.forEach(e, (r, i) => {
      if (!x.isValidElement(r)) return;
      let o = [...t, i];
      if (r.type === x.Fragment) {
        n.push.apply(n, Xd(r.props.children, o));
        return;
      }
      (r.type !== H_ && Vt(!1), !r.props.index || !r.props.children || Vt(!1));
      let s = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      (r.props.children && (s.children = Xd(r.props.children, o)), n.push(s));
    }),
    n
  );
}
/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const Bx = "6";
try {
  window.__reactRouterVersion = Bx;
} catch {}
const Wx = "startTransition",
  nv = ky[Wx];
function Zx(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = x.useRef();
  o.current == null && (o.current = ox({ window: i, v5Compat: !0 }));
  let s = o.current,
    [a, l] = x.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    c = x.useCallback(
      (d) => {
        u && nv ? nv(() => l(d)) : l(d);
      },
      [l, u],
    );
  return (
    x.useLayoutEffect(() => s.listen(c), [s, c]),
    x.useEffect(() => Z_(r), [r]),
    x.createElement(G_, {
      basename: t,
      children: n,
      location: a.location,
      navigationType: a.action,
      navigator: s,
      future: r,
    })
  );
}
var rv;
(function (e) {
  ((e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState"));
})(rv || (rv = {}));
var iv;
(function (e) {
  ((e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration"));
})(iv || (iv = {}));
var zn = { FORWARD: "forward", BACKWARD: "backward" },
  ov = 400,
  sv = 200,
  Fh = P.createContext(void 0),
  Hx = function (t) {
    var n = x.useState(!0),
      r = n[0],
      i = n[1],
      o = x.useState(zn.FORWARD),
      s = o[0],
      a = o[1],
      l = x.useRef({}),
      u = t.children,
      c = t.memoryRouter,
      d = window.BASE_PATH || "",
      f = new URLSearchParams(window.location.search);
    (f.get("env"), (d = "/zapps/" + window.APP_ID));
    var h = x.useCallback(
        function (m) {
          var p = m.animate,
            S = p === void 0 ? !0 : p,
            T = m.direction,
            N = T === void 0 ? zn.FORWARD : T;
          i(!!S);
          var C = [zn.FORWARD, zn.BACKWARD].some(function (A) {
            return A === N;
          })
            ? N
            : zn.FORWARD;
          a(C);
        },
        [i, a],
      ),
      v = function (p, S) {
        l.current[p] = S;
      },
      y = x.useMemo(
        function () {
          return {
            setAnimate: h,
            animate: r,
            direction: s,
            pageScrollPosition: l.current,
            updatePosition: v,
          };
        },
        [r, s, h],
      ),
      _ = c ? Fx : Zx,
      g = c ? { initialEntries: [d] } : {};
    return P.createElement(
      Fh.Provider,
      { value: y },
      P.createElement(_, Gt({ basename: d }, g), u),
    );
  };
const Gx = Hx;
var Kx = [
    "className",
    "id",
    "style",
    "children",
    "resetScroll",
    "hideScrollbar",
    "restoreScroll",
    "restoreScrollOnBack",
    "name",
  ],
  Qx = P.forwardRef(function (e, t) {
    var n,
      r = x.useContext(Fh),
      i = e.className,
      o = e.id,
      s = e.style,
      a = e.children,
      l = e.resetScroll,
      u = l === void 0 ? !0 : l,
      c = e.hideScrollbar,
      d = c === void 0 ? !1 : c,
      f = e.restoreScroll,
      h = e.restoreScrollOnBack,
      v = e.name,
      y = an(e, Kx),
      _ = x.useRef();
    if (!r && (f || h))
      throw new Error(
        "To use Scroll Restoration feature, Page must be contained with ZMPRouter.",
      );
    var g = Uh(),
      m = function () {
        return h ? g.key : v || g.pathname;
      },
      p = ln("page"),
      S = x.useRef();
    x.useImperativeHandle(t, function () {
      return S.current;
    });
    var T = St(p, ((n = {}), (n[p + "-hide-scrollbar"] = d), n), i),
      N = m(),
      C = function () {
        r &&
          (clearTimeout(_.current),
          (_.current = setTimeout(function () {
            var b,
              ee = r.updatePosition;
            ee(N, ((b = S.current) == null ? void 0 : b.scrollTop) || 0);
          }, 150)));
      },
      A = x.useCallback(
        function () {
          if (r) {
            var I = r.pageScrollPosition;
            if ((I[N] !== void 0 && h) || f) {
              var b;
              S.current.scrollTo(
                0,
                (b = I == null ? void 0 : I[N]) != null ? b : 0,
              );
            }
          }
        },
        [f, h, r, N],
      );
    return (
      x.useLayoutEffect(
        function () {
          var I = S.current;
          return (
            I &&
              r &&
              (f || h) &&
              (A(), I == null || I.addEventListener("scroll", C)),
            u && !f && !h && I.scrollTo(0, 0),
            function () {
              I &&
                r &&
                (f || h) &&
                (I == null || I.removeEventListener("scroll", C));
            }
          );
        },
        [S, u, f, h],
      ),
      P.createElement(
        "div",
        Gt({}, y, { className: T, id: o, style: s, ref: S }),
        a,
      )
    );
  });
const Yx = Qx;
var Jx = function () {
    return (
      [
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod",
      ].includes(navigator.platform) ||
      (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    );
  },
  qx = ["element"];
function av(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function La(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? av(Object(n), !0).forEach(function (r) {
          ta(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : av(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
var Xx = function (t) {
  var n,
    r = Nx(),
    i = x.useRef(zn.FORWARD),
    o = t.children,
    s = x.useContext(Fh),
    a = s || {},
    l = a.animate,
    u = a.setAnimate,
    c = a.direction,
    d = Uh(),
    f = d.pathname,
    h = x.useRef(null),
    v = x.useRef(null),
    y = x.useRef({}),
    _ = ln("routes"),
    g = function (b) {
      if (!b) return "";
      var ee = b.charAt(0) !== "/" ? "/" + b : b;
      return (
        ee.lastIndexOf("/") > 0 && (ee = ee.substring(0, ee.length - 1)),
        ee
      );
    },
    m = x.useCallback(function (I) {
      var b = g(I);
      return b
        ? (y.current[String(b)] || (y.current[String(b)] = x.createRef()),
          y.current[String(b)])
        : null;
    }, []),
    p = x.useMemo(
      function () {
        return x.Children.map(o, function (I) {
          if (P.isValidElement(I)) {
            var b = I.props,
              ee = b.element,
              ge = an(b, qx);
            return !ee || ee.props.replace === !0
              ? I
              : La(
                  La({}, I),
                  {},
                  { props: La(La({}, ge), {}, { element: ee }) },
                );
          }
          return I;
        });
      },
      [o],
    ),
    S = function (b) {
      ((h.current = b.touches[0].clientX), (v.current = b.touches[0].clientY));
    },
    T = function (b) {
      if (h.current !== null && v.current !== null) {
        var ee = b.touches[0].clientX,
          ge = b.touches[0].clientY,
          Y = h.current - ee,
          q = v.current - ge;
        (h.current <= 24 &&
          Math.abs(Y) > Math.abs(q) &&
          Y <= 0 &&
          l &&
          (b.preventDefault(),
          u == null || u({ animate: !1 }),
          b.preventDefault()),
          (h.current = null),
          (v.current = null));
      }
    };
  (x.useEffect(function () {
    var I = Jx();
    return (
      I &&
        (document.addEventListener("touchstart", S, { passive: !1 }),
        document.addEventListener("touchmove", T, { passive: !1 })),
      function () {
        I &&
          (document.removeEventListener("touchstart", S),
          document.removeEventListener("touchmove", T));
      }
    );
  }, []),
    l && (i.current = r === Wt.Pop ? zn.BACKWARD : c || zn.FORWARD));
  var N = St(
      ((n = {}),
      (n[_ + "-" + i.current] = l),
      (n[_ + "-no-animation"] = !l),
      n),
    ),
    C = St(_, {}),
    A = x.useMemo(
      function () {
        return m(f);
      },
      [f, m],
    );
  return P.createElement(
    rx,
    {
      className: C,
      childFactory: function (b) {
        return x.cloneElement(b, { classNames: N, timeout: l ? ov : sv });
      },
    },
    P.createElement(
      V_,
      {
        key: f,
        timeout: l ? ov : sv,
        onExited: function () {
          u == null || u({ animate: !0, direction: zn.FORWARD });
        },
        nodeRef: A,
        unmountOnExit: !0,
      },
      P.createElement(
        "div",
        { ref: A, className: _ + "-item" },
        P.createElement(jx, { location: d }, p),
      ),
    ),
  );
};
const eC = Xx;
var tC = ["className", "children", "style", "bold", "size"],
  nC = function (t) {
    var n,
      r = t.className,
      i = t.children,
      o = t.style,
      s = t.bold,
      a = t.size,
      l = an(t, tC),
      u = ln("text"),
      c = St(u, ((n = {}), (n[u + "-bold"] = s), (n[u + "-" + a] = a), n), r);
    return P.createElement("span", Gt({}, l, { className: c, style: o }), i);
  };
const rC = nC;
var iC = ["className", "children", "style", "size"],
  K_ = function (t) {
    var n,
      r = t.className,
      i = t.children,
      o = t.style,
      s = t.size,
      a = an(t, iC),
      l = ln("text-title"),
      u = St(l, ((n = {}), (n[l + "-" + s] = s), n), r);
    return P.createElement("span", Gt({}, a, { className: u, style: o }), i);
  };
K_.displayName = "Text.Title";
const oC = K_;
var sC = ["className", "children", "style", "size"],
  Q_ = function (t) {
    var n,
      r = t.className,
      i = t.children,
      o = t.style,
      s = t.size,
      a = an(t, sC),
      l = ln("text-header"),
      u = St(l, ((n = {}), (n[l + "-" + s] = s), n), r);
    return P.createElement("span", Gt({}, a, { className: u, style: o }), i);
  };
Q_.displayName = "Text.Header";
const aC = Q_;
var jh = rC;
jh.Title = oC;
jh.Header = aC;
const dt = jh;
var Ti = (function (e) {
    return (
      (e.textAlign = "textAlign"),
      (e.verticalAlign = "verticalAlign"),
      (e.justifyContent = "justifyContent"),
      (e.alignItems = "alignItems"),
      (e.alignContent = "alignContent"),
      (e.flexDirection = "flexDirection"),
      e
    );
  })({}),
  lv = {
    textAlign: ["left", "right", "center", "justify", "initial", "inherit"],
    verticalAlign: [
      "baseline",
      "sub",
      "super",
      "top",
      "text-top",
      "middle",
      "bottom",
      "text-bottom",
      "initial",
      "inherit",
    ],
    justifyContent: [
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
      "space-evenly",
      "initial",
    ],
    alignItems: [
      "flex-start",
      "flex-end",
      "stretch",
      "baseline",
      "center",
      "initial",
    ],
    alignContent: [
      "stretch",
      "center",
      "flex-start",
      "flex-end",
      "space-between",
      "space-around",
      "space-evenly",
    ],
    flexDirection: ["row", "column", "row-reverse", "column-reverse"],
  },
  Ri = function (t, n) {
    return !t || !n || !lv[n]
      ? !1
      : lv[n].find(function (r) {
          return r === t;
        });
  },
  Ot = function (t) {
    return !Number.isNaN(t) && t >= 0 && t <= 10;
  },
  lC = [
    "id",
    "children",
    "className",
    "style",
    "m",
    "p",
    "mt",
    "ml",
    "mb",
    "mr",
    "mx",
    "my",
    "pt",
    "pl",
    "pb",
    "pr",
    "px",
    "py",
    "noSpace",
    "inline",
    "width",
    "height",
    "verticalAlign",
    "textAlign",
    "flex",
    "flexDirection",
    "flexWrap",
    "justifyContent",
    "alignItems",
    "alignContent",
  ];
function uv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function uC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? uv(Object(n), !0).forEach(function (r) {
          ta(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : uv(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
var cC = P.forwardRef(function (e, t) {
  var n,
    r = e.id,
    i = e.children,
    o = e.className,
    s = e.style,
    a = e.m,
    l = a === void 0 ? -1 : a,
    u = e.p,
    c = u === void 0 ? -1 : u,
    d = e.mt,
    f = d === void 0 ? -1 : d,
    h = e.ml,
    v = h === void 0 ? -1 : h,
    y = e.mb,
    _ = y === void 0 ? -1 : y,
    g = e.mr,
    m = g === void 0 ? -1 : g,
    p = e.mx,
    S = p === void 0 ? -1 : p,
    T = e.my,
    N = T === void 0 ? -1 : T,
    C = e.pt,
    A = C === void 0 ? -1 : C,
    I = e.pl,
    b = I === void 0 ? -1 : I,
    ee = e.pb,
    ge = ee === void 0 ? -1 : ee,
    Y = e.pr,
    q = Y === void 0 ? -1 : Y,
    Ae = e.px,
    fe = Ae === void 0 ? -1 : Ae,
    Ee = e.py,
    M = Ee === void 0 ? -1 : Ee,
    K = e.noSpace,
    X = e.inline,
    J = e.width,
    w = e.height,
    k = e.verticalAlign,
    O = k === void 0 ? "" : k,
    B = e.textAlign,
    z = B === void 0 ? "" : B,
    te = e.flex,
    ue = e.flexDirection,
    G = ue === void 0 ? "" : ue,
    _e = e.flexWrap,
    xe = e.justifyContent,
    we = xe === void 0 ? "" : xe,
    Ne = e.alignItems,
    Ze = Ne === void 0 ? "" : Ne,
    et = e.alignContent,
    nt = et === void 0 ? "" : et,
    rt = an(e, lC),
    Te = ln("box"),
    Ro = St(
      Te,
      ((n = {}),
      (n[Te + "-no-space"] = K),
      (n[Te + "-inline"] = X),
      (n[Te + "-m-" + l] = Ot(l)),
      (n[Te + "-mt-" + f] = Ot(f)),
      (n[Te + "-ml-" + v] = Ot(v)),
      (n[Te + "-mb-" + _] = Ot(_)),
      (n[Te + "-mr-" + m] = Ot(m)),
      (n[Te + "-mx-" + S] = Ot(S)),
      (n[Te + "-my-" + N] = Ot(N)),
      (n[Te + "-p-" + c] = Ot(c)),
      (n[Te + "-pt-" + A] = Ot(A)),
      (n[Te + "-pl-" + b] = Ot(b)),
      (n[Te + "-pb-" + ge] = Ot(ge)),
      (n[Te + "-pr-" + q] = Ot(q)),
      (n[Te + "-px-" + fe] = Ot(fe)),
      (n[Te + "-py-" + M] = Ot(M)),
      (n[Te + "-flex"] = te),
      (n[Te + "-flex-" + G] = Ri(G, Ti.flexDirection)),
      (n[Te + "-vertical-align-" + O] = Ri(O, Ti.verticalAlign)),
      (n[Te + "-text-align-" + z] = Ri(z, Ti.textAlign)),
      (n[Te + "-flex-wrap"] = _e === !0),
      (n[Te + "-flex-nowrap"] = _e === !1),
      (n[Te + "-justify-" + we] = Ri(we, Ti.justifyContent)),
      (n[Te + "-align-items-" + Ze] = Ri(Ze, Ti.alignItems)),
      (n[Te + "-align-content-" + nt] = Ri(nt, Ti.alignContent)),
      n),
      o,
    ),
    bn = uC({}, s || {});
  return (
    J && (bn.width = J),
    w && (bn.height = w),
    P.createElement(
      "div",
      Gt({}, rt, { ref: t, id: r, style: bn, className: Ro }),
      i,
    )
  );
});
const Oe = cC;
var dC = function (t, n) {
  return t <= 0 || n <= 0
    ? 0
    : t > n
      ? 100
      : Math.round((t / n) * 100 * 100) / 100;
};
function cv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function fC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? cv(Object(n), !0).forEach(function (r) {
          ta(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : cv(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
var hC = P.forwardRef(function (e, t) {
  var n,
    r = e.className,
    i = e.maxCompleted,
    o = i === void 0 ? 100 : i,
    s = e.completed,
    a = s === void 0 ? 0 : s,
    l = e.strokeWidth,
    u = e.strokeColor,
    c = e.trailColor,
    d = c === void 0 ? null : c,
    f = e.formatLabel,
    h = e.showLabel,
    v = ln("progress"),
    y = {},
    _ = {};
  (typeof u == "string" && (y = { background: u }),
    typeof d == "string" && (_ = { background: d }));
  var g = dC(a, o),
    m = fC({ width: g + "%" }, y);
  l && (_.height = l + "px");
  var p = null;
  h && (p = f ? f(a, o) : g + "%");
  var S = St(v, ((n = {}), (n[v + "-show-label"] = h), n), r);
  return P.createElement(
    "div",
    { ref: t, className: S },
    P.createElement(
      "div",
      { className: v + "-outer" },
      P.createElement(
        "div",
        { className: v + "-inner", style: _ },
        P.createElement("div", { className: v + "-completed", style: m }),
      ),
    ),
    P.createElement("span", { className: v + "-label" }, p),
  );
});
const pC = hC;
var zl = (function (e) {
    return ((e.top = "top"), (e.bottom = "bottom"), e);
  })({}),
  Ue = (function (e) {
    return (
      (e.default = "default"),
      (e.success = "success"),
      (e.info = "info"),
      (e.error = "error"),
      (e.warning = "warning"),
      (e.loading = "loading"),
      (e.download = "download"),
      (e.countdown = "countdown"),
      (e["wifi-connected"] = "wifi-connected"),
      (e["wifi-disconnected"] = "wifi-disconnected"),
      e
    );
  })({}),
  mC = x.createContext(null);
const Y_ = mC;
var dv = 2e3,
  ef = zl.bottom,
  vC = 250,
  Bh = 5e3,
  gC = 2,
  wn = 12,
  yC = function () {
    return P.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "100%",
        height: "100%",
        viewBox: "0 0 24 24",
        fill: "none",
      },
      P.createElement("path", {
        d: "M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM2.49 12C2.49 17.2522 6.74777 21.51 12 21.51C17.2522 21.51 21.51 17.2522 21.51 12C21.51 6.74777 17.2522 2.49 12 2.49C6.74777 2.49 2.49 6.74777 2.49 12Z",
        fill: "#FFFFFF",
        fillOpacity: "1",
      }),
      P.createElement("path", {
        d: "M15.6784 1.89361C15.9136 1.24748 16.6317 0.908557 17.25 1.20938C18.2892 1.71497 19.2519 2.369 20.1071 3.15267C21.2689 4.21731 22.2097 5.50037 22.8757 6.92858C23.5417 8.3568 23.9198 9.90221 23.9886 11.4766C24.0392 12.6355 23.9214 13.7933 23.6407 14.9143C23.4737 15.5814 22.7525 15.9136 22.1064 15.6784C21.4603 15.4433 21.1358 14.7295 21.2846 14.0582C21.4641 13.2486 21.5373 12.4172 21.5009 11.5852C21.4465 10.3375 21.1468 9.11276 20.619 7.9809C20.0912 6.84904 19.3456 5.83222 18.4249 4.98849C17.8108 4.42584 17.1269 3.94752 16.3914 3.5646C15.7815 3.24709 15.4433 2.53973 15.6784 1.89361Z",
        fill: "#52A0FF",
      }),
    );
  };
const _C = yC;
var SC = function () {
    return P.createElement(Lr, { icon: "zi-wifi" });
  },
  EC = function () {
    return P.createElement(Lr, { icon: "zi-wifi-off" });
  },
  wC = function () {
    return P.createElement(Lr, { icon: "zi-download-solid" });
  },
  TC = function () {
    return P.createElement(Lr, { icon: "zi-close-circle-solid" });
  },
  RC = function () {
    return P.createElement(Lr, { icon: "zi-warning-solid" });
  },
  xC = function () {
    return P.createElement(Lr, { icon: "zi-info-circle-solid" });
  },
  CC = function () {
    return P.createElement(Lr, { icon: "zi-check-circle-solid" });
  },
  NC = function (t) {
    switch (t) {
      case Ue.download:
        return P.createElement(wC, null);
      case Ue.error:
        return P.createElement(TC, null);
      case Ue.warning:
        return P.createElement(RC, null);
      case Ue.success:
        return P.createElement(CC, null);
      case Ue["wifi-connected"]:
        return P.createElement(SC, null);
      case Ue["wifi-disconnected"]:
        return P.createElement(EC, null);
      case Ue.loading:
        return P.createElement(_C, null);
      default:
        return P.createElement(xC, null);
    }
  };
const AC = NC;
var PC = function (t) {
  var n = t.duration,
    r = n === void 0 ? Bh : n,
    i = ln("snackbar-countdown"),
    o = r / 1e3,
    s = x.useState(o),
    a = s[0],
    l = s[1],
    u = gC,
    c = wn - u / 2,
    d = wn * 2,
    f = wn * 2,
    h = "0 0 " + d + " " + f,
    v = c * Math.PI * 2,
    y = (a / o) * 100,
    _ = v - (v * y) / 100;
  return (
    x.useEffect(
      function () {
        var g = setInterval(function () {
          a > 0
            ? l(function (m) {
                return m - 1;
              })
            : clearInterval(g);
        }, 1e3);
        return function () {
          return clearInterval(g);
        };
      },
      [a],
    ),
    P.createElement(
      "div",
      { className: i },
      P.createElement(
        "svg",
        { className: i + "-circle", width: wn * 2, height: wn * 2, viewBox: h },
        P.createElement("circle", {
          className: i + "-background",
          cx: wn,
          cy: wn,
          r: c,
          strokeWidth: u + "px",
        }),
        P.createElement("circle", {
          className: i + "-progress",
          cx: wn,
          cy: wn,
          r: c,
          strokeWidth: u + "px",
          style: { strokeDasharray: v, strokeDashoffset: _ },
          transform: "rotate(-90)",
        }),
        P.createElement(
          "text",
          {
            className: i + "-counter",
            x: wn,
            y: c,
            dy: ".4em",
            textAnchor: "middle",
          },
          a,
        ),
      ),
    )
  );
};
const kC = PC;
function fv(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    (t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r));
  }
  return n;
}
function OC(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? fv(Object(n), !0).forEach(function (r) {
          ta(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : fv(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
var IC = P.forwardRef(function (e, t) {
  var n,
    r,
    i = e.text,
    o = e.prefixIcon,
    s = e.action,
    a = e.icon,
    l = e.verticalAction,
    u = e.style,
    c = e.className,
    d = e.type,
    f = e.position,
    h = e.downloadProgress,
    v = h === void 0 ? 0 : h,
    y = e.duration,
    _ = e.zIndex,
    g = x.useContext(Y_),
    m = Object.values(zl).includes(f) ? f : ef,
    p = ln("snackbar"),
    S;
  (d !== Ue.default && d !== Ue.countdown && (S = AC(d)),
    d === Ue.countdown && (S = P.createElement(kC, { duration: y || Bh })));
  var T = !a && !S && !o && !s,
    N = St(
      p,
      c,
      ((n = {}),
      (n[p + "-vertical-action"] = l),
      (n[p + "-" + m] = m),
      (n[p + "-text-only"] = T),
      n),
    ),
    C =
      o ||
      S ||
      (a ? P.createElement(Lr, { icon: "zi-info-circle-solid" }) : null),
    A =
      d === Ue.download
        ? P.createElement(pC, {
            className: p + "-progress",
            maxCompleted: 100,
            completed: v,
          })
        : null,
    I = function (Y) {
      (Y.preventDefault(),
        s && s.close && g && (g.closeSnackbar == null || g.closeSnackbar()),
        s == null || s.onClick == null || s.onClick(Y));
    },
    b = St(
      p + "-prefix-icon",
      ((r = {}),
      (r[p + "-success"] = d === Ue.success),
      (r[p + "-error"] = d === Ue.error),
      (r[p + "-warning"] = d === Ue.warning),
      (r[p + "-info"] = d === Ue.info),
      (r[p + "-download"] = d === Ue.download),
      (r[p + "-success"] = d === Ue.success),
      (r[p + "-wifi-connected"] = d === Ue["wifi-connected"]),
      (r[p + "-wifi-disconnected"] = d === Ue["wifi-disconnected"]),
      (r[p + "-loading"] = d === Ue.loading),
      r),
    ),
    ee = {};
  return (
    u && (ee = OC({}, u)),
    _ && (ee.zIndex = _),
    P.createElement(
      "div",
      { className: N, ref: t, style: ee },
      P.createElement(
        "div",
        { className: p + "-content" },
        P.createElement(
          "div",
          { className: p + "-desc-wrapper" },
          C && P.createElement("div", { className: b }, C),
          i && P.createElement("div", { className: p + "-desc" }, i),
        ),
        A,
      ),
      s &&
        P.createElement(
          "div",
          { role: "presentation", className: p + "-action", onClick: I },
          s.text,
        ),
    )
  );
});
const bC = IC;
var LC = P.forwardRef(function (e, t) {
  var n,
    r,
    i,
    o,
    s = x.useState(!1),
    a = s[0],
    l = s[1],
    u = x.useState(!1),
    c = u[0],
    d = u[1],
    f = x.useState(null),
    h = f[0],
    v = f[1],
    y = x.useState(""),
    _ = y[0],
    g = y[1],
    m = x.useState(!1),
    p = m[0],
    S = m[1],
    T = x.useState(null),
    N = T[0],
    C = T[1],
    A = x.useState(Ue.default),
    I = A[0],
    b = A[1],
    ee = x.useState(zl.bottom),
    ge = ee[0],
    Y = ee[1],
    q = x.useState(I === Ue.countdown ? Bh : dv),
    Ae = q[0],
    fe = q[1],
    Ee = x.useRef(),
    M = x.useState(),
    K = M[0],
    X = M[1],
    J = x.useState(),
    w = J[0],
    k = J[1],
    O = x.useState(!1),
    B = O[0],
    z = O[1],
    te = x.useState(0),
    ue = te[0],
    G = te[1];
  x.useImperativeHandle(t, function () {
    return Ee.current;
  });
  var _e = x.useCallback(function (ke) {
      var _i = ke.type,
        nc = ke.position;
      (g((ke == null ? void 0 : ke.text) || ""),
        S(!!(ke != null && ke.icon)),
        C(ke == null ? void 0 : ke.prefixIcon),
        b(_i || Ue.default),
        fe((ke == null ? void 0 : ke.duration) || dv),
        Y(nc || ef),
        k(ke == null ? void 0 : ke.action),
        z(!!(ke != null && ke.verticalAction)),
        X(function () {
          return ke == null ? void 0 : ke.onClose;
        }),
        G(0));
    }, []),
    xe = x.useCallback(
      function (ke) {
        a === !0
          ? (l(!1),
            setTimeout(function () {
              (_e(ke), l(!0));
            }, vC))
          : (_e(ke), l(!0));
      },
      [a, _e],
    ),
    we = x.useCallback(function () {
      l(!1);
    }, []),
    Ne = x.useCallback(function (ke) {
      G(ke);
    }, []),
    Ze = Object.values(zl).includes(ge) ? ge : ef,
    et = ln("snackbar"),
    nt = x.useMemo(
      function () {
        return { openSnackbar: xe, closeSnackbar: we, setDownloadProgress: Ne };
      },
      [xe, we, Ne],
    ),
    rt = e.children,
    Te = e.className,
    Ro = e.style,
    bn = e.zIndex;
  return P.createElement(
    Y_.Provider,
    { value: nt },
    rt,
    P.createElement(
      V_,
      {
        in: a,
        timeout: { enter: 100, exit: 100, appear: 100 },
        mountOnEnter: !0,
        unmountOnExit: !0,
        onEntered: function () {
          return d(!0);
        },
        onExited: function () {
          return d(!1);
        },
        onEnter: function () {
          clearTimeout(h);
          var _i = I === Ue.countdown ? Ae + 1e3 : Ae;
          v(
            setTimeout(function () {
              l(!1);
            }, _i),
          );
        },
        onExit: function () {
          K == null || K();
        },
        classNames: {
          enter: St(
            et + "-enter",
            ((n = {}), (n[et + "-enter-" + Ze] = Ze), n),
          ),
          enterActive: St(
            et + "-enter-active",
            ((r = {}), (r[et + "-enter-active-" + Ze] = Ze), r),
          ),
          exitActive: St(
            et + "-exit-active",
            ((i = {}), (i[et + "-exit-active-" + Ze] = Ze), i),
          ),
        },
        nodeRef: Ee,
      },
      P.createElement(bC, {
        ref: Ee,
        position: ge,
        text: _,
        action: w,
        icon: p,
        type: I,
        prefixIcon: N,
        duration: Ae,
        style: Ro,
        className: St(
          et,
          Te,
          ((o = {}), (o[et + "-" + Ze + "-visible"] = c), o),
        ),
        verticalAction: B,
        downloadProgress: ue,
        zIndex: bn,
      }),
    ),
  );
});
const DC = LC;
function MC(e) {
  const t = new Error(e);
  if (t.stack === void 0)
    try {
      throw t;
    } catch {}
  return t;
}
var zC = MC,
  pe = zC;
function VC(e) {
  return !!e && typeof e.then == "function";
}
var Me = VC;
function $C(e, t) {
  if (e != null) return e;
  throw pe(t ?? "Got unexpected null or undefined");
}
var We = $C;
function de(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
class Cu {
  getValue() {
    throw pe("BaseLoadable");
  }
  toPromise() {
    throw pe("BaseLoadable");
  }
  valueMaybe() {
    throw pe("BaseLoadable");
  }
  valueOrThrow() {
    throw pe(`Loadable expected value, but in "${this.state}" state`);
  }
  promiseMaybe() {
    throw pe("BaseLoadable");
  }
  promiseOrThrow() {
    throw pe(`Loadable expected promise, but in "${this.state}" state`);
  }
  errorMaybe() {
    throw pe("BaseLoadable");
  }
  errorOrThrow() {
    throw pe(`Loadable expected error, but in "${this.state}" state`);
  }
  is(t) {
    return t.state === this.state && t.contents === this.contents;
  }
  map(t) {
    throw pe("BaseLoadable");
  }
}
class UC extends Cu {
  constructor(t) {
    (super(),
      de(this, "state", "hasValue"),
      de(this, "contents", void 0),
      (this.contents = t));
  }
  getValue() {
    return this.contents;
  }
  toPromise() {
    return Promise.resolve(this.contents);
  }
  valueMaybe() {
    return this.contents;
  }
  valueOrThrow() {
    return this.contents;
  }
  promiseMaybe() {}
  errorMaybe() {}
  map(t) {
    try {
      const n = t(this.contents);
      return Me(n) ? ai(n) : ao(n) ? n : ia(n);
    } catch (n) {
      return Me(n) ? ai(n.next(() => this.map(t))) : Nu(n);
    }
  }
}
class FC extends Cu {
  constructor(t) {
    (super(),
      de(this, "state", "hasError"),
      de(this, "contents", void 0),
      (this.contents = t));
  }
  getValue() {
    throw this.contents;
  }
  toPromise() {
    return Promise.reject(this.contents);
  }
  valueMaybe() {}
  promiseMaybe() {}
  errorMaybe() {
    return this.contents;
  }
  errorOrThrow() {
    return this.contents;
  }
  map(t) {
    return this;
  }
}
class J_ extends Cu {
  constructor(t) {
    (super(),
      de(this, "state", "loading"),
      de(this, "contents", void 0),
      (this.contents = t));
  }
  getValue() {
    throw this.contents;
  }
  toPromise() {
    return this.contents;
  }
  valueMaybe() {}
  promiseMaybe() {
    return this.contents;
  }
  promiseOrThrow() {
    return this.contents;
  }
  errorMaybe() {}
  map(t) {
    return ai(
      this.contents
        .then((n) => {
          const r = t(n);
          if (ao(r)) {
            const i = r;
            switch (i.state) {
              case "hasValue":
                return i.contents;
              case "hasError":
                throw i.contents;
              case "loading":
                return i.contents;
            }
          }
          return r;
        })
        .catch((n) => {
          if (Me(n)) return n.then(() => this.map(t).contents);
          throw n;
        }),
    );
  }
}
function ia(e) {
  return Object.freeze(new UC(e));
}
function Nu(e) {
  return Object.freeze(new FC(e));
}
function ai(e) {
  return Object.freeze(new J_(e));
}
function q_() {
  return Object.freeze(new J_(new Promise(() => {})));
}
function jC(e) {
  return e.every((t) => t.state === "hasValue")
    ? ia(e.map((t) => t.contents))
    : e.some((t) => t.state === "hasError")
      ? Nu(
          We(
            e.find((t) => t.state === "hasError"),
            "Invalid loadable passed to loadableAll",
          ).contents,
        )
      : ai(Promise.all(e.map((t) => t.contents)));
}
function X_(e) {
  const n = (
      Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map((i) => e[i])
    ).map((i) => (ao(i) ? i : Me(i) ? ai(i) : ia(i))),
    r = jC(n);
  return Array.isArray(e)
    ? r
    : r.map((i) =>
        Object.getOwnPropertyNames(e).reduce(
          (o, s, a) => ({ ...o, [s]: i[a] }),
          {},
        ),
      );
}
function ao(e) {
  return e instanceof Cu;
}
const BC = {
  of: (e) => (Me(e) ? ai(e) : ao(e) ? e : ia(e)),
  error: (e) => Nu(e),
  loading: () => q_(),
  all: X_,
  isLoadable: ao,
};
var mi = {
    loadableWithValue: ia,
    loadableWithError: Nu,
    loadableWithPromise: ai,
    loadableLoading: q_,
    loadableAll: X_,
    isLoadable: ao,
    RecoilLoadable: BC,
  },
  WC = mi.loadableWithValue,
  ZC = mi.loadableWithError,
  HC = mi.loadableWithPromise,
  GC = mi.loadableLoading,
  KC = mi.loadableAll,
  QC = mi.isLoadable,
  YC = mi.RecoilLoadable,
  oa = Object.freeze({
    __proto__: null,
    loadableWithValue: WC,
    loadableWithError: ZC,
    loadableWithPromise: HC,
    loadableLoading: GC,
    loadableAll: KC,
    isLoadable: QC,
    RecoilLoadable: YC,
  });
const tf = {
  RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED: !0,
  RECOIL_GKS_ENABLED: new Set([
    "recoil_hamt_2020",
    "recoil_sync_external_store",
    "recoil_suppress_rerender_in_callback",
    "recoil_memory_managament_2020",
  ]),
};
function JC(e, t) {
  var n, r;
  const i =
    (n = process.env[e]) === null ||
    n === void 0 ||
    (r = n.toLowerCase()) === null ||
    r === void 0
      ? void 0
      : r.trim();
  if (i == null || i === "") return;
  if (!["true", "false"].includes(i))
    throw pe(`({}).${e} value must be 'true', 'false', or empty: ${i}`);
  t(i === "true");
}
function qC(e, t) {
  var n;
  const r = (n = process.env[e]) === null || n === void 0 ? void 0 : n.trim();
  r == null || r === "" || t(r.split(/\s*,\s*|\s+/));
}
function XC() {
  var e;
  typeof process > "u" ||
    (((e = process) === null || e === void 0 ? void 0 : e.env) != null &&
      (JC("RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED", (t) => {
        tf.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = t;
      }),
      qC("RECOIL_GKS_ENABLED", (t) => {
        t.forEach((n) => {
          tf.RECOIL_GKS_ENABLED.add(n);
        });
      })));
}
XC();
var Eo = tf;
function Au(e) {
  return Eo.RECOIL_GKS_ENABLED.has(e);
}
Au.setPass = (e) => {
  Eo.RECOIL_GKS_ENABLED.add(e);
};
Au.setFail = (e) => {
  Eo.RECOIL_GKS_ENABLED.delete(e);
};
Au.clear = () => {
  Eo.RECOIL_GKS_ENABLED.clear();
};
var Ie = Au;
function eN(e, t, { error: n } = {}) {
  return null;
}
var tN = eN,
  Wh = tN,
  Ic,
  bc,
  Lc;
const nN =
    (Ic = P.createMutableSource) !== null && Ic !== void 0
      ? Ic
      : P.unstable_createMutableSource,
  e1 =
    (bc = P.useMutableSource) !== null && bc !== void 0
      ? bc
      : P.unstable_useMutableSource,
  t1 =
    (Lc = P.useSyncExternalStore) !== null && Lc !== void 0
      ? Lc
      : P.unstable_useSyncExternalStore;
function rN() {
  var e;
  const { ReactCurrentDispatcher: t, ReactCurrentOwner: n } =
    P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  return (
    ((e = t == null ? void 0 : t.current) !== null && e !== void 0
      ? e
      : n.currentDispatcher
    ).useSyncExternalStore != null
  );
}
function iN() {
  return Ie("recoil_transition_support")
    ? { mode: "TRANSITION_SUPPORT", early: !0, concurrent: !0 }
    : Ie("recoil_sync_external_store") && t1 != null
      ? { mode: "SYNC_EXTERNAL_STORE", early: !0, concurrent: !1 }
      : Ie("recoil_mutable_source") &&
          e1 != null &&
          typeof window < "u" &&
          !window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE
        ? Ie("recoil_suppress_rerender_in_callback")
          ? { mode: "MUTABLE_SOURCE", early: !0, concurrent: !0 }
          : { mode: "MUTABLE_SOURCE", early: !1, concurrent: !1 }
        : Ie("recoil_suppress_rerender_in_callback")
          ? { mode: "LEGACY", early: !0, concurrent: !1 }
          : { mode: "LEGACY", early: !1, concurrent: !1 };
}
function oN() {
  return !1;
}
var sa = {
  createMutableSource: nN,
  useMutableSource: e1,
  useSyncExternalStore: t1,
  currentRendererSupportsUseSyncExternalStore: rN,
  reactMode: iN,
  isFastRefreshEnabled: oN,
};
class Zh {
  constructor(t) {
    (de(this, "key", void 0), (this.key = t));
  }
  toJSON() {
    return { key: this.key };
  }
}
class n1 extends Zh {}
class r1 extends Zh {}
function sN(e) {
  return e instanceof n1 || e instanceof r1;
}
var Pu = {
    AbstractRecoilValue: Zh,
    RecoilState: n1,
    RecoilValueReadOnly: r1,
    isRecoilValue: sN,
  },
  aN = Pu.AbstractRecoilValue,
  lN = Pu.RecoilState,
  uN = Pu.RecoilValueReadOnly,
  cN = Pu.isRecoilValue,
  lo = Object.freeze({
    __proto__: null,
    AbstractRecoilValue: aN,
    RecoilState: lN,
    RecoilValueReadOnly: uN,
    isRecoilValue: cN,
  });
function dN(e, t) {
  return (function* () {
    let n = 0;
    for (const r of e) yield t(r, n++);
  })();
}
var ku = dN;
class i1 {}
const fN = new i1(),
  li = new Map(),
  Hh = new Map();
function hN(e) {
  return ku(e, (t) => We(Hh.get(t)));
}
function pN(e) {
  if (li.has(e)) {
    const t = `Duplicate atom key "${e}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`;
    console.warn(t);
  }
}
function mN(e) {
  (Eo.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED && pN(e.key),
    li.set(e.key, e));
  const t =
    e.set == null
      ? new lo.RecoilValueReadOnly(e.key)
      : new lo.RecoilState(e.key);
  return (Hh.set(e.key, t), t);
}
class o1 extends Error {}
function vN(e) {
  const t = li.get(e);
  if (t == null) throw new o1(`Missing definition for RecoilValue: "${e}""`);
  return t;
}
function gN(e) {
  return li.get(e);
}
const Vl = new Map();
function yN(e) {
  var t;
  if (!Ie("recoil_memory_managament_2020")) return;
  const n = li.get(e);
  if (
    n != null &&
    (t = n.shouldDeleteConfigOnRelease) !== null &&
    t !== void 0 &&
    t.call(n)
  ) {
    var r;
    (li.delete(e), (r = s1(e)) === null || r === void 0 || r(), Vl.delete(e));
  }
}
function _N(e, t) {
  Ie("recoil_memory_managament_2020") &&
    (t === void 0 ? Vl.delete(e) : Vl.set(e, t));
}
function s1(e) {
  return Vl.get(e);
}
var Ut = {
  nodes: li,
  recoilValues: Hh,
  registerNode: mN,
  getNode: vN,
  getNodeMaybe: gN,
  deleteNodeConfigIfPossible: yN,
  setConfigDeletionHandler: _N,
  getConfigDeletionHandler: s1,
  recoilValuesForKeys: hN,
  NodeMissingError: o1,
  DefaultValue: i1,
  DEFAULT_VALUE: fN,
};
function SN(e, t) {
  t();
}
var EN = { enqueueExecution: SN };
function wN(e, t) {
  return ((t = { exports: {} }), e(t, t.exports), t.exports);
}
var TN = wN(function (e) {
  var t =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (R) {
            return typeof R;
          }
        : function (R) {
            return R &&
              typeof Symbol == "function" &&
              R.constructor === Symbol &&
              R !== Symbol.prototype
              ? "symbol"
              : typeof R;
          },
    n = {},
    r = 5,
    i = Math.pow(2, r),
    o = i - 1,
    s = i / 2,
    a = i / 4,
    l = {},
    u = function (E) {
      return function () {
        return E;
      };
    },
    c = (n.hash = function (R) {
      var E = typeof R > "u" ? "undefined" : t(R);
      if (E === "number") return R;
      E !== "string" && (R += "");
      for (var L = 0, $ = 0, U = R.length; $ < U; ++$) {
        var H = R.charCodeAt($);
        L = ((L << 5) - L + H) | 0;
      }
      return L;
    }),
    d = function (E) {
      return (
        (E -= (E >> 1) & 1431655765),
        (E = (E & 858993459) + ((E >> 2) & 858993459)),
        (E = (E + (E >> 4)) & 252645135),
        (E += E >> 8),
        (E += E >> 16),
        E & 127
      );
    },
    f = function (E, L) {
      return (L >>> E) & o;
    },
    h = function (E) {
      return 1 << E;
    },
    v = function (E, L) {
      return d(E & (L - 1));
    },
    y = function (E, L, $, U) {
      var H = U;
      if (!E) {
        var ae = U.length;
        H = new Array(ae);
        for (var ie = 0; ie < ae; ++ie) H[ie] = U[ie];
      }
      return ((H[L] = $), H);
    },
    _ = function (E, L, $) {
      var U = $.length - 1,
        H = 0,
        ae = 0,
        ie = $;
      if (E) H = ae = L;
      else for (ie = new Array(U); H < L; ) ie[ae++] = $[H++];
      for (++H; H <= U; ) ie[ae++] = $[H++];
      return (E && (ie.length = U), ie);
    },
    g = function (E, L, $, U) {
      var H = U.length;
      if (E) {
        for (var ae = H; ae >= L; ) U[ae--] = U[ae];
        return ((U[L] = $), U);
      }
      for (var ie = 0, oe = 0, ve = new Array(H + 1); ie < L; )
        ve[oe++] = U[ie++];
      for (ve[L] = $; ie < H; ) ve[++oe] = U[ie++];
      return ve;
    },
    m = 1,
    p = 2,
    S = 3,
    T = 4,
    N = { __hamt_isEmpty: !0 },
    C = function (E) {
      return E === N || (E && E.__hamt_isEmpty);
    },
    A = function (E, L, $, U) {
      return { type: m, edit: E, hash: L, key: $, value: U, _modify: M };
    },
    I = function (E, L, $) {
      return { type: p, edit: E, hash: L, children: $, _modify: K };
    },
    b = function (E, L, $) {
      return { type: S, edit: E, mask: L, children: $, _modify: X };
    },
    ee = function (E, L, $) {
      return { type: T, edit: E, size: L, children: $, _modify: J };
    },
    ge = function (E) {
      return E === N || E.type === m || E.type === p;
    },
    Y = function (E, L, $, U, H) {
      for (var ae = [], ie = U, oe = 0, ve = 0; ie; ++ve)
        (ie & 1 && (ae[ve] = H[oe++]), (ie >>>= 1));
      return ((ae[L] = $), ee(E, oe + 1, ae));
    },
    q = function (E, L, $, U) {
      for (
        var H = new Array(L - 1), ae = 0, ie = 0, oe = 0, ve = U.length;
        oe < ve;
        ++oe
      )
        if (oe !== $) {
          var $e = U[oe];
          $e && !C($e) && ((H[ae++] = $e), (ie |= 1 << oe));
        }
      return b(E, ie, H);
    },
    Ae = function R(E, L, $, U, H, ae) {
      if ($ === H) return I(E, $, [ae, U]);
      var ie = f(L, $),
        oe = f(L, H);
      return b(
        E,
        h(ie) | h(oe),
        ie === oe ? [R(E, L + r, $, U, H, ae)] : ie < oe ? [U, ae] : [ae, U],
      );
    },
    fe = function (E, L, $, U, H, ae, ie, oe) {
      for (var ve = H.length, $e = 0; $e < ve; ++$e) {
        var kt = H[$e];
        if ($(ie, kt.key)) {
          var ut = kt.value,
            Jt = ae(ut);
          return Jt === ut
            ? H
            : Jt === l
              ? (--oe.value, _(E, $e, H))
              : y(E, $e, A(L, U, ie, Jt), H);
        }
      }
      var un = ae();
      return un === l ? H : (++oe.value, y(E, ve, A(L, U, ie, un), H));
    },
    Ee = function (E, L) {
      return E === L.edit;
    },
    M = function (E, L, $, U, H, ae, ie) {
      if (L(ae, this.key)) {
        var oe = U(this.value);
        return oe === this.value
          ? this
          : oe === l
            ? (--ie.value, N)
            : Ee(E, this)
              ? ((this.value = oe), this)
              : A(E, H, ae, oe);
      }
      var ve = U();
      return ve === l
        ? this
        : (++ie.value, Ae(E, $, this.hash, this, H, A(E, H, ae, ve)));
    },
    K = function (E, L, $, U, H, ae, ie) {
      if (H === this.hash) {
        var oe = Ee(E, this),
          ve = fe(oe, E, L, this.hash, this.children, U, ae, ie);
        return ve === this.children
          ? this
          : ve.length > 1
            ? I(E, this.hash, ve)
            : ve[0];
      }
      var $e = U();
      return $e === l
        ? this
        : (++ie.value, Ae(E, $, this.hash, this, H, A(E, H, ae, $e)));
    },
    X = function (E, L, $, U, H, ae, ie) {
      var oe = this.mask,
        ve = this.children,
        $e = f($, H),
        kt = h($e),
        ut = v(oe, kt),
        Jt = oe & kt,
        un = Jt ? ve[ut] : N,
        Si = un._modify(E, L, $ + r, U, H, ae, ie);
      if (un === Si) return this;
      var va = Ee(E, this),
        xo = oe,
        Co = void 0;
      if (Jt && C(Si)) {
        if (((xo &= ~kt), !xo)) return N;
        if (ve.length <= 2 && ge(ve[ut ^ 1])) return ve[ut ^ 1];
        Co = _(va, ut, ve);
      } else if (!Jt && !C(Si)) {
        if (ve.length >= s) return Y(E, $e, Si, oe, ve);
        ((xo |= kt), (Co = g(va, ut, Si, ve)));
      } else Co = y(va, ut, Si, ve);
      return va ? ((this.mask = xo), (this.children = Co), this) : b(E, xo, Co);
    },
    J = function (E, L, $, U, H, ae, ie) {
      var oe = this.size,
        ve = this.children,
        $e = f($, H),
        kt = ve[$e],
        ut = (kt || N)._modify(E, L, $ + r, U, H, ae, ie);
      if (kt === ut) return this;
      var Jt = Ee(E, this),
        un = void 0;
      if (C(kt) && !C(ut)) (++oe, (un = y(Jt, $e, ut, ve)));
      else if (!C(kt) && C(ut)) {
        if ((--oe, oe <= a)) return q(E, oe, $e, ve);
        un = y(Jt, $e, N, ve);
      } else un = y(Jt, $e, ut, ve);
      return Jt
        ? ((this.size = oe), (this.children = un), this)
        : ee(E, oe, un);
    };
  N._modify = function (R, E, L, $, U, H, ae) {
    var ie = $();
    return ie === l ? N : (++ae.value, A(R, U, H, ie));
  };
  function w(R, E, L, $, U) {
    ((this._editable = R),
      (this._edit = E),
      (this._config = L),
      (this._root = $),
      (this._size = U));
  }
  w.prototype.setTree = function (R, E) {
    return this._editable
      ? ((this._root = R), (this._size = E), this)
      : R === this._root
        ? this
        : new w(this._editable, this._edit, this._config, R, E);
  };
  var k = (n.tryGetHash = function (R, E, L, $) {
    for (var U = $._root, H = 0, ae = $._config.keyEq; ; )
      switch (U.type) {
        case m:
          return ae(L, U.key) ? U.value : R;
        case p: {
          if (E === U.hash)
            for (var ie = U.children, oe = 0, ve = ie.length; oe < ve; ++oe) {
              var $e = ie[oe];
              if (ae(L, $e.key)) return $e.value;
            }
          return R;
        }
        case S: {
          var kt = f(H, E),
            ut = h(kt);
          if (U.mask & ut) {
            ((U = U.children[v(U.mask, ut)]), (H += r));
            break;
          }
          return R;
        }
        case T: {
          if (((U = U.children[f(H, E)]), U)) {
            H += r;
            break;
          }
          return R;
        }
        default:
          return R;
      }
  });
  w.prototype.tryGetHash = function (R, E, L) {
    return k(R, E, L, this);
  };
  var O = (n.tryGet = function (R, E, L) {
    return k(R, L._config.hash(E), E, L);
  });
  w.prototype.tryGet = function (R, E) {
    return O(R, E, this);
  };
  var B = (n.getHash = function (R, E, L) {
    return k(void 0, R, E, L);
  });
  ((w.prototype.getHash = function (R, E) {
    return B(R, E, this);
  }),
    (n.get = function (R, E) {
      return k(void 0, E._config.hash(R), R, E);
    }),
    (w.prototype.get = function (R, E) {
      return O(E, R, this);
    }));
  var z = (n.has = function (R, E, L) {
    return k(l, R, E, L) !== l;
  });
  w.prototype.hasHash = function (R, E) {
    return z(R, E, this);
  };
  var te = (n.has = function (R, E) {
    return z(E._config.hash(R), R, E);
  });
  w.prototype.has = function (R) {
    return te(R, this);
  };
  var ue = function (E, L) {
    return E === L;
  };
  ((n.make = function (R) {
    return new w(
      0,
      0,
      { keyEq: (R && R.keyEq) || ue, hash: (R && R.hash) || c },
      N,
      0,
    );
  }),
    (n.empty = n.make()));
  var G = (n.isEmpty = function (R) {
    return R && !!C(R._root);
  });
  w.prototype.isEmpty = function () {
    return G(this);
  };
  var _e = (n.modifyHash = function (R, E, L, $) {
    var U = { value: $._size },
      H = $._root._modify(
        $._editable ? $._edit : NaN,
        $._config.keyEq,
        0,
        R,
        E,
        L,
        U,
      );
    return $.setTree(H, U.value);
  });
  w.prototype.modifyHash = function (R, E, L) {
    return _e(L, R, E, this);
  };
  var xe = (n.modify = function (R, E, L) {
    return _e(R, L._config.hash(E), E, L);
  });
  w.prototype.modify = function (R, E) {
    return xe(E, R, this);
  };
  var we = (n.setHash = function (R, E, L, $) {
    return _e(u(L), R, E, $);
  });
  w.prototype.setHash = function (R, E, L) {
    return we(R, E, L, this);
  };
  var Ne = (n.set = function (R, E, L) {
    return we(L._config.hash(R), R, E, L);
  });
  w.prototype.set = function (R, E) {
    return Ne(R, E, this);
  };
  var Ze = u(l),
    et = (n.removeHash = function (R, E, L) {
      return _e(Ze, R, E, L);
    });
  w.prototype.removeHash = w.prototype.deleteHash = function (R, E) {
    return et(R, E, this);
  };
  var nt = (n.remove = function (R, E) {
    return et(E._config.hash(R), R, E);
  });
  w.prototype.remove = w.prototype.delete = function (R) {
    return nt(R, this);
  };
  var rt = (n.beginMutation = function (R) {
    return new w(R._editable + 1, R._edit + 1, R._config, R._root, R._size);
  });
  w.prototype.beginMutation = function () {
    return rt(this);
  };
  var Te = (n.endMutation = function (R) {
    return ((R._editable = R._editable && R._editable - 1), R);
  });
  w.prototype.endMutation = function () {
    return Te(this);
  };
  var Ro = (n.mutate = function (R, E) {
    var L = rt(E);
    return (R(L), Te(L));
  });
  w.prototype.mutate = function (R) {
    return Ro(R, this);
  };
  var bn = function (E) {
      return E && ke(E[0], E[1], E[2], E[3], E[4]);
    },
    ke = function (E, L, $, U, H) {
      for (; $ < E; ) {
        var ae = L[$++];
        if (ae && !C(ae)) return _i(ae, U, [E, L, $, U, H]);
      }
      return bn(H);
    },
    _i = function (E, L, $) {
      switch (E.type) {
        case m:
          return { value: L(E), rest: $ };
        case p:
        case T:
        case S:
          var U = E.children;
          return ke(U.length, U, 0, L, $);
        default:
          return bn($);
      }
    },
    nc = { done: !0 };
  function rc(R) {
    this.v = R;
  }
  ((rc.prototype.next = function () {
    if (!this.v) return nc;
    var R = this.v;
    return ((this.v = bn(R.rest)), R);
  }),
    (rc.prototype[Symbol.iterator] = function () {
      return this;
    }));
  var ic = function (E, L) {
      return new rc(_i(E._root, L));
    },
    JE = function (E) {
      return [E.key, E.value];
    },
    qE = (n.entries = function (R) {
      return ic(R, JE);
    });
  w.prototype.entries = w.prototype[Symbol.iterator] = function () {
    return qE(this);
  };
  var XE = function (E) {
      return E.key;
    },
    ew = (n.keys = function (R) {
      return ic(R, XE);
    });
  w.prototype.keys = function () {
    return ew(this);
  };
  var tw = function (E) {
      return E.value;
    },
    nw =
      (n.values =
      w.prototype.values =
        function (R) {
          return ic(R, tw);
        });
  w.prototype.values = function () {
    return nw(this);
  };
  var Dp = (n.fold = function (R, E, L) {
    var $ = L._root;
    if ($.type === m) return R(E, $.value, $.key);
    for (var U = [$.children], H = void 0; (H = U.pop()); )
      for (var ae = 0, ie = H.length; ae < ie; ) {
        var oe = H[ae++];
        oe &&
          oe.type &&
          (oe.type === m ? (E = R(E, oe.value, oe.key)) : U.push(oe.children));
      }
    return E;
  });
  w.prototype.fold = function (R, E) {
    return Dp(R, E, this);
  };
  var rw = (n.forEach = function (R, E) {
    return Dp(
      function (L, $, U) {
        return R($, U, E);
      },
      null,
      E,
    );
  });
  w.prototype.forEach = function (R) {
    return rw(R, this);
  };
  var iw = (n.count = function (R) {
    return R._size;
  });
  ((w.prototype.count = function () {
    return iw(this);
  }),
    Object.defineProperty(w.prototype, "size", { get: w.prototype.count }),
    e.exports ? (e.exports = n) : ((void 0).hamt = n));
});
class RN {
  constructor(t) {
    (de(this, "_map", void 0),
      (this._map = new Map(t == null ? void 0 : t.entries())));
  }
  keys() {
    return this._map.keys();
  }
  entries() {
    return this._map.entries();
  }
  get(t) {
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
  set(t, n) {
    return (this._map.set(t, n), this);
  }
  delete(t) {
    return (this._map.delete(t), this);
  }
  clone() {
    return Kh(this);
  }
  toMap() {
    return new Map(this._map);
  }
}
class Gh {
  constructor(t) {
    if ((de(this, "_hamt", TN.empty.beginMutation()), t instanceof Gh)) {
      const n = t._hamt.endMutation();
      ((t._hamt = n.beginMutation()), (this._hamt = n.beginMutation()));
    } else if (t) for (const [n, r] of t.entries()) this._hamt.set(n, r);
  }
  keys() {
    return this._hamt.keys();
  }
  entries() {
    return this._hamt.entries();
  }
  get(t) {
    return this._hamt.get(t);
  }
  has(t) {
    return this._hamt.has(t);
  }
  set(t, n) {
    return (this._hamt.set(t, n), this);
  }
  delete(t) {
    return (this._hamt.delete(t), this);
  }
  clone() {
    return Kh(this);
  }
  toMap() {
    return new Map(this._hamt);
  }
}
function Kh(e) {
  return Ie("recoil_hamt_2020") ? new Gh(e) : new RN(e);
}
var xN = { persistentMap: Kh },
  CN = xN.persistentMap,
  NN = Object.freeze({ __proto__: null, persistentMap: CN });
function AN(e, ...t) {
  const n = new Set();
  e: for (const r of e) {
    for (const i of t) if (i.has(r)) continue e;
    n.add(r);
  }
  return n;
}
var ss = AN;
function PN(e, t) {
  const n = new Map();
  return (
    e.forEach((r, i) => {
      n.set(i, t(r, i));
    }),
    n
  );
}
var $l = PN;
function kN() {
  return { nodeDeps: new Map(), nodeToNodeSubscriptions: new Map() };
}
function ON(e) {
  return {
    nodeDeps: $l(e.nodeDeps, (t) => new Set(t)),
    nodeToNodeSubscriptions: $l(e.nodeToNodeSubscriptions, (t) => new Set(t)),
  };
}
function Dc(e, t, n, r) {
  const { nodeDeps: i, nodeToNodeSubscriptions: o } = n,
    s = i.get(e);
  if (s && r && s !== r.nodeDeps.get(e)) return;
  i.set(e, t);
  const a = s == null ? t : ss(t, s);
  for (const l of a) (o.has(l) || o.set(l, new Set()), We(o.get(l)).add(e));
  if (s) {
    const l = ss(s, t);
    for (const u of l) {
      if (!o.has(u)) return;
      const c = We(o.get(u));
      (c.delete(e), c.size === 0 && o.delete(u));
    }
  }
}
function IN(e, t, n, r) {
  var i, o, s, a;
  const l = n.getState();
  r === l.currentTree.version ||
    r === ((i = l.nextTree) === null || i === void 0 ? void 0 : i.version) ||
    (o = l.previousTree) === null ||
    o === void 0 ||
    o.version;
  const u = n.getGraph(r);
  if (
    (Dc(e, t, u),
    r === ((s = l.previousTree) === null || s === void 0 ? void 0 : s.version))
  ) {
    const d = n.getGraph(l.currentTree.version);
    Dc(e, t, d, u);
  }
  if (
    r ===
      ((a = l.previousTree) === null || a === void 0 ? void 0 : a.version) ||
    r === l.currentTree.version
  ) {
    var c;
    const d = (c = l.nextTree) === null || c === void 0 ? void 0 : c.version;
    if (d !== void 0) {
      const f = n.getGraph(d);
      Dc(e, t, f, u);
    }
  }
}
var aa = { cloneGraph: ON, graph: kN, saveDepsToStore: IN };
let bN = 0;
const LN = () => bN++;
let DN = 0;
const MN = () => DN++;
let zN = 0;
const VN = () => zN++;
var Ou = {
  getNextTreeStateVersion: LN,
  getNextStoreID: MN,
  getNextComponentID: VN,
};
const { persistentMap: hv } = NN,
  { graph: $N } = aa,
  { getNextTreeStateVersion: a1 } = Ou;
function l1() {
  const e = a1();
  return {
    version: e,
    stateID: e,
    transactionMetadata: {},
    dirtyAtoms: new Set(),
    atomValues: hv(),
    nonvalidatedAtoms: hv(),
  };
}
function UN() {
  const e = l1();
  return {
    currentTree: e,
    nextTree: null,
    previousTree: null,
    commitDepth: 0,
    knownAtoms: new Set(),
    knownSelectors: new Set(),
    transactionSubscriptions: new Map(),
    nodeTransactionSubscriptions: new Map(),
    nodeToComponentSubscriptions: new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: new Set(),
    graphsByVersion: new Map().set(e.version, $N()),
    retention: {
      referenceCounts: new Map(),
      nodesRetainedByZone: new Map(),
      retainablesToCheckForRelease: new Set(),
    },
    nodeCleanupFunctions: new Map(),
  };
}
var u1 = {
  makeEmptyTreeState: l1,
  makeEmptyStoreState: UN,
  getNextTreeStateVersion: a1,
};
class c1 {}
function FN() {
  return new c1();
}
var Iu = { RetentionZone: c1, retentionZone: FN };
function jN(e, t) {
  const n = new Set(e);
  return (n.add(t), n);
}
function BN(e, t) {
  const n = new Set(e);
  return (n.delete(t), n);
}
function WN(e, t, n) {
  const r = new Map(e);
  return (r.set(t, n), r);
}
function ZN(e, t, n) {
  const r = new Map(e);
  return (r.set(t, n(r.get(t))), r);
}
function HN(e, t) {
  const n = new Map(e);
  return (n.delete(t), n);
}
function GN(e, t) {
  const n = new Map(e);
  return (t.forEach((r) => n.delete(r)), n);
}
var d1 = {
  setByAddingToSet: jN,
  setByDeletingFromSet: BN,
  mapBySettingInMap: WN,
  mapByUpdatingInMap: ZN,
  mapByDeletingFromMap: HN,
  mapByDeletingMultipleFromMap: GN,
};
function* KN(e, t) {
  let n = 0;
  for (const r of e) t(r, n++) && (yield r);
}
var Qh = KN;
function QN(e, t) {
  return new Proxy(e, {
    get: (r, i) => (!(i in r) && i in t && (r[i] = t[i]()), r[i]),
    ownKeys: (r) => Object.keys(r),
  });
}
var f1 = QN;
const { getNode: la, getNodeMaybe: YN, recoilValuesForKeys: pv } = Ut,
  { RetentionZone: mv } = Iu,
  { setByAddingToSet: JN } = d1,
  qN = Object.freeze(new Set());
class XN extends Error {}
function eA(e, t, n) {
  if (!Ie("recoil_memory_managament_2020")) return () => {};
  const { nodesRetainedByZone: r } = e.getState().retention;
  function i(o) {
    let s = r.get(o);
    (s || r.set(o, (s = new Set())), s.add(t));
  }
  if (n instanceof mv) i(n);
  else if (Array.isArray(n)) for (const o of n) i(o);
  return () => {
    if (!Ie("recoil_memory_managament_2020")) return;
    const { retention: o } = e.getState();
    function s(a) {
      const l = o.nodesRetainedByZone.get(a);
      (l == null || l.delete(t),
        l && l.size === 0 && o.nodesRetainedByZone.delete(a));
    }
    if (n instanceof mv) s(n);
    else if (Array.isArray(n)) for (const a of n) s(a);
  };
}
function Yh(e, t, n, r) {
  const i = e.getState();
  if (i.nodeCleanupFunctions.has(n)) return;
  const o = la(n),
    s = eA(e, n, o.retainedBy),
    a = o.init(e, t, r);
  i.nodeCleanupFunctions.set(n, () => {
    (a(), s());
  });
}
function tA(e, t, n) {
  Yh(e, e.getState().currentTree, t, n);
}
function nA(e, t) {
  var n;
  const r = e.getState();
  ((n = r.nodeCleanupFunctions.get(t)) === null || n === void 0 || n(),
    r.nodeCleanupFunctions.delete(t));
}
function rA(e, t, n) {
  return (Yh(e, t, n, "get"), la(n).get(e, t));
}
function h1(e, t, n) {
  return la(n).peek(e, t);
}
function iA(e, t, n) {
  var r;
  const i = YN(t);
  return (
    i == null || (r = i.invalidate) === null || r === void 0 || r.call(i, e),
    {
      ...e,
      atomValues: e.atomValues.clone().delete(t),
      nonvalidatedAtoms: e.nonvalidatedAtoms.clone().set(t, n),
      dirtyAtoms: JN(e.dirtyAtoms, t),
    }
  );
}
function oA(e, t, n, r) {
  const i = la(n);
  if (i.set == null) throw new XN(`Attempt to set read-only RecoilValue: ${n}`);
  const o = i.set;
  return (Yh(e, t, n, "set"), o(e, t, r));
}
function sA(e, t, n) {
  const r = e.getState(),
    i = e.getGraph(t.version),
    o = la(n).nodeType;
  return f1(
    { type: o },
    {
      loadable: () => h1(e, t, n),
      isActive: () => r.knownAtoms.has(n) || r.knownSelectors.has(n),
      isSet: () => (o === "selector" ? !1 : t.atomValues.has(n)),
      isModified: () => t.dirtyAtoms.has(n),
      deps: () => {
        var s;
        return pv((s = i.nodeDeps.get(n)) !== null && s !== void 0 ? s : []);
      },
      subscribers: () => {
        var s, a;
        return {
          nodes: pv(Qh(p1(e, t, new Set([n])), (l) => l !== n)),
          components: ku(
            (s =
              (a = r.nodeToComponentSubscriptions.get(n)) === null ||
              a === void 0
                ? void 0
                : a.values()) !== null && s !== void 0
              ? s
              : [],
            ([l]) => ({ name: l }),
          ),
        };
      },
    },
  );
}
function p1(e, t, n) {
  const r = new Set(),
    i = Array.from(n),
    o = e.getGraph(t.version);
  for (let a = i.pop(); a; a = i.pop()) {
    var s;
    r.add(a);
    const l =
      (s = o.nodeToNodeSubscriptions.get(a)) !== null && s !== void 0 ? s : qN;
    for (const u of l) r.has(u) || i.push(u);
  }
  return r;
}
var Dr = {
  getNodeLoadable: rA,
  peekNodeLoadable: h1,
  setNodeValue: oA,
  initializeNode: tA,
  cleanUpNode: nA,
  setUnvalidatedAtomValue_DEPRECATED: iA,
  peekNodeInfo: sA,
  getDownstreamNodes: p1,
};
let m1 = null;
function aA(e) {
  m1 = e;
}
function lA() {
  var e;
  (e = m1) === null || e === void 0 || e();
}
var v1 = { setInvalidateMemoizedSnapshot: aA, invalidateMemoizedSnapshot: lA };
const { getDownstreamNodes: uA, getNodeLoadable: g1, setNodeValue: cA } = Dr,
  { getNextComponentID: dA } = Ou,
  { getNode: fA, getNodeMaybe: y1 } = Ut,
  { DefaultValue: Jh } = Ut,
  { reactMode: hA } = sa,
  {
    AbstractRecoilValue: pA,
    RecoilState: mA,
    RecoilValueReadOnly: vA,
    isRecoilValue: gA,
  } = lo,
  { invalidateMemoizedSnapshot: yA } = v1;
function _A(e, { key: t }, n = e.getState().currentTree) {
  var r, i;
  const o = e.getState();
  n.version === o.currentTree.version ||
    n.version ===
      ((r = o.nextTree) === null || r === void 0 ? void 0 : r.version) ||
    (n.version, (i = o.previousTree) === null || i === void 0 || i.version);
  const s = g1(e, n, t);
  return (s.state === "loading" && s.contents.catch(() => {}), s);
}
function SA(e, t) {
  const n = e.clone();
  return (
    t.forEach((r, i) => {
      r.state === "hasValue" && r.contents instanceof Jh
        ? n.delete(i)
        : n.set(i, r);
    }),
    n
  );
}
function EA(e, t, { key: n }, r) {
  if (typeof r == "function") {
    const i = g1(e, t, n);
    if (i.state === "loading") {
      const o = `Tried to set atom or selector "${n}" using an updater function while the current state is pending, this is not currently supported.`;
      throw pe(o);
    } else if (i.state === "hasError") throw i.contents;
    return r(i.contents);
  } else return r;
}
function wA(e, t, n) {
  if (n.type === "set") {
    const { recoilValue: i, valueOrUpdater: o } = n,
      s = EA(e, t, i, o),
      a = cA(e, t, i.key, s);
    for (const [l, u] of a.entries()) nf(t, l, u);
  } else if (n.type === "setLoadable") {
    const {
      recoilValue: { key: i },
      loadable: o,
    } = n;
    nf(t, i, o);
  } else if (n.type === "markModified") {
    const {
      recoilValue: { key: i },
    } = n;
    t.dirtyAtoms.add(i);
  } else if (n.type === "setUnvalidated") {
    var r;
    const {
        recoilValue: { key: i },
        unvalidatedValue: o,
      } = n,
      s = y1(i);
    (s == null || (r = s.invalidate) === null || r === void 0 || r.call(s, t),
      t.atomValues.delete(i),
      t.nonvalidatedAtoms.set(i, o),
      t.dirtyAtoms.add(i));
  } else Wh(`Unknown action ${n.type}`);
}
function nf(e, t, n) {
  (n.state === "hasValue" && n.contents instanceof Jh
    ? e.atomValues.delete(t)
    : e.atomValues.set(t, n),
    e.dirtyAtoms.add(t),
    e.nonvalidatedAtoms.delete(t));
}
function _1(e, t) {
  e.replaceState((n) => {
    const r = S1(n);
    for (const i of t) wA(e, r, i);
    return (E1(e, r), yA(), r);
  });
}
function bu(e, t) {
  if (as.length) {
    const n = as[as.length - 1];
    let r = n.get(e);
    (r || n.set(e, (r = [])), r.push(t));
  } else _1(e, [t]);
}
const as = [];
function TA() {
  const e = new Map();
  return (
    as.push(e),
    () => {
      for (const [t, n] of e) _1(t, n);
      as.pop();
    }
  );
}
function S1(e) {
  return {
    ...e,
    atomValues: e.atomValues.clone(),
    nonvalidatedAtoms: e.nonvalidatedAtoms.clone(),
    dirtyAtoms: new Set(e.dirtyAtoms),
  };
}
function E1(e, t) {
  const n = uA(e, t, t.dirtyAtoms);
  for (const o of n) {
    var r, i;
    (r = y1(o)) === null ||
      r === void 0 ||
      (i = r.invalidate) === null ||
      i === void 0 ||
      i.call(r, t);
  }
}
function w1(e, t, n) {
  bu(e, { type: "set", recoilValue: t, valueOrUpdater: n });
}
function RA(e, t, n) {
  if (n instanceof Jh) return w1(e, t, n);
  bu(e, { type: "setLoadable", recoilValue: t, loadable: n });
}
function xA(e, t) {
  bu(e, { type: "markModified", recoilValue: t });
}
function CA(e, t, n) {
  bu(e, { type: "setUnvalidated", recoilValue: t, unvalidatedValue: n });
}
function NA(e, { key: t }, n, r = null) {
  const i = dA(),
    o = e.getState();
  (o.nodeToComponentSubscriptions.has(t) ||
    o.nodeToComponentSubscriptions.set(t, new Map()),
    We(o.nodeToComponentSubscriptions.get(t)).set(i, [
      r ?? "<not captured>",
      n,
    ]));
  const s = hA();
  if (s.early && (s.mode === "LEGACY" || s.mode === "MUTABLE_SOURCE")) {
    const a = e.getState().nextTree;
    a && a.dirtyAtoms.has(t) && n(a);
  }
  return {
    release: () => {
      const a = e.getState(),
        l = a.nodeToComponentSubscriptions.get(t);
      l === void 0 ||
        !l.has(i) ||
        (l.delete(i), l.size === 0 && a.nodeToComponentSubscriptions.delete(t));
    },
  };
}
function AA(e, t) {
  var n;
  const { currentTree: r } = e.getState(),
    i = fA(t.key);
  (n = i.clearCache) === null || n === void 0 || n.call(i, e, r);
}
var On = {
  RecoilValueReadOnly: vA,
  AbstractRecoilValue: pA,
  RecoilState: mA,
  getRecoilValueAsLoadable: _A,
  setRecoilValue: w1,
  setRecoilValueLoadable: RA,
  markRecoilValueModified: xA,
  setUnvalidatedRecoilValue: CA,
  subscribeToRecoilValue: NA,
  isRecoilValue: gA,
  applyAtomValueWrites: SA,
  batchStart: TA,
  writeLoadableToTreeState: nf,
  invalidateDownstreams: E1,
  copyTreeState: S1,
  refreshRecoilValue: AA,
};
function PA(e, t, n) {
  const r = e.entries();
  let i = r.next();
  for (; !i.done; ) {
    const o = i.value;
    if (t.call(n, o[1], o[0], e)) return !0;
    i = r.next();
  }
  return !1;
}
var kA = PA;
const { cleanUpNode: OA } = Dr,
  { deleteNodeConfigIfPossible: IA, getNode: T1 } = Ut,
  { RetentionZone: R1 } = Iu,
  bA = 12e4,
  x1 = new Set();
function C1(e, t) {
  const n = e.getState(),
    r = n.currentTree;
  if (n.nextTree) return;
  const i = new Set();
  for (const s of t)
    if (s instanceof R1) for (const a of zA(n, s)) i.add(a);
    else i.add(s);
  const o = LA(e, i);
  for (const s of o) MA(e, r, s);
}
function LA(e, t) {
  const n = e.getState(),
    r = n.currentTree,
    i = e.getGraph(r.version),
    o = new Set(),
    s = new Set();
  return (a(t), o);
  function a(l) {
    const u = new Set(),
      c = DA(e, r, l, o, s);
    for (const v of c) {
      var d;
      if (T1(v).retainedBy === "recoilRoot") {
        s.add(v);
        continue;
      }
      if (
        ((d = n.retention.referenceCounts.get(v)) !== null && d !== void 0
          ? d
          : 0) > 0
      ) {
        s.add(v);
        continue;
      }
      if (N1(v).some((_) => n.retention.referenceCounts.get(_))) {
        s.add(v);
        continue;
      }
      const y = i.nodeToNodeSubscriptions.get(v);
      if (y && kA(y, (_) => s.has(_))) {
        s.add(v);
        continue;
      }
      (o.add(v), u.add(v));
    }
    const f = new Set();
    for (const v of u)
      for (const y of (h = i.nodeDeps.get(v)) !== null && h !== void 0
        ? h
        : x1) {
        var h;
        o.has(y) || f.add(y);
      }
    f.size && a(f);
  }
}
function DA(e, t, n, r, i) {
  const o = e.getGraph(t.version),
    s = [],
    a = new Set();
  for (; n.size > 0; ) l(We(n.values().next().value));
  return s;
  function l(u) {
    if (r.has(u) || i.has(u)) {
      n.delete(u);
      return;
    }
    if (a.has(u)) return;
    const c = o.nodeToNodeSubscriptions.get(u);
    if (c) for (const d of c) l(d);
    (a.add(u), n.delete(u), s.push(u));
  }
}
function MA(e, t, n) {
  if (!Ie("recoil_memory_managament_2020")) return;
  OA(e, n);
  const r = e.getState();
  (r.knownAtoms.delete(n),
    r.knownSelectors.delete(n),
    r.nodeTransactionSubscriptions.delete(n),
    r.retention.referenceCounts.delete(n));
  const i = N1(n);
  for (const l of i) {
    var o;
    (o = r.retention.nodesRetainedByZone.get(l)) === null ||
      o === void 0 ||
      o.delete(n);
  }
  (t.atomValues.delete(n),
    t.dirtyAtoms.delete(n),
    t.nonvalidatedAtoms.delete(n));
  const s = r.graphsByVersion.get(t.version);
  if (s) {
    const l = s.nodeDeps.get(n);
    if (l !== void 0) {
      s.nodeDeps.delete(n);
      for (const u of l) {
        var a;
        (a = s.nodeToNodeSubscriptions.get(u)) === null ||
          a === void 0 ||
          a.delete(n);
      }
    }
    s.nodeToNodeSubscriptions.delete(n);
  }
  IA(n);
}
function zA(e, t) {
  var n;
  return (n = e.retention.nodesRetainedByZone.get(t)) !== null && n !== void 0
    ? n
    : x1;
}
function N1(e) {
  const t = T1(e).retainedBy;
  return t === void 0 || t === "components" || t === "recoilRoot"
    ? []
    : t instanceof R1
      ? [t]
      : t;
}
function VA(e, t) {
  const n = e.getState();
  n.nextTree
    ? n.retention.retainablesToCheckForRelease.add(t)
    : C1(e, new Set([t]));
}
function $A(e, t, n) {
  var r;
  if (!Ie("recoil_memory_managament_2020")) return;
  const i = e.getState().retention.referenceCounts,
    o = ((r = i.get(t)) !== null && r !== void 0 ? r : 0) + n;
  o === 0 ? A1(e, t) : i.set(t, o);
}
function A1(e, t) {
  if (!Ie("recoil_memory_managament_2020")) return;
  (e.getState().retention.referenceCounts.delete(t), VA(e, t));
}
function UA(e) {
  if (!Ie("recoil_memory_managament_2020")) return;
  const t = e.getState();
  (C1(e, t.retention.retainablesToCheckForRelease),
    t.retention.retainablesToCheckForRelease.clear());
}
function FA(e) {
  return e === void 0 ? "recoilRoot" : e;
}
var vi = {
  SUSPENSE_TIMEOUT_MS: bA,
  updateRetainCount: $A,
  updateRetainCountToZero: A1,
  releaseScheduledRetainablesNow: UA,
  retainedByOptionWithDefault: FA,
};
const { unstable_batchedUpdates: jA } = Ho;
var BA = { unstable_batchedUpdates: jA };
const { unstable_batchedUpdates: WA } = BA;
var ZA = { unstable_batchedUpdates: WA };
const { batchStart: HA } = On,
  { unstable_batchedUpdates: GA } = ZA;
let qh = GA || ((e) => e());
const KA = (e) => {
    qh = e;
  },
  QA = () => qh,
  YA = (e) => {
    qh(() => {
      let t = () => {};
      try {
        ((t = HA()), e());
      } finally {
        t();
      }
    });
  };
var Lu = { getBatcher: QA, setBatcher: KA, batchUpdates: YA };
function* JA(e) {
  for (const t of e) for (const n of t) yield n;
}
var P1 = JA;
const k1 = typeof Window > "u" || typeof window > "u",
  qA = (e) => !k1 && (e === window || e instanceof Window),
  XA = typeof navigator < "u" && navigator.product === "ReactNative";
var Du = { isSSR: k1, isReactNative: XA, isWindow: qA };
function eP(e, t) {
  let n;
  return (...r) => {
    n || (n = {});
    const i = t(...r);
    return (Object.hasOwnProperty.call(n, i) || (n[i] = e(...r)), n[i]);
  };
}
function tP(e, t) {
  let n, r;
  return (...i) => {
    const o = t(...i);
    return (n === o || ((n = o), (r = e(...i))), r);
  };
}
function nP(e, t) {
  let n, r;
  return [
    (...s) => {
      const a = t(...s);
      return (n === a || ((n = a), (r = e(...s))), r);
    },
    () => {
      n = null;
    },
  ];
}
var rP = {
  memoizeWithArgsHash: eP,
  memoizeOneWithArgsHash: tP,
  memoizeOneWithArgsHashAndInvalidation: nP,
};
const { batchUpdates: rf } = Lu,
  { initializeNode: iP, peekNodeInfo: oP } = Dr,
  { graph: sP } = aa,
  { getNextStoreID: aP } = Ou,
  { DEFAULT_VALUE: lP, recoilValues: vv, recoilValuesForKeys: gv } = Ut,
  {
    AbstractRecoilValue: uP,
    getRecoilValueAsLoadable: cP,
    setRecoilValue: yv,
    setUnvalidatedRecoilValue: dP,
  } = On,
  { updateRetainCount: ol } = vi,
  { setInvalidateMemoizedSnapshot: fP } = v1,
  { getNextTreeStateVersion: hP, makeEmptyStoreState: pP } = u1,
  { isSSR: mP } = Du,
  { memoizeOneWithArgsHashAndInvalidation: vP } = rP;
class Mu {
  constructor(t, n) {
    (de(this, "_store", void 0),
      de(this, "_refCount", 1),
      de(
        this,
        "getLoadable",
        (r) => (this.checkRefCount_INTERNAL(), cP(this._store, r)),
      ),
      de(
        this,
        "getPromise",
        (r) => (this.checkRefCount_INTERNAL(), this.getLoadable(r).toPromise()),
      ),
      de(this, "getNodes_UNSTABLE", (r) => {
        if (
          (this.checkRefCount_INTERNAL(),
          (r == null ? void 0 : r.isModified) === !0)
        ) {
          if ((r == null ? void 0 : r.isInitialized) === !1) return [];
          const s = this._store.getState().currentTree;
          return gv(s.dirtyAtoms);
        }
        const i = this._store.getState().knownAtoms,
          o = this._store.getState().knownSelectors;
        return (r == null ? void 0 : r.isInitialized) == null
          ? vv.values()
          : r.isInitialized === !0
            ? gv(P1([i, o]))
            : Qh(vv.values(), ({ key: s }) => !i.has(s) && !o.has(s));
      }),
      de(
        this,
        "getInfo_UNSTABLE",
        ({ key: r }) => (
          this.checkRefCount_INTERNAL(),
          oP(this._store, this._store.getState().currentTree, r)
        ),
      ),
      de(this, "map", (r) => {
        this.checkRefCount_INTERNAL();
        const i = new of(this, rf);
        return (r(i), i);
      }),
      de(this, "asyncMap", async (r) => {
        this.checkRefCount_INTERNAL();
        const i = new of(this, rf);
        return (i.retain(), await r(i), i.autoRelease_INTERNAL(), i);
      }),
      (this._store = {
        storeID: aP(),
        parentStoreID: n,
        getState: () => t,
        replaceState: (r) => {
          t.currentTree = r(t.currentTree);
        },
        getGraph: (r) => {
          const i = t.graphsByVersion;
          if (i.has(r)) return We(i.get(r));
          const o = sP();
          return (i.set(r, o), o);
        },
        subscribeToTransactions: () => ({ release: () => {} }),
        addTransactionMetadata: () => {
          throw pe("Cannot subscribe to Snapshots");
        },
      }));
    for (const r of this._store.getState().knownAtoms)
      (iP(this._store, r, "get"), ol(this._store, r, 1));
    this.autoRelease_INTERNAL();
  }
  retain() {
    (this._refCount <= 0, this._refCount++);
    let t = !1;
    return () => {
      t || ((t = !0), this._release());
    };
  }
  autoRelease_INTERNAL() {
    mP || window.setTimeout(() => this._release(), 10);
  }
  _release() {
    if ((this._refCount--, this._refCount === 0)) {
      if (
        (this._store.getState().nodeCleanupFunctions.forEach((t) => t()),
        this._store.getState().nodeCleanupFunctions.clear(),
        !Ie("recoil_memory_managament_2020"))
      )
        return;
    } else this._refCount < 0;
  }
  isRetained() {
    return this._refCount > 0;
  }
  checkRefCount_INTERNAL() {
    Ie("recoil_memory_managament_2020") && this._refCount <= 0;
  }
  getStore_INTERNAL() {
    return (this.checkRefCount_INTERNAL(), this._store);
  }
  getID() {
    return (
      this.checkRefCount_INTERNAL(),
      this._store.getState().currentTree.stateID
    );
  }
  getStoreID() {
    return (this.checkRefCount_INTERNAL(), this._store.storeID);
  }
}
function O1(e, t, n = !1) {
  const r = e.getState(),
    i = n ? hP() : t.version;
  return {
    currentTree: {
      version: n ? i : t.version,
      stateID: n ? i : t.stateID,
      transactionMetadata: { ...t.transactionMetadata },
      dirtyAtoms: new Set(t.dirtyAtoms),
      atomValues: t.atomValues.clone(),
      nonvalidatedAtoms: t.nonvalidatedAtoms.clone(),
    },
    commitDepth: 0,
    nextTree: null,
    previousTree: null,
    knownAtoms: new Set(r.knownAtoms),
    knownSelectors: new Set(r.knownSelectors),
    transactionSubscriptions: new Map(),
    nodeTransactionSubscriptions: new Map(),
    nodeToComponentSubscriptions: new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: new Set(),
    graphsByVersion: new Map().set(i, e.getGraph(t.version)),
    retention: {
      referenceCounts: new Map(),
      nodesRetainedByZone: new Map(),
      retainablesToCheckForRelease: new Set(),
    },
    nodeCleanupFunctions: new Map(
      ku(r.nodeCleanupFunctions.entries(), ([o]) => [o, () => {}]),
    ),
  };
}
function gP(e) {
  const t = new Mu(pP());
  return e != null ? t.map(e) : t;
}
const [_v, I1] = vP(
  (e, t) => {
    var n;
    const r = e.getState(),
      i =
        t === "latest"
          ? (n = r.nextTree) !== null && n !== void 0
            ? n
            : r.currentTree
          : We(r.previousTree);
    return new Mu(O1(e, i), e.storeID);
  },
  (e, t) => {
    var n, r;
    return (
      String(t) +
      String(e.storeID) +
      String(
        (n = e.getState().nextTree) === null || n === void 0
          ? void 0
          : n.version,
      ) +
      String(e.getState().currentTree.version) +
      String(
        (r = e.getState().previousTree) === null || r === void 0
          ? void 0
          : r.version,
      )
    );
  },
);
fP(I1);
function yP(e, t = "latest") {
  const n = _v(e, t);
  return n.isRetained() ? n : (I1(), _v(e, t));
}
class of extends Mu {
  constructor(t, n) {
    (super(
      O1(
        t.getStore_INTERNAL(),
        t.getStore_INTERNAL().getState().currentTree,
        !0,
      ),
      t.getStoreID(),
    ),
      de(this, "_batch", void 0),
      de(this, "set", (r, i) => {
        this.checkRefCount_INTERNAL();
        const o = this.getStore_INTERNAL();
        this._batch(() => {
          (ol(o, r.key, 1), yv(this.getStore_INTERNAL(), r, i));
        });
      }),
      de(this, "reset", (r) => {
        this.checkRefCount_INTERNAL();
        const i = this.getStore_INTERNAL();
        this._batch(() => {
          (ol(i, r.key, 1), yv(this.getStore_INTERNAL(), r, lP));
        });
      }),
      de(this, "setUnvalidatedAtomValues_DEPRECATED", (r) => {
        this.checkRefCount_INTERNAL();
        const i = this.getStore_INTERNAL();
        rf(() => {
          for (const [o, s] of r.entries()) (ol(i, o, 1), dP(i, new uP(o), s));
        });
      }),
      (this._batch = n));
  }
}
var zu = {
    Snapshot: Mu,
    MutableSnapshot: of,
    freshSnapshot: gP,
    cloneSnapshot: yP,
  },
  _P = zu.Snapshot,
  SP = zu.MutableSnapshot,
  EP = zu.freshSnapshot,
  wP = zu.cloneSnapshot,
  Vu = Object.freeze({
    __proto__: null,
    Snapshot: _P,
    MutableSnapshot: SP,
    freshSnapshot: EP,
    cloneSnapshot: wP,
  });
function TP(...e) {
  const t = new Set();
  for (const n of e) for (const r of n) t.add(r);
  return t;
}
var RP = TP;
const { useRef: xP } = P;
function CP(e) {
  const t = xP(e);
  return (t.current === e && typeof e == "function" && (t.current = e()), t);
}
var Sv = CP;
const { getNextTreeStateVersion: NP, makeEmptyStoreState: b1 } = u1,
  {
    cleanUpNode: AP,
    getDownstreamNodes: PP,
    initializeNode: kP,
    setNodeValue: OP,
    setUnvalidatedAtomValue_DEPRECATED: IP,
  } = Dr,
  { graph: bP } = aa,
  { cloneGraph: LP } = aa,
  { getNextStoreID: L1 } = Ou,
  { createMutableSource: Mc, reactMode: D1 } = sa,
  { applyAtomValueWrites: DP } = On,
  { releaseScheduledRetainablesNow: M1 } = vi,
  { freshSnapshot: MP } = Vu,
  {
    useCallback: zP,
    useContext: z1,
    useEffect: sf,
    useMemo: VP,
    useRef: $P,
    useState: UP,
  } = P;
function Do() {
  throw pe("This component must be used inside a <RecoilRoot> component.");
}
const V1 = Object.freeze({
  storeID: L1(),
  getState: Do,
  replaceState: Do,
  getGraph: Do,
  subscribeToTransactions: Do,
  addTransactionMetadata: Do,
});
let af = !1;
function Ev(e) {
  if (af)
    throw pe(
      "An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.",
    );
  const t = e.getState();
  if (t.nextTree === null) {
    Ie("recoil_memory_managament_2020") &&
      Ie("recoil_release_on_cascading_update_killswitch_2021") &&
      t.commitDepth > 0 &&
      M1(e);
    const n = t.currentTree.version,
      r = NP();
    ((t.nextTree = {
      ...t.currentTree,
      version: r,
      stateID: r,
      dirtyAtoms: new Set(),
      transactionMetadata: {},
    }),
      t.graphsByVersion.set(r, LP(We(t.graphsByVersion.get(n)))));
  }
}
const $1 = P.createContext({ current: V1 }),
  $u = () => z1($1),
  U1 = P.createContext(null);
function FP() {
  return z1(U1);
}
function Xh(e, t, n) {
  const r = PP(e, n, n.dirtyAtoms);
  for (const i of r) {
    const o = t.nodeToComponentSubscriptions.get(i);
    if (o) for (const [s, [a, l]] of o) l(n);
  }
}
function F1(e) {
  const t = e.getState(),
    n = t.currentTree,
    r = n.dirtyAtoms;
  if (r.size) {
    for (const [i, o] of t.nodeTransactionSubscriptions)
      if (r.has(i)) for (const [s, a] of o) a(e);
    for (const [i, o] of t.transactionSubscriptions) o(e);
    (!D1().early || t.suspendedComponentResolvers.size > 0) &&
      (Xh(e, t, n),
      t.suspendedComponentResolvers.forEach((i) => i()),
      t.suspendedComponentResolvers.clear());
  }
  (t.queuedComponentCallbacks_DEPRECATED.forEach((i) => i(n)),
    t.queuedComponentCallbacks_DEPRECATED.splice(
      0,
      t.queuedComponentCallbacks_DEPRECATED.length,
    ));
}
function jP(e) {
  const t = e.getState();
  t.commitDepth++;
  try {
    const { nextTree: n } = t;
    if (n == null) return;
    ((t.previousTree = t.currentTree),
      (t.currentTree = n),
      (t.nextTree = null),
      F1(e),
      t.previousTree != null
        ? t.graphsByVersion.delete(t.previousTree.version)
        : Wh(
            "Ended batch with no previous state, which is unexpected",
            "recoil",
          ),
      (t.previousTree = null),
      Ie("recoil_memory_managament_2020") && n == null && M1(e));
  } finally {
    t.commitDepth--;
  }
}
function BP({ setNotifyBatcherOfChange: e }) {
  const t = $u(),
    [, n] = UP([]);
  return (
    e(() => n({})),
    sf(
      () => (
        e(() => n({})),
        () => {
          e(() => {});
        }
      ),
      [e],
    ),
    sf(() => {
      EN.enqueueExecution("Batcher", () => {
        jP(t.current);
      });
    }),
    null
  );
}
function WP(e, t) {
  const n = b1();
  return (
    t({
      set: (r, i) => {
        const o = n.currentTree,
          s = OP(e, o, r.key, i),
          a = new Set(s.keys()),
          l = o.nonvalidatedAtoms.clone();
        for (const u of a) l.delete(u);
        n.currentTree = {
          ...o,
          dirtyAtoms: RP(o.dirtyAtoms, a),
          atomValues: DP(o.atomValues, s),
          nonvalidatedAtoms: l,
        };
      },
      setUnvalidatedAtomValues: (r) => {
        r.forEach((i, o) => {
          n.currentTree = IP(n.currentTree, o, i);
        });
      },
    }),
    n
  );
}
function ZP(e) {
  const t = MP(e),
    n = t.getStore_INTERNAL().getState();
  return (
    t.retain(),
    n.nodeCleanupFunctions.forEach((r) => r()),
    n.nodeCleanupFunctions.clear(),
    n
  );
}
let wv = 0;
function HP({
  initializeState_DEPRECATED: e,
  initializeState: t,
  store_INTERNAL: n,
  children: r,
}) {
  let i;
  const o = (h) => {
      const v = i.current.graphsByVersion;
      if (v.has(h)) return We(v.get(h));
      const y = bP();
      return (v.set(h, y), y);
    },
    s = (h, v) => {
      if (v == null) {
        const { transactionSubscriptions: y } = d.current.getState(),
          _ = wv++;
        return (
          y.set(_, h),
          {
            release: () => {
              y.delete(_);
            },
          }
        );
      } else {
        const { nodeTransactionSubscriptions: y } = d.current.getState();
        y.has(v) || y.set(v, new Map());
        const _ = wv++;
        return (
          We(y.get(v)).set(_, h),
          {
            release: () => {
              const g = y.get(v);
              g && (g.delete(_), g.size === 0 && y.delete(v));
            },
          }
        );
      }
    },
    a = (h) => {
      Ev(d.current);
      for (const v of Object.keys(h))
        We(d.current.getState().nextTree).transactionMetadata[v] = h[v];
    },
    l = (h) => {
      Ev(d.current);
      const v = We(i.current.nextTree);
      let y;
      try {
        ((af = !0), (y = h(v)));
      } finally {
        af = !1;
      }
      y !== v &&
        ((i.current.nextTree = y),
        D1().early && Xh(d.current, i.current, y),
        We(u.current)());
    },
    u = $P(null),
    c = zP(
      (h) => {
        u.current = h;
      },
      [u],
    ),
    d = Sv(
      () =>
        n ?? {
          storeID: L1(),
          getState: () => i.current,
          replaceState: l,
          getGraph: o,
          subscribeToTransactions: s,
          addTransactionMetadata: a,
        },
    );
  (n != null && (d.current = n),
    (i = Sv(() => (e != null ? WP(d.current, e) : t != null ? ZP(t) : b1()))));
  const f = VP(
    () => (Mc == null ? void 0 : Mc(i, () => i.current.currentTree.version)),
    [i],
  );
  return (
    sf(() => {
      const h = d.current;
      for (const v of new Set(h.getState().knownAtoms)) kP(h, v, "get");
      return () => {
        for (const v of h.getState().knownAtoms) AP(h, v);
      };
    }, [d]),
    P.createElement(
      $1.Provider,
      { value: d },
      P.createElement(
        U1.Provider,
        { value: f },
        P.createElement(BP, { setNotifyBatcherOfChange: c }),
        r,
      ),
    )
  );
}
function GP(e) {
  const { override: t, ...n } = e,
    r = $u();
  return t === !1 && r.current !== V1 ? e.children : P.createElement(HP, n);
}
function KP() {
  return $u().current.storeID;
}
var tr = {
  RecoilRoot: GP,
  useStoreRef: $u,
  useRecoilMutableSource: FP,
  useRecoilStoreID: KP,
  notifyComponents_FOR_TESTING: Xh,
  sendEndOfBatchNotifications_FOR_TESTING: F1,
};
function QP(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
var YP = QP;
const { useEffect: JP, useRef: qP } = P;
function XP(e) {
  const t = qP();
  return (
    JP(() => {
      t.current = e;
    }),
    t.current
  );
}
var j1 = XP;
const { useStoreRef: ek } = tr,
  { SUSPENSE_TIMEOUT_MS: tk } = vi,
  { updateRetainCount: Mo } = vi,
  { RetentionZone: nk } = Iu,
  { useEffect: rk, useRef: ik } = P,
  { isSSR: Tv } = Du;
function ok(e) {
  if (Ie("recoil_memory_managament_2020")) return sk(e);
}
function sk(e) {
  const n = (Array.isArray(e) ? e : [e]).map((s) =>
      s instanceof nk ? s : s.key,
    ),
    r = ek();
  rk(() => {
    if (!Ie("recoil_memory_managament_2020")) return;
    const s = r.current;
    if (i.current && !Tv) (window.clearTimeout(i.current), (i.current = null));
    else for (const a of n) Mo(s, a, 1);
    return () => {
      for (const a of n) Mo(s, a, -1);
    };
  }, [r, ...n]);
  const i = ik(),
    o = j1(n);
  if (!Tv && (o === void 0 || !YP(o, n))) {
    const s = r.current;
    for (const a of n) Mo(s, a, 1);
    if (o) for (const a of o) Mo(s, a, -1);
    (i.current && window.clearTimeout(i.current),
      (i.current = window.setTimeout(() => {
        i.current = null;
        for (const a of n) Mo(s, a, -1);
      }, tk)));
  }
}
var ep = ok;
function ak() {
  return "<component name not available>";
}
var ua = ak;
const { batchUpdates: lk } = Lu,
  { DEFAULT_VALUE: B1 } = Ut,
  {
    currentRendererSupportsUseSyncExternalStore: uk,
    reactMode: wo,
    useMutableSource: ck,
    useSyncExternalStore: dk,
  } = sa,
  { useRecoilMutableSource: fk, useStoreRef: In } = tr,
  {
    AbstractRecoilValue: lf,
    getRecoilValueAsLoadable: ca,
    setRecoilValue: Ul,
    setUnvalidatedRecoilValue: hk,
    subscribeToRecoilValue: uo,
  } = On,
  { useCallback: zt, useEffect: co, useMemo: W1, useRef: ls, useState: tp } = P,
  { setByAddingToSet: pk } = d1,
  { isSSR: mk } = Du;
function np(e, t, n) {
  if (e.state === "hasValue") return e.contents;
  throw e.state === "loading"
    ? new Promise((i) => {
        const o = n.current.getState().suspendedComponentResolvers;
        (o.add(i),
          mk &&
            Me(e.contents) &&
            e.contents.finally(() => {
              o.delete(i);
            }));
      })
    : e.state === "hasError"
      ? e.contents
      : pe(`Invalid value of loadable atom "${t.key}"`);
}
function vk() {
  const e = ua(),
    t = In(),
    [, n] = tp([]),
    r = ls(new Set());
  r.current = new Set();
  const i = ls(new Set()),
    o = ls(new Map()),
    s = zt(
      (l) => {
        const u = o.current.get(l);
        u && (u.release(), o.current.delete(l));
      },
      [o],
    ),
    a = zt((l, u) => {
      o.current.has(u) && n([]);
    }, []);
  return (
    co(() => {
      const l = t.current;
      (ss(r.current, i.current).forEach((u) => {
        if (o.current.has(u)) return;
        const c = uo(l, new lf(u), (f) => a(f, u), e);
        (o.current.set(u, c),
          l.getState().nextTree
            ? l.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
                a(l.getState(), u);
              })
            : a(l.getState(), u));
      }),
        ss(i.current, r.current).forEach((u) => {
          s(u);
        }),
        (i.current = r.current));
    }),
    co(() => {
      const l = o.current;
      return (
        ss(r.current, new Set(l.keys())).forEach((u) => {
          const c = uo(t.current, new lf(u), (d) => a(d, u), e);
          l.set(u, c);
        }),
        () => l.forEach((u, c) => s(c))
      );
    }, [e, t, s, a]),
    W1(() => {
      function l(v) {
        return (y) => {
          Ul(t.current, v, y);
        };
      }
      function u(v) {
        return () => Ul(t.current, v, B1);
      }
      function c(v) {
        var y;
        r.current.has(v.key) || (r.current = pk(r.current, v.key));
        const _ = t.current.getState();
        return ca(
          t.current,
          v,
          wo().early && (y = _.nextTree) !== null && y !== void 0
            ? y
            : _.currentTree,
        );
      }
      function d(v) {
        const y = c(v);
        return np(y, v, t);
      }
      function f(v) {
        return [d(v), l(v)];
      }
      function h(v) {
        return [c(v), l(v)];
      }
      return {
        getRecoilValue: d,
        getRecoilValueLoadable: c,
        getRecoilState: f,
        getRecoilStateLoadable: h,
        getSetRecoilState: l,
        getResetRecoilState: u,
      };
    }, [r, t])
  );
}
const gk = { current: 0 };
function yk(e) {
  const t = In(),
    n = ua(),
    r = zt(() => {
      var a;
      const l = t.current,
        u = l.getState(),
        c =
          wo().early && (a = u.nextTree) !== null && a !== void 0
            ? a
            : u.currentTree;
      return { loadable: ca(l, e, c), key: e.key };
    }, [t, e]),
    i = zt((a) => {
      let l;
      return () => {
        var u, c;
        const d = a();
        return (u = l) !== null &&
          u !== void 0 &&
          u.loadable.is(d.loadable) &&
          ((c = l) === null || c === void 0 ? void 0 : c.key) === d.key
          ? l
          : ((l = d), d);
      };
    }, []),
    o = W1(() => i(r), [r, i]),
    s = zt(
      (a) => {
        const l = t.current;
        return uo(l, e, a, n).release;
      },
      [t, e, n],
    );
  return dk(s, o, o).loadable;
}
function _k(e) {
  const t = In(),
    n = zt(() => {
      var u;
      const c = t.current,
        d = c.getState(),
        f =
          wo().early && (u = d.nextTree) !== null && u !== void 0
            ? u
            : d.currentTree;
      return ca(c, e, f);
    }, [t, e]),
    r = zt(() => n(), [n]),
    i = ua(),
    o = zt(
      (u, c) => {
        const d = t.current;
        return uo(
          d,
          e,
          () => {
            if (!Ie("recoil_suppress_rerender_in_callback")) return c();
            const h = n();
            (l.current.is(h) || c(), (l.current = h));
          },
          i,
        ).release;
      },
      [t, e, i, n],
    ),
    s = fk();
  if (s == null)
    throw pe(
      "Recoil hooks must be used in components contained within a <RecoilRoot> component.",
    );
  const a = ck(s, r, o),
    l = ls(a);
  return (
    co(() => {
      l.current = a;
    }),
    a
  );
}
function uf(e) {
  const t = In(),
    n = ua(),
    r = zt(() => {
      var l;
      const u = t.current,
        c = u.getState(),
        d =
          wo().early && (l = c.nextTree) !== null && l !== void 0
            ? l
            : c.currentTree;
      return ca(u, e, d);
    }, [t, e]),
    i = zt(() => ({ loadable: r(), key: e.key }), [r, e.key]),
    o = zt(
      (l) => {
        const u = i();
        return l.loadable.is(u.loadable) && l.key === u.key ? l : u;
      },
      [i],
    );
  co(() => {
    const l = uo(
      t.current,
      e,
      (u) => {
        a(o);
      },
      n,
    );
    return (a(o), l.release);
  }, [n, e, t, o]);
  const [s, a] = tp(i);
  return s.key !== e.key ? i().loadable : s.loadable;
}
function Sk(e) {
  const t = In(),
    [, n] = tp([]),
    r = ua(),
    i = zt(() => {
      var a;
      const l = t.current,
        u = l.getState(),
        c =
          wo().early && (a = u.nextTree) !== null && a !== void 0
            ? a
            : u.currentTree;
      return ca(l, e, c);
    }, [t, e]),
    o = i(),
    s = ls(o);
  return (
    co(() => {
      s.current = o;
    }),
    co(() => {
      const a = t.current,
        l = a.getState(),
        u = uo(
          a,
          e,
          (d) => {
            var f;
            if (!Ie("recoil_suppress_rerender_in_callback")) return n([]);
            const h = i();
            (((f = s.current) !== null && f !== void 0 && f.is(h)) || n(h),
              (s.current = h));
          },
          r,
        );
      if (l.nextTree)
        a.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
          ((s.current = null), n([]));
        });
      else {
        var c;
        if (!Ie("recoil_suppress_rerender_in_callback")) return n([]);
        const d = i();
        (((c = s.current) !== null && c !== void 0 && c.is(d)) || n(d),
          (s.current = d));
      }
      return u.release;
    }, [r, i, e, t]),
    o
  );
}
function rp(e) {
  return (
    Ie("recoil_memory_managament_2020") && ep(e),
    {
      TRANSITION_SUPPORT: uf,
      SYNC_EXTERNAL_STORE: uk() ? yk : uf,
      MUTABLE_SOURCE: _k,
      LEGACY: Sk,
    }[wo().mode](e)
  );
}
function Z1(e) {
  const t = In(),
    n = rp(e);
  return np(n, e, t);
}
function Uu(e) {
  const t = In();
  return zt(
    (n) => {
      Ul(t.current, e, n);
    },
    [t, e],
  );
}
function Ek(e) {
  const t = In();
  return zt(() => {
    Ul(t.current, e, B1);
  }, [t, e]);
}
function wk(e) {
  return [Z1(e), Uu(e)];
}
function Tk(e) {
  return [rp(e), Uu(e)];
}
function Rk() {
  const e = In();
  return (t, n = {}) => {
    lk(() => {
      (e.current.addTransactionMetadata(n),
        t.forEach((r, i) => hk(e.current, new lf(i), r)));
    });
  };
}
function H1(e) {
  return (Ie("recoil_memory_managament_2020") && ep(e), uf(e));
}
function G1(e) {
  const t = In(),
    n = H1(e);
  return np(n, e, t);
}
function xk(e) {
  return [G1(e), Uu(e)];
}
var Ck = {
  recoilComponentGetRecoilValueCount_FOR_TESTING: gk,
  useRecoilInterface: vk,
  useRecoilState: wk,
  useRecoilStateLoadable: Tk,
  useRecoilValue: Z1,
  useRecoilValueLoadable: rp,
  useResetRecoilState: Ek,
  useSetRecoilState: Uu,
  useSetUnvalidatedAtomValues: Rk,
  useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: H1,
  useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: G1,
  useRecoilState_TRANSITION_SUPPORT_UNSTABLE: xk,
};
function Nk(e, t) {
  const n = new Map();
  for (const [r, i] of e) t(i, r) && n.set(r, i);
  return n;
}
var Ak = Nk;
function Pk(e, t) {
  const n = new Set();
  for (const r of e) t(r) && n.add(r);
  return n;
}
var kk = Pk;
function Ok(...e) {
  const t = new Map();
  for (let n = 0; n < e.length; n++) {
    const r = e[n].keys();
    let i;
    for (; !(i = r.next()).done; ) t.set(i.value, e[n].get(i.value));
  }
  return t;
}
var Ik = Ok;
const { batchUpdates: bk } = Lu,
  { DEFAULT_VALUE: Lk, getNode: K1, nodes: Dk } = Ut,
  { useStoreRef: ip } = tr,
  { AbstractRecoilValue: Mk, setRecoilValueLoadable: zk } = On,
  { SUSPENSE_TIMEOUT_MS: Vk } = vi,
  { cloneSnapshot: Fl } = Vu,
  { useCallback: Fu, useEffect: Q1, useRef: Rv, useState: $k } = P,
  { isSSR: xv } = Du;
function ju(e) {
  const t = ip();
  Q1(() => t.current.subscribeToTransactions(e).release, [e, t]);
}
function Cv(e) {
  const t = e.atomValues.toMap(),
    n = $l(
      Ak(t, (r, i) => {
        const s = K1(i).persistence_UNSTABLE;
        return s != null && s.type !== "none" && r.state === "hasValue";
      }),
      (r) => r.contents,
    );
  return Ik(e.nonvalidatedAtoms.toMap(), n);
}
function Uk(e) {
  ju(
    Fu(
      (t) => {
        let n = t.getState().previousTree;
        const r = t.getState().currentTree;
        n || (n = t.getState().currentTree);
        const i = Cv(r),
          o = Cv(n),
          s = $l(Dk, (l) => {
            var u, c, d, f;
            return {
              persistence_UNSTABLE: {
                type:
                  (u =
                    (c = l.persistence_UNSTABLE) === null || c === void 0
                      ? void 0
                      : c.type) !== null && u !== void 0
                    ? u
                    : "none",
                backButton:
                  (d =
                    (f = l.persistence_UNSTABLE) === null || f === void 0
                      ? void 0
                      : f.backButton) !== null && d !== void 0
                    ? d
                    : !1,
              },
            };
          }),
          a = kk(r.dirtyAtoms, (l) => i.has(l) || o.has(l));
        e({
          atomValues: i,
          previousAtomValues: o,
          atomInfo: s,
          modifiedAtoms: a,
          transactionMetadata: { ...r.transactionMetadata },
        });
      },
      [e],
    ),
  );
}
function Fk(e) {
  ju(
    Fu(
      (t) => {
        const n = Fl(t, "latest"),
          r = Fl(t, "previous");
        e({ snapshot: n, previousSnapshot: r });
      },
      [e],
    ),
  );
}
function jk() {
  const e = ip(),
    [t, n] = $k(() => Fl(e.current)),
    r = j1(t),
    i = Rv(),
    o = Rv();
  if (
    (ju(Fu((a) => n(Fl(a)), [])),
    Q1(() => {
      const a = t.retain();
      if (i.current && !xv) {
        var l;
        (window.clearTimeout(i.current),
          (i.current = null),
          (l = o.current) === null || l === void 0 || l.call(o),
          (o.current = null));
      }
      return () => {
        window.setTimeout(a, 10);
      };
    }, [t]),
    r !== t && !xv)
  ) {
    if (i.current) {
      var s;
      (window.clearTimeout(i.current),
        (i.current = null),
        (s = o.current) === null || s === void 0 || s.call(o),
        (o.current = null));
    }
    ((o.current = t.retain()),
      (i.current = window.setTimeout(() => {
        var a;
        ((i.current = null),
          (a = o.current) === null || a === void 0 || a.call(o),
          (o.current = null));
      }, Vk)));
  }
  return t;
}
function Y1(e, t) {
  var n;
  const r = e.getState(),
    i = (n = r.nextTree) !== null && n !== void 0 ? n : r.currentTree,
    o = t.getStore_INTERNAL().getState().currentTree;
  bk(() => {
    const s = new Set();
    for (const u of [i.atomValues.keys(), o.atomValues.keys()])
      for (const c of u) {
        var a, l;
        ((a = i.atomValues.get(c)) === null || a === void 0
          ? void 0
          : a.contents) !==
          ((l = o.atomValues.get(c)) === null || l === void 0
            ? void 0
            : l.contents) &&
          K1(c).shouldRestoreFromSnapshots &&
          s.add(c);
      }
    (s.forEach((u) => {
      zk(e, new Mk(u), o.atomValues.has(u) ? We(o.atomValues.get(u)) : Lk);
    }),
      e.replaceState((u) => ({ ...u, stateID: t.getID() })));
  });
}
function Bk() {
  const e = ip();
  return Fu((t) => Y1(e.current, t), [e]);
}
var J1 = {
  useRecoilSnapshot: jk,
  gotoSnapshot: Y1,
  useGotoRecoilSnapshot: Bk,
  useRecoilTransactionObserver: Fk,
  useTransactionObservation_DEPRECATED: Uk,
  useTransactionSubscription_DEPRECATED: ju,
};
const { peekNodeInfo: Wk } = Dr,
  { useStoreRef: Zk } = tr;
function Hk() {
  const e = Zk();
  return ({ key: t }) => Wk(e.current, e.current.getState().currentTree, t);
}
var Gk = Hk;
const { reactMode: Kk } = sa,
  { RecoilRoot: Qk, useStoreRef: Yk } = tr,
  { useMemo: Jk } = P;
function qk() {
  Kk().mode === "MUTABLE_SOURCE" &&
    console.warn(
      "Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode.",
    );
  const e = Yk().current;
  return Jk(() => {
    function t({ children: n }) {
      return P.createElement(Qk, { store_INTERNAL: e }, n);
    }
    return t;
  }, [e]);
}
var Xk = qk;
const { loadableWithValue: e2 } = oa,
  { initializeNode: t2 } = Dr,
  { DEFAULT_VALUE: n2, getNode: r2 } = Ut,
  {
    copyTreeState: i2,
    getRecoilValueAsLoadable: o2,
    invalidateDownstreams: s2,
    writeLoadableToTreeState: a2,
  } = On;
function Nv(e) {
  return r2(e.key).nodeType === "atom";
}
class l2 {
  constructor(t, n) {
    (de(this, "_store", void 0),
      de(this, "_treeState", void 0),
      de(this, "_changes", void 0),
      de(this, "get", (r) => {
        if (this._changes.has(r.key)) return this._changes.get(r.key);
        if (!Nv(r))
          throw pe("Reading selectors within atomicUpdate is not supported");
        const i = o2(this._store, r, this._treeState);
        if (i.state === "hasValue") return i.contents;
        throw i.state === "hasError"
          ? i.contents
          : pe(
              `Expected Recoil atom ${r.key} to have a value, but it is in a loading state.`,
            );
      }),
      de(this, "set", (r, i) => {
        if (!Nv(r))
          throw pe("Setting selectors within atomicUpdate is not supported");
        if (typeof i == "function") {
          const o = this.get(r);
          this._changes.set(r.key, i(o));
        } else (t2(this._store, r.key, "set"), this._changes.set(r.key, i));
      }),
      de(this, "reset", (r) => {
        this.set(r, n2);
      }),
      (this._store = t),
      (this._treeState = n),
      (this._changes = new Map()));
  }
  newTreeState_INTERNAL() {
    if (this._changes.size === 0) return this._treeState;
    const t = i2(this._treeState);
    for (const [n, r] of this._changes) a2(t, n, e2(r));
    return (s2(this._store, t), t);
  }
}
function u2(e) {
  return (t) => {
    e.replaceState((n) => {
      const r = new l2(e, n);
      return (t(r), r.newTreeState_INTERNAL());
    });
  };
}
var c2 = { atomicUpdater: u2 },
  d2 = c2.atomicUpdater,
  q1 = Object.freeze({ __proto__: null, atomicUpdater: d2 });
function f2(e, t) {
  if (!e) throw new Error(t);
}
var h2 = f2,
  Ko = h2;
const { atomicUpdater: p2 } = q1,
  { batchUpdates: m2 } = Lu,
  { DEFAULT_VALUE: v2 } = Ut,
  { useStoreRef: g2 } = tr,
  { refreshRecoilValue: y2, setRecoilValue: Av } = On,
  { cloneSnapshot: _2 } = Vu,
  { gotoSnapshot: S2 } = J1,
  { useCallback: E2 } = P;
class X1 {}
const w2 = new X1();
function eS(e, t, n, r) {
  let i = w2,
    o;
  if (
    (m2(() => {
      const a =
        "useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";
      if (typeof t != "function") throw pe(a);
      const l = f1(
          {
            ...(r ?? {}),
            set: (c, d) => Av(e, c, d),
            reset: (c) => Av(e, c, v2),
            refresh: (c) => y2(e, c),
            gotoSnapshot: (c) => S2(e, c),
            transact_UNSTABLE: (c) => p2(e)(c),
          },
          {
            snapshot: () => {
              const c = _2(e);
              return ((o = c.retain()), c);
            },
          },
        ),
        u = t(l);
      if (typeof u != "function") throw pe(a);
      i = u(...n);
    }),
    i instanceof X1 && Ko(!1),
    Me(i))
  )
    i = i.finally(() => {
      var a;
      (a = o) === null || a === void 0 || a();
    });
  else {
    var s;
    (s = o) === null || s === void 0 || s();
  }
  return i;
}
function T2(e, t) {
  const n = g2();
  return E2((...r) => eS(n.current, e, r), t != null ? [...t, n] : void 0);
}
var tS = { recoilCallback: eS, useRecoilCallback: T2 };
const { useStoreRef: R2 } = tr,
  { refreshRecoilValue: x2 } = On,
  { useCallback: C2 } = P;
function N2(e) {
  const t = R2();
  return C2(() => {
    const n = t.current;
    x2(n, e);
  }, [e, t]);
}
var A2 = N2;
const { atomicUpdater: P2 } = q1,
  { useStoreRef: k2 } = tr,
  { useMemo: O2 } = P;
function I2(e, t) {
  const n = k2();
  return O2(
    () =>
      (...r) => {
        P2(n.current)((o) => {
          e(o)(...r);
        });
      },
    t != null ? [...t, n] : void 0,
  );
}
var b2 = I2;
class L2 {
  constructor(t) {
    (de(this, "value", void 0), (this.value = t));
  }
}
var D2 = { WrappedValue: L2 },
  M2 = D2.WrappedValue,
  nS = Object.freeze({ __proto__: null, WrappedValue: M2 });
const { isFastRefreshEnabled: z2 } = sa;
class Pv extends Error {}
class V2 {
  constructor(t) {
    var n, r, i;
    (de(this, "_name", void 0),
      de(this, "_numLeafs", void 0),
      de(this, "_root", void 0),
      de(this, "_onHit", void 0),
      de(this, "_onSet", void 0),
      de(this, "_mapNodeValue", void 0),
      (this._name = t == null ? void 0 : t.name),
      (this._numLeafs = 0),
      (this._root = null),
      (this._onHit =
        (n = t == null ? void 0 : t.onHit) !== null && n !== void 0
          ? n
          : () => {}),
      (this._onSet =
        (r = t == null ? void 0 : t.onSet) !== null && r !== void 0
          ? r
          : () => {}),
      (this._mapNodeValue =
        (i = t == null ? void 0 : t.mapNodeValue) !== null && i !== void 0
          ? i
          : (o) => o));
  }
  size() {
    return this._numLeafs;
  }
  root() {
    return this._root;
  }
  get(t, n) {
    var r;
    return (r = this.getLeafNode(t, n)) === null || r === void 0
      ? void 0
      : r.value;
  }
  getLeafNode(t, n) {
    if (this._root == null) return;
    let r = this._root;
    for (; r; ) {
      if ((n == null || n.onNodeVisit(r), r.type === "leaf"))
        return (this._onHit(r), r);
      const i = this._mapNodeValue(t(r.nodeKey));
      r = r.branches.get(i);
    }
  }
  set(t, n, r) {
    const i = () => {
      var o, s, a, l;
      let u, c;
      for (const [_, g] of t) {
        var d, f, h;
        const m = this._root;
        if ((m == null ? void 0 : m.type) === "leaf")
          throw this.invalidCacheError();
        const p = u;
        if (
          ((u = p ? p.branches.get(c) : m),
          (u =
            (d = u) !== null && d !== void 0
              ? d
              : {
                  type: "branch",
                  nodeKey: _,
                  parent: p,
                  branches: new Map(),
                  branchKey: c,
                }),
          u.type !== "branch" || u.nodeKey !== _)
        )
          throw this.invalidCacheError();
        (p == null || p.branches.set(c, u),
          r == null ||
            (f = r.onNodeVisit) === null ||
            f === void 0 ||
            f.call(r, u),
          (c = this._mapNodeValue(g)),
          (this._root = (h = this._root) !== null && h !== void 0 ? h : u));
      }
      const v = u
        ? (o = u) === null || o === void 0
          ? void 0
          : o.branches.get(c)
        : this._root;
      if (v != null && (v.type !== "leaf" || v.branchKey !== c))
        throw this.invalidCacheError();
      const y = { type: "leaf", value: n, parent: u, branchKey: c };
      ((s = u) === null || s === void 0 || s.branches.set(c, y),
        (this._root = (a = this._root) !== null && a !== void 0 ? a : y),
        this._numLeafs++,
        this._onSet(y),
        r == null ||
          (l = r.onNodeVisit) === null ||
          l === void 0 ||
          l.call(r, y));
    };
    try {
      i();
    } catch (o) {
      if (o instanceof Pv) (this.clear(), i());
      else throw o;
    }
  }
  delete(t) {
    const n = this.root();
    if (!n) return !1;
    if (t === n) return ((this._root = null), (this._numLeafs = 0), !0);
    let r = t.parent,
      i = t.branchKey;
    for (; r; ) {
      var o;
      if ((r.branches.delete(i), r === n))
        return (
          r.branches.size === 0
            ? ((this._root = null), (this._numLeafs = 0))
            : this._numLeafs--,
          !0
        );
      if (r.branches.size > 0) break;
      ((i = (o = r) === null || o === void 0 ? void 0 : o.branchKey),
        (r = r.parent));
    }
    for (; r !== n; r = r.parent) if (r == null) return !1;
    return (this._numLeafs--, !0);
  }
  clear() {
    ((this._numLeafs = 0), (this._root = null));
  }
  invalidCacheError() {
    const t = z2()
      ? "Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache."
      : "Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.";
    throw (Wh(t + (this._name != null ? ` - ${this._name}` : "")), new Pv());
  }
}
var $2 = { TreeCache: V2 },
  U2 = $2.TreeCache,
  rS = Object.freeze({ __proto__: null, TreeCache: U2 });
class F2 {
  constructor(t) {
    var n;
    (de(this, "_maxSize", void 0),
      de(this, "_size", void 0),
      de(this, "_head", void 0),
      de(this, "_tail", void 0),
      de(this, "_map", void 0),
      de(this, "_keyMapper", void 0),
      (this._maxSize = t.maxSize),
      (this._size = 0),
      (this._head = null),
      (this._tail = null),
      (this._map = new Map()),
      (this._keyMapper =
        (n = t.mapKey) !== null && n !== void 0 ? n : (r) => r));
  }
  head() {
    return this._head;
  }
  tail() {
    return this._tail;
  }
  size() {
    return this._size;
  }
  maxSize() {
    return this._maxSize;
  }
  has(t) {
    return this._map.has(this._keyMapper(t));
  }
  get(t) {
    const n = this._keyMapper(t),
      r = this._map.get(n);
    if (r) return (this.set(t, r.value), r.value);
  }
  set(t, n) {
    const r = this._keyMapper(t);
    this._map.get(r) && this.delete(t);
    const o = this.head(),
      s = { key: t, right: o, left: null, value: n };
    (o ? (o.left = s) : (this._tail = s),
      this._map.set(r, s),
      (this._head = s),
      this._size++,
      this._maybeDeleteLRU());
  }
  _maybeDeleteLRU() {
    this.size() > this.maxSize() && this.deleteLru();
  }
  deleteLru() {
    const t = this.tail();
    t && this.delete(t.key);
  }
  delete(t) {
    const n = this._keyMapper(t);
    if (!this._size || !this._map.has(n)) return;
    const r = We(this._map.get(n)),
      i = r.right,
      o = r.left;
    (i && (i.left = r.left),
      o && (o.right = r.right),
      r === this.head() && (this._head = i),
      r === this.tail() && (this._tail = o),
      this._map.delete(n),
      this._size--);
  }
  clear() {
    ((this._size = 0),
      (this._head = null),
      (this._tail = null),
      (this._map = new Map()));
  }
}
var j2 = { LRUCache: F2 },
  B2 = j2.LRUCache,
  iS = Object.freeze({ __proto__: null, LRUCache: B2 });
const { LRUCache: W2 } = iS,
  { TreeCache: Z2 } = rS;
function H2({ name: e, maxSize: t, mapNodeValue: n = (r) => r }) {
  const r = new W2({ maxSize: t }),
    i = new Z2({
      name: e,
      mapNodeValue: n,
      onHit: (o) => {
        r.set(o, !0);
      },
      onSet: (o) => {
        const s = r.tail();
        (r.set(o, !0), s && i.size() > t && i.delete(s.key));
      },
    });
  return i;
}
var kv = H2;
function dn(e, t, n) {
  if (typeof e == "string" && !e.includes('"') && !e.includes("\\"))
    return `"${e}"`;
  switch (typeof e) {
    case "undefined":
      return "";
    case "boolean":
      return e ? "true" : "false";
    case "number":
    case "symbol":
      return String(e);
    case "string":
      return JSON.stringify(e);
    case "function":
      if ((t == null ? void 0 : t.allowFunctions) !== !0)
        throw pe("Attempt to serialize function in a Recoil cache key");
      return `__FUNCTION(${e.name})__`;
  }
  if (e === null) return "null";
  if (typeof e != "object") {
    var r;
    return (r = JSON.stringify(e)) !== null && r !== void 0 ? r : "";
  }
  if (Me(e)) return "__PROMISE__";
  if (Array.isArray(e)) return `[${e.map((i, o) => dn(i, t, o.toString()))}]`;
  if (typeof e.toJSON == "function") return dn(e.toJSON(n), t, n);
  if (e instanceof Map) {
    const i = {};
    for (const [o, s] of e) i[typeof o == "string" ? o : dn(o, t)] = s;
    return dn(i, t, n);
  }
  return e instanceof Set
    ? dn(
        Array.from(e).sort((i, o) => dn(i, t).localeCompare(dn(o, t))),
        t,
        n,
      )
    : Symbol !== void 0 &&
        e[Symbol.iterator] != null &&
        typeof e[Symbol.iterator] == "function"
      ? dn(Array.from(e), t, n)
      : `{${Object.keys(e)
          .filter((i) => e[i] !== void 0)
          .sort()
          .map((i) => `${dn(i, t)}:${dn(e[i], t, i)}`)
          .join(",")}}`;
}
function G2(e, t = { allowFunctions: !1 }) {
  return dn(e, t);
}
var Bu = G2;
const { TreeCache: K2 } = rS,
  Da = { equality: "reference", eviction: "keep-all", maxSize: 1 / 0 };
function Q2(
  {
    equality: e = Da.equality,
    eviction: t = Da.eviction,
    maxSize: n = Da.maxSize,
  } = Da,
  r,
) {
  const i = Y2(e);
  return J2(t, n, i, r);
}
function Y2(e) {
  switch (e) {
    case "reference":
      return (t) => t;
    case "value":
      return (t) => Bu(t);
  }
  throw pe(`Unrecognized equality policy ${e}`);
}
function J2(e, t, n, r) {
  switch (e) {
    case "keep-all":
      return new K2({ name: r, mapNodeValue: n });
    case "lru":
      return kv({ name: r, maxSize: We(t), mapNodeValue: n });
    case "most-recent":
      return kv({ name: r, maxSize: 1, mapNodeValue: n });
  }
  throw pe(`Unrecognized eviction policy ${e}`);
}
var q2 = Q2;
function X2(e) {
  return () => null;
}
var eO = { startPerfBlock: X2 };
const {
    isLoadable: tO,
    loadableWithError: Ma,
    loadableWithPromise: nO,
    loadableWithValue: zc,
  } = oa,
  { WrappedValue: oS } = nS,
  { getNodeLoadable: za, peekNodeLoadable: rO, setNodeValue: iO } = Dr,
  { saveDepsToStore: oO } = aa,
  {
    DEFAULT_VALUE: sO,
    getConfigDeletionHandler: aO,
    getNode: lO,
    registerNode: Ov,
  } = Ut,
  { isRecoilValue: uO } = lo,
  { markRecoilValueModified: Iv } = On,
  { retainedByOptionWithDefault: cO } = vi,
  { recoilCallback: dO } = tS,
  { startPerfBlock: fO } = eO;
class sS {}
const zo = new sS(),
  Vo = [],
  Va = new Map(),
  hO = (() => {
    let e = 0;
    return () => e++;
  })();
function aS(e) {
  let t = null;
  const { key: n, get: r, cachePolicy_UNSTABLE: i } = e,
    o = e.set != null ? e.set : void 0,
    s = new Set(),
    a = q2(i ?? { equality: "reference", eviction: "keep-all" }, n),
    l = cO(e.retainedBy_UNSTABLE),
    u = new Map();
  let c = 0;
  function d() {
    return !Ie("recoil_memory_managament_2020") || c > 0;
  }
  function f(w) {
    return (
      w.getState().knownSelectors.add(n),
      c++,
      () => {
        c--;
      }
    );
  }
  function h() {
    return aO(n) !== void 0 && !d();
  }
  function v(w, k, O, B, z) {
    (fe(k, B, z), y(w, O));
  }
  function y(w, k) {
    (q(w, k) && Y(w), g(k, !0));
  }
  function _(w, k) {
    q(w, k) && (We(b(w)).stateVersions.clear(), g(k, !1));
  }
  function g(w, k) {
    const O = Va.get(w);
    if (O != null) {
      for (const B of O) Iv(B, We(t));
      k && Va.delete(w);
    }
  }
  function m(w, k) {
    let O = Va.get(k);
    (O == null && Va.set(k, (O = new Set())), O.add(w));
  }
  function p(w, k, O, B, z, te) {
    return k
      .then((ue) => {
        if (!d()) throw (Y(w), zo);
        const G = zc(ue);
        return (v(w, O, z, G, B), ue);
      })
      .catch((ue) => {
        if (!d()) throw (Y(w), zo);
        if (Me(ue)) return S(w, ue, O, B, z, te);
        const G = Ma(ue);
        throw (v(w, O, z, G, B), ue);
      });
  }
  function S(w, k, O, B, z, te) {
    return k
      .then((ue) => {
        if (!d()) throw (Y(w), zo);
        te.loadingDepKey != null && te.loadingDepPromise === k
          ? O.atomValues.set(te.loadingDepKey, zc(ue))
          : w.getState().knownSelectors.forEach((we) => {
              O.atomValues.delete(we);
            });
        const G = C(w, O);
        if (G && G.state !== "loading") {
          if (((q(w, z) || b(w) == null) && y(w, z), G.state === "hasValue"))
            return G.contents;
          throw G.contents;
        }
        if (!q(w, z)) {
          const we = I(w, O);
          if (we != null) return we.loadingLoadable.contents;
        }
        const [_e, xe] = N(w, O, z);
        if (
          (_e.state !== "loading" && v(w, O, z, _e, xe),
          _e.state === "hasError")
        )
          throw _e.contents;
        return _e.contents;
      })
      .catch((ue) => {
        if (ue instanceof sS) throw zo;
        if (!d()) throw (Y(w), zo);
        const G = Ma(ue);
        throw (v(w, O, z, G, B), ue);
      });
  }
  function T(w, k, O, B) {
    var z, te, ue, G;
    if (
      q(w, B) ||
      k.version ===
        ((z = w.getState()) === null ||
        z === void 0 ||
        (te = z.currentTree) === null ||
        te === void 0
          ? void 0
          : te.version) ||
      k.version ===
        ((ue = w.getState()) === null ||
        ue === void 0 ||
        (G = ue.nextTree) === null ||
        G === void 0
          ? void 0
          : G.version)
    ) {
      var _e, xe, we;
      oO(
        n,
        O,
        w,
        (_e =
          (xe = w.getState()) === null ||
          xe === void 0 ||
          (we = xe.nextTree) === null ||
          we === void 0
            ? void 0
            : we.version) !== null && _e !== void 0
          ? _e
          : w.getState().currentTree.version,
      );
    }
    for (const Ne of O) s.add(Ne);
  }
  function N(w, k, O) {
    const B = fO(n);
    let z = !0,
      te = !0;
    const ue = () => {
      (B(), (te = !1));
    };
    let G,
      _e = !1,
      xe;
    const we = { loadingDepKey: null, loadingDepPromise: null },
      Ne = new Map();
    function Ze({ key: nt }) {
      const rt = za(w, k, nt);
      switch (
        (Ne.set(nt, rt),
        z || (T(w, k, new Set(Ne.keys()), O), _(w, O)),
        rt.state)
      ) {
        case "hasValue":
          return rt.contents;
        case "hasError":
          throw rt.contents;
        case "loading":
          throw (
            (we.loadingDepKey = nt),
            (we.loadingDepPromise = rt.contents),
            rt.contents
          );
      }
      throw pe("Invalid Loadable state");
    }
    const et =
      (nt) =>
      (...rt) => {
        if (te)
          throw pe(
            "Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription.",
          );
        return (t == null && Ko(!1), dO(w, nt, rt, { node: t }));
      };
    try {
      ((G = r({ get: Ze, getCallback: et })),
        (G = uO(G) ? Ze(G) : G),
        tO(G) && (G.state === "hasError" && (_e = !0), (G = G.contents)),
        Me(G) ? (G = p(w, G, k, Ne, O, we).finally(ue)) : ue(),
        (G = G instanceof oS ? G.value : G));
    } catch (nt) {
      ((G = nt),
        Me(G) ? (G = S(w, G, k, Ne, O, we).finally(ue)) : ((_e = !0), ue()));
    }
    return (
      _e ? (xe = Ma(G)) : Me(G) ? (xe = nO(G)) : (xe = zc(G)),
      (z = !1),
      ge(w, O, Ne),
      T(w, k, new Set(Ne.keys()), O),
      [xe, Ne]
    );
  }
  function C(w, k) {
    let O = k.atomValues.get(n);
    if (O != null) return O;
    const B = new Set();
    try {
      O = a.get(
        (te) => (typeof te != "string" && Ko(!1), za(w, k, te).contents),
        {
          onNodeVisit: (te) => {
            te.type === "branch" && te.nodeKey !== n && B.add(te.nodeKey);
          },
        },
      );
    } catch (te) {
      throw pe(`Problem with cache lookup for selector "${n}": ${te.message}`);
    }
    if (O) {
      var z;
      (k.atomValues.set(n, O),
        T(
          w,
          k,
          B,
          (z = b(w)) === null || z === void 0 ? void 0 : z.executionID,
        ));
    }
    return O;
  }
  function A(w, k) {
    const O = C(w, k);
    if (O != null) return (Y(w), O);
    const B = I(w, k);
    if (B != null) {
      var z;
      return (
        ((z = B.loadingLoadable) === null || z === void 0
          ? void 0
          : z.state) === "loading" && m(w, B.executionID),
        B.loadingLoadable
      );
    }
    const te = hO(),
      [ue, G] = N(w, k, te);
    return (
      ue.state === "loading"
        ? (ee(w, te, ue, G, k), m(w, te))
        : (Y(w), fe(k, ue, G)),
      ue
    );
  }
  function I(w, k) {
    const O = P1([
      u.has(w) ? [We(u.get(w))] : [],
      ku(
        Qh(u, ([z]) => z !== w),
        ([, z]) => z,
      ),
    ]);
    function B(z) {
      for (const [te, ue] of z) if (!za(w, k, te).is(ue)) return !0;
      return !1;
    }
    for (const z of O) {
      if (
        z.stateVersions.get(k.version) ||
        !B(z.depValuesDiscoveredSoFarDuringAsyncWork)
      )
        return (z.stateVersions.set(k.version, !0), z);
      z.stateVersions.set(k.version, !1);
    }
  }
  function b(w) {
    return u.get(w);
  }
  function ee(w, k, O, B, z) {
    u.set(w, {
      depValuesDiscoveredSoFarDuringAsyncWork: B,
      executionID: k,
      loadingLoadable: O,
      stateVersions: new Map([[z.version, !0]]),
    });
  }
  function ge(w, k, O) {
    if (q(w, k)) {
      const B = b(w);
      B != null && (B.depValuesDiscoveredSoFarDuringAsyncWork = O);
    }
  }
  function Y(w) {
    u.delete(w);
  }
  function q(w, k) {
    var O;
    return k === ((O = b(w)) === null || O === void 0 ? void 0 : O.executionID);
  }
  function Ae(w) {
    return Array.from(w.entries()).map(([k, O]) => [k, O.contents]);
  }
  function fe(w, k, O) {
    w.atomValues.set(n, k);
    try {
      a.set(Ae(O), k);
    } catch (B) {
      throw pe(`Problem with setting cache for selector "${n}": ${B.message}`);
    }
  }
  function Ee(w) {
    if (Vo.includes(n)) {
      const k = `Recoil selector has circular dependencies: ${Vo.slice(Vo.indexOf(n)).join(" → ")}`;
      return Ma(pe(k));
    }
    Vo.push(n);
    try {
      return w();
    } finally {
      Vo.pop();
    }
  }
  function M(w, k) {
    const O = k.atomValues.get(n);
    return (
      O ??
      a.get((B) => {
        var z;
        return (
          typeof B != "string" && Ko(!1),
          (z = rO(w, k, B)) === null || z === void 0 ? void 0 : z.contents
        );
      })
    );
  }
  function K(w, k) {
    return Ee(() => A(w, k));
  }
  function X(w) {
    w.atomValues.delete(n);
  }
  function J(w, k) {
    t == null && Ko(!1);
    for (const B of s) {
      var O;
      const z = lO(B);
      (O = z.clearCache) === null || O === void 0 || O.call(z, w, k);
    }
    (s.clear(), X(k), a.clear(), Iv(w, t));
  }
  return o != null
    ? (t = Ov({
        key: n,
        nodeType: "selector",
        peek: M,
        get: K,
        set: (k, O, B) => {
          let z = !1;
          const te = new Map();
          function ue({ key: we }) {
            if (z)
              throw pe(
                "Recoil: Async selector sets are not currently supported.",
              );
            const Ne = za(k, O, we);
            if (Ne.state === "hasValue") return Ne.contents;
            if (Ne.state === "loading") {
              const Ze = `Getting value of asynchronous atom or selector "${we}" in a pending state while setting selector "${n}" is not yet supported.`;
              throw pe(Ze);
            } else throw Ne.contents;
          }
          function G(we, Ne) {
            if (z)
              throw pe(
                "Recoil: Async selector sets are not currently supported.",
              );
            const Ze = typeof Ne == "function" ? Ne(ue(we)) : Ne;
            iO(k, O, we.key, Ze).forEach((nt, rt) => te.set(rt, nt));
          }
          function _e(we) {
            G(we, sO);
          }
          const xe = o({ set: G, get: ue, reset: _e }, B);
          if (xe !== void 0)
            throw Me(xe)
              ? pe("Recoil: Async selector sets are not currently supported.")
              : pe("Recoil: selector set should be a void function.");
          return ((z = !0), te);
        },
        init: f,
        invalidate: X,
        clearCache: J,
        shouldDeleteConfigOnRelease: h,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        shouldRestoreFromSnapshots: !1,
        retainedBy: l,
      }))
    : (t = Ov({
        key: n,
        nodeType: "selector",
        peek: M,
        get: K,
        init: f,
        invalidate: X,
        clearCache: J,
        shouldDeleteConfigOnRelease: h,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        shouldRestoreFromSnapshots: !1,
        retainedBy: l,
      }));
}
aS.value = (e) => new oS(e);
var fo = aS;
const {
    isLoadable: pO,
    loadableWithError: Vc,
    loadableWithPromise: $c,
    loadableWithValue: xi,
  } = oa,
  { WrappedValue: lS } = nS,
  { peekNodeInfo: mO } = Dr,
  {
    DEFAULT_VALUE: Hr,
    DefaultValue: ar,
    getConfigDeletionHandler: uS,
    registerNode: vO,
    setConfigDeletionHandler: gO,
  } = Ut,
  { isRecoilValue: yO } = lo,
  {
    getRecoilValueAsLoadable: _O,
    markRecoilValueModified: SO,
    setRecoilValue: bv,
    setRecoilValueLoadable: EO,
  } = On,
  { retainedByOptionWithDefault: wO } = vi,
  $o = (e) => (e instanceof lS ? e.value : e);
function TO(e) {
  const { key: t, persistence_UNSTABLE: n } = e,
    r = wO(e.retainedBy_UNSTABLE);
  let i = 0;
  function o(m) {
    return $c(
      m
        .then((p) => ((s = xi(p)), p))
        .catch((p) => {
          throw ((s = Vc(p)), p);
        }),
    );
  }
  let s = Me(e.default)
    ? o(e.default)
    : pO(e.default)
      ? e.default.state === "loading"
        ? o(e.default.contents)
        : e.default
      : xi($o(e.default));
  s.contents;
  let a;
  const l = new Map();
  function u(m) {
    return m;
  }
  function c(m, p) {
    const S = p
      .then((T) => {
        var N, C;
        return (
          ((C = (
            (N = m.getState().nextTree) !== null && N !== void 0
              ? N
              : m.getState().currentTree
          ).atomValues.get(t)) === null || C === void 0
            ? void 0
            : C.contents) === S && bv(m, g, T),
          T
        );
      })
      .catch((T) => {
        var N, C;
        throw (
          ((C = (
            (N = m.getState().nextTree) !== null && N !== void 0
              ? N
              : m.getState().currentTree
          ).atomValues.get(t)) === null || C === void 0
            ? void 0
            : C.contents) === S && EO(m, g, Vc(T)),
          T
        );
      });
    return S;
  }
  function d(m, p, S) {
    var T;
    i++;
    const N = () => {
      var Y;
      (i--,
        (Y = l.get(m)) === null || Y === void 0 || Y.forEach((q) => q()),
        l.delete(m));
    };
    if ((m.getState().knownAtoms.add(t), s.state === "loading")) {
      const Y = () => {
        var q;
        ((q = m.getState().nextTree) !== null && q !== void 0
          ? q
          : m.getState().currentTree
        ).atomValues.has(t) || SO(m, g);
      };
      s.contents.finally(Y);
    }
    const C = (T = e.effects) !== null && T !== void 0 ? T : e.effects_UNSTABLE;
    if (C != null) {
      let Ee = function (k) {
          if (q && k.key === t) {
            const O = Y;
            return O instanceof ar
              ? f(m, p)
              : Me(O)
                ? $c(O.then((B) => (B instanceof ar ? s.toPromise() : B)))
                : xi(O);
          }
          return _O(m, k);
        },
        M = function (k) {
          return Ee(k).toPromise();
        },
        K = function (k) {
          var O;
          const B = mO(
            m,
            (O = m.getState().nextTree) !== null && O !== void 0
              ? O
              : m.getState().currentTree,
            k.key,
          );
          return q && k.key === t && !(Y instanceof ar)
            ? { ...B, isSet: !0, loadable: Ee(k) }
            : B;
        };
      var b = Ee,
        ee = M,
        ge = K;
      let Y = Hr,
        q = !0,
        Ae = !1,
        fe = null;
      const X = (k) => (O) => {
          if (q) {
            const B = Ee(g),
              z = B.state === "hasValue" ? B.contents : Hr;
            ((Y = typeof O == "function" ? O(z) : O),
              Me(Y) &&
                (Y = Y.then((te) => ((fe = { effect: k, value: te }), te))));
          } else {
            if (Me(O))
              throw pe("Setting atoms to async values is not implemented.");
            (typeof O != "function" && (fe = { effect: k, value: $o(O) }),
              bv(
                m,
                g,
                typeof O == "function"
                  ? (B) => {
                      const z = $o(O(B));
                      return ((fe = { effect: k, value: z }), z);
                    }
                  : $o(O),
              ));
          }
        },
        J = (k) => () => X(k)(Hr),
        w = (k) => (O) => {
          var B;
          const { release: z } = m.subscribeToTransactions((te) => {
            var ue;
            let { currentTree: G, previousTree: _e } = te.getState();
            _e || (_e = G);
            const xe =
              (ue = G.atomValues.get(t)) !== null && ue !== void 0 ? ue : s;
            if (xe.state === "hasValue") {
              var we, Ne, Ze, et;
              const nt = xe.contents,
                rt =
                  (we = _e.atomValues.get(t)) !== null && we !== void 0
                    ? we
                    : s,
                Te = rt.state === "hasValue" ? rt.contents : Hr;
              ((Ne = fe) === null || Ne === void 0 ? void 0 : Ne.effect) !==
                k ||
              ((Ze = fe) === null || Ze === void 0 ? void 0 : Ze.value) !== nt
                ? O(nt, Te, !G.atomValues.has(t))
                : ((et = fe) === null || et === void 0 ? void 0 : et.effect) ===
                    k && (fe = null);
            }
          }, t);
          l.set(m, [...((B = l.get(m)) !== null && B !== void 0 ? B : []), z]);
        };
      for (const k of C)
        try {
          const O = k({
            node: g,
            storeID: m.storeID,
            parentStoreID_UNSTABLE: m.parentStoreID,
            trigger: S,
            setSelf: X(k),
            resetSelf: J(k),
            onSet: w(k),
            getPromise: M,
            getLoadable: Ee,
            getInfo_UNSTABLE: K,
          });
          if (O != null) {
            var A;
            l.set(m, [
              ...((A = l.get(m)) !== null && A !== void 0 ? A : []),
              O,
            ]);
          }
        } catch (O) {
          ((Y = O), (Ae = !0));
        }
      if (((q = !1), !(Y instanceof ar))) {
        var I;
        const k = Ae ? Vc(Y) : Me(Y) ? $c(c(m, Y)) : xi($o(Y));
        (k.contents,
          p.atomValues.set(t, k),
          (I = m.getState().nextTree) === null ||
            I === void 0 ||
            I.atomValues.set(t, k));
      }
    }
    return N;
  }
  function f(m, p) {
    var S, T;
    return (S = (T = p.atomValues.get(t)) !== null && T !== void 0 ? T : a) !==
      null && S !== void 0
      ? S
      : s;
  }
  function h(m, p) {
    if (p.atomValues.has(t)) return We(p.atomValues.get(t));
    if (p.nonvalidatedAtoms.has(t)) {
      if (a != null) return a;
      if (n == null) return s;
      const S = p.nonvalidatedAtoms.get(t),
        T = n.validator(S, Hr);
      return ((a = T instanceof ar ? s : xi(T)), a);
    } else return s;
  }
  function v() {
    a = void 0;
  }
  function y(m, p, S) {
    if (p.atomValues.has(t)) {
      const T = We(p.atomValues.get(t));
      if (T.state === "hasValue" && S === T.contents) return new Map();
    } else if (!p.nonvalidatedAtoms.has(t) && S instanceof ar) return new Map();
    return ((a = void 0), new Map().set(t, xi(S)));
  }
  function _() {
    return uS(t) !== void 0 && i <= 0;
  }
  const g = vO({
    key: t,
    nodeType: "atom",
    peek: f,
    get: h,
    set: y,
    init: d,
    invalidate: v,
    shouldDeleteConfigOnRelease: _,
    dangerouslyAllowMutability: e.dangerouslyAllowMutability,
    persistence_UNSTABLE: e.persistence_UNSTABLE
      ? {
          type: e.persistence_UNSTABLE.type,
          backButton: e.persistence_UNSTABLE.backButton,
        }
      : void 0,
    shouldRestoreFromSnapshots: !0,
    retainedBy: r,
  });
  return g;
}
function op(e) {
  const { ...t } = e,
    n = "default" in e ? e.default : new Promise(() => {});
  return yO(n) ? RO({ ...t, default: n }) : TO({ ...t, default: n });
}
function RO(e) {
  const t = op({
      ...e,
      default: Hr,
      persistence_UNSTABLE:
        e.persistence_UNSTABLE === void 0
          ? void 0
          : {
              ...e.persistence_UNSTABLE,
              validator: (r) =>
                r instanceof ar
                  ? r
                  : We(e.persistence_UNSTABLE).validator(r, Hr),
            },
      effects: e.effects,
      effects_UNSTABLE: e.effects_UNSTABLE,
    }),
    n = fo({
      key: `${e.key}__withFallback`,
      get: ({ get: r }) => {
        const i = r(t);
        return i instanceof ar ? e.default : i;
      },
      set: ({ set: r }, i) => r(t, i),
      cachePolicy_UNSTABLE: { eviction: "most-recent" },
      dangerouslyAllowMutability: e.dangerouslyAllowMutability,
    });
  return (gO(n.key, uS(e.key)), n);
}
op.value = (e) => new lS(e);
var cS = op;
class xO {
  constructor(t) {
    var n;
    (de(this, "_map", void 0),
      de(this, "_keyMapper", void 0),
      (this._map = new Map()),
      (this._keyMapper =
        (n = t == null ? void 0 : t.mapKey) !== null && n !== void 0
          ? n
          : (r) => r));
  }
  size() {
    return this._map.size;
  }
  has(t) {
    return this._map.has(this._keyMapper(t));
  }
  get(t) {
    return this._map.get(this._keyMapper(t));
  }
  set(t, n) {
    this._map.set(this._keyMapper(t), n);
  }
  delete(t) {
    this._map.delete(this._keyMapper(t));
  }
  clear() {
    this._map.clear();
  }
}
var CO = { MapCache: xO },
  NO = CO.MapCache,
  AO = Object.freeze({ __proto__: null, MapCache: NO });
const { LRUCache: Lv } = iS,
  { MapCache: PO } = AO,
  $a = { equality: "reference", eviction: "none", maxSize: 1 / 0 };
function kO({
  equality: e = $a.equality,
  eviction: t = $a.eviction,
  maxSize: n = $a.maxSize,
} = $a) {
  const r = OO(e);
  return IO(t, n, r);
}
function OO(e) {
  switch (e) {
    case "reference":
      return (t) => t;
    case "value":
      return (t) => Bu(t);
  }
  throw pe(`Unrecognized equality policy ${e}`);
}
function IO(e, t, n) {
  switch (e) {
    case "keep-all":
      return new PO({ mapKey: n });
    case "lru":
      return new Lv({ mapKey: n, maxSize: We(t) });
    case "most-recent":
      return new Lv({ mapKey: n, maxSize: 1 });
  }
  throw pe(`Unrecognized eviction policy ${e}`);
}
var dS = kO;
const { setConfigDeletionHandler: bO } = Ut;
function LO(e) {
  var t, n;
  const r = dS({
    equality:
      (t =
        (n = e.cachePolicyForParams_UNSTABLE) === null || n === void 0
          ? void 0
          : n.equality) !== null && t !== void 0
        ? t
        : "value",
    eviction: "keep-all",
  });
  return (i) => {
    var o, s;
    const a = r.get(i);
    if (a != null) return a;
    const { cachePolicyForParams_UNSTABLE: l, ...u } = e,
      c = "default" in e ? e.default : new Promise(() => {}),
      d = cS({
        ...u,
        key: `${e.key}__${(o = Bu(i)) !== null && o !== void 0 ? o : "void"}`,
        default: typeof c == "function" ? c(i) : c,
        retainedBy_UNSTABLE:
          typeof e.retainedBy_UNSTABLE == "function"
            ? e.retainedBy_UNSTABLE(i)
            : e.retainedBy_UNSTABLE,
        effects:
          typeof e.effects == "function"
            ? e.effects(i)
            : typeof e.effects_UNSTABLE == "function"
              ? e.effects_UNSTABLE(i)
              : (s = e.effects) !== null && s !== void 0
                ? s
                : e.effects_UNSTABLE,
      });
    return (
      r.set(i, d),
      bO(d.key, () => {
        r.delete(i);
      }),
      d
    );
  };
}
var DO = LO;
const { setConfigDeletionHandler: MO } = Ut;
let zO = 0;
function VO(e) {
  var t, n;
  const r = dS({
    equality:
      (t =
        (n = e.cachePolicyForParams_UNSTABLE) === null || n === void 0
          ? void 0
          : n.equality) !== null && t !== void 0
        ? t
        : "value",
    eviction: "keep-all",
  });
  return (i) => {
    var o;
    let s;
    try {
      s = r.get(i);
    } catch (f) {
      throw pe(`Problem with cache lookup for selector ${e.key}: ${f.message}`);
    }
    if (s != null) return s;
    const a = `${e.key}__selectorFamily/${(o = Bu(i, { allowFunctions: !0 })) !== null && o !== void 0 ? o : "void"}/${zO++}`,
      l = (f) => e.get(i)(f),
      u = e.cachePolicy_UNSTABLE,
      c =
        typeof e.retainedBy_UNSTABLE == "function"
          ? e.retainedBy_UNSTABLE(i)
          : e.retainedBy_UNSTABLE;
    let d;
    if (e.set != null) {
      const f = e.set;
      d = fo({
        key: a,
        get: l,
        set: (v, y) => f(i)(v, y),
        cachePolicy_UNSTABLE: u,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: c,
      });
    } else
      d = fo({
        key: a,
        get: l,
        cachePolicy_UNSTABLE: u,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: c,
      });
    return (
      r.set(i, d),
      MO(d.key, () => {
        r.delete(i);
      }),
      d
    );
  };
}
var Mr = VO;
const $O = Mr({
  key: "__constant",
  get: (e) => () => e,
  cachePolicyForParams_UNSTABLE: { equality: "reference" },
});
function UO(e) {
  return $O(e);
}
var FO = UO;
const jO = Mr({
  key: "__error",
  get: (e) => () => {
    throw pe(e);
  },
  cachePolicyForParams_UNSTABLE: { equality: "reference" },
});
function BO(e) {
  return jO(e);
}
var WO = BO;
function ZO(e) {
  return e;
}
var HO = ZO;
const {
  loadableWithError: fS,
  loadableWithPromise: hS,
  loadableWithValue: pS,
} = oa;
function Wu(e, t) {
  const n = Array(t.length).fill(void 0),
    r = Array(t.length).fill(void 0);
  for (const [i, o] of t.entries())
    try {
      n[i] = e(o);
    } catch (s) {
      r[i] = s;
    }
  return [n, r];
}
function GO(e) {
  return e != null && !Me(e);
}
function Zu(e) {
  return Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map((t) => e[t]);
}
function cf(e, t) {
  return Array.isArray(e)
    ? t
    : Object.getOwnPropertyNames(e).reduce(
        (n, r, i) => ({ ...n, [r]: t[i] }),
        {},
      );
}
function qi(e, t, n) {
  const r = n.map((i, o) => (i == null ? pS(t[o]) : Me(i) ? hS(i) : fS(i)));
  return cf(e, r);
}
function KO(e, t) {
  return t.map((n, r) => (n === void 0 ? e[r] : n));
}
const QO = Mr({
    key: "__waitForNone",
    get:
      (e) =>
      ({ get: t }) => {
        const n = Zu(e),
          [r, i] = Wu(t, n);
        return qi(e, r, i);
      },
    dangerouslyAllowMutability: !0,
  }),
  YO = Mr({
    key: "__waitForAny",
    get:
      (e) =>
      ({ get: t }) => {
        const n = Zu(e),
          [r, i] = Wu(t, n);
        return i.some((o) => !Me(o))
          ? qi(e, r, i)
          : new Promise((o) => {
              for (const [s, a] of i.entries())
                Me(a) &&
                  a
                    .then((l) => {
                      ((r[s] = l), (i[s] = void 0), o(qi(e, r, i)));
                    })
                    .catch((l) => {
                      ((i[s] = l), o(qi(e, r, i)));
                    });
            });
      },
    dangerouslyAllowMutability: !0,
  }),
  JO = Mr({
    key: "__waitForAll",
    get:
      (e) =>
      ({ get: t }) => {
        const n = Zu(e),
          [r, i] = Wu(t, n);
        if (i.every((s) => s == null)) return cf(e, r);
        const o = i.find(GO);
        if (o != null) throw o;
        return Promise.all(i).then((s) => cf(e, KO(r, s)));
      },
    dangerouslyAllowMutability: !0,
  }),
  qO = Mr({
    key: "__waitForAllSettled",
    get:
      (e) =>
      ({ get: t }) => {
        const n = Zu(e),
          [r, i] = Wu(t, n);
        return i.every((o) => !Me(o))
          ? qi(e, r, i)
          : Promise.all(
              i.map((o, s) =>
                Me(o)
                  ? o
                      .then((a) => {
                        ((r[s] = a), (i[s] = void 0));
                      })
                      .catch((a) => {
                        ((r[s] = void 0), (i[s] = a));
                      })
                  : null,
              ),
            ).then(() => qi(e, r, i));
      },
    dangerouslyAllowMutability: !0,
  }),
  XO = Mr({
    key: "__noWait",
    get:
      (e) =>
      ({ get: t }) => {
        try {
          return fo.value(pS(t(e)));
        } catch (n) {
          return fo.value(Me(n) ? hS(n) : fS(n));
        }
      },
    dangerouslyAllowMutability: !0,
  });
var eI = {
  waitForNone: QO,
  waitForAny: YO,
  waitForAll: JO,
  waitForAllSettled: qO,
  noWait: XO,
};
const { RecoilLoadable: tI } = oa,
  { DefaultValue: nI } = Ut,
  { RecoilRoot: rI, useRecoilStoreID: iI } = tr,
  { isRecoilValue: oI } = lo,
  { retentionZone: sI } = Iu,
  { freshSnapshot: aI } = Vu,
  {
    useRecoilState: lI,
    useRecoilState_TRANSITION_SUPPORT_UNSTABLE: uI,
    useRecoilStateLoadable: cI,
    useRecoilValue: dI,
    useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: fI,
    useRecoilValueLoadable: hI,
    useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: pI,
    useResetRecoilState: mI,
    useSetRecoilState: vI,
  } = Ck,
  {
    useGotoRecoilSnapshot: gI,
    useRecoilSnapshot: yI,
    useRecoilTransactionObserver: _I,
  } = J1,
  { useRecoilCallback: SI } = tS,
  {
    noWait: EI,
    waitForAll: wI,
    waitForAllSettled: TI,
    waitForAny: RI,
    waitForNone: xI,
  } = eI;
var CI = {
    DefaultValue: nI,
    isRecoilValue: oI,
    RecoilLoadable: tI,
    RecoilEnv: Eo,
    RecoilRoot: rI,
    useRecoilStoreID: iI,
    useRecoilBridgeAcrossReactRoots_UNSTABLE: Xk,
    atom: cS,
    selector: fo,
    atomFamily: DO,
    selectorFamily: Mr,
    constSelector: FO,
    errorSelector: WO,
    readOnlySelector: HO,
    noWait: EI,
    waitForNone: xI,
    waitForAny: RI,
    waitForAll: wI,
    waitForAllSettled: TI,
    useRecoilValue: dI,
    useRecoilValueLoadable: hI,
    useRecoilState: lI,
    useRecoilStateLoadable: cI,
    useSetRecoilState: vI,
    useResetRecoilState: mI,
    useGetRecoilValueInfo_UNSTABLE: Gk,
    useRecoilRefresher_UNSTABLE: A2,
    useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: pI,
    useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: fI,
    useRecoilState_TRANSITION_SUPPORT_UNSTABLE: uI,
    useRecoilCallback: SI,
    useRecoilTransaction_UNSTABLE: b2,
    useGotoRecoilSnapshot: gI,
    useRecoilSnapshot: yI,
    useRecoilTransactionObserver_UNSTABLE: _I,
    snapshot_UNSTABLE: aI,
    useRetain: ep,
    retentionZone: sI,
  },
  NI = CI.RecoilRoot;
const mS = x.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Hu = x.createContext({}),
  sp = x.createContext(null),
  Gu = typeof document < "u",
  AI = Gu ? x.useLayoutEffect : x.useEffect,
  vS = x.createContext({ strict: !1 }),
  ap = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
  PI = "framerAppearId",
  gS = "data-" + ap(PI);
function kI(e, t, n, r) {
  const { visualElement: i } = x.useContext(Hu),
    o = x.useContext(vS),
    s = x.useContext(sp),
    a = x.useContext(mS).reducedMotion,
    l = x.useRef();
  ((r = r || o.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: a,
      })));
  const u = l.current;
  x.useInsertionEffect(() => {
    u && u.update(n, s);
  });
  const c = x.useRef(!!(n[gS] && !window.HandoffComplete));
  return (
    AI(() => {
      u &&
        (u.render(),
        c.current && u.animationState && u.animationState.animateChanges());
    }),
    x.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        c.current && ((c.current = !1), (window.HandoffComplete = !0)));
    }),
    u
  );
}
function Fi(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function OI(e, t, n) {
  return x.useCallback(
    (r) => {
      (r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Fi(n) && (n.current = r)));
    },
    [t],
  );
}
function bs(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Ku(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const lp = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  up = ["initial", ...lp];
function Qu(e) {
  return Ku(e.animate) || up.some((t) => bs(e[t]));
}
function yS(e) {
  return !!(Qu(e) || e.variants);
}
function II(e, t) {
  if (Qu(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || bs(n) ? n : void 0,
      animate: bs(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function bI(e) {
  const { initial: t, animate: n } = II(e, x.useContext(Hu));
  return x.useMemo(() => ({ initial: t, animate: n }), [Dv(t), Dv(n)]);
}
function Dv(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Mv = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Ls = {};
for (const e in Mv) Ls[e] = { isEnabled: (t) => Mv[e].some((n) => !!t[n]) };
function LI(e) {
  for (const t in e) Ls[t] = { ...Ls[t], ...e[t] };
}
const _S = x.createContext({}),
  SS = x.createContext({}),
  DI = Symbol.for("motionComponentSymbol");
function MI({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && LI(e);
  function o(a, l) {
    let u;
    const c = { ...x.useContext(mS), ...a, layoutId: zI(a) },
      { isStatic: d } = c,
      f = bI(a),
      h = r(a, d);
    if (!d && Gu) {
      f.visualElement = kI(i, h, c, t);
      const v = x.useContext(SS),
        y = x.useContext(vS).strict;
      f.visualElement && (u = f.visualElement.loadFeatures(c, y, e, v));
    }
    return x.createElement(
      Hu.Provider,
      { value: f },
      u && f.visualElement
        ? x.createElement(u, { visualElement: f.visualElement, ...c })
        : null,
      n(i, a, OI(h, f.visualElement, l), h, d, f.visualElement),
    );
  }
  const s = x.forwardRef(o);
  return ((s[DI] = i), s);
}
function zI({ layoutId: e }) {
  const t = x.useContext(_S).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function VI(e) {
  function t(r, i = {}) {
    return MI(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
const $I = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function cp(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!($I.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const jl = {};
function UI(e) {
  Object.assign(jl, e);
}
const da = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  gi = new Set(da);
function ES(e, { layout: t, layoutId: n }) {
  return (
    gi.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!jl[e] || e === "opacity"))
  );
}
const $t = (e) => !!(e && e.getVelocity),
  FI = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  jI = da.length;
function BI(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  i,
) {
  let o = "";
  for (let s = 0; s < jI; s++) {
    const a = da[s];
    if (e[a] !== void 0) {
      const l = FI[a] || a;
      o += `${l}(${e[a]}) `;
    }
  }
  return (
    t && !e.z && (o += "translateZ(0)"),
    (o = o.trim()),
    i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"),
    o
  );
}
const wS = (e) => (t) => typeof t == "string" && t.startsWith(e),
  TS = wS("--"),
  df = wS("var(--"),
  WI =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  ZI = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Nr = (e, t, n) => Math.min(Math.max(n, e), t),
  yi = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  us = { ...yi, transform: (e) => Nr(0, 1, e) },
  Ua = { ...yi, default: 1 },
  cs = (e) => Math.round(e * 1e5) / 1e5,
  Yu = /(-)?([\d]*\.?[\d])+/g,
  RS =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  HI =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function fa(e) {
  return typeof e == "string";
}
const ha = (e) => ({
    test: (t) => fa(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  ir = ha("deg"),
  An = ha("%"),
  re = ha("px"),
  GI = ha("vh"),
  KI = ha("vw"),
  zv = {
    ...An,
    parse: (e) => An.parse(e) / 100,
    transform: (e) => An.transform(e * 100),
  },
  Vv = { ...yi, transform: Math.round },
  xS = {
    borderWidth: re,
    borderTopWidth: re,
    borderRightWidth: re,
    borderBottomWidth: re,
    borderLeftWidth: re,
    borderRadius: re,
    radius: re,
    borderTopLeftRadius: re,
    borderTopRightRadius: re,
    borderBottomRightRadius: re,
    borderBottomLeftRadius: re,
    width: re,
    maxWidth: re,
    height: re,
    maxHeight: re,
    size: re,
    top: re,
    right: re,
    bottom: re,
    left: re,
    padding: re,
    paddingTop: re,
    paddingRight: re,
    paddingBottom: re,
    paddingLeft: re,
    margin: re,
    marginTop: re,
    marginRight: re,
    marginBottom: re,
    marginLeft: re,
    rotate: ir,
    rotateX: ir,
    rotateY: ir,
    rotateZ: ir,
    scale: Ua,
    scaleX: Ua,
    scaleY: Ua,
    scaleZ: Ua,
    skew: ir,
    skewX: ir,
    skewY: ir,
    distance: re,
    translateX: re,
    translateY: re,
    translateZ: re,
    x: re,
    y: re,
    z: re,
    perspective: re,
    transformPerspective: re,
    opacity: us,
    originX: zv,
    originY: zv,
    originZ: re,
    zIndex: Vv,
    fillOpacity: us,
    strokeOpacity: us,
    numOctaves: Vv,
  };
function dp(e, t, n, r) {
  const { style: i, vars: o, transform: s, transformOrigin: a } = e;
  let l = !1,
    u = !1,
    c = !0;
  for (const d in t) {
    const f = t[d];
    if (TS(d)) {
      o[d] = f;
      continue;
    }
    const h = xS[d],
      v = ZI(f, h);
    if (gi.has(d)) {
      if (((l = !0), (s[d] = v), !c)) continue;
      f !== (h.default || 0) && (c = !1);
    } else d.startsWith("origin") ? ((u = !0), (a[d] = v)) : (i[d] = v);
  }
  if (
    (t.transform ||
      (l || r
        ? (i.transform = BI(e.transform, n, c, r))
        : i.transform && (i.transform = "none")),
    u)
  ) {
    const { originX: d = "50%", originY: f = "50%", originZ: h = 0 } = a;
    i.transformOrigin = `${d} ${f} ${h}`;
  }
}
const fp = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function CS(e, t, n) {
  for (const r in t) !$t(t[r]) && !ES(r, n) && (e[r] = t[r]);
}
function QI({ transformTemplate: e }, t, n) {
  return x.useMemo(() => {
    const r = fp();
    return (
      dp(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function YI(e, t, n) {
  const r = e.style || {},
    i = {};
  return (
    CS(i, r, e),
    Object.assign(i, QI(e, t, n)),
    e.transformValues ? e.transformValues(i) : i
  );
}
function JI(e, t, n) {
  const r = {},
    i = YI(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
const qI = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Bl(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    qI.has(e)
  );
}
let NS = (e) => !Bl(e);
function XI(e) {
  e && (NS = (t) => (t.startsWith("on") ? !Bl(t) : e(t)));
}
try {
  XI(require("@emotion/is-prop-valid").default);
} catch {}
function eb(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((NS(i) ||
        (n === !0 && Bl(i)) ||
        (!t && !Bl(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function $v(e, t, n) {
  return typeof e == "string" ? e : re.transform(t + n * e);
}
function tb(e, t, n) {
  const r = $v(t, e.x, e.width),
    i = $v(n, e.y, e.height);
  return `${r} ${i}`;
}
const nb = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  rb = { offset: "strokeDashoffset", array: "strokeDasharray" };
function ib(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? nb : rb;
  e[o.offset] = re.transform(-r);
  const s = re.transform(t),
    a = re.transform(n);
  e[o.array] = `${s} ${a}`;
}
function hp(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  d,
  f,
) {
  if ((dp(e, u, c, f), d)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  ((e.attrs = e.style), (e.style = {}));
  const { attrs: h, style: v, dimensions: y } = e;
  (h.transform && (y && (v.transform = h.transform), delete h.transform),
    y &&
      (i !== void 0 || o !== void 0 || v.transform) &&
      (v.transformOrigin = tb(
        y,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5,
      )),
    t !== void 0 && (h.x = t),
    n !== void 0 && (h.y = n),
    r !== void 0 && (h.scale = r),
    s !== void 0 && ib(h, s, a, l, !1));
}
const AS = () => ({ ...fp(), attrs: {} }),
  pp = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function ob(e, t, n, r) {
  const i = x.useMemo(() => {
    const o = AS();
    return (
      hp(o, t, { enableHardwareAcceleration: !1 }, pp(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    (CS(o, e.style, e), (i.style = { ...o, ...i.style }));
  }
  return i;
}
function sb(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const l = (cp(n) ? ob : JI)(r, o, s, n),
      c = { ...eb(r, typeof n == "string", e), ...l, ref: i },
      { children: d } = r,
      f = x.useMemo(() => ($t(d) ? d.get() : d), [d]);
    return x.createElement(n, { ...c, children: f });
  };
}
function PS(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const kS = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function OS(e, t, n, r) {
  PS(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(kS.has(i) ? i : ap(i), t.attrs[i]);
}
function mp(e, t) {
  const { style: n } = e,
    r = {};
  for (const i in n)
    ($t(n[i]) || (t.style && $t(t.style[i])) || ES(i, e)) && (r[i] = n[i]);
  return r;
}
function IS(e, t) {
  const n = mp(e, t);
  for (const r in e)
    if ($t(e[r]) || $t(t[r])) {
      const i =
        da.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[i] = e[r];
    }
  return n;
}
function vp(e, t, n, r = {}, i = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
  );
}
function ab(e) {
  const t = x.useRef(null);
  return (t.current === null && (t.current = e()), t.current);
}
const Wl = (e) => Array.isArray(e),
  lb = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  ub = (e) => (Wl(e) ? e[e.length - 1] || 0 : e);
function sl(e) {
  const t = $t(e) ? e.get() : e;
  return lb(t) ? t.toValue() : t;
}
function cb(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  o,
) {
  const s = { latestValues: db(r, i, o, e), renderState: t() };
  return (n && (s.mount = (a) => n(r, a, s)), s);
}
const bS = (e) => (t, n) => {
  const r = x.useContext(Hu),
    i = x.useContext(sp),
    o = () => cb(e, t, r, i);
  return n ? o() : ab(o);
};
function db(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const f in o) i[f] = sl(o[f]);
  let { initial: s, animate: a } = e;
  const l = Qu(e),
    u = yS(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || s === !1;
  const d = c ? a : s;
  return (
    d &&
      typeof d != "boolean" &&
      !Ku(d) &&
      (Array.isArray(d) ? d : [d]).forEach((h) => {
        const v = vp(e, h);
        if (!v) return;
        const { transitionEnd: y, transition: _, ...g } = v;
        for (const m in g) {
          let p = g[m];
          if (Array.isArray(p)) {
            const S = c ? p.length - 1 : 0;
            p = p[S];
          }
          p !== null && (i[m] = p);
        }
        for (const m in y) i[m] = y[m];
      }),
    i
  );
}
const Xe = (e) => e;
class Uv {
  constructor() {
    ((this.order = []), (this.scheduled = new Set()));
  }
  add(t) {
    if (!this.scheduled.has(t))
      return (this.scheduled.add(t), this.order.push(t), !0);
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    ((this.order.length = 0), this.scheduled.clear());
  }
}
function fb(e) {
  let t = new Uv(),
    n = new Uv(),
    r = 0,
    i = !1,
    o = !1;
  const s = new WeakSet(),
    a = {
      schedule: (l, u = !1, c = !1) => {
        const d = c && i,
          f = d ? t : n;
        return (u && s.add(l), f.add(l) && d && i && (r = t.order.length), l);
      },
      cancel: (l) => {
        (n.remove(l), s.delete(l));
      },
      process: (l) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let u = 0; u < r; u++) {
            const c = t.order[u];
            (c(l), s.has(c) && (a.schedule(c), e()));
          }
        ((i = !1), o && ((o = !1), a.process(l)));
      },
    };
  return a;
}
const Fa = ["prepare", "read", "update", "preRender", "render", "postRender"],
  hb = 40;
function pb(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = Fa.reduce((d, f) => ((d[f] = fb(() => (n = !0))), d), {}),
    s = (d) => o[d].process(i),
    a = () => {
      const d = performance.now();
      ((n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(d - i.timestamp, hb), 1)),
        (i.timestamp = d),
        (i.isProcessing = !0),
        Fa.forEach(s),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(a)));
    },
    l = () => {
      ((n = !0), (r = !0), i.isProcessing || e(a));
    };
  return {
    schedule: Fa.reduce((d, f) => {
      const h = o[f];
      return (
        (d[f] = (v, y = !1, _ = !1) => (n || l(), h.schedule(v, y, _))),
        d
      );
    }, {}),
    cancel: (d) => Fa.forEach((f) => o[f].cancel(d)),
    state: i,
    steps: o,
  };
}
const {
    schedule: Ve,
    cancel: Jn,
    state: yt,
    steps: Uc,
  } = pb(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Xe, !0),
  mb = {
    useVisualState: bS({
      scrapeMotionValuesFromProps: IS,
      createRenderState: AS,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        (Ve.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          Ve.render(() => {
            (hp(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              pp(t.tagName),
              e.transformTemplate,
            ),
              OS(t, n));
          }));
      },
    }),
  },
  vb = {
    useVisualState: bS({
      scrapeMotionValuesFromProps: mp,
      createRenderState: fp,
    }),
  };
function gb(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(cp(e) ? mb : vb),
    preloadedFeatures: n,
    useRender: sb(t),
    createVisualElement: r,
    Component: e,
  };
}
function Un(e, t, n, r = { passive: !0 }) {
  return (e.addEventListener(t, n, r), () => e.removeEventListener(t, n));
}
const LS = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function Ju(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const yb = (e) => (t) => LS(t) && e(t, Ju(t));
function jn(e, t, n, r) {
  return Un(e, t, yb(n), r);
}
const _b = (e, t) => (n) => t(e(n)),
  Tr = (...e) => e.reduce(_b);
function DS(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const Fv = DS("dragHorizontal"),
  jv = DS("dragVertical");
function MS(e) {
  let t = !1;
  if (e === "y") t = jv();
  else if (e === "x") t = Fv();
  else {
    const n = Fv(),
      r = jv();
    n && r
      ? (t = () => {
          (n(), r());
        })
      : (n && n(), r && r());
  }
  return t;
}
function zS() {
  const e = MS(!0);
  return e ? (e(), !1) : !0;
}
class zr {
  constructor(t) {
    ((this.isMounted = !1), (this.node = t));
  }
  update() {}
}
function Bv(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    i = (o, s) => {
      if (o.pointerType === "touch" || zS()) return;
      const a = e.getProps();
      (e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t),
        a[r] && Ve.update(() => a[r](o, s)));
    };
  return jn(e.current, n, i, { passive: !e.getProps()[r] });
}
class Sb extends zr {
  mount() {
    this.unmount = Tr(Bv(this.node, !0), Bv(this.node, !1));
  }
  unmount() {}
}
class Eb extends zr {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Tr(
      Un(this.node.current, "focus", () => this.onFocus()),
      Un(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
const VS = (e, t) => (t ? (e === t ? !0 : VS(e, t.parentElement)) : !1);
function Fc(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Ju(n));
}
class wb extends zr {
  constructor() {
    (super(...arguments),
      (this.removeStartListeners = Xe),
      (this.removeEndListeners = Xe),
      (this.removeAccessibleListeners = Xe),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          o = jn(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const {
                onTap: u,
                onTapCancel: c,
                globalTapTarget: d,
              } = this.node.getProps();
              Ve.update(() => {
                !d && !VS(this.node.current, a.target)
                  ? c && c(a, l)
                  : u && u(a, l);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) },
          ),
          s = jn(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        ((this.removeEndListeners = Tr(o, s)), this.startPress(t, n));
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const s = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                Fc("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && Ve.update(() => c(l, u));
                });
            };
            (this.removeEndListeners(),
              (this.removeEndListeners = Un(this.node.current, "keyup", s)),
              Fc("down", (a, l) => {
                this.startPress(a, l);
              }));
          },
          n = Un(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Fc("cancel", (o, s) => this.cancelPress(o, s));
          },
          i = Un(this.node.current, "blur", r);
        this.removeAccessibleListeners = Tr(n, i);
      }));
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    (i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && Ve.update(() => r(t, n)));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !zS()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && Ve.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = jn(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) },
      ),
      r = Un(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Tr(n, r);
  }
  unmount() {
    (this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners());
  }
}
const ff = new WeakMap(),
  jc = new WeakMap(),
  Tb = (e) => {
    const t = ff.get(e.target);
    t && t(e);
  },
  Rb = (e) => {
    e.forEach(Tb);
  };
function xb({ root: e, ...t }) {
  const n = e || document;
  jc.has(n) || jc.set(n, {});
  const r = jc.get(n),
    i = JSON.stringify(t);
  return (
    r[i] || (r[i] = new IntersectionObserver(Rb, { root: e, ...t })),
    r[i]
  );
}
function Cb(e, t, n) {
  const r = xb(t);
  return (
    ff.set(e, n),
    r.observe(e),
    () => {
      (ff.delete(e), r.unobserve(e));
    }
  );
}
const Nb = { some: 0, all: 1 };
class Ab extends zr {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : Nb[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        (u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u));
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          f = u ? c : d;
        f && f(l);
      };
    return Cb(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Pb(t, n)) && this.startObserver();
  }
  unmount() {}
}
function Pb({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const kb = {
  inView: { Feature: Ab },
  tap: { Feature: wb },
  focus: { Feature: Eb },
  hover: { Feature: Sb },
};
function $S(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function Ob(e) {
  const t = {};
  return (e.values.forEach((n, r) => (t[r] = n.get())), t);
}
function Ib(e) {
  const t = {};
  return (e.values.forEach((n, r) => (t[r] = n.getVelocity())), t);
}
function qu(e, t, n) {
  const r = e.getProps();
  return vp(r, t, n !== void 0 ? n : r.custom, Ob(e), Ib(e));
}
let bb = Xe,
  gp = Xe;
const Rr = (e) => e * 1e3,
  Bn = (e) => e / 1e3,
  Lb = { current: !1 },
  US = (e) => Array.isArray(e) && typeof e[0] == "number";
function FS(e) {
  return !!(
    !e ||
    (typeof e == "string" && jS[e]) ||
    US(e) ||
    (Array.isArray(e) && e.every(FS))
  );
}
const Qo = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  jS = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Qo([0, 0.65, 0.55, 1]),
    circOut: Qo([0.55, 0, 1, 0.45]),
    backIn: Qo([0.31, 0.01, 0.66, -0.59]),
    backOut: Qo([0.33, 1.53, 0.69, 0.99]),
  };
function BS(e) {
  if (e) return US(e) ? Qo(e) : Array.isArray(e) ? e.map(BS) : jS[e];
}
function Db(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: a,
    times: l,
  } = {},
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = BS(a);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
function Mb(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const WS = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  zb = 1e-7,
  Vb = 12;
function $b(e, t, n, r, i) {
  let o,
    s,
    a = 0;
  do ((s = t + (n - t) / 2), (o = WS(s, r, i) - e), o > 0 ? (n = s) : (t = s));
  while (Math.abs(o) > zb && ++a < Vb);
  return s;
}
function pa(e, t, n, r) {
  if (e === t && n === r) return Xe;
  const i = (o) => $b(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : WS(i(o), t, r));
}
const Ub = pa(0.42, 0, 1, 1),
  Fb = pa(0, 0, 0.58, 1),
  ZS = pa(0.42, 0, 0.58, 1),
  jb = (e) => Array.isArray(e) && typeof e[0] != "number",
  HS = (e) => (t) => (t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2),
  GS = (e) => (t) => 1 - e(1 - t),
  yp = (e) => 1 - Math.sin(Math.acos(e)),
  KS = GS(yp),
  Bb = HS(yp),
  QS = pa(0.33, 1.53, 0.69, 0.99),
  _p = GS(QS),
  Wb = HS(_p),
  Zb = (e) =>
    (e *= 2) < 1 ? 0.5 * _p(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Hb = {
    linear: Xe,
    easeIn: Ub,
    easeInOut: ZS,
    easeOut: Fb,
    circIn: yp,
    circInOut: Bb,
    circOut: KS,
    backIn: _p,
    backInOut: Wb,
    backOut: QS,
    anticipate: Zb,
  },
  Wv = (e) => {
    if (Array.isArray(e)) {
      gp(e.length === 4);
      const [t, n, r, i] = e;
      return pa(t, n, r, i);
    } else if (typeof e == "string") return Hb[e];
    return e;
  },
  Sp = (e, t) => (n) =>
    !!(
      (fa(n) && HI.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  YS = (e, t, n) => (r) => {
    if (!fa(r)) return r;
    const [i, o, s, a] = r.match(Yu);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  Gb = (e) => Nr(0, 255, e),
  Bc = { ...yi, transform: (e) => Math.round(Gb(e)) },
  Jr = {
    test: Sp("rgb", "red"),
    parse: YS("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Bc.transform(e) +
      ", " +
      Bc.transform(t) +
      ", " +
      Bc.transform(n) +
      ", " +
      cs(us.transform(r)) +
      ")",
  };
function Kb(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const hf = { test: Sp("#"), parse: Kb, transform: Jr.transform },
  ji = {
    test: Sp("hsl", "hue"),
    parse: YS("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      An.transform(cs(t)) +
      ", " +
      An.transform(cs(n)) +
      ", " +
      cs(us.transform(r)) +
      ")",
  },
  Tt = {
    test: (e) => Jr.test(e) || hf.test(e) || ji.test(e),
    parse: (e) =>
      Jr.test(e) ? Jr.parse(e) : ji.test(e) ? ji.parse(e) : hf.parse(e),
    transform: (e) =>
      fa(e) ? e : e.hasOwnProperty("red") ? Jr.transform(e) : ji.transform(e),
  },
  Qe = (e, t, n) => -n * e + n * t + e;
function Wc(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  );
}
function Qb({ hue: e, saturation: t, lightness: n, alpha: r }) {
  ((e /= 360), (t /= 100), (n /= 100));
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    ((i = Wc(l, a, e + 1 / 3)), (o = Wc(l, a, e)), (s = Wc(l, a, e - 1 / 3)));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
const Zc = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  Yb = [hf, Jr, ji],
  Jb = (e) => Yb.find((t) => t.test(e));
function Zv(e) {
  const t = Jb(e);
  let n = t.parse(e);
  return (t === ji && (n = Qb(n)), n);
}
const JS = (e, t) => {
  const n = Zv(e),
    r = Zv(t),
    i = { ...n };
  return (o) => (
    (i.red = Zc(n.red, r.red, o)),
    (i.green = Zc(n.green, r.green, o)),
    (i.blue = Zc(n.blue, r.blue, o)),
    (i.alpha = Qe(n.alpha, r.alpha, o)),
    Jr.transform(i)
  );
};
function qb(e) {
  var t, n;
  return (
    isNaN(e) &&
    fa(e) &&
    (((t = e.match(Yu)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(RS)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const qS = { regex: WI, countKey: "Vars", token: "${v}", parse: Xe },
  XS = { regex: RS, countKey: "Colors", token: "${c}", parse: Tt.parse },
  eE = { regex: Yu, countKey: "Numbers", token: "${n}", parse: yi.parse };
function Hc(e, { regex: t, countKey: n, token: r, parse: i }) {
  const o = e.tokenised.match(t);
  o &&
    ((e["num" + n] = o.length),
    (e.tokenised = e.tokenised.replace(t, r)),
    e.values.push(...o.map(i)));
}
function Zl(e) {
  const t = e.toString(),
    n = {
      value: t,
      tokenised: t,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return (n.value.includes("var(--") && Hc(n, qS), Hc(n, XS), Hc(n, eE), n);
}
function tE(e) {
  return Zl(e).values;
}
function nE(e) {
  const { values: t, numColors: n, numVars: r, tokenised: i } = Zl(e),
    o = t.length;
  return (s) => {
    let a = i;
    for (let l = 0; l < o; l++)
      l < r
        ? (a = a.replace(qS.token, s[l]))
        : l < r + n
          ? (a = a.replace(XS.token, Tt.transform(s[l])))
          : (a = a.replace(eE.token, cs(s[l])));
    return a;
  };
}
const Xb = (e) => (typeof e == "number" ? 0 : e);
function eL(e) {
  const t = tE(e);
  return nE(e)(t.map(Xb));
}
const Ar = {
    test: qb,
    parse: tE,
    createTransformer: nE,
    getAnimatableNone: eL,
  },
  rE = (e, t) => (n) => `${n > 0 ? t : e}`;
function iE(e, t) {
  return typeof e == "number"
    ? (n) => Qe(e, t, n)
    : Tt.test(e)
      ? JS(e, t)
      : e.startsWith("var(")
        ? rE(e, t)
        : sE(e, t);
}
const oE = (e, t) => {
    const n = [...e],
      r = n.length,
      i = e.map((o, s) => iE(o, t[s]));
    return (o) => {
      for (let s = 0; s < r; s++) n[s] = i[s](o);
      return n;
    };
  },
  tL = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const i in n)
      e[i] !== void 0 && t[i] !== void 0 && (r[i] = iE(e[i], t[i]));
    return (i) => {
      for (const o in r) n[o] = r[o](i);
      return n;
    };
  },
  sE = (e, t) => {
    const n = Ar.createTransformer(t),
      r = Zl(e),
      i = Zl(t);
    return r.numVars === i.numVars &&
      r.numColors === i.numColors &&
      r.numNumbers >= i.numNumbers
      ? Tr(oE(r.values, i.values), n)
      : rE(e, t);
  },
  Ds = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Hv = (e, t) => (n) => Qe(e, t, n);
function nL(e) {
  return typeof e == "number"
    ? Hv
    : typeof e == "string"
      ? Tt.test(e)
        ? JS
        : sE
      : Array.isArray(e)
        ? oE
        : typeof e == "object"
          ? tL
          : Hv;
}
function rL(e, t, n) {
  const r = [],
    i = n || nL(e[0]),
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || Xe : t;
      a = Tr(l, a);
    }
    r.push(a);
  }
  return r;
}
function aE(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((gp(o === t.length), o === 1)) return () => t[0];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = rL(t, r, i),
    a = s.length,
    l = (u) => {
      let c = 0;
      if (a > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = Ds(e[c], e[c + 1], u);
      return s[c](d);
    };
  return n ? (u) => l(Nr(e[0], e[o - 1], u)) : l;
}
function iL(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Ds(0, t, r);
    e.push(Qe(n, 1, i));
  }
}
function oL(e) {
  const t = [0];
  return (iL(t, e.length - 1), t);
}
function sL(e, t) {
  return e.map((n) => n * t);
}
function aL(e, t) {
  return e.map(() => t || ZS).splice(0, e.length - 1);
}
function Hl({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = jb(r) ? r.map(Wv) : Wv(r),
    o = { done: !1, value: t[0] },
    s = sL(n && n.length === t.length ? n : oL(t), e),
    a = aE(s, t, { ease: Array.isArray(i) ? i : aL(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = a(l)), (o.done = l >= e), o),
  };
}
function lE(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const lL = 5;
function uE(e, t, n) {
  const r = Math.max(t - lL, 0);
  return lE(n - e(r), t - r);
}
const Gc = 0.001,
  uL = 0.01,
  Gv = 10,
  cL = 0.05,
  dL = 1;
function fL({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i, o;
  bb(e <= Rr(Gv));
  let s = 1 - t;
  ((s = Nr(cL, dL, s)),
    (e = Nr(uL, Gv, Bn(e))),
    s < 1
      ? ((i = (u) => {
          const c = u * s,
            d = c * e,
            f = c - n,
            h = pf(u, s),
            v = Math.exp(-d);
          return Gc - (f / h) * v;
        }),
        (o = (u) => {
          const d = u * s * e,
            f = d * n + n,
            h = Math.pow(s, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-d),
            y = pf(Math.pow(u, 2), s);
          return ((-i(u) + Gc > 0 ? -1 : 1) * ((f - h) * v)) / y;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -Gc + c * d;
        }),
        (o = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        })));
  const a = 5 / e,
    l = pL(i, o, a);
  if (((e = Rr(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const hL = 12;
function pL(e, t, n) {
  let r = n;
  for (let i = 1; i < hL; i++) r = r - e(r) / t(r);
  return r;
}
function pf(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const mL = ["duration", "bounce"],
  vL = ["stiffness", "damping", "mass"];
function Kv(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function gL(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Kv(e, vL) && Kv(e, mL)) {
    const n = fL(e);
    ((t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0));
  }
  return t;
}
function cE({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: a,
      damping: l,
      mass: u,
      duration: c,
      velocity: d,
      isResolvedFromDuration: f,
    } = gL({ ...r, velocity: -Bn(r.velocity || 0) }),
    h = d || 0,
    v = l / (2 * Math.sqrt(a * u)),
    y = o - i,
    _ = Bn(Math.sqrt(a / u)),
    g = Math.abs(y) < 5;
  (n || (n = g ? 0.01 : 2), t || (t = g ? 0.005 : 0.5));
  let m;
  if (v < 1) {
    const p = pf(_, v);
    m = (S) => {
      const T = Math.exp(-v * _ * S);
      return (
        o - T * (((h + v * _ * y) / p) * Math.sin(p * S) + y * Math.cos(p * S))
      );
    };
  } else if (v === 1) m = (p) => o - Math.exp(-_ * p) * (y + (h + _ * y) * p);
  else {
    const p = _ * Math.sqrt(v * v - 1);
    m = (S) => {
      const T = Math.exp(-v * _ * S),
        N = Math.min(p * S, 300);
      return (
        o - (T * ((h + v * _ * y) * Math.sinh(N) + p * y * Math.cosh(N))) / p
      );
    };
  }
  return {
    calculatedDuration: (f && c) || null,
    next: (p) => {
      const S = m(p);
      if (f) s.done = p >= c;
      else {
        let T = h;
        p !== 0 && (v < 1 ? (T = uE(m, p, S)) : (T = 0));
        const N = Math.abs(T) <= n,
          C = Math.abs(o - S) <= t;
        s.done = N && C;
      }
      return ((s.value = s.done ? o : S), s);
    },
  };
}
function Qv({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    h = (A) => (a !== void 0 && A < a) || (l !== void 0 && A > l),
    v = (A) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - A) < Math.abs(l - A)
          ? a
          : l;
  let y = n * t;
  const _ = d + y,
    g = s === void 0 ? _ : s(_);
  g !== _ && (y = g - d);
  const m = (A) => -y * Math.exp(-A / r),
    p = (A) => g + m(A),
    S = (A) => {
      const I = m(A),
        b = p(A);
      ((f.done = Math.abs(I) <= u), (f.value = f.done ? g : b));
    };
  let T, N;
  const C = (A) => {
    h(f.value) &&
      ((T = A),
      (N = cE({
        keyframes: [f.value, v(f.value)],
        velocity: uE(p, A, f.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    C(0),
    {
      calculatedDuration: null,
      next: (A) => {
        let I = !1;
        return (
          !N && T === void 0 && ((I = !0), S(A), C(A)),
          T !== void 0 && A > T ? N.next(A - T) : (!I && S(A), f)
        );
      },
    }
  );
}
const yL = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => Ve.update(t, !0),
      stop: () => Jn(t),
      now: () => (yt.isProcessing ? yt.timestamp : performance.now()),
    };
  },
  Yv = 2e4;
function Jv(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Yv; ) ((t += n), (r = e.next(t)));
  return t >= Yv ? 1 / 0 : t;
}
const _L = { decay: Qv, inertia: Qv, tween: Hl, keyframes: Hl, spring: cE };
function Gl({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = yL,
  keyframes: r,
  type: i = "keyframes",
  repeat: o = 0,
  repeatDelay: s = 0,
  repeatType: a = "loop",
  onPlay: l,
  onStop: u,
  onComplete: c,
  onUpdate: d,
  ...f
}) {
  let h = 1,
    v = !1,
    y,
    _;
  const g = () => {
    _ = new Promise((J) => {
      y = J;
    });
  };
  g();
  let m;
  const p = _L[i] || Hl;
  let S;
  p !== Hl &&
    typeof r[0] != "number" &&
    ((S = aE([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const T = p({ ...f, keyframes: r });
  let N;
  a === "mirror" &&
    (N = p({
      ...f,
      keyframes: [...r].reverse(),
      velocity: -(f.velocity || 0),
    }));
  let C = "idle",
    A = null,
    I = null,
    b = null;
  T.calculatedDuration === null && o && (T.calculatedDuration = Jv(T));
  const { calculatedDuration: ee } = T;
  let ge = 1 / 0,
    Y = 1 / 0;
  ee !== null && ((ge = ee + s), (Y = ge * (o + 1) - s));
  let q = 0;
  const Ae = (J) => {
      if (I === null) return;
      (h > 0 && (I = Math.min(I, J)),
        h < 0 && (I = Math.min(J - Y / h, I)),
        A !== null ? (q = A) : (q = Math.round(J - I) * h));
      const w = q - t * (h >= 0 ? 1 : -1),
        k = h >= 0 ? w < 0 : w > Y;
      ((q = Math.max(w, 0)), C === "finished" && A === null && (q = Y));
      let O = q,
        B = T;
      if (o) {
        const G = Math.min(q, Y) / ge;
        let _e = Math.floor(G),
          xe = G % 1;
        (!xe && G >= 1 && (xe = 1),
          xe === 1 && _e--,
          (_e = Math.min(_e, o + 1)),
          !!(_e % 2) &&
            (a === "reverse"
              ? ((xe = 1 - xe), s && (xe -= s / ge))
              : a === "mirror" && (B = N)),
          (O = Nr(0, 1, xe) * ge));
      }
      const z = k ? { done: !1, value: r[0] } : B.next(O);
      S && (z.value = S(z.value));
      let { done: te } = z;
      !k && ee !== null && (te = h >= 0 ? q >= Y : q <= 0);
      const ue = A === null && (C === "finished" || (C === "running" && te));
      return (d && d(z.value), ue && M(), z);
    },
    fe = () => {
      (m && m.stop(), (m = void 0));
    },
    Ee = () => {
      ((C = "idle"), fe(), y(), g(), (I = b = null));
    },
    M = () => {
      ((C = "finished"), c && c(), fe(), y());
    },
    K = () => {
      if (v) return;
      m || (m = n(Ae));
      const J = m.now();
      (l && l(),
        A !== null ? (I = J - A) : (!I || C === "finished") && (I = J),
        C === "finished" && g(),
        (b = I),
        (A = null),
        (C = "running"),
        m.start());
    };
  e && K();
  const X = {
    then(J, w) {
      return _.then(J, w);
    },
    get time() {
      return Bn(q);
    },
    set time(J) {
      ((J = Rr(J)),
        (q = J),
        A !== null || !m || h === 0 ? (A = J) : (I = m.now() - J / h));
    },
    get duration() {
      const J = T.calculatedDuration === null ? Jv(T) : T.calculatedDuration;
      return Bn(J);
    },
    get speed() {
      return h;
    },
    set speed(J) {
      J === h || !m || ((h = J), (X.time = Bn(q)));
    },
    get state() {
      return C;
    },
    play: K,
    pause: () => {
      ((C = "paused"), (A = q));
    },
    stop: () => {
      ((v = !0), C !== "idle" && ((C = "idle"), u && u(), Ee()));
    },
    cancel: () => {
      (b !== null && Ae(b), Ee());
    },
    complete: () => {
      C = "finished";
    },
    sample: (J) => ((I = 0), Ae(J)),
  };
  return X;
}
function SL(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const EL = SL(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  wL = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  ja = 10,
  TL = 2e4,
  RL = (e, t) => t.type === "spring" || e === "backgroundColor" || !FS(t.ease);
function xL(e, t, { onUpdate: n, onComplete: r, ...i }) {
  if (
    !(
      EL() &&
      wL.has(t) &&
      !i.repeatDelay &&
      i.repeatType !== "mirror" &&
      i.damping !== 0 &&
      i.type !== "inertia"
    )
  )
    return !1;
  let s = !1,
    a,
    l,
    u = !1;
  const c = () => {
    l = new Promise((p) => {
      a = p;
    });
  };
  c();
  let { keyframes: d, duration: f = 300, ease: h, times: v } = i;
  if (RL(t, i)) {
    const p = Gl({ ...i, repeat: 0, delay: 0 });
    let S = { done: !1, value: d[0] };
    const T = [];
    let N = 0;
    for (; !S.done && N < TL; ) ((S = p.sample(N)), T.push(S.value), (N += ja));
    ((v = void 0), (d = T), (f = N - ja), (h = "linear"));
  }
  const y = Db(e.owner.current, t, d, { ...i, duration: f, ease: h, times: v }),
    _ = () => {
      ((u = !1), y.cancel());
    },
    g = () => {
      ((u = !0), Ve.update(_), a(), c());
    };
  return (
    (y.onfinish = () => {
      u || (e.set(Mb(d, i)), r && r(), g());
    }),
    {
      then(p, S) {
        return l.then(p, S);
      },
      attachTimeline(p) {
        return ((y.timeline = p), (y.onfinish = null), Xe);
      },
      get time() {
        return Bn(y.currentTime || 0);
      },
      set time(p) {
        y.currentTime = Rr(p);
      },
      get speed() {
        return y.playbackRate;
      },
      set speed(p) {
        y.playbackRate = p;
      },
      get duration() {
        return Bn(f);
      },
      play: () => {
        s || (y.play(), Jn(_));
      },
      pause: () => y.pause(),
      stop: () => {
        if (((s = !0), y.playState === "idle")) return;
        const { currentTime: p } = y;
        if (p) {
          const S = Gl({ ...i, autoplay: !1 });
          e.setWithVelocity(S.sample(p - ja).value, S.sample(p).value, ja);
        }
        g();
      },
      complete: () => {
        u || y.finish();
      },
      cancel: g,
    }
  );
}
function CL({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const i = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: Xe,
      pause: Xe,
      stop: Xe,
      then: (o) => (o(), Promise.resolve()),
      cancel: Xe,
      complete: Xe,
    }
  );
  return t
    ? Gl({ keyframes: [0, 1], duration: 0, delay: t, onComplete: i })
    : i();
}
const NL = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  AL = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  PL = { type: "keyframes", duration: 0.8 },
  kL = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  OL = (e, { keyframes: t }) =>
    t.length > 2
      ? PL
      : gi.has(e)
        ? e.startsWith("scale")
          ? AL(t[1])
          : NL
        : kL,
  mf = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            (Ar.test(t) || t === "0") &&
            !t.startsWith("url("))
        ),
  IL = new Set(["brightness", "contrast", "saturate", "opacity"]);
function bL(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Yu) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = IL.has(t) ? 1 : 0;
  return (r !== n && (o *= 100), t + "(" + o + i + ")");
}
const LL = /([a-z-]*)\(.*?\)/g,
  vf = {
    ...Ar,
    getAnimatableNone: (e) => {
      const t = e.match(LL);
      return t ? t.map(bL).join(" ") : e;
    },
  },
  DL = {
    ...xS,
    color: Tt,
    backgroundColor: Tt,
    outlineColor: Tt,
    fill: Tt,
    stroke: Tt,
    borderColor: Tt,
    borderTopColor: Tt,
    borderRightColor: Tt,
    borderBottomColor: Tt,
    borderLeftColor: Tt,
    filter: vf,
    WebkitFilter: vf,
  },
  Ep = (e) => DL[e];
function dE(e, t) {
  let n = Ep(e);
  return (
    n !== vf && (n = Ar),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const fE = (e) => /^0[^.\s]+$/.test(e);
function ML(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || fE(e);
}
function zL(e, t, n, r) {
  const i = mf(t, n);
  let o;
  Array.isArray(n) ? (o = [...n]) : (o = [null, n]);
  const s = r.from !== void 0 ? r.from : e.get();
  let a;
  const l = [];
  for (let u = 0; u < o.length; u++)
    (o[u] === null && (o[u] = u === 0 ? s : o[u - 1]),
      ML(o[u]) && l.push(u),
      typeof o[u] == "string" && o[u] !== "none" && o[u] !== "0" && (a = o[u]));
  if (i && l.length && a)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      o[c] = dE(t, a);
    }
  return o;
}
function VL({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function wp(e, t) {
  return e[t] || e.default || e;
}
const $L = { skipAnimations: !1 },
  Tp =
    (e, t, n, r = {}) =>
    (i) => {
      const o = wp(r, e) || {},
        s = o.delay || r.delay || 0;
      let { elapsed: a = 0 } = r;
      a = a - Rr(s);
      const l = zL(t, e, n, o),
        u = l[0],
        c = l[l.length - 1],
        d = mf(e, u),
        f = mf(e, c);
      let h = {
        keyframes: l,
        velocity: t.getVelocity(),
        ease: "easeOut",
        ...o,
        delay: -a,
        onUpdate: (v) => {
          (t.set(v), o.onUpdate && o.onUpdate(v));
        },
        onComplete: () => {
          (i(), o.onComplete && o.onComplete());
        },
      };
      if (
        (VL(o) || (h = { ...h, ...OL(e, h) }),
        h.duration && (h.duration = Rr(h.duration)),
        h.repeatDelay && (h.repeatDelay = Rr(h.repeatDelay)),
        !d || !f || Lb.current || o.type === !1 || $L.skipAnimations)
      )
        return CL(h);
      if (
        !r.isHandoff &&
        t.owner &&
        t.owner.current instanceof HTMLElement &&
        !t.owner.getProps().onUpdate
      ) {
        const v = xL(t, e, h);
        if (v) return v;
      }
      return Gl(h);
    };
function Kl(e) {
  return !!($t(e) && e.add);
}
const hE = (e) => /^\-?\d*\.?\d+$/.test(e);
function Rp(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function xp(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Cp {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return (Rp(this.subscriptions, t), () => xp(this.subscriptions, t));
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const UL = (e) => !isNaN(parseFloat(e));
class FL {
  constructor(t, n = {}) {
    ((this.version = "10.18.0"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        ((this.prev = this.current), (this.current = r));
        const { delta: o, timestamp: s } = yt;
        (this.lastUpdated !== s &&
          ((this.timeDelta = o),
          (this.lastUpdated = s),
          Ve.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current));
      }),
      (this.scheduleVelocityCheck = () => Ve.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = UL(this.current)),
      (this.owner = n.owner));
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Cp());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          (r(),
            Ve.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    ((this.passiveEffect = t), (this.stopPassiveEffect = n));
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    (this.set(n), (this.prev = t), (this.timeDelta = r));
  }
  jump(t) {
    (this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? lE(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        ((this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    (this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function ho(e, t) {
  return new FL(e, t);
}
const pE = (e) => (t) => t.test(e),
  jL = { test: (e) => e === "auto", parse: (e) => e },
  mE = [yi, re, An, ir, KI, GI, jL],
  Uo = (e) => mE.find(pE(e)),
  BL = [...mE, Tt, Ar],
  WL = (e) => BL.find(pE(e));
function ZL(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, ho(n));
}
function HL(e, t) {
  const n = qu(e, t);
  let {
    transitionEnd: r = {},
    transition: i = {},
    ...o
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  o = { ...o, ...r };
  for (const s in o) {
    const a = ub(o[s]);
    ZL(e, s, a);
  }
}
function GL(e, t, n) {
  var r, i;
  const o = Object.keys(t).filter((a) => !e.hasValue(a)),
    s = o.length;
  if (s)
    for (let a = 0; a < s; a++) {
      const l = o[a],
        u = t[l];
      let c = null;
      (Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (i = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !==
              null && i !== void 0
              ? i
              : t[l]),
        c != null &&
          (typeof c == "string" && (hE(c) || fE(c))
            ? (c = parseFloat(c))
            : !WL(c) && Ar.test(u) && (c = dE(l, u)),
          e.addValue(l, ho(c, { owner: e })),
          n[l] === void 0 && (n[l] = c),
          c !== null && e.setBaseTarget(l, c)));
    }
}
function KL(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function QL(e, t, n) {
  const r = {};
  for (const i in e) {
    const o = KL(i, t);
    if (o !== void 0) r[i] = o;
    else {
      const s = n.getValue(i);
      s && (r[i] = s.get());
    }
  }
  return r;
}
function YL({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return ((t[n] = !1), r);
}
function JL(e, t) {
  const n = e.get();
  if (Array.isArray(t)) {
    for (let r = 0; r < t.length; r++) if (t[r] !== n) return !0;
  } else return n !== t;
}
function vE(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let {
    transition: o = e.getDefaultTransition(),
    transitionEnd: s,
    ...a
  } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  r && (o = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const d in a) {
    const f = e.getValue(d),
      h = a[d];
    if (!f || h === void 0 || (c && YL(c, d))) continue;
    const v = { delay: n, elapsed: 0, ...wp(o || {}, d) };
    if (window.HandoffAppearAnimations) {
      const g = e.getProps()[gS];
      if (g) {
        const m = window.HandoffAppearAnimations(g, d, f, Ve);
        m !== null && ((v.elapsed = m), (v.isHandoff = !0));
      }
    }
    let y = !v.isHandoff && !JL(f, h);
    if (
      (v.type === "spring" && (f.getVelocity() || v.velocity) && (y = !1),
      f.animation && (y = !1),
      y)
    )
      continue;
    f.start(Tp(d, f, h, e.shouldReduceMotion && gi.has(d) ? { type: !1 } : v));
    const _ = f.animation;
    (Kl(l) && (l.add(d), _.then(() => l.remove(d))), u.push(_));
  }
  return (
    s &&
      Promise.all(u).then(() => {
        s && HL(e, s);
      }),
    u
  );
}
function gf(e, t, n = {}) {
  const r = qu(e, t, n.custom);
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = r ? () => Promise.all(vE(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: d,
            } = i;
            return qL(e, t, u + l, c, d, n);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [l, u] = a === "beforeChildren" ? [o, s] : [s, o];
    return l().then(() => u());
  } else return Promise.all([o(), s(n.delay)]);
}
function qL(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(XL)
      .forEach((u, c) => {
        (u.notify("AnimationStart", t),
          s.push(
            gf(u, t, { ...o, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t),
            ),
          ));
      }),
    Promise.all(s)
  );
}
function XL(e, t) {
  return e.sortNodePosition(t);
}
function eD(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => gf(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = gf(e, t, n);
  else {
    const i = typeof t == "function" ? qu(e, t, n.custom) : t;
    r = Promise.all(vE(e, i, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const tD = [...lp].reverse(),
  nD = lp.length;
function rD(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => eD(e, n, r)));
}
function iD(e) {
  let t = rD(e);
  const n = sD();
  let r = !0;
  const i = (l, u) => {
    const c = qu(e, u);
    if (c) {
      const { transition: d, transitionEnd: f, ...h } = c;
      l = { ...l, ...h, ...f };
    }
    return l;
  };
  function o(l) {
    t = l(e);
  }
  function s(l, u) {
    const c = e.getProps(),
      d = e.getVariantContext(!0) || {},
      f = [],
      h = new Set();
    let v = {},
      y = 1 / 0;
    for (let g = 0; g < nD; g++) {
      const m = tD[g],
        p = n[m],
        S = c[m] !== void 0 ? c[m] : d[m],
        T = bs(S),
        N = m === u ? p.isActive : null;
      N === !1 && (y = g);
      let C = S === d[m] && S !== c[m] && T;
      if (
        (C && r && e.manuallyAnimateOnMount && (C = !1),
        (p.protectedKeys = { ...v }),
        (!p.isActive && N === null) ||
          (!S && !p.prevProp) ||
          Ku(S) ||
          typeof S == "boolean")
      )
        continue;
      let I =
          oD(p.prevProp, S) ||
          (m === u && p.isActive && !C && T) ||
          (g > y && T),
        b = !1;
      const ee = Array.isArray(S) ? S : [S];
      let ge = ee.reduce(i, {});
      N === !1 && (ge = {});
      const { prevResolvedValues: Y = {} } = p,
        q = { ...Y, ...ge },
        Ae = (fe) => {
          ((I = !0),
            h.has(fe) && ((b = !0), h.delete(fe)),
            (p.needsAnimating[fe] = !0));
        };
      for (const fe in q) {
        const Ee = ge[fe],
          M = Y[fe];
        if (v.hasOwnProperty(fe)) continue;
        let K = !1;
        (Wl(Ee) && Wl(M) ? (K = !$S(Ee, M)) : (K = Ee !== M),
          K
            ? Ee !== void 0
              ? Ae(fe)
              : h.add(fe)
            : Ee !== void 0 && h.has(fe)
              ? Ae(fe)
              : (p.protectedKeys[fe] = !0));
      }
      ((p.prevProp = S),
        (p.prevResolvedValues = ge),
        p.isActive && (v = { ...v, ...ge }),
        r && e.blockInitialAnimation && (I = !1),
        I &&
          (!C || b) &&
          f.push(
            ...ee.map((fe) => ({ animation: fe, options: { type: m, ...l } })),
          ));
    }
    if (h.size) {
      const g = {};
      (h.forEach((m) => {
        const p = e.getBaseTarget(m);
        p !== void 0 && (g[m] = p);
      }),
        f.push({ animation: g }));
    }
    let _ = !!f.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (_ = !1),
      (r = !1),
      _ ? t(f) : Promise.resolve()
    );
  }
  function a(l, u, c) {
    var d;
    if (n[l].isActive === u) return Promise.resolve();
    ((d = e.variantChildren) === null ||
      d === void 0 ||
      d.forEach((h) => {
        var v;
        return (v = h.animationState) === null || v === void 0
          ? void 0
          : v.setActive(l, u);
      }),
      (n[l].isActive = u));
    const f = s(c, l);
    for (const h in n) n[h].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
  };
}
function oD(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !$S(t, e) : !1;
}
function Vr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function sD() {
  return {
    animate: Vr(!0),
    whileInView: Vr(),
    whileHover: Vr(),
    whileTap: Vr(),
    whileDrag: Vr(),
    whileFocus: Vr(),
    exit: Vr(),
  };
}
class aD extends zr {
  constructor(t) {
    (super(t), t.animationState || (t.animationState = iD(t)));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    (this.unmount(), Ku(t) && (this.unmount = t.subscribe(this.node)));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let lD = 0;
class uD extends zr {
  constructor() {
    (super(...arguments), (this.id = lD++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === i) return;
    const o = this.node.animationState.setActive("exit", !t, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const cD = { animation: { Feature: aD }, exit: { Feature: uD } },
  qv = (e, t) => Math.abs(e - t);
function dD(e, t) {
  const n = qv(e.x, t.x),
    r = qv(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class gE {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = Qc(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          h = dD(d.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !h) return;
        const { point: v } = d,
          { timestamp: y } = yt;
        this.history.push({ ...v, timestamp: y });
        const { onStart: _, onMove: g } = this.handlers;
        (f ||
          (_ && _(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          g && g(this.lastMoveEvent, d));
      }),
      (this.handlePointerMove = (d, f) => {
        ((this.lastMoveEvent = d),
          (this.lastMoveEventInfo = Kc(f, this.transformPagePoint)),
          Ve.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (d, f) => {
        this.end();
        const { onEnd: h, onSessionEnd: v, resumeAnimation: y } = this.handlers;
        if (
          (this.dragSnapToOrigin && y && y(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const _ = Qc(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Kc(f, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && h && h(d, _), v && v(d, _));
      }),
      !LS(t))
    )
      return;
    ((this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window));
    const s = Ju(t),
      a = Kc(s, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = yt;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    (c && c(t, Qc(a, this.history)),
      (this.removeListeners = Tr(
        jn(this.contextWindow, "pointermove", this.handlePointerMove),
        jn(this.contextWindow, "pointerup", this.handlePointerUp),
        jn(this.contextWindow, "pointercancel", this.handlePointerUp),
      )));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    (this.removeListeners && this.removeListeners(), Jn(this.updatePoint));
  }
}
function Kc(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Xv(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Qc({ point: e }, t) {
  return {
    point: e,
    delta: Xv(e, yE(t)),
    offset: Xv(e, fD(t)),
    velocity: hD(t, 0.1),
  };
}
function fD(e) {
  return e[0];
}
function yE(e) {
  return e[e.length - 1];
}
function hD(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = yE(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Rr(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = Bn(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return (s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s);
}
function Kt(e) {
  return e.max - e.min;
}
function yf(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function eg(e, t, n, r = 0.5) {
  ((e.origin = r),
    (e.originPoint = Qe(t.min, t.max, e.origin)),
    (e.scale = Kt(n) / Kt(t)),
    (yf(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = Qe(n.min, n.max, e.origin) - e.originPoint),
    (yf(e.translate) || isNaN(e.translate)) && (e.translate = 0));
}
function ds(e, t, n, r) {
  (eg(e.x, t.x, n.x, r ? r.originX : void 0),
    eg(e.y, t.y, n.y, r ? r.originY : void 0));
}
function tg(e, t, n) {
  ((e.min = n.min + t.min), (e.max = e.min + Kt(t)));
}
function pD(e, t, n) {
  (tg(e.x, t.x, n.x), tg(e.y, t.y, n.y));
}
function ng(e, t, n) {
  ((e.min = t.min - n.min), (e.max = e.min + Kt(t)));
}
function fs(e, t, n) {
  (ng(e.x, t.x, n.x), ng(e.y, t.y, n.y));
}
function mD(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? Qe(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? Qe(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function rg(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function vD(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: rg(e.x, n, i), y: rg(e.y, t, r) };
}
function ig(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (
    t.max - t.min < e.max - e.min && ([n, r] = [r, n]),
    { min: n, max: r }
  );
}
function gD(e, t) {
  return { x: ig(e.x, t.x), y: ig(e.y, t.y) };
}
function yD(e, t) {
  let n = 0.5;
  const r = Kt(e),
    i = Kt(t);
  return (
    i > r
      ? (n = Ds(t.min, t.max - r, e.min))
      : r > i && (n = Ds(e.min, e.max - i, t.min)),
    Nr(0, 1, n)
  );
}
function _D(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const _f = 0.35;
function SD(e = _f) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = _f),
    { x: og(e, "left", "right"), y: og(e, "top", "bottom") }
  );
}
function og(e, t, n) {
  return { min: sg(e, t), max: sg(e, n) };
}
function sg(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const ag = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Bi = () => ({ x: ag(), y: ag() }),
  lg = () => ({ min: 0, max: 0 }),
  it = () => ({ x: lg(), y: lg() });
function Xt(e) {
  return [e("x"), e("y")];
}
function _E({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function ED({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function wD(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Yc(e) {
  return e === void 0 || e === 1;
}
function Sf({ scale: e, scaleX: t, scaleY: n }) {
  return !Yc(e) || !Yc(t) || !Yc(n);
}
function Wr(e) {
  return Sf(e) || SE(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function SE(e) {
  return ug(e.x) || ug(e.y);
}
function ug(e) {
  return e && e !== "0%";
}
function Ql(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function cg(e, t, n, r, i) {
  return (i !== void 0 && (e = Ql(e, i, r)), Ql(e, n, r) + t);
}
function Ef(e, t = 0, n = 1, r, i) {
  ((e.min = cg(e.min, t, n, r, i)), (e.max = cg(e.max, t, n, r, i)));
}
function EE(e, { x: t, y: n }) {
  (Ef(e.x, t.translate, t.scale, t.originPoint),
    Ef(e.y, n.translate, n.scale, n.originPoint));
}
function TD(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    ((o = n[a]), (s = o.projectionDelta));
    const l = o.instance;
    (l && l.style && l.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        Wi(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), EE(e, s)),
      r && Wr(o.latestValues) && Wi(e, o.latestValues));
  }
  ((t.x = dg(t.x)), (t.y = dg(t.y)));
}
function dg(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function lr(e, t) {
  ((e.min = e.min + t), (e.max = e.max + t));
}
function fg(e, t, [n, r, i]) {
  const o = t[i] !== void 0 ? t[i] : 0.5,
    s = Qe(e.min, e.max, o);
  Ef(e, t[n], t[r], s, t.scale);
}
const RD = ["x", "scaleX", "originX"],
  xD = ["y", "scaleY", "originY"];
function Wi(e, t) {
  (fg(e.x, t, RD), fg(e.y, t, xD));
}
function wE(e, t) {
  return _E(wD(e.getBoundingClientRect(), t));
}
function CD(e, t, n) {
  const r = wE(e, n),
    { scroll: i } = t;
  return (i && (lr(r.x, i.offset.x), lr(r.y, i.offset.y)), r);
}
const TE = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  ND = new WeakMap();
class AD {
  constructor(t) {
    ((this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = it()),
      (this.visualElement = t));
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: d } = this.getProps();
        (d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Ju(c, "page").point));
      },
      o = (c, d) => {
        const { drag: f, dragPropagation: h, onDragStart: v } = this.getProps();
        if (
          f &&
          !h &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = MS(f)),
          !this.openGlobalLock)
        )
          return;
        ((this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Xt((_) => {
            let g = this.getAxisMotionValue(_).get() || 0;
            if (An.test(g)) {
              const { projection: m } = this.visualElement;
              if (m && m.layout) {
                const p = m.layout.layoutBox[_];
                p && (g = Kt(p) * (parseFloat(g) / 100));
              }
            }
            this.originPoint[_] = g;
          }),
          v && Ve.update(() => v(c, d), !1, !0));
        const { animationState: y } = this.visualElement;
        y && y.setActive("whileDrag", !0);
      },
      s = (c, d) => {
        const {
          dragPropagation: f,
          dragDirectionLock: h,
          onDirectionLock: v,
          onDrag: y,
        } = this.getProps();
        if (!f && !this.openGlobalLock) return;
        const { offset: _ } = d;
        if (h && this.currentDirection === null) {
          ((this.currentDirection = PD(_)),
            this.currentDirection !== null && v && v(this.currentDirection));
          return;
        }
        (this.updateAxis("x", d.point, _),
          this.updateAxis("y", d.point, _),
          this.visualElement.render(),
          y && y(c, d));
      },
      a = (c, d) => this.stop(c, d),
      l = () =>
        Xt((c) => {
          var d;
          return (
            this.getAnimationState(c) === "paused" &&
            ((d = this.getAxisMotionValue(c).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new gE(
      t,
      {
        onSessionStart: i,
        onStart: o,
        onMove: s,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: TE(this.visualElement),
      },
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && Ve.update(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    (t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0));
    const { dragPropagation: r } = this.getProps();
    (!r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1));
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Ba(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    (this.constraints &&
      this.constraints[t] &&
      (s = mD(s, this.constraints[t], this.elastic[t])),
      o.set(s));
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
            ? void 0
            : t.layout,
      o = this.constraints;
    (n && Fi(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
        ? (this.constraints = vD(i.layoutBox, n))
        : (this.constraints = !1),
      (this.elastic = SD(r)),
      o !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Xt((s) => {
          this.getAxisMotionValue(s) &&
            (this.constraints[s] = _D(i.layoutBox[s], this.constraints[s]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Fi(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = CD(r, i.root, this.visualElement.getTransformPagePoint());
    let s = gD(i.layout.layoutBox, o);
    if (n) {
      const a = n(ED(s));
      ((this.hasMutatedConstraints = !!a), a && (s = _E(a)));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = Xt((c) => {
        if (!Ba(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        s && (d = { min: 0, max: 0 });
        const f = i ? 200 : 1e6,
          h = i ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: f,
            bounceDamping: h,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...d,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Tp(t, r, 0, n));
  }
  stopAnimation() {
    Xt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Xt((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Xt((n) => {
      const { drag: r } = this.getProps();
      if (!Ba(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: a } = i.layout.layoutBox[n];
        o.set(t[n] - Qe(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Fi(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    Xt((s) => {
      const a = this.getAxisMotionValue(s);
      if (a) {
        const l = a.get();
        i[s] = yD({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Xt((s) => {
        if (!Ba(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(Qe(l, u, i[s]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    ND.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = jn(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Fi(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    (i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
      r());
    const s = Un(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (Xt((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (s(), n(), o(), a && a());
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = _f,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function Ba(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function PD(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n);
}
class kD extends zr {
  constructor(t) {
    (super(t),
      (this.removeGroupControls = Xe),
      (this.removeListeners = Xe),
      (this.controls = new AD(t)));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    (t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Xe));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
}
const hg = (e) => (t, n) => {
  e && Ve.update(() => e(t, n));
};
class OD extends zr {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = Xe));
  }
  onPointerDown(t) {
    this.session = new gE(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: TE(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: hg(t),
      onStart: hg(n),
      onMove: r,
      onEnd: (o, s) => {
        (delete this.session, i && Ve.update(() => i(o, s)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = jn(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
function ID() {
  const e = x.useContext(sp);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = x.useId();
  return (x.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0]);
}
const al = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function pg(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Fo = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (re.test(e)) e = parseFloat(e);
        else return e;
      const n = pg(e, t.target.x),
        r = pg(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  bD = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Ar.parse(e);
      if (i.length > 5) return r;
      const o = Ar.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      ((i[0 + s] /= a), (i[1 + s] /= l));
      const u = Qe(a, l, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
      );
    },
  };
class LD extends P.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    (UI(DD),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (al.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              Ve.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      queueMicrotask(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function RE(e) {
  const [t, n] = ID(),
    r = x.useContext(_S);
  return P.createElement(LD, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: x.useContext(SS),
    isPresent: t,
    safeToRemove: n,
  });
}
const DD = {
    borderRadius: {
      ...Fo,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: Fo,
    borderTopRightRadius: Fo,
    borderBottomLeftRadius: Fo,
    borderBottomRightRadius: Fo,
    boxShadow: bD,
  },
  xE = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  MD = xE.length,
  mg = (e) => (typeof e == "string" ? parseFloat(e) : e),
  vg = (e) => typeof e == "number" || re.test(e);
function zD(e, t, n, r, i, o) {
  i
    ? ((e.opacity = Qe(0, n.opacity !== void 0 ? n.opacity : 1, VD(r))),
      (e.opacityExit = Qe(t.opacity !== void 0 ? t.opacity : 1, 0, $D(r))))
    : o &&
      (e.opacity = Qe(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r,
      ));
  for (let s = 0; s < MD; s++) {
    const a = `border${xE[s]}Radius`;
    let l = gg(t, a),
      u = gg(n, a);
    if (l === void 0 && u === void 0) continue;
    (l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || vg(l) === vg(u)
        ? ((e[a] = Math.max(Qe(mg(l), mg(u), r), 0)),
          (An.test(u) || An.test(l)) && (e[a] += "%"))
        : (e[a] = u));
  }
  (t.rotate || n.rotate) && (e.rotate = Qe(t.rotate || 0, n.rotate || 0, r));
}
function gg(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const VD = CE(0, 0.5, KS),
  $D = CE(0.5, 0.95, Xe);
function CE(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Ds(e, t, r)));
}
function yg(e, t) {
  ((e.min = t.min), (e.max = t.max));
}
function qt(e, t) {
  (yg(e.x, t.x), yg(e.y, t.y));
}
function _g(e, t, n, r, i) {
  return (
    (e -= t),
    (e = Ql(e, 1 / n, r)),
    i !== void 0 && (e = Ql(e, 1 / i, r)),
    e
  );
}
function UD(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (An.test(t) &&
      ((t = parseFloat(t)), (t = Qe(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = Qe(o.min, o.max, r);
  (e === o && (a -= t),
    (e.min = _g(e.min, t, n, a, i)),
    (e.max = _g(e.max, t, n, a, i)));
}
function Sg(e, t, [n, r, i], o, s) {
  UD(e, t[n], t[r], t[i], t.scale, o, s);
}
const FD = ["x", "scaleX", "originX"],
  jD = ["y", "scaleY", "originY"];
function Eg(e, t, n, r) {
  (Sg(e.x, t, FD, n ? n.x : void 0, r ? r.x : void 0),
    Sg(e.y, t, jD, n ? n.y : void 0, r ? r.y : void 0));
}
function wg(e) {
  return e.translate === 0 && e.scale === 1;
}
function NE(e) {
  return wg(e.x) && wg(e.y);
}
function BD(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function AE(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function Tg(e) {
  return Kt(e.x) / Kt(e.y);
}
class WD {
  constructor() {
    this.members = [];
  }
  add(t) {
    (Rp(this.members, t), t.scheduleRender());
  }
  remove(t) {
    if (
      (xp(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      (r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0));
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      (n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function Rg(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y;
  if (
    ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    (l && (r += `rotate(${l}deg) `),
      u && (r += `rotateX(${u}deg) `),
      c && (r += `rotateY(${c}deg) `));
  }
  const s = e.x.scale * t.x,
    a = e.y.scale * t.y;
  return ((s !== 1 || a !== 1) && (r += `scale(${s}, ${a})`), r || "none");
}
const ZD = (e, t) => e.depth - t.depth;
class HD {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(t) {
    (Rp(this.children, t), (this.isDirty = !0));
  }
  remove(t) {
    (xp(this.children, t), (this.isDirty = !0));
  }
  forEach(t) {
    (this.isDirty && this.children.sort(ZD),
      (this.isDirty = !1),
      this.children.forEach(t));
  }
}
function GD(e, t) {
  const n = performance.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (Jn(r), e(o - t));
    };
  return (Ve.read(r, !0), () => Jn(r));
}
function KD(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function QD(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function YD(e, t, n) {
  const r = $t(e) ? e : ho(e);
  return (r.start(Tp("", r, t, n)), r.animation);
}
const xg = ["", "X", "Y", "Z"],
  JD = { visibility: "hidden" },
  Cg = 1e3;
let qD = 0;
const Zr = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function PE({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      ((this.id = qD++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            (Zr.totalNodes =
              Zr.resolvedTargetDeltas =
              Zr.recalculatedProjection =
                0),
            this.nodes.forEach(tM),
            this.nodes.forEach(sM),
            this.nodes.forEach(aM),
            this.nodes.forEach(nM),
            KD(Zr));
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0));
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new HD());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Cp()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      ((this.isSVG = QD(s)), (this.instance = s));
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          ((this.root.updateBlockedByResize = !0),
            d && d(),
            (d = GD(f, 250)),
            al.hasAnimatedSinceResize &&
              ((al.hasAnimatedSinceResize = !1), this.nodes.forEach(Ag)));
        });
      }
      (l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeTargetChanged: h,
              layout: v,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const y =
                  this.options.transition || c.getDefaultTransition() || fM,
                { onLayoutAnimationStart: _, onLayoutAnimationComplete: g } =
                  c.getProps(),
                m = !this.targetLayout || !AE(this.targetLayout, v) || h,
                p = !f && h;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                p ||
                (f && (m || !this.currentAnimation))
              ) {
                (this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, p));
                const S = { ...wp(y, "layout"), onPlay: _, onComplete: g };
                ((c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((S.delay = 0), (S.type = !1)),
                  this.startAnimation(S));
              } else
                (f || Ag(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = v;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const s = this.getStack();
      (s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Jn(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(lM),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        ((d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1));
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = u
        ? u(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(Ng));
        return;
      }
      (this.isUpdating || this.nodes.forEach(iM),
        (this.isUpdating = !1),
        this.nodes.forEach(oM),
        this.nodes.forEach(XD),
        this.nodes.forEach(eM),
        this.clearAllSnapshots());
      const a = performance.now();
      ((yt.delta = Nr(0, 1e3 / 60, a - yt.timestamp)),
        (yt.timestamp = a),
        (yt.isProcessing = !0),
        Uc.update.process(yt),
        Uc.preRender.process(yt),
        Uc.render.process(yt),
        (yt.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(rM), this.sharedNodes.forEach(uM));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Ve.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Ve.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      ((this.layout = this.measure(!1)),
        (this.layoutCorrected = it()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0,
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      (this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: r(this.instance),
            offset: n(this.instance),
          }));
    }
    resetTransform() {
      if (!i) return;
      const s = this.isLayoutDirty || this.shouldResetTransform,
        a = this.projectionDelta && !NE(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      s &&
        (a || Wr(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        hM(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s) return it();
      const a = s.measureViewportBox(),
        { scroll: l } = this.root;
      return (l && (lr(a.x, l.offset.x), lr(a.y, l.offset.y)), a);
    }
    removeElementScroll(s) {
      const a = it();
      qt(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            qt(a, s);
            const { scroll: f } = this.root;
            f && (lr(a.x, -f.offset.x), lr(a.y, -f.offset.y));
          }
          (lr(a.x, c.offset.x), lr(a.y, c.offset.y));
        }
      }
      return a;
    }
    applyTransform(s, a = !1) {
      const l = it();
      qt(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        (!a &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Wi(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          Wr(c.latestValues) && Wi(l, c.latestValues));
      }
      return (Wr(this.latestValues) && Wi(l, this.latestValues), l);
    }
    removeTransform(s) {
      const a = it();
      qt(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Wr(u.latestValues)) continue;
        Sf(u.latestValues) && u.updateSnapshot();
        const c = it(),
          d = u.measurePageBox();
        (qt(c, d),
          Eg(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c));
      }
      return (Wr(this.latestValues) && Eg(a, this.latestValues), a);
    }
    setTargetDelta(s) {
      ((this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== yt.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty));
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = yt.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const h = this.getClosestProjectingParent();
          h && h.layout && this.animationProgress !== 1
            ? ((this.relativeParent = h),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = it()),
              (this.relativeTargetOrigin = it()),
              fs(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                h.layout.layoutBox,
              ),
              qt(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = it()), (this.targetWithTransforms = it())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                pD(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target,
                ))
              : this.targetDelta
                ? (this.resumingFrom
                    ? (this.target = this.applyTransform(this.layout.layoutBox))
                    : qt(this.target, this.layout.layoutBox),
                  EE(this.target, this.targetDelta))
                : qt(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const h = this.getClosestProjectingParent();
            h &&
            !!h.resumingFrom == !!this.resumingFrom &&
            !h.options.layoutScroll &&
            h.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = h),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = it()),
                (this.relativeTargetOrigin = it()),
                fs(this.relativeTargetOrigin, this.target, h.target),
                qt(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Zr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Sf(this.parent.latestValues) ||
          SE(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === yt.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      qt(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        h = this.treeScale.y;
      (TD(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (a.target = a.layout.layoutBox));
      const { target: v } = a;
      if (!v) {
        this.projectionTransform &&
          ((this.projectionDelta = Bi()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = Bi()),
        (this.projectionDeltaWithTransform = Bi()));
      const y = this.projectionTransform;
      (ds(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
        (this.projectionTransform = Rg(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== y ||
          this.treeScale.x !== f ||
          this.treeScale.y !== h) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", v)),
        Zr.recalculatedProjection++);
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = Bi();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a));
      const f = it(),
        h = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        y = h !== v,
        _ = this.getStack(),
        g = !_ || _.members.length <= 1,
        m = !!(y && !g && this.options.crossfade === !0 && !this.path.some(dM));
      this.animationProgress = 0;
      let p;
      ((this.mixTargetDelta = (S) => {
        const T = S / 1e3;
        (Pg(d.x, s.x, T),
          Pg(d.y, s.y, T),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (fs(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            cM(this.relativeTarget, this.relativeTargetOrigin, f, T),
            p && BD(this.relativeTarget, p) && (this.isProjectionDirty = !1),
            p || (p = it()),
            qt(p, this.relativeTarget)),
          y &&
            ((this.animationValues = c), zD(c, u, this.latestValues, T, m, g)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = T));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(s) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Jn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Ve.update(() => {
          ((al.hasAnimatedSinceResize = !0),
            (this.currentAnimation = YD(0, Cg, {
              ...s,
              onUpdate: (a) => {
                (this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a));
              },
              onComplete: () => {
                (s.onComplete && s.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      (s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Cg),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: c,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          kE(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || it();
          const d = Kt(this.layout.layoutBox.x);
          ((l.x.min = s.target.x.min), (l.x.max = l.x.min + d));
          const f = Kt(this.layout.layoutBox.y);
          ((l.y.min = s.target.y.min), (l.y.max = l.y.min + f));
        }
        (qt(a, l),
          Wi(a, c),
          ds(this.projectionDeltaWithTransform, this.layoutCorrected, a, c));
      }
    }
    registerSharedNode(s, a) {
      (this.sharedNodes.has(s) || this.sharedNodes.set(s, new WD()),
        this.sharedNodes.get(s).add(a));
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      (u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a }));
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a))
        return;
      const u = {};
      for (let c = 0; c < xg.length; c++) {
        const d = "rotate" + xg[c];
        l[d] && ((u[d] = l[d]), s.setStaticValue(d, 0));
      }
      s.render();
      for (const c in u) s.setStaticValue(c, u[c]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return JD;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = sl(s == null ? void 0 : s.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const y = {};
        return (
          this.options.layoutId &&
            ((y.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (y.pointerEvents = sl(s == null ? void 0 : s.pointerEvents) || "")),
          this.hasProjected &&
            !Wr(this.latestValues) &&
            ((y.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          y
        );
      }
      const f = d.animationValues || d.latestValues;
      (this.applyTransformsToTarget(),
        (u.transform = Rg(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f,
        )),
        c && (u.transform = c(f, u.transform)));
      const { x: h, y: v } = this.projectionDelta;
      ((u.transformOrigin = `${h.origin * 100}% ${v.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l =
                    (a = f.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : f.opacityExit)
          : (u.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                  ? f.opacityExit
                  : 0));
      for (const y in jl) {
        if (f[y] === void 0) continue;
        const { correct: _, applyTo: g } = jl[y],
          m = u.transform === "none" ? f[y] : _(f[y], d);
        if (g) {
          const p = g.length;
          for (let S = 0; S < p; S++) u[g[S]] = m;
        } else u[y] = m;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            d === this
              ? sl(s == null ? void 0 : s.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Ng),
        this.root.sharedNodes.clear());
    }
  };
}
function XD(e) {
  e.updateLayout();
}
function eM(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? Xt((d) => {
          const f = s ? n.measuredBox[d] : n.layoutBox[d],
            h = Kt(f);
          ((f.min = r[d].min), (f.max = f.min + h));
        })
      : kE(o, n.layoutBox, r) &&
        Xt((d) => {
          const f = s ? n.measuredBox[d] : n.layoutBox[d],
            h = Kt(r[d]);
          ((f.max = f.min + h),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + h)));
        });
    const a = Bi();
    ds(a, r, n.layoutBox);
    const l = Bi();
    s ? ds(l, e.applyTransform(i, !0), n.measuredBox) : ds(l, r, n.layoutBox);
    const u = !NE(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: h } = d;
        if (f && h) {
          const v = it();
          fs(v, n.layoutBox, f.layoutBox);
          const y = it();
          (fs(y, r, h.layoutBox),
            AE(v, y) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = y),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = d)));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function tM(e) {
  (Zr.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty)));
}
function nM(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function rM(e) {
  e.clearSnapshot();
}
function Ng(e) {
  e.clearMeasurements();
}
function iM(e) {
  e.isLayoutDirty = !1;
}
function oM(e) {
  const { visualElement: t } = e.options;
  (t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform());
}
function Ag(e) {
  (e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0));
}
function sM(e) {
  e.resolveTargetDelta();
}
function aM(e) {
  e.calcProjection();
}
function lM(e) {
  e.resetRotation();
}
function uM(e) {
  e.removeLeadSnapshot();
}
function Pg(e, t, n) {
  ((e.translate = Qe(t.translate, 0, n)),
    (e.scale = Qe(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint));
}
function kg(e, t, n, r) {
  ((e.min = Qe(t.min, n.min, r)), (e.max = Qe(t.max, n.max, r)));
}
function cM(e, t, n, r) {
  (kg(e.x, t.x, n.x, r), kg(e.y, t.y, n.y, r));
}
function dM(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const fM = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Og = (e) =>
    typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e),
  Ig = Og("applewebkit/") && !Og("chrome/") ? Math.round : Xe;
function bg(e) {
  ((e.min = Ig(e.min)), (e.max = Ig(e.max)));
}
function hM(e) {
  (bg(e.x), bg(e.y));
}
function kE(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !yf(Tg(t), Tg(n), 0.2))
  );
}
const pM = PE({
    attachResizeListener: (e, t) => Un(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Jc = { current: void 0 },
  OE = PE({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Jc.current) {
        const e = new pM({});
        (e.mount(window), e.setOptions({ layoutScroll: !0 }), (Jc.current = e));
      }
      return Jc.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  mM = {
    pan: { Feature: OD },
    drag: { Feature: kD, ProjectionNode: OE, MeasureLayout: RE },
  },
  vM = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function gM(e) {
  const t = vM.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function wf(e, t, n = 1) {
  const [r, i] = gM(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return hE(s) ? parseFloat(s) : s;
  } else return df(i) ? wf(i, t, n + 1) : i;
}
function yM(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  (n && (n = { ...n }),
    e.values.forEach((i) => {
      const o = i.get();
      if (!df(o)) return;
      const s = wf(o, r);
      s && i.set(s);
    }));
  for (const i in t) {
    const o = t[i];
    if (!df(o)) continue;
    const s = wf(o, r);
    s && ((t[i] = s), n || (n = {}), n[i] === void 0 && (n[i] = o));
  }
  return { target: t, transitionEnd: n };
}
const _M = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  IE = (e) => _M.has(e),
  SM = (e) => Object.keys(e).some(IE),
  Lg = (e) => e === yi || e === re,
  Dg = (e, t) => parseFloat(e.split(", ")[t]),
  Mg =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/);
      if (i) return Dg(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/);
        return o ? Dg(o[1], e) : 0;
      }
    },
  EM = new Set(["x", "y", "z"]),
  wM = da.filter((e) => !EM.has(e));
function TM(e) {
  const t = [];
  return (
    wM.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const po = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Mg(4, 13),
  y: Mg(5, 14),
};
po.translateX = po.x;
po.translateY = po.y;
const RM = (e, t, n) => {
    const r = t.measureViewportBox(),
      i = t.current,
      o = getComputedStyle(i),
      { display: s } = o,
      a = {};
    (s === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((u) => {
        a[u] = po[u](r, o);
      }),
      t.render());
    const l = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = t.getValue(u);
        (c && c.jump(a[u]), (e[u] = po[u](l, o)));
      }),
      e
    );
  },
  xM = (e, t, n = {}, r = {}) => {
    ((t = { ...t }), (r = { ...r }));
    const i = Object.keys(t).filter(IE);
    let o = [],
      s = !1;
    const a = [];
    if (
      (i.forEach((l) => {
        const u = e.getValue(l);
        if (!e.hasValue(l)) return;
        let c = n[l],
          d = Uo(c);
        const f = t[l];
        let h;
        if (Wl(f)) {
          const v = f.length,
            y = f[0] === null ? 1 : 0;
          ((c = f[y]), (d = Uo(c)));
          for (let _ = y; _ < v && f[_] !== null; _++)
            h ? gp(Uo(f[_]) === h) : (h = Uo(f[_]));
        } else h = Uo(f);
        if (d !== h)
          if (Lg(d) && Lg(h)) {
            const v = u.get();
            (typeof v == "string" && u.set(parseFloat(v)),
              typeof f == "string"
                ? (t[l] = parseFloat(f))
                : Array.isArray(f) && h === re && (t[l] = f.map(parseFloat)));
          } else
            d != null &&
            d.transform &&
            h != null &&
            h.transform &&
            (c === 0 || f === 0)
              ? c === 0
                ? u.set(h.transform(c))
                : (t[l] = d.transform(f))
              : (s || ((o = TM(e)), (s = !0)),
                a.push(l),
                (r[l] = r[l] !== void 0 ? r[l] : t[l]),
                u.jump(f));
      }),
      a.length)
    ) {
      const l = a.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = RM(t, e, a);
      return (
        o.length &&
          o.forEach(([c, d]) => {
            e.getValue(c).set(d);
          }),
        e.render(),
        Gu && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function CM(e, t, n, r) {
  return SM(t) ? xM(e, t, n, r) : { target: t, transitionEnd: r };
}
const NM = (e, t, n, r) => {
    const i = yM(e, t, r);
    return ((t = i.target), (r = i.transitionEnd), CM(e, t, n, r));
  },
  Tf = { current: null },
  bE = { current: !1 };
function AM() {
  if (((bE.current = !0), !!Gu))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Tf.current = e.matches);
      (e.addListener(t), t());
    } else Tf.current = !1;
}
function PM(e, t, n) {
  const { willChange: r } = t;
  for (const i in t) {
    const o = t[i],
      s = n[i];
    if ($t(o)) (e.addValue(i, o), Kl(r) && r.add(i));
    else if ($t(s)) (e.addValue(i, ho(o, { owner: e })), Kl(r) && r.remove(i));
    else if (s !== o)
      if (e.hasValue(i)) {
        const a = e.getValue(i);
        !a.hasAnimated && a.set(o);
      } else {
        const a = e.getStaticValue(i);
        e.addValue(i, ho(a !== void 0 ? a : o, { owner: e }));
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
const zg = new WeakMap(),
  LE = Object.keys(Ls),
  kM = LE.length,
  Vg = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  OM = up.length;
class IM {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      visualState: o,
    },
    s = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.scheduleRender = () => Ve.render(this.render, !1, !0)));
    const { latestValues: a, renderState: l } = o;
    ((this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = l),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = s),
      (this.isControllingVariants = Qu(n)),
      (this.isVariantNode = yS(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current)));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const d in c) {
      const f = c[d];
      a[d] !== void 0 && $t(f) && (f.set(a[d], !1), Kl(u) && u.add(d));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    ((this.current = t),
      zg.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      bE.current || AM(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : Tf.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    (zg.delete(this.current),
      this.projection && this.projection.unmount(),
      Jn(this.notifyUpdate),
      Jn(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this));
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = gi.has(t),
      i = n.on("change", (s) => {
        ((this.latestValues[t] = s),
          this.props.onUpdate && Ve.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0));
      }),
      o = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      (i(), o());
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, i, o) {
    let s, a;
    for (let l = 0; l < kM; l++) {
      const u = LE[l],
        {
          isEnabled: c,
          Feature: d,
          ProjectionNode: f,
          MeasureLayout: h,
        } = Ls[u];
      (f && (s = f),
        c(n) &&
          (!this.features[u] && d && (this.features[u] = new d(this)),
          h && (a = h)));
    }
    if (
      (this.type === "html" || this.type === "svg") &&
      !this.projection &&
      s
    ) {
      this.projection = new s(
        this.latestValues,
        this.parent && this.parent.projection,
      );
      const {
        layoutId: l,
        layout: u,
        drag: c,
        dragConstraints: d,
        layoutScroll: f,
        layoutRoot: h,
      } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || (d && Fi(d)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: o,
        layoutScroll: f,
        layoutRoot: h,
      });
    }
    return a;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : it();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  update(t, n) {
    ((t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n));
    for (let r = 0; r < Vg.length; r++) {
      const i = Vg[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = t["on" + i];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    ((this.prevMotionValues = PM(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial),
        r
      );
    }
    const n = {};
    for (let r = 0; r < OM; r++) {
      const i = up[r],
        o = this.props[i];
      (bs(o) || o === !1) && (n[i] = o);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    (n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    (n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState));
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = ho(n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t) {
    var n;
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : (n = this.getBaseTargetFromProps(this.props, t)) !== null &&
          n !== void 0
        ? n
        : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      i =
        typeof r == "string" || typeof r == "object"
          ? (n = vp(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !$t(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
        ? void 0
        : this.baseTarget[t];
  }
  on(t, n) {
    return (
      this.events[t] || (this.events[t] = new Cp()),
      this.events[t].add(n)
    );
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class DE extends IM {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    (delete n[t], delete r[t]);
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...r },
    { transformValues: i },
    o,
  ) {
    let s = QL(r, t || {}, this);
    if ((i && (n && (n = i(n)), r && (r = i(r)), s && (s = i(s))), o)) {
      GL(this, r, s);
      const a = NM(this, r, s, n);
      ((n = a.transitionEnd), (r = a.target));
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function bM(e) {
  return window.getComputedStyle(e);
}
class LM extends DE {
  constructor() {
    (super(...arguments), (this.type = "html"));
  }
  readValueFromInstance(t, n) {
    if (gi.has(n)) {
      const r = Ep(n);
      return (r && r.default) || 0;
    } else {
      const r = bM(t),
        i = (TS(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return wE(t, n);
  }
  build(t, n, r, i) {
    dp(t, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return mp(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    $t(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, i) {
    PS(t, n, r, i);
  }
}
class DM extends DE {
  constructor() {
    (super(...arguments), (this.type = "svg"), (this.isSVGTag = !1));
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (gi.has(n)) {
      const r = Ep(n);
      return (r && r.default) || 0;
    }
    return ((n = kS.has(n) ? n : ap(n)), t.getAttribute(n));
  }
  measureInstanceViewportBox() {
    return it();
  }
  scrapeMotionValuesFromProps(t, n) {
    return IS(t, n);
  }
  build(t, n, r, i) {
    hp(t, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    OS(t, n, r, i);
  }
  mount(t) {
    ((this.isSVGTag = pp(t.tagName)), super.mount(t));
  }
}
const MM = (e, t) =>
    cp(e)
      ? new DM(t, { enableHardwareAcceleration: !1 })
      : new LM(t, { enableHardwareAcceleration: !0 }),
  zM = { layout: { ProjectionNode: OE, MeasureLayout: RE } },
  VM = { ...cD, ...kb, ...mM, ...zM },
  $M = VI((e, t) => gb(e, t, VM, MM));
var UM = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const FM = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Pt = (e, t) => {
    const n = x.forwardRef(
      (
        {
          color: r = "currentColor",
          size: i = 24,
          strokeWidth: o = 2,
          absoluteStrokeWidth: s,
          children: a,
          ...l
        },
        u,
      ) =>
        x.createElement(
          "svg",
          {
            ref: u,
            ...UM,
            width: i,
            height: i,
            stroke: r,
            strokeWidth: s ? (Number(o) * 24) / Number(i) : o,
            className: `lucide lucide-${FM(e)}`,
            ...l,
          },
          [
            ...t.map(([c, d]) => x.createElement(c, d)),
            ...((Array.isArray(a) ? a : [a]) || []),
          ],
        ),
    );
    return ((n.displayName = `${e}`), n);
  },
  jM = Pt("Blocks", [
    [
      "rect",
      { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" },
    ],
    [
      "path",
      {
        d: "M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",
        key: "1fpvtg",
      },
    ],
  ]),
  BM = Pt("Code2", [
    ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
    ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
    ["path", { d: "m14.5 4-5 16", key: "e7oirm" }],
  ]),
  ME = Pt("Database", [
    ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
    ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
    ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
  ]),
  WM = Pt("Globe", [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["line", { x1: "2", x2: "22", y1: "12", y2: "12", key: "1dnqot" }],
    [
      "path",
      {
        d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",
        key: "nb9nel",
      },
    ],
  ]),
  ZM = Pt("GraduationCap", [
    ["path", { d: "M22 10v6M2 10l10-5 10 5-10 5z", key: "1ef52a" }],
    ["path", { d: "M6 12v5c3 3 9 3 12 0v-5", key: "1f75yj" }],
  ]),
  HM = Pt("Layers", [
    [
      "path",
      {
        d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
        key: "8b97xw",
      },
    ],
    [
      "path",
      { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65", key: "dd6zsq" },
    ],
    [
      "path",
      { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65", key: "ep9fru" },
    ],
  ]),
  GM = Pt("Layout", [
    [
      "rect",
      {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        ry: "2",
        key: "1m3agn",
      },
    ],
    ["line", { x1: "3", x2: "21", y1: "9", y2: "9", key: "1vqk6q" }],
    ["line", { x1: "9", x2: "9", y1: "21", y2: "9", key: "wpwpyp" }],
  ]),
  KM = Pt("MessageCircle", [
    ["path", { d: "m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z", key: "v2veuj" }],
  ]),
  QM = Pt("Monitor", [
    [
      "rect",
      { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" },
    ],
    ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
    ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }],
  ]),
  YM = Pt("Phone", [
    [
      "path",
      {
        d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
        key: "foiqr5",
      },
    ],
  ]),
  JM = Pt("Quote", [
    [
      "path",
      {
        d: "M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",
        key: "4rm80e",
      },
    ],
    [
      "path",
      {
        d: "M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",
        key: "10za9r",
      },
    ],
  ]),
  qM = Pt("Rocket", [
    [
      "path",
      {
        d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",
        key: "m3kijz",
      },
    ],
    [
      "path",
      {
        d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",
        key: "1fmvmk",
      },
    ],
    ["path", { d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0", key: "1f8sc4" }],
    ["path", { d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5", key: "qeys4" }],
  ]),
  zE = Pt("Smartphone", [
    [
      "rect",
      {
        width: "14",
        height: "20",
        x: "5",
        y: "2",
        rx: "2",
        ry: "2",
        key: "1yt0o3",
      },
    ],
    ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ]),
  XM = Pt("Star", [
    [
      "polygon",
      {
        points:
          "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
        key: "8f66p6",
      },
    ],
  ]),
  ez = Pt("Terminal", [
    ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
    ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
  ]),
  tz = () => {
    const e = () => {
      const t = document.getElementById("services");
      t && t.scrollIntoView({ behavior: "smooth" });
    };
    return De(Oe, {
      className:
        "relative overflow-hidden bg-gradient-to-br from-primary to-blue-700 pt-10 pb-20 px-4",
      children: [
        De($M.div, {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "text-center",
          children: [
            De(Oe, {
              className:
                "inline-flex items-center justify-center p-2 bg-white/10 rounded-full mb-6 backdrop-blur-sm",
              children: [
                j(qM, { size: 16, className: "text-secondary mr-2" }),
                j(dt, {
                  className:
                    "text-white text-xs font-semibold uppercase tracking-wider",
                  children: "Giải pháp lập trình chuyên nghiệp",
                }),
              ],
            }),
            De(dt, {
              className: "text-white font-bold leading-tight mb-4 text-2xl",
              children: [
                "Biến ý tưởng thành",
                " ",
                j("span", {
                  className: "text-secondary",
                  children: "Sản phẩm hoàn hảo",
                }),
              ],
            }),
            j(dt, {
              className:
                "text-blue-100 mb-8 max-w-xs mx-auto text-sm leading-relaxed",
              children:
                "Đội ngũ dev kinh nghiệm, cam kết **không copy**, giải thích code 1-1, bàn giao đúng deadline. Uy tín làm nên thương hiệu!",
            }),
            j(Oe, {
              className: "px-4",
              children: j(Qd, {
                fullWidth: !0,
                variant: "secondary",
                className: "h-12 rounded-xl font-bold shadow-lg",
                prefixIcon: j(BM, { size: 20 }),
                onClick: e,
                children: "Xem Dịch Vụ",
              }),
            }),
          ],
        }),
        j("div", {
          className:
            "absolute top-[-10%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10",
        }),
        j("div", {
          className:
            "absolute bottom-[-10%] left-[-10%] w-48 h-48 bg-blue-400/20 rounded-full blur-2xl -z-10",
        }),
      ],
    });
  },
  nz = [
    {
      title: "Web Frontend",
      icon: j(WM, { className: "text-blue-500", size: 20 }),
      skills: ["HTML/CSS/JS", "ReactJS", "VueJS", "Angular"],
      color: "bg-blue-50",
    },
    {
      title: "Mobile App",
      icon: j(zE, { className: "text-purple-500", size: 20 }),
      skills: ["React Native", "Zalo Mini App"],
      color: "bg-purple-50",
    },
    {
      title: "Backend & Server",
      icon: j(ez, { className: "text-green-500", size: 20 }),
      skills: ["Node.js", "PHP (Laravel)", "Java", "Python"],
      color: "bg-green-50",
    },
    {
      title: "Database Management",
      icon: j(ME, { className: "text-orange-500", size: 20 }),
      skills: ["MySQL", "PostgreSQL", "SQL Server"],
      color: "bg-orange-50",
    },
  ],
  rz = () =>
    De(Oe, {
      className: "bg-white py-12 px-4",
      children: [
        De(Oe, {
          className: "mb-8",
          children: [
            De(Oe, {
              className: "flex items-center gap-2 mb-2",
              children: [
                j(HM, { className: "text-primary", size: 24 }),
                j(dt, {
                  size: "large",
                  className: "font-bold text-gray-900",
                  children: "Hệ Sinh Thái Kỹ Thuật",
                }),
              ],
            }),
            j("div", { className: "w-12 h-1 bg-primary rounded-full mb-4" }),
            j(dt, {
              className: "text-gray-500 text-sm leading-relaxed",
              children:
                "Chúng tôi sử dụng các công nghệ hiện đại nhất để xây dựng giải pháp tối ưu cho đồ án và sản phẩm thực tế của bạn.",
            }),
          ],
        }),
        j(Oe, {
          className: "grid grid-cols-1 gap-4",
          children: nz.map((e, t) =>
            De(
              Oe,
              {
                className: `${e.color} p-5 rounded-2xl border border-white shadow-sm`,
                children: [
                  De(Oe, {
                    className: "flex items-center gap-3 mb-4",
                    children: [
                      j("div", {
                        className: "bg-white p-2 rounded-xl shadow-sm",
                        children: e.icon,
                      }),
                      j(dt, {
                        className:
                          "font-bold text-gray-800 uppercase tracking-tight text-xs",
                        children: e.title,
                      }),
                    ],
                  }),
                  j(Oe, {
                    className: "flex flex-wrap gap-2",
                    children: e.skills.map((n, r) =>
                      j(
                        "div",
                        {
                          className:
                            "bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm",
                          children: j(dt, {
                            className: "text-gray-700 text-xs font-medium",
                            children: n,
                          }),
                        },
                        r,
                      ),
                    ),
                  }),
                ],
              },
              t,
            ),
          ),
        }),
      ],
    }),
  iz = [
    {
      icon: j(GM, { className: "text-blue-500" }),
      title: "Thiết Kế Web Trọn Gói",
      desc: "Chuẩn SEO, giao diện đẹp, tương thích mọi thiết bị.",
    },
    {
      icon: j(zE, { className: "text-purple-500" }),
      title: "App Di Động Đa Nền Tảng",
      desc: "Xây dựng ứng dụng iOS & Android mượt mà, chuyên nghiệp.",
    },
    {
      icon: j(ZM, { className: "text-orange-500" }),
      title: "Đồ Án CNTT Chất Lượng",
      desc: "Cam kết sạch code, hướng dẫn chạy và giải thích chi tiết.",
    },
    {
      icon: j(ME, { className: "text-green-500" }),
      title: "Tối Ưu & Bảo Mật DB",
      desc: "Xử lý dữ liệu lớn, bảo mật thông tin tuyệt đối.",
    },
    {
      icon: j(jM, { className: "text-red-500" }),
      title: "Phát Triển Game 2D/3D",
      desc: "Hiện thực hóa ý tưởng game với Unity, Cocos.",
    },
    {
      icon: j(QM, { className: "text-indigo-500" }),
      title: "Phần Mềm Quản Lý",
      desc: "Giải pháp chuyển đổi số cho doanh nghiệp nhỏ.",
    },
  ],
  oz = () =>
    De(Oe, {
      id: "services",
      className:
        "bg-white py-12 px-4 rounded-t-3xl -mt-8 relative z-10 shadow-2xl",
      children: [
        De(Oe, {
          className: "text-center mb-10",
          children: [
            j(dt, {
              size: "large",
              className: "font-bold text-gray-900 mb-2",
              children: "Dịch Vụ Của Chúng Tôi",
            }),
            j("div", { className: "w-12 h-1 bg-primary mx-auto rounded-full" }),
          ],
        }),
        j(Oe, {
          className: "grid grid-cols-2 gap-4",
          children: iz.map((e, t) =>
            De(
              Oe,
              {
                className:
                  "p-4 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow",
                children: [
                  j("div", {
                    className:
                      "w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-3",
                    children: e.icon,
                  }),
                  j(dt, {
                    className: "font-bold text-gray-800 text-sm mb-1",
                    children: e.title,
                  }),
                  j(dt, {
                    className: "text-gray-500 text-[10px] leading-tight",
                    children: e.desc,
                  }),
                ],
              },
              t,
            ),
          ),
        }),
      ],
    }),
  sz = [
    {
      title: "Web Bán Điện Thoại & Laptop",
      category: "Fullstack Website",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=300",
      desc: "Tích hợp thanh toán online, quản lý kho hàng chuẩn SEO.",
    },
    {
      title: "App Quản Lý Nhà Trọ Thông Minh",
      category: "Mobile Application",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=300",
      desc: "Theo dõi tiền điện nước, hợp đồng ngay trên điện thoại.",
    },
    {
      title: "Website Đặt Lịch Khám Bệnh",
      category: "Đồ Án Tốt Nghiệp",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=300",
      desc: "Hệ thống quản lý bác sĩ, bệnh nhân và lịch hẹn tự động.",
    },
    {
      title: "Nhận Diện Khuôn Mặt AI",
      category: "Python & Machine Learning",
      image:
        "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=300",
      desc: "Ứng dụng điểm danh sinh viên bằng camera thời gian thực.",
    },
  ],
  az = () =>
    De(Oe, {
      className: "bg-gray-50 py-12 px-4 shadow-inner",
      children: [
        De(Oe, {
          className: "mb-8",
          children: [
            j(dt, {
              size: "large",
              className: "font-bold text-gray-900 mb-1",
              children: "Dự Án Tiêu Biểu",
            }),
            j("div", { className: "w-12 h-1 bg-primary rounded-full" }),
          ],
        }),
        j(Oe, {
          className: "space-y-6",
          children: sz.map((e, t) =>
            De(
              Oe,
              {
                className:
                  "bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col items-center",
                children: [
                  j("img", {
                    src: e.image,
                    alt: e.title,
                    className: "w-full h-48 object-cover",
                  }),
                  De(Oe, {
                    className: "p-5 w-full",
                    children: [
                      j(dt, {
                        className:
                          "text-primary text-[10px] font-bold uppercase mb-1",
                        children: e.category,
                      }),
                      j(dt, {
                        className:
                          "font-bold text-gray-900 text-lg leading-tight mb-2",
                        children: e.title,
                      }),
                      j(dt, {
                        className: "text-gray-600 text-sm italic",
                        children: e.desc,
                      }),
                    ],
                  }),
                ],
              },
              t,
            ),
          ),
        }),
      ],
    }),
  lz = [
    {
      name: "Minh Quân",
      role: "Sinh viên năm cuối HUBT",
      content:
        "Nhờ có team mà mình bảo vệ đồ án đạt loại Xuất sắc. Code cực sạch, comment chi tiết, lúc hỏi gì cũng được giải thích tận tình. Rất uy tín!",
      stars: 5,
    },
    {
      name: "Thu Trang",
      role: "Chủ thương hiệu mỹ phẩm",
      content:
        "Web bán hàng làm rất nhanh, đúng ý mình. Giao diện sang trọng mà giá lại rất hợp lý so với thị trường.",
      stars: 5,
    },
    {
      name: "Hoàng Long",
      role: "Sinh viên Bách Khoa",
      content:
        "Đồ án hệ nhúng tưởng khó mà team xử lý ngọt xớt. Bàn giao đúng deadline, hỗ trợ cài đặt từ A-Z luôn.",
      stars: 5,
    },
  ],
  uz = () =>
    De(Oe, {
      className: "bg-white py-12 px-4 mb-24",
      children: [
        De(Oe, {
          className: "text-center mb-10",
          children: [
            j(dt, {
              size: "large",
              className: "font-bold text-gray-900 mb-2",
              children: "Khách Hàng Nói Gì",
            }),
            j("div", { className: "w-12 h-1 bg-primary mx-auto rounded-full" }),
          ],
        }),
        j(Oe, {
          className: "space-y-6",
          children: lz.map((e, t) =>
            De(
              Oe,
              {
                className: "p-6 bg-gray-50 rounded-2xl relative",
                children: [
                  j(JM, {
                    className: "absolute top-4 right-4 text-primary/10",
                    size: 40,
                  }),
                  j(Oe, {
                    className: "flex mb-2",
                    children: [...Array(e.stars)].map((n, r) =>
                      j(
                        XM,
                        {
                          size: 14,
                          className: "text-secondary fill-secondary",
                        },
                        r,
                      ),
                    ),
                  }),
                  De(dt, {
                    className:
                      "text-gray-700 italic mb-4 text-sm leading-relaxed",
                    children: ['"', e.content, '"'],
                  }),
                  De(Oe, {
                    children: [
                      j(dt, {
                        className: "font-bold text-gray-900 text-sm",
                        children: e.name,
                      }),
                      j(dt, {
                        className: "text-gray-400 text-xs",
                        children: e.role,
                      }),
                    ],
                  }),
                ],
              },
              t,
            ),
          ),
        }),
      ],
    });
function Np(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $g(e, t) {
  return t != null && typeof Symbol < "u" && t[Symbol.hasInstance]
    ? !!t[Symbol.hasInstance](e)
    : e instanceof t;
}
var cz = Object.prototype.toString,
  dz = "[object Null]",
  fz = "[object Undefined]";
function Ug(e) {
  return e == null
    ? e === void 0
      ? fz
      : dz
    : (function (t) {
        return cz.call(t);
      })(e);
}
function Fg(e) {
  return e != null && typeof e == "object";
}
var Ke = {
    isEmpty: function (e) {
      return (
        e == null ||
        (typeof e == "object" && Object.keys(e).length === 0) ||
        (typeof e == "string" && e.trim().length === 0)
      );
    },
    isNull: function (e) {
      return e === null;
    },
    isUndefined: function (e) {
      return e === void 0;
    },
    isFunction: function (e) {
      return typeof e == "function";
    },
    isObject: function (e) {
      return e !== null && (typeof e == "function" || typeof e == "object");
    },
    isString: function (e) {
      return e != null && typeof e.valueOf() == "string";
    },
    isNumber: function (e) {
      return typeof e == "number" || (Fg(e) && Ug(e) == "[object Number]");
    },
    isArray: function (e) {
      return Array.isArray(e);
    },
    isRegExp: function (e) {
      return Fg(e) && Ug(e) == "[object RegExp]";
    },
    get: function (e, t) {
      var n =
          arguments.length > 2 && arguments[2] !== void 0
            ? arguments[2]
            : void 0,
        r = function (o) {
          return String.prototype.split
            .call(t, o)
            .filter(Boolean)
            .reduce(function (s, a) {
              return s != null ? s[a] : s;
            }, e);
        },
        i = r(/[,[\]]+?/) || r(/[,[\].]+?/);
      return i === void 0 || i === e ? n : i;
    },
    isPromise: function (e) {
      return (
        !!e &&
        (typeof e == "object" || typeof e == "function") &&
        typeof e.then == "function"
      );
    },
  },
  Ms,
  VE = window.zAppID,
  Rf = window.APP_ID,
  hz = "https://h5.zdn.vn/zapps",
  pz = "h5.zdn.vn",
  mz = "/zapps",
  Ni = {
    ZOAUTH: "h5.zdn.vn_zoauth",
    ZACC_SESSION: "h5.zdn.vn_zacc_session",
    JS_TOKEN: "h5.zdn.vn_zlink3rd",
    ZOAUTH_VRF: "h5.zdn.vn_zoauth_vrf",
    DEVICE_ID: "h5.zdn.vn_deviceID",
    CONTEXT_ID: "h5.zdn.vn_contextID",
    CONTEXT_TYPE: "h5.zdn.vn_contextType",
    UTOKEN_ZPI: "h5.zdn.vn_utoken_zpi",
    GTOKEN_ZPI: "h5.zdn.vn_gtoken_zpi",
    ZPP_ZPI: "h5.zdn.vn_zpp_zpi",
    ZPT_ZPI: "h5.zdn.vn_zpt_zpi",
  },
  Yl = {
    GET_USER_INFO: "https://graph.zalo.me/v2.0/me",
    GET_ACCESS_TOKEN: "https://h5.zalo.me/openapi/access_token",
    GET_ACCESS_TOKEN_V3: "https://oauth.zaloapp.com/v3/access_token",
    GET_LIST_USER_INFO: "https://graph.zalo.me/v2.0/me/friends/list",
    CREATE_ORDER: "https://payment-mini.zalo.me/api/order/create",
    GET_APP_INFO: "https://h5.zalo.me/apps/get-info",
    SEND_ACTION_LOG: "https://h5.zalo.me/log/async",
    CREATE_SHARE_LINK: "https://h5.zalo.me/openapi/create-sharelink",
    CHECK_INTERACT_OA: "https://h5.zalo.me/openapi/check-interact-oa",
    GET_AUTH_SETTING: "https://h5.zalo.me/apis/users/auth-settings",
  };
(function (e) {
  ((e.REQUEST = "REQUEST"),
    (e.MODIFIED_REQUEST = "MODIFIED_REQUEST"),
    (e.RESPONSE = "RESPONSE"),
    (e.MODIFIED_RESPONSE = "MODIFIED_RESPONSE"),
    (e.NOT_FOUND = "NOT_FOUND"));
})(Ms || (Ms = {}));
var jg,
  Bg,
  ne = {
    SUCCESS: 0,
    UNKNOWN_ERROR: -2e3,
    BAD_REQUEST: -1400,
    INTERNAL_SERVER_ERROR: -1500,
    UNAUTHORIZED: -1401,
    FORBIDDEN: -1403,
    CLIENT_NOT_SUPPORT: -1404,
    TIME_OUT: -1408,
    FAIL_LIMIT: -1409,
    DUPLICATE_REQUEST: -1410,
    DECODE_FAILED: -2001,
    USER_DENIED: -2002,
    USER_CANCEL: -2003,
    MEDIA_PICKER_FAIL: -2004,
    SAVE_IMAGE_FAIL: -2005,
    SAVE_VIDEO_FAIL: -2006,
    SAVE_FILE_FAIL: -2007,
    DEVICE_NOT_SUPPORT: -600,
    SCAN_TIMEOUT: -601,
    SERVICE_NOT_READY: -602,
    UNREADABLE: -603,
    INVALID_MRZ: -604,
    PROCESSING: -605,
    CANCEL: -606,
    MPDS_ACTION_INVALID: -3e3,
    MPDS_SOURCE_INVALID: -3005,
    MPDS_APPID_INVALID: -3006,
    INVALID_URL_FORMAT: -700,
    UNSUPPORTED_FILE_TYPE: -701,
    DOWNLOAD_FAIL: -702,
    OPEN_DOCUMENT_FAIL: -703,
  },
  le = {
    SUCCESS: "Success",
    UNKNOWN_ERROR: "Unknown error. Please try again later.",
    FAIL_LIMIT: "Request limit exceeded. Please try again later.",
    DUPLICATE_REQUEST: "Duplicate request. Please try again later.",
    TIME_OUT: "Request timeout. Please try again later.",
    LOGIN_REQUIRED:
      "Please login (https://miniapp.zalo.me/docs/api/login) before to call this api",
    LOGIN_FAILED: "Login failed",
    NOT_PERMISSION: "You don't have permission to call this api",
    CLIENT_NOT_SUPPORT: "This API is not supported in this version of Zalo",
    DECODE_FAILED: "Can not decode id. Please check your params again.",
    INVALID_PARAM: "Invalid parameter",
    USER_DENIED: "User denied",
    USER_CANCEL: "User cancel",
    NEED_USER_AUTH:
      "User Authentication Required. Please grant User Authentication permission before requesting User Permission",
    MEDIA_PICKER_FAIL: "Unable to pick media",
    SAVE_IMAGE_FAIL: "Unable to save image",
    SAVE_VIDEO_FAIL: "Unable to save video",
    ANDROID_ONLY: "This API only works on android device",
    IOS_ONLY: "This API only works on iOS device",
    LFS_REACH_STORAGE_LIMIT: "Your max 5MB of local storage data is reached",
    DEVICE_STORAGE_FULL: "Your device run out of storage",
    INVALID_FILE_PATH: "File cannot be found. Please check your param again.",
    FILE_DOWNLOADING: "Please wait... We're still download the file.",
    NO_INTERNET: "No Internet connection. Please check your network settings.",
    DOWNLOAD_FAIL:
      "Download failed. Please check your network or file path again.",
    SAVE_FILE_FAIL: "Unable to save file",
    DEVICE_NOT_SUPPORT: "This device does not support NFC",
    SERVICE_NOT_READY: "NFC service is not ready. Please check in your setting",
    UNREADABLE: "NFC tag is unreadable",
    INVALID_MRZ: "Invalid MRZ data. Please try again later.",
    PROCESSING: "Processing NFC tag. Please wait a moment.",
    CANCEL: "User cancel",
    SCAN_TIMEOUT: "NFC scan timeout. Please try again later.",
    MPDS_ACTION_INVALID:
      "Action name from input data does not match declared API actions",
    MPDS_SOURCE_INVALID: "This API not called from Mini App",
    MPDS_APPID_INVALID:
      "AppId from input data does not match the currently opened AppId",
    INVALID_URL_FORMAT: "Download failed. Please check your URL again.",
    UNSUPPORTED_FILE_TYPE: "Unsupported file type",
    OPEN_DOCUMENT_FAIL: "Open document failed",
  },
  W = {
    SUCCESS: { code: ne.SUCCESS, message: le.SUCCESS },
    UNKNOWN_ERROR: { code: ne.UNKNOWN_ERROR, message: le.UNKNOWN_ERROR },
    UNAUTHORIZED: { code: ne.UNAUTHORIZED, message: le.LOGIN_REQUIRED },
    FORBIDDEN: { code: ne.FORBIDDEN, message: le.NOT_PERMISSION },
    CLIENT_NOT_SUPPORT: {
      code: ne.CLIENT_NOT_SUPPORT,
      message: le.CLIENT_NOT_SUPPORT,
    },
    DECODE_FAILED: { code: ne.DECODE_FAILED, message: le.DECODE_FAILED },
    TIME_OUT: { code: ne.TIME_OUT, message: le.TIME_OUT },
    USER_DENIED: { code: ne.USER_DENIED, message: le.USER_DENIED },
    USER_CANCEL: { code: ne.USER_CANCEL, message: le.USER_CANCEL },
    DUPLICATE_REQUEST: {
      code: ne.DUPLICATE_REQUEST,
      message: le.DUPLICATE_REQUEST,
    },
    DEVICE_NOT_SUPPORT: {
      code: ne.DEVICE_NOT_SUPPORT,
      message: le.DEVICE_NOT_SUPPORT,
    },
    SERVICE_NOT_READY: {
      code: ne.SERVICE_NOT_READY,
      message: le.SERVICE_NOT_READY,
    },
    UNREADABLE: { code: ne.UNREADABLE, message: le.UNREADABLE },
    INVALID_MRZ: { code: ne.INVALID_MRZ, message: le.INVALID_MRZ },
    PROCESSING: { code: ne.PROCESSING, message: le.PROCESSING },
    CANCEL: { code: ne.CANCEL, message: le.CANCEL },
    SCAN_TIMEOUT: { code: ne.SCAN_TIMEOUT, message: le.SCAN_TIMEOUT },
    MPDS_ACTION_INVALID: {
      code: ne.MPDS_ACTION_INVALID,
      message: le.MPDS_ACTION_INVALID,
    },
    MPDS_SOURCE_INVALID: {
      code: ne.MPDS_SOURCE_INVALID,
      message: le.MPDS_SOURCE_INVALID,
    },
    MPDS_APPID_INVALID: {
      code: ne.MPDS_APPID_INVALID,
      message: le.MPDS_APPID_INVALID,
    },
  },
  $E = {
    addRating: { limit: 1 },
    authorize: {},
    isAllowedInteractWithOA: {},
    favoriteApp: {},
    followOA: {},
    getLocation: {},
    getPhoneNumber: {},
    getShareableLink: {},
    getSetting: {},
    getAppInfo: {},
    getUserInfo: {},
    interactOA: {},
    openProfilePicker: {},
    openShareSheet: {},
    unfollowOA: {},
    checkTransaction: { limit: 5 },
    createOrder: { limit: 5 },
    createOrderIAP: { limit: 5 },
    selectPaymentMethod: {},
    requestSendNotification: {},
  },
  Ap = {
    GET_DOWNLOADED_STICKER: { haveCallback: !0 },
    OPEN_SHARE_STICKER: {},
    OPEN_PROFILE: { requireAccessToken: !0 },
    OPEN_FEED_DETAIL: {},
    OPEN_FRIEND_RADA: {},
    OPEN_INAPP: {},
    OPEN_OUTAPP: { requireAccessToken: !0 },
    OPEN_PAGE: {},
    OPEN_PHOTODETAIL: {},
    OPEN_GALARY: {},
    OPEN_GAMECENTER: {},
    OPEN_GAMENEWS: {},
    OPEN_TAB_CONTACT: {},
    OPEN_TAB_SOCIAL: {},
    OPEN_FRIENDSUGGEST: {},
    OPEN_GROUPLIST: {},
    OPEN_NEARBY: {},
    OPEN_ROOM: {},
    OPEN_STICKERSTORE: {},
    OPEN_CREATECHAT: {},
    COPY_LINK_CATESTICKER: {},
    REQUEST_BUY_STICKER: {},
    OPEN_CHAT: { requireAccessToken: !0 },
    OPEN_TAB_CHAT: {},
    OPEN_CHATGROUP: {},
    OPEN_ADDFRIEND: {},
    OPEN_TAB_MORE: {},
    OPEN_POSTFEED: { requireAccessToken: !0 },
    OPEN_LOGINDEVICES: {},
    OPEN_SENDSTICKER: {},
    REPORT_ABUSE: { haveCallback: !0 },
    FOLLOW_OA: {
      haveCallback: !0,
      requireAccessToken: !0,
      errorList: {
        android: { "-400": { mapTo: W.DUPLICATE_REQUEST } },
        iOS: { "-400": { mapTo: W.DUPLICATE_REQUEST } },
      },
    },
    UNFOLLOW_OA: {
      haveCallback: !0,
      requireAccessToken: !0,
      errorList: {
        android: { "-400": { mapTo: W.DUPLICATE_REQUEST } },
        iOS: { "-400": { mapTo: W.DUPLICATE_REQUEST } },
      },
    },
    OPEN_GAMEDETAIL: {},
    OPEN_SHARESHEET: {
      haveCallback: !0,
      requireAccessToken: !0,
      errorList: {
        android: { "-101": { mapTo: W.CLIENT_NOT_SUPPORT } },
        iOS: { "-101": { mapTo: W.CLIENT_NOT_SUPPORT } },
      },
    },
    REQUEST_PERMISSION_CAMERA: {
      errorList: {
        android: { "-2": { mapTo: W.USER_DENIED } },
        iOS: { "-2": { mapTo: W.USER_DENIED } },
      },
    },
    CHANGE_TITLE_HEADER: { skipJump: !0 },
    WEBVIEW_CLEARCACHE: {},
    WEBVIEW_CONFIRMCACHE: {},
    WEBVIEW_ISVISIBLE: {},
    WEBVIEW_NETWORKTYPE: { skipJump: !0 },
    CHANGE_BUTTON_HEADER: {},
    CREATE_OPTIONS_MENU: { skipJump: !0, haveCallback: !0 },
    CREATE_SHORTCUT: { requireAccessToken: !0 },
    CHANGE_ACTIONBAR_LEFTBUTTON_TYPE: { skipJump: !0, haveCallback: !0 },
    WINDOW_CLOSE: { skipJump: !0, haveCallback: !0 },
    WEBVIEW_CHECKRESERROR: {},
    IAP_REQUESTPAYMENT: { haveCallback: !0 },
    ZBROWSER_GETSTATS: {},
    ZBROWSER_JSBRIDGE: { skipJump: !0, haveCallback: !0 },
    PROMPT_AUTHENTICATION: {},
    CHANGE_ACTIONBAR_COLOR: { skipJump: !0 },
    PROMPT_AUTHENTICATION_CHECK_STATE: {},
    OPEN_APPSTORE: {},
    GET_LOCATION: {
      haveCallback: !0,
      errorList: {
        android: {
          "-1": { mapTo: W.USER_DENIED },
          "-400": { mapTo: W.DUPLICATE_REQUEST },
        },
        iOS: {
          "-1": { mapTo: W.USER_DENIED },
          "-400": { mapTo: W.DUPLICATE_REQUEST },
        },
      },
    },
    QUERY_LOCATION_HIDE: { haveCallback: !0 },
    SHOW_TOAST: { haveCallback: !0, timeout: 2 },
    OPEN_APP: {},
    HIDE_KEYBOARD: {},
    OPEN_PHONE: {},
    OPEN_QR: {},
    OPEN_SMS: {
      errorList: {
        iOS: {
          "-9": { mapTo: W.UNKNOWN_ERROR },
          "-10": { mapTo: W.USER_CANCEL },
        },
      },
    },
    VIEW_MYQR: { haveCallback: !0, timeout: !0, requireAccessToken: !0 },
    KEEP_SCREEN: { haveCallback: !0, timeout: 2 },
    CHANGE_AUTOROTATE: { skipJump: !0 },
    CHECK_APP_INSTALLED: {},
    QUERY_SHOW: {},
    QUERY_HIDE: {},
    OPEN_INAPPRW: {},
    ZALORUN_GETTRACKINGSTATUS: { haveCallback: !0 },
    ZALORUN_SETTRACKINGSTATUS: { haveCallback: !0 },
    ZALORUN_GETDAYSTEP: { haveCallback: !0 },
    ZALORUN_FORCESUBMITDATA: { haveCallback: !0 },
    ZALORUN_SETWEIGHT: { haveCallback: !0 },
    OPEN_PROFILE_EXT: {},
    DOWNLOAD_CATE: { haveCallback: !0 },
    JUMP_LOGIN: { skipJump: !0, whiteList: !0 },
    OPEN_ADTIMA_ADS_INTERSTITIAL: {},
    OPEN_ADTIMA_ADS: {},
    GET_ADIDCLIENT: {},
    SCAN_IBEACON: {},
    SAVE_VIDEO_GALLERY: {
      versionLive: { iOS: 628 },
      errorList: {
        android: {
          "-101": {
            mapTo: { code: ne.SAVE_VIDEO_FAIL, message: le.SAVE_VIDEO_FAIL },
            needMoreDetail: !0,
          },
          "-102": {
            mapTo: { code: ne.SAVE_VIDEO_FAIL, message: le.SAVE_VIDEO_FAIL },
            needMoreDetail: !0,
          },
        },
        iOS: {
          "-10": {
            mapTo: { code: ne.SAVE_VIDEO_FAIL, message: le.SAVE_VIDEO_FAIL },
            needMoreDetail: !0,
          },
        },
      },
    },
    INTERACTIVE_VIBRATION: {},
    SAVE_IMAGE_GALLERY: {
      versionLive: { iOS: 408 },
      errorList: {
        android: {
          "-101": {
            mapTo: { code: ne.SAVE_IMAGE_FAIL, message: le.SAVE_IMAGE_FAIL },
            needMoreDetail: !0,
          },
          "-102": {
            mapTo: { code: ne.SAVE_IMAGE_FAIL, message: le.SAVE_IMAGE_FAIL },
            needMoreDetail: !0,
          },
        },
        iOS: {
          "-10": {
            mapTo: { code: ne.SAVE_IMAGE_FAIL, message: le.SAVE_IMAGE_FAIL },
            needMoreDetail: !0,
          },
        },
      },
    },
    OPEN_MP: { versionLive: { iOS: 402 } },
    CHANGE_ACTIONBAR: {
      haveCallback: !0,
      timeout: 2,
      versionLive: { iOS: 402 },
      skipJump: !0,
    },
    ZBROWSER_MPDS: {
      haveCallback: !0,
      timeout: 2,
      versionLive: { iOS: 402 },
      errorList: {
        android: {
          "-100": { mapTo: W.MPDS_ACTION_INVALID },
          "-101": { mapTo: W.UNKNOWN_ERROR },
          "-105": { mapTo: W.MPDS_SOURCE_INVALID },
          "-106": { mapTo: W.MPDS_APPID_INVALID },
        },
        iOS: {
          "-10": { mapTo: W.MPDS_ACTION_INVALID },
          "-101": { mapTo: W.MPDS_APPID_INVALID },
          "-102": { mapTo: W.UNKNOWN_ERROR },
        },
      },
    },
    ZBROWSER_MPDS_SYNC: {
      versionLive: { iOS: 402 },
      errorList: {
        android: {
          "-100": { mapTo: W.MPDS_ACTION_INVALID },
          "-101": { mapTo: W.UNKNOWN_ERROR },
          "-105": { mapTo: W.MPDS_SOURCE_INVALID },
          "-106": { mapTo: W.MPDS_APPID_INVALID },
        },
        iOS: {
          "-10": { mapTo: W.MPDS_ACTION_INVALID },
          "-101": { mapTo: W.MPDS_APPID_INVALID },
          "-102": { mapTo: W.UNKNOWN_ERROR },
        },
      },
    },
    WEBVIEW_SET_RESULT: { versionLive: { iOS: 416 } },
    MP_GET_NUMBER: {
      versionLive: { iOS: 416 },
      errorList: {
        android: {
          "-1": { mapTo: W.USER_DENIED },
          "-101": { mapTo: W.USER_DENIED },
          "-400": { mapTo: W.DUPLICATE_REQUEST },
        },
        iOS: {
          "-1": { mapTo: W.USER_DENIED },
          "-10": { mapTo: W.USER_DENIED },
          "-400": { mapTo: W.DUPLICATE_REQUEST },
        },
      },
    },
    MP_OPEN_PROFILE_PICKER: {
      requireAccessToken: !0,
      versionLive: { iOS: 432 },
      errorList: {
        android: { "-101": { mapTo: W.USER_CANCEL } },
        iOS: { "-101": { mapTo: W.USER_CANCEL } },
      },
    },
    GET_SUPPORTED_ACTIONS: { whiteList: !0 },
    MP_JOIN_WIFI: {
      haveCallback: !0,
      timeout: !0,
      versionLive: { android: 0, iOS: 0 },
      havePermission: !1,
      whiteList: !1,
    },
    PICK_MEDIA: {
      requireAccessToken: !0,
      versionLive: { iOS: 440 },
      errorList: {
        android: {
          "-101": { mapTo: W.USER_CANCEL },
          999: {
            mapTo: {
              code: ne.MEDIA_PICKER_FAIL,
              message: le.MEDIA_PICKER_FAIL,
            },
            needMoreDetail: !0,
          },
        },
        iOS: {
          "-10": {
            mapTo: {
              code: ne.MEDIA_PICKER_FAIL,
              message: le.MEDIA_PICKER_FAIL,
            },
          },
        },
      },
    },
    MP_CLOSE_LOADINGVIEW: { skipJump: !0 },
    CHANGE_BOTTOMBAR: { haveCallback: !0, timeout: 2, skipJump: !0 },
    MA_MENU_MINIMIZE: { skipJump: !1, versionLive: { iOS: 520 } },
    MA_MENU_PERMISSION: { skipJump: !1, versionLive: { iOS: 520 } },
    MA_MENU_FAVORITES: { skipJump: !1, versionLive: { iOS: 520 } },
    MP_SEND_NOTIFICATION: {
      skipJump: !1,
      versionLive: { iOS: 530 },
      errorList: {
        android: {
          "-1": { mapTo: W.USER_DENIED },
          "-400": { mapTo: W.DUPLICATE_REQUEST },
        },
        iOS: {
          "-1": { mapTo: W.USER_DENIED },
          "-400": { mapTo: W.DUPLICATE_REQUEST },
        },
      },
    },
    MP_ADD_RATING: { skipJump: !1 },
    MP_ADD_MYFAVORITES: { skipJump: !1 },
    MP_INTERACT_OA: {
      skipJump: !1,
      errorList: {
        android: { "-400": { mapTo: W.DUPLICATE_REQUEST } },
        iOS: { "-400": { mapTo: W.DUPLICATE_REQUEST } },
      },
    },
    MP_USER_AUTHORIZE: {
      skipJump: !1,
      errorList: {
        android: { "-400": { mapTo: W.DUPLICATE_REQUEST } },
        iOS: { "-400": { mapTo: W.DUPLICATE_REQUEST } },
      },
    },
    MP_SELECT_PAYMENT_METHOD: { skipJump: !1 },
    CHECK_NFC: {
      skipJump: !1,
      versionLive: { iOS: 626 },
      errorList: {
        all: {
          "-1": { mapTo: W.UNKNOWN_ERROR },
          "-600": { mapTo: W.DEVICE_NOT_SUPPORT },
          "-602": { mapTo: W.SERVICE_NOT_READY },
        },
      },
    },
    SCAN_NFC: {
      skipJump: !1,
      haveCallback: !0,
      timeout: 65,
      errorList: {
        all: {
          "-1": { mapTo: W.UNKNOWN_ERROR },
          "-600": { mapTo: W.DEVICE_NOT_SUPPORT },
          "-601": { mapTo: W.SCAN_TIMEOUT },
          "-602": { mapTo: W.SERVICE_NOT_READY },
          "-603": { mapTo: W.UNREADABLE },
          "-604": { mapTo: W.INVALID_MRZ },
          "-605": { mapTo: W.PROCESSING },
          "-606": { mapTo: W.CANCEL },
        },
      },
    },
    MP_CONFIRM_REQUEST_PAYMENT: { skipJump: !1 },
    SAVE_FILE: {
      versionLive: { iOS: 628 },
      skipJump: !1,
      errorList: {
        android: {
          "-101": {
            mapTo: { code: ne.SAVE_FILE_FAIL, message: le.SAVE_FILE_FAIL },
            needMoreDetail: !0,
          },
          "-102": {
            mapTo: { code: ne.SAVE_FILE_FAIL, message: le.SAVE_FILE_FAIL },
            needMoreDetail: !0,
          },
        },
        iOS: {
          "-10": {
            mapTo: { code: ne.SAVE_FILE_FAIL, message: le.SAVE_FILE_FAIL },
            needMoreDetail: !0,
          },
        },
      },
    },
    MP_APP_LIFECYCLE_TRACKING: { skipJump: !1 },
    OPEN_DOCUMENT: {
      skipJump: !1,
      errorList: {
        all: {
          "-10": {
            mapTo: {
              code: ne.INVALID_URL_FORMAT,
              message: le.INVALID_URL_FORMAT,
            },
          },
          "-700": {
            mapTo: {
              code: ne.INVALID_URL_FORMAT,
              message: le.INVALID_URL_FORMAT,
            },
          },
          "-701": {
            mapTo: {
              code: ne.UNSUPPORTED_FILE_TYPE,
              message: le.UNSUPPORTED_FILE_TYPE,
            },
          },
          "-702": {
            mapTo: { code: ne.DOWNLOAD_FAIL, message: le.DOWNLOAD_FAIL },
          },
          "-703": {
            mapTo: {
              code: ne.OPEN_DOCUMENT_FAIL,
              message: le.OPEN_DOCUMENT_FAIL,
            },
          },
        },
      },
    },
    GET_DEVICE_INFO: { skipJump: !1 },
  },
  qc = {
    android: {
      "-4": W.DECODE_FAILED,
      "-5": W.CLIENT_NOT_SUPPORT,
      "-14": W.TIME_OUT,
    },
    iOS: {
      "-9": W.DECODE_FAILED,
      "-5": W.CLIENT_NOT_SUPPORT,
      "-14": W.TIME_OUT,
    },
  },
  vz = {
    "-12101": "Invalid params",
    "-12102": "Session expire",
    "-12103": "Not permission",
    "-12104": "Not Authorize",
    "-12105": "Unknown exception",
    "-12106": "Cannot create order",
    "-12107": "Transaction not found",
    "-12108": "Cannot update order",
    "-12109": "Cannot decode param",
    "-12110": "Version not support",
    "-12111": "Receipt expire",
    "-12112": "Product not found",
    "-12113": "Subscription other GW",
    "-12114": "Product already subcription",
    "-12115": "Not exist",
    "-12116": "Already exist",
    "-12117": "Not allow",
    "-12118": "Not permit",
    "-12119": "Internal error",
    "-2": "Unable to pay",
    "-6": "Unable to register",
    "-7": "Registered account",
    "-832": "Purchased by another account",
    "-833": "Register for another account",
    "-834": "Unable to register",
    "-2010": "System is maintaining",
    "-3999": "Not in Vietnam",
    "-12129": "Purchased by another account",
    123: "An error has occurred",
  };
((function (e) {
  e.DEV_TRACKING = "devTracking";
})(jg || (jg = {})),
  (function (e) {
    ((e[(e.APP_INITIALIZING = 95)] = "APP_INITIALIZING"),
      (e[(e.APP_READY = 96)] = "APP_READY"));
  })(Bg || (Bg = {})));
var gz = "checkoutKitWidget-ifCKW",
  yz = "https://h5.zalo.me",
  at = (function () {
    function e(n, r, i, o) {
      (Np(this, e),
        (this.code = n),
        (this.message = r),
        (this.api = i),
        (this.detail = o));
    }
    var t = e.prototype;
    return (
      (t.toString = function () {
        return "api: "
          .concat(String(this.api), "; code: ")
          .concat(this.code, "; message: ")
          .concat(JSON.stringify(this.message));
      }),
      (t.toJSON = function () {
        return {
          code: this.code,
          message: this.message,
          api: this.api,
          detail: this.detail,
        };
      }),
      e
    );
  })(),
  Wa = function (e, t) {
    return $g(e, at)
      ? (function (n, r) {
          return ((n.api = r), n.toJSON());
        })(e, t)
      : (function (n, r) {
          return $g(n, Error)
            ? new at(ne.UNKNOWN_ERROR, n.message, r).toJSON()
            : Ke.isEmpty(n == null ? void 0 : n.message) ||
                Ke.isEmpty(n == null ? void 0 : n.code)
              ? new at(ne.UNKNOWN_ERROR, le.UNKNOWN_ERROR, r, n).toJSON()
              : new at(n.code, n.message, r, n.detail).toJSON();
        })(e, t);
  },
  _z = "2.49.5";
function xf(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Sz(e) {
  if (Array.isArray(e)) return xf(e);
}
function Ez(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function wz() {
  throw new TypeError(
    "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
  );
}
function Tz(e, t) {
  if (e) {
    if (typeof e == "string") return xf(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    return (
      n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set"
        ? Array.from(n)
        : n === "Arguments" ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? xf(e, t)
          : void 0
    );
  }
}
function Pp(e) {
  return Sz(e) || Ez(e) || Tz(e) || wz();
}
function Wg(e, t, n, r, i, o, s) {
  try {
    var a = e[o](s),
      l = a.value;
  } catch (u) {
    return void n(u);
  }
  a.done ? t(l) : Promise.resolve(l).then(r, i);
}
function Fe(e) {
  return function () {
    var t = this,
      n = arguments;
    return new Promise(function (r, i) {
      var o = e.apply(t, n);
      function s(l) {
        Wg(o, r, i, s, a, "next", l);
      }
      function a(l) {
        Wg(o, r, i, s, a, "throw", l);
      }
      s(void 0);
    });
  };
}
function Jl(e) {
  return e && e.constructor === Symbol ? "symbol" : typeof e;
}
function kp(e) {
  return typeof window.Debug == "function"
    ? window.Debug(e)
    : function () {
        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
          n[r] = arguments[r];
      };
}
var Zg, hs, jt, Rn, Hg, Cf, Gg, Kg, Qg, Yg, Jg, qg, Xg, ey, ty, ny, ry, iy, oy;
((function (e) {
  ((e.none = "none"),
    (e.wifi = "wifi"),
    (e.cellular = "cellular"),
    (e.unknown = "unknown"));
})(Zg || (Zg = {})),
  (function (e) {
    ((e.wp = "wp"),
      (e.android = "android"),
      (e.iOS = "iOS"),
      (e.unknown = "unknown"));
  })(hs || (hs = {})),
  (function (e) {
    ((e.AppPaused = "h5.event.paused"),
      (e.AppResumed = "h5.event.resumed"),
      (e.NetworkChanged = "h5.event.connection.changed"),
      (e.OnDataCallback = "h5.event.webview.result"),
      (e.WebviewClosed = "h5.event.webview.close"),
      (e.OpenApp = "h5.event.open.mp"),
      (e.AppClose = "h5.event.action.close"),
      (e.PaymentCallback = "payment.callback"),
      (e.PaymentResult = "action.payment.result"),
      (e.PaymentDone = "action.payment.done"),
      (e.PaymentClose = "action.payment.close"),
      (e.DownloadProgress = "h5.event.webview.download.progress"));
  })(jt || (jt = {})),
  (function (e) {
    ((e.DOING = "doing"), (e.DONE = "done"));
  })(Rn || (Rn = {})),
  (function (e) {
    ((e[(e.user = 1)] = "user"),
      (e[(e.oa = 0)] = "oa"),
      (e[(e.aliasOA = 2)] = "aliasOA"));
  })(Hg || (Hg = {})),
  (function (e) {
    ((e[(e.user = 1)] = "user"), (e[(e.oa = 0)] = "oa"));
  })(Cf || (Cf = {})),
  (function (e) {
    ((e[(e.image = 1)] = "image"),
      (e[(e.multi_image = 2)] = "multi_image"),
      (e[(e.link = 4)] = "link"),
      (e[(e.profile = 5)] = "profile"));
  })(Gg || (Gg = {})),
  (function (e) {
    e[(e.cccd = 1)] = "cccd";
  })(Kg || (Kg = {})),
  (function (e) {
    ((e[(e.image = 1)] = "image"),
      (e[(e.gif = 11)] = "gif"),
      (e[(e.video = 12)] = "video"),
      (e[(e.link = 4)] = "link"),
      (e[(e.oa = 5)] = "oa"),
      (e[(e.zmp = 20)] = "zmp"),
      (e[(e.multi_image = 21)] = "multi_image"),
      (e[(e.zmp_deep_link = 4)] = "zmp_deep_link"),
      (e[(e.text = 22)] = "text"));
  })(Qg || (Qg = {})),
  (function (e) {
    ((e[(e.auto = 1)] = "auto"),
      (e[(e.portrait = 2)] = "portrait"),
      (e[(e.landscape = 3)] = "landscape"));
  })(Yg || (Yg = {})),
  (function (e) {
    e[(e.oneShot = 0)] = "oneShot";
  })(Jg || (Jg = {})),
  (function (e) {
    ((e[(e.zcamera = 3)] = "zcamera"),
      (e[(e.zcamera_photo = 1)] = "zcamera_photo"),
      (e[(e.zcamera_video = 2)] = "zcamera_video"),
      (e[(e.zcamera_scan = 7)] = "zcamera_scan"),
      (e[(e.photo = 4)] = "photo"),
      (e[(e.video = 5)] = "video"),
      (e[(e.file = 6)] = "file"));
  })(qg || (qg = {})),
  (function (e) {
    ((e.SUBSCRIPTION = "SUBSCRIPTION"), (e.ONETIME = "ONETIME"));
  })(Xg || (Xg = {})),
  (function (e) {
    ((e[(e.UNKNOW = 0)] = "UNKNOW"),
      (e[(e.DEFERRED = 1)] = "DEFERRED"),
      (e[(e.IMMEDIATE_AND_CHARGE_FULL_PRICE = 2)] =
        "IMMEDIATE_AND_CHARGE_FULL_PRICE"));
  })(ey || (ey = {})),
  (function (e) {
    ((e[(e.normal = 1)] = "normal"),
      (e[(e.hidden = 0)] = "hidden"),
      (e[(e.transparent = 2)] = "transparent"));
  })(ty || (ty = {})),
  (function (e) {
    ((e[(e.show = 1)] = "show"), (e[(e.hide = 0)] = "hide"));
  })(ny || (ny = {})),
  (function (e) {
    ((e[(e.show = 1)] = "show"), (e[(e.hide = 0)] = "hide"));
  })(ry || (ry = {})),
  (function (e) {
    ((e[(e.left = 0)] = "left"), (e[(e.center = 1)] = "center"));
  })(iy || (iy = {})),
  (function (e) {
    e.TOOL_DEL_FRIEND = "tool_del_friend";
  })(oy || (oy = {})));
function sy(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    ((r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r));
  }
}
function Rz(e, t, n) {
  return (t && sy(e.prototype, t), n && sy(e, n), e);
}
function xz(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Op(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {},
      r = Object.keys(n);
    (typeof Object.getOwnPropertySymbols == "function" &&
      (r = r.concat(
        Object.getOwnPropertySymbols(n).filter(function (i) {
          return Object.getOwnPropertyDescriptor(n, i).enumerable;
        }),
      )),
      r.forEach(function (i) {
        xz(e, i, n[i]);
      }));
  }
  return e;
}
function ui(e) {
  ui.on && ui.engine(e);
}
((ui.on = !1),
  (ui.engine = function (e) {
    var t = e.name,
      n = e.type,
      r = e.state,
      i = e.request,
      o = e.response,
      s = e.stage;
    console[n](
      [t, s, r, i, o]
        .filter(Boolean)
        .map(function (a) {
          return typeof a == "object" ? JSON.stringify(a) : a;
        })
        .join("; "),
    );
  }));
function Nf(e) {
  return (
    (Nf = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    Nf(e)
  );
}
function qr(e) {
  return Nf(e);
}
function Cz(e, t) {
  for (; !Object.prototype.hasOwnProperty.call(e, t) && (e = qr(e)) !== null; );
  return e;
}
function Af(e, t, n) {
  return (
    (Af =
      typeof Reflect < "u" && Reflect.get
        ? Reflect.get
        : function (r, i, o) {
            var s = Cz(r, i);
            if (s) {
              var a = Object.getOwnPropertyDescriptor(s, i);
              return a.get ? a.get.call(o || r) : a.value;
            }
          }),
    Af(e, t, n)
  );
}
function Za(e, t, n) {
  return Af(e, t, n);
}
function Pf(e, t) {
  return (
    (Pf =
      Object.setPrototypeOf ||
      function (n, r) {
        return ((n.__proto__ = r), n);
      }),
    Pf(e, t)
  );
}
function Nz(e, t) {
  return Pf(e, t);
}
function Az(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  ((e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && Nz(e, t));
}
function Pz() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {}),
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function kz(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return e;
}
function Oz(e, t) {
  return !t || (Jl(t) !== "object" && typeof t != "function") ? kz(e) : t;
}
function Iz(e) {
  var t = Pz();
  return function () {
    var n,
      r = qr(e);
    if (t) {
      var i = qr(this).constructor;
      n = Reflect.construct(r, arguments, i);
    } else n = r.apply(this, arguments);
    return Oz(this, n);
  };
}
function bz(e, t) {
  return (e((t = { exports: {} }), t.exports), t.exports);
}
var Lz = bz(function (e) {
    var t = Object.prototype.hasOwnProperty,
      n = "~";
    function r() {}
    function i(l, u, c) {
      ((this.fn = l), (this.context = u), (this.once = c || !1));
    }
    function o(l, u, c, d, f) {
      if (typeof c != "function")
        throw new TypeError("The listener must be a function");
      var h = new i(c, d || l, f),
        v = n ? n + u : u;
      return (
        l._events[v]
          ? l._events[v].fn
            ? (l._events[v] = [l._events[v], h])
            : l._events[v].push(h)
          : ((l._events[v] = h), l._eventsCount++),
        l
      );
    }
    function s(l, u) {
      --l._eventsCount == 0 ? (l._events = new r()) : delete l._events[u];
    }
    function a() {
      ((this._events = new r()), (this._eventsCount = 0));
    }
    (Object.create &&
      ((r.prototype = Object.create(null)), new r().__proto__ || (n = !1)),
      (a.prototype.eventNames = function () {
        var l,
          u,
          c = [];
        if (this._eventsCount === 0) return c;
        for (u in (l = this._events))
          t.call(l, u) && c.push(n ? u.slice(1) : u);
        return Object.getOwnPropertySymbols
          ? c.concat(Object.getOwnPropertySymbols(l))
          : c;
      }),
      (a.prototype.listeners = function (l) {
        var u = n ? n + l : l,
          c = this._events[u];
        if (!c) return [];
        if (c.fn) return [c.fn];
        for (var d = 0, f = c.length, h = new Array(f); d < f; d++)
          h[d] = c[d].fn;
        return h;
      }),
      (a.prototype.listenerCount = function (l) {
        var u = n ? n + l : l,
          c = this._events[u];
        return c ? (c.fn ? 1 : c.length) : 0;
      }),
      (a.prototype.emit = function (l, u, c, d, f, h) {
        var v = n ? n + l : l;
        if (!this._events[v]) return !1;
        var y,
          _,
          g = this._events[v],
          m = arguments.length;
        if (g.fn) {
          switch ((g.once && this.removeListener(l, g.fn, void 0, !0), m)) {
            case 1:
              return (g.fn.call(g.context), !0);
            case 2:
              return (g.fn.call(g.context, u), !0);
            case 3:
              return (g.fn.call(g.context, u, c), !0);
            case 4:
              return (g.fn.call(g.context, u, c, d), !0);
            case 5:
              return (g.fn.call(g.context, u, c, d, f), !0);
            case 6:
              return (g.fn.call(g.context, u, c, d, f, h), !0);
          }
          for (_ = 1, y = new Array(m - 1); _ < m; _++) y[_ - 1] = arguments[_];
          g.fn.apply(g.context, y);
        } else {
          var p,
            S = g.length;
          for (_ = 0; _ < S; _++)
            switch (
              (g[_].once && this.removeListener(l, g[_].fn, void 0, !0), m)
            ) {
              case 1:
                g[_].fn.call(g[_].context);
                break;
              case 2:
                g[_].fn.call(g[_].context, u);
                break;
              case 3:
                g[_].fn.call(g[_].context, u, c);
                break;
              case 4:
                g[_].fn.call(g[_].context, u, c, d);
                break;
              default:
                if (!y)
                  for (p = 1, y = new Array(m - 1); p < m; p++)
                    y[p - 1] = arguments[p];
                g[_].fn.apply(g[_].context, y);
            }
        }
        return !0;
      }),
      (a.prototype.on = function (l, u, c) {
        return o(this, l, u, c, !1);
      }),
      (a.prototype.once = function (l, u, c) {
        return o(this, l, u, c, !0);
      }),
      (a.prototype.removeListener = function (l, u, c, d) {
        var f = n ? n + l : l;
        if (!this._events[f]) return this;
        if (!u) return (s(this, f), this);
        var h = this._events[f];
        if (h.fn)
          h.fn !== u || (d && !h.once) || (c && h.context !== c) || s(this, f);
        else {
          for (var v = 0, y = [], _ = h.length; v < _; v++)
            (h[v].fn !== u || (d && !h[v].once) || (c && h[v].context !== c)) &&
              y.push(h[v]);
          y.length ? (this._events[f] = y.length === 1 ? y[0] : y) : s(this, f);
        }
        return this;
      }),
      (a.prototype.removeAllListeners = function (l) {
        var u;
        return (
          l
            ? ((u = n ? n + l : l), this._events[u] && s(this, u))
            : ((this._events = new r()), (this._eventsCount = 0)),
          this
        );
      }),
      (a.prototype.off = a.prototype.removeListener),
      (a.prototype.addListener = a.prototype.on),
      (a.prefixed = n),
      (a.EventEmitter = a),
      (e.exports = a));
  }),
  Dz = Lz,
  Mz = { enablePaymentDone: !1 };
function zz(e) {
  var t = new URL(e, window.location.origin),
    n = t.pathname.split("/")[3].toUpperCase().replace(/-/g, "_"),
    r = {},
    i = t.searchParams.get("orderId"),
    o = t.searchParams.get("zmpOrderId"),
    s = t.searchParams.get("appTransID") || t.searchParams.get("apptransid");
  switch (n) {
    case "MOMO":
    case "MOMO_SANDBOX":
      ((r.orderId = o), (r.transId = i));
      break;
    default:
      ((r.orderId = o || i), (r.transId = s));
  }
  return r;
}
function Vz(e) {
  var t = e.data;
  return {
    orderId: t.zmpOrderId || t.orderId,
    transId: t.appTransID || t.apptransid || t.transId,
  };
}
var ql = "ACTION_CALLBACK",
  zs = (function (e) {
    Az(n, e);
    var t = Iz(n);
    function n() {
      var i;
      return (
        Np(this, n),
        ((i = t.apply(this, arguments)).debug = kp("zmp:event-emitter")),
        i
      );
    }
    var r = n.prototype;
    return (
      (r.h5ConfirmHandleEvent = function (i, o, s) {
        ZaloJavaScriptInterface.jsH5EventCallback(i, o, s || "");
      }),
      (r.on = function (i, o, s) {
        var a = this;
        return i === ql || i === jt.PaymentCallback
          ? Za(qr(n.prototype), "on", this).call(this, i, o, s)
          : (this.debug("register ".concat(String(i), ": ").concat(s)),
            Za(qr(n.prototype), "on", this).call(
              this,
              i,
              function (l, u) {
                (a.h5ConfirmHandleEvent(l, i, s), o(u));
              },
              s,
            ));
      }),
      (r.once = function (i, o, s) {
        var a = this;
        return i === ql
          ? Za(qr(n.prototype), "once", this).call(this, i, o, s)
          : (this.debug("register once ".concat(String(i), ": ").concat(s)),
            Za(qr(n.prototype), "once", this).call(
              this,
              i,
              function (l, u) {
                (a.h5ConfirmHandleEvent(l, i, s), o(u));
              },
              s,
            ));
      }),
      (n.getInstance = function () {
        return (n.instance || (n.instance = new n()), n.instance);
      }),
      n
    );
  })(Dz);
function $z(e) {
  zs.getInstance().on(ql, e);
}
function Yo(e) {
  zs.getInstance().emit(ql, e);
}
((window.onNativeMessage = function (e, t) {
  return function (n) {
    Yo({ serialId: e, actionName: t, result: n });
  };
}),
  (window.zaloJSV2 = {
    zalo_h5_event_handler: function (e, t, n) {
      var r = kp("zmp:zalo_h5_event_handler");
      r(
        "eventId: "
          .concat(e, ", eventName: ")
          .concat(t, ", eventData: ")
          .concat(n),
      );
      var i = Jz(n);
      r("stringToData", i);
      var o = (function (a, l) {
          if (!l || typeof l == "string") return l;
          try {
            if (a === jt.OpenApp) {
              var u = l.url,
                c = new URL(u),
                d = c.pathname.split("/zapps/".concat(Rf))[1];
              return { path: "".concat(d || "/").concat(c.search) };
            }
            return l;
          } catch {
            return l;
          }
        })(t, i),
        s = (function (a, l, u, c) {
          switch (!0) {
            case typeof u == "string" || u === null:
              return [{ eventName: a, eventId: l, data: u }];
            case a === jt.OpenApp && (c == null ? void 0 : c.enablePaymentDone):
              var d = zz(u.path);
              return [{ eventName: jt.PaymentDone, eventId: l, data: d }];
            case a === jt.OnDataCallback:
              if (
                ["PAY_BY_BANK", "PAY_BY_CUSTOM_METHOD"].includes(
                  u == null ? void 0 : u.eventType,
                )
              )
                return [
                  { eventName: jt.OnDataCallback, eventId: l, data: u },
                  { eventName: jt.PaymentDone, eventId: l, data: Vz(u) },
                ];
              break;
            default:
              return [{ eventName: a, eventId: l, data: u }];
          }
        })(t, e, o, Mz);
      s == null ||
        s.forEach(function (a) {
          zs.getInstance().emit(a.eventName, a.eventId, a.data);
          var l = document.getElementById(gz);
          l &&
            rV(l, "appEvent", {
              eventName: a.eventName,
              eventId: a.eventId,
              data: a.data,
            });
        });
    },
  }),
  (window.zaloNative2JS = {
    nativeCall: function (e, t, n) {
      zs.getInstance().emit(jt.PaymentCallback, e, t, n);
    },
  }));
function ay(e) {
  var t = [];
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var r = e[n];
      if (r === void 0) return;
      if (r === null) return void t.push(n);
      t.push(encodeURIComponent(n) + "=" + encodeURIComponent(r));
    }
  return t.join("&");
}
var ly = {
    encode: ay,
    decode: function (e, t) {
      var n = {};
      if (e === "") return n;
      for (var r = e.split("&"), i = 0; i < r.length; i++) {
        var o = r[i].split("=", 2),
          s = decodeURIComponent(o[0]);
        if (t && Object.prototype.hasOwnProperty.call(n, s))
          throw new URIError("Duplicate key: " + s);
        n[s] = o.length === 2 ? decodeURIComponent(o[1]) : null;
      }
      return n;
    },
    appendToUrl: function (e, t) {
      return (
        e +
        (e.indexOf("?") !== -1 ? "&" : "?") +
        (typeof t == "string" ? t : ay(t))
      );
    },
    getParameterByName: function (e, t) {
      (t || (t = window.location.href), (e = e.replace(/[\[\]]/g, "\\$&")));
      var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
      return n
        ? n[2]
          ? decodeURIComponent(n[2].replace(/\+/g, " "))
          : ""
        : null;
    },
    getParamsAsObject: function (e) {
      var t = {};
      return (
        e &&
          e.split("&").map(function (n) {
            var r = n.split("=");
            r &&
              r.length == 2 &&
              (t[r[0]] = decodeURIComponent(r[1].replace(/\+/g, " ")));
          }),
        t
      );
    },
    toQueryString: function (e) {
      if (!e) return "";
      if ((e === void 0 || e === void 0 ? "undefined" : Jl(e)) != "object")
        return e;
      var t = Object.keys(e),
        n = [];
      return (
        t.map(function (r) {
          var i = e[r],
            o = [
              r,
              (i =
                (i === void 0 || i === void 0 ? "undefined" : Jl(i)) == "object"
                  ? JSON.stringify(i)
                  : encodeURIComponent(i)),
            ].join("=");
          n.push(o);
        }),
        n.join("&")
      );
    },
  },
  kf = {},
  Of = function (e, t, n) {
    var r = t || "default";
    return function () {
      return (r in kf ? kf[r](e, n) : e).apply(this, arguments);
    };
  };
Of.setWrapper = function (e) {
  kf[
    arguments.length <= 1 || arguments[1] === void 0 ? "default" : arguments[1]
  ] = e;
};
var uy = {
  error: {
    code: 1,
    error_subcode: 1357046,
    message: "Received Invalid JSON reply.",
    type: "http",
  },
};
function cy(e) {
  try {
    return e === null ? uy : JSON.parse(e);
  } catch {
    return uy;
  }
}
var Uz = {
  execute: function (e, t, n, r) {
    n.suppress_http_code = 1;
    var i = ly.encode(n);
    t != "post" && ((e = ly.appendToUrl(e, i)), (i = ""));
    var o = (function (s, a) {
      if (!self.XMLHttpRequest) return null;
      var l = new XMLHttpRequest(),
        u = function () {};
      if (!("withCredentials" in l)) return null;
      (l.open(s, a, !0),
        l.setRequestHeader(
          "Content-type",
          "application/x-www-form-urlencoded",
        ));
      var c = {
          send: function (h) {
            l.send(h);
          },
        },
        d = Of(
          function () {
            ((d = u), "onload" in c && c.onload(l));
          },
          "entry",
          "XMLHttpRequest:load",
        ),
        f = Of(
          function () {
            ((f = u), "onerror" in c && c.onerror(l));
          },
          "entry",
          "XMLHttpRequest:error",
        );
      return (
        (l.onload = function () {
          d();
        }),
        (l.onerror = function () {
          f();
        }),
        (l.onreadystatechange = function () {
          l.readyState == 4 && (l.status == 200 ? d() : f());
        }),
        c
      );
    })(t, e);
    return (
      !!o &&
      ((o.onload = function (s) {
        r(cy(s.responseText));
      }),
      (o.onerror = function (s) {
        s.responseText
          ? r(cy(s.responseText))
          : r({
              error: {
                code: 1,
                error_subcode: 1357045,
                message: "unknown error (empty response)",
                status: s.status,
                type: "http",
              },
            });
      }),
      o.send(i),
      !0)
    );
  },
};
function je(e, t) {
  var n,
    r,
    i,
    o,
    s = {
      label: 0,
      sent: function () {
        if (1 & i[0]) throw i[1];
        return i[1];
      },
      trys: [],
      ops: [],
    };
  return (
    (o = { next: a(0), throw: a(1), return: a(2) }),
    typeof Symbol == "function" &&
      (o[Symbol.iterator] = function () {
        return this;
      }),
    o
  );
  function a(l) {
    return function (u) {
      return (function (c) {
        if (n) throw new TypeError("Generator is already executing.");
        for (; o && ((o = 0), c[0] && (s = 0)), s; )
          try {
            if (
              ((n = 1),
              r &&
                (i =
                  2 & c[0]
                    ? r.return
                    : c[0]
                      ? r.throw || ((i = r.return) && i.call(r), 0)
                      : r.next) &&
                !(i = i.call(r, c[1])).done)
            )
              return i;
            switch (((r = 0), i && (c = [2 & c[0], i.value]), c[0])) {
              case 0:
              case 1:
                i = c;
                break;
              case 4:
                return (s.label++, { value: c[1], done: !1 });
              case 5:
                (s.label++, (r = c[1]), (c = [0]));
                continue;
              case 7:
                ((c = s.ops.pop()), s.trys.pop());
                continue;
              default:
                if (
                  ((i = s.trys),
                  !(
                    (i = i.length > 0 && i[i.length - 1]) ||
                    (c[0] !== 6 && c[0] !== 2)
                  ))
                ) {
                  s = 0;
                  continue;
                }
                if (c[0] === 3 && (!i || (c[1] > i[0] && c[1] < i[3]))) {
                  s.label = c[1];
                  break;
                }
                if (c[0] === 6 && s.label < i[1]) {
                  ((s.label = i[1]), (i = c));
                  break;
                }
                if (i && s.label < i[2]) {
                  ((s.label = i[2]), s.ops.push(c));
                  break;
                }
                (i[2] && s.ops.pop(), s.trys.pop());
                continue;
            }
            c = t.call(e, s);
          } catch (d) {
            ((c = [6, d]), (r = 0));
          } finally {
            n = i = 0;
          }
        if (5 & c[0]) throw c[1];
        return { value: c[0] ? c[1] : void 0, done: !0 };
      })([l, u]);
    };
  }
}
function UE(e) {
  return function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    try {
      return e.apply(void 0, Pp(n));
    } catch (i) {
      return (typeof console < "u" && console.error && console.error(i), null);
    }
  };
}
UE.async = function (e) {
  return Fe(function () {
    var t,
      n,
      r,
      i,
      o = arguments;
    return je(this, function (s) {
      switch (s.label) {
        case 0:
          for (t = o.length, n = new Array(t), r = 0; r < t; r++) n[r] = o[r];
          s.label = 1;
        case 1:
          return (s.trys.push([1, 3, , 4]), [4, e.apply(void 0, Pp(n))]);
        case 2:
          return [2, s.sent()];
        case 3:
          return (
            (i = s.sent()),
            typeof console < "u" && console.error && console.error(i),
            [2, null]
          );
        case 4:
          return [2];
      }
    });
  });
};
var Fz = function (e) {
  return e.isAndroid ? hs.android : e.isIOS ? hs.iOS : hs.unknown;
};
function jz(e) {
  var t = e.split("zalo")[1];
  return (t && t.replace(" ", "").split("/")[1]) || "";
}
function To() {
  var e = (function () {
    var t = UE(function () {
      return window.navigator.userAgent.toLowerCase();
    })();
    if (t) {
      var n,
        r = (function (i) {
          return {
            isAndroid: /android/i.test(i) && !/iemobile/.test(i),
            isIOS: /iphone|ios|ipad|ipod/.test(i) && !/iemobile/.test(i),
            isMobile: /android|iphone|ios|ipad|ipod|iemobile/.test(i),
            isZalo: /zalo/.test(i),
          };
        })(t);
      return {
        appEnv:
          ((n = new URL(window.location.href).searchParams.get("env")),
          {
            isMp:
              window.location.hostname.includes(pz) &&
              (n == "TESTING_LOCAL" || window.location.pathname.startsWith(mz)),
            isMpWeb: window.location.hostname.includes("localhost"),
          }),
        platform: r,
        platformName: Fz(r),
        zaloVersion: jz(t).trim(),
      };
    }
  })();
  if (e) return e;
}
function ur(e) {
  try {
    var t = e.map(function (n) {
      return {
        action: n.action,
        error: n.error,
        message: n.message,
        data: n.data,
      };
    });
    Uz.execute(
      Yl.SEND_ACTION_LOG,
      "post",
      { appId: window.APP_ID, data: JSON.stringify(t) },
      function () {},
    );
  } catch {}
}
var Bz = function () {
    var e;
    return (
      (
        ((e = To()) === null || e === void 0 ? void 0 : e.platformName) || ""
      ).toLowerCase() === "android"
    );
  },
  Wz = function () {
    var e;
    return (
      (
        ((e = To()) === null || e === void 0 ? void 0 : e.platformName) || ""
      ).toLowerCase() === "ios"
    );
  };
function dy(e) {
  var t = String(e);
  try {
    if (/^\d{9}$/.test(t) && t[5] === "0")
      return Number(t.slice(0, 5) + t.slice(6));
  } catch {}
  return Number(t);
}
var Zz = function () {
    var e,
      t = 0;
    if (window.zaloVersionCode) return dy(window.zaloVersionCode);
    var n = Number(
      ((e = To()) === null || e === void 0 ? void 0 : e.zaloVersion) || "0",
    );
    return (
      n >= 24112e3 ? (t = n) : Bz() ? (t = n % 1e4) : Wz() && (t = n),
      dy(t)
    );
  },
  fy,
  Hz =
    ((fy = Fe(function (e) {
      var t;
      return je(this, function (n) {
        switch (n.label) {
          case 0:
            return (
              (t = {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  authorization: "Bearer ".concat(e),
                },
              }),
              [4, fetch(Yl.GET_AUTH_SETTING, Op({ method: "GET" }, t))]
            );
          case 1:
            return [4, n.sent().json()];
          case 2:
            return [2, n.sent()];
        }
      });
    })),
    function (e) {
      return fy.apply(this, arguments);
    }),
  FE = Fe(function () {
    return je(this, function (e) {
      return [
        2,
        new Promise(
          ((t = Fe(function (n, r) {
            var i, o, s, a;
            return je(this, function (l) {
              switch (l.label) {
                case 0:
                  return (l.trys.push([0, 3, , 4]), [4, yn.jumpAndGetToken()]);
                case 1:
                  return (
                    l.sent(),
                    (o =
                      (i = yn.miniProgramConfig) === null || i === void 0
                        ? void 0
                        : i.jwt) ||
                      r(
                        new at(
                          ne.UNAUTHORIZED,
                          le.LOGIN_REQUIRED,
                          "getSetting",
                        ),
                      ),
                    [4, Hz(o)]
                  );
                case 2:
                  return (
                    (s = l.sent()) && s.err === 0
                      ? n({ authSetting: s.data })
                      : r(new at(s.err, s.msg, "getSetting")),
                    [3, 4]
                  );
                case 3:
                  return ((a = l.sent()), r(a), [3, 4]);
                case 4:
                  return [2];
              }
            });
          })),
          function (n, r) {
            return t.apply(this, arguments);
          }),
        ),
      ];
      var t;
    });
  }),
  Xc,
  hy,
  Ln,
  $r,
  Ha,
  rr,
  jE =
    ((Ln = To()),
    ($r = {}),
    (Ha = zs.getInstance()),
    (rr = []),
    $z(function (e) {
      var t = e.serialId,
        n = qz(e.result),
        r = bf(n == null ? void 0 : n.action),
        i = Ke.isEmpty(n == null ? void 0 : n.error_code)
          ? 0
          : n == null
            ? void 0
            : n.error_code,
        o = n == null ? void 0 : n.error_message,
        s = (n == null ? void 0 : n.data) || n;
      if (r && i === 0) {
        var a = JSON.parse(n == null ? void 0 : n.data);
        ((i = Ke.isEmpty(a == null ? void 0 : a.error_code)
          ? 0
          : a == null
            ? void 0
            : a.error_code),
          (o = a == null ? void 0 : a.error_message),
          (s = (a == null ? void 0 : a.data) || a));
      }
      var l = {
        error_code: i,
        error_message: o,
        data: s,
        action: (n == null ? void 0 : n.action) || e.actionName,
      };
      if (t && $r[t]) {
        var u = $r[t],
          c = u.callback,
          d = u.timeout,
          f = u.isMultiCallback,
          h = u.options,
          v = u.downloadListener;
        ((function (T, N) {
          var C = N || {},
            A = C.success,
            I = C.fail;
          T.error_code === 0
            ? Ke.isFunction(A) && A(T)
            : Ke.isFunction(I) && I(T);
        })(l, c),
          !f && delete $r[t],
          d && clearTimeout(d));
        var y = {
          action: l == null ? void 0 : l.action,
          error: l == null ? void 0 : l.error_code,
          message: l == null ? void 0 : l.error_message,
          data: {},
        };
        try {
          if (
            l.action === "action.open.inapp" ||
            l.action === "action.open.outapp"
          ) {
            var _ = new URL(h == null ? void 0 : h.url),
              g = "".concat(_.protocol, "//").concat(_.host).concat(_.pathname);
            y.data = { url: g };
          }
          if (
            l.action === "action.follow.oa" ||
            l.action === "action.unfollow.oa"
          ) {
            var m = h == null ? void 0 : h.uid;
            y.data = { uid: m };
          }
          if (l.action === "action.open.chat") {
            var p = h == null ? void 0 : h.uId,
              S = h == null ? void 0 : h.type;
            y.data = { uid: p, openChatType: S };
          }
          h != null && h.onProgress && v && Ha.off(jt.DownloadProgress, v);
        } catch {}
        rr.push(y);
      }
    }),
    Ha.on(jt.AppPaused, function () {
      if (rr.length > 0) {
        var e = rr;
        ((rr = []), ur(e));
      }
    }),
    Xc
      ? clearInterval(Xc)
      : (Xc = setInterval(function () {
          if (rr.length > 0) {
            var e = rr;
            ((rr = []), ur(e));
          }
        }, 5e3)),
    (hy = Fe(function (e, t, n, r) {
      var i,
        o,
        s,
        a,
        l,
        u,
        c,
        d,
        f,
        h,
        v,
        y,
        _,
        g,
        m,
        p,
        S,
        T,
        N,
        C,
        A,
        I,
        b,
        ee,
        ge,
        Y;
      return je(this, function (q) {
        switch (q.label) {
          case 0:
            return (
              (o = Math.floor(1e6 * Math.random())),
              (s = "".concat(e, "_").concat(o)),
              (a = nV(e)),
              r != null &&
                r.actionName &&
                r.actionName.length > 0 &&
                (a = r == null ? void 0 : r.actionName),
              (l = (r == null ? void 0 : r.isMultiCallback) || !1),
              (u =
                (r == null ? void 0 : r.timeout) !== !1 &&
                ((r == null ? void 0 : r.timeout) || !0)),
              (c = (r == null ? void 0 : r.haveCallback) || !1),
              (d = (r == null ? void 0 : r.skipJump) || !1),
              (f = (r == null ? void 0 : r.requireAccessToken) || !1),
              (h = eV(a)),
              t &&
                n &&
                (($r[s] = { options: t, callback: n, isMultiCallback: l }),
                u &&
                  c &&
                  ($r[s].timeout = setTimeout(
                    function () {
                      var Ae = {
                        serialId: s,
                        result: {
                          error_code: ne.TIME_OUT,
                          error_message: le.TIME_OUT,
                          data: { timeout: u },
                          action: e,
                        },
                      };
                      return (Yo(Ae), null);
                    },
                    u === !0 ? 8e3 : 1e3 * u,
                  ))),
              h ? [4, FE()] : [3, 2]
            );
          case 1:
            if (
              ((y = q.sent()) == null ||
              (v = y.authSetting) === null ||
              v === void 0
                ? void 0
                : v["scope.userInfo"]) === !1
            )
              return (
                (g = {
                  serialId: s,
                  result: {
                    error_code: ne.UNAUTHORIZED,
                    error_message: le.NEED_USER_AUTH,
                    data: {
                      isMobile:
                        Ln == null || (_ = Ln.platform) === null || _ === void 0
                          ? void 0
                          : _.isMobile,
                    },
                    action: e,
                  },
                }),
                Yo(g),
                [2]
              );
            q.label = 2;
          case 2:
            return (
              (m = bf(a)),
              !(
                !(Ln == null || (i = Ln.platform) === null || i === void 0) &&
                i.isMobile
              ) ||
              !e ||
              Ke.isUndefined(ZaloJavaScriptInterface) ||
              (Ln.platform.isIOS && !Yz(e)) ||
              (m && m.isSupported === !1)
                ? ((S = {
                    serialId: s,
                    result: {
                      error_code: ne.CLIENT_NOT_SUPPORT,
                      error_message: le.CLIENT_NOT_SUPPORT,
                      data: {
                        isMobile:
                          Ln == null ||
                          (p = Ln.platform) === null ||
                          p === void 0
                            ? void 0
                            : p.isMobile,
                      },
                      action: e,
                    },
                  }),
                  Yo(S),
                  [2])
                : ((T = If(t)), d ? [3, 4] : [4, yn.getJSAccessToken()])
            );
          case 3:
            return ((C = q.sent()), [3, 5]);
          case 4:
            ((C = ""), (q.label = 5));
          case 5:
            ((N = C), (q.label = 6));
          case 6:
            return (
              q.trys.push([6, 10, , 11]),
              d || !f ? [3, 8] : [4, yn.getAccessToken()]
            );
          case 7:
            return ((I = q.sent()), [3, 9]);
          case 8:
            ((I = ""), (q.label = 9));
          case 9:
            return ((A = I), [3, 11]);
          case 10:
            return (
              (b = q.sent()),
              (ee = {
                serialId: s,
                result: {
                  error_code: b == null ? void 0 : b.code,
                  error_message: b == null ? void 0 : b.message,
                  action: e,
                },
              }),
              Yo(ee),
              [2]
            );
          case 11:
            try {
              t &&
                t != null &&
                t.onProgress &&
                ((ge = function (Ae) {
                  (function (fe, Ee) {
                    var M = fe.progress;
                    Ee && Ee(M);
                  })(Ae, t == null ? void 0 : t.onProgress);
                }),
                ($r[s].downloadListener = ge),
                Ha.on(jt.DownloadProgress, ge));
            } catch {}
            return (
              (Y = Ln.platform.isIOS
                ? window.onNativeMessage(s, a)
                : 'window.onNativeMessage("'.concat(s, '", "').concat(a, '")')),
              [2, ZaloJavaScriptInterface.jsCall(N, a, A, T, Y)]
            );
        }
      });
    })),
    function (e, t, n, r) {
      return hy.apply(this, arguments);
    }),
  ps = {
    success: function (e, t) {
      return { code: ne.SUCCESS, message: t || le.SUCCESS, data: e || {} };
    },
    error: {
      failLimit: function () {
        return new at(ne.FAIL_LIMIT, le.FAIL_LIMIT);
      },
      badRequest: function (e) {
        return new at(ne.BAD_REQUEST, e);
      },
      loginFailed: function (e) {
        return new at(
          ne.UNAUTHORIZED,
          "".concat(le.LOGIN_FAILED, ": ").concat(e),
        );
      },
      loginRequired: function () {
        return new at(ne.UNAUTHORIZED, le.LOGIN_REQUIRED);
      },
      cannotGetShareInfo: function () {
        return new at(
          ne.INTERNAL_SERVER_ERROR,
          "Can not get app info to share",
        );
      },
      createIAPOrderFailed: function (e) {
        var t = Object.keys(vz).find(function (n) {
          return n === e.toString();
        });
        return new at(e, t || le.UNKNOWN_ERROR);
      },
      clientNotSupport: function () {
        return new at(ne.CLIENT_NOT_SUPPORT, le.CLIENT_NOT_SUPPORT);
      },
    },
  },
  Gz = function (e) {
    var t,
      n,
      r,
      i = (t = To()) === null || t === void 0 ? void 0 : t.platformName,
      o = tV(e.action),
      s = Ap[o],
      a = (s == null ? void 0 : s.skipJump) || !1,
      l = (s == null ? void 0 : s.errorList) || {};
    if (o === "JUMP_LOGIN")
      return new at(
        ne.UNKNOWN_ERROR,
        "Can not get auth code: ".concat(e.error_message),
      );
    if (yn.jumpStatus !== Rn.DONE && !a)
      return new at(W.UNAUTHORIZED.code, W.UNAUTHORIZED.message);
    if (
      String(e.error_message).toLowerCase() === "permission required!" ||
      String(e.error_message).toLowerCase() === "no permission!"
    )
      return new at(W.FORBIDDEN.code, W.FORBIDDEN.message);
    if (i && !((n = qc[i]) === null || n === void 0) && n[e.error_code])
      return new at(qc[i][e.error_code].code, qc[i][e.error_code].message);
    var u =
      l == null || (r = l[i]) === null || r === void 0
        ? void 0
        : r[String(e.error_code)];
    if (u) {
      var c,
        d,
        f,
        h = (c = u.mapTo) === null || c === void 0 ? void 0 : c.message;
      return (
        u != null &&
          u.needMoreDetail &&
          (h = ""
            .concat(
              u == null || (f = u.mapTo) === null || f === void 0
                ? void 0
                : f.message,
              ": ",
            )
            .concat(e.error_message)),
        new at((d = u.mapTo) === null || d === void 0 ? void 0 : d.code, h)
      );
    }
    return new at(e.error_code, e.error_message);
  },
  Ip = function (e, t, n, r) {
    var i = (function (a, l) {
        function u(c) {
          return function (d) {
            var f = Ke.isEmpty(l) ? void 0 : l[c];
            if (f)
              return (
                ui({
                  stage: Ms.RESPONSE,
                  type: "log",
                  state: c,
                  name: a,
                  response: d,
                }),
                f(c === "fail" ? Gz(d) : d == null ? void 0 : d.data)
              );
          };
        }
        return (
          Ke.isUndefined(a) && (a = ""),
          Object.assign({}, { success: u("success"), fail: u("fail") })
        );
      })(e, n),
      o = Ap[e],
      s = (r == null ? void 0 : r.delay) || 0;
    setTimeout(function () {
      jE(e, t, i, Op({}, r, o));
    }, s);
  },
  py,
  Kz =
    ((py = Fe(function (e) {
      return je(this, function (t) {
        return [
          2,
          new Promise(function (n, r) {
            Ip(
              "MP_USER_AUTHORIZE",
              { scopes: e, forceUpdate: !0 },
              {
                success: function (i) {
                  Ke.isEmpty(i) || n(i);
                },
                fail: function (i) {
                  r(i);
                },
              },
              { isMultiCallback: !1, timeout: !1 },
            );
          }),
        ];
      });
    })),
    function (e) {
      return py.apply(this, arguments);
    }),
  Qz = (function () {
    function e() {
      (Np(this, e),
        (this._jumpStatus = void 0),
        (this.WAITING_QUEUE = []),
        (this.getAccessTokenCount = 0),
        (this._accessToken = ""),
        (this._jsAccessToken = ""),
        (this.refreshToken = ""),
        (this._cookies = []),
        (this.accessTokenExpiresIn = 0),
        (this.prevGetAccessTokenTimestamp = new Date().getTime()),
        (this.manualSetAccessToken = !1),
        (this._miniProgramConfig = {}),
        (this.retryLimitMap = {}));
    }
    var t = e.prototype;
    return (
      (t.initRetryLimit = function (n) {
        var r = $E[n],
          i = {
            lastCall: new Date().getTime(),
            limit: r && r.limit ? r.limit : 3,
            retry: 0,
          };
        return ((this.retryLimitMap[n] = i), i);
      }),
      (t.resetRetryLimit = function (n) {
        ((this.retryLimitMap[n].lastCall = new Date().getTime()),
          (this.retryLimitMap[n].retry = 0));
      }),
      (t.getRetryLimit = function (n) {
        var r = this.retryLimitMap[n];
        return (
          (r && r.lastCall && r.retry) || (r = this.initRetryLimit(n)),
          r
        );
      }),
      (t.increaseRetryLimit = function (n) {
        this.retryLimitMap[n].retry++;
      }),
      (t.jump = function () {
        var n = this;
        return Fe(function () {
          return je(this, function (r) {
            return [
              2,
              new Promise(function (i, o) {
                n._jumpStatus
                  ? n._jumpStatus === Rn.DONE
                    ? i(Rn.DONE)
                    : i(Rn.DOING)
                  : ((n._jumpStatus = Rn.DOING),
                    ui({ stage: Ms.REQUEST, type: "log", name: "jump" }),
                    jE(
                      "JUMP_LOGIN",
                      {},
                      {
                        success: function (s) {
                          var a = s.data;
                          n._miniProgramConfig =
                            (a == null ? void 0 : a.miniProgramConfig) || {};
                          var l =
                              (a == null ? void 0 : a.cookiesOAuthLogins) || [],
                            u = l.find(function (d) {
                              return d.name === Ni.JS_TOKEN;
                            });
                          (u &&
                            ((n._jsAccessToken = u.value),
                            window.ZJSBridge.setJSToken &&
                              window.ZJSBridge.setJSToken(u.value)),
                            (n._cookies = l));
                          var c = n._cookies.find(function (d) {
                            return d.name === Ni.ZOAUTH;
                          });
                          ((c != null && c.value) ||
                            ur([
                              {
                                action: "action.jump.login",
                                error: -102,
                                message: "no zoauth",
                                data: {},
                              },
                            ]),
                            i(Rn.DONE));
                        },
                        fail: function (s) {
                          (ur([
                            {
                              action: "action.jump.login",
                              error: -101,
                              message: s.message || "jump error",
                              data: {},
                            },
                          ]),
                            o(s));
                        },
                      },
                      { skipJump: !0 },
                    ));
              }),
            ];
          });
        })();
      }),
      (t.loginZaloV3 = function (n, r, i) {
        var o = this;
        return Fe(function () {
          var s;
          return je(this, function (a) {
            switch (a.label) {
              case 0:
                return (
                  (s = ""
                    .concat(Yl.GET_ACCESS_TOKEN_V3, "?app_id=")
                    .concat(r, "&redirect_uri=")
                    .concat(hz, "/")
                    .concat(n, "/&code=")
                    .concat(i, "&isSDK=true")),
                  [
                    4,
                    fetch(s).then(
                      ((l = Fe(function (u) {
                        var c, d, f;
                        return je(this, function (h) {
                          switch (h.label) {
                            case 0:
                              return [4, u.json()];
                            case 1:
                              return (
                                (c = h.sent()),
                                (d = c == null ? void 0 : c.access_token),
                                (o._accessToken = d),
                                (f = 1e3 * parseInt(c.expires_in)),
                                (o.accessTokenExpiresIn = f),
                                (o.prevGetAccessTokenTimestamp =
                                  new Date().getTime()),
                                window.ZJSBridge.setZAccSession &&
                                  window.ZJSBridge.setZAccSession(
                                    o._accessToken || "",
                                  ),
                                [2, d]
                              );
                          }
                        });
                      })),
                      function (u) {
                        return l.apply(this, arguments);
                      }),
                    ),
                  ]
                );
              case 1:
                return [2, a.sent()];
            }
            var l;
          });
        })();
      }),
      (t.loginZaloV4 = function (n) {
        var r =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "",
          i =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "",
          o = this;
        return Fe(function () {
          var s, a;
          return je(this, function (l) {
            switch (l.label) {
              case 0:
                return (
                  (s = new URLSearchParams()).append("app_id", n),
                  s.append("code", r),
                  s.append("code_verifier", i),
                  Ke.isNull(o.refreshToken) || o.refreshToken.length === 0
                    ? s.append("grant_type", "authorization_code")
                    : (s.append("grant_type", "refresh_token"),
                      s.append("refresh_token", o.refreshToken || "")),
                  (a = {
                    headers: {
                      "Content-Type": "application/x-www-form-urlencoded",
                    },
                  }),
                  [
                    4,
                    fetch(
                      Yl.GET_ACCESS_TOKEN,
                      Op({ method: "POST", body: s }, a),
                    ).then(
                      ((u = Fe(function (c) {
                        var d, f, h, v;
                        return je(this, function (y) {
                          switch (y.label) {
                            case 0:
                              return [4, c.json()];
                            case 1:
                              return (
                                (d = y.sent()),
                                (f =
                                  (d == null ? void 0 : d.access_token) || ""),
                                (h =
                                  (d == null ? void 0 : d.refresh_token) || ""),
                                (o.refreshToken = h),
                                (o._accessToken = f),
                                (v =
                                  1e3 *
                                  parseInt(d == null ? void 0 : d.expires_in)),
                                (o.accessTokenExpiresIn = v),
                                (o.prevGetAccessTokenTimestamp =
                                  new Date().getTime()),
                                window.ZJSBridge.setZAccSession &&
                                  window.ZJSBridge.setZAccSession(f),
                                [2, f]
                              );
                          }
                        });
                      })),
                      function (c) {
                        return u.apply(this, arguments);
                      }),
                    ),
                  ]
                );
              case 1:
                return [2, l.sent()];
            }
            var u;
          });
        })();
      }),
      (t.getAccessToken = function () {
        var n = arguments.length > 0 && arguments[0] !== void 0 && arguments[0],
          r = this;
        return Fe(function () {
          var i, o, s, a, l, u, c, d, f;
          function h() {
            return v.apply(this, arguments);
          }
          function v() {
            return (v = Fe(function () {
              return je(this, function (y) {
                switch (y.label) {
                  case 0:
                    return [
                      4,
                      new Promise(function (_) {
                        var g = setInterval(function () {
                          (o.getAccessTokenCount <= 1 || o._accessToken) &&
                            (_("done"), clearInterval(g));
                        }, 200);
                      }),
                    ];
                  case 1:
                    return [2, y.sent()];
                }
              });
            })).apply(this, arguments);
          }
          return je(this, function (y) {
            switch (y.label) {
              case 0:
                return (
                  (i = new Date().getTime() - r.prevGetAccessTokenTimestamp),
                  (o = r).getAccessTokenCount++,
                  r.getAccessTokenCount > 1 ? [4, h()] : [3, 2]
                );
              case 1:
                (y.sent(), (y.label = 2));
              case 2:
                return r.manualSetAccessToken
                  ? (o.getAccessTokenCount--,
                    [2, Promise.resolve(r._accessToken)])
                  : n
                    ? [4, r.verifyUserAuthorized()]
                    : [3, 4];
              case 3:
                return ((a = y.sent()), [3, 5]);
              case 4:
                ((a = !0), (y.label = 5));
              case 5:
                return (
                  (s = a),
                  r._accessToken.length > 0 && i < r.accessTokenExpiresIn && s
                    ? (o.getAccessTokenCount--,
                      [2, Promise.resolve(r._accessToken)])
                    : ((r.accessToken = ""), [4, r.jumpAndGetToken(Ni.ZOAUTH)])
                );
              case 6:
                return ((l = y.sent()), [4, r.jumpAndGetToken(Ni.ZOAUTH_VRF)]);
              case 7:
                if (((u = y.sent()), (c = "zmp.getaccesstoken.fail"), !s))
                  throw (
                    o.getAccessTokenCount--,
                    ur([
                      {
                        action: c,
                        error: -104,
                        message: "no user auth",
                        data: {},
                      },
                    ]),
                    ps.error.loginFailed("User Authentication Required")
                  );
                if (!l) return [3, 15];
                y.label = 8;
              case 8:
                return (
                  y.trys.push([8, 13, , 14]),
                  u ? [4, r.loginZaloV4(Rf, l, u)] : [3, 10]
                );
              case 9:
                return ((d = y.sent()), [3, 12]);
              case 10:
                return [4, r.loginZaloV3(Rf, VE, l)];
              case 11:
                ((d = y.sent()), (y.label = 12));
              case 12:
                return [3, 14];
              case 13:
                return (
                  (f = y.sent()),
                  (d = ""),
                  console.log("Can not get access token", f),
                  ur([
                    {
                      action: c,
                      error: -103,
                      message: String(f) || "Can not get access token",
                      data: {},
                    },
                  ]),
                  [3, 14]
                );
              case 14:
                return (
                  o.getAccessTokenCount--,
                  d
                    ? [2, Promise.resolve(r._accessToken)]
                    : (ur([
                        {
                          action: c,
                          error: -101,
                          message: "no accessToken",
                          data: {},
                        },
                      ]),
                      [
                        2,
                        Promise.reject(
                          ps.error.loginFailed(
                            "Can't get accessToken. Please try again later.",
                          ),
                        ),
                      ])
                );
              case 15:
                throw (
                  o.getAccessTokenCount--,
                  ur([
                    { action: c, error: -102, message: "no oauth", data: {} },
                  ]),
                  ps.error.loginFailed("Zalo app has not been activated")
                );
            }
          });
        })();
      }),
      (t.verifyUserAuthorized = function () {
        var n = this;
        return Fe(function () {
          var r, i, o, s, a, l;
          return je(this, function (u) {
            switch (u.label) {
              case 0:
                return ((i = !0), [4, n.jumpAndGetToken()]);
              case 1:
                if (
                  (u.sent(),
                  ((r = n._miniProgramConfig) === null || r === void 0
                    ? void 0
                    : r.userAuthorized) !== !1)
                )
                  return [3, 7];
                u.label = 2;
              case 2:
                return (
                  u.trys.push([2, 6, , 7]),
                  (o = bf("action.mp.user.authorize")) && o.isSupported
                    ? [4, FE()]
                    : [3, 5]
                );
              case 3:
                return ((a = u.sent()) == null ||
                (s = a.authSetting) === null ||
                s === void 0
                  ? void 0
                  : s["scope.userInfo"]) !== !1
                  ? [3, 5]
                  : [4, Kz()];
              case 4:
                ((l = u.sent()),
                  (i = (l == null ? void 0 : l["scope.userInfo"]) || !1),
                  (u.label = 5));
              case 5:
                return [3, 7];
              case 6:
                return (u.sent(), (i = !1), [3, 7]);
              case 7:
                return [2, i];
            }
          });
        })();
      }),
      (t.setAccessToken = function (n) {
        ((this.manualSetAccessToken = !0),
          (this._accessToken = n),
          window.ZJSBridge.setZAccSession &&
            window.ZJSBridge.setZAccSession(n));
      }),
      (t.getJSAccessToken = function () {
        var n = this;
        return Fe(function () {
          var r;
          return je(this, function (i) {
            switch (i.label) {
              case 0:
                return n._jsAccessToken.length > 0
                  ? [2, Promise.resolve(n._jsAccessToken)]
                  : [4, n.jumpAndGetToken(Ni.JS_TOKEN)];
              case 1:
                return ((r = i.sent()), [2, Promise.resolve(r)]);
            }
          });
        })();
      }),
      (t.getSync = function (n) {
        var r;
        return (r = this._cookies.find(function (i) {
          return i.name === n;
        })) === null || r === void 0
          ? void 0
          : r.value;
      }),
      (t.jumpAndGetToken = function (n) {
        var r,
          i = arguments.length > 1 && arguments[1] !== void 0 && arguments[1],
          o = this;
        return new Promise(
          ((r = Fe(function (s) {
            var a, l, u, c;
            return je(this, function (d) {
              switch (d.label) {
                case 0:
                  return !i && o._cookies.length > 0
                    ? Ke.isString(n)
                      ? ((a = o._cookies.find(function (f) {
                          return f.name === n;
                        })),
                        [2, s(a == null ? void 0 : a.value)])
                      : [2, s("")]
                    : (i &&
                        o._jumpStatus === Rn.DONE &&
                        (o._jumpStatus = void 0),
                      (l = {
                        name: n,
                        cb: function (f) {
                          return s(f);
                        },
                      }),
                      [4, o.jump()]);
                case 1:
                  return (
                    (u = d.sent()) === Rn.DONE
                      ? ((o._jumpStatus = u),
                        o.WAITING_QUEUE.length &&
                          (o.WAITING_QUEUE.forEach(function (f) {
                            var h = o._cookies.find(function (v) {
                              return v.name === f.name;
                            });
                            f.cb(h == null ? void 0 : h.value);
                          }),
                          (o.WAITING_QUEUE = [])),
                        (c = o._cookies.find(function (f) {
                          return f.name === l.name;
                        })),
                        l.cb(c == null ? void 0 : c.value))
                      : o.WAITING_QUEUE.push(l),
                    [2]
                  );
              }
            });
          })),
          function (s) {
            return r.apply(this, arguments);
          }),
        );
      }),
      (e.getInstance = function () {
        return (e.instance || (e.instance = new e()), e.instance);
      }),
      Rz(e, [
        {
          key: "jumpStatus",
          get: function () {
            return this._jumpStatus;
          },
        },
        {
          key: "accessToken",
          set: function (n) {
            ((this._accessToken = n),
              window.ZJSBridge.setZAccSession &&
                window.ZJSBridge.setZAccSession(n));
          },
        },
        {
          key: "miniProgramConfig",
          get: function () {
            return this._miniProgramConfig;
          },
        },
      ]),
      e
    );
  })(),
  yn = Qz.getInstance(),
  ed = kp("zmp:utils:common"),
  If = function (e) {
    if (Ke.isObject(JSON) && JSON.stringify) return JSON.stringify(e);
    if (e === void 0) return "undefined";
    if (e === null) return "null";
    try {
      if (
        typeof e == "string" ||
        e.constructor.toString().match(/string/i) !== null
      )
        return '"' + e.replace(/"/g, '\\"') + '"';
    } catch (o) {
      console.log(o);
    }
    var t;
    if (Object.prototype.toString.call(e).match(/array/i) !== null) {
      t = [];
      for (var n = e.length, r = 0; r < n; r++) t.push(If(e[r]));
      return "[" + t.join(",") + "]";
    }
    if (typeof e == "object") {
      for (var i in ((t = []), e)) t.push('"' + i + '":' + If(e[i]));
      return "{" + t.join(",") + "}";
    }
    return e.toString();
  },
  Yz = function (e) {
    var t = Ap[e],
      n = Zz(),
      r =
        t &&
        typeof t == "object" &&
        "versionLive" in t &&
        t.versionLive &&
        "iOS" in t.versionLive
          ? t.versionLive.iOS
          : 0;
    return (
      !!(
        Array.isArray(window.ignoreCheckSupport) &&
        window.ignoreCheckSupport.length > 0 &&
        window.ignoreCheckSupport.includes(e)
      ) || n >= r
    );
  },
  Jz = function (e) {
    try {
      if (e) {
        ed(e);
        var t = e.replace(/\\/g, "").replace(/&#39;/g, "'");
        try {
          t = decodeURIComponent(atob(e));
        } catch {}
        var n = JSON.parse(t);
        return (
          ed("formattedValue", t, n, n === void 0 ? "undefined" : Jl(n)),
          n
        );
      }
      return null;
    } catch (r) {
      return (ed("parse json error:", r), e);
    }
  },
  qz = function (e) {
    if (Ke.isObject(JSON) && JSON.parse && Ke.isString(e)) {
      var t = e
        .replace(/\n/g, "\\n")
        .replace(/\r/g, "\\r")
        .replace(/\t/g, "\\t")
        .replace(/\x00/g, "");
      return JSON.parse(t, function (n, r) {
        return r;
      });
    }
    return Ke.isObject(e) ? e : new Function("return " + e)();
  };
function Xz(e) {
  return e
    .map(function (t, n) {
      var r =
        t.path.length > 0
          ? t.path
              .map(function (i, o) {
                return o > 0 ? "[".concat(i, "]") : i;
              })
              .join("")
          : "arg";
      return "Error "
        .concat(n + 1, ": Code: ")
        .concat(t.code, " ~ Path: ")
        .concat(r, " ~ Message: ")
        .concat(t.message);
    })
    .join(" | ");
}
var bf = function (e) {
    if (e !== void 0) {
      var t = yn.miniProgramConfig;
      return ((t == null ? void 0 : t.dynamicApis) || []).find(function (n) {
        return n.action === e && n.clientHandle === !1;
      });
    }
  },
  eV = function (e) {
    if (e === void 0) return !1;
    var t = yn.miniProgramConfig;
    return ((t == null ? void 0 : t.requiredAuthenList) || []).indexOf(e) >= 0;
  },
  tV = function (e) {
    return e === "action.get.device_info"
      ? "GET_DEVICE_INFO"
      : e.replace("action.", "").replace(/\./g, "_").toUpperCase();
  },
  nV = function (e) {
    return e.startsWith("action.")
      ? e
      : e === "GET_DEVICE_INFO"
        ? "action.get.device_info"
        : "action.".concat(e.replace(/\_/g, ".").toLowerCase());
  },
  rV = function (e, t, n) {
    var r;
    (r = e.contentWindow) === null ||
      r === void 0 ||
      r.postMessage({ type: t, payload: n }, yz);
  };
function Xu(e, t, n, r) {
  var i, o;
  (function (c, d) {
    if ($E[c]) {
      var f = yn.getRetryLimit(c);
      f.lastCall &&
        new Date().getTime() - f.lastCall > 1e3 &&
        yn.resetRetryLimit(c);
      var h = f.limit || 3;
      if (f.retry && f.retry >= h) throw Wa(ps.error.failLimit(), c);
      yn.increaseRetryLimit(c);
    }
  })(e);
  var s =
      Array.isArray(n) &&
      n.length > 0 &&
      ((i = n[0]) === null || i === void 0 ? void 0 : i.success),
    a =
      Array.isArray(n) &&
      n.length > 0 &&
      ((o = n[0]) === null || o === void 0 ? void 0 : o.fail);
  try {
    var l = n;
    t.length > 0 &&
      t.forEach(function (c, d) {
        var f = c.safeParse(n[d]);
        if (!f.success) {
          var h,
            v = (h = f.error) === null || h === void 0 ? void 0 : h.issues,
            y = Xz(v),
            _ = ps.error.badRequest(y);
          throw ((_.detail = v), Wa(_, e));
        }
        l.push(f.data);
      });
    var u = r.apply(void 0, Pp(l));
    return Ke.isPromise(u)
      ? new Promise(function (c, d) {
          u.then(function (f) {
            if (!Ke.isNull(s) && Ke.isFunction(s)) return s(f);
            c(u);
          }).catch(function (f) {
            var h = Wa(f, e);
            if (!Ke.isNull(a) && Ke.isFunction(a)) return a(h);
            d(h);
          });
        })
      : u;
  } catch (c) {
    if (!Ke.isNull(a) && Ke.isFunction(a)) return a(c);
    throw Wa(c, e);
  }
}
function iV() {
  return Xu("getVersion", [], [], function () {
    return _z;
  });
}
var td,
  mo = ((td = To()) === null || td === void 0 ? void 0 : td.appEnv) || {},
  bp = function (e, t) {
    var n,
      r = { error: -1404, errorMessage: "".concat(e, " is not found") };
    (t == null || (n = t.fail) === null || n === void 0 || n.call(t, r),
      ui({
        stage: Ms.NOT_FOUND,
        type: "error",
        name: e,
        request: t,
        state: "fail",
        response: r,
      }));
  };
function oV(e) {
  return BE.apply(this, arguments);
}
function BE() {
  return (BE = Fe(function (e) {
    return je(this, function (t) {
      return [
        2,
        Xu(
          "login",
          [],
          [e],
          Fe(function () {
            return je(this, function (n) {
              switch (n.label) {
                case 0:
                  return mo.isMp ? [4, yn.jumpAndGetToken(Ni.ZOAUTH)] : [3, 2];
                case 1:
                  return (n.sent(), [2, "Success"]);
                case 2:
                  return mo.isMpWeb
                    ? [2, Promise.resolve("")]
                    : [2, Promise.reject(bp("login", {}))];
              }
            });
          }),
        ),
      ];
    });
  })).apply(this, arguments);
}
var Ce;
(function (e) {
  ((e.assertEqual = (t) => t),
    (e.assertIs = function (t) {}),
    (e.assertNever = function (t) {
      throw new Error();
    }),
    (e.arrayToEnum = (t) => {
      const n = {};
      for (const r of t) n[r] = r;
      return n;
    }),
    (e.getValidEnumValues = (t) => {
      const n = e.objectKeys(t).filter((i) => typeof t[t[i]] != "number"),
        r = {};
      for (const i of n) r[i] = t[i];
      return e.objectValues(r);
    }),
    (e.objectValues = (t) =>
      e.objectKeys(t).map(function (n) {
        return t[n];
      })),
    (e.objectKeys =
      typeof Object.keys == "function"
        ? (t) => Object.keys(t)
        : (t) => {
            const n = [];
            for (const r in t)
              Object.prototype.hasOwnProperty.call(t, r) && n.push(r);
            return n;
          }),
    (e.find = (t, n) => {
      for (const r of t) if (n(r)) return r;
    }),
    (e.isInteger =
      typeof Number.isInteger == "function"
        ? (t) => Number.isInteger(t)
        : (t) => typeof t == "number" && isFinite(t) && Math.floor(t) === t),
    (e.joinValues = function (t, n = " | ") {
      return t.map((r) => (typeof r == "string" ? `'${r}'` : r)).join(n);
    }),
    (e.jsonStringifyReplacer = (t, n) =>
      typeof n == "bigint" ? n.toString() : n));
})(Ce || (Ce = {}));
const F = Ce.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
  ]),
  fr = (e) => {
    switch (typeof e) {
      case "undefined":
        return F.undefined;
      case "string":
        return F.string;
      case "number":
        return isNaN(e) ? F.nan : F.number;
      case "boolean":
        return F.boolean;
      case "function":
        return F.function;
      case "bigint":
        return F.bigint;
      case "symbol":
        return F.symbol;
      case "object":
        return Array.isArray(e)
          ? F.array
          : e === null
            ? F.null
            : e.then &&
                typeof e.then == "function" &&
                e.catch &&
                typeof e.catch == "function"
              ? F.promise
              : typeof Map < "u" && e instanceof Map
                ? F.map
                : typeof Set < "u" && e instanceof Set
                  ? F.set
                  : typeof Date < "u" && e instanceof Date
                    ? F.date
                    : F.object;
      default:
        return F.unknown;
    }
  },
  V = Ce.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
  ]),
  sV = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class Wn extends Error {
  constructor(t) {
    (super(),
      (this.issues = []),
      (this.addIssue = (r) => {
        this.issues = [...this.issues, r];
      }),
      (this.addIssues = (r = []) => {
        this.issues = [...this.issues, ...r];
      }));
    const n = new.target.prototype;
    (Object.setPrototypeOf
      ? Object.setPrototypeOf(this, n)
      : (this.__proto__ = n),
      (this.name = "ZodError"),
      (this.issues = t));
  }
  get errors() {
    return this.issues;
  }
  format(t) {
    const n =
        t ||
        function (o) {
          return o.message;
        },
      r = { _errors: [] },
      i = (o) => {
        for (const s of o.issues)
          if (s.code === "invalid_union") s.unionErrors.map(i);
          else if (s.code === "invalid_return_type") i(s.returnTypeError);
          else if (s.code === "invalid_arguments") i(s.argumentsError);
          else if (s.path.length === 0) r._errors.push(n(s));
          else {
            let a = r,
              l = 0;
            for (; l < s.path.length; ) {
              const u = s.path[l];
              (l === s.path.length - 1
                ? ((a[u] = a[u] || { _errors: [] }), a[u]._errors.push(n(s)))
                : (a[u] = a[u] || { _errors: [] }),
                (a = a[u]),
                l++);
            }
          }
      };
    return (i(this), r);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Ce.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {},
      r = [];
    for (const i of this.issues)
      i.path.length > 0
        ? ((n[i.path[0]] = n[i.path[0]] || []), n[i.path[0]].push(t(i)))
        : r.push(t(i));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
Wn.create = (e) => new Wn(e);
const Vs = (e, t) => {
  let n;
  switch (e.code) {
    case V.invalid_type:
      n =
        e.received === F.undefined
          ? "Required"
          : `Expected ${e.expected}, received ${e.received}`;
      break;
    case V.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, Ce.jsonStringifyReplacer)}`;
      break;
    case V.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${Ce.joinValues(e.keys, ", ")}`;
      break;
    case V.invalid_union:
      n = "Invalid input";
      break;
    case V.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${Ce.joinValues(e.options)}`;
      break;
    case V.invalid_enum_value:
      n = `Invalid enum value. Expected ${Ce.joinValues(e.options)}, received '${e.received}'`;
      break;
    case V.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case V.invalid_return_type:
      n = "Invalid function return type";
      break;
    case V.invalid_date:
      n = "Invalid date";
      break;
    case V.invalid_string:
      typeof e.validation == "object"
        ? "startsWith" in e.validation
          ? (n = `Invalid input: must start with "${e.validation.startsWith}"`)
          : "endsWith" in e.validation
            ? (n = `Invalid input: must end with "${e.validation.endsWith}"`)
            : Ce.assertNever(e.validation)
        : (n =
            e.validation !== "regex" ? `Invalid ${e.validation}` : "Invalid");
      break;
    case V.too_small:
      n =
        e.type === "array"
          ? `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)`
          : e.type === "string"
            ? `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)`
            : e.type === "number"
              ? `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}`
              : e.type === "date"
                ? `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(e.minimum)}`
                : "Invalid input";
      break;
    case V.too_big:
      n =
        e.type === "array"
          ? `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)`
          : e.type === "string"
            ? `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)`
            : e.type === "number"
              ? `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}`
              : e.type === "date"
                ? `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(e.maximum)}`
                : "Invalid input";
      break;
    case V.custom:
      n = "Invalid input";
      break;
    case V.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case V.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case V.not_finite:
      n = "Number must be finite";
      break;
    default:
      ((n = t.defaultError), Ce.assertNever(e));
  }
  return { message: n };
};
let WE = Vs;
function aV(e) {
  WE = e;
}
function Xl() {
  return WE;
}
const eu = (e) => {
    const { data: t, path: n, errorMaps: r, issueData: i } = e,
      o = [...n, ...(i.path || [])],
      s = { ...i, path: o };
    let a = "";
    const l = r
      .filter((u) => !!u)
      .slice()
      .reverse();
    for (const u of l) a = u(s, { data: t, defaultError: a }).message;
    return { ...i, path: o, message: i.message || a };
  },
  lV = [];
function Q(e, t) {
  const n = eu({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, Xl(), Vs].filter(
      (r) => !!r,
    ),
  });
  e.common.issues.push(n);
}
class Ct {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, n) {
    const r = [];
    for (const i of n) {
      if (i.status === "aborted") return ce;
      (i.status === "dirty" && t.dirty(), r.push(i.value));
    }
    return { status: t.value, value: r };
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const i of n) r.push({ key: await i.key, value: await i.value });
    return Ct.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const i of n) {
      const { key: o, value: s } = i;
      if (o.status === "aborted" || s.status === "aborted") return ce;
      (o.status === "dirty" && t.dirty(),
        s.status === "dirty" && t.dirty(),
        (s.value !== void 0 || i.alwaysSet) && (r[o.value] = s.value));
    }
    return { status: t.value, value: r };
  }
}
const ce = Object.freeze({ status: "aborted" }),
  ZE = (e) => ({ status: "dirty", value: e }),
  wt = (e) => ({ status: "valid", value: e }),
  Lf = (e) => e.status === "aborted",
  Df = (e) => e.status === "dirty",
  tu = (e) => e.status === "valid",
  nu = (e) => typeof Promise < "u" && e instanceof Promise;
var Se;
(function (e) {
  ((e.errToObj = (t) => (typeof t == "string" ? { message: t } : t || {})),
    (e.toString = (t) =>
      typeof t == "string" ? t : t == null ? void 0 : t.message));
})(Se || (Se = {}));
class Pn {
  constructor(t, n, r, i) {
    ((this.parent = t), (this.data = n), (this._path = r), (this._key = i));
  }
  get path() {
    return this._path.concat(this._key);
  }
}
const my = (e, t) => {
  if (tu(t)) return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return { success: !1, error: new Wn(e.common.issues) };
};
function he(e) {
  if (!e) return {};
  const {
    errorMap: t,
    invalid_type_error: n,
    required_error: r,
    description: i,
  } = e;
  if (t && (n || r))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
    );
  return t
    ? { errorMap: t, description: i }
    : {
        errorMap: (o, s) =>
          o.code !== "invalid_type"
            ? { message: s.defaultError }
            : s.data === void 0
              ? { message: r ?? s.defaultError }
              : { message: n ?? s.defaultError },
        description: i,
      };
}
class me {
  constructor(t) {
    ((this.spa = this.safeParseAsync),
      (this._def = t),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this)));
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return fr(t.data);
  }
  _getOrReturnCtx(t, n) {
    return (
      n || {
        common: t.parent.common,
        data: t.data,
        parsedType: fr(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      }
    );
  }
  _processInputParams(t) {
    return {
      status: new Ct(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: fr(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      },
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (nu(n)) throw new Error("Synchronous parse encountered promise.");
    return n;
  }
  _parseAsync(t) {
    const n = this._parse(t);
    return Promise.resolve(n);
  }
  parse(t, n) {
    const r = this.safeParse(t, n);
    if (r.success) return r.data;
    throw r.error;
  }
  safeParse(t, n) {
    var r;
    const i = {
        common: {
          issues: [],
          async:
            (r = n == null ? void 0 : n.async) !== null && r !== void 0 && r,
          contextualErrorMap: n == null ? void 0 : n.errorMap,
        },
        path: (n == null ? void 0 : n.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: fr(t),
      },
      o = this._parseSync({ data: t, path: i.path, parent: i });
    return my(i, o);
  }
  async parseAsync(t, n) {
    const r = await this.safeParseAsync(t, n);
    if (r.success) return r.data;
    throw r.error;
  }
  async safeParseAsync(t, n) {
    const r = {
        common: {
          issues: [],
          contextualErrorMap: n == null ? void 0 : n.errorMap,
          async: !0,
        },
        path: (n == null ? void 0 : n.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: fr(t),
      },
      i = this._parse({ data: t, path: r.path, parent: r }),
      o = await (nu(i) ? i : Promise.resolve(i));
    return my(r, o);
  }
  refine(t, n) {
    const r = (i) =>
      typeof n == "string" || n === void 0
        ? { message: n }
        : typeof n == "function"
          ? n(i)
          : n;
    return this._refinement((i, o) => {
      const s = t(i),
        a = () => o.addIssue({ code: V.custom, ...r(i) });
      return typeof Promise < "u" && s instanceof Promise
        ? s.then((l) => !!l || (a(), !1))
        : !!s || (a(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement(
      (r, i) =>
        !!t(r) || (i.addIssue(typeof n == "function" ? n(r, i) : n), !1),
    );
  }
  _refinement(t) {
    return new mn({
      schema: this,
      typeName: se.ZodEffects,
      effect: { type: "refinement", refinement: t },
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return Hn.create(this, this._def);
  }
  nullable() {
    return fi.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return _n.create(this, this._def);
  }
  promise() {
    return go.create(this, this._def);
  }
  or(t) {
    return Bs.create([this, t], this._def);
  }
  and(t) {
    return Ws.create(this, t, this._def);
  }
  transform(t) {
    return new mn({
      ...he(this._def),
      schema: this,
      typeName: se.ZodEffects,
      effect: { type: "transform", transform: t },
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Ks({
      ...he(this._def),
      innerType: this,
      defaultValue: n,
      typeName: se.ZodDefault,
    });
  }
  brand() {
    return new GE({ typeName: se.ZodBranded, type: this, ...he(this._def) });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new au({
      ...he(this._def),
      innerType: this,
      catchValue: n,
      typeName: se.ZodCatch,
    });
  }
  describe(t) {
    return new this.constructor({ ...this._def, description: t });
  }
  pipe(t) {
    return ma.create(this, t);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const uV = /^c[^\s-]{8,}$/i,
  cV = /^[a-z][a-z0-9]*$/,
  dV =
    /^([a-f0-9]{8}-[a-f0-9]{4}-[1-5][a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}|00000000-0000-0000-0000-000000000000)$/i,
  fV =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|([^-]([a-zA-Z0-9-]*\.)+[a-zA-Z]{2,}))$/;
class qn extends me {
  constructor() {
    (super(...arguments),
      (this._regex = (t, n, r) =>
        this.refinement((i) => t.test(i), {
          validation: n,
          code: V.invalid_string,
          ...Se.errToObj(r),
        })),
      (this.nonempty = (t) => this.min(1, Se.errToObj(t))),
      (this.trim = () =>
        new qn({
          ...this._def,
          checks: [...this._def.checks, { kind: "trim" }],
        })));
  }
  _parse(t) {
    if (
      (this._def.coerce && (t.data = String(t.data)),
      this._getType(t) !== F.string)
    ) {
      const o = this._getOrReturnCtx(t);
      return (
        Q(o, {
          code: V.invalid_type,
          expected: F.string,
          received: o.parsedType,
        }),
        ce
      );
    }
    const n = new Ct();
    let r;
    for (const o of this._def.checks)
      if (o.kind === "min")
        t.data.length < o.value &&
          ((r = this._getOrReturnCtx(t, r)),
          Q(r, {
            code: V.too_small,
            minimum: o.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: o.message,
          }),
          n.dirty());
      else if (o.kind === "max")
        t.data.length > o.value &&
          ((r = this._getOrReturnCtx(t, r)),
          Q(r, {
            code: V.too_big,
            maximum: o.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: o.message,
          }),
          n.dirty());
      else if (o.kind === "length") {
        const s = t.data.length > o.value,
          a = t.data.length < o.value;
        (s || a) &&
          ((r = this._getOrReturnCtx(t, r)),
          s
            ? Q(r, {
                code: V.too_big,
                maximum: o.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: o.message,
              })
            : a &&
              Q(r, {
                code: V.too_small,
                minimum: o.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: o.message,
              }),
          n.dirty());
      } else if (o.kind === "email")
        fV.test(t.data) ||
          ((r = this._getOrReturnCtx(t, r)),
          Q(r, {
            validation: "email",
            code: V.invalid_string,
            message: o.message,
          }),
          n.dirty());
      else if (o.kind === "uuid")
        dV.test(t.data) ||
          ((r = this._getOrReturnCtx(t, r)),
          Q(r, {
            validation: "uuid",
            code: V.invalid_string,
            message: o.message,
          }),
          n.dirty());
      else if (o.kind === "cuid")
        uV.test(t.data) ||
          ((r = this._getOrReturnCtx(t, r)),
          Q(r, {
            validation: "cuid",
            code: V.invalid_string,
            message: o.message,
          }),
          n.dirty());
      else if (o.kind === "cuid2")
        cV.test(t.data) ||
          ((r = this._getOrReturnCtx(t, r)),
          Q(r, {
            validation: "cuid2",
            code: V.invalid_string,
            message: o.message,
          }),
          n.dirty());
      else if (o.kind === "url")
        try {
          new URL(t.data);
        } catch {
          ((r = this._getOrReturnCtx(t, r)),
            Q(r, {
              validation: "url",
              code: V.invalid_string,
              message: o.message,
            }),
            n.dirty());
        }
      else
        o.kind === "regex"
          ? ((o.regex.lastIndex = 0),
            o.regex.test(t.data) ||
              ((r = this._getOrReturnCtx(t, r)),
              Q(r, {
                validation: "regex",
                code: V.invalid_string,
                message: o.message,
              }),
              n.dirty()))
          : o.kind === "trim"
            ? (t.data = t.data.trim())
            : o.kind === "startsWith"
              ? t.data.startsWith(o.value) ||
                ((r = this._getOrReturnCtx(t, r)),
                Q(r, {
                  code: V.invalid_string,
                  validation: { startsWith: o.value },
                  message: o.message,
                }),
                n.dirty())
              : o.kind === "endsWith"
                ? t.data.endsWith(o.value) ||
                  ((r = this._getOrReturnCtx(t, r)),
                  Q(r, {
                    code: V.invalid_string,
                    validation: { endsWith: o.value },
                    message: o.message,
                  }),
                  n.dirty())
                : o.kind === "datetime"
                  ? ((i = o).precision
                      ? i.offset
                        ? new RegExp(
                            `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${i.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`,
                          )
                        : new RegExp(
                            `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${i.precision}}Z$`,
                          )
                      : i.precision === 0
                        ? i.offset
                          ? new RegExp(
                              "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$",
                            )
                          : new RegExp(
                              "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$",
                            )
                        : i.offset
                          ? new RegExp(
                              "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$",
                            )
                          : new RegExp(
                              "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$",
                            )
                    ).test(t.data) ||
                    ((r = this._getOrReturnCtx(t, r)),
                    Q(r, {
                      code: V.invalid_string,
                      validation: "datetime",
                      message: o.message,
                    }),
                    n.dirty())
                  : Ce.assertNever(o);
    var i;
    return { status: n.value, value: t.data };
  }
  _addCheck(t) {
    return new qn({ ...this._def, checks: [...this._def.checks, t] });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...Se.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...Se.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...Se.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...Se.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...Se.errToObj(t) });
  }
  datetime(t) {
    var n;
    return typeof t == "string"
      ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: t,
        })
      : this._addCheck({
          kind: "datetime",
          precision:
            (t == null ? void 0 : t.precision) === void 0
              ? null
              : t == null
                ? void 0
                : t.precision,
          offset:
            (n = t == null ? void 0 : t.offset) !== null && n !== void 0 && n,
          ...Se.errToObj(t == null ? void 0 : t.message),
        });
  }
  regex(t, n) {
    return this._addCheck({ kind: "regex", regex: t, ...Se.errToObj(n) });
  }
  startsWith(t, n) {
    return this._addCheck({ kind: "startsWith", value: t, ...Se.errToObj(n) });
  }
  endsWith(t, n) {
    return this._addCheck({ kind: "endsWith", value: t, ...Se.errToObj(n) });
  }
  min(t, n) {
    return this._addCheck({ kind: "min", value: t, ...Se.errToObj(n) });
  }
  max(t, n) {
    return this._addCheck({ kind: "max", value: t, ...Se.errToObj(n) });
  }
  length(t, n) {
    return this._addCheck({ kind: "length", value: t, ...Se.errToObj(n) });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get minLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
function hV(e, t) {
  const n = (e.toString().split(".")[1] || "").length,
    r = (t.toString().split(".")[1] || "").length,
    i = n > r ? n : r;
  return (
    (parseInt(e.toFixed(i).replace(".", "")) %
      parseInt(t.toFixed(i).replace(".", ""))) /
    Math.pow(10, i)
  );
}
qn.create = (e) => {
  var t;
  return new qn({
    checks: [],
    typeName: se.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 && t,
    ...he(e),
  });
};
class Pr extends me {
  constructor() {
    (super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf));
  }
  _parse(t) {
    if (
      (this._def.coerce && (t.data = Number(t.data)),
      this._getType(t) !== F.number)
    ) {
      const i = this._getOrReturnCtx(t);
      return (
        Q(i, {
          code: V.invalid_type,
          expected: F.number,
          received: i.parsedType,
        }),
        ce
      );
    }
    let n;
    const r = new Ct();
    for (const i of this._def.checks)
      i.kind === "int"
        ? Ce.isInteger(t.data) ||
          ((n = this._getOrReturnCtx(t, n)),
          Q(n, {
            code: V.invalid_type,
            expected: "integer",
            received: "float",
            message: i.message,
          }),
          r.dirty())
        : i.kind === "min"
          ? (i.inclusive ? t.data < i.value : t.data <= i.value) &&
            ((n = this._getOrReturnCtx(t, n)),
            Q(n, {
              code: V.too_small,
              minimum: i.value,
              type: "number",
              inclusive: i.inclusive,
              exact: !1,
              message: i.message,
            }),
            r.dirty())
          : i.kind === "max"
            ? (i.inclusive ? t.data > i.value : t.data >= i.value) &&
              ((n = this._getOrReturnCtx(t, n)),
              Q(n, {
                code: V.too_big,
                maximum: i.value,
                type: "number",
                inclusive: i.inclusive,
                exact: !1,
                message: i.message,
              }),
              r.dirty())
            : i.kind === "multipleOf"
              ? hV(t.data, i.value) !== 0 &&
                ((n = this._getOrReturnCtx(t, n)),
                Q(n, {
                  code: V.not_multiple_of,
                  multipleOf: i.value,
                  message: i.message,
                }),
                r.dirty())
              : i.kind === "finite"
                ? Number.isFinite(t.data) ||
                  ((n = this._getOrReturnCtx(t, n)),
                  Q(n, { code: V.not_finite, message: i.message }),
                  r.dirty())
                : Ce.assertNever(i);
    return { status: r.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, Se.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, Se.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, Se.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, Se.toString(n));
  }
  setLimit(t, n, r, i) {
    return new Pr({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: n, inclusive: r, message: Se.toString(i) },
      ],
    });
  }
  _addCheck(t) {
    return new Pr({ ...this._def, checks: [...this._def.checks, t] });
  }
  int(t) {
    return this._addCheck({ kind: "int", message: Se.toString(t) });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: Se.toString(t),
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: Se.toString(t),
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: Se.toString(t),
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: Se.toString(t),
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: Se.toString(n),
    });
  }
  finite(t) {
    return this._addCheck({ kind: "finite", message: Se.toString(t) });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find(
      (t) =>
        t.kind === "int" || (t.kind === "multipleOf" && Ce.isInteger(t.value)),
    );
  }
  get isFinite() {
    let t = null,
      n = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
        return !0;
      r.kind === "min"
        ? (n === null || r.value > n) && (n = r.value)
        : r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    }
    return Number.isFinite(n) && Number.isFinite(t);
  }
}
Pr.create = (e) =>
  new Pr({
    checks: [],
    typeName: se.ZodNumber,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...he(e),
  });
class $s extends me {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = BigInt(t.data)),
      this._getType(t) !== F.bigint)
    ) {
      const n = this._getOrReturnCtx(t);
      return (
        Q(n, {
          code: V.invalid_type,
          expected: F.bigint,
          received: n.parsedType,
        }),
        ce
      );
    }
    return wt(t.data);
  }
}
$s.create = (e) => {
  var t;
  return new $s({
    typeName: se.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 && t,
    ...he(e),
  });
};
class Us extends me {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = !!t.data), this._getType(t) !== F.boolean)
    ) {
      const n = this._getOrReturnCtx(t);
      return (
        Q(n, {
          code: V.invalid_type,
          expected: F.boolean,
          received: n.parsedType,
        }),
        ce
      );
    }
    return wt(t.data);
  }
}
Us.create = (e) =>
  new Us({
    typeName: se.ZodBoolean,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...he(e),
  });
class ci extends me {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = new Date(t.data)),
      this._getType(t) !== F.date)
    ) {
      const i = this._getOrReturnCtx(t);
      return (
        Q(i, {
          code: V.invalid_type,
          expected: F.date,
          received: i.parsedType,
        }),
        ce
      );
    }
    if (isNaN(t.data.getTime()))
      return (Q(this._getOrReturnCtx(t), { code: V.invalid_date }), ce);
    const n = new Ct();
    let r;
    for (const i of this._def.checks)
      i.kind === "min"
        ? t.data.getTime() < i.value &&
          ((r = this._getOrReturnCtx(t, r)),
          Q(r, {
            code: V.too_small,
            message: i.message,
            inclusive: !0,
            exact: !1,
            minimum: i.value,
            type: "date",
          }),
          n.dirty())
        : i.kind === "max"
          ? t.data.getTime() > i.value &&
            ((r = this._getOrReturnCtx(t, r)),
            Q(r, {
              code: V.too_big,
              message: i.message,
              inclusive: !0,
              exact: !1,
              maximum: i.value,
              type: "date",
            }),
            n.dirty())
          : Ce.assertNever(i);
    return { status: n.value, value: new Date(t.data.getTime()) };
  }
  _addCheck(t) {
    return new ci({ ...this._def, checks: [...this._def.checks, t] });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: Se.toString(n),
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: Se.toString(n),
    });
  }
  get minDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
}
ci.create = (e) =>
  new ci({
    checks: [],
    coerce: (e == null ? void 0 : e.coerce) || !1,
    typeName: se.ZodDate,
    ...he(e),
  });
class ru extends me {
  _parse(t) {
    if (this._getType(t) !== F.symbol) {
      const n = this._getOrReturnCtx(t);
      return (
        Q(n, {
          code: V.invalid_type,
          expected: F.symbol,
          received: n.parsedType,
        }),
        ce
      );
    }
    return wt(t.data);
  }
}
ru.create = (e) => new ru({ typeName: se.ZodSymbol, ...he(e) });
class Fs extends me {
  _parse(t) {
    if (this._getType(t) !== F.undefined) {
      const n = this._getOrReturnCtx(t);
      return (
        Q(n, {
          code: V.invalid_type,
          expected: F.undefined,
          received: n.parsedType,
        }),
        ce
      );
    }
    return wt(t.data);
  }
}
Fs.create = (e) => new Fs({ typeName: se.ZodUndefined, ...he(e) });
class js extends me {
  _parse(t) {
    if (this._getType(t) !== F.null) {
      const n = this._getOrReturnCtx(t);
      return (
        Q(n, {
          code: V.invalid_type,
          expected: F.null,
          received: n.parsedType,
        }),
        ce
      );
    }
    return wt(t.data);
  }
}
js.create = (e) => new js({ typeName: se.ZodNull, ...he(e) });
class vo extends me {
  constructor() {
    (super(...arguments), (this._any = !0));
  }
  _parse(t) {
    return wt(t.data);
  }
}
vo.create = (e) => new vo({ typeName: se.ZodAny, ...he(e) });
class ti extends me {
  constructor() {
    (super(...arguments), (this._unknown = !0));
  }
  _parse(t) {
    return wt(t.data);
  }
}
ti.create = (e) => new ti({ typeName: se.ZodUnknown, ...he(e) });
class Zn extends me {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return (
      Q(n, { code: V.invalid_type, expected: F.never, received: n.parsedType }),
      ce
    );
  }
}
Zn.create = (e) => new Zn({ typeName: se.ZodNever, ...he(e) });
class iu extends me {
  _parse(t) {
    if (this._getType(t) !== F.undefined) {
      const n = this._getOrReturnCtx(t);
      return (
        Q(n, {
          code: V.invalid_type,
          expected: F.void,
          received: n.parsedType,
        }),
        ce
      );
    }
    return wt(t.data);
  }
}
iu.create = (e) => new iu({ typeName: se.ZodVoid, ...he(e) });
class _n extends me {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t),
      i = this._def;
    if (n.parsedType !== F.array)
      return (
        Q(n, {
          code: V.invalid_type,
          expected: F.array,
          received: n.parsedType,
        }),
        ce
      );
    if (i.exactLength !== null) {
      const s = n.data.length > i.exactLength.value,
        a = n.data.length < i.exactLength.value;
      (s || a) &&
        (Q(n, {
          code: s ? V.too_big : V.too_small,
          minimum: a ? i.exactLength.value : void 0,
          maximum: s ? i.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: i.exactLength.message,
        }),
        r.dirty());
    }
    if (
      (i.minLength !== null &&
        n.data.length < i.minLength.value &&
        (Q(n, {
          code: V.too_small,
          minimum: i.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: i.minLength.message,
        }),
        r.dirty()),
      i.maxLength !== null &&
        n.data.length > i.maxLength.value &&
        (Q(n, {
          code: V.too_big,
          maximum: i.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: i.maxLength.message,
        }),
        r.dirty()),
      n.common.async)
    )
      return Promise.all(
        [...n.data].map((s, a) => i.type._parseAsync(new Pn(n, s, n.path, a))),
      ).then((s) => Ct.mergeArray(r, s));
    const o = [...n.data].map((s, a) =>
      i.type._parseSync(new Pn(n, s, n.path, a)),
    );
    return Ct.mergeArray(r, o);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new _n({
      ...this._def,
      minLength: { value: t, message: Se.toString(n) },
    });
  }
  max(t, n) {
    return new _n({
      ...this._def,
      maxLength: { value: t, message: Se.toString(n) },
    });
  }
  length(t, n) {
    return new _n({
      ...this._def,
      exactLength: { value: t, message: Se.toString(n) },
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
var ou;
function Ai(e) {
  if (e instanceof He) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = Hn.create(Ai(r));
    }
    return new He({ ...e._def, shape: () => t });
  }
  return e instanceof _n
    ? _n.create(Ai(e.element))
    : e instanceof Hn
      ? Hn.create(Ai(e.unwrap()))
      : e instanceof fi
        ? fi.create(Ai(e.unwrap()))
        : e instanceof kn
          ? kn.create(e.items.map((t) => Ai(t)))
          : e;
}
((_n.create = (e, t) =>
  new _n({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: se.ZodArray,
    ...he(t),
  })),
  (function (e) {
    e.mergeShapes = (t, n) => ({ ...t, ...n });
  })(ou || (ou = {})));
class He extends me {
  constructor() {
    (super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend));
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const t = this._def.shape(),
      n = Ce.objectKeys(t);
    return (this._cached = { shape: t, keys: n });
  }
  _parse(t) {
    if (this._getType(t) !== F.object) {
      const l = this._getOrReturnCtx(t);
      return (
        Q(l, {
          code: V.invalid_type,
          expected: F.object,
          received: l.parsedType,
        }),
        ce
      );
    }
    const { status: n, ctx: r } = this._processInputParams(t),
      { shape: i, keys: o } = this._getCached(),
      s = [];
    if (
      !(this._def.catchall instanceof Zn && this._def.unknownKeys === "strip")
    )
      for (const l in r.data) o.includes(l) || s.push(l);
    const a = [];
    for (const l of o) {
      const u = i[l],
        c = r.data[l];
      a.push({
        key: { status: "valid", value: l },
        value: u._parse(new Pn(r, c, r.path, l)),
        alwaysSet: l in r.data,
      });
    }
    if (this._def.catchall instanceof Zn) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const u of s)
          a.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: r.data[u] },
          });
      else if (l === "strict")
        s.length > 0 &&
          (Q(r, { code: V.unrecognized_keys, keys: s }), n.dirty());
      else if (l !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const u of s) {
        const c = r.data[u];
        a.push({
          key: { status: "valid", value: u },
          value: l._parse(new Pn(r, c, r.path, u)),
          alwaysSet: u in r.data,
        });
      }
    }
    return r.common.async
      ? Promise.resolve()
          .then(async () => {
            const l = [];
            for (const u of a) {
              const c = await u.key;
              l.push({ key: c, value: await u.value, alwaysSet: u.alwaysSet });
            }
            return l;
          })
          .then((l) => Ct.mergeObjectSync(n, l))
      : Ct.mergeObjectSync(n, a);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return new He({
      ...this._def,
      unknownKeys: "strict",
      ...(t !== void 0
        ? {
            errorMap: (n, r) => {
              var i, o, s, a;
              const l =
                (s =
                  (o = (i = this._def).errorMap) === null || o === void 0
                    ? void 0
                    : o.call(i, n, r).message) !== null && s !== void 0
                  ? s
                  : r.defaultError;
              return n.code === "unrecognized_keys"
                ? {
                    message:
                      (a = Se.errToObj(t).message) !== null && a !== void 0
                        ? a
                        : l,
                  }
                : { message: l };
            },
          }
        : {}),
    });
  }
  strip() {
    return new He({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new He({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(t) {
    return new He({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...t }),
    });
  }
  merge(t) {
    return new He({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ou.mergeShapes(this._def.shape(), t._def.shape()),
      typeName: se.ZodObject,
    });
  }
  setKey(t, n) {
    return this.augment({ [t]: n });
  }
  catchall(t) {
    return new He({ ...this._def, catchall: t });
  }
  pick(t) {
    const n = {};
    return (
      Ce.objectKeys(t).forEach((r) => {
        t[r] && this.shape[r] && (n[r] = this.shape[r]);
      }),
      new He({ ...this._def, shape: () => n })
    );
  }
  omit(t) {
    const n = {};
    return (
      Ce.objectKeys(this.shape).forEach((r) => {
        t[r] || (n[r] = this.shape[r]);
      }),
      new He({ ...this._def, shape: () => n })
    );
  }
  deepPartial() {
    return Ai(this);
  }
  partial(t) {
    const n = {};
    return (
      Ce.objectKeys(this.shape).forEach((r) => {
        const i = this.shape[r];
        t && !t[r] ? (n[r] = i) : (n[r] = i.optional());
      }),
      new He({ ...this._def, shape: () => n })
    );
  }
  required(t) {
    const n = {};
    return (
      Ce.objectKeys(this.shape).forEach((r) => {
        if (t && !t[r]) n[r] = this.shape[r];
        else {
          let i = this.shape[r];
          for (; i instanceof Hn; ) i = i._def.innerType;
          n[r] = i;
        }
      }),
      new He({ ...this._def, shape: () => n })
    );
  }
  keyof() {
    return HE(Ce.objectKeys(this.shape));
  }
}
((He.create = (e, t) =>
  new He({
    shape: () => e,
    unknownKeys: "strip",
    catchall: Zn.create(),
    typeName: se.ZodObject,
    ...he(t),
  })),
  (He.strictCreate = (e, t) =>
    new He({
      shape: () => e,
      unknownKeys: "strict",
      catchall: Zn.create(),
      typeName: se.ZodObject,
      ...he(t),
    })),
  (He.lazycreate = (e, t) =>
    new He({
      shape: e,
      unknownKeys: "strip",
      catchall: Zn.create(),
      typeName: se.ZodObject,
      ...he(t),
    })));
class Bs extends me {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = this._def.options;
    if (n.common.async)
      return Promise.all(
        r.map(async (i) => {
          const o = { ...n, common: { ...n.common, issues: [] }, parent: null };
          return {
            result: await i._parseAsync({
              data: n.data,
              path: n.path,
              parent: o,
            }),
            ctx: o,
          };
        }),
      ).then(function (i) {
        for (const s of i) if (s.result.status === "valid") return s.result;
        for (const s of i)
          if (s.result.status === "dirty")
            return (n.common.issues.push(...s.ctx.common.issues), s.result);
        const o = i.map((s) => new Wn(s.ctx.common.issues));
        return (Q(n, { code: V.invalid_union, unionErrors: o }), ce);
      });
    {
      let i;
      const o = [];
      for (const a of r) {
        const l = { ...n, common: { ...n.common, issues: [] }, parent: null },
          u = a._parseSync({ data: n.data, path: n.path, parent: l });
        if (u.status === "valid") return u;
        (u.status !== "dirty" || i || (i = { result: u, ctx: l }),
          l.common.issues.length && o.push(l.common.issues));
      }
      if (i) return (n.common.issues.push(...i.ctx.common.issues), i.result);
      const s = o.map((a) => new Wn(a));
      return (Q(n, { code: V.invalid_union, unionErrors: s }), ce);
    }
  }
  get options() {
    return this._def.options;
  }
}
Bs.create = (e, t) => new Bs({ options: e, typeName: se.ZodUnion, ...he(t) });
const ll = (e) =>
  e instanceof Zs
    ? ll(e.schema)
    : e instanceof mn
      ? ll(e.innerType())
      : e instanceof Hs
        ? [e.value]
        : e instanceof kr
          ? e.options
          : e instanceof Gs
            ? Object.keys(e.enum)
            : e instanceof Ks
              ? ll(e._def.innerType)
              : e instanceof Fs
                ? [void 0]
                : e instanceof js
                  ? [null]
                  : null;
class ec extends me {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== F.object)
      return (
        Q(n, {
          code: V.invalid_type,
          expected: F.object,
          received: n.parsedType,
        }),
        ce
      );
    const r = this.discriminator,
      i = n.data[r],
      o = this.optionsMap.get(i);
    return o
      ? n.common.async
        ? o._parseAsync({ data: n.data, path: n.path, parent: n })
        : o._parseSync({ data: n.data, path: n.path, parent: n })
      : (Q(n, {
          code: V.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [r],
        }),
        ce);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(t, n, r) {
    const i = new Map();
    for (const o of n) {
      const s = ll(o.shape[t]);
      if (!s)
        throw new Error(
          `A discriminator value for key \`${t}\` could not be extracted from all schema options`,
        );
      for (const a of s) {
        if (i.has(a))
          throw new Error(
            `Discriminator property ${String(t)} has duplicate value ${String(a)}`,
          );
        i.set(a, o);
      }
    }
    return new ec({
      typeName: se.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: i,
      ...he(r),
    });
  }
}
function Mf(e, t) {
  const n = fr(e),
    r = fr(t);
  if (e === t) return { valid: !0, data: e };
  if (n === F.object && r === F.object) {
    const i = Ce.objectKeys(t),
      o = Ce.objectKeys(e).filter((a) => i.indexOf(a) !== -1),
      s = { ...e, ...t };
    for (const a of o) {
      const l = Mf(e[a], t[a]);
      if (!l.valid) return { valid: !1 };
      s[a] = l.data;
    }
    return { valid: !0, data: s };
  }
  if (n === F.array && r === F.array) {
    if (e.length !== t.length) return { valid: !1 };
    const i = [];
    for (let o = 0; o < e.length; o++) {
      const s = Mf(e[o], t[o]);
      if (!s.valid) return { valid: !1 };
      i.push(s.data);
    }
    return { valid: !0, data: i };
  }
  return n === F.date && r === F.date && +e == +t
    ? { valid: !0, data: e }
    : { valid: !1 };
}
class Ws extends me {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t),
      i = (o, s) => {
        if (Lf(o) || Lf(s)) return ce;
        const a = Mf(o.value, s.value);
        return a.valid
          ? ((Df(o) || Df(s)) && n.dirty(), { status: n.value, value: a.data })
          : (Q(r, { code: V.invalid_intersection_types }), ce);
      };
    return r.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: r.data, path: r.path, parent: r }),
          this._def.right._parseAsync({
            data: r.data,
            path: r.path,
            parent: r,
          }),
        ]).then(([o, s]) => i(o, s))
      : i(
          this._def.left._parseSync({ data: r.data, path: r.path, parent: r }),
          this._def.right._parseSync({ data: r.data, path: r.path, parent: r }),
        );
  }
}
Ws.create = (e, t, n) =>
  new Ws({ left: e, right: t, typeName: se.ZodIntersection, ...he(n) });
class kn extends me {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== F.array)
      return (
        Q(r, {
          code: V.invalid_type,
          expected: F.array,
          received: r.parsedType,
        }),
        ce
      );
    if (r.data.length < this._def.items.length)
      return (
        Q(r, {
          code: V.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        ce
      );
    !this._def.rest &&
      r.data.length > this._def.items.length &&
      (Q(r, {
        code: V.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      n.dirty());
    const i = [...r.data]
      .map((o, s) => {
        const a = this._def.items[s] || this._def.rest;
        return a ? a._parse(new Pn(r, o, r.path, s)) : null;
      })
      .filter((o) => !!o);
    return r.common.async
      ? Promise.all(i).then((o) => Ct.mergeArray(n, o))
      : Ct.mergeArray(n, i);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new kn({ ...this._def, rest: t });
  }
}
kn.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new kn({ items: e, typeName: se.ZodTuple, rest: null, ...he(t) });
};
class tc extends me {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== F.object)
      return (
        Q(r, {
          code: V.invalid_type,
          expected: F.object,
          received: r.parsedType,
        }),
        ce
      );
    const i = [],
      o = this._def.keyType,
      s = this._def.valueType;
    for (const a in r.data)
      i.push({
        key: o._parse(new Pn(r, a, r.path, a)),
        value: s._parse(new Pn(r, r.data[a], r.path, a)),
      });
    return r.common.async
      ? Ct.mergeObjectAsync(n, i)
      : Ct.mergeObjectSync(n, i);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return new tc(
      n instanceof me
        ? { keyType: t, valueType: n, typeName: se.ZodRecord, ...he(r) }
        : {
            keyType: qn.create(),
            valueType: t,
            typeName: se.ZodRecord,
            ...he(n),
          },
    );
  }
}
class su extends me {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== F.map)
      return (
        Q(r, { code: V.invalid_type, expected: F.map, received: r.parsedType }),
        ce
      );
    const i = this._def.keyType,
      o = this._def.valueType,
      s = [...r.data.entries()].map(([a, l], u) => ({
        key: i._parse(new Pn(r, a, r.path, [u, "key"])),
        value: o._parse(new Pn(r, l, r.path, [u, "value"])),
      }));
    if (r.common.async) {
      const a = new Map();
      return Promise.resolve().then(async () => {
        for (const l of s) {
          const u = await l.key,
            c = await l.value;
          if (u.status === "aborted" || c.status === "aborted") return ce;
          ((u.status !== "dirty" && c.status !== "dirty") || n.dirty(),
            a.set(u.value, c.value));
        }
        return { status: n.value, value: a };
      });
    }
    {
      const a = new Map();
      for (const l of s) {
        const u = l.key,
          c = l.value;
        if (u.status === "aborted" || c.status === "aborted") return ce;
        ((u.status !== "dirty" && c.status !== "dirty") || n.dirty(),
          a.set(u.value, c.value));
      }
      return { status: n.value, value: a };
    }
  }
}
su.create = (e, t, n) =>
  new su({ valueType: t, keyType: e, typeName: se.ZodMap, ...he(n) });
class di extends me {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== F.set)
      return (
        Q(r, { code: V.invalid_type, expected: F.set, received: r.parsedType }),
        ce
      );
    const i = this._def;
    (i.minSize !== null &&
      r.data.size < i.minSize.value &&
      (Q(r, {
        code: V.too_small,
        minimum: i.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: i.minSize.message,
      }),
      n.dirty()),
      i.maxSize !== null &&
        r.data.size > i.maxSize.value &&
        (Q(r, {
          code: V.too_big,
          maximum: i.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: i.maxSize.message,
        }),
        n.dirty()));
    const o = this._def.valueType;
    function s(l) {
      const u = new Set();
      for (const c of l) {
        if (c.status === "aborted") return ce;
        (c.status === "dirty" && n.dirty(), u.add(c.value));
      }
      return { status: n.value, value: u };
    }
    const a = [...r.data.values()].map((l, u) =>
      o._parse(new Pn(r, l, r.path, u)),
    );
    return r.common.async ? Promise.all(a).then((l) => s(l)) : s(a);
  }
  min(t, n) {
    return new di({
      ...this._def,
      minSize: { value: t, message: Se.toString(n) },
    });
  }
  max(t, n) {
    return new di({
      ...this._def,
      maxSize: { value: t, message: Se.toString(n) },
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
di.create = (e, t) =>
  new di({
    valueType: e,
    minSize: null,
    maxSize: null,
    typeName: se.ZodSet,
    ...he(t),
  });
class Xi extends me {
  constructor() {
    (super(...arguments), (this.validate = this.implement));
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== F.function)
      return (
        Q(n, {
          code: V.invalid_type,
          expected: F.function,
          received: n.parsedType,
        }),
        ce
      );
    function r(a, l) {
      return eu({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Xl(),
          Vs,
        ].filter((u) => !!u),
        issueData: { code: V.invalid_arguments, argumentsError: l },
      });
    }
    function i(a, l) {
      return eu({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Xl(),
          Vs,
        ].filter((u) => !!u),
        issueData: { code: V.invalid_return_type, returnTypeError: l },
      });
    }
    const o = { errorMap: n.common.contextualErrorMap },
      s = n.data;
    return this._def.returns instanceof go
      ? wt(async (...a) => {
          const l = new Wn([]),
            u = await this._def.args.parseAsync(a, o).catch((d) => {
              throw (l.addIssue(r(a, d)), l);
            }),
            c = await s(...u);
          return await this._def.returns._def.type
            .parseAsync(c, o)
            .catch((d) => {
              throw (l.addIssue(i(c, d)), l);
            });
        })
      : wt((...a) => {
          const l = this._def.args.safeParse(a, o);
          if (!l.success) throw new Wn([r(a, l.error)]);
          const u = s(...l.data),
            c = this._def.returns.safeParse(u, o);
          if (!c.success) throw new Wn([i(u, c.error)]);
          return c.data;
        });
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new Xi({ ...this._def, args: kn.create(t).rest(ti.create()) });
  }
  returns(t) {
    return new Xi({ ...this._def, returns: t });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, n, r) {
    return new Xi({
      args: t || kn.create([]).rest(ti.create()),
      returns: n || ti.create(),
      typeName: se.ZodFunction,
      ...he(r),
    });
  }
}
class Zs extends me {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
Zs.create = (e, t) => new Zs({ getter: e, typeName: se.ZodLazy, ...he(t) });
class Hs extends me {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return (
        Q(n, {
          received: n.data,
          code: V.invalid_literal,
          expected: this._def.value,
        }),
        ce
      );
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
function HE(e, t) {
  return new kr({ values: e, typeName: se.ZodEnum, ...he(t) });
}
Hs.create = (e, t) => new Hs({ value: e, typeName: se.ZodLiteral, ...he(t) });
class kr extends me {
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t),
        r = this._def.values;
      return (
        Q(n, {
          expected: Ce.joinValues(r),
          received: n.parsedType,
          code: V.invalid_type,
        }),
        ce
      );
    }
    if (this._def.values.indexOf(t.data) === -1) {
      const n = this._getOrReturnCtx(t),
        r = this._def.values;
      return (
        Q(n, { received: n.data, code: V.invalid_enum_value, options: r }),
        ce
      );
    }
    return wt(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  get Values() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  get Enum() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  extract(t) {
    return kr.create(t);
  }
  exclude(t) {
    return kr.create(this.options.filter((n) => !t.includes(n)));
  }
}
kr.create = HE;
class Gs extends me {
  _parse(t) {
    const n = Ce.getValidEnumValues(this._def.values),
      r = this._getOrReturnCtx(t);
    if (r.parsedType !== F.string && r.parsedType !== F.number) {
      const i = Ce.objectValues(n);
      return (
        Q(r, {
          expected: Ce.joinValues(i),
          received: r.parsedType,
          code: V.invalid_type,
        }),
        ce
      );
    }
    if (n.indexOf(t.data) === -1) {
      const i = Ce.objectValues(n);
      return (
        Q(r, { received: r.data, code: V.invalid_enum_value, options: i }),
        ce
      );
    }
    return wt(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Gs.create = (e, t) =>
  new Gs({ values: e, typeName: se.ZodNativeEnum, ...he(t) });
class go extends me {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== F.promise && n.common.async === !1)
      return (
        Q(n, {
          code: V.invalid_type,
          expected: F.promise,
          received: n.parsedType,
        }),
        ce
      );
    const r = n.parsedType === F.promise ? n.data : Promise.resolve(n.data);
    return wt(
      r.then((i) =>
        this._def.type.parseAsync(i, {
          path: n.path,
          errorMap: n.common.contextualErrorMap,
        }),
      ),
    );
  }
}
go.create = (e, t) => new go({ type: e, typeName: se.ZodPromise, ...he(t) });
class mn extends me {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === se.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t),
      i = this._def.effect || null;
    if (i.type === "preprocess") {
      const s = i.transform(r.data);
      return r.common.async
        ? Promise.resolve(s).then((a) =>
            this._def.schema._parseAsync({ data: a, path: r.path, parent: r }),
          )
        : this._def.schema._parseSync({ data: s, path: r.path, parent: r });
    }
    const o = {
      addIssue: (s) => {
        (Q(r, s), s.fatal ? n.abort() : n.dirty());
      },
      get path() {
        return r.path;
      },
    };
    if (((o.addIssue = o.addIssue.bind(o)), i.type === "refinement")) {
      const s = (a) => {
        const l = i.refinement(a, o);
        if (r.common.async) return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.",
          );
        return a;
      };
      if (r.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        return a.status === "aborted"
          ? ce
          : (a.status === "dirty" && n.dirty(),
            s(a.value),
            { status: n.value, value: a.value });
      }
      return this._def.schema
        ._parseAsync({ data: r.data, path: r.path, parent: r })
        .then((a) =>
          a.status === "aborted"
            ? ce
            : (a.status === "dirty" && n.dirty(),
              s(a.value).then(() => ({ status: n.value, value: a.value }))),
        );
    }
    if (i.type === "transform") {
      if (r.common.async === !1) {
        const s = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        if (!tu(s)) return s;
        const a = i.transform(s.value, o);
        if (a instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.",
          );
        return { status: n.value, value: a };
      }
      return this._def.schema
        ._parseAsync({ data: r.data, path: r.path, parent: r })
        .then((s) =>
          tu(s)
            ? Promise.resolve(i.transform(s.value, o)).then((a) => ({
                status: n.value,
                value: a,
              }))
            : s,
        );
    }
    Ce.assertNever(i);
  }
}
((mn.create = (e, t, n) =>
  new mn({ schema: e, typeName: se.ZodEffects, effect: t, ...he(n) })),
  (mn.createWithPreprocess = (e, t, n) =>
    new mn({
      schema: t,
      effect: { type: "preprocess", transform: e },
      typeName: se.ZodEffects,
      ...he(n),
    })));
class Hn extends me {
  _parse(t) {
    return this._getType(t) === F.undefined
      ? wt(void 0)
      : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Hn.create = (e, t) =>
  new Hn({ innerType: e, typeName: se.ZodOptional, ...he(t) });
class fi extends me {
  _parse(t) {
    return this._getType(t) === F.null
      ? wt(null)
      : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
fi.create = (e, t) =>
  new fi({ innerType: e, typeName: se.ZodNullable, ...he(t) });
class Ks extends me {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return (
      n.parsedType === F.undefined && (r = this._def.defaultValue()),
      this._def.innerType._parse({ data: r, path: n.path, parent: n })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Ks.create = (e, t) =>
  new Ks({
    innerType: e,
    typeName: se.ZodDefault,
    defaultValue: typeof t.default == "function" ? t.default : () => t.default,
    ...he(t),
  });
class au extends me {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = this._def.innerType._parse({
        data: n.data,
        path: n.path,
        parent: { ...n, common: { ...n.common, issues: [] } },
      });
    return nu(r)
      ? r.then((i) => ({
          status: "valid",
          value: i.status === "valid" ? i.value : this._def.catchValue(),
        }))
      : {
          status: "valid",
          value: r.status === "valid" ? r.value : this._def.catchValue(),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
au.create = (e, t) =>
  new au({
    innerType: e,
    typeName: se.ZodCatch,
    catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
    ...he(t),
  });
class lu extends me {
  _parse(t) {
    if (this._getType(t) !== F.nan) {
      const n = this._getOrReturnCtx(t);
      return (
        Q(n, { code: V.invalid_type, expected: F.nan, received: n.parsedType }),
        ce
      );
    }
    return { status: "valid", value: t.data };
  }
}
lu.create = (e) => new lu({ typeName: se.ZodNaN, ...he(e) });
const pV = Symbol("zod_brand");
class GE extends me {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = n.data;
    return this._def.type._parse({ data: r, path: n.path, parent: n });
  }
  unwrap() {
    return this._def.type;
  }
}
class ma extends me {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const i = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        return i.status === "aborted"
          ? ce
          : i.status === "dirty"
            ? (n.dirty(), ZE(i.value))
            : this._def.out._parseAsync({
                data: i.value,
                path: r.path,
                parent: r,
              });
      })();
    {
      const i = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r,
      });
      return i.status === "aborted"
        ? ce
        : i.status === "dirty"
          ? (n.dirty(), { status: "dirty", value: i.value })
          : this._def.out._parseSync({
              data: i.value,
              path: r.path,
              parent: r,
            });
    }
  }
  static create(t, n) {
    return new ma({ in: t, out: n, typeName: se.ZodPipeline });
  }
}
const KE = (e, t = {}, n) =>
    e
      ? vo.create().superRefine((r, i) => {
          if (!e(r)) {
            const o = typeof t == "function" ? t(r) : t,
              s = typeof o == "string" ? { message: o } : o;
            i.addIssue({ code: "custom", ...s, fatal: n });
          }
        })
      : vo.create(),
  mV = { object: He.lazycreate };
var se;
(function (e) {
  ((e.ZodString = "ZodString"),
    (e.ZodNumber = "ZodNumber"),
    (e.ZodNaN = "ZodNaN"),
    (e.ZodBigInt = "ZodBigInt"),
    (e.ZodBoolean = "ZodBoolean"),
    (e.ZodDate = "ZodDate"),
    (e.ZodSymbol = "ZodSymbol"),
    (e.ZodUndefined = "ZodUndefined"),
    (e.ZodNull = "ZodNull"),
    (e.ZodAny = "ZodAny"),
    (e.ZodUnknown = "ZodUnknown"),
    (e.ZodNever = "ZodNever"),
    (e.ZodVoid = "ZodVoid"),
    (e.ZodArray = "ZodArray"),
    (e.ZodObject = "ZodObject"),
    (e.ZodUnion = "ZodUnion"),
    (e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
    (e.ZodIntersection = "ZodIntersection"),
    (e.ZodTuple = "ZodTuple"),
    (e.ZodRecord = "ZodRecord"),
    (e.ZodMap = "ZodMap"),
    (e.ZodSet = "ZodSet"),
    (e.ZodFunction = "ZodFunction"),
    (e.ZodLazy = "ZodLazy"),
    (e.ZodLiteral = "ZodLiteral"),
    (e.ZodEnum = "ZodEnum"),
    (e.ZodEffects = "ZodEffects"),
    (e.ZodNativeEnum = "ZodNativeEnum"),
    (e.ZodOptional = "ZodOptional"),
    (e.ZodNullable = "ZodNullable"),
    (e.ZodDefault = "ZodDefault"),
    (e.ZodCatch = "ZodCatch"),
    (e.ZodPromise = "ZodPromise"),
    (e.ZodBranded = "ZodBranded"),
    (e.ZodPipeline = "ZodPipeline"));
})(se || (se = {}));
const vV = (e, t = { message: `Input not instance of ${e.name}` }) =>
    KE((n) => n instanceof e, t, !0),
  Qs = qn.create,
  QE = Pr.create,
  gV = lu.create,
  yV = $s.create,
  YE = Us.create,
  _V = ci.create,
  SV = ru.create,
  EV = Fs.create,
  wV = js.create,
  TV = vo.create,
  RV = ti.create,
  xV = Zn.create,
  CV = iu.create,
  NV = _n.create,
  Lp = He.create,
  AV = He.strictCreate,
  PV = Bs.create,
  kV = ec.create,
  OV = Ws.create,
  IV = kn.create,
  bV = tc.create,
  LV = su.create,
  DV = di.create,
  MV = Xi.create,
  zV = Zs.create,
  VV = Hs.create,
  $V = kr.create,
  UV = Gs.create,
  FV = go.create,
  vy = mn.create,
  jV = Hn.create,
  BV = fi.create,
  WV = mn.createWithPreprocess,
  ZV = ma.create,
  HV = () => Qs().optional(),
  GV = () => QE().optional(),
  KV = () => YE().optional(),
  QV = {
    string: (e) => qn.create({ ...e, coerce: !0 }),
    number: (e) => Pr.create({ ...e, coerce: !0 }),
    boolean: (e) => Us.create({ ...e, coerce: !0 }),
    bigint: (e) => $s.create({ ...e, coerce: !0 }),
    date: (e) => ci.create({ ...e, coerce: !0 }),
  },
  YV = ce;
var nd = Object.freeze({
    __proto__: null,
    defaultErrorMap: Vs,
    setErrorMap: aV,
    getErrorMap: Xl,
    makeIssue: eu,
    EMPTY_PATH: lV,
    addIssueToContext: Q,
    ParseStatus: Ct,
    INVALID: ce,
    DIRTY: ZE,
    OK: wt,
    isAborted: Lf,
    isDirty: Df,
    isValid: tu,
    isAsync: nu,
    get util() {
      return Ce;
    },
    ZodParsedType: F,
    getParsedType: fr,
    ZodType: me,
    ZodString: qn,
    ZodNumber: Pr,
    ZodBigInt: $s,
    ZodBoolean: Us,
    ZodDate: ci,
    ZodSymbol: ru,
    ZodUndefined: Fs,
    ZodNull: js,
    ZodAny: vo,
    ZodUnknown: ti,
    ZodNever: Zn,
    ZodVoid: iu,
    ZodArray: _n,
    get objectUtil() {
      return ou;
    },
    ZodObject: He,
    ZodUnion: Bs,
    ZodDiscriminatedUnion: ec,
    ZodIntersection: Ws,
    ZodTuple: kn,
    ZodRecord: tc,
    ZodMap: su,
    ZodSet: di,
    ZodFunction: Xi,
    ZodLazy: Zs,
    ZodLiteral: Hs,
    ZodEnum: kr,
    ZodNativeEnum: Gs,
    ZodPromise: go,
    ZodEffects: mn,
    ZodTransformer: mn,
    ZodOptional: Hn,
    ZodNullable: fi,
    ZodDefault: Ks,
    ZodCatch: au,
    ZodNaN: lu,
    BRAND: pV,
    ZodBranded: GE,
    ZodPipeline: ma,
    custom: KE,
    Schema: me,
    ZodSchema: me,
    late: mV,
    get ZodFirstPartyTypeKind() {
      return se;
    },
    coerce: QV,
    any: TV,
    array: NV,
    bigint: yV,
    boolean: YE,
    date: _V,
    discriminatedUnion: kV,
    effect: vy,
    enum: $V,
    function: MV,
    instanceof: vV,
    intersection: OV,
    lazy: zV,
    literal: VV,
    map: LV,
    nan: gV,
    nativeEnum: UV,
    never: xV,
    null: wV,
    nullable: BV,
    number: QE,
    object: Lp,
    oboolean: KV,
    onumber: GV,
    optional: jV,
    ostring: HV,
    pipeline: ZV,
    preprocess: WV,
    promise: FV,
    record: bV,
    set: DV,
    strictObject: AV,
    string: Qs,
    symbol: SV,
    transformer: vy,
    tuple: IV,
    undefined: EV,
    union: PV,
    unknown: RV,
    void: CV,
    NEVER: YV,
    ZodIssueCode: V,
    quotelessJson: sV,
    ZodError: Wn,
  }),
  gy,
  JV =
    ((gy = Fe(function (e, t) {
      var n,
        r,
        i,
        o = arguments;
      return je(this, function (s) {
        return (
          (n = o.length > 2 && o[2] !== void 0 ? o[2] : ""),
          (r = o.length > 3 ? o[3] : void 0),
          (i = o.length > 4 ? o[4] : void 0),
          [
            2,
            new Promise(function (a, l) {
              Ip(
                "OPEN_CHAT",
                {
                  uId: e,
                  type: Cf[t],
                  msg: n,
                  zapp: VE,
                  sourceId: r,
                  sourceIndex: i,
                },
                {
                  success: function () {
                    a();
                  },
                  fail: function (u) {
                    l(u);
                  },
                },
                {},
              );
            }),
          ]
        );
      });
    })),
    function (e, t) {
      return gy.apply(this, arguments);
    }),
  qV = [
    Lp({
      id: Qs(),
      type: nd.enum(["user", "oa"]),
      sourceId: nd.any().optional(),
      sourceIndex: nd.any().optional(),
      message: Qs().optional(),
    }).optional(),
  ];
function XV(e) {
  return zf.apply(this, arguments);
}
function zf() {
  return (
    (zf = Fe(function (e) {
      return je(this, function (t) {
        return [
          2,
          Xu(
            "openChat",
            qV,
            [e],
            ((n = Fe(function (r) {
              var i, o, s, a, l;
              return je(this, function (u) {
                switch (u.label) {
                  case 0:
                    return mo.isMp
                      ? ((i = r.id),
                        (o = r.type),
                        (s = r.message),
                        (a = r.sourceId),
                        (l = r.sourceIndex),
                        [4, JV(i, o, s, a, l)])
                      : [3, 2];
                  case 1:
                    return [2, u.sent()];
                  case 2:
                    return mo.isMpWeb
                      ? [2, Promise.resolve()]
                      : [2, Promise.reject(bp("openChat", {}))];
                }
              });
            })),
            function (r) {
              return n.apply(this, arguments);
            }),
          ),
        ];
        var n;
      });
    })),
    zf.apply(this, arguments)
  );
}
var yy,
  e$ =
    ((yy = Fe(function (e) {
      return je(this, function (t) {
        return [
          2,
          new Promise(function (n, r) {
            Ip(
              "OPEN_PHONE",
              { phoneNum: e, phoneCode: e },
              {
                success: function () {
                  n();
                },
                fail: function (i) {
                  r(i);
                },
              },
              {},
            );
          }),
        ];
      });
    })),
    function (e) {
      return yy.apply(this, arguments);
    }),
  t$ = [Lp({ phoneNumber: Qs() })];
function n$(e) {
  return Vf.apply(this, arguments);
}
function Vf() {
  return (
    (Vf = Fe(function (e) {
      return je(this, function (t) {
        return [
          2,
          Xu(
            "openPhone",
            t$,
            [e],
            ((n = Fe(function (r) {
              return je(this, function (i) {
                switch (i.label) {
                  case 0:
                    return mo.isMp ? [4, e$(r.phoneNumber)] : [3, 2];
                  case 1:
                    return [2, i.sent()];
                  case 2:
                    return mo.isMpWeb
                      ? [2, Promise.resolve()]
                      : [2, Promise.reject(bp("openPhone", {}))];
                }
              });
            })),
            function (r) {
              return n.apply(this, arguments);
            }),
          ),
        ];
        var n;
      });
    })),
    Vf.apply(this, arguments)
  );
}
((window.ZaloMiniAppSDK = { getVersion: iV }), oV());
const r$ = () =>
    De(Oe, {
      className:
        "fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-gray-100 z-50 flex items-center space-x-3 shadow-[0_-10px_20px_rgba(0,0,0,0.05)]",
      children: [
        j(Qd, {
          className:
            "flex-1 h-14 rounded-2xl bg-blue-600 hover:bg-blue-700 font-bold transition-all transform active:scale-95",
          onClick: async () => {
            try {
              await XV({
                type: "user",
                id: "zalo_id_here",
                message: "Chào bạn, mình cần tư vấn về dịch vụ code thuê.",
              });
            } catch (n) {
              console.error(n);
            }
          },
          children: De(Oe, {
            className: "flex items-center justify-center",
            children: [j(KM, { size: 20, className: "mr-2" }), "Chat Zalo"],
          }),
        }),
        j(Qd, {
          variant: "secondary",
          className:
            "h-14 w-20 rounded-2xl flex items-center justify-center p-0 transform active:scale-95",
          onClick: async () => {
            try {
              await n$({ phoneNumber: "0900000000" });
            } catch (n) {
              console.error(n);
            }
          },
          children: j(YM, { size: 24, className: "text-gray-700" }),
        }),
      ],
    }),
  i$ = () =>
    De(Yx, {
      className: "relative bg-white",
      children: [
        De(Oe, {
          className: "flex flex-col pb-24",
          children: [j(tz, {}), j(rz, {}), j(oz, {}), j(az, {}), j(uz, {})],
        }),
        j(r$, {}),
      ],
    });
const o$ = DC,
  s$ = () =>
    j(NI, {
      children: j(LR, {
        children: j(o$, {
          children: j(Gx, {
            children: j(eC, {
              children: j(H_, { path: "/", element: j(i$, {}) }),
            }),
          }),
        }),
      }),
    }),
  a$ = document.getElementById("app"),
  l$ = D_(a$);
l$.render(j(s$, {}));
