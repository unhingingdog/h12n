import React, { Component } from 'react'
import earth from '../assets/images/earth.gif'

//weight everything to planet width instead of screenwidth?

export default class Planet extends Component {
  constructor(props) {
    super(props)

    this.horizonShine = this.horizonShine.bind(this)
    this.shadowSpread = this.shadowSpread.bind(this)
    this.shadowWidth = this.shadowWidth.bind(this)
    this.crescentHeight = this.crescentHeight.bind(this)
    this.planetStyleProperties = this.planetStyleProperties.bind(this)
    this.planetSize = this.planetSize.bind(this)
    this.planetSizeWeighted = this.planetSizeWeighted.bind(this)
  }

  planetSize() {
    const { width, isPortrait } = this.props
    return isPortrait ? width * 0.6 : width * 0.33
  }

  planetSizeWeighted(value) {
    const maxPlanetWidth = 1036 * 0.6

    return (value / maxPlanetWidth) * this.planetSize()
  }

  horizonShine() {
    //planetWeight

    const { scrolled } = this.props
    const peakShine = 5.8 //scroll point at which blur-radius starts decreasing
    const deltaFloor = 8  //scroll point at which blur-radius stops decreasing
    const minimumShine = -5

    if (scrolled > deltaFloor) return minimumShine

    return scrolled < peakShine ?
      scrolled * -1.3 : (peakShine - (scrolled - peakShine)) * -1.3
  }

  crescentHeight() {
    const { scrolled, width, isPortrait } = this.props
    const dynamicHeight = this.planetSizeWeighted(20 + (scrolled * 1.95))
    const maximumHeight = 45
    //fix this shit
    const weightedByScreenOrientationMode = isPortrait ?
      scrolled * 4 : scrolled * 1.95

    const screenWidthWeightedHeight = 20 +
      (weightedByScreenOrientationMode / standardScreenWidth) * width

    return screenWidthWeightedHeight > maximumHeight ?
      maximumHeight : screenWidthWeightedHeight
  }

  shadowSpread() {
    const { scrolled, width, isPortrait } = this.props
    const standardScreenWidth = 1034
    const blurRadius = ((15 + (scrolled / 5)) / standardScreenWidth) * width

    return `0px -5px
            ${blurRadius}px
            ${10 + scrolled/5}px
            rgb(35, 35, 35)`
  }

  //possibly remove
  shadowWidth() {
    const { scrolled, isPortrait } = this.props
    const planetSize = this.planetSize()

    const width = isPortrait ?
      planetSize : planetSize + (scrolled * 1.5)

    return `${width}px`
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
      shadowWidth: this.shadowWidth(),
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
      shadowWidth,
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
          width: shadowWidth,
          height: `${planetSize}px`,
          borderRadius: '50%',
          marginTop: `${crescentHeight}px`,
          boxShadow: shadowSpread
        }}></div>
      </div>
    )
  }
}
