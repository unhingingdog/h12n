import React, { Component } from 'react'
import Blurb from './Blurb'
import BodyCard from './BodyCard'
import reactIcon from '../assets/images/react.png'
import reduxIcon from '../assets/images/redux.png'
import jestIcon from '../assets/images/jest.png'
import zipfPreview from '../assets/images/zipf-preview.png'
import githubIcon from '../assets/images/github-icon.png'
import appStoreIcon from '../assets/images/app-store-icon.png'


export default class Body extends Component {
  constructor(props) {
    super(props)

    this.state = {
      style: {
        opacity: 0
      }
    }
  }

  componentDidMount() {
    process.nextTick(
      () =>  {
        this.setState({
          style: {
            opacity: 1,
            transition: 'opacity 2300ms',
          }
        })
      })
    setTimeout(window.scrollTo(0, 0), 200)
  }

  render() {
    return(
      <div className="body-copy" style={this.state.style}>
        <Blurb isPortrait={this.props.isPortrait} />
        <BodyCard
          title="Zipf"
          body="A speed reader"
          preview={zipfPreview}
          techIcons={[reactIcon, reduxIcon, jestIcon]}
          externalIcons={[githubIcon, appStoreIcon]}
        />
      </div>
    )
  }
}