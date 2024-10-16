import CollapsedSideBar from "./CollapsedSideBar";
import ExpandedSideBar from "./ExpandedSideBar";

interface ToggleMenuProps {
  isMenuExpanded: boolean;
}

function Sidebar({ isMenuExpanded }: ToggleMenuProps) {
  if (isMenuExpanded)
    return (
      <div className="w-[225px] h-full py-2 overflow-scroll -mt-5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <ExpandedSideBar />
      </div>
    );
  return <CollapsedSideBar />;
}

export default Sidebar;
