import React from "react";

// icons
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF, FaRegUser } from "react-icons/fa";

// router
import { NavLink } from "react-router-dom";

// toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthLayout = ({ children }) => {
  const activeLink =
    "text-lg hover:bg-gray-100 hover:dark:bg-[#31363D] bg-gray-100 dark:bg-[#20262d] transition duration-300 rounded-md px-3 py-1";
  const nonActiveLink =
    "text-gray-500 text-lg hover:bg-gray-100 hover:dark:bg-[#31363D] transition duration-300 rounded-md px-3 py-1";

  return (
    <div className={true ? "dark" : "light"}>
      <ToastContainer />

      <div className="font-roboto bg-white  text-black dark:bg-[#0d1117] dark:text-white h-screen">
        <div className="flex justify-center">
          <div className="flex flex-col rounded-xl py-10">
            <h1 className="font-semibold text-4xl text-center mb-10">
              Todo List
            </h1>

            <div className="flex space-x-1">
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : nonActiveLink
                }
                to={"/login"}
              >
                Login
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeLink : nonActiveLink
                }
                to={"/register"}
              >
                Register
              </NavLink>
            </div>

            {children}

            <div className="flex justify-center mt-10 ">
              <div className="flex-col flex space-y-2 w-full ">
                <p className="text-center">Login as</p>
                <div className="duration-500 cursor-pointer text-center bg-green-600 hover:bg-green-700 transition  w-full rounded-md flex items-center space-x-2 h-10 px-4">
                  <FaRegUser fontSize={25} />
                  <p>Guest</p>
                </div>
                <div className="duration-500 cursor-pointer text-center bg-green-600 hover:bg-green-700 transition  w-full rounded-md flex items-center space-x-2 h-10 px-4">
                  <AiOutlineGoogle fontSize={30} />
                  <p>Google</p>
                </div>
                <div className="duration-500 cursor-pointer text-center bg-green-600 hover:bg-green-700 transition  w-full rounded-md flex items-center space-x-2 h-10 px-4">
                  <FaFacebookF fontSize={25} />
                  <p>Facebook</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
