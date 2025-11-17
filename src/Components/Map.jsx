export default function Map() {
  return (
    <div
      className="relative w-full max-w-6xl mx-auto -mt-1 bg-slate-100
                 h-[200px] sm:h-[280px] md:h-[350px] lg:h-[430px]
                 overflow-hidden"
    >
      {/* Background map */}
      <img
        src="/MAP.svg"
        alt="Map"
        className="absolute inset-0 w-full h-full object-contain opacity-80 z-0 pointer-events-none"
      />

      {/* Flags */}
      <div className="relative w-full h-full z-20">

        {/* India */}
        <div className="absolute 
            top-[55%] right-[15%]
            sm:top-[50%] sm:right-[16%]
            md:top-[48%] md:right-[18%]
            lg:top-[50%] lg:right-[18%]
            flex items-center gap-1 bg-white 
            shadow-md rounded-md px-3 py-1 text-xs sm:text-sm">
          <img src="/india.svg" className="w-4 sm:w-5 h-auto" alt="India" />
          India
        </div>

        {/* USA */}
        <div className="absolute 
            top-[25%] left-[20%]
            sm:top-[30%] sm:left-[22%]
            md:top-[33%] md:left-[24%]
            lg:top-[35%] lg:left-[24%]
            flex items-center gap-1 bg-white 
            shadow-md rounded-md px-3 py-1 text-xs sm:text-sm">
          <img src="/usa.svg" className="w-4 sm:w-5 h-auto" alt="USA" />
          USA
        </div>

        {/* South America */}
        <div className="absolute
            top-[60%] left-[22%]
            sm:top-[62%] sm:left-[23%]
            md:top-[58%] md:left-[25%]
            lg:top-[58%] lg:left-[25%]
            flex items-center gap-1 bg-white 
            shadow-md rounded-md px-3 py-1 text-xs sm:text-sm">
          <img src="/southamerica.svg" className="w-4 sm:w-5 h-auto" alt="South America" />
          South America
        </div>

        {/* Europe */}
        <div className="absolute
            top-[30%] right-[15%]
            sm:top-[33%] sm:right-[17%]
            md:top-[35%] md:right-[20%]
            lg:top-[35%] lg:right-[20%]
            flex items-center gap-1 bg-white 
            shadow-md rounded-md px-3 py-1 text-xs sm:text-sm">
          <img src="/europe.svg" className="w-4 sm:w-5 h-auto" alt="Europe" />
          Europe
        </div>

      </div>
    </div>
  );
}
