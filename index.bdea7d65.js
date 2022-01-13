// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hMwtF":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "222e65dabdea7d65";
"use strict";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"7PGg5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _canvasView = require("./view/CanvasView");
var _ball = require("./sprites/Ball");
var _paddle = require("./sprites/Paddle");
var _collision = require("./Collision");
//  Images
var _ballPng = require("./images/ball.png");
var _ballPngDefault = parcelHelpers.interopDefault(_ballPng);
var _paddlePng = require("./images/paddle.png");
var _paddlePngDefault = parcelHelpers.interopDefault(_paddlePng);
// Level & Colours
var _setup = require("./setup");
var _helpers = require("./helpers");
console.log("TS Loaded 👾");
let gameOver = false;
let score = 0;
function setGameOver(view1) {
    view1.drawInfo('Game Over!');
    gameOver = false;
}
function setGameWin(view2) {
    view2.drawInfo('You Win');
    gameOver = false;
}
function gameLoop(view3, bricks, ball, paddle, collision) {
    view3.clear();
    view3.drawBricks(bricks);
    view3.drawSprite(paddle);
    view3.drawSprite(ball);
    //  Move Ball
    ball.moveBall();
    // Move paddle + check it stays within the game canvas
    if (paddle.isMovingLeft && paddle.pos.x > 0 || paddle.isMovineRight && paddle.pos.x < view3.canvas.width - paddle.width) paddle.movePaddle();
    collision.checkBallCollision(ball, paddle, view3);
    const collidingBrick = collision.isCollidingBricks(ball, bricks);
    if (collidingBrick) {
        score += 1;
        view3.drawScore(score);
    }
    // Game over when ball leaves game field
    if (ball.pos.y > view3.canvas.height) gameOver = true;
    // If game won set gameover + display win
    if (bricks.length === 0) return setGameWin(view3);
    // return if gameover and dont run requestAnimationFrame
    if (gameOver) return setGameOver(view3);
    requestAnimationFrame(()=>gameLoop(view3, bricks, ball, paddle, collision)
    );
}
function startGame(view4) {
    // Reset displays
    score = 0;
    view4.drawInfo('');
    view4.drawScore(0);
    // Create collision instance
    const collision = new _collision.Collision();
    // Create all bricks
    const bricks = _helpers.createBricks();
    // Create Ball
    const ball = new _ball.Ball(_setup.BALL_SPEED, _setup.BALL_SIZE, {
        x: _setup.BALL_STARTX,
        y: _setup.BALL_STARTY
    }, _ballPngDefault.default);
    // Create paddle
    const paddle = new _paddle.Paddle(_setup.PADDLE_SPEED, _setup.PADDLE_WIDTH, _setup.PADDLE_HEIGHT, {
        x: _setup.PADDLE_STARTX,
        y: view4.canvas.height - _setup.PADDLE_HEIGHT - 5
    }, _paddlePngDefault.default);
    gameLoop(view4, bricks, ball, paddle, collision);
}
// Create a new view
const view = new _canvasView.CanvasView('#game-canvas');
view.initStartButton(startGame);

},{"./view/CanvasView":"cE3vc","./sprites/Ball":"1Tme8","./sprites/Paddle":"dwfDQ","./Collision":"hIGtx","./images/ball.png":"i6RJO","./images/paddle.png":"aAktw","./setup":"hVA4U","./helpers":"bAueM","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"cE3vc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CanvasView", ()=>CanvasView
);
class CanvasView {
    constructor(canvasName){
        this.canvas = document.querySelector(canvasName);
        this.context = this.canvas.getContext('2d');
        this.scoreDisplay = document.querySelector('#score');
        this.start = document.querySelector('#start');
        this.info = document.querySelector('#info');
    }
    clear() {
        this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    initStartButton(startFunction) {
        this.start?.addEventListener('click', ()=>startFunction(this)
        );
    }
    drawScore(score) {
        if (this.scoreDisplay) this.scoreDisplay.innerHTML = score.toString();
    }
    drawInfo(text) {
        if (this.info) this.info.innerHTML = text;
    }
    drawSprite(brick) {
        if (!brick) return;
        this.context?.drawImage(brick.image, brick.pos.x, brick.pos.y, brick.width, brick.height);
    }
    drawBricks(bricks) {
        bricks.forEach((brick)=>this.drawSprite(brick)
        );
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"1Tme8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Ball", ()=>Ball
);
class Ball {
    constructor(speed, ballSize, position, image){
        this.ballSize = ballSize;
        this.position = position;
        this.ballImage = new Image();
        this.speed = {
            x: speed,
            y: -speed
        }, this.ballSize = ballSize;
        this.position = position;
        this.ballImage.src = image;
    }
    // Getters
    get width() {
        return this.ballSize;
    }
    get height() {
        return this.ballSize;
    }
    get pos() {
        return this.position;
    }
    get image() {
        return this.ballImage;
    }
    // Methods
    changeYDirection() {
        this.speed.y = -this.speed.y;
    }
    changeXDirection() {
        this.speed.x = -this.speed.x;
    }
    moveBall() {
        this.pos.x += this.speed.x;
        this.pos.y += this.speed.y;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dwfDQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Paddle", ()=>Paddle
);
class Paddle {
    constructor(speed, paddleWidth, paddleHeight, position, image){
        this.speed = speed;
        this.paddleWidth = paddleWidth;
        this.paddleHeight = paddleHeight;
        this.position = position;
        this.PaddleImage = new Image();
        this.handleKeyUp = (e)=>{
            if (e.code === "ArrowLeft" || e.key === "ArrowLeft") this.moveLeft = false;
            if (e.code === "ArrowRight" || e.key === "ArrowRight") this.moveRight = false;
        };
        this.handleKeyDown = (e)=>{
            if (e.code === "ArrowLeft" || e.key === "ArrowLeft") this.moveLeft = true;
            if (e.code === "ArrowRight" || e.key === "ArrowRight") this.moveRight = true;
        };
        this.speed = speed;
        this.paddleWidth = paddleWidth;
        this.paddleHeight = paddleHeight;
        this.position = position;
        this.moveLeft = false;
        this.moveRight = false;
        this.PaddleImage.src = image;
        // Event listeners
        document.addEventListener('keydown', this.handleKeyDown);
        document.addEventListener('keyup', this.handleKeyUp);
    }
    //  Getters
    get width() {
        return this.paddleWidth;
    }
    get height() {
        return this.paddleHeight;
    }
    get pos() {
        return this.position;
    }
    get image() {
        return this.PaddleImage;
    }
    get isMovingLeft() {
        return this.moveLeft;
    }
    get isMovineRight() {
        return this.moveRight;
    }
    movePaddle() {
        if (this.moveLeft) this.pos.x -= this.speed;
        if (this.moveRight) this.pos.x += this.speed;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hIGtx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Collision", ()=>Collision
);
class Collision {
    checkBallCollision(ball, paddle, view) {
        // Check ball collision with paddle
        if (ball.pos.x + ball.width > paddle.pos.x && ball.pos.x < paddle.pos.x + paddle.width && ball.pos.y + ball.height === paddle.pos.y) ball.changeYDirection();
        // Check ball collision with walls
        if (ball.pos.x > view.canvas.width - ball.width || ball.pos.x < 0) ball.changeXDirection();
        // Ball movement Y constraints
        if (ball.pos.y < 0) ball.changeYDirection();
    }
    isCollidingBrick(ball, brick) {
        if (ball.pos.x < brick.pos.x + brick.width && ball.pos.x + ball.width > brick.pos.x && ball.pos.y < brick.pos.y + brick.height && ball.pos.y + ball.height > brick.pos.y) return true;
        return false;
    }
    // check ball collision with bricks
    isCollidingBricks(ball, bricks) {
        let colliding = false;
        bricks.forEach((brick, i)=>{
            if (this.isCollidingBrick(ball, brick)) {
                ball.changeYDirection();
                if (brick.energy === 1) bricks.splice(i, 1);
                else brick.energy -= 1;
                colliding = true;
            }
        });
        return colliding;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"i6RJO":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2VWEd') + "ball.ef665b48.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"chiK4":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"aAktw":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2VWEd') + "paddle.ddd2175c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"hVA4U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "STAGE_PADDING", ()=>STAGE_PADDING
);
parcelHelpers.export(exports, "STAGE_ROWS", ()=>STAGE_ROWS
);
parcelHelpers.export(exports, "STAGE_COLS", ()=>STAGE_COLS
);
parcelHelpers.export(exports, "BRICK_PADDING", ()=>BRICK_PADDING
);
parcelHelpers.export(exports, "BRICK_WIDTH", ()=>BRICK_WIDTH
);
parcelHelpers.export(exports, "BRICK_HEIGHT", ()=>BRICK_HEIGHT
);
parcelHelpers.export(exports, "PADDLE_WIDTH", ()=>PADDLE_WIDTH
);
parcelHelpers.export(exports, "PADDLE_HEIGHT", ()=>PADDLE_HEIGHT
);
parcelHelpers.export(exports, "PADDLE_STARTX", ()=>PADDLE_STARTX
);
parcelHelpers.export(exports, "PADDLE_SPEED", ()=>PADDLE_SPEED
);
parcelHelpers.export(exports, "BALL_SPEED", ()=>BALL_SPEED
);
parcelHelpers.export(exports, "BALL_SIZE", ()=>BALL_SIZE
);
parcelHelpers.export(exports, "BALL_STARTX", ()=>BALL_STARTX
);
parcelHelpers.export(exports, "BALL_STARTY", ()=>BALL_STARTY
);
parcelHelpers.export(exports, "BRICK_IMAGES", ()=>BRICK_IMAGES
);
parcelHelpers.export(exports, "BRICK_ENERGY", ()=>BRICK_ENERGY
);
parcelHelpers.export(exports, "LEVEL", ()=>LEVEL
);
var _brickRedPng = require("./images/brick-red.png");
var _brickRedPngDefault = parcelHelpers.interopDefault(_brickRedPng);
var _brickBluePng = require("./images/brick-blue.png");
var _brickBluePngDefault = parcelHelpers.interopDefault(_brickBluePng);
var _brickGreenPng = require("./images/brick-green.png");
var _brickGreenPngDefault = parcelHelpers.interopDefault(_brickGreenPng);
var _brickYellowPng = require("./images/brick-yellow.png");
var _brickYellowPngDefault = parcelHelpers.interopDefault(_brickYellowPng);
var _brickPurplePng = require("./images/brick-purple.png");
var _brickPurplePngDefault = parcelHelpers.interopDefault(_brickPurplePng);
// Grab the canvas element for calculating the brick width
// depending on canvas width
const canvas = document.querySelector('#playField');
const STAGE_PADDING = 10;
const STAGE_ROWS = 20;
const STAGE_COLS = 10;
const BRICK_PADDING = 5;
const BRICK_WIDTH = canvas ? Math.floor((canvas.width - STAGE_PADDING * 2) / STAGE_COLS) - BRICK_PADDING : 100;
const BRICK_HEIGHT = canvas ? Math.floor((canvas.height - STAGE_PADDING * 2) / STAGE_ROWS) - BRICK_PADDING : 30;
const PADDLE_WIDTH = 150;
const PADDLE_HEIGHT = 25;
const PADDLE_STARTX = 450;
const PADDLE_SPEED = 10;
const BALL_SPEED = 5;
const BALL_SIZE = 20;
const BALL_STARTX = 500;
const BALL_STARTY = 400;
const BRICK_IMAGES = {
    1: _brickRedPngDefault.default,
    2: _brickGreenPngDefault.default,
    3: _brickYellowPngDefault.default,
    4: _brickBluePngDefault.default,
    5: _brickPurplePngDefault.default
};
const BRICK_ENERGY = {
    1: 1,
    2: 1,
    3: 2,
    4: 2,
    5: 3 // Purple brick
};
const LEVEL = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    0,
    0,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    0,
    0,
    0,
    4,
    4,
    4,
    4,
    4,
    4,
    0,
    0,
    0,
    0,
    5,
    5,
    0,
    0,
    5,
    5,
    0,
    0, 
];

},{"./images/brick-red.png":"4FbQq","./images/brick-blue.png":"cokB3","./images/brick-green.png":"6EEol","./images/brick-yellow.png":"kH5bT","./images/brick-purple.png":"exd12","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4FbQq":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2VWEd') + "brick-red.e44c2b0a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"cokB3":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2VWEd') + "brick-blue.362fbd87.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"6EEol":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2VWEd') + "brick-green.63868a52.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"kH5bT":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2VWEd') + "brick-yellow.f7c276bc.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"exd12":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('2VWEd') + "brick-purple.75104505.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"bAueM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createBricks", ()=>createBricks
);
var _brick = require("./sprites/Brick");
var _setup = require("./setup");
function createBricks() {
    return _setup.LEVEL.reduce((acc, element, i)=>{
        const row = Math.floor((i + 1) / _setup.STAGE_COLS);
        const col = i % _setup.STAGE_COLS;
        const x = _setup.STAGE_PADDING + col * (_setup.BRICK_WIDTH + _setup.BRICK_PADDING);
        const y = _setup.STAGE_PADDING + row * (_setup.BRICK_HEIGHT + _setup.BRICK_PADDING);
        if (element === 0) return acc;
        return [
            ...acc,
            new _brick.Brick(_setup.BRICK_WIDTH, _setup.BRICK_HEIGHT, {
                x,
                y
            }, _setup.BRICK_ENERGY[element], _setup.BRICK_IMAGES[element])
        ];
    }, []);
}

},{"./sprites/Brick":"dhhnQ","./setup":"hVA4U","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dhhnQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Brick", ()=>Brick
);
class Brick {
    constructor(brickWidth, brickHeight, position, brickEnergy, image){
        this.brickWidth = brickWidth;
        this.brickHeight = brickHeight;
        this.position = position;
        this.brickEnergy = brickEnergy;
        this.brickImage = new Image();
        this.brickWidth = brickWidth;
        this.brickHeight = brickHeight;
        this.position = position;
        this.brickEnergy = brickEnergy;
        this.brickImage.src = image;
    }
    // Getters
    get width() {
        return this.brickWidth;
    }
    get height() {
        return this.brickHeight;
    }
    get image() {
        return this.brickImage;
    }
    get energy() {
        return this.brickEnergy;
    }
    get pos() {
        return this.position;
    }
    // Setters
    set energy(energy) {
        this.brickEnergy = energy;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["hMwtF","7PGg5"], "7PGg5", "parcelRequire2b52")

//# sourceMappingURL=index.bdea7d65.js.map
