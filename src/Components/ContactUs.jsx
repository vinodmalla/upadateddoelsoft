import React, { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaLocationDot } from "react-icons/fa6";

import Map from "./Map";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    source: "",
    message: "",
  });

 const location = {
    name: "DoelSoft",
    url: "https://www.google.com/maps/dir//Manjeera+Trinity+Corporate,+eSeva+Ln,+K+P+H+B+Phase+3,+Kukatpally,+Hyderabad,+Telangana+500072/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3bcb918dab342375:0x180a04af0c47f594?sa=X&ved=1t:57443&ictx=111",
    style: "left-[70%] md:left-[60%] top-[42%] md:top-[46%]",
  }; 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-full min-h-screen overflow-hidden font-kumbh mt-8 flex flex-col space-y-6">
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[550px] flex flex-col md:flex-row md:mt-8 items-center justify-between overflow-hidden py-10 px-6 md:px-16 lg:px-28"
        style={{
          backgroundImage: "url('/worldmap.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left Content */}
        <div className="relative z-10 flex-1 space-y-10 flex flex-col items-center md:items-start justify-center text-center md:text-left">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[71.5px] font-semibold leading-[87.5px] font-['kumbh_Sans'] text-[#EF0E0E] mb-8 md:-mt-4">
            Let's Build the <br /> <span>Future Together</span>
          </h2>
        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-14 flex justify-center md:justify-end relative z-0">
          <img
            src="/Contact.svg"
            alt="contact"
            className="w-64 sm:w-80 md:w-[420px] lg:w-[500px] h-auto"
          />
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-[#F4F6FB] py-16 px-6 sm:px-10 lg:px-20 " style={{marginBottom:"-28px"}}>
        <div className="max-w-7xl mx-auto md:ml-7 flex flex-col lg:flex-row items-start gap-12">
          {/* Form */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-kumbh sm:text-[44px] font-semibold mb-4">
              Get in <span className="text-red-600">Touch</span>
            </h2>
            <p className="text-black mb-8 text-sm sm:text-base">
              Share your goals across AI, Cloud & Data—we’ll review and
              recommend next steps within one business day.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 w-full max-w-full"
            >
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={formData.name}
                onChange={handleChange}
                className="border border-black bg-transparent p-3 focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="border border-black bg-transparent p-3 focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number *"
                value={formData.phone}
                onChange={handleChange}
                className="border border-black bg-transparent p-3 focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
                required
              />
              <select
                name="source"
                value={formData.source}
                onChange={handleChange}
                className="border border-black bg-transparent p-3 focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
              >
                <option value="">How did you find us?</option>
                <option value="google">Google</option>
                <option value="linkedin">LinkedIn</option>
                <option value="friend">Friend/Referral</option>
                <option value="other">Other</option>
              </select>
              <textarea
                name="message"
                placeholder="Tip Us."
                value={formData.message}
                onChange={handleChange}
                className="border border-black bg-transparent p-3 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
              ></textarea>

              <button
                type="submit"
                className="bg-red-600 text-white font-semibold py-3 hover:bg-red-700 transition"
              >
                SEND
              </button>
            </form>
          </div>

          {/* Map & Contact Info */}
          {/* Map & Contact Info */}
<div className="w-full lg:w-1/2 relative  flex flex-col items-center overflow-visible z-10">
  <div className="flex flex-col gap-4 sm:gap-6 xl:ml-56 mt-1 w-full">
    <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
      <MapPin className="text-gray-600 w-8 h-8 mt-1 shrink-0" />
      <div>
        <h3 className="text-red-600 font-semibold">Address</h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
        Office No:#104, first floor, manjeera trinity corporate, <br />
        ,eSeva Ln, K P H B Phase 3, Kukatpally, Hyderabad, Telangana 500072
        </p>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 flex-wrap">
      <div className="flex items-start gap-3 sm:gap-4">
        <Phone className="text-gray-600 w-6 h-6 mt-1 shrink-0" />
        <div>
          <h3 className="text-red-600 font-semibold">Phone</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
           08044643155 <br />+1 (945) 382-1615
          </p>
        </div>
      </div>

      <div className="flex items-start gap-3 sm:gap-4">
        <Mail className="text-gray-600 w-6 h-6 mt-1 shrink-0" />
        <div>
          <h3 className="text-red-600 font-semibold">Email</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            info@doelsoft.com
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Map Container */}
  {/* === MAP SECTION FIXED === */}
<Map />
</div>

        </div>
      </section>

      {/* Location Section */}
    <section className="relative w-full bg-white flex justify-center items-center py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
  <div className="relative w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%] max-w-[1400px]">
    
    {/* Background Map */}
    <img
      src="/location6.png"
      alt="World Map"
      className="w-full h-auto object-contain mx-auto select-none"
    />

    {/* Example Location Pin (Enable when needed) */}
    
    <button
      onClick={() => window.open(location.url, "_blank")}
      className="absolute top-[40%] left-[60%] w-5 h-5 sm:w-6 sm:h-6 bg-red-600 rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform"
      title="Doelsoft"
    >
    <FaLocationDot  size={40}/>
    </button>
    
  </div>
</section>

    </div>
  );
}

export default ContactUs;
