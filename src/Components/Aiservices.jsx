import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from "lucide-react";

function Aiservices() {
   const items = [
    {
      num: "01",
      title: "Machine Learning & Deep Learning",
      desc: "End-to-end model development—regression, clustering, neural networks, transformers designed to learn and self-improve.",
    },
    {
      num: "02",
      title: "Natural Language Processing (NLP)",
      desc: "Multilingual chatbots, text analytics, summarization, sentiment analysis systems that truly understand human language.",
    },
    {
      num: "03",
      title: "Computer Vision",
      desc: "AI that can “see” and interpret visual data for quality control, security, biometrics, medical imaging, and automated inspections.",
    },
    {
      num: "04",
      title: "Predictive & Prescriptive Analytics",
      desc: "Turning raw data into actionable insights: forecast trends, identify opportunities, mitigate risks, and guide smart decision-making.",
    },
    {
      num: "05",
      title: "Generative AI & LLM Integration",
      desc: "Build intelligent content engines, internal knowledge assistants, code copilots, and automation tools powered by advanced models (GPT, LLaMA, custom fine-tuned models).",
    },
     {
      num: "06",
      title: "Responsible & Ethical AI",
      desc: "Bias mitigation, explainable AI, privacy-first architectures, and compliance with global regulations.",
    },
  ];
  const features = [
    {
      icon: "/Ai1.svg",
      title: "Human-Centered AI Design",
      description:
        "Intuitive, accessible, and user-friendly AI solutions that enhance—not replace—human expertise.",
    },
    {
      icon: "/Ai2.svg",
      title: "Privacy & Security First",
      description:
        "We enforce strict data governance, encryption, audit logs, and transparent AI models to protect your information.",
    },
     {
      icon: "/Ai3.svg",
      title: "Agile Collaboration & Transparent Delivery",
      description:"Regular sprint demos, rapid prototyping, and continuous communication keep you fully in control.",
    },
    {
      icon: "/Ai4.svg",
      title: "Proven Industry Expertise",
      description: "Driving innovation across Fintech, Healthcare, Retail & E-commerce, and Logistics with smart automation, analytics, and optimization.",
    },
    {
      icon: "/Ai5.svg",
      title: "Scalable, Future-Ready Architecture",
      description:
        "API-first, containerized, cloud-native solutions that integrate effortlessly with your digital ecosystem.",
    },
   
   
  ];



  return (
    <div className="relative w-full mx-auto font-kumbh bg-white mt-10 overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[550px] flex flex-col md:mt-8 md:flex-row items-center justify-between overflow-hidden py-10 px-6 md:px-16 lg:px-28"
        style={{
          backgroundImage: "url('/worldmap.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 flex-1 flex flex-col space-y-6 items-start justify-center text-center md:text-left">
          <h2 className=" mt-6 md:mt-0 text-3xl sm:text-4xl md:text-5xl lg:text-[71.5px] font-semibold text-[#EF0E0E] leading-snug mb-6">
           AI Services   
            
          </h2>
        <Link to="/contact"><button className=" px-5 py-4 md:px-7 border border-black text-black hover:bg-gray-200 transition-all duration-200">
      Consult With Us <span className="ml-2">↗</span>
    </button></Link>
        </div>
        <div className="mt-10 md:mt-14 md:flex-1 flex justify-center md:justify-end relative z-0">
          <img
            src="/AI_Service.svg"
            alt="Team"
            className="w-72 sm:w-80 md:w-[420px] lg:w-[500px] h-auto object-contain"
          />
        </div>
      </section>

      {/* Intro Section */}
      <section className="w-full bg-[#F4F6FB] flex items-center py-20 px-6 md:px-16 lg:px-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-8 items-center xl:items-start">
          <div className="lg:col-span-2">
            <h2 className="text-xl sm:text-3xl justify-start whitespace-nowrap md:text-4xl md:-ml-1 font-semibold font-kumbh leading-[57.20px] text-black">
              Intelligent Solutions.<br/>Real Business Impact. Future Ready <br/>Enterprises.

            </h2>
            <br/>
            <p className="text-black justify-start text-lg md:-ml-1 sm:text-xl  font-inter font-normal leading-8 ">
              In a world where digital transformation is accelerating at unprecedented speed, Artificial Intelligence is no longer optional it’s mission-critical.

            </p>
            <br/>
            <p className="text-black justify-start text-lg md:-ml-1 sm:text-xl  font-inter font-normal leading-8 ">
              At Doelsoft IT Services, we don’t simply deploy AI tools. We infuse intelligence into <br/> the heart of your business to enhance efficiency, spark innovation, and unlock <br/> scalable growth.

            </p>
            <br/>
            <p className="text-black justify-start text-lg md:-ml-1 sm:text-xl  font-inter font-normal leading-8 ">
              Whether you want to automate workflows, understand customer behavior,<br/> strengthen decision-making, or build futuristic products, our AI services are <br/> engineered to evolve with your vision.

            </p>
            <br/>
           
          </div>
          <div className='xl:mt-32'>
            <img
              src="/AI_Service2.svg"
              alt="Accessibility illustration"
              className="w-full h-auto object-contain rounded"
            />
          </div>
        </div>
      </section>

      {/* AI + Human + Real-User Section */}
      <section className="w-full bg-white py-16 px-6 md:px-16 lg:px-28">
        <div className="flex flex-col xl:flex-row gap-10 ">
          <div className="flex flex-col  xl:-ml-20 items-center xl:items-start ">
            <img
              src="/AI_Service3.svg"
              alt="Accessibility Target Illustration"
              className="w-72 sm:w-80 md:w-[300px] lg:[320px] xl:w-[360px]  h-auto "
            />
          </div>
          <div className='xl:-ml-28'>
            <h2 className="text-2xl sm:text-3xl  lg:text-4xl justify-start font-semibold text-black font-kumbh leading-[57.20px] mb-4">
              Our AI Expertise: <br/> Turning Possibilities Into Powerful Solutions
            </h2>
            <p className="text-black text-base sm:text-lg mb-8 font-normal font-inter leading-8">
             Doelsoft’s AI practice is built on deep technical mastery, robust research, and a strong <br/> understanding of real-world business challenges. Our cross-functional team blends data <br/> science, engineering, cloud architecture, and domain expertise to develop solutions that <br/> are impactful, responsible, and user-focused.
            </p>
            <ul className="space-y-5">
              {items.map((item) => (
                <li key={item.num} className="flex items-start space-x-4">
                  <div className="bg-red-600 text-white font-bold text-lg sm:text-xl px-6 py-6">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="font-semibold text-black text-xl font-kumbh sm:text-xl leading-8">
                      {item.title}
                    </h3>
                    <p className="text-black text-sm sm:text-base leading-6 font-inter font-normal mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-black text-lg sm:text-2xl mt-8 font-medium font-inter leading-8">We work with TensorFlow, PyTorch, Hugging Face, LangChain, and cloud-native AI services from AWS, Azure, and Google Cloud.</p>
          </div>
        </div>
      </section>
      
      
        <section className="bg-[#F4F6FB] py-10">
        <div className="px-6 sm:px-12 md:ml-6 md:px-20 text-center md:text-left space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold">Comprehensive AI Services for Modern Enterprises</h1>
          <p className="text-gray-600 md:ml-2">Doelsoft delivers embedded technology solutions across multiple sectors, enabling smart, connected, and efficient systems:</p>
        </div>
     <div className="grid grid-cols-1 md:ml-8 py-10 px-6 sm:px-12 md:px-20 gap-6">
  {[
    {src:"/a1.svg", title:"1. AI Strategy & Digital Transformation Consulting", desc:"Before implementation, we assess use cases, data maturity, risks, KPIs, and ROI. Our structured roadmap aligns AI investments with real business outcomes—minimizing uncertainty and maximizing impact."},
    {src:"/a2.svg", title:"2. Custom AI & Machine Learning Development", desc:"We architect AI models tailored to your business workflows—data prep, feature engineering, model training, validation, optimization, and seamless integration with ERP/CRM/custom platforms."},
    {src:"/a3.svg", title:"3. Intelligent Process Automation (IPA)", desc:"Go beyond basic RPA. Our cognitive automation processes unstructured data—emails, invoices, scanned forms—reducing manual work by up to 80%."},
    {src:"/a4.svg", title:"4. Conversational AI & Enterprise Chatbots", desc:"Context-aware, multilingual, voice-enabled chatbots for customer support, HR, IT, and internal knowledge management."},
    {src:"/a5.svg", title:"5. Predictive Analytics & Decision Intelligence", desc:"Real-time insights for retail, banking, healthcare, logistics, and manufacturing—turning “data overload” into “data advantage.”"},
    {src:"/a6.svg", title:"6. Computer Vision & Visual Intelligence", desc:"AI solutions for defect detection, surveillance, access control, retail counters, smart warehouses, and medical imaging with on-device (edge AI) deployment."},
    {src:"/a7.svg", title:"7. Personalization & Recommendation Engines ", desc:"Deliver personalized products, content, and service recommendations that elevate customer experience and maximize lifetime value."},
    {src:"/a8.svg", title:"8. MLOps, Model Monitoring & AI Lifecycle Management", desc:"CI/CD pipelines for AI—monitor drift, manage versions, automate retraining, and maintain fairness, accuracy, and transparency."},
    {src:"/a9.svg", title:"9. Generative AI & Custom LLM Applications", desc:"Private AI assistants trained on internal documents Automated reporting and documentation Secure on-premise or private-cloud deployment. Ideal for enterprises that need privacy, control, and auditability."},
  ].map((item, idx) => (
    <div
      key={idx}
      className="grid grid-cols-1 lg:grid-cols-2 items-stretch bg-white shadow-sm hover:shadow-md transition overflow-hidden"
    >
      <img
        src={item.src}
        alt={item.title}
        className="w-full h-auto xl:w-[265px] xl:h-[164px] object-cover"
      />
      <div className="p-6 sm:p-8 flex flex-col border border-black md:border-t border-r border-b md:border-black

                      xl:ml-[-407px]  
                      ml-0              
                      ">
        <h3 className="font-semibold text-lg text-zinc-950 leading-6">{item.title}</h3>
        <p className="text-zinc-900 text-base leading-6 mt-2">{item.desc}</p>
      </div>
    </div>
  ))}
</div>


      </section>
       <section className="bg-[#F4F6FB] py-20 px-6 sm:px-10 lg:px-20 font-sans" style={{marginBottom:"-44px"}}>
        <div className="max-w-7xl mx-auto flex flex-col-reverse xl:flex-row items-center gap-10">
          <div className="flex-1 space-y-6">
            <h1 className="text-2xl sm:text-3xl md:ml-[-35px] md:text-4xl  justify-start md:whitespace-nowrap font-kumbh font-semibold mb-8 leading-[57.20px]">
              💡 Why Choose Doelsoft AI Services?
            </h1>

            <div className="space-y-6 md:-ml-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-start gap-4 p-4"
                >
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center border border-white bg-white mx-auto sm:mx-0">
                    <img
                      loading="lazy"
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

          <div className="flex-1 flex justify-center">
            <img
              loading="lazy"
              src="/iotp.svg"
              alt="IoT professional illustration"
              className="w-full max-w-sm sm:max-w-md h-full md:max-w-sm object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Doelsoft Section */}
     
            <section className="relative w-full bg-cover bg-center text-center py-16 md:h-[568px] sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ backgroundImage: "url('/Background2.svg')",marginTop:"1px" } } > {/* Decorative Vectors */}
                          <img src="/Vectors.svg" alt="vector" className="absolute left-6 sm:left-14 top-8 sm:top-10 h-20 sm:h-28 md:h-32 w-20 sm:w-28 md:w-32 object-contain opacity-70 z-30" /> 
                          <img src="/left.svg" alt="left" className="absolute left-10 sm:left-20 bottom-10 sm:top-70 w-3 sm:w-4 object-contain opacity-70 z-30" /> 
                          <img src="/right.svg" alt="right" className="absolute right-10 sm:right-40 lg:right-72 top-6 sm:top-12 w-10 sm:w-16 md:w-20 object-contain opacity-70 z-30" /> {/* Dark overlay */}
                           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/80 to-black/90"></div> {/* Main Content */} 
                           <div className="relative max-w-3xl mx-auto md:mt-8 text-white z-10 flex flex-col items-center justify-center space-y-5 sm:space-y-7 md:space-y-8"> 
                             <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-[56px] font-manrope font-bold whitespace-nowrap leading-snug px-2">Start Your AI Journey With Confidence </h2>
                              <p className="text-lg lg:text-[28px] xl:text-[30px] font-inter text-gray-200 leading-relaxed px-2"> At Doelsoft IT Services, we help you build intelligent systems that are ethical, explainable, efficient, and transformative. </p>
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

export default Aiservices
