import CollapsedNavItem from "./CollapsedNavItem";
import HomeIcon from "../assets/HomeIcon.svg";
import ShortsIcons from "../assets/ShortsIcon.svg";
import SubscriptionIcon from "../assets/SubscriptionsIcons.svg";
import ChannelIcon from "../assets/channelIcon.svg";

function CollapsedSideBar() {
  return (
    <aside className="flex min-h-screen flex-col gap-6 mr-2">
      <nav className="space-y-1">
        <CollapsedNavItem title="Home" icon={HomeIcon} link="#" />
        <CollapsedNavItem title="Shorts" icon={ShortsIcons} link="#" />
        <CollapsedNavItem
          title="Subscriptions"
          icon={SubscriptionIcon}
          link="#"
        />
        <CollapsedNavItem title="You" icon={ChannelIcon} link="#" />
      </nav>
    </aside>
  );
}

export default CollapsedSideBar;
