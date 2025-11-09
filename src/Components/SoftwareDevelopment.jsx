import React from "react";
import { ArrowUpRight } from "lucide-react";

// Sample image imports (replace with actual images in your assets folder)

const SoftwareDevelopment = () => {
  return (
    <div className="w-full font-kumbh bg-white mt-8 overflow-hidden">
          <section
  className="relative w-full min-h-[550px] flex flex-col md:mt-20 md:flex-row items-center justify-between overflow-hidden py-10 px-6 md:px-16 lg:px-28"
  style={{
    backgroundImage: "url('/worldmap.svg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Left Content */}
  <div className="relative z-10 flex-1 flex flex-col space-y-6 items-start justify-center text-center md:text-left">
    <h2 className="text-3xl mt-6 md:mt-0 sm:text-4xl md:text-6xl lg:text-[71.5px] font-semibold text-[#EF0E0E] leading-snug mb-6">
      Custom Software <br className="hidden sm:block" />
      <span className="block mt-2">Development</span>
      
    </h2>

    <button className=" px-5 py-4 md:px-7 border border-black text-black hover:bg-gray-200 transition-all duration-200">
      Consult With Us <span className="ml-2">↗</span>
    </button>
  </div>

  {/* Right Image */}
  <div className="mt-10 md:mt-16 flex justify-center md:justify-end flex-1">
    <img
      src="/SoftwareDevelopment.svg"
      alt="Team"
      className="w-72 sm:w-80 md:w-[420px] lg:w-[500px] h-auto object-contain"
    />
  </div>
</section>

      {/* Description Section */}
     <section className="mx-auto px-4 sm:px-8 md:px-16 lg:px-24 mt-4 py-20 bg-[#F4F6FB] grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
  {/* Left Text Content */}
  <div className="space-y-3 lg:space-y-6">
    <h2 className="text-2xl sm:text-3xl justify-start  text-start  md:whitespace-nowrap md:text-4xl md:ml-3 font-semibold font-kumbh leading-[57.20px] text-black">
      Custom Software Development <br /> Crafted Around Your Business Needs
    </h2>
    <p className="text-black justify-start text-lg md:ml-4 sm:text-xl  font-inter font-normal leading-8">
      At Doelsoft, we believe every business is unique, and so should be
      its software solutions. Our custom software development services
      focus entirely on creating applications tailored precisely to your
      company’s goals, challenges, and target audience.
    </p>
    <p className="text-black justify-start text-lg md:ml-4 sm:text-xl font-inter font-normal leading-8">
      Our expert team works closely with you throughout the process from
      initial consultation to final delivery ensuring the solution we
      build not only meets your technical requirements but also drives
      real business value. We emphasize collaboration, transparency, and a
      user-first approach to deliver software that is intuitive, reliable,
      and scalable as your business evolves.
    </p>
  </div>

  {/* Right Image */}
  <div className=" w-full  mt-10 md:-mb-48">
    <img
      src="gearImg.svg"
      alt="Custom Software"
      className="w-auto h-auto md:w-[638px] md:h-[638px]  drop-shadow-2xl"
    />
  </div>
</section>


      {/* Why Partner Section */}
     <section className="mx-auto px-4 sm:px-6 md:px-0 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
  {/* Left Image */}
  <div className="flex justify-center md:-ml-48">
    <img
      src="businessTeam.svg"
      alt="Business Team"
      className="w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto"
    />
  </div>

  {/* Right Text Content */}
   <div className="space-y-8  md:-ml-32 mr-16">
    <h2 className="text-2xl sm:text-3xl md:text-4xl text-center md:text-start font-kumbh font-semibold text-black leading-[57.20px]">
      Why Partner with Doelsoft?

    </h2>

    <div className="space-y-6">
      {[
        {
          src: "/m1.svg",
          title: "Tailor-Made Solutions",
          desc: "We design and develop software that fits your specific workflows and priorities, avoiding generic products that require costly adaptations later.",
        },
        {
          src: "/m2.svg",
          title: "Client-Focused Collaboration",
          desc: "Your vision guides every stage. We maintain continuous communication so your feedback shapes the development journey.",
        },
        {
          src: "/m3.svg",
          title: "Empowering User Experiences",
          desc: "Our applications prioritize simplicity and efficiency, making it easy for your users to engage and accomplish tasks seamlessly.",
        },
        {
          src: "/m4.svg",
          title: "Cutting-Edge Technologies",
          desc: "Utilizing modern tools and best practices, we build future-ready solutions that grow with your organization.",
        },
        {
          src: "/m5.svg",
          title: "End-to-End Support",
          desc: "Beyond development, we provide maintenance and upgrades to keep your software performing at its best.",
        },
     
      ].map((item, idx) => (
        <div key={idx} className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center md:items-start ">
          <div className="flex-shrink-0 bg-white border border-gray-300 p-4  flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24">
            <img src={item.src} alt={item.title} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-black font-kumbh leading-8 text-center md:text-start ">{item.title}</h3>
            <p className="text-zinc-800 text-base sm:text-lg font-inter font-normal leading-7 text-center md:text-start  whitespace-pre-line">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Areas of Expertise */}
    <section className="w-full bg-[#F4F6FA] mx-auto py-16 px-2 sm:px-6 md:px-36" style={{marginBottom:"-44px"}}>
  {/* Heading */}
  <h2 className="text-2xl sm:text-3xl md:text-4xl md:-ml-9 font-semibold font-kumbh text-black mb-10 leading-[66px]">
    Our Areas of Expertise
  </h2>

  {/* Expertise Grid */}
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:-ml-9 md:gap-8">
    {[
      {
        src: "E1.svg",
        text: "Customized web and mobile apps tailored to your audience.",
      },
      {
        src: "E2.svg",
        text: "Cloud-based platforms offering flexibility and security.",
      },
      {
        src: "E3.svg",
        text: "Modernizing legacy systems to reduce costs and enhance functionality.",
      },
      {
        src: "E4.svg",
        text: "Integration’s and automation’s to streamline your workflows.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="flex items-start gap-3 p-6 bg-white shadow hover:shadow-md transition"
      >
        <img src={item.src} alt="" className="w-10 h-10 flex-shrink-0" />
        <h3 className="font-medium font-kumbh text-lg  sm:text-xl md:text-base leading-9">{item.text}</h3>
      </div>
    ))}
  </div>

  {/* Red Rectangle CTA */}
  <div className="bg-red-600 text-white text-center max-w-9xl mx-auto md:-ml-8  mt-10 p-8 sm:p-10 md:p-12 text-2xl sm:text-3xl md:text-lg font-medium leading-9 font-kumbh">
    Choose Doelsoft for custom software crafted with your business at its
    heart, delivering solutions that empower growth and operational
    excellence.
  </div>
</section>


      {/* Final CTA Section */}
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
  );
};

export default SoftwareDevelopment;