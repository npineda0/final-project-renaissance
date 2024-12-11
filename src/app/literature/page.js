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
          header="Hamlet"
          subheader="1623"
          nested={"/literature/shakespeare"}
        />

        <BasicInfo 
          img="/chaucerCanterbury.png"
          header="Canterbury Tales"
          subheader="1400"
          nested={"/literature/chaucer"}
        />

        <BasicInfo 
          img="/machiavelliPrince.png"
          header="The Prince"
          subheader="1532"
          nested={"/literature/machiavelli"}
        />
      </section>

      <section className={literatureStyles.container}>
        <BasicInfo 
          img="/cervantesDonquixote.png"
          header="Don Quixote"
          subheader="1605"
          nested={"/literature/cervantes"}
        />

        <BasicInfo 
          img="/alighieriDivine.png"
          header="The Divine Comedy"
          subheader="1321"
          nested={"/literature/alighieri"}
        />

        <BasicInfo 
          img="/spenserFaerie.png"
          header="The Faerie Queene"
          subheader="1590"
          nested={"/literature/spenser"}
        />
      </section>
    </main>
  );
}
