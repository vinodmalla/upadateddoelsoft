import React from 'react'
import { ArrowUpRight } from "lucide-react"; // for arrow icons

function ITStaffing() {
       const Staffing=[{
        img:"/Staffing1.svg",
        desc:"Access to a diverse pool of top IT professionals across lastest technologies."
    },{
        img:"/Staffing3.svg",
        desc:"Abbility to close niche and highly specialized roles with speed."
    },{
        img:"/Staffing4.svg",
        desc:"Scalable solutions for Startups,SMEs and Enterprises alike."
    },{
        img:"./Staffing5.svg",
        desc:"A balance of speed,quality and long-term fit."
    }]
  return (
    <div className="w-full min-h-screen font-kumbh space-y-6 mt-16 flex flex-col justify-end">
        
      <section
  className="relative w-full min-h-[550px]  lg:mt-2 flex flex-col md:flex-row items-center justify-between overflow-hidden py-10 px-6 md:px-16 lg:px-28"
  style={{
    backgroundImage: "url('/worldmap.svg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    
  }}
>
  {/* Left Content */}
  <div className="relative z-10 flex-1 flex flex-col space-y-6 items-start justify-center text-center md:text-left">
     <h1 className="text-lg md:text-2xl justify-start font-kumbh underline font-semibold lg:-ml-2  text-gray-800">Talent Hub</h1>
        <h2 className="self-stretch whitespace-nowrap lg:-ml-2 text-3xl md:text-5xl lg:text-7xl font-kumbh leading-[87.20px] font-bold text-red-600 mt-2">IT Staffing Solutions</h2>

    <button className="py-4 px-7 border border-black ml-[53px] lg:-ml-2 text-black hover:bg-gray-200 transition-all duration-200">
      Consult With Us <span className="ml-2">↗</span>
    </button>
  </div>

  {/* Right Image */}
  <div className="mt-10 md:mt-0 md:flex-1 flex justify-center md:justify-end relative z-0">
    <img
    src="/ITStaffing.svg" 
      alt="Team"
      className="w-72 sm:w-80 md:w-[420px] lg:w-[500px] h-auto object-contain"
    />
  </div>
</section>
    <section className="w-full h-auto mx-auto bg-black px-4 sm:px-6 lg:px-8 py-16" style={{marginBottom:"-40px"}}>
  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto items-center lg:items-start">
    
    {/* Left Content */}
    <div className="ml-0 sm:-ml-6 space-y-6  md:mt-10 text-center lg:text-left">
      <h1 className="text-white text-2xl md:text-3xl font-kumbh justify-start lg:text-4xl leading-[57.20px] font-semibold">
        IT Staffing Solutions <br className="hidden sm:block" /> Powering Your Digital Growth
      </h1>

      <p className="text-white text-sm sm:text-base font-normal  font-inter justify-start  leading-6">
        The IT landscape evolves at lightning speed. To stay ahead, you need
        <br className="hidden sm:block" /> professionals who can adapt, innovate, and deliver. At DoelSoft, we connect you
        <br className="hidden sm:block" /> with experts who bring both technical excellence and a problem-solving mindset.
      </p>

      <h2 className="text-white text-xl md:text-2xl font-inter  font-medium lg:text-3xl leading-10">Why Choose DoelSoft IT Staffing?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8 justify-items-center lg:justify-items-start">
        {Staffing.map((item, index) => (
          <div
            key={index}
            className="border border-black p-2 sm:p-4 md:p-6 w-64 sm:w-72 h-auto sm:h-48 bg-red-600 flex flex-col items-start text-start sm:text-left"
          >
            <img src={item.img} alt="icon" className="w-12 h-12 " />
            <p className="text-white py-4 sm:py-6 text-sm sm:text-lg font-inter font-normal leading-7 justify-start">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center lg:justify-start">
        <button className="mt-6 px-8 sm:px-24 md:px-36 py-3 sm:py-4 border lg:whitespace-nowrap border-white text-white hover:bg-gray-200 hover:text-black text-sm sm:text-base">
          Build your next-gen IT Team with DoelSoft. ↗
        </button>
      </div>
    </div>

    {/* Right Image */}
 <div className="w-auto  h-auto md:w-[800px] md:h-[30rem] flex items-center justify-center bg-transparent" >
    <img
      src="/ITStaffing1.svg"
      alt="ITStaffing"
      className=" w-full h-full md:h-[745px] md:w-[564px] mt-[34rem] " 
     
    />
  </div>
  </div>
</section>

   <section className="py-20 bg-[#F3F3F3] w-full max-w-full text-start font-sans overflow-x-hidden" style={{marginBottom:"-40px"}}>
  {/* ===== WHY DOELSOFT ===== */}
  <h1 className="text-xl sm:text-2xl md:text-[44px] font-semibold ml-4 sm:ml-10 lg:ml-28 text-black mb-4">
    Why Doelsoft?
  </h1>

  <p className="text-base md:text-xl font-normal text-black ml-4 sm:ml-10 lg:ml-[7.5rem] mb-10 font-inter max-w-full sm:max-w-2xl md:max-w-3xl">
    When it comes to recruitment, we don't just deliver candidates — we deliver confidence.
  </p>

  {/* ✅ FIXED GRID SECTION */}
  <div
    className="
      grid
      grid-cols-1
      xs:grid-cols-2
      sm:grid-cols-2
      
      md:grid-cols-2
      lg:grid-cols-4
      gap-6 sm:gap-8 md:gap-10
      ml-4 sm:ml-10 lg:ml-20
      max-w-full lg:max-w-7xl
      overflow-x-visible
      justify-items-center
      px-2 sm:px-4
    "
  >
    {[
      {
        icon: "./Tailored.svg",
        title: "Tailored Approach",
        desc: "Every solution is designed to match your unique challenges.",
      },
      {
        icon: "./Unmatched.svg",
        title: "Unmatched Quality",
        desc: "Strict screening ensures only the best reach you.",
      },
      {
        icon: "./Precision.svg",
        title: "Speed with Precision",
        desc: "Fast closures without compromising fit.",
      },
      {
        icon: "./Partnership.svg",
        title: "Long-Term Partnership",
        desc: "More than a vendor, we are your hiring ally.",
      },
    ].map((item, idx) => (
      <div
        key={idx}
        className="border border-black p-1 px-2 sm:p-4 md:p-6 md:py-10 mx-2 sm:mx-4 md:mx-6 w-[90%] lg:ml-16 sm:w-[280px] md:w-72 h-auto md:h-64 text-left "
      >
        <img src={item.icon} className="w-14 h-14 mb-4" alt={item.title} />
        <h3 className="text-lg md:text-xl mt-2 whitespace-nowrap font-extralight font-kumbh mb-2">
          {item.title}
        </h3>
        <p className="text-zinc-800 mt-6 text-base font-normal font-inter leading-6">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</section>

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

export default ITStaffing

