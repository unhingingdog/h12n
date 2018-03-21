import React from 'react'

export default ({ scrolled }) => {
  return(
    <div style={{
      position: 'absolute',
      backgroundColor: 'rgb(255, 234, 193)',
      width: '7vw',
      height: '7vw',
      borderRadius: '50%',
      marginTop: `${93 - (scrolled * 2.4)}vh`,
      boxShadow: `0 0 80px goldenrod,
                  0 0 20px goldenrod,
                  0 0 60px rgb(255, 144, 0)`
    }}></div>
  )
}
