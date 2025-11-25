import { useState } from "react";

export default function Map() {
  const [hovered, setHovered] = useState(null);

  const locations = {
    india: {
      title: "Head Office India",
      flag: "/india.svg",
      text: `Office No:#104, first floor, manjeera trinity corporate,
eSeva Ln, KPHB Phase 3,
Kukatpally, Hyderabad,
Telangana 500072.

Email: info@doelsoft.com`,
    },
    usa: {
      title: "USA Office",
      flag: "/usa.svg",
      text: `1317 Edgewater Drive, 938
Orlando, FL 32804
      
Mobile : +1 321 204 3271
      
Email: info@doelsoft.com`,
    },
    sa: {
      title: "SA Sales Office",
      flag: "/southamerica.svg",
      text: `#67 H Scat Urbam,1er Etage,
Dakar, Senegal.
      
(Mobile) : +221 33 827 88 99
      
Email: info@doelsoft.com`,
    },
    europe: {
      title: "Europe Sales Office",
      flag: "/europe.svg",
      text: `#PO Box RG4 5DG 1B Donkin Hill,
Caversham Reading UK.
      
(Mobile) : +44 73944 60534
      
info@doelsoft.com`,
    },
  };

  return (
    <div
      className="relative w-full max-w-6xl mx-auto -mt-1 bg-slate-100
                 h-[200px] sm:h-[280px] md:h-[350px] lg:h-[430px] overflow-hidden"
    >
      {/* Background map */}
      <img
        src="/MAP.svg"
        alt="Map"
        className="absolute inset-0 w-full h-full object-contain opacity-80 z-0 pointer-events-none"
      />

      {/* Flag Hotspots */}
      <div className="relative w-full h-full z-20">

        {/* India */}
        <div
          onMouseEnter={() => setHovered("india")}
          onMouseLeave={() => setHovered(null)}
          className="absolute 
            top-[55%] right-[15%]
            sm:top-[50%] sm:right-[16%]
            md:top-[48%] md:right-[18%]
            lg:top-[50%] lg:right-[18%]
            px-3 py-1 bg-white shadow-md 
            cursor-pointer flex items-center gap-1 text-xs sm:text-sm"
        >
          <img src="/india.svg" className="w-4 sm:w-5" alt="India" /> India
        </div>

        {/* USA */}
        <div
          onMouseEnter={() => setHovered("usa")}
          onMouseLeave={() => setHovered(null)}
          className="absolute 
            top-[25%] left-[20%]
            sm:top-[30%] sm:left-[22%]
            md:top-[33%] md:left-[24%]
            lg:top-[35%] lg:left-[24%]
            px-3 py-1 bg-white shadow-md cursor-pointer
             flex items-center gap-1 text-xs sm:text-sm"
        >
          <img src="/usa.svg" className="w-4 sm:w-5" alt="USA" /> USA
        </div>

        {/* South America */}
        <div
          onMouseEnter={() => setHovered("sa")}
          onMouseLeave={() => setHovered(null)}
          className="absolute
            top-[60%] left-[22%]
            sm:top-[62%] sm:left-[23%]
            md:top-[58%] md:left-[25%]
            lg:top-[58%] lg:left-[25%]
            px-3 py-1 bg-white shadow-md
            cursor-pointer flex items-center gap-1 text-xs sm:text-sm"
        >
          <img src="/southamerica.svg" className="w-4 sm:w-5" alt="SA" /> SA
        </div>

        {/* Europe */}
        <div
          onMouseEnter={() => setHovered("europe")}
          onMouseLeave={() => setHovered(null)}
          className="absolute
            top-[30%] right-[15%]
            sm:top-[33%] sm:right-[17%]
            md:top-[35%] md:right-[20%]
            lg:top-[35%] lg:right-[20%]
            px-3 py-1 bg-white shadow-md 
            cursor-pointer flex items-center gap-1 text-xs sm:text-sm"
        >
          <img src="/europe.svg" className="w-4 sm:w-5" alt="EU" /> Europe
        </div>
      </div>

      {/* Address Popup */}
      {hovered && (
  <div
    className={`hidden lg:flex absolute 
  ${hovered === "usa" || hovered === "europe" ? "bottom-[1rem]" : "bottom-[12rem]"}
  left-1/2 -translate-x-1/2 
  w-[92%] sm:w-[200px] md:w-[24px] lg:w-[280px] 
  bg-white shadow-xl p-6 border-b-4 border-red-600 z-[9999]
  pointer-events-none
`}

  >
    <div className="pointer-events-auto">   {/* ⭐ Enables clicking inside */}
      <h3 className="font-bold text-lg text-center mb-3">
        {locations[hovered].title}
      </h3>

      <div className="flex justify-center mb-3">
        <img src={locations[hovered].flag} className="w-9 h-6" alt="flag" />
      </div>

      <p className="text-sm text-gray-700 whitespace-pre-line text-center leading-relaxed">
        {locations[hovered].text}
      </p>
    </div>
  </div>
)}

    </div>
  );
}
