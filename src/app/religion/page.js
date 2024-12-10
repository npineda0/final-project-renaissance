import relStyles from "./religion.module.css";
import Learn from "@/components/LearnButton";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Religion() {
  return (
    <main className={relStyles.religion}>
      <h1>Religion</h1>
      <div className={relStyles.relContent}>
        <SignedIn>
          <div className={relStyles.r1}>
            <h2>Religious Architecture and Art</h2>
            <p>
              During the 13th and 14th century Religious Art was used in a
              number of ways. Churches were huge patrons of the arts and
              purchased tremendous amounts of art to create awe and respect.
              Making this art available to the public helped many people who
              could not read the scriptures by allowing them to envision the
              stories and relate to the subjects. Churches also hoped to inspire
              greater devotion to religion and arouse more desire for salvation.
            </p>
            <Learn link={"/religion/art"}></Learn>
          </div>
        </SignedIn>
        <div className={relStyles.r2}>
          <h2>Important Figures</h2>
          <p>
            Throughout the Renaissance, there were lots of important people that
            affect religion to this day. Some of the most important are Martin
            Luther, John Calvin, Nicolas Copernicus, and Pope Alexander VI.
          </p>
          <Learn link={"/religion/people"}></Learn>
        </div>
        <SignedIn>
          <div className={relStyles.r3}>
            <h2>Philosophy and Religion</h2>
            <p>
              A huge philosophical movement came about during the Renaissance
              known as Humanism. Humanism focuses on individuals and their
              achievements. Humanist theologians started focusing on Ancient
              Texts and critical thinking to eventually reevaluate their
              religious beliefs and practices. Important humanist theologians
              include Martin Luther, John Calvin, Erasmus, and Thomas More.
            </p>
            <Learn link={"/religion/philosophy"}></Learn>
          </div>
        </SignedIn>
      </div>
    </main>
  );
}
