require("dotenv").config({
  path: `.env`,
});

// require .env.development or .env.production
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: process.env.SITE_NAME,
    description: process.env.SITE_DESCRIPTION,
    author: `@volodymyrdavydiuk`,
    siteUrl: process.env.SITE_URL,
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "WP",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "wp",
        // Url to query from
        url: process.env.WPGRAPHQL_URL,

        // refetch interval in seconds
        refetchInterval: 60,
      },
    },

    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#0A0E0E`,
        theme_color: `#FFE600`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
