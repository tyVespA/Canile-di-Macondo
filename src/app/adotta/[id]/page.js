import { db } from "../../../../public/db";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const animal = db.find((item) => item.id === params.id);
  return {
    title: animal?.nome || "Animal Not Found",
  };
}

export default function Page({ params }) {
  const animal = db.find((item) => item.id === params.id);

  if (!animal) {
    notFound();
  }

  return (
    <div>
      <h1>{animal.nome}</h1>
      <img src={animal.img1} alt={animal.nome} />
      <p>Taglia: {animal.taglia}</p>
      <p>Sesso: {animal.sesso}</p>
      <p>Anno di nascita: {animal.anno_di_nascita}</p>
      <p>{animal.descrizione}</p>
    </div>
  );
}

export async function generateStaticParams() {
  return db.map((animal) => ({
    id: animal.id,
  }));
}
