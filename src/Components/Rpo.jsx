import React from 'react'
import { ArrowUpRight } from 'lucide-react'

function Rpo() {
  return (
    <div className="w-full min-h-screen font-kumbh space-y-6 mt-16 flex flex-col justify-end overflow-hidden">
      {/* HERO SECTION */}
      <section
        className="relative w-full min-h-[550px] md:mt-2 flex flex-col md:flex-row items-center justify-between overflow-hidden py-10 px-4 sm:px-8 md:px-16 lg:px-28"
        style={{
          backgroundImage: "url('/worldmap.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Left Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center md:items-start space-y-6 justify-center text-center md:text-left">
          <h1 className="text-lg md:text-2xl font-kumbh underline font-semibold text-gray-800">
            Talent Hub
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-kumbh font-bold text-red-600 mt-2">
            RPO
          </h2>

          <button className="py-3 sm:py-4 px-6 sm:px-7 border border-black text-black hover:bg-gray-200 transition-all duration-200">
            Consult With Us <span className="ml-2">↗</span>
          </button>
        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-0 md:flex-1 flex justify-center md:justify-end relative z-0">
          <img
            src="/Rpo.svg"
            alt="Team"
            className="w-60 sm:w-72 md:w-[420px] lg:w-[500px] h-auto object-contain"
          />
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="w-full bg-white py-12 px-4 sm:px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-10">
          {/* Text Content */}
          <div className="w-full md:w-1/2 ml-10 lg:-ml-5 lg:-mt-32">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl whitespace-normal lg:whitespace-nowrap font-semibold font-kumbh text-black leading-snug">
              RPO (Recruitment Process Outsourcing)
              <br />
              End-to-End Hiring Excellence
            </h1>
            <p className="text-black font-inter font-normal text-base sm:text-lg leading-6 mt-4">
              Hiring doesn’t have to drain your time and resources. With
              Doelsoft’s customized RPO solutions, we act as a seamless
              extension of your HR team, managing everything from talent
              sourcing to onboarding — with measurable cost savings and faster
              turnaround.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold leading-10 font-kumbh text-black mt-6">
              Why Doelsoft RPO Works:
            </h2>
            <ul className="space-y-3 mt-4">
              {[
                'Flexible models tailored to your business goals',
                'Data-driven insights for smarter hiring decisions',
                'Cost savings with a faster time-to-hire',
                'Full accountability for process, quality, and results',
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <img
                    src="/logo4.svg"
                    alt=""
                    className="h-6 w-6 mr-3 mt-1 flex-shrink-0"
                  />
                  <span className="text-black font-inter text-base sm:text-lg leading-6">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="mt-8 w-72 md:w-auto">
              <a
                href="#"
                className="inline-block bg-[#E10000] text-white font-medium text-base sm:text-lg px-4 sm:px-6 py-3 "
              >
                Outsource the process. Keep the control. With Doelsoft RPO.
                <span className="ml-2">↗</span>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/Rpohiring.svg"
              alt="Smiling professional holding 'We Are Hiring' sign"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* WHY DOELESOFT */}
      <section className="py-10 bg-white text-start font-sans px-4 sm:px-8">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-kumbh text-black leading-snug mb-4 text-center md:text-left md:ml-[5rem]">
          Why Doelsoft?
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-normal font-inter text-black mb-10 max-w-3xl mx-auto md:ml-[5rem] text-center md:text-left">
          When it comes to recruitment, we don’t just deliver candidates — we
          deliver confidence.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto md:ml-[4rem]">
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
          ].map((card, i) => (
            <div
              key={i}
              className="border border-black p-6 text-left mx-auto w-full max-w-[320px] sm:max-w-[280px] h-auto"
            >
              <img src={card.img} className="w-14 h-14 mb-4" alt={card.title} />
              <h3 className="text-lg md:text-xl font-semibold font-kumbh leading-8 mb-2">
                {card.title}
              </h3>
              <p className="text-base font-normal font-inter leading-6">
                {card.desc}
              </p>
            </div>
          ))}
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

export default Rpo
