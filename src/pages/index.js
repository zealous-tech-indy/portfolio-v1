import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

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

        <div id="main" />
      </Layout>
    )
  }
}

export default HomeIndex
