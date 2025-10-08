import React from 'react'
import './Footerpage.css'

function Footerpage() {
  return (
    <div>
      <footer class="footer">
    <div class="footer-logo">rhode</div>

    <div class="footer-content">
      <div class="footer-column subscribe">
        <p class="subscribe-text">Join us on the rhode to an effortless glow.</p>
        <p>Glaze your inbox with tips, tricks & exclusive content from Hailey.</p>
        <form class="subscribe-form">
          <input type="email" placeholder="Email Address" required/>
          <button type="submit">SUBSCRIBE</button>
        </form>
        <p class="privacy-note">By signing up, you agree to our <a href="#">Privacy Policy</a>*.</p>
      </div>

      <div class="footer-column">
        <h4>NAVIGATE</h4>
        <ul>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Our Story</a></li>
          <li><a href="#">Rhode Futures</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h4>SOCIAL</h4>
        <ul>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">YouTube</a></li>
          <li><a href="#">TikTok</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h4>OFFICIAL</h4>
        <ul>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Accessibility</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Events</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h4>SUPPORT</h4>
        <p>We're here M–F 9am – 5pm PST.</p>
        <p><a href="#">Drop us a note anytime.</a></p>
        <p><a href="#">Do Not Sell or Share My Personal Information</a></p>
        <p><a href="#">Cookie Preferences</a></p>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© rhode 2025</p>
    </div>
  </footer>
    </div>
  )
}

export default Footerpage
