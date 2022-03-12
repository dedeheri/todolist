import React from "react";

function NotFound() {
  return (
    <div className={true ? "dark" : "light"}>
      <div className="font-roboto bg-white  text-black dark:bg-[#0d1117] dark:text-white  flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-9xl font-bold">404</p>
          <p className="text-2xl">PAGE NOT FOUND</p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
