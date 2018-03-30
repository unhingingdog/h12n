import React from 'react'
import style from '../assets/style.css'

export default ({ screenHeight, isPortrait }) => {
  const visibleAt = screenHeight * 0.45
  //const top = isPortrait ? screenHeight + 30 : screenHeight * 1.15
  const top = window.scrollY > screenHeight + 50 ?
    scrollY - 50 : screenHeight + 50


  const style = window.scrollY < visibleAt ?
    {
      top,
      opacity: 0,
      transition: 'opacity 1200ms',
    } :
    {
      top,
      opacity: 1,
      transition: 'opacity 1200ms',
    }

  return(
    <h1 id="title" style={style}>
      HAMISH GILKISON
    </h1>
  )
}
