import './Footer.scss'
import React from "react"
import {Link} from "react-router-dom"

function Footer() {
  const baseURL = process.env.PUBLIC_URL + '/assets/';

  return <div className="footer">
    <div className='footer-container'>
      <div className='links'>
        <div className='menu'>
          <Link className='about-button' to='/about'>About Us</Link>
          <Link className='media-button' to='/media'>Media</Link>
          <Link className='policy-button' to='/policy'>Privacy Policy</Link>
          <Link className='contacts-button' to='/contacts'>Contact Us</Link>
        </div>
        <div className='social-icons'>
          <a href='https://www.instagram.com/dzook_app/' target='_blank' rel='noreferrer'>
            <img src={baseURL + 'svg/instagram.svg'} alt=''/>
          </a>
          <a href='https://www.fb.com/3dzookgifts' target='_blank' rel='noreferrer'>
            <img src={baseURL + 'svg/fb.svg'} alt=''/>
          </a>
          <a href='https://www.tiktok.com/@dzook' target='_blank' rel='noreferrer'>
            <img src={baseURL + 'svg/tiktok.svg'} alt=''/>
          </a>
        </div>
      </div>
      <div className='mobile-apps'>
        <a href='https://apps.apple.com/us/app/dzook-animation-avatar-maker/id1508330098' target='_blank' rel='noreferrer'>
          <img src={baseURL + 'images/ios.png'} alt=''/>
        </a>
        <a href='https://play.google.com/store/apps/details?id=ai.dzook.android' target='_blank' rel='noreferrer'>
          <img src={baseURL + 'images/android.png'} alt=''/>
        </a>
      </div>
    </div>
    <div className='copyright'>
      © 2019 3dzook, Inc. All rights reserved.
    </div>
  </div>
}

export default Footer;
