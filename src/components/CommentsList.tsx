import { useComments } from "../context/CommentsContext";
import Comment from "./Comment";

function CommentsList() {
  const { comments } = useComments();
  return (
    <div>
      {comments.map((comment: any) => (
        <div key={comment.id}>
          <Comment comment={comment} size={22} />
          <div className="ml-12">
            {comment.replies &&
              comment.replies.map((reply: any) => (
                <Comment key={reply.id} comment={reply} size={10} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentsList;
