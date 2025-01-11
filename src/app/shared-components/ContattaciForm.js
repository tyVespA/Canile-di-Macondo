"use client";
import styles from "./ContattaciForm.module.css";
import Button from "./Button";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
import cane3_svg from "@images/cane3_svg.svg";

export default function ContattaciForm() {
  const [state, handleSubmit] = useForm("mvggdwaj");
  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
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
        ></textarea>
        {!state.succeeded ? (
          <Button type="submit" theme="light" paddingInline="60px">
            {state.submitting ? "Invio in corso..." : "Invia"}
          </Button>
        ) : (
          <div className={styles.successo}>
            <Image src={cane3_svg} alt="" />
            <p>
              Il tuo messaggio è stato inviato e risponderemo al più presto.{" "}
              <br />
              Non vediamo l’ora di aiutarti a scoprire di più sul Canile di
              Macondo e i nostri amici a quattro zampe!
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
