import React, { Component } from 'react'
import earth from '../assets/images/earth.gif'

export default class Planet extends Component {
  constructor(props) {
    super(props)

    this.horizonShine = this.horizonShine.bind(this)
    this.planetShadowSpread = this.planetShadowSpread.bind(this)
    this.planetStyleProperties = this.planetStyleProperties.bind(this)
  }

  horizonShine() {
    const { scrolled } = this.props
    if(scrolled > 7) return 0
    return scrolled < 3.5 ? scrolled * -2 : (3.5 - (scrolled - 3.5)) * -2
  }

  planetShadowSpread() {
    const { scrolled } = this.props
    return `0px -5px
            ${20 + scrolled/3}px
            ${10 + scrolled/5}px
            rgb(35, 35, 35)`
  }

  planetStyleProperties() {
    const { scrolled } = this.props
    return {
      horizonShine: this.horizonShine(),
      planetShadowSpread: this.planetShadowSpread(),
      planetShadowHeight: `${3 + scrolled / 2.5}vh`,
      planetShadowWidth: `${30 + scrolled / 2}vw`
    }
  }

  render() {
    const planetStyles = this.planetStyleProperties()
    const { scrolled } = this.props

    console.log(scrolled)

    return(
      <div style={styles.outer}>
        <div style={{
          background: 'rgba(109, 145, 145, 0.65)',
          width: '30vw',
          height: '30vw',
          borderRadius: '50%',
          boxShadow: `0 ${5 + planetStyles.horizonShine}px
                      10px rgb(255, 221, 56),
                      0 ${3 + planetStyles.horizonShine * 0.8}px
                      5px white`
        }}></div>
        <div style={{
          position: 'absolute',
          background: 'rgb(35, 35, 35)',
          width: planetStyles.planetShadowWidth,
          height: '27vw',
          borderRadius: '50%',
          marginTop: planetStyles.planetShadowHeight,
          boxShadow: planetStyles.planetShadowSpread
        }}></div>
      </div>
    )
  }
}

const styles = {
  outer: {
    display: 'flex',
    justifyContent: 'center',
    backgroundImage: `url(${earth})`,
    backgroundSize: 'contain',
    width: '30vw',
    height: '30vw',
    borderRadius: '50%',
    marginTop: '85vh',
    zIndex: 1
  }
}
