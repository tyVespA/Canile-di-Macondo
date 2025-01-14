// "use client";
// import Script from "next/script";
// import { useEffect, useRef } from "react";
// import styles from "./PaypalDonateBtn.module.css";

// export default function PaypalDonateBtn() {
//   const buttonRendered = useRef(false);

//   useEffect(() => {
//     // Check if PayPal is already loaded
//     if (window.PayPal && !buttonRendered.current) {
//       buttonRendered.current = true;
//       window.PayPal.Donation.Button({
//         env: "production",
//         hosted_button_id: "5MWVZ2KT58Y9E",
//         image: {
//           src: "https://www.paypalobjects.com/it_IT/IT/i/btn/btn_donate_LG.gif",
//           alt: "Fai una donazione con il pulsante PayPal",
//           title: "PayPal - The safer, easier way to pay online!",
//         },
//       }).render("#donate-button");
//     }

//     return () => {
//       buttonRendered.current = false;
//     };
//   }, []);

//   return (
//     <div className={styles.donateContainer}>
//       <div className={styles.donateBtnContainer}>
//         <div
//           id="donate-button-container"
//           style={{
//             display: "flex",
//             position: "relative",
//             borderRadius: "25px",
//           }}
//         >
//           <div id="donate-button"></div>
//           <Script
//             strategy="beforeInteractive"
//             src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js"
//             onLoad={() => {
//               // Only render if button hasn't been rendered yet
//               if (window.PayPal && !buttonRendered.current) {
//                 buttonRendered.current = true;
//                 window.PayPal.Donation.Button({
//                   env: "production",
//                   hosted_button_id: "5MWVZ2KT58Y9E",
//                   image: {
//                     src: "https://www.paypalobjects.com/it_IT/IT/i/btn/btn_donate_LG.gif",
//                     alt: "Fai una donazione con il pulsante PayPal",
//                     title: "PayPal - The safer, easier way to pay online!",
//                   },
//                 }).render("#donate-button");
//               }
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
