/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Daniel Thurau's Personal Website",
    description: 'The personal website of the software engineer Daniel Thurau.',
    author: 'Daniel Thurau',
    url: 'https://thurau.io',
    image: '/images/icon.png',
    twitterUsername: '@DanielNThurau',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-gatsby-cloud',
      options: {
        allPageHeaders: [
          'Strict-Transport-Security: max-age=31536000; includeSubDomains; preload',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'thurau.io',
        short_name: 'thurau.io',
        start_url: '/',
        background_color: '#e9eaeb',
        theme_color: '#e9eaeb',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
        icon_options: {
          // For all the options available,
          // please see the section "Additional Resources" below.
          purpose: 'any maskable',
        },
        crossOrigin: 'use-credentials',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ['G-8Y5H1N5QF7'],
      },
    },
  ],
};
