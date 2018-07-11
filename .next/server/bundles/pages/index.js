module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
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

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_overdrive__ = __webpack_require__("react-overdrive");
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

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-overdrive":
/***/ (function(module, exports) {

module.exports = require("react-overdrive");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map