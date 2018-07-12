import React from 'react'
import { Link } from 'gatsby'
import Search from './Search'
import './index.css'

const Header = ({ siteTitle }) => (
  <div className='header'>
    <div className='header-wrapper'>
      <div className='header-position-left'>
        <div className='link-wrapper'>
          <Link to='/' className='link link_bold'>
            {siteTitle}
          </Link>
          <Link to='/info' className='link link_bold'>
            Kernkonzepte
          </Link>
          <Link to='/history' className='link link_bold'>
            Geschichte
          </Link>
        </div>
        <div className='header-position-right'>
          <Search classNames={'link_bold'}/>
        </div>
      </div>
    </div>
  </div>
)

export default Header
