import artsStyles from "./arts.module.css";
import Learn from "@/components/LearnButton";

export default function arts() {
  return (
    <main className={artsStyles.arts}>
      <h1>Fine Arts</h1>
      <p className={artsStyles.p}>
        Renaissance art (1350-1620) is the painting, sculpture, and decorative
        arts of the period of European history known as the Renaissance, which
        emerged as a distinct style in Italy in about AD 1400, in parallel with
        developments which occurred in philosophy, literature, music, science,
        and technology.
      </p>

      <div className={artsStyles.content}>
        <div className={artsStyles.box}>
          <h2>Sculptures</h2>
          <img src="/sculpture-1.jpg" />
          <p>
            Renaissance sculptors made use of all kinds of materials, mainly
            marble, bronze and wood, to create life like sculptures that
            explored religion and depicted people more realistically.
          </p>
          <Learn link={"/arts/sculptures"}></Learn>
        </div>
        <div className={artsStyles.box}>
          <h2>Decorative</h2>
          <img src="/The Crossing of the Granicus, from The Story of....jpg" />
          <p>Items like furniture, ceramics, or textiles.</p>
          <Learn link={"/arts/deco"}></Learn>
        </div>
        <div className={artsStyles.box}>
          <h2>Paintings</h2>
          <img src="/venus-birth.jpg" />
          <p>
            Often depict figures with accurate anatomy, natural landscapes, and
            use techniques like perspective to create a sense of depth, all
            while exploring themes beyond strictly religious subjects.
          </p>
          <Learn link={"/arts/paintings"}></Learn>
        </div>
      </div>
    </main>
  );
}
