import { useState } from "react";

function InputPassword({ border, placeholder, ...rest }) {
  const [show, setShow] = useState(true);
  return (
    <div
      className={`border w-64 outline-none  bg-transparent  rounded-lg px-3 h-10 flex items-center ${
        border ? "border-red-500 " : "dark:border-[#30363d]"
      }`}
    >
      <input
        {...rest}
        className="bg-transparent outline-none "
        placeholder={placeholder}
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
  );
}

export default InputPassword;
