import React from 'react'
import { ArrowUpRight } from "lucide-react";

function MobileDevelopment() {
    const features = [
  {
    icon: '/p1.svg',
    title: 'Client-Centric Approach',
    description: 'We understand your business goals before coding begins.',
  },
  {
    icon: "/p2.svg",
    title: 'Agile & Transparent Process',
    description: 'Regular updates, flexibility, and faster delivery.',
  },
  {
    icon: '/p3.svg',
    title: 'Innovation-Driven',
    description: 'AI, IoT, Blockchain, AR/VR integrated into modern apps.',
  },
  {
    icon: '/p4.svg',
    title: 'Global Expertise',
    description: 'Serving startups, SMEs, and enterprises across the USA, India & worldwide.',
  },
  {
    icon: '/p5.svg',
    title: 'Proven Success',
    description: 'Apps delivered with millions of downloads and 5-star user ratings.',
  },
];
return (
    <div className="w-full font-kumbh bg-white md:overflow-hidden mt-8 overflow-x-hidden">
    
                  <section
  className="relative w-full min-h-[550px] flex flex-col mt-20 md:flex-row items-center justify-between overflow-hidden py-10 px-6 md:px-16 lg:px-28"
  style={{
    backgroundImage: "url('/worldmap.svg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Left Content */}
  <div className="relative z-10 flex-1 flex flex-col space-y-6 items-start justify-center text-center md:text-left">
    <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-[71.5px] font-semibold text-[#EF0E0E] leading-snug mb-6">
       Mobile App <br className="hidden sm:block" />
      <span className="block mt-2">Development</span>
      
    </h2>

    <button className=" px-5 py-4 md:px-7 border border-black text-black hover:bg-gray-200 transition-all duration-200">
      Consult With Us <span className="ml-2">↗</span>
    </button>
  </div>

  {/* Right Image */}
  <div className="mt-10 md:mt-16 md:flex-1 flex justify-center md:justify-end relative z-0">
    <img
      src="/MobileDevelopment.svg"
      alt="Team"
      className="w-72 sm:w-80 md:w-[420px] lg:w-[500px] h-auto object-contain"
    />
  </div>
</section>
        <section className="mx-auto px-16 md:px-24 mt-4 py-20 bg-[#F4F6FB] grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-kumbh leading-[57.20px] text-black text-start md:ml-3 whitespace-normal lg:whitespace-nowrap">
    Doelsoft Mobile App Development <br /> Apps That Inspire Growth
  </h2>

  <p className="text-black text-lg sm:text-xl font-inter font-normal leading-8 text-balance md:text-start md:ml-4">
    In today’s digital-first world, your customers are on mobile and your business should be too. At Doelsoft,
    a leading mobile app development company in the USA & India, we create mobile applications that are innovative,
    scalable, and customer-centric.
  </p>

  <p className="text-black text-lg sm:text-xl font-inter font-normal leading-8 text-balance md:text-start md:ml-4">
    From iOS and Android app development to cross-platform and enterprise mobility solutions, we bring together technology,
    creativity, and strategy to deliver apps that help businesses grow and users stay engaged.
  </p>
</div>

            <div className="flex justify-center">
                <img
                    src="MobileApp.svg"
                    alt="Custom Software"
                    className="max-w-sm w-auto h-auto p-4"
                />
            </div>
        </section>
       <section className="container mx-auto px-4 sm:px-6 lg:px-20 py-12 grid gap-10 md:grid-cols-2 items-center">
  {/* Left Image */}
  <div className="flex justify-center md:justify-start">
    <img
      src="Mobilemen.svg"
      alt="Business Team"
      className="w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-md object-contain"
    />
  </div>

  {/* Right Content */}
  <div className="space-y-8 lg:-ml-32 md:mr-4 lg:mr-16 px-4 md:px-0">
    <h2 className="text-2xl sm:text-3xl md:text-4xl text-center font-kumbh font-semibold text-black leading-[57.20px]">
      🌟 Our Mobile App Development <br /> Expertise
    </h2>

    <div className="space-y-6">
      {[
        {
          src: "/m1.svg",
          title: "iOS App Development",
          desc: "Feature-rich apps optimized for iPhones, iPads, and Apple Watches with unmatched performance and design.",
        },
        {
          src: "/m2.svg",
          title: "Android App Development",
          desc: "Scalable, secure apps compatible across multiple devices and OS versions.",
        },
        {
          src: "/m3.svg",
          title: "Cross-Platform Development (Flutter & React Native)",
          desc: "Build once, deploy everywhere. Faster time-to-market and cost efficiency.",
        },
        {
          src: "/m4.svg",
          title: "Enterprise Mobility Solutions",
          desc: "Tailored apps that streamline operations, boost collaboration, and empower decision-making.",
        },
        {
          src: "/m5.svg",
          title: "UI/UX Design Excellence",
          desc: "Apps designed with accessibility, usability, and customer engagement at the core.",
        },
        {
          src: "/m6.svg",
          title: "App Maintenance & Support",
          desc: "Continuous updates, optimization, and technical support for seamless performance.",
        },
      ].map((item, idx) => (
        <div key={idx} className="flex flex-col items-center sm:flex-row gap-4 sm:gap-6 lg:items-start">
          <div className="flex-shrink-0 bg-white border border-gray-300 p-3 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20">
            <img src={item.src} alt={item.title} className="w-8 h-8 sm:w-12 sm:h-12 object-contain" />
          </div>
          <div className='text-center md:text-start'>
            <h3 className="text-lg sm:text-xl  font-semibold text-black font-kumbh leading-8">{item.title}</h3>
            <p className="text-zinc-800 text-base sm:text-lg font-inter font-normal leading-7 whitespace-pre-line">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="bg-[#F4F6FB] py-10">
        <div className="px-6 sm:px-12 md:px-20 md:ml-7 text-center md:text-left space-y-4">
          <h1  className="text-3xl sm:text-4xl font-bold">🏢 Industries We Serve</h1>
          <p className="text-gray-600 md:ml-2">Doelsoft has deep expertise in industry-specific mobile apps:</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:ml-9 py-10 px-6 sm:px-12 md:px-20 gap-6">
          {[
      { src: "/ecommerce.svg", title: "E-commerce & Retail", desc: "Mobile shopping, AI recommendations, secure payments." },
      { src: "/health_care.svg", title: "Healthcare Apps", desc: "Telemedicine, patient tracking, fitness solutions, HIPAA compliance." },
      { src: "/finance.svg", title: "Banking & FinTech Apps", desc: "Digital wallets, investment platforms, secure payment gateways." },
      { src: "/education.svg", title: "Education Apps", desc: "Online learning, gamified modules, live classes, progress tracking." },
      { src: "/travel.svg", title: "Travel & Hospitality Apps", desc: "Bookings, loyalty programs, AR-based travel guides." },
      { src: "/media.svg", title: "Media & Entertainment Apps", desc: "Streaming, gaming, social media, content sharing." },
      { src: "/realestate.svg", title: "Real Estate Apps", desc: "Listings, virtual tours, intelligent property searches." },
      { src: "/logistics.svg", title: "Logistics & Transportation Apps", desc: "Fleet management, GPS tracking, delivery solutions." }
    ].map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 items-center hover:shadow-md transition"
            >
              <img src={item.src} alt={item.title} className="w-full h-40 object-cover" />
              <div className="sm:pl-4 mt-4 sm:mt-0 border border-black h-40 p-4 sm:p-8 text-center sm:text-left">
                <h3 className="font-semibold text-lg text-zinc-950 capitalize leading-6">{item.title}</h3>
                <p className="text-zinc-950 text-base  font-normal font-inter leading-6 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-12">
  <div className="text-center md:text-left px-4 sm:px-6 lg:ml-6 lg:px-20 mb-10">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-kumbh font-semibold mb-4 leading-[66px]">
      👨‍💻 Our Talent Pool – Powered by Doelsoft Experts
    </h1>
    <p className="text-lg sm:text-xl md:ml-2 text-black font-inter font-normal leading-8 max-w-3xl mx-auto md:mx-0">
      Our skilled mobile app developers in the USA and India ensure every project is delivered with precision:
    </p>
  </div>

  {/* Talent Cards */}
  <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-32 grid gap-6 grid-cols-1 lg:grid-cols-2">
    {[
      { src: "/t1.svg", desc: "Certified iOS & Android developers proficient in Swift, Kotlin, Java, React Native, and Flutter." },
      { src: "/t2.svg", desc: "Creative UI/UX designers focused on intuitive, engaging, and inclusive experiences." },
      { src: "/t3.svg", desc: "Dedicated QA testers ensuring bug-free, accessible, and performance-driven apps." },
      { src: "/t4.svg", desc: "Agile project managers delivering on-time, client-focused solutions." },
    ].map((item, idx) => (
      <div
        key={idx}
        className="flex flex-col sm:flex-row items-start gap-4 p-6 sm:p-8 bg-white border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <div className="flex-shrink-0">
          <img src={item.src} alt="" className="w-12 h-12 sm:w-16 sm:h-16" />
        </div>

        <p className="text-zinc-900 font-medium text-base sm:text-lg font-kumbh leading-6">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</section>


     <section className="bg-[#F4F6FB] py-12 px-4 sm:px-6 lg:px-20 font-sans" style={{marginBottom:"-44px"}} >
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10">
    
    {/* Left Content */}
    <div className="flex-1 ">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-center lg:-ml-7 justify-start lg:whitespace-nowrap font-kumbh font-semibold mb-8 leading-[57.20px]">
        💡 Why Partner with Doelsoft for Mobile App Development?
      </h1>

      <div className="space-y-6 lg:-ml-3">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col sm:flex-row items-start gap-4  sm:gap-6 p-4 sm:p-0 bg-white sm:bg-transparent ">
            <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center border border-white bg-white">
              <img src={feature.icon} alt={feature.title} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
            </div>
            <div>
              <h4 className="text-lg justify-start sm:text-xl font-semibold font-kumbh text-black leading-8">{feature.title}</h4>
              <p className="text-zinc-800 text-sm sm:text-base font-kumbh font-normal">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Right Image */}
    <div className="flex-1  justify-center flex lg:justify-end">
      <img
        src="/youngmen.svg"
        alt="Man holding toy plane"
        className="w-auto h-[40rem] ml-80 "
      />
    </div>
    
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

export default MobileDevelopment
