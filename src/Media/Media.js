import './Media.scss'
import React from "react"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import DOMPurify from "dompurify";

function Media({data}) {
  const pageHTMLContent = data && data[0] ? data[0].content : '';
  const safeHTML = DOMPurify.sanitize(pageHTMLContent);

  const getContent = () => {
    return <div className='media-item-content-container'>
      <div dangerouslySetInnerHTML={{ __html: safeHTML }} />
    </div>
  }

  const svgURL = process.env.PUBLIC_URL + './assets/svg/';
  const imageURL = process.env.PUBLIC_URL + '/assets/images/';
  const mediaData = [
    {
      name: 'webapp',
      day: 'January 1, 2021',
      desc: '“ Whatever you choose to do is up to you, but one thing is for sure – dzook is fun! “'
    },
    {
      name: 'gen',
      day: 'July 7, 2020',
      desc: '“ Dzook is an AI that draws you a portrait from any photo... “'
    },
    {
      name: 'know',
      day: 'August 12, 2020',
      desc: '“ Maybe you thought it took hundreds of dollars to commission an artist to do so but did you know you can do it with one click? “'
    },
    {
      name: 'poyn',
      day: 'October 26, 2020',
      desc: '“ Polish up your photo head shot into a free illustration with Dzook ” '
    }
  ]

  const getMediaItem = index => {
    return <div className="media-item">
      <div className='media-item-content-container'>
        <div className='media-item-header'>
          <img src={imageURL + mediaData[index]['name'] + '.png'} alt=''/>
          <div className="day">{mediaData[index]['day']}</div>
        </div>
        <div className='media-item-content'>
          <p>{mediaData[index]['desc']}</p>
        </div>
      </div>
    </div>
  }

  return <div className="media">
    <Header/>
    <div className='media-container'>
      <p className="title">Media about us</p>
      <div className='media-items-container'>
        {getMediaItem(0)}
        {getMediaItem(1)}
        {getMediaItem(2)}
        {getMediaItem(3)}
      </div>
      <div className='partners'>
        <img src={imageURL + 'eu4.png'} alt=''/>
        <img src={imageURL + 'giz.png'} alt=''/>
        <a className='partner-snap' href='https://lens.snapchat.com/537cf0c17c1b49c8abc2788fd0c04d30' target='_blank' rel='noreferrer'>
          <img src={svgURL + 'snap_partner.svg'} alt=''/>
        </a>
      </div>
    </div>
    <Footer/>
  </div>
}

export default Media;
