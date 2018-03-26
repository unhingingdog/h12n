import React, { Component } from 'react'
import '../assets/style.css'
import HeaderScreen from './HeaderScreen'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      percentScrolled: 0.1,
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.windowDimensionsChange = this.windowDimensionsChange.bind(this)
  }

  handleScroll() {
    const percentScrolled =
      ((window.scrollY / document.body.scrollHeight) * 100).toFixed(1)

    this.setState({ percentScrolled: percentScrolled })
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

  // possibly add shouldcomponetupdate to increase size of call quantum

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.windowDimensionsChange)
  }

  render() {
    const { screenWidth, screenHeight, percentScrolled } = this.state
    const isPortrait = screenWidth < screenHeight

    return (
      <div>
        <HeaderScreen
          scrolled={percentScrolled}
          width={screenWidth}
          screenHeight={screenHeight}
          isPortrait={isPortrait}
        />
      </div>
    )
  }
}

export default App
