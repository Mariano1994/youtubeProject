import EasyLinks from "./EasyLinks";
import VideosCards from "./VideosCards";

interface MenuProps {
  isMenuExpanded: boolean;
}

function MainVideosContent({ isMenuExpanded }: MenuProps) {
  return (
    <div className="w-full ml-8">
      <EasyLinks />
      <VideosCards isMenuExpanded={isMenuExpanded} />
    </div>
  );
}

export default MainVideosContent;
