import React from "react";
import { ArrowUpRight, Upload } from "lucide-react";

const ResumeUpload = () => {
  return (
    <section className="w-[1305px]  h-96 bg-[#E50000] py-10 md:py-16 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center text-white gap-10 md:gap-16 overflow-hidden">
      
      {/* LEFT TEXT SECTION */}
      <div className="w-full md:w-1/2 text-center md:text-left md:ml-16">
       <div className="w-[1204px] h-64 justify-start"><span class="text-white text-4xl font-semibold font-['Kumbh_Sans'] leading-[54.02px]">Didn't find your Fit job ? <br/>No worries upload your Resume. <br/>We will get back with your <br/></span><span class="text-white text-5xl font-semibold font-['Kumbh_Sans'] leading-[73px]">FIT JOB.</span></div>

        {/* Careers Illustration (optional) */}
        <div className="mt-8">
          <img
            src="/career_people.svg" // replace with your actual image path
            alt="Careers Illustration"
            className="w-full max-w-[300px] md:max-w-[420px] mx-auto md:mx-0"
          />
        </div>
      </div>

      {/* RIGHT UPLOAD SECTION */}
      <div className="flex flex-col items-center justify-center gap-6 bg-red-500 outline outline-1 outline-red-800 px-8 sm:px-14 md:px-20 py-10 w-full sm:w-[575px] text-center rounded-md">
        {/* Upload Icon & Label */}
        <label
          htmlFor="resume-upload"
          className="flex flex-col items-center justify-center gap-4 cursor-pointer"
        >
          <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full">
            <Upload className="w-6 h-6 text-zinc-700" />
          </div>
          <p className="text-zinc-200 text-base font-inter">
            Click or drag your resume to this area to upload
          </p>
          <input
            type="file"
            id="resume-upload"
            className="hidden"
            accept=".pdf,.doc,.docx"
          />
        </label>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="flex items-center justify-center gap-2 bg-white text-black px-6 py-2 rounded-sm font-medium hover:bg-gray-200 transition">
            Browse <ArrowUpRight className="w-4 h-4" />
          </button>

          <button className="flex items-center justify-center gap-2 bg-black text-white px-6 py-2 rounded-sm font-medium hover:bg-gray-800 transition">
            Upload <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResumeUpload;
