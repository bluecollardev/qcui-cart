import assign from 'object-assign'
import React, { Component } from 'react'
import * as PropTypes from 'prop-types'
import { Dispatcher } from 'flux'

import * as FormHelper from '../../utils/QCForm'

import { CartActions } from '../actions'
import { CartStore } from '../store'

/**
 * This is an Observable manager for context. Context is broken in React 16.2.
 * We will upgrade the components to use the new React Context in the near future.
 * @param componentClass
 * @param exposedMethods
 * @returns {{getSubscribers: (function(): Array), notifySubscribers: notifySubscribers, subscribe: (function(*=): Function), getCartContextValue: (function(): *)}}
 */
const createCartContextManager = (componentClass, exposedMethods) => {
  let dispatcher = new Dispatcher()
  let actions = CartActions(dispatcher)
  let store = new CartStore(dispatcher)

  let cartContextValue = assign({
    component: componentClass,
    dispatcher: dispatcher,
    actions: actions,
    store: store
  }, exposedMethods)

  let subscribers = []

  const getCartContextValue = () => {
    return cartContextValue
  }

  const subscribe = (subscriber) => {
    subscribers.push(subscriber)

    return () => {
      subscribers = subscribers.filter((s) => {
        return s !== subscriber
      })
    }
  }

  const getSubscribers = () => {
    return subscribers
  }

  const notifySubscribers = (state) => {
    // console.log('NOTIFY SUBSCRIBERS')
    cartContextValue = state
    subscribers.forEach((callback) => {
      return callback(cartContextValue)
    })
  }

  return {
    getCartContextValue: getCartContextValue,
    getSubscribers: getSubscribers,
    notifySubscribers: notifySubscribers,
    subscribe: subscribe
  }
}

let INSTANCE_COUNTER = 0

/**
 * This higher-order component wraps an existing component, and decorates it with
 * methods needed to interact with the core shopping cart.
 */
const CartContext = (ComposedComponent) => {
  let displayName = ComposedComponent.displayName || ComposedComponent.name || 'Component'

  class CartContext extends Component {
    static contextTypes = {
      cartContextManager: PropTypes.object,
      cart: PropTypes.object
    }

    static childContextTypes = {
      cartContextManager: PropTypes.object,
      cart: PropTypes.object
    }

    static propTypes = {
      addToCartMode: PropTypes.string,
      mappings: PropTypes.object, // TODO: Provide shape
      showChargeModal: PropTypes.func
    }

    static defaultProps = {
      addToCartMode: 'instant',
      mappings: {} ,// TODO: Flesh this out
      showChargeModal: () => {}
    }

    constructor(props, context) {
      super(props)

      this.INSTANCE_ID = INSTANCE_COUNTER++

      // console.log('INITIALIZING CARTCONTEXT ' + this.INSTANCE_ID)

      this.getDecoratedComponentInstance = this.getDecoratedComponentInstance.bind(this)
      this.getContextManager = this.getContextManager.bind(this)
      this.getContextValue = this.getContextValue.bind(this)
      this.getChildContext = this.getChildContext.bind(this)
      this.getSelection = this.getSelection.bind(this)
      this.isEmpty = this.isEmpty.bind(this)
      this.hasItems = this.hasItems.bind(this)
      // this.categoryClicked = this.categoryClicked.bind(this)
      this.itemClicked = this.itemClicked.bind(this)
      this.optionClicked = this.optionClicked.bind(this)
      this.optionClicked = this.optionClicked.bind(this)
      this.itemDropped = this.itemDropped.bind(this)
      this.addToCart = this.addToCart.bind(this)
      this.quickAddToCart = this.quickAddToCart.bind(this)
      this.addOptionToCart = this.addOptionToCart.bind(this)
      this.addToCartClicked = this.addToCartClicked.bind(this)
      this.addOptionToCartClicked = this.addOptionToCartClicked.bind(this)
      this.refresh = this.refresh.bind(this)
      this.reset = this.reset.bind(this)
      this.getTotal = this.getTotal.bind(this)
      this.doCheckout = this.doCheckout.bind(this)

      this.state = {
        blockUi: false,
        chooseQuantity: false,
        settings: {}
      }

      let classMethods = {
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
      }

      this.cartContextManager = createCartContextManager(this, classMethods)

      const cartContextValue = this.cartContextManager.getCartContextValue()
      const store = cartContextValue.store

      store.addListener('change', () => {
        // console.log('CartContext CHANGE event emitted in instance ' + this.INSTANCE_ID)
        let payload = this.cartContextManager.getCartContextValue()
        this.cartContextManager.notifySubscribers(payload)
      })
    }

    getContextManager() {
      return this.cartContextManager
    }

    getContextValue() {
      return this.cartContextManager.getCartContextValue()
    }

    getChildContext() {
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
      }
    }

    componentDidMount() {
      // this.context.actions.init(this.props.items, this.context.store.getSelection())
      this.cartContextManager.subscribe((data) => {
        // console.log('update CART with data')
        // console.log(data)
        this.forceUpdate()
      })
    }

    componentWillReceiveProps() {
      let payload = this.cartContextManager.getCartContextValue()
      // console.log('component received new props dump context val')
      // console.log(payload)
      this.cartContextManager.notifySubscribers(payload)
    }

    getDecoratedComponentInstance() {
      /* invariant(
       this.child,
       'In order to access an instance of the wrapped component it can not be a stateless component.',
       ) */
      return this.wrappedInstance
    }

    getStore() {
      const cartContextValue = this.cartContextManager.getCartContextValue()
      return cartContextValue.store
    }

    getSelection() {
      return this.getStore().getSelection()
    }

    isEmpty() {
      return this.getStore().isEmpty()
    }

    hasItems() {
      let selection = this.getStore().getSelection() || null
      return (selection instanceof Array && selection.length > 0)
    }

    /**
     * onItemClicked must be implemented in the extending class?
     */
    itemClicked(e, item) {
      e.preventDefault()
      e.stopPropagation()

      // If the Quick Add button was clicked
      if (e.target.type === 'button') {
        this.addToCartClicked(e, item)
      }
    }

    itemDropped(item) {}

    optionClicked(item) {
      // console.log('option clicked')
      // console.log(item)

      this.forceUpdate() // Redraw, options have changed
    }

    addToCart(e, item, quantity) {
      e.preventDefault()
      e.stopPropagation()

      let itemMappings = this.props.mappings.inventoryItem

      let itemId = null
      quantity = !isNaN(quantity) ? Number(quantity) : null

      if (quantity === null) {
        quantity = 0

        switch (this.props.addToCartMode) {
          case 'instant':
            // Temporarily store the selected product's information
            quantity = 1

            break
          case 'popup':
            if (!this.state.chooseQuantity) {
              quantity = parseFloat(this.keypad.getForm().value)
            }

            break
          case 'normal':
            if (this.state.chooseQuantity) {
              // If the keypad popup modal is open, use its value
              quantity = parseFloat(this.popupKeypad.getForm().value)
            } else {
              quantity = parseFloat(this.keypad.getForm().value)
            }

            break
          default:
            if (this.state.chooseQuantity) {
              // If the keypad popup modal is open, use its value
              quantity = parseFloat(this.popupKeypad.getForm().value)
            } else {
              quantity = parseFloat(this.keypad.getForm().value)
            }

            break
        }
      }

      if (!isNaN(quantity) && quantity > -1) {
        item = item || null

        if (item === null) throw new Error('Attempted to add non-item to cart!')

        // itemId = FormHelper.getMappedValue(itemMappings.VIN, item)
        // itemId = FormHelper.getMappedValue(itemMappings.ITEM_ID, item)

        this.cartContextManager.getCartContextValue().actions.addItem(itemId, quantity, item)
      } else {
        console.log('Please enter the desired quantity.')
      }

      this.forceUpdate()
    }

    addOptionToCart(e, option, quantity, item) {
      // CartContext.addToCart
      e.preventDefault()
      e.stopPropagation()

      let itemMappings = this.props.mappings.inventoryItem
      let itemId = null
      let optionId = null

      quantity = !isNaN(quantity) ? Number(quantity) : null

      if (quantity === null) {
        quantity = 0

        switch (this.props.addToCartMode) {
          case 'instant':
            // Temporarily store the selected product's information
            quantity = 1

            break
          case 'popup':
            if (!this.state.chooseQuantity) {
              quantity = parseFloat(this.keypad.getForm().value)
            }

            break
          case 'normal':
            if (this.state.chooseQuantity) {
              // If the keypad popup modal is open, use its value
              quantity = parseFloat(this.popupKeypad.getForm().value)
            } else {
              quantity = parseFloat(this.keypad.getForm().value)
            }

            break
          default:
            if (this.state.chooseQuantity) {
              // If the keypad popup modal is open, use its value
              quantity = parseFloat(this.popupKeypad.getForm().value)
            } else {
              quantity = parseFloat(this.keypad.getForm().value)
            }

            break
        }
      }

      if (!isNaN(quantity) && quantity > -1) {
        item = item || null
        option = option || null

        if (option === null) throw new Error('Attempted to add non-option to cart!')

        optionId = FormHelper.getMappedValue(itemMappings.ITEM_ID, option)

        this.cartContextManager.getCartContextValue().actions.addOption(optionId, quantity, option, item)
      } else {
        alert('Please enter the desired quantity.')
      }

      this.forceUpdate()
    }

    quickAddToCart(e) {
      // CartContext.quickAddToCart
      this.addToCart(e) // Add to cart

      // Close quantity keypad popup modal
      this.setState({ chooseQuantity: false })
    }

    addToCartClicked(e, item, quantity) {
      let itemMappings = this.props.mappings.inventoryItem
      let itemId = null

      e.preventDefault()
      e.stopPropagation()

      switch (this.props.addToCartMode) {
        case 'instant':
          // Temporarily store the selected product's information
          // TODO: How do I avoid using mappings?
          // itemId = FormHelper.getMappedValue(itemMappings.VIN, item)
          // itemId = FormHelper.getMappedValue(itemMappings.ITEM_ID, item)
          // TODO: Fix me!
          itemId = 1
          quantity = (!isNaN(quantity)) ? quantity : 1

          this.addToCart(e, item, quantity) // Add the item to the cart

          break
        case 'popup':
          // Temporarily store the selected product's information (yes, that's right, zero quantity)
          // itemId = FormHelper.getMappedValue(itemMappings.VIN, item)
          // itemId = FormHelper.getMappedValue(itemMappings.ITEM_ID, item)

          // And open the Keypad / Quantity selection modal
          this.setState({ chooseQuantity: true })

          break
        case 'normal':
          // Go to the product detail page / component (unless we're there already?)
          break
        default:
          break
      }
    }

    addOptionToCartClicked(e, option, quantity, item) {
      let itemMappings = this.props.mappings.inventoryItem

      let itemId = null
      let optionId = null

      e.preventDefault()
      e.stopPropagation()

      switch (this.props.addToCartMode) {
        case 'instant':
          // Temporarily store the selected product's information
          optionId = FormHelper.getMappedValue(itemMappings.ITEM_ID, option)
          quantity = (!isNaN(quantity)) ? quantity : 1

          this.addOptionToCart(e, option, quantity, item) // Add the item to the cart

          break
        case 'popup':
          // Temporarily store the selected product's information (yes, that's right, zero quantity)
          itemId = FormHelper.getMappedValue(itemMappings.ITEM_ID, item)

          // And open the Keypad / Quantity selection modal
          this.setState({ chooseQuantity: true })

          break
        case 'normal':
          // Go to the product detail page / component (unless we're there already?)
          break
        default:
          break
      }
    }

    refresh() {
      this.setState({ canSubmit: !this.childContext.store.isEmpty() })
    }

    reset() {
      this.childContext.actions.cart.emptyCart()
    }

    getTotal() {
      let total = 0
      return total
    }

    doCheckout() {
      this.props.showChargeModal(() => {
        window.location.href = '#/checkout'
      })
    }

    render() {
      let props = assign({}, this.props, {
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
      })

      return (
        <ComposedComponent
          ref={(instance) => { this.wrappedInstance = instance }}
          {...props}
        />
      )
    }
  }

  return CartContext
}

export { CartContext, createCartContextManager }
