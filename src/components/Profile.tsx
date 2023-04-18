import userImage from "../images/droplet.png";
import { FaMale, FaUsers, FaGenderless } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="flex flex-col md:flex-row w-full overflow-hidden">
      <div
        className="flex flex-col  items-center font-[Poppins] text-gray-900 w-[90%] md:w-1/3   p-2
		   rounded-m h-3/5 ml-2    md:ml-4  mt-28  border shadow-md text-xl"
      >
        <img src={userImage} className="w-1/2 h-1/3" alt="User Profile" />
        <div className="m-2 mt-16 flex fle">
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
          : 3
        </div>
      </div>

      <div className="flex w-[90%] md:w-3/4 border m-2 h-5/6 shadow-md  rounded-md md:mt-28 "></div>
    </div>
  );
};

export default Profile;
