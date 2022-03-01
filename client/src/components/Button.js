import React from "react";

function Button({ title, width, ...props }) {
  return (
    <div
      {...props}
      type="submit"
      className={`${width} p-1 py-2 rounded-lg text-md font-medium transition duration-500 cursor-pointer text-center bg-gray-100 dark:bg-[#20262d]  hover:bg-gray-200 hover:dark:bg-[#31363D] `}
    >
      {title}
    </div>
  );
}

export default Button;
