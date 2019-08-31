import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = props => {
  const { onToggleMenu } = props
  return (
    <header id="header" className="alt">
      <Link to="/" className="logo">
        <strong>Zealous Tech</strong> <span>Indy</span>
      </Link>
      <nav>
        <a
          className="menu-link"
          onClick={onToggleMenu}
          onKeyPress={onToggleMenu}
          role="button"
          tabIndex={-1}
        >
          Menu
        </a>
      </nav>
    </header>
  )
}

Header.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Header
