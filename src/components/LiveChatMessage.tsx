interface ChatMessageProps {
  chatMessage: {
    id: string;
    userimage: string;
    message: string;
  };
}

function LiveChatMessage({ chatMessage }: ChatMessageProps) {
  return (
    <>
      <div className="flex items-start gap-2 px-2 py-1 cursor-pointer mt-2 hover:bg-gray-100">
        <img
          src={chatMessage.userimage}
          width={25}
          height={25}
          alt="image"
          className="rounded-full"
        />
        <p className="text-[0.8rem] font-medium">{chatMessage.message}</p>
      </div>
    </>
  );
}

export default LiveChatMessage;
