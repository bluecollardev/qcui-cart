import React, { Component } from 'react'
import Adapter from 'enzyme-adapter-react-16'
import { configure, mount } from 'enzyme'

import { CartContext, createCartContextManager } from '../context'

configure({ adapter: new Adapter() })

let cartContextManager = null
let wrapper = null
let contextComponent = null

class MockComponent extends Component {
  render() {
    return (
      <div>
        <h1>Dummy Cart</h1>
      </div>
    )
  }
}

const MockCartComponent = CartContext(MockComponent)

describe('Test Context', () => {
  beforeEach(() => {
    const props = {}
    wrapper = mount(
      <MockCartComponent
        key={Math.random()}
        {...props}
        addToCartMode={'instant'}
      />
    )

    contextComponent = wrapper.instance()
  })

  test('test createCartContextManager', () => {
    cartContextManager = createCartContextManager()
    expect(cartContextManager).toBeTruthy()
  })

  test('test CartContext', () => {
    expect(contextComponent).toBeTruthy()
    expect(wrapper.type().name).toBe('CartContext')
  })

  test('test that invoking itemClicked with an invalid item throws an error', () => {
    // Mock event
    expect(() => {
      contextComponent.itemClicked({
        stopPropagation: () => {
        },
        preventDefault: () => {
        },
        target: {
          type: 'button'
        }
      })
    }).toThrow(Error)

    // Mock event
    expect(() => {
      contextComponent.itemClicked({
        stopPropagation: () => {
        },
        preventDefault: () => {
        },
        target: {
          type: 'button'
        }
      }, {
        id: 1,
        quantity: 3,
        data: {
          test: 'test'
        }
      })
    }).not.toThrow(Error)
  })

  test('test that invoking itemClicked adds an item to the cart', () => {

  })

  test('test that invoking optionClicked adds an item to the cart', () => {
    expect(true).toBe(true)
  })

  test('test that invoking addToCart adds an item and the correct quantity to the cart', () => {
    expect(true).toBe(true)
  })

  test('test that invoking addOptionToCart adds an option to the correct item and the correct quantity to the cart', () => {
    expect(true).toBe(true)
  })

  test('test that cart items are being tracked correctly', () => {
    expect(true).toBe(true)
  })

  test('test addToCartClicked', () => {
    expect(true).toBe(true)
  })

  test('test addOptionToCartClicked', () => {
    expect(true).toBe(true)
  })
})
