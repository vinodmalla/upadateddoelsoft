import spring from '../assets/spring.svg'
import wipro from '../assets/wipro.svg'
import zingo from '../assets/Zingo.svg'
import mevatron from '../assets/mevatron.svg' 
import menlo from '../assets/menlo.svg'
import tech from '../assets/techmahindra.svg'
import Counter from './Counter';
import {useState, useEffect } from 'react'
import mask from "../assets/mask.svg";
import BFSI from "../assets/BFSI.svg";
import { Link } from 'react-router'
import ECommerce from "../assets/E-Commerce.svg";
import { ArrowUpRight } from "lucide-react";
import Startups from "../assets/Startups.svg";
import AI from "../assets/AI.svg";
import Intelligent from "../assets/Intelligent.svg";
import cloud from "../assets/Cloud.svg";
import CyberSecurity from "../assets/CyberSecurity.svg";
import data from "../assets/Data.svg";
import Accessibility from "../assets/Accessibility.svg";
import Background from "../assets/Background.svg";
import secure from '../assets/Secure.svg';
import Cloud_Done from '../assets/Cloud_Done.svg';
import Applied from '../assets/Applied_AI.svg';

function Home() {
    const [testimonialIndex,setTestimonialIndex]=useState(0)
    const [cursol,setCursol]=useState(0)
   const CursolDetails = [
  {
    h11: "Accelerate Digital Transformation with ",
    h22: "AI, Cloud & Data",
    img: "/robot1.svg",
    p: "We design, build, and scale secure digital products combining applied AI, modern cloud architectures, and human expertise to deliver real business outcomes."
  },
  {
    h11: "Empower Business Growth through ",
    h22: "People & Talent",
    img: "/businessman.svg",
    p: "Driven by talent, guided by expertise we connect the right people with the right opportunities to fuel lasting business success."
  },
  {
    h11: "Advance Universal Engagement with ",
    h22: "Accessibility & Inclusion",
    img: "/a11y1.svg",
    p: "From accessibility to true inclusion, we ensure every interaction empowers every user."
  }
];

    const services=[{
        title:"BFSI",
        logo:BFSI
    },
  {
        title:"Healthcare",
        logo:"/Healthcare.png"
  },
{
        title:"E-Commerce",
        logo:ECommerce
},{
        title:"Manufacturing",
        logo:"/Manufacturing.svg"
},{
        title:"Telecom",
        logo:"/Telecom.svg"
},{
        title:"Startups",
        logo:Startups
}]
    const solutions = [
  {
    icon: "/artificial.svg", 
    title: "Recruitment Intelligence",
    desc: "Accelerate hiring cycles with intelligent resume parsing, smart shortlisting, automated scheduling, and role-fit scoring.",
    type: "border",
  },
  {
    icon: "/intelligence1.svg",
    title: "AI Copilots for Operations",
    desc: "Automate repetitive knowledge work across service, support, finance, HR, and back-office functions with domain-trained AI assistants.",
    type: "bg",
  },
  {
    icon: "/fraud.svg",
    title: "Fraud & Risk Analytics",
    desc: "Detect anomalies and emerging risks in real time using streaming machine learning, governed models, and automated alerting pipelines.",
    type: "border",
  },
  {
    icon: "/Group_A.svg",
    title: "Accessibility AI & Compliance",
    desc: "Deliver inclusive products faster with automated accessibility audits, code-level remediation guidance, and continuous compliance workflows.",
    type: "bg",
  },
  {
    icon: "/Group_B.svg",
    title: "Cloud Modernization Accelerator",
    desc: "Modernize applications seamlessly with automated migration, containerization, refactoring patterns, and cloud-native optimization.",
    type: "border",
  },
  {
    icon: "/Group_C.svg",
    title: "Customer 360 & Personalization",
    desc: "Unify customer data into a single, trusted view to power tailored experiences, predictive insights, and personalized engagement at scale.",
    type: "bg",
  },
];
    const Testimonial=[
       { quote:"Outstanding work. Doelsoft delivered high-quality results faster than expected.",
        name:"Pat Vital",
        company:" Mahasos ",
        role:"Founder",
        avitor:"/Avatar.svg"
    },
     { quote:" Doelsoft streamlined our hiring with faster shortlisting and better candidates."
,
        name:"Francis Smith ",
        role:"Associate Director",
        company:"Tavant",
        avitor:"/Avatar.svg"
    },
     { quote:"Doelsoft built a sleek, high-performance mobile app that exceeded expectations.",
        name:"Suresh",
        role:"Founder",
        company:"Emegro Consulting",
        avitor:"/Avatar.svg"
    },
     { quote:"Fast, secure, beautifully designed eCommerce platform—excellent delivery by Doelsoft.",
        name:"Crispin Luna",
        role:"Senior Manager",
        company:"Zingo Credits",
        avitor:"/Avatar.svg"
    },
    { quote:"Exceptional recruitment support—Doelsoft helped us close key roles easily.",
        name:"Ankur",
        role:"Founder",
        company:"ACL Digital",
        avitor:"/Avatar.svg"
    }
]
const steps = [
  {
    title: "Discover",
    desc: "Value, Opportunities & Risks",
    icon: "Steps1.svg",
  },
  {
    title: "Design",
    desc: "Blueprint, Governance, KPIs",
    icon: "Steps2.svg",
  },
  {
    title: "Deliver",
    desc: "Build, Integrate, Harden, Ship",
    icon: "Steps3.svg",
  },
  {
    title: "Scale",
    desc: "MLOps, FinOps improvement",
    icon: "Steps4.svg",
  },
];
const frames=["Secure,Accesibile by Design","Global ,Agile & Scalable","OutCome & First Delivery","AI + Human Intelligence",];
const cards = [
    {
      title: "Applied AI, Not Experiments",
      desc: "From roadmap to production, we ship AI that drives measurable business results.",
      bg: "bg-red-600",
      text: "text-white",
      icon: Applied, // replace with your svg/icon
      type: "solid",
    },
    {
      title: "Data to Decisions",
      desc: "A modern data stack and dashboards so teams act on trusted, real-time insights.",
      image:
       "/Decisions.svg", // replace with your image
      text: "text-white",
      type: "image",
    },
    {
      title: "Cloud Done Right",
      desc: "Modern, secure architectures on AWS/Azure/GCP that scale reliably and cost-effectively.",
      image:
       Cloud_Done, // replace with your image
      text: "text-white",
      type: "image",
    },
    {
      title: "Secure & Accessible by Design",
      desc: "Enterprise-grade security and WCAG-aligned experiences, built in from day one.",
      bg: "bg-red-600",
      text: "text-white",
      icon:secure, // replace with your svg/icon
      type: "solid",
    },
  ];
  const insights = [
  {
    img: "/Client1.svg", // replace with your image
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
    img: "/Client3.svg",
    client: "Client Name",
    title: "Designing Accessibility",
    desc: "Inclusive patterns for enterprise-ready applications.",
  },
];
useEffect(()=>{
        const intervalid=setInterval(()=>{ setTestimonialIndex((prevIndex)=>(prevIndex+1)%Testimonial.length)},3000);
       
        return(()=>{clearInterval(intervalid)

            
        })
    },[Testimonial.length]) // Added dependency for safety

    
  return (
    <div className='w-full h-full overflow-x-hidden mt-2 xl:-mt-10 '>
      {/* Hero Section - Responsive with equal spacing */}
       <div className="hidden md:flex flex-col  pb-[180px] gap-2 absolute right-20 top-1/2 ml-6 -translate-y-1/2">
    {CursolDetails.map((_, index) => (
      <button
        key={index}
        aria-label={`Go to slide ${index + 1}`}
        onClick={() => setCursol(index)}
        className={`w-2 h-8  transition-all duration-300 ${
          cursol === index
            ? "bg-red-600 scale-110"
            : "bg-gray-300 hover:bg-gray-400"
        }`}
      />
    ))}
  </div>
<section className="w-full min-h-lvh max-w-[95vw] md:max-w-[90vw] xl:max-w-[85vw] mx-auto md:mx-auto xl:mx-[70px] relative flex flex-col md:flex-col xl:flex-row justify-between items-center bg-white px-4 sm:px-6 lg:px-8 py-20 sm:py-20 gap-8 lg:gap-12 overflow-hidden">

  {/* LEFT CONTENT */}
  <div className="w-full lg:w-1/2  lg:flex-col gap-6 md:gap-8 text-center lg:text-left xl:mt-36">
    {CursolDetails.map((details, index) => (
      <div
        key={index}
        className={`flex-1 font-kumbh transition-opacity  duration-700 ${
          cursol === index ? "opacity-100 relative" : "opacity-0 absolute"
        } w-full `}
      >
        {index===0 && <p className={`font-inter text-xl  ml-1 `}>AI-Powered Strategies to Target Tomorrow</p> }
        <h1 className="text-xl font-kumbh  lg:text-[30px] xl:text-[40px] font-semibold leading-tight lg:whitespace-nowrap">
          {details.h11}
          </h1>
      
          <h2 className="text-red-600 font-kumbh block mt-4 text-2xl lg:text-3xl xl:text-[71.5px] md:whitespace-nowrap md:text-[60px]  lg:text-[70px] leading-tight font-semibold">
            {details.h22}
       
        </h2>

        <p className="text-gray-600 text-sm sm:text-base font-normal md:text-lg  font-inter py-4 leading-relaxed max-w-[90%] mx-auto lg:mx-0">
          {details.p}
        </p>

        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
        <Link to="/solutions"> <button
            type="button"
            className="bg-red-600 font-inter font-normal text-white px-6 sm:px-8 py-3  transition-colors duration-200 border border-transparent hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            Explore Solutions ↗
          </button></Link> 
         <Link to="/contact" > <button
            type="button"
            className="bg-white font-inter  text-black px-6 sm:px-8 py-3 font-medium border border-black transition-colors duration-200 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            Consult with Us ↗
          </button></Link>
        </div>

        
          <div className="mt-6 lg:mt-8">
            {/* Outer container should hide overflow while the inner track scrolls.
                Duplicate the logos array to ensure continuous/always-visible marquee. */}
            <div className="overflow-hidden py-4">
              <div
                className="flex gap-6 whitespace-nowrap animate-marquee will-change-transform"
                aria-hidden="true"
                style={{ alignItems: "center" }}
              >
                {[spring, wipro, zingo, mevatron, menlo, tech].map(
            (logo, i) => (
              <div
                key={i}
                className="min-w-[56px] sm:min-w-[64px] md:min-w-[80px] lg:min-w-[112px] h-10 sm:h-12 md:h-16 lg:h-20 flex items-center justify-center flex-shrink-0"
              >
                <img
                  src={logo}
                  alt={`logo-${i}`}
                  className="max-w-full max-h-full object-contain block"
                />
              </div>
            )
                )}
              </div>
            </div>

            <p className="text-black font-inter font-medium text-base sm:text-lg lg:text-2xl py-4 lg:py-6 text-center lg:text-left">
              Trusted by{" "}
              <span className="font-normal">Leading Enterprises & Fast–Growing Teams</span>
            </p>
          </div>
              </div>
            ))}
          </div>

          {/* RIGHT CONTENT */}
  <div className="w-full lg:w-1/2 relative flex flex-col items-center justify-center gap-6 lg:gap-0 mt-8 lg:mt-0">

    {/* Mask background */}
    <img
      src={mask}
      alt="mask"
      className="absolute bg-[#cfcece] inset-0 w-[220px] md:w-[360px] h-[250px] sm:h-[300px] md:h-[380px] mt-12 sm:mt-20 md:mt-24 ml-auto  md:ml-32 xl:ml-[11rem] object-cover hidden lg:block"
    />

    {/* Main image */}
    <img
      src={CursolDetails[cursol].img}
      alt={CursolDetails[cursol].h22}
      className={`w-[85%] sm:w-[75%] md:w-[65%] ${cursol===2? "lg:w-[110%]" : "lg:w-full" } h-auto max-h-[400px] sm:max-h-[450px] md:max-h-[550px] mx-auto ${cursol===2 ? "xl:ml-[100px]" :"xl:ml-[45px]"}  mb-8 lg:mb-24 object-contain ${cursol===0 ? "animate-moveOnce" :""}
       z-50`}
    />

    {/* Highlight */}
    <img
      src="/Highlight.svg"
      className="hidden xl:flex absolute z-30 bottom-14 xl:right-[360px]"
      alt="highlight"
    />

    {/* Testimonials */}
    <div className="flex flex-col items-center lg:items-end gap-4 lg:absolute xl:top-1/4 lg:-right-12 lg:mt-[140px] w-full px-2 sm:px-4">
      {Testimonial.map((item, index) => (
        <div
          key={index}
          className={`bg-white drop-shadow-lg z-50 p-3 md:p-6 lg:p-4 w-full max-w-[320px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[280px] transition-opacity duration-1000 overflow-hidden ${
            index === testimonialIndex ? "opacity-100 block" : "opacity-0 hidden"
          }`}
        >
          <p className="text-xs sm:text-sm italic text-gray-600 leading-relaxed whitespace-normal break-words">
            "{item.quote}"
          </p>
          <div className="flex items-center mt-4 gap-3">
            <img
              src={item.avitor}
              alt="avatar"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover flex-shrink-0"
            />
            <div className="min-w-0">
              <p className="text-xs sm:text-sm font-semibold truncate">{item.name}</p>
              <p className="text-[10px] sm:text-xs text-gray-500 truncate">
                {item.role} @ {item.company}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Floating Tags */}
    <div className="flex flex-col mt-8 justify-between mb-[-28px] w-full max-w-[90%] sm:max-w-sm mx-auto lg:absolute lg:bottom-0 lg:w-auto gap-3 lg:gap-4">
      {/* Tag 1 */}
      <div className="bg-white shadow-lg md:ml-32 rounded-lg px-3 py-2 flex items-center justify-between text-xs sm:text-sm">
        <div className="flex items-center gap-2">
          <img src="/F1.svg" alt="AI leverage" className="w-6 sm:w-8 h-6 sm:h-8" />
          <span className="font-medium">Budget Friendly</span>
        </div>
        <span className="text-red-600 whitespace-nowrap ml-4 sm:ml-8">Life Long</span>
      </div>

      {/* Tag 2 */}
      <div className="bg-white shadow-lg rounded-lg px-3 py-2 flex items-center justify-between text-xs sm:text-sm ml-0 lg:ml-16">
        <div className="flex items-center gap-2">
          <img src="/F2.svg" alt="AI leverage" className="w-6 sm:w-8 h-6 sm:h-8" />
          <span className="font-medium">Native, Fast & Powerful</span>
        </div>
        <span className="text-red-600 whitespace-nowrap ml-4 sm:ml-8">AI leverage</span>
      </div>
    </div>
  </div>
</section>







      {/* Industries Section - Responsive grid */}

  <section className="relative w-full h-auto xl:h-[725px] py-10 bg-[#080808] overflow-hidden">
  {/* Background Image + Overlay */}
  <div className="absolute inset-0 bg-cover bg-center bg-[#080808]" style={{ backgroundImage: "url('/11122436.svg')" }}></div>
  <div className="absolute inset-0 bg-[#080808]/10"></div>

  {/* Content */}
  <div className="relative z-10 md:ml-20 max-w-7xl mt-8 lg:mt-16 mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="flex justify-center items-start px-2 py-1 gap-2 bg-[#333333] rounded-md w-fit">
  <p className="text-white font-inter font-medium text-[16px] leading-[150%] tracking-[-0.03em]">
    Industries We Serve
  </p>
</div>

    {/* Subheading + Paragraph */}
    <div className="flex flex-col md:flex-col lg:flex-row lg:items-center lg:justify-between gap-4 sm:gap-6 mb-8 md:mt-2 sm:mb-12 text-center lg:text-left">
      <h2 className="text-white font-[500] text-[44px] leading-[130%] tracking-[-0.03em] font-kumbh">
        AI for Every Industry
      </h2>
      <p className="text-white text-sm font-normal sm:text-base md:text-lg mt-2 lg:mt-0 max-w-xl mx-auto lg:mx-0 leading-relaxed">
        We turn domain challenges into measurable outcomes with modern{" "}
        <br className="hidden sm:block" /> cloud, trusted data, and
        production-ready AI.
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:flex  flex-row mt-4 lg:mt-32  gap-4 sm:gap-4 px-2 sm:px-2   max-w-7xl  md:justify-center lg:justify-normal">
      {services.map((service, i) => (
        <div
          key={i}
          className="flex flex-col items-center  md:mt-6 text-center"
        >
          <img
            src={service.logo}
            alt={service.title}
            className="w-28 sm:w-32 md:w-36 lg:w-52 xl:h-[205.51px] h-auto object-contain"
          />
          <p className="text-white bg-red-600 py-1 px-2 sm:py-1.5 sm:px-3 md:py-2 md:px-4 w-28 sm:w-32 md:w-36 lg:w-52 text-xs sm:text-sm md:text-base text-center leading-snug ">
            {service.title}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Core Services Section - Responsive flex */}
    <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-10 mx-auto md:-ml-5 sm:py-16 lg:py-20 overflow-hidden">
  <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 max-w-7xl mx-auto">
    
    {/* LEFT SECTION */}
    <div className="flex-1 space-y-6 lg:space-y-8 text-center lg:text-left">
      <h1 className="font-semibold text-xl md:text-[44px] font-kumbh leading-10">
        Doelsoft
        <br />
        Core Services
      </h1>
      <p className="text-base font-inter md:text-lg font-normal leading-relaxed px-2 sm:px-0">
       We leverage cutting-edge engineering and innovation to design, build  and scale secure digital products that deliver measurable business results.
        
      </p>

      {/* Image */}
     
      <img
        src="Robot2.svg"
        alt="robot2"
         className=" w-[550px] h-[658px] mx-auto  md:-left-[117px] -top-[23px]  object-contain animate-moveOnce"
      />
    

      {/* Button */}
      <div className="flex justify-center lg:justify-start">
     <Link to="/serviceai">  <button className="flex items-center justify-center font-inter gap-2 bg-red-600 hover:bg-gray-600 text-white font-light px-16 sm:px-24 md:px-28 lg:px-40 md:whitespace-nowrap py-3 sm:py-5 text-lg sm:text-xl shadow-lg transition mt-4">
          Explore AI Strategy{" "}
          <ArrowUpRight
            className="border border-white rounded-full text-center"
            size={28}
          />
        </button></Link>
      </div>
    </div>

    {/* RIGHT SECTION: Services Grid */}
    <div
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mx-auto gap-6 lg:gap-8 w-full max-w-7xl px-4 md:px-6 lg:px-8"
>
  {[
  {
    icon: AI,
    title: "AI Strategy & Consulting",
    list: [
      "AI roadmaps & enterprise adoption",
      "Use-cases, ROI planning & governance",
      "Responsible AI, risk & safety",
    ],
  },
  {
    icon: cloud,
    title: "Cloud & Infrastructure Engineering",
    list: [
      "Cloud architecture & scalable infra",
      "Hybrid/multi-cloud & optimization",
      "Migration & modernization",
    ],
  },
  {
    icon: data,
    title: "Data Engineering & Analytics",
    list: [
      "Data platforms & governance",
      "Feature engineering & ML models",
      "BI, analytics & decision intelligence",
    ],
  },
  {
    icon: Intelligent,
    title: "Intelligent Software Development",
    list: [
      "AI-driven dev workflows & copilots",
      "Automated testing & secure coding",
      "Intelligent components in products",
    ],
  },
  {
    icon: CyberSecurity,
    title: "AI-Driven Cybersecurity",
    list: [
      "Threat detection & risk scoring",
      "Identity security & zero-trust",
      "Compliance, audit & posture mgmt",
    ],
  },
  {
    icon: Accessibility,
    title: "Accessibility & Inclusive Design",
    list: [
      "Accessible, inclusive product design",
      "A11y audits, remediation & QA",
      "CI/CD-integrated accessibility checks",
    ],
  },
].map((service, i) => (
    <div
      key={i}
      className="border border-gray-600 p-6 px-2 lg:px-6 py-6 lg:py-4 bg-white hover:scale-[1.02] transition-transform duration-300"
    >
      <img
        src={service.icon}
        alt={service.title}
        className="w-10 md:w-14 lg:w-16 h-auto mb-4 mx-auto sm:mx-0"
      />
      <h3 className="text-black font-semibold font-kumbh text-base sm:text-lg md:text-xl mb-3 sm:mb-4 text-center sm:text-left">
        {service.title}
      </h3>
      <ul className="list-disc list-inside text-gray-600 space-y-1 sm:space-y-2 text-center font-normal md:text-left">
        {service.list.map((item, j) => (
          <li className="text-sm font-inter" key={j}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>

  </div>
</section>


      {/* How We Work Section */}
      <section className="relative bg-cover bg-center text-center py-16 sm:py-24 px-4 md:px-6 xl:px-8 overflow-hidden"
        style={{
          backgroundImage: "url('/Mask group.svg')",
        }}>
        <div className="max-w-6xl mx-auto md:mx-[91px] xl:ml-[5rem] text-left">
          <h3 className="text-lg text-white mb-2">Doelsoft</h3>
          <h2 className="text-3xl sm:text-[44px] font-kumbh font-medium text-white mb-8 sm:mb-12">How we work</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-28">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-red-600 hover:bg-[#464b51] text-white xl:h-[146px] xl:w-[290.28px] p-8  flex flex-col justify-between shadow-lg "
              >
                <div className="flex flex-col mb-2 items-start gap-3 ">
                <img src={step.icon} alt={step.title} className="w-[28px] h-[28px]"/>
                 
                  
                </div>
                
                <div className="flex flex-row  justify-between gap-3 ">
                   
                       <h3 className="text-xl font-kumbh font-medium">{step.title}</h3>
                  <p className="w-8 h-8 flex items-center justify-center rounded-full  border border-white ">
                    →
                  </p>
                </div>
                <p className="text-sm mb-6 mt-2 font-inter whitespace-normal xl:whitespace-nowrap leading-relaxed">{step.desc}</p>
               
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Doelsoft Section - Responsive flex */}
      <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-12 md:py-20 overflow-hidden">
  <div className="flex flex-col lg:flex-row gap-8 xl:ml-1 xl:gap-16 max-w-7xl mx-auto">
    
    {/* LEFT SIDE */}
    <div className="flex-1 relative flex flex-col items-center justify-center lg:justify-start">
      
      {/* Floating logo */}
      <div className="hidden xl:flex absolute right-4 xl:right-8 top-6 xl:top-10 z-50">
        <img src="/logo4.svg" alt="logo" className="w-20 sm:w-24 h-auto" />
      </div>

      {/* Background */}
      <img
        src={Background}
        alt="background"
        className="absolute inset-0 w-[300px] md:w-[300px] xl:w-[400px] h-[400px] md:h-[520px] xl:h-[580px] left-[70px] sm:left-[120px] md:left-[146px] top-[50px] sm:top-[60px] md:top-[72px] bg-[#F8F9FD] bg-cover"
      />

      {/* Girl Image */}
      <img
        src="/Girl.svg"
        alt="Girl"
        className="w-[280px] md:w-[340px] xl:w-[390px] max-w-md h-auto z-10 relative"
      />

      {/* Testimonials */}
      <div className="flex flex-col items-end gap-2 mt-auto absolute top-[340px] md:top-[420px] lg:top-[500px] right-2 md:right-4 lg:right-0">
        {Testimonial.map((item, index) => (
          <div
            key={index}
            className={`bg-white z-50 shadow-xl p-3 sm:p-4 w-44 md:w-48 h-auto min-h-[160px] transition-opacity duration-1000 ${
              index === testimonialIndex ? "opacity-100 block" : "opacity-0 hidden"
            }`}
          >
            <p className="text-xs sm:text-sm italic text-gray-600 leading-relaxed">
              "{item.quote}"
            </p>
            <div className="flex items-center mt-4 sm:mt-6 gap-2">
              <img
              src={item.avitor}
              alt="avatar"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover flex-shrink-0"
            />
              <div>
                <p className="text-xs sm:text-sm font-inter font-semibold">{item.name}</p>
                <p className="text-[10px] sm:text-xs font-inter text-gray-500">
                  {item.role} @ {item.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="flex-1 space-y-6 lg:space-y-8 py-8 lg:py-10 text-center sm:text-left">
      <h1 className="font-semibold leading-6 text-2xl sm:text-[36px] md:text-[40px] lg:text-[44px] font-kumbh">
        Why Doelsoft
      </h1>
      <p className="py-4 text-base sm:text-lg xl:text-xl font-inter leading-relaxed max-w-[95%] mx-auto sm:mx-0">
        We bring together deep technical expertise, secure system design, and data-driven decision frameworks to deliver production-grade solutions with governance, observability, and accessibility at the core.
 
      </p>

      <h2 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl font-inter">
        Proof points
      </h2>
      <ul className="list-disc list-inside font-inter text-black mt-4 space-y-2 text-sm sm:text-base xl:text-lg leading-relaxed max-w-[95%] mx-auto sm:mx-0">
        <li>Agile transformation</li>
        <li>Cost Reduction</li>
        <li>Focusing on customers centric goals</li>
        <li>Tailor-made engagement models as per Client requirement</li>
        <li>Top class quality services</li>
        <li>Offshoring</li>
        <li>Cost-effective solutions</li>
        <li>Resource Optimization</li>
        <li>Customized solutions as per client requirement</li>
      </ul>
    </div>
  </div>
</section>


      {/* Frames Section */}
     <section className="relative bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-48">
  

     
    <div  className="hidden  xl:flex flex-row lg:grid lg:grid-cols-2 gap-[2.7rem]  xl:-ml-14  w-screen">
    {frames.map((frame, i) => (
      <div
      key={i}
       className="flex flex-row  gap-4 bg-white shadow-2xl 
         w-[280px] h-[68px] px-4 py-3"
      >
      <div className="flex flex-row gap-2 mt-3  items-center whitespace-nowrap">
        <img
        src="/F1.svg"
        alt={frame}
        className="w-8 h-8"
        />
        <p className="flex flex-row gap-2 items-center whitespace-nowrap">{frame}</p>
      </div>
      </div>
    ))}
      
    
    <div className='hidden xl:flex py-6 '>
    <img
      src="/Highlight1.svg"
      className=" absolute w-20 z-30 mt-9 xl:left-[380px] top-[-110px]"
      alt="highlight"
    />

    </div>
    <Link to="/chooseus" > <div className='hidden xl:flex py-6 '>
    <ArrowUpRight className="border absolute hover:bg-gray-600  z-30 mt-9 xl:left-[160px] top-[-104px] border-black rounded-full p-4"
                size={56}
    />

    </div></Link>
    </div>

    {/* Tablet view - Medium screens */}
    <div  className="hidden md:grid lg:hidden xl:hidden  grid-cols-2 gap-[1.5rem] w-screen overflow-x-auto px-4">
    {frames.map((frame, i) => (
      <div
      key={i}
       className="flex flex-row  gap-4 bg-white shadow-2xl 
         w-[280px] h-[68px] px-4 py-3 flex-shrink-0"
      >
      <div className="flex flex-row gap-2 mt-3  items-center whitespace-nowrap">
        <img
        src="/F1.svg"
        alt={frame}
        className="w-8 h-8"
        />
        <p className="flex flex-row gap-2 items-center whitespace-nowrap">{frame}</p>
      </div>
      </div>
    ))}
    </div>
    
    

    {/* Mobile view */}
  <div className=" md:hidden grid grid-cols-1 sm:grid-cols-2 md:py-8 gap-4">
    {frames.map((frame, i) => (
      <div
        key={i}
        className="flex flex-row bg-slate-100  shadow-sm px-4 py-2 justify-start items-center gap-2"
      >
        <img
          src="/F1.svg"
          alt={frame}
          className="w-8 h-8"
        />
        <p className="text-sm text-gray-800">{frame}</p>
      </div>
    ))}
  </div>
</section>


      {/* Outcomes Section */}
      <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
  {/* Header */}
  <div className="max-w-6xl mx-auto text-center mb-8 sm:mb-12 px-2">
    <h2 className="text-2xl md:text-[44px] font-kumbh font-semibold text-gray-900">
      Outcomes We Deliver
    </h2>
    <p className="mt-4 text-gray-600 text-base font-inter sm:text-lg max-w-3xl mx-auto leading-relaxed">
      We apply AI, Cloud & Data to move the metrics that matter — speed, cost,
      and customer experience — backed by production-grade delivery.
    </p>
  </div>

  {/* Card Grid */}
  <div className="grid gird-col-1 md:grid-cols-2 justify-between ml-0 xl:ml-28 gap-6 sm:gap-8 max-w-[77rem] ">
    {cards.slice(0, 4).map((card, i) => (
      <div
        key={i}
       className={`relative overflow-hidden shadow-lg h-auto 
  ${i === 2 ? "lg:mt-[-198px]" : ""} 
  ${i === 0 || i === 3 ? "lg:h-[200px]" : "lg:h-[400px]"} 
  ${card.type === "solid" ? `${card.bg} flex items-center justify-center p-6 sm:p-8` : ""}`
}

      >
        {/* Image Card */}
        {card.type === "image" && (
          <div className="relative w-full h-full">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-70 p-4 sm:p-6">
              <h3 className={`text-base sm:text-lg font-kumbh font-semibold ${card.text}`}>
                {card.title}
              </h3>
              <p className={`mt-2 font-inter text-sm ${card.text}`}>{card.desc}</p>
            </div>
          </div>
        )}

        {/* Solid Card */}
        {card.type === "solid" && (
          <div className="flex flex-col items-start gap-3 sm:gap-4 text-left w-full">
            {card.icon && (
              <img
                src={card.icon}
                alt="icon"
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
            )}
            <h3 className={`text-base font-kumbh sm:text-lg font-semibold ${card.text}`}>
              {card.title}
            </h3>
            <p className={`text-sm font-inter sm:text-base ${card.text}`}>{card.desc}</p>
          </div>
        )}
      </div>
    ))}
    
  </div>
  
</section>


      {/* Counters Section */}
      <section
        className="relative bg-cover bg-center text-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: "url('/Background1.svg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-red-900/60"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-[44px] xl:-ml-12 font-kumbh font-medium text-white leading-tight">
            Where Talent, Trust & <br className="hidden lg:block" /> Code Add Up
          </h1>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-end items-center gap-6 sm:gap-10 bg-transparent rounded-lg">
            <div className="text-center">
              <Counter target="120" suffix="+" />
              <p className="text-white font-inter text-base sm:text-lg md:text-xl">Employees</p>
            </div>

            <p className="hidden sm:block text-white font-inter  text-2xl sm:text-3xl">|</p>

            <div className="text-center">
              <Counter target="150" suffix="+" />
              <p className="text-white text-base font-inter sm:text-lg md:text-xl">Clients</p>
            </div>

            <p className="hidden sm:block text-white  text-2xl sm:text-3xl">|</p>

            <div className="text-center ">
              <Counter target="500" suffix="K" />
              <p className="text-white text-base font-inter sm:text-lg md:text-xl">Lines of Code</p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative px-4 sm:px-6 lg:px-12 py-20 sm:py-24 md:py-28 bg-white overflow-hidden">
  {/* Floating Logo */}
  <div className="absolute right-6 sm:right-16 md:right-32 lg:right-48 top-6 sm:top-10 md:top-14">
    <img
      src="/logo4.svg"
      alt="logo"
      className="w-12 sm:w-16 md:w-20 h-auto"
    />
  </div>

  {/* Heading + CTA */}
  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 max-w-7xl mx-auto gap-6 sm:gap-8">
    <div className="flex-1 mb-6 space-y-4 lg:mb-0 text-center lg:text-left">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-kumbh xl:-ml-5 font-semibold leading-tight tracking-[-0.03em] text-black">
        Doelsoft Insights & Thought Leadership
      </h2>
      <p className="text-gray-800 mt-2 md:mt-4 xl:-ml-4 max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base md:text-lg leading-relaxed font-inter px-2">
        Practical playbooks from the field AI, Cloud & Data patterns that ship results.
      </p>
    </div>

    {/* CTA Button */}
    <div className="flex justify-center lg:justify-end">
      <button className="relative flex items-center justify-between bg-[#EF0E0E] text-white font-semibold px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 shadow-lg hover:bg-gray-600 transition w-full sm:w-auto max-w-[300px] mx-auto">
        <span className="text-base sm:text-lg md:text-xl tracking-[-0.03em] font-inter">
          View all Insights
        </span>
        <span className="ml-3 sm:ml-4 w-10 sm:w-12 h-10 sm:h-12 font-inter flex items-center justify-center rounded-full border border-white">
          <ArrowUpRight size={18} className="sm:size-5" />
        </span>
      </button>
    </div>
  </div>

  {/* Insights Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:ml-0 lg:ml-20 max-w-7xl mx-auto px-2 sm:px-4">
    {insights.map((item, i) => (
      <div
        key={i}
        className="bg-[#282828]  overflow-hidden flex flex-col shadow-lg transition-transform duration-300 hover:-translate-y-1"
      >
        {/* Top Image */}
        <div className="h-[200px] sm:h-[220px] md:h-[240px] w-full overflow-hidden">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 flex flex-col flex-1 text-white">
          <p className="text-xs sm:text-sm font-light font-inter text-gray-300">
            {item.client}
          </p>
          <h3 className="text-lg sm:text-xl font-semibold mt-2 sm:mt-3 font-kumbh leading-snug">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm mt-3 font-inter text-gray-300 leading-relaxed line-clamp-3">
            {item.desc}
          </p>

          {/* Icon Button */}
          <button className="mt-4 ml-auto w-9 sm:w-10 md:w-11 h-9 sm:h-10 md:h-11 flex items-center justify-center rounded-full border border-white hover:bg-white/20 transition">
            <ArrowUpRight size={16} className="sm:size-[18]" />
          </button>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Featured Solutions Section */}
      <section className="bg-white py-10 sm:py-12 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-14 max-w-7xl mx-auto">
          {/* TEXT + FIRST CARD COLUMN */}
          <div className="w-full lg:w-1/2 py-4 sm:py-8 text-center lg:text-left">
            <h2 className="text-2xl xl:-ml-7 sm:text-3xl md:text-[44px] font-semibold font-kumbh text-gray-900 mb-2">
              Featured Solutions
            </h2>

            <p className="text-gray-600 font-inter text-sm sm:text-base xl:-ml-6 md:text-lg mt-3 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Pre-built, production-grade frameworks that convert advanced engineering and intelligent platforms into measurable business results.
            </p>

            {solutions.slice(0, 1).map((item, i) => (
              <div
                key={i}
                className={`mt-8 sm:mt-10 
                  h-full w-full max-w-xl md:max-w-2xl   mx-auto   xl:w-[376px] xl:h-[248px]
                  p-6 sm:p-8 md:p-10 xl:-ml-6  shadow-sm transition hover:shadow-md
                  ${item.type === "bg" ? "bg-gray-100" : "border border-red-500 bg-white"}`}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-10 w-10 mb-4 object-contain mx-auto lg:mx-0"
                />
                <h3 className="font-semibold font-kumbh text-lg text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-inter text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* IMAGE COLUMN */}
          <div className="w-full flex justify-center items-center mt-6 lg:mt-0">
            <img
              src="/Solution.svg"
              alt="Solution Graphic"
              className="w-full max-w-xl md:max-w-2xl xl:max-w-[680px] h-auto mx-auto transition-all duration-500"
            />
          </div>
        </div>

        {/* CARDS GRID */}
        <div className="mt-10 max-w-7xl xl:ml-14 xl:-mt-3 mx-auto px-2 sm:px-0">
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              gap-4
              md:gap-6
              xl:gap-6
            "
          >
            {solutions.slice(1).map((item, i) => (
              <div
                key={i}
                className={`
                  p-6 sm:p-8 
                  w-full
                  h-full xl:h-[248px]   xl:w-[376px]  shadow-sm hover:shadow-md transition
                  ${item.type === "bg" ? "bg-[#E2E7F1] border border-black" : "border border-red-500 bg-white"}
                `}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-10 w-10 mb-4 object-contain mx-auto sm:mx-0"
                />
                <h3 className="font-medium text-base sm:text-lg text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-normal text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

            {/* CTA CARD */}
            <Link to="/contact">
              <div
                className="
                  bg-red-600  text-white
                  flex flex-col justify-center items-center
                  p-6 sm:p-8 
                   w-full
                  h-full xl:h-[248px]  xl:w-[376px] 
                  hover:bg-gray-600
                "
              >
                <div className="text-center">
                  <h3 className="font-semibold text-lg sm:text-xl md:text-2xl mb-3">
                    Talk to an Expert
                  </h3>
                  <button className="w-10 h-10 flex items-center justify-center rounded-full border  hover:text-red-600 transition">
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    
        <section
                    className="relative w-full  bg-cover bg-center text-center py-16 md:h-[568px]   sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
                    style={{ backgroundImage: "url('/Background2.svg')",marginTop:"45px" } }
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
                      <h2  className="text-xl md:text-2xl lg:text-3xl xl:text-[56px] font-manrope font-bold whitespace-nowrap leading-snug px-2">
                        Let's Build the Future Together
                      </h2>
                  
                      <p className="text-lg lg:text-[28px] xl:text-[30px] font-inter text-gray-200 leading-relaxed px-2">
                        Tells Us your goals.We'll design the runaway then deliver it with AI,Could and Data.
                      </p>
                  
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
  )
}

export default Home;
