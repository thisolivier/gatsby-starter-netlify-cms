import React from 'react'
import { Link } from 'gatsby'

import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content">
          <div className="container">
            <section className="menu">
              <ul className="menu-list">
                <li><Link to="/" className="navbar-item">Home</Link></li>
                <li><Link className="navbar-item" to="/about">About</Link></li>
                <li><Link className="navbar-item" to="/contact/examples">Form Examples</Link></li>
                <li>
                    <a className="navbar-item" href="/admin/" target="_blank" rel="noopener noreferrer">
                      Admin
                    </a>
                </li>
              </ul>
            </section>
          </div>
          <section>
            <ul className="menu-list">
            <li>
              <Link className="navbar-item" to="/blog">
                Latest Stories
              </Link>
            </li>
            <li>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </li>
            </ul>
          </section>
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
