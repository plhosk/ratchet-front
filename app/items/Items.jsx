import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './Items.css'

import AddItem from './AddItem'
import Search from './Search'
import ColumnComponent from './Column'

class Items extends React.Component {
  componentDidMount() {
    this.refreshItemsList()
    this.interval = setInterval(this.refreshItemsList, 30 * 1000) // fetch list every 30 seconds
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  refreshItemsList = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'ITEMS_LIST',
    })
  }

  render() {
    return (
      <div>
        <div styleName="flex-div">
          <div styleName="controls-column">
            <AddItem />
            <Search />
          </div>
          <div styleName="item-column-container">
            <ColumnComponent columnNumber={1} />
            <ColumnComponent columnNumber={2} />
          </div>
        </div>
      </div>
    )
  }
}

Items.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(Items)
