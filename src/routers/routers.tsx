import { createBrowserRouter } from "react-router-dom";
import MainContent from "../components/MainContent";
import WatchVideoPages from "../components/WatchVideoPages";
import MainVideosContent from "../components/MainVideosContent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContent />,
    children: [
      {
        path: "/",
        element: <MainVideosContent />,
      },
      {
        path: "/watch",
        element: <WatchVideoPages />,
      },
    ],
  },
]);
