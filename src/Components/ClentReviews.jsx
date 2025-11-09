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
      image: "/Solution2.svg", // ✅ Make sure this image is in public folder
    },
    {
      name: "Jessica Stone",
      role: "CTO, TechSphere",
      rating: 5,
      text: "Doelsoft exceeded our expectations! Their recruitment process is seamless and the team is extremely professional and supportive.",
      image: "/client2.svg",
    },
    {
      name: "Robert Lane",
      role: "HR Head, FinTrak",
      rating: 5,
      text: "Amazing experience working with Doelsoft! They delivered high-quality candidates and handled everything with precision.",
      image: "/client3.svg",
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
    <section className="w-full bg-white py-16 flex flex-col items-center overflow-hidden">
      {/* ====== Section Titles ====== */}
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 font-kumbh text-center">
        Client Reviews
      </h2>
      <p className="text-lg md:text-xl text-gray-600 mt-4 font-inter text-center">
        What People Say About Us
      </p>

      {/* ====== Review + Image Section ====== */}
      <div className="mt-14 flex flex-col lg:flex-row items-center justify-center gap-10 px-4 sm:px-8 lg:px-20 w-full">
        {/* ===== Left: Review Card ===== */}
        <div className="relative bg-white shadow-[0px_10px_30px_rgba(0,0,0,0.05)] rounded-lg p-8 w-full max-w-md z-10">
          {/* Name + Role + Stars */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 font-inter">
                {current.name}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mt-1 font-inter">
                {current.role}
              </p>
            </div>
            <div className="flex mt-3 sm:mt-0">{renderStars(current.rating)}</div>
          </div>

          {/* Review Text */}
          <p className="text-gray-700 text-base leading-relaxed mt-6 font-inter">
            “{current.text}”
          </p>
        </div>

        {/* ===== Right: Image + Blue Shape + Quote ===== */}
        <div className="relative flex justify-center items-center">
          {/* Blue Background Shape */}
          

          {/* Client Image */}
          <img
            src={current.image}
            alt={current.name}
            className="relative z-10 w-[280px] sm:w-full lg:w-full h-full "
          />

          {/* Quote Icon */}
          <div className="absolute top-4 right-8 sm:top-6 sm:right-2 bg-black w-12 h-12 rounded-r-full flex items-center justify-center z-20">
            <FaQuoteRight className="text-red-500 text-2xl" />
          </div>
        </div>
      </div>

      {/* ===== Navigation Buttons ===== */}
      <div className="flex justify-center gap-4 mt-10">
        <button
          onClick={() => setIndex((prev) => (prev > 0 ? prev - 1 : reviews.length - 1))}
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
