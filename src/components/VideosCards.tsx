import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API } from "../utils/conts";
import { useToggleMenu } from "../context/MenuContext";

function VideosCards() {
  const [videos, setVideos] = useState([]);
  const { isMenuExpanded } = useToggleMenu();

  useEffect(() => {
    async function getVideos() {
      const response = await fetch(YOUTUBE_API);
      const data = await response.json();
      console.log(data.items);
      setVideos(data.items);
    }

    getVideos();
  }, []);

  return (
    <ul className=" mt-10 flex flex-wrap gap-4">
      {videos?.map((video: any) => (
        <VideoCard
          video={video}
          key={video.id}
          isMenuExpanded={isMenuExpanded}
        />
      ))}
    </ul>
  );
}

export default VideosCards;
