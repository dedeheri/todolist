import React, { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { invalidSignature, resetPassword } from "../redux/action/authorization";

import "animate.css";

// components
import Button from "../components/Button";
import InputPassword from "../components/InputPassword";

// icons
import { CgSpinner } from "react-icons/cg";
import { IoMdDoneAll } from "react-icons/io";

// pages
import NotFound from "./NotFound";

function ResetPassword() {
  const dispatch = useDispatch();
  const {
    reset: { message, isFetching, error, invalide_signature },
  } = useSelector((state) => state.authorization);

  const { search } = useLocation();
  const [password, setPassword] = useState(null);
  const [repeatPassword, setRepeatPassword] = useState(null);

  const [border, setBorder] = useState(false);
  const [borderRepeat, setBorderRepeat] = useState(false);

  function handleReset(e) {
    e.preventDefault();
    dispatch(resetPassword(password, repeatPassword, search));
  }

  useEffect(() => {
    dispatch(invalidSignature(search));
  }, []);

  useEffect(() => {
    if (error) {
      if (error?.password) {
        setBorder(true);
      }
      if (error?.repeatPassword) {
        setBorderRepeat(true);
      }
    }
  }, [error]);

  if (invalide_signature) {
    return <NotFound />;
  }

  return (
    <div className={true ? "dark" : "light"}>
      <div className="font-roboto bg-white  text-black dark:bg-[#0d1117] dark:text-white h-screen">
        <div className="flex justify-center">
          <div className="flex flex-col rounded-xl py-10">
            <h1 className="font-semibold text-4xl text-center mb-10">
              Todo List
            </h1>

            <div className="space-y-3 mt-4">
              {message && (
                <div className="text-green-500 flex items-center gap-2 animate__animated animate__fadeInDown">
                  <IoMdDoneAll fontSize={25} />
                  {message?.message}
                </div>
              )}

              <InputPassword
                border={border}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputPassword
                border={borderRepeat}
                placeholder="Repeat Password"
                onChange={(e) => setRepeatPassword(e.target.value)}
              />

              {error?.password && (
                <p className="w-56 text-red-500 animate__animated animate__fadeInDown">
                  {error?.password?.msg}
                </p>
              )}

              {error?.repeatPassword && (
                <p className="w-56 text-red-500 animate__animated animate__fadeInDown">
                  {error?.repeatPassword?.msg}
                </p>
              )}

              {isFetching ? (
                <div className="p-1 py-2 rounded-lg text-md font-medium transition duration-500 cursor-no-drop  bg-green-600 hover:bg-green-700 ">
                  <div className="flex items-center justify-center space-x-2 ">
                    <CgSpinner fontSize={20} className="animate-spin" />
                    <p>Loading</p>
                  </div>
                </div>
              ) : (
                <Button title={"Submit"} onClick={handleReset} />
              )}
            </div>
            {message && (
              <>
                <p className="text-center mt-10">Go to</p>
                <Link to={"/"}>
                  <p className="p-1 mt-2 py-2 text-center rounded-lg text-md font-medium transition duration-500 bg-green-600 hover:bg-green-700 ">
                    Login
                  </p>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
