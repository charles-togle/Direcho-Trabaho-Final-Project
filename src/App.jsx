import './App.css'
import AddEvents from './sections/AddEvents'
import ArtOrganizations from './sections/ArtOrganization'
import BrandFeatured from './sections/BrandFeature'
import CityGuides from './sections/CityGuides'
import Footer from './sections/Footer'
import GoBackstage from './sections/GoBackstage'
import Hero from './sections/Hero'
import Hero2 from './sections/Hero2'
import LatestNews from './sections/LatestNews'
import PerformanceSpotlights from './sections/PerformanceSpotlights'
import PopularEvents from './sections/PopularEvents'

function App () {
  return (
    <div>
      <Hero></Hero>
      <BrandFeatured></BrandFeatured>
      <CityGuides></CityGuides>
      <PopularEvents></PopularEvents>
      <PerformanceSpotlights></PerformanceSpotlights>
      <ArtOrganizations></ArtOrganizations>
      <GoBackstage></GoBackstage>
      <LatestNews></LatestNews>
      <Hero2></Hero2>
      <AddEvents></AddEvents>
      <Footer></Footer>
    </div>
  )
}

export default App
