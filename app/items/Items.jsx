import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Items extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch({
      type: 'ITEMS_LIST',
    })
  }

  render() {
    const { itemList } = this.props
    return (
      <div>
        <h3>
          Items
        </h3>
        <ul>
          {itemList && itemList.map(item => (
            <li>
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

Items.propTypes = {
  dispatch: PropTypes.func.isRequired,
  itemList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

const mapStateToProps = state => ({
  itemList: state.items.itemList,
})

export default connect(mapStateToProps)(Items)
