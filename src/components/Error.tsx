import { useNavigate } from "react-router-dom";
import NotFoundImg from "../assets/NotFoundImg.png";
import NavBar from "../_layouts/Nav";
import DashHeader from "../components/DashboardHeader";
import Sidebar from "../_layouts/Sidebar";
import React from "react";

function Error() {
  const navigate = useNavigate();
  const [nav, setNav] = React.useState(false);

  const handleClick = () => setNav(!nav);
  const navigateHome = () => {
    navigate("/");
  };
  const isDashboard = window.location.href.includes("dashboard");
  console.log('error reached here')
  return (
    <>
      {
        /* { Check if route includes 'dashboard'} */
        !isDashboard ? (
          <NavBar />
        ) : (
          <>
            <DashHeader />
            <Sidebar toggle={handleClick} style="hidden lg:flex" />
          </>
        )
      }
      <div
        className={`
        ${isDashboard ? "ml-20" : ""}
        errorImg flex items-center justify-center h-screen w-screen text-center`}
      >
        <div>
          <img
            src={NotFoundImg}
            className="max-w-36 max-h-32 md:max-w-44 md:max-h-40 lg:max-w-52 lg:max-h-48 xl:max-w-2xl xl:max-h-96"
            alt="404"
          />
        </div>
        <div className="max-w-screen-md  text-gray-600">
          <h1 className="font-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            Page Not Found
          </h1>
          <p className="my-3 px-8 md:px-14 lg:px-0">
            error_page_paragraph
          </p>
          <button
            onClick={navigateHome}
            className="mt-2  px-8 text-xl font-bold"
          >
            {"Back Home"}
          </button>
        </div>
      </div>
    </>
  );
}

export default Error;
