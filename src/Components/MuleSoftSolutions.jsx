import React from 'react'
import { ArrowUpRight } from "lucide-react";

function MuleSoftSolutions() {
    const features = [
        {
            icon: '/p1.svg',
            title: 'Client-Focused Approach',
            description: 'Solutions customized to your business needs for seamless implementation.',
        },
        {
            icon: "/p3.svg",
            title: 'Agile & Transparent Process',
            description: 'Faster delivery, flexible iterations, and collaboration.',
        },
        {
            icon: '/p4.svg',
            title: 'End-to-End Integration',
            description: 'From API strategy to system connectivity and support.',
        },
        {
            icon: '/p5.svg',
            title: 'Global Experience',
            description: 'Serving enterprises in the USA, India, and worldwide.',
        },
        {
            icon: '/p6.svg',
            title: 'Proven Success',
            description: 'Streamlined operations, improved data flow, and accelerated growth.',
        },
    ];

    return (
        <div className="w-full font-kumbh bg-white mt-8 overflow-hidden">
            
            {/* Hero Section */}
            <section
                className="relative w-full min-h-[550px] flex flex-col md:flex-row items-center justify-between overflow-hidden py-10 px-6 md:px-16 lg:px-28"
                style={{
                    backgroundImage: "url('/worldmap.svg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="relative z-10 flex-1 flex flex-col space-y-6 items-start justify-center text-center md:text-left">
                    <h2 className="text-3xl mt-6 md:mt-0 sm:text-4xl md:text-6xl lg:text-[71.5px] font-semibold text-[#EF0E0E] leading-snug mb-6">
                        Doelsoft <br className="hidden sm:block" />
                        <span className="block mt-2">MuleSoft Solutions</span>
                    </h2>

                    <button className=" px-5 py-4 md:px-7 border border-black text-black hover:bg-gray-200 transition-all duration-200">
                        Consult With Us <span className="ml-2">↗</span>
                    </button>
                </div>

                <div className="mt-10 md:mt-16 md:flex-1 flex justify-center md:justify-end relative z-0">
                    <img
                        src="/MuleSoftHero.svg"
                        alt="MuleSoft"
                        className="w-72 sm:w-80 md:w-[420px] lg:w-[500px] h-auto object-contain"
                    />
                </div>
            </section>
             <section className="mx-auto px-6 sm:px-12 md:px-24 py-16 bg-[#F4F6FB] grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl justify-start lg:whitespace-nowrap md:text-4xl md:ml-3 font-semibold font-kumbh leading-[57.20px] text-black">
           Transform Your Business with Doelsoft <br /> MuleSoft Solutions
          </h2>
          <p className="text-black justify-start text-lg md:ml-4 sm:text-xl  font-inter font-normal leading-8">
             In today’s digital ecosystem, businesses run on multiple applications, systems, and data sources.
              Integrating and connecting these efficiently is the key to digital transformation success.
          </p>
          <p className="text-black justify-start text-lg md:ml-4 sm:text-xl  font-inter font-normal leading-8">
             At Doelsoft, we integrate MuleSoft to unify disparate systems, automate workflows, 
             and deliver seamless digital experiences with speed, security, and efficiency.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/MuleSoftGears.svg"
            alt="MuleSoft Integration"
            className="max-w-xs sm:max-w-sm md:max-w-md w-full h-auto"
          />
        </div>
      </section>

        

            {/* Services Section */}
           <section className="container mx-auto px-6 sm:px-10 lg:px-20 py-12 grid gap-10 md:grid-cols-2 items-center">
        {/* Left Image */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/moulsoftmens.svg"
            alt="Microsoft Developer"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl md:whitespace-nowrap md:text-4xl font-kumbh font-semibold text-black leading-[57.20px]">
            🌟 Our MuleSoft Services
          </h2>

          <div className="space-y-6">
            {[
              {
                src: "/m1.svg",
                title: "MuleSoft Consulting",
                desc: "Strategy, architecture, and roadmap for enterprise integration.",
              },
              {
                src: "/m2.svg",
                title: "API Design & Development",
                desc: "Building secure, reusable, and scalable APIs.",
              },
              {
                src: "/m3.svg",
                title: "MuleSoft Implementation",
                desc: "End-to-end deployment of MuleSoft Anypoint solutions.",
              },
              {
                src: "/m4.svg",
                title: "System Integration",
                desc: "Connect ERP, CRM, databases, cloud platforms, and SaaS applications.",
              },
              {
                src: "/m5.svg",
                title: "MuleSoft Migration",
                desc: "Move from legacy integration solutions to modern MuleSoft architecture.",
              },
              {
                src: "/m6.svg",
                title: "Support & Maintenance",
                desc: "Continuous monitoring, optimization, and issue resolution.",
              },
              {
                src: "/m7.svg",
                title: "Custom Connectors & Extensions",
                desc: "Build connectors tailored to your unique business systems.",
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
                  <h3 className="text-lg sm:text-xl font-semibold text-black font-kumbh leading-8">
                    {item.title}
                  </h3>
                  <p  className="text-zinc-800 text-base sm:text-lg font-inter font-normal leading-7  whitespace-pre-line">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
           
      <section className="bg-[#F4F6FB] py-10">
        <div className="px-6 sm:px-12 md:px-20 text-center md:text-left md:ml-6 space-y-4">
          <h1  className="text-3xl sm:text-4xl font-bold">
            🏭 Industries We Serve
          </h1>
          <p className="text-gray-600 md:ml-2">
            Doelsoft delivers MuleSoft-based solutions to diverse industries:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 py-10 px-6 md:ml-8 sm:px-12 md:px-20 gap-6">
          {[
            { src: "/ecommerce.svg", title: "E-Commerce & Retail", desc: "Seamless customer engagement and omnichannel management." },
            { src: "/lifecare.svg", title: "Healthcare & Life Sciences", desc: "HIPAA-compliant workflows, data analytics, and automation." },
            { src: "/finance.svg", title: "Banking & Financial Services", desc: "Streamlined operations with secure, scalable solutions." },
            { src: "/education.svg", title: "Education & EdTech", desc: "Learning management systems and student engagement tools." },
            { src: "/telecomit.svg", title: "Telecom & IT Services", desc: "Improved collaboration and data integration capabilities." },
            { src: "/travel.svg", title: "Travel & Hospitality", desc: "Booking engines, customer management, and loyalty system integration." },
            { src: "/manufacture.svg", title: "Manufacturing & Logistics", desc: "Optimized ERP systems, predictive analytics, and automation." },
          ].map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 sm:grid-cols-2 items-center hover:shadow-md transition"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="sm:pl-4 mt-4 sm:mt-0 border border-black h-40 p-4 sm:p-8 text-center sm:text-left">
                <h3 className="font-semibold text-lg text-zinc-950 capitalize leading-6">
                  {item.title}
                </h3>
                <p className="text-zinc-800 text-base sm:text-lg font-inter font-normal leading-7  whitespace-pre-line">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

            <section className="bg-white py-12">
        <div className="px-6 md:ml-6 sm:px-10 md:px-20 mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-kumbh font-semibold mb-4 leading-[66px]">
           👨‍💻 Doelsoft MuleSoft Talent Pool

          </h1>
          <p className="text-base md:ml-2 sm:text-lg text-gray-700">
            Our team ensures every integration project delivers efficiency and scalability:

          </p>
        </div>

        <div className="container md:ml-8 mx-auto px-6 sm:px-10 md:px-20 grid gap-16 max-w-7xl sm:grid-cols-2">
          {[
            { src: "/t1.svg", desc: "Certified MuleSoft Developers building robust APIs and integrations" },
            { src: "/t2.svg", desc: "Support & Maintenance Engineers ensuring smooth operations post-deployment." },
            { src: "/t3.svg", desc: "Consultants & Analysts aligning MuleSoft solutions with business goals." },
            { src: "/t4.svg", desc: "Experienced Integration Architects designing scalable MuleSoft solutions." },
            { src: "/w4.svg", desc: "API Specialists for secure, reusable, and manageable APIs." },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-6 bg-white border border-gray-200 shadow-md hover:shadow-lg transition"
            >
              <img
                src={item.src}
                alt={item.desc}
                className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 mx-auto sm:mx-0"
              />
              <p className="text-back justify-start font-medium text-base sm:text-lg font-kumbh leading-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

            {/* Why Choose Section */}
          
            <section className="bg-[#F4F6FB] py-12 px-6 sm:px-10 lg:px-20 font-sans" style={{marginBottom:"-44px"}}>
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6">
            <h1 className="text-2xl sm:text-3xl md:ml-[-35px] md:text-4xl  justify-start md:whitespace-nowrap font-kumbh font-semibold mb-8 leading-[57.20px]">
              💡 Why Choose Doelsoft for MuleSoft Services?
            </h1>

            <div className="space-y-6 md:-ml-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-start gap-4 p-4 "
                >
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center border border-white bg-white mx-auto sm:mx-0">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="text-lg justify-start sm:text-xl font-semibold font-kumbh text-black leading-8">
                      {feature.title}
                    </h4>
                    <p className="text-zinc-900 text-sm sm:text-base font-inter leading-7">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center md:-mb-80">
            <img
              src="/MulesofMan.svg"
              alt="Mulesoft Professional"
              className="w-full max-w-sm sm:max-w-md md:max-w-2xl  md:h-max object-cover"
            />
          </div>
        </div>
      </section>

            {/* CTA Section */}
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

export default MuleSoftSolutions
