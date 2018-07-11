import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const Common =  ({ data: { page } }) => {   
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: page.html }} />
    </Layout>
  )
}

export default Common

export const query = graphql`
  query Common($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        templateKey
        path
        date
        description
      }
      fields {
        slug
      }
      html
    }
  }
`