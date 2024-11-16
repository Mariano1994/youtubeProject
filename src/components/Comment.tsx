import { ThumbsDown, ThumbsUp } from "@phosphor-icons/react";
import { CommentProps } from "../utils/interfaces";

function Comment({ comment, size }: CommentProps) {
  return (
    <div className="flex gap-2 items-start mt-5 w-full text-sm font-normal -mb-1">
      <img
        src={comment.userimage}
        height={size}
        width={size}
        alt="userimage"
        className=" rounded-full"
      />

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1">
          <span className="font-bold text-sm text-black">
            @{comment?.username}
          </span>
          <span className="text-xs text-gray-500"> 32 minutes ago</span>
        </div>
        <p className="text-black f">{comment?.comment}</p>
        <div className="flex items-center gap-2">
          <div className=" flex items-center gap-1">
            <div className=" cursor-pointer py-1 px-1 hover:bg-gray-200 rounded-full">
              <ThumbsUp weight="thin" size={24} />
            </div>
            <span>34</span>
          </div>
          <div className=" cursor-pointer py-1 px-1 hover:bg-gray-200 rounded-full">
            <ThumbsDown weight="thin" size={24} />
          </div>

          <span className="items-center justify-center py-1 px-2 hover:bg-gray-200 rounded-full flex font-bold cursor-pointer ml-2 text-center  ">
            Reply
          </span>
        </div>

        {/* <AddNewComment /> */}
      </div>
    </div>
  );
}

export default Comment;
