import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import AWS from "../assets/aws.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#7e3431] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#000000]">Skills</p>
          <p className="py-4 text-lg">These are some of the technologies i've worked with</p>
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
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML Icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#000000] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML Icon" />
            <p className="my-4">GitHub/Git</p>
          </div>
          <div className="shadow-md shadow-[#000000] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="HTML Icon" />
            <p className="my-4">Node Js</p>
          </div>
          <div className="shadow-md shadow-[#000000] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="HTML Icon" />
            <p className="my-4">MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#000000] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={AWS} alt="HTML Icon" />
            <p className="my-4">AWS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
