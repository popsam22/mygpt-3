import React from 'react'
import gpt3Logo from '../../assets/logo.svg'
import './footer.css'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1>We can step into the future before others with GPT-3</h1>
      </div>
      <div className='gpt3__footer-button'>
          <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt="logo" />
          <p>12, Broad Street, Safe Road, Maryland. All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Social Media</p>
          <p>Contact</p>
          <p>Portfolio</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Contact</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>12, Broad Street, Safe Road, Maryland.</p>
          <p>784-6654-2239</p>
          <p>info@samuel.com</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>&#169; 2022 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer