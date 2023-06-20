import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({handleSearch}) => {
  return (
    <div className='search' >
        <MdSearch className='search-icons' size='1.3em' ></MdSearch>
        <input onChange={(event) => handleSearch(event.target.value)} type="text" name="" id="" placeholder='type something to search ...........' />

    </div>
  )
}

export default Search