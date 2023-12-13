import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Hero = ({ theme }) => {
  return (
    <div
      name="home"
      className={`w-full h-screen ${
        theme === "dark" ? "bg-[#000000]" : "bg-white"
      }`}
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <h1
          className={`text-4xl sm:text-7xl font-bold ${
            theme === "dark" ? "text-[#ccd6f6]" : "text-black"
          }`}
        >
          Nicolas Vicente
        </h1>
        <h2
          className={`text-4xl sm:text-7xl font-bold ${
            theme === "dark" ? "text-[#8892b0]" : "text-gray-700"
          }`}
        >
          I'm an aspiring IT professional
        </h2>
        <p
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } py-4 max-w-[700px] text-lg`}
        >
          As a current computer science student, I aspire to build a successful
          career as a technical professional. With a focus on leveraging
          technology to drive innovation and enhance business operations, I
          thrive in dynamic and growth-oriented environments.
        </p>
        <div className="flex items-center">
          <a
            href="/work"
            className={`group border-2 px-6 py-3 my-2 flex items-center cursor-pointer transition duration-300 ${
              theme === "dark"
                ? "text-white hover:bg-white hover:text-black border-white"
                : "text-black hover:bg-black hover:text-white border-black"
            }`}
          >
            View Work
            <span className="group-hover:translate-x-3 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
