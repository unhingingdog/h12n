import React, { Component } from 'react'
import '../assets/style.css'
import OdysseyScene from './OdysseyScene'
import Title from './Title'
import BodyCopy from './BodyCopy'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scrolled: 0.1,
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      odysseyScenePlayed: false
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.windowDimensionsChange = this.windowDimensionsChange.bind(this)
    this.renderOdysseyScene = this.renderOdysseyScene.bind(this)
    this.renderBodyCopy = this.renderBodyCopy.bind(this)
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

  renderOdysseyScene() {
    const { screenWidth, screenHeight, scrolled } = this.state
    const isPortrait = screenWidth < screenHeight

    if (!this.state.odysseyScenePlayed) return (
      <OdysseyScene
        scrolled={scrolled}
        width={screenWidth}
        screenHeight={screenHeight}
        isPortrait={isPortrait}
      />
    )
  }

  renderBodyCopy() {
    if(this.state.odysseyScenePlayed) return(
      <BodyCopy
        screenHeight={this.state.screenHeight}
        appearNow={this.state.odysseyScenePlayed}
        isPortrait={this.state.isPortrait}
      />
    )
  }

  render() {
    const { screenWidth, screenHeight, scrolled } = this.state
    const isPortrait = screenWidth < screenHeight

    //bad. fix.
    if (!this.state.odysseyScenePlayed && window.scrollY > screenHeight + 70) {
      window.scrollTo(0,0)
      this.setState({ odysseyScenePlayed: true })
    }

    return (
      <div className="container">
        {this.renderOdysseyScene()}
        <Title
          scrolled={scrolled}
          width={screenWidth}
          screenHeight={screenHeight}
          isPortrait={isPortrait}
          snapToTop={this.state.odysseyScenePlayed}
        />
        {this.renderBodyCopy()}
      </div>
    )
  }
}

export default App
