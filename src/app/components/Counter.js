"use client";
import React, { useEffect, useRef, useState } from "react";

const Counter = ({ target, duration, fontSize, fontWeight, afterNumber }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 } // Adjust visibility threshold as needed
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const increment = target / (duration / 10);
    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        if (next >= target) {
          clearInterval(timer);
          return target;
        }
        return next;
      });
    }, 10);

    return () => clearInterval(timer);
  }, [hasAnimated, target, duration]);

  return (
    <div
      ref={counterRef}
      style={{ fontSize: fontSize, fontWeight: fontWeight }}
    >
      <p>
        {Math.round(count)}
        {afterNumber}
      </p>
    </div>
  );
};

export default Counter;
