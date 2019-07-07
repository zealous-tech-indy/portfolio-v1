import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import placeholder from '../assets/images/placeholder.png'
import fuzzyBear from '../assets/images/fuzzy_bear2.jpg'

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
                  <img src={placeholder} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={placeholder} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={placeholder} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={placeholder} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={placeholder} alt="" />
                </span>
              </div>
              <div className="col-4">
                <span className="image fit">
                  <img src={placeholder} alt="" />
                </span>
              </div>
            </div>
          </div>
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${fuzzyBear})` }}>
              <header className="major">
                <h3>Fuzzy Bear Ministry</h3>
                <p>Custom Website</p>
              </header>
              <Link to="/fuzzy-bear-daycare" className="link primary" />
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
