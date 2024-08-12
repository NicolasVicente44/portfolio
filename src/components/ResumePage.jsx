import React from "react";

const ResumePage = ({ theme }) => {
  return (
    <div
      className={`p-4 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="text-2xl font-bold mb-4">Nicolas Vicente's Resume</h1>
      <embed
        src={require("../assets/Nicolas_Vicente_Resume.pdf")}
        type="application/pdf"
        width="80%"
        height="1000px"
        className={`border py-6 mx-auto block ${
          theme === "dark" ? "border-black" : "border-white"
        } mt-12`} // Added margin-top
      />
    </div>
  );
};

export default ResumePage;
