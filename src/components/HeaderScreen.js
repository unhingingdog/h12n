import React, { Component } from 'react'
import '../assets/HeaderScreen.css'
import Planet from './Planet'
import Sun from './Sun'
import Title from './Title'

export default class HeaderScreen extends Component {
  render() {
    const { scrolled, width, screenHeight } = this.props

    return(
      <div className="container">
        <div className="background">
          <Planet scrolled={scrolled} width={width} />
          <Sun scrolled={scrolled} width={width} screenHeight={screenHeight}/>
          <Title scrolled={scrolled} width={width}/>
        </div>
      </div>
    )
  }
}
