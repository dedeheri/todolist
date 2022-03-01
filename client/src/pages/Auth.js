import React, { useState } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../components/Button";
import { getLoggin } from "../redux/action/authorization";

function Auth() {
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    success: { message },
    failed: { error, validation },
  } = useSelector((state) => state.authorization);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getLoggin(email, password));
    if (message.message === "success") {
      navigate("/");
    }
  };

  return (
    <div className="font-roboto bg-white  text-black dark:bg-[#0d1117] dark:text-white  h-screen">
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col rounded-xl  py-10 px-28 space-y-3">
          <h1 className="font-semibold text-4xl text-center mb-10">
            Todo List
          </h1>

          {validation &&
            validation.map((s, i) => (
              <div key={i}>
                <p>{s.msg}</p>
              </div>
            ))}

          {error && <p>{error}</p>}
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="border outline-none dark:border-[#30363d] bg-transparent  rounded-lg px-3 h-10"
            placeholder="Email"
            type="email"
          />

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
          <Button onClick={handleSubmit} title={"Login"} />
        </div>
      </div>
    </div>
  );
}

export default Auth;
