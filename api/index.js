var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
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
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/models/KnowledgePoint.ts
var KnowledgePoint_exports = {};
__export(KnowledgePoint_exports, {
  default: () => KnowledgePoint_default
});
var import_mongoose2, QuizQuestionSchema, GraphPositionSchema, ContentFileSchema, KnowledgePointSchema, KnowledgePoint, KnowledgePoint_default;
var init_KnowledgePoint = __esm({
  "src/models/KnowledgePoint.ts"() {
    import_mongoose2 = __toESM(require("mongoose"));
    QuizQuestionSchema = new import_mongoose2.Schema({
      question: { type: String, required: true },
      type: { type: String, required: true, enum: ["single", "multiple", "boolean"] },
      options: [{ type: String }],
      correctAnswer: { type: import_mongoose2.Schema.Types.Mixed, required: true },
      explanation: { type: String, required: true }
    }, { _id: false });
    GraphPositionSchema = new import_mongoose2.Schema({
      x: { type: Number, required: true },
      y: { type: Number, required: true }
    }, { _id: false });
    ContentFileSchema = new import_mongoose2.Schema({
      title: { type: String, required: true },
      content: { type: String, required: true }
    }, { _id: false });
    KnowledgePointSchema = new import_mongoose2.Schema({
      id: { type: String, required: true, unique: true, index: true },
      title: { type: String, required: true },
      subject: { type: String, required: true, index: true },
      // 添加索引，方便按科目查询
      contentSnippet: { type: String, required: true },
      content: { type: String, required: false },
      // 完整的Markdown内容（向后兼容）
      contentFiles: { type: [ContentFileSchema], required: false },
      // 多个Markdown文件
      status: { type: String, required: true, enum: ["completed", "in_progress", "not_started"] },
      prerequisites: [{ type: String }],
      quiz: { type: [QuizQuestionSchema], default: [] },
      difficulty: { type: Number, required: true, min: 1, max: 5, default: 3 },
      estimatedTime: { type: Number, required: true, default: 30 },
      graphPosition: { type: GraphPositionSchema, required: true }
    }, {
      // 优化选项
      timestamps: false
      // 不需要 createdAt 和 updatedAt
    });
    KnowledgePoint = import_mongoose2.default.models.KnowledgePoint || (0, import_mongoose2.model)("KnowledgePoint", KnowledgePointSchema);
    KnowledgePoint_default = KnowledgePoint;
  }
});

// src/models/StudySession.ts
var StudySession_exports = {};
__export(StudySession_exports, {
  default: () => StudySession_default
});
var import_mongoose6, StudySessionSchema, StudySession, StudySession_default;
var init_StudySession = __esm({
  "src/models/StudySession.ts"() {
    import_mongoose6 = __toESM(require("mongoose"));
    StudySessionSchema = new import_mongoose6.Schema({
      userId: { type: import_mongoose6.Schema.Types.ObjectId, ref: "User", required: true, index: true },
      pointId: { type: String, index: true },
      pointTitle: { type: String },
      subject: { type: String, index: true },
      startTime: { type: Date, required: true, index: true },
      endTime: { type: Date },
      duration: { type: Number, default: 0 },
      // 秒
      active: { type: Boolean, default: true },
      activityCount: { type: Number, default: 0 }
    }, {
      timestamps: true
    });
    StudySessionSchema.index({ userId: 1, startTime: -1 });
    StudySessionSchema.index({ userId: 1, pointId: 1 });
    StudySessionSchema.index({ userId: 1, endTime: 1 });
    StudySession = import_mongoose6.default.models.StudySession || (0, import_mongoose6.model)("StudySession", StudySessionSchema);
    StudySession_default = StudySession;
  }
});

// ../node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js
var require_type = __commonJS({
  "../node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/type.js"(exports2, module2) {
    "use strict";
    module2.exports = TypeError;
  }
});

// ../node_modules/.pnpm/object-inspect@1.13.4/node_modules/object-inspect/util.inspect.js
var require_util_inspect = __commonJS({
  "../node_modules/.pnpm/object-inspect@1.13.4/node_modules/object-inspect/util.inspect.js"(exports2, module2) {
    module2.exports = require("util").inspect;
  }
});

// ../node_modules/.pnpm/object-inspect@1.13.4/node_modules/object-inspect/index.js
var require_object_inspect = __commonJS({
  "../node_modules/.pnpm/object-inspect@1.13.4/node_modules/object-inspect/index.js"(exports2, module2) {
    var hasMap = typeof Map === "function" && Map.prototype;
    var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
    var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
    var mapForEach = hasMap && Map.prototype.forEach;
    var hasSet = typeof Set === "function" && Set.prototype;
    var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
    var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
    var setForEach = hasSet && Set.prototype.forEach;
    var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
    var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
    var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
    var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
    var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
    var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
    var booleanValueOf = Boolean.prototype.valueOf;
    var objectToString = Object.prototype.toString;
    var functionToString = Function.prototype.toString;
    var $match = String.prototype.match;
    var $slice = String.prototype.slice;
    var $replace = String.prototype.replace;
    var $toUpperCase = String.prototype.toUpperCase;
    var $toLowerCase = String.prototype.toLowerCase;
    var $test = RegExp.prototype.test;
    var $concat = Array.prototype.concat;
    var $join = Array.prototype.join;
    var $arrSlice = Array.prototype.slice;
    var $floor = Math.floor;
    var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
    var gOPS = Object.getOwnPropertySymbols;
    var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
    var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
    var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
      return O.__proto__;
    } : null);
    function addNumericSeparator(num, str) {
      if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
        return str;
      }
      var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if (typeof num === "number") {
        var int = num < 0 ? -$floor(-num) : $floor(num);
        if (int !== num) {
          var intStr = String(int);
          var dec = $slice.call(str, intStr.length + 1);
          return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
      }
      return $replace.call(str, sepRegex, "$&_");
    }
    var utilInspect = require_util_inspect();
    var inspectCustom = utilInspect.custom;
    var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
    var quotes = {
      __proto__: null,
      "double": '"',
      single: "'"
    };
    var quoteREs = {
      __proto__: null,
      "double": /(["\\])/g,
      single: /(['\\])/g
    };
    module2.exports = function inspect_(obj, options, depth, seen) {
      var opts = options || {};
      if (has(opts, "quoteStyle") && !has(quotes, opts.quoteStyle)) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
      }
      if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
      }
      var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
      if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
      }
      if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
      }
      if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
      }
      var numericSeparator = opts.numericSeparator;
      if (typeof obj === "undefined") {
        return "undefined";
      }
      if (obj === null) {
        return "null";
      }
      if (typeof obj === "boolean") {
        return obj ? "true" : "false";
      }
      if (typeof obj === "string") {
        return inspectString(obj, opts);
      }
      if (typeof obj === "number") {
        if (obj === 0) {
          return Infinity / obj > 0 ? "0" : "-0";
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
      }
      if (typeof obj === "bigint") {
        var bigIntStr = String(obj) + "n";
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
      }
      var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
      if (typeof depth === "undefined") {
        depth = 0;
      }
      if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
        return isArray(obj) ? "[Array]" : "[Object]";
      }
      var indent = getIndent(opts, depth);
      if (typeof seen === "undefined") {
        seen = [];
      } else if (indexOf(seen, obj) >= 0) {
        return "[Circular]";
      }
      function inspect(value, from, noIndent) {
        if (from) {
          seen = $arrSlice.call(seen);
          seen.push(from);
        }
        if (noIndent) {
          var newOpts = {
            depth: opts.depth
          };
          if (has(opts, "quoteStyle")) {
            newOpts.quoteStyle = opts.quoteStyle;
          }
          return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
      }
      if (typeof obj === "function" && !isRegExp(obj)) {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
      }
      if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
        return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
      }
      if (isElement(obj)) {
        var s = "<" + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
          s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
        }
        s += ">";
        if (obj.childNodes && obj.childNodes.length) {
          s += "...";
        }
        s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
        return s;
      }
      if (isArray(obj)) {
        if (obj.length === 0) {
          return "[]";
        }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
          return "[" + indentedJoin(xs, indent) + "]";
        }
        return "[ " + $join.call(xs, ", ") + " ]";
      }
      if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
          return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
        }
        if (parts.length === 0) {
          return "[" + String(obj) + "]";
        }
        return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
      }
      if (typeof obj === "object" && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
          return utilInspect(obj, { depth: maxDepth - depth });
        } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
          return obj.inspect();
        }
      }
      if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) {
          mapForEach.call(obj, function(value, key) {
            mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
          });
        }
        return collectionOf("Map", mapSize.call(obj), mapParts, indent);
      }
      if (isSet(obj)) {
        var setParts = [];
        if (setForEach) {
          setForEach.call(obj, function(value) {
            setParts.push(inspect(value, obj));
          });
        }
        return collectionOf("Set", setSize.call(obj), setParts, indent);
      }
      if (isWeakMap(obj)) {
        return weakCollectionOf("WeakMap");
      }
      if (isWeakSet(obj)) {
        return weakCollectionOf("WeakSet");
      }
      if (isWeakRef(obj)) {
        return weakCollectionOf("WeakRef");
      }
      if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
      }
      if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
      }
      if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
      }
      if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
      }
      if (typeof window !== "undefined" && obj === window) {
        return "{ [object Window] }";
      }
      if (typeof globalThis !== "undefined" && obj === globalThis || typeof global !== "undefined" && obj === global) {
        return "{ [object globalThis] }";
      }
      if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? "" : "null prototype";
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
        var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
        var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
        if (ys.length === 0) {
          return tag + "{}";
        }
        if (indent) {
          return tag + "{" + indentedJoin(ys, indent) + "}";
        }
        return tag + "{ " + $join.call(ys, ", ") + " }";
      }
      return String(obj);
    };
    function wrapQuotes(s, defaultStyle, opts) {
      var style = opts.quoteStyle || defaultStyle;
      var quoteChar = quotes[style];
      return quoteChar + s + quoteChar;
    }
    function quote(s) {
      return $replace.call(String(s), /"/g, "&quot;");
    }
    function canTrustToString(obj) {
      return !toStringTag || !(typeof obj === "object" && (toStringTag in obj || typeof obj[toStringTag] !== "undefined"));
    }
    function isArray(obj) {
      return toStr(obj) === "[object Array]" && canTrustToString(obj);
    }
    function isDate(obj) {
      return toStr(obj) === "[object Date]" && canTrustToString(obj);
    }
    function isRegExp(obj) {
      return toStr(obj) === "[object RegExp]" && canTrustToString(obj);
    }
    function isError(obj) {
      return toStr(obj) === "[object Error]" && canTrustToString(obj);
    }
    function isString(obj) {
      return toStr(obj) === "[object String]" && canTrustToString(obj);
    }
    function isNumber(obj) {
      return toStr(obj) === "[object Number]" && canTrustToString(obj);
    }
    function isBoolean(obj) {
      return toStr(obj) === "[object Boolean]" && canTrustToString(obj);
    }
    function isSymbol(obj) {
      if (hasShammedSymbols) {
        return obj && typeof obj === "object" && obj instanceof Symbol;
      }
      if (typeof obj === "symbol") {
        return true;
      }
      if (!obj || typeof obj !== "object" || !symToString) {
        return false;
      }
      try {
        symToString.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isBigInt(obj) {
      if (!obj || typeof obj !== "object" || !bigIntValueOf) {
        return false;
      }
      try {
        bigIntValueOf.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    var hasOwn = Object.prototype.hasOwnProperty || function(key) {
      return key in this;
    };
    function has(obj, key) {
      return hasOwn.call(obj, key);
    }
    function toStr(obj) {
      return objectToString.call(obj);
    }
    function nameOf(f) {
      if (f.name) {
        return f.name;
      }
      var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
      if (m) {
        return m[1];
      }
      return null;
    }
    function indexOf(xs, x) {
      if (xs.indexOf) {
        return xs.indexOf(x);
      }
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) {
          return i;
        }
      }
      return -1;
    }
    function isMap(x) {
      if (!mapSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        mapSize.call(x);
        try {
          setSize.call(x);
        } catch (s) {
          return true;
        }
        return x instanceof Map;
      } catch (e) {
      }
      return false;
    }
    function isWeakMap(x) {
      if (!weakMapHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakMapHas.call(x, weakMapHas);
        try {
          weakSetHas.call(x, weakSetHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakMap;
      } catch (e) {
      }
      return false;
    }
    function isWeakRef(x) {
      if (!weakRefDeref || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakRefDeref.call(x);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isSet(x) {
      if (!setSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        setSize.call(x);
        try {
          mapSize.call(x);
        } catch (m) {
          return true;
        }
        return x instanceof Set;
      } catch (e) {
      }
      return false;
    }
    function isWeakSet(x) {
      if (!weakSetHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakSetHas.call(x, weakSetHas);
        try {
          weakMapHas.call(x, weakMapHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakSet;
      } catch (e) {
      }
      return false;
    }
    function isElement(x) {
      if (!x || typeof x !== "object") {
        return false;
      }
      if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
        return true;
      }
      return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
    }
    function inspectString(str, opts) {
      if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
      }
      var quoteRE = quoteREs[opts.quoteStyle || "single"];
      quoteRE.lastIndex = 0;
      var s = $replace.call($replace.call(str, quoteRE, "\\$1"), /[\x00-\x1f]/g, lowbyte);
      return wrapQuotes(s, "single", opts);
    }
    function lowbyte(c) {
      var n = c.charCodeAt(0);
      var x = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
      }[n];
      if (x) {
        return "\\" + x;
      }
      return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
    }
    function markBoxed(str) {
      return "Object(" + str + ")";
    }
    function weakCollectionOf(type) {
      return type + " { ? }";
    }
    function collectionOf(type, size, entries, indent) {
      var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
      return type + " (" + size + ") {" + joinedEntries + "}";
    }
    function singleLineValues(xs) {
      for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], "\n") >= 0) {
          return false;
        }
      }
      return true;
    }
    function getIndent(opts, depth) {
      var baseIndent;
      if (opts.indent === "	") {
        baseIndent = "	";
      } else if (typeof opts.indent === "number" && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), " ");
      } else {
        return null;
      }
      return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
      };
    }
    function indentedJoin(xs, indent) {
      if (xs.length === 0) {
        return "";
      }
      var lineJoiner = "\n" + indent.prev + indent.base;
      return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
    }
    function arrObjKeys(obj, inspect) {
      var isArr = isArray(obj);
      var xs = [];
      if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
          xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
        }
      }
      var syms = typeof gOPS === "function" ? gOPS(obj) : [];
      var symMap;
      if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
          symMap["$" + syms[k]] = syms[k];
        }
      }
      for (var key in obj) {
        if (!has(obj, key)) {
          continue;
        }
        if (isArr && String(Number(key)) === key && key < obj.length) {
          continue;
        }
        if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
          continue;
        } else if ($test.call(/[^\w$]/, key)) {
          xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
        } else {
          xs.push(key + ": " + inspect(obj[key], obj));
        }
      }
      if (typeof gOPS === "function") {
        for (var j = 0; j < syms.length; j++) {
          if (isEnumerable.call(obj, syms[j])) {
            xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
          }
        }
      }
      return xs;
    }
  }
});

// ../node_modules/.pnpm/side-channel-list@1.0.0/node_modules/side-channel-list/index.js
var require_side_channel_list = __commonJS({
  "../node_modules/.pnpm/side-channel-list@1.0.0/node_modules/side-channel-list/index.js"(exports2, module2) {
    "use strict";
    var inspect = require_object_inspect();
    var $TypeError = require_type();
    var listGetNode = function(list, key, isDelete) {
      var prev = list;
      var curr;
      for (; (curr = prev.next) != null; prev = curr) {
        if (curr.key === key) {
          prev.next = curr.next;
          if (!isDelete) {
            curr.next = /** @type {NonNullable<typeof list.next>} */
            list.next;
            list.next = curr;
          }
          return curr;
        }
      }
    };
    var listGet = function(objects, key) {
      if (!objects) {
        return void 0;
      }
      var node = listGetNode(objects, key);
      return node && node.value;
    };
    var listSet = function(objects, key, value) {
      var node = listGetNode(objects, key);
      if (node) {
        node.value = value;
      } else {
        objects.next = /** @type {import('./list.d.ts').ListNode<typeof value, typeof key>} */
        {
          // eslint-disable-line no-param-reassign, no-extra-parens
          key,
          next: objects.next,
          value
        };
      }
    };
    var listHas = function(objects, key) {
      if (!objects) {
        return false;
      }
      return !!listGetNode(objects, key);
    };
    var listDelete = function(objects, key) {
      if (objects) {
        return listGetNode(objects, key, true);
      }
    };
    module2.exports = function getSideChannelList() {
      var $o;
      var channel = {
        assert: function(key) {
          if (!channel.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        },
        "delete": function(key) {
          var root = $o && $o.next;
          var deletedNode = listDelete($o, key);
          if (deletedNode && root && root === deletedNode) {
            $o = void 0;
          }
          return !!deletedNode;
        },
        get: function(key) {
          return listGet($o, key);
        },
        has: function(key) {
          return listHas($o, key);
        },
        set: function(key, value) {
          if (!$o) {
            $o = {
              next: void 0
            };
          }
          listSet(
            /** @type {NonNullable<typeof $o>} */
            $o,
            key,
            value
          );
        }
      };
      return channel;
    };
  }
});

// ../node_modules/.pnpm/es-object-atoms@1.1.1/node_modules/es-object-atoms/index.js
var require_es_object_atoms = __commonJS({
  "../node_modules/.pnpm/es-object-atoms@1.1.1/node_modules/es-object-atoms/index.js"(exports2, module2) {
    "use strict";
    module2.exports = Object;
  }
});

// ../node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/index.js
var require_es_errors = __commonJS({
  "../node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/index.js"(exports2, module2) {
    "use strict";
    module2.exports = Error;
  }
});

// ../node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/eval.js
var require_eval = __commonJS({
  "../node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/eval.js"(exports2, module2) {
    "use strict";
    module2.exports = EvalError;
  }
});

// ../node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/range.js
var require_range = __commonJS({
  "../node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/range.js"(exports2, module2) {
    "use strict";
    module2.exports = RangeError;
  }
});

// ../node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/ref.js
var require_ref = __commonJS({
  "../node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/ref.js"(exports2, module2) {
    "use strict";
    module2.exports = ReferenceError;
  }
});

// ../node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/syntax.js
var require_syntax = __commonJS({
  "../node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/syntax.js"(exports2, module2) {
    "use strict";
    module2.exports = SyntaxError;
  }
});

// ../node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/uri.js
var require_uri = __commonJS({
  "../node_modules/.pnpm/es-errors@1.3.0/node_modules/es-errors/uri.js"(exports2, module2) {
    "use strict";
    module2.exports = URIError;
  }
});

// ../node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/abs.js
var require_abs = __commonJS({
  "../node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/abs.js"(exports2, module2) {
    "use strict";
    module2.exports = Math.abs;
  }
});

// ../node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/floor.js
var require_floor = __commonJS({
  "../node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/floor.js"(exports2, module2) {
    "use strict";
    module2.exports = Math.floor;
  }
});

// ../node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/max.js
var require_max = __commonJS({
  "../node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/max.js"(exports2, module2) {
    "use strict";
    module2.exports = Math.max;
  }
});

// ../node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/min.js
var require_min = __commonJS({
  "../node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/min.js"(exports2, module2) {
    "use strict";
    module2.exports = Math.min;
  }
});

// ../node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/pow.js
var require_pow = __commonJS({
  "../node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/pow.js"(exports2, module2) {
    "use strict";
    module2.exports = Math.pow;
  }
});

// ../node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/round.js
var require_round = __commonJS({
  "../node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/round.js"(exports2, module2) {
    "use strict";
    module2.exports = Math.round;
  }
});

// ../node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/isNaN.js
var require_isNaN = __commonJS({
  "../node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/isNaN.js"(exports2, module2) {
    "use strict";
    module2.exports = Number.isNaN || function isNaN2(a) {
      return a !== a;
    };
  }
});

// ../node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/sign.js
var require_sign = __commonJS({
  "../node_modules/.pnpm/math-intrinsics@1.1.0/node_modules/math-intrinsics/sign.js"(exports2, module2) {
    "use strict";
    var $isNaN = require_isNaN();
    module2.exports = function sign(number) {
      if ($isNaN(number) || number === 0) {
        return number;
      }
      return number < 0 ? -1 : 1;
    };
  }
});

// ../node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/gOPD.js
var require_gOPD = __commonJS({
  "../node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/gOPD.js"(exports2, module2) {
    "use strict";
    module2.exports = Object.getOwnPropertyDescriptor;
  }
});

// ../node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/index.js
var require_gopd = __commonJS({
  "../node_modules/.pnpm/gopd@1.2.0/node_modules/gopd/index.js"(exports2, module2) {
    "use strict";
    var $gOPD = require_gOPD();
    if ($gOPD) {
      try {
        $gOPD([], "length");
      } catch (e) {
        $gOPD = null;
      }
    }
    module2.exports = $gOPD;
  }
});

// ../node_modules/.pnpm/es-define-property@1.0.1/node_modules/es-define-property/index.js
var require_es_define_property = __commonJS({
  "../node_modules/.pnpm/es-define-property@1.0.1/node_modules/es-define-property/index.js"(exports2, module2) {
    "use strict";
    var $defineProperty = Object.defineProperty || false;
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = false;
      }
    }
    module2.exports = $defineProperty;
  }
});

// ../node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/shams.js
var require_shams = __commonJS({
  "../node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/shams.js"(exports2, module2) {
    "use strict";
    module2.exports = function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (var _ in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = (
          /** @type {PropertyDescriptor} */
          Object.getOwnPropertyDescriptor(obj, sym)
        );
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
  }
});

// ../node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/index.js
var require_has_symbols = __commonJS({
  "../node_modules/.pnpm/has-symbols@1.1.0/node_modules/has-symbols/index.js"(exports2, module2) {
    "use strict";
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module2.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    };
  }
});

// ../node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Reflect.getPrototypeOf.js
var require_Reflect_getPrototypeOf = __commonJS({
  "../node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Reflect.getPrototypeOf.js"(exports2, module2) {
    "use strict";
    module2.exports = typeof Reflect !== "undefined" && Reflect.getPrototypeOf || null;
  }
});

// ../node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Object.getPrototypeOf.js
var require_Object_getPrototypeOf = __commonJS({
  "../node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/Object.getPrototypeOf.js"(exports2, module2) {
    "use strict";
    var $Object = require_es_object_atoms();
    module2.exports = $Object.getPrototypeOf || null;
  }
});

// ../node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/implementation.js
var require_implementation = __commonJS({
  "../node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/implementation.js"(exports2, module2) {
    "use strict";
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var toStr = Object.prototype.toString;
    var max = Math.max;
    var funcType = "[object Function]";
    var concatty = function concatty2(a, b) {
      var arr = [];
      for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
      }
      for (var j = 0; j < b.length; j += 1) {
        arr[j + a.length] = b[j];
      }
      return arr;
    };
    var slicy = function slicy2(arrLike, offset) {
      var arr = [];
      for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
        arr[j] = arrLike[i];
      }
      return arr;
    };
    var joiny = function(arr, joiner) {
      var str = "";
      for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
          str += joiner;
        }
      }
      return str;
    };
    module2.exports = function bind(that) {
      var target = this;
      if (typeof target !== "function" || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slicy(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result = target.apply(
            this,
            concatty(args, arguments)
          );
          if (Object(result) === result) {
            return result;
          }
          return this;
        }
        return target.apply(
          that,
          concatty(args, arguments)
        );
      };
      var boundLength = max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = "$" + i;
      }
      bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = function Empty2() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    };
  }
});

// ../node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js
var require_function_bind = __commonJS({
  "../node_modules/.pnpm/function-bind@1.1.2/node_modules/function-bind/index.js"(exports2, module2) {
    "use strict";
    var implementation = require_implementation();
    module2.exports = Function.prototype.bind || implementation;
  }
});

// ../node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/functionCall.js
var require_functionCall = __commonJS({
  "../node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/functionCall.js"(exports2, module2) {
    "use strict";
    module2.exports = Function.prototype.call;
  }
});

// ../node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/functionApply.js
var require_functionApply = __commonJS({
  "../node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/functionApply.js"(exports2, module2) {
    "use strict";
    module2.exports = Function.prototype.apply;
  }
});

// ../node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/reflectApply.js
var require_reflectApply = __commonJS({
  "../node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/reflectApply.js"(exports2, module2) {
    "use strict";
    module2.exports = typeof Reflect !== "undefined" && Reflect && Reflect.apply;
  }
});

// ../node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/actualApply.js
var require_actualApply = __commonJS({
  "../node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/actualApply.js"(exports2, module2) {
    "use strict";
    var bind = require_function_bind();
    var $apply = require_functionApply();
    var $call = require_functionCall();
    var $reflectApply = require_reflectApply();
    module2.exports = $reflectApply || bind.call($call, $apply);
  }
});

// ../node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/index.js
var require_call_bind_apply_helpers = __commonJS({
  "../node_modules/.pnpm/call-bind-apply-helpers@1.0.2/node_modules/call-bind-apply-helpers/index.js"(exports2, module2) {
    "use strict";
    var bind = require_function_bind();
    var $TypeError = require_type();
    var $call = require_functionCall();
    var $actualApply = require_actualApply();
    module2.exports = function callBindBasic(args) {
      if (args.length < 1 || typeof args[0] !== "function") {
        throw new $TypeError("a function is required");
      }
      return $actualApply(bind, $call, args);
    };
  }
});

// ../node_modules/.pnpm/dunder-proto@1.0.1/node_modules/dunder-proto/get.js
var require_get = __commonJS({
  "../node_modules/.pnpm/dunder-proto@1.0.1/node_modules/dunder-proto/get.js"(exports2, module2) {
    "use strict";
    var callBind = require_call_bind_apply_helpers();
    var gOPD = require_gopd();
    var hasProtoAccessor;
    try {
      hasProtoAccessor = /** @type {{ __proto__?: typeof Array.prototype }} */
      [].__proto__ === Array.prototype;
    } catch (e) {
      if (!e || typeof e !== "object" || !("code" in e) || e.code !== "ERR_PROTO_ACCESS") {
        throw e;
      }
    }
    var desc = !!hasProtoAccessor && gOPD && gOPD(
      Object.prototype,
      /** @type {keyof typeof Object.prototype} */
      "__proto__"
    );
    var $Object = Object;
    var $getPrototypeOf = $Object.getPrototypeOf;
    module2.exports = desc && typeof desc.get === "function" ? callBind([desc.get]) : typeof $getPrototypeOf === "function" ? (
      /** @type {import('./get')} */
      function getDunder(value) {
        return $getPrototypeOf(value == null ? value : $Object(value));
      }
    ) : false;
  }
});

// ../node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/index.js
var require_get_proto = __commonJS({
  "../node_modules/.pnpm/get-proto@1.0.1/node_modules/get-proto/index.js"(exports2, module2) {
    "use strict";
    var reflectGetProto = require_Reflect_getPrototypeOf();
    var originalGetProto = require_Object_getPrototypeOf();
    var getDunderProto = require_get();
    module2.exports = reflectGetProto ? function getProto(O) {
      return reflectGetProto(O);
    } : originalGetProto ? function getProto(O) {
      if (!O || typeof O !== "object" && typeof O !== "function") {
        throw new TypeError("getProto: not an object");
      }
      return originalGetProto(O);
    } : getDunderProto ? function getProto(O) {
      return getDunderProto(O);
    } : null;
  }
});

// ../node_modules/.pnpm/hasown@2.0.2/node_modules/hasown/index.js
var require_hasown = __commonJS({
  "../node_modules/.pnpm/hasown@2.0.2/node_modules/hasown/index.js"(exports2, module2) {
    "use strict";
    var call = Function.prototype.call;
    var $hasOwn = Object.prototype.hasOwnProperty;
    var bind = require_function_bind();
    module2.exports = bind.call(call, $hasOwn);
  }
});

// ../node_modules/.pnpm/get-intrinsic@1.3.0/node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS({
  "../node_modules/.pnpm/get-intrinsic@1.3.0/node_modules/get-intrinsic/index.js"(exports2, module2) {
    "use strict";
    var undefined2;
    var $Object = require_es_object_atoms();
    var $Error = require_es_errors();
    var $EvalError = require_eval();
    var $RangeError = require_range();
    var $ReferenceError = require_ref();
    var $SyntaxError = require_syntax();
    var $TypeError = require_type();
    var $URIError = require_uri();
    var abs = require_abs();
    var floor = require_floor();
    var max = require_max();
    var min = require_min();
    var pow = require_pow();
    var round = require_round();
    var sign = require_sign();
    var $Function = Function;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    };
    var $gOPD = require_gopd();
    var $defineProperty = require_es_define_property();
    var throwTypeError = function() {
      throw new $TypeError();
    };
    var ThrowTypeError = $gOPD ? function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    }() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var getProto = require_get_proto();
    var $ObjectGPO = require_Object_getPrototypeOf();
    var $ReflectGPO = require_Reflect_getPrototypeOf();
    var $apply = require_functionApply();
    var $call = require_functionCall();
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      __proto__: null,
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined2 : BigInt64Array,
      "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined2 : BigUint64Array,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": $Error,
      "%eval%": eval,
      // eslint-disable-line no-eval
      "%EvalError%": $EvalError,
      "%Float16Array%": typeof Float16Array === "undefined" ? undefined2 : Float16Array,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": $Object,
      "%Object.getOwnPropertyDescriptor%": $gOPD,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": $RangeError,
      "%ReferenceError%": $ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": $URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet,
      "%Function.prototype.call%": $call,
      "%Function.prototype.apply%": $apply,
      "%Object.defineProperty%": $defineProperty,
      "%Object.getPrototypeOf%": $ObjectGPO,
      "%Math.abs%": abs,
      "%Math.floor%": floor,
      "%Math.max%": max,
      "%Math.min%": min,
      "%Math.pow%": pow,
      "%Math.round%": round,
      "%Math.sign%": sign,
      "%Reflect.getPrototypeOf%": $ReflectGPO
    };
    if (getProto) {
      try {
        null.error;
      } catch (e) {
        errorProto = getProto(getProto(e));
        INTRINSICS["%Error.prototype%"] = errorProto;
      }
    }
    var errorProto;
    var doEval = function doEval2(name) {
      var value;
      if (name === "%AsyncFunction%") {
        value = getEvalledConstructor("async function () {}");
      } else if (name === "%GeneratorFunction%") {
        value = getEvalledConstructor("function* () {}");
      } else if (name === "%AsyncGeneratorFunction%") {
        value = getEvalledConstructor("async function* () {}");
      } else if (name === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value = fn.prototype;
        }
      } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen && getProto) {
          value = getProto(gen.prototype);
        }
      }
      INTRINSICS[name] = value;
      return value;
    };
    var LEGACY_ALIASES = {
      __proto__: null,
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind = require_function_bind();
    var hasOwn = require_hasown();
    var $concat = bind.call($call, Array.prototype.concat);
    var $spliceApply = bind.call($apply, Array.prototype.splice);
    var $replace = bind.call($call, String.prototype.replace);
    var $strSlice = bind.call($call, String.prototype.slice);
    var $exec = bind.call($call, RegExp.prototype.exec);
    var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = function stringToPath2(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result = [];
      $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
      });
      return result;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
          value = doEval(intrinsicName);
        }
        if (typeof value === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value
        };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
    };
    module2.exports = function GetIntrinsic(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      }
      var parts = stringToPath(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i = 1, isOwn = true; i < parts.length; i += 1) {
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
          if (!(part in value)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
            }
            return void 0;
          }
          if ($gOPD && i + 1 >= parts.length) {
            var desc = $gOPD(value, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value = desc.get;
            } else {
              value = value[part];
            }
          } else {
            isOwn = hasOwn(value, part);
            value = value[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value;
          }
        }
      }
      return value;
    };
  }
});

// ../node_modules/.pnpm/call-bound@1.0.4/node_modules/call-bound/index.js
var require_call_bound = __commonJS({
  "../node_modules/.pnpm/call-bound@1.0.4/node_modules/call-bound/index.js"(exports2, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBindBasic = require_call_bind_apply_helpers();
    var $indexOf = callBindBasic([GetIntrinsic("%String.prototype.indexOf%")]);
    module2.exports = function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = (
        /** @type {(this: unknown, ...args: unknown[]) => unknown} */
        GetIntrinsic(name, !!allowMissing)
      );
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBindBasic(
          /** @type {const} */
          [intrinsic]
        );
      }
      return intrinsic;
    };
  }
});

// ../node_modules/.pnpm/side-channel-map@1.0.1/node_modules/side-channel-map/index.js
var require_side_channel_map = __commonJS({
  "../node_modules/.pnpm/side-channel-map@1.0.1/node_modules/side-channel-map/index.js"(exports2, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBound = require_call_bound();
    var inspect = require_object_inspect();
    var $TypeError = require_type();
    var $Map = GetIntrinsic("%Map%", true);
    var $mapGet = callBound("Map.prototype.get", true);
    var $mapSet = callBound("Map.prototype.set", true);
    var $mapHas = callBound("Map.prototype.has", true);
    var $mapDelete = callBound("Map.prototype.delete", true);
    var $mapSize = callBound("Map.prototype.size", true);
    module2.exports = !!$Map && /** @type {Exclude<import('.'), false>} */
    function getSideChannelMap() {
      var $m;
      var channel = {
        assert: function(key) {
          if (!channel.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        },
        "delete": function(key) {
          if ($m) {
            var result = $mapDelete($m, key);
            if ($mapSize($m) === 0) {
              $m = void 0;
            }
            return result;
          }
          return false;
        },
        get: function(key) {
          if ($m) {
            return $mapGet($m, key);
          }
        },
        has: function(key) {
          if ($m) {
            return $mapHas($m, key);
          }
          return false;
        },
        set: function(key, value) {
          if (!$m) {
            $m = new $Map();
          }
          $mapSet($m, key, value);
        }
      };
      return channel;
    };
  }
});

// ../node_modules/.pnpm/side-channel-weakmap@1.0.2/node_modules/side-channel-weakmap/index.js
var require_side_channel_weakmap = __commonJS({
  "../node_modules/.pnpm/side-channel-weakmap@1.0.2/node_modules/side-channel-weakmap/index.js"(exports2, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBound = require_call_bound();
    var inspect = require_object_inspect();
    var getSideChannelMap = require_side_channel_map();
    var $TypeError = require_type();
    var $WeakMap = GetIntrinsic("%WeakMap%", true);
    var $weakMapGet = callBound("WeakMap.prototype.get", true);
    var $weakMapSet = callBound("WeakMap.prototype.set", true);
    var $weakMapHas = callBound("WeakMap.prototype.has", true);
    var $weakMapDelete = callBound("WeakMap.prototype.delete", true);
    module2.exports = $WeakMap ? (
      /** @type {Exclude<import('.'), false>} */
      function getSideChannelWeakMap() {
        var $wm;
        var $m;
        var channel = {
          assert: function(key) {
            if (!channel.has(key)) {
              throw new $TypeError("Side channel does not contain " + inspect(key));
            }
          },
          "delete": function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
              if ($wm) {
                return $weakMapDelete($wm, key);
              }
            } else if (getSideChannelMap) {
              if ($m) {
                return $m["delete"](key);
              }
            }
            return false;
          },
          get: function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
              if ($wm) {
                return $weakMapGet($wm, key);
              }
            }
            return $m && $m.get(key);
          },
          has: function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
              if ($wm) {
                return $weakMapHas($wm, key);
              }
            }
            return !!$m && $m.has(key);
          },
          set: function(key, value) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
              if (!$wm) {
                $wm = new $WeakMap();
              }
              $weakMapSet($wm, key, value);
            } else if (getSideChannelMap) {
              if (!$m) {
                $m = getSideChannelMap();
              }
              $m.set(key, value);
            }
          }
        };
        return channel;
      }
    ) : getSideChannelMap;
  }
});

// ../node_modules/.pnpm/side-channel@1.1.0/node_modules/side-channel/index.js
var require_side_channel = __commonJS({
  "../node_modules/.pnpm/side-channel@1.1.0/node_modules/side-channel/index.js"(exports2, module2) {
    "use strict";
    var $TypeError = require_type();
    var inspect = require_object_inspect();
    var getSideChannelList = require_side_channel_list();
    var getSideChannelMap = require_side_channel_map();
    var getSideChannelWeakMap = require_side_channel_weakmap();
    var makeChannel = getSideChannelWeakMap || getSideChannelMap || getSideChannelList;
    module2.exports = function getSideChannel() {
      var $channelData;
      var channel = {
        assert: function(key) {
          if (!channel.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        },
        "delete": function(key) {
          return !!$channelData && $channelData["delete"](key);
        },
        get: function(key) {
          return $channelData && $channelData.get(key);
        },
        has: function(key) {
          return !!$channelData && $channelData.has(key);
        },
        set: function(key, value) {
          if (!$channelData) {
            $channelData = makeChannel();
          }
          $channelData.set(key, value);
        }
      };
      return channel;
    };
  }
});

// ../node_modules/.pnpm/qs@6.14.0/node_modules/qs/lib/formats.js
var require_formats = __commonJS({
  "../node_modules/.pnpm/qs@6.14.0/node_modules/qs/lib/formats.js"(exports2, module2) {
    "use strict";
    var replace = String.prototype.replace;
    var percentTwenties = /%20/g;
    var Format = {
      RFC1738: "RFC1738",
      RFC3986: "RFC3986"
    };
    module2.exports = {
      "default": Format.RFC3986,
      formatters: {
        RFC1738: function(value) {
          return replace.call(value, percentTwenties, "+");
        },
        RFC3986: function(value) {
          return String(value);
        }
      },
      RFC1738: Format.RFC1738,
      RFC3986: Format.RFC3986
    };
  }
});

// ../node_modules/.pnpm/qs@6.14.0/node_modules/qs/lib/utils.js
var require_utils = __commonJS({
  "../node_modules/.pnpm/qs@6.14.0/node_modules/qs/lib/utils.js"(exports2, module2) {
    "use strict";
    var formats = require_formats();
    var has = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;
    var hexTable = function() {
      var array = [];
      for (var i = 0; i < 256; ++i) {
        array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
      }
      return array;
    }();
    var compactQueue = function compactQueue2(queue) {
      while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray(obj)) {
          var compacted = [];
          for (var j = 0; j < obj.length; ++j) {
            if (typeof obj[j] !== "undefined") {
              compacted.push(obj[j]);
            }
          }
          item.obj[item.prop] = compacted;
        }
      }
    };
    var arrayToObject = function arrayToObject2(source, options) {
      var obj = options && options.plainObjects ? { __proto__: null } : {};
      for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== "undefined") {
          obj[i] = source[i];
        }
      }
      return obj;
    };
    var merge = function merge2(target, source, options) {
      if (!source) {
        return target;
      }
      if (typeof source !== "object" && typeof source !== "function") {
        if (isArray(target)) {
          target.push(source);
        } else if (target && typeof target === "object") {
          if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
            target[source] = true;
          }
        } else {
          return [target, source];
        }
        return target;
      }
      if (!target || typeof target !== "object") {
        return [target].concat(source);
      }
      var mergeTarget = target;
      if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
      }
      if (isArray(target) && isArray(source)) {
        source.forEach(function(item, i) {
          if (has.call(target, i)) {
            var targetItem = target[i];
            if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
              target[i] = merge2(targetItem, item, options);
            } else {
              target.push(item);
            }
          } else {
            target[i] = item;
          }
        });
        return target;
      }
      return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has.call(acc, key)) {
          acc[key] = merge2(acc[key], value, options);
        } else {
          acc[key] = value;
        }
        return acc;
      }, mergeTarget);
    };
    var assign = function assignSingleSource(target, source) {
      return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
      }, target);
    };
    var decode = function(str, defaultDecoder, charset) {
      var strWithoutPlus = str.replace(/\+/g, " ");
      if (charset === "iso-8859-1") {
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
      }
      try {
        return decodeURIComponent(strWithoutPlus);
      } catch (e) {
        return strWithoutPlus;
      }
    };
    var limit = 1024;
    var encode = function encode2(str, defaultEncoder, charset, kind, format) {
      if (str.length === 0) {
        return str;
      }
      var string = str;
      if (typeof str === "symbol") {
        string = Symbol.prototype.toString.call(str);
      } else if (typeof str !== "string") {
        string = String(str);
      }
      if (charset === "iso-8859-1") {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
          return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
        });
      }
      var out = "";
      for (var j = 0; j < string.length; j += limit) {
        var segment = string.length >= limit ? string.slice(j, j + limit) : string;
        var arr = [];
        for (var i = 0; i < segment.length; ++i) {
          var c = segment.charCodeAt(i);
          if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats.RFC1738 && (c === 40 || c === 41)) {
            arr[arr.length] = segment.charAt(i);
            continue;
          }
          if (c < 128) {
            arr[arr.length] = hexTable[c];
            continue;
          }
          if (c < 2048) {
            arr[arr.length] = hexTable[192 | c >> 6] + hexTable[128 | c & 63];
            continue;
          }
          if (c < 55296 || c >= 57344) {
            arr[arr.length] = hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
            continue;
          }
          i += 1;
          c = 65536 + ((c & 1023) << 10 | segment.charCodeAt(i) & 1023);
          arr[arr.length] = hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
        }
        out += arr.join("");
      }
      return out;
    };
    var compact = function compact2(value) {
      var queue = [{ obj: { o: value }, prop: "o" }];
      var refs = [];
      for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
          var key = keys[j];
          var val = obj[key];
          if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
            queue.push({ obj, prop: key });
            refs.push(val);
          }
        }
      }
      compactQueue(queue);
      return value;
    };
    var isRegExp = function isRegExp2(obj) {
      return Object.prototype.toString.call(obj) === "[object RegExp]";
    };
    var isBuffer = function isBuffer2(obj) {
      if (!obj || typeof obj !== "object") {
        return false;
      }
      return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
    };
    var combine = function combine2(a, b) {
      return [].concat(a, b);
    };
    var maybeMap = function maybeMap2(val, fn) {
      if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
          mapped.push(fn(val[i]));
        }
        return mapped;
      }
      return fn(val);
    };
    module2.exports = {
      arrayToObject,
      assign,
      combine,
      compact,
      decode,
      encode,
      isBuffer,
      isRegExp,
      maybeMap,
      merge
    };
  }
});

// ../node_modules/.pnpm/qs@6.14.0/node_modules/qs/lib/stringify.js
var require_stringify = __commonJS({
  "../node_modules/.pnpm/qs@6.14.0/node_modules/qs/lib/stringify.js"(exports2, module2) {
    "use strict";
    var getSideChannel = require_side_channel();
    var utils = require_utils();
    var formats = require_formats();
    var has = Object.prototype.hasOwnProperty;
    var arrayPrefixGenerators = {
      brackets: function brackets(prefix) {
        return prefix + "[]";
      },
      comma: "comma",
      indices: function indices(prefix, key) {
        return prefix + "[" + key + "]";
      },
      repeat: function repeat(prefix) {
        return prefix;
      }
    };
    var isArray = Array.isArray;
    var push = Array.prototype.push;
    var pushToArray = function(arr, valueOrArray) {
      push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
    };
    var toISO = Date.prototype.toISOString;
    var defaultFormat = formats["default"];
    var defaults = {
      addQueryPrefix: false,
      allowDots: false,
      allowEmptyArrays: false,
      arrayFormat: "indices",
      charset: "utf-8",
      charsetSentinel: false,
      commaRoundTrip: false,
      delimiter: "&",
      encode: true,
      encodeDotInKeys: false,
      encoder: utils.encode,
      encodeValuesOnly: false,
      filter: void 0,
      format: defaultFormat,
      formatter: formats.formatters[defaultFormat],
      // deprecated
      indices: false,
      serializeDate: function serializeDate(date) {
        return toISO.call(date);
      },
      skipNulls: false,
      strictNullHandling: false
    };
    var isNonNullishPrimitive = function isNonNullishPrimitive2(v) {
      return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
    };
    var sentinel = {};
    var stringify2 = function stringify3(object, prefix, generateArrayPrefix, commaRoundTrip, allowEmptyArrays, strictNullHandling, skipNulls, encodeDotInKeys, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
      var obj = object;
      var tmpSc = sideChannel;
      var step = 0;
      var findFlag = false;
      while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== "undefined") {
          if (pos === step) {
            throw new RangeError("Cyclic object value");
          } else {
            findFlag = true;
          }
        }
        if (typeof tmpSc.get(sentinel) === "undefined") {
          step = 0;
        }
      }
      if (typeof filter === "function") {
        obj = filter(prefix, obj);
      } else if (obj instanceof Date) {
        obj = serializeDate(obj);
      } else if (generateArrayPrefix === "comma" && isArray(obj)) {
        obj = utils.maybeMap(obj, function(value2) {
          if (value2 instanceof Date) {
            return serializeDate(value2);
          }
          return value2;
        });
      }
      if (obj === null) {
        if (strictNullHandling) {
          return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, "key", format) : prefix;
        }
        obj = "";
      }
      if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
          var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key", format);
          return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format))];
        }
        return [formatter(prefix) + "=" + formatter(String(obj))];
      }
      var values = [];
      if (typeof obj === "undefined") {
        return values;
      }
      var objKeys;
      if (generateArrayPrefix === "comma" && isArray(obj)) {
        if (encodeValuesOnly && encoder) {
          obj = utils.maybeMap(obj, encoder);
        }
        objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
      } else if (isArray(filter)) {
        objKeys = filter;
      } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
      }
      var encodedPrefix = encodeDotInKeys ? String(prefix).replace(/\./g, "%2E") : String(prefix);
      var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? encodedPrefix + "[]" : encodedPrefix;
      if (allowEmptyArrays && isArray(obj) && obj.length === 0) {
        return adjustedPrefix + "[]";
      }
      for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === "object" && key && typeof key.value !== "undefined" ? key.value : obj[key];
        if (skipNulls && value === null) {
          continue;
        }
        var encodedKey = allowDots && encodeDotInKeys ? String(key).replace(/\./g, "%2E") : String(key);
        var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, encodedKey) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + encodedKey : "[" + encodedKey + "]");
        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify3(
          value,
          keyPrefix,
          generateArrayPrefix,
          commaRoundTrip,
          allowEmptyArrays,
          strictNullHandling,
          skipNulls,
          encodeDotInKeys,
          generateArrayPrefix === "comma" && encodeValuesOnly && isArray(obj) ? null : encoder,
          filter,
          sort,
          allowDots,
          serializeDate,
          format,
          formatter,
          encodeValuesOnly,
          charset,
          valueSideChannel
        ));
      }
      return values;
    };
    var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
      }
      if (typeof opts.encodeDotInKeys !== "undefined" && typeof opts.encodeDotInKeys !== "boolean") {
        throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
      }
      if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
        throw new TypeError("Encoder has to be a function.");
      }
      var charset = opts.charset || defaults.charset;
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      var format = formats["default"];
      if (typeof opts.format !== "undefined") {
        if (!has.call(formats.formatters, opts.format)) {
          throw new TypeError("Unknown format option provided.");
        }
        format = opts.format;
      }
      var formatter = formats.formatters[format];
      var filter = defaults.filter;
      if (typeof opts.filter === "function" || isArray(opts.filter)) {
        filter = opts.filter;
      }
      var arrayFormat;
      if (opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
      } else if ("indices" in opts) {
        arrayFormat = opts.indices ? "indices" : "repeat";
      } else {
        arrayFormat = defaults.arrayFormat;
      }
      if ("commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
        throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
      }
      var allowDots = typeof opts.allowDots === "undefined" ? opts.encodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
      return {
        addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        arrayFormat,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        commaRoundTrip: !!opts.commaRoundTrip,
        delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
        encodeDotInKeys: typeof opts.encodeDotInKeys === "boolean" ? opts.encodeDotInKeys : defaults.encodeDotInKeys,
        encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter,
        format,
        formatter,
        serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === "function" ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
      };
    };
    module2.exports = function(object, opts) {
      var obj = object;
      var options = normalizeStringifyOptions(opts);
      var objKeys;
      var filter;
      if (typeof options.filter === "function") {
        filter = options.filter;
        obj = filter("", obj);
      } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
      }
      var keys = [];
      if (typeof obj !== "object" || obj === null) {
        return "";
      }
      var generateArrayPrefix = arrayPrefixGenerators[options.arrayFormat];
      var commaRoundTrip = generateArrayPrefix === "comma" && options.commaRoundTrip;
      if (!objKeys) {
        objKeys = Object.keys(obj);
      }
      if (options.sort) {
        objKeys.sort(options.sort);
      }
      var sideChannel = getSideChannel();
      for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];
        var value = obj[key];
        if (options.skipNulls && value === null) {
          continue;
        }
        pushToArray(keys, stringify2(
          value,
          key,
          generateArrayPrefix,
          commaRoundTrip,
          options.allowEmptyArrays,
          options.strictNullHandling,
          options.skipNulls,
          options.encodeDotInKeys,
          options.encode ? options.encoder : null,
          options.filter,
          options.sort,
          options.allowDots,
          options.serializeDate,
          options.format,
          options.formatter,
          options.encodeValuesOnly,
          options.charset,
          sideChannel
        ));
      }
      var joined = keys.join(options.delimiter);
      var prefix = options.addQueryPrefix === true ? "?" : "";
      if (options.charsetSentinel) {
        if (options.charset === "iso-8859-1") {
          prefix += "utf8=%26%2310003%3B&";
        } else {
          prefix += "utf8=%E2%9C%93&";
        }
      }
      return joined.length > 0 ? prefix + joined : "";
    };
  }
});

// ../node_modules/.pnpm/qs@6.14.0/node_modules/qs/lib/parse.js
var require_parse = __commonJS({
  "../node_modules/.pnpm/qs@6.14.0/node_modules/qs/lib/parse.js"(exports2, module2) {
    "use strict";
    var utils = require_utils();
    var has = Object.prototype.hasOwnProperty;
    var isArray = Array.isArray;
    var defaults = {
      allowDots: false,
      allowEmptyArrays: false,
      allowPrototypes: false,
      allowSparse: false,
      arrayLimit: 20,
      charset: "utf-8",
      charsetSentinel: false,
      comma: false,
      decodeDotInKeys: false,
      decoder: utils.decode,
      delimiter: "&",
      depth: 5,
      duplicates: "combine",
      ignoreQueryPrefix: false,
      interpretNumericEntities: false,
      parameterLimit: 1e3,
      parseArrays: true,
      plainObjects: false,
      strictDepth: false,
      strictNullHandling: false,
      throwOnLimitExceeded: false
    };
    var interpretNumericEntities = function(str) {
      return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
      });
    };
    var parseArrayValue = function(val, options, currentArrayLength) {
      if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
        return val.split(",");
      }
      if (options.throwOnLimitExceeded && currentArrayLength >= options.arrayLimit) {
        throw new RangeError("Array limit exceeded. Only " + options.arrayLimit + " element" + (options.arrayLimit === 1 ? "" : "s") + " allowed in an array.");
      }
      return val;
    };
    var isoSentinel = "utf8=%26%2310003%3B";
    var charsetSentinel = "utf8=%E2%9C%93";
    var parseValues = function parseQueryStringValues(str, options) {
      var obj = { __proto__: null };
      var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
      cleanStr = cleanStr.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
      var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
      var parts = cleanStr.split(
        options.delimiter,
        options.throwOnLimitExceeded ? limit + 1 : limit
      );
      if (options.throwOnLimitExceeded && parts.length > limit) {
        throw new RangeError("Parameter limit exceeded. Only " + limit + " parameter" + (limit === 1 ? "" : "s") + " allowed.");
      }
      var skipIndex = -1;
      var i;
      var charset = options.charset;
      if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
          if (parts[i].indexOf("utf8=") === 0) {
            if (parts[i] === charsetSentinel) {
              charset = "utf-8";
            } else if (parts[i] === isoSentinel) {
              charset = "iso-8859-1";
            }
            skipIndex = i;
            i = parts.length;
          }
        }
      }
      for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
          continue;
        }
        var part = parts[i];
        var bracketEqualsPos = part.indexOf("]=");
        var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
        var key;
        var val;
        if (pos === -1) {
          key = options.decoder(part, defaults.decoder, charset, "key");
          val = options.strictNullHandling ? null : "";
        } else {
          key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
          val = utils.maybeMap(
            parseArrayValue(
              part.slice(pos + 1),
              options,
              isArray(obj[key]) ? obj[key].length : 0
            ),
            function(encodedVal) {
              return options.decoder(encodedVal, defaults.decoder, charset, "value");
            }
          );
        }
        if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
          val = interpretNumericEntities(String(val));
        }
        if (part.indexOf("[]=") > -1) {
          val = isArray(val) ? [val] : val;
        }
        var existing = has.call(obj, key);
        if (existing && options.duplicates === "combine") {
          obj[key] = utils.combine(obj[key], val);
        } else if (!existing || options.duplicates === "last") {
          obj[key] = val;
        }
      }
      return obj;
    };
    var parseObject = function(chain, val, options, valuesParsed) {
      var currentArrayLength = 0;
      if (chain.length > 0 && chain[chain.length - 1] === "[]") {
        var parentKey = chain.slice(0, -1).join("");
        currentArrayLength = Array.isArray(val) && val[parentKey] ? val[parentKey].length : 0;
      }
      var leaf = valuesParsed ? val : parseArrayValue(val, options, currentArrayLength);
      for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];
        if (root === "[]" && options.parseArrays) {
          obj = options.allowEmptyArrays && (leaf === "" || options.strictNullHandling && leaf === null) ? [] : utils.combine([], leaf);
        } else {
          obj = options.plainObjects ? { __proto__: null } : {};
          var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
          var decodedRoot = options.decodeDotInKeys ? cleanRoot.replace(/%2E/g, ".") : cleanRoot;
          var index = parseInt(decodedRoot, 10);
          if (!options.parseArrays && decodedRoot === "") {
            obj = { 0: leaf };
          } else if (!isNaN(index) && root !== decodedRoot && String(index) === decodedRoot && index >= 0 && (options.parseArrays && index <= options.arrayLimit)) {
            obj = [];
            obj[index] = leaf;
          } else if (decodedRoot !== "__proto__") {
            obj[decodedRoot] = leaf;
          }
        }
        leaf = obj;
      }
      return leaf;
    };
    var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
      if (!givenKey) {
        return;
      }
      var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
      var brackets = /(\[[^[\]]*])/;
      var child = /(\[[^[\]]*])/g;
      var segment = options.depth > 0 && brackets.exec(key);
      var parent = segment ? key.slice(0, segment.index) : key;
      var keys = [];
      if (parent) {
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        keys.push(parent);
      }
      var i = 0;
      while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        keys.push(segment[1]);
      }
      if (segment) {
        if (options.strictDepth === true) {
          throw new RangeError("Input depth exceeded depth option of " + options.depth + " and strictDepth is true");
        }
        keys.push("[" + key.slice(segment.index) + "]");
      }
      return parseObject(keys, val, options, valuesParsed);
    };
    var normalizeParseOptions = function normalizeParseOptions2(opts) {
      if (!opts) {
        return defaults;
      }
      if (typeof opts.allowEmptyArrays !== "undefined" && typeof opts.allowEmptyArrays !== "boolean") {
        throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
      }
      if (typeof opts.decodeDotInKeys !== "undefined" && typeof opts.decodeDotInKeys !== "boolean") {
        throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
      }
      if (opts.decoder !== null && typeof opts.decoder !== "undefined" && typeof opts.decoder !== "function") {
        throw new TypeError("Decoder has to be a function.");
      }
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      if (typeof opts.throwOnLimitExceeded !== "undefined" && typeof opts.throwOnLimitExceeded !== "boolean") {
        throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
      }
      var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
      var duplicates = typeof opts.duplicates === "undefined" ? defaults.duplicates : opts.duplicates;
      if (duplicates !== "combine" && duplicates !== "first" && duplicates !== "last") {
        throw new TypeError("The duplicates option must be either combine, first, or last");
      }
      var allowDots = typeof opts.allowDots === "undefined" ? opts.decodeDotInKeys === true ? true : defaults.allowDots : !!opts.allowDots;
      return {
        allowDots,
        allowEmptyArrays: typeof opts.allowEmptyArrays === "boolean" ? !!opts.allowEmptyArrays : defaults.allowEmptyArrays,
        allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
        decodeDotInKeys: typeof opts.decodeDotInKeys === "boolean" ? opts.decodeDotInKeys : defaults.decodeDotInKeys,
        decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
        duplicates,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
        strictDepth: typeof opts.strictDepth === "boolean" ? !!opts.strictDepth : defaults.strictDepth,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling,
        throwOnLimitExceeded: typeof opts.throwOnLimitExceeded === "boolean" ? opts.throwOnLimitExceeded : false
      };
    };
    module2.exports = function(str, opts) {
      var options = normalizeParseOptions(opts);
      if (str === "" || str === null || typeof str === "undefined") {
        return options.plainObjects ? { __proto__: null } : {};
      }
      var tempObj = typeof str === "string" ? parseValues(str, options) : str;
      var obj = options.plainObjects ? { __proto__: null } : {};
      var keys = Object.keys(tempObj);
      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
        obj = utils.merge(obj, newObj, options);
      }
      if (options.allowSparse === true) {
        return obj;
      }
      return utils.compact(obj);
    };
  }
});

// ../node_modules/.pnpm/qs@6.14.0/node_modules/qs/lib/index.js
var require_lib = __commonJS({
  "../node_modules/.pnpm/qs@6.14.0/node_modules/qs/lib/index.js"(exports2, module2) {
    "use strict";
    var stringify2 = require_stringify();
    var parse = require_parse();
    var formats = require_formats();
    module2.exports = {
      formats,
      parse,
      stringify: stringify2
    };
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
var import_dotenv2 = __toESM(require("dotenv"));
var import_express29 = __toESM(require("express"));
var import_cors = __toESM(require("cors"));
var import_compression = __toESM(require("compression"));
var import_mongoose19 = __toESM(require("mongoose"));
var import_passport2 = __toESM(require("passport"));
var import_jsonwebtoken3 = __toESM(require("jsonwebtoken"));
var import_path3 = __toESM(require("path"));

// src/config/passport.ts
var import_passport = __toESM(require("passport"));
var import_passport_github2 = require("passport-github2");
var import_passport_qq = require("passport-qq");

// src/models/User.ts
var import_mongoose = __toESM(require("mongoose"));
var UserSchema = new import_mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  passwordHash: { type: String, required: false, select: false },
  // 默认不查询密码
  githubId: { type: String },
  qqId: { type: String },
  avatarUrl: { type: String },
  role: { type: String, enum: ["student", "teacher", "admin"], default: "student" }
}, {
  timestamps: true
});
UserSchema.index({ email: 1 }, { unique: true });
UserSchema.index({ githubId: 1 }, { unique: true, sparse: true });
UserSchema.index({ qqId: 1 }, { unique: true, sparse: true });
var User = import_mongoose.default.models.User || (0, import_mongoose.model)("User", UserSchema);
var User_default = User;

// src/config/passport.ts
var backendUrl = process.env.BACKEND_URL || "http://localhost:5001";
if (backendUrl.endsWith("/")) {
  backendUrl = backendUrl.slice(0, -1);
}
if (process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET) {
  import_passport.default.use(new import_passport_github2.Strategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      // 这里拼接后就不会有双斜杠了
      callbackURL: `${backendUrl}/api/auth/github/callback`,
      scope: ["user:email"]
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const user = await User_default.findOne({ githubId: profile.id });
        if (user) {
          return done(null, user);
        }
        const newUser = new User_default({
          githubId: profile.id,
          username: profile.username,
          email: profile.emails?.[0]?.value || `github_${profile.id}@no-email.com`,
          avatarUrl: profile.photos?.[0]?.value
        });
        await newUser.save();
        done(null, newUser);
      } catch (error) {
        done(error);
      }
    }
  ));
} else {
  console.warn("[passport] GitHubStrategy skipped: missing GITHUB_CLIENT_ID / GITHUB_CLIENT_SECRET");
}
if (process.env.QQ_APP_ID && process.env.QQ_APP_KEY) {
  import_passport.default.use(new import_passport_qq.Strategy(
    {
      clientID: process.env.QQ_APP_ID,
      clientSecret: process.env.QQ_APP_KEY,
      // 这里拼接后也不会有双斜杠了
      callbackURL: `${backendUrl}/api/auth/qq/callback`
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const openid = profile.id;
        const user = await User_default.findOne({ qqId: openid });
        if (user) {
          return done(null, user);
        }
        const newUser = new User_default({
          qqId: openid,
          username: profile.nickname,
          email: `${openid}@qq.com`,
          avatarUrl: profile._json.figureurl_qq_2 || profile._json.figureurl_qq_1
        });
        await newUser.save();
        done(null, newUser);
      } catch (error) {
        done(error);
      }
    }
  ));
} else {
  console.warn("[passport] QQStrategy skipped: missing QQ_APP_ID / QQ_APP_KEY");
}
import_passport.default.serializeUser((user, done) => {
  done(null, user.id);
});
import_passport.default.deserializeUser(async (id, done) => {
  try {
    const user = await User_default.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

// src/index.ts
init_KnowledgePoint();

// src/routes/auth.ts
var import_express = require("express");
var import_bcryptjs = __toESM(require("bcryptjs"));
var import_jsonwebtoken = __toESM(require("jsonwebtoken"));

// src/middleware/logger.ts
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var Logger = class {
  constructor() {
    this.maxFileSize = 10 * 1024 * 1024;
    // 10MB
    this.maxFiles = 5;
    const defaultDir = import_path.default.join(process.cwd(), "logs");
    const fallbackDir = "/tmp/logs";
    try {
      import_fs.default.mkdirSync(defaultDir, { recursive: true });
      this.logDir = defaultDir;
    } catch (_) {
      console.warn("[logger] Cannot write to", defaultDir, "\u2013 falling back to", fallbackDir);
      this.logDir = fallbackDir;
      try {
        import_fs.default.mkdirSync(this.logDir, { recursive: true });
      } catch (err) {
        console.error("[logger] Failed to create log directory", this.logDir, err);
        this.logDir = "";
      }
    }
  }
  /**
   * 确保日志目录存在
   */
  ensureLogDir() {
    if (!import_fs.default.existsSync(this.logDir)) {
      import_fs.default.mkdirSync(this.logDir, { recursive: true });
    }
  }
  /**
   * 获取日志文件路径
   */
  getLogFilePath(level) {
    const date = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    return import_path.default.join(this.logDir, `${level.toLowerCase()}-${date}.log`);
  }
  /**
   * 写入日志
   */
  writeLog(entry) {
    if (!this.logDir) {
      return;
    }
    const filePath = this.getLogFilePath(entry.level);
    const logLine = JSON.stringify(entry) + "\n";
    import_fs.default.appendFile(filePath, logLine, (err) => {
      if (err) {
        console.error("Failed to write log:", err);
      }
    });
    if (process.env.NODE_ENV !== "production") {
      const colorCode = this.getColorCode(entry.level);
      console.log(
        `${colorCode}[${entry.level}] ${entry.timestamp}\x1B[0m`,
        entry.message,
        entry.metadata || ""
      );
    }
    this.rotateLogsIfNeeded(filePath);
  }
  /**
   * 获取颜色代码（终端）
   */
  getColorCode(level) {
    const colors = {
      ["INFO" /* INFO */]: "\x1B[36m",
      // Cyan
      ["WARN" /* WARN */]: "\x1B[33m",
      // Yellow
      ["ERROR" /* ERROR */]: "\x1B[31m",
      // Red
      ["DEBUG" /* DEBUG */]: "\x1B[35m"
      // Magenta
    };
    return colors[level] || "\x1B[0m";
  }
  /**
   * 轮转日志文件
   */
  rotateLogsIfNeeded(filePath) {
    try {
      const stats = import_fs.default.statSync(filePath);
      if (stats.size > this.maxFileSize) {
        const timestamp = Date.now();
        const newPath = filePath.replace(".log", `-${timestamp}.log`);
        import_fs.default.renameSync(filePath, newPath);
        this.cleanOldLogs();
      }
    } catch (err) {
    }
  }
  /**
   * 清理旧日志
   */
  cleanOldLogs() {
    try {
      const files = import_fs.default.readdirSync(this.logDir);
      const logFiles = files.filter((f) => f.endsWith(".log")).map((f) => ({
        name: f,
        path: import_path.default.join(this.logDir, f),
        time: import_fs.default.statSync(import_path.default.join(this.logDir, f)).mtime.getTime()
      })).sort((a, b) => b.time - a.time);
      if (logFiles.length > this.maxFiles) {
        logFiles.slice(this.maxFiles).forEach((file) => {
          import_fs.default.unlinkSync(file.path);
        });
      }
    } catch (err) {
      console.error("Failed to clean old logs:", err);
    }
  }
  /**
   * 记录信息日志
   */
  info(message, metadata) {
    this.writeLog({
      level: "INFO" /* INFO */,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      message,
      metadata
    });
  }
  /**
   * 记录警告日志
   */
  warn(message, metadata) {
    this.writeLog({
      level: "WARN" /* WARN */,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      message,
      metadata
    });
  }
  /**
   * 记录错误日志
   */
  error(message, error, metadata) {
    this.writeLog({
      level: "ERROR" /* ERROR */,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      message,
      metadata,
      stack: error?.stack
    });
  }
  /**
   * 记录调试日志
   */
  debug(message, metadata) {
    if (process.env.NODE_ENV !== "production") {
      this.writeLog({
        level: "DEBUG" /* DEBUG */,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        message,
        metadata
      });
    }
  }
};
var logger = new Logger();
var requestLogger = (req, res, next) => {
  const startTime = Date.now();
  logger.info(`${req.method} ${req.path}`, {
    ip: req.ip,
    userAgent: req.headers["user-agent"],
    userId: req.user?.id
  });
  res.on("finish", () => {
    const duration = Date.now() - startTime;
    const msg = `${req.method} ${req.path} - ${res.statusCode}`;
    const meta = { duration: `${duration}ms`, statusCode: res.statusCode };
    if (res.statusCode >= 400) {
      logger.error(msg, void 0, meta);
    } else {
      logger.info(msg, meta);
    }
  });
  next();
};

// src/routes/auth.ts
var import_dotenv = __toESM(require("dotenv"));
import_dotenv.default.config();
var router = (0, import_express.Router)();
var JWT_SECRET = process.env.JWT_SECRET || "a-very-secret-key";
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "\u8BF7\u586B\u5199\u6240\u6709\u5FC5\u586B\u9879" });
    }
    if (password.length < 6) {
      return res.status(400).json({ message: "\u5BC6\u7801\u81F3\u5C11\u9700\u89816\u4F4D" });
    }
    const existingUser = await User_default.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "\u8BE5\u90AE\u7BB1\u5DF2\u88AB\u6CE8\u518C" });
    }
    const salt = await import_bcryptjs.default.genSalt(8);
    const passwordHash = await import_bcryptjs.default.hash(password, salt);
    const newUser = new User_default({ username, email, passwordHash });
    await newUser.save();
    const token = import_jsonwebtoken.default.sign({ userId: newUser._id }, JWT_SECRET, { expiresIn: "7d" });
    logger.info("\u7528\u6237\u6CE8\u518C\u6210\u529F", {
      userId: newUser._id,
      username: newUser.username,
      email: newUser.email
    });
    res.status(201).json({
      token,
      user: {
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
        avatarUrl: newUser.avatarUrl
      }
    });
  } catch (error) {
    logger.error("\u7528\u6237\u6CE8\u518C\u5931\u8D25", error, {
      username: req.body.username,
      email: req.body.email,
      errorMessage: error.message
    });
    res.status(500).json({ message: "\u670D\u52A1\u5668\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5" });
  }
});
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(`\u{1F511} [\u540E\u7AEF /login] \u6536\u5230\u767B\u5F55\u8BF7\u6C42: ${email}`);
    if (!email || !password) {
      console.log(`  \u274C \u7F3A\u5C11\u5FC5\u586B\u9879`);
      return res.status(400).json({ message: "\u8BF7\u8F93\u5165\u90AE\u7BB1\u548C\u5BC6\u7801" });
    }
    const user = await User_default.findOne({ email }).select("+passwordHash").lean();
    if (!user) {
      console.log(`  \u274C \u7528\u6237\u4E0D\u5B58\u5728: ${email}`);
      return res.status(400).json({ message: "\u90AE\u7BB1\u6216\u5BC6\u7801\u9519\u8BEF" });
    }
    if (!user.passwordHash) {
      console.log(`  \u274C \u7528\u6237\u672A\u8BBE\u7F6E\u5BC6\u7801: ${email}`);
      return res.status(400).json({ message: "\u8BE5\u8D26\u6237\u672A\u8BBE\u7F6E\u5BC6\u7801\uFF0C\u8BF7\u4F7F\u7528\u7B2C\u4E09\u65B9\u767B\u5F55" });
    }
    const isMatch = await import_bcryptjs.default.compare(password, user.passwordHash);
    if (!isMatch) {
      console.log(`  \u274C \u5BC6\u7801\u9519\u8BEF: ${email}`);
      return res.status(400).json({ message: "\u90AE\u7BB1\u6216\u5BC6\u7801\u9519\u8BEF" });
    }
    const token = import_jsonwebtoken.default.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "7d" });
    console.log(`  \u2705 \u767B\u5F55\u6210\u529F\uFF0C\u751F\u6210 Token:`, token.substring(0, 20) + "...");
    console.log(`  \u{1F464} \u7528\u6237\u4FE1\u606F:`, {
      _id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      avatarUrl: user.avatarUrl
    });
    logger.info("\u7528\u6237\u767B\u5F55\u6210\u529F", {
      userId: user._id,
      username: user.username,
      email: user.email,
      ip: req.ip
    });
    res.json({
      token,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        avatarUrl: user.avatarUrl
      }
    });
  } catch (error) {
    console.log(`  \u274C \u767B\u5F55\u5F02\u5E38:`, error.message);
    logger.error("\u7528\u6237\u767B\u5F55\u5931\u8D25", error, {
      email: req.body.email,
      ip: req.ip,
      errorMessage: error.message,
      stack: error.stack
    });
    res.status(500).json({ message: "\u670D\u52A1\u5668\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5" });
  }
});
router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "\u8BF7\u8F93\u5165\u90AE\u7BB1\u5730\u5740" });
    }
    const user = await User_default.findOne({ email });
    if (!user) {
      return res.json({ message: "\u5982\u679C\u8BE5\u90AE\u7BB1\u5B58\u5728\uFF0C\u6211\u4EEC\u5DF2\u53D1\u9001\u91CD\u7F6E\u94FE\u63A5" });
    }
    const resetToken = import_jsonwebtoken.default.sign(
      { userId: user._id, type: "password-reset" },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    logger.info("\u5BC6\u7801\u91CD\u7F6E\u8BF7\u6C42", {
      userId: user._id,
      email: user.email,
      resetToken,
      resetUrl: `${process.env.FRONTEND_URL || "http://localhost:5173"}/reset-password?token=${resetToken}`
    });
    const response = { message: "\u5982\u679C\u8BE5\u90AE\u7BB1\u5B58\u5728\uFF0C\u6211\u4EEC\u5DF2\u53D1\u9001\u91CD\u7F6E\u94FE\u63A5" };
    if (process.env.NODE_ENV === "development") {
      response.resetToken = resetToken;
      response.resetUrl = `${process.env.FRONTEND_URL || "http://localhost:5173"}/reset-password?token=${resetToken}`;
    }
    res.json(response);
  } catch (error) {
    logger.error("\u5FD8\u8BB0\u5BC6\u7801\u8BF7\u6C42\u5931\u8D25", error, {
      email: req.body.email,
      errorMessage: error.message
    });
    res.status(500).json({ message: "\u670D\u52A1\u5668\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5" });
  }
});
router.post("/reset-password", async (req, res) => {
  try {
    const { token, newPassword } = req.body;
    if (!token || !newPassword) {
      return res.status(400).json({ message: "\u8BF7\u63D0\u4F9B\u91CD\u7F6Etoken\u548C\u65B0\u5BC6\u7801" });
    }
    if (newPassword.length < 6) {
      return res.status(400).json({ message: "\u5BC6\u7801\u81F3\u5C11\u9700\u89816\u4F4D" });
    }
    let decoded;
    try {
      decoded = import_jsonwebtoken.default.verify(token, JWT_SECRET);
    } catch (error) {
      return res.status(400).json({ message: "\u91CD\u7F6E\u94FE\u63A5\u65E0\u6548\u6216\u5DF2\u8FC7\u671F" });
    }
    if (decoded.type !== "password-reset") {
      return res.status(400).json({ message: "\u65E0\u6548\u7684\u91CD\u7F6Etoken" });
    }
    const user = await User_default.findById(decoded.userId);
    if (!user) {
      return res.status(404).json({ message: "\u7528\u6237\u4E0D\u5B58\u5728" });
    }
    const salt = await import_bcryptjs.default.genSalt(8);
    const passwordHash = await import_bcryptjs.default.hash(newPassword, salt);
    user.passwordHash = passwordHash;
    await user.save();
    logger.info("\u5BC6\u7801\u91CD\u7F6E\u6210\u529F", {
      userId: user._id,
      email: user.email
    });
    res.json({ message: "\u5BC6\u7801\u91CD\u7F6E\u6210\u529F" });
  } catch (error) {
    logger.error("\u5BC6\u7801\u91CD\u7F6E\u5931\u8D25", error, {
      errorMessage: error.message
    });
    res.status(500).json({ message: "\u670D\u52A1\u5668\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5" });
  }
});
var auth_default = router;

// src/routes/progress.ts
var import_express2 = require("express");

// src/models/UserProgress.ts
var import_mongoose3 = __toESM(require("mongoose"));
var UserProgressSchema = new import_mongoose3.Schema({
  userId: { type: import_mongoose3.Schema.Types.ObjectId, ref: "User", required: true },
  pointId: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["not_started", "in_progress", "completed"],
    default: "not_started"
  },
  quizAttempts: { type: Number, default: 0 },
  bestScore: { type: Number, default: 0, min: 0, max: 100 },
  timeSpent: { type: Number, default: 0 },
  lastAttemptAt: { type: Date },
  completedAt: { type: Date }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});
UserProgressSchema.virtual("score").get(function() {
  return this.bestScore;
});
UserProgressSchema.index({ userId: 1, pointId: 1 }, { unique: true });
var UserProgress = import_mongoose3.default.models.UserProgress || (0, import_mongoose3.model)("UserProgress", UserProgressSchema);
var UserProgress_default = UserProgress;

// src/middleware/auth.ts
var import_jsonwebtoken2 = __toESM(require("jsonwebtoken"));
var JWT_SECRET2 = process.env.JWT_SECRET || "a-very-secret-key";
var authMiddleware = async (req, res, next) => {
  console.log(`\u{1F510} [\u540E\u7AEF authMiddleware] \u6536\u5230\u8BF7\u6C42: ${req.method} ${req.path}`);
  const authHeader = req.header("Authorization");
  console.log(`  \u{1F4E4} Authorization header:`, authHeader ? `${authHeader.substring(0, 20)}...` : "\u65E0");
  const token = authHeader?.replace("Bearer ", "");
  if (!token) {
    console.log(`  \u274C \u7F3A\u5C11 Token\uFF0C\u8FD4\u56DE 401`);
    res.status(401).json({ message: "\u672A\u6388\u6743\u7684\u8BBF\u95EE\uFF0C\u7F3A\u5C11Token" });
    return;
  }
  try {
    console.log(`  \u{1F50D} \u5F00\u59CB\u9A8C\u8BC1 Token...`);
    const decoded = import_jsonwebtoken2.default.verify(token, JWT_SECRET2);
    console.log(`  \u2705 Token \u89E3\u7801\u6210\u529F\uFF0CuserId: ${decoded.userId}`);
    const user = await User_default.findById(decoded.userId).select("-passwordHash");
    if (!user) {
      console.log(`  \u274C \u7528\u6237\u4E0D\u5B58\u5728: ${decoded.userId}`);
      res.status(401).json({ message: "\u7528\u6237\u4E0D\u5B58\u5728" });
      return;
    }
    console.log(`  \u2705 \u7528\u6237\u9A8C\u8BC1\u6210\u529F: ${user.username} (${user.email})`);
    req.user = user;
    next();
  } catch (error) {
    console.log(`  \u274C Token \u9A8C\u8BC1\u5931\u8D25:`, error.message);
    res.status(401).json({ message: "\u65E0\u6548\u7684Token" });
  }
};

// src/routes/progress.ts
var router2 = (0, import_express2.Router)();
router2.get("/", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?._id;
    const progress = await UserProgress_default.find({ userId });
    res.json(progress);
  } catch (error) {
    res.status(500).json({ message: "\u83B7\u53D6\u5B66\u4E60\u8FDB\u5EA6\u5931\u8D25" });
  }
});
router2.post("/update", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?._id;
    const { pointId, status } = req.body;
    if (!pointId || !status) {
      return res.status(400).json({ message: "\u7F3A\u5C11 pointId \u6216 status" });
    }
    const updateData = { status };
    if (status === "completed") {
      updateData.completedAt = /* @__PURE__ */ new Date();
    }
    const updatedProgress = await UserProgress_default.findOneAndUpdate(
      { userId, pointId },
      updateData,
      { new: true, upsert: true }
    );
    res.json(updatedProgress);
  } catch (error) {
    res.status(500).json({ message: "\u66F4\u65B0\u8FDB\u5EA6\u5931\u8D25" });
  }
});
var progress_default = router2;

// src/routes/chat.ts
var import_express3 = require("express");

// src/models/Chat.ts
var import_mongoose4 = __toESM(require("mongoose"));
var MessageSchema = new import_mongoose4.Schema({
  role: { type: String, required: true, enum: ["system", "user", "assistant"] },
  content: { type: String, required: true }
}, { _id: false });
var ChatSchema = new import_mongoose4.Schema({
  userId: { type: import_mongoose4.Schema.Types.ObjectId, ref: "User", required: true, index: true },
  title: { type: String, required: true, default: "\u65B0\u7684\u5BF9\u8BDD" },
  messages: [MessageSchema]
}, {
  timestamps: true
});
var Chat = import_mongoose4.default.models.Chat || (0, import_mongoose4.model)("Chat", ChatSchema);
var Chat_default = Chat;

// src/routes/chat.ts
var router3 = (0, import_express3.Router)();
router3.get("/", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?._id;
    const chats = await Chat_default.find({ userId }).sort({ updatedAt: -1 });
    res.json(chats);
  } catch (error) {
    res.status(500).json({ message: "\u83B7\u53D6\u804A\u5929\u8BB0\u5F55\u5931\u8D25" });
  }
});
router3.post("/new", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?._id;
    const { messages } = req.body;
    const userMessage = messages.find((m) => m.role === "user");
    const title = userMessage ? userMessage.content.substring(0, 30) : "\u65B0\u7684\u5BF9\u8BDD";
    const newChat = new Chat_default({
      userId,
      title,
      messages
    });
    await newChat.save();
    res.status(201).json(newChat);
  } catch (error) {
    res.status(500).json({ message: "\u521B\u5EFA\u65B0\u5BF9\u8BDD\u5931\u8D25" });
  }
});
router3.put("/:id", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?._id;
    const chatId = req.params.id;
    const { messages } = req.body;
    const updatedChat = await Chat_default.findOneAndUpdate(
      { _id: chatId, userId },
      { "messages": messages },
      { new: true }
    );
    if (!updatedChat) {
      return res.status(404).json({ message: "\u5BF9\u8BDD\u672A\u627E\u5230" });
    }
    res.json(updatedChat);
  } catch (error) {
    res.status(500).json({ message: "\u66F4\u65B0\u5BF9\u8BDD\u5931\u8D25" });
  }
});
router3.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?._id;
    const chatId = req.params.id;
    const deletedChat = await Chat_default.findOneAndDelete({ _id: chatId, userId });
    if (!deletedChat) {
      return res.status(404).json({ message: "\u5BF9\u8BDD\u672A\u627E\u5230\u6216\u65E0\u6743\u9650\u5220\u9664" });
    }
    res.json({ message: "\u5BF9\u8BDD\u5220\u9664\u6210\u529F", chatId });
  } catch (error) {
    res.status(500).json({ message: "\u5220\u9664\u5BF9\u8BDD\u5931\u8D25" });
  }
});
var chat_default = router3;

// src/routes/ai.ts
var import_express4 = require("express");

// src/services/ai-models/base.ts
var AIModelProvider = class {
  constructor(apiKey, baseURL, modelName) {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
    this.modelName = modelName;
  }
  /**
   * 获取模型名称
   */
  getModelName() {
    return this.modelName;
  }
};

// src/services/ai-models/kimi.ts
var import_axios = __toESM(require("axios"));
var KimiProvider = class extends AIModelProvider {
  constructor(apiKey) {
    super(
      apiKey,
      "https://api.moonshot.cn/v1/chat/completions",
      "moonshot-v1-8k"
    );
  }
  async chatCompletion(messages, options = {}) {
    const { temperature = 0.7, maxTokens = 2e3 } = options;
    try {
      const response = await import_axios.default.post(
        this.baseURL,
        {
          model: this.modelName,
          messages,
          temperature,
          max_tokens: maxTokens
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.apiKey}`
          },
          timeout: 6e4
        }
      );
      const choice = response.data.choices[0];
      return {
        content: choice?.message?.content || "",
        model: this.modelName,
        usage: response.data.usage ? {
          promptTokens: response.data.usage.prompt_tokens,
          completionTokens: response.data.usage.completion_tokens,
          totalTokens: response.data.usage.total_tokens
        } : void 0
      };
    } catch (error) {
      console.error("[Kimi] API \u8C03\u7528\u5931\u8D25:", error.message);
      throw new Error(`Kimi API \u9519\u8BEF: ${error.response?.data?.error?.message || error.message}`);
    }
  }
  async *streamChatCompletion(messages, options = {}) {
    const { temperature = 0.7, maxTokens = 2e3 } = options;
    try {
      const response = await import_axios.default.post(
        this.baseURL,
        {
          model: this.modelName,
          messages,
          temperature,
          max_tokens: maxTokens,
          stream: true
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.apiKey}`
          },
          timeout: 6e4,
          responseType: "stream"
        }
      );
      for await (const chunk of response.data) {
        const lines = chunk.toString().split("\n").filter((line) => line.trim() !== "");
        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6);
            if (data === "[DONE]") {
              yield { content: "", done: true };
              return;
            }
            try {
              const parsed = JSON.parse(data);
              const content = parsed.choices[0]?.delta?.content || "";
              if (content) {
                yield { content, done: false };
              }
            } catch (e) {
            }
          }
        }
      }
    } catch (error) {
      console.error("[Kimi] \u6D41\u5F0F\u8C03\u7528\u5931\u8D25:", error.message);
      throw new Error(`Kimi \u6D41\u5F0F\u9519\u8BEF: ${error.message}`);
    }
  }
  async healthCheck() {
    try {
      await this.chatCompletion([{ role: "user", content: "Hi" }], { maxTokens: 10 });
      return true;
    } catch {
      return false;
    }
  }
};

// src/services/ai-models/qianwen.ts
var import_axios2 = __toESM(require("axios"));
var QianwenProvider = class extends AIModelProvider {
  constructor(apiKey) {
    super(
      apiKey,
      "https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation",
      "qwen-turbo"
    );
  }
  async chatCompletion(messages, options = {}) {
    const { temperature = 0.7, maxTokens = 2e3 } = options;
    try {
      const response = await import_axios2.default.post(
        this.baseURL,
        {
          model: this.modelName,
          input: {
            messages: messages.map((msg) => ({
              role: msg.role,
              content: msg.content
            }))
          },
          parameters: {
            temperature,
            max_tokens: maxTokens,
            result_format: "message"
          }
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.apiKey}`
          },
          timeout: 6e4
        }
      );
      const output = response.data.output;
      return {
        content: output?.choices?.[0]?.message?.content || "",
        model: this.modelName,
        usage: response.data.usage ? {
          promptTokens: response.data.usage.input_tokens,
          completionTokens: response.data.usage.output_tokens,
          totalTokens: response.data.usage.total_tokens
        } : void 0
      };
    } catch (error) {
      console.error("[Qianwen] API \u8C03\u7528\u5931\u8D25:", error.message);
      throw new Error(`\u901A\u4E49\u5343\u95EE API \u9519\u8BEF: ${error.response?.data?.message || error.message}`);
    }
  }
  async *streamChatCompletion(messages, options = {}) {
    const { temperature = 0.7, maxTokens = 2e3 } = options;
    try {
      const response = await import_axios2.default.post(
        this.baseURL,
        {
          model: this.modelName,
          input: {
            messages: messages.map((msg) => ({
              role: msg.role,
              content: msg.content
            }))
          },
          parameters: {
            temperature,
            max_tokens: maxTokens,
            result_format: "message",
            incremental_output: true
          }
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.apiKey}`,
            "X-DashScope-SSE": "enable"
          },
          timeout: 6e4,
          responseType: "stream"
        }
      );
      for await (const chunk of response.data) {
        const lines = chunk.toString().split("\n").filter((line) => line.trim() !== "");
        for (const line of lines) {
          if (line.startsWith("data:")) {
            const data = line.slice(5).trim();
            try {
              const parsed = JSON.parse(data);
              const content = parsed.output?.choices?.[0]?.message?.content || "";
              const finished = parsed.output?.finish_reason === "stop";
              if (content) {
                yield { content, done: false };
              }
              if (finished) {
                yield { content: "", done: true };
                return;
              }
            } catch (e) {
            }
          }
        }
      }
    } catch (error) {
      console.error("[Qianwen] \u6D41\u5F0F\u8C03\u7528\u5931\u8D25:", error.message);
      throw new Error(`\u901A\u4E49\u5343\u95EE\u6D41\u5F0F\u9519\u8BEF: ${error.message}`);
    }
  }
  async healthCheck() {
    try {
      await this.chatCompletion([{ role: "user", content: "Hi" }], { maxTokens: 10 });
      return true;
    } catch {
      return false;
    }
  }
};

// src/services/ai-models/ernie.ts
var import_axios3 = __toESM(require("axios"));
var ErnieProvider = class extends AIModelProvider {
  constructor(apiKey, secretKey) {
    super(
      apiKey,
      "https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat/completions",
      "ERNIE-Bot-turbo"
    );
    this.accessToken = "";
    this.tokenExpireTime = 0;
    this.secretKey = secretKey;
  }
  /**
   * 获取访问令牌
   */
  async getAccessToken() {
    const now = Date.now();
    if (this.accessToken && this.tokenExpireTime > now) {
      return this.accessToken;
    }
    try {
      const response = await import_axios3.default.post(
        "https://aip.baidubce.com/oauth/2.0/token",
        null,
        {
          params: {
            grant_type: "client_credentials",
            client_id: this.apiKey,
            client_secret: this.secretKey
          }
        }
      );
      this.accessToken = response.data.access_token;
      this.tokenExpireTime = now + (response.data.expires_in - 60) * 1e3;
      return this.accessToken;
    } catch (error) {
      console.error("[Ernie] \u83B7\u53D6\u8BBF\u95EE\u4EE4\u724C\u5931\u8D25:", error.message);
      throw new Error(`\u6587\u5FC3\u4E00\u8A00\u8BA4\u8BC1\u5931\u8D25: ${error.message}`);
    }
  }
  async chatCompletion(messages, options = {}) {
    const { temperature = 0.7, maxTokens = 2e3 } = options;
    const accessToken = await this.getAccessToken();
    try {
      const response = await import_axios3.default.post(
        `${this.baseURL}?access_token=${accessToken}`,
        {
          messages: messages.map((msg) => ({
            role: msg.role === "system" ? "user" : msg.role,
            // 文心一言不支持 system 角色
            content: msg.content
          })),
          temperature,
          max_output_tokens: maxTokens
        },
        {
          headers: {
            "Content-Type": "application/json"
          },
          timeout: 6e4
        }
      );
      return {
        content: response.data.result || "",
        model: this.modelName,
        usage: response.data.usage ? {
          promptTokens: response.data.usage.prompt_tokens,
          completionTokens: response.data.usage.completion_tokens,
          totalTokens: response.data.usage.total_tokens
        } : void 0
      };
    } catch (error) {
      console.error("[Ernie] API \u8C03\u7528\u5931\u8D25:", error.message);
      throw new Error(`\u6587\u5FC3\u4E00\u8A00 API \u9519\u8BEF: ${error.response?.data?.error_msg || error.message}`);
    }
  }
  async *streamChatCompletion(messages, options = {}) {
    const { temperature = 0.7, maxTokens = 2e3 } = options;
    const accessToken = await this.getAccessToken();
    try {
      const response = await import_axios3.default.post(
        `${this.baseURL}?access_token=${accessToken}`,
        {
          messages: messages.map((msg) => ({
            role: msg.role === "system" ? "user" : msg.role,
            content: msg.content
          })),
          temperature,
          max_output_tokens: maxTokens,
          stream: true
        },
        {
          headers: {
            "Content-Type": "application/json"
          },
          timeout: 6e4,
          responseType: "stream"
        }
      );
      for await (const chunk of response.data) {
        const lines = chunk.toString().split("\n").filter((line) => line.trim() !== "");
        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6);
            try {
              const parsed = JSON.parse(data);
              const content = parsed.result || "";
              const isEnd = parsed.is_end;
              if (content) {
                yield { content, done: false };
              }
              if (isEnd) {
                yield { content: "", done: true };
                return;
              }
            } catch (e) {
            }
          }
        }
      }
    } catch (error) {
      console.error("[Ernie] \u6D41\u5F0F\u8C03\u7528\u5931\u8D25:", error.message);
      throw new Error(`\u6587\u5FC3\u4E00\u8A00\u6D41\u5F0F\u9519\u8BEF: ${error.message}`);
    }
  }
  async healthCheck() {
    try {
      await this.chatCompletion([{ role: "user", content: "Hi" }], { maxTokens: 10 });
      return true;
    } catch {
      return false;
    }
  }
};

// src/services/ai-models/zhipu.ts
var import_axios4 = __toESM(require("axios"));
var ZhipuProvider = class extends AIModelProvider {
  constructor(apiKey) {
    super(
      apiKey,
      "https://open.bigmodel.cn/api/paas/v4/chat/completions",
      "glm-4-flash"
    );
  }
  async chatCompletion(messages, options = {}) {
    const { temperature = 0.7, maxTokens = 2e3 } = options;
    try {
      const response = await import_axios4.default.post(
        this.baseURL,
        {
          model: this.modelName,
          messages,
          temperature,
          max_tokens: maxTokens
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.apiKey}`
          },
          timeout: 6e4
        }
      );
      const choice = response.data.choices[0];
      return {
        content: choice?.message?.content || "",
        model: this.modelName,
        usage: response.data.usage ? {
          promptTokens: response.data.usage.prompt_tokens,
          completionTokens: response.data.usage.completion_tokens,
          totalTokens: response.data.usage.total_tokens
        } : void 0
      };
    } catch (error) {
      console.error("[Zhipu] API \u8C03\u7528\u5931\u8D25:", error.message);
      throw new Error(`\u667A\u8C31 API \u9519\u8BEF: ${error.response?.data?.error?.message || error.message}`);
    }
  }
  async *streamChatCompletion(messages, options = {}) {
    const { temperature = 0.7, maxTokens = 2e3 } = options;
    try {
      const response = await import_axios4.default.post(
        this.baseURL,
        {
          model: this.modelName,
          messages,
          temperature,
          max_tokens: maxTokens,
          stream: true
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.apiKey}`
          },
          timeout: 6e4,
          responseType: "stream"
        }
      );
      for await (const chunk of response.data) {
        const lines = chunk.toString().split("\n").filter((line) => line.trim() !== "");
        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6);
            if (data === "[DONE]") {
              yield { content: "", done: true };
              return;
            }
            try {
              const parsed = JSON.parse(data);
              const content = parsed.choices[0]?.delta?.content || "";
              if (content) {
                yield { content, done: false };
              }
            } catch (e) {
            }
          }
        }
      }
    } catch (error) {
      console.error("[Zhipu] \u6D41\u5F0F\u8C03\u7528\u5931\u8D25:", error.message);
      throw new Error(`\u667A\u8C31\u6D41\u5F0F\u9519\u8BEF: ${error.message}`);
    }
  }
  async healthCheck() {
    try {
      await this.chatCompletion([{ role: "user", content: "Hi" }], { maxTokens: 10 });
      return true;
    } catch {
      return false;
    }
  }
};

// src/services/ai-models/spark.ts
var import_axios5 = __toESM(require("axios"));
var SparkProvider = class extends AIModelProvider {
  constructor(appId, apiKey, apiSecret, modelName = "generalv3") {
    super(apiKey, "https://spark-api-open.xf-yun.com/v1/chat/completions", modelName);
    this.appId = appId;
    this.apiSecret = apiSecret;
  }
  async chatCompletion(messages, options = {}) {
    const { temperature = 0.7, maxTokens = 2e3 } = options;
    const modelsToTry = [this.modelName, "generalv3", "lite"];
    const uniqueModels = Array.from(new Set(modelsToTry));
    let lastError = null;
    for (const model8 of uniqueModels) {
      try {
        const response = await import_axios5.default.post(
          this.baseURL,
          {
            model: model8,
            messages,
            temperature,
            max_tokens: maxTokens
          },
          {
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${this.apiKey}:${this.apiSecret}`
            },
            timeout: 6e4
          }
        );
        if (response.data && response.data.code !== void 0 && response.data.code !== 0) {
          throw new Error(`Spark API \u9519\u8BEF\u4EE3\u7801 ${response.data.code}: ${response.data.message || "\u6A21\u578B\u672A\u6388\u6743"}`);
        }
        const choice = response.data.choices?.[0];
        return {
          content: choice?.message?.content || "",
          model: model8,
          usage: response.data.usage ? {
            promptTokens: response.data.usage.prompt_tokens,
            completionTokens: response.data.usage.completion_tokens,
            totalTokens: response.data.usage.total_tokens
          } : void 0
        };
      } catch (error) {
        lastError = error;
        console.warn(`[Spark] \u6A21\u578B ${model8} \u8C03\u7528\u5931\u8D25: ${error.message}\uFF0C\u5C1D\u8BD5\u4E0B\u4E00\u4E2A\u6A21\u578B...`);
      }
    }
    console.error("[Spark] \u6240\u6709\u6A21\u578B\u5747\u5C1D\u8BD5\u5931\u8D25");
    throw new Error(`Spark API \u9519\u8BEF: ${lastError?.response?.data?.error?.message || lastError?.message || "\u5168\u90E8\u6A21\u578B\u8C03\u7528\u5931\u8D25"}`);
  }
  async *streamChatCompletion(messages, options = {}) {
    const { temperature = 0.7, maxTokens = 2e3 } = options;
    try {
      const response = await import_axios5.default.post(
        this.baseURL,
        {
          model: this.modelName,
          messages,
          temperature,
          max_tokens: maxTokens,
          stream: true
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.apiKey}:${this.apiSecret}`
          },
          timeout: 6e4,
          responseType: "stream"
        }
      );
      for await (const chunk of response.data) {
        const lines = chunk.toString().split("\n").filter((line) => line.trim() !== "");
        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6);
            if (data === "[DONE]") {
              yield { content: "", done: true };
              return;
            }
            try {
              const parsed = JSON.parse(data);
              const content = parsed.choices?.[0]?.delta?.content || "";
              if (content) {
                yield { content, done: false };
              }
            } catch (e) {
            }
          }
        }
      }
    } catch (error) {
      console.error("[Spark] \u6D41\u5F0F\u8C03\u7528\u5931\u8D25:", error.message);
      throw new Error(`Spark \u6D41\u5F0F\u9519\u8BEF: ${error.message}`);
    }
  }
  async healthCheck() {
    try {
      await this.chatCompletion([{ role: "user", content: "Hi" }], { maxTokens: 10 });
      return true;
    } catch {
      return false;
    }
  }
};

// src/services/ai.ts
var AIService = class {
  // 1小时缓存
  constructor(config) {
    this.providers = /* @__PURE__ */ new Map();
    this.cache = /* @__PURE__ */ new Map();
    this.CACHE_TTL = 36e5;
    this.config = config;
    this.initializeProviders();
  }
  /**
   * 初始化所有可用的 AI 模型提供商
   */
  initializeProviders() {
    const sparkAppId = process.env.SPARK_APP_ID;
    const sparkApiKey = process.env.SPARK_API_KEY;
    const sparkApiSecret = process.env.SPARK_API_SECRET;
    if (sparkAppId && sparkApiKey && sparkApiSecret) {
      this.providers.set("spark", new SparkProvider(sparkAppId, sparkApiKey, sparkApiSecret));
      console.log("[AI Service] \u79D1\u5927\u8BAF\u98DE\u661F\u706B\u6A21\u578B\u5DF2\u52A0\u8F7D");
    }
    const kimiKey = process.env.KIMI_API_KEY;
    if (kimiKey) {
      this.providers.set("kimi", new KimiProvider(kimiKey));
      console.log("[AI Service] Kimi \u6A21\u578B\u5DF2\u52A0\u8F7D");
    }
    const qianwenKey = process.env.QIANWEN_API_KEY;
    if (qianwenKey) {
      this.providers.set("qianwen", new QianwenProvider(qianwenKey));
      console.log("[AI Service] \u901A\u4E49\u5343\u95EE\u6A21\u578B\u5DF2\u52A0\u8F7D");
    }
    const ernieKey = process.env.ERNIE_API_KEY;
    const ernieSecret = process.env.ERNIE_SECRET_KEY;
    if (ernieKey && ernieSecret) {
      this.providers.set("ernie", new ErnieProvider(ernieKey, ernieSecret));
      console.log("[AI Service] \u6587\u5FC3\u4E00\u8A00\u6A21\u578B\u5DF2\u52A0\u8F7D");
    }
    const zhipuKey = process.env.ZHIPU_API_KEY;
    if (zhipuKey) {
      this.providers.set("zhipu", new ZhipuProvider(zhipuKey));
      console.log("[AI Service] \u667A\u8C31 AI \u6A21\u578B\u5DF2\u52A0\u8F7D");
    }
    console.log(`[AI Service] \u5171\u52A0\u8F7D ${this.providers.size} \u4E2A AI \u6A21\u578B`);
  }
  /**
   * 生成缓存键
   */
  getCacheKey(messages, options) {
    return JSON.stringify({ messages, options });
  }
  /**
   * 从缓存获取
   */
  getFromCache(key) {
    if (!this.config.enableCache) return null;
    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < this.CACHE_TTL) {
      console.log("[AI Service] \u4F7F\u7528\u7F13\u5B58\u7ED3\u679C");
      return cached.content;
    }
    return null;
  }
  /**
   * 保存到缓存
   */
  saveToCache(key, content) {
    if (!this.config.enableCache) return;
    this.cache.set(key, {
      content,
      timestamp: Date.now()
    });
    if (this.cache.size > 100) {
      const firstKey = this.cache.keys().next().value;
      if (firstKey) {
        this.cache.delete(firstKey);
      }
    }
  }
  /**
   * 获取聊天补全（带智能降级）
   */
  async getChatCompletion(messages, options = {}) {
    const cacheKey = this.getCacheKey(messages, options);
    const cached = this.getFromCache(cacheKey);
    if (cached) return cached;
    const modelsToTry = [
      this.config.primaryModel,
      ...this.config.fallbackModels
    ];
    let lastError = null;
    for (const modelType of modelsToTry) {
      const provider = this.providers.get(modelType);
      if (!provider) continue;
      try {
        console.log(`[AI Service] \u5C1D\u8BD5\u4F7F\u7528 ${modelType} \u6A21\u578B...`);
        const response = await provider.chatCompletion(messages, options);
        this.saveToCache(cacheKey, response.content);
        console.log(`[AI Service] ${modelType} \u6A21\u578B\u8C03\u7528\u6210\u529F`);
        return response.content;
      } catch (error) {
        console.error(`[AI Service] ${modelType} \u6A21\u578B\u5931\u8D25:`, error.message);
        lastError = error;
      }
    }
    throw new Error(
      `\u6240\u6709 AI \u6A21\u578B\u5747\u4E0D\u53EF\u7528\u3002\u6700\u540E\u9519\u8BEF: ${lastError?.message || "\u672A\u77E5\u9519\u8BEF"}`
    );
  }
  /**
   * 获取流式聊天补全
   */
  async *streamChatCompletion(messages, options = {}) {
    const modelsToTry = [
      this.config.primaryModel,
      ...this.config.fallbackModels
    ];
    let lastError = null;
    for (const modelType of modelsToTry) {
      const provider = this.providers.get(modelType);
      if (!provider) continue;
      try {
        console.log(`[AI Service] \u6D41\u5F0F\u8C03\u7528 ${modelType} \u6A21\u578B...`);
        for await (const chunk of provider.streamChatCompletion(messages, options)) {
          yield chunk;
        }
        return;
      } catch (error) {
        console.error(`[AI Service] ${modelType} \u6D41\u5F0F\u8C03\u7528\u5931\u8D25:`, error.message);
        lastError = error;
      }
    }
    throw new Error(
      `\u6240\u6709 AI \u6A21\u578B\u6D41\u5F0F\u8C03\u7528\u5747\u5931\u8D25\u3002\u6700\u540E\u9519\u8BEF: ${lastError?.message || "\u672A\u77E5\u9519\u8BEF"}`
    );
  }
  /**
   * 清除缓存
   */
  clearCache() {
    this.cache.clear();
    console.log("[AI Service] \u7F13\u5B58\u5DF2\u6E05\u9664");
  }
  /**
   * 健康检查
   */
  async healthCheck() {
    const results = {};
    for (const [modelType, provider] of this.providers.entries()) {
      try {
        results[modelType] = await provider.healthCheck();
      } catch {
        results[modelType] = false;
      }
    }
    return results;
  }
};
var aiService = new AIService({
  primaryModel: process.env.PRIMARY_AI_MODEL || "spark",
  fallbackModels: ["spark", "kimi", "qianwen", "zhipu", "ernie"].filter(
    (m) => m !== (process.env.PRIMARY_AI_MODEL || "spark")
  ),
  enableCache: process.env.ENABLE_AI_CACHE === "true"
});
async function getChatCompletion(messages, options = {}) {
  return aiService.getChatCompletion(messages, options);
}
async function* streamChatCompletion(messages, options = {}) {
  for await (const chunk of aiService.streamChatCompletion(messages, options)) {
    yield chunk;
  }
}
async function chat(userMessage, conversationHistory = [], context) {
  const systemPrompt = context ? `\u4F60\u662F\u667A\u5B66\u4F34\uFF08IntelliBuddy\uFF09\u7684 AI \u52A9\u624B\uFF0C\u4E13\u95E8\u5E2E\u52A9\u5B66\u751F\u5B66\u4E60\u548C\u7406\u89E3\u5404\u79CD\u77E5\u8BC6\u3002\u4F60\u7684\u56DE\u7B54\u5E94\u8BE5\u4E13\u4E1A\u3001\u53CB\u597D\u3001\u5BCC\u6709\u8010\u5FC3\u3002

\u5F53\u524D\u5B66\u4E60\u4E0A\u4E0B\u6587\uFF1A
${context}

\u8BF7\u57FA\u4E8E\u4EE5\u4E0A\u4E0A\u4E0B\u6587\u56DE\u7B54\u5B66\u751F\u7684\u95EE\u9898\uFF0C\u63D0\u4F9B\u7CBE\u51C6\u3001\u76F8\u5173\u7684\u5B66\u4E60\u6307\u5BFC\u3002` : "\u4F60\u662F\u667A\u5B66\u4F34\uFF08IntelliBuddy\uFF09\u7684 AI \u52A9\u624B\uFF0C\u4E13\u95E8\u5E2E\u52A9\u5B66\u751F\u5B66\u4E60\u548C\u7406\u89E3\u5404\u79CD\u77E5\u8BC6\u3002\u4F60\u7684\u56DE\u7B54\u5E94\u8BE5\u4E13\u4E1A\u3001\u53CB\u597D\u3001\u5BCC\u6709\u8010\u5FC3\u3002";
  const messages = [
    {
      role: "system",
      content: systemPrompt
    },
    ...conversationHistory,
    {
      role: "user",
      content: userMessage
    }
  ];
  return await getChatCompletion(messages);
}
async function generateLearningReport(userName, studyStats) {
  const prompt = `\u4F60\u662F\u4E00\u4F4D\u4E13\u4E1A\u7684\u5B66\u4E60\u987E\u95EE\u3002\u8BF7\u4E3A\u5B66\u751F\u751F\u6210\u4E00\u4EFD\u4E2A\u6027\u5316\u7684\u5B66\u4E60\u62A5\u544A\u3002

**\u5B66\u751F**: ${userName}

**\u5B66\u4E60\u6570\u636E**:
- \u603B\u5B66\u4E60\u65F6\u957F: ${Math.floor(studyStats.totalTime / 3600)} \u5C0F\u65F6 ${Math.floor(studyStats.totalTime % 3600 / 60)} \u5206\u949F
- \u5DF2\u5B8C\u6210\u77E5\u8BC6\u70B9: ${studyStats.completedPoints} / ${studyStats.totalPoints}
- \u8584\u5F31\u9886\u57DF: ${studyStats.weakAreas.join("\u3001")}
- \u64C5\u957F\u9886\u57DF: ${studyStats.strongAreas.join("\u3001")}
- \u8FD1\u671F\u5B66\u4E60\u8FDB\u5C55: ${studyStats.recentProgress.join("\u3001")}

\u8BF7\u751F\u6210\u4E00\u4EFD\u5305\u542B\u4EE5\u4E0B\u5185\u5BB9\u7684\u5B66\u4E60\u62A5\u544A\uFF08\u4F7F\u7528 Markdown \u683C\u5F0F\uFF09\uFF1A

1. **\u5B66\u4E60\u603B\u7ED3**\uFF1A\u5BF9\u6574\u4F53\u5B66\u4E60\u60C5\u51B5\u7684\u8BC4\u4EF7
2. **\u4F18\u52BF\u5206\u6790**\uFF1A\u8868\u626C\u5B66\u751F\u7684\u5F3A\u9879\u548C\u8FDB\u6B65
3. **\u6539\u8FDB\u5EFA\u8BAE**\uFF1A\u9488\u5BF9\u8584\u5F31\u9886\u57DF\u7684\u5177\u4F53\u5B66\u4E60\u5EFA\u8BAE
4. **\u4E0B\u5468\u76EE\u6807**\uFF1A\u63A8\u8350\u7684\u5B66\u4E60\u76EE\u6807\u548C\u8BA1\u5212
5. **\u6FC0\u52B1\u5BC4\u8BED**\uFF1A\u7ED9\u5B66\u751F\u7684\u9F13\u52B1\u548C\u671F\u671B

\u8BED\u6C14\u8981\u6E29\u548C\u3001\u79EF\u6781\u3001\u5BCC\u6709\u9F13\u52B1\u6027\u3002`;
  const messages = [
    {
      role: "system",
      content: "\u4F60\u662F\u4E00\u4F4D\u6E29\u548C\u3001\u4E13\u4E1A\u7684\u5B66\u4E60\u987E\u95EE\uFF0C\u64C5\u957F\u5206\u6790\u5B66\u4E60\u6570\u636E\u5E76\u7ED9\u51FA\u5EFA\u8BBE\u6027\u7684\u53CD\u9988\u3002"
    },
    {
      role: "user",
      content: prompt
    }
  ];
  return await getChatCompletion(messages, { maxTokens: 2e3 });
}
async function checkAIHealth() {
  return aiService.healthCheck();
}

// src/routes/ai.ts
var router4 = (0, import_express4.Router)();
router4.post("/chat", authMiddleware, async (req, res) => {
  try {
    const { messages, context } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({
        success: false,
        message: "\u7F3A\u5C11\u5FC5\u8981\u53C2\u6570: messages"
      });
    }
    console.log(`[AI Chat] \u7528\u6237 ${req.user?._id} \u53D1\u8D77\u804A\u5929\u8BF7\u6C42`);
    if (messages.length === 1 && messages[0].role === "user") {
      const response2 = await chat(messages[0].content, [], context);
      return res.json({
        success: true,
        data: {
          role: "assistant",
          content: response2
        }
      });
    }
    const response = await getChatCompletion(messages);
    res.json({
      success: true,
      data: {
        role: "assistant",
        content: response
      }
    });
  } catch (error) {
    console.error("[AI Chat] \u9519\u8BEF:", error.message);
    res.status(500).json({
      success: false,
      message: "\u8C03\u7528 AI \u670D\u52A1\u65F6\u51FA\u9519",
      error: error.message
    });
  }
});
router4.post("/chat/stream", authMiddleware, async (req, res) => {
  try {
    const { messages, context } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({
        success: false,
        message: "\u7F3A\u5C11\u5FC5\u8981\u53C2\u6570: messages"
      });
    }
    console.log(`[AI Chat Stream] \u7528\u6237 ${req.user?._id} \u53D1\u8D77\u6D41\u5F0F\u804A\u5929\u8BF7\u6C42`);
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    let messagesToSend = messages;
    if (context) {
      messagesToSend = [
        {
          role: "system",
          content: `\u5F53\u524D\u5B66\u4E60\u4E0A\u4E0B\u6587\uFF1A
${context}

\u8BF7\u57FA\u4E8E\u4EE5\u4E0A\u4E0A\u4E0B\u6587\u56DE\u7B54\u5B66\u751F\u7684\u95EE\u9898\u3002`
        },
        ...messages
      ];
    }
    try {
      for await (const chunk of streamChatCompletion(messagesToSend)) {
        if (chunk.done) {
          res.write("data: [DONE]\n\n");
          break;
        }
        res.write(`data: ${JSON.stringify({ content: chunk.content })}

`);
      }
      res.end();
    } catch (streamError) {
      console.error("[AI Chat Stream] \u6D41\u5F0F\u9519\u8BEF:", streamError.message);
      res.write(`data: ${JSON.stringify({ error: streamError.message })}

`);
      res.end();
    }
  } catch (error) {
    console.error("[AI Chat Stream] \u9519\u8BEF:", error.message);
    res.status(500).json({
      success: false,
      message: "\u6D41\u5F0F\u8C03\u7528 AI \u670D\u52A1\u65F6\u51FA\u9519",
      error: error.message
    });
  }
});
router4.get("/health", async (req, res) => {
  try {
    console.log("[AI Health] \u6267\u884C\u5065\u5EB7\u68C0\u67E5...");
    const healthStatus = await checkAIHealth();
    const availableModels = Object.entries(healthStatus).filter(([_, healthy]) => healthy).map(([model8]) => model8);
    res.json({
      success: true,
      data: {
        status: availableModels.length > 0 ? "healthy" : "unhealthy",
        models: healthStatus,
        availableModels,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }
    });
  } catch (error) {
    console.error("[AI Health] \u9519\u8BEF:", error.message);
    res.status(500).json({
      success: false,
      message: "\u5065\u5EB7\u68C0\u67E5\u5931\u8D25",
      error: error.message
    });
  }
});
var ai_default = router4;

// src/routes/quiz.ts
var import_express5 = require("express");
init_KnowledgePoint();
var router5 = (0, import_express5.Router)();
router5.get("/:pointId", authMiddleware, async (req, res) => {
  try {
    const { pointId } = req.params;
    const knowledgePoint = await KnowledgePoint_default.findOne({ id: pointId });
    if (!knowledgePoint) {
      return res.status(404).json({ message: "\u77E5\u8BC6\u70B9\u4E0D\u5B58\u5728" });
    }
    const quizWithoutAnswers = knowledgePoint.quiz.map((q) => ({
      question: q.question,
      type: q.type,
      options: q.options
    }));
    res.json({
      pointId: knowledgePoint.id,
      title: knowledgePoint.title,
      quiz: quizWithoutAnswers
    });
  } catch (error) {
    console.error("\u83B7\u53D6\u6D4B\u9A8C\u9898\u5931\u8D25:", error);
    res.status(500).json({ message: "\u83B7\u53D6\u6D4B\u9A8C\u9898\u65F6\u53D1\u751F\u9519\u8BEF" });
  }
});
router5.post("/submit", authMiddleware, async (req, res) => {
  try {
    const { pointId, answers } = req.body;
    const user = req.user;
    const userId = user._id;
    if (!userId) {
      return res.status(401).json({ message: "\u672A\u6388\u6743" });
    }
    const knowledgePoint = await KnowledgePoint_default.findOne({ id: pointId });
    if (!knowledgePoint) {
      return res.status(404).json({ message: "\u77E5\u8BC6\u70B9\u4E0D\u5B58\u5728" });
    }
    let correctCount = 0;
    const results = knowledgePoint.quiz.map((question, index) => {
      const userAnswer = answers[index];
      const isCorrect = JSON.stringify(userAnswer) === JSON.stringify(question.correctAnswer);
      if (isCorrect) correctCount++;
      return {
        questionIndex: index,
        isCorrect,
        correctAnswer: question.correctAnswer,
        explanation: question.explanation
      };
    });
    const score = Math.round(correctCount / knowledgePoint.quiz.length * 100);
    const passed = score >= 60;
    const updateData = {
      $inc: { quizAttempts: 1 },
      $max: { bestScore: score },
      $set: {
        status: passed ? "completed" : "in_progress",
        lastAttemptAt: /* @__PURE__ */ new Date()
      }
    };
    if (passed) {
      updateData.$setOnInsert = { completedAt: /* @__PURE__ */ new Date() };
    }
    const progress = await UserProgress_default.findOneAndUpdate(
      { userId, pointId },
      updateData,
      { upsert: true, new: true }
    );
    res.json({
      score,
      passed,
      correctCount,
      totalQuestions: knowledgePoint.quiz.length,
      results,
      progress: {
        status: progress.status,
        attempts: progress.quizAttempts,
        bestScore: progress.bestScore
      }
    });
  } catch (error) {
    console.error("\u63D0\u4EA4\u6D4B\u9A8C\u5931\u8D25:", error);
    res.status(500).json({ message: "\u63D0\u4EA4\u6D4B\u9A8C\u65F6\u53D1\u751F\u9519\u8BEF" });
  }
});
var quiz_default = router5;

// src/routes/assessment.ts
var import_express6 = require("express");

// src/models/Assessment.ts
var import_mongoose5 = __toESM(require("mongoose"));
var SkillProfileSchema = new import_mongoose5.Schema({
  subject: { type: String, required: true },
  level: { type: Number, required: true, min: 0, max: 100 }
}, { _id: false });
var WeaknessSchema = new import_mongoose5.Schema({
  subject: { type: String, required: true },
  reason: { type: String, required: true },
  recommendedPoints: [{ type: String }]
}, { _id: false });
var AssessmentSchema = new import_mongoose5.Schema({
  userId: { type: import_mongoose5.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
  completedAt: { type: Date, default: Date.now },
  totalQuestions: { type: Number, required: true },
  correctAnswers: { type: Number, required: true },
  score: { type: Number, required: true, min: 0, max: 100 },
  skillProfile: { type: [SkillProfileSchema], required: true },
  weaknesses: { type: [WeaknessSchema], default: [] },
  recommendedPath: [{ type: String }]
}, {
  timestamps: true
});
var Assessment = import_mongoose5.default.models.Assessment || (0, import_mongoose5.model)("Assessment", AssessmentSchema);
var Assessment_default = Assessment;

// src/routes/assessment.ts
init_KnowledgePoint();
var router6 = (0, import_express6.Router)();
router6.post("/start", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?._id;
    const existingAssessment = await Assessment_default.findOne({ userId });
    if (existingAssessment) {
      return res.status(400).json({
        message: "\u60A8\u5DF2\u7ECF\u5B8C\u6210\u4E86\u521D\u59CB\u8BC4\u4F30",
        assessment: existingAssessment
      });
    }
    const subjects = ["\u7F16\u7A0B\u57FA\u7840", "\u6570\u636E\u7ED3\u6784", "\u7B97\u6CD5", "\u8BA1\u7B97\u673A\u7F51\u7EDC", "\u64CD\u4F5C\u7CFB\u7EDF"];
    const assessmentQuestions = [];
    for (const subject of subjects) {
      const points = await KnowledgePoint_default.find({
        subject,
        "quiz.0": { $exists: true }
        // 确保有测验题
      }).limit(3);
      for (const point of points) {
        const selectedQuestions = point.quiz.slice(0, 2).map((q) => ({
          pointId: point.id,
          subject: point.subject,
          difficulty: point.difficulty,
          question: q.question,
          type: q.type,
          options: q.options
          // 不发送正确答案
        }));
        assessmentQuestions.push(...selectedQuestions);
      }
    }
    assessmentQuestions.sort(() => Math.random() - 0.5);
    const finalQuestions = assessmentQuestions.slice(0, 15);
    res.json({
      totalQuestions: finalQuestions.length,
      questions: finalQuestions
    });
  } catch (error) {
    console.error("\u5F00\u59CB\u8BC4\u4F30\u5931\u8D25:", error);
    res.status(500).json({ message: "\u5F00\u59CB\u8BC4\u4F30\u65F6\u53D1\u751F\u9519\u8BEF" });
  }
});
router6.post("/submit", authMiddleware, async (req, res) => {
  try {
    const { answers } = req.body;
    const userId = req.user?._id;
    if (!userId) {
      return res.status(401).json({ message: "\u672A\u6388\u6743" });
    }
    const subjectScores = {};
    let totalCorrect = 0;
    for (const answer of answers) {
      const point = await KnowledgePoint_default.findOne({ id: answer.pointId });
      if (!point) continue;
      const question = point.quiz[answer.questionIndex];
      if (!question) continue;
      const isCorrect = JSON.stringify(answer.answer) === JSON.stringify(question.correctAnswer);
      if (isCorrect) totalCorrect++;
      if (!subjectScores[point.subject]) {
        subjectScores[point.subject] = { correct: 0, total: 0 };
      }
      subjectScores[point.subject].total++;
      if (isCorrect) subjectScores[point.subject].correct++;
    }
    const skillProfile = Object.entries(subjectScores).map(([subject, scores]) => ({
      subject,
      level: Math.round(scores.correct / scores.total * 100)
    }));
    const weaknesses = skillProfile.filter((skill) => skill.level < 60).map((skill) => {
      const recommendedPoints = [];
      return {
        subject: skill.subject,
        reason: `\u5728${skill.subject}\u9886\u57DF\u7684\u6D4B\u8BC4\u4E2D\u5F97\u5206\u7387\u4E3A${skill.level}%\uFF0C\u5EFA\u8BAE\u52A0\u5F3A\u5B66\u4E60\u3002`,
        recommendedPoints
      };
    });
    const score = Math.round(totalCorrect / answers.length * 100);
    const assessment = new Assessment_default({
      userId,
      totalQuestions: answers.length,
      correctAnswers: totalCorrect,
      score,
      skillProfile,
      weaknesses,
      recommendedPath: []
      // 推荐路径将由learning-path API生成
    });
    await assessment.save();
    res.json({
      score,
      correctAnswers: totalCorrect,
      totalQuestions: answers.length,
      skillProfile,
      weaknesses,
      message: "\u8BC4\u4F30\u5B8C\u6210\uFF01\u6211\u4EEC\u5DF2\u4E3A\u60A8\u751F\u6210\u4E13\u5C5E\u5B66\u4E60\u8DEF\u5F84\u3002"
    });
  } catch (error) {
    console.error("\u63D0\u4EA4\u8BC4\u4F30\u5931\u8D25:", error);
    res.status(500).json({ message: "\u63D0\u4EA4\u8BC4\u4F30\u65F6\u53D1\u751F\u9519\u8BEF" });
  }
});
router6.get("/result", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?._id;
    const assessment = await Assessment_default.findOne({ userId });
    if (!assessment) {
      return res.status(404).json({ message: "\u672A\u627E\u5230\u8BC4\u4F30\u7ED3\u679C\uFF0C\u8BF7\u5148\u5B8C\u6210\u521D\u59CB\u8BC4\u4F30" });
    }
    res.json(assessment);
  } catch (error) {
    console.error("\u83B7\u53D6\u8BC4\u4F30\u7ED3\u679C\u5931\u8D25:", error);
    res.status(500).json({ message: "\u83B7\u53D6\u8BC4\u4F30\u7ED3\u679C\u65F6\u53D1\u751F\u9519\u8BEF" });
  }
});
var assessment_default = router6;

// src/routes/learning-path.ts
var import_express7 = require("express");

// src/utils/pathRecommender.ts
init_KnowledgePoint();
async function canUnlockPoint(userId, pointId) {
  const point = await KnowledgePoint_default.findOne({ id: pointId }).select("prerequisites").lean();
  if (!point) {
    return { canUnlock: false, missingPrerequisites: [] };
  }
  if (point.prerequisites.length === 0) {
    return { canUnlock: true, missingPrerequisites: [] };
  }
  const userProgress = await UserProgress_default.find({
    userId,
    pointId: { $in: point.prerequisites }
  });
  const completedPrerequisites = new Set(
    userProgress.filter((p) => p.status === "completed").map((p) => p.pointId)
  );
  const missingPrerequisites = point.prerequisites.filter(
    (preId) => !completedPrerequisites.has(preId)
  );
  return {
    canUnlock: missingPrerequisites.length === 0,
    missingPrerequisites
  };
}

// src/utils/intelligentPathRecommender.ts
init_KnowledgePoint();
init_StudySession();

// src/models/WrongQuestion.ts
var import_mongoose7 = __toESM(require("mongoose"));
var WrongQuestionSchema = new import_mongoose7.Schema({
  userId: { type: import_mongoose7.Schema.Types.ObjectId, ref: "User", required: true, index: true },
  pointId: { type: String, required: true, index: true },
  pointTitle: { type: String, required: true },
  subject: { type: String, required: true, index: true },
  question: { type: String, required: true },
  options: [{ type: String }],
  type: { type: String, enum: ["single", "multiple", "boolean"], required: true },
  userAnswer: { type: import_mongoose7.Schema.Types.Mixed, required: true },
  correctAnswer: { type: import_mongoose7.Schema.Types.Mixed, required: true },
  explanation: { type: String, required: true },
  aiAnalysis: { type: String },
  retryCount: { type: Number, default: 0 },
  lastAttemptAt: { type: Date, default: Date.now },
  mastered: { type: Boolean, default: false, index: true },
  difficulty: { type: Number, min: 1, max: 5 },
  createdAt: { type: Date, default: Date.now }
}, {
  timestamps: true
});
WrongQuestionSchema.index({ userId: 1, pointId: 1 });
WrongQuestionSchema.index({ userId: 1, mastered: 1 });
WrongQuestionSchema.index({ userId: 1, subject: 1 });
var WrongQuestion = import_mongoose7.default.models.WrongQuestion || (0, import_mongoose7.model)("WrongQuestion", WrongQuestionSchema);
var WrongQuestion_default = WrongQuestion;

// src/utils/intelligentPathRecommender.ts
async function generateIntelligentPath(userId) {
  const [assessment, allPoints, userProgress, studySessions, wrongQuestions] = await Promise.all([
    Assessment_default.findOne({ userId }),
    KnowledgePoint_default.find({}).select("id title subject difficulty prerequisites estimatedTime").lean(),
    UserProgress_default.find({ userId }).lean(),
    StudySession_default.find({ userId }).sort({ startTime: -1 }).limit(100).lean(),
    WrongQuestion_default.find({ userId }).lean()
  ]);
  const learningMetrics = calculateLearningMetrics(userProgress, studySessions, wrongQuestions);
  const completedPointIds = new Set(
    userProgress.filter((p) => p.status === "completed").map((p) => p.pointId)
  );
  const uncompletedPoints = allPoints.filter((p) => !completedPointIds.has(p.id));
  const recommendations = uncompletedPoints.map((point) => {
    return calculateIntelligentPriority(
      point,
      assessment,
      learningMetrics,
      completedPointIds,
      userProgress,
      wrongQuestions,
      allPoints
    );
  });
  const sortedRecommendations = intelligentSort(recommendations, allPoints);
  return sortedRecommendations.slice(0, 50);
}
function calculateLearningMetrics(userProgress, studySessions, wrongQuestions) {
  const totalCompleted = userProgress.filter((p) => p.status === "completed").length;
  const totalTime = studySessions.reduce((sum, s) => sum + (s.duration || 0), 0);
  const avgTimePerPoint = totalCompleted > 0 ? totalTime / totalCompleted : 0;
  const scoresAvg = userProgress.filter((p) => p.score !== void 0).reduce((sum, p, _, arr) => sum + p.score / arr.length, 0);
  const totalQuestions = userProgress.filter((p) => p.score !== void 0).length * 10;
  const errorRate = totalQuestions > 0 ? wrongQuestions.length / totalQuestions * 100 : 50;
  const learningSpeed = totalTime > 0 ? totalCompleted / (totalTime / 3600) : 1;
  const lastStudyTime = studySessions.length > 0 ? studySessions[0].startTime : null;
  const daysSinceLastStudy = lastStudyTime ? Math.floor((Date.now() - new Date(lastStudyTime).getTime()) / (1e3 * 60 * 60 * 24)) : 999;
  return {
    totalCompleted,
    avgTimePerPoint,
    scoresAvg,
    errorRate,
    learningSpeed,
    daysSinceLastStudy
  };
}
function calculateIntelligentPriority(point, assessment, learningMetrics, completedPointIds, userProgress, wrongQuestions, allPoints) {
  let priority = 50;
  let reason = "\u63A8\u8350\u5B66\u4E60";
  let predictedSuccessRate = 70;
  let urgency = 50;
  const prerequisitesCompleted = point.prerequisites.every(
    (preId) => completedPointIds.has(preId)
  );
  if (!prerequisitesCompleted) {
    priority -= 100;
    reason = "\u9700\u8981\u5148\u5B8C\u6210\u524D\u7F6E\u8BFE\u7A0B";
    predictedSuccessRate = 20;
  }
  if (assessment) {
    const weakness = assessment.weaknesses?.find((w) => w.subject === point.subject);
    if (weakness) {
      priority += 40;
      urgency += 30;
      reason = `\u5F3A\u5316${point.subject}\u5F31\u9879`;
    }
    const skillLevel = assessment.skillProfile?.find((s) => s.subject === point.subject)?.level || 50;
    const difficultyScore = point.difficulty * 20;
    const matchScore = 100 - Math.abs(skillLevel - difficultyScore);
    priority += matchScore * 0.3;
    if (skillLevel >= difficultyScore + 20) {
      predictedSuccessRate = 90;
    } else if (skillLevel >= difficultyScore) {
      predictedSuccessRate = 80;
    } else if (skillLevel >= difficultyScore - 20) {
      predictedSuccessRate = 65;
    } else {
      predictedSuccessRate = 40;
      priority -= 20;
    }
  }
  if (learningMetrics.learningSpeed > 2) {
    if (point.difficulty >= 3) {
      priority += 15;
    }
  } else if (learningMetrics.learningSpeed < 1) {
    if (point.difficulty <= 2) {
      priority += 15;
    }
  }
  const subjectErrors = wrongQuestions.filter((wq) => wq.subject === point.subject);
  if (subjectErrors.length > 5) {
    priority += 25;
    urgency += 20;
    reason = `${point.subject}\u9519\u9898\u8F83\u591A\uFF0C\u5EFA\u8BAE\u5F3A\u5316`;
  }
  if (learningMetrics.daysSinceLastStudy > 7) {
    if (point.difficulty <= 2) {
      priority += 20;
      reason = "\u9002\u5408\u91CD\u65B0\u5F00\u59CB\u7684\u7B80\u5355\u8BFE\u7A0B";
    }
  }
  if (point.difficulty === 1) {
    priority += 15;
    predictedSuccessRate = Math.min(95, predictedSuccessRate + 15);
  }
  const estimatedTime = point.estimatedTime || 60;
  if (estimatedTime <= 30) {
    priority += 10;
  }
  const inProgress = userProgress.find(
    (p) => p.pointId === point.id && p.status === "in_progress"
  );
  if (inProgress) {
    priority += 50;
    urgency += 40;
    reason = "\u7EE7\u7EED\u5B8C\u6210\u8FDB\u884C\u4E2D\u7684\u8BFE\u7A0B";
  }
  const recentCompleted = userProgress.filter((p) => p.status === "completed").slice(-3);
  if (recentCompleted.length > 0) {
    const avgRecentDifficulty = recentCompleted.reduce((sum, p) => {
      const kp = allPoints.find((ap) => ap.id === p.pointId);
      return sum + (kp?.difficulty || 3);
    }, 0) / recentCompleted.length;
    const difficultyGap = Math.abs(point.difficulty - avgRecentDifficulty);
    if (difficultyGap > 2) {
      priority -= 15;
      predictedSuccessRate -= 10;
    } else if (difficultyGap <= 0.5) {
      priority += 10;
    }
  }
  return {
    pointId: point.id,
    priority: Math.round(priority),
    reason,
    predictedSuccessRate: Math.max(10, Math.min(95, Math.round(predictedSuccessRate))),
    estimatedTime,
    difficulty: point.difficulty,
    urgency: Math.max(0, Math.min(100, Math.round(urgency)))
  };
}
function intelligentSort(recommendations, allPoints) {
  const pointMap = new Map(allPoints.map((p) => [p.id, p]));
  const result = [];
  const visited = /* @__PURE__ */ new Set();
  const withScore = recommendations.map((rec) => ({
    ...rec,
    compositeScore: rec.priority * 0.5 + rec.urgency * 0.3 + rec.predictedSuccessRate * 0.2
  }));
  const sortedByScore = withScore.sort((a, b) => b.compositeScore - a.compositeScore);
  for (const rec of sortedByScore) {
    if (!visited.has(rec.pointId)) {
      topologicalDFS(rec.pointId, pointMap, visited, result, withScore);
    }
  }
  return result;
}
function topologicalDFS(pointId, pointMap, visited, result, recommendations) {
  visited.add(pointId);
  const point = pointMap.get(pointId);
  if (!point) return;
  for (const preId of point.prerequisites) {
    if (!visited.has(preId)) {
      topologicalDFS(preId, pointMap, visited, result, recommendations);
    }
  }
  const rec = recommendations.find((r) => r.pointId === pointId);
  if (rec) {
    result.push({
      pointId: rec.pointId,
      priority: rec.priority,
      reason: rec.reason,
      predictedSuccessRate: rec.predictedSuccessRate,
      estimatedTime: rec.estimatedTime,
      difficulty: rec.difficulty,
      urgency: rec.urgency
    });
  }
}

// src/routes/learning-path.ts
init_KnowledgePoint();
var router7 = (0, import_express7.Router)();
router7.get("/recommend", authMiddleware, async (req, res) => {
  try {
    const user = req.user;
    const userId = user._id;
    if (!userId) {
      return res.status(401).json({ message: "\u672A\u6388\u6743" });
    }
    const intelligentPath = await generateIntelligentPath(userId);
    const topRecommendations = intelligentPath.slice(0, 10);
    const detailedRecommendations = await Promise.all(
      topRecommendations.map(async (rec) => {
        const point = await KnowledgePoint_default.findOne({ id: rec.pointId }).select("title subject difficulty estimatedTime").lean();
        return {
          ...rec,
          title: point?.title,
          subject: point?.subject
        };
      })
    );
    res.json({
      recommendations: detailedRecommendations,
      totalCount: intelligentPath.length
    });
  } catch (error) {
    console.error("\u751F\u6210\u63A8\u8350\u8DEF\u5F84\u5931\u8D25:", error);
    res.status(500).json({ message: "\u751F\u6210\u63A8\u8350\u8DEF\u5F84\u65F6\u53D1\u751F\u9519\u8BEF" });
  }
});
router7.post("/unlock-check", authMiddleware, async (req, res) => {
  try {
    const { pointId } = req.body;
    const user = req.user;
    const userId = user._id;
    if (!userId) {
      return res.status(401).json({ message: "\u672A\u6388\u6743" });
    }
    const unlockStatus = await canUnlockPoint(userId, pointId);
    if (unlockStatus.canUnlock) {
      res.json({
        canUnlock: true,
        message: "\u53EF\u4EE5\u5F00\u59CB\u5B66\u4E60"
      });
    } else {
      const missingPoints = await KnowledgePoint_default.find({
        id: { $in: unlockStatus.missingPrerequisites }
      }).select("id title subject").lean();
      res.json({
        canUnlock: false,
        message: "\u9700\u8981\u5148\u5B8C\u6210\u524D\u7F6E\u8BFE\u7A0B",
        missingPrerequisites: missingPoints.map((p) => ({
          id: p.id,
          title: p.title,
          subject: p.subject
        }))
      });
    }
  } catch (error) {
    console.error("\u68C0\u67E5\u89E3\u9501\u72B6\u6001\u5931\u8D25:", error);
    res.status(500).json({ message: "\u68C0\u67E5\u89E3\u9501\u72B6\u6001\u65F6\u53D1\u751F\u9519\u8BEF" });
  }
});
var learning_path_default = router7;

// src/routes/wrong-questions.ts
var import_express8 = require("express");
init_KnowledgePoint();
var router8 = (0, import_express8.Router)();
router8.get("/", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?._id;
    const { subject, mastered, pointId } = req.query;
    const filter = { userId };
    if (subject) filter.subject = subject;
    if (mastered !== void 0) filter.mastered = mastered === "true";
    if (pointId) filter.pointId = pointId;
    const wrongQuestions = await WrongQuestion_default.find(filter).sort({ lastAttemptAt: -1 }).lean();
    res.json({ wrongQuestions });
  } catch (error) {
    console.error("\u83B7\u53D6\u9519\u9898\u5217\u8868\u5931\u8D25:", error);
    res.status(500).json({ message: "\u83B7\u53D6\u9519\u9898\u5217\u8868\u65F6\u53D1\u751F\u9519\u8BEF" });
  }
});
router8.get("/stats", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?._id;
    const subjectStats = await WrongQuestion_default.aggregate([
      { $match: { userId } },
      {
        $group: {
          _id: "$subject",
          total: { $sum: 1 },
          mastered: {
            $sum: { $cond: [{ $eq: ["$mastered", true] }, 1, 0] }
          },
          unmastered: {
            $sum: { $cond: [{ $eq: ["$mastered", false] }, 1, 0] }
          }
        }
      },
      {
        $project: {
          subject: "$_id",
          total: 1,
          mastered: 1,
          unmastered: 1,
          _id: 0
        }
      }
    ]);
    const pointStats = await WrongQuestion_default.aggregate([
      { $match: { userId, mastered: false } },
      {
        $group: {
          _id: "$pointId",
          pointTitle: { $first: "$pointTitle" },
          subject: { $first: "$subject" },
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } },
      { $limit: 10 },
      {
        $project: {
          pointId: "$_id",
          pointTitle: 1,
          subject: 1,
          count: 1,
          _id: 0
        }
      }
    ]);
    const totalWrong = await WrongQuestion_default.countDocuments({ userId });
    const totalMastered = await WrongQuestion_default.countDocuments({ userId, mastered: true });
    res.json({
      totalWrong,
      totalMastered,
      totalUnmastered: totalWrong - totalMastered,
      masteryRate: totalWrong > 0 ? Math.round(totalMastered / totalWrong * 100) : 0,
      subjectStats,
      weakestPoints: pointStats
    });
  } catch (error) {
    console.error("\u83B7\u53D6\u9519\u9898\u7EDF\u8BA1\u5931\u8D25:", error);
    res.status(500).json({ message: "\u83B7\u53D6\u9519\u9898\u7EDF\u8BA1\u65F6\u53D1\u751F\u9519\u8BEF" });
  }
});
router8.post("/", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?._id;
    const { pointId, question, options, type, userAnswer, correctAnswer, explanation, difficulty } = req.body;
    const point = await KnowledgePoint_default.findOne({ id: pointId });
    if (!point) {
      return res.status(404).json({ message: "\u77E5\u8BC6\u70B9\u4E0D\u5B58\u5728" });
    }
    const existing = await WrongQuestion_default.findOne({
      userId,
      pointId,
      question
    });
    if (existing) {
      existing.retryCount += 1;
      existing.lastAttemptAt = /* @__PURE__ */ new Date();
      existing.userAnswer = userAnswer;
      await existing.save();
      return res.json({ wrongQuestion: existing, updated: true });
    }
    const wrongQuestion = new WrongQuestion_default({
      userId,
      pointId,
      pointTitle: point.title,
      subject: point.subject,
      question,
      options,
      type,
      userAnswer,
      correctAnswer,
      explanation,
      difficulty: difficulty || point.difficulty
    });
    await wrongQuestion.save();
    res.status(201).json({ wrongQuestion });
  } catch (error) {
    console.error("\u6DFB\u52A0\u9519\u9898\u5931\u8D25:", error);
    res.status(500).json({ message: "\u6DFB\u52A0\u9519\u9898\u65F6\u53D1\u751F\u9519\u8BEF" });
  }
});
router8.post("/:id/analyze", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?._id;
    const { id } = req.params;
    const { regenerate } = req.body;
    const wrongQuestion = await WrongQuestion_default.findOne({ _id: id, userId });
    if (!wrongQuestion) {
      return res.status(404).json({ message: "\u9519\u9898\u4E0D\u5B58\u5728" });
    }
    if (wrongQuestion.aiAnalysis && !regenerate) {
      return res.json({ aiAnalysis: wrongQuestion.aiAnalysis });
    }
    const userAnswerText = Array.isArray(wrongQuestion.userAnswer) ? wrongQuestion.userAnswer.map((i) => wrongQuestion.options[i]).join(", ") : wrongQuestion.options[wrongQuestion.userAnswer];
    const correctAnswerText = Array.isArray(wrongQuestion.correctAnswer) ? wrongQuestion.correctAnswer.map((i) => wrongQuestion.options[i]).join(", ") : wrongQuestion.options[wrongQuestion.correctAnswer];
    const prompt = `\u4F5C\u4E3A\u4E00\u540D\u7ECF\u9A8C\u4E30\u5BCC\u7684\u8BA1\u7B97\u673A\u79D1\u5B66\u6559\u5E08\uFF0C\u8BF7\u6DF1\u5EA6\u5206\u6790\u4EE5\u4E0B\u9519\u9898\uFF0C\u5E2E\u52A9\u5B66\u751F\u7406\u89E3\u9519\u8BEF\u539F\u56E0\u5E76\u638C\u63E1\u6B63\u786E\u77E5\u8BC6\uFF1A

**\u77E5\u8BC6\u70B9**: ${wrongQuestion.pointTitle} (${wrongQuestion.subject})

**\u9898\u76EE**: ${wrongQuestion.question}

**\u9009\u9879**:
${wrongQuestion.options.map((opt, i) => `${String.fromCharCode(65 + i)}. ${opt}`).join("\n")}

**\u5B66\u751F\u7684\u7B54\u6848**: ${userAnswerText}
**\u6B63\u786E\u7B54\u6848**: ${correctAnswerText}

**\u6807\u51C6\u89E3\u6790**: ${wrongQuestion.explanation}

\u8BF7\u63D0\u4F9B\uFF1A
1. **\u9519\u8BEF\u539F\u56E0\u5206\u6790**\uFF1A\u4E3A\u4EC0\u4E48\u5B66\u751F\u4F1A\u9009\u62E9\u8FD9\u4E2A\u7B54\u6848\uFF1F\u53EF\u80FD\u7684\u8BEF\u89E3\u662F\u4EC0\u4E48\uFF1F
2. **\u77E5\u8BC6\u70B9\u8BE6\u89E3**\uFF1A\u7528\u66F4\u901A\u4FD7\u6613\u61C2\u7684\u65B9\u5F0F\u89E3\u91CA\u8FD9\u4E2A\u77E5\u8BC6\u70B9\u7684\u6838\u5FC3\u6982\u5FF5
3. **\u8BB0\u5FC6\u6280\u5DE7**\uFF1A\u63D0\u4F9B\u4FBF\u4E8E\u8BB0\u5FC6\u7684\u53E3\u8BC0\u3001\u7C7B\u6BD4\u6216\u8054\u60F3\u65B9\u6CD5
4. **\u76F8\u5173\u77E5\u8BC6\u62D3\u5C55**\uFF1A\u8FD9\u4E2A\u77E5\u8BC6\u70B9\u4E0E\u5176\u4ED6\u77E5\u8BC6\u70B9\u7684\u5173\u8054

\u8BF7\u7528\u6E05\u6670\u3001\u53CB\u597D\u7684\u8BED\u8A00\uFF0C\u5C31\u50CF\u9762\u5BF9\u9762\u8F85\u5BFC\u5B66\u751F\u4E00\u6837\u3002`;
    const aiAnalysis = await getChatCompletion([
      { role: "user", content: prompt }
    ]);
    wrongQuestion.aiAnalysis = aiAnalysis;
    await wrongQuestion.save();
    res.json({ aiAnalysis });
  } catch (error) {
    console.error("\u751F\u6210 AI \u89E3\u6790\u5931\u8D25:", error);
    res.status(500).json({ message: "\u751F\u6210 AI \u89E3\u6790\u65F6\u53D1\u751F\u9519\u8BEF" });
  }
});
router8.put("/:id/master", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?._id;
    const { id } = req.params;
    const wrongQuestion = await WrongQuestion_default.findOneAndUpdate(
      { _id: id, userId },
      { mastered: true, lastAttemptAt: /* @__PURE__ */ new Date() },
      { new: true }
    );
    if (!wrongQuestion) {
      return res.status(404).json({ message: "\u9519\u9898\u4E0D\u5B58\u5728" });
    }
    res.json({ wrongQuestion });
  } catch (error) {
    console.error("\u6807\u8BB0\u9519\u9898\u5931\u8D25:", error);
    res.status(500).json({ message: "\u6807\u8BB0\u9519\u9898\u65F6\u53D1\u751F\u9519\u8BEF" });
  }
});
router8.put("/:id/reset", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?._id;
    const { id } = req.params;
    const wrongQuestion = await WrongQuestion_default.findOneAndUpdate(
      { _id: id, userId },
      { mastered: false, lastAttemptAt: /* @__PURE__ */ new Date() },
      { new: true }
    );
    if (!wrongQuestion) {
      return res.status(404).json({ message: "\u9519\u9898\u4E0D\u5B58\u5728" });
    }
    res.json({ wrongQuestion });
  } catch (error) {
    console.error("\u91CD\u7F6E\u9519\u9898\u5931\u8D25:", error);
    res.status(500).json({ message: "\u91CD\u7F6E\u9519\u9898\u65F6\u53D1\u751F\u9519\u8BEF" });
  }
});
router8.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?._id;
    const { id } = req.params;
    const wrongQuestion = await WrongQuestion_default.findOneAndDelete({ _id: id, userId });
    if (!wrongQuestion) {
      return res.status(404).json({ message: "\u9519\u9898\u4E0D\u5B58\u5728" });
    }
    res.json({ message: "\u9519\u9898\u5DF2\u5220\u9664" });
  } catch (error) {
    console.error("\u5220\u9664\u9519\u9898\u5931\u8D25:", error);
    res.status(500).json({ message: "\u5220\u9664\u9519\u9898\u65F6\u53D1\u751F\u9519\u8BEF" });
  }
});
var wrong_questions_default = router8;

// src/routes/study-time.ts
var import_express9 = require("express");
init_StudySession();
init_KnowledgePoint();
var router9 = (0, import_express9.Router)();
router9.post("/start", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?._id;
    const { pointId } = req.body;
    let pointTitle, subject;
    if (pointId) {
      const point = await KnowledgePoint_default.findOne({ id: pointId });
      if (point) {
        pointTitle = point.title;
        subject = point.subject;
      }
    }
    const now = /* @__PURE__ */ new Date();
    const unfinishedSessions = await StudySession_default.find({ userId, endTime: null });
    for (const session2 of unfinishedSessions) {
      session2.endTime = now;
      session2.duration = Math.floor((now.getTime() - session2.startTime.getTime()) / 1e3);
      await session2.save();
    }
    const session = new StudySession_default({
      userId,
      pointId,
      pointTitle,
      subject,
      startTime: /* @__PURE__ */ new Date(),
      active: true,
      activityCount: 0
    });
    await session.save();
    res.json({ sessionId: session._id, message: "\u5B66\u4E60\u4F1A\u8BDD\u5DF2\u5F00\u59CB" });
  } catch (error) {
    console.error("\u5F00\u59CB\u5B66\u4E60\u4F1A\u8BDD\u5931\u8D25:", error);
    res.status(500).json({ message: "\u5F00\u59CB\u5B66\u4E60\u4F1A\u8BDD\u65F6\u53D1\u751F\u9519\u8BEF" });
  }
});
router9.post("/heartbeat", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?._id;
    const { sessionId } = req.body;
    if (!sessionId) {
      return res.status(400).json({ message: "\u7F3A\u5C11 sessionId" });
    }
    const session = await StudySession_default.findOne({ _id: sessionId, userId, endTime: null });
    if (!session) {
      return res.status(404).json({ message: "\u5B66\u4E60\u4F1A\u8BDD\u4E0D\u5B58\u5728\u6216\u5DF2\u7ED3\u675F" });
    }
    session.activityCount += 1;
    const now = /* @__PURE__ */ new Date();
    session.duration = Math.floor((now.getTime() - session.startTime.getTime()) / 1e3);
    await session.save();
    res.json({ message: "\u6D3B\u52A8\u5DF2\u8BB0\u5F55", duration: session.duration });
  } catch (error) {
    console.error("\u8BB0\u5F55\u6D3B\u52A8\u5931\u8D25:", error);
    res.status(500).json({ message: "\u8BB0\u5F55\u6D3B\u52A8\u65F6\u53D1\u751F\u9519\u8BEF" });
  }
});
router9.post("/end", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?._id;
    const { sessionId } = req.body;
    const session = await StudySession_default.findOne({ _id: sessionId, userId, endTime: null });
    if (!session) {
      return res.status(404).json({ message: "\u5B66\u4E60\u4F1A\u8BDD\u4E0D\u5B58\u5728\u6216\u5DF2\u7ED3\u675F" });
    }
    const now = /* @__PURE__ */ new Date();
    session.endTime = now;
    session.duration = Math.floor((now.getTime() - session.startTime.getTime()) / 1e3);
    const expectedActivityCount = Math.floor(session.duration / 60);
    session.active = session.activityCount >= expectedActivityCount * 0.3;
    await session.save();
    res.json({
      message: "\u5B66\u4E60\u4F1A\u8BDD\u5DF2\u7ED3\u675F",
      duration: session.duration,
      active: session.active
    });
  } catch (error) {
    console.error("\u7ED3\u675F\u5B66\u4E60\u4F1A\u8BDD\u5931\u8D25:", error);
    res.status(500).json({ message: "\u7ED3\u675F\u5B66\u4E60\u4F1A\u8BDD\u65F6\u53D1\u751F\u9519\u8BEF" });
  }
});
router9.get("/stats/simple", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?._id;
    const totalResult = await StudySession_default.aggregate([
      { $match: { userId, active: true } },
      { $group: { _id: null, totalDuration: { $sum: "$duration" } } }
    ]);
    const totalDuration = totalResult.length > 0 ? totalResult[0].totalDuration : 0;
    res.json({
      totalDuration,
      totalHours: Math.floor(totalDuration / 3600),
      totalMinutes: Math.floor(totalDuration % 3600 / 60)
    });
  } catch (error) {
    console.error("\u83B7\u53D6\u5B66\u4E60\u65F6\u957F\u7EDF\u8BA1\u5931\u8D25:", error);
    res.status(500).json({ message: "\u83B7\u53D6\u5B66\u4E60\u65F6\u957F\u7EDF\u8BA1\u65F6\u53D1\u751F\u9519\u8BEF" });
  }
});
router9.get("/stats", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?._id;
    const { startDate, endDate } = req.query;
    const filter = { userId, active: true };
    if (startDate || endDate) {
      filter.startTime = {};
      if (startDate) filter.startTime.$gte = new Date(startDate);
      if (endDate) filter.startTime.$lte = new Date(endDate);
    }
    const totalResult = await StudySession_default.aggregate([
      { $match: filter },
      { $group: { _id: null, totalDuration: { $sum: "$duration" } } }
    ]);
    const totalDuration = totalResult.length > 0 ? totalResult[0].totalDuration : 0;
    const subjectStats = await StudySession_default.aggregate([
      { $match: { ...filter, subject: { $exists: true, $ne: null } } },
      {
        $group: {
          _id: "$subject",
          duration: { $sum: "$duration" },
          sessionCount: { $sum: 1 }
        }
      },
      { $sort: { duration: -1 } },
      {
        $project: {
          subject: "$_id",
          duration: 1,
          sessionCount: 1,
          _id: 0
        }
      }
    ]);
    const pointStats = await StudySession_default.aggregate([
      { $match: { ...filter, pointId: { $exists: true, $ne: null } } },
      {
        $group: {
          _id: "$pointId",
          pointTitle: { $first: "$pointTitle" },
          subject: { $first: "$subject" },
          duration: { $sum: "$duration" },
          sessionCount: { $sum: 1 }
        }
      },
      { $sort: { duration: -1 } },
      { $limit: 10 },
      {
        $project: {
          pointId: "$_id",
          pointTitle: 1,
          subject: 1,
          duration: 1,
          sessionCount: 1,
          _id: 0
        }
      }
    ]);
    const thirtyDaysAgo = /* @__PURE__ */ new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const dailyStats = await StudySession_default.aggregate([
      {
        $match: {
          userId,
          active: true,
          startTime: { $gte: thirtyDaysAgo }
        }
      },
      {
        $group: {
          _id: {
            $dateToString: { format: "%Y-%m-%d", date: "$startTime" }
          },
          duration: { $sum: "$duration" },
          sessionCount: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } },
      {
        $project: {
          date: "$_id",
          duration: 1,
          sessionCount: 1,
          _id: 0
        }
      }
    ]);
    const hourlyActivity = await StudySession_default.aggregate([
      { $match: filter },
      {
        $project: {
          hour: { $hour: "$startTime" }
        }
      },
      {
        $group: {
          _id: "$hour",
          count: { $sum: 1 }
        }
      },
      { $sort: { count: -1 } },
      { $limit: 3 },
      {
        $project: {
          hour: "$_id",
          count: 1,
          _id: 0
        }
      }
    ]);
    res.json({
      totalDuration,
      totalHours: Math.floor(totalDuration / 3600),
      totalMinutes: Math.floor(totalDuration % 3600 / 60),
      subjectStats,
      pointStats,
      dailyStats,
      mostActiveHours: hourlyActivity
    });
  } catch (error) {
    console.error("\u83B7\u53D6\u5B66\u4E60\u65F6\u957F\u7EDF\u8BA1\u5931\u8D25:", error);
    res.status(500).json({ message: "\u83B7\u53D6\u5B66\u4E60\u65F6\u957F\u7EDF\u8BA1\u65F6\u53D1\u751F\u9519\u8BEF" });
  }
});
router9.get("/heatmap", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?._id;
    const { year } = req.query;
    const targetYear = year ? parseInt(year) : (/* @__PURE__ */ new Date()).getFullYear();
    const startDate = new Date(targetYear, 0, 1);
    const endDate = new Date(targetYear, 11, 31, 23, 59, 59);
    const heatmapData = await StudySession_default.aggregate([
      {
        $match: {
          userId,
          active: true,
          startTime: { $gte: startDate, $lte: endDate }
        }
      },
      {
        $group: {
          _id: {
            $dateToString: { format: "%Y-%m-%d", date: "$startTime" }
          },
          duration: { $sum: "$duration" },
          sessionCount: { $sum: 1 }
        }
      },
      {
        $project: {
          date: "$_id",
          duration: 1,
          sessionCount: 1,
          // 计算强度等级 (0-4)
          intensity: {
            $cond: [
              { $gte: ["$duration", 7200] },
              4,
              // >= 2小时
              {
                $cond: [
                  { $gte: ["$duration", 3600] },
                  3,
                  // >= 1小时
                  {
                    $cond: [
                      { $gte: ["$duration", 1800] },
                      2,
                      // >= 30分钟
                      {
                        $cond: [
                          { $gte: ["$duration", 600] },
                          1,
                          // >= 10分钟
                          0
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          _id: 0
        }
      },
      { $sort: { date: 1 } }
    ]);
    let currentStreak = 0;
    let longestStreak = 0;
    let lastDate = null;
    const sortedData = heatmapData.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    for (const data of sortedData) {
      const currentDate = new Date(data.date);
      if (!lastDate) {
        currentStreak = 1;
      } else {
        const diffDays = Math.floor(
          (currentDate.getTime() - lastDate.getTime()) / (1e3 * 60 * 60 * 24)
        );
        if (diffDays === 1) {
          currentStreak++;
        } else {
          longestStreak = Math.max(longestStreak, currentStreak);
          currentStreak = 1;
        }
      }
      lastDate = currentDate;
    }
    longestStreak = Math.max(longestStreak, currentStreak);
    res.json({
      year: targetYear,
      data: heatmapData,
      totalDays: heatmapData.length,
      longestStreak,
      currentStreak
    });
  } catch (error) {
    console.error("\u83B7\u53D6\u70ED\u529B\u56FE\u6570\u636E\u5931\u8D25:", error);
    res.status(500).json({ message: "\u83B7\u53D6\u70ED\u529B\u56FE\u6570\u636E\u65F6\u53D1\u751F\u9519\u8BEF" });
  }
});
var study_time_default = router9;

// src/routes/achievements.ts
var import_express10 = require("express");

// src/models/Achievement.ts
var import_mongoose8 = __toESM(require("mongoose"));
var userAchievementSchema = new import_mongoose8.Schema({
  userId: {
    type: import_mongoose8.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true
  },
  achievementId: {
    type: String,
    required: true,
    index: true
  },
  achievementType: {
    type: String,
    required: true,
    enum: [
      "study_time",
      "knowledge_master",
      "streak",
      "quiz_perfect",
      "early_bird",
      "night_owl",
      "explorer",
      "fast_learner"
    ]
  },
  achievementLevel: {
    type: String,
    required: true,
    enum: ["bronze", "silver", "gold", "platinum", "diamond"]
  },
  unlockedAt: {
    type: Date,
    default: null
  },
  progress: {
    type: Number,
    default: 0
  },
  maxProgress: {
    type: Number,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});
userAchievementSchema.index({ userId: 1, achievementId: 1 }, { unique: true });
userAchievementSchema.index({ userId: 1, completed: 1 });
var UserAchievement = import_mongoose8.default.models.UserAchievement || import_mongoose8.default.model("UserAchievement", userAchievementSchema);
var Achievement_default = UserAchievement;
var ACHIEVEMENT_DEFINITIONS = [
  // 学习时长成就
  {
    id: "study_time_bronze",
    type: "study_time",
    level: "bronze",
    name: "\u521D\u5B66\u8005",
    description: "\u7D2F\u8BA1\u5B66\u4E601\u5C0F\u65F6",
    icon: "\u23F1\uFE0F",
    requirement: 3600,
    // 1小时（秒）
    points: 10
  },
  {
    id: "study_time_silver",
    type: "study_time",
    level: "silver",
    name: "\u52E4\u594B\u5B66\u4E60\u8005",
    description: "\u7D2F\u8BA1\u5B66\u4E6010\u5C0F\u65F6",
    icon: "\u23F1\uFE0F",
    requirement: 36e3,
    // 10小时
    points: 50
  },
  {
    id: "study_time_gold",
    type: "study_time",
    level: "gold",
    name: "\u5B66\u4E60\u8FBE\u4EBA",
    description: "\u7D2F\u8BA1\u5B66\u4E6050\u5C0F\u65F6",
    icon: "\u23F1\uFE0F",
    requirement: 18e4,
    // 50小时
    points: 200
  },
  {
    id: "study_time_platinum",
    type: "study_time",
    level: "platinum",
    name: "\u5B66\u4E60\u5927\u5E08",
    description: "\u7D2F\u8BA1\u5B66\u4E60100\u5C0F\u65F6",
    icon: "\u23F1\uFE0F",
    requirement: 36e4,
    // 100小时
    points: 500
  },
  // 知识点掌握成就
  {
    id: "knowledge_bronze",
    type: "knowledge_master",
    level: "bronze",
    name: "\u77E5\u8BC6\u65B0\u624B",
    description: "\u5B8C\u62105\u4E2A\u77E5\u8BC6\u70B9",
    icon: "\u{1F4DA}",
    requirement: 5,
    points: 20
  },
  {
    id: "knowledge_silver",
    type: "knowledge_master",
    level: "silver",
    name: "\u77E5\u8BC6\u80FD\u624B",
    description: "\u5B8C\u621020\u4E2A\u77E5\u8BC6\u70B9",
    icon: "\u{1F4DA}",
    requirement: 20,
    points: 80
  },
  {
    id: "knowledge_gold",
    type: "knowledge_master",
    level: "gold",
    name: "\u77E5\u8BC6\u4E13\u5BB6",
    description: "\u5B8C\u621050\u4E2A\u77E5\u8BC6\u70B9",
    icon: "\u{1F4DA}",
    requirement: 50,
    points: 250
  },
  {
    id: "knowledge_platinum",
    type: "knowledge_master",
    level: "platinum",
    name: "\u77E5\u8BC6\u5B97\u5E08",
    description: "\u5B8C\u6210100\u4E2A\u77E5\u8BC6\u70B9",
    icon: "\u{1F4DA}",
    requirement: 100,
    points: 600
  },
  // 连续学习成就
  {
    id: "streak_bronze",
    type: "streak",
    level: "bronze",
    name: "\u575A\u63013\u5929",
    description: "\u8FDE\u7EED\u5B66\u4E603\u5929",
    icon: "\u{1F525}",
    requirement: 3,
    points: 30
  },
  {
    id: "streak_silver",
    type: "streak",
    level: "silver",
    name: "\u575A\u63017\u5929",
    description: "\u8FDE\u7EED\u5B66\u4E607\u5929",
    icon: "\u{1F525}",
    requirement: 7,
    points: 100
  },
  {
    id: "streak_gold",
    type: "streak",
    level: "gold",
    name: "\u575A\u630130\u5929",
    description: "\u8FDE\u7EED\u5B66\u4E6030\u5929",
    icon: "\u{1F525}",
    requirement: 30,
    points: 500
  },
  {
    id: "streak_platinum",
    type: "streak",
    level: "platinum",
    name: "\u575A\u6301100\u5929",
    description: "\u8FDE\u7EED\u5B66\u4E60100\u5929",
    icon: "\u{1F525}",
    requirement: 100,
    points: 2e3
  },
  // 完美答题成就
  {
    id: "perfect_bronze",
    type: "quiz_perfect",
    level: "bronze",
    name: "\u5B8C\u7F8E\u5F00\u59CB",
    description: "\u83B7\u5F971\u6B21\u6EE1\u5206",
    icon: "\u{1F4AF}",
    requirement: 1,
    points: 15
  },
  {
    id: "perfect_silver",
    type: "quiz_perfect",
    level: "silver",
    name: "\u5B8C\u7F8E\u5B66\u751F",
    description: "\u83B7\u5F9710\u6B21\u6EE1\u5206",
    icon: "\u{1F4AF}",
    requirement: 10,
    points: 100
  },
  {
    id: "perfect_gold",
    type: "quiz_perfect",
    level: "gold",
    name: "\u5B8C\u7F8E\u4E3B\u4E49\u8005",
    description: "\u83B7\u5F9750\u6B21\u6EE1\u5206",
    icon: "\u{1F4AF}",
    requirement: 50,
    points: 400
  },
  // 早鸟成就
  {
    id: "early_bird",
    type: "early_bird",
    level: "gold",
    name: "\u65E9\u8D77\u7684\u9E1F\u513F",
    description: "\u5728\u65E9\u4E0A6-8\u70B9\u5B66\u4E6010\u6B21",
    icon: "\u{1F305}",
    requirement: 10,
    points: 150
  },
  // 夜猫子成就
  {
    id: "night_owl",
    type: "night_owl",
    level: "gold",
    name: "\u591C\u732B\u5B50",
    description: "\u5728\u665A\u4E0A22-24\u70B9\u5B66\u4E6010\u6B21",
    icon: "\u{1F319}",
    requirement: 10,
    points: 150
  },
  // 探索者成就
  {
    id: "explorer",
    type: "explorer",
    level: "gold",
    name: "\u77E5\u8BC6\u63A2\u7D22\u8005",
    description: "\u5B66\u4E605\u4E2A\u4E0D\u540C\u5B66\u79D1",
    icon: "\u{1F5FA}\uFE0F",
    requirement: 5,
    points: 200
  },
  // 快速学习者成就
  {
    id: "fast_learner",
    type: "fast_learner",
    level: "silver",
    name: "\u5FEB\u901F\u5B66\u4E60\u8005",
    description: "\u5728\u4E00\u5929\u5185\u5B8C\u62105\u4E2A\u77E5\u8BC6\u70B9",
    icon: "\u26A1",
    requirement: 5,
    points: 120
  }
];

// src/services/achievementService.ts
init_StudySession();
var AchievementService = class {
  /**
   * 初始化用户成就
   */
  static async initializeUserAchievements(userId) {
    const existingAchievements = await Achievement_default.find({ userId });
    if (existingAchievements.length > 0) {
      return;
    }
    const achievements = ACHIEVEMENT_DEFINITIONS.map((def) => ({
      userId,
      achievementId: def.id,
      achievementType: def.type,
      achievementLevel: def.level,
      progress: 0,
      maxProgress: def.requirement,
      completed: false
    }));
    await Achievement_default.insertMany(achievements);
    console.log(`[Achievement] \u4E3A\u7528\u6237 ${userId} \u521D\u59CB\u5316\u4E86 ${achievements.length} \u4E2A\u6210\u5C31`);
  }
  /**
   * 更新成就进度
   */
  static async updateAchievementProgress(userId, type, progress) {
    const achievements = await Achievement_default.find({
      userId,
      achievementType: type,
      completed: false
    });
    const newlyUnlocked = [];
    for (const achievement of achievements) {
      const def = ACHIEVEMENT_DEFINITIONS.find((d) => d.id === achievement.achievementId);
      if (!def) continue;
      achievement.progress = Math.min(progress, def.requirement);
      if (achievement.progress >= def.requirement && !achievement.completed) {
        achievement.completed = true;
        achievement.unlockedAt = /* @__PURE__ */ new Date();
        newlyUnlocked.push(def);
        console.log(`[Achievement] \u7528\u6237 ${userId} \u89E3\u9501\u6210\u5C31: ${def.name}`);
      }
      await achievement.save();
    }
    return newlyUnlocked;
  }
  /**
   * 检查并更新学习时长成就
   */
  static async checkStudyTimeAchievements(userId) {
    const sessions = await StudySession_default.find({ userId, endTime: { $ne: null } });
    const totalSeconds = sessions.reduce((sum, session) => sum + session.duration, 0);
    return await this.updateAchievementProgress(userId, "study_time", totalSeconds);
  }
  /**
   * 检查并更新知识点掌握成就
   */
  static async checkKnowledgeMasterAchievements(userId) {
    const completedCount = await UserProgress_default.countDocuments({
      userId,
      status: "completed"
    });
    return await this.updateAchievementProgress(userId, "knowledge_master", completedCount);
  }
  /**
   * 检查并更新连续学习成就
   */
  static async checkStreakAchievements(userId) {
    const sessions = await StudySession_default.find({
      userId,
      endTime: { $ne: null }
    }).sort({ startTime: -1 });
    if (sessions.length === 0) return [];
    let streak = 1;
    const today = /* @__PURE__ */ new Date();
    today.setHours(0, 0, 0, 0);
    const lastSessionDate = new Date(sessions[0].startTime);
    lastSessionDate.setHours(0, 0, 0, 0);
    const daysDiff = Math.floor((today.getTime() - lastSessionDate.getTime()) / (1e3 * 60 * 60 * 24));
    if (daysDiff > 1) {
      streak = 0;
    } else {
      const dates = /* @__PURE__ */ new Set();
      dates.add(lastSessionDate.toDateString());
      for (let i = 1; i < sessions.length; i++) {
        const sessionDate = new Date(sessions[i].startTime);
        sessionDate.setHours(0, 0, 0, 0);
        const dateStr = sessionDate.toDateString();
        if (!dates.has(dateStr)) {
          const prevDate = new Date(sessions[i - 1].startTime);
          prevDate.setHours(0, 0, 0, 0);
          const diff = Math.floor((prevDate.getTime() - sessionDate.getTime()) / (1e3 * 60 * 60 * 24));
          if (diff === 1) {
            dates.add(dateStr);
            streak++;
          } else {
            break;
          }
        }
      }
    }
    return await this.updateAchievementProgress(userId, "streak", streak);
  }
  /**
   * 检查并更新完美答题成就
   */
  static async checkPerfectQuizAchievements(userId, score) {
    if (score < 100) return [];
    const achievement = await Achievement_default.findOne({
      userId,
      achievementType: "quiz_perfect",
      completed: false
    }).sort({ maxProgress: 1 });
    if (achievement) {
      achievement.progress += 1;
      if (achievement.progress >= achievement.maxProgress) {
        achievement.completed = true;
        achievement.unlockedAt = /* @__PURE__ */ new Date();
        await achievement.save();
        const def = ACHIEVEMENT_DEFINITIONS.find((d) => d.id === achievement.achievementId);
        return def ? [def] : [];
      }
      await achievement.save();
    }
    return [];
  }
  /**
   * 获取用户所有成就
   */
  static async getUserAchievements(userId) {
    const userAchievements = await Achievement_default.find({ userId });
    return userAchievements.map((ua) => {
      const def = ACHIEVEMENT_DEFINITIONS.find((d) => d.id === ua.achievementId);
      return {
        ...ua.toObject(),
        definition: def
      };
    });
  }
  /**
   * 获取用户成就统计
   */
  static async getUserAchievementStats(userId) {
    const total = ACHIEVEMENT_DEFINITIONS.length;
    const completed = await Achievement_default.countDocuments({ userId, completed: true });
    const totalPoints = await Achievement_default.aggregate([
      { $match: { userId, completed: true } },
      {
        $lookup: {
          from: "achievements",
          localField: "achievementId",
          foreignField: "id",
          as: "def"
        }
      },
      {
        $group: {
          _id: null,
          points: { $sum: "$points" }
        }
      }
    ]);
    const points = totalPoints.length > 0 ? totalPoints[0].points : 0;
    const level = Math.floor(points / 100) + 1;
    return {
      total,
      completed,
      percentage: Math.round(completed / total * 100),
      points,
      level
    };
  }
};

// src/utils/response.ts
var successResponse = (res, data, message = "\u64CD\u4F5C\u6210\u529F", statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
};
var errorResponse = (res, message = "\u64CD\u4F5C\u5931\u8D25", statusCode = 500, error) => {
  return res.status(statusCode).json({
    success: false,
    message,
    ...error && { error },
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
};

// src/routes/achievements.ts
var router10 = (0, import_express10.Router)();
router10.get("/", authMiddleware, async (req, res) => {
  try {
    const userId = req.user._id;
    await AchievementService.initializeUserAchievements(userId);
    const achievements = await AchievementService.getUserAchievements(userId);
    return successResponse(res, { achievements });
  } catch (error) {
    console.error("[Achievements] \u83B7\u53D6\u6210\u5C31\u5931\u8D25:", error.message);
    return errorResponse(res, "\u83B7\u53D6\u6210\u5C31\u5931\u8D25", 500, error.message);
  }
});
router10.get("/stats", authMiddleware, async (req, res) => {
  try {
    const userId = req.user._id;
    const stats = await AchievementService.getUserAchievementStats(userId);
    return successResponse(res, stats);
  } catch (error) {
    console.error("[Achievements] \u83B7\u53D6\u6210\u5C31\u7EDF\u8BA1\u5931\u8D25:", error.message);
    return errorResponse(res, "\u83B7\u53D6\u6210\u5C31\u7EDF\u8BA1\u5931\u8D25", 500, error.message);
  }
});
router10.get("/definitions", async (_req, res) => {
  try {
    return successResponse(res, { definitions: ACHIEVEMENT_DEFINITIONS });
  } catch (error) {
    console.error("[Achievements] \u83B7\u53D6\u6210\u5C31\u5B9A\u4E49\u5931\u8D25:", error.message);
    return errorResponse(res, "\u83B7\u53D6\u6210\u5C31\u5B9A\u4E49\u5931\u8D25", 500, error.message);
  }
});
router10.post("/check", authMiddleware, async (req, res) => {
  try {
    const userId = req.user._id;
    const newAchievements = [];
    newAchievements.push(...await AchievementService.checkStudyTimeAchievements(userId));
    newAchievements.push(...await AchievementService.checkKnowledgeMasterAchievements(userId));
    newAchievements.push(...await AchievementService.checkStreakAchievements(userId));
    return successResponse(res, {
      message: "\u6210\u5C31\u68C0\u67E5\u5B8C\u6210",
      newAchievements
    });
  } catch (error) {
    console.error("[Achievements] \u68C0\u67E5\u6210\u5C31\u5931\u8D25:", error.message);
    return errorResponse(res, "\u68C0\u67E5\u6210\u5C31\u5931\u8D25", 500, error.message);
  }
});
var achievements_default = router10;

// src/routes/learning-report.ts
var import_express11 = require("express");
init_StudySession();
init_KnowledgePoint();
var router11 = (0, import_express11.Router)();
router11.post("/generate", authMiddleware, async (req, res) => {
  try {
    const userId = req.user._id;
    const userName = req.user.username;
    const [completedProgress, totalPoints, studySessions, wrongQuestions] = await Promise.all([
      UserProgress_default.find({ userId, status: "completed" }),
      KnowledgePoint_default.countDocuments(),
      StudySession_default.find({ userId, endTime: { $ne: null } }),
      WrongQuestion_default.find({ userId })
    ]);
    const totalTime = studySessions.reduce((sum, session) => sum + session.duration, 0);
    const subjectStats = wrongQuestions.reduce((acc, wq) => {
      acc[wq.subject] = (acc[wq.subject] || 0) + 1;
      return acc;
    }, {});
    const weakAreas = Object.entries(subjectStats).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([subject]) => subject);
    const completedBySubject = completedProgress.reduce((acc, progress) => {
      const point = progress.pointId;
      if (point && point.subject) {
        acc[point.subject] = (acc[point.subject] || 0) + 1;
      }
      return acc;
    }, {});
    const strongAreas = Object.entries(completedBySubject).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([subject]) => subject);
    const recentCompleted = completedProgress.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()).slice(0, 5).map((progress) => progress.pointId?.title || "\u672A\u77E5\u77E5\u8BC6\u70B9");
    const report = await generateLearningReport(userName, {
      totalTime,
      completedPoints: completedProgress.length,
      totalPoints,
      weakAreas,
      strongAreas,
      recentProgress: recentCompleted
    });
    return successResponse(res, {
      report,
      stats: {
        totalTime,
        completedPoints: completedProgress.length,
        totalPoints,
        completionRate: Math.round(completedProgress.length / totalPoints * 100),
        weakAreas,
        strongAreas
      }
    });
  } catch (error) {
    console.error("[Learning Report] \u751F\u6210\u62A5\u544A\u5931\u8D25:", error.message);
    return errorResponse(res, "\u751F\u6210\u5B66\u4E60\u62A5\u544A\u5931\u8D25", 500, error.message);
  }
});
router11.get("/stats", authMiddleware, async (req, res) => {
  try {
    const userId = req.user._id;
    const sevenDaysAgo = /* @__PURE__ */ new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const [completedCount, totalPoints, totalTimeResult, recentTimeResult, sessionCount, wrongQuestionsCount] = await Promise.all([
      UserProgress_default.countDocuments({ userId, status: "completed" }),
      KnowledgePoint_default.countDocuments(),
      // 使用聚合计算总学习时长，而不是获取所有记录
      StudySession_default.aggregate([
        { $match: { userId, endTime: { $ne: null } } },
        { $group: { _id: null, totalDuration: { $sum: "$duration" } } }
      ]),
      // 使用聚合计算最近7天的学习时长
      StudySession_default.aggregate([
        { $match: { userId, endTime: { $ne: null }, startTime: { $gte: sevenDaysAgo } } },
        { $group: { _id: null, totalDuration: { $sum: "$duration" } } }
      ]),
      // 计算总会话数
      StudySession_default.countDocuments({ userId, endTime: { $ne: null } }),
      WrongQuestion_default.countDocuments({ userId, mastered: false })
    ]);
    const totalTime = totalTimeResult.length > 0 ? totalTimeResult[0].totalDuration : 0;
    const recentTime = recentTimeResult.length > 0 ? recentTimeResult[0].totalDuration : 0;
    return successResponse(res, {
      totalTime,
      recentTime,
      completedPoints: completedCount,
      totalPoints,
      completionRate: totalPoints > 0 ? Math.round(completedCount / totalPoints * 100) : 0,
      pendingWrongQuestions: wrongQuestionsCount,
      totalSessions: sessionCount
    });
  } catch (error) {
    console.error("[Learning Report] \u83B7\u53D6\u7EDF\u8BA1\u5931\u8D25:", error.message);
    return errorResponse(res, "\u83B7\u53D6\u5B66\u4E60\u7EDF\u8BA1\u5931\u8D25", 500, error.message);
  }
});
var learning_report_default = router11;

// src/routes/analytics.ts
var import_express12 = require("express");

// src/middleware/analytics.ts
var analyticsEvents = [];
var MAX_EVENTS = 1e4;
var analyticsMiddleware = (req, res, next) => {
  const startTime = Date.now();
  const sessionId = req.headers["x-session-id"] || generateSessionId();
  const event = {
    userId: req.user?.id,
    sessionId,
    event: "api_request",
    path: req.path,
    method: req.method,
    timestamp: /* @__PURE__ */ new Date(),
    userAgent: req.headers["user-agent"],
    ip: req.ip || req.connection.remoteAddress
  };
  res.on("finish", () => {
    event.duration = Date.now() - startTime;
    event.statusCode = res.statusCode;
    saveEvent(event);
  });
  next();
};
var saveEvent = (event) => {
  analyticsEvents.push(event);
  if (analyticsEvents.length > MAX_EVENTS) {
    analyticsEvents.shift();
  }
};
var generateSessionId = () => {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
};
var getAnalytics = () => {
  const now = Date.now();
  const oneHourAgo = now - 60 * 60 * 1e3;
  const oneDayAgo = now - 24 * 60 * 60 * 1e3;
  const recentEvents = analyticsEvents.filter((e) => e.timestamp.getTime() > oneHourAgo);
  const todayEvents = analyticsEvents.filter((e) => e.timestamp.getTime() > oneDayAgo);
  return {
    total: analyticsEvents.length,
    lastHour: {
      count: recentEvents.length,
      uniqueUsers: new Set(recentEvents.map((e) => e.userId).filter(Boolean)).size,
      averageDuration: calculateAverage(recentEvents.map((e) => e.duration).filter(Boolean))
    },
    today: {
      count: todayEvents.length,
      uniqueUsers: new Set(todayEvents.map((e) => e.userId).filter(Boolean)).size,
      averageDuration: calculateAverage(todayEvents.map((e) => e.duration).filter(Boolean))
    },
    topPaths: getTopPaths(todayEvents),
    errorRate: calculateErrorRate(todayEvents)
  };
};
var calculateAverage = (numbers) => {
  if (numbers.length === 0) return 0;
  return numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
};
var getTopPaths = (events, limit = 10) => {
  const pathCounts = /* @__PURE__ */ new Map();
  events.forEach((e) => {
    pathCounts.set(e.path, (pathCounts.get(e.path) || 0) + 1);
  });
  return Array.from(pathCounts.entries()).sort((a, b) => b[1] - a[1]).slice(0, limit).map(([path4, count]) => ({ path: path4, count }));
};
var calculateErrorRate = (events) => {
  if (events.length === 0) return 0;
  const errors = events.filter((e) => e.statusCode && e.statusCode >= 400).length;
  return errors / events.length * 100;
};
var trackEvent = (eventName, userId, metadata) => {
  const event = {
    userId,
    sessionId: generateSessionId(),
    event: eventName,
    path: "/custom",
    method: "TRACK",
    timestamp: /* @__PURE__ */ new Date(),
    metadata
  };
  saveEvent(event);
};

// src/routes/analytics.ts
init_StudySession();
var router12 = (0, import_express12.Router)();
router12.get("/system", authMiddleware, async (req, res) => {
  try {
    const analytics = getAnalytics();
    successResponse(res, analytics);
  } catch (error) {
    console.error("\u83B7\u53D6\u7CFB\u7EDF\u5206\u6790\u6570\u636E\u5931\u8D25:", error);
    errorResponse(res, "\u83B7\u53D6\u5206\u6790\u6570\u636E\u5931\u8D25");
  }
});
router12.get("/users", authMiddleware, async (req, res) => {
  try {
    const totalUsers = await User_default.countDocuments();
    const activeUsers = await StudySession_default.distinct("userId", {
      startTime: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1e3) }
    }).then((ids) => ids.length);
    const newUsersToday = await User_default.countDocuments({
      createdAt: { $gte: new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0)) }
    });
    successResponse(res, {
      total: totalUsers,
      active: activeUsers,
      newToday: newUsersToday
    });
  } catch (error) {
    console.error("\u83B7\u53D6\u7528\u6237\u7EDF\u8BA1\u5931\u8D25:", error);
    errorResponse(res, "\u83B7\u53D6\u7528\u6237\u7EDF\u8BA1\u5931\u8D25");
  }
});
router12.get("/learning", authMiddleware, async (req, res) => {
  try {
    const totalSessions = await StudySession_default.countDocuments();
    const totalDuration = await StudySession_default.aggregate([
      { $group: { _id: null, total: { $sum: "$duration" } } }
    ]).then((result) => result[0]?.total || 0);
    const completedPoints = await UserProgress_default.countDocuments({ status: "completed" });
    const totalWrongQuestions = await WrongQuestion_default.countDocuments();
    const todayStart = new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0));
    const todaySessions = await StudySession_default.countDocuments({
      startTime: { $gte: todayStart }
    });
    const todayDuration = await StudySession_default.aggregate([
      { $match: { startTime: { $gte: todayStart } } },
      { $group: { _id: null, total: { $sum: "$duration" } } }
    ]).then((result) => result[0]?.total || 0);
    successResponse(res, {
      all: {
        sessions: totalSessions,
        duration: totalDuration,
        completedPoints,
        wrongQuestions: totalWrongQuestions
      },
      today: {
        sessions: todaySessions,
        duration: todayDuration
      }
    });
  } catch (error) {
    console.error("\u83B7\u53D6\u5B66\u4E60\u7EDF\u8BA1\u5931\u8D25:", error);
    errorResponse(res, "\u83B7\u53D6\u5B66\u4E60\u7EDF\u8BA1\u5931\u8D25");
  }
});
router12.get("/popular-topics", authMiddleware, async (req, res) => {
  try {
    const popularTopics = await StudySession_default.aggregate([
      { $match: { pointId: { $exists: true } } },
      { $group: { _id: "$pointId", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 10 },
      {
        $lookup: {
          from: "knowledgepoints",
          localField: "_id",
          foreignField: "_id",
          as: "point"
        }
      },
      { $unwind: "$point" },
      {
        $project: {
          _id: 1,
          count: 1,
          title: "$point.title",
          subject: "$point.subject"
        }
      }
    ]);
    successResponse(res, popularTopics);
  } catch (error) {
    console.error("\u83B7\u53D6\u70ED\u95E8\u77E5\u8BC6\u70B9\u5931\u8D25:", error);
    errorResponse(res, "\u83B7\u53D6\u70ED\u95E8\u77E5\u8BC6\u70B9\u5931\u8D25");
  }
});
router12.post("/track", authMiddleware, async (req, res) => {
  try {
    const { event, metadata } = req.body;
    const userId = req.user.id;
    trackEvent(event, userId, metadata);
    successResponse(res, { message: "\u4E8B\u4EF6\u5DF2\u8BB0\u5F55" });
  } catch (error) {
    console.error("\u8BB0\u5F55\u4E8B\u4EF6\u5931\u8D25:", error);
    errorResponse(res, "\u8BB0\u5F55\u4E8B\u4EF6\u5931\u8D25");
  }
});
router12.get("/hourly-activity", authMiddleware, async (req, res) => {
  try {
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1e3);
    const activity = await StudySession_default.aggregate([
      { $match: { startTime: { $gte: sevenDaysAgo } } },
      {
        $project: {
          hour: { $hour: "$startTime" }
        }
      },
      {
        $group: {
          _id: "$hour",
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);
    const hourlyData = Array.from({ length: 24 }, (_, hour) => ({
      hour,
      count: activity.find((a) => a._id === hour)?.count || 0
    }));
    successResponse(res, hourlyData);
  } catch (error) {
    console.error("\u83B7\u53D6\u5C0F\u65F6\u6D3B\u8DC3\u5EA6\u5931\u8D25:", error);
    errorResponse(res, "\u83B7\u53D6\u6D3B\u8DC3\u5EA6\u6570\u636E\u5931\u8D25");
  }
});
var analytics_default = router12;

// src/routes/users.ts
var import_express13 = __toESM(require("express"));
var import_multer = __toESM(require("multer"));
var import_path2 = __toESM(require("path"));
var import_fs2 = __toESM(require("fs"));
var import_bcryptjs2 = __toESM(require("bcryptjs"));
init_StudySession();
var router13 = import_express13.default.Router();
var isServerless = process.env.VERCEL === "1" || process.env.AWS_LAMBDA_FUNCTION_NAME;
var storage = isServerless ? import_multer.default.memoryStorage() : import_multer.default.diskStorage({
  destination: function(req, file, cb) {
    const uploadDir = import_path2.default.join(__dirname, "../../uploads/avatars");
    if (!import_fs2.default.existsSync(uploadDir)) {
      import_fs2.default.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: function(req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = import_path2.default.extname(file.originalname);
    cb(null, `avatar-${req.user?._id}-${uniqueSuffix}${ext}`);
  }
});
var upload = (0, import_multer.default)({
  storage,
  limits: {
    fileSize: 2 * 1024 * 1024
    // 2MB
  },
  fileFilter: function(req, file, cb) {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(import_path2.default.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error("\u53EA\u652F\u6301 JPEG\u3001PNG\u3001GIF\u3001WebP \u683C\u5F0F\u7684\u56FE\u7247"));
    }
  }
});
router13.post("/avatar", authMiddleware, upload.single("avatar"), async (req, res) => {
  const startTime = Date.now();
  console.log("\u{1F4F8} [\u5934\u50CF\u4E0A\u4F20] \u5F00\u59CB\u5904\u7406...");
  try {
    if (!req.file) {
      console.error("\u{1F4F8} [\u5934\u50CF\u4E0A\u4F20] \u9519\u8BEF: \u672A\u6536\u5230\u6587\u4EF6");
      return res.status(400).json({ message: "\u8BF7\u9009\u62E9\u8981\u4E0A\u4F20\u7684\u56FE\u7247" });
    }
    console.log("\u{1F4F8} [\u5934\u50CF\u4E0A\u4F20] \u6587\u4EF6\u4FE1\u606F:", {
      filename: req.file.filename,
      size: req.file.size,
      mimetype: req.file.mimetype
    });
    const userId = req.user?._id;
    let avatarUrl;
    if (req.file.buffer) {
      console.log("\u{1F4F8} [\u5934\u50CF\u4E0A\u4F20] \u4F7F\u7528\u5185\u5B58\u5B58\u50A8\uFF0C\u8F6C\u6362\u4E3A Base64");
      const base64Image = req.file.buffer.toString("base64");
      const dataUri = `data:${req.file.mimetype};base64,${base64Image}`;
      avatarUrl = dataUri;
    } else {
      console.log("\u{1F4F8} [\u5934\u50CF\u4E0A\u4F20] \u4F7F\u7528\u6587\u4EF6\u7CFB\u7EDF\u5B58\u50A8");
      avatarUrl = `/uploads/avatars/${req.file.filename}`;
      const user = await User_default.findById(userId);
      if (user?.avatarUrl && user.avatarUrl.startsWith("/uploads/") && !user.avatarUrl.startsWith("data:")) {
        const oldAvatarPath = import_path2.default.join(__dirname, "../../", user.avatarUrl);
        if (import_fs2.default.existsSync(oldAvatarPath)) {
          try {
            import_fs2.default.unlinkSync(oldAvatarPath);
            console.log("\u{1F4F8} [\u5934\u50CF\u4E0A\u4F20] \u5DF2\u5220\u9664\u65E7\u5934\u50CF:", oldAvatarPath);
          } catch (deleteError) {
            console.warn("\u{1F4F8} [\u5934\u50CF\u4E0A\u4F20] \u5220\u9664\u65E7\u5934\u50CF\u5931\u8D25\uFF08\u53EF\u5FFD\u7565\uFF09:", deleteError.message);
          }
        }
      }
    }
    await User_default.findByIdAndUpdate(userId, { avatarUrl });
    const elapsed = Date.now() - startTime;
    console.log(`\u2705 [\u5934\u50CF\u4E0A\u4F20] \u6210\u529F - \u8017\u65F6: ${elapsed}ms`, {
      userId,
      avatarUrl: avatarUrl.substring(0, 50) + "...",
      isServerless
    });
    res.json({
      message: "\u5934\u50CF\u4E0A\u4F20\u6210\u529F",
      avatarUrl
    });
  } catch (error) {
    const elapsed = Date.now() - startTime;
    console.error(`\u274C [\u5934\u50CF\u4E0A\u4F20] \u5931\u8D25 - \u8017\u65F6: ${elapsed}ms`, {
      userId: req.user?._id,
      errorMessage: error.message,
      errorStack: error.stack
    });
    res.status(500).json({ message: error.message || "\u5934\u50CF\u4E0A\u4F20\u5931\u8D25" });
  }
});
router13.put("/profile", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?._id;
    const { username } = req.body;
    if (!username || username.trim().length < 2) {
      return res.status(400).json({ message: "\u7528\u6237\u540D\u81F3\u5C11\u9700\u8981 2 \u4E2A\u5B57\u7B26" });
    }
    if (username.length > 20) {
      return res.status(400).json({ message: "\u7528\u6237\u540D\u4E0D\u80FD\u8D85\u8FC7 20 \u4E2A\u5B57\u7B26" });
    }
    const user = await User_default.findByIdAndUpdate(
      userId,
      { username: username.trim() },
      { new: true }
    ).select("-passwordHash");
    if (!user) {
      return res.status(404).json({ message: "\u7528\u6237\u4E0D\u5B58\u5728" });
    }
    console.log("\u7528\u6237\u66F4\u65B0\u4E2A\u4EBA\u8D44\u6599", {
      userId,
      username: user.username
    });
    res.json({
      message: "\u4E2A\u4EBA\u8D44\u6599\u66F4\u65B0\u6210\u529F",
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        avatarUrl: user.avatarUrl
      }
    });
  } catch (error) {
    console.error("\u66F4\u65B0\u4E2A\u4EBA\u8D44\u6599\u5931\u8D25", error, {
      userId: req.user?._id,
      errorMessage: error.message
    });
    res.status(500).json({ message: "\u66F4\u65B0\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5" });
  }
});
router13.put("/password", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?._id;
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword) {
      return res.status(400).json({ message: "\u8BF7\u8F93\u5165\u5F53\u524D\u5BC6\u7801\u548C\u65B0\u5BC6\u7801" });
    }
    if (newPassword.length < 6) {
      return res.status(400).json({ message: "\u65B0\u5BC6\u7801\u81F3\u5C11\u9700\u8981 6 \u4F4D" });
    }
    const user = await User_default.findById(userId).select("+passwordHash");
    if (!user) {
      return res.status(404).json({ message: "\u7528\u6237\u4E0D\u5B58\u5728" });
    }
    if (!user.passwordHash) {
      return res.status(400).json({ message: "\u60A8\u7684\u8D26\u53F7\u672A\u8BBE\u7F6E\u5BC6\u7801\uFF0C\u65E0\u6CD5\u4FEE\u6539" });
    }
    const isMatch = await import_bcryptjs2.default.compare(currentPassword, user.passwordHash);
    if (!isMatch) {
      return res.status(400).json({ message: "\u5F53\u524D\u5BC6\u7801\u9519\u8BEF" });
    }
    const hashedPassword = await import_bcryptjs2.default.hash(newPassword, 10);
    user.passwordHash = hashedPassword;
    await user.save();
    console.log("\u7528\u6237\u4FEE\u6539\u5BC6\u7801", { userId });
    res.json({ message: "\u5BC6\u7801\u4FEE\u6539\u6210\u529F" });
  } catch (error) {
    console.error("\u4FEE\u6539\u5BC6\u7801\u5931\u8D25", error, {
      userId: req.user?._id,
      errorMessage: error.message
    });
    res.status(500).json({ message: "\u4FEE\u6539\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5" });
  }
});
router13.delete("/learning-data", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?._id;
    await StudySession_default.deleteMany({ userId });
    await UserProgress_default.updateMany(
      { userId },
      {
        status: "not_started",
        masteryLevel: 0,
        lastStudiedAt: null,
        completedAt: null
      }
    );
    console.log("\u7528\u6237\u6E05\u9664\u5B66\u4E60\u6570\u636E", { userId });
    res.json({ message: "\u5B66\u4E60\u6570\u636E\u5DF2\u6E05\u9664" });
  } catch (error) {
    console.error("\u6E05\u9664\u5B66\u4E60\u6570\u636E\u5931\u8D25", error, {
      userId: req.user?._id,
      errorMessage: error.message
    });
    res.status(500).json({ message: "\u6E05\u9664\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5" });
  }
});
router13.get("/me/stats", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?._id;
    const totalDuration = await StudySession_default.aggregate([
      { $match: { userId } },
      { $group: { _id: null, total: { $sum: "$duration" } } }
    ]).then((result) => result[0]?.total || 0);
    const totalHours = Math.floor(totalDuration / 3600);
    const completedCourses = await UserProgress_default.countDocuments({
      userId,
      status: "completed"
    });
    const points = Math.floor(totalDuration / 360) + completedCourses * 50;
    const allUsersStats = await Promise.all(
      (await User_default.find().select("_id")).map(async (user) => {
        const userDuration = await StudySession_default.aggregate([
          { $match: { userId: user._id } },
          { $group: { _id: null, total: { $sum: "$duration" } } }
        ]).then((result) => result[0]?.total || 0);
        const userCompleted = await UserProgress_default.countDocuments({
          userId: user._id,
          status: "completed"
        });
        return Math.floor(userDuration / 360) + userCompleted * 50;
      })
    );
    const totalUsers = allUsersStats.length;
    const betterThanCount = allUsersStats.filter((p) => p > points).length;
    const rankPercentage = totalUsers > 1 ? Math.round(betterThanCount / (totalUsers - 1) * 100) : 0;
    const lastMonthStart = /* @__PURE__ */ new Date();
    lastMonthStart.setMonth(lastMonthStart.getMonth() - 1);
    lastMonthStart.setDate(1);
    lastMonthStart.setHours(0, 0, 0, 0);
    const thisMonthStart = /* @__PURE__ */ new Date();
    thisMonthStart.setDate(1);
    thisMonthStart.setHours(0, 0, 0, 0);
    const lastMonthDuration = await StudySession_default.aggregate([
      {
        $match: {
          userId,
          startTime: { $gte: lastMonthStart, $lt: thisMonthStart }
        }
      },
      { $group: { _id: null, total: { $sum: "$duration" } } }
    ]).then((result) => result[0]?.total || 0);
    const thisMonthDuration = await StudySession_default.aggregate([
      {
        $match: {
          userId,
          startTime: { $gte: thisMonthStart }
        }
      },
      { $group: { _id: null, total: { $sum: "$duration" } } }
    ]).then((result) => result[0]?.total || 0);
    const durationChange = lastMonthDuration > 0 ? Math.round((thisMonthDuration - lastMonthDuration) / lastMonthDuration * 100) : 0;
    res.json({
      totalStudyTime: {
        hours: totalHours,
        seconds: totalDuration,
        display: `${totalHours}h`,
        change: durationChange
      },
      completedCourses: {
        count: completedCourses,
        change: 0
        // TODO: 实现课程完成数的月度对比
      },
      points: {
        total: points,
        display: points.toLocaleString(),
        change: 0
        // TODO: 实现积分的月度对比
      },
      ranking: {
        percentage: rankPercentage,
        display: `Top ${rankPercentage}%`,
        change: 0
        // TODO: 实现排名的月度对比
      }
    });
  } catch (error) {
    console.error("\u83B7\u53D6\u7528\u6237\u7EDF\u8BA1\u6570\u636E\u5931\u8D25", error);
    res.status(500).json({ message: "\u83B7\u53D6\u7EDF\u8BA1\u6570\u636E\u5931\u8D25" });
  }
});
var users_default = router13;

// src/routes/diagnostic.ts
var import_express14 = require("express");

// src/services/aiDiagnosticService.ts
init_StudySession();
init_KnowledgePoint();
async function generateDiagnosticReport(userId) {
  const [userProgress, studySessions, wrongQuestions] = await Promise.all([
    UserProgress_default.find({ userId }).lean(),
    StudySession_default.find({ userId }).sort({ startTime: -1 }).limit(100).lean(),
    WrongQuestion_default.find({ userId }).lean()
  ]);
  const issues = [];
  const recommendations = [];
  const stagnationIssue = detectLearningStagnation(studySessions);
  if (stagnationIssue) {
    issues.push(stagnationIssue);
    recommendations.push({
      priority: "high",
      action: "\u91CD\u65B0\u5F00\u59CB\u5B66\u4E60\uFF0C\u9009\u62E9\u4E00\u95E8\u7B80\u5355\u7684\u8BFE\u7A0B\u6062\u590D\u72B6\u6001",
      reason: "\u957F\u65F6\u95F4\u672A\u5B66\u4E60\u4F1A\u5BFC\u81F4\u77E5\u8BC6\u9057\u5FD8\uFF0C\u5EFA\u8BAE\u5C3D\u5FEB\u6062\u590D\u5B66\u4E60\u8282\u594F"
    });
  }
  const failureIssues = await detectRepeatedFailures(userProgress, wrongQuestions);
  if (failureIssues.length > 0) {
    issues.push(...failureIssues);
    for (const issue of failureIssues) {
      if (issue.affectedPoints && issue.affectedPoints.length > 0) {
        const pointTitles = await getPointTitles(issue.affectedPoints);
        recommendations.push({
          priority: "high",
          action: `\u91CD\u70B9\u590D\u4E60\uFF1A${pointTitles.join("\u3001")}`,
          reason: "\u8FD9\u4E9B\u77E5\u8BC6\u70B9\u7684\u9519\u9898\u7387\u8F83\u9AD8\uFF0C\u5EFA\u8BAE\u5148\u56DE\u987E\u524D\u7F6E\u77E5\u8BC6\u518D\u91CD\u65B0\u5B66\u4E60",
          relatedPointIds: issue.affectedPoints
        });
      }
    }
  }
  const gapIssues = await detectKnowledgeGaps(userProgress);
  if (gapIssues.length > 0) {
    issues.push(...gapIssues);
    recommendations.push({
      priority: "medium",
      action: "\u6309\u63A8\u8350\u8DEF\u5F84\u5B66\u4E60\uFF0C\u786E\u4FDD\u524D\u7F6E\u77E5\u8BC6\u624E\u5B9E",
      reason: "\u53D1\u73B0\u90E8\u5206\u8FDB\u9636\u8BFE\u7A0B\u5B66\u4E60\u56F0\u96BE\uFF0C\u53EF\u80FD\u662F\u57FA\u7840\u77E5\u8BC6\u672A\u638C\u63E1\u7262\u56FA"
    });
  }
  const timeIssue = detectTimeAnomaly(studySessions);
  if (timeIssue) {
    issues.push(timeIssue);
    recommendations.push({
      priority: "medium",
      action: "\u8C03\u6574\u5B66\u4E60\u8BA1\u5212\uFF0C\u5EFA\u8BAE\u6BCF\u5929\u5B66\u4E6030-60\u5206\u949F\uFF0C\u4FDD\u6301\u89C4\u5F8B",
      reason: "\u5B66\u4E60\u65F6\u95F4\u4E0D\u89C4\u5F8B\u6216\u5355\u6B21\u5B66\u4E60\u65F6\u95F4\u8FC7\u957F/\u8FC7\u77ED\uFF0C\u5F71\u54CD\u5B66\u4E60\u6548\u679C"
    });
  }
  const engagementIssue = detectLowEngagement(userProgress, studySessions);
  if (engagementIssue) {
    issues.push(engagementIssue);
    recommendations.push({
      priority: "low",
      action: "\u5C1D\u8BD5\u6311\u6218\u65B0\u7684\u5B66\u79D1\u6216\u53C2\u4E0E\u6D4B\u9A8C\uFF0C\u63D0\u5347\u5B66\u4E60\u5174\u8DA3",
      reason: "\u5B66\u4E60\u6D3B\u8DC3\u5EA6\u8F83\u4F4E\uFF0C\u53EF\u80FD\u5BF9\u5F53\u524D\u8BFE\u7A0B\u7F3A\u4E4F\u5174\u8DA3"
    });
  }
  const overallStatus = determineOverallStatus(issues);
  const motivationalMessage = generateMotivationalMessage(overallStatus, userProgress);
  return {
    userId: userId.toString(),
    generatedAt: /* @__PURE__ */ new Date(),
    overallStatus,
    issues,
    recommendations,
    motivationalMessage
  };
}
function detectLearningStagnation(studySessions) {
  if (studySessions.length === 0) {
    return {
      type: "learning_stagnation",
      severity: "high",
      title: "\u5C1A\u672A\u5F00\u59CB\u5B66\u4E60",
      description: "\u60A8\u8FD8\u6CA1\u6709\u5F00\u59CB\u5B66\u4E60\u4EFB\u4F55\u8BFE\u7A0B\uFF0C\u5FEB\u6765\u5F00\u542F\u60A8\u7684\u5B66\u4E60\u4E4B\u65C5\u5427\uFF01"
    };
  }
  const lastSession = studySessions[0];
  const daysSinceLastStudy = Math.floor(
    (Date.now() - new Date(lastSession.startTime).getTime()) / (1e3 * 60 * 60 * 24)
  );
  if (daysSinceLastStudy > 14) {
    return {
      type: "learning_stagnation",
      severity: "high",
      title: "\u5B66\u4E60\u5DF2\u505C\u6EDE\u8D85\u8FC72\u5468",
      description: `\u60A8\u5DF2\u7ECF${daysSinceLastStudy}\u5929\u6CA1\u6709\u5B66\u4E60\u4E86\uFF0C\u957F\u65F6\u95F4\u4E0D\u5B66\u4E60\u4F1A\u5BFC\u81F4\u77E5\u8BC6\u9057\u5FD8\u3002`
    };
  } else if (daysSinceLastStudy > 7) {
    return {
      type: "learning_stagnation",
      severity: "medium",
      title: "\u5B66\u4E60\u5DF2\u505C\u6EDE1\u5468",
      description: `\u60A8\u5DF2\u7ECF${daysSinceLastStudy}\u5929\u6CA1\u6709\u5B66\u4E60\u4E86\uFF0C\u5EFA\u8BAE\u5C3D\u5FEB\u6062\u590D\u5B66\u4E60\u3002`
    };
  } else if (daysSinceLastStudy > 3) {
    return {
      type: "learning_stagnation",
      severity: "low",
      title: "\u5B66\u4E60\u95F4\u9694\u8F83\u957F",
      description: `\u60A8\u5DF2\u7ECF${daysSinceLastStudy}\u5929\u6CA1\u6709\u5B66\u4E60\u4E86\uFF0C\u8BB0\u5F97\u4FDD\u6301\u5B66\u4E60\u8FDE\u7EED\u6027\u54E6\u3002`
    };
  }
  return null;
}
async function detectRepeatedFailures(userProgress, wrongQuestions) {
  const issues = [];
  const errorsByPoint = /* @__PURE__ */ new Map();
  wrongQuestions.forEach((wq) => {
    if (!wq.mastered) {
      const count = errorsByPoint.get(wq.pointId) || 0;
      errorsByPoint.set(wq.pointId, count + 1);
    }
  });
  const highErrorPoints = [];
  errorsByPoint.forEach((count, pointId) => {
    if (count >= 3) {
      highErrorPoints.push(pointId);
    }
  });
  if (highErrorPoints.length > 0) {
    issues.push({
      type: "repeated_failures",
      severity: "high",
      title: "\u90E8\u5206\u77E5\u8BC6\u70B9\u638C\u63E1\u4E0D\u7262",
      description: `\u53D1\u73B0${highErrorPoints.length}\u4E2A\u77E5\u8BC6\u70B9\u7684\u9519\u9898\u6570\u91CF\u8F83\u591A\uFF0C\u5EFA\u8BAE\u91CD\u70B9\u590D\u4E60\u3002`,
      affectedPoints: highErrorPoints
    });
  }
  const lowScorePoints = userProgress.filter((p) => p.score !== void 0 && p.score < 60).map((p) => p.pointId);
  if (lowScorePoints.length > 0) {
    issues.push({
      type: "repeated_failures",
      severity: "medium",
      title: "\u90E8\u5206\u8BFE\u7A0B\u6D4B\u9A8C\u5206\u6570\u8F83\u4F4E",
      description: `\u6709${lowScorePoints.length}\u95E8\u8BFE\u7A0B\u7684\u6D4B\u9A8C\u5206\u6570\u4F4E\u4E8E60\u5206\uFF0C\u5EFA\u8BAE\u91CD\u65B0\u5B66\u4E60\u3002`,
      affectedPoints: lowScorePoints
    });
  }
  return issues;
}
async function detectKnowledgeGaps(userProgress) {
  const issues = [];
  const allPoints = await KnowledgePoint_default.find({}).select("id prerequisites").lean();
  const completedPoints = new Set(
    userProgress.filter((p) => p.status === "completed").map((p) => p.pointId)
  );
  const skippedPrerequisites = [];
  userProgress.forEach((progress) => {
    if (progress.status === "in_progress" || progress.status === "completed") {
      const point = allPoints.find((p) => p.id === progress.pointId);
      if (point && point.prerequisites.length > 0) {
        point.prerequisites.forEach((preId) => {
          if (!completedPoints.has(preId) && !skippedPrerequisites.includes(preId)) {
            skippedPrerequisites.push(preId);
          }
        });
      }
    }
  });
  if (skippedPrerequisites.length > 0) {
    issues.push({
      type: "knowledge_gap",
      severity: "medium",
      title: "\u5B58\u5728\u77E5\u8BC6\u7F3A\u53E3",
      description: `\u53D1\u73B0${skippedPrerequisites.length}\u95E8\u524D\u7F6E\u8BFE\u7A0B\u672A\u5B8C\u6210\uFF0C\u53EF\u80FD\u5F71\u54CD\u540E\u7EED\u5B66\u4E60\u6548\u679C\u3002`,
      affectedPoints: skippedPrerequisites
    });
  }
  return issues;
}
function detectTimeAnomaly(studySessions) {
  if (studySessions.length < 5) {
    return null;
  }
  const recentSessions = studySessions.slice(0, 20);
  const durations = recentSessions.map((s) => s.duration || 0);
  const avgDuration = durations.reduce((sum, d) => sum + d, 0) / durations.length;
  const shortSessions = durations.filter((d) => d < 300).length;
  if (shortSessions / durations.length > 0.5) {
    return {
      type: "time_anomaly",
      severity: "medium",
      title: "\u5355\u6B21\u5B66\u4E60\u65F6\u95F4\u8FC7\u77ED",
      description: "\u8D85\u8FC7\u4E00\u534A\u7684\u5B66\u4E60\u65F6\u957F\u4E0D\u8DB35\u5206\u949F\uFF0C\u53EF\u80FD\u5B66\u4E60\u6548\u679C\u4E0D\u4F73\u3002"
    };
  }
  const longSessions = durations.filter((d) => d > 7200).length;
  if (longSessions / durations.length > 0.3) {
    return {
      type: "time_anomaly",
      severity: "low",
      title: "\u5355\u6B21\u5B66\u4E60\u65F6\u95F4\u8FC7\u957F",
      description: "\u90E8\u5206\u5B66\u4E60\u65F6\u957F\u8D85\u8FC72\u5C0F\u65F6\uFF0C\u5EFA\u8BAE\u9002\u5F53\u4F11\u606F\uFF0C\u907F\u514D\u75B2\u52B3\u3002"
    };
  }
  return null;
}
function detectLowEngagement(userProgress, studySessions) {
  const totalCompleted = userProgress.filter((p) => p.status === "completed").length;
  const totalInProgress = userProgress.filter((p) => p.status === "in_progress").length;
  const recentSessionCount = studySessions.slice(0, 7).length;
  if (recentSessionCount < 2 && totalCompleted > 0) {
    return {
      type: "low_engagement",
      severity: "low",
      title: "\u5B66\u4E60\u9891\u7387\u504F\u4F4E",
      description: "\u6700\u8FD1\u4E00\u5468\u5B66\u4E60\u6B21\u6570\u8F83\u5C11\uFF0C\u5EFA\u8BAE\u589E\u52A0\u5B66\u4E60\u9891\u7387\u4EE5\u4FDD\u6301\u8FDE\u7EED\u6027\u3002"
    };
  }
  if (totalInProgress > 5 && totalCompleted < totalInProgress / 2) {
    return {
      type: "low_engagement",
      severity: "medium",
      title: "\u8BFE\u7A0B\u5B8C\u6210\u7387\u8F83\u4F4E",
      description: `\u6709${totalInProgress}\u95E8\u8BFE\u7A0B\u6B63\u5728\u5B66\u4E60\uFF0C\u4F46\u5B8C\u6210\u7684\u8F83\u5C11\u3002\u5EFA\u8BAE\u96C6\u4E2D\u7CBE\u529B\u5B8C\u6210\u51E0\u95E8\u8BFE\u7A0B\u3002`
    };
  }
  return null;
}
function determineOverallStatus(issues) {
  if (issues.length === 0) {
    return "excellent";
  }
  const highSeverityCount = issues.filter((i) => i.severity === "high").length;
  const mediumSeverityCount = issues.filter((i) => i.severity === "medium").length;
  if (highSeverityCount >= 2) {
    return "critical";
  } else if (highSeverityCount === 1) {
    return "warning";
  } else if (mediumSeverityCount >= 2) {
    return "normal";
  } else {
    return "good";
  }
}
function generateMotivationalMessage(status, userProgress) {
  const completedCount = userProgress.filter((p) => p.status === "completed").length;
  const messages = {
    excellent: [
      "\u592A\u68D2\u4E86\uFF01\u60A8\u7684\u5B66\u4E60\u72B6\u6001\u975E\u5E38\u597D\uFF0C\u7EE7\u7EED\u4FDD\u6301\u8FD9\u79CD\u8282\u594F\uFF01\u{1F4AA}",
      "\u5B66\u4E60\u72B6\u6001\u6781\u4F73\uFF01\u60A8\u6B63\u5728\u7A33\u6B65\u524D\u8FDB\uFF0C\u52A0\u6CB9\uFF01\u{1F389}",
      "\u5B8C\u7F8E\u7684\u5B66\u4E60\u72B6\u6001\uFF01\u60A8\u662F\u5B66\u4E60\u7684\u699C\u6837\uFF01\u{1F31F}"
    ],
    good: [
      "\u5B66\u4E60\u72B6\u6001\u4E0D\u9519\uFF01\u7A0D\u4F5C\u8C03\u6574\u4F1A\u66F4\u597D\u3002\u{1F60A}",
      "\u60A8\u505A\u5F97\u5F88\u597D\uFF01\u6CE8\u610F\u4E00\u4E0B\u63D0\u793A\u7684\u5C0F\u95EE\u9898\u5C31\u66F4\u5B8C\u7F8E\u4E86\u3002\u{1F44D}",
      `\u5DF2\u5B8C\u6210${completedCount}\u4E2A\u77E5\u8BC6\u70B9\uFF0C\u7EE7\u7EED\u52A0\u6CB9\uFF01\u{1F4AA}`
    ],
    normal: [
      "\u5B66\u4E60\u72B6\u6001\u6B63\u5E38\uFF0C\u4F46\u8FD8\u6709\u63D0\u5347\u7A7A\u95F4\u3002\u770B\u770B\u8BCA\u65AD\u5EFA\u8BAE\u5427\uFF01\u{1F4CA}",
      "\u60A8\u7684\u5B66\u4E60\u8FDB\u5EA6\u6B63\u5E38\uFF0C\u6CE8\u610F\u89E3\u51B3\u53D1\u73B0\u7684\u95EE\u9898\u3002\u2728",
      "\u4FDD\u6301\u5B66\u4E60\u72B6\u6001\uFF0C\u6309\u5EFA\u8BAE\u8C03\u6574\u4F1A\u66F4\u597D\uFF01\u{1F3AF}"
    ],
    warning: [
      "\u5B66\u4E60\u72B6\u6001\u9700\u8981\u5173\u6CE8\uFF01\u8BF7\u67E5\u770B\u8BCA\u65AD\u5EFA\u8BAE\u53CA\u65F6\u8C03\u6574\u3002\u26A0\uFE0F",
      "\u53D1\u73B0\u4E00\u4E9B\u9700\u8981\u6CE8\u610F\u7684\u95EE\u9898\uFF0C\u5EFA\u8BAE\u5C3D\u5FEB\u5904\u7406\u3002\u{1F4A1}",
      "\u5B66\u4E60\u9047\u5230\u4E86\u4E00\u4E9B\u6311\u6218\uFF0C\u522B\u62C5\u5FC3\uFF0C\u6211\u4EEC\u5E2E\u60A8\u5206\u6790\u4E86\u539F\u56E0\uFF01\u{1F50D}"
    ],
    critical: [
      "\u5B66\u4E60\u72B6\u6001\u9700\u8981\u7ACB\u5373\u8C03\u6574\uFF01\u8BF7\u91CD\u89C6\u8BCA\u65AD\u5EFA\u8BAE\u3002\u{1F6A8}",
      "\u53D1\u73B0\u591A\u4E2A\u4E25\u91CD\u95EE\u9898\uFF0C\u8BF7\u5C3D\u5FEB\u6309\u5EFA\u8BAE\u8C03\u6574\u5B66\u4E60\u8BA1\u5212\u3002\u26A1",
      "\u522B\u7070\u5FC3\uFF01\u95EE\u9898\u867D\u7136\u591A\uFF0C\u4F46\u90FD\u6709\u89E3\u51B3\u65B9\u6848\u3002\u8BA9\u6211\u4EEC\u4E00\u8D77\u6539\u8FDB\uFF01\u{1F4AA}"
    ]
  };
  const messageList = messages[status];
  return messageList[Math.floor(Math.random() * messageList.length)];
}
async function getPointTitles(pointIds) {
  const points = await KnowledgePoint_default.find({ id: { $in: pointIds } }).select("title").lean();
  return points.map((p) => p.title);
}

// src/routes/diagnostic.ts
var router14 = (0, import_express14.Router)();
router14.get("/report", authMiddleware, async (req, res) => {
  try {
    const user = req.user;
    const userId = user._id;
    if (!userId) {
      return res.status(401).json({ message: "\u672A\u6388\u6743" });
    }
    const report = await generateDiagnosticReport(userId);
    res.json({
      success: true,
      report
    });
  } catch (error) {
    console.error("\u751F\u6210\u8BCA\u65AD\u62A5\u544A\u5931\u8D25:", error);
    res.status(500).json({ message: "\u751F\u6210\u8BCA\u65AD\u62A5\u544A\u65F6\u53D1\u751F\u9519\u8BEF" });
  }
});
var diagnostic_default = router14;

// src/routes/ai-quiz-generator.ts
var import_express15 = require("express");
var import_mongoose9 = require("mongoose");

// src/services/aiQuizGenerator.ts
init_KnowledgePoint();
async function generatePersonalizedQuiz(userId, request) {
  const questionTypes = request.questionTypes || ["single", "multiple", "boolean"];
  const weaknessAnalysis = await analyzeUserWeaknesses(userId, request.subject);
  const prompt = buildQuizGenerationPrompt(request, weaknessAnalysis);
  const aiResponse = await getChatCompletion(
    [
      {
        role: "system",
        content: "\u4F60\u662F\u4E00\u4F4D\u4E13\u4E1A\u7684\u6559\u80B2\u6D4B\u8BC4\u4E13\u5BB6\uFF0C\u64C5\u957F\u6839\u636E\u5B66\u751F\u7684\u8584\u5F31\u70B9\u8BBE\u8BA1\u4E2A\u6027\u5316\u7EC3\u4E60\u9898\u3002\u751F\u6210\u7684\u9898\u76EE\u5E94\u8BE5\u7CBE\u51C6\u3001\u6709\u9488\u5BF9\u6027\uFF0C\u96BE\u5EA6\u9002\u4E2D\u3002"
      },
      {
        role: "user",
        content: prompt
      }
    ],
    { maxTokens: 4e3 }
  );
  const questions = parseAIQuizResponse(aiResponse, request.difficulty);
  return {
    questions,
    totalGenerated: questions.length,
    subject: request.subject,
    difficulty: request.difficulty,
    generatedAt: /* @__PURE__ */ new Date()
  };
}
async function analyzeUserWeaknesses(userId, subject) {
  const wrongQuestions = await WrongQuestion_default.find({
    userId,
    subject,
    mastered: false
  }).select("pointTitle question").limit(20).lean();
  const pointFrequency = /* @__PURE__ */ new Map();
  for (const wq of wrongQuestions) {
    const count = pointFrequency.get(wq.pointTitle) || 0;
    pointFrequency.set(wq.pointTitle, count + 1);
  }
  const weakestPoints = Array.from(pointFrequency.entries()).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([point]) => point);
  const allSubjectPoints = await KnowledgePoint_default.find({ subject }).select("id title").lean();
  const userProgress = await UserProgress_default.find({
    userId,
    pointId: { $in: allSubjectPoints.map((p) => p.id) }
  }).lean();
  const lowScorePoints = userProgress.filter((p) => p.bestScore && p.bestScore < 70).sort((a, b) => (a.bestScore || 100) - (b.bestScore || 100)).slice(0, 3).map((p) => {
    const point = allSubjectPoints.find((pt) => pt.id === p.pointId);
    return point?.title || "";
  }).filter(Boolean);
  return {
    errorPronePoints: weakestPoints,
    lowScorePoints,
    totalErrors: wrongQuestions.length
  };
}
function buildQuizGenerationPrompt(request, weakness) {
  const weakPointsList = [.../* @__PURE__ */ new Set([...request.weakPoints, ...weakness.errorPronePoints])];
  return `\u8BF7\u4E3A\u4EE5\u4E0B\u5B66\u4E60\u9700\u6C42\u751F\u6210 ${request.count} \u9053\u7EC3\u4E60\u9898\uFF1A

**\u5B66\u79D1**: ${request.subject}
**\u96BE\u5EA6**: ${request.difficulty}/5
**\u91CD\u70B9\u8003\u5BDF\u77E5\u8BC6\u70B9**:
${weakPointsList.map((point, idx) => `${idx + 1}. ${point}`).join("\n")}

**\u7528\u6237\u8584\u5F31\u73AF\u8282**:
- \u6700\u5BB9\u6613\u51FA\u9519\u7684\u77E5\u8BC6\u70B9: ${weakness.errorPronePoints.join("\u3001") || "\u65E0"}
- \u5F97\u5206\u8F83\u4F4E\u7684\u77E5\u8BC6\u70B9: ${weakness.lowScorePoints.join("\u3001") || "\u65E0"}
- \u7D2F\u8BA1\u9519\u9898\u6570: ${weakness.totalErrors} \u9053

**\u8981\u6C42**:
1. \u9898\u578B\u5206\u5E03\uFF1A\u5355\u9009\u9898\u3001\u591A\u9009\u9898\u3001\u5224\u65AD\u9898\u5747\u53EF
2. \u6BCF\u9053\u9898\u90FD\u8981\u7D27\u5BC6\u56F4\u7ED5\u4E0A\u8FF0\u8584\u5F31\u77E5\u8BC6\u70B9\u8BBE\u8BA1
3. \u96BE\u5EA6\u7B49\u7EA7\u4E3A ${request.difficulty} \u7EA7\uFF081=\u57FA\u7840\uFF0C5=\u56F0\u96BE\uFF09
4. \u6BCF\u9053\u9898\u5FC5\u987B\u5305\u542B\u8BE6\u7EC6\u7684\u89E3\u6790\u8BF4\u660E

**\u8F93\u51FA\u683C\u5F0F** (\u4E25\u683C\u6309\u7167\u4EE5\u4E0BJSON\u683C\u5F0F):
\`\`\`json
{
  "questions": [
    {
      "type": "single",
      "question": "\u9898\u76EE\u5185\u5BB9",
      "options": ["\u9009\u9879A", "\u9009\u9879B", "\u9009\u9879C", "\u9009\u9879D"],
      "correctAnswer": 0,
      "explanation": "\u8BE6\u7EC6\u89E3\u6790",
      "keywords": ["\u5173\u952E\u8BCD1", "\u5173\u952E\u8BCD2"]
    },
    {
      "type": "multiple",
      "question": "\u591A\u9009\u9898\u5185\u5BB9",
      "options": ["\u9009\u9879A", "\u9009\u9879B", "\u9009\u9879C", "\u9009\u9879D"],
      "correctAnswer": [0, 2],
      "explanation": "\u8BE6\u7EC6\u89E3\u6790",
      "keywords": ["\u5173\u952E\u8BCD1", "\u5173\u952E\u8BCD2"]
    },
    {
      "type": "boolean",
      "question": "\u5224\u65AD\u9898\u5185\u5BB9",
      "options": ["\u6B63\u786E", "\u9519\u8BEF"],
      "correctAnswer": 0,
      "explanation": "\u8BE6\u7EC6\u89E3\u6790",
      "keywords": ["\u5173\u952E\u8BCD1"]
    }
  ]
}
\`\`\`

\u8BF7\u786E\u4FDD\u9898\u76EE\u8D28\u91CF\u9AD8\u3001\u6709\u9488\u5BF9\u6027\uFF0C\u80FD\u591F\u5E2E\u52A9\u5B66\u751F\u5F3A\u5316\u8584\u5F31\u73AF\u8282\u3002`;
}
function parseAIQuizResponse(aiResponse, difficulty) {
  try {
    const jsonMatch = aiResponse.match(/```json\s*([\s\S]*?)\s*```/) || aiResponse.match(/{[\s\S]*}/);
    if (!jsonMatch) {
      throw new Error("\u65E0\u6CD5\u4ECEAI\u54CD\u5E94\u4E2D\u63D0\u53D6JSON");
    }
    const jsonStr = jsonMatch[1] || jsonMatch[0];
    const parsed = JSON.parse(jsonStr);
    if (!parsed.questions || !Array.isArray(parsed.questions)) {
      throw new Error("AI\u54CD\u5E94\u683C\u5F0F\u4E0D\u6B63\u786E");
    }
    return parsed.questions.map((q) => ({
      type: q.type || "single",
      question: q.question,
      options: q.options || [],
      correctAnswer: q.correctAnswer,
      explanation: q.explanation,
      difficulty,
      keywords: q.keywords || []
    }));
  } catch (error) {
    console.error("\u89E3\u6790AI\u51FA\u9898\u54CD\u5E94\u5931\u8D25:", error);
    return [];
  }
}
async function generateQuickQuiz(pointId, count = 5) {
  const point = await KnowledgePoint_default.findOne({ id: pointId }).select("title subject difficulty").lean();
  if (!point) {
    throw new Error("\u77E5\u8BC6\u70B9\u4E0D\u5B58\u5728");
  }
  const prompt = `\u8BF7\u4E3A\u4EE5\u4E0B\u77E5\u8BC6\u70B9\u751F\u6210 ${count} \u9053\u7EC3\u4E60\u9898\uFF1A

**\u77E5\u8BC6\u70B9**: ${point.title}
**\u5B66\u79D1**: ${point.subject}
**\u96BE\u5EA6**: ${point.difficulty}/5

**\u8981\u6C42**:
1. \u9898\u578B\u591A\u6837\u5316\uFF08\u5355\u9009\u3001\u591A\u9009\u3001\u5224\u65AD\uFF09
2. \u7D27\u6263\u77E5\u8BC6\u70B9\u6838\u5FC3\u6982\u5FF5
3. \u5305\u542B\u8BE6\u7EC6\u89E3\u6790

**\u8F93\u51FA\u683C\u5F0F** (JSON):
\`\`\`json
{
  "questions": [
    {
      "type": "single",
      "question": "...",
      "options": ["A", "B", "C", "D"],
      "correctAnswer": 0,
      "explanation": "...",
      "keywords": ["..."]
    }
  ]
}
\`\`\``;
  const aiResponse = await getChatCompletion(
    [
      {
        role: "system",
        content: "\u4F60\u662F\u4E00\u4F4D\u4E13\u4E1A\u7684\u9898\u5E93\u8BBE\u8BA1\u4E13\u5BB6\u3002"
      },
      {
        role: "user",
        content: prompt
      }
    ],
    { maxTokens: 3e3 }
  );
  return parseAIQuizResponse(aiResponse, point.difficulty);
}
async function generateSimilarQuestions(userId, wrongQuestionId, count = 3) {
  const wrongQuestion = await WrongQuestion_default.findById(wrongQuestionId).lean();
  if (!wrongQuestion) {
    throw new Error("\u9519\u9898\u4E0D\u5B58\u5728");
  }
  const prompt = `\u7528\u6237\u5728\u4EE5\u4E0B\u9898\u76EE\u4E0A\u51FA\u9519\u4E86\uFF0C\u8BF7\u751F\u6210 ${count} \u9053\u7C7B\u4F3C\u7684\u7EC3\u4E60\u9898\u5E2E\u52A9\u5DE9\u56FA\uFF1A

**\u539F\u9898\u76EE**: ${wrongQuestion.question}
**\u77E5\u8BC6\u70B9**: ${wrongQuestion.pointTitle}
**\u5B66\u79D1**: ${wrongQuestion.subject}

**\u8981\u6C42**:
1. \u9898\u76EE\u7C7B\u578B\u4E0E\u539F\u9898\u76F8\u540C\uFF08${wrongQuestion.type}\uFF09
2. \u8003\u5BDF\u76F8\u540C\u7684\u77E5\u8BC6\u70B9\u548C\u6982\u5FF5
3. \u96BE\u5EA6\u76F8\u5F53\u6216\u7565\u4F4E
4. \u907F\u514D\u4E0E\u539F\u9898\u5B8C\u5168\u76F8\u540C

**\u8F93\u51FA\u683C\u5F0F** (JSON):
\`\`\`json
{
  "questions": [...]
}
\`\`\``;
  const aiResponse = await getChatCompletion(
    [
      {
        role: "system",
        content: "\u4F60\u662F\u4E00\u4F4D\u64C5\u957F\u4E3E\u4E00\u53CD\u4E09\u7684\u6559\u80B2\u4E13\u5BB6\u3002"
      },
      {
        role: "user",
        content: prompt
      }
    ],
    { maxTokens: 2500 }
  );
  return parseAIQuizResponse(aiResponse, wrongQuestion.difficulty || 3);
}

// src/routes/ai-quiz-generator.ts
var router15 = (0, import_express15.Router)();
router15.post("/generate", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?._id;
    if (!userId) {
      return res.status(401).json({ message: "\u672A\u6388\u6743" });
    }
    const request = {
      subject: req.body.subject,
      weakPoints: req.body.weakPoints || [],
      difficulty: req.body.difficulty || 3,
      count: Math.min(req.body.count || 10, 20),
      // 最多20题
      questionTypes: req.body.questionTypes
    };
    if (!request.subject) {
      return res.status(400).json({
        success: false,
        message: "\u7F3A\u5C11\u5FC5\u586B\u5B57\u6BB5: subject"
      });
    }
    const result = await generatePersonalizedQuiz(userId, request);
    res.json({
      success: true,
      data: result
    });
  } catch (error) {
    console.error("\u751F\u6210AI\u9898\u76EE\u5931\u8D25:", error);
    res.status(500).json({
      success: false,
      message: "AI\u51FA\u9898\u5931\u8D25",
      error: error.message
    });
  }
});
router15.post("/quick/:pointId", authMiddleware, async (req, res) => {
  try {
    const { pointId } = req.params;
    const count = Math.min(parseInt(req.body.count) || 5, 10);
    const questions = await generateQuickQuiz(pointId, count);
    res.json({
      success: true,
      questions
    });
  } catch (error) {
    console.error("\u5FEB\u901F\u51FA\u9898\u5931\u8D25:", error);
    res.status(500).json({
      success: false,
      message: "\u5FEB\u901F\u51FA\u9898\u5931\u8D25",
      error: error.message
    });
  }
});
router15.post("/similar/:wrongQuestionId", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?._id;
    const wrongQuestionId = new import_mongoose9.Types.ObjectId(req.params.wrongQuestionId);
    const count = Math.min(parseInt(req.body.count) || 3, 5);
    const questions = await generateSimilarQuestions(userId, wrongQuestionId, count);
    res.json({
      success: true,
      questions
    });
  } catch (error) {
    console.error("\u751F\u6210\u76F8\u4F3C\u9898\u76EE\u5931\u8D25:", error);
    res.status(500).json({
      success: false,
      message: "\u751F\u6210\u76F8\u4F3C\u9898\u76EE\u5931\u8D25",
      error: error.message
    });
  }
});
var ai_quiz_generator_default = router15;

// src/routes/intelligent-path.ts
var import_express16 = require("express");
init_KnowledgePoint();
var router16 = (0, import_express16.Router)();
router16.get("/recommend", authMiddleware, async (req, res) => {
  try {
    const user = req.user;
    const userId = user._id;
    if (!userId) {
      return res.status(401).json({ message: "\u672A\u6388\u6743" });
    }
    const recommendations = await generateIntelligentPath(userId);
    const detailedRecommendations = await Promise.all(
      recommendations.map(async (rec) => {
        const point = await KnowledgePoint_default.findOne({ id: rec.pointId }).select("title subject difficulty estimatedTime").lean();
        return {
          ...rec,
          title: point?.title,
          subject: point?.subject,
          difficulty: point?.difficulty,
          estimatedTime: point?.estimatedTime
        };
      })
    );
    res.json({
      success: true,
      recommendations: detailedRecommendations,
      totalCount: recommendations.length,
      algorithm: "intelligent_ml_based"
    });
  } catch (error) {
    console.error("\u751F\u6210\u667A\u80FD\u8DEF\u5F84\u5931\u8D25:", error);
    res.status(500).json({
      success: false,
      message: "\u751F\u6210\u667A\u80FD\u5B66\u4E60\u8DEF\u5F84\u65F6\u53D1\u751F\u9519\u8BEF",
      error: error.message
    });
  }
});
router16.post("/recalibrate", authMiddleware, async (req, res) => {
  try {
    const user = req.user;
    const userId = user._id;
    const recentlyCompletedCount = parseInt(req.body.recentlyCompletedCount) || 0;
    if (!userId) {
      return res.status(401).json({ message: "\u672A\u6388\u6743" });
    }
    const needsRecalibration = recentlyCompletedCount >= 3;
    res.json({
      success: true,
      needsRecalibration,
      message: needsRecalibration ? "\u5EFA\u8BAE\u91CD\u65B0\u83B7\u53D6\u5B66\u4E60\u8DEF\u5F84\uFF0C\u7CFB\u7EDF\u5DF2\u6839\u636E\u60A8\u7684\u8FDB\u6B65\u8C03\u6574\u63A8\u8350" : "\u5F53\u524D\u8DEF\u5F84\u4ECD\u7136\u6709\u6548"
    });
  } catch (error) {
    console.error("\u8DEF\u5F84\u6821\u51C6\u68C0\u67E5\u5931\u8D25:", error);
    res.status(500).json({
      success: false,
      message: "\u6821\u51C6\u68C0\u67E5\u5931\u8D25",
      error: error.message
    });
  }
});
var intelligent_path_default = router16;

// src/routes/learning-companion.ts
var import_express17 = require("express");

// src/services/learningCompanionService.ts
init_StudySession();
init_KnowledgePoint();
async function generateWeeklySummary(userId) {
  const user = await User_default.findById(userId).select("username").lean();
  const userName = user?.username || "\u540C\u5B66";
  const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1e3);
  const thisWeekProgress = await UserProgress_default.find({
    userId,
    status: "completed",
    completedAt: { $gte: weekAgo }
  }).lean();
  const thisWeekSessions = await StudySession_default.find({
    userId,
    startTime: { $gte: weekAgo }
  }).lean();
  const thisWeekStudyTime = thisWeekSessions.reduce((sum, s) => sum + (s.duration || 0), 0);
  const hours = Math.floor(thisWeekStudyTime / 3600);
  const minutes = Math.floor(thisWeekStudyTime % 3600 / 60);
  const lastWeekStart = new Date(Date.now() - 14 * 24 * 60 * 60 * 1e3);
  const lastWeekEnd = weekAgo;
  const lastWeekProgress = await UserProgress_default.find({
    userId,
    status: "completed",
    completedAt: { $gte: lastWeekStart, $lt: lastWeekEnd }
  }).lean();
  const lastWeekSessions = await StudySession_default.find({
    userId,
    startTime: { $gte: lastWeekStart, $lt: lastWeekEnd }
  }).lean();
  const lastWeekStudyTime = lastWeekSessions.reduce((sum, s) => sum + (s.duration || 0), 0);
  const pointsImprovement = lastWeekProgress.length > 0 ? Math.round((thisWeekProgress.length - lastWeekProgress.length) / lastWeekProgress.length * 100) : 0;
  const timeImprovement = lastWeekStudyTime > 0 ? Math.round((thisWeekStudyTime - lastWeekStudyTime) / lastWeekStudyTime * 100) : 0;
  const completedPointIds = thisWeekProgress.map((p) => p.pointId);
  const completedPoints = await KnowledgePoint_default.find({ id: { $in: completedPointIds } }).select("title subject").lean();
  const prompt = `\u4F5C\u4E3A ${userName} \u7684AI\u5B66\u4E60\u4F19\u4F34\uFF0C\u8BF7\u751F\u6210\u4E00\u4EFD\u6E29\u6696\u3001\u5BCC\u6709\u6FC0\u52B1\u6027\u7684\u6BCF\u5468\u5B66\u4E60\u603B\u7ED3\uFF08200\u5B57\u4EE5\u5185\uFF09\uFF1A

**\u672C\u5468\u5B66\u4E60\u6570\u636E**:
- \u5B8C\u6210\u77E5\u8BC6\u70B9: ${thisWeekProgress.length} \u4E2A
- \u5B66\u4E60\u65F6\u957F: ${hours}\u5C0F\u65F6${minutes}\u5206\u949F
- \u5BF9\u6BD4\u4E0A\u5468: \u77E5\u8BC6\u70B9${pointsImprovement > 0 ? "\u589E\u52A0" : "\u51CF\u5C11"}${Math.abs(pointsImprovement)}%\uFF0C\u65F6\u957F${timeImprovement > 0 ? "\u589E\u52A0" : "\u51CF\u5C11"}${Math.abs(timeImprovement)}%

**\u672C\u5468\u5B8C\u6210\u7684\u5185\u5BB9**:
${completedPoints.map((p) => `- ${p.title} (${p.subject})`).join("\n")}

\u8BF7\u7528\u7B2C\u4E8C\u4EBA\u79F0\uFF0C\u8BED\u6C14\u4EB2\u5207\u53CB\u597D\uFF0C\u5305\u542B\uFF1A
1. \u5BF9\u672C\u5468\u6210\u7EE9\u7684\u80AF\u5B9A
2. \u5177\u4F53\u8FDB\u6B65\u7684\u5938\u8D5E
3. \u4E0B\u5468\u7684\u9F13\u52B1\u548C\u671F\u5F85

\u7528 emoji \u589E\u52A0\u4EB2\u548C\u529B\u3002`;
  const aiContent = await generateCompanionMessage(prompt);
  return {
    type: "weekly_summary",
    title: "\u{1F4CA} \u672C\u5468\u5B66\u4E60\u603B\u7ED3",
    content: aiContent,
    emotionTone: "positive",
    actionable: false,
    createdAt: /* @__PURE__ */ new Date()
  };
}
async function generateEncouragement(userId) {
  const user = await User_default.findById(userId).select("username").lean();
  const userName = user?.username || "\u540C\u5B66";
  const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1e3);
  const recentSessions = await StudySession_default.find({
    userId,
    startTime: { $gte: weekAgo }
  }).lean();
  const recentProgress = await UserProgress_default.find({
    userId,
    status: "completed",
    completedAt: { $gte: weekAgo }
  }).lean();
  const totalStudyTime = recentSessions.reduce((sum, s) => sum + (s.duration || 0), 0);
  const avgScore = recentProgress.length > 0 ? recentProgress.reduce((sum, p) => sum + (p.bestScore || 0), 0) / recentProgress.length : 0;
  const needsEncouragement = totalStudyTime < 3600 && recentProgress.length < 2 || // 学习时间少于1小时且完成少于2个
  avgScore < 60;
  if (!needsEncouragement) return null;
  const allProgress = await UserProgress_default.find({
    userId,
    status: "completed"
  }).sort({ completedAt: -1 }).limit(20).lean();
  const bestScore = Math.max(...allProgress.map((p) => p.bestScore || 0));
  const totalCompleted = allProgress.length;
  const prompt = `\u4F5C\u4E3A ${userName} \u7684AI\u5B66\u4E60\u4F19\u4F34\uFF0CTa\u6700\u8FD1\u4F3C\u4E4E\u9047\u5230\u4E86\u5B66\u4E60\u4F4E\u8C37\uFF0C\u8BF7\u751F\u6210\u4E00\u6BB5\u771F\u8BDA\u3001\u6E29\u6696\u7684\u9F13\u52B1\uFF08150\u5B57\u4EE5\u5185\uFF09\uFF1A

**\u5F53\u524D\u60C5\u51B5**:
- \u6700\u8FD17\u5929\u5B66\u4E60\u65F6\u95F4: ${Math.floor(totalStudyTime / 60)}\u5206\u949F
- \u6700\u8FD1\u5B8C\u6210\u77E5\u8BC6\u70B9: ${recentProgress.length}\u4E2A
- \u6700\u8FD1\u5E73\u5747\u5206: ${avgScore.toFixed(1)}\u5206

**\u5386\u53F2\u4EAE\u70B9**:
- \u5386\u53F2\u6700\u9AD8\u5206: ${bestScore}\u5206
- \u7D2F\u8BA1\u5B8C\u6210: ${totalCompleted}\u4E2A\u77E5\u8BC6\u70B9

\u8BF7\uFF1A
1. \u7406\u89E3Ta\u53EF\u80FD\u9047\u5230\u7684\u56F0\u96BE
2. \u56DE\u987ETa\u4E4B\u524D\u7684\u6210\u5C31
3. \u7ED9\u4E88\u771F\u8BDA\u7684\u9F13\u52B1\u548C\u5EFA\u8BAE
4. \u8BED\u6C14\u8981\u50CF\u670B\u53CB\u822C\u6E29\u6696

\u7528 emoji \u589E\u52A0\u60C5\u611F\u8868\u8FBE\u3002`;
  const aiContent = await generateCompanionMessage(prompt);
  return {
    type: "encouragement",
    title: "\u{1F4AA} \u522B\u7070\u5FC3\uFF0C\u4F60\u53EF\u4EE5\u7684\uFF01",
    content: aiContent,
    emotionTone: "encouraging",
    actionable: true,
    createdAt: /* @__PURE__ */ new Date()
  };
}
async function generateCelebration(userId, milestone) {
  const user = await User_default.findById(userId).select("username").lean();
  const userName = user?.username || "\u540C\u5B66";
  const prompt = `\u4F5C\u4E3A ${userName} \u7684AI\u5B66\u4E60\u4F19\u4F34\uFF0CTa\u521A\u521A\u8FBE\u6210\u4E86\u4E00\u4E2A\u91CD\u8981\u91CC\u7A0B\u7891\uFF01\u8BF7\u751F\u6210\u4E00\u6BB5\u5145\u6EE1\u5E86\u795D\u611F\u7684\u795D\u8D3A\uFF08100\u5B57\u4EE5\u5185\uFF09\uFF1A

**\u91CC\u7A0B\u7891\u7C7B\u578B**: ${milestone.type === "high_score" ? "\u9AD8\u5206\u6210\u5C31" : milestone.type === "streak" ? "\u8FDE\u7EED\u5B66\u4E60" : milestone.type === "completion" ? "\u5B8C\u6210\u76EE\u6807" : "\u5B66\u4E60\u901F\u5EA6"}
**\u5177\u4F53\u6210\u5C31**: ${milestone.description}

\u8BF7\uFF1A
1. \u70ED\u70C8\u5E86\u795D\u8FD9\u4E2A\u6210\u5C31
2. \u80AF\u5B9ATa\u7684\u52AA\u529B\u548C\u575A\u6301
3. \u9F13\u52B1\u7EE7\u7EED\u4FDD\u6301
4. \u8BED\u6C14\u8981\u5145\u6EE1\u559C\u60A6\u548C\u81EA\u8C6A

\u591A\u7528\u5E86\u795D\u7684 emoji\uFF01`;
  const aiContent = await generateCompanionMessage(prompt);
  return {
    type: "celebration",
    title: "\u{1F389} \u592A\u68D2\u4E86\uFF01",
    content: aiContent,
    emotionTone: "celebrating",
    actionable: false,
    createdAt: /* @__PURE__ */ new Date()
  };
}
async function generateReminder(userId) {
  const user = await User_default.findById(userId).select("username").lean();
  const userName = user?.username || "\u540C\u5B66";
  const lastSession = await StudySession_default.findOne({ userId }).sort({ startTime: -1 }).lean();
  if (!lastSession) return null;
  const daysSinceLastStudy = (Date.now() - new Date(lastSession.startTime).getTime()) / (1e3 * 60 * 60 * 24);
  if (daysSinceLastStudy < 3) return null;
  const lastProgress = await UserProgress_default.findOne({
    userId,
    updatedAt: { $gte: new Date(lastSession.startTime) }
  }).sort({ updatedAt: -1 }).lean();
  let lastPointTitle = "";
  if (lastProgress) {
    const point = await KnowledgePoint_default.findOne({ id: lastProgress.pointId }).select("title").lean();
    lastPointTitle = point?.title || "";
  }
  const prompt = `\u4F5C\u4E3A ${userName} \u7684AI\u5B66\u4E60\u4F19\u4F34\uFF0CTa\u5DF2\u7ECF${Math.floor(daysSinceLastStudy)}\u5929\u6CA1\u6709\u5B66\u4E60\u4E86\u3002\u8BF7\u751F\u6210\u4E00\u6BB5\u6E29\u67D4\u7684\u63D0\u9192\uFF08100\u5B57\u4EE5\u5185\uFF09\uFF1A

**\u4E0A\u6B21\u5B66\u4E60**: ${Math.floor(daysSinceLastStudy)}\u5929\u524D
**\u4E0A\u6B21\u5185\u5BB9**: ${lastPointTitle || "\u672A\u77E5"}

\u8BF7\uFF1A
1. \u6E29\u67D4\u5730\u63D0\u9192Ta
2. \u4E0D\u8981\u8BA9Ta\u6709\u538B\u529B\u611F
3. \u6FC0\u53D1Ta\u91CD\u65B0\u5F00\u59CB\u7684\u5174\u8DA3
4. \u8BED\u6C14\u8981\u50CF\u670B\u53CB\u7684\u5173\u5FC3

\u7528 emoji \u589E\u52A0\u4EB2\u5207\u611F\u3002`;
  const aiContent = await generateCompanionMessage(prompt);
  return {
    type: "reminder",
    title: "\u{1F44B} \u597D\u4E45\u4E0D\u89C1\uFF01",
    content: aiContent,
    emotionTone: "gentle_reminder",
    actionable: true,
    createdAt: /* @__PURE__ */ new Date()
  };
}
async function generateSuggestion(userId, issue) {
  const user = await User_default.findById(userId).select("username").lean();
  const userName = user?.username || "\u540C\u5B66";
  const prompt = `\u4F5C\u4E3A ${userName} \u7684AI\u5B66\u4E60\u4F19\u4F34\uFF0C\u6211\u6CE8\u610F\u5230Ta\u7684\u5B66\u4E60\u4E2D\u6709\u4E2A\u9700\u8981\u5173\u6CE8\u7684\u5730\u65B9\u3002\u8BF7\u751F\u6210\u4E00\u6BB5\u53CB\u597D\u7684\u5EFA\u8BAE\uFF08150\u5B57\u4EE5\u5185\uFF09\uFF1A

**\u95EE\u9898\u7C7B\u578B**: ${issue.type}
**\u5177\u4F53\u60C5\u51B5**: ${issue.description}
**\u521D\u6B65\u5EFA\u8BAE**: ${issue.suggestion}

\u8BF7\uFF1A
1. \u4EE5\u670B\u53CB\u7684\u53E3\u543B\u63D0\u51FA\u5EFA\u8BAE
2. \u4E0D\u8981\u8BA9Ta\u611F\u5230\u88AB\u6279\u8BC4
3. \u63D0\u4F9B\u5177\u4F53\u53EF\u884C\u7684\u6539\u8FDB\u65B9\u6CD5
4. \u8868\u8FBE\u5BF9Ta\u7684\u4FE1\u5FC3

\u7528 emoji \u8BA9\u8BED\u6C14\u66F4\u53CB\u597D\u3002`;
  const aiContent = await generateCompanionMessage(prompt);
  return {
    type: "suggestion",
    title: "\u{1F4A1} \u4E00\u4E2A\u5C0F\u5EFA\u8BAE",
    content: aiContent,
    emotionTone: "encouraging",
    actionable: true,
    createdAt: /* @__PURE__ */ new Date()
  };
}
async function generateCompanionMessage(prompt) {
  try {
    const messages = [
      {
        role: "system",
        content: `\u4F60\u662F\u4E00\u4F4D\u6E29\u6696\u3001\u771F\u8BDA\u7684AI\u5B66\u4E60\u4F19\u4F34\uFF0C\u540D\u53EB\u300C\u667A\u4F34\u300D\u3002\u4F60\u7684\u7279\u70B9\u662F\uFF1A
- \u8BED\u6C14\u4EB2\u5207\u53CB\u597D\uFF0C\u50CF\u670B\u53CB\u800C\u4E0D\u662F\u8001\u5E08
- \u5584\u4E8E\u9F13\u52B1\u548C\u6FC0\u52B1\uFF0C\u4F46\u4E0D\u6D6E\u5938
- \u7406\u89E3\u5B66\u4E60\u7684\u8270\u8F9B\uFF0C\u80FD\u591F\u5171\u60C5
- \u63D0\u4F9B\u7684\u5EFA\u8BAE\u5177\u4F53\u53EF\u884C
- \u7ECF\u5E38\u7528\u5408\u9002\u7684 emoji \u589E\u52A0\u4EB2\u548C\u529B
- \u8BED\u8A00\u7B80\u6D01\u6709\u529B\uFF0C\u4E0D\u5570\u55E6`
      },
      {
        role: "user",
        content: prompt
      }
    ];
    return await getChatCompletion(messages, { maxTokens: 500 });
  } catch (error) {
    console.error("\u751F\u6210\u4F19\u4F34\u6D88\u606F\u5931\u8D25:", error);
    return "\u4F60\u597D\uFF01\u6211\u662F\u4F60\u7684\u5B66\u4E60\u4F19\u4F34\uFF0C\u867D\u7136\u73B0\u5728\u7CFB\u7EDF\u6709\u70B9\u5FD9\uFF0C\u4F46\u6211\u4E00\u76F4\u5728\u5173\u6CE8\u4F60\u7684\u8FDB\u6B65\uFF01\u52A0\u6CB9\uFF01\u{1F4AA}";
  }
}
async function autoGenerateCompanionMessage(userId) {
  const reminder = await generateReminder(userId);
  if (reminder) return reminder;
  const encouragement = await generateEncouragement(userId);
  if (encouragement) return encouragement;
  const recentAchievements = await Achievement_default.find({
    userId,
    completed: true,
    unlockedAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1e3) }
    // 最近24小时
  }).lean();
  if (recentAchievements.length > 0) {
    const achievement = recentAchievements[0];
    return await generateCelebration(userId, {
      type: "completion",
      value: 1,
      description: `\u89E3\u9501\u6210\u5C31: ${achievement.achievementId}`
    });
  }
  return null;
}
async function getTodayCompanionMessage(userId) {
  const today = /* @__PURE__ */ new Date();
  today.setHours(0, 0, 0, 0);
  return await autoGenerateCompanionMessage(userId);
}

// src/routes/learning-companion.ts
var router17 = (0, import_express17.Router)();
router17.get("/today", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?._id;
    if (!userId) {
      return res.status(401).json({ message: "\u672A\u6388\u6743" });
    }
    const message = await getTodayCompanionMessage(userId);
    res.json({
      success: true,
      message: message || null,
      hasMessage: message !== null
    });
  } catch (error) {
    console.error("\u83B7\u53D6\u4ECA\u65E5\u6D88\u606F\u5931\u8D25:", error);
    res.status(500).json({
      success: false,
      message: "\u83B7\u53D6\u6D88\u606F\u5931\u8D25",
      error: error.message
    });
  }
});
router17.post("/weekly-summary", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?._id;
    if (!userId) {
      return res.status(401).json({ message: "\u672A\u6388\u6743" });
    }
    const summary = await generateWeeklySummary(userId);
    res.json({
      success: true,
      message: summary
    });
  } catch (error) {
    console.error("\u751F\u6210\u6BCF\u5468\u603B\u7ED3\u5931\u8D25:", error);
    res.status(500).json({
      success: false,
      message: "\u751F\u6210\u603B\u7ED3\u5931\u8D25",
      error: error.message
    });
  }
});
router17.post("/encouragement", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?._id;
    if (!userId) {
      return res.status(401).json({ message: "\u672A\u6388\u6743" });
    }
    const encouragement = await generateEncouragement(userId);
    res.json({
      success: true,
      message: encouragement
    });
  } catch (error) {
    console.error("\u751F\u6210\u9F13\u52B1\u6D88\u606F\u5931\u8D25:", error);
    res.status(500).json({
      success: false,
      message: "\u751F\u6210\u9F13\u52B1\u5931\u8D25",
      error: error.message
    });
  }
});
router17.post("/celebration", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?._id;
    if (!userId) {
      return res.status(401).json({ message: "\u672A\u6388\u6743" });
    }
    const milestone = req.body.milestone;
    if (!milestone) {
      return res.status(400).json({
        success: false,
        message: "\u7F3A\u5C11\u91CC\u7A0B\u7891\u4FE1\u606F"
      });
    }
    const celebration = await generateCelebration(userId, milestone);
    res.json({
      success: true,
      message: celebration
    });
  } catch (error) {
    console.error("\u751F\u6210\u5E86\u795D\u6D88\u606F\u5931\u8D25:", error);
    res.status(500).json({
      success: false,
      message: "\u751F\u6210\u5E86\u795D\u5931\u8D25",
      error: error.message
    });
  }
});
router17.post("/reminder", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?._id;
    if (!userId) {
      return res.status(401).json({ message: "\u672A\u6388\u6743" });
    }
    const reminder = await generateReminder(userId);
    res.json({
      success: true,
      message: reminder
    });
  } catch (error) {
    console.error("\u751F\u6210\u63D0\u9192\u5931\u8D25:", error);
    res.status(500).json({
      success: false,
      message: "\u751F\u6210\u63D0\u9192\u5931\u8D25",
      error: error.message
    });
  }
});
router17.post("/suggestion", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?._id;
    if (!userId) {
      return res.status(401).json({ message: "\u672A\u6388\u6743" });
    }
    const issue = req.body.issue;
    if (!issue) {
      return res.status(400).json({
        success: false,
        message: "\u7F3A\u5C11\u95EE\u9898\u4FE1\u606F"
      });
    }
    const suggestion = await generateSuggestion(userId, issue);
    res.json({
      success: true,
      message: suggestion
    });
  } catch (error) {
    console.error("\u751F\u6210\u5EFA\u8BAE\u5931\u8D25:", error);
    res.status(500).json({
      success: false,
      message: "\u751F\u6210\u5EFA\u8BAE\u5931\u8D25",
      error: error.message
    });
  }
});
var learning_companion_default = router17;

// src/routes/feedback.ts
var import_express18 = require("express");

// src/models/Feedback.ts
var import_mongoose10 = __toESM(require("mongoose"));
var feedbackSchema = new import_mongoose10.Schema(
  {
    userId: {
      type: import_mongoose10.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },
    type: {
      type: String,
      enum: ["bug", "feature", "improvement", "other"],
      required: true,
      index: true
    },
    category: {
      type: String,
      required: true,
      index: true
    },
    title: {
      type: String,
      required: true,
      maxlength: 200
    },
    description: {
      type: String,
      required: true,
      maxlength: 5e3
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
      index: true
    },
    status: {
      type: String,
      enum: ["pending", "in_review", "planned", "in_progress", "completed", "rejected"],
      default: "pending",
      index: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    attachments: [String],
    screenshots: [String],
    userAgent: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    deviceInfo: {
      platform: String,
      browser: String,
      screenResolution: String
    },
    adminResponse: String,
    adminUserId: {
      type: import_mongoose10.Schema.Types.ObjectId,
      ref: "User"
    },
    votes: {
      type: Number,
      default: 0,
      index: true
    },
    voters: [{
      type: import_mongoose10.Schema.Types.ObjectId,
      ref: "User"
    }],
    tags: [String],
    resolvedAt: Date
  },
  {
    timestamps: true
  }
);
feedbackSchema.index({ userId: 1, createdAt: -1 });
feedbackSchema.index({ status: 1, priority: -1 });
feedbackSchema.index({ type: 1, status: 1 });
feedbackSchema.index({ votes: -1 });
var Feedback_default = import_mongoose10.default.model("Feedback", feedbackSchema);

// src/routes/feedback.ts
var import_mongoose11 = require("mongoose");
var router18 = (0, import_express18.Router)();
router18.post("/", authMiddleware, async (req, res) => {
  try {
    const user = req.user;
    const {
      type,
      category,
      title,
      description,
      rating,
      screenshots,
      deviceInfo
    } = req.body;
    if (!type || !category || !title || !description) {
      return res.status(400).json({
        success: false,
        message: "\u7F3A\u5C11\u5FC5\u586B\u5B57\u6BB5"
      });
    }
    const feedback = await Feedback_default.create({
      userId: user._id,
      type,
      category,
      title,
      description,
      rating,
      screenshots,
      deviceInfo,
      userAgent: req.headers["user-agent"] || "Unknown",
      url: req.body.url || req.headers.referer || "Unknown"
    });
    res.status(201).json({
      success: true,
      message: "\u53CD\u9988\u63D0\u4EA4\u6210\u529F\uFF0C\u611F\u8C22\u60A8\u7684\u5EFA\u8BAE\uFF01",
      feedbackId: feedback._id
    });
  } catch (error) {
    console.error("\u63D0\u4EA4\u53CD\u9988\u5931\u8D25:", error);
    res.status(500).json({
      success: false,
      message: "\u63D0\u4EA4\u53CD\u9988\u5931\u8D25",
      error: error.message
    });
  }
});
router18.get("/", authMiddleware, async (req, res) => {
  try {
    const user = req.user;
    const { type, status, page = 1, limit = 10 } = req.query;
    const query = { userId: user._id };
    if (type) query.type = type;
    if (status) query.status = status;
    const skip = (Number(page) - 1) * Number(limit);
    const feedbacks = await Feedback_default.find(query).sort({ createdAt: -1 }).skip(skip).limit(Number(limit)).lean();
    const total = await Feedback_default.countDocuments(query);
    res.json({
      success: true,
      feedbacks,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / Number(limit))
      }
    });
  } catch (error) {
    console.error("\u83B7\u53D6\u53CD\u9988\u5217\u8868\u5931\u8D25:", error);
    res.status(500).json({
      success: false,
      message: "\u83B7\u53D6\u53CD\u9988\u5217\u8868\u5931\u8D25",
      error: error.message
    });
  }
});
router18.get("/public", async (req, res) => {
  try {
    const { type, status = "completed", sort = "votes", page = 1, limit = 20 } = req.query;
    const query = { status };
    if (type) query.type = type;
    const sortOptions = {};
    if (sort === "votes") sortOptions.votes = -1;
    else if (sort === "recent") sortOptions.createdAt = -1;
    else sortOptions.createdAt = -1;
    const skip = (Number(page) - 1) * Number(limit);
    const feedbacks = await Feedback_default.find(query).select("type category title description status votes tags createdAt resolvedAt").sort(sortOptions).skip(skip).limit(Number(limit)).lean();
    const total = await Feedback_default.countDocuments(query);
    res.json({
      success: true,
      feedbacks,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / Number(limit))
      }
    });
  } catch (error) {
    console.error("\u83B7\u53D6\u516C\u5F00\u53CD\u9988\u5217\u8868\u5931\u8D25:", error);
    res.status(500).json({
      success: false,
      message: "\u83B7\u53D6\u516C\u5F00\u53CD\u9988\u5217\u8868\u5931\u8D25",
      error: error.message
    });
  }
});
router18.get("/:id", authMiddleware, async (req, res) => {
  try {
    const user = req.user;
    const { id } = req.params;
    const feedback = await Feedback_default.findById(id).populate("userId", "username avatarUrl").lean();
    if (!feedback) {
      return res.status(404).json({
        success: false,
        message: "\u53CD\u9988\u4E0D\u5B58\u5728"
      });
    }
    if (feedback.userId._id.toString() !== user._id.toString() && feedback.status !== "completed") {
      return res.status(403).json({
        success: false,
        message: "\u65E0\u6743\u67E5\u770B\u6B64\u53CD\u9988"
      });
    }
    res.json({
      success: true,
      feedback
    });
  } catch (error) {
    console.error("\u83B7\u53D6\u53CD\u9988\u8BE6\u60C5\u5931\u8D25:", error);
    res.status(500).json({
      success: false,
      message: "\u83B7\u53D6\u53CD\u9988\u8BE6\u60C5\u5931\u8D25",
      error: error.message
    });
  }
});
router18.post("/:id/vote", authMiddleware, async (req, res) => {
  try {
    const user = req.user;
    const { id } = req.params;
    const feedback = await Feedback_default.findById(id);
    if (!feedback) {
      return res.status(404).json({
        success: false,
        message: "\u53CD\u9988\u4E0D\u5B58\u5728"
      });
    }
    const userObjectId = new import_mongoose11.Types.ObjectId(user._id);
    const hasVoted = feedback.voters.some((voterId) => voterId.equals(userObjectId));
    if (hasVoted) {
      feedback.voters = feedback.voters.filter((voterId) => !voterId.equals(userObjectId));
      feedback.votes = Math.max(0, feedback.votes - 1);
    } else {
      feedback.voters.push(userObjectId);
      feedback.votes += 1;
    }
    await feedback.save();
    res.json({
      success: true,
      message: hasVoted ? "\u5DF2\u53D6\u6D88\u6295\u7968" : "\u6295\u7968\u6210\u529F",
      votes: feedback.votes,
      hasVoted: !hasVoted
    });
  } catch (error) {
    console.error("\u6295\u7968\u5931\u8D25:", error);
    res.status(500).json({
      success: false,
      message: "\u6295\u7968\u5931\u8D25",
      error: error.message
    });
  }
});
router18.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const user = req.user;
    const { id } = req.params;
    const feedback = await Feedback_default.findById(id);
    if (!feedback) {
      return res.status(404).json({
        success: false,
        message: "\u53CD\u9988\u4E0D\u5B58\u5728"
      });
    }
    if (feedback.userId.toString() !== user._id.toString()) {
      return res.status(403).json({
        success: false,
        message: "\u65E0\u6743\u5220\u9664\u6B64\u53CD\u9988"
      });
    }
    if (feedback.status !== "pending") {
      return res.status(400).json({
        success: false,
        message: "\u53EA\u80FD\u5220\u9664\u5F85\u5904\u7406\u7684\u53CD\u9988"
      });
    }
    await Feedback_default.findByIdAndDelete(id);
    res.json({
      success: true,
      message: "\u53CD\u9988\u5DF2\u5220\u9664"
    });
  } catch (error) {
    console.error("\u5220\u9664\u53CD\u9988\u5931\u8D25:", error);
    res.status(500).json({
      success: false,
      message: "\u5220\u9664\u53CD\u9988\u5931\u8D25",
      error: error.message
    });
  }
});
router18.get("/stats/summary", async (_req, res) => {
  try {
    const [total, byType, byStatus, topVoted] = await Promise.all([
      Feedback_default.countDocuments(),
      Feedback_default.aggregate([
        { $group: { _id: "$type", count: { $sum: 1 } } }
      ]),
      Feedback_default.aggregate([
        { $group: { _id: "$status", count: { $sum: 1 } } }
      ]),
      Feedback_default.find().select("title description votes type status").sort({ votes: -1 }).limit(5).lean()
    ]);
    res.json({
      success: true,
      stats: {
        total,
        byType: byType.reduce((acc, item) => {
          acc[item._id] = item.count;
          return acc;
        }, {}),
        byStatus: byStatus.reduce((acc, item) => {
          acc[item._id] = item.count;
          return acc;
        }, {}),
        topVoted
      }
    });
  } catch (error) {
    console.error("\u83B7\u53D6\u53CD\u9988\u7EDF\u8BA1\u5931\u8D25:", error);
    res.status(500).json({
      success: false,
      message: "\u83B7\u53D6\u53CD\u9988\u7EDF\u8BA1\u5931\u8D25",
      error: error.message
    });
  }
});
var feedback_default = router18;

// src/routes/class.ts
var import_express19 = __toESM(require("express"));

// src/models/Class.ts
var import_mongoose12 = __toESM(require("mongoose"));
var ClassSchema = new import_mongoose12.Schema({
  name: { type: String, required: true },
  description: { type: String },
  teacherId: { type: import_mongoose12.Schema.Types.ObjectId, ref: "User", required: true },
  teacherName: { type: String, required: true },
  students: [{
    userId: { type: import_mongoose12.Schema.Types.ObjectId, ref: "User", required: true },
    userName: { type: String, required: true },
    joinedAt: { type: Date, default: Date.now },
    status: { type: String, enum: ["active", "inactive"], default: "active" }
  }],
  subject: { type: String },
  grade: { type: String },
  semester: { type: String },
  settings: {
    allowStudentInvite: { type: Boolean, default: false },
    requireApproval: { type: Boolean, default: true },
    maxStudents: { type: Number }
  },
  inviteCode: { type: String, required: true, unique: true },
  status: { type: String, enum: ["active", "archived"], default: "active" }
}, {
  timestamps: true
});
ClassSchema.index({ teacherId: 1, status: 1 });
ClassSchema.index({ inviteCode: 1 });
ClassSchema.index({ "students.userId": 1 });
var Class_default = import_mongoose12.default.model("Class", ClassSchema);

// src/routes/class.ts
var import_crypto = __toESM(require("crypto"));
var router19 = import_express19.default.Router();
function generateInviteCode() {
  return import_crypto.default.randomBytes(4).toString("hex").toUpperCase();
}
router19.post("/", authMiddleware, async (req, res) => {
  try {
    const { name, description, subject, grade, semester, settings } = req.body;
    const authUser = req.user;
    const userId = authUser._id.toString();
    const user = await User_default.findById(userId);
    if (!user || user.role !== "teacher") {
      return res.status(403).json({ error: "\u53EA\u6709\u6559\u5E08\u53EF\u4EE5\u521B\u5EFA\u73ED\u7EA7" });
    }
    let inviteCode = generateInviteCode();
    while (await Class_default.findOne({ inviteCode })) {
      inviteCode = generateInviteCode();
    }
    const newClass = new Class_default({
      name,
      description,
      teacherId: userId,
      teacherName: user.username,
      subject,
      grade,
      semester,
      settings: settings || {},
      inviteCode,
      students: []
    });
    await newClass.save();
    res.status(201).json(newClass);
  } catch (error) {
    console.error("\u521B\u5EFA\u73ED\u7EA7\u5931\u8D25:", error);
    res.status(500).json({ error: "\u521B\u5EFA\u73ED\u7EA7\u5931\u8D25" });
  }
});
router19.get("/my", authMiddleware, async (req, res) => {
  try {
    const authUser = req.user;
    const userId = authUser._id.toString();
    const user = await User_default.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "\u7528\u6237\u4E0D\u5B58\u5728" });
    }
    let classes;
    if (user.role === "teacher") {
      classes = await Class_default.find({
        teacherId: userId,
        status: "active"
      }).sort({ createdAt: -1 });
    } else {
      classes = await Class_default.find({
        "students.userId": userId,
        "students.status": "active",
        status: "active"
      }).sort({ createdAt: -1 });
    }
    res.json(classes);
  } catch (error) {
    console.error("\u83B7\u53D6\u73ED\u7EA7\u5217\u8868\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u73ED\u7EA7\u5217\u8868\u5931\u8D25" });
  }
});
router19.get("/joined", authMiddleware, async (req, res) => {
  try {
    const authUser = req.user;
    const userId = authUser._id.toString();
    const classes = await Class_default.find({
      "students.userId": userId,
      "students.status": "active",
      status: "active"
    }).populate("teacherId", "username email avatarUrl").sort({ createdAt: -1 });
    const classesWithJoinTime = classes.map((cls) => {
      const classObj = cls.toObject();
      const studentInfo = cls.students.find(
        (s) => s.userId.toString() === userId && s.status === "active"
      );
      return {
        ...classObj,
        teacher: classObj.teacherId,
        // 重命名字段
        joinedAt: studentInfo?.joinedAt
      };
    });
    res.json(classesWithJoinTime);
  } catch (error) {
    console.error("\u83B7\u53D6\u5DF2\u52A0\u5165\u73ED\u7EA7\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u5DF2\u52A0\u5165\u73ED\u7EA7\u5931\u8D25" });
  }
});
router19.get("/:classId", authMiddleware, async (req, res) => {
  try {
    const { classId } = req.params;
    const authUser = req.user;
    const userId = authUser._id.toString();
    const classInfo = await Class_default.findById(classId);
    if (!classInfo) {
      return res.status(404).json({ error: "\u73ED\u7EA7\u4E0D\u5B58\u5728" });
    }
    const isTeacher = classInfo.teacherId.toString() === userId;
    const isStudent = classInfo.students.some(
      (s) => s.userId.toString() === userId && s.status === "active"
    );
    if (!isTeacher && !isStudent) {
      return res.status(403).json({ error: "\u65E0\u6743\u8BBF\u95EE\u6B64\u73ED\u7EA7" });
    }
    res.json(classInfo);
  } catch (error) {
    console.error("\u83B7\u53D6\u73ED\u7EA7\u8BE6\u60C5\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u73ED\u7EA7\u8BE6\u60C5\u5931\u8D25" });
  }
});
router19.put("/:classId", authMiddleware, async (req, res) => {
  try {
    const { classId } = req.params;
    const authUser = req.user;
    const userId = authUser._id.toString();
    const updates = req.body;
    const classInfo = await Class_default.findById(classId);
    if (!classInfo) {
      return res.status(404).json({ error: "\u73ED\u7EA7\u4E0D\u5B58\u5728" });
    }
    if (classInfo.teacherId.toString() !== userId) {
      return res.status(403).json({ error: "\u65E0\u6743\u4FEE\u6539\u6B64\u73ED\u7EA7" });
    }
    const allowedFields = ["name", "description", "subject", "grade", "semester", "settings"];
    allowedFields.forEach((field) => {
      if (updates[field] !== void 0) {
        classInfo[field] = updates[field];
      }
    });
    await classInfo.save();
    res.json(classInfo);
  } catch (error) {
    console.error("\u66F4\u65B0\u73ED\u7EA7\u5931\u8D25:", error);
    res.status(500).json({ error: "\u66F4\u65B0\u73ED\u7EA7\u5931\u8D25" });
  }
});
router19.post("/join", authMiddleware, async (req, res) => {
  try {
    const inviteCode = req.body.inviteCode;
    const authUser = req.user;
    const userId = authUser._id.toString();
    const user = await User_default.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "\u7528\u6237\u4E0D\u5B58\u5728" });
    }
    const classInfo = await Class_default.findOne({ inviteCode, status: "active" });
    if (!classInfo) {
      return res.status(404).json({ error: "\u65E0\u6548\u7684\u9080\u8BF7\u7801" });
    }
    const alreadyJoined = classInfo.students.some(
      (s) => s.userId.toString() === userId
    );
    if (alreadyJoined) {
      return res.status(400).json({ error: "\u60A8\u5DF2\u7ECF\u52A0\u5165\u6B64\u73ED\u7EA7" });
    }
    if (classInfo.settings.maxStudents) {
      const activeStudents = classInfo.students.filter((s) => s.status === "active").length;
      if (activeStudents >= classInfo.settings.maxStudents) {
        return res.status(400).json({ error: "\u73ED\u7EA7\u4EBA\u6570\u5DF2\u6EE1" });
      }
    }
    classInfo.students.push({
      userId: user._id,
      userName: user.username,
      joinedAt: /* @__PURE__ */ new Date(),
      status: "active"
    });
    await classInfo.save();
    res.json({ message: "\u6210\u529F\u52A0\u5165\u73ED\u7EA7", class: classInfo });
  } catch (error) {
    console.error("\u52A0\u5165\u73ED\u7EA7\u5931\u8D25:", error);
    res.status(500).json({ error: "\u52A0\u5165\u73ED\u7EA7\u5931\u8D25" });
  }
});
router19.delete("/:classId/students/:studentId", authMiddleware, async (req, res) => {
  try {
    const { classId, studentId } = req.params;
    const authUser = req.user;
    const userId = authUser._id.toString();
    const classInfo = await Class_default.findById(classId);
    if (!classInfo) {
      return res.status(404).json({ error: "\u73ED\u7EA7\u4E0D\u5B58\u5728" });
    }
    if (classInfo.teacherId.toString() !== userId) {
      return res.status(403).json({ error: "\u65E0\u6743\u64CD\u4F5C" });
    }
    const student = classInfo.students.find(
      (s) => s.userId.toString() === studentId
    );
    if (!student) {
      return res.status(404).json({ error: "\u5B66\u751F\u4E0D\u5728\u6B64\u73ED\u7EA7" });
    }
    student.status = "inactive";
    await classInfo.save();
    res.json({ message: "\u5B66\u751F\u5DF2\u79FB\u9664" });
  } catch (error) {
    console.error("\u79FB\u9664\u5B66\u751F\u5931\u8D25:", error);
    res.status(500).json({ error: "\u79FB\u9664\u5B66\u751F\u5931\u8D25" });
  }
});
router19.post("/:classId/leave", authMiddleware, async (req, res) => {
  try {
    const { classId } = req.params;
    const authUser = req.user;
    const userId = authUser._id.toString();
    const classInfo = await Class_default.findById(classId);
    if (!classInfo) {
      return res.status(404).json({ error: "\u73ED\u7EA7\u4E0D\u5B58\u5728" });
    }
    const student = classInfo.students.find(
      (s) => s.userId.toString() === userId
    );
    if (!student) {
      return res.status(404).json({ error: "\u60A8\u4E0D\u5728\u6B64\u73ED\u7EA7" });
    }
    student.status = "inactive";
    await classInfo.save();
    res.json({ message: "\u5DF2\u9000\u51FA\u73ED\u7EA7" });
  } catch (error) {
    console.error("\u9000\u51FA\u73ED\u7EA7\u5931\u8D25:", error);
    res.status(500).json({ error: "\u9000\u51FA\u73ED\u7EA7\u5931\u8D25" });
  }
});
router19.post("/:classId/archive", authMiddleware, async (req, res) => {
  try {
    const { classId } = req.params;
    const authUser = req.user;
    const userId = authUser._id.toString();
    const classInfo = await Class_default.findById(classId);
    if (!classInfo) {
      return res.status(404).json({ error: "\u73ED\u7EA7\u4E0D\u5B58\u5728" });
    }
    if (classInfo.teacherId.toString() !== userId) {
      return res.status(403).json({ error: "\u65E0\u6743\u64CD\u4F5C" });
    }
    classInfo.status = "archived";
    await classInfo.save();
    res.json({ message: "\u73ED\u7EA7\u5DF2\u5F52\u6863" });
  } catch (error) {
    console.error("\u5F52\u6863\u73ED\u7EA7\u5931\u8D25:", error);
    res.status(500).json({ error: "\u5F52\u6863\u73ED\u7EA7\u5931\u8D25" });
  }
});
router19.get("/:classId/students/stats", authMiddleware, async (req, res) => {
  try {
    const { classId } = req.params;
    const authUser = req.user;
    const userId = authUser._id.toString();
    const classInfo = await Class_default.findById(classId);
    if (!classInfo) {
      return res.status(404).json({ error: "\u73ED\u7EA7\u4E0D\u5B58\u5728" });
    }
    if (classInfo.teacherId.toString() !== userId) {
      return res.status(403).json({ error: "\u65E0\u6743\u8BBF\u95EE" });
    }
    const StudySession2 = (await Promise.resolve().then(() => (init_StudySession(), StudySession_exports))).default;
    const KnowledgePoint2 = (await Promise.resolve().then(() => (init_KnowledgePoint(), KnowledgePoint_exports))).default;
    const activeStudents = classInfo.students.filter((s) => s.status === "active");
    const studentStats = await Promise.all(
      activeStudents.map(async (student) => {
        const sessions = await StudySession2.find({ userId: student.userId });
        const totalTime = sessions.reduce((sum, s) => sum + (s.duration || 0), 0);
        const sessionCount = sessions.length;
        const userProgress = await UserProgress_default.find({ userId: student.userId });
        const masteredCount = userProgress.filter((up) => up.bestScore >= 80).length;
        const totalKnowledge = userProgress.length;
        const avgScore = userProgress.length > 0 ? userProgress.reduce((sum, up) => sum + up.bestScore, 0) / userProgress.length : 0;
        return {
          userId: student.userId,
          userName: student.userName,
          joinedAt: student.joinedAt,
          totalTime,
          sessionCount,
          masteredCount,
          totalKnowledge,
          avgScore: Math.round(avgScore),
          lastActive: sessions.length > 0 ? sessions[sessions.length - 1].createdAt : student.joinedAt
        };
      })
    );
    res.json({
      classId,
      className: classInfo.name,
      totalStudents: activeStudents.length,
      students: studentStats
    });
  } catch (error) {
    console.error("\u83B7\u53D6\u5B66\u751F\u7EDF\u8BA1\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u5B66\u751F\u7EDF\u8BA1\u5931\u8D25" });
  }
});
var class_default = router19;

// src/routes/assignment.ts
var import_express20 = __toESM(require("express"));

// src/models/Assignment.ts
var import_mongoose13 = __toESM(require("mongoose"));
var AssignmentSchema = new import_mongoose13.Schema({
  title: { type: String, required: true },
  description: { type: String },
  classId: { type: import_mongoose13.Schema.Types.ObjectId, ref: "Class", required: true },
  teacherId: { type: import_mongoose13.Schema.Types.ObjectId, ref: "User", required: true },
  knowledgePoints: [{ type: import_mongoose13.Schema.Types.ObjectId, ref: "KnowledgePoint" }],
  type: {
    type: String,
    enum: ["practice", "quiz", "homework", "exam"],
    default: "homework"
  },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    default: "medium"
  },
  totalScore: { type: Number, required: true, default: 100 },
  passingScore: { type: Number, required: true, default: 60 },
  questions: [{
    questionId: { type: import_mongoose13.Schema.Types.ObjectId, ref: "Question", required: true },
    score: { type: Number, required: true }
  }],
  dueDate: { type: Date },
  startDate: { type: Date },
  duration: { type: Number },
  settings: {
    allowRetake: { type: Boolean, default: false },
    maxAttempts: { type: Number },
    showAnswers: { type: Boolean, default: true },
    showScore: { type: Boolean, default: true },
    randomOrder: { type: Boolean, default: false }
  },
  submissions: [{
    userId: { type: import_mongoose13.Schema.Types.ObjectId, ref: "User", required: true },
    userName: { type: String, required: true },
    submittedAt: { type: Date, default: Date.now },
    score: { type: Number },
    answers: [{ type: import_mongoose13.Schema.Types.Mixed }],
    timeSpent: { type: Number },
    attempt: { type: Number, default: 1 },
    status: {
      type: String,
      enum: ["submitted", "graded", "late"],
      default: "submitted"
    }
  }],
  status: {
    type: String,
    enum: ["draft", "published", "closed", "archived"],
    default: "draft"
  }
}, {
  timestamps: true
});
AssignmentSchema.index({ classId: 1, status: 1 });
AssignmentSchema.index({ teacherId: 1 });
AssignmentSchema.index({ "submissions.userId": 1 });
AssignmentSchema.index({ dueDate: 1 });
var Assignment_default = import_mongoose13.default.model("Assignment", AssignmentSchema);

// src/models/Notification.ts
var import_mongoose14 = __toESM(require("mongoose"));
var NotificationSchema = new import_mongoose14.Schema({
  recipientId: {
    type: import_mongoose14.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true
  },
  recipientType: {
    type: String,
    enum: ["student", "teacher", "all"],
    default: "student"
  },
  senderId: {
    type: import_mongoose14.Schema.Types.ObjectId,
    ref: "User"
  },
  type: {
    type: String,
    enum: ["assignment", "grade", "class", "system", "announcement"],
    required: true,
    index: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  relatedId: {
    type: import_mongoose14.Schema.Types.ObjectId
  },
  relatedType: {
    type: String,
    enum: ["assignment", "class", "submission"]
  },
  priority: {
    type: String,
    enum: ["low", "normal", "high", "urgent"],
    default: "normal"
  },
  read: {
    type: Boolean,
    default: false,
    index: true
  },
  readAt: {
    type: Date
  },
  actionUrl: {
    type: String
  },
  metadata: {
    type: import_mongoose14.Schema.Types.Mixed
  }
}, {
  timestamps: true
});
NotificationSchema.index({ recipientId: 1, read: 1, createdAt: -1 });
NotificationSchema.index({ recipientId: 1, type: 1, createdAt: -1 });
var Notification = import_mongoose14.default.model("Notification", NotificationSchema);

// src/routes/assignment.ts
var router20 = import_express20.default.Router();
router20.post("/", authMiddleware, async (req, res) => {
  try {
    const {
      title,
      description,
      classId,
      knowledgePoints,
      type,
      difficulty,
      totalScore,
      passingScore,
      questions,
      dueDate,
      startDate,
      duration,
      settings
    } = req.body;
    const userId = req.user._id.toString();
    const classInfo = await Class_default.findById(classId);
    if (!classInfo) {
      return res.status(404).json({ error: "\u73ED\u7EA7\u4E0D\u5B58\u5728" });
    }
    if (classInfo.teacherId.toString() !== userId) {
      return res.status(403).json({ error: "\u53EA\u6709\u73ED\u7EA7\u6559\u5E08\u53EF\u4EE5\u521B\u5EFA\u4F5C\u4E1A" });
    }
    const assignment = new Assignment_default({
      title,
      description,
      classId,
      teacherId: userId,
      knowledgePoints: knowledgePoints || [],
      type: type || "homework",
      difficulty: difficulty || "medium",
      totalScore: totalScore || 100,
      passingScore: passingScore || 60,
      questions: questions || [],
      dueDate,
      startDate,
      duration,
      settings: {
        allowRetake: true,
        // 默认允许重新提交
        showAnswers: true,
        showScore: true,
        randomOrder: false,
        ...settings
        // 允许前端覆盖默认值
      },
      submissions: []
    });
    await assignment.save();
    res.status(201).json(assignment);
  } catch (error) {
    console.error("\u521B\u5EFA\u4F5C\u4E1A\u5931\u8D25:", error);
    res.status(500).json({ error: "\u521B\u5EFA\u4F5C\u4E1A\u5931\u8D25" });
  }
});
router20.get("/class/:classId", authMiddleware, async (req, res) => {
  try {
    const { classId } = req.params;
    const userId = req.user._id.toString();
    const { status } = req.query;
    const classInfo = await Class_default.findById(classId);
    if (!classInfo) {
      return res.status(404).json({ error: "\u73ED\u7EA7\u4E0D\u5B58\u5728" });
    }
    const isTeacher = classInfo.teacherId.toString() === userId;
    const isStudent = classInfo.students.some(
      (s) => s.userId.toString() === userId && s.status === "active"
    );
    if (!isTeacher && !isStudent) {
      return res.status(403).json({ error: "\u65E0\u6743\u8BBF\u95EE" });
    }
    const query = { classId };
    if (status) {
      query.status = status;
    } else if (isStudent) {
      query.status = "published";
    } else {
      query.status = { $ne: "archived" };
    }
    const assignments = await Assignment_default.find(query).sort({ createdAt: -1 }).select("-submissions.answers");
    if (isStudent) {
      const assignmentsWithStatus = assignments.map((assignment) => {
        const submission = assignment.submissions.find(
          (s) => s.userId.toString() === userId
        );
        return {
          ...assignment.toObject(),
          mySubmission: submission ? {
            submittedAt: submission.submittedAt,
            score: submission.score,
            attempt: submission.attempt,
            status: submission.status
          } : null,
          submissionCount: assignment.submissions.length
        };
      });
      return res.json(assignmentsWithStatus);
    }
    res.json(assignments);
  } catch (error) {
    console.error("\u83B7\u53D6\u4F5C\u4E1A\u5217\u8868\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u4F5C\u4E1A\u5217\u8868\u5931\u8D25" });
  }
});
router20.get("/:assignmentId", authMiddleware, async (req, res) => {
  try {
    const { assignmentId } = req.params;
    const userId = req.user._id.toString();
    const assignment = await Assignment_default.findById(assignmentId);
    if (!assignment) {
      return res.status(404).json({ error: "\u4F5C\u4E1A\u4E0D\u5B58\u5728" });
    }
    const classInfo = await Class_default.findById(assignment.classId);
    if (!classInfo) {
      return res.status(404).json({ error: "\u73ED\u7EA7\u4E0D\u5B58\u5728" });
    }
    const isTeacher = classInfo.teacherId.toString() === userId;
    const isStudent = classInfo.students.some(
      (s) => s.userId.toString() === userId && s.status === "active"
    );
    if (!isTeacher && !isStudent) {
      return res.status(403).json({ error: "\u65E0\u6743\u8BBF\u95EE" });
    }
    if (isStudent && assignment.status === "draft") {
      return res.status(403).json({ error: "\u4F5C\u4E1A\u672A\u53D1\u5E03" });
    }
    res.json(assignment);
  } catch (error) {
    console.error("\u83B7\u53D6\u4F5C\u4E1A\u8BE6\u60C5\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u4F5C\u4E1A\u8BE6\u60C5\u5931\u8D25" });
  }
});
router20.put("/:assignmentId", authMiddleware, async (req, res) => {
  try {
    const { assignmentId } = req.params;
    const userId = req.user._id.toString();
    const updates = req.body;
    const assignment = await Assignment_default.findById(assignmentId);
    if (!assignment) {
      return res.status(404).json({ error: "\u4F5C\u4E1A\u4E0D\u5B58\u5728" });
    }
    if (assignment.teacherId.toString() !== userId) {
      return res.status(403).json({ error: "\u65E0\u6743\u4FEE\u6539\u6B64\u4F5C\u4E1A" });
    }
    const allowedFields = [
      "title",
      "description",
      "knowledgePoints",
      "type",
      "difficulty",
      "totalScore",
      "passingScore",
      "questions",
      "dueDate",
      "startDate",
      "duration",
      "settings"
    ];
    allowedFields.forEach((field) => {
      if (updates[field] !== void 0) {
        assignment[field] = updates[field];
      }
    });
    await assignment.save();
    res.json(assignment);
  } catch (error) {
    console.error("\u66F4\u65B0\u4F5C\u4E1A\u5931\u8D25:", error);
    res.status(500).json({ error: "\u66F4\u65B0\u4F5C\u4E1A\u5931\u8D25" });
  }
});
router20.post("/:assignmentId/publish", authMiddleware, async (req, res) => {
  try {
    const { assignmentId } = req.params;
    const userId = req.user._id.toString();
    const assignment = await Assignment_default.findById(assignmentId);
    if (!assignment) {
      return res.status(404).json({ error: "\u4F5C\u4E1A\u4E0D\u5B58\u5728" });
    }
    if (assignment.teacherId.toString() !== userId) {
      return res.status(403).json({ error: "\u65E0\u6743\u64CD\u4F5C" });
    }
    if (assignment.questions.length === 0) {
      return res.status(400).json({ error: "\u4F5C\u4E1A\u81F3\u5C11\u9700\u8981\u4E00\u9053\u9898\u76EE" });
    }
    assignment.status = "published";
    await assignment.save();
    try {
      const classDoc = await Class_default.findById(assignment.classId);
      if (!classDoc) {
        console.warn("\u26A0 \u672A\u627E\u5230\u73ED\u7EA7\uFF0C\u65E0\u6CD5\u53D1\u9001\u901A\u77E5");
      } else {
        const activeStudents = classDoc.students.filter((s) => s.status === "active").map((s) => s.userId);
        console.log(`\u{1F4E2} \u51C6\u5907\u5411 ${activeStudents.length} \u540D\u5B66\u751F\u53D1\u9001\u4F5C\u4E1A\u901A\u77E5`);
        if (activeStudents.length === 0) {
          console.warn("\u26A0 \u73ED\u7EA7\u4E2D\u6CA1\u6709\u6D3B\u8DC3\u5B66\u751F");
        } else {
          const dueDate = assignment.dueDate ? new Date(assignment.dueDate) : null;
          const dueDateStr = dueDate ? dueDate.toLocaleDateString("zh-CN", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
          }) : "\u65E0\u622A\u6B62\u65F6\u95F4";
          const notifications = activeStudents.map((studentId) => ({
            recipientId: studentId,
            recipientType: "student",
            senderId: userId,
            type: "assignment",
            title: "\u65B0\u4F5C\u4E1A\u53D1\u5E03",
            content: `${classDoc.name} \u53D1\u5E03\u4E86\u65B0\u4F5C\u4E1A\uFF1A${assignment.title}`,
            priority: "normal",
            relatedId: assignment._id,
            relatedType: "assignment",
            actionUrl: `/app/my-classes`,
            metadata: {
              assignmentTitle: assignment.title,
              className: classDoc.name,
              dueDate,
              dueDateStr,
              totalScore: assignment.totalScore
            },
            read: false
          }));
          const created = await Notification.insertMany(notifications);
          console.log(`\u2705 \u6210\u529F\u521B\u5EFA ${created.length} \u6761\u901A\u77E5\u8BB0\u5F55`);
          console.log(`\u{1F4E7} \u5DF2\u5411\u4EE5\u4E0B\u5B66\u751FID\u53D1\u9001\u901A\u77E5: ${activeStudents.slice(0, 3).join(", ")}${activeStudents.length > 3 ? "..." : ""}`);
        }
      }
    } catch (notifError) {
      console.error("\u274C \u521B\u5EFA\u901A\u77E5\u5931\u8D25:", notifError);
    }
    res.json({ message: "\u4F5C\u4E1A\u5DF2\u53D1\u5E03", assignment });
  } catch (error) {
    console.error("\u53D1\u5E03\u4F5C\u4E1A\u5931\u8D25:", error);
    res.status(500).json({ error: "\u53D1\u5E03\u4F5C\u4E1A\u5931\u8D25" });
  }
});
router20.post("/:assignmentId/submit", authMiddleware, async (req, res) => {
  try {
    const { assignmentId } = req.params;
    const { answers, timeSpent } = req.body;
    const userId = req.user._id.toString();
    const assignment = await Assignment_default.findById(assignmentId).populate("questions.questionId");
    if (!assignment) {
      return res.status(404).json({ error: "\u4F5C\u4E1A\u4E0D\u5B58\u5728" });
    }
    if (assignment.status !== "published") {
      return res.status(400).json({ error: "\u4F5C\u4E1A\u672A\u5F00\u653E\u63D0\u4EA4" });
    }
    if (assignment.dueDate && /* @__PURE__ */ new Date() > assignment.dueDate) {
      return res.status(400).json({ error: "\u4F5C\u4E1A\u5DF2\u622A\u6B62" });
    }
    if (assignment.startDate && /* @__PURE__ */ new Date() < assignment.startDate) {
      return res.status(400).json({ error: "\u4F5C\u4E1A\u5C1A\u672A\u5F00\u59CB" });
    }
    const classInfo = await Class_default.findById(assignment.classId);
    if (!classInfo) {
      return res.status(404).json({ error: "\u73ED\u7EA7\u4E0D\u5B58\u5728" });
    }
    const isStudent = classInfo.students.some(
      (s) => s.userId.toString() === userId && s.status === "active"
    );
    if (!isStudent) {
      return res.status(403).json({ error: "\u60A8\u4E0D\u5728\u6B64\u73ED\u7EA7\u4E2D" });
    }
    const previousSubmissions = assignment.submissions.filter(
      (s) => s.userId.toString() === userId
    );
    if (!assignment.settings.allowRetake && previousSubmissions.length > 0) {
      return res.status(400).json({ error: "\u4E0D\u5141\u8BB8\u91CD\u590D\u63D0\u4EA4" });
    }
    if (assignment.settings.maxAttempts && previousSubmissions.length >= assignment.settings.maxAttempts) {
      return res.status(400).json({ error: "\u5DF2\u8FBE\u5230\u6700\u5927\u63D0\u4EA4\u6B21\u6570" });
    }
    let score = 0;
    const processedAnswers = answers.map((answer, index) => {
      const assignmentQuestion = assignment.questions.find(
        (q) => q.questionId._id.toString() === answer.questionId.toString()
      );
      if (!assignmentQuestion) {
        return {
          questionIndex: index,
          questionId: answer.questionId,
          answer: answer.answer,
          isCorrect: false,
          score: 0
        };
      }
      const question = assignmentQuestion.questionId;
      const correctAnswer = question.correctAnswer;
      const studentAnswer = answer.answer;
      let isCorrect = false;
      let earnedScore = 0;
      if (question.type === "multiple") {
        const studentAns = Array.isArray(studentAnswer) ? [...studentAnswer].sort() : [];
        const correctAns = Array.isArray(correctAnswer) ? [...correctAnswer].sort() : [];
        isCorrect = JSON.stringify(studentAns) === JSON.stringify(correctAns);
      } else if (question.type === "single" || question.type === "truefalse") {
        console.log(`[\u5224\u65AD\u9898\u8C03\u8BD5] \u9898\u76EE: ${question.title}`);
        console.log(`[\u5224\u65AD\u9898\u8C03\u8BD5] \u5B66\u751F\u7B54\u6848:`, studentAnswer, `\u7C7B\u578B: ${typeof studentAnswer}`);
        console.log(`[\u5224\u65AD\u9898\u8C03\u8BD5] \u6B63\u786E\u7B54\u6848:`, correctAnswer, `\u7C7B\u578B: ${typeof correctAnswer}`);
        isCorrect = studentAnswer === correctAnswer;
        console.log(`[\u5224\u65AD\u9898\u8C03\u8BD5] \u662F\u5426\u6B63\u786E:`, isCorrect);
      } else if (question.type === "short" || question.type === "essay") {
        isCorrect = false;
      }
      if (isCorrect) {
        earnedScore = assignmentQuestion.score;
        score += earnedScore;
      }
      return {
        questionIndex: index,
        questionId: answer.questionId,
        answer: studentAnswer,
        isCorrect,
        score: earnedScore
      };
    });
    const user = await User_default.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "\u7528\u6237\u4E0D\u5B58\u5728" });
    }
    const isLate = assignment.dueDate && /* @__PURE__ */ new Date() > assignment.dueDate;
    const submissionStatus = isLate ? "late" : "submitted";
    assignment.submissions.push({
      userId: user._id,
      userName: user.username,
      submittedAt: /* @__PURE__ */ new Date(),
      score,
      answers: processedAnswers,
      timeSpent: timeSpent || 0,
      attempt: previousSubmissions.length + 1,
      status: submissionStatus
    });
    await assignment.save();
    res.json({
      message: "\u4F5C\u4E1A\u63D0\u4EA4\u6210\u529F",
      score,
      totalScore: assignment.totalScore,
      passed: score >= assignment.passingScore,
      attempt: previousSubmissions.length + 1
    });
  } catch (error) {
    console.error("\u63D0\u4EA4\u4F5C\u4E1A\u5931\u8D25:", error);
    res.status(500).json({ error: "\u63D0\u4EA4\u4F5C\u4E1A\u5931\u8D25" });
  }
});
router20.get("/:assignmentId/my-submission", authMiddleware, async (req, res) => {
  try {
    const { assignmentId } = req.params;
    const userId = req.user._id.toString();
    const userRole = req.user.role;
    if (userRole !== "student") {
      return res.status(403).json({ error: "\u53EA\u6709\u5B66\u751F\u53EF\u4EE5\u67E5\u770B\u81EA\u5DF1\u7684\u63D0\u4EA4" });
    }
    const assignment = await Assignment_default.findById(assignmentId).populate("questions.questionId");
    if (!assignment) {
      return res.status(404).json({ error: "\u4F5C\u4E1A\u4E0D\u5B58\u5728" });
    }
    const mySubmissions = assignment.submissions.filter(
      (s) => s.userId.toString() === userId
    ).sort((a, b) => b.submittedAt.getTime() - a.submittedAt.getTime());
    if (mySubmissions.length === 0) {
      return res.status(404).json({ error: "\u8FD8\u6CA1\u6709\u63D0\u4EA4\u8BB0\u5F55" });
    }
    const submissionsData = mySubmissions.map((submission, index) => {
      const questionResults = assignment.questions.map((q, qIndex) => {
        const question = q.questionId;
        const answer = submission.answers.find(
          (ans) => ans.questionId?.toString() === question?._id?.toString()
        );
        return {
          questionIndex: qIndex + 1,
          questionTitle: question?.title || "",
          questionType: question?.type || "",
          score: answer?.score || 0,
          maxScore: q.score,
          isCorrect: answer?.isCorrect || false,
          userAnswer: assignment.settings.showAnswers ? answer?.answer : void 0,
          correctAnswer: assignment.settings.showAnswers ? question?.correctAnswer : void 0
        };
      });
      return {
        attempt: submission.attempt,
        submittedAt: submission.submittedAt,
        score: submission.score,
        totalScore: assignment.totalScore,
        timeSpent: submission.timeSpent,
        status: submission.status,
        isPassed: submission.score >= assignment.passingScore,
        isLatest: index === 0,
        questionResults: assignment.settings.showAnswers ? questionResults : void 0
      };
    });
    res.json({
      assignmentId,
      assignmentTitle: assignment.title,
      assignmentType: assignment.type,
      passingScore: assignment.passingScore,
      totalScore: assignment.totalScore,
      allowRetake: assignment.settings.allowRetake,
      maxAttempts: assignment.settings.maxAttempts,
      showAnswers: assignment.settings.showAnswers,
      showScore: assignment.settings.showScore,
      submissions: submissionsData
    });
  } catch (error) {
    console.error("\u83B7\u53D6\u63D0\u4EA4\u8BE6\u60C5\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u63D0\u4EA4\u8BE6\u60C5\u5931\u8D25" });
  }
});
router20.get("/:assignmentId/submissions/stats", authMiddleware, async (req, res) => {
  try {
    const { assignmentId } = req.params;
    const userId = req.user._id.toString();
    const assignment = await Assignment_default.findById(assignmentId);
    if (!assignment) {
      return res.status(404).json({ error: "\u4F5C\u4E1A\u4E0D\u5B58\u5728" });
    }
    if (assignment.teacherId.toString() !== userId) {
      return res.status(403).json({ error: "\u65E0\u6743\u8BBF\u95EE" });
    }
    const classInfo = await Class_default.findById(assignment.classId);
    if (!classInfo) {
      return res.status(404).json({ error: "\u73ED\u7EA7\u4E0D\u5B58\u5728" });
    }
    const activeStudents = classInfo.students.filter((s) => s.status === "active");
    const totalStudents = activeStudents.length;
    const submittedCount = new Set(
      assignment.submissions.map((s) => s.userId.toString())
    ).size;
    const notSubmittedCount = totalStudents - submittedCount;
    const scores = assignment.submissions.map((s) => s.score);
    const avgScore = scores.length > 0 ? scores.reduce((sum, s) => sum + s, 0) / scores.length : 0;
    const passedCount = scores.filter((s) => s >= assignment.passingScore).length;
    const passRate = submittedCount > 0 ? passedCount / submittedCount * 100 : 0;
    const scoreRanges = {
      excellent: scores.filter((s) => s >= 90).length,
      // 优秀
      good: scores.filter((s) => s >= 80 && s < 90).length,
      // 良好
      pass: scores.filter((s) => s >= 60 && s < 80).length,
      // 及格
      fail: scores.filter((s) => s < 60).length
      // 不及格
    };
    res.json({
      assignmentId,
      title: assignment.title,
      totalStudents,
      submittedCount,
      notSubmittedCount,
      submissionRate: totalStudents > 0 ? submittedCount / totalStudents * 100 : 0,
      avgScore: Math.round(avgScore * 100) / 100,
      passRate: Math.round(passRate * 100) / 100,
      scoreRanges,
      submissions: assignment.submissions.map((s) => ({
        _id: s._id,
        userId: s.userId,
        userName: s.userName,
        submittedAt: s.submittedAt,
        score: s.score,
        attempt: s.attempt,
        status: s.status,
        timeSpent: s.timeSpent
      }))
    });
  } catch (error) {
    console.error("\u83B7\u53D6\u63D0\u4EA4\u7EDF\u8BA1\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u63D0\u4EA4\u7EDF\u8BA1\u5931\u8D25" });
  }
});
router20.get("/submission/:submissionId", authMiddleware, async (req, res) => {
  try {
    const { submissionId } = req.params;
    const userId = req.user._id.toString();
    const assignment = await Assignment_default.findOne({
      "submissions._id": submissionId
    });
    if (!assignment) {
      return res.status(404).json({ error: "\u63D0\u4EA4\u8BB0\u5F55\u4E0D\u5B58\u5728" });
    }
    if (assignment.teacherId.toString() !== userId) {
      return res.status(403).json({ error: "\u65E0\u6743\u8BBF\u95EE" });
    }
    const submission = assignment.submissions.find(
      (s) => s._id.toString() === submissionId
    );
    if (!submission) {
      return res.status(404).json({ error: "\u63D0\u4EA4\u8BB0\u5F55\u4E0D\u5B58\u5728" });
    }
    const questionsWithAnswers = assignment.questions.map((question, index) => {
      const studentAnswer = submission.answers.find((a) => a.questionIndex === index);
      return {
        ...question.toObject(),
        studentAnswer: studentAnswer?.answer,
        correctAnswer: question.correctAnswer
      };
    });
    res.json({
      _id: submission._id,
      // 添加_id字段，保持与前端一致
      submissionId: submission._id,
      studentId: submission.userId,
      studentName: submission.userName,
      submittedAt: submission.submittedAt,
      score: submission.score,
      status: submission.status,
      attempt: submission.attempt,
      timeSpent: submission.timeSpent,
      feedback: submission.feedback,
      answers: submission.answers,
      assignmentId: assignment._id,
      // 添加assignmentId字段
      questions: questionsWithAnswers,
      // 添加合并后的题目数组
      assignment: {
        id: assignment._id,
        title: assignment.title,
        questions: assignment.questions
      }
    });
  } catch (error) {
    console.error("\u83B7\u53D6\u63D0\u4EA4\u8BE6\u60C5\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u63D0\u4EA4\u8BE6\u60C5\u5931\u8D25" });
  }
});
router20.post("/submission/:submissionId/grade", authMiddleware, async (req, res) => {
  try {
    const { submissionId } = req.params;
    const { score, feedback } = req.body;
    const userId = req.user._id.toString();
    if (typeof score !== "number" || score < 0 || score > 100) {
      return res.status(400).json({ error: "\u5206\u6570\u5FC5\u987B\u57280-100\u4E4B\u95F4" });
    }
    const assignment = await Assignment_default.findOne({
      "submissions._id": submissionId
    });
    if (!assignment) {
      return res.status(404).json({ error: "\u63D0\u4EA4\u8BB0\u5F55\u4E0D\u5B58\u5728" });
    }
    if (assignment.teacherId.toString() !== userId) {
      return res.status(403).json({ error: "\u65E0\u6743\u6279\u6539\u6B64\u4F5C\u4E1A" });
    }
    const submission = assignment.submissions.find(
      (s) => s._id.toString() === submissionId
    );
    if (!submission) {
      return res.status(404).json({ error: "\u63D0\u4EA4\u8BB0\u5F55\u4E0D\u5B58\u5728" });
    }
    submission.score = score;
    submission.feedback = feedback || "";
    submission.status = "graded";
    await assignment.save();
    res.json({
      message: "\u6279\u6539\u6210\u529F",
      submission: {
        id: submission._id,
        score: submission.score,
        feedback: submission.feedback,
        status: submission.status
      }
    });
  } catch (error) {
    console.error("\u6279\u6539\u4F5C\u4E1A\u5931\u8D25:", error);
    res.status(500).json({ error: "\u6279\u6539\u4F5C\u4E1A\u5931\u8D25" });
  }
});
router20.delete("/:assignmentId", authMiddleware, async (req, res) => {
  try {
    const { assignmentId } = req.params;
    const userId = req.user._id.toString();
    const assignment = await Assignment_default.findById(assignmentId);
    if (!assignment) {
      return res.status(404).json({ error: "\u4F5C\u4E1A\u4E0D\u5B58\u5728" });
    }
    if (assignment.teacherId.toString() !== userId) {
      return res.status(403).json({ error: "\u65E0\u6743\u5220\u9664\u6B64\u4F5C\u4E1A" });
    }
    if (assignment.submissions.length > 0) {
      assignment.status = "archived";
      await assignment.save();
      return res.json({ message: "\u4F5C\u4E1A\u5DF2\u5F52\u6863" });
    }
    await Assignment_default.findByIdAndDelete(assignmentId);
    res.json({ message: "\u4F5C\u4E1A\u5DF2\u5220\u9664" });
  } catch (error) {
    console.error("\u5220\u9664\u4F5C\u4E1A\u5931\u8D25:", error);
    res.status(500).json({ error: "\u5220\u9664\u4F5C\u4E1A\u5931\u8D25" });
  }
});
var assignment_default = router20;

// src/routes/analytics-advanced.ts
var import_express21 = __toESM(require("express"));
init_KnowledgePoint();
init_StudySession();
var router21 = import_express21.default.Router();
router21.get("/time-distribution", authMiddleware, async (req, res) => {
  try {
    const userId = req.user._id;
    const { period = "7d" } = req.query;
    const now = /* @__PURE__ */ new Date();
    let startDate = /* @__PURE__ */ new Date();
    switch (period) {
      case "7d":
        startDate.setDate(now.getDate() - 7);
        break;
      case "30d":
        startDate.setDate(now.getDate() - 30);
        break;
      case "90d":
        startDate.setDate(now.getDate() - 90);
        break;
      default:
        startDate.setDate(now.getDate() - 7);
    }
    const sessions = await StudySession_default.find({
      userId,
      createdAt: { $gte: startDate }
    }).sort({ createdAt: 1 });
    const dailyStats = {};
    sessions.forEach((session) => {
      const date = session.createdAt.toISOString().split("T")[0];
      dailyStats[date] = (dailyStats[date] || 0) + (session.duration || 0);
    });
    const hourlyStats = {};
    sessions.forEach((session) => {
      const hour = session.createdAt.getHours();
      hourlyStats[hour] = (hourlyStats[hour] || 0) + (session.duration || 0);
    });
    const weekdayStats = {};
    sessions.forEach((session) => {
      const weekday = session.createdAt.getDay();
      weekdayStats[weekday] = (weekdayStats[weekday] || 0) + (session.duration || 0);
    });
    res.json({
      daily: Object.entries(dailyStats).map(([date, duration]) => ({
        date,
        duration
      })),
      hourly: Array.from({ length: 24 }, (_, hour) => ({
        hour,
        duration: hourlyStats[hour] || 0
      })),
      weekday: Array.from({ length: 7 }, (_, day) => ({
        day,
        dayName: ["\u5468\u65E5", "\u5468\u4E00", "\u5468\u4E8C", "\u5468\u4E09", "\u5468\u56DB", "\u5468\u4E94", "\u5468\u516D"][day],
        duration: weekdayStats[day] || 0
      }))
    });
  } catch (error) {
    console.error("\u83B7\u53D6\u65F6\u95F4\u5206\u5E03\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u65F6\u95F4\u5206\u5E03\u5931\u8D25" });
  }
});
router21.get("/knowledge-mastery", authMiddleware, async (req, res) => {
  try {
    const userId = req.user._id;
    const userProgress = await UserProgress_default.find({ userId }).populate("pointId");
    const masteryDistribution = {
      expert: 0,
      // 90-100
      proficient: 0,
      // 70-89
      intermediate: 0,
      // 50-69
      beginner: 0,
      // 30-49
      novice: 0
      // 0-29
    };
    userProgress.forEach((up) => {
      const level = up.bestScore;
      if (level >= 90) masteryDistribution.expert++;
      else if (level >= 70) masteryDistribution.proficient++;
      else if (level >= 50) masteryDistribution.intermediate++;
      else if (level >= 30) masteryDistribution.beginner++;
      else masteryDistribution.novice++;
    });
    const subjectStats = {};
    for (const up of userProgress) {
      const kp = await KnowledgePoint_default.findOne({ id: up.pointId });
      const subject = kp?.subject || "\u672A\u5206\u7C7B";
      if (!subjectStats[subject]) {
        subjectStats[subject] = {
          total: 0,
          mastered: 0,
          avgMastery: 0,
          totalMastery: 0
        };
      }
      subjectStats[subject].total++;
      subjectStats[subject].totalMastery += up.bestScore;
      if (up.bestScore >= 80) {
        subjectStats[subject].mastered++;
      }
    }
    Object.keys(subjectStats).forEach((subject) => {
      const stats = subjectStats[subject];
      stats.avgMastery = Math.round(stats.totalMastery / stats.total);
      delete stats.totalMastery;
    });
    const difficultyStats = {};
    for (const up of userProgress) {
      const kp = await KnowledgePoint_default.findOne({ id: up.pointId });
      const difficulty = kp?.difficulty || 3;
      if (!difficultyStats[difficulty]) {
        difficultyStats[difficulty] = {
          total: 0,
          mastered: 0,
          avgMastery: 0,
          totalMastery: 0
        };
      }
      difficultyStats[difficulty].total++;
      difficultyStats[difficulty].totalMastery += up.bestScore;
      if (up.bestScore >= 80) {
        difficultyStats[difficulty].mastered++;
      }
    }
    Object.keys(difficultyStats).forEach((difficulty) => {
      const stats = difficultyStats[difficulty];
      stats.avgMastery = Math.round(stats.totalMastery / stats.total);
      delete stats.totalMastery;
    });
    res.json({
      distribution: masteryDistribution,
      bySubject: Object.entries(subjectStats).map(([subject, stats]) => ({
        subject,
        ...stats
      })),
      byDifficulty: Object.entries(difficultyStats).map(([difficulty, stats]) => ({
        difficulty: Number(difficulty),
        difficultyName: Number(difficulty) <= 2 ? "\u7B80\u5355" : Number(difficulty) <= 3 ? "\u4E2D\u7B49" : "\u56F0\u96BE",
        ...stats
      })),
      total: userProgress.length,
      avgMastery: userProgress.length > 0 ? Math.round(userProgress.reduce((sum, up) => sum + up.bestScore, 0) / userProgress.length) : 0
    });
  } catch (error) {
    console.error("\u83B7\u53D6\u77E5\u8BC6\u70B9\u638C\u63E1\u5EA6\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u77E5\u8BC6\u70B9\u638C\u63E1\u5EA6\u5931\u8D25" });
  }
});
router21.get("/ability-radar", authMiddleware, async (req, res) => {
  try {
    const userId = req.user._id;
    const userProgress = await UserProgress_default.find({ userId });
    const sessions = await StudySession_default.find({ userId });
    const wrongQuestions = await WrongQuestion_default.find({ userId });
    const abilities = {
      memory: 0,
      // 记忆力
      understanding: 0,
      // 理解力
      application: 0,
      // 应用力
      analysis: 0,
      // 分析力
      synthesis: 0,
      // 综合力
      evaluation: 0
      // 评价力
    };
    if (userProgress.length > 0) {
      const avgMastery = userProgress.reduce((sum, up) => sum + up.bestScore, 0) / userProgress.length;
      abilities.memory = Math.min(100, avgMastery);
      const avgAttempts = userProgress.reduce((sum, up) => sum + up.quizAttempts, 0) / userProgress.length;
      abilities.understanding = Math.min(100, avgMastery * 0.7 + Math.min(avgAttempts * 5, 30));
      const practiceRate = sessions.length / userProgress.length;
      abilities.application = Math.min(100, avgMastery * 0.6 + Math.min(practiceRate * 20, 40));
      const masteredWrong = wrongQuestions.filter((wq) => wq.mastered).length;
      const wrongRate = wrongQuestions.length > 0 ? masteredWrong / wrongQuestions.length : 0.5;
      abilities.analysis = Math.min(100, avgMastery * 0.5 + wrongRate * 50);
      abilities.synthesis = Math.min(100, (abilities.memory + abilities.understanding + abilities.application) / 3);
      const recentSessions = sessions.filter((s) => {
        const daysDiff = (Date.now() - s.createdAt.getTime()) / (1e3 * 60 * 60 * 24);
        return daysDiff <= 30;
      });
      const studyFrequency = recentSessions.length / 30;
      abilities.evaluation = Math.min(100, avgMastery * 0.6 + Math.min(studyFrequency * 100, 40));
    }
    res.json({
      abilities: [
        { name: "\u8BB0\u5FC6\u529B", value: Math.round(abilities.memory) },
        { name: "\u7406\u89E3\u529B", value: Math.round(abilities.understanding) },
        { name: "\u5E94\u7528\u529B", value: Math.round(abilities.application) },
        { name: "\u5206\u6790\u529B", value: Math.round(abilities.analysis) },
        { name: "\u7EFC\u5408\u529B", value: Math.round(abilities.synthesis) },
        { name: "\u8BC4\u4EF7\u529B", value: Math.round(abilities.evaluation) }
      ]
    });
  } catch (error) {
    console.error("\u83B7\u53D6\u80FD\u529B\u96F7\u8FBE\u56FE\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u80FD\u529B\u96F7\u8FBE\u56FE\u5931\u8D25" });
  }
});
router21.get("/learning-trend", authMiddleware, async (req, res) => {
  try {
    const userId = req.user._id;
    const startDate = /* @__PURE__ */ new Date();
    startDate.setDate(startDate.getDate() - 90);
    const sessions = await StudySession_default.find({
      userId,
      createdAt: { $gte: startDate }
    }).sort({ createdAt: 1 });
    const userProgress = await UserProgress_default.find({
      userId,
      createdAt: { $gte: startDate }
    });
    const weeklyStats = {};
    sessions.forEach((session) => {
      const weekStart = new Date(session.createdAt);
      weekStart.setDate(weekStart.getDate() - weekStart.getDay());
      const weekKey = weekStart.toISOString().split("T")[0];
      if (!weeklyStats[weekKey]) {
        weeklyStats[weekKey] = {
          duration: 0,
          sessionCount: 0,
          knowledgeCount: 0
        };
      }
      weeklyStats[weekKey].duration += session.duration || 0;
      weeklyStats[weekKey].sessionCount++;
    });
    userProgress.forEach((up) => {
      if (up.createdAt) {
        const weekStart = new Date(up.createdAt);
        weekStart.setDate(weekStart.getDate() - weekStart.getDay());
        const weekKey = weekStart.toISOString().split("T")[0];
        if (weeklyStats[weekKey]) {
          weeklyStats[weekKey].knowledgeCount++;
        }
      }
    });
    const trendData = Object.entries(weeklyStats).map(([week, stats]) => ({
      week,
      ...stats
    })).sort((a, b) => a.week.localeCompare(b.week));
    if (trendData.length >= 4) {
      const recentWeeks = trendData.slice(-4);
      const avgDuration = recentWeeks.reduce((sum, w) => sum + w.duration, 0) / 4;
      const avgSessions = recentWeeks.reduce((sum, w) => sum + w.sessionCount, 0) / 4;
      const avgKnowledge = recentWeeks.reduce((sum, w) => sum + w.knowledgeCount, 0) / 4;
      const firstWeek = recentWeeks[0];
      const lastWeek = recentWeeks[recentWeeks.length - 1];
      const durationGrowth = firstWeek.duration > 0 ? (lastWeek.duration - firstWeek.duration) / firstWeek.duration / 3 : 0.1;
      const predictions = [];
      for (let i = 1; i <= 4; i++) {
        const lastDate = new Date(trendData[trendData.length - 1].week);
        lastDate.setDate(lastDate.getDate() + 7 * i);
        predictions.push({
          week: lastDate.toISOString().split("T")[0],
          duration: Math.round(avgDuration * (1 + durationGrowth * i)),
          sessionCount: Math.round(avgSessions * (1 + durationGrowth * i * 0.5)),
          knowledgeCount: Math.round(avgKnowledge * (1 + durationGrowth * i * 0.3)),
          isPrediction: true
        });
      }
      res.json({
        historical: trendData,
        predictions,
        summary: {
          avgWeeklyDuration: Math.round(avgDuration),
          avgWeeklySessions: Math.round(avgSessions),
          avgWeeklyKnowledge: Math.round(avgKnowledge),
          growthRate: Math.round(durationGrowth * 100)
        }
      });
    } else {
      res.json({
        historical: trendData,
        predictions: [],
        summary: {
          avgWeeklyDuration: 0,
          avgWeeklySessions: 0,
          avgWeeklyKnowledge: 0,
          growthRate: 0
        }
      });
    }
  } catch (error) {
    console.error("\u83B7\u53D6\u5B66\u4E60\u8D8B\u52BF\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u5B66\u4E60\u8D8B\u52BF\u5931\u8D25" });
  }
});
router21.get("/wrong-questions-analysis", authMiddleware, async (req, res) => {
  try {
    const userId = req.user._id;
    const wrongQuestions = await WrongQuestion_default.find({ userId });
    const byKnowledge = {};
    for (const wq of wrongQuestions) {
      const kpId = wq.pointId || "unknown";
      const kpTitle = wq.pointTitle || "\u672A\u77E5\u77E5\u8BC6\u70B9";
      if (!byKnowledge[kpId]) {
        byKnowledge[kpId] = {
          knowledgePoint: kpTitle,
          count: 0,
          corrected: 0,
          avgAttempts: 0,
          totalAttempts: 0
        };
      }
      byKnowledge[kpId].count++;
      if (wq.mastered) {
        byKnowledge[kpId].corrected++;
      }
      byKnowledge[kpId].totalAttempts += wq.retryCount;
    }
    Object.keys(byKnowledge).forEach((kpId) => {
      const stats = byKnowledge[kpId];
      stats.avgAttempts = stats.count > 0 ? Math.round(stats.totalAttempts / stats.count * 10) / 10 : 0;
      stats.correctionRate = stats.count > 0 ? Math.round(stats.corrected / stats.count * 100) : 0;
      delete stats.totalAttempts;
    });
    const byType = {};
    wrongQuestions.forEach((wq) => {
      const type = wq.type || "unknown";
      byType[type] = (byType[type] || 0) + 1;
    });
    const last30Days = /* @__PURE__ */ new Date();
    last30Days.setDate(last30Days.getDate() - 30);
    const recentWrong = wrongQuestions.filter((wq) => wq.createdAt >= last30Days);
    res.json({
      total: wrongQuestions.length,
      corrected: wrongQuestions.filter((wq) => wq.mastered).length,
      correctionRate: wrongQuestions.length > 0 ? Math.round(wrongQuestions.filter((wq) => wq.mastered).length / wrongQuestions.length * 100) : 0,
      byKnowledge: Object.entries(byKnowledge).map(([_, stats]) => stats).sort((a, b) => b.count - a.count).slice(0, 10),
      byType: Object.entries(byType).map(([type, count]) => ({
        type,
        typeName: type === "single" ? "\u5355\u9009" : type === "multiple" ? "\u591A\u9009" : type === "boolean" ? "\u5224\u65AD" : "\u5176\u4ED6",
        count
      })),
      recentTrend: {
        last30Days: recentWrong.length,
        avgPerDay: Math.round(recentWrong.length / 30 * 10) / 10
      }
    });
  } catch (error) {
    console.error("\u83B7\u53D6\u9519\u9898\u5206\u6790\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u9519\u9898\u5206\u6790\u5931\u8D25" });
  }
});
router21.get("/comprehensive-report", authMiddleware, async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User_default.findById(userId);
    const userProgress = await UserProgress_default.find({ userId });
    const sessions = await StudySession_default.find({ userId });
    const wrongQuestions = await WrongQuestion_default.find({ userId });
    const totalDuration = sessions.reduce((sum, s) => sum + (s.duration || 0), 0);
    const avgMastery = userProgress.length > 0 ? userProgress.reduce((sum, up) => sum + up.bestScore, 0) / userProgress.length : 0;
    const last7Days = /* @__PURE__ */ new Date();
    last7Days.setDate(last7Days.getDate() - 7);
    const recentSessions = sessions.filter((s) => s.createdAt >= last7Days);
    const recentDuration = recentSessions.reduce((sum, s) => sum + (s.duration || 0), 0);
    const allUsers = await User_default.find();
    const rank = Math.floor(Math.random() * allUsers.length) + 1;
    const percentile = Math.round((1 - rank / allUsers.length) * 100);
    const suggestions = [];
    if (avgMastery < 60) {
      suggestions.push("\u5EFA\u8BAE\u52A0\u5F3A\u57FA\u7840\u77E5\u8BC6\u7684\u5B66\u4E60\uFF0C\u63D0\u9AD8\u6574\u4F53\u638C\u63E1\u5EA6");
    }
    if (recentDuration < 3600) {
      suggestions.push("\u6700\u8FD1\u4E00\u5468\u5B66\u4E60\u65F6\u95F4\u8F83\u5C11\uFF0C\u5EFA\u8BAE\u4FDD\u6301\u6BCF\u5929\u81F3\u5C111\u5C0F\u65F6\u7684\u5B66\u4E60");
    }
    if (wrongQuestions.length > 20) {
      suggestions.push("\u9519\u9898\u8F83\u591A\uFF0C\u5EFA\u8BAE\u91CD\u70B9\u590D\u4E60\u8584\u5F31\u77E5\u8BC6\u70B9");
    }
    if (suggestions.length === 0) {
      suggestions.push("\u5B66\u4E60\u72B6\u6001\u826F\u597D\uFF0C\u7EE7\u7EED\u4FDD\u6301\uFF01");
    }
    res.json({
      user: {
        username: user?.username,
        joinDate: user?.createdAt
      },
      overview: {
        totalKnowledge: userProgress.length,
        masteredKnowledge: userProgress.filter((up) => up.bestScore >= 80).length,
        avgMastery: Math.round(avgMastery),
        totalDuration,
        totalSessions: sessions.length,
        wrongQuestions: wrongQuestions.length
      },
      recent: {
        last7DaysSessions: recentSessions.length,
        last7DaysDuration: recentDuration,
        avgDailyDuration: Math.round(recentDuration / 7)
      },
      ranking: {
        rank,
        totalUsers: allUsers.length,
        percentile
      },
      suggestions
    });
  } catch (error) {
    console.error("\u83B7\u53D6\u7EFC\u5408\u62A5\u544A\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u7EFC\u5408\u62A5\u544A\u5931\u8D25" });
  }
});
var analytics_advanced_default = router21;

// src/routes/membership.ts
var import_express22 = __toESM(require("express"));

// src/models/Membership.ts
var import_mongoose15 = __toESM(require("mongoose"));
var MembershipSchema = new import_mongoose15.Schema({
  userId: { type: import_mongoose15.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
  tier: {
    type: String,
    enum: ["free", "basic", "premium", "enterprise"],
    default: "free"
  },
  status: {
    type: String,
    enum: ["active", "expired", "cancelled"],
    default: "active"
  },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date },
  autoRenew: { type: Boolean, default: false },
  paymentMethod: { type: String },
  features: {
    maxKnowledgePoints: { type: Number, default: 50 },
    maxAIQuestions: { type: Number, default: 20 },
    advancedAnalytics: { type: Boolean, default: false },
    prioritySupport: { type: Boolean, default: false },
    customThemes: { type: Boolean, default: false },
    exportData: { type: Boolean, default: false },
    adFree: { type: Boolean, default: false }
  },
  usage: {
    knowledgePoints: { type: Number, default: 0 },
    aiQuestions: { type: Number, default: 0 },
    lastResetDate: { type: Date, default: Date.now }
  },
  transactions: [{
    transactionId: { type: String, required: true },
    amount: { type: Number, required: true },
    currency: { type: String, default: "CNY" },
    status: {
      type: String,
      enum: ["pending", "completed", "failed", "refunded"],
      default: "pending"
    },
    createdAt: { type: Date, default: Date.now }
  }]
}, {
  timestamps: true
});
MembershipSchema.index({ userId: 1 });
MembershipSchema.index({ tier: 1, status: 1 });
MembershipSchema.index({ endDate: 1 });
MembershipSchema.statics.getTierFeatures = function(tier) {
  const features = {
    free: {
      maxKnowledgePoints: 50,
      maxAIQuestions: 20,
      advancedAnalytics: false,
      prioritySupport: false,
      customThemes: false,
      exportData: false,
      adFree: false
    },
    basic: {
      maxKnowledgePoints: 200,
      maxAIQuestions: 100,
      advancedAnalytics: true,
      prioritySupport: false,
      customThemes: true,
      exportData: true,
      adFree: true
    },
    premium: {
      maxKnowledgePoints: 1e3,
      maxAIQuestions: 500,
      advancedAnalytics: true,
      prioritySupport: true,
      customThemes: true,
      exportData: true,
      adFree: true
    },
    enterprise: {
      maxKnowledgePoints: -1,
      // 无限制
      maxAIQuestions: -1,
      advancedAnalytics: true,
      prioritySupport: true,
      customThemes: true,
      exportData: true,
      adFree: true
    }
  };
  return features[tier] || features.free;
};
var Membership_default = import_mongoose15.default.model("Membership", MembershipSchema);

// src/models/Points.ts
var import_mongoose16 = __toESM(require("mongoose"));
var PointsSchema = new import_mongoose16.Schema({
  userId: { type: import_mongoose16.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
  balance: { type: Number, default: 0 },
  totalEarned: { type: Number, default: 0 },
  totalSpent: { type: Number, default: 0 },
  level: { type: Number, default: 1 },
  levelName: { type: String, default: "\u521D\u5B66\u8005" },
  nextLevelPoints: { type: Number, default: 100 },
  history: [{
    type: {
      type: String,
      enum: ["earn", "spend", "expire"],
      required: true
    },
    amount: { type: Number, required: true },
    reason: { type: String, required: true },
    description: { type: String },
    relatedId: { type: import_mongoose16.Schema.Types.ObjectId },
    relatedType: { type: String },
    createdAt: { type: Date, default: Date.now }
  }]
}, {
  timestamps: true
});
PointsSchema.index({ userId: 1 });
PointsSchema.index({ level: 1 });
PointsSchema.statics.getLevelInfo = function(totalPoints) {
  const levels = [
    { level: 1, name: "\u521D\u5B66\u8005", minPoints: 0, maxPoints: 99 },
    { level: 2, name: "\u5B66\u5F92", minPoints: 100, maxPoints: 299 },
    { level: 3, name: "\u5B66\u8005", minPoints: 300, maxPoints: 599 },
    { level: 4, name: "\u4E13\u5BB6", minPoints: 600, maxPoints: 999 },
    { level: 5, name: "\u5927\u5E08", minPoints: 1e3, maxPoints: 1999 },
    { level: 6, name: "\u5B97\u5E08", minPoints: 2e3, maxPoints: 3999 },
    { level: 7, name: "\u4F20\u5947", minPoints: 4e3, maxPoints: 7999 },
    { level: 8, name: "\u795E\u8BDD", minPoints: 8e3, maxPoints: 15999 },
    { level: 9, name: "\u81F3\u5C0A", minPoints: 16e3, maxPoints: 31999 },
    { level: 10, name: "\u65E0\u4E0A", minPoints: 32e3, maxPoints: Infinity }
  ];
  for (const levelInfo of levels) {
    if (totalPoints >= levelInfo.minPoints && totalPoints <= levelInfo.maxPoints) {
      return {
        ...levelInfo,
        nextLevelPoints: levelInfo.maxPoints === Infinity ? 0 : levelInfo.maxPoints + 1
      };
    }
  }
  return levels[0];
};
PointsSchema.methods.addPoints = function(amount, reason, description) {
  this.balance += amount;
  this.totalEarned += amount;
  this.history.push({
    type: "earn",
    amount,
    reason,
    description,
    createdAt: /* @__PURE__ */ new Date()
  });
  const levelInfo = this.constructor.getLevelInfo(this.totalEarned);
  this.level = levelInfo.level;
  this.levelName = levelInfo.name;
  this.nextLevelPoints = levelInfo.nextLevelPoints;
  return this.save();
};
PointsSchema.methods.spendPoints = function(amount, reason, description) {
  if (this.balance < amount) {
    throw new Error("\u79EF\u5206\u4E0D\u8DB3");
  }
  this.balance -= amount;
  this.totalSpent += amount;
  this.history.push({
    type: "spend",
    amount,
    reason,
    description,
    createdAt: /* @__PURE__ */ new Date()
  });
  return this.save();
};
var Points_default = import_mongoose16.default.model("Points", PointsSchema);

// src/routes/membership.ts
var router22 = import_express22.default.Router();
router22.get("/me", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId;
    let membership = await Membership_default.findOne({ userId });
    if (!membership) {
      const features = Membership_default.getTierFeatures("free");
      membership = new Membership_default({
        userId,
        tier: "free",
        features,
        usage: {
          knowledgePoints: 0,
          aiQuestions: 0,
          lastResetDate: /* @__PURE__ */ new Date()
        }
      });
      await membership.save();
    }
    if (membership.endDate && membership.endDate < /* @__PURE__ */ new Date()) {
      membership.status = "expired";
      membership.tier = "free";
      membership.features = Membership_default.getTierFeatures("free");
      await membership.save();
    }
    res.json(membership);
  } catch (error) {
    console.error("\u83B7\u53D6\u4F1A\u5458\u4FE1\u606F\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u4F1A\u5458\u4FE1\u606F\u5931\u8D25" });
  }
});
router22.get("/plans", async (req, res) => {
  try {
    const plans = [
      {
        tier: "free",
        name: "\u514D\u8D39\u7248",
        price: 0,
        period: "\u6C38\u4E45",
        features: Membership_default.getTierFeatures("free"),
        description: "\u9002\u5408\u521D\u5B66\u8005\uFF0C\u4F53\u9A8C\u57FA\u7840\u529F\u80FD"
      },
      {
        tier: "basic",
        name: "\u57FA\u7840\u7248",
        price: 29,
        period: "\u6708",
        features: Membership_default.getTierFeatures("basic"),
        description: "\u9002\u5408\u65E5\u5E38\u5B66\u4E60\uFF0C\u89E3\u9501\u66F4\u591A\u529F\u80FD"
      },
      {
        tier: "premium",
        name: "\u9AD8\u7EA7\u7248",
        price: 99,
        period: "\u6708",
        features: Membership_default.getTierFeatures("premium"),
        description: "\u9002\u5408\u6DF1\u5EA6\u5B66\u4E60\uFF0C\u4EAB\u53D7\u5168\u90E8\u7279\u6743"
      },
      {
        tier: "enterprise",
        name: "\u4F01\u4E1A\u7248",
        price: 999,
        period: "\u5E74",
        features: Membership_default.getTierFeatures("enterprise"),
        description: "\u9002\u5408\u56E2\u961F\u4F7F\u7528\uFF0C\u65E0\u9650\u5236\u4F7F\u7528"
      }
    ];
    res.json(plans);
  } catch (error) {
    console.error("\u83B7\u53D6\u5957\u9910\u5217\u8868\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u5957\u9910\u5217\u8868\u5931\u8D25" });
  }
});
router22.post("/upgrade", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId;
    const { tier, period = "month" } = req.body;
    if (!["basic", "premium", "enterprise"].includes(tier)) {
      return res.status(400).json({ error: "\u65E0\u6548\u7684\u4F1A\u5458\u7B49\u7EA7" });
    }
    let membership = await Membership_default.findOne({ userId });
    if (!membership) {
      membership = new Membership_default({ userId });
    }
    const startDate = /* @__PURE__ */ new Date();
    const endDate = /* @__PURE__ */ new Date();
    if (period === "month") {
      endDate.setMonth(endDate.getMonth() + 1);
    } else if (period === "year") {
      endDate.setFullYear(endDate.getFullYear() + 1);
    }
    membership.tier = tier;
    membership.status = "active";
    membership.startDate = startDate;
    membership.endDate = endDate;
    membership.features = Membership_default.getTierFeatures(tier);
    const prices = {
      basic: { month: 29, year: 290 },
      premium: { month: 99, year: 990 },
      enterprise: { year: 999 }
    };
    const amount = prices[tier][period] || 0;
    membership.transactions.push({
      transactionId: `TXN${Date.now()}`,
      amount,
      currency: "CNY",
      status: "completed",
      createdAt: /* @__PURE__ */ new Date()
    });
    await membership.save();
    const points = await Points_default.findOne({ userId });
    if (points) {
      await points.addPoints(amount * 10, "membership_upgrade", `\u5347\u7EA7\u5230${tier}\u4F1A\u5458`);
    }
    res.json({
      message: "\u4F1A\u5458\u5347\u7EA7\u6210\u529F",
      membership
    });
  } catch (error) {
    console.error("\u5347\u7EA7\u4F1A\u5458\u5931\u8D25:", error);
    res.status(500).json({ error: "\u5347\u7EA7\u4F1A\u5458\u5931\u8D25" });
  }
});
router22.post("/cancel", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId;
    const membership = await Membership_default.findOne({ userId });
    if (!membership) {
      return res.status(404).json({ error: "\u4F1A\u5458\u4FE1\u606F\u4E0D\u5B58\u5728" });
    }
    if (membership.tier === "free") {
      return res.status(400).json({ error: "\u514D\u8D39\u4F1A\u5458\u65E0\u9700\u53D6\u6D88" });
    }
    membership.status = "cancelled";
    membership.autoRenew = false;
    await membership.save();
    res.json({ message: "\u4F1A\u5458\u5DF2\u53D6\u6D88\uFF0C\u5C06\u5728\u5230\u671F\u540E\u5931\u6548" });
  } catch (error) {
    console.error("\u53D6\u6D88\u4F1A\u5458\u5931\u8D25:", error);
    res.status(500).json({ error: "\u53D6\u6D88\u4F1A\u5458\u5931\u8D25" });
  }
});
router22.post("/check-limit", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId;
    const { type } = req.body;
    const membership = await Membership_default.findOne({ userId });
    if (!membership) {
      return res.json({ allowed: false, reason: "\u4F1A\u5458\u4FE1\u606F\u4E0D\u5B58\u5728" });
    }
    const now = /* @__PURE__ */ new Date();
    const lastReset = membership.usage.lastResetDate;
    if (now.getMonth() !== lastReset.getMonth() || now.getFullYear() !== lastReset.getFullYear()) {
      membership.usage.knowledgePoints = 0;
      membership.usage.aiQuestions = 0;
      membership.usage.lastResetDate = now;
      await membership.save();
    }
    const maxLimit = type === "knowledgePoints" ? membership.features.maxKnowledgePoints : membership.features.maxAIQuestions;
    const currentUsage = type === "knowledgePoints" ? membership.usage.knowledgePoints : membership.usage.aiQuestions;
    if (maxLimit === -1) {
      return res.json({ allowed: true });
    }
    if (currentUsage >= maxLimit) {
      return res.json({
        allowed: false,
        reason: `\u5DF2\u8FBE\u5230${type === "knowledgePoints" ? "\u77E5\u8BC6\u70B9" : "AI\u63D0\u95EE"}\u6570\u91CF\u4E0A\u9650`,
        current: currentUsage,
        max: maxLimit
      });
    }
    res.json({ allowed: true, current: currentUsage, max: maxLimit });
  } catch (error) {
    console.error("\u68C0\u67E5\u9650\u5236\u5931\u8D25:", error);
    res.status(500).json({ error: "\u68C0\u67E5\u9650\u5236\u5931\u8D25" });
  }
});
router22.post("/increment-usage", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId;
    const { type } = req.body;
    const membership = await Membership_default.findOne({ userId });
    if (!membership) {
      return res.status(404).json({ error: "\u4F1A\u5458\u4FE1\u606F\u4E0D\u5B58\u5728" });
    }
    if (type === "knowledgePoints") {
      membership.usage.knowledgePoints++;
    } else if (type === "aiQuestions") {
      membership.usage.aiQuestions++;
    }
    await membership.save();
    res.json({ success: true });
  } catch (error) {
    console.error("\u589E\u52A0\u4F7F\u7528\u91CF\u5931\u8D25:", error);
    res.status(500).json({ error: "\u589E\u52A0\u4F7F\u7528\u91CF\u5931\u8D25" });
  }
});
router22.get("/stats", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId;
    const membership = await Membership_default.findOne({ userId });
    if (!membership) {
      return res.status(404).json({ error: "\u4F1A\u5458\u4FE1\u606F\u4E0D\u5B58\u5728" });
    }
    const stats = {
      tier: membership.tier,
      status: membership.status,
      daysRemaining: membership.endDate ? Math.ceil((membership.endDate.getTime() - Date.now()) / (1e3 * 60 * 60 * 24)) : null,
      usage: {
        knowledgePoints: {
          current: membership.usage.knowledgePoints,
          max: membership.features.maxKnowledgePoints,
          percentage: membership.features.maxKnowledgePoints === -1 ? 0 : membership.usage.knowledgePoints / membership.features.maxKnowledgePoints * 100
        },
        aiQuestions: {
          current: membership.usage.aiQuestions,
          max: membership.features.maxAIQuestions,
          percentage: membership.features.maxAIQuestions === -1 ? 0 : membership.usage.aiQuestions / membership.features.maxAIQuestions * 100
        }
      },
      totalSpent: membership.transactions.filter((t) => t.status === "completed").reduce((sum, t) => sum + t.amount, 0)
    };
    res.json(stats);
  } catch (error) {
    console.error("\u83B7\u53D6\u4F1A\u5458\u7EDF\u8BA1\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u4F1A\u5458\u7EDF\u8BA1\u5931\u8D25" });
  }
});
var membership_default = router22;

// src/routes/points.ts
var import_express23 = __toESM(require("express"));
var router23 = import_express23.default.Router();
router23.get("/me", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId;
    let points = await Points_default.findOne({ userId });
    if (!points) {
      const levelInfo = Points_default.getLevelInfo(0);
      points = new Points_default({
        userId,
        balance: 0,
        totalEarned: 0,
        totalSpent: 0,
        level: levelInfo.level,
        levelName: levelInfo.name,
        nextLevelPoints: levelInfo.nextLevelPoints,
        history: []
      });
      await points.save();
    }
    res.json(points);
  } catch (error) {
    console.error("\u83B7\u53D6\u79EF\u5206\u4FE1\u606F\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u79EF\u5206\u4FE1\u606F\u5931\u8D25" });
  }
});
router23.get("/history", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId;
    const { page = 1, limit = 20, type } = req.query;
    const points = await Points_default.findOne({ userId });
    if (!points) {
      return res.json({ history: [], total: 0 });
    }
    let history = points.history;
    if (type && ["earn", "spend", "expire"].includes(type)) {
      history = history.filter((h) => h.type === type);
    }
    history = history.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const startIndex = (pageNum - 1) * limitNum;
    const endIndex = startIndex + limitNum;
    const paginatedHistory = history.slice(startIndex, endIndex);
    res.json({
      history: paginatedHistory,
      total: history.length,
      page: pageNum,
      totalPages: Math.ceil(history.length / limitNum)
    });
  } catch (error) {
    console.error("\u83B7\u53D6\u79EF\u5206\u5386\u53F2\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u79EF\u5206\u5386\u53F2\u5931\u8D25" });
  }
});
router23.post("/earn", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId;
    const { amount, reason, description } = req.body;
    if (!amount || amount <= 0) {
      return res.status(400).json({ error: "\u79EF\u5206\u6570\u91CF\u5FC5\u987B\u5927\u4E8E0" });
    }
    if (!reason) {
      return res.status(400).json({ error: "\u8BF7\u63D0\u4F9B\u79EF\u5206\u83B7\u53D6\u539F\u56E0" });
    }
    let points = await Points_default.findOne({ userId });
    if (!points) {
      const levelInfo = Points_default.getLevelInfo(0);
      points = new Points_default({
        userId,
        level: levelInfo.level,
        levelName: levelInfo.name,
        nextLevelPoints: levelInfo.nextLevelPoints
      });
    }
    await points.addPoints(amount, reason, description);
    res.json({
      message: "\u79EF\u5206\u83B7\u53D6\u6210\u529F",
      points: {
        balance: points.balance,
        earned: amount,
        level: points.level,
        levelName: points.levelName
      }
    });
  } catch (error) {
    console.error("\u8D5A\u53D6\u79EF\u5206\u5931\u8D25:", error);
    res.status(500).json({ error: "\u8D5A\u53D6\u79EF\u5206\u5931\u8D25" });
  }
});
router23.post("/spend", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId;
    const { amount, reason, description } = req.body;
    if (!amount || amount <= 0) {
      return res.status(400).json({ error: "\u79EF\u5206\u6570\u91CF\u5FC5\u987B\u5927\u4E8E0" });
    }
    if (!reason) {
      return res.status(400).json({ error: "\u8BF7\u63D0\u4F9B\u79EF\u5206\u6D88\u8D39\u539F\u56E0" });
    }
    const points = await Points_default.findOne({ userId });
    if (!points) {
      return res.status(404).json({ error: "\u79EF\u5206\u4FE1\u606F\u4E0D\u5B58\u5728" });
    }
    if (points.balance < amount) {
      return res.status(400).json({ error: "\u79EF\u5206\u4E0D\u8DB3" });
    }
    await points.spendPoints(amount, reason, description);
    res.json({
      message: "\u79EF\u5206\u6D88\u8D39\u6210\u529F",
      points: {
        balance: points.balance,
        spent: amount
      }
    });
  } catch (error) {
    console.error("\u6D88\u8D39\u79EF\u5206\u5931\u8D25:", error);
    res.status(500).json({ error: error.message || "\u6D88\u8D39\u79EF\u5206\u5931\u8D25" });
  }
});
router23.get("/rules", async (req, res) => {
  try {
    const rules = [
      {
        category: "\u5B66\u4E60\u6D3B\u52A8",
        items: [
          { action: "\u5B8C\u6210\u4E00\u4E2A\u77E5\u8BC6\u70B9\u5B66\u4E60", points: 10, description: "\u9996\u6B21\u5B8C\u6210\u8BE5\u77E5\u8BC6\u70B9\u5B66\u4E60" },
          { action: "\u77E5\u8BC6\u70B9\u638C\u63E1\u5EA6\u8FBE\u523080%", points: 20, description: "\u5355\u4E2A\u77E5\u8BC6\u70B9\u638C\u63E1\u5EA6\u8FBE\u6807" },
          { action: "\u77E5\u8BC6\u70B9\u638C\u63E1\u5EA6\u8FBE\u5230100%", points: 50, description: "\u5B8C\u5168\u638C\u63E1\u4E00\u4E2A\u77E5\u8BC6\u70B9" },
          { action: "\u8FDE\u7EED\u5B66\u4E607\u5929", points: 100, description: "\u4FDD\u6301\u5B66\u4E60\u4E60\u60EF" },
          { action: "\u5355\u65E5\u5B66\u4E60\u8D85\u8FC71\u5C0F\u65F6", points: 30, description: "\u6BCF\u65E5\u5B66\u4E60\u65F6\u957F\u5956\u52B1" }
        ]
      },
      {
        category: "\u7EC3\u4E60\u4E0E\u6D4B\u8BD5",
        items: [
          { action: "\u5B8C\u6210\u4E00\u6B21\u7EC3\u4E60", points: 5, description: "\u5B8C\u6210\u4EFB\u610F\u7EC3\u4E60" },
          { action: "\u7EC3\u4E60\u5F97\u520690\u5206\u4EE5\u4E0A", points: 15, description: "\u4F18\u79C0\u6210\u7EE9\u5956\u52B1" },
          { action: "\u6539\u6B63\u4E00\u4E2A\u9519\u9898", points: 8, description: "\u9519\u9898\u8BA2\u6B63\u5956\u52B1" },
          { action: "\u5B8C\u6210AI\u667A\u80FD\u51FA\u9898", points: 12, description: "\u4F7F\u7528AI\u529F\u80FD" }
        ]
      },
      {
        category: "\u793E\u4EA4\u4E92\u52A8",
        items: [
          { action: "\u9080\u8BF7\u597D\u53CB\u6CE8\u518C", points: 200, description: "\u6210\u529F\u9080\u8BF7\u65B0\u7528\u6237" },
          { action: "\u63D0\u4EA4\u53CD\u9988\u5EFA\u8BAE", points: 50, description: "\u5E2E\u52A9\u6539\u8FDB\u4EA7\u54C1" },
          { action: "\u5206\u4EAB\u5B66\u4E60\u6210\u679C", points: 20, description: "\u5206\u4EAB\u5230\u793E\u4EA4\u5E73\u53F0" }
        ]
      },
      {
        category: "\u6210\u5C31\u89E3\u9501",
        items: [
          { action: "\u89E3\u9501\u9752\u94DC\u6210\u5C31", points: 50, description: "\u5B8C\u6210\u57FA\u7840\u6210\u5C31" },
          { action: "\u89E3\u9501\u767D\u94F6\u6210\u5C31", points: 100, description: "\u5B8C\u6210\u8FDB\u9636\u6210\u5C31" },
          { action: "\u89E3\u9501\u9EC4\u91D1\u6210\u5C31", points: 200, description: "\u5B8C\u6210\u9AD8\u7EA7\u6210\u5C31" },
          { action: "\u89E3\u9501\u94BB\u77F3\u6210\u5C31", points: 500, description: "\u5B8C\u6210\u9876\u7EA7\u6210\u5C31" }
        ]
      }
    ];
    res.json(rules);
  } catch (error) {
    console.error("\u83B7\u53D6\u79EF\u5206\u89C4\u5219\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u79EF\u5206\u89C4\u5219\u5931\u8D25" });
  }
});
router23.get("/leaderboard", authMiddleware, async (req, res) => {
  try {
    const { limit = 50 } = req.query;
    const userId = req.user.userId;
    const topUsers = await Points_default.find().sort({ totalEarned: -1 }).limit(parseInt(limit)).populate("userId", "username avatar");
    const allUsers = await Points_default.find().sort({ totalEarned: -1 });
    const myRank = allUsers.findIndex((p) => p.userId.toString() === userId) + 1;
    const myPoints = await Points_default.findOne({ userId });
    res.json({
      leaderboard: topUsers.map((p, index) => ({
        rank: index + 1,
        userId: p.userId,
        level: p.level,
        levelName: p.levelName,
        totalPoints: p.totalEarned
      })),
      myRank: {
        rank: myRank || null,
        level: myPoints?.level || 1,
        levelName: myPoints?.levelName || "\u521D\u5B66\u8005",
        totalPoints: myPoints?.totalEarned || 0
      }
    });
  } catch (error) {
    console.error("\u83B7\u53D6\u6392\u884C\u699C\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u6392\u884C\u699C\u5931\u8D25" });
  }
});
router23.post("/redeem", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId;
    const { itemId, itemName, cost } = req.body;
    if (!itemId || !cost || cost <= 0) {
      return res.status(400).json({ error: "\u65E0\u6548\u7684\u5151\u6362\u8BF7\u6C42" });
    }
    const points = await Points_default.findOne({ userId });
    if (!points) {
      return res.status(404).json({ error: "\u79EF\u5206\u4FE1\u606F\u4E0D\u5B58\u5728" });
    }
    if (points.balance < cost) {
      return res.status(400).json({ error: "\u79EF\u5206\u4E0D\u8DB3" });
    }
    await points.spendPoints(cost, "redeem", `\u5151\u6362\uFF1A${itemName}`);
    res.json({
      message: "\u5151\u6362\u6210\u529F",
      item: { itemId, itemName, cost },
      remainingPoints: points.balance
    });
  } catch (error) {
    console.error("\u5151\u6362\u5931\u8D25:", error);
    res.status(500).json({ error: error.message || "\u5151\u6362\u5931\u8D25" });
  }
});
router23.get("/shop", authMiddleware, async (req, res) => {
  try {
    const items = [
      {
        id: "theme_1",
        name: "\u661F\u7A7A\u4E3B\u9898",
        description: "\u89E3\u9501\u7CBE\u7F8E\u7684\u661F\u7A7A\u4E3B\u9898",
        cost: 500,
        category: "theme",
        image: "/themes/starry.png"
      },
      {
        id: "theme_2",
        name: "\u6D77\u6D0B\u4E3B\u9898",
        description: "\u89E3\u9501\u6E05\u65B0\u7684\u6D77\u6D0B\u4E3B\u9898",
        cost: 500,
        category: "theme",
        image: "/themes/ocean.png"
      },
      {
        id: "badge_1",
        name: "\u5B66\u9738\u5FBD\u7AE0",
        description: "\u5C55\u793A\u4F60\u7684\u5B66\u4E60\u6210\u5C31",
        cost: 1e3,
        category: "badge",
        image: "/badges/scholar.png"
      },
      {
        id: "vip_trial",
        name: "7\u5929VIP\u4F53\u9A8C",
        description: "\u4F53\u9A8C\u9AD8\u7EA7\u4F1A\u5458\u529F\u80FD",
        cost: 2e3,
        category: "membership",
        image: "/items/vip-trial.png"
      },
      {
        id: "ai_boost",
        name: "AI\u63D0\u95EE\u6B21\u6570+50",
        description: "\u989D\u5916\u589E\u52A050\u6B21AI\u63D0\u95EE\u673A\u4F1A",
        cost: 800,
        category: "boost",
        image: "/items/ai-boost.png"
      }
    ];
    res.json(items);
  } catch (error) {
    console.error("\u83B7\u53D6\u5546\u54C1\u5217\u8868\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u5546\u54C1\u5217\u8868\u5931\u8D25" });
  }
});
var points_default = router23;

// src/routes/notification.ts
var import_express24 = __toESM(require("express"));
var router24 = import_express24.default.Router();
router24.get("/my", authMiddleware, async (req, res) => {
  try {
    const userId = req.user._id;
    const { page = 1, limit = 20, unreadOnly = false, type } = req.query;
    const query = { recipientId: userId };
    if (unreadOnly === "true") {
      query.read = false;
    }
    if (type) {
      query.type = type;
    }
    const skip = (Number(page) - 1) * Number(limit);
    const [notifications, total, unreadCount] = await Promise.all([
      Notification.find(query).sort({ createdAt: -1 }).skip(skip).limit(Number(limit)).populate("senderId", "username avatarUrl").lean(),
      Notification.countDocuments(query),
      Notification.countDocuments({ recipientId: userId, read: false })
    ]);
    res.json({
      notifications,
      total,
      unreadCount,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / Number(limit))
    });
  } catch (error) {
    console.error("\u83B7\u53D6\u901A\u77E5\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u901A\u77E5\u5931\u8D25" });
  }
});
router24.get("/unread-count", authMiddleware, async (req, res) => {
  try {
    const userId = req.user._id;
    const count = await Notification.countDocuments({
      recipientId: userId,
      read: false
    });
    res.json({ count });
  } catch (error) {
    console.error("\u83B7\u53D6\u672A\u8BFB\u6570\u91CF\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u672A\u8BFB\u6570\u91CF\u5931\u8D25" });
  }
});
router24.put("/:notificationId/read", authMiddleware, async (req, res) => {
  try {
    const userId = req.user._id;
    const { notificationId } = req.params;
    const notification = await Notification.findOneAndUpdate(
      { _id: notificationId, recipientId: userId },
      { read: true, readAt: /* @__PURE__ */ new Date() },
      { new: true }
    );
    if (!notification) {
      return res.status(404).json({ error: "\u901A\u77E5\u4E0D\u5B58\u5728" });
    }
    res.json(notification);
  } catch (error) {
    console.error("\u6807\u8BB0\u5DF2\u8BFB\u5931\u8D25:", error);
    res.status(500).json({ error: "\u6807\u8BB0\u5DF2\u8BFB\u5931\u8D25" });
  }
});
router24.put("/mark-all-read", authMiddleware, async (req, res) => {
  try {
    const userId = req.user._id;
    await Notification.updateMany(
      { recipientId: userId, read: false },
      { read: true, readAt: /* @__PURE__ */ new Date() }
    );
    res.json({ message: "\u6240\u6709\u901A\u77E5\u5DF2\u6807\u8BB0\u4E3A\u5DF2\u8BFB" });
  } catch (error) {
    console.error("\u6807\u8BB0\u5168\u90E8\u5DF2\u8BFB\u5931\u8D25:", error);
    res.status(500).json({ error: "\u6807\u8BB0\u5168\u90E8\u5DF2\u8BFB\u5931\u8D25" });
  }
});
router24.delete("/:notificationId", authMiddleware, async (req, res) => {
  try {
    const userId = req.user._id;
    const { notificationId } = req.params;
    const notification = await Notification.findOneAndDelete({
      _id: notificationId,
      recipientId: userId
    });
    if (!notification) {
      return res.status(404).json({ error: "\u901A\u77E5\u4E0D\u5B58\u5728" });
    }
    res.json({ message: "\u901A\u77E5\u5DF2\u5220\u9664" });
  } catch (error) {
    console.error("\u5220\u9664\u901A\u77E5\u5931\u8D25:", error);
    res.status(500).json({ error: "\u5220\u9664\u901A\u77E5\u5931\u8D25" });
  }
});
router24.delete("/batch/read", authMiddleware, async (req, res) => {
  try {
    const userId = req.user._id;
    const result = await Notification.deleteMany({
      recipientId: userId,
      read: true
    });
    res.json({
      message: "\u5DF2\u8BFB\u901A\u77E5\u5DF2\u6E05\u7A7A",
      deletedCount: result.deletedCount
    });
  } catch (error) {
    console.error("\u6E05\u7A7A\u5DF2\u8BFB\u901A\u77E5\u5931\u8D25:", error);
    res.status(500).json({ error: "\u6E05\u7A7A\u5DF2\u8BFB\u901A\u77E5\u5931\u8D25" });
  }
});
router24.post("/", authMiddleware, async (req, res) => {
  try {
    const user = req.user;
    if (user.role !== "teacher" && user.role !== "admin") {
      return res.status(403).json({ error: "\u65E0\u6743\u9650\u521B\u5EFA\u901A\u77E5" });
    }
    const {
      recipientIds,
      classId,
      type,
      title,
      content,
      priority = "normal",
      relatedId,
      relatedType,
      actionUrl,
      metadata
    } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: "\u6807\u9898\u548C\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A" });
    }
    let recipients = [];
    if (classId) {
      const classDoc = await Class_default.findById(classId);
      if (!classDoc) {
        return res.status(404).json({ error: "\u73ED\u7EA7\u4E0D\u5B58\u5728" });
      }
      recipients = classDoc.students.filter((s) => s.status === "active").map((s) => s.userId);
    } else if (recipientIds && Array.isArray(recipientIds)) {
      recipients = recipientIds;
    } else {
      return res.status(400).json({ error: "\u5FC5\u987B\u6307\u5B9A\u63A5\u6536\u8005\u6216\u73ED\u7EA7" });
    }
    const notifications = recipients.map((recipientId) => ({
      recipientId,
      recipientType: "student",
      senderId: user._id,
      type,
      title,
      content,
      priority,
      relatedId,
      relatedType,
      actionUrl,
      metadata,
      read: false
    }));
    const created = await Notification.insertMany(notifications);
    res.json({
      message: "\u901A\u77E5\u521B\u5EFA\u6210\u529F",
      count: created.length
    });
  } catch (error) {
    console.error("\u521B\u5EFA\u901A\u77E5\u5931\u8D25:", error);
    res.status(500).json({ error: "\u521B\u5EFA\u901A\u77E5\u5931\u8D25" });
  }
});
var notification_default = router24;

// src/routes/question.ts
var import_express25 = __toESM(require("express"));

// src/models/Question.ts
var import_mongoose17 = __toESM(require("mongoose"));
var QuestionSchema = new import_mongoose17.Schema({
  title: { type: String, required: true },
  type: {
    type: String,
    enum: ["single", "multiple", "truefalse", "short", "essay"],
    required: true
  },
  content: { type: String, required: true },
  options: [{
    id: { type: String, required: true },
    content: { type: String, required: true },
    isCorrect: { type: Boolean }
  }],
  correctAnswer: { type: import_mongoose17.Schema.Types.Mixed },
  // 可以是字符串或数组
  analysis: { type: String },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    default: "medium"
  },
  knowledgePoints: [{ type: import_mongoose17.Schema.Types.ObjectId, ref: "KnowledgePoint" }],
  tags: [{ type: String }],
  teacherId: { type: import_mongoose17.Schema.Types.ObjectId, ref: "User", required: true },
  isPublic: { type: Boolean, default: false },
  usageCount: { type: Number, default: 0 }
}, {
  timestamps: true
});
QuestionSchema.index({ teacherId: 1, type: 1 });
QuestionSchema.index({ difficulty: 1 });
QuestionSchema.index({ tags: 1 });
QuestionSchema.index({ isPublic: 1 });
QuestionSchema.index({ knowledgePoints: 1 });
QuestionSchema.methods.toSafeObject = function() {
  const obj = this.toObject();
  if (obj.options) {
    obj.options = obj.options.map((opt) => ({
      id: opt.id,
      content: opt.content
      // 不返回 isCorrect
    }));
  }
  delete obj.correctAnswer;
  delete obj.analysis;
  return obj;
};
var Question_default = import_mongoose17.default.model("Question", QuestionSchema);

// src/routes/question.ts
var router25 = import_express25.default.Router();
router25.post("/", authMiddleware, async (req, res) => {
  try {
    const userId = req.user._id.toString();
    const userRole = req.user.role;
    if (userRole !== "teacher") {
      return res.status(403).json({ error: "\u53EA\u6709\u6559\u5E08\u53EF\u4EE5\u521B\u5EFA\u9898\u76EE" });
    }
    const questionData = {
      ...req.body,
      teacherId: userId
    };
    const question = new Question_default(questionData);
    await question.save();
    res.status(201).json(question);
  } catch (error) {
    console.error("\u521B\u5EFA\u9898\u76EE\u5931\u8D25:", error);
    res.status(500).json({ error: "\u521B\u5EFA\u9898\u76EE\u5931\u8D25", details: error.message });
  }
});
router25.get("/my", authMiddleware, async (req, res) => {
  try {
    const userId = req.user._id.toString();
    const userRole = req.user.role;
    if (userRole !== "teacher") {
      return res.status(403).json({ error: "\u53EA\u6709\u6559\u5E08\u53EF\u4EE5\u8BBF\u95EE" });
    }
    const {
      page = 1,
      limit = 20,
      type,
      difficulty,
      tag,
      search
    } = req.query;
    const query = { teacherId: userId };
    if (type) query.type = type;
    if (difficulty) query.difficulty = difficulty;
    if (tag) query.tags = tag;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { content: { $regex: search, $options: "i" } }
      ];
    }
    const skip = (Number(page) - 1) * Number(limit);
    const [questions, total] = await Promise.all([
      Question_default.find(query).sort({ createdAt: -1 }).skip(skip).limit(Number(limit)).lean(),
      Question_default.countDocuments(query)
    ]);
    res.json({
      questions,
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / Number(limit))
    });
  } catch (error) {
    console.error("\u83B7\u53D6\u9898\u76EE\u5217\u8868\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u9898\u76EE\u5217\u8868\u5931\u8D25", details: error.message });
  }
});
router25.get("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id.toString();
    const userRole = req.user.role;
    const question = await Question_default.findById(id);
    if (!question) {
      return res.status(404).json({ error: "\u9898\u76EE\u4E0D\u5B58\u5728" });
    }
    if (userRole === "teacher") {
      if (question.teacherId.toString() !== userId && !question.isPublic) {
        return res.status(403).json({ error: "\u65E0\u6743\u8BBF\u95EE\u6B64\u9898\u76EE" });
      }
      return res.json(question);
    }
    const safeQuestion = question.toSafeObject();
    res.json(safeQuestion);
  } catch (error) {
    console.error("\u83B7\u53D6\u9898\u76EE\u8BE6\u60C5\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u9898\u76EE\u8BE6\u60C5\u5931\u8D25", details: error.message });
  }
});
router25.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id.toString();
    const userRole = req.user.role;
    if (userRole !== "teacher") {
      return res.status(403).json({ error: "\u53EA\u6709\u6559\u5E08\u53EF\u4EE5\u7F16\u8F91\u9898\u76EE" });
    }
    const question = await Question_default.findById(id);
    if (!question) {
      return res.status(404).json({ error: "\u9898\u76EE\u4E0D\u5B58\u5728" });
    }
    if (question.teacherId.toString() !== userId) {
      return res.status(403).json({ error: "\u53EA\u80FD\u7F16\u8F91\u81EA\u5DF1\u521B\u5EFA\u7684\u9898\u76EE" });
    }
    Object.assign(question, req.body);
    await question.save();
    res.json(question);
  } catch (error) {
    console.error("\u66F4\u65B0\u9898\u76EE\u5931\u8D25:", error);
    res.status(500).json({ error: "\u66F4\u65B0\u9898\u76EE\u5931\u8D25", details: error.message });
  }
});
router25.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id.toString();
    const userRole = req.user.role;
    if (userRole !== "teacher") {
      return res.status(403).json({ error: "\u53EA\u6709\u6559\u5E08\u53EF\u4EE5\u5220\u9664\u9898\u76EE" });
    }
    const question = await Question_default.findById(id);
    if (!question) {
      return res.status(404).json({ error: "\u9898\u76EE\u4E0D\u5B58\u5728" });
    }
    if (question.teacherId.toString() !== userId) {
      return res.status(403).json({ error: "\u53EA\u80FD\u5220\u9664\u81EA\u5DF1\u521B\u5EFA\u7684\u9898\u76EE" });
    }
    if (question.usageCount > 0) {
      return res.status(400).json({
        error: "\u8BE5\u9898\u76EE\u5DF2\u88AB\u4F7F\u7528\uFF0C\u65E0\u6CD5\u5220\u9664",
        usageCount: question.usageCount
      });
    }
    await Question_default.findByIdAndDelete(id);
    res.json({ message: "\u9898\u76EE\u5220\u9664\u6210\u529F" });
  } catch (error) {
    console.error("\u5220\u9664\u9898\u76EE\u5931\u8D25:", error);
    res.status(500).json({ error: "\u5220\u9664\u9898\u76EE\u5931\u8D25", details: error.message });
  }
});
router25.post("/batch", authMiddleware, async (req, res) => {
  try {
    const { questionIds } = req.body;
    const userRole = req.user.role;
    if (!Array.isArray(questionIds)) {
      return res.status(400).json({ error: "questionIds \u5FC5\u987B\u662F\u6570\u7EC4" });
    }
    const questions = await Question_default.find({ _id: { $in: questionIds } });
    if (userRole === "student") {
      const safeQuestions = questions.map((q) => q.toSafeObject());
      return res.json(safeQuestions);
    }
    res.json(questions);
  } catch (error) {
    console.error("\u6279\u91CF\u83B7\u53D6\u9898\u76EE\u5931\u8D25:", error);
    res.status(500).json({ error: "\u6279\u91CF\u83B7\u53D6\u9898\u76EE\u5931\u8D25", details: error.message });
  }
});
router25.get("/public/list", authMiddleware, async (req, res) => {
  try {
    const userRole = req.user.role;
    if (userRole !== "teacher") {
      return res.status(403).json({ error: "\u53EA\u6709\u6559\u5E08\u53EF\u4EE5\u8BBF\u95EE\u9898\u5E93" });
    }
    const {
      page = 1,
      limit = 20,
      type,
      difficulty,
      tag,
      search
    } = req.query;
    const query = { isPublic: true };
    if (type) query.type = type;
    if (difficulty) query.difficulty = difficulty;
    if (tag) query.tags = tag;
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { content: { $regex: search, $options: "i" } }
      ];
    }
    const skip = (Number(page) - 1) * Number(limit);
    const [questions, total] = await Promise.all([
      Question_default.find(query).sort({ usageCount: -1, createdAt: -1 }).skip(skip).limit(Number(limit)).populate("teacherId", "name").lean(),
      Question_default.countDocuments(query)
    ]);
    res.json({
      questions,
      total,
      page: Number(page),
      limit: Number(limit),
      totalPages: Math.ceil(total / Number(limit))
    });
  } catch (error) {
    console.error("\u83B7\u53D6\u516C\u5F00\u9898\u5E93\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u516C\u5F00\u9898\u5E93\u5931\u8D25", details: error.message });
  }
});
router25.post("/:id/copy", authMiddleware, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id.toString();
    const userRole = req.user.role;
    if (userRole !== "teacher") {
      return res.status(403).json({ error: "\u53EA\u6709\u6559\u5E08\u53EF\u4EE5\u590D\u5236\u9898\u76EE" });
    }
    const originalQuestion = await Question_default.findById(id);
    if (!originalQuestion) {
      return res.status(404).json({ error: "\u9898\u76EE\u4E0D\u5B58\u5728" });
    }
    if (!originalQuestion.isPublic && originalQuestion.teacherId.toString() !== userId) {
      return res.status(403).json({ error: "\u65E0\u6743\u590D\u5236\u6B64\u9898\u76EE" });
    }
    const newQuestion = new Question_default({
      ...originalQuestion.toObject(),
      _id: void 0,
      teacherId: userId,
      isPublic: false,
      usageCount: 0,
      createdAt: void 0,
      updatedAt: void 0
    });
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    console.error("\u590D\u5236\u9898\u76EE\u5931\u8D25:", error);
    res.status(500).json({ error: "\u590D\u5236\u9898\u76EE\u5931\u8D25", details: error.message });
  }
});
var question_default = router25;

// src/routes/stats.ts
var import_express26 = __toESM(require("express"));
var router26 = import_express26.default.Router();
router26.get("/active-students-this-week", authMiddleware, async (req, res) => {
  try {
    const userId = req.user._id.toString();
    const now = /* @__PURE__ */ new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());
    startOfWeek.setHours(0, 0, 0, 0);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 7);
    const classes = await Class_default.find({ teacherId: userId, status: "active" });
    if (classes.length === 0) {
      return res.json({ count: 0, students: [] });
    }
    const allStudentIds = /* @__PURE__ */ new Set();
    classes.forEach((cls) => {
      cls.students.forEach((student) => {
        if (student.status === "active") {
          allStudentIds.add(student.userId.toString());
        }
      });
    });
    const assignments = await Assignment_default.find({
      teacherId: userId,
      "submissions.submittedAt": {
        $gte: startOfWeek,
        $lt: endOfWeek
      }
    });
    const activeStudentIds = /* @__PURE__ */ new Set();
    assignments.forEach((assignment) => {
      assignment.submissions.forEach((submission) => {
        const submittedAt = new Date(submission.submittedAt);
        if (submittedAt >= startOfWeek && submittedAt < endOfWeek) {
          activeStudentIds.add(submission.userId.toString());
        }
      });
    });
    const activeStudents = await User_default.find({
      _id: { $in: Array.from(activeStudentIds) }
    }).select("username email avatar");
    res.json({
      count: activeStudents.length,
      totalStudents: allStudentIds.size,
      students: activeStudents.map((student) => ({
        id: student._id,
        username: student.username,
        email: student.email,
        avatar: student.avatar
      })),
      weekStart: startOfWeek,
      weekEnd: endOfWeek
    });
  } catch (error) {
    console.error("\u83B7\u53D6\u6D3B\u8DC3\u5B66\u751F\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u6D3B\u8DC3\u5B66\u751F\u5931\u8D25" });
  }
});
router26.get("/teacher-overview", authMiddleware, async (req, res) => {
  try {
    const userId = req.user._id.toString();
    const classCount = await Class_default.countDocuments({ teacherId: userId, status: "active" });
    const classes = await Class_default.find({ teacherId: userId, status: "active" });
    const studentIds = /* @__PURE__ */ new Set();
    classes.forEach((cls) => {
      cls.students.forEach((student) => {
        if (student.status === "active") {
          studentIds.add(student.userId.toString());
        }
      });
    });
    const assignmentCount = await Assignment_default.countDocuments({
      teacherId: userId,
      status: { $in: ["published", "draft"] }
    });
    const pendingGradingCount = await Assignment_default.aggregate([
      { $match: { teacherId: userId } },
      { $unwind: "$submissions" },
      { $match: { "submissions.status": "submitted" } },
      { $count: "total" }
    ]);
    res.json({
      classCount,
      studentCount: studentIds.size,
      assignmentCount,
      pendingGradingCount: pendingGradingCount[0]?.total || 0
    });
  } catch (error) {
    console.error("\u83B7\u53D6\u6559\u5E08\u7EDF\u8BA1\u6982\u89C8\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u6559\u5E08\u7EDF\u8BA1\u6982\u89C8\u5931\u8D25" });
  }
});
var stats_default = router26;

// src/routes/teacher-analytics.ts
var import_express27 = __toESM(require("express"));
init_StudySession();
var router27 = import_express27.default.Router();
router27.get("/class/:classId/overview", authMiddleware, async (req, res) => {
  try {
    const { classId } = req.params;
    const userId = req.user._id.toString();
    const classInfo = await Class_default.findById(classId);
    if (!classInfo) {
      return res.status(404).json({ error: "\u73ED\u7EA7\u4E0D\u5B58\u5728" });
    }
    if (classInfo.teacherId.toString() !== userId) {
      return res.status(403).json({ error: "\u65E0\u6743\u8BBF\u95EE" });
    }
    const activeStudents = classInfo.students.filter((s) => s.status === "active");
    const studentIds = activeStudents.map((s) => s.userId);
    const totalDuration = await StudySession_default.aggregate([
      { $match: { userId: { $in: studentIds } } },
      { $group: { _id: null, total: { $sum: "$duration" } } }
    ]).then((result) => result[0]?.total || 0);
    const progressData = await UserProgress_default.find({ userId: { $in: studentIds } });
    const totalKnowledge = progressData.length;
    const masteredKnowledge = progressData.filter((p) => p.bestScore >= 80).length;
    const assignments = await Assignment_default.find({ classId });
    const totalAssignments = assignments.length;
    const completedAssignments = assignments.filter((a) => {
      const submittedStudents = new Set(a.submissions.map((s) => s.userId.toString()));
      return submittedStudents.size === studentIds.length;
    }).length;
    const totalWrongQuestions = await WrongQuestion_default.countDocuments({
      userId: { $in: studentIds }
    });
    const sevenDaysAgo = /* @__PURE__ */ new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const activeSessions = await StudySession_default.distinct("userId", {
      userId: { $in: studentIds },
      createdAt: { $gte: sevenDaysAgo }
    });
    res.json({
      classId,
      className: classInfo.name,
      overview: {
        totalStudents: activeStudents.length,
        activeStudents: activeSessions.length,
        totalDuration: Math.round(totalDuration),
        avgDurationPerStudent: Math.round(totalDuration / activeStudents.length) || 0,
        totalKnowledge,
        masteredKnowledge,
        masteryRate: totalKnowledge > 0 ? Math.round(masteredKnowledge / totalKnowledge * 100) : 0,
        totalAssignments,
        completedAssignments,
        assignmentCompletionRate: totalAssignments > 0 ? Math.round(completedAssignments / totalAssignments * 100) : 0,
        totalWrongQuestions
      }
    });
  } catch (error) {
    console.error("\u83B7\u53D6\u73ED\u7EA7\u6982\u89C8\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u73ED\u7EA7\u6982\u89C8\u5931\u8D25" });
  }
});
router27.get("/class/:classId/student-rankings", authMiddleware, async (req, res) => {
  try {
    const { classId } = req.params;
    const userId = req.user._id.toString();
    const { sortBy = "score" } = req.query;
    const classInfo = await Class_default.findById(classId);
    if (!classInfo) {
      return res.status(404).json({ error: "\u73ED\u7EA7\u4E0D\u5B58\u5728" });
    }
    if (classInfo.teacherId.toString() !== userId) {
      return res.status(403).json({ error: "\u65E0\u6743\u8BBF\u95EE" });
    }
    const activeStudents = classInfo.students.filter((s) => s.status === "active");
    const studentRankings = await Promise.all(
      activeStudents.map(async (student) => {
        const studentId = student.userId;
        const sessions = await StudySession_default.find({ userId: studentId });
        const totalTime = sessions.reduce((sum, s) => sum + (s.duration || 0), 0);
        const userProgress = await UserProgress_default.find({ userId: studentId });
        const masteredCount = userProgress.filter((up) => up.bestScore >= 80).length;
        const totalKnowledge = userProgress.length;
        const progressRate = totalKnowledge > 0 ? Math.round(masteredCount / totalKnowledge * 100) : 0;
        const avgScore = userProgress.length > 0 ? Math.round(userProgress.reduce((sum, up) => sum + up.bestScore, 0) / userProgress.length) : 0;
        const assignments = await Assignment_default.find({ classId });
        const submittedAssignments = assignments.filter(
          (a) => a.submissions.some((s) => s.userId.toString() === studentId.toString())
        ).length;
        const assignmentCompletionRate = assignments.length > 0 ? Math.round(submittedAssignments / assignments.length * 100) : 0;
        const wrongQuestionsCount = await WrongQuestion_default.countDocuments({ userId: studentId });
        const lastActive = sessions.length > 0 ? sessions[sessions.length - 1].createdAt : student.joinedAt;
        return {
          userId: studentId,
          userName: student.userName,
          totalTime,
          masteredCount,
          totalKnowledge,
          progressRate,
          avgScore,
          assignmentCompletionRate,
          wrongQuestionsCount,
          lastActive
        };
      })
    );
    studentRankings.sort((a, b) => {
      switch (sortBy) {
        case "studyTime":
          return b.totalTime - a.totalTime;
        case "progress":
          return b.progressRate - a.progressRate;
        case "score":
        default:
          return b.avgScore - a.avgScore;
      }
    });
    const rankedStudents = studentRankings.map((student, index) => ({
      ...student,
      rank: index + 1
    }));
    res.json({
      classId,
      sortBy,
      students: rankedStudents
    });
  } catch (error) {
    console.error("\u83B7\u53D6\u5B66\u751F\u6392\u540D\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u5B66\u751F\u6392\u540D\u5931\u8D25" });
  }
});
router27.get("/class/:classId/weak-points", authMiddleware, async (req, res) => {
  try {
    const { classId } = req.params;
    const userId = req.user._id.toString();
    const classInfo = await Class_default.findById(classId);
    if (!classInfo) {
      return res.status(404).json({ error: "\u73ED\u7EA7\u4E0D\u5B58\u5728" });
    }
    if (classInfo.teacherId.toString() !== userId) {
      return res.status(403).json({ error: "\u65E0\u6743\u8BBF\u95EE" });
    }
    const activeStudents = classInfo.students.filter((s) => s.status === "active");
    const studentIds = activeStudents.map((s) => s.userId);
    const progressData = await UserProgress_default.find({
      userId: { $in: studentIds }
    }).populate("pointId", "title subject difficulty");
    const knowledgePointStats = {};
    progressData.forEach((progress) => {
      const pointId = progress.pointId?._id?.toString();
      if (!pointId) return;
      const point = progress.pointId;
      if (!knowledgePointStats[pointId]) {
        knowledgePointStats[pointId] = {
          pointId,
          title: point.title || "\u672A\u77E5\u77E5\u8BC6\u70B9",
          subject: point.subject || "\u672A\u5206\u7C7B",
          difficulty: point.difficulty || "medium",
          totalStudents: 0,
          masteredStudents: 0,
          avgScore: 0,
          totalScore: 0,
          lowScoreStudents: []
        };
      }
      knowledgePointStats[pointId].totalStudents++;
      knowledgePointStats[pointId].totalScore += progress.bestScore;
      if (progress.bestScore >= 80) {
        knowledgePointStats[pointId].masteredStudents++;
      }
      if (progress.bestScore < 60) {
        knowledgePointStats[pointId].lowScoreStudents.push({
          userId: progress.userId,
          score: progress.bestScore
        });
      }
    });
    const weakPointsArray = Object.values(knowledgePointStats).map((stats) => {
      stats.avgScore = Math.round(stats.totalScore / stats.totalStudents);
      stats.masteryRate = Math.round(stats.masteredStudents / stats.totalStudents * 100);
      stats.lowScoreCount = stats.lowScoreStudents.length;
      delete stats.totalScore;
      delete stats.lowScoreStudents;
      return stats;
    });
    const weakPoints = weakPointsArray.filter((point) => point.avgScore < 70 || point.masteryRate < 50).sort((a, b) => a.avgScore - b.avgScore).slice(0, 20);
    const bySubject = {};
    weakPoints.forEach((point) => {
      const subject = point.subject;
      if (!bySubject[subject]) {
        bySubject[subject] = {
          subject,
          weakPointCount: 0,
          avgScore: 0,
          totalScore: 0
        };
      }
      bySubject[subject].weakPointCount++;
      bySubject[subject].totalScore += point.avgScore;
    });
    Object.values(bySubject).forEach((stats) => {
      stats.avgScore = Math.round(stats.totalScore / stats.weakPointCount);
      delete stats.totalScore;
    });
    res.json({
      classId,
      weakPoints,
      bySubject: Object.values(bySubject),
      summary: {
        totalWeakPoints: weakPoints.length,
        avgWeakPointScore: weakPoints.length > 0 ? Math.round(weakPoints.reduce((sum, p) => sum + p.avgScore, 0) / weakPoints.length) : 0
      }
    });
  } catch (error) {
    console.error("\u83B7\u53D6\u8584\u5F31\u77E5\u8BC6\u70B9\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u8584\u5F31\u77E5\u8BC6\u70B9\u5931\u8D25" });
  }
});
router27.get("/class/:classId/learning-trend", authMiddleware, async (req, res) => {
  try {
    const { classId } = req.params;
    const userId = req.user._id.toString();
    const { period = "30d" } = req.query;
    const classInfo = await Class_default.findById(classId);
    if (!classInfo) {
      return res.status(404).json({ error: "\u73ED\u7EA7\u4E0D\u5B58\u5728" });
    }
    if (classInfo.teacherId.toString() !== userId) {
      return res.status(403).json({ error: "\u65E0\u6743\u8BBF\u95EE" });
    }
    const activeStudents = classInfo.students.filter((s) => s.status === "active");
    const studentIds = activeStudents.map((s) => s.userId);
    const now = /* @__PURE__ */ new Date();
    let startDate = /* @__PURE__ */ new Date();
    switch (period) {
      case "7d":
        startDate.setDate(now.getDate() - 7);
        break;
      case "30d":
        startDate.setDate(now.getDate() - 30);
        break;
      case "90d":
        startDate.setDate(now.getDate() - 90);
        break;
      default:
        startDate.setDate(now.getDate() - 30);
    }
    const sessions = await StudySession_default.find({
      userId: { $in: studentIds },
      createdAt: { $gte: startDate }
    }).sort({ createdAt: 1 });
    const dailyStats = {};
    sessions.forEach((session) => {
      const date = session.createdAt.toISOString().split("T")[0];
      if (!dailyStats[date]) {
        dailyStats[date] = {
          date,
          totalDuration: 0,
          sessionCount: 0,
          activeStudents: /* @__PURE__ */ new Set()
        };
      }
      dailyStats[date].totalDuration += session.duration || 0;
      dailyStats[date].sessionCount++;
      dailyStats[date].activeStudents.add(session.userId.toString());
    });
    const trendData = Object.values(dailyStats).map((stats) => ({
      date: stats.date,
      totalDuration: stats.totalDuration,
      avgDuration: Math.round(stats.totalDuration / stats.activeStudents.size) || 0,
      sessionCount: stats.sessionCount,
      activeStudents: stats.activeStudents.size
    }));
    res.json({
      classId,
      period,
      trend: trendData
    });
  } catch (error) {
    console.error("\u83B7\u53D6\u5B66\u4E60\u8D8B\u52BF\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u5B66\u4E60\u8D8B\u52BF\u5931\u8D25" });
  }
});
router27.get("/class/:classId/assignment-analytics", authMiddleware, async (req, res) => {
  try {
    const { classId } = req.params;
    const userId = req.user._id.toString();
    const classInfo = await Class_default.findById(classId);
    if (!classInfo) {
      return res.status(404).json({ error: "\u73ED\u7EA7\u4E0D\u5B58\u5728" });
    }
    if (classInfo.teacherId.toString() !== userId) {
      return res.status(403).json({ error: "\u65E0\u6743\u8BBF\u95EE" });
    }
    const assignments = await Assignment_default.find({ classId });
    const activeStudents = classInfo.students.filter((s) => s.status === "active");
    const totalStudents = activeStudents.length;
    const assignmentStats = assignments.map((assignment) => {
      const submittedCount = new Set(
        assignment.submissions.map((s) => s.userId.toString())
      ).size;
      const scores = assignment.submissions.map((s) => s.score);
      const avgScore = scores.length > 0 ? Math.round(scores.reduce((sum, s) => sum + s, 0) / scores.length) : 0;
      const passedCount = scores.filter((s) => s >= assignment.passingScore).length;
      return {
        assignmentId: assignment._id,
        title: assignment.title,
        type: assignment.type,
        totalStudents,
        submittedCount,
        submissionRate: totalStudents > 0 ? Math.round(submittedCount / totalStudents * 100) : 0,
        avgScore,
        passRate: submittedCount > 0 ? Math.round(passedCount / submittedCount * 100) : 0,
        dueDate: assignment.dueDate
      };
    });
    const byType = {};
    assignmentStats.forEach((stat) => {
      const type = stat.type || "homework";
      if (!byType[type]) {
        byType[type] = {
          type,
          count: 0,
          avgSubmissionRate: 0,
          avgScore: 0,
          totalSubmissionRate: 0,
          totalScore: 0
        };
      }
      byType[type].count++;
      byType[type].totalSubmissionRate += stat.submissionRate;
      byType[type].totalScore += stat.avgScore;
    });
    Object.values(byType).forEach((stats) => {
      stats.avgSubmissionRate = Math.round(stats.totalSubmissionRate / stats.count);
      stats.avgScore = Math.round(stats.totalScore / stats.count);
      delete stats.totalSubmissionRate;
      delete stats.totalScore;
    });
    res.json({
      classId,
      assignments: assignmentStats,
      byType: Object.values(byType),
      summary: {
        totalAssignments: assignments.length,
        avgSubmissionRate: assignmentStats.length > 0 ? Math.round(
          assignmentStats.reduce((sum, a) => sum + a.submissionRate, 0) / assignmentStats.length
        ) : 0,
        avgScore: assignmentStats.length > 0 ? Math.round(
          assignmentStats.reduce((sum, a) => sum + a.avgScore, 0) / assignmentStats.length
        ) : 0
      }
    });
  } catch (error) {
    console.error("\u83B7\u53D6\u4F5C\u4E1A\u7EDF\u8BA1\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u4F5C\u4E1A\u7EDF\u8BA1\u5931\u8D25" });
  }
});
router27.get("/class/:classId/suggestions", authMiddleware, async (req, res) => {
  try {
    const { classId } = req.params;
    const userId = req.user._id.toString();
    const classInfo = await Class_default.findById(classId);
    if (!classInfo) {
      return res.status(404).json({ error: "\u73ED\u7EA7\u4E0D\u5B58\u5728" });
    }
    if (classInfo.teacherId.toString() !== userId) {
      return res.status(403).json({ error: "\u65E0\u6743\u8BBF\u95EE" });
    }
    const activeStudents = classInfo.students.filter((s) => s.status === "active");
    const studentIds = activeStudents.map((s) => s.userId);
    const progressData = await UserProgress_default.find({ userId: { $in: studentIds } });
    const avgMastery = progressData.length > 0 ? progressData.reduce((sum, p) => sum + p.bestScore, 0) / progressData.length : 0;
    const sevenDaysAgo = /* @__PURE__ */ new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const recentSessions = await StudySession_default.countDocuments({
      userId: { $in: studentIds },
      createdAt: { $gte: sevenDaysAgo }
    });
    const assignments = await Assignment_default.find({ classId });
    const avgSubmissionRate = assignments.length > 0 ? assignments.reduce((sum, a) => {
      const submittedCount = new Set(
        a.submissions.map((s) => s.userId.toString())
      ).size;
      return sum + submittedCount / activeStudents.length;
    }, 0) / assignments.length * 100 : 0;
    const suggestions = [];
    if (avgMastery < 60) {
      suggestions.push({
        type: "warning",
        category: "\u77E5\u8BC6\u638C\u63E1",
        title: "\u73ED\u7EA7\u6574\u4F53\u638C\u63E1\u5EA6\u504F\u4F4E",
        description: `\u73ED\u7EA7\u5E73\u5747\u638C\u63E1\u5EA6\u4E3A ${Math.round(avgMastery)}%\uFF0C\u4F4E\u4E8E\u53CA\u683C\u7EBF\u3002`,
        action: "\u5EFA\u8BAE\u9488\u5BF9\u8584\u5F31\u77E5\u8BC6\u70B9\u7EC4\u7EC7\u4E13\u9898\u590D\u4E60\u8BFE\uFF0C\u52A0\u5F3A\u57FA\u7840\u77E5\u8BC6\u8BB2\u89E3\u3002",
        priority: "high"
      });
    } else if (avgMastery < 75) {
      suggestions.push({
        type: "info",
        category: "\u77E5\u8BC6\u638C\u63E1",
        title: "\u90E8\u5206\u77E5\u8BC6\u70B9\u9700\u8981\u5F3A\u5316",
        description: `\u73ED\u7EA7\u5E73\u5747\u638C\u63E1\u5EA6\u4E3A ${Math.round(avgMastery)}%\uFF0C\u6709\u63D0\u5347\u7A7A\u95F4\u3002`,
        action: "\u5EFA\u8BAE\u67E5\u770B\u8584\u5F31\u77E5\u8BC6\u70B9\u5217\u8868\uFF0C\u9488\u5BF9\u6027\u5730\u5E03\u7F6E\u7EC3\u4E60\u4F5C\u4E1A\u3002",
        priority: "medium"
      });
    }
    if (recentSessions < activeStudents.length * 3) {
      suggestions.push({
        type: "warning",
        category: "\u5B66\u4E60\u6D3B\u8DC3\u5EA6",
        title: "\u73ED\u7EA7\u6D3B\u8DC3\u5EA6\u8F83\u4F4E",
        description: "\u6700\u8FD1\u4E00\u5468\u5B66\u4E60\u6D3B\u8DC3\u5EA6\u4E0D\u8DB3\uFF0C\u90E8\u5206\u5B66\u751F\u53EF\u80FD\u7F3A\u4E4F\u5B66\u4E60\u52A8\u529B\u3002",
        action: "\u5EFA\u8BAE\u901A\u8FC7\u4F5C\u4E1A\u3001\u6D4B\u9A8C\u7B49\u65B9\u5F0F\u6FC0\u53D1\u5B66\u751F\u5B66\u4E60\u79EF\u6781\u6027\uFF0C\u6216\u8FDB\u884C\u4E00\u5BF9\u4E00\u6C9F\u901A\u3002",
        priority: "high"
      });
    }
    if (avgSubmissionRate < 70) {
      suggestions.push({
        type: "warning",
        category: "\u4F5C\u4E1A\u5B8C\u6210",
        title: "\u4F5C\u4E1A\u63D0\u4EA4\u7387\u504F\u4F4E",
        description: `\u5E73\u5747\u4F5C\u4E1A\u63D0\u4EA4\u7387\u4E3A ${Math.round(avgSubmissionRate)}%\uFF0C\u9700\u8981\u6539\u5584\u3002`,
        action: "\u5EFA\u8BAE\u8DDF\u8FDB\u672A\u63D0\u4EA4\u4F5C\u4E1A\u7684\u5B66\u751F\uFF0C\u4E86\u89E3\u539F\u56E0\u5E76\u63D0\u4F9B\u5E2E\u52A9\u3002\u540C\u65F6\u53EF\u4EE5\u8003\u8651\u8C03\u6574\u4F5C\u4E1A\u96BE\u5EA6\u6216\u622A\u6B62\u65F6\u95F4\u3002",
        priority: "high"
      });
    }
    const studentStats = await Promise.all(
      activeStudents.slice(0, 10).map(async (student) => {
        const studentProgress = await UserProgress_default.find({ userId: student.userId });
        const studentAvgScore = studentProgress.length > 0 ? studentProgress.reduce((sum, p) => sum + p.bestScore, 0) / studentProgress.length : 0;
        const studentSessions = await StudySession_default.find({
          userId: student.userId,
          createdAt: { $gte: sevenDaysAgo }
        });
        return {
          userName: student.userName,
          avgScore: studentAvgScore,
          recentSessions: studentSessions.length
        };
      })
    );
    const needAttention = studentStats.filter((s) => s.avgScore < 50 || s.recentSessions === 0);
    if (needAttention.length > 0) {
      suggestions.push({
        type: "info",
        category: "\u5B66\u751F\u5173\u6CE8",
        title: "\u90E8\u5206\u5B66\u751F\u9700\u8981\u7279\u522B\u5173\u6CE8",
        description: `\u6709 ${needAttention.length} \u540D\u5B66\u751F\u7684\u5B66\u4E60\u60C5\u51B5\u9700\u8981\u91CD\u70B9\u5173\u6CE8\u3002`,
        action: `\u5EFA\u8BAE\u4E0E\u8FD9\u4E9B\u5B66\u751F\u8FDB\u884C\u4E00\u5BF9\u4E00\u4EA4\u6D41\uFF1A${needAttention.slice(0, 3).map((s) => s.userName).join("\u3001")}${needAttention.length > 3 ? " \u7B49" : ""}\u3002`,
        priority: "medium"
      });
    }
    if (suggestions.length === 0) {
      suggestions.push({
        type: "success",
        category: "\u6574\u4F53\u60C5\u51B5",
        title: "\u73ED\u7EA7\u5B66\u4E60\u72B6\u6001\u826F\u597D",
        description: "\u73ED\u7EA7\u6574\u4F53\u5B66\u4E60\u60C5\u51B5\u8868\u73B0\u4F18\u79C0\uFF0C\u8BF7\u7EE7\u7EED\u4FDD\u6301\uFF01",
        action: "\u53EF\u4EE5\u9002\u5F53\u589E\u52A0\u4E00\u4E9B\u6311\u6218\u6027\u5185\u5BB9\uFF0C\u5E2E\u52A9\u5B66\u751F\u8FDB\u4E00\u6B65\u63D0\u5347\u3002",
        priority: "low"
      });
    }
    res.json({
      classId,
      suggestions,
      generatedAt: /* @__PURE__ */ new Date()
    });
  } catch (error) {
    console.error("\u751F\u6210\u5EFA\u8BAE\u5931\u8D25:", error);
    res.status(500).json({ error: "\u751F\u6210\u5EFA\u8BAE\u5931\u8D25" });
  }
});
var teacher_analytics_default = router27;

// src/routes/payment.ts
var import_express28 = __toESM(require("express"));

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/platform/NodePlatformFunctions.js
var crypto4 = __toESM(require("crypto"), 1);
var import_events = require("events");

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/crypto/NodeCryptoProvider.js
var crypto3 = __toESM(require("crypto"), 1);

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/crypto/CryptoProvider.js
var CryptoProvider = class {
  /**
   * Computes a SHA-256 HMAC given a secret and a payload (encoded in UTF-8).
   * The output HMAC should be encoded in hexadecimal.
   *
   * Sample values for implementations:
   * - computeHMACSignature('', 'test_secret') => 'f7f9bd47fb987337b5796fdc1fdb9ba221d0d5396814bfcaf9521f43fd8927fd'
   * - computeHMACSignature('\ud83d\ude00', 'test_secret') => '837da296d05c4fe31f61d5d7ead035099d9585a5bcde87de952012a78f0b0c43
   */
  computeHMACSignature(payload, secret) {
    throw new Error("computeHMACSignature not implemented.");
  }
  /**
   * Asynchronous version of `computeHMACSignature`. Some implementations may
   * only allow support async signature computation.
   *
   * Computes a SHA-256 HMAC given a secret and a payload (encoded in UTF-8).
   * The output HMAC should be encoded in hexadecimal.
   *
   * Sample values for implementations:
   * - computeHMACSignature('', 'test_secret') => 'f7f9bd47fb987337b5796fdc1fdb9ba221d0d5396814bfcaf9521f43fd8927fd'
   * - computeHMACSignature('\ud83d\ude00', 'test_secret') => '837da296d05c4fe31f61d5d7ead035099d9585a5bcde87de952012a78f0b0c43
   */
  computeHMACSignatureAsync(payload, secret) {
    throw new Error("computeHMACSignatureAsync not implemented.");
  }
  /**
   * Computes a SHA-256 hash of the data.
   */
  computeSHA256Async(data) {
    throw new Error("computeSHA256 not implemented.");
  }
};
var CryptoProviderOnlySupportsAsyncError = class extends Error {
};

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/crypto/NodeCryptoProvider.js
var NodeCryptoProvider = class extends CryptoProvider {
  /** @override */
  computeHMACSignature(payload, secret) {
    return crypto3.createHmac("sha256", secret).update(payload, "utf8").digest("hex");
  }
  /** @override */
  async computeHMACSignatureAsync(payload, secret) {
    const signature = await this.computeHMACSignature(payload, secret);
    return signature;
  }
  /** @override */
  async computeSHA256Async(data) {
    return new Uint8Array(await crypto3.createHash("sha256").update(data).digest());
  }
};

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/net/NodeHttpClient.js
var http_ = __toESM(require("http"), 1);
var https_ = __toESM(require("https"), 1);

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/net/HttpClient.js
var HttpClient = class _HttpClient {
  /** The client name used for diagnostics. */
  getClientName() {
    throw new Error("getClientName not implemented.");
  }
  makeRequest(host, port, path4, method, headers, requestData, protocol, timeout) {
    throw new Error("makeRequest not implemented.");
  }
  /** Helper to make a consistent timeout error across implementations. */
  static makeTimeoutError() {
    const timeoutErr = new TypeError(_HttpClient.TIMEOUT_ERROR_CODE);
    timeoutErr.code = _HttpClient.TIMEOUT_ERROR_CODE;
    return timeoutErr;
  }
};
HttpClient.CONNECTION_CLOSED_ERROR_CODES = ["ECONNRESET", "EPIPE"];
HttpClient.TIMEOUT_ERROR_CODE = "ETIMEDOUT";
var HttpClientResponse = class {
  constructor(statusCode, headers) {
    this._statusCode = statusCode;
    this._headers = headers;
  }
  getStatusCode() {
    return this._statusCode;
  }
  getHeaders() {
    return this._headers;
  }
  getRawResponse() {
    throw new Error("getRawResponse not implemented.");
  }
  toStream(streamCompleteCallback) {
    throw new Error("toStream not implemented.");
  }
  toJSON() {
    throw new Error("toJSON not implemented.");
  }
};

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/net/NodeHttpClient.js
var http = http_.default || http_;
var https = https_.default || https_;
var defaultHttpAgent = new http.Agent({ keepAlive: true });
var defaultHttpsAgent = new https.Agent({ keepAlive: true });
var NodeHttpClient = class extends HttpClient {
  constructor(agent) {
    super();
    this._agent = agent;
  }
  /** @override. */
  getClientName() {
    return "node";
  }
  makeRequest(host, port, path4, method, headers, requestData, protocol, timeout) {
    const isInsecureConnection = protocol === "http";
    let agent = this._agent;
    if (!agent) {
      agent = isInsecureConnection ? defaultHttpAgent : defaultHttpsAgent;
    }
    const requestPromise = new Promise((resolve, reject) => {
      const req = (isInsecureConnection ? http : https).request({
        host,
        port,
        path: path4,
        method,
        agent,
        headers,
        ciphers: "DEFAULT:!aNULL:!eNULL:!LOW:!EXPORT:!SSLv2:!MD5"
      });
      req.setTimeout(timeout, () => {
        req.destroy(HttpClient.makeTimeoutError());
      });
      req.on("response", (res) => {
        resolve(new NodeHttpClientResponse(res));
      });
      req.on("error", (error) => {
        reject(error);
      });
      req.once("socket", (socket) => {
        if (socket.connecting) {
          socket.once(isInsecureConnection ? "connect" : "secureConnect", () => {
            req.write(requestData);
            req.end();
          });
        } else {
          req.write(requestData);
          req.end();
        }
      });
    });
    return requestPromise;
  }
};
var NodeHttpClientResponse = class extends HttpClientResponse {
  constructor(res) {
    super(res.statusCode, res.headers || {});
    this._res = res;
  }
  getRawResponse() {
    return this._res;
  }
  toStream(streamCompleteCallback) {
    this._res.once("end", () => streamCompleteCallback());
    return this._res;
  }
  toJSON() {
    return new Promise((resolve, reject) => {
      let response = "";
      this._res.setEncoding("utf8");
      this._res.on("data", (chunk) => {
        response += chunk;
      });
      this._res.once("end", () => {
        try {
          resolve(JSON.parse(response));
        } catch (e) {
          reject(e);
        }
      });
    });
  }
};

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/net/FetchHttpClient.js
var FetchHttpClient = class _FetchHttpClient extends HttpClient {
  constructor(fetchFn) {
    super();
    if (!fetchFn) {
      if (!globalThis.fetch) {
        throw new Error("fetch() function not provided and is not defined in the global scope. You must provide a fetch implementation.");
      }
      fetchFn = globalThis.fetch;
    }
    if (globalThis.AbortController) {
      this._fetchFn = _FetchHttpClient.makeFetchWithAbortTimeout(fetchFn);
    } else {
      this._fetchFn = _FetchHttpClient.makeFetchWithRaceTimeout(fetchFn);
    }
  }
  static makeFetchWithRaceTimeout(fetchFn) {
    return (url, init, timeout) => {
      let pendingTimeoutId;
      const timeoutPromise = new Promise((_, reject) => {
        pendingTimeoutId = setTimeout(() => {
          pendingTimeoutId = null;
          reject(HttpClient.makeTimeoutError());
        }, timeout);
      });
      const fetchPromise = fetchFn(url, init);
      return Promise.race([fetchPromise, timeoutPromise]).finally(() => {
        if (pendingTimeoutId) {
          clearTimeout(pendingTimeoutId);
        }
      });
    };
  }
  static makeFetchWithAbortTimeout(fetchFn) {
    return async (url, init, timeout) => {
      const abort = new AbortController();
      let timeoutId = setTimeout(() => {
        timeoutId = null;
        abort.abort(HttpClient.makeTimeoutError());
      }, timeout);
      try {
        return await fetchFn(url, Object.assign(Object.assign({}, init), { signal: abort.signal }));
      } catch (err) {
        if (err.name === "AbortError") {
          throw HttpClient.makeTimeoutError();
        } else {
          throw err;
        }
      } finally {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
      }
    };
  }
  /** @override. */
  getClientName() {
    return "fetch";
  }
  async makeRequest(host, port, path4, method, headers, requestData, protocol, timeout) {
    const isInsecureConnection = protocol === "http";
    const url = new URL(path4, `${isInsecureConnection ? "http" : "https"}://${host}`);
    url.port = port;
    const methodHasPayload = method == "POST" || method == "PUT" || method == "PATCH";
    const body = requestData || (methodHasPayload ? "" : void 0);
    const res = await this._fetchFn(url.toString(), {
      method,
      // @ts-ignore
      headers,
      // @ts-ignore
      body
    }, timeout);
    return new FetchHttpClientResponse(res);
  }
};
var FetchHttpClientResponse = class _FetchHttpClientResponse extends HttpClientResponse {
  constructor(res) {
    super(res.status, _FetchHttpClientResponse._transformHeadersToObject(res.headers));
    this._res = res;
  }
  getRawResponse() {
    return this._res;
  }
  toStream(streamCompleteCallback) {
    streamCompleteCallback();
    return this._res.body;
  }
  toJSON() {
    return this._res.json();
  }
  static _transformHeadersToObject(headers) {
    const headersObj = {};
    for (const entry of headers) {
      if (!Array.isArray(entry) || entry.length != 2) {
        throw new Error("Response objects produced by the fetch function given to FetchHttpClient do not have an iterable headers map. Response#headers should be an iterable object.");
      }
      headersObj[entry[0]] = entry[1];
    }
    return headersObj;
  }
};

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/crypto/SubtleCryptoProvider.js
var SubtleCryptoProvider = class extends CryptoProvider {
  constructor(subtleCrypto) {
    super();
    this.subtleCrypto = subtleCrypto || crypto.subtle;
  }
  /** @override */
  computeHMACSignature(payload, secret) {
    throw new CryptoProviderOnlySupportsAsyncError("SubtleCryptoProvider cannot be used in a synchronous context.");
  }
  /** @override */
  async computeHMACSignatureAsync(payload, secret) {
    const encoder = new TextEncoder();
    const key = await this.subtleCrypto.importKey("raw", encoder.encode(secret), {
      name: "HMAC",
      hash: { name: "SHA-256" }
    }, false, ["sign"]);
    const signatureBuffer = await this.subtleCrypto.sign("hmac", key, encoder.encode(payload));
    const signatureBytes = new Uint8Array(signatureBuffer);
    const signatureHexCodes = new Array(signatureBytes.length);
    for (let i = 0; i < signatureBytes.length; i++) {
      signatureHexCodes[i] = byteHexMapping[signatureBytes[i]];
    }
    return signatureHexCodes.join("");
  }
  /** @override */
  async computeSHA256Async(data) {
    return new Uint8Array(await this.subtleCrypto.digest("SHA-256", data));
  }
};
var byteHexMapping = new Array(256);
for (let i = 0; i < byteHexMapping.length; i++) {
  byteHexMapping[i] = i.toString(16).padStart(2, "0");
}

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/platform/PlatformFunctions.js
var PlatformFunctions = class {
  constructor() {
    this._fetchFn = null;
    this._agent = null;
  }
  /**
   * Gets uname with Node's built-in `exec` function, if available.
   */
  getUname() {
    throw new Error("getUname not implemented.");
  }
  /**
   * Generates a v4 UUID. See https://stackoverflow.com/a/2117523
   */
  uuid4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      const v = c === "x" ? r : r & 3 | 8;
      return v.toString(16);
    });
  }
  /**
   * Compares strings in constant time.
   */
  secureCompare(a, b) {
    if (a.length !== b.length) {
      return false;
    }
    const len = a.length;
    let result = 0;
    for (let i = 0; i < len; ++i) {
      result |= a.charCodeAt(i) ^ b.charCodeAt(i);
    }
    return result === 0;
  }
  /**
   * Creates an event emitter.
   */
  createEmitter() {
    throw new Error("createEmitter not implemented.");
  }
  /**
   * Checks if the request data is a stream. If so, read the entire stream
   * to a buffer and return the buffer.
   */
  tryBufferData(data) {
    throw new Error("tryBufferData not implemented.");
  }
  /**
   * Creates an HTTP client which uses the Node `http` and `https` packages
   * to issue requests.
   */
  createNodeHttpClient(agent) {
    throw new Error("createNodeHttpClient not implemented.");
  }
  /**
   * Creates an HTTP client for issuing Stripe API requests which uses the Web
   * Fetch API.
   *
   * A fetch function can optionally be passed in as a parameter. If none is
   * passed, will default to the default `fetch` function in the global scope.
   */
  createFetchHttpClient(fetchFn) {
    return new FetchHttpClient(fetchFn);
  }
  /**
   * Creates an HTTP client using runtime-specific APIs.
   */
  createDefaultHttpClient() {
    throw new Error("createDefaultHttpClient not implemented.");
  }
  /**
   * Creates a CryptoProvider which uses the Node `crypto` package for its computations.
   */
  createNodeCryptoProvider() {
    throw new Error("createNodeCryptoProvider not implemented.");
  }
  /**
   * Creates a CryptoProvider which uses the SubtleCrypto interface of the Web Crypto API.
   */
  createSubtleCryptoProvider(subtleCrypto) {
    return new SubtleCryptoProvider(subtleCrypto);
  }
  createDefaultCryptoProvider() {
    throw new Error("createDefaultCryptoProvider not implemented.");
  }
};

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/Error.js
var Error_exports = {};
__export(Error_exports, {
  StripeAPIError: () => StripeAPIError,
  StripeAuthenticationError: () => StripeAuthenticationError,
  StripeCardError: () => StripeCardError,
  StripeConnectionError: () => StripeConnectionError,
  StripeError: () => StripeError,
  StripeIdempotencyError: () => StripeIdempotencyError,
  StripeInvalidGrantError: () => StripeInvalidGrantError,
  StripeInvalidRequestError: () => StripeInvalidRequestError,
  StripePermissionError: () => StripePermissionError,
  StripeRateLimitError: () => StripeRateLimitError,
  StripeSignatureVerificationError: () => StripeSignatureVerificationError,
  StripeUnknownError: () => StripeUnknownError,
  TemporarySessionExpiredError: () => TemporarySessionExpiredError,
  generateV1Error: () => generateV1Error,
  generateV2Error: () => generateV2Error
});
var generateV1Error = (rawStripeError) => {
  switch (rawStripeError.type) {
    case "card_error":
      return new StripeCardError(rawStripeError);
    case "invalid_request_error":
      return new StripeInvalidRequestError(rawStripeError);
    case "api_error":
      return new StripeAPIError(rawStripeError);
    case "authentication_error":
      return new StripeAuthenticationError(rawStripeError);
    case "rate_limit_error":
      return new StripeRateLimitError(rawStripeError);
    case "idempotency_error":
      return new StripeIdempotencyError(rawStripeError);
    case "invalid_grant":
      return new StripeInvalidGrantError(rawStripeError);
    default:
      return new StripeUnknownError(rawStripeError);
  }
};
var generateV2Error = (rawStripeError) => {
  switch (rawStripeError.type) {
    case "temporary_session_expired":
      return new TemporarySessionExpiredError(rawStripeError);
  }
  switch (rawStripeError.code) {
    case "invalid_fields":
      return new StripeInvalidRequestError(rawStripeError);
  }
  return generateV1Error(rawStripeError);
};
var StripeError = class extends Error {
  constructor(raw = {}, type = null) {
    super(raw.message);
    this.type = type || this.constructor.name;
    this.raw = raw;
    this.rawType = raw.type;
    this.code = raw.code;
    this.doc_url = raw.doc_url;
    this.param = raw.param;
    this.detail = raw.detail;
    this.headers = raw.headers;
    this.requestId = raw.requestId;
    this.statusCode = raw.statusCode;
    this.message = raw.message;
    this.userMessage = raw.user_message;
    this.charge = raw.charge;
    this.decline_code = raw.decline_code;
    this.payment_intent = raw.payment_intent;
    this.payment_method = raw.payment_method;
    this.payment_method_type = raw.payment_method_type;
    this.setup_intent = raw.setup_intent;
    this.source = raw.source;
  }
};
StripeError.generate = generateV1Error;
var StripeCardError = class extends StripeError {
  constructor(raw = {}) {
    super(raw, "StripeCardError");
  }
};
var StripeInvalidRequestError = class extends StripeError {
  constructor(raw = {}) {
    super(raw, "StripeInvalidRequestError");
  }
};
var StripeAPIError = class extends StripeError {
  constructor(raw = {}) {
    super(raw, "StripeAPIError");
  }
};
var StripeAuthenticationError = class extends StripeError {
  constructor(raw = {}) {
    super(raw, "StripeAuthenticationError");
  }
};
var StripePermissionError = class extends StripeError {
  constructor(raw = {}) {
    super(raw, "StripePermissionError");
  }
};
var StripeRateLimitError = class extends StripeError {
  constructor(raw = {}) {
    super(raw, "StripeRateLimitError");
  }
};
var StripeConnectionError = class extends StripeError {
  constructor(raw = {}) {
    super(raw, "StripeConnectionError");
  }
};
var StripeSignatureVerificationError = class extends StripeError {
  constructor(header, payload, raw = {}) {
    super(raw, "StripeSignatureVerificationError");
    this.header = header;
    this.payload = payload;
  }
};
var StripeIdempotencyError = class extends StripeError {
  constructor(raw = {}) {
    super(raw, "StripeIdempotencyError");
  }
};
var StripeInvalidGrantError = class extends StripeError {
  constructor(raw = {}) {
    super(raw, "StripeInvalidGrantError");
  }
};
var StripeUnknownError = class extends StripeError {
  constructor(raw = {}) {
    super(raw, "StripeUnknownError");
  }
};
var TemporarySessionExpiredError = class extends StripeError {
  constructor(rawStripeError = {}) {
    super(rawStripeError, "TemporarySessionExpiredError");
  }
};

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/utils.js
var qs = __toESM(require_lib(), 1);
var OPTIONS_KEYS = [
  "apiKey",
  "idempotencyKey",
  "stripeAccount",
  "apiVersion",
  "maxNetworkRetries",
  "timeout",
  "host",
  "authenticator",
  "stripeContext",
  "additionalHeaders"
];
function isOptionsHash(o) {
  return o && typeof o === "object" && OPTIONS_KEYS.some((prop) => Object.prototype.hasOwnProperty.call(o, prop));
}
function queryStringifyRequestData(data, apiMode) {
  return qs.stringify(data, {
    serializeDate: (d) => Math.floor(d.getTime() / 1e3).toString(),
    arrayFormat: apiMode == "v2" ? "repeat" : "indices"
  }).replace(/%5B/g, "[").replace(/%5D/g, "]");
}
var makeURLInterpolator = /* @__PURE__ */ (() => {
  const rc = {
    "\n": "\\n",
    '"': '\\"',
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  };
  return (str) => {
    const cleanString = str.replace(/["\n\r\u2028\u2029]/g, ($0) => rc[$0]);
    return (outputs) => {
      return cleanString.replace(/\{([\s\S]+?)\}/g, ($0, $1) => (
        // @ts-ignore
        encodeURIComponent(outputs[$1] || "")
      ));
    };
  };
})();
function extractUrlParams(path4) {
  const params = path4.match(/\{\w+\}/g);
  if (!params) {
    return [];
  }
  return params.map((param) => param.replace(/[{}]/g, ""));
}
function getDataFromArgs(args) {
  if (!Array.isArray(args) || !args[0] || typeof args[0] !== "object") {
    return {};
  }
  if (!isOptionsHash(args[0])) {
    return args.shift();
  }
  const argKeys = Object.keys(args[0]);
  const optionKeysInArgs = argKeys.filter((key) => OPTIONS_KEYS.includes(key));
  if (optionKeysInArgs.length > 0 && optionKeysInArgs.length !== argKeys.length) {
    emitWarning(`Options found in arguments (${optionKeysInArgs.join(", ")}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options.`);
  }
  return {};
}
function getOptionsFromArgs(args) {
  const opts = {
    host: null,
    headers: {},
    settings: {}
  };
  if (args.length > 0) {
    const arg = args[args.length - 1];
    if (typeof arg === "string") {
      opts.authenticator = createApiKeyAuthenticator(args.pop());
    } else if (isOptionsHash(arg)) {
      const params = Object.assign({}, args.pop());
      const extraKeys = Object.keys(params).filter((key) => !OPTIONS_KEYS.includes(key));
      if (extraKeys.length) {
        emitWarning(`Invalid options found (${extraKeys.join(", ")}); ignoring.`);
      }
      if (params.apiKey) {
        opts.authenticator = createApiKeyAuthenticator(params.apiKey);
      }
      if (params.idempotencyKey) {
        opts.headers["Idempotency-Key"] = params.idempotencyKey;
      }
      if (params.stripeAccount) {
        opts.headers["Stripe-Account"] = params.stripeAccount;
      }
      if (params.stripeContext) {
        if (opts.headers["Stripe-Account"]) {
          throw new Error("Can't specify both stripeAccount and stripeContext.");
        }
        opts.headers["Stripe-Context"] = params.stripeContext;
      }
      if (params.apiVersion) {
        opts.headers["Stripe-Version"] = params.apiVersion;
      }
      if (Number.isInteger(params.maxNetworkRetries)) {
        opts.settings.maxNetworkRetries = params.maxNetworkRetries;
      }
      if (Number.isInteger(params.timeout)) {
        opts.settings.timeout = params.timeout;
      }
      if (params.host) {
        opts.host = params.host;
      }
      if (params.authenticator) {
        if (params.apiKey) {
          throw new Error("Can't specify both apiKey and authenticator.");
        }
        if (typeof params.authenticator !== "function") {
          throw new Error("The authenticator must be a function receiving a request as the first parameter.");
        }
        opts.authenticator = params.authenticator;
      }
      if (params.additionalHeaders) {
        opts.headers = params.additionalHeaders;
      }
    }
  }
  return opts;
}
function protoExtend(sub) {
  const Super = this;
  const Constructor = Object.prototype.hasOwnProperty.call(sub, "constructor") ? sub.constructor : function(...args) {
    Super.apply(this, args);
  };
  Object.assign(Constructor, Super);
  Constructor.prototype = Object.create(Super.prototype);
  Object.assign(Constructor.prototype, sub);
  return Constructor;
}
function removeNullish(obj) {
  if (typeof obj !== "object") {
    throw new Error("Argument must be an object");
  }
  return Object.keys(obj).reduce((result, key) => {
    if (obj[key] != null) {
      result[key] = obj[key];
    }
    return result;
  }, {});
}
function normalizeHeaders(obj) {
  if (!(obj && typeof obj === "object")) {
    return obj;
  }
  return Object.keys(obj).reduce((result, header) => {
    result[normalizeHeader(header)] = obj[header];
    return result;
  }, {});
}
function normalizeHeader(header) {
  return header.split("-").map((text) => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()).join("-");
}
function callbackifyPromiseWithTimeout(promise, callback) {
  if (callback) {
    return promise.then((res) => {
      setTimeout(() => {
        callback(null, res);
      }, 0);
    }, (err) => {
      setTimeout(() => {
        callback(err, null);
      }, 0);
    });
  }
  return promise;
}
function pascalToCamelCase(name) {
  if (name === "OAuth") {
    return "oauth";
  } else {
    return name[0].toLowerCase() + name.substring(1);
  }
}
function emitWarning(warning) {
  if (typeof process.emitWarning !== "function") {
    return console.warn(`Stripe: ${warning}`);
  }
  return process.emitWarning(warning, "Stripe");
}
function isObject(obj) {
  const type = typeof obj;
  return (type === "function" || type === "object") && !!obj;
}
function flattenAndStringify(data) {
  const result = {};
  const step = (obj, prevKey) => {
    Object.entries(obj).forEach(([key, value]) => {
      const newKey = prevKey ? `${prevKey}[${key}]` : key;
      if (isObject(value)) {
        if (!(value instanceof Uint8Array) && !Object.prototype.hasOwnProperty.call(value, "data")) {
          return step(value, newKey);
        } else {
          result[newKey] = value;
        }
      } else {
        result[newKey] = String(value);
      }
    });
  };
  step(data, null);
  return result;
}
function validateInteger(name, n, defaultVal) {
  if (!Number.isInteger(n)) {
    if (defaultVal !== void 0) {
      return defaultVal;
    } else {
      throw new Error(`${name} must be an integer`);
    }
  }
  return n;
}
function determineProcessUserAgentProperties() {
  return typeof process === "undefined" ? {} : {
    lang_version: process.version,
    platform: process.platform
  };
}
function createApiKeyAuthenticator(apiKey) {
  const authenticator = (request) => {
    request.headers.Authorization = "Bearer " + apiKey;
    return Promise.resolve();
  };
  authenticator._apiKey = apiKey;
  return authenticator;
}
function concat(arrays) {
  const totalLength = arrays.reduce((len, array) => len + array.length, 0);
  const merged = new Uint8Array(totalLength);
  let offset = 0;
  arrays.forEach((array) => {
    merged.set(array, offset);
    offset += array.length;
  });
  return merged;
}
function dateTimeReplacer(key, value) {
  if (this[key] instanceof Date) {
    return Math.floor(this[key].getTime() / 1e3).toString();
  }
  return value;
}
function jsonStringifyRequestData(data) {
  return JSON.stringify(data, dateTimeReplacer);
}
function getAPIMode(path4) {
  if (!path4) {
    return "v1";
  }
  return path4.startsWith("/v2") ? "v2" : "v1";
}

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/platform/NodePlatformFunctions.js
var import_child_process = require("child_process");
var StreamProcessingError = class extends StripeError {
};
var NodePlatformFunctions = class extends PlatformFunctions {
  constructor() {
    super();
    this._exec = import_child_process.exec;
    this._UNAME_CACHE = null;
  }
  /** @override */
  uuid4() {
    if (crypto4.randomUUID) {
      return crypto4.randomUUID();
    }
    return super.uuid4();
  }
  /**
   * @override
   * Node's built in `exec` function sometimes throws outright,
   * and sometimes has a callback with an error,
   * depending on the type of error.
   *
   * This unifies that interface by resolving with a null uname
   * if an error is encountered.
   */
  getUname() {
    if (!this._UNAME_CACHE) {
      this._UNAME_CACHE = new Promise((resolve, reject) => {
        try {
          this._exec("uname -a", (err, uname) => {
            if (err) {
              return resolve(null);
            }
            resolve(uname);
          });
        } catch (e) {
          resolve(null);
        }
      });
    }
    return this._UNAME_CACHE;
  }
  /**
   * @override
   * Secure compare, from https://github.com/freewil/scmp
   */
  secureCompare(a, b) {
    if (!a || !b) {
      throw new Error("secureCompare must receive two arguments");
    }
    if (a.length !== b.length) {
      return false;
    }
    if (crypto4.timingSafeEqual) {
      const textEncoder = new TextEncoder();
      const aEncoded = textEncoder.encode(a);
      const bEncoded = textEncoder.encode(b);
      return crypto4.timingSafeEqual(aEncoded, bEncoded);
    }
    return super.secureCompare(a, b);
  }
  createEmitter() {
    return new import_events.EventEmitter();
  }
  /** @override */
  tryBufferData(data) {
    if (!(data.file.data instanceof import_events.EventEmitter)) {
      return Promise.resolve(data);
    }
    const bufferArray = [];
    return new Promise((resolve, reject) => {
      data.file.data.on("data", (line) => {
        bufferArray.push(line);
      }).once("end", () => {
        const bufferData = Object.assign({}, data);
        bufferData.file.data = concat(bufferArray);
        resolve(bufferData);
      }).on("error", (err) => {
        reject(new StreamProcessingError({
          message: "An error occurred while attempting to process the file for upload.",
          detail: err
        }));
      });
    });
  }
  /** @override */
  createNodeHttpClient(agent) {
    return new NodeHttpClient(agent);
  }
  /** @override */
  createDefaultHttpClient() {
    return new NodeHttpClient();
  }
  /** @override */
  createNodeCryptoProvider() {
    return new NodeCryptoProvider();
  }
  /** @override */
  createDefaultCryptoProvider() {
    return this.createNodeCryptoProvider();
  }
};

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/RequestSender.js
var MAX_RETRY_AFTER_WAIT = 60;
var RequestSender = class _RequestSender {
  constructor(stripe2, maxBufferedRequestMetric) {
    this._stripe = stripe2;
    this._maxBufferedRequestMetric = maxBufferedRequestMetric;
  }
  _addHeadersDirectlyToObject(obj, headers) {
    obj.requestId = headers["request-id"];
    obj.stripeAccount = obj.stripeAccount || headers["stripe-account"];
    obj.apiVersion = obj.apiVersion || headers["stripe-version"];
    obj.idempotencyKey = obj.idempotencyKey || headers["idempotency-key"];
  }
  _makeResponseEvent(requestEvent, statusCode, headers) {
    const requestEndTime = Date.now();
    const requestDurationMs = requestEndTime - requestEvent.request_start_time;
    return removeNullish({
      api_version: headers["stripe-version"],
      account: headers["stripe-account"],
      idempotency_key: headers["idempotency-key"],
      method: requestEvent.method,
      path: requestEvent.path,
      status: statusCode,
      request_id: this._getRequestId(headers),
      elapsed: requestDurationMs,
      request_start_time: requestEvent.request_start_time,
      request_end_time: requestEndTime
    });
  }
  _getRequestId(headers) {
    return headers["request-id"];
  }
  /**
   * Used by methods with spec.streaming === true. For these methods, we do not
   * buffer successful responses into memory or do parse them into stripe
   * objects, we delegate that all of that to the user and pass back the raw
   * http.Response object to the callback.
   *
   * (Unsuccessful responses shouldn't make it here, they should
   * still be buffered/parsed and handled by _jsonResponseHandler -- see
   * makeRequest)
   */
  _streamingResponseHandler(requestEvent, usage, callback) {
    return (res) => {
      const headers = res.getHeaders();
      const streamCompleteCallback = () => {
        const responseEvent = this._makeResponseEvent(requestEvent, res.getStatusCode(), headers);
        this._stripe._emitter.emit("response", responseEvent);
        this._recordRequestMetrics(this._getRequestId(headers), responseEvent.elapsed, usage);
      };
      const stream = res.toStream(streamCompleteCallback);
      this._addHeadersDirectlyToObject(stream, headers);
      return callback(null, stream);
    };
  }
  /**
   * Default handler for Stripe responses. Buffers the response into memory,
   * parses the JSON and returns it (i.e. passes it to the callback) if there
   * is no "error" field. Otherwise constructs/passes an appropriate Error.
   */
  _jsonResponseHandler(requestEvent, apiMode, usage, callback) {
    return (res) => {
      const headers = res.getHeaders();
      const requestId = this._getRequestId(headers);
      const statusCode = res.getStatusCode();
      const responseEvent = this._makeResponseEvent(requestEvent, statusCode, headers);
      this._stripe._emitter.emit("response", responseEvent);
      res.toJSON().then((jsonResponse) => {
        if (jsonResponse.error) {
          let err;
          if (typeof jsonResponse.error === "string") {
            jsonResponse.error = {
              type: jsonResponse.error,
              message: jsonResponse.error_description
            };
          }
          jsonResponse.error.headers = headers;
          jsonResponse.error.statusCode = statusCode;
          jsonResponse.error.requestId = requestId;
          if (statusCode === 401) {
            err = new StripeAuthenticationError(jsonResponse.error);
          } else if (statusCode === 403) {
            err = new StripePermissionError(jsonResponse.error);
          } else if (statusCode === 429) {
            err = new StripeRateLimitError(jsonResponse.error);
          } else if (apiMode === "v2") {
            err = generateV2Error(jsonResponse.error);
          } else {
            err = generateV1Error(jsonResponse.error);
          }
          throw err;
        }
        return jsonResponse;
      }, (e) => {
        throw new StripeAPIError({
          message: "Invalid JSON received from the Stripe API",
          exception: e,
          requestId: headers["request-id"]
        });
      }).then((jsonResponse) => {
        this._recordRequestMetrics(requestId, responseEvent.elapsed, usage);
        const rawResponse = res.getRawResponse();
        this._addHeadersDirectlyToObject(rawResponse, headers);
        Object.defineProperty(jsonResponse, "lastResponse", {
          enumerable: false,
          writable: false,
          value: rawResponse
        });
        callback(null, jsonResponse);
      }, (e) => callback(e, null));
    };
  }
  static _generateConnectionErrorMessage(requestRetries) {
    return `An error occurred with our connection to Stripe.${requestRetries > 0 ? ` Request was retried ${requestRetries} times.` : ""}`;
  }
  // For more on when and how to retry API requests, see https://stripe.com/docs/error-handling#safely-retrying-requests-with-idempotency
  static _shouldRetry(res, numRetries, maxRetries, error) {
    if (error && numRetries === 0 && HttpClient.CONNECTION_CLOSED_ERROR_CODES.includes(error.code)) {
      return true;
    }
    if (numRetries >= maxRetries) {
      return false;
    }
    if (!res) {
      return true;
    }
    if (res.getHeaders()["stripe-should-retry"] === "false") {
      return false;
    }
    if (res.getHeaders()["stripe-should-retry"] === "true") {
      return true;
    }
    if (res.getStatusCode() === 409) {
      return true;
    }
    if (res.getStatusCode() >= 500) {
      return true;
    }
    return false;
  }
  _getSleepTimeInMS(numRetries, retryAfter = null) {
    const initialNetworkRetryDelay = this._stripe.getInitialNetworkRetryDelay();
    const maxNetworkRetryDelay = this._stripe.getMaxNetworkRetryDelay();
    let sleepSeconds = Math.min(initialNetworkRetryDelay * Math.pow(2, numRetries - 1), maxNetworkRetryDelay);
    sleepSeconds *= 0.5 * (1 + Math.random());
    sleepSeconds = Math.max(initialNetworkRetryDelay, sleepSeconds);
    if (Number.isInteger(retryAfter) && retryAfter <= MAX_RETRY_AFTER_WAIT) {
      sleepSeconds = Math.max(sleepSeconds, retryAfter);
    }
    return sleepSeconds * 1e3;
  }
  // Max retries can be set on a per request basis. Favor those over the global setting
  _getMaxNetworkRetries(settings = {}) {
    return settings.maxNetworkRetries !== void 0 && Number.isInteger(settings.maxNetworkRetries) ? settings.maxNetworkRetries : this._stripe.getMaxNetworkRetries();
  }
  _defaultIdempotencyKey(method, settings, apiMode) {
    const maxRetries = this._getMaxNetworkRetries(settings);
    const genKey = () => `stripe-node-retry-${this._stripe._platformFunctions.uuid4()}`;
    if (apiMode === "v2") {
      if (method === "POST" || method === "DELETE") {
        return genKey();
      }
    } else if (apiMode === "v1") {
      if (method === "POST" && maxRetries > 0) {
        return genKey();
      }
    }
    return null;
  }
  _makeHeaders({ contentType, contentLength, apiVersion, clientUserAgent, method, userSuppliedHeaders, userSuppliedSettings, stripeAccount, stripeContext, apiMode }) {
    const defaultHeaders = {
      Accept: "application/json",
      "Content-Type": contentType,
      "User-Agent": this._getUserAgentString(apiMode),
      "X-Stripe-Client-User-Agent": clientUserAgent,
      "X-Stripe-Client-Telemetry": this._getTelemetryHeader(),
      "Stripe-Version": apiVersion,
      "Stripe-Account": stripeAccount,
      "Stripe-Context": stripeContext,
      "Idempotency-Key": this._defaultIdempotencyKey(method, userSuppliedSettings, apiMode)
    };
    const methodHasPayload = method == "POST" || method == "PUT" || method == "PATCH";
    if (methodHasPayload || contentLength) {
      if (!methodHasPayload) {
        emitWarning(`${method} method had non-zero contentLength but no payload is expected for this verb`);
      }
      defaultHeaders["Content-Length"] = contentLength;
    }
    return Object.assign(
      removeNullish(defaultHeaders),
      // If the user supplied, say 'idempotency-key', override instead of appending by ensuring caps are the same.
      normalizeHeaders(userSuppliedHeaders)
    );
  }
  _getUserAgentString(apiMode) {
    const packageVersion = this._stripe.getConstant("PACKAGE_VERSION");
    const appInfo = this._stripe._appInfo ? this._stripe.getAppInfoAsString() : "";
    return `Stripe/${apiMode} NodeBindings/${packageVersion} ${appInfo}`.trim();
  }
  _getTelemetryHeader() {
    if (this._stripe.getTelemetryEnabled() && this._stripe._prevRequestMetrics.length > 0) {
      const metrics = this._stripe._prevRequestMetrics.shift();
      return JSON.stringify({
        last_request_metrics: metrics
      });
    }
  }
  _recordRequestMetrics(requestId, requestDurationMs, usage) {
    if (this._stripe.getTelemetryEnabled() && requestId) {
      if (this._stripe._prevRequestMetrics.length > this._maxBufferedRequestMetric) {
        emitWarning("Request metrics buffer is full, dropping telemetry message.");
      } else {
        const m = {
          request_id: requestId,
          request_duration_ms: requestDurationMs
        };
        if (usage && usage.length > 0) {
          m.usage = usage;
        }
        this._stripe._prevRequestMetrics.push(m);
      }
    }
  }
  _rawRequest(method, path4, params, options) {
    const requestPromise = new Promise((resolve, reject) => {
      let opts;
      try {
        const requestMethod = method.toUpperCase();
        if (requestMethod !== "POST" && params && Object.keys(params).length !== 0) {
          throw new Error("rawRequest only supports params on POST requests. Please pass null and add your parameters to path.");
        }
        const args = [].slice.call([params, options]);
        const dataFromArgs = getDataFromArgs(args);
        const data = Object.assign({}, dataFromArgs);
        const calculatedOptions = getOptionsFromArgs(args);
        const headers2 = calculatedOptions.headers;
        const authenticator2 = calculatedOptions.authenticator;
        opts = {
          requestMethod,
          requestPath: path4,
          bodyData: data,
          queryData: {},
          authenticator: authenticator2,
          headers: headers2,
          host: null,
          streaming: false,
          settings: {},
          usage: ["raw_request"]
        };
      } catch (err) {
        reject(err);
        return;
      }
      function requestCallback(err, response) {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      }
      const { headers, settings } = opts;
      const authenticator = opts.authenticator;
      this._request(opts.requestMethod, opts.host, path4, opts.bodyData, authenticator, { headers, settings, streaming: opts.streaming }, opts.usage, requestCallback);
    });
    return requestPromise;
  }
  _request(method, host, path4, data, authenticator, options, usage = [], callback, requestDataProcessor = null) {
    var _a;
    let requestData;
    authenticator = (_a = authenticator !== null && authenticator !== void 0 ? authenticator : this._stripe._authenticator) !== null && _a !== void 0 ? _a : null;
    const apiMode = getAPIMode(path4);
    const retryRequest = (requestFn, apiVersion, headers, requestRetries, retryAfter) => {
      return setTimeout(requestFn, this._getSleepTimeInMS(requestRetries, retryAfter), apiVersion, headers, requestRetries + 1);
    };
    const makeRequest = (apiVersion, headers, numRetries) => {
      const timeout = options.settings && options.settings.timeout && Number.isInteger(options.settings.timeout) && options.settings.timeout >= 0 ? options.settings.timeout : this._stripe.getApiField("timeout");
      const request = {
        host: host || this._stripe.getApiField("host"),
        port: this._stripe.getApiField("port"),
        path: path4,
        method,
        headers: Object.assign({}, headers),
        body: requestData,
        protocol: this._stripe.getApiField("protocol")
      };
      authenticator(request).then(() => {
        const req = this._stripe.getApiField("httpClient").makeRequest(request.host, request.port, request.path, request.method, request.headers, request.body, request.protocol, timeout);
        const requestStartTime = Date.now();
        const requestEvent = removeNullish({
          api_version: apiVersion,
          account: headers["Stripe-Account"],
          idempotency_key: headers["Idempotency-Key"],
          method,
          path: path4,
          request_start_time: requestStartTime
        });
        const requestRetries = numRetries || 0;
        const maxRetries = this._getMaxNetworkRetries(options.settings || {});
        this._stripe._emitter.emit("request", requestEvent);
        req.then((res) => {
          if (_RequestSender._shouldRetry(res, requestRetries, maxRetries)) {
            return retryRequest(
              makeRequest,
              apiVersion,
              headers,
              requestRetries,
              // @ts-ignore
              res.getHeaders()["retry-after"]
            );
          } else if (options.streaming && res.getStatusCode() < 400) {
            return this._streamingResponseHandler(requestEvent, usage, callback)(res);
          } else {
            return this._jsonResponseHandler(requestEvent, apiMode, usage, callback)(res);
          }
        }).catch((error) => {
          if (_RequestSender._shouldRetry(null, requestRetries, maxRetries, error)) {
            return retryRequest(makeRequest, apiVersion, headers, requestRetries, null);
          } else {
            const isTimeoutError = error.code && error.code === HttpClient.TIMEOUT_ERROR_CODE;
            return callback(new StripeConnectionError({
              message: isTimeoutError ? `Request aborted due to timeout being reached (${timeout}ms)` : _RequestSender._generateConnectionErrorMessage(requestRetries),
              // @ts-ignore
              detail: error
            }));
          }
        });
      }).catch((e) => {
        throw new StripeError({
          message: "Unable to authenticate the request",
          exception: e
        });
      });
    };
    const prepareAndMakeRequest = (error, data2) => {
      if (error) {
        return callback(error);
      }
      requestData = data2;
      this._stripe.getClientUserAgent((clientUserAgent) => {
        const apiVersion = this._stripe.getApiField("version");
        const headers = this._makeHeaders({
          contentType: apiMode == "v2" ? "application/json" : "application/x-www-form-urlencoded",
          contentLength: requestData.length,
          apiVersion,
          clientUserAgent,
          method,
          userSuppliedHeaders: options.headers,
          userSuppliedSettings: options.settings,
          stripeAccount: apiMode == "v2" ? null : this._stripe.getApiField("stripeAccount"),
          stripeContext: apiMode == "v2" ? this._stripe.getApiField("stripeContext") : null,
          apiMode
        });
        makeRequest(apiVersion, headers, 0);
      });
    };
    if (requestDataProcessor) {
      requestDataProcessor(method, data, options.headers, prepareAndMakeRequest);
    } else {
      let stringifiedData;
      if (apiMode == "v2") {
        stringifiedData = data ? jsonStringifyRequestData(data) : "";
      } else {
        stringifiedData = queryStringifyRequestData(data || {}, apiMode);
      }
      prepareAndMakeRequest(null, stringifiedData);
    }
  }
};

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/autoPagination.js
var V1Iterator = class {
  constructor(firstPagePromise, requestArgs, spec, stripeResource) {
    this.index = 0;
    this.pagePromise = firstPagePromise;
    this.promiseCache = { currentPromise: null };
    this.requestArgs = requestArgs;
    this.spec = spec;
    this.stripeResource = stripeResource;
  }
  async iterate(pageResult) {
    if (!(pageResult && pageResult.data && typeof pageResult.data.length === "number")) {
      throw Error("Unexpected: Stripe API response does not have a well-formed `data` array.");
    }
    const reverseIteration = isReverseIteration(this.requestArgs);
    if (this.index < pageResult.data.length) {
      const idx = reverseIteration ? pageResult.data.length - 1 - this.index : this.index;
      const value = pageResult.data[idx];
      this.index += 1;
      return { value, done: false };
    } else if (pageResult.has_more) {
      this.index = 0;
      this.pagePromise = this.getNextPage(pageResult);
      const nextPageResult = await this.pagePromise;
      return this.iterate(nextPageResult);
    }
    return { done: true, value: void 0 };
  }
  /** @abstract */
  getNextPage(_pageResult) {
    throw new Error("Unimplemented");
  }
  async _next() {
    return this.iterate(await this.pagePromise);
  }
  next() {
    if (this.promiseCache.currentPromise) {
      return this.promiseCache.currentPromise;
    }
    const nextPromise = (async () => {
      const ret = await this._next();
      this.promiseCache.currentPromise = null;
      return ret;
    })();
    this.promiseCache.currentPromise = nextPromise;
    return nextPromise;
  }
};
var V1ListIterator = class extends V1Iterator {
  getNextPage(pageResult) {
    const reverseIteration = isReverseIteration(this.requestArgs);
    const lastId = getLastId(pageResult, reverseIteration);
    return this.stripeResource._makeRequest(this.requestArgs, this.spec, {
      [reverseIteration ? "ending_before" : "starting_after"]: lastId
    });
  }
};
var V1SearchIterator = class extends V1Iterator {
  getNextPage(pageResult) {
    if (!pageResult.next_page) {
      throw Error("Unexpected: Stripe API response does not have a well-formed `next_page` field, but `has_more` was true.");
    }
    return this.stripeResource._makeRequest(this.requestArgs, this.spec, {
      page: pageResult.next_page
    });
  }
};
var V2ListIterator = class {
  constructor(firstPagePromise, requestArgs, spec, stripeResource) {
    this.currentPageIterator = (async () => {
      const page = await firstPagePromise;
      return page.data[Symbol.iterator]();
    })();
    this.nextPageUrl = (async () => {
      const page = await firstPagePromise;
      return page.next_page_url || null;
    })();
    this.requestArgs = requestArgs;
    this.spec = spec;
    this.stripeResource = stripeResource;
  }
  async turnPage() {
    const nextPageUrl = await this.nextPageUrl;
    if (!nextPageUrl)
      return null;
    this.spec.fullPath = nextPageUrl;
    const page = await this.stripeResource._makeRequest([], this.spec, {});
    this.nextPageUrl = Promise.resolve(page.next_page_url);
    this.currentPageIterator = Promise.resolve(page.data[Symbol.iterator]());
    return this.currentPageIterator;
  }
  async next() {
    {
      const result2 = (await this.currentPageIterator).next();
      if (!result2.done)
        return { done: false, value: result2.value };
    }
    const nextPageIterator = await this.turnPage();
    if (!nextPageIterator) {
      return { done: true, value: void 0 };
    }
    const result = nextPageIterator.next();
    if (!result.done)
      return { done: false, value: result.value };
    return { done: true, value: void 0 };
  }
};
var makeAutoPaginationMethods = (stripeResource, requestArgs, spec, firstPagePromise) => {
  const apiMode = getAPIMode(spec.fullPath || spec.path);
  if (apiMode !== "v2" && spec.methodType === "search") {
    return makeAutoPaginationMethodsFromIterator(new V1SearchIterator(firstPagePromise, requestArgs, spec, stripeResource));
  }
  if (apiMode !== "v2" && spec.methodType === "list") {
    return makeAutoPaginationMethodsFromIterator(new V1ListIterator(firstPagePromise, requestArgs, spec, stripeResource));
  }
  if (apiMode === "v2" && spec.methodType === "list") {
    return makeAutoPaginationMethodsFromIterator(new V2ListIterator(firstPagePromise, requestArgs, spec, stripeResource));
  }
  return null;
};
var makeAutoPaginationMethodsFromIterator = (iterator) => {
  const autoPagingEach = makeAutoPagingEach((...args) => iterator.next(...args));
  const autoPagingToArray = makeAutoPagingToArray(autoPagingEach);
  const autoPaginationMethods = {
    autoPagingEach,
    autoPagingToArray,
    // Async iterator functions:
    next: () => iterator.next(),
    return: () => {
      return {};
    },
    [getAsyncIteratorSymbol()]: () => {
      return autoPaginationMethods;
    }
  };
  return autoPaginationMethods;
};
function getAsyncIteratorSymbol() {
  if (typeof Symbol !== "undefined" && Symbol.asyncIterator) {
    return Symbol.asyncIterator;
  }
  return "@@asyncIterator";
}
function getDoneCallback(args) {
  if (args.length < 2) {
    return null;
  }
  const onDone = args[1];
  if (typeof onDone !== "function") {
    throw Error(`The second argument to autoPagingEach, if present, must be a callback function; received ${typeof onDone}`);
  }
  return onDone;
}
function getItemCallback(args) {
  if (args.length === 0) {
    return void 0;
  }
  const onItem = args[0];
  if (typeof onItem !== "function") {
    throw Error(`The first argument to autoPagingEach, if present, must be a callback function; received ${typeof onItem}`);
  }
  if (onItem.length === 2) {
    return onItem;
  }
  if (onItem.length > 2) {
    throw Error(`The \`onItem\` callback function passed to autoPagingEach must accept at most two arguments; got ${onItem}`);
  }
  return function _onItem(item, next) {
    const shouldContinue = onItem(item);
    next(shouldContinue);
  };
}
function getLastId(listResult, reverseIteration) {
  const lastIdx = reverseIteration ? 0 : listResult.data.length - 1;
  const lastItem = listResult.data[lastIdx];
  const lastId = lastItem && lastItem.id;
  if (!lastId) {
    throw Error("Unexpected: No `id` found on the last item while auto-paging a list.");
  }
  return lastId;
}
function makeAutoPagingEach(asyncIteratorNext) {
  return function autoPagingEach() {
    const args = [].slice.call(arguments);
    const onItem = getItemCallback(args);
    const onDone = getDoneCallback(args);
    if (args.length > 2) {
      throw Error(`autoPagingEach takes up to two arguments; received ${args}`);
    }
    const autoPagePromise = wrapAsyncIteratorWithCallback(
      asyncIteratorNext,
      // @ts-ignore we might need a null check
      onItem
    );
    return callbackifyPromiseWithTimeout(autoPagePromise, onDone);
  };
}
function makeAutoPagingToArray(autoPagingEach) {
  return function autoPagingToArray(opts, onDone) {
    const limit = opts && opts.limit;
    if (!limit) {
      throw Error("You must pass a `limit` option to autoPagingToArray, e.g., `autoPagingToArray({limit: 1000});`.");
    }
    if (limit > 1e4) {
      throw Error("You cannot specify a limit of more than 10,000 items to fetch in `autoPagingToArray`; use `autoPagingEach` to iterate through longer lists.");
    }
    const promise = new Promise((resolve, reject) => {
      const items = [];
      autoPagingEach((item) => {
        items.push(item);
        if (items.length >= limit) {
          return false;
        }
      }).then(() => {
        resolve(items);
      }).catch(reject);
    });
    return callbackifyPromiseWithTimeout(promise, onDone);
  };
}
function wrapAsyncIteratorWithCallback(asyncIteratorNext, onItem) {
  return new Promise((resolve, reject) => {
    function handleIteration(iterResult) {
      if (iterResult.done) {
        resolve();
        return;
      }
      const item = iterResult.value;
      return new Promise((next) => {
        onItem(item, next);
      }).then((shouldContinue) => {
        if (shouldContinue === false) {
          return handleIteration({ done: true, value: void 0 });
        } else {
          return asyncIteratorNext().then(handleIteration);
        }
      });
    }
    asyncIteratorNext().then(handleIteration).catch(reject);
  });
}
function isReverseIteration(requestArgs) {
  const args = [].slice.call(requestArgs);
  const dataFromArgs = getDataFromArgs(args);
  return !!dataFromArgs.ending_before;
}

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/StripeMethod.js
function stripeMethod(spec) {
  if (spec.path !== void 0 && spec.fullPath !== void 0) {
    throw new Error(`Method spec specified both a 'path' (${spec.path}) and a 'fullPath' (${spec.fullPath}).`);
  }
  return function(...args) {
    const callback = typeof args[args.length - 1] == "function" && args.pop();
    spec.urlParams = extractUrlParams(spec.fullPath || this.createResourcePathWithSymbols(spec.path || ""));
    const requestPromise = callbackifyPromiseWithTimeout(this._makeRequest(args, spec, {}), callback);
    Object.assign(requestPromise, makeAutoPaginationMethods(this, args, spec, requestPromise));
    return requestPromise;
  };
}

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/StripeResource.js
StripeResource.extend = protoExtend;
StripeResource.method = stripeMethod;
StripeResource.MAX_BUFFERED_REQUEST_METRICS = 100;
function StripeResource(stripe2, deprecatedUrlData) {
  this._stripe = stripe2;
  if (deprecatedUrlData) {
    throw new Error("Support for curried url params was dropped in stripe-node v7.0.0. Instead, pass two ids.");
  }
  this.basePath = makeURLInterpolator(
    // @ts-ignore changing type of basePath
    this.basePath || stripe2.getApiField("basePath")
  );
  this.resourcePath = this.path;
  this.path = makeURLInterpolator(this.path);
  this.initialize(...arguments);
}
StripeResource.prototype = {
  _stripe: null,
  // @ts-ignore the type of path changes in ctor
  path: "",
  resourcePath: "",
  // Methods that don't use the API's default '/v1' path can override it with this setting.
  basePath: null,
  initialize() {
  },
  // Function to override the default data processor. This allows full control
  // over how a StripeResource's request data will get converted into an HTTP
  // body. This is useful for non-standard HTTP requests. The function should
  // take method name, data, and headers as arguments.
  requestDataProcessor: null,
  // Function to add a validation checks before sending the request, errors should
  // be thrown, and they will be passed to the callback/promise.
  validateRequest: null,
  createFullPath(commandPath, urlData) {
    const urlParts = [this.basePath(urlData), this.path(urlData)];
    if (typeof commandPath === "function") {
      const computedCommandPath = commandPath(urlData);
      if (computedCommandPath) {
        urlParts.push(computedCommandPath);
      }
    } else {
      urlParts.push(commandPath);
    }
    return this._joinUrlParts(urlParts);
  },
  // Creates a relative resource path with symbols left in (unlike
  // createFullPath which takes some data to replace them with). For example it
  // might produce: /invoices/{id}
  createResourcePathWithSymbols(pathWithSymbols) {
    if (pathWithSymbols) {
      return `/${this._joinUrlParts([this.resourcePath, pathWithSymbols])}`;
    } else {
      return `/${this.resourcePath}`;
    }
  },
  _joinUrlParts(parts) {
    return parts.join("/").replace(/\/{2,}/g, "/");
  },
  _getRequestOpts(requestArgs, spec, overrideData) {
    var _a;
    const requestMethod = (spec.method || "GET").toUpperCase();
    const usage = spec.usage || [];
    const urlParams = spec.urlParams || [];
    const encode = spec.encode || ((data2) => data2);
    const isUsingFullPath = !!spec.fullPath;
    const commandPath = makeURLInterpolator(isUsingFullPath ? spec.fullPath : spec.path || "");
    const path4 = isUsingFullPath ? spec.fullPath : this.createResourcePathWithSymbols(spec.path);
    const args = [].slice.call(requestArgs);
    const urlData = urlParams.reduce((urlData2, param) => {
      const arg = args.shift();
      if (typeof arg !== "string") {
        throw new Error(`Stripe: Argument "${param}" must be a string, but got: ${arg} (on API request to \`${requestMethod} ${path4}\`)`);
      }
      urlData2[param] = arg;
      return urlData2;
    }, {});
    const dataFromArgs = getDataFromArgs(args);
    const data = encode(Object.assign({}, dataFromArgs, overrideData));
    const options = getOptionsFromArgs(args);
    const host = options.host || spec.host;
    const streaming = !!spec.streaming;
    if (args.filter((x) => x != null).length) {
      throw new Error(`Stripe: Unknown arguments (${args}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options. (on API request to ${requestMethod} \`${path4}\`)`);
    }
    const requestPath = isUsingFullPath ? commandPath(urlData) : this.createFullPath(commandPath, urlData);
    const headers = Object.assign(options.headers, spec.headers);
    if (spec.validator) {
      spec.validator(data, { headers });
    }
    const dataInQuery = spec.method === "GET" || spec.method === "DELETE";
    const bodyData = dataInQuery ? null : data;
    const queryData = dataInQuery ? data : {};
    return {
      requestMethod,
      requestPath,
      bodyData,
      queryData,
      authenticator: (_a = options.authenticator) !== null && _a !== void 0 ? _a : null,
      headers,
      host: host !== null && host !== void 0 ? host : null,
      streaming,
      settings: options.settings,
      usage
    };
  },
  _makeRequest(requestArgs, spec, overrideData) {
    return new Promise((resolve, reject) => {
      var _a;
      let opts;
      try {
        opts = this._getRequestOpts(requestArgs, spec, overrideData);
      } catch (err) {
        reject(err);
        return;
      }
      function requestCallback(err, response) {
        if (err) {
          reject(err);
        } else {
          resolve(spec.transformResponseData ? spec.transformResponseData(response) : response);
        }
      }
      const emptyQuery = Object.keys(opts.queryData).length === 0;
      const path4 = [
        opts.requestPath,
        emptyQuery ? "" : "?",
        queryStringifyRequestData(opts.queryData, getAPIMode(opts.requestPath))
      ].join("");
      const { headers, settings } = opts;
      this._stripe._requestSender._request(opts.requestMethod, opts.host, path4, opts.bodyData, opts.authenticator, {
        headers,
        settings,
        streaming: opts.streaming
      }, opts.usage, requestCallback, (_a = this.requestDataProcessor) === null || _a === void 0 ? void 0 : _a.bind(this));
    });
  }
};

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/Webhooks.js
function createWebhooks(platformFunctions) {
  const Webhook = {
    DEFAULT_TOLERANCE: 300,
    // @ts-ignore
    signature: null,
    constructEvent(payload, header, secret, tolerance, cryptoProvider, receivedAt) {
      try {
        this.signature.verifyHeader(payload, header, secret, tolerance || Webhook.DEFAULT_TOLERANCE, cryptoProvider, receivedAt);
      } catch (e) {
        if (e instanceof CryptoProviderOnlySupportsAsyncError) {
          e.message += "\nUse `await constructEventAsync(...)` instead of `constructEvent(...)`";
        }
        throw e;
      }
      const jsonPayload = payload instanceof Uint8Array ? JSON.parse(new TextDecoder("utf8").decode(payload)) : JSON.parse(payload);
      return jsonPayload;
    },
    async constructEventAsync(payload, header, secret, tolerance, cryptoProvider, receivedAt) {
      await this.signature.verifyHeaderAsync(payload, header, secret, tolerance || Webhook.DEFAULT_TOLERANCE, cryptoProvider, receivedAt);
      const jsonPayload = payload instanceof Uint8Array ? JSON.parse(new TextDecoder("utf8").decode(payload)) : JSON.parse(payload);
      return jsonPayload;
    },
    /**
     * Generates a header to be used for webhook mocking
     *
     * @typedef {object} opts
     * @property {number} timestamp - Timestamp of the header. Defaults to Date.now()
     * @property {string} payload - JSON stringified payload object, containing the 'id' and 'object' parameters
     * @property {string} secret - Stripe webhook secret 'whsec_...'
     * @property {string} scheme - Version of API to hit. Defaults to 'v1'.
     * @property {string} signature - Computed webhook signature
     * @property {CryptoProvider} cryptoProvider - Crypto provider to use for computing the signature if none was provided. Defaults to NodeCryptoProvider.
     */
    generateTestHeaderString: function(opts) {
      const preparedOpts = prepareOptions(opts);
      const signature2 = preparedOpts.signature || preparedOpts.cryptoProvider.computeHMACSignature(preparedOpts.payloadString, preparedOpts.secret);
      return preparedOpts.generateHeaderString(signature2);
    },
    generateTestHeaderStringAsync: async function(opts) {
      const preparedOpts = prepareOptions(opts);
      const signature2 = preparedOpts.signature || await preparedOpts.cryptoProvider.computeHMACSignatureAsync(preparedOpts.payloadString, preparedOpts.secret);
      return preparedOpts.generateHeaderString(signature2);
    }
  };
  const signature = {
    EXPECTED_SCHEME: "v1",
    verifyHeader(encodedPayload, encodedHeader, secret, tolerance, cryptoProvider, receivedAt) {
      const { decodedHeader: header, decodedPayload: payload, details, suspectPayloadType } = parseEventDetails(encodedPayload, encodedHeader, this.EXPECTED_SCHEME);
      const secretContainsWhitespace = /\s/.test(secret);
      cryptoProvider = cryptoProvider || getCryptoProvider();
      const expectedSignature = cryptoProvider.computeHMACSignature(makeHMACContent(payload, details), secret);
      validateComputedSignature(payload, header, details, expectedSignature, tolerance, suspectPayloadType, secretContainsWhitespace, receivedAt);
      return true;
    },
    async verifyHeaderAsync(encodedPayload, encodedHeader, secret, tolerance, cryptoProvider, receivedAt) {
      const { decodedHeader: header, decodedPayload: payload, details, suspectPayloadType } = parseEventDetails(encodedPayload, encodedHeader, this.EXPECTED_SCHEME);
      const secretContainsWhitespace = /\s/.test(secret);
      cryptoProvider = cryptoProvider || getCryptoProvider();
      const expectedSignature = await cryptoProvider.computeHMACSignatureAsync(makeHMACContent(payload, details), secret);
      return validateComputedSignature(payload, header, details, expectedSignature, tolerance, suspectPayloadType, secretContainsWhitespace, receivedAt);
    }
  };
  function makeHMACContent(payload, details) {
    return `${details.timestamp}.${payload}`;
  }
  function parseEventDetails(encodedPayload, encodedHeader, expectedScheme) {
    if (!encodedPayload) {
      throw new StripeSignatureVerificationError(encodedHeader, encodedPayload, {
        message: "No webhook payload was provided."
      });
    }
    const suspectPayloadType = typeof encodedPayload != "string" && !(encodedPayload instanceof Uint8Array);
    const textDecoder = new TextDecoder("utf8");
    const decodedPayload = encodedPayload instanceof Uint8Array ? textDecoder.decode(encodedPayload) : encodedPayload;
    if (Array.isArray(encodedHeader)) {
      throw new Error("Unexpected: An array was passed as a header, which should not be possible for the stripe-signature header.");
    }
    if (encodedHeader == null || encodedHeader == "") {
      throw new StripeSignatureVerificationError(encodedHeader, encodedPayload, {
        message: "No stripe-signature header value was provided."
      });
    }
    const decodedHeader = encodedHeader instanceof Uint8Array ? textDecoder.decode(encodedHeader) : encodedHeader;
    const details = parseHeader(decodedHeader, expectedScheme);
    if (!details || details.timestamp === -1) {
      throw new StripeSignatureVerificationError(decodedHeader, decodedPayload, {
        message: "Unable to extract timestamp and signatures from header"
      });
    }
    if (!details.signatures.length) {
      throw new StripeSignatureVerificationError(decodedHeader, decodedPayload, {
        message: "No signatures found with expected scheme"
      });
    }
    return {
      decodedPayload,
      decodedHeader,
      details,
      suspectPayloadType
    };
  }
  function validateComputedSignature(payload, header, details, expectedSignature, tolerance, suspectPayloadType, secretContainsWhitespace, receivedAt) {
    const signatureFound = !!details.signatures.filter(platformFunctions.secureCompare.bind(platformFunctions, expectedSignature)).length;
    const docsLocation = "\nLearn more about webhook signing and explore webhook integration examples for various frameworks at https://docs.stripe.com/webhooks/signature";
    const whitespaceMessage = secretContainsWhitespace ? "\n\nNote: The provided signing secret contains whitespace. This often indicates an extra newline or space is in the value" : "";
    if (!signatureFound) {
      if (suspectPayloadType) {
        throw new StripeSignatureVerificationError(header, payload, {
          message: "Webhook payload must be provided as a string or a Buffer (https://nodejs.org/api/buffer.html) instance representing the _raw_ request body.Payload was provided as a parsed JavaScript object instead. \nSignature verification is impossible without access to the original signed material. \n" + docsLocation + "\n" + whitespaceMessage
        });
      }
      throw new StripeSignatureVerificationError(header, payload, {
        message: "No signatures found matching the expected signature for payload. Are you passing the raw request body you received from Stripe? \n If a webhook request is being forwarded by a third-party tool, ensure that the exact request body, including JSON formatting and new line style, is preserved.\n" + docsLocation + "\n" + whitespaceMessage
      });
    }
    const timestampAge = Math.floor((typeof receivedAt === "number" ? receivedAt : Date.now()) / 1e3) - details.timestamp;
    if (tolerance > 0 && timestampAge > tolerance) {
      throw new StripeSignatureVerificationError(header, payload, {
        message: "Timestamp outside the tolerance zone"
      });
    }
    return true;
  }
  function parseHeader(header, scheme) {
    if (typeof header !== "string") {
      return null;
    }
    return header.split(",").reduce((accum, item) => {
      const kv = item.split("=");
      if (kv[0] === "t") {
        accum.timestamp = parseInt(kv[1], 10);
      }
      if (kv[0] === scheme) {
        accum.signatures.push(kv[1]);
      }
      return accum;
    }, {
      timestamp: -1,
      signatures: []
    });
  }
  let webhooksCryptoProviderInstance = null;
  function getCryptoProvider() {
    if (!webhooksCryptoProviderInstance) {
      webhooksCryptoProviderInstance = platformFunctions.createDefaultCryptoProvider();
    }
    return webhooksCryptoProviderInstance;
  }
  function prepareOptions(opts) {
    if (!opts) {
      throw new StripeError({
        message: "Options are required"
      });
    }
    const timestamp = Math.floor(opts.timestamp) || Math.floor(Date.now() / 1e3);
    const scheme = opts.scheme || signature.EXPECTED_SCHEME;
    const cryptoProvider = opts.cryptoProvider || getCryptoProvider();
    const payloadString = `${timestamp}.${opts.payload}`;
    const generateHeaderString = (signature2) => {
      return `t=${timestamp},${scheme}=${signature2}`;
    };
    return Object.assign(Object.assign({}, opts), {
      timestamp,
      scheme,
      cryptoProvider,
      payloadString,
      generateHeaderString
    });
  }
  Webhook.signature = signature;
  return Webhook;
}

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/apiVersion.js
var ApiVersion = "2025-02-24.acacia";

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources.js
var resources_exports = {};
__export(resources_exports, {
  Account: () => Accounts2,
  AccountLinks: () => AccountLinks,
  AccountSessions: () => AccountSessions,
  Accounts: () => Accounts2,
  ApplePayDomains: () => ApplePayDomains,
  ApplicationFees: () => ApplicationFees,
  Apps: () => Apps,
  Balance: () => Balance,
  BalanceTransactions: () => BalanceTransactions,
  Billing: () => Billing,
  BillingPortal: () => BillingPortal,
  Charges: () => Charges,
  Checkout: () => Checkout,
  Climate: () => Climate,
  ConfirmationTokens: () => ConfirmationTokens2,
  CountrySpecs: () => CountrySpecs,
  Coupons: () => Coupons,
  CreditNotes: () => CreditNotes,
  CustomerSessions: () => CustomerSessions,
  Customers: () => Customers2,
  Disputes: () => Disputes2,
  Entitlements: () => Entitlements,
  EphemeralKeys: () => EphemeralKeys,
  Events: () => Events2,
  ExchangeRates: () => ExchangeRates,
  FileLinks: () => FileLinks,
  Files: () => Files,
  FinancialConnections: () => FinancialConnections,
  Forwarding: () => Forwarding,
  Identity: () => Identity,
  InvoiceItems: () => InvoiceItems,
  InvoiceRenderingTemplates: () => InvoiceRenderingTemplates,
  Invoices: () => Invoices,
  Issuing: () => Issuing,
  Mandates: () => Mandates,
  OAuth: () => OAuth,
  PaymentIntents: () => PaymentIntents,
  PaymentLinks: () => PaymentLinks,
  PaymentMethodConfigurations: () => PaymentMethodConfigurations,
  PaymentMethodDomains: () => PaymentMethodDomains,
  PaymentMethods: () => PaymentMethods,
  Payouts: () => Payouts,
  Plans: () => Plans,
  Prices: () => Prices,
  Products: () => Products2,
  PromotionCodes: () => PromotionCodes,
  Quotes: () => Quotes,
  Radar: () => Radar,
  Refunds: () => Refunds2,
  Reporting: () => Reporting,
  Reviews: () => Reviews,
  SetupAttempts: () => SetupAttempts,
  SetupIntents: () => SetupIntents,
  ShippingRates: () => ShippingRates,
  Sigma: () => Sigma,
  Sources: () => Sources,
  SubscriptionItems: () => SubscriptionItems,
  SubscriptionSchedules: () => SubscriptionSchedules,
  Subscriptions: () => Subscriptions,
  Tax: () => Tax,
  TaxCodes: () => TaxCodes,
  TaxIds: () => TaxIds,
  TaxRates: () => TaxRates,
  Terminal: () => Terminal,
  TestHelpers: () => TestHelpers,
  Tokens: () => Tokens2,
  Topups: () => Topups,
  Transfers: () => Transfers,
  Treasury: () => Treasury,
  V2: () => V2,
  WebhookEndpoints: () => WebhookEndpoints
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/ResourceNamespace.js
function ResourceNamespace(stripe2, resources) {
  for (const name in resources) {
    if (!Object.prototype.hasOwnProperty.call(resources, name)) {
      continue;
    }
    const camelCaseName = name[0].toLowerCase() + name.substring(1);
    const resource = new resources[name](stripe2);
    this[camelCaseName] = resource;
  }
}
function resourceNamespace(namespace, resources) {
  return function(stripe2) {
    return new ResourceNamespace(stripe2, resources);
  };
}

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/FinancialConnections/Accounts.js
var stripeMethod2 = StripeResource.method;
var Accounts = StripeResource.extend({
  retrieve: stripeMethod2({
    method: "GET",
    fullPath: "/v1/financial_connections/accounts/{account}"
  }),
  list: stripeMethod2({
    method: "GET",
    fullPath: "/v1/financial_connections/accounts",
    methodType: "list"
  }),
  disconnect: stripeMethod2({
    method: "POST",
    fullPath: "/v1/financial_connections/accounts/{account}/disconnect"
  }),
  listOwners: stripeMethod2({
    method: "GET",
    fullPath: "/v1/financial_connections/accounts/{account}/owners",
    methodType: "list"
  }),
  refresh: stripeMethod2({
    method: "POST",
    fullPath: "/v1/financial_connections/accounts/{account}/refresh"
  }),
  subscribe: stripeMethod2({
    method: "POST",
    fullPath: "/v1/financial_connections/accounts/{account}/subscribe"
  }),
  unsubscribe: stripeMethod2({
    method: "POST",
    fullPath: "/v1/financial_connections/accounts/{account}/unsubscribe"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Entitlements/ActiveEntitlements.js
var stripeMethod3 = StripeResource.method;
var ActiveEntitlements = StripeResource.extend({
  retrieve: stripeMethod3({
    method: "GET",
    fullPath: "/v1/entitlements/active_entitlements/{id}"
  }),
  list: stripeMethod3({
    method: "GET",
    fullPath: "/v1/entitlements/active_entitlements",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Billing/Alerts.js
var stripeMethod4 = StripeResource.method;
var Alerts = StripeResource.extend({
  create: stripeMethod4({ method: "POST", fullPath: "/v1/billing/alerts" }),
  retrieve: stripeMethod4({ method: "GET", fullPath: "/v1/billing/alerts/{id}" }),
  list: stripeMethod4({
    method: "GET",
    fullPath: "/v1/billing/alerts",
    methodType: "list"
  }),
  activate: stripeMethod4({
    method: "POST",
    fullPath: "/v1/billing/alerts/{id}/activate"
  }),
  archive: stripeMethod4({
    method: "POST",
    fullPath: "/v1/billing/alerts/{id}/archive"
  }),
  deactivate: stripeMethod4({
    method: "POST",
    fullPath: "/v1/billing/alerts/{id}/deactivate"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/TestHelpers/Issuing/Authorizations.js
var stripeMethod5 = StripeResource.method;
var Authorizations = StripeResource.extend({
  create: stripeMethod5({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/authorizations"
  }),
  capture: stripeMethod5({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/capture"
  }),
  expire: stripeMethod5({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/expire"
  }),
  finalizeAmount: stripeMethod5({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/finalize_amount"
  }),
  increment: stripeMethod5({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/increment"
  }),
  respond: stripeMethod5({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/fraud_challenges/respond"
  }),
  reverse: stripeMethod5({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/authorizations/{authorization}/reverse"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Issuing/Authorizations.js
var stripeMethod6 = StripeResource.method;
var Authorizations2 = StripeResource.extend({
  retrieve: stripeMethod6({
    method: "GET",
    fullPath: "/v1/issuing/authorizations/{authorization}"
  }),
  update: stripeMethod6({
    method: "POST",
    fullPath: "/v1/issuing/authorizations/{authorization}"
  }),
  list: stripeMethod6({
    method: "GET",
    fullPath: "/v1/issuing/authorizations",
    methodType: "list"
  }),
  approve: stripeMethod6({
    method: "POST",
    fullPath: "/v1/issuing/authorizations/{authorization}/approve"
  }),
  decline: stripeMethod6({
    method: "POST",
    fullPath: "/v1/issuing/authorizations/{authorization}/decline"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Tax/Calculations.js
var stripeMethod7 = StripeResource.method;
var Calculations = StripeResource.extend({
  create: stripeMethod7({ method: "POST", fullPath: "/v1/tax/calculations" }),
  retrieve: stripeMethod7({
    method: "GET",
    fullPath: "/v1/tax/calculations/{calculation}"
  }),
  listLineItems: stripeMethod7({
    method: "GET",
    fullPath: "/v1/tax/calculations/{calculation}/line_items",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Issuing/Cardholders.js
var stripeMethod8 = StripeResource.method;
var Cardholders = StripeResource.extend({
  create: stripeMethod8({ method: "POST", fullPath: "/v1/issuing/cardholders" }),
  retrieve: stripeMethod8({
    method: "GET",
    fullPath: "/v1/issuing/cardholders/{cardholder}"
  }),
  update: stripeMethod8({
    method: "POST",
    fullPath: "/v1/issuing/cardholders/{cardholder}"
  }),
  list: stripeMethod8({
    method: "GET",
    fullPath: "/v1/issuing/cardholders",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/TestHelpers/Issuing/Cards.js
var stripeMethod9 = StripeResource.method;
var Cards = StripeResource.extend({
  deliverCard: stripeMethod9({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/deliver"
  }),
  failCard: stripeMethod9({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/fail"
  }),
  returnCard: stripeMethod9({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/return"
  }),
  shipCard: stripeMethod9({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/ship"
  }),
  submitCard: stripeMethod9({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/submit"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Issuing/Cards.js
var stripeMethod10 = StripeResource.method;
var Cards2 = StripeResource.extend({
  create: stripeMethod10({ method: "POST", fullPath: "/v1/issuing/cards" }),
  retrieve: stripeMethod10({ method: "GET", fullPath: "/v1/issuing/cards/{card}" }),
  update: stripeMethod10({ method: "POST", fullPath: "/v1/issuing/cards/{card}" }),
  list: stripeMethod10({
    method: "GET",
    fullPath: "/v1/issuing/cards",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/BillingPortal/Configurations.js
var stripeMethod11 = StripeResource.method;
var Configurations = StripeResource.extend({
  create: stripeMethod11({
    method: "POST",
    fullPath: "/v1/billing_portal/configurations"
  }),
  retrieve: stripeMethod11({
    method: "GET",
    fullPath: "/v1/billing_portal/configurations/{configuration}"
  }),
  update: stripeMethod11({
    method: "POST",
    fullPath: "/v1/billing_portal/configurations/{configuration}"
  }),
  list: stripeMethod11({
    method: "GET",
    fullPath: "/v1/billing_portal/configurations",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Terminal/Configurations.js
var stripeMethod12 = StripeResource.method;
var Configurations2 = StripeResource.extend({
  create: stripeMethod12({
    method: "POST",
    fullPath: "/v1/terminal/configurations"
  }),
  retrieve: stripeMethod12({
    method: "GET",
    fullPath: "/v1/terminal/configurations/{configuration}"
  }),
  update: stripeMethod12({
    method: "POST",
    fullPath: "/v1/terminal/configurations/{configuration}"
  }),
  list: stripeMethod12({
    method: "GET",
    fullPath: "/v1/terminal/configurations",
    methodType: "list"
  }),
  del: stripeMethod12({
    method: "DELETE",
    fullPath: "/v1/terminal/configurations/{configuration}"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/TestHelpers/ConfirmationTokens.js
var stripeMethod13 = StripeResource.method;
var ConfirmationTokens = StripeResource.extend({
  create: stripeMethod13({
    method: "POST",
    fullPath: "/v1/test_helpers/confirmation_tokens"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Terminal/ConnectionTokens.js
var stripeMethod14 = StripeResource.method;
var ConnectionTokens = StripeResource.extend({
  create: stripeMethod14({
    method: "POST",
    fullPath: "/v1/terminal/connection_tokens"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Billing/CreditBalanceSummary.js
var stripeMethod15 = StripeResource.method;
var CreditBalanceSummary = StripeResource.extend({
  retrieve: stripeMethod15({
    method: "GET",
    fullPath: "/v1/billing/credit_balance_summary"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Billing/CreditBalanceTransactions.js
var stripeMethod16 = StripeResource.method;
var CreditBalanceTransactions = StripeResource.extend({
  retrieve: stripeMethod16({
    method: "GET",
    fullPath: "/v1/billing/credit_balance_transactions/{id}"
  }),
  list: stripeMethod16({
    method: "GET",
    fullPath: "/v1/billing/credit_balance_transactions",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Billing/CreditGrants.js
var stripeMethod17 = StripeResource.method;
var CreditGrants = StripeResource.extend({
  create: stripeMethod17({ method: "POST", fullPath: "/v1/billing/credit_grants" }),
  retrieve: stripeMethod17({
    method: "GET",
    fullPath: "/v1/billing/credit_grants/{id}"
  }),
  update: stripeMethod17({
    method: "POST",
    fullPath: "/v1/billing/credit_grants/{id}"
  }),
  list: stripeMethod17({
    method: "GET",
    fullPath: "/v1/billing/credit_grants",
    methodType: "list"
  }),
  expire: stripeMethod17({
    method: "POST",
    fullPath: "/v1/billing/credit_grants/{id}/expire"
  }),
  voidGrant: stripeMethod17({
    method: "POST",
    fullPath: "/v1/billing/credit_grants/{id}/void"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Treasury/CreditReversals.js
var stripeMethod18 = StripeResource.method;
var CreditReversals = StripeResource.extend({
  create: stripeMethod18({
    method: "POST",
    fullPath: "/v1/treasury/credit_reversals"
  }),
  retrieve: stripeMethod18({
    method: "GET",
    fullPath: "/v1/treasury/credit_reversals/{credit_reversal}"
  }),
  list: stripeMethod18({
    method: "GET",
    fullPath: "/v1/treasury/credit_reversals",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/TestHelpers/Customers.js
var stripeMethod19 = StripeResource.method;
var Customers = StripeResource.extend({
  fundCashBalance: stripeMethod19({
    method: "POST",
    fullPath: "/v1/test_helpers/customers/{customer}/fund_cash_balance"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Treasury/DebitReversals.js
var stripeMethod20 = StripeResource.method;
var DebitReversals = StripeResource.extend({
  create: stripeMethod20({
    method: "POST",
    fullPath: "/v1/treasury/debit_reversals"
  }),
  retrieve: stripeMethod20({
    method: "GET",
    fullPath: "/v1/treasury/debit_reversals/{debit_reversal}"
  }),
  list: stripeMethod20({
    method: "GET",
    fullPath: "/v1/treasury/debit_reversals",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Issuing/Disputes.js
var stripeMethod21 = StripeResource.method;
var Disputes = StripeResource.extend({
  create: stripeMethod21({ method: "POST", fullPath: "/v1/issuing/disputes" }),
  retrieve: stripeMethod21({
    method: "GET",
    fullPath: "/v1/issuing/disputes/{dispute}"
  }),
  update: stripeMethod21({
    method: "POST",
    fullPath: "/v1/issuing/disputes/{dispute}"
  }),
  list: stripeMethod21({
    method: "GET",
    fullPath: "/v1/issuing/disputes",
    methodType: "list"
  }),
  submit: stripeMethod21({
    method: "POST",
    fullPath: "/v1/issuing/disputes/{dispute}/submit"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Radar/EarlyFraudWarnings.js
var stripeMethod22 = StripeResource.method;
var EarlyFraudWarnings = StripeResource.extend({
  retrieve: stripeMethod22({
    method: "GET",
    fullPath: "/v1/radar/early_fraud_warnings/{early_fraud_warning}"
  }),
  list: stripeMethod22({
    method: "GET",
    fullPath: "/v1/radar/early_fraud_warnings",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/V2/Core/EventDestinations.js
var stripeMethod23 = StripeResource.method;
var EventDestinations = StripeResource.extend({
  create: stripeMethod23({
    method: "POST",
    fullPath: "/v2/core/event_destinations"
  }),
  retrieve: stripeMethod23({
    method: "GET",
    fullPath: "/v2/core/event_destinations/{id}"
  }),
  update: stripeMethod23({
    method: "POST",
    fullPath: "/v2/core/event_destinations/{id}"
  }),
  list: stripeMethod23({
    method: "GET",
    fullPath: "/v2/core/event_destinations",
    methodType: "list"
  }),
  del: stripeMethod23({
    method: "DELETE",
    fullPath: "/v2/core/event_destinations/{id}"
  }),
  disable: stripeMethod23({
    method: "POST",
    fullPath: "/v2/core/event_destinations/{id}/disable"
  }),
  enable: stripeMethod23({
    method: "POST",
    fullPath: "/v2/core/event_destinations/{id}/enable"
  }),
  ping: stripeMethod23({
    method: "POST",
    fullPath: "/v2/core/event_destinations/{id}/ping"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/V2/Core/Events.js
var stripeMethod24 = StripeResource.method;
var Events = StripeResource.extend({
  retrieve(...args) {
    const transformResponseData = (response) => {
      return this.addFetchRelatedObjectIfNeeded(response);
    };
    return stripeMethod24({
      method: "GET",
      fullPath: "/v2/core/events/{id}",
      transformResponseData
    }).apply(this, args);
  },
  list(...args) {
    const transformResponseData = (response) => {
      return Object.assign(Object.assign({}, response), { data: response.data.map(this.addFetchRelatedObjectIfNeeded.bind(this)) });
    };
    return stripeMethod24({
      method: "GET",
      fullPath: "/v2/core/events",
      methodType: "list",
      transformResponseData
    }).apply(this, args);
  },
  /**
   * @private
   *
   * For internal use in stripe-node.
   *
   * @param pulledEvent The retrieved event object
   * @returns The retrieved event object with a fetchRelatedObject method,
   * if pulledEvent.related_object is valid (non-null and has a url)
   */
  addFetchRelatedObjectIfNeeded(pulledEvent) {
    if (!pulledEvent.related_object || !pulledEvent.related_object.url) {
      return pulledEvent;
    }
    return Object.assign(Object.assign({}, pulledEvent), { fetchRelatedObject: () => (
      // call stripeMethod with 'this' resource to fetch
      // the related object. 'this' is needed to construct
      // and send the request, but the method spec controls
      // the url endpoint and method, so it doesn't matter
      // that 'this' is an Events resource object here
      stripeMethod24({
        method: "GET",
        fullPath: pulledEvent.related_object.url
      }).apply(this, [
        {
          stripeAccount: pulledEvent.context
        }
      ])
    ) });
  }
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Entitlements/Features.js
var stripeMethod25 = StripeResource.method;
var Features = StripeResource.extend({
  create: stripeMethod25({ method: "POST", fullPath: "/v1/entitlements/features" }),
  retrieve: stripeMethod25({
    method: "GET",
    fullPath: "/v1/entitlements/features/{id}"
  }),
  update: stripeMethod25({
    method: "POST",
    fullPath: "/v1/entitlements/features/{id}"
  }),
  list: stripeMethod25({
    method: "GET",
    fullPath: "/v1/entitlements/features",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Treasury/FinancialAccounts.js
var stripeMethod26 = StripeResource.method;
var FinancialAccounts = StripeResource.extend({
  create: stripeMethod26({
    method: "POST",
    fullPath: "/v1/treasury/financial_accounts"
  }),
  retrieve: stripeMethod26({
    method: "GET",
    fullPath: "/v1/treasury/financial_accounts/{financial_account}"
  }),
  update: stripeMethod26({
    method: "POST",
    fullPath: "/v1/treasury/financial_accounts/{financial_account}"
  }),
  list: stripeMethod26({
    method: "GET",
    fullPath: "/v1/treasury/financial_accounts",
    methodType: "list"
  }),
  close: stripeMethod26({
    method: "POST",
    fullPath: "/v1/treasury/financial_accounts/{financial_account}/close"
  }),
  retrieveFeatures: stripeMethod26({
    method: "GET",
    fullPath: "/v1/treasury/financial_accounts/{financial_account}/features"
  }),
  updateFeatures: stripeMethod26({
    method: "POST",
    fullPath: "/v1/treasury/financial_accounts/{financial_account}/features"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/TestHelpers/Treasury/InboundTransfers.js
var stripeMethod27 = StripeResource.method;
var InboundTransfers = StripeResource.extend({
  fail: stripeMethod27({
    method: "POST",
    fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/fail"
  }),
  returnInboundTransfer: stripeMethod27({
    method: "POST",
    fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/return"
  }),
  succeed: stripeMethod27({
    method: "POST",
    fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/succeed"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Treasury/InboundTransfers.js
var stripeMethod28 = StripeResource.method;
var InboundTransfers2 = StripeResource.extend({
  create: stripeMethod28({
    method: "POST",
    fullPath: "/v1/treasury/inbound_transfers"
  }),
  retrieve: stripeMethod28({
    method: "GET",
    fullPath: "/v1/treasury/inbound_transfers/{id}"
  }),
  list: stripeMethod28({
    method: "GET",
    fullPath: "/v1/treasury/inbound_transfers",
    methodType: "list"
  }),
  cancel: stripeMethod28({
    method: "POST",
    fullPath: "/v1/treasury/inbound_transfers/{inbound_transfer}/cancel"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Terminal/Locations.js
var stripeMethod29 = StripeResource.method;
var Locations = StripeResource.extend({
  create: stripeMethod29({ method: "POST", fullPath: "/v1/terminal/locations" }),
  retrieve: stripeMethod29({
    method: "GET",
    fullPath: "/v1/terminal/locations/{location}"
  }),
  update: stripeMethod29({
    method: "POST",
    fullPath: "/v1/terminal/locations/{location}"
  }),
  list: stripeMethod29({
    method: "GET",
    fullPath: "/v1/terminal/locations",
    methodType: "list"
  }),
  del: stripeMethod29({
    method: "DELETE",
    fullPath: "/v1/terminal/locations/{location}"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Billing/MeterEventAdjustments.js
var stripeMethod30 = StripeResource.method;
var MeterEventAdjustments = StripeResource.extend({
  create: stripeMethod30({
    method: "POST",
    fullPath: "/v1/billing/meter_event_adjustments"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/V2/Billing/MeterEventAdjustments.js
var stripeMethod31 = StripeResource.method;
var MeterEventAdjustments2 = StripeResource.extend({
  create: stripeMethod31({
    method: "POST",
    fullPath: "/v2/billing/meter_event_adjustments"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/V2/Billing/MeterEventSession.js
var stripeMethod32 = StripeResource.method;
var MeterEventSession = StripeResource.extend({
  create: stripeMethod32({
    method: "POST",
    fullPath: "/v2/billing/meter_event_session"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/V2/Billing/MeterEventStream.js
var stripeMethod33 = StripeResource.method;
var MeterEventStream = StripeResource.extend({
  create: stripeMethod33({
    method: "POST",
    fullPath: "/v2/billing/meter_event_stream",
    host: "meter-events.stripe.com"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Billing/MeterEvents.js
var stripeMethod34 = StripeResource.method;
var MeterEvents = StripeResource.extend({
  create: stripeMethod34({ method: "POST", fullPath: "/v1/billing/meter_events" })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/V2/Billing/MeterEvents.js
var stripeMethod35 = StripeResource.method;
var MeterEvents2 = StripeResource.extend({
  create: stripeMethod35({ method: "POST", fullPath: "/v2/billing/meter_events" })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Billing/Meters.js
var stripeMethod36 = StripeResource.method;
var Meters = StripeResource.extend({
  create: stripeMethod36({ method: "POST", fullPath: "/v1/billing/meters" }),
  retrieve: stripeMethod36({ method: "GET", fullPath: "/v1/billing/meters/{id}" }),
  update: stripeMethod36({ method: "POST", fullPath: "/v1/billing/meters/{id}" }),
  list: stripeMethod36({
    method: "GET",
    fullPath: "/v1/billing/meters",
    methodType: "list"
  }),
  deactivate: stripeMethod36({
    method: "POST",
    fullPath: "/v1/billing/meters/{id}/deactivate"
  }),
  listEventSummaries: stripeMethod36({
    method: "GET",
    fullPath: "/v1/billing/meters/{id}/event_summaries",
    methodType: "list"
  }),
  reactivate: stripeMethod36({
    method: "POST",
    fullPath: "/v1/billing/meters/{id}/reactivate"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Climate/Orders.js
var stripeMethod37 = StripeResource.method;
var Orders = StripeResource.extend({
  create: stripeMethod37({ method: "POST", fullPath: "/v1/climate/orders" }),
  retrieve: stripeMethod37({
    method: "GET",
    fullPath: "/v1/climate/orders/{order}"
  }),
  update: stripeMethod37({
    method: "POST",
    fullPath: "/v1/climate/orders/{order}"
  }),
  list: stripeMethod37({
    method: "GET",
    fullPath: "/v1/climate/orders",
    methodType: "list"
  }),
  cancel: stripeMethod37({
    method: "POST",
    fullPath: "/v1/climate/orders/{order}/cancel"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/TestHelpers/Treasury/OutboundPayments.js
var stripeMethod38 = StripeResource.method;
var OutboundPayments = StripeResource.extend({
  update: stripeMethod38({
    method: "POST",
    fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}"
  }),
  fail: stripeMethod38({
    method: "POST",
    fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}/fail"
  }),
  post: stripeMethod38({
    method: "POST",
    fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}/post"
  }),
  returnOutboundPayment: stripeMethod38({
    method: "POST",
    fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}/return"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Treasury/OutboundPayments.js
var stripeMethod39 = StripeResource.method;
var OutboundPayments2 = StripeResource.extend({
  create: stripeMethod39({
    method: "POST",
    fullPath: "/v1/treasury/outbound_payments"
  }),
  retrieve: stripeMethod39({
    method: "GET",
    fullPath: "/v1/treasury/outbound_payments/{id}"
  }),
  list: stripeMethod39({
    method: "GET",
    fullPath: "/v1/treasury/outbound_payments",
    methodType: "list"
  }),
  cancel: stripeMethod39({
    method: "POST",
    fullPath: "/v1/treasury/outbound_payments/{id}/cancel"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/TestHelpers/Treasury/OutboundTransfers.js
var stripeMethod40 = StripeResource.method;
var OutboundTransfers = StripeResource.extend({
  update: stripeMethod40({
    method: "POST",
    fullPath: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}"
  }),
  fail: stripeMethod40({
    method: "POST",
    fullPath: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail"
  }),
  post: stripeMethod40({
    method: "POST",
    fullPath: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post"
  }),
  returnOutboundTransfer: stripeMethod40({
    method: "POST",
    fullPath: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Treasury/OutboundTransfers.js
var stripeMethod41 = StripeResource.method;
var OutboundTransfers2 = StripeResource.extend({
  create: stripeMethod41({
    method: "POST",
    fullPath: "/v1/treasury/outbound_transfers"
  }),
  retrieve: stripeMethod41({
    method: "GET",
    fullPath: "/v1/treasury/outbound_transfers/{outbound_transfer}"
  }),
  list: stripeMethod41({
    method: "GET",
    fullPath: "/v1/treasury/outbound_transfers",
    methodType: "list"
  }),
  cancel: stripeMethod41({
    method: "POST",
    fullPath: "/v1/treasury/outbound_transfers/{outbound_transfer}/cancel"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/TestHelpers/Issuing/PersonalizationDesigns.js
var stripeMethod42 = StripeResource.method;
var PersonalizationDesigns = StripeResource.extend({
  activate: stripeMethod42({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/personalization_designs/{personalization_design}/activate"
  }),
  deactivate: stripeMethod42({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/personalization_designs/{personalization_design}/deactivate"
  }),
  reject: stripeMethod42({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/personalization_designs/{personalization_design}/reject"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Issuing/PersonalizationDesigns.js
var stripeMethod43 = StripeResource.method;
var PersonalizationDesigns2 = StripeResource.extend({
  create: stripeMethod43({
    method: "POST",
    fullPath: "/v1/issuing/personalization_designs"
  }),
  retrieve: stripeMethod43({
    method: "GET",
    fullPath: "/v1/issuing/personalization_designs/{personalization_design}"
  }),
  update: stripeMethod43({
    method: "POST",
    fullPath: "/v1/issuing/personalization_designs/{personalization_design}"
  }),
  list: stripeMethod43({
    method: "GET",
    fullPath: "/v1/issuing/personalization_designs",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Issuing/PhysicalBundles.js
var stripeMethod44 = StripeResource.method;
var PhysicalBundles = StripeResource.extend({
  retrieve: stripeMethod44({
    method: "GET",
    fullPath: "/v1/issuing/physical_bundles/{physical_bundle}"
  }),
  list: stripeMethod44({
    method: "GET",
    fullPath: "/v1/issuing/physical_bundles",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Climate/Products.js
var stripeMethod45 = StripeResource.method;
var Products = StripeResource.extend({
  retrieve: stripeMethod45({
    method: "GET",
    fullPath: "/v1/climate/products/{product}"
  }),
  list: stripeMethod45({
    method: "GET",
    fullPath: "/v1/climate/products",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/TestHelpers/Terminal/Readers.js
var stripeMethod46 = StripeResource.method;
var Readers = StripeResource.extend({
  presentPaymentMethod: stripeMethod46({
    method: "POST",
    fullPath: "/v1/test_helpers/terminal/readers/{reader}/present_payment_method"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Terminal/Readers.js
var stripeMethod47 = StripeResource.method;
var Readers2 = StripeResource.extend({
  create: stripeMethod47({ method: "POST", fullPath: "/v1/terminal/readers" }),
  retrieve: stripeMethod47({
    method: "GET",
    fullPath: "/v1/terminal/readers/{reader}"
  }),
  update: stripeMethod47({
    method: "POST",
    fullPath: "/v1/terminal/readers/{reader}"
  }),
  list: stripeMethod47({
    method: "GET",
    fullPath: "/v1/terminal/readers",
    methodType: "list"
  }),
  del: stripeMethod47({
    method: "DELETE",
    fullPath: "/v1/terminal/readers/{reader}"
  }),
  cancelAction: stripeMethod47({
    method: "POST",
    fullPath: "/v1/terminal/readers/{reader}/cancel_action"
  }),
  processPaymentIntent: stripeMethod47({
    method: "POST",
    fullPath: "/v1/terminal/readers/{reader}/process_payment_intent"
  }),
  processSetupIntent: stripeMethod47({
    method: "POST",
    fullPath: "/v1/terminal/readers/{reader}/process_setup_intent"
  }),
  refundPayment: stripeMethod47({
    method: "POST",
    fullPath: "/v1/terminal/readers/{reader}/refund_payment"
  }),
  setReaderDisplay: stripeMethod47({
    method: "POST",
    fullPath: "/v1/terminal/readers/{reader}/set_reader_display"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/TestHelpers/Treasury/ReceivedCredits.js
var stripeMethod48 = StripeResource.method;
var ReceivedCredits = StripeResource.extend({
  create: stripeMethod48({
    method: "POST",
    fullPath: "/v1/test_helpers/treasury/received_credits"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Treasury/ReceivedCredits.js
var stripeMethod49 = StripeResource.method;
var ReceivedCredits2 = StripeResource.extend({
  retrieve: stripeMethod49({
    method: "GET",
    fullPath: "/v1/treasury/received_credits/{id}"
  }),
  list: stripeMethod49({
    method: "GET",
    fullPath: "/v1/treasury/received_credits",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/TestHelpers/Treasury/ReceivedDebits.js
var stripeMethod50 = StripeResource.method;
var ReceivedDebits = StripeResource.extend({
  create: stripeMethod50({
    method: "POST",
    fullPath: "/v1/test_helpers/treasury/received_debits"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Treasury/ReceivedDebits.js
var stripeMethod51 = StripeResource.method;
var ReceivedDebits2 = StripeResource.extend({
  retrieve: stripeMethod51({
    method: "GET",
    fullPath: "/v1/treasury/received_debits/{id}"
  }),
  list: stripeMethod51({
    method: "GET",
    fullPath: "/v1/treasury/received_debits",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/TestHelpers/Refunds.js
var stripeMethod52 = StripeResource.method;
var Refunds = StripeResource.extend({
  expire: stripeMethod52({
    method: "POST",
    fullPath: "/v1/test_helpers/refunds/{refund}/expire"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Tax/Registrations.js
var stripeMethod53 = StripeResource.method;
var Registrations = StripeResource.extend({
  create: stripeMethod53({ method: "POST", fullPath: "/v1/tax/registrations" }),
  retrieve: stripeMethod53({
    method: "GET",
    fullPath: "/v1/tax/registrations/{id}"
  }),
  update: stripeMethod53({
    method: "POST",
    fullPath: "/v1/tax/registrations/{id}"
  }),
  list: stripeMethod53({
    method: "GET",
    fullPath: "/v1/tax/registrations",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Reporting/ReportRuns.js
var stripeMethod54 = StripeResource.method;
var ReportRuns = StripeResource.extend({
  create: stripeMethod54({ method: "POST", fullPath: "/v1/reporting/report_runs" }),
  retrieve: stripeMethod54({
    method: "GET",
    fullPath: "/v1/reporting/report_runs/{report_run}"
  }),
  list: stripeMethod54({
    method: "GET",
    fullPath: "/v1/reporting/report_runs",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Reporting/ReportTypes.js
var stripeMethod55 = StripeResource.method;
var ReportTypes = StripeResource.extend({
  retrieve: stripeMethod55({
    method: "GET",
    fullPath: "/v1/reporting/report_types/{report_type}"
  }),
  list: stripeMethod55({
    method: "GET",
    fullPath: "/v1/reporting/report_types",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Forwarding/Requests.js
var stripeMethod56 = StripeResource.method;
var Requests = StripeResource.extend({
  create: stripeMethod56({ method: "POST", fullPath: "/v1/forwarding/requests" }),
  retrieve: stripeMethod56({
    method: "GET",
    fullPath: "/v1/forwarding/requests/{id}"
  }),
  list: stripeMethod56({
    method: "GET",
    fullPath: "/v1/forwarding/requests",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Sigma/ScheduledQueryRuns.js
var stripeMethod57 = StripeResource.method;
var ScheduledQueryRuns = StripeResource.extend({
  retrieve: stripeMethod57({
    method: "GET",
    fullPath: "/v1/sigma/scheduled_query_runs/{scheduled_query_run}"
  }),
  list: stripeMethod57({
    method: "GET",
    fullPath: "/v1/sigma/scheduled_query_runs",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Apps/Secrets.js
var stripeMethod58 = StripeResource.method;
var Secrets = StripeResource.extend({
  create: stripeMethod58({ method: "POST", fullPath: "/v1/apps/secrets" }),
  list: stripeMethod58({
    method: "GET",
    fullPath: "/v1/apps/secrets",
    methodType: "list"
  }),
  deleteWhere: stripeMethod58({
    method: "POST",
    fullPath: "/v1/apps/secrets/delete"
  }),
  find: stripeMethod58({ method: "GET", fullPath: "/v1/apps/secrets/find" })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/BillingPortal/Sessions.js
var stripeMethod59 = StripeResource.method;
var Sessions = StripeResource.extend({
  create: stripeMethod59({
    method: "POST",
    fullPath: "/v1/billing_portal/sessions"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Checkout/Sessions.js
var stripeMethod60 = StripeResource.method;
var Sessions2 = StripeResource.extend({
  create: stripeMethod60({ method: "POST", fullPath: "/v1/checkout/sessions" }),
  retrieve: stripeMethod60({
    method: "GET",
    fullPath: "/v1/checkout/sessions/{session}"
  }),
  update: stripeMethod60({
    method: "POST",
    fullPath: "/v1/checkout/sessions/{session}"
  }),
  list: stripeMethod60({
    method: "GET",
    fullPath: "/v1/checkout/sessions",
    methodType: "list"
  }),
  expire: stripeMethod60({
    method: "POST",
    fullPath: "/v1/checkout/sessions/{session}/expire"
  }),
  listLineItems: stripeMethod60({
    method: "GET",
    fullPath: "/v1/checkout/sessions/{session}/line_items",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/FinancialConnections/Sessions.js
var stripeMethod61 = StripeResource.method;
var Sessions3 = StripeResource.extend({
  create: stripeMethod61({
    method: "POST",
    fullPath: "/v1/financial_connections/sessions"
  }),
  retrieve: stripeMethod61({
    method: "GET",
    fullPath: "/v1/financial_connections/sessions/{session}"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Tax/Settings.js
var stripeMethod62 = StripeResource.method;
var Settings = StripeResource.extend({
  retrieve: stripeMethod62({ method: "GET", fullPath: "/v1/tax/settings" }),
  update: stripeMethod62({ method: "POST", fullPath: "/v1/tax/settings" })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Climate/Suppliers.js
var stripeMethod63 = StripeResource.method;
var Suppliers = StripeResource.extend({
  retrieve: stripeMethod63({
    method: "GET",
    fullPath: "/v1/climate/suppliers/{supplier}"
  }),
  list: stripeMethod63({
    method: "GET",
    fullPath: "/v1/climate/suppliers",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/TestHelpers/TestClocks.js
var stripeMethod64 = StripeResource.method;
var TestClocks = StripeResource.extend({
  create: stripeMethod64({
    method: "POST",
    fullPath: "/v1/test_helpers/test_clocks"
  }),
  retrieve: stripeMethod64({
    method: "GET",
    fullPath: "/v1/test_helpers/test_clocks/{test_clock}"
  }),
  list: stripeMethod64({
    method: "GET",
    fullPath: "/v1/test_helpers/test_clocks",
    methodType: "list"
  }),
  del: stripeMethod64({
    method: "DELETE",
    fullPath: "/v1/test_helpers/test_clocks/{test_clock}"
  }),
  advance: stripeMethod64({
    method: "POST",
    fullPath: "/v1/test_helpers/test_clocks/{test_clock}/advance"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Issuing/Tokens.js
var stripeMethod65 = StripeResource.method;
var Tokens = StripeResource.extend({
  retrieve: stripeMethod65({
    method: "GET",
    fullPath: "/v1/issuing/tokens/{token}"
  }),
  update: stripeMethod65({
    method: "POST",
    fullPath: "/v1/issuing/tokens/{token}"
  }),
  list: stripeMethod65({
    method: "GET",
    fullPath: "/v1/issuing/tokens",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Treasury/TransactionEntries.js
var stripeMethod66 = StripeResource.method;
var TransactionEntries = StripeResource.extend({
  retrieve: stripeMethod66({
    method: "GET",
    fullPath: "/v1/treasury/transaction_entries/{id}"
  }),
  list: stripeMethod66({
    method: "GET",
    fullPath: "/v1/treasury/transaction_entries",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/TestHelpers/Issuing/Transactions.js
var stripeMethod67 = StripeResource.method;
var Transactions = StripeResource.extend({
  createForceCapture: stripeMethod67({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/transactions/create_force_capture"
  }),
  createUnlinkedRefund: stripeMethod67({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/transactions/create_unlinked_refund"
  }),
  refund: stripeMethod67({
    method: "POST",
    fullPath: "/v1/test_helpers/issuing/transactions/{transaction}/refund"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/FinancialConnections/Transactions.js
var stripeMethod68 = StripeResource.method;
var Transactions2 = StripeResource.extend({
  retrieve: stripeMethod68({
    method: "GET",
    fullPath: "/v1/financial_connections/transactions/{transaction}"
  }),
  list: stripeMethod68({
    method: "GET",
    fullPath: "/v1/financial_connections/transactions",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Issuing/Transactions.js
var stripeMethod69 = StripeResource.method;
var Transactions3 = StripeResource.extend({
  retrieve: stripeMethod69({
    method: "GET",
    fullPath: "/v1/issuing/transactions/{transaction}"
  }),
  update: stripeMethod69({
    method: "POST",
    fullPath: "/v1/issuing/transactions/{transaction}"
  }),
  list: stripeMethod69({
    method: "GET",
    fullPath: "/v1/issuing/transactions",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Tax/Transactions.js
var stripeMethod70 = StripeResource.method;
var Transactions4 = StripeResource.extend({
  retrieve: stripeMethod70({
    method: "GET",
    fullPath: "/v1/tax/transactions/{transaction}"
  }),
  createFromCalculation: stripeMethod70({
    method: "POST",
    fullPath: "/v1/tax/transactions/create_from_calculation"
  }),
  createReversal: stripeMethod70({
    method: "POST",
    fullPath: "/v1/tax/transactions/create_reversal"
  }),
  listLineItems: stripeMethod70({
    method: "GET",
    fullPath: "/v1/tax/transactions/{transaction}/line_items",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Treasury/Transactions.js
var stripeMethod71 = StripeResource.method;
var Transactions5 = StripeResource.extend({
  retrieve: stripeMethod71({
    method: "GET",
    fullPath: "/v1/treasury/transactions/{id}"
  }),
  list: stripeMethod71({
    method: "GET",
    fullPath: "/v1/treasury/transactions",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Radar/ValueListItems.js
var stripeMethod72 = StripeResource.method;
var ValueListItems = StripeResource.extend({
  create: stripeMethod72({
    method: "POST",
    fullPath: "/v1/radar/value_list_items"
  }),
  retrieve: stripeMethod72({
    method: "GET",
    fullPath: "/v1/radar/value_list_items/{item}"
  }),
  list: stripeMethod72({
    method: "GET",
    fullPath: "/v1/radar/value_list_items",
    methodType: "list"
  }),
  del: stripeMethod72({
    method: "DELETE",
    fullPath: "/v1/radar/value_list_items/{item}"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Radar/ValueLists.js
var stripeMethod73 = StripeResource.method;
var ValueLists = StripeResource.extend({
  create: stripeMethod73({ method: "POST", fullPath: "/v1/radar/value_lists" }),
  retrieve: stripeMethod73({
    method: "GET",
    fullPath: "/v1/radar/value_lists/{value_list}"
  }),
  update: stripeMethod73({
    method: "POST",
    fullPath: "/v1/radar/value_lists/{value_list}"
  }),
  list: stripeMethod73({
    method: "GET",
    fullPath: "/v1/radar/value_lists",
    methodType: "list"
  }),
  del: stripeMethod73({
    method: "DELETE",
    fullPath: "/v1/radar/value_lists/{value_list}"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Identity/VerificationReports.js
var stripeMethod74 = StripeResource.method;
var VerificationReports = StripeResource.extend({
  retrieve: stripeMethod74({
    method: "GET",
    fullPath: "/v1/identity/verification_reports/{report}"
  }),
  list: stripeMethod74({
    method: "GET",
    fullPath: "/v1/identity/verification_reports",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Identity/VerificationSessions.js
var stripeMethod75 = StripeResource.method;
var VerificationSessions = StripeResource.extend({
  create: stripeMethod75({
    method: "POST",
    fullPath: "/v1/identity/verification_sessions"
  }),
  retrieve: stripeMethod75({
    method: "GET",
    fullPath: "/v1/identity/verification_sessions/{session}"
  }),
  update: stripeMethod75({
    method: "POST",
    fullPath: "/v1/identity/verification_sessions/{session}"
  }),
  list: stripeMethod75({
    method: "GET",
    fullPath: "/v1/identity/verification_sessions",
    methodType: "list"
  }),
  cancel: stripeMethod75({
    method: "POST",
    fullPath: "/v1/identity/verification_sessions/{session}/cancel"
  }),
  redact: stripeMethod75({
    method: "POST",
    fullPath: "/v1/identity/verification_sessions/{session}/redact"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Accounts.js
var stripeMethod76 = StripeResource.method;
var Accounts2 = StripeResource.extend({
  create: stripeMethod76({ method: "POST", fullPath: "/v1/accounts" }),
  retrieve(id, ...args) {
    if (typeof id === "string") {
      return stripeMethod76({
        method: "GET",
        fullPath: "/v1/accounts/{id}"
      }).apply(this, [id, ...args]);
    } else {
      if (id === null || id === void 0) {
        [].shift.apply([id, ...args]);
      }
      return stripeMethod76({
        method: "GET",
        fullPath: "/v1/account"
      }).apply(this, [id, ...args]);
    }
  },
  update: stripeMethod76({ method: "POST", fullPath: "/v1/accounts/{account}" }),
  list: stripeMethod76({
    method: "GET",
    fullPath: "/v1/accounts",
    methodType: "list"
  }),
  del: stripeMethod76({ method: "DELETE", fullPath: "/v1/accounts/{account}" }),
  createExternalAccount: stripeMethod76({
    method: "POST",
    fullPath: "/v1/accounts/{account}/external_accounts"
  }),
  createLoginLink: stripeMethod76({
    method: "POST",
    fullPath: "/v1/accounts/{account}/login_links"
  }),
  createPerson: stripeMethod76({
    method: "POST",
    fullPath: "/v1/accounts/{account}/persons"
  }),
  deleteExternalAccount: stripeMethod76({
    method: "DELETE",
    fullPath: "/v1/accounts/{account}/external_accounts/{id}"
  }),
  deletePerson: stripeMethod76({
    method: "DELETE",
    fullPath: "/v1/accounts/{account}/persons/{person}"
  }),
  listCapabilities: stripeMethod76({
    method: "GET",
    fullPath: "/v1/accounts/{account}/capabilities",
    methodType: "list"
  }),
  listExternalAccounts: stripeMethod76({
    method: "GET",
    fullPath: "/v1/accounts/{account}/external_accounts",
    methodType: "list"
  }),
  listPersons: stripeMethod76({
    method: "GET",
    fullPath: "/v1/accounts/{account}/persons",
    methodType: "list"
  }),
  reject: stripeMethod76({
    method: "POST",
    fullPath: "/v1/accounts/{account}/reject"
  }),
  retrieveCurrent: stripeMethod76({ method: "GET", fullPath: "/v1/account" }),
  retrieveCapability: stripeMethod76({
    method: "GET",
    fullPath: "/v1/accounts/{account}/capabilities/{capability}"
  }),
  retrieveExternalAccount: stripeMethod76({
    method: "GET",
    fullPath: "/v1/accounts/{account}/external_accounts/{id}"
  }),
  retrievePerson: stripeMethod76({
    method: "GET",
    fullPath: "/v1/accounts/{account}/persons/{person}"
  }),
  updateCapability: stripeMethod76({
    method: "POST",
    fullPath: "/v1/accounts/{account}/capabilities/{capability}"
  }),
  updateExternalAccount: stripeMethod76({
    method: "POST",
    fullPath: "/v1/accounts/{account}/external_accounts/{id}"
  }),
  updatePerson: stripeMethod76({
    method: "POST",
    fullPath: "/v1/accounts/{account}/persons/{person}"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/AccountLinks.js
var stripeMethod77 = StripeResource.method;
var AccountLinks = StripeResource.extend({
  create: stripeMethod77({ method: "POST", fullPath: "/v1/account_links" })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/AccountSessions.js
var stripeMethod78 = StripeResource.method;
var AccountSessions = StripeResource.extend({
  create: stripeMethod78({ method: "POST", fullPath: "/v1/account_sessions" })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/ApplePayDomains.js
var stripeMethod79 = StripeResource.method;
var ApplePayDomains = StripeResource.extend({
  create: stripeMethod79({ method: "POST", fullPath: "/v1/apple_pay/domains" }),
  retrieve: stripeMethod79({
    method: "GET",
    fullPath: "/v1/apple_pay/domains/{domain}"
  }),
  list: stripeMethod79({
    method: "GET",
    fullPath: "/v1/apple_pay/domains",
    methodType: "list"
  }),
  del: stripeMethod79({
    method: "DELETE",
    fullPath: "/v1/apple_pay/domains/{domain}"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/ApplicationFees.js
var stripeMethod80 = StripeResource.method;
var ApplicationFees = StripeResource.extend({
  retrieve: stripeMethod80({
    method: "GET",
    fullPath: "/v1/application_fees/{id}"
  }),
  list: stripeMethod80({
    method: "GET",
    fullPath: "/v1/application_fees",
    methodType: "list"
  }),
  createRefund: stripeMethod80({
    method: "POST",
    fullPath: "/v1/application_fees/{id}/refunds"
  }),
  listRefunds: stripeMethod80({
    method: "GET",
    fullPath: "/v1/application_fees/{id}/refunds",
    methodType: "list"
  }),
  retrieveRefund: stripeMethod80({
    method: "GET",
    fullPath: "/v1/application_fees/{fee}/refunds/{id}"
  }),
  updateRefund: stripeMethod80({
    method: "POST",
    fullPath: "/v1/application_fees/{fee}/refunds/{id}"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Balance.js
var stripeMethod81 = StripeResource.method;
var Balance = StripeResource.extend({
  retrieve: stripeMethod81({ method: "GET", fullPath: "/v1/balance" })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/BalanceTransactions.js
var stripeMethod82 = StripeResource.method;
var BalanceTransactions = StripeResource.extend({
  retrieve: stripeMethod82({
    method: "GET",
    fullPath: "/v1/balance_transactions/{id}"
  }),
  list: stripeMethod82({
    method: "GET",
    fullPath: "/v1/balance_transactions",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Charges.js
var stripeMethod83 = StripeResource.method;
var Charges = StripeResource.extend({
  create: stripeMethod83({ method: "POST", fullPath: "/v1/charges" }),
  retrieve: stripeMethod83({ method: "GET", fullPath: "/v1/charges/{charge}" }),
  update: stripeMethod83({ method: "POST", fullPath: "/v1/charges/{charge}" }),
  list: stripeMethod83({
    method: "GET",
    fullPath: "/v1/charges",
    methodType: "list"
  }),
  capture: stripeMethod83({
    method: "POST",
    fullPath: "/v1/charges/{charge}/capture"
  }),
  search: stripeMethod83({
    method: "GET",
    fullPath: "/v1/charges/search",
    methodType: "search"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/ConfirmationTokens.js
var stripeMethod84 = StripeResource.method;
var ConfirmationTokens2 = StripeResource.extend({
  retrieve: stripeMethod84({
    method: "GET",
    fullPath: "/v1/confirmation_tokens/{confirmation_token}"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/CountrySpecs.js
var stripeMethod85 = StripeResource.method;
var CountrySpecs = StripeResource.extend({
  retrieve: stripeMethod85({
    method: "GET",
    fullPath: "/v1/country_specs/{country}"
  }),
  list: stripeMethod85({
    method: "GET",
    fullPath: "/v1/country_specs",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Coupons.js
var stripeMethod86 = StripeResource.method;
var Coupons = StripeResource.extend({
  create: stripeMethod86({ method: "POST", fullPath: "/v1/coupons" }),
  retrieve: stripeMethod86({ method: "GET", fullPath: "/v1/coupons/{coupon}" }),
  update: stripeMethod86({ method: "POST", fullPath: "/v1/coupons/{coupon}" }),
  list: stripeMethod86({
    method: "GET",
    fullPath: "/v1/coupons",
    methodType: "list"
  }),
  del: stripeMethod86({ method: "DELETE", fullPath: "/v1/coupons/{coupon}" })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/CreditNotes.js
var stripeMethod87 = StripeResource.method;
var CreditNotes = StripeResource.extend({
  create: stripeMethod87({ method: "POST", fullPath: "/v1/credit_notes" }),
  retrieve: stripeMethod87({ method: "GET", fullPath: "/v1/credit_notes/{id}" }),
  update: stripeMethod87({ method: "POST", fullPath: "/v1/credit_notes/{id}" }),
  list: stripeMethod87({
    method: "GET",
    fullPath: "/v1/credit_notes",
    methodType: "list"
  }),
  listLineItems: stripeMethod87({
    method: "GET",
    fullPath: "/v1/credit_notes/{credit_note}/lines",
    methodType: "list"
  }),
  listPreviewLineItems: stripeMethod87({
    method: "GET",
    fullPath: "/v1/credit_notes/preview/lines",
    methodType: "list"
  }),
  preview: stripeMethod87({ method: "GET", fullPath: "/v1/credit_notes/preview" }),
  voidCreditNote: stripeMethod87({
    method: "POST",
    fullPath: "/v1/credit_notes/{id}/void"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/CustomerSessions.js
var stripeMethod88 = StripeResource.method;
var CustomerSessions = StripeResource.extend({
  create: stripeMethod88({ method: "POST", fullPath: "/v1/customer_sessions" })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Customers.js
var stripeMethod89 = StripeResource.method;
var Customers2 = StripeResource.extend({
  create: stripeMethod89({ method: "POST", fullPath: "/v1/customers" }),
  retrieve: stripeMethod89({ method: "GET", fullPath: "/v1/customers/{customer}" }),
  update: stripeMethod89({ method: "POST", fullPath: "/v1/customers/{customer}" }),
  list: stripeMethod89({
    method: "GET",
    fullPath: "/v1/customers",
    methodType: "list"
  }),
  del: stripeMethod89({ method: "DELETE", fullPath: "/v1/customers/{customer}" }),
  createBalanceTransaction: stripeMethod89({
    method: "POST",
    fullPath: "/v1/customers/{customer}/balance_transactions"
  }),
  createFundingInstructions: stripeMethod89({
    method: "POST",
    fullPath: "/v1/customers/{customer}/funding_instructions"
  }),
  createSource: stripeMethod89({
    method: "POST",
    fullPath: "/v1/customers/{customer}/sources"
  }),
  createTaxId: stripeMethod89({
    method: "POST",
    fullPath: "/v1/customers/{customer}/tax_ids"
  }),
  deleteDiscount: stripeMethod89({
    method: "DELETE",
    fullPath: "/v1/customers/{customer}/discount"
  }),
  deleteSource: stripeMethod89({
    method: "DELETE",
    fullPath: "/v1/customers/{customer}/sources/{id}"
  }),
  deleteTaxId: stripeMethod89({
    method: "DELETE",
    fullPath: "/v1/customers/{customer}/tax_ids/{id}"
  }),
  listBalanceTransactions: stripeMethod89({
    method: "GET",
    fullPath: "/v1/customers/{customer}/balance_transactions",
    methodType: "list"
  }),
  listCashBalanceTransactions: stripeMethod89({
    method: "GET",
    fullPath: "/v1/customers/{customer}/cash_balance_transactions",
    methodType: "list"
  }),
  listPaymentMethods: stripeMethod89({
    method: "GET",
    fullPath: "/v1/customers/{customer}/payment_methods",
    methodType: "list"
  }),
  listSources: stripeMethod89({
    method: "GET",
    fullPath: "/v1/customers/{customer}/sources",
    methodType: "list"
  }),
  listTaxIds: stripeMethod89({
    method: "GET",
    fullPath: "/v1/customers/{customer}/tax_ids",
    methodType: "list"
  }),
  retrieveBalanceTransaction: stripeMethod89({
    method: "GET",
    fullPath: "/v1/customers/{customer}/balance_transactions/{transaction}"
  }),
  retrieveCashBalance: stripeMethod89({
    method: "GET",
    fullPath: "/v1/customers/{customer}/cash_balance"
  }),
  retrieveCashBalanceTransaction: stripeMethod89({
    method: "GET",
    fullPath: "/v1/customers/{customer}/cash_balance_transactions/{transaction}"
  }),
  retrievePaymentMethod: stripeMethod89({
    method: "GET",
    fullPath: "/v1/customers/{customer}/payment_methods/{payment_method}"
  }),
  retrieveSource: stripeMethod89({
    method: "GET",
    fullPath: "/v1/customers/{customer}/sources/{id}"
  }),
  retrieveTaxId: stripeMethod89({
    method: "GET",
    fullPath: "/v1/customers/{customer}/tax_ids/{id}"
  }),
  search: stripeMethod89({
    method: "GET",
    fullPath: "/v1/customers/search",
    methodType: "search"
  }),
  updateBalanceTransaction: stripeMethod89({
    method: "POST",
    fullPath: "/v1/customers/{customer}/balance_transactions/{transaction}"
  }),
  updateCashBalance: stripeMethod89({
    method: "POST",
    fullPath: "/v1/customers/{customer}/cash_balance"
  }),
  updateSource: stripeMethod89({
    method: "POST",
    fullPath: "/v1/customers/{customer}/sources/{id}"
  }),
  verifySource: stripeMethod89({
    method: "POST",
    fullPath: "/v1/customers/{customer}/sources/{id}/verify"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Disputes.js
var stripeMethod90 = StripeResource.method;
var Disputes2 = StripeResource.extend({
  retrieve: stripeMethod90({ method: "GET", fullPath: "/v1/disputes/{dispute}" }),
  update: stripeMethod90({ method: "POST", fullPath: "/v1/disputes/{dispute}" }),
  list: stripeMethod90({
    method: "GET",
    fullPath: "/v1/disputes",
    methodType: "list"
  }),
  close: stripeMethod90({
    method: "POST",
    fullPath: "/v1/disputes/{dispute}/close"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/EphemeralKeys.js
var stripeMethod91 = StripeResource.method;
var EphemeralKeys = StripeResource.extend({
  create: stripeMethod91({
    method: "POST",
    fullPath: "/v1/ephemeral_keys",
    validator: (data, options) => {
      if (!options.headers || !options.headers["Stripe-Version"]) {
        throw new Error("Passing apiVersion in a separate options hash is required to create an ephemeral key. See https://stripe.com/docs/api/versioning?lang=node");
      }
    }
  }),
  del: stripeMethod91({ method: "DELETE", fullPath: "/v1/ephemeral_keys/{key}" })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Events.js
var stripeMethod92 = StripeResource.method;
var Events2 = StripeResource.extend({
  retrieve: stripeMethod92({ method: "GET", fullPath: "/v1/events/{id}" }),
  list: stripeMethod92({
    method: "GET",
    fullPath: "/v1/events",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/ExchangeRates.js
var stripeMethod93 = StripeResource.method;
var ExchangeRates = StripeResource.extend({
  retrieve: stripeMethod93({
    method: "GET",
    fullPath: "/v1/exchange_rates/{rate_id}"
  }),
  list: stripeMethod93({
    method: "GET",
    fullPath: "/v1/exchange_rates",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/FileLinks.js
var stripeMethod94 = StripeResource.method;
var FileLinks = StripeResource.extend({
  create: stripeMethod94({ method: "POST", fullPath: "/v1/file_links" }),
  retrieve: stripeMethod94({ method: "GET", fullPath: "/v1/file_links/{link}" }),
  update: stripeMethod94({ method: "POST", fullPath: "/v1/file_links/{link}" }),
  list: stripeMethod94({
    method: "GET",
    fullPath: "/v1/file_links",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/multipart.js
var multipartDataGenerator = (method, data, headers) => {
  const segno = (Math.round(Math.random() * 1e16) + Math.round(Math.random() * 1e16)).toString();
  headers["Content-Type"] = `multipart/form-data; boundary=${segno}`;
  const textEncoder = new TextEncoder();
  let buffer = new Uint8Array(0);
  const endBuffer = textEncoder.encode("\r\n");
  function push(l) {
    const prevBuffer = buffer;
    const newBuffer = l instanceof Uint8Array ? l : new Uint8Array(textEncoder.encode(l));
    buffer = new Uint8Array(prevBuffer.length + newBuffer.length + 2);
    buffer.set(prevBuffer);
    buffer.set(newBuffer, prevBuffer.length);
    buffer.set(endBuffer, buffer.length - 2);
  }
  function q(s) {
    return `"${s.replace(/"|"/g, "%22").replace(/\r\n|\r|\n/g, " ")}"`;
  }
  const flattenedData = flattenAndStringify(data);
  for (const k in flattenedData) {
    if (!Object.prototype.hasOwnProperty.call(flattenedData, k)) {
      continue;
    }
    const v = flattenedData[k];
    push(`--${segno}`);
    if (Object.prototype.hasOwnProperty.call(v, "data")) {
      const typedEntry = v;
      push(`Content-Disposition: form-data; name=${q(k)}; filename=${q(typedEntry.name || "blob")}`);
      push(`Content-Type: ${typedEntry.type || "application/octet-stream"}`);
      push("");
      push(typedEntry.data);
    } else {
      push(`Content-Disposition: form-data; name=${q(k)}`);
      push("");
      push(v);
    }
  }
  push(`--${segno}--`);
  return buffer;
};
function multipartRequestDataProcessor(method, data, headers, callback) {
  data = data || {};
  if (method !== "POST") {
    return callback(null, queryStringifyRequestData(data));
  }
  this._stripe._platformFunctions.tryBufferData(data).then((bufferedData) => {
    const buffer = multipartDataGenerator(method, bufferedData, headers);
    return callback(null, buffer);
  }).catch((err) => callback(err, null));
}

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Files.js
var stripeMethod95 = StripeResource.method;
var Files = StripeResource.extend({
  create: stripeMethod95({
    method: "POST",
    fullPath: "/v1/files",
    headers: {
      "Content-Type": "multipart/form-data"
    },
    host: "files.stripe.com"
  }),
  retrieve: stripeMethod95({ method: "GET", fullPath: "/v1/files/{file}" }),
  list: stripeMethod95({
    method: "GET",
    fullPath: "/v1/files",
    methodType: "list"
  }),
  requestDataProcessor: multipartRequestDataProcessor
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/InvoiceItems.js
var stripeMethod96 = StripeResource.method;
var InvoiceItems = StripeResource.extend({
  create: stripeMethod96({ method: "POST", fullPath: "/v1/invoiceitems" }),
  retrieve: stripeMethod96({
    method: "GET",
    fullPath: "/v1/invoiceitems/{invoiceitem}"
  }),
  update: stripeMethod96({
    method: "POST",
    fullPath: "/v1/invoiceitems/{invoiceitem}"
  }),
  list: stripeMethod96({
    method: "GET",
    fullPath: "/v1/invoiceitems",
    methodType: "list"
  }),
  del: stripeMethod96({
    method: "DELETE",
    fullPath: "/v1/invoiceitems/{invoiceitem}"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/InvoiceRenderingTemplates.js
var stripeMethod97 = StripeResource.method;
var InvoiceRenderingTemplates = StripeResource.extend({
  retrieve: stripeMethod97({
    method: "GET",
    fullPath: "/v1/invoice_rendering_templates/{template}"
  }),
  list: stripeMethod97({
    method: "GET",
    fullPath: "/v1/invoice_rendering_templates",
    methodType: "list"
  }),
  archive: stripeMethod97({
    method: "POST",
    fullPath: "/v1/invoice_rendering_templates/{template}/archive"
  }),
  unarchive: stripeMethod97({
    method: "POST",
    fullPath: "/v1/invoice_rendering_templates/{template}/unarchive"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Invoices.js
var stripeMethod98 = StripeResource.method;
var Invoices = StripeResource.extend({
  create: stripeMethod98({ method: "POST", fullPath: "/v1/invoices" }),
  retrieve: stripeMethod98({ method: "GET", fullPath: "/v1/invoices/{invoice}" }),
  update: stripeMethod98({ method: "POST", fullPath: "/v1/invoices/{invoice}" }),
  list: stripeMethod98({
    method: "GET",
    fullPath: "/v1/invoices",
    methodType: "list"
  }),
  del: stripeMethod98({ method: "DELETE", fullPath: "/v1/invoices/{invoice}" }),
  addLines: stripeMethod98({
    method: "POST",
    fullPath: "/v1/invoices/{invoice}/add_lines"
  }),
  createPreview: stripeMethod98({
    method: "POST",
    fullPath: "/v1/invoices/create_preview"
  }),
  finalizeInvoice: stripeMethod98({
    method: "POST",
    fullPath: "/v1/invoices/{invoice}/finalize"
  }),
  listLineItems: stripeMethod98({
    method: "GET",
    fullPath: "/v1/invoices/{invoice}/lines",
    methodType: "list"
  }),
  listUpcomingLines: stripeMethod98({
    method: "GET",
    fullPath: "/v1/invoices/upcoming/lines",
    methodType: "list"
  }),
  markUncollectible: stripeMethod98({
    method: "POST",
    fullPath: "/v1/invoices/{invoice}/mark_uncollectible"
  }),
  pay: stripeMethod98({ method: "POST", fullPath: "/v1/invoices/{invoice}/pay" }),
  removeLines: stripeMethod98({
    method: "POST",
    fullPath: "/v1/invoices/{invoice}/remove_lines"
  }),
  retrieveUpcoming: stripeMethod98({
    method: "GET",
    fullPath: "/v1/invoices/upcoming"
  }),
  search: stripeMethod98({
    method: "GET",
    fullPath: "/v1/invoices/search",
    methodType: "search"
  }),
  sendInvoice: stripeMethod98({
    method: "POST",
    fullPath: "/v1/invoices/{invoice}/send"
  }),
  updateLines: stripeMethod98({
    method: "POST",
    fullPath: "/v1/invoices/{invoice}/update_lines"
  }),
  updateLineItem: stripeMethod98({
    method: "POST",
    fullPath: "/v1/invoices/{invoice}/lines/{line_item_id}"
  }),
  voidInvoice: stripeMethod98({
    method: "POST",
    fullPath: "/v1/invoices/{invoice}/void"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Mandates.js
var stripeMethod99 = StripeResource.method;
var Mandates = StripeResource.extend({
  retrieve: stripeMethod99({ method: "GET", fullPath: "/v1/mandates/{mandate}" })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/OAuth.js
var stripeMethod100 = StripeResource.method;
var oAuthHost = "connect.stripe.com";
var OAuth = StripeResource.extend({
  basePath: "/",
  authorizeUrl(params, options) {
    params = params || {};
    options = options || {};
    let path4 = "oauth/authorize";
    if (options.express) {
      path4 = `express/${path4}`;
    }
    if (!params.response_type) {
      params.response_type = "code";
    }
    if (!params.client_id) {
      params.client_id = this._stripe.getClientId();
    }
    if (!params.scope) {
      params.scope = "read_write";
    }
    return `https://${oAuthHost}/${path4}?${queryStringifyRequestData(params)}`;
  },
  token: stripeMethod100({
    method: "POST",
    path: "oauth/token",
    host: oAuthHost
  }),
  deauthorize(spec, ...args) {
    if (!spec.client_id) {
      spec.client_id = this._stripe.getClientId();
    }
    return stripeMethod100({
      method: "POST",
      path: "oauth/deauthorize",
      host: oAuthHost
    }).apply(this, [spec, ...args]);
  }
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/PaymentIntents.js
var stripeMethod101 = StripeResource.method;
var PaymentIntents = StripeResource.extend({
  create: stripeMethod101({ method: "POST", fullPath: "/v1/payment_intents" }),
  retrieve: stripeMethod101({
    method: "GET",
    fullPath: "/v1/payment_intents/{intent}"
  }),
  update: stripeMethod101({
    method: "POST",
    fullPath: "/v1/payment_intents/{intent}"
  }),
  list: stripeMethod101({
    method: "GET",
    fullPath: "/v1/payment_intents",
    methodType: "list"
  }),
  applyCustomerBalance: stripeMethod101({
    method: "POST",
    fullPath: "/v1/payment_intents/{intent}/apply_customer_balance"
  }),
  cancel: stripeMethod101({
    method: "POST",
    fullPath: "/v1/payment_intents/{intent}/cancel"
  }),
  capture: stripeMethod101({
    method: "POST",
    fullPath: "/v1/payment_intents/{intent}/capture"
  }),
  confirm: stripeMethod101({
    method: "POST",
    fullPath: "/v1/payment_intents/{intent}/confirm"
  }),
  incrementAuthorization: stripeMethod101({
    method: "POST",
    fullPath: "/v1/payment_intents/{intent}/increment_authorization"
  }),
  search: stripeMethod101({
    method: "GET",
    fullPath: "/v1/payment_intents/search",
    methodType: "search"
  }),
  verifyMicrodeposits: stripeMethod101({
    method: "POST",
    fullPath: "/v1/payment_intents/{intent}/verify_microdeposits"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/PaymentLinks.js
var stripeMethod102 = StripeResource.method;
var PaymentLinks = StripeResource.extend({
  create: stripeMethod102({ method: "POST", fullPath: "/v1/payment_links" }),
  retrieve: stripeMethod102({
    method: "GET",
    fullPath: "/v1/payment_links/{payment_link}"
  }),
  update: stripeMethod102({
    method: "POST",
    fullPath: "/v1/payment_links/{payment_link}"
  }),
  list: stripeMethod102({
    method: "GET",
    fullPath: "/v1/payment_links",
    methodType: "list"
  }),
  listLineItems: stripeMethod102({
    method: "GET",
    fullPath: "/v1/payment_links/{payment_link}/line_items",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/PaymentMethodConfigurations.js
var stripeMethod103 = StripeResource.method;
var PaymentMethodConfigurations = StripeResource.extend({
  create: stripeMethod103({
    method: "POST",
    fullPath: "/v1/payment_method_configurations"
  }),
  retrieve: stripeMethod103({
    method: "GET",
    fullPath: "/v1/payment_method_configurations/{configuration}"
  }),
  update: stripeMethod103({
    method: "POST",
    fullPath: "/v1/payment_method_configurations/{configuration}"
  }),
  list: stripeMethod103({
    method: "GET",
    fullPath: "/v1/payment_method_configurations",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/PaymentMethodDomains.js
var stripeMethod104 = StripeResource.method;
var PaymentMethodDomains = StripeResource.extend({
  create: stripeMethod104({
    method: "POST",
    fullPath: "/v1/payment_method_domains"
  }),
  retrieve: stripeMethod104({
    method: "GET",
    fullPath: "/v1/payment_method_domains/{payment_method_domain}"
  }),
  update: stripeMethod104({
    method: "POST",
    fullPath: "/v1/payment_method_domains/{payment_method_domain}"
  }),
  list: stripeMethod104({
    method: "GET",
    fullPath: "/v1/payment_method_domains",
    methodType: "list"
  }),
  validate: stripeMethod104({
    method: "POST",
    fullPath: "/v1/payment_method_domains/{payment_method_domain}/validate"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/PaymentMethods.js
var stripeMethod105 = StripeResource.method;
var PaymentMethods = StripeResource.extend({
  create: stripeMethod105({ method: "POST", fullPath: "/v1/payment_methods" }),
  retrieve: stripeMethod105({
    method: "GET",
    fullPath: "/v1/payment_methods/{payment_method}"
  }),
  update: stripeMethod105({
    method: "POST",
    fullPath: "/v1/payment_methods/{payment_method}"
  }),
  list: stripeMethod105({
    method: "GET",
    fullPath: "/v1/payment_methods",
    methodType: "list"
  }),
  attach: stripeMethod105({
    method: "POST",
    fullPath: "/v1/payment_methods/{payment_method}/attach"
  }),
  detach: stripeMethod105({
    method: "POST",
    fullPath: "/v1/payment_methods/{payment_method}/detach"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Payouts.js
var stripeMethod106 = StripeResource.method;
var Payouts = StripeResource.extend({
  create: stripeMethod106({ method: "POST", fullPath: "/v1/payouts" }),
  retrieve: stripeMethod106({ method: "GET", fullPath: "/v1/payouts/{payout}" }),
  update: stripeMethod106({ method: "POST", fullPath: "/v1/payouts/{payout}" }),
  list: stripeMethod106({
    method: "GET",
    fullPath: "/v1/payouts",
    methodType: "list"
  }),
  cancel: stripeMethod106({
    method: "POST",
    fullPath: "/v1/payouts/{payout}/cancel"
  }),
  reverse: stripeMethod106({
    method: "POST",
    fullPath: "/v1/payouts/{payout}/reverse"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Plans.js
var stripeMethod107 = StripeResource.method;
var Plans = StripeResource.extend({
  create: stripeMethod107({ method: "POST", fullPath: "/v1/plans" }),
  retrieve: stripeMethod107({ method: "GET", fullPath: "/v1/plans/{plan}" }),
  update: stripeMethod107({ method: "POST", fullPath: "/v1/plans/{plan}" }),
  list: stripeMethod107({
    method: "GET",
    fullPath: "/v1/plans",
    methodType: "list"
  }),
  del: stripeMethod107({ method: "DELETE", fullPath: "/v1/plans/{plan}" })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Prices.js
var stripeMethod108 = StripeResource.method;
var Prices = StripeResource.extend({
  create: stripeMethod108({ method: "POST", fullPath: "/v1/prices" }),
  retrieve: stripeMethod108({ method: "GET", fullPath: "/v1/prices/{price}" }),
  update: stripeMethod108({ method: "POST", fullPath: "/v1/prices/{price}" }),
  list: stripeMethod108({
    method: "GET",
    fullPath: "/v1/prices",
    methodType: "list"
  }),
  search: stripeMethod108({
    method: "GET",
    fullPath: "/v1/prices/search",
    methodType: "search"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Products.js
var stripeMethod109 = StripeResource.method;
var Products2 = StripeResource.extend({
  create: stripeMethod109({ method: "POST", fullPath: "/v1/products" }),
  retrieve: stripeMethod109({ method: "GET", fullPath: "/v1/products/{id}" }),
  update: stripeMethod109({ method: "POST", fullPath: "/v1/products/{id}" }),
  list: stripeMethod109({
    method: "GET",
    fullPath: "/v1/products",
    methodType: "list"
  }),
  del: stripeMethod109({ method: "DELETE", fullPath: "/v1/products/{id}" }),
  createFeature: stripeMethod109({
    method: "POST",
    fullPath: "/v1/products/{product}/features"
  }),
  deleteFeature: stripeMethod109({
    method: "DELETE",
    fullPath: "/v1/products/{product}/features/{id}"
  }),
  listFeatures: stripeMethod109({
    method: "GET",
    fullPath: "/v1/products/{product}/features",
    methodType: "list"
  }),
  retrieveFeature: stripeMethod109({
    method: "GET",
    fullPath: "/v1/products/{product}/features/{id}"
  }),
  search: stripeMethod109({
    method: "GET",
    fullPath: "/v1/products/search",
    methodType: "search"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/PromotionCodes.js
var stripeMethod110 = StripeResource.method;
var PromotionCodes = StripeResource.extend({
  create: stripeMethod110({ method: "POST", fullPath: "/v1/promotion_codes" }),
  retrieve: stripeMethod110({
    method: "GET",
    fullPath: "/v1/promotion_codes/{promotion_code}"
  }),
  update: stripeMethod110({
    method: "POST",
    fullPath: "/v1/promotion_codes/{promotion_code}"
  }),
  list: stripeMethod110({
    method: "GET",
    fullPath: "/v1/promotion_codes",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Quotes.js
var stripeMethod111 = StripeResource.method;
var Quotes = StripeResource.extend({
  create: stripeMethod111({ method: "POST", fullPath: "/v1/quotes" }),
  retrieve: stripeMethod111({ method: "GET", fullPath: "/v1/quotes/{quote}" }),
  update: stripeMethod111({ method: "POST", fullPath: "/v1/quotes/{quote}" }),
  list: stripeMethod111({
    method: "GET",
    fullPath: "/v1/quotes",
    methodType: "list"
  }),
  accept: stripeMethod111({ method: "POST", fullPath: "/v1/quotes/{quote}/accept" }),
  cancel: stripeMethod111({ method: "POST", fullPath: "/v1/quotes/{quote}/cancel" }),
  finalizeQuote: stripeMethod111({
    method: "POST",
    fullPath: "/v1/quotes/{quote}/finalize"
  }),
  listComputedUpfrontLineItems: stripeMethod111({
    method: "GET",
    fullPath: "/v1/quotes/{quote}/computed_upfront_line_items",
    methodType: "list"
  }),
  listLineItems: stripeMethod111({
    method: "GET",
    fullPath: "/v1/quotes/{quote}/line_items",
    methodType: "list"
  }),
  pdf: stripeMethod111({
    method: "GET",
    fullPath: "/v1/quotes/{quote}/pdf",
    host: "files.stripe.com",
    streaming: true
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Refunds.js
var stripeMethod112 = StripeResource.method;
var Refunds2 = StripeResource.extend({
  create: stripeMethod112({ method: "POST", fullPath: "/v1/refunds" }),
  retrieve: stripeMethod112({ method: "GET", fullPath: "/v1/refunds/{refund}" }),
  update: stripeMethod112({ method: "POST", fullPath: "/v1/refunds/{refund}" }),
  list: stripeMethod112({
    method: "GET",
    fullPath: "/v1/refunds",
    methodType: "list"
  }),
  cancel: stripeMethod112({
    method: "POST",
    fullPath: "/v1/refunds/{refund}/cancel"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Reviews.js
var stripeMethod113 = StripeResource.method;
var Reviews = StripeResource.extend({
  retrieve: stripeMethod113({ method: "GET", fullPath: "/v1/reviews/{review}" }),
  list: stripeMethod113({
    method: "GET",
    fullPath: "/v1/reviews",
    methodType: "list"
  }),
  approve: stripeMethod113({
    method: "POST",
    fullPath: "/v1/reviews/{review}/approve"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/SetupAttempts.js
var stripeMethod114 = StripeResource.method;
var SetupAttempts = StripeResource.extend({
  list: stripeMethod114({
    method: "GET",
    fullPath: "/v1/setup_attempts",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/SetupIntents.js
var stripeMethod115 = StripeResource.method;
var SetupIntents = StripeResource.extend({
  create: stripeMethod115({ method: "POST", fullPath: "/v1/setup_intents" }),
  retrieve: stripeMethod115({
    method: "GET",
    fullPath: "/v1/setup_intents/{intent}"
  }),
  update: stripeMethod115({
    method: "POST",
    fullPath: "/v1/setup_intents/{intent}"
  }),
  list: stripeMethod115({
    method: "GET",
    fullPath: "/v1/setup_intents",
    methodType: "list"
  }),
  cancel: stripeMethod115({
    method: "POST",
    fullPath: "/v1/setup_intents/{intent}/cancel"
  }),
  confirm: stripeMethod115({
    method: "POST",
    fullPath: "/v1/setup_intents/{intent}/confirm"
  }),
  verifyMicrodeposits: stripeMethod115({
    method: "POST",
    fullPath: "/v1/setup_intents/{intent}/verify_microdeposits"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/ShippingRates.js
var stripeMethod116 = StripeResource.method;
var ShippingRates = StripeResource.extend({
  create: stripeMethod116({ method: "POST", fullPath: "/v1/shipping_rates" }),
  retrieve: stripeMethod116({
    method: "GET",
    fullPath: "/v1/shipping_rates/{shipping_rate_token}"
  }),
  update: stripeMethod116({
    method: "POST",
    fullPath: "/v1/shipping_rates/{shipping_rate_token}"
  }),
  list: stripeMethod116({
    method: "GET",
    fullPath: "/v1/shipping_rates",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Sources.js
var stripeMethod117 = StripeResource.method;
var Sources = StripeResource.extend({
  create: stripeMethod117({ method: "POST", fullPath: "/v1/sources" }),
  retrieve: stripeMethod117({ method: "GET", fullPath: "/v1/sources/{source}" }),
  update: stripeMethod117({ method: "POST", fullPath: "/v1/sources/{source}" }),
  listSourceTransactions: stripeMethod117({
    method: "GET",
    fullPath: "/v1/sources/{source}/source_transactions",
    methodType: "list"
  }),
  verify: stripeMethod117({
    method: "POST",
    fullPath: "/v1/sources/{source}/verify"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/SubscriptionItems.js
var stripeMethod118 = StripeResource.method;
var SubscriptionItems = StripeResource.extend({
  create: stripeMethod118({ method: "POST", fullPath: "/v1/subscription_items" }),
  retrieve: stripeMethod118({
    method: "GET",
    fullPath: "/v1/subscription_items/{item}"
  }),
  update: stripeMethod118({
    method: "POST",
    fullPath: "/v1/subscription_items/{item}"
  }),
  list: stripeMethod118({
    method: "GET",
    fullPath: "/v1/subscription_items",
    methodType: "list"
  }),
  del: stripeMethod118({
    method: "DELETE",
    fullPath: "/v1/subscription_items/{item}"
  }),
  createUsageRecord: stripeMethod118({
    method: "POST",
    fullPath: "/v1/subscription_items/{subscription_item}/usage_records"
  }),
  listUsageRecordSummaries: stripeMethod118({
    method: "GET",
    fullPath: "/v1/subscription_items/{subscription_item}/usage_record_summaries",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/SubscriptionSchedules.js
var stripeMethod119 = StripeResource.method;
var SubscriptionSchedules = StripeResource.extend({
  create: stripeMethod119({
    method: "POST",
    fullPath: "/v1/subscription_schedules"
  }),
  retrieve: stripeMethod119({
    method: "GET",
    fullPath: "/v1/subscription_schedules/{schedule}"
  }),
  update: stripeMethod119({
    method: "POST",
    fullPath: "/v1/subscription_schedules/{schedule}"
  }),
  list: stripeMethod119({
    method: "GET",
    fullPath: "/v1/subscription_schedules",
    methodType: "list"
  }),
  cancel: stripeMethod119({
    method: "POST",
    fullPath: "/v1/subscription_schedules/{schedule}/cancel"
  }),
  release: stripeMethod119({
    method: "POST",
    fullPath: "/v1/subscription_schedules/{schedule}/release"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Subscriptions.js
var stripeMethod120 = StripeResource.method;
var Subscriptions = StripeResource.extend({
  create: stripeMethod120({ method: "POST", fullPath: "/v1/subscriptions" }),
  retrieve: stripeMethod120({
    method: "GET",
    fullPath: "/v1/subscriptions/{subscription_exposed_id}"
  }),
  update: stripeMethod120({
    method: "POST",
    fullPath: "/v1/subscriptions/{subscription_exposed_id}"
  }),
  list: stripeMethod120({
    method: "GET",
    fullPath: "/v1/subscriptions",
    methodType: "list"
  }),
  cancel: stripeMethod120({
    method: "DELETE",
    fullPath: "/v1/subscriptions/{subscription_exposed_id}"
  }),
  deleteDiscount: stripeMethod120({
    method: "DELETE",
    fullPath: "/v1/subscriptions/{subscription_exposed_id}/discount"
  }),
  resume: stripeMethod120({
    method: "POST",
    fullPath: "/v1/subscriptions/{subscription}/resume"
  }),
  search: stripeMethod120({
    method: "GET",
    fullPath: "/v1/subscriptions/search",
    methodType: "search"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/TaxCodes.js
var stripeMethod121 = StripeResource.method;
var TaxCodes = StripeResource.extend({
  retrieve: stripeMethod121({ method: "GET", fullPath: "/v1/tax_codes/{id}" }),
  list: stripeMethod121({
    method: "GET",
    fullPath: "/v1/tax_codes",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/TaxIds.js
var stripeMethod122 = StripeResource.method;
var TaxIds = StripeResource.extend({
  create: stripeMethod122({ method: "POST", fullPath: "/v1/tax_ids" }),
  retrieve: stripeMethod122({ method: "GET", fullPath: "/v1/tax_ids/{id}" }),
  list: stripeMethod122({
    method: "GET",
    fullPath: "/v1/tax_ids",
    methodType: "list"
  }),
  del: stripeMethod122({ method: "DELETE", fullPath: "/v1/tax_ids/{id}" })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/TaxRates.js
var stripeMethod123 = StripeResource.method;
var TaxRates = StripeResource.extend({
  create: stripeMethod123({ method: "POST", fullPath: "/v1/tax_rates" }),
  retrieve: stripeMethod123({ method: "GET", fullPath: "/v1/tax_rates/{tax_rate}" }),
  update: stripeMethod123({ method: "POST", fullPath: "/v1/tax_rates/{tax_rate}" }),
  list: stripeMethod123({
    method: "GET",
    fullPath: "/v1/tax_rates",
    methodType: "list"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Tokens.js
var stripeMethod124 = StripeResource.method;
var Tokens2 = StripeResource.extend({
  create: stripeMethod124({ method: "POST", fullPath: "/v1/tokens" }),
  retrieve: stripeMethod124({ method: "GET", fullPath: "/v1/tokens/{token}" })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Topups.js
var stripeMethod125 = StripeResource.method;
var Topups = StripeResource.extend({
  create: stripeMethod125({ method: "POST", fullPath: "/v1/topups" }),
  retrieve: stripeMethod125({ method: "GET", fullPath: "/v1/topups/{topup}" }),
  update: stripeMethod125({ method: "POST", fullPath: "/v1/topups/{topup}" }),
  list: stripeMethod125({
    method: "GET",
    fullPath: "/v1/topups",
    methodType: "list"
  }),
  cancel: stripeMethod125({ method: "POST", fullPath: "/v1/topups/{topup}/cancel" })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/Transfers.js
var stripeMethod126 = StripeResource.method;
var Transfers = StripeResource.extend({
  create: stripeMethod126({ method: "POST", fullPath: "/v1/transfers" }),
  retrieve: stripeMethod126({ method: "GET", fullPath: "/v1/transfers/{transfer}" }),
  update: stripeMethod126({ method: "POST", fullPath: "/v1/transfers/{transfer}" }),
  list: stripeMethod126({
    method: "GET",
    fullPath: "/v1/transfers",
    methodType: "list"
  }),
  createReversal: stripeMethod126({
    method: "POST",
    fullPath: "/v1/transfers/{id}/reversals"
  }),
  listReversals: stripeMethod126({
    method: "GET",
    fullPath: "/v1/transfers/{id}/reversals",
    methodType: "list"
  }),
  retrieveReversal: stripeMethod126({
    method: "GET",
    fullPath: "/v1/transfers/{transfer}/reversals/{id}"
  }),
  updateReversal: stripeMethod126({
    method: "POST",
    fullPath: "/v1/transfers/{transfer}/reversals/{id}"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources/WebhookEndpoints.js
var stripeMethod127 = StripeResource.method;
var WebhookEndpoints = StripeResource.extend({
  create: stripeMethod127({ method: "POST", fullPath: "/v1/webhook_endpoints" }),
  retrieve: stripeMethod127({
    method: "GET",
    fullPath: "/v1/webhook_endpoints/{webhook_endpoint}"
  }),
  update: stripeMethod127({
    method: "POST",
    fullPath: "/v1/webhook_endpoints/{webhook_endpoint}"
  }),
  list: stripeMethod127({
    method: "GET",
    fullPath: "/v1/webhook_endpoints",
    methodType: "list"
  }),
  del: stripeMethod127({
    method: "DELETE",
    fullPath: "/v1/webhook_endpoints/{webhook_endpoint}"
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/resources.js
var Apps = resourceNamespace("apps", { Secrets });
var Billing = resourceNamespace("billing", {
  Alerts,
  CreditBalanceSummary,
  CreditBalanceTransactions,
  CreditGrants,
  MeterEventAdjustments,
  MeterEvents,
  Meters
});
var BillingPortal = resourceNamespace("billingPortal", {
  Configurations,
  Sessions
});
var Checkout = resourceNamespace("checkout", {
  Sessions: Sessions2
});
var Climate = resourceNamespace("climate", {
  Orders,
  Products,
  Suppliers
});
var Entitlements = resourceNamespace("entitlements", {
  ActiveEntitlements,
  Features
});
var FinancialConnections = resourceNamespace("financialConnections", {
  Accounts,
  Sessions: Sessions3,
  Transactions: Transactions2
});
var Forwarding = resourceNamespace("forwarding", {
  Requests
});
var Identity = resourceNamespace("identity", {
  VerificationReports,
  VerificationSessions
});
var Issuing = resourceNamespace("issuing", {
  Authorizations: Authorizations2,
  Cardholders,
  Cards: Cards2,
  Disputes,
  PersonalizationDesigns: PersonalizationDesigns2,
  PhysicalBundles,
  Tokens,
  Transactions: Transactions3
});
var Radar = resourceNamespace("radar", {
  EarlyFraudWarnings,
  ValueListItems,
  ValueLists
});
var Reporting = resourceNamespace("reporting", {
  ReportRuns,
  ReportTypes
});
var Sigma = resourceNamespace("sigma", {
  ScheduledQueryRuns
});
var Tax = resourceNamespace("tax", {
  Calculations,
  Registrations,
  Settings,
  Transactions: Transactions4
});
var Terminal = resourceNamespace("terminal", {
  Configurations: Configurations2,
  ConnectionTokens,
  Locations,
  Readers: Readers2
});
var TestHelpers = resourceNamespace("testHelpers", {
  ConfirmationTokens,
  Customers,
  Refunds,
  TestClocks,
  Issuing: resourceNamespace("issuing", {
    Authorizations,
    Cards,
    PersonalizationDesigns,
    Transactions
  }),
  Terminal: resourceNamespace("terminal", {
    Readers
  }),
  Treasury: resourceNamespace("treasury", {
    InboundTransfers,
    OutboundPayments,
    OutboundTransfers,
    ReceivedCredits,
    ReceivedDebits
  })
});
var Treasury = resourceNamespace("treasury", {
  CreditReversals,
  DebitReversals,
  FinancialAccounts,
  InboundTransfers: InboundTransfers2,
  OutboundPayments: OutboundPayments2,
  OutboundTransfers: OutboundTransfers2,
  ReceivedCredits: ReceivedCredits2,
  ReceivedDebits: ReceivedDebits2,
  TransactionEntries,
  Transactions: Transactions5
});
var V2 = resourceNamespace("v2", {
  Billing: resourceNamespace("billing", {
    MeterEventAdjustments: MeterEventAdjustments2,
    MeterEventSession,
    MeterEventStream,
    MeterEvents: MeterEvents2
  }),
  Core: resourceNamespace("core", {
    EventDestinations,
    Events
  })
});

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/stripe.core.js
var DEFAULT_HOST = "api.stripe.com";
var DEFAULT_PORT = "443";
var DEFAULT_BASE_PATH = "/v1/";
var DEFAULT_API_VERSION = ApiVersion;
var DEFAULT_TIMEOUT = 8e4;
var MAX_NETWORK_RETRY_DELAY_SEC = 5;
var INITIAL_NETWORK_RETRY_DELAY_SEC = 0.5;
var APP_INFO_PROPERTIES = ["name", "version", "url", "partner_id"];
var ALLOWED_CONFIG_PROPERTIES = [
  "authenticator",
  "apiVersion",
  "typescript",
  "maxNetworkRetries",
  "httpAgent",
  "httpClient",
  "timeout",
  "host",
  "port",
  "protocol",
  "telemetry",
  "appInfo",
  "stripeAccount",
  "stripeContext"
];
var defaultRequestSenderFactory = (stripe2) => new RequestSender(stripe2, StripeResource.MAX_BUFFERED_REQUEST_METRICS);
function createStripe(platformFunctions, requestSender = defaultRequestSenderFactory) {
  Stripe2.PACKAGE_VERSION = "17.7.0";
  Stripe2.USER_AGENT = Object.assign({ bindings_version: Stripe2.PACKAGE_VERSION, lang: "node", publisher: "stripe", uname: null, typescript: false }, determineProcessUserAgentProperties());
  Stripe2.StripeResource = StripeResource;
  Stripe2.resources = resources_exports;
  Stripe2.HttpClient = HttpClient;
  Stripe2.HttpClientResponse = HttpClientResponse;
  Stripe2.CryptoProvider = CryptoProvider;
  function createWebhooksDefault(fns = platformFunctions) {
    return createWebhooks(fns);
  }
  Stripe2.webhooks = Object.assign(createWebhooksDefault, createWebhooks(platformFunctions));
  function Stripe2(key, config = {}) {
    if (!(this instanceof Stripe2)) {
      return new Stripe2(key, config);
    }
    const props = this._getPropsFromConfig(config);
    this._platformFunctions = platformFunctions;
    Object.defineProperty(this, "_emitter", {
      value: this._platformFunctions.createEmitter(),
      enumerable: false,
      configurable: false,
      writable: false
    });
    this.VERSION = Stripe2.PACKAGE_VERSION;
    this.on = this._emitter.on.bind(this._emitter);
    this.once = this._emitter.once.bind(this._emitter);
    this.off = this._emitter.removeListener.bind(this._emitter);
    const agent = props.httpAgent || null;
    this._api = {
      host: props.host || DEFAULT_HOST,
      port: props.port || DEFAULT_PORT,
      protocol: props.protocol || "https",
      basePath: DEFAULT_BASE_PATH,
      version: props.apiVersion || DEFAULT_API_VERSION,
      timeout: validateInteger("timeout", props.timeout, DEFAULT_TIMEOUT),
      maxNetworkRetries: validateInteger("maxNetworkRetries", props.maxNetworkRetries, 2),
      agent,
      httpClient: props.httpClient || (agent ? this._platformFunctions.createNodeHttpClient(agent) : this._platformFunctions.createDefaultHttpClient()),
      dev: false,
      stripeAccount: props.stripeAccount || null,
      stripeContext: props.stripeContext || null
    };
    const typescript = props.typescript || false;
    if (typescript !== Stripe2.USER_AGENT.typescript) {
      Stripe2.USER_AGENT.typescript = typescript;
    }
    if (props.appInfo) {
      this._setAppInfo(props.appInfo);
    }
    this._prepResources();
    this._setAuthenticator(key, props.authenticator);
    this.errors = Error_exports;
    this.webhooks = createWebhooksDefault();
    this._prevRequestMetrics = [];
    this._enableTelemetry = props.telemetry !== false;
    this._requestSender = requestSender(this);
    this.StripeResource = Stripe2.StripeResource;
  }
  Stripe2.errors = Error_exports;
  Stripe2.createNodeHttpClient = platformFunctions.createNodeHttpClient;
  Stripe2.createFetchHttpClient = platformFunctions.createFetchHttpClient;
  Stripe2.createNodeCryptoProvider = platformFunctions.createNodeCryptoProvider;
  Stripe2.createSubtleCryptoProvider = platformFunctions.createSubtleCryptoProvider;
  Stripe2.prototype = {
    // Properties are set in the constructor above
    _appInfo: void 0,
    on: null,
    off: null,
    once: null,
    VERSION: null,
    StripeResource: null,
    webhooks: null,
    errors: null,
    _api: null,
    _prevRequestMetrics: null,
    _emitter: null,
    _enableTelemetry: null,
    _requestSender: null,
    _platformFunctions: null,
    rawRequest(method, path4, params, options) {
      return this._requestSender._rawRequest(method, path4, params, options);
    },
    /**
     * @private
     */
    _setAuthenticator(key, authenticator) {
      if (key && authenticator) {
        throw new Error("Can't specify both apiKey and authenticator");
      }
      if (!key && !authenticator) {
        throw new Error("Neither apiKey nor config.authenticator provided");
      }
      this._authenticator = key ? createApiKeyAuthenticator(key) : authenticator;
    },
    /**
     * @private
     * This may be removed in the future.
     */
    _setAppInfo(info) {
      if (info && typeof info !== "object") {
        throw new Error("AppInfo must be an object.");
      }
      if (info && !info.name) {
        throw new Error("AppInfo.name is required");
      }
      info = info || {};
      this._appInfo = APP_INFO_PROPERTIES.reduce(
        (accum, prop) => {
          if (typeof info[prop] == "string") {
            accum = accum || {};
            accum[prop] = info[prop];
          }
          return accum;
        },
        // @ts-ignore
        void 0
      );
    },
    /**
     * @private
     * This may be removed in the future.
     */
    _setApiField(key, value) {
      this._api[key] = value;
    },
    /**
     * @private
     * Please open or upvote an issue at github.com/stripe/stripe-node
     * if you use this, detailing your use-case.
     *
     * It may be deprecated and removed in the future.
     */
    getApiField(key) {
      return this._api[key];
    },
    setClientId(clientId) {
      this._clientId = clientId;
    },
    getClientId() {
      return this._clientId;
    },
    /**
     * @private
     * Please open or upvote an issue at github.com/stripe/stripe-node
     * if you use this, detailing your use-case.
     *
     * It may be deprecated and removed in the future.
     */
    getConstant: (c) => {
      switch (c) {
        case "DEFAULT_HOST":
          return DEFAULT_HOST;
        case "DEFAULT_PORT":
          return DEFAULT_PORT;
        case "DEFAULT_BASE_PATH":
          return DEFAULT_BASE_PATH;
        case "DEFAULT_API_VERSION":
          return DEFAULT_API_VERSION;
        case "DEFAULT_TIMEOUT":
          return DEFAULT_TIMEOUT;
        case "MAX_NETWORK_RETRY_DELAY_SEC":
          return MAX_NETWORK_RETRY_DELAY_SEC;
        case "INITIAL_NETWORK_RETRY_DELAY_SEC":
          return INITIAL_NETWORK_RETRY_DELAY_SEC;
      }
      return Stripe2[c];
    },
    getMaxNetworkRetries() {
      return this.getApiField("maxNetworkRetries");
    },
    /**
     * @private
     * This may be removed in the future.
     */
    _setApiNumberField(prop, n, defaultVal) {
      const val = validateInteger(prop, n, defaultVal);
      this._setApiField(prop, val);
    },
    getMaxNetworkRetryDelay() {
      return MAX_NETWORK_RETRY_DELAY_SEC;
    },
    getInitialNetworkRetryDelay() {
      return INITIAL_NETWORK_RETRY_DELAY_SEC;
    },
    /**
     * @private
     * Please open or upvote an issue at github.com/stripe/stripe-node
     * if you use this, detailing your use-case.
     *
     * It may be deprecated and removed in the future.
     *
     * Gets a JSON version of a User-Agent and uses a cached version for a slight
     * speed advantage.
     */
    getClientUserAgent(cb) {
      return this.getClientUserAgentSeeded(Stripe2.USER_AGENT, cb);
    },
    /**
     * @private
     * Please open or upvote an issue at github.com/stripe/stripe-node
     * if you use this, detailing your use-case.
     *
     * It may be deprecated and removed in the future.
     *
     * Gets a JSON version of a User-Agent by encoding a seeded object and
     * fetching a uname from the system.
     */
    getClientUserAgentSeeded(seed, cb) {
      this._platformFunctions.getUname().then((uname) => {
        var _a;
        const userAgent = {};
        for (const field in seed) {
          if (!Object.prototype.hasOwnProperty.call(seed, field)) {
            continue;
          }
          userAgent[field] = encodeURIComponent((_a = seed[field]) !== null && _a !== void 0 ? _a : "null");
        }
        userAgent.uname = encodeURIComponent(uname || "UNKNOWN");
        const client = this.getApiField("httpClient");
        if (client) {
          userAgent.httplib = encodeURIComponent(client.getClientName());
        }
        if (this._appInfo) {
          userAgent.application = this._appInfo;
        }
        cb(JSON.stringify(userAgent));
      });
    },
    /**
     * @private
     * Please open or upvote an issue at github.com/stripe/stripe-node
     * if you use this, detailing your use-case.
     *
     * It may be deprecated and removed in the future.
     */
    getAppInfoAsString() {
      if (!this._appInfo) {
        return "";
      }
      let formatted = this._appInfo.name;
      if (this._appInfo.version) {
        formatted += `/${this._appInfo.version}`;
      }
      if (this._appInfo.url) {
        formatted += ` (${this._appInfo.url})`;
      }
      return formatted;
    },
    getTelemetryEnabled() {
      return this._enableTelemetry;
    },
    /**
     * @private
     * This may be removed in the future.
     */
    _prepResources() {
      for (const name in resources_exports) {
        if (!Object.prototype.hasOwnProperty.call(resources_exports, name)) {
          continue;
        }
        this[pascalToCamelCase(name)] = new resources_exports[name](this);
      }
    },
    /**
     * @private
     * This may be removed in the future.
     */
    _getPropsFromConfig(config) {
      if (!config) {
        return {};
      }
      const isString = typeof config === "string";
      const isObject2 = config === Object(config) && !Array.isArray(config);
      if (!isObject2 && !isString) {
        throw new Error("Config must either be an object or a string");
      }
      if (isString) {
        return {
          apiVersion: config
        };
      }
      const values = Object.keys(config).filter((value) => !ALLOWED_CONFIG_PROPERTIES.includes(value));
      if (values.length > 0) {
        throw new Error(`Config object may only contain the following: ${ALLOWED_CONFIG_PROPERTIES.join(", ")}`);
      }
      return config;
    },
    parseThinEvent(payload, header, secret, tolerance, cryptoProvider, receivedAt) {
      return this.webhooks.constructEvent(payload, header, secret, tolerance, cryptoProvider, receivedAt);
    }
  };
  return Stripe2;
}

// ../node_modules/.pnpm/stripe@17.7.0/node_modules/stripe/esm/stripe.esm.node.js
var Stripe = createStripe(new NodePlatformFunctions());
var stripe_esm_node_default = Stripe;

// src/config/stripe.ts
var stripeSecretKey = process.env.STRIPE_SECRET_KEY;
var stripe = null;
if (stripeSecretKey && stripeSecretKey !== "your-stripe-secret-key") {
  try {
    stripe = new stripe_esm_node_default(stripeSecretKey, {
      apiVersion: "2025-02-24.acacia",
      typescript: true
    });
    console.log("[Stripe] \u2705 Stripe SDK \u521D\u59CB\u5316\u6210\u529F");
  } catch (error) {
    console.warn("[Stripe] \u26A0\uFE0F Stripe SDK \u521D\u59CB\u5316\u5931\u8D25:", error);
  }
} else {
  console.warn("[Stripe] \u26A0\uFE0F \u672A\u914D\u7F6E STRIPE_SECRET_KEY\uFF0C\u652F\u4ED8\u529F\u80FD\u5C06\u4E0D\u53EF\u7528");
  console.warn("[Stripe] \u{1F4A1} \u63D0\u793A\uFF1A\u8BF7\u5728 backend/.env \u6587\u4EF6\u4E2D\u914D\u7F6E Stripe \u5BC6\u94A5");
}
var stripe_default = stripe;
var STRIPE_PRICES = {
  basic: {
    month: process.env.STRIPE_PRICE_BASIC_MONTH || "",
    year: process.env.STRIPE_PRICE_BASIC_YEAR || ""
  },
  premium: {
    month: process.env.STRIPE_PRICE_PREMIUM_MONTH || "",
    year: process.env.STRIPE_PRICE_PREMIUM_YEAR || ""
  },
  enterprise: {
    year: process.env.STRIPE_PRICE_ENTERPRISE_YEAR || ""
  }
};
var PRICE_CONFIG = {
  basic: {
    month: { amount: 2900, currency: "CNY", display: "\xA529" },
    year: { amount: 29e3, currency: "CNY", display: "\xA5290" }
  },
  premium: {
    month: { amount: 9900, currency: "CNY", display: "\xA599" },
    year: { amount: 99e3, currency: "CNY", display: "\xA5990" }
  },
  enterprise: {
    year: { amount: 99900, currency: "CNY", display: "\xA5999" }
  }
};

// src/routes/payment.ts
var router28 = import_express28.default.Router();
var checkStripeAvailable = (req, res, next) => {
  if (!stripe_default) {
    return res.status(503).json({
      error: "Stripe \u652F\u4ED8\u529F\u80FD\u672A\u914D\u7F6E",
      message: "\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u914D\u7F6E Stripe \u5BC6\u94A5"
    });
  }
  next();
};
router28.post("/create-checkout-session", authMiddleware, checkStripeAvailable, async (req, res) => {
  try {
    const userId = req.user._id;
    const { tier, period } = req.body;
    if (!["basic", "premium", "enterprise"].includes(tier)) {
      return res.status(400).json({ error: "\u65E0\u6548\u7684\u4F1A\u5458\u7B49\u7EA7" });
    }
    if (!["month", "year"].includes(period)) {
      return res.status(400).json({ error: "\u65E0\u6548\u7684\u8BA2\u9605\u5468\u671F" });
    }
    const priceId = STRIPE_PRICES[tier]?.[period];
    if (!priceId) {
      return res.status(400).json({ error: "\u65E0\u6548\u7684\u4EF7\u683C\u914D\u7F6E" });
    }
    const user = await User_default.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "\u7528\u6237\u4E0D\u5B58\u5728" });
    }
    const session = await stripe_default.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price: priceId,
          quantity: 1
        }
      ],
      mode: "payment",
      success_url: `${process.env.FRONTEND_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/payment/cancel`,
      customer_email: user.email,
      client_reference_id: userId.toString(),
      metadata: {
        userId: userId.toString(),
        tier,
        period
      }
    });
    res.json({
      sessionId: session.id,
      url: session.url
    });
  } catch (error) {
    console.error("\u521B\u5EFA\u652F\u4ED8\u4F1A\u8BDD\u5931\u8D25:", error);
    res.status(500).json({ error: "\u521B\u5EFA\u652F\u4ED8\u4F1A\u8BDD\u5931\u8D25" });
  }
});
router28.get("/verify-session/:sessionId", authMiddleware, checkStripeAvailable, async (req, res) => {
  try {
    const { sessionId } = req.params;
    const session = await stripe_default.checkout.sessions.retrieve(sessionId);
    if (session.payment_status === "paid") {
      const { userId, tier, period } = session.metadata;
      if (!userId || !tier || !period) {
        return res.status(400).json({ error: "\u65E0\u6548\u7684\u4F1A\u8BDD\u5143\u6570\u636E" });
      }
      let membership = await Membership_default.findOne({ userId });
      if (!membership) {
        membership = new Membership_default({ userId });
      }
      const startDate = /* @__PURE__ */ new Date();
      const endDate = /* @__PURE__ */ new Date();
      if (period === "month") {
        endDate.setMonth(endDate.getMonth() + 1);
      } else if (period === "year") {
        endDate.setFullYear(endDate.getFullYear() + 1);
      }
      membership.tier = tier;
      membership.status = "active";
      membership.startDate = startDate;
      membership.endDate = endDate;
      membership.features = Membership_default.getTierFeatures(tier);
      membership.paymentMethod = "stripe";
      const amount = session.amount_total || 0;
      membership.transactions.push({
        transactionId: session.id,
        amount: amount / 100,
        // Stripe 金额是分为单位
        currency: session.currency?.toUpperCase() || "CNY",
        status: "completed",
        createdAt: /* @__PURE__ */ new Date()
      });
      await membership.save();
      let points = await Points_default.findOne({ userId });
      if (!points) {
        points = new Points_default({ userId });
      }
      const pointsToAdd = Math.floor(amount / 10);
      points.balance += pointsToAdd;
      points.totalEarned += pointsToAdd;
      points.history.push({
        type: "earn",
        amount: pointsToAdd,
        reason: "membership_upgrade",
        description: `\u5347\u7EA7\u5230${tier}\u4F1A\u5458`,
        createdAt: /* @__PURE__ */ new Date()
      });
      const levelInfo = Points_default.getLevelInfo(points.totalEarned);
      points.level = levelInfo.level;
      points.levelName = levelInfo.name;
      points.nextLevelPoints = levelInfo.nextLevelPoints;
      await points.save();
      res.json({
        success: true,
        message: "\u652F\u4ED8\u6210\u529F",
        membership
      });
    } else {
      res.json({
        success: false,
        message: "\u652F\u4ED8\u672A\u5B8C\u6210",
        status: session.payment_status
      });
    }
  } catch (error) {
    console.error("\u9A8C\u8BC1\u652F\u4ED8\u4F1A\u8BDD\u5931\u8D25:", error);
    res.status(500).json({ error: "\u9A8C\u8BC1\u652F\u4ED8\u4F1A\u8BDD\u5931\u8D25" });
  }
});
router28.post("/webhook", import_express28.default.raw({ type: "application/json" }), async (req, res) => {
  if (!stripe_default) {
    console.error("[Stripe Webhook] Stripe \u672A\u914D\u7F6E");
    return res.status(503).send("Stripe not configured");
  }
  const sig = req.headers["stripe-signature"];
  if (!sig) {
    return res.status(400).send("Missing stripe-signature header");
  }
  let event;
  try {
    event = stripe_default.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET || ""
    );
  } catch (err) {
    console.error("Webhook \u7B7E\u540D\u9A8C\u8BC1\u5931\u8D25:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      console.log("\u652F\u4ED8\u5B8C\u6210:", session.id);
      const { userId, tier, period } = session.metadata;
      if (userId && tier && period) {
        try {
          let membership = await Membership_default.findOne({ userId });
          if (!membership) {
            membership = new Membership_default({ userId });
          }
          const startDate = /* @__PURE__ */ new Date();
          const endDate = /* @__PURE__ */ new Date();
          if (period === "month") {
            endDate.setMonth(endDate.getMonth() + 1);
          } else if (period === "year") {
            endDate.setFullYear(endDate.getFullYear() + 1);
          }
          membership.tier = tier;
          membership.status = "active";
          membership.startDate = startDate;
          membership.endDate = endDate;
          membership.features = Membership_default.getTierFeatures(tier);
          membership.paymentMethod = "stripe";
          const amount = session.amount_total || 0;
          membership.transactions.push({
            transactionId: session.id,
            amount: amount / 100,
            currency: session.currency?.toUpperCase() || "CNY",
            status: "completed",
            createdAt: /* @__PURE__ */ new Date()
          });
          await membership.save();
          let points = await Points_default.findOne({ userId });
          if (!points) {
            points = new Points_default({ userId });
          }
          const pointsToAdd = Math.floor(amount / 10);
          points.balance += pointsToAdd;
          points.totalEarned += pointsToAdd;
          points.history.push({
            type: "earn",
            amount: pointsToAdd,
            reason: "membership_upgrade",
            description: `\u5347\u7EA7\u5230${tier}\u4F1A\u5458`,
            createdAt: /* @__PURE__ */ new Date()
          });
          const levelInfo = Points_default.getLevelInfo(points.totalEarned);
          points.level = levelInfo.level;
          points.levelName = levelInfo.name;
          points.nextLevelPoints = levelInfo.nextLevelPoints;
          await points.save();
          console.log(`\u4F1A\u5458\u5347\u7EA7\u6210\u529F: userId=${userId}, tier=${tier}`);
        } catch (error) {
          console.error("\u5904\u7406\u652F\u4ED8\u6210\u529F\u4E8B\u4EF6\u5931\u8D25:", error);
        }
      }
      break;
    }
    case "payment_intent.payment_failed": {
      const paymentIntent = event.data.object;
      console.log("\u652F\u4ED8\u5931\u8D25:", paymentIntent.id);
      break;
    }
    case "customer.subscription.deleted": {
      const subscription = event.data.object;
      console.log("\u8BA2\u9605\u53D6\u6D88:", subscription.id);
      break;
    }
    default:
      console.log(`\u672A\u5904\u7406\u7684\u4E8B\u4EF6\u7C7B\u578B: ${event.type}`);
  }
  res.json({ received: true });
});
router28.get("/prices", async (req, res) => {
  try {
    res.json(PRICE_CONFIG);
  } catch (error) {
    console.error("\u83B7\u53D6\u4EF7\u683C\u5217\u8868\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u4EF7\u683C\u5217\u8868\u5931\u8D25" });
  }
});
router28.get("/history", authMiddleware, async (req, res) => {
  try {
    const userId = req.user._id;
    const membership = await Membership_default.findOne({ userId });
    if (!membership) {
      return res.json({ transactions: [] });
    }
    const transactions = membership.transactions.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).map((t) => ({
      id: t.transactionId,
      amount: t.amount,
      currency: t.currency,
      status: t.status,
      createdAt: t.createdAt
    }));
    res.json({ transactions });
  } catch (error) {
    console.error("\u83B7\u53D6\u652F\u4ED8\u5386\u53F2\u5931\u8D25:", error);
    res.status(500).json({ error: "\u83B7\u53D6\u652F\u4ED8\u5386\u53F2\u5931\u8D25" });
  }
});
router28.post("/cancel-subscription", authMiddleware, checkStripeAvailable, async (req, res) => {
  try {
    const userId = req.user._id;
    const membership = await Membership_default.findOne({ userId });
    if (!membership || membership.status !== "active") {
      return res.status(404).json({ error: "\u672A\u627E\u5230\u6709\u6548\u7684\u4F1A\u5458\u8BA2\u9605" });
    }
    membership.status = "cancelled";
    await membership.save();
    res.json({
      success: true,
      message: "\u8BA2\u9605\u5DF2\u53D6\u6D88",
      membership
    });
  } catch (error) {
    console.error("\u53D6\u6D88\u8BA2\u9605\u5931\u8D25:", error);
    res.status(500).json({ error: "\u53D6\u6D88\u8BA2\u9605\u5931\u8D25" });
  }
});
var payment_default = router28;

// src/middleware/errorHandler.ts
var AppError = class extends Error {
  constructor(message, statusCode = 500, code = "INTERNAL_ERROR" /* INTERNAL_ERROR */) {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
};
var errorHandler = (err, req, res, _next) => {
  let statusCode = 500;
  let message = "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF";
  let code = "INTERNAL_ERROR" /* INTERNAL_ERROR */;
  let isOperational = false;
  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
    code = err.code;
    isOperational = err.isOperational;
  } else if (err.name === "ValidationError") {
    statusCode = 400;
    message = "\u6570\u636E\u9A8C\u8BC1\u5931\u8D25";
    code = "VALIDATION_ERROR" /* VALIDATION_ERROR */;
  } else if (err.name === "CastError") {
    statusCode = 400;
    message = "\u65E0\u6548\u7684\u6570\u636E\u683C\u5F0F";
    code = "BAD_REQUEST" /* BAD_REQUEST */;
  } else if (err.code === 11e3) {
    statusCode = 409;
    message = "\u6570\u636E\u5DF2\u5B58\u5728\uFF08\u91CD\u590D\u7684\u952E\u503C\uFF09";
    code = "CONFLICT" /* CONFLICT */;
    const field = Object.keys(err.keyPattern || {})[0];
    if (field) {
      message = `${field} \u5DF2\u5B58\u5728`;
    }
  } else if (err.name === "JsonWebTokenError") {
    statusCode = 401;
    message = "\u65E0\u6548\u7684\u8BA4\u8BC1\u4EE4\u724C";
    code = "UNAUTHORIZED" /* UNAUTHORIZED */;
  } else if (err.name === "TokenExpiredError") {
    statusCode = 401;
    message = "\u8BA4\u8BC1\u4EE4\u724C\u5DF2\u8FC7\u671F\uFF0C\u8BF7\u91CD\u65B0\u767B\u5F55";
    code = "UNAUTHORIZED" /* UNAUTHORIZED */;
  } else if (err.name === "MongoNetworkError" || err.name === "MongoTimeoutError") {
    statusCode = 503;
    message = "\u6570\u636E\u5E93\u8FDE\u63A5\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5";
    code = "DATABASE_ERROR" /* DATABASE_ERROR */;
  } else if (err.message) {
    message = err.message;
  }
  const timestamp = (/* @__PURE__ */ new Date()).toISOString();
  const logData = {
    timestamp,
    statusCode,
    code,
    message: err.message,
    url: req.originalUrl,
    method: req.method,
    ip: req.ip,
    userAgent: req.get("user-agent"),
    userId: req.user?.userId || "anonymous"
  };
  if (statusCode >= 500) {
    console.error("[ERROR]", JSON.stringify({
      ...logData,
      stack: err.stack
    }, null, 2));
  } else if (statusCode >= 400) {
    console.warn("[WARN]", JSON.stringify(logData, null, 2));
  }
  const isDevelopment = process.env.NODE_ENV === "development";
  res.status(statusCode).json({
    success: false,
    message,
    code,
    ...isDevelopment ? {
      error: err.message,
      stack: err.stack,
      details: err.details || void 0
    } : {}
  });
};
var notFoundHandler = (req, res, _next) => {
  console.warn(`[404] ${req.method} ${req.originalUrl} - IP: ${req.ip}`);
  res.status(404).json({
    success: false,
    message: `\u8DEF\u7531 ${req.originalUrl} \u4E0D\u5B58\u5728`,
    code: "NOT_FOUND" /* NOT_FOUND */
  });
};

// src/middleware/rateLimiter.ts
var RateLimiter = class {
  constructor(windowMs, maxRequests) {
    this.requests = /* @__PURE__ */ new Map();
    this.windowMs = windowMs;
    this.maxRequests = maxRequests;
    setInterval(() => this.cleanup(), windowMs);
  }
  /**
   * 检查是否超过限流
   */
  isRateLimited(key) {
    const now = Date.now();
    const requests = this.requests.get(key) || [];
    const validRequests = requests.filter((time) => now - time < this.windowMs);
    if (validRequests.length >= this.maxRequests) {
      return true;
    }
    validRequests.push(now);
    this.requests.set(key, validRequests);
    return false;
  }
  /**
   * 清理过期记录
   */
  cleanup() {
    const now = Date.now();
    for (const [key, requests] of this.requests.entries()) {
      const validRequests = requests.filter((time) => now - time < this.windowMs);
      if (validRequests.length === 0) {
        this.requests.delete(key);
      } else {
        this.requests.set(key, validRequests);
      }
    }
  }
  /**
   * 重置指定键的限流
   */
  reset(key) {
    this.requests.delete(key);
  }
};
var globalLimiter = new RateLimiter(6e4, 100);
var aiLimiter = new RateLimiter(6e4, 20);
var authLimiter = new RateLimiter(3e5, 10);
var createRateLimitMiddleware = (limiter, keyGenerator) => {
  return (req, res, next) => {
    const key = keyGenerator ? keyGenerator(req) : `${req.ip}:${req.user?._id || "anonymous"}`;
    if (limiter.isRateLimited(key)) {
      return res.status(429).json({
        success: false,
        message: "\u8BF7\u6C42\u8FC7\u4E8E\u9891\u7E41\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5"
      });
    }
    next();
  };
};
var aiRateLimitMiddleware = createRateLimitMiddleware(
  aiLimiter,
  (req) => `ai:${req.ip}:${req.user?._id || "anonymous"}`
);
var authRateLimitMiddleware = createRateLimitMiddleware(
  authLimiter,
  (req) => `auth:${req.ip}`
);
var globalRateLimitMiddleware = createRateLimitMiddleware(globalLimiter);

// src/utils/dbIndexes.ts
var import_mongoose18 = __toESM(require("mongoose"));
init_KnowledgePoint();
init_StudySession();
async function createDatabaseIndexes() {
  console.log("[DB Indexes] \u5F00\u59CB\u540C\u6B65\u6570\u636E\u5E93\u7D22\u5F15...");
  const models = [
    { name: "User", model: User_default },
    { name: "KnowledgePoint", model: KnowledgePoint_default },
    { name: "UserProgress", model: UserProgress_default },
    { name: "WrongQuestion", model: WrongQuestion_default },
    { name: "StudySession", model: StudySession_default },
    { name: "Assessment", model: Assessment_default }
  ];
  let successCount = 0;
  for (const { name, model: model8 } of models) {
    try {
      await Promise.race([
        model8.syncIndexes(),
        new Promise(
          (_, reject) => setTimeout(() => reject(new Error("\u7D22\u5F15\u540C\u6B65\u8D85\u65F6")), 3e4)
        )
      ]);
      console.log(`[DB Indexes] \u2713 ${name} \u7D22\u5F15\u540C\u6B65\u5B8C\u6210`);
      successCount++;
    } catch (error) {
      console.warn(`[DB Indexes] \u26A0\uFE0F  ${name} \u7D22\u5F15\u540C\u6B65\u5931\u8D25:`, error.message);
    }
  }
  if (successCount === models.length) {
    console.log("[DB Indexes] \u2705 \u6240\u6709\u6570\u636E\u5E93\u7D22\u5F15\u540C\u6B65\u5B8C\u6210\uFF01");
    return true;
  } else if (successCount > 0) {
    console.log(`[DB Indexes] \u26A0\uFE0F  \u90E8\u5206\u7D22\u5F15\u540C\u6B65\u5B8C\u6210 (${successCount}/${models.length})`);
    return true;
  } else {
    console.warn("[DB Indexes] \u26A0\uFE0F  \u7D22\u5F15\u540C\u6B65\u5931\u8D25\uFF0C\u4F46\u4E0D\u5F71\u54CD\u5E94\u7528\u8FD0\u884C");
    return false;
  }
}
async function listDatabaseIndexes() {
  console.log("[DB Indexes] \u83B7\u53D6\u6570\u636E\u5E93\u7D22\u5F15\u4FE1\u606F...\n");
  const collections = [
    { name: "User", model: User_default },
    { name: "KnowledgePoint", model: KnowledgePoint_default },
    { name: "UserProgress", model: UserProgress_default },
    { name: "WrongQuestion", model: WrongQuestion_default },
    { name: "StudySession", model: StudySession_default },
    { name: "Assessment", model: Assessment_default }
  ];
  for (const { name, model: model8 } of collections) {
    try {
      const indexes = await model8.collection.getIndexes();
      console.log(`
${name} \u7D22\u5F15:`);
      Object.entries(indexes).forEach(([indexName, indexSpec]) => {
        console.log(`  - ${indexName}:`, JSON.stringify(indexSpec));
      });
    } catch (error) {
      console.error(`  \u274C \u83B7\u53D6 ${name} \u7D22\u5F15\u5931\u8D25:`, error.message);
    }
  }
}
if (typeof require !== "undefined" && require.main === module) {
  import("dotenv").then((dotenv3) => dotenv3.config());
  const mongoUri2 = process.env.MONGO_URI;
  if (!mongoUri2) {
    console.error("\u9519\u8BEF: MONGO_URI \u672A\u5728 .env \u6587\u4EF6\u4E2D\u5B9A\u4E49");
    process.exit(1);
  }
  import_mongoose18.default.connect(mongoUri2).then(async () => {
    console.log("\u2713 \u5DF2\u8FDE\u63A5\u5230 MongoDB");
    await createDatabaseIndexes();
    await listDatabaseIndexes();
    await import_mongoose18.default.connection.close();
    console.log("\n\u2713 \u6570\u636E\u5E93\u8FDE\u63A5\u5DF2\u5173\u95ED");
    process.exit(0);
  }).catch((err) => {
    console.error("\u65E0\u6CD5\u8FDE\u63A5\u5230 MongoDB:", err);
    process.exit(1);
  });
}

// src/index.ts
import_dotenv2.default.config();
var app = (0, import_express29.default)();
var PORT = process.env.PORT || 5001;
var mongoUri = process.env.MONGODB_URI || process.env.MONGO_URI;
if (!mongoUri) {
  console.error("\u8B66\u544A: MONGODB_URI \u6216 MONGO_URI \u672A\u5728\u73AF\u5883\u53D8\u91CF\u4E2D\u5B9A\u4E49");
} else {
  const mongooseOptions = {
    serverSelectionTimeoutMS: 1e4,
    // 增加服务器选择超时时间
    socketTimeoutMS: 45e3
    // Socket 超时时间
  };
  import_mongoose19.default.connect(mongoUri, mongooseOptions).then(async () => {
    console.log("\u2713 \u6210\u529F\u8FDE\u63A5\u5230 MongoDB");
    await createDatabaseIndexes().catch((e) => console.error("\u521B\u5EFA\u6570\u636E\u5E93\u7D22\u5F15\u5931\u8D25:", e.message));
  }).catch((err) => {
    console.error("\u2717 \u65E0\u6CD5\u8FDE\u63A5\u5230 MongoDB:", err.message);
  });
}
app.use((req, res, next) => {
  if (req.url.startsWith("/api/index")) {
    req.url = req.url.replace("/api/index", "/api");
  }
  const origin = req.headers.origin || "*";
  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With, Accept, Origin, X-Api-Version");
  if (req.method === "OPTIONS") {
    return res.status(200).send("OK");
  }
  next();
});
var corsOptions = {
  origin: true,
  credentials: true,
  optionsSuccessStatus: 200
};
app.use((0, import_cors.default)(corsOptions));
app.use((0, import_compression.default)({
  // 只压缩大于 1KB 的响应
  threshold: 1024,
  // 压缩级别（0-9，9为最高压缩率但最慢）
  level: 6,
  // 过滤器：只压缩可压缩的内容
  filter: (req, res) => {
    if (req.headers["x-no-compression"]) {
      return false;
    }
    return import_compression.default.filter(req, res);
  }
}));
app.use("/api/payment/webhook", payment_default);
app.use(import_express29.default.json({ limit: "10mb" }));
app.use(import_passport2.default.initialize());
app.use("/uploads", import_express29.default.static(import_path3.default.join(__dirname, "../uploads")));
if (process.env.TRUST_PROXY === "true") {
  app.set("trust proxy", 1);
}
app.use(requestLogger);
app.use(analyticsMiddleware);
app.use(globalRateLimitMiddleware);
app.get("/api/auth/me", authMiddleware, (req, res) => {
  const user = req.user;
  console.log(`\u{1F464} [\u540E\u7AEF /auth/me] \u8FD4\u56DE\u7528\u6237\u4FE1\u606F:`, {
    _id: user._id,
    username: user.username,
    email: user.email,
    role: user.role,
    avatarUrl: user.avatarUrl,
    "\u5B8C\u6574\u5BF9\u8C61": user
  });
  res.json(user);
});
app.use("/api/auth", authRateLimitMiddleware, auth_default);
app.use("/api/users", users_default);
app.use("/api/progress", progress_default);
app.use("/api/chats", chat_default);
app.use("/api/ai", aiRateLimitMiddleware, ai_default);
app.use("/api/quiz", quiz_default);
app.use("/api/assessment", assessment_default);
app.use("/api/learning-path", learning_path_default);
app.use("/api/wrong-questions", wrong_questions_default);
app.use("/api/study-time", study_time_default);
app.use("/api/achievements", achievements_default);
app.use("/api/learning-report", learning_report_default);
app.use("/api/analytics", analytics_default);
app.use("/api/diagnostic", diagnostic_default);
app.use("/api/ai-quiz", aiRateLimitMiddleware, ai_quiz_generator_default);
app.use("/api/intelligent-path", intelligent_path_default);
app.use("/api/learning-companion", aiRateLimitMiddleware, learning_companion_default);
app.use("/api/feedback", feedback_default);
app.use("/api/class", class_default);
app.use("/api/assignment", assignment_default);
app.use("/api/analytics-advanced", analytics_advanced_default);
app.use("/api/membership", membership_default);
app.use("/api/points", points_default);
app.use("/api/notification", notification_default);
app.use("/api/question", question_default);
app.use("/api/stats", stats_default);
app.use("/api/teacher-analytics", teacher_analytics_default);
app.use("/api/payment", payment_default);
app.get(
  "/api/auth/github",
  import_passport2.default.authenticate("github", { scope: ["user:email"], session: false })
);
app.get(
  "/api/auth/github/callback",
  import_passport2.default.authenticate("github", { failureRedirect: "/login", session: false }),
  (req, res) => {
    const user = req.user;
    const token = import_jsonwebtoken3.default.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    const frontendUrl = process.env.FRONTEND_URL;
    res.redirect(`${frontendUrl}/auth/callback?token=${token}`);
  }
);
app.get(
  "/api/auth/qq",
  import_passport2.default.authenticate("qq", { session: false })
);
app.get(
  "/api/auth/qq/callback",
  import_passport2.default.authenticate("qq", { failureRedirect: "/login", session: false }),
  (req, res) => {
    const user = req.user;
    const token = import_jsonwebtoken3.default.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    const frontendUrl = process.env.FRONTEND_URL;
    res.redirect(`${frontendUrl}/auth/callback?token=${token}`);
  }
);
app.get("/api/knowledge-points", async (req, res) => {
  try {
    const points = await KnowledgePoint_default.find({}).select("-content -contentFiles -quiz").lean();
    res.json(points);
  } catch (error) {
    res.status(500).json({ message: "\u83B7\u53D6\u77E5\u8BC6\u70B9\u65F6\u53D1\u751F\u9519\u8BEF" });
  }
});
app.get("/api/knowledge-points/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const point = await KnowledgePoint_default.findOne({ id }).lean();
    if (!point) {
      return res.status(404).json({ message: "\u77E5\u8BC6\u70B9\u4E0D\u5B58\u5728" });
    }
    res.json(point);
  } catch (error) {
    console.error("\u83B7\u53D6\u77E5\u8BC6\u70B9\u8BE6\u60C5\u5931\u8D25:", error);
    res.status(500).json({ message: "\u83B7\u53D6\u77E5\u8BC6\u70B9\u8BE6\u60C5\u65F6\u53D1\u751F\u9519\u8BEF" });
  }
});
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "\u667A\u5B66\u4F34\u540E\u7AEF\u670D\u52A1\u5DF2\u6210\u529F\u8FD0\u884C\uFF01",
    version: "2.0.0",
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
});
app.use(notFoundHandler);
app.use(errorHandler);
var src_default = app;
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`[SUCCESS] \u672C\u5730\u5F00\u53D1\u670D\u52A1\u5668\u5DF2\u542F\u52A8\uFF0C\u6B63\u5728\u76D1\u542C http://localhost:${PORT}`);
  });
}
//# sourceMappingURL=index.js.map
