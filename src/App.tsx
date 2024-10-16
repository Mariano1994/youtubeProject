import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className=" antialiased">
      <HeaderComponent />
      <div className="grid gap-4 flex-1 ">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
