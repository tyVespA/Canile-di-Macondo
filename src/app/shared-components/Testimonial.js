import styles from "./Testimonial.module.css";

export default function Testimonial({ name, children }) {
  return (
    <div className={styles.testimonialContainer}>
      <div className={styles.testimonialContent}>
        <h4>{name}</h4>
        <p>{children}</p>
      </div>
    </div>
  );
}
