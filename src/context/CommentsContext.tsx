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
  handlerAddNewComment: React.Dispatch<React.SetStateAction<string>>;
  handlerAddNewReply: any;
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
  handlerAddNewReply: () => {},
});

export function CommentContextProvider({ children }: ChildrenPros) {
  const [comments, setComments] = useState(commentsData);

  // FUNCTION DO ADD NEW COMMENT
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

  // FUNCTION TO ADD REPLY IN A COMMENT
  const handlerAddNewReply = (id: string, data: string) => {
    const reply = comments.map((comment) =>
      comment.id === id
        ? {
            ...comment,
            replies: [
              {
                id: crypto.randomUUID(),
                username: faker.person.fullName(),
                userimage: faker.image.avatar(),
                comment: data,
              },
              ...comment.repleis,
            ],
          }
        : comment
    );

    setComments(reply);
  };

  return (
    <CommentsContext.Provider
      value={{ comments, handlerAddNewComment, handlerAddNewReply }}
    >
      {children}
    </CommentsContext.Provider>
  );
}

export function useComments() {
  return useContext(CommentsContext);
}
