import userImage from "../images/droplet.png";
import { FaMale, FaUsers, FaGenderless, FaUser } from "react-icons/fa";

interface Props {
  index: string;
  isFolder?: boolean;
  dead?: boolean;
  children?: never[];
  data: string;
  photo?: string;
}

const Profile = ({ index, isFolder, dead, children, data, photo }: Props) => {
  return (
    <div className="flex flex-col md:flex-row w-full overflow-hidden">
      <div
        className="flex flex-col justify-start items-center font-[Poppins] text-gray-900 w-[90%] md:w-1/3   p-2
		   rounded-m h-3/4 ml-2    md:ml-4  mt-28  border shadow-md text-lg"
      >
        {photo ? (
          <img src={photo} className="w-1/2 h-1/3" alt="User Profile" />
        ) : (
          <FaUser className="w-1/2 h-1/3" />
        )}
        <div className="m-2  mt-10 flex ">
          <span className="font-bold flex">Name</span>: {data}
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
            <FaUsers className="mr-1" />
            Children
          </span>
          {children?.length}
        </div>
      </div>

      <div className="flex w-[90%] md:w-3/4 border m-2 h-5/6 shadow-md  rounded-md md:mt-28 "></div>
    </div>
  );
};

export default Profile;
