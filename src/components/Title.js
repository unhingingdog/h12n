import React from 'react'
import style from '../assets/style.css'

export default ({ screenHeight, isPortrait, snapToTop }) => {
  const visibleAt = screenHeight * 0.45

  const position = snapToTop ? 'fixed' : 'absolute'
  const top = snapToTop ? -50 : screenHeight + 100

  const style = (window.scrollY < visibleAt) && !snapToTop ?
    {
      top,
      opacity: 0,
      transition: 'opacity 1200ms',
      position
    } :
    {
      top,
      opacity: 1,
      transition: 'opacity 1200ms',
      position
    }

  return(
    <div className="title-container">
      <h1 id="title" style={style}>
        HAMISH GILKISON
      </h1>
      <p className="sub-title">"022 421 7109 || hi@h12n.info"</p>
    </div>
  )
}
