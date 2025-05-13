// Footer.jsx
import { FaUsers, FaGraduationCap, FaUtensils } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="from-gray-100 to-red-100 text-black py-8 mt-5 text-center w-full">
      <div className="flex justify-center space-x-6">
        <FaUsers className="text-2xl" />
        <FaGraduationCap className="text-2xl" />
        <FaUtensils className="text-2xl" />
      </div>
      <p>&copy; 2025 Campus Cravings. Fueling minds, one delivery at a time.</p>
    </footer>
  );
};

export default Footer;
