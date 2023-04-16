import React from "react";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="h-[16vh] flex flex-col justify-start md:justify-center items-center mb-6 w-[90vw] md:w-[75vw] lg:w-full">
      <div className="flex font-medium text-xl mt-2 flex-row text-gray-900 dark:text-white">
        <span className="w-full"> Build with</span>
        <FaHeart className="ml-2 mr-2 mt-1 text-red-600 dark:text-violet-700" />{" "}
        By
        <a
          href="http://github.com/rukundo-kevin"
          className="text-violet-700 ml-2"
        >
          Rukundo
        </a>
      </div>
    </footer>
  );
}
