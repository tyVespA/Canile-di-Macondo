"use client";
import styles from "./Map.module.css";

export default function Map() {
  return (
    <div className={styles.mapContainer}>
      <iframe
        className={styles.mapFrame}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.305691546223!2d8.919807730318473!3d45.584399199464876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47868d72fac9db5f%3A0xcabe7695bc62b1fb!2sPercorso%20Vita%20Parco%20Castello!5e0!3m2!1sen!2sit!4v1735652044493!5m2!1sen!2sit"
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
