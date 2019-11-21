    require("dotenv").config({
      path: `.env.${process.env.NODE_ENV}`
    });
    module.exports = {
      siteMetadata: {
        title: `Coffee Hub`,
        description: `The Coffeeshop for coders`,
        author: `Lucie B`
      },
      plugins: [
        `gatsby-plugin-react-helmet`,
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `images`,
            path: `${__dirname}/src/images`
          }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
          resolve: `gatsby-source-contentful`,
          options: {
            spaceId: process.env.CONTENTFUL_SPACE_ID,
            // Learn about environment variables: https://gatsby.app/env-vars
            accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
          }
        },
        {
          resolve: `gatsby-plugin-prefetch-google-fonts`,
          options: {
            fonts: [
              {
                family: `Montserrat`,
                variants: [`400`, `500`, `600`],
              },
              {
                family: `Raleway`,
                variants: [`400`, `500`]
              },
            ],
          },
        },
        {
          resolve: `gatsby-plugin-manifest`,
          options: {
            name: `gatsby-starter-default`,
            short_name: `starter`,
            start_url: `/`,
            background_color: `#663399`,
            theme_color: `#663399`,
            display: `minimal-ui`,
            icon: `src/images/icon.svg` // This path is relative to the root of the site.
          }
        }
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.app/offline
        // 'gatsby-plugin-offline',
      ]
    };

