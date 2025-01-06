// "use client";
import FullWidthBg from "@shared-components/FullWidthBg";
import styles from "./page.module.css";
// import Map from "@shared-components/Map";
import MapWrapper from "@/src/app/shared-components/Map/MapWrapper";

export const metadata = {
  title: "Contatti | Canile di Macondo",
  description: "Benvenuti!" /* change */,
};

export default function page() {
  return (
    <div>
      <h1>contatti</h1>
      <h2>Dove siamo</h2>
      {/* <Map /> */}
      <MapWrapper />

      <h2>Contattaci</h2>
      {/* <div className={styles.contactContainer}>
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
      </div> */}
    </div>
  );
}
