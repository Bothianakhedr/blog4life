import BrandOfDream from '../../HomeComponents/Hom2/BrandOfDream/BrandOfDream'
import HomeHeader from '../../HomeComponents/Hom2/HomeHeader/HomeHeader'
import OurGallery from '../../HomeComponents/Hom2/OurGallery/OurGallery'
import RecentPosts from '../../HomeComponents/Hom2/RecentPosts/RecentPosts'
import RecommendedByExperts from '../../HomeComponents/Hom2/RecommendedByExports/Recommended by Experts'

const Home2 = () => {
  return (
    <div>
      <HomeHeader/>
      <RecommendedByExperts/>
      <RecentPosts/>
      <BrandOfDream/>
      <OurGallery/>
    </div>
  )
}

export default Home2
