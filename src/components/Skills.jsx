import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import PHP from "../assets/php.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import SQL from "../assets/sql.png";
import Azure from "../assets/azure.png";
import Bootstrap from "../assets/boostrap.png";
import CSharp from "../assets/c#.png";
import Python from "../assets/python.png";
import Java from "../assets/java.png";

const Skills = ({ theme, nav }) => {
  console.log(nav);

  return (
    <div
      name="skills"
      className={`w-full pt-60 h-full  ${
        theme === "dark" ? "bg-[#000000] text-gray-300" : "bg-white text-black"
      }`}
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p
            className={`text-4xl font-bold inline ${
              theme === "dark"
                ? "border-b-4 border-gray-300"
                : "border-b-4 border-black"
            }`}
          >
            Skills
          </p>
          <p className="py-4 text-lg ">
            These are some of the programming technologies I work with. I've
            also utilized azure and postman, as well as cloud databases such as
            mongoDB and firebase. Outside of my programming skills, I have a
            background in IT support, sales, and financial services with
            experience in the Canadian banking and automotive sector.
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {/* HTML */}
          <div
            className={`shadow-md hover:scale-110 duration-500 ${
              theme === "dark" ? " bg-transparent" : "bg-white"
            }`}
          >
            <img className="w-20  pt-5 mx-auto" src={HTML} alt="HTML Icon" />
            <p className="my-4">HTML</p>
          </div>
          {/* CSS */}
          <div
            className={`shadow-md hover:scale-110 duration-500 ${
              theme === "dark" ? " bg-transparent" : "bg-white"
            }`}
          >
            <img className="w-20 pt-5 mx-auto" src={CSS} alt="CSS Icon" />
            <p className="my-4">CSS</p>
          </div>
          {/* JavaScript */}
          <div
            className={`shadow-md hover:scale-110 duration-500 ${
              theme === "dark" ? " bg-transparent" : "bg-white"
            }`}
          >
            <img
              className="w-20 pt-5 mx-auto"
              src={JavaScript}
              alt="JavaScript Icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div
            className={`shadow-md hover:scale-110 duration-500 ${
              theme === "dark" ? " bg-transparent" : "bg-white"
            }`}
          >
            <img className="w-20 pt-5 mx-auto" src={SQL} alt="Java Icon" />
            <p className="my-4">SQL</p>
          </div>
          {/* C# */}
          <div
            className={`shadow-md hover:scale-110 duration-500 ${
              theme === "dark" ? " bg-transparent" : "bg-white"
            }`}
          >
            <img className="w-20 pt-5 mx-auto" src={CSharp} alt="C# Icon" />
            <p className="my-4">C#/Asp.Net</p>
          </div>
          {/* Python */}
          <div
            className={`shadow-md hover:scale-110 duration-500 ${
              theme === "dark" ? " bg-transparent" : "bg-white"
            }`}
          >
            <img className="w-20 pt-5 mx-auto" src={Python} alt="Python Icon" />
            <p className="my-4">Python</p>
          </div>
          {/* Java */}
          <div
            className={`shadow-md hover:scale-110 duration-500 ${
              theme === "dark" ? " bg-transparent" : "bg-white"
            }`}
          >
            <img className="w-20 pt-5 mx-auto" src={Java} alt="Java Icon" />
            <p className="my-4">Java/JavaFX</p>
          </div>
          <div
            className={`shadow-md hover:scale-110 duration-500 ${
              theme === "dark" ? " bg-transparent" : "bg-white"
            }`}
          >
            <img className="w-20 pt-5 mx-auto" src={ReactImg} alt="Java Icon" />
            <p className="my-4">React</p>
          </div>
          <div
            className={`shadow-md hover:scale-110 duration-500 ${
              theme === "dark" ? " bg-transparent" : "bg-white"
            }`}
          >
            <img className="w-20 pt-5 mx-auto" src={PHP} alt="Java Icon" />
            <p className="my-4">PHP</p>
          </div>
          <div
            className={`shadow-md hover:scale-110 duration-500 ${
              theme === "dark" ? " bg-transparent" : "bg-white"
            }`}
          >
            <img className="w-20 pt-5 mx-auto" src={GitHub} alt="Java Icon" />
            <p className="my-4">Git/GitHub</p>
          </div>
          <div
            className={`shadow-md hover:scale-110 duration-500 ${
              theme === "dark" ? " bg-transparent" : "bg-white"
            }`}
          >
            <img className="w-20 pt-5 mx-auto" src={Tailwind} alt="Java Icon" />
            <p className="my-4">Tailwind</p>
          </div>
          <div
            className={`shadow-md hover:scale-110 duration-500 ${
              theme === "dark" ? " bg-transparent" : "bg-white"
            }`}
          >
            <img
              className="w-20 pt-5 mx-auto"
              src={Bootstrap}
              alt="Java Icon"
            />
            <p className="my-4">Bootstrap</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
