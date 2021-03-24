import React, {useState} from "react"
import './Gallery.scss'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

function Gallery() {
  const [selectedURL, setSelectedURL] = useState(null);
  const baseURL = process.env.PUBLIC_URL + '/assets/gallery/';
  const itemsCount = 54;
  const videoIndexes = [11, 15, 19, 26, 35, 42, 49];

  const showResult = () => {
    if (selectedURL === null) {
      return null;
    }

    return <div className='result-pop-up'>
      <div className='result-container'>
        <div className='close' onClick={() => setSelectedURL(null)}>&times;</div>
        <div className='result'>
          <img src={selectedURL} alt=''/>
        </div>
      </div>
    </div>
  }

  const getGalleryItems = () => {
    const items = [];

    for (let i = 1; i <= itemsCount; ++i) {
      if (videoIndexes.indexOf(i) === -1) {
        items.push(<img
          key={i}
          src={baseURL + (i).toString() + '_result.jpg'}
          alt=""
          style={{width: "100%", display: "block"}}
          onMouseOver={e => e.target.src = baseURL + (i).toString() + '.jpg'}
          onMouseOut={e => e.target.src = baseURL + (i).toString() + '_result.jpg'}
          onClick={() => setSelectedURL(baseURL + (i).toString() + '_result.jpg')}
        />)
      } else {
        items.push(
          <video controls autoPlay={true} muted={true} key={i} style={{width: "100%", display: "block"}}>
            <source src={baseURL + (i).toString() + '.mov'} type="video/mp4"/>
          </video>
        )
      }
    }

    return items;
  }

  return <div className='gallery'>
    <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
      <Masonry columnsCount={3} gutter="10px">
        {getGalleryItems()}
        {showResult()}
      </Masonry>
    </ResponsiveMasonry>
  </div>
}

export default Gallery;