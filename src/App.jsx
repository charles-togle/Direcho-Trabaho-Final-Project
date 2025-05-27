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

function App() {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Hero></Hero>
        <AddEvents />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
