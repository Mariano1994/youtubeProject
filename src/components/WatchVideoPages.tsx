import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { MY_YOUTUBE_KEY } from "../utils/conts";
import { ChannelProps, VideoIDPros } from "../utils/interfaces";
import likedIcon from "../assets/LikedVideos.svg";
import { ArrowLineDown, ShareFat } from "@phosphor-icons/react";
import { formatNumberToK } from "../utils/helperFunctions";
import ChannelDetails from "./ChannelDetails";
import VideoInfo from "./VideoInfo";

// import Sidebar from "./Sidebar";

function WatchVideoPages() {
  const [video, setVideo] = useState<VideoIDPros>();
  const [channel, setChennel] = useState<ChannelProps>();

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  useEffect(() => {
    async function getVideo() {
      const videoData = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${MY_YOUTUBE_KEY}`
      );
      const videoInfo = await videoData.json();
      setVideo(videoInfo.items[0]);
      // console.log(videoInfo.items[0]);
    }

    getVideo();
  }, []);

  const channelId = video?.snippet?.channelId;

  useEffect(() => {
    async function getChannelData() {
      const channelDate = await fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${MY_YOUTUBE_KEY}`
      );

      const channelInfo = await channelDate.json();
      setChennel(channelInfo.items[0]);
      console.log(channelInfo.items[0]);
    }

    getChannelData();
  }, [channelId]);

  return (
    <div className=" flex items-start gap-6 mt-4">
      <div className="flex flex-col px-5 w-[990px] 2xl:w-[1350px]">
        <iframe
          className="rounded-2xl w-[950px] h-[560px] 2xl:w-[1300px] 2xl:h-[730px]"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <div className="flex flex-col gap-2 mt-3">
          <span className="text-xl font-extrabold">{video?.snippet.title}</span>
          <div className="flex items-center justify-between">
            {channel && <ChannelDetails channel={channel} />}

            <div className="flex items-center gap-1 ">
              <div className="flex items-center  rounded-full bg-gray-100">
                <div className="flex items-center py-2 px-4 gap-1 border-r rounded-l-full hover:bg-gray-200 hover:cursor-pointer">
                  <img src={likedIcon} alt="like button" />
                  <span className="font-semibold text-sm">
                    {formatNumberToK(Number(video?.statistics.likeCount))}
                  </span>
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

        {/* Video Description */}
        {video && <VideoInfo video={video} />}

        {/* Comments */}

        <div className="mt-4 text-[1.3rem] font-extrabold">
          <span>{video?.statistics.commentCount} Comments</span>
        </div>
      </div>

      <div>
        <span>Suggestions</span>
      </div>
    </div>
  );
}

export default WatchVideoPages;
