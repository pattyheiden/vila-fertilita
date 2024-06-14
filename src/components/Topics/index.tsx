import Link from "next/link";
import { ElementType } from "react";
import { FaWhatsapp } from "react-icons/fa6";

interface TopicProps {
icon: ElementType
description: string
href: string
}

export function Topics({icon: Icon, description, href}: TopicProps) {
    return(
        <Link href={href} target="_blank">
          <div className="lg:px-[300px] flex mt-2 px-28 py-8 rounded-xl space-x-6 bg-[#00000066] hover:bg-[#00000099] transition duration-300">
            <Icon className="h-6 w-6" />
            <span>{description}</span>
          </div>
        </Link>
    )
}