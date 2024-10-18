import MainVideosContent from "./MainVideosContent";
import Sidebar from "./Sidebar";

function MainContent() {
  return (
    <div className="flex p-1 gap-3 ">
      <div className="h-full fixed">
        <Sidebar />
      </div>
      <MainVideosContent />
    </div>
  );
}

export default MainContent;
