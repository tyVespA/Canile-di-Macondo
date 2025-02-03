import { Comfortaa } from "next/font/google";
import { Red_Hat_Display, Red_Hat_Text } from "next/font/google";
import "./globals.css";
import FullWidthBg from "@/components/FullWidthBg";
import Header from "@/components/header/Header";

import Footer from "@/components/Footer";

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
  description:
    "Ispirato alla città incantata di Cent’anni di solitudine, il nostro rifugio è il luogo dove la magia delle seconde possibilità prende vita.",
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
};

export default function VersionTraditionalLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <meta property="og:title" content="Canile di Macondo" />
        <meta
          property="og:description"
          content="Ispirato alla città incantata di Cent’anni di solitudine, il nostro rifugio è il luogo dove la magia delle seconde possibilità prende vita."
        />
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
        {/* <SwitchVersionButton /> */}
        <Header />
        <div style={{ marginTop: "85px" }}>{children}</div>
        <FullWidthBg
          backgroundColor="var(--text-dark)"
          color="var(--text-light)"
        >
          <Footer />
        </FullWidthBg>
      </body>
    </html>
  );
}
