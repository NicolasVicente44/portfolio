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
  if (nav) {
    return null;
  }

  const projects = [
    {
      title: "MERN Stack Blog",
      image: blog,
      link: "https://github.com/NicolasVicente44/mern-blog",
      desc: "MERN full stack blog website",
      demoLink: "https://mern-blog-i8vh.onrender.com/",
    },
    {
      title: "Java Banking App",
      image: bankingapp,
      link: "https://github.com/NicolasVicente44/JavaFXBankingApplication2023",
      desc: "Client and admin banking app",
      demoLink: "https://fluffy-spork-qw66wxpxvph4vvp.github.dev/",
    },
    {
      title: "ASP.NET Finance Site",
      image: financewebsite,
      link: "https://github.com/NicolasVicente44/Churn",
      desc: "Full stack MVC finance web app",
      demoLink: "https://refactored-tribble-7j49p44wx49fp75x.github.dev/",
    },
    {
      title: "Python Market Web App",
      image: market,
      link: "https://github.com/NicolasVicente44/django_marketplace/tree/main",
      desc: "Full stack python Django marketplace",
      demoLink:
        "https://github.com/NicolasVicente44/django_marketplace/tree/main",
    },
    {
      title: "Power BI Dashboard",
      image: powerbi,
      link: "https://github.com/NicolasVicente44/Sample-PowerBI-Report",
      desc: "Sample Power BI analytics dashboard",
      demoLink:
        "https://github.com/NicolasVicente44/Sample-PowerBI-Report/blob/main/image.png",
    },
    {
      title: "PHP MVC Site",
      image: carwebsite,
      link: "https://github.com/NicolasVicente44/PHP-Cars-Website",
      desc: "Full stack MVC PHP web app for car dealership",
      demoLink: "https://github.com/NicolasVicente44/PHP-Cars-Website",
    },
    {
      title: "Crypto Site W API",
      image: cryptosite,
      link: "https://github.com/NicolasVicente44/crypto-tracking-react",
      desc: "Crypto web app with firebase DB",
      demoLink: "https://cryptobase-94592.web.app/",
    },
    {
      title: "Static Site",
      image: website,
      link: "https://github.com/NicolasVicente44/tailwind",
      desc: "Static frontend site",
      demoLink: "https://nicolasvicente44.github.io/tailwind/",
    },
    {
      title: "Tableau Dashboard",
      image: tableau,
      link: "https://github.com/NicolasVicente44/EcommerceDataTableau",
      desc: "Tableau analytics dashboard",
      demoLink:
        "https://github.com/NicolasVicente44/EcommerceDataTableau/blob/main/Dashboard%201.pdf",
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
                    : "max-w-sm  pt-6 pb-6 rounded overflow-hidden shadow-lg text-center"
                } ${
                  theme === "dark"
                    ? "shadow-lg shadow-neutral-900"
                    : "shadow-xl"
                }`}
                key={index}
              >
                <img
                  className="w-2/4 mx-auto pt-6 pb-4"
                  src={project.image}
                  alt={project.title}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{project.title}</div>
                  <p
                    className={`${
                      (console.log(""), nav ? "text-gray-300" : "text-gray-700")
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
                    Code Link
                  </a>
                  <a
                    href={project.demoLink}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:opacity-60"
                  >
                    Demo
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
