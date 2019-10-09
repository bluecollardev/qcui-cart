import classNames from 'classnames'

import React, { Component } from 'react'
import * as PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { DropTarget } from 'react-dnd'

import RowComponent from '../components/CartRow'
import ContainerComponent from '../components/CartTable'

let cartTarget = {
  drop(props, monitor, component) {
    if (monitor.didDrop()) {
      return
    }

    const item = monitor.getItem()
    component.props.onItemDropped(item.id)
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  }
}

@inject(deps => ({
  actions: deps.actions,
  cartStore: deps.cartStore
})) @observer
class Cart extends Component {
  static propTypes = {
    items: PropTypes.object,
    selection: PropTypes.array,
    onItemDropped: PropTypes.func,
    onItemAdded: PropTypes.func,
    onItemClicked: PropTypes.func,
    onItemRemoved: PropTypes.func,
    onItemQtyChanged: PropTypes.func,
    onChange: PropTypes.func,
    iterator: PropTypes.func,
    tableClassName: PropTypes.string,
    cartEmptyMessage: PropTypes.node
  }

  static defaultProps = {
    items: {},
    selection: [],
    onItemClicked: () => {},
    onItemDropped: () => {},
    onItemAdded: () => {},
    onItemRemoved: () => {},
    onItemQtyChanged: () => {},
    onChange: () => {},
    iterator: () => { return {} },
    containerComponent: ContainerComponent,
    rowComponent: RowComponent,
    tableClassName: '',
    cartEmptyMessage: (<span><b>You haven't made any selections.</b><span className=''><br/>Please add an item to continue.</span></span>)
  }

  static contextTypes = {
    cartContextManager: PropTypes.object,
    cart: PropTypes.object,
  }

  constructor(props, context) {
    super(props)

    this.refresh = this.refresh.bind(this)
    this.addItem = this.addItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.emptyCart = this.emptyCart.bind(this)
    this.clearCart = this.clearCart.bind(this)
    this.reset = this.reset.bind(this)

    this.state = {selection: []}
  }

  componentDidMount() {
    // Cart.componentDidMount
    // this.context.actions.init(this.props.items, this.context.store.getSelection())
    this.context.cartContextManager.subscribe((contextValue) => {
      console.log('update cart using context')
      console.log(contextValue)
      // this.setState({selection: this.context.cartContextManager.getCartContextValue().store.getSelection()})
    })

    // this.setState({selection: contextValue.store.getSelection()})
  }

  refresh() {
    const cartContextValue = this.context.cartContextManager.getCartContextValue()
    const store = cartContextValue.store

    this.setState({selection: store.getSelection()})
  }

  addItem(key, quantity, item) {
    const cartContextValue = this.context.cartContextManager.getCartContextValue()
    const actions = cartContextValue.actions

    actions.addItem(key, quantity, item)
  }

  removeItem(index) {
    const cartContextValue = this.context.cartContextManager.getCartContextValue()
    const actions = cartContextValue.actions

    actions.removeItem(index)
  }

  updateQuantity(index, quantity) {
    const cartContextValue = this.context.cartContextManager.getCartContextValue()
    const actions = cartContextValue.actions

    actions.updateQuantity(index, quantity)
  }

  addOption(key, quantity, item, product) {
    const cartContextValue = this.context.cartContextManager.getCartContextValue()
    const actions = cartContextValue.actions

    actions.addOption(key, quantity, item, product)
  }

  emptyCart() {
    const cartContextValue = this.context.cartContextManager.getCartContextValue()
    const actions = cartContextValue.actions

    actions.emptyCart()
  }

  clearCart() {
    const cartContextValue = this.context.cartContextManager.getCartContextValue()
    const actions = cartContextValue.actions

    actions.clearCart()
  }

  reset() {
    const cartContextValue = this.context.cartContextManager.getCartContextValue()
    const actions = cartContextValue.actions

    actions.reset()
  }

  render() {
    const { position, isOver, canDrop, connectDropTarget, useDnd } = this.props

    const Container = this.props.containerComponent

    let context = this.props.iterator()

    const { cartContextManager } = this.context
    const { contextValue } = cartContextManager.getCartContextValue()
    const { actions, store } = contextValue
    const selection = store.getSelection()

    let template = null

    if (store !== null && store.isEmpty()) {
      template = (
        <div className='dnd-target-wrapper'>
          <div
            className={'padding-top ' + classNames({ 'well-is-over': isOver })}
            style={{ marginBottom: '.5em' }}
            bssize='large'>
            <p style={{
              textAlign: 'center',
              maxWidth: 'auto'
            }}>{this.props.cartEmptyMessage}</p>
          </div>
        </div>
      )
    } else {
      template = (
        <div className='dnd-target-wrapper'>
          <Container
            tableClassName={this.props.tableClassName}
            columns={this.props.columns}
            selection={selection}
            rowComponent={this.props.rowComponent}
            removeItem={this.removeItem}
            setItemQty={this.updateQuantity}
            context={context}
          />
        </div>
      )
    }

    return (typeof connectDropTarget === 'function') ? connectDropTarget(template) : template
  }
}

// TODO: This requires a DndProvider component... need to document that
const DndCart = DropTarget('sprite', cartTarget, collect)(Cart)

export default Cart
export { Cart, DndCart }
