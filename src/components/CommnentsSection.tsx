import { VideoProps } from "../utils/interfaces";
import AddNewComment from "./AddNewComment";

function CommnentsSection({ video }: VideoProps) {
  return (
    <>
      {/* Comments count */}
      <span>{video?.statistics.commentCount} Comments</span>
      <AddNewComment />
    </>
  );
}

export default CommnentsSection;
