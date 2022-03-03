import React from "react";

import ImageNoData from "../assets/images/nodata.png";

const NoData = () => {
  return (
    <div className="flex justify-center">
      <img src={ImageNoData} className="w-1/4 brightness-50" />
    </div>
  );
};

export default NoData;
