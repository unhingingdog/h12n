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

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.windowDimensionsChange)
  }

  render() {
    return (
      <div>
        <HeaderScreen
          scrolled={this.state.percentScrolled}
          width={this.state.screenWidth}
        />
      </div>
    )
  }
}

export default App
