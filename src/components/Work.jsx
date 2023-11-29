import React, { useState } from "react";
import WorkImg from "../assets/projects/workImg.jpeg";
import bankingapp from "../assets/bankingapp.png";
import financewebsite from "../assets/financewebsite.png";
import carwebsite from "../assets/carwebsite.png";
import cryptosite from "../assets/cryptowebsite.png";
import website from "../assets/website.png";
import tableau from "../assets/tableau.png";

const Work = ({ theme }) => {
  const [nav, setNav] = useState(false);
  if (nav) {
    return null;
  }

  // Define project data
  const projects = [
    {
      title: "Java Banking App",
      image: bankingapp,
      link: "https://github.com/NicolasVicente44/JavaFXBankingApplication2023",
    },
    {
      title: "ASP.NET Finance Site",
      image: financewebsite,
      link: "https://github.com/NicolasVicente44/Churn",
    },
    {
      title: "PHP MVC Site",
      image: carwebsite,
      link: "https://github.com/NicolasVicente44/PHP-Cars-Website",
    },
    {
      title: "Crypto Site W API",
      image: cryptosite,
      link: "https://github.com/NicolasVicente44/crypto-tracking-react",
    },
    {
      title: "Static Site",
      image: website,
      link: "https://github.com/NicolasVicente44/tailwind",
    },
    {
      title: "Tableau Dashboard",
      image: tableau,
      link: "https://github.com/NicolasVicente44/EcommerceDataTableau",
    },
    // Add more projects here
  ];

  return (
    <div
      name="work"
      className={`w-full md:h-screen pt-[400px] md:pt-5  ${
        theme === "dark" ? "bg-black text-gray-300" : "bg-white text-black"
      }`}
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pt-20">
        <div className="pb-8">
          <p
            className={`text-4xl font-bold inline ${
              theme === "dark"
                ? "border-b-4 border-gray-300"
                : "border-b-4 border-black"
            }`}
          >
            Work
          </p>
          <p className="py-6 text-lg">
            These are some of my recent projects - more can be found on my{" "}
            <strong>
              <a href="https://github.com/NicolasVicente44">github</a>
            </strong>
          </p>
        </div>

        {/* Project containers */}
        <div
          className={
            nav ? "hidden" : "grid sm:grid-cols-2 md:grid-cols-3 gap-4"
          }
        >
          {projects.map((project, index) => (
            <div className="relative" key={index}>
              <div
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "60%",
                }}
                className={`shadow-lg group container rounded-md flex justify-center items-center mx-auto contentDiv ${
                  theme === "dark" ? "shadow-[#040c16]" : "shadow-[#d1d5db]"
                }`}
              >
                {/* hover effect */}
                <div
                  className={`opacity-0 hover:opacity-100 ${
                    theme === "dark" ? "hover:bg-[#1a1a1a]" : "hover:bg-white"
                  } rounded-md absolute inset-0 flex flex-col justify-center items-center`}
                >
                  <span className="text-2xl font-bold tracking-wider">
                    {project.title}
                  </span>
                  <div className="pt-8 text-center">
                    <a href={project.link}>
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold hover:text-gray-400 text-lg">
                        Project Link
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
