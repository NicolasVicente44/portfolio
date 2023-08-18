import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#000000] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#000000] ">
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Nicolas</p>
          </div>
          <div>
            <p className="text-lg">
              I tackle challenges and adapt to rapid
              advancements. I embrace new tools, frameworks, and methodologies
              to deliver transformative solutions that drive operational
              efficiency and business success. I actively seek opportunities to
              expand my skill set in emerging technologies and solutions. With a longing for
              knowledge and a dedication to personal and professional growth, I
              stay at the forefront of industry trends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
