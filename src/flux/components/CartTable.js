import React, { Component } from 'react'
import * as PropTypes from 'prop-types'

class CartTable extends Component {
  static propTypes = {
    tableClassName: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.string),
    body: PropTypes.any // TODO: Enforce this a little more...
  }

  static defaultProps = {
    tableClassName: '',
    columns: [],
    body: null
  }

  render() {
    return (
      <table className={this.props.tableClassName}>
        <thead>
          <tr>
            {this.props.columns.map(column => {
              return (
                <th key={column}>
                  {column}
                </th>
              )
            })}
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.body}
        </tbody>
      </table>
    )
  }
}

export default CartTable
