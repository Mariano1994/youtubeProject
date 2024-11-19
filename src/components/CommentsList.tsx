import { useComments } from "../context/CommentsContext";
import Comment from "./Comment";

function CommentsList() {
  const { comments } = useComments();
  return (
    <div className="w-full">
      {comments.map((comment: any) => (
        <div className="w-full" key={comment.id}>
          <Comment comment={comment} size={43} />
          <div className=" w-full ml-12 ">
            {comment.replies &&
              comment.replies.map((reply: any) => (
                <Comment key={reply.id} comment={reply} size={30} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CommentsList;
