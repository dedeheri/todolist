import React, { useState } from "react";

// Emoji
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

function InputLabel() {
  const [showEmoji, setShowEmoji] = useState(false);
  const [addEmoji, setAddEmoji] = useState([]);

  return (
    <>
      <div className="p-1 border rounded-lg animate-slide-down ">
        <div className="flex space-x-2">
          <button
            onClick={() => setShowEmoji(!showEmoji)}
            className="border rounded-lg p-1"
          >
            {addEmoji.length == 0 ? "😄" : addEmoji.native}
          </button>

          <input className="border rounded-lg w-[139px] outline-none px-1" />
        </div>

        <div className="flex justify-end px-1">
          <button
            type="submit"
            className="bg-green-200 p-1 mt-1 rounded-lg hover:bg-green-300 transition duration-300"
          >
            Done
          </button>
        </div>
      </div>

      {showEmoji && (
        <div className="animate-slide-down ">
          <Picker
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
