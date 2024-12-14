import artStyles from "./art.module.css";
import Display from "@/components/Display";
import BasicInfo from "@/components/BasicInfoLayout";

export default function Art() {
  return (
    <main className={artStyles.main}>
      <h1>Religious Art and Architecture</h1>
      <section className={artStyles.gallery}>
        <section className={artStyles.sh1}>
          <img src="/creation-of-adam.jpg" height={200} />
          <p className={artStyles.header}>Creation of Adam</p>
          <p>1512, Michelangelo Buonarroti</p>
        </section>
        <section className={artStyles.sh1}>
          <img src="/judas-kiss.jpg" height={200} />
          <p className={artStyles.header}>The Kiss of Judas</p>
          <p>1306, Giotto di Bondone</p>
        </section>
        <section className={artStyles.sh1}>
          <img src="/last-supper.jpg" height={200} />
          <p className={artStyles.header}>Last Supper</p>
          <p>1498, Leonardo Da Vinci</p>
        </section>

        <section className={artStyles.sh1}>
          <img src="/madonna.jpg" height={200} />
          <p className={artStyles.header}>Sistine Madonna</p>
          <p>1512, Raphael</p>
        </section>
        <section className={artStyles.sh1}>
          <img src="/venus-birth.jpg" height={200} />
          <p className={artStyles.header}>The Birth of Venus</p>
          <p>1485, Sandro Botticelli</p>
        </section>
      </section>
    </main>
  );
}
