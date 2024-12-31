import styles from "./PreviewCardsSection.module.css";
import PreviewCard from "./PreviewCard";
import Link from "next/link";

export default function PreviewCardsSection({ data }) {
  return (
    <>
      <h2>previewCardsSection</h2>
      <section className={styles.previewCardsSectionContainer}>
        {data.map((item, index) => (
          <Link key={index} href={`/adozioni/i-nostri-ospiti/${item.id}`}>
            <PreviewCard item={data[index]} />
          </Link>
        ))}
      </section>
    </>
  );
}
