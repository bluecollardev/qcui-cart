export const ActionTypes = {
  CART_INITIALIZE: 'cart-initialize',
  CART_ADD_ITEM: 'cart-add-item',
  CART_REMOVE_ITEM: 'cart-remove-item',
  CART_UPDATE_ITEM: 'cart-update-item',
  CART_ADD_OPTION: 'cart-add-option',
  CART_RESET: 'cart-reset',
  CART_CLEAR: 'cart-clear',
  CART_REVERT: 'cart-revert'
}

export default (dispatcher) => {
  return {
    /**
     * Initialize a cart, optionally providing default items and selected items.
     * @param items
     * @param selection
     */
    init(items, selection) {
      dispatcher.dispatch({
        actionType: ActionTypes.CART_INITIALIZE,
        config: {
          items: items || {},
          selection: selection || []
        }
      })
    },
    /**
     * Adds an item to the cart.
     * @param key
     * @param quantity
     * @param item
     */
    addItem(key, quantity, item) {
      dispatcher.dispatch({
        actionType: ActionTypes.CART_ADD_ITEM,
        key: key,
        quantity: quantity,
        item: item
      })
    },
    /**
     * Removes an item from the cart.
     * @param index
     */
    removeItem(index) {
      dispatcher.dispatch({
        actionType: ActionTypes.CART_REMOVE_ITEM,
        index: index
      })
    },
    /**
     * Updates the quantity of an item in the cart.
     * @param index
     * @param quantity
     */
    updateQuantity(index, quantity) {
      dispatcher.dispatch({
        actionType: ActionTypes.CART_UPDATE_ITEM,
        index: index,
        quantity: quantity
      })
    },
    /**
     * Adds a product option to a item in the cart.
     * @param key
     * @param quantity
     * @param option
     * @param item
     */
    addOption(key, quantity, option, item) {
      dispatcher.dispatch({
        actionType: ActionTypes.CART_ADD_OPTION,
        key: key,
        quantity: quantity,
        option: option,
        item: item
      })
    },
    /**
     * Clears all item from the cart. Does not create a new order ID.
     */
    clearCart() {
      dispatcher.dispatch({
        actionType: ActionTypes.CART_CLEAR
      })
    },
    /**
     * Reverts the item to a previous state. Does not create a new order ID.
     */
    revertCart() {
      dispatcher.dispatch({
        actionType: ActionTypes.CART_REVERT
      })
    },
    /**
     * Clears all item from the cart and creates a new order with a fresh order ID.
     */
    resetCart() {
      dispatcher.dispatch({
        actionType: ActionTypes.CART_RESET
      })
    }
  }
}
