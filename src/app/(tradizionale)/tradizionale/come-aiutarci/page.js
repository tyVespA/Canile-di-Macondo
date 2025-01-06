import style from "./page.module.css";
import Image from "next/image";
import TitleBanner from "@shared-components/TitleBanner";
import testImage from "@images/tradizionale/hero_image.jpg";

export default function page() {
  return (
    <div>
      <TitleBanner imgSrc={testImage}>Come aiutarci</TitleBanner>
    </div>
  );
}
