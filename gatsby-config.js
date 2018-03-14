module.exports = {
  siteMetadata: {
    title: 'Patch Software',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['Slabo+27px', 'Open+Sans']
      }
    }
  ],
};
