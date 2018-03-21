import React, { Component } from 'react'
import '../assets/HeaderScreen.css'
import Planet from './Planet'
import Sun from './Sun'

export default class HeaderScreen extends Component {
  constructor(props) {
    super(props)
    this.isMobile = this.isMobile.bind(this)
  }

  isMobile() {
    return (this.props.screenWidth < 1000)
  }

  render() {
    return(
      <div className="container">
        <div className="background">
          <Planet
            scrolled={scrolled}
            isMobile={this.isMobile()}
          />
          <Sun
            scrolled={scrolled}
            screenWidth={screenWidth}
          />
        </div>
      </div>
    )
  }
}
