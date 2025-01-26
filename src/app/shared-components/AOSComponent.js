"use client";
import { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSComponent({
  children,
  animationType = "fade-up",
  delay = 0,
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 778);
    AOS.init();
  }, []);

  return (
    <div
      data-aos={animationType}
      data-aos-easing="ease-in-out"
      data-aos-delay={!isMobile ? delay : 0}
    >
      {children}
    </div>
  );
}
