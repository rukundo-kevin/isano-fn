import React from "react";
import {
  FaDev,
  FaEnvelope,
  FaGithub,
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import { HiDocumentText } from "react-icons/hi2";

export default function Footer() {
  return (
    <footer className="h-[16vh] flex flex-col justify-start md:justify-center items-center mb-6 w-[70vw] md:w-[75vw] lg:w-full">
      <div className="w-[100%] md:w-[400px] h-[1px] border border-gray-400 dark:border-gray-500"></div>
      <div className="flex  justify-center items-center mt-12">
        <a
          href="http://github.com/rukundo-kevin"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="ml-20 md:ml-0 text-gray-900 dark:text-white text-2xl md:text-4xl cursor-pointer hover:bg-white dark:hover:text-black hover:text-black hover:rounded-full" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <HiDocumentText className="text-gray-900 dark:text-white text-2xl md:text-4xl ml-6 cursor-pointer" />
        </a>
        <a
          href="https://linkedin.com/rukundokevin"
          target="_blank"
          download="rukundo-awesome-resume"
          rel="noreferrer"
        >
          <FaLinkedin className="text-primary dark:text-white text-2xl md:text-4xl ml-6 cursor-pointer " />
        </a>
        <a href="mailto:kevinrukundo1">
          <FaEnvelope className="text-gray-900 dark:text-white text-2xl md:text-4xl ml-6  cursor-pointer" />
        </a>
        <a
          href="https://twitter.com/rukundokevin_"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter className="text-sky-600 dark:text-white text-2xl md:text-4xl ml-6 cursor-pointer hover:text-sky-500" />
        </a>
        <a
          href="https://instagram.com/rukundo__kevin"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="text-gray-900 dark:text-white text-2xl md:text-4xl ml-6 cursor-pointer" />
        </a>
        <a
          href="https://devto.com/rukundokevin"
          target="_blank"
          rel="noreferrer"
        >
          <FaDev className="text-gray-900 dark:text-white text-2xl md:text-4xl ml-6 cursor-pointer" />
        </a>
      </div>
      <div className="flex font-medium text-xl mt-2 flex-row text-gray-900 dark:text-white">
        Build with
        <FaHeart className="ml-2 mr-2 mt-1 text-red-600 dark:text-violet-700" />{" "}
        By Rukundo
      </div>
    </footer>
  );
}
