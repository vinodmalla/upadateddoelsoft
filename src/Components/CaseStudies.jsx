import React, { useState } from "react";

const tabs = ["All", "Data & Analytics", "E-Commerce Development", "Innovative Idea"];

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState("All");

  const cardData = [
    {
      id: 1,
      category: "Data & Analytics",
      image: "/case4.png", // replace with your image
      title: "Data Inclusion Mastered",
      desc: "Achieving 100% Data Accessibility in a Complex Financial DashboardFrom Data Density to Digital Inclusivity — Doelsoft Builds Accessible Intelligence"

    },
    {
      id: 2,
      category: "E-Commerce Development",
      image: "/case2.png", // replace with your image
      title: "Transforming Retail Through Scalable E-Commerce Engineering",
      desc: "A leading retail brand partnered with Doelsoft to re-engineer its legacy e-commerce platform.",
    },
    {
      id: 3,
      category: "Innovative Idea",
      image: "/case3.png", // replace with your image
      title: "A pipette calibrating platform from Doelsoft IT Services",
      desc: "A pipette calibrating platform from Doelsoft IT Services transforms pipette man",
    },
  ];

  const filteredCards =
    activeTab === "All"
      ? cardData
      : cardData.filter((item) => item.category === activeTab);

  return (
    <section className="w-full py-16 bg-[#F4F6FB] flex justify-center">
      <div className="w-[90%] max-w-7xl">

        {/* SECTION TOP MESSAGE */}
         <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Case <span className="text-[#EF0E0E]">Studies</span>
          </h1>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            Get an insight into the solutions we created for our clients to help them reach
            their business goals.
          </p>
        </div>


        {/* TABS */}
        <div className="flex justify-center gap-10 mb-10 font-medium text-gray-700">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-1 transition ${
                activeTab === tab
                  ? "text-[#EF0E0E] border-b-2 border-[#EF0E0E]"
                  : "hover:text-[#EF0E0E]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              className="bg-white p-8  shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 duration-300"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-60 object-contain mb-6"
              />

              <h2 className="text-2xl font-bold mb-4 text-gray-900">
                {card.title}
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6">{card.desc}</p>

              <button className="text-gray-900 font-semibold hover:text-red-500 transition flex gap-2 items-center">
                READ MORE
                <span className="text-xl">—</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
