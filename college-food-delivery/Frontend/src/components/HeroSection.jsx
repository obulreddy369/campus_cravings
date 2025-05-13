import { motion } from "framer-motion";
import { FaUtensils,FaSearch } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";
import { assets } from "../assets/assets";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery) {
      navigate(`/fooditems?search=${encodeURIComponent(trimmedQuery)}`);
    }
  };

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center w-full py-10 overflow-hidden text-center lg:h-[100vh]"
      style={{paddingBottom:"150px", paddingTop:"150px"}}
    >
      {/* Background Elements */}
      <div
        className="absolute inset-0 z-0 bg-center bg-cover opacity-100"
        style={{ backgroundImage: `url(${assets.back1})`,borderRadius: "15px" }}
      />

      {/* Content Container */}
      <div className="relative z-10 w-full gap-1.5">
        <AnimatedSection variants={fadeInUp}>
          <div className="px-4">
            <h1 className="pt-16 pb-2 text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-white"
            style={{ fontFamily: "'Great Vibes', cursive" }}>
              Campus Cravings:{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Fuel Your Studies!
              </span>
            </h1>

            <motion.p className="max-w-2xl mx-auto text-base text-white sm:text-lg md:text-xl sm:mb-12 hidden sm:block">
              Delicious food delivered right to your dorm or campus spot.
            </motion.p>
          </div>
        </AnimatedSection>

        <AnimatedSection
          variants={fadeInUp}
          className="max-w-2xl px-4 mx-auto mb-8 sm:mb-12"
        >
          <div className="relative flex items-center">
            <label htmlFor="search-input" className="sr-only">
              Search for campus eats
            </label>
            <FaUtensils className="absolute left-4 top-1/2 -translate-y-1/2 text-red-600 w-5 h-5" />
            <input
              id="search-input"
              type="text"
              placeholder="Search for your favorite campus eats..."
              className="w-full py-2 pl-12 pr-16 text-black placeholder-red-600 bg-white rounded-full shadow-sm sm:py-3 md:py-4 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 px-3 py-2 text-white transition-colors bg-red-600 rounded-full  hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              aria-label="Search"
            >
              <FaSearch className="w-4 h-4" />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HeroSection;
