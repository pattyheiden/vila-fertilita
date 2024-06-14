import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";

// import { WhatsappButton } from "@/components/WhatsappButton";

const libre = Libre_Franklin({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vila Fertilitá",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex bg-zinc-900 text-zinc-100 lg:w-auto overflow-hidden">
      <body className={libre.className}>
        {children}
        {/* <WhatsappButton /> */}
      </body>
    </html>
  );
}
