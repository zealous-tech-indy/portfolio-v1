import React from 'react'
import logo from '../assets/images/zealous-logo.png'

const scrollToContact = () => {
  window.scrollTo({
    bottom: 0,
    behavior: 'smooth',
  })
}

const Banner = () => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
        <img src={logo} alt="Zealous Logo" style={{ height: '5em' }} />
        <h1>We are Zealous Tech</h1>
      </header>
      <div className="content">
        <p>
          Indy based Dev Shop specializing in custom solutions for our clients.
          <br />
          Founded, owned, and operated by a team of local developers.
        </p>
        <ul className="actions">
          <li>
            <a
              href="#contact"
              onClick={scrollToContact}
              className="button next scrolly"
            >
              Get in Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Banner
