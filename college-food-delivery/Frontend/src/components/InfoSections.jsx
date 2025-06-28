import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import {
  FaWallet,
  FaTruck,
  FaPercent,
  FaUtensils,
  FaShippingFast,
  FaGraduationCap,
} from "react-icons/fa";
import {
  assets,
  restaurentsData
} from "../assets/assets";

// Motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// -----------------------------------------------------------------------------
// Testimonials Carousel Component using StudentReviews dataset
// -----------------------------------------------------------------------------
const Testimonial = () => {
  // Use StudentReviews directly as our testimonials data.
  const reviews = StudentReviews;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Scroll to top on mount (if needed)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Function to update testimonial with fade transition
  const changeReview = (newIndex) => {
    setOpacity(0); // fade out
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setOpacity(1); // fade in
    }, 300);
  };

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? reviews.length - 1 : currentIndex - 1;
    changeReview(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === reviews.length - 1 ? 0 : currentIndex + 1;
    changeReview(newIndex);
  };

  // Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50; // Minimum swipe distance
    if (diff > threshold) {
      handleNext();
    } else if (diff < -threshold) {
      handlePrevious();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const currentReview = reviews[currentIndex];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left side - Decorative image */}
        <div className="relative w-full md:w-1/2">
          <div className="relative w-[300px] h-[300px] mx-auto">
            <div className="absolute inset-0 bg-[#4CAF50] rounded-full">
              <img
                src="https://images.unsplash.com/photo-1600878459138-e1123b37cb30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80"
                alt="Chef with food"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Right side - Testimonial content with swipe & fade transition */}
        <div
          className="w-full md:w-1/2"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ transition: "opacity 0.3s ease", opacity }}
        >
          <h2 className="text-4xl font-bold mb-8">
            What Students Say About{" "}
            <span className="text-[#FF5722]">Campus Cravings</span>
          </h2>

          <p className="text-gray-600 mb-8">{currentReview.review}</p>

          {/* Profile section */}
          <div className="flex items-center gap-6 mb-8">
            <img
              src={currentReview.image}
              alt={currentReview.name}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h3 className="text-xl font-bold">{currentReview.name}</h3>
              <p className="text-gray-500">{currentReview.major} Major</p>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex gap-4">
            <button
              onClick={handlePrevious}
              className="p-4 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            >
              <motion.div whileHover={{ scale: 1.1 }}>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.293 16.293a1 1 0 010-1.414L15.586 11H4a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
                </svg>
              </motion.div>
            </button>
            <button
              onClick={handleNext}
              className="p-4 rounded-full bg-[#FF5722] text-white hover:bg-[#F4511E] transition-colors"
            >
              <motion.div whileHover={{ scale: 1.1 }}>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M7.707 16.293a1 1 0 010-1.414L11 11H0a1 1 0 110-2h11l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" />
                </svg>
              </motion.div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// -----------------------------------------------------------------------------
// Main InfoSection Component
// -----------------------------------------------------------------------------
const InfoSection = () => {
  // Placeholder for handling campus spot click events
  const handleOnClick = (id) => {
    console.log("Campus spot clicked:", id);
  };

  return (
    <div>

        {/* Popular Campus Spots */}
        <AnimatedSection
        className="py-16 bg-gradient-to-b from-orange-50 to-gray-100 w-full"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-red-600 bg-clip-text text-center">
          Campus Spots
        </h2>
        <div className="min-h-screen p-2">
          <div className="mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
              {restaurentsData.slice(0, 8).map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
                  onClick={() => handleOnClick(item.id)}
                >
                  <div className="relative p-1.5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-[120px] sm:h-[160px] md:h-[200px] object-cover rounded-lg"
                    />
                  </div>
                  <div className="p-1.5 pt-0">
                    <h3 className="font-semibold text-sm md:text-lg truncate">
                      {item.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-xs md:text-sm truncate">
                        {item.address}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>



      {/* Find by image */}
      <div
        id="group-orders"
        variants={fadeInUp}
        className="py-16 pt-37 sm:pt-25  text-white text-center w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${assets.grp_bg})`,height:'400px',borderRadius: "10px" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold md:mb-8 mb-2">
          Find By Image
        </h2>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-block bg-amber-500 text-[#f1f1f1] font-bold py-3 px-8 rounded-full text-lg cursor-pointer md:mb-10"
        >
          Upload Image
        </motion.div>
      </div>

      {/* How It Works */}
      <AnimatedSection
        id="how-it-works"
        variants={fadeInUp}
        className="py-16 text-center w-full bg-gradient-to-b from-gray-100 to-orange-50"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-red-600 bg-clip-text">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4">
          {[
            {
              step: "Browse & Choose",
              icon: <FaUtensils />,
              description:
                "Explore a wide variety of delicious meals tailored for students. Filter by cuisine, dietary preferences, or budget.",
            },
            {
              step: "Place Your Order",
              icon: <FaShippingFast />,
              description:
                "Select your favorite dishes and place your order in just a few clicks. Enjoy secure and hassle-free payments.",
            },
            {
              step: "Enjoy on Campus",
              icon: <FaGraduationCap />,
              description:
                "Get your food delivered right to your dorm, library, or any campus spot. Hot, fresh, and ready to enjoy!",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white text-black rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-6 text-[#E63946] inline-flex">
                {step.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{step.step}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

     {/* Why Choose Us */}
     <AnimatedSection
        id="why-choose-us"
        className="py-16 bg-gray-900 w-full text-white text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Why Choose Campus Cravings?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 w-full px-4">
          {[
            {
              title: "Student-Friendly Prices",
              icon: <FaWallet />,
              description:
                "Affordable meals designed to fit your budget without compromising on quality.",
            },
            {
              title: "Quick Campus Delivery",
              icon: <FaTruck />,
              description:
                "Get your food delivered fast, right to your dorm or campus spot.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white text-black rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center">
                <motion.div className="text-4xl mb-6 text-[#E63946] mr-3 flex items-center">
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Testimonials */
      /* <AnimatedSection
        id="testimonials"
        variants={fadeInUp}
        className="py-16 w-full"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          What Students Say
        </h2>
        {/* Integrated Testimonials Carousel using StudentReviews dataset
        /* <Testimonial />
      </AnimatedSection> */}
    </div>
  );
};

export default InfoSection;
