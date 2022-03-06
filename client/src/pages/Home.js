import React, { useEffect, useState } from "react";

import Card from "../components/Card";
import { RiPushpinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { getTask } from "../redux/action/task";
import CardLoading from "../components/CardLoading";
import { REMOVE_MESSAGE_PINS_TASK } from "../redux/action-type";

function Main() {
  const colsView = "columns-2 md:columns-4 lg:colums-5 gap-2 space-y-2";
  const listView = "grid gap-2 grid-cols-1";

  const dispatch = useDispatch();
  const { grid, search } = useSelector((state) => state.style);
  const {
    loading,
    success: { task },
    pin: { message_pin },
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

  const [resultSearch, setResultSearch] = useState([]);

  useEffect(() => {
    const keys = ["content", "title"];

    const searchResult = task?.data?.filter((c) => {
      return keys.some((key) => {
        return c[key].toLowerCase().includes(search.toLowerCase());
      });
    });

    setResultSearch(searchResult);
  }, [task, search]);

  return (
    <div className="md:m-8 mt-8 px-5 w-full md:pl-64 duration-500">
      {loading ? (
        <CardLoading />
      ) : (
        <>
          {resultTags.textPins}
          <div className={grid ? colsView : listView}>
            {resultSearch?.map(
              (x, i) =>
                x.pins == true &&
                x.archive == false && (
                  <Card
                    id={x._id}
                    key={i}
                    pin={x.pins}
                    label={x?.label}
                    grid={grid}
                    icons={x?.label?.icons}
                    content={x.content}
                    startDate={x.startDate}
                    endDate={x.endDate}
                    time={x.time}
                    title={x.title}
                  />
                )
            )}
          </div>

          {resultTags.borderPins}
          <div className={grid ? colsView : listView}>
            {resultSearch?.map(
              (x, i) =>
                x.pins == false &&
                x.archive == false && (
                  <Card
                    id={x._id}
                    key={i}
                    pin={x.pins}
                    label={x?.label}
                    grid={grid}
                    icons={x?.label?.icons}
                    content={x.content}
                    startDate={x.startDate}
                    endDate={x.endDate}
                    time={x.time}
                    title={x.title}
                  />
                )
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Main;
