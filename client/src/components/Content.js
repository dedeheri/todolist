import React from "react";
import { useLocation } from "react-router-dom";

import { data } from "../json";

import Card from "./Card";

import { RiPushpinLine } from "react-icons/ri";

const Content = ({ view }) => {
  const location = useLocation();

  const colsView = "grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
  const listView = "grid gap-2 grid-cols-1";

  switch (location.pathname) {
    case "/":
      return (
        <div className="px-1 mt-5 ">
          {data.today.slice(0, 1).map(
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
          <div className={view ? colsView : listView}>
            {data.today.map(
              (x, i) =>
                x.pins && (
                  <Card
                    key={i}
                    labels={x.labels}
                    view={view}
                    icons={x.icons}
                    title={x.title}
                    date={x.date}
                  />
                )
            )}
          </div>

          {data.today
            .slice(0, 1)
            .map(
              (c, i) =>
                c.pins && (
                  <div
                    key={i}
                    className="border-t border-white dark:border-[#30363d] my-5 "
                  />
                )
            )}
          <div className={view ? colsView : listView}>
            {data.today.map(
              (x, i) =>
                x.pins == false && (
                  <Card
                    key={i}
                    labels={x.labels}
                    view={view}
                    icons={x.icons}
                    title={x.title}
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
