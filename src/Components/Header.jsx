import React, { useState } from "react";
import { FaInstagram, FaDiscord, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white p-[5px] shadow-none overflow-x-hidden">
      <div className="max-w-7xl mx-auto md:ml-3.5 flex items-center justify-between h-16 px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center sm:ml-2 md:ml-4 lg:ml-14">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Doelsoft"
              className="w-[90px] sm:w-[120px] md:w-[150px] lg:w-[178px] h-auto"
            />
          </Link>
        </div>

        {/* Desktop & Tablet Nav */}
        <nav
          className="hidden md:flex items-center justify-center 
          md:space-x-4 lg:space-x-8 xl:ml-80 whitespace-nowrap "
          role="navigation"
        >
          {[
            { name: "home", path: "/" },
            { name: "solutions", path: "/solutions" },
            { name: "talenthub", path: "/talenthub" },
            { name: "chooseus", path: "/chooseus" },
            { name: "carrers", path: "/carrers" },
            { name: "insights", path: "/insights" },
            { name: "contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => handleLinkClick(item.name)}
              className={`font-medium transition-colors ${
                activeLink === item.name
                  ? "text-[#EF0E0E]"
                  : "text-[#000000] hover:text-[#EF0E0E]"
              } text-sm lg:text-base`}
            >
              {item.name.charAt(0).toUpperCase() +
                item.name.slice(1).replace("us", " us")}
            </Link>
          ))}
        </nav>

        {/* Social Icons (Tablet & Desktop) */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-5 xl:ml-36 ">
          <a href="#" className="p-2">
            <FaInstagram className="text-lg md:text-xl text-gray-700 hover:text-red-600" />
          </a>
          <a href="#" className="p-2">
            <FaDiscord className="text-lg md:text-xl text-gray-700 hover:text-red-600" />
          </a>
          <a href="#" className="p-2">
            <FaGithub className="text-lg md:text-xl text-gray-700 hover:text-red-600" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md w-full transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col items-center space-y-4 py-6 text-center">
          {[
            { name: "home", path: "/" },
            { name: "solutions", path: "/solutions" },
            { name: "talenthub", path: "/talenthub" },
            { name: "chooseus", path: "/chooseus" },
            { name: "carrers", path: "/carrers" },
            { name: "insights", path: "/insights" },
            { name: "contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => handleLinkClick(item.name)}
              className={`font-medium text-base ${
                activeLink === item.name
                  ? "text-[#EF0E0E]"
                  : "text-gray-700 hover:text-[#EF0E0E]"
              }`}
            >
              {item.name.charAt(0).toUpperCase() +
                item.name.slice(1).replace("us", " us")}
            </Link>
          ))}

          {/* Social Icons (Mobile) */}
          <div className="flex space-x-6 pt-4">
            <a href="#" className="p-2">
              <FaInstagram className="text-xl text-gray-700 hover:text-red-600" />
            </a>
            <a href="#" className="p-2">
              <FaDiscord className="text-xl text-gray-700 hover:text-red-600" />
            </a>
            <a href="#" className="p-2">
              <FaGithub className="text-xl text-gray-700 hover:text-red-600" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
