import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";


const Hero = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#7e3431]">
      {/*Container */}

      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Nicolas Vicente
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm an aspiring IT professional
        </h2>
        <p className="text-[#000000] py-4 max-w-[700px] text-lg">
        As a current student, I aspire to build a successful career as an IT professional. With a focus on leveraging technology to drive innovation and enhance business operations, I thrive in dynamic and growth-oriented environments.
        </p>

        <div>
        <button to='work' className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#000000] hover:border-[#fff]'>
            View Work
            <span>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
