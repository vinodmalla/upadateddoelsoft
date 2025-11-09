// ...existing code...
export default function MapTest() {
  return (
    <div className="relative w-full max-w-5xl mx-auto bg-slate-100 overflow-visible">
      {/* Map as absolute background (z-0) so overlayed flags are always on top */}
      <img
        src="/MAP.svg"
        alt="Map"
        className="absolute inset-0 w-full h-full opacity-80 z-0 pointer-events-none"
      />

      {/* Flags wrapper has explicit min-height so desktop renders it */}
      <div className="relative z-20 min-h-[420px] md:min-h-[520px]">
        <div className="absolute left-[25%] top-[60%] bg-white shadow-md rounded-md px-3 py-1 text-sm z-[9999]">
          <span>🇲🇽</span> SA
        </div>

        <div className="absolute left-[24%] bottom-[60%] bg-white shadow-md rounded-md px-3 py-1 text-sm z-[9999]">
          <span>🇺🇸</span> USA
        </div>

        <div className="absolute right-[40%] top-[30%] bg-white shadow-md rounded-md px-3 py-1 text-sm z-[9999]">
          <span>🇫🇮</span> Europe
        </div>

        <div className="absolute right-[25%] bottom-[50%] bg-white shadow-md rounded-md px-3 py-1 text-sm z-[9999]">
          <span>🇮🇳</span> India
        </div>
      </div>
    </div>
  );
}
// ...existing code...