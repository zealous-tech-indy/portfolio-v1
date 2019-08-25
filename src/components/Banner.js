import React from 'react'
import { Link } from 'gatsby'

const Banner = () => (
  <section id="banner" className="major">
    <div className="inner">
      <header className="major">
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
            <Link to="/#contact" className="button next">
              Get in Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
    <div className="team-arrow">
      <Link to="/#main" className="button small icon fa-angle-double-down">
        Team
      </Link>
    </div>
  </section>
)

export default Banner
