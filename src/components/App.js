import React, { Component } from 'react'
import '../assets/style.css'
import OdysseyScene from './OdysseyScene'
import Title from './Title'
import Blurb from './Blurb'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
      odysseyScenePlayed: false
    }

    this.windowDimensionsChange = this.windowDimensionsChange.bind(this)
    this.renderOdysseyScene = this.renderOdysseyScene.bind(this)
  }

  windowDimensionsChange() {
    this.setState({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.windowDimensionsChange)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.windowDimensionsChange)
  }

  renderOdysseyScene() {
    const { screenWidth, screenHeight } = this.state
    const isPortrait = screenWidth < screenHeight

    if (!this.state.odysseyScenePlayed) return (
      <OdysseyScene
        width={screenWidth}
        screenHeight={screenHeight}
        isPortrait={isPortrait}
      />
    )
  }

  render() {
    const { screenWidth, screenHeight } = this.state
    const isPortrait = screenWidth < screenHeight

    //bad. fix.
    if (!this.state.odysseyScenePlayed && window.scrollY > screenHeight + 70) {
      this.setState({ odysseyScenePlayed: true })
    }

    return (
      <div className="container">
        {this.renderOdysseyScene()}
        <Title
          width={screenWidth}
          screenHeight={screenHeight}
          isPortrait={isPortrait}
          snapToTop={this.state.odysseyScenePlayed}
        />
        <Blurb
          screenHeight={screenHeight}
          odysseyPlayed={this.state.odysseyScenePlayed}
        />
      </div>
    )
  }
}

export default App
