import spring from '../assets/spring.svg'
import wipro from '../assets/wipro.svg'
import zingo from '../assets/Zingo.svg'
import mevatron from '../assets/mevatron.svg' 
import menlo from '../assets/menlo.svg'
import tech from '../assets/techmahindra.svg'
import Counter from './Counter';
import {useState, useEffect } from 'react'
import { RxAvatar } from "react-icons/rx";
import mask from "../assets/mask.svg";
import BFSI from "../assets/BFSI.svg";

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
import { Compass, Ruler, Truck, Share2 } from "lucide-react";
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
    img: "/a11y.svg",
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
    icon: "/artificial.svg", // replace with actual icons
    title: "Recruitment Intelligence",
    desc: "Cut time-to-hire with AI-powered parsing, shortlisting, and scheduling.",
    type: "border",
  },
  {
    icon: "/intelligence1.svg",
    title: "AI Copilots for Operations",
    desc: "Automate knowledge work across service, support, and back-office.",
    type: "bg",
  },
  {
    icon: "/fraud.svg",
    title: "Fraud & Risk Analytics",
    desc: "Spot anomalies early with streaming ML and governed models.",
    type: "border",
  },
  {
    icon: "/Group_A.svg",
    title: "Accessibility AI & Compliance",
    desc: "Ship inclusive products with automated audits and remediation.",
    type: "bg",
  },
  {
    icon: "/Group_B.svg",
    title: "Cloud Modernization Accelerator",
    desc: "Migrate, containerize, and optimize applications seamlessly.",
    type: "border",
  },
  {
    icon: "/Group_C.svg",
    title: "Customer 360 & Personalization",
    desc: "Unify customer data into one view for tailored experiences.",
    type: "border",
  },
];
    const Testimonial=[
       { quote:" Welcome to the epicenter of AI innovation. Future Tech AI News is your passport",
        name:"Ajay sharma",
        company:"Techoly",
        avitor:"/Avatar.svg"
    },
     { quote:" Welcome to the epicenter of AI innovation. Future Tech AI News is your passport"
,
        name:"Avinash",
        company:"Tech world",
        avitor:"/Avatar.svg"
    },
     { quote:" Welcome to the epicenter of AI innovation. Future Tech AI News is your passport",
        name:"Tim Cook",
        company:"apple",
        avitor:"/Avatar.svg"
    }
]
const steps = [
  {
    title: "Discover",
    desc: "Value, Opportunities & Risks",
    icon: <Compass className="w-8 h-8 text-white" />,
  },
  {
    title: "Design",
    desc: "Blueprint, Governance, KPIs",
    icon: <Ruler className="w-8 h-8 text-white" />,
  },
  {
    title: "Deliver",
    desc: "Build, Integrate, Harden, Ship",
    icon: <Truck className="w-8 h-8 text-white" />,
  },
  {
    title: "Scale",
    desc: "MLOps, FinOps improvement",
    icon: <Share2 className="w-8 h-8 text-white" />,
  },
];
const frames=["OutCome & First Delivery","AI + Human Intelligence", "Secure,Accesibile by Disign","Global ,Agile & Scalable"];
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
    <div className='w-full h-full overflow-x-hidden mt-2 '>
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
<section className="w-full min-h-lvh max-w-[95vw] md:max-w-[90vw] xl:max-w-[85vw] mx-auto md:mx-[80px] relative flex flex-row md:flex-col lg:flex-row justify-between items-center bg-white px-4 sm:px-6 lg:px-8 py-20 sm:py-20 gap-8 lg:gap-12 overflow-hidden">

  {/* LEFT CONTENT */}
  <div className="w-full lg:w-1/2 space-y-6 flex  lg:flex-col gap-6 md:gap-8 text-center lg:text-left md:mt-36">
    {CursolDetails.map((details, index) => (
      <div
        key={index}
        className={`flex-1 font-kumbh transition-opacity  duration-700 ${
          cursol === index ? "opacity-100 relative" : "opacity-0 absolute"
        } w-full `}
      >
        {index===0 && <p className={`font-inter  `}>Target Tomorrow with AI</p> }
        <h1 className="text-xl font-kumbh sm:text-xl md:text-[30px] lg:text-[40px] font-semibold leading-tight lg:whitespace-nowrap">
          {details.h11}
          </h1>
      
          <h2 className="text-red-600 font-kumbh block mt-2 text-4xl md:whitespace-nowrap md:text-[60px]  lg:text-[70px] leading-tight font-semibold">
            {details.h22}
       
        </h2>

        <p className="text-gray-600 text-sm sm:text-base font-normal md:text-lg  font-inter py-4 leading-relaxed max-w-[90%] mx-auto lg:mx-0">
          {details.p}
        </p>

        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
          <button
            type="button"
            className="bg-red-600 font-inter font-normal text-white px-6 sm:px-8 py-3  transition-colors duration-200 border border-transparent hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            Explore Solutions ↗
          </button>
          <button
            type="button"
            className="bg-white font-inter  text-black px-6 sm:px-8 py-3 font-medium border border-black transition-colors duration-200 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            Consult with Us ↗
          </button>
        </div>

        {/* Logos */}
        <div className="mt-6 lg:mt-8 ">
          <div className="flex gap-0 animate-marquee whitespace-nowrap overflow-x-auto no-scrollbar  py-4">
            {[spring, wipro, zingo, mevatron, menlo, tech].map((logo, i) => (
              <div
                key={i}
                className="w-14 sm:w-16  md:w-20 lg:w-28 h-10 sm:h-12 md:h-16 lg:h-24 flex items-center justify-center flex-shrink-0"
              >
                <img
                  src={logo}
                  alt={`logo-${i}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
          
          <p className="text-black  font-inter font-medium text-base sm:text-lg lg:text-2xl py-4 lg:py-6 text-center lg:text-left">
            Trusted by{" "}
            <span className="font-normal">
              Leading Enterprises & Fast–Growing Teams
            </span>
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
      className="absolute bg-[#cfcece] inset-0 w-[220px] md:w-[360px] h-[250px] sm:h-[300px] md:h-[380px] mt-12 sm:mt-20 md:mt-24 md:ml-[8rem] xl:ml-[11rem] object-cover hidden lg:block"
    />

    {/* Main image */}
    <img
      src={CursolDetails[cursol].img}
      alt={CursolDetails[cursol].h22}
      className={`w-[85%] sm:w-[75%] md:w-[65%] lg:w-full h-auto max-h-[400px] sm:max-h-[450px] md:max-h-[550px] mx-auto md:ml-[45px] mb-8 lg:mb-24 object-contain 
      } z-50`}
    />

    {/* Highlight */}
    <img
      src="/Highlight.svg"
      className="hidden md:flex absolute z-30 bottom-10 lg:right-[340px]"
      alt="highlight"
    />

    {/* Testimonials */}
    <div className="flex flex-col items-center lg:items-end gap-4 lg:absolute lg:top-1/4 lg:right-0 lg:mr-[-90px] md:mt-[140px] ">
      {Testimonial.map((item, index) => (
        <div
          key={index}
          className={`bg-white drop-shadow-lg z-50 p-3 md:p-8 lg:p-6 w-72 transition-opacity duration-1000 ${
            index === testimonialIndex ? "opacity-100 block" : "opacity-0 hidden"
          }`}
        >
          <p className="text-xs sm:text-[14px] italic whitespace-break-spaces text-gray-600 ">
            "{item.quote}"
          </p>
          <div className="flex items-center mt-2 gap-2">
            <img
              src={item.avitor}
              alt="avatar"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover"
            />
            <div>
              <p className="text-xs sm:text-sm font-semibold">{item.name}</p>
              <p className="text-[10px] sm:text-xs text-gray-500">
                Founder @ {item.company}
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
  <section className="relative w-full  h-[725px] bg-[#080808] overflow-hidden">
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
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:flex  flex-row mt-4 lg:mt-32  gap-4 sm:gap-4 px-2 sm:px-2   max-w-7xl  md:justify-center lg:justify-normal">
      {services.map((service, i) => (
        <div
          key={i}
          className="flex flex-col items-center hover:scale-105 duration-300 md:mt-6 text-center"
        >
          <img
            src={service.logo}
            alt={service.title}
            className="w-28 sm:w-32 md:w-36 lg:w-52 h-auto object-contain"
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
        We Combine AI, Cloud & Data to design, build and{" "}
        <br className="hidden lg:block" /> scale secure digital products aligned
        to measurable outcomes.
      </p>

      {/* Image */}
     
      <img
        src="Robot2.svg"
        alt="robot2"
         className=" w-[550px] h-[658px] mx-auto  md:-left-[117px] -top-[23px]  object-contain animate-moveOnce"
      />
    

      {/* Button */}
      <div className="flex justify-center lg:justify-start">
        <button className="flex items-center justify-center font-inter gap-2 bg-red-600 hover:bg-gray-600 text-white font-light px-16 sm:px-24 md:px-28 lg:px-40 md:whitespace-nowrap py-3 sm:py-5 text-lg sm:text-xl shadow-lg transition mt-4">
          Explore AI Strategy{" "}
          <ArrowUpRight
            className="border border-white rounded-full text-center"
            size={28}
          />
        </button>
      </div>
    </div>

    {/* RIGHT SECTION: Services Grid */}
    <div
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 mx-auto gap-6 md:gap-8 w-full max-w-7xl px-4 sm:px-6 md:px-8"
>
  {[
    {
      icon: AI,
      title: "AI Strategy & Consulting",
      list: [
        "Gen-AI features & Copilots",
        "Microservices & API, Integrations",
        "Performance, security, observability",
      ],
    },
    {
      icon: cloud,
      title: "Cloud & AI Infrastructure",
      list: [
        "Cloud migrations & Modernization",
        "MLOPs Platforms, model serving",
        "Cost, reliability & security baselines",
      ],
    },
    {
      icon: data,
      title: "Data Science & Analytics",
      list: [
        "Data engineering & Governance",
        "ML modeling & evaluation",
        "BI dashboards & decision intelligence",
      ],
    },
    {
      icon: Intelligent,
      title: "Intelligent Software Dev",
      list: [
        "Gen-AI features & copilots",
        "Microservices & APIs, integrations",
        "Performance, security, observability",
      ],
    },
    {
      icon: CyberSecurity,
      title: "AI-Enhanced CyberSecurity",
      list: [
        "Anomaly & fraud detection",
        "Identity, access & zero-trust",
        "Compliance hardening & monitoring",
      ],
    },
    {
      icon: Accessibility,
      title: "Accessibility Inclusive Design",
      list: [
        "Accessibility audits & remediation",
        "Inclusive UX writing & patterns",
        "Continuous accessibility in CI/CD",
      ],
    },
  ].map((service, i) => (
    <div
      key={i}
      className="border border-gray-600 p-6 px-2 sm:px-6 py-6 md:py-4 bg-white hover:scale-[1.02] transition-transform duration-300"
    >
      <img
        src={service.icon}
        alt={service.title}
        className="w-10 sm:w-14 md:w-16 h-auto mb-4 mx-auto sm:mx-0"
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
      <section className="relative bg-cover bg-center text-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          backgroundImage: "url('/Mask group.svg')",
        }}>
        <div className="max-w-6xl mx-auto md:mx-[91px] md:ml-[5rem] text-left">
          <h3 className="text-lg text-white mb-2">Doelsoft</h3>
          <h2 className="text-3xl sm:text-[44px] font-kumbh font-medium text-white mb-8 sm:mb-12">How we work</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-red-600 text-white  p-8  flex flex-col justify-between shadow-lg hover:scale-105 transition-transform"
              >
                <div className="flex flex-col items-start gap-3 mb-4">
                  {step.icon}
                 
                  
                </div>
                
                <div className="flex flex-row justify-between gap-3 ">
                   
                       <h3 className="text-xl font-kumbh font-medium">{step.title}</h3>
                  <button className="w-8 h-8 flex items-center justify-center rounded-full  border border-white hover:bg-white hover:text-red-600 transition">
                    →
                  </button>
                </div>
                <p className="text-sm mb-6 mt-2 font-inter whitespace-normal xl:whitespace-nowrap leading-relaxed">{step.desc}</p>
               
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Doelsoft Section - Responsive flex */}
      <section className="w-full bg-white px-4 sm:px-6 lg:px-8 py-12 md:py-20 overflow-hidden">
  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-7xl mx-auto">
    
    {/* LEFT SIDE */}
    <div className="flex-1 relative flex flex-col items-center justify-center lg:justify-start">
      
      {/* Floating logo */}
      <div className="hidden xl:flex absolute right-4 sm:right-8 top-6 sm:top-10 z-50">
        <img src="/logo4.svg" alt="logo" className="w-20 sm:w-24 h-auto" />
      </div>

      {/* Background */}
      <img
        src={Background}
        alt="background"
        className="absolute inset-0 w-[300px] sm:w-[380px] md:w-[400px] h-[400px] sm:h-[520px] md:h-[580px] left-[70px] sm:left-[120px] md:left-[146px] top-[50px] sm:top-[60px] md:top-[72px] bg-[#F8F9FD] bg-cover"
      />

      {/* Girl Image */}
      <img
        src="/Girl.svg"
        alt="Girl"
        className="w-[280px] sm:w-[340px] md:w-[390px] max-w-md h-auto z-10 relative"
      />

      {/* Testimonials */}
      <div className="flex flex-col items-end gap-2 mt-auto absolute top-[340px] sm:top-[420px] md:top-[500px] right-2 sm:right-4 md:right-0">
        {Testimonial.map((item, index) => (
          <div
            key={index}
            className={`bg-white z-50 shadow-xl p-3 sm:p-4 w-44 sm:w-48 h-auto min-h-[160px] transition-opacity duration-1000 ${
              index === testimonialIndex ? "opacity-100 block" : "opacity-0 hidden"
            }`}
          >
            <p className="text-xs sm:text-sm italic text-gray-600 leading-relaxed">
              "{item.quote}"
            </p>
            <div className="flex items-center mt-4 sm:mt-6 gap-2">
              <RxAvatar size={22} />
              <div>
                <p className="text-xs sm:text-sm font-inter font-semibold">{item.name}</p>
                <p className="text-[10px] sm:text-xs font-inter text-gray-500">
                  Founder @ {item.company}
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
      <p className="py-4 text-base sm:text-lg font-inter leading-relaxed max-w-[95%] mx-auto sm:mx-0">
        We turn AI, Cloud & Data into measurable outcomes shipping production systems with governance,
        security, and accessibility built in.
      </p>

      <h2 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl font-inter">
        Proof points
      </h2>
      <ul className="list-disc list-inside font-inter text-black mt-4 space-y-2 text-sm sm:text-base leading-relaxed max-w-[95%] mx-auto sm:mx-0">
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
  {/* Desktop / Tablet view */}

   
  <div className="hidden md:flex flex-wrap gap-6 justify-center">
    {frames.map((frame, i) => (
      <div
        key={i}
        className="flex flex-row bg-white shadow-xl px-4 py-3 justify-between flex-1 min-w-[200px] max-w-[300px]"
      >
        <div className="flex flex-row gap-2 mt-3 items-center whitespace-nowrap">
          <img
            src="/F1.svg"
            alt={frame}
            className="w-10 h-10"
          />
          <p className="text-sm sm:text-base font-semibold text-gray-800">{frame}</p>
        </div>
      </div>
    ))}
      
    
    <div className='hidden xl:flex py-6 '>
    <img
      src="/Highlight1.svg"
      className=" absolute w-20 z-30 mt-9 lg:left-[460px] top-[-100px]"
      alt="highlight"
    />

  </div>
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
    <h2 className="text-2xl md:text-[44px] font-kumbh font-medium text-gray-900">
      Outcomes We Deliver
    </h2>
    <p className="mt-4 text-gray-600 text-base font-inter sm:text-lg max-w-3xl mx-auto leading-relaxed">
      We apply AI, Cloud & Data to move the metrics that matter — speed, cost,
      and customer experience — backed by production-grade delivery.
    </p>
  </div>

  {/* Card Grid */}
  <div className="grid gird-col-1 md:grid-cols-2 justify-between gap-6 sm:gap-8 max-w-6xl mx-auto">
    {cards.slice(0, 4).map((card, i) => (
      <div
        key={i}
        className={`relative overflow-hidden shadow-lg  h-auto ${i===0 || i===3 ? "h-[200px] " : " h-[300px"} ${
          card.type === "solid" ? `${card.bg} flex items-center justify-center p-6 sm:p-8` : ""
        }`}
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
          <h1 className="text-2xl md:text-[44px] font-kumbh font-medium text-white leading-tight">
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

      <section className="relative px-4 sm:px-6 lg:px-12 py-28 bg-white">
         <div className="absolute  right-48 top-14">
              
          <img
            src="/logo4.svg" 
            alt="logo"
            className="w-20 h-auto"
          />
      </div>
      {/* Heading + CTA */}
      <div className="  flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 max-w-7xl mx-auto">
        <div className="flex-1 mb-6 space-y-4 lg:mb-0">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-kumbh md:-ml-3 font-semibold  leading-tight tracking-[-0.03em] text-black ">
            Doelsoft Insights &  Thought Leadership
          </h2>
          <p className="text-gray-800 mt-4 md:-ml-3 max-w-2xl text-base sm:text-lg leading-relaxed font-inter">
            Practical playbooks from the field AI, Cloud & Data patterns that
            ship results.
          </p>
        </div>

        {/* CTA Card (Red Button) */}
         
        <button className="relative flex items-center justify-between bg-[#EF0E0E] text-white font-semibold px-10 py-6 shadow-lg hover:bg-red-700 transition">
          <span className="text-xl tracking-[-0.03em] font-inter">View all Insights</span>
          <span className="ml-4 w-12 h-12 font-inter flex items-center justify-center rounded-full border border-white">
            <ArrowUpRight size={20} />
          </span>
        </button>
      </div>

      {/* Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:ml-20 max-w-7xl mx-auto">
        {insights.map((item, i) => (
          <div
            key={i}
            className="bg-[#282828]  overflow-hidden flex flex-col shadow-lg"
          >
            {/* Top Image */}
            <div className="h-[220px] w-full overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1 text-white">
              <p className="text-sm font-light font-inter text-gray-300">{item.client}</p>
              <h3 className="text-xl font-semibold mt-3 font-kumbh">
                {item.title}
              </h3>
              <p className="text-sm mt-3 font-inter whitespace-nowrap text-gray-300 leading-relaxed ">
                {item.desc}
              </p>

              {/* Icon Button */}
              <button className="mt-4 ml-auto w-11 h-11 flex items-center justify-center rounded-full border border-white hover:bg-white/20 transition">
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>

      {/* Featured Solutions Section */}
<section className="bg-white py-12 px-4 sm:px-8">
  <div className="flex flex-col lg:flex-row items-center md:ml-14 justify-between gap-10">
    {/* Text + First Card Column */}
    <div className="w-full lg:w-1/2 py-8">
      <h2 className="text-4xl md:text-[44px] md:ml-5 font-semibold font-kumbh text-gray-900 mb-2 break-words">
        Featured Solutions
      </h2>

      <p className="text-gray-600 md:ml-6 font-inter text-base mt-6 sm:text-lg max-w-2xl break-words">
        Opinionated, production-ready solutions that turn <br /> AI, Cloud & Data into outcomes fast.
      </p>

      {solutions.slice(0, 1).map((item, i) => (
        <div
          key={i}
          className={`p-10 max-w-96 w-full h-56 md:ml-6 mx-auto mt-14 shadow-sm transition hover:shadow-md ${
            item.type === "bg"
              ? "bg-gray-100"
              : "border border-red-500 bg-white"
          }`}
        >
          <img src={item.icon} alt={item.title} className="h-10 w-10 mb-4 object-contain" />
          <h3 className="font-semibold font-kumbh text-base sm:text-lg text-gray-900 mb-2 break-words">
            {item.title}
          </h3>
          <p className="text-gray-600 font-inter text-sm leading-relaxed break-words">{item.desc}</p>
        </div>
      ))}
    </div>

    {/* Image Column */}
    <div className="w-96 max-w-full lg:w-1/2 flex justify-center">
      <img
        src="/Solution.svg"
        alt="Solution Graphic"
        className="w-full h-auto max-h-[487px] max-w-md sm:max-w-xl lg:max-w-2xl object-contain"
      />
    </div>
  </div>

  {/* Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 md:ml-6  mt-16 md:mt-1 px-4 sm:px-8">
    {solutions.slice(1).map((item, i) => (
      <div
        key={i}
        className={`p-10 max-w-96 w-full h-56 mx-auto shadow-sm transition hover:shadow-md ${
          item.type === "bg"
            ? "bg-gray-100"
            : "border border-red-500 bg-white"
        }`}
      >
        <img src={item.icon} alt={item.title} className="h-10 w-10 mb-4 object-contain" />
        <h3 className="font-medium text-base sm:text-lg text-gray-900 mb-2 break-words">
          {item.title}
        </h3>
        <p className="text-gray-600 font-normal text-sm leading-relaxed break-words">{item.desc}</p>
      </div>
    ))}

    {/* CTA Card */}
    <div className="bg-red-600 hover:bg-gray-600 text-white whitespace-nowrap flex flex-col p-10 max-w-96 w-full h-56 mx-auto justify-between sm:col-span-2 lg:col-span-1">
      <h3 className="font-semibold font-inter mt-8 items-center sm:text-2xl mb-2 break-words">
        Talk to an Expert<br/>
        <button className="w-10 h-10 mt-3 flex items-center rounded-full justify-center border border-white hover:bg-white hover:text-red-600 transition">
          <ArrowUpRight size={18} />
        </button>
      </h3>
    </div>
  </div>
</section>



      {/* Final CTA Section */}
    
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

export default Home;
