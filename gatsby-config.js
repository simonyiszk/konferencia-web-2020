module.exports = {
  siteMetadata: {
    title: 'Simonyi Konferencia 2020',
    description: 'XVII. Simonyi Konferencia',
    languageCode: 'hu',
    countryCode: 'HU',
  },
  plugins: [
    'gatsby-plugin-chakra-ui',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Simonyi Konferencia 2020',
        short_name: 'simonyikonf',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/favicon.png',
      },
    },
    /*
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: {
          family: `Barlow`,
          subsets: [`latin`],
          variants: [`200`, `400`, `700`],
        },
      },
    },
    */
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-typescript',
  ],
};
