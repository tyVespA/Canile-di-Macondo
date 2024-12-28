import styles from "./PreviewCardsSection.module.css";
import PreviewCard from "./PreviewCard";

export default function PreviewCardsSection({ data }) {
  return (
    <div>
      <h2>previewCardsSection</h2>
      {data.map((item, index) => (
        <PreviewCard key={index} item={data[index]} />
      ))}
    </div>
  );
}
