import React from "react";

function Button({ title, width, ...props }) {
  return (
    <div
      {...props}
      type="submit"
      className={`${width} p-1 py-2 rounded-lg text-md font-medium transition duration-500 cursor-pointer text-center hover:bg-[#7EA1C9]  bg-[#8BA6C5] hover:dark:bg-[#8DA2BA]  dark:bg-[#5E7EA3]`}
    >
      {title}
    </div>
  );
}

export default Button;
