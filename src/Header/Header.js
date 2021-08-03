import './Header.scss'
import React, {useState} from "react"
import {Link} from "react-router-dom"

function Header() {
  const baseURL = process.env.PUBLIC_URL + './assets/svg/';
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const getMobileMenu = () => {
    return showMobileMenu ? <div className='mobile-menu'>
      <Link className='about-button' to='/about' onClick={() => setShowMobileMenu(false)}>About Us</Link>
      <Link className='media-button' to='/media' onClick={() => setShowMobileMenu(false)}>Media</Link>
      <Link className='policy-button' to='/policy' onClick={() => setShowMobileMenu(false)}>Privacy Policy</Link>
      <Link className='terms-of-use-button' to='/terms-of-use' onClick={() => setShowMobileMenu(false)}>Terms of Use</Link>
      <Link className='subscription-button' to='/subscription' onClick={() => setShowMobileMenu(false)}>Subscription</Link>
      <Link className='contacts-button' to='/contacts' onClick={() => setShowMobileMenu(false)}>Contact Us</Link>
      <div className='social-icons'>
        <a className='snap-icon' href='https://lens.snapchat.com/537cf0c17c1b49c8abc2788fd0c04d30' target='_blank' rel='noreferrer'>
          <img src={baseURL + 'snap.svg'} alt=''/>
        </a>
        <a className='insta-icon' href='https://www.instagram.com/dzook_app/' target='_blank' rel='noreferrer'>
          <img src={baseURL + '/instagram.svg'} alt=''/>
        </a>
        <a className='tiktok-icon' href='https://www.tiktok.com/@dzook' target='_blank' rel='noreferrer'>
          <img src={baseURL + '/tiktok.svg'} alt=''/>
        </a>
        <a className='fb-icon' href='https://www.facebook.com/dzookapp' target='_blank' rel='noreferrer'>
          <img src={baseURL + '/fb.svg'} alt=''/>
        </a>
        <a className='tw-icon' href='https://twitter.com/3_dzook' target='_blank' rel='noreferrer'>
          <img src={baseURL + '/twitter.svg'} alt=''/>
        </a>
        <a className='ln-icon' href='https://www.linkedin.com/company/3-dzook/' target='_blank' rel='noreferrer'>
          <img src={baseURL + '/linkedin.svg'} alt=''/>
        </a>
        <a className='you-icon' href='https://www.youtube.com/channel/UCQzecEFTE6N4F34IoNIHd0w' target='_blank' rel='noreferrer'>
          <img src={baseURL + '/youtube.svg'} alt=''/>
        </a>
      </div>
    </div> : null;
  }

  const getMobileMenuIcon = () => {
    return showMobileMenu
      ? <img className='close-burger-menu' src={baseURL + 'close.svg'} alt=''
             onClick={() => setShowMobileMenu(!showMobileMenu)}/>
      : <img className='burger-menu' src={baseURL + 'burger.svg'} alt=''
             onClick={() => setShowMobileMenu(!showMobileMenu)}/>
  }

  return <div className="header">
    <div className="header-container">
      <div className="logo">
        <Link to='/'>
          <img className='logo-image' src={baseURL + 'logo.svg'} alt=''/>
        </Link>
        <div className='arrow-down'/>
      </div>
      <div className='menu'>
        {getMobileMenuIcon()}
        <Link className='about-button' to='/about'>About Us</Link>
        <div className='social-icons'>
          <a className='snap-icon' href='https://lens.snapchat.com/537cf0c17c1b49c8abc2788fd0c04d30' target='_blank' rel='noreferrer'>
            <img src={baseURL + 'snap.svg'} alt=''/>
          </a>
          <a className='insta-icon' href='https://www.instagram.com/dzook_app/' target='_blank' rel='noreferrer'>
            <img src={baseURL + 'instagram.svg'} alt=''/>
          </a>
          <a className='tiktok-icon' href='https://www.tiktok.com/@dzook' target='_blank' rel='noreferrer'>
            <img src={baseURL + 'tiktok.svg'} alt=''/>
          </a>
          <a className='fb-icon' href='https://www.fb.com/dzookapp' target='_blank' rel='noreferrer'>
            <img src={baseURL + 'fb.svg'} alt=''/>
          </a>
        </div>
      </div>
      {getMobileMenu()}
    </div>
  </div>
}

export default Header;
