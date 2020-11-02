(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["MindMap"] = factory(require("react"));
	else
		root["MindMap"] = factory(root["React"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(9);
} else {
  module.exports = __webpack_require__(10);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (t, n) {
  "object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? n(exports) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : n(t.d3 = {});
}(undefined, function (D) {
  "use strict";
  var o = { value: function value() {} };function S() {
    for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
      if (!(t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);r[t] = [];
    }return new i(r);
  }function i(t) {
    this._ = t;
  }function c(t, n, e) {
    for (var r = 0, i = t.length; r < i; ++r) {
      if (t[r].name === n) {
        t[r] = o, t = t.slice(0, r).concat(t.slice(r + 1));break;
      }
    }return null != e && t.push({ name: n, value: e }), t;
  }i.prototype = S.prototype = { constructor: i, on: function on(t, n) {
      var e,
          r,
          i = this._,
          o = (r = i, (t + "").trim().split(/^|\s+/).map(function (t) {
        var n = "",
            e = t.indexOf(".");if (0 <= e && (n = t.slice(e + 1), t = t.slice(0, e)), t && !r.hasOwnProperty(t)) throw new Error("unknown type: " + t);return { type: t, name: n };
      })),
          a = -1,
          u = o.length;if (!(arguments.length < 2)) {
        if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);for (; ++a < u;) {
          if (e = (t = o[a]).type) i[e] = c(i[e], t.name, n);else if (null == n) for (e in i) {
            i[e] = c(i[e], t.name, null);
          }
        }return this;
      }for (; ++a < u;) {
        if ((e = (t = o[a]).type) && (e = function (t, n) {
          for (var e, r = 0, i = t.length; r < i; ++r) {
            if ((e = t[r]).name === n) return e.value;
          }
        }(i[e], t.name))) return e;
      }
    }, copy: function copy() {
      var t,
          n = {},
          e = this._;for (t in e) {
        n[t] = e[t].slice();
      }return new i(n);
    }, call: function call(t, n) {
      if (0 < (e = arguments.length - 2)) for (var e, r, i = new Array(e), o = 0; o < e; ++o) {
        i[o] = arguments[o + 2];
      }if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);for (o = 0, e = (r = this._[t]).length; o < e; ++o) {
        r[o].value.apply(n, i);
      }
    }, apply: function apply(t, n, e) {
      if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);for (var r = this._[t], i = 0, o = r.length; i < o; ++i) {
        r[i].value.apply(n, e);
      }
    } };function a(t) {
    var n = t += "",
        e = n.indexOf(":");return 0 <= e && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), u.hasOwnProperty(n) ? { space: u[n], local: t } : t;
  }var r = "http://www.w3.org/1999/xhtml",
      u = { svg: "http://www.w3.org/2000/svg", xhtml: r, xlink: "http://www.w3.org/1999/xlink", xml: "http://www.w3.org/XML/1998/namespace", xmlns: "http://www.w3.org/2000/xmlns/" };function f(t) {
    return ((t = a(t)).local ? function (t) {
      return function () {
        return this.ownerDocument.createElementNS(t.space, t.local);
      };
    } : function (e) {
      return function () {
        var t = this.ownerDocument,
            n = this.namespaceURI;return n === r && t.documentElement.namespaceURI === r ? t.createElement(e) : t.createElementNS(n, e);
      };
    })(t);
  }function n() {}function d(t) {
    return null == t ? n : function () {
      return this.querySelector(t);
    };
  }function e() {
    return [];
  }function v(t) {
    return null == t ? e : function () {
      return this.querySelectorAll(t);
    };
  }var s,
      t = function t(_t2) {
    return function () {
      return this.matches(_t2);
    };
  };"undefined" != typeof document && ((ht = document.documentElement).matches || (s = ht.webkitMatchesSelector || ht.msMatchesSelector || ht.mozMatchesSelector || ht.oMatchesSelector, t = function t(_t3) {
    return function () {
      return s.call(this, _t3);
    };
  }));function h(t) {
    return new Array(t.length);
  }var l = t;function p(t, n) {
    this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
  }p.prototype = { constructor: p, appendChild: function appendChild(t) {
      return this._parent.insertBefore(t, this._next);
    }, insertBefore: function insertBefore(t, n) {
      return this._parent.insertBefore(t, n);
    }, querySelector: function querySelector(t) {
      return this._parent.querySelector(t);
    }, querySelectorAll: function querySelectorAll(t) {
      return this._parent.querySelectorAll(t);
    } };function x(t, n, e, r, i, o) {
    for (var a, u = 0, c = n.length, f = o.length; u < f; ++u) {
      (a = n[u]) ? (a.__data__ = o[u], r[u] = a) : e[u] = new p(t, o[u]);
    }for (; u < c; ++u) {
      (a = n[u]) && (i[u] = a);
    }
  }function M(t, n, e, r, i, o, a) {
    for (var u, c, f = {}, s = n.length, h = o.length, l = new Array(s), d = 0; d < s; ++d) {
      (u = n[d]) && (l[d] = c = "$" + a.call(u, u.__data__, d, n), c in f ? i[d] = u : f[c] = u);
    }for (d = 0; d < h; ++d) {
      (u = f[c = "$" + a.call(t, o[d], d, o)]) ? ((r[d] = u).__data__ = o[d], f[c] = null) : e[d] = new p(t, o[d]);
    }for (d = 0; d < s; ++d) {
      (u = n[d]) && f[l[d]] === u && (i[d] = u);
    }
  }function y(t, n) {
    return t < n ? -1 : n < t ? 1 : n <= t ? 0 : NaN;
  }var g = function g(t) {
    return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
  };function w(t, n) {
    return t.style.getPropertyValue(n) || g(t).getComputedStyle(t, null).getPropertyValue(n);
  }function b(t) {
    return t.trim().split(/^|\s+/);
  }function m(t) {
    return t.classList || new _(t);
  }function _(t) {
    this._node = t, this._names = b(t.getAttribute("class") || "");
  }function T(t, n) {
    for (var e = m(t), r = -1, i = n.length; ++r < i;) {
      e.add(n[r]);
    }
  }function N(t, n) {
    for (var e = m(t), r = -1, i = n.length; ++r < i;) {
      e.remove(n[r]);
    }
  }_.prototype = { add: function add(t) {
      this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
    }, remove: function remove(t) {
      t = this._names.indexOf(t);0 <= t && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
    }, contains: function contains(t) {
      return 0 <= this._names.indexOf(t);
    } };function k() {
    this.textContent = "";
  }function A() {
    this.innerHTML = "";
  }function C() {
    this.nextSibling && this.parentNode.appendChild(this);
  }function U() {
    this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }function z() {
    return null;
  }function E() {
    var t = this.parentNode;t && t.removeChild(this);
  }function Y() {
    return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling);
  }function F() {
    return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling);
  }var q = {};function H(e, t, n) {
    return e = P(e, t, n), function (t) {
      var n = t.relatedTarget;n && (n === this || 8 & n.compareDocumentPosition(this)) || e.call(this, t);
    };
  }function P(e, r, i) {
    return function (t) {
      var n = D.event;D.event = t;try {
        e.call(this, this.__data__, r, i);
      } finally {
        D.event = n;
      }
    };
  }function X(o) {
    return function () {
      var t = this.__on;if (t) {
        for (var n, e = 0, r = -1, i = t.length; e < i; ++e) {
          n = t[e], o.type && n.type !== o.type || n.name !== o.name ? t[++r] = n : this.removeEventListener(n.type, n.listener, n.capture);
        }++r ? t.length = r : delete this.__on;
      }
    };
  }function L(c, f, s) {
    var h = q.hasOwnProperty(c.type) ? H : P;return function (t, n, e) {
      var r,
          i = this.__on,
          o = h(f, n, e);if (i) for (var a = 0, u = i.length; a < u; ++a) {
        if ((r = i[a]).type === c.type && r.name === c.name) return this.removeEventListener(r.type, r.listener, r.capture), this.addEventListener(r.type, r.listener = o, r.capture = s), void (r.value = f);
      }this.addEventListener(c.type, o, s), r = { type: c.type, name: c.name, value: f, listener: o, capture: s }, i ? i.push(r) : this.__on = [r];
    };
  }D.event = null, "undefined" != typeof document && ("onmouseenter" in document.documentElement || (q = { mouseenter: "mouseover", mouseleave: "mouseout" }));function j(t, n, e, r) {
    var i = D.event;t.sourceEvent = D.event, D.event = t;try {
      return n.apply(e, r);
    } finally {
      D.event = i;
    }
  }function O(t, n, e) {
    var r = g(t),
        i = r.CustomEvent;"function" == typeof i ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
  }var I = [null];function V(t, n) {
    this._groups = t, this._parents = n;
  }function R() {
    return new V([[document.documentElement]], I);
  }V.prototype = R.prototype = { constructor: V, select: function select(t) {
      "function" != typeof t && (t = d(t));for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
        for (var o, a, u = n[i], c = u.length, f = r[i] = new Array(c), s = 0; s < c; ++s) {
          (o = u[s]) && (a = t.call(o, o.__data__, s, u)) && ("__data__" in o && (a.__data__ = o.__data__), f[s] = a);
        }
      }return new V(r, this._parents);
    }, selectAll: function selectAll(t) {
      "function" != typeof t && (t = v(t));for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o) {
        for (var a, u = n[o], c = u.length, f = 0; f < c; ++f) {
          (a = u[f]) && (r.push(t.call(a, a.__data__, f, u)), i.push(a));
        }
      }return new V(r, i);
    }, filter: function filter(t) {
      "function" != typeof t && (t = l(t));for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
        for (var o, a = n[i], u = a.length, c = r[i] = [], f = 0; f < u; ++f) {
          (o = a[f]) && t.call(o, o.__data__, f, a) && c.push(o);
        }
      }return new V(r, this._parents);
    }, data: function data(t, n) {
      if (!t) return p = new Array(this.size()), s = -1, this.each(function (t) {
        p[++s] = t;
      }), p;var e,
          r = n ? M : x,
          i = this._parents,
          o = this._groups;"function" != typeof t && (e = t, t = function t() {
        return e;
      });for (var a = o.length, u = new Array(a), c = new Array(a), f = new Array(a), s = 0; s < a; ++s) {
        var h = i[s],
            l = o[s],
            d = l.length,
            p = t.call(h, h && h.__data__, s, i),
            y = p.length,
            g = c[s] = new Array(y),
            v = u[s] = new Array(y);r(h, l, g, v, f[s] = new Array(d), p, n);for (var b, m, _ = 0, w = 0; _ < y; ++_) {
          if (b = g[_]) {
            for (w <= _ && (w = _ + 1); !(m = v[w]) && ++w < y;) {}b._next = m || null;
          }
        }
      }return (u = new V(u, i))._enter = c, u._exit = f, u;
    }, enter: function enter() {
      return new V(this._enter || this._groups.map(h), this._parents);
    }, exit: function exit() {
      return new V(this._exit || this._groups.map(h), this._parents);
    }, merge: function merge(t) {
      for (var n = this._groups, e = t._groups, r = n.length, t = e.length, i = Math.min(r, t), o = new Array(r), a = 0; a < i; ++a) {
        for (var u, c = n[a], f = e[a], s = c.length, h = o[a] = new Array(s), l = 0; l < s; ++l) {
          (u = c[l] || f[l]) && (h[l] = u);
        }
      }for (; a < r; ++a) {
        o[a] = n[a];
      }return new V(o, this._parents);
    }, order: function order() {
      for (var t = this._groups, n = -1, e = t.length; ++n < e;) {
        for (var r, i = t[n], o = i.length - 1, a = i[o]; 0 <= --o;) {
          (r = i[o]) && (a && a !== r.nextSibling && a.parentNode.insertBefore(r, a), a = r);
        }
      }return this;
    }, sort: function sort(e) {
      function t(t, n) {
        return t && n ? e(t.__data__, n.__data__) : !t - !n;
      }e = e || y;for (var n = this._groups, r = n.length, i = new Array(r), o = 0; o < r; ++o) {
        for (var a, u = n[o], c = u.length, f = i[o] = new Array(c), s = 0; s < c; ++s) {
          (a = u[s]) && (f[s] = a);
        }f.sort(t);
      }return new V(i, this._parents).order();
    }, call: function call() {
      var t = arguments[0];return arguments[0] = this, t.apply(null, arguments), this;
    }, nodes: function nodes() {
      var t = new Array(this.size()),
          n = -1;return this.each(function () {
        t[++n] = this;
      }), t;
    }, node: function node() {
      for (var t = this._groups, n = 0, e = t.length; n < e; ++n) {
        for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
          var a = r[i];if (a) return a;
        }
      }return null;
    }, size: function size() {
      var t = 0;return this.each(function () {
        ++t;
      }), t;
    }, empty: function empty() {
      return !this.node();
    }, each: function each(t) {
      for (var n = this._groups, e = 0, r = n.length; e < r; ++e) {
        for (var i, o = n[e], a = 0, u = o.length; a < u; ++a) {
          (i = o[a]) && t.call(i, i.__data__, a, o);
        }
      }return this;
    }, attr: function attr(t, n) {
      var e = a(t);if (arguments.length < 2) {
        t = this.node();return e.local ? t.getAttributeNS(e.space, e.local) : t.getAttribute(e);
      }return this.each((null == n ? e.local ? function (t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      } : function (t) {
        return function () {
          this.removeAttribute(t);
        };
      } : "function" == typeof n ? e.local ? function (n, e) {
        return function () {
          var t = e.apply(this, arguments);null == t ? this.removeAttributeNS(n.space, n.local) : this.setAttributeNS(n.space, n.local, t);
        };
      } : function (n, e) {
        return function () {
          var t = e.apply(this, arguments);null == t ? this.removeAttribute(n) : this.setAttribute(n, t);
        };
      } : e.local ? function (t, n) {
        return function () {
          this.setAttributeNS(t.space, t.local, n);
        };
      } : function (t, n) {
        return function () {
          this.setAttribute(t, n);
        };
      })(e, n));
    }, style: function style(t, n, e) {
      return 1 < arguments.length ? this.each((null == n ? function (t) {
        return function () {
          this.style.removeProperty(t);
        };
      } : "function" == typeof n ? function (n, e, r) {
        return function () {
          var t = e.apply(this, arguments);null == t ? this.style.removeProperty(n) : this.style.setProperty(n, t, r);
        };
      } : function (t, n, e) {
        return function () {
          this.style.setProperty(t, n, e);
        };
      })(t, n, null == e ? "" : e)) : w(this.node(), t);
    }, property: function property(t, n) {
      return 1 < arguments.length ? this.each((null == n ? function (t) {
        return function () {
          delete this[t];
        };
      } : "function" == typeof n ? function (n, e) {
        return function () {
          var t = e.apply(this, arguments);null == t ? delete this[n] : this[n] = t;
        };
      } : function (t, n) {
        return function () {
          this[t] = n;
        };
      })(t, n)) : this.node()[t];
    }, classed: function classed(t, n) {
      var e = b(t + "");if (arguments.length < 2) {
        for (var r = m(this.node()), i = -1, o = e.length; ++i < o;) {
          if (!r.contains(e[i])) return !1;
        }return !0;
      }return this.each(("function" == typeof n ? function (t, n) {
        return function () {
          (n.apply(this, arguments) ? T : N)(this, t);
        };
      } : n ? function (t) {
        return function () {
          T(this, t);
        };
      } : function (t) {
        return function () {
          N(this, t);
        };
      })(e, n));
    }, text: function text(t) {
      return arguments.length ? this.each(null == t ? k : ("function" == typeof t ? function (n) {
        return function () {
          var t = n.apply(this, arguments);this.textContent = null == t ? "" : t;
        };
      } : function (t) {
        return function () {
          this.textContent = t;
        };
      })(t)) : this.node().textContent;
    }, html: function html(t) {
      return arguments.length ? this.each(null == t ? A : ("function" == typeof t ? function (n) {
        return function () {
          var t = n.apply(this, arguments);this.innerHTML = null == t ? "" : t;
        };
      } : function (t) {
        return function () {
          this.innerHTML = t;
        };
      })(t)) : this.node().innerHTML;
    }, raise: function raise() {
      return this.each(C);
    }, lower: function lower() {
      return this.each(U);
    }, append: function append(t) {
      var n = "function" == typeof t ? t : f(t);return this.select(function () {
        return this.appendChild(n.apply(this, arguments));
      });
    }, insert: function insert(t, n) {
      var e = "function" == typeof t ? t : f(t),
          r = null == n ? z : "function" == typeof n ? n : d(n);return this.select(function () {
        return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
      });
    }, remove: function remove() {
      return this.each(E);
    }, clone: function clone(t) {
      return this.select(t ? F : Y);
    }, datum: function datum(t) {
      return arguments.length ? this.property("__data__", t) : this.node().__data__;
    }, on: function on(t, n, e) {
      var r,
          i,
          o = (t + "").trim().split(/^|\s+/).map(function (t) {
        var n = "",
            e = t.indexOf(".");return 0 <= e && (n = t.slice(e + 1), t = t.slice(0, e)), { type: t, name: n };
      }),
          a = o.length;if (!(arguments.length < 2)) {
        for (u = n ? L : X, null == e && (e = !1), r = 0; r < a; ++r) {
          this.each(u(o[r], n, e));
        }return this;
      }var u = this.node().__on;if (u) for (var c, f = 0, s = u.length; f < s; ++f) {
        for (r = 0, c = u[f]; r < a; ++r) {
          if ((i = o[r]).type === c.type && i.name === c.name) return c.value;
        }
      }
    }, dispatch: function dispatch(t, n) {
      return this.each(("function" == typeof n ? function (t, n) {
        return function () {
          return O(this, t, n.apply(this, arguments));
        };
      } : function (t, n) {
        return function () {
          return O(this, t, n);
        };
      })(t, n));
    } };function B() {
    for (var t, n = D.event; t = n.sourceEvent;) {
      n = t;
    }return n;
  }function $(t, n) {
    var e = t.ownerSVGElement || t;if (e.createSVGPoint) {
      var r = e.createSVGPoint();return r.x = n.clientX, r.y = n.clientY, [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y];
    }return r = t.getBoundingClientRect(), [n.clientX - r.left - t.clientLeft, n.clientY - r.top - t.clientTop];
  }function Z(t) {
    var n = B();return n.changedTouches && (n = n.changedTouches[0]), $(t, n);
  }function W(t, n, e) {
    arguments.length < 3 && (e = n, n = B().changedTouches);for (var r, i = 0, o = n ? n.length : 0; i < o; ++i) {
      if ((r = n[i]).identifier === e) return $(t, r);
    }return null;
  }var Q = function Q(t) {
    return "string" == typeof t ? new V([[document.querySelector(t)]], [document.documentElement]) : new V([[t]], I);
  };function J() {
    D.event.stopImmediatePropagation();
  }function G(t) {
    var n = t.document.documentElement,
        t = Q(t).on("dragstart.drag", K, !0);"onselectstart" in n ? t.on("selectstart.drag", K, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
  }var K = function K() {
    D.event.preventDefault(), D.event.stopImmediatePropagation();
  };function tt(t, n) {
    var e = t.document.documentElement,
        r = Q(t).on("dragstart.drag", null);n && (r.on("click.drag", K, !0), setTimeout(function () {
      r.on("click.drag", null);
    }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
  }function nt(t, n, e, r, i, o, a, u, c, f) {
    this.target = t, this.type = n, this.subject = e, this.identifier = r, this.active = i, this.x = o, this.y = a, this.dx = u, this.dy = c, this._ = f;
  }function et() {
    return !D.event.button;
  }function rt() {
    return this.parentNode;
  }function it(t) {
    return null == t ? { x: D.event.x, y: D.event.y } : t;
  }function ot() {
    return "ontouchstart" in this;
  }nt.prototype.on = function () {
    var t = this._.on.apply(this._, arguments);return t === this._ ? this : t;
  };var at = function at(t, n, e) {
    (t.prototype = n.prototype = e).constructor = t;
  };function ut(t, n) {
    var e,
        r = Object.create(t.prototype);for (e in n) {
      r[e] = n[e];
    }return r;
  }function ct() {}var ft = 1 / .7,
      st = "\\s*([+-]?\\d+)\\s*",
      ht = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      t = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      lt = /^#([0-9a-f]{3})$/,
      dt = /^#([0-9a-f]{6})$/,
      pt = new RegExp("^rgb\\(" + [st, st, st] + "\\)$"),
      yt = new RegExp("^rgb\\(" + [t, t, t] + "\\)$"),
      gt = new RegExp("^rgba\\(" + [st, st, st, ht] + "\\)$"),
      vt = new RegExp("^rgba\\(" + [t, t, t, ht] + "\\)$"),
      bt = new RegExp("^hsl\\(" + [ht, t, t] + "\\)$"),
      mt = new RegExp("^hsla\\(" + [ht, t, t, ht] + "\\)$"),
      _t = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };function wt(t) {
    var n;return t = (t + "").trim().toLowerCase(), (n = lt.exec(t)) ? new kt((n = parseInt(n[1], 16)) >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : (n = dt.exec(t)) ? xt(parseInt(n[1], 16)) : (n = pt.exec(t)) ? new kt(n[1], n[2], n[3], 1) : (n = yt.exec(t)) ? new kt(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = gt.exec(t)) ? Mt(n[1], n[2], n[3], n[4]) : (n = vt.exec(t)) ? Mt(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = bt.exec(t)) ? At(n[1], n[2] / 100, n[3] / 100, 1) : (n = mt.exec(t)) ? At(n[1], n[2] / 100, n[3] / 100, n[4]) : _t.hasOwnProperty(t) ? xt(_t[t]) : "transparent" === t ? new kt(NaN, NaN, NaN, 0) : null;
  }function xt(t) {
    return new kt(t >> 16 & 255, t >> 8 & 255, 255 & t, 1);
  }function Mt(t, n, e, r) {
    return r <= 0 && (t = n = e = NaN), new kt(t, n, e, r);
  }function Tt(t) {
    return t instanceof ct || (t = wt(t)), t ? new kt((t = t.rgb()).r, t.g, t.b, t.opacity) : new kt();
  }function Nt(t, n, e, r) {
    return 1 === arguments.length ? Tt(t) : new kt(t, n, e, null == r ? 1 : r);
  }function kt(t, n, e, r) {
    this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
  }function At(t, n, e, r) {
    return r <= 0 ? t = n = e = NaN : e <= 0 || 1 <= e ? t = n = NaN : n <= 0 && (t = NaN), new Ct(t, n, e, r);
  }function Ct(t, n, e, r) {
    this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
  }function Ut(t, n, e) {
    return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n);
  }at(ct, wt, { displayable: function displayable() {
      return this.rgb().displayable();
    }, toString: function toString() {
      return this.rgb() + "";
    } }), at(kt, Nt, ut(ct, { brighter: function brighter(t) {
      return t = null == t ? ft : Math.pow(ft, t), new kt(this.r * t, this.g * t, this.b * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? .7 : Math.pow(.7, t), new kt(this.r * t, this.g * t, this.b * t, this.opacity);
    }, rgb: function rgb() {
      return this;
    }, displayable: function displayable() {
      return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1;
    }, toString: function toString() {
      var t = this.opacity;return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")");
    } })), at(Ct, function (t, n, e, r) {
    return 1 === arguments.length ? function (t) {
      if (t instanceof Ct) return new Ct(t.h, t.s, t.l, t.opacity);if (t instanceof ct || (t = wt(t)), !t) return new Ct();if (t instanceof Ct) return t;var n = (t = t.rgb()).r / 255,
          e = t.g / 255,
          r = t.b / 255,
          i = Math.min(n, e, r),
          o = Math.max(n, e, r),
          a = NaN,
          u = o - i,
          c = (o + i) / 2;return u ? (a = n === o ? (e - r) / u + 6 * (e < r) : e === o ? (r - n) / u + 2 : (n - e) / u + 4, u /= c < .5 ? o + i : 2 - o - i, a *= 60) : u = 0 < c && c < 1 ? 0 : a, new Ct(a, u, c, t.opacity);
    }(t) : new Ct(t, n, e, null == r ? 1 : r);
  }, ut(ct, { brighter: function brighter(t) {
      return t = null == t ? ft : Math.pow(ft, t), new Ct(this.h, this.s, this.l * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? .7 : Math.pow(.7, t), new Ct(this.h, this.s, this.l * t, this.opacity);
    }, rgb: function rgb() {
      var t = this.h % 360 + 360 * (this.h < 0),
          n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
          e = this.l,
          n = e + (e < .5 ? e : 1 - e) * n,
          e = 2 * e - n;return new kt(Ut(240 <= t ? t - 240 : 120 + t, e, n), Ut(t, e, n), Ut(t < 120 ? 240 + t : t - 120, e, n), this.opacity);
    }, displayable: function displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    } }));var Dt = Math.PI / 180,
      St = 180 / Math.PI,
      zt = .95047,
      Et = 1,
      Yt = 1.08883,
      Ft = 4 / 29,
      qt = 6 / 29,
      Ht = 3 * qt * qt,
      Pt = qt * qt * qt;function Xt(t) {
    if (t instanceof Lt) return new Lt(t.l, t.a, t.b, t.opacity);if (t instanceof Rt) {
      var n = t.h * Dt;return new Lt(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
    }t instanceof kt || (t = Tt(t));var e = Vt(t.r),
        r = Vt(t.g),
        i = Vt(t.b),
        o = jt((.4124564 * e + .3575761 * r + .1804375 * i) / zt),
        n = jt((.2126729 * e + .7151522 * r + .072175 * i) / Et);return new Lt(116 * n - 16, 500 * (o - n), 200 * (n - jt((.0193339 * e + .119192 * r + .9503041 * i) / Yt)), t.opacity);
  }function Lt(t, n, e, r) {
    this.l = +t, this.a = +n, this.b = +e, this.opacity = +r;
  }function jt(t) {
    return Pt < t ? Math.pow(t, 1 / 3) : t / Ht + Ft;
  }function Ot(t) {
    return qt < t ? t * t * t : Ht * (t - Ft);
  }function It(t) {
    return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
  }function Vt(t) {
    return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
  }function Rt(t, n, e, r) {
    this.h = +t, this.c = +n, this.l = +e, this.opacity = +r;
  }at(Lt, function (t, n, e, r) {
    return 1 === arguments.length ? Xt(t) : new Lt(t, n, e, null == r ? 1 : r);
  }, ut(ct, { brighter: function brighter(t) {
      return new Lt(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
    }, darker: function darker(t) {
      return new Lt(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
    }, rgb: function rgb() {
      var t = (this.l + 16) / 116,
          n = isNaN(this.a) ? t : t + this.a / 500,
          e = isNaN(this.b) ? t : t - this.b / 200,
          t = Et * Ot(t);return new kt(It(3.2404542 * (n = zt * Ot(n)) - 1.5371385 * t - .4985314 * (e = Yt * Ot(e))), It(-.969266 * n + 1.8760108 * t + .041556 * e), It(.0556434 * n - .2040259 * t + 1.0572252 * e), this.opacity);
    } })), at(Rt, function (t, n, e, r) {
    return 1 === arguments.length ? function (t) {
      if (t instanceof Rt) return new Rt(t.h, t.c, t.l, t.opacity);t instanceof Lt || (t = Xt(t));var n = Math.atan2(t.b, t.a) * St;return new Rt(n < 0 ? 360 + n : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
    }(t) : new Rt(t, n, e, null == r ? 1 : r);
  }, ut(ct, { brighter: function brighter(t) {
      return new Rt(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity);
    }, darker: function darker(t) {
      return new Rt(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity);
    }, rgb: function rgb() {
      return Xt(this).rgb();
    } }));var Bt = 1.78277,
      $t = -.29227,
      Zt = -.90649,
      Wt = 1.97294,
      Qt = Wt * Zt,
      Jt = Wt * Bt,
      Gt = Bt * $t - -.14861 * Zt;function Kt(t, n, e, r) {
    return 1 === arguments.length ? function (t) {
      if (t instanceof tn) return new tn(t.h, t.s, t.l, t.opacity);t instanceof kt || (t = Tt(t));var n = t.r / 255,
          e = t.g / 255,
          r = t.b / 255,
          i = (Gt * r + Qt * n - Jt * e) / (Gt + Qt - Jt),
          r = (Wt * (e - i) - $t * (n = r - i)) / Zt,
          e = Math.sqrt(r * r + n * n) / (Wt * i * (1 - i));return new tn((n = e ? Math.atan2(r, n) * St - 120 : NaN) < 0 ? n + 360 : n, e, i, t.opacity);
    }(t) : new tn(t, n, e, null == r ? 1 : r);
  }function tn(t, n, e, r) {
    this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
  }at(tn, Kt, ut(ct, { brighter: function brighter(t) {
      return t = null == t ? ft : Math.pow(ft, t), new tn(this.h, this.s, this.l * t, this.opacity);
    }, darker: function darker(t) {
      return t = null == t ? .7 : Math.pow(.7, t), new tn(this.h, this.s, this.l * t, this.opacity);
    }, rgb: function rgb() {
      var t = isNaN(this.h) ? 0 : (this.h + 120) * Dt,
          n = +this.l,
          e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
          r = Math.cos(t),
          t = Math.sin(t);return new kt(255 * (n + e * (-.14861 * r + Bt * t)), 255 * (n + e * ($t * r + Zt * t)), 255 * (n + Wt * r * e), this.opacity);
    } }));var nn = function nn(t) {
    return function () {
      return t;
    };
  };function en(n, e) {
    return function (t) {
      return n + t * e;
    };
  }function rn(o) {
    return 1 == (o = +o) ? on : function (t, n) {
      return n - t ? (e = t, r = n, i = o, e = Math.pow(e, i), r = Math.pow(r, i) - e, i = 1 / i, function (t) {
        return Math.pow(e + t * r, i);
      }) : nn(isNaN(t) ? n : t);var e, r, i;
    };
  }function on(t, n) {
    var e = n - t;return e ? en(t, e) : nn(isNaN(t) ? n : t);
  }function an(n, e) {
    return e -= n = +n, function (t) {
      return n + e * t;
    };
  }var un = function t(n) {
    var a = rn(n);function e(n, t) {
      var e = a((n = Nt(n)).r, (t = Nt(t)).r),
          r = a(n.g, t.g),
          i = a(n.b, t.b),
          o = on(n.opacity, t.opacity);return function (t) {
        return n.r = e(t), n.g = r(t), n.b = i(t), n.opacity = o(t), n + "";
      };
    }return e.gamma = t, e;
  }(1),
      cn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      fn = new RegExp(cn.source, "g");function sn(t, n, e, r, i, o) {
    var a, u, c;return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (c = t * e + n * r) && (e -= t * c, r -= n * c), (u = Math.sqrt(e * e + r * r)) && (e /= u, r /= u, c /= u), t * r < n * e && (t = -t, n = -n, c = -c, a = -a), { translateX: i, translateY: o, rotate: Math.atan2(n, t) * yn, skewX: Math.atan(c) * yn, scaleX: a, scaleY: u };
  }var hn,
      ln,
      dn,
      pn,
      yn = 180 / Math.PI,
      gn = { translateX: 0, translateY: 0, rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };function vn(h, l, d, p) {
    function y(t) {
      return t.length ? t.pop() + " " : "";
    }return function (t, n) {
      var e,
          r,
          i,
          o,
          a,
          u,
          c,
          f = [],
          s = [];return t = h(t), n = h(n), i = t.translateX, o = t.translateY, c = n.translateX, u = n.translateY, a = f, e = s, i !== c || o !== u ? (r = a.push("translate(", null, l, null, d), e.push({ i: r - 4, x: an(i, c) }, { i: r - 2, x: an(o, u) })) : (c || u) && a.push("translate(" + c + l + u + d), e = t.rotate, i = n.rotate, r = f, o = s, e !== i ? (180 < e - i ? i += 360 : 180 < i - e && (e += 360), o.push({ i: r.push(y(r) + "rotate(", null, p) - 2, x: an(e, i) })) : i && r.push(y(r) + "rotate(" + i + p), a = t.skewX, c = n.skewX, u = f, o = s, a !== c ? o.push({ i: u.push(y(u) + "skewX(", null, p) - 2, x: an(a, c) }) : c && u.push(y(u) + "skewX(" + c + p), e = t.scaleX, r = t.scaleY, i = n.scaleX, o = n.scaleY, a = f, u = s, e !== i || r !== o ? (c = a.push(y(a) + "scale(", null, ",", null, ")"), u.push({ i: c - 4, x: an(e, i) }, { i: c - 2, x: an(r, o) })) : 1 === i && 1 === o || a.push(y(a) + "scale(" + i + "," + o + ")"), t = n = null, function (t) {
        for (var n, e = -1, r = s.length; ++e < r;) {
          f[(n = s[e]).i] = n.x(t);
        }return f.join("");
      };
    };
  }var bn = vn(function (t) {
    return "none" === t ? gn : (hn || (hn = document.createElement("DIV"), ln = document.documentElement, dn = document.defaultView), hn.style.transform = t, t = dn.getComputedStyle(ln.appendChild(hn), null).getPropertyValue("transform"), ln.removeChild(hn), t = t.slice(7, -1).split(","), sn(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
  }, "px, ", "px)", "deg)"),
      mn = vn(function (t) {
    return null == t ? gn : ((pn = pn || document.createElementNS("http://www.w3.org/2000/svg", "g")).setAttribute("transform", t), (t = pn.transform.baseVal.consolidate()) ? (t = t.matrix, sn(t.a, t.b, t.c, t.d, t.e, t.f)) : gn);
  }, ", ", ")", ")"),
      _n = Math.SQRT2;function wn(t) {
    return ((t = Math.exp(t)) + 1 / t) / 2;
  }function xn(t, n) {
    var r,
        i,
        o,
        e,
        a = t[0],
        u = t[1],
        c = t[2],
        f = n[0],
        t = n[1],
        n = n[2],
        s = f - a,
        h = t - u;return (e = (f = s * s + h * h) < 1e-12 ? (o = Math.log(n / c) / _n, function (t) {
      return [a + t * s, u + t * h, c * Math.exp(_n * t * o)];
    }) : (r = Math.sqrt(f), t = (n * n - c * c + 4 * f) / (2 * c * 2 * r), e = (n * n - c * c - 4 * f) / (2 * n * 2 * r), i = Math.log(Math.sqrt(t * t + 1) - t), o = (Math.log(Math.sqrt(e * e + 1) - e) - i) / _n, function (t) {
      var n = t * o,
          e = wn(i),
          t = c / (2 * r) * (e * (t = _n * n + i, ((t = Math.exp(2 * t)) - 1) / (t + 1)) - (t = i, ((t = Math.exp(t)) - 1 / t) / 2));return [a + t * s, u + t * h, c * e / wn(_n * n + i)];
    })).duration = 1e3 * o, e;
  }function Mn(u) {
    return function t(a) {
      function n(n, t) {
        var e = u((n = Kt(n)).h, (t = Kt(t)).h),
            r = on(n.s, t.s),
            i = on(n.l, t.l),
            o = on(n.opacity, t.opacity);return function (t) {
          return n.h = e(t), n.s = r(t), n.l = i(Math.pow(t, a)), n.opacity = o(t), n + "";
        };
      }return a = +a, n.gamma = t, n;
    }(1);
  }Mn(function (t, n) {
    var e = n - t;return e ? en(t, 180 < e || e < -180 ? e - 360 * Math.round(e / 360) : e) : nn(isNaN(t) ? n : t);
  });var Tn,
      Nn,
      ht = Mn(on),
      kn = 0,
      An = 0,
      Cn = 0,
      Un = 1e3,
      Dn = 0,
      Sn = 0,
      zn = 0,
      En = "object" == (typeof performance === "undefined" ? "undefined" : _typeof(performance)) && performance.now ? performance : Date,
      Yn = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (t) {
    setTimeout(t, 17);
  };function Fn() {
    return Sn || (Yn(qn), Sn = En.now() + zn);
  }function qn() {
    Sn = 0;
  }function Hn() {
    this._call = this._time = this._next = null;
  }function Pn(t, n, e) {
    var r = new Hn();return r.restart(t, n, e), r;
  }function Xn() {
    Sn = (Dn = En.now()) + zn, kn = An = 0;try {
      !function () {
        Fn(), ++kn;for (var t, n = Tn; n;) {
          0 <= (t = Sn - n._time) && n._call.call(null, t), n = n._next;
        }--kn;
      }();
    } finally {
      kn = 0, function () {
        var t,
            n,
            e = Tn,
            r = 1 / 0;for (; e;) {
          e = e._call ? (r > e._time && (r = e._time), (t = e)._next) : (n = e._next, e._next = null, t ? t._next = n : Tn = n);
        }Nn = t, jn(r);
      }(), Sn = 0;
    }
  }function Ln() {
    var t = En.now(),
        n = t - Dn;Un < n && (zn -= n, Dn = t);
  }function jn(t) {
    kn || (An = An && clearTimeout(An), 24 < t - Sn ? (t < 1 / 0 && (An = setTimeout(Xn, t - En.now() - zn)), Cn = Cn && clearInterval(Cn)) : (Cn || (Dn = En.now(), Cn = setInterval(Ln, Un)), kn = 1, Yn(Xn)));
  }Hn.prototype = Pn.prototype = { constructor: Hn, restart: function restart(t, n, e) {
      if ("function" != typeof t) throw new TypeError("callback is not a function");e = (null == e ? Fn() : +e) + (null == n ? 0 : +n), this._next || Nn === this || (Nn ? Nn._next = this : Tn = this, Nn = this), this._call = t, this._time = e, jn();
    }, stop: function stop() {
      this._call && (this._call = null, this._time = 1 / 0, jn());
    } };function On(n, e, t) {
    var r = new Hn();return e = null == e ? 0 : +e, r.restart(function (t) {
      r.stop(), n(t + e);
    }, e, t), r;
  }function In(t, n, e, r, i, o) {
    var a,
        u,
        c,
        f,
        s,
        h = t.__transition;if (h) {
      if (e in h) return;
    } else t.__transition = {};function l(t) {
      var n, e, r, i;if (1 !== c.state) return p();for (n in s) {
        if ((i = s[n]).name === c.name) {
          if (3 === i.state) return On(l);4 === i.state ? (i.state = 6, i.timer.stop(), i.on.call("interrupt", a, a.__data__, i.index, i.group), delete s[n]) : +n < u && (i.state = 6, i.timer.stop(), delete s[n]);
        }
      }if (On(function () {
        3 === c.state && (c.state = 4, c.timer.restart(d, c.delay, c.time), d(t));
      }), c.state = $n, c.on.call("start", a, a.__data__, c.index, c.group), c.state === $n) {
        for (c.state = 3, f = new Array(r = c.tween.length), n = 0, e = -1; n < r; ++n) {
          (i = c.tween[n].value.call(a, a.__data__, c.index, c.group)) && (f[++e] = i);
        }f.length = e + 1;
      }
    }function d(t) {
      for (var n = t < c.duration ? c.ease.call(null, t / c.duration) : (c.timer.restart(p), c.state = 5, 1), e = -1, r = f.length; ++e < r;) {
        f[e].call(null, n);
      }5 === c.state && (c.on.call("end", a, a.__data__, c.index, c.group), p());
    }function p() {
      for (var t in c.state = 6, c.timer.stop(), delete s[u], s) {
        return;
      }delete a.__transition;
    }a = t, u = e, c = { name: n, index: r, group: i, on: Vn, tween: Rn, time: o.time, delay: o.delay, duration: o.duration, ease: o.ease, timer: null, state: Bn }, ((s = a.__transition)[u] = c).timer = Pn(function (t) {
      c.state = 1, c.timer.restart(l, c.delay, c.time), c.delay <= t && l(t - c.delay);
    }, 0, c.time);
  }var Vn = S("start", "end", "interrupt"),
      Rn = [],
      Bn = 0,
      $n = 2;function Zn(t, n) {
    n = Qn(t, n);if (n.state > Bn) throw new Error("too late; already scheduled");return n;
  }function Wn(t, n) {
    n = Qn(t, n);if (n.state > $n) throw new Error("too late; already started");return n;
  }function Qn(t, n) {
    t = t.__transition;if (!t || !(t = t[n])) throw new Error("transition not found");return t;
  }function Jn(t, n) {
    var e,
        r,
        i,
        o = t.__transition,
        a = !0;if (o) {
      for (i in n = null == n ? null : n + "", o) {
        (e = o[i]).name === n ? (r = e.state > $n && e.state < 5, e.state = 6, e.timer.stop(), r && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete o[i]) : a = !1;
      }a && delete t.__transition;
    }
  }function Gn(t, n, e) {
    var r = t._id;return t.each(function () {
      var t = Wn(this, r);(t.value || (t.value = {}))[n] = e.apply(this, arguments);
    }), function (t) {
      return Qn(t, r).value[n];
    };
  }function Kn(t, n) {
    var e;return ("number" == typeof n ? an : n instanceof wt ? un : (e = wt(n)) ? (n = e, un) : function (t, r) {
      var n,
          e,
          i,
          o,
          a,
          u = cn.lastIndex = fn.lastIndex = 0,
          c = -1,
          f = [],
          s = [];for (t += "", r += ""; (n = cn.exec(t)) && (e = fn.exec(r));) {
        (i = e.index) > u && (i = r.slice(u, i), f[c] ? f[c] += i : f[++c] = i), (n = n[0]) === (e = e[0]) ? f[c] ? f[c] += e : f[++c] = e : (f[++c] = null, s.push({ i: c, x: an(n, e) })), u = fn.lastIndex;
      }return u < r.length && (i = r.slice(u), f[c] ? f[c] += i : f[++c] = i), f.length < 2 ? s[0] ? (a = s[0].x, function (t) {
        return a(t) + "";
      }) : (o = r, function () {
        return o;
      }) : (r = s.length, function (t) {
        for (var n, e = 0; e < r; ++e) {
          f[(n = s[e]).i] = n.x(t);
        }return f.join("");
      });
    })(t, n);
  }var te = R.prototype.constructor;var ne = 0;function ee(t, n, e, r) {
    this._groups = t, this._parents = n, this._name = e, this._id = r;
  }at = R.prototype;ee.prototype = { constructor: ee, select: function select(t) {
      var n = this._name,
          e = this._id;"function" != typeof t && (t = d(t));for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a) {
        for (var u, c, f = r[a], s = f.length, h = o[a] = new Array(s), l = 0; l < s; ++l) {
          (u = f[l]) && (c = t.call(u, u.__data__, l, f)) && ("__data__" in u && (c.__data__ = u.__data__), h[l] = c, In(h[l], n, e, l, h, Qn(u, e)));
        }
      }return new ee(o, this._parents, n, e);
    }, selectAll: function selectAll(t) {
      var n = this._name,
          e = this._id;"function" != typeof t && (t = v(t));for (var r = this._groups, i = r.length, o = [], a = [], u = 0; u < i; ++u) {
        for (var c, f = r[u], s = f.length, h = 0; h < s; ++h) {
          if (c = f[h]) {
            for (var l, d = t.call(c, c.__data__, h, f), p = Qn(c, e), y = 0, g = d.length; y < g; ++y) {
              (l = d[y]) && In(l, n, e, y, d, p);
            }o.push(d), a.push(c);
          }
        }
      }return new ee(o, a, n, e);
    }, filter: function filter(t) {
      "function" != typeof t && (t = l(t));for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i) {
        for (var o, a = n[i], u = a.length, c = r[i] = [], f = 0; f < u; ++f) {
          (o = a[f]) && t.call(o, o.__data__, f, a) && c.push(o);
        }
      }return new ee(r, this._parents, this._name, this._id);
    }, merge: function merge(t) {
      if (t._id !== this._id) throw new Error();for (var n = this._groups, e = t._groups, r = n.length, t = e.length, i = Math.min(r, t), o = new Array(r), a = 0; a < i; ++a) {
        for (var u, c = n[a], f = e[a], s = c.length, h = o[a] = new Array(s), l = 0; l < s; ++l) {
          (u = c[l] || f[l]) && (h[l] = u);
        }
      }for (; a < r; ++a) {
        o[a] = n[a];
      }return new ee(o, this._parents, this._name, this._id);
    }, selection: function selection() {
      return new te(this._groups, this._parents);
    }, transition: function transition() {
      for (var t = this._name, n = this._id, e = ++ne, r = this._groups, i = r.length, o = 0; o < i; ++o) {
        for (var a, u, c = r[o], f = c.length, s = 0; s < f; ++s) {
          (a = c[s]) && (u = Qn(a, n), In(a, t, e, s, c, { time: u.time + u.delay + u.duration, delay: 0, duration: u.duration, ease: u.ease }));
        }
      }return new ee(r, this._parents, t, e);
    }, call: at.call, nodes: at.nodes, node: at.node, size: at.size, empty: at.empty, each: at.each, on: function on(t, n) {
      var e,
          r,
          i,
          o,
          a,
          u,
          c = this._id;return arguments.length < 2 ? Qn(this.node(), c).on.on(t) : this.each((e = c, i = n, u = ((r = t) + "").trim().split(/^|\s+/).every(function (t) {
        var n = t.indexOf(".");return 0 <= n && (t = t.slice(0, n)), !t || "start" === t;
      }) ? Zn : Wn, function () {
        var t = u(this, e),
            n = t.on;n !== o && (a = (o = n).copy()).on(r, i), t.on = a;
      }));
    }, attr: function attr(t, n) {
      var e = a(t),
          r = "transform" === e ? mn : Kn;return this.attrTween(t, "function" == typeof n ? (e.local ? function (e, r, i) {
        var o, a, u;return function () {
          var t,
              n = i(this);if (null != n) return (t = this.getAttributeNS(e.space, e.local)) === n ? null : t === o && n === a ? u : u = r(o = t, a = n);this.removeAttributeNS(e.space, e.local);
        };
      } : function (e, r, i) {
        var o, a, u;return function () {
          var t,
              n = i(this);if (null != n) return (t = this.getAttribute(e)) === n ? null : t === o && n === a ? u : u = r(o = t, a = n);this.removeAttribute(e);
        };
      })(e, r, Gn(this, "attr." + t, n)) : null == n ? (e.local ? function (t) {
        return function () {
          this.removeAttributeNS(t.space, t.local);
        };
      } : function (t) {
        return function () {
          this.removeAttribute(t);
        };
      })(e) : (e.local ? function (n, e, r) {
        var i, o;return function () {
          var t = this.getAttributeNS(n.space, n.local);return t === r ? null : t === i ? o : o = e(i = t, r);
        };
      } : function (n, e, r) {
        var i, o;return function () {
          var t = this.getAttribute(n);return t === r ? null : t === i ? o : o = e(i = t, r);
        };
      })(e, r, n + ""));
    }, attrTween: function attrTween(t, n) {
      var e = "attr." + t;if (arguments.length < 2) return (e = this.tween(e)) && e._value;if (null == n) return this.tween(e, null);if ("function" != typeof n) throw new Error();t = a(t);return this.tween(e, (t.local ? function (r, t) {
        function n() {
          var n = this,
              e = t.apply(n, arguments);return e && function (t) {
            n.setAttributeNS(r.space, r.local, e(t));
          };
        }return n._value = t, n;
      } : function (r, t) {
        function n() {
          var n = this,
              e = t.apply(n, arguments);return e && function (t) {
            n.setAttribute(r, e(t));
          };
        }return n._value = t, n;
      })(t, n));
    }, style: function (_style) {
      function style(_x, _x2, _x3) {
        return _style.apply(this, arguments);
      }

      style.toString = function () {
        return _style.toString();
      };

      return style;
    }(function (t, n, e) {
      var r,
          i,
          o,
          a,
          u,
          c,
          f,
          s,
          h,
          l,
          d,
          p,
          y,
          g,
          v,
          b,
          m,
          _ = "transform" == (t += "") ? bn : Kn;return null == n ? this.styleTween(t, (y = t, g = _, function () {
        var t = w(this, y),
            n = (this.style.removeProperty(y), style(this, y));return t === n ? null : t === v && n === b ? m : m = g(v = t, b = n);
      })).on("end.style." + t, (p = t, function () {
        this.style.removeProperty(p);
      })) : this.styleTween(t, "function" == typeof n ? (f = _, s = Gn(this, "style." + (c = t), n), function () {
        var t = w(this, c),
            n = s(this);return null == n && (this.style.removeProperty(c), n = style(this, c)), t === n ? null : t === h && n === l ? d : d = f(h = t, l = n);
      }) : (r = t, i = _, o = n + "", function () {
        var t = w(this, r);return t === o ? null : t === a ? u : u = i(a = t, o);
      }), e);
    }), styleTween: function styleTween(t, n, e) {
      var r,
          i,
          o,
          a = "style." + (t += "");if (arguments.length < 2) return (a = this.tween(a)) && a._value;if (null == n) return this.tween(a, null);if ("function" != typeof n) throw new Error();return this.tween(a, (r = t, o = null == e ? "" : e, u._value = i = n, u));function u() {
        var n = this,
            e = i.apply(n, arguments);return e && function (t) {
          n.style.setProperty(r, e(t), o);
        };
      }
    }, text: function text(t) {
      return this.tween("text", "function" == typeof t ? (e = Gn(this, "text", t), function () {
        var t = e(this);this.textContent = null == t ? "" : t;
      }) : (n = null == t ? "" : t + "", function () {
        this.textContent = n;
      }));var n, e;
    }, remove: function remove() {
      return this.on("end.remove", (e = this._id, function () {
        var t,
            n = this.parentNode;for (t in this.__transition) {
          if (+t !== e) return;
        }n && n.removeChild(this);
      }));var e;
    }, tween: function tween(t, n) {
      var e = this._id;if (t += "", arguments.length < 2) {
        for (var r, i = Qn(this.node(), e).tween, o = 0, a = i.length; o < a; ++o) {
          if ((r = i[o]).name === t) return r.value;
        }return null;
      }return this.each((null == n ? function (i, o) {
        var a, u;return function () {
          var t = Wn(this, i),
              n = t.tween;if (n !== a) for (var e = 0, r = (u = a = n).length; e < r; ++e) {
            if (u[e].name === o) {
              (u = u.slice()).splice(e, 1);break;
            }
          }t.tween = u;
        };
      } : function (o, a, u) {
        var c, f;if ("function" != typeof u) throw new Error();return function () {
          var t = Wn(this, o),
              n = t.tween;if (n !== c) {
            f = (c = n).slice();for (var e = { name: a, value: u }, r = 0, i = f.length; r < i; ++r) {
              if (f[r].name === a) {
                f[r] = e;break;
              }
            }r === i && f.push(e);
          }t.tween = f;
        };
      })(e, t, n));
    }, delay: function delay(t) {
      var n = this._id;return arguments.length ? this.each(("function" == typeof t ? function (t, n) {
        return function () {
          Zn(this, t).delay = +n.apply(this, arguments);
        };
      } : function (t, n) {
        return n = +n, function () {
          Zn(this, t).delay = n;
        };
      })(n, t)) : Qn(this.node(), n).delay;
    }, duration: function duration(t) {
      var n = this._id;return arguments.length ? this.each(("function" == typeof t ? function (t, n) {
        return function () {
          Wn(this, t).duration = +n.apply(this, arguments);
        };
      } : function (t, n) {
        return n = +n, function () {
          c(this, t).duration = n;
        };
      })(n, t)) : Qn(this.node(), n).duration;
    }, ease: function ease(t) {
      var n = this._id;return arguments.length ? this.each(function (t, n) {
        if ("function" != typeof n) throw new Error();return function () {
          Wn(this, t).ease = n;
        };
      }(n, t)) : Qn(this.node(), n).ease;
    } };var re = { time: null, delay: 0, duration: 250, ease: function ease(t) {
      return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
    } };R.prototype.interrupt = function (t) {
    return this.each(function () {
      Jn(this, t);
    });
  }, R.prototype.transition = function (t) {
    var n, e;t = t instanceof ee ? (n = t._id, t._name) : (n = ++ne, (e = re).time = Fn(), null == t ? null : t + "");for (var r = this._groups, i = r.length, o = 0; o < i; ++o) {
      for (var a, u = r[o], c = u.length, f = 0; f < c; ++f) {
        (a = u[f]) && In(a, t, n, f, u, e || function (t, n) {
          for (var e; !(e = t.__transition) || !(e = e[n]);) {
            if (!(t = t.parentNode)) return re.time = Fn(), re;
          }return e;
        }(a, n));
      }
    }return new ee(r, this._parents, t, n);
  };["e", "w"].map(ie), ["n", "s"].map(ie), ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(ie);function ie(t) {
    return { type: t };
  }var oe = "$";function ae() {}function ue(t, n) {
    var e = new ae();if (t instanceof ae) t.each(function (t, n) {
      e.set(n, t);
    });else if (Array.isArray(t)) {
      var r,
          i = -1,
          o = t.length;if (null == n) for (; ++i < o;) {
        e.set(i, t[i]);
      } else for (; ++i < o;) {
        e.set(n(r = t[i], i, t), r);
      }
    } else if (t) for (var a in t) {
      e.set(a, t[a]);
    }return e;
  }ae.prototype = ue.prototype = { constructor: ae, has: function has(t) {
      return oe + t in this;
    }, get: function get(t) {
      return this[oe + t];
    }, set: function set(t, n) {
      return this[oe + t] = n, this;
    }, remove: function remove(t) {
      t = oe + t;return t in this && delete this[t];
    }, clear: function clear() {
      for (var t in this) {
        t[0] === oe && delete this[t];
      }
    }, keys: function keys() {
      var t,
          n = [];for (t in this) {
        t[0] === oe && n.push(t.slice(1));
      }return n;
    }, values: function values() {
      var t,
          n = [];for (t in this) {
        t[0] === oe && n.push(this[t]);
      }return n;
    }, entries: function entries() {
      var t,
          n = [];for (t in this) {
        t[0] === oe && n.push({ key: t.slice(1), value: this[t] });
      }return n;
    }, size: function size() {
      var t,
          n = 0;for (t in this) {
        t[0] === oe && ++n;
      }return n;
    }, empty: function empty() {
      for (var t in this) {
        if (t[0] === oe) return !1;
      }return !0;
    }, each: function each(t) {
      for (var n in this) {
        n[0] === oe && t(this[n], n.slice(1), this);
      }
    } };var ce = {},
      fe = {};function se(t) {
    return new Function("d", "return {" + t.map(function (t, n) {
      return JSON.stringify(t) + ": d[" + n + "]";
    }).join(",") + "}");
  }function he(t) {
    return function () {
      return t;
    };
  }function le() {
    return 1e-6 * (Math.random() - .5);
  }at = function at(o) {
    var n = new RegExp('["' + o + "\n\r]"),
        h = o.charCodeAt(0);function e(r, t) {
      var n,
          e = [],
          i = r.length,
          o = 0,
          a = 0,
          u = i <= 0,
          c = !1;function f() {
        if (u) return fe;if (c) return c = !1, ce;var t,
            n,
            e = o;if (34 === r.charCodeAt(e)) {
          for (; o++ < i && 34 !== r.charCodeAt(o) || 34 === r.charCodeAt(++o);) {}return (t = o) >= i ? u = !0 : 10 === (n = r.charCodeAt(o++)) ? c = !0 : 13 === n && (c = !0, 10 === r.charCodeAt(o) && ++o), r.slice(e + 1, t - 1).replace(/""/g, '"');
        }for (; o < i;) {
          if (10 === (n = r.charCodeAt(t = o++))) c = !0;else if (13 === n) c = !0, 10 === r.charCodeAt(o) && ++o;else if (n !== h) continue;return r.slice(e, t);
        }return u = !0, r.slice(e, i);
      }for (10 === r.charCodeAt(i - 1) && --i, 13 === r.charCodeAt(i - 1) && --i; (n = f()) !== fe;) {
        for (var s = []; n !== ce && n !== fe;) {
          s.push(n), n = f();
        }t && null == (s = t(s, a++)) || e.push(s);
      }return e;
    }function r(t) {
      return t.map(a).join(o);
    }function a(t) {
      return null == t ? "" : n.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t;
    }return { parse: function parse(t, o) {
        var a, u;return (t = e(t, function (t, n) {
          return a ? a(t, n - 1) : (u = t, void (a = o ? (r = o, i = se(e = t), function (t, n) {
            return r(i(t), n, e);
          }) : se(t)));var e, r, i;
        })).columns = u || [], t;
      }, parseRows: e, format: function format(t, e) {
        var n, r, i;return null == e && (n = t, r = Object.create(null), i = [], n.forEach(function (t) {
          for (var n in t) {
            n in r || i.push(r[n] = n);
          }
        }), e = i), [e.map(a).join(o)].concat(t.map(function (n) {
          return e.map(function (t) {
            return a(n[t]);
          }).join(o);
        })).join("\n");
      }, formatRows: function formatRows(t) {
        return t.map(r).join("\n");
      } };
  }, at(","), at("\t");function de(t, n, e, r) {
    if (isNaN(n) || isNaN(e)) return t;var i,
        o,
        a,
        u,
        c,
        f,
        s,
        h,
        l,
        d = t._root,
        p = { data: r },
        y = t._x0,
        g = t._y0,
        v = t._x1,
        b = t._y1;if (!d) return t._root = p, t;for (; d.length;) {
      if ((f = n >= (o = (y + v) / 2)) ? y = o : v = o, (s = e >= (a = (g + b) / 2)) ? g = a : b = a, !(d = (i = d)[h = s << 1 | f])) return i[h] = p, t;
    }if (u = +t._x.call(null, d.data), c = +t._y.call(null, d.data), n === u && e === c) return p.next = d, i ? i[h] = p : t._root = p, t;for (; i = i ? i[h] = new Array(4) : t._root = new Array(4), (f = n >= (o = (y + v) / 2)) ? y = o : v = o, (s = e >= (a = (g + b) / 2)) ? g = a : b = a, (h = s << 1 | f) == (l = (a <= c) << 1 | o <= u);) {}return i[l] = d, i[h] = p, t;
  }function pe(t, n, e, r, i) {
    this.node = t, this.x0 = n, this.y0 = e, this.x1 = r, this.y1 = i;
  }function ye(t) {
    return t[0];
  }function ge(t) {
    return t[1];
  }function ve(t, n, e) {
    e = new be(null == n ? ye : n, null == e ? ge : e, NaN, NaN, NaN, NaN);return null == t ? e : e.addAll(t);
  }function be(t, n, e, r, i, o) {
    this._x = t, this._y = n, this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this._root = void 0;
  }function me(t) {
    for (var n = { data: t.data }, e = n; t = t.next;) {
      e = e.next = { data: t.data };
    }return n;
  }at = ve.prototype = be.prototype;function _e(t) {
    return t.x + t.vx;
  }function we(t) {
    return t.y + t.vy;
  }at.copy = function () {
    var t,
        n,
        e = new be(this._x, this._y, this._x0, this._y0, this._x1, this._y1),
        r = this._root;if (!r) return e;if (!r.length) return e._root = me(r), e;for (t = [{ source: r, target: e._root = new Array(4) }]; r = t.pop();) {
      for (var i = 0; i < 4; ++i) {
        (n = r.source[i]) && (n.length ? t.push({ source: n, target: r.target[i] = new Array(4) }) : r.target[i] = me(n));
      }
    }return e;
  }, at.add = function (t) {
    var n = +this._x.call(null, t),
        e = +this._y.call(null, t);return de(this.cover(n, e), n, e, t);
  }, at.addAll = function (t) {
    for (var n, e, r, i = t.length, o = new Array(i), a = new Array(i), u = 1 / 0, c = 1 / 0, f = -1 / 0, s = -1 / 0, h = 0; h < i; ++h) {
      isNaN(e = +this._x.call(null, n = t[h])) || isNaN(r = +this._y.call(null, n)) || ((o[h] = e) < u && (u = e), f < e && (f = e), (a[h] = r) < c && (c = r), s < r && (s = r));
    }for (f < u && (u = this._x0, f = this._x1), s < c && (c = this._y0, s = this._y1), this.cover(u, c).cover(f, s), h = 0; h < i; ++h) {
      de(this, o[h], a[h], t[h]);
    }return this;
  }, at.cover = function (t, n) {
    if (isNaN(t = +t) || isNaN(n = +n)) return this;var e = this._x0,
        r = this._y0,
        i = this._x1,
        o = this._y1;if (isNaN(e)) i = (e = Math.floor(t)) + 1, o = (r = Math.floor(n)) + 1;else {
      if (!(t < e || i < t || n < r || o < n)) return this;var a,
          u,
          c = i - e,
          f = this._root;switch (u = (n < (r + o) / 2) << 1 | t < (e + i) / 2) {case 0:
          for (; a = new Array(4), a[u] = f, f = a, c *= 2, i = e + c, o = r + c, i < t || o < n;) {}break;case 1:
          for (; a = new Array(4), a[u] = f, f = a, c *= 2, e = i - c, o = r + c, t < e || o < n;) {}break;case 2:
          for (; a = new Array(4), a[u] = f, f = a, c *= 2, i = e + c, r = o - c, i < t || n < r;) {}break;case 3:
          for (; a = new Array(4), a[u] = f, f = a, c *= 2, e = i - c, r = o - c, t < e || n < r;) {}}this._root && this._root.length && (this._root = f);
    }return this._x0 = e, this._y0 = r, this._x1 = i, this._y1 = o, this;
  }, at.data = function () {
    var n = [];return this.visit(function (t) {
      if (!t.length) for (; n.push(t.data), t = t.next;) {}
    }), n;
  }, at.extent = function (t) {
    return arguments.length ? this.cover(+t[0][0], +t[0][1]).cover(+t[1][0], +t[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
  }, at.find = function (t, n, e) {
    var r,
        i,
        o,
        a,
        u,
        c,
        f,
        s,
        h = this._x0,
        l = this._y0,
        d = this._x1,
        p = this._y1,
        y = [],
        g = this._root;for (g && y.push(new pe(g, h, l, d, p)), null == e ? e = 1 / 0 : (h = t - e, l = n - e, d = t + e, p = n + e, e *= e); f = y.pop();) {
      !(g = f.node) || (r = f.x0) > d || (i = f.y0) > p || (o = f.x1) < h || (a = f.y1) < l || (g.length ? (u = (r + o) / 2, c = (i + a) / 2, y.push(new pe(g[3], u, c, o, a), new pe(g[2], r, c, u, a), new pe(g[1], u, i, o, c), new pe(g[0], r, i, u, c)), (u = (c <= n) << 1 | u <= t) && (f = y[y.length - 1], y[y.length - 1] = y[y.length - 1 - u], y[y.length - 1 - u] = f)) : (f = (f = t - +this._x.call(null, g.data)) * f + (f = n - +this._y.call(null, g.data)) * f) < e && (h = t - (f = Math.sqrt(e = f)), l = n - f, d = t + f, p = n + f, s = g.data));
    }return s;
  }, at.remove = function (t) {
    if (isNaN(o = +this._x.call(null, t)) || isNaN(a = +this._y.call(null, t))) return this;var n,
        e,
        r,
        i,
        o,
        a,
        u,
        c,
        f,
        s,
        h,
        l = this._root,
        d = this._x0,
        p = this._y0,
        y = this._x1,
        g = this._y1;if (!l) return this;if (l.length) for (;;) {
      if ((c = o >= (f = (d + y) / 2)) ? d = f : y = f, (f = a >= (u = (p + g) / 2)) ? p = u : g = u, !(l = (n = l)[s = f << 1 | c])) return this;if (!l.length) break;(n[s + 1 & 3] || n[s + 2 & 3] || n[s + 3 & 3]) && (e = n, h = s);
    }for (; l.data !== t;) {
      if (!(l = (r = l).next)) return this;
    }return (i = l.next) && delete l.next, r ? i ? r.next = i : delete r.next : n ? (i ? n[s] = i : delete n[s], (l = n[0] || n[1] || n[2] || n[3]) && l === (n[3] || n[2] || n[1] || n[0]) && !l.length && (e ? e[h] = l : this._root = l)) : this._root = i, this;
  }, at.removeAll = function (t) {
    for (var n = 0, e = t.length; n < e; ++n) {
      this.remove(t[n]);
    }return this;
  }, at.root = function () {
    return this._root;
  }, at.size = function () {
    var n = 0;return this.visit(function (t) {
      if (!t.length) for (; ++n, t = t.next;) {}
    }), n;
  }, at.visit = function (t) {
    var n,
        e,
        r,
        i,
        o,
        a,
        u,
        c = [],
        f = this._root;for (f && c.push(new pe(f, this._x0, this._y0, this._x1, this._y1)); n = c.pop();) {
      !t(f = n.node, e = n.x0, r = n.y0, i = n.x1, o = n.y1) && f.length && (a = (e + i) / 2, u = (r + o) / 2, (n = f[3]) && c.push(new pe(n, a, u, i, o)), (n = f[2]) && c.push(new pe(n, e, u, a, o)), (n = f[1]) && c.push(new pe(n, a, r, i, u)), (n = f[0]) && c.push(new pe(n, e, r, a, u)));
    }return this;
  }, at.visitAfter = function (t) {
    var n,
        e = [],
        r = [];for (this._root && e.push(new pe(this._root, this._x0, this._y0, this._x1, this._y1)); n = e.pop();) {
      var i,
          o,
          a,
          u,
          c,
          f,
          s,
          h = n.node;h.length && (o = n.x0, a = n.y0, f = (o + (u = n.x1)) / 2, s = (a + (c = n.y1)) / 2, (i = h[0]) && e.push(new pe(i, o, a, f, s)), (i = h[1]) && e.push(new pe(i, f, a, u, s)), (i = h[2]) && e.push(new pe(i, o, s, f, c)), (i = h[3]) && e.push(new pe(i, f, s, u, c))), r.push(n);
    }for (; n = r.pop();) {
      t(n.node, n.x0, n.y0, n.x1, n.y1);
    }return this;
  }, at.x = function (t) {
    return arguments.length ? (this._x = t, this) : this._x;
  }, at.y = function (t) {
    return arguments.length ? (this._y = t, this) : this._y;
  };function xe(t) {
    return t.index;
  }function Me(t, n) {
    t = t.get(n);if (!t) throw new Error("missing: " + n);return t;
  }function Te(t) {
    return t.x;
  }function Ne(t) {
    return t.y;
  }var ke = Math.PI * (3 - Math.sqrt(5));at = function at() {
    return new Ae();
  };function Ae() {
    this.reset();
  }Ae.prototype = { constructor: Ae, reset: function reset() {
      this.s = this.t = 0;
    }, add: function add(t) {
      Ue(Ce, t, this.t), Ue(this, Ce.s, this.s), this.s ? this.t += Ce.t : this.s = Ce.t;
    }, valueOf: function valueOf() {
      return this.s;
    } };var Ce = new Ae();function Ue(t, n, e) {
    var r = t.s = n + e,
        i = r - n,
        r = r - i;t.t = n - r + (e - i);
  }var De = Math.PI,
      Se = De / 2,
      ze = Math.atan,
      Ee = Math.atan2,
      Ye = Math.cos,
      Fe = Math.sin,
      qe = Math.sqrt;function He(t) {
    return 1 < t ? Se : t < -1 ? -Se : Math.asin(t);
  }at(), at(), at(), at(), at(), at(), at(), at();function Pe(i) {
    return function (t, n) {
      var e = Ye(t),
          r = Ye(n),
          e = i(e * r);return [e * r * Fe(t), e * Fe(n)];
    };
  }function Xe(o) {
    return function (t, n) {
      var e = qe(t * t + n * n),
          r = o(e),
          i = Fe(r),
          r = Ye(r);return [Ee(t * i, e * r), He(e && n * i / e)];
    };
  }Pe(function (t) {
    return qe(2 / (1 + t));
  }).invert = Xe(function (t) {
    return 2 * He(t / 2);
  }), Pe(function (t) {
    return (t = 1 < (n = t) ? 0 : n < -1 ? De : Math.acos(n)) && t / Fe(t);var n;
  }).invert = Xe(function (t) {
    return t;
  }), Xe(ze), Xe(He), Xe(function (t) {
    return 2 * ze(t);
  });var Le = new Date(),
      je = new Date();function Oe(o, a, e, r) {
    function u(t) {
      return o(t = new Date(+t)), t;
    }return (u.floor = u).ceil = function (t) {
      return o(t = new Date(t - 1)), a(t, 1), o(t), t;
    }, u.round = function (t) {
      var n = u(t),
          e = u.ceil(t);return t - n < e - t ? n : e;
    }, u.offset = function (t, n) {
      return a(t = new Date(+t), null == n ? 1 : Math.floor(n)), t;
    }, u.range = function (t, n, e) {
      var r,
          i = [];if (t = u.ceil(t), e = null == e ? 1 : Math.floor(e), !(t < n && 0 < e)) return i;for (; i.push(r = new Date(+t)), a(t, e), o(t), r < t && t < n;) {}return i;
    }, u.filter = function (e) {
      return Oe(function (t) {
        if (t <= t) for (; o(t), !e(t);) {
          t.setTime(t - 1);
        }
      }, function (t, n) {
        if (t <= t) if (n < 0) for (; ++n <= 0;) {
          for (; a(t, -1), !e(t);) {}
        } else for (; 0 <= --n;) {
          for (; a(t, 1), !e(t);) {}
        }
      });
    }, e && (u.count = function (t, n) {
      return Ft.setTime(+t), qt.setTime(+n), o(Ft), o(qt), Math.floor(e(Le, je));
    }, u.every = function (n) {
      return n = Math.floor(n), isFinite(n) && 0 < n ? 1 < n ? u.filter(r ? function (t) {
        return r(t) % n == 0;
      } : function (t) {
        return u.count(0, t) % n == 0;
      }) : u : null;
    }), u;
  }var Ie = Oe(function () {}, function (t, n) {
    t.setTime(+t + n);
  }, function (t, n) {
    return n - t;
  });Ie.every = function (e) {
    return e = Math.floor(e), isFinite(e) && 0 < e ? 1 < e ? Oe(function (t) {
      t.setTime(Math.floor(t / e) * e);
    }, function (t, n) {
      t.setTime(+t + n * e);
    }, function (t, n) {
      return (n - t) / e;
    }) : Ie : null;
  };var Ve = 6e4,
      Re = 36e5,
      Be = (Oe(function (t) {
    t.setTime(1e3 * Math.floor(t / 1e3));
  }, function (t, n) {
    t.setTime(+t + 1e3 * n);
  }, function (t, n) {
    return (n - t) / 1e3;
  }, function (t) {
    return t.getUTCSeconds();
  }), Oe(function (t) {
    t.setTime(Math.floor(t / Ve) * Ve);
  }, function (t, n) {
    t.setTime(+t + n * Ve);
  }, function (t, n) {
    return (n - t) / Ve;
  }, function (t) {
    return t.getMinutes();
  }), Oe(function (t) {
    var n = t.getTimezoneOffset() * Ve % Re;n < 0 && (n += Re), t.setTime(Math.floor((+t - n) / Re) * Re + n);
  }, function (t, n) {
    t.setTime(+t + n * Re);
  }, function (t, n) {
    return (n - t) / Re;
  }, function (t) {
    return t.getHours();
  }), Oe(function (t) {
    t.setHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setDate(t.getDate() + n);
  }, function (t, n) {
    return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Ve) / 864e5;
  }, function (t) {
    return t.getDate() - 1;
  }));function $e(n) {
    return Oe(function (t) {
      t.setDate(t.getDate() - (t.getDay() + 7 - n) % 7), t.setHours(0, 0, 0, 0);
    }, function (t, n) {
      t.setDate(t.getDate() + 7 * n);
    }, function (t, n) {
      return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Ve) / 6048e5;
    });
  }var Ze = $e(0),
      We = $e(1),
      Qe = ($e(2), $e(3), $e(4)),
      Je = ($e(5), $e(6), Oe(function (t) {
    t.setDate(1), t.setHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setMonth(t.getMonth() + n);
  }, function (t, n) {
    return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear());
  }, function (t) {
    return t.getMonth();
  }), Oe(function (t) {
    t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setFullYear(t.getFullYear() + n);
  }, function (t, n) {
    return n.getFullYear() - t.getFullYear();
  }, function (t) {
    return t.getFullYear();
  }));Je.every = function (e) {
    return isFinite(e = Math.floor(e)) && 0 < e ? Oe(function (t) {
      t.setFullYear(Math.floor(t.getFullYear() / e) * e), t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
    }, function (t, n) {
      t.setFullYear(t.getFullYear() + n * e);
    }) : null;
  };Oe(function (t) {
    t.setUTCSeconds(0, 0);
  }, function (t, n) {
    t.setTime(+t + n * Ve);
  }, function (t, n) {
    return (n - t) / Ve;
  }, function (t) {
    return t.getUTCMinutes();
  }), Oe(function (t) {
    t.setUTCMinutes(0, 0, 0);
  }, function (t, n) {
    t.setTime(+t + n * Re);
  }, function (t, n) {
    return (n - t) / Re;
  }, function (t) {
    return t.getUTCHours();
  });var Ge = Oe(function (t) {
    t.setUTCHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setUTCDate(t.getUTCDate() + n);
  }, function (t, n) {
    return (n - t) / 864e5;
  }, function (t) {
    return t.getUTCDate() - 1;
  });function Ke(n) {
    return Oe(function (t) {
      t.setUTCDate(t.getUTCDate() - (t.getUTCDay() + 7 - n) % 7), t.setUTCHours(0, 0, 0, 0);
    }, function (t, n) {
      t.setUTCDate(t.getUTCDate() + 7 * n);
    }, function (t, n) {
      return (n - t) / 6048e5;
    });
  }var tr = Ke(0),
      nr = Ke(1),
      er = (Ke(2), Ke(3), Ke(4)),
      rr = (Ke(5), Ke(6), Oe(function (t) {
    t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setUTCMonth(t.getUTCMonth() + n);
  }, function (t, n) {
    return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear());
  }, function (t) {
    return t.getUTCMonth();
  }), Oe(function (t) {
    t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
  }, function (t, n) {
    t.setUTCFullYear(t.getUTCFullYear() + n);
  }, function (t, n) {
    return n.getUTCFullYear() - t.getUTCFullYear();
  }, function (t) {
    return t.getUTCFullYear();
  }));function ir(t) {
    if (0 <= t.y && t.y < 100) {
      var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);return n.setFullYear(t.y), n;
    }return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
  }function or(t) {
    if (0 <= t.y && t.y < 100) {
      var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));return n.setUTCFullYear(t.y), n;
    }return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
  }function ar(t) {
    return { y: t, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0 };
  }function ur(t) {
    var r = t.dateTime,
        i = t.date,
        o = t.time,
        n = t.periods,
        e = t.days,
        _a = t.shortDays,
        u = t.months,
        c = t.shortMonths,
        f = vr(n),
        s = br(n),
        h = vr(e),
        l = br(e),
        d = vr(_a),
        p = br(_a),
        y = vr(u),
        g = br(u),
        v = vr(c),
        _b = br(c),
        m = { a: function a(t) {
        return _a[t.getDay()];
      }, A: function A(t) {
        return e[t.getDay()];
      }, b: function b(t) {
        return c[t.getMonth()];
      }, B: function B(t) {
        return u[t.getMonth()];
      }, c: null, d: Pr, e: Pr, f: Ir, H: Xr, I: Lr, j: jr, L: Or, m: Vr, M: Rr, p: function p(t) {
        return n[+(12 <= t.getHours())];
      }, Q: mi, s: _i, S: Br, u: $r, U: Zr, V: Wr, w: Qr, W: Jr, x: null, X: null, y: Gr, Y: Kr, Z: ti, "%": bi },
        _ = { a: function a(t) {
        return _a[t.getUTCDay()];
      }, A: function A(t) {
        return e[t.getUTCDay()];
      }, b: function b(t) {
        return c[t.getUTCMonth()];
      }, B: function B(t) {
        return u[t.getUTCMonth()];
      }, c: null, d: ni, e: ni, f: ai, H: ei, I: ri, j: ii, L: oi, m: ui, M: ci, p: function p(t) {
        return n[+(12 <= t.getUTCHours())];
      }, Q: mi, s: _i, S: fi, u: si, U: hi, V: li, w: di, W: pi, x: null, X: null, y: yi, Y: gi, Z: vi, "%": bi },
        w = { a: function a(t, n, e) {
        n = d.exec(n.slice(e));return n ? (t.w = p[n[0].toLowerCase()], e + n[0].length) : -1;
      }, A: function A(t, n, e) {
        n = h.exec(n.slice(e));return n ? (t.w = l[n[0].toLowerCase()], e + n[0].length) : -1;
      }, b: function b(t, n, e) {
        n = v.exec(n.slice(e));return n ? (t.m = _b[n[0].toLowerCase()], e + n[0].length) : -1;
      }, B: function B(t, n, e) {
        n = y.exec(n.slice(e));return n ? (t.m = g[n[0].toLowerCase()], e + n[0].length) : -1;
      }, c: function c(t, n, e) {
        return T(t, r, n, e);
      }, d: Cr, e: Cr, f: Yr, H: Dr, I: Dr, j: Ur, L: Er, m: Ar, M: Sr, p: function p(t, n, e) {
        n = f.exec(n.slice(e));return n ? (t.p = s[n[0].toLowerCase()], e + n[0].length) : -1;
      }, Q: qr, s: Hr, S: zr, u: _r, U: wr, V: xr, w: mr, W: Mr, x: function x(t, n, e) {
        return T(t, i, n, e);
      }, X: function X(t, n, e) {
        return T(t, o, n, e);
      }, y: Nr, Y: Tr, Z: kr, "%": Fr };function x(c, f) {
      return function (t) {
        var n,
            e,
            r,
            i = [],
            o = -1,
            a = 0,
            u = c.length;for (t instanceof Date || (t = new Date(+t)); ++o < u;) {
          37 === c.charCodeAt(o) && (i.push(c.slice(a, o)), null != (e = hr[n = c.charAt(++o)]) ? n = c.charAt(++o) : e = "e" === n ? " " : "0", (r = f[n]) && (n = r(t, e)), i.push(n), a = o + 1);
        }return i.push(c.slice(a, o)), i.join("");
      };
    }function M(i, o) {
      return function (t) {
        var n,
            e,
            r = ar(1900);if (T(r, i, t += "", 0) != t.length) return null;if ("Q" in r) return new Date(r.Q);if ("p" in r && (r.H = r.H % 12 + 12 * r.p), "V" in r) {
          if (r.V < 1 || 53 < r.V) return null;"w" in r || (r.w = 1), "Z" in r ? (n = or(ar(r.y)), Be = n.getUTCDay(), n = 4 < e || 0 === e ? nr.ceil(n) : nr(n), n = Ge.offset(n, 7 * (r.V - 1)), r.y = n.getUTCFullYear(), r.m = n.getUTCMonth(), r.d = n.getUTCDate() + (r.w + 6) % 7) : (n = o(ar(r.y)), Be = n.getDay(), n = 4 < e || 0 === e ? We.ceil(n) : We(n), n = Be.offset(n, 7 * (r.V - 1)), r.y = n.getFullYear(), r.m = n.getMonth(), r.d = n.getDate() + (r.w + 6) % 7);
        } else ("W" in r || "U" in r) && ("w" in r || (r.w = "u" in r ? r.u % 7 : "W" in r ? 1 : 0), e = "Z" in r ? or(ar(r.y)).getUTCDay() : o(ar(r.y)).getDay(), r.m = 0, r.d = "W" in r ? (r.w + 6) % 7 + 7 * r.W - (e + 5) % 7 : r.w + 7 * r.U - (e + 6) % 7);return "Z" in r ? (r.H += r.Z / 100 | 0, r.M += r.Z % 100, or(r)) : o(r);
      };
    }function T(t, n, e, r) {
      for (var i, o, a = 0, u = n.length, c = e.length; a < u;) {
        if (c <= r) return -1;if (37 === (i = n.charCodeAt(a++))) {
          if (i = n.charAt(a++), !(o = w[i in hr ? n.charAt(a++) : i]) || (r = o(t, e, r)) < 0) return -1;
        } else if (i != e.charCodeAt(r++)) return -1;
      }return r;
    }return m.x = x(i, m), m.X = x(o, m), m.c = x(r, m), _.x = x(i, _), _.X = x(o, _), _.c = x(r, _), { format: function format(t) {
        var n = x(t += "", m);return n.toString = function () {
          return t;
        }, n;
      }, parse: function parse(t) {
        var n = M(t += "", ir);return n.toString = function () {
          return t;
        }, n;
      }, utcFormat: function utcFormat(t) {
        var n = x(t += "", _);return n.toString = function () {
          return t;
        }, n;
      }, utcParse: function utcParse(t) {
        var n = M(t, or);return n.toString = function () {
          return t;
        }, n;
      } };
  }rr.every = function (e) {
    return isFinite(e = Math.floor(e)) && 0 < e ? Oe(function (t) {
      t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e), t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
    }, function (t, n) {
      t.setUTCFullYear(t.getUTCFullYear() + n * e);
    }) : null;
  };var cr,
      fr,
      sr,
      hr = { "-": "", _: " ", 0: "0" },
      lr = /^\s*\d+/,
      dr = /^%/,
      pr = /[\\^$*+?|[\]().{}]/g;function yr(t, n, e) {
    var r = t < 0 ? "-" : "",
        i = (r ? -t : t) + "",
        t = i.length;return r + (t < e ? new Array(e - t + 1).join(n) + i : i);
  }function gr(t) {
    return t.replace(pr, "\\$&");
  }function vr(t) {
    return new RegExp("^(?:" + t.map(gr).join("|") + ")", "i");
  }function br(t) {
    for (var n = {}, e = -1, r = t.length; ++e < r;) {
      n[t[e].toLowerCase()] = e;
    }return n;
  }function mr(t, n, e) {
    n = lr.exec(n.slice(e, e + 1));return n ? (t.w = +n[0], e + n[0].length) : -1;
  }function _r(t, n, e) {
    n = lr.exec(n.slice(e, e + 1));return n ? (t.u = +n[0], e + n[0].length) : -1;
  }function wr(t, n, e) {
    n = lr.exec(n.slice(e, e + 2));return n ? (t.U = +n[0], e + n[0].length) : -1;
  }function xr(t, n, e) {
    n = lr.exec(n.slice(e, e + 2));return n ? (t.V = +n[0], e + n[0].length) : -1;
  }function Mr(t, n, e) {
    n = lr.exec(n.slice(e, e + 2));return n ? (t.W = +n[0], e + n[0].length) : -1;
  }function Tr(t, n, e) {
    n = lr.exec(n.slice(e, e + 4));return n ? (t.y = +n[0], e + n[0].length) : -1;
  }function Nr(t, n, e) {
    n = lr.exec(n.slice(e, e + 2));return n ? (t.y = +n[0] + (68 < +n[0] ? 1900 : 2e3), e + n[0].length) : -1;
  }function kr(t, n, e) {
    n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));return n ? (t.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), e + n[0].length) : -1;
  }function Ar(t, n, e) {
    n = lr.exec(n.slice(e, e + 2));return n ? (t.m = n[0] - 1, e + n[0].length) : -1;
  }function Cr(t, n, e) {
    n = lr.exec(n.slice(e, e + 2));return n ? (t.d = +n[0], e + n[0].length) : -1;
  }function Ur(t, n, e) {
    n = lr.exec(n.slice(e, e + 3));return n ? (t.m = 0, t.d = +n[0], e + n[0].length) : -1;
  }function Dr(t, n, e) {
    n = lr.exec(n.slice(e, e + 2));return n ? (t.H = +n[0], e + n[0].length) : -1;
  }function Sr(t, n, e) {
    n = lr.exec(n.slice(e, e + 2));return n ? (t.M = +n[0], e + n[0].length) : -1;
  }function zr(t, n, e) {
    n = lr.exec(n.slice(e, e + 2));return n ? (t.S = +n[0], e + n[0].length) : -1;
  }function Er(t, n, e) {
    n = lr.exec(n.slice(e, e + 3));return n ? (t.L = +n[0], e + n[0].length) : -1;
  }function Yr(t, n, e) {
    n = lr.exec(n.slice(e, e + 6));return n ? (t.L = Math.floor(n[0] / 1e3), e + n[0].length) : -1;
  }function Fr(t, n, e) {
    n = dr.exec(n.slice(e, e + 1));return n ? e + n[0].length : -1;
  }function qr(t, n, e) {
    n = lr.exec(n.slice(e));return n ? (t.Q = +n[0], e + n[0].length) : -1;
  }function Hr(t, n, e) {
    n = lr.exec(n.slice(e));return n ? (t.Q = 1e3 * +n[0], e + n[0].length) : -1;
  }function Pr(t, n) {
    return yr(t.getDate(), n, 2);
  }function Xr(t, n) {
    return yr(t.getHours(), n, 2);
  }function Lr(t, n) {
    return yr(t.getHours() % 12 || 12, n, 2);
  }function jr(t, n) {
    return yr(1 + Be.count(Je(t), t), n, 3);
  }function Or(t, n) {
    return yr(t.getMilliseconds(), n, 3);
  }function Ir(t, n) {
    return Or(t, n) + "000";
  }function Vr(t, n) {
    return yr(t.getMonth() + 1, n, 2);
  }function Rr(t, n) {
    return yr(t.getMinutes(), n, 2);
  }function Br(t, n) {
    return yr(t.getSeconds(), n, 2);
  }function $r(t) {
    t = t.getDay();return 0 === t ? 7 : t;
  }function Zr(t, n) {
    return yr(Ze.count(Je(t), t), n, 2);
  }function Wr(t, n) {
    var e = t.getDay();return t = 4 <= e || 0 === e ? Qe(t) : Qe.ceil(t), yr(Qe.count(Je(t), t) + (4 === Je(t).getDay()), n, 2);
  }function Qr(t) {
    return t.getDay();
  }function Jr(t, n) {
    return yr(We.count(Je(t), t), n, 2);
  }function Gr(t, n) {
    return yr(t.getFullYear() % 100, n, 2);
  }function Kr(t, n) {
    return yr(t.getFullYear() % 1e4, n, 4);
  }function ti(t) {
    t = t.getTimezoneOffset();return (0 < t ? "-" : (t *= -1, "+")) + yr(t / 60 | 0, "0", 2) + yr(t % 60, "0", 2);
  }function ni(t, n) {
    return yr(t.getUTCDate(), n, 2);
  }function ei(t, n) {
    return yr(t.getUTCHours(), n, 2);
  }function ri(t, n) {
    return yr(t.getUTCHours() % 12 || 12, n, 2);
  }function ii(t, n) {
    return yr(1 + Ge.count(rr(t), t), n, 3);
  }function oi(t, n) {
    return yr(t.getUTCMilliseconds(), n, 3);
  }function ai(t, n) {
    return oi(t, n) + "000";
  }function ui(t, n) {
    return yr(t.getUTCMonth() + 1, n, 2);
  }function ci(t, n) {
    return yr(t.getUTCMinutes(), n, 2);
  }function fi(t, n) {
    return yr(t.getUTCSeconds(), n, 2);
  }function si(t) {
    t = t.getUTCDay();return 0 === t ? 7 : t;
  }function hi(t, n) {
    return yr(tr.count(rr(t), t), n, 2);
  }function li(t, n) {
    var e = t.getUTCDay();return t = 4 <= e || 0 === e ? er(t) : er.ceil(t), yr(er.count(rr(t), t) + (4 === rr(t).getUTCDay()), n, 2);
  }function di(t) {
    return t.getUTCDay();
  }function pi(t, n) {
    return yr(nr.count(rr(t), t), n, 2);
  }function yi(t, n) {
    return yr(t.getUTCFullYear() % 100, n, 2);
  }function gi(t, n) {
    return yr(t.getUTCFullYear() % 1e4, n, 4);
  }function vi() {
    return "+0000";
  }function bi() {
    return "%";
  }function mi(t) {
    return +t;
  }function _i(t) {
    return Math.floor(+t / 1e3);
  }cr = ur({ dateTime: "%x, %X", date: "%-m/%-d/%Y", time: "%-I:%M:%S %p", periods: ["AM", "PM"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] }), fr = cr.utcFormat, sr = cr.utcParse;at = "%Y-%m-%dT%H:%M:%S.%LZ";Date.prototype.toISOString || fr(at);+new Date("2000-01-01T00:00:00.000Z") || sr(at);at = function at(t) {
    return t.match(/.{6}/g).map(function (t) {
      return "#" + t;
    });
  };at("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), at("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"), at("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"), at("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"), ht(Kt(300, .5, 0), Kt(-240, .5, 1));ht(Kt(-100, .75, .35), Kt(80, 1.5, .8)), ht(Kt(260, .75, .35), Kt(80, 1.5, .8)), Kt();function wi(n) {
    var e = n.length;return function (t) {
      return n[Math.max(0, Math.min(e - 1, Math.floor(t * e)))];
    };
  }wi(at("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));wi(at("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), wi(at("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), wi(at("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));function xi(t) {
    return t < 0 ? -1 : 1;
  }function Mi(t, n, e) {
    var r = t._x1 - t._x0,
        i = n - t._x1,
        n = (t._y1 - t._y0) / (r || i < 0 && -0),
        t = (e - t._y1) / (i || r < 0 && -0),
        i = (n * i + t * r) / (r + i);return (xi(n) + xi(t)) * Math.min(Math.abs(n), Math.abs(t), .5 * Math.abs(i)) || 0;
  }function Ti(t, n) {
    var e = t._x1 - t._x0;return e ? (3 * (t._y1 - t._y0) / e - n) / 2 : n;
  }function Ni(t, n, e) {
    var r = t._x0,
        i = t._y0,
        o = t._x1,
        a = t._y1,
        u = (o - r) / 3;t._context.bezierCurveTo(r + u, i + u * n, o - u, a - u * e, o, a);
  }function ki(t) {
    this._context = t;
  }ki.prototype = { areaStart: function areaStart() {
      this._line = 0;
    }, areaEnd: function areaEnd() {
      this._line = NaN;
    }, lineStart: function lineStart() {
      this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
    }, lineEnd: function lineEnd() {
      switch (this._point) {case 2:
          this._context.lineTo(this._x1, this._y1);break;case 3:
          Ni(this, this._t0, Ti(this, this._t0));}(this._line || 0 !== this._line && 1 === this._point) && this._context.closePath(), this._line = 1 - this._line;
    }, point: function point(t, n) {
      var e = NaN;if (n = +n, (t = +t) !== this._x1 || n !== this._y1) {
        switch (this._point) {case 0:
            this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);break;case 1:
            this._point = 2;break;case 2:
            this._point = 3, Ni(this, Ti(this, e = Mi(this, t, n)), e);break;default:
            Ni(this, this._t0, e = Mi(this, t, n));}this._x0 = this._x1, this._x1 = t, this._y0 = this._y1, this._y1 = n, this._t0 = e;
      }
    } }, Object.create(ki.prototype).point = function (t, n) {
    ki.prototype.point.call(this, n, t);
  };function Ai(t, n, e) {
    this.target = t, this.type = n, this.transform = e;
  }function Ci(t, n, e) {
    this.k = t, this.x = n, this.y = e;
  }Ci.prototype = { constructor: Ci, scale: function scale(t) {
      return 1 === t ? this : new Ci(this.k * t, this.x, this.y);
    }, translate: function translate(t, n) {
      return 0 === t & 0 === n ? this : new Ci(this.k, this.x + this.k * t, this.y + this.k * n);
    }, apply: function apply(t) {
      return [t[0] * this.k + this.x, t[1] * this.k + this.y];
    }, applyX: function applyX(t) {
      return t * this.k + this.x;
    }, applyY: function applyY(t) {
      return t * this.k + this.y;
    }, invert: function invert(t) {
      return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
    }, invertX: function invertX(t) {
      return (t - this.x) / this.k;
    }, invertY: function invertY(t) {
      return (t - this.y) / this.k;
    }, rescaleX: function rescaleX(t) {
      return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
    }, rescaleY: function rescaleY(t) {
      return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
    }, toString: function toString() {
      return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
    } };var Ui = new Ci(1, 0, 0);function Di() {
    D.event.stopImmediatePropagation();
  }function Si() {
    D.event.preventDefault(), D.event.stopImmediatePropagation();
  }function zi() {
    return !D.event.button;
  }function Ei() {
    var t,
        n = this,
        n = n instanceof SVGElement ? (t = (n = n.ownerSVGElement || n).width.baseVal.value, n.height.baseVal.value) : (t = n.clientWidth, n.clientHeight);return [[0, 0], [t, n]];
  }function Yi() {
    return this.__zoom || Ui;
  }function Fi() {
    return -D.event.deltaY * (D.event.deltaMode ? 120 : 1) / 500;
  }function qi() {
    return "ontouchstart" in this;
  }function Hi(t, n, e) {
    var r = t.invertX(n[0][0]) - e[0][0],
        i = t.invertX(n[1][0]) - e[1][0],
        o = t.invertY(n[0][1]) - e[0][1],
        e = t.invertY(n[1][1]) - e[1][1];return t.translate(r < i ? (r + i) / 2 : Math.min(0, r) || Math.max(0, i), o < e ? (o + e) / 2 : Math.min(0, o) || Math.max(0, e));
  }D.forceCollide = function (r) {
    var o,
        a,
        l = 1,
        d = 1;function n() {
      for (var t, n, u, c, f, s, h, e = o.length, r = 0; r < d; ++r) {
        for (n = ve(o, _e, we).visitAfter(p), t = 0; t < e; ++t) {
          u = o[t], s = a[u.index], h = s * s, c = u.x + u.vx, f = u.y + u.vy, n.visit(i);
        }
      }function i(t, n, e, r, i) {
        var o = t.data,
            a = t.r,
            t = s + a;if (!o) return c + t < n || r < c - t || f + t < e || i < f - t;o.index > u.index && (i = (r = c - o.x - o.vx) * r + (e = f - o.y - o.vy) * e) < t * t && (0 === r && (i += (r = le()) * r), 0 === e && (i += (e = le()) * e), i = (t - (i = Math.sqrt(i))) / i * l, u.vx += (r *= i) * (t = (a *= a) / (h + a)), u.vy += (e *= i) * t, o.vx -= r * (t = 1 - t), o.vy -= e * t);
      }
    }function p(t) {
      if (t.data) return t.r = a[t.data.index];for (var n = t.r = 0; n < 4; ++n) {
        t[n] && t[n].r > t.r && (t.r = t[n].r);
      }
    }function e() {
      if (o) {
        var t,
            n,
            e = o.length;for (a = new Array(e), t = 0; t < e; ++t) {
          n = o[t], a[n.index] = +r(n, t, o);
        }
      }
    }return "function" != typeof r && (r = he(null == r ? 1 : +r)), n.initialize = function (t) {
      o = t, e();
    }, n.iterations = function (t) {
      return arguments.length ? (d = +t, n) : d;
    }, n.strength = function (t) {
      return arguments.length ? (l = +t, n) : l;
    }, n.radius = function (t) {
      return arguments.length ? (r = "function" == typeof t ? t : constant(+t), e(), n) : r;
    }, n;
  }, D.forceLink = function (f) {
    var s,
        h,
        o,
        a,
        l,
        u = xe,
        e = function e(t) {
      return 1 / Math.min(a[t.source.index], a[t.target.index]);
    },
        r = he(30),
        d = 1;function n(t) {
      for (var n = 0, e = f.length; n < d; ++n) {
        for (var r, i, o, a, u, c = 0; c < e; ++c) {
          r = (u = f[c]).source, o = (i = u.target).x + i.vx - r.x - r.vx || le(), a = i.y + i.vy - r.y - r.vy || le(), o *= u = ((u = Math.sqrt(o * o + a * a)) - h[c]) / u * t * s[c], a *= u, i.vx -= o * (u = l[c]), i.vy -= a * u, r.vx += o * (u = 1 - u), r.vy += a * u;
        }
      }
    }function i() {
      if (o) {
        var t,
            n = o.length,
            e = f.length,
            r = ue(o, u),
            i = 0;for (a = new Array(n); i < e; ++i) {
          (t = f[i]).index = i, "object" != _typeof(t.source) && (t.source = Me(r, t.source)), "object" != _typeof(t.target) && (t.target = Me(r, t.target)), a[t.source.index] = (a[t.source.index] || 0) + 1, a[t.target.index] = (a[t.target.index] || 0) + 1;
        }for (i = 0, l = new Array(e); i < e; ++i) {
          t = f[i], l[i] = a[t.source.index] / (a[t.source.index] + a[t.target.index]);
        }s = new Array(e), c(), h = new Array(e), p();
      }
    }function c() {
      if (o) for (var t = 0, n = f.length; t < n; ++t) {
        s[t] = +e(f[t], t, f);
      }
    }function p() {
      if (o) for (var t = 0, n = f.length; t < n; ++t) {
        h[t] = +r(f[t], t, f);
      }
    }return null == f && (f = []), n.initialize = function (t) {
      o = t, i();
    }, n.links = function (t) {
      return arguments.length ? (f = t, i(), n) : f;
    }, n.id = function (t) {
      return arguments.length ? (u = t, n) : u;
    }, n.iterations = function (t) {
      return arguments.length ? (d = +t, n) : d;
    }, n.strength = function (t) {
      return arguments.length ? (e = "function" == typeof t ? t : constant(+t), c(), n) : e;
    }, n.distance = function (t) {
      return arguments.length ? (r = "function" == typeof t ? t : constant(+t), p(), n) : r;
    }, n;
  }, D.forceManyBody = function () {
    var i,
        c,
        f,
        s,
        r = he(-30),
        h = 1,
        l = 1 / 0,
        d = .81;function n(t) {
      var n,
          e = i.length,
          r = ve(i, Te, Ne).visitAfter(o);for (f = t, n = 0; n < e; ++n) {
        c = i[n], r.visit(a);
      }
    }function e() {
      if (i) {
        var t,
            n,
            e = i.length;for (s = new Array(e), t = 0; t < e; ++t) {
          n = i[t], s[n.index] = +r(n, t, i);
        }
      }
    }function o(t) {
      var n,
          e,
          r,
          i,
          o,
          a = 0,
          u = 0;if (t.length) {
        for (r = i = o = 0; o < 4; ++o) {
          (n = t[o]) && (e = Math.abs(n.value)) && (a += n.value, u += e, r += e * n.x, i += e * n.y);
        }t.x = r / u, t.y = i / u;
      } else for (n = t, n.x = n.data.x, n.y = n.data.y; a += s[n.data.index], n = n.next;) {}t.value = a;
    }function a(t, n, e, r) {
      if (!t.value) return !0;var i = t.x - c.x,
          o = t.y - c.y,
          a = r - n,
          u = i * i + o * o;if (a * a / d < u) return u < l && (0 === i && (u += (i = le()) * i), 0 === o && (u += (o = le()) * o), u < h && (u = Math.sqrt(h * u)), c.vx += i * t.value * f / u, c.vy += o * t.value * f / u), !0;if (!(t.length || l <= u)) for (t.data === c && !t.next || (0 === i && (u += (i = le()) * i), 0 === o && (u += (o = le()) * o), u < h && (u = Math.sqrt(h * u))); t.data !== c && (a = s[t.data.index] * f / u, c.vx += i * a, c.vy += o * a), t = t.next;) {}
    }return n.initialize = function (t) {
      i = t, e();
    }, n.strength = function (t) {
      return arguments.length ? (r = "function" == typeof t ? t : constant(+t), e(), n) : r;
    }, n.distanceMin = function (t) {
      return arguments.length ? (h = t * t, n) : Math.sqrt(h);
    }, n.distanceMax = function (t) {
      return arguments.length ? (l = t * t, n) : Math.sqrt(l);
    }, n.theta = function (t) {
      return arguments.length ? (d = t * t, n) : Math.sqrt(d);
    }, n;
  }, D.forceSimulation = function (c) {
    var e,
        r = 1,
        n = .001,
        i = 1 - Math.pow(n, 1 / 300),
        o = 0,
        a = .6,
        u = ue(),
        t = Pn(s),
        f = S("tick", "end");function s() {
      h(), f.call("tick", e), r < n && (t.stop(), f.call("end", e));
    }function h() {
      var t,
          n,
          e = c.length;for (r += (o - r) * i, u.each(function (t) {
        t(r);
      }), t = 0; t < e; ++t) {
        null == (n = c[t]).fx ? n.x += n.vx *= a : (n.x = n.fx, n.vx = 0), null == n.fy ? n.y += n.vy *= a : (n.y = n.fy, n.vy = 0);
      }
    }function l() {
      for (var t, n, e, r = 0, i = c.length; r < i; ++r) {
        (e = c[r]).index = r, (isNaN(e.x) || isNaN(e.y)) && (t = 10 * Math.sqrt(r), n = r * ke, e.x = t * Math.cos(n), e.y = t * Math.sin(n)), (isNaN(e.vx) || isNaN(e.vy)) && (e.vx = e.vy = 0);
      }
    }function d(t) {
      return t.initialize && t.initialize(c), t;
    }return null == c && (c = []), l(), e = { tick: h, restart: function restart() {
        return t.restart(s), e;
      }, stop: function stop() {
        return t.stop(), e;
      }, nodes: function nodes(t) {
        return arguments.length ? (c = t, l(), u.each(d), e) : c;
      }, alpha: function alpha(t) {
        return arguments.length ? (r = +t, e) : r;
      }, alphaMin: function alphaMin(t) {
        return arguments.length ? (n = +t, e) : n;
      }, alphaDecay: function alphaDecay(t) {
        return arguments.length ? (i = +t, e) : +i;
      }, alphaTarget: function alphaTarget(t) {
        return arguments.length ? (o = +t, e) : o;
      }, velocityDecay: function velocityDecay(t) {
        return arguments.length ? (a = 1 - t, e) : 1 - a;
      }, force: function force(t, n) {
        return 1 < arguments.length ? (null == n ? u.remove(t) : u.set(t, d(n)), e) : u.get(t);
      }, find: function find(t, n, e) {
        var r,
            i,
            o,
            a = 0,
            u = c.length;for (null == e ? e = 1 / 0 : e *= e, a = 0; a < u; ++a) {
          (r = (r = t - (i = c[a]).x) * r + (r = n - i.y) * r) < e && (o = i, e = r);
        }return o;
      }, on: function on(t, n) {
        return 1 < arguments.length ? (f.on(t, n), e) : f.on(t);
      } };
  }, D.select = Q, D.drag = function () {
    var e,
        r,
        i,
        o,
        a = et,
        u = rt,
        n = it,
        c = ot,
        p = {},
        y = S("start", "drag", "end"),
        g = 0,
        f = 0;function v(t) {
      t.on("mousedown.drag", s).filter(c).on("touchstart.drag", d).on("touchmove.drag", b).on("touchend.drag touchcancel.drag", m).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }function s() {
      var t;o || !a.apply(this, arguments) || (t = _("mouse", u.apply(this, arguments), Z, this, arguments)) && (Q(D.event.view).on("mousemove.drag", h, !0).on("mouseup.drag", l, !0), G(D.event.view), J(), i = !1, e = D.event.clientX, r = D.event.clientY, t("start"));
    }function h() {
      var t, n;K(), i || (t = D.event.clientX - e, n = D.event.clientY - r, i = f < t * t + n * n), p.mouse("drag");
    }function l() {
      Q(D.event.view).on("mousemove.drag mouseup.drag", null), tt(D.event.view, i), K(), p.mouse("end");
    }function d() {
      if (a.apply(this, arguments)) for (var t, n = D.event.changedTouches, e = u.apply(this, arguments), r = n.length, i = 0; i < r; ++i) {
        (t = _(n[i].identifier, e, W, this, arguments)) && (J(), t("start"));
      }
    }function b() {
      for (var t, n = D.event.changedTouches, e = n.length, r = 0; r < e; ++r) {
        (t = p[n[r].identifier]) && (K(), t("drag"));
      }
    }function m() {
      var t,
          n,
          e = D.event.changedTouches,
          r = e.length;for (o && clearTimeout(o), o = setTimeout(function () {
        o = null;
      }, 500), t = 0; t < r; ++t) {
        (n = p[e[t].identifier]) && (J(), n("end"));
      }
    }function _(i, o, a, u, c) {
      var f,
          s,
          h,
          l = a(o, i),
          d = y.copy();if (j(new nt(v, "beforestart", f, i, g, l[0], l[1], 0, 0, d), function () {
        return null != (D.event.subject = f = n.apply(u, c)) && (s = f.x - l[0] || 0, h = f.y - l[1] || 0, !0);
      })) return function t(n) {
        var e,
            r = l;switch (n) {case "start":
            p[i] = t, e = g++;break;case "end":
            delete p[i], --g;case "drag":
            l = a(o, i), e = g;}j(new nt(v, n, f, i, e, l[0] + s, l[1] + h, l[0] - r[0], l[1] - r[1], d), d.apply, d, [n, u, c]);
      };
    }return v.filter = function (t) {
      return arguments.length ? (a = "function" == typeof t ? t : constant(!!t), v) : a;
    }, v.container = function (t) {
      return arguments.length ? (u = "function" == typeof t ? t : constant(t), v) : u;
    }, v.subject = function (t) {
      return arguments.length ? (n = "function" == typeof t ? t : constant(t), v) : n;
    }, v.touchable = function (t) {
      return arguments.length ? (c = "function" == typeof t ? t : constant(!!t), v) : c;
    }, v.on = function () {
      var t = y.on.apply(y, arguments);return t === y ? v : t;
    }, v.clickDistance = function (t) {
      return arguments.length ? (f = (t = +t) * t, v) : Math.sqrt(f);
    }, v;
  }, D.zoom = function () {
    var l,
        o,
        u = zi,
        f = Ei,
        d = Hi,
        i = Fi,
        n = qi,
        a = [0, 1 / 0],
        p = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]],
        c = 250,
        s = xn,
        h = [],
        e = S("start", "zoom", "end"),
        y = 500,
        g = 150,
        v = 0;function b(t) {
      t.property("__zoom", Yi).on("wheel.zoom", r).on("mousedown.zoom", N).on("dblclick.zoom", k).filter(n).on("touchstart.zoom", A).on("touchmove.zoom", C).on("touchend.zoom touchcancel.zoom", U).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
    }function m(t, n) {
      return (n = Math.max(a[0], Math.min(a[1], n))) === t.k ? t : new Ci(n, t.x, t.y);
    }function _(t, n, e) {
      var r = n[0] - e[0] * t.k,
          e = n[1] - e[1] * t.k;return r === t.x && e === t.y ? t : new Ci(t.k, r, e);
    }function w(t) {
      return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2];
    }function x(t, e, c) {
      t.on("start.zoom", function () {
        M(this, arguments).start();
      }).on("interrupt.zoom end.zoom", function () {
        M(this, arguments).end();
      }).tween("zoom", function () {
        var t = arguments,
            r = M(this, t),
            n = f.apply(this, t),
            i = c || w(n),
            o = Math.max(n[1][0] - n[0][0], n[1][1] - n[0][1]),
            n = this.__zoom,
            a = "function" == typeof e ? e.apply(this, t) : e,
            u = s(n.invert(i).concat(o / n.k), a.invert(i).concat(o / a.k));return function (t) {
          var n, e;t = 1 === t ? a : (n = u(t), new Ci(e = o / n[2], i[0] - n[0] * e, i[1] - n[1] * e)), r.zoom(null, t);
        };
      });
    }function M(t, n) {
      for (var e, r = 0, i = h.length; r < i; ++r) {
        if ((e = h[r]).that === t) return e;
      }return new T(t, n);
    }function T(t, n) {
      this.that = t, this.args = n, this.index = -1, this.active = 0, this.extent = f.apply(t, n);
    }function r() {
      if (u.apply(this, arguments)) {
        var t = M(this, arguments),
            n = this.__zoom,
            e = Math.max(a[0], Math.min(a[1], n.k * Math.pow(2, i.apply(this, arguments)))),
            r = Z(this);if (t.wheel) t.mouse[0][0] === r[0] && t.mouse[0][1] === r[1] || (t.mouse[1] = n.invert(t.mouse[0] = r)), clearTimeout(t.wheel);else {
          if (n.k === e) return;t.mouse = [r, n.invert(r)], Jn(this), t.start();
        }Si(), t.wheel = setTimeout(function () {
          t.wheel = null, t.end();
        }, g), t.zoom("mouse", d(_(m(n, e), t.mouse[0], t.mouse[1]), t.extent, p));
      }
    }function N() {
      var e, t, n, r, i;!o && u.apply(this, arguments) && (e = M(this, arguments), t = Q(D.event.view).on("mousemove.zoom", function () {
        {
          var t, n;Si(), e.moved || (t = D.event.clientX - r, n = D.event.clientY - i, e.moved = v < t * t + n * n);
        }e.zoom("mouse", d(_(e.that.__zoom, e.mouse[0] = Z(e.that), e.mouse[1]), e.extent, p));
      }, !0).on("mouseup.zoom", function () {
        t.on("mousemove.zoom mouseup.zoom", null), tt(D.event.view, e.moved), Si(), e.end();
      }, !0), n = Z(this), r = D.event.clientX, i = D.event.clientY, G(D.event.view), Di(), e.mouse = [n, this.__zoom.invert(n)], Jn(this), e.start());
    }function k() {
      var t, n, e, r;u.apply(this, arguments) && (t = this.__zoom, n = Z(this), r = t.invert(n), e = t.k * (D.event.shiftKey ? .5 : 2), r = d(_(m(t, e), n, r), f.apply(this, arguments), p), Si(), 0 < c ? Q(this).transition().duration(c).call(x, r, n) : Q(this).call(b.transform, r));
    }function A() {
      if (u.apply(this, arguments)) {
        var t,
            n,
            e,
            r,
            i = M(this, arguments),
            o = D.event.changedTouches,
            a = o.length;for (Di(), n = 0; n < a; ++n) {
          e = o[n], r = [r = W(this, o, e.identifier), this.__zoom.invert(r), e.identifier], i.touch0 ? i.touch1 || (i.touch1 = r) : (i.touch0 = r, t = !0);
        }if (l && (l = clearTimeout(l), !i.touch1)) return i.end(), void ((r = Q(this).on("dblclick.zoom")) && r.apply(this, arguments));t && (l = setTimeout(function () {
          l = null;
        }, y), Jn(this), i.start());
      }
    }function C() {
      var t,
          n = M(this, arguments),
          e = D.event.changedTouches,
          r = e.length;for (Si(), l = l && clearTimeout(l), t = 0; t < r; ++t) {
        s = e[t], h = W(this, e, s.identifier), n.touch0 && n.touch0[2] === s.identifier ? n.touch0[0] = h : n.touch1 && n.touch1[2] === s.identifier && (n.touch1[0] = h);
      }if (s = n.that.__zoom, n.touch1) var i = n.touch0[0],
          o = n.touch0[1],
          a = n.touch1[0],
          u = n.touch1[1],
          c = (c = a[0] - i[0]) * c + (c = a[1] - i[1]) * c,
          f = (f = u[0] - o[0]) * f + (f = u[1] - o[1]) * f,
          s = m(s, Math.sqrt(c / f)),
          h = [(i[0] + a[0]) / 2, (i[1] + a[1]) / 2],
          u = [(o[0] + u[0]) / 2, (o[1] + u[1]) / 2];else {
        if (!n.touch0) return;h = n.touch0[0], u = n.touch0[1];
      }n.zoom("touch", d(_(s, h, u), n.extent, p));
    }function U() {
      var t,
          n,
          e = M(this, arguments),
          r = D.event.changedTouches,
          i = r.length;for (Di(), o && clearTimeout(o), o = setTimeout(function () {
        o = null;
      }, y), t = 0; t < i; ++t) {
        n = r[t], e.touch0 && e.touch0[2] === n.identifier ? delete e.touch0 : e.touch1 && e.touch1[2] === n.identifier && delete e.touch1;
      }e.touch1 && !e.touch0 && (e.touch0 = e.touch1, delete e.touch1), e.touch0 ? e.touch0[1] = this.__zoom.invert(e.touch0[0]) : e.end();
    }return b.transform = function (t, n) {
      var e = t.selection ? t.selection() : t;e.property("__zoom", Yi), t !== e ? x(t, n) : e.interrupt().each(function () {
        M(this, arguments).start().zoom(null, "function" == typeof n ? n.apply(this, arguments) : n).end();
      });
    }, b.scaleBy = function (t, n) {
      b.scaleTo(t, function () {
        return this.__zoom.k * ("function" == typeof n ? n.apply(this, arguments) : n);
      });
    }, b.scaleTo = function (t, o) {
      b.transform(t, function () {
        var t = f.apply(this, arguments),
            n = this.__zoom,
            e = w(t),
            r = n.invert(e),
            i = "function" == typeof o ? o.apply(this, arguments) : o;return d(_(m(n, i), e, r), t, p);
      });
    }, b.translateBy = function (t, n, e) {
      b.transform(t, function () {
        return d(this.__zoom.translate("function" == typeof n ? n.apply(this, arguments) : n, "function" == typeof e ? e.apply(this, arguments) : e), f.apply(this, arguments), p);
      });
    }, b.translateTo = function (t, r, i) {
      b.transform(t, function () {
        var t = f.apply(this, arguments),
            n = this.__zoom,
            e = w(t);return d(Ui.translate(e[0], e[1]).scale(n.k).translate("function" == typeof r ? -r.apply(this, arguments) : -r, "function" == typeof i ? -i.apply(this, arguments) : -i), t, p);
      });
    }, T.prototype = { start: function start() {
        return 1 == ++this.active && (this.index = h.push(this) - 1, this.emit("start")), this;
      }, zoom: function zoom(t, n) {
        return this.mouse && "mouse" !== t && (this.mouse[1] = n.invert(this.mouse[0])), this.touch0 && "touch" !== t && (this.touch0[1] = n.invert(this.touch0[0])), this.touch1 && "touch" !== t && (this.touch1[1] = n.invert(this.touch1[0])), this.that.__zoom = n, this.emit("zoom"), this;
      }, end: function end() {
        return 0 == --this.active && (h.splice(this.index, 1), this.index = -1, this.emit("end")), this;
      }, emit: function emit(t) {
        j(new Ai(b, t, this.that.__zoom), e.apply, e, [t, this.that, this.args]);
      } }, b.wheelDelta = function (t) {
      return arguments.length ? (i = "function" == typeof t ? t : constant(+t), b) : i;
    }, b.filter = function (t) {
      return arguments.length ? (u = "function" == typeof t ? t : constant(!!t), b) : u;
    }, b.touchable = function (t) {
      return arguments.length ? (n = "function" == typeof t ? t : constant(!!t), b) : n;
    }, b.extent = function (t) {
      return arguments.length ? (f = "function" == typeof t ? t : constant([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]), b) : f;
    }, b.scaleExtent = function (t) {
      return arguments.length ? (a[0] = +t[0], a[1] = +t[1], b) : [a[0], a[1]];
    }, b.translateExtent = function (t) {
      return arguments.length ? (p[0][0] = +t[0][0], p[1][0] = +t[1][0], p[0][1] = +t[0][1], p[1][1] = +t[1][1], b) : [[p[0][0], p[0][1]], [p[1][0], p[1][1]]];
    }, b.constrain = function (t) {
      return arguments.length ? (d = t, b) : d;
    }, b.duration = function (t) {
      return arguments.length ? (c = +t, b) : c;
    }, b.interpolate = function (t) {
      return arguments.length ? (s = t, b) : s;
    }, b.on = function () {
      var t = e.on.apply(e, arguments);return t === e ? b : t;
    }, b.clickDistance = function (t) {
      return arguments.length ? (v = (t = +t) * t, b) : Math.sqrt(v);
    }, b;
  }, D.zoomIdentity = Ui, Object.defineProperty(D, "__esModule", { value: !0 });
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Return the dimensions (width & height) that some HTML
 * with a given style would take in the page.
 */
var getDimensions = exports.getDimensions = function getDimensions(html, style, classname) {
  var el = document.createElement('span');
  var dimensions = {};

  // Set display: inline-block so that the size of el
  // will depend on the size of its children.
  el.style.display = 'inline-block';

  // Hide the element (it will be added to the page for a short time).
  el.style.visibility = 'hidden';

  el.className = classname;
  el.innerHTML = html;

  // Apply CSS rules.
  Object.keys(style).forEach(function (rule) {
    el.style[rule] = style[rule];
  });
  document.body.append(el);

  dimensions.width = el.offsetWidth;
  dimensions.height = el.offsetHeight;

  el.remove();
  return dimensions;
};

/*
 * Return the dimensions of an SVG viewport calculated from
 * some given nodes.
 */
var getViewBox = exports.getViewBox = function getViewBox(nodes) {
  var Xs = [];
  var Ys = [];

  nodes.forEach(function (node) {
    var x = node.x || node.fx;
    var y = node.y || node.fy;

    if (x) {
      Xs.push(x);
    }

    if (y) {
      Ys.push(y);
    }
  });

  if (Xs.length === 0 || Ys.length === 0) {
    return '0 0 0 0';
  }

  // Find the smallest coordinates...
  var min = [Math.min.apply(Math, Xs) - 150, Math.min.apply(Math, Ys) - 150];

  // ...and the biggest ones.
  var max = [Math.max.apply(Math, Xs) - min[0] + 150, Math.max.apply(Math, Ys) - min[1] + 150];

  return min.join(' ') + ' ' + max.join(' ');
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MindMap = __webpack_require__(6);

var _MindMap2 = _interopRequireDefault(_MindMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _MindMap2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(8);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _d = __webpack_require__(3);

var _d2 = __webpack_require__(15);

var _dimensions = __webpack_require__(4);

var _subnodesToHTML = __webpack_require__(16);

var _subnodesToHTML2 = _interopRequireDefault(_subnodesToHTML);

var _nodeToHTML = __webpack_require__(17);

var _nodeToHTML2 = _interopRequireDefault(_nodeToHTML);

__webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MindMap = function (_Component) {
  _inherits(MindMap, _Component);

  function MindMap(props) {
    _classCallCheck(this, MindMap);

    // Create force simulation to position nodes that have no coordinates,
    // and add it to the state.
    var _this = _possibleConstructorReturn(this, (MindMap.__proto__ || Object.getPrototypeOf(MindMap)).call(this, props));

    var simulation = (0, _d.forceSimulation)().force('link', (0, _d.forceLink)().id(function (node) {
      return node.text;
    })).force('charge', (0, _d.forceManyBody)()).force('collide', (0, _d.forceCollide)());
    // .force('collide', forceCollide().radius(100))

    _this.state = { simulation: simulation };

    _this.onClickCallback = props.onClick;
    _this.onDragEndCallback = props.onDragEnd;
    return _this;
  }

  /* eslint-disable no-param-reassign */
  /*
   * Generates HTML and dimensions for nodes and subnodes.
   */


  _createClass(MindMap, [{
    key: 'prepareNodes',
    value: function prepareNodes() {
      var render = function render(node) {
        node.html = (0, _nodeToHTML2.default)(node);
        node.nodesHTML = (0, _subnodesToHTML2.default)(node.nodes);

        // print node details
        // console.log('==> ', node.text, ' - ', 'FX: ', node.fx, ' - ', 'FY: ', node.fy);

        var dimensions = (0, _dimensions.getDimensions)(node.html, {}, 'mindmap-node');
        node.width = dimensions.width;
        node.height = dimensions.height;

        var nodesDimensions = (0, _dimensions.getDimensions)(node.nodesHTML, {}, 'mindmap-subnode-text');
        node.nodesWidth = nodesDimensions.width;
        node.nodesHeight = nodesDimensions.height;
      };

      this.props.nodes.forEach(function (node) {
        return render(node);
      });
    }

    /*
     * Add new class to nodes, attach drag behavior, and start simulation.
     */

  }, {
    key: 'prepareEditor',
    value: function prepareEditor(svg, conns, nodes, subnodes) {
      var _this2 = this;

      nodes.attr('class', 'mindmap-node mindmap-node--editable').on('dblclick', function (node) {
        node.fx = null;
        node.fy = null;
      });

      var dragEndCallback = function dragEndCallback(node) {
        if (_this2.onDragEndCallback !== undefined) {
          _this2.onDragEndCallback(node);
        }
      };

      nodes.call((0, _d2.d3Drag)(this.state.simulation, svg, nodes).on('end', dragEndCallback));

      // Tick the simulation 100 times.
      for (var i = 0; i < 100; i += 1) {
        this.state.simulation.tick();
      }
      (0, _d2.onTick)(conns, nodes, subnodes);

      setTimeout(function () {
        _this2.state.simulation.alphaTarget(0.5).on('tick', function () {
          return (0, _d2.onTick)(conns, nodes, subnodes);
        });
      }, 200);
    }
    /* eslint-enable no-param-reassign */

    /*
     * Render mind map using D3.
     */

  }, {
    key: 'renderMap',
    value: function renderMap() {
      var _this3 = this;

      var svg = (0, _d.select)(this.mountPoint);

      // Clear the SVG in case there's stuff already there.
      svg.selectAll('*').remove();

      // Add subnode group
      svg.append('g').attr('id', 'mindmap-subnodes');
      this.prepareNodes();

      // Bind data to SVG elements and set all the properties to render them.
      var connections = (0, _d2.d3Connections)(svg, this.props.connections);

      var _d3Nodes = (0, _d2.d3Nodes)(svg, this.props.nodes),
          nodes = _d3Nodes.nodes,
          subnodes = _d3Nodes.subnodes;

      nodes.append('title').text(function (node) {
        return node.note;
      });

      // Bind nodes and connections to the simulation.
      this.state.simulation.nodes(this.props.nodes).force('link').links(this.props.connections);

      if (this.props.editable) {
        this.prepareEditor(svg, connections, nodes, subnodes);
      }

      // Tick the simulation 100 times.
      for (var i = 0; i < 100; i += 1) {
        this.state.simulation.tick();
      }
      (0, _d2.onTick)(connections, nodes, subnodes);

      // Add pan and zoom behavior and remove double click to zoom.
      svg.attr('viewBox', (0, _dimensions.getViewBox)(nodes.data())).call((0, _d2.d3PanZoom)(svg)).on('dblclick.zoom', null);

      // Add click callback funcion
      var clickCallback = function clickCallback(node) {
        if (_this3.onClickCallback !== undefined) {
          _this3.onClickCallback(node);
        }
      };

      svg.selectAll('foreignObject').on('click', clickCallback);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderMap();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      (0, _d.zoom)().transform((0, _d.select)(this.refs.mountPoint), _d.zoomIdentity);
      this.renderMap();
    }

    // eslint-disable-next-line class-methods-use-this

  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('svg', { className: 'mindmap-svg', ref: function ref(input) {
            _this4.mountPoint = input;
          } })
      );
    }
  }]);

  return MindMap;
}(_react.Component);

exports.default = MindMap;


MindMap.defaultProps = {
  nodes: [],
  connections: [],
  editable: false,
  onClick: _propTypes2.default.func,
  onDragEnd: _propTypes2.default.func
};

MindMap.propTypes = {
  nodes: _propTypes2.default.array,
  connections: _propTypes2.default.array,
  editable: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  onDragEnd: _propTypes2.default.func
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = __webpack_require__(2);

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(11)(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(14)();
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var b = "function" === typeof Symbol && Symbol.for,
    c = b ? Symbol.for("react.element") : 60103,
    d = b ? Symbol.for("react.portal") : 60106,
    e = b ? Symbol.for("react.fragment") : 60107,
    f = b ? Symbol.for("react.strict_mode") : 60108,
    g = b ? Symbol.for("react.profiler") : 60114,
    h = b ? Symbol.for("react.provider") : 60109,
    k = b ? Symbol.for("react.context") : 60110,
    l = b ? Symbol.for("react.async_mode") : 60111,
    m = b ? Symbol.for("react.concurrent_mode") : 60111,
    n = b ? Symbol.for("react.forward_ref") : 60112,
    p = b ? Symbol.for("react.suspense") : 60113,
    q = b ? Symbol.for("react.suspense_list") : 60120,
    r = b ? Symbol.for("react.memo") : 60115,
    t = b ? Symbol.for("react.lazy") : 60116,
    v = b ? Symbol.for("react.block") : 60121,
    w = b ? Symbol.for("react.fundamental") : 60117,
    x = b ? Symbol.for("react.responder") : 60118,
    y = b ? Symbol.for("react.scope") : 60119;
function z(a) {
  if ("object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && null !== a) {
    var u = a.$$typeof;switch (u) {case c:
        switch (a = a.type, a) {case l:case m:case e:case g:case f:case p:
            return a;default:
            switch (a = a && a.$$typeof, a) {case k:case n:case t:case r:case h:
                return a;default:
                return u;}}case d:
        return u;}
  }
}function A(a) {
  return z(a) === m;
}exports.AsyncMode = l;exports.ConcurrentMode = m;exports.ContextConsumer = k;exports.ContextProvider = h;exports.Element = c;exports.ForwardRef = n;exports.Fragment = e;exports.Lazy = t;exports.Memo = r;exports.Portal = d;
exports.Profiler = g;exports.StrictMode = f;exports.Suspense = p;exports.isAsyncMode = function (a) {
  return A(a) || z(a) === l;
};exports.isConcurrentMode = A;exports.isContextConsumer = function (a) {
  return z(a) === k;
};exports.isContextProvider = function (a) {
  return z(a) === h;
};exports.isElement = function (a) {
  return "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && null !== a && a.$$typeof === c;
};exports.isForwardRef = function (a) {
  return z(a) === n;
};exports.isFragment = function (a) {
  return z(a) === e;
};exports.isLazy = function (a) {
  return z(a) === t;
};
exports.isMemo = function (a) {
  return z(a) === r;
};exports.isPortal = function (a) {
  return z(a) === d;
};exports.isProfiler = function (a) {
  return z(a) === g;
};exports.isStrictMode = function (a) {
  return z(a) === f;
};exports.isSuspense = function (a) {
  return z(a) === p;
};
exports.isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === (typeof a === "undefined" ? "undefined" : _typeof(a)) && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};exports.typeOf = z;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

if (process.env.NODE_ENV !== "production") {
  (function () {
    'use strict';

    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }

    function typeOf(object) {
      if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode

    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }

      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }
    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }
    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }
    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }
    function isElement(object) {
      return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }
    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }
    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }
    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }
    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }
    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }
    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }
    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
  })();
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var ReactIs = __webpack_require__(2);
var assign = __webpack_require__(12);

var ReactPropTypesSecret = __webpack_require__(1);
var checkPropTypes = __webpack_require__(13);

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function printWarning() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (!manualPropTypeCallCache[cacheKey] &&
          // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var printWarning = function printWarning() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = __webpack_require__(1);
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + (typeof error === 'undefined' ? 'undefined' : _typeof(error)) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function () {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

module.exports = checkPropTypes;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(1);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.d3PanZoom = exports.d3Drag = exports.onTick = exports.d3Nodes = exports.d3Connections = undefined;

var _d = __webpack_require__(3);

var _dimensions = __webpack_require__(4);

/*
 * Bind data to a <TAG> tag, inside a G element, inside the given root element.
 * Root is a D3 selection, data is an object or array, tag is a string.
 */
var bindData = function bindData(root, data, tag) {
  return root.append('g').selectAll(tag).data(data).enter().append(tag);
};

/*
 * Bind connections to PATH tags on the given SVG.
 */
var d3Connections = exports.d3Connections = function d3Connections(svg, connections) {
  return bindData(svg, connections, 'path').attr('class', 'mindmap-connection');
};

/* eslint-disable no-param-reassign */
/*
 * Bind nodes to FOREIGNOBJECT tags on the given SVG,
 * and set dimensions and html.
 */
var d3Nodes = exports.d3Nodes = function d3Nodes(svg, nodes) {
  var selection = svg.append('g').selectAll('foreignObject').data(nodes).enter();

  var d3nodes = selection.append('foreignObject').attr('class', 'mindmap-node').attr('width', function (node) {
    return node.width + 4;
  }).attr('height', function (node) {
    return node.height;
  }).html(function (node) {
    return node.html;
  });

  var d3subnodes = selection.append('foreignObject').attr('class', 'mindmap-subnodes').attr('width', function (node) {
    return node.nodesWidth + 4;
  }).attr('height', function (node) {
    return node.nodesHeight;
  }).html(function (subnode) {
    return subnode.nodesHTML;
  });

  return {
    nodes: d3nodes,
    subnodes: d3subnodes
  };
};

/*
 * Callback for forceSimulation tick event.
 */
var onTick = exports.onTick = function onTick(conns, nodes, subnodes) {
  var d = function d(conn) {
    return ['M', conn.source.x, conn.source.y, 'Q', conn.source.x + (conn.curve && conn.curve.x ? conn.curve.x : 0), conn.source.y + (conn.curve && conn.curve.y ? conn.curve.y : 0), ',', conn.target.x, conn.target.y].join(' ');
  };

  // Set the connections path.
  conns.attr('d', d);

  // Set nodes position.
  nodes.attr('x', function (node) {
    return node.x - node.width / 2;
  }).attr('y', function (node) {
    return node.y - node.height / 2;
  });

  // Set subnodes groups color and position.
  subnodes.attr('x', function (node) {
    return node.x + node.width / 2;
  }).attr('y', function (node) {
    return node.y - node.nodesHeight / 2;
  });
};

/*
 * Return drag behavior to use on d3.selection.call().
 */
var d3Drag = exports.d3Drag = function d3Drag(simulation, svg, nodes) {
  var dragStart = function dragStart(node) {
    if (!_d.event.active) {
      simulation.alphaTarget(0.2).restart();
    }

    node.fx = node.x;
    node.fy = node.y;
  };

  var dragged = function dragged(node) {
    node.fx = _d.event.x;
    node.fy = _d.event.y;
  };

  var dragEnd = function dragEnd() {
    if (!_d.event.active) {
      simulation.alphaTarget(0);
    }

    svg.attr('viewBox', (0, _dimensions.getViewBox)(nodes.data()));
  };

  return (0, _d.drag)().on('start', dragStart).on('drag', dragged).on('end', dragEnd);
};
/* eslint-enable no-param-reassign */

/*
 * Return pan and zoom behavior to use on d3.selection.call().
 */
var d3PanZoom = exports.d3PanZoom = function d3PanZoom(el) {
  return (0, _d.zoom)().scaleExtent([0.3, 5]).on('zoom', function () {
    return el.selectAll('svg > g').attr('transform', _d.event.transform);
  });
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Return the HTML representation of a node.
 * The node is an object that has text, url, and category attributes;
 * all of them optional.
 */
var subnodesToHTML = function subnodesToHTML() {
  var subnodes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var fcolor = arguments[1];

  var color = fcolor || '';

  if (!fcolor && subnodes.length > 0 && subnodes[0].color) {
    color = 'style="border-left-color: ' + subnodes[0].color + '"';
  }

  return subnodes.map(function (subnode) {
    var href = 'href="' + subnode.url + '"';
    var emoji = '';

    // Add emojis from WebFX
    if (subnode.category !== undefined && subnode.category !== null) {
      emoji = '<img class="mindmap-emoji" title="' + subnode.category.replaceAll(':', '') + '" src="https://www.webfx.com/tools/emoji-cheat-sheet/graphics/emojis/' + subnode.category.replaceAll(':', '') + '.png">';
    }

    // If url is not specified remove the emoji and the href attribute,
    // so that the node isn't clickable, and the user can see that without
    // having to hover the node.
    if (!subnode.url) {
      href = '';
      emoji = '';
    }

    return '<div class="mindmap-subnode-group" ' + color + '>\n      <a ' + href + '>' + (subnode.text || '') + ' ' + emoji + '</a>\n      <div>' + subnodesToHTML(subnode.nodes, color) + '</div>\n    </div>';
  }).join('');
};

exports.default = subnodesToHTML;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/*
 * Return the HTML representation of a node.
 * The node is an object that has text, url, and category attributes;
 * all of them optional.
 */
exports.default = function (node) {
  var href = 'href="' + node.url + '"';
  var emoji = '';

  // Add emojis from WebFX
  if (node.category !== undefined && node.category !== null) {
    emoji = '<img class="mindmap-emoji" title="' + node.category.replaceAll(':', '') + '" src="https://www.webfx.com/tools/emoji-cheat-sheet/graphics/emojis/' + node.category.replaceAll(':', '') + '.png">';
  }

  // If url is not specified remove the emoji and the href attribute,
  // so that the node isn't clickable, and the user can see that without
  // having to hover the node.
  if (!node.url) {
    href = '';
    emoji = '';
  }

  return '<a id="node-' + node.index + '" ' + href + '>' + (node.text || '') + ' ' + emoji + '</a>';
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(21)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js!../node_modules/sass-loader/lib/loader.js!./main.sass", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/postcss-loader/lib/index.js!../node_modules/sass-loader/lib/loader.js!./main.sass");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, ".mindmap-svg {\n  height: 100vh;\n  width: 100%; }\n  .mindmap-svg:focus {\n    outline: none; }\n\n.mindmap-node > a {\n  background: #f5f5f5;\n  border-radius: 10px;\n  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  color: #212121;\n  display: inline-block;\n  font-family: 'Raleway';\n  font-size: 22px;\n  margin: 0 auto;\n  padding: 15px;\n  text-align: center;\n  text-decoration: none;\n  -webkit-transition: background-color .2s, color .2s ease-out;\n  transition: background-color .2s, color .2s ease-out; }\n  .mindmap-node > a[href]:hover {\n    background-color: #f57c00;\n    color: #fff;\n    cursor: pointer; }\n\n.mindmap-node--editable {\n  cursor: all-scroll; }\n  .mindmap-node--editable > a {\n    pointer-events: none; }\n\n.mindmap-subnode-group {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  border-left: 4px solid #9e9e9e;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-left: 15px;\n  padding: 5px; }\n  .mindmap-subnode-group a {\n    color: #212121;\n    font-family: 'Raleway';\n    font-size: 16px;\n    padding: 2px 5px; }\n\n.mindmap-connection {\n  fill: transparent;\n  stroke: #9e9e9e;\n  stroke-dasharray: 10px 4px;\n  stroke-width: 3px; }\n\n.mindmap-emoji {\n  height: 24px;\n  vertical-align: bottom;\n  width: 24px; }\n\n.reddit-emoji {\n  border-radius: 50%; }\n", ""]);

// exports


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(22);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ })
/******/ ]);
});