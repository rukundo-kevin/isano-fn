import userImage from "../images/droplet.png";

const Profile = () => {
  return (
    <div className="flex">
      <div
        className="flex flex-col  items-center font-[Poppins] text-gray-900 dark:text-white p-2
		 md:dark:border  rounded-m h-3/5 ml-4 mt-28 w-1/3 border shadow-md text-xl"
      >
        <img src={userImage} className="w-1/2 h-1/3" alt="User Profile" />
        <div className="m-2 mt-16">
          <span className="font-bold">Gender</span>: Female
        </div>
        <div className="m-2">
          <span className="font-bold">Born</span> : 1959 - Present
        </div>
        <div className="m-2">
          <span className="font-bold">Children</span> : 3
        </div>
      </div>

      <div className="flex w-2/3"></div>
    </div>
  );
};

export default Profile;
