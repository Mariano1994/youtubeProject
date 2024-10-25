import youtubeLogo from "../assets/youtubeLogo.svg";
import createIcon from "../assets/createLogo.svg";
import bellIcon from "../assets/bellicon.svg";
import user from "../assets/user.svg";
import { useToggleMenu } from "../context/MenuContext";
import SearchBar from "./SearchBar";
import { List } from "@phosphor-icons/react";

function HeaderComponent() {
  const { handleToggleMenuState } = useToggleMenu();
  return (
    <header className=" grid grid-flow-col h-17 py-1 pl-6 w-full fixed bg-white z-50 ">
      <div className="flex items-center gap-5 col-span-1">
        <List
          size={25}
          weight="thin"
          className="hover:cursor-pointer"
          onClick={handleToggleMenuState}
        />
        <a href="/">
          <img src={youtubeLogo} alt="youtube logo image" />
        </a>
      </div>

      <SearchBar />

      <div className="flex items-center col-span-1 gap-2">
        <div className=" flex items-center justify-center h-11 w-11 rounded-full hover:bg-gray-100 hover:cursor-pointer">
          <img src={createIcon} alt="video camera icon" />
        </div>
        <div className=" flex items-center justify-center h-11 w-11 rounded-full hover:bg-gray-100 hover:cursor-pointer">
          <img src={bellIcon} alt="bell-icon" />
        </div>
        <div className=" ml-2 hover:cursor-pointer">
          <img src={user} alt="user" />
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
