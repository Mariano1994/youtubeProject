import CollapsedSideBar from "./CollapsedSideBar";
import ExpandedSideBar from "./ExpandedSideBar";

interface ToggleMenuProps {
  isMenuExpanded: boolean;
}

function Sidebar({ isMenuExpanded }: ToggleMenuProps) {
  if (isMenuExpanded) return <ExpandedSideBar />;
  return <CollapsedSideBar />;
}

export default Sidebar;
