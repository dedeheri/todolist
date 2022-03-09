import React, { useEffect, useState } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

// components
import Button from "../components/Button";
import AuthLayout from "../components/AuthLayout";

// icons
import { RiErrorWarningLine } from "react-icons/ri";

// redux
import { getLoggin, getRegister } from "../redux/action/authorization";

function Auth() {
  const location = useLocation();

  const [show, setShow] = useState(true);
  const [showRepeat, setShowRepeat] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [borderRedEmail, setBorderRedEmail] = useState(false);
  const [borderRedPassword, setBorderRedPassword] = useState(false);
  const [borderRedRepeatPassword, setBorderRedRepeatPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    success: { message },
    failed: { error, validation },
    register: { error: errorRegister, success, formError },
  } = useSelector((state) => state.authorization);

  function handleLogIn(e) {
    e.preventDefault();
    dispatch(getLoggin(email, password));
    if (message.message === "success") {
      navigate("/");
    }
  }

  function handleRegister(e) {
    e.preventDefault();
    dispatch(getRegister(email, password, repeatPassword));
    if (success.length > 0) {
      navigate("/");
    }
  }

  useEffect(() => {
    for (let i = 0; i < errorRegister?.length; i++) {
      if (errorRegister[i].param === "email") {
        setBorderRedEmail(true);
      }
      if (errorRegister[i].param === "password") {
        setBorderRedPassword(true);
      }

      if (errorRegister[i].param === "repeatPassword") {
        setBorderRedRepeatPassword(true);
      }
    }

    if (typeof errorRegister === "string") {
      setBorderRedEmail(true);
    }
  }, [errorRegister]);

  function errors(errorRegister) {
    if (typeof errorRegister === "object") {
      return (
        <div className="flex space-x-2 text-red-500">
          <div className="leading-5">
            {errorRegister?.map((x, i) => (
              <p key={i}>{x.msg}</p>
            ))}
          </div>
        </div>
      );
    }

    if (typeof errorRegister == "string") {
      return (
        <div className="flex items-center space-x-2 text-red-500">
          <div className="leading-5">{errorRegister}</div>
        </div>
      );
    }
  }

  const errorsResult = errors(errorRegister);

  switch (location.pathname) {
    case "/login":
      return (
        <AuthLayout>
          <div className="space-y-3 mt-4">
            {validation &&
              validation.map((s, i) => (
                <div key={i}>
                  <p>{s.msg}</p>
                </div>
              ))}

            <input
              onChange={(e) => setEmail(e.target.value)}
              className="border w-full outline-none dark:border-[#30363d] bg-transparent  rounded-lg px-3 h-10"
              placeholder="Email"
              type="email"
            />
            {error && <p>{error}</p>}

            <div className="border dark:border-[#30363d] rounded-lg flex items-center px-3 h-10 ">
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent outline-none "
                placeholder="Password"
                type={show ? "password" : "text"}
              />
              <button onClick={() => setShow(!show)}>
                {show ? (
                  <p className="border-l dark:border-[#30363d] pl-3 cursor-pointer ">
                    Show
                  </p>
                ) : (
                  <p className="border-l dark:border-[#30363d] pl-3 cursor-pointer ">
                    Close
                  </p>
                )}
              </button>
            </div>
            <Button onClick={handleLogIn} title={"Login"} />
          </div>
        </AuthLayout>
      );
    case "/register":
      return (
        <AuthLayout>
          <div className="space-y-3 mt-4">
            <input
              onChange={(e) => setEmail(e.target.value)}
              className={`border w-full outline-none  bg-transparent  rounded-lg px-3 h-10 ${
                borderRedEmail ? "border-red-500 " : "dark:border-[#30363d]"
              }`}
              placeholder="Email"
              type="email"
            />

            <div
              className={`border w-full outline-none  bg-transparent  rounded-lg px-3 h-10 flex items-center ${
                borderRedPassword ? "border-red-500 " : "dark:border-[#30363d]"
              }`}
            >
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent outline-none "
                placeholder="Password"
                type={show ? "password" : "text"}
              />
              <button onClick={() => setShow(!show)}>
                {show ? (
                  <p className="border-l dark:border-[#30363d] pl-3 cursor-pointer ">
                    Show
                  </p>
                ) : (
                  <p className="border-l dark:border-[#30363d] pl-3 cursor-pointer ">
                    Close
                  </p>
                )}
              </button>
            </div>

            <div
              className={`border rounded-lg flex items-center px-3 h-10 ${
                borderRedRepeatPassword
                  ? "border-red-500"
                  : "dark:border-[#30363d]"
              }`}
            >
              <input
                onChange={(e) => setRepeatPassword(e.target.value)}
                className="outline-none bg-transparent text-black dark:text-white"
                placeholder="Repeat Password"
                type={showRepeat ? "password" : "text"}
              />

              <button onClick={() => setShowRepeat(!showRepeat)}>
                {showRepeat ? (
                  <p className="border-l dark:border-[#30363d] pl-3 cursor-pointer ">
                    Show
                  </p>
                ) : (
                  <p className="border-l dark:border-[#30363d] pl-3 cursor-pointer ">
                    Close
                  </p>
                )}
              </button>
            </div>

            {errorsResult}
            <Button onClick={handleRegister} title={"Register"} />
          </div>
        </AuthLayout>
      );

    default:
      return "error";
  }
}

export default Auth;
