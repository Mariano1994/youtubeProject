import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API } from "../utils/conts";
import { useToggleMenu } from "../context/MenuContext";
import ShimmerUIWrapper from "./ShimmerUIWrapper";

function VideosCards() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { isMenuExpanded } = useToggleMenu();

  useEffect(() => {
    async function getVideos() {
      setIsLoading(true);
      const response = await fetch(YOUTUBE_API);
      const data = await response.json();
      console.log(data.items);
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
          <VideoCard
            video={video}
            key={video.id}
            isMenuExpanded={isMenuExpanded}
          />
        ))}
      </ul>
    </>
  );
}

export default VideosCards;
