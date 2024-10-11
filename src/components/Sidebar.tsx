import NavItem from "./NavItem";
import HomeIcon from "../assets/HomeIcon.svg";
import ShortsIcons from "../assets/ShortsIcon.svg";
import SubscriptionIcon from "../assets/SubscriptionsIcons.svg";
import ChannelIcon from "../assets/channelIcon.svg";
import HistoryIcon from "../assets/HistoryIcon.svg";
import PlayListIcon from "../assets/PlayListIcon.svg";
import WatchLaterIcon from "../assets/LaterIcon.svg";
import LikedVideosIcon from "../assets/LikedVideos.svg";
import YourCourseIcon from "../assets/courseIcon.svg";
import ListVideoIcon from "../assets/ListVideo.svg";
import { ChevronRight } from "lucide-react";
import Subscriptions from "./Subscriptions";

function Sidebar() {
  return (
    <aside className="flex min-h-screen flex-col gap-6 mr-2">
      <nav className="space-y-0.5">
        <NavItem title="Home" icon={HomeIcon} link="#" />
        <NavItem title="Shorts" icon={ShortsIcons} link="#" />
        <NavItem title="Subscriptions" icon={SubscriptionIcon} link="#" />
      </nav>
      <div
        className="border-[0.1px] border-black opacity-10
       "
      ></div>

      <div className="group flex items-center gap-1 rounded-lg py-2 px-3 hover:bg-gray-200 font-semibold hover:cursor-pointer">
        <span>You</span>
        <ChevronRight />
      </div>

      <nav className="space-y-0.5 -mt-5">
        <NavItem title="You channel" icon={ChannelIcon} link="#" />
        <NavItem title="History" icon={HistoryIcon} link="#" />
        <NavItem title="Playlist" icon={ListVideoIcon} link="#" />
        <NavItem title="Your videos" icon={PlayListIcon} link="#" />
        <NavItem title="Your course" icon={YourCourseIcon} link="#" />
        <NavItem title="Wacth later" icon={WatchLaterIcon} link="#" />
        <NavItem title="Liked videos" icon={LikedVideosIcon} link="#" />
      </nav>
      <div
        className="border-[0.1px] border-black opacity-10
       "
      ></div>

      <Subscriptions />
    </aside>
  );
}

export default Sidebar;
