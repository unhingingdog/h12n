import React, { Component } from 'react'
import '../assets/style.css'
import OdysseyScene from './OdysseyScene'
import Title from './Title'
import Body from './Body'

export default class App extends Component {
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
    this.renderBody = this.renderBody.bind(this)
    this.forceEndOdysseyScene = this.forceEndOdysseyScene.bind(this)
  }

  handleScroll() {
    requestAnimationFrame(() => {
      this.setState(() => ({ 
        scrolled: ((window.scrollY / document.body.scrollHeight) * 47)
          .toFixed(1)
      }))
    })
  }

  forceEndOdysseyScene() {
    this.setState({ odysseyScenePlayed: true })
    window.scrollTo(0,0)
  }

  windowDimensionsChange() {
    this.setState({
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight
    })
  }

  componentDidMount() {
    if (window.innerWidth > 1280) this.forceEndOdysseyScene()
  
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.windowDimensionsChange)
  }

  componentDidUpdate() {
    const { screenHeight, odysseyScenePlayed } = this.state

    if (!odysseyScenePlayed && window.scrollY > screenHeight + 70) {
      window.scrollTo(0,0)
      this.setState({ odysseyScenePlayed: true })
    }
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

  renderBody() {
    const { screenWidth, screenHeight, odysseyScenePlayed } = this.state

    if(odysseyScenePlayed) return(
      <Body
        screenHeight={screenHeight}
        appearNow={odysseyScenePlayed}
        isPortrait={screenHeight > screenWidth}
      />
    )
  }

  render() {
    const { screenWidth, screenHeight, scrolled } = this.state
    const isPortrait = screenWidth < screenHeight

    return (
      <div className="container">
        {this.renderOdysseyScene()}
        <Title
          scrolled={scrolled}
          width={screenWidth}
          screenHeight={screenHeight}
          isPortrait={isPortrait}
          snapToTop={this.state.odysseyScenePlayed}
          forceToContentStart={this.forceEndOdysseyScene}
        />
        {this.renderBody()}
      </div>
    )
  }
}
