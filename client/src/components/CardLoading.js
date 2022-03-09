import React from "react";

function CardLoading() {
  return (
    <div className="md:m-8 mt-8 px-3 w-full md:pl-64">
      <div className="mt-10 animate-pulse  grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="h-48 rounded-lg bg-gray-100 dark:bg-[#20262d]"></div>
        <div className="h-48 rounded-lg bg-gray-100 dark:bg-[#20262d]"></div>
        <div className="h-48 rounded-lg bg-gray-100 dark:bg-[#20262d]"></div>
        <div className="h-48 rounded-lg bg-gray-100 dark:bg-[#20262d]"></div>
      </div>
      <div className="mt-5 animate-pulse grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="h-48 rounded-lg bg-gray-100 dark:bg-[#20262d]"></div>
        <div className="h-48 rounded-lg bg-gray-100 dark:bg-[#20262d]"></div>
        <div className="h-48 rounded-lg bg-gray-100 dark:bg-[#20262d]"></div>
        <div className="h-48 rounded-lg bg-gray-100 dark:bg-[#20262d]"></div>
      </div>
    </div>
  );
}

export default CardLoading;
