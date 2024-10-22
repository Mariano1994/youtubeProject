import { formatNumberToK } from "../utils/helperFunctions";
import bellImage from "../assets/bellicon.svg";
import arrowRightIcon from "../assets/arrowRightIcon.svg";

interface ChannelProps {
  channel: {
    id: string;
    snippet: {
      title: string;
      description: string;
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
      };
    };
    statistics: {
      subscriberCount: string;
      videoCount: string;
      viewCount: string;
    };
  };
}

function ChannelDetails({ channel }: ChannelProps) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={channel?.snippet?.thumbnails?.default?.url}
        alt="channel logo"
        className="w-11 h-11 rounded-full"
      />
      <div className="flex flex-col">
        <span className="font-semibold">{channel?.snippet.title}</span>
        <span className="text-xs font-medium text-gray-600 ">
          {formatNumberToK(Number(channel?.statistics?.subscriberCount))}{" "}
          subscribers
        </span>
      </div>

      <div className="flex items-center py-2 px-4 gap-2 rounded-full bg-gray-100 ml-4 hover:bg-gray-200 hover:cursor-pointer">
        <img src={bellImage} alt="bells icon to subscribe to channel" />
        <span className="text-sm font-semibold">Subscribed</span>
        <img
          src={arrowRightIcon}
          alt="arrow donw to show more option to subscribe"
          className=" rotate-90"
        />
      </div>
    </div>
  );
}

export default ChannelDetails;
