import { useEffect, useState } from "react";
import LiveChatMessage from "./LiveChatMessage";
import { faker } from "@faker-js/faker";
import { LiveCommentsLimit } from "../utils/conts";
import { HeartStraight, PaperPlaneRight, X } from "@phosphor-icons/react";
import userImage from "../assets/user.svg";

interface LiveChatMessage {
  id: string;
  userimage: string;
  message: string;
}
[];

function LiveChat() {
  const [chatMessages, setChatMessages] = useState<LiveChatMessage[]>([]);
  const [newChatMessage, setNewChatMessage] = useState("");
  const [showLiveChat, setShowLiveChat] = useState(false);

  useEffect(() => {
    const polligData = setInterval(() => {
      chatMessages.splice(LiveCommentsLimit, 1);
      setChatMessages([
        {
          id: crypto.randomUUID(),
          userimage: faker.image.avatar(),
          message: faker.word.words({ count: { min: 10, max: 20 } }),
        },
        ...chatMessages,
      ]);
    }, 1000);

    return () => clearInterval(polligData);
  }, [chatMessages]);

  const AddNewChatMesssage = (data: string) => {
    setChatMessages([
      {
        id: crypto.randomUUID(),
        userimage: userImage,
        message: data,
      },
      ...chatMessages,
    ]);
  };

  const onSetNewChatMessage = (event: any) => {
    setNewChatMessage(event.target.value);
  };

  const handlerAddNewChatMessage = () => {
    AddNewChatMesssage(newChatMessage);
    setNewChatMessage("");
  };

  const handlerShowLiveChatToggle = () => {
    setShowLiveChat((showLiveChat) => !showLiveChat);
  };

  return (
    <>
      {showLiveChat ? (
        <div className="flex flex-col border border-solid border-gray-200 mr-6 rounded-xl">
          <div className="flex items-center justify-between gap-1 py-2 px-3 border-b border-b-solid border-b-gray-200   ">
            <span className="font-light">Live chat</span>
            <div className="flex items-center justify-center p-2 rounded-full hover:bg-gray-200">
              <X
                size={25}
                weight="thin"
                className="cursor-pointer text-black"
                onClick={handlerShowLiveChatToggle}
              />
            </div>
          </div>
          <div className="   h-[32rem] py-2 overflow-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex flex-col-reverse">
            {chatMessages.map((chat) => (
              <LiveChatMessage chatMessage={chat} key={chat.id} />
            ))}
          </div>
          <div className="flex items-center gap-1 py-3 px-2 border-t border-t-solid border-t-gray-200  ">
            <input
              type="text"
              value={newChatMessage}
              onChange={onSetNewChatMessage}
              placeholder="Chat..."
              className=" flex-1 outline-none text-sm rounded-full bg-gray-100 py-2 px-4 max-w-[85%] placeholder:text-black"
            />

            <button
              className="p-2 rounded-full flex items-center justify-center hover:bg-gray-100 disabled:cursor-not-allowed"
              onClick={handlerAddNewChatMessage}
              disabled={newChatMessage ? false : true}
            >
              {newChatMessage ? (
                <PaperPlaneRight size={23} weight="thin" />
              ) : (
                <HeartStraight size={23} weight="thin" />
              )}
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={handlerShowLiveChatToggle}
          className="py-[0.4rem] text-sm font-semibold hover:bg-gray-200 mr-6 rounded-full cursor-pointer border border-xs"
        >
          Show Chat
        </button>
      )}
    </>
  );
}

export default LiveChat;
