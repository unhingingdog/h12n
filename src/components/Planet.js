import React from 'react'

export default ({ scrolled }) => {
  return(
    <div style={styles.outer}>
      <div style={styles.inner}></div>
      <div style={{
        position: 'relative',
        background: 'rgb(35, 35, 35)',
        width: '30vw',
        height: '27vw',
        borderRadius: '50%',
        bottom: `${91 - (scrolled / 2)}%`,
        boxShadow: `0px -5px 5px ${10 + scrolled / 5}px rgb(35, 35, 35)`
      }}></div>
    </div>
  )
}



const styles = {
  outer: {
    background: 'grey',
    width: '30vw',
    height: '30vw',
    borderRadius: '50%',
    marginTop: '85vh',
    zIndex: 1
  },
  inner: {
    background: 'rgb(51, 89, 150)',
    width: '30vw',
    height: '30vw',
    borderRadius: '50%'
  }
}
