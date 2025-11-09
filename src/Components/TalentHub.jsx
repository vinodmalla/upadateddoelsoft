import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import ClientReviews from "./ClentReviews";

function TalentHub() {
  const services = [
    { id: 1, title: "IT Staffing Solutions", image: "/Image1.svg", link: "/itstaffing" },
    { id: 2, title: "Contract & Temporary Hiring", image: "/Image2.svg", link: "/contract" },
    { id: 3, title: "Permanent Hiring", image: "/Image3.svg", link: "/permanent" },
    { id: 4, title: "Executive Search", image: "/Image4.svg", link: "/excutive" },
    { id: 5, title: "RPO", image: "/Image5.svg", link: "/rpo" },
  ];

  return (
    <div className="overflow-x-hidden"> {/* ✅ Prevents any horizontal overflow */}
      {/* ===== Hero Section ===== */}
      <section className="relative w-full mt-28 py-20 flex flex-col items-center text-center overflow-hidden">
        <div
          className="absolute md:ml-48 md:top-[-80px] bg-cover bg-center inset-0"
          style={{ backgroundImage: "url('/worldmap.svg')", width: "1296px", height: "683px" }}
        ></div>

        <div className="relative z-10 px-4 space-y-10">
          <h1 className="text-4xl md:text-[71px] font-semibold font-kumbh text-[#EF0E0E]">
            Recruitment
          </h1>
          <h2 className="text-3xl md:text-[71px] font-semibold font-kumbh text-gray-800 my-2">
            &
          </h2>
          <h1 className="text-4xl md:text-[71px] font-semibold font-kumbh text-[#EF0E0E]">
            Staffing Services
          </h1>
        </div>

        {/* Buttons */}
        <div className="mt-24 flex flex-wrap justify-center gap-8 z-10 relative px-4">
          <button className="transition-all duration-300 ease-in-out flex items-center gap-2 bg-[#EF0E0E] text-white px-12 py-5 font-medium hover:bg-gray-600 focus:outline-none">
            About Doelsoft <ArrowUpRight size={18} />
          </button>
          <button className="transition-all duration-300 ease-in-out flex items-center gap-2 border border-gray-600 px-12 py-5 font-medium hover:bg-[#EF0E0E] hover:text-white focus:outline-none">
            Consult With Us <ArrowUpRight size={18} />
          </button>
        </div>

        {/* Floating Images */}
        <div className="relative w-full max-w-5xl mt-12 px-4">
          {/* Floating avatars (unchanged) */}
          <img src="/img1.svg" alt="profile1" className="absolute -top-[36rem] left-2 sm:-top-72 sm:left-8 md:-top-[28rem] lg:-top-[24rem] md:left-20 lg:-left-24 w-20 h-20 md:w-24 md:h-24 lg:w-24 lg:h-24 rounded-full object-cover" />
          <img src="/img3.svg" alt="profile2" className="absolute top-0 left-2 sm:-top-8 sm:-left-4 md:-top-12 md:left-4 lg:-left-36 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover" />
          <img src="/img2.svg" alt="profile3" className="absolute -top-[36rem] right-2 sm:-top-72 md:-top-[30rem] sm:right-8 lg:-top-[26rem] lg:-right-36 w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:36 lg:w-40 lg:h-40 rounded-full object-cover" />
          <img src="/img4.svg" alt="profile4" className="absolute -bottom-20 right-4 sm:-top-4 md:-top-24 lg:-top-20 lg:-right-36 w-20 h-20 sm:w-24 sm:h-36 md:w-36 md:h-40 rounded-full object-cover" />
          <img src="/img5.svg" alt="profile5" className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover" />
        </div>
      </section>

      {/* ===== Services Section ===== */}
      <section className="w-full bg-white py-16 px-6 md:px-12 max-w-full">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-[44px] font-semibold font-kumbh text-gray-900">
            Recruitment & Staffing Services
          </h2>
          <p className="text-gray-600 text-xl font-normal font-inter mt-4">
            At Doelsoft, we believe that recruitment is more than filling vacancies
            it’s about creating partnerships that shape the future of businesses.
            We combine deep industry knowledge, advanced hiring practices, and a
            powerful talent network to deliver people who not only meet
            requirements but also inspire growth.
          </p>
          <p className="font-semibold font-inter text-xl mt-4">
            With us, you don’t just hire resources. You hire results.
          </p>
        </div>

        {/* Row 1 */}
        <div className="hidden lg:flex flex-wrap justify-center items-center gap-10 px-8 md:mr-7">
          {services.slice(0, 3).map((service) => (
            <div key={service.id} className="w-full sm:w-[280px] md:w-[380px] bg-black text-white shadow-lg overflow-hidden">
              <img src={service.image} alt={service.title} className="w-[28rem] h-96 object-cover" />
              <div className="p-4 text-center">
                <Link to={service.link}>
                  <h3 className="text-lg font-semibold font-kumbh md:text-2xl whitespace-nowrap">
                    {service.title}
                  </h3>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="hidden lg:flex flex-wrap justify-center items-center gap-10 py-8 lg:py-14 px-10">
          {services.slice(3).map((service) => (
            <div key={service.id} className="w-full sm:w-[280px] md:w-[380px] bg-black text-white shadow-lg overflow-hidden">
              <Link to={service.link}>
                <img src={service.image} alt={service.title} className="w-full h-90 object-cover" />
              </Link>
              <div className="p-4 text-center">
                <Link to={service.link}>
                  <h3 className="text-lg font-semibold font-kumbh md:text-2xl whitespace-nowrap">
                    {service.title}
                  </h3>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Grid */}
        <div className="lg:hidden grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 px-4 sm:px-6">
          {services.map((service) => (
            <div key={service.id} className="w-full sm:w-[280px] md:w-[320px] bg-black text-white shadow-lg overflow-hidden">
              <Link to={service.link}>
                <img src={service.image} alt={service.title} className="w-full h-90 object-cover" />
              </Link>
              <div className="p-4 text-center">
                <Link to={service.link}>
                  <h3 className="text-lg font-semibold font-kumbh md:text-2xl whitespace-nowrap">
                    {service.title}
                  </h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
     <section className="py-20 bg-[#F3F3F3] w-full max-w-full text-start font-sans overflow-x-hidden">
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


{/* ===== CORE VALUES ===== */}
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

{/* ===== CTA SECTION ===== */}
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
  <div><ClientReviews /></div>

    </div>
  );
}

export default TalentHub;
