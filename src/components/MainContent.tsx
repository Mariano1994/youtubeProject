import Sidebar from "./Sidebar";

import { Outlet } from "react-router-dom";

function MainContent() {
  return (
    <div className="flex mt-16 p-1 gap-3 ">
      <div className="h-full fixed">
        <Sidebar />
      </div>

      <Outlet />
    </div>
  );
}

export default MainContent;
