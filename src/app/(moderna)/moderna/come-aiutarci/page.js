import style from "./page.module.css";
import Image from "next/image";
// import shiba from "@images/vecteezy_shiba-inu-2.png";

export default function page() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      // className="first-section"
    >
      <h1>Come aiutarci</h1>
      {/* <Image src={shiba} alt="" height={150} /> */}
    </div>
  );
}
