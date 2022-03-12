import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

import "animate.css";

// icons
import { RiMailSendLine } from "react-icons/ri";
import { CgSpinner } from "react-icons/cg";

import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../redux/action/authorization";

function ForgotPassword() {
  const dispatch = useDispatch();
  const {
    forgot: { message, isFetching, error },
  } = useSelector((state) => state.authorization);

  const [border, setBorder] = useState(false);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    if (error?.email?.msg) {
      setBorder(true);
    }
  }, [error]);

  function handleForgot(e) {
    e.preventDefault();
    dispatch(forgotPassword(email));
  }

  function handleError() {
    if (typeof error === "object") {
      return (
        error?.email && <p className="w-56 text-red-500">{error?.email?.msg}</p>
      );
    }
    if (typeof error === "string") {
      return error && <p className="w-56 text-red-500">{error}</p>;
    }
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
                  <RiMailSendLine fontSize={25} />
                  {message?.message}
                </div>
              )}
              <Input
                border={border}
                onChange={(e) => setEmail(e.target.value)}
              />

              {handleError()}

              {isFetching ? (
                <div className="p-1 py-2 rounded-lg text-md font-medium transition duration-500 cursor-no-drop  bg-green-600 hover:bg-green-700 ">
                  <div className="flex items-center justify-center space-x-2 ">
                    <CgSpinner fontSize={20} className="animate-spin" />
                    <p>Loading</p>
                  </div>
                </div>
              ) : (
                <Button title={"Submit"} onClick={handleForgot} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
