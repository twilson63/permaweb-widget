(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/crocks/core/isFunction.js
  var require_isFunction = __commonJS({
    "node_modules/crocks/core/isFunction.js"(exports, module) {
      function isFunction(fn) {
        return typeof fn === "function";
      }
      module.exports = isFunction;
    }
  });

  // node_modules/crocks/core/curry.js
  var require_curry = __commonJS({
    "node_modules/crocks/core/curry.js"(exports, module) {
      var isFunction = require_isFunction();
      var CURRY_SYMB = "@@crocks/curried";
      function applyCurry(fn, arg) {
        if (!isFunction(fn)) {
          return fn;
        }
        return fn.length > 1 ? fn.bind(null, arg) : fn.call(null, arg);
      }
      function curry(fn) {
        if (fn[CURRY_SYMB]) {
          return fn;
        }
        function curried() {
          var xs = [], len = arguments.length;
          while (len--)
            xs[len] = arguments[len];
          var args = xs.length ? xs : [void 0];
          if (args.length < fn.length) {
            return curry(Function.bind.apply(fn, [null].concat(args)));
          }
          var val = args.length === fn.length ? fn.apply(null, args) : args.reduce(applyCurry, fn);
          if (isFunction(val)) {
            return curry(val);
          }
          return val;
        }
        Object.defineProperty(curried, CURRY_SYMB, {
          enumerable: false,
          writable: false,
          value: true
        });
        return curried;
      }
      module.exports = curry;
    }
  });

  // node_modules/crocks/combinators/applyTo.js
  var require_applyTo = __commonJS({
    "node_modules/crocks/combinators/applyTo.js"(exports, module) {
      var curry = require_curry();
      var isFunction = require_isFunction();
      function applyTo(x, f) {
        if (!isFunction(f)) {
          throw new TypeError("applyTo: Function required for second argument");
        }
        return f(x);
      }
      module.exports = curry(applyTo);
    }
  });

  // node_modules/crocks/combinators/compose2.js
  var require_compose2 = __commonJS({
    "node_modules/crocks/combinators/compose2.js"(exports, module) {
      var curry = require_curry();
      var isFunction = require_isFunction();
      function compose2(f, g, h, x, y) {
        if (!isFunction(f) || !isFunction(g) || !isFunction(h)) {
          throw new TypeError("compose2: First, second and third arguments must be functions");
        }
        return curry(f)(g(x), h(y));
      }
      module.exports = curry(compose2);
    }
  });

  // node_modules/crocks/core/compose.js
  var require_compose = __commonJS({
    "node_modules/crocks/core/compose.js"(exports, module) {
      function compose2(f, g) {
        return function(x) {
          return f(g(x));
        };
      }
      module.exports = compose2;
    }
  });

  // node_modules/crocks/combinators/composeB.js
  var require_composeB = __commonJS({
    "node_modules/crocks/combinators/composeB.js"(exports, module) {
      var compose2 = require_compose();
      var curry = require_curry();
      var isFunction = require_isFunction();
      function composeB(f, g) {
        if (!(isFunction(f) && isFunction(g))) {
          throw new TypeError(
            "composeB: Functions required for first two arguments"
          );
        }
        return compose2(f, g);
      }
      module.exports = curry(composeB);
    }
  });

  // node_modules/crocks/combinators/constant.js
  var require_constant = __commonJS({
    "node_modules/crocks/combinators/constant.js"(exports, module) {
      var curry = require_curry();
      var constant = function(x) {
        return function() {
          return x;
        };
      };
      module.exports = curry(constant);
    }
  });

  // node_modules/crocks/combinators/converge.js
  var require_converge = __commonJS({
    "node_modules/crocks/combinators/converge.js"(exports, module) {
      var curry = require_curry();
      var isFunction = require_isFunction();
      function converge(f, g, h, x) {
        if (!isFunction(f) || !isFunction(g) || !isFunction(h)) {
          throw new TypeError("converge: Functions required for first three arguments");
        }
        return curry(f)(g(x), h(x));
      }
      module.exports = curry(converge);
    }
  });

  // node_modules/crocks/combinators/flip.js
  var require_flip = __commonJS({
    "node_modules/crocks/combinators/flip.js"(exports, module) {
      var curry = require_curry();
      var isFunction = require_isFunction();
      function flip(f, x, y) {
        if (!isFunction(f)) {
          throw new TypeError(
            "flip: Function required for first argument"
          );
        }
        return curry(f)(y, x);
      }
      module.exports = curry(flip);
    }
  });

  // node_modules/crocks/combinators/identity.js
  var require_identity = __commonJS({
    "node_modules/crocks/combinators/identity.js"(exports, module) {
      var identity2 = function(x) {
        return x;
      };
      module.exports = identity2;
    }
  });

  // node_modules/crocks/combinators/psi.js
  var require_psi = __commonJS({
    "node_modules/crocks/combinators/psi.js"(exports, module) {
      var curry = require_curry();
      var isFunction = require_isFunction();
      function psi(f, g, x, y) {
        if (!isFunction(f) || !isFunction(g)) {
          throw new TypeError("psi: First and second arguments must be functions");
        }
        return curry(f)(g(x), g(y));
      }
      module.exports = curry(psi);
    }
  });

  // node_modules/crocks/combinators/substitution.js
  var require_substitution = __commonJS({
    "node_modules/crocks/combinators/substitution.js"(exports, module) {
      var curry = require_curry();
      var isFunction = require_isFunction();
      function substitution(f, g, x) {
        if (!(isFunction(f) && isFunction(g))) {
          throw new TypeError(
            "substitution: Functions required for first two arguments"
          );
        }
        return curry(f)(x, g(x));
      }
      module.exports = curry(substitution);
    }
  });

  // node_modules/crocks/combinators/index.js
  var require_combinators = __commonJS({
    "node_modules/crocks/combinators/index.js"(exports, module) {
      module.exports = {
        applyTo: require_applyTo(),
        compose2: require_compose2(),
        composeB: require_composeB(),
        constant: require_constant(),
        converge: require_converge(),
        flip: require_flip(),
        identity: require_identity(),
        psi: require_psi(),
        substitution: require_substitution()
      };
    }
  });

  // node_modules/crocks/core/types.js
  var require_types = __commonJS({
    "node_modules/crocks/core/types.js"(exports, module) {
      var _types = {
        "unk": function() {
          return "unknown";
        },
        "All": function() {
          return "All";
        },
        "Any": function() {
          return "Any";
        },
        "Arrow": function() {
          return "Arrow";
        },
        "Assign": function() {
          return "Assign";
        },
        "Async": function() {
          return "Async";
        },
        "Const": function(inner) {
          return "Const(" + inner + ")";
        },
        "Either": function() {
          return "Either";
        },
        "Endo": function() {
          return "Endo";
        },
        "Equiv": function() {
          return "Equiv";
        },
        "First": function() {
          return "First";
        },
        "Identity": function() {
          return "Identity";
        },
        "IO": function() {
          return "IO";
        },
        "Last": function() {
          return "Last";
        },
        "List": function() {
          return "List";
        },
        "Max": function() {
          return "Max";
        },
        "Maybe": function() {
          return "Maybe";
        },
        "Min": function() {
          return "Min";
        },
        "Pair": function() {
          return "Pair";
        },
        "Pred": function() {
          return "Pred";
        },
        "Prod": function() {
          return "Prod";
        },
        "Reader": function() {
          return "Reader";
        },
        "Result": function() {
          return "Result";
        },
        "Star": function() {
          return "Star";
        },
        "State": function() {
          return "State";
        },
        "Sum": function() {
          return "Sum";
        },
        "Tuple": function(n) {
          return n + "-Tuple";
        },
        "Unit": function() {
          return "Unit";
        },
        "Writer": function() {
          return "Writer";
        }
      };
      var type3 = function(type4) {
        return _types[type4] || _types["unk"];
      };
      var proxy = function(t2, ctx) {
        return { type: function() {
          return type3(t2)(ctx);
        } };
      };
      var typeFn = function(t2, ver, ctx) {
        var typeStr = type3(t2)(ctx);
        return "crocks/" + typeStr + "@" + (ver || 0);
      };
      module.exports = {
        proxy,
        type: type3,
        typeFn
      };
    }
  });

  // node_modules/crocks/core/type.js
  var require_type = __commonJS({
    "node_modules/crocks/core/type.js"(exports, module) {
      var isFunction = require_isFunction();
      function type3(x) {
        if (x) {
          if (isFunction(x.type)) {
            return x.type();
          }
        }
        return {}.toString.call(x).slice(8, -1);
      }
      module.exports = type3;
    }
  });

  // node_modules/crocks/core/isSameType.js
  var require_isSameType = __commonJS({
    "node_modules/crocks/core/isSameType.js"(exports, module) {
      var curry = require_curry();
      var isFunction = require_isFunction();
      var type3 = require_type();
      function isSameType(x, y) {
        var tX = type3(x);
        var tY = type3(y);
        return tX === tY || isFunction(x) && x.name === tY || isFunction(y) && y.name === tX;
      }
      module.exports = curry(isSameType);
    }
  });

  // node_modules/crocks/core/isPredOrFunc.js
  var require_isPredOrFunc = __commonJS({
    "node_modules/crocks/core/isPredOrFunc.js"(exports, module) {
      var Pred = require_types().proxy("Pred");
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var isPredOrFunc = function(predOrFunc) {
        return isFunction(predOrFunc) || isSameType(Pred, predOrFunc);
      };
      module.exports = isPredOrFunc;
    }
  });

  // node_modules/crocks/core/predOrFunc.js
  var require_predOrFunc = __commonJS({
    "node_modules/crocks/core/predOrFunc.js"(exports, module) {
      var isFunction = require_isFunction();
      function predOrFunc(pred, x) {
        if (isFunction(pred)) {
          return pred(x);
        }
        return pred.runWith(x);
      }
      module.exports = predOrFunc;
    }
  });

  // node_modules/crocks/logic/and.js
  var require_and = __commonJS({
    "node_modules/crocks/logic/and.js"(exports, module) {
      var curry = require_curry();
      var isPredOrFunc = require_isPredOrFunc();
      var predOrFunc = require_predOrFunc();
      function and(f, g) {
        if (!(isPredOrFunc(f) && isPredOrFunc(g))) {
          throw new TypeError(
            "and: Preds or predicate functions required for first two arguments"
          );
        }
        return function(x) {
          return !!(predOrFunc(f, x) && predOrFunc(g, x));
        };
      }
      module.exports = curry(and);
    }
  });

  // node_modules/crocks/logic/ifElse.js
  var require_ifElse = __commonJS({
    "node_modules/crocks/logic/ifElse.js"(exports, module) {
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isPredOrFunc = require_isPredOrFunc();
      var predOrFunc = require_predOrFunc();
      function ifElse(pred, f, g) {
        if (!isPredOrFunc(pred)) {
          throw new TypeError(
            "ifElse: Pred or predicate function required for first argument"
          );
        }
        if (!(isFunction(f) && isFunction(g))) {
          throw new TypeError(
            "ifElse: Functions required for second and third arguments"
          );
        }
        return function(x) {
          return predOrFunc(pred, x) ? f(x) : g(x);
        };
      }
      module.exports = curry(ifElse);
    }
  });

  // node_modules/crocks/logic/implies.js
  var require_implies = __commonJS({
    "node_modules/crocks/logic/implies.js"(exports, module) {
      var curry = require_curry();
      var isPredOrFunc = require_isPredOrFunc();
      var predOrFunc = require_predOrFunc();
      function implies(p, q) {
        if (!(isPredOrFunc(p) && isPredOrFunc(q))) {
          throw new TypeError(
            "implies: Preds or predicate functions required for first two arguments"
          );
        }
        return function(x) {
          return !predOrFunc(p, x) || !!predOrFunc(q, x);
        };
      }
      module.exports = curry(implies);
    }
  });

  // node_modules/crocks/logic/not.js
  var require_not = __commonJS({
    "node_modules/crocks/logic/not.js"(exports, module) {
      var curry = require_curry();
      var isPredOrFunc = require_isPredOrFunc();
      var predOrFunc = require_predOrFunc();
      function not(pred, x) {
        if (!isPredOrFunc(pred)) {
          throw new TypeError(
            "not: Pred or predicate function required for first argument"
          );
        }
        return !predOrFunc(pred, x);
      }
      module.exports = curry(not);
    }
  });

  // node_modules/crocks/logic/or.js
  var require_or = __commonJS({
    "node_modules/crocks/logic/or.js"(exports, module) {
      var curry = require_curry();
      var isPredOrFunc = require_isPredOrFunc();
      var predOrFunc = require_predOrFunc();
      function or(f, g) {
        if (!(isPredOrFunc(f) && isPredOrFunc(g))) {
          throw new TypeError(
            "or: Preds or predicate functions required for first two arguments"
          );
        }
        return function(x) {
          return !!(predOrFunc(f, x) || predOrFunc(g, x));
        };
      }
      module.exports = curry(or);
    }
  });

  // node_modules/crocks/logic/unless.js
  var require_unless = __commonJS({
    "node_modules/crocks/logic/unless.js"(exports, module) {
      var curry = require_curry();
      var isPredOrFunc = require_isPredOrFunc();
      var isFunction = require_isFunction();
      var predOrFunc = require_predOrFunc();
      function unless(pred, f) {
        if (!isPredOrFunc(pred)) {
          throw new TypeError(
            "unless: Pred or predicate function required for first argument"
          );
        }
        if (!isFunction(f)) {
          throw new TypeError(
            "unless: Function required for second argument"
          );
        }
        return function(x) {
          return !predOrFunc(pred, x) ? f(x) : x;
        };
      }
      module.exports = curry(unless);
    }
  });

  // node_modules/crocks/logic/when.js
  var require_when = __commonJS({
    "node_modules/crocks/logic/when.js"(exports, module) {
      var curry = require_curry();
      var predOrFunc = require_predOrFunc();
      var isPredOrFunc = require_isPredOrFunc();
      var isFunction = require_isFunction();
      function when(pred, f) {
        if (!isPredOrFunc(pred)) {
          throw new TypeError(
            "when: Pred or predicate function required for first argument"
          );
        }
        if (!isFunction(f)) {
          throw new TypeError(
            "when: Function required for second argument"
          );
        }
        return function(x) {
          return predOrFunc(pred, x) ? f(x) : x;
        };
      }
      module.exports = curry(when);
    }
  });

  // node_modules/crocks/logic/index.js
  var require_logic = __commonJS({
    "node_modules/crocks/logic/index.js"(exports, module) {
      module.exports = {
        and: require_and(),
        ifElse: require_ifElse(),
        implies: require_implies(),
        not: require_not(),
        or: require_or(),
        unless: require_unless(),
        when: require_when()
      };
    }
  });

  // node_modules/crocks/core/isDefined.js
  var require_isDefined = __commonJS({
    "node_modules/crocks/core/isDefined.js"(exports, module) {
      function isDefined(x) {
        return x !== void 0;
      }
      module.exports = isDefined;
    }
  });

  // node_modules/crocks/core/isObject.js
  var require_isObject = __commonJS({
    "node_modules/crocks/core/isObject.js"(exports, module) {
      var toString2 = Object.prototype.toString;
      function isObject(x) {
        return !!x && toString2.call(x) === "[object Object]";
      }
      module.exports = isObject;
    }
  });

  // node_modules/crocks/core/flNames.js
  var require_flNames = __commonJS({
    "node_modules/crocks/core/flNames.js"(exports, module) {
      module.exports = {
        alt: "fantasy-land/alt",
        bimap: "fantasy-land/bimap",
        chain: "fantasy-land/chain",
        compose: "fantasy-land/compose",
        concat: "fantasy-land/concat",
        contramap: "fantasy-land/contramap",
        empty: "fantasy-land/empty",
        equals: "fantasy-land/equals",
        extend: "fantasy-land/extend",
        filter: "fantasy-land/filter",
        id: "fantasy-land/id",
        map: "fantasy-land/map",
        of: "fantasy-land/of",
        promap: "fantasy-land/promap",
        reduce: "fantasy-land/reduce",
        zero: "fantasy-land/zero"
      };
    }
  });

  // node_modules/crocks/core/hasAlg.js
  var require_hasAlg = __commonJS({
    "node_modules/crocks/core/hasAlg.js"(exports, module) {
      var isFunction = require_isFunction();
      var fl = require_flNames();
      var check = function(alg, m) {
        return isFunction(m[fl[alg]]) || isFunction(m[alg]);
      };
      var checkImpl = function(alg, m) {
        return isFunction(m["@@implements"]) && !!m["@@implements"](alg);
      };
      var hasAlg = function(alg, m) {
        return !!m && (check(alg, m) || checkImpl(alg, m));
      };
      module.exports = hasAlg;
    }
  });

  // node_modules/crocks/core/isString.js
  var require_isString = __commonJS({
    "node_modules/crocks/core/isString.js"(exports, module) {
      function isString(x) {
        return typeof x === "string";
      }
      module.exports = isString;
    }
  });

  // node_modules/crocks/core/isSemigroup.js
  var require_isSemigroup = __commonJS({
    "node_modules/crocks/core/isSemigroup.js"(exports, module) {
      var isString = require_isString();
      var hasAlg = require_hasAlg();
      function isSemigroup(m) {
        return isString(m) || !!m && hasAlg("concat", m);
      }
      module.exports = isSemigroup;
    }
  });

  // node_modules/crocks/core/isMonoid.js
  var require_isMonoid = __commonJS({
    "node_modules/crocks/core/isMonoid.js"(exports, module) {
      var hasAlg = require_hasAlg();
      var isSemigroup = require_isSemigroup();
      function isMonoid(m) {
        return isSemigroup(m) && (hasAlg("empty", m) || hasAlg("empty", m.constructor));
      }
      module.exports = isMonoid;
    }
  });

  // node_modules/crocks/core/isSame.js
  var require_isSame = __commonJS({
    "node_modules/crocks/core/isSame.js"(exports, module) {
      function isSame(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        }
        return x !== x && y !== y;
      }
      module.exports = isSame;
    }
  });

  // node_modules/crocks/core/equals.js
  var require_equals = __commonJS({
    "node_modules/crocks/core/equals.js"(exports, module) {
      var isSameType = require_isSameType();
      var isSame = require_isSame();
      var hasAlg = require_hasAlg();
      var type3 = require_type();
      var fl = require_flNames();
      var comp = function(a2, b) {
        return a2.valueOf() === b.valueOf();
      };
      var strats = {
        "Array": function(a2, b) {
          return a2.length === b.length && deepEquals(a2, b);
        },
        "Date": function(a2, b) {
          return isSame(a2.valueOf(), b.valueOf());
        },
        "Error": function(a2, b) {
          return a2.name === b.name && a2.message === b.message;
        },
        "Object": function(a2, b) {
          return Object.keys(a2).length === Object.keys(b).length && deepEquals(a2, b);
        },
        "RegExp": function(a2, b) {
          return a2.source === b.source && a2.ignoreCase === b.ignoreCase && a2.global === b.global && a2.multiline === b.multiline && a2.unicode === b.unicode;
        }
      };
      function deepEquals(a2, b) {
        for (var key in a2) {
          if (!equals3(a2[key], b[key])) {
            return false;
          }
        }
        return true;
      }
      function equals3(a2, b) {
        if (isSame(a2, b)) {
          return true;
        }
        if (!isSameType(a2, b)) {
          return false;
        }
        if (hasAlg("equals", a2)) {
          return (b[fl.equals] || b.equals).call(b, a2);
        }
        return (strats[type3(a2)] || comp)(a2, b);
      }
      module.exports = equals3;
    }
  });

  // node_modules/crocks/core/isEmpty.js
  var require_isEmpty = __commonJS({
    "node_modules/crocks/core/isEmpty.js"(exports, module) {
      var isObject = require_isObject();
      var isMonoid = require_isMonoid();
      var equals3 = require_equals();
      var fl = require_flNames();
      function isEmpty(x) {
        if (isMonoid(x)) {
          var empty2 = x.constructor[fl["empty"]] || x.constructor["empty"] || x["empty"];
          return equals3(x, empty2());
        }
        if (isObject(x)) {
          return !Object.keys(x).length;
        }
        if (x && x.length !== void 0) {
          return !x.length;
        }
        return true;
      }
      module.exports = isEmpty;
    }
  });

  // node_modules/crocks/core/isNumber.js
  var require_isNumber = __commonJS({
    "node_modules/crocks/core/isNumber.js"(exports, module) {
      function isNumber(x) {
        return typeof x === "number" && !isNaN(x);
      }
      module.exports = isNumber;
    }
  });

  // node_modules/crocks/core/isInteger.js
  var require_isInteger = __commonJS({
    "node_modules/crocks/core/isInteger.js"(exports, module) {
      var isNumber = require_isNumber();
      function isInteger(x) {
        return isNumber(x) && isFinite(x) && Math.floor(x) === x;
      }
      module.exports = isInteger;
    }
  });

  // node_modules/crocks/core/isNil.js
  var require_isNil = __commonJS({
    "node_modules/crocks/core/isNil.js"(exports, module) {
      function isNil(x) {
        return x == null || x !== x;
      }
      module.exports = isNil;
    }
  });

  // node_modules/crocks/predicates/hasProp.js
  var require_hasProp = __commonJS({
    "node_modules/crocks/predicates/hasProp.js"(exports, module) {
      var curry = require_curry();
      var isDefined = require_isDefined();
      var isEmpty = require_isEmpty();
      var isInteger = require_isInteger();
      var isNil = require_isNil();
      var isString = require_isString();
      function hasProp(key, x) {
        if (!(isString(key) && !isEmpty(key) || isInteger(key))) {
          throw new TypeError(
            "hasProp: Non-empty String or Integer required for first argument"
          );
        }
        if (isNil(x)) {
          return false;
        }
        return isDefined(x[key]);
      }
      module.exports = curry(hasProp);
    }
  });

  // node_modules/crocks/core/isFoldable.js
  var require_isFoldable = __commonJS({
    "node_modules/crocks/core/isFoldable.js"(exports, module) {
      var hasAlg = require_hasAlg();
      function isFoldable(m) {
        return !!m && hasAlg("reduce", m);
      }
      module.exports = isFoldable;
    }
  });

  // node_modules/crocks/predicates/hasProps.js
  var require_hasProps = __commonJS({
    "node_modules/crocks/predicates/hasProps.js"(exports, module) {
      var curry = require_curry();
      var isDefined = require_isDefined();
      var isEmpty = require_isEmpty();
      var isFoldable = require_isFoldable();
      var isInteger = require_isInteger();
      var isNil = require_isNil();
      var isString = require_isString();
      var err = "hasProps: First argument must be a Foldable of Non-empty Strings or Integers";
      var isKeyValid = function(key) {
        return isString(key) && !isEmpty(key) || isInteger(key);
      };
      var hasKey = function(obj) {
        return function(key) {
          if (!isKeyValid(key)) {
            throw new TypeError(err);
          }
          return isDefined(obj[key]);
        };
      };
      var every = function(fn) {
        return function(acc, x) {
          return (acc === null ? true : acc) && fn(x);
        };
      };
      function hasProps(keys4, x) {
        if (!isFoldable(keys4)) {
          throw new TypeError(err);
        }
        if (isNil(x)) {
          return false;
        }
        var result = keys4.reduce(
          every(hasKey(x)),
          null
        );
        return result === null || result;
      }
      module.exports = curry(hasProps);
    }
  });

  // node_modules/crocks/core/isArray.js
  var require_isArray = __commonJS({
    "node_modules/crocks/core/isArray.js"(exports, module) {
      function isArray(x) {
        return Array.isArray(x);
      }
      module.exports = isArray;
    }
  });

  // node_modules/crocks/predicates/hasPropPath.js
  var require_hasPropPath = __commonJS({
    "node_modules/crocks/predicates/hasPropPath.js"(exports, module) {
      var curry = require_curry();
      var isArray = require_isArray();
      var isDefined = require_isDefined();
      var isEmpty = require_isEmpty();
      var isInteger = require_isInteger();
      var isNil = require_isNil();
      var isString = require_isString();
      function hasPropPath(keys4, target) {
        if (!isArray(keys4)) {
          throw new TypeError(
            "hasPropPath: Array of Non-empty Strings or Integers required for first argument"
          );
        }
        if (isNil(target)) {
          return false;
        }
        var value = target;
        for (var i2 = 0; i2 < keys4.length; i2++) {
          var key = keys4[i2];
          if (!(isString(key) && !isEmpty(key) || isInteger(key))) {
            throw new TypeError(
              "hasPropPath: Array of Non-empty Strings or Integers required for first argument"
            );
          }
          if (isNil(value)) {
            return false;
          }
          value = value[key];
          if (!isDefined(value)) {
            return false;
          }
        }
        return true;
      }
      module.exports = curry(hasPropPath);
    }
  });

  // node_modules/crocks/core/isFunctor.js
  var require_isFunctor = __commonJS({
    "node_modules/crocks/core/isFunctor.js"(exports, module) {
      var hasAlg = require_hasAlg();
      function isFunctor(m) {
        return !!m && hasAlg("map", m);
      }
      module.exports = isFunctor;
    }
  });

  // node_modules/crocks/core/isAlt.js
  var require_isAlt = __commonJS({
    "node_modules/crocks/core/isAlt.js"(exports, module) {
      var hasAlg = require_hasAlg();
      var isFunctor = require_isFunctor();
      function isAlt(m) {
        return isFunctor(m) && hasAlg("alt", m);
      }
      module.exports = isAlt;
    }
  });

  // node_modules/crocks/predicates/isAlt.js
  var require_isAlt2 = __commonJS({
    "node_modules/crocks/predicates/isAlt.js"(exports, module) {
      module.exports = require_isAlt();
    }
  });

  // node_modules/crocks/core/isApply.js
  var require_isApply = __commonJS({
    "node_modules/crocks/core/isApply.js"(exports, module) {
      var hasAlg = require_hasAlg();
      var isFunctor = require_isFunctor();
      function isApply(m) {
        return isFunctor(m) && hasAlg("ap", m);
      }
      module.exports = isApply;
    }
  });

  // node_modules/crocks/core/isApplicative.js
  var require_isApplicative = __commonJS({
    "node_modules/crocks/core/isApplicative.js"(exports, module) {
      var hasAlg = require_hasAlg();
      var isApply = require_isApply();
      function isApplicative(m) {
        return isApply(m) && (hasAlg("of", m) || hasAlg("of", m.constructor));
      }
      module.exports = isApplicative;
    }
  });

  // node_modules/crocks/core/isPlus.js
  var require_isPlus = __commonJS({
    "node_modules/crocks/core/isPlus.js"(exports, module) {
      var hasAlg = require_hasAlg();
      var isAlt = require_isAlt();
      function isPlus(m) {
        return isAlt(m) && (hasAlg("zero", m) || hasAlg("zero", m.constructor));
      }
      module.exports = isPlus;
    }
  });

  // node_modules/crocks/predicates/isAlternative.js
  var require_isAlternative = __commonJS({
    "node_modules/crocks/predicates/isAlternative.js"(exports, module) {
      var isApplicative = require_isApplicative();
      var isPlus = require_isPlus();
      function isAlternative(m) {
        return isPlus(m) && isApplicative(m);
      }
      module.exports = isAlternative;
    }
  });

  // node_modules/crocks/predicates/isApplicative.js
  var require_isApplicative2 = __commonJS({
    "node_modules/crocks/predicates/isApplicative.js"(exports, module) {
      module.exports = require_isApplicative();
    }
  });

  // node_modules/crocks/predicates/isApply.js
  var require_isApply2 = __commonJS({
    "node_modules/crocks/predicates/isApply.js"(exports, module) {
      module.exports = require_isApply();
    }
  });

  // node_modules/crocks/predicates/isArray.js
  var require_isArray2 = __commonJS({
    "node_modules/crocks/predicates/isArray.js"(exports, module) {
      module.exports = require_isArray();
    }
  });

  // node_modules/crocks/core/isBifunctor.js
  var require_isBifunctor = __commonJS({
    "node_modules/crocks/core/isBifunctor.js"(exports, module) {
      var hasAlg = require_hasAlg();
      var isFunctor = require_isFunctor();
      function isBifunctor(m) {
        return isFunctor(m) && hasAlg("bimap", m);
      }
      module.exports = isBifunctor;
    }
  });

  // node_modules/crocks/predicates/isBifunctor.js
  var require_isBifunctor2 = __commonJS({
    "node_modules/crocks/predicates/isBifunctor.js"(exports, module) {
      module.exports = require_isBifunctor();
    }
  });

  // node_modules/crocks/core/isBichain.js
  var require_isBichain = __commonJS({
    "node_modules/crocks/core/isBichain.js"(exports, module) {
      var hasAlg = require_hasAlg();
      function isBichain(m) {
        return hasAlg("bichain", m);
      }
      module.exports = isBichain;
    }
  });

  // node_modules/crocks/predicates/isBichain.js
  var require_isBichain2 = __commonJS({
    "node_modules/crocks/predicates/isBichain.js"(exports, module) {
      module.exports = require_isBichain();
    }
  });

  // node_modules/crocks/predicates/isBoolean.js
  var require_isBoolean = __commonJS({
    "node_modules/crocks/predicates/isBoolean.js"(exports, module) {
      function isBoolean(x) {
        return typeof x === "boolean";
      }
      module.exports = isBoolean;
    }
  });

  // node_modules/crocks/core/isSemigroupoid.js
  var require_isSemigroupoid = __commonJS({
    "node_modules/crocks/core/isSemigroupoid.js"(exports, module) {
      var hasAlg = require_hasAlg();
      function isSemigroupoid(m) {
        return !!m && hasAlg("compose", m);
      }
      module.exports = isSemigroupoid;
    }
  });

  // node_modules/crocks/predicates/isCategory.js
  var require_isCategory = __commonJS({
    "node_modules/crocks/predicates/isCategory.js"(exports, module) {
      var hasAlg = require_hasAlg();
      var isSemigroupoid = require_isSemigroupoid();
      function isCategory(m) {
        return isSemigroupoid(m) && (hasAlg("id", m) || hasAlg("id", m.constructor));
      }
      module.exports = isCategory;
    }
  });

  // node_modules/crocks/core/isChain.js
  var require_isChain = __commonJS({
    "node_modules/crocks/core/isChain.js"(exports, module) {
      var hasAlg = require_hasAlg();
      var isApply = require_isApply();
      function isChain(m) {
        return isApply(m) && hasAlg("chain", m);
      }
      module.exports = isChain;
    }
  });

  // node_modules/crocks/predicates/isChain.js
  var require_isChain2 = __commonJS({
    "node_modules/crocks/predicates/isChain.js"(exports, module) {
      module.exports = require_isChain();
    }
  });

  // node_modules/crocks/core/isContravariant.js
  var require_isContravariant = __commonJS({
    "node_modules/crocks/core/isContravariant.js"(exports, module) {
      var hasAlg = require_hasAlg();
      function isContravariant(m) {
        return !!m && hasAlg("contramap", m);
      }
      module.exports = isContravariant;
    }
  });

  // node_modules/crocks/predicates/isContravariant.js
  var require_isContravariant2 = __commonJS({
    "node_modules/crocks/predicates/isContravariant.js"(exports, module) {
      module.exports = require_isContravariant();
    }
  });

  // node_modules/crocks/core/isDate.js
  var require_isDate = __commonJS({
    "node_modules/crocks/core/isDate.js"(exports, module) {
      function isDate(x) {
        return Object.prototype.toString.apply(x) === "[object Date]" && !isNaN(x.valueOf());
      }
      module.exports = isDate;
    }
  });

  // node_modules/crocks/predicates/isDate.js
  var require_isDate2 = __commonJS({
    "node_modules/crocks/predicates/isDate.js"(exports, module) {
      module.exports = require_isDate();
    }
  });

  // node_modules/crocks/predicates/isDefined.js
  var require_isDefined2 = __commonJS({
    "node_modules/crocks/predicates/isDefined.js"(exports, module) {
      module.exports = require_isDefined();
    }
  });

  // node_modules/crocks/predicates/isEmpty.js
  var require_isEmpty2 = __commonJS({
    "node_modules/crocks/predicates/isEmpty.js"(exports, module) {
      module.exports = require_isEmpty();
    }
  });

  // node_modules/crocks/core/isExtend.js
  var require_isExtend = __commonJS({
    "node_modules/crocks/core/isExtend.js"(exports, module) {
      var hasAlg = require_hasAlg();
      var isFunctor = require_isFunctor();
      function isExtend(m) {
        return isFunctor(m) && hasAlg("extend", m);
      }
      module.exports = isExtend;
    }
  });

  // node_modules/crocks/predicates/isExtend.js
  var require_isExtend2 = __commonJS({
    "node_modules/crocks/predicates/isExtend.js"(exports, module) {
      module.exports = require_isExtend();
    }
  });

  // node_modules/crocks/predicates/isFalse.js
  var require_isFalse = __commonJS({
    "node_modules/crocks/predicates/isFalse.js"(exports, module) {
      function isFalse(x) {
        return x === false;
      }
      module.exports = isFalse;
    }
  });

  // node_modules/crocks/predicates/isFalsy.js
  var require_isFalsy = __commonJS({
    "node_modules/crocks/predicates/isFalsy.js"(exports, module) {
      function isFalsy(x) {
        return !x;
      }
      module.exports = isFalsy;
    }
  });

  // node_modules/crocks/predicates/isFoldable.js
  var require_isFoldable2 = __commonJS({
    "node_modules/crocks/predicates/isFoldable.js"(exports, module) {
      module.exports = require_isFoldable();
    }
  });

  // node_modules/crocks/predicates/isFunction.js
  var require_isFunction2 = __commonJS({
    "node_modules/crocks/predicates/isFunction.js"(exports, module) {
      module.exports = require_isFunction();
    }
  });

  // node_modules/crocks/predicates/isFunctor.js
  var require_isFunctor2 = __commonJS({
    "node_modules/crocks/predicates/isFunctor.js"(exports, module) {
      module.exports = require_isFunctor();
    }
  });

  // node_modules/crocks/predicates/isInteger.js
  var require_isInteger2 = __commonJS({
    "node_modules/crocks/predicates/isInteger.js"(exports, module) {
      module.exports = require_isInteger();
    }
  });

  // node_modules/crocks/core/isIterable.js
  var require_isIterable = __commonJS({
    "node_modules/crocks/core/isIterable.js"(exports, module) {
      var isFunction = require_isFunction();
      var isNil = require_isNil();
      function isIterable(iterable) {
        return !isNil(iterable) && isFunction(iterable[Symbol.iterator]);
      }
      module.exports = isIterable;
    }
  });

  // node_modules/crocks/predicates/isIterable.js
  var require_isIterable2 = __commonJS({
    "node_modules/crocks/predicates/isIterable.js"(exports, module) {
      module.exports = require_isIterable();
    }
  });

  // node_modules/crocks/core/isMap.js
  var require_isMap = __commonJS({
    "node_modules/crocks/core/isMap.js"(exports, module) {
      function isMap(x) {
        return x instanceof Map;
      }
      module.exports = isMap;
    }
  });

  // node_modules/crocks/predicates/isMap.js
  var require_isMap2 = __commonJS({
    "node_modules/crocks/predicates/isMap.js"(exports, module) {
      module.exports = require_isMap();
    }
  });

  // node_modules/crocks/core/isMonad.js
  var require_isMonad = __commonJS({
    "node_modules/crocks/core/isMonad.js"(exports, module) {
      var hasAlg = require_hasAlg();
      var isApplicative = require_isApplicative();
      function isMonad(m) {
        return isApplicative(m) && hasAlg("chain", m);
      }
      module.exports = isMonad;
    }
  });

  // node_modules/crocks/predicates/isMonad.js
  var require_isMonad2 = __commonJS({
    "node_modules/crocks/predicates/isMonad.js"(exports, module) {
      module.exports = require_isMonad();
    }
  });

  // node_modules/crocks/predicates/isMonoid.js
  var require_isMonoid2 = __commonJS({
    "node_modules/crocks/predicates/isMonoid.js"(exports, module) {
      module.exports = require_isMonoid();
    }
  });

  // node_modules/crocks/predicates/isNil.js
  var require_isNil2 = __commonJS({
    "node_modules/crocks/predicates/isNil.js"(exports, module) {
      module.exports = require_isNil();
    }
  });

  // node_modules/crocks/predicates/isNumber.js
  var require_isNumber2 = __commonJS({
    "node_modules/crocks/predicates/isNumber.js"(exports, module) {
      module.exports = require_isNumber();
    }
  });

  // node_modules/crocks/predicates/isObject.js
  var require_isObject2 = __commonJS({
    "node_modules/crocks/predicates/isObject.js"(exports, module) {
      module.exports = require_isObject();
    }
  });

  // node_modules/crocks/predicates/isPlus.js
  var require_isPlus2 = __commonJS({
    "node_modules/crocks/predicates/isPlus.js"(exports, module) {
      module.exports = require_isPlus();
    }
  });

  // node_modules/crocks/core/isProfunctor.js
  var require_isProfunctor = __commonJS({
    "node_modules/crocks/core/isProfunctor.js"(exports, module) {
      var hasAlg = require_hasAlg();
      var isContravariant = require_isContravariant();
      var isFunctor = require_isFunctor();
      function isProfunctor(m) {
        return isContravariant(m) && isFunctor(m) && hasAlg("promap", m);
      }
      module.exports = isProfunctor;
    }
  });

  // node_modules/crocks/predicates/isProfunctor.js
  var require_isProfunctor2 = __commonJS({
    "node_modules/crocks/predicates/isProfunctor.js"(exports, module) {
      module.exports = require_isProfunctor();
    }
  });

  // node_modules/crocks/core/isPromise.js
  var require_isPromise = __commonJS({
    "node_modules/crocks/core/isPromise.js"(exports, module) {
      var isFunction = require_isFunction();
      function isPromise(p) {
        return !!p && isFunction(p.then) && isFunction(p.catch);
      }
      module.exports = isPromise;
    }
  });

  // node_modules/crocks/predicates/isPromise.js
  var require_isPromise2 = __commonJS({
    "node_modules/crocks/predicates/isPromise.js"(exports, module) {
      module.exports = require_isPromise();
    }
  });

  // node_modules/crocks/predicates/isSame.js
  var require_isSame2 = __commonJS({
    "node_modules/crocks/predicates/isSame.js"(exports, module) {
      var curry = require_curry();
      var isSame = require_isSame();
      module.exports = curry(isSame);
    }
  });

  // node_modules/crocks/predicates/isSameType.js
  var require_isSameType2 = __commonJS({
    "node_modules/crocks/predicates/isSameType.js"(exports, module) {
      module.exports = require_isSameType();
    }
  });

  // node_modules/crocks/predicates/isSemigroup.js
  var require_isSemigroup2 = __commonJS({
    "node_modules/crocks/predicates/isSemigroup.js"(exports, module) {
      module.exports = require_isSemigroup();
    }
  });

  // node_modules/crocks/predicates/isSemigroupoid.js
  var require_isSemigroupoid2 = __commonJS({
    "node_modules/crocks/predicates/isSemigroupoid.js"(exports, module) {
      module.exports = require_isSemigroupoid();
    }
  });

  // node_modules/crocks/predicates/isSetoid.js
  var require_isSetoid = __commonJS({
    "node_modules/crocks/predicates/isSetoid.js"(exports, module) {
      var hasAlg = require_hasAlg();
      function isSetoid(m) {
        return !!m && hasAlg("equals", m);
      }
      module.exports = isSetoid;
    }
  });

  // node_modules/crocks/predicates/isString.js
  var require_isString2 = __commonJS({
    "node_modules/crocks/predicates/isString.js"(exports, module) {
      module.exports = require_isString();
    }
  });

  // node_modules/crocks/core/isSymbol.js
  var require_isSymbol = __commonJS({
    "node_modules/crocks/core/isSymbol.js"(exports, module) {
      function isSymbol(x) {
        return typeof x === "symbol";
      }
      module.exports = isSymbol;
    }
  });

  // node_modules/crocks/predicates/isSymbol.js
  var require_isSymbol2 = __commonJS({
    "node_modules/crocks/predicates/isSymbol.js"(exports, module) {
      module.exports = require_isSymbol();
    }
  });

  // node_modules/crocks/predicates/isTraversable.js
  var require_isTraversable = __commonJS({
    "node_modules/crocks/predicates/isTraversable.js"(exports, module) {
      var hasAlg = require_hasAlg();
      var isFunctor = require_isFunctor();
      function isTraversable(m) {
        return isFunctor(m) && hasAlg("traverse", m);
      }
      module.exports = isTraversable;
    }
  });

  // node_modules/crocks/predicates/isTrue.js
  var require_isTrue = __commonJS({
    "node_modules/crocks/predicates/isTrue.js"(exports, module) {
      function isTrue(x) {
        return x === true;
      }
      module.exports = isTrue;
    }
  });

  // node_modules/crocks/predicates/isTruthy.js
  var require_isTruthy = __commonJS({
    "node_modules/crocks/predicates/isTruthy.js"(exports, module) {
      function isTruthy(x) {
        return !!x;
      }
      module.exports = isTruthy;
    }
  });

  // node_modules/crocks/predicates/pathEq.js
  var require_pathEq = __commonJS({
    "node_modules/crocks/predicates/pathEq.js"(exports, module) {
      var curry = require_curry();
      var equals3 = require_equals();
      var isArray = require_isArray();
      var isDefined = require_isDefined();
      var isEmpty = require_isEmpty();
      var isInteger = require_isInteger();
      var isNil = require_isNil();
      var isString = require_isString();
      var err = function(name) {
        return name + ": First argument must be an Array of non-empty Strings or Integers";
      };
      function fn(name) {
        function pathEq2(keys4, value, target) {
          if (!isArray(keys4)) {
            throw new TypeError(err(name));
          }
          if (isNil(target)) {
            return false;
          }
          var acc = target;
          for (var i2 = 0; i2 < keys4.length; i2++) {
            var key = keys4[i2];
            if (!(isString(key) && !isEmpty(key) || isInteger(key))) {
              throw new TypeError(err(name));
            }
            if (isNil(acc)) {
              return false;
            }
            acc = acc[key];
            if (!isDefined(acc)) {
              return false;
            }
          }
          return equals3(acc, value);
        }
        return curry(pathEq2);
      }
      var pathEq = fn("pathEq");
      pathEq.origFn = fn;
      module.exports = pathEq;
    }
  });

  // node_modules/crocks/predicates/pathSatisfies.js
  var require_pathSatisfies = __commonJS({
    "node_modules/crocks/predicates/pathSatisfies.js"(exports, module) {
      var curry = require_curry();
      var isArray = require_isArray();
      var isEmpty = require_isEmpty();
      var isInteger = require_isInteger();
      var isNil = require_isNil();
      var isPredOrFunc = require_isPredOrFunc();
      var isString = require_isString();
      var predOrFunc = require_predOrFunc();
      var err = function(name) {
        return name + ": First argument must be an Array of non-empty Strings or Integers";
      };
      function fn(name) {
        function pathSatisfies2(keys4, pred, x) {
          if (!isArray(keys4)) {
            throw new TypeError(err(name));
          }
          if (!isPredOrFunc(pred)) {
            throw new TypeError(
              name + ": Second argument must be a Pred or predicate Function"
            );
          }
          if (isNil(x)) {
            return false;
          }
          var target = x;
          for (var i2 = 0; i2 < keys4.length; i2++) {
            var key = keys4[i2];
            if (!(isString(key) && !isEmpty(key) || isInteger(key))) {
              throw new TypeError(err(name));
            }
            if (isNil(target)) {
              return false;
            }
            target = target[key];
          }
          return !!predOrFunc(pred, target);
        }
        return curry(pathSatisfies2);
      }
      var pathSatisfies = fn("pathSatisfies");
      pathSatisfies.origFn = fn;
      module.exports = pathSatisfies;
    }
  });

  // node_modules/crocks/predicates/propEq.js
  var require_propEq = __commonJS({
    "node_modules/crocks/predicates/propEq.js"(exports, module) {
      var curry = require_curry();
      var equals3 = require_equals();
      var isDefined = require_isDefined();
      var isEmpty = require_isEmpty();
      var isInteger = require_isInteger();
      var isNil = require_isNil();
      var isString = require_isString();
      function propEq3(key, value, x) {
        if (!(isString(key) && !isEmpty(key) || isInteger(key))) {
          throw new TypeError(
            "propEq: Non-empty String or Integer required for first argument"
          );
        }
        if (isNil(x)) {
          return false;
        }
        var target = x[key];
        return isDefined(target) && equals3(target, value);
      }
      module.exports = curry(propEq3);
    }
  });

  // node_modules/crocks/predicates/propPathEq.js
  var require_propPathEq = __commonJS({
    "node_modules/crocks/predicates/propPathEq.js"(exports, module) {
      var pathEq = require_pathEq();
      module.exports = pathEq.origFn("propPathEq");
    }
  });

  // node_modules/crocks/predicates/propSatisfies.js
  var require_propSatisfies = __commonJS({
    "node_modules/crocks/predicates/propSatisfies.js"(exports, module) {
      var curry = require_curry();
      var isEmpty = require_isEmpty();
      var isInteger = require_isInteger();
      var isNil = require_isNil();
      var isPredOrFunc = require_isPredOrFunc();
      var isString = require_isString();
      var predOrFunc = require_predOrFunc();
      function propSatisfies(key, pred, x) {
        if (!(isString(key) && !isEmpty(key) || isInteger(key))) {
          throw new TypeError(
            "propSatisfies: Non-empty String or Integer required for first argument"
          );
        }
        if (!isPredOrFunc(pred)) {
          throw new TypeError(
            "propSatisfies: Pred or predicate function required for second argument"
          );
        }
        return isNil(x) ? false : !!predOrFunc(pred, x[key]);
      }
      module.exports = curry(propSatisfies);
    }
  });

  // node_modules/crocks/predicates/propPathSatisfies.js
  var require_propPathSatisfies = __commonJS({
    "node_modules/crocks/predicates/propPathSatisfies.js"(exports, module) {
      var pathSatisfies = require_pathSatisfies();
      module.exports = pathSatisfies.origFn("propPathSatisfies");
    }
  });

  // node_modules/crocks/predicates/index.js
  var require_predicates = __commonJS({
    "node_modules/crocks/predicates/index.js"(exports, module) {
      module.exports = {
        hasProp: require_hasProp(),
        hasProps: require_hasProps(),
        hasPropPath: require_hasPropPath(),
        isAlt: require_isAlt2(),
        isAlternative: require_isAlternative(),
        isApplicative: require_isApplicative2(),
        isApply: require_isApply2(),
        isArray: require_isArray2(),
        isBifunctor: require_isBifunctor2(),
        isBichain: require_isBichain2(),
        isBoolean: require_isBoolean(),
        isCategory: require_isCategory(),
        isChain: require_isChain2(),
        isContravariant: require_isContravariant2(),
        isDate: require_isDate2(),
        isDefined: require_isDefined2(),
        isEmpty: require_isEmpty2(),
        isExtend: require_isExtend2(),
        isFalse: require_isFalse(),
        isFalsy: require_isFalsy(),
        isFoldable: require_isFoldable2(),
        isFunction: require_isFunction2(),
        isFunctor: require_isFunctor2(),
        isInteger: require_isInteger2(),
        isIterable: require_isIterable2(),
        isMap: require_isMap2(),
        isMonad: require_isMonad2(),
        isMonoid: require_isMonoid2(),
        isNil: require_isNil2(),
        isNumber: require_isNumber2(),
        isObject: require_isObject2(),
        isPlus: require_isPlus2(),
        isProfunctor: require_isProfunctor2(),
        isPromise: require_isPromise2(),
        isSame: require_isSame2(),
        isSameType: require_isSameType2(),
        isSemigroup: require_isSemigroup2(),
        isSemigroupoid: require_isSemigroupoid2(),
        isSetoid: require_isSetoid(),
        isString: require_isString2(),
        isSymbol: require_isSymbol2(),
        isTraversable: require_isTraversable(),
        isTrue: require_isTrue(),
        isTruthy: require_isTruthy(),
        pathEq: require_pathEq(),
        pathSatisfies: require_pathSatisfies(),
        propEq: require_propEq(),
        propPathEq: require_propPathEq(),
        propSatisfies: require_propSatisfies(),
        propPathSatisfies: require_propPathSatisfies()
      };
    }
  });

  // node_modules/crocks/core/implements.js
  var require_implements = __commonJS({
    "node_modules/crocks/core/implements.js"(exports, module) {
      var fulfills = function(algs) {
        return function(test) {
          return algs.indexOf(test) !== -1;
        };
      };
      module.exports = fulfills;
    }
  });

  // node_modules/crocks/core/inspect.js
  var require_inspect = __commonJS({
    "node_modules/crocks/core/inspect.js"(exports, module) {
      var isArray = require_isArray();
      var isFunction = require_isFunction();
      var isObject = require_isObject();
      var isString = require_isString();
      var isSymbol = require_isSymbol();
      var isDate = require_isDate();
      function arrayInspect(xs) {
        return xs.length ? xs.map(inspect).reduce(function(a2, x) {
          return a2 + "," + x;
        }) : xs;
      }
      function inspect(x) {
        if (x && isFunction(x.inspect)) {
          return " " + x.inspect();
        }
        if (isFunction(x)) {
          return " Function";
        }
        if (isArray(x)) {
          return " [" + arrayInspect(x) + " ]";
        }
        if (isObject(x)) {
          return " { " + Object.keys(x).reduce(function(acc, key) {
            return acc.concat([key + ":" + inspect(x[key])]);
          }, []).join(", ") + " }";
        }
        if (isString(x)) {
          return ' "' + x + '"';
        }
        if (isSymbol(x) || isDate(x)) {
          return " " + x.toString();
        }
        return " " + x;
      }
      module.exports = inspect;
    }
  });

  // node_modules/crocks/Arrow/index.js
  var require_Arrow = __commonJS({
    "node_modules/crocks/Arrow/index.js"(exports, module) {
      var VERSION = 2;
      var _implements = require_implements();
      var _inspect = require_inspect();
      var type3 = require_types().type("Arrow");
      var _type = require_types().typeFn(type3(), VERSION);
      var fl = require_flNames();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var Pair = require_types().proxy("Pair");
      var _id = function() {
        return Arrow(function(x) {
          return x;
        });
      };
      function Arrow(runWith) {
        var obj;
        if (!isFunction(runWith)) {
          throw new TypeError("Arrow: Function required");
        }
        var inspect = function() {
          return "Arrow" + _inspect(runWith);
        };
        var id = _id;
        var _map2 = function(fn) {
          return Arrow(function(x) {
            return fn(runWith(x));
          });
        };
        function compose2(method) {
          return function(m) {
            if (!isSameType(Arrow, m)) {
              throw new TypeError("Arrow." + method + ": Arrow required");
            }
            return _map2(m.runWith);
          };
        }
        function map3(method) {
          return function(fn) {
            if (!isFunction(fn)) {
              throw new TypeError("Arrow." + method + ": Function required");
            }
            return _map2(fn);
          };
        }
        function contramap(method) {
          return function(fn) {
            if (!isFunction(fn)) {
              throw new TypeError("Arrow." + method + ": Function required");
            }
            return Arrow(function(x) {
              return runWith(fn(x));
            });
          };
        }
        function promap(method) {
          return function(l, r2) {
            if (!isFunction(l) || !isFunction(r2)) {
              throw new TypeError("Arrow." + method + ": Functions required for both arguments");
            }
            return Arrow(function(x) {
              return r2(runWith(l(x)));
            });
          };
        }
        function first() {
          return Arrow(function(x) {
            if (!isSameType(Pair, x)) {
              throw TypeError("Arrow.first: Pair required for inner argument");
            }
            return x.bimap(runWith, function(x2) {
              return x2;
            });
          });
        }
        function second() {
          return Arrow(function(x) {
            if (!isSameType(Pair, x)) {
              throw TypeError("Arrow.second: Pair required for inner argument");
            }
            return x.bimap(function(x2) {
              return x2;
            }, runWith);
          });
        }
        function both() {
          return Arrow(function(x) {
            if (!isSameType(Pair, x)) {
              throw TypeError("Arrow.both: Pair required for inner argument");
            }
            return x.bimap(runWith, runWith);
          });
        }
        return obj = {
          inspect,
          toString: inspect,
          type: type3,
          runWith,
          id,
          first,
          second,
          both,
          compose: compose2("compose"),
          map: map3("map"),
          contramap: contramap("contramap"),
          promap: promap("promap")
        }, obj[fl.id] = id, obj[fl.compose] = compose2(fl.compose), obj[fl.map] = map3(fl.map), obj[fl.contramap] = contramap(fl.contramap), obj[fl.promap] = promap(fl.promap), obj["@@type"] = _type, obj.constructor = Arrow, obj;
      }
      Arrow.id = _id;
      Arrow.type = type3;
      Arrow[fl.id] = _id;
      Arrow["@@type"] = _type;
      Arrow["@@implements"] = _implements(
        ["compose", "contramap", "id", "map", "promap"]
      );
      module.exports = Arrow;
    }
  });

  // node_modules/crocks/core/isTypeRepOf.js
  var require_isTypeRepOf = __commonJS({
    "node_modules/crocks/core/isTypeRepOf.js"(exports, module) {
      var isFunction = require_isFunction();
      var isTypeRepOf = function(x, y) {
        return isFunction(y) && (x === y || x.name === y.name);
      };
      module.exports = isTypeRepOf;
    }
  });

  // node_modules/crocks/core/apOrFunc.js
  var require_apOrFunc = __commonJS({
    "node_modules/crocks/core/apOrFunc.js"(exports, module) {
      var isApplicative = require_isApplicative();
      var isTypeRepOf = require_isTypeRepOf();
      var apOrFunc = function(af) {
        return function(x) {
          return isApplicative(af) ? af.of(x) : isTypeRepOf(Array, af) ? [x] : af(x);
        };
      };
      module.exports = apOrFunc;
    }
  });

  // node_modules/crocks/core/array.js
  var require_array = __commonJS({
    "node_modules/crocks/core/array.js"(exports, module) {
      var isApply = require_isApply();
      var isArray = require_isArray();
      var isEmpty = require_isEmpty();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var isSemigroup = require_isSemigroup();
      var apOrFunc = require_apOrFunc();
      var identity2 = function(x) {
        return x;
      };
      var concat = function(x) {
        return function(m) {
          return x.concat(m);
        };
      };
      function runTraverse(name, fn) {
        return function(acc, x) {
          var m = fn(x);
          if (!((isApply(acc) || isArray(acc)) && isSameType(acc, m))) {
            throw new TypeError("Array." + name + ": Must wrap Applys of the same type");
          }
          if (isArray(m)) {
            return ap(acc, map3(function(v) {
              return concat([v]);
            }, m));
          }
          return m.map(function(v) {
            return concat([v]);
          }).ap(acc);
        };
      }
      var allFuncs = function(xs) {
        return xs.reduce(function(b, i2) {
          return b && isFunction(i2);
        }, true);
      };
      var map3 = function(f, m) {
        return m.map(function(x) {
          return f(x);
        });
      };
      function ap(x, m) {
        if (!(m.length && allFuncs(m))) {
          throw new TypeError("Array.ap: Second Array must all be functions");
        }
        return m.reduce(function(acc, f) {
          return acc.concat(map3(f, x));
        }, []);
      }
      function chain(f, m) {
        return m.reduce(function(y, x) {
          var n = f(x);
          if (!isArray(n)) {
            throw new TypeError("Array.chain: Function must return an Array");
          }
          return y.concat(n);
        }, []);
      }
      function sequence(f, m) {
        var fn = apOrFunc(f);
        return m.reduceRight(runTraverse("sequence", identity2), fn([]));
      }
      function traverse(f, fn, m) {
        var af = apOrFunc(f);
        return m.reduceRight(runTraverse("traverse", fn), af([]));
      }
      function fold(m) {
        if (isEmpty(m)) {
          throw new TypeError(
            "Array.fold: Non-empty Array of Semigroups required"
          );
        }
        var head = m[0];
        if (!isSemigroup(head)) {
          throw new TypeError("Array.fold: Must contain Semigroups of the same type");
        }
        return m.reduce(function(x, y) {
          if (!isSameType(x, y)) {
            throw new TypeError("Array.fold: Must contain Semigroups of the same type");
          }
          return x.concat(y);
        });
      }
      function foldMap(fn, m) {
        if (isEmpty(m)) {
          throw new TypeError(
            "Array.foldMap: Non-empty Array required"
          );
        }
        var head = fn(m[0]);
        if (!isSemigroup(head)) {
          throw new TypeError(
            "Array.foldMap: Provided function must return Semigroups of the same type"
          );
        }
        return m.length === 1 ? head : m.slice(1).reduce(function(semi, x) {
          var val = fn(x);
          if (!(isSameType(semi, val) && isSemigroup(val))) {
            throw new TypeError(
              "Array.foldMap: Provided function must return Semigroups of the same type"
            );
          }
          return semi.concat(val);
        }, head);
      }
      function set(indx, val, m) {
        var arr = m.slice();
        arr[indx] = val;
        return arr;
      }
      function unset(indx, m) {
        return m.slice(0, indx).concat(m.slice(indx + 1));
      }
      module.exports = {
        ap,
        chain,
        fold,
        foldMap,
        map: map3,
        sequence,
        set,
        traverse,
        unset
      };
    }
  });

  // node_modules/crocks/core/once.js
  var require_once = __commonJS({
    "node_modules/crocks/core/once.js"(exports, module) {
      function once(fn) {
        var called, result;
        return function() {
          if (!called) {
            called = true;
            result = fn.apply(null, arguments);
          }
          return result;
        };
      }
      module.exports = once;
    }
  });

  // node_modules/crocks/core/_unit.js
  var require_unit = __commonJS({
    "node_modules/crocks/core/_unit.js"(exports, module) {
      module.exports = Function.prototype;
    }
  });

  // node_modules/crocks/Async/index.js
  var require_Async = __commonJS({
    "node_modules/crocks/Async/index.js"(exports, module) {
      var VERSION = 5;
      var _implements = require_implements();
      var _inspect = require_inspect();
      var type3 = require_types().type("Async");
      var _type = require_types().typeFn(type3(), VERSION);
      var fl = require_flNames();
      var array = require_array();
      var compose2 = require_compose();
      var once = require_once();
      var unit = require_unit();
      var isArray = require_isArray();
      var isFoldable = require_isFoldable();
      var isFunction = require_isFunction();
      var isInteger = require_isInteger();
      var isPromise = require_isPromise();
      var isSameType = require_isSameType();
      var allAsyncs = function(xs) {
        return xs.reduce(function(acc, x) {
          return acc && isSameType(Async2, x);
        }, true);
      };
      var _of2 = function(x) {
        return Async2(function(_4, resolve) {
          return resolve(x);
        });
      };
      var Rejected = function(x) {
        return Async2(function(reject) {
          return reject(x);
        });
      };
      function all(asyncs) {
        if (!(isFoldable(asyncs) && allAsyncs(asyncs))) {
          throw new TypeError("Async.all: Foldable structure of Asyncs required");
        }
        if (isArray(asyncs)) {
          return array.sequence(Async2.of, asyncs);
        }
        return asyncs.sequence(Async2.of);
      }
      function fromNode(fn, ctx) {
        if (!isFunction(fn)) {
          throw new TypeError("Async.fromNode: CPS function required");
        }
        return function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return Async2(function(reject, resolve) {
            fn.apply(
              ctx,
              args.concat(
                function(err, data) {
                  return err ? reject(err) : resolve(data);
                }
              )
            );
          });
        };
      }
      function fromPromise(fn) {
        if (!isFunction(fn)) {
          throw new TypeError("Async.fromPromise: Promise returning function required");
        }
        return function() {
          var promiseArgs = arguments;
          return Async2(function(reject, resolve) {
            var promise = fn.apply(null, promiseArgs);
            if (!isPromise(promise)) {
              throw new TypeError("Async.fromPromise: Promise returning function required");
            }
            promise.then(resolve, reject);
          });
        };
      }
      function rejectAfter(ms, value) {
        if (!(isInteger(ms) && ms >= 0)) {
          throw new TypeError(
            "Async.rejectAfter: Positive Integer required for first argument"
          );
        }
        return Async2(function(rej) {
          var token = setTimeout(function() {
            rej(value);
          }, ms);
          return function() {
            clearTimeout(token);
          };
        });
      }
      function resolveAfter(ms, value) {
        if (!(isInteger(ms) && ms >= 0)) {
          throw new TypeError(
            "Async.resolveAfter: Positive Integer required for first argument"
          );
        }
        return Async2(function(_4, res) {
          var token = setTimeout(function() {
            res(value);
          }, ms);
          return function() {
            clearTimeout(token);
          };
        });
      }
      function Async2(fn) {
        var obj;
        if (!isFunction(fn)) {
          throw new TypeError("Async: Function required");
        }
        var of2 = _of2;
        var inspect = function() {
          return "Async" + _inspect(fn);
        };
        function fork(reject, resolve, cleanup) {
          if (!isFunction(reject) || !isFunction(resolve)) {
            throw new TypeError("Async.fork: Reject and resolve functions required");
          }
          var cancelled = false;
          var settled = false;
          var cancel = function() {
            cancelled = true;
          };
          var forkCancel = isFunction(cleanup) ? cleanup : unit;
          var settle = function(f, x) {
            if (!settled) {
              settled = true;
              if (cancelled) {
                return unit();
              }
              return f(x);
            }
          };
          var internal = fn(
            settle.bind(null, reject),
            settle.bind(null, resolve)
          );
          var internalFn = isFunction(internal) ? internal : unit;
          return once(function() {
            return forkCancel(cancel(internalFn()));
          });
        }
        function toPromise() {
          return new Promise(function(resolve, reject) {
            fork(reject, resolve);
          });
        }
        function race(m) {
          if (!isSameType(Async2, m)) {
            throw new TypeError("Async.race: Async required");
          }
          return Async2(function(reject, resolve) {
            var settle = once(
              function(resolved, value) {
                return resolved ? resolve(value) : reject(value);
              }
            );
            var res = settle.bind(null, true);
            var rej = settle.bind(null, false);
            var cancelOne = fork(rej, res);
            var cancelTwo = m.fork(rej, res);
            return function() {
              cancelOne();
              cancelTwo();
            };
          });
        }
        function swap(l, r2) {
          if (!isFunction(l) || !isFunction(r2)) {
            throw new TypeError("Async.swap: Functions required for both arguments");
          }
          return Async2(function(reject, resolve) {
            return fork(
              compose2(resolve, l),
              compose2(reject, r2)
            );
          });
        }
        function coalesce(l, r2) {
          if (!isFunction(l) || !isFunction(r2)) {
            throw new TypeError("Async.coalesce: Functions required for both arguments");
          }
          return Async2(function(reject, resolve) {
            return fork(
              compose2(resolve, l),
              compose2(resolve, r2)
            );
          });
        }
        function map3(method) {
          return function(mapFn) {
            if (!isFunction(mapFn)) {
              throw new TypeError("Async." + method + ": Function required");
            }
            return Async2(function(reject, resolve) {
              return fork(reject, compose2(resolve, mapFn));
            });
          };
        }
        function bimap(method) {
          return function(l, r2) {
            if (!isFunction(l) || !isFunction(r2)) {
              throw new TypeError("Async." + method + ": Functions required for both arguments");
            }
            return Async2(function(reject, resolve) {
              return fork(
                compose2(reject, l),
                compose2(resolve, r2)
              );
            });
          };
        }
        function alt(method) {
          return function(m) {
            if (!isSameType(Async2, m)) {
              throw new TypeError("Async." + method + ": Async required");
            }
            return Async2(function(rej, res) {
              var cancel = unit;
              var innerCancel = unit;
              cancel = fork(
                function() {
                  innerCancel = m.fork(rej, res);
                },
                res
              );
              return once(function() {
                return innerCancel(cancel());
              });
            });
          };
        }
        function ap(m) {
          if (!isSameType(Async2, m)) {
            throw new TypeError("Async.ap: Async required");
          }
          return Async2(function(reject, resolve) {
            var apFn = null;
            var value = null;
            var fnDone = false;
            var valueDone = false;
            var cancelled = false;
            var cancel = function() {
              cancelled = true;
            };
            var rejectOnce = once(reject);
            function resolveBoth() {
              if (!cancelled && fnDone && valueDone) {
                compose2(resolve, apFn)(value);
              }
            }
            var fnCancel = fork(rejectOnce, function(f) {
              if (!isFunction(f)) {
                throw new TypeError("Async.ap: Wrapped value must be a function");
              }
              fnDone = true;
              apFn = f;
              resolveBoth();
            });
            var valueCancel = m.fork(rejectOnce, function(x) {
              valueDone = true;
              value = x;
              resolveBoth();
            });
            return function() {
              fnCancel();
              valueCancel();
              cancel();
            };
          });
        }
        function chain(method) {
          return function(mapFn) {
            if (!isFunction(mapFn)) {
              throw new TypeError(
                "Async." + method + ": Async returning function required"
              );
            }
            return Async2(function(reject, resolve) {
              var cancel = unit;
              var innerCancel = unit;
              cancel = fork(reject, function(x) {
                var m = mapFn(x);
                if (!isSameType(Async2, m)) {
                  throw new TypeError(
                    "Async." + method + ": Function must return another Async"
                  );
                }
                innerCancel = m.fork(reject, resolve);
              });
              return once(function() {
                return innerCancel(cancel());
              });
            });
          };
        }
        function bichain(l, r2) {
          var bichainErr = "Async.bichain: Both arguments must be Async returning functions";
          if (!isFunction(l) || !isFunction(r2)) {
            throw new TypeError(bichainErr);
          }
          return Async2(function(rej, res) {
            var cancel = unit;
            var innerCancel = unit;
            function setInnerCancel(mapFn) {
              return function(x) {
                var m = mapFn(x);
                if (!isSameType(Async2, m)) {
                  throw new TypeError(bichainErr);
                }
                innerCancel = m.fork(rej, res);
              };
            }
            cancel = fork(setInnerCancel(l), setInnerCancel(r2));
            return once(function() {
              return innerCancel(cancel());
            });
          });
        }
        return obj = {
          fork,
          toPromise,
          inspect,
          toString: inspect,
          type: type3,
          swap,
          race,
          coalesce,
          ap,
          of: of2,
          alt: alt("alt"),
          bimap: bimap("bimap"),
          map: map3("map"),
          chain: chain("chain"),
          bichain
        }, obj[fl.of] = of2, obj[fl.alt] = alt(fl.alt), obj[fl.bimap] = bimap(fl.bimap), obj[fl.map] = map3(fl.map), obj[fl.chain] = chain(fl.chain), obj["@@type"] = _type, obj.constructor = Async2, obj;
      }
      Async2.of = _of2;
      Async2.type = type3;
      Async2[fl.of] = _of2;
      Async2["@@type"] = _type;
      Async2.Rejected = Rejected;
      Async2.Resolved = _of2;
      Async2.fromPromise = fromPromise;
      Async2.fromNode = fromNode;
      Async2.all = all;
      Async2.rejectAfter = rejectAfter;
      Async2.resolveAfter = resolveAfter;
      Async2["@@implements"] = _implements(
        ["alt", "ap", "bimap", "chain", "map", "of"]
      );
      module.exports = Async2;
    }
  });

  // node_modules/crocks/Const/index.js
  var require_Const = __commonJS({
    "node_modules/crocks/Const/index.js"(exports, module) {
      var VERSION = 3;
      var _equals2 = require_equals();
      var _implements = require_implements();
      var _inspect = require_inspect();
      var _type = require_types().type("Const");
      var typeFn = require_types().typeFn;
      var fl = require_flNames();
      var isFunction = require_isFunction();
      var isMonoid = require_isMonoid();
      var isSameType = require_isSameType();
      var isSemigroup = require_isSemigroup();
      var typeOrName = function(m) {
        return isFunction(m.type) ? m.type() : m.name;
      };
      var constant = function(x) {
        return function() {
          return x;
        };
      };
      var empties = {
        Array: function() {
          return [];
        },
        String: function() {
          return "";
        }
      };
      var getEmpty = function(T) {
        return T[fl.empty] || T.empty || empties[T.name];
      };
      var validMonoid = function(T) {
        return isMonoid(T) || T.name === "String" || T.name === "Array";
      };
      function _Const(T) {
        if (!isFunction(T)) {
          throw new TypeError("Const: TypeRep required for construction");
        }
        var type3 = constant(_type(typeOrName(T)));
        var typeString = typeFn("Const", VERSION, typeOrName(T));
        function empty2(method) {
          return function() {
            if (!validMonoid(T)) {
              throw new TypeError(type3() + "." + method + ": Must be fixed to a Monoid");
            }
            return Const(getEmpty(T)());
          };
        }
        function of2(method) {
          return function() {
            if (!validMonoid(T)) {
              throw new TypeError(type3() + "." + method + ": Must be fixed to a Monoid");
            }
            return Const(getEmpty(T)());
          };
        }
        function Const(value) {
          var obj;
          if (!isSameType(T, value)) {
            throw new TypeError(type3() + ": " + typeOrName(T) + " required");
          }
          var inspect = constant("" + type3() + _inspect(value));
          var valueOf = constant(value);
          var equals3 = function(m) {
            return isSameType(Const, m) && _equals2(value, m.valueOf());
          };
          function concat(method) {
            return function(m) {
              if (!isSemigroup(value)) {
                throw new TypeError(type3() + "." + method + ": Must be fixed to a Semigroup");
              }
              if (!isSameType(Const, m)) {
                throw new TypeError(type3() + "." + method + ": " + type3() + " required");
              }
              return Const(value.concat(m.valueOf()));
            };
          }
          function map3(method) {
            return function(fn) {
              if (!isFunction(fn)) {
                throw new TypeError(type3() + "." + method + ": Function required");
              }
              return Const(value);
            };
          }
          function ap(m) {
            if (!isSemigroup(value)) {
              throw new TypeError(type3() + ".ap: Must be fixed to a Semigroup");
            }
            if (!isSameType(Const, m)) {
              throw new TypeError(type3() + ".ap: " + type3() + " required");
            }
            return Const(value.concat(m.valueOf()));
          }
          return obj = {
            inspect,
            toString: inspect,
            valueOf,
            type: type3,
            ap,
            equals: equals3,
            concat: concat("concat"),
            empty: empty2("empty"),
            map: map3("map"),
            of: of2("of")
          }, obj[fl.concat] = concat(fl.concat), obj[fl.empty] = empty2(fl.empty), obj[fl.equals] = equals3, obj[fl.map] = map3(fl.map), obj[fl.of] = of2(fl.of), obj["@@type"] = typeString, obj.constructor = Const, obj;
        }
        Const.empty = empty2("empty");
        Const.of = of2("of");
        Const.type = type3;
        Const[fl.empty] = empty2(fl.empty);
        Const[fl.of] = of2(fl.of);
        Const["@@type"] = typeString;
        Const["@@implements"] = _implements(
          ["ap", "concat", "empty", "equals", "map", "of"]
        );
        return Const;
      }
      module.exports = _Const;
    }
  });

  // node_modules/crocks/core/defineUnion.js
  var require_defineUnion = __commonJS({
    "node_modules/crocks/core/defineUnion.js"(exports, module) {
      var curry = require_curry();
      var isArray = require_isArray();
      var isEmpty = require_isEmpty();
      var isFunction = require_isFunction();
      var isObject = require_isObject();
      var isString = require_isString();
      var constant = function(x) {
        return function() {
          return x;
        };
      };
      var isDefinition = function(x) {
        return isString(x) && x.length;
      };
      function caseOf(defs) {
        return function(cases, m) {
          var tag = m.tag;
          var def = defs[tag()];
          var args = def.reduce(
            function(xs, x) {
              return xs.concat([m[x].value()]);
            },
            []
          );
          return cases[tag()].apply(null, args);
        };
      }
      var includes2 = function(defs) {
        return function(m) {
          return !!m && isFunction(m.tag) && Object.keys(defs).indexOf(m.tag()) !== -1;
        };
      };
      function construction(def, tag) {
        return function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return def.reduce(function(obj, key, index) {
            obj[key] = { value: constant(args[index]) };
            return obj;
          }, { tag: constant(tag) });
        };
      }
      function defineUnion(defs) {
        if (!isObject(defs) || isEmpty(defs)) {
          throw new TypeError("defineUnion: Argument must be an Object containing definition lists");
        }
        return Object.keys(defs).reduce(function(obj, tag) {
          var def = defs[tag];
          if (!isArray(def) || !def.reduce(function(x, y) {
            return x && isDefinition(y);
          }, true)) {
            throw new TypeError("defineUnion: Definitions must be a list of non-empty string identifiers");
          }
          obj[tag] = construction(def, tag);
          return obj;
        }, { caseOf: curry(caseOf(defs)), includes: curry(includes2(defs)) });
      }
      module.exports = defineUnion;
    }
  });

  // node_modules/crocks/core/innerConcat.js
  var require_innerConcat = __commonJS({
    "node_modules/crocks/core/innerConcat.js"(exports, module) {
      var isSameType = require_isSameType();
      var isSemigroup = require_isSemigroup();
      function innerConcat(method, m) {
        return function(left) {
          if (!isSemigroup(left)) {
            throw new TypeError(method + ": Both containers must contain Semigroups of the same type");
          }
          return m.map(function(right) {
            if (!isSameType(left, right)) {
              throw new TypeError(method + ": Both containers must contain Semigroups of the same type");
            }
            return left.concat(right);
          });
        };
      }
      module.exports = innerConcat;
    }
  });

  // node_modules/crocks/Either/index.js
  var require_Either = __commonJS({
    "node_modules/crocks/Either/index.js"(exports, module) {
      var VERSION = 4;
      var _defineUnion = require_defineUnion();
      var _equals2 = require_equals();
      var _implements = require_implements();
      var _innerConcat = require_innerConcat();
      var _inspect = require_inspect();
      var type3 = require_types().type("Either");
      var _type = require_types().typeFn(type3(), VERSION);
      var fl = require_flNames();
      var apOrFunc = require_apOrFunc();
      var compose2 = require_compose();
      var isArray = require_isArray();
      var isApplicative = require_isApplicative();
      var isApply = require_isApply();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var constant = function(x) {
        return function() {
          return x;
        };
      };
      var _either = _defineUnion({ Left: ["a"], Right: ["b"] });
      var Left = _either.Left;
      var Right = _either.Right;
      Either.Left = compose2(Either, Left);
      Either.Right = compose2(Either, Right);
      var _of2 = Either.Right;
      function runSequence(x) {
        if (!(isApply(x) || isArray(x))) {
          throw new TypeError("Either.sequence: Must wrap an Apply");
        }
        return x.map(_of2);
      }
      function Either(u) {
        var obj;
        if (!arguments.length) {
          throw new TypeError("Either: Must wrap something, try using Left or Right constructors");
        }
        var x = !_either.includes(u) ? Right(u) : u;
        var equals3 = function(m) {
          return isSameType(Either, m) && either(
            function(x2) {
              return m.either(function(y) {
                return _equals2(y, x2);
              }, constant(false));
            },
            function(x2) {
              return m.either(constant(false), function(y) {
                return _equals2(y, x2);
              });
            }
          );
        };
        var of2 = _of2;
        var inspect = function() {
          return either(
            function(l) {
              return "Left" + _inspect(l);
            },
            function(r2) {
              return "Right" + _inspect(r2);
            }
          );
        };
        function either(f, g) {
          if (!isFunction(f) || !isFunction(g)) {
            throw new TypeError("Either.either: Requires both left and right functions");
          }
          return _either.caseOf({
            Left: f,
            Right: g
          }, x);
        }
        function concat(method) {
          return function(m) {
            if (!isSameType(Either, m)) {
              throw new TypeError("Either." + method + ": Either of Semigroup required");
            }
            return either(
              Either.Left,
              _innerConcat("Either." + method, m)
            );
          };
        }
        function swap(f, g) {
          if (!isFunction(f) || !isFunction(g)) {
            throw new TypeError("Either.swap: Requires both left and right functions");
          }
          return either(
            compose2(Either.Right, f),
            compose2(Either.Left, g)
          );
        }
        function coalesce(f, g) {
          if (!isFunction(f) || !isFunction(g)) {
            throw new TypeError("Either.coalesce: Requires both left and right functions");
          }
          return Either.Right(either(f, g));
        }
        function bichain(l, r2) {
          var bichainErr = "Either.bichain: Both arguments must be Either returning functions";
          if (!(isFunction(l) && isFunction(r2))) {
            throw new TypeError(bichainErr);
          }
          var m = either(l, r2);
          if (!isSameType(Either, m)) {
            throw new TypeError(bichainErr);
          }
          return m;
        }
        function map3(method) {
          return function(fn) {
            if (!isFunction(fn)) {
              throw new TypeError("Either." + method + ": Function required");
            }
            return either(Either.Left, compose2(Either.Right, fn));
          };
        }
        function bimap(method) {
          return function(f, g) {
            if (!isFunction(f) || !isFunction(g)) {
              throw new TypeError("Either." + method + ": Requires both left and right functions");
            }
            return either(
              compose2(Either.Left, f),
              compose2(Either.Right, g)
            );
          };
        }
        function alt(method) {
          return function(m) {
            if (!isSameType(Either, m)) {
              throw new TypeError("Either." + method + ": Either required");
            }
            return either(
              constant(m),
              Either.Right
            );
          };
        }
        function ap(m) {
          if (!either(constant(true), isFunction)) {
            throw new TypeError("Either.ap: Wrapped value must be a function");
          } else if (!either(constant(true), constant(isSameType(Either, m)))) {
            throw new TypeError("Either.ap: Either required");
          }
          return either(
            Either.Left,
            function(fn) {
              return m.map(fn);
            }
          );
        }
        function chain(method) {
          return function(fn) {
            if (!isFunction(fn)) {
              throw new TypeError("Either." + method + ": Function required");
            }
            var m = either(Either.Left, fn);
            if (!isSameType(Either, m)) {
              throw new TypeError("Either." + method + ": Function must return an Either");
            }
            return m;
          };
        }
        function sequence(f) {
          if (!(isApplicative(f) || isFunction(f))) {
            throw new TypeError(
              "Either.sequence: Applicative TypeRep or Apply returning function required"
            );
          }
          var af = apOrFunc(f);
          return either(
            compose2(af, Either.Left),
            runSequence
          );
        }
        function traverse(f, fn) {
          if (!(isApplicative(f) || isFunction(f))) {
            throw new TypeError(
              "Either.traverse: Applicative TypeRep or Apply returning function required for first argument"
            );
          }
          if (!isFunction(fn)) {
            throw new TypeError(
              "Either.traverse: Apply returning function required for second argument"
            );
          }
          var af = apOrFunc(f);
          var m = either(compose2(af, Either.Left), fn);
          if (!(isApply(m) || isArray(m))) {
            throw new TypeError(
              "Either.traverse: Both functions must return an Apply of the same type"
            );
          }
          return either(
            constant(m),
            constant(m.map(_of2))
          );
        }
        return obj = {
          inspect,
          toString: inspect,
          either,
          type: type3,
          swap,
          coalesce,
          bichain,
          equals: equals3,
          ap,
          of: of2,
          sequence,
          traverse,
          alt: alt("alt"),
          bimap: bimap("bimap"),
          concat: concat("concat"),
          chain: chain("chain"),
          map: map3("map")
        }, obj[fl.of] = of2, obj[fl.equals] = equals3, obj[fl.alt] = alt(fl.alt), obj[fl.bimap] = bimap(fl.bimap), obj[fl.concat] = concat(fl.concat), obj[fl.map] = map3(fl.map), obj[fl.chain] = chain(fl.chain), obj["@@type"] = _type, obj.constructor = Either, obj;
      }
      Either.of = _of2;
      Either.type = type3;
      Either[fl.of] = _of2;
      Either["@@type"] = _type;
      Either["@@implements"] = _implements(
        ["alt", "ap", "bimap", "chain", "concat", "equals", "map", "of", "traverse"]
      );
      module.exports = Either;
    }
  });

  // node_modules/crocks/Equiv/index.js
  var require_Equiv = __commonJS({
    "node_modules/crocks/Equiv/index.js"(exports, module) {
      var VERSION = 2;
      var _implements = require_implements();
      var _inspect = require_inspect();
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var type3 = require_types().type("Equiv");
      var _type = require_types().typeFn(type3(), VERSION);
      var fl = require_flNames();
      var _empty = function() {
        return Equiv(function() {
          return true;
        });
      };
      function Equiv(compare) {
        var obj;
        if (!isFunction(compare)) {
          throw new TypeError("Equiv: Comparison function required");
        }
        var compareWith = curry(
          function(x, y) {
            return !!compare(x, y);
          }
        );
        var inspect = function() {
          return "Equiv" + _inspect(compare);
        };
        var empty2 = _empty;
        var valueOf = function() {
          return compareWith;
        };
        function contramap(method) {
          return function(fn) {
            if (!isFunction(fn)) {
              throw new TypeError("Equiv." + method + ": Function required");
            }
            return Equiv(
              function(x, y) {
                return compareWith(fn(x), fn(y));
              }
            );
          };
        }
        function concat(method) {
          return function(m) {
            if (!isSameType(Equiv, m)) {
              throw new TypeError("Equiv." + method + ": Equiv required");
            }
            return Equiv(
              function(x, y) {
                return compareWith(x, y) && m.compareWith(x, y);
              }
            );
          };
        }
        return obj = {
          inspect,
          toString: inspect,
          type: type3,
          compareWith,
          valueOf,
          empty: empty2,
          concat: concat("concat"),
          contramap: contramap("contramap")
        }, obj[fl.empty] = empty2, obj[fl.concat] = concat(fl.concat), obj[fl.contramap] = contramap(fl.contramap), obj["@@type"] = _type, obj.constructor = Equiv, obj;
      }
      Equiv.empty = _empty;
      Equiv.type = type3;
      Equiv[fl.empty] = _empty;
      Equiv["@@type"] = _type;
      Equiv["@@implements"] = _implements(
        ["concat", "contramap", "empty"]
      );
      module.exports = Equiv;
    }
  });

  // node_modules/crocks/Identity/index.js
  var require_Identity = __commonJS({
    "node_modules/crocks/Identity/index.js"(exports, module) {
      var VERSION = 3;
      var _equals2 = require_equals();
      var _implements = require_implements();
      var _innerConcat = require_innerConcat();
      var _inspect = require_inspect();
      var type3 = require_types().type("Identity");
      var _type = require_types().typeFn(type3(), VERSION);
      var fl = require_flNames();
      var isArray = require_isArray();
      var isApply = require_isApply();
      var isApplicative = require_isApplicative();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var _of2 = Identity;
      function Identity(x) {
        var obj;
        if (!arguments.length) {
          throw new TypeError("Identity: Must wrap something");
        }
        var valueOf = function() {
          return x;
        };
        var of2 = _of2;
        var equals3 = function(m) {
          return isSameType(Identity, m) && _equals2(x, m.valueOf());
        };
        var inspect = function() {
          return "Identity" + _inspect(x);
        };
        function concat(method) {
          return function(m) {
            if (!isSameType(Identity, m)) {
              throw new TypeError("Identity." + method + ": Identity of Semigroup required");
            }
            return _innerConcat("Identity." + method, m)(x);
          };
        }
        function map3(method) {
          return function(fn) {
            if (!isFunction(fn)) {
              throw new TypeError("Identity." + method + ": Function required");
            }
            return Identity(fn(x));
          };
        }
        function ap(m) {
          if (!isFunction(x)) {
            throw new TypeError("Identity.ap: Wrapped value must be a function");
          } else if (!isSameType(Identity, m)) {
            throw new TypeError("Identity.ap: Identity required");
          }
          return m.map(x);
        }
        function chain(method) {
          return function(fn) {
            if (!isFunction(fn)) {
              throw new TypeError("Identity." + method + ": Function required");
            }
            var m = fn(x);
            if (!isSameType(Identity, m)) {
              throw new TypeError("Identity." + method + ": Function must return an Identity");
            }
            return m;
          };
        }
        function sequence(f) {
          if (!(isApplicative(f) || isFunction(f))) {
            throw new TypeError(
              "Identity.sequence: Applicative TypeRep or Apply returning function required"
            );
          }
          if (!(isApply(x) || isArray(x))) {
            throw new TypeError("Identity.sequence: Must wrap an Apply");
          }
          return x.map(_of2);
        }
        function traverse(f, fn) {
          if (!(isApplicative(f) || isFunction(f))) {
            throw new TypeError(
              "Identity.traverse: Applicative TypeRep or Apply returning function required for first argument"
            );
          }
          if (!isFunction(fn)) {
            throw new TypeError(
              "Identity.traverse: Apply returning functions required for second argument"
            );
          }
          var m = fn(x);
          if (!(isApply(m) || isArray(m))) {
            throw new TypeError(
              "Identity.traverse: Both functions must return an Apply of the same type"
            );
          }
          return m.map(_of2);
        }
        return obj = {
          inspect,
          toString: inspect,
          valueOf,
          type: type3,
          equals: equals3,
          ap,
          of: of2,
          sequence,
          traverse,
          concat: concat("concat"),
          map: map3("map"),
          chain: chain("chain")
        }, obj[fl.of] = of2, obj[fl.equals] = equals3, obj[fl.concat] = concat(fl.concat), obj[fl.map] = map3(fl.map), obj[fl.chain] = chain(fl.chain), obj["@@type"] = _type, obj.constructor = Identity, obj;
      }
      Identity.of = _of2;
      Identity.type = type3;
      Identity[fl.of] = _of2;
      Identity["@@type"] = _type;
      Identity["@@implements"] = _implements(
        ["ap", "chain", "concat", "equals", "map", "of", "traverse"]
      );
      module.exports = Identity;
    }
  });

  // node_modules/crocks/IO/index.js
  var require_IO = __commonJS({
    "node_modules/crocks/IO/index.js"(exports, module) {
      var VERSION = 2;
      var _implements = require_implements();
      var _inspect = require_inspect();
      var type3 = require_types().type("IO");
      var _type = require_types().typeFn(type3(), VERSION);
      var fl = require_flNames();
      var compose2 = require_compose();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var _of2 = function(x) {
        return IO(function() {
          return x;
        });
      };
      function IO(run3) {
        var obj;
        if (!isFunction(run3)) {
          throw new TypeError("IO: Must wrap a function");
        }
        var of2 = _of2;
        var inspect = function() {
          return "IO" + _inspect(run3);
        };
        function map3(method) {
          return function(fn) {
            if (!isFunction(fn)) {
              throw new TypeError("IO." + method + ": Function required");
            }
            return IO(compose2(fn, run3));
          };
        }
        function ap(m) {
          if (!isSameType(IO, m)) {
            throw new TypeError("IO.ap: IO required");
          }
          return IO(function() {
            var fn = run3();
            if (!isFunction(fn)) {
              throw new TypeError("IO.ap: Wrapped value must be a function");
            }
            return m.map(fn).run();
          });
        }
        function chain(method) {
          return function(fn) {
            if (!isFunction(fn)) {
              throw new TypeError("IO." + method + ": Function required");
            }
            return IO(function() {
              var m = fn(run3());
              if (!isSameType(IO, m)) {
                throw new TypeError("IO." + method + ": Function must return an IO");
              }
              return m.run();
            });
          };
        }
        return obj = {
          inspect,
          toString: inspect,
          run: run3,
          type: type3,
          ap,
          of: of2,
          map: map3("map"),
          chain: chain("chain")
        }, obj[fl.of] = of2, obj[fl.map] = map3(fl.map), obj[fl.chain] = chain(fl.chain), obj["@@type"] = _type, obj.constructor = IO, obj;
      }
      IO.of = _of2;
      IO.type = type3;
      IO[fl.of] = _of2;
      IO["@@type"] = _type;
      IO["@@implements"] = _implements(
        ["ap", "chain", "map", "of"]
      );
      module.exports = IO;
    }
  });

  // node_modules/crocks/core/Maybe.js
  var require_Maybe = __commonJS({
    "node_modules/crocks/core/Maybe.js"(exports, module) {
      var VERSION = 4;
      var _defineUnion = require_defineUnion();
      var _equals2 = require_equals();
      var _implements = require_implements();
      var _innerConcat = require_innerConcat();
      var _inspect = require_inspect();
      var type3 = require_types().type("Maybe");
      var _type = require_types().typeFn(type3(), VERSION);
      var fl = require_flNames();
      var apOrFunc = require_apOrFunc();
      var compose2 = require_compose();
      var isApplicative = require_isApplicative();
      var isApply = require_isApply();
      var isArray = require_isArray();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var constant = function(x) {
        return function() {
          return x;
        };
      };
      var identity2 = function(x) {
        return x;
      };
      var _maybe = _defineUnion({ Nothing: [], Just: ["a"] });
      var Nothing = _maybe.Nothing;
      var Just = _maybe.Just;
      Maybe.Nothing = compose2(Maybe, Nothing);
      Maybe.Just = compose2(Maybe, Just);
      var _of2 = compose2(Maybe, Just);
      var _zero = compose2(Maybe, Nothing);
      function runSequence(x) {
        if (!(isApply(x) || isArray(x))) {
          throw new TypeError(
            "Maybe.sequence: Must wrap an Apply"
          );
        }
        return x.map(_of2);
      }
      function Maybe(u) {
        var obj;
        if (!arguments.length) {
          throw new TypeError("Maybe: Must wrap something, try using Nothing or Just constructors");
        }
        var x = !_maybe.includes(u) ? Just(u) : u;
        var of2 = _of2;
        var zero = _zero;
        var option = function(n) {
          return either(constant(n), identity2);
        };
        var equals3 = function(m) {
          return isSameType(Maybe, m) && either(
            constant(m.either(constant(true), constant(false))),
            function(x2) {
              return m.either(constant(false), function(y) {
                return _equals2(y, x2);
              });
            }
          );
        };
        var inspect = function() {
          return either(
            constant("Nothing"),
            function(x2) {
              return "Just" + _inspect(x2);
            }
          );
        };
        function either(f, g) {
          if (!isFunction(f) || !isFunction(g)) {
            throw new TypeError("Maybe.either: Requires both left and right functions");
          }
          return _maybe.caseOf({
            Nothing: f,
            Just: g
          }, x);
        }
        function concat(method) {
          return function(m) {
            if (!isSameType(Maybe, m)) {
              throw new TypeError("Maybe." + method + ": Maybe of Semigroup required");
            }
            return either(
              Maybe.Nothing,
              _innerConcat("Maybe." + method, m)
            );
          };
        }
        function coalesce(f, g) {
          if (!isFunction(f) || !isFunction(g)) {
            throw new TypeError("Maybe.coalesce: Requires both left and right functions");
          }
          return Maybe.Just(either(f, g));
        }
        function bichain(l, r2) {
          var bichainErr = "Maybe.bichain: Both arguments must be Maybe returning functions";
          if (!(isFunction(l) && isFunction(r2))) {
            throw new TypeError(bichainErr);
          }
          var m = either(l, r2);
          if (!isSameType(Maybe, m)) {
            throw new TypeError(bichainErr);
          }
          return m;
        }
        function map3(method) {
          return function(fn) {
            if (!isFunction(fn)) {
              throw new TypeError("Maybe." + method + ": Function required");
            }
            return either(
              Maybe.Nothing,
              compose2(Maybe.Just, fn)
            );
          };
        }
        function alt(method) {
          return function(m) {
            if (!isSameType(Maybe, m)) {
              throw new TypeError("Maybe." + method + ": Maybe required");
            }
            return either(
              constant(m),
              Maybe.Just
            );
          };
        }
        function ap(m) {
          var fn = option(constant(void 0));
          if (!isFunction(fn)) {
            throw new TypeError("Maybe.ap: Wrapped value must be a function");
          } else if (!isSameType(Maybe, m)) {
            throw new TypeError("Maybe.ap: Maybe required");
          }
          return either(
            Maybe.Nothing,
            m.map
          );
        }
        function chain(method) {
          return function(fn) {
            if (!isFunction(fn)) {
              throw new TypeError("Maybe." + method + ": Function required");
            }
            var m = either(Maybe.Nothing, fn);
            if (!isSameType(Maybe, m)) {
              throw new TypeError("Maybe." + method + ": Function must return a Maybe");
            }
            return m;
          };
        }
        function sequence(f) {
          if (!(isApplicative(f) || isFunction(f))) {
            throw new TypeError(
              "Maybe.sequence: Applicative TypeRep or Apply returning function required"
            );
          }
          var af = apOrFunc(f);
          return either(
            compose2(af, Maybe.Nothing),
            runSequence
          );
        }
        function traverse(f, fn) {
          if (!(isApplicative(f) || isFunction(f))) {
            throw new TypeError(
              "Maybe.traverse: Applicative TypeRep or Apply returning function required for first argument"
            );
          }
          if (!isFunction(fn)) {
            throw new TypeError(
              "Maybe.traverse: Apply returning function required for second argument"
            );
          }
          var af = apOrFunc(f);
          var m = either(compose2(af, Maybe.Nothing), fn);
          if (!(isApply(m) || isArray(m))) {
            throw new TypeError(
              "Maybe.traverse: Both functions must return an Apply of the same type"
            );
          }
          return either(
            constant(m),
            constant(m.map(_of2))
          );
        }
        return obj = {
          inspect,
          toString: inspect,
          either,
          option,
          type: type3,
          equals: equals3,
          bichain,
          coalesce,
          zero,
          ap,
          of: of2,
          sequence,
          traverse,
          alt: alt("alt"),
          chain: chain("chain"),
          concat: concat("concat"),
          map: map3("map")
        }, obj[fl.zero] = zero, obj[fl.of] = of2, obj[fl.equals] = equals3, obj[fl.alt] = alt(fl.alt), obj[fl.concat] = concat(fl.concat), obj[fl.map] = map3(fl.map), obj[fl.chain] = chain(fl.chain), obj["@@type"] = _type, obj.constructor = Maybe, obj;
      }
      Maybe.of = _of2;
      Maybe.zero = _zero;
      Maybe.type = type3;
      Maybe[fl.of] = _of2;
      Maybe[fl.zero] = _zero;
      Maybe["@@type"] = _type;
      Maybe["@@implements"] = _implements(
        ["alt", "ap", "chain", "concat", "equals", "map", "of", "traverse", "zero"]
      );
      module.exports = Maybe;
    }
  });

  // node_modules/crocks/core/List.js
  var require_List = __commonJS({
    "node_modules/crocks/core/List.js"(exports, module) {
      var VERSION = 4;
      var _equals2 = require_equals();
      var _implements = require_implements();
      var _inspect = require_inspect();
      var type3 = require_types().type("List");
      var _type = require_types().typeFn(type3(), VERSION);
      var fl = require_flNames();
      var array = require_array();
      var apOrFunc = require_apOrFunc();
      var isApplicative = require_isApplicative();
      var isApply = require_isApply();
      var isArray = require_isArray();
      var isEmpty = require_isEmpty();
      var isFunction = require_isFunction();
      var isPredOrFunc = require_isPredOrFunc();
      var isSameType = require_isSameType();
      var isSemigroup = require_isSemigroup();
      var predOrFunc = require_predOrFunc();
      var not = function(fn) {
        return function(x) {
          return !fn(x);
        };
      };
      var _prepend = function(x) {
        return function(m) {
          return x.concat(m);
        };
      };
      var ref = require_Maybe();
      var Nothing = ref.Nothing;
      var Just = ref.Just;
      var _of2 = function(x) {
        return List([x]);
      };
      var _empty = function() {
        return List([]);
      };
      function fromArray(xs) {
        if (!isArray(xs)) {
          throw new TypeError("List.fromArray: Array required");
        }
        return xs.reduce(function(res, x) {
          return res.concat(List.of(x));
        }, List.empty());
      }
      function applyTraverse(x, y) {
        if (isArray(x)) {
          return array.ap(x, array.map(function(v) {
            return _prepend(List.of(v));
          }, y));
        }
        return y.map(function(v) {
          return _prepend(List.of(v));
        }).ap(x);
      }
      function runSequence(acc, x) {
        if (!((isApply(acc) || isArray(acc)) && isSameType(acc, x))) {
          throw new TypeError(
            "List.sequence: Must wrap Applys of the same type"
          );
        }
        return applyTraverse(acc, x);
      }
      function runTraverse(f) {
        return function(acc, x) {
          var m = f(x);
          if (!((isApply(acc) || isArray(acc)) && isSameType(acc, m))) {
            throw new TypeError("List.traverse: Both functions must return an Apply of the same type");
          }
          return applyTraverse(acc, m);
        };
      }
      function List(x) {
        var obj;
        if (!arguments.length) {
          throw new TypeError("List: List must wrap something");
        }
        var xs = isArray(x) ? x.slice() : [x];
        function flatMap(method, fn) {
          return function(y, x2) {
            var m = fn(x2);
            if (!isSameType(List, m)) {
              throw new TypeError("List." + method + ": Function must return a List");
            }
            return y.concat(m.valueOf());
          };
        }
        var of2 = _of2;
        var valueOf = function() {
          return xs.slice();
        };
        var toArray = valueOf;
        var empty2 = _empty;
        var inspect = function() {
          return "List" + _inspect(xs);
        };
        var head = function() {
          return xs.length ? Just(xs[0]) : Nothing();
        };
        var tail3 = function() {
          return xs.length && xs.length > 1 ? Just(List(xs.slice(1))) : Nothing();
        };
        var cons = function(x2) {
          return List([x2].concat(xs));
        };
        var equals3 = function(m) {
          return isSameType(List, m) && _equals2(xs, m.valueOf());
        };
        function concat(method) {
          return function(m) {
            if (!isSameType(List, m)) {
              throw new TypeError("List." + method + ": List required");
            }
            return List(xs.concat(m.valueOf()));
          };
        }
        function reduce2(method) {
          return function(fn, i2) {
            if (!isFunction(fn)) {
              throw new TypeError("List." + method + ": Function required for first argument");
            }
            return xs.reduce(fn, i2);
          };
        }
        function reduceRight(fn, i2) {
          if (!isFunction(fn)) {
            throw new TypeError("List.reduceRight: Function required for first argument");
          }
          return xs.reduceRight(fn, i2);
        }
        function fold() {
          if (isEmpty(xs)) {
            throw new TypeError("List.fold: List must contain at least one Semigroup");
          }
          var head2 = xs[0];
          if (!isSemigroup(head2)) {
            throw new TypeError("List.fold: List must contain Semigroups of the same type");
          }
          return xs.reduce(function(x2, y) {
            if (!isSameType(x2, y)) {
              throw new TypeError("List.fold: List must contain Semigroups of the same type");
            }
            return x2.concat(y);
          });
        }
        function foldMap(fn) {
          if (!isFunction(fn)) {
            throw new TypeError(
              "List.foldMap: Semigroup returning function required"
            );
          }
          if (isEmpty(xs)) {
            throw new TypeError(
              "List.foldMap: List must not be empty"
            );
          }
          var head2 = fn(xs[0]);
          if (!isSemigroup(head2)) {
            throw new TypeError(
              "List.foldMap: Provided function must return Semigroups of the same type"
            );
          }
          return xs.length !== 1 ? xs.slice(1).reduce(function(semi, x2) {
            var val = fn(x2);
            if (!(isSameType(semi, val) && isSemigroup(val))) {
              throw new TypeError(
                "List.foldMap: Provided function must return Semigroups of the same type"
              );
            }
            return semi.concat(val);
          }, head2) : head2;
        }
        function filter3(method) {
          return function(pred) {
            if (!isPredOrFunc(pred)) {
              throw new TypeError("List." + method + ": Pred or predicate function required");
            }
            return List(
              xs.reduce(
                function(x2, y) {
                  return predOrFunc(pred, y) ? x2.concat([y]) : x2;
                },
                []
              )
            );
          };
        }
        function reject(pred) {
          if (!isPredOrFunc(pred)) {
            throw new TypeError("List.reject: Pred or predicate function required");
          }
          var fn = not(function(x2) {
            return predOrFunc(pred, x2);
          });
          return List(
            xs.reduce(
              function(x2, y) {
                return fn(y) ? x2.concat([y]) : x2;
              },
              []
            )
          );
        }
        function map3(method) {
          return function(fn) {
            if (!isFunction(fn)) {
              throw new TypeError("List." + method + ": Function required");
            }
            return List(xs.map(function(x2) {
              return fn(x2);
            }));
          };
        }
        function ap(m) {
          if (!isSameType(List, m)) {
            throw new TypeError("List.ap: List required");
          }
          var ar = m.valueOf();
          return List(
            xs.reduce(function(acc, fn) {
              if (!isFunction(fn)) {
                throw new TypeError("List.ap: Wrapped values must all be functions");
              }
              return acc.concat(ar.map(function(x2) {
                return fn(x2);
              }));
            }, [])
          );
        }
        function chain(method) {
          return function(fn) {
            if (!isFunction(fn)) {
              throw new TypeError("List." + method + ": Function required");
            }
            return List(xs.reduce(flatMap(method, fn), []));
          };
        }
        function sequence(f) {
          if (!(isApplicative(f) || isFunction(f))) {
            throw new TypeError(
              "List.sequence: Applicative TypeRep or Apply returning function required"
            );
          }
          var af = apOrFunc(f);
          return reduceRight(
            runSequence,
            af(List.empty())
          );
        }
        function traverse(f, fn) {
          if (!(isApplicative(f) || isFunction(f))) {
            throw new TypeError(
              "List.traverse: Applicative TypeRep or Apply returning function required for first argument"
            );
          }
          if (!isFunction(fn)) {
            throw new TypeError(
              "List.traverse: Apply returning functions required for second argument"
            );
          }
          var af = apOrFunc(f);
          return reduceRight(
            runTraverse(fn),
            af(List.empty())
          );
        }
        return obj = {
          inspect,
          toString: inspect,
          valueOf,
          toArray,
          head,
          tail: tail3,
          cons,
          type: type3,
          equals: equals3,
          empty: empty2,
          reduceRight,
          fold,
          foldMap,
          reject,
          ap,
          of: of2,
          sequence,
          traverse,
          concat: concat("concat"),
          map: map3("map"),
          chain: chain("chain"),
          reduce: reduce2("reduce"),
          filter: filter3("filter")
        }, obj[fl.of] = of2, obj[fl.equals] = equals3, obj[fl.concat] = concat(fl.concat), obj[fl.empty] = empty2, obj[fl.map] = map3(fl.map), obj[fl.chain] = chain(fl.chain), obj[fl.reduce] = reduce2(fl.reduce), obj[fl.filter] = filter3(fl.filter), obj["@@type"] = _type, obj.constructor = List, obj;
      }
      List.of = _of2;
      List.empty = _empty;
      List.type = type3;
      List[fl.of] = _of2;
      List[fl.empty] = _empty;
      List["@@type"] = _type;
      List.fromArray = fromArray;
      List["@@implements"] = _implements(
        ["ap", "chain", "concat", "empty", "equals", "map", "of", "reduce", "traverse"]
      );
      module.exports = List;
    }
  });

  // node_modules/crocks/List/index.js
  var require_List2 = __commonJS({
    "node_modules/crocks/List/index.js"(exports, module) {
      module.exports = require_List();
    }
  });

  // node_modules/crocks/Maybe/index.js
  var require_Maybe2 = __commonJS({
    "node_modules/crocks/Maybe/index.js"(exports, module) {
      module.exports = require_Maybe();
    }
  });

  // node_modules/crocks/core/Pair.js
  var require_Pair = __commonJS({
    "node_modules/crocks/core/Pair.js"(exports, module) {
      var VERSION = 4;
      var _equals2 = require_equals();
      var _implements = require_implements();
      var _inspect = require_inspect();
      var type3 = require_types().type("Pair");
      var _type = require_types().typeFn(type3(), VERSION);
      var fl = require_flNames();
      var isApplicative = require_isApplicative();
      var isApply = require_isApply();
      var isArray = require_isArray();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var isSemigroup = require_isSemigroup();
      function Pair(l, r2) {
        var obj;
        if (arguments.length < 2) {
          throw new TypeError("Pair: Must provide a first and second value");
        }
        var fst = function() {
          return l;
        };
        var snd = function() {
          return r2;
        };
        var inspect = function() {
          return "Pair(" + _inspect(l) + "," + _inspect(r2) + " )";
        };
        var toArray = function() {
          return [l, r2];
        };
        function merge2(fn) {
          if (!isFunction(fn)) {
            throw new TypeError("Pair.merge: Binary function required");
          }
          return fn(fst(), snd());
        }
        function equals3(m) {
          return isSameType(Pair, m) && _equals2(m.fst(), fst()) && _equals2(m.snd(), snd());
        }
        function concat(method) {
          return function(m) {
            if (!isSameType(Pair, m)) {
              throw new TypeError("Pair." + method + ": Pair required");
            }
            var lf = fst();
            var ls = snd();
            var rf = m.fst();
            var rs = m.snd();
            if (!(isSemigroup(lf) && isSemigroup(ls))) {
              throw new TypeError("Pair." + method + ": Both Pairs must contain Semigroups of the same type");
            }
            if (!(isSameType(lf, rf) && isSameType(ls, rs))) {
              throw new TypeError("Pair." + method + ": Both Pairs must contain Semigroups of the same type");
            }
            return Pair(
              lf.concat(rf),
              ls.concat(rs)
            );
          };
        }
        function swap(f, g) {
          if (!isFunction(f) || !isFunction(g)) {
            throw new TypeError("Pair.swap: Requires both left and right functions");
          }
          return Pair(g(r2), f(l));
        }
        function map3(method) {
          return function(fn) {
            if (!isFunction(fn)) {
              throw new TypeError("Pair." + method + ": Function required");
            }
            return Pair(l, fn(r2));
          };
        }
        function bimap(method) {
          return function(f, g) {
            if (!isFunction(f) || !isFunction(g)) {
              throw new TypeError("Pair." + method + ": Function required for both arguments");
            }
            return Pair(f(l), g(r2));
          };
        }
        function ap(m) {
          if (!isSameType(Pair, m)) {
            throw new TypeError("Pair.ap: Pair required");
          }
          var fn = snd();
          if (!isFunction(fn)) {
            throw new TypeError("Pair.ap: Function required for second value");
          }
          var l2 = fst();
          var r3 = m.fst();
          if (!(isSemigroup(l2) && isSameType(l2, r3))) {
            throw new TypeError("Pair.ap: Semigroups of the same type is required for first values");
          }
          return Pair(l2.concat(r3), fn(m.snd()));
        }
        function chain(method) {
          return function(fn) {
            var l2 = fst();
            if (!isFunction(fn)) {
              throw new TypeError("Pair." + method + ": Function required");
            }
            if (!isSemigroup(l2)) {
              throw new TypeError("Pair." + method + ": Semigroups of the same type required for first values");
            }
            var m = fn(snd());
            if (!isSameType(Pair, m)) {
              throw new TypeError("Pair." + method + ": Function must return a Pair");
            }
            var r3 = m.fst();
            if (!isSameType(l2, r3)) {
              throw new TypeError("Pair." + method + ": Semigroups of the same type required for first values");
            }
            return Pair(
              l2.concat(r3),
              m.snd()
            );
          };
        }
        function sequence(f) {
          if (!(isApplicative(f) || isFunction(f))) {
            throw new TypeError(
              "Pair.sequence: Applicative TypeRep or Apply returning function required"
            );
          }
          if (!(isApply(r2) || isArray(r2))) {
            throw new TypeError(
              "Pair.sequence: Must wrap an Apply in the second"
            );
          }
          return r2.map(function(v) {
            return Pair(l, v);
          });
        }
        function traverse(f, fn) {
          if (!(isApplicative(f) || isFunction(f))) {
            throw new TypeError(
              "Pair.traverse: Applicative TypeRep or Apply returning function required for first argument"
            );
          }
          if (!isFunction(fn)) {
            throw new TypeError(
              "Pair.traverse: Apply returning function required for second argument"
            );
          }
          var m = fn(r2);
          if (!(isApply(m) || isArray(m))) {
            throw new TypeError(
              "Pair.traverse: Both functions must return an Apply of the same type"
            );
          }
          return m.map(function(v) {
            return Pair(l, v);
          });
        }
        function extend(method) {
          return function(fn) {
            if (!isFunction(fn)) {
              throw new TypeError("Pair." + method + ": Function required");
            }
            return Pair(l, fn(Pair(l, r2)));
          };
        }
        return obj = {
          inspect,
          toString: inspect,
          fst,
          snd,
          toArray,
          type: type3,
          merge: merge2,
          equals: equals3,
          swap,
          ap,
          sequence,
          traverse,
          concat: concat("concat"),
          map: map3("map"),
          bimap: bimap("bimap"),
          chain: chain("chain"),
          extend: extend("extend")
        }, obj[fl.equals] = equals3, obj[fl.concat] = concat(fl.concat), obj[fl.map] = map3(fl.map), obj[fl.bimap] = bimap(fl.bimap), obj[fl.chain] = chain(fl.chain), obj[fl.extend] = extend(fl.extend), obj["@@type"] = _type, obj.constructor = Pair, obj;
      }
      Pair.type = type3;
      Pair["@@type"] = _type;
      Pair["@@implements"] = _implements(
        ["ap", "bimap", "chain", "concat", "extend", "equals", "map", "traverse"]
      );
      module.exports = Pair;
    }
  });

  // node_modules/crocks/Pair/index.js
  var require_Pair2 = __commonJS({
    "node_modules/crocks/Pair/index.js"(exports, module) {
      module.exports = require_Pair();
    }
  });

  // node_modules/crocks/core/Pred.js
  var require_Pred = __commonJS({
    "node_modules/crocks/core/Pred.js"(exports, module) {
      var VERSION = 2;
      var _implements = require_implements();
      var _inspect = require_inspect();
      var type3 = require_types().type("Pred");
      var _type = require_types().typeFn(type3(), VERSION);
      var fl = require_flNames();
      var compose2 = require_compose();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var _empty = function() {
        return Pred(function() {
          return true;
        });
      };
      function Pred(pred) {
        var obj;
        if (!isFunction(pred)) {
          throw new TypeError("Pred: Predicate function required");
        }
        var runWith = function(x) {
          return !!pred(x);
        };
        var inspect = function() {
          return "Pred" + _inspect(runWith);
        };
        var empty2 = _empty;
        var valueOf = function() {
          return runWith;
        };
        function concat(method) {
          return function(m) {
            if (!isSameType(Pred, m)) {
              throw new TypeError("Pred." + method + ": Pred required");
            }
            return Pred(function(x) {
              return !!runWith(x) && !!m.runWith(x);
            });
          };
        }
        function contramap(method) {
          return function(fn) {
            if (!isFunction(fn)) {
              throw new TypeError("Pred." + method + ": Function required");
            }
            return Pred(compose2(runWith, fn));
          };
        }
        return obj = {
          inspect,
          toString: inspect,
          runWith,
          type: type3,
          valueOf,
          empty: empty2,
          concat: concat("concat"),
          contramap: contramap("contramap")
        }, obj[fl.empty] = empty2, obj[fl.concat] = concat(fl.concat), obj[fl.contramap] = contramap(fl.contramap), obj["@@type"] = _type, obj.constructor = Pred, obj;
      }
      Pred.empty = _empty;
      Pred.type = type3;
      Pred[fl.empty] = _empty;
      Pred["@@type"] = _type;
      Pred["@@implements"] = _implements(
        ["concat", "contramap", "empty"]
      );
      module.exports = Pred;
    }
  });

  // node_modules/crocks/Pred/index.js
  var require_Pred2 = __commonJS({
    "node_modules/crocks/Pred/index.js"(exports, module) {
      module.exports = require_Pred();
    }
  });

  // node_modules/crocks/Reader/index.js
  var require_Reader = __commonJS({
    "node_modules/crocks/Reader/index.js"(exports, module) {
      var VERSION = 2;
      var _implements = require_implements();
      var _inspect = require_inspect();
      var type3 = require_types().type("Reader");
      var _type = require_types().typeFn(type3(), VERSION);
      var fl = require_flNames();
      var compose2 = require_compose();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var _of2 = function(x) {
        return Reader(function() {
          return x;
        });
      };
      function ask2(fn) {
        if (!arguments.length) {
          return Reader(function(x) {
            return x;
          });
        }
        if (isFunction(fn)) {
          return Reader(fn);
        }
        throw new TypeError("Reader.ask: No argument or function required");
      }
      function Reader(runWith) {
        var obj;
        if (!arguments.length || !isFunction(runWith)) {
          throw new TypeError("Reader: Must wrap a function");
        }
        var of2 = _of2;
        var inspect = function() {
          return "Reader" + _inspect(runWith);
        };
        function map3(method) {
          return function(fn) {
            if (!isFunction(fn)) {
              throw new TypeError("Reader." + method + ": Function required");
            }
            return Reader(compose2(fn, runWith));
          };
        }
        function ap(m) {
          if (!isSameType(Reader, m)) {
            throw new TypeError("Reader.ap: Reader required");
          }
          return Reader(function(e) {
            var fn = runWith(e);
            if (!isFunction(fn)) {
              throw new TypeError("Reader.ap: Wrapped function must return a function");
            }
            return m.map(fn).runWith(e);
          });
        }
        function chain(method) {
          return function(fn) {
            if (!isFunction(fn)) {
              throw new TypeError("Reader." + method + ": Function required");
            }
            return Reader(function(e) {
              var m = fn(runWith(e));
              if (!isSameType(Reader, m)) {
                throw new TypeError("Reader." + method + ": Function must return a Reader");
              }
              return m.runWith(e);
            });
          };
        }
        return obj = {
          inspect,
          toString: inspect,
          runWith,
          type: type3,
          ap,
          of: of2,
          map: map3("map"),
          chain: chain("chain")
        }, obj[fl.of] = of2, obj[fl.map] = map3(fl.map), obj[fl.chain] = chain(fl.chain), obj["@@type"] = _type, obj.constructor = Reader, obj;
      }
      Reader.of = _of2;
      Reader.ask = ask2;
      Reader.type = type3;
      Reader[fl.of] = _of2;
      Reader["@@type"] = _type;
      Reader["@@implements"] = _implements(
        ["ap", "chain", "map", "of"]
      );
      module.exports = Reader;
    }
  });

  // node_modules/crocks/Reader/ReaderT.js
  var require_ReaderT = __commonJS({
    "node_modules/crocks/Reader/ReaderT.js"(exports, module) {
      var VERSION = 1;
      var _implements = require_implements();
      var _inspect = require_inspect();
      var _type = require_types().type("Reader")();
      var _typeString = require_types().typeFn(_type, VERSION);
      var fl = require_flNames();
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isMonad = require_isMonad();
      var isSameType = require_isSameType();
      function _ReaderT(Monad) {
        if (!isMonad(Monad)) {
          throw new TypeError("ReaderT: Monad required for construction");
        }
        var type3 = function() {
          return _type + "( " + Monad.type() + " )";
        };
        var typeString = _typeString + "( " + Monad["@@type"] + " )";
        var of2 = function(x) {
          return ReaderT2(function() {
            return Monad.of(x);
          });
        };
        function ask2(fn) {
          if (!arguments.length) {
            return ReaderT2(Monad.of);
          }
          if (isFunction(fn)) {
            return ReaderT2(Monad.of).map(fn);
          }
          throw new TypeError(type3() + ".ask: No argument or function required");
        }
        function lift2(m) {
          if (!isSameType(Monad, m)) {
            throw new TypeError(type3() + ".lift: " + Monad.type() + " instance required");
          }
          return ReaderT2(function() {
            return m;
          });
        }
        function liftFn(fn, x) {
          if (!isFunction(fn)) {
            throw new TypeError(type3() + ".liftFn: " + Monad.type() + " returning function required");
          }
          return ReaderT2(function() {
            var m = fn(x);
            if (!isSameType(Monad, m)) {
              throw new TypeError(type3() + ".liftFn: " + Monad.type() + " returning function required");
            }
            return m;
          });
        }
        function ReaderT2(wrapped) {
          var obj;
          if (!isFunction(wrapped)) {
            throw new TypeError(type3() + ": " + Monad.type() + " returning function required");
          }
          var inspect = function() {
            return "" + type3() + _inspect(wrapped);
          };
          function runWith(x) {
            var result = wrapped(x);
            if (!isSameType(Monad, result)) {
              throw new TypeError(type3() + ": " + Monad.type() + " must be returned by wrapped function");
            }
            return result;
          }
          function map3(fn) {
            if (!isFunction(fn)) {
              throw new TypeError(type3() + ".map: Function required");
            }
            return ReaderT2(function(e) {
              return runWith(e).map(fn);
            });
          }
          function ap(m) {
            if (!isSameType(ReaderT2, m)) {
              throw new TypeError(type3() + ".ap: " + type3() + " required");
            }
            return ReaderT2(function(e) {
              return runWith(e).ap(m.runWith(e));
            });
          }
          function chain(fn) {
            if (!isFunction(fn)) {
              throw new TypeError(type3() + ".chain: " + type3() + " returning function required");
            }
            return ReaderT2(
              function(e) {
                return runWith(e).chain(function(inner) {
                  var m = fn(inner);
                  if (!isSameType(ReaderT2, m)) {
                    throw new TypeError(type3() + ".chain: Function must return a " + type3());
                  }
                  return m.runWith(e);
                });
              }
            );
          }
          return obj = {
            inspect,
            toString: inspect,
            type: type3,
            runWith,
            of: of2,
            map: map3,
            ap,
            chain
          }, obj[fl.of] = of2, obj[fl.map] = map3, obj[fl.chain] = chain, obj["@@type"] = typeString, obj.constructor = ReaderT2, obj;
        }
        ReaderT2.type = type3;
        ReaderT2.of = of2;
        ReaderT2.ask = ask2;
        ReaderT2.lift = lift2;
        ReaderT2.liftFn = curry(liftFn);
        ReaderT2[fl.of] = of2;
        ReaderT2["@@type"] = typeString;
        ReaderT2["@@implements"] = _implements(
          ["ap", "chain", "map", "of"]
        );
        return ReaderT2;
      }
      module.exports = _ReaderT;
    }
  });

  // node_modules/crocks/Result/index.js
  var require_Result = __commonJS({
    "node_modules/crocks/Result/index.js"(exports, module) {
      var VERSION = 4;
      var _defineUnion = require_defineUnion();
      var _equals2 = require_equals();
      var _implements = require_implements();
      var _innerConcat = require_innerConcat();
      var _inspect = require_inspect();
      var type3 = require_types().type("Result");
      var _type = require_types().typeFn(type3(), VERSION);
      var fl = require_flNames();
      var apOrFunc = require_apOrFunc();
      var compose2 = require_compose();
      var isApplicative = require_isApplicative();
      var isApply = require_isApply();
      var isArray = require_isArray();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var isSemigroup = require_isSemigroup();
      var constant = function(x) {
        return function() {
          return x;
        };
      };
      var _result = _defineUnion({ Err: ["a"], Ok: ["b"] });
      Result.Err = compose2(Result, _result.Err);
      Result.Ok = compose2(Result, _result.Ok);
      var _of2 = Result.Ok;
      var concatApErr = function(m) {
        return function(x) {
          return Result.Err(m.either(
            function(y) {
              return isSemigroup(x) && isSameType(y, x) ? x.concat(y) : x;
            },
            function() {
              return x;
            }
          ));
        };
      };
      var concatAltErr = function(r2) {
        return function(l) {
          return Result.Err(isSemigroup(r2) && isSameType(l, r2) ? l.concat(r2) : r2);
        };
      };
      function runSequence(x) {
        if (!(isApply(x) || isArray(x))) {
          throw new TypeError(
            "Result.sequence: Must wrap an Apply"
          );
        }
        return x.map(_of2);
      }
      function Result(u) {
        var obj;
        if (!arguments.length) {
          throw new TypeError("Result: Must wrap something, try using Err or Ok constructors");
        }
        var x = !_result.includes(u) ? _result.Ok(u) : u;
        var equals3 = function(m) {
          return isSameType(Result, m) && either(
            function(x2) {
              return m.either(function(y) {
                return _equals2(y, x2);
              }, constant(false));
            },
            function(x2) {
              return m.either(constant(false), function(y) {
                return _equals2(y, x2);
              });
            }
          );
        };
        var of2 = _of2;
        var inspect = function() {
          return either(
            function(l) {
              return "Err" + _inspect(l);
            },
            function(r2) {
              return "Ok" + _inspect(r2);
            }
          );
        };
        function either(f, g) {
          if (!isFunction(f) || !isFunction(g)) {
            throw new TypeError("Result.either: Requires both invalid and valid functions");
          }
          return _result.caseOf({
            Err: f,
            Ok: g
          }, x);
        }
        function concat(method) {
          return function(m) {
            if (!isSameType(Result, m)) {
              throw new TypeError("Result." + method + ": Result of Semigroup required");
            }
            return either(
              Result.Err,
              _innerConcat("Result." + method, m)
            );
          };
        }
        function swap(f, g) {
          if (!isFunction(f) || !isFunction(g)) {
            throw new TypeError("Result.swap: Requires both left and right functions");
          }
          return either(
            compose2(Result.Ok, f),
            compose2(Result.Err, g)
          );
        }
        function coalesce(f, g) {
          if (!isFunction(f) || !isFunction(g)) {
            throw new TypeError("Result.coalesce: Requires both left and right functions");
          }
          return Result.Ok(either(f, g));
        }
        function bichain(l, r2) {
          var bichainErr = "Result.bichain: Both arguments must be Result returning functions";
          if (!(isFunction(l) && isFunction(r2))) {
            throw new TypeError(bichainErr);
          }
          var m = either(l, r2);
          if (!isSameType(Result, m)) {
            throw new TypeError(bichainErr);
          }
          return m;
        }
        function map3(method) {
          return function(fn) {
            if (!isFunction(fn)) {
              throw new TypeError("Result." + method + ": Function required");
            }
            return either(
              Result.Err,
              compose2(Result.Ok, fn)
            );
          };
        }
        function bimap(method) {
          return function(f, g) {
            if (!isFunction(f) || !isFunction(g)) {
              throw new TypeError("Result." + method + ": Requires both left and right functions");
            }
            return either(
              compose2(Result.Err, f),
              compose2(Result.Ok, g)
            );
          };
        }
        function alt(method) {
          return function(m) {
            if (!isSameType(Result, m)) {
              throw new TypeError("Result." + method + ": Result required");
            }
            return m.either(
              function(r2) {
                return either(concatAltErr(r2), Result.Ok);
              },
              function(r2) {
                return either(function() {
                  return Result.Ok(r2);
                }, Result.Ok);
              }
            );
          };
        }
        function ap(m) {
          if (!isSameType(Result, m)) {
            throw new TypeError("Result.ap: Result required");
          }
          return either(
            concatApErr(m),
            function(fn) {
              if (!isFunction(fn)) {
                throw new TypeError("Result.ap: Wrapped value must be a function");
              }
              return m.either(Result.Err, function() {
                return m.map(fn);
              });
            }
          );
        }
        function chain(method) {
          return function(fn) {
            if (!isFunction(fn)) {
              throw new TypeError("Result." + method + ": Result returning function required");
            }
            var m = either(Result.Err, fn);
            if (!isSameType(Result, m)) {
              throw new TypeError("Result." + method + ": Function must return a Result");
            }
            return m;
          };
        }
        function sequence(f) {
          if (!(isApplicative(f) || isFunction(f))) {
            throw new TypeError(
              "Result.sequence: Applicative TypeRep or Apply returning function required"
            );
          }
          var af = apOrFunc(f);
          return either(
            compose2(af, Result.Err),
            runSequence
          );
        }
        function traverse(f, fn) {
          if (!(isApplicative(f) || isFunction(f))) {
            throw new TypeError(
              "Result.traverse: Applicative TypeRep of Apply returning function required for first argument"
            );
          }
          if (!isFunction(fn)) {
            throw new TypeError(
              "Result.traverse: Apply returning functions required for both arguments"
            );
          }
          var af = apOrFunc(f);
          var m = either(compose2(af, Result.Err), fn);
          if (!(isApply(m) || isArray(m))) {
            throw new TypeError("Result.traverse: Both functions must return an Apply of the same type");
          }
          return either(
            constant(m),
            constant(m.map(_of2))
          );
        }
        return obj = {
          inspect,
          toString: inspect,
          equals: equals3,
          type: type3,
          either,
          swap,
          coalesce,
          bichain,
          ap,
          of: of2,
          sequence,
          traverse,
          alt: alt("alt"),
          bimap: bimap("bimap"),
          concat: concat("concat"),
          map: map3("map"),
          chain: chain("chain")
        }, obj[fl.of] = of2, obj[fl.equals] = equals3, obj[fl.alt] = alt(fl.alt), obj[fl.bimap] = bimap(fl.bimap), obj[fl.concat] = concat(fl.concat), obj[fl.map] = map3(fl.map), obj[fl.chain] = chain(fl.chain), obj["@@type"] = _type, obj.constructor = Result, obj;
      }
      Result.of = _of2;
      Result.type = type3;
      Result[fl.of] = _of2;
      Result["@@type"] = _type;
      Result["@@implements"] = _implements(
        ["alt", "ap", "bimap", "chain", "concat", "equals", "map", "of", "traverse"]
      );
      module.exports = Result;
    }
  });

  // node_modules/crocks/Star/index.js
  var require_Star = __commonJS({
    "node_modules/crocks/Star/index.js"(exports, module) {
      var VERSION = 2;
      var _implements = require_implements();
      var _inspect = require_inspect();
      var _type = require_types().type("Star");
      var __type = require_types().typeFn(_type(), VERSION);
      var fl = require_flNames();
      var array = require_array();
      var isFunction = require_isFunction();
      var isMonad = require_isMonad();
      var isSameType = require_isSameType();
      var Pair = require_Pair();
      var merge2 = function(fn, m) {
        return m.merge(fn);
      };
      var sequence = function(af, m) {
        return array.sequence(af, m);
      };
      function _Star(Monad) {
        if (!isMonad(Monad)) {
          throw new TypeError("Star: Monad required for construction");
        }
        var _id = function() {
          return Star(Monad.of);
        };
        var innerType = Monad.type();
        var innerFullType = Monad["@@type"];
        var outerType = _type() + "( " + innerType + " )";
        var typeString = __type + "( " + innerFullType + " )";
        var type3 = function() {
          return outerType;
        };
        function Star(runWith) {
          var obj;
          if (!isFunction(runWith)) {
            throw new TypeError(outerType + ": Function in the form (a -> m b) required");
          }
          var inspect = function() {
            return "" + outerType + _inspect(runWith);
          };
          var id = _id;
          function compose2(method) {
            return function(s) {
              if (!isSameType(Star, s)) {
                throw new TypeError(outerType + "." + method + ": " + outerType + " required");
              }
              return Star(function(x) {
                var m = runWith(x);
                if (!isSameType(Monad, m)) {
                  throw new TypeError(outerType + "." + method + ": Computations must return a type of " + innerType);
                }
                return m.chain(function(val) {
                  var inner = s.runWith(val);
                  if (!isSameType(m, inner)) {
                    throw new TypeError(outerType + "." + method + ": Both computations must return a type of " + innerType);
                  }
                  return inner;
                });
              });
            };
          }
          function map3(method) {
            return function(fn) {
              if (!isFunction(fn)) {
                throw new TypeError(outerType + "." + method + ": Function required");
              }
              return Star(function(x) {
                var m = runWith(x);
                if (!isSameType(Monad, m)) {
                  throw new TypeError(outerType + "." + method + ": Computations must return a type of " + innerType);
                }
                return m.map(fn);
              });
            };
          }
          function contramap(method) {
            return function(fn) {
              if (!isFunction(fn)) {
                throw new TypeError(outerType + "." + method + ": Function required");
              }
              return Star(function(x) {
                return runWith(fn(x));
              });
            };
          }
          function promap(method) {
            return function(l, r2) {
              if (!isFunction(l) || !isFunction(r2)) {
                throw new TypeError(outerType + "." + method + ": Functions required for both arguments");
              }
              return Star(function(x) {
                var m = runWith(l(x));
                if (!isSameType(Monad, m)) {
                  throw new TypeError(outerType + "." + method + ": Computation must return a type of " + innerType);
                }
                return m.map(r2);
              });
            };
          }
          function first() {
            return Star(function(x) {
              if (!isSameType(Pair, x)) {
                throw TypeError(outerType + ".first: Pair required for computation input");
              }
              var m = runWith(x.fst());
              if (!isSameType(Monad, m)) {
                throw new TypeError(outerType + ".first: Computation must return a type of " + innerType);
              }
              return m.map(function(l) {
                return Pair(l, x.snd());
              });
            });
          }
          function second() {
            return Star(function(x) {
              if (!isSameType(Pair, x)) {
                throw TypeError(outerType + ".second: Pair required for computation input");
              }
              var m = runWith(x.snd());
              if (!isSameType(Monad, m)) {
                throw new TypeError(outerType + ".second: Computation must return a type of " + innerType);
              }
              return m.map(function(r2) {
                return Pair(x.fst(), r2);
              });
            });
          }
          function both() {
            return Star(function(x) {
              if (!isSameType(Pair, x)) {
                throw TypeError(outerType + ".both: Pair required for computation input");
              }
              var p = x.bimap(runWith, runWith);
              var m = p.fst();
              if (!isSameType(Monad, m)) {
                throw new TypeError(outerType + ".both: Computation must return a type of " + innerType);
              }
              return sequence(m.of, merge2(function(x2, y) {
                return [x2, y];
              }, p)).map(function(x2) {
                return Pair(x2[0], x2[1]);
              });
            });
          }
          return obj = {
            inspect,
            toString: inspect,
            type: type3,
            runWith,
            id,
            first,
            second,
            both,
            compose: compose2("compose"),
            contramap: contramap("contramap"),
            map: map3("map"),
            promap: promap("promap")
          }, obj[fl.id] = id, obj[fl.compose] = compose2(fl.compose), obj[fl.contramap] = contramap(fl.contramap), obj[fl.map] = map3(fl.map), obj[fl.promap] = promap(fl.promap), obj["@@type"] = typeString, obj.constructor = Star, obj;
        }
        Star.id = _id;
        Star.type = type3;
        Star[fl.id] = _id;
        Star["@@type"] = typeString;
        Star["@@implements"] = _implements(
          ["compose", "contramap", "id", "map", "promap"]
        );
        return Star;
      }
      module.exports = _Star;
    }
  });

  // node_modules/crocks/core/Unit.js
  var require_Unit = __commonJS({
    "node_modules/crocks/core/Unit.js"(exports, module) {
      var VERSION = 2;
      var _implements = require_implements();
      var type3 = require_types().type("Unit");
      var _type = require_types().typeFn(type3(), VERSION);
      var fl = require_flNames();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var _of2 = Unit;
      var _empty = Unit;
      function Unit() {
        var obj;
        var equals3 = function(m) {
          return isSameType(Unit, m);
        };
        var inspect = function() {
          return "()";
        };
        var valueOf = function() {
          return void 0;
        };
        var of2 = _of2;
        var empty2 = _empty;
        function concat(method) {
          return function(m) {
            if (!isSameType(Unit, m)) {
              throw new TypeError("Unit." + method + ": Unit required");
            }
            return Unit();
          };
        }
        function map3(method) {
          return function(fn) {
            if (!isFunction(fn)) {
              throw new TypeError("Unit." + method + ": Function required");
            }
            return Unit();
          };
        }
        function ap(m) {
          if (!isSameType(Unit, m)) {
            throw new TypeError("Unit.ap: Unit required");
          }
          return Unit();
        }
        function chain(method) {
          return function(fn) {
            if (!isFunction(fn)) {
              throw new TypeError("Unit." + method + ": Function required");
            }
            return Unit();
          };
        }
        return obj = {
          inspect,
          toString: inspect,
          valueOf,
          type: type3,
          equals: equals3,
          empty: empty2,
          ap,
          of: of2,
          concat: concat("concat"),
          map: map3("map"),
          chain: chain("chain")
        }, obj[fl.of] = of2, obj[fl.empty] = empty2, obj[fl.equals] = equals3, obj[fl.concat] = concat(fl.concat), obj[fl.map] = map3(fl.map), obj[fl.chain] = chain(fl.chain), obj["@@type"] = _type, obj.constructor = Unit, obj;
      }
      Unit.of = _of2;
      Unit.empty = _empty;
      Unit.type = type3;
      Unit[fl.of] = _of2;
      Unit[fl.empty] = _empty;
      Unit["@@type"] = _type;
      Unit["@@implements"] = _implements(
        ["ap", "chain", "concat", "empty", "equals", "map", "of"]
      );
      module.exports = Unit;
    }
  });

  // node_modules/crocks/State/index.js
  var require_State = __commonJS({
    "node_modules/crocks/State/index.js"(exports, module) {
      var VERSION = 2;
      var _implements = require_implements();
      var _inspect = require_inspect();
      var type3 = require_types().type("State");
      var _type = require_types().typeFn(type3(), VERSION);
      var fl = require_flNames();
      var Pair = require_Pair();
      var Unit = require_Unit();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var _of2 = function(x) {
        return State(function(s) {
          return Pair(x, s);
        });
      };
      function get(fn) {
        if (!arguments.length) {
          return State(function(s) {
            return Pair(s, s);
          });
        }
        if (isFunction(fn)) {
          return State(function(s) {
            return Pair(fn(s), s);
          });
        }
        throw new TypeError("State.get: No arguments or function required");
      }
      function modify(fn) {
        if (!isFunction(fn)) {
          throw new TypeError("State.modify: Function Required");
        }
        return State(function(s) {
          return Pair(Unit(), fn(s));
        });
      }
      function State(fn) {
        var obj;
        if (!isFunction(fn)) {
          throw new TypeError("State: Must wrap a function in the form (s -> Pair a s)");
        }
        var of2 = _of2;
        var inspect = function() {
          return "State" + _inspect(fn);
        };
        function runWith(state) {
          var params = [], len = arguments.length - 1;
          while (len-- > 0)
            params[len] = arguments[len + 1];
          var func = params[0];
          if (func === void 0)
            func = "runWith";
          var m = fn(state);
          if (!isSameType(Pair, m)) {
            throw new TypeError("State." + func + ": Must wrap a function in the form (s -> Pair a s)");
          }
          return m;
        }
        function execWith(s) {
          var pair = runWith(s, "execWith");
          return pair.snd();
        }
        function evalWith(s) {
          var pair = runWith(s, "evalWith");
          return pair.fst();
        }
        function map3(method) {
          return function(fn2) {
            if (!isFunction(fn2)) {
              throw new TypeError("State." + method + ": Function required");
            }
            return State(function(s) {
              var m = runWith(s, method);
              return Pair(fn2(m.fst()), m.snd());
            });
          };
        }
        function ap(m) {
          if (!isSameType(State, m)) {
            throw new TypeError("State.ap: State required");
          }
          return State(function(s) {
            var pair = runWith(s, "ap");
            var fn2 = pair.fst();
            if (!isFunction(fn2)) {
              throw new TypeError("State.ap: Source value must be a function");
            }
            return m.map(fn2).runWith(pair.snd());
          });
        }
        function chain(method) {
          return function(fn2) {
            if (!isFunction(fn2)) {
              throw new TypeError("State." + method + ": State returning function required");
            }
            return State(function(s) {
              var pair = runWith(s, method);
              var m = fn2(pair.fst());
              if (!isSameType(State, m)) {
                throw new TypeError("State." + method + ": Function must return another State");
              }
              return m.runWith(pair.snd());
            });
          };
        }
        return obj = {
          inspect,
          toString: inspect,
          runWith,
          execWith,
          evalWith,
          type: type3,
          ap,
          of: of2,
          map: map3("map"),
          chain: chain("chain")
        }, obj[fl.of] = of2, obj[fl.map] = map3(fl.map), obj[fl.chain] = chain(fl.chain), obj["@@type"] = _type, obj.constructor = State, obj;
      }
      State.of = _of2;
      State.get = get;
      State.modify = modify;
      State.put = function(x) {
        return modify(function() {
          return x;
        });
      };
      State.type = type3;
      State[fl.of] = _of2;
      State["@@type"] = _type;
      State["@@implements"] = _implements(
        ["ap", "chain", "map", "of"]
      );
      module.exports = State;
    }
  });

  // node_modules/crocks/Tuple/index.js
  var require_Tuple = __commonJS({
    "node_modules/crocks/Tuple/index.js"(exports, module) {
      var VERSION = 1;
      var _implements = require_implements();
      var _equals2 = require_equals();
      var _inspect = require_inspect();
      var _type = require_types().type("Tuple");
      var typeFn = require_types().typeFn;
      var fl = require_flNames();
      var isFunction = require_isFunction();
      var isInteger = require_isInteger();
      var isSameType = require_isSameType();
      var isSemigroup = require_isSemigroup();
      var constant = function(x) {
        return function() {
          return x;
        };
      };
      function _Tuple(n) {
        if (!(isInteger(n) && n >= 1)) {
          throw new TypeError("Tuple: First argument must be an integer");
        }
        var tupleLength = constant(n);
        var type3 = constant(_type(n));
        var typeString = typeFn("Tuple", VERSION, n);
        var withProps = function(fn) {
          fn.type = type3;
          fn.tupleLength = tupleLength;
          fn["@@type"] = typeString;
          fn["@@implements"] = _implements(["map", "concat", "equals"]);
          return fn;
        };
        var withLength = function(n2, fn) {
          return Object.defineProperty(fn, "length", {
            value: n2
          });
        };
        switch (n) {
          case 1:
            return withProps(function(a2) {
              return Tuple(n, arguments);
            });
          case 2:
            return withProps(function(a2, b) {
              return Tuple(n, arguments);
            });
          case 3:
            return withProps(function(a2, b, c) {
              return Tuple(n, arguments);
            });
          case 4:
            return withProps(function(a2, b, c, d) {
              return Tuple(n, arguments);
            });
          case 5:
            return withProps(function(a2, b, c, d, e) {
              return Tuple(n, arguments);
            });
          case 6:
            return withProps(function(a2, b, c, d, e, f) {
              return Tuple(n, arguments);
            });
          case 7:
            return withProps(function(a2, b, c, d, e, f, g) {
              return Tuple(n, arguments);
            });
          case 8:
            return withProps(function(a2, b, c, d, e, f, g, h) {
              return Tuple(n, arguments);
            });
          case 9:
            return withProps(function(a2, b, c, d, e, f, g, h, i2) {
              return Tuple(n, arguments);
            });
          case 10:
            return withProps(function(a2, b, c, d, e, f, g, h, i2, j) {
              return Tuple(n, arguments);
            });
          default:
            return withLength(n, withProps(function() {
              var parts = [], len = arguments.length;
              while (len--)
                parts[len] = arguments[len];
              return Tuple(n, parts);
            }));
        }
        function Tuple(n2, args) {
          var obj;
          var parts = [].slice.call(args);
          if (n2 !== parts.length) {
            throw new TypeError(
              n2 + "-Tuple: Expected " + n2 + " values, but got " + parts.length
            );
          }
          var inspect = function() {
            return n2 + "-Tuple(" + parts.map(_inspect).join(",") + " )";
          };
          function map3(method) {
            return function(fn) {
              if (!isFunction(fn)) {
                throw new TypeError(n2 + "-Tuple." + method + ": Function required");
              }
              return Tuple(
                n2,
                parts.slice(0, parts.length - 1).concat(fn(parts[parts.length - 1]))
              );
            };
          }
          var equals3 = function(m) {
            return isSameType({ type: type3 }, m) && _equals2(parts, m.toArray());
          };
          function concat(method) {
            return function(t2) {
              if (!isSameType({ type: type3 }, t2)) {
                throw new TypeError(n2 + "-Tuple." + method + ": Tuple of the same length required");
              }
              var a2 = t2.toArray();
              return Tuple(n2, parts.map(function(v, i2, o) {
                if (!(isSemigroup(a2[i2]) && isSemigroup(o[i2]))) {
                  throw new TypeError(
                    n2 + "-Tuple." + method + ": Both Tuples must contain Semigroups of the same type"
                  );
                }
                if (!isSameType(a2[i2], o[i2])) {
                  throw new TypeError(
                    n2 + "-Tuple." + method + ": Both Tuples must contain Semigroups of the same type"
                  );
                }
                return o[i2].concat(a2[i2]);
              }));
            };
          }
          function merge2(fn) {
            if (!isFunction(fn)) {
              throw new TypeError(n2 + "-Tuple.merge: Function required");
            }
            return fn.apply(void 0, parts);
          }
          function mapAll() {
            var args2 = [], len = arguments.length;
            while (len--)
              args2[len] = arguments[len];
            if (args2.length !== parts.length) {
              throw new TypeError(
                n2 + "-Tuple.mapAll: Requires " + parts.length + " functions"
              );
            }
            return Tuple(
              n2,
              parts.map(function(v, i2) {
                if (!isFunction(args2[i2])) {
                  throw new TypeError(
                    n2 + "-Tuple.mapAll: Functions required for all arguments"
                  );
                }
                return args2[i2](v);
              })
            );
          }
          function project(index) {
            if (!isInteger(index) || index < 1 || index > n2) {
              throw new TypeError(
                n2 + "-Tuple.project: Index should be an integer between 1 and " + n2
              );
            }
            return parts[index - 1];
          }
          function toArray() {
            return parts.slice();
          }
          return obj = {
            inspect,
            toString: inspect,
            merge: merge2,
            project,
            mapAll,
            toArray,
            tupleLength,
            type: type3,
            equals: equals3,
            map: map3("map"),
            concat: concat("concat")
          }, obj[fl.map] = map3(fl.map), obj[fl.concat] = concat(fl.concat), obj[fl.equals] = equals3, obj["@@type"] = typeString, obj.constructor = Tuple, obj;
        }
      }
      module.exports = _Tuple;
    }
  });

  // node_modules/crocks/Unit/index.js
  var require_Unit2 = __commonJS({
    "node_modules/crocks/Unit/index.js"(exports, module) {
      module.exports = require_Unit();
    }
  });

  // node_modules/crocks/Writer/index.js
  var require_Writer = __commonJS({
    "node_modules/crocks/Writer/index.js"(exports, module) {
      var VERSION = 2;
      var _equals2 = require_equals();
      var _implements = require_implements();
      var _inspect = require_inspect();
      var __type = require_types().type("Writer")();
      var _typeString = require_types().typeFn(__type, VERSION);
      var fl = require_flNames();
      var Pair = require_Pair();
      var isFunction = require_isFunction();
      var isMonoid = require_isMonoid();
      var isSameType = require_isSameType();
      var constant = function(x) {
        return function() {
          return x;
        };
      };
      function _Writer(Monoid) {
        if (!isMonoid(Monoid)) {
          throw new TypeError("Writer: Monoid required for construction");
        }
        var _of2 = function(x) {
          return Writer(Monoid.empty().valueOf(), x);
        };
        var _type = constant(__type + "( " + Monoid.type() + " )");
        var typeString = _typeString + "( " + Monoid["@@type"] + " )";
        function Writer(entry, val) {
          var obj;
          if (arguments.length !== 2) {
            throw new TypeError("Writer: Log entry and a value required");
          }
          var type3 = _type;
          var of2 = _of2;
          var equals3 = function(m) {
            return isSameType(Writer, m) && _equals2(m.valueOf(), val);
          };
          var valueOf = constant(val);
          var log = constant(Monoid(entry));
          var inspect = constant("Writer(" + _inspect(log()) + _inspect(valueOf()) + " )");
          var read = function() {
            return Pair(log(), val);
          };
          function map3(method) {
            return function(fn) {
              if (!isFunction(fn)) {
                throw new TypeError("Writer." + method + ": Function required");
              }
              return Writer(log().valueOf(), fn(valueOf()));
            };
          }
          function ap(m) {
            if (!isFunction(val)) {
              throw new TypeError("Writer.ap: Wrapped value must be a function");
            }
            if (!isSameType(Writer, m)) {
              throw new TypeError("Writer.ap: Writer required");
            }
            return Writer(
              log().concat(m.log()).valueOf(),
              val(m.valueOf())
            );
          }
          function chain(method) {
            return function(fn) {
              if (!isFunction(fn)) {
                throw new TypeError("Writer." + method + ": Function required");
              }
              var w = fn(valueOf());
              if (!isSameType(Writer, w)) {
                throw new TypeError("Writer." + method + ": Function must return a Writer");
              }
              return Writer(log().concat(w.log()).valueOf(), w.valueOf());
            };
          }
          return obj = {
            inspect,
            toString: inspect,
            read,
            valueOf,
            log,
            type: type3,
            equals: equals3,
            ap,
            of: of2,
            chain: chain("chain"),
            map: map3("map")
          }, obj[fl.of] = of2, obj[fl.equals] = equals3, obj[fl.map] = map3(fl.map), obj[fl.chain] = chain(fl.chain), obj["@@type"] = typeString, obj.constructor = Writer, obj;
        }
        Writer.of = _of2;
        Writer.type = _type;
        Writer[fl.of] = _of2;
        Writer["@@type"] = typeString;
        Writer["@@implements"] = _implements(
          ["ap", "chain", "equals", "map", "of"]
        );
        return Writer;
      }
      module.exports = _Writer;
    }
  });

  // node_modules/crocks/core/object.js
  var require_object = __commonJS({
    "node_modules/crocks/core/object.js"(exports, module) {
      function rejectUnit(obj) {
        return function(acc, key) {
          var value = obj[key];
          if (value !== void 0) {
            acc[key] = value;
          }
          return acc;
        };
      }
      function assign(x, m) {
        var result = Object.keys(m).reduce(rejectUnit(m), {});
        return Object.keys(x).reduce(rejectUnit(x), result);
      }
      function filter3(f, m) {
        return Object.keys(m).reduce(function(acc, key) {
          if (f(m[key])) {
            acc[key] = m[key];
          }
          return acc;
        }, {});
      }
      function map3(f, m) {
        return Object.keys(m).reduce(function(acc, key) {
          acc[key] = f(m[key]);
          return acc;
        }, {});
      }
      function set(key, val, m) {
        var obj;
        return assign((obj = {}, obj[key] = val, obj), m);
      }
      function unset(key, m) {
        return Object.keys(m).reduce(function(acc, k) {
          if (m[k] !== void 0 && k !== key) {
            acc[k] = m[k];
          }
          return acc;
        }, {});
      }
      module.exports = {
        assign,
        filter: filter3,
        map: map3,
        set,
        unset
      };
    }
  });

  // node_modules/crocks/helpers/assign.js
  var require_assign = __commonJS({
    "node_modules/crocks/helpers/assign.js"(exports, module) {
      var curry = require_curry();
      var isObject = require_isObject();
      var object = require_object();
      function assign(x, m) {
        if (!(isObject(x) && isObject(m))) {
          throw new TypeError("assign: Objects required for both arguments");
        }
        return object.assign(x, m);
      }
      module.exports = curry(assign);
    }
  });

  // node_modules/crocks/helpers/setProp.js
  var require_setProp = __commonJS({
    "node_modules/crocks/helpers/setProp.js"(exports, module) {
      var curry = require_curry();
      var isArray = require_isArray();
      var isInteger = require_isInteger();
      var isObject = require_isObject();
      var isString = require_isString();
      var array = require_array();
      var object = require_object();
      function fn(name) {
        function setProp2(key, val, x) {
          if (isObject(x)) {
            if (isString(key)) {
              return object.set(key, val, x);
            }
            throw new TypeError(
              name + ": String required for first argument when third argument is an Object"
            );
          }
          if (isArray(x)) {
            if (isInteger(key) && key >= 0) {
              return array.set(key, val, x);
            }
            throw new TypeError(
              name + ": Positive Integer required for first argument when third argument is an Array"
            );
          }
          throw new TypeError(
            name + ": Object or Array required for third argument"
          );
        }
        return curry(setProp2);
      }
      var setProp = fn("setProp");
      setProp.origFn = fn;
      module.exports = setProp;
    }
  });

  // node_modules/crocks/helpers/assoc.js
  var require_assoc = __commonJS({
    "node_modules/crocks/helpers/assoc.js"(exports, module) {
      var setProp = require_setProp();
      module.exports = setProp.origFn("assoc");
    }
  });

  // node_modules/crocks/core/curryN.js
  var require_curryN = __commonJS({
    "node_modules/crocks/core/curryN.js"(exports, module) {
      function curryN3(n, fn) {
        return function() {
          var xs = [], len = arguments.length;
          while (len--)
            xs[len] = arguments[len];
          var args = xs.length ? xs : [void 0];
          var remaining = Math.floor(n) - args.length;
          return remaining > 0 ? curryN3(remaining, Function.bind.apply(fn, [null].concat(args))) : fn.apply(null, args.slice(0, n));
        };
      }
      module.exports = curryN3;
    }
  });

  // node_modules/crocks/helpers/binary.js
  var require_binary = __commonJS({
    "node_modules/crocks/helpers/binary.js"(exports, module) {
      var curryN3 = require_curryN();
      var isFunction = require_isFunction();
      function binary(fn) {
        if (!isFunction(fn)) {
          throw new TypeError("binary: Function required");
        }
        return curryN3(2, fn);
      }
      module.exports = binary;
    }
  });

  // node_modules/crocks/helpers/compose.js
  var require_compose3 = __commonJS({
    "node_modules/crocks/helpers/compose.js"(exports, module) {
      var isFunction = require_isFunction();
      var err = "compose: Functions required";
      function applyPipe(f, g) {
        if (!isFunction(g)) {
          throw new TypeError(err);
        }
        return function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return g.call(null, f.apply(null, args));
        };
      }
      function compose2() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        if (!arguments.length) {
          throw new TypeError(err);
        }
        var fns = args.slice().reverse();
        var head = fns[0];
        if (!isFunction(head)) {
          throw new TypeError(err);
        }
        var tail3 = fns.slice(1).concat(function(x) {
          return x;
        });
        return tail3.reduce(applyPipe, head);
      }
      module.exports = compose2;
    }
  });

  // node_modules/crocks/helpers/composeK.js
  var require_composeK = __commonJS({
    "node_modules/crocks/helpers/composeK.js"(exports, module) {
      var isChain = require_isChain();
      var isFunction = require_isFunction();
      var err = "composeK: Chain returning functions of the same type required";
      function composeK() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        if (!arguments.length) {
          throw new TypeError(err);
        }
        var fns = args.slice().reverse();
        var head = fns[0];
        if (!isFunction(head)) {
          throw new TypeError(err);
        }
        if (fns.length === 1) {
          return head;
        }
        var tail3 = fns.slice(1).reduce(function(comp, fn) {
          if (!isFunction(fn)) {
            throw new TypeError(err);
          }
          return function(m) {
            if (!isChain(m)) {
              throw new TypeError(err);
            }
            return comp(m).chain(fn);
          };
        }, function(x) {
          return x;
        });
        return function() {
          return tail3(head.apply(null, arguments));
        };
      }
      module.exports = composeK;
    }
  });

  // node_modules/crocks/helpers/composeP.js
  var require_composeP = __commonJS({
    "node_modules/crocks/helpers/composeP.js"(exports, module) {
      var isFunction = require_isFunction();
      var isPromise = require_isPromise();
      var err = "composeP: Promise returning functions required";
      function applyPipe(f, g) {
        if (!isFunction(g)) {
          throw new TypeError(err);
        }
        return function() {
          var p = f.apply(null, arguments);
          if (!isPromise(p)) {
            throw new TypeError(err);
          }
          return p.then(g);
        };
      }
      function composeP() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        if (!arguments.length) {
          throw new TypeError(err);
        }
        var fns = args.reverse();
        var head = fns[0];
        if (!isFunction(head)) {
          throw new TypeError(err);
        }
        var tail3 = fns.slice(1).concat(function(x) {
          return x;
        });
        return tail3.reduce(applyPipe, head);
      }
      module.exports = composeP;
    }
  });

  // node_modules/crocks/helpers/composeS.js
  var require_composeS = __commonJS({
    "node_modules/crocks/helpers/composeS.js"(exports, module) {
      var isSameType = require_isSameType();
      var isSemigroupoid = require_isSemigroupoid();
      var err = "composeS: Semigroupoids of the same type required";
      function composeS() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        if (!arguments.length) {
          throw new TypeError(err);
        }
        var ms = args.slice().reverse();
        var head = ms[0];
        if (!isSemigroupoid(head)) {
          throw new TypeError(err);
        }
        if (ms.length === 1) {
          return head;
        }
        return ms.slice().reduce(function(comp, m) {
          if (!isSameType(comp, m)) {
            throw new TypeError(err);
          }
          return comp.compose(m);
        });
      }
      module.exports = composeS;
    }
  });

  // node_modules/crocks/helpers/curry.js
  var require_curry2 = __commonJS({
    "node_modules/crocks/helpers/curry.js"(exports, module) {
      var _curry = require_curry();
      var isFunction = require_isFunction();
      function curry(fn) {
        if (!isFunction(fn)) {
          throw new TypeError("curry: Function required");
        }
        return _curry(fn);
      }
      module.exports = curry;
    }
  });

  // node_modules/crocks/helpers/defaultProps.js
  var require_defaultProps = __commonJS({
    "node_modules/crocks/helpers/defaultProps.js"(exports, module) {
      var curry = require_curry();
      var isObject = require_isObject();
      var object = require_object();
      function defaultProps(x, m) {
        if (!isObject(x) || !isObject(m)) {
          throw new TypeError("defaultProps: Objects required for both arguments");
        }
        return object.assign(m, x);
      }
      module.exports = curry(defaultProps);
    }
  });

  // node_modules/crocks/helpers/defaultTo.js
  var require_defaultTo = __commonJS({
    "node_modules/crocks/helpers/defaultTo.js"(exports, module) {
      var curry = require_curry();
      var isNil = require_isNil();
      function defaultTo3(def, val) {
        return isNil(val) ? def : val;
      }
      module.exports = curry(defaultTo3);
    }
  });

  // node_modules/crocks/helpers/unsetProp.js
  var require_unsetProp = __commonJS({
    "node_modules/crocks/helpers/unsetProp.js"(exports, module) {
      var curry = require_curry();
      var isArray = require_isArray();
      var isEmpty = require_isEmpty();
      var isInteger = require_isInteger();
      var isObject = require_isObject();
      var isString = require_isString();
      var array = require_array();
      var object = require_object();
      function fn(name) {
        function unsetProp2(key, obj) {
          if (!(isObject(obj) || isArray(obj))) {
            return obj;
          }
          if (!(isString(key) && !isEmpty(key) || isInteger(key) && key >= 0)) {
            throw new TypeError(
              name + ": Non-empty String required or Positive Integer required for first argument"
            );
          }
          if (isObject(obj)) {
            if (isString(key) && !isEmpty(key)) {
              return object.unset(key, obj);
            }
          }
          if (isArray(obj)) {
            if (isInteger(key) && key >= 0) {
              return array.unset(key, obj);
            }
          }
          return obj;
        }
        return curry(unsetProp2);
      }
      var unsetProp = fn("unsetProp");
      unsetProp.origFn = fn;
      module.exports = unsetProp;
    }
  });

  // node_modules/crocks/helpers/dissoc.js
  var require_dissoc = __commonJS({
    "node_modules/crocks/helpers/dissoc.js"(exports, module) {
      var unsetProp = require_unsetProp();
      module.exports = unsetProp.origFn("dissoc");
    }
  });

  // node_modules/crocks/helpers/fromPairs.js
  var require_fromPairs = __commonJS({
    "node_modules/crocks/helpers/fromPairs.js"(exports, module) {
      var Pair = require_types().proxy("Pair");
      var isFoldable = require_isFoldable();
      var isSameType = require_isSameType();
      var isString = require_isString();
      function foldPairs(acc, pair) {
        var obj;
        if (!isSameType(Pair, pair)) {
          throw new TypeError("fromPairs: Foldable of Pairs required for argument");
        }
        var key = pair.fst();
        var value = pair.snd();
        if (!isString(key)) {
          throw new TypeError("fromPairs: String required for fst of every Pair");
        }
        return value !== void 0 ? Object.assign(acc, (obj = {}, obj[key] = value, obj)) : acc;
      }
      function fromPairs(xs) {
        if (!isFoldable(xs)) {
          throw new TypeError("fromPairs: Foldable of Pairs required for argument");
        }
        return xs.reduce(foldPairs, {});
      }
      module.exports = fromPairs;
    }
  });

  // node_modules/crocks/helpers/getPathOr.js
  var require_getPathOr = __commonJS({
    "node_modules/crocks/helpers/getPathOr.js"(exports, module) {
      var curry = require_curry();
      var isArray = require_isArray();
      var isDefined = require_isDefined();
      var isEmpty = require_isEmpty();
      var isInteger = require_isInteger();
      var isNil = require_isNil();
      var isString = require_isString();
      var errFn = function(name) {
        return name + ": Array of Non-empty Strings or Integers required for second argument";
      };
      function fn(name) {
        function getPathOr2(def, keys4, target) {
          if (!isArray(keys4)) {
            throw new TypeError(errFn(name));
          }
          if (isNil(target)) {
            return def;
          }
          var value = target;
          for (var i2 = 0; i2 < keys4.length; i2++) {
            var key = keys4[i2];
            if (!(isString(key) && !isEmpty(key) || isInteger(key))) {
              throw new TypeError(errFn(name));
            }
            if (isNil(value)) {
              return def;
            }
            value = value[key];
            if (!isDefined(value)) {
              return def;
            }
          }
          return value;
        }
        return curry(getPathOr2);
      }
      var getPathOr = fn("getPathOr");
      getPathOr.origFn = fn;
      module.exports = getPathOr;
    }
  });

  // node_modules/crocks/helpers/liftA2.js
  var require_liftA2 = __commonJS({
    "node_modules/crocks/helpers/liftA2.js"(exports, module) {
      var array = require_array();
      var curry = require_curry();
      var isApply = require_isApply();
      var isArray = require_isArray();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var map3 = array.map;
      var ap = array.ap;
      function liftA2(fn, x, y) {
        if (!isFunction(fn)) {
          throw new TypeError("liftA2: Function required for first argument");
        }
        if (!((isApply(x) || isArray(x)) && isSameType(x, y))) {
          throw new TypeError("liftA2: Applys of same type required for last two arguments");
        }
        if (isArray(x)) {
          return ap(y, map3(fn, x));
        }
        return x.map(fn).ap(y);
      }
      module.exports = curry(liftA2);
    }
  });

  // node_modules/crocks/helpers/liftA3.js
  var require_liftA3 = __commonJS({
    "node_modules/crocks/helpers/liftA3.js"(exports, module) {
      var array = require_array();
      var curry = require_curry();
      var isApply = require_isApply();
      var isArray = require_isArray();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var map3 = array.map;
      var ap = array.ap;
      function liftA3(fn, x, y, z) {
        if (!isFunction(fn)) {
          throw new TypeError("liftA3: Function required for first argument");
        } else if (!((isApply(x) || isArray(x)) && isSameType(x, y) && isSameType(x, z))) {
          throw new TypeError("liftA3: Applys of same type required for last three arguments");
        }
        if (isArray(x)) {
          return ap(z, ap(y, map3(fn, x)));
        }
        return x.map(fn).ap(y).ap(z);
      }
      module.exports = curry(liftA3);
    }
  });

  // node_modules/crocks/helpers/liftN.js
  var require_liftN = __commonJS({
    "node_modules/crocks/helpers/liftN.js"(exports, module) {
      var array = require_array();
      var curry = require_curry();
      var curryN3 = require_curryN();
      var isApply = require_isApply();
      var isArray = require_isArray();
      var isFunction = require_isFunction();
      var isFunctor = require_isFunctor();
      var isInteger = require_isInteger();
      var isSameType = require_isSameType();
      var ap = array.ap;
      var applyAp = function(x, y) {
        if (!(isSameType(x, y) && (isArray(y) || isApply(y)))) {
          throw new TypeError("liftN: Applys of same type are required");
        }
        if (isArray(x)) {
          return ap(y, x);
        }
        return x.ap(y);
      };
      function liftN(n, fn) {
        if (!isInteger(n)) {
          throw new TypeError("liftN: Integer required for first argument");
        }
        if (!isFunction(fn)) {
          throw new TypeError("liftN: Function required for second argument");
        }
        return curryN3(n, function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          if (!isFunctor(args[0])) {
            throw new TypeError("liftN: Applys of same type are required");
          }
          return args.slice(1, n).reduce(
            applyAp,
            args[0].map(function(x) {
              return curryN3(n, fn)(x);
            })
          );
        });
      }
      module.exports = curry(liftN);
    }
  });

  // node_modules/crocks/helpers/getPropOr.js
  var require_getPropOr = __commonJS({
    "node_modules/crocks/helpers/getPropOr.js"(exports, module) {
      var curry = require_curry();
      var isDefined = require_isDefined();
      var isEmpty = require_isEmpty();
      var isInteger = require_isInteger();
      var isNil = require_isNil();
      var isString = require_isString();
      function fn(name) {
        function getPropOr2(def, key, target) {
          if (!(isString(key) && !isEmpty(key) || isInteger(key))) {
            throw new TypeError(name + ": Non-empty String or Integer required for second argument");
          }
          if (isNil(target)) {
            return def;
          }
          var value = target[key];
          return isDefined(value) ? value : def;
        }
        return curry(getPropOr2);
      }
      var getPropOr = fn("getPropOr");
      getPropOr.origFn = fn;
      module.exports = getPropOr;
    }
  });

  // node_modules/crocks/helpers/mapProps.js
  var require_mapProps = __commonJS({
    "node_modules/crocks/helpers/mapProps.js"(exports, module) {
      var curry = require_curry();
      var isObject = require_isObject();
      var isFunction = require_isFunction();
      var isNil = require_isNil();
      var applyMap = function(fns, obj) {
        return function(acc, key) {
          var obj$1, obj$2, obj$3;
          if (isNil(fns[key])) {
            return Object.assign({}, acc, (obj$1 = {}, obj$1[key] = obj[key], obj$1));
          }
          if (isObject(fns[key])) {
            return Object.assign({}, acc, (obj$2 = {}, obj$2[key] = isObject(obj[key]) ? mapProps(fns[key], obj[key]) : obj[key], obj$2));
          }
          if (!isFunction(fns[key])) {
            throw new TypeError("mapProps: Object of functions required for first argument");
          }
          return Object.assign({}, acc, (obj$3 = {}, obj$3[key] = fns[key](obj[key]), obj$3));
        };
      };
      function mapProps(fns, obj) {
        if (!(isObject(fns) && isObject(obj))) {
          throw new TypeError("mapProps: Objects required for both arguments");
        }
        return Object.keys(obj).reduce(applyMap(fns, obj), {});
      }
      module.exports = curry(mapProps);
    }
  });

  // node_modules/crocks/helpers/mapReduce.js
  var require_mapReduce = __commonJS({
    "node_modules/crocks/helpers/mapReduce.js"(exports, module) {
      var curry = require_curry();
      var isFoldable = require_isFoldable();
      var isFunction = require_isFunction();
      function mapReduce(mapFn, reduceFn, empty2, xs) {
        if (!isFunction(mapFn)) {
          throw new TypeError("mapReduce: Unary mapping function required for first argument");
        }
        if (!isFunction(reduceFn)) {
          throw new TypeError("mapReduce: Binary reduction function required for second argument");
        }
        if (!isFoldable(xs)) {
          throw new TypeError("mapReduce: Foldable required for fourth argument");
        }
        return xs.reduce(
          function(acc, x) {
            return reduceFn(acc, mapFn(x));
          },
          empty2
        );
      }
      module.exports = curry(mapReduce);
    }
  });

  // node_modules/crocks/core/mconcatMap.js
  var require_mconcatMap = __commonJS({
    "node_modules/crocks/core/mconcatMap.js"(exports, module) {
      var compose2 = require_compose();
      var foldWith = function(m) {
        return function(x, y) {
          return x.concat(m(y));
        };
      };
      function mconcatMap(M, f, xs) {
        return xs.reduce(foldWith(compose2(M, f)), M.empty());
      }
      module.exports = mconcatMap;
    }
  });

  // node_modules/crocks/helpers/mconcat.js
  var require_mconcat = __commonJS({
    "node_modules/crocks/helpers/mconcat.js"(exports, module) {
      var curry = require_curry();
      var isFoldable = require_isFoldable();
      var isMonoid = require_isMonoid();
      var mconcatMap = require_mconcatMap();
      var identity2 = function(x) {
        return x;
      };
      function mconcat(m, xs) {
        if (!isMonoid(m)) {
          throw new TypeError(
            "mconcat: Monoid required for first argument"
          );
        }
        if (!isFoldable(xs)) {
          throw new TypeError(
            "mconcat: Foldable required for second argument"
          );
        }
        return mconcatMap(m, identity2, xs);
      }
      module.exports = curry(mconcat);
    }
  });

  // node_modules/crocks/helpers/mconcatMap.js
  var require_mconcatMap2 = __commonJS({
    "node_modules/crocks/helpers/mconcatMap.js"(exports, module) {
      var _mconcatMap = require_mconcatMap();
      var curry = require_curry();
      var isFoldable = require_isFoldable();
      var isFunction = require_isFunction();
      var isMonoid = require_isMonoid();
      function mconcatMap(m, f, xs) {
        if (!isMonoid(m)) {
          throw new TypeError(
            "mconcatMap: Monoid required for first argument"
          );
        }
        if (!isFunction(f)) {
          throw new TypeError(
            "mconcatMap: Function required for second argument"
          );
        }
        if (!isFoldable(xs)) {
          throw new TypeError(
            "mconcatMap: Foldable required for third argument"
          );
        }
        return _mconcatMap(m, f, xs);
      }
      module.exports = curry(mconcatMap);
    }
  });

  // node_modules/crocks/helpers/mreduce.js
  var require_mreduce = __commonJS({
    "node_modules/crocks/helpers/mreduce.js"(exports, module) {
      var curry = require_curry();
      var isFoldable = require_isFoldable();
      var isMonoid = require_isMonoid();
      var mconcatMap = require_mconcatMap();
      var identity2 = function(x) {
        return x;
      };
      function mreduce(m, xs) {
        if (!isMonoid(m)) {
          throw new TypeError(
            "mreduce: Monoid required for first argument"
          );
        }
        if (!isFoldable(xs)) {
          throw new TypeError(
            "mreduce: Foldable required for second argument"
          );
        }
        return mconcatMap(m, identity2, xs).valueOf();
      }
      module.exports = curry(mreduce);
    }
  });

  // node_modules/crocks/helpers/mreduceMap.js
  var require_mreduceMap = __commonJS({
    "node_modules/crocks/helpers/mreduceMap.js"(exports, module) {
      var curry = require_curry();
      var isFoldable = require_isFoldable();
      var isFunction = require_isFunction();
      var isMonoid = require_isMonoid();
      var mconcatMap = require_mconcatMap();
      function mreduceMap(m, f, xs) {
        if (!isMonoid(m)) {
          throw new TypeError(
            "mreduceMap: Monoid required for first argument"
          );
        }
        if (!isFunction(f)) {
          throw new TypeError(
            "mreduceMap: Function required for second argument"
          );
        }
        if (!isFoldable(xs)) {
          throw new TypeError(
            "mreduceMap: Foldable required for third argument"
          );
        }
        return mconcatMap(m, f, xs).valueOf();
      }
      module.exports = curry(mreduceMap);
    }
  });

  // node_modules/crocks/helpers/nAry.js
  var require_nAry = __commonJS({
    "node_modules/crocks/helpers/nAry.js"(exports, module) {
      var curry = require_curry();
      var curryN3 = require_curryN();
      var isFunction = require_isFunction();
      var isNumber = require_isNumber();
      function nAry(num, fn) {
        if (!isNumber(num)) {
          throw new TypeError("nAry: Number required for first argument");
        }
        if (!isFunction(fn)) {
          throw new TypeError("nAry: Function required for second argument");
        }
        return curryN3(num, fn);
      }
      module.exports = curry(nAry);
    }
  });

  // node_modules/crocks/helpers/objOf.js
  var require_objOf = __commonJS({
    "node_modules/crocks/helpers/objOf.js"(exports, module) {
      var curry = require_curry();
      var isString = require_isString();
      function objOf(key, value) {
        var obj;
        if (!(key && isString(key))) {
          throw new TypeError("objOf: Non-empty String required for first argument");
        }
        return obj = {}, obj[key] = value, obj;
      }
      module.exports = curry(objOf);
    }
  });

  // node_modules/crocks/helpers/omit.js
  var require_omit = __commonJS({
    "node_modules/crocks/helpers/omit.js"(exports, module) {
      var curry = require_curry();
      var isFoldable = require_isFoldable();
      var isObject = require_isObject();
      function omitKeys(keys4, obj) {
        return function(acc, key) {
          var obj$1;
          return keys4.indexOf(key) === -1 && obj[key] !== void 0 ? Object.assign(acc, (obj$1 = {}, obj$1[key] = obj[key], obj$1)) : acc;
        };
      }
      function omit(keys4, obj) {
        if (!isFoldable(keys4)) {
          throw new TypeError("omit: Foldable required for first argument");
        } else if (!isObject(obj)) {
          throw new TypeError("omit: Object required for second argument");
        }
        return Object.keys(obj).reduce(omitKeys(keys4, obj), {});
      }
      module.exports = curry(omit);
    }
  });

  // node_modules/crocks/helpers/once.js
  var require_once2 = __commonJS({
    "node_modules/crocks/helpers/once.js"(exports, module) {
      var isFunction = require_isFunction();
      var _once = require_once();
      function once(fn) {
        if (!isFunction(fn)) {
          throw new TypeError("once: Function required");
        }
        return _once(fn);
      }
      module.exports = once;
    }
  });

  // node_modules/crocks/helpers/partial.js
  var require_partial = __commonJS({
    "node_modules/crocks/helpers/partial.js"(exports, module) {
      var curry = require_curry();
      var isFunction = require_isFunction();
      function partial() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var fn = args[0];
        var xs = args.slice(1);
        if (!isFunction(fn)) {
          throw new TypeError("partial: Function required for first argument");
        }
        return curry(
          Function.bind.apply(fn, [null].concat(xs))
        );
      }
      module.exports = partial;
    }
  });

  // node_modules/crocks/helpers/pick.js
  var require_pick = __commonJS({
    "node_modules/crocks/helpers/pick.js"(exports, module) {
      var curry = require_curry();
      var isFoldable = require_isFoldable();
      var isObject = require_isObject();
      var isString = require_isString();
      function pickKeys(obj) {
        return function(acc, key) {
          var obj$1;
          if (!isString(key)) {
            throw new TypeError("pick: Foldable of Strings is required for first argument");
          }
          return key && obj[key] !== void 0 ? Object.assign(acc, (obj$1 = {}, obj$1[key] = obj[key], obj$1)) : acc;
        };
      }
      function pick(keys4, obj) {
        if (!isFoldable(keys4)) {
          throw new TypeError("pick: Foldable required for first argument");
        } else if (!isObject(obj)) {
          throw new TypeError("pick: Object required for second argument");
        }
        return keys4.reduce(pickKeys(obj), {});
      }
      module.exports = curry(pick);
    }
  });

  // node_modules/crocks/helpers/pipe.js
  var require_pipe = __commonJS({
    "node_modules/crocks/helpers/pipe.js"(exports, module) {
      var isFunction = require_isFunction();
      var err = "pipe: Functions required";
      function applyPipe(f, g) {
        if (!isFunction(g)) {
          throw new TypeError(err);
        }
        return function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          return g.call(null, f.apply(null, args));
        };
      }
      function pipe2() {
        var fns = [], len = arguments.length;
        while (len--)
          fns[len] = arguments[len];
        if (!arguments.length) {
          throw new TypeError(err);
        }
        var head = fns[0];
        if (!isFunction(head)) {
          throw new TypeError(err);
        }
        var tail3 = fns.slice(1).concat(function(x) {
          return x;
        });
        return tail3.reduce(applyPipe, head);
      }
      module.exports = pipe2;
    }
  });

  // node_modules/crocks/helpers/pipeK.js
  var require_pipeK = __commonJS({
    "node_modules/crocks/helpers/pipeK.js"(exports, module) {
      var isChain = require_isChain();
      var isFunction = require_isFunction();
      var err = "pipeK: Chain returning functions of the same type required";
      function pipeK(head) {
        var fns = [], len = arguments.length - 1;
        while (len-- > 0)
          fns[len] = arguments[len + 1];
        if (!(arguments.length && isFunction(head))) {
          throw new TypeError(err);
        }
        if (arguments.length === 1) {
          return head;
        }
        var tail3 = fns.reduce(function(comp, fn) {
          if (!isFunction(fn)) {
            throw new TypeError(err);
          }
          return function(m) {
            if (!isChain(m)) {
              throw new TypeError(err);
            }
            return comp(m).chain(fn);
          };
        }, function(x) {
          return x;
        });
        return function() {
          return tail3(head.apply(null, arguments));
        };
      }
      module.exports = pipeK;
    }
  });

  // node_modules/crocks/helpers/pipeP.js
  var require_pipeP = __commonJS({
    "node_modules/crocks/helpers/pipeP.js"(exports, module) {
      var isFunction = require_isFunction();
      var isPromise = require_isPromise();
      var err = "pipeP: Promise returning functions required";
      function applyPipe(f, g) {
        if (!isFunction(g)) {
          throw new TypeError(err);
        }
        return function() {
          var p = f.apply(null, arguments);
          if (!isPromise(p)) {
            throw new TypeError(err);
          }
          return p.then(g);
        };
      }
      function pipeP() {
        var fns = [], len = arguments.length;
        while (len--)
          fns[len] = arguments[len];
        if (!arguments.length) {
          throw new TypeError(err);
        }
        var head = fns[0];
        if (!isFunction(head)) {
          throw new TypeError(err);
        }
        var tail3 = fns.slice(1).concat(function(x) {
          return x;
        });
        return tail3.reduce(applyPipe, head);
      }
      module.exports = pipeP;
    }
  });

  // node_modules/crocks/helpers/pipeS.js
  var require_pipeS = __commonJS({
    "node_modules/crocks/helpers/pipeS.js"(exports, module) {
      var isSameType = require_isSameType();
      var isSemigroupoid = require_isSemigroupoid();
      var err = "pipeS: Semigroupoids of the same type required";
      function pipeS() {
        var ms = [], len = arguments.length;
        while (len--)
          ms[len] = arguments[len];
        if (!arguments.length) {
          throw new TypeError(err);
        }
        var head = ms[0];
        if (!isSemigroupoid(head)) {
          throw new TypeError(err);
        }
        if (ms.length === 1) {
          return head;
        }
        return ms.slice().reduce(function(comp, m) {
          if (!isSameType(comp, m)) {
            throw new TypeError(err);
          }
          return comp.compose(m);
        });
      }
      module.exports = pipeS;
    }
  });

  // node_modules/crocks/helpers/propOr.js
  var require_propOr = __commonJS({
    "node_modules/crocks/helpers/propOr.js"(exports, module) {
      var getPropOr = require_getPropOr();
      module.exports = getPropOr.origFn("propOr");
    }
  });

  // node_modules/crocks/helpers/propPathOr.js
  var require_propPathOr = __commonJS({
    "node_modules/crocks/helpers/propPathOr.js"(exports, module) {
      var getPathOr = require_getPathOr();
      module.exports = getPathOr.origFn("propPathOr");
    }
  });

  // node_modules/crocks/helpers/setPath.js
  var require_setPath = __commonJS({
    "node_modules/crocks/helpers/setPath.js"(exports, module) {
      var array = require_array();
      var curry = require_curry();
      var isArray = require_isArray();
      var isEmpty = require_isEmpty();
      var isInteger = require_isInteger();
      var isObject = require_isObject();
      var isString = require_isString();
      var object = require_object();
      var isValid = function(x) {
        return isObject(x) || isArray(x);
      };
      var pathErr = "setPath: Non-empty Array of non-empty Strings and/or Positive Integers required for first argument";
      function setPath(path3, val, obj) {
        if (!isArray(path3) || isEmpty(path3)) {
          throw new TypeError(pathErr);
        }
        if (!isValid(obj)) {
          throw new TypeError(
            "setPath: Object or Array required for third argument"
          );
        }
        var key = path3[0];
        var newVal = val;
        if (!(isString(key) && !isEmpty(key) || isInteger(key) && key >= 0)) {
          throw new TypeError(pathErr);
        }
        if (path3.length > 1) {
          var next = !isValid(obj[key]) ? isInteger(path3[1]) ? [] : {} : obj[key];
          newVal = setPath(path3.slice(1), val, next);
        }
        if (isObject(obj)) {
          if (isString(key)) {
            return object.set(key, newVal, obj);
          }
          throw new TypeError(
            "setPath: Non-empty String required in path when referencing an Object"
          );
        }
        if (isInteger(key)) {
          return array.set(key, newVal, obj);
        }
        throw new TypeError(
          "setPath: Positive Integers required in path when referencing an Array"
        );
      }
      module.exports = curry(setPath);
    }
  });

  // node_modules/crocks/helpers/tap.js
  var require_tap = __commonJS({
    "node_modules/crocks/helpers/tap.js"(exports, module) {
      var curry = require_curry();
      var compose2 = require_compose();
      var isFunction = require_isFunction();
      var constant = function(x) {
        return function() {
          return x;
        };
      };
      function tap(fn, x) {
        if (!isFunction(fn)) {
          throw new TypeError(
            "tap: Function required for first argument"
          );
        }
        return compose2(constant(x), fn)(x);
      }
      module.exports = curry(tap);
    }
  });

  // node_modules/crocks/helpers/unary.js
  var require_unary = __commonJS({
    "node_modules/crocks/helpers/unary.js"(exports, module) {
      var isFunction = require_isFunction();
      function unary(fn) {
        if (!isFunction(fn)) {
          throw new TypeError("unary: Function required");
        }
        return function(x) {
          return fn(x);
        };
      }
      module.exports = unary;
    }
  });

  // node_modules/crocks/helpers/unit.js
  var require_unit2 = __commonJS({
    "node_modules/crocks/helpers/unit.js"(exports, module) {
      module.exports = require_unit();
    }
  });

  // node_modules/crocks/helpers/unsetPath.js
  var require_unsetPath = __commonJS({
    "node_modules/crocks/helpers/unsetPath.js"(exports, module) {
      var curry = require_curry();
      var isArray = require_isArray();
      var isEmpty = require_isEmpty();
      var isInteger = require_isInteger();
      var isObject = require_isObject();
      var isString = require_isString();
      var array = require_array();
      var object = require_object();
      var pathError = "unsetPath: Non-empty Array of non-empty Strings and/or Positive Integers required for first argument";
      function unsetPath(path3, obj) {
        if (!isArray(path3) || isEmpty(path3)) {
          throw new TypeError(pathError);
        }
        if (!(isObject(obj) || isArray(obj))) {
          return obj;
        }
        var key = path3[0];
        if (!(isString(key) && !isEmpty(key) || isInteger(key) && key >= 0)) {
          throw new TypeError(pathError);
        }
        if (path3.length === 1) {
          if (isArray(obj) && isInteger(key)) {
            return array.unset(key, obj);
          }
          if (isObject(obj) && isString(key)) {
            return object.unset(key, obj);
          }
          return obj;
        }
        var next = obj[key];
        if (!(isObject(next) || isArray(next))) {
          return obj;
        }
        if (isArray(obj)) {
          return array.set(key, unsetPath(path3.slice(1), next), obj);
        }
        return object.set(key, unsetPath(path3.slice(1), next), obj);
      }
      module.exports = curry(unsetPath);
    }
  });

  // node_modules/crocks/helpers/index.js
  var require_helpers = __commonJS({
    "node_modules/crocks/helpers/index.js"(exports, module) {
      module.exports = {
        assign: require_assign(),
        assoc: require_assoc(),
        binary: require_binary(),
        compose: require_compose3(),
        composeK: require_composeK(),
        composeP: require_composeP(),
        composeS: require_composeS(),
        curry: require_curry2(),
        defaultProps: require_defaultProps(),
        defaultTo: require_defaultTo(),
        dissoc: require_dissoc(),
        fromPairs: require_fromPairs(),
        getPathOr: require_getPathOr(),
        liftA2: require_liftA2(),
        liftA3: require_liftA3(),
        liftN: require_liftN(),
        getPropOr: require_getPropOr(),
        mapProps: require_mapProps(),
        mapReduce: require_mapReduce(),
        mconcat: require_mconcat(),
        mconcatMap: require_mconcatMap2(),
        mreduce: require_mreduce(),
        mreduceMap: require_mreduceMap(),
        nAry: require_nAry(),
        objOf: require_objOf(),
        omit: require_omit(),
        once: require_once2(),
        partial: require_partial(),
        pick: require_pick(),
        pipe: require_pipe(),
        pipeK: require_pipeK(),
        pipeP: require_pipeP(),
        pipeS: require_pipeS(),
        propOr: require_propOr(),
        propPathOr: require_propPathOr(),
        setPath: require_setPath(),
        setProp: require_setProp(),
        tap: require_tap(),
        unary: require_unary(),
        unit: require_unit2(),
        unsetPath: require_unsetPath(),
        unsetProp: require_unsetProp()
      };
    }
  });

  // node_modules/crocks/Pair/branch.js
  var require_branch = __commonJS({
    "node_modules/crocks/Pair/branch.js"(exports, module) {
      var Pair = require_Pair();
      function branch(x) {
        return Pair(x, x);
      }
      module.exports = branch;
    }
  });

  // node_modules/crocks/Pair/fanout.js
  var require_fanout = __commonJS({
    "node_modules/crocks/Pair/fanout.js"(exports, module) {
      var Pair = require_Pair();
      var curry = require_curry();
      var isContravariant = require_isContravariant();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var isSemigroupoid = require_isSemigroupoid();
      var valid = function(x, y) {
        return isSameType(x, y) && isSemigroupoid(x) && isContravariant(x) && isFunction(x.first) && isFunction(x.second);
      };
      function fanout(fst, snd) {
        if (isFunction(fst) && isFunction(snd)) {
          return function(x) {
            return Pair(fst(x), snd(x));
          };
        }
        if (valid(fst, snd)) {
          return fst.first().compose(snd.second()).contramap(function(x) {
            return Pair(x, x);
          });
        }
        throw new TypeError(
          "fanout: Arrows, Functions or Stars of the same type required for both arguments"
        );
      }
      module.exports = curry(fanout);
    }
  });

  // node_modules/crocks/Maybe/find.js
  var require_find = __commonJS({
    "node_modules/crocks/Maybe/find.js"(exports, module) {
      var Pred = require_types().proxy("Pred");
      var curry = require_curry();
      var predOrFunc = require_predOrFunc();
      var isFunction = require_isFunction();
      var isFoldable = require_isFoldable();
      var isSameType = require_isSameType();
      var ref = require_Maybe2();
      var Just = ref.Just;
      var Nothing = ref.Nothing;
      var accumulator = function(fn) {
        return function(acc, cur) {
          return !acc.found && predOrFunc(fn, cur) ? { found: true, value: cur } : acc;
        };
      };
      function find3(fn, foldable) {
        if (!isFunction(fn) && !isSameType(Pred, fn)) {
          throw new TypeError("find: First argument must be a Pred or predicate");
        }
        if (!isFoldable(foldable)) {
          throw new TypeError("find: Second argument must be a Foldable");
        }
        var result = foldable.reduce(accumulator(fn), { found: false });
        return result.found ? Just(result.value) : Nothing();
      }
      module.exports = curry(find3);
    }
  });

  // node_modules/crocks/Maybe/getPath.js
  var require_getPath = __commonJS({
    "node_modules/crocks/Maybe/getPath.js"(exports, module) {
      var ref = require_Maybe();
      var Nothing = ref.Nothing;
      var Just = ref.Just;
      var curry = require_curry();
      var isArray = require_isArray();
      var isDefined = require_isDefined();
      var isEmpty = require_isEmpty();
      var isInteger = require_isInteger();
      var isNil = require_isNil();
      var isString = require_isString();
      function fn(name) {
        function getPath2(keys4, target) {
          if (!isArray(keys4)) {
            throw new TypeError(name + ": Array of Non-empty Strings or Integers required for first argument");
          }
          if (isNil(target)) {
            return Nothing();
          }
          var value = target;
          for (var i2 = 0; i2 < keys4.length; i2++) {
            var key = keys4[i2];
            if (!(isString(key) && !isEmpty(key) || isInteger(key))) {
              throw new TypeError(name + ": Array of Non-empty Strings or Integers required for first argument");
            }
            if (isNil(value)) {
              return Nothing();
            }
            value = value[key];
            if (!isDefined(value)) {
              return Nothing();
            }
          }
          return Just(value);
        }
        return curry(getPath2);
      }
      var getPath = fn("getPath");
      getPath.origFn = fn;
      module.exports = getPath;
    }
  });

  // node_modules/crocks/Maybe/getProp.js
  var require_getProp = __commonJS({
    "node_modules/crocks/Maybe/getProp.js"(exports, module) {
      var curry = require_curry();
      var isDefined = require_isDefined();
      var isEmpty = require_isEmpty();
      var isNil = require_isNil();
      var isInteger = require_isInteger();
      var isString = require_isString();
      var ref = require_Maybe();
      var Nothing = ref.Nothing;
      var Just = ref.Just;
      function fn(name) {
        function getProp2(key, target) {
          if (!(isString(key) && !isEmpty(key) || isInteger(key))) {
            throw new TypeError(name + ": Non-empty String or Integer required for first argument");
          }
          if (isNil(target)) {
            return Nothing();
          }
          var value = target[key];
          return isDefined(value) ? Just(value) : Nothing();
        }
        return curry(getProp2);
      }
      var getProp = fn("getProp");
      getProp.origFn = fn;
      module.exports = getProp;
    }
  });

  // node_modules/crocks/Maybe/prop.js
  var require_prop = __commonJS({
    "node_modules/crocks/Maybe/prop.js"(exports, module) {
      var getProp = require_getProp();
      module.exports = getProp.origFn("prop");
    }
  });

  // node_modules/crocks/Maybe/propPath.js
  var require_propPath = __commonJS({
    "node_modules/crocks/Maybe/propPath.js"(exports, module) {
      var getPath = require_getPath();
      module.exports = getPath.origFn("propPath");
    }
  });

  // node_modules/crocks/Maybe/safe.js
  var require_safe = __commonJS({
    "node_modules/crocks/Maybe/safe.js"(exports, module) {
      var ref = require_Maybe();
      var Nothing = ref.Nothing;
      var Just = ref.Just;
      var predOrFunc = require_predOrFunc();
      var curry = require_curry();
      var isPredOrFunc = require_isPredOrFunc();
      function safe(pred, x) {
        if (!isPredOrFunc(pred)) {
          throw new TypeError("safe: Pred or predicate function required for first argument");
        }
        return predOrFunc(pred, x) ? Just(x) : Nothing();
      }
      module.exports = curry(safe);
    }
  });

  // node_modules/crocks/Maybe/safeAfter.js
  var require_safeAfter = __commonJS({
    "node_modules/crocks/Maybe/safeAfter.js"(exports, module) {
      var ref = require_Maybe();
      var Just = ref.Just;
      var Nothing = ref.Nothing;
      var curry = require_curry();
      var isPredOrFunc = require_isPredOrFunc();
      var isFunction = require_isFunction();
      var predOrFunc = require_predOrFunc();
      function safeAfter(pred, fn) {
        if (!isPredOrFunc(pred)) {
          throw new TypeError("safeAfter: Pred or predicate function required for first argument");
        }
        if (!isFunction(fn)) {
          throw new TypeError("safeAfter: Function required for second argument");
        }
        return function(x) {
          var result = fn(x);
          return predOrFunc(pred, result) ? Just(result) : Nothing();
        };
      }
      module.exports = curry(safeAfter);
    }
  });

  // node_modules/crocks/Maybe/safeLift.js
  var require_safeLift = __commonJS({
    "node_modules/crocks/Maybe/safeLift.js"(exports, module) {
      var compose2 = require_compose();
      var curry = require_curry();
      var isPredOrFunc = require_isPredOrFunc();
      var isFunction = require_isFunction();
      var safe = require_safe();
      var map3 = function(fn) {
        return function(m) {
          return m.map(fn);
        };
      };
      function safeLift(pred, fn) {
        if (!isPredOrFunc(pred)) {
          throw new TypeError("safeLift: Pred or predicate function required for first argument");
        } else if (!isFunction(fn)) {
          throw new TypeError("safeLift: Function required for second argument");
        }
        return compose2(map3(fn), safe(pred));
      }
      module.exports = curry(safeLift);
    }
  });

  // node_modules/crocks/Pair/toPairs.js
  var require_toPairs = __commonJS({
    "node_modules/crocks/Pair/toPairs.js"(exports, module) {
      var List = require_List();
      var Pair = require_Pair();
      var isObject = require_isObject();
      function toPairs(obj) {
        if (!isObject(obj)) {
          throw new TypeError("toPairs: Object required for argument");
        }
        return Object.keys(obj).reduce(
          function(acc, key) {
            return obj[key] !== void 0 ? acc.concat(List.of(Pair(key, obj[key]))) : acc;
          },
          List.empty()
        );
      }
      module.exports = toPairs;
    }
  });

  // node_modules/crocks/Result/tryCatch.js
  var require_tryCatch = __commonJS({
    "node_modules/crocks/Result/tryCatch.js"(exports, module) {
      var ref = require_Result();
      var Err = ref.Err;
      var Ok = ref.Ok;
      var curry = require_curry();
      var isFunction = require_isFunction();
      function tryCatch(fn) {
        if (!isFunction(fn)) {
          throw new TypeError("tryCatch: Function required for first argument");
        }
        var safe = function() {
          try {
            return Ok(fn.apply(this, arguments));
          } catch (e) {
            return Err(e);
          }
        };
        Object.defineProperty(safe, "length", { value: fn.length });
        return safe;
      }
      module.exports = curry(tryCatch);
    }
  });

  // node_modules/crocks/All/index.js
  var require_All = __commonJS({
    "node_modules/crocks/All/index.js"(exports, module) {
      var VERSION = 2;
      var _implements = require_implements();
      var _inspect = require_inspect();
      var _equals2 = require_equals();
      var type3 = require_types().type("All");
      var _type = require_types().typeFn(type3(), VERSION);
      var fl = require_flNames();
      var isFunction = require_isFunction();
      var isNil = require_isNil();
      var isSameType = require_isSameType();
      var _empty = function() {
        return All(true);
      };
      function All(b) {
        var obj;
        var x = isNil(b) ? _empty().valueOf() : b;
        if (!arguments.length || isFunction(x)) {
          throw new TypeError("All: Non-function value required");
        }
        var valueOf = function() {
          return !!x;
        };
        var empty2 = _empty;
        var equals3 = function(m) {
          return isSameType(All, m) && _equals2(x, m.valueOf());
        };
        var inspect = function() {
          return "All" + _inspect(valueOf());
        };
        function concat(method) {
          return function(m) {
            if (!isSameType(All, m)) {
              throw new TypeError("All." + method + ": All required");
            }
            return All(m.valueOf() && valueOf());
          };
        }
        return obj = {
          inspect,
          toString: inspect,
          equals: equals3,
          valueOf,
          type: type3,
          empty: empty2
        }, obj["@@type"] = _type, obj.concat = concat("concat"), obj[fl.equals] = equals3, obj[fl.concat] = concat(fl.concat), obj[fl.empty] = empty2, obj.constructor = All, obj;
      }
      All["@@implements"] = _implements(
        ["equals", "concat", "empty"]
      );
      All.empty = _empty;
      All.type = type3;
      All[fl.empty] = _empty;
      All["@@type"] = _type;
      module.exports = All;
    }
  });

  // node_modules/crocks/Any/index.js
  var require_Any = __commonJS({
    "node_modules/crocks/Any/index.js"(exports, module) {
      var VERSION = 2;
      var _implements = require_implements();
      var _inspect = require_inspect();
      var _equals2 = require_equals();
      var type3 = require_types().type("Any");
      var _type = require_types().typeFn(type3(), VERSION);
      var fl = require_flNames();
      var isFunction = require_isFunction();
      var isNil = require_isNil();
      var isSameType = require_isSameType();
      var _empty = function() {
        return Any(false);
      };
      function Any(b) {
        var obj;
        var x = isNil(b) ? _empty().valueOf() : b;
        if (!arguments.length || isFunction(x)) {
          throw new TypeError("Any: Non-function value required");
        }
        var valueOf = function() {
          return !!x;
        };
        var empty2 = _empty;
        var inspect = function() {
          return "Any" + _inspect(valueOf());
        };
        var equals3 = function(m) {
          return isSameType(Any, m) && _equals2(x, m.valueOf());
        };
        function concat(method) {
          return function(m) {
            if (!isSameType(Any, m)) {
              throw new TypeError("Any." + method + ": Any required");
            }
            return Any(m.valueOf() || valueOf());
          };
        }
        return obj = {
          inspect,
          toString: inspect,
          equals: equals3,
          valueOf,
          type: type3,
          empty: empty2
        }, obj["@@type"] = _type, obj.concat = concat("concat"), obj[fl.equals] = equals3, obj[fl.concat] = concat(fl.concat), obj[fl.empty] = empty2, obj.constructor = Any, obj;
      }
      Any["@@implements"] = _implements(
        ["equals", "concat", "empty"]
      );
      Any.empty = _empty;
      Any.type = type3;
      Any[fl.empty] = _empty;
      Any["@@type"] = _type;
      module.exports = Any;
    }
  });

  // node_modules/crocks/Assign/index.js
  var require_Assign = __commonJS({
    "node_modules/crocks/Assign/index.js"(exports, module) {
      var VERSION = 2;
      var _implements = require_implements();
      var _inspect = require_inspect();
      var _object = require_object();
      var _equals2 = require_equals();
      var type3 = require_types().type("Assign");
      var _type = require_types().typeFn(type3(), VERSION);
      var fl = require_flNames();
      var isNil = require_isNil();
      var isObject = require_isObject();
      var isSameType = require_isSameType();
      var _empty = function() {
        return Assign({});
      };
      function Assign(o) {
        var obj;
        var x = isNil(o) ? _empty().valueOf() : o;
        if (!arguments.length || !isObject(x)) {
          throw new TypeError("Assign: Object required");
        }
        var valueOf = function() {
          return x;
        };
        var empty2 = _empty;
        var inspect = function() {
          return "Assign" + _inspect(valueOf());
        };
        var equals3 = function(m) {
          return isSameType(Assign, m) && _equals2(x, m.valueOf());
        };
        function concat(method) {
          return function(m) {
            if (!isSameType(Assign, m)) {
              throw new TypeError("Assign." + method + ": Assign required");
            }
            return Assign(_object.assign(m.valueOf(), x));
          };
        }
        return obj = {
          inspect,
          toString: inspect,
          equals: equals3,
          valueOf,
          type: type3,
          empty: empty2,
          concat: concat("concat")
        }, obj[fl.equals] = equals3, obj[fl.empty] = empty2, obj[fl.concat] = concat(fl.concat), obj["@@type"] = _type, obj.constructor = Assign, obj;
      }
      Assign["@@implements"] = _implements(
        ["equals", "concat", "empty"]
      );
      Assign.empty = _empty;
      Assign.type = type3;
      Assign[fl.empty] = _empty;
      Assign["@@type"] = _type;
      module.exports = Assign;
    }
  });

  // node_modules/crocks/Endo/index.js
  var require_Endo = __commonJS({
    "node_modules/crocks/Endo/index.js"(exports, module) {
      var VERSION = 2;
      var _implements = require_implements();
      var _inspect = require_inspect();
      var type3 = require_types().type("Endo");
      var _type = require_types().typeFn(type3(), VERSION);
      var fl = require_flNames();
      var compose2 = require_compose();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var _empty = function() {
        return Endo(function(x) {
          return x;
        });
      };
      function Endo(runWith) {
        var obj;
        if (!isFunction(runWith)) {
          throw new TypeError("Endo: Function value required");
        }
        var valueOf = function() {
          return runWith;
        };
        var empty2 = _empty;
        var inspect = function() {
          return "Endo" + _inspect(valueOf());
        };
        function concat(method) {
          return function(m) {
            if (!isSameType(Endo, m)) {
              throw new TypeError("Endo." + method + ": Endo required");
            }
            return Endo(compose2(m.valueOf(), valueOf()));
          };
        }
        return obj = {
          inspect,
          toString: inspect,
          valueOf,
          type: type3,
          empty: empty2,
          runWith,
          concat: concat("concat")
        }, obj[fl.empty] = empty2, obj[fl.concat] = concat(fl.concat), obj["@@type"] = _type, obj.constructor = Endo, obj;
      }
      Endo["@@implements"] = _implements(
        ["concat", "empty"]
      );
      Endo.empty = _empty;
      Endo.type = type3;
      Endo[fl.empty] = _empty;
      Endo["@@type"] = _type;
      module.exports = Endo;
    }
  });

  // node_modules/crocks/First/index.js
  var require_First = __commonJS({
    "node_modules/crocks/First/index.js"(exports, module) {
      var VERSION = 2;
      var _implements = require_implements();
      var _inspect = require_inspect();
      var _equals2 = require_equals();
      var type3 = require_types().type("First");
      var _type = require_types().typeFn(type3(), VERSION);
      var fl = require_flNames();
      var isSameType = require_isSameType();
      var Maybe = require_Maybe();
      var _empty = function() {
        return First(Maybe.Nothing());
      };
      function First(x) {
        var obj;
        if (!arguments.length) {
          throw new TypeError("First: Requires one argument");
        }
        var maybe = !isSameType(Maybe, x) ? Maybe.of(x) : x.map(function(x2) {
          return x2;
        });
        var empty2 = _empty;
        var inspect = function() {
          return "First(" + _inspect(maybe) + " )";
        };
        var equals3 = function(m) {
          return isSameType(First, m) && _equals2(maybe, m.valueOf());
        };
        var valueOf = function() {
          return maybe;
        };
        var option = maybe.option;
        function concat(method) {
          return function(m) {
            if (!isSameType(First, m)) {
              throw new TypeError("First." + method + ": First required");
            }
            var n = m.valueOf().map(function(x2) {
              return x2;
            });
            return First(
              maybe.either(function() {
                return n;
              }, Maybe.Just)
            );
          };
        }
        return obj = {
          inspect,
          toString: inspect,
          equals: equals3,
          empty: empty2,
          option,
          type: type3,
          valueOf,
          concat: concat("concat")
        }, obj[fl.equals] = equals3, obj[fl.empty] = _empty, obj[fl.concat] = concat(fl.concat), obj["@@type"] = _type, obj.constructor = First, obj;
      }
      First["@@implements"] = _implements(
        ["equals", "concat", "empty"]
      );
      First.empty = _empty;
      First.type = type3;
      First[fl.empty] = _empty;
      First["@@type"] = _type;
      module.exports = First;
    }
  });

  // node_modules/crocks/Last/index.js
  var require_Last = __commonJS({
    "node_modules/crocks/Last/index.js"(exports, module) {
      var VERSION = 2;
      var _implements = require_implements();
      var _inspect = require_inspect();
      var _equals2 = require_equals();
      var type3 = require_types().type("Last");
      var _type = require_types().typeFn(type3(), VERSION);
      var fl = require_flNames();
      var isSameType = require_isSameType();
      var Maybe = require_Maybe();
      var _empty = function() {
        return Last(Maybe.Nothing());
      };
      function Last(x) {
        var obj;
        if (!arguments.length) {
          throw new TypeError("Last: Requires one argument");
        }
        var maybe = !isSameType(Maybe, x) ? Maybe.of(x) : x.map(function(x2) {
          return x2;
        });
        var valueOf = function() {
          return maybe;
        };
        var empty2 = _empty;
        var inspect = function() {
          return "Last(" + _inspect(maybe) + " )";
        };
        var equals3 = function(m) {
          return isSameType(Last, m) && _equals2(maybe, m.valueOf());
        };
        var option = maybe.option;
        function concat(method) {
          return function(m) {
            if (!isSameType(Last, m)) {
              throw new TypeError("Last." + method + ": Last required");
            }
            var n = m.valueOf().map(function(x2) {
              return x2;
            });
            return Last(
              maybe.either(
                function() {
                  return n;
                },
                function() {
                  return n.either(function() {
                    return maybe;
                  }, function() {
                    return n;
                  });
                }
              )
            );
          };
        }
        return obj = {
          inspect,
          toString: inspect,
          equals: equals3,
          empty: empty2,
          option,
          type: type3,
          valueOf,
          concat: concat("concat")
        }, obj[fl.equals] = equals3, obj[fl.empty] = empty2, obj[fl.concat] = concat(fl.concat), obj["@@type"] = _type, obj.constructor = Last, obj;
      }
      Last["@@implements"] = _implements(
        ["equals", "concat", "empty"]
      );
      Last.empty = _empty;
      Last.type = type3;
      Last[fl.empty] = _empty;
      Last["@@type"] = _type;
      module.exports = Last;
    }
  });

  // node_modules/crocks/Max/index.js
  var require_Max = __commonJS({
    "node_modules/crocks/Max/index.js"(exports, module) {
      var VERSION = 2;
      var _implements = require_implements();
      var _inspect = require_inspect();
      var _equals2 = require_equals();
      var type3 = require_types().type("Max");
      var _type = require_types().typeFn(type3(), VERSION);
      var fl = require_flNames();
      var isNil = require_isNil();
      var isNumber = require_isNumber();
      var isSameType = require_isSameType();
      var _empty = function() {
        return Max(-Infinity);
      };
      function Max(n) {
        var obj;
        var x = isNil(n) ? _empty().valueOf() : n;
        if (!arguments.length || !isNumber(x)) {
          throw new TypeError("Max: Numeric value required");
        }
        var valueOf = function() {
          return x;
        };
        var empty2 = _empty;
        var inspect = function() {
          return "Max" + _inspect(valueOf());
        };
        var equals3 = function(m) {
          return isSameType(Max, m) && _equals2(x, m.valueOf());
        };
        function concat(method) {
          return function(m) {
            if (!isSameType(Max, m)) {
              throw new TypeError("Max." + method + ": Max requried");
            }
            return Max(Math.max(x, m.valueOf()));
          };
        }
        return obj = {
          inspect,
          toString: inspect,
          equals: equals3,
          valueOf,
          type: type3,
          empty: empty2,
          concat: concat("concat")
        }, obj[fl.equals] = equals3, obj[fl.empty] = empty2, obj[fl.concat] = concat(fl.concat), obj["@@type"] = _type, obj.constructor = Max, obj;
      }
      Max["@@implements"] = _implements(
        ["equals", "concat", "empty"]
      );
      Max.empty = _empty;
      Max.type = type3;
      Max[fl.empty] = _empty;
      Max["@@type"] = _type;
      module.exports = Max;
    }
  });

  // node_modules/crocks/Min/index.js
  var require_Min = __commonJS({
    "node_modules/crocks/Min/index.js"(exports, module) {
      var VERSION = 2;
      var _implements = require_implements();
      var _inspect = require_inspect();
      var _equals2 = require_equals();
      var type3 = require_types().type("Min");
      var _type = require_types().typeFn(type3(), VERSION);
      var fl = require_flNames();
      var isNil = require_isNil();
      var isNumber = require_isNumber();
      var isSameType = require_isSameType();
      var _empty = function() {
        return Min(Infinity);
      };
      function Min(n) {
        var obj;
        var x = isNil(n) ? _empty().valueOf() : n;
        if (!arguments.length || !isNumber(x)) {
          throw new TypeError("Min: Numeric value required");
        }
        var valueOf = function() {
          return x;
        };
        var empty2 = _empty;
        var inspect = function() {
          return "Min" + _inspect(valueOf());
        };
        var equals3 = function(m) {
          return isSameType(Min, m) && _equals2(x, m.valueOf());
        };
        function concat(method) {
          return function(m) {
            if (!isSameType(Min, m)) {
              throw new TypeError("Min." + method + ": Min required");
            }
            return Min(Math.min(x, m.valueOf()));
          };
        }
        return obj = {
          inspect,
          toString: inspect,
          equals: equals3,
          valueOf,
          type: type3,
          empty: empty2,
          concat: concat("concat")
        }, obj[fl.equals] = equals3, obj[fl.empty] = empty2, obj[fl.concat] = concat(fl.concat), obj["@@type"] = _type, obj.constructor = Min, obj;
      }
      Min["@@implements"] = _implements(
        ["equals", "concat", "empty"]
      );
      Min.empty = _empty;
      Min.type = type3;
      Min[fl.empty] = _empty;
      Min["@@type"] = _type;
      module.exports = Min;
    }
  });

  // node_modules/crocks/Prod/index.js
  var require_Prod = __commonJS({
    "node_modules/crocks/Prod/index.js"(exports, module) {
      var VERSION = 2;
      var _implements = require_implements();
      var _inspect = require_inspect();
      var _equals2 = require_equals();
      var type3 = require_types().type("Prod");
      var _type = require_types().typeFn(type3(), VERSION);
      var fl = require_flNames();
      var isNil = require_isNil();
      var isNumber = require_isNumber();
      var isSameType = require_isSameType();
      var _empty = function() {
        return Prod(1);
      };
      function Prod(n) {
        var obj;
        var x = isNil(n) ? _empty().valueOf() : n;
        if (!arguments.length || !isNumber(x)) {
          throw new TypeError("Prod: Numeric value required");
        }
        var valueOf = function() {
          return x;
        };
        var empty2 = _empty;
        var inspect = function() {
          return "Prod" + _inspect(valueOf());
        };
        var equals3 = function(m) {
          return isSameType(Prod, m) && _equals2(x, m.valueOf());
        };
        function concat(method) {
          return function(m) {
            if (!isSameType(Prod, m)) {
              throw new TypeError("Prod." + method + ": Prod required");
            }
            return Prod(x * m.valueOf());
          };
        }
        return obj = {
          inspect,
          toString: inspect,
          equals: equals3,
          valueOf,
          type: type3,
          empty: empty2,
          concat: concat("concat")
        }, obj[fl.equals] = equals3, obj[fl.empty] = empty2, obj[fl.concat] = concat(fl.concat), obj["@@type"] = _type, obj.constructor = Prod, obj;
      }
      Prod["@@implements"] = _implements(
        ["equals", "concat", "empty"]
      );
      Prod.empty = _empty;
      Prod.type = type3;
      Prod[fl.empty] = _empty;
      Prod["@@type"] = _type;
      module.exports = Prod;
    }
  });

  // node_modules/crocks/Sum/index.js
  var require_Sum = __commonJS({
    "node_modules/crocks/Sum/index.js"(exports, module) {
      var VERSION = 2;
      var _implements = require_implements();
      var _inspect = require_inspect();
      var _equals2 = require_equals();
      var type3 = require_types().type("Sum");
      var _type = require_types().typeFn(type3(), VERSION);
      var fl = require_flNames();
      var isNil = require_isNil();
      var isNumber = require_isNumber();
      var isSameType = require_isSameType();
      var _empty = function() {
        return Sum(0);
      };
      function Sum(n) {
        var obj;
        var x = isNil(n) ? _empty().valueOf() : n;
        if (!arguments.length || !isNumber(x)) {
          throw new TypeError("Sum: Numeric value required");
        }
        var valueOf = function() {
          return x;
        };
        var empty2 = _empty;
        var inspect = function() {
          return "Sum" + _inspect(valueOf());
        };
        var equals3 = function(m) {
          return isSameType(Sum, m) && _equals2(x, m.valueOf());
        };
        function concat(method) {
          return function(m) {
            if (!isSameType(Sum, m)) {
              throw new TypeError("Sum." + method + ": Sum required");
            }
            return Sum(x + m.valueOf());
          };
        }
        return obj = {
          inspect,
          toString: inspect,
          valueOf,
          equals: equals3,
          type: type3,
          empty: empty2,
          concat: concat("concat")
        }, obj[fl.equals] = equals3, obj[fl.empty] = empty2, obj[fl.concat] = concat(fl.concat), obj["@@type"] = _type, obj.constructor = Sum, obj;
      }
      Sum["@@implements"] = _implements(
        ["equals", "concat", "empty"]
      );
      Sum.empty = _empty;
      Sum.type = type3;
      Sum[fl.empty] = _empty;
      Sum["@@type"] = _type;
      module.exports = Sum;
    }
  });

  // node_modules/crocks/pointfree/alt.js
  var require_alt = __commonJS({
    "node_modules/crocks/pointfree/alt.js"(exports, module) {
      var curry = require_curry();
      var fl = require_flNames();
      var isAlt = require_isAlt();
      var isSameType = require_isSameType();
      function alt(m, x) {
        if (!(isAlt(m) && isSameType(m, x))) {
          throw new TypeError(
            "alt: Both arguments must be Alts of the same type"
          );
        }
        return (x[fl.alt] || x.alt).call(x, m);
      }
      module.exports = curry(alt);
    }
  });

  // node_modules/crocks/pointfree/ap.js
  var require_ap = __commonJS({
    "node_modules/crocks/pointfree/ap.js"(exports, module) {
      var array = require_array();
      var curry = require_curry();
      var isApplicative = require_isApplicative();
      var isArray = require_isArray();
      var isSameType = require_isSameType();
      function ap(m, x) {
        if (!((isApplicative(m) || isArray(m)) && isSameType(m, x))) {
          throw new TypeError("ap: Both arguments must be Applys of the same type");
        }
        if (isArray(x)) {
          return array.ap(m, x);
        }
        return x.ap(m);
      }
      module.exports = curry(ap);
    }
  });

  // node_modules/crocks/pointfree/bimap.js
  var require_bimap = __commonJS({
    "node_modules/crocks/pointfree/bimap.js"(exports, module) {
      var curry = require_curry();
      var isBifunctor = require_isBifunctor();
      var isFunction = require_isFunction();
      var fl = require_flNames();
      function bimap(f, g, m) {
        if (!(isFunction(f) && isFunction(g))) {
          throw new TypeError(
            "bimap: Functions required for first two arguments"
          );
        }
        if (!isBifunctor(m)) {
          throw new TypeError(
            "bimap: Bifunctor required for third argument"
          );
        }
        return (m[fl.bimap] || m.bimap).call(m, f, g);
      }
      module.exports = curry(bimap);
    }
  });

  // node_modules/crocks/pointfree/bichain.js
  var require_bichain = __commonJS({
    "node_modules/crocks/pointfree/bichain.js"(exports, module) {
      var curry = require_curry();
      var isFunction = require_isFunction();
      function bichain(f, g, m) {
        if (!isFunction(f) || !isFunction(g)) {
          throw new TypeError("bichain: First two arguments must be Sum Type returning functions");
        }
        if (m && isFunction(m.bichain)) {
          return m.bichain.call(m, f, g);
        }
        throw new TypeError(
          "bichain: Third argument must be a Sum Type"
        );
      }
      module.exports = curry(bichain);
    }
  });

  // node_modules/crocks/pointfree/both.js
  var require_both = __commonJS({
    "node_modules/crocks/pointfree/both.js"(exports, module) {
      var Pair = require_types().proxy("Pair");
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      function both(m) {
        if (isFunction(m)) {
          return function(x) {
            if (!isSameType(Pair, x)) {
              throw new TypeError("both: Pair required as input");
            }
            return x.bimap(m, m);
          };
        }
        if (m && isFunction(m.both)) {
          return m.both();
        }
        throw new TypeError("both: Strong Function or Profunctor required");
      }
      module.exports = both;
    }
  });

  // node_modules/crocks/pointfree/chain.js
  var require_chain = __commonJS({
    "node_modules/crocks/pointfree/chain.js"(exports, module) {
      var _chain = require_array().chain;
      var curry = require_curry();
      var isArray = require_isArray();
      var isChain = require_isChain();
      var isFunction = require_isFunction();
      var fl = require_flNames();
      function chain(fn, m) {
        if (!isFunction(fn)) {
          throw new TypeError("chain: Chain returning function required for first argument");
        }
        if (!(isChain(m) || isArray(m))) {
          throw new TypeError("chain: Chain of the same type required for second argument");
        }
        if (isArray(m)) {
          return _chain(fn, m);
        }
        return (m[fl.chain] || m.chain).call(m, fn);
      }
      module.exports = curry(chain);
    }
  });

  // node_modules/crocks/pointfree/coalesce.js
  var require_coalesce = __commonJS({
    "node_modules/crocks/pointfree/coalesce.js"(exports, module) {
      var curry = require_curry();
      var isFunction = require_isFunction();
      function coalesce(f, g, m) {
        if (!(isFunction(f) && isFunction(g))) {
          throw new TypeError(
            "coalesce: Functions required for first two arguments"
          );
        }
        if (m && isFunction(m.coalesce)) {
          return m.coalesce(f, g);
        }
        throw new TypeError(
          "coalesce: Sum Type required for third argument"
        );
      }
      module.exports = curry(coalesce);
    }
  });

  // node_modules/crocks/pointfree/compareWith.js
  var require_compareWith = __commonJS({
    "node_modules/crocks/pointfree/compareWith.js"(exports, module) {
      var curry = require_curry();
      var isFunction = require_isFunction();
      function compareWith(x, y, m) {
        if (!(m && isFunction(m.compareWith))) {
          throw new TypeError("compareWith: Equiv required for third argument");
        }
        return m.compareWith(x, y);
      }
      module.exports = curry(compareWith);
    }
  });

  // node_modules/crocks/pointfree/concat.js
  var require_concat = __commonJS({
    "node_modules/crocks/pointfree/concat.js"(exports, module) {
      var curry = require_curry();
      var isSameType = require_isSameType();
      var isSemigroup = require_isSemigroup();
      var fl = require_flNames();
      function concat(x, m) {
        if (!(isSemigroup(m) && isSameType(x, m))) {
          throw new TypeError(
            "concat: Semigroups of the same type required for both arguments"
          );
        }
        return (m[fl.concat] || m.concat).call(m, x);
      }
      module.exports = curry(concat);
    }
  });

  // node_modules/crocks/pointfree/cons.js
  var require_cons = __commonJS({
    "node_modules/crocks/pointfree/cons.js"(exports, module) {
      var curry = require_curry();
      var isArray = require_isArray();
      var isFunction = require_isFunction();
      function cons(x, m) {
        if (m && isFunction(m.cons)) {
          return m.cons(x);
        } else if (isArray(m)) {
          return [x].concat(m);
        }
        throw new TypeError("cons: List or Array required for second argument");
      }
      module.exports = curry(cons);
    }
  });

  // node_modules/crocks/pointfree/contramap.js
  var require_contramap = __commonJS({
    "node_modules/crocks/pointfree/contramap.js"(exports, module) {
      var compose2 = require_compose();
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isContravariant = require_isContravariant();
      var fl = require_flNames();
      function contramap(fn, m) {
        if (!isFunction(fn)) {
          throw new TypeError(
            "contramap: Function required for first argument"
          );
        }
        if (isFunction(m)) {
          return compose2(m, fn);
        }
        if (isContravariant(m)) {
          return (m[fl.contramap] || m.contramap).call(m, fn);
        }
        throw new TypeError(
          "contramap: Function or Contavariant Functor of the same type required for second argument"
        );
      }
      module.exports = curry(contramap);
    }
  });

  // node_modules/crocks/pointfree/either.js
  var require_either = __commonJS({
    "node_modules/crocks/pointfree/either.js"(exports, module) {
      var curry = require_curry();
      var isFunction = require_isFunction();
      function either(lf, rf, m) {
        if (!(isFunction(lf) && isFunction(rf))) {
          throw new TypeError(
            "either: First two arguments must be functions"
          );
        }
        if (!(m && isFunction(m.either))) {
          throw new TypeError(
            "either: Last argument must be a Sum Type"
          );
        }
        return m.either(lf, rf);
      }
      module.exports = curry(either);
    }
  });

  // node_modules/crocks/pointfree/empty.js
  var require_empty = __commonJS({
    "node_modules/crocks/pointfree/empty.js"(exports, module) {
      var hasAlg = require_hasAlg();
      var isSameType = require_isSameType();
      var fl = require_flNames();
      function empty2(m) {
        if (m && hasAlg("empty", m)) {
          return (m[fl.empty] || m.empty).call(m);
        }
        if (m && hasAlg("empty", m.constructor)) {
          return (m.constructor[fl.empty] || m.constructor.empty).call(m);
        }
        if (isSameType([], m)) {
          return [];
        }
        if (isSameType("", m)) {
          return "";
        }
        if (isSameType({}, m)) {
          return {};
        }
        throw new TypeError("empty: Monoid, Array, String or Object required");
      }
      module.exports = empty2;
    }
  });

  // node_modules/crocks/pointfree/equals.js
  var require_equals2 = __commonJS({
    "node_modules/crocks/pointfree/equals.js"(exports, module) {
      var _equals2 = require_equals();
      var curry = require_curry();
      function equals3(x, y) {
        return _equals2(x, y);
      }
      module.exports = curry(equals3);
    }
  });

  // node_modules/crocks/pointfree/extend.js
  var require_extend = __commonJS({
    "node_modules/crocks/pointfree/extend.js"(exports, module) {
      var curry = require_curry();
      var fl = require_flNames();
      var isExtend = require_isExtend();
      var isFunction = require_isFunction();
      function extend(fn, m) {
        if (!isFunction(fn)) {
          throw new TypeError("extend: Function required for first argument");
        }
        if (!isExtend(m)) {
          throw new TypeError("extend: Extend required for second argument");
        }
        return (m[fl.extend] || m.extend).call(m, fn);
      }
      module.exports = curry(extend);
    }
  });

  // node_modules/crocks/pointfree/filter.js
  var require_filter = __commonJS({
    "node_modules/crocks/pointfree/filter.js"(exports, module) {
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isPredOrFunc = require_isPredOrFunc();
      var isObject = require_isObject();
      var object = require_object();
      var predOrFunc = require_predOrFunc();
      function filter3(pred, m) {
        if (!isPredOrFunc(pred)) {
          throw new TypeError("filter: Pred or predicate function required for first argument");
        }
        var fn = function(x) {
          return predOrFunc(pred, x);
        };
        if (m && isFunction(m.filter)) {
          return m.filter(fn);
        }
        if (m && isObject(m)) {
          return object.filter(fn, m);
        }
        throw new TypeError("filter: Filterable or Object required for second argument");
      }
      module.exports = curry(filter3);
    }
  });

  // node_modules/crocks/pointfree/first.js
  var require_first = __commonJS({
    "node_modules/crocks/pointfree/first.js"(exports, module) {
      var Pair = require_types().proxy("Pair");
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var identity2 = function(x) {
        return x;
      };
      function first(m) {
        if (isFunction(m)) {
          return function(x) {
            if (!isSameType(Pair, x)) {
              throw new TypeError("first: Pair required as input");
            }
            return x.bimap(m, identity2);
          };
        }
        if (m && isFunction(m.first)) {
          return m.first();
        }
        throw new TypeError("first: Arrow, Function or Star required");
      }
      module.exports = first;
    }
  });

  // node_modules/crocks/pointfree/fold.js
  var require_fold = __commonJS({
    "node_modules/crocks/pointfree/fold.js"(exports, module) {
      var _array = require_array();
      var isArray = require_isArray();
      var isFunction = require_isFunction();
      function fold(m) {
        if (isArray(m)) {
          return _array.fold(m);
        }
        if (m && isFunction(m.fold)) {
          return m.fold();
        }
        throw new TypeError("fold: Non-empty Foldable with at least one Semigroup is required");
      }
      module.exports = fold;
    }
  });

  // node_modules/crocks/pointfree/foldMap.js
  var require_foldMap = __commonJS({
    "node_modules/crocks/pointfree/foldMap.js"(exports, module) {
      var _array = require_array();
      var curry = require_curry();
      var isArray = require_isArray();
      var isFunction = require_isFunction();
      function foldMap(fn, m) {
        if (!isFunction(fn)) {
          throw new TypeError(
            "foldMap: Function returning Semigroups of the same type required for first argument"
          );
        }
        if (isArray(m)) {
          return _array.foldMap(fn, m);
        }
        if (m && isFunction(m.foldMap)) {
          return m.foldMap(fn);
        }
        throw new TypeError(
          "foldMap: Non-empty Foldable with at least one Semigroup required for second argument"
        );
      }
      module.exports = curry(foldMap);
    }
  });

  // node_modules/crocks/core/cloneIterable.js
  var require_cloneIterable = __commonJS({
    "node_modules/crocks/core/cloneIterable.js"(exports, module) {
      function cloneIterable(source) {
        var copy = Object.create(Object.getPrototypeOf(source));
        Object.assign(copy, source);
        var symbols = Object.getOwnPropertySymbols(source);
        symbols.forEach(function(symbol) {
          copy[symbol] = source[symbol];
        });
        return copy;
      }
      module.exports = cloneIterable;
    }
  });

  // node_modules/crocks/pointfree/head.js
  var require_head = __commonJS({
    "node_modules/crocks/pointfree/head.js"(exports, module) {
      var cloneIterable = require_cloneIterable();
      var isArray = require_isArray();
      var isFunction = require_isFunction();
      var isIterable = require_isIterable();
      var isString = require_isString();
      var ref = require_Maybe();
      var Nothing = ref.Nothing;
      var Just = ref.Just;
      function head(m) {
        if (m && isFunction(m.head)) {
          return m.head();
        }
        if (isArray(m) || isString(m)) {
          return !m.length ? Nothing() : Just(m[0]);
        }
        if (isIterable(m)) {
          var cloned = cloneIterable(m);
          var iterator = cloned[Symbol.iterator]();
          var head2 = iterator.next();
          return head2.done ? Nothing() : Just(head2.value);
        }
        throw new TypeError("head: List or iterable required");
      }
      module.exports = head;
    }
  });

  // node_modules/crocks/pointfree/init.js
  var require_init = __commonJS({
    "node_modules/crocks/pointfree/init.js"(exports, module) {
      var isFunction = require_isFunction();
      var isNil = require_isNil();
      var ref = require_Maybe();
      var Nothing = ref.Nothing;
      var Just = ref.Just;
      function init2(m) {
        if (!isNil(m)) {
          if (isFunction(m.init)) {
            return m.init();
          }
          if (isFunction(m.slice)) {
            return m.length < 2 ? Nothing() : Just(m.slice(0, -1));
          }
        }
        throw new TypeError("init: Argument must be an Array, String, or List");
      }
      module.exports = init2;
    }
  });

  // node_modules/crocks/pointfree/last.js
  var require_last = __commonJS({
    "node_modules/crocks/pointfree/last.js"(exports, module) {
      var cloneIterable = require_cloneIterable();
      var isArray = require_isArray();
      var isFunction = require_isFunction();
      var isIterable = require_isIterable();
      var isString = require_isString();
      var ref = require_Maybe();
      var Nothing = ref.Nothing;
      var Just = ref.Just;
      function last(m) {
        if (m && isFunction(m.last)) {
          return m.last();
        }
        if (isArray(m) || isString(m)) {
          return !m.length ? Nothing() : Just(m[m.length - 1]);
        }
        if (isIterable(m)) {
          var cloned = cloneIterable(m);
          var iterator = cloned[Symbol.iterator]();
          var curr = iterator.next();
          if (curr.done) {
            return Nothing();
          }
          var val;
          while (!curr.done) {
            val = curr.value;
            curr = iterator.next();
          }
          return Just(val);
        }
        throw new TypeError("last: Argument must be a List, String, or Iterable");
      }
      module.exports = last;
    }
  });

  // node_modules/crocks/pointfree/map.js
  var require_map = __commonJS({
    "node_modules/crocks/pointfree/map.js"(exports, module) {
      var compose2 = require_compose();
      var curry = require_curry();
      var isArray = require_isArray();
      var isObject = require_isObject();
      var isFunction = require_isFunction();
      var isFunctor = require_isFunctor();
      var array = require_array();
      var object = require_object();
      var fl = require_flNames();
      function map3(fn, m) {
        if (!isFunction(fn)) {
          throw new TypeError("map: Function required for first argument");
        }
        if (isFunction(m)) {
          return compose2(fn, m);
        }
        if (isArray(m)) {
          return array.map(fn, m);
        }
        if (m && isFunctor(m)) {
          return (m[fl.map] || m.map).call(m, fn);
        }
        if (isObject(m)) {
          return object.map(fn, m);
        }
        throw new TypeError("map: Object, Function or Functor of the same type required for second argument");
      }
      module.exports = curry(map3);
    }
  });

  // node_modules/crocks/pointfree/merge.js
  var require_merge = __commonJS({
    "node_modules/crocks/pointfree/merge.js"(exports, module) {
      var curry = require_curry();
      var isFunction = require_isFunction();
      function merge2(fn, m) {
        if (!isFunction(fn)) {
          throw new TypeError("merge: Function required for first argument");
        }
        if (!(m && isFunction(m.merge))) {
          throw new TypeError("merge: Pair or Tuple required for second argument");
        }
        return m.merge(fn);
      }
      module.exports = curry(merge2);
    }
  });

  // node_modules/crocks/pointfree/option.js
  var require_option = __commonJS({
    "node_modules/crocks/pointfree/option.js"(exports, module) {
      var curry = require_curry();
      var isFunction = require_isFunction();
      function option(x, m) {
        if (!(m && isFunction(m.option))) {
          throw new TypeError("option: Last argument must be a Maybe, First or Last");
        }
        return m.option(x);
      }
      module.exports = curry(option);
    }
  });

  // node_modules/crocks/pointfree/promap.js
  var require_promap = __commonJS({
    "node_modules/crocks/pointfree/promap.js"(exports, module) {
      var compose2 = require_compose();
      var curry = require_curry();
      var fl = require_flNames();
      var isFunction = require_isFunction();
      var isProfunctor = require_isProfunctor();
      function promap(l, r2, m) {
        if (!(isFunction(l) && isFunction(r2))) {
          throw new TypeError(
            "promap: Functions required for first two arguments"
          );
        }
        if (isFunction(m)) {
          return compose2(compose2(r2, m), l);
        }
        if (isProfunctor(m)) {
          return (m[fl.promap] || m.promap).call(m, l, r2);
        }
        throw new TypeError(
          "promap: Function or Profunctor required for third argument"
        );
      }
      module.exports = curry(promap);
    }
  });

  // node_modules/crocks/pointfree/reduce.js
  var require_reduce = __commonJS({
    "node_modules/crocks/pointfree/reduce.js"(exports, module) {
      var curry = require_curry();
      var isFoldable = require_isFoldable();
      var isFunction = require_isFunction();
      var fl = require_flNames();
      function reduce2(fn, init2, m) {
        if (!isFunction(fn)) {
          throw new TypeError(
            "reduce: Function required for first argument"
          );
        }
        if (!isFoldable(m)) {
          throw new TypeError(
            "reduce: Foldable required for third argument"
          );
        }
        return (m[fl.reduce] || m.reduce).call(m, fn, init2);
      }
      module.exports = curry(reduce2);
    }
  });

  // node_modules/crocks/pointfree/reduceRight.js
  var require_reduceRight = __commonJS({
    "node_modules/crocks/pointfree/reduceRight.js"(exports, module) {
      var curry = require_curry();
      var isFunction = require_isFunction();
      function reduceRight(fn, init2, m) {
        if (!isFunction(fn)) {
          throw new TypeError("reduceRight: Function required for first argument");
        } else if (!(m && isFunction(m.reduceRight))) {
          throw new TypeError("reduceRight: Right Foldable required for third argument");
        }
        return m.reduceRight(fn, init2);
      }
      module.exports = curry(reduceRight);
    }
  });

  // node_modules/crocks/pointfree/reject.js
  var require_reject = __commonJS({
    "node_modules/crocks/pointfree/reject.js"(exports, module) {
      var curry = require_curry();
      var isArray = require_isArray();
      var isPredOrFunc = require_isPredOrFunc();
      var isFunction = require_isFunction();
      var isObject = require_isObject();
      var object = require_object();
      var predOrFunc = require_predOrFunc();
      var not = function(fn) {
        return function(x) {
          return !fn(x);
        };
      };
      function reject(pred, m) {
        if (!isPredOrFunc(pred)) {
          throw new TypeError(
            "reject: Pred or predicate function required for first argument"
          );
        }
        var fn = function(x) {
          return predOrFunc(pred, x);
        };
        if (m && isFunction(m.reject)) {
          return m.reject(fn);
        }
        if (isArray(m)) {
          return m.filter(not(fn));
        }
        if (isObject(m)) {
          return object.filter(not(fn), m);
        }
        throw new TypeError("reject: Foldable or Object required for second argument");
      }
      module.exports = curry(reject);
    }
  });

  // node_modules/crocks/pointfree/run.js
  var require_run = __commonJS({
    "node_modules/crocks/pointfree/run.js"(exports, module) {
      var isFunction = require_isFunction();
      function run3(m) {
        if (!(m && isFunction(m.run))) {
          throw new TypeError("run: IO required");
        }
        return m.run();
      }
      module.exports = run3;
    }
  });

  // node_modules/crocks/pointfree/runWith.js
  var require_runWith = __commonJS({
    "node_modules/crocks/pointfree/runWith.js"(exports, module) {
      var curry = require_curry();
      var isFunction = require_isFunction();
      function runWith(x, m) {
        if (!(m && isFunction(m.runWith))) {
          throw new TypeError("runWith: Arrow, Endo, Pred, Reader, Star or State required for second argument");
        }
        return m.runWith(x);
      }
      module.exports = curry(runWith);
    }
  });

  // node_modules/crocks/pointfree/second.js
  var require_second = __commonJS({
    "node_modules/crocks/pointfree/second.js"(exports, module) {
      var Pair = require_types().proxy("Pair");
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var identity2 = function(x) {
        return x;
      };
      function second(m) {
        if (isFunction(m)) {
          return function(x) {
            if (!isSameType(Pair, x)) {
              throw new TypeError("second: Pair required as input");
            }
            return x.bimap(identity2, m);
          };
        }
        if (m && isFunction(m.second)) {
          return m.second();
        }
        throw new TypeError("second: Strong Function or Profunctor required");
      }
      module.exports = second;
    }
  });

  // node_modules/crocks/pointfree/sequence.js
  var require_sequence = __commonJS({
    "node_modules/crocks/pointfree/sequence.js"(exports, module) {
      var array = require_array();
      var curry = require_curry();
      var isArray = require_isArray();
      var isApplicative = require_isApplicative();
      var isFunction = require_isFunction();
      function sequence(af, m) {
        if (!(isApplicative(af) || isFunction(af))) {
          throw new TypeError(
            "sequence: Applicative TypeRep or Apply returning function required for first argument"
          );
        }
        if (m && isFunction(m.sequence)) {
          return m.sequence(af);
        }
        if (isArray(m)) {
          return array.sequence(af, m);
        }
        throw new TypeError("sequence: Traversable or Array required for second argument");
      }
      module.exports = curry(sequence);
    }
  });

  // node_modules/crocks/pointfree/swap.js
  var require_swap = __commonJS({
    "node_modules/crocks/pointfree/swap.js"(exports, module) {
      var curry = require_curry();
      var isFunction = require_isFunction();
      function swap(f, g, m) {
        if (!(isFunction(f) && isFunction(g))) {
          throw new TypeError(
            "swap: Function required for first two arguments"
          );
        }
        if (m && isFunction(m.swap)) {
          return m.swap(f, g);
        }
        throw new TypeError(
          "swap: Async, Either, Pair or Result required for third arguments"
        );
      }
      module.exports = curry(swap);
    }
  });

  // node_modules/crocks/pointfree/tail.js
  var require_tail = __commonJS({
    "node_modules/crocks/pointfree/tail.js"(exports, module) {
      var isFunction = require_isFunction();
      var isNil = require_isNil();
      var ref = require_Maybe();
      var Nothing = ref.Nothing;
      var Just = ref.Just;
      function tail3(m) {
        if (!isNil(m)) {
          if (isFunction(m.tail)) {
            return m.tail();
          }
          if (isFunction(m.slice)) {
            return m.length < 2 ? Nothing() : Just(m.slice(1));
          }
        }
        throw new TypeError("tail: Array, String or List required");
      }
      module.exports = tail3;
    }
  });

  // node_modules/crocks/pointfree/traverse.js
  var require_traverse = __commonJS({
    "node_modules/crocks/pointfree/traverse.js"(exports, module) {
      var array = require_array();
      var curry = require_curry();
      var isApplicative = require_isApplicative();
      var isArray = require_isArray();
      var isFunction = require_isFunction();
      function traverse(af, fn, m) {
        if (!(isApplicative(af) || isFunction(af))) {
          throw new TypeError(
            "traverse: Applicative TypeRep or Apply returning function required for first argument"
          );
        }
        if (!isFunction(fn)) {
          throw new TypeError(
            "traverse: Apply returning function required for second argument"
          );
        }
        if (m && isFunction(m.traverse)) {
          return m.traverse(af, fn);
        }
        if (isArray(m)) {
          return array.traverse(af, fn, m);
        }
        throw new TypeError("traverse: Traversable or Array required for third argument");
      }
      module.exports = curry(traverse);
    }
  });

  // node_modules/crocks/pointfree/valueOf.js
  var require_valueOf = __commonJS({
    "node_modules/crocks/pointfree/valueOf.js"(exports, module) {
      var isNil = require_isNil();
      function valueOf(m) {
        if (isNil(m)) {
          return m;
        }
        return m.valueOf();
      }
      module.exports = valueOf;
    }
  });

  // node_modules/crocks/pointfree/index.js
  var require_pointfree = __commonJS({
    "node_modules/crocks/pointfree/index.js"(exports, module) {
      module.exports = {
        alt: require_alt(),
        ap: require_ap(),
        bimap: require_bimap(),
        bichain: require_bichain(),
        both: require_both(),
        chain: require_chain(),
        coalesce: require_coalesce(),
        compareWith: require_compareWith(),
        concat: require_concat(),
        cons: require_cons(),
        contramap: require_contramap(),
        either: require_either(),
        empty: require_empty(),
        equals: require_equals2(),
        extend: require_extend(),
        filter: require_filter(),
        first: require_first(),
        fold: require_fold(),
        foldMap: require_foldMap(),
        head: require_head(),
        init: require_init(),
        last: require_last(),
        map: require_map(),
        merge: require_merge(),
        option: require_option(),
        promap: require_promap(),
        reduce: require_reduce(),
        reduceRight: require_reduceRight(),
        reject: require_reject(),
        run: require_run(),
        runWith: require_runWith(),
        second: require_second(),
        sequence: require_sequence(),
        swap: require_swap(),
        tail: require_tail(),
        traverse: require_traverse(),
        valueOf: require_valueOf()
      };
    }
  });

  // node_modules/crocks/State/evalWith.js
  var require_evalWith = __commonJS({
    "node_modules/crocks/State/evalWith.js"(exports, module) {
      var curry = require_curry();
      var isFunction = require_isFunction();
      function evalWith(x, m) {
        if (!(m && isFunction(m.evalWith))) {
          throw new TypeError("evalWith: State required for second argument");
        }
        return m.evalWith(x);
      }
      module.exports = curry(evalWith);
    }
  });

  // node_modules/crocks/State/execWith.js
  var require_execWith = __commonJS({
    "node_modules/crocks/State/execWith.js"(exports, module) {
      var curry = require_curry();
      var isFunction = require_isFunction();
      function execWith(x, m) {
        if (!(m && isFunction(m.execWith))) {
          throw new TypeError("execWith: State required for second argument");
        }
        return m.execWith(x);
      }
      module.exports = curry(execWith);
    }
  });

  // node_modules/crocks/Pair/fst.js
  var require_fst = __commonJS({
    "node_modules/crocks/Pair/fst.js"(exports, module) {
      var isFunction = require_isFunction();
      function fst(m) {
        if (!(m && isFunction(m.fst))) {
          throw new TypeError("fst: Pair required");
        }
        return m.fst();
      }
      module.exports = fst;
    }
  });

  // node_modules/crocks/Writer/log.js
  var require_log = __commonJS({
    "node_modules/crocks/Writer/log.js"(exports, module) {
      var isFunction = require_isFunction();
      function log(m) {
        if (!(m && isFunction(m.log))) {
          throw new TypeError("log: Writer required");
        }
        return m.log();
      }
      module.exports = log;
    }
  });

  // node_modules/crocks/Tuple/nmap.js
  var require_nmap = __commonJS({
    "node_modules/crocks/Tuple/nmap.js"(exports, module) {
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isInteger = require_isInteger();
      var isSameType = require_isSameType();
      var Tuple = require_Tuple();
      var validTuple = function(n, m) {
        return isSameType(Tuple(n), m);
      };
      function runMap(m, fns) {
        var n = fns.length;
        if (!validTuple(n, m)) {
          throw new TypeError("nmap: " + n + "-Tuple required");
        }
        fns.forEach(function(fn) {
          if (!isFunction(fn)) {
            throw new TypeError("nmap: Functions required for all arguments");
          }
        });
        return m.mapAll.apply(m, fns);
      }
      var withLength = function(n, fn) {
        return Object.defineProperty(fn, "length", {
          value: n
        });
      };
      function nmap(n) {
        if (!(isInteger(n) && n >= 1)) {
          throw new TypeError("nmap: Integer required for first argument");
        }
        switch (n) {
          case 1:
            return function(a2, m) {
              return runMap(m, [a2]);
            };
          case 2:
            return function(a2, b, m) {
              return runMap(m, [a2, b]);
            };
          case 3:
            return function(a2, b, c, m) {
              return runMap(m, [a2, b, c]);
            };
          case 4:
            return function(a2, b, c, d, m) {
              return runMap(m, [a2, b, c, d]);
            };
          case 5:
            return function(a2, b, c, d, e, m) {
              return runMap(m, [a2, b, c, d, e]);
            };
          case 6:
            return function(a2, b, c, d, e, f, m) {
              return runMap(m, [a2, b, c, d, e, f]);
            };
          case 7:
            return function(a2, b, c, d, e, f, g, m) {
              return runMap(m, [a2, b, c, d, e, f, g]);
            };
          case 8:
            return function(a2, b, c, d, e, f, g, h, m) {
              return runMap(m, [a2, b, c, d, e, f, g, h]);
            };
          case 9:
            return function(a2, b, c, d, e, f, g, h, i2, m) {
              return runMap(m, [a2, b, c, d, e, f, g, h, i2]);
            };
          case 10:
            return function(a2, b, c, d, e, f, g, h, i2, j, m) {
              return runMap(m, [a2, b, c, d, e, f, g, h, i2, j]);
            };
          default:
            return withLength(n + 1, function() {
              var parts = [].slice.call(arguments);
              return runMap(parts[parts.length - 1], parts.slice(0, parts.length - 1));
            });
        }
      }
      module.exports = curry(nmap);
    }
  });

  // node_modules/crocks/Tuple/project.js
  var require_project = __commonJS({
    "node_modules/crocks/Tuple/project.js"(exports, module) {
      var isFunction = require_isFunction();
      var curry = require_curry();
      function project(index, m) {
        if (!(m && isFunction(m.project))) {
          throw new TypeError("project: Tuple required");
        }
        return m.project(index);
      }
      module.exports = curry(project);
    }
  });

  // node_modules/crocks/Async/race.js
  var require_race = __commonJS({
    "node_modules/crocks/Async/race.js"(exports, module) {
      var curry = require_curry();
      var isSameType = require_isSameType();
      var Async2 = require_types().proxy("Async");
      function race(m, a2) {
        if (!(isSameType(m, a2) && isSameType(Async2, m))) {
          throw new TypeError("race: Both arguments must be Asyncs");
        }
        return a2.race(m);
      }
      module.exports = curry(race);
    }
  });

  // node_modules/crocks/Writer/read.js
  var require_read = __commonJS({
    "node_modules/crocks/Writer/read.js"(exports, module) {
      var isFunction = require_isFunction();
      function read(m) {
        if (!(m && isFunction(m.read))) {
          throw new TypeError("read: Writer required");
        }
        return m.read();
      }
      module.exports = read;
    }
  });

  // node_modules/crocks/Pair/snd.js
  var require_snd = __commonJS({
    "node_modules/crocks/Pair/snd.js"(exports, module) {
      var isFunction = require_isFunction();
      function snd(m) {
        if (!(m && isFunction(m.snd))) {
          throw new TypeError("snd: Pair required");
        }
        return m.snd();
      }
      module.exports = snd;
    }
  });

  // node_modules/crocks/List/arrayToList.js
  var require_arrayToList = __commonJS({
    "node_modules/crocks/List/arrayToList.js"(exports, module) {
      var List = require_List2();
      var curry = require_curry();
      var isArray = require_isArray();
      var isFunction = require_isFunction();
      function arrayToList(array) {
        if (isArray(array)) {
          return List.fromArray(array);
        } else if (isFunction(array)) {
          return function(x) {
            var g = array(x);
            if (!isArray(g)) {
              throw new TypeError("arrayToList: Array returning function required");
            }
            return List.fromArray(g);
          };
        }
        throw new TypeError("arrayToList: Array or Array returning function required");
      }
      module.exports = curry(arrayToList);
    }
  });

  // node_modules/crocks/Async/asyncToPromise.js
  var require_asyncToPromise = __commonJS({
    "node_modules/crocks/Async/asyncToPromise.js"(exports, module) {
      var curry = require_curry();
      var isSameType = require_isSameType();
      var isFunction = require_isFunction();
      var Async2 = require_types().proxy("Async");
      var toPromise = function(m) {
        if (!isSameType(Async2, m)) {
          throw new TypeError("asyncToPromise: Async or a function returning an Async required");
        }
        return m.toPromise();
      };
      function asyncToPromise(m) {
        return isFunction(m) ? function(x) {
          return toPromise(m(x));
        } : toPromise(m);
      }
      module.exports = curry(asyncToPromise);
    }
  });

  // node_modules/crocks/Async/eitherToAsync.js
  var require_eitherToAsync = __commonJS({
    "node_modules/crocks/Async/eitherToAsync.js"(exports, module) {
      var Async2 = require_Async();
      var Either = require_types().proxy("Either");
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var applyTransform = function(either) {
        return either.either(Async2.Rejected, Async2.Resolved);
      };
      function eitherToAsync(either) {
        if (isFunction(either)) {
          return function(x) {
            var m = either(x);
            if (!isSameType(Either, m)) {
              throw new TypeError("eitherToAsync: Either returning function required");
            }
            return applyTransform(m);
          };
        }
        if (isSameType(Either, either)) {
          return applyTransform(either);
        }
        throw new TypeError("eitherToAsync: Either or Either returning function required");
      }
      module.exports = curry(eitherToAsync);
    }
  });

  // node_modules/crocks/First/eitherToFirst.js
  var require_eitherToFirst = __commonJS({
    "node_modules/crocks/First/eitherToFirst.js"(exports, module) {
      var First = require_First();
      var Either = require_types().proxy("Either");
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var applyTransform = function(either) {
        return either.either(First.empty, First);
      };
      function eitherToFirst(either) {
        if (isFunction(either)) {
          return function(x) {
            var m = either(x);
            if (!isSameType(Either, m)) {
              throw new TypeError("eitherToFirst: Either returning function required");
            }
            return applyTransform(m);
          };
        }
        if (isSameType(Either, either)) {
          return applyTransform(either);
        }
        throw new TypeError("eitherToFirst: Either or Either returning function required");
      }
      module.exports = curry(eitherToFirst);
    }
  });

  // node_modules/crocks/Last/eitherToLast.js
  var require_eitherToLast = __commonJS({
    "node_modules/crocks/Last/eitherToLast.js"(exports, module) {
      var Last = require_Last();
      var Either = require_types().proxy("Either");
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var applyTransform = function(either) {
        return either.either(Last.empty, Last);
      };
      function eitherToLast(either) {
        if (isFunction(either)) {
          return function(x) {
            var m = either(x);
            if (!isSameType(Either, m)) {
              throw new TypeError("eitherToLast: Either returning function required");
            }
            return applyTransform(m);
          };
        }
        if (isSameType(Either, either)) {
          return applyTransform(either);
        }
        throw new TypeError("eitherToLast: Either or Either returning function required");
      }
      module.exports = curry(eitherToLast);
    }
  });

  // node_modules/crocks/Maybe/eitherToMaybe.js
  var require_eitherToMaybe = __commonJS({
    "node_modules/crocks/Maybe/eitherToMaybe.js"(exports, module) {
      var Maybe = require_Maybe2();
      var Either = require_types().proxy("Either");
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var applyTransform = function(either) {
        return either.either(Maybe.Nothing, Maybe.Just);
      };
      function eitherToMaybe(either) {
        if (isFunction(either)) {
          return function(x) {
            var m = either(x);
            if (!isSameType(Either, m)) {
              throw new TypeError("eitherToMaybe: Either returning function required");
            }
            return applyTransform(m);
          };
        }
        if (isSameType(Either, either)) {
          return applyTransform(either);
        }
        throw new TypeError("eitherToMaybe: Either or Either returning function required");
      }
      module.exports = curry(eitherToMaybe);
    }
  });

  // node_modules/crocks/Result/eitherToResult.js
  var require_eitherToResult = __commonJS({
    "node_modules/crocks/Result/eitherToResult.js"(exports, module) {
      var Result = require_Result();
      var Either = require_types().proxy("Either");
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var applyTransform = function(either) {
        return either.either(Result.Err, Result.Ok);
      };
      function eitherToResult(either) {
        if (isFunction(either)) {
          return function(x) {
            var m = either(x);
            if (!isSameType(Either, m)) {
              throw new TypeError("eitherToResult: Either returning function required");
            }
            return applyTransform(m);
          };
        }
        if (isSameType(Either, either)) {
          return applyTransform(either);
        }
        throw new TypeError("eitherToResult: Either or Either returning function required");
      }
      module.exports = curry(eitherToResult);
    }
  });

  // node_modules/crocks/Async/firstToAsync.js
  var require_firstToAsync = __commonJS({
    "node_modules/crocks/Async/firstToAsync.js"(exports, module) {
      var Async2 = require_Async();
      var First = require_types().proxy("First");
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var constant = function(x) {
        return function() {
          return x;
        };
      };
      var applyTransform = function(left, first) {
        return first.valueOf().either(
          constant(Async2.Rejected(left)),
          Async2.Resolved
        );
      };
      function firstToAsync(left, first) {
        if (isFunction(first)) {
          return function(x) {
            var m = first(x);
            if (!isSameType(First, m)) {
              throw new TypeError("firstToAsync: First returning function required for second argument");
            }
            return applyTransform(left, m);
          };
        }
        if (isSameType(First, first)) {
          return applyTransform(left, first);
        }
        throw new TypeError("firstToAsync: First or First returning function required for second argument");
      }
      module.exports = curry(firstToAsync);
    }
  });

  // node_modules/crocks/Either/firstToEither.js
  var require_firstToEither = __commonJS({
    "node_modules/crocks/Either/firstToEither.js"(exports, module) {
      var Either = require_Either();
      var First = require_types().proxy("First");
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var constant = function(x) {
        return function() {
          return x;
        };
      };
      var applyTransform = function(left, first) {
        return first.valueOf().either(
          constant(Either.Left(left)),
          Either.Right
        );
      };
      function firstToEither(left, first) {
        if (isFunction(first)) {
          return function(x) {
            var m = first(x);
            if (!isSameType(First, m)) {
              throw new TypeError("firstToEither: First returning function required for second argument");
            }
            return applyTransform(left, m);
          };
        }
        if (isSameType(First, first)) {
          return applyTransform(left, first);
        }
        throw new TypeError("firstToEither: First or First returning function required for second argument");
      }
      module.exports = curry(firstToEither);
    }
  });

  // node_modules/crocks/Last/firstToLast.js
  var require_firstToLast = __commonJS({
    "node_modules/crocks/Last/firstToLast.js"(exports, module) {
      var Last = require_Last();
      var First = require_types().proxy("First");
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var applyTransform = function(first) {
        return Last(first.valueOf());
      };
      function firstToLast(first) {
        if (isFunction(first)) {
          return function(x) {
            var m = first(x);
            if (!isSameType(First, m)) {
              throw new TypeError("firstToLast: First returning function required");
            }
            return applyTransform(m);
          };
        }
        if (isSameType(First, first)) {
          return applyTransform(first);
        }
        throw new TypeError("firstToLast: First or First returning function required");
      }
      module.exports = curry(firstToLast);
    }
  });

  // node_modules/crocks/Maybe/firstToMaybe.js
  var require_firstToMaybe = __commonJS({
    "node_modules/crocks/Maybe/firstToMaybe.js"(exports, module) {
      var First = require_types().proxy("First");
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var applyTransform = function(first) {
        return first.valueOf();
      };
      function firstToMaybe(first) {
        if (isFunction(first)) {
          return function(x) {
            var m = first(x);
            if (!isSameType(First, m)) {
              throw new TypeError("firstToMaybe: First returning function required");
            }
            return applyTransform(m);
          };
        }
        if (isSameType(First, first)) {
          return applyTransform(first);
        }
        throw new TypeError("firstToMaybe: First or First returning function required");
      }
      module.exports = curry(firstToMaybe);
    }
  });

  // node_modules/crocks/Result/firstToResult.js
  var require_firstToResult = __commonJS({
    "node_modules/crocks/Result/firstToResult.js"(exports, module) {
      var Result = require_Result();
      var First = require_types().proxy("First");
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var constant = function(x) {
        return function() {
          return x;
        };
      };
      var applyTransform = function(left, first) {
        return first.valueOf().either(
          constant(Result.Err(left)),
          Result.Ok
        );
      };
      function firstToResult(left, first) {
        if (isFunction(first)) {
          return function(x) {
            var m = first(x);
            if (!isSameType(First, m)) {
              throw new TypeError("firstToResult: First returning function required for second argument");
            }
            return applyTransform(left, m);
          };
        }
        if (isSameType(First, first)) {
          return applyTransform(left, first);
        }
        throw new TypeError("firstToResult: First or First returning function required for second argument");
      }
      module.exports = curry(firstToResult);
    }
  });

  // node_modules/crocks/Async/lastToAsync.js
  var require_lastToAsync = __commonJS({
    "node_modules/crocks/Async/lastToAsync.js"(exports, module) {
      var Async2 = require_Async();
      var Last = require_types().proxy("Last");
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var constant = function(x) {
        return function() {
          return x;
        };
      };
      var applyTransform = function(left, last) {
        return last.valueOf().either(
          constant(Async2.Rejected(left)),
          Async2.Resolved
        );
      };
      function lastToAsync(left, last) {
        if (isFunction(last)) {
          return function(x) {
            var m = last(x);
            if (!isSameType(Last, m)) {
              throw new TypeError("lastToAsync: Last returning function required for second argument");
            }
            return applyTransform(left, m);
          };
        }
        if (isSameType(Last, last)) {
          return applyTransform(left, last);
        }
        throw new TypeError("lastToAsync: Last or Last returning function required for second argument");
      }
      module.exports = curry(lastToAsync);
    }
  });

  // node_modules/crocks/Either/lastToEither.js
  var require_lastToEither = __commonJS({
    "node_modules/crocks/Either/lastToEither.js"(exports, module) {
      var Either = require_Either();
      var Last = require_types().proxy("Last");
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var constant = function(x) {
        return function() {
          return x;
        };
      };
      var applyTransform = function(left, last) {
        return last.valueOf().either(
          constant(Either.Left(left)),
          Either.Right
        );
      };
      function lastToEither(left, last) {
        if (isFunction(last)) {
          return function(x) {
            var m = last(x);
            if (!isSameType(Last, m)) {
              throw new TypeError("lastToEither: Last returning function required for second argument");
            }
            return applyTransform(left, m);
          };
        }
        if (isSameType(Last, last)) {
          return applyTransform(left, last);
        }
        throw new TypeError("lastToEither: Last or Last returning function required for second argument");
      }
      module.exports = curry(lastToEither);
    }
  });

  // node_modules/crocks/First/lastToFirst.js
  var require_lastToFirst = __commonJS({
    "node_modules/crocks/First/lastToFirst.js"(exports, module) {
      var First = require_First();
      var Last = require_types().proxy("Last");
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var applyTransform = function(last) {
        return First(last.valueOf());
      };
      function lastToFirst(last) {
        if (isFunction(last)) {
          return function(x) {
            var m = last(x);
            if (!isSameType(Last, m)) {
              throw new TypeError("lastToFirst: Last returning function required");
            }
            return applyTransform(m);
          };
        }
        if (isSameType(Last, last)) {
          return applyTransform(last);
        }
        throw new TypeError("lastToFirst: Last or Last returning function required");
      }
      module.exports = curry(lastToFirst);
    }
  });

  // node_modules/crocks/Maybe/lastToMaybe.js
  var require_lastToMaybe = __commonJS({
    "node_modules/crocks/Maybe/lastToMaybe.js"(exports, module) {
      var Last = require_types().proxy("Last");
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var applyTransform = function(last) {
        return last.valueOf();
      };
      function lastToMaybe(last) {
        if (isFunction(last)) {
          return function(x) {
            var m = last(x);
            if (!isSameType(Last, m)) {
              throw new TypeError("lastToMaybe: Last returning function required");
            }
            return applyTransform(m);
          };
        }
        if (isSameType(Last, last)) {
          return applyTransform(last);
        }
        throw new TypeError("lastToMaybe: Last or Last returning function required");
      }
      module.exports = curry(lastToMaybe);
    }
  });

  // node_modules/crocks/Result/lastToResult.js
  var require_lastToResult = __commonJS({
    "node_modules/crocks/Result/lastToResult.js"(exports, module) {
      var Result = require_Result();
      var Last = require_types().proxy("Last");
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var constant = function(x) {
        return function() {
          return x;
        };
      };
      var applyTransform = function(left, last) {
        return last.valueOf().either(
          constant(Result.Err(left)),
          Result.Ok
        );
      };
      function lastToResult(left, last) {
        if (isFunction(last)) {
          return function(x) {
            var m = last(x);
            if (!isSameType(Last, m)) {
              throw new TypeError("lastToResult: Last returning function required for second argument");
            }
            return applyTransform(left, m);
          };
        }
        if (isSameType(Last, last)) {
          return applyTransform(left, last);
        }
        throw new TypeError("lastToResult: Last or Last returning function required for second argument");
      }
      module.exports = curry(lastToResult);
    }
  });

  // node_modules/crocks/List/listToArray.js
  var require_listToArray = __commonJS({
    "node_modules/crocks/List/listToArray.js"(exports, module) {
      var List = require_List2();
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      function listToArray(list) {
        if (isFunction(list)) {
          return function(x) {
            var m = list(x);
            if (!isSameType(List, m)) {
              throw new TypeError("listToArray: List returning function required");
            }
            return m.toArray();
          };
        }
        if (isSameType(List, list)) {
          return list.toArray();
        }
        throw new TypeError("listToArray: List or List returning function required");
      }
      module.exports = curry(listToArray);
    }
  });

  // node_modules/crocks/Maybe/maybeToArray.js
  var require_maybeToArray = __commonJS({
    "node_modules/crocks/Maybe/maybeToArray.js"(exports, module) {
      var Maybe = require_Maybe2();
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var applyTransform = function(maybe) {
        return maybe.either(function() {
          return [];
        }, function(x) {
          return [x];
        });
      };
      var err = "maybeToArray: Argument must be a Maybe instanstace or a Maybe returning function";
      function maybeToArray(maybe) {
        if (isFunction(maybe)) {
          return function(x) {
            var m = maybe(x);
            if (!isSameType(Maybe, m)) {
              throw new TypeError(err);
            }
            return applyTransform(m);
          };
        }
        if (isSameType(Maybe, maybe)) {
          return applyTransform(maybe);
        }
        throw new TypeError(err);
      }
      module.exports = curry(maybeToArray);
    }
  });

  // node_modules/crocks/Async/maybeToAsync.js
  var require_maybeToAsync = __commonJS({
    "node_modules/crocks/Async/maybeToAsync.js"(exports, module) {
      var Async2 = require_Async();
      var Maybe = require_types().proxy("Maybe");
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var constant = function(x) {
        return function() {
          return x;
        };
      };
      var applyTransform = function(left, maybe) {
        return maybe.either(
          constant(Async2.Rejected(left)),
          Async2.Resolved
        );
      };
      function maybeToAsync(left, maybe) {
        if (isFunction(maybe)) {
          return function(x) {
            var m = maybe(x);
            if (!isSameType(Maybe, m)) {
              throw new TypeError("maybeToAsync: Maybe returning function required for second argument");
            }
            return applyTransform(left, m);
          };
        }
        if (isSameType(Maybe, maybe)) {
          return applyTransform(left, maybe);
        }
        throw new TypeError("maybeToAsync: Maybe or Maybe returning function required for second argument");
      }
      module.exports = curry(maybeToAsync);
    }
  });

  // node_modules/crocks/Either/maybeToEither.js
  var require_maybeToEither = __commonJS({
    "node_modules/crocks/Either/maybeToEither.js"(exports, module) {
      var Either = require_Either();
      var Maybe = require_types().proxy("Maybe");
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var constant = function(x) {
        return function() {
          return x;
        };
      };
      var applyTransform = function(left, maybe) {
        return maybe.either(
          constant(Either.Left(left)),
          Either.Right
        );
      };
      function maybeToEither(left, maybe) {
        if (isFunction(maybe)) {
          return function(x) {
            var m = maybe(x);
            if (!isSameType(Maybe, m)) {
              throw new TypeError("maybeToEither: Maybe returning function required for second argument");
            }
            return applyTransform(left, m);
          };
        }
        if (isSameType(Maybe, maybe)) {
          return applyTransform(left, maybe);
        }
        throw new TypeError("maybeToEither: Maybe or Maybe returning function required for second argument");
      }
      module.exports = curry(maybeToEither);
    }
  });

  // node_modules/crocks/First/maybeToFirst.js
  var require_maybeToFirst = __commonJS({
    "node_modules/crocks/First/maybeToFirst.js"(exports, module) {
      var First = require_First();
      var Maybe = require_types().proxy("Maybe");
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var applyTransform = function(maybe) {
        return First(maybe);
      };
      function maybeToFirst(maybe) {
        if (isFunction(maybe)) {
          return function(x) {
            var m = maybe(x);
            if (!isSameType(Maybe, m)) {
              throw new TypeError("maybeToFirst: Maybe returning function required");
            }
            return applyTransform(m);
          };
        }
        if (isSameType(Maybe, maybe)) {
          return applyTransform(maybe);
        }
        throw new TypeError("maybeToFirst: Maybe or Maybe returning function required");
      }
      module.exports = curry(maybeToFirst);
    }
  });

  // node_modules/crocks/Last/maybeToLast.js
  var require_maybeToLast = __commonJS({
    "node_modules/crocks/Last/maybeToLast.js"(exports, module) {
      var Last = require_Last();
      var Maybe = require_types().proxy("Maybe");
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var applyTransform = function(maybe) {
        return Last(maybe);
      };
      function maybeToLast(maybe) {
        if (isFunction(maybe)) {
          return function(x) {
            var m = maybe(x);
            if (!isSameType(Maybe, m)) {
              throw new TypeError("maybeToLast: Maybe returning function required");
            }
            return applyTransform(m);
          };
        }
        if (isSameType(Maybe, maybe)) {
          return applyTransform(maybe);
        }
        throw new TypeError("maybeToLast: Maybe or Maybe returning function required");
      }
      module.exports = curry(maybeToLast);
    }
  });

  // node_modules/crocks/List/maybeToList.js
  var require_maybeToList = __commonJS({
    "node_modules/crocks/List/maybeToList.js"(exports, module) {
      var List = require_List2();
      var Maybe = require_types().proxy("Maybe");
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var applyTransform = function(maybe) {
        return maybe.either(
          List.empty,
          List.of
        );
      };
      var err = "maybeToList: Argument must be a Maybe instanstace or a Maybe returning function";
      function maybeToList(maybe) {
        if (isFunction(maybe)) {
          return function(x) {
            var m = maybe(x);
            if (!isSameType(Maybe, m)) {
              throw new TypeError(err);
            }
            return applyTransform(m);
          };
        }
        if (isSameType(Maybe, maybe)) {
          return applyTransform(maybe);
        }
        throw new TypeError(err);
      }
      module.exports = curry(maybeToList);
    }
  });

  // node_modules/crocks/Result/maybeToResult.js
  var require_maybeToResult = __commonJS({
    "node_modules/crocks/Result/maybeToResult.js"(exports, module) {
      var Result = require_Result();
      var Maybe = require_types().proxy("Maybe");
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var constant = function(x) {
        return function() {
          return x;
        };
      };
      var applyTransform = function(left, maybe) {
        return maybe.either(
          constant(Result.Err(left)),
          Result.Ok
        );
      };
      function maybeToResult(left, maybe) {
        if (isFunction(maybe)) {
          return function(x) {
            var m = maybe(x);
            if (!isSameType(Maybe, m)) {
              throw new TypeError("maybeToResult: Maybe returning function required for second argument");
            }
            return applyTransform(left, m);
          };
        }
        if (isSameType(Maybe, maybe)) {
          return applyTransform(left, maybe);
        }
        throw new TypeError("maybeToResult: Maybe or Maybe returning function required for second argument");
      }
      module.exports = curry(maybeToResult);
    }
  });

  // node_modules/crocks/Async/resultToAsync.js
  var require_resultToAsync = __commonJS({
    "node_modules/crocks/Async/resultToAsync.js"(exports, module) {
      var Async2 = require_Async();
      var Result = require_types().proxy("Result");
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var applyTransform = function(either) {
        return either.either(Async2.Rejected, Async2.Resolved);
      };
      function resultToAsync(result) {
        if (isFunction(result)) {
          return function(x) {
            var m = result(x);
            if (!isSameType(Result, m)) {
              throw new TypeError("resultToAsync: Result returning function required");
            }
            return applyTransform(m);
          };
        }
        if (isSameType(Result, result)) {
          return applyTransform(result);
        }
        throw new TypeError("resultToAsync: Result or Result returning function required");
      }
      module.exports = curry(resultToAsync);
    }
  });

  // node_modules/crocks/Either/resultToEither.js
  var require_resultToEither = __commonJS({
    "node_modules/crocks/Either/resultToEither.js"(exports, module) {
      var Either = require_Either();
      var Result = require_types().proxy("Result");
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var applyTransform = function(result) {
        return result.either(Either.Left, Either.Right);
      };
      function resultToEither(result) {
        if (isFunction(result)) {
          return function(x) {
            var m = result(x);
            if (!isSameType(Result, m)) {
              throw new TypeError("resultToEither: Result returning function required");
            }
            return applyTransform(m);
          };
        }
        if (isSameType(Result, result)) {
          return applyTransform(result);
        }
        throw new TypeError("resultToEither: Result or Result returning function required");
      }
      module.exports = curry(resultToEither);
    }
  });

  // node_modules/crocks/First/resultToFirst.js
  var require_resultToFirst = __commonJS({
    "node_modules/crocks/First/resultToFirst.js"(exports, module) {
      var First = require_First();
      var Result = require_types().proxy("Result");
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var applyTransform = function(result) {
        return result.either(First.empty, First);
      };
      function resultToFirst(result) {
        if (isFunction(result)) {
          return function(x) {
            var m = result(x);
            if (!isSameType(Result, m)) {
              throw new TypeError("resultToFirst: Result returning function required");
            }
            return applyTransform(m);
          };
        }
        if (isSameType(Result, result)) {
          return applyTransform(result);
        }
        throw new TypeError("resultToFirst: Result or Result returning function required");
      }
      module.exports = curry(resultToFirst);
    }
  });

  // node_modules/crocks/Last/resultToLast.js
  var require_resultToLast = __commonJS({
    "node_modules/crocks/Last/resultToLast.js"(exports, module) {
      var Last = require_Last();
      var Result = require_types().proxy("Result");
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var applyTransform = function(result) {
        return result.either(Last.empty, Last);
      };
      function resultToLast(result) {
        if (isFunction(result)) {
          return function(x) {
            var m = result(x);
            if (!isSameType(Result, m)) {
              throw new TypeError("resultToLast: Result returning function required");
            }
            return applyTransform(m);
          };
        }
        if (isSameType(Result, result)) {
          return applyTransform(result);
        }
        throw new TypeError("resultToLast: Result or Result returning function required");
      }
      module.exports = curry(resultToLast);
    }
  });

  // node_modules/crocks/Maybe/resultToMaybe.js
  var require_resultToMaybe = __commonJS({
    "node_modules/crocks/Maybe/resultToMaybe.js"(exports, module) {
      var Maybe = require_Maybe2();
      var Result = require_types().proxy("Result");
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isSameType = require_isSameType();
      var applyTransform = function(result) {
        return result.either(Maybe.Nothing, Maybe.Just);
      };
      function resultToMaybe(result) {
        if (isFunction(result)) {
          return function(x) {
            var m = result(x);
            if (!isSameType(Result, m)) {
              throw new TypeError("resultToMaybe: Result returning function required");
            }
            return applyTransform(m);
          };
        }
        if (isSameType(Result, result)) {
          return applyTransform(result);
        }
        throw new TypeError("resultToMaybe: Result or Result returning function required");
      }
      module.exports = curry(resultToMaybe);
    }
  });

  // node_modules/crocks/Tuple/tupleToArray.js
  var require_tupleToArray = __commonJS({
    "node_modules/crocks/Tuple/tupleToArray.js"(exports, module) {
      var curry = require_curry();
      var isFunction = require_isFunction();
      function tupleToArray(tuple) {
        if (isFunction(tuple)) {
          return function(x) {
            var m = tuple(x);
            if (!isFunction(m.tupleLength)) {
              throw new TypeError("tupleToArray: Tuple returning function required");
            }
            return m.toArray();
          };
        }
        if (isFunction(tuple.tupleLength)) {
          return tuple.toArray();
        }
        throw new TypeError("tupleToArray: Tuple or Tuple returning function required");
      }
      module.exports = curry(tupleToArray);
    }
  });

  // node_modules/crocks/Pair/writerToPair.js
  var require_writerToPair = __commonJS({
    "node_modules/crocks/Pair/writerToPair.js"(exports, module) {
      var curry = require_curry();
      var isFunction = require_isFunction();
      var isWriter = function(x) {
        return !!x && isFunction(x.read);
      };
      var applyTransform = function(w) {
        return w.read();
      };
      function writerToPair(writer) {
        if (isFunction(writer)) {
          return function(x) {
            var m = writer(x);
            if (!isWriter(m)) {
              throw new TypeError("writerToPair: Writer returning function required");
            }
            return applyTransform(m);
          };
        }
        if (isWriter(writer)) {
          return applyTransform(writer);
        }
        throw new TypeError("writerToPair: Writer or Writer returning function required");
      }
      module.exports = curry(writerToPair);
    }
  });

  // node_modules/crocks/index.js
  var require_crocks = __commonJS({
    "node_modules/crocks/index.js"(exports, module) {
      var combinators = require_combinators();
      var logic = require_logic();
      var predicates = require_predicates();
      var crocks = {
        Arrow: require_Arrow(),
        Async: require_Async(),
        Const: require_Const(),
        Either: require_Either(),
        Equiv: require_Equiv(),
        Identity: require_Identity(),
        IO: require_IO(),
        List: require_List2(),
        Maybe: require_Maybe2(),
        Pair: require_Pair2(),
        Pred: require_Pred2(),
        Reader: require_Reader(),
        ReaderT: require_ReaderT(),
        Result: require_Result(),
        Star: require_Star(),
        State: require_State(),
        Tuple: require_Tuple(),
        Unit: require_Unit2(),
        Writer: require_Writer()
      };
      var helpers = Object.assign(
        {},
        require_helpers(),
        {
          branch: require_branch(),
          fanout: require_fanout(),
          find: require_find(),
          getPath: require_getPath(),
          getProp: require_getProp(),
          prop: require_prop(),
          propPath: require_propPath(),
          safe: require_safe(),
          safeAfter: require_safeAfter(),
          safeLift: require_safeLift(),
          toPairs: require_toPairs(),
          tryCatch: require_tryCatch()
        }
      );
      var monoids = {
        All: require_All(),
        Any: require_Any(),
        Assign: require_Assign(),
        Endo: require_Endo(),
        First: require_First(),
        Last: require_Last(),
        Max: require_Max(),
        Min: require_Min(),
        Prod: require_Prod(),
        Sum: require_Sum()
      };
      var pointfree = Object.assign(
        {},
        require_pointfree(),
        {
          evalWith: require_evalWith(),
          execWith: require_execWith(),
          fst: require_fst(),
          log: require_log(),
          nmap: require_nmap(),
          project: require_project(),
          race: require_race(),
          read: require_read(),
          snd: require_snd()
        }
      );
      var transforms = {
        arrayToList: require_arrayToList(),
        asyncToPromise: require_asyncToPromise(),
        eitherToAsync: require_eitherToAsync(),
        eitherToFirst: require_eitherToFirst(),
        eitherToLast: require_eitherToLast(),
        eitherToMaybe: require_eitherToMaybe(),
        eitherToResult: require_eitherToResult(),
        firstToAsync: require_firstToAsync(),
        firstToEither: require_firstToEither(),
        firstToLast: require_firstToLast(),
        firstToMaybe: require_firstToMaybe(),
        firstToResult: require_firstToResult(),
        lastToAsync: require_lastToAsync(),
        lastToEither: require_lastToEither(),
        lastToFirst: require_lastToFirst(),
        lastToMaybe: require_lastToMaybe(),
        lastToResult: require_lastToResult(),
        listToArray: require_listToArray(),
        maybeToArray: require_maybeToArray(),
        maybeToAsync: require_maybeToAsync(),
        maybeToEither: require_maybeToEither(),
        maybeToFirst: require_maybeToFirst(),
        maybeToLast: require_maybeToLast(),
        maybeToList: require_maybeToList(),
        maybeToResult: require_maybeToResult(),
        resultToAsync: require_resultToAsync(),
        resultToEither: require_resultToEither(),
        resultToFirst: require_resultToFirst(),
        resultToLast: require_resultToLast(),
        resultToMaybe: require_resultToMaybe(),
        tupleToArray: require_tupleToArray(),
        writerToPair: require_writerToPair()
      };
      module.exports = Object.assign(
        {},
        combinators,
        crocks,
        helpers,
        logic,
        monoids,
        pointfree,
        predicates,
        transforms
      );
    }
  });

  // node_modules/svelte/internal/index.mjs
  function noop() {
  }
  function is_promise(value) {
    return value && typeof value === "object" && typeof value.then === "function";
  }
  function run(fn) {
    return fn();
  }
  function blank_object() {
    return /* @__PURE__ */ Object.create(null);
  }
  function run_all(fns) {
    fns.forEach(run);
  }
  function is_function(thing) {
    return typeof thing === "function";
  }
  function safe_not_equal(a2, b) {
    return a2 != a2 ? b == b : a2 !== b || (a2 && typeof a2 === "object" || typeof a2 === "function");
  }
  function is_empty(obj) {
    return Object.keys(obj).length === 0;
  }
  function subscribe(store, ...callbacks) {
    if (store == null) {
      return noop;
    }
    const unsub = store.subscribe(...callbacks);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
  }
  function component_subscribe(component, store, callback) {
    component.$$.on_destroy.push(subscribe(store, callback));
  }
  var is_hydrating = false;
  function start_hydrating() {
    is_hydrating = true;
  }
  function end_hydrating() {
    is_hydrating = false;
  }
  function append(target, node) {
    target.appendChild(node);
  }
  function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
  }
  function detach(node) {
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    }
  }
  function destroy_each(iterations, detaching) {
    for (let i2 = 0; i2 < iterations.length; i2 += 1) {
      if (iterations[i2])
        iterations[i2].d(detaching);
    }
  }
  function element(name) {
    return document.createElement(name);
  }
  function text(data) {
    return document.createTextNode(data);
  }
  function space() {
    return text(" ");
  }
  function empty() {
    return text("");
  }
  function attr(node, attribute, value) {
    if (value == null)
      node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
      node.setAttribute(attribute, value);
  }
  function children(element2) {
    return Array.from(element2.childNodes);
  }
  function set_data(text2, data) {
    data = "" + data;
    if (text2.wholeText !== data)
      text2.data = data;
  }
  var current_component;
  function set_current_component(component) {
    current_component = component;
  }
  function get_current_component() {
    if (!current_component)
      throw new Error("Function called outside component initialization");
    return current_component;
  }
  var dirty_components = [];
  var binding_callbacks = [];
  var render_callbacks = [];
  var flush_callbacks = [];
  var resolved_promise = Promise.resolve();
  var update_scheduled = false;
  function schedule_update() {
    if (!update_scheduled) {
      update_scheduled = true;
      resolved_promise.then(flush);
    }
  }
  function add_render_callback(fn) {
    render_callbacks.push(fn);
  }
  var seen_callbacks = /* @__PURE__ */ new Set();
  var flushidx = 0;
  function flush() {
    const saved_component = current_component;
    do {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
      set_current_component(null);
      dirty_components.length = 0;
      flushidx = 0;
      while (binding_callbacks.length)
        binding_callbacks.pop()();
      for (let i2 = 0; i2 < render_callbacks.length; i2 += 1) {
        const callback = render_callbacks[i2];
        if (!seen_callbacks.has(callback)) {
          seen_callbacks.add(callback);
          callback();
        }
      }
      render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
      flush_callbacks.pop()();
    }
    update_scheduled = false;
    seen_callbacks.clear();
    set_current_component(saved_component);
  }
  function update($$) {
    if ($$.fragment !== null) {
      $$.update();
      run_all($$.before_update);
      const dirty = $$.dirty;
      $$.dirty = [-1];
      $$.fragment && $$.fragment.p($$.ctx, dirty);
      $$.after_update.forEach(add_render_callback);
    }
  }
  var outroing = /* @__PURE__ */ new Set();
  var outros;
  function group_outros() {
    outros = {
      r: 0,
      c: [],
      p: outros
    };
  }
  function check_outros() {
    if (!outros.r) {
      run_all(outros.c);
    }
    outros = outros.p;
  }
  function transition_in(block, local) {
    if (block && block.i) {
      outroing.delete(block);
      block.i(local);
    }
  }
  function transition_out(block, local, detach2, callback) {
    if (block && block.o) {
      if (outroing.has(block))
        return;
      outroing.add(block);
      outros.c.push(() => {
        outroing.delete(block);
        if (callback) {
          if (detach2)
            block.d(1);
          callback();
        }
      });
      block.o(local);
    } else if (callback) {
      callback();
    }
  }
  function handle_promise(promise, info) {
    const token = info.token = {};
    function update2(type3, index, key, value) {
      if (info.token !== token)
        return;
      info.resolved = value;
      let child_ctx = info.ctx;
      if (key !== void 0) {
        child_ctx = child_ctx.slice();
        child_ctx[key] = value;
      }
      const block = type3 && (info.current = type3)(child_ctx);
      let needs_flush = false;
      if (info.block) {
        if (info.blocks) {
          info.blocks.forEach((block2, i2) => {
            if (i2 !== index && block2) {
              group_outros();
              transition_out(block2, 1, 1, () => {
                if (info.blocks[i2] === block2) {
                  info.blocks[i2] = null;
                }
              });
              check_outros();
            }
          });
        } else {
          info.block.d(1);
        }
        block.c();
        transition_in(block, 1);
        block.m(info.mount(), info.anchor);
        needs_flush = true;
      }
      info.block = block;
      if (info.blocks)
        info.blocks[index] = block;
      if (needs_flush) {
        flush();
      }
    }
    if (is_promise(promise)) {
      const current_component2 = get_current_component();
      promise.then((value) => {
        set_current_component(current_component2);
        update2(info.then, 1, info.value, value);
        set_current_component(null);
      }, (error) => {
        set_current_component(current_component2);
        update2(info.catch, 2, info.error, error);
        set_current_component(null);
        if (!info.hasCatch) {
          throw error;
        }
      });
      if (info.current !== info.pending) {
        update2(info.pending, 0);
        return true;
      }
    } else {
      if (info.current !== info.then) {
        update2(info.then, 1, info.value, promise);
        return true;
      }
      info.resolved = promise;
    }
  }
  function update_await_block_branch(info, ctx, dirty) {
    const child_ctx = ctx.slice();
    const { resolved } = info;
    if (info.current === info.then) {
      child_ctx[info.value] = resolved;
    }
    if (info.current === info.catch) {
      child_ctx[info.error] = resolved;
    }
    info.block.p(child_ctx, dirty);
  }
  var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
  function mount_component(component, target, anchor, customElement) {
    const { fragment, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    if (!customElement) {
      add_render_callback(() => {
        const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
        if (component.$$.on_destroy) {
          component.$$.on_destroy.push(...new_on_destroy);
        } else {
          run_all(new_on_destroy);
        }
        component.$$.on_mount = [];
      });
    }
    after_update.forEach(add_render_callback);
  }
  function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
      run_all($$.on_destroy);
      $$.fragment && $$.fragment.d(detaching);
      $$.on_destroy = $$.fragment = null;
      $$.ctx = [];
    }
  }
  function make_dirty(component, i2) {
    if (component.$$.dirty[0] === -1) {
      dirty_components.push(component);
      schedule_update();
      component.$$.dirty.fill(0);
    }
    component.$$.dirty[i2 / 31 | 0] |= 1 << i2 % 31;
  }
  function init(component, options, instance2, create_fragment2, not_equal, props, append_styles, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
      fragment: null,
      ctx: [],
      props,
      update: noop,
      not_equal,
      bound: blank_object(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
      callbacks: blank_object(),
      dirty,
      skip_bound: false,
      root: options.target || parent_component.$$.root
    };
    append_styles && append_styles($$.root);
    let ready = false;
    $$.ctx = instance2 ? instance2(component, options.props || {}, (i2, ret, ...rest) => {
      const value = rest.length ? rest[0] : ret;
      if ($$.ctx && not_equal($$.ctx[i2], $$.ctx[i2] = value)) {
        if (!$$.skip_bound && $$.bound[i2])
          $$.bound[i2](value);
        if (ready)
          make_dirty(component, i2);
      }
      return ret;
    }) : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    $$.fragment = create_fragment2 ? create_fragment2($$.ctx) : false;
    if (options.target) {
      if (options.hydrate) {
        start_hydrating();
        const nodes = children(options.target);
        $$.fragment && $$.fragment.l(nodes);
        nodes.forEach(detach);
      } else {
        $$.fragment && $$.fragment.c();
      }
      if (options.intro)
        transition_in(component.$$.fragment);
      mount_component(component, options.target, options.anchor, options.customElement);
      end_hydrating();
      flush();
    }
    set_current_component(parent_component);
  }
  var SvelteElement;
  if (typeof HTMLElement === "function") {
    SvelteElement = class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        const { on_mount } = this.$$;
        this.$$.on_disconnect = on_mount.map(run).filter(is_function);
        for (const key in this.$$.slotted) {
          this.appendChild(this.$$.slotted[key]);
        }
      }
      attributeChangedCallback(attr2, _oldValue, newValue) {
        this[attr2] = newValue;
      }
      disconnectedCallback() {
        run_all(this.$$.on_disconnect);
      }
      $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
      }
      $on(type3, callback) {
        if (!is_function(callback)) {
          return noop;
        }
        const callbacks = this.$$.callbacks[type3] || (this.$$.callbacks[type3] = []);
        callbacks.push(callback);
        return () => {
          const index = callbacks.indexOf(callback);
          if (index !== -1)
            callbacks.splice(index, 1);
        };
      }
      $set($$props) {
        if (this.$$set && !is_empty($$props)) {
          this.$$.skip_bound = true;
          this.$$set($$props);
          this.$$.skip_bound = false;
        }
      }
    };
  }
  var SvelteComponent = class {
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
    $on(type3, callback) {
      if (!is_function(callback)) {
        return noop;
      }
      const callbacks = this.$$.callbacks[type3] || (this.$$.callbacks[type3] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1)
          callbacks.splice(index, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  };

  // node_modules/style-vendorizer/dist/esm/bundle.min.mjs
  var i = /* @__PURE__ */ new Map([["align-self", "-ms-grid-row-align"], ["color-adjust", "-webkit-print-color-adjust"], ["column-gap", "grid-column-gap"], ["forced-color-adjust", "-ms-high-contrast-adjust"], ["gap", "grid-gap"], ["grid-template-columns", "-ms-grid-columns"], ["grid-template-rows", "-ms-grid-rows"], ["justify-self", "-ms-grid-column-align"], ["margin-inline-end", "-webkit-margin-end"], ["margin-inline-start", "-webkit-margin-start"], ["mask-border", "-webkit-mask-box-image"], ["mask-border-outset", "-webkit-mask-box-image-outset"], ["mask-border-slice", "-webkit-mask-box-image-slice"], ["mask-border-source", "-webkit-mask-box-image-source"], ["mask-border-repeat", "-webkit-mask-box-image-repeat"], ["mask-border-width", "-webkit-mask-box-image-width"], ["overflow-wrap", "word-wrap"], ["padding-inline-end", "-webkit-padding-end"], ["padding-inline-start", "-webkit-padding-start"], ["print-color-adjust", "color-adjust"], ["row-gap", "grid-row-gap"], ["scroll-margin-bottom", "scroll-snap-margin-bottom"], ["scroll-margin-left", "scroll-snap-margin-left"], ["scroll-margin-right", "scroll-snap-margin-right"], ["scroll-margin-top", "scroll-snap-margin-top"], ["scroll-margin", "scroll-snap-margin"], ["text-combine-upright", "-ms-text-combine-horizontal"]]);
  function r(r2) {
    return i.get(r2);
  }
  function a(i2) {
    var r2 = /^(?:(text-(?:decoration$|e|or|si)|back(?:ground-cl|d|f)|box-d|mask(?:$|-[ispro]|-cl)|pr|hyphena|flex-d)|(tab-|column(?!-s)|text-align-l)|(ap)|u|hy)/i.exec(i2);
    return r2 ? r2[1] ? 1 : r2[2] ? 2 : r2[3] ? 3 : 5 : 0;
  }
  function t(i2, r2) {
    var a2 = /^(?:(pos)|(cli)|(background-i)|(flex(?:$|-b)|(?:max-|min-)?(?:block-s|inl|he|widt))|dis)/i.exec(i2);
    return a2 ? a2[1] ? /^sti/i.test(r2) ? 1 : 0 : a2[2] ? /^pat/i.test(r2) ? 1 : 0 : a2[3] ? /^image-/i.test(r2) ? 1 : 0 : a2[4] ? "-" === r2[3] ? 2 : 0 : /^(?:inline-)?grid$/i.test(r2) ? 4 : 0 : 0;
  }

  // node_modules/twind/twind.js
  var includes = (value, search) => !!~value.indexOf(search);
  var join = (parts, separator = "-") => parts.join(separator);
  var joinTruthy = (parts, separator) => join(parts.filter(Boolean), separator);
  var tail = (array, startIndex = 1) => array.slice(startIndex);
  var identity = (value) => value;
  var noop2 = () => {
  };
  var capitalize = (value) => value[0].toUpperCase() + tail(value);
  var hyphenate = (value) => value.replace(/[A-Z]/g, "-$&").toLowerCase();
  var evalThunk = (value, context) => {
    while (typeof value == "function") {
      value = value(context);
    }
    return value;
  };
  var ensureMaxSize = (map3, max) => {
    if (map3.size > max) {
      map3.delete(map3.keys().next().value);
    }
  };
  var isCSSProperty = (key, value) => !includes("@:&", key[0]) && (includes("rg", (typeof value)[5]) || Array.isArray(value));
  var merge = (target, source, context) => source ? Object.keys(source).reduce((target2, key) => {
    const value = evalThunk(source[key], context);
    if (isCSSProperty(key, value)) {
      target2[hyphenate(key)] = value;
    } else {
      target2[key] = key[0] == "@" && includes("figa", key[1]) ? (target2[key] || []).concat(value) : merge(target2[key] || {}, value, context);
    }
    return target2;
  }, target) : target;
  var escape = typeof CSS !== "undefined" && CSS.escape || ((className) => className.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
  var buildMediaQuery = (screen) => {
    if (!Array.isArray(screen)) {
      screen = [screen];
    }
    return "@media " + join(screen.map((screen2) => {
      if (typeof screen2 == "string") {
        screen2 = { min: screen2 };
      }
      return screen2.raw || join(Object.keys(screen2).map((feature) => `(${feature}-width:${screen2[feature]})`), " and ");
    }), ",");
  };
  var cyrb32 = (value) => {
    for (var h = 9, index = value.length; index--; ) {
      h = Math.imul(h ^ value.charCodeAt(index), 1597334677);
    }
    return "tw-" + ((h ^ h >>> 9) >>> 0).toString(36);
  };
  var sortedInsertionIndex = (array, element2) => {
    for (var low = 0, high = array.length; low < high; ) {
      const pivot = high + low >> 1;
      if (array[pivot] <= element2) {
        low = pivot + 1;
      } else {
        high = pivot;
      }
    }
    return high;
  };
  var groupings;
  var rules;
  var startGrouping = (value = "") => {
    groupings.push(value);
    return "";
  };
  var endGrouping = (isWhitespace) => {
    groupings.length = Math.max(groupings.lastIndexOf("") + ~~isWhitespace, 0);
  };
  var onlyPrefixes = (s) => s && !includes("!:", s[0]);
  var onlyVariants = (s) => s[0] == ":";
  var addRule = (directive2, negate) => {
    rules.push({
      v: groupings.filter(onlyVariants),
      d: directive2,
      n: negate,
      i: includes(groupings, "!"),
      $: ""
    });
  };
  var saveRule = (buffer) => {
    const negate = buffer[0] == "-";
    if (negate) {
      buffer = tail(buffer);
    }
    const prefix = join(groupings.filter(onlyPrefixes));
    addRule(buffer == "&" ? prefix : (prefix && prefix + "-") + buffer, negate);
    return "";
  };
  var parseString = (token, isVariant) => {
    let buffer = "";
    for (let char, dynamic = false, position2 = 0; char = token[position2++]; ) {
      if (dynamic || char == "[") {
        buffer += char;
        dynamic = char != "]";
        continue;
      }
      switch (char) {
        case ":":
          buffer = buffer && startGrouping(":" + (token[position2] == char ? token[position2++] : "") + buffer);
          break;
        case "(":
          buffer = buffer && startGrouping(buffer);
          startGrouping();
          break;
        case "!":
          startGrouping(char);
          break;
        case ")":
        case " ":
        case "	":
        case "\n":
        case "\r":
          buffer = buffer && saveRule(buffer);
          endGrouping(char !== ")");
          break;
        default:
          buffer += char;
      }
    }
    if (buffer) {
      if (isVariant) {
        startGrouping(":" + buffer);
      } else if (buffer.slice(-1) == "-") {
        startGrouping(buffer.slice(0, -1));
      } else {
        saveRule(buffer);
      }
    }
  };
  var parseGroupedToken = (token) => {
    startGrouping();
    parseToken(token);
    endGrouping();
  };
  var parseGroup = (key, token) => {
    if (token) {
      startGrouping();
      const isVariant = includes("tbu", (typeof token)[1]);
      parseString(key, isVariant);
      if (isVariant) {
        parseGroupedToken(token);
      }
      endGrouping();
    }
  };
  var parseToken = (token) => {
    switch (typeof token) {
      case "string":
        parseString(token);
        break;
      case "function":
        addRule(token);
        break;
      case "object":
        if (Array.isArray(token)) {
          token.forEach(parseGroupedToken);
        } else if (token) {
          Object.keys(token).forEach((key) => {
            parseGroup(key, token[key]);
          });
        }
    }
  };
  var staticsCaches = /* @__PURE__ */ new WeakMap();
  var buildStatics = (strings) => {
    let statics = staticsCaches.get(strings);
    if (!statics) {
      let slowModeIndex = NaN;
      let buffer = "";
      statics = strings.map((token, index) => {
        if (slowModeIndex !== slowModeIndex && (token.slice(-1) == "[" || includes(":-(", (strings[index + 1] || "")[0]))) {
          slowModeIndex = index;
        }
        if (index >= slowModeIndex) {
          return (interpolation) => {
            if (index == slowModeIndex) {
              buffer = "";
            }
            buffer += token;
            if (includes("rg", (typeof interpolation)[5])) {
              buffer += interpolation;
            } else if (interpolation) {
              parseString(buffer);
              buffer = "";
              parseToken(interpolation);
            }
            if (index == strings.length - 1) {
              parseString(buffer);
            }
          };
        }
        const staticRules = rules = [];
        parseString(token);
        const activeGroupings = [...groupings];
        rules = [];
        return (interpolation) => {
          rules.push(...staticRules);
          groupings = [...activeGroupings];
          if (interpolation) {
            parseToken(interpolation);
          }
        };
      });
      staticsCaches.set(strings, statics);
    }
    return statics;
  };
  var parse = (tokens) => {
    groupings = [];
    rules = [];
    if (Array.isArray(tokens[0]) && Array.isArray(tokens[0].raw)) {
      buildStatics(tokens[0]).forEach((apply2, index) => apply2(tokens[index + 1]));
    } else {
      parseToken(tokens);
    }
    return rules;
  };
  var isFunctionFree;
  var detectFunction = (key, value) => {
    if (typeof value == "function") {
      isFunctionFree = false;
    }
    return value;
  };
  var stringify = (data) => {
    isFunctionFree = true;
    const key = JSON.stringify(data, detectFunction);
    return isFunctionFree && key;
  };
  var cacheByFactory = /* @__PURE__ */ new WeakMap();
  var directive = (factory, data) => {
    const key = stringify(data);
    let directive2;
    if (key) {
      var cache = cacheByFactory.get(factory);
      if (!cache) {
        cacheByFactory.set(factory, cache = /* @__PURE__ */ new Map());
      }
      directive2 = cache.get(key);
    }
    if (!directive2) {
      directive2 = Object.defineProperty((params, context) => {
        context = Array.isArray(params) ? context : params;
        return evalThunk(factory(data, context), context);
      }, "toJSON", {
        value: () => key || data
      });
      if (cache) {
        cache.set(key, directive2);
        ensureMaxSize(cache, 1e4);
      }
    }
    return directive2;
  };
  var applyFactory = (tokens, { css }) => css(parse(tokens));
  var apply = (...tokens) => directive(applyFactory, tokens);
  var positions = (resolve) => (value, position2, prefix, suffix) => {
    if (value) {
      const properties = position2 && resolve(position2);
      if (properties && properties.length > 0) {
        return properties.reduce((declarations, property2) => {
          declarations[joinTruthy([prefix, property2, suffix])] = value;
          return declarations;
        }, {});
      }
    }
  };
  var corners = /* @__PURE__ */ positions((key) => ({
    t: ["top-left", "top-right"],
    r: ["top-right", "bottom-right"],
    b: ["bottom-left", "bottom-right"],
    l: ["bottom-left", "top-left"],
    tl: ["top-left"],
    tr: ["top-right"],
    bl: ["bottom-left"],
    br: ["bottom-right"]
  })[key]);
  var expandEdges = (key) => {
    const parts = ({ x: "lr", y: "tb" }[key] || key || "").split("").sort();
    for (let index = parts.length; index--; ) {
      if (!(parts[index] = {
        t: "top",
        r: "right",
        b: "bottom",
        l: "left"
      }[parts[index]]))
        return;
    }
    if (parts.length)
      return parts;
  };
  var edges = /* @__PURE__ */ positions(expandEdges);
  var stringifyVariant = (selector, variant) => selector + (variant[1] == ":" ? tail(variant, 2) + ":" : tail(variant)) + ":";
  var stringifyRule = (rule, directive2 = rule.d) => typeof directive2 == "function" ? "" : rule.v.reduce(stringifyVariant, "") + (rule.i ? "!" : "") + (rule.n ? "-" : "") + directive2;
  var _;
  var __;
  var $;
  var toColumnsOrRows = (x) => x == "cols" ? "columns" : "rows";
  var property = (property2) => (params, context, id) => ({
    [property2]: id + ((_ = join(params)) && "-" + _)
  });
  var propertyValue = (property2, separator) => (params, context, id) => (_ = join(params, separator)) && {
    [property2 || id]: _
  };
  var themeProperty = (section) => (params, { theme: theme2 }, id) => (_ = theme2(section || id, params)) && {
    [section || id]: _
  };
  var themePropertyFallback = (section, separator) => (params, { theme: theme2 }, id) => (_ = theme2(section || id, params, join(params, separator))) && {
    [section || id]: _
  };
  var alias = (handler, name) => (params, context) => handler(params, context, name);
  var display = property("display");
  var position = property("position");
  var textTransform = property("textTransform");
  var textDecoration = property("textDecoration");
  var fontStyle = property("fontStyle");
  var fontVariantNumeric = (key) => (params, context, id) => ({
    ["--tw-" + key]: id,
    fontVariantNumeric: "var(--tw-ordinal,/*!*/ /*!*/) var(--tw-slashed-zero,/*!*/ /*!*/) var(--tw-numeric-figure,/*!*/ /*!*/) var(--tw-numeric-spacing,/*!*/ /*!*/) var(--tw-numeric-fraction,/*!*/ /*!*/)"
  });
  var inset = (params, { theme: theme2 }, id) => (_ = theme2("inset", params)) && { [id]: _ };
  var opacityProperty = (params, theme2, id, section = id) => (_ = theme2(section + "Opacity", tail(params))) && {
    [`--tw-${id}-opacity`]: _
  };
  var parseColorComponent = (chars, factor) => Math.round(parseInt(chars, 16) * factor);
  var asRGBA = (color, opacityProperty2, opacityDefault) => {
    if (color && color[0] == "#" && (_ = (color.length - 1) / 3) && ($ = [17, 1, 0.062272][_ - 1])) {
      return `rgba(${parseColorComponent(color.substr(1, _), $)},${parseColorComponent(color.substr(1 + _, _), $)},${parseColorComponent(color.substr(1 + 2 * _, _), $)},${opacityProperty2 ? `var(--tw-${opacityProperty2}${opacityDefault ? "," + opacityDefault : ""})` : opacityDefault || 1})`;
    }
    return color;
  };
  var withOpacityFallback = (property2, kind, color) => color && typeof color == "string" ? (_ = asRGBA(color, kind + "-opacity")) && _ !== color ? {
    [`--tw-${kind}-opacity`]: "1",
    [property2]: [color, _]
  } : { [property2]: color } : void 0;
  var transparentTo = (color) => ($ = asRGBA(color, "", "0")) == _ ? "transparent" : $;
  var reversableEdge = (params, { theme: theme2 }, id, section, prefix, suffix) => (_ = { x: ["right", "left"], y: ["bottom", "top"] }[params[0]]) && ($ = `--tw-${id}-${params[0]}-reverse`) ? params[1] == "reverse" ? {
    [$]: "1"
  } : {
    [$]: "0",
    [joinTruthy([prefix, _[0], suffix])]: (__ = theme2(section, tail(params))) && `calc(${__} * var(${$}))`,
    [joinTruthy([prefix, _[1], suffix])]: __ && [__, `calc(${__} * calc(1 - var(${$})))`]
  } : void 0;
  var placeHelper = (property2, params) => params[0] && {
    [property2]: (includes("wun", (params[0] || "")[3]) ? "space-" : "") + params[0]
  };
  var contentPluginFor = (property2) => (params) => includes(["start", "end"], params[0]) ? { [property2]: "flex-" + params[0] } : placeHelper(property2, params);
  var gridPlugin = (kind) => (params, { theme: theme2 }) => {
    if (_ = theme2("grid" + capitalize(kind), params, "")) {
      return { ["grid-" + kind]: _ };
    }
    switch (params[0]) {
      case "span":
        return params[1] && {
          ["grid-" + kind]: `span ${params[1]} / span ${params[1]}`
        };
      case "start":
      case "end":
        return (_ = theme2("grid" + capitalize(kind) + capitalize(params[0]), tail(params), join(tail(params)))) && {
          [`grid-${kind}-${params[0]}`]: _
        };
    }
  };
  var border = (params, { theme: theme2 }, id) => {
    switch (params[0]) {
      case "solid":
      case "dashed":
      case "dotted":
      case "double":
      case "none":
        return propertyValue("borderStyle")(params);
      case "collapse":
      case "separate":
        return propertyValue("borderCollapse")(params);
      case "opacity":
        return opacityProperty(params, theme2, id);
    }
    return (_ = theme2(id + "Width", params, "")) ? { borderWidth: _ } : withOpacityFallback("borderColor", id, theme2(id + "Color", params));
  };
  var borderEdges = (params, context, id) => {
    var _a;
    const edges2 = (_a = expandEdges(params[0])) == null ? void 0 : _a.map(capitalize);
    if (edges2) {
      params = tail(params);
    }
    let rules2 = border(params, context, id);
    if (edges2 && rules2 && typeof rules2 === "object") {
      rules2 = Object.entries(rules2).reduce((newRules, [key, value]) => {
        if (key.startsWith("border")) {
          for (const edge of edges2) {
            newRules[key.slice(0, 6) + edge + key.slice(6)] = value;
          }
        } else {
          newRules[key] = value;
        }
        return newRules;
      }, {});
    }
    return rules2;
  };
  var transform = (gpu) => (gpu ? "translate3d(var(--tw-translate-x,0),var(--tw-translate-y,0),0)" : "translateX(var(--tw-translate-x,0)) translateY(var(--tw-translate-y,0))") + " rotate(var(--tw-rotate,0)) skewX(var(--tw-skew-x,0)) skewY(var(--tw-skew-y,0)) scaleX(var(--tw-scale-x,1)) scaleY(var(--tw-scale-y,1))";
  var transformXYFunction = (params, context, id) => params[0] && (_ = context.theme(id, params[1] || params[0])) && {
    [`--tw-${id}-x`]: params[0] !== "y" && _,
    [`--tw-${id}-y`]: params[0] !== "x" && _,
    transform: [`${id}${params[1] ? params[0].toUpperCase() : ""}(${_})`, transform()]
  };
  var edgesPluginFor = (key) => (params, context, id) => id[1] ? edges(context.theme(key, params), id[1], key) : themeProperty(key)(params, context, id);
  var padding = edgesPluginFor("padding");
  var margin = edgesPluginFor("margin");
  var minMax = (params, { theme: theme2 }, id) => (_ = { w: "width", h: "height" }[params[0]]) && {
    [_ = `${id}${capitalize(_)}`]: theme2(_, tail(params))
  };
  var filter = (params, { theme: theme2 }, id) => {
    const parts = id.split("-");
    const prefix = parts[0] == "backdrop" ? parts[0] + "-" : "";
    if (!prefix) {
      params.unshift(...parts);
    }
    if (params[0] == "filter") {
      const filters = [
        "blur",
        "brightness",
        "contrast",
        "grayscale",
        "hue-rotate",
        "invert",
        prefix && "opacity",
        "saturate",
        "sepia",
        !prefix && "drop-shadow"
      ].filter(Boolean);
      return params[1] == "none" ? { [prefix + "filter"]: "none" } : filters.reduce((css, key) => {
        css["--tw-" + prefix + key] = "var(--tw-empty,/*!*/ /*!*/)";
        return css;
      }, {
        [prefix + "filter"]: filters.map((key) => `var(--tw-${prefix}${key})`).join(" ")
      });
    }
    $ = params.shift();
    if (includes(["hue", "drop"], $))
      $ += capitalize(params.shift());
    return (_ = theme2(prefix ? "backdrop" + capitalize($) : $, params)) && {
      ["--tw-" + prefix + $]: (Array.isArray(_) ? _ : [_]).map((_4) => `${hyphenate($)}(${_4})`).join(" ")
    };
  };
  var corePlugins = {
    group: (params, { tag }, id) => tag(join([id, ...params])),
    hidden: alias(display, "none"),
    inline: display,
    block: display,
    contents: display,
    flow: display,
    table: (params, context, id) => includes(["auto", "fixed"], params[0]) ? { tableLayout: params[0] } : display(params, context, id),
    flex(params, context, id) {
      switch (params[0]) {
        case "row":
        case "col":
          return {
            flexDirection: join(params[0] == "col" ? ["column", ...tail(params)] : params)
          };
        case "nowrap":
        case "wrap":
          return { flexWrap: join(params) };
        case "grow":
        case "shrink":
          _ = context.theme("flex" + capitalize(params[0]), tail(params), params[1] || 1);
          return _ != null && {
            ["flex-" + params[0]]: "" + _
          };
      }
      return (_ = context.theme("flex", params, "")) ? { flex: _ } : display(params, context, id);
    },
    grid(params, context, id) {
      switch (params[0]) {
        case "cols":
        case "rows":
          return (_ = context.theme("gridTemplate" + capitalize(toColumnsOrRows(params[0])), tail(params), params.length == 2 && Number(params[1]) ? `repeat(${params[1]},minmax(0,1fr))` : join(tail(params)))) && {
            ["gridTemplate-" + toColumnsOrRows(params[0])]: _
          };
        case "flow":
          return params.length > 1 && {
            gridAutoFlow: join(params[1] == "col" ? ["column", ...tail(params, 2)] : tail(params), " ")
          };
      }
      return display(params, context, id);
    },
    auto: (params, { theme: theme2 }) => includes(["cols", "rows"], params[0]) && (_ = theme2("gridAuto" + capitalize(toColumnsOrRows(params[0])), tail(params), join(tail(params)))) && {
      ["gridAuto-" + toColumnsOrRows(params[0])]: _
    },
    static: position,
    fixed: position,
    absolute: position,
    relative: position,
    sticky: position,
    visible: { visibility: "visible" },
    invisible: { visibility: "hidden" },
    antialiased: {
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale"
    },
    "subpixel-antialiased": {
      WebkitFontSmoothing: "auto",
      MozOsxFontSmoothing: "auto"
    },
    truncate: {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis"
    },
    "sr-only": {
      position: "absolute",
      width: "1px",
      height: "1px",
      padding: "0",
      margin: "-1px",
      overflow: "hidden",
      whiteSpace: "nowrap",
      clip: "rect(0,0,0,0)",
      borderWidth: "0"
    },
    "not-sr-only": {
      position: "static",
      width: "auto",
      height: "auto",
      padding: "0",
      margin: "0",
      overflow: "visible",
      whiteSpace: "normal",
      clip: "auto"
    },
    resize: (params) => ({
      resize: { x: "horizontal", y: "vertical" }[params[0]] || params[0] || "both"
    }),
    box: (params) => params[0] && { boxSizing: params[0] + "-box" },
    appearance: propertyValue(),
    cursor: themePropertyFallback(),
    float: propertyValue(),
    clear: propertyValue(),
    decoration: propertyValue("boxDecorationBreak"),
    isolate: { isolation: "isolate" },
    isolation: propertyValue(),
    "mix-blend": propertyValue("mixBlendMode"),
    top: inset,
    right: inset,
    bottom: inset,
    left: inset,
    inset: (params, { theme: theme2 }) => (_ = expandEdges(params[0])) ? edges(theme2("inset", tail(params)), params[0]) : (_ = theme2("inset", params)) && {
      top: _,
      right: _,
      bottom: _,
      left: _
    },
    underline: textDecoration,
    "line-through": textDecoration,
    "no-underline": alias(textDecoration, "none"),
    "text-underline": alias(textDecoration, "underline"),
    "text-no-underline": alias(textDecoration, "none"),
    "text-line-through": alias(textDecoration, "line-through"),
    uppercase: textTransform,
    lowercase: textTransform,
    capitalize: textTransform,
    "normal-case": alias(textTransform, "none"),
    "text-normal-case": alias(textTransform, "none"),
    italic: fontStyle,
    "not-italic": alias(fontStyle, "normal"),
    "font-italic": alias(fontStyle, "italic"),
    "font-not-italic": alias(fontStyle, "normal"),
    font: (params, context, id) => (_ = context.theme("fontFamily", params, "")) ? { fontFamily: _ } : themeProperty("fontWeight")(params, context, id),
    items: (params) => params[0] && {
      alignItems: includes(["start", "end"], params[0]) ? "flex-" + params[0] : join(params)
    },
    "justify-self": propertyValue(),
    "justify-items": propertyValue(),
    justify: contentPluginFor("justifyContent"),
    content: contentPluginFor("alignContent"),
    self: contentPluginFor("alignSelf"),
    place: (params) => params[0] && placeHelper("place-" + params[0], tail(params)),
    overscroll: (params) => params[0] && {
      ["overscrollBehavior" + (params[1] ? "-" + params[0] : "")]: params[1] || params[0]
    },
    col: gridPlugin("column"),
    row: gridPlugin("row"),
    duration: themeProperty("transitionDuration"),
    delay: themeProperty("transitionDelay"),
    tracking: themeProperty("letterSpacing"),
    leading: themeProperty("lineHeight"),
    z: themeProperty("zIndex"),
    opacity: themeProperty(),
    ease: themeProperty("transitionTimingFunction"),
    p: padding,
    py: padding,
    px: padding,
    pt: padding,
    pr: padding,
    pb: padding,
    pl: padding,
    m: margin,
    my: margin,
    mx: margin,
    mt: margin,
    mr: margin,
    mb: margin,
    ml: margin,
    w: themeProperty("width"),
    h: themeProperty("height"),
    min: minMax,
    max: minMax,
    fill: themeProperty(),
    order: themeProperty(),
    origin: themePropertyFallback("transformOrigin", " "),
    select: propertyValue("userSelect"),
    "pointer-events": propertyValue(),
    align: propertyValue("verticalAlign"),
    whitespace: propertyValue("whiteSpace"),
    "normal-nums": { fontVariantNumeric: "normal" },
    ordinal: fontVariantNumeric("ordinal"),
    "slashed-zero": fontVariantNumeric("slashed-zero"),
    "lining-nums": fontVariantNumeric("numeric-figure"),
    "oldstyle-nums": fontVariantNumeric("numeric-figure"),
    "proportional-nums": fontVariantNumeric("numeric-spacing"),
    "tabular-nums": fontVariantNumeric("numeric-spacing"),
    "diagonal-fractions": fontVariantNumeric("numeric-fraction"),
    "stacked-fractions": fontVariantNumeric("numeric-fraction"),
    overflow: (params, context, id) => includes(["ellipsis", "clip"], params[0]) ? propertyValue("textOverflow")(params) : params[1] ? { ["overflow-" + params[0]]: params[1] } : propertyValue()(params, context, id),
    transform: (params) => params[0] == "none" ? { transform: "none" } : {
      "--tw-translate-x": "0",
      "--tw-translate-y": "0",
      "--tw-rotate": "0",
      "--tw-skew-x": "0",
      "--tw-skew-y": "0",
      "--tw-scale-x": "1",
      "--tw-scale-y": "1",
      transform: transform(params[0] == "gpu")
    },
    rotate: (params, { theme: theme2 }) => (_ = theme2("rotate", params)) && {
      "--tw-rotate": _,
      transform: [`rotate(${_})`, transform()]
    },
    scale: transformXYFunction,
    translate: transformXYFunction,
    skew: transformXYFunction,
    gap: (params, context, id) => (_ = { x: "column", y: "row" }[params[0]]) ? { [_ + "Gap"]: context.theme("gap", tail(params)) } : themeProperty("gap")(params, context, id),
    stroke: (params, context, id) => (_ = context.theme("stroke", params, "")) ? { stroke: _ } : themeProperty("strokeWidth")(params, context, id),
    outline: (params, { theme: theme2 }) => (_ = theme2("outline", params)) && {
      outline: _[0],
      outlineOffset: _[1]
    },
    "break-normal": {
      wordBreak: "normal",
      overflowWrap: "normal"
    },
    "break-words": { overflowWrap: "break-word" },
    "break-all": { wordBreak: "break-all" },
    text(params, { theme: theme2 }, id) {
      switch (params[0]) {
        case "left":
        case "center":
        case "right":
        case "justify":
          return { textAlign: params[0] };
        case "uppercase":
        case "lowercase":
        case "capitalize":
          return textTransform([], _, params[0]);
        case "opacity":
          return opacityProperty(params, theme2, id);
      }
      const fontSize = theme2("fontSize", params, "");
      if (fontSize) {
        return typeof fontSize == "string" ? { fontSize } : {
          fontSize: fontSize[0],
          ...typeof fontSize[1] == "string" ? { lineHeight: fontSize[1] } : fontSize[1]
        };
      }
      return withOpacityFallback("color", "text", theme2("textColor", params));
    },
    bg(params, { theme: theme2 }, id) {
      switch (params[0]) {
        case "fixed":
        case "local":
        case "scroll":
          return propertyValue("backgroundAttachment", ",")(params);
        case "bottom":
        case "center":
        case "left":
        case "right":
        case "top":
          return propertyValue("backgroundPosition", " ")(params);
        case "no":
          return params[1] == "repeat" && propertyValue("backgroundRepeat")(params);
        case "repeat":
          return includes("xy", params[1]) ? propertyValue("backgroundRepeat")(params) : { backgroundRepeat: params[1] || params[0] };
        case "opacity":
          return opacityProperty(params, theme2, id, "background");
        case "clip":
        case "origin":
          return params[1] && {
            ["background-" + params[0]]: params[1] + (params[1] == "text" ? "" : "-box")
          };
        case "blend":
          return propertyValue("background-blend-mode")(tail(params));
        case "gradient":
          if (params[1] == "to" && (_ = expandEdges(params[2]))) {
            return {
              backgroundImage: `linear-gradient(to ${join(_, " ")},var(--tw-gradient-stops))`
            };
          }
      }
      return (_ = theme2("backgroundPosition", params, "")) ? { backgroundPosition: _ } : (_ = theme2("backgroundSize", params, "")) ? { backgroundSize: _ } : (_ = theme2("backgroundImage", params, "")) ? { backgroundImage: _ } : withOpacityFallback("backgroundColor", "bg", theme2("backgroundColor", params));
    },
    from: (params, { theme: theme2 }) => (_ = theme2("gradientColorStops", params)) && {
      "--tw-gradient-from": _,
      "--tw-gradient-stops": `var(--tw-gradient-from),var(--tw-gradient-to,${transparentTo(_)})`
    },
    via: (params, { theme: theme2 }) => (_ = theme2("gradientColorStops", params)) && {
      "--tw-gradient-stops": `var(--tw-gradient-from),${_},var(--tw-gradient-to,${transparentTo(_)})`
    },
    to: (params, { theme: theme2 }) => (_ = theme2("gradientColorStops", params)) && {
      "--tw-gradient-to": _
    },
    border: borderEdges,
    divide: (params, context, id) => (_ = reversableEdge(params, context, id, "divideWidth", "border", "width") || border(params, context, id)) && {
      "&>:not([hidden])~:not([hidden])": _
    },
    space: (params, context, id) => (_ = reversableEdge(params, context, id, "space", "margin")) && {
      "&>:not([hidden])~:not([hidden])": _
    },
    placeholder: (params, { theme: theme2 }, id) => (_ = params[0] == "opacity" ? opacityProperty(params, theme2, id) : withOpacityFallback("color", "placeholder", theme2("placeholderColor", params))) && {
      "&::placeholder": _
    },
    shadow: (params, { theme: theme2 }) => (_ = theme2("boxShadow", params)) && {
      ":global": {
        "*": {
          "--tw-shadow": "0 0 transparent"
        }
      },
      "--tw-shadow": _ == "none" ? "0 0 transparent" : _,
      boxShadow: [
        _,
        `var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)`
      ]
    },
    animate: (params, { theme: theme2, tag }) => {
      if ($ = theme2("animation", params)) {
        const parts = $.split(" ");
        if ((_ = theme2("keyframes", parts[0], __ = {})) !== __) {
          return ($ = tag(parts[0])) && {
            animation: $ + " " + join(tail(parts), " "),
            ["@keyframes " + $]: _
          };
        }
        return { animation: $ };
      }
    },
    ring(params, { theme: theme2 }, id) {
      switch (params[0]) {
        case "inset":
          return { "--tw-ring-inset": "inset" };
        case "opacity":
          return opacityProperty(params, theme2, id);
        case "offset":
          return (_ = theme2("ringOffsetWidth", tail(params), "")) ? {
            "--tw-ring-offset-width": _
          } : {
            "--tw-ring-offset-color": theme2("ringOffsetColor", tail(params))
          };
      }
      return (_ = theme2("ringWidth", params, "")) ? {
        "--tw-ring-offset-shadow": `var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)`,
        "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${_} + var(--tw-ring-offset-width)) var(--tw-ring-color)`,
        boxShadow: `var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 transparent)`,
        ":global": {
          "*": {
            "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)",
            "--tw-ring-offset-width": theme2("ringOffsetWidth", "", "0px"),
            "--tw-ring-offset-color": theme2("ringOffsetColor", "", "#fff"),
            "--tw-ring-color": asRGBA(theme2("ringColor", "", "#93c5fd"), "ring-opacity", theme2("ringOpacity", "", "0.5")),
            "--tw-ring-offset-shadow": "0 0 transparent",
            "--tw-ring-shadow": "0 0 transparent"
          }
        }
      } : {
        "--tw-ring-opacity": "1",
        "--tw-ring-color": asRGBA(theme2("ringColor", params), "ring-opacity")
      };
    },
    object: (params, context, id) => includes(["contain", "cover", "fill", "none", "scale-down"], join(params)) ? { objectFit: join(params) } : themePropertyFallback("objectPosition", " ")(params, context, id),
    list: (params, context, id) => join(params) == "item" ? display(params, context, id) : includes(["inside", "outside"], join(params)) ? { listStylePosition: params[0] } : themePropertyFallback("listStyleType")(params, context, id),
    rounded: (params, context, id) => corners(context.theme("borderRadius", tail(params), ""), params[0], "border", "radius") || themeProperty("borderRadius")(params, context, id),
    "transition-none": { transitionProperty: "none" },
    transition: (params, { theme: theme2 }) => ({
      transitionProperty: theme2("transitionProperty", params),
      transitionTimingFunction: theme2("transitionTimingFunction", ""),
      transitionDuration: theme2("transitionDuration", "")
    }),
    container: (params, { theme: theme2 }) => {
      const { screens = theme2("screens"), center, padding: padding2 } = theme2("container");
      const paddingFor = (screen) => (_ = padding2 && (typeof padding2 == "string" ? padding2 : padding2[screen] || padding2.DEFAULT)) ? {
        paddingRight: _,
        paddingLeft: _
      } : {};
      return Object.keys(screens).reduce((rules2, screen) => {
        if (($ = screens[screen]) && typeof $ == "string") {
          rules2[buildMediaQuery($)] = {
            "&": {
              "max-width": $,
              ...paddingFor(screen)
            }
          };
        }
        return rules2;
      }, {
        width: "100%",
        ...center ? { marginRight: "auto", marginLeft: "auto" } : {},
        ...paddingFor("xs")
      });
    },
    filter,
    blur: filter,
    brightness: filter,
    contrast: filter,
    grayscale: filter,
    "hue-rotate": filter,
    invert: filter,
    saturate: filter,
    sepia: filter,
    "drop-shadow": filter,
    backdrop: filter
  };
  var createPreflight = (theme2) => ({
    ":root": { tabSize: 4 },
    "body,blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre,fieldset,ol,ul": { margin: "0" },
    button: { backgroundColor: "transparent", backgroundImage: "none" },
    'button,[type="button"],[type="reset"],[type="submit"]': { WebkitAppearance: "button" },
    "button:focus": { outline: ["1px dotted", "5px auto -webkit-focus-ring-color"] },
    "fieldset,ol,ul,legend": { padding: "0" },
    "ol,ul": { listStyle: "none" },
    html: {
      lineHeight: "1.5",
      WebkitTextSizeAdjust: "100%",
      fontFamily: theme2("fontFamily.sans", "ui-sans-serif,system-ui,sans-serif")
    },
    body: { fontFamily: "inherit", lineHeight: "inherit" },
    "*,::before,::after": {
      boxSizing: "border-box",
      border: `0 solid ${theme2("borderColor.DEFAULT", "currentColor")}`
    },
    hr: { height: "0", color: "inherit", borderTopWidth: "1px" },
    img: { borderStyle: "solid" },
    textarea: { resize: "vertical" },
    "input::placeholder,textarea::placeholder": {
      opacity: "1",
      color: theme2("placeholderColor.DEFAULT", theme2("colors.gray.400", "#a1a1aa"))
    },
    'button,[role="button"]': { cursor: "pointer" },
    table: { textIndent: "0", borderColor: "inherit", borderCollapse: "collapse" },
    "h1,h2,h3,h4,h5,h6": { fontSize: "inherit", fontWeight: "inherit" },
    a: { color: "inherit", textDecoration: "inherit" },
    "button,input,optgroup,select,textarea": {
      fontFamily: "inherit",
      fontSize: "100%",
      margin: "0",
      padding: "0",
      lineHeight: "inherit",
      color: "inherit"
    },
    "button,select": { textTransform: "none" },
    "::-moz-focus-inner": { borderStyle: "none", padding: "0" },
    ":-moz-focusring": { outline: "1px dotted ButtonText" },
    ":-moz-ui-invalid": { boxShadow: "none" },
    progress: { verticalAlign: "baseline" },
    "::-webkit-inner-spin-button,::-webkit-outer-spin-button": { height: "auto" },
    '[type="search"]': { WebkitAppearance: "textfield", outlineOffset: "-2px" },
    "::-webkit-search-decoration": { WebkitAppearance: "none" },
    "::-webkit-file-upload-button": { WebkitAppearance: "button", font: "inherit" },
    summary: { display: "list-item" },
    "abbr[title]": { textDecoration: "underline dotted" },
    "b,strong": { fontWeight: "bolder" },
    "pre,code,kbd,samp": {
      fontFamily: theme2("fontFamily", "mono", "ui-monospace,monospace"),
      fontSize: "1em"
    },
    "sub,sup": { fontSize: "75%", lineHeight: "0", position: "relative", verticalAlign: "baseline" },
    sub: { bottom: "-0.25em" },
    sup: { top: "-0.5em" },
    "img,svg,video,canvas,audio,iframe,embed,object": { display: "block", verticalAlign: "middle" },
    "img,video": { maxWidth: "100%", height: "auto" }
  });
  var coreVariants = {
    dark: "@media (prefers-color-scheme:dark)",
    sticky: "@supports ((position: -webkit-sticky) or (position:sticky))",
    "motion-reduce": "@media (prefers-reduced-motion:reduce)",
    "motion-safe": "@media (prefers-reduced-motion:no-preference)",
    first: "&:first-child",
    last: "&:last-child",
    even: "&:nth-child(2n)",
    odd: "&:nth-child(odd)",
    children: "&>*",
    siblings: "&~*",
    sibling: "&+*",
    override: "&&"
  };
  var STYLE_ELEMENT_ID = "__twind";
  var getStyleElement = (nonce) => {
    let element2 = self[STYLE_ELEMENT_ID];
    if (!element2) {
      element2 = document.head.appendChild(document.createElement("style"));
      element2.id = STYLE_ELEMENT_ID;
      nonce && (element2.nonce = nonce);
      element2.appendChild(document.createTextNode(""));
    }
    return element2;
  };
  var cssomSheet = ({
    nonce,
    target = getStyleElement(nonce).sheet
  } = {}) => {
    const offset = target.cssRules.length;
    return {
      target,
      insert: (rule, index) => target.insertRule(rule, offset + index)
    };
  };
  var voidSheet = () => ({
    target: null,
    insert: noop2
  });
  var mode = (report) => ({
    unknown(section, key = [], optional, context) {
      if (!optional) {
        this.report({ id: "UNKNOWN_THEME_VALUE", key: section + "." + join(key) }, context);
      }
    },
    report({ id, ...info }) {
      return report(`[${id}] ${JSON.stringify(info)}`);
    }
  });
  var warn = /* @__PURE__ */ mode((message) => console.warn(message));
  var strict = /* @__PURE__ */ mode((message) => {
    throw new Error(message);
  });
  var silent = /* @__PURE__ */ mode(noop2);
  var noprefix = (property2, value, important) => `${property2}:${value}${important ? " !important" : ""}`;
  var autoprefix = (property2, value, important) => {
    let cssText = "";
    const propertyAlias = r(property2);
    if (propertyAlias)
      cssText += `${noprefix(propertyAlias, value, important)};`;
    let flags = a(property2);
    if (flags & 1)
      cssText += `-webkit-${noprefix(property2, value, important)};`;
    if (flags & 2)
      cssText += `-moz-${noprefix(property2, value, important)};`;
    if (flags & 4)
      cssText += `-ms-${noprefix(property2, value, important)};`;
    flags = t(property2, value);
    if (flags & 1)
      cssText += `${noprefix(property2, `-webkit-${value}`, important)};`;
    if (flags & 2)
      cssText += `${noprefix(property2, `-moz-${value}`, important)};`;
    if (flags & 4)
      cssText += `${noprefix(property2, `-ms-${value}`, important)};`;
    cssText += noprefix(property2, value, important);
    return cssText;
  };
  var ratios = (start, end) => {
    const result = {};
    do {
      for (let dividend = 1; dividend < start; dividend++) {
        result[`${dividend}/${start}`] = Number((dividend / start * 100).toFixed(6)) + "%";
      }
    } while (++start <= end);
    return result;
  };
  var exponential = (stop, unit, start = 0) => {
    const result = {};
    for (; start <= stop; start = start * 2 || 1) {
      result[start] = start + unit;
    }
    return result;
  };
  var linear = (stop, unit = "", divideBy = 1, start = 0, step = 1, result = {}) => {
    for (; start <= stop; start += step) {
      result[start] = start / divideBy + unit;
    }
    return result;
  };
  var alias2 = (section) => (theme2) => theme2(section);
  var defaultTheme = {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827"
      },
      red: {
        50: "#fef2f2",
        100: "#fee2e2",
        200: "#fecaca",
        300: "#fca5a5",
        400: "#f87171",
        500: "#ef4444",
        600: "#dc2626",
        700: "#b91c1c",
        800: "#991b1b",
        900: "#7f1d1d"
      },
      yellow: {
        50: "#fffbeb",
        100: "#fef3c7",
        200: "#fde68a",
        300: "#fcd34d",
        400: "#fbbf24",
        500: "#f59e0b",
        600: "#d97706",
        700: "#b45309",
        800: "#92400e",
        900: "#78350f"
      },
      green: {
        50: "#ecfdf5",
        100: "#d1fae5",
        200: "#a7f3d0",
        300: "#6ee7b7",
        400: "#34d399",
        500: "#10b981",
        600: "#059669",
        700: "#047857",
        800: "#065f46",
        900: "#064e3b"
      },
      blue: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a"
      },
      indigo: {
        50: "#eef2ff",
        100: "#e0e7ff",
        200: "#c7d2fe",
        300: "#a5b4fc",
        400: "#818cf8",
        500: "#6366f1",
        600: "#4f46e5",
        700: "#4338ca",
        800: "#3730a3",
        900: "#312e81"
      },
      purple: {
        50: "#f5f3ff",
        100: "#ede9fe",
        200: "#ddd6fe",
        300: "#c4b5fd",
        400: "#a78bfa",
        500: "#8b5cf6",
        600: "#7c3aed",
        700: "#6d28d9",
        800: "#5b21b6",
        900: "#4c1d95"
      },
      pink: {
        50: "#fdf2f8",
        100: "#fce7f3",
        200: "#fbcfe8",
        300: "#f9a8d4",
        400: "#f472b6",
        500: "#ec4899",
        600: "#db2777",
        700: "#be185d",
        800: "#9d174d",
        900: "#831843"
      }
    },
    spacing: {
      px: "1px",
      0: "0px",
      .../* @__PURE__ */ linear(4, "rem", 4, 0.5, 0.5),
      .../* @__PURE__ */ linear(12, "rem", 4, 5),
      14: "3.5rem",
      .../* @__PURE__ */ linear(64, "rem", 4, 16, 4),
      72: "18rem",
      80: "20rem",
      96: "24rem"
    },
    durations: {
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1e3: "1000ms"
    },
    animation: {
      none: "none",
      spin: "spin 1s linear infinite",
      ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      bounce: "bounce 1s infinite"
    },
    backdropBlur: /* @__PURE__ */ alias2("blur"),
    backdropBrightness: /* @__PURE__ */ alias2("brightness"),
    backdropContrast: /* @__PURE__ */ alias2("contrast"),
    backdropGrayscale: /* @__PURE__ */ alias2("grayscale"),
    backdropHueRotate: /* @__PURE__ */ alias2("hueRotate"),
    backdropInvert: /* @__PURE__ */ alias2("invert"),
    backdropOpacity: /* @__PURE__ */ alias2("opacity"),
    backdropSaturate: /* @__PURE__ */ alias2("saturate"),
    backdropSepia: /* @__PURE__ */ alias2("sepia"),
    backgroundColor: /* @__PURE__ */ alias2("colors"),
    backgroundImage: {
      none: "none"
    },
    backgroundOpacity: /* @__PURE__ */ alias2("opacity"),
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain"
    },
    blur: {
      0: "0",
      sm: "4px",
      DEFAULT: "8px",
      md: "12px",
      lg: "16px",
      xl: "24px",
      "2xl": "40px",
      "3xl": "64px"
    },
    brightness: {
      .../* @__PURE__ */ linear(200, "", 100, 0, 50),
      .../* @__PURE__ */ linear(110, "", 100, 90, 5),
      75: "0.75",
      125: "1.25"
    },
    borderColor: (theme2) => ({
      ...theme2("colors"),
      DEFAULT: theme2("colors.gray.200", "currentColor")
    }),
    borderOpacity: /* @__PURE__ */ alias2("opacity"),
    borderRadius: {
      none: "0px",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      "1/2": "50%",
      full: "9999px"
    },
    borderWidth: {
      DEFAULT: "1px",
      .../* @__PURE__ */ exponential(8, "px")
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0,0,0,0.05)",
      DEFAULT: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06)",
      md: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
      lg: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)",
      xl: "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
      "2xl": "0 25px 50px -12px rgba(0,0,0,0.25)",
      inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
      none: "none"
    },
    contrast: {
      .../* @__PURE__ */ linear(200, "", 100, 0, 50),
      75: "0.75",
      125: "1.25"
    },
    divideColor: /* @__PURE__ */ alias2("borderColor"),
    divideOpacity: /* @__PURE__ */ alias2("borderOpacity"),
    divideWidth: /* @__PURE__ */ alias2("borderWidth"),
    dropShadow: {
      sm: "0 1px 1px rgba(0,0,0,0.05)",
      DEFAULT: ["0 1px 2px rgba(0,0,0,0.1)", "0 1px 1px rgba(0,0,0,0.06)"],
      md: ["0 4px 3px rgba(0,0,0,0.07)", "0 2px 2px rgba(0,0,0,0.06)"],
      lg: ["0 10px 8px rgba(0,0,0,0.04)", "0 4px 3px rgba(0,0,0,0.1)"],
      xl: ["0 20px 13px rgba(0,0,0,0.03)", "0 8px 5px rgba(0,0,0,0.08)"],
      "2xl": "0 25px 25px rgba(0,0,0,0.15)",
      none: "0 0 #0000"
    },
    fill: { current: "currentColor" },
    grayscale: {
      0: "0",
      DEFAULT: "100%"
    },
    hueRotate: {
      0: "0deg",
      15: "15deg",
      30: "30deg",
      60: "60deg",
      90: "90deg",
      180: "180deg"
    },
    invert: {
      0: "0",
      DEFAULT: "100%"
    },
    flex: {
      1: "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none"
    },
    fontFamily: {
      sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","),
      serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","),
      mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",")
    },
    fontSize: {
      xs: ["0.75rem", "1rem"],
      sm: ["0.875rem", "1.25rem"],
      base: ["1rem", "1.5rem"],
      lg: ["1.125rem", "1.75rem"],
      xl: ["1.25rem", "1.75rem"],
      "2xl": ["1.5rem", "2rem"],
      "3xl": ["1.875rem", "2.25rem"],
      "4xl": ["2.25rem", "2.5rem"],
      "5xl": ["3rem", "1"],
      "6xl": ["3.75rem", "1"],
      "7xl": ["4.5rem", "1"],
      "8xl": ["6rem", "1"],
      "9xl": ["8rem", "1"]
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900"
    },
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridAutoColumns: {
      min: "min-content",
      max: "max-content",
      fr: "minmax(0,1fr)"
    },
    gridAutoRows: {
      min: "min-content",
      max: "max-content",
      fr: "minmax(0,1fr)"
    },
    gridColumn: {
      auto: "auto",
      "span-full": "1 / -1"
    },
    gridRow: {
      auto: "auto",
      "span-full": "1 / -1"
    },
    gap: /* @__PURE__ */ alias2("spacing"),
    gradientColorStops: /* @__PURE__ */ alias2("colors"),
    height: (theme2) => ({
      auto: "auto",
      ...theme2("spacing"),
      ...ratios(2, 6),
      full: "100%",
      screen: "100vh"
    }),
    inset: (theme2) => ({
      auto: "auto",
      ...theme2("spacing"),
      ...ratios(2, 4),
      full: "100%"
    }),
    keyframes: {
      spin: {
        from: {
          transform: "rotate(0deg)"
        },
        to: {
          transform: "rotate(360deg)"
        }
      },
      ping: {
        "0%": {
          transform: "scale(1)",
          opacity: "1"
        },
        "75%,100%": {
          transform: "scale(2)",
          opacity: "0"
        }
      },
      pulse: {
        "0%,100%": {
          opacity: "1"
        },
        "50%": {
          opacity: ".5"
        }
      },
      bounce: {
        "0%, 100%": {
          transform: "translateY(-25%)",
          animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
        },
        "50%": {
          transform: "none",
          animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
        }
      }
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em"
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      .../* @__PURE__ */ linear(10, "rem", 4, 3)
    },
    margin: (theme2) => ({
      auto: "auto",
      ...theme2("spacing")
    }),
    maxHeight: (theme2) => ({
      ...theme2("spacing"),
      full: "100%",
      screen: "100vh"
    }),
    maxWidth: (theme2, { breakpoints }) => ({
      none: "none",
      0: "0rem",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      full: "100%",
      min: "min-content",
      max: "max-content",
      prose: "65ch",
      ...breakpoints(theme2("screens"))
    }),
    minHeight: {
      0: "0px",
      full: "100%",
      screen: "100vh"
    },
    minWidth: {
      0: "0px",
      full: "100%",
      min: "min-content",
      max: "max-content"
    },
    opacity: {
      .../* @__PURE__ */ linear(100, "", 100, 0, 10),
      5: "0.05",
      25: "0.25",
      75: "0.75",
      95: "0.95"
    },
    order: {
      first: "-9999",
      last: "9999",
      none: "0",
      .../* @__PURE__ */ linear(12, "", 1, 1)
    },
    outline: {
      none: ["2px solid transparent", "2px"],
      white: ["2px dotted white", "2px"],
      black: ["2px dotted black", "2px"]
    },
    padding: /* @__PURE__ */ alias2("spacing"),
    placeholderColor: /* @__PURE__ */ alias2("colors"),
    placeholderOpacity: /* @__PURE__ */ alias2("opacity"),
    ringColor: (theme2) => ({
      DEFAULT: theme2("colors.blue.500", "#3b82f6"),
      ...theme2("colors")
    }),
    ringOffsetColor: /* @__PURE__ */ alias2("colors"),
    ringOffsetWidth: /* @__PURE__ */ exponential(8, "px"),
    ringOpacity: (theme2) => ({
      DEFAULT: "0.5",
      ...theme2("opacity")
    }),
    ringWidth: {
      DEFAULT: "3px",
      .../* @__PURE__ */ exponential(8, "px")
    },
    rotate: {
      .../* @__PURE__ */ exponential(2, "deg"),
      .../* @__PURE__ */ exponential(12, "deg", 3),
      .../* @__PURE__ */ exponential(180, "deg", 45)
    },
    saturate: /* @__PURE__ */ linear(200, "", 100, 0, 50),
    scale: {
      .../* @__PURE__ */ linear(150, "", 100, 0, 50),
      .../* @__PURE__ */ linear(110, "", 100, 90, 5),
      75: "0.75",
      125: "1.25"
    },
    sepia: {
      0: "0",
      DEFAULT: "100%"
    },
    skew: {
      .../* @__PURE__ */ exponential(2, "deg"),
      .../* @__PURE__ */ exponential(12, "deg", 3)
    },
    space: /* @__PURE__ */ alias2("spacing"),
    stroke: {
      current: "currentColor"
    },
    strokeWidth: /* @__PURE__ */ linear(2),
    textColor: /* @__PURE__ */ alias2("colors"),
    textOpacity: /* @__PURE__ */ alias2("opacity"),
    transitionDuration: (theme2) => ({
      DEFAULT: "150ms",
      ...theme2("durations")
    }),
    transitionDelay: /* @__PURE__ */ alias2("durations"),
    transitionProperty: {
      none: "none",
      all: "all",
      DEFAULT: "background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter",
      colors: "background-color,border-color,color,fill,stroke",
      opacity: "opacity",
      shadow: "box-shadow",
      transform: "transform"
    },
    transitionTimingFunction: {
      DEFAULT: "cubic-bezier(0.4,0,0.2,1)",
      linear: "linear",
      in: "cubic-bezier(0.4,0,1,1)",
      out: "cubic-bezier(0,0,0.2,1)",
      "in-out": "cubic-bezier(0.4,0,0.2,1)"
    },
    translate: (theme2) => ({
      ...theme2("spacing"),
      ...ratios(2, 4),
      full: "100%"
    }),
    width: (theme2) => ({
      auto: "auto",
      ...theme2("spacing"),
      ...ratios(2, 6),
      ...ratios(12, 12),
      screen: "100vw",
      full: "100%",
      min: "min-content",
      max: "max-content"
    }),
    zIndex: {
      auto: "auto",
      .../* @__PURE__ */ linear(50, "", 1, 0, 10)
    }
  };
  var flattenColorPalette = (colors, target = {}, prefix = []) => {
    Object.keys(colors).forEach((property2) => {
      const value = colors[property2];
      if (property2 == "DEFAULT") {
        target[join(prefix)] = value;
        target[join(prefix, ".")] = value;
      }
      const key = [...prefix, property2];
      target[join(key)] = value;
      target[join(key, ".")] = value;
      if (value && typeof value == "object") {
        flattenColorPalette(value, target, key);
      }
    }, target);
    return target;
  };
  var resolveContext = {
    negative: () => ({}),
    breakpoints: (screens) => Object.keys(screens).filter((key) => typeof screens[key] == "string").reduce((target, key) => {
      target["screen-" + key] = screens[key];
      return target;
    }, {})
  };
  var handleArbitraryValues = (section, key) => (key = key[0] == "[" && key.slice(-1) == "]" && key.slice(1, -1)) && includes(section, "olor") == /^(#|(hsl|rgb)a?\(|[a-z]+$)/.test(key) && (includes(key, "calc(") ? key.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 ") : key);
  var makeThemeResolver = (config) => {
    const cache = /* @__PURE__ */ new Map();
    const theme2 = { ...defaultTheme, ...config };
    const deref = (theme3, section) => {
      const base = theme3 && theme3[section];
      const value = typeof base == "function" ? base(resolve, resolveContext) : base;
      return value && section == "colors" ? flattenColorPalette(value) : value;
    };
    const resolve = (section, key, defaultValue) => {
      const keypath = section.split(".");
      section = keypath[0];
      if (keypath.length > 1) {
        defaultValue = key;
        key = join(tail(keypath), ".");
      }
      let base = cache.get(section);
      if (!base) {
        cache.set(section, base = { ...deref(theme2, section) });
        Object.assign(base, deref(theme2.extend, section));
      }
      if (key != null) {
        key = (Array.isArray(key) ? join(key) : key) || "DEFAULT";
        const value = handleArbitraryValues(section, key) || base[key];
        return value == null ? defaultValue : Array.isArray(value) && !includes(["fontSize", "outline", "dropShadow"], section) ? join(value, ",") : value;
      }
      return base;
    };
    return resolve;
  };
  var translate = (plugins, context) => (rule, isTranslating) => {
    if (typeof rule.d == "function") {
      return rule.d(context);
    }
    const parameters = rule.d.split(/-(?![^[]*])/g);
    if (!isTranslating && parameters[0] == "tw" && rule.$ == rule.d) {
      return rule.$;
    }
    for (let index = parameters.length; index; index--) {
      const id = join(parameters.slice(0, index));
      if (Object.prototype.hasOwnProperty.call(plugins, id)) {
        const plugin = plugins[id];
        return typeof plugin == "function" ? plugin(tail(parameters, index), context, id) : typeof plugin == "string" ? context[isTranslating ? "css" : "tw"](plugin) : plugin;
      }
    }
  };
  var _2;
  var GROUP_RE = /^:(group(?:(?!-focus).+?)*)-(.+)$/;
  var NOT_PREFIX_RE = /^(:not)-(.+)/;
  var prepareVariantSelector = (variant) => variant[1] == "[" ? tail(variant) : variant;
  var decorate = (darkMode, variants, { theme: theme2, tag }) => {
    const applyVariant = (translation, variant) => {
      if (_2 = theme2("screens", tail(variant), "")) {
        return { [buildMediaQuery(_2)]: translation };
      }
      if (variant == ":dark" && darkMode == "class") {
        return { ".dark &": translation };
      }
      if (_2 = GROUP_RE.exec(variant)) {
        return { [`.${escape(tag(_2[1]))}:${_2[2]} &`]: translation };
      }
      return {
        [variants[tail(variant)] || "&" + variant.replace(NOT_PREFIX_RE, (_4, not, variant2) => not + "(" + prepareVariantSelector(":" + variant2) + ")")]: translation
      };
    };
    return (translation, rule) => rule.v.reduceRight(applyVariant, translation);
  };
  var _3;
  var responsivePrecedence = (css) => (((_3 = /(?:^|min-width: *)(\d+(?:.\d+)?)(p)?/.exec(css)) ? +_3[1] / (_3[2] ? 15 : 1) / 10 : 0) & 31) << 22;
  var seperatorPrecedence = (string) => {
    _3 = 0;
    for (let index = string.length; index--; ) {
      _3 += includes("-:,", string[index]);
    }
    return _3;
  };
  var atRulePresedence = (css) => (seperatorPrecedence(css) & 15) << 18;
  var PRECEDENCES_BY_PSEUDO_CLASS = [
    "rst",
    "st",
    "en",
    "d",
    "nk",
    "sited",
    "pty",
    "ecked",
    "cus-w",
    "ver",
    "cus",
    "cus-v",
    "tive",
    "sable",
    "ad-on",
    "tiona",
    "quire"
  ];
  var pseudoPrecedence = (pseudoClass) => 1 << (~(_3 = PRECEDENCES_BY_PSEUDO_CLASS.indexOf(pseudoClass.replace(GROUP_RE, ":$2").slice(3, 8))) ? _3 : 17);
  var makeVariantPresedenceCalculator = (theme2, variants) => (presedence, variant) => presedence | ((_3 = theme2("screens", tail(variant), "")) ? 1 << 27 | responsivePrecedence(buildMediaQuery(_3)) : variant == ":dark" ? 1 << 30 : (_3 = variants[variant] || variant.replace(NOT_PREFIX_RE, ":$2"))[0] == "@" ? atRulePresedence(_3) : pseudoPrecedence(variant));
  var declarationPropertyPrecedence = (property2) => property2[0] == "-" ? 0 : seperatorPrecedence(property2) + ((_3 = /^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.exec(property2)) ? +!!_3[1] || -!!_3[2] : 0) + 1;
  var stringifyBlock = (body, selector) => selector + "{" + body + "}";
  var serialize = (prefix, variants, context) => {
    const { theme: theme2, tag } = context;
    const tagVar = (_4, property2) => "--" + tag(property2);
    const tagVars = (value) => `${value}`.replace(/--(tw-[\w-]+)\b/g, tagVar);
    const stringifyDeclaration = (property2, value, important) => {
      property2 = tagVars(property2);
      return Array.isArray(value) ? join(value.filter(Boolean).map((value2) => prefix(property2, tagVars(value2), important)), ";") : prefix(property2, tagVars(value), important);
    };
    let rules2;
    const stringify2 = (atRules, selector, presedence, css, important) => {
      if (Array.isArray(css)) {
        css.forEach((css2) => css2 && stringify2(atRules, selector, presedence, css2, important));
        return;
      }
      let declarations = "";
      let maxPropertyPresedence = 0;
      let numberOfDeclarations = 0;
      if (css["@apply"]) {
        css = merge(evalThunk(apply(css["@apply"]), context), { ...css, "@apply": void 0 }, context);
      }
      Object.keys(css).forEach((key) => {
        const value = evalThunk(css[key], context);
        if (isCSSProperty(key, value)) {
          if (value !== "" && key.length > 1) {
            const property2 = hyphenate(key);
            numberOfDeclarations += 1;
            maxPropertyPresedence = Math.max(maxPropertyPresedence, declarationPropertyPrecedence(property2));
            declarations = (declarations && declarations + ";") + stringifyDeclaration(property2, value, important);
          }
        } else if (value) {
          if (key == ":global") {
            key = "@global";
          }
          if (key[0] == "@") {
            if (key[1] == "g") {
              stringify2([], "", 0, value, important);
            } else if (key[1] == "f") {
              stringify2([], key, 0, value, important);
            } else if (key[1] == "k") {
              const currentSize = rules2.length;
              stringify2([], "", 0, value, important);
              const waypoints = rules2.splice(currentSize, rules2.length - currentSize);
              rules2.push({
                r: stringifyBlock(join(waypoints.map((p) => p.r), ""), key),
                p: waypoints.reduce((sum, p) => sum + p.p, 0)
              });
            } else if (key[1] == "i") {
              ;
              (Array.isArray(value) ? value : [value]).forEach((value2) => value2 && rules2.push({ p: 0, r: `${key} ${value2};` }));
            } else {
              if (key[2] == "c") {
                key = buildMediaQuery(context.theme("screens", tail(key, 8).trim()));
              }
              stringify2([...atRules, key], selector, presedence | responsivePrecedence(key) | atRulePresedence(key), value, important);
            }
          } else {
            stringify2(atRules, selector ? selector.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (_4, selectorPart, comma) => key.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (_5, keyPart, comma2) => (includes(keyPart, "&") ? keyPart.replace(/&/g, selectorPart) : (selectorPart && selectorPart + " ") + keyPart) + comma2) + comma) : key, presedence, value, important);
          }
        }
      });
      if (numberOfDeclarations) {
        rules2.push({
          r: atRules.reduceRight(stringifyBlock, stringifyBlock(declarations, selector)),
          p: presedence * (1 << 8) + ((Math.max(0, 15 - numberOfDeclarations) & 15) << 4 | (maxPropertyPresedence || 15) & 15)
        });
      }
    };
    const variantPresedence = makeVariantPresedenceCalculator(theme2, variants);
    return (css, className, rule, layer = 0) => {
      layer <<= 28;
      rules2 = [];
      stringify2([], className ? "." + escape(className) : "", rule ? rule.v.reduceRight(variantPresedence, layer) : layer, css, rule && rule.i);
      return rules2;
    };
  };
  var inject = (sheet, mode2, init2, context) => {
    let sortedPrecedences;
    init2((value = []) => sortedPrecedences = value);
    let insertedRules;
    init2((value = /* @__PURE__ */ new Set()) => insertedRules = value);
    return ({ r: css, p: presedence }) => {
      if (!insertedRules.has(css)) {
        insertedRules.add(css);
        const index = sortedInsertionIndex(sortedPrecedences, presedence);
        try {
          sheet.insert(css, index);
          sortedPrecedences.splice(index, 0, presedence);
        } catch (error) {
          if (!/:-[mwo]/.test(css)) {
            mode2.report({ id: "INJECT_CSS_ERROR", css, error }, context);
          }
        }
      }
    };
  };
  var sanitize = (value, defaultValue, disabled, enabled = defaultValue) => value === false ? disabled : value === true ? enabled : value || defaultValue;
  var loadMode = (mode2) => (typeof mode2 == "string" ? { t: strict, a: warn, i: silent }[mode2[1]] : mode2) || warn;
  var COMPONENT_PROPS = { _: { value: "", writable: true } };
  var configure = (config = {}) => {
    const theme2 = makeThemeResolver(config.theme);
    const mode2 = loadMode(config.mode);
    const hash = sanitize(config.hash, false, false, cyrb32);
    const important = config.important;
    let activeRule = { v: [] };
    let translateDepth = 0;
    const lastTranslations = [];
    const context = {
      tw: (...tokens) => process(tokens),
      theme: (section, key, defaultValue) => {
        var _a;
        const value = (_a = theme2(section, key, defaultValue)) != null ? _a : mode2.unknown(section, key == null || Array.isArray(key) ? key : key.split("."), defaultValue != null, context);
        return activeRule.n && value && includes("rg", (typeof value)[5]) ? `calc(${value} * -1)` : value;
      },
      tag: (value) => hash ? hash(value) : value,
      css: (rules2) => {
        translateDepth++;
        const lastTranslationsIndex = lastTranslations.length;
        try {
          ;
          (typeof rules2 == "string" ? parse([rules2]) : rules2).forEach(convert);
          const css = Object.create(null, COMPONENT_PROPS);
          for (let index = lastTranslationsIndex; index < lastTranslations.length; index++) {
            const translation = lastTranslations[index];
            if (translation) {
              switch (typeof translation) {
                case "object":
                  merge(css, translation, context);
                  break;
                case "string":
                  css._ += (css._ && " ") + translation;
              }
            }
          }
          return css;
        } finally {
          lastTranslations.length = lastTranslationsIndex;
          translateDepth--;
        }
      }
    };
    const translate2 = translate({ ...corePlugins, ...config.plugins }, context);
    const doTranslate = (rule) => {
      const parentRule = activeRule;
      activeRule = rule;
      try {
        return evalThunk(translate2(rule), context);
      } finally {
        activeRule = parentRule;
      }
    };
    const variants = { ...coreVariants, ...config.variants };
    const decorate2 = decorate(config.darkMode || "media", variants, context);
    const serialize2 = serialize(sanitize(config.prefix, autoprefix, noprefix), variants, context);
    const sheet = config.sheet || (typeof window == "undefined" ? voidSheet() : cssomSheet(config));
    const { init: init2 = (callback) => callback() } = sheet;
    const inject2 = inject(sheet, mode2, init2, context);
    let idToClassName;
    init2((value = /* @__PURE__ */ new Map()) => idToClassName = value);
    const inlineDirectiveName = /* @__PURE__ */ new WeakMap();
    const evaluateFunctions = (key, value) => key == "_" ? void 0 : typeof value == "function" ? JSON.stringify(evalThunk(value, context), evaluateFunctions) : value;
    const convert = (rule) => {
      if (!translateDepth && activeRule.v.length) {
        rule = { ...rule, v: [...activeRule.v, ...rule.v], $: "" };
      }
      if (!rule.$) {
        rule.$ = stringifyRule(rule, inlineDirectiveName.get(rule.d));
      }
      let className = translateDepth ? null : idToClassName.get(rule.$);
      if (className == null) {
        let translation = doTranslate(rule);
        if (!rule.$) {
          rule.$ = cyrb32(JSON.stringify(translation, evaluateFunctions));
          inlineDirectiveName.set(rule.d, rule.$);
          rule.$ = stringifyRule(rule, rule.$);
        }
        if (translation && typeof translation == "object") {
          rule.v = rule.v.map(prepareVariantSelector);
          if (important)
            rule.i = important;
          translation = decorate2(translation, rule);
          if (translateDepth) {
            lastTranslations.push(translation);
          } else {
            const layer = typeof rule.d == "function" ? typeof translation._ == "string" ? 1 : 3 : 2;
            className = hash || typeof rule.d == "function" ? (hash || cyrb32)(layer + rule.$) : rule.$;
            serialize2(translation, className, rule, layer).forEach(inject2);
            if (translation._) {
              className += " " + translation._;
            }
          }
        } else {
          if (typeof translation == "string") {
            className = translation;
          } else {
            className = rule.$;
            mode2.report({ id: "UNKNOWN_DIRECTIVE", rule: className }, context);
          }
          if (translateDepth && typeof rule.d !== "function") {
            lastTranslations.push(className);
          }
        }
        if (!translateDepth) {
          idToClassName.set(rule.$, className);
          ensureMaxSize(idToClassName, 3e4);
        }
      }
      return className;
    };
    const process = (tokens) => join(parse(tokens).map(convert).filter(Boolean), " ");
    const preflight = sanitize(config.preflight, identity, false);
    if (preflight) {
      const css = createPreflight(theme2);
      const styles = serialize2(typeof preflight == "function" ? evalThunk(preflight(css, context), context) || css : { ...css, ...preflight });
      init2((injected = (styles.forEach(inject2), true)) => injected);
    }
    return {
      init: () => mode2.report({ id: "LATE_SETUP_CALL" }, context),
      process
    };
  };
  var create = (config) => {
    let process = (tokens) => {
      init2();
      return process(tokens);
    };
    let init2 = (config2) => {
      ;
      ({ process, init: init2 } = configure(config2));
    };
    if (config)
      init2(config);
    let context;
    const fromContext = (key) => () => {
      if (!context) {
        process([
          (_4) => {
            context = _4;
            return "";
          }
        ]);
      }
      return context[key];
    };
    return {
      tw: Object.defineProperties((...tokens) => process(tokens), {
        theme: {
          get: fromContext("theme")
        }
      }),
      setup: (config2) => init2(config2)
    };
  };
  var { tw, setup } = /* @__PURE__ */ create();

  // node_modules/svelte/store/index.mjs
  var subscriber_queue = [];
  function readable(value, start) {
    return {
      subscribe: writable(value, start).subscribe
    };
  }
  function writable(value, start = noop) {
    let stop;
    const subscribers = /* @__PURE__ */ new Set();
    function set(new_value) {
      if (safe_not_equal(value, new_value)) {
        value = new_value;
        if (stop) {
          const run_queue = !subscriber_queue.length;
          for (const subscriber of subscribers) {
            subscriber[1]();
            subscriber_queue.push(subscriber, value);
          }
          if (run_queue) {
            for (let i2 = 0; i2 < subscriber_queue.length; i2 += 2) {
              subscriber_queue[i2][0](subscriber_queue[i2 + 1]);
            }
            subscriber_queue.length = 0;
          }
        }
      }
    }
    function update2(fn) {
      set(fn(value));
    }
    function subscribe2(run3, invalidate = noop) {
      const subscriber = [run3, invalidate];
      subscribers.add(subscriber);
      if (subscribers.size === 1) {
        stop = start(set) || noop;
      }
      run3(value);
      return () => {
        subscribers.delete(subscriber);
        if (subscribers.size === 0) {
          stop();
          stop = null;
        }
      };
    }
    return { set, update: update2, subscribe: subscribe2 };
  }

  // src/services/sw-cache.js
  var CACHE_URL = "https://cache.permapages.app";
  var query = (contract, q) => fetch(`${CACHE_URL}/${contract}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(q)
  }).then((res) => res.json()).then(({ result }) => result);

  // node_modules/ramda/es/internal/_isPlaceholder.js
  function _isPlaceholder(a2) {
    return a2 != null && typeof a2 === "object" && a2["@@functional/placeholder"] === true;
  }

  // node_modules/ramda/es/internal/_curry1.js
  function _curry1(fn) {
    return function f1(a2) {
      if (arguments.length === 0 || _isPlaceholder(a2)) {
        return f1;
      } else {
        return fn.apply(this, arguments);
      }
    };
  }

  // node_modules/ramda/es/internal/_curry2.js
  function _curry2(fn) {
    return function f2(a2, b) {
      switch (arguments.length) {
        case 0:
          return f2;
        case 1:
          return _isPlaceholder(a2) ? f2 : _curry1(function(_b) {
            return fn(a2, _b);
          });
        default:
          return _isPlaceholder(a2) && _isPlaceholder(b) ? f2 : _isPlaceholder(a2) ? _curry1(function(_a) {
            return fn(_a, b);
          }) : _isPlaceholder(b) ? _curry1(function(_b) {
            return fn(a2, _b);
          }) : fn(a2, b);
      }
    };
  }

  // node_modules/ramda/es/internal/_arity.js
  function _arity(n, fn) {
    switch (n) {
      case 0:
        return function() {
          return fn.apply(this, arguments);
        };
      case 1:
        return function(a0) {
          return fn.apply(this, arguments);
        };
      case 2:
        return function(a0, a1) {
          return fn.apply(this, arguments);
        };
      case 3:
        return function(a0, a1, a2) {
          return fn.apply(this, arguments);
        };
      case 4:
        return function(a0, a1, a2, a3) {
          return fn.apply(this, arguments);
        };
      case 5:
        return function(a0, a1, a2, a3, a4) {
          return fn.apply(this, arguments);
        };
      case 6:
        return function(a0, a1, a2, a3, a4, a5) {
          return fn.apply(this, arguments);
        };
      case 7:
        return function(a0, a1, a2, a3, a4, a5, a6) {
          return fn.apply(this, arguments);
        };
      case 8:
        return function(a0, a1, a2, a3, a4, a5, a6, a7) {
          return fn.apply(this, arguments);
        };
      case 9:
        return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
          return fn.apply(this, arguments);
        };
      case 10:
        return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
          return fn.apply(this, arguments);
        };
      default:
        throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
    }
  }

  // node_modules/ramda/es/internal/_curryN.js
  function _curryN(length, received, fn) {
    return function() {
      var combined = [];
      var argsIdx = 0;
      var left = length;
      var combinedIdx = 0;
      while (combinedIdx < received.length || argsIdx < arguments.length) {
        var result;
        if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
          result = received[combinedIdx];
        } else {
          result = arguments[argsIdx];
          argsIdx += 1;
        }
        combined[combinedIdx] = result;
        if (!_isPlaceholder(result)) {
          left -= 1;
        }
        combinedIdx += 1;
      }
      return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
    };
  }

  // node_modules/ramda/es/curryN.js
  var curryN = /* @__PURE__ */ _curry2(function curryN2(length, fn) {
    if (length === 1) {
      return _curry1(fn);
    }
    return _arity(length, _curryN(length, [], fn));
  });
  var curryN_default = curryN;

  // node_modules/ramda/es/internal/_curry3.js
  function _curry3(fn) {
    return function f3(a2, b, c) {
      switch (arguments.length) {
        case 0:
          return f3;
        case 1:
          return _isPlaceholder(a2) ? f3 : _curry2(function(_b, _c) {
            return fn(a2, _b, _c);
          });
        case 2:
          return _isPlaceholder(a2) && _isPlaceholder(b) ? f3 : _isPlaceholder(a2) ? _curry2(function(_a, _c) {
            return fn(_a, b, _c);
          }) : _isPlaceholder(b) ? _curry2(function(_b, _c) {
            return fn(a2, _b, _c);
          }) : _curry1(function(_c) {
            return fn(a2, b, _c);
          });
        default:
          return _isPlaceholder(a2) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a2) && _isPlaceholder(b) ? _curry2(function(_a, _b) {
            return fn(_a, _b, c);
          }) : _isPlaceholder(a2) && _isPlaceholder(c) ? _curry2(function(_a, _c) {
            return fn(_a, b, _c);
          }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function(_b, _c) {
            return fn(a2, _b, _c);
          }) : _isPlaceholder(a2) ? _curry1(function(_a) {
            return fn(_a, b, c);
          }) : _isPlaceholder(b) ? _curry1(function(_b) {
            return fn(a2, _b, c);
          }) : _isPlaceholder(c) ? _curry1(function(_c) {
            return fn(a2, b, _c);
          }) : fn(a2, b, c);
      }
    };
  }

  // node_modules/ramda/es/internal/_isArray.js
  var isArray_default = Array.isArray || function _isArray(val) {
    return val != null && val.length >= 0 && Object.prototype.toString.call(val) === "[object Array]";
  };

  // node_modules/ramda/es/internal/_isTransformer.js
  function _isTransformer(obj) {
    return obj != null && typeof obj["@@transducer/step"] === "function";
  }

  // node_modules/ramda/es/internal/_dispatchable.js
  function _dispatchable(methodNames, transducerCreator, fn) {
    return function() {
      if (arguments.length === 0) {
        return fn();
      }
      var obj = arguments[arguments.length - 1];
      if (!isArray_default(obj)) {
        var idx = 0;
        while (idx < methodNames.length) {
          if (typeof obj[methodNames[idx]] === "function") {
            return obj[methodNames[idx]].apply(obj, Array.prototype.slice.call(arguments, 0, -1));
          }
          idx += 1;
        }
        if (_isTransformer(obj)) {
          var transducer = transducerCreator.apply(null, Array.prototype.slice.call(arguments, 0, -1));
          return transducer(obj);
        }
      }
      return fn.apply(this, arguments);
    };
  }

  // node_modules/ramda/es/internal/_reduced.js
  function _reduced(x) {
    return x && x["@@transducer/reduced"] ? x : {
      "@@transducer/value": x,
      "@@transducer/reduced": true
    };
  }

  // node_modules/ramda/es/internal/_xfBase.js
  var xfBase_default = {
    init: function() {
      return this.xf["@@transducer/init"]();
    },
    result: function(result) {
      return this.xf["@@transducer/result"](result);
    }
  };

  // node_modules/ramda/es/internal/_map.js
  function _map(fn, functor) {
    var idx = 0;
    var len = functor.length;
    var result = Array(len);
    while (idx < len) {
      result[idx] = fn(functor[idx]);
      idx += 1;
    }
    return result;
  }

  // node_modules/ramda/es/internal/_isString.js
  function _isString(x) {
    return Object.prototype.toString.call(x) === "[object String]";
  }

  // node_modules/ramda/es/internal/_isArrayLike.js
  var _isArrayLike = /* @__PURE__ */ _curry1(function isArrayLike(x) {
    if (isArray_default(x)) {
      return true;
    }
    if (!x) {
      return false;
    }
    if (typeof x !== "object") {
      return false;
    }
    if (_isString(x)) {
      return false;
    }
    if (x.length === 0) {
      return true;
    }
    if (x.length > 0) {
      return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
    }
    return false;
  });
  var isArrayLike_default = _isArrayLike;

  // node_modules/ramda/es/internal/_xwrap.js
  var XWrap = /* @__PURE__ */ function() {
    function XWrap2(fn) {
      this.f = fn;
    }
    XWrap2.prototype["@@transducer/init"] = function() {
      throw new Error("init not implemented on XWrap");
    };
    XWrap2.prototype["@@transducer/result"] = function(acc) {
      return acc;
    };
    XWrap2.prototype["@@transducer/step"] = function(acc, x) {
      return this.f(acc, x);
    };
    return XWrap2;
  }();
  function _xwrap(fn) {
    return new XWrap(fn);
  }

  // node_modules/ramda/es/bind.js
  var bind = /* @__PURE__ */ _curry2(function bind2(fn, thisObj) {
    return _arity(fn.length, function() {
      return fn.apply(thisObj, arguments);
    });
  });
  var bind_default = bind;

  // node_modules/ramda/es/internal/_reduce.js
  function _arrayReduce(xf, acc, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      acc = xf["@@transducer/step"](acc, list[idx]);
      if (acc && acc["@@transducer/reduced"]) {
        acc = acc["@@transducer/value"];
        break;
      }
      idx += 1;
    }
    return xf["@@transducer/result"](acc);
  }
  function _iterableReduce(xf, acc, iter) {
    var step = iter.next();
    while (!step.done) {
      acc = xf["@@transducer/step"](acc, step.value);
      if (acc && acc["@@transducer/reduced"]) {
        acc = acc["@@transducer/value"];
        break;
      }
      step = iter.next();
    }
    return xf["@@transducer/result"](acc);
  }
  function _methodReduce(xf, acc, obj, methodName) {
    return xf["@@transducer/result"](obj[methodName](bind_default(xf["@@transducer/step"], xf), acc));
  }
  var symIterator = typeof Symbol !== "undefined" ? Symbol.iterator : "@@iterator";
  function _reduce(fn, acc, list) {
    if (typeof fn === "function") {
      fn = _xwrap(fn);
    }
    if (isArrayLike_default(list)) {
      return _arrayReduce(fn, acc, list);
    }
    if (typeof list["fantasy-land/reduce"] === "function") {
      return _methodReduce(fn, acc, list, "fantasy-land/reduce");
    }
    if (list[symIterator] != null) {
      return _iterableReduce(fn, acc, list[symIterator]());
    }
    if (typeof list.next === "function") {
      return _iterableReduce(fn, acc, list);
    }
    if (typeof list.reduce === "function") {
      return _methodReduce(fn, acc, list, "reduce");
    }
    throw new TypeError("reduce: list must be array or iterable");
  }

  // node_modules/ramda/es/internal/_xmap.js
  var XMap = /* @__PURE__ */ function() {
    function XMap2(f, xf) {
      this.xf = xf;
      this.f = f;
    }
    XMap2.prototype["@@transducer/init"] = xfBase_default.init;
    XMap2.prototype["@@transducer/result"] = xfBase_default.result;
    XMap2.prototype["@@transducer/step"] = function(result, input) {
      return this.xf["@@transducer/step"](result, this.f(input));
    };
    return XMap2;
  }();
  var _xmap = /* @__PURE__ */ _curry2(function _xmap2(f, xf) {
    return new XMap(f, xf);
  });
  var xmap_default = _xmap;

  // node_modules/ramda/es/internal/_has.js
  function _has(prop3, obj) {
    return Object.prototype.hasOwnProperty.call(obj, prop3);
  }

  // node_modules/ramda/es/internal/_isArguments.js
  var toString = Object.prototype.toString;
  var _isArguments = /* @__PURE__ */ function() {
    return toString.call(arguments) === "[object Arguments]" ? function _isArguments2(x) {
      return toString.call(x) === "[object Arguments]";
    } : function _isArguments2(x) {
      return _has("callee", x);
    };
  }();
  var isArguments_default = _isArguments;

  // node_modules/ramda/es/keys.js
  var hasEnumBug = !/* @__PURE__ */ {
    toString: null
  }.propertyIsEnumerable("toString");
  var nonEnumerableProps = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
  var hasArgsEnumBug = /* @__PURE__ */ function() {
    "use strict";
    return arguments.propertyIsEnumerable("length");
  }();
  var contains = function contains2(list, item) {
    var idx = 0;
    while (idx < list.length) {
      if (list[idx] === item) {
        return true;
      }
      idx += 1;
    }
    return false;
  };
  var keys = typeof Object.keys === "function" && !hasArgsEnumBug ? /* @__PURE__ */ _curry1(function keys2(obj) {
    return Object(obj) !== obj ? [] : Object.keys(obj);
  }) : /* @__PURE__ */ _curry1(function keys3(obj) {
    if (Object(obj) !== obj) {
      return [];
    }
    var prop3, nIdx;
    var ks = [];
    var checkArgsLength = hasArgsEnumBug && isArguments_default(obj);
    for (prop3 in obj) {
      if (_has(prop3, obj) && (!checkArgsLength || prop3 !== "length")) {
        ks[ks.length] = prop3;
      }
    }
    if (hasEnumBug) {
      nIdx = nonEnumerableProps.length - 1;
      while (nIdx >= 0) {
        prop3 = nonEnumerableProps[nIdx];
        if (_has(prop3, obj) && !contains(ks, prop3)) {
          ks[ks.length] = prop3;
        }
        nIdx -= 1;
      }
    }
    return ks;
  });
  var keys_default = keys;

  // node_modules/ramda/es/map.js
  var map = /* @__PURE__ */ _curry2(
    /* @__PURE__ */ _dispatchable(["fantasy-land/map", "map"], xmap_default, function map2(fn, functor) {
      switch (Object.prototype.toString.call(functor)) {
        case "[object Function]":
          return curryN_default(functor.length, function() {
            return fn.call(this, functor.apply(this, arguments));
          });
        case "[object Object]":
          return _reduce(function(acc, key) {
            acc[key] = fn(functor[key]);
            return acc;
          }, {}, keys_default(functor));
        default:
          return _map(fn, functor);
      }
    })
  );
  var map_default = map;

  // node_modules/ramda/es/internal/_isInteger.js
  var isInteger_default = Number.isInteger || function _isInteger(n) {
    return n << 0 === n;
  };

  // node_modules/ramda/es/nth.js
  var nth = /* @__PURE__ */ _curry2(function nth2(offset, list) {
    var idx = offset < 0 ? list.length + offset : offset;
    return _isString(list) ? list.charAt(idx) : list[idx];
  });
  var nth_default = nth;

  // node_modules/ramda/es/prop.js
  var prop = /* @__PURE__ */ _curry2(function prop2(p, obj) {
    if (obj == null) {
      return;
    }
    return isInteger_default(p) ? nth_default(p, obj) : obj[p];
  });
  var prop_default = prop;

  // node_modules/ramda/es/pluck.js
  var pluck = /* @__PURE__ */ _curry2(function pluck2(p, list) {
    return map_default(prop_default(p), list);
  });
  var pluck_default = pluck;

  // node_modules/ramda/es/reduce.js
  var reduce = /* @__PURE__ */ _curry3(_reduce);
  var reduce_default = reduce;

  // node_modules/ramda/es/type.js
  var type = /* @__PURE__ */ _curry1(function type2(val) {
    return val === null ? "Null" : val === void 0 ? "Undefined" : Object.prototype.toString.call(val).slice(8, -1);
  });
  var type_default = type;

  // node_modules/ramda/es/internal/_pipe.js
  function _pipe(f, g) {
    return function() {
      return g.call(this, f.apply(this, arguments));
    };
  }

  // node_modules/ramda/es/internal/_checkForMethod.js
  function _checkForMethod(methodname, fn) {
    return function() {
      var length = arguments.length;
      if (length === 0) {
        return fn();
      }
      var obj = arguments[length - 1];
      return isArray_default(obj) || typeof obj[methodname] !== "function" ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
    };
  }

  // node_modules/ramda/es/slice.js
  var slice = /* @__PURE__ */ _curry3(
    /* @__PURE__ */ _checkForMethod("slice", function slice2(fromIndex, toIndex, list) {
      return Array.prototype.slice.call(list, fromIndex, toIndex);
    })
  );
  var slice_default = slice;

  // node_modules/ramda/es/tail.js
  var tail2 = /* @__PURE__ */ _curry1(
    /* @__PURE__ */ _checkForMethod(
      "tail",
      /* @__PURE__ */ slice_default(1, Infinity)
    )
  );
  var tail_default = tail2;

  // node_modules/ramda/es/pipe.js
  function pipe() {
    if (arguments.length === 0) {
      throw new Error("pipe requires at least one argument");
    }
    return _arity(arguments[0].length, reduce_default(_pipe, arguments[0], tail_default(arguments)));
  }

  // node_modules/ramda/es/reverse.js
  var reverse = /* @__PURE__ */ _curry1(function reverse2(list) {
    return _isString(list) ? list.split("").reverse().join("") : Array.prototype.slice.call(list, 0).reverse();
  });
  var reverse_default = reverse;

  // node_modules/ramda/es/compose.js
  function compose() {
    if (arguments.length === 0) {
      throw new Error("compose requires at least one argument");
    }
    return pipe.apply(this, reverse_default(arguments));
  }

  // node_modules/ramda/es/internal/_arrayFromIterator.js
  function _arrayFromIterator(iter) {
    var list = [];
    var next;
    while (!(next = iter.next()).done) {
      list.push(next.value);
    }
    return list;
  }

  // node_modules/ramda/es/internal/_includesWith.js
  function _includesWith(pred, x, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      if (pred(x, list[idx])) {
        return true;
      }
      idx += 1;
    }
    return false;
  }

  // node_modules/ramda/es/internal/_functionName.js
  function _functionName(f) {
    var match = String(f).match(/^function (\w*)/);
    return match == null ? "" : match[1];
  }

  // node_modules/ramda/es/internal/_objectIs.js
  function _objectIs(a2, b) {
    if (a2 === b) {
      return a2 !== 0 || 1 / a2 === 1 / b;
    } else {
      return a2 !== a2 && b !== b;
    }
  }
  var objectIs_default = typeof Object.is === "function" ? Object.is : _objectIs;

  // node_modules/ramda/es/internal/_equals.js
  function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
    var a2 = _arrayFromIterator(aIterator);
    var b = _arrayFromIterator(bIterator);
    function eq(_a, _b) {
      return _equals(_a, _b, stackA.slice(), stackB.slice());
    }
    return !_includesWith(function(b2, aItem) {
      return !_includesWith(eq, aItem, b2);
    }, b, a2);
  }
  function _equals(a2, b, stackA, stackB) {
    if (objectIs_default(a2, b)) {
      return true;
    }
    var typeA = type_default(a2);
    if (typeA !== type_default(b)) {
      return false;
    }
    if (typeof a2["fantasy-land/equals"] === "function" || typeof b["fantasy-land/equals"] === "function") {
      return typeof a2["fantasy-land/equals"] === "function" && a2["fantasy-land/equals"](b) && typeof b["fantasy-land/equals"] === "function" && b["fantasy-land/equals"](a2);
    }
    if (typeof a2.equals === "function" || typeof b.equals === "function") {
      return typeof a2.equals === "function" && a2.equals(b) && typeof b.equals === "function" && b.equals(a2);
    }
    switch (typeA) {
      case "Arguments":
      case "Array":
      case "Object":
        if (typeof a2.constructor === "function" && _functionName(a2.constructor) === "Promise") {
          return a2 === b;
        }
        break;
      case "Boolean":
      case "Number":
      case "String":
        if (!(typeof a2 === typeof b && objectIs_default(a2.valueOf(), b.valueOf()))) {
          return false;
        }
        break;
      case "Date":
        if (!objectIs_default(a2.valueOf(), b.valueOf())) {
          return false;
        }
        break;
      case "Error":
        return a2.name === b.name && a2.message === b.message;
      case "RegExp":
        if (!(a2.source === b.source && a2.global === b.global && a2.ignoreCase === b.ignoreCase && a2.multiline === b.multiline && a2.sticky === b.sticky && a2.unicode === b.unicode)) {
          return false;
        }
        break;
    }
    var idx = stackA.length - 1;
    while (idx >= 0) {
      if (stackA[idx] === a2) {
        return stackB[idx] === b;
      }
      idx -= 1;
    }
    switch (typeA) {
      case "Map":
        if (a2.size !== b.size) {
          return false;
        }
        return _uniqContentEquals(a2.entries(), b.entries(), stackA.concat([a2]), stackB.concat([b]));
      case "Set":
        if (a2.size !== b.size) {
          return false;
        }
        return _uniqContentEquals(a2.values(), b.values(), stackA.concat([a2]), stackB.concat([b]));
      case "Arguments":
      case "Array":
      case "Object":
      case "Boolean":
      case "Number":
      case "String":
      case "Date":
      case "Error":
      case "RegExp":
      case "Int8Array":
      case "Uint8Array":
      case "Uint8ClampedArray":
      case "Int16Array":
      case "Uint16Array":
      case "Int32Array":
      case "Uint32Array":
      case "Float32Array":
      case "Float64Array":
      case "ArrayBuffer":
        break;
      default:
        return false;
    }
    var keysA = keys_default(a2);
    if (keysA.length !== keys_default(b).length) {
      return false;
    }
    var extendedStackA = stackA.concat([a2]);
    var extendedStackB = stackB.concat([b]);
    idx = keysA.length - 1;
    while (idx >= 0) {
      var key = keysA[idx];
      if (!(_has(key, b) && _equals(b[key], a2[key], extendedStackA, extendedStackB))) {
        return false;
      }
      idx -= 1;
    }
    return true;
  }

  // node_modules/ramda/es/equals.js
  var equals = /* @__PURE__ */ _curry2(function equals2(a2, b) {
    return _equals(a2, b, [], []);
  });
  var equals_default = equals;

  // node_modules/ramda/es/internal/_toISOString.js
  var pad = function pad2(n) {
    return (n < 10 ? "0" : "") + n;
  };
  var _toISOString = typeof Date.prototype.toISOString === "function" ? function _toISOString2(d) {
    return d.toISOString();
  } : function _toISOString3(d) {
    return d.getUTCFullYear() + "-" + pad(d.getUTCMonth() + 1) + "-" + pad(d.getUTCDate()) + "T" + pad(d.getUTCHours()) + ":" + pad(d.getUTCMinutes()) + ":" + pad(d.getUTCSeconds()) + "." + (d.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
  };

  // node_modules/ramda/es/internal/_filter.js
  function _filter(fn, list) {
    var idx = 0;
    var len = list.length;
    var result = [];
    while (idx < len) {
      if (fn(list[idx])) {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
    return result;
  }

  // node_modules/ramda/es/internal/_isObject.js
  function _isObject(x) {
    return Object.prototype.toString.call(x) === "[object Object]";
  }

  // node_modules/ramda/es/internal/_xfilter.js
  var XFilter = /* @__PURE__ */ function() {
    function XFilter2(f, xf) {
      this.xf = xf;
      this.f = f;
    }
    XFilter2.prototype["@@transducer/init"] = xfBase_default.init;
    XFilter2.prototype["@@transducer/result"] = xfBase_default.result;
    XFilter2.prototype["@@transducer/step"] = function(result, input) {
      return this.f(input) ? this.xf["@@transducer/step"](result, input) : result;
    };
    return XFilter2;
  }();
  var _xfilter = /* @__PURE__ */ _curry2(function _xfilter2(f, xf) {
    return new XFilter(f, xf);
  });
  var xfilter_default = _xfilter;

  // node_modules/ramda/es/filter.js
  var filter2 = /* @__PURE__ */ _curry2(
    /* @__PURE__ */ _dispatchable(["fantasy-land/filter", "filter"], xfilter_default, function(pred, filterable) {
      return _isObject(filterable) ? _reduce(function(acc, key) {
        if (pred(filterable[key])) {
          acc[key] = filterable[key];
        }
        return acc;
      }, {}, keys_default(filterable)) : _filter(pred, filterable);
    })
  );
  var filter_default = filter2;

  // node_modules/ramda/es/defaultTo.js
  var defaultTo = /* @__PURE__ */ _curry2(function defaultTo2(d, v) {
    return v == null || v !== v ? d : v;
  });
  var defaultTo_default = defaultTo;

  // node_modules/ramda/es/internal/_xfind.js
  var XFind = /* @__PURE__ */ function() {
    function XFind2(f, xf) {
      this.xf = xf;
      this.f = f;
      this.found = false;
    }
    XFind2.prototype["@@transducer/init"] = xfBase_default.init;
    XFind2.prototype["@@transducer/result"] = function(result) {
      if (!this.found) {
        result = this.xf["@@transducer/step"](result, void 0);
      }
      return this.xf["@@transducer/result"](result);
    };
    XFind2.prototype["@@transducer/step"] = function(result, input) {
      if (this.f(input)) {
        this.found = true;
        result = _reduced(this.xf["@@transducer/step"](result, input));
      }
      return result;
    };
    return XFind2;
  }();
  var _xfind = /* @__PURE__ */ _curry2(function _xfind2(f, xf) {
    return new XFind(f, xf);
  });
  var xfind_default = _xfind;

  // node_modules/ramda/es/find.js
  var find = /* @__PURE__ */ _curry2(
    /* @__PURE__ */ _dispatchable(["find"], xfind_default, function find2(fn, list) {
      var idx = 0;
      var len = list.length;
      while (idx < len) {
        if (fn(list[idx])) {
          return list[idx];
        }
        idx += 1;
      }
    })
  );
  var find_default = find;

  // node_modules/ramda/es/paths.js
  var paths = /* @__PURE__ */ _curry2(function paths2(pathsArray, obj) {
    return pathsArray.map(function(paths3) {
      var val = obj;
      var idx = 0;
      var p;
      while (idx < paths3.length) {
        if (val == null) {
          return;
        }
        p = paths3[idx];
        val = isInteger_default(p) ? nth_default(p, val) : val[p];
        idx += 1;
      }
      return val;
    });
  });
  var paths_default = paths;

  // node_modules/ramda/es/path.js
  var path = /* @__PURE__ */ _curry2(function path2(pathAr, obj) {
    return paths_default([pathAr], obj)[0];
  });
  var path_default = path;

  // node_modules/ramda/es/propEq.js
  var propEq = /* @__PURE__ */ _curry3(function propEq2(name, val, obj) {
    return equals_default(val, prop_default(name, obj));
  });
  var propEq_default = propEq;

  // node_modules/ramda/es/propOr.js
  var propOr = /* @__PURE__ */ _curry3(function propOr2(val, p, obj) {
    return defaultTo_default(val, prop_default(p, obj));
  });
  var propOr_default = propOr;

  // node_modules/ramda/es/trim.js
  var hasProtoTrim = typeof String.prototype.trim === "function";

  // src/services/arweave.js
  var URL = "https://arweave.net";
  var run2 = ({ query: query2, variables }) => fetch(`${URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query: query2, variables })
  }).then((res) => res.ok ? res.json() : Promise.reject(res));
  var gql = async (q) => {
    let hasNextPage = true;
    let edges2 = [];
    let cursor = "";
    while (hasNextPage) {
      const result = await run2({ query: q.query, variables: { ...q.variables, cursor } }).then(path_default(["data", "transactions"]));
      if (result.edges && result.edges.length) {
        edges2 = edges2.concat(result.edges);
        cursor = result.edges[result.edges.length - 1].cursor;
      }
      hasNextPage = result.pageInfo.hasNextPage;
    }
    return edges2;
  };

  // src/domain/stamps.js
  var import_crocks = __toESM(require_crocks());
  var { of, ask, lift } = (0, import_crocks.ReaderT)(import_crocks.Async);
  var STAMP_CONTRACT = "FMRHYgSijiUNBrFy-XqyNNXenHsCV0ThR4lGAPO4chA";
  var stampsByAddress = (addr) => of(addr).chain((addr2) => ask(
    ({ query: query2, gql: gql2 }) => import_crocks.Async.fromPromise(query2)(
      STAMP_CONTRACT,
      [
        "compose",
        ["filter", ["propEq", "address", addr2]],
        ["values"],
        ["prop", "stamps"]
      ]
    ).chain(
      (stamps) => import_crocks.Async.of(stamps).map(pluck_default("asset")).map(buildQuery).chain(import_crocks.Async.fromPromise(gql2)).map(pluck_default("node")).map(map_default(toStamp)).map(map_default((s) => {
        s.timestamp = propOr_default(0, "timestamp", find_default(propEq_default("asset", s.id), stamps));
        return s;
      }))
    )
  )).chain(lift);
  function toStamp(node) {
    const getTag = (name) => compose(
      propOr_default("", "value"),
      find_default(propEq_default("name", name))
    )(node.tags);
    const getTopics = () => compose(
      pluck_default("value"),
      filter_default((t2) => /^Topic:/.test(t2.name))
    )(node.tags);
    return {
      id: node.id,
      owner: node.owner.address,
      title: getTag("Title") || getTag("Page-Title"),
      description: getTag("Description"),
      type: getTag("Type"),
      topics: getTopics()
    };
  }
  function buildQuery(assets) {
    return {
      query: `query($cursor: String, $assets: [ID!]) {
    transactions(
      first: 100,
      after: $cursor,
      ids: $assets) {
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          owner {
            address
          }
          tags {
            name
            value
          }
        }
      }
    }
  }`,
      variables: {
        assets,
        cursor: ""
      }
    };
  }

  // src/store.js
  var app = readable({
    stamps: (addr) => stampsByAddress(addr).runWith({ query, gql }).toPromise()
  });

  // src/Widget.svelte
  function get_each_context(ctx, list, i2) {
    const child_ctx = ctx.slice();
    child_ctx[3] = list[i2];
    return child_ctx;
  }
  function create_catch_block(ctx) {
    return { c: noop, m: noop, p: noop, d: noop };
  }
  function create_then_block(ctx) {
    let ul;
    let ul_class_value;
    let each_value = ctx[2];
    let each_blocks = [];
    for (let i2 = 0; i2 < each_value.length; i2 += 1) {
      each_blocks[i2] = create_each_block(get_each_context(ctx, each_value, i2));
    }
    return {
      c() {
        ul = element("ul");
        for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
          each_blocks[i2].c();
        }
        attr(ul, "class", ul_class_value = tw("relative divide-y divide-gray-200 border-b border-gray-200"));
      },
      m(target, anchor) {
        insert(target, ul, anchor);
        for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
          each_blocks[i2].m(ul, null);
        }
      },
      p(ctx2, dirty) {
        if (dirty & 3) {
          each_value = ctx2[2];
          let i2;
          for (i2 = 0; i2 < each_value.length; i2 += 1) {
            const child_ctx = get_each_context(ctx2, each_value, i2);
            if (each_blocks[i2]) {
              each_blocks[i2].p(child_ctx, dirty);
            } else {
              each_blocks[i2] = create_each_block(child_ctx);
              each_blocks[i2].c();
              each_blocks[i2].m(ul, null);
            }
          }
          for (; i2 < each_blocks.length; i2 += 1) {
            each_blocks[i2].d(1);
          }
          each_blocks.length = each_value.length;
        }
      },
      d(detaching) {
        if (detaching)
          detach(ul);
        destroy_each(each_blocks, detaching);
      }
    };
  }
  function create_each_block(ctx) {
    let li;
    let div3;
    let div1;
    let div0;
    let h2;
    let a2;
    let t0_value = ctx[3].title + "";
    let t0;
    let a_href_value;
    let h2_class_value;
    let t1;
    let p0;
    let t2_value = ctx[3].description + "";
    let t2;
    let p0_class_value;
    let div0_class_value;
    let div1_class_value;
    let t3;
    let div2;
    let p1;
    let t4;
    let p1_class_value;
    let t5;
    let p2;
    let t6_value = new Date(ctx[3].timestamp).toISOString() + "";
    let t6;
    let p2_class_value;
    let div2_class_value;
    let div3_class_value;
    let t7;
    let li_class_value;
    return {
      c() {
        li = element("li");
        div3 = element("div");
        div1 = element("div");
        div0 = element("div");
        h2 = element("h2");
        a2 = element("a");
        t0 = text(t0_value);
        t1 = space();
        p0 = element("p");
        t2 = text(t2_value);
        t3 = space();
        div2 = element("div");
        p1 = element("p");
        t4 = text("Date:");
        t5 = space();
        p2 = element("p");
        t6 = text(t6_value);
        t7 = space();
        attr(a2, "rel", "noreferrer");
        attr(a2, "target", "_blank");
        attr(a2, "href", a_href_value = "https://arweave.net/" + ctx[3].id);
        attr(h2, "class", h2_class_value = tw("text-xl font-bold"));
        attr(p0, "class", p0_class_value = tw("text-[12px]"));
        attr(div0, "class", div0_class_value = tw("flex-1 flex flex-col"));
        attr(div1, "class", div1_class_value = tw("min-w-0 space-y-3"));
        attr(p1, "class", p1_class_value = tw("text-[12px] text-bold"));
        attr(p2, "class", p2_class_value = tw("text-[12px]"));
        attr(div2, "class", div2_class_value = tw("flex-none flex flex-col"));
        attr(div3, "class", div3_class_value = tw("flex items-center justify-between space-x-4"));
        attr(li, "class", li_class_value = tw("relative pl-4 pr-6 py-5 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6"));
      },
      m(target, anchor) {
        insert(target, li, anchor);
        append(li, div3);
        append(div3, div1);
        append(div1, div0);
        append(div0, h2);
        append(h2, a2);
        append(a2, t0);
        append(div0, t1);
        append(div0, p0);
        append(p0, t2);
        append(div3, t3);
        append(div3, div2);
        append(div2, p1);
        append(p1, t4);
        append(div2, t5);
        append(div2, p2);
        append(p2, t6);
        append(li, t7);
      },
      p(ctx2, dirty) {
        if (dirty & 3 && t0_value !== (t0_value = ctx2[3].title + ""))
          set_data(t0, t0_value);
        if (dirty & 3 && a_href_value !== (a_href_value = "https://arweave.net/" + ctx2[3].id)) {
          attr(a2, "href", a_href_value);
        }
        if (dirty & 3 && t2_value !== (t2_value = ctx2[3].description + ""))
          set_data(t2, t2_value);
        if (dirty & 3 && t6_value !== (t6_value = new Date(ctx2[3].timestamp).toISOString() + ""))
          set_data(t6, t6_value);
      },
      d(detaching) {
        if (detaching)
          detach(li);
      }
    };
  }
  function create_pending_block(ctx) {
    return { c: noop, m: noop, p: noop, d: noop };
  }
  function create_fragment(ctx) {
    let await_block_anchor;
    let promise;
    let info = {
      ctx,
      current: null,
      token: null,
      hasCatch: false,
      pending: create_pending_block,
      then: create_then_block,
      catch: create_catch_block,
      value: 2
    };
    handle_promise(promise = ctx[1].stamps(ctx[0]), info);
    return {
      c() {
        await_block_anchor = empty();
        info.block.c();
      },
      m(target, anchor) {
        insert(target, await_block_anchor, anchor);
        info.block.m(target, info.anchor = anchor);
        info.mount = () => await_block_anchor.parentNode;
        info.anchor = await_block_anchor;
      },
      p(new_ctx, [dirty]) {
        ctx = new_ctx;
        info.ctx = ctx;
        if (dirty & 3 && promise !== (promise = ctx[1].stamps(ctx[0])) && handle_promise(promise, info)) {
        } else {
          update_await_block_branch(info, ctx, dirty);
        }
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(await_block_anchor);
        info.block.d(detaching);
        info.token = null;
        info = null;
      }
    };
  }
  function instance($$self, $$props, $$invalidate) {
    let $app;
    component_subscribe($$self, app, ($$value) => $$invalidate(1, $app = $$value));
    let { address = "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI" } = $$props;
    $$self.$$set = ($$props2) => {
      if ("address" in $$props2)
        $$invalidate(0, address = $$props2.address);
    };
    return [address, $app];
  }
  var Widget = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance, create_fragment, safe_not_equal, { address: 0 });
    }
  };
  var Widget_default = Widget;

  // src/main.js
  var widget = new Widget_default({
    target: document.getElementById("stamps")
  });
  var main_default = widget;
})();
/** @license ISC License (c) copyright 2016 original and current authors */
/** @license ISC License (c) copyright 2017 original and current authors */
/** @license ISC License (c) copyright 2018 original and current authors */
/** @license ISC License (c) copyright 2019 original and current authors */
