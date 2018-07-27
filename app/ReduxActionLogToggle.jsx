import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './App.css'

class ReduxActionLogToggle extends React.Component {
  toggleReduxActionLog = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'REDUX_ACTION_LOG_TOGGLE',
    })
  }

  render() {
    const { show } = this.props
    return (
      <div styleName="checkbox-div">
        <label htmlFor="redux-action-log-toggle">
          <input
            styleName="checkbox"
            type="checkbox"
            id="redux-action-log-toggle"
            checked={show}
            onChange={this.toggleReduxActionLog}
          />
          Show redux actions in console
        </label>
      </div>
    )
  }
}

ReduxActionLogToggle.propTypes = {
  show: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  show: state.reduxActionLog.show,
})

export default connect(mapStateToProps)(ReduxActionLogToggle)
