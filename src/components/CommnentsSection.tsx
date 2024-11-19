import { VideoProps } from "../utils/interfaces";
import AddNewComment from "./AddNewComment";
import CommentsList from "./CommentsList";

function CommnentsSection({ video }: VideoProps) {
  return (
    <div className="w-full">
      {/* Comments count */}
      <span>{video?.statistics.commentCount} Comments</span>
      <AddNewComment />
      <CommentsList />
    </div>
  );
}

export default CommnentsSection;
