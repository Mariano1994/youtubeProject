interface EasyLinkProps {
  title: string;
}

function EasyLink({ title }: EasyLinkProps) {
  return (
    <button className=" py-2 px-3 text-sm font-semibold rounded-lg bg-gray-100 hover:bg-gray-200">
      {title}
    </button>
  );
}

export default EasyLink;
