import React, { Component } from 'react'

export default class Sun extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { scrolled, screenHeight, isPortrait, transitionPeriod } = this.props
    this.sunRise = screenHeight - scrolled * (isPortrait ? 32 : 18)
    this.sunSize = isPortrait ? 9 : 5.7

    return(
      <div style={{
        position: 'absolute',
        top: isPortrait ? -100 : 0,
        backgroundImage: 'radial-gradient(rgb(255, 246, 229), 85%, rgb(255, 214, 112))',
        width: `${this.sunSize}vw`,
        height: `${this.sunSize}vw`,
        borderRadius: '50%',
        transition: `transform ${transitionPeriod / 1000}s linear`,
        transform: `translateY(${this.sunRise}px)`,
        boxShadow: `0 0 80px goldenrod,
                    0 0 20px goldenrod,
                    0 0 60px rgb(255, 144, 0)`
      }}></div>
    )
  }
}
