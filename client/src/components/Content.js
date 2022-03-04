import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Card from "./Card";
import { RiPushpinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "../redux/action/task";
import CardLoading from "./CardLoading";

const Content = () => {
  const location = useLocation();

  const colsView = "columns-2 md:columns-4 lg:colums-5 gap-2 space-y-2";
  const listView = "grid gap-2 grid-cols-1";

  const { grid } = useSelector((state) => state.style);
  const {
    loading,
    success: { task },
  } = useSelector((state) => state.task);

  const getPinsInObject = (tasks) => {
    let getOneTags = [];
    tasks?.data?.map((task) => {
      if (task.pins == true) {
        getOneTags.push(task.pins);
      }
    });

    const textPins = Object.values(getOneTags || "")
      .slice(0, 1)
      .map((_, i) => {
        return (
          <div
            key={i}
            className="mb-2  flex items-center space-x-1 text-gray-600"
          >
            <RiPushpinLine fontSize={18} />
            <p className="text-lg ">Pins</p>
          </div>
        );
      });

    const borderPins = Object.values(getOneTags || "")
      .slice(0, 1)
      .map((_, i) => {
        return <div key={i} className="border-t dark:border-[#30363d] my-5 " />;
      });

    return {
      textPins,
      borderPins,
    };
  };

  const resultTags = getPinsInObject(task);

  if (loading) {
    return <CardLoading />;
  } else {
    switch (location.pathname) {
      case "/":
        return (
          <div className="px-1 mt-5 ">
            {resultTags.textPins}
            <div className={grid ? colsView : listView}>
              {task?.data?.map(
                (x, i) =>
                  x.pins == true &&
                  x.archive == false && (
                    <Card
                      id={x._id}
                      key={i}
                      pins={x.pins}
                      label={x?.label}
                      grid={grid}
                      icons={x?.label?.icons}
                      content={x.content}
                      startDate={x.startDate}
                      endDate={x.endDate}
                      title={x.title}
                    />
                  )
              )}
            </div>

            {resultTags.borderPins}
            <div className={grid ? colsView : listView}>
              {task?.data?.map(
                (x, i) =>
                  x.pins == false &&
                  x.archive == false && (
                    <Card
                      id={x._id}
                      key={i}
                      pins={x.pins}
                      label={x?.label}
                      grid={grid}
                      icons={x?.label?.icons}
                      content={x.content}
                      startDate={x.startDate}
                      endDate={x.endDate}
                      title={x.title}
                    />
                  )
              )}
            </div>
          </div>
        );
      case "/complate":
        return <div className="px-1 mt-5 ">a</div>;

      default:
        return "error";
    }
  }
};

export default Content;
