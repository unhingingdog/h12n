import React, { Component } from 'react'
import Blurb from './Blurb'
import BodyCard from './BodyCard'
import reactIcon from '../assets/images/react.png'
import reduxIcon from '../assets/images/redux.png'
import jestIcon from '../assets/images/jest.png'
import zipfPreview from '../assets/images/zipf-preview.png'


export default class Body extends Component {
  constructor(props) {
    super(props)

    this.state = {
      style: {
        opacity: 0,
        transition: 'opacity 5000ms',
      }
    }
  }

  componentDidMount() {
    process.nextTick(
      () =>  {
        this.setState({
          style: {
            opacity: 1,
            transition: 'opacity 5000ms',
          }
        })
      })
    setTimeout(window.scrollTo(0, 0), 200)
  }

  render() {
    return(
      <div className="body-copy">
        <Blurb isPortrait={this.props.isPortrait} />
        <BodyCard
          title="Zipf"
          body="A speed reader"
          preview={zipfPreview}
          techIcons={[reactIcon, reduxIcon, jestIcon]}
        />
      </div>
    )
  }
}
