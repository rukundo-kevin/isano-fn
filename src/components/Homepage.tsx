import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import rukundoImage from "../images/rukundo kevin.jpg";
import Footer from "./Footer";
import Interest from "./Interest";
import TechStack from "./TechStack";

import resume from "../images/Resume.pdf";

const Homepage = () => {
  return (
    <section className="flex m-2 mt-12 md:mt-6  dark:text-white flex-col justify-center items-center min-h-[90vh] overscroll-none bg-[#eee] dark:bg-slate-900">
      <div className="grayscale hover:grayscale-0">
        <img
          src={rukundoImage}
          className="w-40 shadow-md  rounded-full object-cover hover:cursor-pointer"
          alt="Rukundo Kevin"
        />
      </div>

      <div className="font-bold mt-3 dark:text-white flex flex-col items-center">
        <div className="text-gray-500 text-3xl flex flex-col md:flex-row items-center justify-center">
          <span>Hi,</span>
          <span className="text-2xl md:text-3xl">
            I'm
            <span className="text-gray-900 dark:text-white ml-2 mr-2">
              Rukundo Kevin
            </span>
            from Rwanda
          </span>
        </div>
        <div className="mt-4  md:mt-2 text-xl dark:text-gray-300 flex flex-col items-center justify-center">
          Full stack developer
          <span className="invisible md:visible">
            Community building enthusiast
          </span>
        </div>
        <div className="mt-6">
          <a
            href={resume}
            target="_blank"
            download="rukundo-awesome-resume"
            rel="noreferrer"
            className="bg-[#1280a3] z-0  relative flex justify-center py-2 px-4  border border-transparent  font-medium rounded-md  text-white text-lg hover:bg-[#1280a3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-secondary sm:mx-0 hover:cursor-pointer"
          >
            <FaExternalLinkAlt className="mt-2 mr-1 w-8" />
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Homepage />
      <TechStack />
      <Interest />
      <Footer />
    </>
  );
};
export default Home;
