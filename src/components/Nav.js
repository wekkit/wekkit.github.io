import React, { Component } from 'react'
import { Link } from 'react-scroll'

class Nav extends Component {
  render() {
    return (
      <div className='container'>
      <div className='row row-nav'>
          <Link activeClass="active" className='btn btn-primary' to="portfolio" smooth={true} offset={0} duration={500} >Portfolio</Link>
          <Link activeClass="active" className='btn btn-primary' to="resume" smooth={true} offset={75} duration={500} >Resume</Link>
          <Link activeClass="active" className='btn btn-primary' to="contact" smooth={true} offset={75} duration={500} >Contact</Link>
      </div>
      </div>
    )
  }
}

export default Nav
