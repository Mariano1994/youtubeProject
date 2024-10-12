import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import MainVideosContent from "./components/MainVideosContent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className=" antialiased">
      <HeaderComponent />
      <div className="grid gap-4 flex-1 ">
        <div className="flex mt-16 p-1 gap-4 ">
          <Sidebar />
          <MainVideosContent />
        </div>
      </div>
    </div>
  );
}

export default App;
