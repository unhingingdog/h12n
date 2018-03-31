import React from 'react'

export default ({ scrolled, screenHeight, isPortrait }) => {
  const sunRise = screenHeight - scrolled * 20
  const sunSize = isPortrait ? 9 : 5.7

  return(
    <div style={{
      position: 'absolute',
      backgroundImage: 'radial-gradient(rgb(255, 246, 229), 85%, rgb(255, 214, 112))',
      width: `${sunSize}vw`,
      height: `${sunSize}vw`,
      borderRadius: '50%',
      marginTop: `${sunRise}px`,
      boxShadow: `0 0 80px goldenrod,
                  0 0 20px goldenrod,
                  0 0 60px rgb(255, 144, 0)`
    }}></div>
  )
}
