"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import FullWidthBg from "./components/FullWidthBg";
import cane_hero_1 from "@images/moderna/cane_hero_1.png";
import cane_hero_2 from "@images/moderna/cane_hero_2.png";
import cane_hero_3 from "@images/moderna/cane_hero_3.png";
import cane_hero_4 from "@images/moderna/cane_hero_4.png";
import blob_1 from "@images/moderna/blob-haikei_1.svg";
import blob_2 from "@images/moderna/blob-haikei_2.svg";
import blob_3 from "@images/moderna/blob-haikei_3.svg";
import blob_4 from "@images/moderna/blob-haikei_4.svg";

// export const metadata = {
//   title: "Home | Canile di Macondo",
//   description: "Benvenuti!",
// };

function getRandomNumber() {
  return Math.floor(Math.random() * 4) + 1;
}

export default function Home() {
  const [randomDog, setRandomDog] = useState(null);
  const [randomBlob, setRandomBlob] = useState(null);

  useEffect(() => {
    const randomNum = getRandomNumber();
    const randomNum2 = getRandomNumber();
    switch (randomNum) {
      case 1:
        setRandomDog(cane_hero_1);
        break;
      case 2:
        setRandomDog(cane_hero_2);
        break;
      case 3:
        setRandomDog(cane_hero_3);
        break;
      case 4:
        setRandomDog(cane_hero_4);
        break;
      default:
        setRandomDog(null);
    }

    switch (randomNum2) {
      case 1:
        setRandomBlob(blob_1);
        break;
      case 2:
        setRandomBlob(blob_2);
        break;
      case 3:
        setRandomBlob(blob_3);
        break;
      case 4:
        setRandomBlob(blob_4);
        break;
      default:
        setRandomBlob(null);
    }
  }, []);
  return (
    <>
      <title>Homepage | Canile di Macondo</title>
      <meta name="description" content="Benvenuti al canile di Macondo!" />
      <section className={styles.heroContainer}>
        <div className={styles.textContainer}>
          <h1>Home</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            velit vel officiis ut repellat ratione dicta? Et vitae neque, fuga
            pariatur, ratione officiis tenetur eveniet odio eum nisi molestias
            soluta!
          </p>
        </div>
        <div className={styles.heroImgContainer}>
          {randomDog && (
            <Image
              src={randomDog}
              alt="foto di un cane"
              priority
              className={styles.caneHero}
            />
          )}
          {randomBlob && (
            <Image
              src={randomBlob}
              alt="foto di un cane"
              className={styles.blob}
            />
          )}
        </div>
      </section>
      <FullWidthBg bgColor="var(--accent-one)">
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
    </>
  );
}
