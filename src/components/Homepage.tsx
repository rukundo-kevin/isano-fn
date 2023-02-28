import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <section className="flex m-2 mt-12 md:mt-6  dark:text-white flex-col justify-center items-center min-h-[90vh] overscroll-none bg-[#eee] dark:bg-slate-900">
      <div className="grayscale hover:grayscale-0">
        {/* <img
          src={rukundoImage}
          className="w-40 shadow-md  rounded-full object-cover hover:cursor-pointer"
          alt="Rukundo Kevin"
        /> */}
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
          <FaExternalLinkAlt className="mt-2 mr-1 w-8" />
          Resume
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Homepage />
      <Footer />
    </>
  );
};
export default Home;
