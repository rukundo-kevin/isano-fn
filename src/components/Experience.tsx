import React from "react";
import { Link } from "react-router-dom";
import { FaAsterisk } from "react-icons/fa";

const Experience = () => {
  const [openTab, setOpenTab] = React.useState("ATLP");
  let tabs: Array<string> = ["ATLP", "Solvit Africa", "Klab"];

  return (
    <section className="md:m-2 min-h-[80vh]  flex flex-col items-start md:items-center md:justify-around lg:justify-center">
      <div className=" flex flex-col mt-32 p-6 md:p-0 md:mt-0 justify-start md:justify-center items-center mb-6 w-full md:w-[75vw] lg:w-[60vw]">
        <div className="text-4xl font-bold text-gray-900 dark:text-white self-start mb-4  md:-ml-8">
          Work Experience
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 w-full">
          <div className="col-span-2">
            <ul
              className="flex mb-0 list-none flex-wrap  flex-col text-black dark:text-gray-400"
              role="tablist"
            >
              {tabs.map((tab, idx) => (
                <li
                  key={idx}
                  className=" flex-auto items-start w-full md:w-2/3 mt-3"
                >
                  <a
                    className={`font-bold text-lg px-2    md:px-2 py-3 shadow-sm rounded block leading-normal ${
                      openTab === `${tab}`
                        ? " text-dark-text-fill bg-[#2f3061] dark:border-b-4 border-primary dark:border-gray-300 "
                        : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenTab(`${tab}`);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                    data-testid="tab-link"
                  >
                    {tab}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`col-span-4 text-gray-900 dark:text-white mt-12 md:mt-2 ${
              openTab === "ATLP" ? "block" : "hidden"
            }`}
          >
            <div>
              <div className="text-2xl flex font-medium">
                Software Developer Intern
                <a
                  href="http://twitter.com/andela"
                  className="text-gray-500 dark:text-gray-400 float-right font-medium ml-6"
                >
                  @andela
                </a>
              </div>
              <div className="text-base italic">Dec 2021 - Oct 2022</div>
            </div>
            <div className="flex  font-medium text-xl mt-4 dark:text-gray-300">
              <FaAsterisk className="w-10 mr-1 mt-1" /> Designed responsive
              figma designs and implemented them using ReactJS and TailwindCSS
              as well as making reusable components and documenting them using
              storyblocks.
            </div>
            <div className="flex font-medium text-xl mt-6 dark:text-gray-300">
              <FaAsterisk className="w-10 mr-1 mt-1" /> Developed RESTful API
              endpoints using NodeJS and Express, implemented test on endpoints
              using Mocha/Chai and documented them using Swagger
            </div>
            <div className="flex font-medium text-xl mt-6 dark:text-gray-300">
              <FaAsterisk className="w-7 mr-1 mt-1" />
              Designed database models which I implemented using either MongoDB
              with mongoose or PostgreSQL with Sequelize.
            </div>
          </div>
          <div
            className={`col-span-4 text-gray-900 dark:text-white mt-12 md:mt-2 ${
              openTab === "Klab" ? "block" : "hidden"
            }`}
          >
            <div>
              <div className="text-2xl flex font-medium">
                Frontend Developer Intern
                <Link
                  to="http://twitter.com/andela"
                  className="text-gray-500 dark:text-gray-400 float-right font-medium ml-6"
                >
                  @Klab
                </Link>
              </div>
              <div className="text-base italic">April 2022 - Oct 2022</div>
            </div>
            <div className="flex font-medium text-xl mt-4 dark:text-gray-300">
              <FaAsterisk className="w-7 mr-1 mt-1" />
              Designed and implemented figma designs using React with TypeScript
              and Bootstrap. Redux was used as for state management.
            </div>
            <div className="flex font-medium text-xl mt-4 dark:text-gray-300">
              <FaAsterisk className="w-4 mr-1 mt-1" />
              Participated in daily meetings on a regular basis with peer to
              trainees and mentors.
            </div>
          </div>
          <div
            className={`col-span-4 text-gray-900 dark:text-white  mt-12 md:mt-2  ${
              openTab === "Solvit Africa" ? "block" : "hidden"
            }`}
          >
            <div>
              <div className="text-2xl flex font-medium">
                Backend Developer Trainee
                <Link
                  to="http://twitter.com/andela"
                  className="text-gray-500 dark:text-gray-400 float-right font-medium ml-6"
                >
                  @Solvit Africa
                </Link>
              </div>
              <div className="text-base italic">Feb 2022 - May 2022</div>
            </div>
            <div className="flex font-medium text-xl mt-4 dark:text-gray-300">
              <FaAsterisk className="w-8 mr-1 mt-1" />
              Developed and RESTful API endpoints using NodeJS and Express as
              well as designing database models and implementing them using
              MongoDB and Mongoose.
            </div>
            <div className="flex font-medium text-xl mt-4 dark:text-gray-300">
              <FaAsterisk className="w-8 mr-1 mt-1" />
              Participated in peer programming and reviewed fellow trainees PR
              as well as participating in daily standups, presentation and
              demonstration.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
