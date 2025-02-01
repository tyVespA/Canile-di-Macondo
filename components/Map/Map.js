"use client";
import styles from "./Map.module.css";

export default function Map() {
  return (
    <div className={styles.mapContainer}>
      <iframe
        className={styles.mapFrame}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31848.549029245565!2d-72.3025058836473!3d3.7952190266918064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e14169ee77f8b5b%3A0x5199f91a4fed07ee!2sLa%20Esperanza%2C%20Puerto%20Gait%C3%A1n%2C%20Meta%2C%20Colombia!5e0!3m2!1sen!2sit!4v1736882685790!5m2!1sen!2sit"
        // width={900}
        // height={450}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
