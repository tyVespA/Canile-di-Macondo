import styles from "./Testimonial.module.css";

export default function Testimonial({ name, children, key }) {
  return (
    <div key={key}>
      <p>{children}</p>
      <h4>{name}</h4>
    </div>
  );
}
