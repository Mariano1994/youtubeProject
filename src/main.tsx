import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MenuContextProvider } from "./context/MenuContext.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MenuContextProvider>
      <App />
    </MenuContextProvider>
  </StrictMode>
);
