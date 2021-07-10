import './Home.scss'
import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Gallery from "./Gallery/Gallery"

function Home() {
  const baseURL = process.env.PUBLIC_URL + '/assets/';

  const getAboutBlock = () => {
    return <div className='about-3dzook'>
      <a className='snap-partner' href='https://lens.snapchat.com/537cf0c17c1b49c8abc2788fd0c04d30' target='_blank' rel='noreferrer'>
        <img className='snap-partner-svg' src={baseURL + 'svg/snap_partner.svg'} alt=''/>
      </a>
      <p>Create artistic <br/> version of yourself!</p>
      <div className='one-click'>One click artworks</div>
      <img className='heart' src={baseURL + 'images/heart.png'} alt=''/>
      <img className='arrow' src={baseURL + 'images/arrow.png'} alt=''/>
    </div>
  }

  const getMobileAppsBlock = () => {
    return <div className='mobile-apps'>
      <div className='mobile-apps-container'>
        <a href='https://apps.apple.com/us/app/dzook-animation-avatar-maker/id1508330098' target='_blank'
           rel='noreferrer' id='ios-app-header'>
          <img src={baseURL + 'images/ios.png'} alt=''/>
        </a>
        <a href='https://play.google.com/store/apps/details?id=ai.dzook.android' target='_blank'
           rel='noreferrer' id='android-app-header'>
          <img src={baseURL + 'images/android.png'} alt=''/>
        </a>
      </div>
    </div>
  }

  return <div className="home">
    <Header/>
    <div className='background-top'/>
    <div className='home-container'>
      <div className="top-block">
        {getAboutBlock()}
        {getMobileAppsBlock()}
      </div>
      <Gallery/>
    </div>
    <Footer/>
  </div>
}

export default Home;
