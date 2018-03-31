import React, { Component } from 'react'
import '../assets/style.css'
import Planet from './Planet'
import Sun from './Sun'
import Title from './Title'
import Blurb from './Blurb'

export default class OdysseyScene extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scrolled: 0.1,
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    const scrolled =
      ((window.scrollY / document.body.scrollHeight) * 100).toFixed(1)

    this.setState({ scrolled })
  }


  render() {
    const { width, screenHeight, isPortrait } = this.props
    const { scrolled } = this.state

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
