import { EllipsisVertical } from "lucide-react";
import { useToggleMenu } from "../context/MenuContext";

function ShimmerUI() {
  const { isMenuExpanded } = useToggleMenu();
  return (
    <li
      className={`group ${
        isMenuExpanded ? "min-w-[330px]" : "min-w-[276px]"
      }   hover:cursor-pointer mt-4 ml:max-w-[330px]`}
    >
      <div className="w-100 bg-gray-100 h-44 rounded-2xl"></div>

      <div className="flex items-start gap-2 mt-3 ">
        <div className="h-10 w-10 rounded-full bg-gray-100"></div>

        <div className="flex flex-col flex-1">
          <span className="font-bold text-lg mb-1 w-100 h-3 rounded-md bg-gray-100 "></span>
          <span className="font-bold text-lg mb-1 w-[70%] h-3 rounded-md bg-gray-100 "></span>
          <span className="font-bold text-lg mb-1 w-[50%] h-3 rounded-md bg-gray-100 "></span>
        </div>
        <EllipsisVertical
          size={19}
          className="text-gray-200 hover:cursor-pointer"
        />
      </div>
    </li>
  );
}

export default ShimmerUI;
