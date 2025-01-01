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
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/favicon-light.svg",
      },
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/favicon-dark.svg",
      },
    ],
  },
  openGraph: {
    images: [
      {
        url: "https://cdn.7tv.app/emote/01HKWA1EB00005BZE9KQ0QYJW7/4x.avif",
        width: 200,
        height: 200,
        alt: "Canile di Macondo",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Canile di Macondo" />
        <meta property="og:description" content="Vieni a trovarci!" />
        <meta
          property="og:url"
          content="https://a273098f.shelter-testing.pages.dev/"
        />
        <meta
          property="og:image"
          content="https://momentocasa-it.storage.googleapis.com/wp-content/uploads/2023/12/cane-piu-bello-del-mondo.jpg"
        />
        <meta property="og:image:width" content="205" />
        <meta property="og:image:height" content="230" />
      </head>
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
