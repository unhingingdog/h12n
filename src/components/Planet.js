import React, { Component } from 'react'
import earth from '../assets/images/earth.gif'

export default class Planet extends Component {
  constructor(props) {
    super(props)

    this.planetShine = this.planetShine.bind(this)
    this.planetShadowSpread = this.planetShadowSpread.bind(this)
    this.planetShadowHeight = this.planetShadowHeight.bind(this)
    this.planetShadowWidth = this.planetShadowWidth.bind(this)
  }

  planetShine() {
    const { scrolled } = this.props
    if(scrolled > 7) return 0
    return scrolled < 3.5 ? scrolled * -2 : (3.5 - (scrolled - 3.5)) * -2
  }

  planetShadowSpread() {
    const { scrolled } = this.props
    return `0px -5px
            ${20 + scrolled/8}px
            ${10 + scrolled/10}px
            rgb(35, 35, 35)`
  }

  planetShadowHeight() {
    const { scrolled } = this.props
    return `${92 - (scrolled / 2)}%`
  }

  planetShadowWidth() {
    const { scrolled } = this.props
    return `${30 + scrolled/10}vw`
  }

  render() {
    const { scrolled } = this.props
    const planetShine = this.planetShine()
    console.log(scrolled)

    return(
      <div style={styles.outer}>
        <div style={{
          background: 'rgba(109, 145, 145, 0.65)',
          width: '30vw',
          height: '30vw',
          borderRadius: '50%',
          boxShadow: `0 ${5 + planetShine}px 10px rgb(255, 221, 56),
                      0 ${3 + planetShine * 0.8}px 5px white`
        }}></div>
        <div style={{
          position: 'relative',
          background: `rgb(35, 35, 35)`,
          width: this.planetShadowWidth(),
          height: '27vw',
          borderRadius: '50%',
          bottom: this.planetShadowHeight(),
          boxShadow: this.planetShadowSpread()
        }}></div>
      </div>
    )
  }
}

const styles = {
  outer: {
    backgroundImage: `url(${earth})`,
    backgroundSize: 'contain',
    width: '30vw',
    height: '30vw',
    borderRadius: '50%',
    marginTop: '85vh',
    zIndex: 1
  }
}
