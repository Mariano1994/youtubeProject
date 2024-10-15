import { Dot, EllipsisVertical } from "lucide-react";

// import channleImage from "../assets/einerd.jpg";

interface VideoProps {
  video: {
    id: string;
    snippet: {
      title: string;
      channelTitle: string;
      descriptoin: string;
      publishedAt: string;
      thumbnails: {
        default: {
          height: number;
          url: string;
          width: number;
        };
        high: {
          height: number;
          url: string;
          width: number;
        };
        medium: {
          height: number;
          url: string;
          width: number;
        };
        standard: {
          height: number;
          url: string;
          width: number;
        };
      };
    };
    statistics: {
      commentCount: string;
      favoriteCount: string;
      likeCount: string;
      viewCount: string;
    };
  };
  isMenuExpanded: boolean;
}

function VideoCard({ video, isMenuExpanded }: VideoProps) {
  return (
    <li
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
            <span>{Number(video.statistics.viewCount) / 1000} views</span>
            <Dot />
            <span> 8 hours ago</span>
          </div>
        </div>
        <EllipsisVertical
          size={19}
          className="text-gray-700 hover:cursor-pointer"
        />
      </div>
    </li>
  );
}

export default VideoCard;
