if(process.env.NODE_ENV !== "development") {
  require('dotenv').config({path: `.env.production`,});
} else {
  require('dotenv').config({path: `.env`,});
}

module.exports = {
  siteMetadata: {
    siteUrl: "http://localhost:8000",
    title: "TruPaid",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
  ],
};
