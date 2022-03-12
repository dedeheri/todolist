import React from "react";

function Button({ title, width, ...props }) {
  return (
    <div
      {...props}
      type="submit"
      className={`${width} p-1 py-2 rounded-lg text-md font-medium transition duration-500 cursor-pointer text-center bg-green-600 hover:bg-green-700`}
    >
      {title}
    </div>
  );
}

export default Button;
