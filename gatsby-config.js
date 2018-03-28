module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`
  },
  plugins: [
    `gatsby-plugin-react-helmet`, 
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-116573741-1",
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    }
  ]
  //pathPrefix: `/public`
};
