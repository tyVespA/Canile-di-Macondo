import { Comfortaa } from "next/font/google";
import { Red_Hat_Display, Red_Hat_Text } from "next/font/google";
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

const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
});

export const metadata = {
  title: "Canile di Macondo",
  description: "Vieni a trovarci!",
  // icons: {
  //   icon: "/dog-duotone.ico",
  // },
};

<link rel="icon" href="/dog-duotone.ico" sizes="any" />;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${comfortaa.variable} ${redHatDisplay.variable} ${
          redHatText.variable
        }
         ${"max-width-container"}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
