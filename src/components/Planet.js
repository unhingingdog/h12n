import React, { Component } from 'react'
import earth from '../assets/images/earth.gif'

export default class Planet extends Component {
  constructor(props) {
    super(props)

    this.planetShine = this.planetShine.bind(this)
  }

  planetShine() {
    const { scrolled } = this.props
    if(scrolled > 7) return 0
    return scrolled < 3.5 ? scrolled * -2 : (3.5 - (scrolled - 3.5)) * -2
  }

  render() {
    const { scrolled } = this.props
    const planetShine = this.planetShine()
    console.log(scrolled)


    return(
      <div style={styles.outer}>
        <div style={{
          background: 'rgba(109, 145, 145, 0.65)',
          width: '30vw',
          height: '30vw',
          borderRadius: '50%',
          boxShadow: `0 ${5 + planetShine}px 10px rgb(255, 221, 56),
                      0 ${3 + planetShine * 0.8}px 5px white`
        }}></div>
        <div style={{
          position: 'relative',
          background: `rgb(35, 35, 35)`,
          width: '30vw',
          height: '27vw',
          borderRadius: '50%',
          bottom: `${91 - (scrolled / 4)}%`,
          boxShadow: `0px -5px ${5 + scrolled / 50}px ${10 + scrolled / 5}px rgb(35, 35, 35)`
        }}></div>
      </div>
    )
  }
}

const styles = {
  outer: {
    backgroundImage: `url(${earth})`,
    backgroundSize: 'contain',
    width: '30vw',
    height: '30vw',
    borderRadius: '50%',
    marginTop: '85vh',
    zIndex: 1
  }
}
