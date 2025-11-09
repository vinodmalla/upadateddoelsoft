import React from 'react'
import { ArrowUpRight } from 'lucide-react'

function Permanent() {
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
        {/* LEFT CONTENT */}
        <div className="relative z-10 flex-1 flex flex-col items-center md:items-start justify-center space-y-6 text-center md:text-left">
          <h1 className="text-lg md:text-2xl font-kumbh underline font-semibold text-gray-800">
            Talent Hub
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-kumbh leading-tight md:leading-[87.20px] font-bold text-red-600 mt-2">
            Permanent Hiring
          </h2>

          <button className="py-3 sm:py-4 px-6 sm:px-7 border border-black text-black hover:bg-gray-200 transition-all duration-200">
            Consult With Us <span className="ml-2">↗</span>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="mt-10 md:mt-0 md:flex-1 flex justify-center md:justify-end relative z-0">
          <img
            src="/Permanent.svg"
            alt="Team"
            className="w-60 sm:w-72 md:w-[420px] lg:w-[500px] h-auto object-contain"
          />
        </div>
      </section>

      {/* SECOND SECTION */}
      <section
        className="w-full bg-[#F3F3F3] py-12 px-4 sm:px-6"
        style={{ marginBottom: '-25px' }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl lg:ml-20 mx-auto gap-10">
          {/* TEXT CONTENT */}
          <div className="space-y-6 text-center md:text-left w-full md:w-1/2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-kumbh leading-snug md:leading-[57.20px]">
              Permanent Hiring — Building Your Core Team
            </h1>
            <p className="text-sm sm:text-base font-inter leading-6 mt-4">
              Sustainable success comes from building a strong foundation of
              permanent talent. Our hiring solutions go beyond resumes. We
              assess candidates for technical expertise, cultural alignment, and
              long-term value to your organization.
            </p>

            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-inter leading-8 md:leading-10 font-bold">
              Why Doelsoft Stands Out:
            </h2>

            <ul className="space-y-3 mt-4">
              {[
                'Talent mapping to identify the right fit, not just a quick match',
                'Emphasis on reducing attrition and wrong hires',
                'Focus on stability and leadership potential',
                'Proven success across industries in building high-performing teams',
              ].map((text, i) => (
                <li key={i} className="flex items-start justify-start text-left">
                  <img
                    src="/logo4.svg"
                    alt=""
                    className="h-5 w-5 mr-3 mt-1 flex-shrink-0"
                  />
                  <span className="text-sm sm:text-base md:text-lg font-normal font-inter leading-6">
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href="#"
                className="inline-block bg-[#E10000] text-white font-medium text-sm sm:text-base md:text-lg px-5 sm:px-6 py-3 hover:bg-red-600 transition"
              >
                Hire once, hire right with Doelsoft permanent staffing. ↗
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-10 md:mt-20 lg:-mb-12">
            <img
              src="/Happy_men.svg"
              alt="Smiling professional"
              className="w-64 sm:w-80 md:w-[539px] h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* WHY DOELESOFT SECTION */}
      <section className="py-10 bg-white text-start font-sans px-4 sm:px-6" style={{marginBottom:"-10px"}}>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-kumbh text-black leading-snug md:leading-[57.20px] mb-4 text-center md:text-left md:ml-[6.5rem]">
          Why Doelsoft?
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-normal font-inter text-black mb-10 max-w-3xl mx-auto text-center md:text-left md:ml-[6.5rem]">
          When it comes to recruitment, we don’t just deliver candidates — we
          deliver confidence.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            {
              img: './Tailored.svg',
              title: 'Tailored Approach',
              desc: 'Every solution is designed to match your unique challenges.',
            },
            {
              img: './Unmatched.svg',
              title: 'Unmatched Quality',
              desc: 'Strict screening ensures only the best reach you.',
            },
            {
              img: './Precision.svg',
              title: 'Speed with Precision',
              desc: 'Fast closures without compromising fit.',
            },
            {
              img: './Partnership.svg',
              title: 'Long-Term Partnership',
              desc: 'More than a vendor, we are your hiring ally.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border border-black p-6 text-left mx-auto w-full max-w-[320px] sm:max-w-[280px] h-auto"
            >
              <img src={item.img} alt={item.title} className="w-14 h-14 mb-4" />
              <h3 className="text-lg md:text-xl font-semibold font-kumbh leading-8 mb-2">
                {item.title}
              </h3>
              <p className="text-base font-normal font-inter leading-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative Logo */}
        <div className="hidden md:flex absolute right-8 sm:right-[8.5rem] ">
          <img
            src="/logo4.svg"
            alt="logo"
            className="w-16 sm:w-[6.5rem]  h-auto"
          />
        </div>
      </section>

      {/* CTA SECTION */}
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

export default Permanent
