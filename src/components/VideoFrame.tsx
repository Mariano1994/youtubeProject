interface VideoFrameProps {
  videoId: string;
}

function VideoFrame({ videoId }: VideoFrameProps) {
  return (
    <>
      <iframe
        className="rounded-2xl w-[950px] h-[560px] 2xl:w-[1300px] 2xl:h-[730px]"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </>
  );
}

export default VideoFrame;
