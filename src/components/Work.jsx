import React from "react";
import WorkImg from "../assets/projects/workImg.jpeg";
import bankingapp from "../assets/bankingapp.png";
import financewebsite from "../assets/financewebsite.png";
import carwebsite from "../assets/carwebsite.png";
import cryptosite from "../assets/cryptowebsite.png";
import website from "../assets/website.png";
import tableau from "../assets/tableau.png";

const Work = () => {
  return (
    <div
      name="work"
      className="bg-[#000000] w-full md:h-screen text-gray-300 pt-40"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#000000]">
            Work
          </p>
          <p className="py-6 text-lg">These are some of my recent projects</p>
        </div>

        {/*container*/}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/*grid item */}
          <div className="relative">
            <div
              style={{
                backgroundImage: `url(${bankingapp})`,
                backgroundSize: "60%",
              }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contentDiv"
            >
              {/*hover effect*/}
              <div className="opacity-0 hover:opacity-100 hover:bg-white rounded-md absolute inset-0 flex flex-col justify-center items-center">
                <span className="text-2xl font-bold text-black tracking-wider">
                  Java Banking App
                </span>
                <div className="pt-8 text-center">
                  <a href="https://github.com/NicolasVicente44/JavaFXBankingApplication2023">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold hover:text-gray-400 text-lg">
                      Project Link
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              style={{
                backgroundImage: `url(${financewebsite})`,
                backgroundSize: "60%",
              }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contentDiv"
            >
              {/*hover effect*/}
              <div className="opacity-0 hover:opacity-100 hover:bg-white rounded-md absolute inset-0 flex flex-col justify-center items-center">
                <span className="text-2xl font-bold text-black tracking-wider">
                  ASP.NET Finance Site
                </span>
                <div className="pt-8 text-center">
                  <a href="https://github.com/NicolasVicente44/Churn">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold hover:text-gray-400 text-lg">
                      Project Link
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              style={{
                backgroundImage: `url(${carwebsite})`,
                backgroundSize: "60%",
              }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contentDiv"
            >
              {/*hover effect*/}
              <div className="opacity-0 hover:opacity-100 hover:bg-white rounded-md absolute inset-0 flex flex-col justify-center items-center">
                <span className="text-2xl font-bold text-black tracking-wider">
                  PHP MVC Site
                </span>
                <div className="pt-8 text-center">
                  <a href="https://github.com/NicolasVicente44/PHP-Cars-Website">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold hover:text-gray-400 text-lg">
                      Project Link
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              style={{
                backgroundImage: `url(${cryptosite})`,
                backgroundSize: "60%",
              }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contentDiv"
            >
              {/*hover effect*/}
              <div className="opacity-0 hover:opacity-100 hover:bg-white rounded-md absolute inset-0 flex flex-col justify-center items-center">
                <span className="text-2xl font-bold text-black tracking-wider">
                  Crypto Site W API
                </span>
                <div className="pt-8 text-center">
                  <a href="https://github.com/NicolasVicente44/crypto-tracking-react">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold hover:text-gray-400 text-lg">
                      Project Link
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              style={{
                backgroundImage: `url(${website})`,
                backgroundSize: "60%",
              }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contentDiv"
            >
              {/*hover effect*/}
              <div className="opacity-0 hover:opacity-100 hover:bg-white rounded-md absolute inset-0 flex flex-col justify-center items-center">
                <span className="text-2xl font-bold text-black tracking-wider">
                  Static Site
                </span>
                <div className="pt-8 text-center">
                  <a href="https://github.com/NicolasVicente44/tailwind">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold hover:text-gray-400 text-lg">
                      Project Link
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              style={{
                backgroundImage: `url(${tableau})`,
                backgroundSize: "60%",
              }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto contentDiv"
            >
              {/*hover effect*/}
              <div className="opacity-0 hover:opacity-100 hover:bg-white rounded-md absolute inset-0 flex flex-col justify-center items-center">
                <span className="text-2xl font-bold text-black tracking-wider">
                  Tableau Dashboard
                </span>
                <div className="pt-8 text-center">
                  <a href="https://github.com/NicolasVicente44/EcommerceDataTableau">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-black text-white font-bold hover:text-gray-400 text-lg">
                      Project Link
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* area to add more grid items*/}
        </div>
      </div>
    </div>
  );
};

export default Work;
