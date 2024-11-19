import React from "react";
import { Smiley, User } from "@phosphor-icons/react";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { useComments } from "../context/CommentsContext";

function AddNewReply({ onCancelReply, commentId }: any) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [reply, setReply] = useState("");

  const { handlerAddNewReply } = useComments();

  const onInputNewReply = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReply(event.target.value);
  };

  const handlerNewReply = () => {
    handlerAddNewReply(commentId, reply);
    onCancelReply(false);
  };

  return (
    <div className="flex gap-2 items-start mt-5 w-full text-sm font-normal  ">
      <div className="w-12 h-11 rounded-full bg-gray-200 flex items-center justify-center shadow-sm">
        <User size={22} />
      </div>
      <div className=" w-[100%]">
        <input
          type="text"
          value={reply}
          onChange={onInputNewReply}
          placeholder="Add a reply..."
          className="w-[100%]  border-b-[1.4px] border-gray-500  outline-none py-2 placeholder:text-gray-400 text-black"
        />

        <div className=" mt-4 flex items-center justify-between mb-2">
          <div>
            <div
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 py-2 px-2 cursor-pointer rounded-full"
            >
              <Smiley size={24} />
            </div>

            {/* EMOI PICKE LIBRARY */}
            {showEmojiPicker && (
              <div className="absolute">
                <EmojiPicker
                  height={400}
                  reactionsDefaultOpen
                  allowExpandReactions
                />
              </div>
            )}
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => onCancelReply(false)}
              className="py-2 px-4 font-bold rounded-full hover:bg-gray-200  "
            >
              Cancel
            </button>
            <button
              onClick={handlerNewReply}
              disabled={!reply ? true : false}
              className={`py-2 px-4  rounded-full text-gray-400 font-bold disabled:cursor-not-allowed ${
                reply ? "text-white bg-blue-600 hover:bg-blue-700" : null
              }`}
            >
              Reply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewReply;
