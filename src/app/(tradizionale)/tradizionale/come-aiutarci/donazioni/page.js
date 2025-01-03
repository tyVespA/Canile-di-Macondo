"use client";
import styles from "./page.module.css";
import Script from "next/script";
import { useEffect } from "react";

export default function page() {
  useEffect(() => {
    if (window.PayPal) {
      window.PayPal.Donation.Button({
        env: "production",
        hosted_button_id: "EZZW2B7S5GKR2",
        image: {
          src: "https://pics.paypal.com/00/s/NWU4zY4MzExYTdi/file.JPG",
          alt: "Fai una donazione con il pulsante PayPal",
          title: "PayPal - The safer, easier way to pay online!",
        },
      }).render("#donate-button");
    }
  }, []);
  return (
    <div className={styles.donateContainer}>
      <h1>donazioni</h1>
      <div className={styles.donateBtnContainer}>
        <div
          id="donate-button-container"
          style={{
            display: "flex",
            position: "relative",
            borderRadius: "25px",
          }}
        >
          <div id="donate-button"></div>
          {/* Load the PayPal SDK only on the client side */}
          <Script
            strategy="afterInteractive"
            src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js"
            onLoad={() => {
              // The PayPal button will be rendered once the script is loaded
              if (window.PayPal) {
                window.PayPal.Donation.Button({
                  env: "production",
                  hosted_button_id: "5MWVZ2KT58Y9E",
                  image: {
                    src: "https://www.paypalobjects.com/it_IT/IT/i/btn/btn_donate_LG.gif",
                    alt: "Fai una donazione con il pulsante PayPal",
                    title: "PayPal - The safer, easier way to pay online!",
                  },
                }).render("#donate-button");
              }
            }}
          />
        </div>
      </div>

      {/* <div id="donate-button-container">
<div id="donate-button"></div>
<script src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js" charset="UTF-8"></script>
<script>
PayPal.Donation.Button({
env:'production',
hosted_button_id:'EZZW2B7S5GKR2',
image: {
src:'https://pics.paypal.com/00/s/NWU4YTVkZmEtM2EzMi00YzI2LWFkNWYtNWUwNzY4MzExYTdi/file.JPG',
alt:'Fai una donazione con il pulsante PayPal',
title:'PayPal - The safer, easier way to pay online!',
}
}).render('#donate-button');
</script>
</div> */}
    </div>
  );
}
