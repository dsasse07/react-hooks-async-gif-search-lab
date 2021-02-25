import React from 'react'

function GifList({ gifData }) {

  const gifImages = gifData.map( gif => {
    return (
      <li key={gif.id}>
        <img 
          src={gif.images.original.url}
          alt={gif.title}
        />
      </li>
    )
  })

  return (
    <ul>
      {gifImages}
    </ul>
  )
}

export default GifList
