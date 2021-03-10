import './Header.scss'
import React from "react"
import {Link} from "react-router-dom"

function Header() {
  const baseURL = process.env.PUBLIC_URL + './assets/svg/';

  return <div className="header">
    <div className="header-container">
      <div className="logo">
        <Link to='/'>
          <img src={baseURL + 'logo.svg'} alt=''/>
        </Link>
        <div className='arrow-down'/>
      </div>
      <div className='menu'>
        <Link className='about-button' to='/about'>About Us</Link>
        <div className='social-icons'>
          <a href='https://www.instagram.com/dzook_app/' target='_blank' rel='noreferrer'>
            <img src={baseURL + 'instagram.svg'} alt=''/>
          </a>
          <a href='https://www.fb.com/3dzookgifts' target='_blank' rel='noreferrer'>
            <img src={baseURL + 'fb.svg'} alt=''/>
          </a>
          <a href='https://www.tiktok.com/@dzook' target='_blank' rel='noreferrer'>
            <img src={baseURL + 'tiktok.svg'} alt=''/>
          </a>
        </div>
      </div>
    </div>
  </div>
}

export default Header;
