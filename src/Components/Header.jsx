import React, { useState } from "react";
import { FaInstagram, FaDiscord, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // ✅ Dropdown state
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
    if (link === "solutions") setIsSolutionsOpen(!isSolutionsOpen);
    else setIsSolutionsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] bg-white p-[5px] shadow-none overflow-x-hidden">
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
          md:space-x-4 lg:space-x-8 xl:ml-80 whitespace-nowrap"
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
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.name === "solutions" && setIsSolutionsOpen(true)}
              
            >
              <Link
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

              {/* ✅ Solutions Dropdown (Desktop Hover) */}
              {item.name === "solutions" && isSolutionsOpen && (
                <div
                  className="fixed left-1/2 top-[70px] -translate-x-1/2 z-[999] 
                             bg-white outline outline-1 outline-slate-200 
                             w-[95vw] lg:w-[1195px] p-6 lg:p-8 rounded-md 
                             shadow-2xl overflow-auto max-h-[80vh]"
                 
                >
                  <div className="absolute inset-0 bg-white/90 -z-10 backdrop-blur-sm"></div>

                  <div className="w-full h-auto">
                    <div className="text-neutral-400 text-sm font-normal font-['Inter'] mb-4">
                      Solutions
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-white hover:bg-[#EF0E0E]  hover:text-white text-zinc-800  p-2 flex flex-row ">
                        <div className="bg-white shadow-lg border border-zinc-200 p-[0.6rem] rounded ">
                        <img src='/c.svg' alt="icon" className="w-6 h-6" />
                        </div>
                        <div className="font-inter ml-4 text-base font-normal">
                          Custom <br /> Software Development
                        </div>
                      </div>
                       <div className="bg-white hover:bg-[#EF0E0E]  hover:text-white text-zinc-800  p-2 flex flex-row ">
                        <div className="bg-white shadow-lg border border-zinc-200 p-[0.6rem] rounded ">
                        <img src='/m.svg' alt="icon" className="w-5 h-5" />
                        </div>
                        <div className="font-inter  ml-4 text-base font-normal">
                          Mobile App <br /> Development
                        </div>
                      </div>
                       <div className="bg-white hover:bg-[#EF0E0E]  hover:text-white text-zinc-800  p-2 flex flex-row ">
                         <div className="bg-white shadow-lg border border-zinc-200 p-[0.6rem] rounded ">
                        <img src='/s.svg' alt="icon" className="w-6 h-6" />
                        </div>
                        <div className="font-inter  ml-4 text-base font-semibold">
                          Salesforce <br /> Solutions
                        </div>
                      </div>
                       <div className="bg-white hover:bg-[#EF0E0E]  hover:text-white text-zinc-800  p-2 flex flex-row ">
                         <div className="bg-white shadow-lg border border-zinc-200 p-[0.6rem] rounded ">
                        <img src='/w.svg' alt="icon" className="w-6 h-6" />
                        </div>
                        <div className="font-inter  ml-4 text-base font-normal">
                          Web Design & <br /> Development
                        </div>
                      </div>
                       <div className="bg-white hover:bg-[#EF0E0E]  hover:text-white text-zinc-800  p-2 flex flex-row ">
                        <div className="bg-white shadow-lg border border-zinc-200 p-[0.6rem] rounded ">
                        <img src='/u.svg' alt="icon" className="w-6 h-6" />
                        </div>
                        <div className="font-inter  ml-4 text-base font-normal">
                          UI/UX <br /> Design Services
                        </div>
                      </div>
                       <div className="bg-white hover:bg-[#EF0E0E]  hover:text-white text-zinc-800  p-2 flex flex-row ">
                         <div className="bg-white shadow-lg border border-zinc-200 p-[0.6rem] rounded ">
                        <img src='/d.svg' alt="icon" className="w-6 h-6" />
                        </div>
                        <div className="font-inter  ml-4 text-base font-normal">
                          Digital <br /> Accessibility
                        </div>
                      </div>
                       <div className="bg-white hover:bg-[#EF0E0E]  hover:text-white text-zinc-800  p-2 flex flex-row ">
                         <div className="bg-white shadow-lg border border-zinc-200 p-[0.6rem] rounded ">
                        <img src='/ms.svg' alt="icon" className="w-6 h-6" />
                        </div>
                        <div className="font-inter text-zinc-800 ml-4 text-base font-normal">
                           MicroSoft <br /> Solutions
                        </div>
                      </div>
                       <div className="bg-white hover:bg-[#EF0E0E]  hover:text-white text-zinc-800  p-2 flex flex-row ">
                         <div className="bg-white shadow-lg border border-zinc-200 p-[0.6rem] rounded ">
                        <img src='/mu.svg' alt="icon" className="w-6 h-6" />
                        </div>
                        <div className="font-inter  ml-4 text-base font-normal">
                          MuleSoft <br /> Solutions
                        </div>
                      </div>
                     <div className="bg-white hover:bg-[#EF0E0E]  hover:text-white text-zinc-800  p-2 flex flex-row ">
                      <div className="bg-white shadow-lg border border-zinc-200 p-[0.6rem] rounded ">
                        <img src='/i.svg' alt="icon" className="w-6 h-6 " />
                        </div>
                        <div className="font-inter ml-4 text-zinc-800 text-base font-normal">
                          IoT <br /> Solutions
                        </div>
                      </div>
                      <div className="bg-white hover:bg-[#EF0E0E]  hover:text-white text-zinc-800  p-2 flex flex-row ">
                         <div className="bg-white shadow-lg border border-zinc-200 p-[0.6rem] rounded ">
                        <img src='/e.svg' alt="icon" className="w-6 h-6" />
                        </div>
                        <div className="font-inter  ml-4 text-base font-normal">
                      Embedded   <br /> Technologies
                        </div>
                      </div>
                       <div className="bg-white hover:bg-[#EF0E0E]  hover:text-white text-zinc-800  p-2 flex flex-row ">
                         <div className="bg-white shadow-lg border border-zinc-200 p-[0.6rem] rounded ">
                        <img src='/q.svg' alt="icon" className="w-6 h-6" />
                        </div>
                        <div className="font-inter  ml-4 text-base font-normal">
                         Flawless  <br /> QA Services
                        </div>
                      </div>
                       <div className="bg-white hover:bg-[#EF0E0E]  hover:text-white text-zinc-800  p-2 flex flex-row ">
                        <div className="bg-white shadow-lg border border-zinc-200 p-[0.6rem] rounded ">
                        <img src='/a.svg' alt="icon" className="w-6 h-6" />
                        </div>
                        <div className="font-inter  ml-4 text-base font-normal">
                         Services <br />AI

                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-indigo-600 rounded-2xl flex justify-center items-center">
                          <img src="/key.svg" alt="key" className="w-4 h-4" />
                        </div>
                        <p className="text-zinc-800 text-sm font-normal font-['Inter']">
                          Let’s Build the Future Together.{" "}
                          <span className="text-zinc-500">lets connect</span>
                        </p>
                      </div>
                      <button className="h-8 px-4 bg-red-600 text-white text-sm font-medium font-['Inter'] rounded">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* ✅ Close nav container */}
        {/* Social Icons (Tablet & Desktop) */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-5 xl:ml-36 ">
          <a href="/" className="p-2">
            <FaInstagram className="text-lg md:text-xl text-gray-700 hover:text-red-600" />
          </a>
          <a href="/" className="p-2">
            <FaDiscord className="text-lg md:text-xl text-gray-700 hover:text-red-600" />
          </a>
          <a href="/" className="p-2">
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
            <div key={item.name} className="w-full">
              <Link
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

              {/* ✅ Solutions Dropdown (Mobile Tap) */}
             
            </div>
          ))}

          {/* Social Icons (Mobile) */}
          <div className="flex space-x-6 pt-4">
            <a href="/" className="p-2">
              <FaInstagram className="text-xl text-gray-700 hover:text-red-600" />
            </a>
            <a href="/" className="p-2">
              <FaDiscord className="text-xl text-gray-700 hover:text-red-600" />
            </a>
            <a href="/" className="p-2">
              <FaGithub className="text-xl text-gray-700 hover:text-red-600" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
