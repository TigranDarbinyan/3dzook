import React, {useState} from "react"
import './Gallery.scss'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

function Gallery() {
  const [selectedData, setSelectedData] = useState(null);
  const baseURL = process.env.PUBLIC_URL + '/assets/gallery/';
  const itemsCount = 54;
  const videoIndexes = [11, 15, 19, 26, 35, 42, 49];

  const showResult = () => {
    return;
    if (selectedData === null) {
      return null;
    }

    return <div className='result-pop-up' style={{
      top: `${selectedData[0]}px`,
      left: `${selectedData[1]}px`,
    }}>
      <div className='close'>&times;</div>
      <div className='result-container'>

      </div>
    </div>
  }

  const getGalleryItems = () => {
    const items = [];

    for (let i = 1; i <= itemsCount; ++i) {
      if (videoIndexes.indexOf(i) === -1) {
        items.push(<img
          key={i}
          src={baseURL + (i).toString() + '.jpg'}
          alt=""
          style={{width: "100%", display: "block"}}
          onMouseOver={e => e.target.src = baseURL + (i).toString() + '_result.jpg'}
          onMouseOut={e => e.target.src = baseURL + (i).toString() + '.jpg'}
        />)
      } else {
        items.push(
          <video controls key={i} style={{width: "100%", display: "block"}}>
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