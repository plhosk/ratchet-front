import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TimeAgo from 'react-timeago'

import './Log.css'

class Log extends React.Component {
  componentDidMount() {
    this.refreshLog()
    this.interval = setInterval(this.refreshLog, 30 * 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  refreshLog = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'LOG_FETCH',
    })
  }

  render() {
    const { log } = this.props
    return (
      <div styleName="container">
        {log && log.map((line, index) => (
          <div key={line._id} styleName={index % 2 === 0 ? 'line-even' : 'line-odd'}>
            <div styleName="log-action">
              {line.action === 'add' && (
                <span>
                  <i className="fas fa-check" />
                </span>
              )}
              {line.action === 'delete' && (
                <span>
                  <i className="far fa-trash-alt" />
                </span>
              )}
            </div>
            <div styleName="log-description">
              {line.action === 'add' && (
                <span>
                  {`"${line.itemSnapshot.title}" added to Column ${line.itemSnapshot.column}`}
                </span>
              )}
              {line.action === 'delete' && (
                <span>
                  {`"${line.itemSnapshot.title}" deleted from Column ${line.itemSnapshot.column}`}
                </span>
              )}
            </div>
            <div styleName="log-date">
              <TimeAgo date={line.createdAt} />
              &nbsp;&nbsp;
              <i className="far fa-clock" />
            </div>
          </div>
        ))}
      </div>
    )
  }
}

Log.propTypes = {
  log: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  log: state.log.log,
})

export default connect(mapStateToProps)(Log)
