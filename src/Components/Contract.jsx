import React from 'react'
import { ArrowUpRight } from "lucide-react"; // 
function Contract() {
return (
    <div className="w-full min-h-screen font-kumbh space-y-6 mt-16 flex flex-col justify-end" >
            <section
  className="relative w-full min-h-[550px] lg:mt-2 flex flex-col md:flex-row items-center justify-between overflow-hidden py-10 px-6 md:px-16 lg:px-28"
  style={{
    backgroundImage: "url('/worldmap.svg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Left Content */}
  <div className="relative z-10 flex-1 flex flex-col  items-start justify-center space-y-6 text-center md:text-left">
      <h1 className="text-lg md:text-2xl justify-start font-kumbh underline font-semibold lg:-ml-2  text-gray-800">Talent Hub</h1>
                <h2 className="self-stretch whitespace-nowrap lg:-ml-2 text-3xl md:text-5xl lg:text-7xl font-kumbh leading-[87.20px] font-bold text-red-600 mt-2">Contract/<br />Temporary Hiring</h2>


    <button className="py-4 px-7 border border-black ml-[53px] lg:-ml-1 text-black hover:bg-gray-200 transition-all duration-200">
      Consult With Us <span className="ml-2">↗</span>
    </button>
  </div>

  {/* Right Image */}
  <div className="mt-10 md:mt-0 md:flex-1 flex justify-center md:justify-end relative z-0">
    <img
     src="/Contract.svg"
      alt="Team"
      className="w-72 sm:w-80 md:w-[420px] lg:w-[500px] h-auto object-contain"
    />
  </div>
</section>
        <section className="w-full mx-auto bg-[#FFEBEB] px-4 sm:px-6 lg:px-8 py-12">
  <div className="space-y-6 ml-0 sm:ml-6 md:ml-[4.5rem] text-center md:text-left">
    <h1 className="text-2xl md:text-3xl  lg:text-4xl font-semibold font-kumbh leading-[57.20px] ">
      Contract & Temporary Hiring — Agility When You Need It
    </h1>
    <p className="text-sm sm:text-base leading-6 font-inter">
      Business demands can change overnight. Our Contract and Temporary Staffing services ensure you always have
      the right people at the right time.
    </p>

    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-6">
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-inter leading-10 font-bold">The DoelSoft Advantages:</h2>

        <div className="space-y-2">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <img src="/logo4.svg" className="w-8 h-8" alt="icon" />
            <span className="text-sm sm:text-xl font-normal font-inter leading-8">
              Ready-to-deploy professionals for immediate requirements
            </span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-2">
            <img src="/logo4.svg" className="w-8 h-8" alt="icon" />
            <span className="text-sm sm:text-base">
              Cost-effective solutions to optimize workforce budget
            </span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-2">
            <img src="/logo4.svg" className="w-8 h-8" alt="icon" />
            <span className="text-sm sm:text-base">
              Cost-effective solutions to optimize workforce budget
            </span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-2">
            <img src="/logo4.svg" className="w-8 h-8" alt="icon" />
            <span className="text-sm sm:text-base">
              Flexibility to scale teams up or down with ease
            </span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-2">
            <img src="/logo4.svg" className="w-8 h-8" alt="icon" />
            <span className="text-sm sm:text-base">
              Pre-vetted candidates who can hit the ground running
            </span>
          </div>
        </div>

        <div className="flex justify-center md:justify-start">
          <button className="mt-6 px-6 sm:px-8 py-3 sm:py-4 border border-black text-white bg-black hover:bg-gray-600 flex items-center gap-2 text-sm sm:text-base">
            <span>Stay flexible. Stay competitive with DoelSoft.</span>
            <ArrowUpRight  />
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 flex justify-center md:mt-4 md:mr-10 md:justify-end">
        <img
          src="/Contract1.svg"
          alt="Contract"
          className="w-full sm:w-auto md:w-auto lg:w-3/4 h-auto object-contain md:object-cover md:h-80 ml-0 "
        />
      </div>
    </div>
  </div>
</section>

  <div className="p-9 sm:p-8 md:p-10 lg:p-12 ml-4 sm:ml-8 md:ml-16">
  <h1 className="text-2xl sm:text-3xl md:text-[44px] font-semibold leading-[66px] font-kumbh text-gray-800 mb-4 text-center md:text-left">
    Our Core Values at Doelsoft
  </h1>

  <p className="text-black mb-6 text-base sm:text-xl font-normal font-inter leading-8 text-center md:text-left">
    At Doelsoft, we don't just fill roles — we build partnerships that fuel
    growth. Every staffing solution we provide, whether contract, permanent,
    offshore, or nearshore, is anchored in our unwavering core values. These
    principles guide us in creating meaningful connections between businesses
    and talent, ensuring trust, success, and long-term impact.
  </p>

  <div className="space-y-6 ml-0 sm:ml-2 md:ml-4 md:mr-28">
    {/* Trustworthy */}
    <div className="bg-white p-4 flex flex-col sm:flex-row items-start gap-4">
      <img
        src="./Result.svg"
        className="w-24 h-24 mx-auto bg-white border border-white p-4 sm:mx-0"
        alt="Trustworthy"
      />
      <div>
        <h3 className="text-black text-xl font-semibold font-kumbh leading-8 text-center sm:text-left">
          Trustworthy — Dependable in Every Step
        </h3>
        <p className="text-black text-sm sm:text-base md:text-[17px] font-normal font-inter leading-10 text-center sm:text-left">
          Your trust is our greatest responsibility. At Doelsoft, a promise is
          never taken lightly — we deliver on time, every time. From urgent
          contract needs to building long-term teams, our clients rely on us
          because we consistently keep our word and stand by our commitments.
        </p>
      </div>
    </div>

    {/* Stewardship */}
    <div className="bg-white p-4 flex flex-col sm:flex-row items-start gap-4">
      <img
        src="./Trustworthy.svg"
        className="w-24 h-24 mx-auto bg-white border border-white p-4 sm:mx-0"
        alt="Stewardship"
      />
      <div>
        <h3 className="text-black text-xl font-semibold font-kumbh leading-8 text-center sm:text-left">
          Stewardship — Taking Responsibility, Driving Results
        </h3>
        <p className="text-black text-sm sm:text-base md:text-[17px] font-normal font-inter leading-7 text-center sm:text-left">
          We see ourselves as stewards of your vision. That means taking
          ownership of every process and outcome — whether sourcing exceptional
          permanent hires or managing offshore teams. Through proactive
          solutions and transparent communication, we safeguard your goals as if
          they were our own.
        </p>
      </div>
    </div>

    {/* Credibility */}
    <div className="bg-white p-4 flex flex-col sm:flex-row items-start gap-4">
      <img
        src="./Stewardship.svg"
        className="w-24 h-24 mx-auto bg-white border border-white p-4 sm:mx-0"
        alt="Credibility"
      />
      <div>
        <h3 className="text-black text-xl font-semibold font-kumbh leading-8 text-center sm:text-left">
          Credibility — Trust Built on Action
        </h3>
        <p className="text-black text-sm sm:text-base md:text-[17px] font-normal font-inter leading-7 text-center sm:text-left">
          In today's competitive staffing landscape, credibility is everything.
          At Doelsoft, we back our words with consistent action. Every decision,
          placement, and engagement is grounded in honesty, fairness, and
          reliability — so you can count on us to be a partner you trust, time
          after time.
        </p>
      </div>
    </div>

    {/* Respect */}
    <div className="bg-white p-4 flex flex-col sm:flex-row items-start gap-4">
      <img
        src="./Credibility.svg"
        className="w-24 h-24 mx-auto bg-white border border-white p-4 sm:mx-0"
        alt="Respect"
      />
      <div>
        <h3 className="text-black text-xl font-semibold font-kumbh leading-8 text-center sm:text-left">
          Respect — People First, Always
        </h3>
        <p className="text-black text-sm sm:text-base font-normal md:text-[17px] font-inter leading-7 text-center sm:text-left">
          Behind every role is a person, and behind every business is a vision.
          We honor both. With humility and empathy, we treat every candidate and
          client as partners in success. Our respectful approach creates
          inclusive environments where diverse talent thrives and collaboration
          flourishes.
        </p>
      </div>
    </div>

    {/* Result-Oriented */}
    <div className="bg-white p-4 flex flex-col sm:flex-row items-start gap-4">
      <img
        src="./Respect.svg"
        className="w-24 h-24 mx-auto bg-white border border-white p-4 sm:mx-0"
        alt="Result-Oriented"
      />
      <div>
        <h3 className="text-black text-xl font-semibold font-kumbh leading-8 text-center sm:text-left">
          Result-Oriented — Excellence You Can Measure
        </h3>
        <p className="text-black text-sm sm:text-base font-normal md:text-[17px] font-inter leading-7 text-center sm:text-left">
          We don't just promise results — we deliver them. With strong processes,
          proven methodologies, and decades of experience, we provide reliable
          outcomes that give you a competitive edge. Every staffing solution is
          designed to add measurable value to your business.
        </p>
      </div>
    </div>
  </div>

  <div className="mt-6 p-6 sm:p-14 bg-red-600 text-white text-center">
    <p className="text-sm sm:text-xl md:text-3xl font-kumbh font-medium leading-9">
      At Doelsoft, our values are not just words — they are the foundation of
      every decision, every interaction, and every success story we help create.
      Partner with us, and let's build not just your team, but your future.
    </p>
  </div>
</div>
<section
  className="relative w-full bg-cover bg-center text-center py-16 md:h-[568px] sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
  style={{ backgroundImage: "url('/Background2.svg')", marginTop: "45px" }}
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
      Let's Build the Future Together
    </h2>

    <p className="text-sm sm:text-[30px] font-inter text-gray-200 leading-relaxed px-2">
      Tells Us your goals. We'll design the runway then deliver it with AI, Cloud and Data.
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

export default Contract
