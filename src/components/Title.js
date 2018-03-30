import React from 'react'
import style from '../assets/HeaderScreen.css'

export default ({ screenHeight, isPortrait }) => {
  const visibleAt = screenHeight * 0.45
  const visibility = window.scrollY > visibleAt ? 'visible' : 'hidden'
  const top = isPortrait ? screenHeight + 30 : screenHeight * 1.15

  return(
    <h1 id="title" style={{ visibility, top }}>
      HAMISH GILKISON
    </h1>
  )
}
