import { useState } from "react";
import { useLocation, useParams } from "react-router";

import {
  FaMale,
  FaUsers,
  FaGenderless,
  FaUser,
  FaExpand,
  FaCompress,
} from "react-icons/fa";
import { items } from "../constants/family-folderview";
import { FamilyMember } from "../types";
import Tree from "react-d3-tree";

import family from "../constants/family-data";

const Profile = () => {
  const { pathname } = useLocation();

  interface Member {
    [key: string]: FamilyMember;
  }

  const familyItems = items as unknown as Member;
  let familyMember: FamilyMember;
  const { id } = useParams();
  if (pathname === "/family") {
    const firstElement = familyItems[Object.keys(familyItems)[1]];
    familyMember = firstElement;
  } else {
    familyMember = familyItems[id as keyof typeof familyItems];
  }

  const [isFullScreen, setIsFullScreen] = useState(false);
  const handleFullScreenClick = () => {
    const elem = document.documentElement;
    if (!isFullScreen) {
      elem.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="flex flex-col md:flex-row w-full overflow-hidden">
      <div
        className="flex flex-col justify-start items-center font-[Poppins] text-gray-900 w-[90%] md:w-1/3   p-2
		   rounded-m min-h-[300px] max-h-[350px] ml-2 md:ml-4  mt-28  border shadow-md text-lg"
      >
        {familyMember.photo ? (
          <img
            src={familyMember.photo}
            className="w-1/2 h-1/3"
            alt="User Profile"
          />
        ) : familyMember.gender !== "Female" ? (
          <FaUser className="w-1/2 h-1/3" />
        ) : (
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            className="w-1/2 h-1/3"
          >
            <path
              fill="#141f38"
              className="cls-1"
              d="M97.19,344.56a74.43,74.43,0,0,1-3.45-26.46L102.4,153.6a153.6,153.6,0,0,1,307.2,0l8.66,164.49a74.43,74.43,0,0,1-3.45,26.46,184.59,184.59,0,0,0-82-44.66V277.8A114.61,114.61,0,0,0,371.2,192V160a44.85,44.85,0,0,0-44.8-44.8H185.6A44.85,44.85,0,0,0,140.8,160v29.11a119,119,0,0,0,38.4,87.79v23A184.59,184.59,0,0,0,97.19,344.56Zm103-83.31,4.61,3.84v45.18l51.2,32.9,51.2-32.9V265.73l4.8-3.84A89.2,89.2,0,0,0,345.6,192V160a19.26,19.26,0,0,0-19.2-19.2H185.6A19.26,19.26,0,0,0,166.4,160v29.12A93.45,93.45,0,0,0,200.19,261.25Zm130.24,64.51L256,373.63l-74.43-47.87C112.7,344.58,64,420.29,64,492.8A19.26,19.26,0,0,0,83.2,512H428.8A19.26,19.26,0,0,0,448,492.8C448,420.29,399.3,344.58,330.43,325.76Z"
            />
          </svg>
        )}

        <div className="m-2  mt-10 flex ">
          <span className="font-bold flex">Name</span>: {familyMember?.data}
        </div>
        <div className="m-2 mt-4 flex ">
          <span className="font-bold flex mr-2">
            <FaMale className="mt-1s" /> Gender:
          </span>
          {familyMember.gender}
        </div>
        <div className="m-2 flex">
          <span className="font-bold flex">
            <FaGenderless className="" />
            Born
          </span>
          : 1959 - Present
        </div>
        <div className="m-2 flex">
          <span className="font-bold flex">
            <FaUsers className="mr-2 mt-1 pe-1" />
            Children
          </span>
          <span className="ml-2"> {familyMember.children?.length} </span>
        </div>
      </div>
      <div
        className={`hidden md:flex w-[90%] ${
          isFullScreen
            ? "fixed inset-0 z-50 bg-white overflow-y-auto md:w-screen h-screen mx-2 md:mt-24"
            : "md:h-[75vh] md:w-3/4 m-2 md:mt-28"
        }  border   md:mb-10 shadow-md  rounded-md  full-screen-div`}
      >
        {!isFullScreen ? (
          <FaExpand
            className={`m-2 w-6 h-6 mr-auto hidden md:block `}
            onClick={handleFullScreenClick}
          />
        ) : (
          <FaCompress
            className={`m-2 w-5 h-5 mr-auto hidden md:block `}
            onClick={handleFullScreenClick}
          />
        )}

        <div id="treeWrapper" className="h-full w-full">
          <Tree
            data={family}
            pathFunc="step"
            orientation="vertical"
            translate={{ x: window.innerWidth / 2, y: 120 }}
            zoom={1}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
