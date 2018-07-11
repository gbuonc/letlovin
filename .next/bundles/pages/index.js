module.exports =
__NEXT_REGISTER_PAGE('/', function() {
          var comp =
      webpackJsonp([4],{

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "/Users/gbuoncompagni/localDEV/letlovin/components/Header.js";



var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, "fq"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    prefetch: true,
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Home")), ' ', __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    prefetch: true,
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "About Page")));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
var _jsxFileName = "/Users/gbuoncompagni/localDEV/letlovin/components/Layout.js";




var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "Letlo Vin :: ", props.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), props.children);
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./node_modules/@babel/runtime/core-js/json/stringify.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/core-js/library/fn/json/stringify.js");

/***/ }),

/***/ "./node_modules/core-js/library/fn/json/stringify.js":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("./node_modules/core-js/library/modules/_core.js");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "./node_modules/define-properties/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__("./node_modules/object-keys/index.js");
var foreach = __webpack_require__("./node_modules/foreach/index.js");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol() === 'symbol';

var toStr = Object.prototype.toString;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
        /* eslint-disable no-unused-vars, no-restricted-syntax */
        for (var _ in obj) { return false; }
        /* eslint-enable no-unused-vars, no-restricted-syntax */
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = Object.defineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		Object.defineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = props.concat(Object.getOwnPropertySymbols(map));
	}
	foreach(props, function (name) {
		defineProperty(object, name, map[name], predicates[name]);
	});
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ "./node_modules/foreach/index.js":
/***/ (function(module, exports) {


var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach (obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};



/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./node_modules/has/src/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/isomorphic-unfetch/browser.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = window.fetch || (window.fetch = __webpack_require__("./node_modules/unfetch/dist/unfetch.es.js").default || __webpack_require__("./node_modules/unfetch/dist/unfetch.es.js"));


/***/ }),

/***/ "./node_modules/next/dist/lib/link.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/typeof.js"));

var _stringify = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/json/stringify.js"));

var _getPrototypeOf = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/core-js/object/get-prototype-of.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _url = __webpack_require__("./node_modules/url/url.js");

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/prop-types/index.js"));

var _propTypesExact = _interopRequireDefault(__webpack_require__("./node_modules/prop-types-exact/build/index.js"));

var _router = _interopRequireWildcard(__webpack_require__("./node_modules/next/dist/lib/router/index.js"));

var _utils = __webpack_require__("./node_modules/next/dist/lib/utils.js");

/* global __NEXT_DATA__ */
var Link =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Link, _Component);

  function Link(props) {
    var _ref;

    var _this;

    (0, _classCallCheck2.default)(this, Link);

    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_ref = Link.__proto__ || (0, _getPrototypeOf.default)(Link)).call.apply(_ref, [this, props].concat(rest)));
    _this.linkClicked = _this.linkClicked.bind((0, _assertThisInitialized2.default)(_this));

    _this.formatUrls(props);

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.formatUrls(nextProps);
    }
  }, {
    key: "linkClicked",
    value: function linkClicked(e) {
      var _this2 = this;

      if (e.currentTarget.nodeName === 'A' && (e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var shallow = this.props.shallow;
      var href = this.href,
          as = this.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      var replace = this.props.replace;
      var changeMethod = replace ? 'replace' : 'push'; // straight up redirect

      _router.default[changeMethod](href, as, {
        shallow: shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this2.props.onError) _this2.props.onError(err);
      });
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;
      var href = (0, _url.resolve)(pathname, this.href);

      _router.default.prefetch(href);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    } // We accept both 'href' and 'as' as objects which we can pass to `url.format`.
    // We'll handle it here.

  }, {
    key: "formatUrls",
    value: function formatUrls(props) {
      this.href = props.href && (0, _typeof2.default)(props.href) === 'object' ? (0, _url.format)(props.href) : props.href;
      this.as = props.as && (0, _typeof2.default)(props.as) === 'object' ? (0, _url.format)(props.as) : props.as;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;
      var href = this.href,
          as = this.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

      if (typeof children === 'string') {
        children = _react.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user

      };

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = (0, _router._rewriteUrlForNextExport)(props.href);
      }

      return _react.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component);

exports.default = Link;
Object.defineProperty(Link, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: (0, _propTypesExact.default)({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warnLink("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  })
});

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

var warnLink = (0, _utils.execOnce)(_utils.warn);

/***/ }),

/***/ "./node_modules/next/head.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/head.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./node_modules/next/dist/lib/link.js")


/***/ }),

/***/ "./node_modules/object-keys/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es5-shim
var has = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;
var slice = Array.prototype.slice;
var isArgs = __webpack_require__("./node_modules/object-keys/isArguments.js");
var isEnumerable = Object.prototype.propertyIsEnumerable;
var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
var dontEnums = [
	'toString',
	'toLocaleString',
	'valueOf',
	'hasOwnProperty',
	'isPrototypeOf',
	'propertyIsEnumerable',
	'constructor'
];
var equalsConstructorPrototype = function (o) {
	var ctor = o.constructor;
	return ctor && ctor.prototype === o;
};
var excludedKeys = {
	$applicationCache: true,
	$console: true,
	$external: true,
	$frame: true,
	$frameElement: true,
	$frames: true,
	$innerHeight: true,
	$innerWidth: true,
	$outerHeight: true,
	$outerWidth: true,
	$pageXOffset: true,
	$pageYOffset: true,
	$parent: true,
	$scrollLeft: true,
	$scrollTop: true,
	$scrollX: true,
	$scrollY: true,
	$self: true,
	$webkitIndexedDB: true,
	$webkitStorageInfo: true,
	$window: true
};
var hasAutomationEqualityBug = (function () {
	/* global window */
	if (typeof window === 'undefined') { return false; }
	for (var k in window) {
		try {
			if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
				try {
					equalsConstructorPrototype(window[k]);
				} catch (e) {
					return true;
				}
			}
		} catch (e) {
			return true;
		}
	}
	return false;
}());
var equalsConstructorPrototypeIfNotBuggy = function (o) {
	/* global window */
	if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
		return equalsConstructorPrototype(o);
	}
	try {
		return equalsConstructorPrototype(o);
	} catch (e) {
		return false;
	}
};

var keysShim = function keys(object) {
	var isObject = object !== null && typeof object === 'object';
	var isFunction = toStr.call(object) === '[object Function]';
	var isArguments = isArgs(object);
	var isString = isObject && toStr.call(object) === '[object String]';
	var theKeys = [];

	if (!isObject && !isFunction && !isArguments) {
		throw new TypeError('Object.keys called on a non-object');
	}

	var skipProto = hasProtoEnumBug && isFunction;
	if (isString && object.length > 0 && !has.call(object, 0)) {
		for (var i = 0; i < object.length; ++i) {
			theKeys.push(String(i));
		}
	}

	if (isArguments && object.length > 0) {
		for (var j = 0; j < object.length; ++j) {
			theKeys.push(String(j));
		}
	} else {
		for (var name in object) {
			if (!(skipProto && name === 'prototype') && has.call(object, name)) {
				theKeys.push(String(name));
			}
		}
	}

	if (hasDontEnumBug) {
		var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

		for (var k = 0; k < dontEnums.length; ++k) {
			if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
				theKeys.push(dontEnums[k]);
			}
		}
	}
	return theKeys;
};

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			return (Object.keys(arguments) || '').length === 2;
		}(1, 2));
		if (!keysWorksWithArguments) {
			var originalKeys = Object.keys;
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				} else {
					return originalKeys(object);
				}
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/isArguments.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ "./node_modules/object.assign/implementation.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var keys = __webpack_require__("./node_modules/object-keys/index.js");
var bind = __webpack_require__("./node_modules/function-bind/index.js");
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = __webpack_require__("./node_modules/has-symbols/shams.js")();
var toObject = Object;
var push = bind.call(Function.call, Array.prototype.push);
var propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			syms = getSymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if (propIsEnumerable(source, key)) {
					push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if (propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};


/***/ }),

/***/ "./node_modules/object.assign/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperties = __webpack_require__("./node_modules/define-properties/index.js");

var implementation = __webpack_require__("./node_modules/object.assign/implementation.js");
var getPolyfill = __webpack_require__("./node_modules/object.assign/polyfill.js");
var shim = __webpack_require__("./node_modules/object.assign/shim.js");

var polyfill = getPolyfill();

defineProperties(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./node_modules/object.assign/polyfill.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("./node_modules/object.assign/implementation.js");

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	// v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	// note: this does not detect the bug unless there's 20 characters
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	// which is 72% slower than our shim, and Firefox 40's native implementation.
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


/***/ }),

/***/ "./node_modules/object.assign/shim.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("./node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__("./node_modules/object.assign/polyfill.js");

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__("./node_modules/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__("./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__("./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = {};

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-overdrive/lib/Overdrive.min.js":
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/react-dom/index.js")):"function"==typeof define&&define.amd?define("Overdrive",["react","react-dom"],e):"object"==typeof exports?exports.Overdrive=e(require("react"),require("react-dom")):t.Overdrive=e(t.React,t.ReactDOM)}(this,function(t,e){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=108)}([function(t,e){var n=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=n)},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){t.exports=!n(6)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(1),o=n(0),i=n(36),u=n(7),a="prototype",c=function(t,e,n){var f,s,l,p=t&c.F,d=t&c.G,y=t&c.S,v=t&c.P,h=t&c.B,m=t&c.W,b=d?o:o[e]||(o[e]={}),g=b[a],O=d?r:y?r[e]:(r[e]||{})[a];d&&(n=e);for(f in n)(s=!p&&O&&void 0!==O[f])&&f in b||(l=s?O[f]:n[f],b[f]=d&&"function"!=typeof O[f]?n[f]:h&&s?i(l,r):m&&O[f]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[a]=t[a],e}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((b.virtual||(b.virtual={}))[f]=l,t&c.R&&g&&!g[f]&&u(g,f,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(10),o=n(38),i=n(28),u=Object.defineProperty;e.f=n(2)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(5),o=n(15);t.exports=n(2)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(39),o=n(18);t.exports=function(t){return r(o(t))}},function(t,e,n){var r=n(26)("wks"),o=n(17),i=n(1).Symbol,u="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=r},function(t,e,n){var r=n(11);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(44),o=n(19);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(s===setTimeout)return setTimeout(t,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(t,0);try{return s(t,0)}catch(e){try{return s.call(null,t,0)}catch(e){return s.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function u(){v&&d&&(v=!1,d.length?y=d.concat(y):h=-1,y.length&&a())}function a(){if(!v){var t=o(u);v=!0;for(var e=y.length;e;){for(d=y,y=[];++h<e;)d&&d[h].run();h=-1,e=y.length}d=null,v=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function f(){}var s,l,p=t.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:n}catch(t){s=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(t){l=r}}();var d,y=[],v=!1,h=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];y.push(new c(t,e)),1!==y.length||v||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=f,p.addListener=f,p.once=f,p.off=f,p.removeListener=f,p.removeAllListeners=f,p.emit=f,p.prependListener=f,p.prependOnceListener=f,p.listeners=function(t){return[]},p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(18);t.exports=function(t){return Object(r(t))}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){t.exports={}},function(t,e){t.exports=!0},function(t,e,n){var r=n(10),o=n(82),i=n(19),u=n(25)("IE_PROTO"),a=function(){},c="prototype",f=function(){var t,e=n(37)("iframe"),r=i.length,o="<",u=">";for(e.style.display="none",n(76).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(o+"script"+u+"document.F=Object"+o+"/script"+u),t.close(),f=t.F;r--;)delete f[c][i[r]];return f()};t.exports=Object.create||function(t,e){var n;return null!==t?(a[c]=r(t),n=new a,a[c]=null,n[u]=t):n=f(),void 0===e?n:o(n,e)}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(5).f,o=n(4),i=n(9)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(26)("keys"),o=n(17);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,n){var r=n(1),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(11);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(1),o=n(0),i=n(21),u=n(30),a=n(5).f;t.exports=function(t){var e=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||a(e,t,{value:u.f(t)})}},function(t,e,n){e.f=n(9)},function(t,e,n){"use strict";function r(t){return function(){return t}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(t){return t},t.exports=o},function(t,e,n){"use strict";(function(e){function n(t,e,n,o,i,u,a,c){if(r(e),!t){var f;if(void 0===e)f=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,o,i,u,a,c],l=0;f=new Error(e.replace(/%s/g,function(){return s[l++]})),f.name="Invariant Violation"}throw f.framesToPop=1,f}}var r=function(t){};"production"!==e.env.NODE_ENV&&(r=function(t){if(void 0===t)throw new Error("invariant requires an error message argument")}),t.exports=n}).call(e,n(13))},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(57),i=r(o),u=n(56),a=r(u),c="function"==typeof a.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof a.default&&t.constructor===a.default&&t!==a.default.prototype?"symbol":typeof t};e.default="function"==typeof a.default&&"symbol"===c(i.default)?function(t){return void 0===t?"undefined":c(t)}:function(t){return t&&"function"==typeof a.default&&t.constructor===a.default&&t!==a.default.prototype?"symbol":void 0===t?"undefined":c(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(72);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(11),o=n(1).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){t.exports=!n(2)&&!n(6)(function(){return 7!=Object.defineProperty(n(37)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(35);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){"use strict";var r=n(21),o=n(3),i=n(46),u=n(7),a=n(4),c=n(20),f=n(78),s=n(24),l=n(43),p=n(9)("iterator"),d=!([].keys&&"next"in[].keys()),y="keys",v="values",h=function(){return this};t.exports=function(t,e,n,m,b,g,O){f(n,e,m);var w,x,_,E=function(t){if(!d&&t in P)return P[t];switch(t){case y:case v:return function(){return new n(this,t)}}return function(){return new n(this,t)}},S=e+" Iterator",j=b==v,T=!1,P=t.prototype,k=P[p]||P["@@iterator"]||b&&P[b],M=k||E(b),N=b?j?E("entries"):M:void 0,R="Array"==e?P.entries||k:k;if(R&&(_=l(R.call(new t)))!==Object.prototype&&_.next&&(s(_,S,!0),r||a(_,p)||u(_,p,h)),j&&k&&k.name!==v&&(T=!0,M=function(){return k.call(this)}),r&&!O||!d&&!T&&P[p]||u(P,p,M),c[e]=M,c[S]=h,b)if(w={values:j?M:E(v),keys:g?M:E(y),entries:N},O)for(x in w)x in P||i(P,x,w[x]);else o(o.P+o.F*(d||T),e,w);return w}},function(t,e,n){var r=n(14),o=n(15),i=n(8),u=n(28),a=n(4),c=n(38),f=Object.getOwnPropertyDescriptor;e.f=n(2)?f:function(t,e){if(t=i(t),e=u(e,!0),c)try{return f(t,e)}catch(t){}if(a(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,n){var r=n(44),o=n(19).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(4),o=n(16),i=n(25)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(4),o=n(8),i=n(74)(!1),u=n(25)("IE_PROTO");t.exports=function(t,e){var n,a=o(t),c=0,f=[];for(n in a)n!=u&&r(a,n)&&f.push(n);for(;e.length>c;)r(a,n=e[c++])&&(~i(f,n)||f.push(n));return f}},function(t,e,n){var r=n(3),o=n(0),i=n(6);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],u={};u[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",u)}},function(t,e,n){t.exports=n(7)},function(t,e,n){"use strict";(function(e){var r=n(31),o=r;if("production"!==e.env.NODE_ENV){var i=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var o=0,i="Warning: "+t.replace(/%s/g,function(){return n[o++]});"undefined"!=typeof console&&console.error(i);try{throw new Error(i)}catch(t){}};o=function(t,e){if(void 0===e)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(0!==e.indexOf("Failed Composite propType: ")&&!t){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];i.apply(void 0,[e].concat(r))}}}t.exports=o}).call(e,n(13))},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(62),i=r(o),u=n(60),a=r(u),c=n(53),f=r(c),s=n(58),l=r(s),p=n(59),d=r(p),y=n(63),v=r(y),h=n(61),m=r(h),b=n(106),g=r(b),O=n(107),w=r(O),x=n(49),_=r(x),E=n(105),S=r(E),j=w.default.unstable_renderSubtreeIntoContainer,T={},P=function(t){function e(t){(0,l.default)(this,e);var n=(0,v.default)(this,(e.__proto__||(0,f.default)(e)).call(this,t));return n.state={loading:!0},n.animateEnd=n.animateEnd.bind(n),n}return(0,m.default)(e,t),(0,d.default)(e,[{key:"animate",value:function(t,e){var n=this,r=this.props,o=r.duration,i=r.easing;t.top+=window.pageYOffset||document.documentElement.scrollTop;var u=this.getPosition(!0),c="scaleX(1) scaleY(1) translateX(0px) translateY(0px)",f=t.width/u.width,s=t.height/u.height,l=t.left-u.left,p=t.top-u.top;if(1!==f||1!==s||0!==l||0!==p){var d={transition:"transform "+o/1e3+"s "+i+", opacity "+o/1e3+"s "+i,transformOrigin:"0 0 0"},y=g.default.cloneElement(e,{key:"1",style:(0,_.default)((0,a.default)({},d,t,{opacity:1,transform:c}))}),v=g.default.cloneElement(e,{key:"1",style:(0,_.default)((0,a.default)({},d,t,{margin:u.margin,opacity:0,transform:"matrix("+1/f+", 0, 0, "+1/s+", "+-l+", "+-p+")"}))}),h=g.default.cloneElement(this.props.children,{key:"2",style:(0,_.default)((0,a.default)({},d,u,{margin:t.margin,opacity:0,transform:"matrix("+f+", 0, 0, "+s+", "+l+", "+p+")"}))}),m=g.default.cloneElement(this.props.children,{key:"2",style:(0,_.default)((0,a.default)({},d,u,{opacity:1,transform:c}))}),b=g.default.createElement("div",null,y,h),O=g.default.createElement("div",null,v,m);this.setState({loading:!0});var w=document.createElement("div");window.document.body.appendChild(w),this.bodyElement=w,j(this,b,w),this.animationTimeout=setTimeout(function(){j(n,O,w),n.animationTimeout=setTimeout(n.animateEnd,o)},0)}}},{key:"animateEnd",value:function(){this.animationTimeout=null,this.setState({loading:!1}),this.props.onAnimationEnd&&this.props.onAnimationEnd(),window.document.body.removeChild(this.bodyElement)}},{key:"onHide",value:function(){var t=this.props.id,e=g.default.cloneElement(this.props.children),n=this.getPosition();T[t]={prevPosition:n,prevElement:e},this.clearAnimations(),setTimeout(function(){T[t]=!1},100)}},{key:"onShow",value:function(){if(!this.onShowLock){this.onShowLock=!0;var t=this.props,e=t.id,n=t.animationDelay;if(T[e]){var r=T[e],o=r.prevPosition,i=r.prevElement;T[e]=!1,n?this.animationDelayTimeout=setTimeout(this.animate.bind(this,o,i),n):this.animate(o,i)}else this.setState({loading:!1})}}},{key:"componentDidMount",value:function(){this.onShow()}},{key:"clearAnimations",value:function(){clearTimeout(this.animationDelayTimeout),clearTimeout(this.animationTimeout),this.animationTimeout&&this.animateEnd()}},{key:"componentWillUnmount",value:function(){this.onHide()}},{key:"componentWillReceiveProps",value:function(){this.onShowLock=!1,this.onHide()}},{key:"componentDidUpdate",value:function(){this.onShow()}},{key:"getPosition",value:function(t){var e=this.element,n=e.getBoundingClientRect(),r=window.getComputedStyle(e),o=parseInt(r.marginTop,10),i=parseInt(r.marginLeft,10);return{top:n.top-o+(t?1:0)*(window.pageYOffset||document.documentElement.scrollTop),left:n.left-i,width:n.width,height:n.height,margin:r.margin,padding:r.padding,borderRadius:r.borderRadius,position:"absolute"}}},{key:"render",value:function(){var t=this,e=this.props,n=(e.id,e.duration,e.animationDelay,e.style),r=void 0===n?{}:n,o=e.children,u=e.element,c=(0,i.default)(e,["id","duration","animationDelay","style","children","element"]),f=(0,a.default)({},r,{opacity:this.state.loading?0:1}),s=g.default.Children.only(o);return g.default.createElement(u,(0,a.default)({ref:function(e){return t.element=e&&e.firstChild},style:f},c),s)}}]),e}(g.default.Component);P.propTypes={id:S.default.string.isRequired,duration:S.default.number,easing:S.default.string,element:S.default.string,animationDelay:S.default.number,onAnimationEnd:S.default.func},P.defaultProps={element:"div",duration:200,easing:""},e.default=P},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(54),i=r(o),u={transform:!0,transformOrigin:!0,transition:!0},a="Webkit",c=function(t){var e={};return(0,i.default)(t||{}).forEach(function(n){if(u[n]){var r=a+n[0].toUpperCase()+n.slice(1);e[r]=t[n]}e[n]=t[n]}),e};e.default=c},function(t,e,n){t.exports={default:n(64),__esModule:!0}},function(t,e,n){t.exports={default:n(65),__esModule:!0}},function(t,e,n){t.exports={default:n(66),__esModule:!0}},function(t,e,n){t.exports={default:n(67),__esModule:!0}},function(t,e,n){t.exports={default:n(68),__esModule:!0}},function(t,e,n){t.exports={default:n(69),__esModule:!0}},function(t,e,n){t.exports={default:n(70),__esModule:!0}},function(t,e,n){t.exports={default:n(71),__esModule:!0}},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(52),i=r(o);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(50),i=r(o);e.default=i.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(55),i=r(o),u=n(51),a=r(u),c=n(34),f=r(c);e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,f.default)(e)));t.prototype=(0,a.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(i.default?(0,i.default)(t,e):t.__proto__=e)}},function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var o=n(34),i=r(o);e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,i.default)(e))&&"function"!=typeof e?t:e}},function(t,e,n){n(89),t.exports=n(0).Object.assign},function(t,e,n){n(90);var r=n(0).Object;t.exports=function(t,e){return r.create(t,e)}},function(t,e,n){n(91);var r=n(0).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){n(92),t.exports=n(0).Object.getPrototypeOf},function(t,e,n){n(93),t.exports=n(0).Object.keys},function(t,e,n){n(94),t.exports=n(0).Object.setPrototypeOf},function(t,e,n){n(97),n(95),n(98),n(99),t.exports=n(0).Symbol},function(t,e,n){n(96),n(100),t.exports=n(30).f("iterator")},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e){t.exports=function(){}},function(t,e,n){var r=n(8),o=n(87),i=n(86);t.exports=function(t){return function(e,n,u){var a,c=r(e),f=o(c.length),s=i(u,f);if(t&&n!=n){for(;f>s;)if((a=c[s++])!=a)return!0}else for(;f>s;s++)if((t||s in c)&&c[s]===n)return t||s||0;return!t&&-1}}},function(t,e,n){var r=n(12),o=n(23),i=n(14);t.exports=function(t){var e=r(t),n=o.f;if(n)for(var u,a=n(t),c=i.f,f=0;a.length>f;)c.call(t,u=a[f++])&&e.push(u);return e}},function(t,e,n){var r=n(1).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(35);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){"use strict";var r=n(22),o=n(15),i=n(24),u={};n(7)(u,n(9)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(u,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){var r=n(17)("meta"),o=n(11),i=n(4),u=n(5).f,a=0,c=Object.isExtensible||function(){return!0},f=!n(6)(function(){return c(Object.preventExtensions({}))}),s=function(t){u(t,r,{value:{i:"O"+ ++a,w:{}}})},l=function(t,e){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,r)){if(!c(t))return"F";if(!e)return"E";s(t)}return t[r].i},p=function(t,e){if(!i(t,r)){if(!c(t))return!0;if(!e)return!1;s(t)}return t[r].w},d=function(t){return f&&y.NEED&&c(t)&&!i(t,r)&&s(t),t},y=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:p,onFreeze:d}},function(t,e,n){"use strict";var r=n(12),o=n(23),i=n(14),u=n(16),a=n(39),c=Object.assign;t.exports=!c||n(6)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=c({},t)[n]||Object.keys(c({},e)).join("")!=r})?function(t,e){for(var n=u(t),c=arguments.length,f=1,s=o.f,l=i.f;c>f;)for(var p,d=a(arguments[f++]),y=s?r(d).concat(s(d)):r(d),v=y.length,h=0;v>h;)l.call(d,p=y[h++])&&(n[p]=d[p]);return n}:c},function(t,e,n){var r=n(5),o=n(10),i=n(12);t.exports=n(2)?Object.defineProperties:function(t,e){o(t);for(var n,u=i(e),a=u.length,c=0;a>c;)r.f(t,n=u[c++],e[n]);return t}},function(t,e,n){var r=n(8),o=n(42).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(t){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?a(t):o(r(t))}},function(t,e,n){var r=n(11),o=n(10),i=function(t,e){if(o(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n(36)(Function.call,n(41).f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return i(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:i}},function(t,e,n){var r=n(27),o=n(18);t.exports=function(t){return function(e,n){var i,u,a=String(o(e)),c=r(n),f=a.length;return c<0||c>=f?t?"":void 0:(i=a.charCodeAt(c),i<55296||i>56319||c+1===f||(u=a.charCodeAt(c+1))<56320||u>57343?t?a.charAt(c):i:t?a.slice(c,c+2):u-56320+(i-55296<<10)+65536)}}},function(t,e,n){var r=n(27),o=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(27),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){"use strict";var r=n(73),o=n(79),i=n(20),u=n(8);t.exports=n(40)(Array,"Array",function(t,e){this._t=u(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):"keys"==e?o(0,n):"values"==e?o(0,t[n]):o(0,[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e,n){var r=n(3);r(r.S+r.F,"Object",{assign:n(81)})},function(t,e,n){var r=n(3);r(r.S,"Object",{create:n(22)})},function(t,e,n){var r=n(3);r(r.S+r.F*!n(2),"Object",{defineProperty:n(5).f})},function(t,e,n){var r=n(16),o=n(43);n(45)("getPrototypeOf",function(){return function(t){return o(r(t))}})},function(t,e,n){var r=n(16),o=n(12);n(45)("keys",function(){return function(t){return o(r(t))}})},function(t,e,n){var r=n(3);r(r.S,"Object",{setPrototypeOf:n(84).set})},function(t,e){},function(t,e,n){"use strict";var r=n(85)(!0);n(40)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){"use strict";var r=n(1),o=n(4),i=n(2),u=n(3),a=n(46),c=n(80).KEY,f=n(6),s=n(26),l=n(24),p=n(17),d=n(9),y=n(30),v=n(29),h=n(75),m=n(77),b=n(10),g=n(8),O=n(28),w=n(15),x=n(22),_=n(83),E=n(41),S=n(5),j=n(12),T=E.f,P=S.f,k=_.f,M=r.Symbol,N=r.JSON,R=N&&N.stringify,A="prototype",L=d("_hidden"),I=d("toPrimitive"),C={}.propertyIsEnumerable,D=s("symbol-registry"),F=s("symbols"),V=s("op-symbols"),q=Object[A],W="function"==typeof M,Y=r.QObject,G=!Y||!Y[A]||!Y[A].findChild,H=i&&f(function(){return 7!=x(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=T(q,e);r&&delete q[e],P(t,e,n),r&&t!==q&&P(q,e,r)}:P,J=function(t){var e=F[t]=x(M[A]);return e._k=t,e},U=W&&"symbol"==typeof M.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof M},B=function(t,e,n){return t===q&&B(V,e,n),b(t),e=O(e,!0),b(n),o(F,e)?(n.enumerable?(o(t,L)&&t[L][e]&&(t[L][e]=!1),n=x(n,{enumerable:w(0,!1)})):(o(t,L)||P(t,L,w(1,{})),t[L][e]=!0),H(t,e,n)):P(t,e,n)},K=function(t,e){b(t);for(var n,r=h(e=g(e)),o=0,i=r.length;i>o;)B(t,n=r[o++],e[n]);return t},z=function(t,e){return void 0===e?x(t):K(x(t),e)},X=function(t){var e=C.call(this,t=O(t,!0));return!(this===q&&o(F,t)&&!o(V,t))&&(!(e||!o(this,t)||!o(F,t)||o(this,L)&&this[L][t])||e)},$=function(t,e){if(t=g(t),e=O(e,!0),t!==q||!o(F,e)||o(V,e)){var n=T(t,e);return!n||!o(F,e)||o(t,L)&&t[L][e]||(n.enumerable=!0),n}},Q=function(t){for(var e,n=k(g(t)),r=[],i=0;n.length>i;)o(F,e=n[i++])||e==L||e==c||r.push(e);return r},Z=function(t){for(var e,n=t===q,r=k(n?V:g(t)),i=[],u=0;r.length>u;)!o(F,e=r[u++])||n&&!o(q,e)||i.push(F[e]);return i};W||(M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(n){this===q&&e.call(V,n),o(this,L)&&o(this[L],t)&&(this[L][t]=!1),H(this,t,w(1,n))};return i&&G&&H(q,t,{configurable:!0,set:e}),J(t)},a(M[A],"toString",function(){return this._k}),E.f=$,S.f=B,n(42).f=_.f=Q,n(14).f=X,n(23).f=Z,i&&!n(21)&&a(q,"propertyIsEnumerable",X,!0),y.f=function(t){return J(d(t))}),u(u.G+u.W+u.F*!W,{Symbol:M});for(var tt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;tt.length>et;)d(tt[et++]);for(var nt=j(d.store),rt=0;nt.length>rt;)v(nt[rt++]);u(u.S+u.F*!W,"Symbol",{for:function(t){return o(D,t+="")?D[t]:D[t]=M(t)},keyFor:function(t){if(!U(t))throw TypeError(t+" is not a symbol!");for(var e in D)if(D[e]===t)return e},useSetter:function(){G=!0},useSimple:function(){G=!1}}),u(u.S+u.F*!W,"Object",{create:z,defineProperty:B,defineProperties:K,getOwnPropertyDescriptor:$,getOwnPropertyNames:Q,getOwnPropertySymbols:Z}),N&&u(u.S+u.F*(!W||f(function(){var t=M();return"[null]"!=R([t])||"{}"!=R({a:t})||"{}"!=R(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!U(t)){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);return e=r[1],"function"==typeof e&&(n=e),!n&&m(e)||(e=function(t,e){if(n&&(e=n.call(this,t,e)),!U(e))return e}),r[1]=e,R.apply(N,r)}}}),M[A][I]||n(7)(M[A],I,M[A].valueOf),l(M,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,e,n){n(29)("asyncIterator")},function(t,e,n){n(29)("observable")},function(t,e,n){n(88);for(var r=n(1),o=n(7),i=n(20),u=n(9)("toStringTag"),a="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<a.length;c++){var f=a[c],s=r[f],l=s&&s.prototype;l&&!l[u]&&o(l,u,f),i[f]=i.Array}},function(t,e,n){"use strict";function r(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function o(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;t.exports=o()?Object.assign:function(t,e){for(var n,o,c=r(t),f=1;f<arguments.length;f++){n=Object(arguments[f]);for(var s in n)u.call(n,s)&&(c[s]=n[s]);if(i){o=i(n);for(var l=0;l<o.length;l++)a.call(n,o[l])&&(c[o[l]]=n[o[l]])}}return c}},function(t,e,n){"use strict";(function(e){function r(t,n,r,c,f){if("production"!==e.env.NODE_ENV)for(var s in t)if(t.hasOwnProperty(s)){var l;try{o("function"==typeof t[s],"%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.",c||"React class",r,s,typeof t[s]),l=t[s](n,s,c,r,null,u)}catch(t){l=t}if(i(!l||l instanceof Error,"%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",c||"React class",r,s,typeof l),l instanceof Error&&!(l.message in a)){a[l.message]=!0;var p=f?f():"";i(!1,"Failed %s type: %s%s",r,l.message,null!=p?p:"")}}}if("production"!==e.env.NODE_ENV)var o=n(32),i=n(47),u=n(33),a={};t.exports=r}).call(e,n(13))},function(t,e,n){"use strict";var r=n(31),o=n(32),i=n(33);t.exports=function(){function t(t,e,n,r,u,a){a!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e};return n.checkPropTypes=r,n.PropTypes=n,n}},function(t,e,n){"use strict";(function(e){var r=n(31),o=n(32),i=n(47),u=n(101),a=n(33),c=n(102);t.exports=function(t,n){function f(t){var e=t&&(M&&t[M]||t[N]);if("function"==typeof e)return e}function s(t,e){return t===e?0!==t||1/t==1/e:t!==t&&e!==e}function l(t){this.message=t,this.stack=""}function p(t){function r(r,f,s,p,d,y,v){if(p=p||R,y=y||s,v!==a)if(n)o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");else if("production"!==e.env.NODE_ENV&&"undefined"!=typeof console){var h=p+":"+s;!u[h]&&c<3&&(i(!1,"You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",y,p),u[h]=!0,c++)}return null==f[s]?r?new l(null===f[s]?"The "+d+" `"+y+"` is marked as required in `"+p+"`, but its value is `null`.":"The "+d+" `"+y+"` is marked as required in `"+p+"`, but its value is `undefined`."):null:t(f,s,p,d,y)}if("production"!==e.env.NODE_ENV)var u={},c=0;var f=r.bind(null,!1);return f.isRequired=r.bind(null,!0),f}function d(t){function e(e,n,r,o,i,u){var a=e[n];if(j(a)!==t)return new l("Invalid "+o+" `"+i+"` of type `"+T(a)+"` supplied to `"+r+"`, expected `"+t+"`.");return null}return p(e)}function y(){return p(r.thatReturnsNull)}function v(t){function e(e,n,r,o,i){if("function"!=typeof t)return new l("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var u=e[n];if(!Array.isArray(u)){return new l("Invalid "+o+" `"+i+"` of type `"+j(u)+"` supplied to `"+r+"`, expected an array.")}for(var c=0;c<u.length;c++){var f=t(u,c,r,o,i+"["+c+"]",a);if(f instanceof Error)return f}return null}return p(e)}function h(){function e(e,n,r,o,i){var u=e[n];if(!t(u)){return new l("Invalid "+o+" `"+i+"` of type `"+j(u)+"` supplied to `"+r+"`, expected a single ReactElement.")}return null}return p(e)}function m(t){function e(e,n,r,o,i){if(!(e[n]instanceof t)){var u=t.name||R;return new l("Invalid "+o+" `"+i+"` of type `"+k(e[n])+"` supplied to `"+r+"`, expected instance of `"+u+"`.")}return null}return p(e)}function b(t){function n(e,n,r,o,i){for(var u=e[n],a=0;a<t.length;a++)if(s(u,t[a]))return null;return new l("Invalid "+o+" `"+i+"` of value `"+u+"` supplied to `"+r+"`, expected one of "+JSON.stringify(t)+".")}return Array.isArray(t)?p(n):("production"!==e.env.NODE_ENV&&i(!1,"Invalid argument supplied to oneOf, expected an instance of array."),r.thatReturnsNull)}function g(t){function e(e,n,r,o,i){if("function"!=typeof t)return new l("Property `"+i+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var u=e[n],c=j(u);if("object"!==c)return new l("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected an object.");for(var f in u)if(u.hasOwnProperty(f)){var s=t(u,f,r,o,i+"."+f,a);if(s instanceof Error)return s}return null}return p(e)}function O(t){function n(e,n,r,o,i){for(var u=0;u<t.length;u++){if(null==(0,t[u])(e,n,r,o,i,a))return null}return new l("Invalid "+o+" `"+i+"` supplied to `"+r+"`.")}if(!Array.isArray(t))return"production"!==e.env.NODE_ENV&&i(!1,"Invalid argument supplied to oneOfType, expected an instance of array."),r.thatReturnsNull;for(var o=0;o<t.length;o++){var u=t[o];if("function"!=typeof u)return i(!1,"Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",P(u),o),r.thatReturnsNull}return p(n)}function w(){function t(t,e,n,r,o){return E(t[e])?null:new l("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")}return p(t)}function x(t){function e(e,n,r,o,i){var u=e[n],c=j(u);if("object"!==c)return new l("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var f in t){var s=t[f];if(s){var p=s(u,f,r,o,i+"."+f,a);if(p)return p}}return null}return p(e)}function _(t){function e(e,n,r,o,i){var c=e[n],f=j(c);if("object"!==f)return new l("Invalid "+o+" `"+i+"` of type `"+f+"` supplied to `"+r+"`, expected `object`.");var s=u({},e[n],t);for(var p in s){var d=t[p];if(!d)return new l("Invalid "+o+" `"+i+"` key `"+p+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(e[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(t),null,"  "));var y=d(c,p,r,o,i+"."+p,a);if(y)return y}return null}return p(e)}function E(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(E);if(null===e||t(e))return!0;var n=f(e);if(!n)return!1;var r,o=n.call(e);if(n!==e.entries){for(;!(r=o.next()).done;)if(!E(r.value))return!1}else for(;!(r=o.next()).done;){var i=r.value;if(i&&!E(i[1]))return!1}return!0;default:return!1}}function S(t,e){return"symbol"===t||("Symbol"===e["@@toStringTag"]||"function"==typeof Symbol&&e instanceof Symbol)}function j(t){var e=typeof t;return Array.isArray(t)?"array":t instanceof RegExp?"object":S(e,t)?"symbol":e}function T(t){if(void 0===t||null===t)return""+t;var e=j(t);if("object"===e){if(t instanceof Date)return"date";if(t instanceof RegExp)return"regexp"}return e}function P(t){var e=T(t);switch(e){case"array":case"object":return"an "+e;case"boolean":case"date":case"regexp":return"a "+e;default:return e}}function k(t){return t.constructor&&t.constructor.name?t.constructor.name:R}var M="function"==typeof Symbol&&Symbol.iterator,N="@@iterator",R="<<anonymous>>",A={array:d("array"),bool:d("boolean"),func:d("function"),number:d("number"),object:d("object"),string:d("string"),symbol:d("symbol"),any:y(),arrayOf:v,element:h(),instanceOf:m,node:w(),objectOf:g,oneOf:b,oneOfType:O,shape:x,exact:_};return l.prototype=Error.prototype,A.checkPropTypes=c,A.PropTypes=A,A}}).call(e,n(13))},function(t,e,n){(function(e){if("production"!==e.env.NODE_ENV){var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,o=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===r};t.exports=n(104)(o,!0)}else t.exports=n(103)()}).call(e,n(13))},function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(48),i=r(o);e.default=i.default}])});

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_overdrive__ = __webpack_require__("./node_modules/react-overdrive/lib/Overdrive.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_overdrive___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_overdrive__);
var _jsxFileName = "/Users/gbuoncompagni/localDEV/letlovin/pages/index.js";




 // Helper vars and functions.

function extend(a, b) {
  for (var key in b) {
    if (b.hasOwnProperty(key)) {
      a[key] = b[key];
    }
  }

  return a;
} // from http://www.quirksmode.org/js/events_properties.html#position


function getMousePos(e) {
  var posx = 0,
      posy = 0;
  if (!e) var e = window.event;

  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  return {
    x: posx,
    y: posy
  };
}
/**
 * TiltFx obj.
 */


function TiltFx(el, options) {
  this.DOM = {};
  this.DOM.el = el;
  this.options = extend({}, this.options);
  extend(this.options, options);

  this._init();
}

TiltFx.prototype.options = {
  movement: {
    imgWrapper: {
      translation: {
        x: 0,
        y: 0,
        z: 0
      },
      rotation: {
        x: -5,
        y: 5,
        z: 0
      },
      reverseAnimation: {
        duration: 1200,
        easing: 'easeOutElastic',
        elasticity: 600
      }
    },
    lines: {
      translation: {
        x: 10,
        y: 10,
        z: [0, 10]
      },
      reverseAnimation: {
        duration: 1000,
        easing: 'easeOutExpo',
        elasticity: 600
      }
    },
    caption: {
      translation: {
        x: 20,
        y: 20,
        z: 0
      },
      rotation: {
        x: 0,
        y: 0,
        z: 0
      },
      reverseAnimation: {
        duration: 1500,
        easing: 'easeOutElastic',
        elasticity: 600
      }
    },

    /*
    overlay : {
    	translation : {x: 10, y: 10, z: [0,50]},
    	reverseAnimation : {
    		duration : 500,
    		easing : 'easeOutExpo'
    	}
    },
    */
    shine: {
      translation: {
        x: 50,
        y: 50,
        z: 0
      },
      reverseAnimation: {
        duration: 1200,
        easing: 'easeOutElastic',
        elasticity: 600
      }
    }
  }
};
/**
 * Init.
 */

TiltFx.prototype._init = function () {
  this.DOM.animatable = {};
  this.DOM.animatable.imgWrapper = this.DOM.el.querySelector('.tilter__figure');
  this.DOM.animatable.lines = this.DOM.el.querySelector('.tilter__deco--lines');
  this.DOM.animatable.caption = this.DOM.el.querySelector('.tilter__caption');
  this.DOM.animatable.overlay = this.DOM.el.querySelector('.tilter__deco--overlay');
  this.DOM.animatable.shine = this.DOM.el.querySelector('.tilter__deco--shine > div');

  this._initEvents();
};
/**
 * Init/Bind events.
 */


TiltFx.prototype._initEvents = function () {
  var self = this;

  this.mouseenterFn = function () {
    for (var key in self.DOM.animatable) {
      anime.remove(self.DOM.animatable[key]);
    }
  };

  this.mousemoveFn = function (ev) {
    requestAnimationFrame(function () {
      self._layout(ev);
    });
  };

  this.mouseleaveFn = function (ev) {
    requestAnimationFrame(function () {
      for (var key in self.DOM.animatable) {
        if (self.options.movement[key] == undefined) {
          continue;
        }

        anime({
          targets: self.DOM.animatable[key],
          duration: self.options.movement[key].reverseAnimation != undefined ? self.options.movement[key].reverseAnimation.duration || 0 : 1,
          easing: self.options.movement[key].reverseAnimation != undefined ? self.options.movement[key].reverseAnimation.easing || 'linear' : 'linear',
          elasticity: self.options.movement[key].reverseAnimation != undefined ? self.options.movement[key].reverseAnimation.elasticity || null : null,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
          translateX: 0,
          translateY: 0,
          translateZ: 0,
          rotateX: 0,
          rotateY: 0,
          rotateZ: 0
        });
      }
    });
  };

  this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
  this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
  this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
};

TiltFx.prototype._layout = function (ev) {
  // Mouse position relative to the document.
  var mousepos = getMousePos(ev),
      // Document scrolls.
  docScrolls = {
    left: document.body.scrollLeft + document.documentElement.scrollLeft,
    top: document.body.scrollTop + document.documentElement.scrollTop
  },
      bounds = this.DOM.el.getBoundingClientRect(),
      // Mouse position relative to the main element (this.DOM.el).
  relmousepos = {
    x: mousepos.x - bounds.left - docScrolls.left,
    y: mousepos.y - bounds.top - docScrolls.top
  }; // Movement settings for the animatable elements.

  for (var key in this.DOM.animatable) {
    if (this.DOM.animatable[key] == undefined || this.options.movement[key] == undefined) {
      continue;
    }

    var t = this.options.movement[key] != undefined ? this.options.movement[key].translation || {
      x: 0,
      y: 0,
      z: 0
    } : {
      x: 0,
      y: 0,
      z: 0
    },
        r = this.options.movement[key] != undefined ? this.options.movement[key].rotation || {
      x: 0,
      y: 0,
      z: 0
    } : {
      x: 0,
      y: 0,
      z: 0
    },
        setRange = function setRange(obj) {
      for (var k in obj) {
        if (obj[k] == undefined) {
          obj[k] = [0, 0];
        } else if (typeof obj[k] === 'number') {
          obj[k] = [-1 * obj[k], obj[k]];
        }
      }
    };

    setRange(t);
    setRange(r);
    var transforms = {
      translation: {
        x: (t.x[1] - t.x[0]) / bounds.width * relmousepos.x + t.x[0],
        y: (t.y[1] - t.y[0]) / bounds.height * relmousepos.y + t.y[0],
        z: (t.z[1] - t.z[0]) / bounds.height * relmousepos.y + t.z[0]
      },
      rotation: {
        x: (r.x[1] - r.x[0]) / bounds.height * relmousepos.y + r.x[0],
        y: (r.y[1] - r.y[0]) / bounds.width * relmousepos.x + r.y[0],
        z: (r.z[1] - r.z[0]) / bounds.width * relmousepos.x + r.z[0]
      }
    };
    this.DOM.animatable[key].style.WebkitTransform = this.DOM.animatable[key].style.transform = 'translateX(' + transforms.translation.x + 'px) translateY(' + transforms.translation.y + 'px) translateZ(' + transforms.translation.z + 'px) rotateX(' + transforms.rotation.x + 'deg) rotateY(' + transforms.rotation.y + 'deg) rotateZ(' + transforms.rotation.z + 'deg)';
  }
};

window.TiltFx = TiltFx;

var index = function index() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], {
    title: "Home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "test",
    style: {
      'width': '100vw',
      'height': '100vh',
      'background': 'url(static/lwr-bg.jpg) center no-repeat',
      'position': 'fixed',
      'top': '0',
      'left': '0',
      'backgroundSize': 'cover',
      'perspective': '1000px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "title",
    style: {
      'width': '100vw',
      'height': '100vh',
      'background': 'url(static/lwr-title.png) center no-repeat',
      'position': 'fixed',
      'top': '0',
      'left': '0',
      'backgroundSize': 'cover'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "max",
    style: {
      'width': '100vw',
      'height': '100vh',
      'background': 'url(static/lwr-max.png) center no-repeat',
      'position': 'fixed',
      'top': '0',
      'left': '0',
      'backgroundSize': 'cover'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (index);
{
  /* {characters.map(character => (
            <Link key={character.id}
              href={`/about?id=${character.id}&name=${character.name}&image=${character.image}`}>
              <a>
                <Overdrive id={character.id} style={{'display':'inline-block'}} >
                  <img style={{'display':'inline-block', 'width':'100px', 'height':'100px', 'border':'2px solid'}}  src={`https://cdn.filestackcontent.com/${character.image}`} />
                </Overdrive>
              </a>
            </Link>
          ))} */
}
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ })

},[3])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=index.js.map