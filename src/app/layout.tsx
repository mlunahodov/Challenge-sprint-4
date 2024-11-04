import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

//Fontes:
const SequelSansRomanDisp = localFont({
  src: "./fonts/SequelSansRomanDisp.otf",
  variable: "--Sequel-Sans-Roman-Disp",
  weight: "100 900",
});

const SequelSansSemiBold = localFont({
  src: "./fonts/SequelSansSemiBold.otf",
  variable: "--Sequel-Sans-Semi-Bold",
  weight: "100 900",
});

const SequelSansBoldDisp = localFont({
  src: "./fonts/SequelSansBoldDisp.otf",
  variable: "--Sequel-Sans-Bold-Disp",
  weight: "100 900",
});

const SequelSansHeavyDisp= localFont({
  src: "./fonts/SequelSansHeavyDisp.otf", 
  variable: "--Sequel-Sans-Heavy-Disp",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mech Solutions",
  description: "Seu melhor serviço de mecânica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${SequelSansRomanDisp.variable} ${SequelSansSemiBold.variable} ${SequelSansBoldDisp.variable} ${SequelSansHeavyDisp.variable}`}>

        <Header/>
        {children}
        <Footer/>

      </body>
    </html>
  );
}
