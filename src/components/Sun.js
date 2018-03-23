import React from 'react'

export default ({ scrolled }) => {
  return(
    <div style={{
      position: 'absolute',
      backgroundImage: 'radial-gradient(rgb(255, 246, 229), 85%, rgb(255, 214, 112))',
      width: '5vw',
      height: '5vw',
      borderRadius: '50%',
      marginTop: `${93 - (scrolled * 2.1)}vh`,
      boxShadow: `0 0 80px goldenrod,
                  0 0 20px goldenrod,
                  0 0 60px rgb(255, 144, 0)`
    }}></div>
  )
}
