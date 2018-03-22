import React, { Component } from 'react'
import '../assets/HeaderScreen.css'
import Planet from './Planet'
import Sun from './Sun'

export default class HeaderScreen extends Component {
  render() {
    console.log(this.props.scrolled)
    const { scrolled } = this.props
    return(
      <div className="container">
        <div className="background">
          <Planet scrolled={scrolled}/>
          <Sun scrolled={scrolled}/>
        </div>
      </div>
    )
  }
}
