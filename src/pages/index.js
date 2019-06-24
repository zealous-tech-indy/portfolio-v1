import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import placeholder from '../assets/images/placeholder.png'
import fuzzyBear from '../assets/images/fuzzy_bear.jpg'
import fuzzyBear2 from '../assets/images/fuzzy_bear2.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Gatsby Starter - Forty"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />

        <Banner />

        <div id="main">
          <h2>Meet the Team</h2>
          <span className="image fit">
            <img src={pic03} alt="" />
          </span>
          <div className="box alt">
            {/* <div className="grid-wrapper"> */}
            <section id="one" className="tiles">
              <article style={{ backgroundImage: `url(${placeholder})` }}>
                <header className="major">
                  <h3>Henok Alem</h3>
                  <p>Developer</p>
                </header>
              </article>
              <article style={{ backgroundImage: `url(${placeholder})` }}>
                <header className="major">
                  <h3>Iesha Duff</h3>
                  <p>Developer</p>
                </header>
              </article>
              <article style={{ backgroundImage: `url(${placeholder})` }}>
                <header className="major">
                  <h3>Jordan Mannfeld</h3>
                  <p>Developer</p>
                </header>
              </article>
              <article style={{ backgroundImage: `url(${placeholder})` }}>
                <header className="major">
                  <h3>Mason Seiler</h3>
                  <p>Developer</p>
                </header>
              </article>
              <article style={{ backgroundImage: `url(${placeholder})` }}>
                <header className="major">
                  <h3>Jon Jeffries</h3>
                  <p>Developer</p>
                </header>
              </article>
              <article style={{ backgroundImage: `url(${placeholder})` }}>
                <header className="major">
                  <h3>Manasa Patibandla</h3>
                  <p>Developer</p>
                </header>
              </article>
            </section>
          </div>
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${fuzzyBear2})` }}>
              <header className="major">
                <h3>Fuzzy Bear Ministry</h3>
                <p>Custom Website</p>
              </header>
              <Link to="/landing" className="link primary" />
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
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
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Massa libero</h2>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
                Pellentesque condimentum sem. In efficitur ligula tate urna.
                Maecenas laoreet massa vel lacinia pellentesque lorem ipsum
                dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et
                sagittis libero. Mauris aliquet magna magna sed nunc rhoncus
                amet pharetra et feugiat tempus.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/landing" className="button next">
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
