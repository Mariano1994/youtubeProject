import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/routers";

function App() {
  return (
    <div className=" antialiased">
      <HeaderComponent />
      <div className="grid gap-4 flex-1 ">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
