import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API } from "../utils/conts";
interface MenuProps {
  isMenuExpanded: boolean;
}

function VideosCards({ isMenuExpanded }: MenuProps) {
  const [videos, setVideos] = useState([]);

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
