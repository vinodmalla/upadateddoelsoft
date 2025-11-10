import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight, FaStar } from "react-icons/fa";

function ClientReviews() {
  // ==== Review Data ====
  const reviews = [
    {
      name: "Davit Millar",
      role: "CEO, PParkview Int, Ltd",
      rating: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit nisl, tincidunt commodo sit. Et, purus lectus odio cursus placerat leo, non etiam. Neque at leo risus orci.",
    },
    {
      name: "Jessica Stone",
      role: "CTO, TechSphere",
      rating: 5,
      text: "Doelsoft exceeded our expectations! Their recruitment process is seamless and the team is extremely professional and supportive.",
    },
    {
      name: "Robert Lane",
      role: "HR Head, FinTrak",
      rating: 5,
      text: "Amazing experience working with Doelsoft! They delivered high-quality candidates and handled everything with precision.",
    },
  ];

  const [index, setIndex] = useState(0);
  const current = reviews[index];

  // Render star ratings dynamically
  const renderStars = (count) =>
    Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`${
          i < count ? "text-yellow-400" : "text-gray-300"
        } transition-all duration-300`}
      />
    ));

  return (
    <section className="w-full bg-white py-16 flex flex-col  overflow-hidden">
      {/* ====== Section Titles ====== */}
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 font-kumbh text-center">
        Client Reviews
      </h2>
      <p className="text-xl md:text-3xl text-black mt-4 lg:ml-28  font-inter font-medium text-center lg:text-start">
        What People Say About Us
      </p>

      {/* ====== Review + Image Section ====== */}
      <div className="mt-14 flex flex-col  lg:flex-row items-center justify-center gap-10 px-4 sm:px-8 lg:px-28 w-full">
        {/* ===== Left: Review Card ===== */}
        <div className="relative bg-white shadow-[0px_10px_30px_rgba(0,0,0,0.05)] rounded-lg p-6 sm:p-8 w-full max-w-2xl z-50">
          {/* Name + Role + Stars */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
            <div className="bg-white shadow-md p-6 sm:p-12 w-full text-center sm:text-left">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 font-inter">
                {current.name}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mt-1 font-inter">
                {current.role}
              </p>
            </div>
            <div className="flex justify-center sm:justify-end mt-3 sm:mt-0">
              {renderStars(current.rating)}
            </div>
          </div>

          {/* Review Text */}
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-6 font-inter text-center sm:text-left">
            “{current.text}”
          </p>
        </div>

        {/* ===== Right: Image + Quote ===== */}
        <div className="relative flex justify-center items-center mt-8 lg:mt-0">
          {/* Client Image */}
          <img
            src="/Solution2.svg"
            alt="Client"
            className="relative z-10 w-[240px] sm:w-[280px] md:w-[320px] lg:w-[555px] h-auto md:ml-0 lg:ml-[-150px]"
          />

          {/* Quote Icon */}
          <div className="absolute right-6 -top-6 sm:-top-6 md:-top-8 lg:-top-14 sm:right-6 md:right-8 lg:right-32 bg-black w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 rounded-tl-[62.5px] rounded-tr-[62.5px] rounded-br-[62.5px] flex items-center justify-center z-20">
            <FaQuoteRight className="text-red-500 text-xl sm:text-2xl md:text-3xl" />
          </div>
        </div>
      </div>

      {/* ===== Navigation Buttons ===== */}
      <div className="flex justify-center gap-4 mt-10 md:mt-3 lg:-ml-96">
        <button
          onClick={() =>
            setIndex((prev) => (prev > 0 ? prev - 1 : reviews.length - 1))
          }
          className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => setIndex((prev) => (prev + 1) % reviews.length)}
          className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}

export default ClientReviews;
