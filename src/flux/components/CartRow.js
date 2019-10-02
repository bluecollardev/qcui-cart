import React, { Component } from 'react'
import * as PropTypes from 'prop-types'

class CartRow extends Component {
  static propTypes = {
    columns: PropTypes.arrayOf(PropTypes.string),
    item: PropTypes.shape({
      data: PropTypes.array,
      quantity: PropTypes.number
    }),
    setItemQty: PropTypes.func,
    removeItem: PropTypes.func
  }

  static defaultProps = {
    columns: [],
    item: {
      data: [],
      quantity: null
    },
    setItemQty: (value) => { console.log(`quantity updated: ${value}`) },
    removeItem: () => { console.log(`remove item clicked`) }
  }

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const value = event.target.value
    if (!isNaN(value) && value > 0) {
      this.props.setItemQty(value)
    }
  }

  render() {
    return (
      <tr>
        {this.props.columns.map(column => {
          return (
            <td key={column}>
              {this.props.item.data[column]}
            </td>
          )
        })}
        <td>
          <input
            style={{
              textAlign: 'right',
              width: '100px'
            }}
            type='number'
            value={this.props.item.quantity}
            onChange={this.handleChange}
          />
        </td>
        <td>
          <button
            onClick={this.props.removeItem}>
            Remove
          </button>
        </td>
      </tr>
    )
  }
}

export default CartRow
