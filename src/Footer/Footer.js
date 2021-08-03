import './Footer.scss'
import React from "react"
import {Link} from "react-router-dom"

function Footer() {
  const baseURL = process.env.PUBLIC_URL + '/assets/';

  const toTop = () => window.scrollTo(0, 0);

  return <div className="footer">
    <div className='footer-container'>
      <div className='links'>
        <div className='menu'>
          <Link className='about-button' to='/about' onClick={toTop}>About Us</Link>
          <Link className='media-button' to='/media' onClick={toTop}>Media</Link>
          <Link className='policy-button' to='/policy' onClick={toTop}>Privacy Policy</Link>
          <Link className='terms-of-use-button' to='/terms-of-use' onClick={toTop}>Terms of Use</Link>
          <Link className='subscription-button' to='/subscription' onClick={toTop}>Subscription</Link>
          <Link className='contacts-button' to='/contacts' onClick={toTop}>Contact Us</Link>
        </div>
        <div className='social-icons'>
          <a className='insta-icon' href='https://www.instagram.com/dzook_app/' target='_blank' rel='noreferrer'>
            <img src={baseURL + 'svg/instagram.svg'} alt=''/>
          </a>
          <a className='tiktok-icon' href='https://www.tiktok.com/@dzook' target='_blank' rel='noreferrer'>
            <img src={baseURL + 'svg/tiktok.svg'} alt=''/>
          </a>
          <a className='fb-icon' href='https://www.facebook.com/dzookapp' target='_blank' rel='noreferrer'>
            <img src={baseURL + 'svg/fb.svg'} alt=''/>
          </a>
          <a className='tw-icon' href='https://twitter.com/3_dzook' target='_blank' rel='noreferrer'>
            <img src={baseURL + 'svg/twitter.svg'} alt=''/>
          </a>
          <a className='ln-icon' href='https://www.linkedin.com/company/3-dzook/' target='_blank' rel='noreferrer'>
            <img src={baseURL + 'svg/linkedin.svg'} alt=''/>
          </a>
          <a className='you-icon' href='https://www.youtube.com/channel/UCQzecEFTE6N4F34IoNIHd0w' target='_blank' rel='noreferrer'>
            <img src={baseURL + 'svg/youtube.svg'} alt=''/>
          </a>
          <a className='snap-icon' href='https://lens.snapchat.com/537cf0c17c1b49c8abc2788fd0c04d30' target='_blank' rel='noreferrer'>
            <img src={baseURL + 'svg/snap.svg'} alt=''/>
          </a>
        </div>
      </div>
      <div className='mobile-apps'>
        <a className='ios-button' href='https://apps.apple.com/us/app/dzook-animation-avatar-maker/id1508330098' target='_blank' rel='noreferrer'>
          <img src={baseURL + 'images/ios.png'} alt='' id='ios-app-footer'/>
        </a>
        <a className='android-button' href='https://play.google.com/store/apps/details?id=ai.dzook.android' target='_blank' rel='noreferrer'>
          <img src={baseURL + 'images/android.png'} alt='' id='ios-app-footer'/>
        </a>
      </div>
    </div>
    <div className='copyright'>
      © 2019 3dzook, Inc. All rights reserved.
    </div>
  </div>
}

export default Footer;
