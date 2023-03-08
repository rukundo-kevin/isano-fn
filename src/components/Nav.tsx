import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

import { HiMoon, HiSun } from "react-icons/hi2";
import useDarkMode from "../Hooks/useDarkMode";
const Nav = () => {
  let Links = [
    { name: "About", link: "/about" },
    { name: "Experience", link: "/experience" },
    // { name: "Contact", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();

  const handleTheme = () => {
    localStorage.setItem("color-theme", colorTheme);
    setTheme(colorTheme);
  };

  return (
    <div className="dark:shadow-md shadow-xs w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center justify-center z-50 bg-[#eee] dark:bg-slate-900 py-4 md:px-10 px-7 shadow-lg">
        <div
          className="font-bold text-xl cursor-pointer flex items-center font-[Poppins] text-gray-900 md:text-white
      dark:text-white p-2 md:dark:border  dark:bg-slate-900 md:bg-[#1280a3] rounded-full md:mr-20"
        >
          <Link
            to="/"
            className="border md:border-0 rounded-full md:rounded-none p-2 md:p-0 -mt-1 md:mt-0"
          >
            RK
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer text-gray-900 dark:text-white md:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>

        <ul
          className={` md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#eee] dark:bg-slate-900 md:z-40 z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-transform  duration-500 ease-in ${
            open ? "top-[72px] " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-lg md:my-0 my-7">
              <Link
                to={link.link}
                className="text-gray-900 dark:text-white dark:hover:text-gray-500 hover:text-gray-400 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <button
            className="bg-primary dark:bg-gray-700 text-white font-[Poppins] py-2 px-3 rounded md:ml-24 hover:bg-[#2193b6] hover:border-[#2193b6]
    duration-500 flex flex-row border border-white"
            value="dark"
            onClick={handleTheme}
          >
            {colorTheme === "dark" ? (
              <HiMoon className="w-8 mt-1 mr-1" />
            ) : (
              <HiSun className="w-8 mt-1 mr-1 text-dark-text-fill" />
            )}
            {colorTheme === "dark" ? "Dark Mode" : "Light Mode"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
