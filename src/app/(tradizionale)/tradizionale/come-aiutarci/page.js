import style from "./page.module.css";
import Image from "next/image";
import TitleBanner from "@shared-components/TitleBanner";
import testImage from "@images/tradizionale/hero_image.jpg";
import Link from "next/link";

import PaypalButton from "@/src/app/shared-components/PaypalButton";

export default function page() {
  return (
    <div>
      <TitleBanner imgSrc={testImage}>Come aiutarci</TitleBanner>
      <div>
        <iframe
          src="https://www.paypal.com/giving/campaigns?campaign_id=WVPPC226FLLEC"
          title="PayPal donate campaign card"
          frameBorder="0"
          width={382}
          height={420}
          scrolling="no"
        ></iframe>
      </div>
      <Link href="https://www.paypal.com/donate/?hosted_button_id=5MWVZ2KT58Y9E">
        <button>test</button>
      </Link>
      <br />
      <PaypalButton width="200px" />
      <br />
    </div>
  );
}
