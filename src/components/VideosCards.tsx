import VideoCard from "./VideoCard";
import ShimmerUIWrapper from "./ShimmerUIWrapper";
import { useVideos } from "../context/VideosContext";

function VideosCards() {
  const { videos, isLoading } = useVideos();

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
