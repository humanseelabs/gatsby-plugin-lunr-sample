import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Header from './Header'
import './index.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className='layout-header-children-divider'>
          {children}
        </div>
      </div>
    )}
  />
)

export default Layout
