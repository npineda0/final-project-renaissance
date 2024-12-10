import gobackStyles from "./goback.module.css";
import Link from "next/link";

export default function GoBack({ link }) {
  return (
    <Link href={link}>
      <button className={gobackStyles.backButton}>Go Back</button>
    </Link>
  );
}