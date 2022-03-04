import React from "react";
import { useSelector } from "react-redux";
import Add from "../components/Add";
import Card from "../components/Card";

const Archive = () => {
  const { menu } = useSelector((state) => state.style);

  const { grid } = useSelector((state) => state.style);
  const {
    loading,
    success: { task },
    add: { message, error },
  } = useSelector((state) => state.task);

  const colsView = "columns-2 md:columns-4 lg:colums-5 gap-2 space-y-2";
  const listView = "grid gap-2 grid-cols-1";
  return (
    <div className="md:m-8 mt-8 px-3 w-full md:pl-64 transition duration-500">
      <div className={grid ? colsView : listView}>
        {task?.data?.map(
          (x, i) =>
            x.archive == true && (
              <Card
                key={i}
                label={x?.label}
                grid={grid}
                icons={x?.label?.icons}
                content={x.content}
                date={x.date}
                title={x.title}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Archive;
