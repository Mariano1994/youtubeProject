import { Dot, EllipsisVertical } from "lucide-react";
import { Link } from "react-router-dom";
import { VideoProps } from "../utils/interfaces";
import { formatNumberToK, truncatDescription } from "../utils/helperFunctions";

function VideoCardSuggestions({ video }: VideoProps) {
  return (
    <Link
      to={`/watch?v=${video.id}`}
      className="group flex items-start justify-between gap-3 
     hover:cursor-pointer mt-4 ml:max-w-[330px] mr-5"
    >
      <img
        src={video?.snippet?.thumbnails?.medium.url}
        alt="image"
        width={190}
        className="rounded-lg group-hover:rounded-none"
      />

      <div className="flex items-start gap-1  ">
        <div className="flex flex-col flex-1">
          <span className="font-semibold text-sm  ">
            {truncatDescription(video.snippet.title, 60)}...
          </span>
          <span className="text-xs  text-gray-500">
            {video.snippet.channelTitle}
          </span>
          <div className="flex text-xs text-gray-500 items-center ">
            <span>
              {formatNumberToK(Number(video.statistics.viewCount))} views
            </span>
            <Dot />
            <span> 8 hours ago</span>
          </div>
        </div>
        <EllipsisVertical
          size={19}
          className="text-gray-700 hover:cursor-pointer"
        />
      </div>
    </Link>
  );
}

export default VideoCardSuggestions;
