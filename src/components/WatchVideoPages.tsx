import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MY_YOUTUBE_KEY } from "../utils/conts";
import { VideoIDPros } from "../utils/interfaces";
import EinerdImage from "../assets/einerd.jpg";
import bellImage from "../assets/bellicon.svg";
import arrowRightIcon from "../assets/arrowRightIcon.svg";
import likedIcon from "../assets/LikedVideos.svg";
import shareIcon from "../assets/shareIcon.svg";
import { ArrowLineDown, ShareFat } from "@phosphor-icons/react";
// import Sidebar from "./Sidebar";

function WatchVideoPages() {
  const [video, setVideo] = useState<VideoIDPros>();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  useEffect(() => {
    async function getVideo() {
      const videoData = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${MY_YOUTUBE_KEY}`
      );
      const videoInfo = await videoData.json();
      setVideo(videoInfo.items[0]);
      console.log(videoInfo.items[0]);
    }

    getVideo();
  }, []);
  return (
    <div className=" flex items-start gap-6 ">
      <div className="flex flex-col px-5 w-[970px] 2xl:w-[1350px]">
        <iframe
          className="rounded-2xl w-[970px] h-[560px] 2xl:w-[1350px] 2xl:h-[750px]"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <div className="flex flex-col gap-2 mt-3">
          <span className="text-xl font-extrabold">{video?.snippet.title}</span>
          <div className="flex items-center justify-between gap-3 ">
            <div className="flex items-center gap-3">
              <img
                src={EinerdImage}
                alt="channel logo"
                className="w-11 h-11 rounded-full"
              />
              <div className="flex flex-col">
                <span className="font-semibold">
                  {video?.snippet.channelTitle}
                </span>
                <span className="text-xs font-medium text-gray-600 ">
                  109k subscribers
                </span>
              </div>

              <div className="flex items-center py-2 px-4 gap-2 rounded-full bg-gray-100 ml-5 hover:bg-gray-200 hover:cursor-pointer">
                <img src={bellImage} alt="bells icon to subscribe to channel" />
                <span className="text-sm font-semibold">Subscribed</span>
                <img
                  src={arrowRightIcon}
                  alt="arrow donw to show more option to subscribe"
                  className=" rotate-90"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 ">
              <div className="flex items-center  rounded-full bg-gray-100">
                <div className="flex items-center py-2 px-4 gap-1 border-r rounded-l-full hover:bg-gray-200 hover:cursor-pointer">
                  <img src={likedIcon} alt="like button" />
                  <span className="font-semibold text-sm">15K</span>
                </div>
                <div className="py-2 px-4 rounded-r-full hover:bg-gray-200 hover:cursor-pointer">
                  <img src={likedIcon} alt="" className=" rotate-180" />
                </div>
              </div>
              <div className="flex items-center gap-2 py-2 px-4 rounded-full bg-gray-100 hover:bg-gray-200 hover:cursor-pointer">
                <ShareFat size={23} weight="thin" />
                <span className="text-sm font-semibold">Share</span>
              </div>

              <div className="flex items-center gap-2 py-2 px-4 rounded-full bg-gray-100 hover:bg-gray-200 hover:cursor-pointer">
                <ArrowLineDown size={23} weight="thin" />
                <span className="text-sm font-semibold">Download</span>
              </div>

              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 hover:bg-gray-200 hover:cursor-pointer">
                <span className="text-sm font-bold -mt-2">...</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <span>Suggestions</span>
      </div>
    </div>
  );
}

export default WatchVideoPages;
