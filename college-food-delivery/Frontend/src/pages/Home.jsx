import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturedSection from "../components/FeaturedSection";
import InfoSections from "../components/InfoSections";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="w-full py-8 bg-white">
      <Navbar />
      <HeroSection />
      <FeaturedSection />
      <InfoSections />
      <Footer />
    </div>
  );
};

export default Home;
