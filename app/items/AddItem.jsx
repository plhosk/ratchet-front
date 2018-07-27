import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './formElements.css'

class AddItem extends React.Component {
  state = {
    title: '',
    column: '0',
    validationMessage: '',
  }

  onTitleChange = (e) => {
    this.setState({
      title: e.target.value,
      validationMessage: '',
    })
  }

  onColumnChange = (e) => {
    this.setState({
      column: e.target.value,
      validationMessage: '',
    })
  }

  addItemClick = () => {
    const { dispatch } = this.props
    const { title, column } = this.state
    if (!title) {
      return this.setState({
        validationMessage: 'Please enter an item description above',
      })
    }
    const columnNumber = parseInt(column, 10)
    if (!columnNumber || columnNumber < 1 || columnNumber > 2) {
      return this.setState({
        validationMessage: 'Please select a column above',
      })
    }
    return dispatch({
      type: 'ITEMS_ADD',
      payload: { title, column: columnNumber },
    })
  }

  render() {
    const { title, column, validationMessage } = this.state
    return (
      <div styleName="container">

        <div>
          <input
            styleName="custom-input"
            placeholder="Enter Item"
            value={title}
            onChange={this.onTitleChange}
          />
        </div>

        <div styleName="column-selector">
          <select
            styleName="custom-input"
            value={column}
            onChange={this.onColumnChange}
          >
            <option value="0">
              Choose Column
            </option>
            <option value="1">
              Column 1
            </option>
            <option value="2">
              Column 2
            </option>
          </select>
        </div>

        <div styleName="validation-message">
          <div>
            {validationMessage && <i className="fas fa-exclamation-triangle" />}
          </div>
          <div>
            {validationMessage}
          </div>
        </div>

        <div>
          <button
            type="button"
            styleName="custom-button"
            onClick={this.addItemClick}
          >
            Add Item
          </button>
        </div>

      </div>
    )
  }
}

AddItem.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(AddItem)
