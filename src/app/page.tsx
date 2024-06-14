import Image from "next/image";
import Logo from "@/assets/logo.png"
import HMSIS from "@/assets/hmsis.png"
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="flex w-screen">
      <div className="relative bg-fundo bg-cover bg-center bg-no-repeat h-screen w-screen">
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="lg:justify-center lg:mt-0 flex flex-col absolute inset-0 items-center mt-20">
        <Image src={Logo} alt="logo" width={0} height={140} className="w-auto h-auto lg:px-0 px-8" />
        <Link href="https://wa.me/554788074437" target="_blank">
          <div className="lg:px-[300px] flex mt-20 px-28 py-8 rounded-xl space-x-6 bg-[#00000066] hover:bg-[#00000099] transition duration-300">
            <FaWhatsapp className="h-6 w-6" />
            <span>Whatsapp</span>
          </div>
        </Link>
        <Link href="https://www.instagram.com/cabanhavilafertilita/" target="_blank">
        <div className="lg:px-[300px] flex mt-2 px-28 py-8 rounded-xl space-x-6 bg-[#00000066] hover:bg-[#00000099] transition duration-300">
          <FaInstagram className="h-6 w-6" />
          <span>Instagram</span>
        </div>
        </Link>
        

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
