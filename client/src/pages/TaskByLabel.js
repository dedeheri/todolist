import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Add from "../components/Add";
import Card from "../components/Card";
import { useParams } from "react-router-dom";
import { getTaskByLabels } from "../redux/action/task";
import NoData from "../components/NoData";

function TaskByLabel() {
  const { slug } = useParams();
  const { menu } = useSelector((state) => state.style);
  const { grid } = useSelector((state) => state.style);
  const {
    loading,
    success: { task },
    add: { message, error },
    byLabel: { task: taskByLabel, message: messageInLabel },
  } = useSelector((state) => state.task);

  const dispatch = useDispatch();

  console.log(taskByLabel);

  useEffect(() => {
    dispatch(getTaskByLabels(slug));
  }, [slug]);

  console.log(taskByLabel?.data?.length);

  const colsView = "columns-2 md:columns-4 lg:colums-5 gap-2 space-y-2";
  const listView = "grid gap-2 grid-cols-1";
  return (
    <div
      className={`md:m-8 mt-8 px-3 w-full md:pl-64 transition duration-500 ${
        menu ? "animate-slide-in " : ""
      } `}
    >
      {taskByLabel?.data?.length == 0 ? (
        <NoData />
      ) : (
        <div className={grid ? colsView : listView}>
          {taskByLabel?.data?.map((x, i) => (
            <Card
              key={i}
              label={x?.label}
              grid={grid}
              icons={x?.label?.icons}
              content={x.content}
              date={x.date}
              title={x.title}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TaskByLabel;
