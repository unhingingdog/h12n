import React, { Component } from 'react'
import '../assets/HeaderScreen.css'

export default class HeaderScreen extends Component {
  render() {
    console.log(this.props.frame)
    return(
      <div className="container">
        <div className="background">
          <div className="planet">
            <div className="planet-inner"></div>
            <div className="planet-shadow"></div>
          </div>
          <div className="sun"></div>
        </div>
      </div>
    )
  }
}
