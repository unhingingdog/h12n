import React, { Component } from 'react'
import '../assets/style.css'
import HeaderScreen from './HeaderScreen'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      frame: 0
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll() {
    this.setState({ frame: window.scrollY })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div>
        <HeaderScreen frame={this.state.frame} />
      </div>
    )
  }
}

export default App
