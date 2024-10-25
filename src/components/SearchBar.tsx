import { MagnifyingGlass } from "@phosphor-icons/react";

function SearchBar() {
  return (
    <div className=" flex justify-center items-center w-[55%] rounded-full border border-xs overflow-hidden">
      <input
        type="text"
        placeholder="Search"
        className="w-[100%]  px-4 outline-none rounded-full  font-light"
      />
      <div className=" flex justify-center items-center py-[0.4rem] px-4 bg-gray-100 border border-l-xs hover:cursor-pointer hover:bg-gray-200 ">
        <MagnifyingGlass size={23} weight="thin" />
      </div>
    </div>
  );
}

export default SearchBar;
