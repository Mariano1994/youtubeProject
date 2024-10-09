import { Menu, Search } from "lucide-react";
import youtubeLogo from "../assets/youtubeLogo.svg";
import MicIcon from "../assets/micIcon.svg";
import createIcon from "../assets/createLogo.svg";
import bellIcon from "../assets/bellicon.svg";
import user from "../assets/user.svg";
// import SearchIcon from "../assets/searchIcon.svg";

function HeaderComponent() {
  return (
    <header className="grid grid-flow-col h-17 p-4 ">
      <div className="flex items-center gap-5 col-span-1">
        <Menu size={24} className="hover:cursor-pointer" />
        <img src={youtubeLogo} alt="youtube logo image" />
      </div>
      <div className="flex justify-center gap-3 items-center col-span-10 ">
        <div className=" flex justify-center items-center w-[55%] rounded-full border border-xs overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="w-[100%]  px-4 outline-none rounded-full  font-light"
          />
          <div className=" flex justify-center items-center py-[0.4rem] px-4 bg-gray-100 border border-l-xs hover:cursor-pointer hover:bg-gray-200 ">
            <Search size={22} className="text-black" />
          </div>
        </div>
        <div className=" flex items-center justify-center bg-gray-100 h-10 w-10 rounded-full hover:cursor-pointer hover:bg-gray-200">
          <img src={MicIcon} alt="mic icon" />
        </div>
      </div>
      <div className="flex items-center col-span-1 gap-2">
        <div className=" flex items-center justify-center h-11 w-11 rounded-full hover:bg-gray-100 hover:cursor-pointer">
          <img src={createIcon} alt="video camera icon" />
        </div>
        <div className=" flex items-center justify-center h-11 w-11 rounded-full hover:bg-gray-100 hover:cursor-pointer">
          <img src={bellIcon} alt="bell-icon" />
        </div>
        <div className="ml-2 hover:cursor-pointer">
          <img src={user} alt="user" />
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
