import artStyles from "./art.module.css";
import Display from "@/components/Display";
import BasicInfo from "@/components/BasicInfoLayout";

export default function Art() {
  return (
    <main className={artStyles.main}>
      <h1>Religious Art and Architecture</h1>
      {/* <p>
        During the 13th and 14th century Religious Art was used in a number of
        ways. Churches were huge patrons of the arts and purchased tremendous
        amounts of art to create awe and respect. Making this art available to
        the public helped many people who could not read the scriptures by
        allowing them to envision the stories and relate to the subjects.
        Churches also hoped to inspire greater devotion to religion and arouse
        more desire for salvation. Early Renaissance artists began using more
        humanistic looking subjects and naturalistic settings to achieve those
        goals. By placing viewers in the scenes with the religious icons, the
        allegories became more relevant to everyday life. Throughout the
        Renaissance artists continued to develop new styles and techniques that
        appealed to and inspired the masses.
      </p> */}
      <section className={artStyles.gallery}>
        <BasicInfo
          img="/creation-of-adam.jpg"
          header="Creation of Adam"
          subheader="1512"
          nested={"none"}
        ></BasicInfo>
        <BasicInfo
          img="/judas-kiss.jpg"
          header="The Kiss of Judas"
          subheader="1306, Giotto di Bondone"
          nested={"none"}
        ></BasicInfo>
        <BasicInfo
          img="/last-supper.jpg"
          header="Last Supper"
          subheader="1498, Leonardo Da Vinci"
          nested={"none"}
        ></BasicInfo>
        <BasicInfo
          img="/madonna.jpg"
          header="Sistine Madonna"
          subheader="1512, Raphael"
          nested={"none"}
        ></BasicInfo>
        <BasicInfo
          img="/venus-birth.jpg"
          header="Creation of Adam"
          subheader="1485, Sandro Botticelli"
          nested={"none"}
        ></BasicInfo>
      </section>
    </main>
  );
}
