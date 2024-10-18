import { Outlet } from "react-router-dom";

function MainContentWrapper() {
  return (
    <div className="flex mt-16 p-1 gap-3 ">
      <Outlet />
    </div>
  );
}

export default MainContentWrapper;
