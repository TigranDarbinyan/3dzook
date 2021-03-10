import React, {useState} from "react"
import './Gallery.scss'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

function Gallery() {
  const [overData, setOverData] = useState(null);
  const baseURL = process.env.PUBLIC_URL + '/assets/gallery/';
  const images = [
    baseURL + "01.jpg",
    baseURL + "02.jpg",
    baseURL + "03.jpg",
    baseURL + "04.jpg",
    baseURL + "05.jpg",
    baseURL + "06.jpg",
    baseURL + "07.jpg",
    baseURL + "08.jpg",
    baseURL + "09.jpg",
    baseURL + "10.jpg",
    baseURL + "11.jpg",
    baseURL + "12.jpg",
    baseURL + "13.jpg",
    baseURL + "14.jpg",
    baseURL + "15.jpg",
    baseURL + "16.jpg",
    baseURL + "17.jpg",
    baseURL + "18.jpg",
  ]

  const videos = [
    baseURL + "video_1.mp4",
    /*baseURL + "video_2.mp4",
    baseURL + "video_3.mp4",
    baseURL + "video_4.mp4"*/
  ]

  const showResult = () => {
    return;
    if (overData === null) {
      return null;
    }

    return <div className='result-pop-up' style={{
      top: `${overData[0]}px`,
      left: `${overData[1]}px`,
    }}>
      <div className='close'>&times;</div>
      <div className='result-container'>

      </div>
    </div>
  }

  return <div className='gallery'>
    <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
      <Masonry columnsCount={3} gutter="10px">
        {images.map((image, i) => (
          <img
            key={i}
            src={baseURL + (i + 1).toString() + '.jpg'}
            alt=""
            style={{width: "100%", display: "block"}}
            onMouseOver={e => e.target.src = baseURL + (i + 1).toString() + '_result.jpg'}
            onMouseOut={e => e.target.src = baseURL + (i + 1).toString() + '.jpg'}
          />
        ))}
        {
          videos.map((video, i) => (
            <video controls key={i} style={{width: "100%", display: "block"}}>
              <source src={video} type="video/mp4"/>
            </video>
          ))
        }
        {showResult()}
      </Masonry>
    </ResponsiveMasonry>
  </div>
}

export default Gallery;