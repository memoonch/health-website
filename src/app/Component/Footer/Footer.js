import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <nav>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
        </nav>
        <p className="copyright">© 2024 Health & Wellness Blog. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
