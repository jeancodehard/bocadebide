import { Indie_Flower } from "next/font/google";
import Image from "next/image";

const Shadows = Indie_Flower({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});
export default function Perfil() {
  return (
    <div className="flex flex-col items-center -mt-16">
      <div className="bg-gradient-to-r from-[#4192d5] to-[#160264] p-[4px] rounded-full">
        <div className="h-[128px] w-[128px]rounded-full overflow-hidden">
          <Image
            src="/assets/perfil.jpg"
            alt="Perfil"
            width={128}
            height={128}
            className="object-cover rounded-full"
          />
        </div>
      </div>
      <div
        className={`${Shadows.className} mt-2 text-5xl bg-gradient-vertical bg-clip-text text-transparent`}
      >
        bocadebide
      </div>
    </div>
  );
}
