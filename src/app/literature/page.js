import literatureStyles from "./literature.module.css";
import BasicInfo from "@/components/BasicInfoLayout";

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

      <section className={literatureStyles.container}>
        <BasicInfo 
          img="/shakespeareHamlet.png"
          header="Shakespeare"
          subheader="1600"
          nested={"/literature/shakespeare"}
        />

        <BasicInfo 
          img="/chaucerCanterbury.png"
          header="Chaucer"
          subheader="1600"
          nested={"/literature/"}
        />

        <BasicInfo 
          img="/machiavelliPrince.png"
          header="Machiavelli"
          subheader="1600"
          nested={"/literature/"}
        />
      </section>

      <section className={literatureStyles.container}>
        <BasicInfo 
          img="/cervantesDonquixote.png"
          header="Cervantes"
          subheader="1600"
          nested={"/literature/"}
        />

        <BasicInfo 
          img="/alighieriDivine.png"
          header="Alighieri"
          subheader="1600"
          nested={"/literature/"}
        />

        <BasicInfo 
          img="/spenserFaerie.png"
          header="Spenser"
          subheader="1600"
          nested={"/literature/"}
        />
      </section>
    </main>
  );
}
