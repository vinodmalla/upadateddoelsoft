import React, { useState } from "react";
import { FaLinkedinIn, FaInstagram,FaFacebookF, FaBars, FaTimes  } from "react-icons/fa";
import { Users, Briefcase, UserCheck, UserSearch, FileSearch } from "lucide-react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useMenu } from "./MenuContext";
import { FaXTwitter } from "react-icons/fa6";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
 
  const { activeMenu, setActiveMenu } = useMenu();
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isTalentHubOpen, setIsTalentHubOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveMenu(link);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] bg-white p-[5px] shadow-none overflow-x-hidden">
      <div className="max-w-7xl mx-auto lg:ml-3.5 flex items-center justify-between h-16 px-2 sm:px-3 lg:px-4 xl:px-6">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center xl:ml-14">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Doelsoft"
              className="w-[100px] lg:w-[150px] xl:w-[178px] h-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation (now shows at lg and above) */}
        <nav
          className="hidden lg:flex items-center justify-center lg:space-x-4 xl:space-x-8 xl:ml-80 whitespace-nowrap"
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
              onMouseEnter={() => {
                if (item.name === "solutions") setIsSolutionsOpen(true);
                if (item.name === "talenthub") setIsTalentHubOpen(true);
              }}
              onMouseLeave={() => {
                if (item.name === "solutions") setIsSolutionsOpen(false);
                if (item.name === "talenthub") setIsTalentHubOpen(false);
              }}
            >
              <Link
                to={item.path}
                onClick={() => setActiveMenu(item.name)}
                className={`font-medium transition-colors ${
                  activeMenu === item.name
                    ? "text-[#EF0E0E]"
                    : "text-[#000000] hover:text-[#EF0E0E]"
                } text-sm lg:text-base`}
              >
                {item.name.charAt(0).toUpperCase() +
                  item.name.slice(1).replace("us", " us")}
              </Link>

              {/* SOLUTIONS DROPDOWN */}
              {item.name === "solutions" && isSolutionsOpen && (
                <>
                  <div className="absolute left-0 top-full w-full h-6"></div>
                  <div
                    className="fixed left-1/2 top-[70px] -translate-x-1/2 z-[999] 
                               bg-white outline outline-1 outline-slate-200 
                               w-[95vw]  xl:w-[1195px] p-6 lg:p-8 rounded-md 
                               shadow-2xl overflow-auto max-h-[80vh]"
                  >
                    <div className="absolute inset-0 bg-white/90 -z-10 backdrop-blur-sm"></div>

                    <div className="w-full h-auto">
                      <div className="text-neutral-400 text-sm font-normal font-['Inter'] mb-4">
                        Solutions
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Link
                          onClick={() => {
                            setIsSolutionsOpen(false);
                            setActiveMenu("solutions");
                          }}
                          to="/softwareDevelopment"
                        >
                          <div className="bg-white hover:bg-[#EF0E0E] hover:text-white text-zinc-800 p-2 flex flex-row ">
                            <div className="bg-white shadow-lg border border-zinc-200 p-[0.6rem] rounded ">
                              <img src="/c.svg" alt="icon" className="w-6 h-6" />
                            </div>
                            <div className="font-inter ml-4 text-base font-normal">
                              Custom <br /> Software Development
                            </div>
                          </div>
                        </Link>
                           <Link onClick={()=>{setIsSolutionsOpen(false)
                      setActiveMenu("solutions")}} to="/mobileDevelopment" >   <div className="bg-white hover:bg-[#EF0E0E]  hover:text-white text-zinc-800  p-2 flex flex-row ">
                        <div className="bg-white shadow-lg border border-zinc-200 p-[0.6rem] rounded ">
                        <img src='/m.svg' alt="icon" className="w-5 h-5" />
                        </div>
                        <div className="font-inter  ml-4 text-base font-normal">
                          Mobile App <br /> Development
                        </div>
                      </div></Link>
                       <Link onClick={()=>{setIsSolutionsOpen(false)
                      setActiveMenu("solutions")}} to="/salesforce" >   <div className="bg-white hover:bg-[#EF0E0E]  hover:text-white text-zinc-800  p-2 flex flex-row ">
                         <div className="bg-white shadow-lg border border-zinc-200 p-[0.6rem] rounded ">
                        <img src='/s.svg' alt="icon" className="w-6 h-6" />
                        </div>
                        <div className="font-inter  ml-4 text-base font-normal">
                          Salesforce <br /> Solutions
                        </div>
                      </div></Link>
                       <Link onClick={()=>{setIsSolutionsOpen(false)
                      setActiveMenu("solutions")}} to="/servicesweb" >   <div className="bg-white hover:bg-[#EF0E0E]  hover:text-white text-zinc-800  p-2 flex flex-row ">
                         <div className="bg-white shadow-lg border border-zinc-200 p-[0.6rem] rounded ">
                        <img src='/w.svg' alt="icon" className="w-6 h-6" />
                        </div>
                        <div className="font-inter  ml-4 text-base font-normal">
                          Web Design & <br /> Development
                        </div>
                      </div></Link>
                       <Link onClick={()=>{setIsSolutionsOpen(false)
                      setActiveMenu("solutions")}} to="/servicesuiux" >   <div className="bg-white hover:bg-[#EF0E0E]  hover:text-white text-zinc-800  p-2 flex flex-row ">
                        <div className="bg-white shadow-lg border border-zinc-200 p-[0.6rem] rounded ">
                        <img src='/u.svg' alt="icon" className="w-6 h-6" />
                        </div>
                        <div className="font-inter  ml-4 text-base font-normal">
                          UI/UX <br /> Design Services
                        </div>
                      </div></Link>
                       <Link onClick={()=>{setIsSolutionsOpen(false)
                      setActiveMenu("solutions")}} to="/digitalaccessibilit" >   <div className="bg-white hover:bg-[#EF0E0E]  hover:text-white text-zinc-800  p-2 flex flex-row ">
                         <div className="bg-white shadow-lg border border-zinc-200 p-[0.6rem] rounded ">
                        <img src='/d.svg' alt="icon" className="w-6 h-6" />
                        </div>
                        <div className="font-inter  ml-4 text-base font-normal">
                          Digital <br /> Accessibility
                        </div>
                      </div></Link>
                       <Link onClick={()=>{setIsSolutionsOpen(false)
                      setActiveMenu("solutions")}} to="/servicesmicrosoft" >   <div className="bg-white hover:bg-[#EF0E0E]  hover:text-white text-zinc-800  p-2 flex flex-row ">
                         <div className="bg-white shadow-lg border border-zinc-200 p-[0.6rem] rounded ">
                        <img src='/ms.svg' alt="icon" className="w-6 h-6" />
                        </div>
                        <div className="font-inter text-zinc-800 ml-4 text-base font-normal">
                           Microsoft <br /> Solutions
                        </div>
                      </div></Link>
                       <Link onClick={()=>{setIsSolutionsOpen(false)
                      setActiveMenu("solutions")}} to="/servicesmulesoft" >   <div className="bg-white hover:bg-[#EF0E0E]  hover:text-white text-zinc-800  p-2 flex flex-row ">
                         <div className="bg-white shadow-lg border border-zinc-200 p-[0.6rem] rounded ">
                        <img src='/mu.svg' alt="icon" className="w-6 h-6" />
                        </div>
                        <div className="font-inter  ml-4 text-base font-normal">
                          Mulesoft <br /> Solutions
                        </div>
                      </div></Link>
                      <Link onClick={()=>{setIsSolutionsOpen(false)
                      setActiveMenu("solutions")}} to="/servicesiot" >  <div className="bg-white hover:bg-[#EF0E0E]  hover:text-white text-zinc-800  p-2 flex flex-row ">
                      <div className="bg-white shadow-lg border border-zinc-200 p-[0.6rem] rounded ">
                        <img src='/i.svg' alt="icon" className="w-6 h-6 " />
                        </div>
                        <div className="font-inter ml-4 text-zinc-800 text-base font-normal">
                          IoT <br /> Solutions
                        </div>
                      </div></Link>
                       <Link onClick={()=>{setIsSolutionsOpen(false)
                      setActiveMenu("solutions")}} to="/servicesembedded" >  <div className="bg-white hover:bg-[#EF0E0E]  hover:text-white text-zinc-800  p-2 flex flex-row ">
                         <div className="bg-white shadow-lg border border-zinc-200 p-[0.6rem] rounded ">
                        <img src='/e.svg' alt="icon" className="w-6 h-6" />
                        </div>
                        <div className="font-inter  ml-4 text-base font-normal">
                      Embedded   <br /> Technologies
                        </div>
                      </div></Link>
                       <Link onClick={()=>{setIsSolutionsOpen(false)
                      setActiveMenu("solutions")}} to="/servicesqa" >   <div className="bg-white hover:bg-[#EF0E0E]  hover:text-white text-zinc-800  p-2 flex flex-row ">
                         <div className="bg-white shadow-lg border border-zinc-200 p-[0.6rem] rounded ">
                        <img src='/q.svg' alt="icon" className="w-6 h-6" />
                        </div>
                        <div className="font-inter  ml-4 text-base font-normal">
                         Flawless  <br /> QA Services
                        </div>
                      </div></Link>
                       <Link onClick={()=>{setIsSolutionsOpen(false)
                      setActiveMenu("solutions")}} to="/serviceai" >   <div className="bg-white hover:bg-[#EF0E0E]  hover:text-white text-zinc-800  p-2 flex flex-row ">
                        <div className="bg-white shadow-lg border border-zinc-200 p-[0.6rem] rounded ">
                        <img src='/a.svg' alt="icon" className="w-6 h-6" />
                        </div>
                        <div className="font-inter  ml-4 text-base font-normal">
                         Services <br />AI

                        </div>
                      </div></Link>
                        
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
                        <Link
                          onClick={() => {
                            setIsSolutionsOpen(false);
                            setActiveMenu("contact");
                          }}
                          to="/contact"
                        >
                          <button className="h-8 px-4 bg-red-600 text-white text-sm font-medium font-['Inter'] rounded">
                            Get Started
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* TALENTHUB DROPDOWN */}
              {item.name === "talenthub" && isTalentHubOpen && (
                <>
                  <div className="absolute left-0 top-full w-full h-6"></div>
                  <div
                    className="fixed left-1/2 top-[70px] -translate-x-1/2 z-[999]
                               bg-white outline outline-1 outline-slate-200 
                               w-[95vw] lg:w-[900px] p-6 lg:p-8 rounded-md 
                               shadow-2xl overflow-auto max-h-[80vh]"
                  >
                    <div className="absolute inset-0 bg-white/90 -z-10 backdrop-blur-sm"></div>

                    <div className="text-neutral-400 text-sm font-normal mb-4">
                      Talent Hub Solutions
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <Link
                        onClick={() => {
                          setIsTalentHubOpen(false);
                          setActiveMenu("talenthub");
                        }}
                        to="/itstaffing"
                      >
                        <div className="bg-white hover:bg-[#EF0E0E] hover:text-white text-zinc-800 p-2 flex flex-row">
                          <div className="bg-white shadow-lg border border-zinc-200 p-[0.6rem] rounded">
                            <Users className="w-6 h-6 text-zinc-800" />
                          </div>
                          <div className="ml-4 text-base font-normal">
                            IT Staffing <br /> Solutions
                          </div>
                        </div>
                      </Link>
                      {/* ... other talenthub links unchanged ... */}
                        <Link onClick={() => {setIsTalentHubOpen(false)
                       setActiveMenu("talenthub")  }}  to="/contract">
                      <div className="bg-white hover:bg-[#EF0E0E] hover:text-white text-zinc-800 p-2 flex flex-row">
                        <div className="bg-white shadow-lg border border-zinc-200 p-[0.6rem] rounded">
                          <Briefcase className="w-6 h-6 text-zinc-800" />
                        </div>
                        <div className="ml-4 text-base font-normal">
                          Contract & <br /> Temporary Hiring
                        </div>
                      </div>
                    </Link>

                    {/* 3 Permanent Hiring */}
                    <Link onClick={() => {setIsTalentHubOpen(false)
                       setActiveMenu("talenthub") }}  to="/permanent">
                      <div className="bg-white hover:bg-[#EF0E0E] hover:text-white text-zinc-800 p-2 flex flex-row">
                        <div className="bg-white shadow-lg border border-zinc-200 p-[0.6rem] rounded">
                          <UserCheck className="w-6 h-6 text-zinc-800" />
                        </div>
                        <div className="ml-4 text-base font-normal">
                          Permanent <br /> Hiring
                        </div>
                      </div>
                    </Link>

                    {/* 4 Executive Search */}
                    <Link onClick={() => {setIsTalentHubOpen(false)
                       setActiveMenu("talenthub")  }}  to="/excutive">
                      <div className="bg-white hover:bg-[#EF0E0E] hover:text-white text-zinc-800 p-2 flex flex-row">
                        <div className="bg-white shadow-lg border border-zinc-200 p-[0.6rem] rounded">
                          <UserSearch className="w-6 h-6 text-zinc-800" />
                        </div>
                        <div className="ml-4 text-base font-normal">
                          Executive <br /> Search
                        </div>
                      </div>
                    </Link>

                    {/* 5 RPO */}
                    <Link onClick={() => {setIsTalentHubOpen(false)
                       setActiveMenu("talenthub")  }}  to="/rpo">
                      <div className="bg-white hover:bg-[#EF0E0E] hover:text-white text-zinc-800 p-2 flex flex-row">
                        <div className="bg-white shadow-lg border border-zinc-200 p-[0.6rem] rounded">
                          <FileSearch className="w-6 h-6 text-zinc-800" />
                        </div>
                        <div className="ml-4 text-base font-normal">
                          RPO <br /> Services
                        </div>
                      </div>
                    </Link>

                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-indigo-600 rounded-2xl flex justify-center items-center">
                          <img src="/key.svg" alt="key" className="w-4 h-4" />
                        </div>
                        <p className="text-zinc-800 text-sm font-normal">
                          Find top talent today. <span className="text-zinc-500">Let’s connect.</span>
                        </p>
                      </div>
                      <Link
                        to="/contact"
                        onClick={() => {
                          setIsTalentHubOpen(false);
                          setActiveMenu("contact");
                        }}
                      >
                        <button className="h-8 px-4 bg-red-600 text-white text-sm font-medium rounded">
                          Get Started
                        </button>
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </nav>

        {/* Social Icons (show at lg and above) */}
        <div className="hidden lg:flex items-center space-x-4 lg:space-x-2 xl:ml-24">
          <Link to="https://www.instagram.com/doelsoft?igsh=cGVrYmlyeWdoamJy" target="_blank" className="p-2">
            <FaInstagram  className="text-lg lg:text-xl text-gray-700 hover:text-red-600" />
          </Link>
          <Link to="https://www.linkedin.com/company/doelsoft-it-services-pvt-ltd/" target="_blank" className="p-2">
            <FaLinkedinIn className="text-lg lg:text-xl text-gray-700 hover:text-red-600" />
          </Link>
          <Link to="/https://twwiter.in" target="_blank" className="p-2">
            <FaXTwitter  className="text-lg lg:text-xl text-gray-700 hover:text-red-600" />
          </Link>
          <Link to="/https://twwiter.in" target="_blank" className="p-2">
            <FaFacebookF  className="text-lg lg:text-xl text-gray-700 hover:text-red-600" />
          </Link>
        </div>

        {/* Mobile Hamburger (visible below lg) */}
        <button
          className="lg:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu (visible below lg) */}
      <div
        className={`lg:hidden bg-white shadow-md w-full transition-all duration-300 ${
          isOpen ? "max-h-[85vh]" : "max-h-0 overflow-hidden"
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
                  activeMenu === item.name
                    ? "text-[#EF0E0E]"
                    : "text-gray-700 hover:text-[#EF0E0E]"
                }`}
              >
                {item.name.charAt(0).toUpperCase() +
                  item.name.slice(1).replace("us", " us")}
              </Link>
            </div>
          ))}

          <div className="flex space-x-6 pt-4">
            <Link to="https://www.instagram.com/doelsoft?igsh=cGVrYmlyeWdoamJy" target="_blank" className="p-2">
              <FaInstagram className="text-xl text-gray-700 hover:text-red-600" />
            </Link>
            <Link to="https://www.linkedin.com/company/doelsoft-it-services-pvt-ltd/" target="_blank" className="p-2">
              <FaLinkedinIn className="text-xl text-gray-700 hover:text-red-600" />
            </Link>
            <Link to="https://www.linkedin.com/company/doelsoft-it-services-pvt-ltd/" target="_blank" className="p-2">
              <FaXTwitter className="text-xl text-gray-700 hover:text-red-600" />
            </Link>
            <Link to="https://www.linkedin.com/company/doelsoft-it-services-pvt-ltd/" target="_blank" className="p-2">
              <FaFacebookF  className="text-xl text-gray-700 hover:text-red-600" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
