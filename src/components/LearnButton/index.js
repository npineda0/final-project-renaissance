import learnStyles from "./learn.module.css";
import Link from "next/link";

export default function Learn({ link }) {
  return (
    <Link href={link}>
      <button className={learnStyles.learnButton}>Learn More!</button>
    </Link>
  );
}
