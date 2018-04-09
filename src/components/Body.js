import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'
import BodyCard from './BodyCard'
import SectionTitle from './SectionTitle'

import reactIcon from '../assets/images/react.png'
import reduxIcon from '../assets/images/redux.png'
import jestIcon from '../assets/images/jest.png'
import zipfPreview from '../assets/images/zipf-preview.png'
import h12nScreenshot from '../assets/images/h12n-preview.png'
import githubIcon from '../assets/images/github-icon.png'
import appStoreIcon from '../assets/images/app-store-icon.png'
import cssIcon from '../assets/images/css-logo.png'
import jsIcon from '../assets/images/js-logo.png'
import webpackIcon from '../assets/images/webpack-logo.png'
import photoshopIcon from '../assets/images/photoshop-logo.png'


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
      <div className="body" style={this.state.style}>
        <Header />
        <BodyCard
          appearAt={200}
          title="Zipf"
          preview={zipfPreview}
          techIcons={[reactIcon, reduxIcon, jestIcon, jsIcon]}
          externalIcons={[
            {image: githubIcon, link:'https://github.com/unhingingdog/Zipf' },
            {image: appStoreIcon, link: 'https://itunes.apple.com/us/app/zipf/id1366685837?mt=8&ign-mpt=uo%3D4'}
          ]}
        >
          Lorem ipsum dolor amet hexagon viral glossier, direct trade
          XOXO ramps occupy shaman meggings shoreditch synth paleo blue
          bottle godard. Affogato banh mi hexagon, meggings sriracha
          bushwick portland kombucha. Chambray four loko sustainable
          kombucha pop-up chillwave cornhole asymmetrical palo santo
          cardigan. Photo booth letterpress bespoke, plaid ugh umami
          subway tile scenester disrupt pickled man bun.
        </BodyCard>
        <hr />
        <BodyCard
          appearAt={700}
          title="h12n.nz"
          preview={h12nScreenshot}
          techIcons={[reactIcon, cssIcon, webpackIcon, photoshopIcon]}
          externalIcons={[
            { image: githubIcon, link: 'https://github.com/unhingingdog/h12n' }
          ]}
        >
          Lorem ipsum dolor amet hexagon viral glossier, direct trade
          XOXO ramps occupy shaman meggings shoreditch synth paleo blue
          bottle godard. Affogato banh mi hexagon, meggings sriracha
          bushwick portland kombucha. Chambray four loko sustainable
          kombucha pop-up chillwave cornhole asymmetrical palo santo
          cardigan. Photo booth letterpress bespoke, plaid ugh umami
          subway tile scenester disrupt pickled man bun.
        </BodyCard>
        <Footer />
      </div>
    )
  }
}
