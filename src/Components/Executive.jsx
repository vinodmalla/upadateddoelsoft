import React from 'react'
import { ArrowUpRight } from 'lucide-react'

function Executive() {
  const features = [
    {
      icon: "/Ex1.svg",
      title: "Global network of CXOs, VPs, and senior executives",
    },
    {
      icon: "/Ex2.svg",
      title: "Confidential and precise headhunting approach",
    },
    {
      icon: "/Ex3.svg",
      title: "Rigorous evaluation of leadership competencies and cultural fit",
    },
    {
      icon: "/Ex4.svg",
      title: "Consistent delivery of high-impact leaders for critical roles",
    },
  ];
  return (
    <div className="w-full min-h-screen font-kumbh space-y-6 mt-16 flex flex-col justify-end">
      {/* HERO SECTION */}
      <section
        className="relative w-full min-h-[550px] flex flex-col md:flex-row items-center justify-between overflow-hidden py-10 px-4 sm:px-8 md:px-16 lg:px-28"
        style={{
          backgroundImage: "url('/worldmap.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* LEFT TEXT */}
        <div className="relative z-10 flex-1 flex flex-col items-center md:items-start justify-center space-y-6 text-center md:text-left">
          <h1 className="text-lg md:text-2xl font-kumbh underline font-semibold text-gray-800">
            Talent Hub
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-kumbh leading-tight md:leading-[87.20px] font-bold text-red-600 mt-2">
            Excutive Search
          </h2>

          <button className="py-3 sm:py-4 px-6 sm:px-7 border border-black text-black hover:bg-gray-200 transition-all duration-200">
            Consult With Us <span className="ml-2">↗</span>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="mt-10 md:mt-0 md:flex-1 flex justify-center md:justify-end relative z-0">
          <img
            src="/excutive.svg"
            alt="Team"
            className="w-60 sm:w-72 md:w-[420px] lg:w-[500px] h-auto object-contain"
          />
        </div>
      </section>

      {/* EXECUTIVE SEARCH CONTENT SECTION */}
      <section
        className="relative w-full h-full bg-cover bg-center py-16 sm:py-24 md:pb-96 px-4 sm:px-8 md:px-12 lg:px-24"
        style={{
          backgroundImage: "url('/Ex_back.svg')",
          marginBottom: "-44px",
        }}
      >
        <div className="max-w-6xl mx-auto text-black md:ml-2 md:mt-14">
          {/* HEADING */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-kumbh leading-snug md:leading-[57.20px] font-semibold mb-4 text-center md:text-left">
            Executive Search — Finding Leaders Who Inspire
          </h2>
          <p className="text-black text-base sm:text-lg font-inter font-normal leading-6 max-w-3xl mb-10 text-center md:text-left">
            Every successful business is led by visionary leaders. Through our
            executive search practice, we identify and secure top-tier leaders
            who can set strategy, drive growth, and inspire performance across
            your organization.
          </p>

          {/* SUBHEADING */}
          <h3 className="text-lg sm:text-xl md:text-2xl font-kumbh leading-8 md:leading-10 font-semibold mb-8 text-center md:text-left">
            Why Clients Trust Doelsoft for Leadership Hiring:
          </h3>

          {/* FEATURE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {features.map((item, index) => (
              <div
                key={index}
                className="border border-black hover:shadow-lg transition py-6 px-6 sm:px-10 flex flex-col items-center sm:items-start text-center sm:text-left"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 mb-4 mx-auto sm:mx-0"
                />
                <p className="text-black text-base sm:text-lg font-inter leading-6 sm:leading-7">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          {/* CTA BUTTON */}
          <div className="flex justify-center md:justify-start">
            <button className="bg-black text-base sm:text-lg text-white px-5 sm:px-6 py-3 flex items-center gap-2 hover:bg-gray-900 transition">
              Secure leaders who define the future with Doelsoft.
              <span className="ml-1 sm:ml-2">
                <ArrowUpRight size={18} />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
       <section
                   className="relative w-full bg-cover bg-center text-center py-16 md:h-[568px] sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
                   style={{
                     backgroundImage: "url('/Background2.svg')",
                     marginTop: "45px",
                   }}
                 >
                   {/* Decorative Vectors */}
                   <img
                     src="/Vectors.svg"
                     alt="vector"
                     className="absolute left-6 sm:left-14 top-8 sm:top-10 h-20 sm:h-28 md:h-32 w-20 sm:w-28 md:w-32 object-contain opacity-70 z-30"
                   />
                   <img
                     src="/left.svg"
                     alt="left"
                     className="absolute left-10 sm:left-20 bottom-10 sm:top-70 w-3 sm:w-4 object-contain opacity-70 z-30"
                   />
                   <img
                     src="/right.svg"
                     alt="right"
                     className="absolute right-10 sm:right-40 lg:right-72 top-6 sm:top-12 w-10 sm:w-16 md:w-20 object-contain opacity-70 z-30"
                   />
           
                   {/* Dark Overlay */}
                   <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/80 to-black/90"></div>
           
                   {/* Content */}
                   <div className="relative max-w-3xl mx-auto md:mt-8 text-white z-10 flex flex-col items-center justify-center space-y-5 sm:space-y-7 md:space-y-8">
                     <h2 className="text-xl md:text-[56px] font-manrope font-bold whitespace-nowrap leading-snug px-2">
                       Let's Build the Future Together
                     </h2>
           
                     <p className="text-sm sm:text-[30px] font-inter text-gray-200 leading-relaxed px-2">
                       Tells Us your goals. We'll design the runway then deliver it with AI, Cloud, and Data.
                     </p>
           
                     <button className="flex items-center gap-2 bg-red-600 hover:bg-gray-600 text-white font-medium px-5 sm:px-8 py-3 sm:py-6 text-sm sm:text-xl shadow-lg transition-all duration-300 ease-in-out">
                       Talk to an Expert{" "}
                       <ArrowUpRight className="border border-white rounded-full p-1" size={24} />
                     </button>
                   </div>
                 </section>
    </div>
  )
}

export default Executive
