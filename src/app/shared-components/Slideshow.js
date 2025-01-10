"use client";
import React, { useState } from "react";
import styles from "./Slideshow.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import Image from "next/image";
import Kara from "../../../public/images/foto-varie/Kara.jpg";

const CustomArrow = ({ direction, onClick }) => {
  return (
    <div
      className={`${styles.slickArrow} ${
        direction === "next" ? styles.slickNext : styles.slickPrev
      }`}
      onClick={onClick}
    >
      {direction === "next" ? "→" : "←"}
    </div>
  );
};

export default function Slideshow({ images }) {
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
  };

  return (
    <div
      className={`${styles.carouselContainer} ${
        isDragging ? styles.grabbing : styles.grab
      }`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className={styles.carouselImageContainer} key={index}>
            <img src={image} alt="" />
          </div>
        ))}
      </Slider>
      {/* <div className={styles.carouselImageContainer}>
          <img src="/images/foto-varie/Kara.jpg" alt="" />
        </div>
        <div className={styles.carouselImageContainer}>
          <img src="/images/foto-varie/Kara.jpg" alt="" />
        </div>
        <div className={styles.carouselImageContainer}>
          <img src="/images/tradizionale/hero_image.jpg" alt="" />
        </div> */}
    </div>
  );
}
