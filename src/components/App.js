import React, { Component } from 'react'
import '../assets/style.css'
import HeaderScreen from './HeaderScreen'
import Title from './Title'
import Blurb from './Blurb'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scrolled: 0.1,
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.windowDimensionsChange = this.windowDimensionsChange.bind(this)
  }

  handleScroll() {
    const scrolled =
      ((window.scrollY / document.body.scrollHeight) * 100).toFixed(1)

    this.setState({ scrolled })
  }

  windowDimensionsChange() {
    this.setState({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight
    })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.windowDimensionsChange)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.windowDimensionsChange)
  }

  render() {
    const { screenWidth, screenHeight, scrolled } = this.state
    const isPortrait = screenWidth < screenHeight

    return (
      <div className="container">
        <HeaderScreen
          scrolled={scrolled}
          width={screenWidth}
          screenHeight={screenHeight}
          isPortrait={isPortrait}
        />
        <Title
          scrolled={scrolled}
          width={screenWidth}
          screenHeight={screenHeight}
          isPortrait={isPortrait}
        />
        //<Blurb screenHeight={screenHeight} />
      </div>
    )
  }
}

export default App
