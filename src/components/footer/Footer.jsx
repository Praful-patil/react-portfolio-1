import React from 'react'
import './footer.css'
import {GrFacebookOption} from 'react-icons/gr'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Praful</a>

      <ul className='permalinks'>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Experience</a></li>
        <li><a href="">Services</a></li>
        <li><a href="">Portfolio</a></li>
        <li><a href="">Testimonial</a></li>
        <li><a href="">Contact</a></li>
      </ul>


      <div className="footer__socials">
        <a href="https://facebook.com"><GrFacebookOption/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; EGATOR Tutorials. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer