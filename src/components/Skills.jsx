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

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#7e3431] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#000000]">Skills</p>
          <p className="py-4 text-lg">These are some of the technologies I work with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#000000] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML Icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#000000] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML Icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML Icon" />
            <p className="my-4">Java Script</p>
          </div>
          <div className="shadow-md shadow-[#000000] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Bootstrap} alt="HTML Icon" />
            <p className="my-4">Bootstrap</p>
          </div>
          <div className="shadow-md shadow-[#000000] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSharp} alt="HTML Icon" />
            <p className="my-4">C#/Asp.Net</p>
          </div>
          <div className="shadow-md shadow-[#000000] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Python} alt="HTML Icon" />
            <p className="my-4">Python</p>
          </div>
          <div className="shadow-md shadow-[#000000] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Java} alt="HTML Icon" />
            <p className="my-4">Java/JavaFX</p>
          </div>
          <div className="shadow-md shadow-[#000000] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML Icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#000000] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML Icon" />
            <p className="my-4">GitHub/Git</p>
          </div>
          <div className="shadow-md shadow-[#000000] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={PHP} alt="HTML Icon" />
            <p className="my-4">PHP</p>
          </div>
          <div className="shadow-md shadow-[#000000] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={SQL} alt="HTML Icon" />
            <p className="my-4">SQL</p>
          </div>
          <div className="shadow-md shadow-[#000000] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Azure} alt="HTML Icon" />
            <p className="my-4">Azure</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
