import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";

import { GTM } from '@/components/GTM'
import { GTMIframe } from "@/components/GTM/GTMIframe";

// import { WhatsappButton } from "@/components/WhatsappButton";

const libre = Libre_Franklin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vila Fertilitá",
  keywords: 'cabanha, reprodutor de angus, gado angus',
  openGraph: 
    {
      images: 'http://cabanhavilafertilita.com.br/og.png',    
      title: 'Vila Fertilitá',
      description: 'Animais e embriões Angus. Genética superior para elevar a qualidade do seu rebanho.',
      url: 'http://cabanhavilafertilita.com.br/',      
    }, 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="flex bg-zinc-900 text-zinc-100 lg:w-auto overflow-hidden">
      <head>
      <GTM />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={libre.className}>
      <GTMIframe />
        {children}
        {/* <WhatsappButton /> */}
      </body>
    </html>
  );
}
