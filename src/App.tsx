import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import MainVideosContent from "./components/MainVideosContent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className=" antialiased">
      <HeaderComponent />
      <div className="grid gap-4 ">
        <div className="mt-20 grid grid-cols-app p-4 gap-4 ">
          <Sidebar />
          <MainVideosContent />
        </div>
      </div>
    </div>
  );
}

export default App;
