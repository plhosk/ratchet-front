import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './Column.css'

export class Column extends React.Component { // eslint-disable-line
  deleteItem = (id) => {
    const { dispatch } = this.props
    if (!id) return
    dispatch({
      type: 'ITEMS_DELETE',
      payload: id,
    })
  }

  render() {
    const { columnNumber, itemList, search } = this.props
    return (
      <div styleName="container">
        <div styleName="header" id="header">
          Column&nbsp;
          {columnNumber}
        </div>
        <div>
          {itemList
            .filter((item) => {
              if (item.column === columnNumber) {
                if (search && !item.title.toLowerCase().startsWith(search.toLowerCase())) {
                  return false
                }
                return true
              }
              return false
            })
            .map((item, index) => (
              <div key={item._id} styleName={index % 2 === 0 ? 'item-even' : 'item-odd'}>
                <div id="item-title">
                  {item.title}
                </div>
                <div>
                  <button
                    type="button"
                    styleName="delete-button"
                    onClick={() => this.deleteItem(item._id)}
                  >
                    <i className="far fa-window-close" />
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    )
  }
}

Column.propTypes = {
  columnNumber: PropTypes.number.isRequired,
  itemList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  search: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  itemList: state.items.itemList,
  search: state.items.search,
})

export default connect(mapStateToProps)(Column)
