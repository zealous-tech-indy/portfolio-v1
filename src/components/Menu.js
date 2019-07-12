import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = ({ onToggleMenu }) => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={onToggleMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={onToggleMenu} to="/fuzzy-bear-daycare">
            Fuzzy Bear Daycare
          </Link>
        </li>
      </ul>
      <ul className="actions vertical">
        <li>
          <a
            href="#contact"
            className="button special fit"
            onClick={onToggleMenu}
          >
            Get in Contact
          </a>
        </li>
      </ul>
    </div>
    <a className="close" onClick={onToggleMenu} href="javascript:;">
      Close
    </a>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
