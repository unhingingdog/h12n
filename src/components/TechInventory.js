import React, { Component } from 'react'

import cssIcon from '../assets/images/css-logo.png'
import jsIcon from '../assets/images/js-logo.png'
import webpackIcon from '../assets/images/webpack-logo.png'
import photoshopIcon from '../assets/images/photoshop-logo.png'
import ethIcon from '../assets/images/ethIcon.png'
import threeIcon from '../assets/images/threeIcon.png'
import rxjsIcon from '../assets/images/rxjsIcon.png'
import reactIcon from '../assets/images/react.png'
import reduxIcon from '../assets/images/redux.png'
import nodeIcon from '../assets/images/node-icon.png'
import jestIcon from '../assets/images/jest.png'

export default class TechInventory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentLabel: ''
        }

        this.eventHandler = this.eventHandler.bind(this)
    }

    eventHandler(e) {
        const { id: currentLabel } = e.target

        switch(e.type) {
            case 'mouseenter':
                this.setState(() => ({ currentLabel }))
                break
            case 'mouseleave':
                this.setState(() => ({ currentLabel: '' }))
                break
            case 'click':
                this.setState(() => ({ currentLabel }))
                break
            default:
                break
        } 
    }

    render() {
        const { techUsed } = this.props
        const { currentLabel } = this.state

        return(
            <div className="tech-icon-container">
                <p className="tech-icon-label">
                    Significant use of {currentLabel}
                </p>
                <div className="tech-icons body-card-item">
                    {techUsed.map((value) =>
                        <div className="tech-icon-container-mobile">
                            <img
                                onMouseEnter={this.eventHandler}
                                onMouseLeave={this.eventHandler}
                                onClick={this.eventHandler}
                                id={techData[value].label}
                                src={techData[value].icon}
                                className="tech-icon"
                                key={value}
                            />
                            <p className="tech-icon-label-mobile">
                                {
                                    currentLabel === techData[value].label ? 
                                        currentLabel : ''
                                }
                            </p>
                        </div>
                    )}
                </div>
        </div>
        )
    }
}

const techData = {
    js: {
      icon: jsIcon,
      label: 'ES6'
    },
    react: {
      icon: reactIcon,
      label: 'React'
    },
    redux: {
      icon: reduxIcon,
      label: 'Redux'
    },
    node: {
      icon: nodeIcon,
      label: 'Node.js'
    },
    jest: {
      icon: jestIcon,
      label: 'Jest'
    },
    css: {
      icon: cssIcon,
      label: 'CSS3'
    },
    webpack: {
      icon: webpackIcon,
      label: 'Webpack'
    },
    photoshop: {
      icon: photoshopIcon,
      label: 'Photoshop'
    },
    ethereum: {
      icon: ethIcon,
      label: 'Ethereum'
    },
    rxjs: {
      icon: rxjsIcon,
      label: 'RxJS'
    },
    three: {
      icon: threeIcon,
      label: 'Three.js'
    }
  }