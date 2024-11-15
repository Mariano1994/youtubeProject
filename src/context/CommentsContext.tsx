import { createContext, useContext, useState } from "react";
import { commentsData } from "../utils/commentsMockData";
import { faker } from "@faker-js/faker";

const commentsInfo = commentsData;

interface ChildrenPros {
  children: React.ReactNode;
}

interface CommentsPropsData {
  comments: any;
  handlerAddNewComment: React.Dispatch<React.SetStateAction<string>>;
}

export const CommentsContext = createContext<CommentsPropsData>({
  comments: {
    id: "",
    username: "",
    userimage: "",
    comment: "",
    replies: [],
  },
  handlerAddNewComment: () => {},
});

export function CommentContextProvider({ children }: ChildrenPros) {
  const [comments, setComments] = useState(commentsInfo);

  const handlerAddNewComment = (data: any) => {
    setComments(() => [
      {
        id: crypto.randomUUID(),
        username: faker.person.fullName(),
        userimage: faker.image.avatar(),
        comment: data,
        replies: [],
      },
      ...comments,
    ]);
  };

  return (
    <CommentsContext.Provider value={{ comments, handlerAddNewComment }}>
      {children}
    </CommentsContext.Provider>
  );
}

export function useComments() {
  return useContext(CommentsContext);
}
