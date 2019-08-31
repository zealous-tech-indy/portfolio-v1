import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import bus from '../assets/images/bus2.jpg'
import daycare from '../assets/images/daycare.jpg'
import daycare2 from '../assets/images/daycare2.jpg'

const FuzzyBearPage = () => (
  <Layout>
    <Helmet>
      <title>Fuzzy Bear Daycare</title>
      <meta name="description" content="Landing Page" />
    </Helmet>

    <BannerLanding
      title="Fuzzy Bear Ministry"
      desc1="Custom Built Daycare Website&nbsp;"
      desc2="& Employee Management Tool"
      page="fuzzy-bear-page"
    />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Expanding a Nonprofit's Reach</h2>
          </header>
          <p>
            Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
            magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
            urna. Maecenas massa vel lacinia pellentesque lorem ipsum dolor.
            Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis
            libero. Nullam et orci eu lorem consequat tincidunt vivamus et
            sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula
            tate urna.
          </p>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <img src={daycare} alt="" className="image" />
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Streamlining applicant intake</h3>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
                urna. Maecenas massa sed magna lacinia magna pellentesque lorem
                ipsum dolor. Nullam et orci eu lorem consequat tincidunt.
                Vivamus et sagittis tempus.
              </p>
            </div>
          </div>
        </section>
        <section>
          <img src={bus} alt="" className="image" />
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Rebranding</h3>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
                urna. Maecenas massa sed magna lacinia magna pellentesque lorem
                ipsum dolor. Nullam et orci eu lorem consequat tincidunt.
                Vivamus et sagittis tempus.
              </p>
            </div>
          </div>
        </section>
        <section>
          <img src={daycare2} alt="" className="image" />
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Promoting a quality curriculum</h3>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                magna sed nunc rhoncus condimentum sem. In efficitur ligula tate
                urna. Maecenas massa sed magna lacinia magna pellentesque lorem
                ipsum dolor. Nullam et orci eu lorem consequat tincidunt.
                Vivamus et sagittis tempus.
              </p>
              <ul className="actions">
                <li>
                  <a
                    href="https://fuzzybearministry.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                  >
                    View website
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default FuzzyBearPage
