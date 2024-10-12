export interface NavItemProps {
  title: string;
  icon: string;
  link: string;
}

function CollapsedNavItem({ title, link, icon: Icon }: NavItemProps) {
  return (
    <a
      href={link}
      className="group flex flex-col justify-center items-center gap-1 rounded-lg py-2 px-[0.15rem]  hover:bg-gray-200"
    >
      <img src={Icon} className="h-6 w-6 text-zinc-500 " />
      <span className=" text-[0.6rem] rext-zinc-700 font-app ">{title}</span>
    </a>
  );
}

export default CollapsedNavItem;
