import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
// import { Link } from "react-scroll";
import { FaRegLightbulb } from "react-icons/fa";
import { IoMoonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = ({ toggleTheme, theme, setNav }) => {
  const [nav, setNavState] = useState(false);
  const handleClick = () => {
    setNav(!nav);
    setNavState(!nav); // Set the local state as well
  };
  const email = "nicolas.a.vicente44@gmail.com";

  return (
    <div className="fixed w-full h-[80px] flex justify-end items-center px-4 bg-white dark:bg-[#000000] text-black dark:text-gray-300">
      <ul className="hidden md:flex">
        <button onClick={toggleTheme} className="ml-auto text-xl">
          {theme === "dark" ? <FaRegLightbulb /> : <IoMoonOutline />}
        </button>
        <li className="text-2xl">
          <a href="/">Home</a>
        </li>
        <li className="text-2xl">
          <li className="text-2xl">
            <a href="/about">About</a>
          </li>
        </li>
        <li className="text-2xl">
          <li className="text-2xl">
            <a href="/skills">Skills</a>
          </li>
        </li>
        <li className="text-2xl">
          <li className="text-2xl">
            <a href="/work">Work</a>
          </li>
        </li>
        <li className="text-2xl">
          <li className="text-2xl">
            <a href="/contact">Contact</a>
          </li>
        </li>
        <li className="text-2xl">
          <li className="text-2xl">
            <a href="/blog">Blog</a>
          </li>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen z-70  dark:bg-[#000000] dark:text-gray-300  bg-white flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <li className="text-2xl">
            <a href="/">Home</a>
          </li>
        </li>
        <li className="py-6 text-4xl">
          <li className="text-2xl">
            <a href="/about">About</a>
          </li>
        </li>
        <li className="py-6 text-4xl">
          <li className="text-2xl">
            <a href="/skills">Skills</a>
          </li>
        </li>
        <li className="py-6 text-4xl">
          <li className="text-2xl">
            <a href="/work">Work</a>
          </li>
        </li>
        <li className="py-6 text-4xl">
          <li className="text-2xl">
            <a href="/contact">Contact</a>
          </li>
        </li>
        <li className="py-6 text-4xl">
          <li className="text-2xl">
            <a href="/blog">Blog</a>
          </li>
        </li>
        <button onClick={toggleTheme} className="py-6 text-4xl">
          {theme === "dark" ? <FaRegLightbulb /> : <IoMoonOutline />}
        </button>
      </ul>

      <div className="hidden lg:flex fixed flex-column top-[35%] left-0  ">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/nicolas-vicente-664116209/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/NicolasVicente44"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={`mailto:${email}`}
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] ">
            <Link
              className="flex justify-between items-center w-full text-gray-300"
              to="/resume" 
            >
              Resume <BsFillPersonLinesFill size={30} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
