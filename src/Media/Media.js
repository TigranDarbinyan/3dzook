import './Media.scss'
import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

function Media() {
  const imageURL = process.env.PUBLIC_URL + '/assets/images/';

  const getMediaItem = name => {
    return <div className="media-item">
      ITEM
    </div>
  }

  return <div className="media">
    <Header/>
    <div className='media-container'>
      <p className="title">Media about us</p>
      <div className='media-items-container'>
        {getMediaItem()}
        {getMediaItem()}
        {getMediaItem()}
        {getMediaItem()}
        {getMediaItem()}
        {getMediaItem()}
      </div>
    </div>
    <Footer/>
  </div>
}

export default Media;
