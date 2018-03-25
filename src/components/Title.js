import React from 'react'
import style from '../assets/style.css'

export default ({ scrolled }) => {
  const visibility = scrolled > 7 ? 'visible' : 'hidden'
  const position = scrolled > 15 ? 'fixed' : 'absolute'

  return(
    <h1 id="title" style={{ visibility, position }}>
      HAMISH GILKISON
    </h1>
  )
}
