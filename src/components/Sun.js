import React from 'react'

export default ({ scrolled }) => {
  return(
    <div style={{
      position: 'absolute',
      backgroundColor: 'goldenrod',
      width: '7vw',
      height: '7vw',
      borderRadius: '50%',
      marginTop: `${90 - (scrolled * 2)}vh`
    }}></div>
  )
}
