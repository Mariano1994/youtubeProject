import CommentContainer from "../context/CommentContainer";
import { VideoProps } from "../utils/interfaces";
import AddNewComment from "./AddNewComment";

function CommnentsSection({ video }: VideoProps) {
  return (
    <div className="w-full">
      {/* Comments count */}
      <span>{video?.statistics.commentCount} Comments</span>
      <AddNewComment />
      <CommentContainer />
    </div>
  );
}

export default CommnentsSection;
