import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import cane_hero from "../../public/images/cane_hero.png";
import FullWidthBg from "../../components/FullWidthBg";

export default function Home() {
  return (
    <div>
      <section className={styles.heroContainer}>
        <div className={styles.textContainer}>
          <h1>Home</h1>
          <h2>text</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            velit vel officiis ut repellat ratione dicta? Et vitae neque, fuga
            pariatur, ratione officiis tenetur eveniet odio eum nisi molestias
            soluta!
          </p>
        </div>
        <div className={styles.heroImgContainer}>
          <Image src={cane_hero} alt="" />
        </div>
      </section>

      <FullWidthBg bgColor="var(--yellow)">
        <div className={styles.section2}>
          <h2>section2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint error
            quibusdam inventore, vitae facere consequatur quia, minima
            voluptatum explicabo officiis deserunt iusto quis ut facilis
            doloribus alias delectus vero molestias!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eos
            voluptate quae. Ullam necessitatibus ab, dolores explicabo magnam
            excepturi maiores eaque. Quo numquam quisquam excepturi explicabo
            quae minus eos necessitatibus!
          </p>
          <h2>Heading 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            quas excepturi modi minus impedit. Eum quidem suscipit labore
            reprehenderit officiis adipisci consequuntur eius molestias,
            corrupti recusandae corporis, iste pariatur! Ex.
          </p>
        </div>
      </FullWidthBg>
    </div>
  );
}
