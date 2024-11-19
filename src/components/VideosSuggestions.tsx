import { useVideos } from "../context/VideosContext";
import ShimmerUIWrapper from "./ShimmerUIWrapper";
import VideoCardSuggestions from "./VideoCardSuggestions";

function VideosSuggestions() {
  const { videos, isLoading } = useVideos();

  if (isLoading)
    return (
      <ul className=" mt-10 flex flex-wrap gap-4">
        <ShimmerUIWrapper />
      </ul>
    );

  return (
    <ul className="flex flex-col -mt-4">
      {videos?.map((video: any) => (
        <VideoCardSuggestions video={video} key={video.id} />
      ))}
    </ul>
  );
}

export default VideosSuggestions;
