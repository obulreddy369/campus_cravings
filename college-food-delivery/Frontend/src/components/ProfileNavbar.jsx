import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const ProfileNavbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const onClickToHome = () => {
    navigate("/");
  };
  return (
    <nav className="flex justify-between items-center fixed top-0 w-full z-[1000] bg-white text-black h-[clamp(60px,10vh,80px)] py-4 px-5 bg-opacity-90 backdrop-blur-lg shadow-lg">
      <div className="flex items-center cursor-pointer" onClick={onClickToHome}>
        {/* Logo Image with controlled responsive sizing */}
        <h1 className="whitespace-nowrap text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#E63946] to-[#FF6B6B] transition-all duration-500">
          Campus Cravings
        </h1>
      </div>
      {/* Desktop menu: visible only on screens 901px and wider */}
      <ul className="list-none hidden min-[901px]:flex">
        <li className="flex items-center space-x-2">
          <a
            href="/"
            className="text-black no-underline transition-colors duration-300 ease hover:text-[#ff0303]"
          >
            Logout
          </a>
          <img src={assets.logout} alt="Logout Icon" className="w-6 h-6" />
        </li>
      </ul>

      {/* Mobile toggle button: visible only on screens 900px and below */}
      <button
        className="bg-transparent border-0 text-black text-[2rem] cursor-pointer hidden max-[900px]:block"
        onClick={toggleSidebar}
      >
        ☰
      </button>
    </nav>
  );
};

export default ProfileNavbar;
