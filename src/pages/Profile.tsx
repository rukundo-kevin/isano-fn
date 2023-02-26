import { useState } from "react";
import { useLocation, useParams } from "react-router";

import {
  FaMale,
  FaUsers,
  FaGenderless,
  FaUser,
  FaExpand,
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
        ) : (
          <FaUser className="w-1/2 h-1/3" />
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
        className={`flex w-[90%] ${
          isFullScreen
            ? "fixed inset-0 z-50 bg-white overflow-y-auto md:w-screen h-screen mx-2 md:mt-24"
            : "md:h-[75vh] md:w-3/4 m-2 md:mt-28"
        }  border   md:mb-10 shadow-md  rounded-md  full-screen-div`}
      >
        <FaExpand
          className={`m-2 w-5 h-5 mr-auto hidden md:block `}
          onClick={handleFullScreenClick}
        />
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
