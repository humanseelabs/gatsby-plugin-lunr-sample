const { isNil } = require('lodash')

const mapPagesUrls = {
  index: '/',
  history: '/history',
  info: '/info',
}

module.exports = {
  siteMetadata: {
    title: 'Demo',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
  	{
      resolve: 'gatsby-plugin-lunr',
      options: {
        // ISO 639-1 language codes. See https://lunrjs.com/guides/language_support.html for details
        languages: ['de'],   
        // Fields to index. If store === true value will be stored in index file. 
        // Attributes for custom indexing logic. See https://lunrjs.com/docs/lunr.Builder.html for details
        fields: [
          { name: 'title', store: true, attributes: { boost: 20 } },
          { name: 'description', store: true },
          { name: 'content', store: true },
          { name: 'url', store: true },
        ],
        // A function for filtering nodes. () => true by default
        filterNodes: (node) => !isNil(node.frontmatter),
        // How to resolve each field's value for a supported node type 
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields' values
          MarkdownRemark: {
            title: (node) => node.frontmatter.title,
            description: (node) => node.frontmatter.description,
            content: (node) => node.rawMarkdownBody,
            url: (node) => mapPagesUrls[node.frontmatter.templateKey],
          },
        },
      },
    },
    {  
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/data/`,
      },
    },
   ],
}
