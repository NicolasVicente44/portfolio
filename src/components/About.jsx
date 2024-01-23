const About = ({ theme }) => {
  return (
    <div
      name="about"
      className={`w-full h-screen ${
        theme === "dark" ? "bg-[#000000] text-gray-300" : "bg-white text-black"
      }`}
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right col-span-1 pl-4">
            <p
              className={`text-4xl font-bold inline ${
                theme === "dark"
                  ? "border-b-4 border-gray-300"
                  : "border-b-4 border-black"
              }`}
            >
              About Me
            </p>
          </div>
          <div className="col-span-1"></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 mt-8">
          <div className="sm:text-right text-4xl font-bold col-span-1">
            <p>Hi, I'm Nicolas</p>
          </div>
          <div className="col-span-1 ">
            <p className="text-lg">
              I tackle challenges and adapt to rapid advancements. I embrace new
              tools, frameworks, and methodologies to deliver transformative
              solutions that drive operational efficiency and business success.
              I'm looking to utilize my formal education, self study, and past
              work experience to create valuable projects. I actively seek
              opportunities to expand my skill set in emerging technologies and
              solutions. With a longing for knowledge and a dedication to
              personal and professional growth, I stay at the forefront of
              industry trends. Click{" "}
              <a href="https://www.dropbox.com/scl/fi/ktfi60c748su3tqucei04/Nicolas_Vicente_Resume.pdf?rlkey=wf4sgqo6aueyfhjhi2drsmvwj&dl=0">
                <u>
                  <b>here</b>
                </u>
              </a>{" "}
              to view my resume and learn more about me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
