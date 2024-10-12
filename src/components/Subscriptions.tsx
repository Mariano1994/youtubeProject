import SubscriptionChannel from "./SubscriptionChannel";
import googleIcon from "../assets/googleIcon.webp";
import barcelonaIcon from "../assets/barcelonaIcon.webp";
import einerdIcon from "../assets/einerd.jpg";
import okusapelaIcon from "../assets/okusapela.png";
import cursoemvideoIcon from "../assets/cursoemvideo.jpg";
import stanfordIcon from "../assets/stanford.jpg";
import MitIcon from "../assets/mit.png";

interface Props {}

function Subscriptions(props: Props) {
  const {} = props;

  return (
    <>
      <div className=" py-2 px-3  font-semibold ">
        <span>Subscriptions</span>
      </div>
      <nav className="space-y-0.5 -mt-5">
        <SubscriptionChannel
          title="Google for Developer"
          icon={googleIcon}
          link="#"
        />
        <SubscriptionChannel title="MIT OpenCourse" icon={MitIcon} link="#" />
        <SubscriptionChannel
          title="Barcelona FC"
          icon={barcelonaIcon}
          link="#"
        />

        <SubscriptionChannel title="Ei Nerd" icon={einerdIcon} link="#" />
        <SubscriptionChannel
          title="Stanford Online"
          icon={stanfordIcon}
          link="#"
        />
        <SubscriptionChannel
          title="Curso em Video"
          icon={cursoemvideoIcon}
          link="#"
        />

        <SubscriptionChannel title="OkuSapela" icon={okusapelaIcon} link="#" />
      </nav>
    </>
  );
}

export default Subscriptions;
