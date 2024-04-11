/* eslint-disable */
import {  useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/droplet.png";
import Avatar from "../assets/avatar.png";
import Sidebar from "../_layouts/Sidebar";
import ProfileDropdown from "./ProfileDropdown";
import { HiXMark } from "react-icons/hi2";

function DashHeader() {
  const [showProfileDropdown, setShowprofileDropdown] = useState(false);
  const userData = JSON.parse(localStorage.getItem("auth") as string);
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleShowProfileDropdown = () =>
    setShowprofileDropdown(!showProfileDropdown);
  return (
    <>
      {showProfileDropdown && (
        <ProfileDropdown
          handleShowProfileDropdown={handleShowProfileDropdown}
          userData={userData}
        />
      )}
      <div className="w-screen h-[8vh] z-10 bg-gray-100 dark:bg-dark-bg fixed border-b">
        <div className="px-3 flex items-center  w-full h-full">
          <div className="flex px-5 lg:hidden">
            <div
              onClick={handleClick}
              onKeyDown={handleClick}
              role="button"
              tabIndex={0}
            >
              {!nav ? (
                <HiXMark className="w-7 dark:text-dark-text-fill" />
              ) : (
                <HiXMark className="w-7 dark:text-dark-text-fill" />
              )}
            </div>
          </div>
          <div className="flex items-center h-full lg:w-full">
            <Link to="/" className="flex flex-row lg:px-5">
              <img
                className="cursor-pointer w-[60px] mr-2"
                src={Logo}
                alt="logo"
              />
              <h1 className="text-xl mt-4 font-bold font-lexend text-primary dark:text-dark-text-fill">
                Pocket Money
              </h1>
            </Link>
          </div>

          <div
            onClick={handleShowProfileDropdown}
            className="ml-auto mr-8 flex "
          >
            <span className="mr-2 text-lg font-semibold">
              {userData && userData?.lastname}
            </span>
            <img
              className="w-6 cursor-pointer mr-auto"
              src={Avatar}
              alt="avatar"
            />
          </div>
        </div>
        <ul
          className={
            !nav
              ? "hidden"
              : "bg-white dark:bg-dark-bg cursor-pointer lg:hidden"
          }
        >
          <Sidebar toggle={handleClick} style="flex  pt-2 h-[92%]" />
        </ul>
      </div>
    </>
  );
}

export default DashHeader;
