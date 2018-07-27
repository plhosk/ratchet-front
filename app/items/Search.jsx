import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './formElements.css'

class Search extends React.Component {
  onSearchChange = (e) => {
    const { dispatch } = this.props
    dispatch({
      type: 'ITEMS_SEARCH',
      payload: e.target.value,
    })
  }

  render() {
    const { search } = this.props
    return (
      <div styleName="search-container">
        <div styleName="label-small">
          Search An Item
        </div>
        <div styleName="search-button">
          <input
            styleName="search-input"
            placeholder="Search"
            value={search}
            onChange={this.onSearchChange}
          />
          <div styleName="search-icon">
            <i className="fas fa-search" />
          </div>
        </div>
      </div>
    )
  }
}

Search.propTypes = {
  search: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
}

Search.defaultProps = {
  search: '',
}

const mapStateToProps = state => ({
  search: state.items.search,
})

export default connect(mapStateToProps)(Search)
