import { Dot, EllipsisVertical } from "lucide-react";
import { Link } from "react-router-dom";
import { VideoProps } from "../utils/interfaces";
import { useToggleMenu } from "../context/MenuContext";
import { formatNumberToK } from "../utils/helperFunctions";

// import channleImage from "../assets/einerd.jpg";

function VideoCard({ video }: VideoProps) {
  const { isMenuExpanded } = useToggleMenu();
  return (
    <Link
      to={`/watch?v=${video.id}`}
      className={`group ${
        isMenuExpanded ? "max-w-[330px]" : "max-w-[276px]"
      }   hover:cursor-pointer mt-4 ml:max-w-[330px]`}
    >
      <img
        src={video?.snippet?.thumbnails?.medium.url}
        alt="image"
        width={video?.snippet?.thumbnails?.medium?.width}
        height={video?.snippet?.thumbnails?.medium?.height}
        className="rounded-2xl group-hover:rounded-none"
      />
      <div className="flex items-start gap-2 mt-3 ">
        {/* <img
          src={channleImage}
          alt="channeImahe"
          className="h-10 w-10 rounded-full "
        /> */}

        <div className="flex flex-col flex-1">
          <span className="font-bold text-lg mb-1 ">{video.snippet.title}</span>
          <span className="text-sm font-semibold text-gray-500">
            {video.snippet.channelTitle}
          </span>
          <div className="flex text-sm font-semibold text-gray-500 items-center ">
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

export default VideoCard;
