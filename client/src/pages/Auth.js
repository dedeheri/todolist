import React, { useEffect, useState } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";

// components
import Button from "../components/Button";
import AuthLayout from "../components/AuthLayout";

// redux
import { getLoggin, getRegister } from "../redux/action/authorization";
import loopError from "../validation/form";
import borderValidation from "../validation/borderValidation";
import Input from "../components/Input";
import InputPassword from "../components/InputPassword";

function Auth() {
  const location = useLocation();

  const [show, setShow] = useState(true);
  const [showRepeat, setShowRepeat] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [errorFormEmailLogin, setErrorFormEmailLogin] = useState(false);
  const [errorFormPasswordLogin, setErrorFormPasswordLogin] = useState(false);

  const [errorFormEmailRegister, setErrorFormEmailRegister] = useState(false);
  const [errorFormPasswordRegister, setErrorFormPasswordRegister] =
    useState(false);
  const [errorFormRepeatPasswordRegister, setErrorFormRepeatPasswordRegister] =
    useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    login: { message, error },
    register: { error: errorRegister, success },
  } = useSelector((state) => state.authorization);

  function handleLogIn(e) {
    e.preventDefault();
    dispatch(getLoggin(email, password));
  }

  function handleRegister(e) {
    e.preventDefault();
    dispatch(getRegister(email, password, repeatPassword));
    if (success?.length > 0) {
      navigate("/login");
    }
  }

  useEffect(() => {
    const pathnameURL = location.pathname;
    loopError({
      error,
      errorRegister,
      pathnameURL,
      setErrorFormEmailLogin,
      setErrorFormPasswordLogin,
      setErrorFormEmailRegister,
      setErrorFormPasswordRegister,
      setErrorFormRepeatPasswordRegister,
    });
  }, [error, errorRegister]);

  switch (location.pathname) {
    case "/login":
      return (
        <AuthLayout>
          <div className="space-y-3 mt-4">
            <Input
              border={errorFormEmailLogin}
              onChange={(e) => setEmail(e.target.value)}
            />

            <InputPassword
              placeholder="Password"
              border={errorFormPasswordLogin}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-end">
              <Link
                to={"/forgot-password"}
                className="hover:bg-gray-100 hover:dark:bg-[#31363D]  transition duration-300 rounded-md px-1 cursor-pointer"
              >
                Forgot Password ?
              </Link>
            </div>
            {borderValidation(error)}
            <Button onClick={handleLogIn} title={"Login"} />
          </div>
        </AuthLayout>
      );
    case "/register":
      return (
        <AuthLayout>
          <div className="space-y-3 mt-4">
            <Input
              border={errorFormEmailRegister}
              onChange={(e) => setEmail(e.target.value)}
            />

            <InputPassword
              placeholder="Password"
              border={errorFormPasswordRegister}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputPassword
              placeholder="Repeat Password"
              border={errorFormRepeatPasswordRegister}
              onChange={(e) => setRepeatPassword(e.target.value)}
            />

            {borderValidation(errorRegister)}

            <Button onClick={handleRegister} title={"Register"} />
          </div>
        </AuthLayout>
      );

    default:
      return "error";
  }
}

export default Auth;
