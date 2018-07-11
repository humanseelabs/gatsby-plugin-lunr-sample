import React from 'react'
import { Link } from 'gatsby'
import Search from './Search'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: '10px 0px' }}>
        <div style={{
          display: 'flex',
          paddingTop: '0.3em',
        }}
        >
          <div style={{
            justifyContent: 'flex-start',
            width: '75%',
          }}
          >
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
                paddingRight: '0.65em',
              }}
            >
              {siteTitle}
            </Link>
            <Link
              to="/info"
              style={{
                color: 'white',
                textDecoration: 'none',
                paddingRight: '0.65em',
              }}
            >
              Kernkonzepte
            </Link>
            <Link
              to="/history"
              style={{
                color: 'white',
                textDecoration: 'none',
                paddingRight: '0.65em',
              }}
            >
              Geschichte
            </Link>
          </div>
          <div
            style={{
              justifyContent: 'flex-end',
              width: '25%',
            }}
          >
            <Search />
          </div>
        </div>
      </h1>
    </div>
  </div>
)

export default Header
