import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API } from "../utils/conts";
import ShimmerUIWrapper from "./ShimmerUIWrapper";

function VideosCards() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getVideos() {
      setIsLoading(true);
      const response = await fetch(YOUTUBE_API);
      const data = await response.json();
      setVideos(data.items);

      setIsLoading(false);
    }

    getVideos();
  }, []);

  if (isLoading)
    return (
      <ul className=" mt-10 flex flex-wrap gap-4">
        <ShimmerUIWrapper />
      </ul>
    );

  return (
    <>
      <ul className=" mt-10 flex flex-wrap gap-4">
        {videos?.map((video: any) => (
          <VideoCard video={video} key={video.id} />
        ))}
      </ul>
    </>
  );
}

export default VideosCards;
