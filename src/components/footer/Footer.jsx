import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {ImInstagram} from 'react-icons/im'
import {FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>GTNI</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiences">Experiences</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://facebook.com"><ImInstagram /></a>
        <a href="https://facebook.com"><FaTwitterSquare /></a>

      </div>
      <div className="footer__copyright">
        <small>&copy; GTNI Sites. All Rights REserved</small>
      </div>
    </footer>
  )
}

export default Footer