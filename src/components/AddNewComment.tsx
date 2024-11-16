import { Smiley, User } from "@phosphor-icons/react";
import { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { useComments } from "../context/CommentsContext";

function AddNewComment() {
  const [showNewCommentInput, setShowNewCommentInput] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [comment, setComment] = useState("");

  const { handlerAddNewComment } = useComments();

  const onInputNewComment = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const handlerAddNewCommentInfo = () => {
    handlerAddNewComment(comment);
    setComment("");
  };

  return (
    <div className="flex gap-2 items-start mt-5 w-full text-sm font-normal mb-8">
      <div className="w-12 h-11 rounded-full bg-gray-200 flex items-center justify-center shadow-sm">
        <User size={22} />
      </div>
      <div className=" w-full">
        <input
          type="text"
          value={comment}
          onChange={onInputNewComment}
          placeholder="Add a comment..."
          onFocus={() => setShowNewCommentInput(true)}
          className="w-full  border-b-[1.4px] border-gray-500  outline-none py-2 placeholder:text-gray-400 text-black"
        />

        {showNewCommentInput && (
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
                onClick={() => setShowNewCommentInput(false)}
                className="py-2 px-4 font-bold rounded-full hover:bg-gray-200  "
              >
                Cancel
              </button>
              <button
                onClick={handlerAddNewCommentInfo}
                disabled={!comment ? true : false}
                className={`py-2 px-4  rounded-full text-gray-400 font-bold disabled:cursor-not-allowed ${
                  comment ? "text-white bg-blue-600 hover:bg-blue-700" : null
                }`}
              >
                Comment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddNewComment;
