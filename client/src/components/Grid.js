import React from "react";

function Grid({ children }) {
  return (
    <div className="flex font-roboto bg-white text-black dark:bg-[#0d1117] dark:text-white">
      {children}
    </div>
  );
}

export default Grid;
