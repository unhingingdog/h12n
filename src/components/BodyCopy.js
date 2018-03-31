import React, { Component } from 'react'
import Blurb from './Blurb'

export default class BodyCopy extends Component {
  constructor(props) {
    super(props)

    this.state = {
      style: { opacity: 0, transition: 'opacity 1200ms' }
    }
  }

  componentDidMount() {
    process.nextTick(
      () => this.setState({
        style: { opacity: 1, transition: 'opacity 1200ms' }
      })
    )
  }

  render() {
    const { style } = this.state

    return(
      <div className="body-copy" style={style}>
        <Blurb isPortrait={this.props.isPortrait} />
      </div>
    )
  }
}
