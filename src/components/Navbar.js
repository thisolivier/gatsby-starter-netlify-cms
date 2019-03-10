import React from 'react'
import { Link } from 'gatsby'
import PoetryPageListings from '../components/PoetryPageListings'

const Navbar = class extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $menus = Array.prototype.slice.call(
      document.querySelectorAll('.menu-link'),
      0
    )
    // Check if there are any navbar burgers
    if ($menus.length > 0) {
      // Add a click event on each of them
      $menus.forEach(el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target
          const $target = document.getElementById(target)
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active')
          $target.classList.toggle('is-active')
        })
      })
    }
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              Sapiosexual
            </Link>
            {/* Hamburger menu */}
            <div className="menu-link" data-target="navMenu">
              Menu
            </div>
          </div>
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start has-text-centered">
              <Link to="/" className="navbar-item">
                Home
              </Link>
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <PoetryPageListings />
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <a className="navbar-item" href="/admin/" target="_blank" rel="noopener noreferrer">
                Admin
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
