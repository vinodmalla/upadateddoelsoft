import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';

function WebDevelopment() {
  const features = [
    {
      icon: '/p1.svg',
      title: 'Client-Centric Approach',
      description: 'We prioritize your goals and user experience to craft tailored solutions.',
    },
    {
      icon: '/p2.svg',
      title: 'Agile & Transparent Process',
      description: 'Faster delivery with consistent feedback, flexibility, and collaboration.',
    },
    {
      icon: '/p3.svg',
      title: 'Cutting-Edge Technologies',
      description: 'Built using React, Angular, Node.js, PHP, and more modern frameworks.',
    },
    {
      icon: '/p4.svg',
      title: 'Global Delivery Model',
      description: 'Serving clients across the USA, India, UAE, and beyond with excellence.',
    },
    {
      icon: '/p5.svg',
      title: 'Proven Results',
      description: 'High-performance websites driving engagement, conversions, and ROI.',
    },
  ];

  return (
    <div className="w-full font-kumbh bg-white xl:mt-10 overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[550px] flex flex-col md:mt-8 md:flex-row items-center justify-between overflow-hidden py-10 px-6 md:px-16 lg:px-28"
        style={{
          backgroundImage: "url('/worldmap.svg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Left Content */}
        <div className="relative z-10 flex-1 flex flex-col space-y-6 items-start justify-center text-center md:text-left">
          <h2 className=" mt-6 md:mt-0 text-3xl sm:text-4xl md:text-5xl lg:text-[71.5px] font-semibold text-[#EF0E0E] leading-snug mb-6">
            Web Design & <br className="hidden sm:block" />
            <span className="block mt-2"> Development</span>
          </h2>
          
           <Link to="/contact"><button className=" px-5 py-4 md:px-7 border border-black text-black hover:bg-gray-200 transition-all duration-200">
                Consult With Us <span className="ml-2">↗</span>
              </button></Link>
        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-14 md:flex-1 flex justify-center md:justify-end relative z-0">
          <img
            src="/WebDevelopment.svg"
            alt="Web Development"
            className="w-64 sm:w-80 md:w-[420px] lg:w-[500px] h-auto object-contain"
          />
        </div>
      </section>

      {/* Crafting Websites Section */}
      <section className="mx-auto px-6 sm:px-12 md:px-24 py-10 bg-[#F4F6FB] grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl justify-start lg:whitespace-nowrap md:text-4xl md:ml-3 font-semibold font-kumbh leading-[57.20px] text-black">
            🚀 Doelsoft Web Development <br /> Crafting Websites That <br/> Drive Growth
          </h2>
          <p className="text-black justify-start text-lg md:ml-4 sm:text-xl  font-inter font-normal leading-8">
            In the digital age, your website is your brand’s online identity. At Doelsoft, we specialize in creating
            websites that are not only visually appealing but also robust, scalable, and user-friendly.
          </p>
          <p className="text-black justify-start text-lg md:ml-4 sm:text-xl  font-inter font-normal leading-8">
            Whether it’s a startup seeking a brand presence or an enterprise platform targeting global customers, our
            development solutions are designed to meet your evolving business goals.
          </p>
        </div>
        <div className="w-full md:mt-10 md:-mb-[74px]">
          <img
            src="/WebTeam.svg"
            alt="Web Team"
            className="w-full h-auto md:w-[858px] md:h-[500px]"
          />
        </div>
      </section>

      {/* Expertise Section */}
      <section className="container mx-auto px-6 sm:px-10 lg:px-20 py-12 grid gap-10 md:grid-cols-2 items-center">
        {/* Left Image */}
        <div className="flex flex-col justify-center md:justify-start">
          <img
            src="/Developer.svg"
            alt="Developer"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
          <img
            src="/Developer1.svg"
            alt="Developer"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-8 ">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-kumbh font-semibold text-black leading-[57.20px]">
            💻 Our Web Development Expertise
          </h2>
          <div className="space-y-6">
            {[
              {
                src: '/m1.svg',
                title: 'Custom Web Development',
                desc: 'Tailor-made websites built with your brand and business in mind.',
              },
              {
                src: '/m2.svg',
                title: 'Responsive Web Design',
                desc: 'Seamless experience across desktops, tablets, and mobile devices.',
              },
              {
                src: '/m3.svg',
                title: 'E-Commerce Development',
                desc: 'Online stores with smooth payment, product management, and order workflows.',
              },
              {
                src: '/m4.svg',
                title: 'CMS-Based Websites',
                desc: 'WordPress, Drupal, and custom solutions for easy content management.',
              },
              {
                src: '/m5.svg',
                title: 'Single-Page Applications (SPA)',
                desc: 'Dynamic and fast-loading apps using React, Angular, or Vue.',
              },
              {
                src: '/m6.svg',
                title: 'Website Maintenance & Support',
                desc: 'Regular updates, performance optimization, and security management.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row gap-4 items-start"
              >
                <div className="flex-shrink-0 bg-white border border-gray-300 p-4 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 mx-auto sm:mx-0">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3  className="text-lg sm:text-xl font-semibold text-black font-kumbh leading-8">{item.title}</h3>
                  <p className="text-zinc-800 text-base sm:text-lg font-inter font-normal leading-7  whitespace-pre-line">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-[#F4F6FB] py-10">
        <div className="px-6 sm:px-12 md:px-20 md:ml-7 text-center md:text-left space-y-4">
          <h1  className="text-3xl sm:text-4xl font-bold">🏭 Industries We Empower with Web Solutions</h1>
          <p className="text-gray-600 md:ml-2">Doelsoft delivers tailored web solutions for a wide range of industries:</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:ml-9 py-10 px-6 sm:px-12 md:px-20 gap-6">
          {[
            { src: '/ecommerce.svg', title: 'E-Commerce & Retail', desc: 'Online stores, payment gateways, and customer portals.' },
            { src: '/health_care.svg', title: 'Healthcare & Life Sciences', desc: 'Patient management, booking systems, and HIPAA-compliant platforms.' },
            { src: '/finance.svg', title: 'Banking & FinTech', desc: 'Secure digital banking, investment dashboards, and payment systems.' },
            { src: '/education.svg', title: 'Education & E-Learning', desc: 'Learning management systems and student engagement portals.' },
            { src: '/travel.svg', title: 'Travel & Hospitality', desc: 'Booking portals, itinerary management, and service automation.' },
            { src: '/realestate.svg', title: 'Real Estate', desc: 'Property listings, virtual tours, and CRM integrations.' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 items-center hover:shadow-md transition"
            >
              <img src={item.src} alt={item.title} className="w-full h-48 object-cover" />
              <div className="sm:pl-4 sm:mt-0 border border-black h-48 p-6 sm:p-8 text-center sm:text-left">
                <h3 className="font-semibold text-lg text-zinc-950 capitalize leading-6">{item.title}</h3>
                <p className="text-zinc-950 text-base  font-normal font-inter leading-6 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Talent Pool Section */}
      <section className="bg-white py-12">
        <div className="md:ml-6 px-6 sm:px-10 md:px-20 mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-kumbh font-semibold mb-4 leading-[66px]">👨‍💻 Doelsoft Web Development Talent Pool</h1>
          <p className="text-base md:ml-2 sm:text-lg text-gray-700">
            Our team ensures every project is delivered with precision and creativity:
          </p>
        </div>

        <div className="container mx-auto md:ml-7 max-w-7xl  px-6 sm:px-10 md:px-20 grid gap-16 sm:grid-cols-2">
          {[
            { src: '/s1.svg', desc: 'Skilled Front-End Developers for responsive, intuitive, and interactive interfaces.' },
            { src: '/w1.svg', desc: 'Experienced Back-End Engineers for secure, scalable, and high-performance systems.' },
            { src: '/w2.svg', desc: 'Expert Full-Stack Developers for end-to-end solutions combining front-end and back-end expertise.' },
            { src: '/w3.svg', desc: 'Creative UI/UX Designers focused on accessibility, engagement, and seamless navigation.' },
            { src: '/w4.svg', desc: 'QA Specialists ensuring bug-free, high-performing, and secure websites.' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-6 bg-white border border-gray-200 shadow-md hover:shadow-lg transition"
            >
              <img src={item.src} alt="" className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 mx-auto sm:mx-0" />
              <p  className="text-back justify-start font-medium text-base sm:text-lg font-kumbh leading-6">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-[#F4F6FB] py-10 sm:py-12 px-4 sm:px-6 md:px-8 lg:px-20 font-sans" style={{marginBottom:"-44px"}}>
  <div className="max-w-7xl mx-auto flex flex-col-reverse xl:flex-row items-center gap-8 sm:gap-10">

    <div className="flex-1 space-y-4 sm:space-y-6 w-full">

      <h1 className="text-xl sm:text-2xl md:text-4xl 
        text-center xl:text-left md:ml-[-29px]
        xl:whitespace-nowrap font-kumbh font-semibold 
        mb-4 sm:mb-6 md:mb-8 leading-normal md:leading-[57.20px]">
        💡 Why Choose Doelsoft for Web Development?
      </h1>

      <div className="space-y-4 sm:space-y-6 xl:-ml-5">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col xl:flex-row items-center xl:items-start 
            text-center sm:text-left gap-4 p-4 
             bg-white sm:bg-transparent shadow-sm sm:shadow-none"
          >
            <div className="flex-shrink-0 w-14 h-14 sm:w-20 sm:h-20 
              flex items-center justify-center border border-white 
              bg-white mx-auto sm:mx-0">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-8 h-8 sm:w-12 sm:h-12 object-contain"
              />
            </div>
            <div>
              <h4 className="text-base sm:text-lg lg:text-xl text-center xl:text-start  font-semibold font-kumbh text-black leading-7 sm:leading-8">
                {feature.title}
              </h4>
              <p className="text-zinc-900 text-sm sm:text-base font-inter leading-6 sm:leading-7">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Right Image */}
    <div className="flex-1 flex justify-center bg-[#F4F6FB] w-full mt-8 sm:mt-0">
      <img
        src="/womenweb2.svg"
        alt="Web Developer"
        className="w-[85%] sm:max-w-md md:w-[400px] h-auto 
        xl:w-[617px] xl:h-[769px] xl:-mb-48"
      />
    </div>

  </div>
</section>

      {/* CTA Section */}
      <section className="relative w-full bg-cover bg-center text-center py-16 md:h-[568px] sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundImage: "url('/Background2.svg')",marginTop:"1px" } } > {/* Decorative Vectors */}
              <img src="/Vectors.svg" alt="vector" className="absolute left-6 sm:left-14 top-8 sm:top-10 h-20 sm:h-28 md:h-32 w-20 sm:w-28 md:w-32 object-contain opacity-70 z-30" /> 
              <img src="/left.svg" alt="left" className="absolute left-10 sm:left-20 bottom-10 sm:top-70 w-3 sm:w-4 object-contain opacity-70 z-30" /> 
              <img src="/right.svg" alt="right" className="absolute right-10 sm:right-40 lg:right-72 top-6 sm:top-12 w-10 sm:w-16 md:w-20 object-contain opacity-70 z-30" /> {/* Dark overlay */}
               <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/80 to-black/90"></div> {/* Main Content */} 
               <div className="relative max-w-3xl mx-auto md:mt-8 text-white z-10 flex flex-col items-center justify-center space-y-5 sm:space-y-7 md:space-y-8"> 
                 <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-[56px] font-manrope font-bold whitespace-nowrap leading-snug px-2">🌍 Build Your Digital Presence with Doelsoft </h2>
                  <p className="text-lg lg:text-[28px] xl:text-[30px] font-inter text-gray-200 leading-relaxed px-2">👉 Partner with Doelsoft – Your trusted web development company in the USA & India. </p>
                   <Link to="/contact"> <button className="flex items-center gap-2  bg-red-600 hover:bg-gray-600 text-white font-medium px-5 sm:px-8 py-3 sm:py-6 text-sm sm:text-xl  shadow-lg transition-all duration-300 ease-in-out">
                        Talk to an Expert{" "}
                        <ArrowUpRight
                          className="border border-white rounded-full p-1"
                          size={24}
                        />
                      </button> </Link>
                    </div> 
                    </section>

    </div>
  );
}

export default WebDevelopment;
