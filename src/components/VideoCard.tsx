import { Dot, EllipsisVertical } from "lucide-react";
import imageEx from "../assets/bleachImage.jpg";
import channleImage from "../assets/einerd.jpg";
function VideoCard() {
  return (
    <li className="group max-w-[375px] hover:cursor-pointer mt-4">
      <img
        src={imageEx}
        alt="image"
        className="rounded-2xl group-hover:rounded-none"
      />
      <div className="flex items-start gap-2 mt-3 ">
        <img
          src={channleImage}
          alt="channeImahe"
          className="h-10 w-10 rounded-full "
        />

        <div className="flex flex-col flex-1">
          <span className="font-bold mb-1 ">
            BOMBA! A MORTE E O NOME DE "DEUS!"
          </span>
          <span className="text-sm font-semibold text-gray-500">Ei Nerd</span>
          <div className="flex text-sm font-semibold text-gray-500 items-center ">
            <span>39k views</span>
            <Dot />
            <span> 8 hours ago</span>
          </div>
        </div>
        <EllipsisVertical
          size={19}
          className="text-gray-700 hover:cursor-pointer"
        />
      </div>
    </li>
  );
}

export default VideoCard;
