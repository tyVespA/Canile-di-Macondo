import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import FullWidthBg from "@shared-components/FullWidthBg";
import Button from "@shared-components/Button";
import Counter from "@shared-components/Counter";

export const metadata = {
  title: "Home | Canile di Macondo",
  description: "Benvenuti!" /* change */,
};

export default function Home() {
  return (
    <div>
      <section className={styles.heroContainer}>
        <div className={styles.textContainer}>
          <h1>Home</h1>
          <Counter
            target="200"
            duration="1000"
            fontSize="35px"
            afterNumber="+"
          />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            velit vel officiis ut repellat ratione dicta? Et vitae neque, fuga
            pariatur, ratione officiis tenetur eveniet odio eum nisi molestias
            soluta!
          </p>
          <Button theme="accent-two" paddingInline="40px">
            Scopri
          </Button>
        </div>
        <div className={styles.heroImage}>
          {/* <Image src={cane_hero_1} alt="" /> */}
        </div>
      </section>
      {/* <FullWidthBg bgColor="var(--accent-one)"> */}
      <section className={styles.section2}>
        <h2>section2</h2>

        <Counter target="200" duration="1000" fontSize="35px" afterNumber="+" />
      </section>
      {/* </FullWidthBg> */}
    </div>
  );
}
