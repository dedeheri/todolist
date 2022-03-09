import React from "react";

import { BiLabel } from "react-icons/bi";
const NoData = () => {
  return (
    <div className="flex flex-col mt-28">
      <BiLabel className="mx-auto text-gray-400 text-9xl" />
      <p className="text-2xl md:text-4xl mx-auto text-gray-400">
        No data in label
      </p>
    </div>
  );
};

export default NoData;
