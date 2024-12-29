import localFont from "next/font/local";
import { Geist, Geist_Mono } from "next/font/google";
import { Red_Hat_Display, Red_Hat_Text, Red_Hat_Mono } from "next/font/google";
import { Comfortaa } from "next/font/google";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-redhat-display",
  subsets: ["latin"],
});
const redHatText = Red_Hat_Text({
  variable: "--font-redhat-text",
  subsets: ["latin"],
});
const redHatMono = Red_Hat_Mono({
  variable: "--font-redhat-mono",
  subsets: ["latin"],
});

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
});

export const metadata = {
  title: "Canile di ...",
  description: "Vieni a trovarci!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${comfortaa.variable} ${redHatDisplay.variable} ${
          redHatText.variable
        } ${redHatMono.variable}
         ${"max-width-container"}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
