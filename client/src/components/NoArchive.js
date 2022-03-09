import React from "react";

import { BiArchiveIn } from "react-icons/bi";

const NoArchive = () => {
  return (
    <div className="flex flex-col mt-28">
      <BiArchiveIn className="mx-auto text-gray-400 text-9xl" />
      <p className="text-2xl md:text-4xl mx-auto text-gray-400">
        No archived records
      </p>
    </div>
  );
};

export default NoArchive;
