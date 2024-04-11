import { useContext } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { UserContext } from "../hooks/useAuth";
import { useAppDispatch } from "../redux/hook";
import { logout as logoutAction } from "../redux/features/auth.feature";
// import { useDispatch, useSelector } from "react-redux";
// import { logout as logoutAction } from '../redux/features/auth.feature';

function ProfileDropdown({
  handleShowProfileDropdown,
  userData,
}: {
  handleShowProfileDropdown: any;
  userData: any;
}) {
  const { logout, user } = useContext(UserContext);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { id: userId } = JSON.parse(localStorage.getItem('user'));

  const handleClick = async () => {
    dispatch(logoutAction());
    await logout();
    navigate("/login");
  };

  return (
    <div className="w-screen h-screen fixed top-0 left-0 z-50 px-4">
      <div
        className="bg-dark-20 w-full h-full absolute top-0 left-0 z-1"
        role="button"
        aria-label="background"
        tabIndex={0}
        onClick={handleShowProfileDropdown}
        onKeyDown={handleShowProfileDropdown}
        data-testid="keyClick"
      />
      <div className="absolute top-[50px] -right-1 left-0 ml-auto px-2 md:mx-0 md:left-auto md:right-0 z-2  w-full max-w-[220px] h-[calc(100%-70px)]">
        <div className="flex flex-col flex-nowrap w-full h-max max-h-full bg-white shadow-md border  dark:border-0 dark:bg-dark-tertiary rounded-[10px]">
          <div className="flex flex-col w-full p-3 border-border-dark dark:border-white border-b-[0.5px]">
            {userData && userData?.lastname}
            <p className="font-bold text-sm text-gray-700 dark:text-gray-300">
              {user?.email}
            </p>
          </div>
          <div
            className="flex flex-col w-full overflow-auto"
            data-testid="notificationsContainer"
          >
            <div className="w-full border-border-dark dark:border-white border-b-[0.5px]">
              <div className="flex flex-row justify-between align-center gap-x-[20px] ">
                <div className="flex flex-col w-full gap-[5px] cursor-pointer">
                  <Link
                    onClick={handleShowProfileDropdown}
                    to="/profile"
                    // to={`/dashboard/profile/${userId}`}
                    className="font-semibold text-gray-600 dark:text-white px-4 py-2 hover:bg-primary hover:text-white dark:hover:bg-gray-300 dark:hover:text-gray-900"
                  >
                    Profile
                  </Link>
                  <Link
                    onClick={handleShowProfileDropdown}
                    to="settings"
                    className="font-semibold text-gray-600 dark:text-white px-4 py-2 pb-4 hover:bg-primary hover:text-white dark:hover:bg-gray-300 dark:hover:text-gray-900"
                  >
                    Preferences
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-full p-3 flex flex-row align-center justify-start text-gray-900 dark:text-gray-100 dark:hover:bg-gray-300 dark:hover:text-gray-900  hover:bg-primary hover:rounded-b-[10px] hover:text-white "
            onClick={handleClick}
          >
            <FaSignOutAlt className="w-4 h-4 mt-1 cursor-pointer " />
            <p className="font-boldml-1 cursor-pointer">Sign out</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDropdown;
