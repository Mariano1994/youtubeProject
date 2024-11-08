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
  //Cache to store all the search and its results. Needed to prevent unecessary api calls
  const [cacheResuts, setCacheResults] = useState<any>({});

  useEffect(() => {
    async function getSuggestionsData() {
      const suggestionData = await fetch(
        `${YOUTUBE_SEARCH_SUGGESTIONS_API}${searchQuery}`
      );
      const suggestionsInfo = await suggestionData.json();
      setSuggestions(suggestionsInfo[1]);
      //Updating the cache, storing the requested query and its result
      setCacheResults(() => {
        return {
          ...cacheResuts,
          [searchQuery]: suggestionsInfo[1],
        };
      });
    }

    const timer = setTimeout(() => {
      // before make api call, check on cache if requested query is not already on cache. If it's stored on cache don't make api call, instead of that fill the suggestions with the data on cache
      if (cacheResuts[searchQuery]) {
        setSuggestions(cacheResuts[searchQuery]);
      } else {
        // If the requested query is not on cache, make api call
        getSuggestionsData();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const onHandleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
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
