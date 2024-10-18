import { createBrowserRouter } from "react-router-dom";
import MainContent from "../components/MainContent";
import WatchVideoPages from "../components/WatchVideoPages";
import MainContentWrapper from "../components/MainContentWrapper";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContentWrapper />,
    children: [
      {
        path: "/",
        element: <MainContent />,
      },
      {
        path: "/watch",
        element: <WatchVideoPages />,
      },
    ],
  },
]);
