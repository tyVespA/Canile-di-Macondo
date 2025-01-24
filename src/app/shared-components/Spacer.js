import styles from "./Spacer.module.css";
import { PawPrint, Bone, Heart } from "@phosphor-icons/react/dist/ssr";

const icons = {
  PawPrint,
  Bone,
  Heart,
};

export default function Spacer({ marginBlock = "75px", icon = "PawPrint" }) {
  const IconComponent = icons[icon];

  return (
    <div
      className={
        IconComponent === PawPrint ? styles.spacerRotated : styles.spacer
      }
      style={{ marginBlock }}
    >
      <IconComponent size={24} weight="fill" fill="#9c6644" />
      <IconComponent size={24} weight="fill" fill="#9c6644" />
      <IconComponent size={24} weight="fill" fill="#9c6644" />
    </div>
  );
}
