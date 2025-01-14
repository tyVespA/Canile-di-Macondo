"use client";

import { useEffect, useRef } from "react";

const PaypalButton = () => {
  // Use refs to track initialization status
  const scriptLoaded = useRef(false);
  const buttonRendered = useRef(false);

  useEffect(() => {
    // Skip if script is already loaded or button is already rendered
    if (scriptLoaded.current || buttonRendered.current) {
      return;
    }

    // Check if script already exists in document
    const existingScript = document.querySelector(
      'script[src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js"]'
    );

    if (existingScript) {
      scriptLoaded.current = true;
      initializeButton();
    } else {
      // Create and load PayPal SDK script
      const script = document.createElement("script");
      script.src = "https://www.paypalobjects.com/donate/sdk/donate-sdk.js";
      script.charset = "UTF-8";
      script.async = true;

      script.onload = () => {
        scriptLoaded.current = true;
        initializeButton();
      };

      document.body.appendChild(script);

      // Cleanup function
      return () => {
        if (script.parentNode) {
          document.body.removeChild(script);
        }
        buttonRendered.current = false;
        scriptLoaded.current = false;
      };
    }
  }, []);

  const initializeButton = () => {
    if (!buttonRendered.current && window.PayPal) {
      try {
        window.PayPal.Donation.Button({
          env: "production",
          hosted_button_id: "5MWVZ2KT58Y9E",
          image: {
            src: "https://pics.paypal.com/00/s/YTY1ZTMxOTEtZTU0ZC00MzM1LTk1YTgtNjMwZWNkYzA2YWJj/file.PNG",
            alt: "Fai una donazione con il pulsante PayPal",
            title: "PayPal - The safer, easier way to pay online!",
          },
        }).render("#donate-button");

        buttonRendered.current = true;
      } catch (error) {
        console.error("Error rendering PayPal button:", error);
      }
    }
  };

  return (
    <div id="donate-button-container">
      <div id="donate-button"></div>
    </div>
  );
};

export default PaypalButton;
