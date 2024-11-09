import { VideoProps } from "../utils/interfaces";

function CommnentsSection({ video }: VideoProps) {
  return <span>{video?.statistics.commentCount} Comments</span>;
}

export default CommnentsSection;
