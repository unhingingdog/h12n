import React, { Component } from 'react'
import BodyCard from './BodyCard'

import zipfPreview from '../assets/images/zipf-preview.png'
import judgmentSquidPreview from '../assets/images/judgmentSquidPreview.png'
import GTFOPreview from '../assets/images/GTFOPreview.png'
import h12nScreenshot from '../assets/images/h12n-preview.png'
import tokamakPreview from '../assets/images/tokamakPreview.png'

import githubIcon from '../assets/images/github-icon.png'
import browserIcon from '../assets/images/browserIcon.png'
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
      <div className="body" style={this.state.style}>
        <div className="body-copy intro-text">
          <h1>About me.</h1>
          <p>
            I’m a wellington-based front-end developer, seeking junior to 
            intermediate level work. I started dabbling in software development 
            as a hobby in 2015, before discovering that it’s the most 
            intellectually and creatively fulfilling work possible. 
            I have a strong interest in internet technology and software 
            development in general, but my main focus is JavaScript 
            (particularly React).
          </p>
          <p>
            Get in touch at <strong>hamish@h12n.nz</strong> or on <strong>+6422 421 7109</strong>.
          </p>
        </div>

        <BodyCard
          appearAt={200}
          title="tokamak.fun"
          preview={tokamakPreview}
          tech={['react', 'js', 'rxjs', 'three']}
          externalIcons={[
            {image: githubIcon, link: 'https://github.com/unhingingdog/fusion-game' },
            {image: browserIcon, link: 'http://tokamak.surge.sh'}
          ]}
        >
          <p>
            This is a game based on the mechanics of a nuclear fusion reactor. 
            It is built in two distinct sections, using very different paradigms: 
            a user interface built in React, which interacts with a canvas which visualises a 
            particle system. This app most accurately shows my current 
            skill level and interests.
          </p>
          <p>
            I used RxJS to create custom progress bars which can take inputs from 
            multiple streams and events, and React hooks to manage state. 
            On the visualisation side, I developed a OOP-based 3D particle system 
            physics engine, which is rendered using Three.js. The visualisation is 
            not a pure function of the UI state, which allows emergent properties to 
            arise from the particle system.
          </p>
          <p>
            This project enabled me to improve my skills across functional and functional 
            reactive programming, as well as ES6 class-based object-orientated programming. 
            It also involved theoretical knowledge, requiring a crash-course in physics 
            and trigonometry (greatly assisted by Daniel Shiffman’s &nbsp; 
            <a className="body-link" href="https://natureofcode.com/book/" target="_blank">
            The Nature of Code</a>), and an understanding of computer science principles.
          </p>
          <p>
            This was inspired by a &nbsp;
            <a 
              className="body-link" 
              href="https://www.youtube.com/watch?v=L0KuAx1COEk"
              target="_blank"
            >lecture</a>  I watched on the subject, but it isn’t 
            real plasma physics - plasma is obviously both too fast and small to 
            visualise like this, but a scientifically accurate implementation 
            wouldn’t be particularly fun. This is more an exercise in building 
            intuition. At present, the app shows something close to the end state 
            of a game in which users will built up the capabilities of the reactor 
            in order to confine the plasma.
          </p>
        </BodyCard>

        <BodyCard
          appearAt={200}
          title="Get the Flight Out"
          preview={GTFOPreview}
          tech={['react', 'redux', 'jest', 'js', 'node']}
          externalIcons={[
            {image: githubIcon, link: 'https://github.com/unhingingdog/GTFO' },
            {image: browserIcon, link: 'https://gtfo.travel'}
          ]}
        >
          <p>
            I hate planning trips to the airport. I always wondered why Google is able 
            to both plan a journey to the airport and show a flight status based on a 
            flight number, but it can’t just tell me when to leave my current location 
            based on my flight number alone. I found that that there are probably good
            reasons that they haven't created such a feature, but I managed to 
            successfully implement it in this app.
          </p>
          <p>
            It’s probably not economically viable as a consumer-facing application, 
            and will require a lot of hard coding in order to work outside of New 
            Zealand (airline industry data in neither abundant or developer-friendly). 
            However, it works for most flights in New Zealand. (e.g. JQ291 - a 
            Wellington to Christchurch flight).
          </p>
          <p>
            I wrote a backend in Express, which mashes together the user’s location, 
            flight data, and Google Maps trip data. The frontend is made with React 
            and Redux. I took a functional approach throughout the app. A significant 
            Google Maps price inspired me to use dependency injection, to enable me 
            to easily swap out the navigation and airline data sources if necessary.
          </p>
        </BodyCard>

        <BodyCard
          appearAt={200}
          title="Judgment Squid"
          preview={judgmentSquidPreview}
          tech={['react', 'redux', 'ethereum' ]}
          externalIcons={[
            {image: githubIcon, link:'https://github.com/unhingingdog/ResolveEthereumApp' },
            {image: browserIcon, link: 'https://resolve-eth-squid.herokuapp.com/'}
          ]}
        >
          <p>
            Judgment Squid is a decentralised arbitration application. The 
            back-end is built on Ethereum's Rinkeby test network, using the 
            Solidity programming language. The front-end was made using 
            React and Redux, with Semantic UI for the styling.
          </p>
          <p>
            Frameworks are available for this type of application, but to 
            me they seem unnecessarily complex and lag behind this rapidly 
            moving area of technology. I ran into several undocumented 
            problems and issues which I overcame by learning more about the 
            architecture of Ethereum, as well as details of lower-level 
            programming. Security didn’t seem to be a huge issue here given 
            the relative simplicity of the smart contracts.
          </p>
          <p>
            This project was inspired by a dispute resolution module I encountered 
            during a professional legal training course. I was surprised by 
            just how expensive and time consuming dispute resolution is. 
          </p>
        </BodyCard>

        <BodyCard
          appearAt={700}
          title="h12n.nz"
          preview={h12nScreenshot}
          tech={['react', 'css', 'webpack', 'photoshop']}
          externalIcons={[
            { image: githubIcon, link: 'https://github.com/unhingingdog/h12n' }
          ]}
        >
          <p>
            I decided to recreate the opening sequence of 2001: A Space Odyssey, 
            then turned it into my portfolio. The opening scene is just a series 
            of style recalculations based on the scrollY property. I would later 
            learn that setting state off scroll events is ill-advised. However, 
            the performance isn’t bad, so I’ve left it as is.
          </p>
          <p>
            I took the opportunity to learn how to use Webpack also, rather than
            using create-react-app.
          </p>
        </BodyCard>

        <BodyCard
          appearAt={200}
          title="Zipf"
          preview={zipfPreview}
          tech={['react', 'redux', 'jest', 'js']}
          externalIcons={[
            {image: githubIcon, link:'https://github.com/unhingingdog/Zipf' },
            {image: appStoreIcon, link: 'https://itunes.apple.com/us/app/zipf/id1366685837?mt=8&ign-mpt=uo%3D4'}
          ]}
        >
          <p>
            Zipf is a speed reading iOS app, built with React Native. 
            This was my first React project. (And other than a few crappy Rails 
            apps, my first real production app.) I came up with the idea years 
            before I wrote my first line of code, after reading James Gleick’s 
            book The Information (an excellent overview of information theory). 
            The frequency of words in all languages follows a "zipfian" 
            distribution - that is - "the frequency of a word is inversely 
            proportional to its ranking by frequency". The ten most common 
            words in the English language make up 25% of text. The 100 most 
            common words make up 50%. And so on. Zipf assumes that common 
            words contain less information, and weights the display time of 
            each word based on its frequency in the English language.
          </p>
          <p>
            I developed it using a test-driven process which allowed me to 
            more effectively learn both React and Redux. Setting up a test 
            environment in React Native was pretty difficult at the time, 
            given the lack of a native equivalent to JSDOM, but I otherwise 
            benefitted from the ecosystem’s good documentation. I write code 
            very differently theses days, but the app works exactly how I intended.
          </p>
        </BodyCard>

        <div className="body-copy background-text">
          <h1>A bit more about me.</h1>
          <p>
            I have a BA in Political Science and a law degree (LLB) 
            from the University of Canterbury. I have previously worked 
            as a graphic designer and copywriter, as well in a variety of 
            administrative positions in IT, finance, and government. I enjoy 
            doing multidisciplinary technical work, and learning from people 
            with different backgrounds and skillsets. 
          </p>
        </div>
      </div>
    )
  }
}




