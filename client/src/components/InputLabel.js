import React, { useState } from "react";

// Emoji
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import { useDispatch } from "react-redux";
import { addLabel } from "../redux/action/labels";

function InputLabel() {
  const [showEmoji, setShowEmoji] = useState(false);

  // redux
  const dispatch = useDispatch();

  // from
  const [addEmoji, setAddEmoji] = useState("😄");
  const [title, setTitle] = useState("");

  const handleAddLabel = (e) => {
    e.preventDefault();
    dispatch(addLabel(addEmoji, title));
    setShowEmoji(true);
  };

  return (
    <>
      <form
        onSubmit={handleAddLabel}
        className="p-1 rounded-lg animate-slide-down duration-500 "
      >
        <div className="flex space-x-1">
          <div
            onClick={() => setShowEmoji(!showEmoji)}
            className="border dark:border-[#30363d] rounded-lg p-1 cursor-pointer"
          >
            {addEmoji}
          </div>

          <input
            onChange={(e) => setTitle(e.target.value)}
            className="border dark:border-[#30363d]  bg-white text-black dark:bg-[#0d1117] dark:text-white rounded-lg w-[139px] outline-none px-1"
          />
        </div>

        <div className="flex justify-end px-1 my-3">
          <button
            type="submit"
            className=" px-3 py-1 rounded-lg hover:bg-gray-100 hover:dark:bg-[#31363D] bg-gray-100 dark:bg-[#20262d] transition duration-300"
          >
            Add Label
          </button>
        </div>
      </form>

      {showEmoji && (
        <div className="animate-slide-down ">
          <Picker
            theme={"dark"}
            style={{ position: "absolute" }}
            set={"twitter"}
            onSelect={(emoji) => setAddEmoji(emoji.native)}
          />
        </div>
      )}
    </>
  );
}

export default InputLabel;
