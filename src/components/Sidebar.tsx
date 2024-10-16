import { useToggleMenu } from "../context/MenuContext";
import CollapsedSideBar from "./CollapsedSideBar";
import ExpandedSideBar from "./ExpandedSideBar";

function Sidebar() {
  const { isMenuExpanded } = useToggleMenu();
  if (isMenuExpanded)
    return (
      <div className="w-[225px] h-full py-2 overflow-scroll -mt-5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <ExpandedSideBar />
      </div>
    );
  return <CollapsedSideBar />;
}

export default Sidebar;
