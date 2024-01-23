import React, { useState } from "react";
import WorkImg from "../assets/projects/workImg.jpeg";
import bankingapp from "../assets/bankingapp.png";
import financewebsite from "../assets/financewebsite.png";
import carwebsite from "../assets/carwebsite.png";
import cryptosite from "../assets/cryptowebsite.png";
import blog from "../assets/projects/blogging.png";
import website from "../assets/website.png";
import tableau from "../assets/tableau.png";
import market from "../assets/projects/market.png";
import powerbi from "../assets/projects/analyitics.png";

const Work = ({ theme, nav }) => {
  // project data
  if (nav) {
    return null; // or return an empty component
  }

  const projects = [
    {
      title: "MERN Stack Blog",
      image: blog,
      link: "https://github.com/NicolasVicente44/mern-blog",
      desc: "MERN full stack blog website",
    },
    {
      title: "Java Banking App",
      image: bankingapp,
      link: "https://github.com/NicolasVicente44/JavaFXBankingApplication2023",
      desc: "Client and admin banking app",
    },
    {
      title: "ASP.NET Finance Site",
      image: financewebsite,
      link: "https://github.com/NicolasVicente44/Churn",
      desc: "Full stack MVC finance web app",
    },
    {
      title: "Python Market Web App",
      image: market,
      link: "https://github.com/NicolasVicente44/django_marketplace/tree/main",
      desc: "Full stack python Django marketplace",
    },
    {
      title: "Power BI Dashboard",
      image: powerbi,
      link: "https://github.com/NicolasVicente44/Sample-PowerBI-Report",
      desc: "Sample Power BI analytics dashboard",
    },
    {
      title: "PHP MVC Site",
      image: carwebsite,
      link: "https://github.com/NicolasVicente44/PHP-Cars-Website",
      desc: "Full stack MVC PHP web app for car dealership",
    },
    {
      title: "Crypto Site W API",
      image: cryptosite,
      link: "https://github.com/NicolasVicente44/crypto-tracking-react",
      desc: "Crypto web app with firebase DB",
    },
    {
      title: "Static Site",
      image: website,
      link: "https://github.com/NicolasVicente44/tailwind",
      desc: "Static frontend site",
    },
    {
      title: "Tableau Dashboard",
      image: tableau,
      link: "https://github.com/NicolasVicente44/EcommerceDataTableau",
      desc: "Tableau analytics dashboard",
    },
  ];
  return (
    <div
      name="work"
      className={`w-full pt-40 h-full ${
        theme === "dark" ? "bg-[#000000] text-gray-300" : "bg-white text-black"
      }`}
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full">
        <div>
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
              <a href="https://github.com/NicolasVicente44">
                {" "}
                <u>GitHub</u>
              </a>
            </strong>
          </p>
        </div>

        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          {/* Project containers */}
          <div
            className={
              nav
                ? "hidden"
                : "grid sm:grid-cols-2 md:w-full w-3/4 mx-auto md:grid-cols-3 gap-4 justify-center "
            }
          >
            {projects.map((project, index) => (
              <div
                className={`${
                  nav
                    ? "hidden"
                    : "max-w-sm rounded overflow-hidden shadow-lg text-center"
                } ${
                  theme === "dark"
                    ? "shadow-lg shadow-neutral-900"
                    : "shadow-xl"
                }`}
                key={index}
              >
                <img
                  className="w-3/4 mx-auto"
                  src={project.image}
                  alt={project.title}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{project.title}</div>
                  <p
                    className={`${
                      (console.log(nav),
                      nav ? "text-gray-300" : "text-gray-700")
                    } text-base`}
                  >
                    {project.desc}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <a
                    href={project.link}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:opacity-60"
                  >
                    Project Link
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
