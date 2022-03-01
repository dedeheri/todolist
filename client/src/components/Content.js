import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { data } from "../json";
import Card from "./Card";
import { RiPushpinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "../redux/action/task";

const Content = () => {
  const location = useLocation();

  const colsView = "grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
  const listView = "grid gap-2 grid-cols-1";

  const { grid } = useSelector((state) => state.style);
  const {
    loading,
    success: { task },
  } = useSelector((state) => state.task);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTask());
  }, []);

  console.log(task);

  switch (location.pathname) {
    case "/":
      return (
        <div className="px-1 mt-5 ">
          {task?.data?.slice(0, 1).map(
            (c, i) =>
              c.pins && (
                <div
                  key={i}
                  className="mb-2  flex items-center space-x-1 text-gray-600"
                >
                  <RiPushpinLine fontSize={18} />
                  <p className="text-lg ">Pins</p>
                </div>
              )
          )}
          <div className={grid ? colsView : listView}>
            {task?.data?.map(
              (x, i) =>
                x.pins && (
                  <Card
                    key={i}
                    label={x?.label}
                    grid={grid}
                    icons={x?.label?.icons}
                    title={x.content}
                    date={x.date}
                  />
                )
            )}
          </div>

          {task?.data
            ?.slice(0, 1)
            .map(
              (c, i) =>
                c.pins && (
                  <div
                    key={i}
                    className="border-t border-white dark:border-[#30363d] my-5 "
                  />
                )
            )}
          <div className={grid ? colsView : listView}>
            {task?.data?.map(
              (x, i) =>
                x.pins == null && (
                  <Card
                    key={i}
                    label={x?.label}
                    grid={grid}
                    icons={x?.label?.icons}
                    title={x.content}
                    date={x.date}
                  />
                )
            )}
          </div>
        </div>
      );
    case "/tomorrow":
      return <div className="px-1 mt-5 "></div>;

    default:
      return "error";
  }
};

export default Content;
