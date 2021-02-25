import React, { useState, useEffect } from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'

function GifListContainer() {
  const [query, setQuery] = useState("dolphin")
  const [gifData, setGifData] = useState([])

  useEffect ( () => {
    fetchGifs()
  }, [query])

  function fetchGifs(){
    const baseUrl = "https://api.giphy.com/v1/gifs/search?q="
    const apiKey = "&api_key=FJYjaypewP5ADKp2I3rQDGkL3OBGDrsV&rating=g&limit=3"
    fetch(`${baseUrl}${query}${apiKey}`)
      .then( response => response.json() )
      .then( ({data}) => setGifData(data))
      console.log('fetched')
  }

  function handleSearchSubmit(searchTerm) {
    setQuery(searchTerm)
  }

  return (
    <div>
      <GifSearch query={query} onSearchSubmit={handleSearchSubmit} />
      <GifList gifData={gifData} />
    </div>
  )
}

export default GifListContainer
