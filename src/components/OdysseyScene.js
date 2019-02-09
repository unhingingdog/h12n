import React, { Component } from 'react'
import '../assets/style.css'
import Planet from './Planet'
import Sun from './Sun'

export default class OdysseyScene extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lastUpdateTime: Date.now(),
      transitionPeriod: 50
    }
  }

  componentDidUpdate() {
    this.setState(() => ({ lastUpdateTime: Date.now() }))
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

    if (Date.now() - this.state.lastUpdateTime < this.state.transitionPeriod) return false
    
    // return true
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
          transitionPeriod={this.state.transitionPeriod * 2}
        />
        <Sun
          scrolled={scrolled}
          width={width}
          screenHeight={screenHeight}
          isPortrait={isPortrait}
          transitionPeriod={this.state.transitionPeriod * 2}
        />
      </div>
    )
  }
}
