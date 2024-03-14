import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Socailbtn.css'
function Socialbtn() {
  return (
    <div className="banner_container">
      <p className="banner-text">Join Our Wellness Community</p>
      <div className='banner'>
        <div className="social-icons">
          <a href="https://www.facebook.com/your-page" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/your-handle" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/your-company" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Socialbtn;
