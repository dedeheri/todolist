import React from "react";
import { useParams } from "react-router-dom";

import ImageNoData from "../assets/images/nodata.png";

const NoData = () => {
  const { slug } = useParams();
  return (
    <div className="flex flex-col">
      <img src={ImageNoData} className="w-1/4  mx-auto " />
      <h1 className="text-center text-4xl">Data is Empety in Label {slug}</h1>
    </div>
  );
};

export default NoData;
