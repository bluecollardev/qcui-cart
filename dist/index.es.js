import React, { Component } from 'react';
import PropTypes__default, { object, string, func } from 'prop-types';
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

var ExampleComponent = function (_Component) {
  inherits(ExampleComponent, _Component);

  function ExampleComponent() {
    classCallCheck(this, ExampleComponent);
    return possibleConstructorReturn(this, (ExampleComponent.__proto__ || Object.getPrototypeOf(ExampleComponent)).apply(this, arguments));
  }

  createClass(ExampleComponent, [{
    key: 'render',
    value: function render() {
      var text = this.props.text;


      return React.createElement(
        'div',
        { className: styles.test },
        'Example Component: ',
        text
      );
    }
  }]);
  return ExampleComponent;
}(Component);

ExampleComponent.propTypes = {
  text: PropTypes__default.string
};
ExampleComponent.defaultProps = {
  text: 'My Component'
};

var ActionTypes = {
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
        actionType: ActionTypes.CART_INITIALIZE,
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
        actionType: ActionTypes.CART_ADD_ITEM,
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
        actionType: ActionTypes.CART_REMOVE_ITEM,
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
        actionType: ActionTypes.CART_UPDATE_ITEM,
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
        actionType: ActionTypes.CART_ADD_OPTION,
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
        actionType: ActionTypes.CART_CLEAR
      });
    },

    /**
     * Reverts the item to a previous state. Does not create a new order ID.
     */
    revertCart: function revertCart() {
      dispatcher.dispatch({
        actionType: ActionTypes.CART_REVERT
      });
    },

    /**
     * Clears all item from the cart and creates a new order with a fresh order ID.
     */
    resetCart: function resetCart() {
      dispatcher.dispatch({
        actionType: ActionTypes.CART_RESET
      });
    }
  };
};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

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

function invariant(condition, format, a, b, c, d, e, f) {
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

var invariant_1 = invariant;

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
    !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant_1(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : invariant_1(false) : undefined;
    delete this._callbacks[id];
  };

  /**
   * Waits for the callbacks specified to be invoked before continuing execution
   * of the current callback. This method should only be used by a callback in
   * response to a dispatched payload.
   */

  Dispatcher.prototype.waitFor = function waitFor(ids) {
    !this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant_1(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : invariant_1(false) : undefined;
    for (var ii = 0; ii < ids.length; ii++) {
      var id = ids[ii];
      if (this._isPending[id]) {
        !this._isHandled[id] ? process.env.NODE_ENV !== 'production' ? invariant_1(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : invariant_1(false) : undefined;
        continue;
      }
      !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant_1(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : invariant_1(false) : undefined;
      this._invokeCallback(id);
    }
  };

  /**
   * Dispatches a payload to all registered callbacks.
   */

  Dispatcher.prototype.dispatch = function dispatch(payload) {
    !!this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant_1(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : invariant_1(false) : undefined;
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
    value: function _isset(array, value) {
      return typeof array[value] !== 'undefined' && array[value] !== null ? true : false;
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
  var displayName = ComposedComponent.displayName || ComposedComponent.name || 'Component';

  var CartContext = function (_Component) {
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

        return React.createElement(ComposedComponent, _extends({
          ref: function ref(instance) {
            _this3.wrappedInstance = instance;
          }
        }, props));
      }
    }]);
    return CartContext;
  }(Component);

  CartContext.contextTypes = {
    cartContextManager: object,
    cart: object
  };
  CartContext.childContextTypes = {
    cartContextManager: object,
    cart: object
  };
  CartContext.propTypes = {
    addToCartMode: string,
    mappings: object, // TODO: Provide shape
    showChargeModal: func
  };
  CartContext.defaultProps = {
    addToCartMode: 'instant',
    mappings: {}, // TODO: Flesh this out
    showChargeModal: function showChargeModal() {}
  };


  return CartContext;
};



var index = /*#__PURE__*/Object.freeze({
  Actions: CartActions,
  ActionTypes: ActionTypes,
  Context: CartContext,
  Store: CartStore,
  createContextManager: createCartContextManager
});

export { ExampleComponent, index as FluxCart };
//# sourceMappingURL=index.es.js.map
