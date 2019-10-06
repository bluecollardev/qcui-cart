import React__default, { Component, useState, useRef, useEffect, useCallback, useDebugValue, memo, forwardRef, PureComponent, createElement, isValidElement, cloneElement, createContext, createRef } from 'react';
import PropTypes__default, { object, string, func, array, node, arrayOf, shape, number, any } from 'prop-types';
import { unstable_batchedUpdates } from 'react-dom';
import domain from 'domain';
import { EventEmitter } from 'events';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "/* add css styles here (optional) */\n\n.styles_test__32Qsm {\n  display: inline-block;\n  margin: 2em auto;\n  border: 2px solid #000;\n  font-size: 2em;\n}\n";
var styles = { "test": "styles_test__32Qsm" };
styleInject(css);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var _class, _temp;

var ExampleComponent = (_temp = _class = function (_Component) {
  inherits(ExampleComponent, _Component);

  function ExampleComponent() {
    classCallCheck(this, ExampleComponent);
    return possibleConstructorReturn(this, (ExampleComponent.__proto__ || Object.getPrototypeOf(ExampleComponent)).apply(this, arguments));
  }

  createClass(ExampleComponent, [{
    key: 'render',
    value: function render() {
      var text = this.props.text;


      return React__default.createElement(
        'div',
        { className: styles.test },
        'Example Component: ',
        text
      );
    }
  }]);
  return ExampleComponent;
}(Component), _class.propTypes = {
  text: PropTypes__default.string
}, _class.defaultProps = {
  text: 'My Component'
}, _temp);

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

/** MobX - (c) Michel Weststrate 2015 - 2019 - MIT Licensed */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

var OBFUSCATED_ERROR = "An invariant failed, however the error is obfuscated because this is an production build.";
var EMPTY_ARRAY = [];
Object.freeze(EMPTY_ARRAY);
var EMPTY_OBJECT = {};
Object.freeze(EMPTY_OBJECT);
function getNextId() {
    return ++globalState.mobxGuid;
}
function fail(message) {
    invariant(false, message);
    throw "X"; // unreachable
}
function invariant(check, message) {
    if (!check)
        throw new Error("[mobx] " + (message || OBFUSCATED_ERROR));
}
/**
 * Prints a deprecation message, but only one time.
 * Returns false if the deprecated message was already printed before
 */
var deprecatedMessages = [];
function deprecated(msg, thing) {
    if (process.env.NODE_ENV === "production")
        return false;
    if (thing) {
        return deprecated("'" + msg + "', use '" + thing + "' instead.");
    }
    if (deprecatedMessages.indexOf(msg) !== -1)
        return false;
    deprecatedMessages.push(msg);
    console.error("[mobx] Deprecated: " + msg);
    return true;
}
/**
 * Makes sure that the provided function is invoked at most once.
 */
function once(func$$1) {
    var invoked = false;
    return function () {
        if (invoked)
            return;
        invoked = true;
        return func$$1.apply(this, arguments);
    };
}
var noop = function () { };
function unique(list) {
    var res = [];
    list.forEach(function (item) {
        if (res.indexOf(item) === -1)
            res.push(item);
    });
    return res;
}
function isObject(value) {
    return value !== null && typeof value === "object";
}
function isPlainObject(value) {
    if (value === null || typeof value !== "object")
        return false;
    var proto = Object.getPrototypeOf(value);
    return proto === Object.prototype || proto === null;
}
function addHiddenProp(object$$1, propName, value) {
    Object.defineProperty(object$$1, propName, {
        enumerable: false,
        writable: true,
        configurable: true,
        value: value
    });
}
function addHiddenFinalProp(object$$1, propName, value) {
    Object.defineProperty(object$$1, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value
    });
}
function isPropertyConfigurable(object$$1, prop) {
    var descriptor = Object.getOwnPropertyDescriptor(object$$1, prop);
    return !descriptor || (descriptor.configurable !== false && descriptor.writable !== false);
}
function assertPropertyConfigurable(object$$1, prop) {
    if (process.env.NODE_ENV !== "production" && !isPropertyConfigurable(object$$1, prop))
        fail("Cannot make property '" + prop.toString() + "' observable, it is not configurable and writable in the target object");
}
function createInstanceofPredicate(name, clazz) {
    var propName = "isMobX" + name;
    clazz.prototype[propName] = true;
    return function (x) {
        return isObject(x) && x[propName] === true;
    };
}
function isES6Map(thing) {
    return thing instanceof Map;
}
function isES6Set(thing) {
    return thing instanceof Set;
}
/**
 * Returns the following: own keys, prototype keys & own symbol keys, if they are enumerable.
 */
function getPlainObjectKeys(object$$1) {
    var enumerables = new Set();
    for (var key in object$$1)
        enumerables.add(key); // *all* enumerables
    Object.getOwnPropertySymbols(object$$1).forEach(function (k) {
        if (Object.getOwnPropertyDescriptor(object$$1, k).enumerable)
            enumerables.add(k);
    }); // *own* symbols
    // Note: this implementation is missing enumerable, inherited, symbolic property names! That would however pretty expensive to add,
    // as there is no efficient iterator that returns *all* properties
    return Array.from(enumerables);
}
function stringifyKey(key) {
    if (key && key.toString)
        return key.toString();
    else
        return new String(key).toString();
}
function getMapLikeKeys(map) {
    if (isPlainObject(map))
        return Object.keys(map);
    if (Array.isArray(map))
        return map.map(function (_a) {
            var _b = __read(_a, 1), key = _b[0];
            return key;
        });
    if (isES6Map(map) || isObservableMap(map))
        return Array.from(map.keys());
    return fail("Cannot get keys from '" + map + "'");
}
function toPrimitive(value) {
    return value === null ? null : typeof value === "object" ? "" + value : value;
}

var $mobx = Symbol("mobx administration");
var Atom = /** @class */ (function () {
    /**
     * Create a new atom. For debugging purposes it is recommended to give it a name.
     * The onBecomeObserved and onBecomeUnobserved callbacks can be used for resource management.
     */
    function Atom(name) {
        if (name === void 0) { name = "Atom@" + getNextId(); }
        this.name = name;
        this.isPendingUnobservation = false; // for effective unobserving. BaseAtom has true, for extra optimization, so its onBecomeUnobserved never gets called, because it's not needed
        this.isBeingObserved = false;
        this.observers = new Set();
        this.diffValue = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.NOT_TRACKING;
    }
    Atom.prototype.onBecomeObserved = function () {
        if (this.onBecomeObservedListeners) {
            this.onBecomeObservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    Atom.prototype.onBecomeUnobserved = function () {
        if (this.onBecomeUnobservedListeners) {
            this.onBecomeUnobservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    /**
     * Invoke this method to notify mobx that your atom has been used somehow.
     * Returns true if there is currently a reactive context.
     */
    Atom.prototype.reportObserved = function () {
        return reportObserved(this);
    };
    /**
     * Invoke this method _after_ this method has changed to signal mobx that all its observers should invalidate.
     */
    Atom.prototype.reportChanged = function () {
        startBatch();
        propagateChanged(this);
        endBatch();
    };
    Atom.prototype.toString = function () {
        return this.name;
    };
    return Atom;
}());
var isAtom = createInstanceofPredicate("Atom", Atom);
function createAtom(name, onBecomeObservedHandler, onBecomeUnobservedHandler) {
    if (onBecomeObservedHandler === void 0) { onBecomeObservedHandler = noop; }
    if (onBecomeUnobservedHandler === void 0) { onBecomeUnobservedHandler = noop; }
    var atom = new Atom(name);
    // default `noop` listener will not initialize the hook Set
    if (onBecomeObservedHandler !== noop) {
        onBecomeObserved(atom, onBecomeObservedHandler);
    }
    if (onBecomeUnobservedHandler !== noop) {
        onBecomeUnobserved(atom, onBecomeUnobservedHandler);
    }
    return atom;
}

function identityComparer(a, b) {
    return a === b;
}
function structuralComparer(a, b) {
    return deepEqual(a, b);
}
function defaultComparer(a, b) {
    return Object.is(a, b);
}
var comparer = {
    identity: identityComparer,
    structural: structuralComparer,
    default: defaultComparer
};

var mobxDidRunLazyInitializersSymbol = Symbol("mobx did run lazy initializers");
var mobxPendingDecorators = Symbol("mobx pending decorators");
var enumerableDescriptorCache = {};
var nonEnumerableDescriptorCache = {};
function createPropertyInitializerDescriptor(prop, enumerable) {
    var cache = enumerable ? enumerableDescriptorCache : nonEnumerableDescriptorCache;
    return (cache[prop] ||
        (cache[prop] = {
            configurable: true,
            enumerable: enumerable,
            get: function () {
                initializeInstance(this);
                return this[prop];
            },
            set: function (value) {
                initializeInstance(this);
                this[prop] = value;
            }
        }));
}
function initializeInstance(target) {
    if (target[mobxDidRunLazyInitializersSymbol] === true)
        return;
    var decorators = target[mobxPendingDecorators];
    if (decorators) {
        addHiddenProp(target, mobxDidRunLazyInitializersSymbol, true);
        for (var key in decorators) {
            var d = decorators[key];
            d.propertyCreator(target, d.prop, d.descriptor, d.decoratorTarget, d.decoratorArguments);
        }
    }
}
function createPropDecorator(propertyInitiallyEnumerable, propertyCreator) {
    return function decoratorFactory() {
        var decoratorArguments;
        var decorator = function decorate(target, prop, descriptor, applyImmediately
        // This is a special parameter to signal the direct application of a decorator, allow extendObservable to skip the entire type decoration part,
        // as the instance to apply the decorator to equals the target
        ) {
            if (applyImmediately === true) {
                propertyCreator(target, prop, descriptor, target, decoratorArguments);
                return null;
            }
            if (process.env.NODE_ENV !== "production" && !quacksLikeADecorator(arguments))
                fail("This function is a decorator, but it wasn't invoked like a decorator");
            if (!Object.prototype.hasOwnProperty.call(target, mobxPendingDecorators)) {
                var inheritedDecorators = target[mobxPendingDecorators];
                addHiddenProp(target, mobxPendingDecorators, __assign({}, inheritedDecorators));
            }
            target[mobxPendingDecorators][prop] = {
                prop: prop,
                propertyCreator: propertyCreator,
                descriptor: descriptor,
                decoratorTarget: target,
                decoratorArguments: decoratorArguments
            };
            return createPropertyInitializerDescriptor(prop, propertyInitiallyEnumerable);
        };
        if (quacksLikeADecorator(arguments)) {
            // @decorator
            decoratorArguments = EMPTY_ARRAY;
            return decorator.apply(null, arguments);
        }
        else {
            // @decorator(args)
            decoratorArguments = Array.prototype.slice.call(arguments);
            return decorator;
        }
    };
}
function quacksLikeADecorator(args) {
    return (((args.length === 2 || args.length === 3) && typeof args[1] === "string") ||
        (args.length === 4 && args[3] === true));
}

function deepEnhancer(v, _, name) {
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    if (Array.isArray(v))
        return observable.array(v, { name: name });
    if (isPlainObject(v))
        return observable.object(v, undefined, { name: name });
    if (isES6Map(v))
        return observable.map(v, { name: name });
    if (isES6Set(v))
        return observable.set(v, { name: name });
    return v;
}
function shallowEnhancer(v, _, name) {
    if (v === undefined || v === null)
        return v;
    if (isObservableObject(v) || isObservableArray(v) || isObservableMap(v) || isObservableSet(v))
        return v;
    if (Array.isArray(v))
        return observable.array(v, { name: name, deep: false });
    if (isPlainObject(v))
        return observable.object(v, undefined, { name: name, deep: false });
    if (isES6Map(v))
        return observable.map(v, { name: name, deep: false });
    if (isES6Set(v))
        return observable.set(v, { name: name, deep: false });
    return fail(process.env.NODE_ENV !== "production" &&
        "The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}
function referenceEnhancer(newValue) {
    // never turn into an observable
    return newValue;
}
function refStructEnhancer(v, oldValue, name) {
    if (process.env.NODE_ENV !== "production" && isObservable(v))
        throw "observable.struct should not be used with observable values";
    if (deepEqual(v, oldValue))
        return oldValue;
    return v;
}

function createDecoratorForEnhancer(enhancer) {
    invariant(enhancer);
    var decorator = createPropDecorator(true, function (target, propertyName, descriptor, _decoratorTarget, decoratorArgs) {
        if (process.env.NODE_ENV !== "production") {
            invariant(!descriptor || !descriptor.get, "@observable cannot be used on getter (property \"" + stringifyKey(propertyName) + "\"), use @computed instead.");
        }
        var initialValue = descriptor
            ? descriptor.initializer
                ? descriptor.initializer.call(target)
                : descriptor.value
            : undefined;
        asObservableObject(target).addObservableProp(propertyName, initialValue, enhancer);
    });
    var res = 
    // Extra process checks, as this happens during module initialization
    typeof process !== "undefined" && process.env && process.env.NODE_ENV !== "production"
        ? function observableDecorator() {
            // This wrapper function is just to detect illegal decorator invocations, deprecate in a next version
            // and simply return the created prop decorator
            if (arguments.length < 2)
                return fail("Incorrect decorator invocation. @observable decorator doesn't expect any arguments");
            return decorator.apply(null, arguments);
        }
        : decorator;
    res.enhancer = enhancer;
    return res;
}

// Predefined bags of create observable options, to avoid allocating temporarily option objects
// in the majority of cases
var defaultCreateObservableOptions = {
    deep: true,
    name: undefined,
    defaultDecorator: undefined,
    proxy: true
};
Object.freeze(defaultCreateObservableOptions);
function assertValidOption(key) {
    if (!/^(deep|name|equals|defaultDecorator|proxy)$/.test(key))
        fail("invalid option for (extend)observable: " + key);
}
function asCreateObservableOptions(thing) {
    if (thing === null || thing === undefined)
        return defaultCreateObservableOptions;
    if (typeof thing === "string")
        return { name: thing, deep: true, proxy: true };
    if (process.env.NODE_ENV !== "production") {
        if (typeof thing !== "object")
            return fail("expected options object");
        Object.keys(thing).forEach(assertValidOption);
    }
    return thing;
}
var deepDecorator = createDecoratorForEnhancer(deepEnhancer);
var shallowDecorator = createDecoratorForEnhancer(shallowEnhancer);
var refDecorator = createDecoratorForEnhancer(referenceEnhancer);
var refStructDecorator = createDecoratorForEnhancer(refStructEnhancer);
function getEnhancerFromOptions(options) {
    return options.defaultDecorator
        ? options.defaultDecorator.enhancer
        : options.deep === false
            ? referenceEnhancer
            : deepEnhancer;
}
/**
 * Turns an object, array or function into a reactive structure.
 * @param v the value which should become observable.
 */
function createObservable(v, arg2, arg3) {
    // @observable someProp;
    if (typeof arguments[1] === "string") {
        return deepDecorator.apply(null, arguments);
    }
    // it is an observable already, done
    if (isObservable(v))
        return v;
    // something that can be converted and mutated?
    var res = isPlainObject(v)
        ? observable.object(v, arg2, arg3)
        : Array.isArray(v)
            ? observable.array(v, arg2)
            : isES6Map(v)
                ? observable.map(v, arg2)
                : isES6Set(v)
                    ? observable.set(v, arg2)
                    : v;
    // this value could be converted to a new observable data structure, return it
    if (res !== v)
        return res;
    // otherwise, just box it
    fail(process.env.NODE_ENV !== "production" &&
        "The provided value could not be converted into an observable. If you want just create an observable reference to the object use 'observable.box(value)'");
}
var observableFactories = {
    box: function (value, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("box");
        var o = asCreateObservableOptions(options);
        return new ObservableValue(value, getEnhancerFromOptions(o), o.name, true, o.equals);
    },
    array: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("array");
        var o = asCreateObservableOptions(options);
        return createObservableArray(initialValues, getEnhancerFromOptions(o), o.name);
    },
    map: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("map");
        var o = asCreateObservableOptions(options);
        return new ObservableMap(initialValues, getEnhancerFromOptions(o), o.name);
    },
    set: function (initialValues, options) {
        if (arguments.length > 2)
            incorrectlyUsedAsDecorator("set");
        var o = asCreateObservableOptions(options);
        return new ObservableSet(initialValues, getEnhancerFromOptions(o), o.name);
    },
    object: function (props, decorators, options) {
        if (typeof arguments[1] === "string")
            incorrectlyUsedAsDecorator("object");
        var o = asCreateObservableOptions(options);
        if (o.proxy === false) {
            return extendObservable({}, props, decorators, o);
        }
        else {
            var defaultDecorator = getDefaultDecoratorFromObjectOptions(o);
            var base = extendObservable({}, undefined, undefined, o);
            var proxy = createDynamicObservableObject(base);
            extendObservableObjectWithProperties(proxy, props, decorators, defaultDecorator);
            return proxy;
        }
    },
    ref: refDecorator,
    shallow: shallowDecorator,
    deep: deepDecorator,
    struct: refStructDecorator
};
var observable = createObservable;
// weird trick to keep our typings nicely with our funcs, and still extend the observable function
Object.keys(observableFactories).forEach(function (name) { return (observable[name] = observableFactories[name]); });
function incorrectlyUsedAsDecorator(methodName) {
    fail(
    // process.env.NODE_ENV !== "production" &&
    "Expected one or two arguments to observable." + methodName + ". Did you accidentally try to use observable." + methodName + " as decorator?");
}

var computedDecorator = createPropDecorator(false, function (instance, propertyName, descriptor, decoratorTarget, decoratorArgs) {
    var get = descriptor.get, set = descriptor.set; // initialValue is the descriptor for get / set props
    // Optimization: faster on decorator target or instance? Assuming target
    // Optimization: find out if declaring on instance isn't just faster. (also makes the property descriptor simpler). But, more memory usage..
    // Forcing instance now, fixes hot reloadig issues on React Native:
    var options = decoratorArgs[0] || {};
    asObservableObject(instance).addComputedProp(instance, propertyName, __assign({ get: get,
        set: set, context: instance }, options));
});
var computedStructDecorator = computedDecorator({ equals: comparer.structural });

var IDerivationState;
(function (IDerivationState) {
    // before being run or (outside batch and not being observed)
    // at this point derivation is not holding any data about dependency tree
    IDerivationState[IDerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING";
    // no shallow dependency changed since last computation
    // won't recalculate derivation
    // this is what makes mobx fast
    IDerivationState[IDerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    // some deep dependency changed, but don't know if shallow dependency changed
    // will require to check first if UP_TO_DATE or POSSIBLY_STALE
    // currently only ComputedValue will propagate POSSIBLY_STALE
    //
    // having this state is second big optimization:
    // don't have to recompute on every dependency change, but only when it's needed
    IDerivationState[IDerivationState["POSSIBLY_STALE"] = 1] = "POSSIBLY_STALE";
    // A shallow dependency has changed since last computation and the derivation
    // will need to recompute when it's needed next.
    IDerivationState[IDerivationState["STALE"] = 2] = "STALE";
})(IDerivationState || (IDerivationState = {}));
var TraceMode;
(function (TraceMode) {
    TraceMode[TraceMode["NONE"] = 0] = "NONE";
    TraceMode[TraceMode["LOG"] = 1] = "LOG";
    TraceMode[TraceMode["BREAK"] = 2] = "BREAK";
})(TraceMode || (TraceMode = {}));
var CaughtException = /** @class */ (function () {
    function CaughtException(cause) {
        this.cause = cause;
        // Empty
    }
    return CaughtException;
}());
function isCaughtException(e) {
    return e instanceof CaughtException;
}
/**
 * Finds out whether any dependency of the derivation has actually changed.
 * If dependenciesState is 1 then it will recalculate dependencies,
 * if any dependency changed it will propagate it by changing dependenciesState to 2.
 *
 * By iterating over the dependencies in the same order that they were reported and
 * stopping on the first change, all the recalculations are only called for ComputedValues
 * that will be tracked by derivation. That is because we assume that if the first x
 * dependencies of the derivation doesn't change then the derivation should run the same way
 * up until accessing x-th dependency.
 */
function shouldCompute(derivation) {
    switch (derivation.dependenciesState) {
        case IDerivationState.UP_TO_DATE:
            return false;
        case IDerivationState.NOT_TRACKING:
        case IDerivationState.STALE:
            return true;
        case IDerivationState.POSSIBLY_STALE: {
            var prevUntracked = untrackedStart(); // no need for those computeds to be reported, they will be picked up in trackDerivedFunction.
            var obs = derivation.observing, l = obs.length;
            for (var i = 0; i < l; i++) {
                var obj = obs[i];
                if (isComputedValue(obj)) {
                    if (globalState.disableErrorBoundaries) {
                        obj.get();
                    }
                    else {
                        try {
                            obj.get();
                        }
                        catch (e) {
                            // we are not interested in the value *or* exception at this moment, but if there is one, notify all
                            untrackedEnd(prevUntracked);
                            return true;
                        }
                    }
                    // if ComputedValue `obj` actually changed it will be computed and propagated to its observers.
                    // and `derivation` is an observer of `obj`
                    // invariantShouldCompute(derivation)
                    if (derivation.dependenciesState === IDerivationState.STALE) {
                        untrackedEnd(prevUntracked);
                        return true;
                    }
                }
            }
            changeDependenciesStateTo0(derivation);
            untrackedEnd(prevUntracked);
            return false;
        }
    }
}
function checkIfStateModificationsAreAllowed(atom) {
    var hasObservers = atom.observers.size > 0;
    // Should never be possible to change an observed observable from inside computed, see #798
    if (globalState.computationDepth > 0 && hasObservers)
        fail(process.env.NODE_ENV !== "production" &&
            "Computed values are not allowed to cause side effects by changing observables that are already being observed. Tried to modify: " + atom.name);
    // Should not be possible to change observed state outside strict mode, except during initialization, see #563
    if (!globalState.allowStateChanges && (hasObservers || globalState.enforceActions === "strict"))
        fail(process.env.NODE_ENV !== "production" &&
            (globalState.enforceActions
                ? "Since strict-mode is enabled, changing observed observable values outside actions is not allowed. Please wrap the code in an `action` if this change is intended. Tried to modify: "
                : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, the render function of a React component? Tried to modify: ") +
                atom.name);
}
function checkIfStateReadsAreAllowed(observable) {
    if (process.env.NODE_ENV !== "production" &&
        !globalState.allowStateReads &&
        globalState.observableRequiresReaction) {
        console.warn("[mobx] Observable " + observable.name + " being read outside a reactive context");
    }
}
/**
 * Executes the provided function `f` and tracks which observables are being accessed.
 * The tracking information is stored on the `derivation` object and the derivation is registered
 * as observer of any of the accessed observables.
 */
function trackDerivedFunction(derivation, f, context) {
    var prevAllowStateReads = allowStateReadsStart(true);
    // pre allocate array allocation + room for variation in deps
    // array will be trimmed by bindDependencies
    changeDependenciesStateTo0(derivation);
    derivation.newObserving = new Array(derivation.observing.length + 100);
    derivation.unboundDepsCount = 0;
    derivation.runId = ++globalState.runId;
    var prevTracking = globalState.trackingDerivation;
    globalState.trackingDerivation = derivation;
    var result;
    if (globalState.disableErrorBoundaries === true) {
        result = f.call(context);
    }
    else {
        try {
            result = f.call(context);
        }
        catch (e) {
            result = new CaughtException(e);
        }
    }
    globalState.trackingDerivation = prevTracking;
    bindDependencies(derivation);
    warnAboutDerivationWithoutDependencies(derivation);
    allowStateReadsEnd(prevAllowStateReads);
    return result;
}
function warnAboutDerivationWithoutDependencies(derivation) {
    if (process.env.NODE_ENV === "production")
        return;
    if (derivation.observing.length !== 0)
        return;
    if (globalState.reactionRequiresObservable || derivation.requiresObservable) {
        console.warn("[mobx] Derivation " + derivation.name + " is created/updated without reading any observable value");
    }
}
/**
 * diffs newObserving with observing.
 * update observing to be newObserving with unique observables
 * notify observers that become observed/unobserved
 */
function bindDependencies(derivation) {
    // invariant(derivation.dependenciesState !== IDerivationState.NOT_TRACKING, "INTERNAL ERROR bindDependencies expects derivation.dependenciesState !== -1");
    var prevObserving = derivation.observing;
    var observing = (derivation.observing = derivation.newObserving);
    var lowestNewObservingDerivationState = IDerivationState.UP_TO_DATE;
    // Go through all new observables and check diffValue: (this list can contain duplicates):
    //   0: first occurrence, change to 1 and keep it
    //   1: extra occurrence, drop it
    var i0 = 0, l = derivation.unboundDepsCount;
    for (var i = 0; i < l; i++) {
        var dep = observing[i];
        if (dep.diffValue === 0) {
            dep.diffValue = 1;
            if (i0 !== i)
                observing[i0] = dep;
            i0++;
        }
        // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
        // not hitting the condition
        if (dep.dependenciesState > lowestNewObservingDerivationState) {
            lowestNewObservingDerivationState = dep.dependenciesState;
        }
    }
    observing.length = i0;
    derivation.newObserving = null; // newObserving shouldn't be needed outside tracking (statement moved down to work around FF bug, see #614)
    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
    //   0: it's not in new observables, unobserve it
    //   1: it keeps being observed, don't want to notify it. change to 0
    l = prevObserving.length;
    while (l--) {
        var dep = prevObserving[l];
        if (dep.diffValue === 0) {
            removeObserver(dep, derivation);
        }
        dep.diffValue = 0;
    }
    // Go through all new observables and check diffValue: (now it should be unique)
    //   0: it was set to 0 in last loop. don't need to do anything.
    //   1: it wasn't observed, let's observe it. set back to 0
    while (i0--) {
        var dep = observing[i0];
        if (dep.diffValue === 1) {
            dep.diffValue = 0;
            addObserver(dep, derivation);
        }
    }
    // Some new observed derivations may become stale during this derivation computation
    // so they have had no chance to propagate staleness (#916)
    if (lowestNewObservingDerivationState !== IDerivationState.UP_TO_DATE) {
        derivation.dependenciesState = lowestNewObservingDerivationState;
        derivation.onBecomeStale();
    }
}
function clearObserving(derivation) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR clearObserving should be called only inside batch");
    var obs = derivation.observing;
    derivation.observing = [];
    var i = obs.length;
    while (i--)
        removeObserver(obs[i], derivation);
    derivation.dependenciesState = IDerivationState.NOT_TRACKING;
}
function untracked(action) {
    var prev = untrackedStart();
    try {
        return action();
    }
    finally {
        untrackedEnd(prev);
    }
}
function untrackedStart() {
    var prev = globalState.trackingDerivation;
    globalState.trackingDerivation = null;
    return prev;
}
function untrackedEnd(prev) {
    globalState.trackingDerivation = prev;
}
function allowStateReadsStart(allowStateReads) {
    var prev = globalState.allowStateReads;
    globalState.allowStateReads = allowStateReads;
    return prev;
}
function allowStateReadsEnd(prev) {
    globalState.allowStateReads = prev;
}
/**
 * needed to keep `lowestObserverState` correct. when changing from (2 or 1) to 0
 *
 */
function changeDependenciesStateTo0(derivation) {
    if (derivation.dependenciesState === IDerivationState.UP_TO_DATE)
        return;
    derivation.dependenciesState = IDerivationState.UP_TO_DATE;
    var obs = derivation.observing;
    var i = obs.length;
    while (i--)
        obs[i].lowestObserverState = IDerivationState.UP_TO_DATE;
}

function createAction(actionName, fn, ref) {
    if (process.env.NODE_ENV !== "production") {
        invariant(typeof fn === "function", "`action` can only be invoked on functions");
        if (typeof actionName !== "string" || !actionName)
            fail("actions should have valid names, got: '" + actionName + "'");
    }
    var res = function () {
        return executeAction(actionName, fn, ref || this, arguments);
    };
    res.isMobxAction = true;
    return res;
}
function executeAction(actionName, fn, scope, args) {
    var runInfo = _startAction(actionName, scope, args);
    try {
        return fn.apply(scope, args);
    }
    catch (err) {
        runInfo.error = err;
        throw err;
    }
    finally {
        _endAction(runInfo);
    }
}
function _startAction(actionName, scope, args) {
    var notifySpy = isSpyEnabled() && !!actionName;
    var startTime = 0;
    if (notifySpy && process.env.NODE_ENV !== "production") {
        startTime = Date.now();
        var l = (args && args.length) || 0;
        var flattendArgs = new Array(l);
        if (l > 0)
            for (var i = 0; i < l; i++)
                flattendArgs[i] = args[i];
        spyReportStart({
            type: "action",
            name: actionName,
            object: scope,
            arguments: flattendArgs
        });
    }
    var prevDerivation = untrackedStart();
    startBatch();
    var prevAllowStateChanges = allowStateChangesStart(true);
    var prevAllowStateReads = allowStateReadsStart(true);
    var runInfo = {
        prevDerivation: prevDerivation,
        prevAllowStateChanges: prevAllowStateChanges,
        prevAllowStateReads: prevAllowStateReads,
        notifySpy: notifySpy,
        startTime: startTime,
        actionId: globalState.nextActionId++,
        parentActionId: globalState.currentActionId
    };
    globalState.currentActionId = runInfo.actionId;
    return runInfo;
}
function _endAction(runInfo) {
    if (globalState.currentActionId !== runInfo.actionId) {
        fail("invalid action stack. did you forget to finish an action?");
    }
    globalState.currentActionId = runInfo.parentActionId;
    if (runInfo.error !== undefined) {
        globalState.suppressReactionErrors = true;
    }
    allowStateChangesEnd(runInfo.prevAllowStateChanges);
    allowStateReadsEnd(runInfo.prevAllowStateReads);
    endBatch();
    untrackedEnd(runInfo.prevDerivation);
    if (runInfo.notifySpy && process.env.NODE_ENV !== "production") {
        spyReportEnd({ time: Date.now() - runInfo.startTime });
    }
    globalState.suppressReactionErrors = false;
}
function allowStateChanges(allowStateChanges, func$$1) {
    var prev = allowStateChangesStart(allowStateChanges);
    var res;
    try {
        res = func$$1();
    }
    finally {
        allowStateChangesEnd(prev);
    }
    return res;
}
function allowStateChangesStart(allowStateChanges) {
    var prev = globalState.allowStateChanges;
    globalState.allowStateChanges = allowStateChanges;
    return prev;
}
function allowStateChangesEnd(prev) {
    globalState.allowStateChanges = prev;
}

var ObservableValue = /** @class */ (function (_super) {
    __extends(ObservableValue, _super);
    function ObservableValue(value, enhancer, name, notifySpy, equals) {
        if (name === void 0) { name = "ObservableValue@" + getNextId(); }
        if (notifySpy === void 0) { notifySpy = true; }
        if (equals === void 0) { equals = comparer.default; }
        var _this = _super.call(this, name) || this;
        _this.enhancer = enhancer;
        _this.name = name;
        _this.equals = equals;
        _this.hasUnreportedChange = false;
        _this.value = enhancer(value, undefined, name);
        if (notifySpy && isSpyEnabled() && process.env.NODE_ENV !== "production") {
            // only notify spy if this is a stand-alone observable
            spyReport({ type: "create", name: _this.name, newValue: "" + _this.value });
        }
        return _this;
    }
    ObservableValue.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableValue.prototype.set = function (newValue) {
        var oldValue = this.value;
        newValue = this.prepareNewValue(newValue);
        if (newValue !== globalState.UNCHANGED) {
            var notifySpy = isSpyEnabled();
            if (notifySpy && process.env.NODE_ENV !== "production") {
                spyReportStart({
                    type: "update",
                    name: this.name,
                    newValue: newValue,
                    oldValue: oldValue
                });
            }
            this.setNewValue(newValue);
            if (notifySpy && process.env.NODE_ENV !== "production")
                spyReportEnd();
        }
    };
    ObservableValue.prototype.prepareNewValue = function (newValue) {
        checkIfStateModificationsAreAllowed(this);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this,
                type: "update",
                newValue: newValue
            });
            if (!change)
                return globalState.UNCHANGED;
            newValue = change.newValue;
        }
        // apply modifier
        newValue = this.enhancer(newValue, this.value, this.name);
        return this.equals(this.value, newValue) ? globalState.UNCHANGED : newValue;
    };
    ObservableValue.prototype.setNewValue = function (newValue) {
        var oldValue = this.value;
        this.value = newValue;
        this.reportChanged();
        if (hasListeners(this)) {
            notifyListeners(this, {
                type: "update",
                object: this,
                newValue: newValue,
                oldValue: oldValue
            });
        }
    };
    ObservableValue.prototype.get = function () {
        this.reportObserved();
        return this.dehanceValue(this.value);
    };
    ObservableValue.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableValue.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately)
            listener({
                object: this,
                type: "update",
                newValue: this.value,
                oldValue: undefined
            });
        return registerListener(this, listener);
    };
    ObservableValue.prototype.toJSON = function () {
        return this.get();
    };
    ObservableValue.prototype.toString = function () {
        return this.name + "[" + this.value + "]";
    };
    ObservableValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    ObservableValue.prototype[Symbol.toPrimitive] = function () {
        return this.valueOf();
    };
    return ObservableValue;
}(Atom));
var isObservableValue = createInstanceofPredicate("ObservableValue", ObservableValue);

/**
 * A node in the state dependency root that observes other nodes, and can be observed itself.
 *
 * ComputedValue will remember the result of the computation for the duration of the batch, or
 * while being observed.
 *
 * During this time it will recompute only when one of its direct dependencies changed,
 * but only when it is being accessed with `ComputedValue.get()`.
 *
 * Implementation description:
 * 1. First time it's being accessed it will compute and remember result
 *    give back remembered result until 2. happens
 * 2. First time any deep dependency change, propagate POSSIBLY_STALE to all observers, wait for 3.
 * 3. When it's being accessed, recompute if any shallow dependency changed.
 *    if result changed: propagate STALE to all observers, that were POSSIBLY_STALE from the last step.
 *    go to step 2. either way
 *
 * If at any point it's outside batch and it isn't observed: reset everything and go to 1.
 */
var ComputedValue = /** @class */ (function () {
    /**
     * Create a new computed value based on a function expression.
     *
     * The `name` property is for debug purposes only.
     *
     * The `equals` property specifies the comparer function to use to determine if a newly produced
     * value differs from the previous value. Two comparers are provided in the library; `defaultComparer`
     * compares based on identity comparison (===), and `structualComparer` deeply compares the structure.
     * Structural comparison can be convenient if you always produce a new aggregated object and
     * don't want to notify observers if it is structurally the same.
     * This is useful for working with vectors, mouse coordinates etc.
     */
    function ComputedValue(options) {
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = null; // during tracking it's an array with new observed observers
        this.isBeingObserved = false;
        this.isPendingUnobservation = false;
        this.observers = new Set();
        this.diffValue = 0;
        this.runId = 0;
        this.lastAccessedBy = 0;
        this.lowestObserverState = IDerivationState.UP_TO_DATE;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.value = new CaughtException(null);
        this.isComputing = false; // to check for cycles
        this.isRunningSetter = false;
        this.isTracing = TraceMode.NONE;
        if (process.env.NODE_ENV !== "production" && !options.get)
            throw "[mobx] missing option for computed: get";
        this.derivation = options.get;
        this.name = options.name || "ComputedValue@" + getNextId();
        if (options.set)
            this.setter = createAction(this.name + "-setter", options.set);
        this.equals =
            options.equals ||
                (options.compareStructural || options.struct
                    ? comparer.structural
                    : comparer.default);
        this.scope = options.context;
        this.requiresReaction = !!options.requiresReaction;
        this.keepAlive = !!options.keepAlive;
    }
    ComputedValue.prototype.onBecomeStale = function () {
        propagateMaybeChanged(this);
    };
    ComputedValue.prototype.onBecomeObserved = function () {
        if (this.onBecomeObservedListeners) {
            this.onBecomeObservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    ComputedValue.prototype.onBecomeUnobserved = function () {
        if (this.onBecomeUnobservedListeners) {
            this.onBecomeUnobservedListeners.forEach(function (listener) { return listener(); });
        }
    };
    /**
     * Returns the current value of this computed value.
     * Will evaluate its computation first if needed.
     */
    ComputedValue.prototype.get = function () {
        if (this.isComputing)
            fail("Cycle detected in computation " + this.name + ": " + this.derivation);
        if (globalState.inBatch === 0 && this.observers.size === 0 && !this.keepAlive) {
            if (shouldCompute(this)) {
                this.warnAboutUntrackedRead();
                startBatch(); // See perf test 'computed memoization'
                this.value = this.computeValue(false);
                endBatch();
            }
        }
        else {
            reportObserved(this);
            if (shouldCompute(this))
                if (this.trackAndCompute())
                    propagateChangeConfirmed(this);
        }
        var result = this.value;
        if (isCaughtException(result))
            throw result.cause;
        return result;
    };
    ComputedValue.prototype.peek = function () {
        var res = this.computeValue(false);
        if (isCaughtException(res))
            throw res.cause;
        return res;
    };
    ComputedValue.prototype.set = function (value) {
        if (this.setter) {
            invariant(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?");
            this.isRunningSetter = true;
            try {
                this.setter.call(this.scope, value);
            }
            finally {
                this.isRunningSetter = false;
            }
        }
        else
            invariant(false, process.env.NODE_ENV !== "production" &&
                "[ComputedValue '" + this.name + "'] It is not possible to assign a new value to a computed value.");
    };
    ComputedValue.prototype.trackAndCompute = function () {
        if (isSpyEnabled() && process.env.NODE_ENV !== "production") {
            spyReport({
                object: this.scope,
                type: "compute",
                name: this.name
            });
        }
        var oldValue = this.value;
        var wasSuspended = 
        /* see #1208 */ this.dependenciesState === IDerivationState.NOT_TRACKING;
        var newValue = this.computeValue(true);
        var changed = wasSuspended ||
            isCaughtException(oldValue) ||
            isCaughtException(newValue) ||
            !this.equals(oldValue, newValue);
        if (changed) {
            this.value = newValue;
        }
        return changed;
    };
    ComputedValue.prototype.computeValue = function (track) {
        this.isComputing = true;
        globalState.computationDepth++;
        var res;
        if (track) {
            res = trackDerivedFunction(this, this.derivation, this.scope);
        }
        else {
            if (globalState.disableErrorBoundaries === true) {
                res = this.derivation.call(this.scope);
            }
            else {
                try {
                    res = this.derivation.call(this.scope);
                }
                catch (e) {
                    res = new CaughtException(e);
                }
            }
        }
        globalState.computationDepth--;
        this.isComputing = false;
        return res;
    };
    ComputedValue.prototype.suspend = function () {
        if (!this.keepAlive) {
            clearObserving(this);
            this.value = undefined; // don't hold on to computed value!
        }
    };
    ComputedValue.prototype.observe = function (listener, fireImmediately) {
        var _this = this;
        var firstTime = true;
        var prevValue = undefined;
        return autorun(function () {
            var newValue = _this.get();
            if (!firstTime || fireImmediately) {
                var prevU = untrackedStart();
                listener({
                    type: "update",
                    object: _this,
                    newValue: newValue,
                    oldValue: prevValue
                });
                untrackedEnd(prevU);
            }
            firstTime = false;
            prevValue = newValue;
        });
    };
    ComputedValue.prototype.warnAboutUntrackedRead = function () {
        if (process.env.NODE_ENV === "production")
            return;
        if (this.requiresReaction === true) {
            fail("[mobx] Computed value " + this.name + " is read outside a reactive context");
        }
        if (this.isTracing !== TraceMode.NONE) {
            console.log("[mobx.trace] '" + this.name + "' is being read outside a reactive context. Doing a full recompute");
        }
        if (globalState.computedRequiresReaction) {
            console.warn("[mobx] Computed value " + this.name + " is being read outside a reactive context. Doing a full recompute");
        }
    };
    ComputedValue.prototype.toJSON = function () {
        return this.get();
    };
    ComputedValue.prototype.toString = function () {
        return this.name + "[" + this.derivation.toString() + "]";
    };
    ComputedValue.prototype.valueOf = function () {
        return toPrimitive(this.get());
    };
    ComputedValue.prototype[Symbol.toPrimitive] = function () {
        return this.valueOf();
    };
    return ComputedValue;
}());
var isComputedValue = createInstanceofPredicate("ComputedValue", ComputedValue);
var MobXGlobals = /** @class */ (function () {
    function MobXGlobals() {
        /**
         * MobXGlobals version.
         * MobX compatiblity with other versions loaded in memory as long as this version matches.
         * It indicates that the global state still stores similar information
         *
         * N.B: this version is unrelated to the package version of MobX, and is only the version of the
         * internal state storage of MobX, and can be the same across many different package versions
         */
        this.version = 5;
        /**
         * globally unique token to signal unchanged
         */
        this.UNCHANGED = {};
        /**
         * Currently running derivation
         */
        this.trackingDerivation = null;
        /**
         * Are we running a computation currently? (not a reaction)
         */
        this.computationDepth = 0;
        /**
         * Each time a derivation is tracked, it is assigned a unique run-id
         */
        this.runId = 0;
        /**
         * 'guid' for general purpose. Will be persisted amongst resets.
         */
        this.mobxGuid = 0;
        /**
         * Are we in a batch block? (and how many of them)
         */
        this.inBatch = 0;
        /**
         * Observables that don't have observers anymore, and are about to be
         * suspended, unless somebody else accesses it in the same batch
         *
         * @type {IObservable[]}
         */
        this.pendingUnobservations = [];
        /**
         * List of scheduled, not yet executed, reactions.
         */
        this.pendingReactions = [];
        /**
         * Are we currently processing reactions?
         */
        this.isRunningReactions = false;
        /**
         * Is it allowed to change observables at this point?
         * In general, MobX doesn't allow that when running computations and React.render.
         * To ensure that those functions stay pure.
         */
        this.allowStateChanges = true;
        /**
         * Is it allowed to read observables at this point?
         * Used to hold the state needed for `observableRequiresReaction`
         */
        this.allowStateReads = true;
        /**
         * If strict mode is enabled, state changes are by default not allowed
         */
        this.enforceActions = false;
        /**
         * Spy callbacks
         */
        this.spyListeners = [];
        /**
         * Globally attached error handlers that react specifically to errors in reactions
         */
        this.globalReactionErrorHandlers = [];
        /**
         * Warn if computed values are accessed outside a reactive context
         */
        this.computedRequiresReaction = false;
        /**
         * (Experimental)
         * Warn if you try to create to derivation / reactive context without accessing any observable.
         */
        this.reactionRequiresObservable = false;
        /**
         * (Experimental)
         * Warn if observables are accessed outside a reactive context
         */
        this.observableRequiresReaction = false;
        /**
         * Allows overwriting of computed properties, useful in tests but not prod as it can cause
         * memory leaks. See https://github.com/mobxjs/mobx/issues/1867
         */
        this.computedConfigurable = false;
        /*
         * Don't catch and rethrow exceptions. This is useful for inspecting the state of
         * the stack when an exception occurs while debugging.
         */
        this.disableErrorBoundaries = false;
        /*
         * If true, we are already handling an exception in an action. Any errors in reactions should be suppressed, as
         * they are not the cause, see: https://github.com/mobxjs/mobx/issues/1836
         */
        this.suppressReactionErrors = false;
        /*
         * Current action id.
         */
        this.currentActionId = 0;
        /*
         * Next action id.
         */
        this.nextActionId = 1;
    }
    return MobXGlobals;
}());
var canMergeGlobalState = true;
var isolateCalled = false;
var globalState = (function () {
    var global = getGlobal();
    if (global.__mobxInstanceCount > 0 && !global.__mobxGlobals)
        canMergeGlobalState = false;
    if (global.__mobxGlobals && global.__mobxGlobals.version !== new MobXGlobals().version)
        canMergeGlobalState = false;
    if (!canMergeGlobalState) {
        setTimeout(function () {
            if (!isolateCalled) {
                fail("There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`");
            }
        }, 1);
        return new MobXGlobals();
    }
    else if (global.__mobxGlobals) {
        global.__mobxInstanceCount += 1;
        if (!global.__mobxGlobals.UNCHANGED)
            global.__mobxGlobals.UNCHANGED = {}; // make merge backward compatible
        return global.__mobxGlobals;
    }
    else {
        global.__mobxInstanceCount = 1;
        return (global.__mobxGlobals = new MobXGlobals());
    }
})();
function isolateGlobalState() {
    if (globalState.pendingReactions.length ||
        globalState.inBatch ||
        globalState.isRunningReactions)
        fail("isolateGlobalState should be called before MobX is running any reactions");
    isolateCalled = true;
    if (canMergeGlobalState) {
        if (--getGlobal().__mobxInstanceCount === 0)
            getGlobal().__mobxGlobals = undefined;
        globalState = new MobXGlobals();
    }
}
var mockGlobal = {};
function getGlobal() {
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    return mockGlobal;
}
// function invariantObservers(observable: IObservable) {
//     const list = observable.observers
//     const map = observable.observersIndexes
//     const l = list.length
//     for (let i = 0; i < l; i++) {
//         const id = list[i].__mapid
//         if (i) {
//             invariant(map[id] === i, "INTERNAL ERROR maps derivation.__mapid to index in list") // for performance
//         } else {
//             invariant(!(id in map), "INTERNAL ERROR observer on index 0 shouldn't be held in map.") // for performance
//         }
//     }
//     invariant(
//         list.length === 0 || Object.keys(map).length === list.length - 1,
//         "INTERNAL ERROR there is no junk in map"
//     )
// }
function addObserver(observable, node$$1) {
    // invariant(node.dependenciesState !== -1, "INTERNAL ERROR, can add only dependenciesState !== -1");
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR add already added node");
    // invariantObservers(observable);
    observable.observers.add(node$$1);
    if (observable.lowestObserverState > node$$1.dependenciesState)
        observable.lowestObserverState = node$$1.dependenciesState;
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR didn't add node");
}
function removeObserver(observable, node$$1) {
    // invariant(globalState.inBatch > 0, "INTERNAL ERROR, remove should be called only inside batch");
    // invariant(observable._observers.indexOf(node) !== -1, "INTERNAL ERROR remove already removed node");
    // invariantObservers(observable);
    observable.observers.delete(node$$1);
    if (observable.observers.size === 0) {
        // deleting last observer
        queueForUnobservation(observable);
    }
    // invariantObservers(observable);
    // invariant(observable._observers.indexOf(node) === -1, "INTERNAL ERROR remove already removed node2");
}
function queueForUnobservation(observable) {
    if (observable.isPendingUnobservation === false) {
        // invariant(observable._observers.length === 0, "INTERNAL ERROR, should only queue for unobservation unobserved observables");
        observable.isPendingUnobservation = true;
        globalState.pendingUnobservations.push(observable);
    }
}
/**
 * Batch starts a transaction, at least for purposes of memoizing ComputedValues when nothing else does.
 * During a batch `onBecomeUnobserved` will be called at most once per observable.
 * Avoids unnecessary recalculations.
 */
function startBatch() {
    globalState.inBatch++;
}
function endBatch() {
    if (--globalState.inBatch === 0) {
        runReactions();
        // the batch is actually about to finish, all unobserving should happen here.
        var list = globalState.pendingUnobservations;
        for (var i = 0; i < list.length; i++) {
            var observable = list[i];
            observable.isPendingUnobservation = false;
            if (observable.observers.size === 0) {
                if (observable.isBeingObserved) {
                    // if this observable had reactive observers, trigger the hooks
                    observable.isBeingObserved = false;
                    observable.onBecomeUnobserved();
                }
                if (observable instanceof ComputedValue) {
                    // computed values are automatically teared down when the last observer leaves
                    // this process happens recursively, this computed might be the last observabe of another, etc..
                    observable.suspend();
                }
            }
        }
        globalState.pendingUnobservations = [];
    }
}
function reportObserved(observable) {
    checkIfStateReadsAreAllowed(observable);
    var derivation = globalState.trackingDerivation;
    if (derivation !== null) {
        /**
         * Simple optimization, give each derivation run an unique id (runId)
         * Check if last time this observable was accessed the same runId is used
         * if this is the case, the relation is already known
         */
        if (derivation.runId !== observable.lastAccessedBy) {
            observable.lastAccessedBy = derivation.runId;
            // Tried storing newObserving, or observing, or both as Set, but performance didn't come close...
            derivation.newObserving[derivation.unboundDepsCount++] = observable;
            if (!observable.isBeingObserved) {
                observable.isBeingObserved = true;
                observable.onBecomeObserved();
            }
        }
        return true;
    }
    else if (observable.observers.size === 0 && globalState.inBatch > 0) {
        queueForUnobservation(observable);
    }
    return false;
}
// function invariantLOS(observable: IObservable, msg: string) {
//     // it's expensive so better not run it in produciton. but temporarily helpful for testing
//     const min = getObservers(observable).reduce((a, b) => Math.min(a, b.dependenciesState), 2)
//     if (min >= observable.lowestObserverState) return // <- the only assumption about `lowestObserverState`
//     throw new Error(
//         "lowestObserverState is wrong for " +
//             msg +
//             " because " +
//             min +
//             " < " +
//             observable.lowestObserverState
//     )
// }
/**
 * NOTE: current propagation mechanism will in case of self reruning autoruns behave unexpectedly
 * It will propagate changes to observers from previous run
 * It's hard or maybe impossible (with reasonable perf) to get it right with current approach
 * Hopefully self reruning autoruns aren't a feature people should depend on
 * Also most basic use cases should be ok
 */
// Called by Atom when its value changes
function propagateChanged(observable) {
    // invariantLOS(observable, "changed start");
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    // Ideally we use for..of here, but the downcompiled version is really slow...
    observable.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            if (d.isTracing !== TraceMode.NONE) {
                logTraceInfo(d, observable);
            }
            d.onBecomeStale();
        }
        d.dependenciesState = IDerivationState.STALE;
    });
    // invariantLOS(observable, "changed end");
}
// Called by ComputedValue when it recalculate and its value changed
function propagateChangeConfirmed(observable) {
    // invariantLOS(observable, "confirmed start");
    if (observable.lowestObserverState === IDerivationState.STALE)
        return;
    observable.lowestObserverState = IDerivationState.STALE;
    observable.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.POSSIBLY_STALE)
            d.dependenciesState = IDerivationState.STALE;
        else if (d.dependenciesState === IDerivationState.UP_TO_DATE // this happens during computing of `d`, just keep lowestObserverState up to date.
        )
            observable.lowestObserverState = IDerivationState.UP_TO_DATE;
    });
    // invariantLOS(observable, "confirmed end");
}
// Used by computed when its dependency changed, but we don't wan't to immediately recompute.
function propagateMaybeChanged(observable) {
    // invariantLOS(observable, "maybe start");
    if (observable.lowestObserverState !== IDerivationState.UP_TO_DATE)
        return;
    observable.lowestObserverState = IDerivationState.POSSIBLY_STALE;
    observable.observers.forEach(function (d) {
        if (d.dependenciesState === IDerivationState.UP_TO_DATE) {
            d.dependenciesState = IDerivationState.POSSIBLY_STALE;
            if (d.isTracing !== TraceMode.NONE) {
                logTraceInfo(d, observable);
            }
            d.onBecomeStale();
        }
    });
    // invariantLOS(observable, "maybe end");
}
function logTraceInfo(derivation, observable) {
    console.log("[mobx.trace] '" + derivation.name + "' is invalidated due to a change in: '" + observable.name + "'");
    if (derivation.isTracing === TraceMode.BREAK) {
        var lines = [];
        printDepTree(getDependencyTree(derivation), lines, 1);
        // prettier-ignore
        new Function("debugger;\n/*\nTracing '" + derivation.name + "'\n\nYou are entering this break point because derivation '" + derivation.name + "' is being traced and '" + observable.name + "' is now forcing it to update.\nJust follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update\nThe stackframe you are looking for is at least ~6-8 stack-frames up.\n\n" + (derivation instanceof ComputedValue ? derivation.derivation.toString().replace(/[*]\//g, "/") : "") + "\n\nThe dependencies for this derivation are:\n\n" + lines.join("\n") + "\n*/\n    ")();
    }
}
function printDepTree(tree, lines, depth) {
    if (lines.length >= 1000) {
        lines.push("(and many more)");
        return;
    }
    lines.push("" + new Array(depth).join("\t") + tree.name); // MWE: not the fastest, but the easiest way :)
    if (tree.dependencies)
        tree.dependencies.forEach(function (child) { return printDepTree(child, lines, depth + 1); });
}

var Reaction = /** @class */ (function () {
    function Reaction(name, onInvalidate, errorHandler, requiresObservable) {
        if (name === void 0) { name = "Reaction@" + getNextId(); }
        if (requiresObservable === void 0) { requiresObservable = false; }
        this.name = name;
        this.onInvalidate = onInvalidate;
        this.errorHandler = errorHandler;
        this.requiresObservable = requiresObservable;
        this.observing = []; // nodes we are looking at. Our value depends on these nodes
        this.newObserving = [];
        this.dependenciesState = IDerivationState.NOT_TRACKING;
        this.diffValue = 0;
        this.runId = 0;
        this.unboundDepsCount = 0;
        this.__mapid = "#" + getNextId();
        this.isDisposed = false;
        this._isScheduled = false;
        this._isTrackPending = false;
        this._isRunning = false;
        this.isTracing = TraceMode.NONE;
    }
    Reaction.prototype.onBecomeStale = function () {
        this.schedule();
    };
    Reaction.prototype.schedule = function () {
        if (!this._isScheduled) {
            this._isScheduled = true;
            globalState.pendingReactions.push(this);
            runReactions();
        }
    };
    Reaction.prototype.isScheduled = function () {
        return this._isScheduled;
    };
    /**
     * internal, use schedule() if you intend to kick off a reaction
     */
    Reaction.prototype.runReaction = function () {
        if (!this.isDisposed) {
            startBatch();
            this._isScheduled = false;
            if (shouldCompute(this)) {
                this._isTrackPending = true;
                try {
                    this.onInvalidate();
                    if (this._isTrackPending &&
                        isSpyEnabled() &&
                        process.env.NODE_ENV !== "production") {
                        // onInvalidate didn't trigger track right away..
                        spyReport({
                            name: this.name,
                            type: "scheduled-reaction"
                        });
                    }
                }
                catch (e) {
                    this.reportExceptionInDerivation(e);
                }
            }
            endBatch();
        }
    };
    Reaction.prototype.track = function (fn) {
        if (this.isDisposed) {
            return;
            // console.warn("Reaction already disposed") // Note: Not a warning / error in mobx 4 either
        }
        startBatch();
        var notify = isSpyEnabled();
        var startTime;
        if (notify && process.env.NODE_ENV !== "production") {
            startTime = Date.now();
            spyReportStart({
                name: this.name,
                type: "reaction"
            });
        }
        this._isRunning = true;
        var result = trackDerivedFunction(this, fn, undefined);
        this._isRunning = false;
        this._isTrackPending = false;
        if (this.isDisposed) {
            // disposed during last run. Clean up everything that was bound after the dispose call.
            clearObserving(this);
        }
        if (isCaughtException(result))
            this.reportExceptionInDerivation(result.cause);
        if (notify && process.env.NODE_ENV !== "production") {
            spyReportEnd({
                time: Date.now() - startTime
            });
        }
        endBatch();
    };
    Reaction.prototype.reportExceptionInDerivation = function (error) {
        var _this = this;
        if (this.errorHandler) {
            this.errorHandler(error, this);
            return;
        }
        if (globalState.disableErrorBoundaries)
            throw error;
        var message = "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'";
        if (globalState.suppressReactionErrors) {
            console.warn("[mobx] (error in reaction '" + this.name + "' suppressed, fix error of causing action below)"); // prettier-ignore
        }
        else {
            console.error(message, error);
            /** If debugging brought you here, please, read the above message :-). Tnx! */
        }
        if (isSpyEnabled()) {
            spyReport({
                type: "error",
                name: this.name,
                message: message,
                error: "" + error
            });
        }
        globalState.globalReactionErrorHandlers.forEach(function (f) { return f(error, _this); });
    };
    Reaction.prototype.dispose = function () {
        if (!this.isDisposed) {
            this.isDisposed = true;
            if (!this._isRunning) {
                // if disposed while running, clean up later. Maybe not optimal, but rare case
                startBatch();
                clearObserving(this);
                endBatch();
            }
        }
    };
    Reaction.prototype.getDisposer = function () {
        var r = this.dispose.bind(this);
        r[$mobx] = this;
        return r;
    };
    Reaction.prototype.toString = function () {
        return "Reaction[" + this.name + "]";
    };
    Reaction.prototype.trace = function (enterBreakPoint) {
        if (enterBreakPoint === void 0) { enterBreakPoint = false; }
        trace(this, enterBreakPoint);
    };
    return Reaction;
}());
/**
 * Magic number alert!
 * Defines within how many times a reaction is allowed to re-trigger itself
 * until it is assumed that this is gonna be a never ending loop...
 */
var MAX_REACTION_ITERATIONS = 100;
var reactionScheduler = function (f) { return f(); };
function runReactions() {
    // Trampolining, if runReactions are already running, new reactions will be picked up
    if (globalState.inBatch > 0 || globalState.isRunningReactions)
        return;
    reactionScheduler(runReactionsHelper);
}
function runReactionsHelper() {
    globalState.isRunningReactions = true;
    var allReactions = globalState.pendingReactions;
    var iterations = 0;
    // While running reactions, new reactions might be triggered.
    // Hence we work with two variables and check whether
    // we converge to no remaining reactions after a while.
    while (allReactions.length > 0) {
        if (++iterations === MAX_REACTION_ITERATIONS) {
            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." +
                (" Probably there is a cycle in the reactive function: " + allReactions[0]));
            allReactions.splice(0); // clear reactions
        }
        var remainingReactions = allReactions.splice(0);
        for (var i = 0, l = remainingReactions.length; i < l; i++)
            remainingReactions[i].runReaction();
    }
    globalState.isRunningReactions = false;
}
var isReaction = createInstanceofPredicate("Reaction", Reaction);
function setReactionScheduler(fn) {
    var baseScheduler = reactionScheduler;
    reactionScheduler = function (f) { return fn(function () { return baseScheduler(f); }); };
}

function isSpyEnabled() {
    return process.env.NODE_ENV !== "production" && !!globalState.spyListeners.length;
}
function spyReport(event) {
    if (process.env.NODE_ENV === "production")
        return; // dead code elimination can do the rest
    if (!globalState.spyListeners.length)
        return;
    var listeners = globalState.spyListeners;
    for (var i = 0, l = listeners.length; i < l; i++)
        listeners[i](event);
}
function spyReportStart(event) {
    if (process.env.NODE_ENV === "production")
        return;
    var change = __assign({}, event, { spyReportStart: true });
    spyReport(change);
}
var END_EVENT = { spyReportEnd: true };
function spyReportEnd(change) {
    if (process.env.NODE_ENV === "production")
        return;
    if (change)
        spyReport(__assign({}, change, { spyReportEnd: true }));
    else
        spyReport(END_EVENT);
}
function spy(listener) {
    if (process.env.NODE_ENV === "production") {
        console.warn("[mobx.spy] Is a no-op in production builds");
        return function () { };
    }
    else {
        globalState.spyListeners.push(listener);
        return once(function () {
            globalState.spyListeners = globalState.spyListeners.filter(function (l) { return l !== listener; });
        });
    }
}
function isAction(thing) {
    return typeof thing === "function" && thing.isMobxAction === true;
}

/**
 * Creates a named reactive view and keeps it alive, so that the view is always
 * updated if one of the dependencies changes, even when the view is not further used by something else.
 * @param view The reactive view
 * @returns disposer function, which can be used to stop the view from being updated in the future.
 */
function autorun(view, opts) {
    if (opts === void 0) { opts = EMPTY_OBJECT; }
    if (process.env.NODE_ENV !== "production") {
        invariant(typeof view === "function", "Autorun expects a function as first argument");
        invariant(isAction(view) === false, "Autorun does not accept actions since actions are untrackable");
    }
    var name = (opts && opts.name) || view.name || "Autorun@" + getNextId();
    var runSync = !opts.scheduler && !opts.delay;
    var reaction;
    if (runSync) {
        // normal autorun
        reaction = new Reaction(name, function () {
            this.track(reactionRunner);
        }, opts.onError, opts.requiresObservable);
    }
    else {
        var scheduler_1 = createSchedulerFromOptions(opts);
        // debounced autorun
        var isScheduled_1 = false;
        reaction = new Reaction(name, function () {
            if (!isScheduled_1) {
                isScheduled_1 = true;
                scheduler_1(function () {
                    isScheduled_1 = false;
                    if (!reaction.isDisposed)
                        reaction.track(reactionRunner);
                });
            }
        }, opts.onError, opts.requiresObservable);
    }
    function reactionRunner() {
        view(reaction);
    }
    reaction.schedule();
    return reaction.getDisposer();
}
var run = function (f) { return f(); };
function createSchedulerFromOptions(opts) {
    return opts.scheduler
        ? opts.scheduler
        : opts.delay
            ? function (f) { return setTimeout(f, opts.delay); }
            : run;
}

function onBecomeObserved(thing, arg2, arg3) {
    return interceptHook("onBecomeObserved", thing, arg2, arg3);
}
function onBecomeUnobserved(thing, arg2, arg3) {
    return interceptHook("onBecomeUnobserved", thing, arg2, arg3);
}
function interceptHook(hook, thing, arg2, arg3) {
    var atom = typeof arg3 === "function" ? getAtom(thing, arg2) : getAtom(thing);
    var cb = typeof arg3 === "function" ? arg3 : arg2;
    var listenersKey = hook + "Listeners";
    if (atom[listenersKey]) {
        atom[listenersKey].add(cb);
    }
    else {
        atom[listenersKey] = new Set([cb]);
    }
    var orig = atom[hook];
    if (typeof orig !== "function")
        return fail(process.env.NODE_ENV !== "production" && "Not an atom that can be (un)observed");
    return function () {
        var hookListeners = atom[listenersKey];
        if (hookListeners) {
            hookListeners.delete(cb);
            if (hookListeners.size === 0) {
                delete atom[listenersKey];
            }
        }
    };
}

function configure(options) {
    var enforceActions = options.enforceActions, computedRequiresReaction = options.computedRequiresReaction, computedConfigurable = options.computedConfigurable, disableErrorBoundaries = options.disableErrorBoundaries, reactionScheduler = options.reactionScheduler, reactionRequiresObservable = options.reactionRequiresObservable, observableRequiresReaction = options.observableRequiresReaction;
    if (options.isolateGlobalState === true) {
        isolateGlobalState();
    }
    if (enforceActions !== undefined) {
        if (typeof enforceActions === "boolean" || enforceActions === "strict")
            deprecated("Deprecated value for 'enforceActions', use 'false' => '\"never\"', 'true' => '\"observed\"', '\"strict\"' => \"'always'\" instead");
        var ea = void 0;
        switch (enforceActions) {
            case true:
            case "observed":
                ea = true;
                break;
            case false:
            case "never":
                ea = false;
                break;
            case "strict":
            case "always":
                ea = "strict";
                break;
            default:
                fail("Invalid value for 'enforceActions': '" + enforceActions + "', expected 'never', 'always' or 'observed'");
        }
        globalState.enforceActions = ea;
        globalState.allowStateChanges = ea === true || ea === "strict" ? false : true;
    }
    if (computedRequiresReaction !== undefined) {
        globalState.computedRequiresReaction = !!computedRequiresReaction;
    }
    if (reactionRequiresObservable !== undefined) {
        globalState.reactionRequiresObservable = !!reactionRequiresObservable;
    }
    if (observableRequiresReaction !== undefined) {
        globalState.observableRequiresReaction = !!observableRequiresReaction;
        globalState.allowStateReads = !globalState.observableRequiresReaction;
    }
    if (computedConfigurable !== undefined) {
        globalState.computedConfigurable = !!computedConfigurable;
    }
    if (disableErrorBoundaries !== undefined) {
        if (disableErrorBoundaries === true)
            console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled.");
        globalState.disableErrorBoundaries = !!disableErrorBoundaries;
    }
    if (reactionScheduler) {
        setReactionScheduler(reactionScheduler);
    }
}

function extendObservable(target, properties, decorators, options) {
    if (process.env.NODE_ENV !== "production") {
        invariant(arguments.length >= 2 && arguments.length <= 4, "'extendObservable' expected 2-4 arguments");
        invariant(typeof target === "object", "'extendObservable' expects an object as first argument");
        invariant(!isObservableMap(target), "'extendObservable' should not be used on maps, use map.merge instead");
    }
    options = asCreateObservableOptions(options);
    var defaultDecorator = getDefaultDecoratorFromObjectOptions(options);
    initializeInstance(target); // Fixes #1740
    asObservableObject(target, options.name, defaultDecorator.enhancer); // make sure object is observable, even without initial props
    if (properties)
        extendObservableObjectWithProperties(target, properties, decorators, defaultDecorator);
    return target;
}
function getDefaultDecoratorFromObjectOptions(options) {
    return options.defaultDecorator || (options.deep === false ? refDecorator : deepDecorator);
}
function extendObservableObjectWithProperties(target, properties, decorators, defaultDecorator) {
    var e_1, _a, e_2, _b;
    if (process.env.NODE_ENV !== "production") {
        invariant(!isObservable(properties), "Extending an object with another observable (object) is not supported. Please construct an explicit propertymap, using `toJS` if need. See issue #540");
        if (decorators) {
            var keys = getPlainObjectKeys(decorators);
            try {
                for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                    var key = keys_1_1.value;
                    if (!(key in properties))
                        fail("Trying to declare a decorator for unspecified property '" + stringifyKey(key) + "'");
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    }
    startBatch();
    try {
        var keys = getPlainObjectKeys(properties);
        try {
            for (var keys_2 = __values(keys), keys_2_1 = keys_2.next(); !keys_2_1.done; keys_2_1 = keys_2.next()) {
                var key = keys_2_1.value;
                var descriptor = Object.getOwnPropertyDescriptor(properties, key);
                if (process.env.NODE_ENV !== "production") {
                    if (!isPlainObject(properties))
                        fail("'extendObservabe' only accepts plain objects as second argument");
                    if (Object.getOwnPropertyDescriptor(target, key))
                        fail("'extendObservable' can only be used to introduce new properties. Use 'set' or 'decorate' instead. The property '" + stringifyKey(key) + "' already exists on '" + target + "'");
                    if (isComputed(descriptor.value))
                        fail("Passing a 'computed' as initial property value is no longer supported by extendObservable. Use a getter or decorator instead");
                }
                var decorator = decorators && key in decorators
                    ? decorators[key]
                    : descriptor.get
                        ? computedDecorator
                        : defaultDecorator;
                if (process.env.NODE_ENV !== "production" && typeof decorator !== "function")
                    fail("Not a valid decorator for '" + stringifyKey(key) + "', got: " + decorator);
                var resultDescriptor = decorator(target, key, descriptor, true);
                if (resultDescriptor // otherwise, assume already applied, due to `applyToInstance`
                )
                    Object.defineProperty(target, key, resultDescriptor);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (keys_2_1 && !keys_2_1.done && (_b = keys_2.return)) _b.call(keys_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
    }
    finally {
        endBatch();
    }
}

function getDependencyTree(thing, property) {
    return nodeToDependencyTree(getAtom(thing, property));
}
function nodeToDependencyTree(node$$1) {
    var result = {
        name: node$$1.name
    };
    if (node$$1.observing && node$$1.observing.length > 0)
        result.dependencies = unique(node$$1.observing).map(nodeToDependencyTree);
    return result;
}

function _isComputed(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (isObservableObject(value) === false)
            return false;
        if (!value[$mobx].values.has(property))
            return false;
        var atom = getAtom(value, property);
        return isComputedValue(atom);
    }
    return isComputedValue(value);
}
function isComputed(value) {
    if (arguments.length > 1)
        return fail(process.env.NODE_ENV !== "production" &&
            "isComputed expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isComputed(value);
}

function _isObservable(value, property) {
    if (value === null || value === undefined)
        return false;
    if (property !== undefined) {
        if (process.env.NODE_ENV !== "production" &&
            (isObservableMap(value) || isObservableArray(value)))
            return fail("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.");
        if (isObservableObject(value)) {
            return value[$mobx].values.has(property);
        }
        return false;
    }
    // For first check, see #701
    return (isObservableObject(value) ||
        !!value[$mobx] ||
        isAtom(value) ||
        isReaction(value) ||
        isComputedValue(value));
}
function isObservable(value) {
    if (arguments.length !== 1)
        fail(process.env.NODE_ENV !== "production" &&
            "isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property");
    return _isObservable(value);
}
function set$1(obj, key, value) {
    if (arguments.length === 2 && !isObservableSet(obj)) {
        startBatch();
        var values_1 = key;
        try {
            for (var key_1 in values_1)
                set$1(obj, key_1, values_1[key_1]);
        }
        finally {
            endBatch();
        }
        return;
    }
    if (isObservableObject(obj)) {
        var adm = obj[$mobx];
        var existingObservable = adm.values.get(key);
        if (existingObservable) {
            adm.write(key, value);
        }
        else {
            adm.addObservableProp(key, value, adm.defaultEnhancer);
        }
    }
    else if (isObservableMap(obj)) {
        obj.set(key, value);
    }
    else if (isObservableSet(obj)) {
        obj.add(key);
    }
    else if (isObservableArray(obj)) {
        if (typeof key !== "number")
            key = parseInt(key, 10);
        invariant(key >= 0, "Not a valid index: '" + key + "'");
        startBatch();
        if (key >= obj.length)
            obj.length = key + 1;
        obj[key] = value;
        endBatch();
    }
    else {
        return fail(process.env.NODE_ENV !== "production" &&
            "'set()' can only be used on observable objects, arrays and maps");
    }
}

function trace() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var enterBreakPoint = false;
    if (typeof args[args.length - 1] === "boolean")
        enterBreakPoint = args.pop();
    var derivation = getAtomFromArgs(args);
    if (!derivation) {
        return fail(process.env.NODE_ENV !== "production" &&
            "'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    }
    if (derivation.isTracing === TraceMode.NONE) {
        console.log("[mobx.trace] '" + derivation.name + "' tracing enabled");
    }
    derivation.isTracing = enterBreakPoint ? TraceMode.BREAK : TraceMode.LOG;
}
function getAtomFromArgs(args) {
    switch (args.length) {
        case 0:
            return globalState.trackingDerivation;
        case 1:
            return getAtom(args[0]);
        case 2:
            return getAtom(args[0], args[1]);
    }
}

/**
 * During a transaction no views are updated until the end of the transaction.
 * The transaction will be run synchronously nonetheless.
 *
 * @param action a function that updates some reactive state
 * @returns any value that was returned by the 'action' parameter.
 */
function transaction(action, thisArg) {
    if (thisArg === void 0) { thisArg = undefined; }
    startBatch();
    try {
        return action.apply(thisArg);
    }
    finally {
        endBatch();
    }
}

function getAdm(target) {
    return target[$mobx];
}
function isPropertyKey(val) {
    return typeof val === "string" || typeof val === "number" || typeof val === "symbol";
}
// Optimization: we don't need the intermediate objects and could have a completely custom administration for DynamicObjects,
// and skip either the internal values map, or the base object with its property descriptors!
var objectProxyTraps = {
    has: function (target, name) {
        if (name === $mobx || name === "constructor" || name === mobxDidRunLazyInitializersSymbol)
            return true;
        var adm = getAdm(target);
        // MWE: should `in` operator be reactive? If not, below code path will be faster / more memory efficient
        // TODO: check performance stats!
        // if (adm.values.get(name as string)) return true
        if (isPropertyKey(name))
            return adm.has(name);
        return name in target;
    },
    get: function (target, name) {
        if (name === $mobx || name === "constructor" || name === mobxDidRunLazyInitializersSymbol)
            return target[name];
        var adm = getAdm(target);
        var observable = adm.values.get(name);
        if (observable instanceof Atom) {
            var result = observable.get();
            if (result === undefined) {
                // This fixes #1796, because deleting a prop that has an
                // undefined value won't retrigger a observer (no visible effect),
                // the autorun wouldn't subscribe to future key changes (see also next comment)
                adm.has(name);
            }
            return result;
        }
        // make sure we start listening to future keys
        // note that we only do this here for optimization
        if (isPropertyKey(name))
            adm.has(name);
        return target[name];
    },
    set: function (target, name, value) {
        if (!isPropertyKey(name))
            return false;
        set$1(target, name, value);
        return true;
    },
    deleteProperty: function (target, name) {
        if (!isPropertyKey(name))
            return false;
        var adm = getAdm(target);
        adm.remove(name);
        return true;
    },
    ownKeys: function (target) {
        var adm = getAdm(target);
        adm.keysAtom.reportObserved();
        return Reflect.ownKeys(target);
    },
    preventExtensions: function (target) {
        fail("Dynamic observable objects cannot be frozen");
        return false;
    }
};
function createDynamicObservableObject(base) {
    var proxy = new Proxy(base, objectProxyTraps);
    base[$mobx].proxy = proxy;
    return proxy;
}

function hasInterceptors(interceptable) {
    return interceptable.interceptors !== undefined && interceptable.interceptors.length > 0;
}
function registerInterceptor(interceptable, handler) {
    var interceptors = interceptable.interceptors || (interceptable.interceptors = []);
    interceptors.push(handler);
    return once(function () {
        var idx = interceptors.indexOf(handler);
        if (idx !== -1)
            interceptors.splice(idx, 1);
    });
}
function interceptChange(interceptable, change) {
    var prevU = untrackedStart();
    try {
        var interceptors = interceptable.interceptors;
        if (interceptors)
            for (var i = 0, l = interceptors.length; i < l; i++) {
                change = interceptors[i](change);
                invariant(!change || change.type, "Intercept handlers should return nothing or a change object");
                if (!change)
                    break;
            }
        return change;
    }
    finally {
        untrackedEnd(prevU);
    }
}

function hasListeners(listenable) {
    return listenable.changeListeners !== undefined && listenable.changeListeners.length > 0;
}
function registerListener(listenable, handler) {
    var listeners = listenable.changeListeners || (listenable.changeListeners = []);
    listeners.push(handler);
    return once(function () {
        var idx = listeners.indexOf(handler);
        if (idx !== -1)
            listeners.splice(idx, 1);
    });
}
function notifyListeners(listenable, change) {
    var prevU = untrackedStart();
    var listeners = listenable.changeListeners;
    if (!listeners)
        return;
    listeners = listeners.slice();
    for (var i = 0, l = listeners.length; i < l; i++) {
        listeners[i](change);
    }
    untrackedEnd(prevU);
}

var MAX_SPLICE_SIZE = 10000; // See e.g. https://github.com/mobxjs/mobx/issues/859
var arrayTraps = {
    get: function (target, name) {
        if (name === $mobx)
            return target[$mobx];
        if (name === "length")
            return target[$mobx].getArrayLength();
        if (typeof name === "number") {
            return arrayExtensions.get.call(target, name);
        }
        if (typeof name === "string" && !isNaN(name)) {
            return arrayExtensions.get.call(target, parseInt(name));
        }
        if (arrayExtensions.hasOwnProperty(name)) {
            return arrayExtensions[name];
        }
        return target[name];
    },
    set: function (target, name, value) {
        if (name === "length") {
            target[$mobx].setArrayLength(value);
        }
        if (typeof name === "number") {
            arrayExtensions.set.call(target, name, value);
        }
        if (typeof name === "symbol" || isNaN(name)) {
            target[name] = value;
        }
        else {
            // numeric string
            arrayExtensions.set.call(target, parseInt(name), value);
        }
        return true;
    },
    preventExtensions: function (target) {
        fail("Observable arrays cannot be frozen");
        return false;
    }
};
function createObservableArray(initialValues, enhancer, name, owned) {
    if (name === void 0) { name = "ObservableArray@" + getNextId(); }
    if (owned === void 0) { owned = false; }
    var adm = new ObservableArrayAdministration(name, enhancer, owned);
    addHiddenFinalProp(adm.values, $mobx, adm);
    var proxy = new Proxy(adm.values, arrayTraps);
    adm.proxy = proxy;
    if (initialValues && initialValues.length) {
        var prev = allowStateChangesStart(true);
        adm.spliceWithArray(0, 0, initialValues);
        allowStateChangesEnd(prev);
    }
    return proxy;
}
var ObservableArrayAdministration = /** @class */ (function () {
    function ObservableArrayAdministration(name, enhancer, owned) {
        this.owned = owned;
        this.values = [];
        this.proxy = undefined;
        this.lastKnownLength = 0;
        this.atom = new Atom(name || "ObservableArray@" + getNextId());
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name + "[..]"); };
    }
    ObservableArrayAdministration.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined)
            return this.dehancer(value);
        return value;
    };
    ObservableArrayAdministration.prototype.dehanceValues = function (values) {
        if (this.dehancer !== undefined && values.length > 0)
            return values.map(this.dehancer);
        return values;
    };
    ObservableArrayAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableArrayAdministration.prototype.observe = function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        if (fireImmediately) {
            listener({
                object: this.proxy,
                type: "splice",
                index: 0,
                added: this.values.slice(),
                addedCount: this.values.length,
                removed: [],
                removedCount: 0
            });
        }
        return registerListener(this, listener);
    };
    ObservableArrayAdministration.prototype.getArrayLength = function () {
        this.atom.reportObserved();
        return this.values.length;
    };
    ObservableArrayAdministration.prototype.setArrayLength = function (newLength) {
        if (typeof newLength !== "number" || newLength < 0)
            throw new Error("[mobx.array] Out of range: " + newLength);
        var currentLength = this.values.length;
        if (newLength === currentLength)
            return;
        else if (newLength > currentLength) {
            var newItems = new Array(newLength - currentLength);
            for (var i = 0; i < newLength - currentLength; i++)
                newItems[i] = undefined; // No Array.fill everywhere...
            this.spliceWithArray(currentLength, 0, newItems);
        }
        else
            this.spliceWithArray(newLength, currentLength - newLength);
    };
    ObservableArrayAdministration.prototype.updateArrayLength = function (oldLength, delta) {
        if (oldLength !== this.lastKnownLength)
            throw new Error("[mobx] Modification exception: the internal structure of an observable array was changed.");
        this.lastKnownLength += delta;
    };
    ObservableArrayAdministration.prototype.spliceWithArray = function (index, deleteCount, newItems) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this.atom);
        var length = this.values.length;
        if (index === undefined)
            index = 0;
        else if (index > length)
            index = length;
        else if (index < 0)
            index = Math.max(0, length + index);
        if (arguments.length === 1)
            deleteCount = length - index;
        else if (deleteCount === undefined || deleteCount === null)
            deleteCount = 0;
        else
            deleteCount = Math.max(0, Math.min(deleteCount, length - index));
        if (newItems === undefined)
            newItems = EMPTY_ARRAY;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.proxy,
                type: "splice",
                index: index,
                removedCount: deleteCount,
                added: newItems
            });
            if (!change)
                return EMPTY_ARRAY;
            deleteCount = change.removedCount;
            newItems = change.added;
        }
        newItems = newItems.length === 0 ? newItems : newItems.map(function (v) { return _this.enhancer(v, undefined); });
        if (process.env.NODE_ENV !== "production") {
            var lengthDelta = newItems.length - deleteCount;
            this.updateArrayLength(length, lengthDelta); // checks if internal array wasn't modified
        }
        var res = this.spliceItemsIntoValues(index, deleteCount, newItems);
        if (deleteCount !== 0 || newItems.length !== 0)
            this.notifyArraySplice(index, newItems, res);
        return this.dehanceValues(res);
    };
    ObservableArrayAdministration.prototype.spliceItemsIntoValues = function (index, deleteCount, newItems) {
        var _a;
        if (newItems.length < MAX_SPLICE_SIZE) {
            return (_a = this.values).splice.apply(_a, __spread([index, deleteCount], newItems));
        }
        else {
            var res = this.values.slice(index, index + deleteCount);
            this.values = this.values
                .slice(0, index)
                .concat(newItems, this.values.slice(index + deleteCount));
            return res;
        }
    };
    ObservableArrayAdministration.prototype.notifyArrayChildUpdate = function (index, newValue, oldValue) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                object: this.proxy,
                type: "update",
                index: index,
                newValue: newValue,
                oldValue: oldValue
            }
            : null;
        // The reason why this is on right hand side here (and not above), is this way the uglifier will drop it, but it won't
        // cause any runtime overhead in development mode without NODE_ENV set, unless spying is enabled
        if (notifySpy && process.env.NODE_ENV !== "production")
            spyReportStart(__assign({}, change, { name: this.atom.name }));
        this.atom.reportChanged();
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && process.env.NODE_ENV !== "production")
            spyReportEnd();
    };
    ObservableArrayAdministration.prototype.notifyArraySplice = function (index, added, removed) {
        var notifySpy = !this.owned && isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                object: this.proxy,
                type: "splice",
                index: index,
                removed: removed,
                added: added,
                removedCount: removed.length,
                addedCount: added.length
            }
            : null;
        if (notifySpy && process.env.NODE_ENV !== "production")
            spyReportStart(__assign({}, change, { name: this.atom.name }));
        this.atom.reportChanged();
        // conform: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/observe
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && process.env.NODE_ENV !== "production")
            spyReportEnd();
    };
    return ObservableArrayAdministration;
}());
var arrayExtensions = {
    intercept: function (handler) {
        return this[$mobx].intercept(handler);
    },
    observe: function (listener, fireImmediately) {
        if (fireImmediately === void 0) { fireImmediately = false; }
        var adm = this[$mobx];
        return adm.observe(listener, fireImmediately);
    },
    clear: function () {
        return this.splice(0);
    },
    replace: function (newItems) {
        var adm = this[$mobx];
        return adm.spliceWithArray(0, adm.values.length, newItems);
    },
    /**
     * Converts this array back to a (shallow) javascript structure.
     * For a deep clone use mobx.toJS
     */
    toJS: function () {
        return this.slice();
    },
    toJSON: function () {
        // Used by JSON.stringify
        return this.toJS();
    },
    /*
     * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
     * since these functions alter the inner structure of the array, the have side effects.
     * Because the have side effects, they should not be used in computed function,
     * and for that reason the do not call dependencyState.notifyObserved
     */
    splice: function (index, deleteCount) {
        var newItems = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            newItems[_i - 2] = arguments[_i];
        }
        var adm = this[$mobx];
        switch (arguments.length) {
            case 0:
                return [];
            case 1:
                return adm.spliceWithArray(index);
            case 2:
                return adm.spliceWithArray(index, deleteCount);
        }
        return adm.spliceWithArray(index, deleteCount, newItems);
    },
    spliceWithArray: function (index, deleteCount, newItems) {
        var adm = this[$mobx];
        return adm.spliceWithArray(index, deleteCount, newItems);
    },
    push: function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this[$mobx];
        adm.spliceWithArray(adm.values.length, 0, items);
        return adm.values.length;
    },
    pop: function () {
        return this.splice(Math.max(this[$mobx].values.length - 1, 0), 1)[0];
    },
    shift: function () {
        return this.splice(0, 1)[0];
    },
    unshift: function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        var adm = this[$mobx];
        adm.spliceWithArray(0, 0, items);
        return adm.values.length;
    },
    reverse: function () {
        // reverse by default mutates in place before returning the result
        // which makes it both a 'derivation' and a 'mutation'.
        // so we deviate from the default and just make it an dervitation
        if (process.env.NODE_ENV !== "production") {
            console.warn("[mobx] `observableArray.reverse()` will not update the array in place. Use `observableArray.slice().reverse()` to suppress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().reverse())` to reverse & update in place");
        }
        var clone = this.slice();
        return clone.reverse.apply(clone, arguments);
    },
    sort: function (compareFn) {
        // sort by default mutates in place before returning the result
        // which goes against all good practices. Let's not change the array in place!
        if (process.env.NODE_ENV !== "production") {
            console.warn("[mobx] `observableArray.sort()` will not update the array in place. Use `observableArray.slice().sort()` to suppress this warning and perform the operation on a copy, or `observableArray.replace(observableArray.slice().sort())` to sort & update in place");
        }
        var clone = this.slice();
        return clone.sort.apply(clone, arguments);
    },
    remove: function (value) {
        var adm = this[$mobx];
        var idx = adm.dehanceValues(adm.values).indexOf(value);
        if (idx > -1) {
            this.splice(idx, 1);
            return true;
        }
        return false;
    },
    get: function (index) {
        var adm = this[$mobx];
        if (adm) {
            if (index < adm.values.length) {
                adm.atom.reportObserved();
                return adm.dehanceValue(adm.values[index]);
            }
            console.warn("[mobx.array] Attempt to read an array index (" + index + ") that is out of bounds (" + adm.values.length + "). Please check length first. Out of bound indices will not be tracked by MobX");
        }
        return undefined;
    },
    set: function (index, newValue) {
        var adm = this[$mobx];
        var values = adm.values;
        if (index < values.length) {
            // update at index in range
            checkIfStateModificationsAreAllowed(adm.atom);
            var oldValue = values[index];
            if (hasInterceptors(adm)) {
                var change = interceptChange(adm, {
                    type: "update",
                    object: adm.proxy,
                    index: index,
                    newValue: newValue
                });
                if (!change)
                    return;
                newValue = change.newValue;
            }
            newValue = adm.enhancer(newValue, oldValue);
            var changed = newValue !== oldValue;
            if (changed) {
                values[index] = newValue;
                adm.notifyArrayChildUpdate(index, newValue, oldValue);
            }
        }
        else if (index === values.length) {
            // add a new item
            adm.spliceWithArray(index, 0, [newValue]);
        }
        else {
            // out of bounds
            throw new Error("[mobx.array] Index out of bounds, " + index + " is larger than " + values.length);
        }
    }
};
[
    "concat",
    "every",
    "filter",
    "forEach",
    "indexOf",
    "join",
    "lastIndexOf",
    "map",
    "reduce",
    "reduceRight",
    "slice",
    "some",
    "toString",
    "toLocaleString"
].forEach(function (funcName) {
    arrayExtensions[funcName] = function () {
        var adm = this[$mobx];
        adm.atom.reportObserved();
        var res = adm.dehanceValues(adm.values);
        return res[funcName].apply(res, arguments);
    };
});
var isObservableArrayAdministration = createInstanceofPredicate("ObservableArrayAdministration", ObservableArrayAdministration);
function isObservableArray(thing) {
    return isObject(thing) && isObservableArrayAdministration(thing[$mobx]);
}

var _a;
var ObservableMapMarker = {};
// just extend Map? See also https://gist.github.com/nestharus/13b4d74f2ef4a2f4357dbd3fc23c1e54
// But: https://github.com/mobxjs/mobx/issues/1556
var ObservableMap = /** @class */ (function () {
    function ObservableMap(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer; }
        if (name === void 0) { name = "ObservableMap@" + getNextId(); }
        this.enhancer = enhancer;
        this.name = name;
        this[_a] = ObservableMapMarker;
        this._keysAtom = createAtom(this.name + ".keys()");
        this[Symbol.toStringTag] = "Map";
        if (typeof Map !== "function") {
            throw new Error("mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js");
        }
        this._data = new Map();
        this._hasMap = new Map();
        this.merge(initialData);
    }
    ObservableMap.prototype._has = function (key) {
        return this._data.has(key);
    };
    ObservableMap.prototype.has = function (key) {
        var _this = this;
        if (!globalState.trackingDerivation)
            return this._has(key);
        var entry = this._hasMap.get(key);
        if (!entry) {
            // todo: replace with atom (breaking change)
            var newEntry = (entry = new ObservableValue(this._has(key), referenceEnhancer, this.name + "." + stringifyKey(key) + "?", false));
            this._hasMap.set(key, newEntry);
            onBecomeUnobserved(newEntry, function () { return _this._hasMap.delete(key); });
        }
        return entry.get();
    };
    ObservableMap.prototype.set = function (key, value) {
        var hasKey = this._has(key);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: hasKey ? "update" : "add",
                object: this,
                newValue: value,
                name: key
            });
            if (!change)
                return this;
            value = change.newValue;
        }
        if (hasKey) {
            this._updateValue(key, value);
        }
        else {
            this._addValue(key, value);
        }
        return this;
    };
    ObservableMap.prototype.delete = function (key) {
        var _this = this;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                name: key
            });
            if (!change)
                return false;
        }
        if (this._has(key)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: this._data.get(key).value,
                    name: key
                }
                : null;
            if (notifySpy && process.env.NODE_ENV !== "production")
                spyReportStart(__assign({}, change, { name: this.name, key: key }));
            transaction(function () {
                _this._keysAtom.reportChanged();
                _this._updateHasMapEntry(key, false);
                var observable = _this._data.get(key);
                observable.setNewValue(undefined);
                _this._data.delete(key);
            });
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && process.env.NODE_ENV !== "production")
                spyReportEnd();
            return true;
        }
        return false;
    };
    ObservableMap.prototype._updateHasMapEntry = function (key, value) {
        var entry = this._hasMap.get(key);
        if (entry) {
            entry.setNewValue(value);
        }
    };
    ObservableMap.prototype._updateValue = function (key, newValue) {
        var observable = this._data.get(key);
        newValue = observable.prepareNewValue(newValue);
        if (newValue !== globalState.UNCHANGED) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this,
                    oldValue: observable.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy && process.env.NODE_ENV !== "production")
                spyReportStart(__assign({}, change, { name: this.name, key: key }));
            observable.setNewValue(newValue);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && process.env.NODE_ENV !== "production")
                spyReportEnd();
        }
    };
    ObservableMap.prototype._addValue = function (key, newValue) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this._keysAtom);
        transaction(function () {
            var observable = new ObservableValue(newValue, _this.enhancer, _this.name + "." + stringifyKey(key), false);
            _this._data.set(key, observable);
            newValue = observable.value; // value might have been changed
            _this._updateHasMapEntry(key, true);
            _this._keysAtom.reportChanged();
        });
        var notifySpy = isSpyEnabled();
        var notify = hasListeners(this);
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this,
                name: key,
                newValue: newValue
            }
            : null;
        if (notifySpy && process.env.NODE_ENV !== "production")
            spyReportStart(__assign({}, change, { name: this.name, key: key }));
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && process.env.NODE_ENV !== "production")
            spyReportEnd();
    };
    ObservableMap.prototype.get = function (key) {
        if (this.has(key))
            return this.dehanceValue(this._data.get(key).get());
        return this.dehanceValue(undefined);
    };
    ObservableMap.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableMap.prototype.keys = function () {
        this._keysAtom.reportObserved();
        return this._data.keys();
    };
    ObservableMap.prototype.values = function () {
        var self = this;
        var nextIndex = 0;
        var keys = Array.from(this.keys());
        return makeIterable({
            next: function () {
                return nextIndex < keys.length
                    ? { value: self.get(keys[nextIndex++]), done: false }
                    : { done: true };
            }
        });
    };
    ObservableMap.prototype.entries = function () {
        var self = this;
        var nextIndex = 0;
        var keys = Array.from(this.keys());
        return makeIterable({
            next: function () {
                if (nextIndex < keys.length) {
                    var key = keys[nextIndex++];
                    return {
                        value: [key, self.get(key)],
                        done: false
                    };
                }
                return { done: true };
            }
        });
    };
    ObservableMap.prototype[(_a = $mobx, Symbol.iterator)] = function () {
        return this.entries();
    };
    ObservableMap.prototype.forEach = function (callback, thisArg) {
        var e_1, _a;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                callback.call(thisArg, value, key, this);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /** Merge another object into this object, returns this. */
    ObservableMap.prototype.merge = function (other) {
        var _this = this;
        if (isObservableMap(other)) {
            other = other.toJS();
        }
        transaction(function () {
            if (isPlainObject(other))
                getPlainObjectKeys(other).forEach(function (key) { return _this.set(key, other[key]); });
            else if (Array.isArray(other))
                other.forEach(function (_a) {
                    var _b = __read(_a, 2), key = _b[0], value = _b[1];
                    return _this.set(key, value);
                });
            else if (isES6Map(other)) {
                if (other.constructor !== Map)
                    fail("Cannot initialize from classes that inherit from Map: " + other.constructor.name); // prettier-ignore
                other.forEach(function (value, key) { return _this.set(key, value); });
            }
            else if (other !== null && other !== undefined)
                fail("Cannot initialize map from " + other);
        });
        return this;
    };
    ObservableMap.prototype.clear = function () {
        var _this = this;
        transaction(function () {
            untracked(function () {
                var e_2, _a;
                try {
                    for (var _b = __values(_this.keys()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var key = _c.value;
                        _this.delete(key);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            });
        });
    };
    ObservableMap.prototype.replace = function (values) {
        var _this = this;
        transaction(function () {
            // grab all the keys that are present in the new map but not present in the current map
            // and delete them from the map, then merge the new map
            // this will cause reactions only on changed values
            var newKeys = getMapLikeKeys(values);
            var oldKeys = Array.from(_this.keys());
            var missingKeys = oldKeys.filter(function (k) { return newKeys.indexOf(k) === -1; });
            missingKeys.forEach(function (k) { return _this.delete(k); });
            _this.merge(values);
        });
        return this;
    };
    Object.defineProperty(ObservableMap.prototype, "size", {
        get: function () {
            this._keysAtom.reportObserved();
            return this._data.size;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns a plain object that represents this map.
     * Note that all the keys being stringified.
     * If there are duplicating keys after converting them to strings, behaviour is undetermined.
     */
    ObservableMap.prototype.toPOJO = function () {
        var e_3, _a;
        var res = {};
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                // We lie about symbol key types due to https://github.com/Microsoft/TypeScript/issues/1863
                res[typeof key === "symbol" ? key : stringifyKey(key)] = value;
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return res;
    };
    /**
     * Returns a shallow non observable object clone of this map.
     * Note that the values migth still be observable. For a deep clone use mobx.toJS.
     */
    ObservableMap.prototype.toJS = function () {
        return new Map(this);
    };
    ObservableMap.prototype.toJSON = function () {
        // Used by JSON.stringify
        return this.toPOJO();
    };
    ObservableMap.prototype.toString = function () {
        var _this = this;
        return (this.name +
            "[{ " +
            Array.from(this.keys())
                .map(function (key) { return stringifyKey(key) + ": " + ("" + _this.get(key)); })
                .join(", ") +
            " }]");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableMap.prototype.observe = function (listener, fireImmediately) {
        process.env.NODE_ENV !== "production" &&
            invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with maps.");
        return registerListener(this, listener);
    };
    ObservableMap.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    return ObservableMap;
}());
/* 'var' fixes small-build issue */
var isObservableMap = createInstanceofPredicate("ObservableMap", ObservableMap);

var _a$1;
var ObservableSetMarker = {};
var ObservableSet = /** @class */ (function () {
    function ObservableSet(initialData, enhancer, name) {
        if (enhancer === void 0) { enhancer = deepEnhancer; }
        if (name === void 0) { name = "ObservableSet@" + getNextId(); }
        this.name = name;
        this[_a$1] = ObservableSetMarker;
        this._data = new Set();
        this._atom = createAtom(this.name);
        this[Symbol.toStringTag] = "Set";
        if (typeof Set !== "function") {
            throw new Error("mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js");
        }
        this.enhancer = function (newV, oldV) { return enhancer(newV, oldV, name); };
        if (initialData) {
            this.replace(initialData);
        }
    }
    ObservableSet.prototype.dehanceValue = function (value) {
        if (this.dehancer !== undefined) {
            return this.dehancer(value);
        }
        return value;
    };
    ObservableSet.prototype.clear = function () {
        var _this = this;
        transaction(function () {
            untracked(function () {
                var e_1, _a;
                try {
                    for (var _b = __values(_this._data.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var value = _c.value;
                        _this.delete(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            });
        });
    };
    ObservableSet.prototype.forEach = function (callbackFn, thisArg) {
        var e_2, _a;
        try {
            for (var _b = __values(this), _c = _b.next(); !_c.done; _c = _b.next()) {
                var value = _c.value;
                callbackFn.call(thisArg, value, value, this);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    Object.defineProperty(ObservableSet.prototype, "size", {
        get: function () {
            this._atom.reportObserved();
            return this._data.size;
        },
        enumerable: true,
        configurable: true
    });
    ObservableSet.prototype.add = function (value) {
        var _this = this;
        checkIfStateModificationsAreAllowed(this._atom);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "add",
                object: this,
                newValue: value
            });
            if (!change)
                return this;
            // TODO: ideally, value = change.value would be done here, so that values can be
            // changed by interceptor. Same applies for other Set and Map api's.
        }
        if (!this.has(value)) {
            transaction(function () {
                _this._data.add(_this.enhancer(value, undefined));
                _this._atom.reportChanged();
            });
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "add",
                    object: this,
                    newValue: value
                }
                : null;
            if (notifySpy && process.env.NODE_ENV !== "production")
                spyReportStart(change);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && process.env.NODE_ENV !== "production")
                spyReportEnd();
        }
        return this;
    };
    ObservableSet.prototype.delete = function (value) {
        var _this = this;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "delete",
                object: this,
                oldValue: value
            });
            if (!change)
                return false;
        }
        if (this.has(value)) {
            var notifySpy = isSpyEnabled();
            var notify = hasListeners(this);
            var change = notify || notifySpy
                ? {
                    type: "delete",
                    object: this,
                    oldValue: value
                }
                : null;
            if (notifySpy && process.env.NODE_ENV !== "production")
                spyReportStart(__assign({}, change, { name: this.name }));
            transaction(function () {
                _this._atom.reportChanged();
                _this._data.delete(value);
            });
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && process.env.NODE_ENV !== "production")
                spyReportEnd();
            return true;
        }
        return false;
    };
    ObservableSet.prototype.has = function (value) {
        this._atom.reportObserved();
        return this._data.has(this.dehanceValue(value));
    };
    ObservableSet.prototype.entries = function () {
        var nextIndex = 0;
        var keys = Array.from(this.keys());
        var values = Array.from(this.values());
        return makeIterable({
            next: function () {
                var index = nextIndex;
                nextIndex += 1;
                return index < values.length
                    ? { value: [keys[index], values[index]], done: false }
                    : { done: true };
            }
        });
    };
    ObservableSet.prototype.keys = function () {
        return this.values();
    };
    ObservableSet.prototype.values = function () {
        this._atom.reportObserved();
        var self = this;
        var nextIndex = 0;
        var observableValues = Array.from(this._data.values());
        return makeIterable({
            next: function () {
                return nextIndex < observableValues.length
                    ? { value: self.dehanceValue(observableValues[nextIndex++]), done: false }
                    : { done: true };
            }
        });
    };
    ObservableSet.prototype.replace = function (other) {
        var _this = this;
        if (isObservableSet(other)) {
            other = other.toJS();
        }
        transaction(function () {
            if (Array.isArray(other)) {
                _this.clear();
                other.forEach(function (value) { return _this.add(value); });
            }
            else if (isES6Set(other)) {
                _this.clear();
                other.forEach(function (value) { return _this.add(value); });
            }
            else if (other !== null && other !== undefined) {
                fail("Cannot initialize set from " + other);
            }
        });
        return this;
    };
    ObservableSet.prototype.observe = function (listener, fireImmediately) {
        // TODO 'fireImmediately' can be true?
        process.env.NODE_ENV !== "production" &&
            invariant(fireImmediately !== true, "`observe` doesn't support fireImmediately=true in combination with sets.");
        return registerListener(this, listener);
    };
    ObservableSet.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableSet.prototype.toJS = function () {
        return new Set(this);
    };
    ObservableSet.prototype.toString = function () {
        return this.name + "[ " + Array.from(this).join(", ") + " ]";
    };
    ObservableSet.prototype[(_a$1 = $mobx, Symbol.iterator)] = function () {
        return this.values();
    };
    return ObservableSet;
}());
var isObservableSet = createInstanceofPredicate("ObservableSet", ObservableSet);

var ObservableObjectAdministration = /** @class */ (function () {
    function ObservableObjectAdministration(target, values, name, defaultEnhancer) {
        if (values === void 0) { values = new Map(); }
        this.target = target;
        this.values = values;
        this.name = name;
        this.defaultEnhancer = defaultEnhancer;
        this.keysAtom = new Atom(name + ".keys");
    }
    ObservableObjectAdministration.prototype.read = function (key) {
        return this.values.get(key).get();
    };
    ObservableObjectAdministration.prototype.write = function (key, newValue) {
        var instance = this.target;
        var observable = this.values.get(key);
        if (observable instanceof ComputedValue) {
            observable.set(newValue);
            return;
        }
        // intercept
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                type: "update",
                object: this.proxy || instance,
                name: key,
                newValue: newValue
            });
            if (!change)
                return;
            newValue = change.newValue;
        }
        newValue = observable.prepareNewValue(newValue);
        // notify spy & observers
        if (newValue !== globalState.UNCHANGED) {
            var notify = hasListeners(this);
            var notifySpy = isSpyEnabled();
            var change = notify || notifySpy
                ? {
                    type: "update",
                    object: this.proxy || instance,
                    oldValue: observable.value,
                    name: key,
                    newValue: newValue
                }
                : null;
            if (notifySpy && process.env.NODE_ENV !== "production")
                spyReportStart(__assign({}, change, { name: this.name, key: key }));
            observable.setNewValue(newValue);
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && process.env.NODE_ENV !== "production")
                spyReportEnd();
        }
    };
    ObservableObjectAdministration.prototype.has = function (key) {
        var map = this.pendingKeys || (this.pendingKeys = new Map());
        var entry = map.get(key);
        if (entry)
            return entry.get();
        else {
            var exists = !!this.values.get(key);
            // Possible optimization: Don't have a separate map for non existing keys,
            // but store them in the values map instead, using a special symbol to denote "not existing"
            entry = new ObservableValue(exists, referenceEnhancer, this.name + "." + stringifyKey(key) + "?", false);
            map.set(key, entry);
            return entry.get(); // read to subscribe
        }
    };
    ObservableObjectAdministration.prototype.addObservableProp = function (propName, newValue, enhancer) {
        if (enhancer === void 0) { enhancer = this.defaultEnhancer; }
        var target = this.target;
        assertPropertyConfigurable(target, propName);
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.proxy || target,
                name: propName,
                type: "add",
                newValue: newValue
            });
            if (!change)
                return;
            newValue = change.newValue;
        }
        var observable = new ObservableValue(newValue, enhancer, this.name + "." + stringifyKey(propName), false);
        this.values.set(propName, observable);
        newValue = observable.value; // observableValue might have changed it
        Object.defineProperty(target, propName, generateObservablePropConfig(propName));
        this.notifyPropertyAddition(propName, newValue);
    };
    ObservableObjectAdministration.prototype.addComputedProp = function (propertyOwner, // where is the property declared?
    propName, options) {
        var target = this.target;
        options.name = options.name || this.name + "." + stringifyKey(propName);
        this.values.set(propName, new ComputedValue(options));
        if (propertyOwner === target || isPropertyConfigurable(propertyOwner, propName))
            Object.defineProperty(propertyOwner, propName, generateComputedPropConfig(propName));
    };
    ObservableObjectAdministration.prototype.remove = function (key) {
        if (!this.values.has(key))
            return;
        var target = this.target;
        if (hasInterceptors(this)) {
            var change = interceptChange(this, {
                object: this.proxy || target,
                name: key,
                type: "remove"
            });
            if (!change)
                return;
        }
        try {
            startBatch();
            var notify = hasListeners(this);
            var notifySpy = isSpyEnabled();
            var oldObservable = this.values.get(key);
            var oldValue = oldObservable && oldObservable.get();
            oldObservable && oldObservable.set(undefined);
            // notify key and keyset listeners
            this.keysAtom.reportChanged();
            this.values.delete(key);
            if (this.pendingKeys) {
                var entry = this.pendingKeys.get(key);
                if (entry)
                    entry.set(false);
            }
            // delete the prop
            delete this.target[key];
            var change = notify || notifySpy
                ? {
                    type: "remove",
                    object: this.proxy || target,
                    oldValue: oldValue,
                    name: key
                }
                : null;
            if (notifySpy && process.env.NODE_ENV !== "production")
                spyReportStart(__assign({}, change, { name: this.name, key: key }));
            if (notify)
                notifyListeners(this, change);
            if (notifySpy && process.env.NODE_ENV !== "production")
                spyReportEnd();
        }
        finally {
            endBatch();
        }
    };
    ObservableObjectAdministration.prototype.illegalAccess = function (owner, propName) {
        /**
         * This happens if a property is accessed through the prototype chain, but the property was
         * declared directly as own property on the prototype.
         *
         * E.g.:
         * class A {
         * }
         * extendObservable(A.prototype, { x: 1 })
         *
         * classB extens A {
         * }
         * console.log(new B().x)
         *
         * It is unclear whether the property should be considered 'static' or inherited.
         * Either use `console.log(A.x)`
         * or: decorate(A, { x: observable })
         *
         * When using decorate, the property will always be redeclared as own property on the actual instance
         */
        console.warn("Property '" + propName + "' of '" + owner + "' was accessed through the prototype chain. Use 'decorate' instead to declare the prop or access it statically through it's owner");
    };
    /**
     * Observes this object. Triggers for the events 'add', 'update' and 'delete'.
     * See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/observe
     * for callback details
     */
    ObservableObjectAdministration.prototype.observe = function (callback, fireImmediately) {
        process.env.NODE_ENV !== "production" &&
            invariant(fireImmediately !== true, "`observe` doesn't support the fire immediately property for observable objects.");
        return registerListener(this, callback);
    };
    ObservableObjectAdministration.prototype.intercept = function (handler) {
        return registerInterceptor(this, handler);
    };
    ObservableObjectAdministration.prototype.notifyPropertyAddition = function (key, newValue) {
        var notify = hasListeners(this);
        var notifySpy = isSpyEnabled();
        var change = notify || notifySpy
            ? {
                type: "add",
                object: this.proxy || this.target,
                name: key,
                newValue: newValue
            }
            : null;
        if (notifySpy && process.env.NODE_ENV !== "production")
            spyReportStart(__assign({}, change, { name: this.name, key: key }));
        if (notify)
            notifyListeners(this, change);
        if (notifySpy && process.env.NODE_ENV !== "production")
            spyReportEnd();
        if (this.pendingKeys) {
            var entry = this.pendingKeys.get(key);
            if (entry)
                entry.set(true);
        }
        this.keysAtom.reportChanged();
    };
    ObservableObjectAdministration.prototype.getKeys = function () {
        var e_1, _a;
        this.keysAtom.reportObserved();
        // return Reflect.ownKeys(this.values) as any
        var res = [];
        try {
            for (var _b = __values(this.values), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), key = _d[0], value = _d[1];
                if (value instanceof ObservableValue)
                    res.push(key);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return res;
    };
    return ObservableObjectAdministration;
}());
function asObservableObject(target, name, defaultEnhancer) {
    if (name === void 0) { name = ""; }
    if (defaultEnhancer === void 0) { defaultEnhancer = deepEnhancer; }
    if (Object.prototype.hasOwnProperty.call(target, $mobx))
        return target[$mobx];
    process.env.NODE_ENV !== "production" &&
        invariant(Object.isExtensible(target), "Cannot make the designated object observable; it is not extensible");
    if (!isPlainObject(target))
        name = (target.constructor.name || "ObservableObject") + "@" + getNextId();
    if (!name)
        name = "ObservableObject@" + getNextId();
    var adm = new ObservableObjectAdministration(target, new Map(), stringifyKey(name), defaultEnhancer);
    addHiddenProp(target, $mobx, adm);
    return adm;
}
var observablePropertyConfigs = Object.create(null);
var computedPropertyConfigs = Object.create(null);
function generateObservablePropConfig(propName) {
    return (observablePropertyConfigs[propName] ||
        (observablePropertyConfigs[propName] = {
            configurable: true,
            enumerable: true,
            get: function () {
                return this[$mobx].read(propName);
            },
            set: function (v) {
                this[$mobx].write(propName, v);
            }
        }));
}
function getAdministrationForComputedPropOwner(owner) {
    var adm = owner[$mobx];
    if (!adm) {
        // because computed props are declared on proty,
        // the current instance might not have been initialized yet
        initializeInstance(owner);
        return owner[$mobx];
    }
    return adm;
}
function generateComputedPropConfig(propName) {
    return (computedPropertyConfigs[propName] ||
        (computedPropertyConfigs[propName] = {
            configurable: globalState.computedConfigurable,
            enumerable: false,
            get: function () {
                return getAdministrationForComputedPropOwner(this).read(propName);
            },
            set: function (v) {
                getAdministrationForComputedPropOwner(this).write(propName, v);
            }
        }));
}
var isObservableObjectAdministration = createInstanceofPredicate("ObservableObjectAdministration", ObservableObjectAdministration);
function isObservableObject(thing) {
    if (isObject(thing)) {
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance(thing);
        return isObservableObjectAdministration(thing[$mobx]);
    }
    return false;
}

function getAtom(thing, property) {
    if (typeof thing === "object" && thing !== null) {
        if (isObservableArray(thing)) {
            if (property !== undefined)
                fail(process.env.NODE_ENV !== "production" &&
                    "It is not possible to get index atoms from arrays");
            return thing[$mobx].atom;
        }
        if (isObservableSet(thing)) {
            return thing[$mobx];
        }
        if (isObservableMap(thing)) {
            var anyThing = thing;
            if (property === undefined)
                return anyThing._keysAtom;
            var observable = anyThing._data.get(property) || anyThing._hasMap.get(property);
            if (!observable)
                fail(process.env.NODE_ENV !== "production" &&
                    "the entry '" + property + "' does not exist in the observable map '" + getDebugName(thing) + "'");
            return observable;
        }
        // Initializers run lazily when transpiling to babel, so make sure they are run...
        initializeInstance(thing);
        if (property && !thing[$mobx])
            thing[property]; // See #1072
        if (isObservableObject(thing)) {
            if (!property)
                return fail(process.env.NODE_ENV !== "production" && "please specify a property");
            var observable = thing[$mobx].values.get(property);
            if (!observable)
                fail(process.env.NODE_ENV !== "production" &&
                    "no observable property '" + property + "' found on the observable object '" + getDebugName(thing) + "'");
            return observable;
        }
        if (isAtom(thing) || isComputedValue(thing) || isReaction(thing)) {
            return thing;
        }
    }
    else if (typeof thing === "function") {
        if (isReaction(thing[$mobx])) {
            // disposer function
            return thing[$mobx];
        }
    }
    return fail(process.env.NODE_ENV !== "production" && "Cannot obtain atom from " + thing);
}
function getAdministration(thing, property) {
    if (!thing)
        fail("Expecting some object");
    if (property !== undefined)
        return getAdministration(getAtom(thing, property));
    if (isAtom(thing) || isComputedValue(thing) || isReaction(thing))
        return thing;
    if (isObservableMap(thing) || isObservableSet(thing))
        return thing;
    // Initializers run lazily when transpiling to babel, so make sure they are run...
    initializeInstance(thing);
    if (thing[$mobx])
        return thing[$mobx];
    fail(process.env.NODE_ENV !== "production" && "Cannot obtain administration from " + thing);
}
function getDebugName(thing, property) {
    var named;
    if (property !== undefined)
        named = getAtom(thing, property);
    else if (isObservableObject(thing) || isObservableMap(thing) || isObservableSet(thing))
        named = getAdministration(thing);
    else
        named = getAtom(thing); // valid for arrays as well
    return named.name;
}

var toString = Object.prototype.toString;
function deepEqual(a, b) {
    return eq(a, b);
}
// Copied from https://github.com/jashkenas/underscore/blob/5c237a7c682fb68fd5378203f0bf22dce1624854/underscore.js#L1186-L1289
// Internal recursive comparison function for `isEqual`.
function eq(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b)
        return a !== 0 || 1 / a === 1 / b;
    // `null` or `undefined` only equal to itself (strict comparison).
    if (a == null || b == null)
        return false;
    // `NaN`s are equivalent, but non-reflexive.
    if (a !== a)
        return b !== b;
    // Exhaust primitive checks
    var type = typeof a;
    if (type !== "function" && type !== "object" && typeof b != "object")
        return false;
    return deepEq(a, b, aStack, bStack);
}
// Internal recursive comparison function for `isEqual`.
function deepEq(a, b, aStack, bStack) {
    // Unwrap any wrapped objects.
    a = unwrap(a);
    b = unwrap(b);
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b))
        return false;
    switch (className) {
        // Strings, numbers, regular expressions, dates, and booleans are compared by value.
        case "[object RegExp]":
        // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
        case "[object String]":
            // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
            // equivalent to `new String("5")`.
            return "" + a === "" + b;
        case "[object Number]":
            // `NaN`s are equivalent, but non-reflexive.
            // Object(NaN) is equivalent to NaN.
            if (+a !== +a)
                return +b !== +b;
            // An `egal` comparison is performed for other numeric values.
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case "[object Date]":
        case "[object Boolean]":
            // Coerce dates and booleans to numeric primitive values. Dates are compared by their
            // millisecond representations. Note that invalid dates with millisecond representations
            // of `NaN` are not equivalent.
            return +a === +b;
        case "[object Symbol]":
            return (typeof Symbol !== "undefined" && Symbol.valueOf.call(a) === Symbol.valueOf.call(b));
    }
    var areArrays = className === "[object Array]";
    if (!areArrays) {
        if (typeof a != "object" || typeof b != "object")
            return false;
        // Objects with different constructors are not equivalent, but `Object`s or `Array`s
        // from different frames are.
        var aCtor = a.constructor, bCtor = b.constructor;
        if (aCtor !== bCtor &&
            !(typeof aCtor === "function" &&
                aCtor instanceof aCtor &&
                typeof bCtor === "function" &&
                bCtor instanceof bCtor) &&
            ("constructor" in a && "constructor" in b)) {
            return false;
        }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
        // Linear search. Performance is inversely proportional to the number of
        // unique nested structures.
        if (aStack[length] === a)
            return bStack[length] === b;
    }
    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);
    // Recursively compare objects and arrays.
    if (areArrays) {
        // Compare array lengths to determine if a deep comparison is necessary.
        length = a.length;
        if (length !== b.length)
            return false;
        // Deep compare the contents, ignoring non-numeric properties.
        while (length--) {
            if (!eq(a[length], b[length], aStack, bStack))
                return false;
        }
    }
    else {
        // Deep compare objects.
        var keys = Object.keys(a);
        var key = void 0;
        length = keys.length;
        // Ensure that both objects contain the same number of properties before comparing deep equality.
        if (Object.keys(b).length !== length)
            return false;
        while (length--) {
            // Deep compare each member
            key = keys[length];
            if (!(has$1(b, key) && eq(a[key], b[key], aStack, bStack)))
                return false;
        }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
}
function unwrap(a) {
    if (isObservableArray(a))
        return a.slice();
    if (isES6Map(a) || isObservableMap(a))
        return Array.from(a.entries());
    if (isES6Set(a) || isObservableSet(a))
        return Array.from(a.entries());
    return a;
}
function has$1(a, key) {
    return Object.prototype.hasOwnProperty.call(a, key);
}

function makeIterable(iterator) {
    iterator[Symbol.iterator] = getSelf;
    return iterator;
}
function getSelf() {
    return this;
}

/*
The only reason for this file to exist is pure horror:
Without it rollup can make the bundling fail at any point in time; when it rolls up the files in the wrong order
it will cause undefined errors (for example because super classes or local variables not being hoisted).
With this file that will still happen,
but at least in this file we can magically reorder the imports with trial and error until the build succeeds again.
*/

/**
 * (c) Michel Weststrate 2015 - 2018
 * MIT Licensed
 *
 * Welcome to the mobx sources! To get an global overview of how MobX internally works,
 * this is a good place to start:
 * https://medium.com/@mweststrate/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254#.xvbh6qd74
 *
 * Source folders:
 * ===============
 *
 * - api/     Most of the public static methods exposed by the module can be found here.
 * - core/    Implementation of the MobX algorithm; atoms, derivations, reactions, dependency trees, optimizations. Cool stuff can be found here.
 * - types/   All the magic that is need to have observable objects, arrays and values is in this folder. Including the modifiers like `asFlat`.
 * - utils/   Utility stuff.
 *
 */
if (typeof Proxy === "undefined" || typeof Symbol === "undefined") {
    throw new Error("[mobx] MobX 5+ requires Proxy and Symbol objects. If your environment doesn't support Symbol or Proxy objects, please downgrade to MobX 4. For React Native Android, consider upgrading JSCore.");
}
try {
    // define process.env if needed
    // if this is not a production build in the first place
    // (in which case the expression below would be substituted with 'production')
    process.env.NODE_ENV;
}
catch (e) {
    var g = getGlobal();
    if (typeof process === "undefined")
        g.process = {};
    g.process.env = {};
}
(function () {
    function testCodeMinification() { }
    if (testCodeMinification.name !== "testCodeMinification" &&
        process.env.NODE_ENV !== "production" &&
        process.env.IGNORE_MOBX_MINIFY_WARNING !== "true") {
        // trick so it doesn't get replaced
        var varName = ["process", "env", "NODE_ENV"].join(".");
        console.warn("[mobx] you are running a minified build, but '" + varName + "' was not set to 'production' in your bundler. This results in an unnecessarily large and slow bundle");
    }
})();
if (typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ === "object") {
    // See: https://github.com/andykog/mobx-devtools/
    __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
        spy: spy,
        extras: {
            getDebugName: getDebugName
        },
        $mobx: $mobx
    });
}

if (!useState) {
    throw new Error("mobx-react-lite requires React with Hooks support");
}
if (!spy) {
    throw new Error("mobx-react-lite requires mobx at least version 4 to be available");
}

var globalIsUsingStaticRendering = false;
function isUsingStaticRendering() {
    return globalIsUsingStaticRendering;
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign$1 = function() {
    __assign$1 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};

function __read$1(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function printDebugValue(v) {
    if (!v.current) {
        return "<unknown>";
    }
    return getDependencyTree(v.current);
}

var EMPTY_ARRAY$1 = [];
function useUnmount(fn) {
    useEffect(function () { return fn; }, EMPTY_ARRAY$1);
}
function useForceUpdate() {
    var _a = __read$1(useState(0), 2), setTick = _a[1];
    var update = useCallback(function () {
        setTick(function (tick) { return tick + 1; });
    }, []);
    return update;
}

var EMPTY_OBJECT$1 = {};
function useObserver(fn, baseComponentName, options) {
    if (baseComponentName === void 0) { baseComponentName = "observed"; }
    if (options === void 0) { options = EMPTY_OBJECT$1; }
    if (isUsingStaticRendering()) {
        return fn();
    }
    var wantedForceUpdateHook = options.useForceUpdate || useForceUpdate;
    var forceUpdate = wantedForceUpdateHook();
    var reaction$$1 = useRef(null);
    if (!reaction$$1.current) {
        reaction$$1.current = new Reaction("observer(" + baseComponentName + ")", function () {
            forceUpdate();
        });
    }
    var dispose = function () {
        if (reaction$$1.current && !reaction$$1.current.isDisposed) {
            reaction$$1.current.dispose();
        }
    };
    useDebugValue(reaction$$1, printDebugValue);
    useUnmount(function () {
        dispose();
    });
    // render the original component, but have the
    // reaction track the observables, so that rendering
    // can be invalidated (see above) once a dependency changes
    var rendering;
    var exception;
    reaction$$1.current.track(function () {
        try {
            rendering = fn();
        }
        catch (e) {
            exception = e;
        }
    });
    if (exception) {
        dispose();
        throw exception; // re-throw any exceptions catched during rendering
    }
    return rendering;
}

// n.b. base case is not used for actual typings or exported in the typing files
function observer(baseComponent, options) {
    // The working of observer is explained step by step in this talk: https://www.youtube.com/watch?v=cPF4iBedoF0&feature=youtu.be&t=1307
    if (isUsingStaticRendering()) {
        return baseComponent;
    }
    var realOptions = __assign$1({ forwardRef: false }, options);
    var baseComponentName = baseComponent.displayName || baseComponent.name;
    var wrappedComponent = function (props, ref) {
        return useObserver(function () { return baseComponent(props, ref); }, baseComponentName);
    };
    wrappedComponent.displayName = baseComponentName;
    // memo; we are not intested in deep updates
    // in props; we assume that if deep objects are changed,
    // this is in observables, which would have been tracked anyway
    var memoComponent;
    if (realOptions.forwardRef) {
        // we have to use forwardRef here because:
        // 1. it cannot go before memo, only after it
        // 2. forwardRef converts the function into an actual component, so we can't let the baseComponent do it
        //    since it wouldn't be a callable function anymore
        memoComponent = memo(forwardRef(wrappedComponent));
    }
    else {
        memoComponent = memo(wrappedComponent);
    }
    copyStaticProperties(baseComponent, memoComponent);
    memoComponent.displayName = baseComponentName;
    return memoComponent;
}
// based on https://github.com/mridgway/hoist-non-react-statics/blob/master/src/index.js
var hoistBlackList = {
    $$typeof: true,
    render: true,
    compare: true,
    type: true
};
function copyStaticProperties(base, target) {
    Object.keys(base).forEach(function (key) {
        if (base.hasOwnProperty(key) && !hoistBlackList[key]) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(base, key));
        }
    });
}

function ObserverComponent(_a) {
    var children = _a.children, render = _a.render;
    var component = children || render;
    if (typeof component !== "function") {
        return null;
    }
    return useObserver(component);
}
ObserverComponent.propTypes = {
    children: ObserverPropsCheck,
    render: ObserverPropsCheck
};
ObserverComponent.displayName = "Observer";
function ObserverPropsCheck(props, key, componentName, location, propFullName) {
    var extraKey = key === "children" ? "render" : "children";
    var hasProp = typeof props[key] === "function";
    var hasExtraProp = typeof props[extraKey] === "function";
    if (hasProp && hasExtraProp) {
        return new Error("MobX Observer: Do not use children and render in the same time in`" + componentName);
    }
    if (hasProp || hasExtraProp) {
        return null;
    }
    return new Error("Invalid prop `" +
        propFullName +
        "` of type `" +
        typeof props[key] +
        "` supplied to" +
        " `" +
        componentName +
        "`, expected `function`.");
}

var g$1=0,w={};function j(e){return w[e]||(w[e]=function(e){if("function"==typeof Symbol)return Symbol(e);var r="__$mobx-react "+e+" ("+g$1+")";return g$1++,r}(e)),w[e]}function x(e,r){if(P(e,r))return !0;if("object"!=typeof e||null===e||"object"!=typeof r||null===r)return !1;var t=Object.keys(e),n=Object.keys(r);if(t.length!==n.length)return !1;for(var o=0;o<t.length;o++)if(!hasOwnProperty.call(r,t[o])||!P(e[t[o]],r[t[o]]))return !1;return !0}function P(e,r){return e===r?0!==e||1/e==1/r:e!=e&&r!=r}var E={$$typeof:1,render:1,compare:1,type:1,childContextTypes:1,contextType:1,contextTypes:1,defaultProps:1,getDefaultProps:1,getDerivedStateFromError:1,getDerivedStateFromProps:1,mixins:1,propTypes:1};function R(e,r,t){Object.hasOwnProperty.call(e,r)?e[r]=t:Object.defineProperty(e,r,{enumerable:!1,configurable:!0,writable:!0,value:t});}var S=j("patchMixins"),k=j("patchedDefinition");function A(e,r){for(var t=this,n=[],o=arguments.length-2;o-- >0;)n[o]=arguments[o+2];r.locks++;try{var i;return null!=e&&(i=e.apply(this,n)),i}finally{r.locks--,0===r.locks&&r.methods.forEach(function(e){e.apply(t,n);});}}function C(e,r){return function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];A.call.apply(A,[this,e,r].concat(t));}}function U(e,r,t){var n=function(e,r){var t=e[S]=e[S]||{},n=t[r]=t[r]||{};return n.locks=n.locks||0,n.methods=n.methods||[],n}(e,r);n.methods.indexOf(t)<0&&n.methods.push(t);var o=Object.getOwnPropertyDescriptor(e,r);if(!o||!o[k]){var i=function e(r,t,n,o,i){var a,c=C(i,o);return (a={})[k]=!0,a.get=function(){return c},a.set=function(i){if(this===r)c=C(i,o);else{var a=e(this,t,n,o,i);Object.defineProperty(this,t,a);}},a.configurable=!0,a.enumerable=n,a}(e,r,o?o.enumerable:void 0,n,e[r]);Object.defineProperty(e,r,i);}}var M=$mobx||"$mobx",$=j("isUnmounted"),_=j("skipRender"),T=j("isForcingUpdate");function N(e,t){return isUsingStaticRendering()&&console.warn("[mobx-react] It seems that a re-rendering of a React component is triggered while in static (server-side) mode. Please make sure components are rendered only once server-side."),this.state!==t||!x(this.props,e)}function D(e,r){var t=j("reactProp_"+r+"_valueHolder"),n=j("reactProp_"+r+"_atomHolder");function o(){return this[n]||R(this,n,createAtom("reactive "+r)),this[n]}Object.defineProperty(e,r,{configurable:!0,enumerable:!0,get:function(){return o.call(this).reportObserved(),this[t]},set:function(e){this[T]||x(this[t],e)?R(this,t,e):(R(this,t,e),R(this,_,!0),o.call(this).reportChanged(),R(this,_,!1));}});}var I="function"==typeof Symbol&&Symbol.for,q=I?Symbol.for("react.forward_ref"):"function"==typeof forwardRef&&forwardRef(function(){}).$$typeof,F=I?Symbol.for("react.memo"):"function"==typeof memo&&memo(function(){}).$$typeof;function W(e){if(!0===e.isMobxInjector&&console.warn("Mobx observer: You are trying to use 'observer' on a component that already has 'inject'. Please apply 'observer' before applying 'inject'"),F&&e.$$typeof===F)throw new Error("Mobx observer: You are trying to use 'observer' on function component wrapped to either another observer or 'React.memo'. The observer already applies 'React.memo' for you.");if(q&&e.$$typeof===q){var s=e.render;if("function"!=typeof s)throw new Error("render property of ForwardRef was not a function");return forwardRef(function(){var e=arguments;return React__default.createElement(ObserverComponent,null,function(){return s.apply(void 0,e)})})}return "function"!=typeof e||e.prototype&&e.prototype.render||e.isReactClass||Object.prototype.isPrototypeOf.call(Component,e)?function(e){var t=e.prototype;if(t.componentWillReact)throw new Error("The componentWillReact life-cycle event is no longer supported");if(e.__proto__!==PureComponent)if(t.shouldComponentUpdate){if(t.shouldComponentUpdate!==N)throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.")}else t.shouldComponentUpdate=N;D(t,"props"),D(t,"state");var n=t.render;return t.render=function(){return function(e){var t=this;if(!0===isUsingStaticRendering())return e.call(this);R(this,_,!1),R(this,T,!1);var n=this.displayName||this.name||this.constructor&&(this.constructor.displayName||this.constructor.name)||"<component>",o=e.bind(this),i=!1,c=new Reaction(n+".render()",function(){if(!i&&(i=!0,!0!==t[$])){var e=!0;try{R(t,T,!0),t[_]||Component.prototype.forceUpdate.call(t),e=!1;}finally{R(t,T,!1),e&&c.dispose();}}});function s(){i=!1;var e=void 0,r=void 0;if(c.track(function(){try{r=allowStateChanges(!1,o);}catch(r){e=r;}}),e)throw e;return r}return c.reactComponent=this,s[M]=c,this.render=s,s.call(this)}.call(this,n)},U(t,"componentWillUnmount",function(){!0!==isUsingStaticRendering()&&(this.render[M]&&this.render[M].dispose(),this[$]=!0);}),e}(e):observer(e)}var L=React__default.createContext({});function H(e,r,t,n){var i,a,c,s=React__default.forwardRef(function(t,n){var i=Object.assign({},t),a=React__default.useContext(L);return Object.assign(i,e(a||{},i)||{}),n&&(i.ref=n),createElement(r,i)});return n&&(s=W(s)),s.isMobxInjector=!0,i=r,a=s,c=Object.getOwnPropertyNames(Object.getPrototypeOf(i)),Object.getOwnPropertyNames(i).forEach(function(e){E[e]||-1!==c.indexOf(e)||Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(i,e));}),s.wrappedComponent=r,s.displayName=function(e,r){var t=e.displayName||e.name||e.constructor&&e.constructor.name||"Component";return r?"inject-with-"+r+"("+t+")":"inject("+t+")"}(r,t),s}function Y(){for(var e,r=[],t=arguments.length;t--;)r[t]=arguments[t];return "function"==typeof arguments[0]?(e=arguments[0],function(r){return H(e,r,e.name,!0)}):function(e){return H(function(e){return function(r,t){return e.forEach(function(e){if(!(e in t)){if(!(e in r))throw new Error("MobX injector: Store '"+e+"' is not available! Make sure it is provided by some Provider");t[e]=r[e];}}),t}}(r),e,r.join("-"),!1)}}var V=j("disposeOnUnmountProto"),z=j("disposeOnUnmountInst");function J(e){function r(r,t,n,o,i,a){for(var c=[],s=arguments.length-6;s-- >0;)c[s]=arguments[s+6];return untracked(function(){return o=o||"<<anonymous>>",a=a||n,null==t[n]?r?new Error("The "+i+" `"+a+"` is marked as required in `"+o+"`, but its value is `"+(null===t[n]?"null":"undefined")+"`."):null:e.apply(void 0,[t,n,o,i,a].concat(c))})}var t=r.bind(null,!1);return t.isRequired=r.bind(null,!0),t}function K(e){var r=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,r){return "symbol"===e||"Symbol"===r["@@toStringTag"]||"function"==typeof Symbol&&r instanceof Symbol}(r,e)?"symbol":r}function Q(e,r){return J(function(t,n,o,i,a){return untracked(function(){if(e&&K(t[n])===r.toLowerCase())return null;var i;switch(r){case"Array":i=isObservableArray;break;case"Object":i=isObservableObject;break;case"Map":i=isObservableMap;break;default:throw new Error("Unexpected mobxType: "+r)}var c=t[n];if(!i(c)){var s=function(e){var r=K(e);if("object"===r){if(e instanceof Date)return "date";if(e instanceof RegExp)return "regexp"}return r}(c),u=e?" or javascript `"+r.toLowerCase()+"`":"";return new Error("Invalid prop `"+a+"` of type `"+s+"` supplied to `"+o+"`, expected `mobx.Observable"+r+"`"+u+".")}return null})})}function Z(e,r){return J(function(t,n,o,i,a){for(var c=[],s=arguments.length-5;s-- >0;)c[s]=arguments[s+5];return untracked(function(){if("function"!=typeof r)return new Error("Property `"+a+"` of component `"+o+"` has invalid PropType notation.");var s=Q(e,"Array")(t,n,o);if(s instanceof Error)return s;for(var u=t[n],f=0;f<u.length;f++)if((s=r.apply(void 0,[u,f,o,i,a+"["+f+"]"].concat(c)))instanceof Error)return s;return null})})}var ee={observableArray:Q(!1,"Array"),observableArrayOf:Z.bind(null,!1),observableMap:Q(!1,"Map"),observableObject:Q(!1,"Object"),arrayOrObservableArray:Q(!0,"Array"),arrayOrObservableArrayOf:Z.bind(null,!0),objectOrObservableObject:Q(!0,"Object")};if(!Component)throw new Error("mobx-react requires React to be available");if(!observable)throw new Error("mobx-react requires mobx to be available");"function"==typeof unstable_batchedUpdates&&configure({reactionScheduler:unstable_batchedUpdates});

var HandlerRole;

(function (HandlerRole) {
  HandlerRole["SOURCE"] = "SOURCE";
  HandlerRole["TARGET"] = "TARGET";
})(HandlerRole || (HandlerRole = {}));

function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
}

/* global window */

var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (typeof module !== 'undefined') {
  root = module;
} else {
  root = Function('return this')();
}

var result = symbolObservablePonyfill(root);

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject$2(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject$2(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[result] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[result] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = process.env.NODE_ENV;

var invariant$1 = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

var invariant_1 = invariant$1;

var INIT_COORDS = 'dnd-core/INIT_COORDS';
var BEGIN_DRAG = 'dnd-core/BEGIN_DRAG';
var PUBLISH_DRAG_SOURCE = 'dnd-core/PUBLISH_DRAG_SOURCE';
var HOVER = 'dnd-core/HOVER';
var DROP = 'dnd-core/DROP';
var END_DRAG = 'dnd-core/END_DRAG';

function setClientOffset(clientOffset, sourceClientOffset) {
  return {
    type: INIT_COORDS,
    payload: {
      sourceClientOffset: sourceClientOffset || null,
      clientOffset: clientOffset || null
    }
  };
}

function _typeof$1(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

// cheap lodash replacements

/**
 * drop-in replacement for _.get
 * @param obj
 * @param path
 * @param defaultValue
 */
function get$2(obj, path, defaultValue) {
  return path.split('.').reduce(function (a, c) {
    return a && a[c] ? a[c] : defaultValue || null;
  }, obj);
}
/**
 * drop-in replacement for _.without
 */

function without(items, item) {
  return items.filter(function (i) {
    return i !== item;
  });
}
/**
 * drop-in replacement for _.isString
 * @param input
 */

function isObject$1(input) {
  return _typeof$1(input) === 'object';
}
/**
 * repalcement for _.xor
 * @param itemsA
 * @param itemsB
 */

function xor(itemsA, itemsB) {
  var map = new Map();

  var insertItem = function insertItem(item) {
    return map.set(item, map.has(item) ? map.get(item) + 1 : 1);
  };

  itemsA.forEach(insertItem);
  itemsB.forEach(insertItem);
  var result = [];
  map.forEach(function (count, key) {
    if (count === 1) {
      result.push(key);
    }
  });
  return result;
}
/**
 * replacement for _.intersection
 * @param itemsA
 * @param itemsB
 */

function intersection(itemsA, itemsB) {
  return itemsA.filter(function (t) {
    return itemsB.indexOf(t) > -1;
  });
}

var ResetCoordinatesAction = {
  type: INIT_COORDS,
  payload: {
    clientOffset: null,
    sourceClientOffset: null
  }
};
function createBeginDrag(manager) {
  return function beginDrag() {
    var sourceIds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      publishSource: true
    };
    var _options$publishSourc = options.publishSource,
        publishSource = _options$publishSourc === void 0 ? true : _options$publishSourc,
        clientOffset = options.clientOffset,
        getSourceClientOffset = options.getSourceClientOffset;
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry(); // Initialize the coordinates using the client offset

    manager.dispatch(setClientOffset(clientOffset));
    verifyInvariants(sourceIds, monitor, registry); // Get the draggable source

    var sourceId = getDraggableSource(sourceIds, monitor);

    if (sourceId === null) {
      manager.dispatch(ResetCoordinatesAction);
      return;
    } // Get the source client offset


    var sourceClientOffset = null;

    if (clientOffset) {
      verifyGetSourceClientOffsetIsFunction(getSourceClientOffset);
      sourceClientOffset = getSourceClientOffset(sourceId);
    } // Initialize the full coordinates


    manager.dispatch(setClientOffset(clientOffset, sourceClientOffset));
    var source = registry.getSource(sourceId);
    var item = source.beginDrag(monitor, sourceId);
    verifyItemIsObject(item);
    registry.pinSource(sourceId);
    var itemType = registry.getSourceType(sourceId);
    return {
      type: BEGIN_DRAG,
      payload: {
        itemType: itemType,
        item: item,
        sourceId: sourceId,
        clientOffset: clientOffset || null,
        sourceClientOffset: sourceClientOffset || null,
        isSourcePublic: !!publishSource
      }
    };
  };
}

function verifyInvariants(sourceIds, monitor, registry) {
  invariant_1(!monitor.isDragging(), 'Cannot call beginDrag while dragging.');
  sourceIds.forEach(function (sourceId) {
    invariant_1(registry.getSource(sourceId), 'Expected sourceIds to be registered.');
  });
}

function verifyGetSourceClientOffsetIsFunction(getSourceClientOffset) {
  invariant_1(typeof getSourceClientOffset === 'function', 'When clientOffset is provided, getSourceClientOffset must be a function.');
}

function verifyItemIsObject(item) {
  invariant_1(isObject$1(item), 'Item must be an object.');
}

function getDraggableSource(sourceIds, monitor) {
  var sourceId = null;

  for (var i = sourceIds.length - 1; i >= 0; i--) {
    if (monitor.canDragSource(sourceIds[i])) {
      sourceId = sourceIds[i];
      break;
    }
  }

  return sourceId;
}

function createPublishDragSource(manager) {
  return function publishDragSource() {
    var monitor = manager.getMonitor();

    if (monitor.isDragging()) {
      return {
        type: PUBLISH_DRAG_SOURCE
      };
    }
  };
}

function matchesType(targetType, draggedItemType) {
  if (draggedItemType === null) {
    return targetType === null;
  }

  return Array.isArray(targetType) ? targetType.some(function (t) {
    return t === draggedItemType;
  }) : targetType === draggedItemType;
}

function createHover(manager) {
  return function hover(targetIdsArg) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        clientOffset = _ref.clientOffset;

    verifyTargetIdsIsArray(targetIdsArg);
    var targetIds = targetIdsArg.slice(0);
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry();
    checkInvariants(targetIds, monitor, registry);
    var draggedItemType = monitor.getItemType();
    removeNonMatchingTargetIds(targetIds, registry, draggedItemType);
    hoverAllTargets(targetIds, monitor, registry);
    return {
      type: HOVER,
      payload: {
        targetIds: targetIds,
        clientOffset: clientOffset || null
      }
    };
  };
}

function verifyTargetIdsIsArray(targetIdsArg) {
  invariant_1(Array.isArray(targetIdsArg), 'Expected targetIds to be an array.');
}

function checkInvariants(targetIds, monitor, registry) {
  invariant_1(monitor.isDragging(), 'Cannot call hover while not dragging.');
  invariant_1(!monitor.didDrop(), 'Cannot call hover after drop.');

  for (var i = 0; i < targetIds.length; i++) {
    var targetId = targetIds[i];
    invariant_1(targetIds.lastIndexOf(targetId) === i, 'Expected targetIds to be unique in the passed array.');
    var target = registry.getTarget(targetId);
    invariant_1(target, 'Expected targetIds to be registered.');
  }
}

function removeNonMatchingTargetIds(targetIds, registry, draggedItemType) {
  // Remove those targetIds that don't match the targetType.  This
  // fixes shallow isOver which would only be non-shallow because of
  // non-matching targets.
  for (var i = targetIds.length - 1; i >= 0; i--) {
    var targetId = targetIds[i];
    var targetType = registry.getTargetType(targetId);

    if (!matchesType(targetType, draggedItemType)) {
      targetIds.splice(i, 1);
    }
  }
}

function hoverAllTargets(targetIds, monitor, registry) {
  // Finally call hover on all matching targets.
  targetIds.forEach(function (targetId) {
    var target = registry.getTarget(targetId);
    target.hover(monitor, targetId);
  });
}

function ownKeys$1(object$$1, enumerableOnly) { var keys = Object.keys(object$$1); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object$$1); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object$$1, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function createDrop(manager) {
  return function drop() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry();
    verifyInvariants$1(monitor);
    var targetIds = getDroppableTargets(monitor); // Multiple actions are dispatched here, which is why this doesn't return an action

    targetIds.forEach(function (targetId, index) {
      var dropResult = determineDropResult(targetId, index, registry, monitor);
      var action = {
        type: DROP,
        payload: {
          dropResult: _objectSpread({}, options, {}, dropResult)
        }
      };
      manager.dispatch(action);
    });
  };
}

function verifyInvariants$1(monitor) {
  invariant_1(monitor.isDragging(), 'Cannot call drop while not dragging.');
  invariant_1(!monitor.didDrop(), 'Cannot call drop twice during one drag operation.');
}

function determineDropResult(targetId, index, registry, monitor) {
  var target = registry.getTarget(targetId);
  var dropResult = target ? target.drop(monitor, targetId) : undefined;
  verifyDropResultType(dropResult);

  if (typeof dropResult === 'undefined') {
    dropResult = index === 0 ? {} : monitor.getDropResult();
  }

  return dropResult;
}

function verifyDropResultType(dropResult) {
  invariant_1(typeof dropResult === 'undefined' || isObject$1(dropResult), 'Drop result must either be an object or undefined.');
}

function getDroppableTargets(monitor) {
  var targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
  targetIds.reverse();
  return targetIds;
}

function createEndDrag(manager) {
  return function endDrag() {
    var monitor = manager.getMonitor();
    var registry = manager.getRegistry();
    verifyIsDragging(monitor);
    var sourceId = monitor.getSourceId();
    var source = registry.getSource(sourceId, true);
    source.endDrag(monitor, sourceId);
    registry.unpinSource();
    return {
      type: END_DRAG
    };
  };
}

function verifyIsDragging(monitor) {
  invariant_1(monitor.isDragging(), 'Cannot call endDrag while not dragging.');
}

function createDragDropActions(manager) {
  return {
    beginDrag: createBeginDrag(manager),
    publishDragSource: createPublishDragSource(manager),
    hover: createHover(manager),
    drop: createDrop(manager),
    endDrag: createEndDrag(manager)
  };
}

var strictEquality = function strictEquality(a, b) {
  return a === b;
};
/**
 * Determine if two cartesian coordinate offsets are equal
 * @param offsetA
 * @param offsetB
 */

function areCoordsEqual(offsetA, offsetB) {
  if (!offsetA && !offsetB) {
    return true;
  } else if (!offsetA || !offsetB) {
    return false;
  } else {
    return offsetA.x === offsetB.x && offsetA.y === offsetB.y;
  }
}
/**
 * Determines if two arrays of items are equal
 * @param a The first array of items
 * @param b The second array of items
 */

function areArraysEqual(a, b) {
  var isEqual = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : strictEquality;

  if (a.length !== b.length) {
    return false;
  }

  for (var i = 0; i < a.length; ++i) {
    if (!isEqual(a[i], b[i])) {
      return false;
    }
  }

  return true;
}

function ownKeys$2(object$$1, enumerableOnly) { var keys = Object.keys(object$$1); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object$$1); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object$$1, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(source, true).forEach(function (key) { _defineProperty$2(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var initialState = {
  initialSourceClientOffset: null,
  initialClientOffset: null,
  clientOffset: null
};
function dragOffset() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var payload = action.payload;

  switch (action.type) {
    case INIT_COORDS:
    case BEGIN_DRAG:
      return {
        initialSourceClientOffset: payload.sourceClientOffset,
        initialClientOffset: payload.clientOffset,
        clientOffset: payload.clientOffset
      };

    case HOVER:
      if (areCoordsEqual(state.clientOffset, payload.clientOffset)) {
        return state;
      }

      return _objectSpread$1({}, state, {
        clientOffset: payload.clientOffset
      });

    case END_DRAG:
    case DROP:
      return initialState;

    default:
      return state;
  }
}

var ADD_SOURCE = 'dnd-core/ADD_SOURCE';
var ADD_TARGET = 'dnd-core/ADD_TARGET';
var REMOVE_SOURCE = 'dnd-core/REMOVE_SOURCE';
var REMOVE_TARGET = 'dnd-core/REMOVE_TARGET';
function addSource(sourceId) {
  return {
    type: ADD_SOURCE,
    payload: {
      sourceId: sourceId
    }
  };
}
function addTarget(targetId) {
  return {
    type: ADD_TARGET,
    payload: {
      targetId: targetId
    }
  };
}
function removeSource(sourceId) {
  return {
    type: REMOVE_SOURCE,
    payload: {
      sourceId: sourceId
    }
  };
}
function removeTarget(targetId) {
  return {
    type: REMOVE_TARGET,
    payload: {
      targetId: targetId
    }
  };
}

function ownKeys$3(object$$1, enumerableOnly) { var keys = Object.keys(object$$1); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object$$1); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object$$1, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(source, true).forEach(function (key) { _defineProperty$3(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var initialState$1 = {
  itemType: null,
  item: null,
  sourceId: null,
  targetIds: [],
  dropResult: null,
  didDrop: false,
  isSourcePublic: null
};
function dragOperation() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState$1;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var payload = action.payload;

  switch (action.type) {
    case BEGIN_DRAG:
      return _objectSpread$2({}, state, {
        itemType: payload.itemType,
        item: payload.item,
        sourceId: payload.sourceId,
        isSourcePublic: payload.isSourcePublic,
        dropResult: null,
        didDrop: false
      });

    case PUBLISH_DRAG_SOURCE:
      return _objectSpread$2({}, state, {
        isSourcePublic: true
      });

    case HOVER:
      return _objectSpread$2({}, state, {
        targetIds: payload.targetIds
      });

    case REMOVE_TARGET:
      if (state.targetIds.indexOf(payload.targetId) === -1) {
        return state;
      }

      return _objectSpread$2({}, state, {
        targetIds: without(state.targetIds, payload.targetId)
      });

    case DROP:
      return _objectSpread$2({}, state, {
        dropResult: payload.dropResult,
        didDrop: true,
        targetIds: []
      });

    case END_DRAG:
      return _objectSpread$2({}, state, {
        itemType: null,
        item: null,
        sourceId: null,
        dropResult: null,
        didDrop: false,
        isSourcePublic: null,
        targetIds: []
      });

    default:
      return state;
  }
}

function refCount() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_SOURCE:
    case ADD_TARGET:
      return state + 1;

    case REMOVE_SOURCE:
    case REMOVE_TARGET:
      return state - 1;

    default:
      return state;
  }
}

var NONE = [];
var ALL = [];
NONE.__IS_NONE__ = true;
ALL.__IS_ALL__ = true;
/**
 * Determines if the given handler IDs are dirty or not.
 *
 * @param dirtyIds The set of dirty handler ids
 * @param handlerIds The set of handler ids to check
 */

function areDirty(dirtyIds, handlerIds) {
  if (dirtyIds === NONE) {
    return false;
  }

  if (dirtyIds === ALL || typeof handlerIds === 'undefined') {
    return true;
  }

  var commonIds = intersection(handlerIds, dirtyIds);
  return commonIds.length > 0;
}

function dirtyHandlerIds() {
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case HOVER:
      break;

    case ADD_SOURCE:
    case ADD_TARGET:
    case REMOVE_TARGET:
    case REMOVE_SOURCE:
      return NONE;

    case BEGIN_DRAG:
    case PUBLISH_DRAG_SOURCE:
    case END_DRAG:
    case DROP:
    default:
      return ALL;
  }

  var _action$payload = action.payload,
      _action$payload$targe = _action$payload.targetIds,
      targetIds = _action$payload$targe === void 0 ? [] : _action$payload$targe,
      _action$payload$prevT = _action$payload.prevTargetIds,
      prevTargetIds = _action$payload$prevT === void 0 ? [] : _action$payload$prevT;
  var result = xor(targetIds, prevTargetIds);
  var didChange = result.length > 0 || !areArraysEqual(targetIds, prevTargetIds);

  if (!didChange) {
    return NONE;
  } // Check the target ids at the innermost position. If they are valid, add them
  // to the result


  var prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
  var innermostTargetId = targetIds[targetIds.length - 1];

  if (prevInnermostTargetId !== innermostTargetId) {
    if (prevInnermostTargetId) {
      result.push(prevInnermostTargetId);
    }

    if (innermostTargetId) {
      result.push(innermostTargetId);
    }
  }

  return result;
}

function stateId() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return state + 1;
}

function ownKeys$4(object$$1, enumerableOnly) { var keys = Object.keys(object$$1); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object$$1); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object$$1, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(source, true).forEach(function (key) { _defineProperty$4(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function reduce() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return {
    dirtyHandlerIds: dirtyHandlerIds(state.dirtyHandlerIds, {
      type: action.type,
      payload: _objectSpread$3({}, action.payload, {
        prevTargetIds: get$2(state, 'dragOperation.targetIds', [])
      })
    }),
    dragOffset: dragOffset(state.dragOffset, action),
    refCount: refCount(state.refCount, action),
    dragOperation: dragOperation(state.dragOperation, action),
    stateId: stateId(state.stateId)
  };
}

/**
 * Coordinate addition
 * @param a The first coordinate
 * @param b The second coordinate
 */
function add(a, b) {
  return {
    x: a.x + b.x,
    y: a.y + b.y
  };
}
/**
 * Coordinate subtraction
 * @param a The first coordinate
 * @param b The second coordinate
 */

function subtract(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}
/**
 * Returns the cartesian distance of the drag source component's position, based on its position
 * at the time when the current drag operation has started, and the movement difference.
 *
 * Returns null if no item is being dragged.
 *
 * @param state The offset state to compute from
 */

function getSourceClientOffset(state) {
  var clientOffset = state.clientOffset,
      initialClientOffset = state.initialClientOffset,
      initialSourceClientOffset = state.initialSourceClientOffset;

  if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
    return null;
  }

  return subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);
}
/**
 * Determines the x,y offset between the client offset and the initial client offset
 *
 * @param state The offset state to compute from
 */

function getDifferenceFromInitialOffset(state) {
  var clientOffset = state.clientOffset,
      initialClientOffset = state.initialClientOffset;

  if (!clientOffset || !initialClientOffset) {
    return null;
  }

  return subtract(clientOffset, initialClientOffset);
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DragDropMonitorImpl =
/*#__PURE__*/
function () {
  function DragDropMonitorImpl(store, registry) {
    _classCallCheck(this, DragDropMonitorImpl);

    this.store = store;
    this.registry = registry;
  }

  _createClass(DragDropMonitorImpl, [{
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        handlerIds: undefined
      };
      var handlerIds = options.handlerIds;
      invariant_1(typeof listener === 'function', 'listener must be a function.');
      invariant_1(typeof handlerIds === 'undefined' || Array.isArray(handlerIds), 'handlerIds, when specified, must be an array of strings.');
      var prevStateId = this.store.getState().stateId;

      var handleChange = function handleChange() {
        var state = _this.store.getState();

        var currentStateId = state.stateId;

        try {
          var canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !areDirty(state.dirtyHandlerIds, handlerIds);

          if (!canSkipListener) {
            listener();
          }
        } finally {
          prevStateId = currentStateId;
        }
      };

      return this.store.subscribe(handleChange);
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function subscribeToOffsetChange(listener) {
      var _this2 = this;

      invariant_1(typeof listener === 'function', 'listener must be a function.');
      var previousState = this.store.getState().dragOffset;

      var handleChange = function handleChange() {
        var nextState = _this2.store.getState().dragOffset;

        if (nextState === previousState) {
          return;
        }

        previousState = nextState;
        listener();
      };

      return this.store.subscribe(handleChange);
    }
  }, {
    key: "canDragSource",
    value: function canDragSource(sourceId) {
      if (!sourceId) {
        return false;
      }

      var source = this.registry.getSource(sourceId);
      invariant_1(source, 'Expected to find a valid source.');

      if (this.isDragging()) {
        return false;
      }

      return source.canDrag(this, sourceId);
    }
  }, {
    key: "canDropOnTarget",
    value: function canDropOnTarget(targetId) {
      // undefined on initial render
      if (!targetId) {
        return false;
      }

      var target = this.registry.getTarget(targetId);
      invariant_1(target, 'Expected to find a valid target.');

      if (!this.isDragging() || this.didDrop()) {
        return false;
      }

      var targetType = this.registry.getTargetType(targetId);
      var draggedItemType = this.getItemType();
      return matchesType(targetType, draggedItemType) && target.canDrop(this, targetId);
    }
  }, {
    key: "isDragging",
    value: function isDragging() {
      return Boolean(this.getItemType());
    }
  }, {
    key: "isDraggingSource",
    value: function isDraggingSource(sourceId) {
      // undefined on initial render
      if (!sourceId) {
        return false;
      }

      var source = this.registry.getSource(sourceId, true);
      invariant_1(source, 'Expected to find a valid source.');

      if (!this.isDragging() || !this.isSourcePublic()) {
        return false;
      }

      var sourceType = this.registry.getSourceType(sourceId);
      var draggedItemType = this.getItemType();

      if (sourceType !== draggedItemType) {
        return false;
      }

      return source.isDragging(this, sourceId);
    }
  }, {
    key: "isOverTarget",
    value: function isOverTarget(targetId) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        shallow: false
      };

      // undefined on initial render
      if (!targetId) {
        return false;
      }

      var shallow = options.shallow;

      if (!this.isDragging()) {
        return false;
      }

      var targetType = this.registry.getTargetType(targetId);
      var draggedItemType = this.getItemType();

      if (draggedItemType && !matchesType(targetType, draggedItemType)) {
        return false;
      }

      var targetIds = this.getTargetIds();

      if (!targetIds.length) {
        return false;
      }

      var index = targetIds.indexOf(targetId);

      if (shallow) {
        return index === targetIds.length - 1;
      } else {
        return index > -1;
      }
    }
  }, {
    key: "getItemType",
    value: function getItemType() {
      return this.store.getState().dragOperation.itemType;
    }
  }, {
    key: "getItem",
    value: function getItem() {
      return this.store.getState().dragOperation.item;
    }
  }, {
    key: "getSourceId",
    value: function getSourceId() {
      return this.store.getState().dragOperation.sourceId;
    }
  }, {
    key: "getTargetIds",
    value: function getTargetIds() {
      return this.store.getState().dragOperation.targetIds;
    }
  }, {
    key: "getDropResult",
    value: function getDropResult() {
      return this.store.getState().dragOperation.dropResult;
    }
  }, {
    key: "didDrop",
    value: function didDrop() {
      return this.store.getState().dragOperation.didDrop;
    }
  }, {
    key: "isSourcePublic",
    value: function isSourcePublic() {
      return this.store.getState().dragOperation.isSourcePublic;
    }
  }, {
    key: "getInitialClientOffset",
    value: function getInitialClientOffset() {
      return this.store.getState().dragOffset.initialClientOffset;
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function getInitialSourceClientOffset() {
      return this.store.getState().dragOffset.initialSourceClientOffset;
    }
  }, {
    key: "getClientOffset",
    value: function getClientOffset() {
      return this.store.getState().dragOffset.clientOffset;
    }
  }, {
    key: "getSourceClientOffset",
    value: function getSourceClientOffset$$1() {
      return getSourceClientOffset(this.store.getState().dragOffset);
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function getDifferenceFromInitialOffset$$1() {
      return getDifferenceFromInitialOffset(this.store.getState().dragOffset);
    }
  }]);

  return DragDropMonitorImpl;
}();

var domain$1; // The domain module is executed on demand
var hasSetImmediate = typeof setImmediate === "function";

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including network IO events in Node.js.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
var raw = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Avoids a function call
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory excaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

rawAsap.requestFlush = requestFlush;
function requestFlush() {
    // Ensure flushing is not bound to any domain.
    // It is not sufficient to exit the domain, because domains exist on a stack.
    // To execute code outside of any domain, the following dance is necessary.
    var parentDomain = process.domain;
    if (parentDomain) {
        if (!domain$1) {
            // Lazy execute the domain module.
            // Only employed if the user elects to use domains.
            domain$1 = domain;
        }
        domain$1.active = process.domain = null;
    }

    // `setImmediate` is slower that `process.nextTick`, but `process.nextTick`
    // cannot handle recursion.
    // `requestFlush` will only be called recursively from `asap.js`, to resume
    // flushing after an error is thrown into a domain.
    // Conveniently, `setImmediate` was introduced in the same version
    // `process.nextTick` started throwing recursion errors.
    if (flushing && hasSetImmediate) {
        setImmediate(flush);
    } else {
        process.nextTick(flush);
    }

    if (parentDomain) {
        domain$1.active = process.domain = parentDomain;
    }
}

var freeTasks = [];

/**
 * Calls a task as soon as possible after returning, in its own event, with
 * priority over IO events. An exception thrown in a task can be handled by
 * `process.on("uncaughtException") or `domain.on("error")`, but will otherwise
 * crash the process. If the error is handled, all subsequent tasks will
 * resume.
 *
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */
var asap_1 = asap;
function asap(task) {
    var rawTask;
    if (freeTasks.length) {
        rawTask = freeTasks.pop();
    } else {
        rawTask = new RawTask();
    }
    rawTask.task = task;
    rawTask.domain = process.domain;
    raw(rawTask);
}

function RawTask() {
    this.task = null;
    this.domain = null;
}

RawTask.prototype.call = function () {
    if (this.domain) {
        this.domain.enter();
    }
    var threw = true;
    try {
        this.task.call();
        threw = false;
        // If the task throws an exception (presumably) Node.js restores the
        // domain stack for the next event.
        if (this.domain) {
            this.domain.exit();
        }
    } finally {
        // We use try/finally and a threw flag to avoid messing up stack traces
        // when we catch and release errors.
        if (threw) {
            // In Node.js, uncaught exceptions are considered fatal errors.
            // Re-throw them to interrupt flushing!
            // Ensure that flushing continues if an uncaught exception is
            // suppressed listening process.on("uncaughtException") or
            // domain.on("error").
            raw.requestFlush();
        }
        // If the task threw an error, we do not want to exit the domain here.
        // Exiting the domain would prevent the domain from catching the error.
        this.task = null;
        this.domain = null;
        freeTasks.push(this);
    }
};

var nextUniqueId = 0;
function getNextUniqueId() {
  return nextUniqueId++;
}

function _typeof$2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$2 = function _typeof(obj) { return typeof obj; }; } else { _typeof$2 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$2(obj); }
function validateSourceContract(source) {
  invariant_1(typeof source.canDrag === 'function', 'Expected canDrag to be a function.');
  invariant_1(typeof source.beginDrag === 'function', 'Expected beginDrag to be a function.');
  invariant_1(typeof source.endDrag === 'function', 'Expected endDrag to be a function.');
}
function validateTargetContract(target) {
  invariant_1(typeof target.canDrop === 'function', 'Expected canDrop to be a function.');
  invariant_1(typeof target.hover === 'function', 'Expected hover to be a function.');
  invariant_1(typeof target.drop === 'function', 'Expected beginDrag to be a function.');
}
function validateType(type, allowArray) {
  if (allowArray && Array.isArray(type)) {
    type.forEach(function (t) {
      return validateType(t, false);
    });
    return;
  }

  invariant_1(typeof type === 'string' || _typeof$2(type) === 'symbol', allowArray ? 'Type can only be a string, a symbol, or an array of either.' : 'Type can only be a string or a symbol.');
}

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); if (staticProps) _defineProperties$1(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function getNextHandlerId(role) {
  var id = getNextUniqueId().toString();

  switch (role) {
    case HandlerRole.SOURCE:
      return "S".concat(id);

    case HandlerRole.TARGET:
      return "T".concat(id);

    default:
      throw new Error("Unknown Handler Role: ".concat(role));
  }
}

function parseRoleFromHandlerId(handlerId) {
  switch (handlerId[0]) {
    case 'S':
      return HandlerRole.SOURCE;

    case 'T':
      return HandlerRole.TARGET;

    default:
      invariant_1(false, "Cannot parse handler ID: ".concat(handlerId));
  }
}

function mapContainsValue(map, searchValue) {
  var entries = map.entries();
  var isDone = false;

  do {
    var _entries$next = entries.next(),
        done = _entries$next.done,
        _entries$next$value = _slicedToArray(_entries$next.value, 2),
        value = _entries$next$value[1];

    if (value === searchValue) {
      return true;
    }

    isDone = !!done;
  } while (!isDone);

  return false;
}

var HandlerRegistryImpl =
/*#__PURE__*/
function () {
  function HandlerRegistryImpl(store) {
    _classCallCheck$1(this, HandlerRegistryImpl);

    this.types = new Map();
    this.dragSources = new Map();
    this.dropTargets = new Map();
    this.pinnedSourceId = null;
    this.pinnedSource = null;
    this.store = store;
  }

  _createClass$1(HandlerRegistryImpl, [{
    key: "addSource",
    value: function addSource$$1(type, source) {
      validateType(type);
      validateSourceContract(source);
      var sourceId = this.addHandler(HandlerRole.SOURCE, type, source);
      this.store.dispatch(addSource(sourceId));
      return sourceId;
    }
  }, {
    key: "addTarget",
    value: function addTarget$$1(type, target) {
      validateType(type, true);
      validateTargetContract(target);
      var targetId = this.addHandler(HandlerRole.TARGET, type, target);
      this.store.dispatch(addTarget(targetId));
      return targetId;
    }
  }, {
    key: "containsHandler",
    value: function containsHandler(handler) {
      return mapContainsValue(this.dragSources, handler) || mapContainsValue(this.dropTargets, handler);
    }
  }, {
    key: "getSource",
    value: function getSource(sourceId) {
      var includePinned = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      invariant_1(this.isSourceId(sourceId), 'Expected a valid source ID.');
      var isPinned = includePinned && sourceId === this.pinnedSourceId;
      var source = isPinned ? this.pinnedSource : this.dragSources.get(sourceId);
      return source;
    }
  }, {
    key: "getTarget",
    value: function getTarget(targetId) {
      invariant_1(this.isTargetId(targetId), 'Expected a valid target ID.');
      return this.dropTargets.get(targetId);
    }
  }, {
    key: "getSourceType",
    value: function getSourceType(sourceId) {
      invariant_1(this.isSourceId(sourceId), 'Expected a valid source ID.');
      return this.types.get(sourceId);
    }
  }, {
    key: "getTargetType",
    value: function getTargetType(targetId) {
      invariant_1(this.isTargetId(targetId), 'Expected a valid target ID.');
      return this.types.get(targetId);
    }
  }, {
    key: "isSourceId",
    value: function isSourceId(handlerId) {
      var role = parseRoleFromHandlerId(handlerId);
      return role === HandlerRole.SOURCE;
    }
  }, {
    key: "isTargetId",
    value: function isTargetId(handlerId) {
      var role = parseRoleFromHandlerId(handlerId);
      return role === HandlerRole.TARGET;
    }
  }, {
    key: "removeSource",
    value: function removeSource$$1(sourceId) {
      var _this = this;

      invariant_1(this.getSource(sourceId), 'Expected an existing source.');
      this.store.dispatch(removeSource(sourceId));
      asap_1(function () {
        _this.dragSources.delete(sourceId);

        _this.types.delete(sourceId);
      });
    }
  }, {
    key: "removeTarget",
    value: function removeTarget$$1(targetId) {
      invariant_1(this.getTarget(targetId), 'Expected an existing target.');
      this.store.dispatch(removeTarget(targetId));
      this.dropTargets.delete(targetId);
      this.types.delete(targetId);
    }
  }, {
    key: "pinSource",
    value: function pinSource(sourceId) {
      var source = this.getSource(sourceId);
      invariant_1(source, 'Expected an existing source.');
      this.pinnedSourceId = sourceId;
      this.pinnedSource = source;
    }
  }, {
    key: "unpinSource",
    value: function unpinSource() {
      invariant_1(this.pinnedSource, 'No source is pinned at the time.');
      this.pinnedSourceId = null;
      this.pinnedSource = null;
    }
  }, {
    key: "addHandler",
    value: function addHandler(role, type, handler) {
      var id = getNextHandlerId(role);
      this.types.set(id, type);

      if (role === HandlerRole.SOURCE) {
        this.dragSources.set(id, handler);
      } else if (role === HandlerRole.TARGET) {
        this.dropTargets.set(id, handler);
      }

      return id;
    }
  }]);

  return HandlerRegistryImpl;
}();

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$2(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$2(Constructor.prototype, protoProps); if (staticProps) _defineProperties$2(Constructor, staticProps); return Constructor; }

function makeStoreInstance(debugMode) {
  // TODO: if we ever make a react-native version of this,
  // we'll need to consider how to pull off dev-tooling
  var reduxDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__;
  return createStore(reduce, debugMode && reduxDevTools && reduxDevTools({
    name: 'dnd-core',
    instanceId: 'dnd-core'
  }));
}

var DragDropManagerImpl =
/*#__PURE__*/
function () {
  function DragDropManagerImpl() {
    var _this = this;

    var debugMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck$2(this, DragDropManagerImpl);

    this.isSetUp = false;

    this.handleRefCountChange = function () {
      var shouldSetUp = _this.store.getState().refCount > 0;

      if (_this.backend) {
        if (shouldSetUp && !_this.isSetUp) {
          _this.backend.setup();

          _this.isSetUp = true;
        } else if (!shouldSetUp && _this.isSetUp) {
          _this.backend.teardown();

          _this.isSetUp = false;
        }
      }
    };

    var store = makeStoreInstance(debugMode);
    this.store = store;
    this.monitor = new DragDropMonitorImpl(store, new HandlerRegistryImpl(store));
    store.subscribe(this.handleRefCountChange);
  }

  _createClass$2(DragDropManagerImpl, [{
    key: "receiveBackend",
    value: function receiveBackend(backend) {
      this.backend = backend;
    }
  }, {
    key: "getMonitor",
    value: function getMonitor() {
      return this.monitor;
    }
  }, {
    key: "getBackend",
    value: function getBackend() {
      return this.backend;
    }
  }, {
    key: "getRegistry",
    value: function getRegistry() {
      return this.monitor.registry;
    }
  }, {
    key: "getActions",
    value: function getActions() {
      /* eslint-disable-next-line @typescript-eslint/no-this-alias */
      var manager = this;
      var dispatch = this.store.dispatch;

      function bindActionCreator(actionCreator) {
        return function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var action = actionCreator.apply(manager, args);

          if (typeof action !== 'undefined') {
            dispatch(action);
          }
        };
      }

      var actions = createDragDropActions(this);
      return Object.keys(actions).reduce(function (boundActions, key) {
        var action = actions[key];
        boundActions[key] = bindActionCreator(action);
        return boundActions;
      }, {});
    }
  }, {
    key: "dispatch",
    value: function dispatch(action) {
      this.store.dispatch(action);
    }
  }]);

  return DragDropManagerImpl;
}();

function createDragDropManager(backendFactory, globalContext, backendOptions, debugMode) {
  var manager = new DragDropManagerImpl(debugMode);
  var backend = backendFactory(manager, globalContext, backendOptions);
  manager.receiveBackend(backend);
  return manager;
}

/**
 * Create the React Context
 */

var DndContext = createContext({
  dragDropManager: undefined
});
/**
 * Creates the context object we're providing
 * @param backend
 * @param context
 */

function createDndContext(backend, context, options, debugMode) {
  return {
    dragDropManager: createDragDropManager(backend, context, options, debugMode)
  };
}

function _slicedToArray$1(arr, i) { return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _nonIterableRest$1(); }

function _nonIterableRest$1() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit$1(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$1(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var refCount$1 = 0;
/**
 * A React component that provides the React-DnD context
 */

var DndProvider = memo(function (_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  var _getDndContextValue = getDndContextValue(props),
      _getDndContextValue2 = _slicedToArray$1(_getDndContextValue, 2),
      manager = _getDndContextValue2[0],
      isGlobalInstance = _getDndContextValue2[1]; // memoized from props

  /**
   * If the global context was used to store the DND context
   * then where theres no more references to it we should
   * clean it up to avoid memory leaks
   */


  useEffect(function () {
    if (isGlobalInstance) {
      refCount$1++;
    }

    return function () {
      if (isGlobalInstance) {
        refCount$1--;

        if (refCount$1 === 0) {
          var context = getGlobalContext();
          context[instanceSymbol] = null;
        }
      }
    };
  }, []);
  return createElement(DndContext.Provider, {
    value: manager
  }, children);
});
DndProvider.displayName = 'DndProvider';

function getDndContextValue(props) {
  if ('manager' in props) {
    var _manager = {
      dragDropManager: props.manager
    };
    return [_manager, false];
  }

  var manager = createSingletonDndContext(props.backend, props.context, props.options, props.debugMode);
  var isGlobalInstance = !props.context;
  return [manager, isGlobalInstance];
}

var instanceSymbol = Symbol.for('__REACT_DND_CONTEXT_INSTANCE__');

function createSingletonDndContext(backend) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getGlobalContext();
  var options = arguments.length > 2 ? arguments[2] : undefined;
  var debugMode = arguments.length > 3 ? arguments[3] : undefined;
  var ctx = context;

  if (!ctx[instanceSymbol]) {
    ctx[instanceSymbol] = createDndContext(backend, context, options, debugMode);
  }

  return ctx[instanceSymbol];
}

function getGlobalContext() {
  return typeof global !== 'undefined' ? global : window;
}

/*
 * A utility for rendering a drag preview image
 */

var DragPreviewImage = memo(function (_ref) {
  var connect = _ref.connect,
      src = _ref.src;

  if (typeof Image !== 'undefined') {
    var img = new Image();
    img.src = src;

    img.onload = function () {
      return connect(img);
    };
  }

  return null;
});
DragPreviewImage.displayName = 'DragPreviewImage';

//

var shallowequal = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};

function registerTarget(type, target, manager) {
  var registry = manager.getRegistry();
  var targetId = registry.addTarget(type, target);
  return [targetId, function () {
    return registry.removeTarget(targetId);
  }];
}

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$3(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$3(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$3(Constructor.prototype, protoProps); if (staticProps) _defineProperties$3(Constructor, staticProps); return Constructor; }
var isCallingCanDrag = false;
var isCallingIsDragging = false;
var DragSourceMonitorImpl =
/*#__PURE__*/
function () {
  function DragSourceMonitorImpl(manager) {
    _classCallCheck$3(this, DragSourceMonitorImpl);

    this.sourceId = null;
    this.internalMonitor = manager.getMonitor();
  }

  _createClass$3(DragSourceMonitorImpl, [{
    key: "receiveHandlerId",
    value: function receiveHandlerId(sourceId) {
      this.sourceId = sourceId;
    }
  }, {
    key: "getHandlerId",
    value: function getHandlerId() {
      return this.sourceId;
    }
  }, {
    key: "canDrag",
    value: function canDrag() {
      invariant_1(!isCallingCanDrag, 'You may not call monitor.canDrag() inside your canDrag() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');

      try {
        isCallingCanDrag = true;
        return this.internalMonitor.canDragSource(this.sourceId);
      } finally {
        isCallingCanDrag = false;
      }
    }
  }, {
    key: "isDragging",
    value: function isDragging() {
      if (!this.sourceId) {
        return false;
      }

      invariant_1(!isCallingIsDragging, 'You may not call monitor.isDragging() inside your isDragging() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');

      try {
        isCallingIsDragging = true;
        return this.internalMonitor.isDraggingSource(this.sourceId);
      } finally {
        isCallingIsDragging = false;
      }
    }
  }, {
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener, options) {
      return this.internalMonitor.subscribeToStateChange(listener, options);
    }
  }, {
    key: "isDraggingSource",
    value: function isDraggingSource(sourceId) {
      return this.internalMonitor.isDraggingSource(sourceId);
    }
  }, {
    key: "isOverTarget",
    value: function isOverTarget(targetId, options) {
      return this.internalMonitor.isOverTarget(targetId, options);
    }
  }, {
    key: "getTargetIds",
    value: function getTargetIds() {
      return this.internalMonitor.getTargetIds();
    }
  }, {
    key: "isSourcePublic",
    value: function isSourcePublic() {
      return this.internalMonitor.isSourcePublic();
    }
  }, {
    key: "getSourceId",
    value: function getSourceId() {
      return this.internalMonitor.getSourceId();
    }
  }, {
    key: "subscribeToOffsetChange",
    value: function subscribeToOffsetChange(listener) {
      return this.internalMonitor.subscribeToOffsetChange(listener);
    }
  }, {
    key: "canDragSource",
    value: function canDragSource(sourceId) {
      return this.internalMonitor.canDragSource(sourceId);
    }
  }, {
    key: "canDropOnTarget",
    value: function canDropOnTarget(targetId) {
      return this.internalMonitor.canDropOnTarget(targetId);
    }
  }, {
    key: "getItemType",
    value: function getItemType() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: "getItem",
    value: function getItem() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: "getDropResult",
    value: function getDropResult() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: "didDrop",
    value: function didDrop() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: "getInitialClientOffset",
    value: function getInitialClientOffset() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function getInitialSourceClientOffset() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: "getSourceClientOffset",
    value: function getSourceClientOffset() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: "getClientOffset",
    value: function getClientOffset() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function getDifferenceFromInitialOffset() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]);

  return DragSourceMonitorImpl;
}();

function setRef(ref, node$$1) {
  if (typeof ref === 'function') {
    ref(node$$1);
  } else {
    ref.current = node$$1;
  }
}

function cloneWithRef(element, newRef) {
  var previousRef = element.ref;
  invariant_1(typeof previousRef !== 'string', 'Cannot connect React DnD to an element with an existing string ref. ' + 'Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. ' + 'Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute');

  if (!previousRef) {
    // When there is no ref on the element, use the new ref directly
    return cloneElement(element, {
      ref: newRef
    });
  } else {
    return cloneElement(element, {
      ref: function ref(node$$1) {
        setRef(previousRef, node$$1);
        setRef(newRef, node$$1);
      }
    });
  }
}

function throwIfCompositeComponentElement(element) {
  // Custom components can no longer be wrapped directly in React DnD 2.0
  // so that we don't need to depend on findDOMNode() from react-dom.
  if (typeof element.type === 'string') {
    return;
  }

  var displayName = element.type.displayName || element.type.name || 'the component';
  throw new Error('Only native element nodes can now be passed to React DnD connectors.' + "You can either wrap ".concat(displayName, " into a <div>, or turn it into a ") + 'drag source or a drop target itself.');
}

function wrapHookToRecognizeElement(hook) {
  return function () {
    var elementOrNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    // When passed a node, call the hook straight away.
    if (!isValidElement(elementOrNode)) {
      var node$$1 = elementOrNode;
      hook(node$$1, options); // return the node so it can be chained (e.g. when within callback refs
      // <div ref={node => connectDragSource(connectDropTarget(node))}/>

      return node$$1;
    } // If passed a ReactElement, clone it and attach this function as a ref.
    // This helps us achieve a neat API where user doesn't even know that refs
    // are being used under the hood.


    var element = elementOrNode;
    throwIfCompositeComponentElement(element); // When no options are passed, use the hook directly

    var ref = options ? function (node$$1) {
      return hook(node$$1, options);
    } : hook;
    return cloneWithRef(element, ref);
  };
}

function wrapConnectorHooks(hooks) {
  var wrappedHooks = {};
  Object.keys(hooks).forEach(function (key) {
    var hook = hooks[key]; // ref objects should be passed straight through without wrapping

    if (key.endsWith('Ref')) {
      wrappedHooks[key] = hooks[key];
    } else {
      var wrappedHook = wrapHookToRecognizeElement(hook);

      wrappedHooks[key] = function () {
        return wrappedHook;
      };
    }
  });
  return wrappedHooks;
}

function _typeof$3(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$3 = function _typeof(obj) { return typeof obj; }; } else { _typeof$3 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$3(obj); }

function isRef(obj) {
  return (// eslint-disable-next-line no-prototype-builtins
    obj !== null && _typeof$3(obj) === 'object' && obj.hasOwnProperty('current')
  );
}

function _classCallCheck$4(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$4(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$4(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$4(Constructor.prototype, protoProps); if (staticProps) _defineProperties$4(Constructor, staticProps); return Constructor; }
var SourceConnector =
/*#__PURE__*/
function () {
  function SourceConnector(backend) {
    var _this = this;

    _classCallCheck$4(this, SourceConnector);

    this.hooks = wrapConnectorHooks({
      dragSource: function dragSource(node$$1, options) {
        _this.clearDragSource();

        _this.dragSourceOptions = options || null;

        if (isRef(node$$1)) {
          _this.dragSourceRef = node$$1;
        } else {
          _this.dragSourceNode = node$$1;
        }

        _this.reconnectDragSource();
      },
      dragPreview: function dragPreview(node$$1, options) {
        _this.clearDragPreview();

        _this.dragPreviewOptions = options || null;

        if (isRef(node$$1)) {
          _this.dragPreviewRef = node$$1;
        } else {
          _this.dragPreviewNode = node$$1;
        }

        _this.reconnectDragPreview();
      }
    });
    this.handlerId = null; // The drop target may either be attached via ref or connect function

    this.dragSourceRef = null;
    this.dragSourceOptionsInternal = null; // The drag preview may either be attached via ref or connect function

    this.dragPreviewRef = null;
    this.dragPreviewOptionsInternal = null;
    this.lastConnectedHandlerId = null;
    this.lastConnectedDragSource = null;
    this.lastConnectedDragSourceOptions = null;
    this.lastConnectedDragPreview = null;
    this.lastConnectedDragPreviewOptions = null;
    this.backend = backend;
  }

  _createClass$4(SourceConnector, [{
    key: "receiveHandlerId",
    value: function receiveHandlerId(newHandlerId) {
      if (this.handlerId === newHandlerId) {
        return;
      }

      this.handlerId = newHandlerId;
      this.reconnect();
    }
  }, {
    key: "reconnect",
    value: function reconnect() {
      this.reconnectDragSource();
      this.reconnectDragPreview();
    }
  }, {
    key: "reconnectDragSource",
    value: function reconnectDragSource() {
      var dragSource = this.dragSource; // if nothing has changed then don't resubscribe

      var didChange = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();

      if (didChange) {
        this.disconnectDragSource();
      }

      if (!this.handlerId) {
        return;
      }

      if (!dragSource) {
        this.lastConnectedDragSource = dragSource;
        return;
      }

      if (didChange) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDragSource = dragSource;
        this.lastConnectedDragSourceOptions = this.dragSourceOptions;
        this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, dragSource, this.dragSourceOptions);
      }
    }
  }, {
    key: "reconnectDragPreview",
    value: function reconnectDragPreview() {
      var dragPreview = this.dragPreview; // if nothing has changed then don't resubscribe

      var didChange = this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();

      if (!this.handlerId) {
        this.disconnectDragPreview();
      } else if (this.dragPreview && didChange) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDragPreview = dragPreview;
        this.lastConnectedDragPreviewOptions = this.dragPreviewOptions;
        this.disconnectDragPreview();
        this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, dragPreview, this.dragPreviewOptions);
      }
    }
  }, {
    key: "didHandlerIdChange",
    value: function didHandlerIdChange() {
      return this.lastConnectedHandlerId !== this.handlerId;
    }
  }, {
    key: "didConnectedDragSourceChange",
    value: function didConnectedDragSourceChange() {
      return this.lastConnectedDragSource !== this.dragSource;
    }
  }, {
    key: "didConnectedDragPreviewChange",
    value: function didConnectedDragPreviewChange() {
      return this.lastConnectedDragPreview !== this.dragPreview;
    }
  }, {
    key: "didDragSourceOptionsChange",
    value: function didDragSourceOptionsChange() {
      return !shallowequal(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
  }, {
    key: "didDragPreviewOptionsChange",
    value: function didDragPreviewOptionsChange() {
      return !shallowequal(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
    }
  }, {
    key: "disconnectDragSource",
    value: function disconnectDragSource() {
      if (this.dragSourceUnsubscribe) {
        this.dragSourceUnsubscribe();
        this.dragSourceUnsubscribe = undefined;
      }
    }
  }, {
    key: "disconnectDragPreview",
    value: function disconnectDragPreview() {
      if (this.dragPreviewUnsubscribe) {
        this.dragPreviewUnsubscribe();
        this.dragPreviewUnsubscribe = undefined;
        this.dragPreviewNode = null;
        this.dragPreviewRef = null;
      }
    }
  }, {
    key: "clearDragSource",
    value: function clearDragSource() {
      this.dragSourceNode = null;
      this.dragSourceRef = null;
    }
  }, {
    key: "clearDragPreview",
    value: function clearDragPreview() {
      this.dragPreviewNode = null;
      this.dragPreviewRef = null;
    }
  }, {
    key: "connectTarget",
    get: function get() {
      return this.dragSource;
    }
  }, {
    key: "dragSourceOptions",
    get: function get() {
      return this.dragSourceOptionsInternal;
    },
    set: function set(options) {
      this.dragSourceOptionsInternal = options;
    }
  }, {
    key: "dragPreviewOptions",
    get: function get() {
      return this.dragPreviewOptionsInternal;
    },
    set: function set(options) {
      this.dragPreviewOptionsInternal = options;
    }
  }, {
    key: "dragSource",
    get: function get() {
      return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
    }
  }, {
    key: "dragPreview",
    get: function get() {
      return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
    }
  }]);

  return SourceConnector;
}();

function _classCallCheck$5(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$5(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$5(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$5(Constructor.prototype, protoProps); if (staticProps) _defineProperties$5(Constructor, staticProps); return Constructor; }
var TargetConnector =
/*#__PURE__*/
function () {
  function TargetConnector(backend) {
    var _this = this;

    _classCallCheck$5(this, TargetConnector);

    this.hooks = wrapConnectorHooks({
      dropTarget: function dropTarget(node$$1, options) {
        _this.clearDropTarget();

        _this.dropTargetOptions = options;

        if (isRef(node$$1)) {
          _this.dropTargetRef = node$$1;
        } else {
          _this.dropTargetNode = node$$1;
        }

        _this.reconnect();
      }
    });
    this.handlerId = null; // The drop target may either be attached via ref or connect function

    this.dropTargetRef = null;
    this.dropTargetOptionsInternal = null;
    this.lastConnectedHandlerId = null;
    this.lastConnectedDropTarget = null;
    this.lastConnectedDropTargetOptions = null;
    this.backend = backend;
  }

  _createClass$5(TargetConnector, [{
    key: "reconnect",
    value: function reconnect() {
      // if nothing has changed then don't resubscribe
      var didChange = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();

      if (didChange) {
        this.disconnectDropTarget();
      }

      var dropTarget = this.dropTarget;

      if (!this.handlerId) {
        return;
      }

      if (!dropTarget) {
        this.lastConnectedDropTarget = dropTarget;
        return;
      }

      if (didChange) {
        this.lastConnectedHandlerId = this.handlerId;
        this.lastConnectedDropTarget = dropTarget;
        this.lastConnectedDropTargetOptions = this.dropTargetOptions;
        this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, dropTarget, this.dropTargetOptions);
      }
    }
  }, {
    key: "receiveHandlerId",
    value: function receiveHandlerId(newHandlerId) {
      if (newHandlerId === this.handlerId) {
        return;
      }

      this.handlerId = newHandlerId;
      this.reconnect();
    }
  }, {
    key: "didHandlerIdChange",
    value: function didHandlerIdChange() {
      return this.lastConnectedHandlerId !== this.handlerId;
    }
  }, {
    key: "didDropTargetChange",
    value: function didDropTargetChange() {
      return this.lastConnectedDropTarget !== this.dropTarget;
    }
  }, {
    key: "didOptionsChange",
    value: function didOptionsChange() {
      return !shallowequal(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
    }
  }, {
    key: "disconnectDropTarget",
    value: function disconnectDropTarget() {
      if (this.unsubscribeDropTarget) {
        this.unsubscribeDropTarget();
        this.unsubscribeDropTarget = undefined;
      }
    }
  }, {
    key: "clearDropTarget",
    value: function clearDropTarget() {
      this.dropTargetRef = null;
      this.dropTargetNode = null;
    }
  }, {
    key: "connectTarget",
    get: function get() {
      return this.dropTarget;
    }
  }, {
    key: "dropTargetOptions",
    get: function get() {
      return this.dropTargetOptionsInternal;
    },
    set: function set(options) {
      this.dropTargetOptionsInternal = options;
    }
  }, {
    key: "dropTarget",
    get: function get() {
      return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
    }
  }]);

  return TargetConnector;
}();

function _classCallCheck$6(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$6(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$6(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$6(Constructor.prototype, protoProps); if (staticProps) _defineProperties$6(Constructor, staticProps); return Constructor; }
var isCallingCanDrop = false;
var DropTargetMonitorImpl =
/*#__PURE__*/
function () {
  function DropTargetMonitorImpl(manager) {
    _classCallCheck$6(this, DropTargetMonitorImpl);

    this.targetId = null;
    this.internalMonitor = manager.getMonitor();
  }

  _createClass$6(DropTargetMonitorImpl, [{
    key: "receiveHandlerId",
    value: function receiveHandlerId(targetId) {
      this.targetId = targetId;
    }
  }, {
    key: "getHandlerId",
    value: function getHandlerId() {
      return this.targetId;
    }
  }, {
    key: "subscribeToStateChange",
    value: function subscribeToStateChange(listener, options) {
      return this.internalMonitor.subscribeToStateChange(listener, options);
    }
  }, {
    key: "canDrop",
    value: function canDrop() {
      // Cut out early if the target id has not been set. This should prevent errors
      // where the user has an older version of dnd-core like in
      // https://github.com/react-dnd/react-dnd/issues/1310
      if (!this.targetId) {
        return false;
      }

      invariant_1(!isCallingCanDrop, 'You may not call monitor.canDrop() inside your canDrop() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor');

      try {
        isCallingCanDrop = true;
        return this.internalMonitor.canDropOnTarget(this.targetId);
      } finally {
        isCallingCanDrop = false;
      }
    }
  }, {
    key: "isOver",
    value: function isOver(options) {
      if (!this.targetId) {
        return false;
      }

      return this.internalMonitor.isOverTarget(this.targetId, options);
    }
  }, {
    key: "getItemType",
    value: function getItemType() {
      return this.internalMonitor.getItemType();
    }
  }, {
    key: "getItem",
    value: function getItem() {
      return this.internalMonitor.getItem();
    }
  }, {
    key: "getDropResult",
    value: function getDropResult() {
      return this.internalMonitor.getDropResult();
    }
  }, {
    key: "didDrop",
    value: function didDrop() {
      return this.internalMonitor.didDrop();
    }
  }, {
    key: "getInitialClientOffset",
    value: function getInitialClientOffset() {
      return this.internalMonitor.getInitialClientOffset();
    }
  }, {
    key: "getInitialSourceClientOffset",
    value: function getInitialSourceClientOffset() {
      return this.internalMonitor.getInitialSourceClientOffset();
    }
  }, {
    key: "getSourceClientOffset",
    value: function getSourceClientOffset() {
      return this.internalMonitor.getSourceClientOffset();
    }
  }, {
    key: "getClientOffset",
    value: function getClientOffset() {
      return this.internalMonitor.getClientOffset();
    }
  }, {
    key: "getDifferenceFromInitialOffset",
    value: function getDifferenceFromInitialOffset() {
      return this.internalMonitor.getDifferenceFromInitialOffset();
    }
  }]);

  return DropTargetMonitorImpl;
}();

function _typeof$5(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$5 = function _typeof(obj) { return typeof obj; }; } else { _typeof$5 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$5(obj); }

// cheap lodash replacements
function isFunction(input) {
  return typeof input === 'function';
}
function noop$1() {// noop
}

function isObjectLike(input) {
  return _typeof$5(input) === 'object' && input !== null;
}

function isPlainObject$3(input) {
  if (!isObjectLike(input)) {
    return false;
  }

  if (Object.getPrototypeOf(input) === null) {
    return true;
  }

  var proto = input;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(input) === proto;
}

function getDecoratedComponent(instanceRef) {
  var currentRef = instanceRef.current;

  if (currentRef == null) {
    return null;
  } else if (currentRef.decoratedRef) {
    // go through the private field in decorateHandler to avoid the invariant hit
    return currentRef.decoratedRef.current;
  } else {
    return currentRef;
  }
}
function isClassComponent(Component$$1) {
  return Component$$1 && Component$$1.prototype && typeof Component$$1.prototype.render === 'function';
}
function isRefForwardingComponent(C) {
  return C && C.$$typeof && C.$$typeof.toString() === 'Symbol(react.forward_ref)';
}
function isRefable(C) {
  return isClassComponent(C) || isRefForwardingComponent(C);
}
function checkDecoratorArguments(functionName, signature) {
  if (process.env.NODE_ENV !== 'production') {
    for (var i = 0; i < (arguments.length <= 2 ? 0 : arguments.length - 2); i++) {
      var arg = i + 2 < 2 || arguments.length <= i + 2 ? undefined : arguments[i + 2];

      if (arg && arg.prototype && arg.prototype.render) {
        // eslint-disable-next-line no-console
        console.error('You seem to be applying the arguments in the wrong order. ' + "It should be ".concat(functionName, "(").concat(signature, ")(Component), not the other way around. ") + 'Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#you-seem-to-be-applying-the-arguments-in-the-wrong-order');
        return;
      }
    }
  }
}

var reactIs_production_min = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):
60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118,x=b?Symbol.for("react.scope"):60119;function y(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case t:case r:case d:return u}}}function z(a){return y(a)===m}
exports.typeOf=y;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;
exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w||a.$$typeof===x)};exports.isAsyncMode=function(a){return z(a)||y(a)===l};exports.isConcurrentMode=z;exports.isContextConsumer=function(a){return y(a)===k};exports.isContextProvider=function(a){return y(a)===h};
exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return y(a)===n};exports.isFragment=function(a){return y(a)===e};exports.isLazy=function(a){return y(a)===t};exports.isMemo=function(a){return y(a)===r};exports.isPortal=function(a){return y(a)===d};exports.isProfiler=function(a){return y(a)===g};exports.isStrictMode=function(a){return y(a)===f};exports.isSuspense=function(a){return y(a)===p};
});

unwrapExports(reactIs_production_min);
var reactIs_production_min_1 = reactIs_production_min.typeOf;
var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
var reactIs_production_min_6 = reactIs_production_min.Element;
var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
var reactIs_production_min_8 = reactIs_production_min.Fragment;
var reactIs_production_min_9 = reactIs_production_min.Lazy;
var reactIs_production_min_10 = reactIs_production_min.Memo;
var reactIs_production_min_11 = reactIs_production_min.Portal;
var reactIs_production_min_12 = reactIs_production_min.Profiler;
var reactIs_production_min_13 = reactIs_production_min.StrictMode;
var reactIs_production_min_14 = reactIs_production_min.Suspense;
var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
var reactIs_production_min_20 = reactIs_production_min.isElement;
var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
var reactIs_production_min_22 = reactIs_production_min.isFragment;
var reactIs_production_min_23 = reactIs_production_min.isLazy;
var reactIs_production_min_24 = reactIs_production_min.isMemo;
var reactIs_production_min_25 = reactIs_production_min.isPortal;
var reactIs_production_min_26 = reactIs_production_min.isProfiler;
var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
var reactIs_production_min_28 = reactIs_production_min.isSuspense;

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

Object.defineProperty(exports, '__esModule', { value: true });

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
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

function typeOf(object$$1) {
  if (typeof object$$1 === 'object' && object$$1 !== null) {
    var $$typeof = object$$1.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object$$1.type;

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
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
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

function isAsyncMode(object$$1) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object$$1) || typeOf(object$$1) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object$$1) {
  return typeOf(object$$1) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object$$1) {
  return typeOf(object$$1) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object$$1) {
  return typeOf(object$$1) === REACT_PROVIDER_TYPE;
}
function isElement(object$$1) {
  return typeof object$$1 === 'object' && object$$1 !== null && object$$1.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object$$1) {
  return typeOf(object$$1) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object$$1) {
  return typeOf(object$$1) === REACT_FRAGMENT_TYPE;
}
function isLazy(object$$1) {
  return typeOf(object$$1) === REACT_LAZY_TYPE;
}
function isMemo(object$$1) {
  return typeOf(object$$1) === REACT_MEMO_TYPE;
}
function isPortal(object$$1) {
  return typeOf(object$$1) === REACT_PORTAL_TYPE;
}
function isProfiler(object$$1) {
  return typeOf(object$$1) === REACT_PROFILER_TYPE;
}
function isStrictMode(object$$1) {
  return typeOf(object$$1) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object$$1) {
  return typeOf(object$$1) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
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
exports.isValidElementType = isValidElementType;
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
  })();
}
});

unwrapExports(reactIs_development);
var reactIs_development_1 = reactIs_development.typeOf;
var reactIs_development_2 = reactIs_development.AsyncMode;
var reactIs_development_3 = reactIs_development.ConcurrentMode;
var reactIs_development_4 = reactIs_development.ContextConsumer;
var reactIs_development_5 = reactIs_development.ContextProvider;
var reactIs_development_6 = reactIs_development.Element;
var reactIs_development_7 = reactIs_development.ForwardRef;
var reactIs_development_8 = reactIs_development.Fragment;
var reactIs_development_9 = reactIs_development.Lazy;
var reactIs_development_10 = reactIs_development.Memo;
var reactIs_development_11 = reactIs_development.Portal;
var reactIs_development_12 = reactIs_development.Profiler;
var reactIs_development_13 = reactIs_development.StrictMode;
var reactIs_development_14 = reactIs_development.Suspense;
var reactIs_development_15 = reactIs_development.isValidElementType;
var reactIs_development_16 = reactIs_development.isAsyncMode;
var reactIs_development_17 = reactIs_development.isConcurrentMode;
var reactIs_development_18 = reactIs_development.isContextConsumer;
var reactIs_development_19 = reactIs_development.isContextProvider;
var reactIs_development_20 = reactIs_development.isElement;
var reactIs_development_21 = reactIs_development.isForwardRef;
var reactIs_development_22 = reactIs_development.isFragment;
var reactIs_development_23 = reactIs_development.isLazy;
var reactIs_development_24 = reactIs_development.isMemo;
var reactIs_development_25 = reactIs_development.isPortal;
var reactIs_development_26 = reactIs_development.isProfiler;
var reactIs_development_27 = reactIs_development.isStrictMode;
var reactIs_development_28 = reactIs_development.isSuspense;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};

var MEMO_STATICS = {
    '$$typeof': true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};

var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;

function getStatics(component) {
    if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
    }
    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty$1 = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty$1(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

function _classCallCheck$7(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$7(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$7(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$7(Constructor.prototype, protoProps); if (staticProps) _defineProperties$7(Constructor, staticProps); return Constructor; }
/**
 * Provides a set of static methods for creating Disposables.
 * @param {Function} action Action to run during the first call to dispose.
 * The action is guaranteed to be run at most once.
 */

var Disposable =
/*#__PURE__*/
function () {
  function Disposable(action) {
    _classCallCheck$7(this, Disposable);

    this.isDisposed = false;
    this.action = isFunction(action) ? action : noop$1;
  }
  /**
   * Validates whether the given object is a disposable
   * @param {Object} Object to test whether it has a dispose method
   * @returns {Boolean} true if a disposable object, else false.
   */


  _createClass$7(Disposable, [{
    key: "dispose",

    /** Performs the task of cleaning up resources. */
    value: function dispose() {
      if (!this.isDisposed) {
        this.action();
        this.isDisposed = true;
      }
    }
  }], [{
    key: "isDisposable",
    value: function isDisposable(d) {
      return d && isFunction(d.dispose);
    }
  }, {
    key: "_fixup",
    value: function _fixup(result) {
      return Disposable.isDisposable(result) ? result : Disposable.empty;
    }
    /**
     * Creates a disposable object that invokes the specified action when disposed.
     * @param {Function} dispose Action to run during the first call to dispose.
     * The action is guaranteed to be run at most once.
     * @return {Disposable} The disposable object that runs the given action upon disposal.
     */

  }, {
    key: "create",
    value: function create(action) {
      return new Disposable(action);
    }
  }]);

  return Disposable;
}();
/**
 * Gets the disposable that does nothing when disposed.
 */

Disposable.empty = {
  dispose: noop$1
};
/**
 * Represents a group of disposable resources that are disposed together.
 * @constructor
 */

var CompositeDisposable =
/*#__PURE__*/
function () {
  function CompositeDisposable() {
    _classCallCheck$7(this, CompositeDisposable);

    this.isDisposed = false;

    for (var _len = arguments.length, disposables = new Array(_len), _key = 0; _key < _len; _key++) {
      disposables[_key] = arguments[_key];
    }

    this.disposables = disposables;
  }
  /**
   * Adds a disposable to the CompositeDisposable or disposes the disposable if the CompositeDisposable is disposed.
   * @param {Any} item Disposable to add.
   */


  _createClass$7(CompositeDisposable, [{
    key: "add",
    value: function add(item) {
      if (this.isDisposed) {
        item.dispose();
      } else {
        this.disposables.push(item);
      }
    }
    /**
     * Removes and disposes the first occurrence of a disposable from the CompositeDisposable.
     * @param {Any} item Disposable to remove.
     * @returns {Boolean} true if found; false otherwise.
     */

  }, {
    key: "remove",
    value: function remove(item) {
      var shouldDispose = false;

      if (!this.isDisposed) {
        var idx = this.disposables.indexOf(item);

        if (idx !== -1) {
          shouldDispose = true;
          this.disposables.splice(idx, 1);
          item.dispose();
        }
      }

      return shouldDispose;
    }
    /**
     *  Disposes all disposables in the group and removes them from the group but
     *  does not dispose the CompositeDisposable.
     */

  }, {
    key: "clear",
    value: function clear() {
      if (!this.isDisposed) {
        var len = this.disposables.length;
        var currentDisposables = new Array(len);

        for (var i = 0; i < len; i++) {
          currentDisposables[i] = this.disposables[i];
        }

        this.disposables = [];

        for (var _i = 0; _i < len; _i++) {
          currentDisposables[_i].dispose();
        }
      }
    }
    /**
     *  Disposes all disposables in the group and removes them from the group.
     */

  }, {
    key: "dispose",
    value: function dispose() {
      if (!this.isDisposed) {
        this.isDisposed = true;
        var len = this.disposables.length;
        var currentDisposables = new Array(len);

        for (var i = 0; i < len; i++) {
          currentDisposables[i] = this.disposables[i];
        }

        this.disposables = [];

        for (var _i2 = 0; _i2 < len; _i2++) {
          currentDisposables[_i2].dispose();
        }
      }
    }
  }]);

  return CompositeDisposable;
}();
/**
 * Represents a disposable resource whose underlying disposable resource can
 * be replaced by another disposable resource, causing automatic disposal of
 * the previous underlying disposable resource.
 */

var SerialDisposable =
/*#__PURE__*/
function () {
  function SerialDisposable() {
    _classCallCheck$7(this, SerialDisposable);

    this.isDisposed = false;
  }
  /**
   * Gets the underlying disposable.
   * @returns {Any} the underlying disposable.
   */


  _createClass$7(SerialDisposable, [{
    key: "getDisposable",
    value: function getDisposable() {
      return this.current;
    }
  }, {
    key: "setDisposable",
    value: function setDisposable(value) {
      var shouldDispose = this.isDisposed;

      if (!shouldDispose) {
        var old = this.current;
        this.current = value;

        if (old) {
          old.dispose();
        }
      }

      if (shouldDispose && value) {
        value.dispose();
      }
    }
    /** Performs the task of cleaning up resources. */

  }, {
    key: "dispose",
    value: function dispose() {
      if (!this.isDisposed) {
        this.isDisposed = true;
        var old = this.current;
        this.current = undefined;

        if (old) {
          old.dispose();
        }
      }
    }
  }]);

  return SerialDisposable;
}();

function _typeof$6(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$6 = function _typeof(obj) { return typeof obj; }; } else { _typeof$6 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$6(obj); }

function _slicedToArray$9(arr, i) { return _arrayWithHoles$9(arr) || _iterableToArrayLimit$9(arr, i) || _nonIterableRest$9(); }

function _nonIterableRest$9() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit$9(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$9(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck$8(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$8(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$8(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$8(Constructor.prototype, protoProps); if (staticProps) _defineProperties$8(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof$6(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function decorateHandler(_ref) {
  var DecoratedComponent = _ref.DecoratedComponent,
      createHandler = _ref.createHandler,
      createMonitor = _ref.createMonitor,
      createConnector = _ref.createConnector,
      registerHandler = _ref.registerHandler,
      containerDisplayName = _ref.containerDisplayName,
      getType = _ref.getType,
      collect = _ref.collect,
      options = _ref.options;
  var _options$arePropsEqua = options.arePropsEqual,
      arePropsEqual = _options$arePropsEqua === void 0 ? shallowequal : _options$arePropsEqua;
  var Decorated = DecoratedComponent;
  var displayName = DecoratedComponent.displayName || DecoratedComponent.name || 'Component';

  var DragDropContainer =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(DragDropContainer, _React$Component);

    function DragDropContainer(props) {
      var _this;

      _classCallCheck$8(this, DragDropContainer);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(DragDropContainer).call(this, props));
      _this.decoratedRef = createRef();

      _this.handleChange = function () {
        var nextState = _this.getCurrentState();

        if (!shallowequal(nextState, _this.state)) {
          _this.setState(nextState);
        }
      };

      _this.disposable = new SerialDisposable();

      _this.receiveProps(props);

      _this.dispose();

      return _this;
    }

    _createClass$8(DragDropContainer, [{
      key: "getHandlerId",
      value: function getHandlerId() {
        return this.handlerId;
      }
    }, {
      key: "getDecoratedComponentInstance",
      value: function getDecoratedComponentInstance() {
        invariant_1(this.decoratedRef.current, 'In order to access an instance of the decorated component, it must either be a class component or use React.forwardRef()');
        return this.decoratedRef.current;
      }
    }, {
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate(nextProps, nextState) {
        return !arePropsEqual(nextProps, this.props) || !shallowequal(nextState, this.state);
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.disposable = new SerialDisposable();
        this.currentType = undefined;
        this.receiveProps(this.props);
        this.handleChange();
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps) {
        if (!arePropsEqual(this.props, prevProps)) {
          this.receiveProps(this.props);
          this.handleChange();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.dispose();
      }
    }, {
      key: "receiveProps",
      value: function receiveProps(props) {
        if (!this.handler) {
          return;
        }

        this.handler.receiveProps(props);
        this.receiveType(getType(props));
      }
    }, {
      key: "receiveType",
      value: function receiveType(type) {
        if (!this.handlerMonitor || !this.manager || !this.handlerConnector) {
          return;
        }

        if (type === this.currentType) {
          return;
        }

        this.currentType = type;

        var _registerHandler = registerHandler(type, this.handler, this.manager),
            _registerHandler2 = _slicedToArray$9(_registerHandler, 2),
            handlerId = _registerHandler2[0],
            unregister = _registerHandler2[1];

        this.handlerId = handlerId;
        this.handlerMonitor.receiveHandlerId(handlerId);
        this.handlerConnector.receiveHandlerId(handlerId);
        var globalMonitor = this.manager.getMonitor();
        var unsubscribe = globalMonitor.subscribeToStateChange(this.handleChange, {
          handlerIds: [handlerId]
        });
        this.disposable.setDisposable(new CompositeDisposable(new Disposable(unsubscribe), new Disposable(unregister)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this.disposable.dispose();

        if (this.handlerConnector) {
          this.handlerConnector.receiveHandlerId(null);
        }
      }
    }, {
      key: "getCurrentState",
      value: function getCurrentState() {
        if (!this.handlerConnector) {
          return {};
        }

        var nextState = collect(this.handlerConnector.hooks, this.handlerMonitor, this.props);

        if (process.env.NODE_ENV !== 'production') {
          invariant_1(isPlainObject$3(nextState), 'Expected `collect` specified as the second argument to ' + '%s for %s to return a plain object of props to inject. ' + 'Instead, received %s.', containerDisplayName, displayName, nextState);
        }

        return nextState;
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        return createElement(DndContext.Consumer, null, function (_ref2) {
          var dragDropManager = _ref2.dragDropManager;

          _this2.receiveDragDropManager(dragDropManager);

          if (typeof requestAnimationFrame !== 'undefined') {
            requestAnimationFrame(function () {
              return _this2.handlerConnector.reconnect();
            });
          }

          return createElement(Decorated, Object.assign({}, _this2.props, _this2.getCurrentState(), {
            // NOTE: if Decorated is a Function Component, decoratedRef will not be populated unless it's a refforwarding component.
            ref: isRefable(Decorated) ? _this2.decoratedRef : null
          }));
        });
      }
    }, {
      key: "receiveDragDropManager",
      value: function receiveDragDropManager(dragDropManager) {
        if (this.manager !== undefined) {
          return;
        }

        invariant_1(dragDropManager !== undefined, 'Could not find the drag and drop manager in the context of %s. ' + 'Make sure to render a DndProvider component in your top-level component. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/troubleshooting#could-not-find-the-drag-and-drop-manager-in-the-context', displayName, displayName);

        if (dragDropManager === undefined) {
          return;
        }

        this.manager = dragDropManager;
        this.handlerMonitor = createMonitor(dragDropManager);
        this.handlerConnector = createConnector(dragDropManager.getBackend());
        this.handler = createHandler(this.handlerMonitor, this.decoratedRef);
      }
    }]);

    return DragDropContainer;
  }(Component);

  DragDropContainer.DecoratedComponent = DecoratedComponent;
  DragDropContainer.displayName = "".concat(containerDisplayName, "(").concat(displayName, ")");
  return hoistNonReactStatics_cjs(DragDropContainer, DecoratedComponent);
}

function _typeof$7(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$7 = function _typeof(obj) { return typeof obj; }; } else { _typeof$7 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$7(obj); }

function isValidType(type, allowArray) {
  return typeof type === 'string' || _typeof$7(type) === 'symbol' || !!allowArray && Array.isArray(type) && type.every(function (t) {
    return isValidType(t, false);
  });
}

function _classCallCheck$9(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$9(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$9(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$9(Constructor.prototype, protoProps); if (staticProps) _defineProperties$9(Constructor, staticProps); return Constructor; }

var SourceImpl =
/*#__PURE__*/
function () {
  function SourceImpl(spec, monitor, ref) {
    var _this = this;

    _classCallCheck$9(this, SourceImpl);

    this.props = null;

    this.beginDrag = function () {
      if (!_this.props) {
        return;
      }

      var item = _this.spec.beginDrag(_this.props, _this.monitor, _this.ref.current);

      if (process.env.NODE_ENV !== 'production') {
        invariant_1(isPlainObject$3(item), 'beginDrag() must return a plain object that represents the dragged item. ' + 'Instead received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source', item);
      }

      return item;
    };

    this.spec = spec;
    this.monitor = monitor;
    this.ref = ref;
  }

  _createClass$9(SourceImpl, [{
    key: "receiveProps",
    value: function receiveProps(props) {
      this.props = props;
    }
  }, {
    key: "canDrag",
    value: function canDrag() {
      if (!this.props) {
        return false;
      }

      if (!this.spec.canDrag) {
        return true;
      }

      return this.spec.canDrag(this.props, this.monitor);
    }
  }, {
    key: "isDragging",
    value: function isDragging(globalMonitor, sourceId) {
      if (!this.props) {
        return false;
      }

      if (!this.spec.isDragging) {
        return sourceId === globalMonitor.getSourceId();
      }

      return this.spec.isDragging(this.props, this.monitor);
    }
  }, {
    key: "endDrag",
    value: function endDrag() {
      if (!this.props) {
        return;
      }

      if (!this.spec.endDrag) {
        return;
      }

      this.spec.endDrag(this.props, this.monitor, getDecoratedComponent(this.ref));
    }
  }]);

  return SourceImpl;
}();

function _classCallCheck$a(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$a(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$a(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$a(Constructor.prototype, protoProps); if (staticProps) _defineProperties$a(Constructor, staticProps); return Constructor; }
var ALLOWED_SPEC_METHODS$1 = ['canDrop', 'hover', 'drop'];

var TargetImpl =
/*#__PURE__*/
function () {
  function TargetImpl(spec, monitor, ref) {
    _classCallCheck$a(this, TargetImpl);

    this.props = null;
    this.spec = spec;
    this.monitor = monitor;
    this.ref = ref;
  }

  _createClass$a(TargetImpl, [{
    key: "receiveProps",
    value: function receiveProps(props) {
      this.props = props;
    }
  }, {
    key: "receiveMonitor",
    value: function receiveMonitor(monitor) {
      this.monitor = monitor;
    }
  }, {
    key: "canDrop",
    value: function canDrop() {
      if (!this.spec.canDrop) {
        return true;
      }

      return this.spec.canDrop(this.props, this.monitor);
    }
  }, {
    key: "hover",
    value: function hover() {
      if (!this.spec.hover) {
        return;
      }

      this.spec.hover(this.props, this.monitor, getDecoratedComponent(this.ref));
    }
  }, {
    key: "drop",
    value: function drop() {
      if (!this.spec.drop) {
        return undefined;
      }

      var dropResult = this.spec.drop(this.props, this.monitor, this.ref.current);

      if (process.env.NODE_ENV !== 'production') {
        invariant_1(typeof dropResult === 'undefined' || isPlainObject$3(dropResult), 'drop() must either return undefined, or an object that represents the drop result. ' + 'Instead received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', dropResult);
      }

      return dropResult;
    }
  }]);

  return TargetImpl;
}();

function createTargetFactory(spec) {
  Object.keys(spec).forEach(function (key) {
    invariant_1(ALLOWED_SPEC_METHODS$1.indexOf(key) > -1, 'Expected the drop target specification to only have ' + 'some of the following keys: %s. ' + 'Instead received a specification with an unexpected "%s" key. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', ALLOWED_SPEC_METHODS$1.join(', '), key);
    invariant_1(typeof spec[key] === 'function', 'Expected %s in the drop target specification to be a function. ' + 'Instead received a specification with %s: %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', key, key, spec[key]);
  });
  return function createTarget(monitor, ref) {
    return new TargetImpl(spec, monitor, ref);
  };
}

function DropTarget(type, spec, collect) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  checkDecoratorArguments('DropTarget', 'type, spec, collect[, options]', type, spec, collect, options);
  var getType = type;

  if (typeof type !== 'function') {
    invariant_1(isValidType(type, true), 'Expected "type" provided as the first argument to DropTarget to be ' + 'a string, an array of strings, or a function that returns either given ' + 'the current props. Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', type);

    getType = function getType() {
      return type;
    };
  }

  invariant_1(isPlainObject$3(spec), 'Expected "spec" provided as the second argument to DropTarget to be ' + 'a plain object. Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', spec);
  var createTarget = createTargetFactory(spec);
  invariant_1(typeof collect === 'function', 'Expected "collect" provided as the third argument to DropTarget to be ' + 'a function that returns a plain object of props to inject. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', collect);
  invariant_1(isPlainObject$3(options), 'Expected "options" provided as the fourth argument to DropTarget to be ' + 'a plain object when specified. ' + 'Instead, received %s. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target', collect);
  return function decorateTarget(DecoratedComponent) {
    return decorateHandler({
      containerDisplayName: 'DropTarget',
      createHandler: createTarget,
      registerHandler: registerTarget,
      createMonitor: function createMonitor(manager) {
        return new DropTargetMonitorImpl(manager);
      },
      createConnector: function createConnector(backend) {
        return new TargetConnector(backend);
      },
      DecoratedComponent: DecoratedComponent,
      getType: getType,
      collect: collect,
      options: options
    });
  };
}

var _class$1, _temp$1;

var CartRow = (_temp$1 = _class$1 = function (_Component) {
  inherits(CartRow, _Component);

  function CartRow(props) {
    classCallCheck(this, CartRow);

    var _this = possibleConstructorReturn(this, (CartRow.__proto__ || Object.getPrototypeOf(CartRow)).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  createClass(CartRow, [{
    key: 'handleChange',
    value: function handleChange(event) {
      var value = event.target.value;
      if (!isNaN(value) && value > 0) {
        this.props.setItemQty(value);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return React__default.createElement(
        'tr',
        null,
        this.props.columns.map(function (column) {
          return React__default.createElement(
            'td',
            { key: column },
            _this2.props.item.data[column]
          );
        }),
        React__default.createElement(
          'td',
          null,
          React__default.createElement('input', {
            style: {
              textAlign: 'right',
              width: '100px'
            },
            type: 'number',
            value: this.props.item.quantity,
            onChange: this.handleChange
          })
        ),
        React__default.createElement(
          'td',
          null,
          React__default.createElement(
            'button',
            {
              onClick: this.props.removeItem },
            'Remove'
          )
        )
      );
    }
  }]);
  return CartRow;
}(Component), _class$1.propTypes = {
  columns: arrayOf(string),
  item: shape({
    data: array,
    quantity: number
  }),
  setItemQty: func,
  removeItem: func
}, _class$1.defaultProps = {
  columns: [],
  item: {
    data: [],
    quantity: null
  },
  setItemQty: function setItemQty(value) {
    console.log('quantity updated: ' + value);
  },
  removeItem: function removeItem() {
    console.log('remove item clicked');
  }
}, _temp$1);

var _class$2, _temp$2;

var CartTable = (_temp$2 = _class$2 = function (_Component) {
  inherits(CartTable, _Component);

  function CartTable() {
    classCallCheck(this, CartTable);
    return possibleConstructorReturn(this, (CartTable.__proto__ || Object.getPrototypeOf(CartTable)).apply(this, arguments));
  }

  createClass(CartTable, [{
    key: 'render',
    value: function render() {
      return React__default.createElement(
        'table',
        { className: this.props.tableClassName },
        React__default.createElement(
          'thead',
          null,
          React__default.createElement(
            'tr',
            null,
            this.props.columns.map(function (column) {
              return React__default.createElement(
                'th',
                { key: column },
                column
              );
            }),
            React__default.createElement(
              'th',
              null,
              'Quantity'
            )
          )
        ),
        React__default.createElement(
          'tbody',
          null,
          this.props.body
        )
      );
    }
  }]);
  return CartTable;
}(Component), _class$2.propTypes = {
  tableClassName: string,
  columns: arrayOf(string),
  body: any // TODO: Enforce this a little more...
}, _class$2.defaultProps = {
  tableClassName: '',
  columns: [],
  body: null
}, _temp$2);

var _dec, _class$3, _class2, _temp$3;

var cartTarget = {
  drop: function drop(props, monitor, component) {
    if (monitor.didDrop()) {
      return;
    }

    var item = monitor.getItem();
    component.props.onItemDropped(item.id);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

var Cart = (_dec = Y(function (deps) {
  return {
    actions: deps.actions,
    cartStore: deps.cartStore
  };
}), _dec(_class$3 = W(_class$3 = (_temp$3 = _class2 = function (_Component) {
  inherits(Cart, _Component);

  function Cart(props, context) {
    classCallCheck(this, Cart);

    var _this = possibleConstructorReturn(this, (Cart.__proto__ || Object.getPrototypeOf(Cart)).call(this, props));

    _this.refresh = _this.refresh.bind(_this);
    _this.addItem = _this.addItem.bind(_this);
    _this.removeItem = _this.removeItem.bind(_this);
    _this.emptyCart = _this.emptyCart.bind(_this);
    _this.clearCart = _this.clearCart.bind(_this);
    _this.reset = _this.reset.bind(_this);

    _this.state = { selection: [] };
    return _this;
  }

  createClass(Cart, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      // Cart.componentDidMount
      // this.context.actions.init(this.props.items, this.context.store.getSelection())
      this.context.cartContextManager.subscribe(function (contextValue) {
        console.log('update cart using context');
        console.log(contextValue);
        _this2.setState({ selection: contextValue.store.getSelection() });
      });
    }
  }, {
    key: 'refresh',
    value: function refresh() {
      var cartContextValue = this.context.cartContextManager.getCartContextValue();
      var store = cartContextValue.store;

      this.setState({ selection: store.getSelection() });
    }
  }, {
    key: 'addItem',
    value: function addItem(key, quantity, item) {
      var cartContextValue = this.context.cartContextManager.getCartContextValue();
      var actions = cartContextValue.actions;

      actions.addItem(key, quantity, item);
    }
  }, {
    key: 'removeItem',
    value: function removeItem(index) {
      var cartContextValue = this.context.cartContextManager.getCartContextValue();
      var actions = cartContextValue.actions;

      actions.removeItem(index);
    }
  }, {
    key: 'updateQuantity',
    value: function updateQuantity(index, quantity) {
      var cartContextValue = this.context.cartContextManager.getCartContextValue();
      var actions = cartContextValue.actions;

      actions.updateQuantity(index, quantity);
    }
  }, {
    key: 'addOption',
    value: function addOption(key, quantity, item, product) {
      var cartContextValue = this.context.cartContextManager.getCartContextValue();
      var actions = cartContextValue.actions;

      actions.addOption(key, quantity, item, product);
    }
  }, {
    key: 'emptyCart',
    value: function emptyCart() {
      var cartContextValue = this.context.cartContextManager.getCartContextValue();
      var actions = cartContextValue.actions;

      actions.emptyCart();
    }
  }, {
    key: 'clearCart',
    value: function clearCart() {
      var cartContextValue = this.context.cartContextManager.getCartContextValue();
      var actions = cartContextValue.actions;

      actions.clearCart();
    }
  }, {
    key: 'reset',
    value: function reset() {
      var cartContextValue = this.context.cartContextManager.getCartContextValue();
      var actions = cartContextValue.actions;

      actions.reset();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          position = _props.position,
          isOver = _props.isOver,
          canDrop = _props.canDrop,
          connectDropTarget = _props.connectDropTarget;


      var Container = this.props.containerComponent;

      var context = this.props.iterator();

      var cartContextValue = this.context.cartContextManager.getCartContextValue();
      var actions = cartContextValue.actions;
      var store = cartContextValue.store;

      if (store !== null && store.isEmpty()) {
        return connectDropTarget(React__default.createElement(
          'div',
          { className: 'dnd-target-wrapper' },
          React__default.createElement(
            'div',
            {
              className: 'padding-top ' + classnames({ 'well-is-over': isOver }),
              style: { marginBottom: '.5em' },
              bssize: 'large' },
            React__default.createElement(
              'p',
              { style: {
                  textAlign: 'center',
                  maxWidth: 'auto'
                } },
              this.props.cartEmptyMessage
            )
          )
        ));
      } else {
        return connectDropTarget(React__default.createElement(
          'div',
          { className: 'dnd-target-wrapper' },
          React__default.createElement(Container, {
            tableClassName: this.props.tableClassName,
            columns: this.props.columns,
            selection: this.state.selection,
            rowComponent: this.props.rowComponent,
            removeItem: this.removeItem,
            setItemQty: this.updateQuantity,
            context: context
          })
        ));
      }
    }
  }]);
  return Cart;
}(Component), _class2.propTypes = {
  items: object,
  selection: array,
  onItemDropped: func,
  onItemAdded: func,
  onItemClicked: func,
  onItemRemoved: func,
  onItemQtyChanged: func,
  onChange: func,
  iterator: func,
  tableClassName: string,
  cartEmptyMessage: node

}, _class2.defaultProps = {
  items: {},
  selection: [],
  onItemClicked: function onItemClicked() {},
  onItemDropped: function onItemDropped() {},
  onItemAdded: function onItemAdded() {},
  onItemRemoved: function onItemRemoved() {},
  onItemQtyChanged: function onItemQtyChanged() {},
  onChange: function onChange() {},
  iterator: function iterator() {
    return {};
  },
  containerComponent: CartTable,
  rowComponent: CartRow,
  tableClassName: '',
  cartEmptyMessage: React__default.createElement(
    'span',
    null,
    React__default.createElement(
      'b',
      null,
      'You haven\'t made any selections.'
    ),
    React__default.createElement(
      'span',
      { className: '' },
      React__default.createElement('br', null),
      'Please add an item to continue.'
    )
  )
}, _class2.contextTypes = {
  cartContextManager: object,
  cart: object
}, _temp$3)) || _class$3) || _class$3);

// TODO: This requires a DndProvider component... need to document that

var DndCart = DropTarget('sprite', cartTarget, collect)(Cart);

var ActionTypes$1 = {
  CART_INITIALIZE: 'cart-initialize',
  CART_ADD_ITEM: 'cart-add-item',
  CART_REMOVE_ITEM: 'cart-remove-item',
  CART_UPDATE_ITEM: 'cart-update-item',
  CART_ADD_OPTION: 'cart-add-option',
  CART_RESET: 'cart-reset',
  CART_CLEAR: 'cart-clear',
  CART_REVERT: 'cart-revert'
};

var CartActions = function CartActions(dispatcher) {
  return {
    /**
     * Initialize a cart, optionally providing default items and selected items.
     * @param items
     * @param selection
     */
    init: function init(items, selection) {
      dispatcher.dispatch({
        actionType: ActionTypes$1.CART_INITIALIZE,
        config: {
          items: items || {},
          selection: selection || []
        }
      });
    },

    /**
     * Adds an item to the cart.
     * @param key
     * @param quantity
     * @param item
     */
    addItem: function addItem(key, quantity, item) {
      dispatcher.dispatch({
        actionType: ActionTypes$1.CART_ADD_ITEM,
        key: key,
        quantity: quantity,
        item: item
      });
    },

    /**
     * Removes an item from the cart.
     * @param index
     */
    removeItem: function removeItem(index) {
      dispatcher.dispatch({
        actionType: ActionTypes$1.CART_REMOVE_ITEM,
        index: index
      });
    },

    /**
     * Updates the quantity of an item in the cart.
     * @param index
     * @param quantity
     */
    updateQuantity: function updateQuantity(index, quantity) {
      dispatcher.dispatch({
        actionType: ActionTypes$1.CART_UPDATE_ITEM,
        index: index,
        quantity: quantity
      });
    },

    /**
     * Adds a product option to a item in the cart.
     * @param key
     * @param quantity
     * @param option
     * @param item
     */
    addOption: function addOption(key, quantity, option, item) {
      dispatcher.dispatch({
        actionType: ActionTypes$1.CART_ADD_OPTION,
        key: key,
        quantity: quantity,
        option: option,
        item: item
      });
    },

    /**
     * Clears all item from the cart. Does not create a new order ID.
     */
    clearCart: function clearCart() {
      dispatcher.dispatch({
        actionType: ActionTypes$1.CART_CLEAR
      });
    },

    /**
     * Reverts the item to a previous state. Does not create a new order ID.
     */
    revertCart: function revertCart() {
      dispatcher.dispatch({
        actionType: ActionTypes$1.CART_REVERT
      });
    },

    /**
     * Clears all item from the cart and creates a new order with a fresh order ID.
     */
    resetCart: function resetCart() {
      dispatcher.dispatch({
        actionType: ActionTypes$1.CART_RESET
      });
    }
  };
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant$2(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

var invariant_1$1 = invariant$2;

var Dispatcher_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }



var _prefix = 'ID_';

/**
 * Dispatcher is used to broadcast payloads to registered callbacks. This is
 * different from generic pub-sub systems in two ways:
 *
 *   1) Callbacks are not subscribed to particular events. Every payload is
 *      dispatched to every registered callback.
 *   2) Callbacks can be deferred in whole or part until other callbacks have
 *      been executed.
 *
 * For example, consider this hypothetical flight destination form, which
 * selects a default city when a country is selected:
 *
 *   var flightDispatcher = new Dispatcher();
 *
 *   // Keeps track of which country is selected
 *   var CountryStore = {country: null};
 *
 *   // Keeps track of which city is selected
 *   var CityStore = {city: null};
 *
 *   // Keeps track of the base flight price of the selected city
 *   var FlightPriceStore = {price: null}
 *
 * When a user changes the selected city, we dispatch the payload:
 *
 *   flightDispatcher.dispatch({
 *     actionType: 'city-update',
 *     selectedCity: 'paris'
 *   });
 *
 * This payload is digested by `CityStore`:
 *
 *   flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'city-update') {
 *       CityStore.city = payload.selectedCity;
 *     }
 *   });
 *
 * When the user selects a country, we dispatch the payload:
 *
 *   flightDispatcher.dispatch({
 *     actionType: 'country-update',
 *     selectedCountry: 'australia'
 *   });
 *
 * This payload is digested by both stores:
 *
 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       CountryStore.country = payload.selectedCountry;
 *     }
 *   });
 *
 * When the callback to update `CountryStore` is registered, we save a reference
 * to the returned token. Using this token with `waitFor()`, we can guarantee
 * that `CountryStore` is updated before the callback that updates `CityStore`
 * needs to query its data.
 *
 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       // `CountryStore.country` may not be updated.
 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
 *       // `CountryStore.country` is now guaranteed to be updated.
 *
 *       // Select the default city for the new country
 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
 *     }
 *   });
 *
 * The usage of `waitFor()` can be chained, for example:
 *
 *   FlightPriceStore.dispatchToken =
 *     flightDispatcher.register(function(payload) {
 *       switch (payload.actionType) {
 *         case 'country-update':
 *         case 'city-update':
 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
 *           FlightPriceStore.price =
 *             getFlightPriceStore(CountryStore.country, CityStore.city);
 *           break;
 *     }
 *   });
 *
 * The `country-update` payload will be guaranteed to invoke the stores'
 * registered callbacks in order: `CountryStore`, `CityStore`, then
 * `FlightPriceStore`.
 */

var Dispatcher = (function () {
  function Dispatcher() {
    _classCallCheck(this, Dispatcher);

    this._callbacks = {};
    this._isDispatching = false;
    this._isHandled = {};
    this._isPending = {};
    this._lastID = 1;
  }

  /**
   * Registers a callback to be invoked with every dispatched payload. Returns
   * a token that can be used with `waitFor()`.
   */

  Dispatcher.prototype.register = function register(callback) {
    var id = _prefix + this._lastID++;
    this._callbacks[id] = callback;
    return id;
  };

  /**
   * Removes a callback based on its token.
   */

  Dispatcher.prototype.unregister = function unregister(id) {
    !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant_1$1(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : invariant_1$1(false) : undefined;
    delete this._callbacks[id];
  };

  /**
   * Waits for the callbacks specified to be invoked before continuing execution
   * of the current callback. This method should only be used by a callback in
   * response to a dispatched payload.
   */

  Dispatcher.prototype.waitFor = function waitFor(ids) {
    !this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant_1$1(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : invariant_1$1(false) : undefined;
    for (var ii = 0; ii < ids.length; ii++) {
      var id = ids[ii];
      if (this._isPending[id]) {
        !this._isHandled[id] ? process.env.NODE_ENV !== 'production' ? invariant_1$1(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : invariant_1$1(false) : undefined;
        continue;
      }
      !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant_1$1(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : invariant_1$1(false) : undefined;
      this._invokeCallback(id);
    }
  };

  /**
   * Dispatches a payload to all registered callbacks.
   */

  Dispatcher.prototype.dispatch = function dispatch(payload) {
    !!this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant_1$1(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : invariant_1$1(false) : undefined;
    this._startDispatching(payload);
    try {
      for (var id in this._callbacks) {
        if (this._isPending[id]) {
          continue;
        }
        this._invokeCallback(id);
      }
    } finally {
      this._stopDispatching();
    }
  };

  /**
   * Is this Dispatcher currently dispatching.
   */

  Dispatcher.prototype.isDispatching = function isDispatching() {
    return this._isDispatching;
  };

  /**
   * Call the callback stored with the given id. Also do some internal
   * bookkeeping.
   *
   * @internal
   */

  Dispatcher.prototype._invokeCallback = function _invokeCallback(id) {
    this._isPending[id] = true;
    this._callbacks[id](this._pendingPayload);
    this._isHandled[id] = true;
  };

  /**
   * Set up bookkeeping needed when dispatching.
   *
   * @internal
   */

  Dispatcher.prototype._startDispatching = function _startDispatching(payload) {
    for (var id in this._callbacks) {
      this._isPending[id] = false;
      this._isHandled[id] = false;
    }
    this._pendingPayload = payload;
    this._isDispatching = true;
  };

  /**
   * Clear bookkeeping used for dispatching.
   *
   * @internal
   */

  Dispatcher.prototype._stopDispatching = function _stopDispatching() {
    delete this._pendingPayload;
    this._isDispatching = false;
  };

  return Dispatcher;
})();

module.exports = Dispatcher;
});

unwrapExports(Dispatcher_1);

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var Dispatcher$1 = Dispatcher_1;

function jsonSameMembers(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

function hyphenize(str) {
  return str.replace(/[A-Z]/g, function (str) {
    return '-' + str.toLowerCase();
  });
}

function underscore(str) {
  return str.replace(/[A-Z]/g, function (str) {
    return '_' + str.toLowerCase();
  });
}

function camelize(str) {
  return str.replace(/[\s\-_]+(\w)/g, function (str) {
    return str.toUpperCase().replace(/[\s\-_]+/, '');
  });
}

function recursiveFormatKeys(data, from, to) {
  var clone = {};
  var modes = ['underscore', 'camelcase', 'hyphenate'];
  if (!(modes.indexOf(from) > -1 || !modes.indexOf(to) > -1)) {
    throw new Error('Cannot normalize data: incorrect mode and currentMode supplied. Valid modes are \'underscore\', \'camelcase\' and \'hyphenate\'.');
  }

  Object.keys(data).reduce(function (obj, prop) {
    var val = data[prop];
    var newVal = (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object' && val !== null ? recursiveFormatKeys(val, from, to) : val;

    switch (to) {
      case 'underscore':
        obj[underscore(prop)] = newVal;
        break;
      case 'camelcase':
        obj[camelize(prop)] = newVal;
        break;
      case 'hyphenate':
        obj[hyphenize(prop)] = newVal;
        break;
    }
    return obj;
  }, clone);

  return clone;
}

var INSTANCE_COUNTER = 0;
var CHANGE_EVENT_NAME = 'change';
var ITEM_ADDED_EVENT_NAME = 'item-added';
var ITEM_CHANGED_EVENT_NAME = 'item-changed';
var ITEM_OPTIONS_CHANGED_EVENT_NAME = 'product-options-changed';
var RESET_EVENT_NAME = 'cart-reset';
var CLEARED_EVENT_NAME = 'cart-cleared';
var idKey = 'vin'; // TODO: Make this configurable using mappings?
var optionIdKey = 'id'; // TODO: Make this configurable using mappings?
var optionsKey = 'options'; // TODO: Make this configurable using mappings?
var nextKey = 'nextKey'; // TODO: Make this configurable using mappings?
var dataKey = 'data'; // TODO: Make this configurable using mappings?
var quantityKey = 'quantity'; // TODO: Make this configurable using mappings?

var CartStore = function (_EventEmitter) {
  inherits(CartStore, _EventEmitter);

  function CartStore(dispatcher) {
    classCallCheck(this, CartStore);

    var _this = possibleConstructorReturn(this, (CartStore.__proto__ || Object.getPrototypeOf(CartStore)).call(this));

    _this.INSTANCE_ID = INSTANCE_COUNTER++;

    // console.log('INITIALIZING CARTSTORE ' + this.INSTANCE_ID)

    /* dispatcher = dispatcher || null
     if (dispatcher instanceof Dispatcher) {
     this.dispatcher = dispatcher
     } else {
     this.dispatcher = new Dispatcher()  // TODO: Hmmm... maybe I shouldn't just create a random dispatcher that's attached to the base store
     // This is just in here until I decide how to handle the case where it isn't provided
     } */

    _this.subscribe(dispatcher, function () {
      return _this.registerToActions.bind(_this);
    });

    _this.items = {};
    _this.selection = [];
    _this[nextKey] = 0;
    _this.dispatchToken = null;
    return _this;
  }

  createClass(CartStore, [{
    key: 'subscribe',
    value: function subscribe(dispatcher, actionSubscribe) {
      if (!(dispatcher instanceof Dispatcher$1)) {
        throw new Error('Failed to provide dispatcher to BaseStore, cannot register actions');
      }

      this.dispatchToken = dispatcher.register(actionSubscribe());
    }
  }, {
    key: 'init',
    value: function init(config) {
      var _this2 = this;

      this.items = config.items;
      this.selection = [];
      // this.total = total

      config.selection.forEach(function (item) {
        item[quantityKey] = Number(item[quantityKey]);
        item._key = _this2[nextKey]++;
        if (item[dataKey]) {
          _this2.items[item[idKey]] = item[dataKey];
        } else {
          item[dataKey] = _this2.items[item[idKey]];
        }
        if (!item[dataKey]) {
          throw 'Missing data for item \'' + item[idKey] + '\'.';
        }
        _this2.selection.push(item);
        _this2.items[item[idKey]]._initialQty = item[quantityKey];
      });

      this.reIndex();
    }
  }, {
    key: 'registerToActions',
    value: function registerToActions(action) {
      switch (action.actionType) {
        case 'cart-initialize':
          this.init(action.config);
          this.emit('ready');
          // Ready isn't triggering update!
          // We were previously using change;
          // I plan on updating this behavior
          // but not just yet...
          this.emit(CHANGE_EVENT_NAME);
          break;
        case 'cart-revert':
          this.init(action.config);
          this.emit(CHANGE_EVENT_NAME);
          break;
        case 'cart-add-item':
          this.addItem(action.key, action.quantity, action.item);
          break;
        case 'cart-remove-item':
          this.removeItem(action.index);
          break;
        case 'cart-update-item':
          this.updateQuantity(action.index, action.quantity);
          break;
        case 'cart-add-option':
          this.addOption(action.key, action.quantity, action.option, action.item);
          break;
        case ITEM_OPTIONS_CHANGED_EVENT_NAME:
          this.reset();
          break;
        case 'cart-clear':
          this.clear();
          break;
        default:
          break;
      }
    }
  }, {
    key: 'reIndex',
    value: function reIndex() {
      var idx = 0;
      this.selection.forEach(function (item) {
        item._index = idx++;
      });
    }
  }, {
    key: 'getSelection',
    value: function getSelection() {
      return this.selection;
    }
  }, {
    key: 'getCount',
    value: function getCount() {
      // TODO: This isn't working right yet
      var total = 0;

      if (this.selection instanceof Array && this.selection.length > 0) {
        total = this.selection.reduce(function (total, selection) {
          return total + parseInt(selection[quantityKey]);
        }, total);
      }

      return total;
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty$$1() {
      return !this.selection.length;
    }
  }, {
    key: 'getItem',
    value: function getItem(index) {
      return this.selection[index];
    }
  }, {
    key: 'addItem',
    value: function addItem(key, quantity, item, silent) {
      // console.log('ATTEMPTING TO ADD ITEM TO CARTSTORE ' + this.INSTANCE_ID)

      // Cart store addItem
      silent = silent || false;
      var data = null;
      var options = [];

      if (this.items.hasOwnProperty(key)) {
        data = this.items[key];
      } else {
        data = item;

        this.items[key] = data;
      }

      var exists = false;
      for (var selectionKey in this.selection) {
        exists = false; // Reset the variable just in case
        // Compare item keys to see if the item already exists in the selection array
        if (key === this.selection[selectionKey][idKey]) {
          // Now make sure the selected options are a match...
          // If it isn't an exact match, we're going to assume a different
          // configuration for the same product, so skip this and create a new item

          // Consider empty options property to be an empty array
          options = item[optionsKey] instanceof Array ? item[optionsKey] : options;

          if (jsonSameMembers(options, this.selection[selectionKey][optionsKey])) {
            exists = true;
          }
        }

        if (exists) {
          var oldQuantity = this.selection[selectionKey][quantityKey];
          this.selection[selectionKey][quantityKey] += Number(quantity);

          if (!silent) {
            this.emit(CHANGE_EVENT_NAME);
            this.emit(ITEM_CHANGED_EVENT_NAME, item, this.selection[selectionKey][quantityKey], oldQuantity);
          }

          return; // Break out
        }
      }

      if (data) {
        var _selectionItem;

        var selectionItem = (_selectionItem = {}, defineProperty(_selectionItem, idKey, key), defineProperty(_selectionItem, quantityKey, Number(quantity)), defineProperty(_selectionItem, dataKey, data), defineProperty(_selectionItem, optionsKey, [].concat(toConsumableArray(options))), defineProperty(_selectionItem, '_index', this.selection.length), defineProperty(_selectionItem, '_key', this[nextKey]++), _selectionItem);

        this.selection.push(selectionItem);

        if (!silent) {
          this.emit(CHANGE_EVENT_NAME);
          this.emit(ITEM_ADDED_EVENT_NAME, key, Number(quantity), item);
        }
      }
    }
  }, {
    key: 'updateItem',
    value: function updateItem(key, quantity, item, silent) {
      silent = silent || false;
      var data = item.hasOwnProperty([dataKey]) ? item[dataKey] : null;

      if (this.items.hasOwnProperty(key)) {
        data = this.items[key];
      } else {
        this.items[key] = data;
      }

      for (var selectionKey in this.selection) {
        if (key === this.selection[selectionKey][idKey]) {
          var oldQty = this.selection[selectionKey][quantityKey];
          this.selection[selectionKey][quantityKey] += Number(quantity);

          if (!silent) {
            this.emit(CHANGE_EVENT_NAME);
            this.emit(ITEM_CHANGED_EVENT_NAME, item, this.selection[selectionKey][quantityKey], oldQty);
          }

          return;
        }
      }

      if (data) {
        var _selectionItem2;

        var selectionItem = (_selectionItem2 = {}, defineProperty(_selectionItem2, idKey, key), defineProperty(_selectionItem2, quantityKey, Number(quantity)), defineProperty(_selectionItem2, dataKey, data), defineProperty(_selectionItem2, optionsKey, []), defineProperty(_selectionItem2, '_index', this.selection.length), defineProperty(_selectionItem2, '_key', this[nextKey]++), _selectionItem2);

        this.selection.push(selectionItem);

        if (!silent) {
          this.emit(CHANGE_EVENT_NAME);
          this.emit(ITEM_ADDED_EVENT_NAME, key, Number(quantity), item);
        }
      }
    }

    /**
     * @param index
     */

  }, {
    key: 'removeItem',
    value: function removeItem(index) {
      var key = this.selection[index][idKey];
      var item = this.selection.splice(index, 1)[0];

      this.reIndex();

      this.emit(CHANGE_EVENT_NAME);
      this.emit('item-removed', key, item);
    }

    /**
     The product options
     "options": [{
       "name": "Packages per Shipment",
       "type": "select",
       "option_value": [{
         "image": "",
         "price": false,
         "price_formated": false, // TODO: Typo!
         "price_prefix": "+",
         "product_option_value_id": "527",
         "option_value_id": "241",
         "name": "1",
         "quantity": 0
       }]
     }]
      Selected option value sample
     "option": { // The selected option value
       "image": "",
       "price": false,
       "price_formated": false, // TODO: Typo!
       "price_prefix": "+",
       "product_option_value_id": "525",
       "option_value_id": "238",
       "name": "250g",
       "quantity": 0,
       "option": { // The option itself
       "name": "Product Size",
       "type": "select",
       "required": "1",
       "product_option_id": "253",
       "option_id": "44"
     }
      The selection object
     "selection": [{
       data: {}, // Cart item product data
       id: "3382",
       options: [], // I think this is redundant / useless
       quantity: 2,
       _index: 0,
       _key: 0
     }]
      * @param key
     * @param quantity item quantity
     * @param option The data item option to be stored
     * @param item Optionally include the parent item in the product-options-changed event arguments
     */

  }, {
    key: 'addOption',
    value: function addOption(key, quantity, option, item) {
      // Loop over active items in cart (the current selection)
      // If the item being added isn't already in the cart, we
      // need to add it before processing the option
      var createItem = true;
      for (var idx = 0; idx < this.selection.length; idx++) {
        var selection = this.selection[idx];
        if (item[idKey] === selection[idKey]) {
          createItem = false;
        }
      }

      // Store item option if it doesn't exist
      if (createItem) {
        this.addItem(item[idKey], 1, item, true); // Silent add, don't trigger events
      }

      // Loop over active selections in cart
      for (var _idx = 0; _idx < this.selection.length; _idx++) {
        if (!(this.selection[_idx][optionsKey] instanceof Array)) {
          this.selection[_idx][optionsKey] = [];
        }

        if (typeof this.selection[_idx][nextKey] === 'undefined' || isNaN(this.selection[_idx][nextKey])) {
          this.selection[_idx][nextKey] = 0;
        }

        var _selection = this.selection[_idx];

        // If we've found the correct item in the cart
        if (item[idKey] === _selection[idKey]) {
          // Grab the item's options
          var selectedOptions = _selection[optionsKey];

          // Loop over the item's options
          for (var optionIdx = 0; optionIdx < selectedOptions.length; optionIdx++) {
            // If the option already has been added, increment its quantity and exit
            if (key === selectedOptions[optionIdx][optionIdKey]) {
              var oldQuantity = _selection[quantityKey];
              this.selection[_idx][optionsKey][optionIdx][quantityKey] += Number(quantity);

              // console.log('option ' + selection[idKey] + ' has already been added')

              if (createItem) {
                this.emit(CHANGE_EVENT_NAME);
                this.emit(ITEM_ADDED_EVENT_NAME, _selection[idKey], _selection[quantityKey], _selection[dataKey]);
              } else {
                this.emit(CHANGE_EVENT_NAME);
                this.emit(ITEM_OPTIONS_CHANGED_EVENT_NAME, option, Number(quantity), item, oldQuantity);
              }

              return;
            }
          }

          // If we didn't find the option (if we had found it, this function would have returned), add it...
          if (option) {
            var _selectionItemOption;

            var selectionItemOption = (_selectionItemOption = {}, defineProperty(_selectionItemOption, optionIdKey, option[optionIdKey]), defineProperty(_selectionItemOption, quantityKey, Number(quantity)), defineProperty(_selectionItemOption, dataKey, option), _selectionItemOption);

            this.selection[_idx][optionsKey].push(selectionItemOption);

            if (createItem) {
              this.emit(CHANGE_EVENT_NAME);
              this.emit(ITEM_ADDED_EVENT_NAME, _selection[idKey], _selection[quantityKey], _selection[dataKey]);
            } else {
              this.emit(CHANGE_EVENT_NAME);
              this.emit(ITEM_OPTIONS_CHANGED_EVENT_NAME, option, Number(quantity), item);
            }
          }
        }
      }
    }
  }, {
    key: 'updateQuantity',
    value: function updateQuantity(index, quantity) {
      var item = this.selection[index];
      var oldQty = item[quantityKey];
      item[quantityKey] = Number(quantity);
      this.emit(CHANGE_EVENT_NAME);
      this.emit(ITEM_CHANGED_EVENT_NAME, this.items[item[idKey]], quantity, oldQty);
    }
  }, {
    key: 'getOptionPrice',
    value: function getOptionPrice(itemData, selectedOption, optionValueId) {
      //let itemOptions = itemData['options']

      if (selectedOption['option_value'] instanceof Array) {
        var selectedOptionValues = selectedOption['option_value'];
        var selectedValues = selectedOptionValues.filter(function (option) {
          return Number(option['product_option_value_id']) === optionValueId;
        });

        if (selectedValues instanceof Array && selectedValues.length > 0) {
          var selectedValue = selectedValues[0]; // Single selection for now

          if (selectedValue['price'] !== false && !isNaN(selectedValue['price'])) {
            return Number(selectedValue['price']);
          }
        }
      }
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.selection = [];
      this.emit(CHANGE_EVENT_NAME);
      this.emit(RESET_EVENT_NAME);
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.selection = [];
      this.emit(CHANGE_EVENT_NAME);
      this.emit(CLEARED_EVENT_NAME);
    }
  }, {
    key: 'emitChange',
    value: function emitChange() {
      this.emit(CHANGE_EVENT_NAME);
    }
  }, {
    key: 'addChangeListener',
    value: function addChangeListener(cb) {
      this.on(CHANGE_EVENT_NAME, cb);
    }
  }, {
    key: 'removeChangeListener',
    value: function removeChangeListener(cb) {
      this.removeListener(CHANGE_EVENT_NAME, cb);
    }
  }, {
    key: 'normalizePayload',
    value: function normalizePayload(data, from, to) {
      return recursiveFormatKeys(data, from, to);
    }

    /**
     * TODO: I am a utility method move me out of here!
     */

  }, {
    key: '_isset',
    value: function _isset(array$$1, value) {
      return typeof array$$1[value] !== 'undefined' && array$$1[value] !== null ? true : false;
    }
  }]);
  return CartStore;
}(EventEmitter);

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
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
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
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
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty$1.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols$1) {
			symbols = getOwnPropertySymbols$1(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Retrieves a nested value from within an object given a string path.
 * @param path eg. path.to[0].my[1].object
 * @param data An object to traverse
 * @returns {*}
 */
function getMappedValue(mapping, data, resolve) {
  resolve = typeof resolve === 'boolean' ? resolve : false;

  var pathMapping = null;
  // If the mapping provided is a simple string ie: MY_FIELD: 'myField'
  if (typeof mapping === 'string' && mapping.length > 0) {
    resolve = true; // Simple mappings must be resolved
    pathMapping = mapping;
  }

  mapping = mapping || null;
  if (mapping !== null) {
    if (mapping.hasOwnProperty('property') && mapping.hasOwnProperty('value')) {
      pathMapping = resolve === false ? mapping.property : mapping.value;
    }
  }

  if (pathMapping !== null) {
    return getPathMappedValue(pathMapping, data);
  }
}

function getPathMappedValue(path, data) {
  if (typeof data === 'undefined' || data === null) {
    return null;
  }
  // Access static methods using constructor property
  var chunks = getObjectPath(path);

  var arrayExpr = /(\[\]|\[(.*)\])$/g;
  var isArray = false;

  var currentChunk = chunks.shift(); // Shift the first element off the array
  isArray = arrayExpr.test(currentChunk);

  /*if (isArray) {
   console.log(currentChunk + ' is an array')
   } else {
   console.log(currentChunk + ' is not an array')
   }*/

  if (chunks.length > 0) {
    // console.log('processing path chunk: ' + currentChunk)
    var prop = currentChunk;

    if (isArray) {
      // Bust the [] off the string so we're left with just the property key
      prop = prop.replace(arrayExpr, '');

      // Get the index of the array item we're targeting
      // Not sure if there's ever a case where we wouldn't use an index (myProp[])? How would that work?
      var arrIdx = parseInt(arrayExpr.exec(currentChunk)[2]); // Just get the number
      // console.log(JSON.stringify(data[prop][arrIdx]))

      // IMPORTANT! Re-escape the chunks before recursing or the result will not be what you expected
      chunks = chunks.map(function (chunk) {
        return chunk.replace('.', '\\\\.');
      });

      if (data[prop] instanceof Array && data[prop].length > 0) {
        return getPathMappedValue(chunks.join('.'), data[prop][arrIdx]);
      }
    }

    // console.log(JSON.stringify(data[prop]))
    return getPathMappedValue(chunks.join('.'), data[prop]);
  } else {
    return data[currentChunk];
  }
}

function getObjectPath(str) {
  // ([^\\]) Negative capturing group to make sure we don't pick up escape slashes
  // (\\\\)* Match backslash character
  // \. Grab any unescaped dots

  if (!(typeof str === 'string')) {
    throw new Error('Invalid object path, getObjectPath expected a string');
  }

  var merged = [];

  // Credits to https://github.com/wankdanker/node-object-mapper/blob/master/src/set-key-value.js for this approach to parsing object paths
  var dotExpr = /([^\\])(\\\\)*\./g; // Matches all unescaped dots in the provided string
  var chunks = str.split(dotExpr); // Explode the string into an array of path chunks

  for (var i = 0; i < chunks.length; i++) {
    if ((i - 1) % 3 === 0) {
      // Every third match is the character of the first group [^\\] which needs to be merged in again
      // That comment doesn't really make sense... let's work on it eh?
      var tmpKey = chunks[i - 1] + chunks[i];
      merged.push(tmpKey.replace('\\.', '.'));
    }

    // Add part after last dot
    if (i === chunks.length - 1) {
      merged.push(chunks[i].replace('\\.', '.'));
    }
  }

  chunks = merged;

  // console.log(JSON.stringify(chunks))

  return chunks;
}

/**
 * This is an Observable manager for context. Context is broken in React 16.2.
 * We will upgrade the components to use the new React Context in the near future.
 * @param componentClass
 * @param exposedMethods
 * @returns {{getSubscribers: (function(): Array), notifySubscribers: notifySubscribers, subscribe: (function(*=): Function), getCartContextValue: (function(): *)}}
 */
var createCartContextManager = function createCartContextManager(componentClass, exposedMethods) {
  var dispatcher = new Dispatcher$1();
  var actions = CartActions(dispatcher);
  var store = new CartStore(dispatcher);

  var cartContextValue = objectAssign({
    component: componentClass,
    dispatcher: dispatcher,
    actions: actions,
    store: store
  }, exposedMethods);

  var subscribers = [];

  var getCartContextValue = function getCartContextValue() {
    return cartContextValue;
  };

  var subscribe = function subscribe(subscriber) {
    subscribers.push(subscriber);

    return function () {
      subscribers = subscribers.filter(function (s) {
        return s !== subscriber;
      });
    };
  };

  var getSubscribers = function getSubscribers() {
    return subscribers;
  };

  var notifySubscribers = function notifySubscribers(state) {
    // console.log('NOTIFY SUBSCRIBERS')
    cartContextValue = state;
    subscribers.forEach(function (callback) {
      return callback(cartContextValue);
    });
  };

  return {
    getCartContextValue: getCartContextValue,
    getSubscribers: getSubscribers,
    notifySubscribers: notifySubscribers,
    subscribe: subscribe
  };
};

var INSTANCE_COUNTER$1 = 0;

/**
 * This higher-order component wraps an existing component, and decorates it with
 * methods needed to interact with the core shopping cart.
 */
var CartContext = function CartContext(ComposedComponent) {
  var _class, _temp;

  var displayName = ComposedComponent.displayName || ComposedComponent.name || 'Component';

  var CartContext = (_temp = _class = function (_Component) {
    inherits(CartContext, _Component);

    function CartContext(props, context) {
      classCallCheck(this, CartContext);

      var _this = possibleConstructorReturn(this, (CartContext.__proto__ || Object.getPrototypeOf(CartContext)).call(this, props));

      _this.INSTANCE_ID = INSTANCE_COUNTER$1++;

      // console.log('INITIALIZING CARTCONTEXT ' + this.INSTANCE_ID)

      _this.getDecoratedComponentInstance = _this.getDecoratedComponentInstance.bind(_this);
      _this.getContextManager = _this.getContextManager.bind(_this);
      _this.getContextValue = _this.getContextValue.bind(_this);
      _this.getChildContext = _this.getChildContext.bind(_this);
      _this.getSelection = _this.getSelection.bind(_this);
      _this.isEmpty = _this.isEmpty.bind(_this);
      _this.hasItems = _this.hasItems.bind(_this);
      // this.categoryClicked = this.categoryClicked.bind(this)
      _this.itemClicked = _this.itemClicked.bind(_this);
      _this.optionClicked = _this.optionClicked.bind(_this);
      _this.optionClicked = _this.optionClicked.bind(_this);
      _this.itemDropped = _this.itemDropped.bind(_this);
      _this.addToCart = _this.addToCart.bind(_this);
      _this.quickAddToCart = _this.quickAddToCart.bind(_this);
      _this.addOptionToCart = _this.addOptionToCart.bind(_this);
      _this.addToCartClicked = _this.addToCartClicked.bind(_this);
      _this.addOptionToCartClicked = _this.addOptionToCartClicked.bind(_this);
      _this.refresh = _this.refresh.bind(_this);
      _this.reset = _this.reset.bind(_this);
      _this.getTotal = _this.getTotal.bind(_this);
      _this.doCheckout = _this.doCheckout.bind(_this);

      _this.state = {
        blockUi: false,
        chooseQuantity: false,
        settings: {}
      };

      var classMethods = {
        getContextManager: _this.getContextManager,
        getContextValue: _this.getContextValue,
        getSelection: _this.getSelection,
        addToCart: _this.addToCart,
        quickAddToCart: _this.quickAddToCart,
        addOptionToCart: _this.addOptionToCart,
        addToCartClicked: _this.addToCartClicked,
        addOptionToCartClicked: _this.addOptionToCartClicked,
        getTotal: _this.getTotal,
        doCheckout: _this.doCheckout
      };

      _this.cartContextManager = createCartContextManager(_this, classMethods);

      var cartContextValue = _this.cartContextManager.getCartContextValue();
      var store = cartContextValue.store;

      store.addListener('change', function () {
        // console.log('CartContext CHANGE event emitted in instance ' + this.INSTANCE_ID)
        var payload = _this.cartContextManager.getCartContextValue();
        _this.cartContextManager.notifySubscribers(payload);
      });
      return _this;
    }

    createClass(CartContext, [{
      key: 'getContextManager',
      value: function getContextManager() {
        return this.cartContextManager;
      }
    }, {
      key: 'getContextValue',
      value: function getContextValue() {
        return this.cartContextManager.getCartContextValue();
      }
    }, {
      key: 'getChildContext',
      value: function getChildContext() {
        // console.log('CartContext.getChildContext')
        // console.log('cartContextManager')
        // console.log(this.cartContextManager)
        // console.log('cartContextValue')
        // console.log(this.cartContextManager.getCartContextValue())
        // console.log('CartContext subscribers')
        // console.log(this.cartContextManager.getSubscribers())
        return {
          cartContextManager: this.cartContextManager,
          cart: this.cartContextManager.getCartContextValue()
        };
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        // this.context.actions.init(this.props.items, this.context.store.getSelection())
        this.cartContextManager.subscribe(function (data) {
          // console.log('update CART with data')
          // console.log(data)
          _this2.forceUpdate();
        });
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps() {
        var payload = this.cartContextManager.getCartContextValue();
        // console.log('component received new props dump context val')
        // console.log(payload)
        this.cartContextManager.notifySubscribers(payload);
      }
    }, {
      key: 'getDecoratedComponentInstance',
      value: function getDecoratedComponentInstance() {
        /* invariant(
         this.child,
         'In order to access an instance of the wrapped component it can not be a stateless component.',
         ) */
        return this.wrappedInstance;
      }
    }, {
      key: 'getStore',
      value: function getStore() {
        var cartContextValue = this.cartContextManager.getCartContextValue();
        return cartContextValue.store;
      }
    }, {
      key: 'getSelection',
      value: function getSelection() {
        return this.getStore().getSelection();
      }
    }, {
      key: 'isEmpty',
      value: function isEmpty() {
        return this.getStore().isEmpty();
      }
    }, {
      key: 'hasItems',
      value: function hasItems() {
        var selection = this.getStore().getSelection() || null;
        return selection instanceof Array && selection.length > 0;
      }

      /**
       * onItemClicked must be implemented in the extending class?
       */

    }, {
      key: 'itemClicked',
      value: function itemClicked(e, item) {
        e.preventDefault();
        e.stopPropagation();

        // If the Quick Add button was clicked
        if (e.target.type === 'button') {
          this.addToCartClicked(e, item);
        }
      }
    }, {
      key: 'itemDropped',
      value: function itemDropped(item) {}
    }, {
      key: 'optionClicked',
      value: function optionClicked(item) {
        // console.log('option clicked')
        // console.log(item)

        this.forceUpdate(); // Redraw, options have changed
      }
    }, {
      key: 'addToCart',
      value: function addToCart(e, item, quantity) {
        e.preventDefault();
        e.stopPropagation();

        var itemMappings = this.props.mappings.inventoryItem;

        var itemId = null;
        quantity = !isNaN(quantity) ? Number(quantity) : null;

        if (quantity === null) {
          quantity = 0;

          switch (this.props.addToCartMode) {
            case 'instant':
              // Temporarily store the selected product's information
              quantity = 1;

              break;
            case 'popup':
              if (!this.state.chooseQuantity) {
                quantity = parseFloat(this.keypad.getForm().value);
              }

              break;
            case 'normal':
              if (this.state.chooseQuantity) {
                // If the keypad popup modal is open, use its value
                quantity = parseFloat(this.popupKeypad.getForm().value);
              } else {
                quantity = parseFloat(this.keypad.getForm().value);
              }

              break;
            default:
              if (this.state.chooseQuantity) {
                // If the keypad popup modal is open, use its value
                quantity = parseFloat(this.popupKeypad.getForm().value);
              } else {
                quantity = parseFloat(this.keypad.getForm().value);
              }

              break;
          }
        }

        if (!isNaN(quantity) && quantity > -1) {
          item = item || null;

          if (item === null) throw new Error('Attempted to add non-item to cart!');

          // itemId = FormHelper.getMappedValue(itemMappings.VIN, item)
          // itemId = FormHelper.getMappedValue(itemMappings.ITEM_ID, item)

          this.cartContextManager.getCartContextValue().actions.addItem(itemId, quantity, item);
        } else {
          console.log('Please enter the desired quantity.');
        }

        this.forceUpdate();
      }
    }, {
      key: 'addOptionToCart',
      value: function addOptionToCart(e, option, quantity, item) {
        // CartContext.addToCart
        e.preventDefault();
        e.stopPropagation();

        var itemMappings = this.props.mappings.inventoryItem;
        var optionId = null;

        quantity = !isNaN(quantity) ? Number(quantity) : null;

        if (quantity === null) {
          quantity = 0;

          switch (this.props.addToCartMode) {
            case 'instant':
              // Temporarily store the selected product's information
              quantity = 1;

              break;
            case 'popup':
              if (!this.state.chooseQuantity) {
                quantity = parseFloat(this.keypad.getForm().value);
              }

              break;
            case 'normal':
              if (this.state.chooseQuantity) {
                // If the keypad popup modal is open, use its value
                quantity = parseFloat(this.popupKeypad.getForm().value);
              } else {
                quantity = parseFloat(this.keypad.getForm().value);
              }

              break;
            default:
              if (this.state.chooseQuantity) {
                // If the keypad popup modal is open, use its value
                quantity = parseFloat(this.popupKeypad.getForm().value);
              } else {
                quantity = parseFloat(this.keypad.getForm().value);
              }

              break;
          }
        }

        if (!isNaN(quantity) && quantity > -1) {
          item = item || null;
          option = option || null;

          if (option === null) throw new Error('Attempted to add non-option to cart!');

          optionId = getMappedValue(itemMappings.ITEM_ID, option);

          this.cartContextManager.getCartContextValue().actions.addOption(optionId, quantity, option, item);
        } else {
          alert('Please enter the desired quantity.');
        }

        this.forceUpdate();
      }
    }, {
      key: 'quickAddToCart',
      value: function quickAddToCart(e) {
        // CartContext.quickAddToCart
        this.addToCart(e); // Add to cart

        // Close quantity keypad popup modal
        this.setState({ chooseQuantity: false });
      }
    }, {
      key: 'addToCartClicked',
      value: function addToCartClicked(e, item, quantity) {
        var itemMappings = this.props.mappings.inventoryItem;

        e.preventDefault();
        e.stopPropagation();

        switch (this.props.addToCartMode) {
          case 'instant':
            quantity = !isNaN(quantity) ? quantity : 1;

            this.addToCart(e, item, quantity); // Add the item to the cart

            break;
          case 'popup':
            // Temporarily store the selected product's information (yes, that's right, zero quantity)
            // itemId = FormHelper.getMappedValue(itemMappings.VIN, item)
            // itemId = FormHelper.getMappedValue(itemMappings.ITEM_ID, item)

            // And open the Keypad / Quantity selection modal
            this.setState({ chooseQuantity: true });

            break;
          case 'normal':
            // Go to the product detail page / component (unless we're there already?)
            break;
          default:
            break;
        }
      }
    }, {
      key: 'addOptionToCartClicked',
      value: function addOptionToCartClicked(e, option, quantity, item) {
        var itemMappings = this.props.mappings.inventoryItem;

        var itemId = null;
        var optionId = null;

        e.preventDefault();
        e.stopPropagation();

        switch (this.props.addToCartMode) {
          case 'instant':
            // Temporarily store the selected product's information
            optionId = getMappedValue(itemMappings.ITEM_ID, option);
            quantity = !isNaN(quantity) ? quantity : 1;

            this.addOptionToCart(e, option, quantity, item); // Add the item to the cart

            break;
          case 'popup':
            // Temporarily store the selected product's information (yes, that's right, zero quantity)
            itemId = getMappedValue(itemMappings.ITEM_ID, item);

            // And open the Keypad / Quantity selection modal
            this.setState({ chooseQuantity: true });

            break;
          case 'normal':
            // Go to the product detail page / component (unless we're there already?)
            break;
          default:
            break;
        }
      }
    }, {
      key: 'refresh',
      value: function refresh() {
        this.setState({ canSubmit: !this.childContext.store.isEmpty() });
      }
    }, {
      key: 'reset',
      value: function reset() {
        this.childContext.actions.cart.emptyCart();
      }
    }, {
      key: 'getTotal',
      value: function getTotal() {
        var total = 0;
        return total;
      }
    }, {
      key: 'doCheckout',
      value: function doCheckout() {
        this.props.showChargeModal(function () {
          window.location.href = '#/checkout';
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;

        var props = objectAssign({}, this.props, {
          getContextManager: this.getContextManager,
          getContextValue: this.getContextValue,
          getSelection: this.getSelection,
          addToCart: this.addToCart,
          quickAddToCart: this.quickAddToCart,
          addOptionToCart: this.addOptionToCart,
          addToCartClicked: this.addToCartClicked,
          addOptionToCartClicked: this.addOptionToCartClicked,
          getTotal: this.getTotal,
          doCheckout: this.doCheckout
        });

        return React__default.createElement(ComposedComponent, _extends({
          ref: function ref(instance) {
            _this3.wrappedInstance = instance;
          }
        }, props));
      }
    }]);
    return CartContext;
  }(Component), _class.contextTypes = {
    cartContextManager: object,
    cart: object
  }, _class.childContextTypes = {
    cartContextManager: object,
    cart: object
  }, _class.propTypes = {
    addToCartMode: string,
    mappings: object, // TODO: Provide shape
    showChargeModal: func
  }, _class.defaultProps = {
    addToCartMode: 'instant',
    mappings: {}, // TODO: Flesh this out
    showChargeModal: function showChargeModal() {}
  }, _temp);


  return CartContext;
};



var index$1 = /*#__PURE__*/Object.freeze({
  Cart: Cart,
  DndCart: DndCart,
  Actions: CartActions,
  ActionTypes: ActionTypes$1,
  Context: CartContext,
  Store: CartStore,
  createContextManager: createCartContextManager
});

export { ExampleComponent, index$1 as FluxCart };
//# sourceMappingURL=index.es.js.map
