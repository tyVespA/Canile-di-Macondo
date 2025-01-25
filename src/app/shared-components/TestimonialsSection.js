"use client";
import React, { useState } from "react";
import styles from "./Testimonial.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function TestimonialsSection({ testimonials }) {
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
  };
  return (
    <div
      className={`${styles.carouselContainer} ${
        isDragging ? "grabbing" : "grab"
      }`}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <Slider {...settings}>
        {testimonials.map((testimonial, key) => (
          <div key={key}>{testimonial}</div>
        ))}
      </Slider>
    </div>
  );
}
