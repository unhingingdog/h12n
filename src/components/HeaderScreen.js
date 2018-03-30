import React, { Component } from 'react'
import '../assets/HeaderScreen.css'
import Planet from './Planet'
import Sun from './Sun'
import Title from './Title'
import Blurb from './Blurb'

export default class HeaderScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { scrolled, width, screenHeight, isPortrait } = this.props

    return(
      <div className="container">
        <div className="background">
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
          <Title
            scrolled={scrolled}
            width={width}
            screenHeight={screenHeight}
            isPortrait={isPortrait}
          />
          <Blurb screenHeight={screenHeight} />
        </div>
      </div>
    )
  }
}
