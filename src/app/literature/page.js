import literatureStyles from "./literature.module.css";

export default function literature() {
  return (
    <main>
      <h1 className={literatureStyles.header}>Literature</h1>
      <p className={literatureStyles.litDesc}>
        Renaissance literature is characterized by the adoption of a Humanist
        philosophy and the recovery of the classical literature of Antiquity,
        and benefited from the spread of printing in the latter part of the 15th
        century. Here are some of the most notable works during this time:
      </p>
    </main>
  );
}
