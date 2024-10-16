import { useState } from "react";
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import MainVideosContent from "./components/MainVideosContent";
import Sidebar from "./components/Sidebar";

function App() {
  const [isMenuExpanded, setIsMenuExpanded] = useState(true);
  const handleToggleMenuState = () => {
    setIsMenuExpanded(!isMenuExpanded);
  };
  return (
    <div className=" antialiased">
      <HeaderComponent onToggleMenu={handleToggleMenuState} />
      <div className="grid gap-4 flex-1 ">
        <div className="flex mt-16 p-1 gap-3 ">
          <div className="h-full fixed">
            <Sidebar isMenuExpanded={isMenuExpanded} />
          </div>
          <MainVideosContent isMenuExpanded={isMenuExpanded} />
        </div>
      </div>
    </div>
  );
}

export default App;
