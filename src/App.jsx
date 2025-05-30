import "@/styles/global.css";
import AddEvents from "@/sections/AddEvents";
import ArtOrganizations from "@/sections/ArtOrganization";
import BrandFeatured from "@/sections/BrandFeature";
import CityGuides from "@/sections/CityGuides";
import Footer from "@/sections/Footer";
import GoBackstage from "@/sections/GoBackstage";
import Hero from "@/sections/Hero";
import Hero2 from "@/sections/Hero2";
import LatestNews from "@/sections/LatestNews";
import PerformanceSpotlights from "@/sections/PerformanceSpotlights";
import PopularEvents from "@/sections/PopularEvents";
import Navbar from "@/subcomponents/Navbar";

import addEventsImage from "@/assets/images/add-events/add_events_1.png";
import goBackstageImage from "@/assets/images/go-back-stage/back-stage.png";
import brandFeaturedImage from "@/assets/images/brand-featured/brand_featured_1.png";

function App() {
  return (
    <div className="bg-black">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Hero></Hero>
        <CityGuides></CityGuides>
        <PopularEvents></PopularEvents>
        <PerformanceSpotlights></PerformanceSpotlights>
        <ArtOrganizations></ArtOrganizations>
        <GoBackstage image={goBackstageImage}></GoBackstage>
        <LatestNews></LatestNews>
        <AddEvents image={addEventsImage}></AddEvents>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
