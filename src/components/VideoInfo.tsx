import { useState } from "react";
import { DateFormatterFns, truncatDescription } from "../utils/helperFunctions";
import { VideoProps } from "../utils/interfaces";

function VideoInfo({ video }: VideoProps) {
  const [showAllDescription, setShowAllDescription] = useState(false);
  // Function to show all description info
  const handleShowAllDescription = () => {
    setShowAllDescription(true);
  };
  // Function to show less description info
  const handleShowLessDescription = () => {
    setShowAllDescription(false);
  };

  return (
    <div className="mt-4 w-full py-2 px-4  bg-gray-100 rounded-lg">
      <span className="font-bold text-sm">
        {Number(video?.statistics.viewCount) / 1000} views,
      </span>
      <span className="font-bold text-sm">
        {" "}
        {DateFormatterFns(new Date(), new Date())}
      </span>

      {!showAllDescription ? (
        <p className="mt-1">
          {truncatDescription(String(video?.snippet?.description), 250)}{" "}
          <span
            className="font-semibold hover:cursor-pointer"
            onClick={handleShowAllDescription}
          >
            ...more
          </span>
        </p>
      ) : (
        <>
          <p className="mt-1">{video?.snippet.description}</p>
          <span
            className="font-bold hover:cursor-pointer text-sm"
            onClick={handleShowLessDescription}
          >
            Show less
          </span>
        </>
      )}
    </div>
  );
}

export default VideoInfo;
