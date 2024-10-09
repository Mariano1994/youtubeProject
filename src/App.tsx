import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import MainVideosContent from "./components/MainVideosContent";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <HeaderComponent />
      <div className="grid grid-cols-app p-4">
        <Sidebar />
        <MainVideosContent />
      </div>
    </>
  );
}

export default App;
