export interface NavItemProps {
  title: string;
  icon: string;
  link: string;
}

function NavItem({ title, link, icon: Icon }: NavItemProps) {
  return (
    <a
      href={link}
      className="group flex items-center gap-5 rounded-lg py-2 px-3 hover:bg-gray-200"
    >
      <img src={Icon} className="h-6 w-6 text-zinc-500 " />
      <span className=" text-sm rext-zinc-700 font-app">{title}</span>
    </a>
  );
}

export default NavItem;
