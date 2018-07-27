import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './TabBar.css'

const pages = [
  {
    pathname: '/',
    title: 'Add An Item',
  },
  {
    pathname: '/log',
    title: 'Log',
  },
]

const TabBar = ({ location }) => {
  const { pathname } = location
  return (
    <div styleName="tab-flex">
      {pages.map(page => (
        <div
          key={page.pathname}
          styleName={pathname === page.pathname ? 'active-tab' : 'background-tab'}
        >
          {pathname === page.pathname && (
            <span>
              {page.title}
            </span>
          )}
          {pathname !== page.pathname && (
            <Link to={page.pathname} id="link">
              {page.title}
            </Link>
          )}
        </div>
      ))}
    </div>
  )
}

TabBar.propTypes = {
  location: PropTypes.shape({}).isRequired,
}

export default TabBar
