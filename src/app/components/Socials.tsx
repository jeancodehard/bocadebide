import SocialIcon from "./socialIcon";
import { FaTiktok, FaDiscord, FaYoutube, FaTwitch } from "react-icons/fa";

export default function Socials() {
  return (
    <div className="flex justify-around mt-8">
      <SocialIcon
        name="Tiktok"
        icon={FaTiktok}
        url="https://www.tiktok.com/@bocadebide"
      />
      <SocialIcon
        name="Discord"
        icon={FaDiscord}
        url="https://discord.gg/AdzEtDVX3y"
      />
      <SocialIcon
        name="Youtube"
        icon={FaYoutube}
        url="https://www.youtube.com/@bocadebide"
      />
      <SocialIcon
        name="Twitch"
        icon={FaTwitch}
        url="https://www.twitch.tv/bocadebide"
      />
    </div>
  );
}
