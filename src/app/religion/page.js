import relStyles from "./religion.module.css";
import Learn from "@/components/LearnButton";

export default function Religion() {
  return (
    <main className={relStyles.religion}>
      <h1>Religion</h1>
      <div className={relStyles.relContent}>
        <div className={relStyles.r1}>
          <h2>Theology</h2>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Conubia
            suscipit mollis suscipit torquent aliquet ridiculus? Varius ad
            suscipit est ultricies penatibus. Natoque purus nullam velit ligula
            penatibus ultricies nec. Nulla nisl tortor nunc ullamcorper aliquet
            amet. Conubia efficitur lobortis montes ullamcorper pulvinar netus
            accumsan.
          </p>
          <Learn link={"/religion/theology"}></Learn>
        </div>
        <div className={relStyles.r2}>
          <h2>Important Figures</h2>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Conubia
            suscipit mollis suscipit torquent aliquet ridiculus? Varius ad
            suscipit est ultricies penatibus. Natoque purus nullam velit ligula
            penatibus ultricies nec. Nulla nisl tortor nunc ullamcorper aliquet
            amet. Conubia efficitur lobortis montes ullamcorper pulvinar netus
            accumsan.
          </p>
          <Learn link={"/religion/people"}></Learn>
        </div>
        <div className={relStyles.r3}>
          <h2>Philosophy</h2>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Conubia
            suscipit mollis suscipit torquent aliquet ridiculus? Varius ad
            suscipit est ultricies penatibus. Natoque purus nullam velit ligula
            penatibus ultricies nec. Nulla nisl tortor nunc ullamcorper aliquet
            amet. Conubia efficitur lobortis montes ullamcorper pulvinar netus
            accumsan.
          </p>
          <Learn link={"/religion/philosophy"}></Learn>
        </div>
      </div>
    </main>
  );
}
