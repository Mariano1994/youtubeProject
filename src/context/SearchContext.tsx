import { createContext, useContext, useEffect, useState } from "react";
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../utils/conts";

interface ChildrenProps {
  children: React.ReactNode;
}

interface ContextProvider {
  searchQuery: string;
  suggestions: string[];
  onHandleQuery: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchContext = createContext<ContextProvider>({
  searchQuery: "",
  suggestions: [],
  onHandleQuery: () => {},
});

export const SearchContextProvider = ({ children }: ChildrenProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    async function getSuggestionsData() {
      const suggestionData = await fetch(
        `${YOUTUBE_SEARCH_SUGGESTIONS_API}${searchQuery}`
      );
      const suggestionsInfo = await suggestionData.json();
      setSuggestions(suggestionsInfo[1]);
    }

    const timer = setTimeout(() => {
      getSuggestionsData();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const onHandleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <SearchContext.Provider value={{ suggestions, onHandleQuery, searchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

export function useSearchSuggestions() {
  return useContext(SearchContext);
}
