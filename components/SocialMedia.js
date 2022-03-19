import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TelegramIcon from "@material-ui/icons/Telegram";

const SocialMedia = () => {
  return (
    <div>
      <section className="m-lg-2 text-center m-md-1">
        <a href="https://cutt.ly/XSaYOBn">
          <FacebookIcon
            className="text-light mx-3"
            style={{ cursor: "pointer" }}
          />
        </a>

        <a href="https://cutt.ly/MSaFOu2">
          <TwitterIcon
            className="text-light mx-3"
            style={{ cursor: "pointer" }}
          />
        </a>

        <a href="https://cutt.ly/NSaGyRk">
          <InstagramIcon
            className="text-light mx-3"
            style={{ cursor: "pointer" }}
          />
        </a>

        <a href="https://cutt.ly/MSaFedv">
          <YouTubeIcon
            className="text-light mx-3"
            style={{ cursor: "pointer" }}
          />
        </a>
        <a href=" https://cutt.ly/eSaASZP ">
          <TelegramIcon
            className="text-light mx-3"
            style={{ cursor: "pointer" }}
          />
        </a>
      </section>
    </div>
  );
};

export default SocialMedia;
