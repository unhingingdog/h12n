import React from 'react'

export default ({ screenHeight, isPortrait, snapToTop, forceToContentStart }) => {
  const visibleAt = screenHeight * (isPortrait ? 0.3 : 0.45)
  const position = snapToTop ? 'fixed' : 'absolute'
  const spaceBelowPlanet = isPortrait ? 0.85 : 1.16
  const top = snapToTop ? -34 : screenHeight * spaceBelowPlanet

  const style = (window.scrollY < visibleAt) && !snapToTop ?
    {
      top,
      opacity: 0,
      transition: 'opacity 1200ms',
      position,
      background: 'transparent'
    } :
    {
      top,
      opacity: 1,
      transition: 'opacity 1200ms',
      position
    }

  return(
    <div className="title-container" onClick={forceToContentStart}>
      <h1 style={style} className="title">
        HAMISH GILKISON
      </h1>
    </div>
  )
}
