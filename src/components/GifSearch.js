import React, {useState} from 'react'

function GifSearch({ query, onSearchSubmit}) {

  const [searchTerm, setSearchTerm] = useState('')

  function handleSearchUpdate(event){
    setSearchTerm(event.target.value)
  }

  function handleSearchSubmit(event){
    event.preventDefault()
    onSearchSubmit(searchTerm)
    setSearchTerm("")
  }

  return (
    <form onSubmit={handleSearchSubmit}>
      <input type="text" name="query" value={searchTerm} placeholder="Search..." onChange={handleSearchUpdate}></input>
    </form>
  )
}

export default GifSearch
