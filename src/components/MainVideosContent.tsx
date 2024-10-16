import EasyLinks from "./EasyLinks";
import VideosCards from "./VideosCards";

interface MenuProps {
  isMenuExpanded: boolean;
}

function MainVideosContent({ isMenuExpanded }: MenuProps) {
  return (
    <div className={`w-full ${isMenuExpanded ? "ml-72" : "ml-28"} `}>
      <div className="w-full fixed bg-white h-16 -mt-4 py-3">
        <EasyLinks />
      </div>

      <VideosCards isMenuExpanded={isMenuExpanded} />
    </div>
  );
}

export default MainVideosContent;
