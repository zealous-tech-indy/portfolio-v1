import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import logo from '../assets/images/zealous-logo.png'
import fuzzyBear from '../assets/images/fuzzy_bear2.jpg'
import {
  henok,
  iesha,
  jordan,
  jon,
  manasa,
  mason,
} from '../assets/images/avatars/index'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Zealous Tech"
          meta={[
            {
              name: 'description',
              content:
                'A place to learn more about Zealous Tech and get in contact.',
            },
            {
              name: 'keywords',
              content:
                'zealous, tech, indy, small business, freelance, software',
            },
          ]}
        />

        <Banner />

        <div id="main">
          <h2 style={{ padding: '1em 0 0 3.5em' }}>Meet the Team</h2>
          <div className="box alt">
            <div className="grid-wrapper">
              <div className="col-4">
                <span className="image fit">
                  <div className="avatar-wrapper">
                    <img
                      className="avatar"
                      src={henok}
                      style={{ borderColor: '#6fc3df' }}
                      alt="Henok"
                    />
                    <h3 className="avatar-name">Henok Alem</h3>
                    <h5 className="dev-title">DEVELOPER</h5>
                    <ul className="icons">
                      <li>
                        <a
                          href="https://www.linkedin.com/in/henokalem/"
                          className="icon alt fa-linkedin"
                        >
                          <span className="label">LinkedIn</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/henokalem"
                          className="icon alt fa-github"
                        >
                          <span className="label">GitHub</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <div className="avatar-wrapper">
                    <img
                      className="avatar"
                      src={iesha}
                      style={{ borderColor: '#8d82c4' }}
                      alt="Iesha"
                    />
                    <h3 className="avatar-name">Iesha Duff</h3>
                    <h5 className="dev-title" style={{ color: '#8d82c4' }}>
                      DEVELOPER
                    </h5>
                    <ul className="icons">
                      <li>
                        <a
                          href="https://www.linkedin.com/in/ieshaduff/"
                          className="icon alt fa-linkedin"
                        >
                          <span className="label">LinkedIn</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/imusgrove"
                          className="icon alt fa-github"
                        >
                          <span className="label">GitHub</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <div className="avatar-wrapper">
                    <img
                      className="avatar"
                      src={jordan}
                      style={{ borderColor: '#ec8d81' }}
                      alt="Jordan"
                    />
                    <h3 className="avatar-name">Jordan Mannfeld</h3>
                    <h5 className="dev-title" style={{ color: '#ec8d81' }}>
                      DEVELOPER
                    </h5>
                    <ul className="icons">
                      <li>
                        <a
                          href="https://www.linkedin.com/in/jordan-mannfeld-61b26495/"
                          className="icon alt fa-linkedin"
                        >
                          <span className="label">LinkedIn</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/jmannfeld"
                          className="icon alt fa-github"
                        >
                          <span className="label">GitHub</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <div className="avatar-wrapper">
                    <img
                      className="avatar"
                      src={jon}
                      style={{ borderColor: '#e7b788' }}
                      alt="Jon"
                    />
                    <h3 className="avatar-name">Jon Jeffries</h3>
                    <h5 className="dev-title" style={{ color: '#e7b788' }}>
                      DEVELOPER
                    </h5>
                    <ul className="icons">
                      <li>
                        <a
                          href="https://www.linkedin.com/in/jon-jeffries-6509702a/"
                          className="icon alt fa-linkedin"
                        >
                          <span className="label">LinkedIn</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/jfjeffries"
                          className="icon alt fa-github"
                        >
                          <span className="label">GitHub</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <div className="avatar-wrapper">
                    <img
                      className="avatar"
                      src={manasa}
                      style={{ borderColor: '#8ea9e8' }}
                      alt="Manasa"
                    />
                    <h3 className="avatar-name">Manasa Patibandla</h3>
                    <h5 className="dev-title" style={{ color: '#8ea9e8' }}>
                      DEVELOPER
                    </h5>
                    <ul className="icons">
                      <li>
                        <a
                          href="https://www.linkedin.com/in/manasapatibandla/"
                          className="icon alt fa-linkedin"
                        >
                          <span className="label">LinkedIn</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/mpatibandla"
                          className="icon alt fa-github"
                        >
                          <span className="label">GitHub</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <div className="avatar-wrapper">
                    <img
                      className="avatar"
                      src={mason}
                      style={{ borderColor: '#87c5a4' }}
                      alt="Mason"
                    />
                    <h3 className="avatar-name">Mason Seiler</h3>
                    <h5 className="dev-title" style={{ color: '#87c5a4' }}>
                      DEVELOPER
                    </h5>
                    <ul className="icons">
                      <li>
                        <a
                          href="https://www.linkedin.com/in/mason-seiler-50a641a8/"
                          className="icon alt fa-linkedin"
                        >
                          <span className="label">LinkedIn</span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/mrseiler"
                          className="icon alt fa-github"
                        >
                          <span className="label">GitHub</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <section id="one" className="tiles">
            <article
              style={{
                backgroundImage: `url(${fuzzyBear})`,
                backgroundPosition: 'center 70%',
              }}
            >
              <header className="major">
                <h3>Fuzzy Bear Ministry</h3>
                <p>Custom Daycare Website</p>
              </header>
              <Link to="/fuzzy-bear-daycare" className="link primary" />
            </article>
            {/* <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Tempus</h3>
                <p>feugiat amet tempus</p>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>Magna</h3>
                <p>Lorem etiam nullam</p>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>Ipsum</h3>
                <p>Nisl sed aliquam</p>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className="major">
                <h3>Consequat</h3>
                <p>Ipsum dolor sit amet</p>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <header className="major">
                <h3>Etiam</h3>
                <p>Feugiat amet tempus</p>
              </header>
              <Link to="/landing" className="link primary" />
            </article> */}
          </section>
          <section id="two">
            <div className="inner" style={{ display: 'flex' }}>
              <div>
                <img
                  src={logo}
                  alt="Zealous Logo"
                  style={{ height: '7em', marginRight: '2em' }}
                />
              </div>
              <div>
                <header className="major">
                  <h2 className="italics">Have a project in mind?</h2>
                </header>
                <p>Let's chat! We want to bring your ideas to life.</p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
