import React, { useState } from "react";

// Emoji
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

function InputLabel() {
  const [showEmoji, setShowEmoji] = useState(false);
  const [addEmoji, setAddEmoji] = useState([]);

  return (
    <>
      <div className="p-1 border dark:border-[#30363d] rounded-lg animate-slide-down ">
        <div className="flex space-x-2">
          <button
            onClick={() => setShowEmoji(!showEmoji)}
            className="border dark:border-[#30363d] rounded-lg p-1"
          >
            {addEmoji.length == 0 ? "😄" : addEmoji.native}
          </button>

          <input className="border dark:border-[#30363d] bg-white text-black dark:bg-[#0d1117] dark:text-white rounded-lg w-[139px] outline-none px-1" />
        </div>

        <div className="flex justify-end px-1 my-3">
          <button
            type="submit"
            className=" px-3 py-1 rounded-lg hover:bg-gray-100 hover:dark:bg-[#31363D] bg-gray-100 dark:bg-[#20262d] transition duration-300"
          >
            Add Label
          </button>
        </div>
      </div>

      {showEmoji && (
        <div className="animate-slide-down ">
          <Picker
            theme={"dark"}
            style={{ position: "absolute" }}
            set={"twitter"}
            onSelect={(emoji) => setAddEmoji(emoji)}
          />
        </div>
      )}
    </>
  );
}

export default InputLabel;
