import styles from "./Testimonial.module.css";

export default function Testimonial({ name, children }) {
  return (
    <div>
      <p>{children}</p>
      <h4>{name}</h4>
    </div>
  );
}
