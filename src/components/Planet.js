import React, { Component } from 'react'
import earth from '../assets/images/earthLowResHalf.png'

export default class Planet extends Component {
  constructor(props) {
    super(props)

    this.horizonShine = this.horizonShine.bind(this)
    this.planetStyleProperties = this.planetStyleProperties.bind(this)
    this.planetSize = this.planetSize.bind(this)
    this.planetSizeWeighted = this.planetSizeWeighted.bind(this)
  }

  planetSize() {
    const { width, isPortrait } = this.props
    return isPortrait ? width * 0.6 : width * 0.33
  }

  planetSizeWeighted(value) {
    const MAX_SCREEN_WIDTH = 1036
    const maxPlanetWidth = MAX_SCREEN_WIDTH * 0.6

    return (value / maxPlanetWidth) * this.planetSize()
  }

  horizonShine() {
    const { scrolled } = this.props
    const peakShine = 5.8 //scroll point at which blur-radius starts decreasing
    const deltaFloor = 8  //scroll point at which blur-radius stops decreasing
    const minimumShine = -5

    if (scrolled > deltaFloor) return minimumShine

    return scrolled < peakShine ?
      scrolled * -1.3 : (peakShine - (scrolled - peakShine)) * -1.3
  }

  planetStyleProperties() {
    return {
      horizonShine: this.horizonShine(),
      horizonShineBlue: 'rgb(122, 201, 255)',
      planetOverlayColor: 'rgba(109, 145, 145, 0.65)',
      shadowColor: 'rgb(35, 35, 35)',
      shadowSpread: 12,
      planetSize: this.planetSize()
    }
  }

  render() {
    const {
      horizonShine,
      horizonShineBlue,
      planetOverlayColor,
      shadowColor,
      shadowSpread,
      shadowWidth,
      planetSize
    } = this.planetStyleProperties()

    const { transitionPeriod, isPortrait, scrolled } = this.props

    return(
      <div id="planet-outer" style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: `url(${earth})`,
        backgroundSize: 'contain',
        width: `${planetSize}px`,
        height: `${planetSize}px`,
        borderRadius: '50%',
        marginTop: isPortrait ? '65vh' : '85vh',
        zIndex: 1
      }}>
        <div id="planet-inner" style={{
          background: planetOverlayColor,
          transition: `box-shadow ${transitionPeriod} linear`,
          width: `${planetSize}px`,
          height: `${planetSize}px`,
          borderRadius: '50%',
          boxShadow:       `0 ${5 + horizonShine}px 10px ${horizonShineBlue},
                            0 -0.5px 5px white`,
          WebkitBoxShadow: `0 ${5 + horizonShine}px 10px ${horizonShineBlue},
                            0 0.5px 5px white`,
          MozBoxShadow:    `0 ${5 + horizonShine}px 10px ${horizonShineBlue},
                            0 -0.5px 5px white`
        }}></div>
        <div id="planet-shadow" style={{
          position: 'absolute',
          background: shadowColor,
          width: `${planetSize}px`,
          height: `${planetSize}px`,
          borderRadius: '50%',
          marginTop: isPortrait ? '20px' : '25px',
          transform: `scaleX(${1 + (scrolled * (isPortrait ? 0.01 : 0.005))}) 
                      translate(0px, ${scrolled * (isPortrait ? 3 : 2) + 'px'})`,
          transition: `transform ${transitionPeriod / 1000}s linear`,
          boxShadow:        `0px -5px ${shadowSpread * 1.2}px
                            ${shadowSpread}px rgb(35, 35, 35)`,
          WebkitBoxShadow:  `0px -5px ${shadowSpread * 1.2}px
                              ${shadowSpread}px rgb(35, 35, 35),
                              inset 0px 10px 10px rgb(35, 35, 35)`,
          MozBoxShadow:     `0px 0px ${shadowSpread * 1.2}px
                            ${shadowSpread}px rgb(35, 35, 35)`,
        }}></div>
      </div>
    )
  }
}
