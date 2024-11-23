import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.homeMain}>
      <h1>Renaissance</h1>
      <p>
        The Renaissance was a explosive period for European culture, art,
        religion and more. Generally described as taking place between the 14th
        and 17th centuries, the Renaissance promoted the rediscovery of
        classical philosophy, literature and art.
      </p>
      <img
        src="/primavera-painting.jpeg"
        alt="Painting known as Primavera,believed to have been made around 1482."
      />
    </main>
  );
}
