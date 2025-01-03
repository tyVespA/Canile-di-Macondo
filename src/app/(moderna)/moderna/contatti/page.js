"use client";
import FullWidthBg from "../components/FullWidthBg";
import styles from "./page.module.css";

export default function page() {
  return (
    <div>
      <h1>contatti</h1>
      <h2>Dove siamo</h2>

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

      <h2>Contattaci</h2>
      <div className={styles.contactContainer}>
        <h2>Contact Us</h2>
        <form className={styles.contactForm}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
          />

          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            rows="5"
            required
            // allows to grow if content too much
            onInput={(e) => {
              e.target.style.height = "auto"; // Reset height to recalculate
              e.target.style.height = `${e.target.scrollHeight}px`; // Set height based on scrollHeight
            }}
            // style={{ overflowY: "hidden" }}
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
