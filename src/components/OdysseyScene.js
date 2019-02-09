import React, { Component } from 'react'
import '../assets/style.css'
import Planet from './Planet'
import Sun from './Sun'

export default class OdysseyScene extends Component {
  constructor(props) {
    super(props)
  }

  shouldComponentUpdate(nextProps) {
    const { width, screenHeight, isPortrait, scrolled } = this.props
    const { 
      width: width2, 
      screenHeight: screenHeight2, 
      isPortrait: isPortrait2, 
      scrolled: nextScrolled
    } = nextProps

    if (
      (width !== width2) || 
      (screenHeight !== screenHeight2) || 
      (isPortrait !== isPortrait2)
    ) return true

    return Math.abs(scrolled - nextScrolled) > 0.1
  }

  render() {
    const { scrolled, width, screenHeight, isPortrait } = this.props

    return(
      <div className="odyssey-scene-container">
        <Planet
          scrolled={scrolled}
          width={width}
          screenHeight={screenHeight}
          isPortrait={isPortrait}
        />
        <Sun
          scrolled={scrolled}
          width={width}
          screenHeight={screenHeight}
          isPortrait={isPortrait}
        />
      </div>
    )
  }
}
