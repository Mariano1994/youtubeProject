import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MenuContextProvider } from "./context/MenuContext.tsx";
import App from "./App.tsx";
import { SearchContextProvider } from "./context/SearchContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SearchContextProvider>
      <MenuContextProvider>
        <App />
      </MenuContextProvider>
    </SearchContextProvider>
  </StrictMode>
);
