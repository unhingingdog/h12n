import React, { Component } from 'react'
import earth from '../assets/images/earth.gif'

export default class Planet extends Component {
  constructor(props) {
    super(props)

    this.horizonShine = this.horizonShine.bind(this)
    this.shadowSpread = this.shadowSpread.bind(this)
    this.planetStyleProperties = this.planetStyleProperties.bind(this)
    this.planetSize = this.planetSize.bind(this)
  }

  horizonShine() {
    const { scrolled } = this.props
    const peakShine = 3.5
    const shineReduceStop = 5

    if (scrolled > shineReduceStop) return -4
    return scrolled < peakShine ?
      scrolled * -2 : (peakShine - (scrolled - peakShine)) * -2
  }

  shadowSpread() {
    //pass down width pixels
    //switch pixels to percent of pixels width
    const { scrolled } = this.props

    return `0px -5px
            ${20 + scrolled/3}px
            ${10 + scrolled/5}px
            rgb(35, 35, 35)`
  }

  planetSize() {
    const { scrolled } = this.props

    const startZoom = 12
    const acceleration = 1 * ((scrolled * 3) - (startZoom * 3))

    const value = scrolled < startZoom ? 30 : 30 + acceleration
    return `${value}vw`
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
      shadowTop: `${2 + 1 * (scrolled / 2.5)}vh`, //`${3 + 1 * (scrolled / 2.5}vh`
      shadowWidth: `${30 + scrolled / 2}vw`,
      shadowHeight: `${27 + scrolled/10}vw`,
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
      shadowTop,
      shadowWidth,
      shadowHeight,
      planetSize
    } = this.planetStyleProperties()

    const { scrolled } = this.props
    console.log(scrolled)
    console.log('horizonshine: ', horizonShine)

    return(
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: `url(${earth})`,
        backgroundSize: 'contain',
        width: planetSize,
        height: planetSize,
        borderRadius: '50%',
        marginTop: '85vh',
        zIndex: 1
      }}>
        <div style={{
          background: planetOverlayColor,
          width: planetSize,
          height: planetSize,
          borderRadius: '50%',
          //switch pixels to percent of width
          boxShadow: `0 ${5 + horizonShine}px 10px ${horizonShineBlue},
                      0 ${3 + horizonShine * 0.8}px 5px white`
        }}></div>
        <div style={{
          position: 'absolute',
          background: shadowColor,
          width: shadowWidth,
          height: shadowHeight,
          borderRadius: '50%',
          marginTop: shadowTop,
          boxShadow: shadowSpread
        }}></div>
      </div>
    )
  }
}
