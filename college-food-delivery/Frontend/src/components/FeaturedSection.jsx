import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { assets, foodData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const FeaturedSection = () => {
  const [rotation, setRotation] = useState(0);
  const [radius, setRadius] = useState(250);
  const [startIndex, setStartIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  const navigate=useNavigate();
  const interactiveRef = useRef(null);
  const lastClientY = useRef(null);
  const interactionTimeoutRef = useRef(null);

  const itemsPerPage = 9;
  const angleStep = (2 * Math.PI) / itemsPerPage;

  // ✅ Auto-loop animation (paused during interaction)
  useEffect(() => {
    let frameId;
    let angle = rotation;

    const animate = () => {
      if (!isUserInteracting) {
        angle += 0.01;
        if (angle >= 2 * Math.PI) {
          angle = 0;
          setStartIndex((prev) => (prev + itemsPerPage) % foodData.length);
        }
        setRotation(angle);
      }
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isUserInteracting, rotation]);

  // ✅ Responsive radius
  useEffect(() => {
    const updateRadius = () => {
      const width = window.innerWidth;
      if (width < 640) setRadius(120);
      else if (width < 1024) setRadius(170);
      else setRadius(250);
    };
    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  // ✅ Stop animation on scroll/touch/drag
  useEffect(() => {
    const el = interactiveRef.current;
    if (!el) return;

    const stopAnimation = () => {
      setIsUserInteracting(true);
      clearTimeout(interactionTimeoutRef.current);
      interactionTimeoutRef.current = setTimeout(() => {
        setIsUserInteracting(false); // Resume after 4s idle
      }, 3000);
    };

    const handleWheel = (e) => {
      if (e.target.closest(".center-image")) return;
      e.preventDefault();
      stopAnimation();
      setRotation((prev) => prev + e.deltaY * 0.005); // Reversed scroll movement
    };

    let touchStartY = null;
    const handleTouchStart = (e) => {
      if (e.target.closest(".center-image")) return;
      touchStartY = e.touches[0].clientY;
      stopAnimation();
    };

    const handleTouchMove = (e) => {
      if (touchStartY === null) return;
      stopAnimation();
      const deltaY = e.touches[0].clientY - touchStartY;
      setRotation((prev) => prev + deltaY * 0.005); // Reversed scroll movement
      touchStartY = e.touches[0].clientY;
      e.preventDefault();
    };

    const handleTouchEnd = () => {
      touchStartY = null;
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    el.addEventListener("touchstart", handleTouchStart, { passive: false });
    el.addEventListener("touchmove", handleTouchMove, { passive: false });
    el.addEventListener("touchend", handleTouchEnd);

    return () => {
      el.removeEventListener("wheel", handleWheel);
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchmove", handleTouchMove);
      el.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const handlePointerDown = (e) => {
    if (e.target.closest(".center-image")) return;
    lastClientY.current = e.clientY;
    setIsUserInteracting(true);
  };

  const handlePointerMove = (e) => {
    if (lastClientY.current !== null) {
      const delta = e.clientY - lastClientY.current;
      setRotation((prev) => prev + delta * 0.005); // Reversed scroll movement
      lastClientY.current = e.clientY;
    }
  };

  const handlePointerUp = () => {
    lastClientY.current = null;
    setIsUserInteracting(false);
  };

  const currentItems = [];
  for (let i = 0; i < itemsPerPage; i++) {
    currentItems.push(foodData[(startIndex + i) % foodData.length]);
  }

  const handleOnClick=(id)=>{
    navigate(`food/${id}`)
  }

  return (
    <AnimatedSection
      id="featured"
      className="relative w-full min-h-0 h-auto overflow-hidden bg-gradient-to-b from-gray-50 to-orange-50"
    >
      
      <div
        className="w-full h-[400px] sm:h-[730px] flex justify-center items-center overflow-hidden select-none"
        style={{ touchAction: "auto" }}
      >
        <div className="absolute left-0 top-0 h-full w-[20%] sm:w-[20%] md:w-[30%] lg:w-1/2 pointer-events-none z-0"></div>

        <div
          ref={interactiveRef}
          className="relative h-full w-full sm:w-[90%] md:w-[80%] lg:w-[60%] flex justify-center items-center z-10"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          style={{ touchAction: "none" }}
        >
          {/* Center Image */}
          <div
            className="center-image absolute z-50 top-48 sm:top-80 left-30 sm:left-40 rounded-full object-cover shadow-2xl"
            style={{
              width: `${radius * 0.8}px`,
              height: `${radius * 0.8}px`,
              transform: "translate(-50%, -50%)",
              pointerEvents: "auto",
              touchAction: "auto",
            }}
          >
            <img
              src={assets.ghibli}
              alt="Center"
              className="w-full h-[300px] rounded-full object-cover"
            />
          </div>

          {/* Rotating Items */}
          <div className="absolute inset-0">
            {currentItems.map((item, index) => {
              const angle = angleStep * index + rotation;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);
              const isVisible = x >= 0;
              const opacity = isVisible ? 1 : 0;

              return (
                <motion.div
                  key={index}
                  onClick={()=>handleOnClick(item.id)}
                  className="absolute left-[35%] sm:left-1/2 top-[45%] md:top-[40%] sm:top-[30%]"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    opacity,
                    transition:
                      "transform 0.1s linear, opacity 0.3s ease, filter 0.3s ease",
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-15 h-15 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full bg-cover bg-center shadow-lg"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FeaturedSection;
