import React from 'react'
import "./search.scss"

function Search() {
  return (
    <div className="search">
      <form>
        <input type="text" placeholder="Search..."/>
        <button type="submit" className="btn">Search</button>
      </form>
    </div>
  )
}

export default Search
