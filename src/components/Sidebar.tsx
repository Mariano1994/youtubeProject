import CollapsedSideBar from "./CollapsedSideBar";
import ExpandedSideBar from "./ExpandedSideBar";

interface ToggleMenuProps {
  isMenuExpanded: boolean;
}

function Sidebar({ isMenuExpanded }: ToggleMenuProps) {
  if (isMenuExpanded)
    return (
      <div className="w-[280px]">
        <ExpandedSideBar />
      </div>
    );
  return <CollapsedSideBar />;
}

export default Sidebar;
