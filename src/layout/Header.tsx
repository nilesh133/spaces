import { useState } from 'react';
import { FaGlobe, FaUserPlus, FaSearch, FaBars } from 'react-icons/fa';
import { FiFilter } from 'react-icons/fi';
import Logo from "../assets/images/logo/logo.png";
import Container from './Container';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full border-b border-gray-300 py-4 font-oswald">
      <Container>
        <div className="flex justify-between px-4 py-4 items-start">
          <div className="flex items-center gap-2">
            <img src={Logo} alt="Logo" />
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
            <div className="flex items-center gap-1 cursor-pointer">
              <FaGlobe />
              Browse Venues
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <FaGlobe />
              Browse Vendors
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <FaUserPlus />
              List Your Space
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <FaUserPlus />
              List Your Services
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-purple-700 text-white px-6 py-2 rounded">LOG IN</button>
              <button className="bg-orange-500 text-white px-6 py-2 rounded">SIGN UP</button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button className="bg-purple-700 text-white px-4 py-2 rounded text-sm">LOG IN</button>
            <button className="bg-orange-500 text-white px-4 py-2 rounded text-sm">SIGN UP</button>
            <FaBars className="text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white shadow-md rounded p-4 space-y-3 text-sm font-semibold">
            <div className="flex items-center gap-1 cursor-pointer">
              <FaGlobe />
              Browse Venues
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <FaGlobe />
              Browse Vendors
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <FaUserPlus />
              List Your Space
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <FaUserPlus />
              List Your Services
            </div>
          </div>
        )}
      </Container>

      <Container>
        <div className="hidden md:flex items-center gap-2 px-4 mt-2">
          <button className="border border-gray-300 text-gray-500 font-medium rounded px-6 py-1 text-sm">Price</button>
          <button className="border border-gray-300 text-gray-500 font-medium rounded px-6 py-1 text-sm">Attendees</button>
          <button className="border border-gray-300 text-gray-500 font-medium rounded px-6 py-1 text-sm">Date & Time</button>
          <button className="border border-gray-300 text-gray-500 font-medium rounded px-6 py-1 text-sm flex items-center gap-1">
            <FiFilter /> More Filters
          </button>
          <div className="flex items-center border border-gray-400 rounded px-2 py-1 flex-grow max-w-sm">
            <input
              type="text"
              placeholder="Find Spaces with specific keywords"
              className="w-full outline-none text-sm"
            />
            <FaSearch className="text-gray-500" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;