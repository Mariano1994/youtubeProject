import Sidebar from "./Sidebar";
import MainVideosContent from "./MainVideosContent";
import { useToggleMenu } from "../context/MenuContext";

function MainContent() {
  const { isMenuExpanded } = useToggleMenu();
  return (
    <div className="flex mt-16 p-1 gap-3 ">
      <div className="h-full fixed">
        <Sidebar isMenuExpanded={isMenuExpanded} />
      </div>
      <MainVideosContent isMenuExpanded={isMenuExpanded} />
    </div>
  );
}

export default MainContent;
