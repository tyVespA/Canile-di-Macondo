// "use client";
import styles from "./ContattaciForm.module.css";
import Button from "./Button";

export default function ContattaciForm() {
  return (
    <div className={styles.formContainer}>
      <form action="">
        <input type="text" id="name" name="name" placeholder="Nome" required />

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Il tuo indirizzo email"
          required
        />

        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Oggetto"
          required
        />

        <textarea
          id="message"
          name="message"
          placeholder="Messaggio"
          rows="5"
          required
          // allows to grow if content too much
          // onInput={(e) => {
          //   e.target.style.height = "auto"; // Reset height to recalculate
          //   e.target.style.height = `${e.target.scrollHeight}px`; //
          // }}
          // style={{ overflowY: "hidden" }}
        ></textarea>
        <Button theme="light" paddingInline="40px">
          Invia
        </Button>
      </form>
      {/* <div className={styles.contactContainer}>
        <h2>Contact Us</h2>
        <form className={styles.contactForm}>
          <label htmlFor="name">Name</label>

          <label htmlFor="subject">Subject</label>
          

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
