import { createContext, useContext, useState } from "react";
import { commentsData } from "../utils/commentsMockData";
import { faker } from "@faker-js/faker";

interface ChildrenPros {
  children: React.ReactNode;
}

interface CommentsPropsData {
  comments: {
    id: string;
    username: string;
    userimage: string;
    comment: string;
    replies?: {
      id: string;
      username: string;
      userimage: string;
      comment: string;
    }[];
  }[];
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
  comments: [
    {
      id: "",
      userimage: "",
      username: "",
      comment: "",
    },
  ],
  handlerAddNewComment: () => {},
});

export function CommentContextProvider({ children }: ChildrenPros) {
  const [comments, setComments] = useState(commentsData);

  const handlerAddNewComment = (data: any) => {
    setComments([
      {
        id: crypto.randomUUID(),
        username: faker.person.fullName(),
        userimage: faker.image.avatar(),
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
