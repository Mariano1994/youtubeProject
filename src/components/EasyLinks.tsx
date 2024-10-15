import EasyLink from "./EasyLink";

function EasyLinks() {
  const fastLinks = [
    "All",
    "Computer programming",
    "Music",
    "Podcast",
    " News",
    "Live",
    "Mixes",
    "History",
    " Anime",
    "Watched",
    "Worship",
    "JavaScript",
  ];

  return (
    <div className="flex items-center gap-2">
      {fastLinks.map((link, index) => (
        <EasyLink title={link} key={index} />
      ))}
    </div>
  );
}

export default EasyLinks;
