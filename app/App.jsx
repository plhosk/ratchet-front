import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Items from './items/Items'

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="Cust-div">
          <Route path="/" exact component={Items} />
        </div>
      </Router>
    )
  }
}

export default App
