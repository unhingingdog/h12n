import React, { Component } from 'react'
import earth from '../assets/images/earth.gif'

export default class Planet extends Component {
  constructor(props) {
    super(props)

    this.horizonShine = this.horizonShine.bind(this)
    this.shadowSpread = this.shadowSpread.bind(this)
    this.crescentHeight = this.crescentHeight.bind(this)
    this.planetStyleProperties = this.planetStyleProperties.bind(this)
    this.planetSize = this.planetSize.bind(this)
  }

  horizonShine() {
    const { scrolled } = this.props
    const peakShine = 3.5
    const shineFloor = 5

    if (scrolled > shineFloor) return -4
    return scrolled < peakShine ?
      scrolled * -2 : (peakShine - (scrolled - peakShine)) * -2
  }

  shadowSpread() {
    const { scrolled, width } = this.props
    const standardScreenWidth = 1034
    const blurRadius = ((15 + (scrolled / 5)) / standardScreenWidth) * width

    return `0px -5px
            ${blurRadius}px
            ${10 + scrolled/5}px
            rgb(35, 35, 35)`
  }

  crescentHeight() {
    const { scrolled, width } = this.props
    const standardScreenWidth = 1034
    const maximumHeight = 45
    const screenWeightedHeight = 20 +
      ((scrolled * 1.95) / standardScreenWidth) * width

    return screenWeightedHeight > maximumHeight ?
      maximumHeight : screenWeightedHeight
  }

  planetSize() {
    const { scrolled, width, isPortrait } = this.props

    const startZoom = 100
    const acceleration = 1 * ((scrolled * 3) - (startZoom * 3))
    const landscapeMode = width / 3
    const portraitMode = width * 0.6
    const screenMode = isPortrait ? portraitMode : landscapeMode

    return scrolled < startZoom ? screenMode : screenMode + acceleration
  }

  planetStyleProperties() {
    const { scrolled } = this.props
    return {
      horizonShine: this.horizonShine(),
      horizonShineBlue: 'rgb(122, 201, 255)',
      horizonShineGold: 'rgb(255, 221, 56)',
      planetOverlayColor: 'rgba(109, 145, 145, 0.65)',
      shadowColor: 'rgb(35, 35, 35)',
      shadowSpread: this.shadowSpread(),
      crescentHeight: this.crescentHeight(),
      planetSize: this.planetSize()
    }
  }

  render() {
    const {
      horizonShine,
      horizonShineBlue,
      horizonShineGold,
      horizonShineColours,
      planetOverlayColor,
      shadowColor,
      shadowSpread,
      crescentHeight,
      planetSize
    } = this.planetStyleProperties()

    const { scrolled, width } = this.props

    return(
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: `url(${earth})`,
        backgroundSize: 'contain',
        width: `${planetSize}px`,
        height: `${planetSize}px`,
        borderRadius: '50%',
        marginTop: '85vh',
        zIndex: 1
      }}>
        <div style={{
          background: planetOverlayColor,
          width: `${planetSize}px`,
          height: `${planetSize}px`,
          borderRadius: '50%',
          //switch pixels to percent of width
          boxShadow: `0 ${5 + horizonShine}px 10px ${horizonShineBlue},
                      0 ${3 + horizonShine * 0.8}px 5px white`
        }}></div>
        <div style={{
          position: 'absolute',
          background: shadowColor,
          width: `${(planetSize + 10) + (scrolled * 1.8)}px`,
          height: `${planetSize}px`,
          borderRadius: '50%',
          marginTop: `${crescentHeight}px`,
          boxShadow: shadowSpread
        }}></div>
      </div>
    )
  }
}
