import './Home.scss'
import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

function Home() {
  const baseURL = process.env.PUBLIC_URL + '/assets/';

  const getAboutBlock = () => {
    return <div className='about-3dzook'>
      <p>Create artistic <br/> version of yourself!</p>
      One click artworks
      <img className='heart' src={baseURL + 'images/heart.png'} alt=''/>
      <img className='arrow' src={baseURL + 'images/arrow.png'} alt=''/>
    </div>
  }

  const getMobileAppsBlock = () => {
    return <div className='mobile-apps'>
      <div className='mobile-apps-container'>
        <a href='https://apps.apple.com/us/app/dzook-animation-avatar-maker/id1508330098' target='_blank'
           rel='noreferrer'>
          <img src={baseURL + 'images/ios.png'} alt=''/>
        </a>
        <a href='https://play.google.com/store/apps/details?id=ai.dzook.android' target='_blank' rel='noreferrer'>
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
    </div>
    <Footer/>
  </div>
}

export default Home;
