import React from "react";
import { ArrowUpRight } from "lucide-react";

function Insights() {
  const insights = [
    {
      img: "/Client1.svg",
      client: "Client Name",
      title: "Top AI Consulting Trends 2025",
      desc: "What matters now and how leaders can build durable advantage.",
    },
    {
      img: "/client2.svg",
      client: "Client Name",
      title: "AI-Powered Software Development",
      desc: "From scaffolds to scale: patterns for shipping smarter, faster.",
    },
    {
      img: "/Client1.svg",
      client: "Client Name",
      title: "Top AI Consulting Trends 2025",
      desc: "What matters now and how leaders can build durable advantage.",
    },
    {
      img: "/client2.svg",
      client: "Client Name",
      title: "AI-Powered Software Development",
      desc: "From scaffolds to scale: patterns for shipping smarter, faster.",
    },
    {
      img: "/Client1.svg",
      client: "Client Name",
      title: "Top AI Consulting Trends 2025",
      desc: "What matters now and how leaders can build durable advantage.",
    },
    {
      img: "/client2.svg",
      client: "Client Name",
      title: "AI-Powered Software Development",
      desc: "From scaffolds to scale: patterns for shipping smarter, faster.",
    },
    {
      img: "/Client1.svg",
      client: "Client Name",
      title: "Top AI Consulting Trends 2025",
      desc: "What matters now and how leaders can build durable advantage.",
    },
    {
      img: "/client2.svg",
      client: "Client Name",
      title: "AI-Powered Software Development",
      desc: "From scaffolds to scale: patterns for shipping smarter, faster.",
    },
    {
      img: "/Client1.svg",
      client: "Client Name",
      title: "Top AI Consulting Trends 2025",
      desc: "What matters now and how leaders can build durable advantage.",
    },
    {
      img: "/client2.svg",
      client: "Client Name",
      title: "AI-Powered Software Development",
      desc: "From scaffolds to scale: patterns for shipping smarter, faster.",
    },
    {
      img: "/Client1.svg",
      client: "Client Name",
      title: "Top AI Consulting Trends 2025",
      desc: "What matters now and how leaders can build durable advantage.",
    },
    {
      img: "/client2.svg",
      client: "Client Name",
      title: "AI-Powered Software Development",
      desc: "From scaffolds to scale: patterns for shipping smarter, faster.",
    },
  ];

  return (
    <div className="relative max-w-screen mx-auto font-kumbh bg-white mt-8 overflow-hidden">
      {/* SECTION 1: Header */}
       <section
  className="relative w-full min-h-[550px] flex flex-col md:flex-row items-center justify-between overflow-hidden py-10 px-6 md:px-16 lg:px-28"
  style={{
    backgroundImage: "url('/worldmap.svg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Left Content */}
  <div className="relative z-10 flex-1 flex flex-col items-start justify-center text-center md:text-left">
    
      <h2 className="text-3xl ml-[55px] sm:text-5xl md:text-6xl lg:text-[71.5PX] md:-mt-20 md:-ml-2 font-semibold font-kumbh text-[#EF0E0E] leading-snug mb-8">
      DoelSoft Careers & <br className="hidden sm:block" />
      <span className="block mt-2">Opportunity</span>
    </h2>


     <button className="py-4 px-10   border border-black ml-[45px] md:-ml-1  text-black hover:bg-gray-200 transition-all duration-200">
      Consult With Us <span className="ml-2">↗</span>
    </button>
  </div>

  {/* Right Image */}
  <div className="mt-10 md:mt-14 md:flex-1 flex justify-center md:justify-end relative z-0">
    <img
      src="/Carrers.svg"
      alt="Team"
      className="w-72 sm:w-80 md:w-[420px] lg:w-[500px] h-auto object-contain"
    />
  </div>
</section>
      

      <section className="px-4 bg-[#F4F6FB] py-6 sm:px-6 lg:px-8 mt-8">
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto"> 
          {insights.map((item, i) => ( 
            <div key={i} className="relative shadow-lg group h-auto sm:h-[380px] md:h-[416px]" >
             <img src={item.img} alt={item.title} className="w-full h-48 sm:h-60 md:h-60 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-[#1E1E1E] text-white p-4 sm:p-6">
                 <p className="text-xs sm:text-sm text-gray-300">{item.client}</p>
                  <h3 className="text-base sm:text-lg font-semibold mt-1"> {item.title} </h3>
                   <p className="text-xs sm:text-sm text-gray-300 mt-1 leading-relaxed"> {item.desc} </p>
                    <div className="flex justify-end mt-3"> 
                      <button className="p-2 rounded-full bg-[#1E1E1E] hover:bg-white/20 transition"> 
                      <ArrowUpRight className="border border-white rounded-full text-center" size={22} /> </button>
                       </div>
                      </div>
                       </div> ))} 
                       </div> 
                       </section>
 
      <section
                             className="relative w-full  bg-cover bg-center text-center py-16 md:h-[568px]   sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
                             style={{ backgroundImage: "url('/Background2.svg')",marginTop:"1px" } }
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
                           
                             {/* Dark overlay */}
                             <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/80 to-black/90"></div>
                           
                             {/* Main Content */}
                             <div className="relative max-w-3xl mx-auto md:mt-8 text-white z-10 flex flex-col items-center justify-center space-y-5 sm:space-y-7 md:space-y-8">
                               <h2 className="text-xl md:text-[56px] font-manrope font-bold whitespace-nowrap leading-snug px-2">
                                🌍 Build a <span className="font-semibold">Connected Future</span>{" "}
            with Doelsoft
                               </h2>
                           
                               <p className="text-sm sm:text-[30px] font-inter text-gray-200 leading-relaxed px-2">
                                 👉 Partner with Doelsoft – Your trusted iOS & Android app development company in the USA & India.
                               </p>
                           
                               <button className="flex items-center gap-2  bg-red-600 hover:bg-gray-600 text-white font-medium px-5 sm:px-8 py-3 sm:py-6 text-sm sm:text-xl  shadow-lg transition-all duration-300 ease-in-out">
                                 Talk to an Expert{" "}
                                 <ArrowUpRight
                                   className="border border-white rounded-full p-1"
                                   size={24}
                                 />
                               </button>
                             </div>
                           </section>
    </div>
  );
}

export default Insights;
