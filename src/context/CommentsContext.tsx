import { createContext, useContext, useState } from "react";
import { commentsData } from "../utils/commentsMockData";
import { faker } from "@faker-js/faker";

const commentsInfo = commentsData;

interface ChildrenPros {
  children: React.ReactNode;
}

interface CommentsPropsData {
  comments: any;
  handlerAddNewComment: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        userimage: string;
        username: string;
        comment: string;
        repleis: never[];
      }[]
    >
  >;
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
    const username = faker.person.fullName();
    const userimage = faker.image.avatar();

    setComments([
      {
        id: crypto.randomUUID(),
        username: username,
        userimage: userimage,
        comment: data,
        repleis: [],
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
