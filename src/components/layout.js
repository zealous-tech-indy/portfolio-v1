import React from 'react'
import PropTypes from 'prop-types'

import '../assets/scss/main.scss'
import Header from './Header'
import Menu from './Menu'
import Contact from './Contact'
import Footer from './Footer'

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]')
}

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMenuVisible: false,
      loading: 'is-loading',
    }
    this.handleToggleMenu = this.handleToggleMenu.bind(this)
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ loading: '' })
    }, 100)
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
  }

  handleToggleMenu() {
    this.setState(prevState => ({
      ...prevState,
      isMenuVisible: !prevState.isMenuVisible,
    }))
  }

  render() {
    const { children } = this.props
    const { loading, isMenuVisible } = this.state

    return (
      <div
        className={`body ${loading} ${isMenuVisible ? 'is-menu-visible' : ''}`}
      >
        <div id="wrapper">
          <Header onToggleMenu={this.handleToggleMenu} />
          {children}
          <Contact />
          <Footer />
        </div>
        <Menu onToggleMenu={this.handleToggleMenu} />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout
