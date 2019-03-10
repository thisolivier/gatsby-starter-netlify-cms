import React from 'react'
import { Link } from 'gatsby'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content">
          <h3><Link className="navbar-item" to="/about">About</Link></h3>
          <h3>Contact</h3>
          <a title="facebook" href="https://facebook.com">
            <img 
              src={facebook}
              alt="Facebook"
            />
          </a>
          <a title="instagram" href="https://instagram.com">
            <img
            src={instagram}
            alt="Instagram"
            />
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer
