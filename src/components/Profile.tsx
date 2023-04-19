import { useLocation, useParams } from "react-router";
import { FaMale, FaUsers, FaGenderless, FaUser } from "react-icons/fa";
import { items } from "../constants/family-folderview";

const Profile = () => {
  const { pathname } = useLocation();

  interface Props {
    index: string;
    isFolder?: boolean;
    dead?: boolean;
    children?: never[];
    data: string;
    born: string;
    photo?: string;
  }
  interface Member {
    [key: string]: Props;
  }

  const familyItems = items as unknown as Member;
  let familyMember: Props;
  const { id } = useParams();
  if (pathname == "/family") {
    const firstElement = familyItems[Object.keys(familyItems)[1]];
    familyMember = firstElement;
  } else {
    familyMember = familyItems[id as keyof typeof familyItems];
  }

  return (
    <div className="flex flex-col md:flex-row w-full overflow-hidden">
      <div
        className="flex flex-col justify-start items-center font-[Poppins] text-gray-900 w-[90%] md:w-1/3   p-2
		   rounded-m h- ml-2    md:ml-4  mt-28  border shadow-md text-lg"
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
          <span className="font-bold flex">
            <FaMale /> Gender
          </span>
          : Female
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

      <div className="flex w-[90%] md:w-3/4 border m-2 h-5/6 shadow-md  rounded-md md:mt-28 "></div>
    </div>
  );
};

export default Profile;
