import React, { Component } from 'react'
import '../assets/style.css'
import HeaderScreen from './HeaderScreen'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      percentScrolled: 0.1
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll() {
    const percentScrolled =
      ((window.scrollY / document.body.scrollHeight) * 100).toFixed(1)
    this.setState({ percentScrolled: percentScrolled })
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
        <HeaderScreen
          scrolled={this.state.percentScrolled}
        />
      </div>
    )
  }
}

export default App
