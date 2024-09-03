import type { Metadata } from "next";
import {  Lato } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/Footer";


const lato = Lato({ subsets: ["latin"] ,
  weight: "400"
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <div >
          <Header/>
          {children}
          <Footer/>
          </div>
          </body>
    </html>
  );
}
