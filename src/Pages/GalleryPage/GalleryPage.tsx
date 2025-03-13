

import AllPhotos from '../../pagesComponents/Gallery/AllPhotos/AllPhotos'
import Gallery from '../../pagesComponents/Gallery/GalleryHeader/Gallery'
import GalleryLayout from '../../pagesComponents/Gallery/GalleryLayout/GalleryLayout'

const GalleryPage = () => {
  return (
    <div>
        <Gallery/>
        <GalleryLayout/>
        <AllPhotos/>
      
    </div>
  )
}

export default GalleryPage
