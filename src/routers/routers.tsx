import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainContent from "../components/MainContent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainContent />,
      },
    ],
  },
]);
