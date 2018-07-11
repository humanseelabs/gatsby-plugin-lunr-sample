import React, { Component } from 'react'
import { Link } from 'gatsby'
 
class Search extends Component {
  state = {
    query: '',
    results: [],
  }

  render() {
    return (
      <div>
        <input 
          type="text" 
          value={this.state.query} 
          onChange={this.search} 
          placeholder={'Search'}
          style={{ 
            'borderRadius': '4px',
            width: '100%',
            paddingLeft: '10px',
            outline: 'none'
          }}
        />
        <ul style={{ 
          fontSize: '16px',
          marginTop: '10px',
        }}>
          {this.state.results.map((page) => (
          <li key={page.url}>
            <Link 
              style={{
                color: 'white',
                textDecoration: 'none'
              }} 
              to={page.url}>
              {page.title}
            </Link>
          </li>
          ))}
        </ul>
      </div>
    )
  }

  getSearchResults(query) {
    if (!query || !window.__LUNR__) return []
    const results = window.__LUNR__.index.search(query)
    return results.map(({ ref }) => window.__LUNR__.store[ref])
  }

  search = event => {
    const query = event.target.value
    const results = this.getSearchResults(query)
    this.setState({ results, query })
  }
}

export default Search