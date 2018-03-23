import React, { Component } from 'react'
import earth from '../assets/images/earth.gif'

export default class Planet extends Component {
  constructor(props) {
    super(props)

    this.horizonShine = this.horizonShine.bind(this)
    this.planetShadowSpread = this.planetShadowSpread.bind(this)
    this.planetStyleProperties = this.planetStyleProperties.bind(this)
    this.planetSize = this.planetSize.bind(this)
  }

  horizonShine() {
    const { scrolled } = this.props
    // if(scrolled > 7) return 0
    return scrolled < 3.5 ? scrolled * -2 : (3.5 - (scrolled - 3.5)) * -2
  }

  planetShadowSpread() {
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
      planetShadowSpread: this.planetShadowSpread(),
      planetShadowHeight: `${2 + 1 * (scrolled / 2.5)}vh`, //`${3 + 1 * (scrolled / 2.5}vh`
      planetShadowWidth: `${30 + scrolled / 2}vw`,
      planetSize: this.planetSize()
    }
  }

  render() {
    const {
      horizonShine,
      horizonShineBlue,
      horizonShineGold,
      horizonShineColours,
      planetShadowSpread,
      planetShadowHeight,
      planetShadowWidth,
      planetSize
    } = this.planetStyleProperties()

    const { scrolled } = this.props
    console.log(scrolled)

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
          background: 'rgba(109, 145, 145, 0.65)',
          width: planetSize,
          height: planetSize,
          borderRadius: '50%',
          //switch pixels to percent of width
          boxShadow: `0 ${5 + horizonShine}px 10px ${horizonShineBlue},
                      0 ${3 + horizonShine * 0.8}px 5px white`
        }}></div>
        <div style={{
          position: 'absolute',
          background: 'rgb(35, 35, 35)',
          width: planetShadowWidth,
          height: `${27 + scrolled/10}vw`,
          borderRadius: '50%',
          marginTop: planetShadowHeight,
          boxShadow: planetShadowSpread
        }}></div>
      </div>
    )
  }
}
