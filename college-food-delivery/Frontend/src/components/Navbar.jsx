import { useEffect, useState,useRef } from "react";
import { FaBars, FaTimes, FaShoppingCart, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {assets} from "../assets/assets"
import gsap from "gsap";
import {useGSAP} from "@gsap/react";


const navbarItems = [
  { name: "Home", path: "/" },
  { name: "Restaurants", path: "/restaurants" },
  { name: "Food", path: "/fooditems" },
  {name:"Login",path:"/login"}
];



const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const logoRef = useRef(null);

  useGSAP(()=>{
    gsap.from(logoRef.current,{
      opacity:0,
      y:-50,
      duration:1,
      ease:"power2.out",
      scrollTrigger:{
        trigger:logoRef.current,
        start:"top 80%",
        end:"top 30%",
        scrub:true
      }
    })
  })


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navigate = useNavigate();

  // Toggle sidebar open/close
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // A single handler for all nav items
  const handleNavClick = (path) => {
    navigate(path);
    if (path === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Navigate to user profile
  const onClickUser = () => {
    navigate("/my-profile");
  };

  // Navigate to cart page
  const onClickCart = () => {
    navigate("/cart");
  };

  return (
    <>
      {/* Top Navbar */}
      <nav
        className={`fixed top-0 w-full bg-white bg-opacity-90 backdrop-blur-lg shadow-lg z-50 px-3 sm:px-5 py-4 sm:py-5 flex justify-between items-center ${
          showNavbar ? "translate-0" : "translate-y-[-100%]"
        } transition-transform duration-300`}
      >
        {/* Logo */}
        <div ref={logoRef} className="h-10 w-32 flex items-center justify-start">
          <img
            src={assets.campus_cravings}
            className="w-full max-w-[100px] h-auto md:max-w-[120px]"
            alt="Campus Cravings Logo"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          <ul className="flex space-x-10 text-lg font-medium">
            {navbarItems.map((item, index) => (
              <li
                key={index}
                onClick={() => handleNavClick(item.path)}
                className="text-black hover:text-[#E63946] transition duration-300 cursor-pointer hover:scale-105 transform hover:drop-shadow-lg"
              >
                {item.name}
              </li>
            ))}
          </ul>
          <div className="flex space-x-6 text-black">
            <FaShoppingCart
              size={20}
              className="cursor-pointer hover:text-[#E63946] transition duration-300 hover:scale-105 hover:drop-shadow-lg"
              onClick={onClickCart}
            />
            <FaUser
              size={20}
              className="cursor-pointer hover:text-[#E63946] transition duration-300 hover:scale-105 hover:drop-shadow-lg"
              onClick={onClickUser}
            />
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={toggleSidebar}
            className="p-2 bg-gradient-to-r from-[#E63946] to-[#FF6B6B] text-white rounded-full shadow-lg focus:outline-none transition-transform transform hover:scale-110 hover:drop-shadow-lg"
          >
            {isSidebarOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar (slides in from right) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white bg-opacity-95 text-black shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Logo in Sidebar */}
          <h2 className="whitespace-nowrap text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#E63946] to-[#FF6B6B] mb-8">
            Campus Cravings
          </h2>

          {/* Mobile Navbar Links */}
          <nav className="space-y-6 text-lg">
            {navbarItems.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  handleNavClick(item.path);
                  toggleSidebar();
                }}
                className="block text-black hover:text-[#E63946] transition duration-300 cursor-pointer hover:pl-4 hover:drop-shadow-lg border-b border-gray-200 pb-2"
              >
                {item.name}
              </div>
            ))}
          </nav>

          {/* Icons (Cart and Profile) */}
          <div className="mt-8 flex space-x-6">
            <FaShoppingCart
              size={24}
              className="cursor-pointer text-black hover:text-[#E63946] transition duration-300 hover:scale-105 hover:drop-shadow-lg"
              onClick={() => {
                onClickCart();
                toggleSidebar();
              }}
            />
            <FaUser
              size={24}
              className="cursor-pointer text-black hover:text-[#E63946] transition duration-300 hover:scale-105 hover:drop-shadow-lg"
              onClick={() => {
                onClickUser();
                toggleSidebar();
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;