module.exports = {
  siteMetadata: {
    title: 'Zealous Tech Indy',
    author: 'Zealous Tech',
    description: 'A place to learn more about Zealous Tech and get in contact.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#6fc3df',
        theme_color: '#6fc3df',
        display: 'minimal-ui',
        icon: 'src/assets/images/zealous-logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
