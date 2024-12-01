import Perfil from "./components/perfil";
import Socials from "./components/Socials";
import ButtonFeatured from "./components/buttonFeatured";
import Button from "./components/button";
import { FaTv } from "react-icons/fa";
export default function Home() {
  return (
    <>
      <div className="max-w-[640px] min-h-screen mx-auto bg-primary-600 shadow-pink-sides">
        <div className="h-[120px] lg:h-[150px] bg-banner bg-cover" />

        <Perfil />
        <Socials />
        <div className="px-8 mt-12">
          <ButtonFeatured url="https://livepix.gg/bocadebide">
            Me manda um pix 💚 (meta da live)
          </ButtonFeatured>
          <Button url="https://www.tiktok.com/coin">
            Moedas do tik tok com desconto 🪙
          </Button>
          <Button url="https://discord.gg/AdzEtDVX3y">
            Meu servidor no discord
          </Button>
          <Button url="#">
            <FaTv />
             Meu Setup (em breve)
          </Button>
        </div>
      </div>
    </>
  );
}
