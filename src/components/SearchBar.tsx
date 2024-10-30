import { MagnifyingGlass } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../utils/conts";
import MicIcon from "../assets/micIcon.svg";

function SearchBar() {
  const [searchQuery, setSeachQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    async function getSuggestionData() {
      const suggestionData = await fetch(
        `${YOUTUBE_SEARCH_SUGGESTIONS_API}${searchQuery}`
      );
      const suggestionsInfo = await suggestionData.json();
      setSuggestions(suggestionsInfo[1]);
    }

    const timer = setTimeout(() => {
      getSuggestionData();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const onHandleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeachQuery(event.target.value);
  };

  return (
    <div className="flex flex-col col-span-10 justify-center   ">
      <div className="flex justify-center gap-3 items-center col-span-10 ">
        <div className=" flex justify-center items-center w-[55%] rounded-full border border-xs overflow-hidden">
          <input
            type="text"
            value={searchQuery}
            onChange={onHandleQuery}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            placeholder="Search"
            className="w-[100%]  px-4 outline-none rounded-full  font-light"
          />
          <div className=" flex justify-center items-center py-[0.4rem] px-4 bg-gray-100 border border-l-xs hover:cursor-pointer hover:bg-gray-200 ">
            <MagnifyingGlass size={23} weight="thin" />
          </div>
        </div>
        <div className=" flex items-center justify-center bg-gray-100 h-10 w-10 rounded-full hover:cursor-pointer hover:bg-gray-200">
          <img src={MicIcon} alt="mic icon" />
        </div>
      </div>

      {suggestions.length > 1 && showSuggestions ? (
        <div className="fixed ml-[200px]  w-[494px] mt-[390px] py-2 2xl:w-[700px] 2xl:ml-[290px]  bg-white  rounded-lg border border-sky-100 shadow-lg">
          <ul className="w-[100%]">
            {suggestions.map((suggest: string, index: number) => (
              <li
                key={index}
                className="flex items-center gap-3 py-1 px-2 hover:bg-gray-100 w-full font-semibold"
              >
                <MagnifyingGlass size={23} weight="thin" />
                {suggest}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default SearchBar;
