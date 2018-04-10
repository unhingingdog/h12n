import React, { Component } from 'react'
import BodyCard from './BodyCard'


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
        <div className="body-copy intro-text">
          <h1>About me.</h1>
          <p>
            I'm a Wellington-based, aspiring software developer. I started programming
            as hobby in late 2015, beginning with Ruby on Rails. Almost a year ago, I started
            a full-stack Javascript binge which hasn't abated. It's been a self-directed
            bootcamp of sorts. Recently, I've spent
            most of my time building stuff with React. I'm into emerging internet
            technologies, especially "smart contracts", which tie into my legal background.
            But I'm happiest when learning something new and applying it creatively,
            however shiny the tech is.
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
          appearAt={700}
          title="h12n.nz"
          preview={h12nScreenshot}
          techIcons={[reactIcon, cssIcon, webpackIcon, photoshopIcon]}
          externalIcons={[
            { image: githubIcon, link: 'https://github.com/unhingingdog/h12n' }
          ]}
        >
          <p>
            For some reason I decided I wanted to make a portfolio website featuring
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
            from the University of Canterbury. I'm fully trained to practise
            law in New Zealand. I've worked in administrative positions in government,
            IT, and finance in NZ and the UK. I also have experience in marketing,
            having worked as a graphic designer and a copywriter, as an employee and
             a freelancer.
          </p>
        </div>
      </div>
    )
  }
}
