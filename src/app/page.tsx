import Image from "next/image";
import Logo from "@/assets/logo.png"
import HMSIS from "@/assets/hmsis.png"
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { Topics } from "@/components/Topics";

export default function Home() {
  return (
    <div className="flex w-screen">

      <div className="relative bg-fundo bg-cover bg-center bg-no-repeat h-screen w-screen">
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="lg:justify-center lg:mt-0 flex flex-col absolute inset-0 items-center mt-20">

        <Image src={Logo} alt="logo" width={0} height={140} className="w-auto h-auto lg:px-0 px-8 mb-20" />

        <Topics href="https://wa.me/554788074437" icon={FaWhatsapp} description="Whatsapp" />
        <Topics href="https://www.instagram.com/cabanhavilafertilita/" icon={FaInstagram} description="Instagram" />

        <div className="lg:flex-row lg:space-y-0 lg:items-end flex flex-col mt-32 items-center space-y-3">
          <span className="flex justify-end items-end">Powered by</span>
          <Link href="https://www.hmsis.com.br/" target="_blank">
            <Image src={HMSIS} alt="hmsis-sistemas" width={0} height={40} className=" h-auto" />
          </Link>
        </div>

      </div>

    </div>
  );
}
