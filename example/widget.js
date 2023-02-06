var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all3) => {
  for (var name in all3)
    __defProp(target, name, { get: all3[name], enumerable: true });
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
    function curry3(fn) {
      if (fn[CURRY_SYMB]) {
        return fn;
      }
      function curried() {
        var xs = [], len = arguments.length;
        while (len--)
          xs[len] = arguments[len];
        var args = xs.length ? xs : [void 0];
        if (args.length < fn.length) {
          return curry3(Function.bind.apply(fn, [null].concat(args)));
        }
        var val = args.length === fn.length ? fn.apply(null, args) : args.reduce(applyCurry, fn);
        if (isFunction(val)) {
          return curry3(val);
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
    module.exports = curry3;
  }
});

// node_modules/crocks/combinators/applyTo.js
var require_applyTo = __commonJS({
  "node_modules/crocks/combinators/applyTo.js"(exports, module) {
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    function applyTo3(x2, f) {
      if (!isFunction(f)) {
        throw new TypeError("applyTo: Function required for second argument");
      }
      return f(x2);
    }
    module.exports = curry3(applyTo3);
  }
});

// node_modules/crocks/combinators/compose2.js
var require_compose2 = __commonJS({
  "node_modules/crocks/combinators/compose2.js"(exports, module) {
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    function compose2(f, g2, h3, x2, y3) {
      if (!isFunction(f) || !isFunction(g2) || !isFunction(h3)) {
        throw new TypeError("compose2: First, second and third arguments must be functions");
      }
      return curry3(f)(g2(x2), h3(y3));
    }
    module.exports = curry3(compose2);
  }
});

// node_modules/crocks/core/compose.js
var require_compose = __commonJS({
  "node_modules/crocks/core/compose.js"(exports, module) {
    function compose2(f, g2) {
      return function(x2) {
        return f(g2(x2));
      };
    }
    module.exports = compose2;
  }
});

// node_modules/crocks/combinators/composeB.js
var require_composeB = __commonJS({
  "node_modules/crocks/combinators/composeB.js"(exports, module) {
    var compose2 = require_compose();
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    function composeB(f, g2) {
      if (!(isFunction(f) && isFunction(g2))) {
        throw new TypeError(
          "composeB: Functions required for first two arguments"
        );
      }
      return compose2(f, g2);
    }
    module.exports = curry3(composeB);
  }
});

// node_modules/crocks/combinators/constant.js
var require_constant = __commonJS({
  "node_modules/crocks/combinators/constant.js"(exports, module) {
    var curry3 = require_curry();
    var constant = function(x2) {
      return function() {
        return x2;
      };
    };
    module.exports = curry3(constant);
  }
});

// node_modules/crocks/combinators/converge.js
var require_converge = __commonJS({
  "node_modules/crocks/combinators/converge.js"(exports, module) {
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    function converge3(f, g2, h3, x2) {
      if (!isFunction(f) || !isFunction(g2) || !isFunction(h3)) {
        throw new TypeError("converge: Functions required for first three arguments");
      }
      return curry3(f)(g2(x2), h3(x2));
    }
    module.exports = curry3(converge3);
  }
});

// node_modules/crocks/combinators/flip.js
var require_flip = __commonJS({
  "node_modules/crocks/combinators/flip.js"(exports, module) {
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    function flip3(f, x2, y3) {
      if (!isFunction(f)) {
        throw new TypeError(
          "flip: Function required for first argument"
        );
      }
      return curry3(f)(y3, x2);
    }
    module.exports = curry3(flip3);
  }
});

// node_modules/crocks/combinators/identity.js
var require_identity = __commonJS({
  "node_modules/crocks/combinators/identity.js"(exports, module) {
    var identity2 = function(x2) {
      return x2;
    };
    module.exports = identity2;
  }
});

// node_modules/crocks/combinators/psi.js
var require_psi = __commonJS({
  "node_modules/crocks/combinators/psi.js"(exports, module) {
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    function psi(f, g2, x2, y3) {
      if (!isFunction(f) || !isFunction(g2)) {
        throw new TypeError("psi: First and second arguments must be functions");
      }
      return curry3(f)(g2(x2), g2(y3));
    }
    module.exports = curry3(psi);
  }
});

// node_modules/crocks/combinators/substitution.js
var require_substitution = __commonJS({
  "node_modules/crocks/combinators/substitution.js"(exports, module) {
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    function substitution(f, g2, x2) {
      if (!(isFunction(f) && isFunction(g2))) {
        throw new TypeError(
          "substitution: Functions required for first two arguments"
        );
      }
      return curry3(f)(x2, g2(x2));
    }
    module.exports = curry3(substitution);
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
      "Tuple": function(n2) {
        return n2 + "-Tuple";
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
    function type3(x2) {
      if (x2) {
        if (isFunction(x2.type)) {
          return x2.type();
        }
      }
      return {}.toString.call(x2).slice(8, -1);
    }
    module.exports = type3;
  }
});

// node_modules/crocks/core/isSameType.js
var require_isSameType = __commonJS({
  "node_modules/crocks/core/isSameType.js"(exports, module) {
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    var type3 = require_type();
    function isSameType(x2, y3) {
      var tX = type3(x2);
      var tY = type3(y3);
      return tX === tY || isFunction(x2) && x2.name === tY || isFunction(y3) && y3.name === tX;
    }
    module.exports = curry3(isSameType);
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
    function predOrFunc(pred, x2) {
      if (isFunction(pred)) {
        return pred(x2);
      }
      return pred.runWith(x2);
    }
    module.exports = predOrFunc;
  }
});

// node_modules/crocks/logic/and.js
var require_and = __commonJS({
  "node_modules/crocks/logic/and.js"(exports, module) {
    var curry3 = require_curry();
    var isPredOrFunc = require_isPredOrFunc();
    var predOrFunc = require_predOrFunc();
    function and3(f, g2) {
      if (!(isPredOrFunc(f) && isPredOrFunc(g2))) {
        throw new TypeError(
          "and: Preds or predicate functions required for first two arguments"
        );
      }
      return function(x2) {
        return !!(predOrFunc(f, x2) && predOrFunc(g2, x2));
      };
    }
    module.exports = curry3(and3);
  }
});

// node_modules/crocks/logic/ifElse.js
var require_ifElse = __commonJS({
  "node_modules/crocks/logic/ifElse.js"(exports, module) {
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    var isPredOrFunc = require_isPredOrFunc();
    var predOrFunc = require_predOrFunc();
    function ifElse3(pred, f, g2) {
      if (!isPredOrFunc(pred)) {
        throw new TypeError(
          "ifElse: Pred or predicate function required for first argument"
        );
      }
      if (!(isFunction(f) && isFunction(g2))) {
        throw new TypeError(
          "ifElse: Functions required for second and third arguments"
        );
      }
      return function(x2) {
        return predOrFunc(pred, x2) ? f(x2) : g2(x2);
      };
    }
    module.exports = curry3(ifElse3);
  }
});

// node_modules/crocks/logic/implies.js
var require_implies = __commonJS({
  "node_modules/crocks/logic/implies.js"(exports, module) {
    var curry3 = require_curry();
    var isPredOrFunc = require_isPredOrFunc();
    var predOrFunc = require_predOrFunc();
    function implies(p, q2) {
      if (!(isPredOrFunc(p) && isPredOrFunc(q2))) {
        throw new TypeError(
          "implies: Preds or predicate functions required for first two arguments"
        );
      }
      return function(x2) {
        return !predOrFunc(p, x2) || !!predOrFunc(q2, x2);
      };
    }
    module.exports = curry3(implies);
  }
});

// node_modules/crocks/logic/not.js
var require_not = __commonJS({
  "node_modules/crocks/logic/not.js"(exports, module) {
    var curry3 = require_curry();
    var isPredOrFunc = require_isPredOrFunc();
    var predOrFunc = require_predOrFunc();
    function not3(pred, x2) {
      if (!isPredOrFunc(pred)) {
        throw new TypeError(
          "not: Pred or predicate function required for first argument"
        );
      }
      return !predOrFunc(pred, x2);
    }
    module.exports = curry3(not3);
  }
});

// node_modules/crocks/logic/or.js
var require_or = __commonJS({
  "node_modules/crocks/logic/or.js"(exports, module) {
    var curry3 = require_curry();
    var isPredOrFunc = require_isPredOrFunc();
    var predOrFunc = require_predOrFunc();
    function or3(f, g2) {
      if (!(isPredOrFunc(f) && isPredOrFunc(g2))) {
        throw new TypeError(
          "or: Preds or predicate functions required for first two arguments"
        );
      }
      return function(x2) {
        return !!(predOrFunc(f, x2) || predOrFunc(g2, x2));
      };
    }
    module.exports = curry3(or3);
  }
});

// node_modules/crocks/logic/unless.js
var require_unless = __commonJS({
  "node_modules/crocks/logic/unless.js"(exports, module) {
    var curry3 = require_curry();
    var isPredOrFunc = require_isPredOrFunc();
    var isFunction = require_isFunction();
    var predOrFunc = require_predOrFunc();
    function unless3(pred, f) {
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
      return function(x2) {
        return !predOrFunc(pred, x2) ? f(x2) : x2;
      };
    }
    module.exports = curry3(unless3);
  }
});

// node_modules/crocks/logic/when.js
var require_when = __commonJS({
  "node_modules/crocks/logic/when.js"(exports, module) {
    var curry3 = require_curry();
    var predOrFunc = require_predOrFunc();
    var isPredOrFunc = require_isPredOrFunc();
    var isFunction = require_isFunction();
    function when3(pred, f) {
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
      return function(x2) {
        return predOrFunc(pred, x2) ? f(x2) : x2;
      };
    }
    module.exports = curry3(when3);
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
    function isDefined(x2) {
      return x2 !== void 0;
    }
    module.exports = isDefined;
  }
});

// node_modules/crocks/core/isObject.js
var require_isObject = __commonJS({
  "node_modules/crocks/core/isObject.js"(exports, module) {
    var toString4 = Object.prototype.toString;
    function isObject(x2) {
      return !!x2 && toString4.call(x2) === "[object Object]";
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
    var check = function(alg, m3) {
      return isFunction(m3[fl[alg]]) || isFunction(m3[alg]);
    };
    var checkImpl = function(alg, m3) {
      return isFunction(m3["@@implements"]) && !!m3["@@implements"](alg);
    };
    var hasAlg = function(alg, m3) {
      return !!m3 && (check(alg, m3) || checkImpl(alg, m3));
    };
    module.exports = hasAlg;
  }
});

// node_modules/crocks/core/isString.js
var require_isString = __commonJS({
  "node_modules/crocks/core/isString.js"(exports, module) {
    function isString(x2) {
      return typeof x2 === "string";
    }
    module.exports = isString;
  }
});

// node_modules/crocks/core/isSemigroup.js
var require_isSemigroup = __commonJS({
  "node_modules/crocks/core/isSemigroup.js"(exports, module) {
    var isString = require_isString();
    var hasAlg = require_hasAlg();
    function isSemigroup(m3) {
      return isString(m3) || !!m3 && hasAlg("concat", m3);
    }
    module.exports = isSemigroup;
  }
});

// node_modules/crocks/core/isMonoid.js
var require_isMonoid = __commonJS({
  "node_modules/crocks/core/isMonoid.js"(exports, module) {
    var hasAlg = require_hasAlg();
    var isSemigroup = require_isSemigroup();
    function isMonoid(m3) {
      return isSemigroup(m3) && (hasAlg("empty", m3) || hasAlg("empty", m3.constructor));
    }
    module.exports = isMonoid;
  }
});

// node_modules/crocks/core/isSame.js
var require_isSame = __commonJS({
  "node_modules/crocks/core/isSame.js"(exports, module) {
    function isSame(x2, y3) {
      if (x2 === y3) {
        return x2 !== 0 || 1 / x2 === 1 / y3;
      }
      return x2 !== x2 && y3 !== y3;
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
    var comp = function(a3, b2) {
      return a3.valueOf() === b2.valueOf();
    };
    var strats = {
      "Array": function(a3, b2) {
        return a3.length === b2.length && deepEquals(a3, b2);
      },
      "Date": function(a3, b2) {
        return isSame(a3.valueOf(), b2.valueOf());
      },
      "Error": function(a3, b2) {
        return a3.name === b2.name && a3.message === b2.message;
      },
      "Object": function(a3, b2) {
        return Object.keys(a3).length === Object.keys(b2).length && deepEquals(a3, b2);
      },
      "RegExp": function(a3, b2) {
        return a3.source === b2.source && a3.ignoreCase === b2.ignoreCase && a3.global === b2.global && a3.multiline === b2.multiline && a3.unicode === b2.unicode;
      }
    };
    function deepEquals(a3, b2) {
      for (var key in a3) {
        if (!equals3(a3[key], b2[key])) {
          return false;
        }
      }
      return true;
    }
    function equals3(a3, b2) {
      if (isSame(a3, b2)) {
        return true;
      }
      if (!isSameType(a3, b2)) {
        return false;
      }
      if (hasAlg("equals", a3)) {
        return (b2[fl.equals] || b2.equals).call(b2, a3);
      }
      return (strats[type3(a3)] || comp)(a3, b2);
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
    function isEmpty3(x2) {
      if (isMonoid(x2)) {
        var empty4 = x2.constructor[fl["empty"]] || x2.constructor["empty"] || x2["empty"];
        return equals3(x2, empty4());
      }
      if (isObject(x2)) {
        return !Object.keys(x2).length;
      }
      if (x2 && x2.length !== void 0) {
        return !x2.length;
      }
      return true;
    }
    module.exports = isEmpty3;
  }
});

// node_modules/crocks/core/isNumber.js
var require_isNumber = __commonJS({
  "node_modules/crocks/core/isNumber.js"(exports, module) {
    function isNumber(x2) {
      return typeof x2 === "number" && !isNaN(x2);
    }
    module.exports = isNumber;
  }
});

// node_modules/crocks/core/isInteger.js
var require_isInteger = __commonJS({
  "node_modules/crocks/core/isInteger.js"(exports, module) {
    var isNumber = require_isNumber();
    function isInteger(x2) {
      return isNumber(x2) && isFinite(x2) && Math.floor(x2) === x2;
    }
    module.exports = isInteger;
  }
});

// node_modules/crocks/core/isNil.js
var require_isNil = __commonJS({
  "node_modules/crocks/core/isNil.js"(exports, module) {
    function isNil3(x2) {
      return x2 == null || x2 !== x2;
    }
    module.exports = isNil3;
  }
});

// node_modules/crocks/predicates/hasProp.js
var require_hasProp = __commonJS({
  "node_modules/crocks/predicates/hasProp.js"(exports, module) {
    var curry3 = require_curry();
    var isDefined = require_isDefined();
    var isEmpty3 = require_isEmpty();
    var isInteger = require_isInteger();
    var isNil3 = require_isNil();
    var isString = require_isString();
    function hasProp(key, x2) {
      if (!(isString(key) && !isEmpty3(key) || isInteger(key))) {
        throw new TypeError(
          "hasProp: Non-empty String or Integer required for first argument"
        );
      }
      if (isNil3(x2)) {
        return false;
      }
      return isDefined(x2[key]);
    }
    module.exports = curry3(hasProp);
  }
});

// node_modules/crocks/core/isFoldable.js
var require_isFoldable = __commonJS({
  "node_modules/crocks/core/isFoldable.js"(exports, module) {
    var hasAlg = require_hasAlg();
    function isFoldable(m3) {
      return !!m3 && hasAlg("reduce", m3);
    }
    module.exports = isFoldable;
  }
});

// node_modules/crocks/predicates/hasProps.js
var require_hasProps = __commonJS({
  "node_modules/crocks/predicates/hasProps.js"(exports, module) {
    var curry3 = require_curry();
    var isDefined = require_isDefined();
    var isEmpty3 = require_isEmpty();
    var isFoldable = require_isFoldable();
    var isInteger = require_isInteger();
    var isNil3 = require_isNil();
    var isString = require_isString();
    var err = "hasProps: First argument must be a Foldable of Non-empty Strings or Integers";
    var isKeyValid = function(key) {
      return isString(key) && !isEmpty3(key) || isInteger(key);
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
      return function(acc, x2) {
        return (acc === null ? true : acc) && fn(x2);
      };
    };
    function hasProps(keys4, x2) {
      if (!isFoldable(keys4)) {
        throw new TypeError(err);
      }
      if (isNil3(x2)) {
        return false;
      }
      var result = keys4.reduce(
        every(hasKey(x2)),
        null
      );
      return result === null || result;
    }
    module.exports = curry3(hasProps);
  }
});

// node_modules/crocks/core/isArray.js
var require_isArray = __commonJS({
  "node_modules/crocks/core/isArray.js"(exports, module) {
    function isArray(x2) {
      return Array.isArray(x2);
    }
    module.exports = isArray;
  }
});

// node_modules/crocks/predicates/hasPropPath.js
var require_hasPropPath = __commonJS({
  "node_modules/crocks/predicates/hasPropPath.js"(exports, module) {
    var curry3 = require_curry();
    var isArray = require_isArray();
    var isDefined = require_isDefined();
    var isEmpty3 = require_isEmpty();
    var isInteger = require_isInteger();
    var isNil3 = require_isNil();
    var isString = require_isString();
    function hasPropPath(keys4, target) {
      if (!isArray(keys4)) {
        throw new TypeError(
          "hasPropPath: Array of Non-empty Strings or Integers required for first argument"
        );
      }
      if (isNil3(target)) {
        return false;
      }
      var value = target;
      for (var i2 = 0; i2 < keys4.length; i2++) {
        var key = keys4[i2];
        if (!(isString(key) && !isEmpty3(key) || isInteger(key))) {
          throw new TypeError(
            "hasPropPath: Array of Non-empty Strings or Integers required for first argument"
          );
        }
        if (isNil3(value)) {
          return false;
        }
        value = value[key];
        if (!isDefined(value)) {
          return false;
        }
      }
      return true;
    }
    module.exports = curry3(hasPropPath);
  }
});

// node_modules/crocks/core/isFunctor.js
var require_isFunctor = __commonJS({
  "node_modules/crocks/core/isFunctor.js"(exports, module) {
    var hasAlg = require_hasAlg();
    function isFunctor(m3) {
      return !!m3 && hasAlg("map", m3);
    }
    module.exports = isFunctor;
  }
});

// node_modules/crocks/core/isAlt.js
var require_isAlt = __commonJS({
  "node_modules/crocks/core/isAlt.js"(exports, module) {
    var hasAlg = require_hasAlg();
    var isFunctor = require_isFunctor();
    function isAlt(m3) {
      return isFunctor(m3) && hasAlg("alt", m3);
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
    function isApply(m3) {
      return isFunctor(m3) && hasAlg("ap", m3);
    }
    module.exports = isApply;
  }
});

// node_modules/crocks/core/isApplicative.js
var require_isApplicative = __commonJS({
  "node_modules/crocks/core/isApplicative.js"(exports, module) {
    var hasAlg = require_hasAlg();
    var isApply = require_isApply();
    function isApplicative(m3) {
      return isApply(m3) && (hasAlg("of", m3) || hasAlg("of", m3.constructor));
    }
    module.exports = isApplicative;
  }
});

// node_modules/crocks/core/isPlus.js
var require_isPlus = __commonJS({
  "node_modules/crocks/core/isPlus.js"(exports, module) {
    var hasAlg = require_hasAlg();
    var isAlt = require_isAlt();
    function isPlus(m3) {
      return isAlt(m3) && (hasAlg("zero", m3) || hasAlg("zero", m3.constructor));
    }
    module.exports = isPlus;
  }
});

// node_modules/crocks/predicates/isAlternative.js
var require_isAlternative = __commonJS({
  "node_modules/crocks/predicates/isAlternative.js"(exports, module) {
    var isApplicative = require_isApplicative();
    var isPlus = require_isPlus();
    function isAlternative(m3) {
      return isPlus(m3) && isApplicative(m3);
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
    function isBifunctor(m3) {
      return isFunctor(m3) && hasAlg("bimap", m3);
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
    function isBichain(m3) {
      return hasAlg("bichain", m3);
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
    function isBoolean(x2) {
      return typeof x2 === "boolean";
    }
    module.exports = isBoolean;
  }
});

// node_modules/crocks/core/isSemigroupoid.js
var require_isSemigroupoid = __commonJS({
  "node_modules/crocks/core/isSemigroupoid.js"(exports, module) {
    var hasAlg = require_hasAlg();
    function isSemigroupoid(m3) {
      return !!m3 && hasAlg("compose", m3);
    }
    module.exports = isSemigroupoid;
  }
});

// node_modules/crocks/predicates/isCategory.js
var require_isCategory = __commonJS({
  "node_modules/crocks/predicates/isCategory.js"(exports, module) {
    var hasAlg = require_hasAlg();
    var isSemigroupoid = require_isSemigroupoid();
    function isCategory(m3) {
      return isSemigroupoid(m3) && (hasAlg("id", m3) || hasAlg("id", m3.constructor));
    }
    module.exports = isCategory;
  }
});

// node_modules/crocks/core/isChain.js
var require_isChain = __commonJS({
  "node_modules/crocks/core/isChain.js"(exports, module) {
    var hasAlg = require_hasAlg();
    var isApply = require_isApply();
    function isChain(m3) {
      return isApply(m3) && hasAlg("chain", m3);
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
    function isContravariant(m3) {
      return !!m3 && hasAlg("contramap", m3);
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
    function isDate2(x2) {
      return Object.prototype.toString.apply(x2) === "[object Date]" && !isNaN(x2.valueOf());
    }
    module.exports = isDate2;
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
    function isExtend(m3) {
      return isFunctor(m3) && hasAlg("extend", m3);
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
    function isFalse(x2) {
      return x2 === false;
    }
    module.exports = isFalse;
  }
});

// node_modules/crocks/predicates/isFalsy.js
var require_isFalsy = __commonJS({
  "node_modules/crocks/predicates/isFalsy.js"(exports, module) {
    function isFalsy(x2) {
      return !x2;
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
    var isNil3 = require_isNil();
    function isIterable(iterable) {
      return !isNil3(iterable) && isFunction(iterable[Symbol.iterator]);
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
    function isMap(x2) {
      return x2 instanceof Map;
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
    function isMonad(m3) {
      return isApplicative(m3) && hasAlg("chain", m3);
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
    function isProfunctor(m3) {
      return isContravariant(m3) && isFunctor(m3) && hasAlg("promap", m3);
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
    var curry3 = require_curry();
    var isSame = require_isSame();
    module.exports = curry3(isSame);
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
    function isSetoid(m3) {
      return !!m3 && hasAlg("equals", m3);
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
    function isSymbol(x2) {
      return typeof x2 === "symbol";
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
    function isTraversable(m3) {
      return isFunctor(m3) && hasAlg("traverse", m3);
    }
    module.exports = isTraversable;
  }
});

// node_modules/crocks/predicates/isTrue.js
var require_isTrue = __commonJS({
  "node_modules/crocks/predicates/isTrue.js"(exports, module) {
    function isTrue(x2) {
      return x2 === true;
    }
    module.exports = isTrue;
  }
});

// node_modules/crocks/predicates/isTruthy.js
var require_isTruthy = __commonJS({
  "node_modules/crocks/predicates/isTruthy.js"(exports, module) {
    function isTruthy(x2) {
      return !!x2;
    }
    module.exports = isTruthy;
  }
});

// node_modules/crocks/predicates/pathEq.js
var require_pathEq = __commonJS({
  "node_modules/crocks/predicates/pathEq.js"(exports, module) {
    var curry3 = require_curry();
    var equals3 = require_equals();
    var isArray = require_isArray();
    var isDefined = require_isDefined();
    var isEmpty3 = require_isEmpty();
    var isInteger = require_isInteger();
    var isNil3 = require_isNil();
    var isString = require_isString();
    var err = function(name) {
      return name + ": First argument must be an Array of non-empty Strings or Integers";
    };
    function fn(name) {
      function pathEq4(keys4, value, target) {
        if (!isArray(keys4)) {
          throw new TypeError(err(name));
        }
        if (isNil3(target)) {
          return false;
        }
        var acc = target;
        for (var i2 = 0; i2 < keys4.length; i2++) {
          var key = keys4[i2];
          if (!(isString(key) && !isEmpty3(key) || isInteger(key))) {
            throw new TypeError(err(name));
          }
          if (isNil3(acc)) {
            return false;
          }
          acc = acc[key];
          if (!isDefined(acc)) {
            return false;
          }
        }
        return equals3(acc, value);
      }
      return curry3(pathEq4);
    }
    var pathEq3 = fn("pathEq");
    pathEq3.origFn = fn;
    module.exports = pathEq3;
  }
});

// node_modules/crocks/predicates/pathSatisfies.js
var require_pathSatisfies = __commonJS({
  "node_modules/crocks/predicates/pathSatisfies.js"(exports, module) {
    var curry3 = require_curry();
    var isArray = require_isArray();
    var isEmpty3 = require_isEmpty();
    var isInteger = require_isInteger();
    var isNil3 = require_isNil();
    var isPredOrFunc = require_isPredOrFunc();
    var isString = require_isString();
    var predOrFunc = require_predOrFunc();
    var err = function(name) {
      return name + ": First argument must be an Array of non-empty Strings or Integers";
    };
    function fn(name) {
      function pathSatisfies4(keys4, pred, x2) {
        if (!isArray(keys4)) {
          throw new TypeError(err(name));
        }
        if (!isPredOrFunc(pred)) {
          throw new TypeError(
            name + ": Second argument must be a Pred or predicate Function"
          );
        }
        if (isNil3(x2)) {
          return false;
        }
        var target = x2;
        for (var i2 = 0; i2 < keys4.length; i2++) {
          var key = keys4[i2];
          if (!(isString(key) && !isEmpty3(key) || isInteger(key))) {
            throw new TypeError(err(name));
          }
          if (isNil3(target)) {
            return false;
          }
          target = target[key];
        }
        return !!predOrFunc(pred, target);
      }
      return curry3(pathSatisfies4);
    }
    var pathSatisfies3 = fn("pathSatisfies");
    pathSatisfies3.origFn = fn;
    module.exports = pathSatisfies3;
  }
});

// node_modules/crocks/predicates/propEq.js
var require_propEq = __commonJS({
  "node_modules/crocks/predicates/propEq.js"(exports, module) {
    var curry3 = require_curry();
    var equals3 = require_equals();
    var isDefined = require_isDefined();
    var isEmpty3 = require_isEmpty();
    var isInteger = require_isInteger();
    var isNil3 = require_isNil();
    var isString = require_isString();
    function propEq3(key, value, x2) {
      if (!(isString(key) && !isEmpty3(key) || isInteger(key))) {
        throw new TypeError(
          "propEq: Non-empty String or Integer required for first argument"
        );
      }
      if (isNil3(x2)) {
        return false;
      }
      var target = x2[key];
      return isDefined(target) && equals3(target, value);
    }
    module.exports = curry3(propEq3);
  }
});

// node_modules/crocks/predicates/propPathEq.js
var require_propPathEq = __commonJS({
  "node_modules/crocks/predicates/propPathEq.js"(exports, module) {
    var pathEq3 = require_pathEq();
    module.exports = pathEq3.origFn("propPathEq");
  }
});

// node_modules/crocks/predicates/propSatisfies.js
var require_propSatisfies = __commonJS({
  "node_modules/crocks/predicates/propSatisfies.js"(exports, module) {
    var curry3 = require_curry();
    var isEmpty3 = require_isEmpty();
    var isInteger = require_isInteger();
    var isNil3 = require_isNil();
    var isPredOrFunc = require_isPredOrFunc();
    var isString = require_isString();
    var predOrFunc = require_predOrFunc();
    function propSatisfies3(key, pred, x2) {
      if (!(isString(key) && !isEmpty3(key) || isInteger(key))) {
        throw new TypeError(
          "propSatisfies: Non-empty String or Integer required for first argument"
        );
      }
      if (!isPredOrFunc(pred)) {
        throw new TypeError(
          "propSatisfies: Pred or predicate function required for second argument"
        );
      }
      return isNil3(x2) ? false : !!predOrFunc(pred, x2[key]);
    }
    module.exports = curry3(propSatisfies3);
  }
});

// node_modules/crocks/predicates/propPathSatisfies.js
var require_propPathSatisfies = __commonJS({
  "node_modules/crocks/predicates/propPathSatisfies.js"(exports, module) {
    var pathSatisfies3 = require_pathSatisfies();
    module.exports = pathSatisfies3.origFn("propPathSatisfies");
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
      return function(test3) {
        return algs.indexOf(test3) !== -1;
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
    var isDate2 = require_isDate();
    function arrayInspect(xs) {
      return xs.length ? xs.map(inspect).reduce(function(a3, x2) {
        return a3 + "," + x2;
      }) : xs;
    }
    function inspect(x2) {
      if (x2 && isFunction(x2.inspect)) {
        return " " + x2.inspect();
      }
      if (isFunction(x2)) {
        return " Function";
      }
      if (isArray(x2)) {
        return " [" + arrayInspect(x2) + " ]";
      }
      if (isObject(x2)) {
        return " { " + Object.keys(x2).reduce(function(acc, key) {
          return acc.concat([key + ":" + inspect(x2[key])]);
        }, []).join(", ") + " }";
      }
      if (isString(x2)) {
        return ' "' + x2 + '"';
      }
      if (isSymbol(x2) || isDate2(x2)) {
        return " " + x2.toString();
      }
      return " " + x2;
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
      return Arrow(function(x2) {
        return x2;
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
        return Arrow(function(x2) {
          return fn(runWith(x2));
        });
      };
      function compose2(method) {
        return function(m3) {
          if (!isSameType(Arrow, m3)) {
            throw new TypeError("Arrow." + method + ": Arrow required");
          }
          return _map2(m3.runWith);
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
          return Arrow(function(x2) {
            return runWith(fn(x2));
          });
        };
      }
      function promap2(method) {
        return function(l, r) {
          if (!isFunction(l) || !isFunction(r)) {
            throw new TypeError("Arrow." + method + ": Functions required for both arguments");
          }
          return Arrow(function(x2) {
            return r(runWith(l(x2)));
          });
        };
      }
      function first() {
        return Arrow(function(x2) {
          if (!isSameType(Pair, x2)) {
            throw TypeError("Arrow.first: Pair required for inner argument");
          }
          return x2.bimap(runWith, function(x3) {
            return x3;
          });
        });
      }
      function second() {
        return Arrow(function(x2) {
          if (!isSameType(Pair, x2)) {
            throw TypeError("Arrow.second: Pair required for inner argument");
          }
          return x2.bimap(function(x3) {
            return x3;
          }, runWith);
        });
      }
      function both3() {
        return Arrow(function(x2) {
          if (!isSameType(Pair, x2)) {
            throw TypeError("Arrow.both: Pair required for inner argument");
          }
          return x2.bimap(runWith, runWith);
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
        both: both3,
        compose: compose2("compose"),
        map: map3("map"),
        contramap: contramap("contramap"),
        promap: promap2("promap")
      }, obj[fl.id] = id, obj[fl.compose] = compose2(fl.compose), obj[fl.map] = map3(fl.map), obj[fl.contramap] = contramap(fl.contramap), obj[fl.promap] = promap2(fl.promap), obj["@@type"] = _type, obj.constructor = Arrow, obj;
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
    var isTypeRepOf = function(x2, y3) {
      return isFunction(y3) && (x2 === y3 || x2.name === y3.name);
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
      return function(x2) {
        return isApplicative(af) ? af.of(x2) : isTypeRepOf(Array, af) ? [x2] : af(x2);
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
    var isEmpty3 = require_isEmpty();
    var isFunction = require_isFunction();
    var isSameType = require_isSameType();
    var isSemigroup = require_isSemigroup();
    var apOrFunc = require_apOrFunc();
    var identity2 = function(x2) {
      return x2;
    };
    var concat3 = function(x2) {
      return function(m3) {
        return x2.concat(m3);
      };
    };
    function runTraverse(name, fn) {
      return function(acc, x2) {
        var m3 = fn(x2);
        if (!((isApply(acc) || isArray(acc)) && isSameType(acc, m3))) {
          throw new TypeError("Array." + name + ": Must wrap Applys of the same type");
        }
        if (isArray(m3)) {
          return ap3(acc, map3(function(v) {
            return concat3([v]);
          }, m3));
        }
        return m3.map(function(v) {
          return concat3([v]);
        }).ap(acc);
      };
    }
    var allFuncs = function(xs) {
      return xs.reduce(function(b2, i2) {
        return b2 && isFunction(i2);
      }, true);
    };
    var map3 = function(f, m3) {
      return m3.map(function(x2) {
        return f(x2);
      });
    };
    function ap3(x2, m3) {
      if (!(m3.length && allFuncs(m3))) {
        throw new TypeError("Array.ap: Second Array must all be functions");
      }
      return m3.reduce(function(acc, f) {
        return acc.concat(map3(f, x2));
      }, []);
    }
    function chain3(f, m3) {
      return m3.reduce(function(y3, x2) {
        var n2 = f(x2);
        if (!isArray(n2)) {
          throw new TypeError("Array.chain: Function must return an Array");
        }
        return y3.concat(n2);
      }, []);
    }
    function sequence3(f, m3) {
      var fn = apOrFunc(f);
      return m3.reduceRight(runTraverse("sequence", identity2), fn([]));
    }
    function traverse3(f, fn, m3) {
      var af = apOrFunc(f);
      return m3.reduceRight(runTraverse("traverse", fn), af([]));
    }
    function fold(m3) {
      if (isEmpty3(m3)) {
        throw new TypeError(
          "Array.fold: Non-empty Array of Semigroups required"
        );
      }
      var head2 = m3[0];
      if (!isSemigroup(head2)) {
        throw new TypeError("Array.fold: Must contain Semigroups of the same type");
      }
      return m3.reduce(function(x2, y3) {
        if (!isSameType(x2, y3)) {
          throw new TypeError("Array.fold: Must contain Semigroups of the same type");
        }
        return x2.concat(y3);
      });
    }
    function foldMap(fn, m3) {
      if (isEmpty3(m3)) {
        throw new TypeError(
          "Array.foldMap: Non-empty Array required"
        );
      }
      var head2 = fn(m3[0]);
      if (!isSemigroup(head2)) {
        throw new TypeError(
          "Array.foldMap: Provided function must return Semigroups of the same type"
        );
      }
      return m3.length === 1 ? head2 : m3.slice(1).reduce(function(semi, x2) {
        var val = fn(x2);
        if (!(isSameType(semi, val) && isSemigroup(val))) {
          throw new TypeError(
            "Array.foldMap: Provided function must return Semigroups of the same type"
          );
        }
        return semi.concat(val);
      }, head2);
    }
    function set3(indx, val, m3) {
      var arr = m3.slice();
      arr[indx] = val;
      return arr;
    }
    function unset(indx, m3) {
      return m3.slice(0, indx).concat(m3.slice(indx + 1));
    }
    module.exports = {
      ap: ap3,
      chain: chain3,
      fold,
      foldMap,
      map: map3,
      sequence: sequence3,
      set: set3,
      traverse: traverse3,
      unset
    };
  }
});

// node_modules/crocks/core/once.js
var require_once = __commonJS({
  "node_modules/crocks/core/once.js"(exports, module) {
    function once3(fn) {
      var called, result;
      return function() {
        if (!called) {
          called = true;
          result = fn.apply(null, arguments);
        }
        return result;
      };
    }
    module.exports = once3;
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
    var once3 = require_once();
    var unit = require_unit();
    var isArray = require_isArray();
    var isFoldable = require_isFoldable();
    var isFunction = require_isFunction();
    var isInteger = require_isInteger();
    var isPromise = require_isPromise();
    var isSameType = require_isSameType();
    var allAsyncs = function(xs) {
      return xs.reduce(function(acc, x2) {
        return acc && isSameType(Async2, x2);
      }, true);
    };
    var _of2 = function(x2) {
      return Async2(function(_2, resolve) {
        return resolve(x2);
      });
    };
    var Rejected = function(x2) {
      return Async2(function(reject3) {
        return reject3(x2);
      });
    };
    function all3(asyncs) {
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
        return Async2(function(reject3, resolve) {
          fn.apply(
            ctx,
            args.concat(
              function(err, data) {
                return err ? reject3(err) : resolve(data);
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
        return Async2(function(reject3, resolve) {
          var promise = fn.apply(null, promiseArgs);
          if (!isPromise(promise)) {
            throw new TypeError("Async.fromPromise: Promise returning function required");
          }
          promise.then(resolve, reject3);
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
      return Async2(function(_2, res) {
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
      var of3 = _of2;
      var inspect = function() {
        return "Async" + _inspect(fn);
      };
      function fork(reject3, resolve, cleanup) {
        if (!isFunction(reject3) || !isFunction(resolve)) {
          throw new TypeError("Async.fork: Reject and resolve functions required");
        }
        var cancelled = false;
        var settled = false;
        var cancel = function() {
          cancelled = true;
        };
        var forkCancel = isFunction(cleanup) ? cleanup : unit;
        var settle = function(f, x2) {
          if (!settled) {
            settled = true;
            if (cancelled) {
              return unit();
            }
            return f(x2);
          }
        };
        var internal = fn(
          settle.bind(null, reject3),
          settle.bind(null, resolve)
        );
        var internalFn = isFunction(internal) ? internal : unit;
        return once3(function() {
          return forkCancel(cancel(internalFn()));
        });
      }
      function toPromise() {
        return new Promise(function(resolve, reject3) {
          fork(reject3, resolve);
        });
      }
      function race(m3) {
        if (!isSameType(Async2, m3)) {
          throw new TypeError("Async.race: Async required");
        }
        return Async2(function(reject3, resolve) {
          var settle = once3(
            function(resolved, value) {
              return resolved ? resolve(value) : reject3(value);
            }
          );
          var res = settle.bind(null, true);
          var rej = settle.bind(null, false);
          var cancelOne = fork(rej, res);
          var cancelTwo = m3.fork(rej, res);
          return function() {
            cancelOne();
            cancelTwo();
          };
        });
      }
      function swap(l, r) {
        if (!isFunction(l) || !isFunction(r)) {
          throw new TypeError("Async.swap: Functions required for both arguments");
        }
        return Async2(function(reject3, resolve) {
          return fork(
            compose2(resolve, l),
            compose2(reject3, r)
          );
        });
      }
      function coalesce(l, r) {
        if (!isFunction(l) || !isFunction(r)) {
          throw new TypeError("Async.coalesce: Functions required for both arguments");
        }
        return Async2(function(reject3, resolve) {
          return fork(
            compose2(resolve, l),
            compose2(resolve, r)
          );
        });
      }
      function map3(method) {
        return function(mapFn) {
          if (!isFunction(mapFn)) {
            throw new TypeError("Async." + method + ": Function required");
          }
          return Async2(function(reject3, resolve) {
            return fork(reject3, compose2(resolve, mapFn));
          });
        };
      }
      function bimap(method) {
        return function(l, r) {
          if (!isFunction(l) || !isFunction(r)) {
            throw new TypeError("Async." + method + ": Functions required for both arguments");
          }
          return Async2(function(reject3, resolve) {
            return fork(
              compose2(reject3, l),
              compose2(resolve, r)
            );
          });
        };
      }
      function alt(method) {
        return function(m3) {
          if (!isSameType(Async2, m3)) {
            throw new TypeError("Async." + method + ": Async required");
          }
          return Async2(function(rej, res) {
            var cancel = unit;
            var innerCancel = unit;
            cancel = fork(
              function() {
                innerCancel = m3.fork(rej, res);
              },
              res
            );
            return once3(function() {
              return innerCancel(cancel());
            });
          });
        };
      }
      function ap3(m3) {
        if (!isSameType(Async2, m3)) {
          throw new TypeError("Async.ap: Async required");
        }
        return Async2(function(reject3, resolve) {
          var apFn = null;
          var value = null;
          var fnDone = false;
          var valueDone = false;
          var cancelled = false;
          var cancel = function() {
            cancelled = true;
          };
          var rejectOnce = once3(reject3);
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
          var valueCancel = m3.fork(rejectOnce, function(x2) {
            valueDone = true;
            value = x2;
            resolveBoth();
          });
          return function() {
            fnCancel();
            valueCancel();
            cancel();
          };
        });
      }
      function chain3(method) {
        return function(mapFn) {
          if (!isFunction(mapFn)) {
            throw new TypeError(
              "Async." + method + ": Async returning function required"
            );
          }
          return Async2(function(reject3, resolve) {
            var cancel = unit;
            var innerCancel = unit;
            cancel = fork(reject3, function(x2) {
              var m3 = mapFn(x2);
              if (!isSameType(Async2, m3)) {
                throw new TypeError(
                  "Async." + method + ": Function must return another Async"
                );
              }
              innerCancel = m3.fork(reject3, resolve);
            });
            return once3(function() {
              return innerCancel(cancel());
            });
          });
        };
      }
      function bichain(l, r) {
        var bichainErr = "Async.bichain: Both arguments must be Async returning functions";
        if (!isFunction(l) || !isFunction(r)) {
          throw new TypeError(bichainErr);
        }
        return Async2(function(rej, res) {
          var cancel = unit;
          var innerCancel = unit;
          function setInnerCancel(mapFn) {
            return function(x2) {
              var m3 = mapFn(x2);
              if (!isSameType(Async2, m3)) {
                throw new TypeError(bichainErr);
              }
              innerCancel = m3.fork(rej, res);
            };
          }
          cancel = fork(setInnerCancel(l), setInnerCancel(r));
          return once3(function() {
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
        ap: ap3,
        of: of3,
        alt: alt("alt"),
        bimap: bimap("bimap"),
        map: map3("map"),
        chain: chain3("chain"),
        bichain
      }, obj[fl.of] = of3, obj[fl.alt] = alt(fl.alt), obj[fl.bimap] = bimap(fl.bimap), obj[fl.map] = map3(fl.map), obj[fl.chain] = chain3(fl.chain), obj["@@type"] = _type, obj.constructor = Async2, obj;
    }
    Async2.of = _of2;
    Async2.type = type3;
    Async2[fl.of] = _of2;
    Async2["@@type"] = _type;
    Async2.Rejected = Rejected;
    Async2.Resolved = _of2;
    Async2.fromPromise = fromPromise;
    Async2.fromNode = fromNode;
    Async2.all = all3;
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
    var typeOrName = function(m3) {
      return isFunction(m3.type) ? m3.type() : m3.name;
    };
    var constant = function(x2) {
      return function() {
        return x2;
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
    var getEmpty = function(T3) {
      return T3[fl.empty] || T3.empty || empties[T3.name];
    };
    var validMonoid = function(T3) {
      return isMonoid(T3) || T3.name === "String" || T3.name === "Array";
    };
    function _Const(T3) {
      if (!isFunction(T3)) {
        throw new TypeError("Const: TypeRep required for construction");
      }
      var type3 = constant(_type(typeOrName(T3)));
      var typeString = typeFn("Const", VERSION, typeOrName(T3));
      function empty4(method) {
        return function() {
          if (!validMonoid(T3)) {
            throw new TypeError(type3() + "." + method + ": Must be fixed to a Monoid");
          }
          return Const2(getEmpty(T3)());
        };
      }
      function of3(method) {
        return function() {
          if (!validMonoid(T3)) {
            throw new TypeError(type3() + "." + method + ": Must be fixed to a Monoid");
          }
          return Const2(getEmpty(T3)());
        };
      }
      function Const2(value) {
        var obj;
        if (!isSameType(T3, value)) {
          throw new TypeError(type3() + ": " + typeOrName(T3) + " required");
        }
        var inspect = constant("" + type3() + _inspect(value));
        var valueOf = constant(value);
        var equals3 = function(m3) {
          return isSameType(Const2, m3) && _equals2(value, m3.valueOf());
        };
        function concat3(method) {
          return function(m3) {
            if (!isSemigroup(value)) {
              throw new TypeError(type3() + "." + method + ": Must be fixed to a Semigroup");
            }
            if (!isSameType(Const2, m3)) {
              throw new TypeError(type3() + "." + method + ": " + type3() + " required");
            }
            return Const2(value.concat(m3.valueOf()));
          };
        }
        function map3(method) {
          return function(fn) {
            if (!isFunction(fn)) {
              throw new TypeError(type3() + "." + method + ": Function required");
            }
            return Const2(value);
          };
        }
        function ap3(m3) {
          if (!isSemigroup(value)) {
            throw new TypeError(type3() + ".ap: Must be fixed to a Semigroup");
          }
          if (!isSameType(Const2, m3)) {
            throw new TypeError(type3() + ".ap: " + type3() + " required");
          }
          return Const2(value.concat(m3.valueOf()));
        }
        return obj = {
          inspect,
          toString: inspect,
          valueOf,
          type: type3,
          ap: ap3,
          equals: equals3,
          concat: concat3("concat"),
          empty: empty4("empty"),
          map: map3("map"),
          of: of3("of")
        }, obj[fl.concat] = concat3(fl.concat), obj[fl.empty] = empty4(fl.empty), obj[fl.equals] = equals3, obj[fl.map] = map3(fl.map), obj[fl.of] = of3(fl.of), obj["@@type"] = typeString, obj.constructor = Const2, obj;
      }
      Const2.empty = empty4("empty");
      Const2.of = of3("of");
      Const2.type = type3;
      Const2[fl.empty] = empty4(fl.empty);
      Const2[fl.of] = of3(fl.of);
      Const2["@@type"] = typeString;
      Const2["@@implements"] = _implements(
        ["ap", "concat", "empty", "equals", "map", "of"]
      );
      return Const2;
    }
    module.exports = _Const;
  }
});

// node_modules/crocks/core/defineUnion.js
var require_defineUnion = __commonJS({
  "node_modules/crocks/core/defineUnion.js"(exports, module) {
    var curry3 = require_curry();
    var isArray = require_isArray();
    var isEmpty3 = require_isEmpty();
    var isFunction = require_isFunction();
    var isObject = require_isObject();
    var isString = require_isString();
    var constant = function(x2) {
      return function() {
        return x2;
      };
    };
    var isDefinition = function(x2) {
      return isString(x2) && x2.length;
    };
    function caseOf(defs) {
      return function(cases, m3) {
        var tag = m3.tag;
        var def = defs[tag()];
        var args = def.reduce(
          function(xs, x2) {
            return xs.concat([m3[x2].value()]);
          },
          []
        );
        return cases[tag()].apply(null, args);
      };
    }
    var includes2 = function(defs) {
      return function(m3) {
        return !!m3 && isFunction(m3.tag) && Object.keys(defs).indexOf(m3.tag()) !== -1;
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
      if (!isObject(defs) || isEmpty3(defs)) {
        throw new TypeError("defineUnion: Argument must be an Object containing definition lists");
      }
      return Object.keys(defs).reduce(function(obj, tag) {
        var def = defs[tag];
        if (!isArray(def) || !def.reduce(function(x2, y3) {
          return x2 && isDefinition(y3);
        }, true)) {
          throw new TypeError("defineUnion: Definitions must be a list of non-empty string identifiers");
        }
        obj[tag] = construction(def, tag);
        return obj;
      }, { caseOf: curry3(caseOf(defs)), includes: curry3(includes2(defs)) });
    }
    module.exports = defineUnion;
  }
});

// node_modules/crocks/core/innerConcat.js
var require_innerConcat = __commonJS({
  "node_modules/crocks/core/innerConcat.js"(exports, module) {
    var isSameType = require_isSameType();
    var isSemigroup = require_isSemigroup();
    function innerConcat(method, m3) {
      return function(left) {
        if (!isSemigroup(left)) {
          throw new TypeError(method + ": Both containers must contain Semigroups of the same type");
        }
        return m3.map(function(right) {
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
    var constant = function(x2) {
      return function() {
        return x2;
      };
    };
    var _either = _defineUnion({ Left: ["a"], Right: ["b"] });
    var Left = _either.Left;
    var Right = _either.Right;
    Either.Left = compose2(Either, Left);
    Either.Right = compose2(Either, Right);
    var _of2 = Either.Right;
    function runSequence(x2) {
      if (!(isApply(x2) || isArray(x2))) {
        throw new TypeError("Either.sequence: Must wrap an Apply");
      }
      return x2.map(_of2);
    }
    function Either(u2) {
      var obj;
      if (!arguments.length) {
        throw new TypeError("Either: Must wrap something, try using Left or Right constructors");
      }
      var x2 = !_either.includes(u2) ? Right(u2) : u2;
      var equals3 = function(m3) {
        return isSameType(Either, m3) && either3(
          function(x3) {
            return m3.either(function(y3) {
              return _equals2(y3, x3);
            }, constant(false));
          },
          function(x3) {
            return m3.either(constant(false), function(y3) {
              return _equals2(y3, x3);
            });
          }
        );
      };
      var of3 = _of2;
      var inspect = function() {
        return either3(
          function(l) {
            return "Left" + _inspect(l);
          },
          function(r) {
            return "Right" + _inspect(r);
          }
        );
      };
      function either3(f, g2) {
        if (!isFunction(f) || !isFunction(g2)) {
          throw new TypeError("Either.either: Requires both left and right functions");
        }
        return _either.caseOf({
          Left: f,
          Right: g2
        }, x2);
      }
      function concat3(method) {
        return function(m3) {
          if (!isSameType(Either, m3)) {
            throw new TypeError("Either." + method + ": Either of Semigroup required");
          }
          return either3(
            Either.Left,
            _innerConcat("Either." + method, m3)
          );
        };
      }
      function swap(f, g2) {
        if (!isFunction(f) || !isFunction(g2)) {
          throw new TypeError("Either.swap: Requires both left and right functions");
        }
        return either3(
          compose2(Either.Right, f),
          compose2(Either.Left, g2)
        );
      }
      function coalesce(f, g2) {
        if (!isFunction(f) || !isFunction(g2)) {
          throw new TypeError("Either.coalesce: Requires both left and right functions");
        }
        return Either.Right(either3(f, g2));
      }
      function bichain(l, r) {
        var bichainErr = "Either.bichain: Both arguments must be Either returning functions";
        if (!(isFunction(l) && isFunction(r))) {
          throw new TypeError(bichainErr);
        }
        var m3 = either3(l, r);
        if (!isSameType(Either, m3)) {
          throw new TypeError(bichainErr);
        }
        return m3;
      }
      function map3(method) {
        return function(fn) {
          if (!isFunction(fn)) {
            throw new TypeError("Either." + method + ": Function required");
          }
          return either3(Either.Left, compose2(Either.Right, fn));
        };
      }
      function bimap(method) {
        return function(f, g2) {
          if (!isFunction(f) || !isFunction(g2)) {
            throw new TypeError("Either." + method + ": Requires both left and right functions");
          }
          return either3(
            compose2(Either.Left, f),
            compose2(Either.Right, g2)
          );
        };
      }
      function alt(method) {
        return function(m3) {
          if (!isSameType(Either, m3)) {
            throw new TypeError("Either." + method + ": Either required");
          }
          return either3(
            constant(m3),
            Either.Right
          );
        };
      }
      function ap3(m3) {
        if (!either3(constant(true), isFunction)) {
          throw new TypeError("Either.ap: Wrapped value must be a function");
        } else if (!either3(constant(true), constant(isSameType(Either, m3)))) {
          throw new TypeError("Either.ap: Either required");
        }
        return either3(
          Either.Left,
          function(fn) {
            return m3.map(fn);
          }
        );
      }
      function chain3(method) {
        return function(fn) {
          if (!isFunction(fn)) {
            throw new TypeError("Either." + method + ": Function required");
          }
          var m3 = either3(Either.Left, fn);
          if (!isSameType(Either, m3)) {
            throw new TypeError("Either." + method + ": Function must return an Either");
          }
          return m3;
        };
      }
      function sequence3(f) {
        if (!(isApplicative(f) || isFunction(f))) {
          throw new TypeError(
            "Either.sequence: Applicative TypeRep or Apply returning function required"
          );
        }
        var af = apOrFunc(f);
        return either3(
          compose2(af, Either.Left),
          runSequence
        );
      }
      function traverse3(f, fn) {
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
        var m3 = either3(compose2(af, Either.Left), fn);
        if (!(isApply(m3) || isArray(m3))) {
          throw new TypeError(
            "Either.traverse: Both functions must return an Apply of the same type"
          );
        }
        return either3(
          constant(m3),
          constant(m3.map(_of2))
        );
      }
      return obj = {
        inspect,
        toString: inspect,
        either: either3,
        type: type3,
        swap,
        coalesce,
        bichain,
        equals: equals3,
        ap: ap3,
        of: of3,
        sequence: sequence3,
        traverse: traverse3,
        alt: alt("alt"),
        bimap: bimap("bimap"),
        concat: concat3("concat"),
        chain: chain3("chain"),
        map: map3("map")
      }, obj[fl.of] = of3, obj[fl.equals] = equals3, obj[fl.alt] = alt(fl.alt), obj[fl.bimap] = bimap(fl.bimap), obj[fl.concat] = concat3(fl.concat), obj[fl.map] = map3(fl.map), obj[fl.chain] = chain3(fl.chain), obj["@@type"] = _type, obj.constructor = Either, obj;
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
    var curry3 = require_curry();
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
      var compareWith = curry3(
        function(x2, y3) {
          return !!compare(x2, y3);
        }
      );
      var inspect = function() {
        return "Equiv" + _inspect(compare);
      };
      var empty4 = _empty;
      var valueOf = function() {
        return compareWith;
      };
      function contramap(method) {
        return function(fn) {
          if (!isFunction(fn)) {
            throw new TypeError("Equiv." + method + ": Function required");
          }
          return Equiv(
            function(x2, y3) {
              return compareWith(fn(x2), fn(y3));
            }
          );
        };
      }
      function concat3(method) {
        return function(m3) {
          if (!isSameType(Equiv, m3)) {
            throw new TypeError("Equiv." + method + ": Equiv required");
          }
          return Equiv(
            function(x2, y3) {
              return compareWith(x2, y3) && m3.compareWith(x2, y3);
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
        empty: empty4,
        concat: concat3("concat"),
        contramap: contramap("contramap")
      }, obj[fl.empty] = empty4, obj[fl.concat] = concat3(fl.concat), obj[fl.contramap] = contramap(fl.contramap), obj["@@type"] = _type, obj.constructor = Equiv, obj;
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
    var _of2 = Identity2;
    function Identity2(x2) {
      var obj;
      if (!arguments.length) {
        throw new TypeError("Identity: Must wrap something");
      }
      var valueOf = function() {
        return x2;
      };
      var of3 = _of2;
      var equals3 = function(m3) {
        return isSameType(Identity2, m3) && _equals2(x2, m3.valueOf());
      };
      var inspect = function() {
        return "Identity" + _inspect(x2);
      };
      function concat3(method) {
        return function(m3) {
          if (!isSameType(Identity2, m3)) {
            throw new TypeError("Identity." + method + ": Identity of Semigroup required");
          }
          return _innerConcat("Identity." + method, m3)(x2);
        };
      }
      function map3(method) {
        return function(fn) {
          if (!isFunction(fn)) {
            throw new TypeError("Identity." + method + ": Function required");
          }
          return Identity2(fn(x2));
        };
      }
      function ap3(m3) {
        if (!isFunction(x2)) {
          throw new TypeError("Identity.ap: Wrapped value must be a function");
        } else if (!isSameType(Identity2, m3)) {
          throw new TypeError("Identity.ap: Identity required");
        }
        return m3.map(x2);
      }
      function chain3(method) {
        return function(fn) {
          if (!isFunction(fn)) {
            throw new TypeError("Identity." + method + ": Function required");
          }
          var m3 = fn(x2);
          if (!isSameType(Identity2, m3)) {
            throw new TypeError("Identity." + method + ": Function must return an Identity");
          }
          return m3;
        };
      }
      function sequence3(f) {
        if (!(isApplicative(f) || isFunction(f))) {
          throw new TypeError(
            "Identity.sequence: Applicative TypeRep or Apply returning function required"
          );
        }
        if (!(isApply(x2) || isArray(x2))) {
          throw new TypeError("Identity.sequence: Must wrap an Apply");
        }
        return x2.map(_of2);
      }
      function traverse3(f, fn) {
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
        var m3 = fn(x2);
        if (!(isApply(m3) || isArray(m3))) {
          throw new TypeError(
            "Identity.traverse: Both functions must return an Apply of the same type"
          );
        }
        return m3.map(_of2);
      }
      return obj = {
        inspect,
        toString: inspect,
        valueOf,
        type: type3,
        equals: equals3,
        ap: ap3,
        of: of3,
        sequence: sequence3,
        traverse: traverse3,
        concat: concat3("concat"),
        map: map3("map"),
        chain: chain3("chain")
      }, obj[fl.of] = of3, obj[fl.equals] = equals3, obj[fl.concat] = concat3(fl.concat), obj[fl.map] = map3(fl.map), obj[fl.chain] = chain3(fl.chain), obj["@@type"] = _type, obj.constructor = Identity2, obj;
    }
    Identity2.of = _of2;
    Identity2.type = type3;
    Identity2[fl.of] = _of2;
    Identity2["@@type"] = _type;
    Identity2["@@implements"] = _implements(
      ["ap", "chain", "concat", "equals", "map", "of", "traverse"]
    );
    module.exports = Identity2;
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
    var _of2 = function(x2) {
      return IO(function() {
        return x2;
      });
    };
    function IO(run3) {
      var obj;
      if (!isFunction(run3)) {
        throw new TypeError("IO: Must wrap a function");
      }
      var of3 = _of2;
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
      function ap3(m3) {
        if (!isSameType(IO, m3)) {
          throw new TypeError("IO.ap: IO required");
        }
        return IO(function() {
          var fn = run3();
          if (!isFunction(fn)) {
            throw new TypeError("IO.ap: Wrapped value must be a function");
          }
          return m3.map(fn).run();
        });
      }
      function chain3(method) {
        return function(fn) {
          if (!isFunction(fn)) {
            throw new TypeError("IO." + method + ": Function required");
          }
          return IO(function() {
            var m3 = fn(run3());
            if (!isSameType(IO, m3)) {
              throw new TypeError("IO." + method + ": Function must return an IO");
            }
            return m3.run();
          });
        };
      }
      return obj = {
        inspect,
        toString: inspect,
        run: run3,
        type: type3,
        ap: ap3,
        of: of3,
        map: map3("map"),
        chain: chain3("chain")
      }, obj[fl.of] = of3, obj[fl.map] = map3(fl.map), obj[fl.chain] = chain3(fl.chain), obj["@@type"] = _type, obj.constructor = IO, obj;
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
    var constant = function(x2) {
      return function() {
        return x2;
      };
    };
    var identity2 = function(x2) {
      return x2;
    };
    var _maybe = _defineUnion({ Nothing: [], Just: ["a"] });
    var Nothing = _maybe.Nothing;
    var Just = _maybe.Just;
    Maybe.Nothing = compose2(Maybe, Nothing);
    Maybe.Just = compose2(Maybe, Just);
    var _of2 = compose2(Maybe, Just);
    var _zero = compose2(Maybe, Nothing);
    function runSequence(x2) {
      if (!(isApply(x2) || isArray(x2))) {
        throw new TypeError(
          "Maybe.sequence: Must wrap an Apply"
        );
      }
      return x2.map(_of2);
    }
    function Maybe(u2) {
      var obj;
      if (!arguments.length) {
        throw new TypeError("Maybe: Must wrap something, try using Nothing or Just constructors");
      }
      var x2 = !_maybe.includes(u2) ? Just(u2) : u2;
      var of3 = _of2;
      var zero = _zero;
      var option = function(n2) {
        return either3(constant(n2), identity2);
      };
      var equals3 = function(m3) {
        return isSameType(Maybe, m3) && either3(
          constant(m3.either(constant(true), constant(false))),
          function(x3) {
            return m3.either(constant(false), function(y3) {
              return _equals2(y3, x3);
            });
          }
        );
      };
      var inspect = function() {
        return either3(
          constant("Nothing"),
          function(x3) {
            return "Just" + _inspect(x3);
          }
        );
      };
      function either3(f, g2) {
        if (!isFunction(f) || !isFunction(g2)) {
          throw new TypeError("Maybe.either: Requires both left and right functions");
        }
        return _maybe.caseOf({
          Nothing: f,
          Just: g2
        }, x2);
      }
      function concat3(method) {
        return function(m3) {
          if (!isSameType(Maybe, m3)) {
            throw new TypeError("Maybe." + method + ": Maybe of Semigroup required");
          }
          return either3(
            Maybe.Nothing,
            _innerConcat("Maybe." + method, m3)
          );
        };
      }
      function coalesce(f, g2) {
        if (!isFunction(f) || !isFunction(g2)) {
          throw new TypeError("Maybe.coalesce: Requires both left and right functions");
        }
        return Maybe.Just(either3(f, g2));
      }
      function bichain(l, r) {
        var bichainErr = "Maybe.bichain: Both arguments must be Maybe returning functions";
        if (!(isFunction(l) && isFunction(r))) {
          throw new TypeError(bichainErr);
        }
        var m3 = either3(l, r);
        if (!isSameType(Maybe, m3)) {
          throw new TypeError(bichainErr);
        }
        return m3;
      }
      function map3(method) {
        return function(fn) {
          if (!isFunction(fn)) {
            throw new TypeError("Maybe." + method + ": Function required");
          }
          return either3(
            Maybe.Nothing,
            compose2(Maybe.Just, fn)
          );
        };
      }
      function alt(method) {
        return function(m3) {
          if (!isSameType(Maybe, m3)) {
            throw new TypeError("Maybe." + method + ": Maybe required");
          }
          return either3(
            constant(m3),
            Maybe.Just
          );
        };
      }
      function ap3(m3) {
        var fn = option(constant(void 0));
        if (!isFunction(fn)) {
          throw new TypeError("Maybe.ap: Wrapped value must be a function");
        } else if (!isSameType(Maybe, m3)) {
          throw new TypeError("Maybe.ap: Maybe required");
        }
        return either3(
          Maybe.Nothing,
          m3.map
        );
      }
      function chain3(method) {
        return function(fn) {
          if (!isFunction(fn)) {
            throw new TypeError("Maybe." + method + ": Function required");
          }
          var m3 = either3(Maybe.Nothing, fn);
          if (!isSameType(Maybe, m3)) {
            throw new TypeError("Maybe." + method + ": Function must return a Maybe");
          }
          return m3;
        };
      }
      function sequence3(f) {
        if (!(isApplicative(f) || isFunction(f))) {
          throw new TypeError(
            "Maybe.sequence: Applicative TypeRep or Apply returning function required"
          );
        }
        var af = apOrFunc(f);
        return either3(
          compose2(af, Maybe.Nothing),
          runSequence
        );
      }
      function traverse3(f, fn) {
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
        var m3 = either3(compose2(af, Maybe.Nothing), fn);
        if (!(isApply(m3) || isArray(m3))) {
          throw new TypeError(
            "Maybe.traverse: Both functions must return an Apply of the same type"
          );
        }
        return either3(
          constant(m3),
          constant(m3.map(_of2))
        );
      }
      return obj = {
        inspect,
        toString: inspect,
        either: either3,
        option,
        type: type3,
        equals: equals3,
        bichain,
        coalesce,
        zero,
        ap: ap3,
        of: of3,
        sequence: sequence3,
        traverse: traverse3,
        alt: alt("alt"),
        chain: chain3("chain"),
        concat: concat3("concat"),
        map: map3("map")
      }, obj[fl.zero] = zero, obj[fl.of] = of3, obj[fl.equals] = equals3, obj[fl.alt] = alt(fl.alt), obj[fl.concat] = concat3(fl.concat), obj[fl.map] = map3(fl.map), obj[fl.chain] = chain3(fl.chain), obj["@@type"] = _type, obj.constructor = Maybe, obj;
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
    var isEmpty3 = require_isEmpty();
    var isFunction = require_isFunction();
    var isPredOrFunc = require_isPredOrFunc();
    var isSameType = require_isSameType();
    var isSemigroup = require_isSemigroup();
    var predOrFunc = require_predOrFunc();
    var not3 = function(fn) {
      return function(x2) {
        return !fn(x2);
      };
    };
    var _prepend = function(x2) {
      return function(m3) {
        return x2.concat(m3);
      };
    };
    var ref = require_Maybe();
    var Nothing = ref.Nothing;
    var Just = ref.Just;
    var _of2 = function(x2) {
      return List([x2]);
    };
    var _empty = function() {
      return List([]);
    };
    function fromArray(xs) {
      if (!isArray(xs)) {
        throw new TypeError("List.fromArray: Array required");
      }
      return xs.reduce(function(res, x2) {
        return res.concat(List.of(x2));
      }, List.empty());
    }
    function applyTraverse(x2, y3) {
      if (isArray(x2)) {
        return array.ap(x2, array.map(function(v) {
          return _prepend(List.of(v));
        }, y3));
      }
      return y3.map(function(v) {
        return _prepend(List.of(v));
      }).ap(x2);
    }
    function runSequence(acc, x2) {
      if (!((isApply(acc) || isArray(acc)) && isSameType(acc, x2))) {
        throw new TypeError(
          "List.sequence: Must wrap Applys of the same type"
        );
      }
      return applyTraverse(acc, x2);
    }
    function runTraverse(f) {
      return function(acc, x2) {
        var m3 = f(x2);
        if (!((isApply(acc) || isArray(acc)) && isSameType(acc, m3))) {
          throw new TypeError("List.traverse: Both functions must return an Apply of the same type");
        }
        return applyTraverse(acc, m3);
      };
    }
    function List(x2) {
      var obj;
      if (!arguments.length) {
        throw new TypeError("List: List must wrap something");
      }
      var xs = isArray(x2) ? x2.slice() : [x2];
      function flatMap(method, fn) {
        return function(y3, x3) {
          var m3 = fn(x3);
          if (!isSameType(List, m3)) {
            throw new TypeError("List." + method + ": Function must return a List");
          }
          return y3.concat(m3.valueOf());
        };
      }
      var of3 = _of2;
      var valueOf = function() {
        return xs.slice();
      };
      var toArray = valueOf;
      var empty4 = _empty;
      var inspect = function() {
        return "List" + _inspect(xs);
      };
      var head2 = function() {
        return xs.length ? Just(xs[0]) : Nothing();
      };
      var tail2 = function() {
        return xs.length && xs.length > 1 ? Just(List(xs.slice(1))) : Nothing();
      };
      var cons = function(x3) {
        return List([x3].concat(xs));
      };
      var equals3 = function(m3) {
        return isSameType(List, m3) && _equals2(xs, m3.valueOf());
      };
      function concat3(method) {
        return function(m3) {
          if (!isSameType(List, m3)) {
            throw new TypeError("List." + method + ": List required");
          }
          return List(xs.concat(m3.valueOf()));
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
      function reduceRight3(fn, i2) {
        if (!isFunction(fn)) {
          throw new TypeError("List.reduceRight: Function required for first argument");
        }
        return xs.reduceRight(fn, i2);
      }
      function fold() {
        if (isEmpty3(xs)) {
          throw new TypeError("List.fold: List must contain at least one Semigroup");
        }
        var head3 = xs[0];
        if (!isSemigroup(head3)) {
          throw new TypeError("List.fold: List must contain Semigroups of the same type");
        }
        return xs.reduce(function(x3, y3) {
          if (!isSameType(x3, y3)) {
            throw new TypeError("List.fold: List must contain Semigroups of the same type");
          }
          return x3.concat(y3);
        });
      }
      function foldMap(fn) {
        if (!isFunction(fn)) {
          throw new TypeError(
            "List.foldMap: Semigroup returning function required"
          );
        }
        if (isEmpty3(xs)) {
          throw new TypeError(
            "List.foldMap: List must not be empty"
          );
        }
        var head3 = fn(xs[0]);
        if (!isSemigroup(head3)) {
          throw new TypeError(
            "List.foldMap: Provided function must return Semigroups of the same type"
          );
        }
        return xs.length !== 1 ? xs.slice(1).reduce(function(semi, x3) {
          var val = fn(x3);
          if (!(isSameType(semi, val) && isSemigroup(val))) {
            throw new TypeError(
              "List.foldMap: Provided function must return Semigroups of the same type"
            );
          }
          return semi.concat(val);
        }, head3) : head3;
      }
      function filter2(method) {
        return function(pred) {
          if (!isPredOrFunc(pred)) {
            throw new TypeError("List." + method + ": Pred or predicate function required");
          }
          return List(
            xs.reduce(
              function(x3, y3) {
                return predOrFunc(pred, y3) ? x3.concat([y3]) : x3;
              },
              []
            )
          );
        };
      }
      function reject3(pred) {
        if (!isPredOrFunc(pred)) {
          throw new TypeError("List.reject: Pred or predicate function required");
        }
        var fn = not3(function(x3) {
          return predOrFunc(pred, x3);
        });
        return List(
          xs.reduce(
            function(x3, y3) {
              return fn(y3) ? x3.concat([y3]) : x3;
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
          return List(xs.map(function(x3) {
            return fn(x3);
          }));
        };
      }
      function ap3(m3) {
        if (!isSameType(List, m3)) {
          throw new TypeError("List.ap: List required");
        }
        var ar = m3.valueOf();
        return List(
          xs.reduce(function(acc, fn) {
            if (!isFunction(fn)) {
              throw new TypeError("List.ap: Wrapped values must all be functions");
            }
            return acc.concat(ar.map(function(x3) {
              return fn(x3);
            }));
          }, [])
        );
      }
      function chain3(method) {
        return function(fn) {
          if (!isFunction(fn)) {
            throw new TypeError("List." + method + ": Function required");
          }
          return List(xs.reduce(flatMap(method, fn), []));
        };
      }
      function sequence3(f) {
        if (!(isApplicative(f) || isFunction(f))) {
          throw new TypeError(
            "List.sequence: Applicative TypeRep or Apply returning function required"
          );
        }
        var af = apOrFunc(f);
        return reduceRight3(
          runSequence,
          af(List.empty())
        );
      }
      function traverse3(f, fn) {
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
        return reduceRight3(
          runTraverse(fn),
          af(List.empty())
        );
      }
      return obj = {
        inspect,
        toString: inspect,
        valueOf,
        toArray,
        head: head2,
        tail: tail2,
        cons,
        type: type3,
        equals: equals3,
        empty: empty4,
        reduceRight: reduceRight3,
        fold,
        foldMap,
        reject: reject3,
        ap: ap3,
        of: of3,
        sequence: sequence3,
        traverse: traverse3,
        concat: concat3("concat"),
        map: map3("map"),
        chain: chain3("chain"),
        reduce: reduce2("reduce"),
        filter: filter2("filter")
      }, obj[fl.of] = of3, obj[fl.equals] = equals3, obj[fl.concat] = concat3(fl.concat), obj[fl.empty] = empty4, obj[fl.map] = map3(fl.map), obj[fl.chain] = chain3(fl.chain), obj[fl.reduce] = reduce2(fl.reduce), obj[fl.filter] = filter2(fl.filter), obj["@@type"] = _type, obj.constructor = List, obj;
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
    function Pair(l, r) {
      var obj;
      if (arguments.length < 2) {
        throw new TypeError("Pair: Must provide a first and second value");
      }
      var fst = function() {
        return l;
      };
      var snd = function() {
        return r;
      };
      var inspect = function() {
        return "Pair(" + _inspect(l) + "," + _inspect(r) + " )";
      };
      var toArray = function() {
        return [l, r];
      };
      function merge(fn) {
        if (!isFunction(fn)) {
          throw new TypeError("Pair.merge: Binary function required");
        }
        return fn(fst(), snd());
      }
      function equals3(m3) {
        return isSameType(Pair, m3) && _equals2(m3.fst(), fst()) && _equals2(m3.snd(), snd());
      }
      function concat3(method) {
        return function(m3) {
          if (!isSameType(Pair, m3)) {
            throw new TypeError("Pair." + method + ": Pair required");
          }
          var lf = fst();
          var ls = snd();
          var rf = m3.fst();
          var rs = m3.snd();
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
      function swap(f, g2) {
        if (!isFunction(f) || !isFunction(g2)) {
          throw new TypeError("Pair.swap: Requires both left and right functions");
        }
        return Pair(g2(r), f(l));
      }
      function map3(method) {
        return function(fn) {
          if (!isFunction(fn)) {
            throw new TypeError("Pair." + method + ": Function required");
          }
          return Pair(l, fn(r));
        };
      }
      function bimap(method) {
        return function(f, g2) {
          if (!isFunction(f) || !isFunction(g2)) {
            throw new TypeError("Pair." + method + ": Function required for both arguments");
          }
          return Pair(f(l), g2(r));
        };
      }
      function ap3(m3) {
        if (!isSameType(Pair, m3)) {
          throw new TypeError("Pair.ap: Pair required");
        }
        var fn = snd();
        if (!isFunction(fn)) {
          throw new TypeError("Pair.ap: Function required for second value");
        }
        var l2 = fst();
        var r2 = m3.fst();
        if (!(isSemigroup(l2) && isSameType(l2, r2))) {
          throw new TypeError("Pair.ap: Semigroups of the same type is required for first values");
        }
        return Pair(l2.concat(r2), fn(m3.snd()));
      }
      function chain3(method) {
        return function(fn) {
          var l2 = fst();
          if (!isFunction(fn)) {
            throw new TypeError("Pair." + method + ": Function required");
          }
          if (!isSemigroup(l2)) {
            throw new TypeError("Pair." + method + ": Semigroups of the same type required for first values");
          }
          var m3 = fn(snd());
          if (!isSameType(Pair, m3)) {
            throw new TypeError("Pair." + method + ": Function must return a Pair");
          }
          var r2 = m3.fst();
          if (!isSameType(l2, r2)) {
            throw new TypeError("Pair." + method + ": Semigroups of the same type required for first values");
          }
          return Pair(
            l2.concat(r2),
            m3.snd()
          );
        };
      }
      function sequence3(f) {
        if (!(isApplicative(f) || isFunction(f))) {
          throw new TypeError(
            "Pair.sequence: Applicative TypeRep or Apply returning function required"
          );
        }
        if (!(isApply(r) || isArray(r))) {
          throw new TypeError(
            "Pair.sequence: Must wrap an Apply in the second"
          );
        }
        return r.map(function(v) {
          return Pair(l, v);
        });
      }
      function traverse3(f, fn) {
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
        var m3 = fn(r);
        if (!(isApply(m3) || isArray(m3))) {
          throw new TypeError(
            "Pair.traverse: Both functions must return an Apply of the same type"
          );
        }
        return m3.map(function(v) {
          return Pair(l, v);
        });
      }
      function extend(method) {
        return function(fn) {
          if (!isFunction(fn)) {
            throw new TypeError("Pair." + method + ": Function required");
          }
          return Pair(l, fn(Pair(l, r)));
        };
      }
      return obj = {
        inspect,
        toString: inspect,
        fst,
        snd,
        toArray,
        type: type3,
        merge,
        equals: equals3,
        swap,
        ap: ap3,
        sequence: sequence3,
        traverse: traverse3,
        concat: concat3("concat"),
        map: map3("map"),
        bimap: bimap("bimap"),
        chain: chain3("chain"),
        extend: extend("extend")
      }, obj[fl.equals] = equals3, obj[fl.concat] = concat3(fl.concat), obj[fl.map] = map3(fl.map), obj[fl.bimap] = bimap(fl.bimap), obj[fl.chain] = chain3(fl.chain), obj[fl.extend] = extend(fl.extend), obj["@@type"] = _type, obj.constructor = Pair, obj;
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
      var runWith = function(x2) {
        return !!pred(x2);
      };
      var inspect = function() {
        return "Pred" + _inspect(runWith);
      };
      var empty4 = _empty;
      var valueOf = function() {
        return runWith;
      };
      function concat3(method) {
        return function(m3) {
          if (!isSameType(Pred, m3)) {
            throw new TypeError("Pred." + method + ": Pred required");
          }
          return Pred(function(x2) {
            return !!runWith(x2) && !!m3.runWith(x2);
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
        empty: empty4,
        concat: concat3("concat"),
        contramap: contramap("contramap")
      }, obj[fl.empty] = empty4, obj[fl.concat] = concat3(fl.concat), obj[fl.contramap] = contramap(fl.contramap), obj["@@type"] = _type, obj.constructor = Pred, obj;
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
    var _of2 = function(x2) {
      return Reader(function() {
        return x2;
      });
    };
    function ask2(fn) {
      if (!arguments.length) {
        return Reader(function(x2) {
          return x2;
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
      var of3 = _of2;
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
      function ap3(m3) {
        if (!isSameType(Reader, m3)) {
          throw new TypeError("Reader.ap: Reader required");
        }
        return Reader(function(e2) {
          var fn = runWith(e2);
          if (!isFunction(fn)) {
            throw new TypeError("Reader.ap: Wrapped function must return a function");
          }
          return m3.map(fn).runWith(e2);
        });
      }
      function chain3(method) {
        return function(fn) {
          if (!isFunction(fn)) {
            throw new TypeError("Reader." + method + ": Function required");
          }
          return Reader(function(e2) {
            var m3 = fn(runWith(e2));
            if (!isSameType(Reader, m3)) {
              throw new TypeError("Reader." + method + ": Function must return a Reader");
            }
            return m3.runWith(e2);
          });
        };
      }
      return obj = {
        inspect,
        toString: inspect,
        runWith,
        type: type3,
        ap: ap3,
        of: of3,
        map: map3("map"),
        chain: chain3("chain")
      }, obj[fl.of] = of3, obj[fl.map] = map3(fl.map), obj[fl.chain] = chain3(fl.chain), obj["@@type"] = _type, obj.constructor = Reader, obj;
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
    var curry3 = require_curry();
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
      var of3 = function(x2) {
        return ReaderT2(function() {
          return Monad.of(x2);
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
      function lift4(m3) {
        if (!isSameType(Monad, m3)) {
          throw new TypeError(type3() + ".lift: " + Monad.type() + " instance required");
        }
        return ReaderT2(function() {
          return m3;
        });
      }
      function liftFn(fn, x2) {
        if (!isFunction(fn)) {
          throw new TypeError(type3() + ".liftFn: " + Monad.type() + " returning function required");
        }
        return ReaderT2(function() {
          var m3 = fn(x2);
          if (!isSameType(Monad, m3)) {
            throw new TypeError(type3() + ".liftFn: " + Monad.type() + " returning function required");
          }
          return m3;
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
        function runWith(x2) {
          var result = wrapped(x2);
          if (!isSameType(Monad, result)) {
            throw new TypeError(type3() + ": " + Monad.type() + " must be returned by wrapped function");
          }
          return result;
        }
        function map3(fn) {
          if (!isFunction(fn)) {
            throw new TypeError(type3() + ".map: Function required");
          }
          return ReaderT2(function(e2) {
            return runWith(e2).map(fn);
          });
        }
        function ap3(m3) {
          if (!isSameType(ReaderT2, m3)) {
            throw new TypeError(type3() + ".ap: " + type3() + " required");
          }
          return ReaderT2(function(e2) {
            return runWith(e2).ap(m3.runWith(e2));
          });
        }
        function chain3(fn) {
          if (!isFunction(fn)) {
            throw new TypeError(type3() + ".chain: " + type3() + " returning function required");
          }
          return ReaderT2(
            function(e2) {
              return runWith(e2).chain(function(inner) {
                var m3 = fn(inner);
                if (!isSameType(ReaderT2, m3)) {
                  throw new TypeError(type3() + ".chain: Function must return a " + type3());
                }
                return m3.runWith(e2);
              });
            }
          );
        }
        return obj = {
          inspect,
          toString: inspect,
          type: type3,
          runWith,
          of: of3,
          map: map3,
          ap: ap3,
          chain: chain3
        }, obj[fl.of] = of3, obj[fl.map] = map3, obj[fl.chain] = chain3, obj["@@type"] = typeString, obj.constructor = ReaderT2, obj;
      }
      ReaderT2.type = type3;
      ReaderT2.of = of3;
      ReaderT2.ask = ask2;
      ReaderT2.lift = lift4;
      ReaderT2.liftFn = curry3(liftFn);
      ReaderT2[fl.of] = of3;
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
    var constant = function(x2) {
      return function() {
        return x2;
      };
    };
    var _result = _defineUnion({ Err: ["a"], Ok: ["b"] });
    Result.Err = compose2(Result, _result.Err);
    Result.Ok = compose2(Result, _result.Ok);
    var _of2 = Result.Ok;
    var concatApErr = function(m3) {
      return function(x2) {
        return Result.Err(m3.either(
          function(y3) {
            return isSemigroup(x2) && isSameType(y3, x2) ? x2.concat(y3) : x2;
          },
          function() {
            return x2;
          }
        ));
      };
    };
    var concatAltErr = function(r) {
      return function(l) {
        return Result.Err(isSemigroup(r) && isSameType(l, r) ? l.concat(r) : r);
      };
    };
    function runSequence(x2) {
      if (!(isApply(x2) || isArray(x2))) {
        throw new TypeError(
          "Result.sequence: Must wrap an Apply"
        );
      }
      return x2.map(_of2);
    }
    function Result(u2) {
      var obj;
      if (!arguments.length) {
        throw new TypeError("Result: Must wrap something, try using Err or Ok constructors");
      }
      var x2 = !_result.includes(u2) ? _result.Ok(u2) : u2;
      var equals3 = function(m3) {
        return isSameType(Result, m3) && either3(
          function(x3) {
            return m3.either(function(y3) {
              return _equals2(y3, x3);
            }, constant(false));
          },
          function(x3) {
            return m3.either(constant(false), function(y3) {
              return _equals2(y3, x3);
            });
          }
        );
      };
      var of3 = _of2;
      var inspect = function() {
        return either3(
          function(l) {
            return "Err" + _inspect(l);
          },
          function(r) {
            return "Ok" + _inspect(r);
          }
        );
      };
      function either3(f, g2) {
        if (!isFunction(f) || !isFunction(g2)) {
          throw new TypeError("Result.either: Requires both invalid and valid functions");
        }
        return _result.caseOf({
          Err: f,
          Ok: g2
        }, x2);
      }
      function concat3(method) {
        return function(m3) {
          if (!isSameType(Result, m3)) {
            throw new TypeError("Result." + method + ": Result of Semigroup required");
          }
          return either3(
            Result.Err,
            _innerConcat("Result." + method, m3)
          );
        };
      }
      function swap(f, g2) {
        if (!isFunction(f) || !isFunction(g2)) {
          throw new TypeError("Result.swap: Requires both left and right functions");
        }
        return either3(
          compose2(Result.Ok, f),
          compose2(Result.Err, g2)
        );
      }
      function coalesce(f, g2) {
        if (!isFunction(f) || !isFunction(g2)) {
          throw new TypeError("Result.coalesce: Requires both left and right functions");
        }
        return Result.Ok(either3(f, g2));
      }
      function bichain(l, r) {
        var bichainErr = "Result.bichain: Both arguments must be Result returning functions";
        if (!(isFunction(l) && isFunction(r))) {
          throw new TypeError(bichainErr);
        }
        var m3 = either3(l, r);
        if (!isSameType(Result, m3)) {
          throw new TypeError(bichainErr);
        }
        return m3;
      }
      function map3(method) {
        return function(fn) {
          if (!isFunction(fn)) {
            throw new TypeError("Result." + method + ": Function required");
          }
          return either3(
            Result.Err,
            compose2(Result.Ok, fn)
          );
        };
      }
      function bimap(method) {
        return function(f, g2) {
          if (!isFunction(f) || !isFunction(g2)) {
            throw new TypeError("Result." + method + ": Requires both left and right functions");
          }
          return either3(
            compose2(Result.Err, f),
            compose2(Result.Ok, g2)
          );
        };
      }
      function alt(method) {
        return function(m3) {
          if (!isSameType(Result, m3)) {
            throw new TypeError("Result." + method + ": Result required");
          }
          return m3.either(
            function(r) {
              return either3(concatAltErr(r), Result.Ok);
            },
            function(r) {
              return either3(function() {
                return Result.Ok(r);
              }, Result.Ok);
            }
          );
        };
      }
      function ap3(m3) {
        if (!isSameType(Result, m3)) {
          throw new TypeError("Result.ap: Result required");
        }
        return either3(
          concatApErr(m3),
          function(fn) {
            if (!isFunction(fn)) {
              throw new TypeError("Result.ap: Wrapped value must be a function");
            }
            return m3.either(Result.Err, function() {
              return m3.map(fn);
            });
          }
        );
      }
      function chain3(method) {
        return function(fn) {
          if (!isFunction(fn)) {
            throw new TypeError("Result." + method + ": Result returning function required");
          }
          var m3 = either3(Result.Err, fn);
          if (!isSameType(Result, m3)) {
            throw new TypeError("Result." + method + ": Function must return a Result");
          }
          return m3;
        };
      }
      function sequence3(f) {
        if (!(isApplicative(f) || isFunction(f))) {
          throw new TypeError(
            "Result.sequence: Applicative TypeRep or Apply returning function required"
          );
        }
        var af = apOrFunc(f);
        return either3(
          compose2(af, Result.Err),
          runSequence
        );
      }
      function traverse3(f, fn) {
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
        var m3 = either3(compose2(af, Result.Err), fn);
        if (!(isApply(m3) || isArray(m3))) {
          throw new TypeError("Result.traverse: Both functions must return an Apply of the same type");
        }
        return either3(
          constant(m3),
          constant(m3.map(_of2))
        );
      }
      return obj = {
        inspect,
        toString: inspect,
        equals: equals3,
        type: type3,
        either: either3,
        swap,
        coalesce,
        bichain,
        ap: ap3,
        of: of3,
        sequence: sequence3,
        traverse: traverse3,
        alt: alt("alt"),
        bimap: bimap("bimap"),
        concat: concat3("concat"),
        map: map3("map"),
        chain: chain3("chain")
      }, obj[fl.of] = of3, obj[fl.equals] = equals3, obj[fl.alt] = alt(fl.alt), obj[fl.bimap] = bimap(fl.bimap), obj[fl.concat] = concat3(fl.concat), obj[fl.map] = map3(fl.map), obj[fl.chain] = chain3(fl.chain), obj["@@type"] = _type, obj.constructor = Result, obj;
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
    var merge = function(fn, m3) {
      return m3.merge(fn);
    };
    var sequence3 = function(af, m3) {
      return array.sequence(af, m3);
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
          return function(s3) {
            if (!isSameType(Star, s3)) {
              throw new TypeError(outerType + "." + method + ": " + outerType + " required");
            }
            return Star(function(x2) {
              var m3 = runWith(x2);
              if (!isSameType(Monad, m3)) {
                throw new TypeError(outerType + "." + method + ": Computations must return a type of " + innerType);
              }
              return m3.chain(function(val) {
                var inner = s3.runWith(val);
                if (!isSameType(m3, inner)) {
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
            return Star(function(x2) {
              var m3 = runWith(x2);
              if (!isSameType(Monad, m3)) {
                throw new TypeError(outerType + "." + method + ": Computations must return a type of " + innerType);
              }
              return m3.map(fn);
            });
          };
        }
        function contramap(method) {
          return function(fn) {
            if (!isFunction(fn)) {
              throw new TypeError(outerType + "." + method + ": Function required");
            }
            return Star(function(x2) {
              return runWith(fn(x2));
            });
          };
        }
        function promap2(method) {
          return function(l, r) {
            if (!isFunction(l) || !isFunction(r)) {
              throw new TypeError(outerType + "." + method + ": Functions required for both arguments");
            }
            return Star(function(x2) {
              var m3 = runWith(l(x2));
              if (!isSameType(Monad, m3)) {
                throw new TypeError(outerType + "." + method + ": Computation must return a type of " + innerType);
              }
              return m3.map(r);
            });
          };
        }
        function first() {
          return Star(function(x2) {
            if (!isSameType(Pair, x2)) {
              throw TypeError(outerType + ".first: Pair required for computation input");
            }
            var m3 = runWith(x2.fst());
            if (!isSameType(Monad, m3)) {
              throw new TypeError(outerType + ".first: Computation must return a type of " + innerType);
            }
            return m3.map(function(l) {
              return Pair(l, x2.snd());
            });
          });
        }
        function second() {
          return Star(function(x2) {
            if (!isSameType(Pair, x2)) {
              throw TypeError(outerType + ".second: Pair required for computation input");
            }
            var m3 = runWith(x2.snd());
            if (!isSameType(Monad, m3)) {
              throw new TypeError(outerType + ".second: Computation must return a type of " + innerType);
            }
            return m3.map(function(r) {
              return Pair(x2.fst(), r);
            });
          });
        }
        function both3() {
          return Star(function(x2) {
            if (!isSameType(Pair, x2)) {
              throw TypeError(outerType + ".both: Pair required for computation input");
            }
            var p = x2.bimap(runWith, runWith);
            var m3 = p.fst();
            if (!isSameType(Monad, m3)) {
              throw new TypeError(outerType + ".both: Computation must return a type of " + innerType);
            }
            return sequence3(m3.of, merge(function(x3, y3) {
              return [x3, y3];
            }, p)).map(function(x3) {
              return Pair(x3[0], x3[1]);
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
          both: both3,
          compose: compose2("compose"),
          contramap: contramap("contramap"),
          map: map3("map"),
          promap: promap2("promap")
        }, obj[fl.id] = id, obj[fl.compose] = compose2(fl.compose), obj[fl.contramap] = contramap(fl.contramap), obj[fl.map] = map3(fl.map), obj[fl.promap] = promap2(fl.promap), obj["@@type"] = typeString, obj.constructor = Star, obj;
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
      var equals3 = function(m3) {
        return isSameType(Unit, m3);
      };
      var inspect = function() {
        return "()";
      };
      var valueOf = function() {
        return void 0;
      };
      var of3 = _of2;
      var empty4 = _empty;
      function concat3(method) {
        return function(m3) {
          if (!isSameType(Unit, m3)) {
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
      function ap3(m3) {
        if (!isSameType(Unit, m3)) {
          throw new TypeError("Unit.ap: Unit required");
        }
        return Unit();
      }
      function chain3(method) {
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
        empty: empty4,
        ap: ap3,
        of: of3,
        concat: concat3("concat"),
        map: map3("map"),
        chain: chain3("chain")
      }, obj[fl.of] = of3, obj[fl.empty] = empty4, obj[fl.equals] = equals3, obj[fl.concat] = concat3(fl.concat), obj[fl.map] = map3(fl.map), obj[fl.chain] = chain3(fl.chain), obj["@@type"] = _type, obj.constructor = Unit, obj;
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
    var _of2 = function(x2) {
      return State(function(s3) {
        return Pair(x2, s3);
      });
    };
    function get(fn) {
      if (!arguments.length) {
        return State(function(s3) {
          return Pair(s3, s3);
        });
      }
      if (isFunction(fn)) {
        return State(function(s3) {
          return Pair(fn(s3), s3);
        });
      }
      throw new TypeError("State.get: No arguments or function required");
    }
    function modify3(fn) {
      if (!isFunction(fn)) {
        throw new TypeError("State.modify: Function Required");
      }
      return State(function(s3) {
        return Pair(Unit(), fn(s3));
      });
    }
    function State(fn) {
      var obj;
      if (!isFunction(fn)) {
        throw new TypeError("State: Must wrap a function in the form (s -> Pair a s)");
      }
      var of3 = _of2;
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
        var m3 = fn(state);
        if (!isSameType(Pair, m3)) {
          throw new TypeError("State." + func + ": Must wrap a function in the form (s -> Pair a s)");
        }
        return m3;
      }
      function execWith(s3) {
        var pair3 = runWith(s3, "execWith");
        return pair3.snd();
      }
      function evalWith(s3) {
        var pair3 = runWith(s3, "evalWith");
        return pair3.fst();
      }
      function map3(method) {
        return function(fn2) {
          if (!isFunction(fn2)) {
            throw new TypeError("State." + method + ": Function required");
          }
          return State(function(s3) {
            var m3 = runWith(s3, method);
            return Pair(fn2(m3.fst()), m3.snd());
          });
        };
      }
      function ap3(m3) {
        if (!isSameType(State, m3)) {
          throw new TypeError("State.ap: State required");
        }
        return State(function(s3) {
          var pair3 = runWith(s3, "ap");
          var fn2 = pair3.fst();
          if (!isFunction(fn2)) {
            throw new TypeError("State.ap: Source value must be a function");
          }
          return m3.map(fn2).runWith(pair3.snd());
        });
      }
      function chain3(method) {
        return function(fn2) {
          if (!isFunction(fn2)) {
            throw new TypeError("State." + method + ": State returning function required");
          }
          return State(function(s3) {
            var pair3 = runWith(s3, method);
            var m3 = fn2(pair3.fst());
            if (!isSameType(State, m3)) {
              throw new TypeError("State." + method + ": Function must return another State");
            }
            return m3.runWith(pair3.snd());
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
        ap: ap3,
        of: of3,
        map: map3("map"),
        chain: chain3("chain")
      }, obj[fl.of] = of3, obj[fl.map] = map3(fl.map), obj[fl.chain] = chain3(fl.chain), obj["@@type"] = _type, obj.constructor = State, obj;
    }
    State.of = _of2;
    State.get = get;
    State.modify = modify3;
    State.put = function(x2) {
      return modify3(function() {
        return x2;
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
    var constant = function(x2) {
      return function() {
        return x2;
      };
    };
    function _Tuple(n2) {
      if (!(isInteger(n2) && n2 >= 1)) {
        throw new TypeError("Tuple: First argument must be an integer");
      }
      var tupleLength = constant(n2);
      var type3 = constant(_type(n2));
      var typeString = typeFn("Tuple", VERSION, n2);
      var withProps = function(fn) {
        fn.type = type3;
        fn.tupleLength = tupleLength;
        fn["@@type"] = typeString;
        fn["@@implements"] = _implements(["map", "concat", "equals"]);
        return fn;
      };
      var withLength = function(n3, fn) {
        return Object.defineProperty(fn, "length", {
          value: n3
        });
      };
      switch (n2) {
        case 1:
          return withProps(function(a3) {
            return Tuple(n2, arguments);
          });
        case 2:
          return withProps(function(a3, b2) {
            return Tuple(n2, arguments);
          });
        case 3:
          return withProps(function(a3, b2, c3) {
            return Tuple(n2, arguments);
          });
        case 4:
          return withProps(function(a3, b2, c3, d3) {
            return Tuple(n2, arguments);
          });
        case 5:
          return withProps(function(a3, b2, c3, d3, e2) {
            return Tuple(n2, arguments);
          });
        case 6:
          return withProps(function(a3, b2, c3, d3, e2, f) {
            return Tuple(n2, arguments);
          });
        case 7:
          return withProps(function(a3, b2, c3, d3, e2, f, g2) {
            return Tuple(n2, arguments);
          });
        case 8:
          return withProps(function(a3, b2, c3, d3, e2, f, g2, h3) {
            return Tuple(n2, arguments);
          });
        case 9:
          return withProps(function(a3, b2, c3, d3, e2, f, g2, h3, i2) {
            return Tuple(n2, arguments);
          });
        case 10:
          return withProps(function(a3, b2, c3, d3, e2, f, g2, h3, i2, j) {
            return Tuple(n2, arguments);
          });
        default:
          return withLength(n2, withProps(function() {
            var parts = [], len = arguments.length;
            while (len--)
              parts[len] = arguments[len];
            return Tuple(n2, parts);
          }));
      }
      function Tuple(n3, args) {
        var obj;
        var parts = [].slice.call(args);
        if (n3 !== parts.length) {
          throw new TypeError(
            n3 + "-Tuple: Expected " + n3 + " values, but got " + parts.length
          );
        }
        var inspect = function() {
          return n3 + "-Tuple(" + parts.map(_inspect).join(",") + " )";
        };
        function map3(method) {
          return function(fn) {
            if (!isFunction(fn)) {
              throw new TypeError(n3 + "-Tuple." + method + ": Function required");
            }
            return Tuple(
              n3,
              parts.slice(0, parts.length - 1).concat(fn(parts[parts.length - 1]))
            );
          };
        }
        var equals3 = function(m3) {
          return isSameType({ type: type3 }, m3) && _equals2(parts, m3.toArray());
        };
        function concat3(method) {
          return function(t2) {
            if (!isSameType({ type: type3 }, t2)) {
              throw new TypeError(n3 + "-Tuple." + method + ": Tuple of the same length required");
            }
            var a3 = t2.toArray();
            return Tuple(n3, parts.map(function(v, i2, o3) {
              if (!(isSemigroup(a3[i2]) && isSemigroup(o3[i2]))) {
                throw new TypeError(
                  n3 + "-Tuple." + method + ": Both Tuples must contain Semigroups of the same type"
                );
              }
              if (!isSameType(a3[i2], o3[i2])) {
                throw new TypeError(
                  n3 + "-Tuple." + method + ": Both Tuples must contain Semigroups of the same type"
                );
              }
              return o3[i2].concat(a3[i2]);
            }));
          };
        }
        function merge(fn) {
          if (!isFunction(fn)) {
            throw new TypeError(n3 + "-Tuple.merge: Function required");
          }
          return fn.apply(void 0, parts);
        }
        function mapAll() {
          var args2 = [], len = arguments.length;
          while (len--)
            args2[len] = arguments[len];
          if (args2.length !== parts.length) {
            throw new TypeError(
              n3 + "-Tuple.mapAll: Requires " + parts.length + " functions"
            );
          }
          return Tuple(
            n3,
            parts.map(function(v, i2) {
              if (!isFunction(args2[i2])) {
                throw new TypeError(
                  n3 + "-Tuple.mapAll: Functions required for all arguments"
                );
              }
              return args2[i2](v);
            })
          );
        }
        function project2(index) {
          if (!isInteger(index) || index < 1 || index > n3) {
            throw new TypeError(
              n3 + "-Tuple.project: Index should be an integer between 1 and " + n3
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
          merge,
          project: project2,
          mapAll,
          toArray,
          tupleLength,
          type: type3,
          equals: equals3,
          map: map3("map"),
          concat: concat3("concat")
        }, obj[fl.map] = map3(fl.map), obj[fl.concat] = concat3(fl.concat), obj[fl.equals] = equals3, obj["@@type"] = typeString, obj.constructor = Tuple, obj;
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
    var constant = function(x2) {
      return function() {
        return x2;
      };
    };
    function _Writer(Monoid) {
      if (!isMonoid(Monoid)) {
        throw new TypeError("Writer: Monoid required for construction");
      }
      var _of2 = function(x2) {
        return Writer(Monoid.empty().valueOf(), x2);
      };
      var _type = constant(__type + "( " + Monoid.type() + " )");
      var typeString = _typeString + "( " + Monoid["@@type"] + " )";
      function Writer(entry, val) {
        var obj;
        if (arguments.length !== 2) {
          throw new TypeError("Writer: Log entry and a value required");
        }
        var type3 = _type;
        var of3 = _of2;
        var equals3 = function(m3) {
          return isSameType(Writer, m3) && _equals2(m3.valueOf(), val);
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
        function ap3(m3) {
          if (!isFunction(val)) {
            throw new TypeError("Writer.ap: Wrapped value must be a function");
          }
          if (!isSameType(Writer, m3)) {
            throw new TypeError("Writer.ap: Writer required");
          }
          return Writer(
            log().concat(m3.log()).valueOf(),
            val(m3.valueOf())
          );
        }
        function chain3(method) {
          return function(fn) {
            if (!isFunction(fn)) {
              throw new TypeError("Writer." + method + ": Function required");
            }
            var w2 = fn(valueOf());
            if (!isSameType(Writer, w2)) {
              throw new TypeError("Writer." + method + ": Function must return a Writer");
            }
            return Writer(log().concat(w2.log()).valueOf(), w2.valueOf());
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
          ap: ap3,
          of: of3,
          chain: chain3("chain"),
          map: map3("map")
        }, obj[fl.of] = of3, obj[fl.equals] = equals3, obj[fl.map] = map3(fl.map), obj[fl.chain] = chain3(fl.chain), obj["@@type"] = typeString, obj.constructor = Writer, obj;
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
    function assign(x2, m3) {
      var result = Object.keys(m3).reduce(rejectUnit(m3), {});
      return Object.keys(x2).reduce(rejectUnit(x2), result);
    }
    function filter2(f, m3) {
      return Object.keys(m3).reduce(function(acc, key) {
        if (f(m3[key])) {
          acc[key] = m3[key];
        }
        return acc;
      }, {});
    }
    function map3(f, m3) {
      return Object.keys(m3).reduce(function(acc, key) {
        acc[key] = f(m3[key]);
        return acc;
      }, {});
    }
    function set3(key, val, m3) {
      var obj;
      return assign((obj = {}, obj[key] = val, obj), m3);
    }
    function unset(key, m3) {
      return Object.keys(m3).reduce(function(acc, k2) {
        if (m3[k2] !== void 0 && k2 !== key) {
          acc[k2] = m3[k2];
        }
        return acc;
      }, {});
    }
    module.exports = {
      assign,
      filter: filter2,
      map: map3,
      set: set3,
      unset
    };
  }
});

// node_modules/crocks/helpers/assign.js
var require_assign = __commonJS({
  "node_modules/crocks/helpers/assign.js"(exports, module) {
    var curry3 = require_curry();
    var isObject = require_isObject();
    var object = require_object();
    function assign(x2, m3) {
      if (!(isObject(x2) && isObject(m3))) {
        throw new TypeError("assign: Objects required for both arguments");
      }
      return object.assign(x2, m3);
    }
    module.exports = curry3(assign);
  }
});

// node_modules/crocks/helpers/setProp.js
var require_setProp = __commonJS({
  "node_modules/crocks/helpers/setProp.js"(exports, module) {
    var curry3 = require_curry();
    var isArray = require_isArray();
    var isInteger = require_isInteger();
    var isObject = require_isObject();
    var isString = require_isString();
    var array = require_array();
    var object = require_object();
    function fn(name) {
      function setProp2(key, val, x2) {
        if (isObject(x2)) {
          if (isString(key)) {
            return object.set(key, val, x2);
          }
          throw new TypeError(
            name + ": String required for first argument when third argument is an Object"
          );
        }
        if (isArray(x2)) {
          if (isInteger(key) && key >= 0) {
            return array.set(key, val, x2);
          }
          throw new TypeError(
            name + ": Positive Integer required for first argument when third argument is an Array"
          );
        }
        throw new TypeError(
          name + ": Object or Array required for third argument"
        );
      }
      return curry3(setProp2);
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
    function curryN3(n2, fn) {
      return function() {
        var xs = [], len = arguments.length;
        while (len--)
          xs[len] = arguments[len];
        var args = xs.length ? xs : [void 0];
        var remaining = Math.floor(n2) - args.length;
        return remaining > 0 ? curryN3(remaining, Function.bind.apply(fn, [null].concat(args))) : fn.apply(null, args.slice(0, n2));
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
    function binary3(fn) {
      if (!isFunction(fn)) {
        throw new TypeError("binary: Function required");
      }
      return curryN3(2, fn);
    }
    module.exports = binary3;
  }
});

// node_modules/crocks/helpers/compose.js
var require_compose3 = __commonJS({
  "node_modules/crocks/helpers/compose.js"(exports, module) {
    var isFunction = require_isFunction();
    var err = "compose: Functions required";
    function applyPipe(f, g2) {
      if (!isFunction(g2)) {
        throw new TypeError(err);
      }
      return function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return g2.call(null, f.apply(null, args));
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
      var head2 = fns[0];
      if (!isFunction(head2)) {
        throw new TypeError(err);
      }
      var tail2 = fns.slice(1).concat(function(x2) {
        return x2;
      });
      return tail2.reduce(applyPipe, head2);
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
      var head2 = fns[0];
      if (!isFunction(head2)) {
        throw new TypeError(err);
      }
      if (fns.length === 1) {
        return head2;
      }
      var tail2 = fns.slice(1).reduce(function(comp, fn) {
        if (!isFunction(fn)) {
          throw new TypeError(err);
        }
        return function(m3) {
          if (!isChain(m3)) {
            throw new TypeError(err);
          }
          return comp(m3).chain(fn);
        };
      }, function(x2) {
        return x2;
      });
      return function() {
        return tail2(head2.apply(null, arguments));
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
    function applyPipe(f, g2) {
      if (!isFunction(g2)) {
        throw new TypeError(err);
      }
      return function() {
        var p = f.apply(null, arguments);
        if (!isPromise(p)) {
          throw new TypeError(err);
        }
        return p.then(g2);
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
      var head2 = fns[0];
      if (!isFunction(head2)) {
        throw new TypeError(err);
      }
      var tail2 = fns.slice(1).concat(function(x2) {
        return x2;
      });
      return tail2.reduce(applyPipe, head2);
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
      var head2 = ms[0];
      if (!isSemigroupoid(head2)) {
        throw new TypeError(err);
      }
      if (ms.length === 1) {
        return head2;
      }
      return ms.slice().reduce(function(comp, m3) {
        if (!isSameType(comp, m3)) {
          throw new TypeError(err);
        }
        return comp.compose(m3);
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
    function curry3(fn) {
      if (!isFunction(fn)) {
        throw new TypeError("curry: Function required");
      }
      return _curry(fn);
    }
    module.exports = curry3;
  }
});

// node_modules/crocks/helpers/defaultProps.js
var require_defaultProps = __commonJS({
  "node_modules/crocks/helpers/defaultProps.js"(exports, module) {
    var curry3 = require_curry();
    var isObject = require_isObject();
    var object = require_object();
    function defaultProps(x2, m3) {
      if (!isObject(x2) || !isObject(m3)) {
        throw new TypeError("defaultProps: Objects required for both arguments");
      }
      return object.assign(m3, x2);
    }
    module.exports = curry3(defaultProps);
  }
});

// node_modules/crocks/helpers/defaultTo.js
var require_defaultTo = __commonJS({
  "node_modules/crocks/helpers/defaultTo.js"(exports, module) {
    var curry3 = require_curry();
    var isNil3 = require_isNil();
    function defaultTo3(def, val) {
      return isNil3(val) ? def : val;
    }
    module.exports = curry3(defaultTo3);
  }
});

// node_modules/crocks/helpers/unsetProp.js
var require_unsetProp = __commonJS({
  "node_modules/crocks/helpers/unsetProp.js"(exports, module) {
    var curry3 = require_curry();
    var isArray = require_isArray();
    var isEmpty3 = require_isEmpty();
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
        if (!(isString(key) && !isEmpty3(key) || isInteger(key) && key >= 0)) {
          throw new TypeError(
            name + ": Non-empty String required or Positive Integer required for first argument"
          );
        }
        if (isObject(obj)) {
          if (isString(key) && !isEmpty3(key)) {
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
      return curry3(unsetProp2);
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
    function foldPairs(acc, pair3) {
      var obj;
      if (!isSameType(Pair, pair3)) {
        throw new TypeError("fromPairs: Foldable of Pairs required for argument");
      }
      var key = pair3.fst();
      var value = pair3.snd();
      if (!isString(key)) {
        throw new TypeError("fromPairs: String required for fst of every Pair");
      }
      return value !== void 0 ? Object.assign(acc, (obj = {}, obj[key] = value, obj)) : acc;
    }
    function fromPairs3(xs) {
      if (!isFoldable(xs)) {
        throw new TypeError("fromPairs: Foldable of Pairs required for argument");
      }
      return xs.reduce(foldPairs, {});
    }
    module.exports = fromPairs3;
  }
});

// node_modules/crocks/helpers/getPathOr.js
var require_getPathOr = __commonJS({
  "node_modules/crocks/helpers/getPathOr.js"(exports, module) {
    var curry3 = require_curry();
    var isArray = require_isArray();
    var isDefined = require_isDefined();
    var isEmpty3 = require_isEmpty();
    var isInteger = require_isInteger();
    var isNil3 = require_isNil();
    var isString = require_isString();
    var errFn = function(name) {
      return name + ": Array of Non-empty Strings or Integers required for second argument";
    };
    function fn(name) {
      function getPathOr2(def, keys4, target) {
        if (!isArray(keys4)) {
          throw new TypeError(errFn(name));
        }
        if (isNil3(target)) {
          return def;
        }
        var value = target;
        for (var i2 = 0; i2 < keys4.length; i2++) {
          var key = keys4[i2];
          if (!(isString(key) && !isEmpty3(key) || isInteger(key))) {
            throw new TypeError(errFn(name));
          }
          if (isNil3(value)) {
            return def;
          }
          value = value[key];
          if (!isDefined(value)) {
            return def;
          }
        }
        return value;
      }
      return curry3(getPathOr2);
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
    var curry3 = require_curry();
    var isApply = require_isApply();
    var isArray = require_isArray();
    var isFunction = require_isFunction();
    var isSameType = require_isSameType();
    var map3 = array.map;
    var ap3 = array.ap;
    function liftA2(fn, x2, y3) {
      if (!isFunction(fn)) {
        throw new TypeError("liftA2: Function required for first argument");
      }
      if (!((isApply(x2) || isArray(x2)) && isSameType(x2, y3))) {
        throw new TypeError("liftA2: Applys of same type required for last two arguments");
      }
      if (isArray(x2)) {
        return ap3(y3, map3(fn, x2));
      }
      return x2.map(fn).ap(y3);
    }
    module.exports = curry3(liftA2);
  }
});

// node_modules/crocks/helpers/liftA3.js
var require_liftA3 = __commonJS({
  "node_modules/crocks/helpers/liftA3.js"(exports, module) {
    var array = require_array();
    var curry3 = require_curry();
    var isApply = require_isApply();
    var isArray = require_isArray();
    var isFunction = require_isFunction();
    var isSameType = require_isSameType();
    var map3 = array.map;
    var ap3 = array.ap;
    function liftA3(fn, x2, y3, z2) {
      if (!isFunction(fn)) {
        throw new TypeError("liftA3: Function required for first argument");
      } else if (!((isApply(x2) || isArray(x2)) && isSameType(x2, y3) && isSameType(x2, z2))) {
        throw new TypeError("liftA3: Applys of same type required for last three arguments");
      }
      if (isArray(x2)) {
        return ap3(z2, ap3(y3, map3(fn, x2)));
      }
      return x2.map(fn).ap(y3).ap(z2);
    }
    module.exports = curry3(liftA3);
  }
});

// node_modules/crocks/helpers/liftN.js
var require_liftN = __commonJS({
  "node_modules/crocks/helpers/liftN.js"(exports, module) {
    var array = require_array();
    var curry3 = require_curry();
    var curryN3 = require_curryN();
    var isApply = require_isApply();
    var isArray = require_isArray();
    var isFunction = require_isFunction();
    var isFunctor = require_isFunctor();
    var isInteger = require_isInteger();
    var isSameType = require_isSameType();
    var ap3 = array.ap;
    var applyAp = function(x2, y3) {
      if (!(isSameType(x2, y3) && (isArray(y3) || isApply(y3)))) {
        throw new TypeError("liftN: Applys of same type are required");
      }
      if (isArray(x2)) {
        return ap3(y3, x2);
      }
      return x2.ap(y3);
    };
    function liftN3(n2, fn) {
      if (!isInteger(n2)) {
        throw new TypeError("liftN: Integer required for first argument");
      }
      if (!isFunction(fn)) {
        throw new TypeError("liftN: Function required for second argument");
      }
      return curryN3(n2, function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        if (!isFunctor(args[0])) {
          throw new TypeError("liftN: Applys of same type are required");
        }
        return args.slice(1, n2).reduce(
          applyAp,
          args[0].map(function(x2) {
            return curryN3(n2, fn)(x2);
          })
        );
      });
    }
    module.exports = curry3(liftN3);
  }
});

// node_modules/crocks/helpers/getPropOr.js
var require_getPropOr = __commonJS({
  "node_modules/crocks/helpers/getPropOr.js"(exports, module) {
    var curry3 = require_curry();
    var isDefined = require_isDefined();
    var isEmpty3 = require_isEmpty();
    var isInteger = require_isInteger();
    var isNil3 = require_isNil();
    var isString = require_isString();
    function fn(name) {
      function getPropOr2(def, key, target) {
        if (!(isString(key) && !isEmpty3(key) || isInteger(key))) {
          throw new TypeError(name + ": Non-empty String or Integer required for second argument");
        }
        if (isNil3(target)) {
          return def;
        }
        var value = target[key];
        return isDefined(value) ? value : def;
      }
      return curry3(getPropOr2);
    }
    var getPropOr = fn("getPropOr");
    getPropOr.origFn = fn;
    module.exports = getPropOr;
  }
});

// node_modules/crocks/helpers/mapProps.js
var require_mapProps = __commonJS({
  "node_modules/crocks/helpers/mapProps.js"(exports, module) {
    var curry3 = require_curry();
    var isObject = require_isObject();
    var isFunction = require_isFunction();
    var isNil3 = require_isNil();
    var applyMap = function(fns, obj) {
      return function(acc, key) {
        var obj$1, obj$2, obj$3;
        if (isNil3(fns[key])) {
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
    module.exports = curry3(mapProps);
  }
});

// node_modules/crocks/helpers/mapReduce.js
var require_mapReduce = __commonJS({
  "node_modules/crocks/helpers/mapReduce.js"(exports, module) {
    var curry3 = require_curry();
    var isFoldable = require_isFoldable();
    var isFunction = require_isFunction();
    function mapReduce(mapFn, reduceFn, empty4, xs) {
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
        function(acc, x2) {
          return reduceFn(acc, mapFn(x2));
        },
        empty4
      );
    }
    module.exports = curry3(mapReduce);
  }
});

// node_modules/crocks/core/mconcatMap.js
var require_mconcatMap = __commonJS({
  "node_modules/crocks/core/mconcatMap.js"(exports, module) {
    var compose2 = require_compose();
    var foldWith = function(m3) {
      return function(x2, y3) {
        return x2.concat(m3(y3));
      };
    };
    function mconcatMap(M3, f, xs) {
      return xs.reduce(foldWith(compose2(M3, f)), M3.empty());
    }
    module.exports = mconcatMap;
  }
});

// node_modules/crocks/helpers/mconcat.js
var require_mconcat = __commonJS({
  "node_modules/crocks/helpers/mconcat.js"(exports, module) {
    var curry3 = require_curry();
    var isFoldable = require_isFoldable();
    var isMonoid = require_isMonoid();
    var mconcatMap = require_mconcatMap();
    var identity2 = function(x2) {
      return x2;
    };
    function mconcat(m3, xs) {
      if (!isMonoid(m3)) {
        throw new TypeError(
          "mconcat: Monoid required for first argument"
        );
      }
      if (!isFoldable(xs)) {
        throw new TypeError(
          "mconcat: Foldable required for second argument"
        );
      }
      return mconcatMap(m3, identity2, xs);
    }
    module.exports = curry3(mconcat);
  }
});

// node_modules/crocks/helpers/mconcatMap.js
var require_mconcatMap2 = __commonJS({
  "node_modules/crocks/helpers/mconcatMap.js"(exports, module) {
    var _mconcatMap = require_mconcatMap();
    var curry3 = require_curry();
    var isFoldable = require_isFoldable();
    var isFunction = require_isFunction();
    var isMonoid = require_isMonoid();
    function mconcatMap(m3, f, xs) {
      if (!isMonoid(m3)) {
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
      return _mconcatMap(m3, f, xs);
    }
    module.exports = curry3(mconcatMap);
  }
});

// node_modules/crocks/helpers/mreduce.js
var require_mreduce = __commonJS({
  "node_modules/crocks/helpers/mreduce.js"(exports, module) {
    var curry3 = require_curry();
    var isFoldable = require_isFoldable();
    var isMonoid = require_isMonoid();
    var mconcatMap = require_mconcatMap();
    var identity2 = function(x2) {
      return x2;
    };
    function mreduce(m3, xs) {
      if (!isMonoid(m3)) {
        throw new TypeError(
          "mreduce: Monoid required for first argument"
        );
      }
      if (!isFoldable(xs)) {
        throw new TypeError(
          "mreduce: Foldable required for second argument"
        );
      }
      return mconcatMap(m3, identity2, xs).valueOf();
    }
    module.exports = curry3(mreduce);
  }
});

// node_modules/crocks/helpers/mreduceMap.js
var require_mreduceMap = __commonJS({
  "node_modules/crocks/helpers/mreduceMap.js"(exports, module) {
    var curry3 = require_curry();
    var isFoldable = require_isFoldable();
    var isFunction = require_isFunction();
    var isMonoid = require_isMonoid();
    var mconcatMap = require_mconcatMap();
    function mreduceMap(m3, f, xs) {
      if (!isMonoid(m3)) {
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
      return mconcatMap(m3, f, xs).valueOf();
    }
    module.exports = curry3(mreduceMap);
  }
});

// node_modules/crocks/helpers/nAry.js
var require_nAry = __commonJS({
  "node_modules/crocks/helpers/nAry.js"(exports, module) {
    var curry3 = require_curry();
    var curryN3 = require_curryN();
    var isFunction = require_isFunction();
    var isNumber = require_isNumber();
    function nAry3(num, fn) {
      if (!isNumber(num)) {
        throw new TypeError("nAry: Number required for first argument");
      }
      if (!isFunction(fn)) {
        throw new TypeError("nAry: Function required for second argument");
      }
      return curryN3(num, fn);
    }
    module.exports = curry3(nAry3);
  }
});

// node_modules/crocks/helpers/objOf.js
var require_objOf = __commonJS({
  "node_modules/crocks/helpers/objOf.js"(exports, module) {
    var curry3 = require_curry();
    var isString = require_isString();
    function objOf3(key, value) {
      var obj;
      if (!(key && isString(key))) {
        throw new TypeError("objOf: Non-empty String required for first argument");
      }
      return obj = {}, obj[key] = value, obj;
    }
    module.exports = curry3(objOf3);
  }
});

// node_modules/crocks/helpers/omit.js
var require_omit = __commonJS({
  "node_modules/crocks/helpers/omit.js"(exports, module) {
    var curry3 = require_curry();
    var isFoldable = require_isFoldable();
    var isObject = require_isObject();
    function omitKeys(keys4, obj) {
      return function(acc, key) {
        var obj$1;
        return keys4.indexOf(key) === -1 && obj[key] !== void 0 ? Object.assign(acc, (obj$1 = {}, obj$1[key] = obj[key], obj$1)) : acc;
      };
    }
    function omit3(keys4, obj) {
      if (!isFoldable(keys4)) {
        throw new TypeError("omit: Foldable required for first argument");
      } else if (!isObject(obj)) {
        throw new TypeError("omit: Object required for second argument");
      }
      return Object.keys(obj).reduce(omitKeys(keys4, obj), {});
    }
    module.exports = curry3(omit3);
  }
});

// node_modules/crocks/helpers/once.js
var require_once2 = __commonJS({
  "node_modules/crocks/helpers/once.js"(exports, module) {
    var isFunction = require_isFunction();
    var _once = require_once();
    function once3(fn) {
      if (!isFunction(fn)) {
        throw new TypeError("once: Function required");
      }
      return _once(fn);
    }
    module.exports = once3;
  }
});

// node_modules/crocks/helpers/partial.js
var require_partial = __commonJS({
  "node_modules/crocks/helpers/partial.js"(exports, module) {
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    function partial2() {
      var args = [], len = arguments.length;
      while (len--)
        args[len] = arguments[len];
      var fn = args[0];
      var xs = args.slice(1);
      if (!isFunction(fn)) {
        throw new TypeError("partial: Function required for first argument");
      }
      return curry3(
        Function.bind.apply(fn, [null].concat(xs))
      );
    }
    module.exports = partial2;
  }
});

// node_modules/crocks/helpers/pick.js
var require_pick = __commonJS({
  "node_modules/crocks/helpers/pick.js"(exports, module) {
    var curry3 = require_curry();
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
    function pick3(keys4, obj) {
      if (!isFoldable(keys4)) {
        throw new TypeError("pick: Foldable required for first argument");
      } else if (!isObject(obj)) {
        throw new TypeError("pick: Object required for second argument");
      }
      return keys4.reduce(pickKeys(obj), {});
    }
    module.exports = curry3(pick3);
  }
});

// node_modules/crocks/helpers/pipe.js
var require_pipe = __commonJS({
  "node_modules/crocks/helpers/pipe.js"(exports, module) {
    var isFunction = require_isFunction();
    var err = "pipe: Functions required";
    function applyPipe(f, g2) {
      if (!isFunction(g2)) {
        throw new TypeError(err);
      }
      return function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return g2.call(null, f.apply(null, args));
      };
    }
    function pipe2() {
      var fns = [], len = arguments.length;
      while (len--)
        fns[len] = arguments[len];
      if (!arguments.length) {
        throw new TypeError(err);
      }
      var head2 = fns[0];
      if (!isFunction(head2)) {
        throw new TypeError(err);
      }
      var tail2 = fns.slice(1).concat(function(x2) {
        return x2;
      });
      return tail2.reduce(applyPipe, head2);
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
    function pipeK(head2) {
      var fns = [], len = arguments.length - 1;
      while (len-- > 0)
        fns[len] = arguments[len + 1];
      if (!(arguments.length && isFunction(head2))) {
        throw new TypeError(err);
      }
      if (arguments.length === 1) {
        return head2;
      }
      var tail2 = fns.reduce(function(comp, fn) {
        if (!isFunction(fn)) {
          throw new TypeError(err);
        }
        return function(m3) {
          if (!isChain(m3)) {
            throw new TypeError(err);
          }
          return comp(m3).chain(fn);
        };
      }, function(x2) {
        return x2;
      });
      return function() {
        return tail2(head2.apply(null, arguments));
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
    function applyPipe(f, g2) {
      if (!isFunction(g2)) {
        throw new TypeError(err);
      }
      return function() {
        var p = f.apply(null, arguments);
        if (!isPromise(p)) {
          throw new TypeError(err);
        }
        return p.then(g2);
      };
    }
    function pipeP() {
      var fns = [], len = arguments.length;
      while (len--)
        fns[len] = arguments[len];
      if (!arguments.length) {
        throw new TypeError(err);
      }
      var head2 = fns[0];
      if (!isFunction(head2)) {
        throw new TypeError(err);
      }
      var tail2 = fns.slice(1).concat(function(x2) {
        return x2;
      });
      return tail2.reduce(applyPipe, head2);
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
      var head2 = ms[0];
      if (!isSemigroupoid(head2)) {
        throw new TypeError(err);
      }
      if (ms.length === 1) {
        return head2;
      }
      return ms.slice().reduce(function(comp, m3) {
        if (!isSameType(comp, m3)) {
          throw new TypeError(err);
        }
        return comp.compose(m3);
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
    var curry3 = require_curry();
    var isArray = require_isArray();
    var isEmpty3 = require_isEmpty();
    var isInteger = require_isInteger();
    var isObject = require_isObject();
    var isString = require_isString();
    var object = require_object();
    var isValid2 = function(x2) {
      return isObject(x2) || isArray(x2);
    };
    var pathErr = "setPath: Non-empty Array of non-empty Strings and/or Positive Integers required for first argument";
    function setPath(path3, val, obj) {
      if (!isArray(path3) || isEmpty3(path3)) {
        throw new TypeError(pathErr);
      }
      if (!isValid2(obj)) {
        throw new TypeError(
          "setPath: Object or Array required for third argument"
        );
      }
      var key = path3[0];
      var newVal = val;
      if (!(isString(key) && !isEmpty3(key) || isInteger(key) && key >= 0)) {
        throw new TypeError(pathErr);
      }
      if (path3.length > 1) {
        var next = !isValid2(obj[key]) ? isInteger(path3[1]) ? [] : {} : obj[key];
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
    module.exports = curry3(setPath);
  }
});

// node_modules/crocks/helpers/tap.js
var require_tap = __commonJS({
  "node_modules/crocks/helpers/tap.js"(exports, module) {
    var curry3 = require_curry();
    var compose2 = require_compose();
    var isFunction = require_isFunction();
    var constant = function(x2) {
      return function() {
        return x2;
      };
    };
    function tap3(fn, x2) {
      if (!isFunction(fn)) {
        throw new TypeError(
          "tap: Function required for first argument"
        );
      }
      return compose2(constant(x2), fn)(x2);
    }
    module.exports = curry3(tap3);
  }
});

// node_modules/crocks/helpers/unary.js
var require_unary = __commonJS({
  "node_modules/crocks/helpers/unary.js"(exports, module) {
    var isFunction = require_isFunction();
    function unary3(fn) {
      if (!isFunction(fn)) {
        throw new TypeError("unary: Function required");
      }
      return function(x2) {
        return fn(x2);
      };
    }
    module.exports = unary3;
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
    var curry3 = require_curry();
    var isArray = require_isArray();
    var isEmpty3 = require_isEmpty();
    var isInteger = require_isInteger();
    var isObject = require_isObject();
    var isString = require_isString();
    var array = require_array();
    var object = require_object();
    var pathError = "unsetPath: Non-empty Array of non-empty Strings and/or Positive Integers required for first argument";
    function unsetPath(path3, obj) {
      if (!isArray(path3) || isEmpty3(path3)) {
        throw new TypeError(pathError);
      }
      if (!(isObject(obj) || isArray(obj))) {
        return obj;
      }
      var key = path3[0];
      if (!(isString(key) && !isEmpty3(key) || isInteger(key) && key >= 0)) {
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
    module.exports = curry3(unsetPath);
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
    function branch(x2) {
      return Pair(x2, x2);
    }
    module.exports = branch;
  }
});

// node_modules/crocks/Pair/fanout.js
var require_fanout = __commonJS({
  "node_modules/crocks/Pair/fanout.js"(exports, module) {
    var Pair = require_Pair();
    var curry3 = require_curry();
    var isContravariant = require_isContravariant();
    var isFunction = require_isFunction();
    var isSameType = require_isSameType();
    var isSemigroupoid = require_isSemigroupoid();
    var valid = function(x2, y3) {
      return isSameType(x2, y3) && isSemigroupoid(x2) && isContravariant(x2) && isFunction(x2.first) && isFunction(x2.second);
    };
    function fanout(fst, snd) {
      if (isFunction(fst) && isFunction(snd)) {
        return function(x2) {
          return Pair(fst(x2), snd(x2));
        };
      }
      if (valid(fst, snd)) {
        return fst.first().compose(snd.second()).contramap(function(x2) {
          return Pair(x2, x2);
        });
      }
      throw new TypeError(
        "fanout: Arrows, Functions or Stars of the same type required for both arguments"
      );
    }
    module.exports = curry3(fanout);
  }
});

// node_modules/crocks/Maybe/find.js
var require_find = __commonJS({
  "node_modules/crocks/Maybe/find.js"(exports, module) {
    var Pred = require_types().proxy("Pred");
    var curry3 = require_curry();
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
    module.exports = curry3(find3);
  }
});

// node_modules/crocks/Maybe/getPath.js
var require_getPath = __commonJS({
  "node_modules/crocks/Maybe/getPath.js"(exports, module) {
    var ref = require_Maybe();
    var Nothing = ref.Nothing;
    var Just = ref.Just;
    var curry3 = require_curry();
    var isArray = require_isArray();
    var isDefined = require_isDefined();
    var isEmpty3 = require_isEmpty();
    var isInteger = require_isInteger();
    var isNil3 = require_isNil();
    var isString = require_isString();
    function fn(name) {
      function getPath2(keys4, target) {
        if (!isArray(keys4)) {
          throw new TypeError(name + ": Array of Non-empty Strings or Integers required for first argument");
        }
        if (isNil3(target)) {
          return Nothing();
        }
        var value = target;
        for (var i2 = 0; i2 < keys4.length; i2++) {
          var key = keys4[i2];
          if (!(isString(key) && !isEmpty3(key) || isInteger(key))) {
            throw new TypeError(name + ": Array of Non-empty Strings or Integers required for first argument");
          }
          if (isNil3(value)) {
            return Nothing();
          }
          value = value[key];
          if (!isDefined(value)) {
            return Nothing();
          }
        }
        return Just(value);
      }
      return curry3(getPath2);
    }
    var getPath = fn("getPath");
    getPath.origFn = fn;
    module.exports = getPath;
  }
});

// node_modules/crocks/Maybe/getProp.js
var require_getProp = __commonJS({
  "node_modules/crocks/Maybe/getProp.js"(exports, module) {
    var curry3 = require_curry();
    var isDefined = require_isDefined();
    var isEmpty3 = require_isEmpty();
    var isNil3 = require_isNil();
    var isInteger = require_isInteger();
    var isString = require_isString();
    var ref = require_Maybe();
    var Nothing = ref.Nothing;
    var Just = ref.Just;
    function fn(name) {
      function getProp2(key, target) {
        if (!(isString(key) && !isEmpty3(key) || isInteger(key))) {
          throw new TypeError(name + ": Non-empty String or Integer required for first argument");
        }
        if (isNil3(target)) {
          return Nothing();
        }
        var value = target[key];
        return isDefined(value) ? Just(value) : Nothing();
      }
      return curry3(getProp2);
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
    var curry3 = require_curry();
    var isPredOrFunc = require_isPredOrFunc();
    function safe(pred, x2) {
      if (!isPredOrFunc(pred)) {
        throw new TypeError("safe: Pred or predicate function required for first argument");
      }
      return predOrFunc(pred, x2) ? Just(x2) : Nothing();
    }
    module.exports = curry3(safe);
  }
});

// node_modules/crocks/Maybe/safeAfter.js
var require_safeAfter = __commonJS({
  "node_modules/crocks/Maybe/safeAfter.js"(exports, module) {
    var ref = require_Maybe();
    var Just = ref.Just;
    var Nothing = ref.Nothing;
    var curry3 = require_curry();
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
      return function(x2) {
        var result = fn(x2);
        return predOrFunc(pred, result) ? Just(result) : Nothing();
      };
    }
    module.exports = curry3(safeAfter);
  }
});

// node_modules/crocks/Maybe/safeLift.js
var require_safeLift = __commonJS({
  "node_modules/crocks/Maybe/safeLift.js"(exports, module) {
    var compose2 = require_compose();
    var curry3 = require_curry();
    var isPredOrFunc = require_isPredOrFunc();
    var isFunction = require_isFunction();
    var safe = require_safe();
    var map3 = function(fn) {
      return function(m3) {
        return m3.map(fn);
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
    module.exports = curry3(safeLift);
  }
});

// node_modules/crocks/Pair/toPairs.js
var require_toPairs = __commonJS({
  "node_modules/crocks/Pair/toPairs.js"(exports, module) {
    var List = require_List();
    var Pair = require_Pair();
    var isObject = require_isObject();
    function toPairs3(obj) {
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
    module.exports = toPairs3;
  }
});

// node_modules/crocks/Result/tryCatch.js
var require_tryCatch = __commonJS({
  "node_modules/crocks/Result/tryCatch.js"(exports, module) {
    var ref = require_Result();
    var Err = ref.Err;
    var Ok = ref.Ok;
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    function tryCatch2(fn) {
      if (!isFunction(fn)) {
        throw new TypeError("tryCatch: Function required for first argument");
      }
      var safe = function() {
        try {
          return Ok(fn.apply(this, arguments));
        } catch (e2) {
          return Err(e2);
        }
      };
      Object.defineProperty(safe, "length", { value: fn.length });
      return safe;
    }
    module.exports = curry3(tryCatch2);
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
    var isNil3 = require_isNil();
    var isSameType = require_isSameType();
    var _empty = function() {
      return All(true);
    };
    function All(b2) {
      var obj;
      var x2 = isNil3(b2) ? _empty().valueOf() : b2;
      if (!arguments.length || isFunction(x2)) {
        throw new TypeError("All: Non-function value required");
      }
      var valueOf = function() {
        return !!x2;
      };
      var empty4 = _empty;
      var equals3 = function(m3) {
        return isSameType(All, m3) && _equals2(x2, m3.valueOf());
      };
      var inspect = function() {
        return "All" + _inspect(valueOf());
      };
      function concat3(method) {
        return function(m3) {
          if (!isSameType(All, m3)) {
            throw new TypeError("All." + method + ": All required");
          }
          return All(m3.valueOf() && valueOf());
        };
      }
      return obj = {
        inspect,
        toString: inspect,
        equals: equals3,
        valueOf,
        type: type3,
        empty: empty4
      }, obj["@@type"] = _type, obj.concat = concat3("concat"), obj[fl.equals] = equals3, obj[fl.concat] = concat3(fl.concat), obj[fl.empty] = empty4, obj.constructor = All, obj;
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
    var isNil3 = require_isNil();
    var isSameType = require_isSameType();
    var _empty = function() {
      return Any(false);
    };
    function Any(b2) {
      var obj;
      var x2 = isNil3(b2) ? _empty().valueOf() : b2;
      if (!arguments.length || isFunction(x2)) {
        throw new TypeError("Any: Non-function value required");
      }
      var valueOf = function() {
        return !!x2;
      };
      var empty4 = _empty;
      var inspect = function() {
        return "Any" + _inspect(valueOf());
      };
      var equals3 = function(m3) {
        return isSameType(Any, m3) && _equals2(x2, m3.valueOf());
      };
      function concat3(method) {
        return function(m3) {
          if (!isSameType(Any, m3)) {
            throw new TypeError("Any." + method + ": Any required");
          }
          return Any(m3.valueOf() || valueOf());
        };
      }
      return obj = {
        inspect,
        toString: inspect,
        equals: equals3,
        valueOf,
        type: type3,
        empty: empty4
      }, obj["@@type"] = _type, obj.concat = concat3("concat"), obj[fl.equals] = equals3, obj[fl.concat] = concat3(fl.concat), obj[fl.empty] = empty4, obj.constructor = Any, obj;
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
    var isNil3 = require_isNil();
    var isObject = require_isObject();
    var isSameType = require_isSameType();
    var _empty = function() {
      return Assign({});
    };
    function Assign(o3) {
      var obj;
      var x2 = isNil3(o3) ? _empty().valueOf() : o3;
      if (!arguments.length || !isObject(x2)) {
        throw new TypeError("Assign: Object required");
      }
      var valueOf = function() {
        return x2;
      };
      var empty4 = _empty;
      var inspect = function() {
        return "Assign" + _inspect(valueOf());
      };
      var equals3 = function(m3) {
        return isSameType(Assign, m3) && _equals2(x2, m3.valueOf());
      };
      function concat3(method) {
        return function(m3) {
          if (!isSameType(Assign, m3)) {
            throw new TypeError("Assign." + method + ": Assign required");
          }
          return Assign(_object.assign(m3.valueOf(), x2));
        };
      }
      return obj = {
        inspect,
        toString: inspect,
        equals: equals3,
        valueOf,
        type: type3,
        empty: empty4,
        concat: concat3("concat")
      }, obj[fl.equals] = equals3, obj[fl.empty] = empty4, obj[fl.concat] = concat3(fl.concat), obj["@@type"] = _type, obj.constructor = Assign, obj;
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
      return Endo(function(x2) {
        return x2;
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
      var empty4 = _empty;
      var inspect = function() {
        return "Endo" + _inspect(valueOf());
      };
      function concat3(method) {
        return function(m3) {
          if (!isSameType(Endo, m3)) {
            throw new TypeError("Endo." + method + ": Endo required");
          }
          return Endo(compose2(m3.valueOf(), valueOf()));
        };
      }
      return obj = {
        inspect,
        toString: inspect,
        valueOf,
        type: type3,
        empty: empty4,
        runWith,
        concat: concat3("concat")
      }, obj[fl.empty] = empty4, obj[fl.concat] = concat3(fl.concat), obj["@@type"] = _type, obj.constructor = Endo, obj;
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
    function First(x2) {
      var obj;
      if (!arguments.length) {
        throw new TypeError("First: Requires one argument");
      }
      var maybe = !isSameType(Maybe, x2) ? Maybe.of(x2) : x2.map(function(x3) {
        return x3;
      });
      var empty4 = _empty;
      var inspect = function() {
        return "First(" + _inspect(maybe) + " )";
      };
      var equals3 = function(m3) {
        return isSameType(First, m3) && _equals2(maybe, m3.valueOf());
      };
      var valueOf = function() {
        return maybe;
      };
      var option = maybe.option;
      function concat3(method) {
        return function(m3) {
          if (!isSameType(First, m3)) {
            throw new TypeError("First." + method + ": First required");
          }
          var n2 = m3.valueOf().map(function(x3) {
            return x3;
          });
          return First(
            maybe.either(function() {
              return n2;
            }, Maybe.Just)
          );
        };
      }
      return obj = {
        inspect,
        toString: inspect,
        equals: equals3,
        empty: empty4,
        option,
        type: type3,
        valueOf,
        concat: concat3("concat")
      }, obj[fl.equals] = equals3, obj[fl.empty] = _empty, obj[fl.concat] = concat3(fl.concat), obj["@@type"] = _type, obj.constructor = First, obj;
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
    function Last(x2) {
      var obj;
      if (!arguments.length) {
        throw new TypeError("Last: Requires one argument");
      }
      var maybe = !isSameType(Maybe, x2) ? Maybe.of(x2) : x2.map(function(x3) {
        return x3;
      });
      var valueOf = function() {
        return maybe;
      };
      var empty4 = _empty;
      var inspect = function() {
        return "Last(" + _inspect(maybe) + " )";
      };
      var equals3 = function(m3) {
        return isSameType(Last, m3) && _equals2(maybe, m3.valueOf());
      };
      var option = maybe.option;
      function concat3(method) {
        return function(m3) {
          if (!isSameType(Last, m3)) {
            throw new TypeError("Last." + method + ": Last required");
          }
          var n2 = m3.valueOf().map(function(x3) {
            return x3;
          });
          return Last(
            maybe.either(
              function() {
                return n2;
              },
              function() {
                return n2.either(function() {
                  return maybe;
                }, function() {
                  return n2;
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
        empty: empty4,
        option,
        type: type3,
        valueOf,
        concat: concat3("concat")
      }, obj[fl.equals] = equals3, obj[fl.empty] = empty4, obj[fl.concat] = concat3(fl.concat), obj["@@type"] = _type, obj.constructor = Last, obj;
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
    var isNil3 = require_isNil();
    var isNumber = require_isNumber();
    var isSameType = require_isSameType();
    var _empty = function() {
      return Max(-Infinity);
    };
    function Max(n2) {
      var obj;
      var x2 = isNil3(n2) ? _empty().valueOf() : n2;
      if (!arguments.length || !isNumber(x2)) {
        throw new TypeError("Max: Numeric value required");
      }
      var valueOf = function() {
        return x2;
      };
      var empty4 = _empty;
      var inspect = function() {
        return "Max" + _inspect(valueOf());
      };
      var equals3 = function(m3) {
        return isSameType(Max, m3) && _equals2(x2, m3.valueOf());
      };
      function concat3(method) {
        return function(m3) {
          if (!isSameType(Max, m3)) {
            throw new TypeError("Max." + method + ": Max requried");
          }
          return Max(Math.max(x2, m3.valueOf()));
        };
      }
      return obj = {
        inspect,
        toString: inspect,
        equals: equals3,
        valueOf,
        type: type3,
        empty: empty4,
        concat: concat3("concat")
      }, obj[fl.equals] = equals3, obj[fl.empty] = empty4, obj[fl.concat] = concat3(fl.concat), obj["@@type"] = _type, obj.constructor = Max, obj;
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
    var isNil3 = require_isNil();
    var isNumber = require_isNumber();
    var isSameType = require_isSameType();
    var _empty = function() {
      return Min(Infinity);
    };
    function Min(n2) {
      var obj;
      var x2 = isNil3(n2) ? _empty().valueOf() : n2;
      if (!arguments.length || !isNumber(x2)) {
        throw new TypeError("Min: Numeric value required");
      }
      var valueOf = function() {
        return x2;
      };
      var empty4 = _empty;
      var inspect = function() {
        return "Min" + _inspect(valueOf());
      };
      var equals3 = function(m3) {
        return isSameType(Min, m3) && _equals2(x2, m3.valueOf());
      };
      function concat3(method) {
        return function(m3) {
          if (!isSameType(Min, m3)) {
            throw new TypeError("Min." + method + ": Min required");
          }
          return Min(Math.min(x2, m3.valueOf()));
        };
      }
      return obj = {
        inspect,
        toString: inspect,
        equals: equals3,
        valueOf,
        type: type3,
        empty: empty4,
        concat: concat3("concat")
      }, obj[fl.equals] = equals3, obj[fl.empty] = empty4, obj[fl.concat] = concat3(fl.concat), obj["@@type"] = _type, obj.constructor = Min, obj;
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
    var isNil3 = require_isNil();
    var isNumber = require_isNumber();
    var isSameType = require_isSameType();
    var _empty = function() {
      return Prod(1);
    };
    function Prod(n2) {
      var obj;
      var x2 = isNil3(n2) ? _empty().valueOf() : n2;
      if (!arguments.length || !isNumber(x2)) {
        throw new TypeError("Prod: Numeric value required");
      }
      var valueOf = function() {
        return x2;
      };
      var empty4 = _empty;
      var inspect = function() {
        return "Prod" + _inspect(valueOf());
      };
      var equals3 = function(m3) {
        return isSameType(Prod, m3) && _equals2(x2, m3.valueOf());
      };
      function concat3(method) {
        return function(m3) {
          if (!isSameType(Prod, m3)) {
            throw new TypeError("Prod." + method + ": Prod required");
          }
          return Prod(x2 * m3.valueOf());
        };
      }
      return obj = {
        inspect,
        toString: inspect,
        equals: equals3,
        valueOf,
        type: type3,
        empty: empty4,
        concat: concat3("concat")
      }, obj[fl.equals] = equals3, obj[fl.empty] = empty4, obj[fl.concat] = concat3(fl.concat), obj["@@type"] = _type, obj.constructor = Prod, obj;
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
    var isNil3 = require_isNil();
    var isNumber = require_isNumber();
    var isSameType = require_isSameType();
    var _empty = function() {
      return Sum(0);
    };
    function Sum(n2) {
      var obj;
      var x2 = isNil3(n2) ? _empty().valueOf() : n2;
      if (!arguments.length || !isNumber(x2)) {
        throw new TypeError("Sum: Numeric value required");
      }
      var valueOf = function() {
        return x2;
      };
      var empty4 = _empty;
      var inspect = function() {
        return "Sum" + _inspect(valueOf());
      };
      var equals3 = function(m3) {
        return isSameType(Sum, m3) && _equals2(x2, m3.valueOf());
      };
      function concat3(method) {
        return function(m3) {
          if (!isSameType(Sum, m3)) {
            throw new TypeError("Sum." + method + ": Sum required");
          }
          return Sum(x2 + m3.valueOf());
        };
      }
      return obj = {
        inspect,
        toString: inspect,
        valueOf,
        equals: equals3,
        type: type3,
        empty: empty4,
        concat: concat3("concat")
      }, obj[fl.equals] = equals3, obj[fl.empty] = empty4, obj[fl.concat] = concat3(fl.concat), obj["@@type"] = _type, obj.constructor = Sum, obj;
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
    var curry3 = require_curry();
    var fl = require_flNames();
    var isAlt = require_isAlt();
    var isSameType = require_isSameType();
    function alt(m3, x2) {
      if (!(isAlt(m3) && isSameType(m3, x2))) {
        throw new TypeError(
          "alt: Both arguments must be Alts of the same type"
        );
      }
      return (x2[fl.alt] || x2.alt).call(x2, m3);
    }
    module.exports = curry3(alt);
  }
});

// node_modules/crocks/pointfree/ap.js
var require_ap = __commonJS({
  "node_modules/crocks/pointfree/ap.js"(exports, module) {
    var array = require_array();
    var curry3 = require_curry();
    var isApplicative = require_isApplicative();
    var isArray = require_isArray();
    var isSameType = require_isSameType();
    function ap3(m3, x2) {
      if (!((isApplicative(m3) || isArray(m3)) && isSameType(m3, x2))) {
        throw new TypeError("ap: Both arguments must be Applys of the same type");
      }
      if (isArray(x2)) {
        return array.ap(m3, x2);
      }
      return x2.ap(m3);
    }
    module.exports = curry3(ap3);
  }
});

// node_modules/crocks/pointfree/bimap.js
var require_bimap = __commonJS({
  "node_modules/crocks/pointfree/bimap.js"(exports, module) {
    var curry3 = require_curry();
    var isBifunctor = require_isBifunctor();
    var isFunction = require_isFunction();
    var fl = require_flNames();
    function bimap(f, g2, m3) {
      if (!(isFunction(f) && isFunction(g2))) {
        throw new TypeError(
          "bimap: Functions required for first two arguments"
        );
      }
      if (!isBifunctor(m3)) {
        throw new TypeError(
          "bimap: Bifunctor required for third argument"
        );
      }
      return (m3[fl.bimap] || m3.bimap).call(m3, f, g2);
    }
    module.exports = curry3(bimap);
  }
});

// node_modules/crocks/pointfree/bichain.js
var require_bichain = __commonJS({
  "node_modules/crocks/pointfree/bichain.js"(exports, module) {
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    function bichain(f, g2, m3) {
      if (!isFunction(f) || !isFunction(g2)) {
        throw new TypeError("bichain: First two arguments must be Sum Type returning functions");
      }
      if (m3 && isFunction(m3.bichain)) {
        return m3.bichain.call(m3, f, g2);
      }
      throw new TypeError(
        "bichain: Third argument must be a Sum Type"
      );
    }
    module.exports = curry3(bichain);
  }
});

// node_modules/crocks/pointfree/both.js
var require_both = __commonJS({
  "node_modules/crocks/pointfree/both.js"(exports, module) {
    var Pair = require_types().proxy("Pair");
    var isFunction = require_isFunction();
    var isSameType = require_isSameType();
    function both3(m3) {
      if (isFunction(m3)) {
        return function(x2) {
          if (!isSameType(Pair, x2)) {
            throw new TypeError("both: Pair required as input");
          }
          return x2.bimap(m3, m3);
        };
      }
      if (m3 && isFunction(m3.both)) {
        return m3.both();
      }
      throw new TypeError("both: Strong Function or Profunctor required");
    }
    module.exports = both3;
  }
});

// node_modules/crocks/pointfree/chain.js
var require_chain = __commonJS({
  "node_modules/crocks/pointfree/chain.js"(exports, module) {
    var _chain = require_array().chain;
    var curry3 = require_curry();
    var isArray = require_isArray();
    var isChain = require_isChain();
    var isFunction = require_isFunction();
    var fl = require_flNames();
    function chain3(fn, m3) {
      if (!isFunction(fn)) {
        throw new TypeError("chain: Chain returning function required for first argument");
      }
      if (!(isChain(m3) || isArray(m3))) {
        throw new TypeError("chain: Chain of the same type required for second argument");
      }
      if (isArray(m3)) {
        return _chain(fn, m3);
      }
      return (m3[fl.chain] || m3.chain).call(m3, fn);
    }
    module.exports = curry3(chain3);
  }
});

// node_modules/crocks/pointfree/coalesce.js
var require_coalesce = __commonJS({
  "node_modules/crocks/pointfree/coalesce.js"(exports, module) {
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    function coalesce(f, g2, m3) {
      if (!(isFunction(f) && isFunction(g2))) {
        throw new TypeError(
          "coalesce: Functions required for first two arguments"
        );
      }
      if (m3 && isFunction(m3.coalesce)) {
        return m3.coalesce(f, g2);
      }
      throw new TypeError(
        "coalesce: Sum Type required for third argument"
      );
    }
    module.exports = curry3(coalesce);
  }
});

// node_modules/crocks/pointfree/compareWith.js
var require_compareWith = __commonJS({
  "node_modules/crocks/pointfree/compareWith.js"(exports, module) {
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    function compareWith(x2, y3, m3) {
      if (!(m3 && isFunction(m3.compareWith))) {
        throw new TypeError("compareWith: Equiv required for third argument");
      }
      return m3.compareWith(x2, y3);
    }
    module.exports = curry3(compareWith);
  }
});

// node_modules/crocks/pointfree/concat.js
var require_concat = __commonJS({
  "node_modules/crocks/pointfree/concat.js"(exports, module) {
    var curry3 = require_curry();
    var isSameType = require_isSameType();
    var isSemigroup = require_isSemigroup();
    var fl = require_flNames();
    function concat3(x2, m3) {
      if (!(isSemigroup(m3) && isSameType(x2, m3))) {
        throw new TypeError(
          "concat: Semigroups of the same type required for both arguments"
        );
      }
      return (m3[fl.concat] || m3.concat).call(m3, x2);
    }
    module.exports = curry3(concat3);
  }
});

// node_modules/crocks/pointfree/cons.js
var require_cons = __commonJS({
  "node_modules/crocks/pointfree/cons.js"(exports, module) {
    var curry3 = require_curry();
    var isArray = require_isArray();
    var isFunction = require_isFunction();
    function cons(x2, m3) {
      if (m3 && isFunction(m3.cons)) {
        return m3.cons(x2);
      } else if (isArray(m3)) {
        return [x2].concat(m3);
      }
      throw new TypeError("cons: List or Array required for second argument");
    }
    module.exports = curry3(cons);
  }
});

// node_modules/crocks/pointfree/contramap.js
var require_contramap = __commonJS({
  "node_modules/crocks/pointfree/contramap.js"(exports, module) {
    var compose2 = require_compose();
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    var isContravariant = require_isContravariant();
    var fl = require_flNames();
    function contramap(fn, m3) {
      if (!isFunction(fn)) {
        throw new TypeError(
          "contramap: Function required for first argument"
        );
      }
      if (isFunction(m3)) {
        return compose2(m3, fn);
      }
      if (isContravariant(m3)) {
        return (m3[fl.contramap] || m3.contramap).call(m3, fn);
      }
      throw new TypeError(
        "contramap: Function or Contavariant Functor of the same type required for second argument"
      );
    }
    module.exports = curry3(contramap);
  }
});

// node_modules/crocks/pointfree/either.js
var require_either = __commonJS({
  "node_modules/crocks/pointfree/either.js"(exports, module) {
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    function either3(lf, rf, m3) {
      if (!(isFunction(lf) && isFunction(rf))) {
        throw new TypeError(
          "either: First two arguments must be functions"
        );
      }
      if (!(m3 && isFunction(m3.either))) {
        throw new TypeError(
          "either: Last argument must be a Sum Type"
        );
      }
      return m3.either(lf, rf);
    }
    module.exports = curry3(either3);
  }
});

// node_modules/crocks/pointfree/empty.js
var require_empty = __commonJS({
  "node_modules/crocks/pointfree/empty.js"(exports, module) {
    var hasAlg = require_hasAlg();
    var isSameType = require_isSameType();
    var fl = require_flNames();
    function empty4(m3) {
      if (m3 && hasAlg("empty", m3)) {
        return (m3[fl.empty] || m3.empty).call(m3);
      }
      if (m3 && hasAlg("empty", m3.constructor)) {
        return (m3.constructor[fl.empty] || m3.constructor.empty).call(m3);
      }
      if (isSameType([], m3)) {
        return [];
      }
      if (isSameType("", m3)) {
        return "";
      }
      if (isSameType({}, m3)) {
        return {};
      }
      throw new TypeError("empty: Monoid, Array, String or Object required");
    }
    module.exports = empty4;
  }
});

// node_modules/crocks/pointfree/equals.js
var require_equals2 = __commonJS({
  "node_modules/crocks/pointfree/equals.js"(exports, module) {
    var _equals2 = require_equals();
    var curry3 = require_curry();
    function equals3(x2, y3) {
      return _equals2(x2, y3);
    }
    module.exports = curry3(equals3);
  }
});

// node_modules/crocks/pointfree/extend.js
var require_extend = __commonJS({
  "node_modules/crocks/pointfree/extend.js"(exports, module) {
    var curry3 = require_curry();
    var fl = require_flNames();
    var isExtend = require_isExtend();
    var isFunction = require_isFunction();
    function extend(fn, m3) {
      if (!isFunction(fn)) {
        throw new TypeError("extend: Function required for first argument");
      }
      if (!isExtend(m3)) {
        throw new TypeError("extend: Extend required for second argument");
      }
      return (m3[fl.extend] || m3.extend).call(m3, fn);
    }
    module.exports = curry3(extend);
  }
});

// node_modules/crocks/pointfree/filter.js
var require_filter = __commonJS({
  "node_modules/crocks/pointfree/filter.js"(exports, module) {
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    var isPredOrFunc = require_isPredOrFunc();
    var isObject = require_isObject();
    var object = require_object();
    var predOrFunc = require_predOrFunc();
    function filter2(pred, m3) {
      if (!isPredOrFunc(pred)) {
        throw new TypeError("filter: Pred or predicate function required for first argument");
      }
      var fn = function(x2) {
        return predOrFunc(pred, x2);
      };
      if (m3 && isFunction(m3.filter)) {
        return m3.filter(fn);
      }
      if (m3 && isObject(m3)) {
        return object.filter(fn, m3);
      }
      throw new TypeError("filter: Filterable or Object required for second argument");
    }
    module.exports = curry3(filter2);
  }
});

// node_modules/crocks/pointfree/first.js
var require_first = __commonJS({
  "node_modules/crocks/pointfree/first.js"(exports, module) {
    var Pair = require_types().proxy("Pair");
    var isFunction = require_isFunction();
    var isSameType = require_isSameType();
    var identity2 = function(x2) {
      return x2;
    };
    function first(m3) {
      if (isFunction(m3)) {
        return function(x2) {
          if (!isSameType(Pair, x2)) {
            throw new TypeError("first: Pair required as input");
          }
          return x2.bimap(m3, identity2);
        };
      }
      if (m3 && isFunction(m3.first)) {
        return m3.first();
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
    function fold(m3) {
      if (isArray(m3)) {
        return _array.fold(m3);
      }
      if (m3 && isFunction(m3.fold)) {
        return m3.fold();
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
    var curry3 = require_curry();
    var isArray = require_isArray();
    var isFunction = require_isFunction();
    function foldMap(fn, m3) {
      if (!isFunction(fn)) {
        throw new TypeError(
          "foldMap: Function returning Semigroups of the same type required for first argument"
        );
      }
      if (isArray(m3)) {
        return _array.foldMap(fn, m3);
      }
      if (m3 && isFunction(m3.foldMap)) {
        return m3.foldMap(fn);
      }
      throw new TypeError(
        "foldMap: Non-empty Foldable with at least one Semigroup required for second argument"
      );
    }
    module.exports = curry3(foldMap);
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
    function head2(m3) {
      if (m3 && isFunction(m3.head)) {
        return m3.head();
      }
      if (isArray(m3) || isString(m3)) {
        return !m3.length ? Nothing() : Just(m3[0]);
      }
      if (isIterable(m3)) {
        var cloned = cloneIterable(m3);
        var iterator = cloned[Symbol.iterator]();
        var head3 = iterator.next();
        return head3.done ? Nothing() : Just(head3.value);
      }
      throw new TypeError("head: List or iterable required");
    }
    module.exports = head2;
  }
});

// node_modules/crocks/pointfree/init.js
var require_init = __commonJS({
  "node_modules/crocks/pointfree/init.js"(exports, module) {
    var isFunction = require_isFunction();
    var isNil3 = require_isNil();
    var ref = require_Maybe();
    var Nothing = ref.Nothing;
    var Just = ref.Just;
    function init3(m3) {
      if (!isNil3(m3)) {
        if (isFunction(m3.init)) {
          return m3.init();
        }
        if (isFunction(m3.slice)) {
          return m3.length < 2 ? Nothing() : Just(m3.slice(0, -1));
        }
      }
      throw new TypeError("init: Argument must be an Array, String, or List");
    }
    module.exports = init3;
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
    function last2(m3) {
      if (m3 && isFunction(m3.last)) {
        return m3.last();
      }
      if (isArray(m3) || isString(m3)) {
        return !m3.length ? Nothing() : Just(m3[m3.length - 1]);
      }
      if (isIterable(m3)) {
        var cloned = cloneIterable(m3);
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
    module.exports = last2;
  }
});

// node_modules/crocks/pointfree/map.js
var require_map = __commonJS({
  "node_modules/crocks/pointfree/map.js"(exports, module) {
    var compose2 = require_compose();
    var curry3 = require_curry();
    var isArray = require_isArray();
    var isObject = require_isObject();
    var isFunction = require_isFunction();
    var isFunctor = require_isFunctor();
    var array = require_array();
    var object = require_object();
    var fl = require_flNames();
    function map3(fn, m3) {
      if (!isFunction(fn)) {
        throw new TypeError("map: Function required for first argument");
      }
      if (isFunction(m3)) {
        return compose2(fn, m3);
      }
      if (isArray(m3)) {
        return array.map(fn, m3);
      }
      if (m3 && isFunctor(m3)) {
        return (m3[fl.map] || m3.map).call(m3, fn);
      }
      if (isObject(m3)) {
        return object.map(fn, m3);
      }
      throw new TypeError("map: Object, Function or Functor of the same type required for second argument");
    }
    module.exports = curry3(map3);
  }
});

// node_modules/crocks/pointfree/merge.js
var require_merge = __commonJS({
  "node_modules/crocks/pointfree/merge.js"(exports, module) {
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    function merge(fn, m3) {
      if (!isFunction(fn)) {
        throw new TypeError("merge: Function required for first argument");
      }
      if (!(m3 && isFunction(m3.merge))) {
        throw new TypeError("merge: Pair or Tuple required for second argument");
      }
      return m3.merge(fn);
    }
    module.exports = curry3(merge);
  }
});

// node_modules/crocks/pointfree/option.js
var require_option = __commonJS({
  "node_modules/crocks/pointfree/option.js"(exports, module) {
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    function option(x2, m3) {
      if (!(m3 && isFunction(m3.option))) {
        throw new TypeError("option: Last argument must be a Maybe, First or Last");
      }
      return m3.option(x2);
    }
    module.exports = curry3(option);
  }
});

// node_modules/crocks/pointfree/promap.js
var require_promap = __commonJS({
  "node_modules/crocks/pointfree/promap.js"(exports, module) {
    var compose2 = require_compose();
    var curry3 = require_curry();
    var fl = require_flNames();
    var isFunction = require_isFunction();
    var isProfunctor = require_isProfunctor();
    function promap2(l, r, m3) {
      if (!(isFunction(l) && isFunction(r))) {
        throw new TypeError(
          "promap: Functions required for first two arguments"
        );
      }
      if (isFunction(m3)) {
        return compose2(compose2(r, m3), l);
      }
      if (isProfunctor(m3)) {
        return (m3[fl.promap] || m3.promap).call(m3, l, r);
      }
      throw new TypeError(
        "promap: Function or Profunctor required for third argument"
      );
    }
    module.exports = curry3(promap2);
  }
});

// node_modules/crocks/pointfree/reduce.js
var require_reduce = __commonJS({
  "node_modules/crocks/pointfree/reduce.js"(exports, module) {
    var curry3 = require_curry();
    var isFoldable = require_isFoldable();
    var isFunction = require_isFunction();
    var fl = require_flNames();
    function reduce2(fn, init3, m3) {
      if (!isFunction(fn)) {
        throw new TypeError(
          "reduce: Function required for first argument"
        );
      }
      if (!isFoldable(m3)) {
        throw new TypeError(
          "reduce: Foldable required for third argument"
        );
      }
      return (m3[fl.reduce] || m3.reduce).call(m3, fn, init3);
    }
    module.exports = curry3(reduce2);
  }
});

// node_modules/crocks/pointfree/reduceRight.js
var require_reduceRight = __commonJS({
  "node_modules/crocks/pointfree/reduceRight.js"(exports, module) {
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    function reduceRight3(fn, init3, m3) {
      if (!isFunction(fn)) {
        throw new TypeError("reduceRight: Function required for first argument");
      } else if (!(m3 && isFunction(m3.reduceRight))) {
        throw new TypeError("reduceRight: Right Foldable required for third argument");
      }
      return m3.reduceRight(fn, init3);
    }
    module.exports = curry3(reduceRight3);
  }
});

// node_modules/crocks/pointfree/reject.js
var require_reject = __commonJS({
  "node_modules/crocks/pointfree/reject.js"(exports, module) {
    var curry3 = require_curry();
    var isArray = require_isArray();
    var isPredOrFunc = require_isPredOrFunc();
    var isFunction = require_isFunction();
    var isObject = require_isObject();
    var object = require_object();
    var predOrFunc = require_predOrFunc();
    var not3 = function(fn) {
      return function(x2) {
        return !fn(x2);
      };
    };
    function reject3(pred, m3) {
      if (!isPredOrFunc(pred)) {
        throw new TypeError(
          "reject: Pred or predicate function required for first argument"
        );
      }
      var fn = function(x2) {
        return predOrFunc(pred, x2);
      };
      if (m3 && isFunction(m3.reject)) {
        return m3.reject(fn);
      }
      if (isArray(m3)) {
        return m3.filter(not3(fn));
      }
      if (isObject(m3)) {
        return object.filter(not3(fn), m3);
      }
      throw new TypeError("reject: Foldable or Object required for second argument");
    }
    module.exports = curry3(reject3);
  }
});

// node_modules/crocks/pointfree/run.js
var require_run = __commonJS({
  "node_modules/crocks/pointfree/run.js"(exports, module) {
    var isFunction = require_isFunction();
    function run3(m3) {
      if (!(m3 && isFunction(m3.run))) {
        throw new TypeError("run: IO required");
      }
      return m3.run();
    }
    module.exports = run3;
  }
});

// node_modules/crocks/pointfree/runWith.js
var require_runWith = __commonJS({
  "node_modules/crocks/pointfree/runWith.js"(exports, module) {
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    function runWith(x2, m3) {
      if (!(m3 && isFunction(m3.runWith))) {
        throw new TypeError("runWith: Arrow, Endo, Pred, Reader, Star or State required for second argument");
      }
      return m3.runWith(x2);
    }
    module.exports = curry3(runWith);
  }
});

// node_modules/crocks/pointfree/second.js
var require_second = __commonJS({
  "node_modules/crocks/pointfree/second.js"(exports, module) {
    var Pair = require_types().proxy("Pair");
    var isFunction = require_isFunction();
    var isSameType = require_isSameType();
    var identity2 = function(x2) {
      return x2;
    };
    function second(m3) {
      if (isFunction(m3)) {
        return function(x2) {
          if (!isSameType(Pair, x2)) {
            throw new TypeError("second: Pair required as input");
          }
          return x2.bimap(identity2, m3);
        };
      }
      if (m3 && isFunction(m3.second)) {
        return m3.second();
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
    var curry3 = require_curry();
    var isArray = require_isArray();
    var isApplicative = require_isApplicative();
    var isFunction = require_isFunction();
    function sequence3(af, m3) {
      if (!(isApplicative(af) || isFunction(af))) {
        throw new TypeError(
          "sequence: Applicative TypeRep or Apply returning function required for first argument"
        );
      }
      if (m3 && isFunction(m3.sequence)) {
        return m3.sequence(af);
      }
      if (isArray(m3)) {
        return array.sequence(af, m3);
      }
      throw new TypeError("sequence: Traversable or Array required for second argument");
    }
    module.exports = curry3(sequence3);
  }
});

// node_modules/crocks/pointfree/swap.js
var require_swap = __commonJS({
  "node_modules/crocks/pointfree/swap.js"(exports, module) {
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    function swap(f, g2, m3) {
      if (!(isFunction(f) && isFunction(g2))) {
        throw new TypeError(
          "swap: Function required for first two arguments"
        );
      }
      if (m3 && isFunction(m3.swap)) {
        return m3.swap(f, g2);
      }
      throw new TypeError(
        "swap: Async, Either, Pair or Result required for third arguments"
      );
    }
    module.exports = curry3(swap);
  }
});

// node_modules/crocks/pointfree/tail.js
var require_tail = __commonJS({
  "node_modules/crocks/pointfree/tail.js"(exports, module) {
    var isFunction = require_isFunction();
    var isNil3 = require_isNil();
    var ref = require_Maybe();
    var Nothing = ref.Nothing;
    var Just = ref.Just;
    function tail2(m3) {
      if (!isNil3(m3)) {
        if (isFunction(m3.tail)) {
          return m3.tail();
        }
        if (isFunction(m3.slice)) {
          return m3.length < 2 ? Nothing() : Just(m3.slice(1));
        }
      }
      throw new TypeError("tail: Array, String or List required");
    }
    module.exports = tail2;
  }
});

// node_modules/crocks/pointfree/traverse.js
var require_traverse = __commonJS({
  "node_modules/crocks/pointfree/traverse.js"(exports, module) {
    var array = require_array();
    var curry3 = require_curry();
    var isApplicative = require_isApplicative();
    var isArray = require_isArray();
    var isFunction = require_isFunction();
    function traverse3(af, fn, m3) {
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
      if (m3 && isFunction(m3.traverse)) {
        return m3.traverse(af, fn);
      }
      if (isArray(m3)) {
        return array.traverse(af, fn, m3);
      }
      throw new TypeError("traverse: Traversable or Array required for third argument");
    }
    module.exports = curry3(traverse3);
  }
});

// node_modules/crocks/pointfree/valueOf.js
var require_valueOf = __commonJS({
  "node_modules/crocks/pointfree/valueOf.js"(exports, module) {
    var isNil3 = require_isNil();
    function valueOf(m3) {
      if (isNil3(m3)) {
        return m3;
      }
      return m3.valueOf();
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
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    function evalWith(x2, m3) {
      if (!(m3 && isFunction(m3.evalWith))) {
        throw new TypeError("evalWith: State required for second argument");
      }
      return m3.evalWith(x2);
    }
    module.exports = curry3(evalWith);
  }
});

// node_modules/crocks/State/execWith.js
var require_execWith = __commonJS({
  "node_modules/crocks/State/execWith.js"(exports, module) {
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    function execWith(x2, m3) {
      if (!(m3 && isFunction(m3.execWith))) {
        throw new TypeError("execWith: State required for second argument");
      }
      return m3.execWith(x2);
    }
    module.exports = curry3(execWith);
  }
});

// node_modules/crocks/Pair/fst.js
var require_fst = __commonJS({
  "node_modules/crocks/Pair/fst.js"(exports, module) {
    var isFunction = require_isFunction();
    function fst(m3) {
      if (!(m3 && isFunction(m3.fst))) {
        throw new TypeError("fst: Pair required");
      }
      return m3.fst();
    }
    module.exports = fst;
  }
});

// node_modules/crocks/Writer/log.js
var require_log = __commonJS({
  "node_modules/crocks/Writer/log.js"(exports, module) {
    var isFunction = require_isFunction();
    function log(m3) {
      if (!(m3 && isFunction(m3.log))) {
        throw new TypeError("log: Writer required");
      }
      return m3.log();
    }
    module.exports = log;
  }
});

// node_modules/crocks/Tuple/nmap.js
var require_nmap = __commonJS({
  "node_modules/crocks/Tuple/nmap.js"(exports, module) {
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    var isInteger = require_isInteger();
    var isSameType = require_isSameType();
    var Tuple = require_Tuple();
    var validTuple = function(n2, m3) {
      return isSameType(Tuple(n2), m3);
    };
    function runMap(m3, fns) {
      var n2 = fns.length;
      if (!validTuple(n2, m3)) {
        throw new TypeError("nmap: " + n2 + "-Tuple required");
      }
      fns.forEach(function(fn) {
        if (!isFunction(fn)) {
          throw new TypeError("nmap: Functions required for all arguments");
        }
      });
      return m3.mapAll.apply(m3, fns);
    }
    var withLength = function(n2, fn) {
      return Object.defineProperty(fn, "length", {
        value: n2
      });
    };
    function nmap(n2) {
      if (!(isInteger(n2) && n2 >= 1)) {
        throw new TypeError("nmap: Integer required for first argument");
      }
      switch (n2) {
        case 1:
          return function(a3, m3) {
            return runMap(m3, [a3]);
          };
        case 2:
          return function(a3, b2, m3) {
            return runMap(m3, [a3, b2]);
          };
        case 3:
          return function(a3, b2, c3, m3) {
            return runMap(m3, [a3, b2, c3]);
          };
        case 4:
          return function(a3, b2, c3, d3, m3) {
            return runMap(m3, [a3, b2, c3, d3]);
          };
        case 5:
          return function(a3, b2, c3, d3, e2, m3) {
            return runMap(m3, [a3, b2, c3, d3, e2]);
          };
        case 6:
          return function(a3, b2, c3, d3, e2, f, m3) {
            return runMap(m3, [a3, b2, c3, d3, e2, f]);
          };
        case 7:
          return function(a3, b2, c3, d3, e2, f, g2, m3) {
            return runMap(m3, [a3, b2, c3, d3, e2, f, g2]);
          };
        case 8:
          return function(a3, b2, c3, d3, e2, f, g2, h3, m3) {
            return runMap(m3, [a3, b2, c3, d3, e2, f, g2, h3]);
          };
        case 9:
          return function(a3, b2, c3, d3, e2, f, g2, h3, i2, m3) {
            return runMap(m3, [a3, b2, c3, d3, e2, f, g2, h3, i2]);
          };
        case 10:
          return function(a3, b2, c3, d3, e2, f, g2, h3, i2, j, m3) {
            return runMap(m3, [a3, b2, c3, d3, e2, f, g2, h3, i2, j]);
          };
        default:
          return withLength(n2 + 1, function() {
            var parts = [].slice.call(arguments);
            return runMap(parts[parts.length - 1], parts.slice(0, parts.length - 1));
          });
      }
    }
    module.exports = curry3(nmap);
  }
});

// node_modules/crocks/Tuple/project.js
var require_project = __commonJS({
  "node_modules/crocks/Tuple/project.js"(exports, module) {
    var isFunction = require_isFunction();
    var curry3 = require_curry();
    function project2(index, m3) {
      if (!(m3 && isFunction(m3.project))) {
        throw new TypeError("project: Tuple required");
      }
      return m3.project(index);
    }
    module.exports = curry3(project2);
  }
});

// node_modules/crocks/Async/race.js
var require_race = __commonJS({
  "node_modules/crocks/Async/race.js"(exports, module) {
    var curry3 = require_curry();
    var isSameType = require_isSameType();
    var Async2 = require_types().proxy("Async");
    function race(m3, a3) {
      if (!(isSameType(m3, a3) && isSameType(Async2, m3))) {
        throw new TypeError("race: Both arguments must be Asyncs");
      }
      return a3.race(m3);
    }
    module.exports = curry3(race);
  }
});

// node_modules/crocks/Writer/read.js
var require_read = __commonJS({
  "node_modules/crocks/Writer/read.js"(exports, module) {
    var isFunction = require_isFunction();
    function read(m3) {
      if (!(m3 && isFunction(m3.read))) {
        throw new TypeError("read: Writer required");
      }
      return m3.read();
    }
    module.exports = read;
  }
});

// node_modules/crocks/Pair/snd.js
var require_snd = __commonJS({
  "node_modules/crocks/Pair/snd.js"(exports, module) {
    var isFunction = require_isFunction();
    function snd(m3) {
      if (!(m3 && isFunction(m3.snd))) {
        throw new TypeError("snd: Pair required");
      }
      return m3.snd();
    }
    module.exports = snd;
  }
});

// node_modules/crocks/List/arrayToList.js
var require_arrayToList = __commonJS({
  "node_modules/crocks/List/arrayToList.js"(exports, module) {
    var List = require_List2();
    var curry3 = require_curry();
    var isArray = require_isArray();
    var isFunction = require_isFunction();
    function arrayToList(array) {
      if (isArray(array)) {
        return List.fromArray(array);
      } else if (isFunction(array)) {
        return function(x2) {
          var g2 = array(x2);
          if (!isArray(g2)) {
            throw new TypeError("arrayToList: Array returning function required");
          }
          return List.fromArray(g2);
        };
      }
      throw new TypeError("arrayToList: Array or Array returning function required");
    }
    module.exports = curry3(arrayToList);
  }
});

// node_modules/crocks/Async/asyncToPromise.js
var require_asyncToPromise = __commonJS({
  "node_modules/crocks/Async/asyncToPromise.js"(exports, module) {
    var curry3 = require_curry();
    var isSameType = require_isSameType();
    var isFunction = require_isFunction();
    var Async2 = require_types().proxy("Async");
    var toPromise = function(m3) {
      if (!isSameType(Async2, m3)) {
        throw new TypeError("asyncToPromise: Async or a function returning an Async required");
      }
      return m3.toPromise();
    };
    function asyncToPromise(m3) {
      return isFunction(m3) ? function(x2) {
        return toPromise(m3(x2));
      } : toPromise(m3);
    }
    module.exports = curry3(asyncToPromise);
  }
});

// node_modules/crocks/Async/eitherToAsync.js
var require_eitherToAsync = __commonJS({
  "node_modules/crocks/Async/eitherToAsync.js"(exports, module) {
    var Async2 = require_Async();
    var Either = require_types().proxy("Either");
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    var isSameType = require_isSameType();
    var applyTransform = function(either3) {
      return either3.either(Async2.Rejected, Async2.Resolved);
    };
    function eitherToAsync(either3) {
      if (isFunction(either3)) {
        return function(x2) {
          var m3 = either3(x2);
          if (!isSameType(Either, m3)) {
            throw new TypeError("eitherToAsync: Either returning function required");
          }
          return applyTransform(m3);
        };
      }
      if (isSameType(Either, either3)) {
        return applyTransform(either3);
      }
      throw new TypeError("eitherToAsync: Either or Either returning function required");
    }
    module.exports = curry3(eitherToAsync);
  }
});

// node_modules/crocks/First/eitherToFirst.js
var require_eitherToFirst = __commonJS({
  "node_modules/crocks/First/eitherToFirst.js"(exports, module) {
    var First = require_First();
    var Either = require_types().proxy("Either");
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    var isSameType = require_isSameType();
    var applyTransform = function(either3) {
      return either3.either(First.empty, First);
    };
    function eitherToFirst(either3) {
      if (isFunction(either3)) {
        return function(x2) {
          var m3 = either3(x2);
          if (!isSameType(Either, m3)) {
            throw new TypeError("eitherToFirst: Either returning function required");
          }
          return applyTransform(m3);
        };
      }
      if (isSameType(Either, either3)) {
        return applyTransform(either3);
      }
      throw new TypeError("eitherToFirst: Either or Either returning function required");
    }
    module.exports = curry3(eitherToFirst);
  }
});

// node_modules/crocks/Last/eitherToLast.js
var require_eitherToLast = __commonJS({
  "node_modules/crocks/Last/eitherToLast.js"(exports, module) {
    var Last = require_Last();
    var Either = require_types().proxy("Either");
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    var isSameType = require_isSameType();
    var applyTransform = function(either3) {
      return either3.either(Last.empty, Last);
    };
    function eitherToLast(either3) {
      if (isFunction(either3)) {
        return function(x2) {
          var m3 = either3(x2);
          if (!isSameType(Either, m3)) {
            throw new TypeError("eitherToLast: Either returning function required");
          }
          return applyTransform(m3);
        };
      }
      if (isSameType(Either, either3)) {
        return applyTransform(either3);
      }
      throw new TypeError("eitherToLast: Either or Either returning function required");
    }
    module.exports = curry3(eitherToLast);
  }
});

// node_modules/crocks/Maybe/eitherToMaybe.js
var require_eitherToMaybe = __commonJS({
  "node_modules/crocks/Maybe/eitherToMaybe.js"(exports, module) {
    var Maybe = require_Maybe2();
    var Either = require_types().proxy("Either");
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    var isSameType = require_isSameType();
    var applyTransform = function(either3) {
      return either3.either(Maybe.Nothing, Maybe.Just);
    };
    function eitherToMaybe(either3) {
      if (isFunction(either3)) {
        return function(x2) {
          var m3 = either3(x2);
          if (!isSameType(Either, m3)) {
            throw new TypeError("eitherToMaybe: Either returning function required");
          }
          return applyTransform(m3);
        };
      }
      if (isSameType(Either, either3)) {
        return applyTransform(either3);
      }
      throw new TypeError("eitherToMaybe: Either or Either returning function required");
    }
    module.exports = curry3(eitherToMaybe);
  }
});

// node_modules/crocks/Result/eitherToResult.js
var require_eitherToResult = __commonJS({
  "node_modules/crocks/Result/eitherToResult.js"(exports, module) {
    var Result = require_Result();
    var Either = require_types().proxy("Either");
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    var isSameType = require_isSameType();
    var applyTransform = function(either3) {
      return either3.either(Result.Err, Result.Ok);
    };
    function eitherToResult(either3) {
      if (isFunction(either3)) {
        return function(x2) {
          var m3 = either3(x2);
          if (!isSameType(Either, m3)) {
            throw new TypeError("eitherToResult: Either returning function required");
          }
          return applyTransform(m3);
        };
      }
      if (isSameType(Either, either3)) {
        return applyTransform(either3);
      }
      throw new TypeError("eitherToResult: Either or Either returning function required");
    }
    module.exports = curry3(eitherToResult);
  }
});

// node_modules/crocks/Async/firstToAsync.js
var require_firstToAsync = __commonJS({
  "node_modules/crocks/Async/firstToAsync.js"(exports, module) {
    var Async2 = require_Async();
    var First = require_types().proxy("First");
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    var isSameType = require_isSameType();
    var constant = function(x2) {
      return function() {
        return x2;
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
        return function(x2) {
          var m3 = first(x2);
          if (!isSameType(First, m3)) {
            throw new TypeError("firstToAsync: First returning function required for second argument");
          }
          return applyTransform(left, m3);
        };
      }
      if (isSameType(First, first)) {
        return applyTransform(left, first);
      }
      throw new TypeError("firstToAsync: First or First returning function required for second argument");
    }
    module.exports = curry3(firstToAsync);
  }
});

// node_modules/crocks/Either/firstToEither.js
var require_firstToEither = __commonJS({
  "node_modules/crocks/Either/firstToEither.js"(exports, module) {
    var Either = require_Either();
    var First = require_types().proxy("First");
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    var isSameType = require_isSameType();
    var constant = function(x2) {
      return function() {
        return x2;
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
        return function(x2) {
          var m3 = first(x2);
          if (!isSameType(First, m3)) {
            throw new TypeError("firstToEither: First returning function required for second argument");
          }
          return applyTransform(left, m3);
        };
      }
      if (isSameType(First, first)) {
        return applyTransform(left, first);
      }
      throw new TypeError("firstToEither: First or First returning function required for second argument");
    }
    module.exports = curry3(firstToEither);
  }
});

// node_modules/crocks/Last/firstToLast.js
var require_firstToLast = __commonJS({
  "node_modules/crocks/Last/firstToLast.js"(exports, module) {
    var Last = require_Last();
    var First = require_types().proxy("First");
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    var isSameType = require_isSameType();
    var applyTransform = function(first) {
      return Last(first.valueOf());
    };
    function firstToLast(first) {
      if (isFunction(first)) {
        return function(x2) {
          var m3 = first(x2);
          if (!isSameType(First, m3)) {
            throw new TypeError("firstToLast: First returning function required");
          }
          return applyTransform(m3);
        };
      }
      if (isSameType(First, first)) {
        return applyTransform(first);
      }
      throw new TypeError("firstToLast: First or First returning function required");
    }
    module.exports = curry3(firstToLast);
  }
});

// node_modules/crocks/Maybe/firstToMaybe.js
var require_firstToMaybe = __commonJS({
  "node_modules/crocks/Maybe/firstToMaybe.js"(exports, module) {
    var First = require_types().proxy("First");
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    var isSameType = require_isSameType();
    var applyTransform = function(first) {
      return first.valueOf();
    };
    function firstToMaybe(first) {
      if (isFunction(first)) {
        return function(x2) {
          var m3 = first(x2);
          if (!isSameType(First, m3)) {
            throw new TypeError("firstToMaybe: First returning function required");
          }
          return applyTransform(m3);
        };
      }
      if (isSameType(First, first)) {
        return applyTransform(first);
      }
      throw new TypeError("firstToMaybe: First or First returning function required");
    }
    module.exports = curry3(firstToMaybe);
  }
});

// node_modules/crocks/Result/firstToResult.js
var require_firstToResult = __commonJS({
  "node_modules/crocks/Result/firstToResult.js"(exports, module) {
    var Result = require_Result();
    var First = require_types().proxy("First");
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    var isSameType = require_isSameType();
    var constant = function(x2) {
      return function() {
        return x2;
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
        return function(x2) {
          var m3 = first(x2);
          if (!isSameType(First, m3)) {
            throw new TypeError("firstToResult: First returning function required for second argument");
          }
          return applyTransform(left, m3);
        };
      }
      if (isSameType(First, first)) {
        return applyTransform(left, first);
      }
      throw new TypeError("firstToResult: First or First returning function required for second argument");
    }
    module.exports = curry3(firstToResult);
  }
});

// node_modules/crocks/Async/lastToAsync.js
var require_lastToAsync = __commonJS({
  "node_modules/crocks/Async/lastToAsync.js"(exports, module) {
    var Async2 = require_Async();
    var Last = require_types().proxy("Last");
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    var isSameType = require_isSameType();
    var constant = function(x2) {
      return function() {
        return x2;
      };
    };
    var applyTransform = function(left, last2) {
      return last2.valueOf().either(
        constant(Async2.Rejected(left)),
        Async2.Resolved
      );
    };
    function lastToAsync(left, last2) {
      if (isFunction(last2)) {
        return function(x2) {
          var m3 = last2(x2);
          if (!isSameType(Last, m3)) {
            throw new TypeError("lastToAsync: Last returning function required for second argument");
          }
          return applyTransform(left, m3);
        };
      }
      if (isSameType(Last, last2)) {
        return applyTransform(left, last2);
      }
      throw new TypeError("lastToAsync: Last or Last returning function required for second argument");
    }
    module.exports = curry3(lastToAsync);
  }
});

// node_modules/crocks/Either/lastToEither.js
var require_lastToEither = __commonJS({
  "node_modules/crocks/Either/lastToEither.js"(exports, module) {
    var Either = require_Either();
    var Last = require_types().proxy("Last");
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    var isSameType = require_isSameType();
    var constant = function(x2) {
      return function() {
        return x2;
      };
    };
    var applyTransform = function(left, last2) {
      return last2.valueOf().either(
        constant(Either.Left(left)),
        Either.Right
      );
    };
    function lastToEither(left, last2) {
      if (isFunction(last2)) {
        return function(x2) {
          var m3 = last2(x2);
          if (!isSameType(Last, m3)) {
            throw new TypeError("lastToEither: Last returning function required for second argument");
          }
          return applyTransform(left, m3);
        };
      }
      if (isSameType(Last, last2)) {
        return applyTransform(left, last2);
      }
      throw new TypeError("lastToEither: Last or Last returning function required for second argument");
    }
    module.exports = curry3(lastToEither);
  }
});

// node_modules/crocks/First/lastToFirst.js
var require_lastToFirst = __commonJS({
  "node_modules/crocks/First/lastToFirst.js"(exports, module) {
    var First = require_First();
    var Last = require_types().proxy("Last");
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    var isSameType = require_isSameType();
    var applyTransform = function(last2) {
      return First(last2.valueOf());
    };
    function lastToFirst(last2) {
      if (isFunction(last2)) {
        return function(x2) {
          var m3 = last2(x2);
          if (!isSameType(Last, m3)) {
            throw new TypeError("lastToFirst: Last returning function required");
          }
          return applyTransform(m3);
        };
      }
      if (isSameType(Last, last2)) {
        return applyTransform(last2);
      }
      throw new TypeError("lastToFirst: Last or Last returning function required");
    }
    module.exports = curry3(lastToFirst);
  }
});

// node_modules/crocks/Maybe/lastToMaybe.js
var require_lastToMaybe = __commonJS({
  "node_modules/crocks/Maybe/lastToMaybe.js"(exports, module) {
    var Last = require_types().proxy("Last");
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    var isSameType = require_isSameType();
    var applyTransform = function(last2) {
      return last2.valueOf();
    };
    function lastToMaybe(last2) {
      if (isFunction(last2)) {
        return function(x2) {
          var m3 = last2(x2);
          if (!isSameType(Last, m3)) {
            throw new TypeError("lastToMaybe: Last returning function required");
          }
          return applyTransform(m3);
        };
      }
      if (isSameType(Last, last2)) {
        return applyTransform(last2);
      }
      throw new TypeError("lastToMaybe: Last or Last returning function required");
    }
    module.exports = curry3(lastToMaybe);
  }
});

// node_modules/crocks/Result/lastToResult.js
var require_lastToResult = __commonJS({
  "node_modules/crocks/Result/lastToResult.js"(exports, module) {
    var Result = require_Result();
    var Last = require_types().proxy("Last");
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    var isSameType = require_isSameType();
    var constant = function(x2) {
      return function() {
        return x2;
      };
    };
    var applyTransform = function(left, last2) {
      return last2.valueOf().either(
        constant(Result.Err(left)),
        Result.Ok
      );
    };
    function lastToResult(left, last2) {
      if (isFunction(last2)) {
        return function(x2) {
          var m3 = last2(x2);
          if (!isSameType(Last, m3)) {
            throw new TypeError("lastToResult: Last returning function required for second argument");
          }
          return applyTransform(left, m3);
        };
      }
      if (isSameType(Last, last2)) {
        return applyTransform(left, last2);
      }
      throw new TypeError("lastToResult: Last or Last returning function required for second argument");
    }
    module.exports = curry3(lastToResult);
  }
});

// node_modules/crocks/List/listToArray.js
var require_listToArray = __commonJS({
  "node_modules/crocks/List/listToArray.js"(exports, module) {
    var List = require_List2();
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    var isSameType = require_isSameType();
    function listToArray(list) {
      if (isFunction(list)) {
        return function(x2) {
          var m3 = list(x2);
          if (!isSameType(List, m3)) {
            throw new TypeError("listToArray: List returning function required");
          }
          return m3.toArray();
        };
      }
      if (isSameType(List, list)) {
        return list.toArray();
      }
      throw new TypeError("listToArray: List or List returning function required");
    }
    module.exports = curry3(listToArray);
  }
});

// node_modules/crocks/Maybe/maybeToArray.js
var require_maybeToArray = __commonJS({
  "node_modules/crocks/Maybe/maybeToArray.js"(exports, module) {
    var Maybe = require_Maybe2();
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    var isSameType = require_isSameType();
    var applyTransform = function(maybe) {
      return maybe.either(function() {
        return [];
      }, function(x2) {
        return [x2];
      });
    };
    var err = "maybeToArray: Argument must be a Maybe instanstace or a Maybe returning function";
    function maybeToArray(maybe) {
      if (isFunction(maybe)) {
        return function(x2) {
          var m3 = maybe(x2);
          if (!isSameType(Maybe, m3)) {
            throw new TypeError(err);
          }
          return applyTransform(m3);
        };
      }
      if (isSameType(Maybe, maybe)) {
        return applyTransform(maybe);
      }
      throw new TypeError(err);
    }
    module.exports = curry3(maybeToArray);
  }
});

// node_modules/crocks/Async/maybeToAsync.js
var require_maybeToAsync = __commonJS({
  "node_modules/crocks/Async/maybeToAsync.js"(exports, module) {
    var Async2 = require_Async();
    var Maybe = require_types().proxy("Maybe");
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    var isSameType = require_isSameType();
    var constant = function(x2) {
      return function() {
        return x2;
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
        return function(x2) {
          var m3 = maybe(x2);
          if (!isSameType(Maybe, m3)) {
            throw new TypeError("maybeToAsync: Maybe returning function required for second argument");
          }
          return applyTransform(left, m3);
        };
      }
      if (isSameType(Maybe, maybe)) {
        return applyTransform(left, maybe);
      }
      throw new TypeError("maybeToAsync: Maybe or Maybe returning function required for second argument");
    }
    module.exports = curry3(maybeToAsync);
  }
});

// node_modules/crocks/Either/maybeToEither.js
var require_maybeToEither = __commonJS({
  "node_modules/crocks/Either/maybeToEither.js"(exports, module) {
    var Either = require_Either();
    var Maybe = require_types().proxy("Maybe");
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    var isSameType = require_isSameType();
    var constant = function(x2) {
      return function() {
        return x2;
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
        return function(x2) {
          var m3 = maybe(x2);
          if (!isSameType(Maybe, m3)) {
            throw new TypeError("maybeToEither: Maybe returning function required for second argument");
          }
          return applyTransform(left, m3);
        };
      }
      if (isSameType(Maybe, maybe)) {
        return applyTransform(left, maybe);
      }
      throw new TypeError("maybeToEither: Maybe or Maybe returning function required for second argument");
    }
    module.exports = curry3(maybeToEither);
  }
});

// node_modules/crocks/First/maybeToFirst.js
var require_maybeToFirst = __commonJS({
  "node_modules/crocks/First/maybeToFirst.js"(exports, module) {
    var First = require_First();
    var Maybe = require_types().proxy("Maybe");
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    var isSameType = require_isSameType();
    var applyTransform = function(maybe) {
      return First(maybe);
    };
    function maybeToFirst(maybe) {
      if (isFunction(maybe)) {
        return function(x2) {
          var m3 = maybe(x2);
          if (!isSameType(Maybe, m3)) {
            throw new TypeError("maybeToFirst: Maybe returning function required");
          }
          return applyTransform(m3);
        };
      }
      if (isSameType(Maybe, maybe)) {
        return applyTransform(maybe);
      }
      throw new TypeError("maybeToFirst: Maybe or Maybe returning function required");
    }
    module.exports = curry3(maybeToFirst);
  }
});

// node_modules/crocks/Last/maybeToLast.js
var require_maybeToLast = __commonJS({
  "node_modules/crocks/Last/maybeToLast.js"(exports, module) {
    var Last = require_Last();
    var Maybe = require_types().proxy("Maybe");
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    var isSameType = require_isSameType();
    var applyTransform = function(maybe) {
      return Last(maybe);
    };
    function maybeToLast(maybe) {
      if (isFunction(maybe)) {
        return function(x2) {
          var m3 = maybe(x2);
          if (!isSameType(Maybe, m3)) {
            throw new TypeError("maybeToLast: Maybe returning function required");
          }
          return applyTransform(m3);
        };
      }
      if (isSameType(Maybe, maybe)) {
        return applyTransform(maybe);
      }
      throw new TypeError("maybeToLast: Maybe or Maybe returning function required");
    }
    module.exports = curry3(maybeToLast);
  }
});

// node_modules/crocks/List/maybeToList.js
var require_maybeToList = __commonJS({
  "node_modules/crocks/List/maybeToList.js"(exports, module) {
    var List = require_List2();
    var Maybe = require_types().proxy("Maybe");
    var curry3 = require_curry();
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
        return function(x2) {
          var m3 = maybe(x2);
          if (!isSameType(Maybe, m3)) {
            throw new TypeError(err);
          }
          return applyTransform(m3);
        };
      }
      if (isSameType(Maybe, maybe)) {
        return applyTransform(maybe);
      }
      throw new TypeError(err);
    }
    module.exports = curry3(maybeToList);
  }
});

// node_modules/crocks/Result/maybeToResult.js
var require_maybeToResult = __commonJS({
  "node_modules/crocks/Result/maybeToResult.js"(exports, module) {
    var Result = require_Result();
    var Maybe = require_types().proxy("Maybe");
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    var isSameType = require_isSameType();
    var constant = function(x2) {
      return function() {
        return x2;
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
        return function(x2) {
          var m3 = maybe(x2);
          if (!isSameType(Maybe, m3)) {
            throw new TypeError("maybeToResult: Maybe returning function required for second argument");
          }
          return applyTransform(left, m3);
        };
      }
      if (isSameType(Maybe, maybe)) {
        return applyTransform(left, maybe);
      }
      throw new TypeError("maybeToResult: Maybe or Maybe returning function required for second argument");
    }
    module.exports = curry3(maybeToResult);
  }
});

// node_modules/crocks/Async/resultToAsync.js
var require_resultToAsync = __commonJS({
  "node_modules/crocks/Async/resultToAsync.js"(exports, module) {
    var Async2 = require_Async();
    var Result = require_types().proxy("Result");
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    var isSameType = require_isSameType();
    var applyTransform = function(either3) {
      return either3.either(Async2.Rejected, Async2.Resolved);
    };
    function resultToAsync(result) {
      if (isFunction(result)) {
        return function(x2) {
          var m3 = result(x2);
          if (!isSameType(Result, m3)) {
            throw new TypeError("resultToAsync: Result returning function required");
          }
          return applyTransform(m3);
        };
      }
      if (isSameType(Result, result)) {
        return applyTransform(result);
      }
      throw new TypeError("resultToAsync: Result or Result returning function required");
    }
    module.exports = curry3(resultToAsync);
  }
});

// node_modules/crocks/Either/resultToEither.js
var require_resultToEither = __commonJS({
  "node_modules/crocks/Either/resultToEither.js"(exports, module) {
    var Either = require_Either();
    var Result = require_types().proxy("Result");
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    var isSameType = require_isSameType();
    var applyTransform = function(result) {
      return result.either(Either.Left, Either.Right);
    };
    function resultToEither(result) {
      if (isFunction(result)) {
        return function(x2) {
          var m3 = result(x2);
          if (!isSameType(Result, m3)) {
            throw new TypeError("resultToEither: Result returning function required");
          }
          return applyTransform(m3);
        };
      }
      if (isSameType(Result, result)) {
        return applyTransform(result);
      }
      throw new TypeError("resultToEither: Result or Result returning function required");
    }
    module.exports = curry3(resultToEither);
  }
});

// node_modules/crocks/First/resultToFirst.js
var require_resultToFirst = __commonJS({
  "node_modules/crocks/First/resultToFirst.js"(exports, module) {
    var First = require_First();
    var Result = require_types().proxy("Result");
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    var isSameType = require_isSameType();
    var applyTransform = function(result) {
      return result.either(First.empty, First);
    };
    function resultToFirst(result) {
      if (isFunction(result)) {
        return function(x2) {
          var m3 = result(x2);
          if (!isSameType(Result, m3)) {
            throw new TypeError("resultToFirst: Result returning function required");
          }
          return applyTransform(m3);
        };
      }
      if (isSameType(Result, result)) {
        return applyTransform(result);
      }
      throw new TypeError("resultToFirst: Result or Result returning function required");
    }
    module.exports = curry3(resultToFirst);
  }
});

// node_modules/crocks/Last/resultToLast.js
var require_resultToLast = __commonJS({
  "node_modules/crocks/Last/resultToLast.js"(exports, module) {
    var Last = require_Last();
    var Result = require_types().proxy("Result");
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    var isSameType = require_isSameType();
    var applyTransform = function(result) {
      return result.either(Last.empty, Last);
    };
    function resultToLast(result) {
      if (isFunction(result)) {
        return function(x2) {
          var m3 = result(x2);
          if (!isSameType(Result, m3)) {
            throw new TypeError("resultToLast: Result returning function required");
          }
          return applyTransform(m3);
        };
      }
      if (isSameType(Result, result)) {
        return applyTransform(result);
      }
      throw new TypeError("resultToLast: Result or Result returning function required");
    }
    module.exports = curry3(resultToLast);
  }
});

// node_modules/crocks/Maybe/resultToMaybe.js
var require_resultToMaybe = __commonJS({
  "node_modules/crocks/Maybe/resultToMaybe.js"(exports, module) {
    var Maybe = require_Maybe2();
    var Result = require_types().proxy("Result");
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    var isSameType = require_isSameType();
    var applyTransform = function(result) {
      return result.either(Maybe.Nothing, Maybe.Just);
    };
    function resultToMaybe(result) {
      if (isFunction(result)) {
        return function(x2) {
          var m3 = result(x2);
          if (!isSameType(Result, m3)) {
            throw new TypeError("resultToMaybe: Result returning function required");
          }
          return applyTransform(m3);
        };
      }
      if (isSameType(Result, result)) {
        return applyTransform(result);
      }
      throw new TypeError("resultToMaybe: Result or Result returning function required");
    }
    module.exports = curry3(resultToMaybe);
  }
});

// node_modules/crocks/Tuple/tupleToArray.js
var require_tupleToArray = __commonJS({
  "node_modules/crocks/Tuple/tupleToArray.js"(exports, module) {
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    function tupleToArray(tuple) {
      if (isFunction(tuple)) {
        return function(x2) {
          var m3 = tuple(x2);
          if (!isFunction(m3.tupleLength)) {
            throw new TypeError("tupleToArray: Tuple returning function required");
          }
          return m3.toArray();
        };
      }
      if (isFunction(tuple.tupleLength)) {
        return tuple.toArray();
      }
      throw new TypeError("tupleToArray: Tuple or Tuple returning function required");
    }
    module.exports = curry3(tupleToArray);
  }
});

// node_modules/crocks/Pair/writerToPair.js
var require_writerToPair = __commonJS({
  "node_modules/crocks/Pair/writerToPair.js"(exports, module) {
    var curry3 = require_curry();
    var isFunction = require_isFunction();
    var isWriter = function(x2) {
      return !!x2 && isFunction(x2.read);
    };
    var applyTransform = function(w2) {
      return w2.read();
    };
    function writerToPair(writer) {
      if (isFunction(writer)) {
        return function(x2) {
          var m3 = writer(x2);
          if (!isWriter(m3)) {
            throw new TypeError("writerToPair: Writer returning function required");
          }
          return applyTransform(m3);
        };
      }
      if (isWriter(writer)) {
        return applyTransform(writer);
      }
      throw new TypeError("writerToPair: Writer or Writer returning function required");
    }
    module.exports = curry3(writerToPair);
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
  return !!value && (typeof value === "object" || typeof value === "function") && typeof value.then === "function";
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
function safe_not_equal(a3, b2) {
  return a3 != a3 ? b2 == b2 : a3 !== b2 || (a3 && typeof a3 === "object" || typeof a3 === "function");
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
function svg_element(name) {
  return document.createElementNS("http://www.w3.org/2000/svg", name);
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
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e2) {
      dirty_components.length = 0;
      flushidx = 0;
      throw e2;
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
  function update4(type3, index, key, value) {
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
      update4(info.then, 1, info.value, value);
      set_current_component(null);
    }, (error) => {
      set_current_component(current_component2);
      update4(info.catch, 2, info.error, error);
      set_current_component(null);
      if (!info.hasCatch) {
        throw error;
      }
    });
    if (info.current !== info.pending) {
      update4(info.pending, 0);
      return true;
    }
  } else {
    if (info.current !== info.then) {
      update4(info.then, 1, info.value, promise);
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
function create_component(block) {
  block && block.c();
}
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
function init(component, options, instance2, create_fragment3, not_equal, props3, append_styles, dirty = [-1]) {
  const parent_component = current_component;
  set_current_component(component);
  const $$ = component.$$ = {
    fragment: null,
    ctx: [],
    props: props3,
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
  $$.fragment = create_fragment3 ? create_fragment3($$.ctx) : false;
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

// node_modules/date-fns/esm/_lib/toInteger/index.js
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

// node_modules/date-fns/esm/_lib/requiredArgs/index.js
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
  }
}

// node_modules/date-fns/esm/toDate/index.js
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof3(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function _typeof3(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument);
  if (argument instanceof Date || _typeof(argument) === "object" && argStr === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || argStr === "[object Number]") {
    return new Date(argument);
  } else {
    if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

// node_modules/date-fns/esm/addMilliseconds/index.js
function addMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var timestamp = toDate(dirtyDate).getTime();
  var amount = toInteger(dirtyAmount);
  return new Date(timestamp + amount);
}

// node_modules/date-fns/esm/_lib/defaultOptions/index.js
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}

// node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

// node_modules/date-fns/esm/isDate/index.js
function _typeof2(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof2 = function _typeof3(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof2 = function _typeof3(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof2(obj);
}
function isDate(value) {
  requiredArgs(1, arguments);
  return value instanceof Date || _typeof2(value) === "object" && Object.prototype.toString.call(value) === "[object Date]";
}

// node_modules/date-fns/esm/isValid/index.js
function isValid(dirtyDate) {
  requiredArgs(1, arguments);
  if (!isDate(dirtyDate) && typeof dirtyDate !== "number") {
    return false;
  }
  var date = toDate(dirtyDate);
  return !isNaN(Number(date));
}

// node_modules/date-fns/esm/subMilliseconds/index.js
function subMilliseconds(dirtyDate, dirtyAmount) {
  requiredArgs(2, arguments);
  var amount = toInteger(dirtyAmount);
  return addMilliseconds(dirtyDate, -amount);
}

// node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js
var MILLISECONDS_IN_DAY = 864e5;
function getUTCDayOfYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference3 = timestamp - startOfYearTimestamp;
  return Math.floor(difference3 / MILLISECONDS_IN_DAY) + 1;
}

// node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js
function startOfUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var weekStartsOn = 1;
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

// node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js
function getUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js
function startOfUTCISOWeekYear(dirtyDate) {
  requiredArgs(1, arguments);
  var year = getUTCISOWeekYear(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCISOWeek(fourthOfJanuary);
  return date;
}

// node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js
var MILLISECONDS_IN_WEEK = 6048e5;
function getUTCISOWeek(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

// node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js
function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions2 = getDefaultOptions();
  var weekStartsOn = toInteger((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  var date = toDate(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

// node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js
function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions2 = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js
function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  requiredArgs(1, arguments);
  var defaultOptions2 = getDefaultOptions();
  var firstWeekContainsDate = toInteger((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = getUTCWeekYear(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = startOfUTCWeek(firstWeek, options);
  return date;
}

// node_modules/date-fns/esm/_lib/getUTCWeek/index.js
var MILLISECONDS_IN_WEEK2 = 6048e5;
function getUTCWeek(dirtyDate, options) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime();
  return Math.round(diff / MILLISECONDS_IN_WEEK2) + 1;
}

// node_modules/date-fns/esm/_lib/addLeadingZeros/index.js
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? "-" : "";
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = "0" + output;
  }
  return sign + output;
}

// node_modules/date-fns/esm/_lib/format/lightFormatters/index.js
var formatters = {
  y: function y(date, token) {
    var signedYear = date.getUTCFullYear();
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
  },
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  d: function d(date, token) {
    return addLeadingZeros(date.getUTCDate(), token.length);
  },
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  h: function h(date, token) {
    return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
  },
  H: function H(date, token) {
    return addLeadingZeros(date.getUTCHours(), token.length);
  },
  m: function m(date, token) {
    return addLeadingZeros(date.getUTCMinutes(), token.length);
  },
  s: function s(date, token) {
    return addLeadingZeros(date.getUTCSeconds(), token.length);
  },
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};
var lightFormatters_default = formatters;

// node_modules/date-fns/esm/_lib/format/formatters/index.js
var dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
var formatters2 = {
  G: function G(date, token, localize2) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      case "G":
      case "GG":
      case "GGG":
        return localize2.era(era, {
          width: "abbreviated"
        });
      case "GGGGG":
        return localize2.era(era, {
          width: "narrow"
        });
      case "GGGG":
      default:
        return localize2.era(era, {
          width: "wide"
        });
    }
  },
  y: function y2(date, token, localize2) {
    if (token === "yo") {
      var signedYear = date.getUTCFullYear();
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize2.ordinalNumber(year, {
        unit: "year"
      });
    }
    return lightFormatters_default.y(date, token);
  },
  Y: function Y(date, token, localize2, options) {
    var signedWeekYear = getUTCWeekYear(date, options);
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      var twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize2.ordinalNumber(weekYear, {
        unit: "year"
      });
    }
    return addLeadingZeros(weekYear, token.length);
  },
  R: function R(date, token) {
    var isoWeekYear = getUTCISOWeekYear(date);
    return addLeadingZeros(isoWeekYear, token.length);
  },
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return addLeadingZeros(year, token.length);
  },
  Q: function Q(date, token, localize2) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      case "Q":
        return String(quarter);
      case "QQ":
        return addLeadingZeros(quarter, 2);
      case "Qo":
        return localize2.ordinalNumber(quarter, {
          unit: "quarter"
        });
      case "QQQ":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      case "QQQQQ":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      case "QQQQ":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  q: function q(date, token, localize2) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      case "q":
        return String(quarter);
      case "qq":
        return addLeadingZeros(quarter, 2);
      case "qo":
        return localize2.ordinalNumber(quarter, {
          unit: "quarter"
        });
      case "qqq":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      case "qqqqq":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      case "qqqq":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  M: function M2(date, token, localize2) {
    var month = date.getUTCMonth();
    switch (token) {
      case "M":
      case "MM":
        return lightFormatters_default.M(date, token);
      case "Mo":
        return localize2.ordinalNumber(month + 1, {
          unit: "month"
        });
      case "MMM":
        return localize2.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      case "MMMMM":
        return localize2.month(month, {
          width: "narrow",
          context: "formatting"
        });
      case "MMMM":
      default:
        return localize2.month(month, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  L: function L(date, token, localize2) {
    var month = date.getUTCMonth();
    switch (token) {
      case "L":
        return String(month + 1);
      case "LL":
        return addLeadingZeros(month + 1, 2);
      case "Lo":
        return localize2.ordinalNumber(month + 1, {
          unit: "month"
        });
      case "LLL":
        return localize2.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      case "LLLLL":
        return localize2.month(month, {
          width: "narrow",
          context: "standalone"
        });
      case "LLLL":
      default:
        return localize2.month(month, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  w: function w(date, token, localize2, options) {
    var week = getUTCWeek(date, options);
    if (token === "wo") {
      return localize2.ordinalNumber(week, {
        unit: "week"
      });
    }
    return addLeadingZeros(week, token.length);
  },
  I: function I(date, token, localize2) {
    var isoWeek = getUTCISOWeek(date);
    if (token === "Io") {
      return localize2.ordinalNumber(isoWeek, {
        unit: "week"
      });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  d: function d2(date, token, localize2) {
    if (token === "do") {
      return localize2.ordinalNumber(date.getUTCDate(), {
        unit: "date"
      });
    }
    return lightFormatters_default.d(date, token);
  },
  D: function D(date, token, localize2) {
    var dayOfYear = getUTCDayOfYear(date);
    if (token === "Do") {
      return localize2.ordinalNumber(dayOfYear, {
        unit: "dayOfYear"
      });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  E: function E(date, token, localize2) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      case "E":
      case "EE":
      case "EEE":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "EEEEE":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "EEEEEE":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "EEEE":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  e: function e(date, token, localize2, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "e":
        return String(localDayOfWeek);
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      case "eo":
        return localize2.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "eee":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "eeeee":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "eeeeee":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "eeee":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  c: function c(date, token, localize2, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      case "c":
        return String(localDayOfWeek);
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      case "co":
        return localize2.ordinalNumber(localDayOfWeek, {
          unit: "day"
        });
      case "ccc":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      case "ccccc":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      case "cccccc":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      case "cccc":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  i: function i(date, token, localize2) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      case "i":
        return String(isoDayOfWeek);
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      case "io":
        return localize2.ordinalNumber(isoDayOfWeek, {
          unit: "day"
        });
      case "iii":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      case "iiiii":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      case "iiiiii":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      case "iiii":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  a: function a2(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  b: function b(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  B: function B(date, token, localize2) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  h: function h2(date, token, localize2) {
    if (token === "ho") {
      var hours = date.getUTCHours() % 12;
      if (hours === 0)
        hours = 12;
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return lightFormatters_default.h(date, token);
  },
  H: function H2(date, token, localize2) {
    if (token === "Ho") {
      return localize2.ordinalNumber(date.getUTCHours(), {
        unit: "hour"
      });
    }
    return lightFormatters_default.H(date, token);
  },
  K: function K(date, token, localize2) {
    var hours = date.getUTCHours() % 12;
    if (token === "Ko") {
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  k: function k(date, token, localize2) {
    var hours = date.getUTCHours();
    if (hours === 0)
      hours = 24;
    if (token === "ko") {
      return localize2.ordinalNumber(hours, {
        unit: "hour"
      });
    }
    return addLeadingZeros(hours, token.length);
  },
  m: function m2(date, token, localize2) {
    if (token === "mo") {
      return localize2.ordinalNumber(date.getUTCMinutes(), {
        unit: "minute"
      });
    }
    return lightFormatters_default.m(date, token);
  },
  s: function s2(date, token, localize2) {
    if (token === "so") {
      return localize2.ordinalNumber(date.getUTCSeconds(), {
        unit: "second"
      });
    }
    return lightFormatters_default.s(date, token);
  },
  S: function S2(date, token) {
    return lightFormatters_default.S(date, token);
  },
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      case "XXXXX":
      case "XXX":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      case "xxxxx":
      case "xxx":
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1e3);
    return addLeadingZeros(timestamp, token.length);
  },
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return addLeadingZeros(timestamp, token.length);
  }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? "-" : "+";
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimiter = dirtyDelimiter || "";
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || "";
  var sign = offset > 0 ? "-" : "+";
  var absOffset = Math.abs(offset);
  var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
  var minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
var formatters_default = formatters2;

// node_modules/date-fns/esm/_lib/format/longFormatters/index.js
var dateLongFormatter = function dateLongFormatter2(pattern, formatLong2) {
  switch (pattern) {
    case "P":
      return formatLong2.date({
        width: "short"
      });
    case "PP":
      return formatLong2.date({
        width: "medium"
      });
    case "PPP":
      return formatLong2.date({
        width: "long"
      });
    case "PPPP":
    default:
      return formatLong2.date({
        width: "full"
      });
  }
};
var timeLongFormatter = function timeLongFormatter2(pattern, formatLong2) {
  switch (pattern) {
    case "p":
      return formatLong2.time({
        width: "short"
      });
    case "pp":
      return formatLong2.time({
        width: "medium"
      });
    case "ppp":
      return formatLong2.time({
        width: "long"
      });
    case "pppp":
    default:
      return formatLong2.time({
        width: "full"
      });
  }
};
var dateTimeLongFormatter = function dateTimeLongFormatter2(pattern, formatLong2) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong2);
  }
  var dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong2.dateTime({
        width: "short"
      });
      break;
    case "PP":
      dateTimeFormat = formatLong2.dateTime({
        width: "medium"
      });
      break;
    case "PPP":
      dateTimeFormat = formatLong2.dateTime({
        width: "long"
      });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong2.dateTime({
        width: "full"
      });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
var longFormatters_default = longFormatters;

// node_modules/date-fns/esm/_lib/protectedTokens/index.js
var protectedDayOfYearTokens = ["D", "DD"];
var protectedWeekYearTokens = ["YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format2, input) {
  if (token === "YYYY") {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "YY") {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "D") {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === "DD") {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

// node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
var formatDistance = function formatDistance2(token, count2, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count2 === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count2.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};
var formatDistance_default = formatDistance;

// node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js
function buildFormatLongFn(args) {
  return function() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format2 = args.formats[width] || args.formats[args.defaultWidth];
    return format2;
  };
}

// node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js
var dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
var timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};
var formatLong_default = formatLong;

// node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
var formatRelative_default = formatRelative;

// node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js
function buildLocalizeFn(args) {
  return function(dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : "standalone";
    var valuesArray;
    if (context === "formatting" && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}

// node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js
var eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};
var dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
  var number = Number(dirtyNumber);
  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
var localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};
var localize_default = localize;

// node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js
function buildMatchFn(args) {
  return function(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function(pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}

// node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js
function buildMatchPatternFn(args) {
  return function(string) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult)
      return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult)
      return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value,
      rest
    };
  };
}

// node_modules/date-fns/esm/locale/en-US/_lib/match/index.js
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: function valueCallback2(index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};
var match_default = match;

// node_modules/date-fns/esm/locale/en-US/index.js
var locale = {
  code: "en-US",
  formatDistance: formatDistance_default,
  formatLong: formatLong_default,
  formatRelative: formatRelative_default,
  localize: localize_default,
  match: match_default,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
var en_US_default = locale;

// node_modules/date-fns/esm/_lib/defaultLocale/index.js
var defaultLocale_default = en_US_default;

// node_modules/date-fns/esm/format/index.js
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  requiredArgs(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions2 = getDefaultOptions();
  var locale2 = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions2.locale) !== null && _ref !== void 0 ? _ref : defaultLocale_default;
  var firstWeekContainsDate = toInteger((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions2.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions2.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  }
  var weekStartsOn = toInteger((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions2.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions2.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  }
  if (!locale2.localize) {
    throw new RangeError("locale must contain localize property");
  }
  if (!locale2.formatLong) {
    throw new RangeError("locale must contain formatLong property");
  }
  var originalDate = toDate(dirtyDate);
  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
  var utcDate = subMilliseconds(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale: locale2,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function(substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      var longFormatter = longFormatters_default[firstCharacter];
      return longFormatter(substring, locale2.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp).map(function(substring) {
    if (substring === "''") {
      return "'";
    }
    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }
    var formatter = formatters_default[firstCharacter];
    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && isProtectedWeekYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && isProtectedDayOfYearToken(substring)) {
        throwProtectedError(substring, dirtyFormatStr, String(dirtyDate));
      }
      return formatter(utcDate, substring, locale2.localize, formatterOptions);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
    }
    return substring;
  }).join("");
  return result;
}
function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

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
  function set3(new_value) {
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
  function update4(fn) {
    set3(fn(value));
  }
  function subscribe2(run3, invalidate = noop) {
    const subscriber = [run3, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set3) || noop;
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
  return { set: set3, update: update4, subscribe: subscribe2 };
}

// node_modules/ramda/es/index.js
var es_exports = {};
__export(es_exports, {
  F: () => F_default,
  T: () => T_default,
  __: () => __default,
  add: () => add_default,
  addIndex: () => addIndex_default,
  adjust: () => adjust_default,
  all: () => all_default,
  allPass: () => allPass_default,
  always: () => always_default,
  and: () => and_default,
  andThen: () => andThen_default,
  any: () => any_default,
  anyPass: () => anyPass_default,
  ap: () => ap_default,
  aperture: () => aperture_default,
  append: () => append_default,
  apply: () => apply_default,
  applySpec: () => applySpec_default,
  applyTo: () => applyTo_default,
  ascend: () => ascend_default,
  assoc: () => assoc_default,
  assocPath: () => assocPath_default,
  binary: () => binary_default,
  bind: () => bind_default,
  both: () => both_default,
  call: () => call_default,
  chain: () => chain_default,
  clamp: () => clamp_default,
  clone: () => clone_default,
  collectBy: () => collectBy_default,
  comparator: () => comparator_default,
  complement: () => complement_default,
  compose: () => compose,
  composeWith: () => composeWith_default,
  concat: () => concat_default,
  cond: () => cond_default,
  construct: () => construct_default,
  constructN: () => constructN_default,
  converge: () => converge_default,
  count: () => count_default,
  countBy: () => countBy_default,
  curry: () => curry_default,
  curryN: () => curryN_default,
  dec: () => dec_default,
  defaultTo: () => defaultTo_default,
  descend: () => descend_default,
  difference: () => difference_default,
  differenceWith: () => differenceWith_default,
  dissoc: () => dissoc_default,
  dissocPath: () => dissocPath_default,
  divide: () => divide_default,
  drop: () => drop_default,
  dropLast: () => dropLast_default,
  dropLastWhile: () => dropLastWhile_default,
  dropRepeats: () => dropRepeats_default,
  dropRepeatsWith: () => dropRepeatsWith_default,
  dropWhile: () => dropWhile_default,
  either: () => either_default,
  empty: () => empty_default,
  endsWith: () => endsWith_default,
  eqBy: () => eqBy_default,
  eqProps: () => eqProps_default,
  equals: () => equals_default,
  evolve: () => evolve_default,
  filter: () => filter_default,
  find: () => find_default,
  findIndex: () => findIndex_default,
  findLast: () => findLast_default,
  findLastIndex: () => findLastIndex_default,
  flatten: () => flatten_default,
  flip: () => flip_default,
  forEach: () => forEach_default,
  forEachObjIndexed: () => forEachObjIndexed_default,
  fromPairs: () => fromPairs_default,
  groupBy: () => groupBy_default,
  groupWith: () => groupWith_default,
  gt: () => gt_default,
  gte: () => gte_default,
  has: () => has_default,
  hasIn: () => hasIn_default,
  hasPath: () => hasPath_default,
  head: () => head_default,
  identical: () => identical_default,
  identity: () => identity_default,
  ifElse: () => ifElse_default,
  inc: () => inc_default,
  includes: () => includes_default,
  indexBy: () => indexBy_default,
  indexOf: () => indexOf_default,
  init: () => init_default,
  innerJoin: () => innerJoin_default,
  insert: () => insert_default,
  insertAll: () => insertAll_default,
  intersection: () => intersection_default,
  intersperse: () => intersperse_default,
  into: () => into_default,
  invert: () => invert_default,
  invertObj: () => invertObj_default,
  invoker: () => invoker_default,
  is: () => is_default,
  isEmpty: () => isEmpty_default,
  isNil: () => isNil_default,
  join: () => join_default,
  juxt: () => juxt_default,
  keys: () => keys_default,
  keysIn: () => keysIn_default,
  last: () => last_default,
  lastIndexOf: () => lastIndexOf_default,
  length: () => length_default,
  lens: () => lens_default,
  lensIndex: () => lensIndex_default,
  lensPath: () => lensPath_default,
  lensProp: () => lensProp_default,
  lift: () => lift_default,
  liftN: () => liftN_default,
  lt: () => lt_default,
  lte: () => lte_default,
  map: () => map_default,
  mapAccum: () => mapAccum_default,
  mapAccumRight: () => mapAccumRight_default,
  mapObjIndexed: () => mapObjIndexed_default,
  match: () => match_default2,
  mathMod: () => mathMod_default,
  max: () => max_default,
  maxBy: () => maxBy_default,
  mean: () => mean_default,
  median: () => median_default,
  memoizeWith: () => memoizeWith_default,
  mergeAll: () => mergeAll_default,
  mergeDeepLeft: () => mergeDeepLeft_default,
  mergeDeepRight: () => mergeDeepRight_default,
  mergeDeepWith: () => mergeDeepWith_default,
  mergeDeepWithKey: () => mergeDeepWithKey_default,
  mergeLeft: () => mergeLeft_default,
  mergeRight: () => mergeRight_default,
  mergeWith: () => mergeWith_default,
  mergeWithKey: () => mergeWithKey_default,
  min: () => min_default,
  minBy: () => minBy_default,
  modify: () => modify_default,
  modifyPath: () => modifyPath_default,
  modulo: () => modulo_default,
  move: () => move_default,
  multiply: () => multiply_default,
  nAry: () => nAry_default,
  negate: () => negate_default,
  none: () => none_default,
  not: () => not_default,
  nth: () => nth_default,
  nthArg: () => nthArg_default,
  o: () => o_default,
  objOf: () => objOf_default,
  of: () => of_default,
  omit: () => omit_default,
  on: () => on_default,
  once: () => once_default,
  or: () => or_default,
  otherwise: () => otherwise_default,
  over: () => over_default,
  pair: () => pair_default,
  partial: () => partial_default,
  partialObject: () => partialObject_default,
  partialRight: () => partialRight_default,
  partition: () => partition_default,
  path: () => path_default,
  pathEq: () => pathEq_default,
  pathOr: () => pathOr_default,
  pathSatisfies: () => pathSatisfies_default,
  paths: () => paths_default,
  pick: () => pick_default,
  pickAll: () => pickAll_default,
  pickBy: () => pickBy_default,
  pipe: () => pipe,
  pipeWith: () => pipeWith_default,
  pluck: () => pluck_default,
  prepend: () => prepend_default,
  product: () => product_default,
  project: () => project_default,
  promap: () => promap_default,
  prop: () => prop_default,
  propEq: () => propEq_default,
  propIs: () => propIs_default,
  propOr: () => propOr_default,
  propSatisfies: () => propSatisfies_default,
  props: () => props_default,
  range: () => range_default,
  reduce: () => reduce_default,
  reduceBy: () => reduceBy_default,
  reduceRight: () => reduceRight_default,
  reduceWhile: () => reduceWhile_default,
  reduced: () => reduced_default,
  reject: () => reject_default,
  remove: () => remove_default,
  repeat: () => repeat_default,
  replace: () => replace_default,
  reverse: () => reverse_default,
  scan: () => scan_default,
  sequence: () => sequence_default,
  set: () => set_default,
  slice: () => slice_default,
  sort: () => sort_default,
  sortBy: () => sortBy_default,
  sortWith: () => sortWith_default,
  split: () => split_default,
  splitAt: () => splitAt_default,
  splitEvery: () => splitEvery_default,
  splitWhen: () => splitWhen_default,
  splitWhenever: () => splitWhenever_default,
  startsWith: () => startsWith_default,
  subtract: () => subtract_default,
  sum: () => sum_default,
  symmetricDifference: () => symmetricDifference_default,
  symmetricDifferenceWith: () => symmetricDifferenceWith_default,
  tail: () => tail_default,
  take: () => take_default,
  takeLast: () => takeLast_default,
  takeLastWhile: () => takeLastWhile_default,
  takeWhile: () => takeWhile_default,
  tap: () => tap_default,
  test: () => test_default,
  thunkify: () => thunkify_default,
  times: () => times_default,
  toLower: () => toLower_default,
  toPairs: () => toPairs_default,
  toPairsIn: () => toPairsIn_default,
  toString: () => toString_default,
  toUpper: () => toUpper_default,
  transduce: () => transduce_default,
  transpose: () => transpose_default,
  traverse: () => traverse_default,
  trim: () => trim_default,
  tryCatch: () => tryCatch_default,
  type: () => type_default,
  unapply: () => unapply_default,
  unary: () => unary_default,
  uncurryN: () => uncurryN_default,
  unfold: () => unfold_default,
  union: () => union_default,
  unionWith: () => unionWith_default,
  uniq: () => uniq_default,
  uniqBy: () => uniqBy_default,
  uniqWith: () => uniqWith_default,
  unless: () => unless_default,
  unnest: () => unnest_default,
  until: () => until_default,
  unwind: () => unwind_default,
  update: () => update_default,
  useWith: () => useWith_default,
  values: () => values_default,
  valuesIn: () => valuesIn_default,
  view: () => view_default,
  when: () => when_default,
  where: () => where_default,
  whereAny: () => whereAny_default,
  whereEq: () => whereEq_default,
  without: () => without_default,
  xor: () => xor_default,
  xprod: () => xprod_default,
  zip: () => zip_default,
  zipObj: () => zipObj_default,
  zipWith: () => zipWith_default
});

// node_modules/ramda/es/F.js
var F = function() {
  return false;
};
var F_default = F;

// node_modules/ramda/es/T.js
var T2 = function() {
  return true;
};
var T_default = T2;

// node_modules/ramda/es/__.js
var __default = {
  "@@functional/placeholder": true
};

// node_modules/ramda/es/internal/_isPlaceholder.js
function _isPlaceholder(a3) {
  return a3 != null && typeof a3 === "object" && a3["@@functional/placeholder"] === true;
}

// node_modules/ramda/es/internal/_curry1.js
function _curry1(fn) {
  return function f1(a3) {
    if (arguments.length === 0 || _isPlaceholder(a3)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}

// node_modules/ramda/es/internal/_curry2.js
function _curry2(fn) {
  return function f2(a3, b2) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a3) ? f2 : _curry1(function(_b) {
          return fn(a3, _b);
        });
      default:
        return _isPlaceholder(a3) && _isPlaceholder(b2) ? f2 : _isPlaceholder(a3) ? _curry1(function(_a) {
          return fn(_a, b2);
        }) : _isPlaceholder(b2) ? _curry1(function(_b) {
          return fn(a3, _b);
        }) : fn(a3, b2);
    }
  };
}

// node_modules/ramda/es/add.js
var add = /* @__PURE__ */ _curry2(function add2(a3, b2) {
  return Number(a3) + Number(b2);
});
var add_default = add;

// node_modules/ramda/es/internal/_concat.js
function _concat(set1, set22) {
  set1 = set1 || [];
  set22 = set22 || [];
  var idx;
  var len1 = set1.length;
  var len2 = set22.length;
  var result = [];
  idx = 0;
  while (idx < len1) {
    result[result.length] = set1[idx];
    idx += 1;
  }
  idx = 0;
  while (idx < len2) {
    result[result.length] = set22[idx];
    idx += 1;
  }
  return result;
}

// node_modules/ramda/es/internal/_arity.js
function _arity(n2, fn) {
  switch (n2) {
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
      return function(a0, a1, a22) {
        return fn.apply(this, arguments);
      };
    case 4:
      return function(a0, a1, a22, a3) {
        return fn.apply(this, arguments);
      };
    case 5:
      return function(a0, a1, a22, a3, a4) {
        return fn.apply(this, arguments);
      };
    case 6:
      return function(a0, a1, a22, a3, a4, a5) {
        return fn.apply(this, arguments);
      };
    case 7:
      return function(a0, a1, a22, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };
    case 8:
      return function(a0, a1, a22, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };
    case 9:
      return function(a0, a1, a22, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };
    case 10:
      return function(a0, a1, a22, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };
    default:
      throw new Error("First argument to _arity must be a non-negative integer no greater than ten");
  }
}

// node_modules/ramda/es/internal/_curryN.js
function _curryN(length3, received, fn) {
  return function() {
    var combined = [];
    var argsIdx = 0;
    var left = length3;
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
    return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length3, combined, fn));
  };
}

// node_modules/ramda/es/curryN.js
var curryN = /* @__PURE__ */ _curry2(function curryN2(length3, fn) {
  if (length3 === 1) {
    return _curry1(fn);
  }
  return _arity(length3, _curryN(length3, [], fn));
});
var curryN_default = curryN;

// node_modules/ramda/es/addIndex.js
var addIndex = /* @__PURE__ */ _curry1(function addIndex2(fn) {
  return curryN_default(fn.length, function() {
    var idx = 0;
    var origFn = arguments[0];
    var list = arguments[arguments.length - 1];
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = function() {
      var result = origFn.apply(this, _concat(arguments, [idx, list]));
      idx += 1;
      return result;
    };
    return fn.apply(this, args);
  });
});
var addIndex_default = addIndex;

// node_modules/ramda/es/internal/_curry3.js
function _curry3(fn) {
  return function f3(a3, b2, c3) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return _isPlaceholder(a3) ? f3 : _curry2(function(_b, _c) {
          return fn(a3, _b, _c);
        });
      case 2:
        return _isPlaceholder(a3) && _isPlaceholder(b2) ? f3 : _isPlaceholder(a3) ? _curry2(function(_a, _c) {
          return fn(_a, b2, _c);
        }) : _isPlaceholder(b2) ? _curry2(function(_b, _c) {
          return fn(a3, _b, _c);
        }) : _curry1(function(_c) {
          return fn(a3, b2, _c);
        });
      default:
        return _isPlaceholder(a3) && _isPlaceholder(b2) && _isPlaceholder(c3) ? f3 : _isPlaceholder(a3) && _isPlaceholder(b2) ? _curry2(function(_a, _b) {
          return fn(_a, _b, c3);
        }) : _isPlaceholder(a3) && _isPlaceholder(c3) ? _curry2(function(_a, _c) {
          return fn(_a, b2, _c);
        }) : _isPlaceholder(b2) && _isPlaceholder(c3) ? _curry2(function(_b, _c) {
          return fn(a3, _b, _c);
        }) : _isPlaceholder(a3) ? _curry1(function(_a) {
          return fn(_a, b2, c3);
        }) : _isPlaceholder(b2) ? _curry1(function(_b) {
          return fn(a3, _b, c3);
        }) : _isPlaceholder(c3) ? _curry1(function(_c) {
          return fn(a3, b2, _c);
        }) : fn(a3, b2, c3);
    }
  };
}

// node_modules/ramda/es/adjust.js
var adjust = /* @__PURE__ */ _curry3(function adjust2(idx, fn, list) {
  var len = list.length;
  if (idx >= len || idx < -len) {
    return list;
  }
  var _idx = (len + idx) % len;
  var _list = _concat(list);
  _list[_idx] = fn(list[_idx]);
  return _list;
});
var adjust_default = adjust;

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
function _reduced(x2) {
  return x2 && x2["@@transducer/reduced"] ? x2 : {
    "@@transducer/value": x2,
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

// node_modules/ramda/es/internal/_xall.js
var XAll = /* @__PURE__ */ function() {
  function XAll2(f, xf) {
    this.xf = xf;
    this.f = f;
    this.all = true;
  }
  XAll2.prototype["@@transducer/init"] = xfBase_default.init;
  XAll2.prototype["@@transducer/result"] = function(result) {
    if (this.all) {
      result = this.xf["@@transducer/step"](result, true);
    }
    return this.xf["@@transducer/result"](result);
  };
  XAll2.prototype["@@transducer/step"] = function(result, input) {
    if (!this.f(input)) {
      this.all = false;
      result = _reduced(this.xf["@@transducer/step"](result, false));
    }
    return result;
  };
  return XAll2;
}();
var _xall = /* @__PURE__ */ _curry2(function _xall2(f, xf) {
  return new XAll(f, xf);
});
var xall_default = _xall;

// node_modules/ramda/es/all.js
var all = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable(["all"], xall_default, function all2(fn, list) {
    var idx = 0;
    while (idx < list.length) {
      if (!fn(list[idx])) {
        return false;
      }
      idx += 1;
    }
    return true;
  })
);
var all_default = all;

// node_modules/ramda/es/max.js
var max = /* @__PURE__ */ _curry2(function max2(a3, b2) {
  return b2 > a3 ? b2 : a3;
});
var max_default = max;

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
function _isString(x2) {
  return Object.prototype.toString.call(x2) === "[object String]";
}

// node_modules/ramda/es/internal/_isArrayLike.js
var _isArrayLike = /* @__PURE__ */ _curry1(function isArrayLike(x2) {
  if (isArray_default(x2)) {
    return true;
  }
  if (!x2) {
    return false;
  }
  if (typeof x2 !== "object") {
    return false;
  }
  if (_isString(x2)) {
    return false;
  }
  if (x2.length === 0) {
    return true;
  }
  if (x2.length > 0) {
    return x2.hasOwnProperty(0) && x2.hasOwnProperty(x2.length - 1);
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
  XWrap2.prototype["@@transducer/step"] = function(acc, x2) {
    return this.f(acc, x2);
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
  return toString.call(arguments) === "[object Arguments]" ? function _isArguments2(x2) {
    return toString.call(x2) === "[object Arguments]";
  } : function _isArguments2(x2) {
    return _has("callee", x2);
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
var isInteger_default = Number.isInteger || function _isInteger(n2) {
  return n2 << 0 === n2;
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

// node_modules/ramda/es/allPass.js
var allPass = /* @__PURE__ */ _curry1(function allPass2(preds) {
  return curryN_default(reduce_default(max_default, 0, pluck_default("length", preds)), function() {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (!preds[idx].apply(this, arguments)) {
        return false;
      }
      idx += 1;
    }
    return true;
  });
});
var allPass_default = allPass;

// node_modules/ramda/es/always.js
var always = /* @__PURE__ */ _curry1(function always2(val) {
  return function() {
    return val;
  };
});
var always_default = always;

// node_modules/ramda/es/and.js
var and = /* @__PURE__ */ _curry2(function and2(a3, b2) {
  return a3 && b2;
});
var and_default = and;

// node_modules/ramda/es/internal/_xany.js
var XAny = /* @__PURE__ */ function() {
  function XAny2(f, xf) {
    this.xf = xf;
    this.f = f;
    this.any = false;
  }
  XAny2.prototype["@@transducer/init"] = xfBase_default.init;
  XAny2.prototype["@@transducer/result"] = function(result) {
    if (!this.any) {
      result = this.xf["@@transducer/step"](result, false);
    }
    return this.xf["@@transducer/result"](result);
  };
  XAny2.prototype["@@transducer/step"] = function(result, input) {
    if (this.f(input)) {
      this.any = true;
      result = _reduced(this.xf["@@transducer/step"](result, true));
    }
    return result;
  };
  return XAny2;
}();
var _xany = /* @__PURE__ */ _curry2(function _xany2(f, xf) {
  return new XAny(f, xf);
});
var xany_default = _xany;

// node_modules/ramda/es/any.js
var any = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable(["any"], xany_default, function any2(fn, list) {
    var idx = 0;
    while (idx < list.length) {
      if (fn(list[idx])) {
        return true;
      }
      idx += 1;
    }
    return false;
  })
);
var any_default = any;

// node_modules/ramda/es/anyPass.js
var anyPass = /* @__PURE__ */ _curry1(function anyPass2(preds) {
  return curryN_default(reduce_default(max_default, 0, pluck_default("length", preds)), function() {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (preds[idx].apply(this, arguments)) {
        return true;
      }
      idx += 1;
    }
    return false;
  });
});
var anyPass_default = anyPass;

// node_modules/ramda/es/ap.js
var ap = /* @__PURE__ */ _curry2(function ap2(applyF, applyX) {
  return typeof applyX["fantasy-land/ap"] === "function" ? applyX["fantasy-land/ap"](applyF) : typeof applyF.ap === "function" ? applyF.ap(applyX) : typeof applyF === "function" ? function(x2) {
    return applyF(x2)(applyX(x2));
  } : _reduce(function(acc, f) {
    return _concat(acc, map_default(f, applyX));
  }, [], applyF);
});
var ap_default = ap;

// node_modules/ramda/es/internal/_aperture.js
function _aperture(n2, list) {
  var idx = 0;
  var limit = list.length - (n2 - 1);
  var acc = new Array(limit >= 0 ? limit : 0);
  while (idx < limit) {
    acc[idx] = Array.prototype.slice.call(list, idx, idx + n2);
    idx += 1;
  }
  return acc;
}

// node_modules/ramda/es/internal/_xaperture.js
var XAperture = /* @__PURE__ */ function() {
  function XAperture2(n2, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n2);
  }
  XAperture2.prototype["@@transducer/init"] = xfBase_default.init;
  XAperture2.prototype["@@transducer/result"] = function(result) {
    this.acc = null;
    return this.xf["@@transducer/result"](result);
  };
  XAperture2.prototype["@@transducer/step"] = function(result, input) {
    this.store(input);
    return this.full ? this.xf["@@transducer/step"](result, this.getCopy()) : result;
  };
  XAperture2.prototype.store = function(input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };
  XAperture2.prototype.getCopy = function() {
    return _concat(Array.prototype.slice.call(this.acc, this.pos), Array.prototype.slice.call(this.acc, 0, this.pos));
  };
  return XAperture2;
}();
var _xaperture = /* @__PURE__ */ _curry2(function _xaperture2(n2, xf) {
  return new XAperture(n2, xf);
});
var xaperture_default = _xaperture;

// node_modules/ramda/es/aperture.js
var aperture = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable([], xaperture_default, _aperture)
);
var aperture_default = aperture;

// node_modules/ramda/es/append.js
var append2 = /* @__PURE__ */ _curry2(function append3(el2, list) {
  return _concat(list, [el2]);
});
var append_default = append2;

// node_modules/ramda/es/apply.js
var apply = /* @__PURE__ */ _curry2(function apply2(fn, args) {
  return fn.apply(this, args);
});
var apply_default = apply;

// node_modules/ramda/es/values.js
var values = /* @__PURE__ */ _curry1(function values2(obj) {
  var props3 = keys_default(obj);
  var len = props3.length;
  var vals = [];
  var idx = 0;
  while (idx < len) {
    vals[idx] = obj[props3[idx]];
    idx += 1;
  }
  return vals;
});
var values_default = values;

// node_modules/ramda/es/applySpec.js
function mapValues(fn, obj) {
  return isArray_default(obj) ? obj.map(fn) : keys_default(obj).reduce(function(acc, key) {
    acc[key] = fn(obj[key]);
    return acc;
  }, {});
}
var applySpec = /* @__PURE__ */ _curry1(function applySpec2(spec) {
  spec = mapValues(function(v) {
    return typeof v == "function" ? v : applySpec2(v);
  }, spec);
  return curryN_default(reduce_default(max_default, 0, pluck_default("length", values_default(spec))), function() {
    var args = arguments;
    return mapValues(function(f) {
      return apply_default(f, args);
    }, spec);
  });
});
var applySpec_default = applySpec;

// node_modules/ramda/es/applyTo.js
var applyTo = /* @__PURE__ */ _curry2(function applyTo2(x2, f) {
  return f(x2);
});
var applyTo_default = applyTo;

// node_modules/ramda/es/ascend.js
var ascend = /* @__PURE__ */ _curry3(function ascend2(fn, a3, b2) {
  var aa = fn(a3);
  var bb = fn(b2);
  return aa < bb ? -1 : aa > bb ? 1 : 0;
});
var ascend_default = ascend;

// node_modules/ramda/es/internal/_assoc.js
function _assoc(prop3, val, obj) {
  if (isInteger_default(prop3) && isArray_default(obj)) {
    var arr = [].concat(obj);
    arr[prop3] = val;
    return arr;
  }
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  result[prop3] = val;
  return result;
}

// node_modules/ramda/es/isNil.js
var isNil = /* @__PURE__ */ _curry1(function isNil2(x2) {
  return x2 == null;
});
var isNil_default = isNil;

// node_modules/ramda/es/assocPath.js
var assocPath = /* @__PURE__ */ _curry3(function assocPath2(path3, val, obj) {
  if (path3.length === 0) {
    return val;
  }
  var idx = path3[0];
  if (path3.length > 1) {
    var nextObj = !isNil_default(obj) && _has(idx, obj) ? obj[idx] : isInteger_default(path3[1]) ? [] : {};
    val = assocPath2(Array.prototype.slice.call(path3, 1), val, nextObj);
  }
  return _assoc(idx, val, obj);
});
var assocPath_default = assocPath;

// node_modules/ramda/es/assoc.js
var assoc = /* @__PURE__ */ _curry3(function assoc2(prop3, val, obj) {
  return assocPath_default([prop3], val, obj);
});
var assoc_default = assoc;

// node_modules/ramda/es/nAry.js
var nAry = /* @__PURE__ */ _curry2(function nAry2(n2, fn) {
  switch (n2) {
    case 0:
      return function() {
        return fn.call(this);
      };
    case 1:
      return function(a0) {
        return fn.call(this, a0);
      };
    case 2:
      return function(a0, a1) {
        return fn.call(this, a0, a1);
      };
    case 3:
      return function(a0, a1, a22) {
        return fn.call(this, a0, a1, a22);
      };
    case 4:
      return function(a0, a1, a22, a3) {
        return fn.call(this, a0, a1, a22, a3);
      };
    case 5:
      return function(a0, a1, a22, a3, a4) {
        return fn.call(this, a0, a1, a22, a3, a4);
      };
    case 6:
      return function(a0, a1, a22, a3, a4, a5) {
        return fn.call(this, a0, a1, a22, a3, a4, a5);
      };
    case 7:
      return function(a0, a1, a22, a3, a4, a5, a6) {
        return fn.call(this, a0, a1, a22, a3, a4, a5, a6);
      };
    case 8:
      return function(a0, a1, a22, a3, a4, a5, a6, a7) {
        return fn.call(this, a0, a1, a22, a3, a4, a5, a6, a7);
      };
    case 9:
      return function(a0, a1, a22, a3, a4, a5, a6, a7, a8) {
        return fn.call(this, a0, a1, a22, a3, a4, a5, a6, a7, a8);
      };
    case 10:
      return function(a0, a1, a22, a3, a4, a5, a6, a7, a8, a9) {
        return fn.call(this, a0, a1, a22, a3, a4, a5, a6, a7, a8, a9);
      };
    default:
      throw new Error("First argument to nAry must be a non-negative integer no greater than ten");
  }
});
var nAry_default = nAry;

// node_modules/ramda/es/binary.js
var binary = /* @__PURE__ */ _curry1(function binary2(fn) {
  return nAry_default(2, fn);
});
var binary_default = binary;

// node_modules/ramda/es/internal/_isFunction.js
function _isFunction(x2) {
  var type3 = Object.prototype.toString.call(x2);
  return type3 === "[object Function]" || type3 === "[object AsyncFunction]" || type3 === "[object GeneratorFunction]" || type3 === "[object AsyncGeneratorFunction]";
}

// node_modules/ramda/es/liftN.js
var liftN = /* @__PURE__ */ _curry2(function liftN2(arity, fn) {
  var lifted = curryN_default(arity, fn);
  return curryN_default(arity, function() {
    return _reduce(ap_default, map_default(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
});
var liftN_default = liftN;

// node_modules/ramda/es/lift.js
var lift = /* @__PURE__ */ _curry1(function lift2(fn) {
  return liftN_default(fn.length, fn);
});
var lift_default = lift;

// node_modules/ramda/es/both.js
var both = /* @__PURE__ */ _curry2(function both2(f, g2) {
  return _isFunction(f) ? function _both() {
    return f.apply(this, arguments) && g2.apply(this, arguments);
  } : lift_default(and_default)(f, g2);
});
var both_default = both;

// node_modules/ramda/es/call.js
var call = /* @__PURE__ */ _curry1(function call2(fn) {
  return fn.apply(this, Array.prototype.slice.call(arguments, 1));
});
var call_default = call;

// node_modules/ramda/es/internal/_makeFlat.js
function _makeFlat(recursive) {
  return function flatt(list) {
    var value, jlen, j;
    var result = [];
    var idx = 0;
    var ilen = list.length;
    while (idx < ilen) {
      if (isArrayLike_default(list[idx])) {
        value = recursive ? flatt(list[idx]) : list[idx];
        j = 0;
        jlen = value.length;
        while (j < jlen) {
          result[result.length] = value[j];
          j += 1;
        }
      } else {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
    return result;
  };
}

// node_modules/ramda/es/internal/_forceReduced.js
function _forceReduced(x2) {
  return {
    "@@transducer/value": x2,
    "@@transducer/reduced": true
  };
}

// node_modules/ramda/es/internal/_flatCat.js
var preservingReduced = function(xf) {
  return {
    "@@transducer/init": xfBase_default.init,
    "@@transducer/result": function(result) {
      return xf["@@transducer/result"](result);
    },
    "@@transducer/step": function(result, input) {
      var ret = xf["@@transducer/step"](result, input);
      return ret["@@transducer/reduced"] ? _forceReduced(ret) : ret;
    }
  };
};
var _flatCat = function _xcat(xf) {
  var rxf = preservingReduced(xf);
  return {
    "@@transducer/init": xfBase_default.init,
    "@@transducer/result": function(result) {
      return rxf["@@transducer/result"](result);
    },
    "@@transducer/step": function(result, input) {
      return !isArrayLike_default(input) ? _reduce(rxf, result, [input]) : _reduce(rxf, result, input);
    }
  };
};
var flatCat_default = _flatCat;

// node_modules/ramda/es/internal/_xchain.js
var _xchain = /* @__PURE__ */ _curry2(function _xchain2(f, xf) {
  return map_default(f, flatCat_default(xf));
});
var xchain_default = _xchain;

// node_modules/ramda/es/chain.js
var chain = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable(["fantasy-land/chain", "chain"], xchain_default, function chain2(fn, monad) {
    if (typeof monad === "function") {
      return function(x2) {
        return fn(monad(x2))(x2);
      };
    }
    return _makeFlat(false)(map_default(fn, monad));
  })
);
var chain_default = chain;

// node_modules/ramda/es/clamp.js
var clamp = /* @__PURE__ */ _curry3(function clamp2(min3, max3, value) {
  if (min3 > max3) {
    throw new Error("min must not be greater than max in clamp(min, max, value)");
  }
  return value < min3 ? min3 : value > max3 ? max3 : value;
});
var clamp_default = clamp;

// node_modules/ramda/es/internal/_cloneRegExp.js
function _cloneRegExp(pattern) {
  return new RegExp(pattern.source, (pattern.global ? "g" : "") + (pattern.ignoreCase ? "i" : "") + (pattern.multiline ? "m" : "") + (pattern.sticky ? "y" : "") + (pattern.unicode ? "u" : ""));
}

// node_modules/ramda/es/type.js
var type = /* @__PURE__ */ _curry1(function type2(val) {
  return val === null ? "Null" : val === void 0 ? "Undefined" : Object.prototype.toString.call(val).slice(8, -1);
});
var type_default = type;

// node_modules/ramda/es/internal/_clone.js
function _clone(value, refFrom, refTo, deep) {
  var copy = function copy2(copiedValue) {
    var len = refFrom.length;
    var idx = 0;
    while (idx < len) {
      if (value === refFrom[idx]) {
        return refTo[idx];
      }
      idx += 1;
    }
    refFrom[idx] = value;
    refTo[idx] = copiedValue;
    for (var key in value) {
      if (value.hasOwnProperty(key)) {
        copiedValue[key] = deep ? _clone(value[key], refFrom, refTo, true) : value[key];
      }
    }
    return copiedValue;
  };
  switch (type_default(value)) {
    case "Object":
      return copy(Object.create(Object.getPrototypeOf(value)));
    case "Array":
      return copy([]);
    case "Date":
      return new Date(value.valueOf());
    case "RegExp":
      return _cloneRegExp(value);
    case "Int8Array":
    case "Uint8Array":
    case "Uint8ClampedArray":
    case "Int16Array":
    case "Uint16Array":
    case "Int32Array":
    case "Uint32Array":
    case "Float32Array":
    case "Float64Array":
    case "BigInt64Array":
    case "BigUint64Array":
      return value.slice();
    default:
      return value;
  }
}

// node_modules/ramda/es/clone.js
var clone = /* @__PURE__ */ _curry1(function clone2(value) {
  return value != null && typeof value.clone === "function" ? value.clone() : _clone(value, [], [], true);
});
var clone_default = clone;

// node_modules/ramda/es/collectBy.js
var collectBy = /* @__PURE__ */ _curry2(function collectBy2(fn, list) {
  var group = _reduce(function(o3, x2) {
    var tag2 = fn(x2);
    if (o3[tag2] === void 0) {
      o3[tag2] = [];
    }
    o3[tag2].push(x2);
    return o3;
  }, {}, list);
  var newList = [];
  for (var tag in group) {
    newList.push(group[tag]);
  }
  return newList;
});
var collectBy_default = collectBy;

// node_modules/ramda/es/comparator.js
var comparator = /* @__PURE__ */ _curry1(function comparator2(pred) {
  return function(a3, b2) {
    return pred(a3, b2) ? -1 : pred(b2, a3) ? 1 : 0;
  };
});
var comparator_default = comparator;

// node_modules/ramda/es/not.js
var not = /* @__PURE__ */ _curry1(function not2(a3) {
  return !a3;
});
var not_default = not;

// node_modules/ramda/es/complement.js
var complement = /* @__PURE__ */ lift_default(not_default);
var complement_default = complement;

// node_modules/ramda/es/internal/_pipe.js
function _pipe(f, g2) {
  return function() {
    return g2.call(this, f.apply(this, arguments));
  };
}

// node_modules/ramda/es/internal/_checkForMethod.js
function _checkForMethod(methodname, fn) {
  return function() {
    var length3 = arguments.length;
    if (length3 === 0) {
      return fn();
    }
    var obj = arguments[length3 - 1];
    return isArray_default(obj) || typeof obj[methodname] !== "function" ? fn.apply(this, arguments) : obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length3 - 1));
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
var tail = /* @__PURE__ */ _curry1(
  /* @__PURE__ */ _checkForMethod(
    "tail",
    /* @__PURE__ */ slice_default(1, Infinity)
  )
);
var tail_default = tail;

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

// node_modules/ramda/es/head.js
var head = /* @__PURE__ */ nth_default(0);
var head_default = head;

// node_modules/ramda/es/internal/_identity.js
function _identity(x2) {
  return x2;
}

// node_modules/ramda/es/identity.js
var identity = /* @__PURE__ */ _curry1(_identity);
var identity_default = identity;

// node_modules/ramda/es/pipeWith.js
var pipeWith = /* @__PURE__ */ _curry2(function pipeWith2(xf, list) {
  if (list.length <= 0) {
    return identity_default;
  }
  var headList = head_default(list);
  var tailList = tail_default(list);
  return _arity(headList.length, function() {
    return _reduce(function(result, f) {
      return xf.call(this, f, result);
    }, headList.apply(this, arguments), tailList);
  });
});
var pipeWith_default = pipeWith;

// node_modules/ramda/es/composeWith.js
var composeWith = /* @__PURE__ */ _curry2(function composeWith2(xf, list) {
  return pipeWith_default.apply(this, [xf, reverse_default(list)]);
});
var composeWith_default = composeWith;

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
function _includesWith(pred, x2, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (pred(x2, list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}

// node_modules/ramda/es/internal/_functionName.js
function _functionName(f) {
  var match4 = String(f).match(/^function (\w*)/);
  return match4 == null ? "" : match4[1];
}

// node_modules/ramda/es/internal/_objectIs.js
function _objectIs(a3, b2) {
  if (a3 === b2) {
    return a3 !== 0 || 1 / a3 === 1 / b2;
  } else {
    return a3 !== a3 && b2 !== b2;
  }
}
var objectIs_default = typeof Object.is === "function" ? Object.is : _objectIs;

// node_modules/ramda/es/internal/_equals.js
function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
  var a3 = _arrayFromIterator(aIterator);
  var b2 = _arrayFromIterator(bIterator);
  function eq(_a, _b) {
    return _equals(_a, _b, stackA.slice(), stackB.slice());
  }
  return !_includesWith(function(b3, aItem) {
    return !_includesWith(eq, aItem, b3);
  }, b2, a3);
}
function _equals(a3, b2, stackA, stackB) {
  if (objectIs_default(a3, b2)) {
    return true;
  }
  var typeA = type_default(a3);
  if (typeA !== type_default(b2)) {
    return false;
  }
  if (typeof a3["fantasy-land/equals"] === "function" || typeof b2["fantasy-land/equals"] === "function") {
    return typeof a3["fantasy-land/equals"] === "function" && a3["fantasy-land/equals"](b2) && typeof b2["fantasy-land/equals"] === "function" && b2["fantasy-land/equals"](a3);
  }
  if (typeof a3.equals === "function" || typeof b2.equals === "function") {
    return typeof a3.equals === "function" && a3.equals(b2) && typeof b2.equals === "function" && b2.equals(a3);
  }
  switch (typeA) {
    case "Arguments":
    case "Array":
    case "Object":
      if (typeof a3.constructor === "function" && _functionName(a3.constructor) === "Promise") {
        return a3 === b2;
      }
      break;
    case "Boolean":
    case "Number":
    case "String":
      if (!(typeof a3 === typeof b2 && objectIs_default(a3.valueOf(), b2.valueOf()))) {
        return false;
      }
      break;
    case "Date":
      if (!objectIs_default(a3.valueOf(), b2.valueOf())) {
        return false;
      }
      break;
    case "Error":
      return a3.name === b2.name && a3.message === b2.message;
    case "RegExp":
      if (!(a3.source === b2.source && a3.global === b2.global && a3.ignoreCase === b2.ignoreCase && a3.multiline === b2.multiline && a3.sticky === b2.sticky && a3.unicode === b2.unicode)) {
        return false;
      }
      break;
  }
  var idx = stackA.length - 1;
  while (idx >= 0) {
    if (stackA[idx] === a3) {
      return stackB[idx] === b2;
    }
    idx -= 1;
  }
  switch (typeA) {
    case "Map":
      if (a3.size !== b2.size) {
        return false;
      }
      return _uniqContentEquals(a3.entries(), b2.entries(), stackA.concat([a3]), stackB.concat([b2]));
    case "Set":
      if (a3.size !== b2.size) {
        return false;
      }
      return _uniqContentEquals(a3.values(), b2.values(), stackA.concat([a3]), stackB.concat([b2]));
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
  var keysA = keys_default(a3);
  if (keysA.length !== keys_default(b2).length) {
    return false;
  }
  var extendedStackA = stackA.concat([a3]);
  var extendedStackB = stackB.concat([b2]);
  idx = keysA.length - 1;
  while (idx >= 0) {
    var key = keysA[idx];
    if (!(_has(key, b2) && _equals(b2[key], a3[key], extendedStackA, extendedStackB))) {
      return false;
    }
    idx -= 1;
  }
  return true;
}

// node_modules/ramda/es/equals.js
var equals = /* @__PURE__ */ _curry2(function equals2(a3, b2) {
  return _equals(a3, b2, [], []);
});
var equals_default = equals;

// node_modules/ramda/es/internal/_indexOf.js
function _indexOf(list, a3, idx) {
  var inf, item;
  if (typeof list.indexOf === "function") {
    switch (typeof a3) {
      case "number":
        if (a3 === 0) {
          inf = 1 / a3;
          while (idx < list.length) {
            item = list[idx];
            if (item === 0 && 1 / item === inf) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        } else if (a3 !== a3) {
          while (idx < list.length) {
            item = list[idx];
            if (typeof item === "number" && item !== item) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        }
        return list.indexOf(a3, idx);
      case "string":
      case "boolean":
      case "function":
      case "undefined":
        return list.indexOf(a3, idx);
      case "object":
        if (a3 === null) {
          return list.indexOf(a3, idx);
        }
    }
  }
  while (idx < list.length) {
    if (equals_default(list[idx], a3)) {
      return idx;
    }
    idx += 1;
  }
  return -1;
}

// node_modules/ramda/es/internal/_includes.js
function _includes(a3, list) {
  return _indexOf(list, a3, 0) >= 0;
}

// node_modules/ramda/es/internal/_quote.js
function _quote(s3) {
  var escaped = s3.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
  return '"' + escaped.replace(/"/g, '\\"') + '"';
}

// node_modules/ramda/es/internal/_toISOString.js
var pad = function pad2(n2) {
  return (n2 < 10 ? "0" : "") + n2;
};
var _toISOString = typeof Date.prototype.toISOString === "function" ? function _toISOString2(d3) {
  return d3.toISOString();
} : function _toISOString3(d3) {
  return d3.getUTCFullYear() + "-" + pad(d3.getUTCMonth() + 1) + "-" + pad(d3.getUTCDate()) + "T" + pad(d3.getUTCHours()) + ":" + pad(d3.getUTCMinutes()) + ":" + pad(d3.getUTCSeconds()) + "." + (d3.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z";
};
var toISOString_default = _toISOString;

// node_modules/ramda/es/internal/_complement.js
function _complement(f) {
  return function() {
    return !f.apply(this, arguments);
  };
}

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
function _isObject(x2) {
  return Object.prototype.toString.call(x2) === "[object Object]";
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
var filter = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable(["fantasy-land/filter", "filter"], xfilter_default, function(pred, filterable) {
    return _isObject(filterable) ? _reduce(function(acc, key) {
      if (pred(filterable[key])) {
        acc[key] = filterable[key];
      }
      return acc;
    }, {}, keys_default(filterable)) : _filter(pred, filterable);
  })
);
var filter_default = filter;

// node_modules/ramda/es/reject.js
var reject = /* @__PURE__ */ _curry2(function reject2(pred, filterable) {
  return filter_default(_complement(pred), filterable);
});
var reject_default = reject;

// node_modules/ramda/es/internal/_toString.js
function _toString(x2, seen) {
  var recur = function recur2(y3) {
    var xs = seen.concat([x2]);
    return _includes(y3, xs) ? "<Circular>" : _toString(y3, xs);
  };
  var mapPairs = function(obj, keys4) {
    return _map(function(k2) {
      return _quote(k2) + ": " + recur(obj[k2]);
    }, keys4.slice().sort());
  };
  switch (Object.prototype.toString.call(x2)) {
    case "[object Arguments]":
      return "(function() { return arguments; }(" + _map(recur, x2).join(", ") + "))";
    case "[object Array]":
      return "[" + _map(recur, x2).concat(mapPairs(x2, reject_default(function(k2) {
        return /^\d+$/.test(k2);
      }, keys_default(x2)))).join(", ") + "]";
    case "[object Boolean]":
      return typeof x2 === "object" ? "new Boolean(" + recur(x2.valueOf()) + ")" : x2.toString();
    case "[object Date]":
      return "new Date(" + (isNaN(x2.valueOf()) ? recur(NaN) : _quote(toISOString_default(x2))) + ")";
    case "[object Null]":
      return "null";
    case "[object Number]":
      return typeof x2 === "object" ? "new Number(" + recur(x2.valueOf()) + ")" : 1 / x2 === -Infinity ? "-0" : x2.toString(10);
    case "[object String]":
      return typeof x2 === "object" ? "new String(" + recur(x2.valueOf()) + ")" : _quote(x2);
    case "[object Undefined]":
      return "undefined";
    default:
      if (typeof x2.toString === "function") {
        var repr = x2.toString();
        if (repr !== "[object Object]") {
          return repr;
        }
      }
      return "{" + mapPairs(x2, keys_default(x2)).join(", ") + "}";
  }
}

// node_modules/ramda/es/toString.js
var toString2 = /* @__PURE__ */ _curry1(function toString3(val) {
  return _toString(val, []);
});
var toString_default = toString2;

// node_modules/ramda/es/concat.js
var concat = /* @__PURE__ */ _curry2(function concat2(a3, b2) {
  if (isArray_default(a3)) {
    if (isArray_default(b2)) {
      return a3.concat(b2);
    }
    throw new TypeError(toString_default(b2) + " is not an array");
  }
  if (_isString(a3)) {
    if (_isString(b2)) {
      return a3 + b2;
    }
    throw new TypeError(toString_default(b2) + " is not a string");
  }
  if (a3 != null && _isFunction(a3["fantasy-land/concat"])) {
    return a3["fantasy-land/concat"](b2);
  }
  if (a3 != null && _isFunction(a3.concat)) {
    return a3.concat(b2);
  }
  throw new TypeError(toString_default(a3) + ' does not have a method named "concat" or "fantasy-land/concat"');
});
var concat_default = concat;

// node_modules/ramda/es/cond.js
var cond = /* @__PURE__ */ _curry1(function cond2(pairs) {
  var arity = reduce_default(max_default, 0, map_default(function(pair3) {
    return pair3[0].length;
  }, pairs));
  return _arity(arity, function() {
    var idx = 0;
    while (idx < pairs.length) {
      if (pairs[idx][0].apply(this, arguments)) {
        return pairs[idx][1].apply(this, arguments);
      }
      idx += 1;
    }
  });
});
var cond_default = cond;

// node_modules/ramda/es/curry.js
var curry = /* @__PURE__ */ _curry1(function curry2(fn) {
  return curryN_default(fn.length, fn);
});
var curry_default = curry;

// node_modules/ramda/es/constructN.js
var constructN = /* @__PURE__ */ _curry2(function constructN2(n2, Fn) {
  if (n2 > 10) {
    throw new Error("Constructor with greater than ten arguments");
  }
  if (n2 === 0) {
    return function() {
      return new Fn();
    };
  }
  return curry_default(nAry_default(n2, function($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    switch (arguments.length) {
      case 1:
        return new Fn($0);
      case 2:
        return new Fn($0, $1);
      case 3:
        return new Fn($0, $1, $2);
      case 4:
        return new Fn($0, $1, $2, $3);
      case 5:
        return new Fn($0, $1, $2, $3, $4);
      case 6:
        return new Fn($0, $1, $2, $3, $4, $5);
      case 7:
        return new Fn($0, $1, $2, $3, $4, $5, $6);
      case 8:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7);
      case 9:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);
      case 10:
        return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
    }
  }));
});
var constructN_default = constructN;

// node_modules/ramda/es/construct.js
var construct = /* @__PURE__ */ _curry1(function construct2(Fn) {
  return constructN_default(Fn.length, Fn);
});
var construct_default = construct;

// node_modules/ramda/es/converge.js
var converge = /* @__PURE__ */ _curry2(function converge2(after, fns) {
  return curryN_default(reduce_default(max_default, 0, pluck_default("length", fns)), function() {
    var args = arguments;
    var context = this;
    return after.apply(context, _map(function(fn) {
      return fn.apply(context, args);
    }, fns));
  });
});
var converge_default = converge;

// node_modules/ramda/es/count.js
var count = /* @__PURE__ */ curry_default(function(pred, list) {
  return _reduce(function(a3, e2) {
    return pred(e2) ? a3 + 1 : a3;
  }, 0, list);
});
var count_default = count;

// node_modules/ramda/es/internal/_xreduceBy.js
var XReduceBy = /* @__PURE__ */ function() {
  function XReduceBy2(valueFn, valueAcc, keyFn, xf) {
    this.valueFn = valueFn;
    this.valueAcc = valueAcc;
    this.keyFn = keyFn;
    this.xf = xf;
    this.inputs = {};
  }
  XReduceBy2.prototype["@@transducer/init"] = xfBase_default.init;
  XReduceBy2.prototype["@@transducer/result"] = function(result) {
    var key;
    for (key in this.inputs) {
      if (_has(key, this.inputs)) {
        result = this.xf["@@transducer/step"](result, this.inputs[key]);
        if (result["@@transducer/reduced"]) {
          result = result["@@transducer/value"];
          break;
        }
      }
    }
    this.inputs = null;
    return this.xf["@@transducer/result"](result);
  };
  XReduceBy2.prototype["@@transducer/step"] = function(result, input) {
    var key = this.keyFn(input);
    this.inputs[key] = this.inputs[key] || [key, this.valueAcc];
    this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
    return result;
  };
  return XReduceBy2;
}();
var _xreduceBy = /* @__PURE__ */ _curryN(4, [], function _xreduceBy2(valueFn, valueAcc, keyFn, xf) {
  return new XReduceBy(valueFn, valueAcc, keyFn, xf);
});
var xreduceBy_default = _xreduceBy;

// node_modules/ramda/es/reduceBy.js
var reduceBy = /* @__PURE__ */ _curryN(
  4,
  [],
  /* @__PURE__ */ _dispatchable([], xreduceBy_default, function reduceBy2(valueFn, valueAcc, keyFn, list) {
    return _reduce(function(acc, elt) {
      var key = keyFn(elt);
      var value = valueFn(_has(key, acc) ? acc[key] : _clone(valueAcc, [], [], false), elt);
      if (value && value["@@transducer/reduced"]) {
        return _reduced(acc);
      }
      acc[key] = value;
      return acc;
    }, {}, list);
  })
);
var reduceBy_default = reduceBy;

// node_modules/ramda/es/countBy.js
var countBy = /* @__PURE__ */ reduceBy_default(function(acc, elem) {
  return acc + 1;
}, 0);
var countBy_default = countBy;

// node_modules/ramda/es/dec.js
var dec = /* @__PURE__ */ add_default(-1);
var dec_default = dec;

// node_modules/ramda/es/defaultTo.js
var defaultTo = /* @__PURE__ */ _curry2(function defaultTo2(d3, v) {
  return v == null || v !== v ? d3 : v;
});
var defaultTo_default = defaultTo;

// node_modules/ramda/es/descend.js
var descend = /* @__PURE__ */ _curry3(function descend2(fn, a3, b2) {
  var aa = fn(a3);
  var bb = fn(b2);
  return aa > bb ? -1 : aa < bb ? 1 : 0;
});
var descend_default = descend;

// node_modules/ramda/es/internal/_Set.js
var _Set = /* @__PURE__ */ function() {
  function _Set2() {
    this._nativeSet = typeof Set === "function" ? /* @__PURE__ */ new Set() : null;
    this._items = {};
  }
  _Set2.prototype.add = function(item) {
    return !hasOrAdd(item, true, this);
  };
  _Set2.prototype.has = function(item) {
    return hasOrAdd(item, false, this);
  };
  return _Set2;
}();
function hasOrAdd(item, shouldAdd, set3) {
  var type3 = typeof item;
  var prevSize, newSize;
  switch (type3) {
    case "string":
    case "number":
      if (item === 0 && 1 / item === -Infinity) {
        if (set3._items["-0"]) {
          return true;
        } else {
          if (shouldAdd) {
            set3._items["-0"] = true;
          }
          return false;
        }
      }
      if (set3._nativeSet !== null) {
        if (shouldAdd) {
          prevSize = set3._nativeSet.size;
          set3._nativeSet.add(item);
          newSize = set3._nativeSet.size;
          return newSize === prevSize;
        } else {
          return set3._nativeSet.has(item);
        }
      } else {
        if (!(type3 in set3._items)) {
          if (shouldAdd) {
            set3._items[type3] = {};
            set3._items[type3][item] = true;
          }
          return false;
        } else if (item in set3._items[type3]) {
          return true;
        } else {
          if (shouldAdd) {
            set3._items[type3][item] = true;
          }
          return false;
        }
      }
    case "boolean":
      if (type3 in set3._items) {
        var bIdx = item ? 1 : 0;
        if (set3._items[type3][bIdx]) {
          return true;
        } else {
          if (shouldAdd) {
            set3._items[type3][bIdx] = true;
          }
          return false;
        }
      } else {
        if (shouldAdd) {
          set3._items[type3] = item ? [false, true] : [true, false];
        }
        return false;
      }
    case "function":
      if (set3._nativeSet !== null) {
        if (shouldAdd) {
          prevSize = set3._nativeSet.size;
          set3._nativeSet.add(item);
          newSize = set3._nativeSet.size;
          return newSize === prevSize;
        } else {
          return set3._nativeSet.has(item);
        }
      } else {
        if (!(type3 in set3._items)) {
          if (shouldAdd) {
            set3._items[type3] = [item];
          }
          return false;
        }
        if (!_includes(item, set3._items[type3])) {
          if (shouldAdd) {
            set3._items[type3].push(item);
          }
          return false;
        }
        return true;
      }
    case "undefined":
      if (set3._items[type3]) {
        return true;
      } else {
        if (shouldAdd) {
          set3._items[type3] = true;
        }
        return false;
      }
    case "object":
      if (item === null) {
        if (!set3._items["null"]) {
          if (shouldAdd) {
            set3._items["null"] = true;
          }
          return false;
        }
        return true;
      }
    default:
      type3 = Object.prototype.toString.call(item);
      if (!(type3 in set3._items)) {
        if (shouldAdd) {
          set3._items[type3] = [item];
        }
        return false;
      }
      if (!_includes(item, set3._items[type3])) {
        if (shouldAdd) {
          set3._items[type3].push(item);
        }
        return false;
      }
      return true;
  }
}
var Set_default = _Set;

// node_modules/ramda/es/difference.js
var difference = /* @__PURE__ */ _curry2(function difference2(first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  var secondLen = second.length;
  var toFilterOut = new Set_default();
  for (var i2 = 0; i2 < secondLen; i2 += 1) {
    toFilterOut.add(second[i2]);
  }
  while (idx < firstLen) {
    if (toFilterOut.add(first[idx])) {
      out[out.length] = first[idx];
    }
    idx += 1;
  }
  return out;
});
var difference_default = difference;

// node_modules/ramda/es/differenceWith.js
var differenceWith = /* @__PURE__ */ _curry3(function differenceWith2(pred, first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  while (idx < firstLen) {
    if (!_includesWith(pred, first[idx], second) && !_includesWith(pred, first[idx], out)) {
      out.push(first[idx]);
    }
    idx += 1;
  }
  return out;
});
var differenceWith_default = differenceWith;

// node_modules/ramda/es/remove.js
var remove = /* @__PURE__ */ _curry3(function remove2(start, count2, list) {
  var result = Array.prototype.slice.call(list, 0);
  result.splice(start, count2);
  return result;
});
var remove_default = remove;

// node_modules/ramda/es/internal/_dissoc.js
function _dissoc(prop3, obj) {
  if (obj == null) {
    return obj;
  }
  if (isInteger_default(prop3) && isArray_default(obj)) {
    return remove_default(prop3, 1, obj);
  }
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  delete result[prop3];
  return result;
}

// node_modules/ramda/es/dissocPath.js
function _shallowCloneObject(prop3, obj) {
  if (isInteger_default(prop3) && isArray_default(obj)) {
    return [].concat(obj);
  }
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  return result;
}
var dissocPath = /* @__PURE__ */ _curry2(function dissocPath2(path3, obj) {
  if (obj == null) {
    return obj;
  }
  switch (path3.length) {
    case 0:
      return obj;
    case 1:
      return _dissoc(path3[0], obj);
    default:
      var head2 = path3[0];
      var tail2 = Array.prototype.slice.call(path3, 1);
      if (obj[head2] == null) {
        return _shallowCloneObject(head2, obj);
      } else {
        return assoc_default(head2, dissocPath2(tail2, obj[head2]), obj);
      }
  }
});
var dissocPath_default = dissocPath;

// node_modules/ramda/es/dissoc.js
var dissoc = /* @__PURE__ */ _curry2(function dissoc2(prop3, obj) {
  return dissocPath_default([prop3], obj);
});
var dissoc_default = dissoc;

// node_modules/ramda/es/divide.js
var divide = /* @__PURE__ */ _curry2(function divide2(a3, b2) {
  return a3 / b2;
});
var divide_default = divide;

// node_modules/ramda/es/internal/_xdrop.js
var XDrop = /* @__PURE__ */ function() {
  function XDrop2(n2, xf) {
    this.xf = xf;
    this.n = n2;
  }
  XDrop2.prototype["@@transducer/init"] = xfBase_default.init;
  XDrop2.prototype["@@transducer/result"] = xfBase_default.result;
  XDrop2.prototype["@@transducer/step"] = function(result, input) {
    if (this.n > 0) {
      this.n -= 1;
      return result;
    }
    return this.xf["@@transducer/step"](result, input);
  };
  return XDrop2;
}();
var _xdrop = /* @__PURE__ */ _curry2(function _xdrop2(n2, xf) {
  return new XDrop(n2, xf);
});
var xdrop_default = _xdrop;

// node_modules/ramda/es/drop.js
var drop = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable(["drop"], xdrop_default, function drop2(n2, xs) {
    return slice_default(Math.max(0, n2), Infinity, xs);
  })
);
var drop_default = drop;

// node_modules/ramda/es/internal/_xtake.js
var XTake = /* @__PURE__ */ function() {
  function XTake2(n2, xf) {
    this.xf = xf;
    this.n = n2;
    this.i = 0;
  }
  XTake2.prototype["@@transducer/init"] = xfBase_default.init;
  XTake2.prototype["@@transducer/result"] = xfBase_default.result;
  XTake2.prototype["@@transducer/step"] = function(result, input) {
    this.i += 1;
    var ret = this.n === 0 ? result : this.xf["@@transducer/step"](result, input);
    return this.n >= 0 && this.i >= this.n ? _reduced(ret) : ret;
  };
  return XTake2;
}();
var _xtake = /* @__PURE__ */ _curry2(function _xtake2(n2, xf) {
  return new XTake(n2, xf);
});
var xtake_default = _xtake;

// node_modules/ramda/es/take.js
var take = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable(["take"], xtake_default, function take2(n2, xs) {
    return slice_default(0, n2 < 0 ? Infinity : n2, xs);
  })
);
var take_default = take;

// node_modules/ramda/es/internal/_dropLast.js
function dropLast(n2, xs) {
  return take_default(n2 < xs.length ? xs.length - n2 : 0, xs);
}

// node_modules/ramda/es/internal/_xdropLast.js
var XDropLast = /* @__PURE__ */ function() {
  function XDropLast2(n2, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n2);
  }
  XDropLast2.prototype["@@transducer/init"] = xfBase_default.init;
  XDropLast2.prototype["@@transducer/result"] = function(result) {
    this.acc = null;
    return this.xf["@@transducer/result"](result);
  };
  XDropLast2.prototype["@@transducer/step"] = function(result, input) {
    if (this.full) {
      result = this.xf["@@transducer/step"](result, this.acc[this.pos]);
    }
    this.store(input);
    return result;
  };
  XDropLast2.prototype.store = function(input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };
  return XDropLast2;
}();
var _xdropLast = /* @__PURE__ */ _curry2(function _xdropLast2(n2, xf) {
  return new XDropLast(n2, xf);
});
var xdropLast_default = _xdropLast;

// node_modules/ramda/es/dropLast.js
var dropLast2 = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable([], xdropLast_default, dropLast)
);
var dropLast_default = dropLast2;

// node_modules/ramda/es/internal/_dropLastWhile.js
function dropLastWhile(pred, xs) {
  var idx = xs.length - 1;
  while (idx >= 0 && pred(xs[idx])) {
    idx -= 1;
  }
  return slice_default(0, idx + 1, xs);
}

// node_modules/ramda/es/internal/_xdropLastWhile.js
var XDropLastWhile = /* @__PURE__ */ function() {
  function XDropLastWhile2(fn, xf) {
    this.f = fn;
    this.retained = [];
    this.xf = xf;
  }
  XDropLastWhile2.prototype["@@transducer/init"] = xfBase_default.init;
  XDropLastWhile2.prototype["@@transducer/result"] = function(result) {
    this.retained = null;
    return this.xf["@@transducer/result"](result);
  };
  XDropLastWhile2.prototype["@@transducer/step"] = function(result, input) {
    return this.f(input) ? this.retain(result, input) : this.flush(result, input);
  };
  XDropLastWhile2.prototype.flush = function(result, input) {
    result = _reduce(this.xf["@@transducer/step"], result, this.retained);
    this.retained = [];
    return this.xf["@@transducer/step"](result, input);
  };
  XDropLastWhile2.prototype.retain = function(result, input) {
    this.retained.push(input);
    return result;
  };
  return XDropLastWhile2;
}();
var _xdropLastWhile = /* @__PURE__ */ _curry2(function _xdropLastWhile2(fn, xf) {
  return new XDropLastWhile(fn, xf);
});
var xdropLastWhile_default = _xdropLastWhile;

// node_modules/ramda/es/dropLastWhile.js
var dropLastWhile2 = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable([], xdropLastWhile_default, dropLastWhile)
);
var dropLastWhile_default = dropLastWhile2;

// node_modules/ramda/es/internal/_xdropRepeatsWith.js
var XDropRepeatsWith = /* @__PURE__ */ function() {
  function XDropRepeatsWith2(pred, xf) {
    this.xf = xf;
    this.pred = pred;
    this.lastValue = void 0;
    this.seenFirstValue = false;
  }
  XDropRepeatsWith2.prototype["@@transducer/init"] = xfBase_default.init;
  XDropRepeatsWith2.prototype["@@transducer/result"] = xfBase_default.result;
  XDropRepeatsWith2.prototype["@@transducer/step"] = function(result, input) {
    var sameAsLast = false;
    if (!this.seenFirstValue) {
      this.seenFirstValue = true;
    } else if (this.pred(this.lastValue, input)) {
      sameAsLast = true;
    }
    this.lastValue = input;
    return sameAsLast ? result : this.xf["@@transducer/step"](result, input);
  };
  return XDropRepeatsWith2;
}();
var _xdropRepeatsWith = /* @__PURE__ */ _curry2(function _xdropRepeatsWith2(pred, xf) {
  return new XDropRepeatsWith(pred, xf);
});
var xdropRepeatsWith_default = _xdropRepeatsWith;

// node_modules/ramda/es/last.js
var last = /* @__PURE__ */ nth_default(-1);
var last_default = last;

// node_modules/ramda/es/dropRepeatsWith.js
var dropRepeatsWith = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable([], xdropRepeatsWith_default, function dropRepeatsWith2(pred, list) {
    var result = [];
    var idx = 1;
    var len = list.length;
    if (len !== 0) {
      result[0] = list[0];
      while (idx < len) {
        if (!pred(last_default(result), list[idx])) {
          result[result.length] = list[idx];
        }
        idx += 1;
      }
    }
    return result;
  })
);
var dropRepeatsWith_default = dropRepeatsWith;

// node_modules/ramda/es/dropRepeats.js
var dropRepeats = /* @__PURE__ */ _curry1(
  /* @__PURE__ */ _dispatchable(
    [],
    /* @__PURE__ */ xdropRepeatsWith_default(equals_default),
    /* @__PURE__ */ dropRepeatsWith_default(equals_default)
  )
);
var dropRepeats_default = dropRepeats;

// node_modules/ramda/es/internal/_xdropWhile.js
var XDropWhile = /* @__PURE__ */ function() {
  function XDropWhile2(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XDropWhile2.prototype["@@transducer/init"] = xfBase_default.init;
  XDropWhile2.prototype["@@transducer/result"] = xfBase_default.result;
  XDropWhile2.prototype["@@transducer/step"] = function(result, input) {
    if (this.f) {
      if (this.f(input)) {
        return result;
      }
      this.f = null;
    }
    return this.xf["@@transducer/step"](result, input);
  };
  return XDropWhile2;
}();
var _xdropWhile = /* @__PURE__ */ _curry2(function _xdropWhile2(f, xf) {
  return new XDropWhile(f, xf);
});
var xdropWhile_default = _xdropWhile;

// node_modules/ramda/es/dropWhile.js
var dropWhile = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable(["dropWhile"], xdropWhile_default, function dropWhile2(pred, xs) {
    var idx = 0;
    var len = xs.length;
    while (idx < len && pred(xs[idx])) {
      idx += 1;
    }
    return slice_default(idx, Infinity, xs);
  })
);
var dropWhile_default = dropWhile;

// node_modules/ramda/es/or.js
var or = /* @__PURE__ */ _curry2(function or2(a3, b2) {
  return a3 || b2;
});
var or_default = or;

// node_modules/ramda/es/either.js
var either = /* @__PURE__ */ _curry2(function either2(f, g2) {
  return _isFunction(f) ? function _either() {
    return f.apply(this, arguments) || g2.apply(this, arguments);
  } : lift_default(or_default)(f, g2);
});
var either_default = either;

// node_modules/ramda/es/internal/_isTypedArray.js
function _isTypedArray(val) {
  var type3 = Object.prototype.toString.call(val);
  return type3 === "[object Uint8ClampedArray]" || type3 === "[object Int8Array]" || type3 === "[object Uint8Array]" || type3 === "[object Int16Array]" || type3 === "[object Uint16Array]" || type3 === "[object Int32Array]" || type3 === "[object Uint32Array]" || type3 === "[object Float32Array]" || type3 === "[object Float64Array]" || type3 === "[object BigInt64Array]" || type3 === "[object BigUint64Array]";
}

// node_modules/ramda/es/empty.js
var empty2 = /* @__PURE__ */ _curry1(function empty3(x2) {
  return x2 != null && typeof x2["fantasy-land/empty"] === "function" ? x2["fantasy-land/empty"]() : x2 != null && x2.constructor != null && typeof x2.constructor["fantasy-land/empty"] === "function" ? x2.constructor["fantasy-land/empty"]() : x2 != null && typeof x2.empty === "function" ? x2.empty() : x2 != null && x2.constructor != null && typeof x2.constructor.empty === "function" ? x2.constructor.empty() : isArray_default(x2) ? [] : _isString(x2) ? "" : _isObject(x2) ? {} : isArguments_default(x2) ? function() {
    return arguments;
  }() : _isTypedArray(x2) ? x2.constructor.from("") : void 0;
});
var empty_default = empty2;

// node_modules/ramda/es/takeLast.js
var takeLast = /* @__PURE__ */ _curry2(function takeLast2(n2, xs) {
  return drop_default(n2 >= 0 ? xs.length - n2 : 0, xs);
});
var takeLast_default = takeLast;

// node_modules/ramda/es/endsWith.js
var endsWith = /* @__PURE__ */ _curry2(function(suffix, list) {
  return equals_default(takeLast_default(suffix.length, list), suffix);
});
var endsWith_default = endsWith;

// node_modules/ramda/es/eqBy.js
var eqBy = /* @__PURE__ */ _curry3(function eqBy2(f, x2, y3) {
  return equals_default(f(x2), f(y3));
});
var eqBy_default = eqBy;

// node_modules/ramda/es/eqProps.js
var eqProps = /* @__PURE__ */ _curry3(function eqProps2(prop3, obj1, obj2) {
  return equals_default(obj1[prop3], obj2[prop3]);
});
var eqProps_default = eqProps;

// node_modules/ramda/es/evolve.js
var evolve = /* @__PURE__ */ _curry2(function evolve2(transformations, object) {
  if (!_isObject(object) && !isArray_default(object)) {
    return object;
  }
  var result = object instanceof Array ? [] : {};
  var transformation, key, type3;
  for (key in object) {
    transformation = transformations[key];
    type3 = typeof transformation;
    result[key] = type3 === "function" ? transformation(object[key]) : transformation && type3 === "object" ? evolve2(transformation, object[key]) : object[key];
  }
  return result;
});
var evolve_default = evolve;

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

// node_modules/ramda/es/internal/_xfindIndex.js
var XFindIndex = /* @__PURE__ */ function() {
  function XFindIndex2(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.found = false;
  }
  XFindIndex2.prototype["@@transducer/init"] = xfBase_default.init;
  XFindIndex2.prototype["@@transducer/result"] = function(result) {
    if (!this.found) {
      result = this.xf["@@transducer/step"](result, -1);
    }
    return this.xf["@@transducer/result"](result);
  };
  XFindIndex2.prototype["@@transducer/step"] = function(result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.found = true;
      result = _reduced(this.xf["@@transducer/step"](result, this.idx));
    }
    return result;
  };
  return XFindIndex2;
}();
var _xfindIndex = /* @__PURE__ */ _curry2(function _xfindIndex2(f, xf) {
  return new XFindIndex(f, xf);
});
var xfindIndex_default = _xfindIndex;

// node_modules/ramda/es/findIndex.js
var findIndex2 = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable([], xfindIndex_default, function findIndex3(fn, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      if (fn(list[idx])) {
        return idx;
      }
      idx += 1;
    }
    return -1;
  })
);
var findIndex_default = findIndex2;

// node_modules/ramda/es/internal/_xfindLast.js
var XFindLast = /* @__PURE__ */ function() {
  function XFindLast2(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFindLast2.prototype["@@transducer/init"] = xfBase_default.init;
  XFindLast2.prototype["@@transducer/result"] = function(result) {
    return this.xf["@@transducer/result"](this.xf["@@transducer/step"](result, this.last));
  };
  XFindLast2.prototype["@@transducer/step"] = function(result, input) {
    if (this.f(input)) {
      this.last = input;
    }
    return result;
  };
  return XFindLast2;
}();
var _xfindLast = /* @__PURE__ */ _curry2(function _xfindLast2(f, xf) {
  return new XFindLast(f, xf);
});
var xfindLast_default = _xfindLast;

// node_modules/ramda/es/findLast.js
var findLast = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable([], xfindLast_default, function findLast2(fn, list) {
    var idx = list.length - 1;
    while (idx >= 0) {
      if (fn(list[idx])) {
        return list[idx];
      }
      idx -= 1;
    }
  })
);
var findLast_default = findLast;

// node_modules/ramda/es/internal/_xfindLastIndex.js
var XFindLastIndex = /* @__PURE__ */ function() {
  function XFindLastIndex2(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.lastIdx = -1;
  }
  XFindLastIndex2.prototype["@@transducer/init"] = xfBase_default.init;
  XFindLastIndex2.prototype["@@transducer/result"] = function(result) {
    return this.xf["@@transducer/result"](this.xf["@@transducer/step"](result, this.lastIdx));
  };
  XFindLastIndex2.prototype["@@transducer/step"] = function(result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.lastIdx = this.idx;
    }
    return result;
  };
  return XFindLastIndex2;
}();
var _xfindLastIndex = /* @__PURE__ */ _curry2(function _xfindLastIndex2(f, xf) {
  return new XFindLastIndex(f, xf);
});
var xfindLastIndex_default = _xfindLastIndex;

// node_modules/ramda/es/findLastIndex.js
var findLastIndex = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable([], xfindLastIndex_default, function findLastIndex2(fn, list) {
    var idx = list.length - 1;
    while (idx >= 0) {
      if (fn(list[idx])) {
        return idx;
      }
      idx -= 1;
    }
    return -1;
  })
);
var findLastIndex_default = findLastIndex;

// node_modules/ramda/es/flatten.js
var flatten = /* @__PURE__ */ _curry1(
  /* @__PURE__ */ _makeFlat(true)
);
var flatten_default = flatten;

// node_modules/ramda/es/flip.js
var flip = /* @__PURE__ */ _curry1(function flip2(fn) {
  return curryN_default(fn.length, function(a3, b2) {
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = b2;
    args[1] = a3;
    return fn.apply(this, args);
  });
});
var flip_default = flip;

// node_modules/ramda/es/forEach.js
var forEach = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _checkForMethod("forEach", function forEach2(fn, list) {
    var len = list.length;
    var idx = 0;
    while (idx < len) {
      fn(list[idx]);
      idx += 1;
    }
    return list;
  })
);
var forEach_default = forEach;

// node_modules/ramda/es/forEachObjIndexed.js
var forEachObjIndexed = /* @__PURE__ */ _curry2(function forEachObjIndexed2(fn, obj) {
  var keyList = keys_default(obj);
  var idx = 0;
  while (idx < keyList.length) {
    var key = keyList[idx];
    fn(obj[key], key, obj);
    idx += 1;
  }
  return obj;
});
var forEachObjIndexed_default = forEachObjIndexed;

// node_modules/ramda/es/fromPairs.js
var fromPairs = /* @__PURE__ */ _curry1(function fromPairs2(pairs) {
  var result = {};
  var idx = 0;
  while (idx < pairs.length) {
    result[pairs[idx][0]] = pairs[idx][1];
    idx += 1;
  }
  return result;
});
var fromPairs_default = fromPairs;

// node_modules/ramda/es/groupBy.js
var groupBy = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _checkForMethod(
    "groupBy",
    /* @__PURE__ */ reduceBy_default(function(acc, item) {
      acc.push(item);
      return acc;
    }, [])
  )
);
var groupBy_default = groupBy;

// node_modules/ramda/es/groupWith.js
var groupWith = /* @__PURE__ */ _curry2(function(fn, list) {
  var res = [];
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    var nextidx = idx + 1;
    while (nextidx < len && fn(list[nextidx - 1], list[nextidx])) {
      nextidx += 1;
    }
    res.push(list.slice(idx, nextidx));
    idx = nextidx;
  }
  return res;
});
var groupWith_default = groupWith;

// node_modules/ramda/es/gt.js
var gt = /* @__PURE__ */ _curry2(function gt2(a3, b2) {
  return a3 > b2;
});
var gt_default = gt;

// node_modules/ramda/es/gte.js
var gte = /* @__PURE__ */ _curry2(function gte2(a3, b2) {
  return a3 >= b2;
});
var gte_default = gte;

// node_modules/ramda/es/hasPath.js
var hasPath = /* @__PURE__ */ _curry2(function hasPath2(_path, obj) {
  if (_path.length === 0 || isNil_default(obj)) {
    return false;
  }
  var val = obj;
  var idx = 0;
  while (idx < _path.length) {
    if (!isNil_default(val) && _has(_path[idx], val)) {
      val = val[_path[idx]];
      idx += 1;
    } else {
      return false;
    }
  }
  return true;
});
var hasPath_default = hasPath;

// node_modules/ramda/es/has.js
var has = /* @__PURE__ */ _curry2(function has2(prop3, obj) {
  return hasPath_default([prop3], obj);
});
var has_default = has;

// node_modules/ramda/es/hasIn.js
var hasIn = /* @__PURE__ */ _curry2(function hasIn2(prop3, obj) {
  if (isNil_default(obj)) {
    return false;
  }
  return prop3 in obj;
});
var hasIn_default = hasIn;

// node_modules/ramda/es/identical.js
var identical = /* @__PURE__ */ _curry2(objectIs_default);
var identical_default = identical;

// node_modules/ramda/es/ifElse.js
var ifElse = /* @__PURE__ */ _curry3(function ifElse2(condition, onTrue, onFalse) {
  return curryN_default(Math.max(condition.length, onTrue.length, onFalse.length), function _ifElse() {
    return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
  });
});
var ifElse_default = ifElse;

// node_modules/ramda/es/inc.js
var inc = /* @__PURE__ */ add_default(1);
var inc_default = inc;

// node_modules/ramda/es/includes.js
var includes = /* @__PURE__ */ _curry2(_includes);
var includes_default = includes;

// node_modules/ramda/es/indexBy.js
var indexBy = /* @__PURE__ */ reduceBy_default(function(acc, elem) {
  return elem;
}, null);
var indexBy_default = indexBy;

// node_modules/ramda/es/indexOf.js
var indexOf = /* @__PURE__ */ _curry2(function indexOf2(target, xs) {
  return typeof xs.indexOf === "function" && !isArray_default(xs) ? xs.indexOf(target) : _indexOf(xs, target, 0);
});
var indexOf_default = indexOf;

// node_modules/ramda/es/init.js
var init2 = /* @__PURE__ */ slice_default(0, -1);
var init_default = init2;

// node_modules/ramda/es/innerJoin.js
var innerJoin = /* @__PURE__ */ _curry3(function innerJoin2(pred, xs, ys) {
  return _filter(function(x2) {
    return _includesWith(pred, x2, ys);
  }, xs);
});
var innerJoin_default = innerJoin;

// node_modules/ramda/es/insert.js
var insert2 = /* @__PURE__ */ _curry3(function insert3(idx, elt, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  var result = Array.prototype.slice.call(list, 0);
  result.splice(idx, 0, elt);
  return result;
});
var insert_default = insert2;

// node_modules/ramda/es/insertAll.js
var insertAll = /* @__PURE__ */ _curry3(function insertAll2(idx, elts, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  return [].concat(Array.prototype.slice.call(list, 0, idx), elts, Array.prototype.slice.call(list, idx));
});
var insertAll_default = insertAll;

// node_modules/ramda/es/internal/_xuniqBy.js
var XUniqBy = /* @__PURE__ */ function() {
  function XUniqBy2(f, xf) {
    this.xf = xf;
    this.f = f;
    this.set = new Set_default();
  }
  XUniqBy2.prototype["@@transducer/init"] = xfBase_default.init;
  XUniqBy2.prototype["@@transducer/result"] = xfBase_default.result;
  XUniqBy2.prototype["@@transducer/step"] = function(result, input) {
    return this.set.add(this.f(input)) ? this.xf["@@transducer/step"](result, input) : result;
  };
  return XUniqBy2;
}();
var _xuniqBy = /* @__PURE__ */ _curry2(function _xuniqBy2(f, xf) {
  return new XUniqBy(f, xf);
});
var xuniqBy_default = _xuniqBy;

// node_modules/ramda/es/uniqBy.js
var uniqBy = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable([], xuniqBy_default, function(fn, list) {
    var set3 = new Set_default();
    var result = [];
    var idx = 0;
    var appliedItem, item;
    while (idx < list.length) {
      item = list[idx];
      appliedItem = fn(item);
      if (set3.add(appliedItem)) {
        result.push(item);
      }
      idx += 1;
    }
    return result;
  })
);
var uniqBy_default = uniqBy;

// node_modules/ramda/es/uniq.js
var uniq = /* @__PURE__ */ uniqBy_default(identity_default);
var uniq_default = uniq;

// node_modules/ramda/es/intersection.js
var intersection = /* @__PURE__ */ _curry2(function intersection2(list1, list2) {
  var lookupList, filteredList;
  if (list1.length > list2.length) {
    lookupList = list1;
    filteredList = list2;
  } else {
    lookupList = list2;
    filteredList = list1;
  }
  return uniq_default(_filter(flip_default(_includes)(lookupList), filteredList));
});
var intersection_default = intersection;

// node_modules/ramda/es/intersperse.js
var intersperse = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _checkForMethod("intersperse", function intersperse2(separator, list) {
    var out = [];
    var idx = 0;
    var length3 = list.length;
    while (idx < length3) {
      if (idx === length3 - 1) {
        out.push(list[idx]);
      } else {
        out.push(list[idx], separator);
      }
      idx += 1;
    }
    return out;
  })
);
var intersperse_default = intersperse;

// node_modules/ramda/es/internal/_objectAssign.js
function _objectAssign(target) {
  if (target == null) {
    throw new TypeError("Cannot convert undefined or null to object");
  }
  var output = Object(target);
  var idx = 1;
  var length3 = arguments.length;
  while (idx < length3) {
    var source = arguments[idx];
    if (source != null) {
      for (var nextKey in source) {
        if (_has(nextKey, source)) {
          output[nextKey] = source[nextKey];
        }
      }
    }
    idx += 1;
  }
  return output;
}
var objectAssign_default = typeof Object.assign === "function" ? Object.assign : _objectAssign;

// node_modules/ramda/es/objOf.js
var objOf = /* @__PURE__ */ _curry2(function objOf2(key, val) {
  var obj = {};
  obj[key] = val;
  return obj;
});
var objOf_default = objOf;

// node_modules/ramda/es/internal/_stepCat.js
var _stepCatArray = {
  "@@transducer/init": Array,
  "@@transducer/step": function(xs, x2) {
    xs.push(x2);
    return xs;
  },
  "@@transducer/result": _identity
};
var _stepCatString = {
  "@@transducer/init": String,
  "@@transducer/step": function(a3, b2) {
    return a3 + b2;
  },
  "@@transducer/result": _identity
};
var _stepCatObject = {
  "@@transducer/init": Object,
  "@@transducer/step": function(result, input) {
    return objectAssign_default(result, isArrayLike_default(input) ? objOf_default(input[0], input[1]) : input);
  },
  "@@transducer/result": _identity
};
function _stepCat(obj) {
  if (_isTransformer(obj)) {
    return obj;
  }
  if (isArrayLike_default(obj)) {
    return _stepCatArray;
  }
  if (typeof obj === "string") {
    return _stepCatString;
  }
  if (typeof obj === "object") {
    return _stepCatObject;
  }
  throw new Error("Cannot create transformer for " + obj);
}

// node_modules/ramda/es/into.js
var into = /* @__PURE__ */ _curry3(function into2(acc, xf, list) {
  return _isTransformer(acc) ? _reduce(xf(acc), acc["@@transducer/init"](), list) : _reduce(xf(_stepCat(acc)), _clone(acc, [], [], false), list);
});
var into_default = into;

// node_modules/ramda/es/invert.js
var invert = /* @__PURE__ */ _curry1(function invert2(obj) {
  var props3 = keys_default(obj);
  var len = props3.length;
  var idx = 0;
  var out = {};
  while (idx < len) {
    var key = props3[idx];
    var val = obj[key];
    var list = _has(val, out) ? out[val] : out[val] = [];
    list[list.length] = key;
    idx += 1;
  }
  return out;
});
var invert_default = invert;

// node_modules/ramda/es/invertObj.js
var invertObj = /* @__PURE__ */ _curry1(function invertObj2(obj) {
  var props3 = keys_default(obj);
  var len = props3.length;
  var idx = 0;
  var out = {};
  while (idx < len) {
    var key = props3[idx];
    out[obj[key]] = key;
    idx += 1;
  }
  return out;
});
var invertObj_default = invertObj;

// node_modules/ramda/es/invoker.js
var invoker = /* @__PURE__ */ _curry2(function invoker2(arity, method) {
  return curryN_default(arity + 1, function() {
    var target = arguments[arity];
    if (target != null && _isFunction(target[method])) {
      return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
    }
    throw new TypeError(toString_default(target) + ' does not have a method named "' + method + '"');
  });
});
var invoker_default = invoker;

// node_modules/ramda/es/is.js
var is = /* @__PURE__ */ _curry2(function is2(Ctor, val) {
  return val instanceof Ctor || val != null && (val.constructor === Ctor || Ctor.name === "Object" && typeof val === "object");
});
var is_default = is;

// node_modules/ramda/es/isEmpty.js
var isEmpty = /* @__PURE__ */ _curry1(function isEmpty2(x2) {
  return x2 != null && equals_default(x2, empty_default(x2));
});
var isEmpty_default = isEmpty;

// node_modules/ramda/es/join.js
var join = /* @__PURE__ */ invoker_default(1, "join");
var join_default = join;

// node_modules/ramda/es/juxt.js
var juxt = /* @__PURE__ */ _curry1(function juxt2(fns) {
  return converge_default(function() {
    return Array.prototype.slice.call(arguments, 0);
  }, fns);
});
var juxt_default = juxt;

// node_modules/ramda/es/keysIn.js
var keysIn = /* @__PURE__ */ _curry1(function keysIn2(obj) {
  var prop3;
  var ks = [];
  for (prop3 in obj) {
    ks[ks.length] = prop3;
  }
  return ks;
});
var keysIn_default = keysIn;

// node_modules/ramda/es/lastIndexOf.js
var lastIndexOf = /* @__PURE__ */ _curry2(function lastIndexOf2(target, xs) {
  if (typeof xs.lastIndexOf === "function" && !isArray_default(xs)) {
    return xs.lastIndexOf(target);
  } else {
    var idx = xs.length - 1;
    while (idx >= 0) {
      if (equals_default(xs[idx], target)) {
        return idx;
      }
      idx -= 1;
    }
    return -1;
  }
});
var lastIndexOf_default = lastIndexOf;

// node_modules/ramda/es/internal/_isNumber.js
function _isNumber(x2) {
  return Object.prototype.toString.call(x2) === "[object Number]";
}

// node_modules/ramda/es/length.js
var length = /* @__PURE__ */ _curry1(function length2(list) {
  return list != null && _isNumber(list.length) ? list.length : NaN;
});
var length_default = length;

// node_modules/ramda/es/lens.js
var lens = /* @__PURE__ */ _curry2(function lens2(getter, setter) {
  return function(toFunctorFn) {
    return function(target) {
      return map_default(function(focus) {
        return setter(focus, target);
      }, toFunctorFn(getter(target)));
    };
  };
});
var lens_default = lens;

// node_modules/ramda/es/update.js
var update2 = /* @__PURE__ */ _curry3(function update3(idx, x2, list) {
  return adjust_default(idx, always_default(x2), list);
});
var update_default = update2;

// node_modules/ramda/es/lensIndex.js
var lensIndex = /* @__PURE__ */ _curry1(function lensIndex2(n2) {
  return lens_default(nth_default(n2), update_default(n2));
});
var lensIndex_default = lensIndex;

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

// node_modules/ramda/es/lensPath.js
var lensPath = /* @__PURE__ */ _curry1(function lensPath2(p) {
  return lens_default(path_default(p), assocPath_default(p));
});
var lensPath_default = lensPath;

// node_modules/ramda/es/lensProp.js
var lensProp = /* @__PURE__ */ _curry1(function lensProp2(k2) {
  return lens_default(prop_default(k2), assoc_default(k2));
});
var lensProp_default = lensProp;

// node_modules/ramda/es/lt.js
var lt = /* @__PURE__ */ _curry2(function lt2(a3, b2) {
  return a3 < b2;
});
var lt_default = lt;

// node_modules/ramda/es/lte.js
var lte = /* @__PURE__ */ _curry2(function lte2(a3, b2) {
  return a3 <= b2;
});
var lte_default = lte;

// node_modules/ramda/es/mapAccum.js
var mapAccum = /* @__PURE__ */ _curry3(function mapAccum2(fn, acc, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  var tuple = [acc];
  while (idx < len) {
    tuple = fn(tuple[0], list[idx]);
    result[idx] = tuple[1];
    idx += 1;
  }
  return [tuple[0], result];
});
var mapAccum_default = mapAccum;

// node_modules/ramda/es/mapAccumRight.js
var mapAccumRight = /* @__PURE__ */ _curry3(function mapAccumRight2(fn, acc, list) {
  var idx = list.length - 1;
  var result = [];
  var tuple = [acc];
  while (idx >= 0) {
    tuple = fn(tuple[0], list[idx]);
    result[idx] = tuple[1];
    idx -= 1;
  }
  return [tuple[0], result];
});
var mapAccumRight_default = mapAccumRight;

// node_modules/ramda/es/mapObjIndexed.js
var mapObjIndexed = /* @__PURE__ */ _curry2(function mapObjIndexed2(fn, obj) {
  return _reduce(function(acc, key) {
    acc[key] = fn(obj[key], key, obj);
    return acc;
  }, {}, keys_default(obj));
});
var mapObjIndexed_default = mapObjIndexed;

// node_modules/ramda/es/match.js
var match2 = /* @__PURE__ */ _curry2(function match3(rx, str) {
  return str.match(rx) || [];
});
var match_default2 = match2;

// node_modules/ramda/es/mathMod.js
var mathMod = /* @__PURE__ */ _curry2(function mathMod2(m3, p) {
  if (!isInteger_default(m3)) {
    return NaN;
  }
  if (!isInteger_default(p) || p < 1) {
    return NaN;
  }
  return (m3 % p + p) % p;
});
var mathMod_default = mathMod;

// node_modules/ramda/es/maxBy.js
var maxBy = /* @__PURE__ */ _curry3(function maxBy2(f, a3, b2) {
  return f(b2) > f(a3) ? b2 : a3;
});
var maxBy_default = maxBy;

// node_modules/ramda/es/sum.js
var sum = /* @__PURE__ */ reduce_default(add_default, 0);
var sum_default = sum;

// node_modules/ramda/es/mean.js
var mean = /* @__PURE__ */ _curry1(function mean2(list) {
  return sum_default(list) / list.length;
});
var mean_default = mean;

// node_modules/ramda/es/median.js
var median = /* @__PURE__ */ _curry1(function median2(list) {
  var len = list.length;
  if (len === 0) {
    return NaN;
  }
  var width = 2 - len % 2;
  var idx = (len - width) / 2;
  return mean_default(Array.prototype.slice.call(list, 0).sort(function(a3, b2) {
    return a3 < b2 ? -1 : a3 > b2 ? 1 : 0;
  }).slice(idx, idx + width));
});
var median_default = median;

// node_modules/ramda/es/memoizeWith.js
var memoizeWith = /* @__PURE__ */ _curry2(function memoizeWith2(mFn, fn) {
  var cache = {};
  return _arity(fn.length, function() {
    var key = mFn.apply(this, arguments);
    if (!_has(key, cache)) {
      cache[key] = fn.apply(this, arguments);
    }
    return cache[key];
  });
});
var memoizeWith_default = memoizeWith;

// node_modules/ramda/es/mergeAll.js
var mergeAll = /* @__PURE__ */ _curry1(function mergeAll2(list) {
  return objectAssign_default.apply(null, [{}].concat(list));
});
var mergeAll_default = mergeAll;

// node_modules/ramda/es/mergeWithKey.js
var mergeWithKey = /* @__PURE__ */ _curry3(function mergeWithKey2(fn, l, r) {
  var result = {};
  var k2;
  for (k2 in l) {
    if (_has(k2, l)) {
      result[k2] = _has(k2, r) ? fn(k2, l[k2], r[k2]) : l[k2];
    }
  }
  for (k2 in r) {
    if (_has(k2, r) && !_has(k2, result)) {
      result[k2] = r[k2];
    }
  }
  return result;
});
var mergeWithKey_default = mergeWithKey;

// node_modules/ramda/es/mergeDeepWithKey.js
var mergeDeepWithKey = /* @__PURE__ */ _curry3(function mergeDeepWithKey2(fn, lObj, rObj) {
  return mergeWithKey_default(function(k2, lVal, rVal) {
    if (_isObject(lVal) && _isObject(rVal)) {
      return mergeDeepWithKey2(fn, lVal, rVal);
    } else {
      return fn(k2, lVal, rVal);
    }
  }, lObj, rObj);
});
var mergeDeepWithKey_default = mergeDeepWithKey;

// node_modules/ramda/es/mergeDeepLeft.js
var mergeDeepLeft = /* @__PURE__ */ _curry2(function mergeDeepLeft2(lObj, rObj) {
  return mergeDeepWithKey_default(function(k2, lVal, rVal) {
    return lVal;
  }, lObj, rObj);
});
var mergeDeepLeft_default = mergeDeepLeft;

// node_modules/ramda/es/mergeDeepRight.js
var mergeDeepRight = /* @__PURE__ */ _curry2(function mergeDeepRight2(lObj, rObj) {
  return mergeDeepWithKey_default(function(k2, lVal, rVal) {
    return rVal;
  }, lObj, rObj);
});
var mergeDeepRight_default = mergeDeepRight;

// node_modules/ramda/es/mergeDeepWith.js
var mergeDeepWith = /* @__PURE__ */ _curry3(function mergeDeepWith2(fn, lObj, rObj) {
  return mergeDeepWithKey_default(function(k2, lVal, rVal) {
    return fn(lVal, rVal);
  }, lObj, rObj);
});
var mergeDeepWith_default = mergeDeepWith;

// node_modules/ramda/es/mergeLeft.js
var mergeLeft = /* @__PURE__ */ _curry2(function mergeLeft2(l, r) {
  return objectAssign_default({}, r, l);
});
var mergeLeft_default = mergeLeft;

// node_modules/ramda/es/mergeRight.js
var mergeRight = /* @__PURE__ */ _curry2(function mergeRight2(l, r) {
  return objectAssign_default({}, l, r);
});
var mergeRight_default = mergeRight;

// node_modules/ramda/es/mergeWith.js
var mergeWith = /* @__PURE__ */ _curry3(function mergeWith2(fn, l, r) {
  return mergeWithKey_default(function(_2, _l, _r) {
    return fn(_l, _r);
  }, l, r);
});
var mergeWith_default = mergeWith;

// node_modules/ramda/es/min.js
var min = /* @__PURE__ */ _curry2(function min2(a3, b2) {
  return b2 < a3 ? b2 : a3;
});
var min_default = min;

// node_modules/ramda/es/minBy.js
var minBy = /* @__PURE__ */ _curry3(function minBy2(f, a3, b2) {
  return f(b2) < f(a3) ? b2 : a3;
});
var minBy_default = minBy;

// node_modules/ramda/es/internal/_modify.js
function _modify(prop3, fn, obj) {
  if (isInteger_default(prop3) && isArray_default(obj)) {
    var arr = [].concat(obj);
    arr[prop3] = fn(arr[prop3]);
    return arr;
  }
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  result[prop3] = fn(result[prop3]);
  return result;
}

// node_modules/ramda/es/modifyPath.js
var modifyPath = /* @__PURE__ */ _curry3(function modifyPath2(path3, fn, object) {
  if (!_isObject(object) && !isArray_default(object) || path3.length === 0) {
    return object;
  }
  var idx = path3[0];
  if (!_has(idx, object)) {
    return object;
  }
  if (path3.length === 1) {
    return _modify(idx, fn, object);
  }
  var val = modifyPath2(Array.prototype.slice.call(path3, 1), fn, object[idx]);
  if (val === object[idx]) {
    return object;
  }
  return _assoc(idx, val, object);
});
var modifyPath_default = modifyPath;

// node_modules/ramda/es/modify.js
var modify = /* @__PURE__ */ _curry3(function modify2(prop3, fn, object) {
  return modifyPath_default([prop3], fn, object);
});
var modify_default = modify;

// node_modules/ramda/es/modulo.js
var modulo = /* @__PURE__ */ _curry2(function modulo2(a3, b2) {
  return a3 % b2;
});
var modulo_default = modulo;

// node_modules/ramda/es/move.js
var move = /* @__PURE__ */ _curry3(function(from, to, list) {
  var length3 = list.length;
  var result = list.slice();
  var positiveFrom = from < 0 ? length3 + from : from;
  var positiveTo = to < 0 ? length3 + to : to;
  var item = result.splice(positiveFrom, 1);
  return positiveFrom < 0 || positiveFrom >= list.length || positiveTo < 0 || positiveTo >= list.length ? list : [].concat(result.slice(0, positiveTo)).concat(item).concat(result.slice(positiveTo, list.length));
});
var move_default = move;

// node_modules/ramda/es/multiply.js
var multiply = /* @__PURE__ */ _curry2(function multiply2(a3, b2) {
  return a3 * b2;
});
var multiply_default = multiply;

// node_modules/ramda/es/partialObject.js
var partialObject_default = /* @__PURE__ */ _curry2((f, o3) => (props3) => f.call(void 0, mergeDeepRight_default(o3, props3)));

// node_modules/ramda/es/negate.js
var negate = /* @__PURE__ */ _curry1(function negate2(n2) {
  return -n2;
});
var negate_default = negate;

// node_modules/ramda/es/none.js
var none = /* @__PURE__ */ _curry2(function none2(fn, input) {
  return all_default(_complement(fn), input);
});
var none_default = none;

// node_modules/ramda/es/nthArg.js
var nthArg = /* @__PURE__ */ _curry1(function nthArg2(n2) {
  var arity = n2 < 0 ? 1 : n2 + 1;
  return curryN_default(arity, function() {
    return nth_default(n2, arguments);
  });
});
var nthArg_default = nthArg;

// node_modules/ramda/es/o.js
var o = /* @__PURE__ */ _curry3(function o2(f, g2, x2) {
  return f(g2(x2));
});
var o_default = o;

// node_modules/ramda/es/internal/_of.js
function _of(x2) {
  return [x2];
}

// node_modules/ramda/es/of.js
var of = /* @__PURE__ */ _curry1(_of);
var of_default = of;

// node_modules/ramda/es/omit.js
var omit = /* @__PURE__ */ _curry2(function omit2(names, obj) {
  var result = {};
  var index = {};
  var idx = 0;
  var len = names.length;
  while (idx < len) {
    index[names[idx]] = 1;
    idx += 1;
  }
  for (var prop3 in obj) {
    if (!index.hasOwnProperty(prop3)) {
      result[prop3] = obj[prop3];
    }
  }
  return result;
});
var omit_default = omit;

// node_modules/ramda/es/on.js
var on = /* @__PURE__ */ _curryN(4, [], function on2(f, g2, a3, b2) {
  return f(g2(a3), g2(b2));
});
var on_default = on;

// node_modules/ramda/es/once.js
var once = /* @__PURE__ */ _curry1(function once2(fn) {
  var called = false;
  var result;
  return _arity(fn.length, function() {
    if (called) {
      return result;
    }
    called = true;
    result = fn.apply(this, arguments);
    return result;
  });
});
var once_default = once;

// node_modules/ramda/es/internal/_assertPromise.js
function _assertPromise(name, p) {
  if (p == null || !_isFunction(p.then)) {
    throw new TypeError("`" + name + "` expected a Promise, received " + _toString(p, []));
  }
}

// node_modules/ramda/es/otherwise.js
var otherwise = /* @__PURE__ */ _curry2(function otherwise2(f, p) {
  _assertPromise("otherwise", p);
  return p.then(null, f);
});
var otherwise_default = otherwise;

// node_modules/ramda/es/over.js
var Identity = function(x2) {
  return {
    value: x2,
    map: function(f) {
      return Identity(f(x2));
    }
  };
};
var over = /* @__PURE__ */ _curry3(function over2(lens3, f, x2) {
  return lens3(function(y3) {
    return Identity(f(y3));
  })(x2).value;
});
var over_default = over;

// node_modules/ramda/es/pair.js
var pair = /* @__PURE__ */ _curry2(function pair2(fst, snd) {
  return [fst, snd];
});
var pair_default = pair;

// node_modules/ramda/es/internal/_createPartialApplicator.js
function _createPartialApplicator(concat3) {
  return _curry2(function(fn, args) {
    return _arity(Math.max(0, fn.length - args.length), function() {
      return fn.apply(this, concat3(args, arguments));
    });
  });
}

// node_modules/ramda/es/partial.js
var partial = /* @__PURE__ */ _createPartialApplicator(_concat);
var partial_default = partial;

// node_modules/ramda/es/partialRight.js
var partialRight = /* @__PURE__ */ _createPartialApplicator(
  /* @__PURE__ */ flip_default(_concat)
);
var partialRight_default = partialRight;

// node_modules/ramda/es/partition.js
var partition = /* @__PURE__ */ juxt_default([filter_default, reject_default]);
var partition_default = partition;

// node_modules/ramda/es/pathEq.js
var pathEq = /* @__PURE__ */ _curry3(function pathEq2(_path, val, obj) {
  return equals_default(path_default(_path, obj), val);
});
var pathEq_default = pathEq;

// node_modules/ramda/es/pathOr.js
var pathOr = /* @__PURE__ */ _curry3(function pathOr2(d3, p, obj) {
  return defaultTo_default(d3, path_default(p, obj));
});
var pathOr_default = pathOr;

// node_modules/ramda/es/pathSatisfies.js
var pathSatisfies = /* @__PURE__ */ _curry3(function pathSatisfies2(pred, propPath, obj) {
  return pred(path_default(propPath, obj));
});
var pathSatisfies_default = pathSatisfies;

// node_modules/ramda/es/pick.js
var pick = /* @__PURE__ */ _curry2(function pick2(names, obj) {
  var result = {};
  var idx = 0;
  while (idx < names.length) {
    if (names[idx] in obj) {
      result[names[idx]] = obj[names[idx]];
    }
    idx += 1;
  }
  return result;
});
var pick_default = pick;

// node_modules/ramda/es/pickAll.js
var pickAll = /* @__PURE__ */ _curry2(function pickAll2(names, obj) {
  var result = {};
  var idx = 0;
  var len = names.length;
  while (idx < len) {
    var name = names[idx];
    result[name] = obj[name];
    idx += 1;
  }
  return result;
});
var pickAll_default = pickAll;

// node_modules/ramda/es/pickBy.js
var pickBy = /* @__PURE__ */ _curry2(function pickBy2(test3, obj) {
  var result = {};
  for (var prop3 in obj) {
    if (test3(obj[prop3], prop3, obj)) {
      result[prop3] = obj[prop3];
    }
  }
  return result;
});
var pickBy_default = pickBy;

// node_modules/ramda/es/prepend.js
var prepend = /* @__PURE__ */ _curry2(function prepend2(el2, list) {
  return _concat([el2], list);
});
var prepend_default = prepend;

// node_modules/ramda/es/product.js
var product = /* @__PURE__ */ reduce_default(multiply_default, 1);
var product_default = product;

// node_modules/ramda/es/useWith.js
var useWith = /* @__PURE__ */ _curry2(function useWith2(fn, transformers) {
  return curryN_default(transformers.length, function() {
    var args = [];
    var idx = 0;
    while (idx < transformers.length) {
      args.push(transformers[idx].call(this, arguments[idx]));
      idx += 1;
    }
    return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, transformers.length)));
  });
});
var useWith_default = useWith;

// node_modules/ramda/es/project.js
var project = /* @__PURE__ */ useWith_default(_map, [pickAll_default, identity_default]);
var project_default = project;

// node_modules/ramda/es/internal/_promap.js
function _promap(f, g2, profunctor) {
  return function(x2) {
    return g2(profunctor(f(x2)));
  };
}

// node_modules/ramda/es/internal/_xpromap.js
var XPromap = /* @__PURE__ */ function() {
  function XPromap2(f, g2, xf) {
    this.xf = xf;
    this.f = f;
    this.g = g2;
  }
  XPromap2.prototype["@@transducer/init"] = xfBase_default.init;
  XPromap2.prototype["@@transducer/result"] = xfBase_default.result;
  XPromap2.prototype["@@transducer/step"] = function(result, input) {
    return this.xf["@@transducer/step"](result, _promap(this.f, this.g, input));
  };
  return XPromap2;
}();
var _xpromap = /* @__PURE__ */ _curry3(function _xpromap2(f, g2, xf) {
  return new XPromap(f, g2, xf);
});
var xpromap_default = _xpromap;

// node_modules/ramda/es/promap.js
var promap = /* @__PURE__ */ _curry3(
  /* @__PURE__ */ _dispatchable(["fantasy-land/promap", "promap"], xpromap_default, _promap)
);
var promap_default = promap;

// node_modules/ramda/es/propEq.js
var propEq = /* @__PURE__ */ _curry3(function propEq2(name, val, obj) {
  return equals_default(val, prop_default(name, obj));
});
var propEq_default = propEq;

// node_modules/ramda/es/propIs.js
var propIs = /* @__PURE__ */ _curry3(function propIs2(type3, name, obj) {
  return is_default(type3, prop_default(name, obj));
});
var propIs_default = propIs;

// node_modules/ramda/es/propOr.js
var propOr = /* @__PURE__ */ _curry3(function propOr2(val, p, obj) {
  return defaultTo_default(val, prop_default(p, obj));
});
var propOr_default = propOr;

// node_modules/ramda/es/propSatisfies.js
var propSatisfies = /* @__PURE__ */ _curry3(function propSatisfies2(pred, name, obj) {
  return pred(prop_default(name, obj));
});
var propSatisfies_default = propSatisfies;

// node_modules/ramda/es/props.js
var props = /* @__PURE__ */ _curry2(function props2(ps, obj) {
  return ps.map(function(p) {
    return path_default([p], obj);
  });
});
var props_default = props;

// node_modules/ramda/es/range.js
var range = /* @__PURE__ */ _curry2(function range2(from, to) {
  if (!(_isNumber(from) && _isNumber(to))) {
    throw new TypeError("Both arguments to range must be numbers");
  }
  var result = [];
  var n2 = from;
  while (n2 < to) {
    result.push(n2);
    n2 += 1;
  }
  return result;
});
var range_default = range;

// node_modules/ramda/es/reduceRight.js
var reduceRight = /* @__PURE__ */ _curry3(function reduceRight2(fn, acc, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    acc = fn(list[idx], acc);
    if (acc && acc["@@transducer/reduced"]) {
      acc = acc["@@transducer/value"];
      break;
    }
    idx -= 1;
  }
  return acc;
});
var reduceRight_default = reduceRight;

// node_modules/ramda/es/reduceWhile.js
var reduceWhile = /* @__PURE__ */ _curryN(4, [], function _reduceWhile(pred, fn, a3, list) {
  return _reduce(function(acc, x2) {
    return pred(acc, x2) ? fn(acc, x2) : _reduced(acc);
  }, a3, list);
});
var reduceWhile_default = reduceWhile;

// node_modules/ramda/es/reduced.js
var reduced = /* @__PURE__ */ _curry1(_reduced);
var reduced_default = reduced;

// node_modules/ramda/es/times.js
var times = /* @__PURE__ */ _curry2(function times2(fn, n2) {
  var len = Number(n2);
  var idx = 0;
  var list;
  if (len < 0 || isNaN(len)) {
    throw new RangeError("n must be a non-negative number");
  }
  list = new Array(len);
  while (idx < len) {
    list[idx] = fn(idx);
    idx += 1;
  }
  return list;
});
var times_default = times;

// node_modules/ramda/es/repeat.js
var repeat = /* @__PURE__ */ _curry2(function repeat2(value, n2) {
  return times_default(always_default(value), n2);
});
var repeat_default = repeat;

// node_modules/ramda/es/replace.js
var replace = /* @__PURE__ */ _curry3(function replace2(regex, replacement, str) {
  return str.replace(regex, replacement);
});
var replace_default = replace;

// node_modules/ramda/es/scan.js
var scan = /* @__PURE__ */ _curry3(function scan2(fn, acc, list) {
  var idx = 0;
  var len = list.length;
  var result = [acc];
  while (idx < len) {
    acc = fn(acc, list[idx]);
    result[idx + 1] = acc;
    idx += 1;
  }
  return result;
});
var scan_default = scan;

// node_modules/ramda/es/sequence.js
var sequence = /* @__PURE__ */ _curry2(function sequence2(of3, traversable) {
  return typeof traversable.sequence === "function" ? traversable.sequence(of3) : reduceRight_default(function(x2, acc) {
    return ap_default(map_default(prepend_default, x2), acc);
  }, of3([]), traversable);
});
var sequence_default = sequence;

// node_modules/ramda/es/set.js
var set = /* @__PURE__ */ _curry3(function set2(lens3, v, x2) {
  return over_default(lens3, always_default(v), x2);
});
var set_default = set;

// node_modules/ramda/es/sort.js
var sort = /* @__PURE__ */ _curry2(function sort2(comparator3, list) {
  return Array.prototype.slice.call(list, 0).sort(comparator3);
});
var sort_default = sort;

// node_modules/ramda/es/sortBy.js
var sortBy = /* @__PURE__ */ _curry2(function sortBy2(fn, list) {
  return Array.prototype.slice.call(list, 0).sort(function(a3, b2) {
    var aa = fn(a3);
    var bb = fn(b2);
    return aa < bb ? -1 : aa > bb ? 1 : 0;
  });
});
var sortBy_default = sortBy;

// node_modules/ramda/es/sortWith.js
var sortWith = /* @__PURE__ */ _curry2(function sortWith2(fns, list) {
  return Array.prototype.slice.call(list, 0).sort(function(a3, b2) {
    var result = 0;
    var i2 = 0;
    while (result === 0 && i2 < fns.length) {
      result = fns[i2](a3, b2);
      i2 += 1;
    }
    return result;
  });
});
var sortWith_default = sortWith;

// node_modules/ramda/es/split.js
var split = /* @__PURE__ */ invoker_default(1, "split");
var split_default = split;

// node_modules/ramda/es/splitAt.js
var splitAt = /* @__PURE__ */ _curry2(function splitAt2(index, array) {
  return [slice_default(0, index, array), slice_default(index, length_default(array), array)];
});
var splitAt_default = splitAt;

// node_modules/ramda/es/splitEvery.js
var splitEvery = /* @__PURE__ */ _curry2(function splitEvery2(n2, list) {
  if (n2 <= 0) {
    throw new Error("First argument to splitEvery must be a positive integer");
  }
  var result = [];
  var idx = 0;
  while (idx < list.length) {
    result.push(slice_default(idx, idx += n2, list));
  }
  return result;
});
var splitEvery_default = splitEvery;

// node_modules/ramda/es/splitWhen.js
var splitWhen = /* @__PURE__ */ _curry2(function splitWhen2(pred, list) {
  var idx = 0;
  var len = list.length;
  var prefix = [];
  while (idx < len && !pred(list[idx])) {
    prefix.push(list[idx]);
    idx += 1;
  }
  return [prefix, Array.prototype.slice.call(list, idx)];
});
var splitWhen_default = splitWhen;

// node_modules/ramda/es/splitWhenever.js
var splitWhenever = /* @__PURE__ */ _curryN(2, [], function splitWhenever2(pred, list) {
  var acc = [];
  var curr = [];
  for (var i2 = 0; i2 < list.length; i2 = i2 + 1) {
    if (!pred(list[i2])) {
      curr.push(list[i2]);
    }
    if ((i2 < list.length - 1 && pred(list[i2 + 1]) || i2 === list.length - 1) && curr.length > 0) {
      acc.push(curr);
      curr = [];
    }
  }
  return acc;
});
var splitWhenever_default = splitWhenever;

// node_modules/ramda/es/startsWith.js
var startsWith = /* @__PURE__ */ _curry2(function(prefix, list) {
  return equals_default(take_default(prefix.length, list), prefix);
});
var startsWith_default = startsWith;

// node_modules/ramda/es/subtract.js
var subtract = /* @__PURE__ */ _curry2(function subtract2(a3, b2) {
  return Number(a3) - Number(b2);
});
var subtract_default = subtract;

// node_modules/ramda/es/symmetricDifference.js
var symmetricDifference = /* @__PURE__ */ _curry2(function symmetricDifference2(list1, list2) {
  return concat_default(difference_default(list1, list2), difference_default(list2, list1));
});
var symmetricDifference_default = symmetricDifference;

// node_modules/ramda/es/symmetricDifferenceWith.js
var symmetricDifferenceWith = /* @__PURE__ */ _curry3(function symmetricDifferenceWith2(pred, list1, list2) {
  return concat_default(differenceWith_default(pred, list1, list2), differenceWith_default(pred, list2, list1));
});
var symmetricDifferenceWith_default = symmetricDifferenceWith;

// node_modules/ramda/es/takeLastWhile.js
var takeLastWhile = /* @__PURE__ */ _curry2(function takeLastWhile2(fn, xs) {
  var idx = xs.length - 1;
  while (idx >= 0 && fn(xs[idx])) {
    idx -= 1;
  }
  return slice_default(idx + 1, Infinity, xs);
});
var takeLastWhile_default = takeLastWhile;

// node_modules/ramda/es/internal/_xtakeWhile.js
var XTakeWhile = /* @__PURE__ */ function() {
  function XTakeWhile2(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTakeWhile2.prototype["@@transducer/init"] = xfBase_default.init;
  XTakeWhile2.prototype["@@transducer/result"] = xfBase_default.result;
  XTakeWhile2.prototype["@@transducer/step"] = function(result, input) {
    return this.f(input) ? this.xf["@@transducer/step"](result, input) : _reduced(result);
  };
  return XTakeWhile2;
}();
var _xtakeWhile = /* @__PURE__ */ _curry2(function _xtakeWhile2(f, xf) {
  return new XTakeWhile(f, xf);
});
var xtakeWhile_default = _xtakeWhile;

// node_modules/ramda/es/takeWhile.js
var takeWhile = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable(["takeWhile"], xtakeWhile_default, function takeWhile2(fn, xs) {
    var idx = 0;
    var len = xs.length;
    while (idx < len && fn(xs[idx])) {
      idx += 1;
    }
    return slice_default(0, idx, xs);
  })
);
var takeWhile_default = takeWhile;

// node_modules/ramda/es/internal/_xtap.js
var XTap = /* @__PURE__ */ function() {
  function XTap2(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTap2.prototype["@@transducer/init"] = xfBase_default.init;
  XTap2.prototype["@@transducer/result"] = xfBase_default.result;
  XTap2.prototype["@@transducer/step"] = function(result, input) {
    this.f(input);
    return this.xf["@@transducer/step"](result, input);
  };
  return XTap2;
}();
var _xtap = /* @__PURE__ */ _curry2(function _xtap2(f, xf) {
  return new XTap(f, xf);
});
var xtap_default = _xtap;

// node_modules/ramda/es/tap.js
var tap = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable([], xtap_default, function tap2(fn, x2) {
    fn(x2);
    return x2;
  })
);
var tap_default = tap;

// node_modules/ramda/es/internal/_isRegExp.js
function _isRegExp(x2) {
  return Object.prototype.toString.call(x2) === "[object RegExp]";
}

// node_modules/ramda/es/test.js
var test = /* @__PURE__ */ _curry2(function test2(pattern, str) {
  if (!_isRegExp(pattern)) {
    throw new TypeError("\u2018test\u2019 requires a value of type RegExp as its first argument; received " + toString_default(pattern));
  }
  return _cloneRegExp(pattern).test(str);
});
var test_default = test;

// node_modules/ramda/es/andThen.js
var andThen = /* @__PURE__ */ _curry2(function andThen2(f, p) {
  _assertPromise("andThen", p);
  return p.then(f);
});
var andThen_default = andThen;

// node_modules/ramda/es/toLower.js
var toLower = /* @__PURE__ */ invoker_default(0, "toLowerCase");
var toLower_default = toLower;

// node_modules/ramda/es/toPairs.js
var toPairs = /* @__PURE__ */ _curry1(function toPairs2(obj) {
  var pairs = [];
  for (var prop3 in obj) {
    if (_has(prop3, obj)) {
      pairs[pairs.length] = [prop3, obj[prop3]];
    }
  }
  return pairs;
});
var toPairs_default = toPairs;

// node_modules/ramda/es/toPairsIn.js
var toPairsIn = /* @__PURE__ */ _curry1(function toPairsIn2(obj) {
  var pairs = [];
  for (var prop3 in obj) {
    pairs[pairs.length] = [prop3, obj[prop3]];
  }
  return pairs;
});
var toPairsIn_default = toPairsIn;

// node_modules/ramda/es/toUpper.js
var toUpper = /* @__PURE__ */ invoker_default(0, "toUpperCase");
var toUpper_default = toUpper;

// node_modules/ramda/es/transduce.js
var transduce = /* @__PURE__ */ curryN_default(4, function transduce2(xf, fn, acc, list) {
  return _reduce(xf(typeof fn === "function" ? _xwrap(fn) : fn), acc, list);
});
var transduce_default = transduce;

// node_modules/ramda/es/transpose.js
var transpose = /* @__PURE__ */ _curry1(function transpose2(outerlist) {
  var i2 = 0;
  var result = [];
  while (i2 < outerlist.length) {
    var innerlist = outerlist[i2];
    var j = 0;
    while (j < innerlist.length) {
      if (typeof result[j] === "undefined") {
        result[j] = [];
      }
      result[j].push(innerlist[j]);
      j += 1;
    }
    i2 += 1;
  }
  return result;
});
var transpose_default = transpose;

// node_modules/ramda/es/traverse.js
var traverse = /* @__PURE__ */ _curry3(function traverse2(of3, f, traversable) {
  return typeof traversable["fantasy-land/traverse"] === "function" ? traversable["fantasy-land/traverse"](f, of3) : typeof traversable.traverse === "function" ? traversable.traverse(f, of3) : sequence_default(of3, map_default(f, traversable));
});
var traverse_default = traverse;

// node_modules/ramda/es/trim.js
var ws = "	\n\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";
var zeroWidth = "\u200B";
var hasProtoTrim = typeof String.prototype.trim === "function";
var trim = !hasProtoTrim || /* @__PURE__ */ ws.trim() || !/* @__PURE__ */ zeroWidth.trim() ? /* @__PURE__ */ _curry1(function trim2(str) {
  var beginRx = new RegExp("^[" + ws + "][" + ws + "]*");
  var endRx = new RegExp("[" + ws + "][" + ws + "]*$");
  return str.replace(beginRx, "").replace(endRx, "");
}) : /* @__PURE__ */ _curry1(function trim3(str) {
  return str.trim();
});
var trim_default = trim;

// node_modules/ramda/es/tryCatch.js
var tryCatch = /* @__PURE__ */ _curry2(function _tryCatch(tryer, catcher) {
  return _arity(tryer.length, function() {
    try {
      return tryer.apply(this, arguments);
    } catch (e2) {
      return catcher.apply(this, _concat([e2], arguments));
    }
  });
});
var tryCatch_default = tryCatch;

// node_modules/ramda/es/unapply.js
var unapply = /* @__PURE__ */ _curry1(function unapply2(fn) {
  return function() {
    return fn(Array.prototype.slice.call(arguments, 0));
  };
});
var unapply_default = unapply;

// node_modules/ramda/es/unary.js
var unary = /* @__PURE__ */ _curry1(function unary2(fn) {
  return nAry_default(1, fn);
});
var unary_default = unary;

// node_modules/ramda/es/uncurryN.js
var uncurryN = /* @__PURE__ */ _curry2(function uncurryN2(depth, fn) {
  return curryN_default(depth, function() {
    var currentDepth = 1;
    var value = fn;
    var idx = 0;
    var endIdx;
    while (currentDepth <= depth && typeof value === "function") {
      endIdx = currentDepth === depth ? arguments.length : idx + value.length;
      value = value.apply(this, Array.prototype.slice.call(arguments, idx, endIdx));
      currentDepth += 1;
      idx = endIdx;
    }
    return value;
  });
});
var uncurryN_default = uncurryN;

// node_modules/ramda/es/unfold.js
var unfold = /* @__PURE__ */ _curry2(function unfold2(fn, seed) {
  var pair3 = fn(seed);
  var result = [];
  while (pair3 && pair3.length) {
    result[result.length] = pair3[0];
    pair3 = fn(pair3[1]);
  }
  return result;
});
var unfold_default = unfold;

// node_modules/ramda/es/union.js
var union = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ compose(uniq_default, _concat)
);
var union_default = union;

// node_modules/ramda/es/internal/_xuniqWith.js
var XUniqWith = /* @__PURE__ */ function() {
  function XUniqWith2(pred, xf) {
    this.xf = xf;
    this.pred = pred;
    this.items = [];
  }
  XUniqWith2.prototype["@@transducer/init"] = xfBase_default.init;
  XUniqWith2.prototype["@@transducer/result"] = xfBase_default.result;
  XUniqWith2.prototype["@@transducer/step"] = function(result, input) {
    if (_includesWith(this.pred, input, this.items)) {
      return result;
    } else {
      this.items.push(input);
      return this.xf["@@transducer/step"](result, input);
    }
  };
  return XUniqWith2;
}();
var _xuniqWith = /* @__PURE__ */ _curry2(function _xuniqWith2(pred, xf) {
  return new XUniqWith(pred, xf);
});
var xuniqWith_default = _xuniqWith;

// node_modules/ramda/es/uniqWith.js
var uniqWith = /* @__PURE__ */ _curry2(
  /* @__PURE__ */ _dispatchable([], xuniqWith_default, function(pred, list) {
    var idx = 0;
    var len = list.length;
    var result = [];
    var item;
    while (idx < len) {
      item = list[idx];
      if (!_includesWith(pred, item, result)) {
        result[result.length] = item;
      }
      idx += 1;
    }
    return result;
  })
);
var uniqWith_default = uniqWith;

// node_modules/ramda/es/unionWith.js
var unionWith = /* @__PURE__ */ _curry3(function unionWith2(pred, list1, list2) {
  return uniqWith_default(pred, _concat(list1, list2));
});
var unionWith_default = unionWith;

// node_modules/ramda/es/unless.js
var unless = /* @__PURE__ */ _curry3(function unless2(pred, whenFalseFn, x2) {
  return pred(x2) ? x2 : whenFalseFn(x2);
});
var unless_default = unless;

// node_modules/ramda/es/unnest.js
var unnest = /* @__PURE__ */ chain_default(_identity);
var unnest_default = unnest;

// node_modules/ramda/es/until.js
var until = /* @__PURE__ */ _curry3(function until2(pred, fn, init3) {
  var val = init3;
  while (!pred(val)) {
    val = fn(val);
  }
  return val;
});
var until_default = until;

// node_modules/ramda/es/unwind.js
var unwind = /* @__PURE__ */ _curry2(function(key, object) {
  if (!(key in object && isArray_default(object[key]))) {
    return [object];
  }
  return _map(function(item) {
    return _assoc(key, item, object);
  }, object[key]);
});
var unwind_default = unwind;

// node_modules/ramda/es/valuesIn.js
var valuesIn = /* @__PURE__ */ _curry1(function valuesIn2(obj) {
  var prop3;
  var vs = [];
  for (prop3 in obj) {
    vs[vs.length] = obj[prop3];
  }
  return vs;
});
var valuesIn_default = valuesIn;

// node_modules/ramda/es/view.js
var Const = function(x2) {
  return {
    value: x2,
    "fantasy-land/map": function() {
      return this;
    }
  };
};
var view = /* @__PURE__ */ _curry2(function view2(lens3, x2) {
  return lens3(Const)(x2).value;
});
var view_default = view;

// node_modules/ramda/es/when.js
var when = /* @__PURE__ */ _curry3(function when2(pred, whenTrueFn, x2) {
  return pred(x2) ? whenTrueFn(x2) : x2;
});
var when_default = when;

// node_modules/ramda/es/where.js
var where = /* @__PURE__ */ _curry2(function where2(spec, testObj) {
  for (var prop3 in spec) {
    if (_has(prop3, spec) && !spec[prop3](testObj[prop3])) {
      return false;
    }
  }
  return true;
});
var where_default = where;

// node_modules/ramda/es/whereAny.js
var whereAny = /* @__PURE__ */ _curry2(function whereAny2(spec, testObj) {
  for (var prop3 in spec) {
    if (_has(prop3, spec) && spec[prop3](testObj[prop3])) {
      return true;
    }
  }
  return false;
});
var whereAny_default = whereAny;

// node_modules/ramda/es/whereEq.js
var whereEq = /* @__PURE__ */ _curry2(function whereEq2(spec, testObj) {
  return where_default(map_default(equals_default, spec), testObj);
});
var whereEq_default = whereEq;

// node_modules/ramda/es/without.js
var without = /* @__PURE__ */ _curry2(function(xs, list) {
  return reject_default(flip_default(_includes)(xs), list);
});
var without_default = without;

// node_modules/ramda/es/xor.js
var xor = /* @__PURE__ */ _curry2(function xor2(a3, b2) {
  return Boolean(!a3 ^ !b2);
});
var xor_default = xor;

// node_modules/ramda/es/xprod.js
var xprod = /* @__PURE__ */ _curry2(function xprod2(a3, b2) {
  var idx = 0;
  var ilen = a3.length;
  var j;
  var jlen = b2.length;
  var result = [];
  while (idx < ilen) {
    j = 0;
    while (j < jlen) {
      result[result.length] = [a3[idx], b2[j]];
      j += 1;
    }
    idx += 1;
  }
  return result;
});
var xprod_default = xprod;

// node_modules/ramda/es/zip.js
var zip = /* @__PURE__ */ _curry2(function zip2(a3, b2) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a3.length, b2.length);
  while (idx < len) {
    rv[idx] = [a3[idx], b2[idx]];
    idx += 1;
  }
  return rv;
});
var zip_default = zip;

// node_modules/ramda/es/zipObj.js
var zipObj = /* @__PURE__ */ _curry2(function zipObj2(keys4, values3) {
  var idx = 0;
  var len = Math.min(keys4.length, values3.length);
  var out = {};
  while (idx < len) {
    out[keys4[idx]] = values3[idx];
    idx += 1;
  }
  return out;
});
var zipObj_default = zipObj;

// node_modules/ramda/es/zipWith.js
var zipWith = /* @__PURE__ */ _curry3(function zipWith2(fn, a3, b2) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a3.length, b2.length);
  while (idx < len) {
    rv[idx] = fn(a3[idx], b2[idx]);
    idx += 1;
  }
  return rv;
});
var zipWith_default = zipWith;

// node_modules/ramda/es/thunkify.js
var thunkify = /* @__PURE__ */ _curry1(function thunkify2(fn) {
  return curryN_default(fn.length, function createThunk() {
    var fnArgs = arguments;
    return function invokeThunk() {
      return fn.apply(this, fnArgs);
    };
  });
});
var thunkify_default = thunkify;

// node_modules/fpjson-lang/dist/esm/index.js
var _ = { Object, Array, String, Number, Boolean };
var c2 = (t2) => typeof t2 == "function";
var n = (t2, s3 = {}) => {
  if (isNil_default(t2))
    return t2;
  let u2 = curry_default((l) => (/^\$/.test(l) && (l = a3(tail_default(l), true)), path_default(l.split("."))(s3))), a3 = curry_default((l, o3) => u2(l)), p = curry_default((l, o3) => {
    let R2 = s3;
    /^\$/.test(l) && (l = a3(tail_default(l), true));
    let y3 = l.split(".");
    for (let r of init_default(y3))
      isNil_default(R2[r]) && (R2[r] = {}), R2 = R2[r];
    return R2[last_default(y3)] = o3, o3;
  }), i2 = null;
  if (c2(t2[0])) {
    let l = tail_default(t2);
    i2 = t2[0](...l);
  } else
    is_default(Array)(t2) && t2.length === 1 && t2[0] === "__" ? i2 = __default : t2[0] === "typ" ? i2 = _[t2[1]] : t2[0] === "reg" ? i2 = new RegExp(...tail_default(t2)) : is_default(Array)(t2) && (includes_default(t2[0])(["let", "var", "$"]) || c2(es_exports[t2[0]])) ? (i2 = compose(ifElse_default(o_default(gt_default(__default, 0), length_default), apply_default(t2[0] === "$" ? u2 : t2[0] === "var" ? a3 : t2[0] === "let" ? p : es_exports[t2[0]]), always_default(es_exports[t2[0]])), map_default((l) => n(l, s3)), tail_default)(t2), i2 = typeof i2 > "u" ? [] : i2) : is_default(Object)(t2) && is_default(String)(t2.var) ? i2 = path_default(t2.var.split("."))(s3) : is_default(Array)(t2) || is_default(Object)(t2) ? i2 = map_default((l) => n(l, s3))(t2) : i2 = t2;
  let f = null;
  return is_default(Array)(i2) && is_default(String)(i2[0]) && i2[0] === "[]" ? f = tail_default(i2) : f = c2(i2[0]) ? n(i2, s3) : i2, f;
};
var g = n;

// src/services/sw-cache.js
var DRE = "https://dre-1.warp.cc";
var query = (contract, q2) => fetch(`${DRE}/contract?id=${contract}&query=$`).then((res) => res.json()).then((r) => r.result[0]).then((s3) => g([q2, s3])).then((x2) => (console.log(x2), x2));

// src/services/arweave.js
var URL = "https://arweave.net";
var run2 = ({ query: query2, variables }) => fetch(`${URL}/graphql`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ query: query2, variables })
}).then((res) => res.ok ? res.json() : Promise.reject(res));
var gql = async (q2) => {
  let hasNextPage = true;
  let edges = [];
  let cursor = "";
  while (hasNextPage) {
    const result = await run2({ query: q2.query, variables: { ...q2.variables, cursor } }).then(path_default(["data", "transactions"]));
    if (result.edges && result.edges.length) {
      edges = edges.concat(result.edges);
      cursor = result.edges[result.edges.length - 1].cursor;
    }
    hasNextPage = result.pageInfo.hasNextPage;
  }
  return edges;
};

// src/domain/stamps.js
var import_crocks = __toESM(require_crocks());
var { of: of2, ask, lift: lift3 } = (0, import_crocks.ReaderT)(import_crocks.Async);
var STAMP_CONTRACT = "61vg8n54MGSC9ZHfSVAtQp4WjNb20TaThu6bkQ86pPI";
var stampsByAddress = (addr) => of2(addr).chain((addr2) => ask(
  ({ query: query2, gql: gql2 }) => import_crocks.Async.fromPromise(query2)(
    STAMP_CONTRACT,
    [
      "compose",
      ["filter", ["propEq", "address", addr2]],
      ["values"],
      ["prop", "stamps"]
    ]
  ).chain(
    (stamps) => import_crocks.Async.of(stamps).map(pluck_default("asset")).map(buildQuery).chain(import_crocks.Async.fromPromise(gql2)).map(pluck_default("node")).map(map_default(toStamp)).map(map_default((s3) => {
      s3.timestamp = propOr_default(0, "timestamp", find_default(propEq_default("asset", s3.id), stamps));
      return s3;
    }))
  ).chain(
    (stamps) => import_crocks.Async.fromPromise(query2)(STAMP_CONTRACT, [
      "compose",
      ["mapObjIndexed", ["length"]],
      ["groupBy", ["prop", "asset"]],
      ["values"],
      ["prop", "stamps"]
    ]).map((counts) => {
      return map_default((s3) => assoc_default("count", counts[s3.id], s3), stamps);
    })
  )
)).chain(lift3);
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

// src/arrow-out.svelte
function create_fragment(ctx) {
  let svg;
  let path3;
  let svg_strokewidth_value;
  return {
    c() {
      svg = svg_element("svg");
      path3 = svg_element("path");
      attr(path3, "strokelinecap", "round");
      attr(path3, "strokelinejoin", "round");
      attr(path3, "d", "M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25");
      attr(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr(svg, "fill", "none");
      attr(svg, "viewBox", "0 0 24 24");
      attr(svg, "strokewidth", svg_strokewidth_value = 1.5);
      attr(svg, "stroke", "currentColor");
      attr(svg, "class", "w-4 h-4");
    },
    m(target, anchor) {
      insert(target, svg, anchor);
      append(svg, path3);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(svg);
    }
  };
}
var Arrow_out = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
};
var arrow_out_default = Arrow_out;

// src/Widget.svelte
function get_each_context(ctx, list, i2) {
  const child_ctx = ctx.slice();
  child_ctx[4] = list[i2];
  return child_ctx;
}
function create_catch_block(ctx) {
  return {
    c: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_then_block(ctx) {
  let ul;
  let ul_class_value;
  let current;
  let each_value = take_default(Number(ctx[1]), ctx[3]);
  let each_blocks = [];
  for (let i2 = 0; i2 < each_value.length; i2 += 1) {
    each_blocks[i2] = create_each_block(get_each_context(ctx, each_value, i2));
  }
  const out = (i2) => transition_out(each_blocks[i2], 1, 1, () => {
    each_blocks[i2] = null;
  });
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
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 7) {
        each_value = take_default(Number(ctx2[1]), ctx2[3]);
        let i2;
        for (i2 = 0; i2 < each_value.length; i2 += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i2);
          if (each_blocks[i2]) {
            each_blocks[i2].p(child_ctx, dirty);
            transition_in(each_blocks[i2], 1);
          } else {
            each_blocks[i2] = create_each_block(child_ctx);
            each_blocks[i2].c();
            transition_in(each_blocks[i2], 1);
            each_blocks[i2].m(ul, null);
          }
        }
        group_outros();
        for (i2 = each_value.length; i2 < each_blocks.length; i2 += 1) {
          out(i2);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i2 = 0; i2 < each_value.length; i2 += 1) {
        transition_in(each_blocks[i2]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i2 = 0; i2 < each_blocks.length; i2 += 1) {
        transition_out(each_blocks[i2]);
      }
      current = false;
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
  let div4;
  let div1;
  let div0;
  let h22;
  let a3;
  let span0;
  let t0_value = ctx[4].title + "";
  let t0;
  let t1;
  let span1;
  let arrowout;
  let a_href_value;
  let t2;
  let p0;
  let t3_value = ctx[4].description + "";
  let t3;
  let p0_class_value;
  let t4;
  let p1;
  let span2;
  let t6;
  let t7_value = format(new Date(ctx[4].timestamp), "M/dd/yyyy h:m aaa") + "";
  let t7;
  let p1_class_value;
  let div0_class_value;
  let div1_class_value;
  let t8;
  let div3;
  let div2;
  let p2;
  let t9;
  let p2_class_value;
  let t10;
  let p3;
  let t11_value = ctx[4].count + "";
  let t11;
  let p3_class_value;
  let div2_class_value;
  let div4_class_value;
  let t12;
  let li_class_value;
  let current;
  arrowout = new arrow_out_default({});
  return {
    c() {
      li = element("li");
      div4 = element("div");
      div1 = element("div");
      div0 = element("div");
      h22 = element("h2");
      a3 = element("a");
      span0 = element("span");
      t0 = text(t0_value);
      t1 = space();
      span1 = element("span");
      create_component(arrowout.$$.fragment);
      t2 = space();
      p0 = element("p");
      t3 = text(t3_value);
      t4 = space();
      p1 = element("p");
      span2 = element("span");
      span2.textContent = "Stamped:";
      t6 = space();
      t7 = text(t7_value);
      t8 = space();
      div3 = element("div");
      div2 = element("div");
      p2 = element("p");
      t9 = text("Stamps:");
      t10 = space();
      p3 = element("p");
      t11 = text(t11_value);
      t12 = space();
      attr(span1, "class", "ml-4");
      attr(a3, "rel", "noreferrer");
      attr(a3, "target", "_blank");
      attr(a3, "href", a_href_value = "https://arweave.net/" + ctx[4].id);
      attr(a3, "class", "flex");
      attr(h22, "class", "text-xl font-bold");
      attr(p0, "class", p0_class_value = tw("text-[12px]"));
      attr(span2, "class", "font-bold mr-2");
      attr(p1, "class", p1_class_value = tw("text-[12px]"));
      attr(div0, "class", div0_class_value = tw("flex-initial flex flex-col"));
      attr(div1, "class", div1_class_value = tw("min-w-0 space-y-3"));
      attr(p2, "class", p2_class_value = tw("text-[12px] font-bold"));
      attr(p3, "class", p3_class_value = tw("text-[12px] text-center"));
      attr(div2, "class", div2_class_value = tw("md:flex flex-col"));
      attr(div3, "class", "flex-none hidden md:flex space-y-4");
      attr(div4, "class", div4_class_value = tw("flex items-center justify-between space-x-4"));
      attr(li, "class", li_class_value = tw("relative pl-4 pr-6 py-5 hover:bg-gray-50 sm:py-6 sm:pl-6 lg:pl-8 xl:pl-6"));
    },
    m(target, anchor) {
      insert(target, li, anchor);
      append(li, div4);
      append(div4, div1);
      append(div1, div0);
      append(div0, h22);
      append(h22, a3);
      append(a3, span0);
      append(span0, t0);
      append(a3, t1);
      append(a3, span1);
      mount_component(arrowout, span1, null);
      append(div0, t2);
      append(div0, p0);
      append(p0, t3);
      append(div0, t4);
      append(div0, p1);
      append(p1, span2);
      append(p1, t6);
      append(p1, t7);
      append(div4, t8);
      append(div4, div3);
      append(div3, div2);
      append(div2, p2);
      append(p2, t9);
      append(div2, t10);
      append(div2, p3);
      append(p3, t11);
      append(li, t12);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 7) && t0_value !== (t0_value = ctx2[4].title + ""))
        set_data(t0, t0_value);
      if (!current || dirty & 7 && a_href_value !== (a_href_value = "https://arweave.net/" + ctx2[4].id)) {
        attr(a3, "href", a_href_value);
      }
      if ((!current || dirty & 7) && t3_value !== (t3_value = ctx2[4].description + ""))
        set_data(t3, t3_value);
      if ((!current || dirty & 7) && t7_value !== (t7_value = format(new Date(ctx2[4].timestamp), "M/dd/yyyy h:m aaa") + ""))
        set_data(t7, t7_value);
      if ((!current || dirty & 7) && t11_value !== (t11_value = ctx2[4].count + ""))
        set_data(t11, t11_value);
    },
    i(local) {
      if (current)
        return;
      transition_in(arrowout.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(arrowout.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(li);
      destroy_component(arrowout);
    }
  };
}
function create_pending_block(ctx) {
  return {
    c: noop,
    m: noop,
    p: noop,
    i: noop,
    o: noop,
    d: noop
  };
}
function create_fragment2(ctx) {
  let await_block_anchor;
  let promise;
  let current;
  let info = {
    ctx,
    current: null,
    token: null,
    hasCatch: false,
    pending: create_pending_block,
    then: create_then_block,
    catch: create_catch_block,
    value: 3,
    blocks: [, , ,]
  };
  handle_promise(promise = ctx[2].stamps(ctx[0]), info);
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
      current = true;
    },
    p(new_ctx, [dirty]) {
      ctx = new_ctx;
      info.ctx = ctx;
      if (dirty & 5 && promise !== (promise = ctx[2].stamps(ctx[0])) && handle_promise(promise, info)) {
      } else {
        update_await_block_branch(info, ctx, dirty);
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(info.block);
      current = true;
    },
    o(local) {
      for (let i2 = 0; i2 < 3; i2 += 1) {
        const block = info.blocks[i2];
        transition_out(block);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(await_block_anchor);
      info.block.d(detaching);
      info.token = null;
      info = null;
    }
  };
}
function tw(s3) {
  return s3;
}
function instance($$self, $$props, $$invalidate) {
  let $app;
  component_subscribe($$self, app, ($$value) => $$invalidate(2, $app = $$value));
  let { address = "vh-NTHVvlKZqRxc8LyyTNok65yQ55a_PJ1zWLb9G2JI" } = $$props;
  let { limit = "10" } = $$props;
  $$self.$$set = ($$props2) => {
    if ("address" in $$props2)
      $$invalidate(0, address = $$props2.address);
    if ("limit" in $$props2)
      $$invalidate(1, limit = $$props2.limit);
  };
  return [address, limit, $app];
}
var Widget = class extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment2, safe_not_equal, { address: 0, limit: 1 });
  }
};
var Widget_default = Widget;

// src/main.js
var el = document.getElementById("stamps");
if (!el) {
  alert("Stamp Widget Target not found!");
}
var widget = new Widget_default({
  target: el,
  props: el.dataset
});
var main_default = widget;
export {
  main_default as default
};
/** @license ISC License (c) copyright 2016 original and current authors */
/** @license ISC License (c) copyright 2017 original and current authors */
/** @license ISC License (c) copyright 2018 original and current authors */
/** @license ISC License (c) copyright 2019 original and current authors */
