const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode})
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`{
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            templateKey
          }
        }
      }
    }
  }`).then((result) => {
    result.data.allMarkdownRemark.edges.forEach((
      { node: { fields: { slug } } }) => {
      createPage({
        path: slug,
        component: path.resolve(`src/templates/Page.js`),
        context: {
          slug,
        },
      })
    })
  })
}