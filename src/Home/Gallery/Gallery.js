import React, {useState} from "react"
import './Gallery.scss'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

function Gallery() {
  const [selectedURL, setSelectedURL] = useState(null);
  const baseURL = process.env.PUBLIC_URL + '/assets/gallery/';
  const itemsCount = 54;
  const videoIndexes = [5, 11, 15, 19, 26, 35, 42, 49];
  const userNames = ['eliza_m', '@natan_yu', '@alex_Li', '@john_ju', '@agatha_na', '@sam_Ik', '@mark_ju', '@sash_fb', '@Rainbow_ji', '@Lil_br', '@flower_ey', '@elo_mi', '@nar_qr', '@splash_nu', '@kirk_st', '@dofha_ds', '@evan_re', '@dor_mk', '@kar_yu', '@choi_ar', '@charlie_dp', '@paige_vc', '@ryan_mo', '@irigy_on', '@erin_xe', '@carie_an', '@cher_zw', '@jay_jy', '@kim_al', '@mattew_ho', '@conan_wq', '@daniel_by', '@allison_dt', '@kanw_cz', '@george_ol', '@fireman_re', '@robin_kj', '@sole_sd', '@phil_js', '@sunday_ht', '@grady_ma', '@pooja_zr', '@sat_ya', '@niall_af', '@shaan_jd', '@sell_qp', '@aaron_er', '@matt_wa', '@zack_hd', '@chase_xk', '@ian_ag', '@ian_ag', '@sell_qp', '@kim_al', '@kim_al', '@sole_sd', '@robin_kj', '@pooja_zr'];
  const styleNames = ['Anime Style', 'Glam Style', 'Glam Style', 'Glam Style', 'Glam Style', 'Arty Style', 'Anime Style', 'Group Glam', 'Glam Style', 'Glam Style', 'Anime Style', 'Glam Style', 'ToonMe Style', 'Group Glam', 'Anime Style', 'Glam Style', 'Group Glam', 'Glam Style', 'Glam Style', 'Glam Style', 'Arty Style', 'ToonMe Style', 'Glam Style', 'Glam Style', 'Glam Style', 'Anime Style', 'Glam Style', 'Glam Style', 'Anime Style', 'Glam Style', 'Arty Style', 'Anime Style', 'Glam Style', 'Glam Style', 'Group Style', 'ToonMe Style', 'Anime Style', 'Glam Style', 'Arty Style', 'Glam Style', 'Glam Style', 'Anime Style', 'Glam Style', 'Glam Style', 'Arty Style', 'Anime Style', 'Glam Style', 'Glam Style', 'Arty Style', 'Anime Style', 'Glam Style', 'Glam Style', 'Glam Style', 'Group Style', 'Anime Style', 'Glam Style', 'Arty Style', 'ToonMe Style', 'Arty Style'];

  const showResult = () => {
    if (selectedURL === null) {
      return null;
    }

    const nameIndex = parseInt(selectedURL.match(/\d+/g)[0]) - 1;

    return <div className='result-pop-up'>
      <div className='result-container'>
        <div className='close' onClick={() => setSelectedURL(null)}>&times;</div>
        <div className='result'>
          <img src={selectedURL} alt=''/>
          <div className='user-info'>
            <div className='user-name'>{userNames[nameIndex]}</div>
            <div className='style-name'>{styleNames[nameIndex]}</div>
          </div>
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