import React from 'react'
import { ArrowUpRight} from "lucide-react";

function Choose() {
    const features = [
  {
    icon: <img src="/feature1.svg" alt='Agile Transformation' className="w-14 h-14 text-red-600" />,
    title: "Agile Transformation",
    desc: "Modernizing business processes for flexibility and speed.",
  },
  {
    icon: <img src="/feature2.svg"  alt='Cost Reduction & Resource Optimization' className="w-14 h-14 text-black" />,
    title: "Cost Reduction & Resource Optimization",
    desc: "Delivering value-driven solutions while maximizing efficiency.",
  },
  {
    icon: <img src="/feature3.svg"  alt='Customer–Centric Solutions' className="w-14 h-14 text-red-600" />,
    title: "Customer–Centric Solutions",
    desc: "Tailored strategies focused on achieving your business goals.",
  },
  {
    icon: <img src="/feature4.svg"  alt='Customized Engagement Models' className="w-14 h-14 text-red-600" />,
    title: "Customized Engagement Models",
    desc: "Flexible frameworks aligned to your unique needs.",
  },
  {
    icon: <img src="/feature5.svg"  alt='Top–Class Quality Services' className="w-14 h-14 text-red-600" />,
    title: "Top–Class Quality Services",
    desc: "Excellence in every service we provide.",
  },
  {
    icon: <img src="/feature6.svg"  alt='Offshoring & Cost–Effective Solutions' className="w-14 h-14 text-black" />,
    title: "Offshoring & Cost–Effective Solutions",
    desc: "Leveraging global talent to deliver high-quality outcomes.",
  },
];
const coreValues = [
  {
    icon: <img src='/core1.svg' alt="Excellence" className="w-14 h-14 text-red-600" />,
    title: "Excellence",
    desc: "Delivering the highest quality in every project.",
    bg: "bg-[#E2E7F1] border border-black",
  },
  {
    icon:  <img src='/core2.svg' alt="Innovation" className="w-14 h-14 text-red-600" />,
    title: "Innovation",
    desc: "Continuously adopting advanced technologies and creative solutions.",
    bg: "border border-red-600",
  },
  {
    icon:  <img src='/core3.svg' alt="Integrity" className="w-14 h-14 text-red-600" />,
    title: "Integrity",
    desc: "Transparent, honest, and ethical business practices.",
    bg: "bg-[#E2E7F1] border border-black",
  },
  {
    icon:  <img src='/core4.svg' alt="Collaboration" className="w-14 h-14 text-red-600" />,
    title: "Collaboration",
    desc: "Building strong partnerships with clients for long-term success.",
    bg: "border border-red-600",
  },
  {
    icon: <img src='/core5.svg' alt="Customer Focus" className="w-14 h-14 text-red-600" />,
    title: "Customer Focus",
    desc: "Ensuring every solution is aligned with client goals and adds real value.",
    bg:"bg-[#E2E7F1] border border-black",
  },
];
return (
    <div className="w-full min-h-screen font-kumbh space-y-6 mt-16 flex flex-col overflow-hidden justify-end">
        
        
           <section
   className="relative w-screen min-h-[100vh] sm:min-h-[550px] flex flex-col md:flex-row items-center justify-between bg-cover bg-center bg-no-repeat overflow-hidden py-10 px-6 md:px-16 lg:px-28"
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
      Why Choose <br className="hidden sm:block" />
      <span className="block mt-2">Doelsoft</span>
    </h2>

    <button className="py-4 px-10   border border-black ml-[45px] md:-ml-1  text-black hover:bg-gray-200 transition-all duration-200">
      Consult With Us <span className="ml-2">↗</span>
    </button>
  </div>

  {/* Right Image */}
  <div className="mt-10 md:mt-24 md:flex-1 flex justify-center md:justify-end relative z-0">
    <img
      src="/Choose1.svg"
      alt="Team"
      className="w-72 sm:w-80 md:w-[420px] lg:w-[500px] h-auto object-contain"
    />
  </div>
</section>
        <section className="w-screen h-auto lg:h-[657px] bg-[#F3F3F3] ">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto">
                <div className="flex-1 space-y-8 mt-8">
                    <h2 className="text-2xl md:text-[44px] md:whitespace-nowrap font-semibold font-kumbh text-black mt-8 ml-10 lg:-ml-5">
                      Doelsoft – Innovating Technology,

                    </h2>
                    <h2 className="text-2xl md:text-[44px] whitespace-nowrap font-semibold font-kumbh text-black -mt-2 ml-10 lg:-ml-5">Empowering Businesses</h2>
                    <p className="text-start md:w-[501px] md:h-40 text-base leading-6 font-normal text-black mt-12 ml-10 lg:-ml-5">
                        Doelsoft is a leading software development and business consulting company, with a strong presence in India and the USA, delivering innovative solutions that help businesses stand out in a competitive global landscape. We specialize in software development, digital transformation, consulting, and tailor-made solutions that drive  growth, efficiency, and long-term success.</p>
                        
                       <p className="text-start md:w-[501px] md:h-40 text-base leading-6 font-normal text-black mt-12 ml-10 lg:-ml-5"> At Doelsoft, we turn challenges into opportunities. Our team works closely with clients to resolve complex  issues, scale operations efficiently, and implement innovative strategies that accelerate business growth. We  aim to transform every business vision into reality, leveraging technologically advanced solutions, expert professionals, and a commitment to excellence.
                    </p>
                </div>
                <div className="flex-1 flex items-end  lg::mt-0 lg:-mb-28" >
  <div className="w-[800px] h-[30rem] flex items-center justify-center bg-transparent" >
    <img
      src="/choosee1.svg"
      alt="ITStaffing"
      className="object-contain h-full lg:mr-[440px] " 
     
    />
  </div>
</div>

            </div>
        </section>
     <section className="w-full overflow-hidden">
  <div className="p-6 sm:p-8 md:p-10 md:ml-10 relative max-w-7xl mx-auto">
    <h1 className="text-2xl sm:text-[44px] font-semibold text-gray-800 mb-6 md:ml-14 lg:ml-7 text-center md:text-left">
      Key Benefits We Deliver
    </h1>

    <div className="space-y-6 md:ml-14 lg:ml-7">
      {/* Card 1 */}
      <div className="bg-white p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-lg ">
        <img
          src="./key1.svg"
          className="w-20 h-20 mx-auto p-3 border bg-white sm:mx-0"
          alt="Client-Centric Approach"
        />
        <div className="text-center sm:text-left">
          <h3 className="text-black text-xl font-semibold leading-6 font-kumbh">
            Client-Centric Approach
          </h3>
          <p className="text-base text-zinc-800 font-normal font-inter sm:text-lg leading-7 ">
            We collaborate deeply with each client to understand their unique
            requirements and deliver solutions that drive measurable results.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-lg ">
        <img
          src="./key2.svg"
          className="w-20 h-20 mx-auto p-3 border bg-white sm:mx-0"
          alt="Stewardship"
        />
        <div className="text-center sm:text-left">
          <h3 className="text-black text-xl font-semibold leading-6 font-kumbh ">
            Stewardship Taking Responsibility, Driving Results
          </h3>
          <p className="text-base text-zinc-800 font-normal font-inter sm:text-lg leading-7 ">
            Leveraging the latest technologies to provide scalable, secure, and
            high-quality services.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-lg relative">
        <img
          src="./key3.svg"
          className="w-20 h-20 mx-auto p-3 border bg-white sm:mx-0"
          alt="Dedicated Expert Team"
        />
        <div className="text-center sm:text-left">
          <h3 className="text-black text-xl font-semibold leading-6 font-kumbh ">
            Dedicated Expert Team
          </h3>
          <p className="text-base text-zinc-800 font-normal font-inter sm:text-lg leading-7 ">
            In today’s competitive staffing landscape, credibility is everything.
            At Doelsoft, we back our words with consistent action. <br />
            Every decision, every placement, and every engagement is grounded in
            honesty, fairness, and reliability <br />
            so you can count on us to be a partner you trust, time after time.
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-white p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-lg  relative">
        <img
          src="./key4.svg"
    className="w-20 h-20 mx-auto p-3 border bg-white sm:mx-0"
          alt="Global Delivery"
        />
        <div className="text-center sm:text-left">
          <h3 className="text-black text-xl font-semibold leading-6 font-kumbh ">Global Delivery</h3>
          <p className="text-base text-zinc-800 font-normal font-inter sm:text-lg leading-7 ">
            Serving clients across India, the USA, and worldwide, with flexible
            engagement models.
          </p>
        </div>
        <img
          src="/Choose3.svg"
          alt="Expert Team"
          className="absolute md:-right-20 right-0 top-36 -translate-y-1/2 w-40  md:w-96 h-96 object-contain hidden md:block"
        />
      </div>

      {/* Card 5 */}
      <div className="bg-white p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-lg ">
        <img
          src="./key5.svg"
          className="w-20 h-20 mx-auto p-3 border bg-white sm:mx-0"
          alt="Holistic Business Growth"
        />
        <div className="text-center sm:text-left">
          <h3 className="text-black text-xl font-semibold leading-6 font-kumbh ">
            Holistic Business Growth
          </h3>
          <p className=" text-base text-zinc-800 font-normal font-inter sm:text-lg leading-7 ">
            Strategies and solutions designed to enhance efficiency,
            productivity, and market<br/> competitiveness.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


        <section className="w-full bg-[#F4F6FB] py-10 " style={{marginTop:"0px"}}>
            <div className="max-w-7xl mx-auto lg:ml-20 px-6">
                {/* Heading */}
                <h2 className="text-2xl md:text-[44px] font-semibold  font-kumbh  mb-12">
                    Why Doelsoft is Your Trusted Partner
                </h2>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-lg p-10 flex flex-col gap-2 hover:shadow-md transition"
                        >
                            {/* Icon and Title in a row */}
                            <div className="flex items-center gap-4 mb-2">
                                <span className="flex-shrink-0">{item.icon}</span>
                                
                            </div>
                            {/* Description below */}
                            <h3 className="text-xl font-semibold leading-9 font-kumbh">{item.title}</h3>
                            <p className="text-zinc-800 text-base leading-6 font-inter mt-1">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
         <section className="w-full  py-12">
      <div className="max-w-7xl mx-auto6 lg:ml-20 px-6" style={{marginTop:"0px"}}>
        {/* Heading */}
        <h2 className="text-3xl md:text-[44px] font-medium mb-12">Our Core Values</h2>

        {/* Cards + Image */}
        <div className="grid grid-cols-1 gap-10">
            {/* First row: 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {coreValues.slice(0, 3).map((item, index) => (
                    <div
                        key={index}
                        className={`p-10 flex flex-col gap-3 ${item.bg}`}
                    >
                        {item.icon}
                        <h3 className="text-xl font-kumbh text-zinc-950 font-semibold">{item.title}</h3>
                        <p className="text-zinc-950  text-lg leading-6 font-inter">{item.desc}</p>
                    </div>
                ))}
            </div>
            {/* Second row: 2 cards + image */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {coreValues.slice(3, 5).map((item, index) => (
                    <div
                        key={index}
                        className={`p-10 flex flex-col gap-3 ${item.bg}`}
                    >
                        {item.icon}
                        <h3 className="text-xl font-kumbh text-zinc-950 font-semibold">{item.title}</h3>
                        <p className="text-zinc-950  text-lg leading-6 font-inter">{item.desc}</p>
                    </div>
                ))}
                {/* Image in the third column */}
                <div className="flex justify-center items-center">
                    <img src="Choose4.svg" alt="Puzzle Graphic" className="w-64 md:w-80" />
                </div>
            </div>
        </div>
        <p className="text-black text-lg font-inter mt-8 leading-6">
          At Doelsoft, we don’t just provide services, we empower businesses to
          grow, innovate, and thrive globally. With our expertise, dedication,
          and innovative approach, we ensure that every client is one step ahead
          of the competition.
        </p>

        {/* CTA Section */}
        <div className="bg-red-600 text-white mt-10  p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-lg md:text-xl font-light text-center font-kumbh md:text-left">
            Get in touch <span className="font-bold">with Doelsoft today</span>{" "}
            and discover how we can accelerate your business success globally.
          </h3>
          <button className="bg-white text-black px-4 py-3  shadow-md font-medium flex items-center gap-2 hover:bg-gray-400 transition">
            Consult With Us  ↗
          </button>
        </div>
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
                           Let's Build the Future Together
                         </h2>
                     
                         <p className="text-sm sm:text-[30px] font-inter text-gray-200 leading-relaxed px-2">
                           Tells Us your goals.We'll design the runaway then deliver it with AI,Could and Data.
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
)
}

export default Choose
