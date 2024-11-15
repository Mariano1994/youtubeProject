import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MenuContextProvider } from "./context/MenuContext.tsx";
import App from "./App.tsx";
import { SearchContextProvider } from "./context/SearchContext.tsx";
import { CommentContextProvider } from "./context/CommentsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CommentContextProvider>
      <SearchContextProvider>
        <MenuContextProvider>
          <App />
        </MenuContextProvider>
      </SearchContextProvider>
    </CommentContextProvider>
  </StrictMode>
);
