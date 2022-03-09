import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "../components/Card";
import CardLoading from "../components/CardLoading";
import Layout from "../components/Layout";
import NoArchive from "../components/NoArchive";
import { getTaskByArchive } from "../redux/action/task";

const Archive = () => {
  const dispatch = useDispatch();

  const { grid } = useSelector((state) => state.style);
  const {
    getByArchive: { archive, message, loading },
    archive: { message_archive },
    pin: { message_pin },
  } = useSelector((state) => state.task);

  useEffect(() => {
    dispatch(getTaskByArchive());
  }, [message_pin, message_archive]);

  if (loading) {
    return <CardLoading />;
  }

  const colsView = "columns-2 md:columns-4 lg:colums-5 gap-2 space-y-2";
  const listView = "grid gap-2 grid-cols-1";
  return (
    <Layout>
      <div className="md:m-8 mt-8 px-3 w-full md:pl-64 transition duration-500">
        {message && <NoArchive />}
        <div className={grid ? colsView : listView}>
          {archive?.data?.map(
            ({
              _id,
              label,
              content,
              startDate,
              endDate,
              title,
              archive,
              time,
            }) => (
              <Card
                id={_id}
                key={_id}
                label={label}
                grid={grid}
                content={content}
                startDate={startDate}
                endDate={endDate}
                title={title}
                archives={archive}
                time={time}
              />
            )
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Archive;
