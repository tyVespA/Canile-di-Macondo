import styles from "./Testimonial.module.css";
import Image from "next/image";

export default function Testimonial({ name, ospite, children }) {
  const lowerCaseOspite = ospite.toLowerCase();
  return (
    <div className={styles.testimonialContainer}>
      <div className={styles.testimonialContent}>
        <h4>{name}</h4>
        <Image
          src={`/images/adottati/${lowerCaseOspite}/${lowerCaseOspite}1.jpg`}
          alt={`foto di ${ospite}`}
          width={150}
          height={150}
          loading="eager"
        />
        <p>{children}</p>
      </div>
    </div>
  );
}
