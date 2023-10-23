require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Sami's Site`,
    description: `ITDEV-164 Gatsby Blog.`,
    author: `Samantha Sutter`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    contact: {
      name: `Samantha Sutter`,
      company: `English Breakfast Awake Tea`,
      address: `Milk and Honey ave`
    }
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentful`, // Corrected plugin name
      options: {
        spaceId: `s83e9tgj213b`,
        accessToken: `oNah8xqLkv38MTcWdpGyDHE9EjgJren9utNq12-Vwag`,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
