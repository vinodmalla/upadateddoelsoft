import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Accessibility() {
  const items = [
    {
      num: "01",
      title: "Empowering All Users:",
      desc: "Equitable access for people with visual, auditory, cognitive, and motor disabilities validated by real users with diverse abilities.",
    },
    {
      num: "02",
      title: "Inclusive Compliance:",
      desc: "AI-powered scans detect patterns at scale, while human testers and real users validate usability with assistive tech like JAWS, NVDA, VoiceOver, and TalkBack.",
    },
    {
      num: "03",
      title: "Proactive Equity:",
      desc: "AI predicts potential barriers; real users flag issues before launch.",
    },
    {
      num: "04",
      title: "Cost–Efficient & Scalable:",
      desc: "Automation handles repetitive tasks; humans and real users focus on usability, empathy, and real-world validation.",
    },
    {
      num: "05",
      title: "Future–Ready Standards:",
      desc: "Stay ahead with WCAG 2.2, upcoming WCAG 3.0, and emerging best practices shaped by disability-led advocacy and user feedback.",
    },
  ];

  const whyChoose = [
    {
      title: "Inclusion-First Philosophy:",
      desc: "Equity and accessibility shaped by real disability experiences.",
    },
    {
      title: "AI + Human + Real-User Synergy:",
      desc: "Combines speed, scale, and authentic insight.",
    },
    {
      title: "Certified Expertise:",
      desc: "DHS Trusted Tester, AODA, WCAG, Section 508, EN 301 549.",
    },
    {
      title: "Real-User Validation:",
      desc: "Inclusive testing ensures authenticity and impact.",
    },
    {
      title: "Tailor-Made Engagement Models:",
      desc: "Aligned with your business needs.",
    },
    {
      title: "Scalable & Future-Proof:",
      desc: "Solutions evolve with standards and user feedback.",
    },
    {
      title: "Proven Results:",
      desc: "Transforming accessibility challenges into inclusive growth opportunities.",
    },
  ];
  const sections = [
  {
    title: "1. Comprehensive Accessibility Audits",
    description:
      "We combine AI-driven scans, manual expert testing, and real-user validation to uncover digital barriers:",
    points: [
      "Automated scans flag missing alt text, low contrast, broken headings, inaccessible forms.",
      "Manual keyboard testing for logical focus order, skip navigation, and role/state validation.",
      "Real-world testing with assistive technologies and diverse disability perspectives.",
      "Detailed reports with issue severity, user impact analysis, and prioritized recommendations."
    ],
     image: "/MultimediaAccessibility.svg",
    alt: "Accessibility audit in progress",
  },
  {
    title: "2. Smart Remediation & Inclusive Development",
    description:
      "We don’t just report issues—we help you fix them, learn from them, and build better:",
    points: [
      "AI-powered code suggestions for faster remediation.",
      "Collaboration with dev teams to ensure semantic HTML, ARIA best practices, and usable design fixes.",
      "Human and real-user verification ensures AI suggestions are accurate and inclusive.",
      "Ongoing consulting with accessibility experts and people with disabilities."
    ],
    image: "/devcollaboration.svg",
    alt: "Developers collaborating on accessibility improvements",
  },
  {
    title: "3. Mobile Accessibility",
    description:
      "Mobile is essential for modern digital experiences. Doelsoft ensures apps and mobile sites are fully accessible and inclusive:",
    points: [
      "Cross-Platform Testing: iOS, Android, tablets, hybrid apps.",
      "Assistive Technology Validation: VoiceOver, TalkBack, magnifiers, switch access.",
      "Touch Target & Gesture Analysis: Detect small buttons, inaccessible gestures, swipe issues.",
      "Keyboard & Voice Navigation: Mobile apps operable without touch.",
      "Responsive Design Review: Accessible layouts, font resizing, contrast handling."
    ],
    image: "DocumentAccessibility.svg",
    alt: "Mobile accessibility testing tools",
  },
  {
    title: "4. Inclusive Document Accessibility",
    description:
      "Make all content from policies to textbooks equally accessible and user-friendly:",
    points: [
      "AI-assisted remediation for PDFs, Word, PowerPoint, Excel.",
      "Structuring with headings, lists, tables, image descriptions, metadata validated by real users.",
      "Compliance with ADA, WCAG, Section 508, PDF/UA.",
      "Born-accessible workflows to prevent future remediation.",
      "High-volume document support with feedback from disability communities."
    ],
    
     image: "/mobileaccessibility.svg",
    alt: " Inclusive Document Accessibility",
  },
  {
    title: "5. Multimedia Accessibility",
    description:
      "Ensure audio, video, and streaming content is inclusive and engaging:",
    points: [
      "AI-generated captions & transcripts, verified by human experts and real users.",
      "Audio descriptions for visual elements, tailored with feedback from people with visual impairments.",
      "Accessible media players with keyboard navigation, captions, and sign-language support.",
      "Support for podcasts, webinars, training videos, e-learning content, OTT platforms—tested by diverse users."
    ],
   
    image: "/audit.svg",
    alt: "Multimedia Accessibility",
  },
  {
    title: "6.Training & Accessibility Consulting",
    description:
      "Empower your teams to own accessibility from within:",
    points: [
      "Custom workshops for designers, developers, QA testers, and content creators—facilitated by experts and people with disabilities.",
      "AI-enhanced toolkits and checklists for Agile & DevOps workflows.",
      "Inclusive design frameworks informed by real-user stories.",
      "Governance models to ensure long-term accessibility maturity.",
    ],
    image: "/ccessibilityConsulting.svg",
    alt: " Training & Accessibility Consulting",
  },
  {
    title: "7.Continuous Monitoring & AI-Powered Tracking",
    description:
      "Accessibility is an ongoing partnership:",
    points: [
      "AI monitoring tools for real-time barrier detection.",
      "Predictive analytics to prevent accessibility regressions.",
      "Scheduled re-audits combining AI + human + real-user validation.",
      "Health dashboards tracking compliance, progress, and user satisfaction metrics."
    ],
    image: "/AIPoweredTracking.svg",
    alt: "Continuous Monitoring & AI-Powered Trackingty",
  },
  
];

  return (
    <div className="relative w-full mx-auto font-kumbh bg-white mt-8 overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[550px] flex flex-col md:mt-20 md:flex-row items-center justify-between overflow-hidden py-10 px-6 md:px-16 lg:px-28"
        style={{
          backgroundImage: "url('/worldmap.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 flex-1 flex flex-col space-y-6 items-start justify-center text-center md:text-left">
          <h2 className="text-3xl mt-6 md:mt-0 sm:text-4xl md:text-6xl lg:text-[71.5px] font-semibold text-[#EF0E0E] leading-snug mb-6">
            Doelsoft <br />
            <span className="block mt-4">Digital Accessibility</span>
          </h2>
         <button className=" px-5 py-4 md:px-7 border border-black text-black hover:bg-gray-200 transition-all duration-200">
      Consult With Us <span className="ml-2">↗</span>
    </button>
        </div>
        <div className="mt-10 md:mt-16 md:flex-1 flex justify-center md:justify-end relative z-0">
          <img
            src="/Digitalaccessibility.svg"
            alt="Team"
            className="w-72 sm:w-80 md:w-[420px] lg:w-[500px] h-auto object-contain"
          />
        </div>
      </section>

      {/* Intro Section */}
      <section className="w-full bg-[#F4F6FB] flex items-center py-20 px-6 md:px-16 lg:px-28 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl justify-start whitespace-nowrap md:text-4xl md:-ml-1 font-semibold font-kumbh leading-[57.20px] text-black">
              Inclusive Digital Accessibility Solutions <br/> Powered by Human Expertise & AI

            </h2>
            <br/>
            <p className="text-black justify-start text-lg md:-ml-1 sm:text-xl  font-inter font-normal leading-8 ">
              Fostering Equitable, Real-World Digital Experiences for All
            </p>
            <br/>
            <p className="text-black justify-start text-lg md:-ml-1 sm:text-xl  font-inter font-normal leading-8 ">
              At Doelsoft, we believe accessibility is more than compliance it’s about <br/> inclusion, equity, and empowerment. Our mission is to bridge the digital divide <br/>by combining <b>cutting-edge AI technology with deep human expertise</b> <br/> including people with lived experiences of disability, professional accessibility <br/>  testers, and real users from diverse backgrounds.
            </p>
            <br/>
            <p className="text-black justify-start text-lg md:-ml-1 sm:text-xl  font-inter font-normal leading-8 ">
              Our holistic, collaborative approach ensures your websites, mobile apps,<br/> documents, multimedia, and enterprise systems are not only fully accessible <br/> and compliant with global standards<b> (WCAG 2.1/2.2, ADA, Section 508, AODA, EN 301 549, EAA, PDF/UA),</b>  but also optimized for real-world usability tested,<br/> validated, and shaped by the people who rely on these tools every day.
            </p>
            <br/>
            <p className="text-black justify-start text-lg md:-ml-1 sm:text-xl  font-inter font-normal leading-8 ">
             
We go beyond fixing issues. We help you future-proof your digital platforms,<br/> build inclusive workflows, and unlock new opportunities by embracing the <br/> needs of the <b> 1+ billion people with disabilities worldwide. Our work is co-<br/>created with disability communities,</b>  ensuring that our solutions are grounded <br/> in real experiences, not just theory.

            </p>
          </div>
          <div>
            <img
              src="/introright.svg"
              alt="Accessibility illustration"
              className="w-full h-auto object-contain rounded"
            />
          </div>
        </div>
      </section>

      {/* AI + Human + Real-User Section */}
      <section className="w-full bg-white py-16 px-6 md:px-16 lg:px-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col items-center md:mb-20 justify-center">
            <img
              src="/Accessibility_target.svg"
              alt="Accessibility Target Illustration"
              className="w-72 sm:w-80 md:w-[300px]  lg:w-[360px] z-50 mb-[-62px] h-auto object-contain"
            />
            <div className="bg-red-600 text-white text-center p-10 max-w-md mt-6">
              <p className="text-sm sm:text-base leading-relaxed">
                In short: <br />
                <span className="block mt-2">
                  AI brings speed, humans bring empathy, real users bring authenticity — together,
                  they deliver genuine inclusion.
                </span>
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl justify-start font-semibold text-black font-kumbh leading-[57.20px] mb-4">
              Why Accessibility + AI + Human + Real-User Expertise?
            </h2>
            <p className="text-black text-lg sm:text-xl mb-8 font-normal font-inter leading-8">
             Accessibility is evolving rapidly. Traditional manual testing is thorough but slow; pure automation lacks empathy and insight. Our AI + Human + Real-User Hybrid Model bridges the gap:
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
          </div>
        </div>
      </section>
      <section className="px-6 py-12 md:px-16 lg:px-24 bg-white text-gray-800 space-y-20">
        <h1 className="text-black text-center text-2xl font-semibold font-kumbh  sm:text-3xl md:text-4xl leading-[57.20px]">🛠️ Comprehensive Accessibility & Inclusion Services</h1>
      {sections.map((section, index) => {
        const isEven = index % 2 === 1;
        return (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-10 md:ml-4 items-center ${
              !isEven ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image Section */}
            <div
              className={`flex justify-center ${
                !isEven ? "md:order-2" : "md:order-1"
              }`}
            >
              <img
                src={section.image}
                alt={section.alt || section.title}
                className="  w-64 h-64 object-cover"
              />
            </div>

            {/* Text Section */}
            <div
              className={`${
                !isEven ? "md:order-1" : "md:order-2"
              } space-y-4`}
            >
              <h3 className="text-xl md:text-2xl font-bold">{section.title}</h3>
              <p>{section.description}</p>
              <ul className="list-none space-y-3">
                {section.points.map((point, i) => (
                  <div className="flex items-start space-x-3">
                    <img src="/logo4.svg" alt="logo" className="h-6 w-6 mt-1" />
                       <li key={i}> {point}</li>
                  </div>
               
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </section>
      
        <section className="bg-[#F4F6FB] py-10">
        <div className="px-6 sm:px-12 md:ml-6 md:px-20 text-center md:text-left space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold">🏢 Industries We Serve</h1>
          <p className="text-gray-600 md:ml-2">Doelsoft delivers accessibility across industries—co-created and validated by real users:</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:ml-8 py-10 px-6 sm:px-12 md:px-20 gap-6">
          {[{src:"/ecommerce.svg", title:"E-commerce & Retail" ,desc:"Accessible shopping carts, product images, checkout flows"},
                    {src:"/health_care.svg",title:"Healthcare & Telemedicine",desc:"Patient portals, telehealth apps"},
                    {src:"/finance.svg",title:"Banking & Finance",desc:"Mobile apps, online banking, disclosures, ATMs"},
                    {src:"/education.svg",title:"Education & E-Learning",desc:"LMS platforms, eBooks, assessments"},
                    {src:"/travel.svg",title:"Hospitality & Travel",desc:"Booking engines, travel apps"},
                    {src:"/media.svg",title:"Publishing & Media",desc:"Digital books, journals, interactive media"},
                    {src:"/realestate.svg",title:"Telecom & IT Services ",desc:"Enterprise apps, analytics, and cloud solutions for large-scale deployments."},
                    {src:"/logistics.svg",title:"Government & Public Services",desc:"Citizen-focused, standards-compliant platforms"},
                    {src:"/health_care.svg",title:"Corporate & Enterprise",desc:"Intranets, CRMs, employee portals"},
                    {src:"/finance.svg",title:"Non-Profits & NGOs",desc:"Outreach platforms, donation systems"},
                    {src:"/education.svg",title:"Entertainment & Streaming",desc:"OTT, games, live events with captions & AD"},
                    {src:"/travel.svg",title:"Libraries & Museums",desc:"Digital archives, catalogs, exhibits"},
                    {src:"/media.svg",title:"Insurance & Legal Services",desc:"Policies, forms, claims with accessibility review"},
                   


                ].map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 lg:grid-cols-2 items-center hover:shadow-md transition"
            >
              <img src={item.src} alt={item.title} className="w-full h-40 object-cover" />
              <div className="sm:pl-4 mt-4 sm:mt-0 border border-black h-40 p-4 sm:p-8 text-center sm:text-left">
                <h3 className="font-semibold text-lg text-zinc-950 capitalize leading-6">{item.title}</h3>
                <p className="text-zinc-950 text-base  font-normal font-inter leading-6 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Doelsoft Section */}
      <section className="w-full bg-[#F4F6FA] py-10 md:mb-[-46px]">
        <div className="flex flex-col md:flex-row justify-center items-center max-w-7xl mx-auto px-4 gap-10">
          <div className="flex-1 md:ml-8 lg:-ml-7">
            <h1 className="font-kumbh text-2xl md:text-4xl font-semibold justify-start text-black leading-[57.20px">🎯 Why Choose Doelsoft?</h1>
            <ul className="space-y-4 mt-6 ml-4">
              {whyChoose.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <img src="/logo4.svg" alt="" className="h-6 w-6 mt-1" />
                  <div className="text-black lg:whitespace-nowrap">
                    <span className="font-semibold font-inter leading-8">{item.title} </span>
                    {item.desc}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 md:ml-20 mt-10 md:mt-8 md:-mb-20">
            <img
              src="/Whychooseus.svg"
              alt="Why Choose Us"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      
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
                                  <h2 className="text-xl md:text-4xl font-manrope font-bold whitespace-nowrap leading-snug px-2">
                                     🚀 Accessibility + AI + Mobile + Inclusion = The Future of Digital
                                  </h2>
                        
                                  <p className="text-sm sm:text-[30px] font-inter text-gray-200 leading-relaxed px-2">
                                   Start Your Inclusion Journey Today: <br/> 
Request a free consultation or AI-driven accessibility scan validated by real users.
                                  </p>
                        
                                  <button className="flex items-center gap-2 bg-red-600 hover:bg-gray-600 text-white font-medium px-5 sm:px-8 py-3 sm:py-6 text-sm sm:text-xl shadow-lg transition-all duration-300 ease-in-out">
                                    Talk to an Expert{" "}
                                    <ArrowUpRight className="border border-white rounded-full p-1" size={24} />
                                  </button>
                                </div>
                              </section>

                    
    </div>
  );
}