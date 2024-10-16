import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/routers.tsx";
import { MenuContextProvider } from "./context/MenuContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MenuContextProvider>
      <RouterProvider router={router} />
    </MenuContextProvider>
  </StrictMode>
);
