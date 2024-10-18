import { useToggleMenu } from "../context/MenuContext";
import EasyLinks from "./EasyLinks";
import VideosCards from "./VideosCards";

function MainVideosContent() {
  const { isMenuExpanded } = useToggleMenu();
  return (
    <div className={`w-full ${isMenuExpanded ? "ml-72" : "ml-28"} `}>
      <div className="w-full fixed bg-white h-16 -mt-6 py-3">
        <EasyLinks />
      </div>
      <VideosCards />
    </div>
  );
}

export default MainVideosContent;
