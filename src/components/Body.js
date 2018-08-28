import React, { Component } from 'react'
import BodyCard from './BodyCard'


import reactIcon from '../assets/images/react.png'
import reduxIcon from '../assets/images/redux.png'
import nodeIcon from '../assets/images/node-icon.png'
import jestIcon from '../assets/images/jest.png'
import zipfPreview from '../assets/images/zipf-preview.png'
import judgmentSquidPreview from '../assets/images/judgmentSquidPreview.png'
import GTFOPreview from '../assets/images/GTFOPreview.png'
import h12nScreenshot from '../assets/images/h12n-preview.png'
import githubIcon from '../assets/images/github-icon.png'
import browserIcon from '../assets/images/browserIcon.png'
import appStoreIcon from '../assets/images/app-store-icon.png'
import cssIcon from '../assets/images/css-logo.png'
import jsIcon from '../assets/images/js-logo.png'
import webpackIcon from '../assets/images/webpack-logo.png'
import photoshopIcon from '../assets/images/photoshop-logo.png'
import ethIcon from '../assets/images/ethIcon.png'


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
        <div className="body-copy intro-text">
          <h1>About me.</h1>
          <p>
            I'm a Wellington-based, aspiring software developer. I started programming
            as hobby in late 2015, beginning with Ruby on Rails. In mid-2017, I started
            a full-stack Javascript binge which hasn't abated. Recently, I've spent
            most of my time building stuff with React. I'm happiest when learning
            something new and applying it creatively, however shiny the tech is.
          </p>
          <p>
            Get in touch at <strong>hamish@h12n.nz</strong> or on <strong>+6422 421 7109</strong>.
          </p>
        </div>

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
          <p>
            Zipf is a speed reading iOS app, built with React Native. The frequency
            of words in all languages follows a "zipfian" distribution - that is -
            "the frequency of a word is inversely proportional to its ranking by
            frequency". The ten most common words in the English language make
            up 25% of text. The 100 most common words make up 50%. And so on.
            Zipf assumes that common words contain less information, and weights
            the display time of each word based on its frequency in the English
            language.
          </p>
          <p>
            I used Redux in order to manage the relative complexity of the state,
            as well as Jest and Enzyme for test driven development. This was pretty
            good crash-course in React Native and Redux. It was also very fun
            to develop (except for setting up the test environment, which is really
             quite difficult in React Native at the moment).
          </p>
        </BodyCard>

        <BodyCard
          appearAt={200}
          title="Get the Flight Out"
          preview={GTFOPreview}
          techIcons={[reactIcon, reduxIcon, jestIcon, jsIcon, nodeIcon]}
          externalIcons={[
            {image: githubIcon, link: 'https://github.com/unhingingdog/GTFO' },
            {image: browserIcon, link: 'https://gtfo.travel'}
          ]}
        >
          <p>
            Get the Flight Out is a web app that takes a
            flight number and tells the user when to leave to the airport. I
            created an express server to combine flight and navigation data,
            and wrote the front-end in React and Redux.
          </p>
          <p>
            My approach very much evolved as I learned more about Node and Express,
            and ran into economic/data limitations. I ended up taking a very
            functional, modular approach on the back-end, in anticipation of swapping
            out one or both of the data providers if necessary.
          </p>
          <p>
            I created this with the intention of monetising it from the start.
            There's still work to do to turn this into a fully featured service
            (namely, hard-coding airline data), but it currently works for most
            domestic New Zealand flights.

            If you want to give it a try, JQ291 is a flight from Wellington to Christchurch.
          </p>
        </BodyCard>

        <BodyCard
          appearAt={200}
          title="Judgment Squid"
          preview={judgmentSquidPreview}
          techIcons={[reactIcon, reduxIcon, ethIcon ]}
          externalIcons={[
            {image: githubIcon, link:'https://github.com/unhingingdog/ResolveEthereumApp' },
            {image: browserIcon, link: 'https://resolve-eth-squid.herokuapp.com/'}
          ]}
        >
          <p>
            Judgment Squid is a decentralised arbitration application. The
            back-end is built on Ethereum's Rinkeby test network, using the
            Solidity programming language. The front-end was made using React
            and Redux, with Semantic UI for the styling.
          </p>
          <p>
            The development experience was a bit rough at times, as I decided
            against using a framework (mainly for future-proofing reasons).
            Despite running into several undocumented issues, I think this was
            a good approach - I learned a lot about wiring up Ethereum applications,
            as well as making application architecture decisions.
          </p>
          <p>
            I'm not entirely sure why I chose this name.
          </p>
        </BodyCard>

        <BodyCard
          appearAt={700}
          title="h12n.nz"
          preview={h12nScreenshot}
          techIcons={[reactIcon, cssIcon, webpackIcon, photoshopIcon]}
          externalIcons={[
            { image: githubIcon, link: 'https://github.com/unhingingdog/h12n' }
          ]}
        >
          <p>
            I wanted to make a portfolio website featuring
            the opening scene of 2001: A Space Odyssey. Here it is. This proved to be far more
            complicated than I thought, and I ended up learning a lot about CSS.
            I started the project using vanilla Javascript but soon realised that
            React was the tool for the job.
          </p>
          <p>
            I took the opportunity to learn how to use Webpack also, rather than
            using create-react-app.
          </p>
        </BodyCard>

        <div className="body-copy background-text">
          <h1>Background.</h1>
          <p>
            I have a BA in Political Science and a law degree (LLB)
            from the University of Canterbury. I have previously worked as a
            graphic designer and copywriter, as well in a variety of
            administrative positions in IT, finance, and government.
          </p>
        </div>
      </div>
    )
  }
}
