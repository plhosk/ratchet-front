import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'

import TabBar from './TabBar'
import ReduxActionLogToggle from './ReduxActionLogToggle'
import Items from './items/Items'
import Log from './log/Log'

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <Router>
        <div styleName="container">
          <div styleName="intro-container">

            <div>
              <div styleName="title">
                Marvelous!
              </div>
              <div styleName="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry&apos;s standard dummy text ever since.
              </div>
            </div>

            <div>
              <ReduxActionLogToggle />
            </div>
          </div>

          <Route component={TabBar} />
          <Route path="/" exact component={Items} />
          <Route path="/log" component={Log} />

        </div>
      </Router>
    )
  }
}

export default App
