/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `TruPaid`,
    description: `bill split platform`,
    author: `Kyle Kumar`,
    keywords: `Software company, Full stack developer, Website, Mobile`,
    siteUrl: `https://www.trupaid.com`,
    image: `/logo.png`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
};
